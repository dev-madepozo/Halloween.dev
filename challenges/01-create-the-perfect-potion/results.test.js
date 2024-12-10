const createMagicPotion = require("./solution")

describe("Test Challenge: 🧙‍♀️ Create the perfect potion", () => {
  test("Test #1: the return type should be array", () => {
    expect(Array.isArray(createMagicPotion([4, 5, 6, 2], 8))).toBe(true)
  })
  
  test("Test #2: the return should be [2, 3]", () => {
    expect(createMagicPotion([13, 5, 6, 2], 8)).toEqual([2, 3])
  })

  test("Test #3: the return should be [1, 2]", () => {
    expect(createMagicPotion([11, 3, 7, 5], 10)).toEqual([1, 2])
  })

  test("Test #4: the return should be [0, 2]", () => {
    expect(createMagicPotion([4, 3, 2, 3, 4], 6)).toEqual([0, 2])
  })

  test("Test #5: the return should be undefined", () => {
    expect(createMagicPotion([0, 0, -2, 3], 2)).toBeUndefined()
  })

  test("Test #6: the return should be [3, 4]", () => {
    expect(createMagicPotion([10, 5, 2, 3, 7, 5], 10)).toEqual([3, 4])
  })

  test("Test #7: the return should be [2, 4]", () => {
    expect(createMagicPotion([1, 2, 3, 4, 5], 8)).toEqual([2, 4])
  })

  test("Test #8: the return should be [0, 2]", () => {
    expect(createMagicPotion([5, 1, 4, 6, 2], 9)).toEqual([0, 2])
  })

  test("Test #9: the return should be [0, 1]", () => {
    expect(createMagicPotion([1, -2, 3, -4, 5], -1)).toEqual([0, 1])
  })

  test("Test #10: the return should be [1, 2]", () => {
    expect(createMagicPotion([10, 20, 30, 40], 50)).toEqual([1, 2])
  })

  test("Test #11: the return should be undefined", () => {
    expect(createMagicPotion([], 10)).toBeUndefined()
  })
})
