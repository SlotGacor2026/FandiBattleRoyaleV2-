import { CONFIG } from "../config.js"

export async function login(username, password) {
  const res = await fetch(`${CONFIG.API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  })
  const data = await res.json()
  if (data.token) localStorage.setItem("token", data.token)
  return data
}
