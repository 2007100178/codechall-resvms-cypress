# Code Challenge: Cypress Test Suite for a Booking Site

## Description

This project is a Cypress test suite for a booking site. It includes tests for the entire booking flow, from selecting a departure location to verifying the purchase completion.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/).
* You have a `<Windows/Linux/Mac>` machine. State here which OSes are supported and which are not.

## Installing the Project

To install the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone <repository_url>
    ```
2. Navigate to the project directory:
    ```bash
    cd <project_directory>
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Running the tests

To run the tests, you have two options:

### Option 1: Using the Cypress Test Runner

Follow these steps:

1. Start the Cypress test runner:
    ```bash
    npx cypress open
    ```
2. In the Cypress test runner, click on the `main-test.cy.js` file to start the tests.

### Option 2: Using the Command Line

Follow these steps:

1. Run the tests in the command line:
    ```bash
    npx cypress run
    ```
2. Check the reported results in the command line output.
3. Detailed test reports can be found in the `cypress/reports` directory.

### Option 3: Using GitHub Actions (Under construction)

1. Navigate to the "Actions" tab of the repository on GitHub.
2. Manually trigger the tests.
3. The tests will be executed by GitHub Actions after the workflow is triggered.
4. View the test results in the "Actions" tab of the repository on GitHub.
5. Download artifacts such as test reports and videos from the "Actions" tab after the tests have completed.

