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

export const code_9_npm_run_dev2 = '- "dev": "vite",\n' +
    '+ "dev": "vite --open --port 3000",'

export const code_10_appjsx = `import { useState } from "react";
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

export default App;`
export const code_11_import = `import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";`

export const code_12_app_closely = `function App() {
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
}`
export const code_13_export = `export default App;`
export const code_14_main = `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);`

export const code_15_hello_world = `import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Hello, World!</h1>
      </header>
    </>
  );
}

export default App;
`
export const code_16_jsx_practice = `<button type="button">Click Me!</button>
`
export const code_17_jsx_className = `<button type="button" className="primary">
    Click me!
</button>`

export const code_18_jsx_subject = `<h1>Hello, {subject}!</h1>`

export const code_19_jsx_example = `{/* Hello, React :)! */}
<h1>Hello, {subject + ' :)'}!</h1>
{/* Hello, REACT */}
<h1>Hello, {subject.toUpperCase()}</h1>
{/* Hello, 4 */}
<h1>Hello, {2 + 2}!</h1>
`
export const code_20_prop = `<App subject="Clarice" />`
export const code_21_prop_parameter = `function App(props) {
  console.log(props);
  return (
    // code omitted for brevity
  );
}`

export const code_22_button = `Object { subject: "Clarice" }`

export const code_23_subject = `function App(props) {
  return (
    <>
      <header>
        <h1>Hello, {props.subject}!</h1>
        <button type="button" className="primary">
          Click me!
        </button>
      </header>
    </>
  );
}`
