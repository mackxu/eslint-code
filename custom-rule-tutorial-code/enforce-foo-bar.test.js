"use strict";

const { RuleTester } = require("eslint");
const fooBarRule = require("./enforce-foo-bar");

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variable were introduced.
  languageOptions: { ecmaVersion: 2015 }
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "enforce-foo-bar", // rule name
  fooBarRule, // rule code
  { // checks
    // 'valid' checks cases that should pass
    valid: [{
      code: "const foo = 'bar';",
    }],
    invalid: [{
      code: "const foo = 'baz';",
      output: 'const foo = "bar";',
      errors: [
        {
          message: 'Value other than "bar" assigned to `const foo`. Unexpected value: baz.',
        }
      ],
    }],
  }
);

console.log("All tests passed!");