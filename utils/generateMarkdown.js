function generateMarkdown(data) {
  return `# ${data.title}
  
  ${((license) => {
    if (license === "MIT")
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    else if (license === "Apache 2.0")
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    else if (license === "Mozilla Public License 2.0")
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    else if (license === "GNU AGPL v3")
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    else return ``;
  })(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  
  * [Installation](#Installation)
  * [Tests](#Tests)
  * [Technology](#Technology)
  * [Contributors](#Contributors)
  * [License](#License)
  
  ## Live Link
  ${data.url}
  ## Installation
  ${data.install}
  
  ## Tests
  ${data.test}
  
  ## Technology
  ${data.tech}
  ## Contributors
  ${data.contributors}
  
  ## Contact
  If you have any questions please email or checkout my github:
  Email: ${data.email}
  Github: https://github.com/${data.github}
  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;