export const code_1_parcel = `mkdir parcel-experiment
cd parcel-experiment
`
export const code_2_parcel = `npm init`

export const code_3_parcel_json = `{
  "name": "parcel-experiment",
  "version": "1.0.0",
  "description": "A simple npm package to learn about using npm",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "author": "Chris Mills",
  "license": "ISC"
}
`

export const code_4_parcel = `npm install parcel-bundler`

export const code_5_parcel = `"dependencies": {
  "parcel-bundler": "^1.12.4"
}
`

export const code_6_index_html = `<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
`
export const code_7_parcel_run = ` npx parcel index.html
`

export const code_8_parcel_run = `Server running at http://localhost:1234
✨  Built in 193ms.
`
export const code_8_index_js = `import { formatDistanceToNow } from "date-fns";

const date = "1996-09-13 10:00:00";
document.body.textContent = \`\${formatDistanceToNow(new Date(date))} ago\`;
`

export const code_9_package_json = `"dependencies": {
  "date-fns": "^2.12.0",
  "parcel-bundler": "^1.12.4"
}
`
export const code_10_parcel_build = `npx parcel build index.html
`

export const code_11_parcel_build_2 = `✨  Built in 9.35s.

dist/my-project.fb76efcf.js.map    648.58 KB     64ms
dist/my-project.fb76efcf.js        195.74 KB    8.43s
dist/index.html                        288 B    806ms
`
