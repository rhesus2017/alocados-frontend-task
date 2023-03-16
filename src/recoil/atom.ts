import { atom } from "recoil";
import { CoinWalletsType } from "../interface/atom";

export const coinWallet = atom<CoinWalletsType>({
  key: "coinWallet",
  default: {
    solana: {
      key: "solana",
      code: "SOL",
      text: "Solana",
      quantity: 0,
    },
    ethereum: {
      key: "ethereum",
      code: "ETH",
      text: "Ethereum",
      quantity: 2000,
    },
    bnb: {
      key: "bnb",
      code: "BNB",
      text: "BnB",
      quantity: 0,
    },
  },
});
