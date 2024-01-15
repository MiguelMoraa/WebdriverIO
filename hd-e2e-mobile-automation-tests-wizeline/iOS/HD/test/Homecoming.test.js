import StartApplicationPage from '../page/StartApplicationPage'
import PreferencesPage from '../page/PreferencesPage'
import RegionModal from '../page/ModalsPage/RegionModal'
import LocationPage from '../page/LocationPage'
import TermsAndConditionsPage from '../page/TermsAndConditionsPage'
import LoginPage from '../page/Profile/LoginPage'
import { CREDENTIALS } from '../data/LoginData'
import dotenv from 'dotenv'
import TodayPage from '../page/Today/TodayPage'
import HomecomingModal from '../page/ModalsPage/HomecomingModal'
import ModalActions from '../page/ModalsPage/ModalActions'
import MeasurementsModal from '../page/ModalsPage/MeasurementsModal'
dotenv.config()

describe.skip('🧪✨ Test Homecoming Section | Homecoming features', () => {

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
        await TodayPage.tapOnViewEventDetails()
    })

    it('TC001 Homecoming | Verify Interested Button in Events Details', async () => {
        await HomecomingModal.tapOnInterested()
        await ModalActions.tapOkProfileRequired()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await HomecomingModal.tapOnInterested()
        await HomecomingModal.tapOnCloseInterestedModal()
        await HomecomingModal.tapOnInterested()
        await HomecomingModal.tapOnInterested()
        await expect($(HomecomingModal.closeInterestedModal)).not.toBeDisplayed()
        await HomecomingModal.tapOnInterested()
    })

    it('TC002 Homecoming | Verify Buy Tickets Button', async () => {
        await HomecomingModal.tapOnBuyTickets()
        expect($(ModalActions.shareIcon)).toBeDisplayed()
        expect($(ModalActions.moreIcon)).toBeDisplayed()
        await ModalActions.goBackModalPage()
    })

})
