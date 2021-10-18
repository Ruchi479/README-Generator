// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs =require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

console.log('Hello! Time to create a README.md file for your project!');

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
        message: "Please enter the title of your Project?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the Project Title');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "ProjectDescription",
        message: "Please write a short description of your project?",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a Project Description');
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "What kind of License should your Project have?",
        choices: 
        [   {
                name: "MIT",
            },
            {
                name: "GPL 3.0"
            },
            {
                name: "Apache Licence 2.0"
            },
            {
                name: "Mozilla Public License 2.0"
            },
            {
                name: "None"
            }
        ]
    },
    {
        type: "input",
        name: "Installation",
        message: "Please enter how to install this Project?",
    },
    {
        type: "input",
        name: "Test",
        message: "How do you test this Project?",
    },
    {
        type: "input",
        name: "Usage",
        message: "How do you use this Project?",
    },
    {
        type: "input",
        name: "Contributions",
        message: "Who contributed in making this project?",
    },
    {
        type: "input",
        name: "FAQ1",
        message: "Please reach us here if you have any additional questions",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err): console.log("New README file created with success")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userInput) => {
        console.log(userInput);
        writeToFile("Readme.md", generateMarkdown(userInput));
    })
    //.catch((err) => console.error(err));
}

// Function call to initialize app
init();
