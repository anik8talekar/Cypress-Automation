# PwC-DataFlow: Cypress Automation with BDD Framework

## 📌 Project Overview
This project is an **end-to-end automation framework** built using **Cypress** with the **BDD (Behavior-Driven Development) framework**. It leverages **Cucumber** for writing feature files and uses **Cypress Multiple Cucumber HTML Reporter** for generating detailed test reports.

## 🚀 Tech Stack
- **Cypress** - JavaScript-based end-to-end testing framework
- **Cucumber (BDD)** - Gherkin syntax for writing test scenarios
- **Cypress Multiple Cucumber HTML Reporter** - Generates HTML reports for better test analysis
- **Node.js & npm** - Dependency management

## ⚙️ Installation & Setup
Ensure you have **Node.js (>=14.x)** installed. Then follow these steps:

```sh
# Clone the repository
git clone <your-repo-url>
cd PwC-DataFlow

# Install dependencies
npm install
```

## 🎯 Running Tests

### **Run Tests in Headless Mode**
```sh
npm run test
```

### **Run Tests in Cypress UI**
```sh
npm run cypress:open
```

### **Run Tests & Generate HTML Reports**
```sh
npm run test:report
```

## 📝 Writing Test Cases (BDD)
Test cases are written using the **Gherkin syntax** inside `.feature` files.

#### **Example Feature File (`login.feature`)**
```gherkin
Feature: Login Functionality
  Scenario: User logs in with valid credentials
    Given I navigate to the login page
    When I enter valid username and password
    Then I should be redirected to the dashboard
```

#### **Step Definitions (`login.js`)**
```js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I navigate to the login page", () => {
  cy.visit("/login");
});

When("I enter valid username and password", () => {
  cy.get("#username").type("testuser");
  cy.get("#password").type("password123");
  cy.get("#loginButton").click();
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
});
```

## 📊 Generating Test Reports
This project uses **Cypress Multiple Cucumber HTML Reporter** to create detailed reports. Reports are automatically generated after running tests using:
```sh
npm run test:report
```
Reports can be found in the **`reports`** folder.

## 🛠 CI/CD Integration
This project can be integrated with CI/CD tools like **GitHub Actions, Jenkins, or Azure DevOps** to run tests automatically on code commits.

---
🚀 Happy Testing with **Cypress + BDD**! 🎯

