# README-4-Newbie (Module 9 Challenge)

## Description

When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions. 

You can quickly and easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.

The task is to create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)

- [Credits](#credits)
- [License](#license)


- [Demo](#demo)
- [Links](#links)
- [Usage](#usage)
- [Test Sample](#test-sample)

## Installation

In order to install `inquirer`, please use `npm i inquirer@8.2.4` in your terminal.

The application will be invoked by using the following command:

`node index.js`

***Make sure to clone the starter code repository and make your own repository with the starter code. Do not fork the starter code repository!***

Before you start, clone the [starter code](https://github.com/coding-boot-camp/potential-enigma).

## User Story

``````
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
``````

## Acceptance Criteria

``````
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
``````

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Test Sample

Go the extra mile and write tests for your application. Then provide examples on how to run them here.


## Credits

[Coding Boot Camp GitHub Page](https://github.com/coding-boot-camp)

[Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the [MIT](LICENSE.txt) license.