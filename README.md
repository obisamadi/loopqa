# Asana Playwright Test Suite

## Introduction
This project automates login and task verification in Asana using Playwright. It is designed to be data-driven, enabling scalability and reducing code duplication.

## Implementation Details
1. **Data-driven testing**: All test cases are dynamically generated from a JSON object.
2. **Playwright setup**: Scripts utilize Playwright for browser automation, configured for Chromium.
3. **Scalability**: Adding new cases only requires updating the `testData.json` file.

## Challenges and Solutions
- **Dynamic selectors**: Created robust selectors - I have learend from previous experiences to select robust selectors to handle UI changes.
- **Asynchronous navigation**: Addressed delays using Playwright's wait functions.

## Results
All tests passed successfully in a headless Chromium environment. Screenshots and videos are captured for debugging.

## Recommendations
- Integrate this suite into a CI/CD pipeline using GitHub Actions or Jenkins.
- Expand coverage to include negative test cases and edge scenarios.
