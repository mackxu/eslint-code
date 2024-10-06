/**
 * @fileoverview enforcing foo bar rules
 * @author eslint-demo
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "enforcing foo bar rules",
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
      VariableDeclarator(node) {

        if (node.parent.kind !== "const") return;
        if (node.id.type !== "Identifier") return;
        if (node.id.name !== "foo") return;

        // Check if value of variable is "bar"
        if (node.init && node.init.type === "Literal" && node.init.value !== "bar") {

          /*
           * Report error to ESLint. Error message uses
           * a message placeholder to include the incorrect value
           * in the error message.
           * Also includes a `fix(fixer)` function that replaces
           * any values assigned to `const foo` with "bar".
           */
          context.report({
            node,
            message: 'Value other than "bar" assigned to `const foo`. Unexpected value: {{ notBar }}.',
            data: {
              notBar: node.init.value
            },
            fix(fixer) {
              return fixer.replaceText(node.init, '"bar"');
            }
          });
        }
      }
    };
  },
};
