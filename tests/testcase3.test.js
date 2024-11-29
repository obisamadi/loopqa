const { test, expect } = require('@playwright/test');

test('Login to Asana, Navigate to project, Verify "Share timeline with teammates" in "To do" column and check tags', async ({ page }) => {
  // 1. Login to Asana
  const url = 'https://app.asana.com/-/login';
  const email = 'ben+pose@workwithloop.com';
  const password = 'Password123';

  await page.goto(url); 
  await page.fill('//input[@type="email" and @name="e"]', email);
  await page.click('//div[contains(@class, "LoginEmailForm-continueButton") and text()="Continue"]');
  await page.fill('//input[@type="password" and @name="p"]', password);
  await page.click('//div[contains(@class, "LoginPasswordForm-loginButton") and text()="Log in"]');
  await page.waitForTimeout(6000);
  await page.waitForSelector('//h1[text()="Home"]'); // Ensure successful login

  // 2. Navigate to "Cross-functional project plan, Project"
  await page.click('//span[text()="Cross-functional project plan, Project"]');
  await page.waitForTimeout(6000);


  // 3. Verify "Share timeline with teammates" is in the "To do" column
  const toDoColumn = page.locator('//*[@id="asana_main_page"]/div[1]/div[1]/div[1]/div[2]/div[2]/div/div[1]/div[3]/div[1]/div/div/div/div[2]/div[1]/h3');
  await toDoColumn.waitFor({ state: 'visible' });
  await expect(toDoColumn).toBeVisible();
  const taskInToDoColumn = page.locator('//span[text()="Share timeline with teammates"]');
  await expect(taskInToDoColumn).toBeVisible();

  // 4. Confirm tags: "High" and "Off track"
  const highTag = page.locator('//span[text()="High"]');
  const offTrackTag = page.locator('//span[text()="Off track"]');
  
  await expect(highTag).toBeVisible();
  await expect(offTrackTag).toBeVisible();
});
