import Nconv from './nconv'

test('romajiToHiragana', () => {
  expect(Nconv.romajiToHiragana('aiueo')).toBe('あいうえお')
  expect(Nconv.romajiToHiragana('kakikukeko')).toBe('かきくけこ')
  expect(Nconv.romajiToHiragana('sasisuseso')).toBe('さしすせそ')
  expect(Nconv.romajiToHiragana('tatituteto')).toBe('たちつてと')
  expect(Nconv.romajiToHiragana('naninuneno')).toBe('なにぬねの')
  expect(Nconv.romajiToHiragana('hahihuheho')).toBe('はひふへほ')
  expect(Nconv.romajiToHiragana('mamimumemo')).toBe('まみむめも')
  expect(Nconv.romajiToHiragana('yayuyo')).toBe('やゆよ')
  expect(Nconv.romajiToHiragana('rarirurero')).toBe('らりるれろ')
  expect(Nconv.romajiToHiragana('wawo')).toBe('わを')
  expect(Nconv.romajiToHiragana('nn')).toBe('ん')
})
