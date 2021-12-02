// playwright.config.js
// @ts-check
const { devices } = require('@playwright/test');

// @type {import('@playwright/test').PlaywrightTestConfig}
const config = {
  use: {
    trace: 'on-first-retry',
    launchOptions: {
      // slowMo: 50,
      args: [
        '--disable-infobars',
        '--no-sandbox',
        // optional; can be useful in local dev
        '--ignore-certificate-errors',
        '--enable-logging',
        '--verbose',
        // prevent audio error
        '--autoplay-policy=no-user-gesture-required',
        // webrtc
        '--use-fake-ui-for-media-stream',
        '--use-fake-device-for-media-stream',
        // custom fake streams
        '--allow-file-access-from-files',
        '--use-file-for-fake-video-capture=assets/FourPeople_1280x720_60.y4m',
        '--use-file-for-fake-audio-capture=assets/fakeAudioStream.wav',
      ]
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
  ],
};

module.exports = config;