module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.ts',
      './src/**/*.vue',
    ],
  },
  theme: {},
  variants: {},
  plugins: [],
};