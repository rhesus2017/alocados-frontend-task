import { SelectedCoinsType } from "../type/atom";
import { atom } from "recoil";
import { CoinWalletsType } from "../type/atom";

export const coinWallets = atom<CoinWalletsType>({
  key: "coinWallets",
  default: {
    solana: {
      key: "solana",
      code: "SOL",
      name: "Solana",
      quantity: "0",
    },
    ethereum: {
      key: "ethereum",
      code: "ETH",
      name: "Ethereum",
      quantity: "2000",
    },
    bnb: {
      key: "bnb",
      code: "BNB",
      name: "BnB",
      quantity: "0",
    },
  },
});

export const selectedCoin = atom<SelectedCoinsType>({
  key: "selectedCoin",
  default: {
    from: {
      key: "",
      code: "",
      name: "",
      quantity: "0",
      input: "0",
    },
    to: {
      key: "",
      code: "",
      name: "",
      quantity: "0",
      input: "0",
    },
  },
});

export const openSelect = atom({
  key: "openSelect",
  default: "",
});

export const isError = atom({
  key: "isError",
  default: false,
});
