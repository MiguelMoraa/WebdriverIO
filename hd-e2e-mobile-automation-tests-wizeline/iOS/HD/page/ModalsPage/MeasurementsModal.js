import Actions from '../../../API/Actions'

class MeasurementsModal extends Actions {
    constructor() {
        super()
    }

    get measurementHeader() { return 'id=headerLabel' }
    get cesliusOption() { return '//*[@text="Celsius (C)"]' }
    get fahrenheitOptoin() { return '//*[@text="Fahrenheit (F)"]'}
    get metricOption() { return '//*[@text="Metric (KM, KPA)"]' }
    get imperialOption() { return '//*[@text="Imperial (MI, PSI)"]' }

    async selectMeasurements(temperature, distance) {
        if (temperature === 'Celsius') {
            await this.tapElement(this.cesliusOption)
        }
        else if (temperature === 'Fahrenheit') {
            await this.tapElement(this.fahrenheitOptoin)
        }
        if (distance === 'KM') {
            await this.tapElement(this.metricOption)
        }
        else if (distance === 'MI') {
            await this.tapElement(this.imperialOption)
        }
    }

}

export default new MeasurementsModal()
