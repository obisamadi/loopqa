const { test, expect } = require('@playwright/test');

test('Login to Asana, Navigate to Work Requests, Verify "[Example] New keycard for Daniela V" in "Completed" column and check tags', async ({ page }) => {
  // 1. Login to Asana
  const url = 'https://app.asana.com/-/login';
  const email = 'ben+pose@workwithloop.com';
  const password = 'Password123';

  await page.goto(url); 
  await page.fill('//input[@type="email" and @name="e"]', email);
  await page.click('//div[contains(@class, "LoginEmailForm-continueButton")][text()="Continue"]');
  await page.fill('//input[@type="password" and @name="p"]', password);
  await page.click('//div[contains(@class, "LoginPasswordForm-loginButton")][text()="Log in"]');
  await page.waitForTimeout(4000);
  await page.waitForSelector('//h1[text()="Home"]'); // Ensure successful login

  // 2. Navigate to "Work Requests"
  await page.click('//span[text()="Work Requests"]');
  await page.waitForTimeout(6000);


  // 3. Verify "[Example] New keycard for Daniela V" is in the "Completed" column
  const taskInCompletedColumn = page.locator('//span[contains(@class, "TypographyPresentation--medium") and contains(@class, "BoardCard-taskName") and text()="[Example] New keycard for Daniela V"]');
  await taskInCompletedColumn.waitFor({ state: 'visible', timeout: 30000 });
  await expect(taskInCompletedColumn).toBeVisible();

  // 4. Confirm tags: "Low effort," "New hardware," "High Priority," and "Done"
  const lowEffortTag = page.locator('//*[@id="asana_main_page"]/div[1]/div[1]/div[1]/div[2]/div[2]/div/div[1]/div[3]/div[1]/div/div/div/div[4]/div[2]/div/div[2]/div/div/div/div/div/div/div/div[1]/div[6]/div/div[2]/div/span');
  const newHardwareTag = page.locator('//span[text()="New hardware"]').nth(1);
  const highPriorityTag = page.locator('//span[text()="High priority"]');
  const doneTag = page.locator('//span[@class="TypographyPresentation TypographyPresentation--overflowTruncate" and text()="Done"]');
  
  await expect(lowEffortTag).toBeVisible();
  await expect(newHardwareTag).toBeVisible();
  await expect(highPriorityTag).toBeVisible();
  await expect(doneTag).toBeVisible();
});
