import Actions from '../../../API/Actions'

class RidePage extends Actions {
    constructor() {
        super()
    }

    get whereToField() { return 'id=toolbarSearchBoxMiniEdit' }
    get filterButton() { return 'id=filter' }
    get createRideButton() { return 'id=createRide' }

    async tapOnFilter() {
        await this.tapElement(this.filterButton)
    }

    async tapOnWhereToField() {
        await this.tapElement(this.whereToField)
    }

    async tapOnCreateRide() {
        await this.tapElement(this.createRideButton)
    }
}

export default new RidePage()
