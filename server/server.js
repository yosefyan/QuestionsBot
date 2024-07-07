import express from "express";
import * as url from "url";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import fs from "fs";
import path from "path";
import nlp from "compromise";
import pdfParse from "pdf-parse";
import { parse } from "csv-parse/sync";
import readXlsxFile from "read-excel-file/node";
import cors from "cors";
import Fuse from "fuse.js";
import mongoose from "mongoose";
import addQuestion from "./controllers/add/addQuestion.js";
import addSubject from "./controllers/add/addSubject.js";

const app = express();
const port = 5174;
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

let sentences = [];

const processFiles = async () => {
  const files = fs.readdirSync(uploadsDir);

  for (const fileName of files) {
    const filePath = path.join(uploadsDir, fileName);
    let content = "";

    if (fileName.endsWith(".csv")) {
      const csvContent = fs.readFileSync(filePath, "utf8");
      const data = parse(csvContent, { columns: false, trim: true });
      content = data.map((row) => row.join(" ")).join(" ");
    } else if (fileName.endsWith(".pdf")) {
      const pdfContent = await pdfParse(fs.readFileSync(filePath), {
        encoding: "utf8",
      });
      content = pdfContent.text;
    } else if (fileName.endsWith(".xlsx") || fileName.endsWith(".xls")) {
      const rows = await readXlsxFile(fs.createReadStream(filePath));
      content = rows.map((row) => row.join(" ")).join(" ");
    } else {
      content = fs.readFileSync(filePath, "utf8");
    }
    const doc = nlp(content);
    sentences.push(...doc.sentences().out("array"));
  }
};

processFiles().catch((err) => {
  console.error("שגיאה לאחר קריאת הקבצים", err);
});

app.post("/upload", async (req, res) => {
  const file = req.files.file;
  const filePath = path.join(uploadsDir, file.name);

  fs.writeFileSync(filePath, file.data);

  await processFiles();

  res.json({ message: "הקובץ הועלה ונסרק בהצלחה!" });
});

app.post("/userQuestion", addQuestion);
app.post("/userSubject", addSubject);

app.post("/botQuestion", (req, res) => {
  const question = req.body.question.toLowerCase();
  const doc = nlp(question);

  const stopwords = new Set(["the", "a", "an", "is", "in", "on"]);

  const words = doc
    .text()
    .split(/\s+/)
    .filter((word) => !stopwords.has(word.toLowerCase()));

  const foundSentences = findAnswer(words, sentences);
  console.log("found", foundSentences);
  if (foundSentences.length > 0) {
    res.json({ answers: foundSentences });
  } else {
    res.json({ answer: "הבוט סרק את כל הקבצים ולא מצא תשובה." });
  }
});

app.get("/files", (req, res) => {
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to list files" });
    }
    res.json(files);
  });
});

app.delete("/files/:fileName", (req, res) => {
  const filePath = path.join(uploadsDir, req.params.fileName);

  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to delete file" });
    }
    res.json({ deletedFile: req.params.fileName });
  });
});

const findAnswer = (words, sentences) => {
  const options = {
    keys: ["sentence"],
    includeMatches: true,
    threshold: 0.5,
  };

  const fuse = new Fuse(sentences, options);
  const searchResults = fuse.search(words.join(" "));

  const matchingSentences = searchResults.map((result) => result.item);
  const uniqueMatches = [...new Set(matchingSentences)];
  return uniqueMatches;
};

const connectDBServer = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/");
    app.listen(port, () => {
      console.log(`DB - Connected`);
      console.log(`Server - Running | Port: ${port}`);
    });
  } catch (error) {}
};

connectDBServer();
