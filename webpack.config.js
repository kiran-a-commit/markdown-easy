const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "self",
    projectName: "markdown-easy-main",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    resolve: {
      extensions: [".ts", ".json", ".tsx", ".js", ".jsx"],
      alias: {
        process: "process/browser"
      }
    }
  });
};
