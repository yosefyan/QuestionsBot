import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema({
  question: String,
  subjectId: mongoose.Schema.Types.ObjectId
});

const Questions = mongoose.model("questions", questionsSchema);

export default Questions;
