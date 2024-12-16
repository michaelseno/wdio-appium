const { expect, driver } = require('@wdio/globals')
const LandingPage = require('../pageobjects/landing.page')

describe('WDIO Demo Application', () => {
    it('should be routed to landing page', async () => {
        await expect(LandingPage.menuHome).toBeExisting()
        await expect(LandingPage.menuLogin).toBeExisting()
        await expect(LandingPage.menuDrag).toBeExisting()
        await expect(LandingPage.menuForm).toBeExisting()
        await expect(LandingPage.menuSwipe).toBeExisting()
        await expect(LandingPage.menuWebView).toBeExisting()
    })
})

