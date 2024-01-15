import Actions from '../../API/Actions'

class MapPage extends Actions {
    constructor() {
        super()
    }

    get POICard() { return 'id=content' }
    get detailsCardButton() { return 'id=blackButton' }
    get directionsCardButton() { return 'id=orangeButton' }
    get senToBikeCardButton() { return 'id=sendPoiButton' }

    async tapOnDetailsButton() {
        await this.tapElement(this.detailsCardButton)
    }
}

export default new MapPage()
