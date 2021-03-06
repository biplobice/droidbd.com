var Zepto = function() {
	function t(t) {
		return null == t ? String(t) : V[X.call(t)] || "object"
	}

	function e(e) {
		return "function" == t(e)
	}

	function n(t) {
		return null != t && t == t.window
	}

	function r(t) {
		return null != t && t.nodeType == t.DOCUMENT_NODE
	}

	function i(e) {
		return "object" == t(e)
	}

	function o(t) {
		return i(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
	}

	function a(t) {
		return "number" == typeof t.length
	}

	function s(t) {
		return T.call(t, function(t) {
			return null != t
		})
	}

	function u(t) {
		return t.length > 0 ? j.fn.concat.apply([], t) : t
	}

	function c(t) {
		return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
	}

	function l(t) {
		return t in P ? P[t] : P[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
	}

	function f(t, e) {
		return "number" != typeof e || L[c(t)] ? e : e + "px"
	}

	function h(t) {
		var e, n;
		return U[t] || ( e = N.createElement(t), N.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && ( n = "block"), U[t] = n), U[t]
	}

	function p(t) {
		return "children" in t ? O.call(t.children) : j.map(t.childNodes, function(t) {
			return 1 == t.nodeType ? t :
			void 0
		})
	}

	function d(t, e, n) {
		for (E in e)n && (o(e[E]) || W(e[E])) ? (o(e[E]) && !o(t[E]) && (t[E] = {}), W(e[E]) && !W(t[E]) && (t[E] = []), d(t[E], e[E], n)) : e[E] !== x && (t[E] = e[E])
	}

	function m(t, e) {
		return null == e ? j(t) : j(t).filter(e)
	}

	function g(t, n, r, i) {
		return e(n) ? n.call(t, r, i) : n
	}

	function v(t, e, n) {
		null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
	}

	function y(t, e) {
		var n = t.className, r = n && n.baseVal !== x;
		return e === x ? r ? n.baseVal : n :
		void ( r ? n.baseVal = e : t.className = e)
	}

	function b(t) {
		var e;
		try {
			return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : /^0/.test(t) || isNaN( e = Number(t)) ? /^[\[\{]/.test(t) ? j.parseJSON(t) : t : e) : t
		} catch(n) {
			return t
		}
	}

	function w(t, e) {
		e(t);
		for (var n = 0, r = t.childNodes.length; r > n; n++)
			w(t.childNodes[n], e)
	}

	var x, E, j, S, C, k, $ = [], O = $.slice, T = $.filter, N = window.document, U = {}, P = {}, L = {
		"column-count" : 1,
		columns : 1,
		"font-weight" : 1,
		"line-height" : 1,
		opacity : 1,
		"z-index" : 1,
		zoom : 1
	}, A = /^\s*<(\w+|!)[^>]*>/, z = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, M = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Z = /^(?:body|html)$/i, F = /([A-Z])/g, D = ["val", "css", "html", "text", "data", "width", "height", "offset"], R = ["after", "prepend", "before", "append"], _ = N.createElement("table"), q = N.createElement("tr"), I = {
		tr : N.createElement("tbody"),
		tbody : _,
		thead : _,
		tfoot : _,
		td : q,
		th : q,
		"*" : N.createElement("div")
	}, B = /complete|loaded|interactive/, H = /^[\w-]*$/, V = {}, X = V.toString, J = {}, Y = N.createElement("div"), G = {
		tabindex : "tabIndex",
		readonly : "readOnly",
		"for" : "htmlFor",
		"class" : "className",
		maxlength : "maxLength",
		cellspacing : "cellSpacing",
		cellpadding : "cellPadding",
		rowspan : "rowSpan",
		colspan : "colSpan",
		usemap : "useMap",
		frameborder : "frameBorder",
		contenteditable : "contentEditable"
	}, W = Array.isArray ||
	function(t) {
		return t instanceof Array
	};
	return J.matches = function(t, e) {
		if (!e || !t || 1 !== t.nodeType)
			return !1;
		var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
		if (n)
			return n.call(t, e);
		var r, i = t.parentNode, o = !i;
		return o && ( i = Y).appendChild(t), r = ~J.qsa(i, e).indexOf(t), o && Y.removeChild(t), r
	}, C = function(t) {
		return t.replace(/-+(.)?/g, function(t, e) {
			return e ? e.toUpperCase() : ""
		})
	}, k = function(t) {
		return T.call(t, function(e, n) {
			return t.indexOf(e) == n
		})
	}, J.fragment = function(t, e, n) {
		var r, i, a;
		return z.test(t) && ( r = j(N.createElement(RegExp.$1))), r || (t.replace && ( t = t.replace(M, "<$1></$2>")), e === x && ( e = A.test(t) && RegExp.$1), e in I || ( e = "*"), a = I[e], a.innerHTML = "" + t, r = j.each(O.call(a.childNodes), function() {
			a.removeChild(this)
		})), o(n) && ( i = j(r), j.each(n, function(t, e) {
			D.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
		})), r
	}, J.Z = function(t, e) {
		return t = t || [], t.__proto__ = j.fn, t.selector = e || "", t
	}, J.isZ = function(t) {
		return t instanceof J.Z
	}, J.init = function(t, n) {
		var r;
		if (!t)
			return J.Z();
		if ("string" == typeof t)
			if ( t = t.trim(), "<" == t[0] && A.test(t))
				r = J.fragment(t, RegExp.$1, n), t = null;
			else {
				if (n !== x)
					return j(n).find(t);
				r = J.qsa(N, t)
			}
		else {
			if (e(t))
				return j(N).ready(t);
			if (J.isZ(t))
				return t;
			if (W(t))
				r = s(t);
			else if (i(t))
				r = [t], t = null;
			else if (A.test(t))
				r = J.fragment(t.trim(), RegExp.$1, n), t = null;
			else {
				if (n !== x)
					return j(n).find(t);
				r = J.qsa(N, t)
			}
		}
		return J.Z(r, t)
	}, j = function(t, e) {
		return J.init(t, e)
	}, j.extend = function(t) {
		var e, n = O.call(arguments, 1);
		return "boolean" == typeof t && ( e = t, t = n.shift()), n.forEach(function(n) {
			d(t, n, e)
		}), t
	}, J.qsa = function(t, e) {
		var n, i = "#" == e[0], o = !i && "." == e[0], a = i || o ? e.slice(1) : e, s = H.test(a);
		return r(t) && s && i ? ( n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : O.call(s && !i ? o ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
	}, j.contains = N.documentElement.contains ? function(t, e) {
		return t !== e && t.contains(e)
	} : function(t, e) {
		for (; e && ( e = e.parentNode); )
			if (e === t)
				return !0;
		return !1
	}, j.type = t, j.isFunction = e, j.isWindow = n, j.isArray = W, j.isPlainObject = o, j.isEmptyObject = function(t) {
		var e;
		for (e in t)
		return !1;
		return !0
	}, j.inArray = function(t, e, n) {
		return $.indexOf.call(e, t, n)
	}, j.camelCase = C, j.trim = function(t) {
		return null == t ? "" : String.prototype.trim.call(t)
	}, j.uuid = 0, j.support = {}, j.expr = {}, j.map = function(t, e) {
		var n, r, i, o = [];
		if (a(t))
			for ( r = 0; r < t.length; r++)
				n = e(t[r], r), null != n && o.push(n);
		else
			for (i in t) n = e(t[i], i), null != n && o.push(n);
		return u(o)
	}, j.each = function(t, e) {
		var n, r;
		if (a(t)) {
			for ( n = 0; n < t.length; n++)
				if (e.call(t[n], n, t[n]) === !1)
					return t
		} else
			for (r in t)
			if (e.call(t[r], r, t[r]) === !1)
				return t;
		return t
	}, j.grep = function(t, e) {
		return T.call(t, e)
	}, window.JSON && (j.parseJSON = JSON.parse), j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		V["[object " + e + "]"] = e.toLowerCase()
	}), j.fn = {
		forEach : $.forEach,
		reduce : $.reduce,
		push : $.push,
		sort : $.sort,
		indexOf : $.indexOf,
		concat : $.concat,
		map : function(t) {
			return j(j.map(this, function(e, n) {
				return t.call(e, n, e)
			}))
		},
		slice : function() {
			return j(O.apply(this, arguments))
		},
		ready : function(t) {
			return B.test(N.readyState) && N.body ? t(j) : N.addEventListener("DOMContentLoaded", function() {
				t(j)
			}, !1), this
		},
		get : function(t) {
			return t === x ? O.call(this) : this[t >= 0 ? t : t + this.length]
		},
		toArray : function() {
			return this.get()
		},
		size : function() {
			return this.length
		},
		remove : function() {
			return this.each(function() {
				null != this.parentNode && this.parentNode.removeChild(this)
			})
		},
		each : function(t) {
			return $.every.call(this, function(e, n) {
				return t.call(e, n, e) !== !1
			}), this
		},
		filter : function(t) {
			return e(t) ? this.not(this.not(t)) : j(T.call(this, function(e) {
				return J.matches(e, t)
			}))
		},
		add : function(t, e) {
			return j(k(this.concat(j(t, e))))
		},
		is : function(t) {
			return this.length > 0 && J.matches(this[0], t)
		},
		not : function(t) {
			var n = [];
			if (e(t) && t.call !== x)
				this.each(function(e) {
					t.call(this, e) || n.push(this)
				});
			else {
				var r = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? O.call(t) : j(t);
				this.forEach(function(t) {
					r.indexOf(t) < 0 && n.push(t)
				})
			}
			return j(n)
		},
		has : function(t) {
			return this.filter(function() {
				return i(t) ? j.contains(this, t) : j(this).find(t).size()
			})
		},
		eq : function(t) {
			return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
		},
		first : function() {
			var t = this[0];
			return t && !i(t) ? t : j(t)
		},
		last : function() {
			var t = this[this.length - 1];
			return t && !i(t) ? t : j(t)
		},
		find : function(t) {
			var e, n = this;
			return e = t ? "object" == typeof t ? j(t).filter(function() {
				var t = this;
				return $.some.call(n, function(e) {
					return j.contains(e, t)
				})
			}) : 1 == this.length ? j(J.qsa(this[0], t)) : this.map(function() {
				return J.qsa(this, t)
			}) : []
		},
		closest : function(t, e) {
			var n = this[0], i = !1;
			for ("object" == typeof t && ( i = j(t)); n && !( i ? i.indexOf(n) >= 0 : J.matches(n, t)); )
				n = n !== e && !r(n) && n.parentNode;
			return j(n)
		},
		parents : function(t) {
			for (var e = [], n = this; n.length > 0; )
				n = j.map(n, function(t) {
					return ( t = t.parentNode) && !r(t) && e.indexOf(t) < 0 ? (e.push(t), t) :
					void 0
				});
			return m(e, t)
		},
		parent : function(t) {
			return m(k(this.pluck("parentNode")), t)
		},
		children : function(t) {
			return m(this.map(function() {
				return p(this)
			}), t)
		},
		contents : function() {
			return this.map(function() {
				return O.call(this.childNodes)
			})
		},
		siblings : function(t) {
			return m(this.map(function(t, e) {
				return T.call(p(e.parentNode), function(t) {
					return t !== e
				})
			}), t)
		},
		empty : function() {
			return this.each(function() {
				this.innerHTML = ""
			})
		},
		pluck : function(t) {
			return j.map(this, function(e) {
				return e[t]
			})
		},
		show : function() {
			return this.each(function() {
				"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
			})
		},
		replaceWith : function(t) {
			return this.before(t).remove()
		},
		wrap : function(t) {
			var n = e(t);
			if (this[0] && !n)
				var r = j(t).get(0), i = r.parentNode || this.length > 1;
			return this.each(function(e) {
				j(this).wrapAll( n ? t.call(this, e) : i ? r.cloneNode(!0) : r)
			})
		},
		wrapAll : function(t) {
			if (this[0]) {
				j(this[0]).before( t = j(t));
				for (var e; ( e = t.children()).length; )
					t = e.first();
				j(t).append(this)
			}
			return this
		},
		wrapInner : function(t) {
			var n = e(t);
			return this.each(function(e) {
				var r = j(this), i = r.contents(), o = n ? t.call(this, e) : t;
				i.length ? i.wrapAll(o) : r.append(o)
			})
		},
		unwrap : function() {
			return this.parent().each(function() {
				j(this).replaceWith(j(this).children())
			}), this
		},
		clone : function() {
			return this.map(function() {
				return this.cloneNode(!0)
			})
		},
		hide : function() {
			return this.css("display", "none")
		},
		toggle : function(t) {
			return this.each(function() {
				var e = j(this);
				(t === x ? "none" == e.css("display") : t) ? e.show() : e.hide()
			})
		},
		prev : function(t) {
			return j(this.pluck("previousElementSibling")).filter(t || "*")
		},
		next : function(t) {
			return j(this.pluck("nextElementSibling")).filter(t || "*")
		},
		html : function(t) {
			return 0 in arguments ? this.each(function(e) {
				var n = this.innerHTML;
				j(this).empty().append(g(this, t, e, n))
			}) : 0 in this ? this[0].innerHTML : null
		},
		text : function(t) {
			return 0 in arguments ? this.each(function(e) {
				var n = g(this, t, e, this.textContent);
				this.textContent = null == n ? "" : "" + n
			}) : 0 in this ? this[0].textContent : null
		},
		attr : function(t, e) {
			var n;
			return "string" != typeof t || 1 in arguments ? this.each(function(n) {
				if (1 === this.nodeType)
					if (i(t))
						for (E in t)v(this, E, t[E]);
					else
						v(this, t, g(this, e, n, this.getAttribute(t)))
			}) : this.length && 1 === this[0].nodeType ? !( n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : x
		},
		removeAttr : function(t) {
			return this.each(function() {
				1 === this.nodeType && v(this, t)
			})
		},
		prop : function(t, e) {
			return t = G[t] || t, 1 in arguments ? this.each(function(n) {
				this[t] = g(this, e, n, this[t])
			}) : this[0] && this[0][t]
		},
		data : function(t, e) {
			var n = "data-" + t.replace(F, "-$1").toLowerCase(), r = 1 in arguments ? this.attr(n, e) : this.attr(n);
			return null !== r ? b(r) : x
		},
		val : function(t) {
			return 0 in arguments ? this.each(function(e) {
				this.value = g(this, t, e, this.value)
			}) : this[0] && (this[0].multiple ? j(this[0]).find("option").filter(function() {
				return this.selected
			}).pluck("value") : this[0].value)
		},
		offset : function(t) {
			if (t)
				return this.each(function(e) {
					var n = j(this), r = g(this, t, e, n.offset()), i = n.offsetParent().offset(), o = {
						top : r.top - i.top,
						left : r.left - i.left
					};
					"static" == n.css("position") && (o.position = "relative"), n.css(o)
				});
			if (!this.length)
				return null;
			var e = this[0].getBoundingClientRect();
			return {
				left : e.left + window.pageXOffset,
				top : e.top + window.pageYOffset,
				width : Math.round(e.width),
				height : Math.round(e.height)
			}
		},
		css : function(e, n) {
			if (arguments.length < 2) {
				var r = this[0], i = getComputedStyle(r, "");
				if (!r)
					return;
				if ("string" == typeof e)
					return r.style[C(e)] || i.getPropertyValue(e);
				if (W(e)) {
					var o = {};
					return j.each(W(e) ? e : [e], function(t, e) {
						o[e] = r.style[C(e)] || i.getPropertyValue(e)
					}), o
				}
			}
			var a = "";
			if ("string" == t(e))
				n || 0 === n ? a = c(e) + ":" + f(e, n) : this.each(function() {
					this.style.removeProperty(c(e))
				});
			else
				for (E in e)e[E] || 0 === e[E] ? a += c(E) + ":" + f(E, e[E]) + ";" : this.each(function() {
					this.style.removeProperty(c(E))
				});
			return this.each(function() {
				this.style.cssText += ";" + a
			})
		},
		index : function(t) {
			return t ? this.indexOf(j(t)[0]) : this.parent().children().indexOf(this[0])
		},
		hasClass : function(t) {
			return t ? $.some.call(this, function(t) {
				return this.test(y(t))
			}, l(t)) : !1
		},
		addClass : function(t) {
			return t ? this.each(function(e) {
				S = [];
				var n = y(this), r = g(this, t, e, n);
				r.split(/\s+/g).forEach(function(t) {
					j(this).hasClass(t) || S.push(t)
				}, this), S.length && y(this, n + ( n ? " " : "") + S.join(" "))
			}) : this
		},
		removeClass : function(t) {
			return this.each(function(e) {
				return t === x ? y(this, "") : ( S = y(this), g(this, t, e, S).split(/\s+/g).forEach(function(t) {
					S = S.replace(l(t), " ")
				}),
				void  y(this, S.trim()))
			})
		},
		toggleClass : function(t, e) {
			return t ? this.each(function(n) {
				var r = j(this), i = g(this, t, n, y(this));
				i.split(/\s+/g).forEach(function(t) {
					(e === x ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
				})
			}) : this
		},
		scrollTop : function(t) {
			if (this.length) {
				var e = "scrollTop" in this[0];
				return t === x ? e ? this[0].scrollTop : this[0].pageYOffset : this.each( e ? function() {
					this.scrollTop = t
				} : function() {
					this.scrollTo(this.scrollX, t)
				})
			}
		},
		scrollLeft : function(t) {
			if (this.length) {
				var e = "scrollLeft" in this[0];
				return t === x ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each( e ? function() {
					this.scrollLeft = t
				} : function() {
					this.scrollTo(t, this.scrollY)
				})
			}
		},
		position : function() {
			if (this.length) {
				var t = this[0], e = this.offsetParent(), n = this.offset(), r = Z.test(e[0].nodeName) ? {
					top : 0,
					left : 0
				} : e.offset();
				return n.top -= parseFloat(j(t).css("margin-top")) || 0, n.left -= parseFloat(j(t).css("margin-left")) || 0, r.top += parseFloat(j(e[0]).css("border-top-width")) || 0, r.left += parseFloat(j(e[0]).css("border-left-width")) || 0, {
					top : n.top - r.top,
					left : n.left - r.left
				}
			}
		},
		offsetParent : function() {
			return this.map(function() {
				for (var t = this.offsetParent || N.body; t && !Z.test(t.nodeName) && "static" == j(t).css("position"); )
					t = t.offsetParent;
				return t
			})
		}
	}, j.fn.detach = j.fn.remove, ["width", "height"].forEach(function(t) {
		var e = t.replace(/./, function(t) {
			return t[0].toUpperCase()
		});
		j.fn[t] = function(i) {
			var o, a = this[0];
			return i === x ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : ( o = this.offset()) && o[t] : this.each(function(e) {
				a = j(this), a.css(t, g(this, i, e, a[t]()))
			})
		}
	}), R.forEach(function(e, n) {
		var r = n % 2;
		j.fn[e] = function() {
			var e, i, o = j.map(arguments, function(n) {
				return e = t(n), "object" == e || "array" == e || null == n ? n : J.fragment(n)
			}), a = this.length > 1;
			return o.length < 1 ? this : this.each(function(t, e) {
				i = r ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
				var s = j.contains(N.documentElement, i);
				o.forEach(function(t) {
					if (a)
						t = t.cloneNode(!0);
					else if (!i)
						return j(t).remove();
					i.insertBefore(t, e), s && w(t, function(t) {
						null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
					})
				})
			})
		}, j.fn[ r ? e + "To" : "insert" + ( n ? "Before" : "After")] = function(t) {
			return j(t)[e](this), this
		}
	}), J.Z.prototype = j.fn, J.uniq = k, J.deserializeValue = b, j.zepto = J, j
}();
window.Zepto = Zepto,
void 0 === window.$ && (window.$ = Zepto), function(t) {
	function e(t) {
		return t._zid || (t._zid = h++)
	}

	function n(t, n, o, a) {
		if ( n = r(n), n.ns)
			var s = i(n.ns);
		return (g[e(t)] || []).filter(function(t) {
			return !(!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a)
		})
	}

	function r(t) {
		var e = ("" + t).split(".");
		return {
			e : e[0],
			ns : e.slice(1).sort().join(" ")
		}
	}

	function i(t) {
		return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
	}

	function o(t, e) {
		return t.del && !y && t.e in b || !!e
	}

	function a(t) {
		return w[t] || y && b[t] || t
	}

	function s(n, i, s, u, l, h, p) {
		var d = e(n), m = g[d] || (g[d] = []);
		i.split(/\s/).forEach(function(e) {
			if ("ready" == e)
				return t(document).ready(s);
			var i = r(e);
			i.fn = s, i.sel = l, i.e in w && ( s = function(e) {
				var n = e.relatedTarget;
				return !n || n !== this && !t.contains(this, n) ? i.fn.apply(this, arguments) :
				void 0
			}), i.del = h;
			var d = h || s;
			i.proxy = function(t) {
				if ( t = c(t), !t.isImmediatePropagationStopped()) {
					t.data = u;
					var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
					return e === !1 && (t.preventDefault(), t.stopPropagation()), e
				}
			}, i.i = m.length, m.push(i), "addEventListener" in n && n.addEventListener(a(i.e), i.proxy, o(i, p))
		})
	}

	function u(t, r, i, s, u) {
		var c = e(t);
		(r || "").split(/\s/).forEach(function(e) {
			n(t, e, i, s).forEach(function(e) {
				delete g[c][e.i], "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
			})
		})
	}

	function c(e, n) {
		return (n || !e.isDefaultPrevented) && (n || ( n = e), t.each(S, function(t, r) {
			var i = n[t];
			e[t] = function() {
				return this[r] = x, i && i.apply(n, arguments)
			}, e[r] = E
		}), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = x)), e
	}

	function l(t) {
		var e, n = {
			originalEvent : t
		};
		for (e in t)j.test(e) || t[e] === f || (n[e] = t[e]);
		return c(n, t)
	}

	var f, h = 1, p = Array.prototype.slice, d = t.isFunction, m = function(t) {
		return "string" == typeof t
	}, g = {}, v = {}, y = "onfocusin" in window, b = {
		focus : "focusin",
		blur : "focusout"
	}, w = {
		mouseenter : "mouseover",
		mouseleave : "mouseout"
	};
	v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
		add : s,
		remove : u
	}, t.proxy = function(n, r) {
		var i = 2 in arguments && p.call(arguments, 2);
		if (d(n)) {
			var o = function() {
				return n.apply(r, i ? i.concat(p.call(arguments)) : arguments)
			};
			return o._zid = e(n), o
		}
		if (m(r))
			return i ? (i.unshift(n[r], n), t.proxy.apply(null, i)) : t.proxy(n[r], n);
		throw new TypeError("expected function")
	}, t.fn.bind = function(t, e, n) {
		return this.on(t, e, n)
	}, t.fn.unbind = function(t, e) {
		return this.off(t, e)
	}, t.fn.one = function(t, e, n, r) {
		return this.on(t, e, n, r, 1)
	};
	var x = function() {
		return !0
	}, E = function() {
		return !1
	}, j = /^([A-Z]|returnValue$|layer[XY]$)/, S = {
		preventDefault : "isDefaultPrevented",
		stopImmediatePropagation : "isImmediatePropagationStopped",
		stopPropagation : "isPropagationStopped"
	};
	t.fn.delegate = function(t, e, n) {
		return this.on(e, t, n)
	}, t.fn.undelegate = function(t, e, n) {
		return this.off(e, t, n)
	}, t.fn.live = function(e, n) {
		return t(document.body).delegate(this.selector, e, n), this
	}, t.fn.die = function(e, n) {
		return t(document.body).undelegate(this.selector, e, n), this
	}, t.fn.on = function(e, n, r, i, o) {
		var a, c, h = this;
		return e && !m(e) ? (t.each(e, function(t, e) {
			h.on(t, n, r, e, o)
		}), h) : (m(n) || d(i) || i === !1 || ( i = r, r = n, n = f), (d(r) || r === !1) && ( i = r, r = f), i === !1 && ( i = E), h.each(function(f, h) {
			o && ( a = function(t) {
				return u(h, t.type, i), i.apply(this, arguments)
			}), n && ( c = function(e) {
				var r, o = t(e.target).closest(n, h).get(0);
				return o && o !== h ? ( r = t.extend(l(e), {
					currentTarget : o,
					liveFired : h
				}), (a || i).apply(o, [r].concat(p.call(arguments, 1)))) :
				void 0
			}), s(h, e, i, r, n, c || a)
		}))
	}, t.fn.off = function(e, n, r) {
		var i = this;
		return e && !m(e) ? (t.each(e, function(t, e) {
			i.off(t, n, e)
		}), i) : (m(n) || d(r) || r === !1 || ( r = n, n = f), r === !1 && ( r = E), i.each(function() {
			u(this, e, r, n)
		}))
	}, t.fn.trigger = function(e, n) {
		return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function() {
			"dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
		})
	}, t.fn.triggerHandler = function(e, r) {
		var i, o;
		return this.each(function(a, s) {
			i = l(m(e) ? t.Event(e) : e), i._args = r, i.target = s, t.each(n(s, e.type || e), function(t, e) {
				return o = e.proxy(i), i.isImmediatePropagationStopped() ? !1 :
				void 0
			})
		}), o
	}, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
		t.fn[e] = function(t) {
			return t ? this.bind(e, t) : this.trigger(e)
		}
	}), ["focus", "blur"].forEach(function(e) {
		t.fn[e] = function(t) {
			return t ? this.bind(e, t) : this.each(function() {
				try {
					this[e]()
				} catch(t) {
				}
			}), this
		}
	}), t.Event = function(t, e) {
		m(t) || ( e = t, t = e.type);
		var n = document.createEvent(v[t] || "Events"), r = !0;
		if (e)
			for (var i in e)"bubbles" == i ? r = !!e[i] : n[i] = e[i];
		return n.initEvent(t, r, !0), c(n)
	}
}(Zepto), function(t) {
	function e(e, n, r) {
		var i = t.Event(n);
		return t(e).trigger(i, r), !i.isDefaultPrevented()
	}

	function n(t, n, r, i) {
		return t.global ? e(n || y, r, i) :
		void 0
	}

	function r(e) {
		e.global && 0 === t.active++ && n(e, null, "ajaxStart")
	}

	function i(e) {
		e.global && !--t.active && n(e, null, "ajaxStop")
	}

	function o(t, e) {
		var r = e.context;
		return e.beforeSend.call(r, t, e) === !1 || n(e, r, "ajaxBeforeSend", [t, e]) === !1 ? !1 :
		void  n(e, r, "ajaxSend", [t, e])
	}

	function a(t, e, r, i) {
		var o = r.context, a = "success";
		r.success.call(o, t, a, e), i && i.resolveWith(o, [t, a, e]), n(r, o, "ajaxSuccess", [e, r, t]), u(a, e, r)
	}

	function s(t, e, r, i, o) {
		var a = i.context;
		i.error.call(a, r, e, t), o && o.rejectWith(a, [r, e, t]), n(i, a, "ajaxError", [r, i, t || e]), u(e, r, i)
	}

	function u(t, e, r) {
		var o = r.context;
		r.complete.call(o, e, t), n(r, o, "ajaxComplete", [e, r]), i(r)
	}

	function c() {
	}

	function l(t) {
		return t && ( t = t.split(";",2)[0]), t && (t == j ? "html" : t == E ? "json" : w.test(t) ? "script" : x.test(t) && "xml") || "text"
	}

	function f(t, e) {
		return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
	}

	function h(e) {
		e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data =
		void 0)
	}

	function p(e, n, r, i) {
		return t.isFunction(n) && ( i = r, r = n, n =
		void 0), t.isFunction(r) || ( i = r, r =
		void 0), {
			url : e,
			data : n,
			success : r,
			dataType : i
		}
	}

	function d(e, n, r, i) {
		var o, a = t.isArray(n), s = t.isPlainObject(n);
		t.each(n, function(n, u) {
			o = t.type(u), i && ( n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? e.add(u.name, u.value) : "array" == o || !r && "object" == o ? d(e, u, r, n) : e.add(n, u)
		})
	}

	var m, g, v = 0, y = window.document, b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, w = /^(?:text|application)\/javascript/i, x = /^(?:text|application)\/xml/i, E = "application/json", j = "text/html", S = /^\s*$/;
	t.active = 0, t.ajaxJSONP = function(e, n) {
		if (!("type" in e))
			return t.ajax(e);
		var r, i, u = e.jsonpCallback, c = (t.isFunction(u) ? u() : u) || "jsonp" + ++v, l = y.createElement("script"), f = window[c], h = function(e) {
			t(l).triggerHandler("error", e || "abort")
		}, p = {
			abort : h
		};
		return n && n.promise(p), t(l).on("load error", function(o, u) {
			clearTimeout(i), t(l).off().remove(), "error" != o.type && r ? a(r[0], p, e, n) : s(null, u || "error", p, e, n), window[c] = f, r && t.isFunction(f) && f(r[0]), f = r =
			void 0
		}), o(p, e) === !1 ? (h("abort"), p) : (window[c] = function() {
			r = arguments
		}, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(l), e.timeout > 0 && ( i = setTimeout(function() {
			h("timeout")
		}, e.timeout)), p)
	}, t.ajaxSettings = {
		type : "GET",
		beforeSend : c,
		success : c,
		error : c,
		complete : c,
		context : null,
		global : !0,
		xhr : function() {
			return new window.XMLHttpRequest
		},
		accepts : {
			script : "text/javascript, application/javascript, application/x-javascript",
			json : E,
			xml : "application/xml, text/xml",
			html : j,
			text : "text/plain"
		},
		crossDomain : !1,
		timeout : 0,
		processData : !0,
		cache : !0
	}, t.ajax = function(e) {
		var n = t.extend({}, e || {}), i = t.Deferred && t.Deferred();
		for (m in t.ajaxSettings)
		void 0 === n[m] && (n[m] = t.ajaxSettings[m]);
		r(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), n.url || (n.url = window.location.toString()), h(n);
		var u = n.dataType, p = /\?.+=\?/.test(n.url);
		if (p && ( u = "jsonp"), n.cache !== !1 && (e && e.cache === !0 || "script" != u && "jsonp" != u) || (n.url = f(n.url, "_=" + Date.now())), "jsonp" == u)
			return p || (n.url = f(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, i);
		var d, v = n.accepts[u], y = {}, b = function(t, e) {
			y[t.toLowerCase()] = [t, e]
		}, w = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol, x = n.xhr(), E = x.setRequestHeader;
		if (i && i.promise(x), n.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", v || "*/*"), ( v = n.mimeType || v) && (v.indexOf(",") > -1 && ( v = v.split(",",2)[0]), x.overrideMimeType && x.overrideMimeType(v)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && b("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)
			for (g in n.headers)b(g, n.headers[g]);
		if (x.setRequestHeader = b, x.onreadystatechange = function() {
				if (4 == x.readyState) {
					x.onreadystatechange = c, clearTimeout(d);
					var e, r = !1;
					if (x.status >= 200 && x.status < 300 || 304 == x.status || 0 == x.status && "file:" == w) {
						u = u || l(n.mimeType || x.getResponseHeader("content-type")), e = x.responseText;
						try {
							"script" == u ? (1, eval)(e) : "xml" == u ? e = x.responseXML : "json" == u && ( e = S.test(e) ? null : t.parseJSON(e))
						} catch(o) {
							r = o
						}
						r ? s(r, "parsererror", x, n, i) : a(e, x, n, i)
					} else
						s(x.statusText || null, x.status ? "error" : "abort", x, n, i)
				}
			}, o(x, n) === !1)
			return x.abort(), s(null, "abort", x, n, i), x;
		if (n.xhrFields)
			for (g in n.xhrFields)
			x[g] = n.xhrFields[g];
		var j = "async" in n ? n.async : !0;
		x.open(n.type, n.url, j, n.username, n.password);
		for (g in y)
		E.apply(x, y[g]);
		return n.timeout > 0 && ( d = setTimeout(function() {
			x.onreadystatechange = c, x.abort(), s(null, "timeout", x, n, i)
		}, n.timeout)), x.send(n.data ? n.data : null), x
	}, t.get = function() {
		return t.ajax(p.apply(null, arguments))
	}, t.post = function() {
		var e = p.apply(null, arguments);
		return e.type = "POST", t.ajax(e)
	}, t.getJSON = function() {
		var e = p.apply(null, arguments);
		return e.dataType = "json", t.ajax(e)
	}, t.fn.load = function(e, n, r) {
		if (!this.length)
			return this;
		var i, o = this, a = e.split(/\s/), s = p(e, n, r), u = s.success;
		return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function(e) {
			o.html( i ? t("<div>").html(e.replace(b, "")).find(i) : e), u && u.apply(o, arguments)
		}, t.ajax(s), this
	};
	var C = encodeURIComponent;
	t.param = function(t, e) {
		var n = [];
		return n.add = function(t, e) {
			this.push(C(t) + "=" + C(e))
		}, d(n, t, e), n.join("&").replace(/%20/g, "+")
	}
}(Zepto), function(t) {
	t.fn.serializeArray = function() {
		var e, n = [];
		return t([].slice.call(this.get(0).elements)).each(function() {
			e = t(this);
			var r = e.attr("type");
			"fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != r && "reset" != r && "button" != r && ("radio" != r && "checkbox" != r || this.checked) && n.push({
				name : e.attr("name"),
				value : e.val()
			})
		}), n
	}, t.fn.serialize = function() {
		var t = [];
		return this.serializeArray().forEach(function(e) {
			t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
		}), t.join("&")
	}, t.fn.submit = function(e) {
		if (e)
			this.bind("submit", e);
		else if (this.length) {
			var n = t.Event("submit");
			this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
		}
		return this
	}
}(Zepto), function(t) {
	"__proto__" in {} || t.extend(t.zepto, {
		Z : function(e, n) {
			return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
		},
		isZ : function(e) {
			return "array" === t.type(e) && "__Z" in e
		}
	});
	try {
		getComputedStyle(
		void 0)
	} catch(e) {
		var n = getComputedStyle;
		window.getComputedStyle = function(t) {
			try {
				return n(t)
			} catch(e) {
				return null
			}
		}
	}
}(Zepto), function(t) {
	function e(t, e, n) {
		if ((t[e] || t[n]) && t[e] === t[n])
			throw Error("(Link) '" + e + "' can't match '" + n + "'.'")
	}

	function n(n) {
		if (
			void 0 === n && ( n = {}), "object" != typeof n)
			throw Error("(Format) 'format' option must be an object.");
		var r = {};
		t(i).each(function(t, e) {
			if (
				void 0 === n[e])
				r[e] = o[t];
			else {
				if ( typeof n[e] != typeof o[t])
					throw Error("(Format) 'format." + e + "' must be a " + typeof o[t] + ".");
				if ("decimals" === e && (0 > n[e] || 7 < n[e]))
					throw Error("(Format) 'format.decimals' option must be between 0 and 7.");
				r[e] = n[e]
			}
		}), e(r, "mark", "thousand"), e(r, "prefix", "negative"), e(r, "prefix", "negativeBefore"), this.r = r
	}

	function r(e, n) {
		return "object" != typeof e && t.error("(Link) Initialize with an object."), new r.prototype.p(e.target ||
		function() {
		}, e.method, e.format || {}, n)
	}

	var i = "decimals mark thousand prefix postfix encoder decoder negative negativeBefore to from".split(" "), o = [2, ".", "", "", "",
	function(t) {
		return t
	},
	function(t) {
		return t
	}, "-", "",
	function(t) {
		return t
	},
	function(t) {
		return t
	}];
	n.prototype.a = function(t) {
		return this.r[t]
	}, n.prototype.L = function(t) {
		function e(t) {
			return t.split("").reverse().join("")
		}

		t = this.a("encoder")(t);
		var n = this.a("decimals"), r = "", i = "", o = "", a = "";
		return 0 === parseFloat(t.toFixed(n)) && ( t = "0"), 0 > t && ( r = this.a("negative"), i = this.a("negativeBefore")), t = Math.abs(t).toFixed(n).toString(), t = t.split("."), this.a("thousand") ? ( o = e(t[0]).match(/.{1,3}/g), o = e(o.join(e(this.a("thousand"))))) : o = t[0], this.a("mark") && 1 < t.length && ( a = this.a("mark") + t[1]), this.a("to")(i + this.a("prefix") + r + o + a + this.a("postfix"))
	}, n.prototype.w = function(t) {
		function e(t) {
			return t.replace(/[\-\/\\\^$*+?.()|\[\]{}]/g, "\\$&")
		}

		var n;
		return null === t ||
		void 0 === t ? !1 : ( t = this.a("from")(t), t = t.toString(), n = t.replace(RegExp("^" + e(this.a("negativeBefore"))), ""), t !== n ? ( t = n, n = "-") : n = "", t = t.replace(RegExp("^" + e(this.a("prefix"))), ""), this.a("negative") && ( n = "", t = t.replace(RegExp("^" + e(this.a("negative"))), "-")), t = t.replace(RegExp(e(this.a("postfix")) + "$"), "").replace(RegExp(e(this.a("thousand")), "g"), "").replace(this.a("mark"), "."), t = this.a("decoder")(parseFloat(n + t)), isNaN(t) ? !1 : t)
	}, r.prototype.K = function(e, n) {
		this.method = n || "html", this.j = t(e.replace("-tooltip-","")||"<div/>")[0]
	}, r.prototype.H = function(t) {
		this.method = "val", this.j = document.createElement("input"), this.j.name = t, this.j.type = "hidden"
	}, r.prototype.G = function(e) {
		function n(t, e) {
			return [ e ? null : t, e ? t : null]
		}

		var r = this;
		this.method = "val", this.target = e.on("change", function(e) {
			r.B.val(n(t(e.target).val(), r.t), {
				link : r,
				set : !0
			})
		})
	}, r.prototype.p = function(e, n, r, i) {
		if (this.g = r, this.update = !i, "string" == typeof e && 0 === e.indexOf("-tooltip-"))
			this.K(e, n);
		else if ("string" == typeof e && 0 !== e.indexOf("-"))
			this.H(e);
		else {
			if ("function" != typeof e) {
				if ( e instanceof t || t.zepto && t.zepto.isZ(e)) {
					if (!n) {
						if (e.is("input, select, textarea"))
							return
							void  this.G(e);
						n = "html"
					}
					if ("function" == typeof n || "string" == typeof n && e[n])
						return this.method = n,
						void (this.target = e)
				}
				throw new RangeError("(Link) Invalid Link.")
			}
			this.target = !1, this.method = e
		}
	}, r.prototype.write = function(t, e, n, r) {
		this.update && !1 === r || (this.u = t, this.F = t = this.format(t), "function" == typeof this.method ? this.method.call(this.target[0] || n[0], t, e, n) : this.target[this.method](t, e, n))
	}, r.prototype.q = function(e) {
		this.g = new n(t.extend({}, e, this.g instanceof n ? this.g.r : this.g))
	}, r.prototype.J = function(t) {
		this.B = t
	}, r.prototype.I = function(t) {
		this.t = t
	}, r.prototype.format = function(t) {
		return this.g.L(t)
	}, r.prototype.A = function(t) {
		return this.g.w(t)
	}, r.prototype.p.prototype = r.prototype, t.Link = r
}(window.jQuery || window.Zepto), function(t) {
	function e(t) {
		return "number" == typeof t && !isNaN(t) && isFinite(t)
	}

	function n(e) {
		return t.isArray(e) ? e : [e]
	}

	function r(t, e) {
		t.addClass(e), setTimeout(function() {
			t.removeClass(e)
		}, 300)
	}

	function i(t, e) {
		return 100 * e / (t[1] - t[0])
	}

	function o(t, e) {
		if (e >= t.d.slice(-1)[0])
			return 100;
		for (var n, r, o, a = 1; e >= t.d[a]; )
			a++;
		return n = t.d[a - 1], r = t.d[a], o = t.c[a - 1], n = [n, r], o + i(n, 0 > n[0] ? e + Math.abs(n[0]) : e - n[0]) / (100 / (t.c[a] - o))
	}

	function a(t, e) {
		if (e >= 100)
			return t.d.slice(-1)[0];
		for (var n, r, i, o = 1; e >= t.c[o]; )
			o++;
		return n = t.d[o - 1], r = t.d[o], i = t.c[o - 1], n = [n, r], 100 / (t.c[o] - i) * (e - i) * (n[1] - n[0]) / 100 + n[0]
	}

	function s(t, e) {
		for (var n, r = 1; (t.dir ? 100 - e : e) >= t.c[r]; )
			r++;
		return t.m ? ( n = t.c[r - 1], r = t.c[r], e - n > (r - n) / 2 ? r : n) : (t.h[r - 1] ? ( n = t.h[r - 1], r = t.c[r - 1] + Math.round((e - t.c[r - 1]) / n) * n) : r = e, r)
	}

	function u(t, n) {
		if (!e(n))
			throw Error("noUiSlider: 'step' is not numeric.");
		t.h[0] = n
	}

	function c(n, r) {
		if ("object" != typeof r || t.isArray(r))
			throw Error("noUiSlider: 'range' is not an object.");
		if (
			void 0 === r.min ||
			void 0 === r.max)
			throw Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
		t.each(r, function(r, i) {
			var o;
			if ("number" == typeof i && ( i = [i]), !t.isArray(i))
				throw Error("noUiSlider: 'range' contains invalid value.");
			if ( o = "min" === r ? 0 : "max" === r ? 100 : parseFloat(r), !e(o) || !e(i[0]))
				throw Error("noUiSlider: 'range' value isn't numeric.");
			n.c.push(o), n.d.push(i[0]), o ? n.h.push(isNaN(i[1]) ? !1 : i[1]) : isNaN(i[1]) || (n.h[0] = i[1])
		}), t.each(n.h, function(t, e) {
			return e ?
			void (n.h[t] = i([n.d[t], n.d[t + 1]], e) / (100 / (n.c[t + 1] - n.c[t]))) : !0
		})
	}

	function l(e, n) {
		if ("number" == typeof n && ( n = [n]), !t.isArray(n) || !n.length || 2 < n.length)
			throw Error("noUiSlider: 'start' option is incorrect.");
		e.b = n.length, e.start = n
	}

	function f(t, e) {
		if (t.m = e, "boolean" != typeof e)
			throw Error("noUiSlider: 'snap' option must be a boolean.")
	}

	function h(t, e) {
		if ("lower" === e && 1 === t.b)
			t.i = 1;
		else if ("upper" === e && 1 === t.b)
			t.i = 2;
		else if (!0 === e && 2 === t.b)
			t.i = 3;
		else {
			if (!1 !== e)
				throw Error("noUiSlider: 'connect' option doesn't match handle count.");
			t.i = 0
		}
	}

	function p(t, e) {
		switch(e) {
		case"horizontal":
			t.k = 0;
			break;
		case"vertical":
			t.k = 1;
			break;
		default:
			throw Error("noUiSlider: 'orientation' option is invalid.")
		}
	}

	function d(t, n) {
		if (2 < t.c.length)
			throw Error("noUiSlider: 'margin' option is only supported on linear sliders.");
		if (t.margin = i(t.d, n), !e(n))
			throw Error("noUiSlider: 'margin' option must be numeric.")
	}

	function m(t, e) {
		switch(e) {
		case"ltr":
			t.dir = 0;
			break;
		case"rtl":
			t.dir = 1, t.i = [0,2,1,3][t.i];
			break;
		default:
			throw Error("noUiSlider: 'direction' option was not recognized.")
		}
	}

	function g(t, e) {
		if ("string" != typeof e)
			throw Error("noUiSlider: 'behaviour' must be a string containing options.");
		var n = 0 <= e.indexOf("snap");
		t.n = {
			s : 0 <= e.indexOf("tap") || n,
			extend : 0 <= e.indexOf("extend"),
			v : 0 <= e.indexOf("drag"),
			fixed : 0 <= e.indexOf("fixed"),
			m : n
		}
	}

	function v(e, n, r) {
		e.o = [n.lower, n.upper], e.g = n.format, t.each(e.o, function(e, i) {
			if (!t.isArray(i))
				throw Error("noUiSlider: 'serialization." + ( e ? "upper" : "lower") + "' must be an array.");
			t.each(i, function() {
				if (!(this instanceof t.Link))
					throw Error("noUiSlider: 'serialization." + ( e ? "upper" : "lower") + "' can only contain Link instances.");
				this.I(e), this.J(r), this.q(n.format)
			})
		}), e.dir && 1 < e.b && e.o.reverse()
	}

	function y(e, n) {
		var r, i = {
			c : [],
			d : [],
			h : [!1],
			margin : 0
		};
		return r = {
			step : {
				e : !1,
				f : u
			},
			start : {
				e : !0,
				f : l
			},
			connect : {
				e : !0,
				f : h
			},
			direction : {
				e : !0,
				f : m
			},
			range : {
				e : !0,
				f : c
			},
			snap : {
				e : !1,
				f : f
			},
			orientation : {
				e : !1,
				f : p
			},
			margin : {
				e : !1,
				f : d
			},
			behaviour : {
				e : !0,
				f : g
			},
			serialization : {
				e : !0,
				f : v
			}
		}, e = t.extend({
			connect : !1,
			direction : "ltr",
			behaviour : "tap",
			orientation : "horizontal"
		}, e), e.serialization = t.extend({
			lower : [],
			upper : [],
			format : {}
		}, e.serialization), t.each(r, function(t, r) {
			if (
			void 0 === e[t]) {
				if (r.e)
					throw Error("noUiSlider: '" + t + "' is required.");
				return !0
			}
			r.f(i, e[t], n)
		}), i.style = i.k ? "top" : "left", i
	}

	function b(e, n) {
		var r = t("<div><div/></div>").addClass(P[2]), i = ["-lower", "-upper"];
		return e.dir && i.reverse(), r.children().addClass(P[3] + " " + P[3] + i[n]), r
	}

	function w(e, n) {
		return n.j && ( n = new t.Link({
			target : t(n.j).clone().appendTo(e),
			method : n.method,
			format : n.g
		}, !0)), n
	}

	function x(e, n) {
		var r, i = [];
		for ( r = 0; r < e.b; r++) {
			var o = i, a = r, s = e.o[r], u = n[r].children(), c = e.g, l =
			void 0, f = [], l = new t.Link({}, !0);
			for (l.q(c), f.push(l), l = 0; l < s.length; l++)
				f.push(w(u, s[l]));
			o[a] = f
		}
		return i
	}

	function E(t, e, n) {
		switch(t) {
		case 1:
			e.addClass(P[7]), n[0].addClass(P[6]);
			break;
		case 3:
			n[1].addClass(P[6]);
		case 2:
			n[0].addClass(P[7]);
		case 0:
			e.addClass(P[6])
		}
	}

	function j(t, e) {
		var n, r = [];
		for ( n = 0; n < t.b; n++)
			r.push(b(t, n).appendTo(e));
		return r
	}

	function S(e, n) {
		return n.addClass([P[0], P[8 + e.dir], P[4 + e.k]].join(" ")), t("<div/>").appendTo(n).addClass(P[1])
	}

	function C(e, i, u) {
		function c() {
			return b[["width","height"][i.k]]()
		}

		function l(t) {
			var e, n = [k.val()];
			for ( e = 0; e < t.length; e++)
				k.trigger(t[e], n)
		}

		function f(e, n, r) {
			var o = e[0] !== C[0][0] ? 1 : 0, u = $[0] + i.margin, c = $[1] - i.margin;
			return r && 1 < C.length && ( n = o ? Math.max(n, u) : Math.min(n, c)), 100 > n && ( n = s(i, n)), n = Math.max(Math.min(parseFloat(n.toFixed(7)), 100), 0), n === $[o] ? 1 === C.length ? !1 : n === u || n === c ? 0 : !1 : (e.css(i.style, n + "%"), e.is(":first-child") && e.toggleClass(P[17], n > 50), $[o] = n, i.dir && ( n = 100 - n), t(w[o]).each(function() {
				this.write(a(i, n), e.children(), k)
			}), !0)
		}

		function h(t, e, n) {
			n || r(k, P[14]), f(t, e, !1), l(["slide", "set", "change"])
		}

		function p(t, e, n, r) {
			t = t.replace(/\s/g, ".nui ") + ".nui", e.on(t, function(t) {
				var e = k.attr("disabled");
				if (k.hasClass(P[14]) ||
					void 0 !== e && null !== e)
					return !1;
				t.preventDefault();
				var o, a, e = 0 === t.type.indexOf("touch"), s = 0 === t.type.indexOf("mouse"), u = 0 === t.type.indexOf("pointer"), c = t;
				0 === t.type.indexOf("MSPointer") && ( u = !0), t.originalEvent && ( t = t.originalEvent), e && ( o = t.changedTouches[0].pageX, a = t.changedTouches[0].pageY), (s || u) && (u ||
				void 0 !== window.pageXOffset || (window.pageXOffset = document.documentElement.scrollLeft, window.pageYOffset = document.documentElement.scrollTop), o = t.clientX + window.pageXOffset, a = t.clientY + window.pageYOffset), c.C = [o, a], c.cursor = s, t = c, t.l = t.C[i.k], n(t, r)
			})
		}

		function d(t, e) {
			var n, r = e.b || C, i = !1, i = 100 * (t.l - e.start) / c(), o = r[0][0] !== C[0][0] ? 1 : 0, a = e.D;
			n = i + a[0], i += a[1], 1 < r.length ? (0 > n && (i += Math.abs(n)), i > 100 && (n -= i - 100), n = [Math.max(Math.min(n, 100), 0), Math.max(Math.min(i, 100), 0)]) : n = [n, i], i = f(r[0], n[o], 1 === r.length), 1 < r.length && ( i = f(r[1], n[ o ? 0 : 1], !1) || i), i && l(["slide"])
		}

		function m(e) {
			t("." + P[15]).removeClass(P[15]), e.cursor && t("body").css("cursor", "").off(".nui"), T.off(".nui"), k.removeClass(P[12]), l(["set", "change"])
		}

		function g(e, n) {
			1 === n.b.length && n.b[0].children().addClass(P[15]), e.stopPropagation(), p(U.move, T, d, {
				start : e.l,
				b : n.b,
				D : [$[0], $[C.length - 1]]
			}), p(U.end, T, m, null), e.cursor && (t("body").css("cursor", t(e.target).css("cursor")), 1 < C.length && k.addClass(P[12]), t("body").on("selectstart.nui", !1))
		}

		function v(e) {
			var n = e.l, r = 0;
			e.stopPropagation(), t.each(C, function() {
				r += this.offset()[i.style]
			}), r = r / 2 > n || 1 === C.length ? 0 : 1, n -= b.offset()[i.style], n = 100 * n / c(), h(C[r], n, i.n.m), i.n.m && g(e, {
				b : [C[r]]
			})
		}

		function y(t) {
			var e = ( t = t.l < b.offset()[i.style]) ? 0 : 100;
			t = t ? 0 : C.length - 1, h(C[t], e, !1)
		}

		var b, w, C, k = t(e), $ = [-1, -1];
		if (k.hasClass(P[0]))
			throw Error("Slider was already initialized.");
		b = S(i, k), C = j(i, b), w = x(i, C), E(i.i, k, C), function(t) {
			var e;
			if (!t.fixed)
				for ( e = 0; e < C.length; e++)
					p(U.start, C[e].children(), g, {
						b : [C[e]]
					});
			t.s && p(U.start, b, v, {
				b : C
			}), t.extend && (k.addClass(P[16]), t.s && p(U.start, k, y, {
				b : C
			})), t.v && ( e = b.find("." + P[7]).addClass(P[10]), t.fixed && ( e = e.add(b.children().not(e).children())), p(U.start, e, g, {
				b : C
			}))
		}(i.n), e.vSet = function() {
			var e, a, s, u, c, h, p = Array.prototype.slice.call(arguments, 0), d = n(p[0]);
			for ("object" == typeof p[1] ? ( e = p[1].set, a = p[1].link, s = p[1].update, u = p[1].animate) : !0 === p[1] && ( e = !0), i.dir && 1 < i.b && d.reverse(), u && r(k, P[14]), p = 1 < C.length ? 3 : 1, 1 === d.length && ( p = 1), c = 0; p > c; c++)
				u = a || w[c%2][0], u = u.A(d[c % 2]), !1 !== u && ( u = o(i, u), i.dir && ( u = 100 - u), !0 !== f(C[c % 2], u, !0) && t(w[c % 2]).each(function(t) {
					return t ?
					void  this.write(h, C[c % 2].children(), k, s) : ( h = this.u, !0)
				}));
			return !0 === e && l(["set"]), this
		}, e.vGet = function() {
			var t, e = [];
			for ( t = 0; t < i.b; t++)
				e[t] = w[t][0].F;
			return 1 === e.length ? e[0] : i.dir ? e.reverse() : e
		}, e.destroy = function() {
			return t.each(w, function() {
				t.each(this, function() {
					this.target && this.target.off(".nui")
				})
			}), t(this).off(".nui").removeClass(P.join(" ")).empty(), u
		}, k.val(i.start)
	}

	function k(t) {
		if (!this.length)
			throw Error("noUiSlider: Can't initialize slider on empty selection.");
		var e = y(t, this);
		return this.each(function() {
			C(this, e, t)
		})
	}

	function $(e) {
		return this.each(function() {
			var n = t(this).val(), r = this.destroy(), i = t.extend({}, r, e);
			t(this).noUiSlider(i), r.start === i.start && t(this).val(n)
		})
	}

	function O() {
		return this[0][arguments.length ? "vSet" : "vGet"].apply(this[0], arguments)
	}

	var T = t(document), N = t.fn.val, U = window.navigator.pointerEnabled ? {
		start : "pointerdown",
		move : "pointermove",
		end : "pointerup"
	} : window.navigator.msPointerEnabled ? {
		start : "MSPointerDown",
		move : "MSPointerMove",
		end : "MSPointerUp"
	} : {
		start : "mousedown touchstart",
		move : "mousemove touchmove",
		end : "mouseup touchend"
	}, P = "noUi-target noUi-base noUi-origin noUi-handle noUi-horizontal noUi-vertical noUi-background noUi-connect noUi-ltr noUi-rtl noUi-dragable  noUi-state-drag  noUi-state-tap noUi-active noUi-extended noUi-stacking".split(" ");
	t.fn.val = function() {
		var e = arguments, n = t(this[0]);
		return arguments.length ? this.each(function() {
			(t(this).hasClass(P[0]) ? O : N).apply(t(this), e)
		}) : (n.hasClass(P[0]) ? O : N).call(n)
	}, t.noUiSlider = {
		Link : t.Link
	}, t.fn.noUiSlider = function(t, e) {
		return ( e ? $ : k).call(this, t)
	}
}(window.jQuery || window.Zepto), $(function() {
	$(".project-type-select").on("click", ".project-type", function() {
		return $(this).toggleClass("active"), $checkbox = $("#" + $(this).data("projType")), $(this).hasClass("active") ? $checkbox.attr("checked", "checked") : $checkbox.removeAttr("checked"), !1
	}), $("#estimated-budget, #delivery-timeframe").size() > 0 && ($("#estimated-budget").noUiSlider({
		start : [3e4, 9e4],
		behaviour : "drag-tap",
		connect : !0,
		step : 500,
		range : {
			min : 5e3,
			max : 1e5
		},
		serialization : {
			lower : [$.Link({
				target : $(".estimated-budget-preview-lower")
			})],
			upper : [$.Link({
				target : $(".estimated-budget-preview-upper")
			})],
			format : {
				thousand : ",",
				decimals : 0,
				prefix : "$",
				postfix : " "
			}
		}
	}), $("#delivery-timeframe").noUiSlider({
		start : [3, 6],
		behaviour : "drag-tap",
		connect : !0,
		range : {
			min : 1,
			max : 12
		},
		serialization : {
			lower : [$.Link({
				target : $(".delivery-timeframe-preview-lower")
			})],
			upper : [$.Link({
				target : $(".delivery-timeframe-preview-upper")
			})],
			format : {
				thousand : ",",
				decimals : 0,
				prefix : "",
				postfix : " "
			}
		}
	}));
	var t = function(t) {
		var e = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return e.test(t)
	}, e = function() {
		range = $(this).val().toString().replace(" ,", " - ").trimRight(), $("#" + $(this).attr("id") + "-input").val("delivery-timeframe" == $(this).attr("id") ? range + " months" : range)
	};
	$("#delivery-timeframe, #estimated-budget").on("slide", e), Parse.initialize("AtFnfjfZdvkmKr8mIubm3O17mSvIsSPi5SIdANwV", "VzYJEE9trOo6pFCNfD4Q1BjtDaqKHxYDO51890IZ"), $("#project-form").submit(function(e) {
		e.preventDefault();
		var n = $(this).find("input[name='email']");
		if (!t(n.val()))
			return n.css("border-color", "#8B0000"), n.css("font-style", "italic"), n.css("background", "rgba(255,255,255,0.1)"), !1;
		var r = {
			project_types : {}
		};
		$(this).find("input, textarea").not("[type=submit]").each(function() {
			"checkbox" == $(this).attr("type") ?
			void 0 != $(this).attr("checked") && (r.project_types[$(this).attr("name")] = $(this).attr("checked")) : r[$(this).attr("name")] = $(this).val()
		}), /*
		Parse.Cloud.run("sendEmail", r, {
					success : function() {
						$("input[type=submit]").remove(), $("#response").html("Email sent!").addClass("success"), ga("send", "pageview", {
							page : "/got-in-touch-via-project-planner/"
						})
					},
					error : function(t, e) {
						console.log(e), $("#response").html("Error! Email not sent!").addClass("error")
					}
				})*/
		$.ajax({
			type	: "POST",
			url		: 'contact.php',
			async	: false,
			data	: r,
			success	: function(data) {
				console.log('success' + data);
						$("input[type=submit]").remove(), $("#response").html("Email sent!").addClass("success"), ga("send", "pageview", {
							page : "/got-in-touch-via-project-planner/"
						})				
			},
			error	: function(data) {
				console.log('error' + data);
				$("#response").html("Error! Email not sent!").addClass("error")
			}
		});
		console.log(r);		
	})
}); 