import Actions from '../../../../API/Actions'
import FindADealerModal from './FindADealerModal'

class SearchDealers extends Actions {
    constructor() {
        super()
    }

    get searchDealerHeader() { return 'id=headerLabel' }
    get searchField() { return 'id=location' }
    get location() { return 'id=findDealers' }
    get findDealersButton() { return 'id=findDealers' }

    async setLocation(location) {
        await this.writeOnElement(this.searchField, location)
        await driver.pause(2000)
        await this.tapElement(this.location)
        await this.tapElement(this.findDealersButton)
        await this.waitForElementClickable(FindADealerModal.searchIcon)
    }
}

export default new SearchDealers()
