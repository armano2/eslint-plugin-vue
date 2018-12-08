(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{427:function(e,t,s){"use strict";s.r(t);var r=s(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("There are two common cases where this can be tempting:")]),e._v(" "),e._m(5),e._v(" "),s("eslint-code-block",{attrs:{rules:{"vue/no-use-v-if-with-v-for":["error"]}}},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<template>\n  \x3c!-- ✓ GOOD --\x3e\n  <ul v-if="complete">\n    <TodoItem\n      v-for="todo in todos"\n      :todo="todo"\n    />\n  </ul>\n  <TodoItem\n    v-for="todo in shownTodos"\n    :todo="todo"\n  />\n\n  \x3c!-- ✗ BAD --\x3e\n  <TodoItem\n    v-if="complete"\n    v-for="todo in todos"\n    :todo="todo"\n  />\x3c!-- ↑ In this case, the `v-if` should be written on the wrapper element. --\x3e\n  <TodoItem\n    v-for="todo in todos"\n    v-if="todo.shown"\n    :todo="todo"\n  />\x3c!-- ↑ In this case, the `v-for` list variable should be replace with a computed property that returns your filtered list. --\x3e\n</template>\n')])])])]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._v(" "),s("eslint-code-block",{attrs:{rules:{"vue/no-use-v-if-with-v-for":["error",{allowUsingIterationVar:!0}]}}},[s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<template>\n  \x3c!-- ✓ GOOD --\x3e\n  <TodoItem\n    v-for="todo in todos"\n    v-if="todo.shown"\n    :todo="todo"\n  />\n\n  \x3c!-- ✗ BAD --\x3e\n  <TodoItem\n    v-for="todo in todos"\n    v-if="shown"\n    :todo="todo"\n  />\n</template>\n')])])])]),e._v(" "),e._m(10),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org/v2/style-guide/#Avoid-v-if-with-v-for-essential",target:"_blank",rel:"noopener noreferrer"}},[e._v("Style guide - Avoid v-if with v-for"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://vuejs.org/v2/guide/conditional.html#v-if-with-v-for",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guide - Conditional / v-if with v-for"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://vuejs.org/v2/guide/list.html#v-for-with-v-if",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guide - List / v-for with v-if"),s("OutboundLink")],1)])]),e._v(" "),e._m(11),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-use-v-if-with-v-for.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-use-v-if-with-v-for.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),s("OutboundLink")],1)])])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"vue-no-use-v-if-with-v-for"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-no-use-v-if-with-v-for","aria-hidden":"true"}},[this._v("#")]),this._v(" vue/no-use-v-if-with-v-for")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("disallow use v-if on the same element as v-for")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("⚙️ This rule is included in all of "),t("code",[this._v('"plugin:vue/essential"')]),this._v(", "),t("code",[this._v('"plugin:vue/strongly-recommended"')]),this._v(" and "),t("code",[this._v('"plugin:vue/recommended"')]),this._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Rule Details")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This rule is aimed at preventing the use of "),t("code",[this._v("v-for")]),this._v(" directives together with "),t("code",[this._v("v-if")]),this._v(" directives on the same element.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("To filter items in a list (e.g. "),s("code",[e._v('v-for="user in users" v-if="user.isActive"')]),e._v("). In these cases, replace "),s("code",[e._v("users")]),e._v(" with a new computed property that returns your filtered list (e.g. "),s("code",[e._v("activeUsers")]),e._v(").")]),e._v(" "),s("li",[e._v("To avoid rendering a list if it should be hidden (e.g. "),s("code",[e._v('v-for="user in users" v-if="shouldShowUsers"')]),e._v("). In these cases, move the "),s("code",[e._v("v-if")]),e._v(" to a container element (e.g. "),s("code",[e._v("ul")]),e._v(", "),s("code",[e._v("ol")]),e._v(").")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔧 Options")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{attrs:{class:"token property"}},[e._v('"vue/no-use-v-if-with-v-for"')]),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{attrs:{class:"token string"}},[e._v('"error"')]),s("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{attrs:{class:"token property"}},[e._v('"allowUsingIterationVar"')]),s("span",{attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("allowUsingIterationVar")]),e._v(" ("),s("code",[e._v("boolean")]),e._v(") ... Enables The "),s("code",[e._v("v-if")]),e._v(" directive use the reference which is to the variables which are defined by the "),s("code",[e._v("v-for")]),e._v(" directives. Default is "),s("code",[e._v("false")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"allowusingiterationvar-true"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#allowusingiterationvar-true","aria-hidden":"true"}},[this._v("#")]),this._v(" "),t("code",[this._v('"allowUsingIterationVar": true')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" 📚 Further reading")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔍 Implementation")])}],!1,null,null,null);n.options.__file="no-use-v-if-with-v-for.md";t.default=n.exports}}]);