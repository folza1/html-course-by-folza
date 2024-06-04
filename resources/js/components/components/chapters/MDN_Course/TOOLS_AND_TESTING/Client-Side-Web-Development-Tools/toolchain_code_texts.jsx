export const toolchain_1_prettier = `prettier -v`;
export const toolchain_2_prettier_install = `npm install prettier -g`;
export const toolchain_3_prettier_example = `prettier --write ./src/index.html`;
export const toolchain_4_eslint_output = `./my-project/src/index.js
2:8 error 'React' is defined but never used  no-unused-vars
22:20 error 'body' is defined but never used   no-unused-vars
96:19 error 'b' is defined but never used      no-unused-vars

✖ 3 problems (3 errors, 0 warnings)
`;
export const toolchain_5_project_start = `mkdir will-it-miss
cd will-it-miss
`;
export const toolchain_6_project_src = `mkdir src
`;
export const toolchain_7_git_start = `git init`;

export const toolchain_8_npm_init = `npm init --force`;

export const toolchain_9_npm_install = `npm install --save-dev eslint prettier babel-eslint`;

export const toolchain_10_prettier_config = `{
    "singleQuote": true,
    "trailingComma": "es5"
  }
  `;

export const toolchain_11_eslint_config = `{
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "rules": {
    "no-console": 0
  }
}
`;

export const toolchain_11_eslint_config_jsx = `{
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["react"],
  "rules": {
    "semi": "error",
    "no-console": 0,
    "react/jsx-uses-vars": "error"
  }
}
`;

export const toolchain_12_jsx_plugin_install = `npm install --save-dev eslint-plugin-react`;

export const toolchain_13_parcel_install = `npm install --save-dev parcel-bundler`;
