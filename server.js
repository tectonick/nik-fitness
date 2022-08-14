const express = require("express");
const handlebars = require("express-handlebars");
const mainRouter = require("./routes/main");
const path = require("path");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const https = require("https");
const fs = require("fs");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({
  extended: false,
  limit: "200mb",
});
const config = require("config");

const ssl = config.get("ssl");
const environment = process.env.NODE_ENV || "production";
const isDevelopment = environment === "development";

function CreateApp() {
  const app = express();
  const hbs = handlebars.create({
    defaultLayout: "main",
    extname: "hbs",
  });
  app.engine("hbs", hbs.engine);
  app.set("view engine", "hbs");
  app.enable("trust proxy");
  app.use(cookieParser());
  app.use(fileUpload());
  app.use(express.static(path.join(__dirname, "static")));
  app.use(mainRouter);

  return app;
}

function CleanTmpFolder() {
  if (fs.existsSync("./tmp")) {
    fs.rmdirSync("./tmp", { recursive: true });
    fs.mkdirSync("./tmp");
  }
}

function CreateServer(app) {
  if (!isDevelopment) CleanTmpFolder();
  // start http server
  const PORT = process.env.PORT || 80;
  app.listen(PORT, () => {
    console.log("Server started");
  });
  // start https server
  let sslOptions = {
    key: fs.readFileSync(ssl.key),
    cert: fs.readFileSync(ssl.cert),
  };
  https.createServer(sslOptions, app).listen(ssl.httpsport);
  //Log start
  if (isDevelopment) {
    console.log(`Server http address is http://localhost:${PORT}`);
    console.log(`Server https address is https://localhost:${ssl.httpsport}`);
  }
}

module.exports = { CreateApp, CreateServer };