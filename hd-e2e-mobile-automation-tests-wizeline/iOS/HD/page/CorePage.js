import Actions from '../../API/Actions'

class CorePage extends Actions {
    constructor() {
        super()
    }

    get hdLogo() { return 'id=stickyHeaderLogo' }
    get todayTab() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/tabLabel").instance(1)' }
    get profileTab() { return '//*[@text="Profile"]' }
    get rideTab() { return '//*[@text="Ride"]' }
    get groupsTab() { return '//*[@text="Groups"]' }
    get moreTab() { return '//*[@text="More"]' }
    get inboxIcon() { return 'id=stickyHeaderIconMail' }
    get shakeEngineIcon() { return 'id=loading' }
    get todayIcon() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/tabIcon").instance(0)' }
    get profileIcon() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/tabIcon").instance(1)' }
    get rideIcon() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/tabIcon").instance(2)' }
    get groupsIcon() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/tabIcon").instance(3)' }
    get moreIcon() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/tabIcon").instance(4)' }

    async verifyAppStarts(language, region) {
        if ('Spanish' === language) {
            await expect($(this.todayIcon)).toBeDisplayed()
            await expect($(this.profileIcon)).toBeDisplayed()
            await expect($(this.rideIcon)).toBeDisplayed()
            await expect($(this.groupsIcon)).toBeDisplayed()
            await expect($(this.moreIcon)).toBeDisplayed()
        }
        else {
            await expect($(this.hdLogo)).toBeDisplayed()
            await expect($(this.todayTab)).toBeDisplayed()
            await expect($(this.todayIcon)).toBeDisplayed()
            await expect($(this.profileTab)).toBeDisplayed()
            await expect($(this.profileIcon)).toBeDisplayed()
            await expect($(this.rideTab)).toBeDisplayed()
            await expect($(this.rideIcon)).toBeDisplayed()
            if (!'India' || !process.env.ISRRAEL === region) {
                await expect($(this.groupsTab)).toBeDisplayed()
            }
            await expect($(this.moreTab)).toBeDisplayed()
        }
    }

    async loadingProcess() {
        if (await $(this.shakeEngineIcon).isDisplayed() === true) {
            await this.waitForNonDisplay(this.shakeEngineIcon)
        }
    }

    async tapOnTodayTab() {
        await this.tapElement(this.todayIcon)
    }

    async tapOnProfileTab() {
        await this.tapElement(this.profileIcon)
    }

    async tapOnRidesTab() {
        await this.tapElement(this.rideIcon)
    }

    async tapOnChallengesTab() {
        await this.tapElement(this.groupsIcon)
    }

    async tapOnMoreTab() {
        await this.tapElement(this.moreIcon)
    }

    async tapOnInbox() {
        await this.tapElement(this.inboxIcon)
    }

    async nativeBack() {
        await driver.pause(500)
        await driver.back()
    }
}

export default new CorePage()
