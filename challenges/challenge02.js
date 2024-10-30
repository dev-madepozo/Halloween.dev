function battleHorde(zombies, humans) {
  let power = 0

  for (let [key, value] of [...zombies].entries()) {
    power += +value - humans[key]
  }

  return power ? `${Math.abs(power)}${'hz'.at(power > 0)}` : 'x'
}
