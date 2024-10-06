/** @type {import('eslint').Rule.RuleModule} */

const plugin = {
  meta: {
    type: 'problem',
    docs: {
      description: 'A custom ESLint plugin for enforcing foo bar rules'
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    return {
      // Performs action in the function on every variable declarator
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
  }

};

module.exports = plugin;