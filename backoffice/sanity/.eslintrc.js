module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
      browser: true,
      node: true,
  },
  plugins: ["simple-import-sort", "import", "@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:prettier/recommended", "plugin:@typescript-eslint/recommended"],
  noInlineConfig: false,
  rules: {
      "no-console": ["error", { allow: ["error"] }],
      "@typescript-eslint/no-unused-vars": "warn",
      "no-var": "error",
      "no-unused-vars": "warn",
      "object-shorthand": "error",
      "prefer-const": "error",
      "prefer-template": "error",
      "prefer-destructuring": "warn",
      "prefer-rest-params": "warn",
      "prefer-spread": "warn",
      yoda: "error",
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "max-len": ["error", { code: 120, ignoreStrings: true }],
      "prettier/prettier": [
          "error",
          {
              printWidth: 120, // Esto debe coincidir con max-len
              tabWidth: 4,
              endOfLine: "auto",
          },
      ],
  },
  settings: {
      "import/resolver": {
          node: {
              moduleDirectory: ["node_modules", "src"],
          },
      },
      react: {
          createClass: "createReactClass", // Regex for Component Factory to use,
          // default to "createReactClass"
          pragma: "React", // Pragma to use, default to "React"
          fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
          version: "detect", // React version. "detect" automatically picks the version you have installed.
          // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
          // default to latest and warns if missing
          // It will default to "detect" in the future
          flowVersion: "0.53", // Flow version
      },
  },
};
