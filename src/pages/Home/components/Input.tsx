import styled, { css } from "styled-components";

interface Props {
  type: string;
  value: string;
  onChange: (value: string) => void;
}

const Input = (props: Props) => {
  const { type, value, onChange } = props;
  const isFrom = type === "from";

  return (
    <InputStyled isFrom={isFrom}>
      {isFrom && <p className="label">전환 수량</p>}
      <input
        type="text"
        value={value}
        readOnly={!isFrom}
        placeholder="전환 수량을 입력해주세요."
        onChange={(event) => onChange(event.target.value)}
      />
    </InputStyled>
  );
};

export default Input;

const InputStyled = styled.div<{ isFrom: boolean }>`
  flex-grow: 1;
  height: 100%;
  border-radius: 12px;

  .label {
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
    color: #546182;
  }

  input {
    background: transparent;
    width: 100%;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 18px;
    color: #404e71;

    &::placeholder {
      color: #ddd;
    }
  }

  ${(props) =>
    props.isFrom
      ? css`
          padding: 10px 14px;
          background: #fafbfc;

          input {
            height: 24px;
          }
        `
      : css`
          padding: 12px 14px;

          input {
            height: 100%;
          }
        `}
`;
