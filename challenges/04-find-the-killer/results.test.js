const findTheKiller = require("./solution")

describe("Test Challenge: 🔪 Find the killer", () => {
  test("Test #1: the return type should be a string", () => {
    const whisper = 'd~~~~~a'
    const suspects = ['Dracula', 'Freddy Krueger']
    expect(typeof findTheKiller(whisper, suspects)).toBe('string')
  })

  test("Test #2: the killer should be 'Dracula'", () => {
    const whisper = 'd~~~~~a'
    const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers']
    expect(findTheKiller(whisper, suspects)).toBe('Dracula')
  })

  test("Test #3: the killer should be 'Freddy,Freddier,Fredderic'", () => {
    const whisper = '~r~dd~'
    const suspects = ['Freddy', 'Freddier', 'Fredderic']
    expect(findTheKiller(whisper, suspects)).toBe('Freddy,Freddier,Fredderic')
  })

  test("Test #4: the killer should be empty", () => {
    const whisper = '~r~dd$'
    const suspects = ['Freddy', 'Freddier', 'Fredderic']
    expect(findTheKiller(whisper, suspects)).toBe('')
  })

  test("Test #5: the killer should be empty", () => {
    const whisper = 'mi~~def'
    const suspects = ['Midudev', 'Midu', 'Madeval']
    expect(findTheKiller(whisper, suspects)).toBe('')
  })

  test("Test #6: the killer should be 'Pennywise,Leatherface,Agatha", () => {
    const whisper = '~~~~~~'
    const suspects = ['Pennywise', 'Leatherface', 'Agatha']
    expect(findTheKiller(whisper, suspects)).toBe('Pennywise,Leatherface,Agatha')
  })

  test("Test #7: the killer should be 'Agatha", () => {
    const whisper = '~~~~~~$'
    const suspects = ['Pennywise', 'Leatherface', 'Agatha']
    expect(findTheKiller(whisper, suspects)).toBe('Agatha')
  })

  test("Test #8: the killer should be 'Severus Snape", () => {
    const whisper = 's~v~r~'
    const suspects = ['Severus Snape', 'Sirius Black', 'Salazar Slytherin']
    expect(findTheKiller(whisper, suspects)).toBe('Severus Snape')
  })

  test("Test #9: the killer should be 'Chucky,Freddy,Mickey", () => {
    const whisper = '~~~~~y$'
    const suspects = ['Chucky', 'Tiffany', 'Freddy', 'Mickey']
    expect(findTheKiller(whisper, suspects)).toBe('Chucky,Freddy,Mickey')
  })
})
