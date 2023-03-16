import alocados from "../assets/svg/alocados.svg";
import solana from "../assets/svg/solana.svg";
import ethereum from "../assets/svg/ethereum.svg";
import bnb from "../assets/svg/bnb.svg";

export const getImg = (img: string) => {
  let imgSrc = "";

  if (img === "alocados") {
    imgSrc = alocados;
  } else if (img === "solana") {
    imgSrc = solana;
  } else if (img === "ethereum") {
    imgSrc = ethereum;
  } else if (img === "bnb") {
    imgSrc = bnb;
  }

  return imgSrc;
};
