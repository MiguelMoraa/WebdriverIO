import StartApplicationPage from '../page/StartApplicationPage'
import PreferencesPage from '../page/PreferencesPage'
import LocationPage from '../page/LocationPage'
import TermsAndConditionsPage from '../page/TermsAndConditionsPage'
import CorePage from '../page/CorePage'
import RegionModal from '../page/ModalsPage/RegionModal'
import LoginPage from '../page/Profile/LoginPage'
import ChallengesPage from '../page/Challenges/ChallengesPage'
import TodayPage from '../page/Today/TodayPage'
import ChallengesModal from '../page/ModalsPage/Challenges/ChallengesModal'
import PastChallengesModal from '../page/ModalsPage/Challenges/PastChallengesModal'
import dotenv from 'dotenv'
import CreateAccount from '../page/ModalsPage/Profile/CreateAccount'
import ModalActions from '../page/ModalsPage/ModalActions'
import MyProfilePage from '../page/Profile/MyProfilePage'
import InboxModal from '../page/ModalsPage/InboxModal'
import MeasurementsModal from '../page/ModalsPage/MeasurementsModal'
dotenv.config()

describe('🧪✨ Test Challenges features | Active Challenges', () => {

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
        await CreateAccount.createANewAccount()
    })

    it('TC001 Challenges Nav Tab | Active Challenges - Verify Join the Challenge', async () => {
        await CorePage.tapOnChallengesTab()
        await ChallengesPage.tapOnActiveChallenge()
        await ChallengesModal.jointToChallenge()
        await expect($(ChallengesPage.checkInButton)).toBeDisplayed()
        await CorePage.tapOnTodayTab()
        await expect($(TodayPage.checkInButton)).toBeDisplayed()
        await CorePage.tapOnChallengesTab()
        await ChallengesPage.tapOnActiveChallenge()
    })

    it('TC002 Challenges Nav Tab | Active Challenges - Verify Share icon', async () => {
        await ModalActions.tapOnShare()
        await CorePage.nativeBack()
    })

    it('TC003 Challenges Nav Tab | Active Challenges - Verify Countries', async () => {
        for (let i = 0 ; i < ChallengesModal.countries.length ; i++) {
            await ChallengesModal.tapOnCountriesFilter()
            await ChallengesModal.selectCountry(ChallengesModal.countries[i])
        }
    })

    it('TC004 Challenges Nav Tab | Active Challenges - Verify Miles, Check In filter', async () => {
        for (let i = 0 ; i < ChallengesModal.fiterOptions.length ; i++) {
            await ChallengesModal.tapOnLeaderboardFilter()
            await ChallengesModal.selectLeaderbordFilter(ChallengesModal.fiterOptions[i])
        }
    })

    it('TC005 Challenges Nav Tab | Active Challenges - Verify See Full Leaderboard CTA', async () => {
        await ChallengesModal.tapOnLeaderboard()
        for (let i = 0 ; i < ChallengesModal.countries.length ; i++) {
            await ChallengesModal.tapOnCountriesFilter()
            await ChallengesModal.selectCountry(ChallengesModal.countries[i])
        }
        for (let i = 0 ; i < ChallengesModal.fiterOptions.length ; i++) {
            await ChallengesModal.tapOnFullLeaderBoardFilter()
            await ChallengesModal.selectLeaderbordFilter(ChallengesModal.fiterOptions[i])
        }
        await ModalActions.tapOnShare()
        await CorePage.nativeBack()
        await ModalActions.goBackModalPage()
    })

    it('TC006 Challenges Nav Tab | Active Challenges - Verify Read More/ Read Less CTAs', async () => {
        await ChallengesModal.tapOnReadMoreDescription()
        await expect($(ChallengesModal.lastParragaphDescription)).toBeDisplayed()
        await ChallengesModal.tapOnReadMoreDescription()
        await ChallengesModal.tapOnReadMoreHowItWorks()
        await expect($(ChallengesModal.lastParragaphHowItWorks)).toBeDisplayed()
        await ChallengesModal.tapOnReadMoreHowItWorks('less')
    })

    it('TC007 Challenges Nav Tab | Active Challenges - Verify Terms and Conditions', async () => {
        await ChallengesModal.tapOnTermsAndConditionsArrow()
    })

    it('TC008 Challenges Nav Tab | Active Challenges - Leave the Challenge', async () => {
        await ChallengesModal.leaveToChallenge()
    })

    it('TC009 Challenges Nav Tab | Past Challenges - Verify Countries', async () => {
        await ChallengesPage.tapOnPastChallenges()
        await PastChallengesModal.tapOnPastChallenge()
        await ModalActions.tapOnShare()
        await CorePage.nativeBack()
        for (let i = 0 ; i < ChallengesModal.fiterOptions.length ; i++) {
            await ChallengesModal.tapOnLeaderboardFilter()
            await ChallengesModal.selectLeaderbordFilter(ChallengesModal.fiterOptions[i])
        }
    })

    it('TC010 Challenges Nav Tab | Past Challenges - Verify See Full Leaderboard CTA', async () => {
        await ChallengesModal.tapOnLeaderboard()
        await ModalActions.tapOnShare()
        await CorePage.nativeBack()
        for (let i = 0 ; i < ChallengesModal.fiterOptions.length ; i++) {
            await ChallengesModal.tapOnFullLeaderBoardFilter()
            await ChallengesModal.selectLeaderbordFilter(ChallengesModal.fiterOptions[i])
        }
        await ModalActions.goBackModalPage()
    })

    it('TC011 Challenges Nav Tab | Past Challenges - Verify Read More/ Read Less CTAs', async () => {
        await ChallengesModal.tapOnReadMoreDescription()
        await expect($(ChallengesModal.lastParragaphDescription)).toBeDisplayed()
        await ChallengesModal.tapOnReadMoreDescription()
        await ChallengesModal.tapOnReadMoreHowItWorks()
        await expect($(ChallengesModal.lastParragaphHowItWorks)).toBeDisplayed()
        await ChallengesModal.tapOnReadMoreHowItWorks('less')
    })


    it('TC012 Challenges Nav Tab | Past Challenges - Verify Terms and Conditions', async () => {
        await ChallengesModal.tapOnTermsAndConditionsArrow()
        await ModalActions.goBackModalPage()
    })

    it('TC013 Challenges Nav Tab | Verify Inbox Icon', async () => {
        await ModalActions.closeModalPage()
        await CorePage.tapOnInbox()
        await expect($(InboxModal.inboxHeader)).toBeDisplayed()
        await ModalActions.closeModalPage()
    })

    after(async () => {
        await CorePage.tapOnProfileTab()
        await MyProfilePage.tapOnEditProfile()
        await MyProfilePage.tapOnDeleteAccount()
    })
})
