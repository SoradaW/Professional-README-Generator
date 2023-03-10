// fs is a Node standard library package for reading and writing files
const fs = require("fs");
const util = require('util');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js"); //internal


// array of questions prompts for user responses
const questions = [
  { //When a user enters the project title, it's displayed as the title of the README.
    type: 'input',
    name: 'title',
    message: 'What is your project title?', 
    validate: function (answer) {
      if (answer.length < 3) {
        return console.log("A valid project title is required.");
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a description of your project.',
    validate: function (answer) {
      if (answer.length < 10) {
        return console.log("A valid project description is required.")
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe the steps required to install your project (if applicable).',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples of your project in use (if applicable).',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide guidelines on how other developers can contribute to your project (if applicable).',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide any examples on how to run your application (if applicable).',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license of your project.',
    choices: ['None', 'Apache 2.0', 'GNU General Public v3.0', 'MIT', 'BSD 2-Clause "Simplified"', 'BSD 3-Clause "New" or "Revised"', 'Boost Software 1.0', 'Mozilla Public 2.0', 'The Unlicense'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    default: 'https://github.com/SoradaW'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What is your email address?',
    default: 'sorada.wright@gmail.com'
  }
];

// function to write README file 
// fs.writeFile() method replaces the specified file and content
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, error => {
    if (error) {
      return console.log(error);
    }
    console.log("Congrat! Your README.md file has been generated")
  });
}

// node.js' built-in util package has a promisify() function that converts callback-based functions to promise-based functions. This lets you use promise chaining and async/await with callback-based APIs(githubURL.js).
const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
// try catch finally in node.js handle runtime errors
// async makes a function return a Promise
async function init() {
  try {
    // prompt inquirer questions
    // await makes a function wait for a Promise
    const userResponses = await inquirer.prompt(questions);
    console.log("Your responses: ", userResponses);

    // pass inquirer userResponses and GitHub userInfo to generateMarkdown
    console.log("Generating your README next...")
    const markdown = generateMarkdown(userResponses);
    console.log(markdown);

    // write markdown to file
    await writeFileAsync('demoREADME.md', markdown);
  } 
    catch (error) {
    console.log(error);
  }
};

// function call to initialize program
init();
