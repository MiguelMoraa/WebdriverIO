import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/home-page'
import { MapRidePage } from '../pages/mapRide-page'
import { CREDENTIALS } from '../data/constants'
import { MainNavBar } from '../pages/modules/main-Nav-Bar'

import dotenv from 'dotenv'
dotenv.config()


test.describe('Verify the Map tab when user is logged in', () => {
    //define the type of the class
    let homePage: HomePage
    let mapRidePage: MapRidePage
    let mainNavBar: MainNavBar

    //before hook
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        mainNavBar = new MainNavBar(page)
        mapRidePage = new MapRidePage(page)

        await page.goto(process.env.BASE_URL as string)
        await homePage.environmentCredentials(CREDENTIALS.ENVIRONMENT_USER.USERNAME as string, CREDENTIALS.ENVIRONMENT_USER.PASSWORD as string)
        await expect(homePage.modalPage).toBeVisible()
        await mainNavBar.loginSuccessHD(CREDENTIALS.LOGIN_USER.USERNAME as string, CREDENTIALS.LOGIN_USER.PASSWORD as string)
    })

    test('TC 001 Verify the Map Link works when user is logged in', async () => {
        await mainNavBar.mapTab()
        await expect(mainNavBar.hiModal).toContainText('Hi, EVMAX2')
        await expect(mapRidePage.sidePanelClose).toBeVisible()
        await expect(mapRidePage.mapSortFilter).toBeVisible()
        await expect(mapRidePage.mapFilter).toBeVisible()
    })

    /*test("TC 002 Verify the Map Link works when user is logged in", async () => {
        await mainNavBar.mapTab()
        await mapRidePage.mapFilterMyRides()
    })*/

})

