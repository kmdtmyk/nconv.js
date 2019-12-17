[![Publish](https://github.com/kmdtmyk/nconv.js/workflows/Publish/badge.svg)](https://github.com/kmdtmyk/nconv.js/actions)
[![Test](https://github.com/kmdtmyk/nconv.js/workflows/Test/badge.svg)](https://github.com/kmdtmyk/nconv.js/actions)

# Nconv

Japanese conversion library. This converts hiragana, katakana, romaji. Also, this converts half-width and full-width character.

## Demo

https://kmdtmyk.github.io/nconv.js/

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

Nconv.symbolToZenkaku('!?(){}')
// => ！？（）｛｝

Nconv.symbolToHankaku('！？（）｛｝')
// => !?(){}

Nconv.toZenkaku('123abcｱｲｳ!?')
// => １２３ａｂｃアイウ！？

Nconv.toHankaku('１２３ａｂｃアイウ！？')
// => 123abcｱｲｳ!?
```

## License

MIT
