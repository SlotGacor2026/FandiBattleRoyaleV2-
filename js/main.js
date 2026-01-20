import { players } from "./game/player.js";
import { updateHUD } from "./ui/hud.js";

function initSinglePlayer(){
  console.log("Single Player Game Started");

  let mainPlayer = {name:"Fandi", hp:100, x:0, y:0, weapon:{name:"Rifle", damage:10}};

  function gameLoop(){
    // Bot bergerak random
    players.forEach(bot=>{
      bot.x += Math.floor(Math.random()*3)-1;
      bot.y += Math.floor(Math.random()*3)-1;
    });

    // Update HUD
    updateHUD(mainPlayer, players);

    requestAnimationFrame(gameLoop);
  }
  gameLoop();
}

document.getElementById("loginBtn").addEventListener("click", ()=>{
  document.getElementById("loginScreen").style.display="none";
  document.getElementById("gameScreen").style.display="block";
  initSinglePlayer();
});
