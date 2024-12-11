function escapePyramidHead(room) {
  let i = 0, targetXY, startX, startY

  for (const row of room) {
    let j = 0
    for (const col of row) {
      if (col == '▲') {
        startX = i
        startY = j
      }

      if (col == 'T') {
        targetXY = `${i}${j}`
        room[i][j] = '.'
      }
      j++
    }

    i++
  }

  const paths = [[startX, startY, 0]]
  const directions = [[-1, 0], [1,0], [0, -1], [0, 1]]

  for (const [x, y, steps] of paths) {
    for (const [dx, dy] of directions) {
      if (room[x + dx]?.[y + dy] == '.') {
        if (`${x + dx}${y + dy}` == targetXY) return steps + 1
        room[x][y] = '#'
        paths.push([x + dx, y + dy, steps + 1])
      }
    }
  }

  return -1
}

module.exports = escapePyramidHead