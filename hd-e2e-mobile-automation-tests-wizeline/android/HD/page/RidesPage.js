import Actions from '../../API/Actions'

class RidesPage extends Actions {
    constructor() {
        super()
    }

    get trafficIcon() { return 'id=traffic' }
    get simulateRideButton() { return 'id=simulate' }
    get startRideButton() { return 'id=start' }
    get optionsButton() { return 'id=navOptionsMenuContainer' }
    get continueButton() { return 'id=continueButton' }
    get oneSpeed() { return '//*[@text="1x Speed"]' }
    get twoSpeed() { return '//*[@text="2x Speed"]' }
    get threeSpeed() { return '//*[@text="3x Speed"]' }
    get startButton() { return 'id=android:id/button1' }
    get debugButton() { return '//*[@text="View Debug Log"]' }
    get backButton() { return '~Navigate up' }
    get closeNavVoice() { return 'id=navOptionsTipCloseButton' }

    async tapOnContinue() {
        await this.tapElement(this.continueButton)
    }

    async tapOnBack() {
        await this.tapElement(this.backButton)
    }

    async verifiedRideScreen() {
        await expect($(this.trafficIcon)).toBeDisplayed()
        await expect($(this.simulateRideButton)).toBeDisplayed()
        await expect($(this.startRideButton)).toBeDisplayed()
    }

    async simualteRide() {
        if (await $(this.closeNavVoice).isExisting === true) {
            await this.tapElement(this.closeNavVoice)
        }
        await this.waitForElementClickable(this.simulateRideButton)
        await browser.pause(5000)
        await this.tapElement(this.simulateRideButton)
    }

    async startRide() {
        await this.verifiedRouteScreen()
        await this.tapElement(this.startRideButton)
    }

    async selectSpeed(speed) {
        switch (speed) {
            case '1x':
                await this.tapElement(this.oneSpeed)
                break
            case '2x':
                await this.tapElement(this.twoSpeed)
                break
            case '3x':
                await this.tapElement(this.threeSpeed)
                break
            default:
                break
        }
    }

    async tapOnStartSimulation() {
        await this.tapElement(this.startButton)
    }
}

export default new RidesPage()
