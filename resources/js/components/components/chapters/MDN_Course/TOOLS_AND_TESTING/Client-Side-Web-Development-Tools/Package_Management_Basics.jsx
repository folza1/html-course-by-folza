import React from 'react';
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";
import Note from "../../REACT/note/Note.jsx";
import CodeDisplay from "../../components/CodeDisplay.jsx";
import {
    code_1_parcel,
    code_2_parcel,
    code_3_parcel_json,
    code_4_parcel,
    code_5_parcel,
    code_6_index_html,
    code_7_parcel_run,
    code_8_parcel_run,
    code_8_index_js,
    code_9_package_json,
    code_10_parcel_build,
    code_11_parcel_build_2,
    code_12_parcel_tree_shaking,
    code_13_parcel_tree_shaking,
    code_14_init,
    code_15_install_dependencies,
    code_16_update_dependencies,
    code_17_vulnerabilities,
    code_18_checking,
    code_19_run_own,
    code_20_scripts,
    code_21_scripts,
    code_22_run_dev,
    code_23_index_html
} from "./package_management_basics_code_texts.jsx";

export default function Package_Management_Basics() {
    return (
        <div className="container">
            <h1 className="bold">A Csomagkezelés Alapjai</h1>
            <Paragraph>
                Ebben a cikkben részletesebben fogunk foglalkozni a csomagkezelőkkel, hogy megértsük, hogyan
                használhatjuk őket a saját projektünkben, hogyan telepítsünk projekt eszköz függőségeket, tartsuk őket
                naprakészen és még más dolgokat.
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
                    Megérteni mik is azok a csomagkezelők és csomag adattárak, miért van rájuk szükségünk és annak az
                    alapjai, hogy, hogyan használjuk őket.
                </Paragraph>
            </Article>

            <h1 className="bold">Egy függőség a projektedben</h1>

            <Article>
                <Paragraph>
                    Egy <div className="bold inline">függőség</div> egy harmadik féltől származó szoftver, amelyet
                    valószínűleg másvalaki írt és ideális esetben egy problémát old meg neked. A web projektednek lehet
                    több függősége is, egy sem vagy sok számú és a függőségeid lehet tartalmaznak alfüggőségeket is
                    amelyeket nem kell kifejezetten telepíteni tehát a függőségeidnek lehetnek saját függőségeik is.
                </Paragraph>

                <Paragraph>
                    Egy egyszerű példa egy hasznos függőségre, például amikor a projektednek szüksége van relatív
                    dátumokra olvasható formában. Lekódolhatod magadnak, de nagy esély van rá, hogy más már egyszer
                    megoldotta ezt a problémát. Miért is pazarolnád az időt azzal, hogy újra feltalálod a kereket?
                    Továbbá egy megbízható harmadik féltől származó függőség sok más különböző szituációban tesztelve
                    van, ami még robosztusabbá és a böngészők között kompatibilisabbá teszi nem úgy mint a te
                    megoldásodat.
                </Paragraph>

                <Paragraph>
                    A projekt függősége lehet egy egész Javascript könyvtár vagy keretrendszer mint a React vagy Vue
                    vagy egy nagyon kicsi segéd mint a dátum library, vagy lehet egy parancssor eszköz mint a Prettier
                    vagy az ESLint amelyekről korábban beszéltünk.
                </Paragraph>

                <Paragraph>
                    Modern build eszközök nélkül a függőségeket mint ez lehet
                    hogy <BgLightgray>&lt;script&gt;</BgLightgray> elemmel kell használni, de az nem működik csak úgy és
                    lehet hogy szükség lesz néhány modern "bundler" eszközre, hogy összerakd a kódot és a föggőséget
                    mikor felrakod a webre. A "bundle" egy kifejezés arra, hogy a Javascript kód egy fájlba van
                    beszuszakolva a webszerveren, kifejezetten betömörítve amennyire csak lehet, hogy időt takarítson
                    meg a letöltésnél és megjelenítésnél amikor a látogatód nézi a böngészőben.
                </Paragraph>

                <Paragraph>
                    Továbbá mi van ha találsz egy jobb eszközt és le akarod cserélni a régit, vagy egy újabb verzió
                    kijött amire szeretnéd frissíteni? Nem nehéz pár függőségnél, de egy nagyobb projektnél sok
                    függőséggel tényleg igazán kihívást jelenthet. Sokkal több értelme van, ha használsz egy <div
                    className="bold inline">csomagkezelő</div>-t mint az npm és az majd garantálja, hogy az a kód van
                    tisztán hozzáadva vagy
                    eltávolitva.
                </Paragraph>
            </Article>

            <Article>
                <h1>Mi is pontosan a csomagkezelő?</h1>
                <Paragraph>
                    Találkoztunk már az <a href="https://www.npmjs.com/" target="_blank">npm</a>-el, de lépjünk most
                    vissza magától az npm-től, a csomagkezelő az egy
                    rendszer amely kezelni fogja a projekted függőségeit.
                </Paragraph>

                <Paragraph>
                    A csomagkezelő majd biztosít egy módot arra, hogy telepíts új függőségeket (más néven csomagokat),
                    segít kezelni, hogy hol tárold a csomagokat a fájlrendszeredben és lehetőséget ad arra, hogy
                    publikáld a saját csomagjaidat.
                </Paragraph>

                <Paragraph>
                    Elméletben nincsen szükséged csomagkezelőre és manuálisan le tudod tölteni és elmenteni a projekt
                    függőségeidet, de a csomagkezelő egyszerűen kezeli a csomagok telepítését és törlését. Ha nem
                    használsz csomagkezelőt akkor manuálisan kell kezelned ezeket:
                </Paragraph>

                <Paragraph>
                    <li>Meg kell találni a helyes csomag Javascript fájlokat.</li>
                    <li>Ellenőrizni kell őket, hogy biztosan nem tartalmaznak-e bármilyen ismert sebezhetőséget.</li>
                    <li>Le kell tölteni őket és a megfelelő helyre kell rakni őket a projektben.</li>
                    <li>A kódban include-olni kell a csomagokat (ehhez <a
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank">Javascript
                        modulokat</a> kell használni, egy másik
                        téma amit érdemes olvasni és megérteni).
                    </li>
                    <li>Ugyanezeket kell tenni minden csomag alfüggőségével amely lehet több tíz vagy több száz.</li>
                    <li>Törölni kell az összes fájlt, ha el akarod távolítani a csomagokat.</li>
                </Paragraph>

                <Paragraph>
                    Továbbá, a csomagkezelők kezelik a duplikált függőségeket (valami ami fontos és megszokott a
                    front-end fejlesztésben.)
                </Paragraph>

                <Paragraph>
                    Az npm a Javascript és Node-alapú csomagkezelők esetében két lehetőség van arra hogy hová tudod
                    telepíteni a függőségeidet. Amint már említettük az előző cikkben, a függőségek telepíthetők
                    globálisan és lokálisan a projektbe. Habár több előnye van a globális telepítésnek, az előnye a
                    lokális telepítésnek sokkal fontosabb (például a hordozhatóság és a verzió zárolás).
                </Paragraph>

                <Paragraph>
                    Például, ha a projekted bizonyos Webpack beállításokra támaszkodik, akkor biztos akarsz benne lenni,
                    hogy, ha egy másik gépre akarod telepíteni a projektedet vagy vissza akarsz térni rá sok idő
                    elteltével, még akkor is működjön a beállításokkal. Ha egy másik Webpack van installálva lehet nem
                    kompatibilis. Hogy elkerüljük ezt a függőségeket lokálisan telepítjük a projekthez.
                </Paragraph>

                <Paragraph>
                    Hogy lásd a helyi függőségeket igazán világosan, annyit kell tenned hogy letöltesz és futtatsz egy
                    létező projektet. Ha működik az összes függőséggel együtt, akkor helyi függőségei vannak a code
                    hordozhatóságnak köszönhetően.
                </Paragraph>

                <Note>
                    <Paragraph>
                        <div className="bold inline mr-1">Megjegyzés:</div>
                        Az npm nem az egyetlen elérhető csomagkezelő. Egy másik népszerű alternatív csomagkezelő a <a
                        href="https://yarnpkg.com/" target="_blank">Yarn</a
                    >.
                        A Yarn különböző algoritmus alapján oldja meg a függőségeket amely gyorsabb felhasználói
                        élményhez vezet. Van egy másik kiemelkedő kliens is mint a <a href="https://pnpm.io/"
                                                                                      target="_blank">pnpm</a>.
                    </Paragraph>
                </Note>
            </Article>

            <Article>

                <h1>Csomag jegyzékek</h1>

                <Paragraph>
                    Ahhoz hogy egy csomagkezelő működjön tudni kell hogy honnan lehet a csomagokat telepíteni és
                    ilyenkor jönnek szóba a csomag jegyzékek másnéven csomag regiszterek. A regiszter egy központi hely
                    ahol a csomag publikálva van és ahonnan telepíthető. Az npm egy csomagkezelő és ugyan ez a neve a
                    gyakran használt Javascript csomag regiszternek is. Az npm regiszter az <a
                    href="https://www.npmjs.com/" target="_blank">npmjs.com</a>-on elérhető.
                </Paragraph>

                <Paragraph>
                    Az npm nem az egyetlen lehetőség. Kezelheted a saját csomag regiszteredet is. Termékek mint például
                    a <a href="https://azure.microsoft.com/en-gb/" target="_blank">Microsoft Azure</a> lehetővé teszi,
                    hogy készíts npm regiszter helyettesítőket amivel felülírhatsz
                    vagy lezárhatsz csomagokat, vagy a <a href="https://github.com/features/packages" target="_blank">GitHub
                    is biztosít csomag regiszter szolgáltatásokat</a> és egyre
                    több lehetőség lesz, ahogyan az idő múlik.
                </Paragraph>

                <Paragraph>
                    Ami fontos, hogy a számodra legmegfelelőbb regisztert válaszd ki. Sok projekt használ npm-et és mi
                    is ennél maradunk a példáink során ebben a modulban.
                </Paragraph>
            </Article>

            <Article>
                <h1>A csomag ökoszisztéma használata</h1>

                <Paragraph>
                    Most fussunk át egy példán, hogy elkezdjünk egy csomagkezelőt és regisztert használni. Telepítünk
                    egy
                    parancssoros segédet hozzá.
                </Paragraph>

                <Paragraph>
                    A <a href="https://parceljs.org/" target="_blank">Parcel</a> egy másik eszköz amit a fejlesztők
                    gyakran használnak a fejlesztés során. A Parcel abban
                    okos hogy meg tudja nézni a kódunk tartalmát, hogy meghívja a függőségeket és automatikusan telepít
                    bármilyen függőséget amire a kódunknak szüksége van. Plusz, automatikusan build-eli is a kódunkat.
                </Paragraph>

                <h2>Állítsuk be az applikációt mint egy npm csomagot</h2>

                <Paragraph>
                    Először is készítsünk egy új mappát amelyben elhelyezzük a kísérleti alkalmazást, valahol ahol
                    könnyen megtalálod. A mappát parcel-experiment-nek fogjuk nevezni, de elnevezheted bármi másnak is:
                </Paragraph>

                <CodeDisplay code={code_1_parcel}/>

                <Paragraph>
                    A következő lépés, hogy inicializáljuk az alkalmazásunkat mint npm csomag, amely készít egy config
                    fájlt a <BgLightgray>package.json</BgLightgray>-t, amely lehetővé teszi, hogy elmentsük a
                    beállításunk részleteit arra az
                    esetre, ha szeretnénk később újra elkészíteni ezt a környezetet vagy ha publikálni szeretnénk a
                    csomagot az npm regiszterbe (de az túlmegy ennek a cikknek a tartalmán).
                </Paragraph>

                <Paragraph>
                    Gépeld be a következő parancsot! Mellette légy biztos abban hogy
                    a <BgLightgray>parcel-experiment</BgLightgray> mappában vagy:
                </Paragraph>

                <CodeDisplay code={code_2_parcel}/>

                <Paragraph>
                    Pár kérdés lesz ezután feltéve neked! Az npm csinálni fog egy
                    alapértelmezett <BgLightgray>package.json</BgLightgray> fájlt a válaszaid alapján:
                </Paragraph>

                <Paragraph>
                    <li><BgLightgray>name</BgLightgray>: Egy név az alkalmazás azonosítására. Csak nyomj
                        egy <BgLightgray>Enter</BgLightgray>-t az alapértelmezetthez, ami jelen
                        esetben a <BgLightgray>parcel-experiment</BgLightgray>.
                    </li>

                    <li>
                        <BgLightgray>version</BgLightgray>: A kezdő verzió szám az alkalmazáshoz. Csak nyomj
                        egy <BgLightgray>Enter</BgLightgray>-t az alapértelmezetthez, ami
                        jelen esetben <BgLightgray>1.0.0</BgLightgray>.
                    </li>

                    <li><BgLightgray>description</BgLightgray>: Egy gyors leírás az app céljáról. Gépelj be valami
                        igazán
                        egyszerűt, mint például "A
                        simple npm package to learn about using npm", aztán nyomj egy <BgLightgray>Enter</BgLightgray>-t.
                    </li>

                    <li>
                        <BgLightgray>entry point</BgLightgray>: Ez lesz a legfelsőbb szintű Javascript fájl az
                        alkalamazásban. Az alapértelmezett
                        <BgLightgray>index.js</BgLightgray> tökéletes lesz jelen esetben,
                        aztán <BgLightgray>Enter</BgLightgray>.
                    </li>

                    <li>
                        <BgLightgray>test command</BgLightgray>, <BgLightgray>git
                        repository</BgLightgray> és <BgLightgray>keywords</BgLightgray>:
                        Nyomj <BgLightgray>Enter</BgLightgray>-t mindegyikre, hogy üresen hagyjuk most.
                    </li>

                    <li>
                        <BgLightgray>author</BgLightgray>: A projekt szerzőjéhez. Írd be a nevedet, majd nyomj
                        egy <BgLightgray>Enter</BgLightgray>-t.
                    </li>

                    <li>
                        <BgLightgray>license</BgLightgray>: A liszensz ami alá a csomag tartozik. Nyomj
                        egy <BgLightgray>Enter</BgLightgray>-t az alapértelmezetthez most.
                    </li>
                </Paragraph>

                <Paragraph>
                    Még egyszer nyomd meg az <BgLightgray>Enter</BgLightgray> billentyűt, hogy elfogadja a
                    beállításokat.
                </Paragraph>

                <Paragraph>
                    Most menj a <BgLightgray>parcel-experiment</BgLightgray> mappába és most látnod kell egy
                    package.json fájlt. Nyisd meg és
                    valami ilyesmit kellene látnod:
                </Paragraph>

                <CodeDisplay code={code_3_parcel_json}/>

                <Paragraph>
                    Szóval akkor ez a config fájl amely definiálja a csomagot. Most jól is vagyunk, folytassuk a
                    következő lépéssel!
                </Paragraph>

                <h2>A Parcel telepítése</h2>

                <Paragraph>
                    Futtasd a következő parancsot a Parcel helyi telepítéséhez!
                </Paragraph>

                <CodeDisplay code={code_4_parcel}/>

                <Paragraph>
                    Miután minden dologgal készen vagyunk most már készen állunk némi modern kliens oldali fejlesztésre,
                    ami annyit tesz, hogy build eszközöket használunk, hogy jobbá tegyük a fejlesztői élményt.
                    Először azonban vessünk egy pillantást a package.json fájlra. Látni fogod, hogy az npm hozzáadott
                    egy új mezőt a dependencies-t azaz a függőségeket:
                </Paragraph>

                <CodeDisplay code={code_5_parcel}/>

                <Paragraph>
                    Ez része az npm varázslatnak. Ha a jövőben áthelyezed a kódbázisodat egy másik helyre, egy másik
                    gépre, újra tudod kreálni ugyanezt a beállítást az <BgLightgray>npm
                    install</BgLightgray> paranccsal, aztán az npm megnézi a
                    függőségeket és telepíti azt neked.
                </Paragraph>

                <Paragraph>
                    Egy hátrány, hogy a Parcel egyedül a <BgLightgray>parcel-experiment</BgLightgray> mappában elérhető,
                    nem fogod tudni futtatni
                    más könyvtárban. De több előnye van mint hátránya.
                </Paragraph>

                <h2>Állítsuk fel a példa alkalmazásunkat!</h2>

                <Paragraph>
                    Parcel vár egy <BgLightgray>index.html</BgLightgray> és
                    egy <BgLightgray>index.js</BgLightgray> fájlt amivel dolgozhat, de máskülönben rajtad múlik,
                    hogyan szervezed a projekted. Más eszközök lehetnek nagyon különbözőek, de legalább a Parcel
                    könnyűvé teszi a kezdő kísérletünket.
                </Paragraph>

                <Paragraph>
                    Most akkor adnunk kell egy <BgLightgray>index.html</BgLightgray> fájlt a munka mappánkba (working
                    directory). Hozd létre az
                    <BgLightgray>index.html</BgLightgray> fájlt a teszt mappában és tedd bele a következő tartalmat:
                </Paragraph>

                <CodeDisplay code={code_6_index_html}/>

                <Paragraph>
                    A következő, hogy létrehozzuk az <BgLightgray>index.js</BgLightgray> fájlt ugyanabban a mappában
                    mint az <BgLightgray>index.html</BgLightgray> fájlt. Most
                    az <BgLightgray>index.js</BgLightgray> fájl üres, csak léteznie kell. Hozd létre most!
                </Paragraph>

                <h2>Most játsszunk egy kicsit a Parcel-el!</h2>

                <Paragraph>
                    Most futtatni fogjuk az újonnan telepített Parcel eszközünket. A terminálodban futtasd a következő
                    parancsot:
                </Paragraph>

                <CodeDisplay code={code_7_parcel_run}/>

                <Paragraph>
                    Valami hasonlót kell látnod a terminálodban:
                </Paragraph>

                <CodeDisplay code={code_8_parcel_run}/>

                <Note>
                    <Paragraph>
                        <div className="bold inline mr-1">Megjegyzés:</div>
                        Ha olyan problémába ütközöl, hogy a terminál kiírja a "command not found" hibát, akkor próbáld
                        meg használni a következő parancsot az <BgLightgray>npx</BgLightgray> paranccsal, mint
                        például <BgLightgray>npx
                        parcel index.html</BgLightgray>.
                    </Paragraph>
                </Note>

                <Paragraph>
                    Most már készen állunk a teljes Javascript csomag ökoszisztéma előnyeire. Kezdésként most van egy
                    helyi webszerverünk ami a <BgLightgray>http://localhost:1234</BgLightgray> címen fut. Nyissuk meg és
                    most még semmit nem
                    látunk, de ami jó benne, hogy mikor változtatást hajtasz végre az applikációban, akkor a Parcel majd
                    újra build-eli és újratölti a szervert automatikusan így azonnal fogod látni a hatását annak amit
                    megváltoztattál.
                </Paragraph>

                <Paragraph>
                    Most rakjunk bele egy kis tartalmat. Mondjuk meg szeretnénk mutatni egy emberileg olvasható relatív
                    dátumot mint például a "2 órája", "4 nappal ezelőtt" vagy valami hasonlót. A <a
                    href="https://date-fns.org/" target="_blank">date-fns</a
                > csomag
                    <BgLightgray>formatDistanceToNow()</BgLightgray> metódus hasznunkra lesz ebben (vannak más csomagok
                    is melyek ugyanezt a dolgot csinálják).
                </Paragraph>

                <Paragraph>
                    Az <BgLightgray>index.js</BgLightgray> fájlba rakd a következő kódot és mentsd el:
                </Paragraph>

                <CodeDisplay code={code_8_index_js}/>

                <Paragraph>
                    Most menj vissza a <BgLightgray>http://localhost:1234</BgLightgray> címre és látni fogod mennyi idő
                    telt el azóta, hogy a szerző 18 éves lett.
                </Paragraph>

                <Paragraph>
                    Ami különösen rendhagyó a fenti kódban az az hogy
                    a <BgLightgray>formatDistanceToNow()</BgLightgray> funkciót használja a
                    <BgLightgray>date-fns</BgLightgray> csomagból, amit még nem telepítettünk. A Parcel észlelte, hogy
                    szükséged van a modulra,
                    rákeresett az <BgLightgray>npmjs.com</BgLightgray> csomag regiszterben és telepítette azt lokálisan
                    automatikusan. Ezt be is
                    tudod bizonyítani, ha belenézel a <BgLightgray>package.json</BgLightgray> fájlba újra és látni
                    fogod, hogy a <BgLightgray>dependencies</BgLightgray> (függőségek) mező megváltozott:
                </Paragraph>

                <CodeDisplay code={code_9_package_json}/>

                <Paragraph>
                    A Parcel hozzáadta a szükséges fájlokat is arra az esetre, ha valaki más használná a projektet és
                    telepítené bármelyik függőséget amit felhasználtunk. Ha vetsz egy pillantást a mappára amelyben a
                    <BgLightgray>parcel</BgLightgray> parancsot futtattad, számos új fájlt fogsz találni. A
                    legérdekesebbek a következők:
                </Paragraph>

                <Paragraph>
                    <li><BgLightgray>node_modules</BgLightgray>: A függőségi fájlok a Parcel-hez és a date-fns-hez.</li>
                    <li><BgLightgray>dist</BgLightgray>: A disztribúciós mappa. Ezek a fájlok automatikusan csomagolva
                        vannak, minify-olt fájlok melyeket a
                        Parcel build-elt nekünk, és a fájlok melyek a <BgLightgray>localhost:1234</BgLightgray> oldalon
                        vannak kiszolgálva. Ezek
                        azok a fájlok melyeket fel kell töltened a webszerverre amikor azt publikálni szeretnéd a
                        web-en.
                    </li>
                </Paragraph>

                <Paragraph>
                    Szóval ha tudjuk a csomag nevét akkor már használhatjuk is a kódunkban és a Parcel megkeresi,
                    letölti és telepíti (jelen esetben másolja) a csomagot a helyi mappába a node_modules-ba.
                </Paragraph>

                <h2>Build-eljük a kódunkat a bemutatáshoz</h2>

                <Paragraph>
                    Azonban a kód még nincsen készen a bemutatásra. A legtöbb build eszközrendszernek van fejlesztői
                    módja és production (bemutató) módja. A lényeges különbség az hogy a sok hasznos funkció amit
                    fejlesztői módban használsz nem szükségesek a végső bemutatáskor, így nem lesz benne a production
                    módban.
                    Például a "hot modul replacement", az "élő újrafrissítés" és a "nem tömörített és a kommentelt
                    kód"-ok. A teljesség igénye nélkül ez néhány megszokott webfejlesztő funkció volt amelyek nagyon
                    hasznosak a fejlesztői módban, de nem nagyon hasznosak a production módban. A production-ban csak
                    növelik a website méretét.
                </Paragraph>

                <Paragraph>
                    Most állítsuk le az előző Parcel parancsot a <BgLightgray>CTRL+C</BgLightgray> billentyű
                    kombinációval.
                </Paragraph>

                <Paragraph>
                    Most pedig előkészítjük a példa oldalunkat egy képzeletbeli deployment-re (telepítésre). A
                    Parcel-nek van egy további parancsa amellyel generálhatjuk a fájlokat a publikáláshoz, bundle-t
                    (becsomagolt fájlokat) készít a build opcióval, amiről már beszéltünk.
                </Paragraph>

                <Paragraph>
                    Futtasd a következő parancsot:
                </Paragraph>

                <CodeDisplay code={code_10_parcel_build}/>

                <Paragraph>
                    Utána ezt kellene látnod:
                </Paragraph>

                <CodeDisplay code={code_11_parcel_build_2}/>

                <Paragraph>
                    A production fájlok a <BgLightgray>dist</BgLightgray> mappában lesznek.
                </Paragraph>

                <h2>Az app fáljméretének csökkentése</h2>

                <Paragraph>
                    Azonban még ha az összes eszköz segít is a fejlesztőnek gyakran vannak hátrányos dolgok. Ebben az
                    esetben a fájl mérete. A Javascript bundle-je my-project.fb76efcf.js elég nagynak tűnik, 195KB ahhoz
                    képest hogy egy sor szöveget írat ki. Bizonyára kiszámoltuk, hogy 195KB Javascript kódot nem ér meg
                    nekünk ennyiért.
                </Paragraph>

                <Paragraph>
                    Amikor fejlesztési eszközöket használunk érdemes megkérdezni magunktól, hogy vajon jól csinálja-e
                    majd a dolgát. Ebben az esetben a csomag közel 200KB, valójában tartalmazza az
                    egész <BgLightgray>date-fns</BgLightgray>
                    könyvtárat, nem csak azt a funkciót amit használunk.
                </Paragraph>

                <Paragraph>
                    Ha nem használunk fejlesztői eszközöket és a <BgLightgray>
                    &lt;script src=""&gt;
                </BgLightgray> elemet használjuk a <BgLightgray>date-fns</BgLightgray>
                    betöltésére, akkor nagyjából ugyanaz a dolog történne, az egész könyvtárat le kellene tölteni amikor
                    a példa oldal betöltődik a böngészőben.
                </Paragraph>

                <Paragraph>
                    Azonban itt van a fejlesztői eszközök esélye arra, hogy bizonyítsanak. Amíg az eszköz a gépünkön
                    van, megkérhetjük a szoftvert, hogy vizsgálja meg a kódunkat és csak azokat a funkciókat tartalmazza
                    amelyeket a production-ban használ. Ezt a folyamatot "Tree Shaking"-nek (fa rázásnak) hívjuk.
                </Paragraph>

                <Paragraph>
                    És van is értelme ha le akarjuk csökkenteni a fájl méretét és így az app olyan gyorsan tölt be
                    amennyire csak lehetséges. Különböző eszközök különböző módokon hajtják végre a tree shaking-et.
                </Paragraph>

                <Paragraph>
                    Bár a lista hónapról hónapra növekszik, van három fő ajánlásunk olyan eszközökre amelyek csomagot
                    készítenek a forráskódodból: A Webpack, a <a href="https://rollupjs.org/introduction/"
                                                                 target="_blank">RollUp</a> és a Parcel. Több is
                    elérhető, de ezek a népszerűbbek:
                </Paragraph>

                <Paragraph>
                    <li>A RollUp eszköz tree shaking-et, és code splitting-et is kínál, mint főbb funkciókat.</li>
                    <li>A Webpack-nak szüksége van némi konfigurációra, bár néhányan lehet alulbecsülik néhány fejlesztő
                        Webpack beállításait.
                    </li>
                    <li>A Parcel esetében, főleg a 2-es verzióban egy speciális flag kell a tree shaking-hez a
                        build-elés
                        során, ami az <BgLightgray>--experimental-scope-hoisting</BgLightgray>
                    </li>
                </Paragraph>

                <Paragraph>
                    Akkor most maradjunk a Parcel-nél, már csak azért is mert telepítettük. Próbáld meg futtatni a
                    következőt:
                </Paragraph>

                <CodeDisplay code={code_12_parcel_tree_shaking}/>

                <Paragraph>
                    És láthatod is a hatalmas különbséget:
                </Paragraph>

                <CodeDisplay code={code_13_parcel_tree_shaking}/>

                <Paragraph>
                    Most a bundle (csomag) megközelítőleg 10K. Sokkal jobb.
                </Paragraph>

                <Paragraph>
                    Ha fel szeretnénk tölteni a projektet egy szerverre, akkor elég lenne feltölteni a dist mappában
                    lévő fájlokat. A Parcel automatikusan kezelte nekünk az összes fájlnév változást. Ajánlott belenézni
                    a forráskódba a dist/index.html-ben, csak hogy megnézni a Parcel milyen automatikus változtatásokat
                    hajtott végre.
                </Paragraph>

                <Note>
                    <Paragraph>
                        <div className="bold inline mr-1">Megjegyzés:</div>
                        Amikor ezt a szöveget írták a Parcel 2 még nem volt kiadva. Azonban mikor azt kiadják ezek a
                        parancsok még mindig működni fognak, mert a Parcel szerzői egy kicsit más nevet adnak az új
                        verziónak. Ha a Parcel 1.x-et szeretnéd telepíteni akkor
                        a <BgLightgray>parcel-bundler</BgLightgray> parancsot használd,
                        ha a 2.x-et akarod akkor a <BgLightgray>parcel</BgLightgray> parancsot.
                    </Paragraph>
                </Note>

                <Paragraph>
                    Nagyon sok elérhető eszköz van és a Javascript csomag ökoszisztéma még eddig nem látott mértékben
                    növekszik, amelynek meg vannak az előnyei és a hátrányai is. Javulás mindig is van és hogy a
                    választék növekedése most hogy jobb vagy rosszabb nekünk, állandóan nő. Szembesülve a nagy
                    eszközválasztékkal, valószínűleg a legfontosabb lecke, hogy megtanuljuk a választott eszköz mire is
                    képes.
                </Paragraph>
            </Article>

            <Article>
                <h1>Egy elnagyolt útmutató csomagkezelő kliensekhez</h1>

                <Paragraph>
                    Ebben a tutorial-ban telepítettük a Parcel csomagot npm-et használva és mint említettük korábban van
                    néhány alternatívája is. Érdemes legalább azt tudni, hogy léteznek és hogy van elképzelésünk az
                    eszközök közös parancsairól. Néhányat már láttunk működés közben, de most nézzünk meg még pár
                    másikat.
                </Paragraph>

                <Paragraph>
                    Ez a lista nőni fog idővel, de a cikk írásakor a következő fő csomagkezelők elérhetőek:
                    <li>A npm az <a href="https://www.npmjs.com/" target="_blank">npmjs.org</a>-on</li>
                    <li>A pnpm a <a href="https://pnpm.js.org/" target="_blank">pnpm.js.org</a>-on</li>
                    <li>A Yarn a <a href="https://yarnpkg.com/" target="_blank">yarnpkg.com</a>-on</li>
                </Paragraph>

                <Paragraph>
                    Az npm és a pnpm hasonlóak a parancssor nézőpontból. Lényegében a pnpm célja hogy teljesen
                    egyenértékű legyen azzal amit az npm kínál. Abban különbözik hogy különböző metódust használ a
                    letöltéshez és a csomagok tárolásához a számítógépen, azzal a céllal, hogy csökkentse a teljes
                    lemezterület használatot.
                </Paragraph>

                <Paragraph>
                    Ahol a példáinkban az npm-et használjuk, pnpm-el is fog működni a parancs.
                </Paragraph>

                <Paragraph>
                    A Yarn-ot gyakran gyorsabbnak tekintik a telepítés szempontjából mint az npm-et, bár a teljesítmény
                    változhat. Ez fontos a fejlesztőknek mert lényeges idő mehet el a függőségek telepítésével és a
                    számítógépre másolással.
                </Paragraph>

                <Note>
                    <Paragraph>
                        <div className="bold inline mr-1">Megjegyzés:</div>
                        Az npm csomagkezelőnek nem szükséges, hogy az npm regiszterből telepítse a csomagokat, annak
                        ellenére, hogy ugyanaz a nevük. A pnpm és a Yarn ugyanazt
                        a <BgLightgray>package.json</BgLightgray> formátumú fájlt
                        használja mint az npm és bármelyik csomagot telepítheti bármelyik regiszterből.
                    </Paragraph>
                </Note>

                <Paragraph>
                    Most nézzünk meg pár gyakori tevékenységet amit a csomagkezelőkkel tehetsz.
                </Paragraph>

                <h2>Inicializálni (elindítani) egy új projektet</h2>

                <CodeDisplay code={code_14_init}/>

                <Paragraph>
                    Amint fentebb láthattuk ez a parancs végigvezet minket egy sor kérdésen, amely körülírja a
                    projektünket (név, liszensz, leírás, és így tovább), aztán készít
                    egy <BgLightgray>package.json</BgLightgray> fájlt, amely majd
                    meta információkat tartalmaz a projektedhez és a függőségeihez.
                </Paragraph>

                <h2>Függőségek telepítése</h2>

                <CodeDisplay code={code_15_install_dependencies}/>

                <Paragraph>
                    Láthattuk azt is hogyan <BgLightgray>telepíthetünk</BgLightgray> csomagokat a fenti módon. Ez
                    közvetlenül hozzáadja a <BgLightgray>date-fns</BgLightgray>
                    csomagot a munkamappába (working directory-be) egy almappába
                    a <BgLightgray>node_modules</BgLightgray>-ba a <BgLightgray>date-fns</BgLightgray> csomag
                    függőségeivel
                    együtt.
                </Paragraph>

                <Paragraph>
                    Alapértelmezettként ez a parancs a legújabb date-fns csomagot fogja telepíteni, de beállíthatunk
                    másat is. Kérhetjük, hogy a date-fns@1-et telpítse ami a legújabb 1.x verziót fogja, amely az
                    1.30.1. De úgy is dönthetünk, hogy date-fns@^2.3.0 amely azt jelenti, hogy a legújabb verzió a 2.3.0
                    után vagy beleértve még a 2.3.0-at, amely a cikk írásakor a 2.8.1-es verzió.
                </Paragraph>

                <h3>Függőségek update-elése (frissítése)</h3>

                <CodeDisplay code={code_16_update_dependencies}/>

                <Paragraph>
                    Ez a parancs a jelenleg telepített függőségekhez fog frissítéseket keresni és ha van telepíti is
                    azokat. A megadott verzió skálán (range)-en belül, amely meg van adva
                    a <BgLightgray>package.json</BgLightgray>-ban
                </Paragraph>

                <Paragraph>
                    A range meg van határozva a <BgLightgray>package.json</BgLightgray> fájl-ban, mint
                    a <BgLightgray>date-fns@^2.0.1.</BgLightgray> Ebben az esetben a <BgLightgray>^</BgLightgray>
                    karakter azt jelzi, hogy minden kiadott alverzió és patch, beleértve a 2.0.1-től felfelé
                    egészen
                    3.0.0-ig, amelyet már nem kell beleérteni.
                </Paragraph>

                <Paragraph>
                    Ez egy <a href="https://semver.org/" target="_blank">semver</a> rendszer alapján van meghatározva,
                    amely egy kicsit bonyolultnak tűnik a
                    dokumentációból nézve, de könnyen leegyszerűsíthető ha csak az összefoglaló információt nézzük és,
                    hogy a verzió a következőképpen van
                    reprezentálva: <BgLightgray>FŐVERZIÓ.ALVERZIÓ.PATCH</BgLightgray>, szóval a 2.0.1
                    jelentése, hogy a 2. főverzió, 0. alverzió, és az 1. patch-el. Egy nagyszerű módja, hogy kipróbáljuk
                    a semver
                    értékeket, a <a href="https://semver.npmjs.com/" target="_blank">semver kalkulátor</a>.
                </Paragraph>

                <Paragraph>
                    Fontos, hogy az <BgLightgray>npm update</BgLightgray> nem fogja upgrade-elni a függőségeket a
                    range-en kívüli verzióra amely a
                    <BgLightgray>package.json</BgLightgray> fájlban található. Upgrade-eléshez szükséges lesz telepíteni
                    azt a főverziót.
                </Paragraph>

                <h2>Sebezhetőségekre való vizsgálat</h2>

                <CodeDisplay code={code_17_vulnerabilities}/>

                <Paragraph>
                    Ez a parancs ellenőrizni fogja a függőségi fát a projektedben és a használt függőség verzióját
                    összeveti egy sebezhetőség adatbázissal és értesít téged, ha potenciálisan sebezhető csomag van a
                    projektedben.
                </Paragraph>

                <Paragraph>
                    Egy jó kezdőpont a sebezhetőségekről tanulni a <a href="https://snyk.io/" target="_blank">Snyk
                    projekt</a>, amely lefedi mind a Javascript és más
                    programozási nyelv csomagjait is.
                </Paragraph>

                <h2>Függőségre való vizsgálat</h2>

                <CodeDisplay code={code_18_checking}/>

                <Paragraph>
                    Ez a parancs megmutatja melyik verziója van telepítve a függőségnek és hogyan került bele a
                    projektedbe. Lehetséges hogy egy másik felső szintű csomag is be van behívva
                    a <BgLightgray>date-fns</BgLightgray>-be. Az is
                    lehetséges és nem ideális hogy több verzió is telepítve van a projektedben ugyanabból a csomagból.
                    Ezt átnézhetjük a <a href="https://lodash.com/" target="_blank">lodash</a> csomaggal ami nagyon
                    hasznos tud lenni.
                </Paragraph>

                <Paragraph>
                    Bár a csomagkezelő alapból vizsgálja, hogy ne legyen csomag duplikáció, lehet, hogy meg akarod nézni
                    pontosan melyik verzió is van telepítve.
                </Paragraph>

                <h2>További parancsok</h2>

                <Paragraph>
                    Megtudhatsz többet a különböző parancsokról még az <a href="https://docs.npmjs.com/cli/v10"
                                                                          target="_blank">npm</a> és a <a
                    href="https://classic.yarnpkg.com/en/docs/cli/" target="_blank">yarn</a
                > online felületén. Ismétlésként
                    elmondanám, hogy a <a href="https://pnpm.io/cli/add" target="_blank">pnpm</a> parancsok megegyeznek
                    az npm parancsokkal kiegészítve hasznos
                    kiegészítőkkel.
                </Paragraph>
            </Article>

            <Article>
                <h1>Készítsd el a saját parancsaidat</h1>
                <Paragraph>
                    A csomagkezelők támogatják, hogy saját parancsokat hozz létre és futtasd őket a parancssorban.
                    Például elkészíthetjük a következő parancsot:
                </Paragraph>

                <CodeDisplay code={code_19_run_own}/>

                <Paragraph>
                    Ez le fog futtatni egy egyedi szkriptet, hogy elindítsa a projektünket "fejlesztői mód"-ban.
                    Valójában rendszeresen használjuk ezt az összes projektben amikor helyi fejlesztési módban vagyunk
                    és
                    ez egy kicsit különbözően fut mint ha production módban lenne.
                </Paragraph>

                <Paragraph>
                    Ha ezt kipróbáltad a teszt Parcel projektben akkor valószínűleg egy "dev script is missing" hibát
                    kell, hogy dobjon. Ez azért van mert az npm, Yarn és hasonlók keresik a dev property-t
                    a <BgLightgray>scripts</BgLightgray> property-ben a <BgLightgray>package.json</BgLightgray> fájlban.
                </Paragraph>

                <Paragraph>
                    A Parcel futtatni tud egy fejlesztői szervert a következő parancssal: <BgLightgray>parcel serve
                    filename.html</BgLightgray>,
                    amelyet gyakran használhatunk a fejlesztés során.
                </Paragraph>

                <Paragraph>
                    Most akkor készítsünk egy egyedi rövidített parancsot a "dev"-et
                    a <BgLightgray>package.json</BgLightgray>-ban.
                </Paragraph>

                <Paragraph>
                    Ha követted a tananyagot korábbról, akkor lennie kell
                    egy <BgLightgray>package.json</BgLightgray> fájlnak a parcel-experiment
                    könyvtárban. Nyisd meg és a <BgLightgray>scripts</BgLightgray> résznél látnod kellene a következőt:
                </Paragraph>

                <CodeDisplay code={code_20_scripts}/>

                <Paragraph>
                    Változtasd meg erre és mentsd el a fájlt:
                </Paragraph>

                <CodeDisplay code={code_21_scripts}/>

                <Paragraph>
                    Ezennel adtunk egy egyedi <BgLightgray>dev</BgLightgray> parancsot npm szkript-ként.
                </Paragraph>

                <Paragraph>
                    Most próbáljuk meg futtatni a terminálban, miközben
                    a <BgLightgray>parcel-experiment</BgLightgray> könyvtárban vagy:
                </Paragraph>

                <CodeDisplay code={code_22_run_dev}/>

                <Paragraph>
                    Ez el fogja indítani a Parcel-t és a helyi fejlesztői szerveren futtatja az index.html-t, amelyet
                    már láttunk korábban:
                </Paragraph>

                <CodeDisplay code={code_23_index_html}/>

                <Paragraph>
                    Továbbá, az npm és yarn parancsok okosak abban, hogy parancssoros eszközökre fognak keresni, amelyek
                    lokálisan telepítve vannak a projektben, még mielőtt megkeresnéd őket hagyományos módszerekkel. <a
                    href="https://docs.npmjs.com/cli/v10/commands/npm-run-script" target="_blank">Tanulhatsz még
                    a <BgLightgray>run</BgLightgray> parancs technikai bonyodalmairól</a>, bár a legtöbb esetben a
                    saját szkriptek is kiválóan működnek.
                </Paragraph>

                <Paragraph>
                    Szinte bármilyen dolgot adhatsz a scripts property-hez, amelyek segítik a munkádat. Mi bizonyára
                    fogunk és <a
                    href="https://github.com/facebook/create-react-app/blob/c5b96c2853671baa3f1f297ec3b36d7358898304/package.json#L6"
                    target="_blank">mások
                    is</a
                >.
                </Paragraph>
            </Article>

            <Article>
                <h1>Összefoglalás</h1>

                <Paragraph>
                    Ezennel a csomagkezelők túra végéhez is értünk. A következő téma, hogy felépítünk egy minta
                    eszközláncot (toolchain-et), amely segít majd átültetni a gyakorlatba mindazt, amit tanultunk eddig.
                </Paragraph>
            </Article>

        </div>
    );
}
