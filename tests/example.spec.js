// @ts-check
const { test, expect } = require('@playwright/test');

function takeScreenshots(page, name) {
  // Take a screenshot.
  return page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
}


function menuClick(page, name, selector) {
  page.getByRole('button', { name: name }).click();
  page.waitForSelector(`text=${selector}`);
}

test('has title', async ({ page }) => {
  await page.goto('https://www.quiltingismytherapy.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Quilting Is My Therapy/);

  // scroll to the bottom of the page and back to top to make sure all images are loaded
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(8000);
  await page.evaluate(() => window.scrollTo(0, 0));
  // Take a screenshot.
  await takeScreenshots(page, "home-page");

  
  // Click button with text='Quilt'
  menuClick(page, "Quilt", "Events");
  // take a screenshot
  await takeScreenshots(page, "quilt-menu");

  
  // Click button with text='Shop'
  menuClick(page, "Shop", "Fabric");
  // take a screenshot
  await takeScreenshots(page, "shop-menu");


  // Click button with text='Learn'
  menuClick(page, "Learn", "Classes");
  // take a screenshot
  await takeScreenshots(page, "learn-menu");


  // Click button with text='About'
  menuClick(page, "About", "Our Story");
  // take a screenshot
  await takeScreenshots(page, "about-menu");

});


