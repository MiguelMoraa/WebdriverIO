import Actions from '../../../API/Actions'

class MyDealerPage extends Actions {
    constructor() {
        super()
    }

    get myDealerTab() { return '//*[@text="MY DEALER"]' }
    get addADealerButton() { return 'id=addDealerBtn' }
    get favoriteIcon() { return 'id=favoriteIcon' }
    get takeMeThereButton() { return 'id=takeMeThere' }

    async tapOnMyDealerTab() {
        await this.tapElement(this.myDealerTab)
    }

    async addADealer() {
        await this.tapElement(this.addADealerButton)
    }

    async tapOnTakeMeThere() {
        await this.tapElement(this.takeMeThereButton)
    }
}

export default new MyDealerPage()
