// Generated file
import { test, expect } from '@playwright/test';

test('has count title 2', async ({ page }) => {
  await page.goto('/2');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  expect(innerText).toContain('2');
});
