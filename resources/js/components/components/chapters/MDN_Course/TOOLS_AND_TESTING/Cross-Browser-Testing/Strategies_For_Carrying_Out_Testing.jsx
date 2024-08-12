import React from "react";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import Warning from "../../REACT/note/Warning.jsx";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";
import CodeDisplay from "../../components/CodeDisplay.jsx";
import analytics from "./img/1.analytics.png";
import virtualBoxImage from "./img/2.virtualBoxImage.png";
import installDisk from "./img/3.installDisk.png";
import virtualMachineRunning from "./img/4.virtual_machine_running.png";

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

                <h3>A végső támogatási táblázat</h3>

                <Paragraph>
                    Szóval akkor a támogatási táblázatunk a következőképpen fog
                    kinézni:
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
                        <li>
                            C-osztály: Opera és más kevésbé elterjedt böngészők
                        </li>
                    </ol>
                </Paragraph>
            </Article>
            <Article>
                <h1>Mit fogsz tesztelni</h1>

                <Paragraph>
                    Amikor a kódbázisodhoz hozzáadás történik, annak szüksége
                    van tesztelésre és mielőtt elkezded letesztelni írnod
                    kellene egy listát a tesztelés követelményeiről amelyet el
                    is kell fogadtatni valakivel. Ezek a követelmények lehetnek
                    vizuálisak vagy funkcionálisak. A kettő kombinációjából
                    készíteni lehet egy használható weboldal jellemzőt.
                </Paragraph>

                <Paragraph>
                    Figyeld meg a következő példát (
                    <a
                        href="https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html"
                        target="_blank"
                    >
                        itt a forráskódja
                    </a>{" "}
                    és{" "}
                    <a
                        href="https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/strategies/hidden-info-panel.html"
                        target="_blank"
                    >
                        itt pedig élőben tekintheted meg
                    </a>
                    ):
                </Paragraph>

                <Paragraph>
                    Ennek a funkciónak a tesztelési feltételei a következőképpen
                    írhatók fel:
                </Paragraph>

                <Paragraph>
                    A és B osztály:
                    <ul className="ml-2">
                        <li>
                            A gombnak aktiválhatóvá kell lennie a felhasználó
                            elsődleges vezérlő mehanizmusa által, bármi is az,
                            abba beletartozik az egér, a billentyűzet és az
                            érintés.
                        </li>
                        <li>
                            A kapcsoló (toggle) gombnak meg
                            kelljeleníteni/elrejteni az információ dobozt.
                        </li>
                        <li>A szövegnek olvashatónak kell lennie.</li>
                        <li>
                            A látásában károsodott felhasználók, akik
                            képernyőolvasót használnak hozzá kell, hogy férjenek
                            a szöveghez.
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    A osztály:
                    <ul className="ml-2">
                        <li>
                            Az információ doboznak simán kell animálódnia amikor
                            feltűnik/eltűnik.
                        </li>
                        <li>
                            A színátmenetnek és a szöveg árnyékának feltűnőnek
                            kell lennie, hogy növelje a doboz láthatóságát.
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    Talán észrevetted, hogy a gomb nem használható csak a
                    billentyűzettel. Erre megoldást találhatunk ha JavaScript-et
                    használunk, hogy végrehajtsunk billentyűzetes vezérlést a
                    kapcsoló gombhoz vagy használhatunk valamilyen más
                    megoldást.
                </Paragraph>

                <Paragraph>
                    Ezek a teszt kritériumok hasznosak mert:
                    <ul className="ml-2">
                        <li>
                            Ad neked egy néhány lépést, amelyeket követhetsz
                            amikor a teszteket hajtod végre.
                        </li>
                        <li>
                            Könnyen átváltoztathatók egy sor instrukcióvá a
                            felhasználói csoportok számára, hogy kövessék a
                            tesztek kivitelezésekor. Például: "próbáld meg
                            aktiválni a gombot az egér használatával, aztán a
                            billentyűzettel...". Erről bővebben olvashatsz majd
                            lejjebb a "
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies#user_testing"
                                target="_blank"
                            >
                                Felhasználói tesztelés
                            </a>
                            " részben.
                        </li>
                        <li>
                            Alapot adhat automatizált tesztek írásához. Könnyebb
                            teszteket írni akkor, ha pontosan tudod mit akarsz
                            tesztelni és mik a siker feltételei. Lásd a{" "}
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment#selenium"
                                target="_blank"
                            >
                                Selenium
                            </a>{" "}
                            részt, később a cikksorozatban.
                        </li>
                    </ul>
                </Paragraph>
            </Article>
            <Article>
                <h1>Rakjuk össze mindezt egy teszt példában</h1>
                <Paragraph>
                    Az egyik lehetőség, hogy kivitelezzük a böngésző teszteket,
                    ha magunk csináljuk azokat. Ha így döntünk, akkor
                    valószínűleg használhatjuk hozzá a jelenlegi fizikai
                    eszközünket és más emulált környezetek (emulátor vagy
                    virtuális gép) kombinációját.
                </Paragraph>

                <h2>Fizikai eszközök</h2>

                <Paragraph>
                    Általánosságban elmondható, hogy jobb ha, van egy igazi
                    eszközünk, amin fut a böngésző, amin tesztelni akarsz, mert
                    a legnagyobb pontosságot adja abban az értelemben, hogyan is
                    viselkedik majd rajta a program és átfogó képet ad a
                    felhasználói élményről. Valószínűleg akarsz majd valami
                    hasonlót a teszthez:
                    <ul className="ml-2">
                        <li>
                            Egy Mac-et böngészőkkel telepítve, ami lehet
                            Firefox, Chrome, Opera és Safari.
                        </li>
                        <li>
                            Egy Windows PC-t telepített böngészőkkel a teszthez,
                            ami lehet Edge, Internet Explorer, Chrome, Firefox
                            és Opera.
                        </li>
                        <li>
                            Egy jobb Android telefon és táblagép a teszthez
                            szükséges böngészővel telepítve, amelybe
                            beletartozik a Chrome, Firefox és Opera Mini az
                            Android-hoz és a gyári Android böngésző.
                        </li>
                        <li>
                            Egy jobb iOS telefon és táblagép a számodra
                            szükséges böngészőkkel telepítve, amelybe
                            beletartozik az iOS Safari és Chrome, Firefox és az
                            Opera Mini az iOS-hez.
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    A következők is jó lehetőségek, ha megvannak:
                    <ul className="ml-2">
                        <li>
                            Egy Linux PC, ha különösen Linux OS-en futó
                            böngészőket akarsz tesztelni. A Linux felhasználók
                            gyakran használnak Firefox, Opera és Chrome
                            böngészőt. Ha csak egy géped van, megfontolhatod a
                            "dual boot" készítését amellyel külön partíción
                            futtathatsz Linux és Windows operációs rendszert
                            ugyanazon a fizikai gépen. Az Ubuntu telepítővel
                            egész egyszerűen beállítható. Lásd a{" "}
                            <a
                                href="https://help.ubuntu.com/community/WindowsDualBoot"
                                target="_blank"
                            >
                                WindowsDualBoot
                            </a>{" "}
                            részt további segítségért.
                        </li>
                        <li>
                            Egy pár rosszabb képességű mobil eszköz, így
                            tesztelni tudod az olyan összetevők teljesítményét,
                            mint az animációkat a kisebb képességű
                            processzorokon.
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    A fő munkagépeden helyet kell taláni más speciális célú
                    telepített eszközöknek, mint a akadálymentesítés ellenőrző
                    eszközök, képernyő olvasók, emulátorok és virtuális gépek.
                </Paragraph>

                <Paragraph>
                    Néhány nagyobb cégnek vannak eszköz laborjai amelyek nagy
                    választékot tartalmaznak különböző készülékből és képessé
                    teszik a fejlesztőket, hogy levadásszák a hibákat a nagyon
                    különleges böngésző/készülék kombináció esetén. Kisebb cégek
                    és egyének általában nem engedhetik meg maguknak a
                    kifinomult laborokat, így kisebb laborokkal, emulátorokkal,
                    virtuális gépekkel és fizetős tesztelő alkalmazásokkal
                    dolgoznak.
                </Paragraph>

                <Paragraph>
                    Részletesebben foglalkozunk lejjebb a lehetőségekkel.
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        Van néhány nyilvánosan elérhető készülék labor. Nézd meg
                        az{" "}
                        <a
                            href="https://www.smashingmagazine.com/2016/11/worlds-best-open-device-labs/"
                            target="_blank"
                        >
                            Open Device Labs
                        </a>{" "}
                        részleteit.
                    </Paragraph>
                </Note>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        Amit még meg kell néznünk az a hozzáférhetőség
                        fogyatékkal élők számára. Sok hasznos eszköz van amit
                        telepíthetsz annak a tesztelésére, de fogunk is beszélni
                        róla egy cikkben később ebben a kurzusban.
                    </Paragraph>
                </Note>

                <h2>Emulátorok</h2>

                <Paragraph>
                    Az emulátorok alapjában véve programok melyek futnak a
                    számítógépeden és emulálnak egy készüléket vagy egy bizonyos
                    készülék állapotot, lehetővé téve neked a tesztelést még
                    kényelmesebb módon, mint fizikailag birtokolni egy bizonyos
                    hardver/szoftver kombinációt.
                </Paragraph>

                <Paragraph>
                    Egy emulátor lehet olyan egyszerű, mint egy készülék
                    állapotának a tesztelése. Például, ha szeretnéd tesztelni
                    gyorsan a szélességet és a magasságot a responsive
                    megjelenésedhez, használhatod a Firefox Responsive Design
                    Mode-ot. A Safari-nak is van egy hasonló módja amelyet
                    aktiválhatsz a Safari &gt; Preferences résznél, aztán nézd a
                    Show Develop menüt és válaszd a Develop &gt; Enter
                    Responsive Design Mode-ot. A Chrome-nak is van egy hasonló
                    módja, amelyet aktiválhatsz a Device mode-ban (lásd a{" "}
                    <a
                        href="https://developer.chrome.com/docs/devtools/device-mode/"
                        target="_blank"
                    >
                        Simulate Mobile Devices with Device Mode
                    </a>
                    ).
                </Paragraph>

                <Paragraph>
                    Legtöbbször azonban telepíteni kell valamilyen emulátort. A
                    legnépszerűbb készülékek/böngészők, amelyekre teszteket
                    akarsz a következők:
                    <ul className="ml-2">
                        <li>
                            A hivatalos{" "}
                            <a
                                href="https://developer.android.com/studio"
                                target="_blank"
                            >
                                Android Studio IDE
                            </a>
                            , amely Android alkalmazások fejlesztésére hivatott,
                            egy kicsit túlzás weboldalak teszteléséhez Google
                            Chrome-on vagy a régi beépített Android böngészőn,
                            viszont egy{" "}
                            <a
                                href="https://developer.android.com/studio/run/emulator.html"
                                target="_blank"
                            >
                                robosztus emulátort
                            </a>{" "}
                            tartalmaz. Ha szeretnél valami kevésbé komoly
                            eszközt tesztelésre az{" "}
                            <a href="https://www.andyroid.net/" target="_blank">
                                Andy
                            </a>{" "}
                            egy jó választás lehet Windows-ra és Mac-re.
                        </li>
                        <li>
                            Az Apple támogat egy alkalmazást a{" "}
                            <a
                                href="https://help.apple.com/simulator/mac/current/"
                                target="_blank"
                            >
                                Simulator
                            </a>
                            -t, amely az{" "}
                            <a
                                href="https://developer.apple.com/xcode/"
                                target="_blank"
                            >
                                XCode
                            </a>{" "}
                            fejlesztői környezeten felül működik és emulál
                            iPad/iPhone/Apple Watch/Apple TV készülékeket.
                            Tartalmazza a natív iOS Safari böngészőt. Azonban
                            sajnos csak Mac-en fut.
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    Gyakran találhatsz szimulátorokat más mobil készülék
                    környezetekhez is, mint például:
                    <ul className="ml-2">
                        <li>
                            Emulálhatod az{" "}
                            <a
                                href="https://blogs.opera.com/news/"
                                target="_blank"
                            >
                                Opera Mini
                            </a>
                            -t is ha úgy tartja kedved.
                        </li>
                    </ul>
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        Sok emulátorhoz virtuális gép használata szükséges.
                        Ebben az esetben, instrukciók gyakran vannak és/vagy a
                        virtuális gép integrálva van az emulátor telepítőjében.
                    </Paragraph>
                </Note>

                <h2>Virtuális gépek</h2>

                <Paragraph>
                    A virtuális gépek olyan alkalmazások, amelyek a személyi
                    számítógépen futnak és lehetővé teszi, hogy emulálj egy
                    egész operációs rendszert és mindegyik rekeszekbe van osztva
                    a saját virtuális merevlemezén (gyakran egy nagy fájlként
                    jelennek meg a host gép merevlemezén). Számos népszerű
                    virtuális gép alkalmazás elérhető, mint a{" "}
                    <a href="https://www.parallels.com/" target="_blank">
                        Parallels
                    </a>
                    ,{" "}
                    <a href="https://www.vmware.com/" target="_blank">
                        VMWare
                    </a>
                    és a{" "}
                    <a
                        href="https://www.virtualbox.org/wiki/Downloads"
                        target="_blank"
                    >
                        Virtual Box
                    </a>
                    . Mi személyesen a legutóbbit használjuk, mivel ingyenes.
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        Nagy merevlemez tárhely szükséges a virtuális gepeken
                        való emulálás futtatásához és minden egyes operációs
                        rendszer amit emulálsz sok memóriát igényel. Ki kell
                        választani a merevlemezen a foglalni kívánt területet
                        minden telepítéskor. Lehet elég hozzá 10GB, de néhány
                        esetben 50GB vagy több tárhely ajánlott, így az
                        operációs rendszer megfelelően futhat a gépen. A jó
                        választás lehet sok virtuális gép alkalmazásnál, hogy
                        beállítunk egy{" "}
                        <span className="bold">
                            dinamikusan változtatható felhasználású
                        </span>{" "}
                        merevlemezt, amellyel a foglalt terület éppen nő vagy
                        csökken a szükséges használattól függően.
                    </Paragraph>
                </Note>

                <Paragraph>
                    Hogy használd a Virtual Box-ot szükséged lesz ezekre:
                    <ul className="ml-2">
                        <li>
                            Kellesz majd az emulálni kívánt operációs rendszer
                            telepítő lemeze vagy egy ISO fájl az emulációhoz. A
                            Virtual Box nem szolgáltatja hozzá a telepítőt. A
                            legtöbb Windows típusú OS-ek kereskedelmi
                            forgalomban kaphatóak, amelyek nem terjeszhetők
                            szabadon.
                        </li>
                        <li>
                            <a
                                href="https://www.virtualbox.org/wiki/Downloads"
                                target="_blank"
                            >
                                Töltsd le a Virtual Box telepítőt
                            </a>{" "}
                            és telepítsd azt.
                        </li>
                        <li>
                            Nyisd meg az alkalmazást és a következő nézet tárul
                            majd eléd:
                            <div className="image-container">
                                <img
                                    src={virtualBoxImage}
                                    alt="Virtual Box Starter View"
                                />
                            </div>
                        </li>
                        <li>
                            Hogy készítsünk egy virtuális gépet, meg kell nyomni
                            a <span className="italic">New</span> gombot a
                            bal-felső sarokban.
                        </li>
                        <li>
                            Kövesd a lépéseket és töltsd ki a következő
                            párbeszédpaneleket, ahogy neked megfelelő.
                            <ol className="ml-2">
                                <li>Adj nevet az új virtuális gépednek.</li>
                                <li>
                                    Válaszd ki milyen operációs rendszert és
                                    verziót akarsz telepíteni rá.
                                </li>
                                <li>
                                    Állítsd be mennyi RAM-ot akarsz hozzá (mint
                                    például 2GB-ot vagy 2048MB-ot vagy valami
                                    hasonlót).
                                </li>
                                <li>
                                    Hozz létre virtuális merevlemezt (használd
                                    az alapértelmezettet a{" "}
                                    <span className="italic">
                                        Create a virtual hard disk now
                                    </span>
                                    ,{" "}
                                    <span className="italic">
                                        VDI(virtual disk image)
                                    </span>{" "}
                                    és a{" "}
                                    <span className="italic">
                                        Dynamically allocated
                                    </span>{" "}
                                    párbeszédpanelekkel.
                                </li>
                                <li>
                                    Válaszd ki a fájl helyét és a virtuális
                                    merevlemez méretét (válassz egy értelmes
                                    nevet neki és olyan helyet, ami megfelel
                                    neki, adj neki 50GB körüli méretet vagy,
                                    amilyet megfelelőnek tartasz speciálisabb
                                    esetben).
                                </li>
                            </ol>
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    Most ezek után egy új virtuális gépnek látszódnia kell a bal
                    oldali menüben a Virtual Box felhasználói felület ablakban.
                    Ha kétszer kattintasz rá megnyithatod és boot-olja a
                    virtuális gépet, de még nincsen operációs rendszer (OS)
                    telepítve rá. Ebben az esetben szükséged lesz kiválasztani
                    egy telepítő lemezképet vagy lemezt és aztán futni fog az OS
                    telepítő mint egy fizikai gépen.
                </Paragraph>

                <div className="image-container">
                    <img src={installDisk} alt="Install From ISO or disk" />
                </div>

                <Warning>
                    <div className="bold inline mr-1">Figyelmeztetés:</div>
                    <Paragraph>
                        A telepítéshez meg kell, hogy legyen az OS képe, amit a
                        virtuális gépre szeretnél telepíteni. Ha telepítés
                        közben meggondolod magad és visszavonod a telepítést,
                        akkor a virtuális gép használhatatlan lesz, így törölnöd
                        kell és újra el kell készítened. Nem nagy probléma, de
                        bosszantó lehet.
                    </Paragraph>
                </Warning>

                <Paragraph>
                    Miután a folyamat befejeződött, akkor már van egy virtuális
                    géped, amelyen fut egy operációs rendszer és mindez látszik
                    egy ablakban a host gépeden.
                </Paragraph>

                <div className="image-container">
                    <img
                        src={virtualMachineRunning}
                        alt="Virtual Machine Running in Window"
                    />
                </div>

                <Paragraph>
                    Úgy kell kezelned ezt a virtuális operációs rendszer
                    telepítést. mintha igazi telepítés lenne. Például
                    telepíthetsz böngészőket a teszteléshez vagy antivírus-t,
                    hogy megvédd a virtuális gépet a vírusoktól.
                </Paragraph>

                <Paragraph>
                    Ha van több virtuális géped az nagyon hasznos, különösen a
                    Windows IE/Edge teszteléshez a Windows-on. Nincs szükség
                    arra, hogy több verzió legyen telepítve az alapértelmezett
                    böngészőből egymás mellett, így lehet több virtuális gépet
                    használsz majd a különböző tesztek kezelésére, ha szükséges.
                    Például:
                    <ul className="ml-2">
                        <li>Windows 10 Edge 13-al</li>
                        <li>Windows 10 Edge 14-al</li>
                    </ul>
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        Egy másik jó dolog a virtuális gépekkel kapcsolatban,
                        hogy a virtuális lemez képek teljesen önállóak. Ha
                        csapatban dolgozol, készíthetsz egy virtuális lemez
                        képet róla, aztán másolva azt körbeadhatod. Csak
                        biztosítsd azt, hogy megvannak a szükséges liszenszek,
                        az összes Windows másolat futtatásához, vagy bármilyen
                        termékhez, amit futtatsz a virtuális gépen.
                    </Paragraph>
                </Note>
            </Article>
            Another good thing about virtual machines is that the virtual disk
            images are fairly self-contained. If you are working on a team, you
            can create one virtual disk image, then copy it and pass it around.
            Just make sure you have the required licenses to run all those
            copies of Windows or whatever else you are running if it is a
            licensed product.
        </div>
    );
}
