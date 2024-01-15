import StartApplicationPage from '../page/StartApplicationPage'
import PreferencesPage from '../page/PreferencesPage'
import RegionModal from '../page/ModalsPage/RegionModal'
import LocationPage from '../page/LocationPage'
import TermsAndConditionsPage from '../page/TermsAndConditionsPage'
import LoginPage from '../page/Profile/LoginPage'
import CorePage from '../page/CorePage'
import { CREDENTIALS } from '../data/LoginData'
import MyProfilePage from '../page/Profile/MyProfilePage'
import SelectABikeModal from '../page/ModalsPage/SelectABikeModal'
import RidesPage from '../page/RidesPage'
import ChallengesPage from '../page/Challenges/ChallengesPage'
import ChallengesModal from '../page/ModalsPage/Challenges/ChallengesModal'
import MeasurementsModal from '../page/ModalsPage/MeasurementsModal'

describe('🧪✨ Test LaMotta Features', () => {

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

    it('TC01 Verify Simulate Ride Saved', async() => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await CorePage.tapOnChallengesTab()
        if (await $(ChallengesPage.checkInButton).isExisting() === false) {
            await ChallengesPage.tapOnActiveChallenge()
            await ChallengesModal.jointToChallenge()
        }
        await CorePage.tapOnProfileTab()
        await MyProfilePage.tapOnViewAllRides()
        await MyProfilePage.taponRideItButton()
        if (await $(SelectABikeModal.continueButton).isExisting() === true) {
            await SelectABikeModal.tapOnContinue()
        }
        await RidesPage.tapOnContinue()
        await RidesPage.simualteRide()
        await RidesPage.selectSpeed('3x')
        await RidesPage.tapOnStartSimulation()
        await driver.pause(10000)
    })
})
