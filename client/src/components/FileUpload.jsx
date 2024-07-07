import React, { useState } from "react";
import axios from "axios";
import { centerItem, titleStyles } from "../utils/utils";
import toastifyHelper from "../helpers/toastifyHelper";

const FileUpload = ({ handleTriggerFiles }) => {
  const [file, setFile] = useState("");
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
      handleTriggerFiles();
      setSentences(response.data.sentences);
      setFile("");
      toastifyHelper({ status: 200, message: `הקובץ ${file} נמחק בהצלחה!` });
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <form className="w-[70%] hover:scale-95 transition-all" onSubmit={handleSubmit}>
        <input
          key={file}
          required
          onChange={handleFileChange}
          type="file"
          accept=".pdf,.docx,.doc"
          className={`${centerItem()} gap-4 w-full p-4 rounded-t-[20px] bg-green-500/30 text-white/40 ${titleStyles(
            "text-2xl"
          )}`}
        />
        <button
          className={`bg-green-500/70 text-white w-full rounded-b-full p-4 ${titleStyles(
            "text-1xl"
          )}`}
          type="submit"
        >
          העלאה
        </button>
      </form>
    </>
  );
};

export default FileUpload;
