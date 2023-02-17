// fs is a Node standard library package for reading and writing files
const fs = require("fs");
const path = require('path');
const util = require('util');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions prompts for user responses
const questions = [
  { //When a user enters the project title, it's displayed as the title of the README.
    type: 'input',
    name: 'title',
    message: 'What is your project title?', 
    default: 'Project Title',
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
    default: 'Project Description',
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
    message: 'If applicable, describe the steps required to install your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'If applicable, provide instructions and examples of your project in use.',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'If applicable, provide guidelines on how other developers can contribute to your project.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'If applicable, provide any examples on how to run your application.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license of your project.',
    choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'The Unlicense'],
  },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
