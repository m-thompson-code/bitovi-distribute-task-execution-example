import { test, expect } from '@playwright/test';

test('has count title 0', async ({ page }) => {
  await page.goto('/count/0');

  expect(await page.locator('h1').innerText()).toContain('The current number is 0');
});

test('has count title 1', async ({ page }) => {
  await page.goto('/count/1');

  expect(await page.locator('h1').innerText()).toContain('The current number is 1');
});

test('has count title 2', async ({ page }) => {
  await page.goto('/count/2');

  expect(await page.locator('h1').innerText()).toContain('The current number is 2');
});

test('has count title 3', async ({ page }) => {
  await page.goto('/count/3');

  expect(await page.locator('h1').innerText()).toContain('The current number is 3');
});

test('has count title 4', async ({ page }) => {
  await page.goto('/count/4');

  expect(await page.locator('h1').innerText()).toContain('The current number is 4');
});
