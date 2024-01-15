import StartApplicationPage from '../page/StartApplicationPage'
import PreferencesPage from '../page/PreferencesPage'
import LocationPage from '../page/LocationPage'
import TermsAndConditionsPage from '../page/TermsAndConditionsPage'
import CorePage from '../page/CorePage'
import LoginPage from '../page/Profile/LoginPage'
import { CREDENTIALS } from '../data/LoginData'
import MyProfilePage from '../page/Profile/MyProfilePage'
import MyDealerPage from '../page/Profile/MyDealerPage'
import ChallengesPage from '../page/Challenges/ChallengesPage'
import MyBikesPage from '../page/Profile/MyBikesPage'
import EditProfileModal from '../page/ModalsPage/Profile/EditProfileModal'
import EditEmailModal from '../page/ModalsPage/Profile/EditEmailModal'
import ModalActions from '../page/ModalsPage/ModalActions'
import RidesPage from '../page/RidesPage'
import SettingsModal from '../page/ModalsPage/Profile/SettingsModal'
import BikeInfoModal from '../page/ModalsPage/Profile/BikeInfoModal'
import AddABikeModal from '../page/ModalsPage/Profile/AddABikeModal'
import BikeSettingsModal from '../page/ModalsPage/Profile/BikeSettingsModal'
import TodayPage from '../page/Today/TodayPage'
import RegionModal from '../page/ModalsPage/RegionModal'
import { HEADERS } from '../data/ModalData'
import InboxModal from '../page/ModalsPage/InboxModal'
import AddADealerModal from '../page/ModalsPage/Profile/AddADealerModal'
import { BIKE_NAME, BIKE_VIN } from '../data/BikeData'
import CreateAccount from '../page/ModalsPage/Profile/CreateAccount'
import EditPasswordModal from '../page/ModalsPage/Profile/EditPasswordModal'
import EditAddressModal from '../page/ModalsPage/Profile/EditAddressModal'
import MeasurementsModal from '../page/ModalsPage/Profile/MeasurementsModal'
import ScheduleServiceModal from '../page/ModalsPage/Profile/ScheduleServiceModal'
import SearchDealersModal from '../page/ModalsPage/Profile/SearchDealersModal'
import RidePage from '../page/Ride/RidePage'
import CreatePage from '../page/Ride/CreatePage'
import LanguageModal from '../page/ModalsPage/LanguageModal'
import NavVoiceModal from '../page/ModalsPage/Profile/NavVoiceModal'
import dotenv from 'dotenv'
dotenv.config()

