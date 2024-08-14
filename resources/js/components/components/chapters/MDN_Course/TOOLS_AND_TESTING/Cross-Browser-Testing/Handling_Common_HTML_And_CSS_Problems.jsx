import React from "react";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import Warning from "../../REACT/note/Warning.jsx";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";
import CodeDisplay from "../../components/CodeDisplay.jsx";

// import {} from "./cross_browser_testing_text.jsx";

export default function Handling_Common_HTML_And_CSS_Problems() {
    return (
        <div className="container">
            <Paragraph>
                Ebben a részben jobban belenézünk a gyakori cross-browser
                problémákba, amelyek a HTML és CSS írása során jelentkeznek és
                megnézzük milyen eszközök vannak azok elkerüléséhez vagy, ha
                hiba merül fel azok kijavításához. Ebbe beletartozik a kód
                lintelése, a CSS prefix-ek kezelése, a böngésző fejlesztői
                eszközeinek használata a problémák lekövetéséhez, a polyfill-ek
                használata, hogy támogatást adjunk hozzá a böngészőhöz és a
                reszponzív megjelenéssel járó problémákkal való megküzdésről
                lesz még szó.
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
                    nyelvekkel. Legyen fogalmad a magas szintű{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
                        target="_blank"
                    >
                        cross-browser tesztelés alapjairől
                    </a>
                    .
                </Paragraph>
                <Paragraph>
                    <div className="bold inline mr-1">A cikk célja:</div>
                    Az olvasó képes legyen diagnosztizálni gyakori HTML és CSS
                    böngészők közötti problémákat, megfelelő eszközöket és
                    technikákat használni azok leküzdésére.
                </Paragraph>
            </Article>
            <Article>
                <h1>A baj a HTML-el és a CSS-el</h1>

                <Paragraph>
                    Néhány baj a HTML-el és a CSS-el azon a tényen alapszik,
                    hogy mind a két nyelv egészen egyszerű és a fejlesztők
                    gyakran nem veszik komolyan abban az értelemben, hogy a kód
                    jól kidolgozott legyen, hatékony és szemantikailag leírja a
                    célját a funkcióknak az oldalon. A legrosszabb esetekben
                    Javascript-et használnak az egész weboldal tartalmának és
                    stílusának generálásához, amely hozzáférhetetlenné teszi az
                    oldalaidat és kevésbé lesz jó a teljesítménye (a DOM elemek
                    generálása drága mulatság). Más esetekben a legújabban
                    kiadott összetevők nem támogatottak a böngészők között,
                    amitől néhány összetevő és stílus nem működik néhány
                    felhasználónak. A reszponzív megjelenéssel járó problémák is
                    igen gyakoriak. Például egy weboldal jól néz ki egy asztali
                    számítógépen, viszont rossz felhasználói élményt nyújt egy
                    mobil készüléken, mert a tartalom túl kicsi az olvasáshoz
                    vagy mert az oldal túl lassú, mert olyan animáció van rajta.
                </Paragraph>

                <Paragraph>
                    Haladjunk tovább, hogy láthassuk, hogyan csökkenthetjük a
                    cross-browser hibákat, amelyeket a HTML/CSS nyelvek
                    eredményeznek.
                </Paragraph>
            </Article>
            <Article>
                <h1>Legelőször: oldjunk meg általános problémákat</h1>

                <Paragraph>
                    A sorozat{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction#testingdiscovery"
                        target="_blank"
                    >
                        első részében
                    </a>{" "}
                    azt mondtuk, hogy a kezdéshez jó stratégia, ha egy pár
                    modern böngészőn tesztelünk asztali gépen és mobilon, hogy
                    megbizonyosodjunk a kód általánosságban működik-e, mielőtt
                    tovább mennénk és a cross-browser problémákra
                    koncentrálnánk.
                </Paragraph>

                <Paragraph>
                    A{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML"
                        target="_blank"
                    >
                        HTML debug-olása
                    </a>{" "}
                    és a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS"
                        target="_blank"
                    >
                        CSS debug-olása
                    </a>{" "}
                    cikkekben adtunk néhány igazán kezdő útmutatást a HTML/CSS
                    debug-olásához (hibakereséshez). Ha nem vagy magabiztos az
                    alapokkal, mindenképpen tanulmányoznod kell ezeket a
                    cikkeket mielőtt továbbmennél.
                </Paragraph>

                <Paragraph>
                    Alapvetően, az is probléma, hogy ellenőrizni kell vajon a
                    HTML és CSS kódod jól van-e formázva és nem tartalmaz
                    szintaxis hibákat.
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        Egy gyakori probléma a CSS-el és a HTML-el, amikor
                        különböző CSS szabályok elkezdenek konfliktusban lenni
                        egymással. Ez különösen problémás lehet, amikor harmadik
                        féltől származó kódot használsz. Például lehet egy CSS
                        keretrendszert használsz és úgy találod az egyik class
                        (osztály) amit használ összeütközik azzal amit már te
                        használtál más célból. Vagy lehet úgy találod, hogy a
                        HTML amit harmadik féltől származó API (például hírdetés
                        banner gnerátorok) tartalmaz egy class nevet vagy ID-t
                        amit te már használtál más célból. Ahhoz, hogy
                        biztosítsd, hogy ez ne történjen meg, először kutatást
                        kell végezned milyen eszközöket fogsz majd használni és
                        azok köré alakítani a kódod. Érdemes "névterezni"
                        (namespacing) a CSS-t , például ha van egy kisalkalmazás
                        biztosítani azt, hogy elkülönült osztályai legyenek és
                        azután elkezdeni a szelektorokat alkalmazni amelyek
                        kiválasztanak elemeket a kisalkalmazáson belül azon az
                        osztályon belül, így a konfliktusok valószínűsége sokkal
                        kisebb. Például{" "}
                        <BgLightgray>.audio-player ul a</BgLightgray>.
                    </Paragraph>
                </Note>
            </Article>
            One common problem with CSS and HTML arises when different CSS rules
            begin to conflict with one another. This can be especially
            problematic when you are using third party code. For example, you
            might use a CSS framework and find that one of the class names it
            uses clashes with one you've already used for a different purpose.
            Or you might find that HTML generated by some kind of third party
            API (generating ad banners, for example) includes a class name or ID
            that you are already using for a different purpose. To ensure this
            doesn't happen, you need to research the tools you are using first
            and design your code around them. It is also worth "namespacing"
            CSS, e.g. if you have a widget, make sure it has a distinct class,
            and then start the selectors that select elements inside the widget
            with this class, so conflicts are less likely. For example
            <BgLightgray>.audio-player ul a</BgLightgray>.
        </div>
    );
}
