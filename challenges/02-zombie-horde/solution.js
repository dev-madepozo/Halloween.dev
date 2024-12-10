/**
 * @param {string} zombies 
 * @param {string} humans 
 * @returns {string}
 */
function battleHorde(zombies, humans) {
  let power = 0
  let index = 0

  for (const humanPower of humans) {
    power += zombies[index++] - humanPower
  }

  return `${Math.abs(power) || ''}${'xzh'.at(Math.sign(power))}`
}

module.exports = battleHorde
