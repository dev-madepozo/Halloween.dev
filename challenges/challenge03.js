function findSafestPath(dream) {
  let i = 0
  for (const row of dream) {
    row[0] += dream[i - 1]?.[0] | 0
    for(let j = 1; j < row.length; j++) {
      row[j] += Math.min(row[j - 1], dream[i - 1]?.[j] || Infinity)
    }
    i++
  }
  return dream[i - 1][dream[0].length - 1]
}
