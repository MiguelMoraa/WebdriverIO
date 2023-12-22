import Actions from '../../../API/Actions'

class MyBikesPage extends Actions {
    constructor() {
        super()
    }

    get myBikesTab() { return '//*[@text="MY BIKES"]' }
    get addAnotherBikeButton() { return 'id=addBikeTitle' }
    get wizelineBike() { return '//*[@text="Wizeline Test"]' }
    get panamericaBike() { return '//*[@text="Pan America 2021"]' }
    get stoleneBike() { return '//*[@text="Do Not Delete Regression Test"]' }
    get testBike() { return 'android=new UiSelector().textContains("This")' }

    async tapOnMyBikesTab() {
        await this.tapElement(this.myBikesTab)
    }

    async tapOnAddAnotherBike() {
        await this.swipeDownToElementAndTap(this.addAnotherBikeButton)
    }

    async selectBike(bike) {
        switch (bike) {
            case 'Wizeline':
                await driver.pause(3000)
                await this.swipeDownToElementAndTap(this.wizelineBike)
                break
            case 'Test':
                await driver.pause(3000)
                await this.swipeDownToElementAndTap(this.testBike)
                break
            case 'Stolen':
                driver.pause(3000)
                await this.swipeDownToElementAndTap(this.stoleneBike)
                break
            case 'Pan America':
                await driver.pause(3000)
                await this.swipeDownToElementAndTap(this.panamericaBike)
                break
            default:
                break
        }
    }
}

export default new MyBikesPage()
