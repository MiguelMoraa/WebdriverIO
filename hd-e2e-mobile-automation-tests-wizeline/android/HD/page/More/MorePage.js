import Actions from '../../../API/Actions'
import CorePage from '../CorePage'

class MorePage extends Actions {
    constructor() {
        super()
    }

    get motorcyclesMenu() { return 'id=myMotorcycles' }
    get scheduleATestRideMenu() { return 'id=testRide' }
    get findADealerMenu() { return 'id=findDealer' }
    get learnToRideMenu() { return 'id=rideAcademy' }
    get eventsMenu() { return 'id=event' }
    get rentABikeMenu() { return 'id=rentMotorcycles' }
    get museumMenu() { return 'id=museum' }
    get onlineStoreMenu() { return 'id=onlineStore' }
    get partsAndAccessoriesMenu() { return 'id=partsAndAccessories' }
    get appFeedbackOption() { return 'id=appFeedback' }
    get aboutOption() { return 'id=about' }
    get hdcom() { return 'id=webLink' }
    get bookmarkIcon() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/favoriteIcon").instance(5)' }

    async verifyMoreMenus(region) {
        await expect($(this.motorcyclesMenu)).toBeDisplayed()
        await expect($(this.findADealerMenu)).toBeDisplayed()
        await expect($(this.onlineStoreMenu)).toBeDisplayed()
        if ('United States' === region) {
            await expect($(this.scheduleATestRideMenu)).toBeDisplayed()
            await expect($(this.learnToRideMenu)).toBeDisplayed()
            await expect($(this.eventsMenu)).toBeDisplayed()
            await expect($(this.rentABikeMenu)).toBeDisplayed()
            await expect($(this.museumMenu)).toBeDisplayed()
            await expect($(this.partsAndAccessoriesMenu)).toBeDisplayed()
        }
        if (await $(this.appFeedbackOption).isExisting() === false) {
            await this.swipeDownToElement(this.appFeedbackOption)
        }
        else {
            await expect($(this.appFeedbackOption)).toBeDisplayed()
            await expect($(this.aboutOption)).toBeDisplayed()
        }
    }

    async tapOnMotorcyclesPage() {
        await this.swipeUpToElementAndTap(this.motorcyclesMenu)
    }

    async tapOnScheduleATestRidePage() {
        await this.swipeUpToElementAndTap(this.scheduleATestRideMenu)
    }

    async tapOnFindADealerPage() {
        await this.swipeDownToElementAndTap(this.findADealerMenu)
    }

    async tapOnLearnToRidePage() {
        await this.swipeDownToElementAndTap(this.learnToRideMenu)
    }

    async tapOnEventsPage() {
        await this.swipeDownToElementAndTap(this.eventsMenu)
        await CorePage.loadingProcess()
        await driver.pause(2000)
    }

    async tapOnRentABikePage() {
        await this.swipeDownToElementAndTap(this.rentABikeMenu)
    }

    async tapOnMuseumPage() {
        await this.swipeDownToElementAndTap(this.museumMenu)
    }

    async tapOnOnlineStorePage() {
        await this.swipeDownToElementAndTap(this.onlineStoreMenu)
    }

    async tapOnPartsAndAccessoriesPage() {
        await this.swipeDownToElementAndTap(this.partsAndAccessoriesMenu)
    }

    async tapOnAppFeedback() {
        await this.swipeDownToElementAndTap(this.appFeedbackOption)
    }

    async tapOnAboutPage() {
        await this.swipeDownToElementAndTap(this.aboutOption)
    }

    async tapOnBookmarkIcon() {
        await this.swipeDownToElementAndTap(this.bookmarkIcon)
    }
}

export default new MorePage()
