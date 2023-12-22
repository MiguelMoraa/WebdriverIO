import { Page, Locator } from '@playwright/test'

export class HomePage {
    readonly page: Page
    readonly modalPage: Locator
    readonly userQaEnvironment: Locator
    readonly passQaEnvironment: Locator
    readonly loginQaEnvironment: Locator
    readonly errorMessage: Locator
    readonly heroTitle: Locator
    readonly searchBar: Locator
    readonly rideCollectionHeader: Locator
    readonly findRideTextBox: Locator
    readonly ridesForYou: Locator
    readonly testoDelete: Locator
    readonly californiaState: Locator
    readonly twistedSisterRide: Locator

    constructor(page: Page) {
        //locators - Selectors needs to be inside of constructor
        this.page = page
        this.modalPage = page.locator('#app')
        this.userQaEnvironment = page.locator('[name~="auth_user"]')
        this.passQaEnvironment = page.locator('[name~="auth_password"]')
        this.loginQaEnvironment = page.locator('[type~="submit"]')
        this.errorMessage = page.locator('[data-test="error"]')
        this.searchBar = page.locator('[type~="text"]')
        this.heroTitle = page.getByRole('heading', { name: 'Find a ride' })
        this.rideCollectionHeader = page.locator('.HomeView__LinkSection___ewjh6', { hasText: 'RIDE COLLECTIONS' })
        this.findRideTextBox = page.locator('[placeholder="Enter a Ride Name or Location"]')
        this.ridesForYou = page.locator('.SectionTitle__SectionTitle___puEmv', { hasText:'Rides For You' })
        this.californiaState = page.getByText('CA, United States', { exact: true })
        this.twistedSisterRide = page.getByText('TWISTED SISTERS', { exact: true })
    }

    async environmentCredentials(username:string, password:string) {
        await this.userQaEnvironment.fill(username)
        await this.passQaEnvironment.fill(password)
        await this.loginQaEnvironment.click()
    }

    async searchForState() {
        await this.searchBar.fill('California')
        await this.californiaState.click()
    }

    async searchForRide() {
        await this.searchBar.fill('Twisted Sisters')
        await this.twistedSisterRide.click()
    }
}

