import Actions from '../../../../API/Actions'

class MeasurementsModal extends Actions {
    constructor() {
        super()
    }

    get measurementHeader() { return 'id=headerLabel' }
    get celsiusOptionChecked() { return '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView[1]/android.widget.LinearLayout[2]/android.widget.ImageView' }
    get metricOption() { return 'android=new UiSelector().textContains("Metric")' }

    async tapOnMetric() {
        await this.tapElement(this.metricOption)
    }
}

export default new MeasurementsModal()
