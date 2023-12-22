import { Page, Locator, expect } from '@playwright/test'

export class MainNavBar {
    //DEFINE THE ATRIBUTE FOR LOCATORS
    readonly page: Page
    readonly ridePlannerHeader: Locator
    readonly createRideButton: Locator
    readonly mapButton: Locator
    readonly HDSignInButton: Locator
    readonly HDUrl: Locator
    readonly HDEmail: Locator
    readonly HDPassword: Locator
    readonly HDSingInModalButton: Locator
    readonly hiModal: Locator
    readonly logOutButton: Locator
    readonly acceptCookies: Locator
    readonly HDSignInButtonAssert: Locator
    readonly forgotPassword: Locator
    readonly forgotEmail: Locator
    readonly sendForgotEmail: Locator
    readonly backToLogin: Locator
    readonly createAccount: Locator
    readonly createPassword: Locator
    readonly confirmPassword: Locator
    readonly continueCreateAccount: Locator
    readonly requiredField: Locator
    readonly eightCharacter: Locator
    readonly upperCaseValidation: Locator
    readonly lowerCaseValidation: Locator
    readonly numberValidation: Locator
    readonly specialCharacter: Locator
    readonly passwordMissmatchHeader: Locator
    readonly createAccountHeader: Locator
    readonly firstName: Locator
    readonly lastName: Locator
    readonly countryDropdown: Locator
    readonly zipCode: Locator
    readonly birthMM: Locator
    readonly birthDD: Locator
    readonly birthYYYY: Locator
    readonly homePhone: Locator
    readonly checkBoxNews: Locator
    readonly congratulationsHeader: Locator

    constructor(page: Page) {
        //LOCATORS NEEDS TO BE INSIDE OF THE CONSTRUCTOR
        this.page = page
        this.ridePlannerHeader = page.locator('.Header__logoText___CNIrM', { hasText:'Ride Planner' })
        this.createRideButton = page.locator('#create-link:visible')
        this.mapButton = page.locator('#map-link:visible')
        this.HDSignInButton = page.getByText('Sign in').nth(1)
        this.HDSignInButtonAssert = page.locator('.UserLink__text___o86iO:visible', { hasText:'Sign in' })
        this.HDEmail = page.locator('#gigya-loginID-291067614075428')
        this.HDPassword = page.locator('#gigya-password-89593312239763820')
        this.HDSingInModalButton = page.getByRole('button', { name:'SIGN IN' })
        this.hiModal = page.getByText('Hi,').nth(1)
        this.logOutButton = page.getByRole('menuitem', { name:'Logout' })
        this.HDUrl = page.locator('a[href^="https://www.harley-davidson.com"]', { hasText:'h-d.com >> nth=0' })
        this.acceptCookies = page.locator('text=Accept')
        this.forgotPassword = page.getByRole('button', { name: 'Forgot Password' })
        this.forgotEmail = page.getByPlaceholder('EMAIL *')
        this.sendForgotEmail = page.getByRole('button', { name: 'Send email' })
        this.backToLogin = page.getByRole('button', { name: 'Back to Login' })
        this.createAccount = page.getByRole('button', { name: 'Create Account' })
        this.createPassword = page.getByPlaceholder('PASSWORD *', { exact: true })
        this.confirmPassword = page.getByPlaceholder('Confirm password *')
        this.continueCreateAccount = page.getByRole('button', { name: 'Continue' })
        this.requiredField = page.getByText('This field is required').first()
        this.eightCharacter = page.getByRole('listitem').filter({ hasText: '8 characters' }).locator('span').first(),
        this.upperCaseValidation = page.getByRole('listitem').filter({ hasText: '1 upper case' }).locator('span').first(),
        this.lowerCaseValidation = page.getByRole('listitem').filter({ hasText: '1 lower case' }).locator('span').first(),
        this.numberValidation = page.getByRole('listitem').filter({ hasText: '1 number' }).locator('span').first(),
        this.specialCharacter = page.getByRole('listitem').filter({ hasText: '1 special character' }).locator('span').first()
        this.createAccountHeader = page.getByRole('heading', { name: 'Create Account' })
        this.firstName = page.getByPlaceholder('First name *')
        this.lastName = page.getByPlaceholder('Last name *')
        this.countryDropdown = page.locator('#gigya-dropdown-111738621302881060')
        this.zipCode = page.locator('#gigya-textbox-112459325398867020')
        this.birthMM = page.locator('#gigya-dropdown-147151334376544160')
        this.birthDD = page.locator('#gigya-dropdown-102356097748964670')
        this.birthYYYY = page.locator('#gigya-dropdown-birthYear')
        this.homePhone = page.getByLabel('HOME PHONE')
        this.checkBoxNews = page.getByRole('checkbox', { name: 'Yes, I would like to receive email periodically regarding Harley-Davidson products, services, and events.' })
        this.congratulationsHeader = page.getByRole('heading', { name: 'Congratulations!' })
        this.passwordMissmatchHeader = page.getByText('Passwords do not match')
    }

