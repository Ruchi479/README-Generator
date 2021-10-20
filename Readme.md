# Week9 Homework: Readme Generator

# Brief Description about Homework:
* Create a command-line application that dynamically generates a README.md from a user's input. 
The user will be prompted with questions about their project. As an example, you can check out the SampleREADME.md file in this repository.

The application will be invoked by using the following command:

```bash
node index.js
```
The README will be populated with the following:

* At least one badge
* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
* User GitHub email

## Following the common templates for user stories, we can frame this challenge as follows:

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Minimum Requirements

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

# Video link

* [The URL of the Video](https://watch.screencastify.com/v/01UjOgriLsCIuD0x1bsy)

# Screenshots
![Readme Generator](./assets/img/ss1.jpg)
![Readme Generator](./assets/img/ss2.jpg)