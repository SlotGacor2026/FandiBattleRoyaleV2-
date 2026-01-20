export function damageZone(player, damagePerSec){
  setInterval(()=>player.takeDamage(damagePerSec),1000)
}
