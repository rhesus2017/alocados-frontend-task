import { useRecoilValue } from "recoil";
import { coinWalletsState, selectedCoinsState } from "../recoil/atoms";
import { getDivideResult, getTimesResult } from "../utils/utils";

const useTransformValue = () => {
  const coinWallets = useRecoilValue(coinWalletsState);
  const selectedCoins = useRecoilValue(selectedCoinsState);

  const getFromValue = (value: string) => {
    value = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");

    if (!value.includes(".") && value[0] === "0" && value[1]) {
      value = value.substring(1);
    }

    if (value === ".") value = "0.";

    if (value.includes(".") && value.split(".")[1].length >= 10) {
      value = value.split(".")[0] + "." + value.split(".")[1].slice(0, 10);
    }

    if (Number(value) > Number(coinWallets[selectedCoins.from.key].quantity)) {
      value = coinWallets[selectedCoins.from.key].quantity;
    }

    return value;
  };

  const getToValue = (value: string) => {
    const fromCoinKey = selectedCoins.from.key;
    const toCoinKey = selectedCoins.to.key;

    if (fromCoinKey === "solana" && toCoinKey === "ethereum") {
      value = value ? getDivideResult(value, "100") : value;
    } else if (fromCoinKey === "solana" && toCoinKey === "bnb") {
      value = value ? getDivideResult(value, "2") : value;
    } else if (fromCoinKey === "ethereum" && toCoinKey === "solana") {
      value = value ? getTimesResult(value, "100") : value;
    } else if (fromCoinKey === "ethereum" && toCoinKey === "bnb") {
      value = value ? getTimesResult(value, "50") : value;
    } else if (fromCoinKey === "bnb" && toCoinKey === "solana") {
      value = value ? getTimesResult(value, "2") : value;
    } else if (fromCoinKey === "bnb" && toCoinKey === "ethereum") {
      value = value ? getDivideResult(value, "50") : value;
    } else if (value === "") {
      return "0";
    }

    return value;
  };

  return { getFromValue, getToValue };
};

export default useTransformValue;
