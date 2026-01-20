import { CONFIG } from "../config.js"
import io from "https://cdn.socket.io/4.6.1/socket.io.esm.min.js"

export const socket = io(CONFIG.SOCKET_URL, {
  auth: { token: localStorage.getItem("token") }
})

socket.on("connect", () => console.log("Connected to server"))
socket.on("disconnect", () => console.log("Disconnected"))
socket.on("gameState", (state) => console.log("GameState:", state))
