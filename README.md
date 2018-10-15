# MEAN Stack To-Do List

#### Prerequisites
* [NPM](https://www.npmjs.com/)
  * [Download Node and NPM](https://nodejs.org/en/)
* [Node.js](https://nodejs.org/en/)
* [Angular CLI](https://cli.angular.io/)
  * ```npm install -g @angular/cli@latest```

#### Installing
* Clone this repository
  * ```git clone https://github.com/JMathis52/MEAN-toDoList.git```
* Install Prerequisites (Check the above section)
* ```cd <path>/MEAN-toDoList```
  * ```npm install```
* Note: If the npm install throws an error:
  * If it says a module is not installed, run ```npm install --save <module name>```
  * If it says that an invalid character was read at the end of the line, delete the node_module folder and the package-lock.json file and try the ```npm install``` command again
  * If its an npm permission error see [here](https://docs.npmjs.com/getting-started/fixing-npm-permissions)

### Deployment
---
* 2 Terminal Setup
* Terminal 1 : Runs local development environment to be served by the Express server
  * ```ng serve```
* Terminal 2 : Runs the Express server
  * ```node server.js```
* The To-Do List application should now be available at http://localhost:4200/
