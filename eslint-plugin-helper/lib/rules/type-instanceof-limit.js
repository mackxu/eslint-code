/**
 * @fileoverview instanceof操作符可能存在问题
 * @author helper
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description: "instanceof操作符可能存在问题",
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
        if (operator === 'instanceof' && left.type === 'Identifier' && right.type === 'Identifier') {
          context.report({
            node,
            message: 'instanceof 操作符可能存在问题',
          });
        }
      },
    };
  },
};
