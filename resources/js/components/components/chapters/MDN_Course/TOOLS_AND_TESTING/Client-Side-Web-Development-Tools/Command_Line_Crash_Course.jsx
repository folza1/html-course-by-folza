import React from 'react';
import Article from "../../REACT/article/Article.jsx";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Note from "../../REACT/note/Note.jsx";
import cmd_powershell from "./img/1.cmd_powershell.png";
import macos_terminal from "./img/2.macos_terminal.png";
import WSL from "./img/3.WSL.png";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";


export default function Command_Line_Crash_Course() {
    return (
        <div className="container">
            <h1 className="bold">Paranccsor gyorstalpaló</h1>
            <Paragraph>
                A fejlesztési folyamat során, kétségtelenül szükséged lesz kódokat futtatni a terminál-ban vagy a
                parancssorban, lényegében a kettő ugyan az. Ez a cikk ad egy bevezetőt a terminálról, az elengedhetetlen
                parancsokat, amiket bele kell majd írnod, hogyan láncold a parancsokat egymáshoz és hogyan add hozzá a
                saját parancssori interfész (CLI) eszközeidet.
            </Paragraph>

            <Article>
                <Paragraph>
                    <div className="bold inline">Előfeltételek:</div>
                    Alapismeretek a <a target="_blank"
                                       href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML</a>, <a
                    target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS</a> és a <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">Javascript</a> nyelvekkel.
                </Paragraph>
                <Paragraph>
                    <div className="bold inline">Cél:</div>
                    Megérteni mi is az a terminal/parancssor, milyen alap parancsokat kell megtanulnod és hogyan
                    telepíts új parancssori eszközöket.
                </Paragraph>
            </Article>

            <Article>
                <h1 className="bold">Üdvözöllek a terminálban</h1>
                <Paragraph>
                    A terminál egy szöveg interfész szöveg alapú programok futtatására. Ha használsz eszközöket a
                    webfejlesztéshez akkor közel biztos hogy meg fogod nyitni a terminált és futtatsz néhány parancsot,
                    hogy használd a kiválasztott eszközt. Gyakran úgy is fogsz velük találkozni hogy CLI eszközök
                    (command line interface eszközök).
                </Paragraph>

                <Paragraph>
                    Nagy számú eszköz használható a parancssorral. Sok már előre telepített a rendszereden, és egy
                    hatalmas számú eszköz telepíthető csomag regiszterekből. Csomag regiszterek olyanok mint az
                    applikáció boltok, de a legtöbb parancssor alapú eszköz és szoftver. Megnézzük, hogyan telepíthetünk
                    néhány eszközt később ebben a fejezetben, és a következő fejezetben fogunk tanulni a csomag
                    regiszterekről.
                </Paragraph>

                <Paragraph>
                    A legnagyobb kritika a parancssorral kapcsolatban a felhasználói élmény hiánya. Első ránézésre a
                    parancssor ijesztő élmány lehet: egy üres képernyő és egy villogó kurzor, nagyon kevés nyilvánvaló
                    segítség, mit is lehet csinálni vele.
                </Paragraph>

                <Paragraph>
                    Ránézésre nem sok mindenre képes, de nagyon sok mindent lehet csinálni vele és megígérjük hogy egy
                    kis gyakorlással és vezetéssel könnyebben lehet használni. Ezért írtuk ezt a fejezetet, hogy
                    segítsünk a kezdésben ezzel a látszólag barátságtalan környezettel.
                </Paragraph>

                <h2 className="bold">Honnan jön a terminál?</h2>

                <Paragraph>
                    A terminál az 1950-es 60-as évekből származik és az eredete nagyon hasonlít amira ma is használjuk,
                    amiért köszönetet is kellene mondanunk. Olvashatsz egy kicsit a történetéről a <a
                    href="https://en.wikipedia.org/wiki/Computer_terminal" target="_blank">Wikipédia
                    bevezetés Computer Terminal-ba</a> linken.
                </Paragraph>

                <Paragraph>
                    Azóta a temrinál állandó funkciója maradt az összes operációs rendszernek. Az asztali gépektől a
                    szervereken át a mikroszámítógépekig, mint a Raspberry PI Zero és még a mobiltelefokon is rajta van.
                    Közvetlen hozzáférést nyújt a számítógép alsóbb fájlrendszeréhez és alacsony szintű funkcióihoz, így
                    tehát nagyon hasznos komplex feladatok gyors elvégzésében ha tudod mit is csinálsz.
                </Paragraph>

                <Paragraph>
                    Nagyon hasznos automatizációhoz is például, ha felül akarjuk írni több száz fájl nevét azonnal,
                    mondjuk
                    "ch01-xxxx.png"-t "ch02-xxxx.png"-re. Ha ezt grafikus felhasználói interfésszel akarnánk megoldani,
                    akkor sok időbe telne.
                </Paragraph>

                <Paragraph>
                    Szóval a terminál nem fog eltűnni egyhamar!
                </Paragraph>

                <h2 className="bold">Hogyan néz ki a terminal?</h2>

                <Paragraph>
                    Ezalatt látható néhány különböző megjelenésű terminál amivle találkozhatsz.
                </Paragraph>

                <Paragraph>
                    A következő képek megmutatják a parancssori prompt-okat Windows-on. Váaszthatsz "cmd"-t vagy
                    "powershell"-t, amelyet a start menüből futtathatsz beírva a program nevét.
                </Paragraph>

                <div className="image-container"><img src={cmd_powershell} alt="Cmd or Powershell"/></div>

                <Paragraph>
                    Ezalatt pedig látható a macOS terminál applikáció.
                </Paragraph>

                <div className="image-container"><img src={macos_terminal} alt="Cmd or Powershell"/></div>

                <h2 className="bold">Hogyan férsz hozzá a terminálhoz?</h2>

                <Paragraph>
                    Sok fejlesztő ma Unix alapú eszközöket használ, mint a terminál és az eszközök amelyekkel elérheted
                    azt. Sok tutorial és eszköz amelyek ma léteznek támogatják a Unix alapú rendszereket, de nem kell
                    aggódni a legtöbb rendszeren elérhetőek. Ebben a szekcióban megnézzük, hogyan férhetünk hozzá a
                    terminálhoz az általad választott rendszeren.
                </Paragraph>

                <h3 className="bold">Linux/Unix</h3>

                <Paragraph>
                    Ahogy említettük az előbb a Linux/Unix rendszereken elérhető alapértelmezettként a terminál, más
                    alakalmazások mellett.
                </Paragraph>

                <h3 className="bold">MacOS</h3>

                <Paragraph>
                    A macOS-nek van egy rendszere melyet Darwin-nak neveznek amely a grafikus felhasználói interfész
                    alatt található. A Darwin az egy Unix szerű rendszer amely szolgáltatja a terminal-t és van
                    hozzáférése az alacsonyabb szintű eszközökhöz. A macOS Darwin legtöbb esetben azonos a Unix-al,
                    bizonyára elég jó ahhoz, hogy ne kelljen aggódni a vele készült munka során ebben a cikkben.
                </Paragraph>

                <Paragraph>
                    A teminal elérhető a macOS-en az Applications/Utilities/Terminal útvonalon.
                </Paragraph>

                <h3 className="bold">Windows</h3>

                <Paragraph>
                    Mint más programozó eszköz, használni a terminált vagy parancssort a Windows-on alapvetően nem olyan
                    könnyű mint más operációs rendszeren. De a dolgok egyre könnyebbek.
                </Paragraph>

                <Paragraph>
                    A Windows-nak megvolt sokáig a saját terminál szerű programja a cmd, a "command prompt", de ez
                    határozottan nem volt kompatibilis a Unix-os parancsokkal és egyenlő volt a régi stílusú Windows DOS
                    prompt-al.
                </Paragraph>

                <Paragraph>
                    Jobb programok léteznek már, hogy terminál szerű élményt nyújtsanak a Windows-on, mint a Powershell
                    (<a href="https://github.com/PowerShell/PowerShell" target="_blank">itt találsz telepítőt</a>) vagy
                    a Gitbash, amely a <a href="https://gitforwindows.org/" target="_blank">Windows-os git
                    eszköztár</a> része.
                </Paragraph>

                <Paragraph>
                    Azonban a legjobb választás a Windows-ra a modern napokban a Windows Subsystem for Linux (WSL), egy
                    kompatibilitási réteg amivel Linux operációs rendszereket lehet futtatni közvetlenül Windows 10-ből,
                    amely megengedi hogy "igazi terminál"-t futtass közvetlenül Windows-on, virtuális gép nélkül.
                </Paragraph>

                <Paragraph>
                    Ez közvetlenül telepíthető a Windows Store-ból ingyen. Minden információt megtalálsz a <a
                    target="_blank" href="https://learn.microsoft.com/en-gb/windows/wsl/">Windows
                    Subsystem for Linux Dokumentációban</a>.
                </Paragraph>

                <div className="image-container"><img src={WSL} alt="Windows Subsystem for Linux"/></div>

                <Paragraph>
                    Hogy melyiket válaszd Windows-ra, mi erősen ajánljuk a WSL telepítését. Használhatod az
                    alapértelmezett command prompt-ot (<BgLightgray>cmd</BgLightgray>)-t is és sok eszköz működni is fog
                    rendesen, de mindent
                    könnyebbnek fogsz találni ha Unix-os rendszerrel egyenértékű eszközt használsz.
                </Paragraph>

                <h3 className="bold">Mi a különbség a parancssor és a terminál között?</h3>

                <Paragraph>
                    Általánosságban, ezt a két kifejezést felcserélhetően használják. Technikailag, a terminál az egy
                    szoftver amely indul és csatlakozik a shell-hez. A shell a te session-öd és session környezeted ahol
                    olyan
                    dolgok, mint a prompt és a parancsikonok vannak személyre szabva. A parancssor az a szó szerinti sor
                    ahová beírod a parancsokat és ahol a kurzor villog.
                </Paragraph>

                <h2 className="bold">Használnod kell a terminált?</h2>

                <Paragraph>
                    Bár gazdagon lehet találni eszközöket amelyek elérhetőek a parancssorból, ha olyan eszközt
                    használsz, mint a Visual Studio Code ott is nagy számú bővítmény elérhető, amelyet lehet használni
                    mint terminal helyettesítőt anélkül, hogy terminált használnál közvetlenül. Azonban nem fogsz
                    találni
                    olyan kódszerkesztő bővítményt, amely mindent megcsinál amit szeretnél - szóval kell egy kis
                    tapasztalat a terminállal.
                </Paragraph>
            </Article>

            <Article>
                <h1 className="bold">Alapvető beépített terminal parancsok</h1>

                <Paragraph>
                    Eleget beszéltünk - gyerünk nézzünk pár terminál parancsot! Itt csak pár parancsot mutatunk be,
                    mellette az eszköz nevével:
                </Paragraph>

                <Paragraph>
                    Navigálás a számítógép fájlrendszerében alapvető feladatokkal mint létrehozás, másolás, átnevezés és
                    törlés:
                </Paragraph>

                <Paragraph>
                    <li>Mozogni a könyvtárstruktúrában: <BgLightgray>cd</BgLightgray></li>
                    <li>Mappa létrehozása: <BgLightgray>mkdir</BgLightgray></li>
                    <li>Fájl létrehozása (és a metadata-k módosítása): <BgLightgray>touch</BgLightgray></li>
                    <li>Fájl vagy mappa másolása: <BgLightgray>cp</BgLightgray></li>
                    <li>Fájl vagy mappa mozgatása: <BgLightgray>mv</BgLightgray></li>
                    <li>Fájl vagy mappa törlese: <BgLightgray>rm</BgLightgray></li>
                    <li>Fájlok letöltése URL-ről: <BgLightgray>curl</BgLightgray></li>
                    <li>Szótöredék keresése nagyobb szövegben: <BgLightgray>grep</BgLightgray></li>
                    <li>Fájl tartalmának megjelenítése
                        oldalakonként: <BgLightgray>less</BgLightgray>, <BgLightgray>cat</BgLightgray></li>
                    <li>Szöveg manipulálása (például az összes &lt;div&gt;-et le akarjuk cserélni &lt;article&gt;-re egy
                        HTML
                        fájlban): <BgLightgray>awk</BgLightgray>, <BgLightgray>tr</BgLightgray>, <BgLightgray>sed</BgLightgray>
                    </li>
                </Paragraph>
            </Article>

            <Article>
                <Note>
                    <div className="bold inline">Megjegyzés:</div>
                    Sok jó tutorial van a weben amely mélyebb betekintést ad a parancssorba - ez csak egy rövid
                    bevezető.
                </Note>
            </Article>

            <Article>
                Gyerünk haladjunk előre és használjunk néhány eszközt ezek közül a parancssorban! Mielőtt
                továbbmennél nyisd meg a saját terminál programod.
            </Article>
        </div>
    )
}
