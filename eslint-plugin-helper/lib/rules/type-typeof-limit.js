/**
 * @fileoverview typeof不能用对象和数组
 * @author type-limit
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "typeof 不能用对象和数组",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {}, // Add messageId and message
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      BinaryExpression(node) {
        const { left, right, operator } = node;
        const operators = ['===', '=='];
        if (
          operators.includes(operator)
          && left.type === 'UnaryExpression' && left.operator === 'typeof'
          && (right.type === 'Literal' && (right.value === 'object'))
        ) {
          context.report({
            node,
            message: 'typeof 不能用对象和数组',
          })
        }
      },
    };
  },
};
