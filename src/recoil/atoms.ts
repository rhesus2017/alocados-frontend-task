import { HistoryType, SelectedCoinsType } from "../type/atom";
import { atom } from "recoil";
import { CoinWalletsType } from "../type/atom";

export const coinWalletsState = atom<CoinWalletsType>({
  key: "coinWalletsState",
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

export const selectedCoinsState = atom<SelectedCoinsType>({
  key: "selectedCoinsState",
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

export const openSelectsState = atom({
  key: "openSelectsState",
  default: "",
});

export const isErrorState = atom({
  key: "isErrorState",
  default: false,
});

export const isMessageState = atom({
  key: "isMessageState",
  default: false,
});

export const isSelectedAllState = atom({
  key: "isSelectedAllState",
  default: false,
});

export const swapHistoryState = atom<HistoryType[]>({
  key: "swapHistoryState",
  default: [],
});

export const isDescendState = atom({
  key: "isDescendState",
  default: true,
});
