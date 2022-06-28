import { Config } from '@stencil/core';
import resolvePkg from 'resolve-pkg';

export const config: Config = {
  namespace: 'tree-debug',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          // Copy the calcite system under a folder so we can test with the correct version.
          // Another solution would have been to use a CDN but introduce potential version issues.
          src: resolvePkg('@esri/calcite-components/dist/calcite') ?? './temp',
          dest: 'vendor/calcite-components',
        },
      ],
    },
  ],
};
