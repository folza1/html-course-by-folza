import React from 'react';
import Article from "../../REACT/article/Article.jsx";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Note from "../../REACT/note/Note.jsx";

export default function Client_Side_Tooling_Overview() {

    return (
        <div className="container">
            <h1>Kliens oldali eszközkezelés átnézése</h1>
            <Article>
                <Paragraph>
                    Ebben a cikkben, átnézzük a modern web eszközeit, milyen eszközök elérhetőek és hol fogsz velük
                    találkozni a webfejlesztés életciklusa során és hogyan találhatunk segítséget egyes eszközökhöz.
                </Paragraph>
            </Article>
            <Article>
                <Paragraph>
                    <div className="bold inline">Előfeltételek:</div>
                    Alapismeretek a <a target="_blank"
                                       href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML</a>, <a
                    target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS</a> és a <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">Javascript</a> nyelvekkel.
                </Paragraph>
                <Paragraph>
                    <div className="bold inline">Cél:</div>
                    Megérteni milyen típusú kliens oldali eszözök vannak és hogyan találhatjuk meg őket és vehetjük
                    hasznukat.
                </Paragraph>
            </Article>
            <Article>
                <h1>Nézzük meg a modern eszközöket</h1>
                <Paragraph>
                    Szoftvert írni a web-re még kifinomultabbá vált az évek során. Bár még tejlesen értelmes dolognak
                    tűnik írni HTML, CSS és Javascript kódot "kézzel", most vannak gazdagon olyan eszközök amelyeket
                    fejlesztők használni tudnak, hogy felgyorsítsák a weboldal, vagy alkalmazás felépítési folyamatát.
                </Paragraph>
                <Paragraph>
                    Van néhány nagyon jól felépített eszköz, amely mindennapivá vált a fejlesztő közösség között és új
                    eszközök vannak fejlesztés alatt és kiadva minden nap, hogy megoldjanak különleges problémákat.
                    Lehet úgy találod, hogy írsz magadnak egy darab szoftvert a saját fejlesztési folyamatod során, hogy
                    megoldj egy különleges problémát, amit még a jelenlegi eszközök nem tudnak kezelni.
                </Paragraph>
                <Paragraph>
                    Könnyen elveszhetünk a nagy számú eszközben, amit felhasználhatunk egy projekt során. Egy egyszerű
                    konfigurációs fájl egy eszközhöz mint a <a target="_blank"
                                                               href="https://webpack.js.org/">Webpack</a> lehet több
                    száz sor hosszú, amelyek többsége
                    varázslatos, és látszólag elvégzik a feladatukat, de amelyeket csak egy mester mérnök ért meg
                    teljesen!
                </Paragraph>
                <Paragraph>
                    Ídőről időre még a legtapasztaltabb webfejlesztő is benntragad egy eszközproblémában. Lehetséges,
                    hogy elveszteget órákat eszköz pipeline-okat próbálva működésre bírni még azelőtt, hogy egy sor
                    kódot írt volna. Ha a múltban úgy találtad, hogy problémáid vannak, akkor ne aggódj - nem vagy
                    egyedül.
                </Paragraph>
                <Paragraph>
                    Ebben a cikkben, nem válaszolunk meg minden kérdést a web eszközkezelésről, de adunk egy hasznos
                    kezdő pontot az alapok megértéséhez, amelyre építhetsz. Mint bármelyik komplex téma, jó ha kicsiben
                    kezded és fokozatosan fejleszted magad előrehaladottabb használat felé.
                </Paragraph>
            </Article>
            <Article>
                <h1>A modern eszköz ökoszisztéma</h1>
                <Paragraph>
                    A mai fejlesztői eszköz ökoszisztéma hetalmas, szóval hasznos, ha van egy szélesebb rálátásunk
                    arról milyen főbb problémákat oldanak meg. Ha beírod a kedvenc keresődbe a "front-end fejlesztői
                    eszközök"-et hatalmas számú találatot fogsz látni, szövegszerkesztőtől kezdve, a böngészőkig, az
                    olyan fajta tollig amivel jegyzeteket készíthetsz.
                </Paragraph>
                <Paragraph>
                    Bár a szövegszerkesztőd választása egy eszköz választás, ez a cikk tovább is megy, fókuszálva olyan
                    eszközökre amelyek segítenek még hatékonyabb kód szerkesztésére.
                </Paragraph>
                <Paragraph>
                    Magasabb szintről nézve, ebbe a három kategóriába teheted a kliens oldali eszközöket az általuk
                    megoldott problémák szerint:
                    <li>Biztonsági háló - Eszközök melyek hasznosak a kód fejlesztés során</li>
                    <li>Transzformáció - Eszközök amelyek átalakítják a kódot valamilyen módon, pl. átfordítani egy
                        középszintű nyelvet Javascript-té amit a böngésző megért
                    </li>
                    <li>Fejlesztés utáni - Eszközök melyek hasznosak a megírt kód után, mit a tesztelés és a telepítő
                        eszközök
                    </li>
                </Paragraph>
                <Paragraph>
                    Most nézzük meg egyesével őket egy kicsit részletesebben:
                </Paragraph>

                <h2>Biztonsági háló</h2>
                <Paragraph>
                    Ezek az eszközök amelyekkel a kód írása egy kicsit jobb.
                </Paragraph>
                <Paragraph>
                    Ez a rész az eszközökről specifikus kell hogy legyen a saját fejlesztési környezetednek, de cégeknél
                    vannak olyan szabályzatok vagy előre meghatározott elérhető konfigurációk
                    és így a fejlesztőik ugyanazokat a folyamatokat használják.
                </Paragraph>
                <Paragraph>
                    Ez magába foglal bármit ami könnyebbé teszi a fejlesztésed, hogy stabil, megbízható kódot készíts. A
                    biztonsági háló (safety net) eszközöknek segíteniük kell megelőzni a hibákat vagy kijavítani azokat
                    automatikusan
                    anélkül hogy magadtól kellene minden egyes alkalommal.
                </Paragraph>
                <Paragraph>
                    Néhány nagyon közös safety net eszköztípus melyeket találni fogsz a következők:
                </Paragraph>
                <h3 className="bold">Linters</h3>
                <Paragraph>
                    A linter-ek eszközök melyek végig ellenőrzik a kódodat és mutatják a hibákat, hogy milyen típusú a
                    hiba, és melyik sorban vannak pontosan. A linter-ek beállíthatók úgy, hogy ne csak hibákat
                    jelezzenek, de jelezzenek olyan meghatározott stílustól eltérő dolgokat, amit a csapat használ,
                    például ha a kód más behúzási értéket használ vagy ha <a target="_blank"
                                                                             href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">template
                    literals</a>-ot használ a megszokott
                    string literals helyett.
                </Paragraph>
                <Paragraph>
                    Az <a target="_blank" href="https://eslint.org/">ESLint</a> az ágazat sztenderd Javascript linter-e.
                    Egy jól konfigurálható eszköz amely megtalálja a
                    potenciális szintaxis hibákat és ajánlásokat tesz a legjobb kódírási gyakorlatra. Néhány cég és
                    projekt <a target="_blank" href="https://www.npmjs.com/search?q=keywords:eslintconfig">megosztja az
                    ESLint beállításait</a>.
                </Paragraph>
                <Paragraph>
                    Találhatsz még linting eszközöket més nyelvekhez is mint például a <a
                    href="http://csslint.net/">csslint</a>-et.
                </Paragraph>
                <Paragraph>
                    Érdemes megnézni a <a target="_blank" href="https://webhint.io/">webhint</a> oldalt, amely egy
                    konfigurálható, nyílt forráskódú linter a web számára,
                    amely a legjobb gyakorlatot követi beleértve az akadálymentesítést, a teljesítményt, böngészők
                    közötti kompatibilitást az <a target="_blank" href="https://github.com/mdn/browser-compat-data">MDN
                    böngésző kompatibilitási adat</a>-ai révén, a biztonságot, a PWA
                    tesztelést és még sok mást. Elérhető mint <a target="_blank"
                                                                 href="https://webhint.io/docs/user-guide/">Node.js
                    parancssori eszköz</a> és <a target="_blank"
                                                 href="https://marketplace.visualstudio.com/items?itemName=webhint.vscode-webhint">VS
                    Code bővítmény</a
                >.
                </Paragraph>
                <h3 className="bold">Forráskód vezérlés</h3>
                <Paragraph>
                    Úgy is ismert hogy <div className="bold inline">verzió kezelő rendszer</div> (VCS), elengedhetetlen
                    a forráskód biztonsági mentéséhez
                    és a csapatmunkához. Egy tipikus VCS magában foglalja a helyi verziót a kódról amin változtatásokat
                    hajtasz végre. Aztán felnyomod "push"-olod a "master" verzióba a kódot egy távoli repo-ba, amelyet
                    egy szerver tárol valahol. Általában van mód rá, hogy irányítsuk és koordináljuk milyen változások
                    történtek a "master" másolatában és hogy mikor történtek ezek, így a fejlesztők végül nem írják
                    felül egymás kódját
                </Paragraph>
                <Paragraph>
                    A <a href="https://git-scm.com/" target="_blank">Git</a> a forráskód kontrol rendszer amit a legtöbb
                    ember használ ma. Elsődlegesen a parancssorból
                    érhető el, de elérhető grafikus interfészen is. A git-es adattárban lévő kódot fel lehet tölteni egy
                    saját szerverre vagy használhatsz olyan forrás kontrol kiszolgálókat is mint a <a
                    href="https://github.com/" target="_blank">GitHub</a
                >, a <a href="https://about.gitlab.com/" target="_blank">GitLab</a> vagy a <a
                    href="https://bitbucket.org/product" target="_blank">BitBucket</a>.
                </Paragraph>
                <Paragraph>
                    Mi GitHub-ot fogunk használni ebben a modulban. További információt találsz a <a target="_blank"
                                                                                                     href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub">Git
                    és
                    a GitHub</a> címen.
                </Paragraph>
                <h3 className="bold">Kód formázók</h3>
                <Paragraph>
                    A kód formázók valamilyen módon a linter-ekhez tartoznak, de inkább, hogy hibákat mutassanak a
                    kódban, általában arra használatosak, hogy a kód helyesen legyen formázva, a stílusaid szerint,
                    ideális esetben automatikusan kijavítson hibákat amelyeket talál.
                </Paragraph>
                <Paragraph>
                    A Prettier egy nagyon népszerű kódformázó, amelyet később fogunk használni ebben a modulban.
                </Paragraph>
                <h3>Bundler-ek(kötegelők) és csomagolók</h3>
                <Paragraph>
                    Ezekkel az eszközökkel a kódod készen fog állni a bemutatásra, production-ra. Például csak azok a
                    könyvtárak legyenek benne amelyeket a kód aktuálisan használ a végső production-ben, vagy
                    minify-olni kell a kódot, amely eltávolít minden whitespace karaktert a production kódból, kisebbé
                    téve
                    azt mielőtt feltöltöd a szerverre.
                </Paragraph>
                <Paragraph>
                    A <a target="_blank" href="https://parceljs.org/">Parcel</a> egy igazán okos eszköz amely pont ebbe
                    a kategóriába tartozik. Tudja a fenti feladatokat,
                    de
                    segít csomagolni a HTML, CSS és az image fájlokat kötegekbe, amit már vihetsz is
                    deploy-olni és adhatsz hozzá függőségeket magadnak bármikor is próbálod használni őket. Még kód
                    transzformációt is tud végezni.
                </Paragraph>
                <Paragraph>
                    A <a href="https://webpack.js.org/" target="_blank">Webpack</a> egy másik nagyon népszerű csomagoló
                    eszköz amely hasonló dolgokat csinál.
                </Paragraph>
                <h3>Transformáció</h3>
                <Paragraph>
                    Lehet hogy a kódod "future kód"-nak számít mivel a legújabb CSS és Javascript funkciókat használtad
                    amelyeknek még nincsen natív böngésző támogatása, vagy a kódod teljesen más nyelvet használ mint
                    például a <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>. Transzformáló
                    eszközök tudnak ebben segíteni és böngésző kompatibilissé tenni a
                    kódodat, melyet már használhatsz a production-ban.
                </Paragraph>
                <Paragraph>
                    Általánosságban a webfejlesztés három nyelvből áll: <a target="_blank"
                                                                           href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML</a>, <a
                    target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS</a> és a <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">Javascript</a>, és vannak átalakító
                    eszközök mindegyik nyelvhez. Az átalakításnak két fő előnye van többek között:
                </Paragraph>
                <Paragraph>
                    1. Az egyik az a képesség, hogy használni lehessen a legújabb nyelvi funkciókat és a mindennapos
                    készülékeken is működjön a transzformált kód. Például a Javascript legújabb nyelvi funkcióit akarod
                    használni írás közben, de azt szeretnéd, hogy a végső production kód működjön régebbi böngészőkön
                    is, amelyek nem támogatják azokat a funkciókat. Jó példák erre:
                    <li><a href="https://babeljs.io/" target="_blank">Babel</a>: Egy Javascript kompiler, amely
                        megengedi a fejlesztőknek, hogy a legújabb Javascript kódot
                        írják, amit majd a Babel átkonvertál régi fazonú Javascript kóddá amelyet több böngésző tud
                        értelmezni. A fejlesztők is írhatnak és publikálhatnak <a target="_blank"
                                                                                  href="https://babeljs.io/docs/plugins">plugin-okat
                            a Babel-hez</a>.
                    </li>
                    <li>
                        <a href="https://postcss.org/" target="_blank">PostCSS</a>: Ugyan azt a dolgot teszi mint a
                        Babel, csak a legújabb CSS funkciókhoz. Ha nincsen
                        egyenértékű módja hogy régebbi CSS funkciókhoz használjunk dolgokat, a PostCSS telepíteni fog
                        egy Javascript
                        polyfill-t hogy emulálja a CSS hatást amit akarsz.
                    </li>
                </Paragraph>
                <Paragraph>
                    2. A másik, hogy megírod a kódodat egy teljesen más nyelvben és azt alakítsd át web kompatibilis
                    nyelvvé. Például:
                    <li>
                        <a href="https://sass-lang.com/" target="_blank">Sass/SCSS</a>: Ez a CSS kiterjesztés,
                        megengedi, hogy változókat, beágyazott szabályokat,
                        mixin-eket, függvényeket és sok más dolgot használjunk, néhány közülük elérhető natív CSS-ben
                        mint a változók például, néhányak pedig nem.
                    </li>
                    <li>
                        <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>: Egy Javascript
                        kiterjesztés, amely további funkciókat ad hozzá. Az TypeScript
                        kompiler átkonvertálja a Typescript kódot Javascript kóddá, mikor a build-elés történik.
                    </li>
                    <li>
                        Keretrendszerek mint a <a href="https://react.dev/" target="_blank">React</a>, <a
                        href="https://emberjs.com/"
                        target="_blank">Ember</a>, <a
                        href="https://vuejs.org/" target="_blank">Vue</a>: A keretrendszerek sok funkcionalitást adnak
                        ingyen és
                        engedélyezik neked, hogy használd őket egyedi szintaxissal amely a vanilla Javascript-re épül. A
                        háttérben a keretrendszerek Javascript kódja szorgosan fordítja ezt az egyedi szintaxist és
                        render-eli mint végső alkalmazást.
                    </li>
                </Paragraph>
                <h2>Fejlesztés után</h2>
                <Paragraph>
                    A fejlesztés utáni eszközök biztosítják a szoftver-ednek, hogy felrakd a web-re és ott fusson
                    folyamatosan. Ez magába foglalja a deployment folyamatokat, a keretrendszerek tesztelését, eszközök
                    ellenőrzését és még többet.
                </Paragraph>
                <Paragraph>
                    A fejlesztésnek ez a szakasza az a folyamat amelyhez legkevesebb mértékű interakciót akarsz
                    hozzátenni, ha már egyszer beállítottad. Legtöbbször automatikusan fut magától.
                </Paragraph>
                <h3>Tesztelő eszközök</h3>
                <Paragraph>
                    Ezek az eszközök általában automatikus teszteket futtatnak a kódodhoz biztosítva azt, hogy minden
                    helyes legyen mielőtt tovább mennél, például mielőtt push-olnád a változtatásokat a GitHub repo-ba.
                    Ez magában foglalja a linting-et, a jobban kifinomult folyamatokat mint a unit tesztek, ahol a kódod
                    egy részét futtatod, hogy biztos legyél benne hogy úgy viselkedik ahogyan kell.
                </Paragraph>
                <Paragraph>
                    <li>Keretrendszerek teszíráshoz mint a <a href="https://jestjs.io/" target="_blank">Jest</a>, <a
                        href="https://mochajs.org/" target="_blank">Mocha</a>, és a <a href="https://jasmine.github.io/"
                                                                                       target="_blank">Jasmine</a></li>
                    <li>Automatizált teszt futtatók és értesítés rendszerek mint <a href="https://www.travis-ci.com/"
                                                                                    target="_blank">Travis CI</a>, <a
                        href="https://www.jenkins.io/" target="_blank">Jenkins</a>, <a href="https://circleci.com/"
                                                                                       target="_blank">Circle
                        CI</a> és <a
                        href="https://en.wikipedia.org/wiki/List_of_build_automation_software#Continuous_integration"
                        target="_blank">mások</a>
                    </li>
                </Paragraph>
                <h3>Telepítési eszközök</h3>
                <Paragraph>
                    A telepítési rendszerek lehetővé teszik, hogy publikálva legyen az oldalad, elérhetőek mind statikus
                    és dinamikus oldalakhoz, és általában hajlamosak tesztelő rendszerekkel együttműködni. Például egy
                    tipikus eszközlánc meg fogja várni míg push-olod a változtatásokat a remote repo-ba, lefuttatja a
                    teszteket, hogy minden OK-e és aztán ha minden teszten átmegy automatikusan telepíti az
                    alkalmazásodat a production oldalra.
                </Paragraph>
                <Paragraph>
                    A <a href="https://www.netlify.com/" target="_blank">Netlify</a> az egyik legnépszerűbb deployment
                    eszköz mostanában, de mások is vannak mint a <a href="https://vercel.com/"
                                                                    target="_blank">Vercel</a> és a <a
                    href="https://pages.github.com/" target="_blank">Github
                    Pages</a>.
                </Paragraph>
                <h3>Mások</h3>
                <Paragraph>

                </Paragraph>
            </Article>
        </div>
    );
}
