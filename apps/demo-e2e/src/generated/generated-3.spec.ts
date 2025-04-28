// Generated file
import { test, expect } from '@playwright/test';

test('has count title 3', async ({ page }) => {
  await page.goto('/3');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  expect(innerText).toContain('3');
});
