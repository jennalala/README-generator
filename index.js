

const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require("./utils/gereateMarkdown.js')
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      },
      {
          type: 'input',
          name: 'githubRepo',
          message: 'What is the name of your GitHub repo?',
      }
      {
          type: 'input',
          name: 'description',
          message: 'describe your repository',
      }
      {
          type: 'input',
          name: 'how to install',
          message: 'how do you install?',
      }
      {
          type: 'input',
          name: 'tech used',
          message: 'what technology did you use?',
      }
      {
          type: 'input',
          name: 'url name',
          message: "what is your URL?",
      }
      {
          type: 'input',
          name: "contributors",
          message: "who are the contributors to your repo?",
      }
      {
          type: 'input',
          name: 'github username',
          message: 'what is your GitHub user name?',
      }
      {
          type: 'input',
          name: 'github email',
          message: 'What is your GiyHub email?'
      }
];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
    inquirer.prompt(questions)
}

// function call to initialize program
init();


const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () =>
