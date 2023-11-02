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

const fs = require("fs");
const inquirer = require("inquirer");

const { title } = require("process");

// TODO: Create an array of questions for user input

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
      message: "What are the installation instructions?",
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
        "MIT license",
        "GNU GPLv3",
        "The Unlicense",
        "I am not sure yet",
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
  .then((responses) => {

    fs.writeFile('README.md', readmeTemplate(responses), (err) => {
      err ? console.error(err) : console.log("Congrats! Your README.md has been created.");
    })
  })


const readmeTemplate = `# ${Title}

  ## Description 

  ${Description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test Sample](#test-sample)
  - [License](#license)
  - [Questions](#questions)


  ## Installation

  ${Installation}

  ## Usage

  ${Usage}

  ### Contributing

  ${Contributing}

  ### Test

  ${Test}

  #### License

  ${License}

  #### Questions

  If you have any further questions regarding the applications, feel free to reach out.
    
  - Email: ${Email}

  - Github: ${GitHub}
    
  `

    

//------------------------------------------------------------

const README = `${responses.toLowerCase().split(" ").join("")}.md`;

const questions = [
  "What is the title of your project/repo?",

  "What is the description of the project?",

  "What are the installation instructions?",

  "What usage information may the user need in order to get started (i.e, User Story or Acceptance Criteria)?",

  "What contribution guidelines do you want to include?",

  "What instructions do you want to include for your demo/test?",

  "Which license is the application covered under?",

  "What is your GitHub username?",

  "What is your email address?",
];

const [
  Title,
  Description,
  Installation,
  Usage,
  Contributing,
  Test,
  License,
  GitHub,
  Email,
] = questions;

// TODO: Create a function to write README file
function writeToFile(README, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
