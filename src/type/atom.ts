export interface CoinWalletsType {
  [key: string]: CoinWalletType;
  solana: CoinWalletType;
  ethereum: CoinWalletType;
  bnb: CoinWalletType;
}

export interface SelectedCoinsType {
  [key: string]: SelectedCoinType;
  from: SelectedCoinType;
  to: SelectedCoinType;
}

export interface SelectedCoinType extends CoinWalletType {
  input: string;
}

export interface CoinWalletType {
  key: string;
  code: string;
  name: string;
  quantity: string;
}
