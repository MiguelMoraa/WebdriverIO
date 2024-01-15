import StartApplicationPage from '../page/StartApplicationPage'
import RegionModal from '../page/ModalsPage/RegionModal'
import PreferencesPage from '../page/PreferencesPage'
import LocationPage from '../page/LocationPage'
import TermsAndConditionsPage from '../page/TermsAndConditionsPage'
import CorePage from '../page/CorePage'
import LoginPage from '../page/Profile/LoginPage'
import { CREDENTIALS } from '../data/LoginData'
import TodayPage from '../page/Today/TodayPage'
import BikeInfoModal from '../page/ModalsPage/Profile/BikeInfoModal'
import MyProfilePage from '../page/Profile/MyProfilePage'
import MyBikesPage from '../page/Profile/MyBikesPage'
import MyDealerPage from '../page/Profile/MyDealerPage'
import ChallengesModal from '../page/ModalsPage/Challenges/ChallengesModal'
import ChallengesPage from '../page/Challenges/ChallengesPage'
import MyEventsModal from '../page/ModalsPage/Profile/MyEventsModal'
import RidePage from '../page/Ride/RidePage'
import RouteModal from '../page/ModalsPage/RouteModal'
import { HEADERS } from '../data/ModalData'
import InboxModal from '../page/ModalsPage/InboxModal'
import dotenv from 'dotenv'
import ModalActions from '../page/ModalsPage/ModalActions'
import CreateAccount from '../page/ModalsPage/Profile/CreateAccount'
import MeasurementsModal from '../page/ModalsPage/MeasurementsModal'
dotenv.config()

describe('🧪✨ Test Today Nav Tab features | My Bikes Carrousel', () => {

    before(async () => {
        await driver.reset()
        await StartApplicationPage.allowBTPermissions()
        await StartApplicationPage.tapGetStarted()
        const REGION = await PreferencesPage.getRegion()
        if (REGION !== 'Canada') {
            await PreferencesPage.tapOnRegionMenu()
            await RegionModal.selectRegion(RegionModal.regions[6])
            await PreferencesPage.tapOnContinue()
            await PreferencesPage.tapOnConfirmChanges()
            await StartApplicationPage.tapGetStarted()
        }
        const MEASUREMENTS = await PreferencesPage.getMeasures()
        if (MEASUREMENTS !== 'Fahrenheit, Imperial') {
            await PreferencesPage.tapOnMeasurementsMenu()
            await MeasurementsModal.selectMeasurements('Fahrenheit', 'MI')
            await ModalActions.goBackModalPage()
        }
        await PreferencesPage.tapOnContinue()
        await LocationPage.tapOnAllow()
        await LocationPage.tapOnWhileIsUsingTheApp()
        await LocationPage.tapDenyHEREPermissions()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await TodayPage.tapOnSignIn()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
    })

    it('TC001 Today Nav Tab | Bikes Carrousel - Verify Bikes Carousel (Tap in each one)', async () => {
        await CorePage.tapOnInbox()
        await expect($(InboxModal.inboxHeader)).toHaveText(HEADERS.INBOX)
        await ModalActions.closeModalPage()
        await TodayPage.tapOnBikeCarrousel()
        for (let i = 0 ; i < 2 ; i++) {
            await ModalActions.goBackModalPage()
            await TodayPage.swipeBikeCarrousel()
            await TodayPage.tapOnBikeCarrousel()
            await expect($(BikeInfoModal.bikeName)).toBeDisplayed()
        }
        await ModalActions.goBackModalPage()
    })

    it('TC002 Today Nav Tab | Bikes Carrousel - Verify Bikes View All CTA', async () => {
        await TodayPage.tapViewAllBikes()
        await expect($(MyProfilePage.myProfileTab)).toBeDisplayed()
        await expect($(MyBikesPage.myBikesTab)).toBeDisplayed()
        await expect($(MyDealerPage.myDealerTab)).toBeDisplayed()
        await expect($(MyBikesPage.panamericaBike)).toBeDisplayed()
    })

    it('TC003 Today Nav Tab | Challenges Section - Verify Challenges Carrousel (Tap on each one)', async () => {
        await CorePage.tapOnTodayTab()
        await TodayPage.scrollToWeatherForecast()
        await TodayPage.tapOnWeatherArrow()
        await expect($(RouteModal.moreIcon)).toBeDisplayed()
        await CorePage.nativeBack()
        await TodayPage.tapOnChallenge()
        await expect($(ChallengesModal.joinToChallengeButton))
        await ModalActions.closeModalPage()
        /*if (await $(TodayPage.challengeDots).isExisting() === true) {
            await TodayPage.swipeChallengeCarrousel()
            await TodayPage.tapOnUpcommingChallenge()
            await expect($(ChallengesModal.joinToChallengeButton))
            await ModalActions.closeModalPage()
        }*/
    })

    it('TC004 Today Nav Tab | Challenges Section - Verify Challenges View All CTA', async () => {
        await TodayPage.tapViewAllChalenges()
        await expect($(ChallengesPage.activeChallenge)).toBeDisplayed()
        await expect($(ChallengesPage.viewPastChallengesLink)).toBeDisplayed()
    })
})

