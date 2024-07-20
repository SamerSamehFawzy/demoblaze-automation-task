# demoblaze-automation-task

### Folder Descriptions

- **scenarios/**: Contains the test scripts for different scenarios.
- **pages/**: Contains the page object models which abstract the interactions with different pages of the website.
- **utils/**: Contains utility files like configuration and helper functions.
- **.gitignore**: Specifies which files and directories to ignore in the repository.
- **playwright.config.js**: Configuration file for Playwright.
- **package.json**: Contains the project dependencies and scripts.
- **README.md**: Provides information about the project.

## Dependencies

The project uses the following dependencies:

- `@playwright/test`: Playwright framework for running end-to-end tests.

You can find the full list of dependencies in the `package.json` file.

## Setup

### Prerequisites

- Node.js (Download and install from [nodejs.org](https://nodejs.org/))
- npm (Node package manager, comes with Node.js)
- Git (Download and install from [git-scm.com](https://git-scm.com/))

### Running the Tests

Using Playwright Test Runner

1. To run all tests:
npx playwright test


2. To run a specific test file:
npx playwright test tests/scenarios/order.spec.js