//use filesystem - fs - module
const fs = require("fs");

//create file
fs.writeFile("message1.txt", "Hello from NodeJS!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

//read a file, utf8 encoding otherwise get asci code print out
fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 