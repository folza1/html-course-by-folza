import React from 'react';
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import mini_site from "./img/4.mini_site.png";


export default function Introducing_A_Complete_Toolchain() {
    return (
        <div className="container">
            <h1 className="bold">Egy komplett eszközlánc bemutatása</h1>

            <Paragraph>
                A sorozat befejező pár cikkében meg fogjuk szilárdítani az eszközökről szóló tudásodat azzal,
                hogy végigvezetünk egy minta eszközlánc esettanulmányon. Végigmegyünk egy értelmes fejlesztői környezet
                beállításától kezdve, a transzformáló eszközökön keresztül az applikáció telepítéséig Netlify-ra. Ebben
                a cikkben bemutatjuk az esettanulmányt, beállítjuk a fejlesztői környezetet és beállítjuk a kód
                átalakító eszközöket.
            </Paragraph>

            <Article>
                <Paragraph>
                    <div className="bold inline mr-1">Előfeltételek:</div>
                    Alapismeretek a <a target="_blank"
                                       href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML</a>, <a
                    target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS</a> és a <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">Javascript</a> nyelvekkel.
                </Paragraph>

                <Paragraph>
                    <div className="bold inline mr-1">Cél:</div>
                    Megszilárdítani, amit eddig tanultunk azzal, hogy átveszünk egy komplett eszközlánc esettanulmányt.
                </Paragraph>
            </Article>

            <Paragraph>
                Tényleg végtelen számú kombináció van az eszközökből és a módjukból ahogyan használhatjuk őket, de amit
                ebben a cikkben és a következőben fogsz látni az egy módja annak hogy működő eszközöket használj fel a
                projektedhez.
            </Paragraph>

            <Note>
                <Paragraph>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    Érdemes azt is megjegyezni, hogy nem mindegyik eszköznek kell a parancssorban futnia ezek közül. Sok
                    mai kódszerkesztőnek mint a VS Code-nak vannak beépített támogató eszközei plugin-okon keresztül.
                </Paragraph>
            </Note>

            <Article>
                <h1>Az esettanulmányunk bemutatása</h1>

                <Paragraph>
                    Az eszközlánc amelyet elkészítünk ebben a cikkben egy mini oldalt fogunk elkészíteni amely adatot
                    listáz (egy <a href="https://api.nasa.gov/" target="_blank">NASA API-tól</a> kapja az adatot) olyan
                    potenciálisan veszélyes űrobjektumokról amelyek
                    veszélyeztetik az életünket itt a Föld-ön. Így néz ki az oldal:
                </Paragraph>

                <div className="image-container"><img src={mini_site} alt="Mini Site"/></div>

                <Paragraph>
                    Megtekintheted az oldalt élőben is a <a href="https://near-misses.netlify.app/"
                                                            target="_blank">near-misses.netlify.com</a> címen.
                </Paragraph>
            </Article>

            <Article>
                <h1>Eszközök melyeket használunk az eszközláncban</h1>

                <Paragraph>
                    Ebben a cikkben a következő eszközöket és funkciókat fogjuk használni:
                    <li>
                        A <a href="https://react.dev/learn/writing-markup-with-jsx" target="_blank">JSX</a>-et, egy <a
                        href="https://react.dev/" target="_blank">React</a>-hoz tartozó szintaxis gyűjtemény bővítményt
                        amely megengedi, hogy komponens
                        struktúrákat hozz létre a Javascript segítségével. Nem kell ismerned a React-ot, hogy kövesd ezt
                        a tananyagot, de benne lesz, hogy egy elképzelést adjunk arról hogyan lehet egy nem natív web
                        nyelvet integrálni az eszközláncba.
                    </li>
                    <li>
                        Használjuk a cikk írásakor legfrissebb Javascript funkciókat mint az <a
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"
                        target="_blank">import</a
                    >-ot.
                    </li>
                    <li>
                        Hasznos fejlesztői eszközöket mint a <a href="https://prettier.io/" target="_blank">Prettier</a>-t
                        a formázáshoz és az <a href="https://eslint.org/" target="_blank">ESLint</a>-et a linteléshez.
                    </li>
                    <li>
                        <a href="https://postcss.org/" target="_blank">PostCSS</a>-t a CSS beágyazási képességekhez.
                    </li>
                    <li>
                        A <a href="https://parceljs.org/" target="_blank">Parcel</a>-t, hogy build-eljük és minimizáljuk
                        a kódunkat és hogy egy rakás configurációs
                        fájltartalmat írassunk automatikusan.
                    </li>
                    <li>
                        A <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub"
                             target="_blank">GitHub</a>-ot hogy menedzseljük a forráskódunkat.
                    </li>
                    <li>
                        A <a href="https://www.netlify.com/" target="_blank">Netlify</a>-t hogy automatizáljuk a
                        deployment (telepítési) folyamatot a webszerverre.
                    </li>
                </Paragraph>

                <Paragraph>
                    Lehetséges, hogy nem ismered a fenti funkciókat és eszközöket vagy, hogy mit is csinálnak, de ne
                    pánikolj - minden részét el fogjuk magyarázni, ahogyan haladunk a cikkben.
                </Paragraph>
            </Article>

            <Article>
                <h1>Eszközláncok és a vele született komplexitásuk</h1>

                <Paragraph>
                    Mint bármilyen láncban, ha több láncszem van a láncban akkor komplex-ebb és potenciálisan
                    törékenyebb is. Például nehezebb komfigurálni és könnyebb elrontani. Ellentétben, ha kevesebb
                    láncszem van akkor az eszközlánc ellenállóbb.
                </Paragraph>

                <Paragraph>
                    Minden web projekt különböző és gondosan fontolóra kell venned az eszközlánc milyen részei
                    szükségesek.
                </Paragraph>

                <Paragraph>
                    A legkisebb eszközlánc amelyben 1 láncszem van, amely nem kötődik semmihez sem. Akkor neked kell
                    kezelned a HTML kódot és vanilla JavaScript-et használsz, ami annyit tesz, hogy nem használsz
                    keretrendszert és köztes nyelveket és manuálisan töltesz fel mindent a szerverre a hosting-hoz.
                </Paragraph>

                <Paragraph>
                    Azonban a komplikáltabb szoftver összeállításokból nagy hasznunk lehet, amely egyszerűsíti a
                    fejlesztési folyamatot. Továbbá hozzáadhatod a teszteket is mielőtt telepítenéd az app-ot a
                    production szerverre, hogy biztosítsd a szoftver megfelelően működik. Ez már egy szükséges
                    eszközláncnak hangzik.
                </Paragraph>

                <Paragraph>
                    A minta projektben olyan eszközláncot fogunk használni amely kifejezetten a szoftver fejlesztést
                    fogja
                    megsegíteni és támogatja a technikai lehetőségeket a szoftver dizájn fázisa során. Azonban el fogunk
                    kerülni bármilyen felesleges eszközhasználatot, hogy a minimumon tartsuk a komplexitását a
                    projektnek.
                </Paragraph>

                <Paragraph>
                    Például használni fogunk olyan eszközt amivel minimalizálhatjuk az SVG fájlok méretét a build során.
                    Azonban ez a projekt csak 4 SVG képet tartalmaz, amelyeket az <a
                    href="https://www.npmjs.com/package/svgo" target="_blank">SVGO használatával minimalizálunk
                    manuálisan</a
                > mielőtt hozzáadnánk a projekthez.
                </Paragraph>
            </Article>

            <Article>
                <h1>Egy pár előfeltétel</h1>
                <Paragraph>
                    Amellett az eszközök mellet amelyeket telepíteni fogunk, hogy hozzájáruljanak az eszközláncunkhoz,
                    megemlítettünk két webszolgáltatást a fenti eszközök között. Most használjuk ki a lehetőséget és
                    állítsuk be őket mielőtt továbbmennénk. Készítened kellesz egy GitHub és Netlify fiókot, ha
                    szeretnéd teljesíteni a tananyagot.
                </Paragraph>
                <Paragraph>
                    <li>
                        Ahogyan említettük előzőleg, a Github az egy forráskód adattár amely közösségi funkciókat
                        tartalmaz, mint a probléma követés, a projekt kiadások (release) követése és még sok más. A
                        következő fejezetben fel fogunk tölteni egy GitHub adattárba és utána telepíthetjük majd a
                        szoftvert a web-re.
                    </li>
                    <li>
                        A Netlify az egy hosting-szolgáltatás statikus weboldalak számára (amelyek csak olyan fájlokat
                        tatalmaznak amelyek nem változnak valós időben), amely megengedi nekünk, hogy egy nap többször
                        deploy-oljunk és ingyenesen hosting-oljunk mindenféle statikus oldalakat. A Netlify szolgáltat
                        nekünk egy "otthont a web-en", ahol ingyenesen deploy-olhatunk és tesztelhetjük az
                        applikációnkat.
                    </li>
                </Paragraph>

                <Paragraph>
                    Miután regisztráltál a <a href="https://github.com/" target="_blank">GitHub</a>-ra (Kattints a Sign
                    Up Link-re a kezdőlapon, ha még nincsen fiókod és
                    kövesd az utasításokat), használhatod a GitHub fiókodat, hogy hitelesítsd magad a <a
                    href="https://www.netlify.com/" target="_blank">Netlify</a
                >-on
                    (kattints a Sign Up-ra, aztán válaszd ki a "Sign up with one of the following" listából a
                    GitHub-ot), így technikailag csak egy fiókot kell regisztrálnod.
                </Paragraph>

                <Paragraph>
                    Később szükséges lesz csatlakoztatni a Netlify fiókodat a Github adattáradhoz, hogy telepítsd a
                    projektet, amit a következő fejezetben láthatsz.
                </Paragraph>
            </Article>

            <Article>
                <h1>Az eszközök három szintje</h1>

                <Paragraph>
                    Ahogyan már beszéltünk az első fejezetben róla, az eszközlánc a következő fázisokban lesz
                    struktúrálva:

                    <li>
                        <span className="bold">Biztonsági Háló</span>: Stabillá és még hatékonyabbá teszi a szoftver
                        fejlesztés élményét. Akár úgy is
                        hívhatnánk ez a mi fejlesztői környezetünk.
                    </li>

                    <li>
                        <span className="bold">Transzformáció</span>: Eszközhasználat mely megengedi nekünk használni a
                        legújabb funkcióit egy nyelvnek (mint például a JavaScript) vagy egy egészen más nyelvnek (mint
                        például a JSX vagy a TypeScript) a fejlesztési folyamat során és aztán transzformáljuk a
                        kódunkat úgy, hogy a produkciós verzió sok modern és régebbi böngészőben futhasson.
                    </li>

                    <li>
                        <span className="bold">Fejlesztés után</span>: Eszközhasználat amely azután jön szóba amikor már
                        készen vagy a fejlesztéssel és biztosítani szeretnéd, hogy a szoftvered a web-en legyen és
                        folyamatosan működjön is. Ebben az esettanulmányban adunk pár tesztet a kódodhoz és telepítjük
                        az app-ot a Netlify használatával, így elérhető lesz mindenki számára a web-en.
                    </li>

                </Paragraph>

                <Paragraph>
                    Most kezdjünk el dolgozni ezeken! Kezdjük a fejlesztői környezettel!
                </Paragraph>
            </Article>

            <Article>
                <h1>Fejlesztői környezet létrehozása</h1>

                <Paragraph>
                    Az eszközláncnak ez a része néha úgy tűnik, hogy késlelteti az aktuális munkát és nagyon könnyű
                    beleesni abba a hibába, hogy sok időt töltesz azzal, hogy egy pont jó környezetet próbálsz
                    beállítani.
                </Paragraph>

                <Paragraph>
                    De úgy is gondolhatod, hogy ugyanolyan módon állítod be, mint a fizikai mmunkakörnyezetet. A széknek
                    kényelmesnek kell lennie és jó pozícióba állítod, hogy jó legyen a testtartásodnak. Szükséged van
                    áramra, Wi-Fi-re és USB port-okra! Fontos lehet még a dekoráció vagy a zene amely segíti a mentális
                    állapotod. Ez mind fontos, hogy a legjobbat kihozd magadból munka során és az lenne a jó ha
                    mindezt egyszer elég lenne beállítani, ha minden megfelelő.
                </Paragraph>

                <Paragraph>
                    Ugyanilyen módon állíthatod be a fejlesztői környezetedet is, ha minden rendben, akkor elég egyszer
                    beállítani és később újra felhasználható a jövőbeni projektekhez. Valószínűleg rendszeresen át
                    akarod
                    majd nézni az eszközlánc ezen részét és átgondolni vannak-e újabb frissítések vagy változások
                    melyeket bevezetnél, de azok nem szükségesek olyan gyakran.
                </Paragraph>

                <Paragraph>
                    Az eszközláncod a saját szükségleteid szerint változik, de ebben a (lehetséges) eszközláncban az
                    előre telepített eszközök a következők:
                </Paragraph>

                <Paragraph>
                    <li>Könyvtár telepítő eszközök - hogy függőségeket adhass hozzá</li>
                    <li>Kód verziókezelés</li>
                    <li>Kód tisztító eszközök - a JavaScript, CSS és HTML tisztításához</li>
                    <li>Kód linting eszközök - a kód linteléséhez</li>
                </Paragraph>

                <h2>Könyvtár telepítő eszközök</h2>

                <Paragraph>
                    Npm-et fogunk telepíteni eszközként, amellyel először a második fejezetben találkoztunk. Már
                    telepítve kellene, hogy legyen Node.js és npm a gépeden, de, ha nem akkor <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#adding_powerups"
                    target="_blank">tekints vissza arra a
                    fejezetre</a>.
                </Paragraph>

                <Note>
                    <Paragraph>
                        <div className="bold inline mr-1">Megjegyzés:</div>
                        Bár nem nyílvánvaló a telepítési folyamatból, az npm telepítésével egy kiegészítő eszközt is
                        telepít, amit npx-nek neveznek. A fejezetben később fogjuk használni az npx-et, hogy segítsen
                        futtatni eszközöket, amelyek lokális függőségként vannak telepítve a projekthez.
                    </Paragraph>
                </Note>

                <Paragraph>
                    Az npm arra lesz használva, hogy telepítsük az eszközláncunk későbbi elemeit. Először is azonban
                    telepíteni fogjuk a git-et, hogy segítséget kapjunk a verziókezeléshez.
                </Paragraph>

                <h2>Kód verzió kezelés</h2>

                <Paragraph>
                    Lehetséges, hogy hallottál már a git-ről korábban. A <a href="https://git-scm.com/"
                                                                            target="_blank">Git</a> jelenleg a
                    legnépszerűbb forráskód verzió
                    kezelő eszköz fejlesztők számára. A verzió kezelő sok előnnyel rendelkezik, például biztonsági
                    másolatot készíthetsz a munkádról egy távoli helyen és csapatban dolgozhatsz ugyanazon a projekten
                    anélkül, hogy félned kellene attól, hogy felülírjátok egymás kódját.
                </Paragraph>

                <Paragraph>
                    Lehet, hogy nyílvánvaló lehet néhányaknak, de megéri ismételni: A Git nem ugyanaz mint a GitHub. A
                    Git a verzió kezelő eszköz, míg a <a href="https://github.com/" target="_blank">GitHub</a> egy
                    online tárhely git adattárakhoz, plusz számos hasznos
                    eszközökkel dolgozhatsz ott. Jegyezd meg azonban, hogy GitHub-ot fogunk használni ebben a
                    fejezetben. Van számos alternatívája mint a <a href="https://about.gitlab.com/"
                                                                   target="_blank">GitLab</a> és a <a
                    href="https://www.atlassian.com/software/bitbucket" target="_blank">Bitbucket</a
                > és még
                    tárolhatod saját tárhelyen
                    is az adattáraidat.
                </Paragraph>

                <Paragraph>
                    Használni a verzió kezelőt a projekteidben és belevenni az eszköztárba segít majd a kódod
                    evolúciójában azaz fejlődésében. Segítségével "commit"-olhatod a munkád részeit ahogyan haladsz
                    előre és kommenteket is adhatsz hozzá mint például "Új funkció hozzáadva" vagy "Az egyik hiba
                    kijavítva valaminek a változtatásával". A "commit"-ról megtudhatsz egy későbbi fejezetben.
                    Lényegében csinálsz egy pillanatképet a projektedről, hogy bármikor visszamehess oda ha valamit
                    változtatni kell. Az a "commit". Így megvizsgálhatod a projektedet fejlesztési szakaszonként.
                </Paragraph>

                <Paragraph>
                    A verziókezelés lehetővé teszi, hogy ágakra oszd a projekted, elkülönülő verziókat készíts és új
                    működéseket adj hozzá anélkül, hogy az hatással lenne az eredeti kódra.
                </Paragraph>
            </Article>
            Revision control can also allow you to branch out your project code, creating a separate version, and trying
            out new functionality on, without those changes affecting your original...
        </div>
    )
};
