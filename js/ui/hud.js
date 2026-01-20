export function updateHUD(mainPlayer, bots){
  document.getElementById("health").innerText = `HP: ${mainPlayer.hp}`;
  document.getElementById("coin").innerText = `Coin: 0`;
  document.getElementById("diamond").innerText = `Diamond: 0`;
  document.getElementById("inventory").innerText = `Inventory: Empty`;
}
