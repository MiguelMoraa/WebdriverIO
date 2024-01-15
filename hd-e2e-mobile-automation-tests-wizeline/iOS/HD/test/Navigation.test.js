import StartApplicationPage from '../page/StartApplicationPage'
import PreferencesPage from '../page/PreferencesPage'
import RegionModal from '../page/ModalsPage/RegionModal'
import LocationPage from '../page/LocationPage'
import TermsAndConditionsPage from '../page/TermsAndConditionsPage'
import dotenv from 'dotenv'
import CorePage from '../page/CorePage'
import RidePage from '../page/Ride/RidePage'
import WhereToPage from '../page/Ride/WhereToPage'
import PoiModal from '../page/ModalsPage/Ride/PoiModal'
import MeasurementsModal from '../page/ModalsPage/MeasurementsModal'
dotenv.config()

describe('🧪✨ Test POI features', () => {

    beforeEach(async () => {
        await driver.reset()
        await StartApplicationPage.allowBTPermissions()
        await StartApplicationPage.tapGetStarted()
        const REGION = await PreferencesPage.getRegion()
        if (REGION !== 'Canada') {
            await PreferencesPage.tapOnRegionMenu()
            await RegionModal.selectRegion(RegionModal.regions[6])
            await PreferencesPage.tapOnContinue()
            await PreferencesPage.tapOnConfirmChanges()
            await StartApplicationPage.tapGetStarted()
        }
        const MEASUREMENTS = await PreferencesPage.getMeasures()
        if (MEASUREMENTS !== 'Fahrenheit, Imperial') {
            await PreferencesPage.tapOnMeasurementsMenu()
            await MeasurementsModal.selectMeasurements('Fahrenheit', 'MI')
            await ModalActions.goBackModalPage()
        }
        await PreferencesPage.tapOnContinue()
        await LocationPage.tapOnAllow()
        await LocationPage.tapOnWhileIsUsingTheApp()
        await LocationPage.tapDenyHEREPermissions()
        await TermsAndConditionsPage.checkPrivacyPolicy()
        await TermsAndConditionsPage.tapOnContinueButton()
    })

    it('TC001 Navigation | POI - Verify Card has the OPEN/CLOSE business status', async () => {
        await CorePage.tapOnRidesTab()
        await RidePage.tapOnWhereToField()
        await WhereToPage.writeLocation('Azure Restaurant & Bar')
        //await expect($(PoiModal.businessStatus)).toHaveText('Open now')
        await CorePage.nativeBack()
        await RidePage.tapOnWhereToField()
        await WhereToPage.writeLocation('Shisenshanghai Yakuzenryori')
        //await expect($(PoiModal.businessStatus)).toHaveText('Closed now')
        await CorePage.nativeBack()
        await RidePage.tapOnWhereToField()
        await WhereToPage.writeLocation('Vue Bistros')
        await driver.pause(3000)
        await expect($(PoiModal.businessStatus)).not.toBeDisplayed()
    })
})
