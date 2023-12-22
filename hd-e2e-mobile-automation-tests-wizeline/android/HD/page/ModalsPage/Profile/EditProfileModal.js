import Actions from '../../../../API/Actions'

class EditProfileModal extends Actions {
    constructor() {
        super()
    }

    get editProfileHeader() { return 'id=headerLabel' }
    get editEmailButton() { return 'id=editEmailButton' }
    get editPasswordButton() { return 'id=editPasswordButton' }
    get firstNameField() { return 'id=firstNameField' }
    get birthdayField() { return 'id=birthdayField' }
    get saveChangesButton() { return 'id=saveButton' }
    get bithdayHeader() { return 'id=android:id/alertTitle' }
    get upMonth() { return 'android=new UiSelector().className("android.widget.Button").instance(0)' }
    get editedMonthField() { return 'android=new UiSelector().resourceId("android:id/numberpicker_input").instance(0)' }
    get downMonth() { return 'android=new UiSelector().className("android.widget.Button").instance(1)' }
    get upDay() { return 'android=new UiSelector().className("android.widget.Button").instance(2)' }
    get editedDayField() { return 'android=new UiSelector().resourceId("android:id/numberpicker_input").instance(1)' }
    get downDay() { return 'android=new UiSelector().className("android.widget.Button").instance(3)' }
    get upYear() { return 'android=new UiSelector().className("android.widget.Button").instance(4)' }
    get editedYearField() { return 'android=new UiSelector().resourceId("android:id/numberpicker_input").instance(2)' }
    get downYear() { return 'android=new UiSelector().className("android.widget.Button").instance(5)' }
    get birthdayOkButton() { return 'id=android:id/button1' }
    get emailField() { return 'id=email' }
    get addAddressButton() { return 'id=addAddressButton' }
    get editAddressButton() { return 'id=editAddressButton' }
    get address1Field() { return 'id=addressLineOne' }
    get address2Field() { return 'id=addressLineTwo' }
    get stateAndPostalCodeField() { return 'id=cityStatePostalCode' }
    get countryField() { return 'id=country' }
    get phoneField() { return 'id=phoneNumber' }

    async tapOnEditEmail() {
        await this.tapElement(this.editEmailButton)
    }

    async tapOnEditPassword() {
        await this.tapElement(this.editPasswordButton)
    }

    async editFirstName(username) {
        const user = username === 'edited' ? process.env.EDITED_NAME : process.env.ORIGINAL_NAME
        await this.writeOnElement(this.firstNameField, user)
    }

    async editBirthdayDate(month, day, year) {
        await this.swipeDownToElementAndTap(this.birthdayField)
        await expect($(this.bithdayHeader)).toBeDisplayed()
        const monthLocation = await this.getElementLocation(this.editedMonthField)
        const downMonthLocation = await this.getElementLocation(this.downMonth)
        const dayLocation = await this.getElementLocation(this.editedDayField)
        const upDayLocation = await this.getElementLocation(this.upDay)
        const yearLocation = await this.getElementLocation(this.editedYearField)
        const downYearLocation = await this.getElementLocation(this.downYear)
        var monthText = await this.getElementText(this.editedMonthField)
        var dayText = await this.getElementText(this.editedDayField)
        var yearText = await this.getElementText(this.editedYearField)
        while (monthText !== month) {
            await this.swipeScreen(monthLocation.x, monthLocation.y, downMonthLocation.x, downMonthLocation.y)
            monthText = await this.getElementText(this.editedMonthField)
        }
        await expect($(this.editedMonthField)).toHaveText(month)
        while (dayText !== day) {
            await this.swipeScreen(dayLocation.x, dayLocation.y, upDayLocation.x, upDayLocation.y)
            dayText = await this.getElementText(this.editedDayField)
        }
        await expect($(this.editedDayField)).toHaveText(day)
        while (yearText !== year) {
            await this.swipeScreen(yearLocation.x, yearLocation.y, downYearLocation.x, downYearLocation.y)
            yearText = await this.getElementText(this.editedYearField)
        }
        await expect($(this.editedYearField)).toHaveText(year)
        await this.tapElement(this.birthdayOkButton)
    }

    async setOrigialDate(month, day, year) {
        await this.swipeDownToElementAndTap(this.birthdayField)
        await expect($(this.bithdayHeader)).toBeDisplayed()
        const monthLocation = await this.getElementLocation(this.editedMonthField)
        const upMonthLocation = await this.getElementLocation(this.upMonth)
        const dayLocation = await this.getElementLocation(this.editedDayField)
        const downDayLocation = await this.getElementLocation(this.downDay)
        const yearLocation = await this.getElementLocation(this.editedYearField)
        const upYearLocation = await this.getElementLocation(this.upYear)
        var monthText = await this.getElementText(this.editedMonthField)
        var dayText = await this.getElementText(this.editedDayField)
        var yearText = await this.getElementText(this.editedYearField)
        while (monthText !== month) {
            await this.swipeScreen(monthLocation.x, monthLocation.y, upMonthLocation.x, upMonthLocation.y)
            monthText = await this.getElementText(this.editedMonthField)
        }
        await expect($(this.editedMonthField)).toHaveText(month)
        while (dayText !== day) {
            await this.swipeScreen(dayLocation.x, dayLocation.y, downDayLocation.x, downDayLocation.y)
            dayText = await this.getElementText(this.editedDayField)
        }
        await expect($(this.editedDayField)).toHaveText(day)
        while (yearText !== year) {
            await this.swipeScreen(yearLocation.x, yearLocation.y, upYearLocation.x, upYearLocation.y)
            yearText = await this.getElementText(this.editedYearField)
        }
        await expect($(this.editedYearField)).toHaveText(year)
        await this.tapElement(this.birthdayOkButton)
    }

    async tapOnSaveChanges() {
        await this.tapElement(this.saveChangesButton)
    }

    async tapOnEditAddress() {
        await this.swipeDownToElementAndTap(this.editAddressButton)
    }

    async tapOnAddAddress() {
        await this.swipeDownToElementAndTap(this.addAddressButton)
    }

    async validateAddress(address) {
        const address1 = 'GDL' === address ? process.env.GDL_ADDRESS1 : process.env.CDMX_ADDRESS1
        const address2 = 'GDL' === address ? process.env.GDL_ADDRESS2 : process.env.CDMX_ADDRESS2
        const postalcode = 'GDL' === address ? process.env.GDL_ZIP_CODE : process.env.CDMX_ZIP_CODE
        const city = 'GDL' === address ? process.env.GDL_CITY : process.env.CDMX_CITY
        const phone = 'GDL' === address ? process.env.GDL_PHONE : process.env. CDMX_PHONE
        await this.swipeDownToElement(this.phoneField)
        await expect($(this.address1Field)).toHaveText(address1)
        await expect($(this.address2Field)).toHaveText(address2)
        await expect($(this.stateAndPostalCodeField)).toHaveText(city + ',  ' + postalcode)
        await expect($(this.countryField)).toHaveText('MX')
        await expect($(this.phoneField)).toHaveText(phone)
    }
}

export default new EditProfileModal()
