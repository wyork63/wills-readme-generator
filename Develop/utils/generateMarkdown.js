// function to generate markdown 
// line 7 scans the username and repo to determine what license is being used - image is then placed in readme
function generateMarkdown(data) {
  return`
  # ${data.title}

  # <img src="https://img.shields.io/github/license/${data.username}/${data.repo}">

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
