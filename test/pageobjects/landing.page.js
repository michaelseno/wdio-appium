const { $ } = require('@wdio/globals')
const Page = require('./page');

class LandingPage extends Page {
    
    get menuHome () {
       const android = $('//android.widget.TextView[@text="Home"]');
       const ios = $('//XCUIElementTypeButton[@name="Home"]');
       const currentSelector = driver.isAndroid ? android : ios
       return currentSelector
    }
    get menuWebView () {
        const android = $('//android.widget.TextView[@text="Webview"]');
        const ios = $('//XCUIElementTypeButton[@name="Webview"]');
        const currentSelector = driver.isAndroid ? android : ios
       return currentSelector
    }
    get menuLogin () {
        const android = $('//android.widget.TextView[@text="Login"]');
        const ios = $('//XCUIElementTypeButton[@name="Login"]');
        const currentSelector = driver.isAndroid ? android : ios
       return currentSelector
    }
    get menuForm () {
        const android = $('//android.widget.TextView[@text="Forms"]');
        const ios = $('//XCUIElementTypeButton[@name="Forms"]');
        const currentSelector = driver.isAndroid ? android : ios
       return currentSelector
    }
    get menuSwipe () {
        const android = $('//android.widget.TextView[@text="Swipe"]');
        const ios = $('//XCUIElementTypeButton[@name="Swipe"]');
        const currentSelector = driver.isAndroid ? android : ios
       return currentSelector
    }
    get menuDrag () {
        const android = $('//android.widget.TextView[@text="Drag"]');
        const ios = $('//XCUIElementTypeButton[@name="Drag"]');
        const currentSelector = driver.isAndroid ? android : ios
       return currentSelector
    }
}
module.exports = new LandingPage();