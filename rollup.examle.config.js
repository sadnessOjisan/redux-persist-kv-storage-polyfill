import typescript from "rollup-plugin-typescript";
import serve from "rollup-plugin-serve";

module.exports = {
  input: "example/src/index.js",
  output: {
    file: "example/output/bundle.js",
    format: "cjs",
  },
  plugins: [typescript(), serve("example/output")],
};
