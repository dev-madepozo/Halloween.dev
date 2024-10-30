function escapePyramidHead(room) {
  const size = room.length
  const stringRoom = room.toString().replaceAll(',', '')
  const startIndex = stringRoom.indexOf('▲')
  const targetIndex = stringRoom.indexOf('T')

  const directions = [[-1, 0], [1,0], [0, 1], [0, -1]]

  const [startX, startY] = [~~(startIndex / size), startIndex % size]
  const [targetX, targetY] = [~~(targetIndex / size), targetIndex % size]

  const paths = [[startX, startY, 0]]

  while (paths.length) {
    const [x, y, steps] = paths.shift()

    if (x === targetX && y == targetY) return steps

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
