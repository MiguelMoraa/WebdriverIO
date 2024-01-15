import Actions from '../../../API/Actions'

class InboxModal extends Actions {
    constructor() {
        super()
    }

    get inboxHeader() { return 'id=headerLabel' }
}

export default new InboxModal()
