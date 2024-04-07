import React, {useEffect} from 'react';
import './getting_started_with_react.css';
import CodeDisplay from "../components/CodeDisplay.jsx";
import {
    code_1_heading,
    code_2_header,
    code_3_header,
    code_4_header,
    code_5_node_version,
    code_6_create_app,
    code_7_npm_install,
    code_8_npm_run_dev,
    code_9_npm_run_dev2,
    code_10_appjsx,
    code_11_import,
    code_12_app_closely,
    code_13_export,
    code_14_main,
    code_15_hello_world,
    code_16_jsx_practice,
    code_17_jsx_className,
    code_18_jsx_subject,
    code_19_jsx_example,
    code_20_prop,
    code_21_prop_parameter,
    code_22_button,
    code_23_subject,

} from "./code_texts.jsx";
import npm_run_dev from "./img/1.npm_run_dev.png";
import app_structure from "./img/2.app_structure.png";
import Paragraph from "./paragraph/Paragraph.jsx";
import BgLightgray from "./bg-lightgray/BgLightgray.jsx";
import Note from "./note/Note.jsx";
import Article from "./article/Article.jsx";

export default function Getting_Started_With_React() {

    useEffect(() => {
        const scrollTargetElement = document.getElementById('scrollTarget');
        if (scrollTargetElement) {
            scrollTargetElement.scrollIntoView();
        }
    }, []);

    return (
        <div className="container">
            <h1>Kezdjük a React-ot!</h1>
            <Article>
                Ebben a cikkben hello-t mondunk a React-nek. Egy kicsit részletesebben fel fogjuk fedezni
                a React hátterét és hogy milyen esetekben használjuk, beállítunk egy olyan eszközláncot
                a helyi számítógépünkön, amelyet egy React alkamazás során szoktak használni, aztán készítünk
                és kipróbálunk egy egyszerű kezdő alkalmazást - szóval tanulunk egy kicsit a React működéséről.
            </Article>

            <Article className="article prerequisites">
                <Paragraph>
                    Előfeltételek: A HTML, CSS és Javascript lényegét ismernie kell és legyenek ismeretek
                    a terminal/parancssor használatáról.
                </Paragraph>

                <Paragraph>
                    A React egy HTML a Javascript-ban szintaxist használ, amit JSX-nek neveznek
                    (Javascript és XML).
                    Ha ismered a HTML és a Javascript lényegét az segíteni fog a JSX megtanulásában és segít majd
                    azonosítani a hibákat, hogy azok a Javascript-hez vagy a React-hez
                    kapcsolódnak-e?.
                </Paragraph>

                <Paragraph>
                    Célkitűzés: Beállítani egy helyi React fejlesztői környezetet, készíteni egy kezdő alkalmazást és
                    megérteni az alapjait hogyan is működik.
                </Paragraph>
            </Article>

            <Article>
                <h1>Hello React</h1>
                <Paragraph>
                    Ahogy a hivatalos szlogenje is mondja, a React egy könyvtár ahhoz, hogy felhasználói felületet
                    készítsünk.
                    A React nem egy keretrendszer - még csak nem is kizárólag a web-hez készült. Más könyvtárakkal
                    együtt használják
                    bizonyos környezetekben való megjelenítéshez. Például a React Native használható mobil alkalmazások
                    készítésére.
                </Paragraph>
                <Paragraph>
                    A webre való fejlesztéshez a fejlesztők a React-et a ReactDOM-mal együtt használják. A React-et és a
                    ReactDOM-ot
                    gyakrak ugyanolyan környezetben használják, mint más igazi webfejlesztő keretrendszereket, mivel
                    ugyanolyan
                    megoldásokra hsználják őket. Amikor a React-re utalunk mint keretrendszer, akkor köznyelvi
                    értelemben beszélünk róla.
                </Paragraph>
                <Paragraph>
                    A React elsődleges célja, hogy minimalizálja a felhasználói felületek készítése során fellépő
                    hibákat. Ezt komponensek
                    használatával teszi lehetővé, önálló logikai kódrészletek, amelyek a felhasználói felület darabjai.
                    Ezekből
                    a komponensekből áll össze a teljes felhasználói felület. A React elkülöníti a rendereléssel járó
                    problémákat, hogy csak
                    a felhasználói felület kidolgozásával legyen dolgod.
                </Paragraph>
            </Article>

            <Article>
                <h1>Milyen esetekben használjuk?</h1>
                <Paragraph>
                    Nem úgy mint más keretrendszereknek, a React-nak nincsenek szigorú szabályai a kód és a fájlok
                    szervezésére. Ez
                    megengedi a fejlesztői csapatok számára, hogy önálló szabályokat hozzanak létre, amelyek a legjobban
                    működnek
                    számukra és úgy
                    használják a React-et ahogy ők akarják. A React képes kezelni egyetlen gombot, egy pár darabból álló
                    felületet vagy
                    akár egy alkalmazás egész kezelőfelületét.
                </Paragraph>
                <Paragraph>
                    Míg a React használható egy interface kis darabjaihoz, nem olyan könnyű csak úgy beledobni az
                    alkalmazásba mint például a JQuery-t, vagy még annyira sem, mint a Vue keretrendszer esetében.
                    Könnyebb, ha az egész alakalmazást React segítségével van elkészítve.
                </Paragraph>
                <Paragraph>
                    Továbbá, sok fejlesztői előny, mint például a felületek írása JSX-ben, szüksége van egy öszzeállító
                    folyamatra.
                    Ha a Babel kompilátort adjuk az oldalunkhoz akkor lassan fog futni a program, így a fejlesztők
                    gyakran
                    egy építési ("build") lépéssel állítják be az ilyen eszközöket. A Reactnak vitathatatlanul komoly
                    eszközigénye
                    van, de megtanulható.
                </Paragraph>
                <Paragraph>
                    Ez a cikk arra összpontosít, hogy az egész felhasználói felületet React-el készítsük el a Vite
                    támogatásával,
                    amely egy modern front-end éptési ("build") eszköz.
                </Paragraph>
            </Article>

            <Article>
                <h1>Hogyan használja a React a Javascriptet?</h1>
                <Paragraph>
                    A React a modern Javascript jellemzőit használja. A JavaScripttől való legnagyobb eltérés a JSX
                    szintaxis használatából ered. A JSX kiegészíti a Javascript szintaxisát, így a kód HTML szerű lesz.
                    Mint például:
                </Paragraph>
                <CodeDisplay code={code_1_heading}/>
                <Paragraph>
                    Ez a heading konstans egy JSX kifejezés. A React használja ezt, hogy renderelje
                    a <BgLightgray>&lt;h1&gt;</BgLightgray> tag-et
                    az
                    alkalmazásunkba.
                </Paragraph>
                <Paragraph>
                    Tegyük fel hogy úgy akarjuk rendezni a kódunkat, hogy a heading-ünket bele akarjuk csomagolni
                    egy <BgLightgray>&lt;header&gt;</BgLightgray>
                    tag-be.
                </Paragraph>
                <CodeDisplay code={code_2_header}/>

                <Note>
                    <Paragraph>
                        <div className="bold inline">Megjegyzés:</div>
                        A zárójelek az előző kódrészletben nem egyediek a
                        JSX-ben és nincsenek semmi
                        hatással a kódra.
                        Csak azt jelzik neked és a számítógép számára, hogy a benne lévő több sor kód ugyanannak a
                        kifejezésnek a része.
                        Akár el is lehet hagyni.
                    </Paragraph>
                    <CodeDisplay code={code_3_header}/>
                    <Paragraph>
                        Viszont kicsit furcsán néz ki, mivel a kezdő <BgLightgray>&lt;header&gt;</BgLightgray> tag
                        nincsen behúzva mint a záró tag.
                    </Paragraph>
                </Note>
                <Paragraph>
                    Természetesen a böngészőnk nem tudja magától értelmezni a JSX-et segítség nélkül. Miután kompilálva
                    lett a kód,
                    olyan eszközökkel mint a Babel vagy a Parcel, a header kifejezésünk így néz ki:
                </Paragraph>
                <CodeDisplay code={code_4_header}/>
                <Paragraph>
                    Ki lehet hagyni a kompilációt és lehet használni a <BgLightgray>React.createElement()</BgLightgray>-et,
                    ha önmagunk szeretnénk
                    írni a UI-t, a
                    "user-interface"-et, azaz a felhasználói felületet. Azonban, ha azon a módon írjuk a kódot, akkor
                    elveszítjük a JSX
                    előnyeit és nehezebb a kódot olvasni. A kompiláció az egy extra lépés a fejlesztés során, de sok
                    fejlesztő a React
                    közösségben azt gondolja, hogy ennyit megér a JSX olvashatósága. Plusz mindenesetre a modern
                    front-end fejlesztés
                    majdnem mindig magába foglalja a build folyamatot. A kódot le kell degradálni (downlevel)
                    alacsonyabb szintre,
                    hogy a régebbi böngészőkkel kompatibilis legyen. És az is lehet, hogy akarod a kódot minify-olni,
                    azaz
                    eltávolítani a kódból a fölösleges sortörést és szóközöket, hogy optimalizáljuk a betöltési
                    teljesítményt,
                    gyorsaságot. Népszerű eszközök, mint a Babel már alapból JSX támogatással jelennek meg, tehát neked
                    nem kell
                    konfigurálnod a kompilációt, kivéve, ha azt akarod kifejezetten.
                </Paragraph>
                <Paragraph>
                    Mivel a JSX a HTML és a Javascript keveréke, néhány fejlesztő intuitívnek tartja. Mások azt mondják
                    ez a kevert forma összezavaró. Azonban miután már kényelmesen használod, segít neked felhasználói
                    felületet készíteni gyorsan és intuitív módon és segít másoknak jobban megérteni a kódbázist
                    ránézésre. Csak rá kell érezned!
                </Paragraph>
                <Paragraph>
                    Ha többet akarsz olvasni a JSX-ről nézd meg a React csapat cikkét <a target="_blank"
                                                                                         href="https://react.dev/learn/writing-markup-with-jsx">JSX
                    használata</a>
                </Paragraph>
            </Article>

            <Article>
                <h1>Az első React Alkalmazásod</h1>
                <Paragraph>
                    Sok módja van új React alkalmazást készíteni. Mi a Vite-ot fogjuk használni, hogy új React
                    alkalmazást készítsünk a parancssor segítségével.
                </Paragraph>
                <Paragraph>
                    Lehetséges egy már meglévő projekthez hozzáadni a React-et úgy hogy bemásoljuk
                    a <BgLightgray>&lt;script&gt;</BgLightgray> elemeket
                    a HTML fájl-ba, de a Vite-al több idő marad az applikáció elkészítéséhez és így kevesebb idő megy el
                    a beállítással.
                </Paragraph>
                <h2>Követelmények</h2>
                <Paragraph>
                    Ahhoz, hogy a Vite-ot használhassuk szükségünk lesz a <a target="_blank"
                                                                             href="https://nodejs.org/en/">Node.js</a>-re.
                    A Vite 5.0 verziójához legalább
                    a Node.js 18-ra vagy újabbra van szükség és az egy jó ötlet ha a legújabb LTS (Long Term Supported)
                    verziót használunk, amely hosszú
                    ideig támogatott. Ha lehet tegyük ezt. 2023 Október 24-én a Node.js 20 a legújabb LTS változat. A
                    Node.js tartalmazza az npm-et, a Node Package
                    Manager-t, ami egy Node.js csomagkezelő. A Node.js-t gyakran csak Node-ként említjük.
                </Paragraph>
                <Paragraph>
                    Ahhoz, hogy megnézzük milyen Node.js van telepítve a számítógépünkre a következő parancsot írjuk be
                    a parancssorba:
                </Paragraph>
                <CodeDisplay code={code_5_node_version}/>
                <Paragraph>
                    Ha a Node.js telepítve van akkor egy verzió számot fogsz látni, ellenkező esetben pedig egy
                    hibaüzenetet. A Node telepítéséhez
                    kövesd a <a target="_blank" href="https://nodejs.org/en/">Node.js</a> oldalon található
                    instrukciókat.
                </Paragraph>
                <Paragraph>
                    Lehet Yarn csomagkezelőt is használni az npm alternatívájaként, de azt feltételezzük, hogy npm-et
                    használsz ehhez az oktatóanyaghoz.
                    Nézd meg a <a target="_blank"
                                  href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management">Csomagkezelő
                    Alapozó</a>-t
                    a yarn és az npm-hez további információkért.
                </Paragraph>
                <Paragraph>
                    Ha Windows-ot használsz, akkor telepítened kell néhány szoftvert, hogy Unix/MacOS-el egyenértékű
                    terminált kapj, hogy futtathasd az ebben
                    az oktatóanyagban leírt terminál-os/parancssoros parancsokat. GitBash, (amely része a <a
                    target="_blank" href="https://gitforwindows.org/">Git a Windows-hoz</a>),
                    vagy a <a target="_blank" href="https://learn.microsoft.com/en-gb/windows/wsl/about">WSL (Windows
                    Subsystem for Linux)</a> azaz Windows Alrendszer Linux-hoz. Mindkettő megfelelő a célra.
                </Paragraph>
                <Paragraph>
                    Nézd meg a <a target="_blank"
                                  href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">Parancssoros
                    Gyorstalpalót</a> általánosan használt parancsokért és további információkért!
                </Paragraph>
                <Paragraph>
                    Azt is észben kell tartani, hogy a React és a React DOM olyan alkalmazásokat készít, amelyek csak
                    igazán modern böngészőkön működnek
                    mint a Firefox, a Microsoft Edge, Safari vagy a Chrome. Ezt tartsuk észben az oktatóanyag
                    tanulmányozása során.
                </Paragraph>
                <Paragraph>
                    Nézd meg a következőket további információkért:
                </Paragraph>
                <Paragraph>
                    <li><a target="_blank" href="https://docs.npmjs.com/about-npm">"Az NPM-ről" az npm blog-on</a></li>
                    <li><a target="_blank"
                           href="https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner">"NPX
                        bemutatása" az npm blog-on</a></li>
                    <li><a target="_blank" href="https://vitejs.dev/guide/">Vite dokumentáció</a></li>
                </Paragraph>
                <h2>A React alkalmazásod elindítása</h2>
                <Paragraph>
                    Az npm csomagkezelőnek van egy <BgLightgray>create</BgLightgray> parancsa, amellyel új
                    react alkalmazásokat készíthetünk
                    sablonokból. Egy új alkalmazást készíthetünk
                    a Vite alapértelmezett React sablonjából. A <BgLightgray>cd</BgLightgray> parancs
                    segítségével navigáljunk a kívánt könyvtárba
                    a terminál segítségével, ahová a React alkalmazásunkat szeretnénk telepíteni és ott futtassuk le a
                    következő parancsot.
                </Paragraph>
                <CodeDisplay code={code_6_create_app}/>
                <Paragraph>
                    Ez a parancs elkészíti a <BgLightgray>moz-todo-react</BgLightgray> könyvtárat, ez lesz a
                    projekt mappája, benne a
                    Vite <BgLightgray>react</BgLightgray> sablonjával.
                </Paragraph>
                <Note>
                    <Paragraph>
                        <div className="bold inline">Megjegyzés:</div>
                        A <BgLightgray>--</BgLightgray> azért
                        szükséges, hogy argumentumokat adhassunk a <BgLightgray>create</BgLightgray> parancshoz és
                        a <BgLightgray>--template react</BgLightgray> argument azt mondja a Vite-nak hogy React
                        sablon-t használjon.
                    </Paragraph>
                </Note>
                <Paragraph>
                    A terminálodnak ki kell írnia néhány üzenetet ha a parancs sikeresen lefutott. Olyan üzenetet
                    kellene
                    látnod, hogy navigálj a <BgLightgray>cd</BgLightgray> paranccsal a projekt könyvtárába,
                    telepítsd a projekt függőségeit és
                    futtasd az
                    alkalmazást helyi szerveren, azaz localhost-on. Kezdjük két ilyen paranccsal! Futtasd a következő
                    parancsot a terminálban:
                </Paragraph>
                <CodeDisplay code={code_7_npm_install}/>
                <Paragraph>
                    Miután a folyamat befejeződött, szükségünk van egy helyi fejlesztői kiszolgálóra, hogy futtassuk az
                    alkalmazásunkat. Itt fogunk néhány parancs
                    flag-et adni a Vite alapértelmezett ajánlásához, hogy megjelenítsük az alkalmazást a böngészőben,
                    amint a szerver elindult, mégpedig a 3000-es porton.
                </Paragraph>
                <Paragraph>
                    Futtasd a következőt a terminal-ban:
                </Paragraph>
                <CodeDisplay code={code_8_npm_run_dev}/>
                <Paragraph>
                    Ha egyszer elindult a szerver, látnod kellene egy új fülön a böngésződben az alkalmzást.
                </Paragraph>
                <div className="image-container"><img src={npm_run_dev} alt="React Vite Starting Page"/></div>
                <h2>Alkalmazás struktúra</h2>
                <Paragraph>
                    A Vite mindent megad amire szükségünk van egy React alkalmazás elkészítéséhez. A kezdeti
                    fájlstruktúra a következőképpen néz ki:
                </Paragraph>
                <div className="image-container"><img src={app_structure} alt="App Structure"/></div>
                <Paragraph>
                    Az <BgLightgray>index.html</BgLightgray> a legfontosabb legfelsőbb szintű fájl. A Vite
                    ebbe a fájlba szúrja be a kódodat, amelyet a böngésző futtat majd. A tutorialunk során ezt a fájlt
                    nem kell szerkesztened, de meg kellene változtatnod a szöveget
                    a <BgLightgray>&lt;title&gt;</BgLightgray> elemben, hogy megváltoztasd az alkalmazás nevét. A
                    pontos oldalcímek fontosak az akadálymentes alkalmazásokban.
                </Paragraph>
                <Paragraph>
                    A <BgLightgray>public</BgLightgray> könyvtár statikus fájlokat tartalmaz, amelyek
                    közvetlenül a böngészőhöz lesznek szolgáltatva, anélkül, hogy a Vite feldolgozná. Most egyedül egy
                    Vite logót tartalmaz.
                </Paragraph>
                <Paragraph>
                    Az <BgLightgray>src</BgLightgray> mappa ahol az időnk nagy részét fogjuk tölteni, ez az a
                    hely ahol az applikációnk forráskódja van. Észre fogod venni, hogy néhány Javascript fájl neve ebben
                    a
                    mappában <BgLightgray>.jsx</BgLightgray> kitejesztésre végződik. Ez a kiterjesztés
                    szükséges bármelyik fájlhoz amelyben JSX kód van. Ez azt mondja a Vite-nak hogy fordítsa le a JSX
                    kódot Javascript-re, amit a böngésző értelmezni tud. Az <BgLightgray>src/assets</BgLightgray> mappa
                    tartalmazza a React logo-t, amelyet láttál a
                    böngészőben.
                </Paragraph>
                <Paragraph>
                    A <BgLightgray>package.json</BgLightgray> és
                    a <BgLightgray>package-lock.json</BgLightgray> metaadatokat tartalmaznak a projektünkről. Ezek a
                    fájlok nem csak React applikációban találhatóak meg. A Vite feltöltötte adatokkal
                    a <BgLightgray>package.json</BgLightgray> fájlt, az npm pedig elkészítette
                    a <BgLightgray>package-lock.json</BgLightgray> fájlt amikor telepítettük a függőségeket. Ehhez a
                    tutorial-hoz nem kell megértened ezeket a fájlokat, most nem kell foglalkoznod velük. Azonban, ha
                    szeretnél róluk többet megtudni, olvashatsz
                    a <a target="_blank"
                         href="https://docs.npmjs.com/cli/v9/configuring-npm/package-json"><BgLightgray>package.json</BgLightgray></a> és
                    a <a target="_blank"
                         href="https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json"><BgLightgray>package-lock.json</BgLightgray></a>-ról
                    az npm dokumentumok között. Beszélünk még
                    a <BgLightgray>package.json</BgLightgray> fájlról a <a target="_blank"
                                                                           href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management">Csomagkezelés
                    Alapozó</a> oktatóanyagban.
                </Paragraph>
                <h2>A dev script-ünk testreszabása</h2>
                <Paragraph>
                    Mielőtt továbbmennénk, lehet hogy meg akarod változtatni
                    a <BgLightgray>package.json</BgLightgray> fájlt egy kicsit hogy ne kelljen minden
                    egyes <BgLightgray>npm run dev</BgLightgray> indításnál a <BgLightgray>--open</BgLightgray> és
                    a <BgLightgray>--port</BgLightgray> flag-eket beírogatni. Nyisd meg
                    a <BgLightgray>package.json</BgLightgray> fájlt a szövegszerkesztődben és keresd meg
                    a <BgLightgray>scripts</BgLightgray> objektumot. Változtasd meg
                    a <BgLightgray>"dev"</BgLightgray> kulcsot úgy, ahogy itt látod:
                </Paragraph>
                <CodeDisplay code={code_9_npm_run_dev2}/>
                <Paragraph>
                    Ha ez rendben van, akkor az alkalmazás minden egyes <BgLightgray>npm run
                    dev</BgLightgray> indításkor a <BgLightgray>http://localhost:3000</BgLightgray> címen fog megnyílni
                    a böngészőben.
                </Paragraph>
                <Note>
                    <Paragraph>
                        <div className="bold inline">Megjegyzés:</div>
                        Nincsen szükséged az
                        extra <BgLightgray>--</BgLightgray>-re itt, mivel az argumentumok közvetlenül a <div
                        className="bold inline">vite</div>-be mennek, nem egy előre definiált npm script-be.
                    </Paragraph>
                </Note>
            </Article>

            <Article>
                <h1>Fedezzük fel az első React komponensünket: <BgLightgray>&lt;App /&gt;</BgLightgray></h1>
                <Paragraph>
                    A React-ban a <span className="bold">komponens</span> egy újra felhasználható, kis darabja, része
                    az egész applikációnak. Az
                    alkalmazás egy részét rendereli.
                    A komponens lehet kicsi vagy nagy, de általában világosan vannak meghatározva, egy nyilvánvaló célt
                    szolgálnak.
                </Paragraph>
                <Paragraph>
                    Most nyissuk meg az <BgLightgray>src/App.jsx</BgLightgray> fájlt, mivel a böngészőnk is
                    arra
                    bátorít, hogy szerkesszük a fájlt. Ez a fájl tartalmazza az első komponensünket
                    az <BgLightgray>&lt;App /&gt;</BgLightgray>-ot
                </Paragraph>
                <CodeDisplay code={code_10_appjsx}/>
                <Paragraph>
                    Az <BgLightgray>App.jsx</BgLightgray> fájl három fő részből áll:
                    néhány <BgLightgray>import</BgLightgray> ismertetés a tetején,
                    az <BgLightgray>App()</BgLightgray> függvény
                    a közepén és egy <BgLightgray>export</BgLightgray> állítás az alján. A legtöbb React
                    komponens
                    követi ezt a mintát.
                </Paragraph>
                <h2>Import állítások</h2>
                <Paragraph>
                    Az <BgLightgray>import</BgLightgray> állítások a fájl tetején megengedik az <span
                    className="bold">App.jsx</span> fájlnak, hogy olyan fájlokat használjon, amelyek máshol vannak
                    definiálva. Nézzük meg ezeket az állításokat közelebbről!
                </Paragraph>
                <CodeDisplay code={code_11_import}/>
                <Paragraph>
                    Az első sor importálja a <BgLightgray>useState</BgLightgray> horgot a <span
                    className="bold">react</span> könyvtárból. A horgokkal React funkciókat használhatunk a komponensen
                    belül. Később beszélni fogunk róluk ebben az oktatóanyagban.
                </Paragraph>
                <Paragraph>
                    Azután importáljuk a <BgLightgray>reactLogo</BgLightgray>-t és a <span
                    className="bold">viteLogo</span>-t. Vedd figyelembe, hogy az útvonalak <span
                    className="bold">./</span> és <BgLightgray>/</BgLightgray>-el kezdődnek és azt hogy <span
                    className="bold">.svg</span> kiterjesztéssel végződnek. Ezek azt jelentik, hogy ezek az importok
                    lokálisak, azaz saját fájlokra hivatkoznak vagyis nem npm csomagokra.
                </Paragraph>
                <Paragraph>
                    Az utolsó sor importálja a CSS-t amely az <span
                    className="bold">&lt;App /&gt;</span> komponensünkhöz tartozik.
                    Figyeld meg hogy nincsenek változó nevek és <BgLightgray>from</BgLightgray> utasítás sem.
                    Ezt <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only">mellékhatás-import</a>-nak
                    is nevezzük - ez nem importál semmilyen értéket sem a Javascript fájlba, viszont azt mondja a
                    Vite-nak, hogy adja hozzá a hivatkozott CSS fájlt a végső kód kimenethez, így az használható lesz a
                    böngésző számára.
                </Paragraph>
                <h2>Az App() függvény</h2>
                <Paragraph>
                    Az importok után van egy olyan függvényed hogy <BgLightgray>App()</BgLightgray>, amely
                    definiálja az <BgLightgray>App</BgLightgray> komponensünk felépítését. Mivel legtöbben a
                    Javascript közösségben a <a target="_blank"
                                                href="https://developer.mozilla.org/en-US/docs/Glossary/Camel_case">lower
                    camel case</a>-t preferálják, mint például a <span
                    className="bold">helloWorld</span>, a React komponensek Pascal case-t használnak a változónevekhez,
                    amit upper-camel-case-nek is neveznek, mint a <BgLightgray>HelloWorld</BgLightgray>, így
                    világos,
                    hogy az adott JSX elem egy React komponens
                    és nem egy megszokott HTML tag. Ha átneveznéd a komponenset <span
                    className="bold">App()</span>-ról <BgLightgray>app()</BgLightgray>-ra, akkor a böngésző
                    egy hibát
                    dobna mivel nem nagybetűvel kedődik, azaz nem felel meg az upper-camel-case-nek.
                </Paragraph>
                <Paragraph>
                    Nézzük meg az <BgLightgray>App()</BgLightgray>-ot még közelebbről!
                </Paragraph>
                <CodeDisplay code={code_12_app_closely}/>
                <Paragraph>
                    Az <BgLightgray>App()</BgLightgray> függvény egy JSX kifejezést ad vissza. Ez a kifejezés
                    definiálja azt, amit végül a böngésző renderelni fog a DOM-ba.
                </Paragraph>
                <Paragraph>
                    Közvetlenül a <BgLightgray>return</BgLightgray> kulcsszó alatt található egy speciális
                    szintaxis: <BgLightgray>&lt;&gt;</BgLightgray>. Ez egy <a target="_blank"
                                                                              href="https://react.dev/reference/react/Fragment">fragment</a>.
                    A React komponenseknek egyetlen JSX elemet kell visszaadniuk, és a fragment-ek megengedik nekünk,
                    hogy ezt tegyük anélkül, hogy <BgLightgray>div</BgLightgray>-ekbe kellene raknunk a
                    kifejezést.
                    Így a böngészőnek nem kell külön azért egy <BgLightgray>div</BgLightgray>-et renderelnie.
                    Látni
                    fogod a fragmenteket sok React alkalmazásban.
                </Paragraph>
                <h2>Az <BgLightgray>export</BgLightgray> állítás</h2>
                <Paragraph>
                    Van még egy sor kód az <BgLightgray>App()</BgLightgray> funkció után.
                </Paragraph>
                <CodeDisplay code={code_13_export}/>
                <Paragraph>
                    Ez az export állítás az <BgLightgray>App()</BgLightgray> függvényünket elérhetővé teszi
                    más
                    modulok számára. Később még beszélni fogunk róla.
                </Paragraph>
            </Article>

            <Article>
                <h1>Nézzük a <BgLightgray>main</BgLightgray> fájlt</h1>
                <Paragraph>
                    Most akkor nyissuk meg a <BgLightgray>src/main.jsx</BgLightgray> fájlt, mert ott van
                    az <span
                    className="bold">App()</span> komponensünk használva. Ez a fájl a belépési pont az alkalmazásunk
                    számára és kezdetben így néz ki:
                </Paragraph>
                <CodeDisplay code={code_14_main}/>
                <Paragraph>
                    Mint az <BgLightgray>App.jsx</BgLightgray>-el, a fájl azzal kezdődik, hogy importálja az
                    összes JS modult és más eszközöket
                    amelyekre szüksége van a futáshoz.
                </Paragraph>
                <Paragraph>
                    Az első két állítás importálja a <BgLightgray>React</BgLightgray> és
                    a <BgLightgray>ReactDOM</BgLightgray> libraryt, mert később hivatkozva lesz rájuk a fájlban. Nem
                    írunk útvonalat vagy kiterjesztést amikor ezeket a könyvtárakat importéljuk, mert nem helyi fájlok.
                    Valójában függőségként vannak listázva a <BgLightgray>package.json</BgLightgray> fájlban. Ügyelj
                    erre a különbségtételre, ahogy haladsz a lecke során.
                </Paragraph>
                <Paragraph>
                    Aztán importáljuk az <BgLightgray>App()</BgLightgray> függvényt és
                    az <BgLightgray>index.css</BgLightgray> fájlt, amely globális stílusokat tartalmaz és az egész
                    applikációra kihat.
                </Paragraph>
                <Paragraph>
                    Aztán meghívjuk a <BgLightgray>ReactDOM.createRoot()</BgLightgray> függvényt, amely definiálja az
                    alkalmazásunk gyökér csomópontját (node-ját). Ez vár egy argumentumot a DOM elembe, amelybe akarjuk
                    belerenderelni a React app-unkat. Ebben az esetben az a DOM elem
                    egy <BgLightgray>root</BgLightgray> ID-vel. Végül hozzáfűzzük
                    a <BgLightgray>render()</BgLightgray> metódust a <BgLightgray>createRoot()</BgLightgray> híváshoz,
                    beletéve a JSX kifejezést, amit a root-ban akarunk renderelni. Azzal, hogy azt írjuk a kódunkba,
                    hogy <BgLightgray>&lt;App /&gt;</BgLightgray>, mint JSX kifejezést, azt mondjuk a React-nak, hogy
                    hívja meg az <BgLightgray>App()</BgLightgray> függvényt, amely rendereli
                    az <BgLightgray>App()</BgLightgray> komponenset a root node (csomópont) belsejébe.
                </Paragraph>
                <Note>
                    <Paragraph>
                        <div className="bold inline">Megjegyzés:</div>
                        Az <BgLightgray>App()</BgLightgray> egy speciális
                        komponens-be a <BgLightgray>&lt;React.Strict.Mode&gt;</BgLightgray>-be van renderelve. Ez a
                        komponens segít a fejlesztőknek megérteni potenciális hibákat a kódjukban.
                    </Paragraph>
                </Note>
                <Paragraph>
                    Olvashatsz ezekről a React API-król itt:
                    <Paragraph>
                        <a target="_blank"
                           href="https://react.dev/reference/react-dom/client/createRoot">ReactDOM.createRoot()</a>
                    </Paragraph>
                    <Paragraph>
                        <a target="_blank" href="https://react.dev/reference/react/StrictMode">React.StrictMode</a>
                    </Paragraph>
                </Paragraph>
            </Article>

            <Article>
                <h1>Kezdjünk egy friss app-al</h1>
                <Paragraph>
                    Mielőtt elkezdjük felépíteni az app-unkat, törölni fogunk a boilerplate kódból amit a
                    Vite szolgáltatott nekünk.
                </Paragraph>
                <Paragraph>
                    Először is egy kísérletet teszünk, megváltoztatjuk
                    a <BgLightgray>&lt;h1&gt;</BgLightgray> elemet az <BgLightgray>App.jsx</BgLightgray> fájlban
                    "Hello, World"-re, aztán mentsd el a fájlt. Észre fogod venni, hogy ez a változtatás azonnal
                    renderelve lett a fejlesztői szerveren
                    a <BgLightgray>http://localhost:3000</BgLightgray> oldalon a böngésződben. Ezt tartsd szem előtt
                    amikor az alkalmazáson dolgozol.
                </Paragraph>
                <Paragraph>
                    A maradék kódot nem fogjuk használni, szóval helyettesítsd az <BgLightgray>App.jsx</BgLightgray>-ben
                    lévő tartalmat a következőre:
                </Paragraph>
                <CodeDisplay code={code_15_hello_world}/>
            </Article>

            <Article>
                <h1>Egy kis JSX gyakorlás</h1>
                <Paragraph>
                    Következésképpen a Javascript képességeinket fogjuk használni, hogy egy kicsit kényelmesebben
                    tudjuk írni a JSX-et és dolgozzunk adatokkal a React-ben. Fogunk beszélni arról, hogyan adhatunk
                    attribútumokat a JSX elemekhez, hogyan írhatunk kommenteket, hogyan renderelhetünk tartalmat
                    változókból és más kifejezésekből, és hogyan adhatunk adatokat a komponenseknek prop-okkal.
                </Paragraph>
                <h2>Attribútumok hozzáadása JSX elemekhez</h2>
                <Paragraph>
                    A JSX elemeknek lehetnek attribútumai, mint a HTML elemeknek. Próbálj hozzáadni
                    egy <BgLightgray>&lt;button&gt;</BgLightgray>-t a <BgLightgray>&lt;h1&gt;</BgLightgray>
                    elem alá az <BgLightgray>App.jsx</BgLightgray> fájl-ban, mint itt:
                </Paragraph>
                <CodeDisplay code={code_16_jsx_practice}/>
                <Paragraph>
                    Miután elmentetted a fájlt, látni fogsz egy gomb-ot a <BgLightgray>Kattints
                    rám!</BgLightgray> szöveggel. A gomb még nem
                    csinál semmit, de hamarosan fogunk tanulni róla, hogyan adhatunk interaktivitást az app-unkhoz.
                </Paragraph>
                <Paragraph>
                    Néhány attribútum különböző, mint a HTML megfelelője. Például,
                    a <BgLightgray>class</BgLightgray> attribútum HTML-ben meg
                    van változtatva <BgLightgray>className</BgLightgray>-re JSX-ben. Ez azért van mert
                    a <BgLightgray>class</BgLightgray> szó
                    egy fenntartott szó a Javascript-ben, és a JSX egy Javascript kiterjesztés. Ha szeretnél egy
                    <BgLightgray>primary</BgLightgray> class-t adni a gombodhoz, akkor azt így kell tenned:
                </Paragraph>
                <CodeDisplay code={code_17_jsx_className}/>
                <h2>Javascript kifejezések mint tartalmak</h2>
                <Paragraph>
                    Nem úgy mint a HTML, a JSX megengedi nekünk, hogy változókat és más Javascript kifejezéseket
                    írjunk más tartalom mellé. Most deklaráljunk egy változót és
                    nevezzük <BgLightgray>subject</BgLightgray>-nek az <BgLightgray>App()</BgLightgray> funkció
                    felett:
                </Paragraph>
                <Paragraph>
                    Utána helyettesítsük a "World" szót a <BgLightgray>&lt;h1&gt;</BgLightgray> elemben
                    a <BgLightgray>{"{"}subject{"}"}</BgLightgray>-re:
                </Paragraph>
                <CodeDisplay code={code_18_jsx_subject}/>
                <Paragraph>
                    Mentsd el a fájlt és nézd a böngészőt. Azt kellene látnod, hogy a <BgLightgray>"Hello,
                    React!"</BgLightgray> renderelődött.
                </Paragraph>
                <Paragraph>
                    A kapcsos zárójelek a <BgLightgray>subject</BgLightgray> körül egy másik funkciója a JSX
                    szintaxisnak. A kapcsos zárójelek
                    azt mondják a React-nek, hogy ki akarjuk olvasni az értéket
                    a <BgLightgray>subject</BgLightgray> változóból, ahelyett hogy
                    a <BgLightgray>"subject"</BgLightgray> szöveget szeretnénk renderelni. Bármilyen érvényes
                    Javascript kifejezést beletehetünk a kapcsos zárójelekbe a JSX-ben. A React kiértékeli azt és
                    rendereli a kifejezés eredményét mint végső tartalom. Most következik néhány példa, kommentekkel
                    felette elmagyarázva, mit is renderel mindegyik kifejezés:
                </Paragraph>
                <CodeDisplay code={code_19_jsx_example}/>
                <Paragraph>
                    Még a kommentek is kapcsos zárójelben jelennek meg a JSX-ben. Ez azért van, mert technikailag a
                    kommentek is Javascript kifejezések. A <BgLightgray>/* block comment syntax
                    */</BgLightgray> szükséges a programod számára, hogy tudja hol kezdődik és végződik a komment.
                </Paragraph>
                <h2>Komponens property-k</h2>
                <Paragraph>
                    A <div className="bold inline">Prop</div>-ok jelentése, hogy adatokat rakunk a React
                    komponens-be. Az
                    szintaxisa azonos mint az attribútumoknak, lényegében: prop="value". A különbség az az, hogy az
                    attribútumok sima elemekbe mennek, a prop-ok React komponensekbe.
                </Paragraph>
                <Paragraph>
                    React-ban az adatáramlás egyirányú: a propok csak a szülő elemtől haladnak lefelé a gyermek
                    komponens felé.
                </Paragraph>
                <Paragraph>
                    Most nyissuk meg a <BgLightgray>main.jsx</BgLightgray> fájlt és adjuk hozzá az <BgLightgray>&lt;
                    App/&gt;</BgLightgray> komponens első prop-ját.
                </Paragraph>
                <Paragraph>
                    Adjuk a <BgLightgray>subject</BgLightgray> prop-ot az <BgLightgray>&lt;
                    App/&gt;</BgLightgray> komponens híváshoz a <BgLightgray>Clarice</BgLightgray> értékkel. Amikor
                    kész vagy valami
                    ilyesminek kellene kinéznie:
                </Paragraph>
                <CodeDisplay code={code_20_prop}/>
                <Paragraph>
                    Vissza az <BgLightgray>App.jsx</BgLightgray>-hez, látogassuk meg újra
                    az <BgLightgray>App()</BgLightgray> függvényt. Változtassuk meg
                    az <BgLightgray>App()</BgLightgray>-ot gy elfogadja a
                    <BgLightgray>prop</BgLightgray>-okat paraméterként, aztán kilogoltatjuk
                    a <BgLightgray>prop</BgLightgray>-okat a console-ra így megvizsgálhatjuk őket.
                    Töröljük ki a <BgLightgray>subject</BgLightgray> konstansot is, mert nincs rá többé szükségünk.
                    Az App.jsx-nek valahogy így kellene
                    kinéznie:
                </Paragraph>
                <CodeDisplay code={code_21_prop_parameter}/>
                <Paragraph>
                    Mentsd el a fájlt és ellenőrizd a böngészőt. Egy üres hátteret fogsz látni tartalom nélkül. Ez
                    azért van mert próbáljuk beolvasni a subject változót ami nincsen többé definiálva. Hogy
                    kijavítsuk ezt a hibát kommenteljük ki
                    a <BgLightgray>&lt;h1&gt;Hello {"{"}subject{"}"}!&lt;/h1&gt;</BgLightgray> sort.
                </Paragraph>
                <Note>
                    <div className="bold inline">Megjegyzés:</div>
                    Ha a kódszerkesztő programod tudja elemezni a JSX-et (a legtöbb szerkesztő tudja), akkor
                    használhatod a beépített komment billentyűkombinációt. Windows rendszeren: <BgLightgray>Ctrl +
                    /</BgLightgray>, macOS rendszeren pedig <BgLightgray>Cmd + /</BgLightgray>. Ezzel gyorsan
                    kommentelheted a kódodat.
                </Note>
                <Paragraph>
                    Mentsd el a fájlt a sorral, amit kommenteltünk. Most a komponens egy "Click me!" gombot renderel. Ha
                    megnyitod a böngésződ fejlesztői konzolát, egy üzenetet fogsz látni, mint ez:
                </Paragraph>
                <CodeDisplay code={code_22_button}/>
                <Paragraph>
                    Az objektum property-je a <BgLightgray>subject</BgLightgray> megfelel
                    a <BgLightgray>subject</BgLightgray> prop-nak, amit hozzáadtunk a
                    mi <BgLightgray>&lt;App/&gt;</BgLightgray> komponens
                    hívásunkhoz, és a string <BgLightgray>Clarice</BgLightgray> megfelel annak az értékének. Komponens
                    propok a React-ban minding
                    objektumban vannak összegyűjtve ebben a formában.
                </Paragraph>
                <Paragraph>
                    Most használjuk ezt a <BgLightgray>subject</BgLightgray> prop-ot, hogy kijavítsuk a hibát az
                    app-unkban. Vissza kell kommentelnünk
                    a <BgLightgray>&lt;h1&gt;Hello, {"{"}subject{"}"}!&lt;/h1&gt;</BgLightgray> sort és megváltoztatni
                    azt <BgLightgray>
                    &lt;h1&gt;Hello, {"{"}props.subject{"}"}!&lt;/h1&gt;</BgLightgray>-re, aztán
                    töröljük a <BgLightgray>console.log()</BgLightgray> állítást. A kódodnak így kell kinéznie:
                </Paragraph>
                <CodeDisplay code={code_23_subject}/>
                <Paragraph>
                    Miután elmentetted, az applikációnak így kell köszöntenie téged: "Hello, Clarice!". Ha visszamész a
                    <BgLightgray>main.jsx</BgLightgray>-hez, és szerkeszted a <BgLightgray>subject</BgLightgray> értékét
                    és elmented a szöveged meg fog változni a böngészőben.
                </Paragraph>
                <Paragraph>
                    További gyakorlásként, megpróbálhatnál hozzáadni egy másik prop-ot mondjuk
                    egy <BgLightgray>greeting</BgLightgray> prop-ot az <BgLightgray>&lt;App/&gt;</BgLightgray> komponens
                    híváshoz a <BgLightgray>main.jsx</BgLightgray>-en belül, használva azt
                    a <BgLightgray>subject</BgLightgray> prop mellett az <BgLightgray>App.jsx</BgLightgray>-ben.
                </Paragraph>
            </Article>
            <Article>
                <h1>Összefoglalás</h1>
                <Paragraph>
                    Ezzel a végére is értünk a React bemutatásának, beleértve hogyan telepítsük ezt lokálisan, hogyan
                    készítsünk egy kezdő app-ot és hogyan működik is alapjáraton. A következő cikkben, elkezdjük
                    felépíteni az első megfelelő alkalmazásunkat egy TODO Listát. Mielőtt azt tesszük azonban idézzünk
                    fel néhány dolgot, amit tanultunk.
                </Paragraph>
                <Paragraph>
                    React:

                    <li>A komponensek importálni tudnak modulokat amire szükségük van és exportálniuk kell magukat a
                        fájluk alján</li>
                    <li>A komponens funkciók <BgLightgray>PascalCase</BgLightgray>-ként vannak formázva</li>
                    <li>JSX-ben lehet Javascript kifejezéseket renderelni úgy, hogy kapcsos zárójelbe rakjuk őket,
                        mint <BgLightgray>{"{"}így{"}"}</BgLightgray></li>
                    <li>Néhány JSX attribútum különbözik a HTML attribútumoktól, így azok nem kerülnek konfliktusba a
                        fenntartott Javascript kulcsszavakkal. Például a <BgLightgray>class</BgLightgray> a HTML-ben <BgLightgray>className</BgLightgray> React-ben.
                    </li>
                    <li>
                        A prop-okat úgy írjuk, mint az attribútumokat a komponens hívás belsejében és így bele vannak rakva a komponensekbe.
                    </li>
                </Paragraph>
            </Article>
            <div id="scrollTarget">Görgetés Ide</div>
        </div>
    )
        ;
}
