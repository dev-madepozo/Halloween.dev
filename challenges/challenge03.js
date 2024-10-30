function findSafestPath(dream) {
  const n = dream.length
  const m = dream[0].length

  const dp = new Array(m).fill(0)
  dp[0] = dream[0][0]

  for (let i = 1; i < m; i++) {
    dp[i] = dp[i - 1] + dream[0][i]
  }

  for (let i = 1; i < n; i++) {
    dp[0] += dream[i][0]

    for (let j = 1; j < m; j++) {
      dp[j] = dream[i][j] + Math.min(dp[j], dp[j - 1])
    }
  }

  return dp[m - 1]
}
