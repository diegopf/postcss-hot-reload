const path = require("path");
const { defineConfig } = require('@vue/cli-service')

const postcssCustomPlugin = (opts = {}) => {
  return {
    postcssPlugin: "postcss-custom-plugin",
    Once: (root, { result }) => {
      result.messages.push({
        type: "dependency",
        file: path.resolve(__dirname, "colors.js"),
      });
    },
  };
};

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [postcssCustomPlugin()]
        }
      }
    }
  }
})
