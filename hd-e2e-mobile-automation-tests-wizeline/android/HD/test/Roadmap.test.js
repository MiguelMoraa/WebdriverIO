import StartApplicationPage from '../page/StartApplicationPage'
import RegionModal from '../page/ModalsPage/RegionModal'
import PreferencesPage from '../page/PreferencesPage'
import LocationPage from '../page/LocationPage'
import TermsAndConditionsPage from '../page/TermsAndConditionsPage'
import CorePage from '../page/CorePage'
import TodayPage from '../page/Today/TodayPage'
import MyProfilePage from '../page/Profile/MyProfilePage'
import dotenv from 'dotenv'
import SettingsModal from '../page/ModalsPage/Profile/SettingsModal'
dotenv.config()

describe('🧪✨ Test Today Nav Tab features | My Saved Events Section', () => {

    before(async () => {
        await driver.setGeoLocation({ latitude: process.env.LATITUDE, longitude: process.env.LONGITUDE, altitude: process.env.ALTITUDE })
        await driver.reset()
        await StartApplicationPage.allowBTPermissions()
        await StartApplicationPage.tapGetStarted()
        await PreferencesPage.tapOnContinue()
        await LocationPage.tapOnAllow()
        await LocationPage.tapOnWhileIsUsingTheApp()
        await LocationPage.tapDenyHEREPermissions()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
    })

    it('TC001 Today Nav Tab | Featured Events for all Regions', async () => {
        for (let i = 0 ; i < RegionModal.regions.length - 1 ; i++) {
            await CorePage.tapOnProfileTab()
            await MyProfilePage.tapOnSettings()
            await SettingsModal.tapOnRegionMenu()
            await RegionModal.selectRegion(RegionModal.regions[i])
            if (i === 6 || i === 37 || i === 38 || i === 41 || i === 52 || i === 54) {
                await RegionModal.confirmRegionChange()
            }
            else {
                await RegionModal.confirmEnglishLanguage()
            }
            if (i !== 6) {
                await TermsAndConditionsPage.checkPrivacyPolicy()
                await TermsAndConditionsPage.tapOnContinueButton()
            }
            await TodayPage.scrollDownToFeaturedEvents()
            await expect($(TodayPage.featuredEventsHeader)).toBeDisplayed()
            await expect($(TodayPage.featuredEventsCarrouseldots)).toBeDisplayed()
            await expect($(TodayPage.viewAllfeaturedEvents)).toBeDisplayed()
        }
        await driver.setGeoLocation({ latitude: '61.8926', longitude: '6.9118', altitude: process.env.ALTITUDE })
        await driver.pause(5000)
        await driver.reset()
        await StartApplicationPage.tapGetStarted()
        await PreferencesPage.tapOnContinue()
        await LocationPage.tapOnAllow()
        await LocationPage.tapOnWhileIsUsingTheApp()
        await LocationPage.tapDenyHEREPermissions()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await TodayPage.scrollDownToFeaturedEvents()
        await expect($(TodayPage.featuredEventsHeader)).toBeDisplayed()
        await expect($(TodayPage.noEventsLegend)).toBeDisplayed()
        await expect($(TodayPage.viewAllfeaturedEvents)).toBeDisplayed()
    })
})
