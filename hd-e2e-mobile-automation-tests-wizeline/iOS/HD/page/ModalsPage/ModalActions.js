import Actions from '../../../API/Actions'

class ModalActions extends Actions {
    constructor() {
        super()
    }

    get backArrow() { return 'id=backIcon' }
    get closeIcon() { return 'id=closeIcon' }
    get shareIcon() { return 'id=shareIcon' }
    get moreIcon() { return 'id=moreIcon' }
    get emailModal () { return 'id=android:id/profile_tabhost' }
    get okProfileRequired() { return 'id=android:id/button1' }

    async closeModalPage() {
        await driver.pause(500)
        await this.tapElement(this.closeIcon)
    }

    async goBackModalPage() {
        await driver.pause(500)
        await this.tapElement(this.backArrow)
    }

    async tapOnShare() {
        await this.tapElement(this.shareIcon)
    }

    async tapOkProfileRequired() {
        await this.tapElement(this.okProfileRequired)
    }
}

export default new ModalActions()
