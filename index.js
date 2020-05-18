const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js')
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? (Required)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project. (Required)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Any installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Any usage instructions?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What are you licenses for this project?',
        choices: ['Apache 2.0', 'IBM', 'Mozilla Public 2.0', 'MIT']
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, third-party assets, or tutorials if any.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Any instructions to test the project?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    return inquirer.prompt(questions)
}

// function call to initialize program
init();
