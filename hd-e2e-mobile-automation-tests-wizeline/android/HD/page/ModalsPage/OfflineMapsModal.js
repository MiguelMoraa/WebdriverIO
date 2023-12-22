import Actions from '../../../API/Actions'

class OfflineMapsModal extends Actions {
    constructor() {
        super()
    }

    get offlineMapsHeader() { return 'id=headerLabel' }

}

export default new OfflineMapsModal()
