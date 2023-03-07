# ReanimatedTestBug
Reproduction of reanimated testing mock bug

Steps to reproduce:
1. `yarn` to install dependencies
2. `yarn test` to run test, note the failure
3. Comment out/remove the plugins line from `babel.config.js`
4. `yarn test` again, this time the test passes successfully