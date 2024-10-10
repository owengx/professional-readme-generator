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
        message: "Describe what your application will do"
    }
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
