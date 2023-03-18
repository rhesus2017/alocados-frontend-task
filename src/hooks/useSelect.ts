import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  coinWalletsState,
  openSelectsState,
  selectedCoinsState,
} from "../recoil/atoms";

const useSelect = () => {
  const coinWallets = useRecoilValue(coinWalletsState);
  const setSelectedCoins = useSetRecoilState(selectedCoinsState);
  const setOpenSelects = useSetRecoilState(openSelectsState);

  const onSelect = (key: string, type: string) => {
    setSelectedCoins((state) => ({
      ...state,
      [type]: {
        ...coinWallets[key],
        input:
          type === "from" && state.from.key !== key ? "0" : state[type].input,
      },
    }));
  };

  const onToggle = (type: string) => {
    setOpenSelects((state) => (state !== type ? type : ""));
  };

  return { onSelect, onToggle };
};

export default useSelect;
