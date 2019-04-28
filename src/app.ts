import express = require("express");
import "reflect-metadata";
import * as statusController from "./controllers/status";

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req, res) => {
  res.send("Hi");
});
app.get("/insert",statusController.hi);
app.get("/find",statusController.hello);

// export our app
export default app;