export class Player {
  constructor() {
    this.hp = 100
  }

  takeDamage(dmg) {
    this.hp -= dmg
  }
}
