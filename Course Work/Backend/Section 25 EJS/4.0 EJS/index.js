import express from "express";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});

//day = 0; //test weekend
//day = 1; //test weekday

let type = "a weekday";
let adv = "it's time to work hard";

if ((day === 0) || (day === 6)) {
    type = "the weekend";
    adv = "it's time to have some fun";
}

app.get("/", (req, res) => {
  res.render("index.ejs", 
    {
        dayType: type,
        advice: adv,
    });
});
