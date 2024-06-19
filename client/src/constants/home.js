import ReadyQuestions from "../pages/Home/ButtonTypes/ReadyQuestions";
import AskQuestion from "../pages/Home/ButtonTypes/AskQuestion";

const home = {
  navBar: ["FaQuestion", "IoMdSettings"],
  titles: {
    h3: `צוות מנו"ר, איך אפשר`,
    h1: "לעזור?",
  },
  genericButtons: {
    titles: ["שאלו אותי שאלה", "ניהול קבצים"],
    icons: ["FaWandMagicSparkles", "FaUpload"],
  },
  questionsButtons: ["שאלות מוכנות", "שאילת שאלה"],
  lines: Array(8).fill(""),
  correspondingDialog: [ReadyQuestions, AskQuestion],
  circles: {
    icons: ["RiNumber1", "RiNumber2", "RiNumber3"],
    titles: ["בוחרים קטגורייה/ות", "בוחרים שאלה/ות", "מקבלים תשובה/ות"],
  },
  readyQuestions: {
    categories: ["נושא אקראי", `נוש"א`, "דוגמה", "עוד אחד", "משפט מסוים"],
    questions: [
      ["שאלה ראשונה", "שאלה שנייה"],
      ["שאלה שלישית", "שאלה רביעית"],
      ["שאלה חמישית", "שאלה שישית"],
      ["שאלה שביעית", "שאלה שמינית"],
      ["שאלה תשיעית", "שאלה עשירית"],
    ],
  },
};

export default home;
