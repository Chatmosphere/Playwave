const { chromium } = require('playwright');
const faker = require('faker');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

(async () => {
  const launchOptions = {
    // slowMo: 50,
    // headless: false,
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
      // '--use-file-for-fake-video-capture=assets/FourPeople_1280x720_60.y4m',
      // '--use-file-for-fake-audio-capture=assets/fakeAudioStream.wav',
    ]
  }
  // '--use-file-for-fake-video-capture=assets/example.y4m',
  
  var randomName = faker.name.findName();
  const browser = await chromium.launch(launchOptions);
  const page = await browser.newPage()
  // Create pages, interact with UI elements, assert values

  console.log(process.env.TARGET_URL);
  await page.goto(process.env.TARGET_URL);
  
  // Click text=Friendly Sphere
  await page.click('text=Friendly Sphere');
  
  // Fill [placeholder="Friendly Sphere"]
  await page.fill('[placeholder="Friendly Sphere"]', randomName);
  
  // Press Enter
  // await page.press('#DragElement > .sc-kfzAmx.gpdyeJ', 'Enter');
  await page.press(`.sc-kfzAmx.gpdyeJ`, 'Enter');

  // Drag #DragElement video
  const elementHandle = await page.$('#DragElement div')
  const elBoundingBox = await elementHandle.boundingBox()
  let mouse = page.mouse
  mouse.move(elBoundingBox.x +elBoundingBox.width/2, elBoundingBox.y +elBoundingBox.height/2)
  await page.waitForTimeout(100);
  // mouse.click(elBoundingBox.x +elBoundingBox.width/2, elBoundingBox.y +elBoundingBox.height/2)
  mouse.down()
  await page.waitForTimeout(500);
  mouse.move(getRandomInt(-600,600), getRandomInt(-600,600));
  await page.waitForTimeout(1000);
  mouse.up()
  // Time Out
  await page.waitForTimeout(20000);

  // Screenshot with current time - page.screenshot({ path: `example.png` });
  const tmpTm = Date.now()
  await page.screenshot({ path: `screenshot-${tmpTm}.png` });
  // Close Browser
  // await browser.close();
})();