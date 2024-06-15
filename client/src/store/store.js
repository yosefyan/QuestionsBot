import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./Dialogs/reducers/dialogsReducer";

export default configureStore({
  reducer: { dialogsReducer },
});
