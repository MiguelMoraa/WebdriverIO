import dotenv from 'dotenv'
import { GET_STARTED } from '../data/GetStartedData'
import CorePage from '../page/CorePage'
import LocationPage from '../page/LocationPage'
import PreferencesPage from '../page/PreferencesPage'
import StartApplicationPage from '../page/StartApplicationPage'
import TermsAndConditionsPage from '../page/TermsAndConditionsPage'
import RegionModal from '../page/ModalsPage/RegionModal'
import LanguageModal from '../page/ModalsPage/LanguageModal'
import TodayPage from '../page/Today/TodayPage'
import MorePage from '../page/More/MorePage'
import AboutModal from '../page/ModalsPage/More/AboutModal'
import LoginPage from '../page/Profile/LoginPage'
import { CREDENTIALS } from '../data/LoginData'
import MyProfilePage from '../page/Profile/MyProfilePage'
import ModalActions from '../page/ModalsPage/ModalActions'
import MeasurementsModal from '../page/ModalsPage/MeasurementsModal'
dotenv.config()

describe('🧪✨ Test Onboarding features | Preferences', () => {

    beforeEach(async () => {
        await driver.reset()
        await StartApplicationPage.allowBTPermissions()
        await StartApplicationPage.tapGetStarted()
    })

    it('TC001 Onboarding | Preferences Screen - Verify App Translated', async () => {
        for (let i = 0 ; i < LanguageModal.languages.length ; i++) {
            await PreferencesPage.tapOnLanguageMenu()
            await LanguageModal.selectLanguage(LanguageModal.languages[i])
            await PreferencesPage.tapOnContinue()
            await PreferencesPage.tapOnConfirmChanges()
            await expect($(StartApplicationPage.bntGetStarted)).toHaveText(GET_STARTED[i])
            await StartApplicationPage.tapGetStarted()
        }
    })

    it('TC002 Onboarding | Preferences Screen - Verify App Region', async () => {
        for (let i = 0 ; i < RegionModal.regions.length ; i++) {
            await PreferencesPage.tapOnRegionMenu()
            await RegionModal.selectRegion(RegionModal.regions[i])
            await PreferencesPage.tapOnContinue()
            await PreferencesPage.tapOnConfirmChanges()
            await StartApplicationPage.tapGetStarted()
            await expect($(RegionModal.regions[i])).toBeDisplayed()
        }
    })

    it('TC003 Onboarding | Preferences Screen - Verify App Measurements', async () => {
        await PreferencesPage.tapOnContinue()
        await LocationPage.tapOnAllow()
        await LocationPage.tapOnWhileIsUsingTheApp()
        await LocationPage.tapAllowHEREPermissions()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await TodayPage.scrollToWeatherForecast()
        await expect($(TodayPage.degreesUnit)).toBeDisplayed()
        await TodayPage.swipeToRecommendedRides()
        await expect($(TodayPage.milesUnit)).toBeDisplayed()
        await driver.reset()
        await StartApplicationPage.allowBTPermissions()
        await StartApplicationPage.tapGetStarted()
        await PreferencesPage.tapOnMeasurementsMenu()
        await MeasurementsModal.selectMeasurements('Celsius', 'KM')
        await ModalActions.goBackModalPage()
        await PreferencesPage.tapOnContinue()
        await LocationPage.tapOnAllow()
        await LocationPage.tapOnWhileIsUsingTheApp()
        await LocationPage.tapAllowHEREPermissions()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await TodayPage.scrollToWeatherForecast()
        await expect($(TodayPage.degreesUnit)).toBeDisplayed()
        await TodayPage.swipeToRecommendedRides()
        await expect($(TodayPage.kilometersUnit)).toBeDisplayed()
    })
})

describe('🧪✨ Test Onboarding features | Location', () => {

    before(async () => {
        await driver.setGeoLocation({ latitude: process.env.LATITUDE, longitude: process.env.LONGITUDE, altitude: process.env.ALTITUDE })
    })

    beforeEach(async () => {
        await driver.reset()
        await StartApplicationPage.allowBTPermissions()
        await StartApplicationPage.tapGetStarted()
        await PreferencesPage.tapOnContinue()
    })

    it('TC004 Onboarding | Location Screen - Verify Allow Location', async () => {
        await LocationPage.tapOnAllow()
        await LocationPage.tapOnWhileIsUsingTheApp()
        await LocationPage.tapAllowHEREPermissions()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await expect($(MyProfilePage.cityUser)).toHaveText('Toronto, Ontario')
    })

    it('TC005 Onboarding | Location Screen - Verify Skip Location', async () => {
        await LocationPage.tapOnSkip()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await LocationPage.tapOnWhileIsUsingTheApp()
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await expect($(MyProfilePage.cityUser)).toHaveText('Toronto, Ontario')
    })
})

describe('🧪✨ Test Onboarding features | HERE', () => {

    beforeEach(async () => {
        await driver.reset()
        await StartApplicationPage.allowBTPermissions()
        await StartApplicationPage.tapGetStarted()
        await PreferencesPage.tapOnContinue()
        await LocationPage.tapOnAllow()
        await LocationPage.tapOnWhileIsUsingTheApp()
    })

    it('TC006 Onboarding | HERE Screen - Verify Allow Button (Data sharing Permissions)', async () => {
        await LocationPage.tapAllowHEREPermissions()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await CorePage.tapOnMoreTab()
        await MorePage.tapOnAboutPage()
        await expect($(AboutModal.hereSharingStatus)).toHaveText('Accepted')
    })

    it('TC007 Onboarding | HERE Screen - Verify Allow Button (Data sharing Permissions)', async () => {
        await LocationPage.tapDenyHEREPermissions()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await CorePage.tapOnMoreTab()
        await MorePage.tapOnAboutPage()
        await expect($(AboutModal.hereSharingStatus)).toHaveText('Denied')
    })

    it('TC008 Onboarding | HERE Screen - Verify Privacy Practices Link', async () => {
        await LocationPage.tapOnPrivacyCta()
        await expect($(LocationPage.hereURL)).toBeDisplayed()
    })
})

describe('🧪✨ Test Onboarding features | Terms and Conditions', () => {

    beforeEach(async () => {
        await driver.reset()
        await StartApplicationPage.allowBTPermissions()
        await StartApplicationPage.tapGetStarted()
        await PreferencesPage.tapOnContinue()
        await LocationPage.tapOnAllow()
        await LocationPage.tapOnWhileIsUsingTheApp()
        await LocationPage.tapAllowHEREPermissions()
    })

    it('TC009 Onboarding | Terms and Conditions - Verify Back Button', async() => {
        await TermsAndConditionsPage.tapOnBackArrow()
        await expect($(AboutModal.hereLogo)).toBeDisplayed()
    })

    it('TC010 Onboarding | Terms and Conditions - Verify Continue Button with not checkbox', async () => {
        await TermsAndConditionsPage.tapOnContinueButton()
        await expect($(TermsAndConditionsPage.agreementCheckBox)).toBeDisplayed()
    })

    it('TC011 Onboarding | Terms and Conditions - Verify Licenses Agreement visible and scrollable', async () => {
        await TermsAndConditionsPage.scrollToTermsAndConditions()
    })

    it('TC012 Onboarding | Terms and Conditions - Verify Privacy Policy Clickable', async () => {
        await TermsAndConditionsPage.tapPrivacyPolicy()
        await expect($(TermsAndConditionsPage.urlBar)).toBeDisplayed()
    })
})
