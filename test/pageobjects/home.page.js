class HomePage {
  get youtubeLogo () { return $('.style-scope #start #logo') }
  get menuButton () { return $('.style-scope #start #guide-icon') }
  get searchForm () { return $('.style-scope #search-form') }
  get searchButton () { return $('.style-scope #search-icon-legacy') }
  get microphoneButton () { return $('.style-scope #voice-search-button') }
  get createButton () { return $('#button a') }
  get videoSettingsModal () { return $('.style-scope ytd-menu-popup-renderer') }
  get videoSettings () { return $('#content .style-scope ytd-rich-item-renderer [aria-label="Меню действий"]') }
  get videoTitle () { return $$('#content .style-scope ytd-rich-item-renderer #video-title') }
  get watchLaterButton () { return $$('.style-scope ytd-menu-service-item-renderer') }
  get menuWatchLaterButton () { return  $('a[title="Смотреть позже"]') }
  get menuHistoryButton () { return $('#section-items a[title="История"]') }
  get guideMenu () { return $('.style-scope ytd-masthead #guide-icon') }
  get avatarButton () { return $('.style-scope #end #avatar-btn') }
  get logoutButton () { return $('.style-scope ytd-multi-page-menu-renderer a[href="/logout"]') }
  get logoutModal () { return $('.style-scope ytd-multi-page-menu-renderer') }

  
  async clickVideoSettings() {
      await this.videoSettings.waitForExist();
      await this.videoSettings.moveTo();
      await this.videoSettings.click({force: true});
  }

  async clickWatchLatterButton () {
      const watchLaterLabel = await this.watchLaterButton[1];

      await watchLaterLabel.waitForDisplayed();
      await watchLaterLabel.click();
  }

  async clickMenuWatchLatterButton () {
      await this.menuWatchLaterButton.waitForDisplayed();
      await this.menuWatchLaterButton.click({force: true});
  }

  async clickMenuHistoryButton () {
      await this.menuHistoryButton.waitForDisplayed();
      await this.menuHistoryButton.click({force: true});
  }

  async clickMenu() {
      await this.guideMenu.click();

  }

  async logout() {
      await this.avatarButton.click();
      await this.logoutModal.waitForDisplayed();
      await this.logoutButton.waitForDisplayed();
      await this.logoutButton.click({force: true});
  }

  open () {
      return browser.url('https://www.youtube.com/');
  }
}

export default HomePage;