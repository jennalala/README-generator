const fs = require("fs");
const inquirer = require("inquirer");
const utils = require("utils");
// const generateMarkdown = require("./utils/generateMarkdown);

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  inquirer.prompt([

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
]),

questions()
.then((data) => writeFileAsync("EXAMPLE-README.md", generateMarkdown(data)))
.then(() => console.log("Successfully wrote to md file"))
.catch((err) => console.error(err))]
