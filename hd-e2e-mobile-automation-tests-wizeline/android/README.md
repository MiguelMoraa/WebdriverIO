<h1 align="center">
  <br>
  <img src="../HD_Logo.jpeg" width="500">
  <br>
Harley Davidson - Android/Testing Framework
  <br>
</h1>

<h4 align="center">This project is dedicates to develop and execute Automation Testing through Android Platform for Harley Davidson and LiveWire Applications.</h4>

<p align="center">
  <a href="#sparkles-key-features">Key Features</a> •
  <a href="#package-packages">Packages</a> •
  <a href="#blue_book-setup">Setup</a> •
  <a href="#books-custom-execution">Custom Execution</a> •
  <a href="#rocket-releases">Releases</a> •
  <a href="#warning-common-issues">Common issues</a>
</p>

## ✨ Key Features

- **Android Framework** - Mobile living within the same project. The original source can be found [here](https://github.com/hd-dg/hd-e2e-mobile-automation-tests-wizeline.git)

## 📦 Packages

- **allure-commandline**
- **appium**
- **appium-doctor**
- **dotenv**
- **mocha**
- **wdio-video-report**
- **webdriver**
- **webdriverio**

# ⚙️ Setup

To clone and run this application, you'll need the following:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/download/)
- [Android Studio](https://developer.android.com/studio)
- [Java Development Kit](https://www.oracle.com/java/technologies/downloads/)
- [App Center](https://install.appcenter.ms/orgs/H-D-Digital-Growth)

```zsh
# Clone this repository
git clone https://github.com/hd-dg/hd-e2e-mobile-automation-tests-wizeline.git

# Go Android Repository
cd android

# Install all the Packages, Dev Dependencies and Dependencies needed
npm install
```

## 📱 Set Environment Variables

Assuming the user has already installed Node, Android Studio and the JDK, before start working (Edit/Modify) Test Cases, setup the local envoronment by configure some Environment Variables.

1. Open the terminal.
2. Copy the following command in the terminal.
```zsh
nano ~/.zshrc #This will be open the place to pase the Env. Variables
```
3. Add the following lines
```zsh
export JAVA_HOME=$(/usr/libexec/java_home)
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
```
This will include the Android Env Variables and JAVA_HOME.

4. To save this modified bash-profile file you just have to press `CONTROL + O` to save the file using nano editor and then press `ENTER` to confirm name and then press `CONTROL + X` to exit out of this nano file editor.

5. Open the [Android Studio](https://developer.android.com/studio)

6. Click on "More Actions"

7. A dropdown should be displayed > Click on "SDK MAnager"

8. Go to "SDK Platforms" tab in the top

9. Select Android 12.0 (S) checkbox

10. Click "Apply" and "Close"

11. Wait until dowload SDK is done

12. Go to the project and create a folder named "builds" in the following Path `hd-e2e-mobile-automation-tests-wizeline/android`

13. Go to [App Center](https://install.appcenter.ms/orgs/H-D-Digital-Growth)

14. Download the latest HD and LW build and into the "builds" folder recently created

15. Create a ".env" and ask for the content of that file, since there is sensitive data, it should be encrypted

The project uses

It needs to be considered that this project uses `env` files to work properly. Currently. 1 environment file need to be
set, one on the root of the project (For app configuration). 
These files can be found on Keybase.
Once the file is generated and all the infomration is provded by other users, reiew the following steps:

1. Plug the physical devices in, or start the emulatror in/to the local machine.
2. Enable the Developer mode in the mobile device. For more infomration visit: [Developer More](https://developer.android.com/studio/debug/dev-options).
3. Once the device is Go to Developer options and turn on the `USB debugging` option.
4. Open the command line and write the following:
```zsh
adb devices
```
5. Copy the serial number of the device ans supply thaty code in the `UDID` argument of the `env` file.

# 🧪 ✨✅ Run Suite

In order to run the whole suite, execute the following commands

#### Terminal

To check whether all requirements needed are installed to run the framework
```zsh
appium-doctor --android
```

This will will position the terminal on the Android folder

#### Terminal

```zsh
# To run the Harley Davidson Application in physical devices with the report layer
npm run e2eHD
```

```zsh
# To run the Harley Davidson Application in BrowserSatck with the report layer
npm run e2eHDBS
```

```zsh
# To run the scpecific script
npm run challenges
npm run homecoming
npm run lamotta
npm run login
npm run more
npm run navigation 
npm run onboarding 
npm run preferences
npm run profile
npm run rides
```


## 🛃 🧪 ✨✅ Run Custom Execution

### ▶️ 🧪 Run specific Test file

1. Select the configuration file where should be modify
2. In the spec location should be somethiing like:
```javascript
specs: [
        './HD/test/*.spec.js'
    ],
```

### ▶️ 🧪 Run specific Test Cases

1. Execute the steps of <a href="#Run-specific-Test-file">Run specific Test file</a> 
2. In the Test file select the desired TC to run. Example
Original TC:
```javascript
    it('TCXXX Example TC', async () => {
        'Something to validate here'
    })
```
3. Change to
```javascript
    it.only('TCXXX Example TC', async () => {
        'Something to validate here'
    })
```

# 🚀  Releases

This repo uses CircleCI to run tests, lint and deployments to the following environments:

- ACCEPTANCE (DEVELOPMENT ENVIRONMENT)
- STAGING (QA ENVIRONMENT)


This will give you a series of steps to make the wished release on the needed package

# ⚠️ Common issues

<details>
<summary>I'm having problems to recognize env Variables</summary>
<p>

In this case, the user should restart the terminal since probably is executing by some instance

</p>
</details>

<details>
<summary>I'm having problems with an specific library</summary>
<p>

In this case try to install that library by:

```zsh
# On shared folder
$ npm install <library-name> 
```

This will reinstall again the lib if there was something missed to install.

</p>
</details>
