import Actions from '../../../API/Actions'

class CreatePage extends Actions {
    constructor() {
        super()
    }

    get createHeader() { return '//*[@text="CREATE"]' }
    get startPointField() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/location")' }
    get searchField() { return 'id=search_bar_text' }
    get suggestLocation() { return 'id=body' }
    get endPointField() { return '//*[@text="Optional"]' }
    get plusButton() { return 'id=ridesConfirmButton' }
    get continueButton() { return 'id=viewEditButton' }
    get distanceRide() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/distance").textContains("KM")' }

    async setRide(startLocation, endLocation) {
        await this.tapElement(this.startPointField)
        await this.writeOnElement(this.searchField, startLocation)
        await driver.pause(3000)
        await this.tapElement(this.suggestLocation)
        await this.tapElement(this.plusButton)
        await this.tapElement(this.endPointField)
        await this.writeOnElement(this.searchField, endLocation)
        await driver.pause(3000)
        await this.tapElement(this.suggestLocation)
        await this.tapElement(this.plusButton)
    }

    async continueRide() {
        await this.tapElement(this.continueButton)
    }

}

export default new CreatePage()
