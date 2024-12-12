function findSafestPath(dream) {
  let i = 0, j

  for (const row of dream) {
    row[0] += dream[i - 1]?.[0] | 0
    j = 1
    const [, ...rest] = row
    for (const _ of rest) {
      row[j] += Math.min(
        row[j - 1], `${dream[i - 1]?.[j]}`.replace('undefined', 100000)
      )
      j++
    }
    i++
  }

  return dream[i - 1][j - 1]
}

module.exports = findSafestPath
