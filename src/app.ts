import express = require("express");
import "reflect-metadata";
import * as statusController from "./controllers/status";

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req, res) => {
  res.send("to insert- insert?name=name of student&stream=<branch>&marks=marks obtain"+" "+"to find- find?name=student name");
});
app.get("/insert",statusController.insertion);
app.get("/find",statusController.search);

// export our app
export default app;