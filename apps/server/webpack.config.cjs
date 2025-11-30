// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const nodeExternals = require("webpack-node-externals");
const isProduction = process.env.NODE_ENV == "production";

const { spawn } = require("child_process");

function OnFirstBuildDonePlugin() {
  let isInitialBuild = true;
  return {
    apply: (compiler) => {
      compiler.hooks.done.tap("OnFirstBuildDonePlugin", (compilation) => {
        if (isInitialBuild) {
          isInitialBuild = false;
          spawn("nodemon dist/main.js --watch dist", {
            stdio: "inherit",
            shell: true,
          });
        }
      });
    },
  };
}

const config = {
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  target: "node",
  externals: [
    nodeExternals({
      additionalModuleDirs: ["../../node_modules"],
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@repo/common": path.resolve(__dirname, "../../libs/common/src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.devtool = false;
    config.mode = "production";
  } else {
    config.mode = "development";
    config.plugins = [OnFirstBuildDonePlugin()];
  }
  return config;
};
