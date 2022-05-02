const livereload = require("livereload");
const express = require("express");
const path = require("path");
const connectLivereload = require("connect-livereload");

// open livereload high port and start to watch public directory for changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

// ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();

app.listen(3000);

// monkey patch every served HTML so they know of changes
app.use(connectLivereload());
