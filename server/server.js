import express from "express";
import * as url from "url";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import fs from "fs";
import path, { dirname } from "path";
import nlp from "compromise";
import { NlpManager } from "node-nlp";
import SearchIndex from "search-index";
import pdfParse from "pdf-parse";
import { parse } from "csv-parse";
import readXlsxFile from "read-excel-file/node";
import cors from "cors";

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

let documents = [];
const manager = new NlpManager({ languages: ["en"] });
let index;

async function setupSearchIndex() {
  index = await SearchIndex({ name: "file-index" });
}

setupSearchIndex();

// Endpoint to upload and process files
app.post("/upload", async (req, res) => {
  const file = req.files.file;
  const filePath = path.join(uploadsDir, file.name);

  // Save the file
  fs.writeFileSync(filePath, file.data);

  let content = "";

  // Determine the file type and parse accordingly
  if (file.mimetype === "text/csv") {
    content = fs.readFileSync(filePath, "utf8");
    parse(content, (err, data) => {
      if (err) throw err;
      content = data.map((row) => row.join(" ")).join(" ");
    });
  } else if (file.mimetype === "application/pdf") {
    content = await pdfParse(fs.readFileSync(filePath)).then(
      (data) => data.text
    );
  } else if (file.mimetype.includes("excel")) {
    await readXlsxFile(fs.createReadStream(filePath)).then((rows) => {
      content = rows.map((row) => row.join(" ")).join(" ");
    });
  } else {
    // Assume plain text
    content = fs.readFileSync(filePath, "utf8");
  }

  // Analyze the content
  const doc = nlp(content);
  const sentences = doc.sentences().out("array");

  // Add document to index and memory
  const document = { id: file.name, content: sentences.join(" ") };
  documents.push(document);
  await index.PUT([document]);

  res.json({ sentences });
});

// Endpoint to answer questions based on uploaded files
app.post("/question", async (req, res) => {
  const question = req.body.question;
  const results = await index.QUERY({ AND: question.split(" ") });
  console.log("results server", results);
  if (results.RESULT_LENGTH === 0) {
    res.json({ answer: "No relevant information found." });
    return;
  }

  const bestMatch = results[0] || results.RESULT;
  const content = bestMatch.document.content;

  manager.addDocument("en", question, "best.answer");
  manager.addAnswer("en", "best.answer", content);
  await manager.train();
  const response = await manager.process("en", question);

  res.json({ answer: response.answer });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
