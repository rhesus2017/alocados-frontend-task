import Big from "big.js";

export const numberFormat = (value: string) => {
  if (value.includes(".")) {
    let valueArr = value.split(".");
    value = valueArr[0] + "." + valueArr[1].slice(0, 2);
  }

  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

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
