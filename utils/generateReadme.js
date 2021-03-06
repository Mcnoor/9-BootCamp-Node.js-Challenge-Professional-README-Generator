// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle} đ</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

## Description
âšī¸ ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
đž ${answers.installation}

## Usage
đģ đą ${answers.usage}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 

## Contributing
đĨ đĨ ${answers.contributing}

## Tests
âī¸ ${answers.tests}

## Questions
âââ ${answers.questions}<br />
<br />
:octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
âī¸ Email me with any questions: ${answers.email}<br /><br />

_This README was generated with â¤ī¸ by [MCX]đđ_
    `;
  }
  
  module.exports = generateReadme;