import React from 'react';
import Article from "../../REACT/article/Article.jsx";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Note from "../../REACT/note/Note.jsx";

export default function Client_Side_Tooling_Overview() {

    return (
        <div className="container">
            <h1>Kliens oldali eszközkezelés átnézése</h1>
            <Article>
                <Paragraph>
                    Ebben a cikkben, átnézzük a modern web eszközeit, milyen eszközök elérhetőek és hol fogsz velük
                    találkozni a webfejlesztés életciklusa során és hogyan találhatunk segítséget egyes eszközökhöz.
                </Paragraph>
            </Article>
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
                    Megérteni milyen típusú kliens oldali eszözök vannak és hogyan találhatjuk meg őket és vehetjük
                    hasznukat.
                </Paragraph>
            </Article>
            <Article>
                <h1>Nézzük meg a modern eszközöket</h1>
                <Paragraph>
                    Szoftvert írni a web-re még kifinomultabbá vált az évek során. Bár még tejlesen értelmes dolognak
                    tűnik írni HTML, CSS és Javascript kódot "kézzel", most vannak gazdagon olyan eszközök amelyeket
                    fejlesztők használni tudnak, hogy felgyorsítsák a weboldal, vagy alkalmazás felépítési folyamatát.
                </Paragraph>
                <Paragraph>
                    Van néhány nagyon jól felépített eszköz, amely mindennapivá vált a fejlesztő közösség között és új
                    eszközök vannak fejlesztés alatt és kiadva minden nap, hogy megoldjanak különleges problémákat.
                    Lehet úgy találod, hogy írsz magadnak egy darab szoftvert a saját fejlesztési folyamatod során, hogy
                    megoldj egy különleges problémát, amit még a jelenlegi eszközök nem tudnak kezelni.
                </Paragraph>
                <Paragraph>
                    Könnyen elveszhetünk a nagy számú eszközben, amit felhasználhatunk egy projekt során. Egy egyszerű
                    konfigurációs fájl egy eszközhöz mint a <a target="_blank"
                                                               href="https://webpack.js.org/">Webpack</a> lehet több
                    száz sor hosszú, amelyek többsége
                    varázslatos, és látszólag elvégzik a feladatukat, de amelyeket csak egy mester mérnök ért meg
                    teljesen!
                </Paragraph>
                <Paragraph>
                    Ídőről időre még a legtapasztaltabb webfejlesztő is benntragad egy eszközproblémában. Lehetséges,
                    hogy elveszteget órákat eszköz pipeline-okat próbálva működésre bírni még azelőtt, hogy egy sor
                    kódot írt volna. Ha a múltban úgy találtad, hogy problémáid vannak, akkor ne aggódj - nem vagy
                    egyedül.
                </Paragraph>
                <Paragraph>
                    Ebben a cikkben, nem válaszolunk meg minden kérdést a web eszközkezelésről, de adunk egy hasznos
                    kezdő pontot az alapok megértéséhez, amelyre építhetsz. Mint bármelyik komplex téma, jó ha kicsiben
                    kezded és fokozatosan fejleszted magad előrehaladottabb használat felé.
                </Paragraph>
            </Article>
            <Article>
                <h1>A modern eszköz ökoszisztéma</h1>
                <Paragraph>
                    A mai fejlesztői eszköz ökoszisztéma hetalmas, szóval hasznos, ha van egy szélesebb rálátásunk
                    arról milyen főbb problémákat oldanak meg. Ha beírod a kedvenc keresődbe a "front-end fejlesztői
                    eszközök"-et hatalmas számú találatot fogsz látni, szövegszerkesztőtől kezdve, a böngészőkig, az
                    olyan fajta tollig amivel jegyzeteket készíthetsz.
                </Paragraph>
                <Paragraph>
                    Bár a szövegszerkesztőd választása egy eszköz választás, ez a cikk tovább is megy, fókuszálva olyan
                    eszközökre amelyek segítenek még hatékonyabb kód szerkesztésére.
                </Paragraph>
                <Paragraph>
                    Magasabb szintről nézve, ebbe a három kategóriába teheted a kliens oldali eszközöket az általuk
                    megoldott problémák szerint:
                    <li>Biztonsági háló - Eszközök melyek hasznosak a kód fejlesztés során</li>
                    <li>Transzformáció - Eszközök amelyek átalakítják a kódot valamilyen módon, pl. átfordítani egy
                        középszintű nyelvet Javascript-té amit a böngésző megért
                    </li>
                    <li>Fejlesztés utáni - Eszközök melyek hasznosak a megírt kód után, mit a tesztelés és a telepítő
                        eszközök
                    </li>
                </Paragraph>
                <Paragraph>
                    Most nézzük meg egyesével őket egy kicsit részletesebben:
                </Paragraph>

                <h2>Biztonsági háló></h2>
                <Paragraph>
                    Ezek az eszközök amelyekkel a kód írása egy kicsit jobb.
                </Paragraph>
            </Article>
        </div>
    );
}
