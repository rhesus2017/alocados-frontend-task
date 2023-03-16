import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HOME_URL, HISTORY_URL } from "./constants/URLConstants";
import { GlobalStyle } from "./global-style";
import Home from "./pages/Home/Home";
import Histroy from "./pages/History/Histroy";

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={HOME_URL} element={<Home />} />
          <Route path={HISTORY_URL} element={<Histroy />} />
          <Route path="*" element={<Navigate replace to={HOME_URL} />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
