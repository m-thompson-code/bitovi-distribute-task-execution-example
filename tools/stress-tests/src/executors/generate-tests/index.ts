import { PromiseExecutor } from '@nx/devkit';
import { join } from 'path';
import { GenerateTestsExecutorSchema } from './schema';
import { emptyDir, ensureDir, writeFile } from 'fs-extra';

import { CONFIG } from "@bitovi-distribute-task-execution-example/config";
import { getGeneratedDir } from '../utilities';

const getNumberOfTests = () => {
  if (typeof CONFIG.numberOfTests !== 'number') {
    throw new Error('Unexpected missing numberOfTests from config.json');
  }

  return CONFIG.numberOfTests;
}

const generateTest = (index: number) => `// Generated file
import { test, expect } from '@playwright/test';

test('has count title ${index}', async ({ page }) => {
  await page.goto('/${index}');
  const innerText = await page.locator('h1.header').innerText();
  expect(innerText).toContain('${index}');
});

// eslint-disable-next-line no-empty-pattern
test.afterEach(async ({}, testInfo) => {
  console.log(\`Test ${index} took \${testInfo.duration}ms\`);
});
`;

const runExecutor: PromiseExecutor<GenerateTestsExecutorSchema> = async (
  options,
  context
) => {
  console.log('🚀 Generating e2e tests...');

  const { fullPath, outputPath } = await getGeneratedDir(context);

  await ensureDir(fullPath);
  await emptyDir(fullPath);

  const numberOfTests = getNumberOfTests();

  const promises = Array.from({ length: numberOfTests }, (_, i) => i)
    .map(index => writeFile(join(fullPath, `generated-${index}.spec.ts`), generateTest(index)));

  await Promise.all(promises);

  console.log(`📝 ${numberOfTests} e2e tests are generated. You can customize behavior at "shared/config/config.json"`);

  return { success: true, outputs: [outputPath] };
};

export default runExecutor;
