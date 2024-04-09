import express from "express";
const app = express();
const port = 3000;

//req = request | res = response;  could name whatever
app.get('/',(req,res) => {
    res.send("Hello, World!");
});

//web browser localhost:3000/about
app.get("/about",(req,res) => {
    res.send("<h1>About Me</h1>");
});

//contact
app.get("/contact", (req,res) => {
    res.send("My Phone Number: 1-800-YAH-NOPE")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});