import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { CreateRide } from '../pages/createRide-page'
import { CREDENTIALS } from '../data/constants'
import { MainNavBar } from '../pages/modules/main-Nav-Bar'
import dotenv from 'dotenv'
import { ToolbarCreate } from '../pages/modules/toolbar-create'

dotenv.config()

test.describe('Create ride when user is log in', () => {
    let homePage: HomePage
    let createRide: CreateRide
    let mainNavBar: MainNavBar
    let toolbarCreate: ToolbarCreate
    const CREATE = 'map/create'

    //Before hook
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        createRide = new CreateRide(page)
        mainNavBar = new MainNavBar(page)
        toolbarCreate = new ToolbarCreate(page)

        await page.goto(process.env.BASE_URL as string)
        await homePage.environmentCredentials(CREDENTIALS.ENVIRONMENT_USER.USERNAME as string, CREDENTIALS.ENVIRONMENT_USER.PASSWORD as string)
        await expect(homePage.modalPage).toBeVisible()
        await mainNavBar.loginSuccessHD(CREDENTIALS.LOGIN_USER.USERNAME as string, CREDENTIALS.LOGIN_USER.PASSWORD as string)
    })

    test('TC 001 Verify that the create Ride Link works when user is logged in', async ({ page }) => {
        await mainNavBar.createRideUserLogIn()
        await expect(createRide.routeType).toBeVisible()
        await expect(page).toHaveURL((process.env.BASE_URL as string).concat(CREATE as string))
    })

    test('TC 002 Verify that the create Ride Link works when user is logged in', async ({ page }) => {
        await mainNavBar.createRideUserLogIn()
        await expect(createRide.routeType).toBeVisible()
        await expect(page).toHaveURL((process.env.BASE_URL as string).concat(CREATE as string))

    })

    test(('TC 003 Verify the Top Left section of Create ride screen when user is logged in'), async ({ page }) => {
        await mainNavBar.createRideUserLogIn()
        await expect(createRide.routeType).toBeVisible()
        await expect(page).toHaveURL((process.env.BASE_URL as string).concat(CREATE as string))
        await createRide.startEndLocation()
        await expect(createRide.roundTrip).toBeVisible()
        await expect(createRide.reverseTrip).toBeVisible()
    })

    test(('TC 004 Verify the Map section of the create ride screen when user is logged in'), async ({ page }) => {
        await mainNavBar.createRideUserLogIn()
        await expect(createRide.routeType).toBeVisible()
        await expect(page).toHaveURL((process.env.BASE_URL as string).concat(CREATE as string))
        await createRide.startEndLocation()
        await expect(toolbarCreate.redoButton).toBeVisible()
        await expect(toolbarCreate.undoButton).toBeVisible()
        await expect(toolbarCreate.bookMarkButton).toBeVisible()
        await expect(toolbarCreate.shareButton).toBeVisible()
        await expect(toolbarCreate.copyRideButton).toBeVisible()
        await expect(toolbarCreate.saveRideButton).toBeVisible()
    })

    test(('TC 005 Verify the Map section of the create ride screen when user is logged in'), async ({ page }) => {
        await mainNavBar.createRideUserLogIn()
        await expect(createRide.routeType).toBeVisible()
        await expect(page).toHaveURL((process.env.BASE_URL as string).concat(CREATE as string))
        await createRide.startEndLocation()
        await toolbarCreate.saveRideWhenUserIsLogin()
    })

    test(('TC 006 Verify the top right section of the create ride screen when user is logged in'), async ({ page }) => {
        await mainNavBar.createRideUserLogIn()
        await expect(createRide.routeType).toBeVisible()
        await expect(page).toHaveURL((process.env.BASE_URL as string).concat(CREATE as string))
        await createRide.startEndLocation()
        await expect(toolbarCreate.bookMarkButton).toBeVisible()
        await expect(toolbarCreate.exportGPXButton).toBeVisible()
        await expect(toolbarCreate.saveRideButton).toBeVisible()
        await expect(toolbarCreate.printButton).toBeVisible()
        await toolbarCreate.saveRideWhenUserIsLogin()
    })
})

test.describe('Verify create when user is not log in', () => {
    let homePage: HomePage
    let createRide: CreateRide
    let mainNavBar: MainNavBar
    let toolbarCreate: ToolbarCreate
    const CREATE = 'map/create'

    //Before hook
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        createRide = new CreateRide(page)
        mainNavBar = new MainNavBar(page)
        toolbarCreate = new ToolbarCreate(page)

        await page.goto(process.env.BASE_URL as string)
        await homePage.environmentCredentials(CREDENTIALS.ENVIRONMENT_USER.USERNAME as string, CREDENTIALS.ENVIRONMENT_USER.PASSWORD as string)
        await expect(homePage.modalPage).toBeVisible()
    })

    test('TC 001 Verify that the create Ride Link works when user is not logged in', async ({ page }) => {
        await mainNavBar.createRideUserIsNotLogged()
        await expect(createRide.routeType).toBeVisible()
        await expect(page).toHaveURL((process.env.BASE_URL as string).concat(CREATE as string))
    })

    test('TC 002 Verify the Top Left section of Create ride screen when user is not logged in', async ({ page }) => {
        await mainNavBar.createRideUserIsNotLogged()
        await expect(createRide.routeType).toBeVisible()
        await expect(page).toHaveURL((process.env.BASE_URL as string).concat(CREATE as string))
        await createRide.startEndLocation()
        await expect(createRide.roundTrip).toBeVisible()
        await expect(createRide.reverseTrip).toBeVisible()
    })

    test('TC 003 Verify the Map section of the create ride screen when user is not logged in', async ({ page }) => {
        await mainNavBar.createRideUserIsNotLogged()
        await expect(createRide.routeType).toBeVisible()
        await expect(page).toHaveURL((process.env.BASE_URL as string).concat(CREATE as string))
        await createRide.startEndLocation()
        await expect(createRide.trafficDiv).toBeVisible()
    })

    test('TC 004 Verify the top right section of the create ride screen when user is not logged in', async ({ page }) => {
        await mainNavBar.createRideUserIsNotLogged()
        await expect(createRide.routeType).toBeVisible()
        await expect(page).toHaveURL((process.env.BASE_URL as string).concat(CREATE as string))
        await createRide.startEndLocation()
        await expect(toolbarCreate.redoButton).toBeVisible()
        await expect(toolbarCreate.undoButton).toBeVisible()
        await expect(toolbarCreate.bookMarkButton).toBeVisible()
        await expect(toolbarCreate.shareButton).toBeVisible()
        await expect(toolbarCreate.copyRideButton).toBeVisible()
        await expect(toolbarCreate.saveRideButton).toBeVisible()
    })

    test('TC 005 Verify the Save Ride functionality when user is not logged in', async ({ page }) => {
        await mainNavBar.createRideUserIsNotLogged()
        await expect(createRide.routeType).toBeVisible()
        await expect(page).toHaveURL((process.env.BASE_URL as string).concat(CREATE as string))
        await createRide.startEndLocation()
        await toolbarCreate.saveRideWhenUserIsNotLoginIn()
        await mainNavBar.loginSuccessHDSaveRide(CREDENTIALS.LOGIN_USER.USERNAME as string, CREDENTIALS.LOGIN_USER.PASSWORD as string)
        await expect(mainNavBar.hiModal).toHaveText('Hi, EVMAX2')
    })
})
