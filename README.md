# Professional README Generator

## Working with ES6 & Node.js

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions-this last part increases the likelihood that other developers will contribute to the success of the project. 

We can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

This project is to create a command-line application that dynamically generates a professional README.md file from a user's input. Check out this [README](https://github.com/SoradaW/Professional-README-Generator/blob/main/demoREADME.md) as an example.
 
## Application's functionality

* Create a command-line application that accepts user input.
  * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

## Installation

Here are some guidelines to help you get started:

* Create new repository in GitHub, then `git clone` to your local.

* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

* Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.

* Run `npm install inquirer` to copy library for inquirer into `node_modules` this npm package dependencies will prompt you for your inputs from the command line.

* The application will be invoked by using `node index.js` command.

## Review

* A walkthrough video demonstrating the functionality of the application.

[Demo]()

* A sample README.md file for a project repository generated using the application click [here](https://github.com/SoradaW/Professional-README-Generator/blob/main/demoREADME.md).

* Any questions please send me an [email](sorada.wright@gmail.com).

---

© 2023 | Sorada Wright | All Rights Reserved.
