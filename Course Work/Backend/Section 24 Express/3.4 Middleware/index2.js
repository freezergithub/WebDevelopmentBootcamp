import express from "express";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import url from "url";

const app = express();
const port = 3000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//console.log(__filename);
//console.log(__dirname);

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
app.use(morgan('dev', { stream: accessLogStream }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
