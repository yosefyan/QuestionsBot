import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Question from "./pages/Question/Question";
import File from "./pages/File/File";
import Faq from "./pages/Faq/Faq";
import store from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/question" Component={Question} />
          <Route path="/file" Component={File} />
          <Route path="/faq" Component={Faq} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
