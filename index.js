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
            name: "github",
            message: "Please enter your github username."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address."
        },
    ])
    .then((data) => {
        const title = data.title;
        const description = data.description;
        const license = data.license;
        const install = data.install;
        const usage = data.usage;
        const contribution = data.contribution;
        const github = data.github;
        const email = data.email;
        console.log(`Thanks, one moment while I generate your ${data.title} file`);

        const generateMarkdown = ` 
# ${data.title}

## Description
  ${data.description}

## License


## Table of Contents
-Description 
-License
-Installation
-Usage
-Contributions
-Questions

## Installation 
-${data.install}

## Usage 
${data.usage}

## Contributions
${data.contribution}

## Questions 
 Check out my github profile ${data.github}.
 For any additional questions please feel free to reach me at ${data.email}
`;

        fs.writeFile('README.md', generateMarkdown, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!'));
    });




// TODO: Create a function to write README file
// should call fs.writefile
function writeToFile(fileName, data) {


}
// TODO: Create a function to initialize app
// call inquirer.prompt(...).then(...)
function init() {

}

// Function call to initialize app
init();
