const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./util/generateMarkdown");
// const util = require("./util/generateMarkdown");

// const writeFileAsync = generateMarkdown.promisify(fs.writeFile);

const questions = [

  {
    type: "input",
    name: "title",
    message: "What is your title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe what your project does?",
  },
  {
    type: "input",
    name: "install",
    message: "How do you install your project?",
  },
  {
    type: "input",
    name: "test",
    message: "How do you test this project?",
  },
  {
    type: "input",
    name: "tech",
    message: "What technology did you use?",
  },
  {
    type: "input",
    name: "url",
    message: "Please share the COMPLETE URL to access your project.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Who contributed to your project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username without the @ symbol?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "checkbox",
    name: "licenseBadge",
    message: "Pick a license for this application.",
    choices: [
      {
        name: "MIT",
        value: "MIT",
      },
      {
        name: "Apache",
        value: "Apache",
      },
    ],
    default: ["MIT"],
  },
  {
      type: "checkbox",
      name: "license",
      message: "Pick a license to display at the bottom of markdown.",
      choices: [
        {
          name: "MIT",
          value: "https://opensource.org/licenses/MIT",
        },
        {
          name: "Apache",
          value: "https://www.apache.org/licenses/LICENSE-2.0",
        },
      ],
      default: ["MIT"],
    },
];


  // function to initialize program
  function init() {
      inquirer.prompt(questions).then((response) => {
          fs.writeFileSync("generatedREADME.md", generateMarkdown(response) , function (err) {
  
              if (err) {
                  console.log(err)
              }
              else {
                  console.log("It works.")
              }
          })
      })
  }
  
  init();