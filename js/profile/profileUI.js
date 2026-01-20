export function updateProfileUI(profile) {
  document.getElementById("username").innerText = profile.username
  document.getElementById("level").innerText = profile.level
}
