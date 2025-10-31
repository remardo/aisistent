// @ts-check
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import reactRefresh from "eslint-plugin-react-refresh";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    ignores: ["node_modules", "build", "dist"],
    settings: { react: { version: "detect" } },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat?.recommended ?? {},
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" },
      "import/resolver": {
        typescript: { project: ["./tsconfig.json"] },
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "react/no-unescaped-entities": "off",
      "react-hooks/purity": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  // Node/CommonJS config files and build tools
  {
    files: [
      "*.config.js",
      "*.config.cjs",
      "*.config.mjs",
      "**/postcss.config.js",
      "**/tailwind.config.js",
    ],
    languageOptions: {
      globals: { module: "readonly", require: "readonly" },
    },
    rules: {
      "no-undef": "off",
    },
  },
  // Disable react-refresh rule for shadcn/ui files that export helpers alongside components
  {
    files: ["src/components/ui/**/*.{ts,tsx}"],
    rules: {
      "react-refresh/only-export-components": "off",
    },
  },
];
