import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { CREDENTIALS } from '../data/constants'
import { MainNavBar } from '../pages/modules/main-Nav-Bar'
import { CreateRide } from '../pages/createRide-page'
import dotenv from 'dotenv'
import { MainFooter } from '../pages/modules/main-Footer'
import { Collections } from '../pages/modules/collections'
dotenv.config()

test.describe('login/logout flow ', () => {
    //define the type of the class
    let homePage: HomePage
    let mainNavBar: MainNavBar

    //before hook
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        mainNavBar = new MainNavBar(page)

        await page.goto(process.env.BASE_URL as string)
        await homePage.environmentCredentials(CREDENTIALS.ENVIRONMENT_USER.USERNAME as string, CREDENTIALS.ENVIRONMENT_USER.PASSWORD as string)
        await expect(homePage.modalPage).toBeVisible()
        await mainNavBar.loginSuccessHD(CREDENTIALS.LOGIN_USER.USERNAME as string, CREDENTIALS.LOGIN_USER.PASSWORD as string)
    })

    test.only('TC 001 Login Success ', async () => {
        await expect(mainNavBar.hiModal).toContainText('Hi, EVMAX2')
        await expect(homePage.modalPage).toBeVisible()
        await expect(homePage.heroTitle).toContainText('Find a Ride')
    })

    test.only('TC 002 logout flow', async () => {
        await expect(mainNavBar.hiModal).toContainText('Hi, EVMAX2')
        await mainNavBar.logOutFlowHD()
        await expect(mainNavBar.HDSignInButtonAssert).toBeVisible()
    })
})

test.describe('Create account Flow', () => {
    let homePage: HomePage
    let mainNavBar: MainNavBar

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        mainNavBar = new MainNavBar(page)

        await page.goto(process.env.BASE_URL as string)
        await homePage.environmentCredentials(CREDENTIALS.ENVIRONMENT_USER.USERNAME as string, CREDENTIALS.ENVIRONMENT_USER.PASSWORD as string)
        await expect(homePage.modalPage).toBeVisible()
    })

    test.only('TC001 Empty email', async () => {
        await mainNavBar.createAccountEmptyFields()
        await expect(mainNavBar.requiredField).toBeVisible()
    })

    test.only('TC002 Empty password', async () => {
        await mainNavBar.createAccountEmptyPassword()
        await mainNavBar.validateCheckmarks()
    })

    test.only('TC003 password missmatch', async () => {
        await mainNavBar.passwordMissmatch()
        await expect(mainNavBar.passwordMissmatchHeader).toContainText('Passwords do not match')
    })

    test.only('TC004 Create account', async () => {
        await mainNavBar.createAccountEmailAndPassword()
        await expect(mainNavBar.hiModal).toContainText('testRegression')
    })

})

test.describe('login/logout flow EU/AU', () => {
    //define the type of the class
    let homePage: HomePage
    let mainNavBar: MainNavBar

    //before hook
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        mainNavBar = new MainNavBar(page)

        await page.goto(process.env.BASE_URL as string)
        await homePage.environmentCredentials(CREDENTIALS.ENVIRONMENT_USER.USERNAME as string, CREDENTIALS.ENVIRONMENT_USER.PASSWORD as string)
        await expect(homePage.modalPage).toBeVisible()
    })

    test.only('TC 001 Login Success EU', async () => {
        await mainNavBar.loginSuccessHD(CREDENTIALS.LOGIN_USER_EU.USERNAME as string, CREDENTIALS.LOGIN_USER_EU.PASSWORD as string)
        await expect(mainNavBar.hiModal).toContainText('Hi, EU QA check')
        await expect(homePage.modalPage).toBeVisible()
        await expect(homePage.heroTitle).toContainText('Find a Ride')
        await expect(homePage.rideCollectionHeader).toContainText('RIDE COLLECTIONS')
    })

    test.only('TC 002 logout flow EU', async () => {
        await mainNavBar.loginSuccessHD(CREDENTIALS.LOGIN_USER_EU.USERNAME as string, CREDENTIALS.LOGIN_USER_EU.PASSWORD as string)
        await expect(mainNavBar.hiModal).toContainText('Hi, EU QA check')
        await mainNavBar.logOutFlowHD()
        await expect(mainNavBar.HDSignInButtonAssert).toBeVisible()
    })

    test.only('TC 003 Login Success AU', async () => {
        await mainNavBar.loginSuccessHD(CREDENTIALS.LOGIN_USER_AU.USERNAME as string, CREDENTIALS.LOGIN_USER_AU.PASSWORD as string)
        await expect(mainNavBar.hiModal).toContainText('Hi, Bicycle')
        await expect(homePage.modalPage).toBeVisible()
        await expect(homePage.heroTitle).toContainText('Find a Ride')
    })

    test.only('TC 004 logout flow AU', async () => {
        await mainNavBar.loginSuccessHD(CREDENTIALS.LOGIN_USER_AU.USERNAME as string, CREDENTIALS.LOGIN_USER_AU.PASSWORD as string)
        await expect(mainNavBar.hiModal).toContainText('Hi, Bicycle')
        await mainNavBar.logOutFlowHD()
        await expect(mainNavBar.HDSignInButtonAssert).toBeVisible()
    })

    test.only('TC 005 Reset password', async () => {
        await mainNavBar.forgotPasswordFlow(CREDENTIALS.FORGOT_PASSWORD_EMAIL.USERNAME as string)
        await expect(mainNavBar.backToLogin).toBeVisible()
    })

})

