import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HOME_URL, HISTORY_URL } from "../constants/URLConstants";
import Button from "./Button";
import alocados from "./../assets/svg/alocados.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HeaderStyled>
      <div className="img">
        <img src={alocados} alt="alocados" />
      </div>
      <div className="buttonWrap">
        <Button
          type="text"
          active={location.pathname === HOME_URL}
          text="환전하기"
          onClick={() => navigate(HOME_URL)}
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

  > .img {
    width: 168px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttonWrap {
    display: flex;
    gap: 24px;
  }
`;
