import React from "react";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import Warning from "../../REACT/note/Warning.jsx";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";
import CodeDisplay from "../../components/CodeDisplay.jsx";
import w3c_validation from "./img/5.w3c_validation.png";
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
                        kiválasztanak elemeket azon az osztályon belül, így a
                        konfliktusok valószínűsége sokkal kisebb. Például{" "}
                        <BgLightgray>.audio-player ul a</BgLightgray>.
                    </Paragraph>
                </Note>

                <h2>Validáció</h2>

                <Paragraph>
                    A HTML validáció magában foglalja, hogy az összes tag
                    megfelelően zárva és beágyazva legyen, A DOCTYPE használva
                    legyen és a tag-ek a céljainak megfelelően legyenek
                    használva. A jó stratégia, ha rendszeresen validálod a
                    kódodat. Egy szolgáltatás amelyet használhatsz hozzá az a{" "}
                    <a href="https://validator.w3.org/" target="_blank">
                        W3C Markup Validation Service
                    </a>
                    , amely megvizsgálja a kódodat és válaszként ad egy listát a
                    hibákról:
                </Paragraph>

                <div className="image-container">
                    <img
                        src={w3c_validation}
                        alt="W3C Markup Validation Service Website"
                    />
                </div>

                <Paragraph>
                    A CSS validáció egy hasonló történet. Ellenőrizned kell,
                    hogy a property nevek helyesen vannak leírva, a property
                    értékek is helyesen vannak és érvényesek is legyenek arra,
                    amihez használod őket, nem hiányik egyik kapcsos zárójel sem
                    és így tovább. A W3C-nek van egy{" "}
                    <a
                        href="https://jigsaw.w3.org/css-validator/"
                        target="_blank"
                    >
                        CSS Validátora
                    </a>
                    , amely ugyanúgy elérhető erre a célra.
                </Paragraph>

                <h2>Linter-ek</h2>

                <Paragraph>
                    Egy másik jó választás lehet az úgynevezett Linter
                    alkalmazás, amely nem csak kimutatja a hibákat, hanem olyan
                    figyelmeztetéseket is mutat, amelyek a rosszul alkalmazott
                    CSS gyakorlatból erednek és még tud mást is ezek mellett. A
                    linter-ek személyre szabhatók szigorúbb és lazább módon a
                    hiba és figyelmeztetések közlése szempontjából.
                </Paragraph>

                <Paragraph>
                    Sok online linter alkalmazás van, mint a{" "}
                    <a
                        href="https://www.10bestdesign.com/dirtymarkup/"
                        target="_blank"
                    >
                        Dirty Markup
                    </a>{" "}
                    a HTML, CSS és Javascript számára. Ezek lehetővé teszik,
                    hogy beilleszd a kódot egy ablakba és majd megjelölik a
                    hibákat keresztekkel, amelyekre pedig az egérkurzort
                    helyezve megjelenítik a hibaüzenetet, amelyek informálnak
                    arról mi is a probléma. A Dirty Markup még azzal is el van
                    látva, hogy javításokat is kínál a Clean gomb használatával.
                </Paragraph>
            </Article>
            There are many online linter applications, such as Dirty Markup for
            HTML, CSS, and JavaScript. These allows you to paste your code into
            a window, and it will flag up any errors with crosses, which can
            then be hovered to get an error message informing you what the
            problem is. Dirty Markup also allows you to make fixes to your
            markup using the Clean button.
        </div>
    );
}
