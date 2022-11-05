module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint", "prettier"
    ],
    "rules": {
        "no-console": "error",
      "prettier/prettier": [
        "error", {
          "semi": true,
          "singleQuote": true,
          "trailingComma": "es5",
          "bracketSpacing": true,
          "bracketSameLine": false,
          "printWidth": 80,
          "quoteProps": "as-needed",
          "proseWrap": "always",
          "endOfLine": "lf",
          "singleAttributePerLine": false,
          "htmlWhitespaceSensitivity": "css",
          "arrowParens": "avoid"
        }
      ]
    }
}
