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
