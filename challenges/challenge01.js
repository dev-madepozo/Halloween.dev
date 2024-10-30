function createMagicPotion(potions, target) {
  const seen = new Map()

  for (let [key, value] of potions.entries()) {
    const complement = target - value;

    if (seen.has(complement)) {
      return [seen.get(complement), key]
    }

    seen.set(value, key);
  }

  return undefined
}
