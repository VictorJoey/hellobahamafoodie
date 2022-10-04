const MenuButton = document.getElementById("main-navigation-menu-button"), MainNav = document.getElementById("main-navigation"), LangChoice = document.getElementById("menu-lang"); function togglemenu() { MenuButton.classList.toggle("main-navigation-menu-button-active"), MainNav.classList.toggle("main-navigation-active"), LangChoice.classList.toggle("menu-lang-active") } MenuButton.addEventListener("click", togglemenu); let magnet = document.querySelectorAll(".magnetic"), strength = 50; for (var i = 0; i < magnet.length; i++) { function moveMagnet(e) { let t = e.currentTarget, n = t.getBoundingClientRect(); TweenMax.to(t, 1, { x: ((e.clientX - n.left) / t.offsetWidth - .5) * strength, y: ((e.clientY - n.top) / t.offsetHeight - .5) * strength, ease: Power4.easeOut }) } magnet[i].addEventListener("mousemove", moveMagnet), magnet[i].addEventListener("mouseout", (function (e) { TweenMax.to(e.currentTarget, 1, { x: 0, y: 0, ease: Power4.easeOut }) })) } !function (e, t) { "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Rellax = t() }("undefined" != typeof window ? window : global, (function () { var e = function (t, n) { var o = Object.create(e.prototype), i = 0, r = 0, a = 0, l = 0, s = [], c = !0, d = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (e) { return setTimeout(e, 1e3 / 60) }, p = null, u = !1; try { var m = Object.defineProperty({}, "passive", { get: function () { u = !0 } }); window.addEventListener("testPassive", null, m), window.removeEventListener("testPassive", null, m) } catch (e) { } var f = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout, g = window.transformProp || function () { var e = document.createElement("div"); if (null === e.style.transform) { var t, n = ["Webkit", "Moz", "ms"]; for (t in n) if (void 0 !== e.style[n[t] + "Transform"]) return n[t] + "Transform" } return "transform" }(); if (o.options = { speed: -2, verticalSpeed: null, horizontalSpeed: null, breakpoints: [576, 768, 1201], center: !1, wrapper: null, relativeToWrapper: !1, round: !0, vertical: !0, horizontal: !1, verticalScrollAxis: "y", horizontalScrollAxis: "x", callback: function () { } }, n && Object.keys(n).forEach((function (e) { o.options[e] = n[e] })), n && n.breakpoints && function () { if (3 === o.options.breakpoints.length && Array.isArray(o.options.breakpoints)) { var e, t = !0, n = !0; if (o.options.breakpoints.forEach((function (o) { "number" != typeof o && (n = !1), null !== e && o < e && (t = !1), e = o })), t && n) return } o.options.breakpoints = [576, 768, 1201], console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted") }(), t || (t = ".rellax"), 0 < (m = "string" == typeof t ? document.querySelectorAll(t) : [t]).length) { if (o.elems = m, o.options.wrapper && !o.options.wrapper.nodeType) { if (!(m = document.querySelector(o.options.wrapper))) return void console.warn("Rellax: The wrapper you're trying to use doesn't exist."); o.options.wrapper = m } var v, w = function () { for (var e = 0; e < s.length; e++)o.elems[e].style.cssText = s[e].style; for (s = [], r = window.innerHeight, l = window.innerWidth, e = o.options.breakpoints, v = l < e[0] ? "xs" : l >= e[0] && l < e[1] ? "sm" : l >= e[1] && l < e[2] ? "md" : "lg", x(), e = 0; e < o.elems.length; e++) { var t = void 0, n = o.elems[e], i = n.getAttribute("data-rellax-percentage"), a = n.getAttribute("data-rellax-speed"), d = n.getAttribute("data-rellax-xs-speed"), p = n.getAttribute("data-rellax-mobile-speed"), u = n.getAttribute("data-rellax-tablet-speed"), m = n.getAttribute("data-rellax-desktop-speed"), f = n.getAttribute("data-rellax-vertical-speed"), g = n.getAttribute("data-rellax-horizontal-speed"), b = n.getAttribute("data-rellax-vertical-scroll-axis"), L = n.getAttribute("data-rellax-horizontal-scroll-axis"), E = n.getAttribute("data-rellax-zindex") || 0, T = n.getAttribute("data-rellax-min"), z = n.getAttribute("data-rellax-max"), S = n.getAttribute("data-rellax-min-x"), q = n.getAttribute("data-rellax-max-x"), k = n.getAttribute("data-rellax-min-y"), O = n.getAttribute("data-rellax-max-y"), Y = !0; d || p || u || m ? t = { xs: d, sm: p, md: u, lg: m } : Y = !1, d = o.options.wrapper ? o.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop, o.options.relativeToWrapper && (d = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - o.options.wrapper.offsetTop); var M = o.options.vertical && (i || o.options.center) ? d : 0, X = o.options.horizontal && (i || o.options.center) ? o.options.wrapper ? o.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0; d = M + n.getBoundingClientRect().top, p = n.clientHeight || n.offsetHeight || n.scrollHeight, u = X + n.getBoundingClientRect().left, m = n.clientWidth || n.offsetWidth || n.scrollWidth, M = i || (M - d + r) / (p + r), i = i || (X - u + l) / (m + l), o.options.center && (M = i = .5), t = Y && null !== t[v] ? Number(t[v]) : a || o.options.speed, f = f || o.options.verticalSpeed, g = g || o.options.horizontalSpeed, b = b || o.options.verticalScrollAxis, L = L || o.options.horizontalScrollAxis, a = h(i, M, t, f, g), n = n.style.cssText, Y = "", (i = /transform\s*:/i.exec(n)) && (Y = (i = (Y = n.slice(i.index)).indexOf(";")) ? " " + Y.slice(11, i).replace(/\s/g, "") : " " + Y.slice(11).replace(/\s/g, "")), s.push({ baseX: a.x, baseY: a.y, top: d, left: u, height: p, width: m, speed: t, verticalSpeed: f, horizontalSpeed: g, verticalScrollAxis: b, horizontalScrollAxis: L, style: n, transform: Y, zindex: E, min: T, max: z, minX: S, maxX: q, minY: k, maxY: O }) } A(), c && (window.addEventListener("resize", w), c = !1, y()) }, x = function () { var e = i, t = a; return i = o.options.wrapper ? o.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, a = o.options.wrapper ? o.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset, o.options.relativeToWrapper && (i = ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - o.options.wrapper.offsetTop), !!(e != i && o.options.vertical || t != a && o.options.horizontal) }, h = function (e, t, n, i, r) { var a = {}; return e = 100 * (r || n) * (1 - e), t = 100 * (i || n) * (1 - t), a.x = o.options.round ? Math.round(e) : Math.round(100 * e) / 100, a.y = o.options.round ? Math.round(t) : Math.round(100 * t) / 100, a }, b = function () { window.removeEventListener("resize", b), window.removeEventListener("orientationchange", b), (o.options.wrapper ? o.options.wrapper : window).removeEventListener("scroll", b), (o.options.wrapper ? o.options.wrapper : document).removeEventListener("touchmove", b), p = d(y) }, y = function () { x() && !1 === c ? (A(), p = d(y)) : (p = null, window.addEventListener("resize", b), window.addEventListener("orientationchange", b), (o.options.wrapper ? o.options.wrapper : window).addEventListener("scroll", b, !!u && { passive: !0 }), (o.options.wrapper ? o.options.wrapper : document).addEventListener("touchmove", b, !!u && { passive: !0 })) }, A = function () { for (var e, t = 0; t < o.elems.length; t++) { var n = s[t].verticalScrollAxis.toLowerCase(), c = s[t].horizontalScrollAxis.toLowerCase(); e = -1 != n.indexOf("x") ? i : 0, n = -1 != n.indexOf("y") ? i : 0; var d = -1 != c.indexOf("x") ? a : 0; c = -1 != c.indexOf("y") ? a : 0, c = (e = h((e + d - s[t].left + l) / (s[t].width + l), (n + c - s[t].top + r) / (s[t].height + r), s[t].speed, s[t].verticalSpeed, s[t].horizontalSpeed)).y - s[t].baseY, n = e.x - s[t].baseX, null !== s[t].min && (o.options.vertical && !o.options.horizontal && (c = c <= s[t].min ? s[t].min : c), o.options.horizontal && !o.options.vertical && (n = n <= s[t].min ? s[t].min : n)), null != s[t].minY && (c = c <= s[t].minY ? s[t].minY : c), null != s[t].minX && (n = n <= s[t].minX ? s[t].minX : n), null !== s[t].max && (o.options.vertical && !o.options.horizontal && (c = c >= s[t].max ? s[t].max : c), o.options.horizontal && !o.options.vertical && (n = n >= s[t].max ? s[t].max : n)), null != s[t].maxY && (c = c >= s[t].maxY ? s[t].maxY : c), null != s[t].maxX && (n = n >= s[t].maxX ? s[t].maxX : n), o.elems[t].style[g] = "translate3d(" + (o.options.horizontal ? n : "0") + "px," + (o.options.vertical ? c : "0") + "px," + s[t].zindex + "px) " + s[t].transform } o.options.callback(e) }; return o.destroy = function () { for (var e = 0; e < o.elems.length; e++)o.elems[e].style.cssText = s[e].style; c || (window.removeEventListener("resize", w), c = !0), f(p), p = null }, w(), o.refresh = w, o } console.warn("Rellax: The elements you're trying to select don't exist.") }; return e })); var rellax = new Rellax(".rellax"); const tabs = document.querySelectorAll("[data-tab-target]"), tabContents = document.querySelectorAll("[data-tab-content]"); function ToggleDropDown() { var e = document.querySelectorAll(".faq-question-item"); e && e.forEach((function (t, n) { t.addEventListener("click", (function () { t.classList.toggle("faq-question-item-active"), e.forEach((function (e, t) { n !== t && e.classList.remove("faq-question-item-active") })) })) })) } tabs.forEach((e => { e.addEventListener("click", (() => { const t = document.querySelector(e.dataset.tabTarget); tabContents.forEach((e => { e.classList.remove("faq-questions-container-active") })), tabs.forEach((e => { e.classList.remove("main-filters-item-active") })), t.classList.add("faq-questions-container-active"), e.classList.add("main-filters-item-active") })) })), $((function () { $(".nutri-ingredients-wrapper").click((function (e) { $(this).toggleClass("nutri-ingredients-wrapper-active") })) })), "loading" !== document.readyState ? ToggleDropDown() : document.addEventListener("DOMContentLoaded", (function () { ToggleDropDown() }));