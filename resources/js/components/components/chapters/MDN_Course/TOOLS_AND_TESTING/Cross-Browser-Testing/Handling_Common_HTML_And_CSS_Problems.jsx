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
            Let's go forth and look at how we can reduce cross browser errors
            that result from HTML/CSS.
        </div>
    );
}
