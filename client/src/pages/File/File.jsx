import React, { useEffect, useState } from "react";
import { centerItem, titleStyles } from "../../utils/utils";
import NavBar from "../../components/NavBar";
import home from "../../constants/home";
import TitleButtons from "../../components/TitleButtons";
import axios from "axios";
import toastifyHelper from "../../helpers/toastifyHelper";

const File = () => {
  const [fileNames, setFileNames] = useState([]);
  const [filesTrigger, setFilesTrigger] = useState(false);

  const handleFileName = async (fileName) => {
    try {
      await axios.delete(`http://localhost:5174/files/${fileName}`);
      setFilesTrigger((prev) => !prev);
      toastifyHelper({
        status: 200,
        message: `הקובץ ${fileName} נמחק בהצלחה!`,
      });
    } catch (error) {}
  };

  const handleTriggerFiles = () => setFilesTrigger((prev) => !prev);

  useEffect(() => {
    const getFileNames = async () => {
      try {
        const { data } = await axios.get("http://localhost:5174/files");
        setFileNames(data);
      } catch (error) {}
    };
    getFileNames();
  }, [filesTrigger]);
  return (
    <div className={`bg-black w-full h-[100vh] ${centerItem()}`}>
      <NavBar
        routeData={home.navigateRoutes.rest}
        data={home.navBar.rest}
        shouldVertical
      />
      <div className={`w-[90%] h-full`}>
        <TitleButtons
          handleTriggerFiles={handleTriggerFiles}
          handleFileName={handleFileName}
          shouldEdit
          icon={"FaFileShield"}
          needGenerated={""}
          title={`ניהול קבצי הלומדה של הבוט`}
          buttons={fileNames}
          subText={"כאן תוכלו לראות, להוסיף ולמחוק קבצים אשר הבוט קורא."}
        />
      </div>
    </div>
  );
};

export default File;
