import Nconv from './nconv'

it('toHiragana', () => {
  expect(Nconv.toHiragana('aiueo')).toBe('あいうえお')
  expect(Nconv.toHiragana('kakikukeko')).toBe('かきくけこ')
  expect(Nconv.toHiragana('sasisuseso')).toBe('さしすせそ')
  expect(Nconv.toHiragana('tatituteto')).toBe('たちつてと')
  expect(Nconv.toHiragana('naninuneno')).toBe('なにぬねの')
  expect(Nconv.toHiragana('hahihuheho')).toBe('はひふへほ')
  expect(Nconv.toHiragana('mamimumemo')).toBe('まみむめも')
  expect(Nconv.toHiragana('yayuyo')).toBe('やゆよ')
  expect(Nconv.toHiragana('rarirurero')).toBe('らりるれろ')
  expect(Nconv.toHiragana('wawo')).toBe('わを')
  expect(Nconv.toHiragana('nn')).toBe('ん')
})
