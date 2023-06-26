const path = require("path");

module.exports = {
  entry: {
    "target-file": "./examples/target-file.js",
    "import-json": "./examples/import-json.js",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "/dist/examples"),
  },
  module: {
    rules: [
      {
        test: /target-file.js$/,
        use: [
          {
            loader: "index",
          },
        ],
      },
      {
        test: /executable-file.json$/,
        use: [
          {
            loader: "index",
            options: {
              executableFile: path.resolve(
                __dirname,
                "examples",
                "libs",
                "executable-file.js"
              ),
            },
          },
        ],
      },
    ],
  },
  // 配置loader解析规则
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "dist/")],
  },
};
