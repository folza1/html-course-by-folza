import React from "react";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import Warning from "../../REACT/note/Warning.jsx";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";
import CodeDisplay from "../../components/CodeDisplay.jsx";
import w3c_validation from "./img/5.w3c_validation.png";
import online_linter from "./img/6.online_linter.png";
import css_inspector from "./img/7.css_inspector.png";
import input_output from "./img/8.input_output.png";
import css_fallback from "./img/9.css_fallback.png";
import button_back_wrong from "./img/10.button_back_wrong.png";
import {
    fallback_behavior,
    form_input,
    css_fallback_behavior,
} from "./handling_common_HTML_and_CSS_problems_code_texts.jsx";

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
                    látva, hogy javításokat is kínál a{" "}
                    <span className="italic">Clean</span> gomb használatával.
                </Paragraph>

                <div className="image-container">
                    <img src={online_linter} alt="Online Linter Website" />
                </div>

                <Paragraph>
                    Azonban nem túl kényelmes másolgatni és beillesztgetni a
                    kódot sok alkalommal egy weboldalra hogy ellenőrizzük annak
                    validáltságát. Amit igazán akarunk az egy linter amely
                    beleillik a szabványos munkafolyamatainkba minimális
                    munkával.
                </Paragraph>

                <Paragraph>
                    Sok kódszerkesztőnek van linter plugin-ja. Például:
                    <ul className="ml-2">
                        <li>
                            <a
                                href="https://www.sublimelinter.com/en/master/"
                                target="_blank"
                            >
                                SublimeLinter
                            </a>{" "}
                            a Sublime Text-hez
                        </li>
                        <li>
                            <a
                                href="https://sourceforge.net/projects/notepad-linter/"
                                target="_blank"
                            >
                                Notepad++ linter
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs"
                                target="_blank"
                            >
                                VSCode linters
                            </a>
                        </li>
                    </ul>
                </Paragraph>

                <h2>A bögésző fejlesztői eszközei</h2>

                <Paragraph>
                    A legtöbb modern böngészőben vannak beépített fejlesztői
                    eszközök, olyan hasznos funkciókkal mint a hiba levadászó
                    eszközök, főleg CSS-hez.
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        A HTML hibák nem olyan könnyen mutatkoznak meg a
                        fejlesztői eszközökkel, mivel a böngésző megpróbálja
                        kijavítani a rosszul formázott kódot automatikusan. A
                        W3C validátor a legjobb módja a HTML hibák
                        megtalálásához. Lásd a{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#validation"
                            target="_blank"
                        >
                            Validáció
                        </a>{" "}
                        részt fentebb.
                    </Paragraph>
                </Note>

                <Paragraph>
                    Egy példa a Firefox-ban a CSS inspector (ellenőrző), amely
                    deklaráció nem jó áthúzással és figyelmeztető háromszöggel
                    mutatja. Azonban a figyelmeztető háromszög kínál egy leíró
                    hibaüzenetet:
                </Paragraph>

                <div className="image-container">
                    <img src={css_inspector} alt="CSS Inspector in Firefox" />
                </div>

                <Paragraph>
                    Más böngészők hasonló fejlesztői eszközökkel rendelkeznek.
                </Paragraph>
            </Article>
            <Article>
                <h1>Gyakori cross-browser problémák</h1>

                <Paragraph>
                    Most pedig nézzünk meg néhányat a leggyakoribb cross-browser
                    HTML és CSS problémák közül. A fő terület a modern funkciók
                    támogatásának hiánya és a megjelenés elrendezésbeli
                    problémái.
                </Paragraph>

                <h2>
                    Böngészők amelyek nem támogatnak modern öszzetevőket,
                    funkciókat
                </h2>

                <Paragraph>
                    Ez egy gyakori probléma, különösen mikor régi böngészőket
                    kell támogatnod vagy olyan új funkciókat használsz, amelyek
                    még nem minden böngészőben vannak támogatva. Általánosságban
                    a legtöbb főbb HTML és CSS funkcionalitás (mint az alap HTML
                    elemek, CSS alapszínek és szövegstílusok) működik az összes
                    böngészőn, amelyet támogatni akarsz. Több probléma akkor
                    kerül felszínre amikor elkezdesz újabb HTML, CSS és API
                    funkciókat használni. Az MDN minden dokumentált funkció
                    számára mutat böngésző kompatibilitási adatot. Például nézd
                    meg a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:has#browser_compatibility"
                        target="_blank"
                    >
                        böngésző támogatási táblát a{" "}
                        <BgLightgray>:has()</BgLightgray>
                    </a>{" "}
                    pszeudó-osztályhoz.
                </Paragraph>

                <Paragraph>
                    Miután azonosítottad a technológiák listáját, amelyeket
                    használni fogsz és nem univerzálisan támogatott, jó ötlet
                    kutatást végezni, hogy milyen böngészők vannak támogatva és
                    milyen technikák hasznosak hozzá. Lásd a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#finding_help"
                        target="_blank"
                    >
                        Finding help
                    </a>{" "}
                    részt lejjebb.
                </Paragraph>

                <h2>A HTML viselkedése hiba esetén (fallback behavior)</h2>

                <Paragraph>
                    Néhány probléma megoldható a HTML/CSS természetes működését
                    kihasználva.
                </Paragraph>

                <Paragraph>
                    Amely HTML elemeket nem tud felismerni a böngésző azokat
                    anonymous inline elemekként kezeli (inline elemekként
                    semmilyen szemantikus jelentéssel nem rendelkeznek,
                    hasonlóan a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"
                        target="_blank"
                    >
                        &lt;span&gt;
                    </a>{" "}
                    elemhez). Hivatkozni tudsz rájuk a nevükkel és stilizálhatod
                    őket a CSS-el például. Csak biztosnak kell lenned benne,
                    hogy úgy viselkednek ahogyan azt te szeretnéd. Adhatsz nekik
                    stílusokat, mint más elemekhez, beleértve a display
                    tulajdonságot, ha kell akkor az{" "}
                    <BgLightgray>inline</BgLightgray>-tól különbözőre is
                    állíthatod.
                </Paragraph>

                <Paragraph>
                    Komplexebb HTML elemeknél mint a &lt;video&gt;,
                    &lt;audio&gt;, &lt;picture&gt;, &lt;object&gt;, és a
                    &lt;canvas&gt; (és más összetevők mellett) vannak
                    természetes mechanizmusok arra az esetre, ha az elemhez
                    adott erőforrás nem támogatott. Adhatsz fallback tartalmat a
                    nyitó és záró tag-ek közé és így a nem támogatott böngészők
                    hatékonyan figyelmen kívül hagyják a külső elemet és a
                    beágyazott tartalmat fogják futtatni.
                </Paragraph>

                <Paragraph>Például:</Paragraph>

                <CodeDisplay code={fallback_behavior} />

                <Paragraph>
                    Ez a példa tartalmaz egy egyszerű linket, amely lehetővé
                    teszi számodra, hogy letöltsd a videót, ha a HTML videó
                    lejátszó nem működik, így legalább a felhasználónak van
                    hozzáférése a videóhoz.
                </Paragraph>

                <Paragraph>
                    Egy másik példa rá a form elemek. Amikor új{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
                        target="_blank"
                    >
                        &lt;input&gt;
                    </a>{" "}
                    típusok voltak bemutatva az input formokba, mint az idő, a
                    dátumok, színek, számok, stb., ha a böngésző nem támogatta
                    az új funkciót a böngésző alapértelmezetten{" "}
                    <BgLightgray>type="text"</BgLightgray>-et használt. Új input
                    típusok lettek kitalálva, amelyek nagyon hasznosak,
                    különösen a mobil platform-okon, ahol a könnyű adatbevitel
                    nagyon fontos a felhasználói élmény szempontjából. A
                    platformok különböző UI kódrészleteket kínálnak az input
                    típusától függően, mint a naptár widget a dátumok
                    beviteléséhez. Ha egy böngésző nem támogat egy beviteli
                    típust, a felhasználó továbbra is megadhatja a szükséges
                    adatokat.
                </Paragraph>

                <Paragraph>
                    A következő példa mutatja a dátum és idő inputokat:
                </Paragraph>

                <CodeDisplay code={form_input} />

                <Paragraph>A kód a következő output-ot produkálja:</Paragraph>

                <div className="image-container">
                    <img
                        src={input_output}
                        alt="Date and time input field output"
                    />
                </div>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        Láthatsz egy élő futó példát erről, mint{" "}
                        <a
                            href="https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html"
                            target="_blank"
                        >
                            forms-test.html
                        </a>
                        -t a GitHub-on (
                        <a
                            href="https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/forms-test.html"
                            target="_blank"
                        >
                            láthatod a forráskódot is itt
                        </a>
                        ).
                    </Paragraph>
                </Note>

                <Paragraph>
                    Ha megnézed a példát, látni fogsz egy UI (user interface,
                    felhasználói interface) összetevőt működésben, amivel
                    megpróbálhatsz adatot bevinni (data input). Olyan
                    készülékek, amelyek dinamikus billentyűzettel vannak
                    ellátva, más típusok esetén más billentyűzet lesz
                    megjelenítve. A nem támogatott böngészőknél az input-ok
                    olyanok lesznek mint a normál szöveges input mezők, ami
                    annyit jelent, hogy a felhasználó még így is be tud vinni
                    helyes információt. Például, ha színről van szó beírja a
                    színkódot.
                </Paragraph>

                <h2>
                    CSS fallback behavior (hiba esetén lefutó programok,
                    nevezhetjük védőhálónak is, ha úgy tetszik)
                </h2>

                <Paragraph>
                    A CSS vitathatóan jobb a fallback-ekben mint a HTML. Ha a
                    böngésző találkozik egy deklarációt vagy szabályt, amit nem
                    ért, akkor egyszerűen teljesen kihagyja anélkül, hogy
                    alkalmazná azt vagy hibát jelezne. Ez elég frusztráló lehet
                    neked és a felhasználóidnak, ha egy ilyen hiba átcsúszik a
                    produkciós kódra, de legalább nem jelenti azt, hogy az egész
                    oldal leáll a hiba miatt és ha okosan megoldod még az
                    előnyödre is válhat.
                </Paragraph>

                <Paragraph>
                    Nézzünk egy példát. Egy egyszerű doboz CSS-el stílusozva,
                    amelynek van néhány stílusa különböző CSS funkciók által:
                </Paragraph>

                <div className="image-container">
                    <img src={css_fallback} alt="Box With Style For Fallback" />
                </div>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        Láthatod ezt a példát élőben a GitHub-on, mint{" "}
                        <a
                            href="https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html"
                            target="_blank"
                        >
                            button-with-fallback.html
                        </a>{" "}
                        (
                        <a
                            href="https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html"
                            target="_blank"
                        >
                            itt van hozzá a forráskód is
                        </a>
                        ).
                    </Paragraph>
                </Note>

                <Paragraph>
                    A gombnak van számos deklarációja, ami stílust eredményez,
                    de a két legérdekesebb a következő:
                </Paragraph>

                <CodeDisplay code={css_fallback_behavior} />

                <Paragraph>
                    Itt mutatunk egy{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb"
                        target="_blank"
                    >
                        RGB
                    </a>{" "}
                    <BgLightgray>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-color"
                            target="_blank"
                        >
                            background-color
                        </a>
                    </BgLightgray>{" "}
                    (háttérszín), amely megváltoztatja az opacitását a hover
                    eseményre, adva a felhasználónak egy segítséget, hogy
                    rájöjjön a gomb interaktív, (azaz bizonyos akcióra
                    megváltozik), és egy kis félig látszódó inset{" "}
                    <BgLightgray>
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow"
                            target="_blank"
                        >
                            box-shadow
                        </a>
                    </BgLightgray>
                    árnyékot, hogy adjon a doboznak egy kis textúrát és
                    mélységet. Bár most teljesen támogatottak, az RGB színek és
                    a doboz árnyékok (box-shadow) nem mindig voltak azok. Csak
                    az Internet Explorer 9-től kezdődően. A böngészők, melyek
                    nem támogatták az RGB színeket figyelmen kívül hagyták a
                    deklarációt (program utasítást), ami annyit tett a régebbi
                    böngészőkben, hogy a háttérszín nem mutatkozott meg és így a
                    szöveg nem volt olvasható, mindenesetre nem volt jó!
                </Paragraph>

                <div className="image-container">
                    <img
                        src={button_back_wrong}
                        alt="Button With Wrong Background"
                    />
                </div>

                <Paragraph>
                    Hogy rendezzük ezt a hibát, adtunk egy második{" "}
                    <BgLightgray>background-color</BgLightgray> utasítást, amely
                    ugyancsak egy hexadecimális színre utal. Ez igazán régi
                    böngészőkben is támogatott és fallback-ként (védőhálóként)
                    működik, ha a csúcsmodern összetevők nem működnének. Ami
                    történik az az, hogy mikor a böngésző meglátogatja először
                    az oldalt akkor az első{" "}
                    <BgLightgray>background-color</BgLightgray> lesz alkalmazva,
                    amikor a második <BgLightgray>background-color</BgLightgray>{" "}
                    (háttérszín) deklarációt kapja, akkor felülírja a kezdeti
                    értéket a második értékkel, ha támogatja az RGB színeket. Ha
                    nem támogatja, akkor csak figyelmen kívül hagyja az egész
                    utasítást és tobábbmegy rajta.
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        Ugyanez igaz más CSS funkciókra, mint a{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries"
                            target="_blank"
                        >
                            media queries
                        </a>
                        , a{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"
                            target="_blank"
                        >
                            @font-face
                        </a>{" "}
                        és{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS/@supports"
                            target="_blank"
                        >
                            @supports
                        </a>{" "}
                        blokkok esetében. Ha nem támogatottak, a böngésző csak
                        egyszerűen figyelmen kívül hagyja.
                    </Paragraph>
                </Note>
            </Article>
            The same is true for other CSS features like media queries,
            @font-face and @supports blocks — if they are not supported, the
            browser just ignores them.
        </div>
    );
}
