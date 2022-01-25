const inquirer = require("inquirer");
const fs = require("fs");

const getBadge = (license) => {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "Boost":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "GNU":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "BSD":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "No license":
      return "";
  }
};

const generate = ({
  title,
  description,
  contents,
  installation,
  usage,
  license,
  contributing,
  tests,
  contact,
}) => {
  const badge = getBadge(license);

  return `# ${title}      
${badge}

## Description of the project:
${description}

## Table of contents 
${contents}

## Installation instructions: 
${installation}
    
## Usage:   
${usage}

## Contributing:   
${contributing}

## Tests:   
${tests}

## Questions:   
${contact}`;
};

const init = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter a title for your project..",
      },
      {
        type: "input",
        name: "description",
        message: "Enter a description of the project..",
      },
      {
        type: "input",
        name: "contents",
        message:
          "Enter the table of contents for the readme file that will be generated..",
      },
      {
        type: "input",
        name: "installation",
        message: "Enter instructions on how to install the project..",
      },
      {
        type: "input",
        name: "usage",
        message: "Enter usage instructions..",
      },
      {
        type: "list",
        name: "license",
        choices: ["MIT", "Apache", "Boost", "GNU", "BSD", "No license"],
        message: "Enter a license type..",
      },
      {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines..",
      },
      {
        type: "input",
        name: "tests",
        message: "Enter what tests were run before deployment..",
      },
      {
        type: "input",
        name: "contact",
        message: "Enter contact info for questions..",
      },
    ])
    .then((data) => {
      const readmeContent = generate(data);
      fs.writeFile("SampleREADME.md", readmeContent, (err) =>
        err ? console.log(err) : console.log("Success")
      );
    });
};

init();
