
// TODO create a command-line application that accepts user input
// TODO user is asked a series of questions that the user answers regarding their application repo

// TODO once the questions are answered, a README.md is created that displays the title of user project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO the first question the user will input is "What is the project title?"
// TODO the next questions will be: "What is the description of the project?" "List installation instructions:" "Include Usage Information including User Story and Acceptance Criteria" "Include Contribution Guidelines" "Include Test Instructions"
// TODO add this information to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// TODO have the user choose a license for the application from a list of options
// TODO create a badge for that license to be added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// TODO create a prompt for the user to enter their GITHUB USERNAME
// TODO add the username to the section of the README entitled Questions, with a link to the GitHub profile

// TODO create a prompt for the user to enter their email address
// TODO add the email to the section of the README entitled Questions, with instructions on how to reach them with additional questions

// TODO make the TABLE OF CONTENTS bullets links so the user can click on them and be taken to the corresponding section of the README`










// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project/repo?',
      name: 'title',
    }
  ]).then(response => {

    console.log(response.title);

    const README = `${response.title.toLowerCase().split(' ').join('')}.md`

    fs.writeFile('README', JSON.stringify(response, null, '\t'), err => {
      err ? console.error(err) : console.log('Congrats! Your README.md has been created.');
    })
  })

const questions = [];
console.log(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
