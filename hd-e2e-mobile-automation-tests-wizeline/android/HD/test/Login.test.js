import StartApplicationPage from '../page/StartApplicationPage'
import PreferencesPage from '../page/PreferencesPage'
import LocationPage from '../page/LocationPage'
import TermsAndConditionsPage from '../page/TermsAndConditionsPage'
import CorePage from '../page/CorePage'
import LoginPage from '../page/Profile/LoginPage'
import CreateAccount from '../page/ModalsPage/Profile/CreateAccount'
import dotenv from 'dotenv'
import { CREDENTIALS, ERROR_MESSAGES } from '../data/LoginData'
import ModalActions from '../page/ModalsPage/ModalActions'
import MyProfilePage from '../page/Profile/MyProfilePage'
import SettingsModal from '../page/ModalsPage/Profile/SettingsModal'
import LanguageModal from '../page/ModalsPage/LanguageModal'
import RegionModal from '../page/ModalsPage/RegionModal'
import NavVoiceModal from '../page/ModalsPage/NavVoiceModal'
import MeasurementsModal from '../page/ModalsPage/MeasurementsModal'
import OfflineMapsModal from '../page/ModalsPage/OfflineMapsModal'
import ResetPasswordModal from '../page/ModalsPage/ResetPasswordModal'
dotenv.config()

describe('🧪✨ Test Login features', () => {

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
        await LoginPage.tapOnCreateAnAccount()
    })

    it('TC001 Login | Create Account - Verify all Acceptance Criteria for Password', async () => {
        await CreateAccount.fillEmailField()
        await CreateAccount.fillPasswordField(CREDENTIALS.INCORECT.PASSWORD[0])
        await CreateAccount.fillUserName()
        await CreateAccount.setBithDayYear()
        await CreateAccount.checkTermOfUse()
        await CreateAccount.tapOnCreateAccount()
        await expect($(CreateAccount.errorMessage)).toHaveText(ERROR_MESSAGES.PASSWORD[0])
        await CreateAccount.tapOnConfirmMessage()
        await CreateAccount.scrollTofillPassword()
        for (let i = 1 ; i < ERROR_MESSAGES.PASSWORD.length - 2 ; i++) {
            await CreateAccount.fillPasswordField(CREDENTIALS.INCORECT.PASSWORD[i])
            await CreateAccount.tapOnCreateAccount()
            await expect($(CreateAccount.errorMessage)).toHaveText(ERROR_MESSAGES.PASSWORD[i])
            await CreateAccount.tapOnConfirmMessage()
            await CreateAccount.scrollTofillPassword()
        }
        await CreateAccount.fillPasswordField(process.env.WIZELINE_PASSWORD, 'confirm')
        await CreateAccount.tapOnCreateAccount()
        await expect($(CreateAccount.errorMessage)).toHaveText(ERROR_MESSAGES.PASSWORD[6])
        await CreateAccount.tapOnConfirmMessage()
        await CreateAccount.scrollTofillPassword()
        await CreateAccount.fillPasswordField(process.env.WIZELINE_PASSWORD, 'match')
        await CreateAccount.tapOnCreateAccount()
        await expect($(CreateAccount.errorMessage)).toHaveText(ERROR_MESSAGES.PASSWORD[7])
        await CreateAccount.tapOnConfirmMessage()
        await ModalActions.closeModalPage()
    })

    it('TC002 Login | Create Account - Verify Birthday message', async () => {
        await LoginPage.tapOnCreateAnAccount()
        await CreateAccount.fillEmailField()
        await CreateAccount.fillPasswordField(process.env.WIZELINE_PASSWORD)
        await CreateAccount.fillUserName()
        await CreateAccount.checkTermOfUse()
        await CreateAccount.tapOnCreateAccount()
        await expect($(CreateAccount.errorMessage)).toHaveText(ERROR_MESSAGES.BIRTHDAY)
        await CreateAccount.tapOnConfirmMessage()
        await CreateAccount.fillFirstName('empty')
        await CreateAccount.fillLastName()
        await CreateAccount.setBithDayYear()
        await CreateAccount.tapOnCreateAccount()
        await expect($(CreateAccount.errorMessage)).toHaveText(ERROR_MESSAGES.NAMES.FIRST_NAME)
        await CreateAccount.tapOnConfirmMessage()
        await CreateAccount.fillFirstName()
        await CreateAccount.fillLastName('empty')
        await CreateAccount.tapOnCreateAccount()
        await expect($(CreateAccount.errorMessage)).toHaveText(ERROR_MESSAGES.NAMES.LAST_NAME)
        await CreateAccount.tapOnConfirmMessage()
        await ModalActions.closeModalPage()
    })

    it('TC003 Login | Settings - Verify change Language', async () => {
        await MyProfilePage.tapOnSettings()
        await SettingsModal.tapOnLanguageMenu()
        await expect($(LanguageModal.languageHeader)).toBeDisplayed()
        await ModalActions.goBackModalPage()
        await SettingsModal.tapOnRegionMenu()
        await expect($(RegionModal.regionHeader)).toBeDisplayed()
        await ModalActions.goBackModalPage()
        await PreferencesPage.tapOnMeasurementsMenu()
        await expect($(MeasurementsModal.measurementHeader)).toBeDisplayed()
        await ModalActions.goBackModalPage()
        await SettingsModal.tapOnNavVoiceMenu()
        await expect($(NavVoiceModal.NavVoiceHeader)).toBeDisplayed()
        await ModalActions.goBackModalPage()
        await SettingsModal.tapOnOfflineMapsMenu()
        await expect($(OfflineMapsModal.offlineMapsHeader)).toBeDisplayed()
        await ModalActions.goBackModalPage()
        await ModalActions.closeModalPage()
    })

    it('TC004 Login | Verify Forgot Password CTA', async () => {
        await LoginPage.tapOnForgotPassword()
        await ResetPasswordModal.fillEmailAdress(process.env.WIZELINE_PASSWORD)
        await ResetPasswordModal.tapOnResetPassword()
        await expect($(ResetPasswordModal.invalidEmailMessage)).toHaveText(ERROR_MESSAGES.RESET_PSSWD)
        await ResetPasswordModal.fillEmailAdress(process.env.WIZELINE_EMAIL)
        await ResetPasswordModal.tapOnResetPassword()
        await expect($(ResetPasswordModal.popupMessage)).toBeDisplayed()
        await ModalActions.closeModalPage()
    })

})
