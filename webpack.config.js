'use strict';
const path = require('path');
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    include: ['app/web/page',
      { 'app/app': 'app/web/page/app/app.ts?loader=false' }
    ],
    exclude: ['app/web/page/[a-z]+/component'],
    loader: {
      client: 'app/web/framework/vue/entry/client-loader.ts',
      server: 'app/web/framework/vue/entry/server-loader.ts',
    }
  },
  alias: {
    server: 'app/web/framework/vue/entry/server.ts',
    client: 'app/web/framework/vue/entry/client.ts',
    asset: 'app/web/asset',
    component: 'app/web/component',
    framework: 'app/web/framework',
    store: 'app/web/store',
    vue: 'vue/dist/vue.esm.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'],
  loaders: {
    babel: false,
    typescript: {
      test: /\.ts$/,
      exclude: [/node_modules/, /public/],
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
        configFile: path.resolve(__dirname, './app/web/tsconfig.json'),
      }
    }
  },
  plugins: {},
  done() {

  }
};