function renderLicenseBadge(license) {
  console.log("rendering badge", license);
  if (
    (typeof license === "string" && license === "MIT") ||
    "Apache 2.0" ||"Boost Software" || 'BSD_3'
  ) {
    return `### BADGE SECTION
![${license}:license placholder text](https://img.shields.io/badge/license-${license}-blue)`;
  }

  return `
  ___Unlicensed: No license badge to display___`;
}

function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    return "###licesne";
  }
}

function renderLicenseSection(license) {}

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


### license
${data.license}
  

${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
