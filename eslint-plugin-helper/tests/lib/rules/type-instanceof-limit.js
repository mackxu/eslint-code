/**
 * @fileoverview instanceof操作符可能存在问题
 * @author helper
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/type-instanceof-limit"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("type-instanceof-limit", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: 'a instanceof Object',
      errors: [{ message: "instanceof 操作符可能存在问题" }],
    },
    {
      code: 'b instanceof Array',
      errors: [{ message: "instanceof 操作符可能存在问题" }],
    },
  ],
});
