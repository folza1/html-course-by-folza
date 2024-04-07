import React from 'react';
import Article from "../REACT/article/Article.jsx";
import Paragraph from "../REACT/paragraph/Paragraph.jsx";
import Note from "../REACT/note/Note.jsx";

export default function Getting_Started_With_React() {

    return (
        <div className="container">
            <h1>Tools And Testing</h1>
            <Article>
                <Paragraph>
                    Miután már kényelmesen programozol a fő web technológiákkal (mint HTML, CSS, és JavaScript), és
                    elkezdesz szerezni több tapasztalatot, olvasol több tananyagot és megtanulsz több tippet és trükköt,
                    el
                    fogod kezdeni tanulni többek között a Javascript keretrendszereket, a tesztelést és automatizáló
                    ezközöket és másokat. Ahogyan a web projektek nagyobbá és komplexebbé válnak, majd hasznot akarsz
                    meríteni ezekből az eszközökből, kidolgozol majd egy megbízható eszközláncot, hogy szupererőt adj a
                    fejlesztési folyamatnak.
                </Paragraph>
                <Paragraph>
                    Ezen felül, még mindig a szemünk előtt kell tartanunk a böngészők közötti támogatást, és biztossá
                    tenni azt, hogy a kódunk követi a legjobb gyakorlatot, amely engedi a projekteinket működni
                    különböző böngészők és készülékek között, amit a felhasználóink használnak webböngészés közben, és
                    olyan emberek akik fogyatékossággal élnek.
                </Paragraph>
                <Paragraph>
                    Kidolgozni azt, hogy milyen eszközöket kellene használnod nehéz folyamat lehet, ezért írtuk ezeket
                    a cikkeket, hogy informáljunk téged milyen eszközök elérhetőek, mit tudnak tenni érted és hogyan
                    használd a jelenlegi ágazati kedvenceket.
                </Paragraph>
                <Note>
                    <Paragraph>
                        <div className="bold inline">Megjegyzés:</div>
                        Számos eszközre hivatkozunk ebben a fejezetben, nem azért mert támogatnánk őket vagy azt
                        gondoljuk, hogy a legjobbak, hanem azért mert tudjuk, hogy működnek és jó ágazati támogatásban
                        vannak. A legtöbb esetben vannak más elérhető eszközök, régiek melyek ki fognak menni a divatból
                        és újak melyek kétség nélkül fel fognak tűnni.
                    </Paragraph>
                </Note>
            </Article>

            <Article>
                <h1>Előfeltételek</h1>
                <Paragraph>
                    Tényleg meg kellene tanulnod a <a target="_blank"
                                                      href="https://developer.mozilla.org/en-US/docs/Learn/HTML">HTML</a>, <a
                    target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS">CSS</a> és a <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript">Javascript</a> alapjait először,
                    mielőtt megpróbálod
                    használni a sok eszközt, amit itt részletezünk. Például, tudnod kellesz ezeknek a nyelveknek az
                    alapjait mielőtt elkezdesz hibákat megoldani a komplex web kódban, vagy hatékonyan használni a
                    Javascript keretrendszereket, vagy teszteket írni és futtatni az általad írt kódhoz teszt futtatókat
                    használva.
                </Paragraph>
                <Paragraph>
                    Továbbá a topik első moduljával kellene kezdened, amely ad egy hasznos áttekintést az általános
                    területről.
                </Paragraph>
            </Article>

            <Article>
                <h1>Modulok</h1>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools">Megérteni
                    a kliens-oldali webfejlesztő eszközöket</a>
                <Paragraph>
                    A kliens oldali eszközök megfélemlítőek tudnak lenni, de ennek a cikksorozatnak a célja, hogy
                    illusztrálja a célját a néhány legnépszerűbb kliens oldali eszköztípusnak, elmagyarázza az
                    eszközöket amelyeket egymással össze lehet kötni, hogyan telepíthetjük őket csomagkezelőket
                    használva
                    és irányítani őket a parancssorból. Befejezzük egy teljes eszközlánc példával, megmutatva neked,
                    hogyan válhatsz produktívvá.
                </Paragraph>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks">Megérteni
                    a kliens-oldali Javascript keretrendszereket</a>
                <Paragraph>

                </Paragraph>
            </Article>
        </div>
    );
}
