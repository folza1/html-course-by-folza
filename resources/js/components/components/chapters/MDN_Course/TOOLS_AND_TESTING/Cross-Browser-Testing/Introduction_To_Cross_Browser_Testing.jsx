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
                            És teszteld bármelyik olyan böngészőkön amelyek
                            benne vannak a cél listán.
                        </li>
                    </ul>
                </Paragraph>
            </Article>
            Also do tests in any other browsers you have included inside your
            target list.
        </div>
    );
}
