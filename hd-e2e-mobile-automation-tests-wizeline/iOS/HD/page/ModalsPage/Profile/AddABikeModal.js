import Actions from '../../../../API/Actions'

class AddABikeModal extends Actions {
    constructor() {
        super()
    }

    get addABikeHeader() { return 'id=headerLabel' }
    get VINField() { return 'id=vin' }
    get validateVINButton() { return 'id=validateVin' }
    get nicknameField() { return 'id=nickname' }
    get characters() { return 'id=nicknameCounter' }
    get addYourBikeButton() { return 'id=addBike' }

    async setVINNumber(VIN) {
        await this.writeOnElement(this.VINField, VIN)
        await this.tapElement(this.validateVINButton)
    }

    async addBikeNickName(nickname) {
        await this.writeOnElement(this.nicknameField, nickname)
    }

    async tapOnAddYourBike() {
        await this.tapElement(this.addYourBikeButton)
    }

}

export default new AddABikeModal()
