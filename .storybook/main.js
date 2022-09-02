module.exports = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    emotionAlias: false,
  },
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  }
}
