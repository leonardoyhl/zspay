!function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(r.exports, r, r.exports, t),
        r.loaded = !0,
        r.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.p = "",
    t(0)
} ([function(e, t, n) { !
    function() {
        if (!window.zlkbpay) {
            window.zlkbpay = {},
            window.console || (window.console = {
                log: function() {}
            });
            var e = document.createElement("div"),
            t = document.getElementsByTagName("script")[0],
            i = window.location.href.replace(/#(.*)$/, ""),
            r = encodeURIComponent(i),
            o = "",
            a = "";
            window.document.referrer && (o = window.document.referrer.replace(/#(.*)$/, ""), a = encodeURIComponent(o));
            var s = ( !! navigator.userAgent.match(/Version\/[\d\.]+.*Safari/), /micromessenger/i.test(navigator.userAgent));
            s && /windowswechat/i.test(navigator.userAgent) && (s = !1);
            var l, c = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),
            u = n(1),
            d = n(2),
            f = n(3),
            p = n(4),
            h = n(5),
            y = {},
            m = "",
            g = !1,
            v = "zspay.zlkb.net",
            x = "zlkbpay_uuid",
            b = "有错误发生，请刷新重试！",
            w = "库存不足，已暂停售卖！",
            T = "该信息违规，已暂停售卖！",
            k = "该信息不存在！",
            X = "当前地址未被授权",
            C = '<img class="zlkbpay-icon" src="https://' + v + '/api/img/locked.gif" /> \t\t\t\t\t\t\t查看本付费内容请支付 <b class="price">&yen; {price}</b> 元人民币 \t\t\t\t\t\t\t<a class="zlkbpay-openpay" data-action="pay" data-hashid="{hashid}" href="javascript:;">扫码支付</a>\t\t\t\t\t\t\t&nbsp;&nbsp;已支付用户 <a class="zlkbpay-openpay" data-action="validate" data-hashid="{hashid}" href="javascript:void(0);">验证查看</a>\t\t\t\t\t\t\t<div class="hashid">信息编号: <a class="hash-link" title="由知识付费平台提供技术支持" href="https://' + v + '">{hashid}</a></div>',
            E = '<img class="zlkbpay-icon" src="https://' + v + '/api/img/locked.gif" /> \t\t\t\t\t\t\t\t查看本付费内容请支付 <b class="price">&yen; {price}</b> 元人民币 \t\t\t\t\t\t\t\t<a class="zlkbpay-openpay" data-action="pay" data-hashid="{hashid}" href="javascript:;">支付宝支付</a>\t\t\t\t\t\t\t\t&nbsp;&nbsp;已支付用户 <a class="zlkbpay-openpay" data-action="validate" data-hashid="{hashid}" href="javascript:void(0);">验证查看</a>\t\t\t\t\t\t\t\t<div class="hashid">信息编号: <a class="hash-link" title="由知识付费平台提供技术支持" href="https://' + v + '">{hashid}</a></div>',
            N = '<img class="zlkbpay-icon" src="https://' + v + '/api/img/locked.gif" /> \t\t\t\t\t\t\t\t查看本付费内容请支付 <b class="price">&yen; {price}</b> 元人民币 \t\t\t\t\t\t\t\t<a class="zlkbpay-openpay" data-action="pay" data-hashid="{hashid}" href="javascript:void(0);">微信支付</a>\t\t\t\t\t\t\t\t&nbsp;&nbsp;已经支付用户 <a class="zlkbpay-openpay" data-action="validate" data-hashid="{hashid}" href="javascript:void(0);">验证查看</a>\t\t\t\t\t\t\t\t<div class="hashid">信息编号: <a class="hash-link" title="由知识付费平台提供技术支持" href="https://' + v + '" target="_blank">{hashid}</a></div>',
            S = '<div class="zlkbpay-head">您已付费，以下为付费内容 <a class="zlkbpay-clear" data-hashid="{hashid}" href="javascript:void(0);">重新购买</a> {archive_select} </div><div class="zlkbpay-body">{content}</div>',
            A = "卖家已暂停出售";
            f.use("https://" + v + "/api/layer/skin/layer.css"),
            e.setAttribute("zlkb-module", "loader"),
            e.style.display = "none",
            t.parentNode.insertBefore(e, t);
            var j = function() {
                var t = document.createElement("style");
                t.type = "text/css",
                t.styleSheet ? t.styleSheet.cssText = h: t.appendChild(document.createTextNode(h)),
                e.appendChild(t)
            },
            L = function(e) {
                var t = '<iframe frameborder="0" allowtransparency="true" src="' + e + '" class="zlkb_checkout_layer" ';
                t += 'style="z-index: 2147483647; ',
                t += "display: block; ",
                t += "background: rgba(0, 0, 0, 0.004); ",
                t += "border: 0px none transparent; ",
                t += "overflow-x: hidden; overflow-y: auto; ",
                t += "visibility: visible; ",
                t += "margin: 0px; padding: 0px; ",
                t += "-webkit-tap-highlight-color: transparent; ",
                t += "position: fixed; ",
                t += "left: 0px; top: 0px; ",
                t += 'width: 100%; height: 100%;"></iframe>',
                u("body").append(t);
                var n = u(".zlkb_checkout_layer")[0].contentWindow;
                l = new p("parent", "ZLKBPAY"),
                l.addTarget(n, "payFrame"),
                l.listen(D)
            },
            D = function(e) {
                if (console.log(e, "receive", Math.random()), "loaded" === e && (g = !1, f.closeAll()), "close" === e && (l.clear(), l = null, u(".zlkb_checkout_layer").remove()), "refresh" === e && window.location.reload(), 0 === e.indexOf("requery:")) {
                    var t = e.replace("requery:", "");
                    F(t)
                }
                if (0 === e.indexOf("redirect:")) {
                    var n = e.replace("redirect:", "");
                    window.location.href = n
                }
                if (0 === e.indexOf("setcookie:")) {
                    var i = e.replace("setcookie:", "").split("|");
                    d.set(i[0], i[1], {
                        expires: 365
                    })
                }
            },
            H = function(e, t) {
                if (y[e] && y[e].token && m) return void t(y[e].token);
                if (c) var n = "mobile";
                else var n = "scan";
                var i = "https://" + v + "/api/prepay?code=" + e + "&enter_type=" + n + "&hash_id=" + e + "&url=" + r;
                o && (i += "&referrer=" + a),
                m && (i += "&uuid=" + m),
                u.ajax({
                    url: i,
                    type: "GET",
                    dataType: "jsonp",
                    success: function(n) {
                        0 == n.ret ? (t(n.data.token), y[e].token = n.data.token, m = n.data.uuid, d.set(x, m, {
                            expires: 365
                        })) : alert(n.msg)
                    }
                })
            },
            _ = function() {
                u(document).delegate(".zlkbpay-content a.zlkbpay-openpay", "click",
                function() {
                    if (!g) {
                        var e = u(this).data("hashid"),
                        t = u(this).data("action");
                        f.load(1),
                        H(e,
                        function(e) {
                            if ("pay" === t || "validate" === t) {
                                var n = "https://" + v + "/api/checkout/?token=" + e + "&view=" + t;
                                s ? window.location.href = n: (g = !0, L(n + "&iframe=1"))
                            }
                        })
                    }
                }),
                u(document).delegate(".zlkbpay-content select.zlkbpay-archive-select", "change",
                function() {
                    var e = u(this).data("hashid");
                    window.zlkbpay[e + "_" + this.value] && u(".zlkbpay-content[data-hashid='" + e + "'] .zlkbpay-body").html(window.zlkbpay[e + "_" + this.value])
                }),
                u(document).delegate(".zlkbpay-content a.zlkbpay-clear", "click",
                function() {
                    var e = u(this).data("hashid");
                    d.remove("zlkb_token_" + e);
                    var t = window.location.href.match(/zlkb_token_(\w+)=(\w+)/);
                    if (t) {
                        var n = window.location.href.replace("?" + t[0], "").replace("&" + t[0], "");
                        window.location.href = n
                    } else F(e)
                })
            },
            F = function(e) {
                var t = u(".zlkbpay-content[data-hashid=" + e + "]"),
                n = d.get("zlkb_token_" + e) || d.get("zlkb_token_" + e);
                n || (n = ""),
                u.ajax({
                    url: "https://" + v + "/api/getinfo?hash_id=" + e + "&url=" + r + "&auth=" + n,
                    type: "GET",
                    dataType: "jsonp",
                    success: function(n) {
                        if (0 === n.ret) if (1 === n.data.status) {
                            var i = S.replace(/{content}/gi, n.data.content);
                            if (u.isArray(n.data.archives) && n.data.archives.length > 0) {
                                window.zlkbpay[e + "_last"] = n.data.content;
                                var r = '<div class="zlkbpay-archive-wrap">您购买过多份资源，历史内容  <select class="zlkbpay-archive-select" data-hashid="' + e + '">';
                                r += '<option value="last">最新内容</option>';
                                for (var o = 0; o < n.data.archives.length; o++) r += '<option value="' + n.data.archives[o].date + '">' + n.data.archives[o].date + "</option>",
                                window.zlkbpay[e + "_" + n.data.archives[o].date] = n.data.archives[o].content;
                                r += "</select></div>",
                                i = i.replace("{archive_select}", r)
                            } else i = i.replace("{archive_select}", "");
                            i = i.replace(/{hashid}/gi, e),
                            t.html(i)
                        } else if (n.data.status === -1) t.html(k);
                        else if (2 === n.data.status) t.html(w);
                        else if (3 === n.data.status) t.html(T);
                        else if (4 === n.data.status) t.html(A);
                        else if (5 === n.data.status) t.html(X);
                        else {
                            if (s) var i = N.replace(/{price}/i, n.data.price);
                            else if (c) var i = E.replace(/{price}/i, n.data.price);
                            else var i = C.replace(/{price}/i, n.data.price);
                            i = i.replace(/{hashid}/gi, e),
                            t.html(i)
                        } else t.html(b)
                    },
                    error: function() {
                        t.html(b)
                    }
                })
            },
            q = function() {
                var e = !1;
                if (u(".zlkbpay-content[data-hashid]").each(function(t, n) {
                    var i = u(n),
                    r = i.data("hashid");
                    y[r] = {
                        hashid: r,
                        token: ""
                    },
                    e = !0
                }), e) {
                    var t = window.location.href.match(/zlkb_token_(\w+)=(\w+)/);
                    t && d.set("zlkb_token_" + t[1], t[2], {
                        expires: 365
                    });
                    for (id in y) F(id);
                    _(),
                    j(),
                    m = d.get(x)
                }
            };
            u(document).ready(q)
        }
    } ()
},
function(e, t, n) {
    var i, r; !
    function(t, n) {
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        }: n(t)
    } ("undefined" != typeof window ? window: this,
    function(n, o) {
        function a(e) {
            var t = !!e && "length" in e && e.length,
            n = ge.type(e);
            return "function" !== n && !ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        function s(e, t, n) {
            if (ge.isFunction(t)) return ge.grep(e,
            function(e, i) {
                return !! t.call(e, i, e) !== n
            });
            if (t.nodeType) return ge.grep(e,
            function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (Se.test(t)) return ge.filter(t, e, n);
                t = ge.filter(t, e)
            }
            return ge.grep(e,
            function(e) {
                return ge.inArray(e, t) > -1 !== n
            })
        }
        function l(e, t) {
            do e = e[t];
            while (e && 1 !== e.nodeType);
            return e
        }
        function c(e) {
            var t = {};
            return ge.each(e.match(_e) || [],
            function(e, n) {
                t[n] = !0
            }),
            t
        }
        function u() {
            se.addEventListener ? (se.removeEventListener("DOMContentLoaded", d), n.removeEventListener("load", d)) : (se.detachEvent("onreadystatechange", d), n.detachEvent("onload", d))
        }
        function d() { (se.addEventListener || "load" === n.event.type || "complete" === se.readyState) && (u(), ge.ready())
        }
        function f(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Ie, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: Oe.test(n) ? ge.parseJSON(n) : n)
                    } catch(r) {}
                    ge.data(e, t, n)
                } else n = void 0
            }
            return n
        }
        function p(e) {
            var t;
            for (t in e) if (("data" !== t || !ge.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
            return ! 0
        }
        function h(e, t, n, i) {
            if (Me(e)) {
                var r, o, a = ge.expando,
                s = e.nodeType,
                l = s ? ge.cache: e,
                c = s ? e[a] : e[a] && a;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = ae.pop() || ge.guid++:a),
                l[c] || (l[c] = s ? {}: {
                    toJSON: ge.noop
                }),
                "object" != typeof t && "function" != typeof t || (i ? l[c] = ge.extend(l[c], t) : l[c].data = ge.extend(l[c].data, t)),
                o = l[c],
                i || (o.data || (o.data = {}), o = o.data),
                void 0 !== n && (o[ge.camelCase(t)] = n),
                "string" == typeof t ? (r = o[t], null == r && (r = o[ge.camelCase(t)])) : r = o,
                r
            }
        }
        function y(e, t, n) {
            if (Me(e)) {
                var i, r, o = e.nodeType,
                a = o ? ge.cache: e,
                s = o ? e[ge.expando] : ge.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        ge.isArray(t) ? t = t.concat(ge.map(t, ge.camelCase)) : t in i ? t = [t] : (t = ge.camelCase(t), t = t in i ? [t] : t.split(" ")),
                        r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !p(i) : !ge.isEmptyObject(i)) return
                    } (n || (delete a[s].data, p(a[s]))) && (o ? ge.cleanData([e], !0) : ye.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
                }
            }
        }
        function m(e, t, n, i) {
            var r, o = 1,
            a = 20,
            s = i ?
            function() {
                return i.cur()
            }: function() {
                return ge.css(e, t, "")
            },
            l = s(),
            c = n && n[3] || (ge.cssNumber[t] ? "": "px"),
            u = (ge.cssNumber[t] || "px" !== c && +l) && Re.exec(ge.css(e, t));
            if (u && u[3] !== c) {
                c = c || u[3],
                n = n || [],
                u = +l || 1;
                do o = o || ".5",
                u /= o,
                ge.style(e, t, u + c);
                while (o !== (o = s() / l) && 1 !== o && --a)
            }
            return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)),
            r
        }
        function g(e) {
            var t = Ve.split("|"),
            n = e.createDocumentFragment();
            if (n.createElement) for (; t.length;) n.createElement(t.pop());
            return n
        }
        function v(e, t) {
            var n, i, r = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
            if (!o) for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) ! t || ge.nodeName(i, t) ? o.push(i) : ge.merge(o, v(i, t));
            return void 0 === t || t && ge.nodeName(e, t) ? ge.merge([e], o) : o
        }
        function x(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) ge._data(n, "globalEval", !t || ge._data(t[i], "globalEval"))
        }
        function b(e) {
            $e.test(e.type) && (e.defaultChecked = e.checked)
        }
        function w(e, t, n, i, r) {
            for (var o, a, s, l, c, u, d, f = e.length,
            p = g(t), h = [], y = 0; y < f; y++) if (a = e[y], a || 0 === a) if ("object" === ge.type(a)) ge.merge(h, a.nodeType ? [a] : a);
            else if (Je.test(a)) {
                for (l = l || p.appendChild(t.createElement("div")), c = (Xe.exec(a) || ["", ""])[1].toLowerCase(), d = Ge[c] || Ge._default, l.innerHTML = d[1] + ge.htmlPrefilter(a) + d[2], o = d[0]; o--;) l = l.lastChild;
                if (!ye.leadingWhitespace && Ye.test(a) && h.push(t.createTextNode(Ye.exec(a)[0])), !ye.tbody) for (a = "table" !== c || Qe.test(a) ? "<table>" !== d[1] || Qe.test(a) ? 0 : l: l.firstChild, o = a && a.childNodes.length; o--;) ge.nodeName(u = a.childNodes[o], "tbody") && !u.childNodes.length && a.removeChild(u);
                for (ge.merge(h, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = p.lastChild
            } else h.push(t.createTextNode(a));
            for (l && p.removeChild(l), ye.appendChecked || ge.grep(v(h, "input"), b), y = 0; a = h[y++];) if (i && ge.inArray(a, i) > -1) r && r.push(a);
            else if (s = ge.contains(a.ownerDocument, a), l = v(p.appendChild(a), "script"), s && x(l), n) for (o = 0; a = l[o++];) Ue.test(a.type || "") && n.push(a);
            return l = null,
            p
        }
        function T() {
            return ! 0
        }
        function k() {
            return ! 1
        }
        function C() {
            try {
                return se.activeElement
            } catch(e) {}
        }
        function E(e, t, n, i, r, o) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (s in t) E(e, s, n, i, t[s], o);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = k;
            else if (!r) return e;
            return 1 === o && (a = r, r = function(e) {
                return ge().off(e),
                a.apply(this, arguments)
            },
            r.guid = a.guid || (a.guid = ge.guid++)),
            e.each(function() {
                ge.event.add(this, t, r, i, n)
            })
        }
        function N(e, t) {
            return ge.nodeName(e, "table") && ge.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }
        function S(e) {
            return e.type = (null !== ge.find.attr(e, "type")) + "/" + e.type,
            e
        }
        function A(e) {
            var t = lt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
            e
        }
        function j(e, t) {
            if (1 === t.nodeType && ge.hasData(e)) {
                var n, i, r, o = ge._data(e),
                a = ge._data(t, o),
                s = o.events;
                if (s) {
                    delete a.handle,
                    a.events = {};
                    for (n in s) for (i = 0, r = s[n].length; i < r; i++) ge.event.add(t, n, s[n][i])
                }
                a.data && (a.data = ge.extend({},
                a.data))
            }
        }
        function L(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ye.noCloneEvent && t[ge.expando]) {
                    r = ge._data(t);
                    for (i in r.events) ge.removeEvent(t, i, r.handle);
                    t.removeAttribute(ge.expando)
                }
                "script" === n && t.text !== e.text ? (S(t).text = e.text, A(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ye.html5Clone && e.innerHTML && !ge.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && $e.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }
        function D(e, t, n, i) {
            t = ce.apply([], t);
            var r, o, a, s, l, c, u = 0,
            d = e.length,
            f = d - 1,
            p = t[0],
            h = ge.isFunction(p);
            if (h || d > 1 && "string" == typeof p && !ye.checkClone && st.test(p)) return e.each(function(r) {
                var o = e.eq(r);
                h && (t[0] = p.call(this, r, o.html())),
                D(o, t, n, i)
            });
            if (d && (c = w(t, e[0].ownerDocument, !1, e, i), r = c.firstChild, 1 === c.childNodes.length && (c = r), r || i)) {
                for (s = ge.map(v(c, "script"), S), a = s.length; u < d; u++) o = c,
                u !== f && (o = ge.clone(o, !0, !0), a && ge.merge(s, v(o, "script"))),
                n.call(e[u], o, u);
                if (a) for (l = s[s.length - 1].ownerDocument, ge.map(s, A), u = 0; u < a; u++) o = s[u],
                Ue.test(o.type || "") && !ge._data(o, "globalEval") && ge.contains(l, o) && (o.src ? ge._evalUrl && ge._evalUrl(o.src) : ge.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ct, "")));
                c = r = null
            }
            return e
        }
        function H(e, t, n) {
            for (var i, r = t ? ge.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ge.cleanData(v(i)),
            i.parentNode && (n && ge.contains(i.ownerDocument, i) && x(v(i, "script")), i.parentNode.removeChild(i));
            return e
        }
        function _(e, t) {
            var n = ge(t.createElement(e)).appendTo(t.body),
            i = ge.css(n[0], "display");
            return n.detach(),
            i
        }
        function F(e) {
            var t = se,
            n = pt[e];
            return n || (n = _(e, t), "none" !== n && n || (ft = (ft || ge("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ft[0].contentWindow || ft[0].contentDocument).document, t.write(), t.close(), n = _(e, t), ft.detach()), pt[e] = n),
            n
        }
        function q(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get: (this.get = t).apply(this, arguments)
                }
            }
        }
        function M(e) {
            if (e in At) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = St.length; n--;) if (e = St[n] + t, e in At) return e
        }
        function O(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++) i = e[a],
            i.style && (o[a] = ge._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && We(i) && (o[a] = ge._data(i, "olddisplay", F(i.nodeName)))) : (r = We(i), (n && "none" !== n || !r) && ge._data(i, "olddisplay", r ? n: ge.css(i, "display"))));
            for (a = 0; a < s; a++) i = e[a],
            i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "": "none"));
            return e
        }
        function I(e, t, n) {
            var i = Ct.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }
        function B(e, t, n, i, r) {
            for (var o = n === (i ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)"margin" === n && (a += ge.css(e, n + Pe[o], !0, r)),
            i ? ("content" === n && (a -= ge.css(e, "padding" + Pe[o], !0, r)), "margin" !== n && (a -= ge.css(e, "border" + Pe[o] + "Width", !0, r))) : (a += ge.css(e, "padding" + Pe[o], !0, r), "padding" !== n && (a += ge.css(e, "border" + Pe[o] + "Width", !0, r)));
            return a
        }
        function R(e, t, n) {
            var i = !0,
            r = "width" === t ? e.offsetWidth: e.offsetHeight,
            o = vt(e),
            a = ye.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, o);
            if (r <= 0 || null == r) {
                if (r = xt(e, t, o), (r < 0 || null == r) && (r = e.style[t]), yt.test(r)) return r;
                i = a && (ye.boxSizingReliable() || r === e.style[t]),
                r = parseFloat(r) || 0
            }
            return r + B(e, t, n || (a ? "border": "content"), i, o) + "px"
        }
        function P(e, t, n, i, r) {
            return new P.prototype.init(e, t, n, i, r)
        }
        function W() {
            return n.setTimeout(function() {
                jt = void 0
            }),
            jt = ge.now()
        }
        function z(e, t) {
            var n, i = {
                height: e
            },
            r = 0;
            for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Pe[r],
            i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e),
            i
        }
        function $(e, t, n) {
            for (var i, r = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), o = 0, a = r.length; o < a; o++) if (i = r[o].call(n, t, e)) return i
        }
        function X(e, t, n) {
            var i, r, o, a, s, l, c, u, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && We(e),
            y = ge._data(e, "fxshow");
            n.queue || (s = ge._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--,
                    ge.queue(e, "fx").length || s.empty.fire()
                })
            })),
            1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = ge.css(e, "display"), u = "none" === c ? ge._data(e, "olddisplay") || F(e.nodeName) : c, "inline" === u && "none" === ge.css(e, "float") && (ye.inlineBlockNeedsLayout && "inline" !== F(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
            n.overflow && (p.overflow = "hidden", ye.shrinkWrapBlocks() || d.always(function() {
                p.overflow = n.overflow[0],
                p.overflowX = n.overflow[1],
                p.overflowY = n.overflow[2]
            }));
            for (i in t) if (r = t[i], Dt.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (h ? "hide": "show")) {
                    if ("show" !== r || !y || void 0 === y[i]) continue;
                    h = !0
                }
                f[i] = y && y[i] || ge.style(e, i)
            } else c = void 0;
            if (ge.isEmptyObject(f))"inline" === ("none" === c ? F(e.nodeName) : c) && (p.display = c);
            else {
                y ? "hidden" in y && (h = y.hidden) : y = ge._data(e, "fxshow", {}),
                o && (y.hidden = !h),
                h ? ge(e).show() : d.done(function() {
                    ge(e).hide()
                }),
                d.done(function() {
                    var t;
                    ge._removeData(e, "fxshow");
                    for (t in f) ge.style(e, t, f[t])
                });
                for (i in f) a = $(h ? y[i] : 0, i, d),
                i in y || (y[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }
        function U(e, t) {
            var n, i, r, o, a;
            for (n in e) if (i = ge.camelCase(n), r = t[i], o = e[n], ge.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = ge.cssHooks[i], a && "expand" in a) {
                o = a.expand(o),
                delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
        }
        function Y(e, t, n) {
            var i, r, o = 0,
            a = Y.prefilters.length,
            s = ge.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return ! 1;
                for (var t = jt || W(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(o);
                return s.notifyWith(e, [c, o, n]),
                o < 1 && l ? n: (s.resolveWith(e, [c]), !1)
            },
            c = s.promise({
                elem: e,
                props: ge.extend({},
                t),
                opts: ge.extend(!0, {
                    specialEasing: {},
                    easing: ge.easing._default
                },
                n),
                originalProperties: t,
                originalOptions: n,
                startTime: jt || W(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = ge.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i),
                    i
                },
                stop: function(t) {
                    var n = 0,
                    i = t ? c.tweens.length: 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]),
                    this
                }
            }),
            u = c.props;
            for (U(u, c.opts.specialEasing); o < a; o++) if (i = Y.prefilters[o].call(c, e, u, c.opts)) return ge.isFunction(i.stop) && (ge._queueHooks(c.elem, c.opts.queue).stop = ge.proxy(i.stop, i)),
            i;
            return ge.map(u, $, c),
            ge.isFunction(c.opts.start) && c.opts.start.call(e, c),
            ge.fx.timer(ge.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }
        function V(e) {
            return ge.attr(e, "class") || ""
        }
        function G(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0,
                o = t.toLowerCase().match(_e) || [];
                if (ge.isFunction(n)) for (; i = o[r++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }
        function J(e, t, n, i) {
            function r(s) {
                var l;
                return o[s] = !0,
                ge.each(e[s] || [],
                function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
                }),
                l
            }
            var o = {},
            a = e === nn;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }
        function Q(e, t) {
            var n, i, r = ge.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((r[i] ? e: n || (n = {}))[i] = t[i]);
            return n && ge.extend(!0, e, n),
            e
        }
        function K(e, t, n) {
            for (var i, r, o, a, s = e.contents,
            l = e.dataTypes;
            "*" === l[0];) l.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r) for (a in s) if (s[a] && s[a].test(r)) {
                l.unshift(a);
                break
            }
            if (l[0] in n) o = l[0];
            else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        o = a;
                        break
                    }
                    i || (i = a)
                }
                o = o || i
            }
            if (o) return o !== l[0] && l.unshift(o),
            n[o]
        }
        function Z(e, t, n, i) {
            var r, o, a, s, l, c = {},
            u = e.dataTypes.slice();
            if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l;
            else if ("*" !== l && l !== o) {
                if (a = c[l + " " + o] || c["* " + o], !a) for (r in c) if (s = r.split(" "), s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                    a === !0 ? a = c[r] : c[r] !== !0 && (o = s[0], u.unshift(s[1]));
                    break
                }
                if (a !== !0) if (a && e["throws"]) t = a(t);
                else try {
                    t = a(t)
                } catch(d) {
                    return {
                        state: "parsererror",
                        error: a ? d: "No conversion from " + l + " to " + o
                    }
                }
            }
            return {
                state: "success",
                data: t
            }
        }
        function ee(e) {
            return e.style && e.style.display || ge.css(e, "display")
        }
        function te(e) {
            if (!ge.contains(e.ownerDocument || se, e)) return ! 0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === ee(e) || "hidden" === e.type) return ! 0;
                e = e.parentNode
            }
            return ! 1
        }
        function ne(e, t, n, i) {
            var r;
            if (ge.isArray(t)) ge.each(t,
            function(t, r) {
                n || ln.test(e) ? i(e, r) : ne(e + "[" + ("object" == typeof r && null != r ? t: "") + "]", r, n, i)
            });
            else if (n || "object" !== ge.type(t)) i(e, t);
            else for (r in t) ne(e + "[" + r + "]", t[r], n, i)
        }
        function ie() {
            try {
                return new n.XMLHttpRequest
            } catch(e) {}
        }
        function re() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch(e) {}
        }
        function oe(e) {
            return ge.isWindow(e) ? e: 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var ae = [],
        se = n.document,
        le = ae.slice,
        ce = ae.concat,
        ue = ae.push,
        de = ae.indexOf,
        fe = {},
        pe = fe.toString,
        he = fe.hasOwnProperty,
        ye = {},
        me = "1.12.4",
        ge = function(e, t) {
            return new ge.fn.init(e, t)
        },
        ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        xe = /^-ms-/,
        be = /-([\da-z])/gi,
        we = function(e, t) {
            return t.toUpperCase()
        };
        ge.fn = ge.prototype = {
            jquery: me,
            constructor: ge,
            selector: "",
            length: 0,
            toArray: function() {
                return le.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : le.call(this)
            },
            pushStack: function(e) {
                var t = ge.merge(this.constructor(), e);
                return t.prevObject = this,
                t.context = this.context,
                t
            },
            each: function(e) {
                return ge.each(this, e)
            },
            map: function(e) {
                return this.pushStack(ge.map(this,
                function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(le.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            eq: function(e) {
                var t = this.length,
                n = +e + (e < 0 ? t: 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ue,
            sort: ae.sort,
            splice: ae.splice
        },
        ge.extend = ge.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {},
            s++), "object" == typeof a || ge.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (r = arguments[s])) for (i in r) e = a[i],
            n = r[i],
            a !== n && (c && n && (ge.isPlainObject(n) || (t = ge.isArray(n))) ? (t ? (t = !1, o = e && ge.isArray(e) ? e: []) : o = e && ge.isPlainObject(e) ? e: {},
            a[i] = ge.extend(c, o, n)) : void 0 !== n && (a[i] = n));
            return a
        },
        ge.extend({
            expando: "jQuery" + (me + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === ge.type(e)
            },
            isArray: Array.isArray ||
            function(e) {
                return "array" === ge.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return ! ge.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return ! 1;
                return ! 0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== ge.type(e) || e.nodeType || ge.isWindow(e)) return ! 1;
                try {
                    if (e.constructor && !he.call(e, "constructor") && !he.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(n) {
                    return ! 1
                }
                if (!ye.ownFirst) for (t in e) return he.call(e, t);
                for (t in e);
                return void 0 === t || he.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "": "object" == typeof e || "function" == typeof e ? fe[pe.call(e)] || "object": typeof e
            },
            globalEval: function(e) {
                e && ge.trim(e) && (n.execScript ||
                function(e) {
                    n.eval.call(n, e)
                })(e)
            },
            camelCase: function(e) {
                return e.replace(xe, "ms-").replace(be, we)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, i = 0;
                if (a(e)) for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++);
                else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
                return e
            },
            trim: function(e) {
                return null == e ? "": (e + "").replace(ve, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : ue.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (de) return de.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n: 0; n < i; n++) if (n in t && t[n] === e) return n
                }
                return - 1
            },
            merge: function(e, t) {
                for (var n = +t.length,
                i = 0,
                r = e.length; i < n;) e[r++] = t[i++];
                if (n !== n) for (; void 0 !== t[i];) e[r++] = t[i++];
                return e.length = r,
                e
            },
            grep: function(e, t, n) {
                for (var i, r = [], o = 0, a = e.length, s = !n; o < a; o++) i = !t(e[o], o),
                i !== s && r.push(e[o]);
                return r
            },
            map: function(e, t, n) {
                var i, r, o = 0,
                s = [];
                if (a(e)) for (i = e.length; o < i; o++) r = t(e[o], o, n),
                null != r && s.push(r);
                else for (o in e) r = t(e[o], o, n),
                null != r && s.push(r);
                return ce.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                if ("string" == typeof t && (r = e[t], t = e, e = r), ge.isFunction(e)) return n = le.call(arguments, 2),
                i = function() {
                    return e.apply(t || this, n.concat(le.call(arguments)))
                },
                i.guid = e.guid = e.guid || ge.guid++,
                i
            },
            now: function() {
                return + new Date
            },
            support: ye
        }),
        "function" == typeof Symbol && (ge.fn[Symbol.iterator] = ae[Symbol.iterator]),
        ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(e, t) {
            fe["[object " + t + "]"] = t.toLowerCase()
        });
        var Te = function(e) {
            function t(e, t, n, i) {
                var r, o, a, s, l, c, d, p, h = t && t.ownerDocument,
                y = t ? t.nodeType: 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== y && 9 !== y && 11 !== y) return n;
                if (!i && ((t ? t.ownerDocument || t: R) !== H && D(t), t = t || H, F)) {
                    if (11 !== y && (c = ge.exec(e))) if (r = c[1]) {
                        if (9 === y) {
                            if (! (a = t.getElementById(r))) return n;
                            if (a.id === r) return n.push(a),
                            n
                        } else if (h && (a = h.getElementById(r)) && I(t, a) && a.id === r) return n.push(a),
                        n
                    } else {
                        if (c[2]) return K.apply(n, t.getElementsByTagName(e)),
                        n;
                        if ((r = c[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)),
                        n
                    }
                    if (w.qsa && !X[e + " "] && (!q || !q.test(e))) {
                        if (1 !== y) h = t,
                        p = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(xe, "\\$&") : t.setAttribute("id", s = B), d = E(e), o = d.length, l = fe.test(s) ? "#" + s: "[id='" + s + "']"; o--;) d[o] = l + " " + f(d[o]);
                            p = d.join(","),
                            h = ve.test(e) && u(t.parentNode) || t
                        }
                        if (p) try {
                            return K.apply(n, h.querySelectorAll(p)),
                            n
                        } catch(m) {} finally {
                            s === B && t.removeAttribute("id")
                        }
                    }
                }
                return S(e.replace(se, "$1"), t, n, i)
            }
            function n() {
                function e(n, i) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                    e[n + " "] = i
                }
                var t = [];
                return e
            }
            function i(e) {
                return e[B] = !0,
                e
            }
            function r(e) {
                var t = H.createElement("div");
                try {
                    return !! e(t)
                } catch(n) {
                    return ! 1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function o(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t
            }
            function a(e, t) {
                var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
                if (i) return i;
                if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
                return e ? 1 : -1
            }
            function s(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }
            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function c(e) {
                return i(function(t) {
                    return t = +t,
                    i(function(n, i) {
                        for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }
            function u(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }
            function d() {}
            function f(e) {
                for (var t = 0,
                n = e.length,
                i = ""; t < n; t++) i += e[t].value;
                return i
            }
            function p(e, t, n) {
                var i = t.dir,
                r = n && "parentNode" === i,
                o = W++;
                return t.first ?
                function(t, n, o) {
                    for (; t = t[i];) if (1 === t.nodeType || r) return e(t, n, o)
                }: function(t, n, a) {
                    var s, l, c, u = [P, o];
                    if (a) {
                        for (; t = t[i];) if ((1 === t.nodeType || r) && e(t, n, a)) return ! 0
                    } else for (; t = t[i];) if (1 === t.nodeType || r) {
                        if (c = t[B] || (t[B] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[i]) && s[0] === P && s[1] === o) return u[2] = s[2];
                        if (l[i] = u, u[2] = e(t, n, a)) return ! 0
                    }
                }
            }
            function h(e) {
                return e.length > 1 ?
                function(t, n, i) {
                    for (var r = e.length; r--;) if (!e[r](t, n, i)) return ! 1;
                    return ! 0
                }: e[0]
            }
            function y(e, n, i) {
                for (var r = 0,
                o = n.length; r < o; r++) t(e, n[r], i);
                return i
            }
            function m(e, t, n, i, r) {
                for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
                return a
            }
            function g(e, t, n, r, o, a) {
                return r && !r[B] && (r = g(r)),
                o && !o[B] && (o = g(o, a)),
                i(function(i, a, s, l) {
                    var c, u, d, f = [],
                    p = [],
                    h = a.length,
                    g = i || y(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !i && t ? g: m(g, f, e, s, l),
                    x = n ? o || (i ? e: h || r) ? [] : a: v;
                    if (n && n(v, x, s, l), r) for (c = m(x, p), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (x[p[u]] = !(v[p[u]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (c = [], u = x.length; u--;)(d = x[u]) && c.push(v[u] = d);
                                o(null, x = [], c, l)
                            }
                            for (u = x.length; u--;)(d = x[u]) && (c = o ? ee(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
                        }
                    } else x = m(x === a ? x.splice(h, x.length) : x),
                    o ? o(null, a, x, l) : K.apply(a, x)
                })
            }
            function v(e) {
                for (var t, n, i, r = e.length,
                o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                    return e === t
                },
                a, !0), c = p(function(e) {
                    return ee(t, e) > -1
                },
                a, !0), u = [function(e, n, i) {
                    var r = !o && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    return t = null,
                    r
                }]; s < r; s++) if (n = T.relative[e[s].type]) u = [p(h(u), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[B]) {
                        for (i = ++s; i < r && !T.relative[e[i].type]; i++);
                        return g(s > 1 && h(u), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*": ""
                        })).replace(se, "$1"), n, s < i && v(e.slice(s, i)), i < r && v(e = e.slice(i)), i < r && f(e))
                    }
                    u.push(n)
                }
                return h(u)
            }
            function x(e, n) {
                var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, l, c) {
                    var u, d, f, p = 0,
                    h = "0",
                    y = i && [],
                    g = [],
                    v = A,
                    x = i || o && T.find.TAG("*", c),
                    b = P += null == v ? 1 : Math.random() || .1,
                    w = x.length;
                    for (c && (A = a === H || a || c); h !== w && null != (u = x[h]); h++) {
                        if (o && u) {
                            for (d = 0, a || u.ownerDocument === H || (D(u), s = !F); f = e[d++];) if (f(u, a || H, s)) {
                                l.push(u);
                                break
                            }
                            c && (P = b)
                        }
                        r && ((u = !f && u) && p--, i && y.push(u))
                    }
                    if (p += h, r && h !== p) {
                        for (d = 0; f = n[d++];) f(y, g, a, s);
                        if (i) {
                            if (p > 0) for (; h--;) y[h] || g[h] || (g[h] = J.call(l));
                            g = m(g)
                        }
                        K.apply(l, g),
                        c && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return c && (P = b, A = v),
                    y
                };
                return r ? i(a) : a
            }
            var b, w, T, k, C, E, N, S, A, j, L, D, H, _, F, q, M, O, I, B = "sizzle" + 1 * new Date,
            R = e.document,
            P = 0,
            W = 0,
            z = n(),
            $ = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (L = !0),
                0
            },
            Y = 1 << 31,
            V = {}.hasOwnProperty,
            G = [],
            J = G.pop,
            Q = G.push,
            K = G.push,
            Z = G.slice,
            ee = function(e, t) {
                for (var n = 0,
                i = e.length; n < i; n++) if (e[n] === t) return n;
                return - 1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            fe = new RegExp("^" + ie + "$"),
            pe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            ye = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            xe = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t: i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Te = function() {
                D()
            };
            try {
                K.apply(G = Z.call(R.childNodes), R.childNodes),
                G[R.childNodes.length].nodeType
            } catch(ke) {
                K = {
                    apply: G.length ?
                    function(e, t) {
                        Q.apply(e, Z.call(t))
                    }: function(e, t) {
                        for (var n = e.length,
                        i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {},
            C = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !! t && "HTML" !== t.nodeName
            },
            D = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e: R;
                return i !== H && 9 === i.nodeType && i.documentElement ? (H = i, _ = H.documentElement, F = !C(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = r(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }), w.getElementsByTagName = r(function(e) {
                    return e.appendChild(H.createComment("")),
                    !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = me.test(H.getElementsByClassName), w.getById = r(function(e) {
                    return _.appendChild(e).id = B,
                    !H.getElementsByName || !H.getElementsByName(B).length
                }), w.getById ? (T.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && F) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                },
                T.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete T.find.ID, T.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), T.find.TAG = w.getElementsByTagName ?
                function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                }: function(e, t) {
                    var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                },
                T.find.CLASS = w.getElementsByClassName &&
                function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && F) return t.getElementsByClassName(e)
                },
                M = [], q = [], (w.qsa = me.test(H.querySelectorAll)) && (r(function(e) {
                    _.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + B + "-]").length || q.push("~="),
                    e.querySelectorAll(":checked").length || q.push(":checked"),
                    e.querySelectorAll("a#" + B + "+*").length || q.push(".#.+[+~]")
                }), r(function(e) {
                    var t = H.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    q.push(",.*:")
                })), (w.matchesSelector = me.test(O = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && r(function(e) {
                    w.disconnectedMatch = O.call(e, "div"),
                    O.call(e, "[s!='']:x"),
                    M.push("!=", oe)
                }), q = q.length && new RegExp(q.join("|")), M = M.length && new RegExp(M.join("|")), t = me.test(_.compareDocumentPosition), I = t || me.test(_.contains) ?
                function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement: e,
                    i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                }: function(e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                    return ! 1
                },
                U = t ?
                function(e, t) {
                    if (e === t) return L = !0,
                    0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n: (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === R && I(R, e) ? -1 : t === H || t.ownerDocument === R && I(R, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
                }: function(e, t) {
                    if (e === t) return L = !0,
                    0;
                    var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                    if (!r || !o) return e === H ? -1 : t === H ? 1 : r ? -1 : o ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                    if (r === o) return a(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; s[i] === l[i];) i++;
                    return i ? a(s[i], l[i]) : s[i] === R ? -1 : l[i] === R ? 1 : 0
                },
                H) : H
            },
            t.matches = function(e, n) {
                return t(e, null, null, n)
            },
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== H && D(e), n = n.replace(ue, "='$1']"), w.matchesSelector && F && !X[n + " "] && (!M || !M.test(n)) && (!q || !q.test(n))) try {
                    var i = O.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch(r) {}
                return t(n, H, null, [e]).length > 0
            },
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== H && D(e),
                I(e, t)
            },
            t.attr = function(e, t) { (e.ownerDocument || e) !== H && D(e);
                var n = T.attrHandle[t.toLowerCase()],
                i = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
                return void 0 !== i ? i: w.attributes || !F ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
            },
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            },
            t.uniqueSort = function(e) {
                var t, n = [],
                i = 0,
                r = 0;
                if (L = !w.detectDuplicates, j = !w.sortStable && e.slice(0), e.sort(U), L) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return j = null,
                e
            },
            k = t.getText = function(e) {
                var t, n = "",
                i = 0,
                r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else for (; t = e[i++];) n += k(t);
                return n
            },
            T = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(be, we),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(be, we),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, we).toLowerCase();
                        return "*" === e ?
                        function() {
                            return ! 0
                        }: function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = z[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e,
                        function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n: !n || (o += "", "=" === n ? o === i: "!=" === n ? o !== i: "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice( - i.length) === i: "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice( - 4),
                        s = "of-type" === t;
                        return 1 === i && 0 === r ?
                        function(e) {
                            return !! e.parentNode
                        }: function(t, n, l) {
                            var c, u, d, f, p, h, y = o !== a ? "nextSibling": "previousSibling",
                            m = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            v = !l && !s,
                            x = !1;
                            if (m) {
                                if (o) {
                                    for (; y;) {
                                        for (f = t; f = f[y];) if (s ? f.nodeName.toLowerCase() === g: 1 === f.nodeType) return ! 1;
                                        h = y = "only" === e && !h && "nextSibling"
                                    }
                                    return ! 0
                                }
                                if (h = [a ? m.firstChild: m.lastChild], a && v) {
                                    for (f = m, d = f[B] || (f[B] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === P && c[1], x = p && c[2], f = p && m.childNodes[p]; f = ++p && f && f[y] || (x = p = 0) || h.pop();) if (1 === f.nodeType && ++x && f === t) {
                                        u[e] = [P, p, x];
                                        break
                                    }
                                } else if (v && (f = t, d = f[B] || (f[B] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), c = u[e] || [], p = c[0] === P && c[1], x = p), x === !1) for (; (f = ++p && f && f[y] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g: 1 !== f.nodeType) || !++x || (v && (d = f[B] || (f[B] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [P, x]), f !== t)););
                                return x -= r,
                                x === i || x % i === 0 && x / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[B] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = o(e, n), a = r.length; a--;) i = ee(e, r[a]),
                            e[i] = !(t[i] = r[a])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                        n = [],
                        r = N(e.replace(se, "$1"));
                        return r[B] ? i(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e,
                            r(t, null, o, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(be, we),
                        function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return fe.test(e || "") || t.error("unsupported lang: " + e),
                        e = e.replace(be, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                            if (n = F ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                            n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return ! 1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === _
                    },
                    focus: function(e) {
                        return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                        return ! 0
                    },
                    parent: function(e) {
                        return ! T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ye.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [n < 0 ? n + t: n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var i = n < 0 ? n + t: n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var i = n < 0 ? n + t: n; ++i < t;) e.push(i);
                        return e
                    })
                }
            },
            T.pseudos.nth = T.pseudos.eq;
            for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[b] = s(b);
            for (b in {
                submit: !0,
                reset: !0
            }) T.pseudos[b] = l(b);
            return d.prototype = T.filters = T.pseudos,
            T.setFilters = new d,
            E = t.tokenize = function(e, n) {
                var i, r, o, a, s, l, c, u = $[e + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = e, l = [], c = T.preFilter; s;) {
                    i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])),
                    i = !1,
                    (r = ce.exec(s)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(se, " ")
                    }), s = s.slice(i.length));
                    for (a in T.filter) ! (r = pe[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: a,
                        matches: r
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length: s ? t.error(e) : $(e, l).slice(0)
            },
            N = t.compile = function(e, t) {
                var n, i = [],
                r = [],
                o = X[e + " "];
                if (!o) {
                    for (t || (t = E(e)), n = t.length; n--;) o = v(t[n]),
                    o[B] ? i.push(o) : r.push(o);
                    o = X(e, x(r, i)),
                    o.selector = e
                }
                return o
            },
            S = t.select = function(e, t, n, i) {
                var r, o, a, s, l, c = "function" == typeof e && e,
                d = !i && E(e = c.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && F && T.relative[o[1].type]) {
                        if (t = (T.find.ID(a.matches[0].replace(be, we), t) || [])[0], !t) return n;
                        c && (t = t.parentNode),
                        e = e.slice(o.shift().value.length)
                    }
                    for (r = pe.needsContext.test(e) ? 0 : o.length; r--&&(a = o[r], !T.relative[s = a.type]);) if ((l = T.find[s]) && (i = l(a.matches[0].replace(be, we), ve.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && f(o), !e) return K.apply(n, i),
                        n;
                        break
                    }
                }
                return (c || N(e, d))(i, t, !F, n, !t || ve.test(e) && u(t.parentNode) || t),
                n
            },
            w.sortStable = B.split("").sort(U).join("") === B,
            w.detectDuplicates = !!L,
            D(),
            w.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(H.createElement("div"))
            }),
            r(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width",
            function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            w.attributes && r(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || o("value",
            function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }),
            r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te,
            function(e, t, n) {
                var i;
                if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value: null
            }),
            t
        } (n);
        ge.find = Te,
        ge.expr = Te.selectors,
        ge.expr[":"] = ge.expr.pseudos,
        ge.uniqueSort = ge.unique = Te.uniqueSort,
        ge.text = Te.getText,
        ge.isXMLDoc = Te.isXML,
        ge.contains = Te.contains;
        var ke = function(e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (r && ge(e).is(n)) break;
                i.push(e)
            }
            return i
        },
        Ce = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ee = ge.expr.match.needsContext,
        Ne = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Se = /^.[^:#\[\.,]*$/;
        ge.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? ge.find.matchesSelector(i, e) ? [i] : [] : ge.find.matches(e, ge.grep(t,
            function(e) {
                return 1 === e.nodeType
            }))
        },
        ge.fn.extend({
            find: function(e) {
                var t, n = [],
                i = this,
                r = i.length;
                if ("string" != typeof e) return this.pushStack(ge(e).filter(function() {
                    for (t = 0; t < r; t++) if (ge.contains(i[t], this)) return ! 0
                }));
                for (t = 0; t < r; t++) ge.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? ge.unique(n) : n),
                n.selector = this.selector ? this.selector + " " + e: e,
                n
            },
            filter: function(e) {
                return this.pushStack(s(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(s(this, e || [], !0))
            },
            is: function(e) {
                return !! s(this, "string" == typeof e && Ee.test(e) ? ge(e) : e || [], !1).length
            }
        });
        var Ae, je = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Le = ge.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || Ae, "string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : je.exec(e), !i || !i[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t: se, !0)), Ne.test(i[1]) && ge.isPlainObject(t)) for (i in t) ge.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (r = se.getElementById(i[2]), r && r.parentNode) {
                    if (r.id !== i[2]) return Ae.find(e);
                    this.length = 1,
                    this[0] = r
                }
                return this.context = se,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ge.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(ge) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ge.makeArray(e, this))
        };
        Le.prototype = ge.fn,
        Ae = ge(se);
        var De = /^(?:parents|prev(?:Until|All))/,
        He = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        ge.fn.extend({
            has: function(e) {
                var t, n = ge(e, this),
                i = n.length;
                return this.filter(function() {
                    for (t = 0; t < i; t++) if (ge.contains(this, n[t])) return ! 0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0,
                r = this.length,
                o = [], a = Ee.test(e) || "string" != typeof e ? ge(e, t || this.context) : 0; i < r; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? ge.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ge.inArray(this[0], ge(e)) : ge.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
            },
            add: function(e, t) {
                return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
            }
        }),
        ge.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t: null
            },
            parents: function(e) {
                return ke(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ke(e, "parentNode", n)
            },
            next: function(e) {
                return l(e, "nextSibling")
            },
            prev: function(e) {
                return l(e, "previousSibling")
            },
            nextAll: function(e) {
                return ke(e, "nextSibling")
            },
            prevAll: function(e) {
                return ke(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ke(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ke(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Ce((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Ce(e.firstChild)
            },
            contents: function(e) {
                return ge.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: ge.merge([], e.childNodes)
            }
        },
        function(e, t) {
            ge.fn[e] = function(n, i) {
                var r = ge.map(this, t, n);
                return "Until" !== e.slice( - 5) && (i = n),
                i && "string" == typeof i && (r = ge.filter(i, r)),
                this.length > 1 && (He[e] || (r = ge.uniqueSort(r)), De.test(e) && (r = r.reverse())),
                this.pushStack(r)
            }
        });
        var _e = /\S+/g;
        ge.Callbacks = function(e) {
            e = "string" == typeof e ? c(e) : ge.extend({},
            e);
            var t, n, i, r, o = [],
            a = [],
            s = -1,
            l = function() {
                for (r = e.once, i = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;) o[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1),
                t = !1,
                r && (o = n ? [] : "")
            },
            u = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)),
                    function i(t) {
                        ge.each(t,
                        function(t, n) {
                            ge.isFunction(n) ? e.unique && u.has(n) || o.push(n) : n && n.length && "string" !== ge.type(n) && i(n)
                        })
                    } (arguments), n && !t && l()),
                    this
                },
                remove: function() {
                    return ge.each(arguments,
                    function(e, t) {
                        for (var n; (n = ge.inArray(t, o, n)) > -1;) o.splice(n, 1),
                        n <= s && s--
                    }),
                    this
                },
                has: function(e) {
                    return e ? ge.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []),
                    this
                },
                disable: function() {
                    return r = a = [],
                    o = n = "",
                    this
                },
                disabled: function() {
                    return ! o
                },
                lock: function() {
                    return r = !0,
                    n || u.disable(),
                    this
                },
                locked: function() {
                    return !! r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()),
                    this
                },
                fire: function() {
                    return u.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !! i
                }
            };
            return u
        },
        ge.extend({
            Deferred: function(e) {
                var t = [["resolve", "done", ge.Callbacks("once memory"), "resolved"], ["reject", "fail", ge.Callbacks("once memory"), "rejected"], ["notify", "progress", ge.Callbacks("memory")]],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments),
                        this
                    },
                    then: function() {
                        var e = arguments;
                        return ge.Deferred(function(n) {
                            ge.each(t,
                            function(t, o) {
                                var a = ge.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && ge.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ge.extend(e, i) : i
                    }
                },
                r = {};
                return i.pipe = i.then,
                ge.each(t,
                function(e, o) {
                    var a = o[2],
                    s = o[3];
                    i[o[1]] = a.add,
                    s && a.add(function() {
                        n = s
                    },
                    t[1 ^ e][2].disable, t[2][2].lock),
                    r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i: this, arguments),
                        this
                    },
                    r[o[0] + "With"] = a.fireWith
                }),
                i.promise(r),
                e && e.call(r, r),
                r
            },
            when: function(e) {
                var t, n, i, r = 0,
                o = le.call(arguments),
                a = o.length,
                s = 1 !== a || e && ge.isFunction(e.promise) ? a: 0,
                l = 1 === s ? e: ge.Deferred(),
                c = function(e, n, i) {
                    return function(r) {
                        n[e] = this,
                        i[e] = arguments.length > 1 ? le.call(arguments) : r,
                        i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
                if (a > 1) for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) o[r] && ge.isFunction(o[r].promise) ? o[r].promise().progress(c(r, n, t)).done(c(r, i, o)).fail(l.reject) : --s;
                return s || l.resolveWith(i, o),
                l.promise()
            }
        });
        var Fe;
        ge.fn.ready = function(e) {
            return ge.ready.promise().done(e),
            this
        },
        ge.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ge.readyWait++:ge.ready(!0)
            },
            ready: function(e) { (e === !0 ? --ge.readyWait: ge.isReady) || (ge.isReady = !0, e !== !0 && --ge.readyWait > 0 || (Fe.resolveWith(se, [ge]), ge.fn.triggerHandler && (ge(se).triggerHandler("ready"), ge(se).off("ready"))))
            }
        }),
        ge.ready.promise = function(e) {
            if (!Fe) if (Fe = ge.Deferred(), "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll) n.setTimeout(ge.ready);
            else if (se.addEventListener) se.addEventListener("DOMContentLoaded", d),
            n.addEventListener("load", d);
            else {
                se.attachEvent("onreadystatechange", d),
                n.attachEvent("onload", d);
                var t = !1;
                try {
                    t = null == n.frameElement && se.documentElement
                } catch(i) {}
                t && t.doScroll && !
                function r() {
                    if (!ge.isReady) {
                        try {
                            t.doScroll("left")
                        } catch(e) {
                            return n.setTimeout(r, 50)
                        }
                        u(),
                        ge.ready()
                    }
                } ()
            }
            return Fe.promise(e)
        },
        ge.ready.promise();
        var qe;
        for (qe in ge(ye)) break;
        ye.ownFirst = "0" === qe,
        ye.inlineBlockNeedsLayout = !1,
        ge(function() {
            var e, t, n, i;
            n = se.getElementsByTagName("body")[0],
            n && n.style && (t = se.createElement("div"), i = se.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ye.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = se.createElement("div");
            ye.deleteExpando = !0;
            try {
                delete e.test
            } catch(t) {
                ye.deleteExpando = !1
            }
            e = null
        } ();
        var Me = function(e) {
            var t = ge.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
        },
        Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ie = /([A-Z])/g;
        ge.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? ge.cache[e[ge.expando]] : e[ge.expando],
                !!e && !p(e)
            },
            data: function(e, t, n) {
                return h(e, t, n)
            },
            removeData: function(e, t) {
                return y(e, t)
            },
            _data: function(e, t, n) {
                return h(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return y(e, t, !0)
            }
        }),
        ge.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = ge.data(o), 1 === o.nodeType && !ge._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ge.camelCase(i.slice(5)), f(o, i, r[i])));
                        ge._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    ge.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    ge.data(this, e, t)
                }) : o ? f(o, e, ge.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    ge.removeData(this, e)
                })
            }
        }),
        ge.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue",
                i = ge._data(e, t),
                n && (!i || ge.isArray(n) ? i = ge._data(e, t, ge.makeArray(n)) : i.push(n)),
                i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ge.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = ge._queueHooks(e, t),
                a = function() {
                    ge.dequeue(e, t)
                };
                "inprogress" === r && (r = n.shift(), i--),
                r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)),
                !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ge._data(e, n) || ge._data(e, n, {
                    empty: ge.Callbacks("once memory").add(function() {
                        ge._removeData(e, t + "queue"),
                        ge._removeData(e, n)
                    })
                })
            }
        }),
        ge.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--),
                arguments.length < n ? ge.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                    var n = ge.queue(this, e, t);
                    ge._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ge.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                r = ge.Deferred(),
                o = this,
                a = this.length,
                s = function() {--i || r.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ge._data(o[a], e + "queueHooks"),
                n && n.empty && (i++, n.empty.add(s));
                return s(),
                r.promise(t)
            }
        }),
        function() {
            var e;
            ye.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = se.getElementsByTagName("body")[0],
                n && n.style ? (t = se.createElement("div"), i = se.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(se.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        } ();
        var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Re = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i"),
        Pe = ["Top", "Right", "Bottom", "Left"],
        We = function(e, t) {
            return e = t || e,
            "none" === ge.css(e, "display") || !ge.contains(e.ownerDocument, e)
        },
        ze = function(e, t, n, i, r, o, a) {
            var s = 0,
            l = e.length,
            c = null == n;
            if ("object" === ge.type(n)) {
                r = !0;
                for (s in n) ze(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, ge.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                return c.call(ge(e), n)
            })), t)) for (; s < l; s++) t(e[s], n, a ? i: i.call(e[s], s, t(e[s], n)));
            return r ? e: c ? t.call(e) : l ? t(e[0], n) : o
        },
        $e = /^(?:checkbox|radio)$/i,
        Xe = /<([\w:-]+)/,
        Ue = /^$|\/(?:java|ecma)script/i,
        Ye = /^\s+/,
        Ve = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video"; !
        function() {
            var e = se.createElement("div"),
            t = se.createDocumentFragment(),
            n = se.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            ye.leadingWhitespace = 3 === e.firstChild.nodeType,
            ye.tbody = !e.getElementsByTagName("tbody").length,
            ye.htmlSerialize = !!e.getElementsByTagName("link").length,
            ye.html5Clone = "<:nav></:nav>" !== se.createElement("nav").cloneNode(!0).outerHTML,
            n.type = "checkbox",
            n.checked = !0,
            t.appendChild(n),
            ye.appendChecked = n.checked,
            e.innerHTML = "<textarea>x</textarea>",
            ye.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
            t.appendChild(e),
            n = se.createElement("input"),
            n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            e.appendChild(n),
            ye.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
            ye.noCloneEvent = !!e.addEventListener,
            e[ge.expando] = 1,
            ye.attributes = !e.getAttribute(ge.expando)
        } ();
        var Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ye.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Ge.optgroup = Ge.option,
        Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead,
        Ge.th = Ge.td;
        var Je = /<|&#?\w+;/,
        Qe = /<tbody/i; !
        function() {
            var e, t, i = se.createElement("div");
            for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) t = "on" + e,
            (ye[e] = t in n) || (i.setAttribute(t, "t"), ye[e] = i.attributes[t].expando === !1);
            i = null
        } ();
        var Ke = /^(?:input|select|textarea)$/i,
        Ze = /^key/,
        et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        tt = /^(?:focusinfocus|focusoutblur)$/,
        nt = /^([^.]*)(?:\.(.+)|)/;
        ge.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, f, p, h, y, m = ge._data(e);
                if (m) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = ge.guid++), (a = m.events) || (a = m.events = {}), (u = m.handle) || (u = m.handle = function(e) {
                        return "undefined" == typeof ge || e && ge.event.triggered === e.type ? void 0 : ge.event.dispatch.apply(u.elem, arguments)
                    },
                    u.elem = e), t = (t || "").match(_e) || [""], s = t.length; s--;) o = nt.exec(t[s]) || [],
                    p = y = o[1],
                    h = (o[2] || "").split(".").sort(),
                    p && (c = ge.event.special[p] || {},
                    p = (r ? c.delegateType: c.bindType) || p, c = ge.event.special[p] || {},
                    d = ge.extend({
                        type: p,
                        origType: y,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ge.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    },
                    l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, c.setup && c.setup.call(e, i, h, u) !== !1 || (e.addEventListener ? e.addEventListener(p, u, !1) : e.attachEvent && e.attachEvent("on" + p, u))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), ge.event.global[p] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, l, c, u, d, f, p, h, y, m = ge.hasData(e) && ge._data(e);
                if (m && (u = m.events)) {
                    for (t = (t || "").match(_e) || [""], c = t.length; c--;) if (s = nt.exec(t[c]) || [], p = y = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = ge.event.special[p] || {},
                        p = (i ? d.delegateType: d.bindType) || p, f = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o],
                        !r && y !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || ge.removeEvent(e, p, m.handle), delete u[p])
                    } else for (p in u) ge.event.remove(e, p + t[c], n, i, !0);
                    ge.isEmptyObject(u) && (delete m.handle, ge._removeData(e, "events"))
                }
            },
            trigger: function(e, t, i, r) {
                var o, a, s, l, c, u, d, f = [i || se],
                p = he.call(e, "type") ? e.type: e,
                h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = u = i = i || se, 3 !== i.nodeType && 8 !== i.nodeType && !tt.test(p + ge.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[ge.expando] ? e: new ge.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : ge.makeArray(t, [e]), c = ge.event.special[p] || {},
                r || !c.trigger || c.trigger.apply(i, t) !== !1)) {
                    if (!r && !c.noBubble && !ge.isWindow(i)) {
                        for (l = c.delegateType || p, tt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s),
                        u = s;
                        u === (i.ownerDocument || se) && f.push(u.defaultView || u.parentWindow || n)
                    }
                    for (d = 0; (s = f[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l: c.bindType || p,
                    o = (ge._data(s, "events") || {})[e.type] && ge._data(s, "handle"),
                    o && o.apply(s, t),
                    o = a && s[a],
                    o && o.apply && Me(s) && (e.result = o.apply(s, t), e.result === !1 && e.preventDefault());
                    if (e.type = p, !r && !e.isDefaultPrevented() && (!c._default || c._default.apply(f.pop(), t) === !1) && Me(i) && a && i[p] && !ge.isWindow(i)) {
                        u = i[a],
                        u && (i[a] = null),
                        ge.event.triggered = p;
                        try {
                            i[p]()
                        } catch(y) {}
                        ge.event.triggered = void 0,
                        u && (i[a] = u)
                    }
                    return e.result
                }
            },
            dispatch: function(e) {
                e = ge.event.fix(e);
                var t, n, i, r, o, a = [],
                s = le.call(arguments),
                l = (ge._data(this, "events") || {})[e.type] || [],
                c = ge.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                    for (a = ge.event.handlers.call(this, e, l), t = 0; (r = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((ge.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e),
                    e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target;
                if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                    for (i = [], n = 0; n < s; n++) o = t[n],
                    r = o.selector + " ",
                    void 0 === i[r] && (i[r] = o.needsContext ? ge(r, this).index(l) > -1 : ge.find(r, this, null, [l]).length),
                    i[r] && i.push(o);
                    i.length && a.push({
                        elem: l,
                        handlers: i
                    })
                }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }),
                a
            },
            fix: function(e) {
                if (e[ge.expando]) return e;
                var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = et.test(r) ? this.mouseHooks: Ze.test(r) ? this.keyHooks: {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ge.Event(o), t = i.length; t--;) n = i[t],
                e[n] = o[n];
                return e.target || (e.target = o.srcElement || se),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                e.metaKey = !!e.metaKey,
                a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                    e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button,
                    a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || se, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                    !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement: a),
                    e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== C() && this.focus) try {
                            return this.focus(),
                            !1
                        } catch(e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === C() && this.blur) return this.blur(),
                        !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (ge.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(),
                        !1
                    },
                    _default: function(e) {
                        return ge.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n) {
                var i = ge.extend(new ge.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                ge.event.trigger(i, null, t),
                i.isDefaultPrevented() && n.preventDefault()
            }
        },
        ge.removeEvent = se.removeEventListener ?
        function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }: function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
        },
        ge.Event = function(e, t) {
            return this instanceof ge.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? T: k) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), void(this[ge.expando] = !0)) : new ge.Event(e, t)
        },
        ge.Event.prototype = {
            constructor: ge.Event,
            isDefaultPrevented: k,
            isPropagationStopped: k,
            isImmediatePropagationStopped: k,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = T,
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = T,
                e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = T,
                e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        ge.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        },
        function(e, t) {
            ge.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                    return r && (r === i || ge.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                    n
                }
            }
        }),
        ye.submit || (ge.event.special.submit = {
            setup: function() {
                return ! ge.nodeName(this, "form") && void ge.event.add(this, "click._submit keypress._submit",
                function(e) {
                    var t = e.target,
                    n = ge.nodeName(t, "input") || ge.nodeName(t, "button") ? ge.prop(t, "form") : void 0;
                    n && !ge._data(n, "submit") && (ge.event.add(n, "submit._submit",
                    function(e) {
                        e._submitBubble = !0
                    }), ge._data(n, "submit", !0))
                })
            },
            postDispatch: function(e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && ge.event.simulate("submit", this.parentNode, e))
            },
            teardown: function() {
                return ! ge.nodeName(this, "form") && void ge.event.remove(this, "._submit")
            }
        }),
        ye.change || (ge.event.special.change = {
            setup: function() {
                return Ke.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ge.event.add(this, "propertychange._change",
                function(e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }), ge.event.add(this, "click._change",
                function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1),
                    ge.event.simulate("change", this, e)
                })), !1) : void ge.event.add(this, "beforeactivate._change",
                function(e) {
                    var t = e.target;
                    Ke.test(t.nodeName) && !ge._data(t, "change") && (ge.event.add(t, "change._change",
                    function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || ge.event.simulate("change", this.parentNode, e)
                    }), ge._data(t, "change", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return ge.event.remove(this, "._change"),
                !Ke.test(this.nodeName)
            }
        }),
        ye.focusin || ge.each({
            focus: "focusin",
            blur: "focusout"
        },
        function(e, t) {
            var n = function(e) {
                ge.event.simulate(t, e.target, ge.event.fix(e))
            };
            ge.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                    r = ge._data(i, t);
                    r || i.addEventListener(e, n, !0),
                    ge._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                    r = ge._data(i, t) - 1;
                    r ? ge._data(i, t, r) : (i.removeEventListener(e, n, !0), ge._removeData(i, t))
                }
            }
        }),
        ge.fn.extend({
            on: function(e, t, n, i) {
                return E(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return E(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
                ge(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace: i.origType, i.selector, i.handler),
                this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t, t = void 0),
                n === !1 && (n = k),
                this.each(function() {
                    ge.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ge.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return ge.event.trigger(e, t, n, !0)
            }
        });
        var it = / jQuery\d+="(?:null|\d+)"/g,
        rt = new RegExp("<(?:" + Ve + ")[\\s/>]", "i"),
        ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        at = /<script|<style|<link/i,
        st = /checked\s*(?:[^=]|=\s*.checked.)/i,
        lt = /^true\/(.*)/,
        ct = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ut = g(se),
        dt = ut.appendChild(se.createElement("div"));
        ge.extend({
            htmlPrefilter: function(e) {
                return e.replace(ot, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, o, a, s, l = ge.contains(e.ownerDocument, e);
                if (ye.html5Clone || ge.isXMLDoc(e) || !rt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (dt.innerHTML = e.outerHTML, dt.removeChild(o = dt.firstChild)), !(ye.noCloneEvent && ye.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e))) for (i = v(o), s = v(e), a = 0; null != (r = s[a]); ++a) i[a] && L(r, i[a]);
                if (t) if (n) for (s = s || v(e), i = i || v(o), a = 0; null != (r = s[a]); a++) j(r, i[a]);
                else j(e, o);
                return i = v(o, "script"),
                i.length > 0 && x(i, !l && v(e, "script")),
                i = s = r = null,
                o
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, a = 0,
                s = ge.expando,
                l = ge.cache,
                c = ye.attributes,
                u = ge.event.special; null != (n = e[a]); a++) if ((t || Me(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events) for (i in o.events) u[i] ? ge.event.remove(n, i) : ge.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], c || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ae.push(r))
                }
            }
        }),
        ge.fn.extend({
            domManip: D,
            detach: function(e) {
                return H(this, e, !0)
            },
            remove: function(e) {
                return H(this, e)
            },
            text: function(e) {
                return ze(this,
                function(e) {
                    return void 0 === e ? ge.text(this) : this.empty().append((this[0] && this[0].ownerDocument || se).createTextNode(e))
                },
                null, e, arguments.length)
            },
            append: function() {
                return D(this, arguments,
                function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = N(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return D(this, arguments,
                function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = N(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return D(this, arguments,
                function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return D(this, arguments,
                function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ge.cleanData(v(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && ge.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e: t,
                this.map(function() {
                    return ge.clone(this, e, t)
                })
            },
            html: function(e) {
                return ze(this,
                function(e) {
                    var t = this[0] || {},
                    n = 0,
                    i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(it, "") : void 0;
                    if ("string" == typeof e && !at.test(e) && (ye.htmlSerialize || !rt.test(e)) && (ye.leadingWhitespace || !Ye.test(e)) && !Ge[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = ge.htmlPrefilter(e);
                        try {
                            for (; n < i; n++) t = this[n] || {},
                            1 === t.nodeType && (ge.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch(r) {}
                    }
                    t && this.empty().append(e)
                },
                null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return D(this, arguments,
                function(t) {
                    var n = this.parentNode;
                    ge.inArray(this, e) < 0 && (ge.cleanData(v(this)), n && n.replaceChild(t, this))
                },
                e)
            }
        }),
        ge.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        },
        function(e, t) {
            ge.fn[e] = function(e) {
                for (var n, i = 0,
                r = [], o = ge(e), a = o.length - 1; i <= a; i++) n = i === a ? this: this.clone(!0),
                ge(o[i])[t](n),
                ue.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var ft, pt = {
            HTML: "block",
            BODY: "block"
        },
        ht = /^margin/,
        yt = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i"),
        mt = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t) a[o] = e.style[o],
            e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = a[o];
            return r
        },
        gt = se.documentElement; !
        function() {
            function e() {
                var e, u, d = se.documentElement;
                d.appendChild(l),
                c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                t = r = s = !1,
                i = a = !0,
                n.getComputedStyle && (u = n.getComputedStyle(c), t = "1%" !== (u || {}).top, s = "2px" === (u || {}).marginLeft, r = "4px" === (u || {
                    width: "4px"
                }).width, c.style.marginRight = "50%", i = "4px" === (u || {
                    marginRight: "4px"
                }).marginRight, e = c.appendChild(se.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", a = !parseFloat((n.getComputedStyle(e) || {}).marginRight), c.removeChild(e)),
                c.style.display = "none",
                o = 0 === c.getClientRects().length,
                o && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)),
                d.removeChild(l)
            }
            var t, i, r, o, a, s, l = se.createElement("div"),
            c = se.createElement("div");
            c.style && (c.style.cssText = "float:left;opacity:.5", ye.opacity = "0.5" === c.style.opacity, ye.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ye.clearCloneStyle = "content-box" === c.style.backgroundClip, l = se.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", l.appendChild(c), ye.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, ge.extend(ye, {
                reliableHiddenOffsets: function() {
                    return null == t && e(),
                    o
                },
                boxSizingReliable: function() {
                    return null == t && e(),
                    r
                },
                pixelMarginRight: function() {
                    return null == t && e(),
                    i
                },
                pixelPosition: function() {
                    return null == t && e(),
                    t
                },
                reliableMarginRight: function() {
                    return null == t && e(),
                    a
                },
                reliableMarginLeft: function() {
                    return null == t && e(),
                    s
                }
            }))
        } ();
        var vt, xt, bt = /^(top|right|bottom|left)$/;
        n.getComputedStyle ? (vt = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        },
        xt = function(e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || vt(e),
            a = n ? n.getPropertyValue(t) || n[t] : void 0,
            "" !== a && void 0 !== a || ge.contains(e.ownerDocument, e) || (a = ge.style(e, t)),
            n && !ye.pixelMarginRight() && yt.test(a) && ht.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o),
            void 0 === a ? a: a + ""
        }) : gt.currentStyle && (vt = function(e) {
            return e.currentStyle
        },
        xt = function(e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || vt(e),
            a = n ? n[t] : void 0,
            null == a && s && s[t] && (a = s[t]),
            yt.test(a) && !bt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em": a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)),
            void 0 === a ? a: a + "" || "auto"
        });
        var wt = /alpha\([^)]*\)/i,
        Tt = /opacity\s*=\s*([^)]*)/i,
        kt = /^(none|table(?!-c[ea]).+)/,
        Ct = new RegExp("^(" + Be + ")(.*)$", "i"),
        Et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Nt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        St = ["Webkit", "O", "Moz", "ms"],
        At = se.createElement("div").style;
        ge.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = xt(e, "opacity");
                            return "" === n ? "1": n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ye.cssFloat ? "cssFloat": "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = ge.camelCase(t),
                    l = e.style;
                    if (t = ge.cssProps[s] || (ge.cssProps[s] = M(s) || s), a = ge.cssHooks[t] || ge.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r: l[t];
                    if (o = typeof n, "string" === o && (r = Re.exec(n)) && r[1] && (n = m(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (ge.cssNumber[s] ? "": "px")), ye.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                        l[t] = n
                    } catch(c) {}
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = ge.camelCase(t);
                return t = ge.cssProps[s] || (ge.cssProps[s] = M(s) || s),
                a = ge.cssHooks[t] || ge.cssHooks[s],
                a && "get" in a && (o = a.get(e, !0, n)),
                void 0 === o && (o = xt(e, t, i)),
                "normal" === o && t in Nt && (o = Nt[t]),
                "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
            }
        }),
        ge.each(["height", "width"],
        function(e, t) {
            ge.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return kt.test(ge.css(e, "display")) && 0 === e.offsetWidth ? mt(e, Et,
                    function() {
                        return R(e, t, i)
                    }) : R(e, t, i)
                },
                set: function(e, n, i) {
                    var r = i && vt(e);
                    return I(e, n, i ? B(e, t, i, ye.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }),
        ye.opacity || (ge.cssHooks.opacity = {
            get: function(e, t) {
                return Tt.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
            },
            set: function(e, t) {
                var n = e.style,
                i = e.currentStyle,
                r = ge.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
                o = i && i.filter || n.filter || "";
                n.zoom = 1,
                (t >= 1 || "" === t) && "" === ge.trim(o.replace(wt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = wt.test(o) ? o.replace(wt, r) : o + " " + r)
            }
        }),
        ge.cssHooks.marginRight = q(ye.reliableMarginRight,
        function(e, t) {
            if (t) return mt(e, {
                display: "inline-block"
            },
            xt, [e, "marginRight"])
        }),
        ge.cssHooks.marginLeft = q(ye.reliableMarginLeft,
        function(e, t) {
            if (t) return (parseFloat(xt(e, "marginLeft")) || (ge.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - mt(e, {
                marginLeft: 0
            },
            function() {
                return e.getBoundingClientRect().left
            }) : 0)) + "px"
        }),
        ge.each({
            margin: "",
            padding: "",
            border: "Width"
        },
        function(e, t) {
            ge.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0,
                    r = {},
                    o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Pe[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            },
            ht.test(e) || (ge.cssHooks[e + t].set = I)
        }),
        ge.fn.extend({
            css: function(e, t) {
                return ze(this,
                function(e, t, n) {
                    var i, r, o = {},
                    a = 0;
                    if (ge.isArray(t)) {
                        for (i = vt(e), r = t.length; a < r; a++) o[t[a]] = ge.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t)
                },
                e, t, arguments.length > 1)
            },
            show: function() {
                return O(this, !0)
            },
            hide: function() {
                return O(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    We(this) ? ge(this).show() : ge(this).hide()
                })
            }
        }),
        ge.Tween = P,
        P.prototype = {
            constructor: P,
            init: function(e, t, n, i, r, o) {
                this.elem = e,
                this.prop = n,
                this.easing = r || ge.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = i,
                this.unit = o || (ge.cssNumber[n] ? "": "px")
            },
            cur: function() {
                var e = P.propHooks[this.prop];
                return e && e.get ? e.get(this) : P.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = P.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : P.propHooks._default.set(this),
                this
            }
        },
        P.prototype.init.prototype = P.prototype,
        P.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0)
                },
                set: function(e) {
                    ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now: ge.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        P.propHooks.scrollTop = P.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        ge.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return.5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        ge.fx = P.prototype.init,
        ge.fx.step = {};
        var jt, Lt, Dt = /^(?:toggle|show|hide)$/,
        Ht = /queueHooks$/;
        ge.Animation = ge.extend(Y, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return m(n.elem, e, Re.exec(t), n),
                    n
                }]
            },
            tweener: function(e, t) {
                ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(_e);
                for (var n, i = 0,
                r = e.length; i < r; i++) n = e[i],
                Y.tweeners[n] = Y.tweeners[n] || [],
                Y.tweeners[n].unshift(t)
            },
            prefilters: [X],
            prefilter: function(e, t) {
                t ? Y.prefilters.unshift(e) : Y.prefilters.push(e)
            }
        }),
        ge.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ge.extend({},
            e) : {
                complete: n || !n && t || ge.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ge.isFunction(t) && t
            };
            return i.duration = ge.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in ge.fx.speeds ? ge.fx.speeds[i.duration] : ge.fx.speeds._default,
            null != i.queue && i.queue !== !0 || (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function() {
                ge.isFunction(i.old) && i.old.call(this),
                i.queue && ge.dequeue(this, i.queue)
            },
            i
        },
        ge.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(We).css("opacity", 0).show().end().animate({
                    opacity: t
                },
                e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = ge.isEmptyObject(e),
                o = ge.speed(t, n, i),
                a = function() {
                    var t = Y(this, ge.extend({},
                    e), o); (r || ge._data(this, "finish")) && t.stop(!0)
                };
                return a.finish = a,
                r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0),
                t && e !== !1 && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0,
                    r = null != e && e + "queueHooks",
                    o = ge.timers,
                    a = ge._data(this);
                    if (r) a[r] && a[r].stop && i(a[r]);
                    else for (r in a) a[r] && a[r].stop && Ht.test(r) && i(a[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1)); ! t && n || ge.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                this.each(function() {
                    var t, n = ge._data(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = ge.timers,
                    a = i ? i.length: 0;
                    for (n.finish = !0, ge.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        ge.each(["toggle", "show", "hide"],
        function(e, t) {
            var n = ge.fn[t];
            ge.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, i, r)
            }
        }),
        ge.each({
            slideDown: z("show"),
            slideUp: z("hide"),
            slideToggle: z("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        },
        function(e, t) {
            ge.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }),
        ge.timers = [],
        ge.fx.tick = function() {
            var e, t = ge.timers,
            n = 0;
            for (jt = ge.now(); n < t.length; n++) e = t[n],
            e() || t[n] !== e || t.splice(n--, 1);
            t.length || ge.fx.stop(),
            jt = void 0
        },
        ge.fx.timer = function(e) {
            ge.timers.push(e),
            e() ? ge.fx.start() : ge.timers.pop()
        },
        ge.fx.interval = 13,
        ge.fx.start = function() {
            Lt || (Lt = n.setInterval(ge.fx.tick, ge.fx.interval))
        },
        ge.fx.stop = function() {
            n.clearInterval(Lt),
            Lt = null
        },
        ge.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        ge.fn.delay = function(e, t) {
            return e = ge.fx ? ge.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, i) {
                var r = n.setTimeout(t, e);
                i.stop = function() {
                    n.clearTimeout(r)
                }
            })
        },
        function() {
            var e, t = se.createElement("input"),
            n = se.createElement("div"),
            i = se.createElement("select"),
            r = i.appendChild(se.createElement("option"));
            n = se.createElement("div"),
            n.setAttribute("className", "t"),
            n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            e = n.getElementsByTagName("a")[0],
            t.setAttribute("type", "checkbox"),
            n.appendChild(t),
            e = n.getElementsByTagName("a")[0],
            e.style.cssText = "top:1px",
            ye.getSetAttribute = "t" !== n.className,
            ye.style = /top/.test(e.getAttribute("style")),
            ye.hrefNormalized = "/a" === e.getAttribute("href"),
            ye.checkOn = !!t.value,
            ye.optSelected = r.selected,
            ye.enctype = !!se.createElement("form").enctype,
            i.disabled = !0,
            ye.optDisabled = !r.disabled,
            t = se.createElement("input"),
            t.setAttribute("value", ""),
            ye.input = "" === t.getAttribute("value"),
            t.value = "t",
            t.setAttribute("type", "radio"),
            ye.radioValue = "t" === t.value
        } ();
        var _t = /\r/g,
        Ft = /[\x20\t\r\n\f]+/g;
        ge.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0]; {
                    if (arguments.length) return i = ge.isFunction(e),
                    this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, ge(this).val()) : e, null == r ? r = "": "number" == typeof r ? r += "": ge.isArray(r) && (r = ge.map(r,
                        function(e) {
                            return null == e ? "": e + ""
                        })), t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return t = ge.valHooks[r.type] || ge.valHooks[r.nodeName.toLowerCase()],
                    t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n: (n = r.value, "string" == typeof n ? n.replace(_t, "") : null == n ? "": n)
                }
            }
        }),
        ge.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ge.find.attr(e, "value");
                        return null != t ? t: ge.trim(ge.text(e)).replace(Ft, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options,
                        r = e.selectedIndex,
                        o = "select-one" === e.type || r < 0,
                        a = o ? null: [], s = o ? r + 1 : i.length, l = r < 0 ? s: o ? r: 0; l < s; l++) if (n = i[l], (n.selected || l === r) && (ye.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ge.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ge(n).val(), o) return t;
                            a.push(t)
                        }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options,
                        o = ge.makeArray(t), a = r.length; a--;) if (i = r[a], ge.inArray(ge.valHooks.option.get(i), o) > -1) try {
                            i.selected = n = !0
                        } catch(s) {
                            i.scrollHeight
                        } else i.selected = !1;
                        return n || (e.selectedIndex = -1),
                        r
                    }
                }
            }
        }),
        ge.each(["radio", "checkbox"],
        function() {
            ge.valHooks[this] = {
                set: function(e, t) {
                    if (ge.isArray(t)) return e.checked = ge.inArray(ge(e).val(), t) > -1
                }
            },
            ye.checkOn || (ge.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on": e.value
            })
        });
        var qt, Mt, Ot = ge.expr.attrHandle,
        It = /^(?:checked|selected)$/i,
        Bt = ye.getSetAttribute,
        Rt = ye.input;
        ge.fn.extend({
            attr: function(e, t) {
                return ze(this, ge.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ge.removeAttr(this, e)
                })
            }
        }),
        ge.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ge.prop(e, t, n) : (1 === o && ge.isXMLDoc(e) || (t = t.toLowerCase(), r = ge.attrHooks[t] || (ge.expr.match.bool.test(t) ? Mt: qt)), void 0 !== n ? null === n ? void ge.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i: (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i: (i = ge.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ye.radioValue && "radio" === t && ge.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, r = 0,
                o = t && t.match(_e);
                if (o && 1 === e.nodeType) for (; n = o[r++];) i = ge.propFix[n] || n,
                ge.expr.match.bool.test(n) ? Rt && Bt || !It.test(n) ? e[i] = !1 : e[ge.camelCase("default-" + n)] = e[i] = !1 : ge.attr(e, n, ""),
                e.removeAttribute(Bt ? n: i)
            }
        }),
        Mt = {
            set: function(e, t, n) {
                return t === !1 ? ge.removeAttr(e, n) : Rt && Bt || !It.test(n) ? e.setAttribute(!Bt && ge.propFix[n] || n, n) : e[ge.camelCase("default-" + n)] = e[n] = !0,
                n
            }
        },
        ge.each(ge.expr.match.bool.source.match(/\w+/g),
        function(e, t) {
            var n = Ot[t] || ge.find.attr;
            Rt && Bt || !It.test(t) ? Ot[t] = function(e, t, i) {
                var r, o;
                return i || (o = Ot[t], Ot[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Ot[t] = o),
                r
            }: Ot[t] = function(e, t, n) {
                if (!n) return e[ge.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }),
        Rt && Bt || (ge.attrHooks.value = {
            set: function(e, t, n) {
                return ge.nodeName(e, "input") ? void(e.defaultValue = t) : qt && qt.set(e, t, n)
            }
        }),
        Bt || (qt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
            }
        },
        Ot.id = Ot.name = Ot.coords = function(e, t, n) {
            var i;
            if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value: null
        },
        ge.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified) return n.value
            },
            set: qt.set
        },
        ge.attrHooks.contenteditable = {
            set: function(e, t, n) {
                qt.set(e, "" !== t && t, n)
            }
        },
        ge.each(["width", "height"],
        function(e, t) {
            ge.attrHooks[t] = {
                set: function(e, n) {
                    if ("" === n) return e.setAttribute(t, "auto"),
                    n
                }
            }
        })),
        ye.style || (ge.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Pt = /^(?:input|select|textarea|button|object)$/i,
        Wt = /^(?:a|area)$/i;
        ge.fn.extend({
            prop: function(e, t) {
                return ze(this, ge.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ge.propFix[e] || e,
                this.each(function() {
                    try {
                        this[e] = void 0,
                        delete this[e]
                    } catch(t) {}
                })
            }
        }),
        ge.extend({
            prop: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, r = ge.propHooks[t]),
                void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i: e[t] = n: r && "get" in r && null !== (i = r.get(e, t)) ? i: e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ge.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Pt.test(e.nodeName) || Wt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        ye.hrefNormalized || ge.each(["href", "src"],
        function(e, t) {
            ge.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }),
        ye.optSelected || (ge.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
        function() {
            ge.propFix[this.toLowerCase()] = this
        }),
        ye.enctype || (ge.propFix.enctype = "encoding");
        var zt = /[\t\r\n\f]/g;
        ge.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s, l = 0;
                if (ge.isFunction(e)) return this.each(function(t) {
                    ge(this).addClass(e.call(this, t, V(this)))
                });
                if ("string" == typeof e && e) for (t = e.match(_e) || []; n = this[l++];) if (r = V(n), i = 1 === n.nodeType && (" " + r + " ").replace(zt, " ")) {
                    for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    s = ge.trim(i),
                    r !== s && ge.attr(n, "class", s)
                }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a, s, l = 0;
                if (ge.isFunction(e)) return this.each(function(t) {
                    ge(this).removeClass(e.call(this, t, V(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof e && e) for (t = e.match(_e) || []; n = this[l++];) if (r = V(n), i = 1 === n.nodeType && (" " + r + " ").replace(zt, " ")) {
                    for (a = 0; o = t[a++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                    s = ge.trim(i),
                    r !== s && ge.attr(n, "class", s)
                }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function(n) {
                    ge(this).toggleClass(e.call(this, n, V(this), t), t)
                }) : this.each(function() {
                    var t, i, r, o;
                    if ("string" === n) for (i = 0, r = ge(this), o = e.match(_e) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else void 0 !== e && "boolean" !== n || (t = V(this), t && ge._data(this, "__className__", t), ge.attr(this, "class", t || e === !1 ? "": ge._data(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + V(n) + " ").replace(zt, " ").indexOf(t) > -1) return ! 0;
                return ! 1
            }
        }),
        ge.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(e, t) {
            ge.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        ge.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var $t = n.location,
        Xt = ge.now(),
        Ut = /\?/,
        Yt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ge.parseJSON = function(e) {
            if (n.JSON && n.JSON.parse) return n.JSON.parse(e + "");
            var t, i = null,
            r = ge.trim(e + "");
            return r && !ge.trim(r.replace(Yt,
            function(e, n, r, o) {
                return t && n && (i = 0),
                0 === i ? e: (t = r || n, i += !o - !r, "")
            })) ? Function("return " + r)() : ge.error("Invalid JSON: " + e)
        },
        ge.parseXML = function(e) {
            var t, i;
            if (!e || "string" != typeof e) return null;
            try {
                n.DOMParser ? (i = new n.DOMParser, t = i.parseFromString(e, "text/xml")) : (t = new n.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
            } catch(r) {
                t = void 0
            }
            return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + e),
            t
        };
        var Vt = /#.*$/,
        Gt = /([?&])_=[^&]*/,
        Jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Qt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Kt = /^(?:GET|HEAD)$/,
        Zt = /^\/\//,
        en = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        tn = {},
        nn = {},
        rn = "*/".concat("*"),
        on = $t.href,
        an = en.exec(on.toLowerCase()) || [];
        ge.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: on,
                type: "GET",
                isLocal: Qt.test(an[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": rn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ge.parseJSON,
                    "text xml": ge.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Q(Q(e, ge.ajaxSettings), t) : Q(ge.ajaxSettings, e)
            },
            ajaxPrefilter: G(tn),
            ajaxTransport: G(nn),
            ajax: function(e, t) {
                function i(e, t, i, r) {
                    var o, d, v, x, w, k = t;
                    2 !== b && (b = 2, l && n.clearTimeout(l), u = void 0, s = r || "", T.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, i && (x = K(f, T, i)), x = Z(f, x, T, o), o ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ge.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (ge.etag[a] = w)), 204 === e || "HEAD" === f.type ? k = "nocontent": 304 === e ? k = "notmodified": (k = x.state, d = x.data, v = x.error, o = !v)) : (v = k, !e && k || (k = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || k) + "", o ? y.resolveWith(p, [d, k, T]) : y.rejectWith(p, [T, k, v]), T.statusCode(g), g = void 0, c && h.trigger(o ? "ajaxSuccess": "ajaxError", [T, f, o ? d: v]), m.fireWith(p, [T, k]), c && (h.trigger("ajaxComplete", [T, f]), --ge.active || ge.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0),
                t = t || {};
                var r, o, a, s, l, c, u, d, f = ge.ajaxSetup({},
                t),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? ge(p) : ge.event,
                y = ge.Deferred(),
                m = ge.Callbacks("once memory"),
                g = f.statusCode || {},
                v = {},
                x = {},
                b = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!d) for (d = {}; t = Jt.exec(s);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null: t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s: null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, v[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return b || (f.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) if (b < 2) for (t in e) g[t] = [g[t], e[t]];
                        else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t),
                        i(0, t),
                        this
                    }
                };
                if (y.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, f.url = ((e || f.url || on) + "").replace(Vt, "").replace(Zt, an[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = ge.trim(f.dataType || "*").toLowerCase().match(_e) || [""], null == f.crossDomain && (r = en.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === an[1] && r[2] === an[2] && (r[3] || ("http:" === r[1] ? "80": "443")) === (an[3] || ("http:" === an[1] ? "80": "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ge.param(f.data, f.traditional)), J(tn, f, t, T), 2 === b) return T;
                c = ge.event && f.global,
                c && 0 === ge.active++&&ge.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !Kt.test(f.type),
                a = f.url,
                f.hasContent || (f.data && (a = f.url += (Ut.test(a) ? "&": "?") + f.data, delete f.data), f.cache === !1 && (f.url = Gt.test(a) ? a.replace(Gt, "$1_=" + Xt++) : a + (Ut.test(a) ? "&": "?") + "_=" + Xt++)),
                f.ifModified && (ge.lastModified[a] && T.setRequestHeader("If-Modified-Since", ge.lastModified[a]), ge.etag[a] && T.setRequestHeader("If-None-Match", ge.etag[a])),
                (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", f.contentType),
                T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + rn + "; q=0.01": "") : f.accepts["*"]);
                for (o in f.headers) T.setRequestHeader(o, f.headers[o]);
                if (f.beforeSend && (f.beforeSend.call(p, T, f) === !1 || 2 === b)) return T.abort();
                w = "abort";
                for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[o](f[o]);
                if (u = J(nn, f, t, T)) {
                    if (T.readyState = 1, c && h.trigger("ajaxSend", [T, f]), 2 === b) return T;
                    f.async && f.timeout > 0 && (l = n.setTimeout(function() {
                        T.abort("timeout")
                    },
                    f.timeout));
                    try {
                        b = 1,
                        u.send(v, i)
                    } catch(k) {
                        if (! (b < 2)) throw k;
                        i( - 1, k)
                    }
                } else i( - 1, "No Transport");
                return T
            },
            getJSON: function(e, t, n) {
                return ge.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return ge.get(e, void 0, t, "script")
            }
        }),
        ge.each(["get", "post"],
        function(e, t) {
            ge[t] = function(e, n, i, r) {
                return ge.isFunction(n) && (r = r || i, i = n, n = void 0),
                ge.ajax(ge.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                },
                ge.isPlainObject(e) && e))
            }
        }),
        ge._evalUrl = function(e) {
            return ge.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        },
        ge.fn.extend({
            wrapAll: function(e) {
                if (ge.isFunction(e)) return this.each(function(t) {
                    ge(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = ge(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return ge.isFunction(e) ? this.each(function(t) {
                    ge(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ge(this),
                    n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ge.isFunction(e);
                return this.each(function(n) {
                    ge(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ge.nodeName(this, "body") || ge(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        ge.expr.filters.hidden = function(e) {
            return ye.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length: te(e)
        },
        ge.expr.filters.visible = function(e) {
            return ! ge.expr.filters.hidden(e)
        };
        var sn = /%20/g,
        ln = /\[\]$/,
        cn = /\r?\n/g,
        un = /^(?:submit|button|image|reset|file)$/i,
        dn = /^(?:input|select|textarea|keygen)/i;
        ge.param = function(e, t) {
            var n, i = [],
            r = function(e, t) {
                t = ge.isFunction(t) ? t() : null == t ? "": t,
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = ge.ajaxSettings && ge.ajaxSettings.traditional), ge.isArray(e) || e.jquery && !ge.isPlainObject(e)) ge.each(e,
            function() {
                r(this.name, this.value)
            });
            else for (n in e) ne(n, e[n], t, r);
            return i.join("&").replace(sn, "+")
        },
        ge.fn.extend({
            serialize: function() {
                return ge.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ge.prop(this, "elements");
                    return e ? ge.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ge(this).is(":disabled") && dn.test(this.nodeName) && !un.test(e) && (this.checked || !$e.test(e))
                }).map(function(e, t) {
                    var n = ge(this).val();
                    return null == n ? null: ge.isArray(n) ? ge.map(n,
                    function(e) {
                        return {
                            name: t.name,
                            value: e.replace(cn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(cn, "\r\n")
                    }
                }).get()
            }
        }),
        ge.ajaxSettings.xhr = void 0 !== n.ActiveXObject ?
        function() {
            return this.isLocal ? re() : se.documentMode > 8 ? ie() : /^(get|post|head|put|delete|options)$/i.test(this.type) && ie() || re()
        }: ie;
        var fn = 0,
        pn = {},
        hn = ge.ajaxSettings.xhr();
        n.attachEvent && n.attachEvent("onunload",
        function() {
            for (var e in pn) pn[e](void 0, !0)
        }),
        ye.cors = !!hn && "withCredentials" in hn,
        hn = ye.ajax = !!hn,
        hn && ge.ajaxTransport(function(e) {
            if (!e.crossDomain || ye.cors) {
                var t;
                return {
                    send: function(i, r) {
                        var o, a = e.xhr(),
                        s = ++fn;
                        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) a[o] = e.xhrFields[o];
                        e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                        e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (o in i) void 0 !== i[o] && a.setRequestHeader(o, i[o] + "");
                        a.send(e.hasContent && e.data || null),
                        t = function(n, i) {
                            var o, l, c;
                            if (t && (i || 4 === a.readyState)) if (delete pn[s], t = void 0, a.onreadystatechange = ge.noop, i) 4 !== a.readyState && a.abort();
                            else {
                                c = {},
                                o = a.status,
                                "string" == typeof a.responseText && (c.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch(u) {
                                    l = ""
                                }
                                o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = c.text ? 200 : 404
                            }
                            c && r(o, l, c, a.getAllResponseHeaders())
                        },
                        e.async ? 4 === a.readyState ? n.setTimeout(t) : a.onreadystatechange = pn[s] = t: t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }),
        ge.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return ge.globalEval(e),
                    e
                }
            }
        }),
        ge.ajaxPrefilter("script",
        function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET", e.global = !1)
        }),
        ge.ajaxTransport("script",
        function(e) {
            if (e.crossDomain) {
                var t, n = se.head || ge("head")[0] || se.documentElement;
                return {
                    send: function(i, r) {
                        t = se.createElement("script"),
                        t.async = !0,
                        e.scriptCharset && (t.charset = e.scriptCharset),
                        t.src = e.url,
                        t.onload = t.onreadystatechange = function(e, n) { (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        },
                        n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var yn = [],
        mn = /(=)\?(?=&|$)|\?\?/;
        ge.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = yn.pop() || ge.expando + "_" + Xt++;
                return this[e] = !0,
                e
            }
        }),
        ge.ajaxPrefilter("json jsonp",
        function(e, t, i) {
            var r, o, a, s = e.jsonp !== !1 && (mn.test(e.url) ? "url": "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && mn.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = ge.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(mn, "$1" + r) : e.jsonp !== !1 && (e.url += (Ut.test(e.url) ? "&": "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return a || ge.error(r + " was not called"),
                a[0]
            },
            e.dataTypes[0] = "json",
            o = n[r],
            n[r] = function() {
                a = arguments
            },
            i.always(function() {
                void 0 === o ? ge(n).removeProp(r) : n[r] = o,
                e[r] && (e.jsonpCallback = t.jsonpCallback, yn.push(r)),
                a && ge.isFunction(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
        }),
        ge.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1),
            t = t || se;
            var i = Ne.exec(e),
            r = !n && [];
            return i ? [t.createElement(i[1])] : (i = w([e], t, r), r && r.length && ge(r).remove(), ge.merge([], i.childNodes))
        };
        var gn = ge.fn.load;
        ge.fn.load = function(e, t, n) {
            if ("string" != typeof e && gn) return gn.apply(this, arguments);
            var i, r, o, a = this,
            s = e.indexOf(" ");
            return s > -1 && (i = ge.trim(e.slice(s, e.length)), e = e.slice(0, s)),
            ge.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"),
            a.length > 0 && ge.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments,
                a.html(i ? ge("<div>").append(ge.parseHTML(e)).find(i) : e)
            }).always(n &&
            function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }),
            this
        },
        ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
        function(e, t) {
            ge.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        ge.expr.filters.animated = function(e) {
            return ge.grep(ge.timers,
            function(t) {
                return e === t.elem
            }).length
        },
        ge.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, l, c, u = ge.css(e, "position"),
                d = ge(e),
                f = {};
                "static" === u && (e.style.position = "relative"),
                s = d.offset(),
                o = ge.css(e, "top"),
                l = ge.css(e, "left"),
                c = ("absolute" === u || "fixed" === u) && ge.inArray("auto", [o, l]) > -1,
                c ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0),
                ge.isFunction(t) && (t = t.call(e, n, ge.extend({},
                s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + r),
                "using" in t ? t.using.call(e, f) : d.css(f)
            }
        },
        ge.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                    ge.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
                if (o) return t = o.documentElement,
                ge.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = oe(o), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                    return "fixed" === ge.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ge.nodeName(e[0], "html") || (n = e.offset()), n.top += ge.css(e[0], "borderTopWidth", !0), n.left += ge.css(e[0], "borderLeftWidth", !0)),
                    {
                        top: t.top - n.top - ge.css(i, "marginTop", !0),
                        left: t.left - n.left - ge.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && !ge.nodeName(e, "html") && "static" === ge.css(e, "position");) e = e.offsetParent;
                    return e || gt
                })
            }
        }),
        ge.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        },
        function(e, t) {
            var n = /Y/.test(t);
            ge.fn[e] = function(i) {
                return ze(this,
                function(e, i, r) {
                    var o = oe(e);
                    return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? ge(o).scrollLeft() : r, n ? r: ge(o).scrollTop()) : e[i] = r)
                },
                e, i, arguments.length, null)
            }
        }),
        ge.each(["top", "left"],
        function(e, t) {
            ge.cssHooks[t] = q(ye.pixelPosition,
            function(e, n) {
                if (n) return n = xt(e, t),
                yt.test(n) ? ge(e).position()[t] + "px": n
            })
        }),
        ge.each({
            Height: "height",
            Width: "width"
        },
        function(e, t) {
            ge.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            },
            function(n, i) {
                ge.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                    a = n || (i === !0 || r === !0 ? "margin": "border");
                    return ze(this,
                    function(t, n, i) {
                        var r;
                        return ge.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? ge.css(t, n, a) : ge.style(t, n, i, a)
                    },
                    t, o ? i: void 0, o, null)
                }
            })
        }),
        ge.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        ge.fn.size = function() {
            return this.length
        },
        ge.fn.andSelf = ge.fn.addBack,
        i = [],
        r = function() {
            return ge
        }.apply(t, i),
        !(void 0 !== r && (e.exports = r));
        var vn = n.jQuery,
        xn = n.$;
        return ge.noConflict = function(e) {
            return n.$ === ge && (n.$ = xn),
            e && n.jQuery === ge && (n.jQuery = vn),
            ge
        },
        ge
    })
},
function(e, t, n) {
    var i, r; !
    function(o) {
        var a = !1;
        if (i = o, r = "function" == typeof i ? i.call(t, n, t, e) : i, !(void 0 !== r && (e.exports = r)), a = !0, e.exports = o(), a = !0, !a) {
            var s = window.Cookies,
            l = window.Cookies = o();
            l.noConflict = function() {
                return window.Cookies = s,
                l
            }
        }
    } (function() {
        function e() {
            for (var e = 0,
            t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) t[i] = n[i]
            }
            return t
        }
        function t(n) {
            function i(t, r, o) {
                var a;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (o = e({
                            path: "/"
                        },
                        i.defaults, o), "number" == typeof o.expires) {
                            var s = new Date;
                            s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires),
                            o.expires = s
                        }
                        o.expires = o.expires ? o.expires.toUTCString() : "";
                        try {
                            a = JSON.stringify(r),
                            /^[\{\[]/.test(a) && (r = a)
                        } catch(l) {}
                        r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                        t = encodeURIComponent(String(t)),
                        t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent),
                        t = t.replace(/[\(\)]/g, escape);
                        var c = "";
                        for (var u in o) o[u] && (c += "; " + u, o[u] !== !0 && (c += "=" + o[u]));
                        return document.cookie = t + "=" + r + c
                    }
                    t || (a = {});
                    for (var d = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, p = 0; p < d.length; p++) {
                        var h = d[p].split("="),
                        y = h.slice(1).join("=");
                        this.json || '"' !== y.charAt(0) || (y = y.slice(1, -1));
                        try {
                            var m = h[0].replace(f, decodeURIComponent);
                            if (y = n.read ? n.read(y, m) : n(y, m) || y.replace(f, decodeURIComponent), this.json) try {
                                y = JSON.parse(y)
                            } catch(l) {}
                            if (t === m) {
                                a = y;
                                break
                            }
                            t || (a[m] = y)
                        } catch(l) {}
                    }
                    return a
                }
            }
            return i.set = i,
            i.get = function(e) {
                return i.call(i, e)
            },
            i.getJSON = function() {
                return i.apply({
                    json: !0
                },
                [].slice.call(arguments))
            },
            i.defaults = {},
            i.remove = function(t, n) {
                i(t, "", e(n, {
                    expires: -1
                }))
            },
            i.withConverter = t,
            i
        }
        return t(function() {})
    })
},
function(e, t, n) {
    var i, r = n(1),
    o = {
        getPath: function() {
            var e = document.scripts,
            t = e[e.length - 1],
            n = t.src;
            if (!t.getAttribute("merge")) return n.substring(0, n.lastIndexOf("/") + 1)
        } (),
        enter: function(e) {
            13 === e.keyCode && e.preventDefault()
        },
        config: {},
        end: {},
        btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
        type: ["dialog", "page", "iframe", "loading", "tips"]
    },
    a = {
        v: "2.4",
        ie6: !!window.ActiveXObject && !window.XMLHttpRequest,
        index: 0,
        path: o.getPath,
        config: function(e, t) {
            return e = e || {},
            a.cache = o.config = r.extend(o.config, e),
            a.path = o.config.path || a.path,
            "string" == typeof e.extend && (e.extend = [e.extend]),
            this
        },
        use: function(e, t, n) {
            var i = r("head")[0],
            e = e.replace(/\s/g, ""),
            o = /\.css$/.test(e),
            s = document.createElement(o ? "link": "script"),
            l = "layui_layer_" + e.replace(/\.|\/|:/g, "");
            if (a.path) return o && (s.rel = "stylesheet"),
            s[o ? "href": "src"] = /^http:\/\//.test(e) || /^https:\/\//.test(e) ? e: a.path + e,
            s.id = l,
            r("#" + l)[0] || i.appendChild(s),
            function c() { (o ? 1989 === parseInt(r("#" + l).css("width")) : a[n || l]) ?
                function() {
                    t && t();
                    try {
                        o || i.removeChild(s)
                    } catch(e) {}
                } () : setTimeout(c, 100)
            } (),
            this
        },
        ready: function(e, t) {
            var n = "function" == typeof e;
            return n && (t = e),
            a.config(r.extend(o.config,
            function() {
                return n ? {}: {
                    path: e
                }
            } ()), t),
            this
        },
        alert: function(e, t, n) {
            var i = "function" == typeof t;
            return i && (n = t),
            a.open(r.extend({
                content: e,
                yes: n
            },
            i ? {}: t))
        },
        confirm: function(e, t, n, i) {
            var s = "function" == typeof t;
            return s && (i = n, n = t),
            a.open(r.extend({
                content: e,
                btn: o.btn,
                yes: n,
                btn2: i
            },
            s ? {}: t))
        },
        msg: function(e, t, n) {
            var i = "function" == typeof t,
            s = o.config.skin,
            c = (s ? s + " " + s + "-msg": "") || "layui-layer-msg",
            u = l.anim.length - 1;
            return i && (n = t),
            a.open(r.extend({
                content: e,
                time: 3e3,
                shade: !1,
                skin: c,
                title: !1,
                closeBtn: !1,
                btn: !1,
                end: n
            },
            i && !o.config.skin ? {
                skin: c + " layui-layer-hui",
                shift: u
            }: function() {
                return t = t || {},
                (t.icon === -1 || void 0 === t.icon && !o.config.skin) && (t.skin = c + " " + (t.skin || "layui-layer-hui")),
                t
            } ()))
        },
        load: function(e, t) {
            return a.open(r.extend({
                type: 3,
                icon: e || 0,
                shade: .01
            },
            t))
        },
        tips: function(e, t, n) {
            return a.open(r.extend({
                type: 4,
                content: [e, t],
                closeBtn: !1,
                time: 3e3,
                shade: !1,
                fix: !1,
                maxWidth: 210
            },
            n))
        }
    },
    s = function(e) {
        var t = this;
        t.index = ++a.index,
        t.config = r.extend({},
        t.config, o.config, e),
        t.creat()
    };
    s.pt = s.prototype;
    var l = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
    l.anim = ["layer-anim", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04", "layer-anim-05", "layer-anim-06"],
    s.pt.config = {
        type: 0,
        shade: .3,
        fix: !0,
        move: l[1],
        title: "&#x4FE1;&#x606F;",
        offset: "auto",
        area: "auto",
        closeBtn: 1,
        time: 0,
        zIndex: 19891014,
        maxWidth: 360,
        shift: 0,
        icon: -1,
        scrollbar: !0,
        tips: 2
    },
    s.pt.vessel = function(e, t) {
        var n = this,
        i = n.index,
        r = n.config,
        a = r.zIndex + i,
        s = "object" == typeof r.title,
        c = r.maxmin && (1 === r.type || 2 === r.type),
        u = r.title ? '<div class="layui-layer-title" style="' + (s ? r.title[1] : "") + '">' + (s ? r.title[0] : r.title) + "</div>": "";
        return r.zIndex = a,
        t([r.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + i + '" times="' + i + '" style="' + ("z-index:" + (a - 1) + "; background-color:" + (r.shade[1] || "#000") + "; opacity:" + (r.shade[0] || r.shade) + "; filter:alpha(opacity=" + (100 * r.shade[0] || 100 * r.shade) + ");") + '"></div>': "", '<div class="' + l[0] + (" layui-layer-" + o.type[r.type]) + (0 != r.type && 2 != r.type || r.shade ? "": " layui-layer-border") + " " + (r.skin || "") + '" id="' + l[0] + i + '" type="' + o.type[r.type] + '" times="' + i + '" showtime="' + r.time + '" conType="' + (e ? "object": "string") + '" style="z-index: ' + a + "; width:" + r.area[0] + ";height:" + r.area[1] + (r.fix ? "": ";position:absolute;") + '">' + (e && 2 != r.type ? "": u) + '<div id="' + (r.id || "") + '" class="layui-layer-content' + (0 == r.type && r.icon !== -1 ? " layui-layer-padding": "") + (3 == r.type ? " layui-layer-loading" + r.icon: "") + '">' + (0 == r.type && r.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + r.icon + '"></i>': "") + (1 == r.type && e ? "": r.content || "") + '</div><span class="layui-layer-setwin">' +
        function() {
            var e = c ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>': "";
            return r.closeBtn && (e += '<a class="layui-layer-ico ' + l[7] + " " + l[7] + (r.title ? r.closeBtn: 4 == r.type ? "1": "2") + '" href="javascript:;"></a>'),
            e
        } () + "</span>" + (r.btn ?
        function() {
            var e = "";
            "string" == typeof r.btn && (r.btn = [r.btn]);
            for (var t = 0,
            n = r.btn.length; t < n; t++) e += '<a class="' + l[6] + t + '">' + r.btn[t] + "</a>";
            return '<div class="' + l[6] + '">' + e + "</div>"
        } () : "") + "</div>"], u),
        n
    },
    s.pt.creat = function() {
        var e = this,
        t = e.config,
        n = e.index,
        s = t.content,
        c = "object" == typeof s;
        if (!r("#" + t.id)[0]) {
            switch ("string" == typeof t.area && (t.area = "auto" === t.area ? ["", ""] : [t.area, ""]), t.type) {
            case 0:
                t.btn = "btn" in t ? t.btn: o.btn[0],
                a.closeAll("dialog");
                break;
            case 2:
                var s = t.content = c ? t.content: [t.content || "http://zlkb.net", "auto"];
                t.content = '<iframe scrolling="' + (t.content[1] || "auto") + '" allowtransparency="true" id="' + l[4] + n + '" name="' + l[4] + n + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + t.content[0] + '"></iframe>';
                break;
            case 3:
                t.title = !1,
                t.closeBtn = !1,
                t.icon === -1 && 0 === t.icon,
                a.closeAll("loading");
                break;
            case 4:
                c || (t.content = [t.content, "body"]),
                t.follow = t.content[1],
                t.content = t.content[0] + '<i class="layui-layer-TipsG"></i>',
                t.title = !1,
                t.tips = "object" == typeof t.tips ? t.tips: [t.tips, !0],
                t.tipsMore || a.closeAll("tips")
            }
            e.vessel(c,
            function(i, o) {
                r("body").append(i[0]),
                c ?
                function() {
                    2 == t.type || 4 == t.type ?
                    function() {
                        r("body").append(i[1])
                    } () : function() {
                        s.parents("." + l[0])[0] || (s.show().addClass("layui-layer-wrap").wrap(i[1]), r("#" + l[0] + n).find("." + l[5]).before(o))
                    } ()
                } () : r("body").append(i[1]),
                e.layero = r("#" + l[0] + n),
                t.scrollbar || l.html.css("overflow", "hidden").attr("layer-full", n)
            }).auto(n),
            2 == t.type && a.ie6 && e.layero.find("iframe").attr("src", s[0]),
            r(document).off("keydown", o.enter).on("keydown", o.enter),
            e.layero.on("keydown",
            function(e) {
                r(document).off("keydown", o.enter)
            }),
            4 == t.type ? e.tips() : e.offset(),
            t.fix && i.on("resize",
            function() {
                e.offset(),
                (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(n),
                4 == t.type && e.tips()
            }),
            t.time <= 0 || setTimeout(function() {
                a.close(e.index)
            },
            t.time),
            e.move().callback(),
            l.anim[t.shift] && e.layero.addClass(l.anim[t.shift])
        }
    },
    s.pt.auto = function(e) {
        function t(e) {
            e = a.find(e),
            e.height(s[1] - c - u - 2 * (0 | parseFloat(e.css("padding"))))
        }
        var n = this,
        o = n.config,
        a = r("#" + l[0] + e);
        "" === o.area[0] && o.maxWidth > 0 && (/MSIE 7/.test(navigator.userAgent) && o.btn && a.width(a.innerWidth()), a.outerWidth() > o.maxWidth && a.width(o.maxWidth));
        var s = [a.innerWidth(), a.innerHeight()],
        c = a.find(l[1]).outerHeight() || 0,
        u = a.find("." + l[6]).outerHeight() || 0;
        switch (o.type) {
        case 2:
            t("iframe");
            break;
        default:
            "" === o.area[1] ? o.fix && s[1] >= i.height() && (s[1] = i.height(), t("." + l[5])) : t("." + l[5])
        }
        return n
    },
    s.pt.offset = function() {
        var e = this,
        t = e.config,
        n = e.layero,
        r = [n.outerWidth(), n.outerHeight()],
        o = "object" == typeof t.offset;
        e.offsetTop = (i.height() - r[1]) / 2,
        e.offsetLeft = (i.width() - r[0]) / 2,
        o ? (e.offsetTop = t.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && (e.offsetTop = t.offset, "rb" === t.offset && (e.offsetTop = i.height() - r[1], e.offsetLeft = i.width() - r[0])),
        t.fix || (e.offsetTop = /%$/.test(e.offsetTop) ? i.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e.offsetLeft) ? i.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e.offsetTop += i.scrollTop(), e.offsetLeft += i.scrollLeft()),
        n.css({
            top: e.offsetTop,
            left: e.offsetLeft
        })
    },
    s.pt.tips = function() {
        var e = this,
        t = e.config,
        n = e.layero,
        o = [n.outerWidth(), n.outerHeight()],
        a = r(t.follow);
        a[0] || (a = r("body"));
        var s = {
            width: a.outerWidth(),
            height: a.outerHeight(),
            top: a.offset().top,
            left: a.offset().left
        },
        c = n.find(".layui-layer-TipsG"),
        u = t.tips[0];
        t.tips[1] || c.remove(),
        s.autoLeft = function() {
            s.left + o[0] - i.width() > 0 ? (s.tipLeft = s.left + s.width - o[0], c.css({
                right: 12,
                left: "auto"
            })) : s.tipLeft = s.left
        },
        s.where = [function() {
            s.autoLeft(),
            s.tipTop = s.top - o[1] - 10,
            c.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", t.tips[1])
        },
        function() {
            s.tipLeft = s.left + s.width + 10,
            s.tipTop = s.top,
            c.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", t.tips[1])
        },
        function() {
            s.autoLeft(),
            s.tipTop = s.top + s.height + 10,
            c.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", t.tips[1])
        },
        function() {
            s.tipLeft = s.left - o[0] - 10,
            s.tipTop = s.top,
            c.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", t.tips[1])
        }],
        s.where[u - 1](),
        1 === u ? s.top - (i.scrollTop() + o[1] + 16) < 0 && s.where[2]() : 2 === u ? i.width() - (s.left + s.width + o[0] + 16) > 0 || s.where[3]() : 3 === u ? s.top - i.scrollTop() + s.height + o[1] + 16 - i.height() > 0 && s.where[0]() : 4 === u && o[0] + 16 - s.left > 0 && s.where[1](),
        n.find("." + l[5]).css({
            "background-color": t.tips[1],
            "padding-right": t.closeBtn ? "30px": ""
        }),
        n.css({
            left: s.tipLeft - (t.fix ? i.scrollLeft() : 0),
            top: s.tipTop - (t.fix ? i.scrollTop() : 0)
        })
    },
    s.pt.move = function() {
        var e = this,
        t = e.config,
        n = {
            setY: 0,
            moveLayer: function() {
                var e = n.layero,
                t = parseInt(e.css("margin-left")),
                i = parseInt(n.move.css("left"));
                0 === t || (i -= t),
                "fixed" !== e.css("position") && (i -= e.parent().offset().left, n.setY = 0),
                e.css({
                    left: i,
                    top: parseInt(n.move.css("top")) - n.setY
                })
            }
        },
        o = e.layero.find(t.move);
        return t.move && o.attr("move", "ok"),
        o.css({
            cursor: t.move ? "move": "auto"
        }),
        r(t.move).on("mousedown",
        function(e) {
            if (e.preventDefault(), "ok" === r(this).attr("move")) {
                n.ismove = !0,
                n.layero = r(this).parents("." + l[0]);
                var o = n.layero.offset().left,
                a = n.layero.offset().top,
                s = n.layero.outerWidth() - 6,
                c = n.layero.outerHeight() - 6;
                r("#layui-layer-moves")[0] || r("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:' + o + "px; top:" + a + "px; width:" + s + "px; height:" + c + 'px; z-index:2147483584"></div>'),
                n.move = r("#layui-layer-moves"),
                t.moveType && n.move.css({
                    visibility: "hidden"
                }),
                n.moveX = e.pageX - n.move.position().left,
                n.moveY = e.pageY - n.move.position().top,
                "fixed" !== n.layero.css("position") || (n.setY = i.scrollTop())
            }
        }),
        r(document).mousemove(function(e) {
            if (n.ismove) {
                var r = e.pageX - n.moveX,
                o = e.pageY - n.moveY;
                if (e.preventDefault(), !t.moveOut) {
                    n.setY = i.scrollTop();
                    var a = i.width() - n.move.outerWidth(),
                    s = n.setY;
                    r < 0 && (r = 0),
                    r > a && (r = a),
                    o < s && (o = s),
                    o > i.height() - n.move.outerHeight() + n.setY && (o = i.height() - n.move.outerHeight() + n.setY)
                }
                n.move.css({
                    left: r,
                    top: o
                }),
                t.moveType && n.moveLayer(),
                r = o = a = s = null
            }
        }).mouseup(function() {
            try {
                n.ismove && (n.moveLayer(), n.move.remove(), t.moveEnd && t.moveEnd()),
                n.ismove = !1
            } catch(e) {
                n.ismove = !1
            }
        }),
        e
    },
    s.pt.callback = function() {
        function e() {
            var e = i.cancel && i.cancel(t.index, n);
            e === !1 || a.close(t.index)
        }
        var t = this,
        n = t.layero,
        i = t.config;
        t.openLayer(),
        i.success && (2 == i.type ? n.find("iframe").on("load",
        function() {
            i.success(n, t.index)
        }) : i.success(n, t.index)),
        a.ie6 && t.IE6(n),
        n.find("." + l[6]).children("a").on("click",
        function() {
            var e = r(this).index();
            if (0 === e) i.yes ? i.yes(t.index, n) : i.btn1 ? i.btn1(t.index, n) : a.close(t.index);
            else {
                var o = i["btn" + (e + 1)] && i["btn" + (e + 1)](t.index, n);
                o === !1 || a.close(t.index)
            }
        }),
        n.find("." + l[7]).on("click", e),
        i.shadeClose && r("#layui-layer-shade" + t.index).on("click",
        function() {
            a.close(t.index)
        }),
        n.find(".layui-layer-min").on("click",
        function() {
            var e = i.min && i.min(n);
            e === !1 || a.min(t.index, i)
        }),
        n.find(".layui-layer-max").on("click",
        function() {
            r(this).hasClass("layui-layer-maxmin") ? (a.restore(t.index), i.restore && i.restore(n)) : (a.full(t.index, i), setTimeout(function() {
                i.full && i.full(n)
            },
            100))
        }),
        i.end && (o.end[t.index] = i.end)
    },
    o.reselect = function() {
        r.each(r("select"),
        function(e, t) {
            var n = r(this);
            n.parents("." + l[0])[0] || 1 == n.attr("layer") && r("." + l[0]).length < 1 && n.removeAttr("layer").show(),
            n = null
        })
    },
    s.pt.IE6 = function(e) {
        function t() {
            e.css({
                top: o + (n.config.fix ? i.scrollTop() : 0)
            })
        }
        var n = this,
        o = e.offset().top;
        t(),
        i.scroll(t),
        r("select").each(function(e, t) {
            var n = r(this);
            n.parents("." + l[0])[0] || "none" === n.css("display") || n.attr({
                layer: "1"
            }).hide(),
            n = null
        })
    },
    s.pt.openLayer = function() {
        var e = this;
        a.zIndex = e.config.zIndex,
        a.setTop = function(e) {
            var t = function() {
                a.zIndex++,
                e.css("z-index", a.zIndex + 1)
            };
            return a.zIndex = parseInt(e[0].style.zIndex),
            e.on("mousedown", t),
            a.zIndex
        }
    },
    o.record = function(e) {
        var t = [e.width(), e.height(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
        e.find(".layui-layer-max").addClass("layui-layer-maxmin"),
        e.attr({
            area: t
        })
    },
    o.rescollbar = function(e) {
        l.html.attr("layer-full") == e && (l.html[0].style.removeProperty ? l.html[0].style.removeProperty("overflow") : l.html[0].style.removeAttribute("overflow"), l.html.removeAttr("layer-full"))
    },
    a.getChildFrame = function(e, t) {
        return t = t || r("." + l[4]).attr("times"),
        r("#" + l[0] + t).find("iframe").contents().find(e)
    },
    a.getFrameIndex = function(e) {
        return r("#" + e).parents("." + l[4]).attr("times")
    },
    a.iframeAuto = function(e) {
        if (e) {
            var t = a.getChildFrame("html", e).outerHeight(),
            n = r("#" + l[0] + e),
            i = n.find(l[1]).outerHeight() || 0,
            o = n.find("." + l[6]).outerHeight() || 0;
            n.css({
                height: t + i + o
            }),
            n.find("iframe").css({
                height: t
            })
        }
    },
    a.iframeSrc = function(e, t) {
        r("#" + l[0] + e).find("iframe").attr("src", t)
    },
    a.style = function(e, t) {
        var n = r("#" + l[0] + e),
        i = n.attr("type"),
        a = n.find(l[1]).outerHeight() || 0,
        s = n.find("." + l[6]).outerHeight() || 0;
        i !== o.type[1] && i !== o.type[2] || (n.css(t), i === o.type[2] && n.find("iframe").css({
            height: parseFloat(t.height) - a - s
        }))
    },
    a.min = function(e, t) {
        var n = r("#" + l[0] + e),
        i = n.find(l[1]).outerHeight() || 0;
        o.record(n),
        a.style(e, {
            width: 180,
            height: i,
            overflow: "hidden"
        }),
        n.find(".layui-layer-min").hide(),
        "page" === n.attr("type") && n.find(l[4]).hide(),
        o.rescollbar(e)
    },
    a.restore = function(e) {
        var t = r("#" + l[0] + e),
        n = t.attr("area").split(",");
        t.attr("type");
        a.style(e, {
            width: parseFloat(n[0]),
            height: parseFloat(n[1]),
            top: parseFloat(n[2]),
            left: parseFloat(n[3]),
            overflow: "visible"
        }),
        t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),
        t.find(".layui-layer-min").show(),
        "page" === t.attr("type") && t.find(l[4]).show(),
        o.rescollbar(e)
    },
    a.full = function(e) {
        var t, n = r("#" + l[0] + e);
        o.record(n),
        l.html.attr("layer-full") || l.html.css("overflow", "hidden").attr("layer-full", e),
        clearTimeout(t),
        t = setTimeout(function() {
            var t = "fixed" === n.css("position");
            a.style(e, {
                top: t ? 0 : i.scrollTop(),
                left: t ? 0 : i.scrollLeft(),
                width: i.width(),
                height: i.height()
            }),
            n.find(".layui-layer-min").hide()
        },
        100)
    },
    a.title = function(e, t) {
        var n = r("#" + l[0] + (t || a.index)).find(l[1]);
        n.html(e)
    },
    a.close = function(e) {
        var t = r("#" + l[0] + e),
        n = t.attr("type");
        if (t[0]) {
            if (n === o.type[1] && "object" === t.attr("conType")) {
                t.children(":not(." + l[5] + ")").remove();
                for (var i = 0; i < 2; i++) t.find(".layui-layer-wrap").unwrap().hide()
            } else {
                if (n === o.type[2]) try {
                    var s = r("#" + l[4] + e)[0];
                    s.contentWindow.document.write(""),
                    s.contentWindow.close(),
                    t.find("." + l[5])[0].removeChild(s)
                } catch(c) {}
                t[0].innerHTML = "",
                t.remove()
            }
            r("#layui-layer-moves, #layui-layer-shade" + e).remove(),
            a.ie6 && o.reselect(),
            o.rescollbar(e),
            r(document).off("keydown", o.enter),
            "function" == typeof o.end[e] && o.end[e](),
            delete o.end[e]
        }
    },
    a.closeAll = function(e) {
        r.each(r("." + l[0]),
        function() {
            var t = r(this),
            n = e ? t.attr("type") === e: 1;
            n && a.close(t.attr("times")),
            n = null
        })
    };
    var c = a.cache || {},
    u = function(e) {
        return c.skin ? " " + c.skin + " " + c.skin + "-" + e: ""
    };
    a.prompt = function(e, t) {
        e = e || {},
        "function" == typeof e && (t = e);
        var n, i = 2 == e.formType ? '<textarea class="layui-layer-input">' + (e.value || "") + "</textarea>": function() {
            return '<input type="' + (1 == e.formType ? "password": "text") + '" class="layui-layer-input" value="' + (e.value || "") + '">'
        } ();
        return a.open(r.extend({
            btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
            content: i,
            skin: "layui-layer-prompt" + u("prompt"),
            success: function(e) {
                n = e.find(".layui-layer-input"),
                n.focus()
            },
            yes: function(i) {
                var r = n.val();
                "" === r ? n.focus() : r.length > (e.maxlength || 500) ? a.tips("&#x6700;&#x591A;&#x8F93;&#x5165;" + (e.maxlength || 500) + "&#x4E2A;&#x5B57;&#x6570;", n, {
                    tips: 1
                }) : t && t(r, i, n)
            }
        },
        e))
    },
    a.tab = function(e) {
        e = e || {};
        var t = e.tab || {};
        return a.open(r.extend({
            type: 1,
            skin: "layui-layer-tab" + u("tab"),
            title: function() {
                var e = t.length,
                n = 1,
                i = "";
                if (e > 0) for (i = '<span class="layui-layer-tabnow">' + t[0].title + "</span>"; n < e; n++) i += "<span>" + t[n].title + "</span>";
                return i
            } (),
            content: '<ul class="layui-layer-tabmain">' +
            function() {
                var e = t.length,
                n = 1,
                i = "";
                if (e > 0) for (i = '<li class="layui-layer-tabli xubox_tab_layer">' + (t[0].content || "no content") + "</li>"; n < e; n++) i += '<li class="layui-layer-tabli">' + (t[n].content || "no  content") + "</li>";
                return i
            } () + "</ul>",
            success: function(t) {
                var n = t.find(".layui-layer-title").children(),
                i = t.find(".layui-layer-tabmain").children();
                n.on("mousedown",
                function(t) {
                    t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
                    var n = r(this),
                    o = n.index();
                    n.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"),
                    i.eq(o).show().siblings().hide(),
                    "function" == typeof e.change && e.change(o)
                })
            }
        },
        e))
    },
    a.photos = function(e, t, n) {
        function i(e, t, n) {
            var i = new Image;
            return i.src = e,
            i.complete ? t(i) : (i.onload = function() {
                i.onload = null,
                t(i)
            },
            void(i.onerror = function(e) {
                i.onerror = null,
                n(e)
            }))
        }
        var o = {};
        if (e = e || {},
        e.photos) {
            var s = e.photos.constructor === Object,
            l = s ? e.photos: {},
            c = l.data || [],
            d = l.start || 0;
            if (o.imgIndex = (0 | d) + 1, e.img = e.img || "img", s) {
                if (0 === c.length) return a.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")
            } else {
                var f = r(e.photos),
                p = function() {
                    c = [],
                    f.find(e.img).each(function(e) {
                        var t = r(this);
                        t.attr("layer-index", e),
                        c.push({
                            alt: t.attr("alt"),
                            pid: t.attr("layer-pid"),
                            src: t.attr("layer-src") || t.attr("src"),
                            thumb: t.attr("src")
                        })
                    })
                };
                if (p(), 0 === c.length) return;
                if (t || f.on("click", e.img,
                function() {
                    var t = r(this),
                    n = t.attr("layer-index");
                    a.photos(r.extend(e, {
                        photos: {
                            start: n,
                            data: c,
                            tab: e.tab
                        },
                        full: e.full
                    }), !0),
                    p()
                }), !t) return
            }
            o.imgprev = function(e) {
                o.imgIndex--,
                o.imgIndex < 1 && (o.imgIndex = c.length),
                o.tabimg(e)
            },
            o.imgnext = function(e, t) {
                o.imgIndex++,
                o.imgIndex > c.length && (o.imgIndex = 1, t) || o.tabimg(e)
            },
            o.keyup = function(e) {
                if (!o.end) {
                    var t = e.keyCode;
                    e.preventDefault(),
                    37 === t ? o.imgprev(!0) : 39 === t ? o.imgnext(!0) : 27 === t && a.close(o.index)
                }
            },
            o.tabimg = function(t) {
                c.length <= 1 || (l.start = o.imgIndex - 1, a.close(o.index), a.photos(e, !0, t))
            },
            o.event = function() {
                o.bigimg.hover(function() {
                    o.imgsee.show()
                },
                function() {
                    o.imgsee.hide()
                }),
                o.bigimg.find(".layui-layer-imgprev").on("click",
                function(e) {
                    e.preventDefault(),
                    o.imgprev()
                }),
                o.bigimg.find(".layui-layer-imgnext").on("click",
                function(e) {
                    e.preventDefault(),
                    o.imgnext()
                }),
                r(document).on("keyup", o.keyup)
            },
            o.loadi = a.load(1, {
                shade: !("shade" in e) && .9,
                scrollbar: !1
            }),
            i(c[d].src,
            function(t) {
                a.close(o.loadi),
                o.index = a.open(r.extend({
                    type: 1,
                    area: function() {
                        var n = [t.width, t.height],
                        i = [r(window).width() - 50, r(window).height() - 50];
                        return ! e.full && n[0] > i[0] && (n[0] = i[0], n[1] = n[0] * t.height / t.width),
                        [n[0] + "px", n[1] + "px"]
                    } (),
                    title: !1,
                    shade: .9,
                    shadeClose: !0,
                    closeBtn: !1,
                    move: ".layui-layer-phimg img",
                    moveType: 1,
                    scrollbar: !1,
                    moveOut: !0,
                    shift: 5 * Math.random() | 0,
                    skin: "layui-layer-photos" + u("photos"),
                    content: '<div class="layui-layer-phimg"><img src="' + c[d].src + '" alt="' + (c[d].alt || "") + '" layer-pid="' + c[d].pid + '"><div class="layui-layer-imgsee">' + (c.length > 1 ? '<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>': "") + '<div class="layui-layer-imgbar" style="display:' + (n ? "block": "") + '"><span class="layui-layer-imgtit"><a href="javascript:;">' + (c[d].alt || "") + "</a><em>" + o.imgIndex + "/" + c.length + "</em></span></div></div></div>",
                    success: function(t, n) {
                        o.bigimg = t.find(".layui-layer-phimg"),
                        o.imgsee = t.find(".layui-layer-imguide,.layui-layer-imgbar"),
                        o.event(t),
                        e.tab && e.tab(c[d], t)
                    },
                    end: function() {
                        o.end = !0,
                        r(document).off("keyup", o.keyup)
                    }
                },
                e))
            },
            function() {
                a.close(o.loadi),
                a.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", {
                    time: 3e4,
                    btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"],
                    yes: function() {
                        c.length > 1 && o.imgnext(!0, !0)
                    }
                })
            })
        }
    },
    o.run = function() {
        i = r(window),
        l.html = r("html"),
        a.open = function(e) {
            var t = new s(e);
            return t.index
        }
    },
    o.run(),
    e.exports = a
},
function(e, t) {
    var n = function() {
        function e(e, t, n) {
            var i = "";
            if (arguments.length < 2 ? i = "target error - target and name are both required": "object" != typeof e ? i = "target error - target itself must be window object": "string" != typeof t && (i = "target error - target name must be string type"), i) throw new Error(i);
            this.target = e,
            this.name = t,
            this.prefix = n
        }
        function t(e, t) {
            this.targets = {},
            this.name = e,
            this.listenFunc = [],
            this.prefix = t || n,
            this.initListen()
        }
        var n = "[PROJECT_NAME]",
        i = "postMessage" in window;
        return i ? e.prototype.send = function(e) {
            this.target.postMessage(this.prefix + "|" + this.name + "__Messenger__" + e, "*")
        }: e.prototype.send = function(e) {
            var t = window.navigator[this.prefix + this.name];
            if ("function" != typeof t) throw new Error("target callback function is not defined");
            t(this.prefix + e, window)
        },
        t.prototype.addTarget = function(t, n) {
            var i = new e(t, n, this.prefix);
            this.targets[n] = i
        },
        t.prototype.initListen = function() {
            var e = this,
            t = function(t) {
                "object" == typeof t && t.data && (t = t.data);
                for (var n = t.split("__Messenger__"), t = n[1], i = n[0].split("|"), r = i[0], o = i[1], a = 0; a < e.listenFunc.length; a++) r + o === e.prefix + e.name && e.listenFunc[a](t)
            };
            i ? "addEventListener" in document ? window.addEventListener("message", t, !1) : "attachEvent" in document && window.attachEvent("onmessage", t) : window.navigator[this.prefix + this.name] = t
        },
        t.prototype.listen = function(e) {
            for (var t = 0,
            n = this.listenFunc.length,
            i = !1; t < n; t++) if (this.listenFunc[t] == e) {
                i = !0;
                break
            }
            i || this.listenFunc.push(e)
        },
        t.prototype.clear = function() {
            this.listenFunc = []
        },
        t.prototype.send = function(e) {
            var t, n = this.targets;
            for (t in n) n.hasOwnProperty(t) && n[t].send(e)
        },
        t
    } ();
    e.exports = n
},
function(e, t) {
    e.exports = '.zlkbpay-content {\r\n    border: 1px dashed #FF9A9A;\r\n    padding: 8px;\r\n    font-size: 13px;\r\n    margin: 8px 0;\r\n    font-family: "Pingfang SC", "Helvetica Neue", "Microsoft Yahei", Helvetica, Arial, "Hiragino Sans GB", "Microsoft Sans Serif", "WenQuanYi Micro Hei", sans;\r\n    line-height: normal;\r\n}\r\n\r\n.zlkbpay-content img.zlkbpay-icon{\r\n\tdisplay: inline-block;\r\n    margin: 0;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.zlkbpay-content a{\r\n    text-decoration: none;\r\n    border-bottom: 1px solid #337ab7;\r\n    color: #337ab7;\r\n}\r\n\r\n.zlkbpay-content a:hover{\r\n    border-bottom: none;\r\n}\r\n\r\n.zlkbpay-content img{\r\n    max-width: 100%;\r\n}\r\n\r\n.zlkbpay-content b.price {\r\n    font-size: 16px;\r\n    color: #f57e42;\r\n    display: inline;\r\n    float: none;\r\n}\r\n.zlkbpay-content .hashid {\r\n    color: #999;\r\n    font-size: 12px;\r\n    margin-top: 6px;\r\n}\r\n.zlkbpay-content a.hash-link,\r\n.zlkbpay-content a.hash-link:hover{\r\n    text-decoration: none;\r\n    border: none;\r\n    color: #999;\r\n}\r\n.zlkbpay-content a.hash-link:active,\r\n.zlkbpay-content a.hash-link:visited\r\n{\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n.zlkbpay-content a.hash-link:hover{\r\n    color: #999;\r\n    border-bottom: 1px solid #999;\r\n}\r\n.zlkbpay-content a.zlkbpay-openpay,\r\n.zlkbpay-content a.zlkbpay-login{\r\n    color: #337ab7;\r\n    text-decoration: none;\r\n}\r\n\r\n.zlkbpay-content a.zlkbpay-openpay:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.zlkbpay-content .zlkbpay-head {\r\n    color: #555;\r\n    font-size: 13px;\r\n    padding-bottom: 3px;\r\n    margin-bottom: 5px;\r\n}\r\n.zlkbpay-content .zlkbpay-archive-wrap {\r\n    font-size: 12px;\r\n}\r\n\r\n.zlkbpay-body .zlkbpay-gray{\r\n    color: #999;\r\n}';
}]);