const inquirer = require("inquirer");
const faASYNC = require("fs/promises");
const licenseBadges = ["MIT", "Apache_2.0", "Boost_1.0", "BSD_3"];

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "text",
    name: "title",
    message: "what title would you like to give your README.md?",
  },

  {
    type: "text",
    name: "description",
    message: "what would you like your description to be?",
  },

  {
    type: "text",
    name: "installation",
    message: "how would you like your customer's to install your application?",
  },

  {
    type: "text",
    name: "usage",
    message: "How would you like to use this application?",

    type: 'text',
    name: 'contribution',
    message: "what would you like to contribute?",

    type: 'text',
    name: 'test',
    message: "how would you like to test this?"
  },
];

function readmePrompt() {
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log("readme prompt", data);
      //onst markdown = generateMarkdown(data);

      writeToFile("README.md", generateMarkdown(data));
    })
    .catch((err) => console.error(err));
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //faASYNC.writeFile(fileName, data);
  faASYNC
    .writeFile(fileName, data, { encoding: "utf-8" })
    .then((result) => console.log("file written successfully", result))
    .catch((err) => console.error("write file failed!", err.toString()));
}

// TODO: Create a function to initialize app
function init() {
  readmePrompt();
}

// Function call to initialize app
init();

module.exports = generateMarkdown;
