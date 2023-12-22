import { Page, Locator } from '@playwright/test'

export class CreateRide {
    readonly page: Page
    readonly mapContent: Locator
    readonly startLocation: Locator
    readonly endLocation: Locator
    readonly startLocationVisible: Locator
    readonly roundTrip: Locator
    readonly reverseTrip: Locator
    readonly searchThisArea: Locator
    readonly showOnMap: Locator
    readonly showOnMapClose: Locator
    readonly mapLayer: Locator
    readonly trafficDiv: Locator
    readonly locateButton: Locator
    readonly zoomIn: Locator
    readonly routeType: Locator
    readonly rideTitle: Locator

    constructor(page: Page) {
        this.page = page
        this.mapContent = page.locator('div.Map__Content___lvJ3e >> nth=0')
        this.startLocation = page.locator('[placeholder="Add start location"]')
        this.startLocationVisible = page.locator('.SearchBar__ResultsList___sZie- SearchBar__absolute___Km-zd')
        this.endLocation = page.locator('[placeholder="Add location"]')
        this.roundTrip = page.locator('text=Round Trip')
        this.reverseTrip = page.locator('text=Reverse')
        this.searchThisArea = page.locator('text=Search this area')
        this.showOnMap = page.locator('text=Show on Map')
        this.showOnMapClose = page.locator('a[role="button"]:has-text("Show on Map")')
        this.trafficDiv = page.locator('#map-normal')
        this.locateButton = page.locator('#locate-button')
        this.routeType = page.locator('#route-type')
        this.rideTitle = page.getByTestId('title')
    }

    async startEndLocation() {
        await this.startLocation.fill('Glorieta minerva')
        await this.page.waitForTimeout(1000)
        await this.startLocation.press('ArrowDown')
        await this.startLocation.press('Enter')
        await this.endLocation.click()
        await this.page.waitForTimeout(1000)
        await this.endLocation.press('Backspace')
        await this.page.waitForTimeout(1000)
        await this.endLocation.fill('Plaza Galerias Monterrey')
        await this.endLocation.press('ArrowDown')
        await this.page.waitForTimeout(1000)
        await this.endLocation.press('Enter')
        await this.locateButton.click()
    }
}
