import React from 'react';
import './getting_strarted_with_react.css';
import CodeDisplay from "../components/CodeDisplay.jsx";
import {code_1_heading, code_2_header, code_3_header, code_4_header} from "./codes.js";

export default function Getting_Started_With_React() {
    return (
        <div className="container">
            <p className="header_paragraph">
                Ebben a cikkben hello-t mondunk a React-nek. Egy kicsit részletesebben fel fogjuk fedezni
                a React hátterét és hogy milyen esetekben használjuk, beállítunk egy olyan eszközláncot
                a helyi számítógépünkön, amelyet egy React alkamazás során szoktak használni, aztán készítünk
                és kipróbálunk egy egyszerű kezdő alkalmazást - szóval tanulunk egy kicsit a React működéséről.
            </p>

            <div className="article prerequisites">
                <p className="paragraph">
                    Előfeltételek: A HTML, CSS és Javascript lényegét ismernie kell és legyenek ismeretek
                    a terminal/parancssor használatáról.
                </p>

                <p className="paragraph">
                    A React egy HTML a Javascript-ban szintaxist használ, amit JSX-nek neveznek
                    (Javascript és XML).
                    Ha ismered a HTML és a Javascript lényegét az segíteni fog a JSX megtanulásában és segít majd
                    azonosítani a hibákat, hogy azok a Javascript-hez vagy a React-hez
                    kapcsolódnak-e?.
                </p>

                <p className="paragraph">
                    Célkitűzés: Beállítani egy helyi React fejlesztői környezetet, készíteni egy kezdő alkalmazást és
                    megérteni az alapjait hogyan is működik.
                </p>
            </div>

            <div className="article">
                <h1>Hello React</h1>
                <p className="paragraph">
                    Ahogy a hivatalos szlogenje is mondja, a React egy könyvtár ahhoz, hogy felhasználói felületet
                    készítsünk.
                    A React nem egy keretrendszer - még csak nem is kizárólag a web-hez készült. Más könyvtárakkal
                    együtt használják
                    bizonyos környezetekben való megjelenítéshez. Például a React Native használható mobil alkalmazások
                    készítésére.
                </p>
                <p className="paragraph">
                    A webre való fejlesztéshez a fejlesztők a React-et a ReactDOM-mal együtt használják. A React-et és a
                    ReactDOM-ot
                    gyakrak ugyanolyan környezetben használják, mint más igazi webfejlesztő keretrendszereket, mivel
                    ugyanolyan
                    megoldásokra hsználják őket. Amikor a React-re utalunk mint keretrendszer, akkor köznyelvi
                    értelemben beszélünk róla.
                </p>
                <p className="paragraph">
                    A React elsődleges célja, hogy minimalizálja a felhasználói felületek készítése során fellépő
                    hibákat. Ezt komponensek
                    használatával teszi lehetővé, önálló logikai kódrészletek, amelyek a felhasználói felület darabjai.
                    Ezekből
                    a komponensekből áll össze a teljes felhasználói felület. A React elkülöníti a rendereléssel járó
                    problémákat, hogy csak
                    a felhasználói felület kidolgozásával legyen dolgod.
                </p>
            </div>

            <div className="article">
                <h1>Milyen esetekben használjuk?</h1>
                <p className="paragraph">
                    Nem úgy mint más keretrendszereknek, a React-nak nincsenek szigorú szabályai a kód és a fájlok
                    szervezésére. Ez
                    megengedi a fejlesztői csapatok számára, hogy önálló szabályokat hozzanak létre, amelyek a legjobban
                    működnek
                    számukra és úgy
                    használják a React-et ahogy ők akarják. A React képes kezelni egyetlen gombot, egy pár darabból álló
                    felületet vagy
                    akár egy alkalmazás egész kezelőfelületét.
                </p>
                <p className="paragraph">
                    Míg a React használható egy interface kis darabjaihoz, nem olyan könnyű csak úgy beledobni az
                    alkalmazásba mint például a JQuery-t, vagy még annyira sem, mint a Vue keretrendszer esetében.
                    Könnyebb, ha az egész alakalmazást React segítségével van elkészítve.
                </p>
                <p className="paragraph">
                    Továbbá, sok fejlesztői előny, mint például a felületek írása JSX-ben, szüksége van egy öszzeállító
                    folyamatra.
                    Ha a Babel kompilátort adjuk az oldalunkhoz akkor lassan fog futni a program, így a fejlesztők
                    gyakran
                    egy építési ("build") lépéssel állítják be az ilyen eszközöket. A Reactnak vitathatatlanul komoly
                    eszközigénye
                    van, de megtanulható.
                </p>
                <p className="paragraph">
                    Ez a cikk arra összpontosít, hogy az egész felhasználói felületet React-el készítsük el a Vite
                    támogatásával,
                    amely egy modern front-end éptési ("build") eszköz.
                </p>
            </div>

            <div className="article">
                <h1>Hogyan használja a React a Javascriptet?</h1>
                <p className="paragraph">
                    A React a modern Javascript jellemzőit használja. A JavaScripttől való legnagyobb eltérés a JSX
                    szintaxis használatából ered. A JSX kiegészíti a Javascript szintaxisát, így a kód HTML szerű lesz.
                    Mint például:
                </p>
                <CodeDisplay code={code_1_heading}/>
                <p className="paragraph">
                    Ez a heading konstans egy JSX kifejezés. A React használja ezt, hogy renderelje a &lt;h1&gt; tag-et
                    az
                    alkalmazásunkba.
                </p>
                <p className="paragraph">
                    Tegyük fel hogy úgy akarjuk rendezni a kódunkat, hogy a heading-ünket bele akarjuk csomagolni
                    egy &lt;header&gt;
                    tag-be.
                </p>
                <CodeDisplay code={code_2_header}/>

                <div className="note">
                    <p>
                        <span className="bold">Megjegyzés:</span> A zárójelek az előző kódrészletben nem egyediek a
                        JSX-ben és nincsenek semmi
                        hatással a kódra.
                        Csak azt jelzik neked és a számítógép számára, hogy a benne lévő több sor kód ugyanannak a
                        kifejezésnek a része.
                        Akár el is lehet hagyni.
                    </p>
                    <CodeDisplay code={code_3_header}/>
                    <p>
                        Viszont kicsit furcsán néz ki, mivel a kezdő &lt;header&gt; tag nincsen behúzva mint a záró tag.
                    </p>
                </div>
                <p className="paragraph">
                    Természetesen a böngészőnk nem tudja magától értelmezni a JSX-et segítség nélkül. Miután kompilálva
                    lett a kód,
                    olyan eszközökkel mint a Babel vagy a Parcel, a header kifejezésünk így néz ki:
                </p>
                <CodeDisplay code={code_4_header}/>
                <p className="paragraph">
                    Ki lehet hagyni a kompilációt és lehet használni a React.createElement()-et, ha önmagunk szeretnénk írni a UI-t
                    "user-interface"-et, azaz felhasználói felületet. Azonban, ha azon a módon írjuk a kódot, akkor elveszítjük a JSX
                    előnyeit és nehezebb a kódot olvasni.
                </p>
            </div>

        </div>
    );
}
