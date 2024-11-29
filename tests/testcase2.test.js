const { test, expect } = require('@playwright/test');

test('Login to Asana, Navigate to project, Verify "Schedule kickoff meeting" in "To do" column and check tags', async ({ page }) => {
  // 1. Login to Asana
  const url = 'https://app.asana.com/-/login';
  const email = 'ben+pose@workwithloop.com';
  const password = 'Password123';

await page.goto('https://app.asana.com/-/login'); 
await page.fill('//input[@type="email" and @name="e"]', 'ben+pose@workwithloop.com');
await page.click('//div[contains(@class, "LoginEmailForm-continueButton") and text()="Continue"]');
await page.fill('//input[@type="password" and @name="p"]', 'Password123');
await page.click('//div[contains(@class, "LoginPasswordForm-loginButton") and text()="Log in"]');
await page.waitForTimeout(6000);
await page.waitForSelector('//h1[text()="Home"]');
// Wait for successful login, page navigation to "Home"
await page.waitForTimeout(4000);
await page.waitForSelector('//h1[text()="Home"]');

// 2. Navigate to "Cross-functional project plan, Project"
await page.click('//span[text()="Cross-functional project plan, Project"]');
await page.waitForTimeout(6000);

// 3. Verify "Schedule kickoff meeting" is in the "To do" column
const toDoColumn = page.locator('//*[@id="asana_main_page"]/div[1]/div[1]/div[1]/div[2]/div[2]/div/div[1]/div[3]/div[1]/div/div/div/div[2]/div[1]/h3');
await expect(toDoColumn).toBeVisible();
const taskInToDoColumn = page.locator('//span[contains(@class, "TypographyPresentation--medium") and contains(text(), "Schedule kickoff meeting")]');
await expect(taskInToDoColumn).toBeVisible();

// 4. Confirm tags: "Medium" and "At risk"
const mediumTag = page.locator('//span[text()="Medium"]');
const atRiskTag = page.locator('//span[text()="At risk"]');

await expect(mediumTag).toBeVisible();
await expect(atRiskTag).toBeVisible();
});
