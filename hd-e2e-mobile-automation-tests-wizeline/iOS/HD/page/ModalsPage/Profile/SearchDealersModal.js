import Actions from '../../../../API/Actions'

class SearchDealers extends Actions {
    constructor() {
        super()
    }

    get searchDealerHeader() { return 'id=headerLabel' }
    get searchDealersField() { return 'id=location' }
    get findDealersButton() { return 'id=findDealers' }

    async setLocation(location) {
        await this.writeOnElement(this.searchDealersField, location)
        await driver.pause(3000)
        await this.tapElement(this.findDealersButton)
        await this.tapElement(this.findDealersButton)
    }
}

export default new SearchDealers()
