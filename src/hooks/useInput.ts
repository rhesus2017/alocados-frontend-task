import { useRecoilState } from "recoil";
import { selectedCoinsState } from "../recoil/atoms";
import useTransformValue from "./useTransformValue";

const useInput = () => {
  const [selectedCoins, setSelectedCoins] = useRecoilState(selectedCoinsState);
  const { getFromValue, getToValue } = useTransformValue();

  const onChange = (value: string) => {
    if (!selectedCoins.from.key || !selectedCoins.to.key) return;
    if (value.split(".").length > 2 || isNaN(Number(value))) return;

    setSelectedCoins((state) => ({
      ...state,
      from: {
        ...state.from,
        input: getFromValue(value),
      },
      to: {
        ...state.to,
        input: getToValue(getFromValue(value)),
      },
    }));
  };

  return { onChange };
};

export default useInput;
