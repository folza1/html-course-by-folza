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
