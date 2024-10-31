function createMagicPotion(potions, target) {
  const seen = {}
  for (let [index, value] of potions.entries()) {
    const complement = target - value
    if (complement in seen) return [seen[complement], index]
    seen[value] = index
  }
}