describe('🧪✨ Test Today Nav Tab features | My Saved Events Section', () => {

    before(async () => {
        await driver.reset()
        await driver.setGeoLocation({ latitude: process.env.LATITUDE, longitude: process.env.LONGITUDE, altitude: process.env.ALTITUDE })
        await StartApplicationPage.allowBTPermissions()
        await StartApplicationPage.tapGetStarted()
        const REGION = await PreferencesPage.getRegion()
        if (REGION !== 'Canada') {
            await PreferencesPage.tapOnRegionMenu()
            await RegionModal.selectRegion(RegionModal.regions[6])
            await PreferencesPage.tapOnContinue()
            await PreferencesPage.tapOnConfirmChanges()
            await StartApplicationPage.tapGetStarted()
        }
        const MEASUREMENTS = await PreferencesPage.getMeasures()
        if (MEASUREMENTS !== 'Fahrenheit, Imperial') {
            await PreferencesPage.tapOnMeasurementsMenu()
            await MeasurementsModal.selectMeasurements('Fahrenheit', 'MI')
            await ModalActions.goBackModalPage()
        }
        await PreferencesPage.tapOnContinue()
        await LocationPage.tapOnAllow()
        await LocationPage.tapOnWhileIsUsingTheApp()
        await LocationPage.tapDenyHEREPermissions()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await CorePage.tapOnProfileTab()
        await LoginPage.tapOnCreateAnAccount()
        await CreateAccount.createANewAccount()
        await CorePage.tapOnTodayTab()
        await TodayPage.tapOnUpComingEventsBookmarks()
    })

    it('TC005 Today Nav Tab | My Saved Events Section - Verify Saved Events show in the Events Section (Tap on each one)', async () => {
        await TodayPage.scrollToViewAllSavedEvents()
        for (let i = 0 ; i < TodayPage.events.length ; i++) {
            await TodayPage.tapOnEvent(i)
            await ModalActions.closeModalPage()
        }
    })

    it('TC006 Today Nav Tab | My Saved Events Section - Verify View All Events CTA', async () => {
        await TodayPage.tapViewAllSavedEvents()
        await expect($(MyEventsModal.myEventsHeader)).toBeDisplayed()
        await ModalActions.closeModalPage()
    })

    it('TC007 Today Nav Tab | My Saved Events Section - Verify Bookmark Icon', async () => {
        await TodayPage.tapOnBookmark()
        await expect($(TodayPage.events[0])).toBeDisplayed()
        await expect($(TodayPage.events[1])).toBeDisplayed()
        await expect($(TodayPage.events[2])).not.toBeDisplayed()
        await TodayPage.scrollToViewAllUpcomingEvents()
        await TodayPage.tapOnBookmark()
        await TodayPage.scrollToViewAllSavedEvents()
        await expect($(TodayPage.events[0])).toBeDisplayed()
        await expect($(TodayPage.events[1])).toBeDisplayed()
        await expect($(TodayPage.events[2])).toBeDisplayed()
    })

    it('TC008 Today Nav Tab | Recommended Rides Section - Verify Find More HD Recommended Rides CTA', async () => {
        await CorePage.tapOnTodayTab()
        await TodayPage.tapFindMoreRecommendedRides()
        await expect($(RidePage.whereToField)).toBeDisplayed()
    })

    it('TC009 Today Nav Tab | Recommended Rides Section - Verify Route Details', async () => {
        await CorePage.tapOnTodayTab()
        await TodayPage.tapRecommendedRidesDetails()
        await RouteModal.tapRouteDetails()
        await RouteModal.swipeUpToElement(RouteModal.routeWaitpoints)
        await expect($(RouteModal.routeWaitpoints)).toBeDisplayed()
        await ModalActions.closeModalPage()
    })

    it('TC010 Today Nav Tab | Recommended Rides Section - Verify Share Icon', async () => {
        await CorePage.tapOnTodayTab()
        await TodayPage.tapRecommendedRidesDetails()
        await RouteModal.tapOnShareIcon()
        await CorePage.nativeBack()
        await ModalActions.closeModalPage()
    })

    it('TC011 Today Nav Tab | Recommended Rides Section - Verify Bookmark Icon', async () => {
        await CorePage.tapOnTodayTab()
        await TodayPage.tapRecommendedRidesDetails()
        const RIDE_NAME = await RouteModal.getRideName()
        await RouteModal.tapOnBookmarkIcon()
        await ModalActions.closeModalPage()
        await CorePage.tapOnProfileTab()
        await expect($(RouteModal.myRideCardName)).toHaveText(RIDE_NAME)
        await CorePage.tapOnTodayTab()
        await TodayPage.tapRecommendedRidesDetails()
        await RouteModal.tapOnBookmarkIcon()
        await RouteModal.tapOnOkUnsave()
        await ModalActions.closeModalPage()
        await CorePage.tapOnProfileTab()
        await expect($(RouteModal.myRideCardName)).not.toBeDisplayed()
    })

    it('TC012 Today Nav Tab | Recommended Rides Section - Verify Weather forecast', async () => {
        await CorePage.tapOnTodayTab()
        await TodayPage.tapRecommendedRidesDetails()
        await RouteModal.tapOnCurrentWeather()
        await expect($(RouteModal.moreIcon)).toBeDisplayed()
        await CorePage.nativeBack()
        await ModalActions.closeModalPage()
    })

    after(async () => {
        await CorePage.tapOnProfileTab()
        await MyProfilePage.tapOnEditProfile()
        await MyProfilePage.tapOnDeleteAccount()
    })
})
