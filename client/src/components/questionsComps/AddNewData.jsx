import React, { useState } from "react";
import { centerItem, titleStyles } from "../../utils/utils";
import axios from "axios";
import toastifyHelper from "../../helpers/toastifyHelper";
import getDataFromServer from "../../hooks/getDataFromDB";
import { greenButton, inputStyle } from "../../constants/colorsData";

const AddNewData = ({ shouldExtend, endpoint, handleExtendedPart }) => {
  const [extendedPart, setExtendedPart] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const handleAdd = async () => {
    try {
      setExtendedPart(true);
      await axios.post(`http://localhost:5174/${endpoint}`);
      getDataFromServer({ endpoint });
      toastifyHelper({
        status: "success",
        message: `ה-${endpoint} הוסף בהצלחה!`,
      });
    } catch (error) {}
  };
  return (
    <div
      className={`${
        shouldExtend && extendedPart ? "w-[40%]" : "w-0"
      } bg-black h-full absolute left-0 transition-all ${centerItem()} flex-col`}
    >
      <button
        className={`w-full h-[10%] bg-gray-500/10 text-white text-3xl`}
        onClick={() => handleExtendedPart(false)}
      >
        X
      </button>
      <div className={`w-[80%] h-[60%] ${centerItem('justify-evenly')} flex-col`}>
        <p className={`${titleStyles('text-3xl')} text-white`}>{endpoint === 'userSubject' ? 'נושאי תמיכה' : 'שאלות'}</p>
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className={inputStyle}
          type="text"
        />
        <button
          onClick={handleAdd}
          className={`${greenButton} bg-green-500/35`}
        >
          הוספה
        </button>
      </div>
    </div>
  );
};

export default AddNewData;
