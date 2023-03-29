// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
      type:'input',
      prompt: 'what is your project title?',
      name: 'title'
    },
    {
      type: 'input',
      prompt: 'describe your project',
      name: 'description'   
    },
    {
      type: 'input',
      prompt: 'what are the steps for installing your project?',
      name: 'installation'
    },
    {
      type: 'input',
      prompt: 'please provide instructions and visual explamples for utilizing your project',
      name: 'Usage'
    },
    {
      type: 'input',
      prompt: 'please list any collaboartors and provide links to third-party resources',
      name: 'credits'
    },    
    {
     type: 'input',
     prompt: 'what type of license does your project have?',
     name: 'license'  
    },
    {
      type: 'input',
      prompt: 'list your projects features',
      name: 'features'
    },
    


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
