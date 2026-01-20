import { Player } from "./player.js"

export class Bot {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.hp = 50
    this.speed = 1.2
    this.damage = 0.2
  }

  update(player) {
    const dx = player.x - this.x
    const dy = player.y - this.y
    const dist = Math.hypot(dx, dy) || 1

    // kejar player
    this.x += (dx / dist) * this.speed
    this.y += (dy / dist) * this.speed

    // serang kalau dekat
    if (dist < 30) {
      player.takeDamage(this.damage)
    }
  }
}
