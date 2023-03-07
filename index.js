const inquirer = require("inquirer");
const faASYNC = require("fs/promises");
const licenseBadges = ["MIT", "Apache_2.0", "Boost_1.0", "BSD_3"];

const generateMarkdown = require("./utils/generateMarkdown");

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
  },

  {
    type: "text",
    name: "contribution",
    message: "what would you like to contribute?",
  },

  {
    type: "text",
    name: "test",
    message: "how would you like to test this?",
  },

  {
    type: "list",
    name: "license",
    message: "which license would you prefer?",

    choices: ["MIT", "Apache 2.0", "Boost_1.0", "BSD_3"],
  },
];

function readmePrompt() {
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log("readme prompt", data);

      writeToFile("README.md", generateMarkdown(data));
    })
    .catch((err) => console.error(err));
}

function writeToFile(fileName, data) {
  faASYNC
    .writeFile(fileName, data, { encoding: "utf-8" })
    .then(() => console.log("file written successfully"))
    .catch((err) => console.error("write file failed!", err.toString()));
}

function init() {
  readmePrompt();
}

init();

module.exports = generateMarkdown;
