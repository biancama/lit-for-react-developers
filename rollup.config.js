// rollup.config.js
import merge from 'deepmerge';
import json from '@rollup/plugin-json';
import { createSpaConfig } from '@open-wc/building-rollup';

const baseConfig = createSpaConfig({
    developmentMode: process.env.ROLLUP_WATCH === 'true',
    injectServiceWorker: false
});

export default merge(baseConfig, {
    // any <script type="module"> inside will be bundled by rollup
    input: './index.html',
    plugins: [json()]
});
