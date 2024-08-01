module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
      [
        'module-resolver',
        {
          extensions: ['.png', '.svg', '.ts', '.tsx'],
          root: ['./'],
          alias: {
            '@types': './src/types',
          },
        },
      ],
    ],
  };
};
