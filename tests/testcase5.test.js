const { test, expect } = require('@playwright/test');

test('Login to Asana, Navigate to Work Requests, Verify "[Example] Password not working" in "In Progress" column and check tags', async ({ page }) => {
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
  await page.waitForSelector('//h1[text()="Home"]'); 

  // 2. Navigate to "Work Requests"
  await page.click('//span[text()="Work Requests"]');
  await page.waitForTimeout(6000);


  // 3. Verify "[Example] Password not working" is in the "In Progress" column
  const taskInProgressColumn = page.locator('//span[@class="TypographyPresentation TypographyPresentation--medium BoardCard-taskName" and text()="[Example] Password not working"]');
  await taskInProgressColumn.waitFor({ state: 'visible', timeout: 10000 });
  await expect(taskInProgressColumn).toBeVisible();

  // 4. Confirm tags: "Low effort," "Low priority," "Password reset," and "Waiting"
  const lowEffortTag = page.locator('//span[text()="Low effort"]').nth(2);
  const lowPriorityTag = page.locator('//span[text()="Low priority"]');
  const passwordResetTag = page.locator('//span[text()="Password reset"]');
  const waitingTag = page.locator('//span[text()="Waiting"]');
  
  await expect(lowEffortTag).toBeVisible();
  await expect(lowPriorityTag).toBeVisible();
  await expect(passwordResetTag).toBeVisible();
  await expect(waitingTag).toBeVisible();
});
