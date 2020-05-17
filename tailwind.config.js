module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
    ],
  },
  theme: {},
  variants: {},
  plugins: [],
};