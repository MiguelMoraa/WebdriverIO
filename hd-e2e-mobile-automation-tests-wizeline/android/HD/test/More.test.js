import CorePage from '../page/CorePage'
import LocationPage from '../page/LocationPage'
import PreferencesPage from '../page/PreferencesPage'
import StartApplicationPage from '../page/StartApplicationPage'
import TermsAndConditionsPage from '../page/TermsAndConditionsPage'
import MorePage from '../page/More/MorePage'
import FilterEventsModal from '../page/ModalsPage/FilterEventsModal'
import EventsModal from '../page/ModalsPage/More/EventsModal'
import LoginPage from '../page/Profile/LoginPage'
import { CREDENTIALS } from '../data/LoginData'
import FindADealerModal from '../page/ModalsPage/More/FindADealerModal'
import AboutModal from '../page/ModalsPage/More/AboutModal'
import MyProfilePage from '../page/Profile/MyProfilePage'
import SettingsModal from '../page/ModalsPage/Profile/SettingsModal'
import RegionModal from '../page/ModalsPage/RegionModal'
import SearchDealers from '../page/ModalsPage/More/SearchDealers'
import RidePage from '../page/RidesPage'
import { HEADERS } from '../data/ModalData'
import dotenv from 'dotenv'
import ModalActions from '../page/ModalsPage/ModalActions'
import SelectABikeModal from '../page/ModalsPage/SelectABikeModal'
import MeasurementsModal from '../page/ModalsPage/MeasurementsModal'
dotenv.config()

describe('🧪✨ Test More features', () => {

    before(async () => {
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
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
    })

    it('TC001 More Nav Tab | More Tab - Verify default state options', async () => {
        await MyProfilePage.tapOnSettings()
        await SettingsModal.tapOnRegionMenu()
        await RegionModal.selectRegion(RegionModal.regions[29])
        await RegionModal.confirmEnglishLanguage()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await CorePage.tapOnMoreTab()
        await MorePage.verifyMoreMenus()
        await CorePage.tapOnProfileTab()
        await MyProfilePage.tapOnSettings()
        await SettingsModal.tapOnRegionMenu()
        await RegionModal.selectRegion(RegionModal.regions[54])
        await RegionModal.confirmRegionChange()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await CorePage.tapOnMoreTab()
        await MorePage.verifyMoreMenus('United States')
    })

    it('TC002 More Nav Tab | More Tab - Verify go to. Motorcycles menu', async () => {
        await MorePage.tapOnMotorcyclesPage()
        await expect($(ModalActions.moreIcon)).toBeDisplayed()
        await expect($(ModalActions.shareIcon)).toBeDisplayed()
        await ModalActions.closeModalPage()
    })

    it('TC003 More Nav Tab | More Tab - Verify go to. Schedule a test ride menu', async () => {
        await MorePage.tapOnScheduleATestRidePage()
        await expect($(ModalActions.moreIcon)).toBeDisplayed()
        await expect($(ModalActions.shareIcon)).toBeDisplayed()
        await ModalActions.closeModalPage()
    })

    it('TC004 More Nav Tab | More Tab - Verify go to. Find a dealer menu', async () => {
        await CorePage.tapOnMoreTab()
        await MorePage.tapOnFindADealerPage()
        await expect($(FindADealerModal.findADealerHeader)).toHaveText(HEADERS.FIND_A_DEALER)
        await FindADealerModal.tapOnADealer()
        await ModalActions.goBackModalPage()
        await FindADealerModal.serachDealers()
        await SearchDealers.setLocation('Ottawa, ON, Canada')
        await FindADealerModal.tapOnADealer()
        await FindADealerModal.tapOnFavotieIcon()
        await FindADealerModal.tapOnFavotieIcon()
        await FindADealerModal.tapOnTakeMeThere()
        if (await $(SelectABikeModal.continueButton).isExisting() === true) {
            await SelectABikeModal.tapOnContinue()
        }
        await RidePage.verifiedRideScreen()
        await RidePage.tapOnBack()
        await ModalActions.goBackModalPage()
        await ModalActions.closeModalPage()
    })

    it('TC005 More Nav Tab | More Tab - Verify go to. Learn to ride menu', async () => {
        await MorePage.tapOnLearnToRidePage()
        await expect($(ModalActions.moreIcon)).toBeDisplayed()
        await expect($(ModalActions.shareIcon)).toBeDisplayed()
        await ModalActions.closeModalPage()
    })

    it('TC006 More Nav Tab | More Tab - Verify go to. Events menu', async () => {
        await MorePage.tapOnEventsPage()
        await EventsModal.tapOnFilter()
        await FilterEventsModal.setFilterRange()
        await expect($(EventsModal.titleEvent)).toBeDisplayed()
        await ModalActions.closeModalPage()
    })

    it('TC007 More Nav Tab | More Tab - Verify go to. Rent a bike menu', async () => {
        await MorePage.tapOnRentABikePage()
        await expect($(ModalActions.moreIcon)).toBeDisplayed()
        await expect($(ModalActions.shareIcon)).toBeDisplayed()
        await ModalActions.closeModalPage()
    })

    it('TC008 More Nav Tab | More Tab - Verify go to. Museum menu', async () => {
        await MorePage.tapOnMuseumPage()
        await expect($(ModalActions.moreIcon)).toBeDisplayed()
        await expect($(ModalActions.shareIcon)).toBeDisplayed()
        await ModalActions.closeModalPage()
    })

    it('TC009 More Nav Tab | More Tab - Verify go to. Online Store menu', async () => {
        await MorePage.tapOnOnlineStorePage()
        await expect($(ModalActions.moreIcon)).toBeDisplayed()
        await expect($(ModalActions.shareIcon)).toBeDisplayed()
        await ModalActions.closeModalPage()
    })

    it('TC010 More Nav Tab | More Tab - Verify go to. Parts and Accessories menu', async () => {
        await MorePage.tapOnPartsAndAccessoriesPage()
        await expect($(ModalActions.moreIcon)).toBeDisplayed()
        await expect($(ModalActions.shareIcon)).toBeDisplayed()
        await ModalActions.closeModalPage()
    })

    it('TC011 More Nav Tab | More Tab - Verify go to. App Feedback menu', async () => {
        await MorePage.tapOnAppFeedback()
        await CorePage.nativeBack()
    })

    it('TC012 More Nav Tab | More Tab - Verify go to. About menu', async () => {
        await MorePage.tapOnAboutPage()
        await expect($(AboutModal.aboutHeader)).toHaveText(HEADERS.ABOUT)
        await AboutModal.validateLinks()
    })
})
