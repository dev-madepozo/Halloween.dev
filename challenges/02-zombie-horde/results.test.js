const battleHorde = require("./solution")

describe("Test Challenge #2: 🧟 Zombie horde", () => {
  test("Test #01: the return type should be a string", () => {
    expect(typeof battleHorde('242', '334')).toBe('string')
  })
  
  test("Test #02: the return should be 2h", () => {
    expect(battleHorde('242', '334')).toEqual('2h')
  })

  test("Test #03: the return should be x", () => {
    expect(battleHorde('444', '282')).toEqual('x')
  })

  test("Test #04: the return should be 3h", () => {
    expect(battleHorde('555', '666')).toEqual('3h')
  })

  test("Test #05: the return should be x", () => {
    expect(battleHorde('321', '123')).toEqual('x')
  })

  test("Test #06: the return should be 3z", () => {
    expect(battleHorde('4598', '7682')).toEqual('3z')
  })

  test("Test #07: the return should be 20z", () => {
    expect(battleHorde('8989898999', '7779998811')).toEqual('20z')
  })

  test("Test #08: the return should be 10h", () => {
    expect(battleHorde('57685849323', '98765438965')).toEqual('10h')
  })
})
