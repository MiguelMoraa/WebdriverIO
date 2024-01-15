import StartApplicationPage from '../page/StartApplicationPage'
import PreferencesPage from '../page/PreferencesPage'
import RegionModal from '../page/ModalsPage/RegionModal'
import LocationPage from '../page/LocationPage'
import TermsAndConditionsPage from '../page/TermsAndConditionsPage'
import CorePage from '../page/CorePage'
import LoginPage from '../page/Profile/LoginPage'
import { CREDENTIALS } from '../data/LoginData'
import MyProfilePage from '../page/Profile/MyProfilePage'
import EventsModal from '../page/ModalsPage/More/EventsModal'
import RidePage from '../page/Ride/RidePage'
import FilterEventsModal from '../page/ModalsPage/FilterEventsModal'
import RidesPage from '../page/RidesPage'
import ModalActions from '../page/ModalsPage/ModalActions'
import MyRidesModal from '../page/ModalsPage/Profile/MyRidesModal'
import RouteModal from '../page/ModalsPage/RouteModal'
import SelectABikeModal from '../page/ModalsPage/SelectABikeModal'
import WhereToPage from '../page/Ride/WhereToPage'
import PoiModal from '../page/ModalsPage/Ride/PoiModal'
import MapPage from '../page/MapPage'
import POIsPage from '../page/POIsPage'
import EditRidePage from '../page/EditRidePage'
import { HEADERS } from '../data/ModalData'
import MorePage from '../page/More/MorePage'
import MeasurementsModal from '../page/ModalsPage/MeasurementsModal'
import dotenv from 'dotenv'
dotenv.config()

describe('🧪✨ Test Rides features', () => {

    before(async () => {
        await driver.setGeoLocation({ latitude: process.env.LATITUDE, longitude: process.env.LONGITUDE, altitude: process.env.ALTITUDE })
    })

    beforeEach(async () => {
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
    })

    it('TC001 H-D Groups: Events tab', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await CorePage.tapOnMoreTab()
        await MorePage.tapOnEventsPage()
        await driver.pause(5000)
        await EventsModal.tapOnFilter()
        await FilterEventsModal.setFilterRange()
        await EventsModal.enterToFirstEvent()
        await EventsModal.tapOnGetDirections()
        if (await $(SelectABikeModal.continueButton).isExisting() === true) {
            await SelectABikeModal.tapOnContinue()
        }
        await RidesPage.verifiedRideScreen()
    })

    it('TC002 Convert secondary pages to modals-Ride tab-List view', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await CorePage.tapOnRidesTab()
        await RidePage.tapOnFilter()
        await ModalActions.closeModalPage()
    })

    it('TC003 Convert secondary pages to modal - Ride details', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await MyProfilePage.tapOnViewAllRides()
        await RouteModal.tapOnRideITButton()
        if (await $(SelectABikeModal.continueButton).isExisting() === true) {
            await SelectABikeModal.tapOnContinue()
        }
        await RidesPage.tapOnContinue()
        await RidesPage.verifiedRideScreen()
    })

    it('TC004 Non-Dealer Charge Station Map Info View', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await CorePage.tapOnRidesTab()
        await RidePage.tapOnWhereToField()
        await WhereToPage.tapOnMorePOIs()
        await WhereToPage.tapOnPOI('Gas Stations')
        await PoiModal.selectFirstPOI()
        expect($(MapPage.POICard)).toBeDisplayed

    })

    it('TC005 Charge Station Detail View', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await CorePage.tapOnRidesTab()
        await RidePage.tapOnWhereToField()
        await WhereToPage.tapOnMorePOIs()
        await WhereToPage.tapOnPOI('Charge Stations')
        await PoiModal.selectFirstPOI()
        await MapPage.tapOnDetailsButton()
        await POIsPage.verifyChargeStationData()
    })

    it('TC006 Edit Ride Screen-Rearrange the maneuver list', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await MyProfilePage.tapOnViewAllRides()
        await MyRidesModal.tapOnRideDetails()
        await RouteModal.tapOnEditButton()
        await EditRidePage.tapOnContinue()
    })

    it('TC007 My Rides', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await MyProfilePage.tapOnViewAllRides()
        await expect($(MyRidesModal.myRidesHeader)).toHaveText(HEADERS.MY_RIDES)
        await MyRidesModal.verifyTabs()
    })

    it('TC008 My Rides - Recorded Ride Card', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await MyProfilePage.tapOnViewAllRides()
        await MyRidesModal.tapOnRecordedTab()
        await MyRidesModal.tapOnSortBy()
        await MyRidesModal.tapOnCancelSort()
        await MyRidesModal.tapOnFavoritIcon()
        await MyRidesModal.tapOnRideDetails()
        await RouteModal.verifyRecordedRide()
    })

    it('TC009 Profile > My Rides', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await MyProfilePage.tapOnViewAllRides()
        await expect($(MyRidesModal.myRidesHeader)).toHaveText(HEADERS.MY_RIDES)
    })
})
