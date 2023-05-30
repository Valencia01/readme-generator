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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    
}

// Function call to initialize app
init();
