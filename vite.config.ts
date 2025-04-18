const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'qsomap',
      fileName: (format) => `qsomap.${format}.js`
    }
  },
  css: {
    modules: false,
  }
});

