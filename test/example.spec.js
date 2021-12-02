const { test, expect, browser } = require('@playwright/test');

test('basic test', async ({ page, browser }) => {
  await page.goto('https://app.chatmosphere.cc/session/chatmosphere');
  await page.waitForTimeout(10000);
  const tmpTm = Date.now()
  await page.screenshot({ path: `screenshot-${tmpTm}.png` });
  await browser.close();
});