/**
 * @fileoverview typeof不能用对象和数组
 * @author type-limit
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/type-typeof-limit"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("type-typeof-limit", rule, {
  valid: [
    // give me some code that won't trigger a warning
    { code: "typeof a === 'number'" },
    { code: "a === 'object'" },
  ],

  invalid: [
    {
      code: "typeof a === 'object'",
      errors: [{ message: "typeof 不能用对象和数组" }],
    },
    {
      code: "typeof a == 'object'",
      errors: [{ message: "typeof 不能用对象和数组" }],
    },
  ],
});
