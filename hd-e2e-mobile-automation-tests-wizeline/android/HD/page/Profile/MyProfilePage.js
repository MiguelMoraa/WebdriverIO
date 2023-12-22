import Actions from '../../../API/Actions'
import SettingsModal from '../ModalsPage/Profile/SettingsModal'

class MyProfilePage extends Actions {
    constructor() {
        super()
    }

    get myProfileTab() { return '//*[@text="MY PROFILE"]' }
    get miPerfilTab() { return '//*[@text="MI PERFIL"]' }
    get editProfileIcon() { return 'id=profileEditIcon' }
    get settingsIcon() { return 'id=stickyHeaderIconSettings' }
    get viewAllRides() { return 'id=moreRidesTextView' }
    get plannedRides() { return '//*[@text="PLANNED"]' }
    get timeRide() { return 'id=time' }
    get viewAllEventsLink() { return 'id=view_all_events_button' }
    get cityUser() { return 'id=cityStateOrCountryView' }
    get profilePicture() { return 'id=avatarImageView' }
    get userName() { return 'id=nameTextView' }
    get userEmail() { return 'id=emailTextView' }
    get myRidesTitle() { return 'id=ridesHeaderTextView' }
    get myEventsTitle() { return 'id=favorited_events_header_title' }
    get logoutButton() { return 'id=logoutButton' }
    get rideItButton() { return 'id=rideButton' }
    get deleteAccountButton() { return 'id=deleteAccountButton' }
    get continueDeleteAccount () { return 'id=android:id/button1' }

    async tapOnMyProfileTab() {
        await this.tapElement(this.myProfileTab)
    }

    async verifyProfileData() {
        await expect($(this.profilePicture)).toBeDisplayed()
        await expect($(this.userName)).toBeDisplayed()
        await expect($(this.userEmail)).toBeDisplayed()
        if (await $(this.myRidesTitle).isExisting() && await $(this.myEventsTitle).isExisting() === false) {
            await this.swipeDownToElement(this.myRidesTitle)
            await this.swipeDownToElement(this.myEventsTitle)
        }
        await this.swipeDownToElement(this.logoutButton)
    }

    async verifyUserName(username) {
        const user = username === 'edited' ? process.env.EDITED_NAME : process.env.ORIGINAL_NAME
        await expect($(this.userName)).toHaveText(user + ' HD')
    }

    async tapOnEditProfile() {
        await this.tapElement(this.editProfileIcon)
    }

    async tapOnSettings() {
        await this.tapElement(this.settingsIcon)
        await this.findElement(SettingsModal.settingsHeader)
    }

    async tapOnViewAllRides() {
        await this.tapElement(this.viewAllRides)
    }

    async tapOnMyRidesPlanned() {
        await this.gotoAllMyRides()
        await this.tapElement(this.plannedRides)
        await expect($(this.timeRide)).toBeDisplayed()
    }

    async tapOnViewAllEvents() {
        await this.swipeDownToElementAndTap(this.viewAllEventsLink)
    }

    async logout() {
        await this.swipeDownToElementAndTap(this.logoutButton)
    }

    async taponRideItButton() {
        await this.swipeDownToElementAndTap(this.rideItButton)
    }

    async tapOnDeleteAccount() {
        await this.swipeDownToElementAndTap(this.deleteAccountButton)
        await this.tapElement(this.continueDeleteAccount)
    }
}

export default new MyProfilePage()
