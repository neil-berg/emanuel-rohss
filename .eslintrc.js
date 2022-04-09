module.exports = {
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["warn"],
  },
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2018,
    // Allows for the use of imports
    sourceType: "module",
    ecmaFeatures: {
      // Allows for the parsing of JSX
      jsx: true,
    },
  },
  // Allow for global variables in node and jest environments
  env: {
    node: true,
    jest: true,
  },
  rules: {
    // ** Additional ESLint rules **
    // Warnings on console log statements
    "no-console": ["warn"],
    // Show prettier conflicts as warnings
    "prettier/prettier": ["warn"],
    // Don't allow `async` without `await`
    "require-await": "warn",
    // Do not need to sort keys in objects
    "sort-keys": "off",
    // Alphabetize imports
    "sort-imports": [
      "warn",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["all", "multiple", "single", "none"],
      },
    ],
    "no-duplicate-imports": ["error"],
    // Do not validate props in react components
    // because of invalid missing props validation error
    // https://gitlab.com/oblong/multishare/multishare/-/jobs/1573946125
    "react/prop-types": "off",
  },
}
