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
import breadcrumb_trail from "./img/11.breadcrumb_trail.png";
import {
    fallback_behavior,
    form_input,
    css_fallback_behavior,
    form_input_selector,
    prefixes,
    logo_reference,
    logo_ref_style,
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

                <h2>Selector támogatás</h2>

                <Paragraph>
                    Természetesen egyik CSS összetevő sem alkalmazható, ha nem
                    használod helyesen a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors"
                        target="_blank"
                    >
                        szelektorokat (selectors)
                    </a>{" "}
                    az elem kiválasztásához, amit stilizálni szeretnél.
                </Paragraph>

                <Paragraph>
                    Egy vesszővel elválasztott szelektor listánál, ha egy
                    szelektort helytelenül írsz, nem fog egyezni valamelyik
                    elemmel. Ha azonban a szelektor érvénytelen az egész
                    szelektor lista figyelmen kívül van hagyva az egész stílus
                    blokkal együtt. Ezért csak alkalmazz egy{" "}
                    <BgLightgray>:-moz-</BgLightgray> prefixes pszeudo osztályt
                    vagy pszeudo elemet egy{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/Selector_list#forgiving_selector_list"
                        target="_blank"
                    >
                        megbocsátó szelektor listában
                    </a>{" "}
                    (ahol el lehet helyezni olyan elemet, amely nem létezik),
                    mint a <BgLightgray>:where(::-moz-thumb)</BgLightgray>. Ne
                    használd a <BgLightgray>:-moz-</BgLightgray> prefixes
                    pszeudo osztályt vagy pszeudo elemet egy vesszővel
                    elválasztott szelektor csoporton belül az{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:is"
                        target="_blank"
                    >
                        :is()
                    </a>{" "}
                    vagy a
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:where"
                        target="_blank"
                    >
                        :where()
                    </a>{" "}
                    megbocsátó szelektor listán kívül mert minden Firefox-tól
                    eltérő böngésző figyelmen kívül fogja hagyni az egész kód
                    blokkot. Jegyezd fel, hogy mind a{" "}
                    <BgLightgray>:is()</BgLightgray> és a
                    <BgLightgray>:where()</BgLightgray> is elhelyezhető
                    paraméterként más szelektor listákban mint a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:has"
                        target="_blank"
                    >
                        :has()
                    </a>{" "}
                    és{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:not"
                        target="_blank"
                    >
                        :not()
                    </a>
                    .
                </Paragraph>

                <Paragraph>
                    Úgy találtuk, hogy hasznos vizsgálni az elemet amelyet
                    stilizálni próbálsz mégpedig a böngésző fejlesztői
                    eszközeivel, aztán megnézhetjük a DOM fa morzsa menüjében
                    (breadcrumb trail), amely DOM vizsgálók kínálnak egy nézetet
                    a szelektorodhoz, ha van értelme összehasonlítani azt.
                </Paragraph>

                <Paragraph>
                    Például a Firefox dev toolsban ezt a fajta output-ot kapod a
                    DOM vizsgáló alján:
                </Paragraph>

                <div className="image-container">
                    <img
                        src={breadcrumb_trail}
                        alt="DOM Tree Breadcrumb Trail"
                    />
                </div>

                <Paragraph>
                    Például ha szeretted volna használni ezt a szelektort,
                    látnod kellene, hogy nem megfelelően választotta volna ki az
                    input elemet:
                </Paragraph>

                <CodeDisplay code={form_input_selector} />

                <Paragraph>
                    (A <BgLightgray>date</BgLightgray> form input nem egy
                    közvetlen gyermeke a <BgLightgray>&lt;form&gt;</BgLightgray>
                    -nak. Jobb lenne ha általános leszármazott szelektort
                    használnál a gyermek szelektor helyett).
                </Paragraph>

                <h2>CSS prefixek kezelése</h2>

                <Paragraph>
                    Másik fajta probléma halmaz a CSS prefix-ekkel jön. Ezek a
                    mechanizmusok eredetileg arra voltak használva, hogy
                    lehetővé tegyék a böngésző gyártóknak, hogy megvalósítsák a
                    saját CSS vagy JavaScript összetevők verzióit, amíg a
                    technológia kísérleti állapotban van, így játszhatnak velük
                    és elkészíthetik jóra azokat más böngésző megvalósítással
                    való konfliktus nélkül vagy létrehozhatnak végső prefix
                    nélküli megvalósításokat.
                </Paragraph>

                <Paragraph>
                    Például a Firefox használja a{" "}
                    <BgLightgray>-moz-</BgLightgray> prefixet, a
                    Chrome/Edge/Opera/Safari használja a{" "}
                    <BgLightgray>-webkit-</BgLightgray> prefixet. Más
                    prefix-ekkel is találkozhatsz régi kódnál, amely
                    biztonságosan eltávolítható. Ilyen az{" "}
                    <BgLightgray>-ms-</BgLightgray>, amely az Internet
                    Explorer-hez és a korábbi Edge verziókhoz volt használva.
                    Volt még az <BgLightgray>-o</BgLightgray> prefix, amely
                    eredetileg az Opera verziókhoz volt használva.
                </Paragraph>

                <Paragraph>
                    Prefix-elt összetevőket soha nem volt jó használni
                    produkciós környezetben, mivel változtatás és eltávolítás
                    tárgyai lehetnek figyelmeztetés nélkül, amely
                    teljesítménybeli problémákat okozhat régi böngésző
                    verziókban, amelyekben szükség van rájuk és cross-browser
                    problémák okai lehetnek. Ez különösen probléma például,
                    mikor a fejlesztők eldöntik, hogy csak a{" "}
                    <BgLightgray>-webkit-</BgLightgray> verzióját használják egy
                    property-nek (tulajdonságnak), amely azt jelenti, hogy az
                    oldal nem fog működni más böngészőkön. Ez történt akkor is,
                    amikor olyan sok más böngésző gyártó megvalósította a{" "}
                    <BgLightgray>-webkit-</BgLightgray> prefix-es verziókat
                    számos CSS property-nél. Bár a böngészők még mindig
                    támogatnak néhány prefix-es property nevet, property értéket
                    és pszeudo osztályokat, most a kísérleti összetevők
                    speciális módon használhatók, így a webfejlesztők
                    tesztelhetik őket a fejlesztés során.
                </Paragraph>

                <Paragraph>
                    Ha prefix-et használsz, légy biztos benne, hogy szükség van
                    rá, hogy a property egy a néhány fentmaradt prefix-elt
                    funkció közül. Megnézheted, hogy milyen böngészőknek
                    szükségesek a prefixek az MDN referencia oldalán és olyan
                    oldalakon mint a{" "}
                    <a href="https://caniuse.com/" target="_blank">
                        caniuse.com
                    </a>
                    . Ha nem vagy biztos benne, kitalálhatod egy kis
                    teszteléssel közvetlenül a böngészőkben. Helyezd el a
                    szabványos nem prefix-es verziót a prefix-es stílus
                    deklaráció után. Figyelmen kívül lesz hagyva, ha nem
                    támogatott és használva lesz támogatottság esetén.
                </Paragraph>

                <CodeDisplay code={prefixes} />

                <Paragraph>
                    Próbáld ki ezt az egyszerű példát:
                    <ul className="ml-2">
                        <li>
                            Használd ezt az oldalt vagy más oldalt, amelynek van
                            kiemelkedő heading (fejléc) vagy más blokk szintű
                            eleme.
                        </li>
                        <li>
                            Klikkelj jobb gombbal a kérdéses elemre és válaszd
                            ki az Inspect/Inspect element (Vizsgálat/Elem
                            vizsgálata) részt (vagy hasonló opciót a
                            böngésződtől függően). Ezzel megnyithatod a dev
                            tools-t (fejlesztői eszközöket) a böngésződben és a
                            kiválasztott elem ki lesz emelve a DOM inspector-ban
                            (vizsgálóban).
                        </li>
                        <li>
                            Nézz egy összetevőt amelyet kiválaszthatsz. Például
                            a cikk írásakor ennek az oldalnak van egy logo-ja
                            <BgLightgray>mdn-docs-logo</BgLightgray> ID-vel
                            (azonosítóval). Szóval az MDN fejlécében vagy egy
                            ilyen ID-vel ellátott kép. Ha az inspector-ban
                            lefuttatjuk a következő kódokat a konzolban, akkor
                            elfordul a kép 90 fokkal.
                        </li>
                        <li>
                            Eltároljuk a <BgLightgray>test</BgLightgray>{" "}
                            konstansban az ezzel az ID-vel ellátott elemet:
                            <CodeDisplay code={logo_reference} />
                        </li>
                        <li>
                            Most pedig adjunk egy új értéket a CSS property-nek
                            a kiválasztott elemmel kapcsolatban. Ezt megteheted
                            az elem style property-jének a használatával.
                            Például írd be a következő JavaScript-et a konzolba:
                            <CodeDisplay code={logo_ref_style} />
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    Amint elkezded gépelni a property név értékét a második pont
                    után (jegyezd fel, hogy a JavaScript-ben a CSS property
                    nevek{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Glossary/Camel_case"
                        target="_blank"
                    >
                        lowerCamelCase
                    </a>{" "}
                    (kisbetűvel kezdődik és onnantól minden szó első betűje
                    nagybetűvel van) konvenció alapján vannak írva nem pedig{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case"
                        target="_blank"
                    >
                        kebab-case
                    </a>{" "}
                    (kötőjellel elválasztva) módon), a JavaScript konzolnak el
                    kellene kezdenie automatikusan kiegészíteni a property-k
                    neveit, amelyek léteznek a böngészőben és megegyeznek azzal
                    amit elkezdtél írni. Ez hasznos ahhoz, hogy kitaláld milyen
                    property-k vannak alkalmazva a böngészőben.
                </Paragraph>

                <Paragraph>
                    Ha szükséged van modern összetevőkre az oldaladon, akkor
                    fontold meg a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/@supports"
                        target="_blank"
                    >
                        @supports
                    </a>{" "}
                    használatát, amely lehetővé teszi neked, hogy végrehajts
                    natív funkció észlelő teszteket és beágyazd a prefix-es vagy
                    az új összetevőt a @supports blokkon belül.
                </Paragraph>

                <h2>Reszponzív megjelenés problémái</h2>

                <Paragraph>
                    A reszponzív megjelenés egy gyakorlat, amivel web
                    elrendezéseket készítünk amelyek változnak, hogy
                    illeszkedjenek a különböző készülék forma faktoraihoz.
                    Például különböző kijelző szélességek lehetnek, elrendezések
                    (portré vagy tájkép), vagy felbontás. Az asztali elrendezés
                    például borzasztóan néz ki mikor egy mobil eszközről van
                    megnézve, így szükséged van készíteni egy megfelelő mobil
                    elrendezést a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries"
                        target="_blank"
                    >
                        media queries
                    </a>{" "}
                    használatával és biztosítani azt, hogy helyesen van
                    alkalmazva a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag"
                        target="_blank"
                    >
                        viewport
                    </a>{" "}
                    használata. Részletes gyakorlatokat találhatsz a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"
                        target="_blank"
                    >
                        reszponzív megjelenés témában az útmutatónkban
                    </a>
                    .
                </Paragraph>

                <Paragraph>
                    A felbontás is egy nagy probléma. Például a mobil készülékek
                    számára kevésbé szükségesek a nagyon nagy képek, nem úgy
                    mint az asztali számítógépek esetében és valószínűbb, hogy
                    lassabb internet kapcsolatot használnak és lehetséges még,
                    hogy drága adatcsomagjuk van, amely esetében az elpazarolt
                    sávszélesség problémásabb. Plusz még, a különböző
                    készülékeknek különböző felbontása van, ami azt jelenti,
                    hogy a kisebb képek lehet pixelesnek látszódnak. Van számos
                    technika, amely lehetővé teszi, hogy dolgozz ezeken a
                    problémákon, a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design#media_queries"
                        target="_blank"
                    >
                        media queries
                    </a>
                    -től kezdve a komplexebb{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_different_sizes"
                        target="_blank"
                    >
                        reszponzív kép technikákig
                    </a>
                    , beleértve a{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture"
                        target="_blank"
                    >
                        &lt;picture&gt;
                    </a>{" "}
                    és az{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
                        target="_blank"
                    >
                        &lt;img&gt;
                    </a>{" "}
                    elemek{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#srcset"
                        target="_blank"
                    >
                        srcset
                    </a>{" "}
                    és{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#sizes"
                        target="_blank"
                    >
                        sizes
                    </a>{" "}
                    attribútumát.
                </Paragraph>
            </Article>
            <Article>
                <h1>Itt találhatsz segítséget</h1>

                <Paragraph>
                    Van sok más probléma, amellyel találkozhatsz a HTML-el és
                    CSS-el kapcsolatban, viszont, ha megtanulod, hogyan
                    találhatsz válaszokat a kérdéseidre az felbecsülhetetlen.
                </Paragraph>

                <Paragraph>
                    A legjobb források a támogatói infomrációkhoz a Mozilla
                    Developer Network, a{" "}
                    <a href="https://stackoverflow.com/" target="_blank">
                        stackoverflow.com
                    </a>{" "}
                    és a{" "}
                    <a href="https://caniuse.com/" target="_blank">
                        caniuse.com
                    </a>
                    .
                </Paragraph>

                <Paragraph>
                    A Mozilla Developer Network (MDN) használatához, a legtöbb
                    ember csinál egy keresést egy keresőmotoron a
                    technológiáról, amelyről megpróbál információt szerezni,
                    plusz az "mdn" kifejezés. Például az "mdn HTML video". Az
                    MDN számos hasznos tartalom típust tartalmaz:
                    <ul className="ml-2">
                        <li>
                            Referencia anyag a böngésző támogatói információval
                            a kliens oldali web technológiákhoz, például a{" "}
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"
                                target="_blank"
                            >
                                &lt;video&gt; referencia oldal
                            </a>
                            .
                        </li>
                        <li>
                            Más támogatói referencia anyag, mint például az{" "}
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats"
                                target="_blank"
                            >
                                Útmutató a média típusokhoz és formátumokhoz a
                                web-en
                            </a>
                            .
                        </li>
                        <li>
                            Hasznos oktatóanyagok amelyek megoldanak különleges
                            problémákat, például a{" "}
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player"
                                target="_blank"
                            >
                                Cross-browser videó lejátszó készítése
                            </a>
                            .
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    A caniuse.com információt kínál néhány hasznos külső forrás
                    linkjei mellett. Például nézd meg a{" "}
                    <a href="https://caniuse.com/#search=video" target="_blank">
                        https://caniuse.com/#search=video
                    </a>{" "}
                    (csak bele kell írni a szövegdobozba a funkciót amire
                    keresni akarsz)
                </Paragraph>

                <Paragraph>
                    A stackoverflow.com (SO) az egy fórum oldal, ahol kérdéseket
                    tehetsz fel és vannak fejlesztők akik megosztják a
                    megoldásukat, megnézhetsz korábbi posztokat és segíthetsz
                    más fejlesztőknek. Tanácsolni szokták, hogy nézd meg, hogy
                    van-e már válasz a kérdésedre mielőtt új kérdést teszel fel.
                    Például mi rákerestünk az "autofocus kikapcsolása témában" a
                    SO oldalán és nagyon gyorsan feljött az{" "}
                    <a
                        href="https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes"
                        target="_blank"
                    >
                        Autofocus kikapcsolása HTML attribútum használatával
                    </a>{" "}
                    válasz.
                </Paragraph>

                <Paragraph>
                    Emellett próbálj meg választ találni a kedvenc keresőmotorod
                    használatával a problémádra. Gyakran hasznos, hogy egy
                    bizonyos hibaüzenetre keresel rá, ha van olyan. Más
                    fejlesztők valószínűleg már találkoztak hasonló problémával.
                </Paragraph>
            </Article>
            <Article>
                <h1>Összefoglalás</h1>

                <Paragraph>
                    Most már vannak ismereteid a cross browser HTML és CSS
                    problémák fő típusairól, amelyekkel találkozni fogsz a
                    webfejlesztés során és, hogy, hogyan javítsd ki őket arról
                    is.
                </Paragraph>
            </Article>
            Now you should be familiar with the main types of cross browser HTML
            and CSS problems that you'll meet in web development, and how to go
            about fixing them.
        </div>
    );
}
