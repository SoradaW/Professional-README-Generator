// function to generate markdown for README
function generateMarkdown(userResponses, usergitHubURL) {
  
  // generate table of contents 
  let tableOfContents = `## Table of Contents`;

  if (userResponses.installation !== '') {
    tableOfContents += `* [Installation](#installation)`
  };

  if (userResponses.installation !== '') {
    tableOfContents += `* [Usage](#usage)`
  };

  if (userResponses.installation !== '') {
    tableOfContents += `* [Contributing](#contributing)`
  };

  if (userResponses.installation !== '') {
    tableOfContents += `* [Tests](#tests)`
  };

  if (userResponses.installation !== '') {
    tableOfContents += `* [License](#license)`
  };

  if (userResponses.installation !== '') {
    tableOfContents += `* [Questions](#questions)`
  };



  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
