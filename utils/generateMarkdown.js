// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("rendering badge", license);
  if (
    (typeof license === "string" && license === "MIT") ||
    "Apache 2.0" ||"Boost Software"
  ) {
    return `
    ### BADGE SECTION
    ![${license} license placholder text](https://img.shields.io/badge/license-${license}-blue)
    `;
  }

  return `
  ___Unlicensed: No license badge to display___`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    return "###licesne";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("generate markdown..", data);

  return `# ${data.title}


### description
${data.description}

  ### installation
  ${data.installation}
  
    ### usage
    ${data.usage}
    
    ### contribution
    ${data.contribution}
    
      ### test
      ${data.test}
      
        ### installation
        ${data.installation}
  

        ${renderLicenseBadge(data.license)}

        `;
}

module.exports = generateMarkdown;
