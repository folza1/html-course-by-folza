import React from 'react';
import Article from "../../REACT/article/Article.jsx";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Note from "../../REACT/note/Note.jsx";

export default function Understand_Web_Development_Tools() {

    return (
        <div className="container">
            <h1>Megérteni a kliens oldali webfejlesztő eszközöket</h1>
            <Article>
                <Paragraph>
                    A kliens oldali eszközkezelés megfélemlítő lehet, de ennek a cikksorozatnak a célja, hogy
                    illusztrálja a szándékát néhány legnépszerűbb kliens oldali eszköztípusnak, elmagyarázza az
                    eszközöket
                    melyeket egymáshoz láncolhatsz, hogyan telepítsd őket csomagkezelő használatával és hogyan irányítsd
                    őket parancssorból. Majd befejezzük egy komplett eszközlánccal, ami megmutatja neked, hogyan válj
                    termelékennyé.
                </Paragraph>
            </Article>
            <Article>
                <h1>Előfeltételek</h1>
                <Paragraph>
                    Először meg kellene tanulnod az alapjait a <a target="_blank"
                                                                  href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML</a>, <a
                    target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS</a> és a <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">Javascript</a> nyelveknek mielőtt
                    megpróbálnád
                    használni az itt részletezett eszközöket.
                </Paragraph>
            </Article>
            <Article>
                <h1>Útmutatók</h1>

                <Paragraph>
                    <a className="block" target="_blank"
                       href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Overview">1.
                        Kliens oldali eszközök átnézése</a>
                    Ebben a cikkben átnézzük a modern web eszközöket, milyen eszközök elérhetők és hol fogsz velük
                    találkozni a webfejlesztés életciklusa során és hogyan segíthet neked egy egyedi eszköz.
                </Paragraph>

                <Paragraph>
                    <a className="block" target="_blank"
                       href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line">2.
                        Parancssor gyorstalpaló</a>
                    A fejlesztési folyamat során kétségtelenül szükséged lesz parancsokat futtatnod a terminálban vagy a
                    parancssorban (tulajdonképpen a kettő ugyanaz). Ebben a cikkben bevezetést kapsz a terminál-hoz, az
                    elengedhetetlen parancsokhoz amelyeket majd beleírsz, hogyan láncolj parancsokat egymáshoz és adj
                    hozzá saját parancssor interfész (CLI) eszközöket.
                </Paragraph>

                <Paragraph>
                    <a className="block" target="_blank"
                       href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management">3.
                        Csomagkezelés alapok</a>
                    Ebben a cikkben belenézünk a csomagkezelőkbe bizonyos részletességgel, hogy megértsük hogyan
                    használhatjuk őket a saját projektünkben, hogyan installálhatjuk a projekt eszköz függőségeket,
                    hogyan tarthatjuk naprakészen és még más dolgokat.
                </Paragraph>

                <Paragraph>
                    <a className="block" target="_blank"
                       href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Introducing_complete_toolchain">4.
                        Egy komplett eszközlánc bemutatása</a>
                    Az sorozat utolsó két cikkében megszilárdítjuk az eszközökről való tudásodat, úgy hogy végigmegyünk
                    egy példával az eszközlánc építés folyamatán. Felállítunk egy fejlesztői környezetet és adunk hozzá
                    eszközöket, hogy telepítsük az app-ot a Netlify-ra.
                </Paragraph>

                <Paragraph>
                    <a className="block" target="_blank"
                       href="">5.
                        Az alkalmazásunk telepítése</a>
                    Az sorozat utolsó cikkében, fogjuk a példa eszközláncot amit felépítettünk az előző cikkben és
                    telepítjük vele az app-unkat. Felrakjuk a kódot GitHub-ra, deploy-oljuk a Netlify segítségével és
                    még azt is megmutatjuk, hogyan adj hozzá egy egyszerű folyamatot a teszthez.
                </Paragraph>
            </Article>
        </div>
    );
}
