

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
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
      },
      {
          type: 'input',
          name: 'description',
          message: 'describe your repository',
      },
      {
          type: 'input',
          name: 'how to install',
          message: 'how do you install?',
      },
      {
          type: 'input',
          name: 'tech used',
          message: 'what technology did you use?',
      },
      {
          type: 'input',
          name: 'url name',
          message: "what is your URL?",
      },
      {
          type: 'input',
          name: "contributors",
          message: "who are the contributors to your repo?",
      },
      {
          type: 'input',
          name: 'github username',
          message: 'what is your GitHub user name?',
      },
      {
          type: 'input',
          name: 'github email',
          message: 'What is your GiyHub email?'
      },
];


// function to initialize program
const init = () => {
  //Inquirer prompts above defined questions then writes the readme file
  inquirer.prompt(questions).then((data) => {
    const fileName = `${data.title
      .toLowerCase()
      .split(" ")
      .join("-")}-README.md`;
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
      err ? console.error(err) : console.log("Success!")
