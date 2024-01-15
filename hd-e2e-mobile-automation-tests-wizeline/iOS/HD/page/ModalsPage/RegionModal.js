import Actions from '../../../API/Actions'
import ChallengesPage from '../Challenges/ChallengesPage'
import CorePage from '../CorePage'
import MyProfilePage from '../Profile/MyProfilePage'
import ChallengesModal from './Challenges/ChallengesModal'
import ModalActions from './ModalActions'
import SettingsModal from './Profile/SettingsModal'

class RegionModal extends Actions {
    constructor() {
        super()
    }

    get regionHeader() { return 'id=headerLabel' }
    get englishOption() { return 'id=android:id/button2' }
    get confrimChangeButton() { return 'id=android:id/button1' }
    get challengeMessage() { return 'android=new UiSelector().textContains("We noticed that you are participating")' }
    get cancelChagengeMessage() { return 'id=android:id/button2' }
    get regions() { return ['//*[@text="Andorra"]',
        '//*[@text="Australia"]',
        '//*[@text="Austria"]',
        '//*[@text="Belgium"]',
        '//*[@text="Brazil"]',
        '//*[@text="Bulgaria"]',
        '//*[@text="Canada"]',
        '//*[@text="Croatia"]',
        '//*[@text="Cyprus"]',
        '//*[@text="Czech Republic"]',
        '//*[@text="Denmark"]',
        '//*[@text="Estonia"]',
        '//*[@text="Finland"]',
        '//*[@text="France"]',
        '//*[@text="Germany"]',
        '//*[@text="Greece"]',
        '//*[@text="Hong Kong"]',
        '//*[@text="Hungary"]',
        '//*[@text="India"]',
        '//*[@text="Indonesia"]',
        '//*[@text="Ireland"]',
        '//*[@text="Israel"]',
        '//*[@text="Italy"]',
        '//*[@text="Japan"]',
        '//*[@text="Latvia"]',
        '//*[@text="Lithuania"]',
        '//*[@text="Luxembourg"]',
        '//*[@text="Malaysia"]',
        '//*[@text="Malta"]',
        '//*[@text="Mexico"]',
        '//*[@text="Netherlands"]',
        '//*[@text="New Zealand"]',
        '//*[@text="Norway"]',
        '//*[@text="Other Country"]',
        '//*[@text="Philippines"]',
        '//*[@text="Poland"]',
        '//*[@text="Portugal"]',
        '//*[@text="Puerto Rico"]',
        '//*[@text="Qatar"]',
        '//*[@text="Romania"]',
        '//*[@text="Russia"]',
        '//*[@text="Saudi Arabia"]',
        '//*[@text="Singapore"]',
        '//*[@text="Slovakia"]',
        '//*[@text="Slovenia"]',
        '//*[@text="South Africa"]',
        '//*[@text="Spain"]',
        '//*[@text="Sweden"]',
        '//*[@text="Switzerland"]',
        '//*[@text="Taiwan"]',
        '//*[@text="Thailand"]',
        '//*[@text="Turkey"]',
        '//*[@text="UAE"]',
        '//*[@text="United Kingdom"]',
        '//*[@text="United States"]',
        '//*[@text="Vietnam"]',
        '//*[@text="Virgin Islands"]'] }

    async selectRegion(region) {
        await this.swipeDownToElementAndTap(region)
        if (await $(this.challengeMessage).isExisting() === true) {
            await this.tapElement(this.cancelChagengeMessage)
            await ModalActions.goBackModalPage()
            await ModalActions.closeModalPage()
            await CorePage.tapOnChallengesTab()
            await ChallengesPage.tapOnActiveChallenge()
            await ChallengesModal.leaveToChallenge()
            await CorePage.tapOnProfileTab()
            await MyProfilePage.tapOnSettings()
            await SettingsModal.tapOnRegionMenu()
            await this.swipeDownToElementAndTap(region)
        }
    }

    async confirmEnglishLanguage() {
        await this.tapElement(this.englishOption)
    }

    async confirmRegionChange() {
        await this.tapElement(this.confrimChangeButton)
    }
}

export default new RegionModal()
