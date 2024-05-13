import React from 'react';
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import mini_site from "./img/4.mini_site.png";


export default function Introducing_A_Complete_Toolchain() {
    return (
        <div className="container">
            <h1 className="bold">Egy komplett eszközlánc bemutatása</h1>

            <Paragraph>
                A sorozat befejező pár cikkében meg fogjuk szilárdítani az eszközökről szóló tudásodat azzal,
                hogy végigvezetünk egy minta eszközlánc esettanulmányon. Végigmegyünk egy értelmes fejlesztői környezet
                beállításától kezdve, a transzformáló eszközökön keresztül az applikáció telepítéséig Netlify-ra. Ebben
                a cikkben bemutatjuk az esettanulmányt, beállítjuk a fejlesztői környezetet és beállítjuk a kód
                átalakító eszközöket.
            </Paragraph>

            <Article>
                <Paragraph>
                    <div className="bold inline mr-1">Előfeltételek:</div>
                    Alapismeretek a <a target="_blank"
                                       href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML</a>, <a
                    target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS</a> és a <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">Javascript</a> nyelvekkel.
                </Paragraph>

                <Paragraph>
                    <div className="bold inline mr-1">Cél:</div>
                    Megszilárdítani, amit eddig tanultunk azzal, hogy átveszünk egy komplett eszközlánc esettanulmányt.
                </Paragraph>
            </Article>

            <Paragraph>
                Tényleg végtelen számú kombináció van az eszközökből és a módjukból ahogyan használhatjuk őket, de amit
                ebben a cikkben és a következőben fogsz látni az egy módja annak hogy működő eszközöket használj fel a
                projektedhez.
            </Paragraph>

            <Note>
                <Paragraph>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    Érdemes azt is megjegyezni, hogy nem mindegyik eszköznek kell a parancssorban futnia ezek közül. Sok
                    mai kódszerkesztőnek mint a VS Code-nak vannak beépített támogató eszközei plugin-okon keresztül.
                </Paragraph>
            </Note>

            <Article>
                <h1>Az esettanulmányunk bemutatása</h1>

                <Paragraph>
                    Az eszközlánc amelyet elkészítünk ebben a cikkben egy mini oldalt fogunk elkészíteni amely adatot
                    listáz (egy <a href="https://api.nasa.gov/" target="_blank">NASA API-tól</a> kapja az adatot) olyan
                    potenciálisan veszélyes űrobjektumokról amelyek
                    veszélyeztetik az életünket itt a Föld-ön. Így néz ki az oldal:
                </Paragraph>

                <div className="image-container"><img src={mini_site} alt="Mini Site"/></div>

                <Paragraph>
                    Megtekintheted az oldalt élőben is a <a href="https://near-misses.netlify.app/"
                                                            target="_blank">near-misses.netlify.com</a> címen.
                </Paragraph>
            </Article>

            <Article>
                <h1>Eszközök melyeket használunk az eszközláncban</h1>

                <Paragraph>
                    Ebben a cikkben a következő eszközöket és funkciókat fogjuk használni:
                    <li>
                        A <a href="https://react.dev/learn/writing-markup-with-jsx" target="_blank">JSX</a>-et, egy <a
                        href="https://react.dev/" target="_blank">React</a>-hoz tartozó szintaxis gyűjtemény bővítményt
                        amely megengedi, hogy komponens
                        struktúrákat hozz létre a Javascript segítségével. Nem kell ismerned a React-ot, hogy kövesd ezt
                        a tananyagot, de benne lesz, hogy egy elképzelést adjunk arról hogyan lehet egy nem natív web
                        nyelvet integrálni az eszközláncba.
                    </li>
                    <li>
                        Használjuk a cikk írásakor legfrissebb Javascript funkciókat mint az <a
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import"
                        target="_blank">import</a
                    >-ot.
                    </li>
                    <li>
                        Hasznos fejlesztői eszközöket mint a <a href="https://prettier.io/" target="_blank">Prettier</a>-t
                        a formázáshoz és az <a href="https://eslint.org/" target="_blank">ESLint</a>-et a linteléshez.
                    </li>
                    <li>
                        <a href="https://postcss.org/" target="_blank">PostCSS</a>-t a CSS beágyazási képességekhez.
                    </li>
                    <li>
                        A <a href="https://parceljs.org/" target="_blank">Parcel</a>-t, hogy build-eljük és minimizáljuk
                        a kódunkat és hogy egy rakás configurációs
                        fájltartalmat írassunk automatikusan.
                    </li>
                    <li>
                        A <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub"
                             target="_blank">GitHub</a>-ot hogy menedzseljük a forráskódunkat.
                    </li>
                    <li>
                        A <a href="https://www.netlify.com/" target="_blank">Netlify</a>-t hogy automatizáljuk a
                        deployment (telepítési) folyamatot a webszerverre.
                    </li>
                </Paragraph>

                <Paragraph>
                    Lehetséges, hogy nem ismered a fenti funkciókat és eszközöket vagy, hogy mit is csinálnak, de ne
                    pánikolj - minden részét el fogjuk magyarázni, ahogyan haladunk a cikkben.
                </Paragraph>
            </Article>

            <Article>
                <h1>Eszközláncok és a vele született komplexitásuk</h1>

                <Paragraph>
                    Mint bármilyen láncban, ha több láncszem van a láncban akkor komplex-ebb és potenciálisan
                    törékenyebb is. Például nehezebb komfigurálni és könnyebb elrontani. Ellentétben, ha kevesebb
                    láncszem van akkor az eszközlánc ellenállóbb.
                </Paragraph>

                <Paragraph>
                    Minden web projekt különböző és gondosan fontolóra kell venned az eszközlánc milyen részei
                    szükségesek.
                </Paragraph>

                <Paragraph>
                    A legkisebb eszközlánc amelyben 1 láncszem van, amely nem kötődik semmihez sem. Akkor neked kell
                    kezelned a HTML kódot és vanilla JavaScript-et használsz, ami annyit tesz, hogy nem használsz
                    keretrendszert és köztes nyelveket és manuálisan töltesz fel mindent a szerverre a hosting-hoz.
                </Paragraph>

                <Paragraph>
                    Azonban a komplikáltabb szoftver összeállításokból nagy hasznunk lehet, amely egyszerűsíti a
                    fejlesztési folyamatot. Továbbá hozzáadhatod a teszteket is mielőtt telepítenéd az app-ot a
                    production szerverre, hogy biztosítsd a szoftver megfelelően működik. Ez már egy szükséges
                    eszközláncnak hangzik.
                </Paragraph>

                <Paragraph>
                    A minta projektben olyan eszközláncot fogunk használni amely kifejezetten a szoftver fejlesztést
                    fogja
                    megsegíteni és támogatja a technikai lehetőségeket a szoftver dizájn fázisa során. Azonban el fogunk
                    kerülni bármilyen felesleges eszközhasználatot, hogy a minimumon tartsuk a komplexitását a
                    projektnek.
                </Paragraph>

                <Paragraph>
                    Például használni fogunk olyan eszközt amivel minimalizálhatjuk az SVG fájlok méretét a build során.
                    Azonban ez a projekt csak 4 SVG képet tartalmaz, amelyeket az <a
                    href="https://www.npmjs.com/package/svgo" target="_blank">SVGO használatával minimalizálunk
                    manuálisan</a
> mielőtt hozzáadnánk a projekthez.
                </Paragraph>
            </Article>

            <Article>
                <h1>Egy pár előfeltétel</h1>
            </Article>
        </div>
    )
};
