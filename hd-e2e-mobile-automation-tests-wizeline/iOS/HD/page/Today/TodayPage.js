import Actions from '../../../API/Actions'
import ModalActions from '../ModalsPage/ModalActions'

class TodayPage extends Actions {
    constructor() {
        super()
    }

    get homecomingImage() { return 'id=image' }
    get checkInButton() { return 'id=checkin' }
    get weatherHeader() { return 'id=weatherHeader' }
    get weatherDetails() { return 'id=weatherAddress' }
    get primaryBikeText() { return 'id=primaryBike' }
    get bikeName() { return 'id=name' }
    get detailsButton() { return 'id=detailsButton' }
    get kilometersUnit() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/viewRideTimeDistance_distance").textContains("KM")' }
    get milesUnit() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/viewRideTimeDistance_distance").textContains("MI")' }
    get degreesUnit() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/temperature").textContains("°")' }
    get carrouselBikeArrow() { return 'id=arrow' }
    get todaySignIn() { return 'id=bikesEmptyButton' }
    get viewAllBikes() { return 'id=viewAllBikes' }
    get challengeDots() { return 'id=homeChallengesDots' }
    get activeChallenge() { return 'id=backgroundImage' }
    get upcommingChallenge() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/challenge_name").instance(1)' }
    get viewAllChallenges() { return 'id=view_all_challenges' }
    get events() { return ['android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/eventTitle").instance(0)',
        'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/eventTitle").instance(1)',
        'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/eventTitle").instance(2)']}
    get viewAllSavedEvents() { return 'id=view_all_events_button' }
    get findMoreRecommendedRides() {return 'id=view_all_rides' }
    get detailsRecommendedRideButton() { return 'id=detailsButton' }
    get viewAllUpcomingEvents() { return 'id=seeAll' }
    get bookmarkIcon() { return ['android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/eventFavoriteIcon").instance(0)',
        'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/eventFavoriteIcon").instance(1)',
        'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/eventFavoriteIcon").instance(2)'] }
    get viewEventDetailsButton() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/ctaButton").instance(0)' }
    get featuredEventsHeader() { return '//*[@text="FEATURED EVENTS"]' }
    get featuredEventsCarrouseldots() { return 'id=carouselPageIndicator' }
    get viewAllfeaturedEvents() { return 'id=viewAllButton' }
    get noEventsLegend() { return 'id=statusMessage' }

    async verifyUpcomingChallengeImage(region) {
        if ( 'Mexico' || 'United States' || 'United Kingdom' === region) {
            await expect($(this.homecomingImage)).toBeDisplayed()
        }
        else {
            await expect($(this.homecomingImage)).not.toBeDisplayed()
        }
    }

    async scrollToWeatherForecast() {
        await this.swipeDownToElement(this.weatherHeader)
    }

    async tapOnWeatherArrow() {
        await this.swipeDownToElementAndTap(this.weatherDetails)
    }

    async swipeToRecommendedRides() {
        await this.swipeDownToElement(this.detailsButton)
    }

    async swipeToBikeCarrousel() {
        await this.swipeDownToElement(this.carrouselBikeArrow)
    }

    async tapOnSignIn() {
        await browser.pause(3000)
        await this.swipeDownToElementAndTap(this.todaySignIn)
    }

    async tapOnBikeCarrousel() {
        await this.swipeDownToElementAndTap(this.carrouselBikeArrow)
    }

    async swipeBikeCarrousel() {
        const bikeArrowLocation = await this.getElementLocation(this.carrouselBikeArrow)
        await this.swipeScreen(bikeArrowLocation.x, bikeArrowLocation.y, 0, bikeArrowLocation.y)
    }

    async tapViewAllBikes() {
        await this.swipeDownToElementAndTap(this.viewAllBikes)
    }

    async scrollToChallenge() {
        await this.swipeDownToElement(this.activeChallenge)
    }

    async tapOnChallenge() {
        await this.swipeDownToElementAndTap(this.activeChallenge)
    }

    async tapOnUpcommingChallenge() {
        await this.tapElement(this.upcommingChallenge)
    }

    async swipeChallengeCarrousel() {
        const challengeNameLocation = await this.getElementLocation(this.activeChallengeName)
        await this.swipeScreen(challengeNameLocation.x, challengeNameLocation.y, 0, challengeNameLocation.y)
    }

    async tapViewAllChalenges() {
        await this.swipeDownToElementAndTap(this.viewAllChallenges)
    }

    async scrollToMySavedEvents() {
        await this.swipeUpToElement(this.savedEvents[0])
    }

    async tapOnBookmark() {
        await this.tapElement(this.bookmarkIcon[0])
    }

    async tapViewAllSavedEvents() {
        await this.swipeUpToElementAndTap(this.viewAllSavedEvents)
    }

    async scrollToViewAllSavedEvents() {
        await this.swipeUpToElement(this.viewAllSavedEvents)
    }

    async tapFindMoreRecommendedRides() {
        await this.swipeDownToElementAndTap(this.findMoreRecommendedRides)
    }

    async tapRecommendedRidesDetails() {
        await this.swipeDownToElementAndTap(this.detailsRecommendedRideButton)
    }

    async scrollToViewAllUpcomingEvents() {
        await this.swipeDownToElement(this.viewAllUpcomingEvents)
    }

    async tapOnEvent(i) {
        await this.swipeDownToElementAndTap(this.events[i])
    }

    async tapOnViewAllUpcomingEvents() {
        await this.swipeDownToElementAndTap(this.viewAllUpcomingEvents)
    }

    async tapOnUpComingEventsBookmarks() {
        await this.scrollToViewAllUpcomingEvents()
        for (let i = 0 ; i < this.bookmarkIcon.length ; i++ ) {
            await this.swipeDownToElement(this.bookmarkIcon[i])
            await this.tapOnEvent(i)
            await ModalActions.closeModalPage()
            await this.tapElement(this.bookmarkIcon[i])
        }
    }

    async tapOnViewEventDetails() {
        await this.tapElement(this.viewEventDetailsButton)
    }

    async scrollDownToFeaturedEvents() {
        await this.swipeDownToElement(this.viewAllfeaturedEvents)
    }
}

export default new TodayPage()
