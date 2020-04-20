const potteryForSale = []

export const toSellOrNotToSell = (potObject) => {
  if (potObject.weight >= 6 && potObject.cracked === false) {
    potObject.price = 40
  } else if (potObject.weight < 6 && potObject.cracked === false) {
    potObject.price = 20
  }
  if (potObject.cracked === false) {
    potteryForSale.push(potObject)
  }
}

export const usePottery = () => potteryForSale.slice()
