/// <reference types='vitest' />
import { defineConfig, PluginOption } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import { resolve } from 'path';
import { CONFIG } from '@bitovi-distribute-task-execution-example/config';

/**
 * Promise wrapper for setTimeout
 */
const delay = (milliseconds: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, milliseconds) );
}

const getServeTime = () => {
  if (typeof CONFIG.serveTime !== 'number') {
    throw new Error('Unexpected missing serveTime from config.json');
  }

  return CONFIG.serveTime;
}

/**
 * Plugin used to delay serving application. This is used to verify how long it
 * takes for each TODO to function in parallel.
 */
const delayDevStart: () => PluginOption = () => {
  return {
    name: 'delay-dev-start',
    async configureServer() {
      const delayTime = getServeTime();

      console.log(`⌛ Delaying for ${delayTime}...`);
      await delay(CONFIG.serveTime);
      console.log('🟢 Delay finished');
    }
  }
};

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/demo',
  server: {
    port: 4200,
    host: 'localhost',
  },
  // preview: {
  //   port: 4300,
  //   host: 'localhost',
  // },
  plugins: [delayDevStart(), !process.env.VITEST && reactRouter()],
  build: {
    outDir: './dist',
    ssr: false,
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  // test: {
  //   watch: false,
  //   globals: true,
  //   environment: 'jsdom',
  //   include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  //   reporters: ['default'],
  //   coverage: {
  //     reportsDirectory: './test-output/vitest/coverage',
  //     provider: 'v8' as const,
  //   },
  // },
}));
