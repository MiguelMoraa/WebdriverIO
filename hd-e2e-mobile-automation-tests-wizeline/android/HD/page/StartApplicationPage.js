import Actions from '../../API/Actions'

class StartApplicationPage extends Actions {
    constructor() {
        super()
    }

    get allowBTPermissionsButton() { return 'id=com.android.permissioncontroller:id/permission_allow_button' }
    get bntGetStarted() { return 'id=getStartedButton' }

    async allowBTPermissions() {
        if (process.env.PLATFORM_VERSION >= 12) {
            await this.tapElement(this.allowBTPermissionsButton)
        }
    }

    async tapGetStarted() {
        await this.tapElement(this.bntGetStarted)
    }
}

export default new StartApplicationPage()

