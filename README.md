# Code sample application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using typescript template. 
- We have a frontend built in react, which receives a list of repositories from the server and displays information about them to us. 
- Styled-components are used for styles, where there is a little css, it is written simply in the style attribute. 
- The server is written in typescript, consists of 1 file, simulates the behavior when we query the database to get a list of repositories, for example, it returns a hardcoded list of repositories.
- project has tsconfig and esling config.

## NPM Scripts

There are multiple scripts to run:

Run server
```
  "start-server": "ts-node --project tsconfig.json ./server/index.ts",
```
Start react application
```
  "start": "react-scripts start",
```
Build react application
```
  "build": "react-scripts build",
```
Test react application. Will launch the testing menu, if we enter the character "a", we will run all our tests written with the jest framework. Tests are saved in the src / __ tests__ folder.
```
  "test": "react-scripts test",
```
Eject react application. Auto generated, unused in project.
```
  "eject": "react-scripts eject",
```
Prettier will help to maintain the code within some formatting rules like indentation, double or single quotes when using string, etc.
```
  "prettier": "npx prettier --write ."
```
Checks our code against lint rules specific to React and JSX for TSLint.
```
  "lint": "eslint --fix --ext .js,.jsx,ts,tsx ."
```


