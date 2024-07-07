import mongoose from "mongoose";

const subjectsSchema = new mongoose.Schema({
  subject: String,
});

const Subjects = mongoose.model("subjects", subjectsSchema);

export default Subjects;
