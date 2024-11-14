// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0";
  } else if (license === "PERL") {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if {license !== "none"}
  // return `/n* [license](#license)/n`
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { //similar to HTML function from mini project,
  //except with a readme template instead of HTML
  return `
 # ${data.title}

## Description
  ${data.description}

## License
 ${data.license}

## Table of Contents
- [Description] (#description)
- [License] (#license)
- [Installation] (#installation)
- [Usage] (#usage)
- [Contributions] (#contributions)
- [Test] (#test)
- [Questions] (#questions)

## Installation 
${data.install}

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
}

export default generateMarkdown;
