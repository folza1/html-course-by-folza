import React from "react";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import Warning from "../../REACT/note/Warning.jsx";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";
import CodeDisplay from "../../components/CodeDisplay.jsx";
import { http_request_ie_6 } from "./handling_common_Javascript_problems_code_texts.jsx";

// import {} from "./cross_browser_testing_text.jsx";

export default function Handling_Common_Javascript_Problems() {
    return (
        <div className="container">
            <h1>Gyakori Javascript problémák kezelése</h1>
            <Paragraph>
                Most pedig nézzünk rá a gyakori JavaScript problémákra és arra,
                hogy, hogyan javítsuk ki őket. Ebbe beletartoznak a böngésző
                fejlesztői eszközei, amelyekkel lekövethetünk és kijavíthatunk
                problémákat, a Polyfill-ek és könyvtárak használata, hogy
                körbejárjuk a problémákat, hogy munkára bírjunk modern
                JavaScript összetevőket régebbi böngészőkön és még több is.
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
                    Hogy az olvasó képes legyen diagnosztizálni gyakori
                    Javascript cross-browser problémákat és használjon megfelelő
                    eszközöket és technikákat a kijavításukhoz.
                </Paragraph>
            </Article>
            <Article>
                <h1>A probléma a JavaScript-el</h1>

                <Paragraph>
                    Történelmileg a JavaScript-et cross-browser kompatibilitási
                    problémák sújtották. Az 1990-es években a fő böngésző
                    választék az Internet Explorer és a Netscape volt és a
                    szkriptelés különböző nyelveken volt végrehajtva. A Netscape
                    JavaScript-et használt az IE pedig JScript-et és még
                    lehetett hozzá VBScript-et is használni. Amíg a JavaScript
                    és a JScript nem voltak kompatibilisek egymással egy
                    bizonyos fokig (mindkettő az{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Glossary/ECMAScript"
                        target="_blank"
                    >
                        ECMAScript
                    </a>{" "}
                    specifikáció alapján volt), addig gyakran konfliktusba
                    kerültek egymással, inkompatibilisek voltak és sok álmatlan
                    éjszakákat okoztak a fejlesztőknek.
                </Paragraph>

                <Paragraph>
                    Olyan inkompatibilitási problémák még fennálltak a 2000-es
                    évek elején és így a régi böngészők amelyek használatban
                    voltak támogatásra volt szükségük. Például a kód amely
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"
                        target="_blank"
                    >
                        XMLHttpRequest
                    </a>{" "}
                    objektumot készít különleges kezelést igényelt az Internet
                    Explorer 6-nál:
                </Paragraph>

                <CodeDisplay code={http_request_ie_6} />
            </Article>
            Such incompatibility problems persisted well into the early 2000s,
            as old browsers were still being used and still needed supporting.
            For example, code to create XMLHttpRequest objects had to have
            special handling for Internet Explorer 6:
        </div>
    );
}
