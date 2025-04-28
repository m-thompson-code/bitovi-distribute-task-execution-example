// Generated file
import { test, expect } from '@playwright/test';

test('has count title 6', async ({ page }) => {
  await page.goto('/6');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  expect(innerText).toContain('6');
});
