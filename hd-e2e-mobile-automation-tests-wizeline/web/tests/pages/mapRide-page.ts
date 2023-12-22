import { Page, Locator } from '@playwright/test'

export class MapRidePage {
    readonly page: Page
    readonly mapSearchTxtBox: Locator
    readonly mapFilter: Locator
    readonly mapSortFilter: Locator
    readonly sidePanelClose: Locator
    readonly myRidesFilter: Locator
    readonly sideSavePanel: Locator
    readonly sideBackArrow: Locator

    constructor(page: Page) {
        this.page = page
        this.mapSearchTxtBox = page.locator('#map-search')
        this.mapFilter = page.locator('#filter')
        this.mapSortFilter = page.locator('#label-a-z')
        this.sidePanelClose = page.locator('#sidepanel-close')
        this.myRidesFilter = page.locator('#my-rides')
        this.sideSavePanel = page.locator('#sidepanel-save:visible')
        this.sideBackArrow = page.locator('#sidepanel-back')

    }
    async mapFilterMyRides() {
        await this.mapFilter.click()
        await this.myRidesFilter.click()
        await this.sideBackArrow.click()

    }
}
