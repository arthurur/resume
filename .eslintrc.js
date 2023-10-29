module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    ".eslintrc.js",
    "public",
    "node_modules",
    "generated",
    "*.js",
    "lib",
    "design",
    "flown-scripts",
    "cypress.config.ts",
  ],
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
    "next",
  ],
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "no-unused-expressions": "error",
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "no-unused-expressions": "error",
    "no-restricted-globals": ["error"].concat(
      require("confusing-browser-globals")
    ),
    "no-console": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          "/features/*/*",
          "/features/*/*/*",
          "!/features/*/server",
          "!/features/*/client",
          "!/features/*/shared",
          "!/features/modular-content/components",
        ],
      },
    ],
    "@next/next/no-img-element": "off",
  },
  settings: {
    react: {
      version: "16.13",
    },
  },
};
