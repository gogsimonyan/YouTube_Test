class WatchLaterPage {
  get watchLaterVideoTitles () { return $$('.style-scope ytd-playlist-video-renderer h3') }
  get watchLaterContainer () { return $('.immersive-header-content .thumbnail-and-metadata-wrapper') }
  get openedVideoTitle () { return $('.style-scope ytd-watch-metadata h1') }

  async videoIndexByTitle (videoTitle) {
      await this.watchLaterContainer.waitForDisplayed();

      const videoTitles = await this.watchLaterVideoTitles;
      const titles = [];
      for (const title of videoTitles) {
          titles.push(await title.getText());
      }
      const firstVideoIndex = titles.indexOf(videoTitle);

      return firstVideoIndex;
  }

  async openVideo(videoIndex) {
      const video = await this.watchLaterVideoTitles[videoIndex];
      await video.click();
  }
}

export default WatchLaterPage;