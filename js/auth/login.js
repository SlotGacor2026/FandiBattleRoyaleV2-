export function initLogin(onStart) {
  const btn = document.getElementById("loginBtn");
  if (!btn) return;

  btn.onclick = () => {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    onStart();
  };
}
