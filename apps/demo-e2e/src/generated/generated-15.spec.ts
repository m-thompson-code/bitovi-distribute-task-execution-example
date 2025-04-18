
import { test, expect } from '@playwright/test';

test('has count title 15', async ({ page }) => {
  await page.goto('/count/15');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  expect(innerText).toContain('15');
});
