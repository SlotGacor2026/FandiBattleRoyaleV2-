// Player & bot AI
export class Player {
  constructor(id,name,hp=100){
    this.id=id;
    this.name=name;
    this.hp=hp;
    this.x=0;
    this.y=0;
    this.weapon={name:"Rifle", damage:10};
  }

  takeDamage(dmg){
    this.hp -= dmg;
    if(this.hp<0) this.hp=0;
  }
}

// Default bot AI
export const players = [];
for(let i=0;i<5;i++){
  players.push(new Player(`bot${i}`,`Bot${i}`));
}
