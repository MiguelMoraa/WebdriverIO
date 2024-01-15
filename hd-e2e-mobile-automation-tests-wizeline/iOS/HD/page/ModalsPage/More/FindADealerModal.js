import Actions from '../../../../API/Actions'
import CorePage from '../../CorePage'

class FindADealerModal extends Actions {
    constructor() {
        super()
    }

    get findADealerHeader() { return 'id=headerLabel' }
    get selectADealer() { return 'id=content' }
    get searchIcon() { return 'id=searchIcon' }
    get favoriteIcon() { return 'id=favoriteIcon' }
    get takeMeThereButton() { return 'id=takeMeThere' }

    async tapOnADealer() {
        await this.tapElement(this.selectADealer)
    }

    async serachDealers() {
        await this.tapElement(this.searchIcon)
    }

    async tapOnFavotieIcon() {
        await this.tapElement(this.favoriteIcon)
        await CorePage.loadingProcess()
    }

    async tapOnTakeMeThere() {
        await this.swipeDownToElementAndTap(this.takeMeThereButton)
    }
}

export default new FindADealerModal()
