import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { EXCHANGE_URL, HISTORY_URL } from "./constants/URLConstants";
import { GlobalStyle } from "./global-style";
import Exchange from "./pages/Exchange/Exchange";
import Histroy from "./pages/History/Histroy";

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={EXCHANGE_URL} element={<Exchange />} />
          <Route path={HISTORY_URL} element={<Histroy />} />
          <Route path="*" element={<Navigate replace to={EXCHANGE_URL} />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
