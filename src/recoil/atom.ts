import { atom } from "recoil";
import { CoinWalletsType } from "../interface/atom";

export const coinWallet = atom<CoinWalletsType>({
  key: "coinWallet",
  default: {
    solana: {
      code: "SOL",
      text: "Solana",
      quantity: 0,
    },
    ethereum: {
      code: "ETH",
      text: "Solana",
      quantity: 2000,
    },
    bnb: {
      code: "BNB",
      text: "BnB",
      quantity: 0,
    },
  },
});
