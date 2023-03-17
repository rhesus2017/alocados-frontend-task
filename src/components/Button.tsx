import styled, { css } from "styled-components";

interface Props {
  type: "primary" | "text";
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const Button = (props: Props) => {
  const { type, label, active = false, disabled = false, onClick } = props;

  return (
    <ButtonStyled
      buttonType={type}
      active={active}
      disabled={disabled}
      onClick={onClick}
    >
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

  &:disabled {
    background: #e0e2e8;
    color: #a9b0c1;
    cursor: default;
  }

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
