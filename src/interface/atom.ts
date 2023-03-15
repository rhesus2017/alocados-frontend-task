export interface CoinWalletsType {
  [key: string]: CoinWalletType;
  solana: CoinWalletType;
  ethereum: CoinWalletType;
  bnb: CoinWalletType;
}

export interface CoinWalletType {
  code: string;
  text: string;
  quantity: number;
}
