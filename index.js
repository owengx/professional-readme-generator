// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: "input",
        name: "title",
        message: "What is your project called?"
    },

    {
        type: "input",
        name: "description",
        message: "Describe your application and it's use."
    },
    {
        type: "checkbox",
        name: "license",
        choices: ['mit', 'perl', 'mozilla'],
        message: "Please select a license"
    
    },
    {
        type: "input",
        name: "table of contents",
        message: "Please list your table of contents"
    },
    {
        type: "input",
        name: "installation instructions",
        message: "What were the steps required to install your project?"
    },
    {
        type: "input",
        name: "Usage",
        message: "Describe the main use of the application?"
    },
    {
        type: "input",
        name: "contribution",
        message: "List any contributors to this application"
    },
]) 
// const questions = [
//     {
//         type: "input",
//         name: "title",
//         message: "What is your project called?"
//     },
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // should call fs.writefile

}
// TODO: Create a function to initialize app
function init() {
    // call inquirer.prompt(...).then(...)
}

// Function call to initialize app
init();
