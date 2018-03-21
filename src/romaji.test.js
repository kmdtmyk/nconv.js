import Romaji from './romaji'

it('toHiragana', () => {
  expect(Romaji.toHiragana('aiueo')).toBe('あいうえお')
  expect(Romaji.toHiragana('kakikukeko')).toBe('かきくけこ')
  expect(Romaji.toHiragana('sasisuseso')).toBe('さしすせそ')
  expect(Romaji.toHiragana('tatituteto')).toBe('たちつてと')
  expect(Romaji.toHiragana('naninuneno')).toBe('なにぬねの')
  expect(Romaji.toHiragana('hahihuheho')).toBe('はひふへほ')
  expect(Romaji.toHiragana('mamimumemo')).toBe('まみむめも')
  expect(Romaji.toHiragana('yayuyo')).toBe('やゆよ')
  expect(Romaji.toHiragana('rarirurero')).toBe('らりるれろ')
  expect(Romaji.toHiragana('wawo')).toBe('わを')
  expect(Romaji.toHiragana('nn')).toBe('ん')
})
