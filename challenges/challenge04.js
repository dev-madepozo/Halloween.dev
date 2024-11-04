function findTheKiller(whisper, suspects) {
  const regex = new RegExp(`^${whisper.replace(/~/g, '.')}`, 'i')
  return `${suspects.filter(suspect => regex.test(suspect))}`
}
