(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{457:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ul",[t._m(2),t._v(" "),n("li",[t._v("🔧 The "),n("code",[t._v("--fix")]),t._v(" option on the "),n("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[t._v("command line"),n("OutboundLink")],1),t._v(" can automatically fix some of the problems reported by this rule.")])]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("This rule enforces using hyphenated attribute names on custom components in Vue templates.")]),t._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/attribute-hyphenation":["error","always"]}}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<template>\n  \x3c!-- ✔ GOOD --\x3e\n  <MyComponent my-prop="prop" />\n\n  \x3c!-- ✘ BAD --\x3e\n  <MyComponent myProp="prop" />\n</template>\n')])])])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),n("p",[t._v("It errors on upper case letters.")]),t._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/attribute-hyphenation":["error","always"]}}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<template>\n  \x3c!-- ✔ GOOD --\x3e\n  <MyComponent my-prop="prop" />\n\n  \x3c!-- ✘ BAD --\x3e\n  <MyComponent myProp="prop" />\n</template>\n')])])])]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/attribute-hyphenation":["error","never"]}}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<template>\n  \x3c!-- ✔ GOOD --\x3e\n  <MyComponent myProp="prop" />\n  <MyComponent data-id="prop" />\n  <MyComponent aria-role="button" />\n  <MyComponent slot-scope="prop" />\n\n  \x3c!-- ✘ BAD --\x3e\n  <MyComponent my-prop="prop" />\n</template>\n')])])])]),t._v(" "),t._m(11),t._v(" "),n("p",[t._v("Don't use hyphenated name but allow custom attributes")]),t._v(" "),n("eslint-code-block",{attrs:{fix:"",rules:{"vue/attribute-hyphenation":["error","never",{ignore:["custom-prop"]}]}}},[n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('<template>\n  \x3c!-- ✔ GOOD --\x3e\n  <MyComponent myProp="prop" />\n  <MyComponent custom-prop="prop" />\n  <MyComponent data-id="prop" />\n  <MyComponent aria-role="button" />\n  <MyComponent slot-scope="prop" />\n\n  \x3c!-- ✘ BAD --\x3e\n  <MyComponent my-prop="prop" />\n</template>\n')])])])]),t._v(" "),t._m(12),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/attribute-hyphenation.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/attribute-hyphenation.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),n("OutboundLink")],1)])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vue-attribute-hyphenation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-attribute-hyphenation","aria-hidden":"true"}},[this._v("#")]),this._v(" vue/attribute-hyphenation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("enforce attribute naming style on custom components in template")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("⚙️ This rule is included in "),e("code",[this._v('"plugin:vue/strongly-recommended"')]),this._v(" and "),e("code",[this._v('"plugin:vue/recommended"')]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rule-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-details","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Rule Details")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔧 Options")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"vue/attribute-hyphenation"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v('"error"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"always"')]),t._v(" | "),n("span",{attrs:{class:"token string"}},[t._v('"never"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v('"ignore"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Default casing is set to "),e("code",[this._v("always")]),this._v(" with "),e("code",[this._v("['data-', 'aria-', 'slot-scope']")]),this._v(" set to be ignored")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("code",[t._v('"always"')]),t._v(" (default) ... Use hyphenated name.")]),t._v(" "),n("li",[n("code",[t._v('"never"')]),t._v(" ... Don't use hyphenated name except "),n("code",[t._v("data-")]),t._v(", "),n("code",[t._v("aria-")]),t._v(" and "),n("code",[t._v("slot-scope")]),t._v(".")]),t._v(" "),n("li",[n("code",[t._v('"ignore"')]),t._v(" ... Array of ignored names")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"always"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#always","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v('"always"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"never"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#never","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v('"never"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("It errors on hyphens except "),e("code",[this._v("data-")]),this._v(", "),e("code",[this._v("aria-")]),this._v(" and "),e("code",[this._v("slot-scope")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"never-ignore-custom-prop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#never-ignore-custom-prop","aria-hidden":"true"}},[this._v("#")]),this._v(" "),e("code",[this._v('"never", { "ignore": ["custom-prop"] }')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"implementation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#implementation","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔍 Implementation")])}],!1,null,null,null);s.options.__file="attribute-hyphenation.md";e.default=s.exports}}]);