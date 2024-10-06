import globals from "globals";
import pluginJs from "@eslint/js";

import helper from "@ddx/eslint-plugin-helper";


export default [
  // { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  // { languageOptions: { globals: globals.browser } },
  // pluginJs.configs.recommended,
  helper.configs.recommended,
];