import { Locator, Page } from '@playwright/test'

export class MainFooter {
    readonly page: Page
    readonly harleyUsa: Locator
    readonly FacebookIcon: Locator
    readonly TwitterIcon: Locator
    readonly InstragramIcon: Locator
    readonly YoutubeIcon: Locator
    readonly PinterestIcon: Locator
    readonly hdLink: Locator
    readonly termsOfUse: Locator
    readonly privacy: Locator
    readonly weCareAboutYou: Locator
    readonly contactUS: Locator
    readonly safetyRecall: Locator
    readonly aboutHD: Locator
    readonly policyForUser: Locator
    readonly careers: Locator
    readonly hdFinancialSerives: Locator
    readonly webAccesibility: Locator
    readonly singUPForEmail: Locator
    readonly hdLogo: Locator
    readonly footerText: Locator

    constructor(page: Page) {
        this.harleyUsa = page.locator('.Footer__locale___FxMvi')
        this.FacebookIcon = page.locator('[aria-label="Facebook"]')
        this.TwitterIcon = page.locator('[aria-label="Twitter"]')
        this.InstragramIcon = page.locator('[aria-label="Instagram"]')
        this.YoutubeIcon = page.locator('[aria-label="YouTube"]')
        this.PinterestIcon = page.locator('[aria-label="Pinterest"]')
        this.hdLink = page.locator('a[href^="www.harley-davidson.com"]')
        this.termsOfUse = page.locator('text=Terms of Use')
        this.privacy = page.locator('text=Privacy Policy')
        this.weCareAboutYou = page.locator('text=We Care About You')
        this.contactUS = page.locator('text=Contact Us')
        this.safetyRecall = page.locator('text=Safety Recall Information')
        this.aboutHD = page.locator('text=About Harley-Davidson')
        this.policyForUser = page.locator('text=Policy For User-Submitted Content')
        this.careers = page.locator('text=Careers')
        this.hdFinancialSerives = page.locator('text=Harley-Davidson Financial Services')
        this.webAccesibility = page.locator('text=Web Accessibility')
        this.singUPForEmail = page.locator('text=Sign Up for Email')
        this.hdLogo = page.locator('.Footer__copyright___gLs0V > .Link__Link___zifh > .Icon__no-stroke___PNSkg')
        this.footerText = page.locator('text=2022 H-D or its affiliates. HARLEY-DAVIDSON, HARLEY, H-D, and the Bar and Shield')
    }

    async footerItems(page: Page) {
        const locators: Locator[] = [this.FacebookIcon, this.InstragramIcon, this.YoutubeIcon, this.PinterestIcon, this.termsOfUse, this.privacy, this.weCareAboutYou, this.contactUS, this.safetyRecall, this.aboutHD, this.policyForUser, this.careers, this.hdFinancialSerives, this.webAccesibility, this.singUPForEmail]

        for (let i = 0; i < locators.length; i++) {
            await locators[i].click()
            page.waitForEvent('popup')
        }
    }
}
