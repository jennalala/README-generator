// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## description
  ${data.description}

  ## table of contents

  *[installation](#installation)
  *[tests](#tests)
  *[technology](#technology)
  *[contributors](#contributors)
  *[license](#license)

  ## live link
  ${data.url}

  ## installation
  ${data.install}

  ## tests
  ${data.test}

  ## technology
  ${data.tech}

  ## contributors
  ${data.contributors}

  ## contact
  questions please email or checkout github
  email: ${data.email}
  Github: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
