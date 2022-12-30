import "core-js";
import express from "express";
import configViewEngine from "./config/viewEngine";
require("dotenv").config();
const app = express();
var bodyParser = require("body-parser");
const router = express.Router();
const port = process.env.port || 8080;

//* parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//* parse application/json
app.use(bodyParser.json());

//* Use view engine EJS
configViewEngine(app);

//* import router
require("./routes/router").default(app, router);

app.listen(port, () => {
  console.log(`Example app listening on port: http://localhost:${port}`);
});
