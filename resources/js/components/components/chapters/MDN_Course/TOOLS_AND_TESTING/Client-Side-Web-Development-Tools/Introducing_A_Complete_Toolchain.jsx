import React from 'react';
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";

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
                ebben a cikkben és a következőben fogsz látni egy módja annak hogy működő eszközöket használj fel a
                projektedhez.
            </Paragraph>
        </div>
    )
};
