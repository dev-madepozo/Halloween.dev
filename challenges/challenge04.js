function findTheKiller(whisper, suspects) {
  return suspects.filter(suspect => {
    const name = suspect.toLowerCase()

    if (whisper.includes('$') && whisper.length <= name.length) {
      return false
    }

    for (const [index, value] of [...whisper].entries()) {
      if (!['$', '~', name[index]].includes(value)) {
        return false
      }
    }

    return true
  }).toString()
}
