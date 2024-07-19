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
                            szintaxisra valamilyen cross-compiler-el (kereszt
                            fordítóval) ahol szükséges.
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
            In later articles, we'll explore common cross-browser problems, and
            look at solutions to those.
        </div>
    );
}
