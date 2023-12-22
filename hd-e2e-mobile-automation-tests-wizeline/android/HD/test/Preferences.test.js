import StartApplicationPage from '../page/StartApplicationPage'
import PreferencesPage from '../page/PreferencesPage'
import CorePage from '../page/CorePage'
import LocationPage from '../page/LocationPage'
import TermsAndConditionsPage from '../page/TermsAndConditionsPage'
import LoginPage from '../page/Profile/LoginPage'
import { CREDENTIALS } from '../data/LoginData'
import MyProfilePage from '../page/Profile/MyProfilePage'
import SettingsModal from '../page/ModalsPage/Profile/SettingsModal'
import MeasurementsModal from '../page/ModalsPage/Profile/MeasurementsModal'
import { ENCABEZADO } from '../data/ModalData'
import dotenv from 'dotenv'
import LanguageModal from '../page/ModalsPage/LanguageModal'
import RegionModal from '../page/ModalsPage/RegionModal'
dotenv.config()

describe('🧪✨ Test Preferences Features', () => {

    before(async () => {
        await driver.setGeoLocation({ latitude: process.env.LATITUDE, longitude: process.env.LONGITUDE, altitude: process.env.ALTITUDE })
    })

    beforeEach(async () => {
        await driver.reset()
        await StartApplicationPage.allowBTPermissions()
        await StartApplicationPage.tapGetStarted()
    })

    it('TC001 Onboarding-Select Your Language And Region screen- Region - New country', async () => {
        await PreferencesPage.tapOnLanguageMenu()
        await LanguageModal.selectLanguage(LanguageModal.language[0])
        await PreferencesPage.tapOnRegionMenu()
        await RegionModal.selectRegion(RegionModal.regions[29])
        await PreferencesPage.tapOnContinue()
        await PreferencesPage.tapOnConfirmChanges()
        await StartApplicationPage.tapGetStarted()
        await PreferencesPage.tapOnContinue()
        await LocationPage.tapOnAllow()
        await LocationPage.tapOnWhileIsUsingTheApp()
        await LocationPage.tapDenyHEREPermissions()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await expect($(MyProfilePage.miPerfilTab)).toBeDisplayed()
        await MyProfilePage.tapOnSettings('Spanish')
        await SettingsModal.tapOnMeasurementsMenu()
        await expect($(MeasurementsModal.measurementHeader)).toHaveText(ENCABEZADO.DIMENSIONES)
        await expect($(MeasurementsModal.celsiusOptionChecked)).toBeDisplayed()
    })
})
