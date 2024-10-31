function findTheKiller(whisper, suspects) {
  const re = new RegExp(`^${whisper.replace(/~/g, '.')}`, 'i')
  return suspects.filter(suspect => re.test(suspect)).join(',')
}
