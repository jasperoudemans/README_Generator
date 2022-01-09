const inquirer = require("inquirer");
const fs = require("fs");

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
}) =>
  `# ${title}

## Description of the project:
${description}

## Table of contents 
${contents}

## Installation instructions: 
${installation}
    
## Usage:   
${usage}

## License:   
${license}

## Contributing:   
${contributing}

## Tests:   
${tests}

## Questions:   
${contact}`;

const init = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter a title for your repository..",
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
      fs.writeFile("README.md", readmeContent, (err) =>
        err ? console.log(err) : console.log("Success")
      );
    });
};

init();
