import React from 'react';

export const code_1_heading = "const heading = <h1>Mozilla Developer Network</h1>;"
export const code_2_header = "const header = (\n" +
    "  <header>\n" +
    "    <h1>Mozilla Developer Network</h1>\n" +
    "  </header>\n" +
    ");\n"

export const code_3_header = "const header = <header>\n" +
    "  <h1>Mozilla Developer Network</h1>\n" +
    "</header>";

export const code_4_header = "const header = React.createElement(\n" +
    "  'header',\n" +
    "  null,\n" +
    "  React.createElement('h1', null, 'Mozilla Developer Network'),\n" +
    ");";

export const code_5_node_version = "node -v\n"

export const code_6_create_app = "npm create vite@latest moz-todo-react -- --template react\n"

export const code_7_npm_install = "cd moz-todo-react && npm install\n"

export const code_8_npm_run_dev = "npm run dev -- --open --port 3000\n"

export const code_9_npm_run_dev2 = '- "dev": "vite",\n'+
    '+ "dev": "vite --open --port 3000",'

export const code_10_appjsx = `
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
`
export const code_11_import = `
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

`




