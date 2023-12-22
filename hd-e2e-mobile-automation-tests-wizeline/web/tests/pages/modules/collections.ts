import { Locator, Page, expect } from '@playwright/test'

export class Collections {
    readonly tenForTwentyThree: Locator
    readonly oneNation: Locator
    readonly viewAsList: Locator
    readonly hogRideTenHeader: Locator
    readonly viewOnMap: Locator
    readonly rowGroup: Locator
    readonly previewRide: Locator
    readonly oneNationHeader: Locator

    constructor(page: Page) {
        this.tenForTwentyThree = page.locator('span').filter({ hasText: 'RIDE 365 10 for 23VIEW RIDES' }).getByRole('link', { name: 'VIEW RIDES' })
        this.oneNation = page.locator('span').filter({ hasText: 'RIDE 365 50 RIDES, ONE NATIONVIEW RIDES' }).getByRole('link', { name: 'VIEW RIDES' })
        this.viewAsList = page.getByRole('link', { name: 'VIEW AS LIST' })
        this.hogRideTenHeader = page.getByText('10 for 23')
        this.oneNationHeader = page.getByText('50 RIDES, ONE NATION', { exact: true })
        this.viewOnMap = page.getByRole('link', { name: 'View on map' })
        this.rowGroup = page.getByRole('rowgroup')
        this.previewRide = page.getByRole('link', { name: 'Preview' }).first()
    }

    async viewRideTenForTwentyThree() {
        await this.tenForTwentyThree.click()
        await this.viewAsList.click()
        await expect(this.hogRideTenHeader).toBeVisible()
        await this.previewRide.click()
    }

    async viewRideOneNation() {
        await this.oneNation.click()
        await this.viewAsList.click()
        await expect(this.oneNationHeader).toBeVisible()
        await this.previewRide.click()
    }
}
