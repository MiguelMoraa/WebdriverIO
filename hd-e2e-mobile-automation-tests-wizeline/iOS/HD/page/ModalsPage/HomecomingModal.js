import Actions from '../../../API/Actions'

class HomecomingModal extends Actions {
    constructor() {
        super()
    }

    get interestedButton() { return 'id=buttonToggleInterested' }
    get closeInterestedModal() { return 'id=closeButton' }
    get buyTicketsButton() { return 'id=buttonDarkLegacy' }
    get bookYourStayHeader() { return 'android=new UiSelector().textContains("Book Your Stay Now")' }
    get descriptionTests() { return ['android=new UiSelector().textContains("Motorcycle rentals.")',
        'android=new UiSelector().textContains("VISIT Milwaukee")',
        'android=new UiSelector().textContains("Washington County")']}

    async tapOnInterested() {
        await driver.pause(1500)
        await this.tapElement(this.interestedButton)
    }

    async tapOnCloseInterestedModal() {
        await this.tapElement(this.closeInterestedModal)
    }

    async tapOnBuyTickets() {
        await this.swipeDownToElementAndTap(this.buyTicketsButton)
    }

}

export default new HomecomingModal()
