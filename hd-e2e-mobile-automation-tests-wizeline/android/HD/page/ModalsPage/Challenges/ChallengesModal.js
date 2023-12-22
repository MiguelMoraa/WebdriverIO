import Actions from '../../../../API/Actions'
import CorePage from '../../CorePage'
import ModalActions from '../ModalActions'

class ChallengesModal extends Actions {
    constructor() {
        super()
    }

    get challengeName() { return 'id=challenge_name_hero' }
    get joinToChallengeButton() { return 'id=join_btn' }
    get leaveChallengeButton() { return 'id=leaveChallenge' }
    get confirmLeaveChallengeButton() { return 'id=android:id/button1' }
    get termsOfUserHeader() { return 'id=headerLabel' }
    get ageConditioncheckBox() { return 'id=ageCheckbox' }
    get termsAgreeementCheckbox() { return 'id=agreeCheckbox' }
    get joinNowButton() { return 'id=join' }
    get congratsChallengeHeader() { return 'id=header' }
    get countryFilter() { return 'id=region_filter' }
    get countries() { return ['//*[@text="Australia"]',
        '//*[@text="Brazil"]',
        '//*[@text="Canada"]',
        '//*[@text="Germany"]',
        '//*[@text="Spain"]',
        '//*[@text="France"]',
        '//*[@text="United Kingdom"]',
        '//*[@text="Japan"]',
        '//*[@text="Mexico"]',
        '//*[@text="Netherlands"]',
        '//*[@text="New Zealand"]',
        '//*[@text="United States"]',
        '//*[@text="All Countries"]',] }
    get seeLeaderBoard() { return 'id=leaderboard_view_all_button' }
    get leaderboardFilter() { return 'id=leaderboard_filter_chevron' }
    get fullLEaderboardFilter() { return 'id=leaderboard_filter_text' }
    get fiterOptions() { return ['//*[@text="Check-ins"]',
        //'//*[@text="Kilometres"]'] }
        '//*[@text="Miles"]'] }
    get readMoreChallengeDescription() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/read_more_less").instance(0)' }
    get readMoreHowItWorks() { return ['android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/read_more_less").instance(1)',
        '//*[@text="READ LESS"]'] }
    get termsAndConditions() { return 'id=challenge_terms_header' }
    get lastParragaphDescription() { return 'android=new UiSelector().textContains("local dealer.")' }
    get lastParragaphHowItWorks() { return 'android=new UiSelector().textContains("explore the dealership.")' }
    get lastParragaphTermsAndConditions() { return 'android=new UiSelector().textContains("Ave., Milwaukee, WI 53208.")' }

    async jointToChallenge() {
        if (await $(this.joinToChallengeButton).isExisting() === true) {
            await this.tapElement(this.joinToChallengeButton)
            await this.findElement(this.termsOfUserHeader)
            for (let i = 0 ; i < 11 ; i++) {
                await this.swipeScreen(360, 1000, 360, 700)
            }
            await this.findElement(this.lastParragaphTermsAndConditions)
            await this.tapElement(this.ageConditioncheckBox)
            await this.tapElement(this.termsAgreeementCheckbox)
            await this.tapElement(this.joinNowButton)
            await CorePage.loadingProcess()
            await ModalActions.goBackModalPage()
        }
        else {
            await ModalActions.goBackModalPage()
        }
    }

    async leaveToChallenge() {
        if (await $(this.joinToChallengeButton).isExisting() === false) {
            await this.swipeDownToElementAndTap(this.leaveChallengeButton)
            await this.tapElement(this.confirmLeaveChallengeButton)
        }
        else {
            await ModalActions.closeModalPage()
        }
    }

    async tapOnCountriesFilter() {
        await this.tapElement(this.countryFilter)
    }

    async selectCountry (country) {
        await this.swipeDownToElementAndTap(country)
    }

    async tapOnLeaderboard() {
        await this.swipeDownToElementAndTap(this.seeLeaderBoard)
    }

    async tapOnLeaderboardFilter() {
        await this.swipeDownToElementAndTap(this.leaderboardFilter)
    }

    async selectLeaderbordFilter(filter) {
        await this.tapElement(filter)
    }

    async tapOnReadMoreDescription() {
        await this.swipeDownToElementAndTap(this.readMoreChallengeDescription)
    }

    async tapOnReadMoreHowItWorks(read) {
        const howItWorks = 'less' === read ? this.readMoreHowItWorks[1] : this.readMoreHowItWorks[0]
        await this.swipeDownToElementAndTap(howItWorks)
    }

    async tapOnTermsAndConditionsArrow() {
        await this.swipeDownToElementAndTap(this.termsAndConditions)
    }

    async tapOnFullLeaderBoardFilter() {
        await this.swipeDownToElementAndTap(this.fullLEaderboardFilter)
    }
}

export default new ChallengesModal()
