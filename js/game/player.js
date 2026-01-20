import { Weapon } from "./weapon.js"

export class Player {
  constructor() {
    this.hp = 100
    this.weapon = new Weapon("Rifle", 10)
  }

  takeDamage(dmg) {
    this.hp -= dmg
  }
}
