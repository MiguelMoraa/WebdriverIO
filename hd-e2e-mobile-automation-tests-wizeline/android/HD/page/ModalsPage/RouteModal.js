import Actions from '../../../API/Actions'
import { TEXTS } from '../../data/ModalData'

class RouteModal extends Actions {
    constructor() {
        super()
    }

    get rideNameText() { return 'id=rideNameTextView' }
    get rideNameTitle() { return 'id=rideName' }
    get editButton() { return 'id=editButton' }
    get rideItButton() { return 'id=rideButton' }
    get recordedTypeText() { return 'id=typeName' }
    get tripDurationTitle() { return 'id=tripDurationTitle' }
    get tripDistanceTitle() { return 'id=tripDistanceTitle' }
    get distanceRide() { return 'id=distanceTextView' }
    get seekBar() { return 'id=seekBar' }
    get tripDuration() { return 'id=tripDurationValue' }
    get tripDistance() { return 'id=tripDistanceValue' }
    get routeDetails() { return 'id=title' }
    get routeWaitpoints() { return 'id=routeDetailsRecyclerView' }
    get shareIcon() { return 'id=shareIcon' }
    get bookmarkIcon() { return 'id=favoriteIcon' }
    get confirmUsavebutton() { return 'id=android:id/button1' }
    get currentWeatherArrow() { return 'id=iv_current_weather' }
    get moreIcon() { return 'id=moreIcon' }
    get myRideCardName() { return 'id=name' }

    async tapOnRideITButton() {
        if (this.rideItButton === true) {
            await this.tapElement(this.rideItButton)
        }
        else {
            await this.swipeDownToElementAndTap(this.rideItButton)
        }
    }

    async tapOnEditButton() {
        if (this.editButton === true) {
            await this.tapElement(this.editButton)
        }
        else {
            await this.swipeDownToElementAndTap(this.editButton)
        }
    }

    async verifyRecordedRide() {
        await expect($(this.rideNameTitle)).toBeDisplayed()
        await expect($(this.recordedTypeText)).toHaveText(TEXTS.RECORDED)
        await expect($(this.tripDurationTitle)).toBeDisplayed()
        await expect($(this.tripDistanceTitle)).toBeDisplayed()
        await expect($(this.tripDuration)).toBeDisplayed()
        await expect($(this.tripDistance)).toBeDisplayed()
    }

    async tapRouteDetails() {
        const distanceRide = await this.getElementLocation(this.distanceRide)
        const seekBar = await this.getElementLocation(this.seekBar)
        for (let i = 0 ; i < 5 ; i++) {
            await this.swipeScreen(360, distanceRide.y, 360, seekBar.y)
        }
        await this.swipeDownToElementAndTap(this.routeDetails)
    }

    async tapOnShareIcon() {
        await this.tapElement(this.shareIcon)
    }

    async tapOnBookmarkIcon() {
        await this.tapElement(this.bookmarkIcon)
    }

    async tapOnOkUnsave() {
        await this.tapElement(this.confirmUsavebutton)
    }

    async tapOnCurrentWeather() {
        const distanceRide = await this.getElementLocation(this.distanceRide)
        const seekBar = await this.getElementLocation(this.seekBar)
        for (let i = 0 ; i < 5 ; i++) {
            await this.swipeScreen(360, distanceRide.y, 360, seekBar.y)
        }
        await this.swipeDownToElementAndTap(this.currentWeatherArrow)
    }

    async getRideName() {
        const RIDE_NAME = await this.getElementText(this.rideNameText)
        return RIDE_NAME
    }
}

export default new RouteModal()
