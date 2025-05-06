import { PromiseExecutor } from '@nx/devkit';
import { join } from 'path';
import { VerifyTestsExecutorSchema } from './schema';
import { glob } from 'glob'
import { CONFIG } from "@bitovi-distribute-task-execution-example/config";
import { getGeneratedDir } from '../utilities';
import { writeFile } from 'fs-extra';

const getPreventCacheFlag = () => {
  return !!CONFIG.preventCache;
}

const generateNonce = () => `# This is a generated file to prevent e2e tests from being cached.
${Date.now()}
`

const getNumberOfTests = () => {
  if (typeof CONFIG.numberOfTests !== 'number') {
    throw new Error('Unexpected missing numberOfTests from config.json');
  }

  return CONFIG.numberOfTests;
}

const runExecutor: PromiseExecutor<VerifyTestsExecutorSchema> = async (
  options,
  context
) => {
  console.log('🔍 Verifying e2e tests...');

  const shouldGenerateNonce = getPreventCacheFlag();

  if (shouldGenerateNonce) {
    console.log('🔃 Preventing e2e tast cache...');
    await writeFile(join(context.root, 'nonce.txt'), generateNonce());
  }

  const numberOfTests = getNumberOfTests();

  const { fullPath } = await getGeneratedDir(context);

  const generatedTests = await glob(join(fullPath, '**/*.ts'), { ignore: 'node_modules/**' });

  if (generatedTests.length !== numberOfTests) {
    console.error(`❌ Unexpected number of generated e2e tests. Be sure to run "nx generate-tests demo-e2e" and commit the generated tests.`);

    return { success: false };
  }

  console.log(`✅ ${numberOfTests} e2e tests exist. You can customize behavior at "shared/config/config.json".`);

  return { success: true, outputs: [] };
};

export default runExecutor;
