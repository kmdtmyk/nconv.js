
[![Build Status](https://travis-ci.org/kmdtmyk/nconv.js.svg?branch=master)](https://travis-ci.org/kmdtmyk/nconv.js)

## Install

```
npm install @kmdtmyk/nconv
```

## Usage

```js
import Nconv from '@kmdtmyk/nconv'

Nconv.romajiToHiragana('aiueo')
// => あいうえお

Nconv.romajiToZenKata('aiueo')
// => アイウエオ

Nconv.romajiToHanKata('aiueo')
// => ｱｲｳｴｵ

Nconv.hiraganaToZenKata('あいうえお')
// => アイウエオ

Nconv.hiraganaToHanKata('あいうえお')
// => ｱｲｳｴｵ

Nconv.zenKataToHiragana('アイウエオ')
// => あいうえお

Nconv.zenKataToHanKata('アイウエオ')
// => ｱｲｳｴｵ

Nconv.hanKataToHiragana('ｱｲｳｴｵ')
// => あいうえお

Nconv.hanKataToZenKata('ｱｲｳｴｵ')
// => アイウエオ

Nconv.alphabetToZenkaku('abcde')
// => ａｂｃｄｅｆ

Nconv.alphabetToHankaku('ａｂｃｄｅｆ')
// => abcde

Nconv.numericToZenkaku('0123456789')
// => ０１２３４５６７８９

Nconv.numericToHankaku('０１２３４５６７８９')
// => 0123456789

Nconv.toHankaku('１２３ａｂｃアイウ')
// => 123abcｱｲｳ
```

## License

MIT
