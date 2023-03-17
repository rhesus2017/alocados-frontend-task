import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HOME_URL, HISTORY_URL } from "../constants/URLConstants";
import Button from "./Button";
import Icon from "./Icon";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <HeaderStyled>
      <Icon width={168} height={40} iconKey="alocados" />
      <div className="buttonWrap">
        <Button
          type="text"
          label="환전하기"
          active={location.pathname === HOME_URL}
          onClick={() => navigate(HOME_URL)}
        />
        <Button
          type="text"
          label="거래내역"
          active={location.pathname === HISTORY_URL}
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

  > .buttonWrap {
    display: flex;
    gap: 24px;
  }
`;
