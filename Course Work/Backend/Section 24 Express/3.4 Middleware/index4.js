import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName;

//every req parameter below will now have .body that can be tapped into
app.use(bodyParser.urlencoded({extended:true}));

function bandNameGenerator(req,res,next) {
  console.log(req.body);
  bandName =req.body["street"] + req.body["pet"];
  //console.log(bandName);
  next();
};

app.use(bandNameGenerator);

app.get("/",(req,res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res) => {
  res.send(`<h1>Your band name is:<h2>${bandName}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
