const isDev = process.env.NODE_ENV === 'development';
const plugins = [
  ['@babel/plugin-transform-runtime', { corejs: 3 }],
];

module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: false,
          targets: '> 0.5%, last 2 versions, Firefox ESR, not dead, not IE 11',
        },
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: isDev ? [...plugins, 'react-refresh/babel'] : [...plugins],
  };
};
