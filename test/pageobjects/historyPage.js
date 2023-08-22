class HistoryPage {
  get videoTitles () { return $$('a[id="video-title"]') }
  get closeButton () { return $('.ytp-miniplayer-scrim button[aria-label="Закрыть"]') }
  get miniVideo () { return $('.style-scope ytd-browse-feed-actions-renderer') }
  get clearHistoryButton () { return $('button[aria-label="Очистить историю просмотра"]') }
  get confirmButton () { return $('.style-scope yt-confirm-dialog-renderer #confirm-button') }
  get emptyHistoryMessage () { return $('.style-scope ytd-section-list-renderer #message') }

  async closeMiniVideo() {
      await this.miniVideo.waitForDisplayed();
      await this.closeButton.click();
  }

  async checkVideoIsExisting(videoTitle) {
      const videoTitles = await this.videoTitles;
      const titles = [];
      for (const title of videoTitles) {
          titles.push(await title.getText());
      }
      const res = titles.includes(videoTitle);  

      return res;
  }

  async clearHistory () {
      await this.clearHistoryButton.click();
      await this.confirmButton.waitForDisplayed();
      await this.confirmButton.click();
  }
}

export default HistoryPage;