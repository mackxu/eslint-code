/**
 * @fileoverview enforcing foo bar rules
 * @author eslint-demo
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/enforce-foo-bar"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("enforce-foo-bar", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "const foo = 'bar';"
  ],

  invalid: [
    {
      code: "const foo = 'baz';",
      output: 'const foo = "bar";',
      errors: [
        {
          message: 'Value other than "bar" assigned to `const foo`. Unexpected value: baz.',
        }
      ],
    },
  ],
});
