import { Locator, Page } from '@playwright/test'

export class ToolbarCreate {
    readonly page: Page
    readonly undoButton: Locator
    readonly redoButton : Locator
    readonly bookMarkButton : Locator
    readonly shareButton : Locator
    readonly copyRideButton : Locator
    readonly saveRideButton : Locator
    readonly saveRideButtonModal : Locator
    readonly exportGPXButton : Locator
    readonly printButton : Locator

    constructor(page: Page) {
        this.page = page
        this.undoButton = page.locator('#undo-button')
        this.redoButton = page.locator('#redo-button')
        this.bookMarkButton = page.locator('#bookmark-button')
        this.shareButton = page.locator('#share-button')
        this.printButton = page.locator('#print-button')
        this.exportGPXButton = page.locator('#gpx-button')
        this.copyRideButton = page.locator('#copy-button')
        this.saveRideButton = page.locator('#save-button')
        this.saveRideButtonModal = page.locator('button:has-text("Save Ride")')
    }

    async saveRideWhenUserIsNotLoginIn() {
        this.saveRideButton.click()
        await this.page.waitForTimeout(3000)
        this.saveRideButtonModal.click()
        await this.page.waitForTimeout(3000)
    }

    async saveRideWhenUserIsLogin() {
        this.saveRideButton.click()
        await this.page.waitForTimeout(3000)
        this.saveRideButtonModal.click()
        await this.page.waitForTimeout(3000)
    }
}
