import Actions from '../../../../API/Actions'

class PastChallengesModal extends Actions {
    constructor() {
        super()
    }

    get pastChallengesHeader() { return 'id=headerLabel' }
    get lastPastChallenge() { return 'id=past_challenge_name' }
    get pastChallengeName() { return 'id=challenge_name_hero' }

    async tapOnPastChallenge() {
        await this.tapElement(this.lastPastChallenge)
    }

}

export default new PastChallengesModal()
