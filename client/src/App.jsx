import { Provider } from "react-redux";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import store from "./store/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="*" exact Component={NotFound} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
