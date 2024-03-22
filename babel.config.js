module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    "nativewind/babel",
    [
      "module-resolver",
      {
        root: ["src"],
        extensions: [".ts", ".tsx", ".js"],
        alias: {
          src: "./src",
        },
      },
    ],
  ],
};
