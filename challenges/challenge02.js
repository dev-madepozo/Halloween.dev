function battleHorde(zombies, humans) {
  let power = 0

  for (let [key, value] of [...zombies].entries()) {
    power += value - humans[key]
  }

  return `${Math.abs(power) || ''}${'xzh'.at(Math.sign(power))}`
}
