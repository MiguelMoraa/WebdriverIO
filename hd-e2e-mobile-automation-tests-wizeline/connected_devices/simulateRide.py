from appium import webdriver
from appium.webdriver.common import appiumby

desired_cap = {
  "deviceName": "R5CNC1EPZAZ",
  "platformName": "Android",
  "platformVersion": "12",
  "automationName": "UIAutomator2",
  "appPackage": "com.harley_davidson.ride_planner",
  "appActivity": "com.harleydavidson.rideplanner.onboarding.SplashActivity",
  "app": "/Users/miguel.hm/Miguel/Proyectos/Harley Davidson/Test Automation/hd-e2e-mobile-automation-tests-wizeline/android/builds/app-staging-armeabi-v7a-signed.apk"
}

driver = webdriver.Remote("http://localhost:4723/wd/hub", desired_cap)
driver.implicitly_wait(100)
driver.set_location(40.753826, -74.002228, 50)
driver.find_element(value="com.android.permissioncontroller:id/permission_allow_button").click()
driver.find_element(by=appiumby.AppiumBy.ID, value="getStartedButton").click()
driver.find_element(by=appiumby.AppiumBy.ID, value="continueButton").click()
driver.find_element(by=appiumby.AppiumBy.ID, value="allowButton").click()
driver.find_element(value="com.android.permissioncontroller:id/permission_allow_foreground_only_button").click()
driver.find_element(by=appiumby.AppiumBy.ID, value="allow").click()
driver.find_element(by=appiumby.AppiumBy.ID, value="agreementCheckbox").click()
driver.find_element(by=appiumby.AppiumBy.ID, value="continueButton").click()
driver.find_element(by=appiumby.AppiumBy.XPATH, value='//*[@text="Profile"]').click()
driver.find_element(by=appiumby.AppiumBy.ID, value="emailField").send_keys("qa.wizeline.hd@hotmail.com")
driver.find_element(by=appiumby.AppiumBy.ID, value="passwordField").send_keys("WizelineHD123!")
driver.find_element(by=appiumby.AppiumBy.ID, value="loginButton").click()
driver.find_element(by=appiumby.AppiumBy.ID, value="detailsButton")
driver.find_element(by=appiumby.AppiumBy.ID, value="rideButton").click()
driver.find_element(by=appiumby.AppiumBy.ID, value="continueButton").click()
driver.find_element(by=appiumby.AppiumBy.ID, value="simulate").click()
driver.find_element(by=appiumby.AppiumBy.XPATH, value='//*[@text="3x Speed"]').click()
driver.find_element(by=appiumby.AppiumBy.ID, value="android:id/button1").click()
