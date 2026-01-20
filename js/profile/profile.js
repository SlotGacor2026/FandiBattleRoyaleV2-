import { CONFIG } from "../config.js"

export async function getProfile() {
  const res = await fetch(`${CONFIG.API_URL}/profile`, {
    headers: { Authorization: localStorage.getItem("token") }
  })
  return await res.json()
    }
