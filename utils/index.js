
//pulling fileshare, packages, and other js file
const fs = require("fs");
const inquirer = require("inquirer");
const readmeTemplate = require("./generateMarkdown");

// TODO: Create an array of questions for user input

//used inquirer.prompt instead of questions array^^

// TODO: Create a function to write README file

//writeFile function is called at bottom of function init


// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title of your project/repo?",
        name: "Title",
      },
      {
        type: "input",
        message: "What is a description of the project?",
        name: "Description",
      },
      {
        type: "input",
        message: "What installation instructions will the user need to user your app?",
        name: "Installation",
      },
      {
        type: "input",
        message:
          "What usage information may the user need in order to get started (i.e, User Story or Acceptance Criteria)?",
        name: "Usage",
      },
      {
        type: "input",
        message: "Which, if any, collaborators would you like to include?",
        name: "Credits",
      },
      {
        type: "input",
        message: "What contribution guidelines do you want to include?",
        name: "Contributing",
      },
      {
        type: "input",
        message: "What instructions do you want to include for your demo/test?",
        name: "Test",
      },
      {
        type: "list",
        message: "Which license is the application covered under?",
        name: "License",
        choices: [
          "Apache",
          "MIT",
          "GPL v3",
          "Eclipse",
          "I don't know how to choose a license.",
        ],
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "Email",
      },
    ])
    .then((responses) => { //function to pull responsed and populate them in a new README file
      
      fs.writeFile("README.md", readmeTemplate(responses), (err) => {
        err
          ? console.error(err)
          : console.log("Congrats! Your README.md has been created.");
      });
    });
}

// Function call to initialize app
init();
