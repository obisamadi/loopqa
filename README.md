Asana Workflow Automation with Playwright

Introduction
This repository contains an end-to-end testing framework for automating workflows in Asana using Playwright. The primary objective is to validate the user interface and functional integrity of tasks and navigation within the application. The automation suite ensures reliability in core workflows, such as logging in, navigating to the "Work Requests" section, and verifying tasks in different columns.

Features
Automated login with session persistence.
Navigation to the "Work Requests" section.
Task verification in "To Do," "In Progress," and "Completed" columns.
Dynamic element handling with robust error management.
Modular test structure for scalability and reusability.
Setup and Installation
Prerequisites:

Node.js (version 16+ recommended)
Playwright
Clone the Repository:
git clone https://github.com/obisamadi/loopqa.git
cd loopqa

Install Dependencies:
npm install

Playwright Browsers: Install the required browsers using the Playwright CLI:
npx playwright install

Environment Configuration:
Ensure the .env file is set up with the necessary credentials:
USERNAME=your_asana_username
PASSWORD=your_asana_password

Usage
Run Tests: Execute all test cases:
npx playwright test

Run a Specific Test:
npx playwright test tests/workRequests.spec.js

View Test Reports: Open the HTML test report:
npx playwright show-report

Challenges
Frequent Captcha triggers during repeated login attempts.
Dynamic element loading caused delays and occasional test failures.
Fragility of XPath selectors.

Solutions
Implemented session persistence to bypass repeated logins.
Added explicit waits and retries to manage dynamic elements.
Transitioned to stable selectors (e.g., data-testid) where possible.

Contributing
Contributions are welcome! To contribute:
Fork the repository.
Create a new branch (feature/your-feature-name).
Commit your changes (git commit -m "Add new feature").
Push the branch (git push origin feature/your-feature-name).
Open a Pull Request.







