export interface CoinWalletsType {
  [key: string]: CoinWalletType;
  solana: CoinWalletType;
  ethereum: CoinWalletType;
  bnb: CoinWalletType;
}

export interface SelectedCoinsType {
  [key: string]: CoinWalletType;
  from: {
    input: string;
  } & CoinWalletType;
  to: {
    input: string;
  } & CoinWalletType;
}

export interface CoinWalletType {
  key: string;
  code: string;
  name: string;
  quantity: string;
}
