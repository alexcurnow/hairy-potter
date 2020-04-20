import { usePottery } from './PotteryCatalog.js'
import { Pot } from './PotHTML.js'

const contentTarget = document.querySelector('.potteryList')

export const PotteryList = () => {
  const potteryToSell = usePottery()
  contentTarget.innerHTML = potteryToSell.map((pot) => Pot(pot)).join('')
}
