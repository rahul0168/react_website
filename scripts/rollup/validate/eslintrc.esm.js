'use strict';

module.exports = {
  env: {
    commonjs: true,
    browser: true,
  },
  globals: {
    // ES 6
    Map: true,
    Set: true,
    Proxy: true,
    Symbol: true,
    WeakMap: true,
    WeakSet: true,
    Uint16Array: true,
    Reflect: true,
    // Vendor specific
    MSApp: true,
    __REACT_DEVTOOLS_GLOBAL_HOOK__: true,
    // CommonJS / Node
    process: true,
    setImmediate: true,
    Buffer: true,
    // Trusted Types
    trustedTypes: true,

    // Scheduler profiling
    Int32Array: true,
    ArrayBuffer: true,

    TaskController: true,

    // Flight
    Uint8Array: true,
    Promise: true,

    // Flight Webpack
    __webpack_chunk_load__: true,
    __webpack_require__: true,

    // jest
    expect: true,
    jest: true,

    // act
    IS_REACT_ACT_ENVIRONMENT: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    'no-undef': 'error',
    'no-shadow-restricted-names': 'error',
  },

  // These plugins aren't used, but eslint complains if an eslint-ignore comment
  // references unused plugins. An alternate approach could be to strip
  // eslint-ignore comments as part of the build.
  plugins: ['jest', 'no-for-of-loops', 'react', 'react-internal'],
};
