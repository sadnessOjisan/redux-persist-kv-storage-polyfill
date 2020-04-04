import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import html from "@rollup/plugin-html";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import typescript from "rollup-plugin-typescript";
const isProd = process.env.NODE_ENV === "production";
const extensions = [".js", ".ts", ".tsx"];

export default {
  input: "example/src/index.tsx",
  output: {
    file: "example/output/bundle.js",
    format: "iife",
  },
  plugins: [
    typescript(),
    replace({
      "process.env.NODE_ENV": JSON.stringify(
        isProd ? "production" : "development"
      ),
    }),
    resolve({
      extensions,
    }),
    commonjs({
      include: /node_modules/,
    }),

    html({
      fileName: "index.html",
      title: "Rollup + TypeScript + React = ❤️",
      template: ({ title }) => {
        return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <link rel="stylesheet" href="/index.css">
</head>
<body>
  <div id="app"></div>
  <script src="/index.js"></script>
</body>
</html>
`;
      },
    }),
    ,
    isProd && terser(),
    !isProd &&
      serve({
        host: "localhost",
        port: 3000,
        open: true,
        contentBase: ["public"],
      }),
    !isProd &&
      livereload({
        watch: "public",
      }),
  ],
};
