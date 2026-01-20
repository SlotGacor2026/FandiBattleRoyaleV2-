export const profile = {
  username: "Guest",
  level: 1,
  exp: 0
};

export function addExp(xp) {
  profile.exp += xp;
}
