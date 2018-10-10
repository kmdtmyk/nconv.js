import Nconv from './nconv'

describe('romajiToHiragana', () => {
  test('基本', () => {
    expect(Nconv.romajiToHiragana('aiueo')).toBe('あいうえお')
    expect(Nconv.romajiToHiragana('kakikukeko')).toBe('かきくけこ')
    expect(Nconv.romajiToHiragana('sasisuseso')).toBe('さしすせそ')
    expect(Nconv.romajiToHiragana('tatituteto')).toBe('たちつてと')
    expect(Nconv.romajiToHiragana('naninuneno')).toBe('なにぬねの')
    expect(Nconv.romajiToHiragana('hahihuheho')).toBe('はひふへほ')
    expect(Nconv.romajiToHiragana('mamimumemo')).toBe('まみむめも')
    expect(Nconv.romajiToHiragana('yayuyeyo')).toBe('やゆいぇよ')
    expect(Nconv.romajiToHiragana('rarirurero')).toBe('らりるれろ')
    expect(Nconv.romajiToHiragana('wawo')).toBe('わを')
    expect(Nconv.romajiToHiragana('nn')).toBe('ん')
    expect(Nconv.romajiToHiragana('-')).toBe('ー')

    expect(Nconv.romajiToHiragana('gagigugego')).toBe('がぎぐげご')
    expect(Nconv.romajiToHiragana('zazizuzezo')).toBe('ざじずぜぞ')
    expect(Nconv.romajiToHiragana('dadidudedo')).toBe('だぢづでど')
    expect(Nconv.romajiToHiragana('babibubebo')).toBe('ばびぶべぼ')
    expect(Nconv.romajiToHiragana('papipupepo')).toBe('ぱぴぷぺぽ')

    expect(Nconv.romajiToHiragana('kyakyikyukyekyo')).toBe('きゃきぃきゅきぇきょ')
    expect(Nconv.romajiToHiragana('gyagyigyugyegyo')).toBe('ぎゃぎぃぎゅぎぇぎょ')
    expect(Nconv.romajiToHiragana('syasyisyusyesyo')).toBe('しゃしぃしゅしぇしょ')
    expect(Nconv.romajiToHiragana('zyazyizyuzyezyo')).toBe('じゃじぃじゅじぇじょ')
    expect(Nconv.romajiToHiragana('jyajyijyujyejyo')).toBe('じゃじぃじゅじぇじょ')
    expect(Nconv.romajiToHiragana('tyatyityutyetyo')).toBe('ちゃちぃちゅちぇちょ')
    expect(Nconv.romajiToHiragana('cyacyicyucyecyo')).toBe('ちゃちぃちゅちぇちょ')
    expect(Nconv.romajiToHiragana('dyadyidyudyedyo')).toBe('ぢゃぢぃぢゅぢぇぢょ')
    expect(Nconv.romajiToHiragana('hyahyihyuhyehyo')).toBe('ひゃひぃひゅひぇひょ')
    expect(Nconv.romajiToHiragana('byabyibyubyebyo')).toBe('びゃびぃびゅびぇびょ')

    expect(Nconv.romajiToHiragana('fafifufefo')).toBe('ふぁふぃふふぇふぉ')
    expect(Nconv.romajiToHiragana('jajijujejo')).toBe('じゃじじゅじぇじょ')
    expect(Nconv.romajiToHiragana('qaqiquqeqo')).toBe('くぁくぃくくぇくぉ')
    expect(Nconv.romajiToHiragana('vavivuvevo')).toBe('ゔぁゔぃゔゔぇゔぉ')

    expect(Nconv.romajiToHiragana('shi')).toBe('し')
    expect(Nconv.romajiToHiragana('chi')).toBe('ち')
    expect(Nconv.romajiToHiragana('tsu')).toBe('つ')

    expect(Nconv.romajiToHiragana('xaxixuxexo')).toBe('ぁぃぅぇぉ')
    expect(Nconv.romajiToHiragana('lalilulelo')).toBe('ぁぃぅぇぉ')
    expect(Nconv.romajiToHiragana('xyaxyuxyo')).toBe('ゃゅょ')
    expect(Nconv.romajiToHiragana('lyalyulyo')).toBe('ゃゅょ')
    expect(Nconv.romajiToHiragana('xtu')).toBe('っ')
    expect(Nconv.romajiToHiragana('ltu')).toBe('っ')
    expect(Nconv.romajiToHiragana('xtsu')).toBe('っ')
    expect(Nconv.romajiToHiragana('ltsu')).toBe('っ')

  })

  test('重ね子音字', () => {
    expect(Nconv.romajiToHiragana('kkakkikkukkekko')).toBe('っかっきっくっけっこ')
    expect(Nconv.romajiToHiragana('ssassissussesso')).toBe('っさっしっすっせっそ')
    expect(Nconv.romajiToHiragana('ttattittuttetto')).toBe('ったっちっつってっと')
    expect(Nconv.romajiToHiragana('nnanninnunnenno')).toBe('んあんいんうんえんお')
    expect(Nconv.romajiToHiragana('hhahhihhuhhehho')).toBe('っはっひっふっへっほ')
    expect(Nconv.romajiToHiragana('mmammimmummemmo')).toBe('っまっみっむっめっも')
    expect(Nconv.romajiToHiragana('yyayyuyyeyyo')).toBe('っやっゆっいぇっよ')
    expect(Nconv.romajiToHiragana('rrarrirrurrerro')).toBe('っらっりっるっれっろ')
    expect(Nconv.romajiToHiragana('wwawwo')).toBe('っわっを')

    expect(Nconv.romajiToHiragana('ggaggigguggeggo')).toBe('っがっぎっぐっげっご')
    expect(Nconv.romajiToHiragana('zzazzizzuzzezzo')).toBe('っざっじっずっぜっぞ')
    expect(Nconv.romajiToHiragana('ddaddidduddeddo')).toBe('っだっぢっづっでっど')
    expect(Nconv.romajiToHiragana('bbabbibbubbebbo')).toBe('っばっびっぶっべっぼ')
    expect(Nconv.romajiToHiragana('ppappippuppeppo')).toBe('っぱっぴっぷっぺっぽ')

    expect(Nconv.romajiToHiragana('kkyakkyikkyukkyekkyo')).toBe('っきゃっきぃっきゅっきぇっきょ')
    expect(Nconv.romajiToHiragana('ggyaggyiggyuggyeggyo')).toBe('っぎゃっぎぃっぎゅっぎぇっぎょ')
    expect(Nconv.romajiToHiragana('ssyassyissyussyessyo')).toBe('っしゃっしぃっしゅっしぇっしょ')
    expect(Nconv.romajiToHiragana('zzyazzyizzyuzzyezzyo')).toBe('っじゃっじぃっじゅっじぇっじょ')
    expect(Nconv.romajiToHiragana('jjyajjyijjyujjyejjyo')).toBe('っじゃっじぃっじゅっじぇっじょ')
    expect(Nconv.romajiToHiragana('ttyattyittyuttyettyo')).toBe('っちゃっちぃっちゅっちぇっちょ')
    expect(Nconv.romajiToHiragana('ccyaccyiccyuccyeccyo')).toBe('っちゃっちぃっちゅっちぇっちょ')
    expect(Nconv.romajiToHiragana('ddyaddyiddyuddyeddyo')).toBe('っぢゃっぢぃっぢゅっぢぇっぢょ')
    expect(Nconv.romajiToHiragana('hhyahhyihhyuhhyehhyo')).toBe('っひゃっひぃっひゅっひぇっひょ')
    expect(Nconv.romajiToHiragana('bbyabbyibbyubbyebbyo')).toBe('っびゃっびぃっびゅっびぇっびょ')

    expect(Nconv.romajiToHiragana('ffaffiffuffeffo')).toBe('っふぁっふぃっふっふぇっふぉ')
    expect(Nconv.romajiToHiragana('jjajjijjujjejjo')).toBe('っじゃっじっじゅっじぇっじょ')
    expect(Nconv.romajiToHiragana('qqaqqiqquqqeqqo')).toBe('っくぁっくぃっくっくぇっくぉ')
    expect(Nconv.romajiToHiragana('vvavvivvuvvevvo')).toBe('っゔぁっゔぃっゔっゔぇっゔぉ')

    expect(Nconv.romajiToHiragana('sshi')).toBe('っし')
    expect(Nconv.romajiToHiragana('cchi')).toBe('っち')
    expect(Nconv.romajiToHiragana('ttsu')).toBe('っつ')

    expect(Nconv.romajiToHiragana('xxaxxixxuxxexxo')).toBe('っぁっぃっぅっぇっぉ')
    expect(Nconv.romajiToHiragana('llallillullello')).toBe('っぁっぃっぅっぇっぉ')
    expect(Nconv.romajiToHiragana('xxyaxxyuxxyo')).toBe('っゃっゅっょ')
    expect(Nconv.romajiToHiragana('llyallyullyo')).toBe('っゃっゅっょ')
    expect(Nconv.romajiToHiragana('xxtu')).toBe('っっ')
    expect(Nconv.romajiToHiragana('lltu')).toBe('っっ')
    expect(Nconv.romajiToHiragana('xxtsu')).toBe('っっ')
    expect(Nconv.romajiToHiragana('lltsu')).toBe('っっ')

    expect(Nconv.romajiToHiragana('kkkkka')).toBe('っっっっか')
  })

  test('n', () => {
    expect(Nconv.romajiToHiragana('knkn')).toBe('kんkn')
  })

})

