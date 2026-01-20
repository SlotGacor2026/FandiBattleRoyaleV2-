import { Wallet } from "./wallet.js"

export class Topup {
  addDiamond(wallet, n) {
    wallet.diamond += n
  }
}
