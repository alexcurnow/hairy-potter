import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell, usePottery } from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'

// Imports go first
const pot1 = makePottery('mug', 4, 6)
const pot2 = makePottery('jar', 2, 4)
const pot3 = makePottery('vase', 3, 5)
const pot4 = makePottery('pear', 5, 7)
const pot5 = makePottery('square', 6, 8)

// Make 5 pieces of pottery at the wheel
let mug = makePottery()

// Fire each piece of pottery in the kiln
const firedPot1 = firePottery(pot1, 2100)
const firedPot2 = firePottery(pot2, 2250)
const firedPot3 = firePottery(pot3, 2300)
const firedPot4 = firePottery(pot4, 2150)
const firedPot5 = firePottery(pot5, 2050)

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedPot1)
toSellOrNotToSell(firedPot2)
toSellOrNotToSell(firedPot3)
toSellOrNotToSell(firedPot4)
toSellOrNotToSell(firedPot5)

// Invoke the component function that renders the HTML list
PotteryList()
