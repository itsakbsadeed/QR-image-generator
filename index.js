/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer'; 
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "What is the URL you would like to turn into a QR code?",
        name: "URL", // this is the key that we will use to access the answer
    }
  ])
  .then((answers) => {
    const url = answers.URL; // this is the answer to the question
    const qrImage = qr.image(url); // create a qr code image
    qrImage.pipe(fs.createWriteStream('qr.png')); // save the image to a file

    fs.writeFile('url.txt', url, (err) => {}); // save the url to a file

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment

    } else {
      // Something else went wrong
    }
  });