import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import WatchLaterPage from '../pageobjects/watchLaterPage.js';
import HistoryPage from '../pageobjects/historyPage.js';

const homePage = new HomePage();
const loginPage = new LoginPage();
const watchLaterPage = new WatchLaterPage();
const historyPage = new HistoryPage();

describe('Check watch later and history functionality', () => {
    let firstVideoTitle;
    let firstVideoIndex;

    before(async () => {
        await homePage.open();
        await loginPage.login('tt5684545@gmail.com', 'Test1234!');
    });

    it('Check youtube url is correct', async () => {
        await expect(browser).toHaveUrl('https://www.youtube.com/');
    });
    
    it('Check settings', async () => {
        firstVideoTitle = await homePage.videoTitle[0].getText();
        await homePage.clickVideoSettings();
        
        await expect(homePage.videoSettingsModal).toBeDisplayed();
    });
    
    it('Add to watch later', async () => {
        await homePage.clickWatchLatterButton();
        await homePage.clickMenu();
        await homePage.clickMenuWatchLatterButton();
        firstVideoIndex =  await watchLaterPage.videoIndexByTitle(firstVideoTitle);
        
        await expect(firstVideoIndex !== -1).toBeTruthy();
    });
    
    it('Open video from watch later', async () => {
        await watchLaterPage.openVideo(firstVideoIndex);
        const elem = await watchLaterPage.openedVideoTitle;
        await elem.waitForDisplayed();

        await expect(elem).toHaveText(firstVideoTitle);
    });
    
    it('Check history', async () => {
        await homePage.clickMenu();
        await homePage.clickMenuHistoryButton();
        await historyPage.closeMiniVideo();
        const isExist = await historyPage.checkVideoIsExisting(firstVideoTitle);

        await expect(isExist).toBeTruthy();
    });
    
    it('Clear history', async () => {
        await historyPage.clearHistory();
        const isExist = await $('a[id="video-title"]').isDisplayed();

        await expect(!isExist).toBeTruthy();
    });
    
    after(async () => {
        await homePage.logout();
    });
});