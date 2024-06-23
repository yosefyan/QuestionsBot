import React, { useState } from "react";
import axios from "axios";
import { centerItem, titleStyles } from "../utils/utils";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [sentences, setSentences] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5174/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("response sentence", response.data);
      setSentences(response.data.sentences);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <form className="w-[70%]" onSubmit={handleSubmit}>
        <input
          required
          onChange={handleFileChange}
          type="file"
          accept=".pdf,.docx,.doc"
          className={`${centerItem()} gap-4 w-full p-4 rounded-[20px] bg-green-500/30 text-white/40 hover:scale-95 transition-all ${titleStyles(
            "text-2xl"
          )}`}
        />
        <button className="text-white" type="submit">
          Upload
        </button>
      </form>
    </>
  );
};

export default FileUpload;
