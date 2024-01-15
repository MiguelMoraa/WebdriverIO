import Actions from '../../../../API/Actions'

class MyRidesModal extends Actions {
    constructor() {
        super()
    }

    get myRidesHeader() { return 'id=headerLabel' }
    get rideDetailsButton() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/detailsButton").instance(1)' }
    get allTab() { return '//*[@text="ALL"]' }
    get plannedTab() { return '//*[@text="PLANNED"]' }
    get recordedTab() { return '//*[@text="RECORDED"]' }
    get recommendedTab() { return '//*[@text="RECOMMENDED"]' }
    get sharedWithMeTab() { return '//*[@text="SHARED WITH ME"]' }
    get sortRides() { return 'id=sortRides' }
    get sortHeader() { return 'id=alertTitle' }
    get cancelSort() { return 'id=android:id/button2' }
    get favoriteIcon() { return 'id=favoriteIcon' }
    get detailsButton() { return 'id=detailsButton' }

    async tapOnRideDetails() {
        await this.swipeDownToElementAndTap(this.rideDetailsButton)
    }

    async verifyTabs() {
        await expect($(this.allTab)).toBeDisplayed()
        await expect($(this.plannedTab)).toBeDisplayed()
        await expect($(this.recordedTab)).toBeDisplayed()
        await expect($(this.recommendedTab)).toBeDisplayed()
        const recommendedTabLocation = await this.getElementLocation(this.recommendedTab)
        const allTabLocation = await this.getElementLocation(this.allTab)
        await this.swipeToElement(this.sharedWithMeTab, recommendedTabLocation.x, recommendedTabLocation.y, allTabLocation.x, allTabLocation.y)
        await expect($(this.sharedWithMeTab)).toBeDisplayed()
    }

    async tapOnSortBy() {
        await this.tapElement(this.sortRides)
    }

    async tapOnCancelSort() {
        await this.tapElement(this.cancelSort)
    }

    async tapOnFavoritIcon() {
        await this.tapElement(this.favoriteIcon)
    }

    async tapOnRecordedTab() {
        await this.tapElement(this.recordedTab)
    }

    async tapOnRecommendedTab() {
        await this.tapElement(this.recommendedTab)
    }
}

export default new MyRidesModal()
