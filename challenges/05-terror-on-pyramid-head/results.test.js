const escapePyramidHead = require('./solution')

describe("Test Challenge: ▲ Terror on Pyramid Head", () => {
  test("Test #01: the return type should be a number", () => {
    const room = [
      ['.', '.', '#', '.', '▲'],
      ['#', '.', '#', '.', '#'],
      ['.', '.', '.', '.', '.'],
      ['#', '#', '#', '.', '#'],
      ['T', '.', '.', '.', '.'],
    ]
    expect(typeof escapePyramidHead(room)).toBe('number')
  })

  test("Test #02: the return value should be 2", () => {
    const room = [
      ['T', '.', '#', '.'],
      ['.', '.', '.', '.'],
      ['▲', '.', '.', '#'],
      ['.', '#', '#', '#']
    ]
    expect(escapePyramidHead(room)).toBe(2)
  })

  test("Test #03: the return value should be 8", () => {
    const room = [
      ['.', '.', '#', '.', '▲'],
      ['#', '.', '#', '.', '#'],
      ['.', '.', '.', '.', '.'],
      ['#', '#', '#', '.', '#'],
      ['T', '.', '.', '.', '.']
    ]
    expect(escapePyramidHead(room)).toBe(8)
  })

  test("Test #04: the return value should be -1", () => {
    const room = [
      ['#', '#', '#'],
      ['▲', '.', '#'],
      ['.', '#', 'T']
    ]
    expect(escapePyramidHead(room)).toBe(-1)
  })

  test("Test #05: the return value should be 1", () => {
    const room = [
      ['#', '#'],
      ['▲', 'T']
    ]
    expect(escapePyramidHead(room)).toBe(1)
  })

  test("Test #06: the return value should be 1", () => {
    const room = [
      ['.', '.', '.'],
      ['T', '▲', '.'],
      ['.', '.', '.']
    ]
    expect(escapePyramidHead(room)).toBe(1)
  })
})
