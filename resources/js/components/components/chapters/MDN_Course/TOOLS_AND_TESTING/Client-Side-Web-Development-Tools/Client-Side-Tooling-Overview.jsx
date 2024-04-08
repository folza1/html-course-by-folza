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
                    Alapismeretek a HTML, CSS, és Javascript nyelvekkel.
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
        </div>
    );
}
