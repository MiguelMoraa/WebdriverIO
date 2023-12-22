import Actions from '../../../../API/Actions'

class EventsModal extends Actions {
    constructor() {
        super()
    }

    get eventsHeader() { return 'id=label' }
    get filterButton() { return 'id=filterIcon' }
    get filterEventsHeader() { return 'id=headerLabel' }
    get titleEvent() { return 'id=eventTitle' }
    get getDirectionsButton() { return 'id=directionsButton' }

    async tapOnFilter() {
        await this.tapElement(this.filterButton)
    }

    async enterToFirstEvent() {
        await this.tapElement(this.titleEvent)
    }

    async tapOnGetDirections() {
        await this.swipeDownToElementAndTap(this.getDirectionsButton)
    }
}

export default new EventsModal()
