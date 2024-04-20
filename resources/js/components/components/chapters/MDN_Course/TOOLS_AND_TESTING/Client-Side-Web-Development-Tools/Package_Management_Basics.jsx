import React from 'react';
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";

export default function Package_Management_Basics() {
    return (
        <div className="container">
            <h1 className="bold">A Csomagkezelés Alapjai</h1>
            <Paragraph>
                Ebben a cikkben részletesebben fogunk foglalkozni a csomagkezelőkkel, hogy megértsük, hogyan
                használhatjuk őket a saját projektünkben, hogyan telepítsünk projekt eszköz függőségeket, tartsuk őket
                naprakészen és még más dolgokat.
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
                    Megérteni mik is azok a csomagkezelők és csomag adattárak, miért van rájuk szükségünk és annak az
                    alapjai, hogy, hogyan használjuk őket.
                </Paragraph>
            </Article>

            <h1 className="bold">Egy függőség a projektedben</h1>

            <Article>
                <Paragraph>
                    Egy <div className="bold inline">függőség</div> egy harmadik féltől származó szoftver, amelyet
                    valószínűleg másvalaki írt és ideális esetben egy problémát old meg neked. A web projektednek lehet
                    több függősége is, egy sem vagy sok számú és a függőségeid lehet tartalmaznak alfüggőségeket is
                    amelyeket nem kell kifejezetten telepíteni tehát a függőségeidnek lehetnek saját függőségeik is.
                </Paragraph>

                <Paragraph>
                    Egy egyszerű példa egy hasznos függőségre, például amikor a projektednek szüksége van relatív
                    dátumokra olvasható formában. Lekódolhatod magadnak, de nagy esély van rá, hogy más már egyszer
                    megoldotta ezt a problémát. Miért is pazarolnád az időt azzal, hogy újra feltalálod a kereket?
                    Továbbá egy megbízható harmadik féltől származó függőség sok más különböző szituációban tesztelve
                    van, ami még robosztusabbá és a böngészők között kompatibilisabbá teszi nem úgy mint a te
                    megoldásodat.
                </Paragraph>

                <Paragraph>
                    A projekt függősége lehet egy egész Javascript könyvtár vagy keretrendszer mint a React vagy Vue
                    vagy egy nagyon kicsi segéd mint a dátum library, vagy lehet egy parancssor eszköz mint a Prettier
                    vagy az ESLint amelyekről korábban beszéltünk.
                </Paragraph>

                <Paragraph>
                    Modern build eszközök nélkül a függőségeket mint ez lehet
                    hogy <BgLightgray>&lt;script&gt;</BgLightgray> elemmel kell használni, de az nem működik csak úgy és
                    lehet hogy szükség lesz néhány modern "bundler" eszközre, hogy összerakd a kódot és a föggőséget
                    mikor felrakod a webre. A "bundle" egy kifejezés arra, hogy a Javascript kód egy fájlba van
                    beszuszakolva a webszerveren, kifejezetten betömörítve amennyire csak lehet, hogy időt takarítson
                    meg a letöltésnél és megjelenítésnél amikor a látogatód nézi a böngészőben.
                </Paragraph>

                <Paragraph>
                    Továbbá mi van ha találsz egy jobb eszközt és le akarod cserélni a régit, vagy egy újabb verzió
                    kijött amire szeretnéd frissíteni? Nem nehéz pár függőségnél, de egy nagyobb projektnél sok
                    függőséggel tényleg igazán kihívást jelenthet. Sokkal több értelme van, ha használsz egy <div
                    className="bold inline">csomagkezelő</div>-t mint az npm és az majd garantálja, hogy az a kód van
                    tisztán hozzáadva vagy
                    eltávolitva.
                </Paragraph>
            </Article>
        </div>
    );
}
