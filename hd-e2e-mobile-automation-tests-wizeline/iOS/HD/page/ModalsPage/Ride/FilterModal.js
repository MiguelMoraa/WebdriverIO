import Actions from '../../../../API/Actions'

class FilterModal extends Actions {
    constructor() {
        super()
    }

    get filterHeader() { return 'id=headerLabel' }
}

export default new FilterModal()
