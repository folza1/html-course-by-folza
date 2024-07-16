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
            <Paragraph>
                <div className="bold inline mr-1">Előfeltételek:</div>
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
            You should really learn the basics of the core HTML, CSS, and
            JavaScript languages first before attempting to use the tools
            detailed here.
        </div>
    );
}
