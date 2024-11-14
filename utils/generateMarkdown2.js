// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'None') {
        return '';
    } else if (license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license === 'Mozilla') {
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    } else if (license === 'Perl') {
        return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
        return '';
    } else if (license === 'MIT'){
        return '[MIT License](https://opensource.org/licenses/MIT)'
    } else if (license === 'Mozilla'){
        return '[Mozilla License](https://opensource.org/licenses/MPL-2.0)'
    } else if (license === 'Perl'){
        return '[Perl License](https://opensource.org/licenses/Artistic-2.0)'
    }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
      }
    
    return `## License
    Licensed under the ${license} license. For more details, checkout the [license details](${renderLicenseLink(license)}).`;
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

  ${renderLicenseBadge(data.license)}
## ${data.title}
        
## Description
${data.description}
        
## Table of Contents
* [Screenshots](#screenshots)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contributon)
* [Tests](#test)
* [Questions](#questions)

## Screenshots
![Screenshot of project](./assets/screenshot1.png)
![Screenshot of project](./assets/screenshot2.png)
![Screenshot of project](./assets/screenshot3.png)
        
## Installation
 ${data.install}
        
## Usage
${data.usage}
  
${renderLicenseSection(data.license)}
        
## Contribution
${data.contribution}
        
## Tests
${data.test}
        
## Questions
If you have any questions, feel free to reach out to me on [GitHub(https://github.com/${data.github})] or via email at [${data.email}].
`;
}

export default generateMarkdown;