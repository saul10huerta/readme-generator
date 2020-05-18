const createBadge = license => {
  if (license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  } else if (license === 'Mozilla Public 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } 
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${createBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ![](readme-generator.png)
  ## License
  Licensed under ${data.license}.
  ## Credits
  ${data.credits}
  ## Tests
  ${data.test}
  ## Questions
  Please feel free to contact me. GitHub & LinkedIn links provided below along with my Email.
  * [GitHub](github.com/${data.username})
  * [Email](${data.email})
  * [LinkedIn](https://www.linkedin.com/in/saul10huerta/)
  `;
}

module.exports = generateMarkdown;