import Actions from '../../../../API/Actions'

class PoiModal extends Actions {
    constructor() {
        super()
    }

    get poi() { return 'id=resultTitleAndAddress' }
    get businessStatus() { return 'id=openClosedStatus' }

    async selectFirstPOI() {
        await this.tapElement(this.poi)
    }
}

export default new PoiModal()
