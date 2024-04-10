import React from 'react';
import './feed.css';
import Getting_Started_With_React from "../chapters/MDN_Course/REACT/Getting_Started_With_React.jsx";
import Tools_And_Testing from "../chapters/MDN_Course/TOOLS_AND_TESTING/Tools_And_Testing.jsx";
import Understand_Web_Development_Tools
    from "../chapters/MDN_Course/TOOLS_AND_TESTING/Client-Side-Web-Development-Tools/Understand_Web_Development_Tools.jsx";
import Client_Side_Tooling_Overview
    from "../chapters/MDN_Course/TOOLS_AND_TESTING/Client-Side-Web-Development-Tools/Client-Side-Tooling-Overview.jsx";
import Command_Line_Crash_Course
    from "../chapters/MDN_Course/TOOLS_AND_TESTING/Client-Side-Web-Development-Tools/Command_Line_Crash_Course.jsx";

export default function Feed() {
    return (
        <div className="feed">
            <Command_Line_Crash_Course/>
            {/*<Client_Side_Tooling_Overview/>*/}
            {/*<Understand_Web_Development_Tools/>*/}
            {/*<Tools_And_Testing/>*/}
            {/*<Getting_Started_With_React/>*/}
        </div>
    );
}
