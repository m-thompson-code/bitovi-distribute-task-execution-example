import { test, expect } from '@playwright/test';

test('has home title', async ({ page }) => {
  await page.goto('/');

  expect(await page.locator('h1').innerText()).toContain('Hello World');
});
