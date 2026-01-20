// Skip login untuk single player
export async function login(username, password){
  console.log("Single Player Mode: login skipped");
  return {token:"SP_MODE"};
}
