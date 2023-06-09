// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');

// TODO: Create an array of questions for user input
// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter a brief description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "How should users install your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "Explain how to use your project.",
      name: "usage",
    },
    {
      type: "input",
      message: "How can others contribute to this project?",
      name: "contributions",
    },
    {
      type: "input",
      message: "What types of testing have been performed on this project?",
      name: "test",
    },
    {
      type: "list",
      maeesage: "What license do you want to add to your project?",
      choices: ["MIT", "GPLv2", "Apache", "BSD 3-Clause", "Other"],
      name: "license",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "GitHub",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ])
  // TODO: Create a function to write README file
  .then((answers) => {
    const resultOfFunction = generateMarkdownanswers(answers);
    fs.writeFile("README.md", resultOfFunction, (error) =>
      error
        ? console.log(error)
        : console.log("Your README file has been generated!")
    );
  });

const generateMarkdownanswers = ({
  title,
  description,
  installation,
  usage,
  contributing,
  test,
  license,
  GitHub,
  email,
}) =>
  `# ${title}
 
[![License: ${license}](https://choosealicense.com/${license})] 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Description
${description}
    
## Installation
${installation}
  
## Usage
${usage}
  
## Contributing
${contributing}
  
## Tests
${test}
  
## Questions
For questions about this project, please see my GitHub at [${GitHub}](https://github.com/${GitHub}/). 
You can also reach me by email at ${email}.
  
## License
This project is licensed under the ${license} license.`;