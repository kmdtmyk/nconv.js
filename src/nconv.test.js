import Nconv from './nconv'

const allHiragana = 'ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをんゔゕゖ'
const allZenKata = 'ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ'

describe('romajiToHiragana', () => {
  test('basic', () => {
    expect(Nconv.romajiToHiragana('aiueo')).toBe('あいうえお')
    expect(Nconv.romajiToHiragana('kakikukeko')).toBe('かきくけこ')
    expect(Nconv.romajiToHiragana('sasisuseso')).toBe('さしすせそ')
    expect(Nconv.romajiToHiragana('tatituteto')).toBe('たちつてと')
    expect(Nconv.romajiToHiragana('naninuneno')).toBe('なにぬねの')
    expect(Nconv.romajiToHiragana('hahihuheho')).toBe('はひふへほ')
    expect(Nconv.romajiToHiragana('mamimumemo')).toBe('まみむめも')
    expect(Nconv.romajiToHiragana('yayuyeyo')).toBe('やゆいぇよ')
    expect(Nconv.romajiToHiragana('rarirurero')).toBe('らりるれろ')
    expect(Nconv.romajiToHiragana('wawiwuwewo')).toBe('わうぃううぇを')
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
    expect(Nconv.romajiToHiragana('shashishushesho')).toBe('しゃししゅしぇしょ')
    expect(Nconv.romajiToHiragana('zyazyizyuzyezyo')).toBe('じゃじぃじゅじぇじょ')
    expect(Nconv.romajiToHiragana('jyajyijyujyejyo')).toBe('じゃじぃじゅじぇじょ')
    expect(Nconv.romajiToHiragana('nyanyinyunyenyo')).toBe('にゃにぃにゅにぇにょ')
    expect(Nconv.romajiToHiragana('tyatyityutyetyo')).toBe('ちゃちぃちゅちぇちょ')
    expect(Nconv.romajiToHiragana('cyacyicyucyecyo')).toBe('ちゃちぃちゅちぇちょ')
    expect(Nconv.romajiToHiragana('dyadyidyudyedyo')).toBe('ぢゃぢぃぢゅぢぇぢょ')
    expect(Nconv.romajiToHiragana('dhadhidhudhedho')).toBe('でゃでぃでゅでぇでょ')
    expect(Nconv.romajiToHiragana('hyahyihyuhyehyo')).toBe('ひゃひぃひゅひぇひょ')
    expect(Nconv.romajiToHiragana('byabyibyubyebyo')).toBe('びゃびぃびゅびぇびょ')
    expect(Nconv.romajiToHiragana('pyapyipyupyepyo')).toBe('ぴゃぴぃぴゅぴぇぴょ')
    expect(Nconv.romajiToHiragana('myamyimyumyemyo')).toBe('みゃみぃみゅみぇみょ')
    expect(Nconv.romajiToHiragana('ryaryiryuryeryo')).toBe('りゃりぃりゅりぇりょ')

    expect(Nconv.romajiToHiragana('fafifufefo')).toBe('ふぁふぃふふぇふぉ')
    expect(Nconv.romajiToHiragana('jajijujejo')).toBe('じゃじじゅじぇじょ')
    expect(Nconv.romajiToHiragana('qaqiquqeqo')).toBe('くぁくぃくくぇくぉ')
    expect(Nconv.romajiToHiragana('vavivuvevo')).toBe('ゔぁゔぃゔゔぇゔぉ')

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

    expect(Nconv.romajiToHiragana('knkn')).toBe('kんkん')
  })

  test('double consonant', () => {
    expect(Nconv.romajiToHiragana('kkakkikkukkekko')).toBe('っかっきっくっけっこ')
    expect(Nconv.romajiToHiragana('ssassissussesso')).toBe('っさっしっすっせっそ')
    expect(Nconv.romajiToHiragana('ttattittuttetto')).toBe('ったっちっつってっと')
    expect(Nconv.romajiToHiragana('nnanninnunnenno')).toBe('んあんいんうんえんお')
    expect(Nconv.romajiToHiragana('hhahhihhuhhehho')).toBe('っはっひっふっへっほ')
    expect(Nconv.romajiToHiragana('mmammimmummemmo')).toBe('っまっみっむっめっも')
    expect(Nconv.romajiToHiragana('yyayyuyyeyyo')).toBe('っやっゆっいぇっよ')
    expect(Nconv.romajiToHiragana('rrarrirrurrerro')).toBe('っらっりっるっれっろ')
    expect(Nconv.romajiToHiragana('wwawwiwwuwwewwo')).toBe('っわっうぃっうっうぇっを')

    expect(Nconv.romajiToHiragana('ggaggigguggeggo')).toBe('っがっぎっぐっげっご')
    expect(Nconv.romajiToHiragana('zzazzizzuzzezzo')).toBe('っざっじっずっぜっぞ')
    expect(Nconv.romajiToHiragana('ddaddidduddeddo')).toBe('っだっぢっづっでっど')
    expect(Nconv.romajiToHiragana('bbabbibbubbebbo')).toBe('っばっびっぶっべっぼ')
    expect(Nconv.romajiToHiragana('ppappippuppeppo')).toBe('っぱっぴっぷっぺっぽ')

    expect(Nconv.romajiToHiragana('kkyakkyikkyukkyekkyo')).toBe('っきゃっきぃっきゅっきぇっきょ')
    expect(Nconv.romajiToHiragana('ggyaggyiggyuggyeggyo')).toBe('っぎゃっぎぃっぎゅっぎぇっぎょ')
    expect(Nconv.romajiToHiragana('ssyassyissyussyessyo')).toBe('っしゃっしぃっしゅっしぇっしょ')
    expect(Nconv.romajiToHiragana('sshasshisshusshessho')).toBe('っしゃっしっしゅっしぇっしょ')
    expect(Nconv.romajiToHiragana('zzyazzyizzyuzzyezzyo')).toBe('っじゃっじぃっじゅっじぇっじょ')
    expect(Nconv.romajiToHiragana('jjyajjyijjyujjyejjyo')).toBe('っじゃっじぃっじゅっじぇっじょ')
    expect(Nconv.romajiToHiragana('ttyattyittyuttyettyo')).toBe('っちゃっちぃっちゅっちぇっちょ')
    expect(Nconv.romajiToHiragana('ccyaccyiccyuccyeccyo')).toBe('っちゃっちぃっちゅっちぇっちょ')
    expect(Nconv.romajiToHiragana('ddyaddyiddyuddyeddyo')).toBe('っぢゃっぢぃっぢゅっぢぇっぢょ')
    expect(Nconv.romajiToHiragana('ddhaddhiddhuddheddho')).toBe('っでゃっでぃっでゅっでぇっでょ')
    expect(Nconv.romajiToHiragana('hhyahhyihhyuhhyehhyo')).toBe('っひゃっひぃっひゅっひぇっひょ')
    expect(Nconv.romajiToHiragana('bbyabbyibbyubbyebbyo')).toBe('っびゃっびぃっびゅっびぇっびょ')
    expect(Nconv.romajiToHiragana('ppyappyippyuppyeppyo')).toBe('っぴゃっぴぃっぴゅっぴぇっぴょ')
    expect(Nconv.romajiToHiragana('mmyammyimmyummyemmyo')).toBe('っみゃっみぃっみゅっみぇっみょ')
    expect(Nconv.romajiToHiragana('rryarryirryurryerryo')).toBe('っりゃっりぃっりゅっりぇっりょ')

    expect(Nconv.romajiToHiragana('ffaffiffuffeffo')).toBe('っふぁっふぃっふっふぇっふぉ')
    expect(Nconv.romajiToHiragana('jjajjijjujjejjo')).toBe('っじゃっじっじゅっじぇっじょ')
    expect(Nconv.romajiToHiragana('qqaqqiqquqqeqqo')).toBe('っくぁっくぃっくっくぇっくぉ')
    expect(Nconv.romajiToHiragana('vvavvivvuvvevvo')).toBe('っゔぁっゔぃっゔっゔぇっゔぉ')

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

})

describe('romajiToZenKata', () => {
  test('basic', () => {
    expect(Nconv.romajiToZenKata('aiueo')).toBe('アイウエオ')
    expect(Nconv.romajiToZenKata('kakikukeko')).toBe('カキクケコ')
    expect(Nconv.romajiToZenKata('sasisuseso')).toBe('サシスセソ')
    expect(Nconv.romajiToZenKata('tatituteto')).toBe('タチツテト')
    expect(Nconv.romajiToZenKata('naninuneno')).toBe('ナニヌネノ')
    expect(Nconv.romajiToZenKata('hahihuheho')).toBe('ハヒフヘホ')
    expect(Nconv.romajiToZenKata('mamimumemo')).toBe('マミムメモ')
    expect(Nconv.romajiToZenKata('yayuyeyo')).toBe('ヤユイェヨ')
    expect(Nconv.romajiToZenKata('rarirurero')).toBe('ラリルレロ')
    expect(Nconv.romajiToZenKata('wawiwuwewo')).toBe('ワウィウウェヲ')
    expect(Nconv.romajiToZenKata('nn')).toBe('ン')
    expect(Nconv.romajiToZenKata('-')).toBe('ー')

    expect(Nconv.romajiToZenKata('gagigugego')).toBe('ガギグゲゴ')
    expect(Nconv.romajiToZenKata('zazizuzezo')).toBe('ザジズゼゾ')
    expect(Nconv.romajiToZenKata('dadidudedo')).toBe('ダヂヅデド')
    expect(Nconv.romajiToZenKata('babibubebo')).toBe('バビブベボ')
    expect(Nconv.romajiToZenKata('papipupepo')).toBe('パピプペポ')

    expect(Nconv.romajiToZenKata('kyakyikyukyekyo')).toBe('キャキィキュキェキョ')
    expect(Nconv.romajiToZenKata('gyagyigyugyegyo')).toBe('ギャギィギュギェギョ')
    expect(Nconv.romajiToZenKata('syasyisyusyesyo')).toBe('シャシィシュシェショ')
    expect(Nconv.romajiToZenKata('shashishushesho')).toBe('シャシシュシェショ')
    expect(Nconv.romajiToZenKata('zyazyizyuzyezyo')).toBe('ジャジィジュジェジョ')
    expect(Nconv.romajiToZenKata('jyajyijyujyejyo')).toBe('ジャジィジュジェジョ')
    expect(Nconv.romajiToZenKata('nyanyinyunyenyo')).toBe('ニャニィニュニェニョ')
    expect(Nconv.romajiToZenKata('tyatyityutyetyo')).toBe('チャチィチュチェチョ')
    expect(Nconv.romajiToZenKata('cyacyicyucyecyo')).toBe('チャチィチュチェチョ')
    expect(Nconv.romajiToZenKata('dyadyidyudyedyo')).toBe('ヂャヂィヂュヂェヂョ')
    expect(Nconv.romajiToZenKata('dhadhidhudhedho')).toBe('デャディデュデェデョ')
    expect(Nconv.romajiToZenKata('hyahyihyuhyehyo')).toBe('ヒャヒィヒュヒェヒョ')
    expect(Nconv.romajiToZenKata('byabyibyubyebyo')).toBe('ビャビィビュビェビョ')
    expect(Nconv.romajiToZenKata('pyapyipyupyepyo')).toBe('ピャピィピュピェピョ')
    expect(Nconv.romajiToZenKata('myamyimyumyemyo')).toBe('ミャミィミュミェミョ')
    expect(Nconv.romajiToZenKata('ryaryiryuryeryo')).toBe('リャリィリュリェリョ')

    expect(Nconv.romajiToZenKata('fafifufefo')).toBe('ファフィフフェフォ')
    expect(Nconv.romajiToZenKata('jajijujejo')).toBe('ジャジジュジェジョ')
    expect(Nconv.romajiToZenKata('qaqiquqeqo')).toBe('クァクィククェクォ')
    expect(Nconv.romajiToZenKata('vavivuvevo')).toBe('ヴァヴィヴヴェヴォ')

    expect(Nconv.romajiToZenKata('chi')).toBe('チ')
    expect(Nconv.romajiToZenKata('tsu')).toBe('ツ')

    expect(Nconv.romajiToZenKata('xaxixuxexo')).toBe('ァィゥェォ')
    expect(Nconv.romajiToZenKata('lalilulelo')).toBe('ァィゥェォ')
    expect(Nconv.romajiToZenKata('xyaxyuxyo')).toBe('ャュョ')
    expect(Nconv.romajiToZenKata('lyalyulyo')).toBe('ャュョ')
    expect(Nconv.romajiToZenKata('xtu')).toBe('ッ')
    expect(Nconv.romajiToZenKata('ltu')).toBe('ッ')
    expect(Nconv.romajiToZenKata('xtsu')).toBe('ッ')
    expect(Nconv.romajiToZenKata('ltsu')).toBe('ッ')

    expect(Nconv.romajiToZenKata('knkn')).toBe('kンkン')
  })

  test('double consonant', () => {
    expect(Nconv.romajiToZenKata('kkakkikkukkekko')).toBe('ッカッキックッケッコ')
    expect(Nconv.romajiToZenKata('ssassissussesso')).toBe('ッサッシッスッセッソ')
    expect(Nconv.romajiToZenKata('ttattittuttetto')).toBe('ッタッチッツッテット')
    expect(Nconv.romajiToZenKata('nnanninnunnenno')).toBe('ンアンインウンエンオ')
    expect(Nconv.romajiToZenKata('hhahhihhuhhehho')).toBe('ッハッヒッフッヘッホ')
    expect(Nconv.romajiToZenKata('mmammimmummemmo')).toBe('ッマッミッムッメッモ')
    expect(Nconv.romajiToZenKata('yyayyuyyeyyo')).toBe('ッヤッユッイェッヨ')
    expect(Nconv.romajiToZenKata('rrarrirrurrerro')).toBe('ッラッリッルッレッロ')
    expect(Nconv.romajiToZenKata('wwawwiwwuwwewwo')).toBe('ッワッウィッウッウェッヲ')

    expect(Nconv.romajiToZenKata('ggaggigguggeggo')).toBe('ッガッギッグッゲッゴ')
    expect(Nconv.romajiToZenKata('zzazzizzuzzezzo')).toBe('ッザッジッズッゼッゾ')
    expect(Nconv.romajiToZenKata('ddaddidduddeddo')).toBe('ッダッヂッヅッデッド')
    expect(Nconv.romajiToZenKata('bbabbibbubbebbo')).toBe('ッバッビッブッベッボ')
    expect(Nconv.romajiToZenKata('ppappippuppeppo')).toBe('ッパッピップッペッポ')

    expect(Nconv.romajiToZenKata('kkyakkyikkyukkyekkyo')).toBe('ッキャッキィッキュッキェッキョ')
    expect(Nconv.romajiToZenKata('ggyaggyiggyuggyeggyo')).toBe('ッギャッギィッギュッギェッギョ')
    expect(Nconv.romajiToZenKata('ssyassyissyussyessyo')).toBe('ッシャッシィッシュッシェッショ')
    expect(Nconv.romajiToZenKata('sshasshisshusshessho')).toBe('ッシャッシッシュッシェッショ')
    expect(Nconv.romajiToZenKata('zzyazzyizzyuzzyezzyo')).toBe('ッジャッジィッジュッジェッジョ')
    expect(Nconv.romajiToZenKata('jjyajjyijjyujjyejjyo')).toBe('ッジャッジィッジュッジェッジョ')
    expect(Nconv.romajiToZenKata('ttyattyittyuttyettyo')).toBe('ッチャッチィッチュッチェッチョ')
    expect(Nconv.romajiToZenKata('ccyaccyiccyuccyeccyo')).toBe('ッチャッチィッチュッチェッチョ')
    expect(Nconv.romajiToZenKata('ddyaddyiddyuddyeddyo')).toBe('ッヂャッヂィッヂュッヂェッヂョ')
    expect(Nconv.romajiToZenKata('ddhaddhiddhuddheddho')).toBe('ッデャッディッデュッデェッデョ')
    expect(Nconv.romajiToZenKata('hhyahhyihhyuhhyehhyo')).toBe('ッヒャッヒィッヒュッヒェッヒョ')
    expect(Nconv.romajiToZenKata('bbyabbyibbyubbyebbyo')).toBe('ッビャッビィッビュッビェッビョ')
    expect(Nconv.romajiToZenKata('ppyappyippyuppyeppyo')).toBe('ッピャッピィッピュッピェッピョ')
    expect(Nconv.romajiToZenKata('mmyammyimmyummyemmyo')).toBe('ッミャッミィッミュッミェッミョ')
    expect(Nconv.romajiToZenKata('rryarryirryurryerryo')).toBe('ッリャッリィッリュッリェッリョ')

    expect(Nconv.romajiToZenKata('ffaffiffuffeffo')).toBe('ッファッフィッフッフェッフォ')
    expect(Nconv.romajiToZenKata('jjajjijjujjejjo')).toBe('ッジャッジッジュッジェッジョ')
    expect(Nconv.romajiToZenKata('qqaqqiqquqqeqqo')).toBe('ックァックィックックェックォ')
    expect(Nconv.romajiToZenKata('vvavvivvuvvevvo')).toBe('ッヴァッヴィッヴッヴェッヴォ')

    expect(Nconv.romajiToZenKata('cchi')).toBe('ッチ')
    expect(Nconv.romajiToZenKata('ttsu')).toBe('ッツ')

    expect(Nconv.romajiToZenKata('xxaxxixxuxxexxo')).toBe('ッァッィッゥッェッォ')
    expect(Nconv.romajiToZenKata('llallillullello')).toBe('ッァッィッゥッェッォ')
    expect(Nconv.romajiToZenKata('xxyaxxyuxxyo')).toBe('ッャッュッョ')
    expect(Nconv.romajiToZenKata('llyallyullyo')).toBe('ッャッュッョ')
    expect(Nconv.romajiToZenKata('xxtu')).toBe('ッッ')
    expect(Nconv.romajiToZenKata('lltu')).toBe('ッッ')
    expect(Nconv.romajiToZenKata('xxtsu')).toBe('ッッ')
    expect(Nconv.romajiToZenKata('lltsu')).toBe('ッッ')

    expect(Nconv.romajiToZenKata('kkkkka')).toBe('ッッッッカ')
  })

})

describe('romajiToHanKata', () => {
  test('basic', () => {
    expect(Nconv.romajiToHanKata('aiueo')).toBe('ｱｲｳｴｵ')
    expect(Nconv.romajiToHanKata('kakikukeko')).toBe('ｶｷｸｹｺ')
    expect(Nconv.romajiToHanKata('sasisuseso')).toBe('ｻｼｽｾｿ')
    expect(Nconv.romajiToHanKata('tatituteto')).toBe('ﾀﾁﾂﾃﾄ')
    expect(Nconv.romajiToHanKata('naninuneno')).toBe('ﾅﾆﾇﾈﾉ')
    expect(Nconv.romajiToHanKata('hahihuheho')).toBe('ﾊﾋﾌﾍﾎ')
    expect(Nconv.romajiToHanKata('mamimumemo')).toBe('ﾏﾐﾑﾒﾓ')
    expect(Nconv.romajiToHanKata('yayuyeyo')).toBe('ﾔﾕｲｪﾖ')
    expect(Nconv.romajiToHanKata('rarirurero')).toBe('ﾗﾘﾙﾚﾛ')
    expect(Nconv.romajiToHanKata('wawiwuwewo')).toBe('ﾜｳｨｳｳｪｦ')
    expect(Nconv.romajiToHanKata('nn')).toBe('ﾝ')
    expect(Nconv.romajiToHanKata('-')).toBe('ｰ')

    expect(Nconv.romajiToHanKata('gagigugego')).toBe('ｶﾞｷﾞｸﾞｹﾞｺﾞ')
    expect(Nconv.romajiToHanKata('zazizuzezo')).toBe('ｻﾞｼﾞｽﾞｾﾞｿﾞ')
    expect(Nconv.romajiToHanKata('dadidudedo')).toBe('ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ')
    expect(Nconv.romajiToHanKata('babibubebo')).toBe('ﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞ')
    expect(Nconv.romajiToHanKata('papipupepo')).toBe('ﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ')

    expect(Nconv.romajiToHanKata('kyakyikyukyekyo')).toBe('ｷｬｷｨｷｭｷｪｷｮ')
    expect(Nconv.romajiToHanKata('gyagyigyugyegyo')).toBe('ｷﾞｬｷﾞｨｷﾞｭｷﾞｪｷﾞｮ')
    expect(Nconv.romajiToHanKata('syasyisyusyesyo')).toBe('ｼｬｼｨｼｭｼｪｼｮ')
    expect(Nconv.romajiToHanKata('shashishushesho')).toBe('ｼｬｼｼｭｼｪｼｮ')
    expect(Nconv.romajiToHanKata('zyazyizyuzyezyo')).toBe('ｼﾞｬｼﾞｨｼﾞｭｼﾞｪｼﾞｮ')
    expect(Nconv.romajiToHanKata('jyajyijyujyejyo')).toBe('ｼﾞｬｼﾞｨｼﾞｭｼﾞｪｼﾞｮ')
    expect(Nconv.romajiToHanKata('nyanyinyunyenyo')).toBe('ﾆｬﾆｨﾆｭﾆｪﾆｮ')
    expect(Nconv.romajiToHanKata('tyatyityutyetyo')).toBe('ﾁｬﾁｨﾁｭﾁｪﾁｮ')
    expect(Nconv.romajiToHanKata('cyacyicyucyecyo')).toBe('ﾁｬﾁｨﾁｭﾁｪﾁｮ')
    expect(Nconv.romajiToHanKata('dyadyidyudyedyo')).toBe('ﾁﾞｬﾁﾞｨﾁﾞｭﾁﾞｪﾁﾞｮ')
    expect(Nconv.romajiToHanKata('dhadhidhudhedho')).toBe('ﾃﾞｬﾃﾞｨﾃﾞｭﾃﾞｪﾃﾞｮ')
    expect(Nconv.romajiToHanKata('hyahyihyuhyehyo')).toBe('ﾋｬﾋｨﾋｭﾋｪﾋｮ')
    expect(Nconv.romajiToHanKata('byabyibyubyebyo')).toBe('ﾋﾞｬﾋﾞｨﾋﾞｭﾋﾞｪﾋﾞｮ')
    expect(Nconv.romajiToHanKata('pyapyipyupyepyo')).toBe('ﾋﾟｬﾋﾟｨﾋﾟｭﾋﾟｪﾋﾟｮ')
    expect(Nconv.romajiToHanKata('ryaryiryuryeryo')).toBe('ﾘｬﾘｨﾘｭﾘｪﾘｮ')
    expect(Nconv.romajiToHanKata('myamyimyumyemyo')).toBe('ﾐｬﾐｨﾐｭﾐｪﾐｮ')

    expect(Nconv.romajiToHanKata('fafifufefo')).toBe('ﾌｧﾌｨﾌﾌｪﾌｫ')
    expect(Nconv.romajiToHanKata('jajijujejo')).toBe('ｼﾞｬｼﾞｼﾞｭｼﾞｪｼﾞｮ')
    expect(Nconv.romajiToHanKata('qaqiquqeqo')).toBe('ｸｧｸｨｸｸｪｸｫ')
    expect(Nconv.romajiToHanKata('vavivuvevo')).toBe('ｳﾞｧｳﾞｨｳﾞｳﾞｪｳﾞｫ')

    expect(Nconv.romajiToHanKata('chi')).toBe('ﾁ')
    expect(Nconv.romajiToHanKata('tsu')).toBe('ﾂ')

    expect(Nconv.romajiToHanKata('xaxixuxexo')).toBe('ｧｨｩｪｫ')
    expect(Nconv.romajiToHanKata('lalilulelo')).toBe('ｧｨｩｪｫ')
    expect(Nconv.romajiToHanKata('xyaxyuxyo')).toBe('ｬｭｮ')
    expect(Nconv.romajiToHanKata('lyalyulyo')).toBe('ｬｭｮ')
    expect(Nconv.romajiToHanKata('xtu')).toBe('ｯ')
    expect(Nconv.romajiToHanKata('ltu')).toBe('ｯ')
    expect(Nconv.romajiToHanKata('xtsu')).toBe('ｯ')
    expect(Nconv.romajiToHanKata('ltsu')).toBe('ｯ')

    expect(Nconv.romajiToHanKata('knkn')).toBe('kﾝkﾝ')
  })

  test('double consonant', () => {
    expect(Nconv.romajiToHanKata('kkakkikkukkekko')).toBe('ｯｶｯｷｯｸｯｹｯｺ')
    expect(Nconv.romajiToHanKata('ssassissussesso')).toBe('ｯｻｯｼｯｽｯｾｯｿ')
    expect(Nconv.romajiToHanKata('ttattittuttetto')).toBe('ｯﾀｯﾁｯﾂｯﾃｯﾄ')
    expect(Nconv.romajiToHanKata('nnanninnunnenno')).toBe('ﾝｱﾝｲﾝｳﾝｴﾝｵ')
    expect(Nconv.romajiToHanKata('hhahhihhuhhehho')).toBe('ｯﾊｯﾋｯﾌｯﾍｯﾎ')
    expect(Nconv.romajiToHanKata('mmammimmummemmo')).toBe('ｯﾏｯﾐｯﾑｯﾒｯﾓ')
    expect(Nconv.romajiToHanKata('yyayyuyyeyyo')).toBe('ｯﾔｯﾕｯｲｪｯﾖ')
    expect(Nconv.romajiToHanKata('rrarrirrurrerro')).toBe('ｯﾗｯﾘｯﾙｯﾚｯﾛ')
    expect(Nconv.romajiToHanKata('wwawwiwwuwwewwo')).toBe('ｯﾜｯｳｨｯｳｯｳｪｯｦ')

    expect(Nconv.romajiToHanKata('ggaggigguggeggo')).toBe('ｯｶﾞｯｷﾞｯｸﾞｯｹﾞｯｺﾞ')
    expect(Nconv.romajiToHanKata('zzazzizzuzzezzo')).toBe('ｯｻﾞｯｼﾞｯｽﾞｯｾﾞｯｿﾞ')
    expect(Nconv.romajiToHanKata('ddaddidduddeddo')).toBe('ｯﾀﾞｯﾁﾞｯﾂﾞｯﾃﾞｯﾄﾞ')
    expect(Nconv.romajiToHanKata('bbabbibbubbebbo')).toBe('ｯﾊﾞｯﾋﾞｯﾌﾞｯﾍﾞｯﾎﾞ')
    expect(Nconv.romajiToHanKata('ppappippuppeppo')).toBe('ｯﾊﾟｯﾋﾟｯﾌﾟｯﾍﾟｯﾎﾟ')

    expect(Nconv.romajiToHanKata('kkyakkyikkyukkyekkyo')).toBe('ｯｷｬｯｷｨｯｷｭｯｷｪｯｷｮ')
    expect(Nconv.romajiToHanKata('ggyaggyiggyuggyeggyo')).toBe('ｯｷﾞｬｯｷﾞｨｯｷﾞｭｯｷﾞｪｯｷﾞｮ')
    expect(Nconv.romajiToHanKata('ssyassyissyussyessyo')).toBe('ｯｼｬｯｼｨｯｼｭｯｼｪｯｼｮ')
    expect(Nconv.romajiToHanKata('sshasshisshusshessho')).toBe('ｯｼｬｯｼｯｼｭｯｼｪｯｼｮ')
    expect(Nconv.romajiToHanKata('zzyazzyizzyuzzyezzyo')).toBe('ｯｼﾞｬｯｼﾞｨｯｼﾞｭｯｼﾞｪｯｼﾞｮ')
    expect(Nconv.romajiToHanKata('jjyajjyijjyujjyejjyo')).toBe('ｯｼﾞｬｯｼﾞｨｯｼﾞｭｯｼﾞｪｯｼﾞｮ')
    expect(Nconv.romajiToHanKata('ttyattyittyuttyettyo')).toBe('ｯﾁｬｯﾁｨｯﾁｭｯﾁｪｯﾁｮ')
    expect(Nconv.romajiToHanKata('ccyaccyiccyuccyeccyo')).toBe('ｯﾁｬｯﾁｨｯﾁｭｯﾁｪｯﾁｮ')
    expect(Nconv.romajiToHanKata('ddyaddyiddyuddyeddyo')).toBe('ｯﾁﾞｬｯﾁﾞｨｯﾁﾞｭｯﾁﾞｪｯﾁﾞｮ')
    expect(Nconv.romajiToHanKata('ddhaddhiddhuddheddho')).toBe('ｯﾃﾞｬｯﾃﾞｨｯﾃﾞｭｯﾃﾞｪｯﾃﾞｮ')
    expect(Nconv.romajiToHanKata('hhyahhyihhyuhhyehhyo')).toBe('ｯﾋｬｯﾋｨｯﾋｭｯﾋｪｯﾋｮ')
    expect(Nconv.romajiToHanKata('bbyabbyibbyubbyebbyo')).toBe('ｯﾋﾞｬｯﾋﾞｨｯﾋﾞｭｯﾋﾞｪｯﾋﾞｮ')
    expect(Nconv.romajiToHanKata('ppyappyippyuppyeppyo')).toBe('ｯﾋﾟｬｯﾋﾟｨｯﾋﾟｭｯﾋﾟｪｯﾋﾟｮ')
    expect(Nconv.romajiToHanKata('mmyammyimmyummyemmyo')).toBe('ｯﾐｬｯﾐｨｯﾐｭｯﾐｪｯﾐｮ')
    expect(Nconv.romajiToHanKata('rryarryirryurryerryo')).toBe('ｯﾘｬｯﾘｨｯﾘｭｯﾘｪｯﾘｮ')

    expect(Nconv.romajiToHanKata('ffaffiffuffeffo')).toBe('ｯﾌｧｯﾌｨｯﾌｯﾌｪｯﾌｫ')
    expect(Nconv.romajiToHanKata('jjajjijjujjejjo')).toBe('ｯｼﾞｬｯｼﾞｯｼﾞｭｯｼﾞｪｯｼﾞｮ')
    expect(Nconv.romajiToHanKata('qqaqqiqquqqeqqo')).toBe('ｯｸｧｯｸｨｯｸｯｸｪｯｸｫ')
    expect(Nconv.romajiToHanKata('vvavvivvuvvevvo')).toBe('ｯｳﾞｧｯｳﾞｨｯｳﾞｯｳﾞｪｯｳﾞｫ')

    expect(Nconv.romajiToHanKata('cchi')).toBe('ｯﾁ')
    expect(Nconv.romajiToHanKata('ttsu')).toBe('ｯﾂ')

    expect(Nconv.romajiToHanKata('xxaxxixxuxxexxo')).toBe('ｯｧｯｨｯｩｯｪｯｫ')
    expect(Nconv.romajiToHanKata('llallillullello')).toBe('ｯｧｯｨｯｩｯｪｯｫ')
    expect(Nconv.romajiToHanKata('xxyaxxyuxxyo')).toBe('ｯｬｯｭｯｮ')
    expect(Nconv.romajiToHanKata('llyallyullyo')).toBe('ｯｬｯｭｯｮ')
    expect(Nconv.romajiToHanKata('xxtu')).toBe('ｯｯ')
    expect(Nconv.romajiToHanKata('lltu')).toBe('ｯｯ')
    expect(Nconv.romajiToHanKata('xxtsu')).toBe('ｯｯ')
    expect(Nconv.romajiToHanKata('lltsu')).toBe('ｯｯ')

    expect(Nconv.romajiToHanKata('kkkkka')).toBe('ｯｯｯｯｶ')
  })

})

test('hiraganaToZenKata', () => {
  expect(Nconv.hiraganaToZenKata('あいうえお')).toBe('アイウエオ')
  expect(Nconv.hiraganaToZenKata('かきくけこ')).toBe('カキクケコ')
  expect(Nconv.hiraganaToZenKata('さしすせそ')).toBe('サシスセソ')
  expect(Nconv.hiraganaToZenKata('たちつてと')).toBe('タチツテト')
  expect(Nconv.hiraganaToZenKata('なにぬねの')).toBe('ナニヌネノ')
  expect(Nconv.hiraganaToZenKata('はひふへほ')).toBe('ハヒフヘホ')
  expect(Nconv.hiraganaToZenKata('まみむめも')).toBe('マミムメモ')
  expect(Nconv.hiraganaToZenKata('やゆよ')).toBe('ヤユヨ')
  expect(Nconv.hiraganaToZenKata('わをん')).toBe('ワヲン')
  expect(Nconv.hiraganaToZenKata('がぎぐげご')).toBe('ガギグゲゴ')
  expect(Nconv.hiraganaToZenKata('ざじずぜぞ')).toBe('ザジズゼゾ')
  expect(Nconv.hiraganaToZenKata('だぢづでど')).toBe('ダヂヅデド')
  expect(Nconv.hiraganaToZenKata('ばびぶべぼ')).toBe('バビブベボ')
  expect(Nconv.hiraganaToZenKata('ぱぴぷぺぽ')).toBe('パピプペポ')
  expect(Nconv.hiraganaToZenKata('ゔ')).toBe('ヴ')
  expect(Nconv.hiraganaToZenKata('ぁぃぅぇぉ')).toBe('ァィゥェォ')
  expect(Nconv.hiraganaToZenKata('ゃゅょ')).toBe('ャュョ')
  expect(Nconv.hiraganaToZenKata('っ')).toBe('ッ')
  expect(Nconv.hiraganaToZenKata('ー')).toBe('ー')
  expect(Nconv.hiraganaToZenKata('う゛')).toBe('ヴ')

  expect(Nconv.hiraganaToZenKata(allZenKata)).toBe(allZenKata)
})

test('zenKataToHiragana', () => {
  expect(Nconv.zenKataToHiragana('アイウエオ')).toBe('あいうえお')
  expect(Nconv.zenKataToHiragana('カキクケコ')).toBe('かきくけこ')
  expect(Nconv.zenKataToHiragana('サシスセソ')).toBe('さしすせそ')
  expect(Nconv.zenKataToHiragana('タチツテト')).toBe('たちつてと')
  expect(Nconv.zenKataToHiragana('ナニヌネノ')).toBe('なにぬねの')
  expect(Nconv.zenKataToHiragana('ハヒフヘホ')).toBe('はひふへほ')
  expect(Nconv.zenKataToHiragana('マミムメモ')).toBe('まみむめも')
  expect(Nconv.zenKataToHiragana('ヤユヨ')).toBe('やゆよ')
  expect(Nconv.zenKataToHiragana('ワヲン')).toBe('わをん')
  expect(Nconv.zenKataToHiragana('ガギグゲゴ')).toBe('がぎぐげご')
  expect(Nconv.zenKataToHiragana('ザジズゼゾ')).toBe('ざじずぜぞ')
  expect(Nconv.zenKataToHiragana('ダヂヅデド')).toBe('だぢづでど')
  expect(Nconv.zenKataToHiragana('バビブベボ')).toBe('ばびぶべぼ')
  expect(Nconv.zenKataToHiragana('パピプペポ')).toBe('ぱぴぷぺぽ')
  expect(Nconv.zenKataToHiragana('ヴ')).toBe('ゔ')
  expect(Nconv.zenKataToHiragana('ァィゥェォ')).toBe('ぁぃぅぇぉ')
  expect(Nconv.zenKataToHiragana('ャュョ')).toBe('ゃゅょ')
  expect(Nconv.zenKataToHiragana('ッ')).toBe('っ')
  expect(Nconv.zenKataToHiragana('ー')).toBe('ー')

  expect(Nconv.zenKataToHiragana(allHiragana)).toBe(allHiragana)
})

test('hiraganaToHanKata', () => {
  expect(Nconv.hiraganaToHanKata('あいうえお')).toBe('ｱｲｳｴｵ')
  expect(Nconv.hiraganaToHanKata('かきくけこ')).toBe('ｶｷｸｹｺ')
  expect(Nconv.hiraganaToHanKata('さしすせそ')).toBe('ｻｼｽｾｿ')
  expect(Nconv.hiraganaToHanKata('たちつてと')).toBe('ﾀﾁﾂﾃﾄ')
  expect(Nconv.hiraganaToHanKata('なにぬねの')).toBe('ﾅﾆﾇﾈﾉ')
  expect(Nconv.hiraganaToHanKata('はひふへほ')).toBe('ﾊﾋﾌﾍﾎ')
  expect(Nconv.hiraganaToHanKata('まみむめも')).toBe('ﾏﾐﾑﾒﾓ')
  expect(Nconv.hiraganaToHanKata('やゆよ')).toBe('ﾔﾕﾖ')
  expect(Nconv.hiraganaToHanKata('わをん')).toBe('ﾜｦﾝ')
  expect(Nconv.hiraganaToHanKata('がぎぐげご')).toBe('ｶﾞｷﾞｸﾞｹﾞｺﾞ')
  expect(Nconv.hiraganaToHanKata('ざじずぜぞ')).toBe('ｻﾞｼﾞｽﾞｾﾞｿﾞ')
  expect(Nconv.hiraganaToHanKata('だぢづでど')).toBe('ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ')
  expect(Nconv.hiraganaToHanKata('ばびぶべぼ')).toBe('ﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞ')
  expect(Nconv.hiraganaToHanKata('ぱぴぷぺぽ')).toBe('ﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ')
  expect(Nconv.hiraganaToHanKata('ゔ')).toBe('ｳﾞ')
  expect(Nconv.hiraganaToHanKata('ぁぃぅぇぉ')).toBe('ｧｨｩｪｫ')
  expect(Nconv.hiraganaToHanKata('ゃゅょ')).toBe('ｬｭｮ')
  expect(Nconv.hiraganaToHanKata('っ')).toBe('ｯ')
  expect(Nconv.hiraganaToHanKata('ー')).toBe('ｰ')
})

test('hanKataToHiragana', () => {
  expect(Nconv.hanKataToHiragana('ｱｲｳｴｵ')).toBe('あいうえお')
  expect(Nconv.hanKataToHiragana('ｶｷｸｹｺ')).toBe('かきくけこ')
  expect(Nconv.hanKataToHiragana('ｻｼｽｾｿ')).toBe('さしすせそ')
  expect(Nconv.hanKataToHiragana('ﾀﾁﾂﾃﾄ')).toBe('たちつてと')
  expect(Nconv.hanKataToHiragana('ﾅﾆﾇﾈﾉ')).toBe('なにぬねの')
  expect(Nconv.hanKataToHiragana('ﾊﾋﾌﾍﾎ')).toBe('はひふへほ')
  expect(Nconv.hanKataToHiragana('ﾏﾐﾑﾒﾓ')).toBe('まみむめも')
  expect(Nconv.hanKataToHiragana('ﾔﾕﾖ')).toBe('やゆよ')
  expect(Nconv.hanKataToHiragana('ﾜｦﾝ')).toBe('わをん')
  expect(Nconv.hanKataToHiragana('ｶﾞｷﾞｸﾞｹﾞｺﾞ')).toBe('がぎぐげご')
  expect(Nconv.hanKataToHiragana('ｻﾞｼﾞｽﾞｾﾞｿﾞ')).toBe('ざじずぜぞ')
  expect(Nconv.hanKataToHiragana('ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ')).toBe('だぢづでど')
  expect(Nconv.hanKataToHiragana('ﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞ')).toBe('ばびぶべぼ')
  expect(Nconv.hanKataToHiragana('ﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ')).toBe('ぱぴぷぺぽ')
  expect(Nconv.hanKataToHiragana('ｳﾞ')).toBe('ゔ')
  expect(Nconv.hanKataToHiragana('ｧｨｩｪｫ')).toBe('ぁぃぅぇぉ')
  expect(Nconv.hanKataToHiragana('ｬｭｮ')).toBe('ゃゅょ')
  expect(Nconv.hanKataToHiragana('ｯ')).toBe('っ')
  expect(Nconv.hanKataToHiragana('ｰ')).toBe('ー')
})

test('zenKataToHanKata', () => {
  expect(Nconv.zenKataToHanKata('アイウエオ')).toBe('ｱｲｳｴｵ')
  expect(Nconv.zenKataToHanKata('カキクケコ')).toBe('ｶｷｸｹｺ')
  expect(Nconv.zenKataToHanKata('サシスセソ')).toBe('ｻｼｽｾｿ')
  expect(Nconv.zenKataToHanKata('タチツテト')).toBe('ﾀﾁﾂﾃﾄ')
  expect(Nconv.zenKataToHanKata('ナニヌネノ')).toBe('ﾅﾆﾇﾈﾉ')
  expect(Nconv.zenKataToHanKata('ハヒフヘホ')).toBe('ﾊﾋﾌﾍﾎ')
  expect(Nconv.zenKataToHanKata('マミムメモ')).toBe('ﾏﾐﾑﾒﾓ')
  expect(Nconv.zenKataToHanKata('ヤユヨ')).toBe('ﾔﾕﾖ')
  expect(Nconv.zenKataToHanKata('ワヲン')).toBe('ﾜｦﾝ')
  expect(Nconv.zenKataToHanKata('ガギグゲゴ')).toBe('ｶﾞｷﾞｸﾞｹﾞｺﾞ')
  expect(Nconv.zenKataToHanKata('ザジズゼゾ')).toBe('ｻﾞｼﾞｽﾞｾﾞｿﾞ')
  expect(Nconv.zenKataToHanKata('ダヂヅデド')).toBe('ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ')
  expect(Nconv.zenKataToHanKata('バビブベボ')).toBe('ﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞ')
  expect(Nconv.zenKataToHanKata('パピプペポ')).toBe('ﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ')
  expect(Nconv.zenKataToHanKata('ヴ')).toBe('ｳﾞ')
  expect(Nconv.zenKataToHanKata('ァィゥェォ')).toBe('ｧｨｩｪｫ')
  expect(Nconv.zenKataToHanKata('ャュョ')).toBe('ｬｭｮ')
  expect(Nconv.zenKataToHanKata('ッ')).toBe('ｯ')
  expect(Nconv.zenKataToHanKata('ー')).toBe('ｰ')
})

test('hanKataToZenKata', () => {
  expect(Nconv.hanKataToZenKata('ｱｲｳｴｵ')).toBe('アイウエオ')
  expect(Nconv.hanKataToZenKata('ｶｷｸｹｺ')).toBe('カキクケコ')
  expect(Nconv.hanKataToZenKata('ｻｼｽｾｿ')).toBe('サシスセソ')
  expect(Nconv.hanKataToZenKata('ﾀﾁﾂﾃﾄ')).toBe('タチツテト')
  expect(Nconv.hanKataToZenKata('ﾅﾆﾇﾈﾉ')).toBe('ナニヌネノ')
  expect(Nconv.hanKataToZenKata('ﾊﾋﾌﾍﾎ')).toBe('ハヒフヘホ')
  expect(Nconv.hanKataToZenKata('ﾏﾐﾑﾒﾓ')).toBe('マミムメモ')
  expect(Nconv.hanKataToZenKata('ﾔﾕﾖ')).toBe('ヤユヨ')
  expect(Nconv.hanKataToZenKata('ﾜｦﾝ')).toBe('ワヲン')
  expect(Nconv.hanKataToZenKata('ｶﾞｷﾞｸﾞｹﾞｺﾞ')).toBe('ガギグゲゴ')
  expect(Nconv.hanKataToZenKata('ｻﾞｼﾞｽﾞｾﾞｿﾞ')).toBe('ザジズゼゾ')
  expect(Nconv.hanKataToZenKata('ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ')).toBe('ダヂヅデド')
  expect(Nconv.hanKataToZenKata('ﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞ')).toBe('バビブベボ')
  expect(Nconv.hanKataToZenKata('ﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ')).toBe('パピプペポ')
  expect(Nconv.hanKataToZenKata('ｳﾞ')).toBe('ヴ')
  expect(Nconv.hanKataToZenKata('ｧｨｩｪｫ')).toBe('ァィゥェォ')
  expect(Nconv.hanKataToZenKata('ｬｭｮ')).toBe('ャュョ')
  expect(Nconv.hanKataToZenKata('ｯ')).toBe('ッ')
  expect(Nconv.hanKataToZenKata('ｰ')).toBe('ー')
})

test('alphabetToZenkaku', () => {
  expect(Nconv.alphabetToZenkaku('abcdefghijklmnopqrstuvwxyz')).toBe('ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ')
  expect(Nconv.alphabetToZenkaku('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ')
})

test('alphabetToHankaku', () => {
  expect(Nconv.alphabetToHankaku('ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ')).toBe('abcdefghijklmnopqrstuvwxyz')
  expect(Nconv.alphabetToHankaku('ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
})

test('numericToZenkaku', () => {
  expect(Nconv.numericToZenkaku('0123456789')).toBe('０１２３４５６７８９')
})

test('numericToHankaku', () => {
  expect(Nconv.numericToHankaku('０１２３４５６７８９')).toBe('0123456789')
})

test('symbolToZenkaku', () => {
  expect(Nconv.symbolToZenkaku('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~')).toBe('！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～')
})

test('symbolToHankaku', () => {
  expect(Nconv.symbolToHankaku('！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［＼］＾＿｀｛｜｝～')).toBe('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~')
})

test('toHankaku', () => {
  expect(Nconv.toHankaku('１２３ａｂｃアイウ！？')).toBe('123abcｱｲｳ!?')
  expect(Nconv.toHankaku('　')).toBe(' ')
})

test('toZenkaku', () => {
  expect(Nconv.toZenkaku('123abcｱｲｳ!?')).toBe('１２３ａｂｃアイウ！？')
  expect(Nconv.toZenkaku(' ')).toBe('　')
})
