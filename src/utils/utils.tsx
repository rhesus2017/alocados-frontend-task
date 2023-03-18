import { SelectedCoinsType } from "../type/atom";
import Big from "big.js";

export const numberFormat = (value: string) => {
  if (value.includes(".")) {
    let valueArr = value.split(".");
    value = valueArr[0] + "." + valueArr[1].slice(0, 2);
  }

  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return value;
};

export const getFromValue = (value: string, coinWalletsQuantity: string) => {
  value = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");

  if (!value.includes(".") && value[0] === "0" && value[1]) {
    value = value.substring(1);
  }

  if (value === ".") value = "0.";

  if (value.includes(".") && value.split(".")[1].length >= 10) {
    value = value.split(".")[0] + "." + value.split(".")[1].slice(0, 10);
  }

  if (Number(value) > Number(coinWalletsQuantity)) {
    value = coinWalletsQuantity;
  }

  return value;
};

export const getToValue = (
  value: string,
  getSelectedCoin: SelectedCoinsType
) => {
  const fromCoinKey = getSelectedCoin.from.key;
  const toCoinKey = getSelectedCoin.to.key;

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

export const getPlusResult = (firstArgu: string, secondArgu: string) => {
  return Big(firstArgu).plus(secondArgu).toString();
};

export const getMinusResult = (firstArgu: string, secondArgu: string) => {
  return Big(firstArgu).minus(secondArgu).toString();
};

export const getTimesResult = (firstArgu: string, secondArgu: string) => {
  return Big(firstArgu).times(secondArgu).toString();
};

export const getDivideResult = (firstArgu: string, secondArgu: string) => {
  return Big(firstArgu).div(secondArgu).toString();
};
