import alocados from "./../assets/svg/alocados.svg";

export const getImg = (img: string) => {
  let imgSrc = "";

  if (img === "alocados") {
    imgSrc = alocados;
  }

  return imgSrc;
};
