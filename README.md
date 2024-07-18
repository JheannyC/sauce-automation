# Automated Test Documentation

## Overview

Automated tests using Cypress and Cucumber to test the application's functionalities.

## Test Structure

Example:
--> tests > loginTest
- **loginTest.cy.js**: login verification tests
- **loginTest.feature**: Definitions of test steps in Cucumber.

-->
pages > loginPage
- **loginPage.cy.js**: login page component methods
- **element.js**: elements related to the login page (html attributes)

## Settings

### Prerequisites

- Node.js 18.x, 20.x, 22.x and above
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JheannyC/sauce-automation
2. Install dependencies at the root of the project:
    ```bash
    npm install
3. create a ```.env``` file at the root and add variables according to the project:

    ```bash
    BASE_URL="project_URL"
    USERNAME="username"
    USERNAME_LOCKED="username"
    PASSWORD="password"
### Tests execution


1. cypress interactive mode:<p>
   ``` npx cypress open``` or using the script ```npm run cy:open```
   
2. Cypress headless mode:<p>
    ``` npx cypress run``` or using the script ```npm run cy:test```
