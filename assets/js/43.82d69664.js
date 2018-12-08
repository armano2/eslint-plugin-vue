(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{424:function(e,t,n){"use strict";n.r(t);var s=n(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),n("ul",[e._m(2),e._v(" "),n("li",[e._v("🔧 The "),n("code",[e._v("--fix")]),e._v(" option on the "),n("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[e._v("command line"),n("OutboundLink")],1),e._v(" can automatically fix some of the problems reported by this rule.")])]),e._v(" "),e._m(3),e._v(" "),n("p",[e._v("This rule enforce proper casing of props in vue components(camelCase).")]),e._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/prop-name-casing":["error"]}}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<script>\nexport default {\n  props: {\n    /* ✓ GOOD */\n    greetingText: String,\n\n    /* ✗ BAD */\n    'greeting-text': String,\n    greeting_text: String\n  }\n}\n<\/script>\n")])])])]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._m(6),e._v(" "),e._m(7),e._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/prop-name-casing":["error","snake_case"]}}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<script>\nexport default {\n  props: {\n    /* ✓ GOOD */\n    greeting_text: String,\n\n    /* ✗ BAD */\n    'greeting-text': String,\n    greetingText: String\n  }\n}\n<\/script>\n")])])])]),e._v(" "),e._m(8),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org/v2/style-guide/#Prop-name-casing-strongly-recommended",target:"_blank",rel:"noopener noreferrer"}},[e._v("Style guide - Prop name casing"),n("OutboundLink")],1)])]),e._v(" "),e._m(9),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/prop-name-casing.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/prop-name-casing.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),n("OutboundLink")],1)])])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"vue-prop-name-casing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-prop-name-casing","aria-hidden":"true"}},[this._v("#")]),this._v(" vue/prop-name-casing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("enforce specific casing for the Prop name in Vue components")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("⚙️ This rule is included in "),t("code",[this._v('"plugin:vue/strongly-recommended"')]),this._v(" and "),t("code",[this._v('"plugin:vue/recommended"')]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Rule Details")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔧 Options")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{attrs:{class:"token property"}},[e._v('"vue/prop-name-casing"')]),n("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{attrs:{class:"token punctuation"}},[e._v("[")]),n("span",{attrs:{class:"token string"}},[e._v('"error"')]),n("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{attrs:{class:"token string"}},[e._v('"camelCase"')]),e._v(" | "),n("span",{attrs:{class:"token string"}},[e._v('"snake_case"')]),n("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),n("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("code",[e._v('"camelCase"')]),e._v(" (default) ... Enforce property names in "),n("code",[e._v("props")]),e._v(" to camel case.")]),e._v(" "),n("li",[n("code",[e._v('"snake_case"')]),e._v(" ... Enforce property names in "),n("code",[e._v("props")]),e._v(" to snake case.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"snake-case"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#snake-case","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v('"snake_case"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" 📚 Further reading")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔍 Implementation")])}],!1,null,null,null);r.options.__file="prop-name-casing.md";t.default=r.exports}}]);