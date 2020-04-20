let id = 0

export const makePottery = (shape, weight, height) => {
  id++
  const pot = {
    id: id,
    shape: shape,
    weight: weight,
    height: height,
  }
  return pot
}
