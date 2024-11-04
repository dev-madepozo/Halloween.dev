function escapePyramidHead(room) {
  const flatten = room.flat(1)
  const n = room.length
  const startIndex = flatten.indexOf('▲')
  const targetIndex = flatten.indexOf('T')
  const targetXY = `${(targetIndex / n) | 0}${targetIndex % n}`

  const paths = [[(startIndex / n) | 0, startIndex % n, 0]]
  const directions = [[-1, 0], [1,0], [0, -1], [0, 1]]
  const AllowedMovements = {'.': 1, 'T': 1}

  for (const [x, y, steps] of paths) {
    if (`${x}${y}` === targetXY) return steps

    for (const [dx, dy] of directions) {
      if (AllowedMovements[room[x + dx]?.[y + dy]]) {
        room[x][y] = '#'
        paths.push([x + dx, y + dy, steps + 1])
      }
    }
  }

  return -1
}
