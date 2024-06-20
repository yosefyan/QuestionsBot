import React from "react";
import { centerItem, titleStyles } from "../../utils/utils";
import NavBar from "../../components/NavBar";
import home from "../../constants/home";
import TitleButtons from "../../components/TitleButtons";

const File = () => {
  return (
    <div className={`bg-black w-full h-[100vh] ${centerItem()}`}>
      <NavBar
        routeData={home.navigateRoutes.rest}
        data={home.navBar.rest}
        shouldVertical
      />
      <div className={`w-[90%] h-full`}>
        <TitleButtons
          shouldEdit
          icon={"FaFileShield"}
          needGenerated={""}
          title={`ניהול קבצי הלומדה של הבוט`}
          buttons={[
            "שם של קובץ לדוגמה",
            "עוד שם של קובץ",
            "קובץ חשוב לפעולות אופרטיביות",
            "קובץ מתגים",
          ]}
          subText={"כאן תוכלו לראות, להוסיף ולמחוק קבצים אשר הבוט קורא."}
          />
      </div>
    </div>
  );
};

export default File;
