import React from "react";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";
import CodeDisplay from "../../components/CodeDisplay.jsx";

// import {} from "./cross_browser_testing_text.jsx";

export default function Cross_Browser_Testing() {
    return (
        <div className="container">
            <h1>Böngészők közötti tesztelés</h1>
            <Paragraph>
                Ez a modul a web projektek különböző böngészőkön való
                tesztelésére koncentrál. Foglalkozunk majd a célközönséged
                azonosításával (például milyen felhasználók, böngészők és
                eszközök miatt kell aggódnod), hogyan kell a tesztelést
                csinálni, milyen fő problémák vannak amelyekkel szembesülsz a
                különböző típusú kódokkal és hogyan háríthatod el azokat, milyen
                eszközök a leghasznosabbak a tesztelés és a hibaelhárítás során
                és hogyan használj automatizációt, hogy felgyorsítsd a
                tesztelést.
            </Paragraph>
            <h1>Előfeltételek</h1>
            <Paragraph>
                Igazán tudnod kellene a{" "}
                <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
                    target="_blank"
                >
                    HTML
                </a>
                ,{" "}
                <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/CSS"
                    target="_blank"
                >
                    CSS
                </a>{" "}
                és a{" "}
                <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript"
                    target="_blank"
                >
                    JavaScript
                </a>{" "}
                nyelvek alapjait először, mielőtt elkezded használni az itt
                részletezett eszközöket.
            </Paragraph>
            <Article>
                <h1>Útmutatók</h1>
                <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
                    target="_blank"
                >
                    Bevezetés a böngészők közötti tesztelésbe
                </a>
                <Paragraph>
                    Ezzel a cikkel kezdjük a modult, amely egy áttekintést ad a
                    böngészők közötti tesztelés témában, megválaszolva a kérdést
                    mi is a böngészők közötti tesztelés, mik a leggyakoribb
                    típusú problémák, amelyek felmerülnek és mi a fő
                    megközelítés a teszteléshez, a problémák azonosításához és
                    megoldásához.
                </Paragraph>
                <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies"
                    target="_blank"
                >
                    Stratégiák a tesztelés kivitelezéséhez
                </a>
                <Paragraph>
                    Aztán, belemegyünk a tesztelés kivitelezésébe, azonosítjuk a
                    célközönséget (milyen böngészők, eszközök és más részeket
                    kell majd tesztelned), lo-fi (low fidelity) tesztelési
                    stratégiákat nézünk meg (amely során kapsz majd egy sor
                    eszköz típust és néhány virtuális gépet amikkel alkalmi
                    tesztelést hajthatsz végre ha szükséges), magasabb szintű
                    technikai stratégiákat ismerünk meg (automatizáció
                    használata és erre a célra készült tesztelő alkalmazások
                    használata) és a tesztelést felhasználói csoportokkal.
                </Paragraph>
            </Article>
            Next, we drill down into carrying out testing, looking at
            identifying a target audience (e.g. what browsers, devices, and
            other segments should you make sure are tested), lo-fi testing
            strategies (get yourself a range of devices and some virtual
            machines and do ad hoc tests when needed), higher tech strategies
            (automation, using dedicated testing apps), and testing with user
            groups.
        </div>
    );
}
