import React from "react";
import Paragraph from "../../REACT/paragraph/Paragraph.jsx";
import Article from "../../REACT/article/Article.jsx";
import Note from "../../REACT/note/Note.jsx";
import BgLightgray from "../../REACT/bg-lightgray/BgLightgray.jsx";
import CodeDisplay from "../../components/CodeDisplay.jsx";

// import {} from "./cross_browser_testing_text.jsx";

export default function Cross_Browser_Testing() {
    return (
        <div className="container">
            <h1>Böngészők közötti tesztelés</h1>
            <Paragraph>
                Ez a modul a web projektek különböző böngészőkön való
                tesztelésére koncentrál. Foglalkozunk majd a célközönséged
                azonosításával (például milyen felhasználók, böngészők és
                eszközök miatt kell aggódnod), hogyan kell a tesztelést
                csinálni, milyen fő problémák vannak amelyekkel szembesülsz a
                különböző típusú kódokkal és hogyan háríthatod el azokat, milyen
                eszközök a leghasznosabbak a tesztelés és a hibaelhárítás során
                és hogyan használj automatizációt, hogy felgyorsítsd a
                tesztelést.
            </Paragraph>
            This module focuses on testing web projects across different
            browsers. We look at identifying your target audience (e.g. what
            users, browsers, and devices do you most need to worry about?), how
            to go about doing testing, the main issues that you'll face with
            different types of code and how to mitigate them, what tools are
            most useful in helping you test and fix problems, and how to use
            automation to speed up testing.
        </div>
    );
}
