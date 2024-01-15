import Actions from '../../../API/Actions'
import EventsModal from './More/EventsModal'

class FilterEventsModal extends Actions {
    constructor() {
        super()
    }

    get filterEventsHeader() { return 'id=headerLabel' }
    get distanceMenu() { return 'id=distance' }
    get hundredMiles() { return 'android=new UiSelector().resourceId("com.harley_davidson.ride_planner:id/title").textContains("1000")' }
    get applyFilter() { return 'id=applyFilter' }

    async setFilterRange() {
        await this.tapElement(this.distanceMenu)
        await this.tapElement(this.hundredMiles)
        await this.tapElement(this.applyFilter)
        await this.waitForElementClickable(EventsModal.filterButton)
    }
}

export default new FilterEventsModal()
