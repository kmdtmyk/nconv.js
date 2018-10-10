export default class{

  static romajiToHiragana(text){

    function applyConvertMap(text, convertMap){
      for(const key in convertMap){
        text = text.replace(new RegExp(key, 'g'), convertMap[key])
      }
      return text
    }

    const convertMap1 = {
      a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お',
    }
    const convertMap2 = {
      ka: 'か', ki: 'き', ku: 'く', ke: 'け', ko: 'こ',
      sa: 'さ', si: 'し', su: 'す', se: 'せ', so: 'そ',
      ta: 'た', ti: 'ち', tu: 'つ', te: 'て', to: 'と',
      na: 'な', ni: 'に', nu: 'ぬ', ne: 'ね', no: 'の',
      ha: 'は', hi: 'ひ', hu: 'ふ', he: 'へ', ho: 'ほ',
      ma: 'ま', mi: 'み', mu: 'む', me: 'め', mo: 'も',
      ya: 'や', yu: 'ゆ', yo: 'よ',
      ra: 'ら', ri: 'り', ru: 'る', re: 'れ', ro: 'ろ',
      wa: 'わ', wo: 'を',
      nn: 'ん',
    }

    text = applyConvertMap(text, convertMap2)
    text = applyConvertMap(text, convertMap1)
    return text
  }

}
