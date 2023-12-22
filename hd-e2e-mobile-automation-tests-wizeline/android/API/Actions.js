export default class Actions {

    async findElement(selector) {
        const element = await $(selector)
        return element
    }
    
    async waitForElement(selector) {
        const element = await this.findElement(selector)
        return element.waitForDisplayed({ timeout: 300000 })
    }

    async elementDisplyed(selector) {
        const element = await $(selector)
        await this.waitForElement(selector)
        return element.isDisplayed()
    }

    async waitForElementClickable(selector) {
        const element = await $(selector)
        await this.elementDisplyed(selector)
        await element.waitForEnabled({ timeout: 300000 })
    }

    async waitForNonDisplay(selector) {
        const element = $(selector)
        await element.waitForDisplayed({ reverse: true, timeout: 300000 })
    }

    async tapElement(selector) {
        const element = await $(selector)
        await this.elementDisplyed(selector)
        await element.click()
    }

    async writeOnElement(selector, text) {
        const element = await $(selector)
        await this.elementDisplyed(selector)
        await element.clearValue(selector)
        await element.setValue(text)
    }

    async dragAndDropOnLocation(selector, xPoint, yPoint) {
        const element = await $(selector)
        await this.elementDisplyed(selector)
        await element.dragAndDrop({ x: xPoint, y: yPoint })
    }

    async dragAndDropOnElement(selector, locator) {
        const element = await $(selector)
        const target = await $(locator)
        await this.elementDisplyed(element)
        await this.elementDisplyed(target)
        await element.dragAndDrop(target, 20)
    }

    async swipeUpToElementAndTap(selector) {
        await this.swipeUpToElement(selector)
        await this.tapElement(selector)
    }

    async swipeDownToElementAndTap(selector) {
        await this.swipeDownToElement(selector)
        await this.tapElement(selector)
    }

    async getElementLocation(selector) {
        const element = await $(selector)
        await this.elementDisplyed(selector)
        const location = await element.getLocation()
        return location
    }

    async getElementText(selector) {
        const element = await $(selector)
        await this.elementDisplyed(selector)
        const text = await element.getText()
        return text
    }

    async swipeUpToElement(selector) {
        const xStart = 360
        const yStart = 400
        const xEnd = 360
        const yEnd = 800
        await this.swipeToElement(selector, xStart, yStart, xEnd, yEnd)
    }

    async swipeDownToElement(selector) {
        const xStart = 360
        const yStart = 800
        const xEnd = 360
        const yEnd = 400
        await this.swipeToElement(selector, xStart, yStart, xEnd, yEnd)
    }

    async swipeToElement(selector, xStart, yStart, xEnd, yEnd) {
        const element = await $(selector)
        while (await element.isExisting() === false) {
           await this.swipeScreen(xStart, yStart, xEnd, yEnd) 
        }
    }

    async swipeScreen(xStart, yStart, xEnd, yEnd) {
        await driver.touchPerform([
            { 
                action: 'press', 
                options: { 
                    x: xStart, 
                    y: yStart 
                }
            },
            { 
                action: 'wait', 
                options: { 
                    ms: 1000
                }
            },
            { 
                action: 'moveTo', 
                options: { 
                    x: xEnd,
                    y: yEnd
                }
            },
            { action: 'release' }
        ])
    }
}