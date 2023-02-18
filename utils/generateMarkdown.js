// function to generate markdown for README
function generateMarkdown(userResponses, userGitHubLink) {
  
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

  // generate markdown title, badge license and description at the top
  let draftMarkdown = `
  # ${userResponses.title}

  ![Badge of repo licence](https://img.shields.io/badge/Licence-MIT/${userResponses.license}-green.svg)

  ## Description

  *The what, why, and how:*

  ${userResponses.description}
  `

  // table of contents 
  draftMarkdown += tableOfContents;

  // always had license link to section as it required
  //draftMarkdown += `
  //* [License](#license)`;

  // if applicable questions
  // installation section
  if (userResponses.installation !== '') {
  draftMarkdown += `
  ## Installation
    
  *Installation instructions:*
    
  ${userResponses.installation}
  `
  };

  // usage section
  if (userResponses.usage !== '') {
  draftMarkdown += `
  ## Usage
      
  *Usage information:*
      
  ${userResponses.usage}
  `
  };

  // contributing section
  if (userResponses.contributing !== '') {
  draftMarkdown += `
  ## Contributing
      
  *Contribution guidelines:*
      
  ${userResponses.contributing}
  `
  };

  // tests section
  if (userResponses.tests !== '') {
  draftMarkdown += `
  ## Tests
      
  *Test instructions:*
      
  ${userResponses.tests}
  `
  };

  // license section
  draftMarkdown += `
  ## License
        
  ${userResponses.license}
  `;

  // questions section
  draftMarkdown += `

  ## Questions?

  *For any questions, click on the links below:*

  GitHub: [My GitHub]${userResponses.github}

  Email: ${userResponses.questions}
  `
  // return markdown file
  return draftMarkdown;
};

module.exports = generateMarkdown;
