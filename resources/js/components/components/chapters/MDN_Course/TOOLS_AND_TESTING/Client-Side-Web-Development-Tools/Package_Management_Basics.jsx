import React from 'react';
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";
import Note from "../../REACT/note/Note.jsx";

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
                    <div className="bold inline">Előfeltételek:</div>
                    Alapismeretek a <a target="_blank"
                                       href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML</a>, <a
                    target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS</a> és a <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">Javascript</a> nyelvekkel.
                </Paragraph>
                <Paragraph>
                    <div className="bold inline">Cél:</div>
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
                        <div className="bold inline">Megjegyzés:</div>
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
                    Most fussunk át egy példán, hogy elkezdjünk egy csomagkezelőt és regisztert használni. Telepítsünk
                    egy
                    parancssoros segédet hozzá.
                </Paragraph>

                <Paragraph>
                    A <a href="https://parceljs.org/" target="_blank">Parcel</a> egy másik eszköz amit a fejlesztők gyakran használnak a fejlesztés során. A Parcel abban
                    okos hogy meg tudja nézni a kódunk tartalmát, hogy meghívja a függőségeket és automatikusan telepít
                    bármilyen függőséget amire a kódunknak szüksége van. Plusz, automatikusan build-eli is a kódunkat.
                </Paragraph>
            </Article>
        </div>
    );
}
