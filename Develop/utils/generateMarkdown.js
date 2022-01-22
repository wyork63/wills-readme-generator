// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return`
  # ${data.title}

  # ![license]https://img.shields.io/github/license/${data.username}/${data.repo}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributors](#contributors)

  * [Test](#test)

  * [Questions](#questions)


  ## Installtion

  The following must be installed to run the application properly: ${data.install}

  ## Usage

  ${data.usage}

  ## License

  This app is licensed under the ${data.license} license.

  ## Contributors

  Contributors: ${data.contributors}

  ## Test

  Use ${data.test} to run this application.

  ## Questions 

  If you have any questions about this app please contact ${data.username} at ${data.email}.


  ## To see this application in action. Click the video below
  [![Will's ReadMe Generator](insert image here)](insert youtube clip here)
`;
}

module.exports = generateMarkdown;
