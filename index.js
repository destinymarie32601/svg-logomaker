const inquirer = require("inquirer"); //install required packages
const fs = require("fs");
const generateSvg = require("./lib/logogenerator");
const path = require("path"); //requires path to send the files to the example folder

const textLength = async (input) => {
    if (input.Length > 3 || input.Length < 1) {
        console.log("You must enter the correct amount of characters");
    } else {
        return true;  //validating the text input
    }
}

const userPrompt = inquirer.prompt([ //prompt for the user input to design their logo
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text for your logo! Hint: must be at least 1 character and no more than 3!):',
        validate: textLength,
    },
    {
        type:'input',
        name:'textColor',
        message: 'Enter a color for your logo text',
    },
    {
        type:'list',
        name:'shape',
        message:'Choose a shape for your logo',
        choices:['Circle','Triangle','Square']
    },
    {
        type:'input',
        name:'shapeColor',
        message:'What color would you like your logo to be?',
    }
]) .then(response => {  //sends the users shape with the _logo.svg file name to the examples folder
    const logo = generateSvg(response);
    const filename = `${response.shape.toLowerCase()}_logo.svg`;
    const filePath = path.join(__dirname, 'examples', filename);

    fs.writeFile(filePath, logo, (err) => {
        if (err) {
            console.error('Error creating the logo', err);
        } else { //console log error if any errors
            console.log(`Generated ${filename} in the examples folder`);
        } //console log if the logo generator was successful
    });
})
.catch(error => {
    console.error('An error has occured:', error);
});
//.then(response => writeToFile(response));

//function writeToFile(response) {
 //   fs.writeFile("logo.svg", generateLogo(response), (err) => err ? console.log(err) : console.log("Generated logo.svg!"));
//}