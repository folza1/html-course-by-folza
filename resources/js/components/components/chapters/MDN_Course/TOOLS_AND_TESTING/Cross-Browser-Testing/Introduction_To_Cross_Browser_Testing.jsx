import React from "react";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";
import CodeDisplay from "../../components/CodeDisplay.jsx";

// import {} from "./cross_browser_testing_text.jsx";

export default function Introduction_To_Cross_Browser_Testing() {
    return (
        <div className="container">
            <h1>Bevezetés a böngészők közötti tesztelésbe</h1>
            <Paragraph>
                Ez a cikk betekintést nyújt a böngészők közötti tesztelésbe: mi
                is a cross-browser (böngészők közötti) tesztelés, néhány
                általános probléma és néhány megoldás a hibakeresésre és
                elhárításra.
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
                    <div className="bold inline mr-1">A cikk célja:</div>
                    Megérteni a magasszintű fogalmakat a cross-browser
                    (böngészők közötti) teszteléssel kapcsolatban.
                </Paragraph>
            </Article>
            <Article>
                <h1>Mi is az a cross-browser (böngészők közötti) tesztelés?</h1>

                <Paragraph>
                    A cross-browser (böngészők közötti) tesztelés az a
                    gyakorlat, hogy a weboldal működjön számos böngészőn és
                    eszközön és annak tesztelése. A webfejlesztőnek fontolóra
                    kell vennie ezeket ezzel kapcsolatban:
                    <ul className="ml-2">
                        <li>
                            Kölönböző böngészők vannak, melyekbe beletartoznak a
                            régebbiek is, amelyek nem támogatják az összes
                            legújabb JS és CSS funkciókat.
                        </li>
                        <li>
                            Különböző eszközök, az asztali számítógépek és
                            laptop-ok, okostelefonok, okostelevíziók, amelyeknek
                            változnak a hardware képességeik.
                        </li>
                        <li>
                            Vannak fogyatékosságokkal élő személyek, akik olyan
                            segítő technológiákat használnak mint a képernyő
                            olvasók, vagy akik csak billentyűzetet használnak.
                        </li>
                    </ul>
                </Paragraph>
                <Paragraph>
                    Emlékezz rá, hogy te nem a felhasználód vagy mert például,
                    ha az oldalad működik a te MacBook Pro-don vagy a
                    csúcsszuper Galaxy Nexus-odon, az még nem jelenti azt, hogy
                    az működni fog minden felhasználód eszközén is.
                </Paragraph>
                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        <a
                            href="https://hacks.mozilla.org/2016/07/make-the-web-work-for-everyone/"
                            target="_blank"
                        >
                            A Make the web work for everyone (A web legyen
                            működőképes mindenki számára)
                        </a>{" "}
                        vizsgálja a különböző böngészőket, a piaci részesedéseit
                        és a hozzá tartozó cross-browser kompatibilitási
                        problémákat.
                    </Paragraph>
                </Note>

                <Paragraph>
                    A weboldalaknak elérhetőnek kell lenniük különböző
                    böngészőkön és eszközökön és olyan embereknek is akik
                    fogyatékosságokkal élnek (például képernyő olvasó barátnak
                    kell lennie). Az oldalnak nem kell, hogy pontosan ugyanazt a
                    felhasználói élményt nyújtsa minden böngészőn és eszközön,
                    amíg a fő funkcionalitás hozzáférhető valamilyen módon.
                    Például egy modern böngésző megjelenít valami animált, 3
                    dimenziós fénylő dolgot, míg a régebbi böngészők lehet csak
                    egy egyszerű grafikát jelenítenek meg ugyanazzal az
                    információval.
                </Paragraph>

                <Paragraph>
                    Az is szinte lehetetlen, hogy egy weboldal működik MINDEN
                    böngészőn és eszközön, így a webfejlesztőnek meg kell
                    egyeznie az oldal tulajdonosával milyen böngészőkön és
                    eszközökön fog a kód működni.
                </Paragraph>
            </Article>
            <Article>
                <h1>A cross-browser problémák miért merülnek fel?</h1>
                <Paragraph>
                    Sok különbőző ok lehet miért merülnek fel cross-browser
                    problémák és jegyezd meg itt most mi olyan problémákról
                    írunk, mikor a dolgok különbözően viselkednek különböző
                    böngészőkön/eszközökön/böngésző beállítások esetén. Mielőtt
                    cross-browser problémába botlanál, kellene, hogy legyen már
                    tapasztalatod hiba (bug) kijavításában ( nézd meg a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML"
                        target="_blank"
                    >
                        HTML Debugging
                    </a>
                    ,{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS"
                        target="_blank"
                    >
                        CSS Debugging
                    </a>{" "}
                    és a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong"
                        target="_blank"
                    >
                        Mi romlott el? JavaScript hibaelhárítás
                    </a>{" "}
                    oldalakat a különbőző témákban, hogy frissítsd a memóriádat
                    ha szükséges).
                </Paragraph>

                <Paragraph>
                    A cross-browser problémák általában ezek miatt merülnek fel:
                </Paragraph>

                <Paragraph>
                    <ul className="ml-2">
                        <li>
                            Néha a böngészőkben van hiba (bug) vagy másképpen
                            hajtanak végre funkciókat. A helyzet sokkal kevésbé
                            rossz mint régebben. Régen az IE4 (Internet Explorer
                            böngésző) és a Netscape 4 böngésző versenyezett
                            egymással melyik legyen a domináns böngésző az
                            1990-es években és a böngésző cégek szabadon,
                            másképpen oldottak meg dolgokat egymástól
                            különbözően, hogy előnyt szerezzenek vele és ez a
                            fejlesztők számára mondhatni maga volt a pokol. Ma
                            sokkal jobb a helyzet mert a böngészők standard
                            (szabvány) alapján vannak gyártva, de különbségek és
                            bug-ok (hibák) még néha mindig belopódznak.
                        </li>
                        <li>
                            Néhány böngésző különböző szintű technológiai
                            támogatással rendelkezik mint mások. Ez sajnos
                            elkerülhetetlen, hogy, ha a legmodernebb funkciókat
                            használod, amit a böngészők még csak most kezdenek
                            kivitelezni vagy olyan nagyon régi böngészőket kell
                            támogatni amelyeket nem fejlesztenek tovább és már
                            régen azelőtt befagyasztották azok fejlesztését, már
                            régen az új funkciók feltalálása előtt. Egy példa
                            erre, ha élvonalbeli JavaScript funkciókat akarsz az
                            oldaladon, azok lehet nem fognak működni régebbi
                            böngészőkön. Ha régebbi böngészőket akarsz
                            támogatni, akkor lehet, hogy nem azokat az
                            élvonalbeli funkciókat kellene használni vagy át
                            kell konvertálnod a kódot olyan régebbi fazonú
                            szintaxisra valamilyen cross-compiler-el (böngészők
                            közötti fordítóval) ahol szükséges.
                        </li>
                        <li>
                            Néhány eszköznek lehet vannak korlátai, melyek
                            lassulást okozhatnak a weboldalon vagy rosszul
                            jelenítik meg. Például, ha az oldal asztali
                            számítógépre volt tervezve, hogy ott nézzen ki jól,
                            valószínűleg nem lesz olyan jól olvasható a mobil
                            eszközökön. Ha az oldalon vannak nagy animációk,
                            lehet minden rendben lesz a legújabb táblagépeken,
                            de lassú vagy szaggatott lehet az alsóbb kategóriás
                            eszközökön.
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>... és van több ok is ezeken kívül.</Paragraph>

                <Paragraph>
                    Későbbi cikkekben fel fogjuk fedezni a közönséges
                    cross-browser problémákat és megoldásokat nézünk hozzájuk.
                </Paragraph>
            </Article>
            <Article>
                <h1>Munkafolyamatok a cross-browser teszteléshez</h1>
                <Paragraph>
                    Az egész cross-browser tesztelés téma időpazarlónak és
                    ijesztőnek tűnhet, de nem kell annak lennie, csak gondosan
                    megtervezettnek kell lennie és legyél biztos benne, hogy
                    eleget tesztelsz a megfelelő részeknél, hogy biztos legyél
                    benne nem futsz bele váratlan problémákba. Ha egy nagy
                    projekten dolgozol, rendszeresen kellesz majd tesztelned,
                    hogy megbizonyosodj az új funkciók és összetevők működnek a
                    célközönséged számára és hogy a kódhoz hozzáadott új részek
                    nem gátolnak régebbi funkciókat, amelyek előzőleg működtek.
                </Paragraph>

                <Paragraph>
                    Ha az összes tesztelést a projekt végére hagyod, akkor
                    bármelyik bug (hiba), amelyet nem teszteltél sokkal nehezebb
                    és időigényesebb lesz, mintha menet közben javítanád ki
                    őket.
                </Paragraph>

                <Paragraph>
                    A tesztelés és a bux fix-ek (hibajavítások) elintézése egy
                    projektben durván erre a négy fázisra bontható le (ez csak
                    egy nagyon durva lebontás, különböző emberek elég
                    különbözően intézhetik ezeket):
                </Paragraph>

                <Paragraph>
                    <span className="bold">
                        KEZDETI TERVEZÉS {">"} FEJLESZTÉS {">"} TESZTELÉS/HIBÁK
                        MEGTALÁLÁSA {">"} KIJAVÍTÁS/ISMÉTLÉS
                    </span>
                </Paragraph>

                <Paragraph>
                    A 2-4-ig terjedő lépések megismételhetők annyiszor ahányszor
                    szükséges, hogy minden rendben végrehajtódjon. Külön meg
                    fogjuk nézni a különböző részeket a tesztelés folyamatán
                    belül nagyobb részletességgel a következő cikkekben, de most
                    csak összegezzük mi fog történni az egyes lépésekben.
                </Paragraph>

                <h2>Kezdeti tervezés</h2>

                <Paragraph>
                    A kezdeti tervezési szakaszban valószínűleg több találkozód
                    lesz az oldal birtokosával / a klienssel (aki lehet a
                    főnököd vagy valaki egy külsős cégtől, akinek a weboldalát
                    fogod készíteni), aki pontosan meghatározza, milyennek kell
                    lennie a weboldalnak, milyen tartalom legyen rajta és milyen
                    funkcionalitású legyen az oldal, hogyan nézzen ki, stb.
                    Ennél a pontnál azt is meg akarod majd tudni, hogy mennyi
                    idő kell majd a fejlesztéshez, mi a határidő és mennyit
                    fognak fizetni a munkádért. Nem fogjuk nagyon részletezni
                    ezt, de a cross-browser problémáknak komoly hatása van az
                    ilyen tervekre nézve.
                </Paragraph>

                <Paragraph>
                    Miután megtudtad milyen összetevőkkel kell ellátnod az
                    oldalt és hogy milyen technológiákkal fogod kivitelezni
                    azokat, utána el kell kezdened felfedezni a célközönséget
                    (milyen böngészőkre, eszközökre stb.), milyen célközönségre
                    kell elkészítened az oldalt. A kliensnek lehet már van róla
                    információja erről egy korábbi kutatás eredményéből, amelyet
                    ők végeztek. Például birtokolnak más oldalakat és onnan van
                    az információ, vagy a weboldal korábbi verzióiból eredő
                    információk alapján, amin most te fogsz dolgozni. Ha
                    nincsenek jó ötlet lehet más források után kutatni, mint a
                    versenytársak vagy országok statisztikái alapján attól
                    függően, milyen célt szolgál az oldal. Egy kicsit
                    használhatod a megérzéseidet is.
                </Paragraph>

                <Paragraph>
                    Például lehet egy e-kereskedelmi oldalt építesz amely
                    Észak-Amerika-i látogatókat szolgál ki. Az oldalnak működnie
                    kellene a legutóbbi néhány legnépszerűbb asztali és mobil
                    böngészőkön. Ebben benne kellene lennie a Chrome-nak (az
                    Edge-nek és az Opera-nak, mivel ezek ugyanazon a Chrome
                    motor alapján működnek), a Firefox-nak és a Safari-nak. És
                    meg kell, hogy felejen a WCAG AA szabványnak.
                </Paragraph>

                <Paragraph>
                    Most már tudod a tesztelési célterületet és most vissza
                    kell, hogy menj és utánanézz a szükséges összetevők
                    listájának és hogy milyen technológiákat fogsz használni.
                    Például, ha az e-kereskedelmi oldal tulajdonosa akar egy
                    WebGL támogatott 3 dimenziós túrát az oldalon minden egyes
                    termékhez amelyet el lehet érni, akkor el kell, hogy
                    fogadják ez nem fog működni minden elavult böngésző verzión.
                </Paragraph>

                <Paragraph>
                    Össze kell állítanod egy listát a lehetséges problémás
                    területekről.
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    Találhatsz információt a böngésző támogatásról az MDN-en is
                    különböző összetevőkről. További részletes tanácsokat
                    kaphatsz a{" "}
                    <a href="https://caniuse.com/" target="_blank">
                        caniuse.com
                    </a>
                    -on is.
                </Note>

                <Paragraph>
                    Miután megegyeztetek ezekben a részletekben, kezdődhet az
                    oldal fejlesztése.
                </Paragraph>

                <h2>Az oldal fejlesztése</h2>

                <Paragraph>
                    Most áttérünk az oldal fejlesztésére. Szét kellene
                    választanod a fejlesztést különböző modulokra, részekre.
                    Például szétválaszhatod az oldalt különböző részekre, mint
                    kezdőoldal, termékoldal, bevásárlókosár, fizetési
                    munkafolyamat, stb. Aztán tovább oszthatod ezeket is.
                    Például készíthetsz fejlécet (header), láblécet (footer),
                    termék részletező oldalt, megvalósíthatsz állandó
                    bevásárlókosár minialkalmazást, stb.
                </Paragraph>

                <Paragraph>
                    Több általános stratégia van a cross-browser fejlesztéshez,
                    például:
                    <ul className="ml-2">
                        <li>
                            Úgy kell csinálni a munkát, hogy közel az összes
                            lehetséges célböngészőn működjön. Ez magában
                            foglalhatja a különböző kód útvonalakat, amelyek más
                            funkcionalitással rendelkeznek, más böngészőkön vagy
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Glossary/Polyfill"
                                target="_blank"
                            >
                                Polyfill
                            </a>{" "}
                            használata, amely utánoz bármilyen funkciót a
                            JavaScript vagy más technológiák használatával vagy
                            egy olyan könyvtár használata, amely megengedi
                            neked, hogy akár 1 bit kódot írj és az különböző
                            dolgokat tesz a háttérben attól függően, hogy a
                            böngésző mit támogat.
                        </li>
                        <li>
                            Fogadd el azt, hogy a dolgok nem ugyanúgy működnek
                            az összes böngészőn és különböző elfogadható
                            megoldást kell kínálnod az olyan böngészőkre,
                            amelyek nem teljesen támogatottak. Néha ez
                            elkerülhetetlen az eszköz miatt, például a
                            szélesvásznú mozi nem fogja ugyanazt vizuális
                            élményt nyújtani, mint egy 4 hüvelykes mobil
                            képernyő, függetlenül attól hogyan programozod az
                            oldalt.
                        </li>
                        <li>
                            Fogadd el azt is, hogy az oldalad nem fog működni
                            régebbi böngészőkön és így tovább. Ez rendben is
                            van, ha a kliensek és a felhasználók értesítve
                            vannak.
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    Normális módon a fejlesztés magába fogja foglalni a fenti
                    három megközelítések egyikét. A legfontosabb dolog az, hogy
                    teszteld minden kis részét mielőtt továbbmennél a kód
                    "commit"-olásával. Ne hagyd az összes tesztelést a végére!
                </Paragraph>

                <h2>Tesztelés/hibák felfedezése</h2>

                <Paragraph>
                    Minden egyes végrehajtási fázis után, le kell tesztelned,
                    hogy működik-e az új dolog, azaz funkcionál-e? Hogy elkezdd,
                    biztosnak kell lenned benne, hogy nincsenek általános
                    problémák a kódoddal, amelyek megakadályozzák a funkcióid
                    működését:
                    <ol className="ml-2">
                        <li>
                            Teszteld le pár stabil böngészőn a rendszereden,
                            olyan böngészőkön, mint a Firefox, Safari, Chrome
                            vagy Edge.
                        </li>
                        <li>
                            Csinálj egy kis lo-fi hozzáférhetőség tesztelést,
                            mint például próbáld meg használni az oldalad csak
                            billentyűzettel vagy használd az oldalad képernyő
                            olvasóval, hogy meglásd lehet-e rajta navigálni.
                        </li>
                        <li>
                            Teszteld olyan mobil platform-on, mint az Android
                            vagy az iOS
                        </li>
                    </ol>
                </Paragraph>

                <Paragraph>
                    Ezen a ponton javítod a problémákat, ami az új kódoddal
                    felmerül.
                </Paragraph>

                <Paragraph>
                    Következésképpen meg kell próbálnod kiterjeszteni a teszt
                    böngészők listáját, hogy teljesítse a célközönséged
                    böngészőlistáját és el kell kezdened koncentrálni
                    kigyomlálni a cross-browser problémákat (nézz utána további
                    információért a következő cikkben a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies"
                        target="_blank"
                    >
                        cél böngészők meghatározásához
                    </a>
                    ). Például:
                    <ul className="ml-2">
                        <li>
                            Próbáld meg letesztelni a legújabb változásokat az
                            összes modern asztali számítógép böngészőkön, amit
                            csak tudsz. Beleértve a Firefox, Chrome, Opera, Edge
                            és Safari böngészőket az asztali számtógépeken (Mac,
                            Windows és Linux rendszereken ideális esetben)
                        </li>
                        <li>
                            Teszteld le közönséges telefon és táblagép
                            böngészőkön (mint az iOS Safari az iPhone/iPad-eken,
                            Chrome és Firefox az iPhone/iPad/Android eszközökön)
                        </li>
                        <li>
                            És teszteld bármelyik olyan böngészőn amely benne
                            van a cél listán.
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    A legtöbb lo-fi lehetőséghez magadnak tesztelj le mindent,
                    amit csak tudsz (belevehetsz csapattagokat, hogy
                    kisegítsenek, ha csapatban dolgoztok). A teszteket igazi
                    fizikai eszközökön kellene megpróbálni, ahol csak
                    lehetséges.
                </Paragraph>

                <Paragraph>
                    Ha nincsen meg a lehetőséged, hogy az összes különböző
                    böngészőn, operációs rendszeren és eszközön (fizikai
                    hardware-en) tesztelj, még akkor is van lehetőséged emulátor
                    használatára (amellyel az asztali számítógépen tudod
                    tesztelni, hogyan működik a kódód egy eszközön) és virtuális
                    gépek használatára (olyan szoftverek melyek megengedik, hogy
                    emulálj számos operációs rendszert/szoftverek kombinációját
                    egy asztali számítógépeden). Ez egy nagyon népszerű
                    választás, különösen bizonyos esetekben, például mikor a
                    Windows nem engedi, hogy egyszerre több verziójú Windows
                    legyen telepítve egyszerre ugyanazon a gépen, szóval pár
                    virtuális gép használata gyakran az egyedüli választás ilyen
                    esetekben.
                </Paragraph>

                <Paragraph>
                    A másik lehetőség a felhasználói csoportok, amelyekkel egy
                    csoport embert használsz a fejlesztő csapaton kívül akik
                    letesztelik az oldaladat. Ezek az emberek lehetnek a
                    barátaid, a családod vagy egy csoport más alkalmazottakból,
                    egy osztály a helyi egyetemről vagy egy szakmai tesztelői
                    csoport, ahol az emberek fizetést kapnak a tesztelésért és
                    eredményt adnak róla.
                </Paragraph>

                <Paragraph>
                    Végezetül, okosabb lehetsz a tesztelés során, ha audit
                    (ellenőrző) vagy automatizáló eszközöket használsz. Ez egy
                    ésszerű választás, amint a projekted egyre nagyobb lesz,
                    mivel, ha az összes tesztelést kézzel csinálod, az kezdhet
                    egy kicsit igazán sok időt felhasználni. Felállíthatod a
                    saját teszt automatizáló rendszered (a{" "}
                    <a href="https://www.selenium.dev/" target="_blank">
                        Selenium
                    </a>{" "}
                    egy igazán népszerű választás), amely például betöltheti az
                    oldaladat számos különböző böngészőbe és:
                    <ul className="ml-2">
                        <li>
                            például megnézi, hogy, ha egy gombra kattintás
                            történt az okozott-e valami sikeres történést
                            (mondjuk például egy térkép megjelenítést) és
                            megjeleníti az eredményt egyszer, miután a tesztek
                            befejeződtek.
                        </li>
                        <li>
                            vagy készít egy screenshot-ot (képernyő
                            lefényképezést) mindegyikről, amely segít meglátni,
                            hogy egy elrendezés megfelelő-e különböző
                            böngészőkön.
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    Ha pénzt akarsz fektetni a tesztelésbe, vannak kereskedelmi
                    forgalomban kapható eszközök, amelyek automatizálni tudják a
                    sok beállítást és tesztelést neked, mint a{" "}
                    <a href="https://saucelabs.com/" target="_blank">
                        Sauce Labs
                    </a>{" "}
                    és a{" "}
                    <a href="https://www.browserstack.com/" target="_blank">
                        Browser Stack
                    </a>
                    . Ezek a fajta eszközök általában képesek a CI (folyamatos
                    integrációs (continuous integration)) munkafolyamatokra,
                    amellyel a kódbeli változások automatikusan tesztelve
                    vannak, mielőtt azok engedélyezve vannak a kód adattárba
                    való elküldésre (általában "push" akció, például a
                    GitHub-ra).
                </Paragraph>

                <h3>Tesztelés kiadás előtti böngészőkön</h3>

                <Paragraph>
                    Gyakran jó ötlet a kiadás előtti böngésző verziókon való
                    tesztelés. Kövesd a következő linkeket:
                    <ul className="ml-2">
                        <li>
                            <a
                                href="https://www.mozilla.org/en-US/firefox/developer/"
                                target="_blank"
                            >
                                Firefox Fejlesztői Változat
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.microsoft.com/en-us/edge/download/insider?form=MA13FJ"
                                target="_blank"
                            >
                                Microsoft Edge Insider
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://developer.apple.com/safari/technology-preview/"
                                target="_blank"
                            >
                                Safari Technology Előnézet
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.google.com/chrome/canary/"
                                target="_blank"
                            >
                                Chrome Canary
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.opera.com/browsers/opera/developer"
                                target="_blank"
                            >
                                Opera Fejlesztői Változat
                            </a>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    Ez különösen akkor érvényes, ha a legújabb technológiát
                    használod az oldaladon és le akarod tesztelni a legújabb
                    megvalósításokat vagy, ha találsz egy hibát a böngésző
                    legújabb kiadott változatában és azt akarod, hogy a
                    fejlesztők javítsák ki a hibát majd a böngésző újabb
                    verziójában.
                </Paragraph>

                <h2>Kijavítások és ismétlés</h2>

                <Paragraph>
                    Ha egyszer felfedeztél egy hibát, akkor meg kell próbálnod
                    kijavítani azt.
                </Paragraph>

                <Paragraph>
                    Az első dolog amit tenni kell, hogy leszűkítjük amennyire
                    csak lehetséges, hogy hol is van a hiba. Szerezz minnél több
                    információt a személytől, aki jelentette a hibát, milyen
                    platformok-ról, eszközökről, böngésző verziókról vagy más
                    dolgokról van szó. Próbálj ki hasonló beállításokat (például
                    ugyanazt a böngésző verziót különböző asztali számítógép
                    platformokon vagy néhány különböző böngésző verziót
                    ugyanazon a platformon), hogy lásd milyen széleskörben
                    elterjedt a hiba.
                </Paragraph>

                <Paragraph>
                    Nem a te hibád, ha találsz egy létező hibát a böngészőben,
                    amelyet aztán remélhetőleg a gyártó gyorsan javítani is fog.
                    Lehet, hogy már ki is van javítva, például ha egy hiba
                    felüti magát a Firefox 49-es verziójában, de az már nincsen
                    benne a Firefox Nightly-ben (az 52-es verzióban), akkor már
                    kijavították. Ha nem történt javítás, akkor lehet, hogy
                    jelenteni akarod azt. Lásd a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction#reporting_bugs"
                        target="_blank"
                    >
                        Hibák jelentése
                    </a>{" "}
                    részt alább.
                </Paragraph>

                <Paragraph>
                    Ha a hiba miattad van, akkor ki kell javítanod! Keresd meg
                    az okát a bug-nak, magában foglalva ugyanazt a stratégiát,
                    mint bármely webfejlesztési hibánál(újra,{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML"
                        target="_blank"
                    >
                        Debugging HTML
                    </a>
                    ,{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS"
                        target="_blank"
                    >
                        Debugging CSS
                    </a>
                    , és a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong"
                        target="_blank"
                    >
                        Mi romlott el? JavaScript hibaelhárítás
                    </a>
                    ). Miután felfedezted mi is okozza a hibát (bug-ot), el kell
                    döntened, hogyan dolgozod ki a megoldást azon a böngészőn,
                    amelyen okozódik a probléma, mert nem változtathatod meg a
                    kódot csak úgy, mert problémát okozhat más böngészőkben. Az
                    általános megközelítés általában, hogy fogd a kódot (közben
                    legyen róla biztonsági másolat) és például használj
                    JavaScript funkció felismerő kódot, hogy felismerj
                    szituációkat, mikor egy problémás rész nem működik és
                    futtass egy kicsit más kódot azokban az esetekben, amikor
                    működik.
                </Paragraph>

                <Paragraph>
                    Miután egy javítás elkészült, akkor meg akarod majd
                    ismételni a tesztelési folyamatod, hogy megbizonyosodj a
                    javítással minden rendben van és nem okozott hibát az
                    oldalon máshol vagy más böngészőkön.
                </Paragraph>
            </Article>
            <Article>
                <h1>Hibák jelentése</h1>

                <Paragraph>
                    Csak ismételd meg, amit fentebb mondtunk, ha felfedezel egy
                    hibát a böngészőkben, amelyet jelenteni is kell:
                    <ul className="ml-2">
                        <li>
                            <a
                                href="https://bugzilla.mozilla.org/home"
                                target="_blank"
                            >
                                Firefox Bugzilla
                            </a>
                        </li>
                        <li>
                            <a href="https://bugs.webkit.org/" target="_blank">
                                Safari
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://issues.chromium.org/issues"
                                target="_blank"
                            >
                                Chrome
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://opera.atlassian.net/servicedesk/customer/portal/9"
                                target="_blank"
                            >
                                Opera
                            </a>
                        </li>
                    </ul>
                </Paragraph>
            </Article>
            <Article>
                <h1>Összefoglalás</h1>

                <Paragraph>
                    Ez a cikk valószínűleg adott neked egy magas szintű
                    megértést a legfontosabb fogalmakról, amelyeket tudnod kell
                    a cross-browser tesztelésről. Felvértezve ezzel a tudással,
                    most már készen állsz, hogy továbbhaladj és elkezdj tanulni
                    a Cross-browser tesztelő stratégiákról.
                </Paragraph>
            </Article>
            This article should have given you a high-level understanding of the
            most important concepts you need to know about cross browser
            testing. Armed with this knowledge, you are now ready to move on and
            start learning about Cross-browser testing strategies.
        </div>
    );
}
