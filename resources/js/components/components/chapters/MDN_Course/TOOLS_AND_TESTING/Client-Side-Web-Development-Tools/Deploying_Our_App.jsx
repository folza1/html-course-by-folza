import React from "react";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";
import CodeDisplay from "../../components/CodeDisplay.jsx";
import remote_repo from "./img/8.remote_repo.png";
import commit from "./img/9.commit.png";

import {
    deploy_1_wd,
    deploy_2_add,
    deploy_3_commit,
    deploy_4_remote,
    deploy_4_remote2,
    deploy_5_push,
    deploy_6_vitest,
    deploy_7_vitest_package_json,
    deploy_8_run_test,
    deploy_9_test_output,
    deploy_10_git_yaml,
    deploy_11_git_push,
} from "./deploy_code_text.jsx";

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
                    <a href="https://pages.github.com/" target="_blank">
                        GitHub Pages
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
                    Github Pages-el az is lehetséges, hogy telepítsd a projektet
                    már a fejlesztés során azért, hogy megoszthasd a munkád,
                    hogyan halad vagy, hogy kiadhass egy pre-release-t (egy
                    előzetest a projektről) valamilyen más célból.
                </Paragraph>

                <Paragraph>
                    A GitHub egy egyszerű munkafolyamatot biztosít, hogy élő
                    website-á alakítsd az új kódodat. Lássuk!
                </Paragraph>

                <Paragraph>
                    <ul className="ml-1">
                        <li>Push-olod a kódod GitHub-ra</li>
                        <li>
                            Meghatározol egy GitHub Action-t (akciót), ami
                            beindul amikor egy új push-ot hajtasz végre a main
                            branch-en (fő ágon), amely build-eli a kódot és egy
                            meghatározott helyre feltölti azt.
                        </li>
                        <li>
                            A Github Pages aztán szolgáltatja a kódot egy
                            megadott URL-re.
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    Ezek pontosan azok a fajta összekapcsolt szolgáltatások,
                    amelyekre ösztönöztünk téged, hogy nézz utána, amikor
                    eldöntöd milyen eszközláncot építesz fel magadnak. Tudjuk
                    commit-olni a kódunkat és push-olni GitHub-ra, aztán a
                    frissített kód automatikusan végrehajtja az egész build
                    rutint. Ha minden jól megy, kapunk egy élő automatikusan
                    változtatásokat deploy-oló (telepítő) rendszert. Amit
                    tennünk kell hozzá az csak a "push" (feltöltés) a GitHub
                    adattárba.
                </Paragraph>

                <Paragraph>
                    Azonban be is kell ehhez állítanunk a dolgokat és ezután azt
                    fogjuk megnézni.
                </Paragraph>
            </Article>
            <Article>
                <h1>A build folyamat</h1>
                <Paragraph>
                    Vite-ot fogunk használni a fejlesztéshez, mert a build
                    folyamatot nagyon könnyen hozzá tudjuk adni. Ahogyan láttuk
                    korábban már van egy egyedi parancsunk az npm run build
                    amely lehetővé teszi a Vite számára hogy build-eljen mindent
                    készen a produkcióra ahelyett, hogy csak futtatja azt
                    fejlesztés vagy teszt céljából. Ez magábafoglalja a "
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Glossary/Minification"
                        target="_blank"
                    >
                        minification
                    </a>
                    "-t a "
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking"
                        target="_blank"
                    >
                        tree-shaking
                    </a>
                    "-et és a fájlnevek "cache-busting"-ját.
                </Paragraph>
                <Paragraph>
                    Az a legjobb gyakorlat, hogy mindig meghatározunk egy{" "}
                    <BgLightgray>build</BgLightgray> script-et a projektünkben,
                    így amikor futtatjuk az{" "}
                    <BgLightgray>npm run build</BgLightgray> parancsot, hogy
                    végrehajtódjon a build, ne kelljen emlékeznünk a különleges
                    build parancs argumentumokra minden egyes projektnél.
                </Paragraph>

                <Paragraph>
                    Egy újonnan készített produkciós kód egy{" "}
                    <BgLightgray>dist</BgLightgray> nevű új mappában lesz, amely
                    tartalmazza az összes fájlt, ami szükséges a website
                    futtatásához és készen áll hogy feltöltsd egy szerverre.
                </Paragraph>

                <Paragraph>
                    Azonban, nem manuálisan akarjuk ezt végrehajtani. Amit
                    akarunk az az, hogy a build történjen meg automatikusan és a
                    végeredmény a <BgLightgray>dist</BgLightgray> mappából
                    legyen azonnal deploy-olva a website-unkon.
                </Paragraph>
            </Article>
            <Article>
                <h1>A változtatások commit-olása a GitHub-ra</h1>
                <Paragraph>
                    Ez a szekció átvezet azon, hogyan is kell tárolni a kódodat
                    a git adattárban, de ez messze különbözik egy git
                    tutorial-tól. Vannak nagyszerű tutorial-ok és könyvek és a
                    mi{" "}
                    <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub"
                        target="_blank"
                    >
                        Git és GitHub oldalunk
                    </a>{" "}
                    egy jó hely a kezdéshez.
                </Paragraph>
                <Paragraph>
                    Korábban elindítottuk a munkamappánkat (working directory)
                    git-es munkamappaként. Egy gyors módja az ellenőrzéséhez,
                    hogy futtasd a következő parancsot:
                </Paragraph>
                <CodeDisplay code={deploy_1_wd} />
                <Paragraph>
                    A parancsra válaszként kapnod kellene egy státusz beszámolót
                    (report-ot) milyen fájlok is vannak megfigyelés alatt,
                    milyen fájlok vannak staged állapotban (commit-ra
                    előkészítve) és így tovább. Ezek a kifejezések a git
                    "nyelvtan"-hoz tartoznak. Ha{" "}
                    <BgLightgray>fatal: not a git repository</BgLightgray>
                    hibát ír a terminál, akkor a munkamappa nem egy git
                    munkamappa és akkor a <BgLightgray>
                        git init
                    </BgLightgray>{" "}
                    parancssal lehet azzá tenni.
                </Paragraph>

                <Paragraph>Most akkor három feladat van előttünk:</Paragraph>

                <Paragraph>
                    <ul className="ml-1">
                        <li>
                            Adjunk hozzá bármilyen változást amit csináltunk a
                            stage-hez (ez egy speciális név ahonnan a fájlok
                            commit-olva (változatások rögzítve) lesznek).
                        </li>
                        <li>
                            Commit-oljuk (rögzítsük) a változtatásokat
                            adattárhoz.
                        </li>
                        <li>
                            Push-oljuk (töltsük fel) a változtatásokat a
                            GitHub-ra.
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    <ol className="ml-1">
                        <li>
                            Hogy hozzáadjuk a változtatásokat az adattárhoz
                            futtassuk ezt a parancsot:
                            <CodeDisplay code={deploy_2_add} />
                            Figyelj a pontra a parancs végén, ami azt jelenti,
                            hogy "mindent hozzáad ebből a mappából", ahol
                            változtatás van. A git add. parancs egy kalapácshoz
                            hasonlít, amely hozzáadja az összes lokális
                            változtatást, amin dolgoztál mégpedig egyszerre. Ha
                            szeretnéd finomítani, hogy mit adsz hozzá, akkor
                            használd a git add -p parancsot, amely interaktív
                            módon végigvezet a változtatásokon, vagy add hozzá
                            az egyedi fájlokat használva a git add path/to/file
                            parancsot, ahol hozzáadhatod a fájl útvonala
                            alapján.
                        </li>
                        <li>
                            Most az összes kód staged állapotban van készen a
                            commit-ra. Futtasd a következőt:
                            <CodeDisplay code={deploy_3_commit} />
                            <Note>
                                <div className="bold inline mr-1">
                                    Megjegyzés:
                                </div>
                                Bármilyen commit üzenetet írhatsz amilyet csak
                                akarsz a commit-hoz, viszont van néhány hasznos
                                tipp a web-en hozzá. Legyenek rövidek, tömörek
                                és jó leírást adjanak a commit-ról, így tisztán
                                érthető lesz mit miért csináltál.
                            </Note>
                        </li>
                        <li>
                            Végül a kódot push-olni kell a GitHub által host-olt
                            adattárban. Gyerünk csináljuk most! Látogasd meg a{" "}
                            <a href="https://github.com/new">
                                https://github.com/new
                            </a>{" "}
                            oldalt és készíts egy új repository-t (adattárat),
                            amely majd host-olja a kódot.
                        </li>
                        <li>
                            Adj a repository-nak (adattárnak) egy rövid,
                            megjegyezhető nevet, szóközök nélkül (használj
                            szóköz helyett alsó kötőjelet) és adj egy leírást is
                            róla aztán kattints a Create repository gombra a lap
                            alján. Most már lennie kell egy "remote" (távoli)
                            URL-nek ami az új GitHub repository-ra mutat.
                            <div className="image-container">
                                <img
                                    src={remote_repo}
                                    alt="New Remote Repository"
                                />
                            </div>
                        </li>
                        <li>
                            A remote (távoli) helyet meg kell adni a helyi git
                            repository-nak és akkor push-olhatunk a remote
                            repository-ba, másként nem találja, hogy hová is
                            kell push-olni. Futtatnod kell a következő parancsot
                            a következő felépítésben (használjuk a megadott
                            HTTPS lehetőséget most - különösen ha új vagy a
                            GitHub-on - nem pedig az SSH lehetőséget):
                            <CodeDisplay code={deploy_4_remote} />
                            Szóval ha a távoli címed
                            <BgLightgray>
                                https://github.com/remy/super-website.git
                            </BgLightgray>{" "}
                            volt, ahogyan a fenti képen, akkor a parancs a
                            következőképpen néz ki:
                            <CodeDisplay code={deploy_4_remote2} />
                            Változtasd meg az URL címet a saját repository-d
                            URL-ére és futtasd.
                        </li>
                        <li>
                            Most már készen állunk arra, hogy push-oljuk
                            (feltöltsük) a kódot GitHub-ra. Futtasd hozzá a
                            következő kódot:
                            <CodeDisplay code={deploy_5_push} />
                            Ennél a pontnál be kell majd írnod a
                            felhasználónevet és a jelszót mielőtt a Git
                            engedélyezi a push elküldését. Ez azért van mert a
                            HTTPS lehetőséget használjuk az SSH lehetőség
                            helyett, ahogyan azt láthattuk a képen ezelőtt.
                            Ezért szükség lesz a GitHub felhasználónévre és
                            aztán, ha nincsen két-faktoros hitelesítés (2FA)
                            bekapcsolva akkor a GitHub jelszóra. Bátorítunk
                            arra, hogy használj 2FA-t, ha lehetséges, de tartsd
                            észben, ha úgy teszel akkor egy "personal access
                            token"-t (személyes hozzáférési token-t) is
                            használnod kell. A GitHub help oldalán vannak nagyon
                            jó és{" "}
                            <a
                                href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"
                                target="_blank"
                            >
                                egyszerű leírások melyek végigvezetnek, hogyan
                                is szerezhetsz egyet
                            </a>
                            .
                        </li>
                    </ol>
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    Ha érdekel az SSH lehetőség használata, amivel elkerülheted
                    a felhasználónév és a jelszó használatát minden alkalommal
                    amikor push-olsz a GitHub-ra,{" "}
                    <a
                        href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
                        target="_blank"
                    >
                        ez a tananyag végigvezet rajta hogyan
                    </a>
                    .
                </Note>

                <Paragraph>
                    Ez a parancs végül azt mondja a git-nek, hogy push-olja a
                    kódot a remote (távoli) helyre amit mi{" "}
                    <BgLightgray>origin</BgLightgray>-nek neveztünk (az a
                    repository (adattár) amelyet elhelyeztünk a github.com-on -
                    bármi másra is nevethettük volna, amire csak szeretnénk) és
                    a <BgLightgray>main</BgLightgray> brach-ét (ág-át)
                    használjuk. Még nem beszéltünk a branch-ekről (ág-akról), de
                    a "main" branch az az alapértelmezett hely a munkánknak és
                    itt jön szóba a git. Amikor létrehozunk egy action-t
                    (akció-t) a website-unk build-elésével, akkor a "main"
                    branch-et fogjuk megadni, hogy az azon lévő változások
                    legyenek figyelve.
                </Paragraph>

                <Note>
                    <div className="bold inline mr-1">Megjegyzés:</div>
                    2020 Októberig az alapértelmezett branch a GitHub-on a
                    <BgLightgray>master</BgLightgray> volt, amely számos
                    szociális okokból <BgLightgray>main</BgLightgray>-re lett
                    megváltoztatva. Figyelembe kell venned, hogy ez a régebbi
                    alapértelmezett branch feltűnhet számos projektnél, szóval
                    találkozhatsz vele, de mi azt ajánljuk, hogy a{" "}
                    <BgLightgray>main</BgLightgray>-t használd a saját
                    projektjeidhez.
                </Note>

                <Paragraph>
                    Szóval akkor a projektünk commit-olve van a git-ben és
                    push-olva van a GitHub repository-nkba, a következő lépés az
                    eszközláncban, hogy meghatározunk egy build action-t így a
                    projektünk élőben deploy-olva lesz a web-en.
                </Paragraph>
            </Article>
            <Article>
                <h1>
                    GitHub Actions (akciók) használata a deployment-hez
                    (webszerverre való telepítéshez)
                </h1>
                <Paragraph>
                    A GitHub Actions, mint az ESLint konfiguráció egy nagyon
                    mély nyúlüreg. Nem könnyű jól csinálni az első
                    próbálkozásra, de olyan népszerű feladatokhoz mint a
                    "statikus weboldal build-elése és deploy-olása a GitHub
                    Pages-re" van sok példa, amit lemásolhatunk és
                    beilleszthetünk. Követheted az instrukciókat a{" "}
                    <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow">
                        Publikálás egyedi GitHub Actions munkafolyamattal
                    </a>{" "}
                    oldalon. Megnézheted a{" "}
                    <a href="https://github.com/mdn/client-toolchain-example/blob/main/.github/workflows/github-pages.yml">
                        GitHub Action fájlunkat
                    </a>{" "}
                    mint egy működő példát. (A fájl neve nem számít.)
                </Paragraph>

                <Paragraph>
                    Miután commit-olod ezt a fájlt a main branch-be, akkor
                    látnod kellene egy kis zöld pipát a commit cím mellett:
                </Paragraph>

                <div className="image-container">
                    <img src={commit} alt="Commit" />
                </div>

                <Paragraph>
                    Ha egy sárga pontot látsz azt jelenti, hogy az akció
                    folyamatban van és ha egy piros keresztet, akkor valami
                    probléma adódott. Klikkelj az ikonra és láthatod a státuszát
                    és a log-jait (napló fájlokat) a build akciónak (a mi
                    esetünkben a "Deploy build"-nek nevezve).
                </Paragraph>

                <Paragraph>
                    Ha vársz pár percet meglátogathatod a GitHub Pages URL-jét
                    láthatod a website-ot élőben a web-en. A linknek ilyesminek
                    kell lennie
                    https://&lt;a-neved&gt;.github.io&lt;/a-repository-neve&gt;.
                    A mi példánkban:
                    https://mdn.github.io/client-toolchain-example.
                </Paragraph>

                <Paragraph>
                    Most az utolsó dolgunk az eszközláncban: tesztelni, hogy
                    megbizonyosodjunk, hogy a kódunk működik.
                </Paragraph>
            </Article>
            <Article>
                <h1>Tesztelés</h1>

                <Paragraph>
                    A tesztelés magában egy hatalmas téma, még a front-end
                    kifejezésen belül is. Meg fogom mutatni, hogyan adj egy
                    kezdeti tesztet a projektedhez és hogyan használd a tesztet
                    a deployment megakadályozására vagy engedélyezésére.
                </Paragraph>

                <Paragraph>
                    Amikor tesztelésről van szó jó, ha a különböző módokon
                    közelítjük meg a problémát:
                    <ul className="ml-1">
                        <li>
                            Az end-to-end tesztelés, amely magába foglalja a
                            látogató kattintását egy dolgon és más történéseket.
                        </li>
                        <li>
                            Integráció tesztelés, amely alapjábavéve annyit
                            jelent, hogy "A kód egyes blokkja még működik-e,
                            amikor egy másik blokkhoz csatlakoztattam azt?"
                        </li>
                        <li>
                            A unit tesztelés, amikor kis és különleges részek
                            működőképessége van tesztelve, hogy azt teszik-e
                            amire hivatottak.
                        </li>
                        <li>
                            <a
                                href="https://en.wikipedia.org/wiki/Functional_testing"
                                target="_blank"
                            >
                                És még sok más típus létezik.
                            </a>{" "}
                            Nézz utána a{" "}
                            <a
                                href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing"
                                target="_blank"
                            >
                                böngészők közötti tesztelési modulunknak
                            </a>{" "}
                            sok hasznos tesztelési tanácsért.
                        </li>
                    </ul>
                </Paragraph>

                <Paragraph>
                    Vedd figyelembe, hogy a tesztek nem korlátozottak a
                    JavaScript-re; a tesztek futtathatók a renderelt DOM-hoz, a
                    felhasználói interakciókhoz, a CSS-hez és még ahhoz is,
                    hogyan néz ki az oldal.
                </Paragraph>

                <Paragraph>
                    Azonban, ehhez a projekthez készíteni fogunk egy kis tesztet
                    amely leellenőrzi, hogy a GitHub API adat megfelelő formában
                    van-e. Ha nem, akkor a teszt sikertelen lesz és
                    megakadályozza azt, hogy a projektünk élőben működjön. Hogy
                    más dolgokat is csináljunk az ennek a modulnak a tananyagán
                    túl van - mivel a tesztelés egy hatalmas témakör, amely
                    igazán azt igényli, hogy külön modulokra osszuk. Reméljük,
                    hogy ez a rész legalább tudatosítja benned a tesztelés
                    szükségességét, és elülteti a magvakat, amelyek majd később
                    inspirálnak, ahogy haladsz és tanulsz tovább.
                </Paragraph>

                <Paragraph>
                    Önmagában nem a teszt, ami fontos. A fontos az, hogyan van a
                    tesz sikertelensége vagy sikeressége kezelve. Mert, ha
                    írtunk már egy egyedi build akciót, hozzá adhatunk egy
                    lépést a build elé, amely futtatja a tesztet. Ha a teszt
                    sikertelen, akkor a build is és így a deployment sem fog
                    megtörténni.
                </Paragraph>

                <Paragraph>
                    A jó hír: mivel Vite-ot használunk, a Vite már kínál egy jó
                    integrált eszközt a teszteléshez: a{" "}
                    <a href="https://vitest.dev/guide/" target="_blank">
                        Vitest
                    </a>
                    -et.
                </Paragraph>

                <Paragraph>Kezdjük is!</Paragraph>

                <Paragraph>
                    <ol className="ml-1">
                        <li>
                            Telepítsd a Vitest-et!
                            <CodeDisplay code={deploy_6_vitest} />
                        </li>
                        <li>
                            A package.json fájlodban, keresd meg a{" "}
                            <BgLightgray>scripts</BgLightgray> tagot és
                            változtasd meg úgy, hogy tartalmazza a teszt és
                            build parancsokat a "vitest" hozzáadásával.
                            <CodeDisplay code={deploy_7_vitest_package_json} />
                            <Note>
                                <div className="bold inline mr-1">
                                    Megjegyzés:
                                </div>
                                <Paragraph>
                                    Itt a jó része annak, hogy a Vite-ot
                                    használjuk a Vitest mellett. Ha más teszt
                                    keretrendszert használsz, akkor más
                                    konfigurációt kell hozzáadnod, amely leírja,
                                    hogyan kell a teszt fájlokat alakítani, de a
                                    Vitest automatikusan a Vite konfigurációt
                                    fogja használni.
                                </Paragraph>
                            </Note>
                        </li>
                        <li>
                            Most természetesen hozzá kell adnunk a tesztet a
                            kódbázisunkhoz. Általában ha egy fájl
                            működőképességét teszteled, mondjuk az{" "}
                            <BgLightgray>App.jsx</BgLightgray>-ét, akkor hozzá
                            kellene adnod egy fájlt például az
                            <BgLightgray>App.test.jsx</BgLightgray> néven. Ebben
                            az esetben most csak az adatot teszteljük, így
                            készítsünk egy másik mappát amiben a teszteket
                            tartjuk. Megnyithatod az előző fejezetben letöltött
                            példa adattárból és átmásolhatod a{" "}
                            <BgLightgray>tests</BgLightgray> (tesztek) mappát.
                        </li>
                        <li>
                            Most manuálisan futtathatjuk a tesztet a
                            parancssorból a következőképpen:
                            <CodeDisplay code={deploy_8_run_test} />
                            Ehhez hasonló kimenetet kellene látnod
                            <CodeDisplay code={deploy_9_test_output} />
                            Ez azt jelenti átment a teszten. Mint a Vite, ez is
                            figyelni fogja a kódírás során a változásokat és
                            újra futtatja a tesztet amikor elmented a fájlt.
                            Kiléphetünk belőle a <BgLightgray>
                                q
                            </BgLightgray>{" "}
                            billentyű megnyomásával.
                        </li>
                        <li>
                            Még hozzá kell fűznünk a tesztet a build akcióhoz,
                            szóval az gátolja a build folyamatot, ha a teszt
                            sikertelen. Nyisd meg a{" "}
                            <BgLightgray>
                                .github/workflows/github-pages.yml
                            </BgLightgray>{" "}
                            fájlt a projekt mappájában (vagy azt a fájlt amit a
                            build akcióhoz hoztál létre) és add hozzá a
                            következő lépést, pontosan az{" "}
                            <BgLightgray>npm run build</BgLightgray> lépés elé:
                            <CodeDisplay code={deploy_10_git_yaml} />
                            Ez le fogja futtatni a tesztet a build folyamat
                            előtt. Ha a teszt sikertelen, akkor a build folyamat
                            is sikertelen és a deployment nem fog megtörténni.
                        </li>
                        <li>
                            Most pedig töltsük fel az új kódot a GitHub-ra,
                            hasonló parancsokat használva mint ezelőtt:
                            <CodeDisplay code={deploy_11_git_push} />
                            Néhány esetben lehet, hogy szeretnéd tesztelni a kód
                            build-elésének a folyamatát, így a tesztnek a build
                            parancs után kellene lefutnia. Mindig meg kell majd
                            fontolnod ezeket az egyedülálló nézőpontokat,
                            mialatt a saját projekteiden dolgozol.
                        </li>
                    </ol>
                </Paragraph>

                <Paragraph>
                    Végül egy kb. egy perccel a push után a GitHub Pages
                    telepíti is a projekted frissített változatát. De csak, ha a
                    teszten átment, amit bemutattunk.
                </Paragraph>
            </Article>
            Finally, a minute or so after pushing, GitHub Pages will deploy the
            project update. But only if it passes the test that was introduced.
        </div>
    );
}
