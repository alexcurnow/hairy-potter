export const firePottery = (potObject, temperature) => {
  potObject.fired = true
  if (temperature >= 2200) {
    potObject.cracked = true
  } else if (temperature <= 2200) {
    potObject.cracked = false
  }
  return potObject
}
