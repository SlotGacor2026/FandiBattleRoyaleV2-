import { player } from "./player.js";

export const bots = [];

export function spawnBot(x, y) {
  bots.push({
    x,
    y,
    hp: 50,
    speed: 1.2
  });
}

export function updateBots() {
  bots.forEach(bot => {
    const dx = player.x - bot.x;
    const dy = player.y - bot.y;
    const dist = Math.hypot(dx, dy);

    if (dist > 5) {
      bot.x += (dx / dist) * bot.speed;
      bot.y += (dy / dist) * bot.speed;
    }

    if (dist < 40) {
      player.hp -= 0.1; // bot nembak
    }
  });
        }
