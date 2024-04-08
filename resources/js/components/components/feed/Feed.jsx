import React from 'react';
import './feed.css';
import Getting_Started_With_React from "../chapters/MDN_Course/REACT/Getting_Started_With_React.jsx";
import Tools_And_Testing from "../chapters/MDN_Course/TOOLS_AND_TESTING/Tools_And_Testing.jsx";
import Understand_Web_Development_Tools
    from "../chapters/MDN_Course/TOOLS_AND_TESTING/Client-Side-Web-Development-Tools/Understand_Web_Development_Tools.jsx";

export default function Feed() {
    return (
        <div className="feed">
            <Understand_Web_Development_Tools/>
            {/*<Tools_And_Testing/>*/}
            {/*<Getting_Started_With_React/>*/}
        </div>
    );
}
