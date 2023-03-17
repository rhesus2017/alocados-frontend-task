import styled, { css } from "styled-components";
import Icon from "../../../components/Icon";
import { CoinWalletType } from "../../../type/atom";
import { useRecoilState } from "recoil";
import { openSelect } from "../../../recoil/atoms";

interface Props {
  type: string;
  name: string;
  iconKey: string;
  options: CoinWalletType[];
  onSelect: (key: string) => void;
}

const Select = (props: Props) => {
  const { type, name, iconKey, options, onSelect } = props;
  const [getOpenSelect, setOpenSelect] = useRecoilState(openSelect);

  const handleSelectedClick = () => {
    setOpenSelect((state) => (state === type ? "" : type));
  };

  const handleOptionClick = (key: string) => {
    onSelect(key);
    setOpenSelect("");
  };

  return (
    <SelectStyled getOpenSelect={getOpenSelect} type={type} name={name}>
      <div className="selected" onClick={handleSelectedClick}>
        {name && <Icon width={24} height={24} iconKey={iconKey} />}
        <span className="name">{name || "Select Coin"}</span>
        <Icon width={24} height={24} iconKey="selectArrow" />
      </div>
      <div className="options">
        {options.map((item) => {
          return (
            <div
              key={item.key}
              className="option"
              onClick={() => handleOptionClick(item.key)}
            >
              <Icon width={24} height={24} iconKey={item.key} />
              <span className="name">{item.name}</span>
            </div>
          );
        })}
      </div>
    </SelectStyled>
  );
};

export default Select;

const SelectStyled = styled.div<{
  getOpenSelect: string;
  type: string;
  name: string;
}>`
  width: 147px;
  height: 100%;
  background: #fafbfc;
  border-radius: 12px;
  cursor: pointer;
  position: relative;

  .selected {
    width: 100%;
    height: 100%;
    padding: 0 13px;
    display: flex;
    align-items: center;

    .name {
      font-family: "Poppins";
      font-weight: 400;
      font-size: 14px;
      line-height: 178%;
      margin-left: 3px;
      flex-grow: 1;

      ${(props) =>
        !props.name &&
        css`
          font-family: "Pretendard";
          font-weight: 500;
          color: #aaa;
          padding-left: 6px;
        `}
    }
  }

  .options {
    width: 147px;
    padding-top: 12px;
    background: #fafbfc;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    position: absolute;
    top: 44px;
    left: 0;
    z-index: 1;
    overflow: hidden;

    .option {
      width: 100%;
      height: 56px;
      padding: 0 13px;
      display: flex;
      align-items: center;
      border-top: 1px solid #efefef;

      &:hover {
        transition: 0.05s;
        background: #ccc;
      }

      .name {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 14px;
        line-height: 178%;
        margin-left: 3px;
      }
    }

    ${(props) =>
      props.getOpenSelect !== props.type &&
      css`
        display: none;
      `}
  }
`;
