import React from "react";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";
import CodeDisplay from "../../components/CodeDisplay.jsx";
import analytics from "./img/1.analytics.png";

// import {} from "./cross_browser_testing_text.jsx";

export default function Strategies_For_Carrying_Out_Testing() {
    return (
        <div className="container">
            <h1>Stratégiák a tesztelés kivitelezéséhez</h1>
            <Paragraph>
                Ez a cikk elmagyarázza, hogyan csináld a cross-browser
                tesztelést: hogyan válassz böngészőket és eszközöket a
                teszteléshez, hogyan teszteld azokat böngészőket és eszközöket
                és, hogyan tesztelj felhasználói csoportokkal.
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
                    Megértést szerezni a magas szintű fogalmakról a
                    cross-browser teszteléssel kapcsolatban.
                </Paragraph>
            </Article>
            <Article>
                <h1>Kiválasztani a teszteléshez a böngészőket és eszközöket</h1>

                <Paragraph>
                    Mivel nem tesztelhetsz le minden kombinációt a böngészőkkel
                    és eszközökkel kapcsolatban, elég, ha azt biztosítod, hogy
                    az oldal működik a legfontosabbakon. A gyakorlati
                    alkalmazásban a "fontos" gyakran azt jelenti, hogy a
                    "célközönség által gyakran használt".
                </Paragraph>

                <Paragraph>
                    A böngészőket és eszközöket osztályozhatjuk az adni kívánt
                    támogatás alapján. Például:
                    <ol className="ml-2">
                        <li>
                            A-osztály: Gyakori/modern böngészők - Tudjuk róla,
                            hogy működőképes. Átfogó tesztelés és teljes
                            támogatás jár hozzájuk.
                        </li>
                        <li>
                            B-osztály: Régebbi/kevésbé működőképes böngészők -
                            Tudjuk róluk, hogy nem tudnak bizonyos dolgokat.
                            Tesztelni kell és még alapvetőbb tapasztalat
                            szükséges hozzá, amely teljes hozzáférést ad a főbb
                            szolgáltatásokhoz és információkhoz.
                        </li>
                        <li>
                            C-osztály: Ritka/ismeretlen böngészők - Ne teszteld,
                            de feltételezd, hogy működőképesek. Az oldalnak
                            működnie kellene.
                        </li>
                    </ol>
                </Paragraph>

                <Paragraph>
                    A következő részekben fel fogunk építeni egy táblázatot
                    amely támogatja ezt az elképzelést.
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        A Yahoo készített először ilyen megközelítést, ami elég
                        népszerű lett.{" "}
                        <a
                            href="https://github.com/yui/yui3/wiki/Graded-Browser-Support"
                            target="_blank"
                        >
                            Osztályozott böngésző támogatás
                        </a>{" "}
                        néven.
                    </Paragraph>
                </Note>

                <h2>
                    Határozd meg a célközönséged legelterjedtebben használt
                    böngészőjét
                </h2>

                <Paragraph>
                    Ez általában magában foglal tanult eszközök által szerzett
                    információkat, melyeket a felhasználók demográfiájából
                    nyertek. Például tegyük fel a felhasználóid Észak-Amerikából
                    és Nyugat-Európából származnak:
                </Paragraph>

                <Paragraph>
                    Egy gyors online keresés elmondja neked, hogy a legtöbb
                    ember Észak-Amerikában és Nyugat-Európában Windows vagy Mac
                    asztali vagy laptop számítógépet használ, ahol a fő böngésző
                    a Chrome, Firefox, Safari és Edge. Valószínűleg csak a
                    legújabb verziókra akarsz teszteket készíteni ezekre a
                    böngészőkre, mivel ezek rendszeresen frissítve vannak. Ezek
                    mind mehetnek az A-osztályú csoportba.
                </Paragraph>

                <Paragraph>
                    A legtöbb ember ebben a demográfiai kérdésben iOS vagy
                    Android telefont használnak, így valószínűleg a pár
                    legfrissebb iOS Safari böngészőt szeretnéd tesztelni és a
                    néhány legutóbbi beépített Android böngészőt, valamint az
                    iOS-re és Android-ra készült Chrome és Firefox-ot. Ideális
                    esetben telefonra és táblagépre is kellene tesztelni, hogy
                    megbizonyosodj a reszponzív megjelenés működőképességéről.
                </Paragraph>

                <Paragraph>
                    Az Opera Mini{" "}
                    <a href="https://blogs.opera.com/news/" target="_blank">
                        nem nagyon tud futtatni komplex JavaScript-et
                    </a>
                    , így a B kategóriába kell, hogy tegyük.
                </Paragraph>

                <Paragraph>
                    Így már van alapunk arra, hogy azokat a böngészőket
                    teszteljük, amelyeken a felhasználók böngészni fognak
                    elvárás szerint. Ez a következő táblázatot fogja
                    eredményezni:
                    <ol className="ml-2">
                        <li>
                            A-osztály: Chrome és Firefox a Windows/Mac
                            rendszerekhez, Safari a Mac-hez, Edge a Windows-hoz,
                            iOS Safari az iPhone/iPad-hoz, Android stock (gyári)
                            böngésző (legújabb két verzió)
                            telefonhoz/táblagéphez, Chrome és Firefox az Android
                            rendszerekhez (legújabb két verzió)
                            telefonhoz/táblagéphez
                        </li>
                        <li>B-osztály: Opera Mini</li>
                        <li>C-osztály: nincsen</li>
                    </ol>
                </Paragraph>

                <Paragraph>
                    Ha a célközönséged valahol máshol helyezkedik el, akkor a
                    népszerű böngészők és operációs rendszerek különbözhetnek a
                    fentitől.
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        A cégem CEO-ja (vezérigazgatója) Blackberry-t használ,
                        így jobb ha úgy fejlesztünk, hogy arra is jól nézzen ki
                        az oldal. Ilyeneket is fontolóra kell venni a fejlesztés
                        során.
                    </Paragraph>
                </Note>

                <h2>Böngésző statisztikák</h2>

                <Paragraph>
                    Néhány weboldal megmutatja melyek azok a böngészők, amelyek
                    népszerűek egy adott régióban. Például a{" "}
                    <a href="https://gs.statcounter.com/" target="_blank">
                        Statcounter
                    </a>
                    információkat ad a trendekről Észak-Amerika régióból.
                </Paragraph>

                <h2>Elemzések használata</h2>

                <Paragraph>
                    Egy pontosabb adatforrás, ha még nem ismersz ilyet, egy
                    elemző alkalmazás mint a{" "}
                    <a
                        href="https://marketingplatform.google.com/about/analytics/"
                        target="_blank"
                    >
                        Google Analytics
                    </a>
                    , amely elmondja neked pontosan milyen böngészővel nézték
                    meg az oldalad. Természetesen ehhez kell, hogy legyen egy
                    oldalad amin használhatod, szóval ez nem jó teljesen új
                    oldalakhoz.
                </Paragraph>

                <Paragraph>
                    Fontolóra veheted nyílt-forráskódú és magánélet központú
                    elemző platform-ok használatát, mint az{" "}
                    <a href="https://www.openwebanalytics.com/" target="_blank">
                        Open Web Analytics
                    </a>{" "}
                    és a{" "}
                    <a href="https://matomo.org/" target="_blank">
                        Matomo
                    </a>
                    . Ezekhez elvárt, hogy te host-old az analitikai
                    platform-ot.
                </Paragraph>

                <h3>A Google Analytics beállítása</h3>

                <Paragraph>
                    <ol className="ml-2">
                        <li>
                            Először is szükség van rá egy Google fiókra.
                            Használd a Google fiókod a Google Analytics-be való
                            belépéshez.
                        </li>
                        <li>
                            Válaszd a{" "}
                            <a
                                href="https://analytics.google.com/analytics/web/provision/#/provision"
                                target="_blank"
                            >
                                Google Analytics
                            </a>{" "}
                            lehetőséget és kattints a{" "}
                            <span className="italic">Sign Up</span>{" "}
                            (Regisztráció) gombra.
                        </li>
                        <li>
                            Add meg a weboldal/alkalmazás részleteit a
                            regisztráció oldalon. A legfontosabb rész az a
                            weboldal URL-je. Ez lesz az oldalad/alkalmazásod
                            gyökér URL-je.
                        </li>
                        <li>
                            Ha végeztél az űrlap kitöltésével, akkor nyomd meg a{" "}
                            <span className="italic">Get Tracking ID</span>{" "}
                            gombot, aztán fogadd el a szolgáltatás feltételeit,
                            amely feltűnik.
                        </li>
                        <li>
                            A következő oldal egy kis kód részletet és más
                            instrukciókat biztosít. Egy kezdő oldalhoz, amit
                            tenned kell az az, hogy másolod a{" "}
                            <span className="italic">Website tracking</span> kód
                            blokkot és beilleszted azt különböző oldalakon, ahol
                            mérni szeretnél az oldaladon a Google Analytics
                            segítségével. Elhelyezheted a blokkot a záró{" "}
                            <BgLightgray>&lt;/body&gt;</BgLightgray>
                            tag után vagy valahol egy megfelelő helyen, ahol nem
                            zavarja össze az alkalmazásod kódját.
                        </li>
                        <li>
                            Töltsd fel a változást a fejlesztői szerverre vagy
                            máshová, ahol szükséged van rá.
                        </li>
                    </ol>
                </Paragraph>

                <Paragraph>
                    És készen is! Most már az oldalad készen áll, hogy adatokat
                    küldjön elemzés céljára.
                </Paragraph>

                <h3>Az adatok elemzése</h3>

                <Paragraph>
                    Most már visszamehetsz az{" "}
                    <a
                        href="https://analytics.google.com/analytics/web/provision/#/provision"
                        target="_blank"
                    >
                        Analytics Web
                    </a>{" "}
                    kezdőoldalára és elkezdheted megnézegetni az adatokat,
                    amelyeket gyűjtött neked az oldalról (persze hagyni kell egy
                    kis időt míg adatokat gyűjt az oldalról természetesen).
                </Paragraph>

                <Paragraph>
                    Alapból ezt az oldalt fogod látni a website-odról készült
                    jelentéssel (riporttal):
                </Paragraph>

                <div className="image-container">
                    <img
                        src={analytics}
                        alt="Default Analytics Report Of Your Site"
                    />
                </div>

                <Paragraph>
                    Hatalmas méretű adatot láthatsz a Google Analytics
                    segítségével - személyre szabott jelentéseket különböző
                    kategóriákban stb - és most nincsen időnk mindegyiket
                    megvitatni. A{" "}
                    <a
                        href="https://support.google.com/analytics/answer/9304153?visit_id=637855964517698041-2103767437&rd=2"
                        target="_blank"
                    >
                        Kezdés az Analytics-el
                    </a>{" "}
                    hasznos utmutatókat nyújt a jelentésekkel és más dolgokkal
                    kapcsolatban a kezdők számára.
                </Paragraph>

                <Paragraph>
                    Megnézheted vele milyen böngészőket és operációs
                    rendszereket használnak a felhasználóid a jobb oldali
                    menüből kiválasztva.{" "}
                    <span className="italic">
                        Audience &gt; Technology &gt; Browser & OS
                    </span>
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        Amikor a Google Analytics-et használod, tudnod kell,
                        hogy vannak félrevezető következtetések. Például ha a
                        "Nincsenek Firefox Mobil felhasználóink" arra vezet,
                        hogy ne foglalkozzunk Firefox mobil támogatással.
                        Viszont, ha az oldal összeomlik egy Firefox mobil
                        eszközön, akkor nem is lesznek Firefox mobile
                        felhasználóid.
                    </Paragraph>
                </Note>

                <h3>Egyéb megfontolások</h3>

                <Paragraph>
                    A fogyatékkal élők számára biztosított hozzáférhetőséget
                    bele kell venni az A osztályú tesztelés követelményei közé.
                    Később taglaljuk pontosan mit is kell tesztelnünk egy
                    későbbi cikkben (
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility"
                        target="_blank"
                    >
                        Gyakori hozzáférhetőségi problémák kezelése
                    </a>
                    ).
                </Paragraph>

                <Paragraph>
                    Szituáció specifikus szükségleteknek is a tudatában kell
                    lenned. Például, ha a termék célpiacának az elsődleges
                    eszközei a mobil telefonok (legtöbbször azzal csatlakoznak
                    az internetre), akkor valószínűleg elsődlegesen mobil
                    böngészőket akarsz majd támogatni.
                </Paragraph>
            </Article>
            Also, you should be aware of situation-specific needs. For example,
            if your product targets a market where mobile phones are the primary
            means of accessing the internet, you will probably want to make
            mobile browser support a priority.
        </div>
    );
}
