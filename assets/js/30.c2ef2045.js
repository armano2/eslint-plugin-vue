(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{437:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("ul",[a("li",[t._v("Syntax errors of scripts in directives.")]),t._v(" "),a("li",[t._v("Syntax errors of scripts in mustaches.")]),t._v(" "),a("li",[t._v("Syntax errors of HTML.\n"),a("ul",[a("li",[t._v("Invalid end tags.")]),t._v(" "),a("li",[t._v("Attributes in end tags.")]),t._v(" "),a("li",[t._v("...")]),t._v(" "),a("li",[t._v("See also: "),a("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/parsing.html#parse-errors",target:"_blank",rel:"noopener noreferrer"}},[t._v("WHATWG HTML spec"),a("OutboundLink")],1)])])])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("eslint-code-block",{attrs:{rules:{"vue/no-parsing-error":["error"]}}},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<template>\n  \x3c!-- ✗ BAD --\x3e\n  {{ . }}\n  {{ foo bar }}\n  <div :class="*abc*" / @click="def(">\n    </span>\n  </div id="ghi">\n</template>\n')])])])]),t._v(" "),t._m(6),t._v(" "),t._m(7),a("p",[t._v("You can disable HTML syntax errors by options. Please see "),a("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/parsing.html#parse-errors",target:"_blank",rel:"noopener noreferrer"}},[t._v("WHATWG HTML spec"),a("OutboundLink")],1),t._v(" to know the details of HTML syntax errors.\nOnly "),a("code",[t._v("non-void-html-element-start-tag-with-trailing-solidus")]),t._v(" is disabled by default because Vue.js supports self-closing tags.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("ul",[t._m(10),t._v(" "),a("li",[a("code",[t._v("x-invalid-namespace")]),t._v(" enables the errors about invalid "),a("code",[t._v("xmlns")]),t._v(" attributes. See also "),a("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/parsing.html#create-an-element-for-the-token",target:"_blank",rel:"noopener noreferrer"}},[t._v('step 10. of "create an element for a token"'),a("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(11),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://html.spec.whatwg.org/multipage/parsing.html#parse-errors",target:"_blank",rel:"noopener noreferrer"}},[t._v("WHATWG HTML spec"),a("OutboundLink")],1)])]),t._v(" "),t._m(12),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/rules/no-parsing-error.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule source"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/eslint-plugin-vue/blob/master/tests/lib/rules/no-parsing-error.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Test source"),a("OutboundLink")],1)])])],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue-no-parsing-error"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-no-parsing-error","aria-hidden":"true"}},[this._v("#")]),this._v(" vue/no-parsing-error")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("disallow parsing errors in "),s("code",[this._v("<template>")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("⚙️ This rule is included in all of "),s("code",[this._v('"plugin:vue/essential"')]),this._v(", "),s("code",[this._v('"plugin:vue/strongly-recommended"')]),this._v(" and "),s("code",[this._v('"plugin:vue/recommended"')]),this._v(".")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This rule reports syntax errors in "),s("code",[this._v("<template>")]),this._v(". For example:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"rule-details"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rule-details","aria-hidden":"true"}},[this._v("#")]),this._v(" 📖 Rule Details")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This rule tries to parse directives/mustaches in "),s("code",[this._v("<template>")]),this._v(" by the parser which parses "),s("code",[this._v("<script>")]),this._v(".\nThen reports syntax errors if exist.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔧 Options")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"vue/no-parsing-error"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"error"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"abrupt-closing-of-empty-comment"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"absence-of-digits-in-numeric-character-reference"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"cdata-in-html-content"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"character-reference-outside-unicode-range"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"control-character-in-input-stream"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"control-character-reference"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"eof-before-tag-name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"eof-in-cdata"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"eof-in-comment"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"eof-in-tag"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"incorrectly-closed-comment"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"incorrectly-opened-comment"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"invalid-first-character-of-tag-name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"missing-attribute-value"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"missing-end-tag-name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"missing-semicolon-after-character-reference"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"missing-whitespace-between-attributes"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"nested-comment"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"noncharacter-character-reference"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"noncharacter-in-input-stream"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"null-character-reference"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"surrogate-character-reference"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"surrogate-in-input-stream"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"unexpected-character-in-attribute-name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"unexpected-character-in-unquoted-attribute-value"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"unexpected-equals-sign-before-attribute-name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"unexpected-null-character"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"unexpected-question-mark-instead-of-tag-name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"unexpected-solidus-in-tag"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"unknown-named-character-reference"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"end-tag-with-attributes"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"duplicate-attribute"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"end-tag-with-trailing-solidus"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"non-void-html-element-start-tag-with-trailing-solidus"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"x-invalid-end-tag"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"x-invalid-namespace"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),s("p",[this._v("This rule does not support all of those (E.g., it does not catch errors about DOCTYPE).")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The error codes which have "),s("code",[this._v("x-")]),this._v(" prefix are original of this rule because errors in tree construction phase have not codified yet.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("x-invalid-end-tag")]),this._v(" enables the errors about the end tags of elements which have not opened.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" 📚 Further reading")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation","aria-hidden":"true"}},[this._v("#")]),this._v(" 🔍 Implementation")])}],!1,null,null,null);n.options.__file="no-parsing-error.md";s.default=n.exports}}]);