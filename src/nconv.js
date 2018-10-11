export default class{

  static romajiToHiragana(text){
    const convertMap1 = {
      a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お',
      '-': 'ー',
    }
    const convertMap2 = {
      nn: 'ん',
      ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ',
      sa: 'さ', si: 'し', su: 'す', se: 'せ', so: 'そ',
      ta: 'た', ti: 'ち', tu: 'つ', te: 'て', to: 'と',
      na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の',
      ha: 'は', hi: 'ひ', hu: 'ふ', he: 'へ', ho: 'ほ',
      ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も',
      ya: 'や', yu: 'ゆ', ye: 'いぇ', yo: 'よ',
      ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ',
      wa: 'わ', wo: 'を',
      ga: 'が', gi: 'ぎ', gu: 'ぐ', ge: 'げ', go: 'ご',
      za: 'ざ', zi: 'じ', zu: 'ず', ze: 'ぜ', zo: 'ぞ',
      da: 'だ', di: 'ぢ', du: 'づ', de: 'で', do: 'ど',
      ba: 'ば', bi: 'び', bu: 'ぶ', be: 'べ', bo: 'ぼ',
      pa: 'ぱ', pi: 'ぴ', pu: 'ぷ', pe: 'ぺ', po: 'ぽ',
      fa: 'ふぁ', fi: 'ふぃ', fu: 'ふ', fe: 'ふぇ', fo: 'ふぉ',
      qa: 'くぁ', qi: 'くぃ', qu: 'く', qe: 'くぇ', qo: 'くぉ',
      ja: 'じゃ', ji: 'じ', ju: 'じゅ', je: 'じぇ', jo: 'じょ',
      va: 'ゔぁ', vi: 'ゔぃ', vu: 'ゔ', ve: 'ゔぇ', vo: 'ゔぉ',
      xa: 'ぁ', xi: 'ぃ', xu: 'ぅ', xe: 'ぇ', xo: 'ぉ',
      la: 'ぁ', li: 'ぃ', lu: 'ぅ', le: 'ぇ', lo: 'ぉ',
    }
    const convertMap3 = {
      kya: 'きゃ', kyi: 'きぃ', kyu: 'きゅ', kye: 'きぇ', kyo: 'きょ',
      gya: 'ぎゃ', gyi: 'ぎぃ', gyu: 'ぎゅ', gye: 'ぎぇ', gyo: 'ぎょ',
      sya: 'しゃ', syi: 'しぃ', syu: 'しゅ', sye: 'しぇ', syo: 'しょ',
      zya: 'じゃ', zyi: 'じぃ', zyu: 'じゅ', zye: 'じぇ', zyo: 'じょ',
      jya: 'じゃ', jyi: 'じぃ', jyu: 'じゅ', jye: 'じぇ', jyo: 'じょ',
      tya: 'ちゃ', tyi: 'ちぃ', tyu: 'ちゅ', tye: 'ちぇ', tyo: 'ちょ',
      cya: 'ちゃ', cyi: 'ちぃ', cyu: 'ちゅ', cye: 'ちぇ', cyo: 'ちょ',
      dya: 'ぢゃ', dyi: 'ぢぃ', dyu: 'ぢゅ', dye: 'ぢぇ', dyo: 'ぢょ',
      hya: 'ひゃ', hyi: 'ひぃ', hyu: 'ひゅ', hye: 'ひぇ', hyo: 'ひょ',
      bya: 'びゃ', byi: 'びぃ', byu: 'びゅ', bye: 'びぇ', byo: 'びょ',
      shi: 'し', chi: 'ち', tsu: 'つ',
      xya: 'ゃ', xyu: 'ゅ', xyo: 'ょ',
      lya: 'ゃ', lyu: 'ゅ', lyo: 'ょ',
      xtu: 'っ', ltu: 'っ',
    }
    const convertMap4 = {
      xtsu: 'っ', ltsu: 'っ',
    }

    text = replaceConsecutiveConsonant(text, 'っ')
    text = applyConvertMap(text, convertMap4)
    text = applyConvertMap(text, convertMap3)
    text = applyConvertMap(text, convertMap2)
    text = applyConvertMap(text, convertMap1)
    text = text.replace(/n/g, 'ん')
    return text
  }

  static romajiToZenKata(text){
    const convertMap1 = {
      a: 'ア', i: 'イ', u: 'ウ', e: 'エ', o: 'オ',
      '-': 'ー',
    }
    const convertMap2 = {
      nn: 'ン',
      ka: 'カ', ki: 'キ', ku: 'ク', ke: 'ケ', ko: 'コ',
      sa: 'サ', si: 'シ', su: 'ス', se: 'セ', so: 'ソ',
      ta: 'タ', ti: 'チ', tu: 'ツ', te: 'テ', to: 'ト',
      na: 'ナ', ni: 'ニ', nu: 'ヌ', ne: 'ネ', no: 'ノ',
      ha: 'ハ', hi: 'ヒ', hu: 'フ', he: 'ヘ', ho: 'ホ',
      ma: 'マ', mi: 'ミ', mu: 'ム', me: 'メ', mo: 'モ',
      ya: 'ヤ', yu: 'ユ', ye: 'イェ', yo: 'ヨ',
      ra: 'ラ', ri: 'リ', ru: 'ル', re: 'レ', ro: 'ロ',
      wa: 'ワ', wo: 'ヲ',
      ga: 'ガ', gi: 'ギ', gu: 'グ', ge: 'ゲ', go: 'ゴ',
      za: 'ザ', zi: 'ジ', zu: 'ズ', ze: 'ゼ', zo: 'ゾ',
      da: 'ダ', di: 'ヂ', du: 'ヅ', de: 'デ', do: 'ド',
      ba: 'バ', bi: 'ビ', bu: 'ブ', be: 'ベ', bo: 'ボ',
      pa: 'パ', pi: 'ピ', pu: 'プ', pe: 'ペ', po: 'ポ',
      fa: 'ファ', fi: 'フィ', fu: 'フ', fe: 'フェ', fo: 'フォ',
      qa: 'クァ', qi: 'クィ', qu: 'ク', qe: 'クェ', qo: 'クォ',
      ja: 'ジャ', ji: 'ジ', ju: 'ジュ', je: 'ジェ', jo: 'ジョ',
      va: 'ヴァ', vi: 'ヴィ', vu: 'ヴ', ve: 'ヴェ', vo: 'ヴォ',
      xa: 'ァ', xi: 'ィ', xu: 'ゥ', xe: 'ェ', xo: 'ォ',
      la: 'ァ', li: 'ィ', lu: 'ゥ', le: 'ェ', lo: 'ォ',
    }
    const convertMap3 = {
      kya: 'キャ', kyi: 'キィ', kyu: 'キュ', kye: 'キェ', kyo: 'キョ',
      gya: 'ギャ', gyi: 'ギィ', gyu: 'ギュ', gye: 'ギェ', gyo: 'ギョ',
      sya: 'シャ', syi: 'シィ', syu: 'シュ', sye: 'シェ', syo: 'ショ',
      zya: 'ジャ', zyi: 'ジィ', zyu: 'ジュ', zye: 'ジェ', zyo: 'ジョ',
      jya: 'ジャ', jyi: 'ジィ', jyu: 'ジュ', jye: 'ジェ', jyo: 'ジョ',
      tya: 'チャ', tyi: 'チィ', tyu: 'チュ', tye: 'チェ', tyo: 'チョ',
      cya: 'チャ', cyi: 'チィ', cyu: 'チュ', cye: 'チェ', cyo: 'チョ',
      dya: 'ヂャ', dyi: 'ヂィ', dyu: 'ヂュ', dye: 'ヂェ', dyo: 'ヂョ',
      hya: 'ヒャ', hyi: 'ヒィ', hyu: 'ヒュ', hye: 'ヒェ', hyo: 'ヒョ',
      bya: 'ビャ', byi: 'ビィ', byu: 'ビュ', bye: 'ビェ', byo: 'ビョ',
      shi: 'シ', chi: 'チ', tsu: 'ツ',
      xya: 'ャ', xyu: 'ュ', xyo: 'ョ',
      lya: 'ャ', lyu: 'ュ', lyo: 'ョ',
      xtu: 'ッ', ltu: 'ッ',
    }
    const convertMap4 = {
      xtsu: 'ッ', ltsu: 'ッ',
    }

    text = replaceConsecutiveConsonant(text, 'ッ')
    text = applyConvertMap(text, convertMap4)
    text = applyConvertMap(text, convertMap3)
    text = applyConvertMap(text, convertMap2)
    text = applyConvertMap(text, convertMap1)
    text = text.replace(/n/g, 'ン')
    return text
  }

  static romajiToHanKata(text){
    const convertMap1 = {
      a: 'ｱ', i: 'ｲ', u: 'ｳ', e: 'ｴ', o: 'ｵ',
      '-': 'ｰ',
    }
    const convertMap2 = {
      nn: 'ﾝ',
      ka: 'ｶ', ki: 'ｷ', ku: 'ｸ', ke: 'ｹ', ko: 'ｺ',
      sa: 'ｻ', si: 'ｼ', su: 'ｽ', se: 'ｾ', so: 'ｿ',
      ta: 'ﾀ', ti: 'ﾁ', tu: 'ﾂ', te: 'ﾃ', to: 'ﾄ',
      na: 'ﾅ', ni: 'ﾆ', nu: 'ﾇ', ne: 'ﾈ', no: 'ﾉ',
      ha: 'ﾊ', hi: 'ﾋ', hu: 'ﾌ', he: 'ﾍ', ho: 'ﾎ',
      ma: 'ﾏ', mi: 'ﾐ', mu: 'ﾑ', me: 'ﾒ', mo: 'ﾓ',
      ya: 'ﾔ', yu: 'ﾕ', ye: 'ｲｪ', yo: 'ﾖ',
      ra: 'ﾗ', ri: 'ﾘ', ru: 'ﾙ', re: 'ﾚ', ro: 'ﾛ',
      wa: 'ﾜ', wo: 'ｦ',
      ga: 'ｶﾞ', gi: 'ｷﾞ', gu: 'ｸﾞ', ge: 'ｹﾞ', go: 'ｺﾞ',
      za: 'ｻﾞ', zi: 'ｼﾞ', zu: 'ｽﾞ', ze: 'ｾﾞ', zo: 'ｿﾞ',
      da: 'ﾀﾞ', di: 'ﾁﾞ', du: 'ﾂﾞ', de: 'ﾃﾞ', do: 'ﾄﾞ',
      ba: 'ﾊﾞ', bi: 'ﾋﾞ', bu: 'ﾌﾞ', be: 'ﾍﾞ', bo: 'ﾎﾞ',
      pa: 'ﾊﾟ', pi: 'ﾋﾟ', pu: 'ﾌﾟ', pe: 'ﾍﾟ', po: 'ﾎﾟ',
      fa: 'ﾌｧ', fi: 'ﾌｨ', fu: 'ﾌ', fe: 'ﾌｪ', fo: 'ﾌｫ',
      qa: 'ｸｧ', qi: 'ｸｨ', qu: 'ｸ', qe: 'ｸｪ', qo: 'ｸｫ',
      ja: 'ｼﾞｬ', ji: 'ｼﾞ', ju: 'ｼﾞｭ', je: 'ｼﾞｪ', jo: 'ｼﾞｮ',
      va: 'ｳﾞｧ', vi: 'ｳﾞｨ', vu: 'ｳﾞ', ve: 'ｳﾞｪ', vo: 'ｳﾞｫ',
      xa: 'ｧ', xi: 'ｨ', xu: 'ｩ', xe: 'ｪ', xo: 'ｫ',
      la: 'ｧ', li: 'ｨ', lu: 'ｩ', le: 'ｪ', lo: 'ｫ',
    }
    const convertMap3 = {
      kya: 'ｷｬ', kyi: 'ｷｨ', kyu: 'ｷｭ', kye: 'ｷｪ', kyo: 'ｷｮ',
      gya: 'ｷﾞｬ', gyi: 'ｷﾞｨ', gyu: 'ｷﾞｭ', gye: 'ｷﾞｪ', gyo: 'ｷﾞｮ',
      sya: 'ｼｬ', syi: 'ｼｨ', syu: 'ｼｭ', sye: 'ｼｪ', syo: 'ｼｮ',
      zya: 'ｼﾞｬ', zyi: 'ｼﾞｨ', zyu: 'ｼﾞｭ', zye: 'ｼﾞｪ', zyo: 'ｼﾞｮ',
      jya: 'ｼﾞｬ', jyi: 'ｼﾞｨ', jyu: 'ｼﾞｭ', jye: 'ｼﾞｪ', jyo: 'ｼﾞｮ',
      tya: 'ﾁｬ', tyi: 'ﾁｨ', tyu: 'ﾁｭ', tye: 'ﾁｪ', tyo: 'ﾁｮ',
      cya: 'ﾁｬ', cyi: 'ﾁｨ', cyu: 'ﾁｭ', cye: 'ﾁｪ', cyo: 'ﾁｮ',
      dya: 'ﾁﾞｬ', dyi: 'ﾁﾞｨ', dyu: 'ﾁﾞｭ', dye: 'ﾁﾞｪ', dyo: 'ﾁﾞｮ',
      hya: 'ﾋｬ', hyi: 'ﾋｨ', hyu: 'ﾋｭ', hye: 'ﾋｪ', hyo: 'ﾋｮ',
      bya: 'ﾋﾞｬ', byi: 'ﾋﾞｨ', byu: 'ﾋﾞｭ', bye: 'ﾋﾞｪ', byo: 'ﾋﾞｮ',
      shi: 'ｼ', chi: 'ﾁ', tsu: 'ﾂ',
      xya: 'ｬ', xyu: 'ｭ', xyo: 'ｮ',
      lya: 'ｬ', lyu: 'ｭ', lyo: 'ｮ',
      xtu: 'ｯ', ltu: 'ｯ',
    }
    const convertMap4 = {
      xtsu: 'ｯ', ltsu: 'ｯ',
    }

    text = replaceConsecutiveConsonant(text, 'ｯ')
    text = applyConvertMap(text, convertMap4)
    text = applyConvertMap(text, convertMap3)
    text = applyConvertMap(text, convertMap2)
    text = applyConvertMap(text, convertMap1)
    text = text.replace(/n/g, 'ﾝ')
    return text
  }

  static hiraganaToZenKata(text){
    return text.replace(/[\u3041-\u3096]/g, match => {
      const char = match.charCodeAt(0) + 0x60
      return String.fromCharCode(char)
    })
  }

  static hiraganaToHanKata(text){
    const convertMap = {
      'あ': 'ｱ', 'い': 'ｲ', 'う': 'ｳ', 'え': 'ｴ', 'お': 'ｵ',
      'か': 'ｶ', 'き': 'ｷ', 'く': 'ｸ', 'け': 'ｹ', 'こ': 'ｺ',
      'さ': 'ｻ', 'し': 'ｼ', 'す': 'ｽ', 'せ': 'ｾ', 'そ': 'ｿ',
      'た': 'ﾀ', 'ち': 'ﾁ', 'つ': 'ﾂ', 'て': 'ﾃ', 'と': 'ﾄ',
      'な': 'ﾅ', 'に': 'ﾆ', 'ぬ': 'ﾇ', 'ね': 'ﾈ', 'の': 'ﾉ',
      'は': 'ﾊ', 'ひ': 'ﾋ', 'ふ': 'ﾌ', 'へ': 'ﾍ', 'ほ': 'ﾎ',
      'ま': 'ﾏ', 'み': 'ﾐ', 'む': 'ﾑ', 'め': 'ﾒ', 'も': 'ﾓ',
      'や': 'ﾔ', 'ゆ': 'ﾕ', 'よ': 'ﾖ',
      'ら': 'ﾗ', 'り': 'ﾘ', 'る': 'ﾙ', 'れ': 'ﾚ', 'ろ': 'ﾛ',
      'わ': 'ﾜ', 'を': 'ｦ', 'ん': 'ﾝ',
      'が': 'ｶﾞ', 'ぎ': 'ｷﾞ', 'ぐ': 'ｸﾞ', 'げ': 'ｹﾞ', 'ご': 'ｺﾞ',
      'ざ': 'ｻﾞ', 'じ': 'ｼﾞ', 'ず': 'ｽﾞ', 'ぜ': 'ｾﾞ', 'ぞ': 'ｿﾞ',
      'だ': 'ﾀﾞ', 'ぢ': 'ﾁﾞ', 'づ': 'ﾂﾞ', 'で': 'ﾃﾞ', 'ど': 'ﾄﾞ',
      'ば': 'ﾊﾞ', 'び': 'ﾋﾞ', 'ぶ': 'ﾌﾞ', 'べ': 'ﾍﾞ', 'ぼ': 'ﾎﾞ',
      'ぱ': 'ﾊﾟ', 'ぴ': 'ﾋﾟ', 'ぷ': 'ﾌﾟ', 'ぺ': 'ﾍﾟ', 'ぽ': 'ﾎﾟ',
      'ぁ': 'ｧ', 'ぃ': 'ｨ', 'ぅ': 'ｩ', 'ぇ': 'ｪ', 'ぉ': 'ｫ',
      'ゃ': 'ｬ', 'ゅ': 'ｭ', 'ょ': 'ｮ', 'っ': 'ｯ',
    }
    return applyConvertMap(text, convertMap)
  }

}

function applyConvertMap(text, convertMap){
  for(const key in convertMap){
    text = text.replace(new RegExp(key, 'g'), convertMap[key])
  }
  return text
}

function replaceConsecutiveConsonant(text, char){
  return text.replace(/([bcdfghjklmpqrstvwxyz])\1+/g, match => {
    return char.repeat(match.length - 1) + match[0]
  })
}
