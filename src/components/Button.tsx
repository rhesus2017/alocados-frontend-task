import styled, { css } from "styled-components";

interface Props {
  type: "primary" | "text";
  active?: boolean;
  label: string;
  onClick: () => void;
}

const Button = (props: Props) => {
  const { type, active = false, label, onClick } = props;

  return (
    <ButtonStyled buttonType={type} active={active} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button<{
  buttonType: "primary" | "text";
  active: boolean;
}>`
  height: 56px;
  border-radius: 12px;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${(props) =>
    props.buttonType === "primary"
      ? css`
          width: 100%;
          color: #fff;
          background: rgba(93, 40, 242, 1);
        `
      : css`
          width: 90px;
          color: #404e71;
          background: none;
        `}

  ${(props) =>
    props.active &&
    css`
      background: rgba(93, 40, 242, 0.12);
      color: rgba(93, 40, 242, 1);
    `}
`;
