export class Weapon {
  constructor(name, damage) {
    this.name = name
    this.damage = damage
  }

  fire(target) {
    target.takeDamage(this.damage)
  }
}
