// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
      
  ## Description
    
  ${data.description}
    
  ## Table of Contents
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Dependencies](#dependencies)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#contribution)
  - [Questions](#questions)
    
  ## Dependencies
    
  ${data.dependencies}
    
  ## Installation
    
  ${data.installation}
    
  ## Usage
    
  ${data.usage}
    
  ## Credits
    
  ${data.credits}
    
  ## License
    
  This project is licensed under the ${data.license} License - see the LICENSE file for details 
    
  ![badge]()
    
  ## Contribution
    
  ${data.contribution}
    
  ## Questions
  Contact me for any questions with the following:
  - [Github](https://github.com/${data.github})
  - [${data.email}]()
  `;
}

module.exports = {
  generateMarkdown,
}
