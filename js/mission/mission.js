import { CONFIG } from "../config.js"

export async function getMissions(){
  const res = await fetch(`${CONFIG.API_URL}/missions`,{
    headers:{ Authorization: localStorage.getItem("token") }
  })
  return await res.json()
}
