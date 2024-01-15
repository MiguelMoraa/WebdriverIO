import Actions from '../../API/Actions'
import AboutModal from './ModalsPage/More/AboutModal'

class LocationPage extends Actions {
    constructor() {
        super()
    }

    get allowLocationButton() { return 'id=allowButton' }
    get skipLocationButton() { return 'id=skipButton' }
    get locationWhileUsingApp() { return 'id=com.android.permissioncontroller:id/permission_allow_foreground_only_button' }
    get denyLocation() { return 'id=com.android.permissioncontroller:id/permission_deny_button' }
    get hereCta() { return 'id=hereLearnMore' }
    get hereURL() { return 'id=com.android.chrome:id/url_bar' }

    async tapOnAllow() {
        await this.tapElement(this.allowLocationButton)
    }

    async tapOnSkip() {
        await this.tapElement(this.skipLocationButton)
    }

    async tapOnWhileIsUsingTheApp() {
        await this.tapElement(this.locationWhileUsingApp)
    }

    async tapAllowHEREPermissions() {
        await this.tapElement(AboutModal.allowButton)
    }

    async tapDenyHEREPermissions() {
        await this.tapElement(AboutModal.denyButton)
    }

    async tapOnPrivacyCta() {
        await this.tapElement(this.hereCta)
    }

    async allowLocation() {
        await this.tapElement(this.allowLocationButton)
    }

    async skipLoction() {
        await this.tapElement(this.skipLocationButton)
    }
}

export default new LocationPage()
