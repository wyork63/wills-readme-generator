// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs"); 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
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
        choices: ['MIT', 'GPLv2', 'Apache', 'Other']
    },
    {
        type: "input",
        message: "List out any contributors aside from youself.",
        name: "contributors",
    },
    {
        type: "input",
        message: "Once setup, how do you test this app?",
        name: "test",
    },
    {
        type: "input",
        message: "Questions? please email ",
        name: "questions",
    }

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
