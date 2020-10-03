module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
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