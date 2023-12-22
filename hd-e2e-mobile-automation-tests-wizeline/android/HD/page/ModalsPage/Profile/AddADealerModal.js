import Actions from '../../../../API/Actions'

class AddADealerModal extends Actions {
    constructor() {
        super()
    }

    get findADealerHeader() { return 'id=headerLabel' }
}

export default new AddADealerModal()
