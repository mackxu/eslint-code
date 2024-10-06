/**
 * @fileoverview eslint plugin helper
 * @author eslint-helper
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const rules = requireIndex(__dirname + "/rules");
const plugin = { rules, configs: {} };

Object.assign(plugin.configs, {
  recommended: {
    plugins: {
      helper: plugin,
    },
    rules: {
      "helper/type-typeof-limit": "error",
      "helper/type-instanceof-limit": "error",
    }
  }
});

// export as plugin
module.exports = plugin;



