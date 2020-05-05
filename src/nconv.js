export default class Nconv{

  /**
   * Convert romaji to hiragana.
   * @param {String} text
   * @return {String}
   * @example
   *  aiueo -> あいうえお
   */
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
      wa: 'わ', wi: 'うぃ', wu: 'う', we: 'うぇ', wo: 'を',
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
      sha: 'しゃ', shi: 'し', shu: 'しゅ', she: 'しぇ', sho: 'しょ',
      zya: 'じゃ', zyi: 'じぃ', zyu: 'じゅ', zye: 'じぇ', zyo: 'じょ',
      jya: 'じゃ', jyi: 'じぃ', jyu: 'じゅ', jye: 'じぇ', jyo: 'じょ',
      nya: 'にゃ', nyi: 'にぃ', nyu: 'にゅ', nye: 'にぇ', nyo: 'にょ',
      tya: 'ちゃ', tyi: 'ちぃ', tyu: 'ちゅ', tye: 'ちぇ', tyo: 'ちょ',
      cya: 'ちゃ', cyi: 'ちぃ', cyu: 'ちゅ', cye: 'ちぇ', cyo: 'ちょ',
      cha: 'ちゃ', chi: 'ち', chu: 'ちゅ', che: 'ちぇ', cho: 'ちょ',
      dya: 'ぢゃ', dyi: 'ぢぃ', dyu: 'ぢゅ', dye: 'ぢぇ', dyo: 'ぢょ',
      dha: 'でゃ', dhi: 'でぃ', dhu: 'でゅ', dhe: 'でぇ', dho: 'でょ',
      hya: 'ひゃ', hyi: 'ひぃ', hyu: 'ひゅ', hye: 'ひぇ', hyo: 'ひょ',
      bya: 'びゃ', byi: 'びぃ', byu: 'びゅ', bye: 'びぇ', byo: 'びょ',
      pya: 'ぴゃ', pyi: 'ぴぃ', pyu: 'ぴゅ', pye: 'ぴぇ', pyo: 'ぴょ',
      mya: 'みゃ', myi: 'みぃ', myu: 'みゅ', mye: 'みぇ', myo: 'みょ',
      rya: 'りゃ', ryi: 'りぃ', ryu: 'りゅ', rye: 'りぇ', ryo: 'りょ',
      tsu: 'つ',
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

  /**
   * Convert romaji to zenkaku katakana.
   * @param {String} text
   * @return {String}
   * @example
   *  aiueo -> アイウエオ
   */
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
      wa: 'ワ', wi: 'ウィ', wu: 'ウ', we: 'ウェ', wo: 'ヲ',
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
      sha: 'シャ', shi: 'シ', shu: 'シュ', she: 'シェ', sho: 'ショ',
      zya: 'ジャ', zyi: 'ジィ', zyu: 'ジュ', zye: 'ジェ', zyo: 'ジョ',
      jya: 'ジャ', jyi: 'ジィ', jyu: 'ジュ', jye: 'ジェ', jyo: 'ジョ',
      nya: 'ニャ', nyi: 'ニィ', nyu: 'ニュ', nye: 'ニェ', nyo: 'ニョ',
      tya: 'チャ', tyi: 'チィ', tyu: 'チュ', tye: 'チェ', tyo: 'チョ',
      cya: 'チャ', cyi: 'チィ', cyu: 'チュ', cye: 'チェ', cyo: 'チョ',
      cha: 'チャ', chi: 'チ', chu: 'チュ', che: 'チェ', cho: 'チョ',
      dya: 'ヂャ', dyi: 'ヂィ', dyu: 'ヂュ', dye: 'ヂェ', dyo: 'ヂョ',
      dha: 'デャ', dhi: 'ディ', dhu: 'デュ', dhe: 'デェ', dho: 'デョ',
      hya: 'ヒャ', hyi: 'ヒィ', hyu: 'ヒュ', hye: 'ヒェ', hyo: 'ヒョ',
      bya: 'ビャ', byi: 'ビィ', byu: 'ビュ', bye: 'ビェ', byo: 'ビョ',
      pya: 'ピャ', pyi: 'ピィ', pyu: 'ピュ', pye: 'ピェ', pyo: 'ピョ',
      mya: 'ミャ', myi: 'ミィ', myu: 'ミュ', mye: 'ミェ', myo: 'ミョ',
      rya: 'リャ', ryi: 'リィ', ryu: 'リュ', rye: 'リェ', ryo: 'リョ',
      tsu: 'ツ',
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

  /**
   * Convert romaji to hankaku katakana.
   * @param {String} text
   * @return {String}
   * @example
   *  aiueo -> ｱｲｳｴｵ
   */
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
      wa: 'ﾜ', wi: 'ｳｨ', wu: 'ｳ', we: 'ｳｪ', wo: 'ｦ',
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
      sha: 'ｼｬ', shi: 'ｼ', shu: 'ｼｭ', she: 'ｼｪ', sho: 'ｼｮ',
      zya: 'ｼﾞｬ', zyi: 'ｼﾞｨ', zyu: 'ｼﾞｭ', zye: 'ｼﾞｪ', zyo: 'ｼﾞｮ',
      jya: 'ｼﾞｬ', jyi: 'ｼﾞｨ', jyu: 'ｼﾞｭ', jye: 'ｼﾞｪ', jyo: 'ｼﾞｮ',
      nya: 'ﾆｬ', nyi: 'ﾆｨ', nyu: 'ﾆｭ', nye: 'ﾆｪ', nyo: 'ﾆｮ',
      tya: 'ﾁｬ', tyi: 'ﾁｨ', tyu: 'ﾁｭ', tye: 'ﾁｪ', tyo: 'ﾁｮ',
      cya: 'ﾁｬ', cyi: 'ﾁｨ', cyu: 'ﾁｭ', cye: 'ﾁｪ', cyo: 'ﾁｮ',
      cha: 'ﾁｬ', chi: 'ﾁ', chu: 'ﾁｭ', che: 'ﾁｪ', cho: 'ﾁｮ',
      dya: 'ﾁﾞｬ', dyi: 'ﾁﾞｨ', dyu: 'ﾁﾞｭ', dye: 'ﾁﾞｪ', dyo: 'ﾁﾞｮ',
      dha: 'ﾃﾞｬ', dhi: 'ﾃﾞｨ', dhu: 'ﾃﾞｭ', dhe: 'ﾃﾞｪ', dho: 'ﾃﾞｮ',
      hya: 'ﾋｬ', hyi: 'ﾋｨ', hyu: 'ﾋｭ', hye: 'ﾋｪ', hyo: 'ﾋｮ',
      bya: 'ﾋﾞｬ', byi: 'ﾋﾞｨ', byu: 'ﾋﾞｭ', bye: 'ﾋﾞｪ', byo: 'ﾋﾞｮ',
      pya: 'ﾋﾟｬ', pyi: 'ﾋﾟｨ', pyu: 'ﾋﾟｭ', pye: 'ﾋﾟｪ', pyo: 'ﾋﾟｮ',
      mya: 'ﾐｬ', myi: 'ﾐｨ', myu: 'ﾐｭ', mye: 'ﾐｪ', myo: 'ﾐｮ',
      rya: 'ﾘｬ', ryi: 'ﾘｨ', ryu: 'ﾘｭ', rye: 'ﾘｪ', ryo: 'ﾘｮ',
      tsu: 'ﾂ',
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

  /**
   * Convert hiragana to zenkaku katakana.
   * @param {String} text
   * @return {String}
   * @example
   *  あいうえお -> アイウエオ
   */
  static hiraganaToZenKata(text){
    const convertMap2 = {
      'う゛': 'ヴ',
    }
    text = applyConvertMap(text, convertMap2)

    return text.replace(/[\u3041-\u3096]/g, match => {
      const char = match.charCodeAt(0) + 0x60
      return String.fromCharCode(char)
    })
  }

  /**
   * Convert zenkaku katakana to hiragana.
   * @param {String} text
   * @return {String}
   * @example
   *  アイウエオ -> あいうえお
   */
  static zenKataToHiragana(text){
    return text.replace(/[\u30a1-\u30f6]/g, match => {
      const char = match.charCodeAt(0) - 0x60
      return String.fromCharCode(char)
    })
  }

  /**
   * Convert hiragana to hankaku katakana.
   * @param {String} text
   * @return {String}
   * @example
   *  あいうえお -> ｱｲｳｴｵ
   */
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
      'ゔ': 'ｳﾞ',
      'ぁ': 'ｧ', 'ぃ': 'ｨ', 'ぅ': 'ｩ', 'ぇ': 'ｪ', 'ぉ': 'ｫ',
      'ゃ': 'ｬ', 'ゅ': 'ｭ', 'ょ': 'ｮ', 'っ': 'ｯ',
      'ー': 'ｰ',
    }
    return applyConvertMap(text, convertMap)
  }

  /**
   * Convert hankaku katakana to hiragana.
   * @param {String} text
   * @return {String}
   * @example
   *  ｱｲｳｴｵ -> あいうえお
   */
  static hanKataToHiragana(text){
    const convertMap2 = {
      'ｶﾞ': 'が', 'ｷﾞ': 'ぎ', 'ｸﾞ': 'ぐ', 'ｹﾞ': 'げ', 'ｺﾞ': 'ご',
      'ｻﾞ': 'ざ', 'ｼﾞ': 'じ', 'ｽﾞ': 'ず', 'ｾﾞ': 'ぜ', 'ｿﾞ': 'ぞ',
      'ﾀﾞ': 'だ', 'ﾁﾞ': 'ぢ', 'ﾂﾞ': 'づ', 'ﾃﾞ': 'で', 'ﾄﾞ': 'ど',
      'ﾊﾞ': 'ば', 'ﾋﾞ': 'び', 'ﾌﾞ': 'ぶ', 'ﾍﾞ': 'べ', 'ﾎﾞ': 'ぼ',
      'ﾊﾟ': 'ぱ', 'ﾋﾟ': 'ぴ', 'ﾌﾟ': 'ぷ', 'ﾍﾟ': 'ぺ', 'ﾎﾟ': 'ぽ',
      'ｳﾞ': 'ゔ',
    }
    const convertMap1 = {
      'ｱ': 'あ', 'ｲ': 'い', 'ｳ': 'う', 'ｴ': 'え', 'ｵ': 'お',
      'ｶ': 'か', 'ｷ': 'き', 'ｸ': 'く', 'ｹ': 'け', 'ｺ': 'こ',
      'ｻ': 'さ', 'ｼ': 'し', 'ｽ': 'す', 'ｾ': 'せ', 'ｿ': 'そ',
      'ﾀ': 'た', 'ﾁ': 'ち', 'ﾂ': 'つ', 'ﾃ': 'て', 'ﾄ': 'と',
      'ﾅ': 'な', 'ﾆ': 'に', 'ﾇ': 'ぬ', 'ﾈ': 'ね', 'ﾉ': 'の',
      'ﾊ': 'は', 'ﾋ': 'ひ', 'ﾌ': 'ふ', 'ﾍ': 'へ', 'ﾎ': 'ほ',
      'ﾏ': 'ま', 'ﾐ': 'み', 'ﾑ': 'む', 'ﾒ': 'め', 'ﾓ': 'も',
      'ﾔ': 'や', 'ﾕ': 'ゆ', 'ﾖ': 'よ',
      'ﾗ': 'ら', 'ﾘ': 'り', 'ﾙ': 'る', 'ﾚ': 'れ', 'ﾛ': 'ろ',
      'ﾜ': 'わ', 'ｦ': 'を', 'ﾝ': 'ん',
      'ｧ': 'ぁ', 'ｨ': 'ぃ', 'ｩ': 'ぅ', 'ｪ': 'ぇ', 'ｫ': 'ぉ',
      'ｬ': 'ゃ', 'ｭ': 'ゅ', 'ｮ': 'ょ', 'ｯ': 'っ',
      'ｰ': 'ー',
    }
    text = applyConvertMap(text, convertMap2)
    text = applyConvertMap(text, convertMap1)
    return text
  }

    /**
   * Convert zenkaku katakana to hankaku katakana.
   * @param {String} text
   * @return {String}
   * @example
   *  アイウエオ -> ｱｲｳｴｵ
   */
  static zenKataToHanKata(text){
    const convertMap = {
      'ア': 'ｱ', 'イ': 'ｲ', 'ウ': 'ｳ', 'エ': 'ｴ', 'オ': 'ｵ',
      'カ': 'ｶ', 'キ': 'ｷ', 'ク': 'ｸ', 'ケ': 'ｹ', 'コ': 'ｺ',
      'サ': 'ｻ', 'シ': 'ｼ', 'ス': 'ｽ', 'セ': 'ｾ', 'ソ': 'ｿ',
      'タ': 'ﾀ', 'チ': 'ﾁ', 'ツ': 'ﾂ', 'テ': 'ﾃ', 'ト': 'ﾄ',
      'ナ': 'ﾅ', 'ニ': 'ﾆ', 'ヌ': 'ﾇ', 'ネ': 'ﾈ', 'ノ': 'ﾉ',
      'ハ': 'ﾊ', 'ヒ': 'ﾋ', 'フ': 'ﾌ', 'ヘ': 'ﾍ', 'ホ': 'ﾎ',
      'マ': 'ﾏ', 'ミ': 'ﾐ', 'ム': 'ﾑ', 'メ': 'ﾒ', 'モ': 'ﾓ',
      'ヤ': 'ﾔ', 'ユ': 'ﾕ', 'ヨ': 'ﾖ',
      'ラ': 'ﾗ', 'リ': 'ﾘ', 'ル': 'ﾙ', 'レ': 'ﾚ', 'ロ': 'ﾛ',
      'ワ': 'ﾜ', 'ヲ': 'ｦ', 'ン': 'ﾝ',
      'ガ': 'ｶﾞ', 'ギ': 'ｷﾞ', 'グ': 'ｸﾞ', 'ゲ': 'ｹﾞ', 'ゴ': 'ｺﾞ',
      'ザ': 'ｻﾞ', 'ジ': 'ｼﾞ', 'ズ': 'ｽﾞ', 'ゼ': 'ｾﾞ', 'ゾ': 'ｿﾞ',
      'ダ': 'ﾀﾞ', 'ヂ': 'ﾁﾞ', 'ヅ': 'ﾂﾞ', 'デ': 'ﾃﾞ', 'ド': 'ﾄﾞ',
      'バ': 'ﾊﾞ', 'ビ': 'ﾋﾞ', 'ブ': 'ﾌﾞ', 'ベ': 'ﾍﾞ', 'ボ': 'ﾎﾞ',
      'パ': 'ﾊﾟ', 'ピ': 'ﾋﾟ', 'プ': 'ﾌﾟ', 'ペ': 'ﾍﾟ', 'ポ': 'ﾎﾟ',
      'ヴ': 'ｳﾞ',
      'ァ': 'ｧ', 'ィ': 'ｨ', 'ゥ': 'ｩ', 'ェ': 'ｪ', 'ォ': 'ｫ',
      'ャ': 'ｬ', 'ュ': 'ｭ', 'ョ': 'ｮ', 'ッ': 'ｯ',
      'ー': 'ｰ',
    }
    return applyConvertMap(text, convertMap)
  }

  /**
   * Convert hankaku katakana to zenkaku katakana.
   * @param {String} text
   * @return {String}
   * @example
   *  ｱｲｳｴｵ -> アイウエオ
   */
  static hanKataToZenKata(text){
    const convertMap2 = {
      'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
      'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
      'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
      'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
      'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
      'ｳﾞ': 'ヴ',
    }
    const convertMap1 = {
      'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
      'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
      'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
      'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
      'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
      'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
      'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
      'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
      'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
      'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
      'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
      'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ', 'ｯ': 'ッ',
      'ｰ': 'ー',
    }
    text = applyConvertMap(text, convertMap2)
    text = applyConvertMap(text, convertMap1)
    return text
  }

  /**
   * Convert numeric to zenkaku.
   * @param {String} text
   * @return {String}
   * @example
   *  0123456789 -> ０１２３４５６７８９
   */
  static numericToZenkaku(text){
    return text.replace(/[0-9]/g, charToZenkaku)
  }

  /**
   * Convert numeric to hankaku.
   * @param {String} text
   * @return {String}
   * @example
   *  ０１２３４５６７８９ -> 0123456789
   */
  static numericToHankaku(text){
    return text.replace(/[０-９]/g, charToHankaku)
  }

  /**
   * Convert alphabet to zenkaku.
   * @param {String} text
   * @return {String}
   * @example
   *  abcde -> ａｂｃｄｅｆ
   */
  static alphabetToZenkaku(text){
    return text.replace(/[a-zA-Z]/g, charToZenkaku)
  }

  /**
   * Convert alphabet to hankaku.
   * @param {String} text
   * @return {String}
   * @example
   *  ａｂｃｄｅｆ -> abcde
   */
  static alphabetToHankaku(text){
    return text.replace(/[ａ-ｚＡ-Ｚ]/g, charToHankaku)
  }

  /**
   * Convert symbol to zenkaku.
   * @param {String} text
   * @return {String}
   * @example
   *  !?(){} -> ！？（）｛｝
   */
  static symbolToZenkaku(text){
    return text.replace(/[!"#$%&'()*+,-./:;<=>?@\[\\\]^_`{|}~]/g, charToZenkaku)
  }

  /**
   * Convert symbol to hankaku.
   * @param {String} text
   * @return {String}
   * @example
   *  ！？（）｛｝ -> !?(){}
   */
  static symbolToHankaku(text){
    return text.replace(/[！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～]/g, charToHankaku)
  }

  /**
   * Convert to zenkaku.
   * @param {String} text
   * @return {String}
   * @example
   *  123abcｱｲｳ!? -> １２３ａｂｃアイウ！？
   */
  static toZenkaku(text){
    text = Nconv.alphabetToZenkaku(text)
    text = Nconv.numericToZenkaku(text)
    text = Nconv.hanKataToZenKata(text)
    text = Nconv.symbolToZenkaku(text)
    text = text.replace(/ /g, '　')
    return text
  }

  /**
   * Convert to hankaku.
   * @param {String} text
   * @return {String}
   * @example
   *  １２３ａｂｃアイウ！？ -> 123abcｱｲｳ!?
   */
  static toHankaku(text){
    text = Nconv.alphabetToHankaku(text)
    text = Nconv.numericToHankaku(text)
    text = Nconv.zenKataToHanKata(text)
    text = Nconv.symbolToHankaku(text)
    text = text.replace(/　/g, ' ')
    return text
  }

}

// private static methods

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

function charToHankaku(s){
  return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
}

function charToZenkaku(s){
  return String.fromCharCode(s.charCodeAt(0) + 0xFEE0)
}
