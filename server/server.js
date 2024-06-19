import express from "express";
import multer from "multer";
import fs from "fs";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { InferenceSession, Tensor } from "onnxruntime-node";

const app = express();
const port = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

let session;

async function loadModel() {
  const modelPath = path.join(__dirname, "models", "model.onnx");
  session = await InferenceSession.create(modelPath);
}

loadModel();

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

app.use(express.json());

app.post("/api/answer", async (req, res) => {
  const question = req.body.question;
  const uploadsFolder = path.join(__dirname, "uploads");
  let context = "";

  const files = fs.readdirSync(uploadsFolder);

  files.forEach((file) => {
    const filePath = path.join(uploadsFolder, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    context += fileContent + " ";
  });

  const tokenizer = new AutoTokenizer({ modelPath: "path_to_tokenizer_model" });
  const tokens = tokenizer.encode(question, context);
  const inputIds = tokens.input_ids;
  const attentionMask = tokens.attention_mask;

  const inputs = {
    input_ids: new Tensor("int64", inputIds, [1, inputIds.length]),
    attention_mask: new Tensor("int64", attentionMask, [
      1,
      attentionMask.length,
    ]),
  };

  try {
    const results = await session.run(inputs);
    const answer = results.answer;
    res.json({ answer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error processing question" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
