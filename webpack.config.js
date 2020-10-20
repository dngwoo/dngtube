const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // dist 파일 지워줌.
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 따로 css만 추출

module.exports = {
  mode: "development",
  entry: { main: "./src/assets/main.js" },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader", // js로 읽은 css를 돔에 입혀줌
          "css-loader", // css 파일 읽어서 js로 넣어줌.
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer"]],
              },
            },
          },
          "sass-loader", // node-sass 나 sass 패키지가 필요함. 설치필수
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./src/static"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: `[name].css` })]
      : []),
  ],
};
