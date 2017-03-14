import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { rollup } from 'rollup';
import clone from 'lodash/cloneDeep';

import bubleConfig from './config/buble.config';

let cache;

const config = {
  entry: 'src/index.js',
  targets: [
    { format: 'es', dest: `dist/${pack.name}.esm.js` },
    { format: 'cjs', dest: `dist/${pack.name}.common.js` },
  ],
  plugins: [
    vue({
      css: true,
    }),
    buble(bubleConfig),
  ],
  useStrict: false,
  cache,
};

// --- DO NOT CHANGE BEYOND THIS ---
if (vueConfig.standalone) {
  const options = clone(config);

  options.entry = 'src/index.js';
  options.targets = [];
  options.plugins = [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs(),
  ].concat(options.plugins);

  rollup(options).then((bundle) => bundle.write({
    format: 'iife',
    dest: `dist/${pack.name}.min.js`,
    moduleName: pack.name,
  }));
}

export default config;
