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

                <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS"
                    target="_blank"
                >
                    Közönséges HTML és CSS problémák kezelése
                </a>

                <Paragraph>
                    Ebben a részben meg fogjuk nézni különösen a közönséges
                    böngészők közötti problémákat, amelyek felmerülnek a HTML és
                    CSS kód írása során és, hogy milyen eszközöket használjunk,
                    hogy megelőzzük ezeknek a hibáknak a megtörténését, vagy
                    megoldjuk a problémákat ha felmerülnek. Ez magában foglalja
                    a kód lintelését, a CSS prefix-ek kezelését, a böngésző
                    fejlesztői eszközeinek használatát a problémák
                    kinyomozásához, a polyfill-ek használatát, hogy támogatást
                    adjunk hozzá a böngészőkhöz, a reszponzív megjelenéssel járó
                    problémákkal való megküzdést és még többet is.
                </Paragraph>

                <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript"
                    target="_blank"
                >
                    Gyakori JavaScript problémák kezelése
                </a>

                <Paragraph>
                    Itt gyakori böngészők közötti JavaScript problémákat fogunk
                    megnézni és hogy, hogyan javítsuk ki őket. Ez magában
                    foglalja a böngésző fejlesztői eszközeinek a használatát,
                    hogy kinyomozzuk és kijavítsuk a problémákat, polyfill-ek és
                    könyvtárak használatát, hogy körüljárjuk a problémákat,
                    modern JavaScript funkciók használatát régebbi böngészőkön
                    és még mást is.
                </Paragraph>

                <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility"
                    target="_blank"
                >
                    Gyakori akadálymnetesítési problémák kezelése{" "}
                </a>

                <Paragraph>
                    Aztán az akadálymentesítésre fordítjuk a figyelmünket,
                    információt nyújtunk gyakori problémákról, hogyan csináljunk
                    egyszerű teszteket és hogyan használjuk az
                    ellenőrző/automatizáció eszközöket, hogy megtaláljuk az
                    akadálymentesítésbeli problémákat.
                </Paragraph>

                <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection"
                    target="_blank"
                >
                    Funkció észlelés végrehajtása
                </a>

                <Paragraph>
                    A funkció észlelés magába foglalja, hogy vajon egy böngésző
                    támogat-e egy bizonyos kódblokkot és futtat egy másik kódot
                    attól függően, hogy támogatta-e vagy nem, így az a böngésző
                    mindig működtetni fogja kódot, ahelyett, hogy összeomlik
                    vagy hibát jelez néhány böngészőben. Ez a cikk részletezi,
                    hogyan írd meg a saját funkció észlelést (feature
                    detection-t), hogyan használj egy könyvtárat hozzá, hogy
                    felgyorsítsd a végrehajtását és hogyan használj natív
                    funkciókat a feature detection-höz mint a{" "}
                    <BgLightgray>@supports</BgLightgray>-ot.
                </Paragraph>

                <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing"
                    target="_blank"
                >
                    Bevezetés az automatizált tesztelésbe
                </a>

                <Paragraph>
                    Manuálisan lefuttatni a teszteket számos böngészőn és
                    eszközön, napi többször unalmas és időpazarló lehet. Hogy
                    kezeljük ezt hatékonyan, meg kell ismerned néhány
                    automatizáló eszközt. Ebben a cikkben megnézzük milyen
                    elérhető eszközök vannak és hogyan használj feladat
                    futtatókat és annak alapjait, hogyan használj kereskedelmi
                    forgalomban kapható böngésző teszt automatizáló
                    alkalmazásokat, mint a Sauce Labs és a Browser Stack.
                </Paragraph>

                <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment"
                    target="_blank"
                >
                    A saját teszt automatizáló környezet beállítása
                </a>

                <Paragraph>
                    Ebben a cikkben megtanulhatod, hogyan telepítsd a saját
                    automatizáló környezetet és futtasd a saját tesztjeidet a
                    Selenium/Webdriver használatával és a tesztelő könyvtárat,
                    mint a <BgLightgray>selenium-webdriver</BgLightgray>-t,
                    amely elérhető a Node-hoz. Azt is meg fogjuk nézni, hogyan
                    integrálhatod a helyi tesztelő környezetet kereskedelmi
                    alkalmazásokkal (az előző cikkben voltak említve).
                </Paragraph>
            </Article>
            In this article, we will teach you how to install your own
            automation environment and run your own tests using
            Selenium/WebDriver and a testing library such as selenium-webdriver
            for Node. We will also look at how to integrate your local testing
            environment with commercial apps like the ones discussed in the
            previous article.
        </div>
    );
}
