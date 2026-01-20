export class Player {
  constructor(id, name, hp=100) {
    this.id = id
    this.name = name
    this.hp = hp
  }

  takeDamage(dmg) {
    this.hp -= dmg
    if(this.hp<=0) this.hp=0
  }
}
