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

UPDATE!!!
Added a media folder with images and videos which I added to .gitignore.

JANUARY 30TH UPDATE!!!
Positioned the coin logo OVER the video. See the following commit notes:
44253e85a1dd11c6b019bb5dfb4bc45e00e424ce
e82618e17e36106b0ebf7de9e0725e95ee140bbf

FEBRUARY 13TH UPDATE!!!
SUCCESS!!!
The site: https://aquarium-project-xi.vercel.app/
I used parcel: https://parceljs.org/getting-started/webapp/
I then created a src folder, moved all my media files (e.g. pictures and videos), HTML, CSS and .js filds into the src folder.

If you don't put these into the src folder, you may get an error.

Then do: npx parcel src/index.html. For me, the entry was index.html (which was giving me errors) because parcel cannot have HTML. I apologize... I should have documented how I fixed it. I forgot :( :( :(.

Inside Vercel, I had to change the output directory from dist (the default) to . (just a period).

