import Actions from '../../API/Actions'

class EditRidePage extends Actions {
    constructor() {
        super()
    }

    get editHeader() { return '//*[@text="EDIT"]' }
    get continueButton() { return 'id=viewEditButton' }
    get handleStartPoint() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/dragHandle").instance(0)' }
    get handleEndPoint() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/dragHandle").instance(1)' }

    async tapOnContinue() {
        await this.tapElement(this.continueButton)
    }

    async moveEndPoint() {
        await this.dragAndDropOnElement(this.editHeader, this.editHeader)
    }
}

export default new EditRidePage()
