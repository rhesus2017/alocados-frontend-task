import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { EXCHANGE_URL, HISTORY_URL } from "../constants/URLConstants";
import Button from "./Button";
import alocadosLogo from "./../assets/svg/alocados_logo.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HeaderStyled>
      <img src={alocadosLogo} alt="alocados logo" />
      <div className="buttonWrap">
        <Button
          type="text"
          active={location.pathname === EXCHANGE_URL}
          text="환전하기"
          onClick={() => navigate(EXCHANGE_URL)}
        />
        <Button
          type="text"
          active={location.pathname === HISTORY_URL}
          text="거래내역"
          onClick={() => navigate(HISTORY_URL)}
        />
      </div>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;

  .buttonWrap {
    display: flex;
    gap: 24px;
  }
`;
