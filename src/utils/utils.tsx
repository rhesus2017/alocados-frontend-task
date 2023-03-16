export const numberFormat = (value: string) => {
  return Number(value).toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });
};
