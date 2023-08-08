# boilerplateCypress


Automation written in Javascript leveraging Cypress, Gherkin, allure as reporting and POM (Page Object Model).

## Test Environments

- [Main](https://www.saucedemo.com/v1/)

## Prerequisites

- Node.js is installed on your local machine

To adjust browser location permission by default, I added these folllowing config :

```
  npm i cypress cypress-browser-permissions --save-dev
```
And set the following behaviour by default to allow :

```
env: {
      browserPermissions: {
        notifications: "allow",
        geolocation: "allow",
      }
}

```

To ensure a well-organized structure, I have split the project into three main folders.

Feature: In this folder, I outline the test scenarios and steps in Gherkin/Cucumber format. 

Pages: This folder houses the Page Object Model (POM) files. 

Step Definitions: The step_definitions folder contains the implementation of each step defined in the feature files.

Overall, this project structure and organization help maintain clarity, reusability, and scalability of the test suite. The BDD approach using Gherkin/Cucumber enhances collaboration between team members and stakeholders by providing a common language to describe the application's behavior. The POM pattern for the pages ensures that any UI changes can be accommodated efficiently, and the step definitions separate the test logic from the scenario descriptions, promoting maintainability and readability of the test code.


## How to Run Test With Cypress GUI

1. Clone this project
2. Open your IDE and terminal
3. CD to the project directory
4. run the following command to install cypress and the dependencies

```
npm install
```

5. Run npm run test or if that does not work try npx cypress open

```
npx cypress open
```

6. Wait for the Cypress GUI to appear
7. Click the feature scenarios 
8. Once the test is done running, close the tab and Cypress GUIs