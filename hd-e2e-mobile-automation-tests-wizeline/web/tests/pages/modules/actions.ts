import { Page } from '@playwright/test'

export class ActionsPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async zoomOut() {
        await this.page.mouse.wheel(0, 200)
    }

    async zoomIn() {
        await this.page.mouse.wheel(0, 10)
        await console.log('test')
        await this.page.waitForTimeout(2000)
    }
}