    async loginSuccessHD(username: string, password: string) {
        //await this.acceptCookies.click()
        await this.HDSignInButton.click()
        await this.HDEmail.fill(username)
        await this.HDPassword.fill(password)
        await this.HDSingInModalButton.click()
    }

    async loginSuccessHDSaveRide(username: string, password: string) {
        await this.HDEmail.fill(username)
        await this.HDPassword.fill(password)
        await this.HDSingInModalButton.click()
    }

    async logOutFlowHD() {
        await this.hiModal.click()
        await this.logOutButton.click()
    }

    async createRideUserIsNotLogged() {
        await this.createRideButton.click()
    }

    async createRideUserLogIn() {
        await this.createRideButton.click()
    }

    async logInEU(username: string, password: string) {
        await this.HDSignInButton.click()
        await this.HDEmail.fill(username)
        await this.HDPassword.fill(password)
        await this.HDSingInModalButton.click()
    }

    async mapTab() {
        await this.mapButton.click()
    }

    async forgotPasswordFlow(username: string) {
        await this.HDSignInButton.click()
        await this.forgotPassword.click()
        await this.forgotEmail.fill(username)
        await this.sendForgotEmail.click()
    }

    async createAccountEmptyFields() {
        await this.HDSignInButton.click()
        await this.createAccount.click()
        await this.continueCreateAccount.click()
    }

    async createAccountEmptyPassword() {
        await this.HDSignInButton.click()
        await this.createAccount.click()
        await this.forgotEmail.fill('eduardo.veloz@harley-davison.com')
        await this.continueCreateAccount.click()
    }

    async passwordMissmatch() {
        await this.HDSignInButton.click()
        await this.createAccount.click()
        await this.forgotEmail.fill(Math.round(Math.random() * 100000) + '@email.com')
        await this.createPassword.type('Test1234#')
        await this.confirmPassword.type('WrongPass')
        await this.continueCreateAccount.click()
    }

    async createAccountEmailAndPassword() {
        const RANDOMPASS = Math.random().toString(36).slice(-8) + '1A#'
        const RANDOMNUMBER = Math.floor(Math.random() * 1000000000)
        await this.HDSignInButton.click()
        await this.createAccount.click()
        await this.forgotEmail.fill(Math.round(Math.random() * 100000) + '@email.com')
        await this.createPassword.type(RANDOMPASS)
        await this.confirmPassword.type(RANDOMPASS)
        await this.validateCheckmarks()
        await this.continueCreateAccount.click()
        await this.firstName.type('testRegression')
        await this.lastName.type(Math.random().toString(36).slice(-5))
        await this.countryDropdown.selectOption('US')
        await this.zipCode.type(RANDOMNUMBER.toString())
        await this.birthMM.selectOption('7')
        await this.birthDD.selectOption('22')
        await this.birthYYYY.selectOption('1995')
        //await this.homePhone.fill(Math.floor(Math.random() * 10000000000).toString()) is no longer needed it
        await this.checkBoxNews.click()
        await this.createAccount.click()
        await this.continueCreateAccount.click()
    }

    async validateCheckmarks() {
        const checkmark: Locator[] = [this.eightCharacter, this.upperCaseValidation, this.lowerCaseValidation, this.specialCharacter, this.numberValidation]
        for(let i = 0; i < checkmark.length; i++) {
            await expect(checkmark).toBeTruthy
        }
        return true
    }
}
