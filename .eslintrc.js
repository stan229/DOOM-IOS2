module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb", "prettier", "prettier/react"],
    "plugins": ["prettier"],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true,
        "modules": true
      }
    },
    "env": {
      "node": true,
      "browser": true,
      "jest": true,
      "jasmine": true
    },
    "globals": {
      "window": true,
      "document": true,
      "localStorage": true
    },
    "rules": {
      "camelcase": 0,
      "no-underscore-dangle": 0,
      "max-len": [
        1,
        200,
        2,
        {
          "ignoreComments": true
        }
      ],
      "radix": 0,
      "no-unused-expressions": [
        "error",
        {
          "allowTernary": true
        }
      ],
      "no-param-reassign": 0,
      "no-console": ["error", { "allow": ["info", "warn", "error"] }],
      "import/no-extraneous-dependencies": 0,
      "import/no-unresolved": 0,
      "import/extensions": 0,
      "no-restricted-syntax": ["error", "WithStatement"],
      "import/prefer-default-export": 0,
      "react/jsx-filename-extension": 0,
      "react/forbid-prop-types": 0,
      "react/prop-types": 0,
      "react/sort-comp": 0,
      "global-require": 0,
      "no-return-assign": 0,
      "class-methods-use-this": 0,
      "comma-dangle": ["error", "never"],
      "semi": ["error", "always"],
      "jsx-a11y/label-has-for": 0,
      "jsx-a11y/no-autofocus": 0,
      "jsx-a11y/href-no-hash": 0,
      "jsx-a11y/no-noninteractive-tabindex": 0,
      "jsx-a11y/no-static-element-interactions": 0,
      "jsx-a11y/no-noninteractive-element-interactions": 0,
      "react/jsx-key": 2,
      "one-var": ["error", "never"],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "prettier/prettier": [
        "error",
        {
          "useTabs": false,
          "printWidth": 120,
          "tabWidth": 2,
          "singleQuote": true,
          "trailingComma": "none",
          "bracketSpacing": true,
          "jsxBracketSameLine": false,
          "semi": true
        }
      ],
      // These need to be turned back on --Aaron
      "jsx-a11y/anchor-is-valid": 0,
      "jsx-a11y/click-events-have-key-events": 0,
      "jsx-a11y/mouse-events-have-key-events": 0,
      "prefer-destructuring": 0,
      "react/no-unescaped-entities": 0
    }
  }
  