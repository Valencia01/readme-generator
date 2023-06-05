//generates a badge by using the same link and replacing any spaces with %20 if necessary
function renderLicenseBadge(license) {

  var badge = `https://img.shields.io/badge/License-${license}-blue`;

  newBadge = badge.split(' ').join('%20');

  return newBadge;
}

//a function to generate markdown for README
function generateMarkdown(data) {
  let finalBadge = renderLicenseBadge(data.license);
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
    
  ![badge](${finalBadge})
    
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
