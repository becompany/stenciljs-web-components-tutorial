import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'becompany',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
