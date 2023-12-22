import Actions from '../../../API/Actions'

class WhereToPage extends Actions {
    constructor() {
        super()
    }

    get morePOIs() { return '//*[@class="android.widget.ImageView"][5]' }
    get categoryHeader() { return '//*[@text="SELECT CATEGORY"]' }
    get POIsHEader() { return '.android.widget.TextView' }
    get serarchField() { return 'id=toolbarSearchBoxFullEdit' }
    get suggestedLocation() { return 'id=suggestionTitle' }
    get POIs() { return [
        'android=new UiSelector().textContains("Dealership")',
        'android=new UiSelector().textContains("Gas")',
        'android=new UiSelector().textContains("Restaurants")',
        'android=new UiSelector().textContains("Hotels")',
        'android=new UiSelector().textContains("Charge")',
        'android=new UiSelector().textContains("Shoppping")',
        'android=new UiSelector().textContains("Recreation")',
        'android=new UiSelector().textContains("ATM")',
        'android=new UiSelector().textContains("Entretainment")',
        'android=new UiSelector().textContains("Community")',
        'android=new UiSelector().textContains("Medical")',
        'android=new UiSelector().textContains("Travel")',
    ]}


    async tapOnSearchField() {
        await this.tapElement()
    }

    async writeLocation(Location) {
        await this.writeOnElement(this.serarchField, Location)
        await this.tapElement(this.suggestedLocation)
    }

    async tapOnMorePOIs() {
        await this.tapElement(this.morePOIs)
    }

    async tapOnPOI(POI) {
        switch (POI) {
            case 'Dealership':
                await this.tapElement(this.POIs[0])
                break
            case 'Gas Stations':
                await this.tapElement(this.POIs[1])
                break
            case 'Restaurants':
                await this.tapElement(this.POIs[2])
                break
            case 'Hotels':
                await this.tapElement(this.POIs[3])
                break
            case 'Charge Stations':
                await this.tapElement(this.POIs[4])
                break
            case 'Shoping':
                await this.tapElement(this.POIs[5])
                break
            case 'Recreation':
                await this.tapElement(this.POIs[6])
                break
            case 'ATM / BAnking':
                await this.tapElement(this.POIs[7])
                break
            case 'Entretainment':
                await this.tapElement(this.POIs[8])
                break
            case 'Community':
                await this.tapElement(this.POIs[9])
                break
            case 'Mwdical Services':
                await this.tapElement(this.POIs[10])
                break
            case 'Travel':
                await this.tapElement(this.POIs[11])
                break
            default:
                break
        }
    }
}

export default new WhereToPage()
