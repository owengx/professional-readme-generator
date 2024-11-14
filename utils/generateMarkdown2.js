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
    function renderLicenseLink(license) { }

    // TODO: Create a function that returns the license section of README
    // If there is no license, return an empty string
    function renderLicenseSection(license) { }

    // TODO: Create a function to generate markdown for README
    function generateMarkdown(data) {
        return `# ${data.title}

        ${renderLicenseBadge(data.license)}
        ## Title

        ## Description
        ${data.description}
        
        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)
        
        ## Installation
        ${data.installation}
        
        ## Usage
        ${data.usage}
        
        ${renderLicenseSection(data.license)}
        
        ## Contribution
        ${data.contributing}
        
        ## Tests
        ${data.tests}
        
        ## Questions
        If you have any questions, feel free to reach out to me on [GitHub](https://github.com/${data.github}) or via email at [${data.email}](mailto:${data.email}).
`;
    }

    export default generateMarkdown;