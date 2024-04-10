import React from 'react';
import Article from "../../REACT/article/Article.jsx";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Note from "../../REACT/note/Note.jsx";
import cmd_powershell from "./img/1.cmd_powershell.png";



export default function Command_Line_Crash_Course() {
    return (
        <div className="container">
            <h1>Paranccsor gyorstalpaló</h1>
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
                <h1>Üdvözöllek a terminálban</h1>
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

                <h2>Honnan jön a terminál?</h2>

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

                <h2>Hogyan néz ki a terminal?</h2>

                <Paragraph>
                    Alább látható néhány különböző megjelenésű terminál amivle találkozhatsz.
                </Paragraph>

                <Paragraph>
                    A következő képek megmutatják a parancssori prompt-okat Windows-on. Váaszthatsz "cmd"-t vagy
                    "powershell"-t, amelyet a start menüből futtathatsz beírva a program nevét.
                </Paragraph>
                <div className="image-container"><img src={cmd_powershell} alt="Cmd or Powershell"/></div>
            </Article>
        </div>
    )
}
