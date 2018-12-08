(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{420:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("In committed code, prop definitions should always be as detailed as possible, specifying at least type(s).")]),t._v(" "),n("eslint-code-block",{attrs:{rules:{"vue/require-prop-types":["error"]}}},[n("div",{staticClass:"language-vue extra-class"},[n("pre",{pre:!0,attrs:{class:"language-vue"}},[n("code",[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("/* ✓ GOOD */")]),t._v("\nVue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("component")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'foo'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// Without options, just type reference")]),t._v("\n    foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// With options with type field")]),t._v("\n    bar"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      required"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// With options without type field but with validator field")]),t._v("\n    baz"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      required"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      validator"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          value "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v("\n          Array"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("isArray")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" value"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("/* ✗ BAD */")]),t._v("\nVue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("component")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'bar'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'foo'")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nVue"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("component")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'baz'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    foo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")]),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("Nothing.")]),t._v(" "),t._m(6),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org/v2/style-guide/#Prop-definitions-essential",target:"_blank",rel:"noopener noreferrer"}},[t._v("Style guide - Prop definitions"),n("OutboundLink")],1)])]),t._v(" "),t._m(7),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/require-prop-types.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/require-prop-types.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),n("OutboundLink")],1)])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue-require-prop-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-require-prop-types","aria-hidden":"true"}},[this._v("#")]),this._v(" vue/require-prop-types")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("require type definitions in props")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("⚙️ This rule is included in "),s("code",[this._v('"plugin:vue/strongly-recommended"')]),this._v(" and "),s("code",[this._v('"plugin:vue/recommended"')]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Rule Details")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This rule enforces that a "),s("code",[this._v("props")]),this._v(" statement contains type definition.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔧 Options")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" 📚 Further reading")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔍 Implementation")])}],!1,null,null,null);e.options.__file="require-prop-types.md";s.default=e.exports}}]);