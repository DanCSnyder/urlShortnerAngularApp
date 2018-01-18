# shortly

## This project was a project I built when I was learning Angular several years ago. It was interesting learning the Angular way to do things. A lot of the tooling is now outdated and there are better alternatives to use today.

* NODE
* NPM
* MongoDB

  Installation

---

1. Install the system requirements.
   You can use homebrew to do this or download directly from associated websites if you are comfortable with installing

   ```bash
   # Install NPM (along with NodeJS)
   brew install node

   or install manually
   https://nodejs.org/en/download/
   https://www.npmjs.org/install.sh

   # Install MongoDB
   brew install mongodb
   ```

2. Install JavaScript dependencies.

   ```bash
   # Install global dependencies
   npm install -g gulp bower karma karma-cli nodemon global modules

   # Install all node dependencies in package.json
   npm install

   # Install bower dependencies that get created in lib
   bower install
   ```

3) Start local instance.

   ```bash
   # Seperate tab in your termial, run mongod to start mongo up
   mongod

   # Start server and app (may take a couple mins to compile and build)
   npm start
   ```

---
