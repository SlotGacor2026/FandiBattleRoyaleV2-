// CONFIG
import { CONFIG } from "./config.js"

// GAME
import { Bot } from "./game/bot.js"
import { Player } from "./game/player.js"

// UI
import { initHUD } from "./ui/hud.js"

// START
console.log("GAME START:", CONFIG.GAME_NAME)

const bots = []
for (let i = 0; i < CONFIG.MAX_BOT; i++) {
  bots.push(new Bot(i, Math.random() * 500, Math.random() * 500))
}

setInterval(() => {
  bots.forEach(bot => bot.move())
}, 1000)

initHUD()
