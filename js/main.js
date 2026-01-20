alert("MAIN.JS JALAN");
/* ================= CONFIG ================= */
import { CONFIG } from "./config.js"

/* ================= CORE GAME ================= */
import { Player } from "./game/player.js"
import { Weapon } from "./game/weapon.js"
import { Loot } from "./game/loot.js"
import { Zone } from "./game/zone.js"
import { KillEffect } from "./game/killEffect.js"
import { Bot } from "./game/bot.js"

/* ================= NETWORK ================= */
import { GameSocket } from "./net/socket.js"

/* ================= AUTH ================= */
import { Login } from "./auth/login.js"

/* ================= PROFILE ================= */
import { Profile } from "./profile/profile.js"
import { ProfileUI } from "./profile/profileUI.js"

/* ================= ECONOMY ================= */
import { Wallet } from "./economy/wallet.js"
import { Topup } from "./economy/topup.js"

/* ================= PROGRESSION ================= */
import { Mission } from "./mission/mission.js"
import { DailyReward } from "./daily/daily.js"
import { Gacha } from "./gacha/gacha.js"
import { GameEvent } from "./event/event.js"
import { BattlePass } from "./battlepass/battlepass.js"

/* ================= SOCIAL ================= */
import { Clan } from "./clan/clan.js"
import { Trade } from "./trade/trade.js"

/* ================= SHOP ================= */
import { Shop } from "./shop/shop.js"
import { SkinPreview } from "./shop/skinPreview.js"
import { WeaponSkin } from "./shop/weaponSkin.js"
import { AnimatedSkin } from "./shop/animatedSkin.js"
import { Emote } from "./shop/emote.js"

/* ================= SPECTATE / REPLAY / VOICE ================= */
import { Spectate } from "./spectate/global.js"
import { Replay } from "./replay/replay.js"
import { VoiceChat } from "./voice/voice.js"

/* ================= INPUT ================= */
import { Joystick } from "./input/joystick.js"

/* ================= UI ================= */
import { HUD } from "./ui/hud.js"
import { InventoryUI } from "./ui/inventory.js"
import { LeaderboardUI } from "./ui/leaderboard.js"
import { WalletUI } from "./ui/walletUI.js"
import { MissionUI } from "./ui/missionUI.js"
import { DailyUI } from "./ui/dailyUI.js"
import { GachaUI } from "./ui/gachaUI.js"
import { EventUI } from "./ui/eventUI.js"
import { ShopUI } from "./ui/shop.js"
import { EmoteUI } from "./ui/emoteUI.js"
import { ProfileUI as ProfileUI2 } from "./ui/profileUI.js"

/* ================= GAME INIT ================= */

// canvas
const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

canvas.width = CONFIG.WIDTH
canvas.height = CONFIG.HEIGHT

// core instance
const player = new Player()
const weapon = new Weapon("Rifle", 10)
player.weapon = weapon

const bots = []
for (let i = 0; i < CONFIG.BOT_COUNT; i++) {
  bots.push(
    new Bot(
      Math.random() * canvas.width,
      Math.random() * canvas.height
    )
  )
}

// optional systems (READY, TIDAK AUTO JALAN)
const socket = new GameSocket()
const wallet = new Wallet()
const joystick = new Joystick()
const hud = new HUD()

/* ================= RENDER ================= */

function drawPlayer() {
  ctx.fillStyle = "blue"
  ctx.fillRect(player.x, player.y, 20, 20)
}

function drawBots() {
  ctx.fillStyle = "red"
  bots.forEach(bot => {
    ctx.fillRect(bot.x, bot.y, 20, 20)
  })
}

/* ================= GAME LOOP ================= */

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  bots.forEach(bot => bot.update(player))

  drawPlayer()
  drawBots()

  requestAnimationFrame(gameLoop)
}

gameLoop()
