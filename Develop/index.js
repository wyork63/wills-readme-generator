// Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs"); 

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "username",
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            } else {
              console.log('Please enter a GitHub username!');
              return false;
            }
          }
    },
    {
        type: "input",
        message: "What is the name of your GitHub Repo?",
        name: "repo",
        validate: repoInput => {
            if (repoInput) {
              return true;
            } else {
              console.log('Please enter a repo name!');
              return false;
            }
          }
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter an Email');
              return false;
            }
          }
    },
    {
        type: "input",
        message: "What is the title of this project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please give a description of your proect.",
        name: "description",
    },
    {
        type: "input",
        message: "What needs to be installed on the machine to run this project?",
        name: "install",
    },
    {
        type: "input",
        message: "What is this app used for?",
        name: "usage",
    },
    {
        type: "checkbox",
        message: "What license are you using on this project? (Only choose one option)",
        name: "license", 
        choices: ['MIT', 'GPLv2', 'Apache', 'Other'],
    },
    {
        type: "input",
        message: "List out any contributors aside from youself.",
        name: "contributors",
    },
    {
        type: "input",
        message: "Once setup, what command is used to run this app?",
        name: "test",
    },
];

//Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully wrote: " + fileName)
    })
}

//Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
