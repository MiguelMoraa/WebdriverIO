import Actions from '../../../API/Actions'

class SelectABikeModal extends Actions {
    constructor() {
        super()
    }

    get continueButton() { return 'id=continueWithBike' }
    get retalBikeLink() { return 'id=rental' }
    get notOnBikeLink() { return 'id=notOnBike' }

    async tapOnContinue() {
        await this.tapElement(this.continueButton)
    }

    async selectRentalBike() {
        await this.tapElement(this.retalBikeLink)
    }

    async notOnaBike() {
        await this.tapElement(this.notOnBikeLink)
    }
}

export default new SelectABikeModal()