describe('🧪✨ Test Profile features', () => {

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

    it('TC001 Verify Edit Email in My Profile', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await MyProfilePage.tapOnEditProfile()
        await EditProfileModal.tapOnEditEmail()
        await EditEmailModal.enterPassword(CREDENTIALS.REGRESSION.PASSWORD)
        await expect($(EditEmailModal.updateEmailButton)).toBeDisplayed()
    })

    it('TC002 HD app header: Logged in state, display inbox', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await CorePage.tapOnInbox()
        await expect($(InboxModal.inboxHeader)).toHaveText(HEADERS.INBOX)
        await ModalActions.closeModalPage()
        await CorePage.tapOnTodayTab()
        await CorePage.tapOnInbox()
        await expect($(InboxModal.inboxHeader)).toHaveText(HEADERS.INBOX)
        await ModalActions.closeModalPage()
        await CorePage.tapOnChallengesTab()
        await expect($(ChallengesPage.activeChallenge)).toBeDisplayed()
        await CorePage.tapOnInbox()
        await expect($(InboxModal.inboxHeader)).toHaveText(HEADERS.INBOX)
    })

    it('TC003 HD app header: Display settings button', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await expect($(MyProfilePage.myProfileTab)).toBeDisplayed()
        await MyProfilePage.tapOnSettings()
        await ModalActions.closeModalPage()
    })

    it('TC004 Profile Page: My Dealer tab - empty state', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyDealerPage.tapOnMyDealerTab()
        await MyDealerPage.addADealer()
        await expect($(AddADealerModal.findADealerHeader)).toHaveText(HEADERS.FIND_A_DEALER)
    })

    it('TC005 Profile Page: My Dealer tab - Dealers added', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await MyDealerPage.tapOnMyDealerTab()
        await MyDealerPage.tapOnTakeMeThere()
        if (await $(SelectABikeModal.continueButton).isExisting() === true) {
            await SelectABikeModal.tapOnContinue()
        }
        await RidesPage.verifiedRideScreen()
    })

    it('TC006 View Secondary Pages As Models', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyProfilePage.tapOnSettings()
        await ModalActions.closeModalPage()
        await CorePage.tapOnChallengesTab()
        await ChallengesPage.tapOnActiveChallenge()
        await ModalActions.closeModalPage()
        await CorePage.tapOnProfileTab()
        await MyProfilePage.tapOnEditProfile()
        await ModalActions.goBackModalPage()
        await MyBikesPage.tapOnMyBikesTab()
        await MyBikesPage.tapOnAddAnotherBike()
        await ModalActions.closeModalPage()
        await MyBikesPage.selectBike('Wizeline')
        await ModalActions.goBackModalPage()
        await MyDealerPage.tapOnMyDealerTab()
        await MyDealerPage.addADealer()
        await ModalActions.closeModalPage()
        await MyProfilePage.tapOnMyProfileTab()
    })

    it('TC007 Downloaded HD app- My H-D - Settings - Region - New countries listed', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await expect($(MyProfilePage.myProfileTab)).toBeDisplayed()
        await MyProfilePage.tapOnSettings()
        await SettingsModal.tapOnRegionMenu()
        await expect($(RegionModal.regionHeader)).toHaveText(HEADERS.REGION)
        await ModalActions.goBackModalPage()
    })

    it.skip('TC008 Reactivate H-D Connect', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.HD.USER, CREDENTIALS.HD.PASSWORD)
        await MyBikesPage.tapOnMyBikesTab()
        await MyBikesPage.selectBike('Stolen')
        await BikeInfoModal.tapOnBikeSettings()
        await expect($(BikeSettingsModal.bikeSettingsHeader)).toHaveText(HEADERS.BIKE_SETTINGS)
        await BikeInfoModal.tapOnReactiveHDConnect()
        await BikeInfoModal.cancelConnection()
    })

    it('TC009 Bike Settings: Limit Bike Nickname to 50 Characters', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyBikesPage.tapOnMyBikesTab()
        await MyBikesPage.tapOnAddAnotherBike()
        await AddABikeModal.setVINNumber(BIKE_VIN.PAN_AMERICA_1250)
        await AddABikeModal.addBikeNickName(BIKE_NAME.TEST.INVALID)
        await AddABikeModal.addBikeNickName(BIKE_NAME.TEST.VALID)
        await AddABikeModal.tapOnAddYourBike()
        await MyBikesPage.selectBike('Test')
        await BikeInfoModal.tapOnBikeSettings()
        await BikeSettingsModal.deleteBike()
        await expect($(MyBikesPage.testBike)).not.toBeDisplayed()
    })

    it('TC010 Bike on Today View', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyBikesPage.tapOnMyBikesTab()
        await MyBikesPage.selectBike('Wizeline')
        await BikeInfoModal.tapOnBikeSettings()
        await BikeSettingsModal.activeMakeItPrimaryBike()
        await ModalActions.goBackModalPage()
        await CorePage.tapOnTodayTab()
        await TodayPage.swipeToBikeCarrousel()
        await expect($(TodayPage.primaryBikeText)).toBeDisplayed()
        await expect($(TodayPage.bikeName)).toHaveText(BIKE_NAME.WIZELINE)
        await CorePage.tapOnProfileTab()
        await MyBikesPage.tapOnMyBikesTab()
        await MyBikesPage.selectBike('Wizeline')
        await BikeInfoModal.tapOnBikeSettings()
        await BikeSettingsModal.activeMakeItPrimaryBike()
        await expect($(BikeInfoModal.bikeName)).toHaveText(BIKE_NAME.WIZELINE)
    })

    it('TC011 Bike detailed screen> Notification Settings View', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyBikesPage.tapOnMyBikesTab()
        await MyBikesPage.selectBike('Wizeline')
        await expect($(BikeInfoModal.bikeName)).toHaveText(BIKE_NAME.WIZELINE)
    })

    it.skip('TC012 Globalize Today Tab Content', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyProfilePage.tapOnSettings()
        await SettingsModal.tapOnRegionMenu()
        await RegionModal.selectRegion(RegionModal.regions[18])
        await RegionModal.confirmEnglishLanguage()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await CorePage.verifyAppStarts('India')
        await expect($(TodayPage.homecomingImage)).not.toBeDisplayed()
        await CorePage.tapOnProfileTab()
        await MyProfilePage.tapOnSettings()
        await SettingsModal.tapOnRegionMenu()
        await RegionModal.selectRegion(RegionModal.regions[29])
        await RegionModal.confirmEnglishLanguage()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await CorePage.verifyAppStarts('Mexico')
        await expect($(TodayPage.homecomingImage)).toBeDisplayed()
    })

    it('TC013 Rider will view just country if location services are not enabled', async () => {
        await driver.reset()
        await StartApplicationPage.allowBTPermissions()
        await StartApplicationPage.tapGetStarted()
        await PreferencesPage.tapOnContinue()
        await LocationPage.tapOnSkip()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await LocationPage.tapOnWhileIsUsingTheApp()
        await CorePage.verifyAppStarts()
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await expect($(MyProfilePage.cityUser)).toHaveText('Toronto, Ontario')
    })

    it('TC014 My Bikes tab - empty state', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyBikesPage.tapOnMyBikesTab()
        await MyBikesPage.tapOnAddAnotherBike()
        await expect($(AddABikeModal.addABikeHeader)).toHaveText(HEADERS.ADD_A_BIKE)
    })

    it('TC015 My Bikes tab - Bikes added', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyBikesPage.tapOnMyBikesTab()
        await MyBikesPage.tapOnAddAnotherBike()
        await ModalActions.closeModalPage()
        await MyBikesPage.selectBike('Wizeline')
        await expect($(BikeInfoModal.bikeName)).toHaveText(BIKE_NAME.WIZELINE)
    })

    it('TC016 Profile tab design update empty state', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyProfilePage.verifyProfileData()
    })

    it('TC017 Profile tab design update non-empty state', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.REGRESSION.USER, CREDENTIALS.REGRESSION.PASSWORD)
        await MyProfilePage.verifyProfileData()
    })

    it('TC018 Edit first and last name', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyProfilePage.tapOnEditProfile()
        await EditProfileModal.editFirstName('edited')
        await EditProfileModal.tapOnSaveChanges()
        await MyProfilePage.verifyUserName('edited')
        await MyProfilePage.tapOnEditProfile()
        await EditProfileModal.editFirstName()
        await EditProfileModal.tapOnSaveChanges()
        await MyProfilePage.verifyUserName()
    })

    it('TC019 Edit and save Birthday', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyProfilePage.tapOnEditProfile()
        await EditProfileModal.editBirthdayDate('Mar', '31', '1985')
        await EditProfileModal.tapOnSaveChanges()
        await MyProfilePage.tapOnEditProfile()
        await EditProfileModal.setOrigialDate('Aug', '11', '1993')
        await EditProfileModal.tapOnSaveChanges()
        await expect($(MyProfilePage.myProfileTab)).toBeDisplayed()
    })

    it('TC020 Edit and save Email', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyProfilePage.tapOnEditProfile()
        await EditProfileModal.tapOnEditEmail()
        await EditEmailModal.enterPassword(CREDENTIALS.WIZELINE.PASSWORD)
        await EditEmailModal.changeEmail(CREDENTIALS.CHANGED.USER)
        await EditEmailModal.updateChanges()
        await EditProfileModal.tapOnEditEmail()
        await EditEmailModal.enterPassword(CREDENTIALS.WIZELINE.PASSWORD)
        await EditEmailModal.changeEmail(CREDENTIALS.WIZELINE.USER)
        await EditEmailModal.updateChanges()
        await browser.pause(5000)
        await ModalActions.goBackModalPage()
        await expect($(MyProfilePage.userEmail)).toHaveText(CREDENTIALS.WIZELINE.USER)
    })

    it('TC021 Edit Password', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.tapOnCreateAnAccount()
        const Account = await CreateAccount.createANewAccount()
        await MyProfilePage.tapOnEditProfile()
        await EditProfileModal.tapOnEditPassword()
        await EditPasswordModal.enterCurrentPassword(CREDENTIALS.WIZELINE.PASSWORD)
        await EditPasswordModal.enterNewPassword(process.env.WIZELINE_PASSWORD2)
        await EditPasswordModal.updateChanges()
        await driver.pause(5000)
        await CorePage.nativeBack()
        await driver.pause(5000)
        await MyProfilePage.logout()
        await LoginPage.loginUser(Account, CREDENTIALS.CHANGED.PASSWORD)
    })

    it('TC022 Edit profile & Address - no address state', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyProfilePage.tapOnEditProfile()
        await EditProfileModal.tapOnEditAddress()
        await EditAddressModal.fillAddress('CDMX')
        await EditProfileModal.validateAddress('CDMX')
        await EditProfileModal.tapOnEditAddress()
        await EditAddressModal.fillAddress('GDL')
        await EditProfileModal.validateAddress('GDL')
    })

    it('TC023 Edit profile & Address - address available state', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.tapOnCreateAnAccount()
        await CreateAccount.createANewAccount()
        await MyProfilePage.tapOnEditProfile()
        await EditProfileModal.tapOnAddAddress()
        await EditAddressModal.fillAddress('CDMX')
        await expect($(EditProfileModal.editProfileHeader)).toHaveText(HEADERS.EDIT_PROFILE)
    })

    it('TC024 Settings>Distance Measurements', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await expect($(MyProfilePage.myProfileTab)).toBeDisplayed()
        await MyProfilePage.tapOnSettings()
        await SettingsModal.tapOnMeasurementsMenu()
        await MeasurementsModal.tapOnMetric()
        await ModalActions.goBackModalPage()
        await ModalActions.closeModalPage()
        await CorePage.tapOnTodayTab()
        await TodayPage.swipeToRecommendedRides()
        await CorePage.tapOnRidesTab()
        await RidePage.tapOnCreateRide()
        await CreatePage.setRide('Casa Loma', 'Royal Ontario Museum')
        await CreatePage.continueRide()
    })

    it('TC025 Verify Schedule Service on US and CN', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await MyBikesPage.tapOnMyBikesTab()
        await MyProfilePage.tapOnSettings()
        await SettingsModal.tapOnRegionMenu()
        await RegionModal.selectRegion(RegionModal.regions[54])
        await RegionModal.confirmRegionChange()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
        await CorePage.tapOnProfileTab()
        await MyBikesPage.tapOnMyBikesTab()
        await MyBikesPage.selectBike('Pan America')
        await BikeInfoModal.tapOnScheduleService()
        await ScheduleServiceModal.tapOnSearch()
        await SearchDealersModal.setLocation('Mississauga, ON, Canada')
        await ScheduleServiceModal.selectDealer('Mississagua')
        await ScheduleServiceModal.fillServiceForm()
        await ScheduleServiceModal.tapOnConfirmService()
        await ScheduleServiceModal.tapOnSearch()
        await SearchDealersModal.setLocation('Oshawa, ON, Canada')
        await ScheduleServiceModal.selectDealer('Oshawa')
        await expect($(ScheduleServiceModal.contactDealerText)).toBeDisplayed()
    })

    it('TC026 My H-D Page>Settings>Language', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await expect($(MyProfilePage.myProfileTab)).toBeDisplayed()
        await MyProfilePage.tapOnSettings()
        await SettingsModal.tapOnLanguageMenu()
        await LanguageModal.selectLanguage(LanguageModal.language[0])
        await LanguageModal.tapOnCancel()
        await LanguageModal.selectLanguage(LanguageModal.language[1])
        await LanguageModal.tapOnCancel()
        await LanguageModal.selectLanguage(LanguageModal.language[2])
        await LanguageModal.tapOnConfirmLanguage()
        await CorePage.tapOnProfileTab()
    })

    it('TC027 My H-D Page>Settings>Navigation Voice', async () => {
        await CorePage.tapOnProfileTab()
        await LoginPage.loginUser(CREDENTIALS.WIZELINE.USER, CREDENTIALS.WIZELINE.PASSWORD)
        await expect($(MyProfilePage.myProfileTab)).toBeDisplayed()
        await MyProfilePage.tapOnSettings()
        await SettingsModal.tapOnNavVoiceMenu()
        await expect($(NavVoiceModal.NavVoiceHeader)).toHaveText(HEADERS.NAV_VOICE)
    })
})
