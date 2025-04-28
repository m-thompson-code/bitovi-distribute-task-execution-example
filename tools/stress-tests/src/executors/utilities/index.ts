import { createProjectGraphAsync, ExecutorContext } from '@nx/devkit';
import { resolve } from 'path';

export const getGeneratedDir = async (context: ExecutorContext) => {
  const projectName = context.projectName;

  if (!projectName) {
    throw new Error('❌ Unexpected missing project name from context.');
  }

  const projectGraph = await createProjectGraphAsync();
  const projectRoot = projectGraph.nodes[projectName].data.root;
  const fullPath = resolve(context.root, projectRoot, 'src/generated');

  return {
    fullPath,
    outputPath: `${projectRoot}/src/generated`,
  } as const;
}
