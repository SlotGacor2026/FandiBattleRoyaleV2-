export class Bot {
  constructor(id, x, y) {
    this.id = id
    this.x = x
    this.y = y
    this.hp = 100
  }

  move() {
    this.x += Math.random() * 4 - 2
    this.y += Math.random() * 4 - 2
  }

  takeDamage(dmg) {
    this.hp -= dmg
    if (this.hp <= 0) {
      console.log("BOT MATI:", this.id)
    }
  }
}
