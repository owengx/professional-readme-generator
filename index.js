// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// import generateMarkdown from './utils/generateMarkdown';

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
            type: "list",
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
    ])
    .then((data) => {
        const title = data.title;
        const description = data.description;
        const license = data.license;
        const install = data.install;
        const usage = data.usage;
        const contribution = data.contribution;
        const test = data.test;
        const github = data.github;
        const email = data.email;
        console.log(data)
        console.log(`Thanks, one moment while I generate your ${data.title} file`);


        const generateMarkdown = ` 
# ${data.title}

## Description
  ${data.description}

## License
 ${data.license}

## Table of Contents
* [Description] (#description)
* [License] (#license)
* [Installation] (#installation)
* [Usage] (#usage)
* [Contributions] (#contributions)
* [Test] (#test)
* [Questions] (#questions)

## Installation 
-${data.install}

## Usage 
${data.usage}

## Contributions
${data.contribution}

##Test
${data.test}

## Questions 
 Check out my github profile https://github.com/${data.github}/.

 For any additional questions please feel free to reach me at ${data.email}
`;
//writes readme.md file
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

