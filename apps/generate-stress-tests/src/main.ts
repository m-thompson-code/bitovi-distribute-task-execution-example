import { emptyDir, ensureDir, writeFile } from "fs-extra";
import { join, resolve } from "path";
import { workspaceRoot } from '@nx/devkit';
import { CONFIG } from '@bitovi-distribute-task-execution-example/config';

const getNumberOfTests = () => {
  if (typeof CONFIG.numberOfTests !== 'number') {
    throw new Error('Unexpected missing numberOfTests from config.json');
  }

  return CONFIG.numberOfTests;
}

const GENERATED_ROOT = resolve(workspaceRoot, 'apps/demo-e2e/src/generated');

const generateE2ETest = (index: number) => `
import { test, expect } from '@playwright/test';

test('has count title ${index}', async ({ page }) => {
  await page.goto('/${index}');

  const innerText = await page.locator('h1.header').innerText();
  console.log('innerText', innerText);
  expect(innerText).toContain('${index}');
});
`;

const main = async () => {
  console.log(GENERATED_ROOT);

  await ensureDir(GENERATED_ROOT);
  await emptyDir(GENERATED_ROOT);

  const promises = Array.from({ length: getNumberOfTests() }, (_, i) => i)
    .map(index => writeFile(join(GENERATED_ROOT, `generated-${index}.spec.ts`), generateE2ETest(index)));

  await Promise.all(promises);
};

main();
