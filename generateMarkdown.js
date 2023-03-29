// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT')
    return 'https://img.shields.io/badge/badge-MIT-blue'
    if (license === 'Apahe')
    return 'https://img.shields.io/badge/badge-APACHE-orange'
    if (license === 'BSD')
    return 'https://img.shields.io/badge/badge-BSD-red'
    else if (license === 'Unlicensed')
    return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT')
    return 'https://opensource.org/license/mit/'
    if (license === 'Apahe')
    return 'https://opensource.org/license/apache-2-0/'
    if (license === 'BSD')
    return 'https://opensource.org/license/bsd-3-clause/'
    else if (license === 'Unlicensed')
    return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;