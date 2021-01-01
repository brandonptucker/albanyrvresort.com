const webpack = require('webpack'); // eslint-disable-line

export default {
  target: 'static',
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
  },
  css: ['@/styles/main.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    ],
    title: 'Albany RV Resort',
  },
  plugins: [
    { src: '~/plugins/font-awesome' },
    { src: '~/plugins/ga', ssr: false },
    { src: '~/plugins/vee-validate' },
  ],
};
