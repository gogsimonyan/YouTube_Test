import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Header test', () => {
    before(async () => {
        await homePage.open();
        await loginPage.login('tt5684545@gmail.com', 'Test1234!');
    });
    
    it('Check youtube url is correct', async () => {
        await expect(browser).toHaveUrl('https://www.youtube.com/');
    });
    
    it('Check logo is displayed', async () => {
        const isDisplayed = homePage.youtubeLogo.isDisplayed();
        
        await expect(isDisplayed).toBeTruthy();
    });

    it('Check burger menu button is displayed', async () => {
        const isDisplayed = homePage.menuButton.isDisplayed();
        
        await expect(isDisplayed).toBeTruthy();
    });
    
    it('Check search input is displayed', async () => {
        const isDisplayed = homePage.searchForm.isDisplayed();

        await expect(isDisplayed).toBeTruthy();
    });
    
    it('Check search input has search button', async () => {
        const isDisplayed = homePage.searchButton.isDisplayed();
        
        await expect(isDisplayed).toBeTruthy();
    });

    it('Check microphone button is exist', async () => {
        const isDisplayed = homePage.microphoneButton.isExist();
        
        await expect(isDisplayed).toBeTruthy();
    });
    
    it('Check create button is exist', async () => {
        const isDisplayed = homePage.createButton.isExist();
        
        await expect(isDisplayed).toBeTruthy();
    });
    
    after(async () => {
        await homePage.logout();
    });
});