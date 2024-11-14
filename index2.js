// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown2.js';
// TODO: Create an array of questions for user input
const questions = [{
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
    type: "list",
    name: "license",
    choices: ['none','mit', 'perl', 'mozilla'],
    message: "Please select a license."

},
{
    type: "input",
    name: "install",
    message: "What were the steps required to install your project?"
},
{
    type: "input",
    name: "usage",
    message: "Describe the main use of the application?"
},
{
    type: "input",
    name: "contribution",
    message: "List any contributors to this application."
},
{
    type: "input",
    name: "test",
    message: "How do you test your application?"
},
{
    type: "input",
    name: "github",
    message: "Please enter your github username."
},
{
    type: "input",
    name: "email",
    message: "Please enter your email address."
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log('Error writing to file:', err);
    } else {
      console.log('README.md file has been generated!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        // Generate the markdown from user input
        const markdown = generateMarkdown(answers);
        
        // Write the README file
        writeToFile('README.md', markdown);
      })
      .catch((error) => {
        console.log('Error initializing the app:', error);
      });
  }

// Function call to initialize app
init();