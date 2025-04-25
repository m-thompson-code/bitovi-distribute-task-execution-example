import { createProjectGraphAsync, PromiseExecutor } from '@nx/devkit';
import { join, resolve } from 'path';
import { GenerateTestsExecutorSchema } from './schema';
import { emptyDir, ensureDir, writeFile } from 'fs-extra';

import { CONFIG } from "@bitovi-distribute-task-execution-example/config";

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
  console.log('innerText', innerText);
  expect(innerText).toContain('${index}');
});
`;

const runExecutor: PromiseExecutor<GenerateTestsExecutorSchema> = async (
  options,
  context
) => {
  console.log('🚀 Generating e2e tests...');

  const projectName = context.projectName;

  if (!projectName) {
    console.error('Unexpected missing project name from context');
    return { success: false };
  }

  const projectGraph = await createProjectGraphAsync();
  const projectRoot = projectGraph.nodes[projectName].data.root;
  const generatedDir = resolve(context.root, projectRoot, 'src/generated');

  await ensureDir(generatedDir);
  await emptyDir(generatedDir);

  const numberOfTests = getNumberOfTests();

  const promises = Array.from({ length: numberOfTests }, (_, i) => i)
    .map(index => writeFile(join(generatedDir, `generated-${index}.spec.ts`), generateTest(index)));

  await Promise.all(promises);

  console.log(`📝 ${numberOfTests} e2e tests are generated. You can customize behavior at "shared/config/config.json"`);

  return { success: true, outputs: [`${projectRoot}/src/generated`] };
};

export default runExecutor;
