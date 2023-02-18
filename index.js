// fs is a Node standard library package for reading and writing files
const fs = require("fs");
const path = require('path');
const util = require('util');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js"); //internal
const gitHubURL = require('./utils/githubURL.js'); //internal

// array of questions prompts for user responses
const questions = [
  { //When a user enters the project title, it's displayed as the title of the README.
    type: 'input',
    name: 'title',
    message: 'What is your project title?', 
    validate: function (answer) {
      if (answer.length < 1) {
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
      if (answer.length < 1) {
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
    choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'The Unlicense'],
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What is your GitHub username?',
    default: 'SoradaW'
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

// node.js' built-in util package has a promisify() function that converts callback-based functions to promise-based functions. This lets you use promise chaining and async/await with callback-based APIs.
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
    console.log("Thank you for your responses! Fecthing your GitHub data next...");

    // call github url for user info
    const usergitHubURL = await gitHubURL.getUser(userResponses);
    console.log("Your GitHub user info: ", usergitHubURL);

    // pass inquirer userResponses and GitHub userInfo to generateMarkdown
    console.log("Generating your README next...")
    const markdown = generateMarkdown(userResponses, usergitHubURL);
    console.log(markdown);

    // write markdown to file
    await writeFileAsync('exampleREADME.md', markdown);
  } 
    catch (error) {
    console.log(error);
  }
};

// function call to initialize program
init();
