import React from "react";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import CodeDisplay from "../../components/CodeDisplay.jsx";

export default function Deploying_Our_App() {
    return (
        <div className="container">
            <h1>Az alkalmazás telepítése (deploy-olása)</h1>
            <Paragraph>
                Az utolsó cikkben a sorozatból, fogjuk a példa eszközláncunkat,
                amit felépítettünk az előző fejezetben és telepítjük vele a
                példa applikációnkat. A kódot felnyomjuk (push-oljuk,
                feltöltjük) a GitHub-ra és telepítjük a Netlify használatával és
                még azt is megmutatjuk, hogyan adjunk, hozzá egyszerű tesztet a
                folyamathoz.
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
                    nyelvekkel.
                </Paragraph>
                <Paragraph>
                    <div className="bold inline mr-1">Cél:</div>
                    Befejezni a komplett esettanulmányt az eszközlánccal
                    fókuszálva az alkalmazás telepítésére.
                </Paragraph>
            </Article>
            <Article>
                <h1>Fejlesztés után</h1>
                <Paragraph>
                    Sok probléma merülhet fel, amit meg kell oldanunk a projekt
                    életciklusának ebben a szakaszában. Például fontos, hogy
                    készítsünk egy eszközláncot amely kezeli ezeket a
                    problémákat olyan módon, hogy a lehető legkevesebb manuális
                    közbeavatkozást igényeljen amennyire csak lehetséges.
                </Paragraph>
                <Paragraph>
                    Itt van néhány dolog amit fontolóra kell venni ehhez a
                    projekthez:
                </Paragraph>
                <Paragraph>
                    <ul className="ml-1">
                        <li>
                            El kell készíteni a produkcióhoz a build-et:
                            Biztosítani kell, hogy a fájlok minimalizálva
                            legyenek, darabolva (chunked) legyenek, a
                            tree-shaking legyen alkalmazva és hogy a
                            programverziók "cache-busted"-elve legyenek.
                        </li>
                        <li>
                            Tesztek futtatása: Ezek lehetnek olyan tesztek,
                            amelyek onnan kezdődnek, hogy "a kód formázva van-e
                            megfelelően" és odáig, hogy "azt csinálja-e a kód
                            amit elvárok tőle" és biztosítani, hogy a sikertelen
                            tesztek megakadályozzák a deployment-et
                            (telepítést).
                        </li>
                        <li>
                            Telepíteni a frissített kód-ot az élő URL-re: Vagy
                            először egy tesz URL-re telepíteni, hogy
                            megtekintsük először, hogy minden rendben van-e?
                        </li>
                    </ul>
                </Paragraph>
                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    <Paragraph>
                        A "cache busting" egy új kifejezés, amivel még nem
                        találkoztunk ezelőtt ebben a modulban. Ez egy stratégia,
                        amivel megkerülhetjük a böngésző saját cache
                        mechanizmusát, amely kényszeríti a böngészőt, hogy
                        töltse le a kódod új verzióját. A Parcel és több más
                        eszköz is egyedi fájlneveket fog generálni minden egyes
                        build-elésnél. Ezek az egyedi fájlnevek újabbak lesznek
                        a cache-ben lévőkhöz képest, így mindig az újabb kódot
                        fogja megjeleníteni a böngésző, minden esetben amikor
                        frissítve van a deploy-olt kódod.
                    </Paragraph>
                </Note>
                <Paragraph>
                    A fenti feladatok további feladatokká szedhetők szét.
                    Jegyezd meg, hogy a legtöbb webfejlesztő csapatnak
                    meglesznek a saját kifejezései és folyamatai legalább a
                    fejlesztés utáni fázis néhány részében.
                </Paragraph>
                <Paragraph>
                    Ehhez a projekthez a{" "}
                    <a href="https://www.netlify.com/" target="_blank">
                        Netlify
                    </a>
                    -t fogjuk használni, amely csodálatos statikus hosting
                    szolgáltatást nyújt a projektünkhöz. A Netlify hostingot
                    nyújt vagy még spcifikusabban egy URL-t, hogy megnézd a
                    projektet online és, hogy megoszthasd azt a barátaiddal, a
                    családdal vagy a kollégákkal.
                </Paragraph>
                <Paragraph>
                    Telepíteni egy hosting szerverre, a projekt életciklusának a
                    végén szokott lenni, de olyan szolgáltatásokkal, mint a
                    Netlify alacsonyan lehet tartani a telepítések (deployments)
                    költségét, mind pénzügyi értelemben, mind időgazdálkodás
                    szempontjából, hogy mennyi időbe is telik egy telepítés. A
                    Netlify-al az is lehetséges, hogy telepítsd a projektet már
                    a fejlesztés során azért, hogy megoszthasd a munkád, hogyan
                    halad vagy, hogy kiadhass egy pre-release-t (egy előzetest a
                    projektről) valamilyen más célból.
                </Paragraph>
                <Paragraph>
                    A Netlify más dolgok mellett megengedi neked, hogy futtass
                    deployment (telepítés) előtti feladatokat, amely a mi
                    esetünkben azt jelenti, hogy az összess kód productió build
                    (építés) folyamatai a Netlify-on belül lesznek teljesítve és
                    ha a build sikeres, a weboldal változásai deploy-olva
                    (telepítve) lesznek a hosting szerveren.
                </Paragraph>
                <Paragraph>
                    Bár a Netlify egy{" "}
                    <a href="https://app.netlify.com/drop" target="_blank">
                        drag and drop (húzd és dobd)
                    </a>{" "}
                    deploy szolgáltatást nyújt, mi új deployment-et (telepítést)
                    szándékozunk végrehajtani a Netlify-ra minden egyes
                    alkalommal, amikor a GitHub repo-ba push-olunk (feltöltünk).
                </Paragraph>
                <Paragraph>
                    Ezek pontosan azok a fajta összekapcsolt szolgáltatások,
                    amelyekre ösztönöztünk téged, hogy nézz utána, amikor
                    eldöntöd milyen eszközláncot építesz fel magadnak. Tudjuk
                    commit-olni a kódunkat és push-olni GitHub-ra, aztán a
                    frissített kód automatikusan végrehajtja az egész build
                    rutint. Ha minden jól megy, kapunk egy élő automatikusan
                    változtatásokat deploy-oló (telepítő) rnedszert. Amit
                    tennünk kell hozzá az csak a "push" a GitHub adattárba.
                </Paragraph>

                <Paragraph>
                    Azonban be is kell ehhez állítanunk a dolgokat és ezután azt
                    fogjuk megnézni.
                </Paragraph>
            </Article>
            However, we do have to set these steps up, and we'll look at that
            now.
        </div>
    );
}
