"use strict";
(self.webpackChunkprivy_create_react_app = self.webpackChunkprivy_create_react_app || []).push([
    [774], {
        7171: (e, t, s) => {
            s.d(t, {
                t0: () => O,
                zv: () => b,
                uA: () => w,
                uc: () => B,
                jb: () => K,
                zb: () => C,
                AV: () => v,
                Ic: () => Y,
                Vs: () => $
            });
            Symbol();
            const o = Symbol();
            const n = Object.getPrototypeOf,
                a = new WeakMap,
                r = e => e && (a.has(e) ? a.get(e) : n(e) === Object.prototype || n(e) === Array.prototype),
                i = e => r(e) && e[o] || null,
                l = function(e) {
                    let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    a.set(e, t)
                },
                c = e => "object" === typeof e && null !== e,
                d = new WeakMap,
                p = new WeakSet,
                u = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.is,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e, t) => new Proxy(e, t),
                        s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => c(e) && !p.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer),
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e => {
                            switch (e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason;
                                default:
                                    throw e
                            }
                        },
                        n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new WeakMap,
                        a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : function(e, t) {
                            let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o;
                            const r = n.get(e);
                            if ((null == r ? void 0 : r[0]) === t) return r[1];
                            const i = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
                            return l(i, !0), n.set(e, [t, i]), Reflect.ownKeys(e).forEach((t => {
                                if (Object.getOwnPropertyDescriptor(i, t)) return;
                                const o = Reflect.get(e, t),
                                    n = {
                                        value: o,
                                        enumerable: !0,
                                        configurable: !0
                                    };
                                if (p.has(o)) l(o, !1);
                                else if (o instanceof Promise) delete n.value, n.get = () => s(o);
                                else if (d.has(o)) {
                                    const [e, t] = d.get(o);
                                    n.value = a(e, t(), s)
                                }
                                Object.defineProperty(i, t, n)
                            })), Object.preventExtensions(i)
                        },
                        r = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : new WeakMap,
                        u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [1, 1],
                        h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : o => {
                            if (!c(o)) throw new Error("object required");
                            const n = r.get(o);
                            if (n) return n;
                            let l = u[0];
                            const g = new Set,
                                f = function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ++u[0];
                                    l !== t && (l = t, g.forEach((s => s(e, t))))
                                };
                            let m = u[1];
                            const v = e => (t, s) => {
                                    const o = [...t];
                                    o[1] = [e, ...o[1]], f(o, s)
                                },
                                b = new Map,
                                y = e => {
                                    var t;
                                    const s = b.get(e);
                                    s && (b.delete(e), null == (t = s[1]) || t.call(s))
                                },
                                w = Array.isArray(o) ? [] : Object.create(Object.getPrototypeOf(o)),
                                I = {
                                    deleteProperty(e, t) {
                                        const s = Reflect.get(e, t);
                                        y(t);
                                        const o = Reflect.deleteProperty(e, t);
                                        return o && f(["delete", [t], s]), o
                                    },
                                    set(t, o, n, a) {
                                        const l = Reflect.has(t, o),
                                            u = Reflect.get(t, o, a);
                                        if (l && (e(u, n) || r.has(n) && e(u, r.get(n)))) return !0;
                                        y(o), c(n) && (n = i(n) || n);
                                        let m = n;
                                        if (n instanceof Promise) n.then((e => {
                                            n.status = "fulfilled", n.value = e, f(["resolve", [o], e])
                                        })).catch((e => {
                                            n.status = "rejected", n.reason = e, f(["reject", [o], e])
                                        }));
                                        else {
                                            !d.has(n) && s(n) && (m = h(n));
                                            const e = !p.has(m) && d.get(m);
                                            e && ((e, t) => {
                                                if (b.has(e)) throw new Error("prop listener already exists");
                                                if (g.size) {
                                                    const s = t[3](v(e));
                                                    b.set(e, [t, s])
                                                } else b.set(e, [t])
                                            })(o, e)
                                        }
                                        return Reflect.set(t, o, m, a), f(["set", [o], n, u]), !0
                                    }
                                },
                                C = t(w, I);
                            r.set(o, C);
                            const W = [w, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ++u[1];
                                return m === e || g.size || (m = e, b.forEach((t => {
                                    let [s] = t;
                                    const o = s[1](e);
                                    o > l && (l = o)
                                }))), l
                            }, a, e => {
                                g.add(e), 1 === g.size && b.forEach(((e, t) => {
                                    let [s, o] = e;
                                    if (o) throw new Error("remove already exists");
                                    const n = s[3](v(t));
                                    b.set(t, [s, n])
                                }));
                                return () => {
                                    g.delete(e), 0 === g.size && b.forEach(((e, t) => {
                                        let [s, o] = e;
                                        o && (o(), b.set(t, [s]))
                                    }))
                                }
                            }];
                            return d.set(C, W), Reflect.ownKeys(o).forEach((e => {
                                const t = Object.getOwnPropertyDescriptor(o, e);
                                "value" in t && (C[e] = o[e], delete t.value, delete t.writable), Object.defineProperty(w, e, t)
                            })), C
                        };
                    return [h, d, p, e, t, s, o, n, a, r, u]
                },
                [h] = u();

            function g() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return h(e)
            }

            function f(e, t, s) {
                const o = d.get(e);
                let n;
                o || console.warn("Please use proxy object");
                const a = [],
                    r = o[3];
                let i = !1;
                const l = r((e => {
                    a.push(e), s ? t(a.splice(0)) : n || (n = Promise.resolve().then((() => {
                        n = void 0, i && t(a.splice(0))
                    })))
                }));
                return i = !0, () => {
                    i = !1, l()
                }
            }
            const m = g({
                    history: ["ConnectWallet"],
                    view: "ConnectWallet",
                    data: void 0
                }),
                v = {
                    state: m,
                    subscribe: e => f(m, (() => e(m))),
                    push(e, t) {
                        e !== m.view && (m.view = e, t && (m.data = t), m.history.push(e))
                    },
                    reset(e) {
                        m.view = e, m.history = [e]
                    },
                    replace(e) {
                        m.history.length > 1 && (m.history[m.history.length - 1] = e, m.view = e)
                    },
                    goBack() {
                        if (m.history.length > 1) {
                            m.history.pop();
                            const [e] = m.history.slice(-1);
                            m.view = e
                        }
                    },
                    setData(e) {
                        m.data = e
                    }
                },
                b = {
                    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
                    WCM_VERSION: "WCM_VERSION",
                    RECOMMENDED_WALLET_AMOUNT: 9,
                    isMobile: () => typeof window < "u" && Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),
                    isAndroid: () => b.isMobile() && navigator.userAgent.toLowerCase().includes("android"),
                    isIos() {
                        const e = navigator.userAgent.toLowerCase();
                        return b.isMobile() && (e.includes("iphone") || e.includes("ipad"))
                    },
                    isHttpUrl: e => e.startsWith("http://") || e.startsWith("https://"),
                    isArray: e => Array.isArray(e) && e.length > 0,
                    formatNativeUrl(e, t, s) {
                        if (b.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
                        let o = e;
                        o.includes("://") || (o = e.replaceAll("/", "").replaceAll(":", ""), o = "".concat(o, "://")), o.endsWith("/") || (o = "".concat(o, "/")), this.setWalletConnectDeepLink(o, s);
                        const n = encodeURIComponent(t);
                        return "".concat(o, "wc?uri=").concat(n)
                    },
                    formatUniversalUrl(e, t, s) {
                        if (!b.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
                        let o = e;
                        o.endsWith("/") || (o = "".concat(o, "/")), this.setWalletConnectDeepLink(o, s);
                        const n = encodeURIComponent(t);
                        return "".concat(o, "wc?uri=").concat(n)
                    },
                    wait: async e => new Promise((t => {
                        setTimeout(t, e)
                    })),
                    openHref(e, t) {
                        window.open(e, t, "noreferrer noopener")
                    },
                    setWalletConnectDeepLink(e, t) {
                        try {
                            localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: e,
                                name: t
                            }))
                        } catch {
                            console.info("Unable to set WalletConnect deep link")
                        }
                    },
                    setWalletConnectAndroidDeepLink(e) {
                        try {
                            const [t] = e.split("?");
                            localStorage.setItem(b.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: t,
                                name: "Android"
                            }))
                        } catch {
                            console.info("Unable to set WalletConnect android deep link")
                        }
                    },
                    removeWalletConnectDeepLink() {
                        try {
                            localStorage.removeItem(b.WALLETCONNECT_DEEPLINK_CHOICE)
                        } catch {
                            console.info("Unable to remove WalletConnect deep link")
                        }
                    },
                    setModalVersionInStorage() {
                        try {
                            typeof localStorage < "u" && localStorage.setItem(b.WCM_VERSION, "2.6.2")
                        } catch {
                            console.info("Unable to set Web3Modal version in storage")
                        }
                    },
                    getWalletRouterData() {
                        var e;
                        const t = null == (e = v.state.data) ? void 0 : e.Wallet;
                        if (!t) throw new Error('Missing "Wallet" view data');
                        return t
                    }
                },
                y = g({
                    enabled: typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")),
                    userSessionId: "",
                    events: [],
                    connectedWalletId: void 0
                }),
                w = {
                    state: y,
                    subscribe: e => f(y.events, (() => e(function(e, t) {
                        const s = d.get(e);
                        s || console.warn("Please use proxy object");
                        const [o, n, a] = s;
                        return a(o, n(), t)
                    }(y.events[y.events.length - 1])))),
                    initialize() {
                        y.enabled && typeof(null == crypto ? void 0 : crypto.randomUUID) < "u" && (y.userSessionId = crypto.randomUUID())
                    },
                    setConnectedWalletId(e) {
                        y.connectedWalletId = e
                    },
                    click(e) {
                        if (y.enabled) {
                            const t = {
                                type: "CLICK",
                                name: e.name,
                                userSessionId: y.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            y.events.push(t)
                        }
                    },
                    track(e) {
                        if (y.enabled) {
                            const t = {
                                type: "TRACK",
                                name: e.name,
                                userSessionId: y.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            y.events.push(t)
                        }
                    },
                    view(e) {
                        if (y.enabled) {
                            const t = {
                                type: "VIEW",
                                name: e.name,
                                userSessionId: y.userSessionId,
                                timestamp: Date.now(),
                                data: e
                            };
                            y.events.push(t)
                        }
                    }
                },
                I = g({
                    chains: void 0,
                    walletConnectUri: void 0,
                    isAuth: !1,
                    isCustomDesktop: !1,
                    isCustomMobile: !1,
                    isDataLoaded: !1,
                    isUiLoaded: !1
                }),
                C = {
                    state: I,
                    subscribe: e => f(I, (() => e(I))),
                    setChains(e) {
                        I.chains = e
                    },
                    setWalletConnectUri(e) {
                        I.walletConnectUri = e
                    },
                    setIsCustomDesktop(e) {
                        I.isCustomDesktop = e
                    },
                    setIsCustomMobile(e) {
                        I.isCustomMobile = e
                    },
                    setIsDataLoaded(e) {
                        I.isDataLoaded = e
                    },
                    setIsUiLoaded(e) {
                        I.isUiLoaded = e
                    },
                    setIsAuth(e) {
                        I.isAuth = e
                    }
                },
                W = g({
                    projectId: "",
                    mobileWallets: void 0,
                    desktopWallets: void 0,
                    walletImages: void 0,
                    chains: void 0,
                    enableAuthMode: !1,
                    enableExplorer: !0,
                    explorerExcludedWalletIds: void 0,
                    explorerRecommendedWalletIds: void 0,
                    termsOfServiceUrl: void 0,
                    privacyPolicyUrl: void 0
                }),
                O = {
                    state: W,
                    subscribe: e => f(W, (() => e(W))),
                    setConfig(e) {
                        var t, s;
                        w.initialize(), C.setChains(e.chains), C.setIsAuth(Boolean(e.enableAuthMode)), C.setIsCustomMobile(Boolean(null == (t = e.mobileWallets) ? void 0 : t.length)), C.setIsCustomDesktop(Boolean(null == (s = e.desktopWallets) ? void 0 : s.length)), b.setModalVersionInStorage(), Object.assign(W, e)
                    }
                };
            var E = Object.defineProperty,
                j = Object.getOwnPropertySymbols,
                L = Object.prototype.hasOwnProperty,
                A = Object.prototype.propertyIsEnumerable,
                k = (e, t, s) => t in e ? E(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s;
            const M = "https://explorer-api.walletconnect.com",
                U = "wcm",
                D = "js-2.6.2";
            async function P(e, t) {
                const s = ((e, t) => {
                        for (var s in t || (t = {})) L.call(t, s) && k(e, s, t[s]);
                        if (j)
                            for (var s of j(t)) A.call(t, s) && k(e, s, t[s]);
                        return e
                    })({
                        sdkType: U,
                        sdkVersion: D
                    }, t),
                    o = new URL(e, M);
                return o.searchParams.append("projectId", O.state.projectId), Object.entries(s).forEach((e => {
                    let [t, s] = e;
                    s && o.searchParams.append(t, String(s))
                })), (await fetch(o)).json()
            }
            const S = {
                getDesktopListings: async e => P("/w3m/v1/getDesktopListings", e),
                getMobileListings: async e => P("/w3m/v1/getMobileListings", e),
                getInjectedListings: async e => P("/w3m/v1/getInjectedListings", e),
                getAllListings: async e => P("/w3m/v1/getAllListings", e),
                getWalletImageUrl: e => "".concat(M, "/w3m/v1/getWalletImage/").concat(e, "?projectId=").concat(O.state.projectId, "&sdkType=").concat(U, "&sdkVersion=").concat(D),
                getAssetImageUrl: e => "".concat(M, "/w3m/v1/getAssetImage/").concat(e, "?projectId=").concat(O.state.projectId, "&sdkType=").concat(U, "&sdkVersion=").concat(D)
            };
            var N = Object.defineProperty,
                x = Object.getOwnPropertySymbols,
                T = Object.prototype.hasOwnProperty,
                _ = Object.prototype.propertyIsEnumerable,
                R = (e, t, s) => t in e ? N(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s;
            const V = b.isMobile(),
                z = g({
                    wallets: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    search: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    recomendedWallets: []
                }),
                B = {
                    state: z,
                    async getRecomendedWallets() {
                        const {
                            explorerRecommendedWalletIds: e,
                            explorerExcludedWalletIds: t
                        } = O.state;
                        if ("NONE" === e || "ALL" === t && !e) return z.recomendedWallets;
                        if (b.isArray(e)) {
                            const t = {
                                    recommendedIds: e.join(",")
                                },
                                {
                                    listings: s
                                } = await S.getAllListings(t),
                                o = Object.values(s);
                            o.sort(((t, s) => e.indexOf(t.id) - e.indexOf(s.id))), z.recomendedWallets = o
                        } else {
                            const {
                                chains: e,
                                isAuth: s
                            } = C.state, o = null === e || void 0 === e ? void 0 : e.join(","), n = b.isArray(t), a = {
                                page: 1,
                                sdks: s ? "auth_v1" : void 0,
                                entries: b.RECOMMENDED_WALLET_AMOUNT,
                                chains: o,
                                version: 2,
                                excludedIds: n ? t.join(",") : void 0
                            }, {
                                listings: r
                            } = V ? await S.getMobileListings(a) : await S.getDesktopListings(a);
                            z.recomendedWallets = Object.values(r)
                        }
                        return z.recomendedWallets
                    },
                    async getWallets(e) {
                        const t = ((e, t) => {
                                for (var s in t || (t = {})) T.call(t, s) && R(e, s, t[s]);
                                if (x)
                                    for (var s of x(t)) _.call(t, s) && R(e, s, t[s]);
                                return e
                            })({}, e),
                            {
                                explorerRecommendedWalletIds: s,
                                explorerExcludedWalletIds: o
                            } = O.state,
                            {
                                recomendedWallets: n
                            } = z;
                        if ("ALL" === o) return z.wallets;
                        n.length ? t.excludedIds = n.map((e => e.id)).join(",") : b.isArray(s) && (t.excludedIds = s.join(",")), b.isArray(o) && (t.excludedIds = [t.excludedIds, o].filter(Boolean).join(",")), C.state.isAuth && (t.sdks = "auth_v1");
                        const {
                            page: a,
                            search: r
                        } = e, {
                            listings: i,
                            total: l
                        } = V ? await S.getMobileListings(t) : await S.getDesktopListings(t), c = Object.values(i), d = r ? "search" : "wallets";
                        return z[d] = {
                            listings: [...z[d].listings, ...c],
                            total: l,
                            page: null !== a && void 0 !== a ? a : 1
                        }, {
                            listings: c,
                            total: l
                        }
                    },
                    getWalletImageUrl: e => S.getWalletImageUrl(e),
                    getAssetImageUrl: e => S.getAssetImageUrl(e),
                    resetSearch() {
                        z.search = {
                            listings: [],
                            total: 0,
                            page: 1
                        }
                    }
                },
                H = g({
                    open: !1
                }),
                K = {
                    state: H,
                    subscribe: e => f(H, (() => e(H))),
                    open: async e => new Promise((t => {
                        const {
                            isUiLoaded: s,
                            isDataLoaded: o
                        } = C.state;
                        if (b.removeWalletConnectDeepLink(), C.setWalletConnectUri(null === e || void 0 === e ? void 0 : e.uri), C.setChains(null === e || void 0 === e ? void 0 : e.chains), v.reset("ConnectWallet"), s && o) H.open = !0, t();
                        else {
                            const e = setInterval((() => {
                                const s = C.state;
                                s.isUiLoaded && s.isDataLoaded && (clearInterval(e), H.open = !0, t())
                            }), 200)
                        }
                    })),
                    close() {
                        H.open = !1
                    }
                };
            var J = Object.defineProperty,
                q = Object.getOwnPropertySymbols,
                F = Object.prototype.hasOwnProperty,
                G = Object.prototype.propertyIsEnumerable,
                Q = (e, t, s) => t in e ? J(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: s
                }) : e[t] = s;
            const X = g({
                    themeMode: typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
                }),
                Y = {
                    state: X,
                    subscribe: e => f(X, (() => e(X))),
                    setThemeConfig(e) {
                        const {
                            themeMode: t,
                            themeVariables: s
                        } = e;
                        t && (X.themeMode = t), s && (X.themeVariables = ((e, t) => {
                            for (var s in t || (t = {})) F.call(t, s) && Q(e, s, t[s]);
                            if (q)
                                for (var s of q(t)) G.call(t, s) && Q(e, s, t[s]);
                            return e
                        })({}, s))
                    }
                },
                Z = g({
                    open: !1,
                    message: "",
                    variant: "success"
                }),
                $ = {
                    state: Z,
                    subscribe: e => f(Z, (() => e(Z))),
                    openToast(e, t) {
                        Z.open = !0, Z.message = e, Z.variant = t
                    },
                    closeToast() {
                        Z.open = !1
                    }
                }
        },
        774: (e, t, s) => {
            s.r(t), s.d(t, {
                WalletConnectModal: () => n
            });
            var o = s(7171);
            class n {
                constructor(e) {
                    this.openModal = o.jb.open, this.closeModal = o.jb.close, this.subscribeModal = o.jb.subscribe, this.setTheme = o.Ic.setThemeConfig, o.Ic.setThemeConfig(e), o.t0.setConfig(e), this.initUi()
                }
                async initUi() {
                    if (typeof window < "u") {
                        await s.e(459).then(s.bind(s, 3459));
                        const e = document.createElement("wcm-modal");
                        document.body.insertAdjacentElement("beforeend", e), o.zb.setIsUiLoaded(!0)
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=774.279fe7f8.chunk.js.map