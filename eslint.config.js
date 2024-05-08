import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    name: "Root .js files only",
    files: ["*.js"],
    rules: {
      "no-constant-condition": ["off"]
    }
  },
  {
    name: "All .js files",
    files: ["**/*.js"],
    rules: {
      "curly": ["error", "all"]
    }
  }
];