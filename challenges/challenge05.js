function escapePyramidHead(room) {
  const size = room.length
  const stringRoom = room.join()
  let startIndex = (stringRoom.indexOf('▲') / 2) | 0
  let targetIndex = (stringRoom.indexOf('T') / 2) | 0 

  const directions = [[-1, 0], [1,0], [0, 1], [0, -1]]

  const targetXY = `${~~(targetIndex / size)}${targetIndex % size}`

  const queue = [[~~(startIndex / size), startIndex % size, 0]]

  while (queue.length) {
    const [x, y, steps] = queue.shift()

    if (`${x}${y}` === targetXY) return steps

    for (const [dx, dy] of directions) {
      const [newX, newY] = [x + dx, y + dy]

      if (room?.[newX]?.[newY] && room[newX][newY] != '#') {
        room[newX][newY] = '#'
        queue.push([newX, newY, steps + 1])
      }
    }
  }

  return -1
}