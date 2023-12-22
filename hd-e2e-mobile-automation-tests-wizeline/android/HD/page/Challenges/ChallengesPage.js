import Actions from '../../../API/Actions'

class ChallengesPage extends Actions {
    constructor() {
        super()
    }

    get viewPastChallengesLink() { return 'id=viewAllPastChallenges' }
    get activeChallenge() { return 'id=active_challenge_name' }
    get checkInButton() { return 'id=checkin' }

    async tapOnChallengesTab() {
        await this.tapElement(this.challengesTab)
    }

    async tapOnActiveChallenge() {
        await this.tapElement(this.activeChallenge)
    }

    async tapOnPastChallenges() {
        if (await $(this.checkInButton).isExisting() === true) {
            await this.swipeScreen(360, 1000, 360, 700)
        }
        await this.swipeDownToElementAndTap(this.viewPastChallengesLink)
    }
}

export default new ChallengesPage()
