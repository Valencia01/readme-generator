const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title to your project?', 
    'Enter a small description of what your project is about.',
    'Check every compatible system.',
    'Enter details about how to install your program.',
    'Enter details about how to use your program.',
    'Input every author.',
    'Enter a the license you are using for your project.',
    'If you want to allow contributors to your project explain how otherwise type N/A.',
    'Enter your GitHub username.',
    'Enter your email as a point of contact.',

];

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0],
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1],
      },
      {
        type: 'checkbox',
        name: 'dependencies',
        message: questions[2],
        choices: ['macOS', 'Windows 10', 'Linux'],
      },
      {
        type: 'input',
        name: 'installation',
        message: questions[3],
      },
      {
        type: 'input',
        name: 'usage',
        message: questions[4],
      },
      {
        type: 'input',
        name: 'credits',
        message: questions[5],
      },
      {
        type: 'list',
        name: 'license',
        message: questions[6],
        choices: [
            'Apache v2.0', 
            'GNU v3.0', 
            'MIT', 
            'BSD 2 Clause', 
            'BSD 3 Clause', 
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
        message: questions[7],
      },
      {
        type: 'input',
        name: 'github',
        message: questions[8],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[9],
      },
    ]);
  };

  const generateMarkdown = ({title, description, dependencies, installation, usage, credits, license, contribution, github, email}) =>
  `# ${title}
      
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
    
  ![badge]()
    
  ## Contribution
    
  ${contribution}
    
  ## Questions
  Contact me for any questions with the following:
  - [Github](https://github.com/${github})
  - [${email}]()
  `;

// const renderLicenseBadge = ({license}) =>


//  {const badge = `https://img.shields.io/badge/License-${license}-blue`;
// }
//   newBadge = badge.split(' ').join('%20');
//   console.log(newBadge);
//   return newBadge;




function init() {
    promptUser()
      .then((answers) => writeFile('TEST.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully created a README file'))
      .catch((err) => console.log(err));
    
};

// Function call to initialize app
init();
