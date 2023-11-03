// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeURL = "";

  switch (license) {
    case "Apache 2.0":
      badgeURL =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "MIT":
      badgeURL =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "GPL v3":
      badgeURL =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "EPL 1.0":
      badgeURL =
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "I don't know how to choose a license.":
      badgeURL =
        "https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba";
      break;
    default:
      badgeURL = "";
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
  const licenseSection = `#### License

  ${license === "I don't know how to choose a license" ? "You can learn how to choose a license here: " : renderLicenseBadge(license)}`;

  return licenseSection;
}

// TODO: Create a function to generate markdown for README

const readmeTemplate = function ({
  Title,
  Description,
  Installation,
  Usage,
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
  
  ${renderLicenseSection()}

  #### Questions

  If you have any further questions regarding the applications, feel free to reach out.
    
  - Email: ${Email}

  - Github: ${GitHub}
    
  `;
};

module.exports = readmeTemplate;
