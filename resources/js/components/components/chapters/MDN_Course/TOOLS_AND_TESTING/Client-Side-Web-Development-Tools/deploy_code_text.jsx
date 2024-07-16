export const deploy_1_wd = `git status
`;
export const deploy_2_add = `git add .
`;
export const deploy_3_commit = `git commit -m 'committing initial code'
`;
export const deploy_4_remote = `git remote add origin https://github.com/your-name/repo-name.git
`;
export const deploy_4_remote2 = `git remote add origin https://github.com/remy/super-website.git
`;
export const deploy_5_push = `git push origin main
`;
export const deploy_6_vitest = `npm install --save-dev vitest
`;
export const deploy_7_vitest_package_json = `"scripts": {
  // …
  "test": "vitest"
}
`;
export const deploy_8_run_test = `npm run test`;

export const deploy_9_test_output = `> client-toolchain-example@1.0.0 test
> vitest


DEV  v1.6.0 /Users/joshcena/Desktop/work/Tech/projects/mdn/client-toolchain-example

✓ tests/api.test.js (1) 896ms
  ✓ GitHub API returns the right response 896ms

Test Files  1 passed (1)
     Tests  1 passed (1)
  Start at  23:12:25
  Duration  1.03s (transform 15ms, setup 0ms, collect 5ms, tests 896ms, environment 0ms, prepare 38ms)


PASS  Waiting for file changes...
      press h to show help, press q to quit`;

export const deploy_10_git_yaml = `- name: Install deps
  run: npm ci

# Add this
- name: Run tests
  run: npm run test

- name: Build
  run: npm run build
`;
export const deploy_11_git_push = `git add .
git commit -m 'adding test'
git push origin main
`;