test.describe('Verify elements in page', () => {
    //define the type of the class
    let homePage: HomePage
    let mainNavBar: MainNavBar
    let createRide: CreateRide
    let mainFooter: MainFooter
    const CREATE = 'map/create'

    //before hook
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        mainNavBar = new MainNavBar(page)
        createRide = new CreateRide(page)
        mainFooter = new MainFooter(page)

        await page.goto(process.env.BASE_URL as string)
        await homePage.environmentCredentials(CREDENTIALS.ENVIRONMENT_USER.USERNAME as string, CREDENTIALS.ENVIRONMENT_USER.PASSWORD as string)
        await expect(homePage.modalPage).toBeVisible()
    })

    test.only('TC 001 Verify the header section in the home page', async () => {
        await expect(mainNavBar.ridePlannerHeader).toContainText('Ride Planner')
        await expect(mainNavBar.createRideButton).toContainText('Create')
        await expect(mainNavBar.mapButton).toContainText('Map')
        await expect(mainNavBar.HDSignInButton).toContainText('Sign In')
    })

    test.only('TC 002 Verify that the create Ride Link works when user is not logged in', async ({ page }) => {
        await mainNavBar.createRideUserIsNotLogged()
        await expect(createRide.mapContent).toBeVisible()
        await expect(page).toHaveURL((process.env.BASE_URL as string).concat(CREATE as string))
    })

    test.only('TC 003 Verify the middle section in the home page', async () => {
        await expect(homePage.rideCollectionHeader).toBeVisible()
        await expect(homePage.heroTitle).toBeVisible()
        await expect(homePage.findRideTextBox).toBeVisible()
        await expect(homePage.ridesForYou).toBeVisible()
    })

    test.only('TC 004 Verify the Footer section in the home page are correct', async () => {
        await expect(mainFooter.FacebookIcon).toBeVisible()
        await expect(mainFooter.TwitterIcon).toBeVisible()
        await expect(mainFooter.InstragramIcon).toBeVisible()
        await expect(mainFooter.YoutubeIcon).toBeVisible()
        await expect(mainFooter.PinterestIcon).toBeVisible()
        await expect(mainFooter.termsOfUse).toBeVisible()
        await expect(mainFooter.privacy).toBeVisible()
        await expect(mainFooter.weCareAboutYou).toBeVisible()
        await expect(mainFooter.contactUS).toBeVisible()
        await expect(mainFooter.safetyRecall).toBeVisible()
        await expect(mainFooter.aboutHD).toBeVisible()
        await expect(mainFooter.policyForUser).toBeVisible()
        await expect(mainFooter.careers).toBeVisible()
        await expect(mainFooter.hdFinancialSerives).toBeVisible()
        await expect(mainFooter.webAccesibility).toBeVisible()
        await expect(mainFooter.singUPForEmail).toBeVisible()
        //await expect(mainFooter.footerText).toBeVisible()
    })

    test('TC 005 Verify the Footer section in the home page are clickable  ', async ({ page }) => {
        await mainFooter.footerItems(page)
    })
})

test.describe('Ride collections ', () => {
    //define the type of the class
    let homePage: HomePage
    let createRide: CreateRide
    let collection: Collections

    //before hook
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        createRide = new CreateRide(page)
        collection = new Collections(page)

        await page.goto(process.env.BASE_URL as string)
        await homePage.environmentCredentials(CREDENTIALS.ENVIRONMENT_USER.USERNAME as string, CREDENTIALS.ENVIRONMENT_USER.PASSWORD as string)
        await expect(homePage.modalPage).toBeVisible()
    })

    test.only('TC 001 Verify that the user can see ride collection 10 for 23', async () => {
        await collection.viewRideTenForTwentyThree()
        await expect(createRide.mapContent).toBeVisible()
    })

    test.only('TC 002 Verify that the user can see ride collection 50 rides one nation', async () => {
        await collection.viewRideOneNation()
        await expect(createRide.mapContent).toBeVisible()
    })

    test.only('TC 003 Verify that the user can find location', async () => {
        await homePage.searchForState()
        await expect(createRide.mapContent).toBeVisible()
    })

    test.only('TC 004 Verify that the user can ride name', async () => {
        await homePage.searchForRide()
        await expect(createRide.rideTitle).toContainText('TWISTED SISTER')
    })
})
