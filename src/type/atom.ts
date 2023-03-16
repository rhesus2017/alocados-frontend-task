export interface CoinWalletsType {
  [key: string]: CoinWalletType;
  solana: CoinWalletType;
  ethereum: CoinWalletType;
  bnb: CoinWalletType;
}

export interface SelectedCoinsType {
  [key: string]: CoinWalletType;
  from: CoinWalletType;
  to: CoinWalletType;
}

export interface CoinWalletType {
  key: string;
  code: string;
  name: string;
  quantity: string;
}
