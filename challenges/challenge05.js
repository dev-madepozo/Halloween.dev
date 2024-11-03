function escapePyramidHead(room) {
  const flatten = room.flat(1)
  const n = room.length
  const startIndex = flatten.indexOf('▲')
  const targetIndex = flatten.indexOf('T')
  const targetXY = `${(targetIndex / n) | 0}${targetIndex % n}`

  const paths = [[~~(startIndex / n), startIndex % n, 0]]
  const directions = [[-1, 0], [1,0], [0, 1], [0, -1]]


  while (paths.length) {
    const [x, y, steps] = paths.shift()

    if (`${x}${y}` === targetXY) return steps

    for (const [dx, dy] of directions) {
      const [newX, newY] = [x + dx, y + dy]

      if (room?.[newX]?.[newY] && room[newX][newY] != '#') {
        room[newX][newY] = '#'
        paths.push([newX, newY, steps + 1])
      }
    }
  }

  return -1
}
