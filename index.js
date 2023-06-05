const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title to your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a small description of what your project is about.',
      },
      {
        type: 'checkbox',
        name: 'dependencies',
        message: 'Check every compatible system.',
        choices: ['macOS', 'Windows 10', 'Linux'],
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter details about how to install your program.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter details about how to use your program.',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Input every author.',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Enter a the license you are using for your project.',
        choices: [
            'Apache v2.0', 
            'GNU v3.0', 
            'MIT', 
            'BSD 2-Clause', 
            'BSD 3-Clause', 
            'Boost Software v1.0', 
            'Creative Commons Zero v1.0', 
            'Eclipse Public v2.0',
            'GNU v3.0',
            'GNU v2.0',
            'GNU v2.1',
            'Mozilla v2.0',
        ],
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'If you want to allow contributors to your project explain how otherwise type N/A.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email as a point of contact.',
      },
    ]);
  };

  const generateMarkdown = ({title, description, dependencies, installation, usage, credits, license, contribution, github, email}) =>
  `
  # ${title}
      
  ## Description
    
  ${description}
    
  ## Table of Contents
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Dependencies](#dependencies)
  - [Credits](#credits)
  - [License](#license)
  - [Contribution](#contribution)
  - [Questions](#questions)
    
  ## Dependencies
    
  ${dependencies}
    
  ## Installation
    
  ${installation}
    
  ## Usage
    
  ${usage}
    
  ## Credits
    
  ${credits}
    
  ## License
    
  This project is licensed under the MIT License - see the LICENSE file for details 
    
  ![badge](https://img.shields.io/badge/License-${license}-blue)
    
  ## Contribution
    
  ${contribution}
    
  ## Questions
  Contact me for any questions with the following:
  - [Github](https://github.com/${github})
  - [${email}]()
  `;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser()
      .then((answers) => writeFile('TEST.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully created a README file'))
      .catch((err) => console.log(err));
    
};

// Function call to initialize app
init();
