import React from "react";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import CodeDisplay from "../../components/CodeDisplay.jsx";
import mini_site from "./img/4.mini_site.png";
import git_VS_Code from "./img/5.git_VS_Code.png";
import eslint from "./img/6.eslint.png";
import git_repo from "./img/7.git_repo.png";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";
import {
    toolchain_1_prettier,
    toolchain_2_prettier_install,
    toolchain_3_prettier_example,
    toolchain_4_eslint_output,
    toolchain_5_project_start,
    toolchain_6_project_src,
    toolchain_7_git_start,
    toolchain_8_npm_init,
    toolchain_9_npm_install,
} from "./toolchain_code_texts.jsx";

export default function Introducing_A_Complete_Toolchain() {
    return (
        <div className="container">
            <h1 className="bold">Egy komplett eszközlánc bemutatása</h1>
            <Paragraph>
                A sorozat befejező pár cikkében meg fogjuk szilárdítani az
                eszközökről szóló tudásodat azzal, hogy végigvezetünk egy minta
                eszközlánc esettanulmányon. Végigmegyünk egy értelmes fejlesztői
                környezet beállításától kezdve, a transzformáló eszközökön
                keresztül az applikáció telepítéséig Netlify-ra. Ebben a cikkben
                bemutatjuk az esettanulmányt, beállítjuk a fejlesztői
                környezetet és beállítjuk a kód átalakító eszközöket.
            </Paragraph>
            <Article>
                <Paragraph>
                    <div className="bold inline mr-1">Előfeltételek:</div>
                    Alapismeretek a{" "}
                    <a
                        target="_blank"
                        href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
                    >
                        HTML
                    </a>
                    ,{" "}
                    <a
                        target="_blank"
                        href="https://developer.mozilla.org/en-US/docs/Learn/CSS"
                    >
                        CSS
                    </a>{" "}
                    és a{" "}
                    <a
                        target="_blank"
                        href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript"
                    >
                        Javascript
                    </a>{" "}
                    nyelvekkel.
                </Paragraph>

                <Paragraph>
                    <div className="bold inline mr-1">Cél:</div>
                    Megszilárdítani, amit eddig tanultunk azzal, hogy átveszünk
                    egy komplett eszközlánc esettanulmányt.
                </Paragraph>
            </Article>
            <Paragraph>
                Tényleg végtelen számú kombináció van az eszközökből és a
                módjukból ahogyan használhatjuk őket, de amit ebben a cikkben és
                a következőben fogsz látni az egy módja annak hogy működő
                eszközöket használj fel a projektedhez.
            </Paragraph>
            <Note>
                <Paragraph>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    Érdemes azt is megjegyezni, hogy nem mindegyik eszköznek
                    kell a parancssorban futnia ezek közül. Sok mai
                    kódszerkesztőnek mint a VS Code-nak vannak beépített
                    támogató eszközei plugin-okon keresztül.
                </Paragraph>
            </Note>
            <Article>
                <h1>Az esettanulmányunk bemutatása</h1>

                <Paragraph>
                    Az eszközlánc amelyet elkészítünk ebben a cikkben egy mini
                    oldalt fogunk elkészíteni amely adatot listáz (egy{" "}
                    <a href="https://api.nasa.gov/" target="_blank">
                        NASA API-tól
                    </a>{" "}
                    kapja az adatot) olyan potenciálisan veszélyes
                    űrobjektumokról amelyek veszélyeztetik az életünket itt a
                    Föld-ön. Így néz ki az oldal:
                </Paragraph>

                <div className="image-container">
                    <img src={mini_site} alt="Mini Site" />
                </div>

                <Paragraph>
                    Megtekintheted az oldalt élőben is a{" "}
                    <a href="https://near-misses.netlify.app/" target="_blank">
                        near-misses.netlify.com
                    </a>{" "}
                    címen.
                </Paragraph>
            </Article>
            <Article>
                <h1>Eszközök melyeket használunk az eszközláncban</h1>

                <Paragraph>
                    Ebben a cikkben a következő eszközöket és funkciókat fogjuk
                    használni:
                    <li>
                        A{" "}
                        <a
                            href="https://react.dev/learn/writing-markup-with-jsx"
                            target="_blank"
                        >
                            JSX
                        </a>
                        -et, egy{" "}
                        <a href="https://react.dev/" target="_blank">
                            React
                        </a>
                        -hoz tartozó szintaxis gyűjtemény bővítményt amely
                        megengedi, hogy komponens struktúrákat hozz létre a
                        Javascript segítségével. Nem kell ismerned a React-ot,
                        hogy kövesd ezt a tananyagot, de benne lesz, hogy egy
                        elképzelést adjunk arról hogyan lehet egy nem natív web
                        nyelvet integrálni az eszközláncba.
                    </li>
                    <li>
                        Használjuk a cikk írásakor legfrissebb Javascript
                        funkciókat mint az{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"
                            target="_blank"
                        >
                            import
                        </a>
                        -ot.
                    </li>
                    <li>
                        Hasznos fejlesztői eszközöket mint a{" "}
                        <a href="https://prettier.io/" target="_blank">
                            Prettier
                        </a>
                        -t a formázáshoz és az{" "}
                        <a href="https://eslint.org/" target="_blank">
                            ESLint
                        </a>
                        -et a linteléshez.
                    </li>
                    <li>
                        <a href="https://postcss.org/" target="_blank">
                            PostCSS
                        </a>
                        -t a CSS beágyazási képességekhez.
                    </li>
                    <li>
                        A{" "}
                        <a href="https://parceljs.org/" target="_blank">
                            Parcel
                        </a>
                        -t, hogy build-eljük és minimizáljuk a kódunkat és hogy
                        egy rakás konfigurációs fájltartalmat írassunk
                        automatikusan.
                    </li>
                    <li>
                        A{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub"
                            target="_blank"
                        >
                            GitHub
                        </a>
                        -ot hogy menedzseljük a forráskódunkat.
                    </li>
                    <li>
                        A{" "}
                        <a href="https://www.netlify.com/" target="_blank">
                            Netlify
                        </a>
                        -t hogy automatizáljuk a deployment (telepítési)
                        folyamatot a webszerverre.
                    </li>
                </Paragraph>

                <Paragraph>
                    Lehetséges, hogy nem ismered a fenti funkciókat és
                    eszközöket vagy, hogy mit is csinálnak, de ne pánikolj -
                    minden részét el fogjuk magyarázni, ahogyan haladunk a
                    cikkben.
                </Paragraph>
            </Article>
            <Article>
                <h1>Eszközláncok és a vele született komplexitásuk</h1>

                <Paragraph>
                    Mint bármilyen láncban, ha több láncszem van a láncban akkor
                    komplex-ebb és potenciálisan törékenyebb is. Például
                    nehezebb komfigurálni és könnyebb elrontani. Ellentétben, ha
                    kevesebb láncszem van akkor az eszközlánc ellenállóbb.
                </Paragraph>

                <Paragraph>
                    Minden web projekt különböző és gondosan fontolóra kell
                    venned az eszközlánc milyen részei szükségesek.
                </Paragraph>

                <Paragraph>
                    A legkisebb eszközlánc amelyben 1 láncszem van, amely nem
                    kötődik semmihez sem. Akkor neked kell kezelned a HTML kódot
                    és vanilla JavaScript-et használsz, ami annyit tesz, hogy
                    nem használsz keretrendszert és köztes nyelveket és
                    manuálisan töltesz fel mindent a szerverre a hosting-hoz.
                </Paragraph>

                <Paragraph>
                    Azonban a komplikáltabb szoftver összeállításokból nagy
                    hasznunk lehet, amely egyszerűsíti a fejlesztési folyamatot.
                    Továbbá hozzáadhatod a teszteket is mielőtt telepítenéd az
                    app-ot a production szerverre, hogy biztosítsd a szoftver
                    megfelelően működik. Ez már egy szükséges eszközláncnak
                    hangzik.
                </Paragraph>

                <Paragraph>
                    A minta projektben olyan eszközláncot fogunk használni amely
                    kifejezetten a szoftver fejlesztést fogja megsegíteni és
                    támogatja a technikai lehetőségeket a szoftver dizájn fázisa
                    során. Azonban el fogunk kerülni bármilyen felesleges
                    eszközhasználatot, hogy a minimumon tartsuk a komplexitását
                    a projektnek.
                </Paragraph>

                <Paragraph>
                    Például használni fogunk olyan eszközt amivel
                    minimalizálhatjuk az SVG fájlok méretét a build során.
                    Azonban ez a projekt csak 4 SVG képet tartalmaz, amelyeket
                    az{" "}
                    <a
                        href="https://www.npmjs.com/package/svgo"
                        target="_blank"
                    >
                        SVGO használatával minimalizálunk manuálisan
                    </a>{" "}
                    mielőtt hozzáadnánk a projekthez.
                </Paragraph>
            </Article>
            <Article>
                <h1>Egy pár előfeltétel</h1>
                <Paragraph>
                    Amellett az eszközök mellet amelyeket telepíteni fogunk,
                    hogy hozzájáruljanak az eszközláncunkhoz, megemlítettünk két
                    webszolgáltatást a fenti eszközök között. Most használjuk ki
                    a lehetőséget és állítsuk be őket mielőtt továbbmennénk.
                    Készítened kellesz egy GitHub és Netlify fiókot, ha
                    szeretnéd teljesíteni a tananyagot.
                </Paragraph>
                <Paragraph>
                    <li>
                        Ahogyan említettük előzőleg, a Github az egy forráskód
                        adattár amely közösségi funkciókat tartalmaz, mint a
                        probléma követés, a projekt kiadások (release) követése
                        és még sok más. A következő fejezetben fel fogunk
                        tölteni egy GitHub adattárba és utána telepíthetjük majd
                        a szoftvert a web-re.
                    </li>
                    <li>
                        A Netlify az egy hosting-szolgáltatás statikus
                        weboldalak számára (amelyek csak olyan fájlokat
                        tatalmaznak amelyek nem változnak valós időben), amely
                        megengedi nekünk, hogy egy nap többször deploy-oljunk és
                        ingyenesen hosting-oljunk mindenféle statikus oldalakat.
                        A Netlify szolgáltat nekünk egy "otthont a web-en", ahol
                        ingyenesen deploy-olhatunk és tesztelhetjük az
                        applikációnkat.
                    </li>
                </Paragraph>

                <Paragraph>
                    Miután regisztráltál a{" "}
                    <a href="https://github.com/" target="_blank">
                        GitHub
                    </a>
                    -ra (Kattints a Sign Up Link-re a kezdőlapon, ha még nincsen
                    fiókod és kövesd az utasításokat), használhatod a GitHub
                    fiókodat, hogy hitelesítsd magad a{" "}
                    <a href="https://www.netlify.com/" target="_blank">
                        Netlify
                    </a>
                    -on (kattints a Sign Up-ra, aztán válaszd ki a "Sign up with
                    one of the following" listából a GitHub-ot), így
                    technikailag csak egy fiókot kell regisztrálnod.
                </Paragraph>

                <Paragraph>
                    Később szükséges lesz csatlakoztatni a Netlify fiókodat a
                    Github adattáradhoz, hogy telepítsd a projektet, amit a
                    következő fejezetben láthatsz.
                </Paragraph>
            </Article>
            <Article>
                <h1>Az eszközök három szintje</h1>

                <Paragraph>
                    Ahogyan már beszéltünk az első fejezetben róla, az
                    eszközlánc a következő fázisokban lesz struktúrálva:
                    <li>
                        <span className="bold">Biztonsági Háló</span>: Stabillá
                        és még hatékonyabbá teszi a szoftver fejlesztés
                        élményét. Akár úgy is hívhatnánk ez a mi fejlesztői
                        környezetünk.
                    </li>
                    <li>
                        <span className="bold">Transzformáció</span>:
                        Eszközhasználat mely megengedi nekünk használni a
                        legújabb funkcióit egy nyelvnek (mint például a
                        JavaScript) vagy egy egészen más nyelvnek (mint például
                        a JSX vagy a TypeScript) a fejlesztési folyamat során és
                        aztán transzformáljuk a kódunkat úgy, hogy a produkciós
                        verzió sok modern és régebbi böngészőben futhasson.
                    </li>
                    <li>
                        <span className="bold">Fejlesztés után</span>:
                        Eszközhasználat amely azután jön szóba amikor már készen
                        vagy a fejlesztéssel és biztosítani szeretnéd, hogy a
                        szoftvered a web-en legyen és folyamatosan működjön is.
                        Ebben az esettanulmányban adunk pár tesztet a kódodhoz
                        és telepítjük az app-ot a Netlify használatával, így
                        elérhető lesz mindenki számára a web-en.
                    </li>
                </Paragraph>

                <Paragraph>
                    Most kezdjünk el dolgozni ezeken! Kezdjük a fejlesztői
                    környezettel!
                </Paragraph>
            </Article>
            <Article>
                <h1>Fejlesztői környezet létrehozása</h1>

                <Paragraph>
                    Az eszközláncnak ez a része néha úgy tűnik, hogy késlelteti
                    az aktuális munkát és nagyon könnyű beleesni abba a hibába,
                    hogy sok időt töltesz azzal, hogy egy pont jó környezetet
                    próbálsz beállítani.
                </Paragraph>

                <Paragraph>
                    De úgy is gondolhatod, hogy ugyanolyan módon állítod be,
                    mint a fizikai mmunkakörnyezetet. A széknek kényelmesnek
                    kell lennie és jó pozícióba állítod, hogy jó legyen a
                    testtartásodnak. Szükséged van áramra, Wi-Fi-re és USB
                    port-okra! Fontos lehet még a dekoráció vagy a zene amely
                    segíti a mentális állapotod. Ez mind fontos, hogy a
                    legjobbat kihozd magadból munka során és az lenne a jó ha
                    mindezt egyszer elég lenne beállítani, ha minden megfelelő.
                </Paragraph>

                <Paragraph>
                    Ugyanilyen módon állíthatod be a fejlesztői környezetedet
                    is, ha minden rendben, akkor elég egyszer beállítani és
                    később újra felhasználható a jövőbeni projektekhez.
                    Valószínűleg rendszeresen át akarod majd nézni az eszközlánc
                    ezen részét és átgondolni vannak-e újabb frissítések vagy
                    változások melyeket bevezetnél, de azok nem szükségesek
                    olyan gyakran.
                </Paragraph>

                <Paragraph>
                    Az eszközláncod a saját szükségleteid szerint változik, de
                    ebben a (lehetséges) eszközláncban az előre telepített
                    eszközök a következők:
                </Paragraph>

                <Paragraph>
                    <li>
                        Könyvtár telepítő eszközök - hogy függőségeket adhass
                        hozzá
                    </li>
                    <li>Kód verziókezelés</li>
                    <li>
                        Kód tisztító eszközök - a JavaScript, CSS és HTML
                        tisztításához
                    </li>
                    <li>Kód linting eszközök - a kód linteléséhez</li>
                </Paragraph>

                <h2>Könyvtár telepítő eszközök</h2>

                <Paragraph>
                    Npm-et fogunk telepíteni eszközként, amellyel először a
                    második fejezetben találkoztunk. Már telepítve kellene, hogy
                    legyen Node.js és npm a gépeden, de, ha nem akkor{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#adding_powerups"
                        target="_blank"
                    >
                        tekints vissza arra a fejezetre
                    </a>
                    .
                </Paragraph>

                <Note>
                    <Paragraph>
                        <div className="bold inline mr-1">Megjegyzés:</div>
                        Bár nem nyílvánvaló a telepítési folyamatból, az npm
                        telepítésével egy kiegészítő eszközt is telepít, amit
                        npx-nek neveznek. A fejezetben később fogjuk használni
                        az npx-et, hogy segítsen futtatni eszközöket, amelyek
                        lokális függőségként vannak telepítve a projekthez.
                    </Paragraph>
                </Note>

                <Paragraph>
                    Az npm arra lesz használva, hogy telepítsük az eszközláncunk
                    későbbi elemeit. Először is azonban telepíteni fogjuk a
                    git-et, hogy segítséget kapjunk a verziókezeléshez.
                </Paragraph>

                <h2>Kód verzió kezelés</h2>

                <Paragraph>
                    Lehetséges, hogy hallottál már a git-ről korábban. A{" "}
                    <a href="https://git-scm.com/" target="_blank">
                        Git
                    </a>{" "}
                    jelenleg a legnépszerűbb forráskód verzió kezelő eszköz
                    fejlesztők számára. A verzió kezelő sok előnnyel
                    rendelkezik, például biztonsági másolatot készíthetsz a
                    munkádról egy távoli helyen és csapatban dolgozhatsz
                    ugyanazon a projekten anélkül, hogy félned kellene attól,
                    hogy felülírjátok egymás kódját.
                </Paragraph>

                <Paragraph>
                    Lehet, hogy nyílvánvaló lehet néhányaknak, de megéri
                    ismételni: A Git nem ugyanaz mint a GitHub. A Git a verzió
                    kezelő eszköz, míg a{" "}
                    <a href="https://github.com/" target="_blank">
                        GitHub
                    </a>{" "}
                    egy online tárhely git adattárakhoz, plusz számos hasznos
                    eszközökkel dolgozhatsz ott. Jegyezd meg azonban, hogy
                    GitHub-ot fogunk használni ebben a fejezetben. Van számos
                    alternatívája mint a{" "}
                    <a href="https://about.gitlab.com/" target="_blank">
                        GitLab
                    </a>{" "}
                    és a{" "}
                    <a
                        href="https://www.atlassian.com/software/bitbucket"
                        target="_blank"
                    >
                        Bitbucket
                    </a>{" "}
                    és még tárolhatod saját tárhelyen is az adattáraidat.
                </Paragraph>

                <Paragraph>
                    Használni a verzió kezelőt a projekteidben és belevenni az
                    eszköztárba segít majd a kódod evolúciójában azaz
                    fejlődésében. Segítségével "commit"-olhatod a munkád részeit
                    ahogyan haladsz előre és kommenteket is adhatsz hozzá mint
                    például "Új funkció hozzáadva" vagy "Az egyik hiba kijavítva
                    valaminek a változtatásával". A "commit"-ról megtudhatsz egy
                    későbbi fejezetben. Lényegében csinálsz egy pillanatképet a
                    projektedről, hogy bármikor visszamehess oda ha valamit
                    változtatni kell. Az a "commit". Így megvizsgálhatod a
                    projektedet fejlesztési szakaszonként.
                </Paragraph>

                <Paragraph>
                    A verziókezelés lehetővé teszi, hogy ágakra oszd a
                    projekted, elkülönülő verziókat készíts és új működéseket
                    adj hozzá anélkül, hogy az hatással lenne az eredeti kódra.
                </Paragraph>

                <Paragraph>
                    Máskülönben segíthet visszavonni változtatásokat vagy
                    visszaállítani a kódot egy olyan állapotra "amikor még
                    működött", ha egy hiba felmerül a fejlesztés során és
                    problémád van a megoldásával. Ezek olyan dolgok amelyekkel
                    minden fejlesztő szembesül egyszer-egyszer.
                </Paragraph>

                <Paragraph>
                    A Git{" "}
                    <a href="https://git-scm.com/downloads" target="_blank">
                        letölthető és telepíthető a git-scm weboldalról
                    </a>
                    . Töltsd le a megfelelő telepítőt a rendszeredhez, futtasd
                    és kövesd az útmutatót. Ennyit kell tenned hozzá.
                </Paragraph>

                <Paragraph>
                    Dolgozhatsz a git-tel számos módon. Parancssorból
                    parancsokkal,{" "}
                    <a
                        href="https://git-scm.com/downloads/guis"
                        target="_blank"
                    >
                        Git GUI
                    </a>
                    -t használva gombokat nyomogatva vagy még közvetlenül a
                    kódszerkesztődből, ahogyan látszik a példában a Visual
                    Studio Code-al:
                </Paragraph>

                <div className="image-container">
                    <img src={git_VS_Code} alt="Git in Code Editor" />
                </div>

                <Paragraph>
                    Akárhogyan is, a git letepítésére lesz most szükség a
                    dolgunkhoz. Gyerünk tovább!
                </Paragraph>

                <h2>Kód tisztító eszközök</h2>

                <Paragraph>
                    Prettier-t fogunk használni, amivel először a második
                    fejezetben találkoztunk, hogy megtisztítsuk a kódunkat ebben
                    a projektben. Ha követted az utasításokat a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#installing_prettier"
                        target="_blank"
                    >
                        Prettier Telepítés
                    </a>{" "}
                    részben akkor lehet van már Prettier telepítve. Ha nem akkor
                    telepíteni fogjuk a Prettier-t globálisan a terminálból.
                </Paragraph>

                <Paragraph>
                    A következő terminálos paranccsal ellenőrizheted, hogy
                    globálisan van-e a Prettier telepítve?
                </Paragraph>

                <CodeDisplay code={toolchain_1_prettier} />

                <Paragraph>
                    Ha telepítve van, akkor válaszként egy verzió számot kell,
                    hogy kiírjon a terminál mint 2.0.2, ha nem akkor "command
                    not found" szöveget. Ha az utóbbi, akkor telepítsük a
                    következő paranccsal:
                </Paragraph>

                <CodeDisplay code={toolchain_2_prettier_install} />

                <Paragraph>
                    Most, hogy a Prettier telepítve van, most már bárhonnak
                    tudod futtatni és tisztítani a kódodat a számítógépen a
                    parancssorból, mint például:
                </Paragraph>

                <CodeDisplay code={toolchain_3_prettier_example} />

                <Note>
                    <Paragraph>
                        <div className="bold inline mr-1">Megjegyzés:</div>A
                        fenti parancsban a Prettier --write flag-et használ.
                        Amit a Prettier úgy értelmez, hogy ha van probléma a kód
                        formázottságában, akkor kijavítja és aztán menti a
                        fájlt. Ez tökéletes a fejlesztési folyamatunk számára,
                        de használhatjuk a --write flag nélkül is és akkor csak
                        ellenőrzi a fájlt. Ellenőrzi a fájlt és nem menti el. Ez
                        az ellenőrzés hasznos lehet egy release (szoftver
                        kiadás, publikálás) előtt. Ne adj ki, publikálj kódot
                        mielőtt az megfelelően lenne formázva!
                    </Paragraph>
                </Note>

                <Paragraph>
                    Az fáradságos lenne hogy ugyanazt a parancsot futassuk
                    minden egyes fájl-hoz és hasznos lenne egy parancs erre a
                    célra (és ugyanez jó lesz a linting eszközeinkhez is).
                </Paragraph>

                <Paragraph>
                    Több megoldás is létezik, hogy megoldjuk ezt a problémát.
                    Itt van néhány:
                </Paragraph>

                <Paragraph>
                    <li>
                        Használhatsz npm szkripteket, hogy futtass több
                        parancsot a parancssorból egyszerre, mint az
                        <BgLightgray>npm run tidy-code</BgLightgray>.
                    </li>
                    <li>
                        Használhatsz különleges "git hook-okat (horgokat)", hogy
                        teszteld a kód megfelelően van-e formázva egy commit
                        előtt.
                    </li>
                    <li>
                        Használhatsz kód szerkesztőhöz pluginokat (beépülő
                        modulokat), hogy futtass Prettier parancsokat minden
                        egyes alkalommal, amikor a fájl mentésre kerül.
                    </li>
                </Paragraph>

                <Note>
                    <Paragraph>
                        <div className="bold inline mr-1">Megjegyzés:</div>
                        Mi az a git hook (horog)? A Git (nem a GitHub)
                        szolgáltat egy olyan rendszert, amely megengedi nekünk,
                        hogy hozzárendeljünk bizonyos akciók elé és után
                        bizonyos feladatokat, mondjuk mikor commit-oljuk a kódot
                        (amikor pillanatképet készítünk a projektünk aktuális
                        állapotáról). Bár a git hook-ok (horgok) egy kicsit túl
                        vannak komplikálva (a szerző véleménye szerint), viszont
                        ha helyén vannak kezelve igen erőteljesek lehetnek. Ha
                        érdekel a hook-ok (horgok) használata a{" "}
                        <a
                            href="https://github.com/typicode/husky"
                            target="_blank"
                        >
                            Husky
                        </a>{" "}
                        egy nagyban egyszerűsített út azok használatához.
                    </Paragraph>
                </Note>

                <Paragraph>
                    A VS Code-hoz egy hasznos extension (kiterjesztés) a{" "}
                    <a
                        href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
                        target="_blank"
                    >
                        Prettier Code Formatter (Prettier Kód Formázó), Esben
                        Petersen
                    </a>
                    -től, amely automatikus kódformázást tesz lehetővé a fájl
                    mentésekor. Ez azt jelenti, hogy bármilyen fájl a
                    projektben, amelyen dolgozunk szépen formázva lesz, legyen
                    az HTML, CSS, JavaScript, JSON, markdown vagy más. Csak
                    annyit kell beállítanod, hogy "Format On Save" ("Formázás
                    Mentéskor") legyen bepipálva, be legyen kapcsolva.
                </Paragraph>

                <Paragraph>
                    Mint sok újabban készített eszköz, a Prettier is megfelelő
                    alapértelmezett beállításokkal van ellátva. Ami annyit tesz,
                    hogy használhatod a Prettier-t anélkül, hogy bármit is be
                    kellene állítanod (ha elégedett vagy az{" "}
                    <a
                        href="https://prettier.io/docs/en/configuration.html"
                        target="_blank"
                    >
                        alapértelmezett beállításokkal
                    </a>
                    ). Így több időd jut a fontos dolgokra, mint például a
                    kreatív munkára.
                </Paragraph>

                <h2>Kód hiba jelző eszközök (linter-ek, lint-elés)</h2>

                <Paragraph>
                    A lint-elés segít a kód minőségében, de arra is jó, hogy
                    kijavítsunk felmerülő hibákat korábban a fejlesztés során.
                    Ez egy kulcs összetevője a jó eszközláncnak és sok
                    fejlesztési projekt alapértelmezetten használja.
                </Paragraph>

                <Paragraph>
                    Web fejlesztő linter eszközök legtöbbször JavaScript-hez
                    vannak, bár van néhány HTML-hez és CSS-hez is. Ez azért is
                    van, mert ha egy ismeretlen HTML elem vagy egy érvénytelen
                    CSS tulajdonság van használatban a nyelv természetéből adódó
                    rugalmasság miatt semmi sem romlik el. A JavaScript sokkal
                    törékenyebb. Például egy hibásan meghívott funkció, amely
                    nem létezik, a JavaScript szkript futásában törést okoz. A
                    JavaScript lint-elése tehát nagyon fontos és segítségével
                    könnyen megtalálhatjuk a kódunkban a hibát, különösen
                    nagyobb projektekben.
                </Paragraph>

                <Paragraph>
                    Egy nagyszerű linting eszköz a JavaScript-hez az{" "}
                    <a href="https://eslint.org/" target="_blank">
                        ESLint
                    </a>
                    . Az ESLint egy nagyon erőteljes és sokoldalú eszköz, de
                    trükkös lehet helyesen konfigurálni és könnyen órákat el
                    lehet tölteni csak azzal, hogy beállítsunk egy jó
                    konfigurációt.
                </Paragraph>

                <Paragraph>
                    Alapból az ESLint panaszolni fogja, hogy nem találja a
                    konfigurációs fájlt (ahol a beállítások vannak tárolva), ha
                    futtatod. A konfigurációs fájl több formátumot támogat, de
                    ehhez a projekthez mi az{" "}
                    <BgLightgray>.eslintrc.json</BgLightgray> fájlt fogjuk
                    használni (a "pont" az elején azt jelzi, hogy
                    alapértelmezettként rejtett fájl a mappában).
                </Paragraph>

                <Paragraph>
                    Az ESLint-et npm-el lehet telepíteni, amit már a második
                    fejezetben említettünk. Telepítheted lokálisan vagy
                    globálisan az eszközt. Mindkettő lehetőség használata
                    ajánlott:
                </Paragraph>

                <Paragraph>
                    <li>
                        Olyan projektek esetén, amelyeket meg szeretnél osztani,
                        mindig lokális függőségként kellene belevenni a
                        projektbe, így bárki aki létrehozza a saját másolatát a
                        projektről, követni tudja a szabályokat amelyeket
                        alkalmaztál a projekthez.
                    </li>
                    <li>
                        Azt is megfontolhatod, hogy globálisan telepíted az
                        ESLint-et, így gyorsan használhatod bármelyik fájlhoz az
                        ellenőrzést, amelyikhez csak akarod, függetlenül attól,
                        hogy hol is van a fájl a számítógépeden.
                    </li>
                </Paragraph>

                <Paragraph>
                    Az egyszerűség kedvéért ebben a fejezetben nem tárgyaljuk az
                    ESLint összes funkcióját, de létre fogunk hozni egy
                    konfigurációt amely megfelelő a projektünkhöz és annak
                    igényeihez. Azonban tartsd észben, hogy ha finomítani
                    szeretnél azon, hogyan néz ki a kódod vagy hogy, hogyan
                    ellenőrzi a kódod és szabályokat akarsz hozzá rendelni,
                    akkor nagyon valószínű, hogy azt egy jól beállított ESLint
                    konfigurációval tudod elérni.
                </Paragraph>

                <Paragraph>
                    Egy kicsit később ebben a fejezetben, adni fogunk egy ESLint
                    konfigurációt. Miután van egy helyes konfiguráció, egy
                    parancs futtatásával szerezhetünk néhány hasznos
                    információt. Itt egy ESLint terminál válasz (terminal
                    output) példa:
                </Paragraph>

                <CodeDisplay code={toolchain_4_eslint_output} />

                <Note>
                    <Paragraph>
                        <div className="bold inline mr-1">Megjegyzés:</div>A
                        következő szekcióban fogjuk telepíteni az ESLint-et, ne
                        aggódj most miatta.
                    </Paragraph>
                </Note>

                <Paragraph>
                    Mint más eszközöknél, a kódszerkesztő integráció támogatás
                    kifejezetten jó az ESLint-hez. Ami annyit tesz, hogy a
                    kódszerkesztődhöz van ESLint beépítve, és ez igazán hasznos
                    mert valós időben kapsz információt, ha egy probléma
                    felmerül. Ahogyan írod a kódot, már jelzi is a hibákat. Ha
                    vannak.
                </Paragraph>

                <div className="image-container">
                    <img src={eslint} alt="ESLint Code Editor Integration" />
                </div>
            </Article>
            <Article>
                <h1>Állítsuk be a projektet a kezdéshez</h1>

                <Paragraph>
                    Ezeket az eszközöket használva egy új projekt biztonságosan
                    beállítható annak tudatában, hogy sok alapvető hiba az
                    elején meg fog mutatkozni.
                </Paragraph>

                <Paragraph>
                    A parancssort használva készítünk egy projektet, telepítjük
                    az eszközöket az induláshoz és rövid konfigurációs fájlokat
                    hozunk létre. Miután megismételted ezt a folyamatot párszor,
                    elgondolkozhatsz azon, hogy milyen alapértelmezett
                    beállításokat kellene alkalmazni. Természetesen amit
                    mutatunk csak egy lehetséges beállítás (konfiguráció).
                </Paragraph>

                <h2>Kezdeti beállítás</h2>

                <Paragraph>
                    Rendben, akkor kezdjük a kezdeti projekt beállításokkal.
                </Paragraph>

                <Paragraph>
                    <ol className="ml-1">
                        <li>
                            Először is nyisd meg a terminál-od, és navigálj egy
                            olyan könyvtárba, ahol majd könnyen megtalálod a
                            projekted. Az Asztal vagy a "home" könyvtár vagy a
                            Dokumentumok mappa egész jó lesz erre a célra.
                        </li>
                        <li>
                            A következő feladatod az lesz, hogy futtasd a
                            következő parancsokat, hogy elkészítsd a mappát,
                            amelyben a projekt lesz és aztán belenavigálunk abba
                            a mappába, hogy az utána következő parancsok már a
                            projekt-re legyenek érvényesek. A projekt neve
                            "will-it-miss" lesz.
                        </li>
                        <CodeDisplay code={toolchain_5_project_start} />
                        <li>
                            Ezután fogunk készíteni egy új mappát amiben a
                            weboldalunk fejlesztői kódja lesz, az "src" mappa.
                            Ehhez futtasd a következőt:
                        </li>
                        <CodeDisplay code={toolchain_6_project_src} />A kód
                        szervezése eléggé változó csapatonként. Ebben a
                        projektben a forráskód az "src" mappában lesz.
                        <li>
                            Most pedig légy biztos benne hogy a{" "}
                            <BgLightgray>will-it-miss</BgLightgray>
                            könyvtár gyökerében vagy és írd be a következő
                            parancsot, hogy elindítsd a git verziókezelő
                            működését a will-it-miss projektben.
                        </li>
                        <CodeDisplay code={toolchain_7_git_start} />
                        Ez annyit tesz, hogy mostantól képes leszel
                        "pillanatképet" tárolni a mappa tartalmáról, elmentheted
                        egy távoli adattárban, stb. Erről többet később.
                        <li>
                            A következő paranccsal a könyvtáradat átváltoztatjuk
                            egy npm csomaggá azokkal az előnyökkel felruházva,
                            amelyekről az előző cikkben tanultunk:
                        </li>
                        <CodeDisplay code={toolchain_8_npm_init} />
                        Ez készíteni fog egy alapértelmezett{" "}
                        <BgLightgray>package.json</BgLightgray> fájlt amit
                        később konfigurálhatunk, ha úgy akarjuk. A{" "}
                        <BgLightgray>--force</BgLightgray> zászló "flag" azt
                        jelzi a parancsban, hogy azonnal elkészíti az
                        alapértelmezett <BgLightgray>package.json</BgLightgray>{" "}
                        fájlt anélkül, hogy végigkérdezné az összes szokásos
                        kérdést a tartalomról amit szeretnél (ahogyan már láttuk
                        korábban). Most csak az alapértelmezettekre van
                        szükségünk, szóval megspórol nekünk egy kis időt.
                    </ol>
                </Paragraph>

                <h2>A projekt fájljai</h2>

                <Paragraph>
                    Most fogjuk a projekt fájljait (HTML, CSS, JavaScript, stb.)
                    és belerakjuk őket az <BgLightgray>src</BgLightgray>{" "}
                    mappába. Nem tanítjuk meg most, hogyan is működnek, nem ez a
                    célja ennek a fejezetnek. Csupán azt tanuljuk itt egy
                    kicsit, hogyan futtassuk az eszközöket.
                </Paragraph>

                <Paragraph>
                    <ol className="ml-1">
                        <li>
                            Hogy megkapd a fájlokat látogass el a{" "}
                            <a
                                href="https://github.com/remy/mdn-will-it-miss"
                                target="_blank"
                            >
                                https://github.com/remy/mdn-will-it-miss
                            </a>{" "}
                            oldalra és töltsd le ebből az adattárból aztán
                            csomagold ki a tömörített fájlt és mentsd el valahol
                            a helyi számítógépeden. Letöltheted az egész
                            projektet zip fájlként a Clone (klónozást) választva
                            vagy{" "}
                            <span className="italic">
                                download &gt; Download ZIP
                            </span>{" "}
                            gombokra kattintva.
                        </li>
                        <div className="image-container">
                            <img
                                src={git_repo}
                                alt="Git Repository of mdn-will-it-miss"
                            />
                        </div>
                        <li>
                            Most pedig másold a tartalmat a projekt{" "}
                            <BgLightgray>src</BgLightgray> mappájából a te most
                            még üres <BgLightgray>src</BgLightgray> mappádba.
                        </li>
                    </ol>
                </Paragraph>

                <Paragraph>
                    Most már helyén vannak a projekt fájljai. Ennyit kellet most
                    tennünk.
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        A projekt beállításához a helyi gépen, menj a nem
                        tömörített gyökér mappába és nyisd meg a terminált azon
                        a helyen és futtasd az{" "}
                        <BgLightgray>npm install</BgLightgray> parancsot a
                        terminálban. Ez telepíteni fogja az összes projekt
                        függőséget, amely említve van a{" "}
                        <BgLightgray>package.json</BgLightgray> fájl-ban.
                    </Paragraph>
                </Note>

                <h2>Eszközeink telepítése</h2>

                <Paragraph>
                    Most itt az idő, hogy telepítsük a kezdeti eszközöket
                    amelyeket használni fogunk a fejlesztői környezetünkben.
                    Futtasd a következő parancsot a projekt gyökér mappájában:
                </Paragraph>

                <CodeDisplay code={toolchain_9_npm_install} />
            </Article>
            Now it's time to install the initial set of tools we'll be using in
            our dev environment. Run the following from inside your project's
            root directory:
        </div>
    );
}
