import Actions from '../../../../API/Actions'
import { HEADERS } from '../../../data/ModalData'
import CorePage from '../../CorePage'

class AboutModal extends Actions {
    constructor() {
        super()
    }

    get aboutHeader() { return 'id=headerLabel' }
    get hereLogo() { return 'android=new UiSelector().className("android.widget.ImageView")' }
    get hereSharingStatus() { return 'id=hereDatSharingStatus' }
    get denyButton() { return 'id=deny' }
    get allowButton() { return 'id=allow' }
    get grantsSelectors() { return ['id=deny', 'id=allow'] }
    get links() { return ['id=darkSkyAcknowledgment',
        'id=hereMapsAcknowledgment',
        'id=hereMapsTermsOfUse',
        'id=visitDotCom',
        'id=privacyPolicy',
        'id=termsOfUse',
        'id=weCare',
        'id=hereMapsPrivacyPolicy',
        'id=editHerePermission'] }

    async validateLinks() {
        for (let i = 0 ; i < this.links.length - 2 ; i++) {
            await expect($(this.aboutHeader)).toHaveText(HEADERS.ABOUT)
            await this.tapElement(this.links[i])
            await driver.pause(2000)
            await CorePage.nativeBack()
        }
        for (let j = 0 ; j <= 1 ; j++) {
            await this.tapElement(this.links[8])
            await expect($(this.hereLogo)).toBeDisplayed()
            await this.tapElement(this.grantsSelectors[j])
        }
        await this.tapElement(this.links[7])
        await driver.pause(5000)
        await CorePage.nativeBack()
    }
}

export default new AboutModal()
