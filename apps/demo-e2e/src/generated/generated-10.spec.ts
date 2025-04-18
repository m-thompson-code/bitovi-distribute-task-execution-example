
import { test, expect } from '@playwright/test';

test('has count title 10', async ({ page }) => {
  await page.goto('/count/10');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  expect(innerText).toContain('10');
});
