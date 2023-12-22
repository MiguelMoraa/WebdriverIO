<h1 align="center">
  <br>
  <img src="../HD_Logo.jpeg" width="500">
  <br>
Harley Davidson - RPW/Testing Framework
  <br>
</h1>

<h4 align="center">This project is dedicates to develop and execute Automation Testing through Ride Planer Web Platform for Harley Davidson.</h4>

<p align="center">
  <a href="#sparkles-key-features">Key Features</a> •
  <a href="#package-packages">Packages</a> •
  <a href="#blue_book-setup">Setup</a> •
  <a href="#books-custom-execution">Custom Execution</a> •
  <a href="#rocket-releases">Releases</a> •
</p>

## ✨ Key Features

- **RPW Framework** - Web living within the same project. The original source can be found [here](https://github.com/hd-dg/hd-e2e-mobile-automation-tests-wizeline.git)

## 📦 Packages

- **Playwright**
- **node** -> minimum version v16.14.2


## ⚙️ Setup

To clone and run this application, you'll need the following:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/download/)

```bash
# Clone this repository
git clone https://github.com/hd-dg/hd-e2e-mobile-automation-tests-wizeline.git

# Go Web Repository
cd web

# Install all the Packages, Dev Dependencies and Dependencies needed
npm install
```

# 🧪 ✨✅ Run Suite

In order to run the whole suite, execute the following commands

#### Terminal 1

To check whether all requirements needed are installed to run the framework on especific browsers
```bash
npm run test:chrome
npm run test:Firefox
npm run test:Webkit
```

#### Terminal 2

To run the whole suite in parallel testing using all browsers
```bash
## To run the whole suite 
npx playwright test

## To run the whole suite on headeed mode with specific command
npx playwright test --headeed

## To run the whole suite on headless mode with specific command
npx playwright test --headless

## To run the whole suite on specific browser (e.g Firefox, Webkit, chrome )
npx playwright test --headed --browser=firefox

## To run the whole suite on specific browser on headless mode (e.g Firefox, Webkit, chrome )
npx playwright test --headless --browser=firefox
```

## 🛃 🧪 ✨✅ Run Custom Execution

So all the Test Cases that are stored in 'Example.spec.js' file will be executed

### ▶️ 🧪 Run specific Test Cases

1. Execute the staps of <a href="#Run-specific-Test-file">Run specific Test file</a> 
2. In the Test file select the desired TC to run. Example
Original TC:
```typescript
    test('TCXXX Example TC' , async ({ page }) => {
        'Something to validate here'
    })
```

3. Change to
```typescript
    test.only('TCXXX Example TC' , async ({ page }) => {
        'Something to validate here'
    })
```

# 🚀  Releases

This repo uses github actions to run tests, lint and deployments to the following environments:

- Devmaps (DEVELOPMENT ENVIRONMENT)
- Qamaps (QA ENVIRONMENT)


This will give you a series of steps to make the wished release on the needed package

