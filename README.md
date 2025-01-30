Aquarium app using npm lite-server.

***** IMPORTANT!!!!! *****
When you start an app with npm lite-server, you MUST:
1. npm init - This INITIALIZES npm and adds package.json. ***** IT IS NOT NPM INSTALL, AS YOU DON'T HAVE A PACKAGE.JSON YET!!!!! *****
2. After npm install --save lite-server, add the following in your scripts (located inside package.json):
     "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "lite": "lite-server",
        "start": "npm run lite"
      },
   The "test" may already be there. You just have to add the "lite" and the "start".
3. Configuration for bootstrap:
   <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css" crossorigin="anonymous">
   <link rel="stylesheet" href="./styles/styles.css">
4. Configuration for css:
   <script src="./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
   <script src="index.js"></script>
5. After that, you can do npm start.
