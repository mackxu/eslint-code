"use strict";

const eslintPluginExample = require("./eslint-plugin-example");

module.exports = [{
  files: ["*.js"],
  plugins: {
    "example": eslintPluginExample
  },
  rules: {
    "example/enforce-foo-bar": "error"
  }
}];
