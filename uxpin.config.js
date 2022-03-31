module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'stories/Button.tsx',
          'stories/Header.tsx',
          'stories/Page.tsx',
        ]
      }
    ],
    webpackConfig: 'uxpin.webpack.config.js'
  },
  name: 'UXPin Merge + TypeScript + Storybook'
}
