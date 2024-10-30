!function (e) {
	function t(n) {
		if (r[n]) return r[n].exports;
		var o = r[n] = {i: n, l: !1, exports: {}};
		return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
	}
	
	var r = {};
	t.m = e, t.c = r, t.d = function (e, r, n) {
		t.o(e, r) || Object.defineProperty(e, r, {configurable: !1, enumerable: !0, get: n})
	}, t.n = function (e) {
		var r = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return t.d(r, "a", r), r
	}, t.o = function (e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "", t(t.s = 0)
}([function (e, t, r) {
	"use strict";
	Object.defineProperty(t, "__esModule", {value: !0});
	var n = r(1);
	r.n(n)
}, function (e, t) {
	var r = wp.i18n.__, n = wp.blocks.registerBlockType, o = wp.editor.RichText;
	n("cgb/block-memorizer-shortcode-block", {
		title: r("memorizer"),
		icon: "editor-code",
		category: "formatting",
		keywords: [r("memorizer"), r("shortcode"), r("text")],
		attributes: {content: {source: "children", selector: "p"}},
		edit: function (e) {
			var t = e.attributes.content;
			return -1 === t.indexOf("[memorizer]") && -1 === t.indexOf("[/memorizer]") && (t = "[memorizer]" + t + "[/memorizer]"), wp.element.createElement("div", null, wp.element.createElement(o, {
				tagName: "p",
				className: e.className,
				onChange: function (t) {
					return e.setAttributes({content: t})
				},
				value: t
			}))
		},
		save: function (e) {
			return wp.element.createElement("div", null, wp.element.createElement(o.Content, {
				tagName: "p",
				value: e.attributes.content
			}))
		}
	})
}]);
