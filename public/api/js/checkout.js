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
} ([function(e, t, n) {
    var i = n(1),
    r = n(2),
    o = n(3),
    a = /micromessenger/i.test(navigator.userAgent),
    reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"),
    s = /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent),
    l = null,
    u = window.location.href.indexOf("iframe=1") > -1,
    c = !1,
    d = 0,
    f = 0,
    p = 0,
    h = null,
    m = null,
    y = null;
    window.console || (window.console = {
        log: function() {}
    });
    var g = '<div class="email-icon"><svg role="img" class="icon" fill="#2b2b2b" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">';
    g += "<title>Envelope</title>",
    g += '<path fill-rule="evenodd" transform="translate(8, 10)" d="M1.86849119,1.00882648 C1.91231938,1.00300503 1.95704343,1 2.00247329,1 L11.9975267,1 C12.0428075,1 12.0874644,1.00306369 12.1312901,1.00899658 L7,5 L1.86849119,1.00882648 Z M1.05353134,1.67496881 C1.01882906,1.77613675 1,1.88463985 1,1.99754465 L1,9.00245535 C1,9.55338405 1.45576096,10 2.00247329,10 L11.9975267,10 C12.5511774,10 13,9.5536886 13,9.00245535 L13,1.99754465 C13,1.88482573 12.9809217,1.77647338 12.9458895,1.67541927 L7,6.29999999 L1.05353134,1.67496881 Z M2.00585866,0 C0.898053512,0 0,0.900176167 0,1.99201702 L0,9.00798298 C0,10.1081436 0.897060126,11 2.00585866,11 L11.9941413,11 C13.1019465,11 14,10.0998238 14,9.00798298 L14,1.99201702 C14,0.891856397 13.1029399,0 11.9941413,0 L2.00585866,0 Z M2.00585866,0"></path>',
    g += "</svg></div>";
    var v = '<div id="close"></div><div id="back" style="display:none;"></div>';
    v += '<div id="header">',
    v += '<div id="logo"><img src="/api/img/marketplace.jpg" /></div>',
    v += '<div id="desc">支付 &yen;10 元</div>',
    v += "</div>",
    v += '<div class="line-wrapper"><div class="line-edge"></div></div>',
    v += '<div id="body">',
    v += '<div id="views" style="left:-300px;"><div class="view">';
    if (window.REQUIREINPUT > 0) {
        v += '<div id="email-validate"><div class="input-wrapper"><input type="text" id="email_validate" class="input-text" value="' + window.CONTACT + '" placeholder="输入支付时填写的邮箱" />' + g + '</div></div>';
    }
    v += '<div id="button-validate"><button class="button">提交</button></div></div><div class="view">';
    if (window.REQUIREINPUT > 0) {
        v += '<div id="email-pay"><div class="input-wrapper"><input type="text" id="email_pay" class="input-text" value="' + window.CONTACT + '" placeholder="邮箱，订单查询的重要凭证" />' + g + '</div></div>';
    }
    v += '<div id="button-pay"><button class="button alipay"><span>支付宝</span></button><button class="button weixin"><span>微信</span></button></div></div>',
    v += '<div class="view"><div id="qrcode-wrapper"><img /></div><div id="qrcode-tips"></div></div>',
    v += "</div>",
    v += "</div>",
    v += '<div id="footer"><iframe id="alipay_f2f_page" style="display: none;"></iframe>',
    v += window.SELLER_CONTACT.indexOf("@") > -1 ? "有问题请联系 " + window.SELLER_CONTACT: '<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=' + window.SELLER_CONTACT + '&site=qq&menu=yes">有问题请联系 ' + window.SELLER_CONTACT + "</a>",
    v += "</div>";
    var x = function() {
        h.addClass("is-leaving"),
        y.fadeTo("fast", 0),
        d > 0 && clearTimeout(d),
        f > 0 && clearTimeout(f)
    },
    b = function() {
        i(document).on("click", "#close",
        function() {
            console.log("close click", Math.random()),
            x(),
            setTimeout(function() {
                u ? (o.closeAll(), l.targets.parent.send("close")) : window.location.href = window.BUY_URL
            },
            250)
        }),
        i(document).on("click", "#back",
        function() {
            i("#back").hide(),
            i("#views").animate({
                left: "-300px"
            },
            300),
            i("#alipay_f2f_page").removeAttr("src"),
            d > 0 && clearTimeout(d),
            f && clearTimeout(f)
        }),
        i(document).on("click", "#button-validate button",
        function() {
            var e = i("#email_validate").val();
            if (e = i.trim(e), !c) {
                if (window.REQUIREINPUT > 0) {
                    if ("" == e || !reg.test(e)) return "" == e ? o.msg("邮箱不能为空") : o.msg("邮箱格式错误"),
                    i("#zlkbpay_layer").addClass("headShake"),
                    setTimeout(function() {
                        i("#zlkbpay_layer").removeClass("headShake")
                    },
                    400),
                    i("#email_validate").addClass("warning"),
                    p > 0 && clearTimeout(p),
                    void(p = setTimeout(function() {
                        i("#email_validate").removeClass("warning")
                    },
                    2e3))
                };
                c = !0,
                i.ajax({
                    url: "/api/validate",
                    dataType: "json",
                    type: "POST",
                    data: {
                        token: window.PREPAY_TOKEN,
                        hash_id: window.HASH_ID,
                        contact: e
                    },
                    success: function(e) {
                        c = !1,
                        0 == e.ret ? (o.msg("验证成功"), setTimeout(function() {
                            u ? (l.targets.parent.send("setcookie:" + e.data.cookie), setTimeout(function() {
                                l.targets.parent.send("requery:" + window.HASH_ID),
                                i("#close").trigger("click")
                            },
                            100)) : (x(), setTimeout(function() {
                                window.BUY_URL.indexOf("?") > -1 ? window.location.href = window.BUY_URL + "&" + e.data.cookie.replace("|", "=") : window.location.href = window.BUY_URL + "?" + e.data.cookie.replace("|", "=")
                            },
                            100))
                        },
                        1e3)) : o.msg(e.msg)
                    }
                })
            }
        }),
        i(document).on("click", "#button-pay button",
        function() {
            var e = i(this),
            t = e.hasClass("alipay") ? "alipay": "weixin",
            n = i("#email_pay").val();
            return n = i.trim(n),
            (window.REQUIREINPUT > 0 && ("" == n || !reg.test(n))) ? ("" == n ? o.msg("邮箱不能为空") : o.msg("邮箱格式错误"), i("#zlkbpay_layer").addClass("headShake"), setTimeout(function() {
                i("#zlkbpay_layer").removeClass("headShake")
            },
            400), i("#email_pay").addClass("warning"), p > 0 && clearTimeout(p), void(p = setTimeout(function() {
                i("#email_pay").removeClass("warning")
            },
            2e3))) : void(c || (c = !0, e.addClass("disabled"), i.ajax({
                url: "/api/pay",
                dataType: "json",
                type: "POST",
                data: {
                    token: window.PREPAY_TOKEN,
                    type: t,
                    contact: n
                },
                success: function(n) {
                    c = !1,
                    e.removeClass("disabled"),
                    0 == n.ret ? (s && "alipay" === t && i("#alipay_f2f_page").attr("src", n.data.payurl), "weixin" === t && (f = u ? setTimeout(function() {
                        l.targets.parent.send("close")
                    },
                    6e5) : setTimeout(function() {
                        window.location.href = window.BUY_URL
                    },
                    6e5)), i("#qrcode-wrapper img").attr("src", "/api/image/?url=" + n.data.qrcode), i("#views").animate({
                        left: "-600px"
                    },
                    300,
                    function() {
                        i("#back").show(),
                        a ? i("#qrcode-tips").html("请长按二维码识别支付") : i("#qrcode-tips").html("请使用" + ("alipay" === t ? "支付宝": "微信") + "扫码支付"),
                        i("#qrcode-tips").removeClass("weixin alipay").addClass(t),
                        T()
                    })) : o.msg(n.msg)
                }
            })))
        })
    },
    w = function() {
        l = new r("payFrame", "ZLKBPAY"),
        l.addTarget(window.parent, "parent")
    },
    T = function() {
        i.ajax({
            url: "/api/pay/check",
            dataType: "json",
            type: "POST",
            data: {
                token: window.PREPAY_TOKEN
            },
            success: function(e) {
                0 == e.ret && (e.data.ispaid > 0 ? (o.msg("支付成功"), clearTimeout(d), setTimeout(function() {
                    u ? (l.targets.parent.send("setcookie:" + e.data.cookie), setTimeout(function() {
                        l.targets.parent.send("requery:" + window.HASH_ID),
                        i("#close").trigger("click")
                    },
                    100)) : (x(), setTimeout(function() {
                        window.BUY_URL.indexOf("?") > -1 ? window.location.href = window.BUY_URL + "&" + e.data.cookie.replace("|", "=") : window.location.href = window.BUY_URL + "?" + e.data.cookie.replace("|", "=")
                    },
                    100))
                },
                1e3)) : d = setTimeout(T, 1500))
            }
        })
    },
    C = function() {
        o.open({
            type: 1,
            title: !1,
            closeBtn: !1,
            anim: -1,
            area: ["300px", "380px"],
            shade: .6,
            id: "zlkbpay_layer",
            moveType: 0,
            resize: !1,
            content: v,
            success: function(e) {
                h = i(".layui-layer-page"),
                m = i(".layui-layer-content"),
                y = i(".layui-layer-shade"),
                h.addClass("is-entering"),
                setTimeout(function() {
                    h.addClass("is-active")
                },
                20),
                setTimeout(function() {
                    h.removeClass("is-entering is-active")
                },
                500),
                u && l.targets.parent.send("loaded"),
                window.location.href.indexOf("view=validate") > -1 ? (window.REQUIREINPUT > 0 ? i("#desc").html("请输入凭证验证") : i("#desc").html("验证查看"), i("#views").css("left", "0")) : (a ? (i(".button.alipay").hide(), i(".button.weixin span").text("微信支付")) : s && (i(".button.weixin").hide(), i(".button.alipay span").text("支付宝支付")), i("#desc").html("支付 &yen;" + window.PRICE + " 元"), i("#views").css("left", "-300px"))
            }
        })
    };
    b(),
    u && w(),
    C()
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
                if (Ne.test(t)) return ge.filter(t, e, n);
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
        function u(e) {
            var t = {};
            return ge.each(e.match(_e) || [],
            function(e, n) {
                t[n] = !0
            }),
            t
        }
        function c() {
            se.addEventListener ? (se.removeEventListener("DOMContentLoaded", d), n.removeEventListener("load", d)) : (se.detachEvent("onreadystatechange", d), n.detachEvent("onload", d))
        }
        function d() { (se.addEventListener || "load" === n.event.type || "complete" === se.readyState) && (c(), ge.ready())
        }
        function f(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(Me, "-$1").toLowerCase();
                if (n = e.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: Be.test(n) ? ge.parseJSON(n) : n)
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
            if (Oe(e)) {
                var r, o, a = ge.expando,
                s = e.nodeType,
                l = s ? ge.cache: e,
                u = s ? e[a] : e[a] && a;
                if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = ae.pop() || ge.guid++:a),
                l[u] || (l[u] = s ? {}: {
                    toJSON: ge.noop
                }),
                "object" != typeof t && "function" != typeof t || (i ? l[u] = ge.extend(l[u], t) : l[u].data = ge.extend(l[u].data, t)),
                o = l[u],
                i || (o.data || (o.data = {}), o = o.data),
                void 0 !== n && (o[ge.camelCase(t)] = n),
                "string" == typeof t ? (r = o[t], null == r && (r = o[ge.camelCase(t)])) : r = o,
                r
            }
        }
        function m(e, t, n) {
            if (Oe(e)) {
                var i, r, o = e.nodeType,
                a = o ? ge.cache: e,
                s = o ? e[ge.expando] : ge.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        ge.isArray(t) ? t = t.concat(ge.map(t, ge.camelCase)) : t in i ? t = [t] : (t = ge.camelCase(t), t = t in i ? [t] : t.split(" ")),
                        r = t.length;
                        for (; r--;) delete i[t[r]];
                        if (n ? !p(i) : !ge.isEmptyObject(i)) return
                    } (n || (delete a[s].data, p(a[s]))) && (o ? ge.cleanData([e], !0) : me.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
                }
            }
        }
        function y(e, t, n, i) {
            var r, o = 1,
            a = 20,
            s = i ?
            function() {
                return i.cur()
            }: function() {
                return ge.css(e, t, "")
            },
            l = s(),
            u = n && n[3] || (ge.cssNumber[t] ? "": "px"),
            c = (ge.cssNumber[t] || "px" !== u && +l) && Pe.exec(ge.css(e, t));
            if (c && c[3] !== u) {
                u = u || c[3],
                n = n || [],
                c = +l || 1;
                do o = o || ".5",
                c /= o,
                ge.style(e, t, c + u);
                while (o !== (o = s() / l) && 1 !== o && --a)
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)),
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
            for (var o, a, s, l, u, c, d, f = e.length,
            p = g(t), h = [], m = 0; m < f; m++) if (a = e[m], a || 0 === a) if ("object" === ge.type(a)) ge.merge(h, a.nodeType ? [a] : a);
            else if (Je.test(a)) {
                for (l = l || p.appendChild(t.createElement("div")), u = (Xe.exec(a) || ["", ""])[1].toLowerCase(), d = Ge[u] || Ge._default, l.innerHTML = d[1] + ge.htmlPrefilter(a) + d[2], o = d[0]; o--;) l = l.lastChild;
                if (!me.leadingWhitespace && Ye.test(a) && h.push(t.createTextNode(Ye.exec(a)[0])), !me.tbody) for (a = "table" !== u || Ke.test(a) ? "<table>" !== d[1] || Ke.test(a) ? 0 : l: l.firstChild, o = a && a.childNodes.length; o--;) ge.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
                for (ge.merge(h, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = p.lastChild
            } else h.push(t.createTextNode(a));
            for (l && p.removeChild(l), me.appendChecked || ge.grep(v(h, "input"), b), m = 0; a = h[m++];) if (i && ge.inArray(a, i) > -1) r && r.push(a);
            else if (s = ge.contains(a.ownerDocument, a), l = v(p.appendChild(a), "script"), s && x(l), n) for (o = 0; a = l[o++];) Ue.test(a.type || "") && n.push(a);
            return l = null,
            p
        }
        function T() {
            return ! 0
        }
        function C() {
            return ! 1
        }
        function k() {
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
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = C;
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
        function S(e, t) {
            return ge.nodeName(e, "table") && ge.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }
        function N(e) {
            return e.type = (null !== ge.find.attr(e, "type")) + "/" + e.type,
            e
        }
        function L(e) {
            var t = lt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
            e
        }
        function A(e, t) {
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
        function j(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !me.noCloneEvent && t[ge.expando]) {
                    r = ge._data(t);
                    for (i in r.events) ge.removeEvent(t, i, r.handle);
                    t.removeAttribute(ge.expando)
                }
                "script" === n && t.text !== e.text ? (N(t).text = e.text, L(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), me.html5Clone && e.innerHTML && !ge.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && $e.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }
        function D(e, t, n, i) {
            t = ue.apply([], t);
            var r, o, a, s, l, u, c = 0,
            d = e.length,
            f = d - 1,
            p = t[0],
            h = ge.isFunction(p);
            if (h || d > 1 && "string" == typeof p && !me.checkClone && st.test(p)) return e.each(function(r) {
                var o = e.eq(r);
                h && (t[0] = p.call(this, r, o.html())),
                D(o, t, n, i)
            });
            if (d && (u = w(t, e[0].ownerDocument, !1, e, i), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
                for (s = ge.map(v(u, "script"), N), a = s.length; c < d; c++) o = u,
                c !== f && (o = ge.clone(o, !0, !0), a && ge.merge(s, v(o, "script"))),
                n.call(e[c], o, c);
                if (a) for (l = s[s.length - 1].ownerDocument, ge.map(s, L), c = 0; c < a; c++) o = s[c],
                Ue.test(o.type || "") && !ge._data(o, "globalEval") && ge.contains(l, o) && (o.src ? ge._evalUrl && ge._evalUrl(o.src) : ge.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ut, "")));
                u = r = null
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
        function O(e) {
            if (e in Lt) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Nt.length; n--;) if (e = Nt[n] + t, e in Lt) return e
        }
        function B(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++) i = e[a],
            i.style && (o[a] = ge._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && ze(i) && (o[a] = ge._data(i, "olddisplay", F(i.nodeName)))) : (r = ze(i), (n && "none" !== n || !r) && ge._data(i, "olddisplay", r ? n: ge.css(i, "display"))));
            for (a = 0; a < s; a++) i = e[a],
            i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "": "none"));
            return e
        }
        function M(e, t, n) {
            var i = kt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }
        function I(e, t, n, i, r) {
            for (var o = n === (i ? "border": "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)"margin" === n && (a += ge.css(e, n + Re[o], !0, r)),
            i ? ("content" === n && (a -= ge.css(e, "padding" + Re[o], !0, r)), "margin" !== n && (a -= ge.css(e, "border" + Re[o] + "Width", !0, r))) : (a += ge.css(e, "padding" + Re[o], !0, r), "padding" !== n && (a += ge.css(e, "border" + Re[o] + "Width", !0, r)));
            return a
        }
        function P(e, t, n) {
            var i = !0,
            r = "width" === t ? e.offsetWidth: e.offsetHeight,
            o = vt(e),
            a = me.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, o);
            if (r <= 0 || null == r) {
                if (r = xt(e, t, o), (r < 0 || null == r) && (r = e.style[t]), mt.test(r)) return r;
                i = a && (me.boxSizingReliable() || r === e.style[t]),
                r = parseFloat(r) || 0
            }
            return r + I(e, t, n || (a ? "border": "content"), i, o) + "px"
        }
        function R(e, t, n, i, r) {
            return new R.prototype.init(e, t, n, i, r)
        }
        function z() {
            return n.setTimeout(function() {
                At = void 0
            }),
            At = ge.now()
        }
        function W(e, t) {
            var n, i = {
                height: e
            },
            r = 0;
            for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Re[r],
            i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e),
            i
        }
        function $(e, t, n) {
            for (var i, r = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), o = 0, a = r.length; o < a; o++) if (i = r[o].call(n, t, e)) return i
        }
        function X(e, t, n) {
            var i, r, o, a, s, l, u, c, d = this,
            f = {},
            p = e.style,
            h = e.nodeType && ze(e),
            m = ge._data(e, "fxshow");
            n.queue || (s = ge._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, d.always(function() {
                d.always(function() {
                    s.unqueued--,
                    ge.queue(e, "fx").length || s.empty.fire()
                })
            })),
            1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = ge.css(e, "display"), c = "none" === u ? ge._data(e, "olddisplay") || F(e.nodeName) : u, "inline" === c && "none" === ge.css(e, "float") && (me.inlineBlockNeedsLayout && "inline" !== F(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
            n.overflow && (p.overflow = "hidden", me.shrinkWrapBlocks() || d.always(function() {
                p.overflow = n.overflow[0],
                p.overflowX = n.overflow[1],
                p.overflowY = n.overflow[2]
            }));
            for (i in t) if (r = t[i], Dt.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (h ? "hide": "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    h = !0
                }
                f[i] = m && m[i] || ge.style(e, i)
            } else u = void 0;
            if (ge.isEmptyObject(f))"inline" === ("none" === u ? F(e.nodeName) : u) && (p.display = u);
            else {
                m ? "hidden" in m && (h = m.hidden) : m = ge._data(e, "fxshow", {}),
                o && (m.hidden = !h),
                h ? ge(e).show() : d.done(function() {
                    ge(e).hide()
                }),
                d.done(function() {
                    var t;
                    ge._removeData(e, "fxshow");
                    for (t in f) ge.style(e, t, f[t])
                });
                for (i in f) a = $(h ? m[i] : 0, i, d),
                i in m || (m[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
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
                for (var t = At || z(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; a < l; a++) u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]),
                o < 1 && l ? n: (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
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
                startTime: At || z(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = ge.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i),
                    i
                },
                stop: function(t) {
                    var n = 0,
                    i = t ? u.tweens.length: 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                    this
                }
            }),
            c = u.props;
            for (U(c, u.opts.specialEasing); o < a; o++) if (i = Y.prefilters[o].call(u, e, c, u.opts)) return ge.isFunction(i.stop) && (ge._queueHooks(u.elem, u.opts.queue).stop = ge.proxy(i.stop, i)),
            i;
            return ge.map(c, $, u),
            ge.isFunction(u.opts.start) && u.opts.start.call(e, u),
            ge.fx.timer(ge.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
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
                    var u = s(t, n, i);
                    return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                }),
                l
            }
            var o = {},
            a = e === nn;
            return r(t.dataTypes[0]) || !o["*"] && r("*")
        }
        function K(e, t) {
            var n, i, r = ge.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((r[i] ? e: n || (n = {}))[i] = t[i]);
            return n && ge.extend(!0, e, n),
            e
        }
        function Q(e, t, n) {
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
            var r, o, a, s, l, u = {},
            c = e.dataTypes.slice();
            if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
            else if ("*" !== l && l !== o) {
                if (a = u[l + " " + o] || u["* " + o], !a) for (r in u) if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                    a === !0 ? a = u[r] : u[r] !== !0 && (o = s[0], c.unshift(s[1]));
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
        ue = ae.concat,
        ce = ae.push,
        de = ae.indexOf,
        fe = {},
        pe = fe.toString,
        he = fe.hasOwnProperty,
        me = {},
        ye = "1.12.4",
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
            jquery: ye,
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
            push: ce,
            sort: ae.sort,
            splice: ae.splice
        },
        ge.extend = ge.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {},
            s++), "object" == typeof a || ge.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (r = arguments[s])) for (i in r) e = a[i],
            n = r[i],
            a !== n && (u && n && (ge.isPlainObject(n) || (t = ge.isArray(n))) ? (t ? (t = !1, o = e && ge.isArray(e) ? e: []) : o = e && ge.isPlainObject(e) ? e: {},
            a[i] = ge.extend(u, o, n)) : void 0 !== n && (a[i] = n));
            return a
        },
        ge.extend({
            expando: "jQuery" + (ye + Math.random()).replace(/\D/g, ""),
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
                if (!me.ownFirst) for (t in e) return he.call(e, t);
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
                return null != e && (a(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)),
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
                return ue.apply([], s)
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
            support: me
        }),
        "function" == typeof Symbol && (ge.fn[Symbol.iterator] = ae[Symbol.iterator]),
        ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(e, t) {
            fe["[object " + t + "]"] = t.toLowerCase()
        });
        var Te = function(e) {
            function t(e, t, n, i) {
                var r, o, a, s, l, u, d, p, h = t && t.ownerDocument,
                m = t ? t.nodeType: 9;
                if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
                if (!i && ((t ? t.ownerDocument || t: P) !== H && D(t), t = t || H, F)) {
                    if (11 !== m && (u = ge.exec(e))) if (r = u[1]) {
                        if (9 === m) {
                            if (! (a = t.getElementById(r))) return n;
                            if (a.id === r) return n.push(a),
                            n
                        } else if (h && (a = h.getElementById(r)) && M(t, a) && a.id === r) return n.push(a),
                        n
                    } else {
                        if (u[2]) return Q.apply(n, t.getElementsByTagName(e)),
                        n;
                        if ((r = u[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(r)),
                        n
                    }
                    if (w.qsa && !X[e + " "] && (!q || !q.test(e))) {
                        if (1 !== m) h = t,
                        p = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(xe, "\\$&") : t.setAttribute("id", s = I), d = E(e), o = d.length, l = fe.test(s) ? "#" + s: "[id='" + s + "']"; o--;) d[o] = l + " " + f(d[o]);
                            p = d.join(","),
                            h = ve.test(e) && c(t.parentNode) || t
                        }
                        if (p) try {
                            return Q.apply(n, h.querySelectorAll(p)),
                            n
                        } catch(y) {} finally {
                            s === I && t.removeAttribute("id")
                        }
                    }
                }
                return N(e.replace(se, "$1"), t, n, i)
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
                return e[I] = !0,
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
            function u(e) {
                return i(function(t) {
                    return t = +t,
                    i(function(n, i) {
                        for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }
            function c(e) {
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
                o = z++;
                return t.first ?
                function(t, n, o) {
                    for (; t = t[i];) if (1 === t.nodeType || r) return e(t, n, o)
                }: function(t, n, a) {
                    var s, l, u, c = [R, o];
                    if (a) {
                        for (; t = t[i];) if ((1 === t.nodeType || r) && e(t, n, a)) return ! 0
                    } else for (; t = t[i];) if (1 === t.nodeType || r) {
                        if (u = t[I] || (t[I] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[i]) && s[0] === R && s[1] === o) return c[2] = s[2];
                        if (l[i] = c, c[2] = e(t, n, a)) return ! 0
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
            function m(e, n, i) {
                for (var r = 0,
                o = n.length; r < o; r++) t(e, n[r], i);
                return i
            }
            function y(e, t, n, i, r) {
                for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) && (n && !n(o, i, r) || (a.push(o), u && t.push(s)));
                return a
            }
            function g(e, t, n, r, o, a) {
                return r && !r[I] && (r = g(r)),
                o && !o[I] && (o = g(o, a)),
                i(function(i, a, s, l) {
                    var u, c, d, f = [],
                    p = [],
                    h = a.length,
                    g = i || m(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || !i && t ? g: y(g, f, e, s, l),
                    x = n ? o || (i ? e: h || r) ? [] : a: v;
                    if (n && n(v, x, s, l), r) for (u = y(x, p), r(u, [], s, l), c = u.length; c--;)(d = u[c]) && (x[p[c]] = !(v[p[c]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (u = [], c = x.length; c--;)(d = x[c]) && u.push(v[c] = d);
                                o(null, x = [], u, l)
                            }
                            for (c = x.length; c--;)(d = x[c]) && (u = o ? ee(i, d) : f[c]) > -1 && (i[u] = !(a[u] = d))
                        }
                    } else x = y(x === a ? x.splice(h, x.length) : x),
                    o ? o(null, a, x, l) : Q.apply(a, x)
                })
            }
            function v(e) {
                for (var t, n, i, r = e.length,
                o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                    return e === t
                },
                a, !0), u = p(function(e) {
                    return ee(t, e) > -1
                },
                a, !0), c = [function(e, n, i) {
                    var r = !o && (i || n !== L) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null,
                    r
                }]; s < r; s++) if (n = T.relative[e[s].type]) c = [p(h(c), n)];
                else {
                    if (n = T.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                        for (i = ++s; i < r && !T.relative[e[i].type]; i++);
                        return g(s > 1 && h(c), s > 1 && f(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*": ""
                        })).replace(se, "$1"), n, s < i && v(e.slice(s, i)), i < r && v(e = e.slice(i)), i < r && f(e))
                    }
                    c.push(n)
                }
                return h(c)
            }
            function x(e, n) {
                var r = n.length > 0,
                o = e.length > 0,
                a = function(i, a, s, l, u) {
                    var c, d, f, p = 0,
                    h = "0",
                    m = i && [],
                    g = [],
                    v = L,
                    x = i || o && T.find.TAG("*", u),
                    b = R += null == v ? 1 : Math.random() || .1,
                    w = x.length;
                    for (u && (L = a === H || a || u); h !== w && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (d = 0, a || c.ownerDocument === H || (D(c), s = !F); f = e[d++];) if (f(c, a || H, s)) {
                                l.push(c);
                                break
                            }
                            u && (R = b)
                        }
                        r && ((c = !f && c) && p--, i && m.push(c))
                    }
                    if (p += h, r && h !== p) {
                        for (d = 0; f = n[d++];) f(m, g, a, s);
                        if (i) {
                            if (p > 0) for (; h--;) m[h] || g[h] || (g[h] = J.call(l));
                            g = y(g)
                        }
                        Q.apply(l, g),
                        u && !i && g.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (R = b, L = v),
                    m
                };
                return r ? i(a) : a
            }
            var b, w, T, C, k, E, S, N, L, A, j, D, H, _, F, q, O, B, M, I = "sizzle" + 1 * new Date,
            P = e.document,
            R = 0,
            z = 0,
            W = n(),
            $ = n(),
            X = n(),
            U = function(e, t) {
                return e === t && (j = !0),
                0
            },
            Y = 1 << 31,
            V = {}.hasOwnProperty,
            G = [],
            J = G.pop,
            K = G.push,
            Q = G.push,
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
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
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
            me = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
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
                Q.apply(G = Z.call(P.childNodes), P.childNodes),
                G[P.childNodes.length].nodeType
            } catch(Ce) {
                Q = {
                    apply: G.length ?
                    function(e, t) {
                        K.apply(e, Z.call(t));
                    }: function(e, t) {
                        for (var n = e.length,
                        i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {},
            k = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !! t && "HTML" !== t.nodeName
            },
            D = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e: P;
                return i !== H && 9 === i.nodeType && i.documentElement ? (H = i, _ = H.documentElement, F = !k(H), (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = r(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }), w.getElementsByTagName = r(function(e) {
                    return e.appendChild(H.createComment("")),
                    !e.getElementsByTagName("*").length
                }), w.getElementsByClassName = ye.test(H.getElementsByClassName), w.getById = r(function(e) {
                    return _.appendChild(e).id = I,
                    !H.getElementsByName || !H.getElementsByName(I).length
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
                O = [], q = [], (w.qsa = ye.test(H.querySelectorAll)) && (r(function(e) {
                    _.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + I + "-]").length || q.push("~="),
                    e.querySelectorAll(":checked").length || q.push(":checked"),
                    e.querySelectorAll("a#" + I + "+*").length || q.push(".#.+[+~]")
                }), r(function(e) {
                    var t = H.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    q.push(",.*:")
                })), (w.matchesSelector = ye.test(B = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && r(function(e) {
                    w.disconnectedMatch = B.call(e, "div"),
                    B.call(e, "[s!='']:x"),
                    O.push("!=", oe)
                }), q = q.length && new RegExp(q.join("|")), O = O.length && new RegExp(O.join("|")), t = ye.test(_.compareDocumentPosition), M = t || ye.test(_.contains) ?
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
                    if (e === t) return j = !0,
                    0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n: (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === P && M(P, e) ? -1 : t === H || t.ownerDocument === P && M(P, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1)
                }: function(e, t) {
                    if (e === t) return j = !0,
                    0;
                    var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                    if (!r || !o) return e === H ? -1 : t === H ? 1 : r ? -1 : o ? 1 : A ? ee(A, e) - ee(A, t) : 0;
                    if (r === o) return a(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (; s[i] === l[i];) i++;
                    return i ? a(s[i], l[i]) : s[i] === P ? -1 : l[i] === P ? 1 : 0
                },
                H) : H
            },
            t.matches = function(e, n) {
                return t(e, null, null, n)
            },
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== H && D(e), n = n.replace(ce, "='$1']"), w.matchesSelector && F && !X[n + " "] && (!O || !O.test(n)) && (!q || !q.test(n))) try {
                    var i = B.call(e, n);
                    if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch(r) {}
                return t(n, H, null, [e]).length > 0
            },
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== H && D(e),
                M(e, t)
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
                if (j = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(U), j) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return A = null,
                e
            },
            C = t.getText = function(e) {
                var t, n = "",
                i = 0,
                r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else for (; t = e[i++];) n += C(t);
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
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e,
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
                            var u, c, d, f, p, h, m = o !== a ? "nextSibling": "previousSibling",
                            y = t.parentNode,
                            g = s && t.nodeName.toLowerCase(),
                            v = !l && !s,
                            x = !1;
                            if (y) {
                                if (o) {
                                    for (; m;) {
                                        for (f = t; f = f[m];) if (s ? f.nodeName.toLowerCase() === g: 1 === f.nodeType) return ! 1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return ! 0
                                }
                                if (h = [a ? y.firstChild: y.lastChild], a && v) {
                                    for (f = y, d = f[I] || (f[I] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === R && u[1], x = p && u[2], f = p && y.childNodes[p]; f = ++p && f && f[m] || (x = p = 0) || h.pop();) if (1 === f.nodeType && ++x && f === t) {
                                        c[e] = [R, p, x];
                                        break
                                    }
                                } else if (v && (f = t, d = f[I] || (f[I] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), u = c[e] || [], p = u[0] === R && u[1], x = p), x === !1) for (; (f = ++p && f && f[m] || (x = p = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== g: 1 !== f.nodeType) || !++x || (v && (d = f[I] || (f[I] = {}), c = d[f.uniqueID] || (d[f.uniqueID] = {}), c[e] = [R, x]), f !== t)););
                                return x -= r,
                                x === i || x % i === 0 && x / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[I] ? o(n) : o.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
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
                        r = S(e.replace(se, "$1"));
                        return r[I] ? i(function(e, t, n, i) {
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
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
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
                        return me.test(e.nodeName)
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
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(e, t) {
                        return [t - 1]
                    }),
                    eq: u(function(e, t, n) {
                        return [n < 0 ? n + t: n]
                    }),
                    even: u(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: u(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: u(function(e, t, n) {
                        for (var i = n < 0 ? n + t: n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: u(function(e, t, n) {
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
                var i, r, o, a, s, l, u, c = $[e + " "];
                if (c) return n ? 0 : c.slice(0);
                for (s = e, l = [], u = T.preFilter; s;) {
                    i && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])),
                    i = !1,
                    (r = ue.exec(s)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(se, " ")
                    }), s = s.slice(i.length));
                    for (a in T.filter) ! (r = pe[a].exec(s)) || u[a] && !(r = u[a](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: a,
                        matches: r
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length: s ? t.error(e) : $(e, l).slice(0)
            },
            S = t.compile = function(e, t) {
                var n, i = [],
                r = [],
                o = X[e + " "];
                if (!o) {
                    for (t || (t = E(e)), n = t.length; n--;) o = v(t[n]),
                    o[I] ? i.push(o) : r.push(o);
                    o = X(e, x(r, i)),
                    o.selector = e
                }
                return o
            },
            N = t.select = function(e, t, n, i) {
                var r, o, a, s, l, u = "function" == typeof e && e,
                d = !i && E(e = u.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && F && T.relative[o[1].type]) {
                        if (t = (T.find.ID(a.matches[0].replace(be, we), t) || [])[0], !t) return n;
                        u && (t = t.parentNode),
                        e = e.slice(o.shift().value.length)
                    }
                    for (r = pe.needsContext.test(e) ? 0 : o.length; r--&&(a = o[r], !T.relative[s = a.type]);) if ((l = T.find[s]) && (i = l(a.matches[0].replace(be, we), ve.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && f(o), !e) return Q.apply(n, i),
                        n;
                        break
                    }
                }
                return (u || S(e, d))(i, t, !F, n, !t || ve.test(e) && c(t.parentNode) || t),
                n
            },
            w.sortStable = I.split("").sort(U).join("") === I,
            w.detectDuplicates = !!j,
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
        var Ce = function(e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (r && ge(e).is(n)) break;
                i.push(e)
            }
            return i
        },
        ke = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ee = ge.expr.match.needsContext,
        Se = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ne = /^.[^:#\[\.,]*$/;
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
        var Le, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        je = ge.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || Le, "string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ae.exec(e), !i || !i[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t: se, !0)), Se.test(i[1]) && ge.isPlainObject(t)) for (i in t) ge.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (r = se.getElementById(i[2]), r && r.parentNode) {
                    if (r.id !== i[2]) return Le.find(e);
                    this.length = 1,
                    this[0] = r
                }
                return this.context = se,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ge.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(ge) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ge.makeArray(e, this))
        };
        je.prototype = ge.fn,
        Le = ge(se);
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
                return Ce(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return Ce(e, "parentNode", n)
            },
            next: function(e) {
                return l(e, "nextSibling")
            },
            prev: function(e) {
                return l(e, "previousSibling")
            },
            nextAll: function(e) {
                return Ce(e, "nextSibling")
            },
            prevAll: function(e) {
                return Ce(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return Ce(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return Ce(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ke((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ke(e.firstChild)
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
            e = "string" == typeof e ? u(e) : ge.extend({},
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
            c = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)),
                    function i(t) {
                        ge.each(t,
                        function(t, n) {
                            ge.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== ge.type(n) && i(n)
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
                    n || c.disable(),
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
                    return c.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !! i
                }
            };
            return c
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
                u = function(e, n, i) {
                    return function(r) {
                        n[e] = this,
                        i[e] = arguments.length > 1 ? le.call(arguments) : r,
                        i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
                if (a > 1) for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) o[r] && ge.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) : --s;
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
                        c(),
                        ge.ready()
                    }
                } ()
            }
            return Fe.promise(e)
        },
        ge.ready.promise();
        var qe;
        for (qe in ge(me)) break;
        me.ownFirst = "0" === qe,
        me.inlineBlockNeedsLayout = !1,
        ge(function() {
            var e, t, n, i;
            n = se.getElementsByTagName("body")[0],
            n && n.style && (t = se.createElement("div"), i = se.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", me.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = se.createElement("div");
            me.deleteExpando = !0;
            try {
                delete e.test
            } catch(t) {
                me.deleteExpando = !1
            }
            e = null
        } ();
        var Oe = function(e) {
            var t = ge.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
        },
        Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Me = /([A-Z])/g;
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
                return m(e, t)
            },
            _data: function(e, t, n) {
                return h(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return m(e, t, !0)
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
            me.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = se.getElementsByTagName("body")[0],
                n && n.style ? (t = se.createElement("div"), i = se.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(se.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        } ();
        var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Pe = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"),
        Re = ["Top", "Right", "Bottom", "Left"],
        ze = function(e, t) {
            return e = t || e,
            "none" === ge.css(e, "display") || !ge.contains(e.ownerDocument, e)
        },
        We = function(e, t, n, i, r, o, a) {
            var s = 0,
            l = e.length,
            u = null == n;
            if ("object" === ge.type(n)) {
                r = !0;
                for (s in n) We(e, t, s, n[s], !0, o, a)
            } else if (void 0 !== i && (r = !0, ge.isFunction(i) || (a = !0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                return u.call(ge(e), n)
            })), t)) for (; s < l; s++) t(e[s], n, a ? i: i.call(e[s], s, t(e[s], n)));
            return r ? e: u ? t.call(e) : l ? t(e[0], n) : o
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
            me.leadingWhitespace = 3 === e.firstChild.nodeType,
            me.tbody = !e.getElementsByTagName("tbody").length,
            me.htmlSerialize = !!e.getElementsByTagName("link").length,
            me.html5Clone = "<:nav></:nav>" !== se.createElement("nav").cloneNode(!0).outerHTML,
            n.type = "checkbox",
            n.checked = !0,
            t.appendChild(n),
            me.appendChecked = n.checked,
            e.innerHTML = "<textarea>x</textarea>",
            me.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
            t.appendChild(e),
            n = se.createElement("input"),
            n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            e.appendChild(n),
            me.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
            me.noCloneEvent = !!e.addEventListener,
            e[ge.expando] = 1,
            me.attributes = !e.getAttribute(ge.expando)
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
            _default: me.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        Ge.optgroup = Ge.option,
        Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead,
        Ge.th = Ge.td;
        var Je = /<|&#?\w+;/,
        Ke = /<tbody/i; !
        function() {
            var e, t, i = se.createElement("div");
            for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) t = "on" + e,
            (me[e] = t in n) || (i.setAttribute(t, "t"), me[e] = i.attributes[t].expando === !1);
            i = null
        } ();
        var Qe = /^(?:input|select|textarea)$/i,
        Ze = /^key/,
        et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        tt = /^(?:focusinfocus|focusoutblur)$/,
        nt = /^([^.]*)(?:\.(.+)|)/;
        ge.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, l, u, c, d, f, p, h, m, y = ge._data(e);
                if (y) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = ge.guid++), (a = y.events) || (a = y.events = {}), (c = y.handle) || (c = y.handle = function(e) {
                        return "undefined" == typeof ge || e && ge.event.triggered === e.type ? void 0 : ge.event.dispatch.apply(c.elem, arguments)
                    },
                    c.elem = e), t = (t || "").match(_e) || [""], s = t.length; s--;) o = nt.exec(t[s]) || [],
                    p = m = o[1],
                    h = (o[2] || "").split(".").sort(),
                    p && (u = ge.event.special[p] || {},
                    p = (r ? u.delegateType: u.bindType) || p, u = ge.event.special[p] || {},
                    d = ge.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ge.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    },
                    l), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, i, h, c) !== !1 || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, d) : f.push(d), ge.event.global[p] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, l, u, c, d, f, p, h, m, y = ge.hasData(e) && ge._data(e);
                if (y && (c = y.events)) {
                    for (t = (t || "").match(_e) || [""], u = t.length; u--;) if (s = nt.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (d = ge.event.special[p] || {},
                        p = (i ? d.delegateType: d.bindType) || p, f = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o],
                        !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, y.handle) !== !1 || ge.removeEvent(e, p, y.handle), delete c[p])
                    } else for (p in c) ge.event.remove(e, p + t[u], n, i, !0);
                    ge.isEmptyObject(c) && (delete y.handle, ge._removeData(e, "events"))
                }
            },
            trigger: function(e, t, i, r) {
                var o, a, s, l, u, c, d, f = [i || se],
                p = he.call(e, "type") ? e.type: e,
                h = he.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = c = i = i || se, 3 !== i.nodeType && 8 !== i.nodeType && !tt.test(p + ge.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[ge.expando] ? e: new ge.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : ge.makeArray(t, [e]), u = ge.event.special[p] || {},
                r || !u.trigger || u.trigger.apply(i, t) !== !1)) {
                    if (!r && !u.noBubble && !ge.isWindow(i)) {
                        for (l = u.delegateType || p, tt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s),
                        c = s;
                        c === (i.ownerDocument || se) && f.push(c.defaultView || c.parentWindow || n)
                    }
                    for (d = 0; (s = f[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l: u.bindType || p,
                    o = (ge._data(s, "events") || {})[e.type] && ge._data(s, "handle"),
                    o && o.apply(s, t),
                    o = a && s[a],
                    o && o.apply && Oe(s) && (e.result = o.apply(s, t), e.result === !1 && e.preventDefault());
                    if (e.type = p, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), t) === !1) && Oe(i) && a && i[p] && !ge.isWindow(i)) {
                        c = i[a],
                        c && (i[a] = null),
                        ge.event.triggered = p;
                        try {
                            i[p]()
                        } catch(m) {}
                        ge.event.triggered = void 0,
                        c && (i[a] = c)
                    }
                    return e.result
                }
            },
            dispatch: function(e) {
                e = ge.event.fix(e);
                var t, n, i, r, o, a = [],
                s = le.call(arguments),
                l = (ge._data(this, "events") || {})[e.type] || [],
                u = ge.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                    for (a = ge.event.handlers.call(this, e, l), t = 0; (r = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((ge.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e),
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
                        if (this !== k() && this.focus) try {
                            return this.focus(),
                            !1
                        } catch(e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === k() && this.blur) return this.blur(),
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
            return this instanceof ge.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? T: C) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), void(this[ge.expando] = !0)) : new ge.Event(e, t)
        },
        ge.Event.prototype = {
            constructor: ge.Event,
            isDefaultPrevented: C,
            isPropagationStopped: C,
            isImmediatePropagationStopped: C,
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
        me.submit || (ge.event.special.submit = {
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
        me.change || (ge.event.special.change = {
            setup: function() {
                return Qe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ge.event.add(this, "propertychange._change",
                function(e) {
                    "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                }), ge.event.add(this, "click._change",
                function(e) {
                    this._justChanged && !e.isTrigger && (this._justChanged = !1),
                    ge.event.simulate("change", this, e)
                })), !1) : void ge.event.add(this, "beforeactivate._change",
                function(e) {
                    var t = e.target;
                    Qe.test(t.nodeName) && !ge._data(t, "change") && (ge.event.add(t, "change._change",
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
                !Qe.test(this.nodeName)
            }
        }),
        me.focusin || ge.each({
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
                n === !1 && (n = C),
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
        ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ct = g(se),
        dt = ct.appendChild(se.createElement("div"));
        ge.extend({
            htmlPrefilter: function(e) {
                return e.replace(ot, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, o, a, s, l = ge.contains(e.ownerDocument, e);
                if (me.html5Clone || ge.isXMLDoc(e) || !rt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (dt.innerHTML = e.outerHTML, dt.removeChild(o = dt.firstChild)), !(me.noCloneEvent && me.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e))) for (i = v(o), s = v(e), a = 0; null != (r = s[a]); ++a) i[a] && j(r, i[a]);
                if (t) if (n) for (s = s || v(e), i = i || v(o), a = 0; null != (r = s[a]); a++) A(r, i[a]);
                else A(e, o);
                return i = v(o, "script"),
                i.length > 0 && x(i, !l && v(e, "script")),
                i = s = r = null,
                o
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, a = 0,
                s = ge.expando,
                l = ge.cache,
                u = me.attributes,
                c = ge.event.special; null != (n = e[a]); a++) if ((t || Oe(n)) && (r = n[s], o = r && l[r])) {
                    if (o.events) for (i in o.events) c[i] ? ge.event.remove(n, i) : ge.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), ae.push(r))
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
                return We(this,
                function(e) {
                    return void 0 === e ? ge.text(this) : this.empty().append((this[0] && this[0].ownerDocument || se).createTextNode(e))
                },
                null, e, arguments.length)
            },
            append: function() {
                return D(this, arguments,
                function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = S(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return D(this, arguments,
                function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = S(this, e);
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
                return We(this,
                function(e) {
                    var t = this[0] || {},
                    n = 0,
                    i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(it, "") : void 0;
                    if ("string" == typeof e && !at.test(e) && (me.htmlSerialize || !rt.test(e)) && (me.leadingWhitespace || !Ye.test(e)) && !Ge[(Xe.exec(e) || ["", ""])[1].toLowerCase()]) {
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
                ce.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var ft, pt = {
            HTML: "block",
            BODY: "block"
        },
        ht = /^margin/,
        mt = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"),
        yt = function(e, t, n, i) {
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
                var e, c, d = se.documentElement;
                d.appendChild(l),
                u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                t = r = s = !1,
                i = a = !0,
                n.getComputedStyle && (c = n.getComputedStyle(u), t = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                    width: "4px"
                }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                    marginRight: "4px"
                }).marginRight, e = u.appendChild(se.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", a = !parseFloat((n.getComputedStyle(e) || {}).marginRight), u.removeChild(e)),
                u.style.display = "none",
                o = 0 === u.getClientRects().length,
                o && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)),
                d.removeChild(l)
            }
            var t, i, r, o, a, s, l = se.createElement("div"),
            u = se.createElement("div");
            u.style && (u.style.cssText = "float:left;opacity:.5", me.opacity = "0.5" === u.style.opacity, me.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", me.clearCloneStyle = "content-box" === u.style.backgroundClip, l = se.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), me.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, ge.extend(me, {
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
            n && !me.pixelMarginRight() && mt.test(a) && ht.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o),
            void 0 === a ? a: a + ""
        }) : gt.currentStyle && (vt = function(e) {
            return e.currentStyle
        },
        xt = function(e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || vt(e),
            a = n ? n[t] : void 0,
            null == a && s && s[t] && (a = s[t]),
            mt.test(a) && !bt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em": a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)),
            void 0 === a ? a: a + "" || "auto"
        });
        var wt = /alpha\([^)]*\)/i,
        Tt = /opacity\s*=\s*([^)]*)/i,
        Ct = /^(none|table(?!-c[ea]).+)/,
        kt = new RegExp("^(" + Ie + ")(.*)$", "i"),
        Et = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        St = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Nt = ["Webkit", "O", "Moz", "ms"],
        Lt = se.createElement("div").style;
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
                "float": me.cssFloat ? "cssFloat": "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = ge.camelCase(t),
                    l = e.style;
                    if (t = ge.cssProps[s] || (ge.cssProps[s] = O(s) || s), a = ge.cssHooks[t] || ge.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r: l[t];
                    if (o = typeof n, "string" === o && (r = Pe.exec(n)) && r[1] && (n = y(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (ge.cssNumber[s] ? "": "px")), me.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                        l[t] = n
                    } catch(u) {}
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = ge.camelCase(t);
                return t = ge.cssProps[s] || (ge.cssProps[s] = O(s) || s),
                a = ge.cssHooks[t] || ge.cssHooks[s],
                a && "get" in a && (o = a.get(e, !0, n)),
                void 0 === o && (o = xt(e, t, i)),
                "normal" === o && t in St && (o = St[t]),
                "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
            }
        }),
        ge.each(["height", "width"],
        function(e, t) {
            ge.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n) return Ct.test(ge.css(e, "display")) && 0 === e.offsetWidth ? yt(e, Et,
                    function() {
                        return P(e, t, i)
                    }) : P(e, t, i)
                },
                set: function(e, n, i) {
                    var r = i && vt(e);
                    return M(e, n, i ? I(e, t, i, me.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }),
        me.opacity || (ge.cssHooks.opacity = {
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
        ge.cssHooks.marginRight = q(me.reliableMarginRight,
        function(e, t) {
            if (t) return yt(e, {
                display: "inline-block"
            },
            xt, [e, "marginRight"])
        }),
        ge.cssHooks.marginLeft = q(me.reliableMarginLeft,
        function(e, t) {
            if (t) return (parseFloat(xt(e, "marginLeft")) || (ge.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - yt(e, {
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
                    o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Re[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            },
            ht.test(e) || (ge.cssHooks[e + t].set = M)
        }),
        ge.fn.extend({
            css: function(e, t) {
                return We(this,
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
                return B(this, !0)
            },
            hide: function() {
                return B(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ze(this) ? ge(this).show() : ge(this).hide()
                })
            }
        }),
        ge.Tween = R,
        R.prototype = {
            constructor: R,
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
                var e = R.propHooks[this.prop];
                return e && e.get ? e.get(this) : R.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = R.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : R.propHooks._default.set(this),
                this
            }
        },
        R.prototype.init.prototype = R.prototype,
        R.propHooks = {
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
        R.propHooks.scrollTop = R.propHooks.scrollLeft = {
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
        ge.fx = R.prototype.init,
        ge.fx.step = {};
        var At, jt, Dt = /^(?:toggle|show|hide)$/,
        Ht = /queueHooks$/;
        ge.Animation = ge.extend(Y, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return y(n.elem, e, Pe.exec(t), n),
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
                return this.filter(ze).css("opacity", 0).show().end().animate({
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
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, r)
            }
        }),
        ge.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
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
            for (At = ge.now(); n < t.length; n++) e = t[n],
            e() || t[n] !== e || t.splice(n--, 1);
            t.length || ge.fx.stop(),
            At = void 0
        },
        ge.fx.timer = function(e) {
            ge.timers.push(e),
            e() ? ge.fx.start() : ge.timers.pop()
        },
        ge.fx.interval = 13,
        ge.fx.start = function() {
            jt || (jt = n.setInterval(ge.fx.tick, ge.fx.interval))
        },
        ge.fx.stop = function() {
            n.clearInterval(jt),
            jt = null
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
            me.getSetAttribute = "t" !== n.className,
            me.style = /top/.test(e.getAttribute("style")),
            me.hrefNormalized = "/a" === e.getAttribute("href"),
            me.checkOn = !!t.value,
            me.optSelected = r.selected,
            me.enctype = !!se.createElement("form").enctype,
            i.disabled = !0,
            me.optDisabled = !r.disabled,
            t = se.createElement("input"),
            t.setAttribute("value", ""),
            me.input = "" === t.getAttribute("value"),
            t.value = "t",
            t.setAttribute("type", "radio"),
            me.radioValue = "t" === t.value
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
                        a = o ? null: [], s = o ? r + 1 : i.length, l = r < 0 ? s: o ? r: 0; l < s; l++) if (n = i[l], (n.selected || l === r) && (me.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ge.nodeName(n.parentNode, "optgroup"))) {
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
            me.checkOn || (ge.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on": e.value
            })
        });
        var qt, Ot, Bt = ge.expr.attrHandle,
        Mt = /^(?:checked|selected)$/i,
        It = me.getSetAttribute,
        Pt = me.input;
        ge.fn.extend({
            attr: function(e, t) {
                return We(this, ge.attr, e, t, arguments.length > 1)
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
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ge.prop(e, t, n) : (1 === o && ge.isXMLDoc(e) || (t = t.toLowerCase(), r = ge.attrHooks[t] || (ge.expr.match.bool.test(t) ? Ot: qt)), void 0 !== n ? null === n ? void ge.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i: (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i: (i = ge.find.attr(e, t), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!me.radioValue && "radio" === t && ge.nodeName(e, "input")) {
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
                ge.expr.match.bool.test(n) ? Pt && It || !Mt.test(n) ? e[i] = !1 : e[ge.camelCase("default-" + n)] = e[i] = !1 : ge.attr(e, n, ""),
                e.removeAttribute(It ? n: i)
            }
        }),
        Ot = {
            set: function(e, t, n) {
                return t === !1 ? ge.removeAttr(e, n) : Pt && It || !Mt.test(n) ? e.setAttribute(!It && ge.propFix[n] || n, n) : e[ge.camelCase("default-" + n)] = e[n] = !0,
                n
            }
        },
        ge.each(ge.expr.match.bool.source.match(/\w+/g),
        function(e, t) {
            var n = Bt[t] || ge.find.attr;
            Pt && It || !Mt.test(t) ? Bt[t] = function(e, t, i) {
                var r, o;
                return i || (o = Bt[t], Bt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Bt[t] = o),
                r
            }: Bt[t] = function(e, t, n) {
                if (!n) return e[ge.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }),
        Pt && It || (ge.attrHooks.value = {
            set: function(e, t, n) {
                return ge.nodeName(e, "input") ? void(e.defaultValue = t) : qt && qt.set(e, t, n)
            }
        }),
        It || (qt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
            }
        },
        Bt.id = Bt.name = Bt.coords = function(e, t, n) {
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
        me.style || (ge.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Rt = /^(?:input|select|textarea|button|object)$/i,
        zt = /^(?:a|area)$/i;
        ge.fn.extend({
            prop: function(e, t) {
                return We(this, ge.prop, e, t, arguments.length > 1)
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
                        return t ? parseInt(t, 10) : Rt.test(e.nodeName) || zt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        me.hrefNormalized || ge.each(["href", "src"],
        function(e, t) {
            ge.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }),
        me.optSelected || (ge.propHooks.selected = {
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
        me.enctype || (ge.propFix.enctype = "encoding");
        var Wt = /[\t\r\n\f]/g;
        ge.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s, l = 0;
                if (ge.isFunction(e)) return this.each(function(t) {
                    ge(this).addClass(e.call(this, t, V(this)))
                });
                if ("string" == typeof e && e) for (t = e.match(_e) || []; n = this[l++];) if (r = V(n), i = 1 === n.nodeType && (" " + r + " ").replace(Wt, " ")) {
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
                if ("string" == typeof e && e) for (t = e.match(_e) || []; n = this[l++];) if (r = V(n), i = 1 === n.nodeType && (" " + r + " ").replace(Wt, " ")) {
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
                for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + V(n) + " ").replace(Wt, " ").indexOf(t) > -1) return ! 0;
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
        Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Qt = /^(?:GET|HEAD)$/,
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
                isLocal: Kt.test(an[1]),
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
                return t ? K(K(e, ge.ajaxSettings), t) : K(ge.ajaxSettings, e)
            },
            ajaxPrefilter: G(tn),
            ajaxTransport: G(nn),
            ajax: function(e, t) {
                function i(e, t, i, r) {
                    var o, d, v, x, w, C = t;
                    2 !== b && (b = 2, l && n.clearTimeout(l), c = void 0, s = r || "", T.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, i && (x = Q(f, T, i)), x = Z(f, x, T, o), o ? (f.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ge.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (ge.etag[a] = w)), 204 === e || "HEAD" === f.type ? C = "nocontent": 304 === e ? C = "notmodified": (C = x.state, d = x.data, v = x.error, o = !v)) : (v = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || C) + "", o ? m.resolveWith(p, [d, C, T]) : m.rejectWith(p, [T, C, v]), T.statusCode(g), g = void 0, u && h.trigger(o ? "ajaxSuccess": "ajaxError", [T, f, o ? d: v]), y.fireWith(p, [T, C]), u && (h.trigger("ajaxComplete", [T, f]), --ge.active || ge.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0),
                t = t || {};
                var r, o, a, s, l, u, c, d, f = ge.ajaxSetup({},
                t),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? ge(p) : ge.event,
                m = ge.Deferred(),
                y = ge.Callbacks("once memory"),
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
                        return c && c.abort(t),
                        i(0, t),
                        this
                    }
                };
                if (m.promise(T).complete = y.add, T.success = T.done, T.error = T.fail, f.url = ((e || f.url || on) + "").replace(Vt, "").replace(Zt, an[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = ge.trim(f.dataType || "*").toLowerCase().match(_e) || [""], null == f.crossDomain && (r = en.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === an[1] && r[2] === an[2] && (r[3] || ("http:" === r[1] ? "80": "443")) === (an[3] || ("http:" === an[1] ? "80": "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ge.param(f.data, f.traditional)), J(tn, f, t, T), 2 === b) return T;
                u = ge.event && f.global,
                u && 0 === ge.active++&&ge.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !Qt.test(f.type),
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
                if (c = J(nn, f, t, T)) {
                    if (T.readyState = 1, u && h.trigger("ajaxSend", [T, f]), 2 === b) return T;
                    f.async && f.timeout > 0 && (l = n.setTimeout(function() {
                        T.abort("timeout")
                    },
                    f.timeout));
                    try {
                        b = 1,
                        c.send(v, i)
                    } catch(C) {
                        if (! (b < 2)) throw C;
                        i( - 1, C)
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
            return me.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length: te(e)
        },
        ge.expr.filters.visible = function(e) {
            return ! ge.expr.filters.hidden(e)
        };
        var sn = /%20/g,
        ln = /\[\]$/,
        un = /\r?\n/g,
        cn = /^(?:submit|button|image|reset|file)$/i,
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
                    return this.name && !ge(this).is(":disabled") && dn.test(this.nodeName) && !cn.test(e) && (this.checked || !$e.test(e))
                }).map(function(e, t) {
                    var n = ge(this).val();
                    return null == n ? null: ge.isArray(n) ? ge.map(n,
                    function(e) {
                        return {
                            name: t.name,
                            value: e.replace(un, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(un, "\r\n")
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
        me.cors = !!hn && "withCredentials" in hn,
        hn = me.ajax = !!hn,
        hn && ge.ajaxTransport(function(e) {
            if (!e.crossDomain || me.cors) {
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
                            var o, l, u;
                            if (t && (i || 4 === a.readyState)) if (delete pn[s], t = void 0, a.onreadystatechange = ge.noop, i) 4 !== a.readyState && a.abort();
                            else {
                                u = {},
                                o = a.status,
                                "string" == typeof a.responseText && (u.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch(c) {
                                    l = ""
                                }
                                o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                            }
                            u && r(o, l, u, a.getAllResponseHeaders())
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
        var mn = [],
        yn = /(=)\?(?=&|$)|\?\?/;
        ge.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = mn.pop() || ge.expando + "_" + Xt++;
                return this[e] = !0,
                e
            }
        }),
        ge.ajaxPrefilter("json jsonp",
        function(e, t, i) {
            var r, o, a, s = e.jsonp !== !1 && (yn.test(e.url) ? "url": "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && yn.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = ge.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(yn, "$1" + r) : e.jsonp !== !1 && (e.url += (Ut.test(e.url) ? "&": "?") + e.jsonp + "=" + r),
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
                e[r] && (e.jsonpCallback = t.jsonpCallback, mn.push(r)),
                a && ge.isFunction(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
        }),
        ge.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1),
            t = t || se;
            var i = Se.exec(e),
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
                var i, r, o, a, s, l, u, c = ge.css(e, "position"),
                d = ge(e),
                f = {};
                "static" === c && (e.style.position = "relative"),
                s = d.offset(),
                o = ge.css(e, "top"),
                l = ge.css(e, "left"),
                u = ("absolute" === c || "fixed" === c) && ge.inArray("auto", [o, l]) > -1,
                u ? (i = d.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0),
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
                return We(this,
                function(e, i, r) {
                    var o = oe(e);
                    return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? ge(o).scrollLeft() : r, n ? r: ge(o).scrollTop()) : e[i] = r)
                },
                e, i, arguments.length, null)
            }
        }),
        ge.each(["top", "left"],
        function(e, t) {
            ge.cssHooks[t] = q(me.pixelPosition,
            function(e, n) {
                if (n) return n = xt(e, t),
                mt.test(n) ? ge(e).position()[t] + "px": n
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
                    return We(this,
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
function(e, t, n) {
    "use strict";
    var i, r = n(1),
    o = !1,
    a = {
        getPath: function() {
            var e = document.currentScript ? document.currentScript.src: function() {
                for (var e, t = document.scripts,
                n = t.length - 1,
                i = n; i > 0; i--) if ("interactive" === t[i].readyState) {
                    e = t[i].src;
                    break
                }
                return e || t[n].src
            } ();
            return e.substring(0, e.lastIndexOf("/") + 1)
        } (),
        config: {},
        end: {},
        minIndex: 0,
        minLeft: [],
        btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
        type: ["dialog", "page", "iframe", "loading", "tips"],
        getStyle: function(e, t) {
            var n = e.currentStyle ? e.currentStyle: window.getComputedStyle(e, null);
            return n[n.getPropertyValue ? "getPropertyValue": "getAttribute"](t)
        },
        link: function(e, t, n) {
            if (s.path) {
                var i = document.getElementsByTagName("head")[0],
                r = document.createElement("link");
                "string" == typeof t && (n = t);
                var o = (n || e).replace(/\.|\//g, ""),
                l = "layuicss-" + o,
                u = 0;
                r.rel = "stylesheet",
                r.href = s.path + e,
                r.id = l,
                document.getElementById(l) || i.appendChild(r),
                "function" == typeof t && !
                function c() {
                    return++u > 80 ? window.console && console.error("layer.css: Invalid") : void(1989 === parseInt(a.getStyle(document.getElementById(l), "width")) ? t() : setTimeout(c, 100))
                } ()
            }
        }
    },
    s = {
        v: "3.1.1",
        ie: function() {
            var e = navigator.userAgent.toLowerCase();
            return !! (window.ActiveXObject || "ActiveXObject" in window) && ((e.match(/msie\s(\d+)/) || [])[1] || "11")
        } (),
        index: window.layer && window.layer.v ? 1e5: 0,
        path: a.getPath,
        config: function(e, t) {
            return e = e || {},
            s.cache = a.config = r.extend({},
            a.config, e),
            s.path = a.config.path || s.path,
            "string" == typeof e.extend && (e.extend = [e.extend]),
            a.config.path && s.ready(),
            e.extend ? (o ? layui.addcss("modules/layer/" + e.extend) : a.link("theme/" + e.extend), this) : this
        },
        ready: function(e) {
            var t = "layer",
            n = "",
            i = (o ? "modules/layer/": "theme/") + "default/layer.css?v=" + s.v + n;
            return o ? layui.addcss(i, e, t) : a.link(i, e, t),
            this
        },
        alert: function(e, t, n) {
            var i = "function" == typeof t;
            return i && (n = t),
            s.open(r.extend({
                content: e,
                yes: n
            },
            i ? {}: t))
        },
        confirm: function(e, t, n, i) {
            var o = "function" == typeof t;
            return o && (i = n, n = t),
            s.open(r.extend({
                content: e,
                btn: a.btn,
                yes: n,
                btn2: i
            },
            o ? {}: t))
        },
        msg: function(e, t, n) {
            var i = "function" == typeof t,
            o = a.config.skin,
            l = (o ? o + " " + o + "-msg": "") || "layui-layer-msg",
            c = u.anim.length - 1;
            return i && (n = t),
            s.open(r.extend({
                content: e,
                time: 3e3,
                shade: !1,
                skin: l,
                title: !1,
                closeBtn: !1,
                btn: !1,
                resize: !1,
                end: n
            },
            i && !a.config.skin ? {
                skin: l + " layui-layer-hui",
                anim: c
            }: function() {
                return t = t || {},
                (t.icon === -1 || void 0 === t.icon && !a.config.skin) && (t.skin = l + " " + (t.skin || "layui-layer-hui")),
                t
            } ()))
        },
        load: function(e, t) {
            return s.open(r.extend({
                type: 3,
                icon: e || 0,
                resize: !1,
                shade: .01
            },
            t))
        },
        tips: function(e, t, n) {
            return s.open(r.extend({
                type: 4,
                content: [e, t],
                closeBtn: !1,
                time: 3e3,
                shade: !1,
                resize: !1,
                fixed: !1,
                maxWidth: 210
            },
            n))
        }
    },
    l = function(e) {
        var t = this;
        t.index = ++s.index,
        t.config = r.extend({},
        t.config, a.config, e),
        document.body ? t.creat() : setTimeout(function() {
            t.creat()
        },
        30)
    };
    l.pt = l.prototype;
    var u = ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog", "layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"];
    u.anim = ["layer-anim-00", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04", "layer-anim-05", "layer-anim-06"],
    l.pt.config = {
        type: 0,
        shade: .3,
        fixed: !0,
        move: u[1],
        title: "&#x4FE1;&#x606F;",
        offset: "auto",
        area: "auto",
        closeBtn: 1,
        time: 0,
        zIndex: 19891014,
        maxWidth: 360,
        anim: 0,
        isOutAnim: !0,
        icon: -1,
        moveType: 1,
        resize: !0,
        scrollbar: !0,
        tips: 2
    },
    l.pt.vessel = function(e, t) {
        var n = this,
        i = n.index,
        o = n.config,
        s = o.zIndex + i,
        l = "object" == typeof o.title,
        c = o.maxmin && (1 === o.type || 2 === o.type),
        d = o.title ? '<div class="layui-layer-title" style="' + (l ? o.title[1] : "") + '">' + (l ? o.title[0] : o.title) + "</div>": "";
        return o.zIndex = s,
        t([o.shade ? '<div class="layui-layer-shade" id="layui-layer-shade' + i + '" times="' + i + '" style="' + ("z-index:" + (s - 1) + "; ") + '"></div>': "", '<div class="' + u[0] + (" layui-layer-" + a.type[o.type]) + (0 != o.type && 2 != o.type || o.shade ? "": " layui-layer-border") + " " + (o.skin || "") + '" id="' + u[0] + i + '" type="' + a.type[o.type] + '" times="' + i + '" showtime="' + o.time + '" conType="' + (e ? "object": "string") + '" style="z-index: ' + s + "; width:" + o.area[0] + ";height:" + o.area[1] + (o.fixed ? "": ";position:absolute;") + '">' + (e && 2 != o.type ? "": d) + '<div id="' + (o.id || "") + '" class="layui-layer-content' + (0 == o.type && o.icon !== -1 ? " layui-layer-padding": "") + (3 == o.type ? " layui-layer-loading" + o.icon: "") + '">' + (0 == o.type && o.icon !== -1 ? '<i class="layui-layer-ico layui-layer-ico' + o.icon + '"></i>': "") + (1 == o.type && e ? "": o.content || "") + '</div><span class="layui-layer-setwin">' +
        function() {
            var e = c ? '<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>': "";
            return o.closeBtn && (e += '<a class="layui-layer-ico ' + u[7] + " " + u[7] + (o.title ? o.closeBtn: 4 == o.type ? "1": "2") + '" href="javascript:;"></a>'),
            e
        } () + "</span>" + (o.btn ?
        function() {
            var e = "";
            "string" == typeof o.btn && (o.btn = [o.btn]);
            for (var t = 0,
            n = o.btn.length; t < n; t++) e += '<a class="' + u[6] + t + '">' + o.btn[t] + "</a>";
            return '<div class="' + u[6] + " layui-layer-btn-" + (o.btnAlign || "") + '">' + e + "</div>"
        } () : "") + (o.resize ? '<span class="layui-layer-resize"></span>': "") + "</div>"], d, r('<div class="layui-layer-move"></div>')),
        n
    },
    l.pt.creat = function() {
        var e = this,
        t = e.config,
        n = e.index,
        o = t.content,
        l = "object" == typeof o,
        c = r("body");
        if (!t.id || !r("#" + t.id)[0]) {
            switch ("string" == typeof t.area && (t.area = "auto" === t.area ? ["", ""] : [t.area, ""]), t.shift && (t.anim = t.shift), 6 == s.ie && (t.fixed = !1), t.type) {
            case 0:
                t.btn = "btn" in t ? t.btn: a.btn[0],
                s.closeAll("dialog");
                break;
            case 2:
                var o = t.content = l ? t.content: [t.content || "http://layer.layui.com", "auto"];
                t.content = '<iframe scrolling="' + (t.content[1] || "auto") + '" allowtransparency="true" id="' + u[4] + n + '" name="' + u[4] + n + '" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + t.content[0] + '"></iframe>';
                break;
            case 3:
                delete t.title,
                delete t.closeBtn,
                t.icon === -1 && 0 === t.icon,
                s.closeAll("loading");
                break;
            case 4:
                l || (t.content = [t.content, "body"]),
                t.follow = t.content[1],
                t.content = t.content[0] + '<i class="layui-layer-TipsG"></i>',
                delete t.title,
                t.tips = "object" == typeof t.tips ? t.tips: [t.tips, !0],
                t.tipsMore || s.closeAll("tips")
            }
            if (e.vessel(l,
            function(i, s, d) {
                c.append(i[0]),
                l ?
                function() {
                    2 == t.type || 4 == t.type ?
                    function() {
                        r("body").append(i[1])
                    } () : function() {
                        o.parents("." + u[0])[0] || (o.data("display", o.css("display")).show().addClass("layui-layer-wrap").wrap(i[1]), r("#" + u[0] + n).find("." + u[5]).before(s))
                    } ()
                } () : c.append(i[1]),
                r(".layui-layer-move")[0] || c.append(a.moveElem = d),
                e.layero = r("#" + u[0] + n),
                t.scrollbar || u.html.css("overflow", "hidden").attr("layer-full", n)
            }).auto(n), r("#layui-layer-shade" + e.index).css({
                "background-color": t.shade[1] || "#000",
                opacity: t.shade[0] || t.shade
            }), 2 == t.type && 6 == s.ie && e.layero.find("iframe").attr("src", o[0]), 4 == t.type ? e.tips() : e.offset(), t.fixed && i.on("resize",
            function() {
                e.offset(),
                (/^\d+%$/.test(t.area[0]) || /^\d+%$/.test(t.area[1])) && e.auto(n),
                4 == t.type && e.tips()
            }), t.time <= 0 || setTimeout(function() {
                s.close(e.index)
            },
            t.time), e.move().callback(), u.anim[t.anim]) {
                var d = "layer-anim " + u.anim[t.anim];
                e.layero.addClass(d).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function() {
                    r(this).removeClass(d)
                })
            }
            t.isOutAnim && e.layero.data("isOutAnim", !0)
        }
    },
    l.pt.auto = function(e) {
        var t = this,
        n = t.config,
        o = r("#" + u[0] + e);
        "" === n.area[0] && n.maxWidth > 0 && (s.ie && s.ie < 8 && n.btn && o.width(o.innerWidth()), o.outerWidth() > n.maxWidth && o.width(n.maxWidth));
        var a = [o.innerWidth(), o.innerHeight()],
        l = o.find(u[1]).outerHeight() || 0,
        c = o.find("." + u[6]).outerHeight() || 0,
        d = function(e) {
            e = o.find(e),
            e.height(a[1] - l - c - 2 * (0 | parseFloat(e.css("padding-top"))))
        };
        switch (n.type) {
        case 2:
            d("iframe");
            break;
        default:
            "" === n.area[1] ? n.maxHeight > 0 && o.outerHeight() > n.maxHeight ? (a[1] = n.maxHeight, d("." + u[5])) : n.fixed && a[1] >= i.height() && (a[1] = i.height(), d("." + u[5])) : d("." + u[5])
        }
        return t
    },
    l.pt.offset = function() {
        var e = this,
        t = e.config,
        n = e.layero,
        r = [n.outerWidth(), n.outerHeight()],
        o = "object" == typeof t.offset;
        e.offsetTop = (i.height() - r[1]) / 2,
        e.offsetLeft = (i.width() - r[0]) / 2,
        o ? (e.offsetTop = t.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && ("t" === t.offset ? e.offsetTop = 0 : "r" === t.offset ? e.offsetLeft = i.width() - r[0] : "b" === t.offset ? e.offsetTop = i.height() - r[1] : "l" === t.offset ? e.offsetLeft = 0 : "lt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = 0) : "lb" === t.offset ? (e.offsetTop = i.height() - r[1], e.offsetLeft = 0) : "rt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = i.width() - r[0]) : "rb" === t.offset ? (e.offsetTop = i.height() - r[1], e.offsetLeft = i.width() - r[0]) : e.offsetTop = t.offset),
        t.fixed || (e.offsetTop = /%$/.test(e.offsetTop) ? i.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e.offsetLeft) ? i.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e.offsetTop += i.scrollTop(), e.offsetLeft += i.scrollLeft()),
        n.attr("minLeft") && (e.offsetTop = i.height() - (n.find(u[1]).outerHeight() || 0), e.offsetLeft = n.css("left")),
        n.css({
            top: e.offsetTop,
            left: e.offsetLeft
        })
    },
    l.pt.tips = function() {
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
        l = n.find(".layui-layer-TipsG"),
        c = t.tips[0];
        t.tips[1] || l.remove(),
        s.autoLeft = function() {
            s.left + o[0] - i.width() > 0 ? (s.tipLeft = s.left + s.width - o[0], l.css({
                right: 12,
                left: "auto"
            })) : s.tipLeft = s.left
        },
        s.where = [function() {
            s.autoLeft(),
            s.tipTop = s.top - o[1] - 10,
            l.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color", t.tips[1])
        },
        function() {
            s.tipLeft = s.left + s.width + 10,
            s.tipTop = s.top,
            l.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color", t.tips[1])
        },
        function() {
            s.autoLeft(),
            s.tipTop = s.top + s.height + 10,
            l.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color", t.tips[1])
        },
        function() {
            s.tipLeft = s.left - o[0] - 10,
            s.tipTop = s.top,
            l.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color", t.tips[1])
        }],
        s.where[c - 1](),
        1 === c ? s.top - (i.scrollTop() + o[1] + 16) < 0 && s.where[2]() : 2 === c ? i.width() - (s.left + s.width + o[0] + 16) > 0 || s.where[3]() : 3 === c ? s.top - i.scrollTop() + s.height + o[1] + 16 - i.height() > 0 && s.where[0]() : 4 === c && o[0] + 16 - s.left > 0 && s.where[1](),
        n.find("." + u[5]).css({
            "background-color": t.tips[1],
            "padding-right": t.closeBtn ? "30px": ""
        }),
        n.css({
            left: s.tipLeft - (t.fixed ? i.scrollLeft() : 0),
            top: s.tipTop - (t.fixed ? i.scrollTop() : 0)
        })
    },
    l.pt.move = function() {
        var e = this,
        t = e.config,
        n = r(document),
        o = e.layero,
        l = o.find(t.move),
        u = o.find(".layui-layer-resize"),
        c = {};
        return t.move && l.css("cursor", "move"),
        l.on("mousedown",
        function(e) {
            e.preventDefault(),
            t.move && (c.moveStart = !0, c.offset = [e.clientX - parseFloat(o.css("left")), e.clientY - parseFloat(o.css("top"))], a.moveElem.css("cursor", "move").show())
        }),
        u.on("mousedown",
        function(e) {
            e.preventDefault(),
            c.resizeStart = !0,
            c.offset = [e.clientX, e.clientY],
            c.area = [o.outerWidth(), o.outerHeight()],
            a.moveElem.css("cursor", "se-resize").show()
        }),
        n.on("mousemove",
        function(n) {
            if (c.moveStart) {
                var r = n.clientX - c.offset[0],
                a = n.clientY - c.offset[1],
                l = "fixed" === o.css("position");
                if (n.preventDefault(), c.stX = l ? 0 : i.scrollLeft(), c.stY = l ? 0 : i.scrollTop(), !t.moveOut) {
                    var u = i.width() - o.outerWidth() + c.stX,
                    d = i.height() - o.outerHeight() + c.stY;
                    r < c.stX && (r = c.stX),
                    r > u && (r = u),
                    a < c.stY && (a = c.stY),
                    a > d && (a = d)
                }
                o.css({
                    left: r,
                    top: a
                })
            }
            if (t.resize && c.resizeStart) {
                var r = n.clientX - c.offset[0],
                a = n.clientY - c.offset[1];
                n.preventDefault(),
                s.style(e.index, {
                    width: c.area[0] + r,
                    height: c.area[1] + a
                }),
                c.isResize = !0,
                t.resizing && t.resizing(o)
            }
        }).on("mouseup",
        function(e) {
            c.moveStart && (delete c.moveStart, a.moveElem.hide(), t.moveEnd && t.moveEnd(o)),
            c.resizeStart && (delete c.resizeStart, a.moveElem.hide())
        }),
        e
    },
    l.pt.callback = function() {
        function e() {
            var e = i.cancel && i.cancel(t.index, n);
            e === !1 || s.close(t.index)
        }
        var t = this,
        n = t.layero,
        i = t.config;
        t.openLayer(),
        i.success && (2 == i.type ? n.find("iframe").on("load",
        function() {
            i.success(n, t.index)
        }) : i.success(n, t.index)),
        6 == s.ie && t.IE6(n),
        n.find("." + u[6]).children("a").on("click",
        function() {
            var e = r(this).index();
            if (0 === e) i.yes ? i.yes(t.index, n) : i.btn1 ? i.btn1(t.index, n) : s.close(t.index);
            else {
                var o = i["btn" + (e + 1)] && i["btn" + (e + 1)](t.index, n);
                o === !1 || s.close(t.index)
            }
        }),
        n.find("." + u[7]).on("click", e),
        i.shadeClose && r("#layui-layer-shade" + t.index).on("click",
        function() {
            s.close(t.index)
        }),
        n.find(".layui-layer-min").on("click",
        function() {
            var e = i.min && i.min(n);
            e === !1 || s.min(t.index, i)
        }),
        n.find(".layui-layer-max").on("click",
        function() {
            r(this).hasClass("layui-layer-maxmin") ? (s.restore(t.index), i.restore && i.restore(n)) : (s.full(t.index, i), setTimeout(function() {
                i.full && i.full(n)
            },
            100))
        }),
        i.end && (a.end[t.index] = i.end)
    },
    a.reselect = function() {
        r.each(r("select"),
        function(e, t) {
            var n = r(this);
            n.parents("." + u[0])[0] || 1 == n.attr("layer") && r("." + u[0]).length < 1 && n.removeAttr("layer").show(),
            n = null
        })
    },
    l.pt.IE6 = function(e) {
        r("select").each(function(e, t) {
            var n = r(this);
            n.parents("." + u[0])[0] || "none" === n.css("display") || n.attr({
                layer: "1"
            }).hide(),
            n = null
        })
    },
    l.pt.openLayer = function() {
        var e = this;
        s.zIndex = e.config.zIndex,
        s.setTop = function(e) {
            var t = function() {
                s.zIndex++,
                e.css("z-index", s.zIndex + 1)
            };
            return s.zIndex = parseInt(e[0].style.zIndex),
            e.on("mousedown", t),
            s.zIndex
        }
    },
    a.record = function(e) {
        var t = [e.width(), e.height(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
        e.find(".layui-layer-max").addClass("layui-layer-maxmin"),
        e.attr({
            area: t
        })
    },
    a.rescollbar = function(e) {
        u.html.attr("layer-full") == e && (u.html[0].style.removeProperty ? u.html[0].style.removeProperty("overflow") : u.html[0].style.removeAttribute("overflow"), u.html.removeAttr("layer-full"))
    },
    window.layer = s,
    s.getChildFrame = function(e, t) {
        return t = t || r("." + u[4]).attr("times"),
        r("#" + u[0] + t).find("iframe").contents().find(e)
    },
    s.getFrameIndex = function(e) {
        return r("#" + e).parents("." + u[4]).attr("times")
    },
    s.iframeAuto = function(e) {
        if (e) {
            var t = s.getChildFrame("html", e).outerHeight(),
            n = r("#" + u[0] + e),
            i = n.find(u[1]).outerHeight() || 0,
            o = n.find("." + u[6]).outerHeight() || 0;
            n.css({
                height: t + i + o
            }),
            n.find("iframe").css({
                height: t
            })
        }
    },
    s.iframeSrc = function(e, t) {
        r("#" + u[0] + e).find("iframe").attr("src", t)
    },
    s.style = function(e, t, n) {
        var i = r("#" + u[0] + e),
        o = i.find(".layui-layer-content"),
        s = i.attr("type"),
        l = i.find(u[1]).outerHeight() || 0,
        c = i.find("." + u[6]).outerHeight() || 0;
        i.attr("minLeft");
        s !== a.type[3] && s !== a.type[4] && (n || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t.height) - l - c <= 64 && (t.height = 64 + l + c)), i.css(t), c = i.find("." + u[6]).outerHeight(), s === a.type[2] ? i.find("iframe").css({
            height: parseFloat(t.height) - l - c
        }) : o.css({
            height: parseFloat(t.height) - l - c - parseFloat(o.css("padding-top")) - parseFloat(o.css("padding-bottom"))
        }))
    },
    s.min = function(e, t) {
        var n = r("#" + u[0] + e),
        o = n.find(u[1]).outerHeight() || 0,
        l = n.attr("minLeft") || 181 * a.minIndex + "px",
        c = n.css("position");
        a.record(n),
        a.minLeft[0] && (l = a.minLeft[0], a.minLeft.shift()),
        n.attr("position", c),
        s.style(e, {
            width: 180,
            height: o,
            left: l,
            top: i.height() - o,
            position: "fixed",
            overflow: "hidden"
        },
        !0),
        n.find(".layui-layer-min").hide(),
        "page" === n.attr("type") && n.find(u[4]).hide(),
        a.rescollbar(e),
        n.attr("minLeft") || a.minIndex++,
        n.attr("minLeft", l)
    },
    s.restore = function(e) {
        var t = r("#" + u[0] + e),
        n = t.attr("area").split(",");
        t.attr("type");
        s.style(e, {
            width: parseFloat(n[0]),
            height: parseFloat(n[1]),
            top: parseFloat(n[2]),
            left: parseFloat(n[3]),
            position: t.attr("position"),
            overflow: "visible"
        },
        !0),
        t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),
        t.find(".layui-layer-min").show(),
        "page" === t.attr("type") && t.find(u[4]).show(),
        a.rescollbar(e)
    },
    s.full = function(e) {
        var t, n = r("#" + u[0] + e);
        a.record(n),
        u.html.attr("layer-full") || u.html.css("overflow", "hidden").attr("layer-full", e),
        clearTimeout(t),
        t = setTimeout(function() {
            var t = "fixed" === n.css("position");
            s.style(e, {
                top: t ? 0 : i.scrollTop(),
                left: t ? 0 : i.scrollLeft(),
                width: i.width(),
                height: i.height()
            },
            !0),
            n.find(".layui-layer-min").hide()
        },
        100)
    },
    s.title = function(e, t) {
        var n = r("#" + u[0] + (t || s.index)).find(u[1]);
        n.html(e)
    },
    s.close = function(e) {
        var t = r("#" + u[0] + e),
        n = t.attr("type"),
        i = "layer-anim-close";
        if (t[0]) {
            var o = "layui-layer-wrap",
            l = function() {
                if (n === a.type[1] && "object" === t.attr("conType")) {
                    t.children(":not(." + u[5] + ")").remove();
                    for (var i = t.find("." + o), s = 0; s < 2; s++) i.unwrap();
                    i.css("display", i.data("display")).removeClass(o)
                } else {
                    if (n === a.type[2]) try {
                        var l = r("#" + u[4] + e)[0];
                        l.contentWindow.document.write(""),
                        l.contentWindow.close(),
                        t.find("." + u[5])[0].removeChild(l)
                    } catch(c) {}
                    t[0].innerHTML = "",
                    t.remove()
                }
                "function" == typeof a.end[e] && a.end[e](),
                delete a.end[e]
            };
            t.data("isOutAnim") && t.addClass("layer-anim " + i),
            r("#layui-layer-moves, #layui-layer-shade" + e).remove(),
            6 == s.ie && a.reselect(),
            a.rescollbar(e),
            t.attr("minLeft") && (a.minIndex--, a.minLeft.push(t.attr("minLeft"))),
            s.ie && s.ie < 10 || !t.data("isOutAnim") ? l() : setTimeout(function() {
                l()
            },
            200)
        }
    },
    s.closeAll = function(e) {
        r.each(r("." + u[0]),
        function() {
            var t = r(this),
            n = e ? t.attr("type") === e: 1;
            n && s.close(t.attr("times")),
            n = null
        })
    };
    var c = s.cache || {},
    d = function(e) {
        return c.skin ? " " + c.skin + " " + c.skin + "-" + e: ""
    };
    s.prompt = function(e, t) {
        var n = "";
        if (e = e || {},
        "function" == typeof e && (t = e), e.area) {
            var o = e.area;
            n = 'style="width: ' + o[0] + "; height: " + o[1] + ';"',
            delete e.area
        }
        var a, l = 2 == e.formType ? '<textarea class="layui-layer-input"' + n + ">" + (e.value || "") + "</textarea>": function() {
            return '<input type="' + (1 == e.formType ? "password": "text") + '" class="layui-layer-input" value="' + (e.value || "") + '">'
        } (),
        u = e.success;
        return delete e.success,
        s.open(r.extend({
            type: 1,
            btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
            content: l,
            skin: "layui-layer-prompt" + d("prompt"),
            maxWidth: i.width(),
            success: function(e) {
                a = e.find(".layui-layer-input"),
                a.focus(),
                "function" == typeof u && u(e)
            },
            resize: !1,
            yes: function(n) {
                var i = a.val();
                "" === i ? a.focus() : i.length > (e.maxlength || 500) ? s.tips("&#x6700;&#x591A;&#x8F93;&#x5165;" + (e.maxlength || 500) + "&#x4E2A;&#x5B57;&#x6570;", a, {
                    tips: 1
                }) : t && t(i, n, a)
            }
        },
        e))
    },
    s.tab = function(e) {
        e = e || {};
        var t = e.tab || {},
        n = "layui-this",
        i = e.success;
        return delete e.success,
        s.open(r.extend({
            type: 1,
            skin: "layui-layer-tab" + d("tab"),
            resize: !1,
            title: function() {
                var e = t.length,
                i = 1,
                r = "";
                if (e > 0) for (r = '<span class="' + n + '">' + t[0].title + "</span>"; i < e; i++) r += "<span>" + t[i].title + "</span>";
                return r
            } (),
            content: '<ul class="layui-layer-tabmain">' +
            function() {
                var e = t.length,
                i = 1,
                r = "";
                if (e > 0) for (r = '<li class="layui-layer-tabli ' + n + '">' + (t[0].content || "no content") + "</li>"; i < e; i++) r += '<li class="layui-layer-tabli">' + (t[i].content || "no  content") + "</li>";
                return r
            } () + "</ul>",
            success: function(t) {
                var o = t.find(".layui-layer-title").children(),
                a = t.find(".layui-layer-tabmain").children();
                o.on("mousedown",
                function(t) {
                    t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0;
                    var i = r(this),
                    o = i.index();
                    i.addClass(n).siblings().removeClass(n),
                    a.eq(o).show().siblings().hide(),
                    "function" == typeof e.change && e.change(o)
                }),
                "function" == typeof i && i(t)
            }
        },
        e))
    },
    s.photos = function(e, t, n) {
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
            var a = e.photos.constructor === Object,
            l = a ? e.photos: {},
            u = l.data || [],
            c = l.start || 0;
            o.imgIndex = (0 | c) + 1,
            e.img = e.img || "img";
            var f = e.success;
            if (delete e.success, a) {
                if (0 === u.length) return s.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")
            } else {
                var p = r(e.photos),
                h = function() {
                    u = [],
                    p.find(e.img).each(function(e) {
                        var t = r(this);
                        t.attr("layer-index", e),
                        u.push({
                            alt: t.attr("alt"),
                            pid: t.attr("layer-pid"),
                            src: t.attr("layer-src") || t.attr("src"),
                            thumb: t.attr("src")
                        })
                    })
                };
                if (h(), 0 === u.length) return;
                if (t || p.on("click", e.img,
                function() {
                    var t = r(this),
                    n = t.attr("layer-index");
                    s.photos(r.extend(e, {
                        photos: {
                            start: n,
                            data: u,
                            tab: e.tab
                        },
                        full: e.full
                    }), !0),
                    h()
                }), !t) return
            }
            o.imgprev = function(e) {
                o.imgIndex--,
                o.imgIndex < 1 && (o.imgIndex = u.length),
                o.tabimg(e)
            },
            o.imgnext = function(e, t) {
                o.imgIndex++,
                o.imgIndex > u.length && (o.imgIndex = 1, t) || o.tabimg(e)
            },
            o.keyup = function(e) {
                if (!o.end) {
                    var t = e.keyCode;
                    e.preventDefault(),
                    37 === t ? o.imgprev(!0) : 39 === t ? o.imgnext(!0) : 27 === t && s.close(o.index)
                }
            },
            o.tabimg = function(t) {
                if (! (u.length <= 1)) return l.start = o.imgIndex - 1,
                s.close(o.index),
                s.photos(e, !0, t)
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
            o.loadi = s.load(1, {
                shade: !("shade" in e) && .9,
                scrollbar: !1
            }),
            i(u[c].src,
            function(t) {
                s.close(o.loadi),
                o.index = s.open(r.extend({
                    type: 1,
                    id: "layui-layer-photos",
                    area: function() {
                        var n = [t.width, t.height],
                        i = [r(window).width() - 100, r(window).height() - 100];
                        if (!e.full && (n[0] > i[0] || n[1] > i[1])) {
                            var o = [n[0] / i[0], n[1] / i[1]];
                            o[0] > o[1] ? (n[0] = n[0] / o[0], n[1] = n[1] / o[0]) : o[0] < o[1] && (n[0] = n[0] / o[1], n[1] = n[1] / o[1])
                        }
                        return [n[0] + "px", n[1] + "px"]
                    } (),
                    title: !1,
                    shade: .9,
                    shadeClose: !0,
                    closeBtn: !1,
                    move: ".layui-layer-phimg img",
                    moveType: 1,
                    scrollbar: !1,
                    moveOut: !0,
                    isOutAnim: !1,
                    skin: "layui-layer-photos" + d("photos"),
                    content: '<div class="layui-layer-phimg"><img src="' + u[c].src + '" alt="' + (u[c].alt || "") + '" layer-pid="' + u[c].pid + '"><div class="layui-layer-imgsee">' + (u.length > 1 ? '<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>': "") + '<div class="layui-layer-imgbar" style="display:' + (n ? "block": "") + '"><span class="layui-layer-imgtit"><a href="javascript:;">' + (u[c].alt || "") + "</a><em>" + o.imgIndex + "/" + u.length + "</em></span></div></div></div>",
                    success: function(t, n) {
                        o.bigimg = t.find(".layui-layer-phimg"),
                        o.imgsee = t.find(".layui-layer-imguide,.layui-layer-imgbar"),
                        o.event(t),
                        e.tab && e.tab(u[c], t),
                        "function" == typeof f && f(t)
                    },
                    end: function() {
                        o.end = !0,
                        r(document).off("keyup", o.keyup)
                    }
                },
                e))
            },
            function() {
                s.close(o.loadi),
                s.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", {
                    time: 3e4,
                    btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"],
                    yes: function() {
                        u.length > 1 && o.imgnext(!0, !0);
                    }
                })
            })
        }
    },
    a.run = function() {
        i = r(window),
        u.html = r("html"),
        s.open = function(e) {
            var t = new l(e);
            return t.index
        }
    },
    a.run(),
    e.exports = s
}]);