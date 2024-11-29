const { test, expect } = require('@playwright/test');

test('Login to Asana, Navigate to Work Requests, Verify "[Example] Laptop setup for new hire" in "New Requests" column and check tags', async ({ page }) => {
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

  // 2. Navigate to "Work Requests"
  await page.click('//span[text()="Work Requests"]');
  await page.waitForTimeout(6000);


  // 3. Verify "[Example] Laptop setup for new hire" is in the "New Requests" column
  const newRequestsColumn = page.locator('//*[@id="asana_main_page"]/div[1]/div[1]/div[1]/div[2]/div[2]/div/div[1]/div[3]/div[1]/div/div/div/div[1]/div[1]/h3');
  await newRequestsColumn.waitFor({ state: 'visible', timeout: 10000 });
  await expect(newRequestsColumn).toBeVisible();
  const taskInNewRequestsColumn = page.locator('//span[text()="[Example] Laptop setup for new hire"]');
  await expect(taskInNewRequestsColumn).toBeVisible();

  // 4. Confirm tags: "Medium priority," "Low effort," "New hardware," and "Not Started"
  const mediumPriorityTag = page.locator('//span[text()="Medium priority"]');
  const lowEffortTag = page.locator('//span[text()="Low effort"]').nth(1);
  const newHardwareTag = page.locator('//span[text()="New hardware"]').nth(1);
  const notStartedTag = page.locator('//span[text()="Not Started"]');
  
  await expect(mediumPriorityTag).toBeVisible();
  await expect(lowEffortTag).toBeVisible();
  await expect(newHardwareTag).toBeVisible();
  await expect(notStartedTag).toBeVisible();
});
