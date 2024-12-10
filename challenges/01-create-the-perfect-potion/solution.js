/**
 * @param {number[]} potions
 * @param {number} target
 * @return {number[]}
 */
function createMagicPotion(potions, target) {
  const seen = {}
  let i = 0

  for (const value of potions) {
    if (seen.hasOwnProperty(target - value)) return [seen[target - value], i]
    seen[value] = i++
  }
}

module.exports = createMagicPotion
