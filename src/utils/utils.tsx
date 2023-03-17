import { CoinWalletsType, SelectedCoinsType } from "../type/atom";
import Big from "big.js";

export const numberFormat = (value: string) => {
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
};

export const getFromValue = (value: string) => {
  value = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");

  if (!value.includes(".") && value[0] === "0" && value[1])
    value = value.substring(1);
  if (value === ".") value = "0.";
  if (value.includes(".") && value.split(".")[1].length >= 10) {
    value = value.split(".")[0] + "." + value.split(".")[1].slice(0, 10);
  }

  return value;
};

export const getToValue = (getSelectedCoin: SelectedCoinsType) => {
  const fromCoinKey = getSelectedCoin.from.key;
  const toCoinKey = getSelectedCoin.to.key;
  let value = getSelectedCoin.from.input;

  if (value === "") {
    return "0";
  } else if (fromCoinKey === "solana" && toCoinKey === "ethereum") {
    value = Big(getSelectedCoin.from.input).div(100).toString();
  } else if (fromCoinKey === "solana" && toCoinKey === "bnb") {
    value = Big(getSelectedCoin.from.input).div(2).toString();
  } else if (fromCoinKey === "ethereum" && toCoinKey === "solana") {
    value = Big(getSelectedCoin.from.input).times(100).toString();
  } else if (fromCoinKey === "ethereum" && toCoinKey === "bnb") {
    value = Big(getSelectedCoin.from.input).times(50).toString();
  } else if (fromCoinKey === "bnb" && toCoinKey === "solana") {
    value = Big(getSelectedCoin.from.input).times(2).toString();
  } else if (fromCoinKey === "bnb" && toCoinKey === "ethereum") {
    value = Big(getSelectedCoin.from.input).div(50).toString();
  }

  return value;
};
