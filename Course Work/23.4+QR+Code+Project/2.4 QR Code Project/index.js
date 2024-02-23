/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer'; //set "type":"module" in package.json
import qr  from 'qr-image';
import fs, { writeFile } from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
     message: "Type or paste in a URL:",
     name: "url"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.url
    var qr_svg = qr.image(url);
    var fileName = url.replace('https://','').replace('www.','').replace('.','_');
    qr_svg.pipe(fs.createWriteStream(`./QRImages/${fileName}_qrcode.png`));

    writeFile(`./QRUrlText/${fileName}.txt`, url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      "Prompt couldn't be rendered in the current environment"
    } else {
      "uncaught error"
    }
  });


 
