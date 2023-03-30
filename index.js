// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
// TODO: Create an array of questions for user input
 const questions= [{
      type:'input',
      message: 'what is your project title?',
      name: 'title'
    },
    {
      type: 'input',
      message: 'describe your project',
      name: 'description'   
    },
    {
      type: 'input',
      message: 'what are the steps for installing your project?',
      name: 'installation'
    },
    {
      type: 'input',
      message: 'please provide instructions and visual explamples for utilizing your project',
      name: 'Usage'
    },
    {
      type: 'input',
      message: 'please list any collaboartors and provide links to third-party resources',
      name: 'credits'
    },    
    {
     type: 'input',
     message: 'what type of license does your project have?',
     name: 'license'  
    },
    {
      type: 'input',
      message: 'list your projects features',
      name: 'features'
    },
    {
      type: 'input',
      message: 'please provide a URL for GitHub repositories',
      name: 'GitHub'
    }
  ]
// TODO: Create a function to write README file
function generateMarkdown(data) {
  return `# ${data.title}
  ##Description
  ${data.description}
  ##Installation
  ${data.installation}
  ##Usage
  ${data.usage}
  ##Credits
  ${data.credits}
  ##License
  ${data.license}
  ##Features
  ${data.features}
  ##Github
  ${data.github}
`
}
function writeToFile(fileName, data) {}
fs.writeFile(fileName,data,(error) => {
  if (error) throw error;
  console.log('Please review your dynamically generated README file');
});
// TODO: Create a function to initialize app
init ()
  inquirer.prompt(questions).then(data)
  const generated = generateMarkdown(data,input);
  writeToFile('README.md',generated);

// Function call to initialize app
//init();
