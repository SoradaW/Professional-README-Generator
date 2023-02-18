// function to generate markdown for README
function generateMarkdown(userResponses, userGitHubURL) {
  
  // generate table of contents 
  let tableOfContents = `## Table of Contents`;

  if (userResponses.installation !== '') {tableOfContents += `
  * [Installation](#installation)`};

  if (userResponses.usage !== '') {tableOfContents += `
  * [Usage](#usage)`};

  if (userResponses.contributing !== '') {tableOfContents += `
  * [Contributing](#contributing)`};

  if (userResponses.tests !== '') {tableOfContents += `
  * [Tests](#tests)`};

  if (userResponses.license !== '') {tableOfContents += `
  * [License](#license)`};

  if (userResponses.questions !== '') {tableOfContents += `
  * [Questions](#questions)`};

  // generate markdown title and description at the top
  let draftMarkdown = `
  # ${userResponses.title}

  ## Description
  ${userResponses.description}
  `

  // table of contents 
  draftMarkdown += tableOfContents;

  // license section
  draftMarkdown += `
  * [License](#license)
  `;

  // return markdown file
  return draftMarkdown;
};

module.exports = generateMarkdown;
