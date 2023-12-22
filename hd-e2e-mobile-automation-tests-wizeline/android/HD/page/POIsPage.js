import Actions from '../../API/Actions'

class POIsPage extends Actions {
    constructor() {
        super()
    }

    get POIName() { return 'id=title' }
    get distancePOIText() { return 'id=distance' }
    get levelPOIField() { return 'id=level' }
    get portsPOIField() { return 'id=ports' }
    get portsNumber() { return 'id=portsValue' }
    get portsAvailableField() { return 'id=portsLabel' }
    get connectorTypeField() { return 'id=connectorLabel' }
    get connectorTypeText() { return 'id=connectorTypes' }
    get maxChargingField() { return 'id=chargeLabel' }
    get chargeValue() { return 'id=chargeValue' }

    async verifyChargeStationData() {
        await expect($(this.POIName)).toBeDisplayed()
        await expect($(this.distancePOIText)).toBeDisplayed()
        await expect($(this.levelPOIField)).toBeDisplayed()
        await expect($(this.portsPOIField)).toBeDisplayed()
        await expect($(this.portsNumber)).toBeDisplayed()
        await expect($(this.portsAvailableField)).toBeDisplayed()
        await expect($(this.connectorTypeField)).toBeDisplayed()
        await expect($(this.connectorTypeText)).toBeDisplayed()
        await expect($(this.maxChargingField)).toBeDisplayed()
        await expect($(this.chargeValue)).toBeDisplayed()
    }
}

export default new POIsPage()
