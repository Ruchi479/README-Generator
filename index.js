// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "GitHubUsername",
        message: "What is your GitHub Username?"
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "ProjectTitle",
        message: "What is your Project's name?",
    },
    {
        type: "input",
        name: "ProjectDescription",
        message: "Please write a short description of your project?",
    },
    {
        type: "list",
        name: "Licence",
        message: "What kind of Licence should your Project have?",
        choices: 
        [   {
                name: "MIT",
            },
            {
                name: "APACHE 2.0"
            },
            {
                name: "GPL 3.0"
            },
            {
                name: "BSD 3"
            },
            {
                name: "None"
            }
        ]
    },
    {
        type: "input",
        name: "Dependencies",
        message: "What command should be run to install dependencies?",
    },
    {
        type: "input",
        name: "Test",
        message: "What command should be run to run tests?",
    },
    {
        type: "input",
        name: "Repository",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "Contribution",
        message: "What does the user need to know about contributing to the repo?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err): console.log("You have successfully created a Readme file")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userInput) => {
        console.log(userInput);
        writeToFile("Readme.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
