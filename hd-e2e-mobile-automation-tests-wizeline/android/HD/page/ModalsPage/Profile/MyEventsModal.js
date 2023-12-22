import Actions from '../../../../API/Actions'

class MyEventsModal extends Actions {
    constructor() {
        super()
    }

    get myEventsHeader() { return 'id=label' }
    get upcomingEventName() { return 'android= new UiSelector().resourceId("com.harley_davidson.ride_planner:id/title").instance(0)' }

}

export default new MyEventsModal()
