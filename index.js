// TODO: Include packages needed for this application

const generate = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is the name of your application?",
    "Description: Please enter a description about your application",
    "Installation: What are the steps required to install your project?",
    "Usage: Provide instructions and examples for use.",
    "Contribution Guidelines: List your collaborators, if any.",
    "Test Instructions: Provide instructions on how to run your tests",
    "Licensing: What licensing would you like to include in your project?",
    "Github: What is your github username?",
    "E-mail: What is your email?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
    let content = generate(data);
    fs.writeFile(fileName, content, (err) =>
    err ? console.log(err) : console.log('Success! Your page was created'))
}

// TODO: Create a function to initialize app
function init() 
{
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'Title',
        message: questions[0],
    },
    {
        type: 'input',
        name: 'Description',
        message: questions[1],
    },
    {
        type: 'input',
        name: 'Installation',
        message: questions[2],
    },
    {
        type: 'input',
        name: 'Usage',
        message: questions[3],
    },
    {
        type: 'input',
        name: 'Contribution',
        message: questions[4],
    },
    {
        type: 'input',
        name: 'Tests',
        message: questions[5],
    },
    {
        type: 'list',
        name: 'License',
        message: questions[6],
        choices: ['No licensce','Apache License 2.0.', 'MIT License', 'GNU GPL v3', 'ISC License'],
    },
    {
        type: 'input',
        name: 'Github',
        message: questions[7],
    },
    {
        type: 'input',
        name: 'Email',
        message: questions[8],
    },
    
    ])
    .then((data) => {

        writeToFile("README.md", data);

    });
}

// Function call to initialize app
init();
