import { test, expect } from '@playwright/test';

test('has count title 0', async ({ page }) => {
  await page.goto('/count/0');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  // expect(innerText).toContain('0');

  // await page.goto('/count/1');

  // const innerText2 = await page.locator('h1.header').innerText();
  // console.log('innerText2', innerText);
  // expect(innerText2).toContain('1');

  // await page.goto('/count/2');

  // const innerText3 = await page.locator('h1.header').innerText();
  // console.log('innerText3', innerText);
  // expect(innerText3).toContain('2');
});

test('has count title 1', async ({ page }) => {
  await page.goto('/count/1');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  expect(innerText).toContain('1');
});

test('has count title 2', async ({ page }) => {
  await page.goto('/count/2');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  expect(innerText).toContain('2');
});

test('has count title 3', async ({ page }) => {
  await page.goto('/count/3');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  expect(innerText).toContain('3');
});

test('has count title 4', async ({ page }) => {
  await page.goto('/count/4');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  expect(innerText).toContain('4');
});
