// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeURL = "";

  switch (license) {
    case "Apache":
      badgeURL =
        `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "MIT":
      badgeURL =
        `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "GPL v3":
      badgeURL =
        `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "Eclipse":
      badgeURL =
        `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case "I don't know how to choose a license.":
      badgeURL =
        `https://choosealicense.com/`;
      break;
    default:
      badgeURL = ``;
  }

  return badgeURL;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  const licenseBadge = renderLicenseBadge(license);

  //adds License section back into README file with chosen license badge
  const licenseSection = `#### License

  ${license === `I don't know how to choose a license.` ? `You can learn how to choose a license here: ${licenseBadge}` : renderLicenseBadge(license)}`;

  return licenseSection;
}

// TODO: Create a function to generate markdown for README

//template for user README file
const readmeTemplate = function ({
  Title,
  Description,
  Installation,
  Usage,
  Credits,
  Contributing,
  Test,
  License,
  GitHub,
  Email,
}) {

  const licenseSection = renderLicenseSection(License);

  return `# ${Title}

  ## Description 

  ${Description}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Test Sample](#test-sample)
  - [License](#license)
  - [Questions](#questions)


  ## Installation

  ${Installation}

  ## Usage

  ${Usage}

  ### Credits

  ${Credits}

  ### Contributing

  ${Contributing}
  
  ### Test Sample

  ${Test}
  
  ${renderLicenseSection(License)}

  #### Questions

  If you have any further questions regarding the applications, feel free to reach out.
    
  - Github: ${GitHub}

  - Email: ${Email}
    
  `;
};
 //allows readme template function to be called in index.js file
module.exports = readmeTemplate;
