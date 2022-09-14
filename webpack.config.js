const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
// const path = require("path");
module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  // entry: "./src/js/main.js",
  // output: {
  //   filename: "main.js",
  //   path: path.resolve(__dirname, "dist"),
  // },
  // devServer: {
  //   static: path.resolve(__dirname, "dist"),
  //   port: 8080,
  //   hot: true,
  // },
};
