! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.feather = t() : e.feather = t()
}("undefined" != typeof self ? self : this, function() {
    return function(i) {
        var n = {};

        function o(e) {
            if (n[e]) return n[e].exports;
            var t = n[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return i[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports
        }
        return o.m = i, o.c = n, o.d = function(e, t, i) {
            o.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, o.r = function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 61)
    }([function(e, t, i) {
        var n = i(20)("wks"),
            o = i(11),
            r = i(1).Symbol,
            l = "function" == typeof r;
        (e.exports = function(e) {
            return n[e] || (n[e] = l && r[e] || (l ? r : o)("Symbol." + e))
        }).store = n
    }, function(e, t) {
        var i = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = i)
    }, function(e, t) {
        var i = e.exports = {
            version: "2.5.6"
        };
        "number" == typeof __e && (__e = i)
    }, function(e, t) {
        var i = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return i.call(e, t)
        }
    }, function(e, t, i) {
        e.exports = !i(27)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t, i) {
        var n = i(13);
        e.exports = function(e) {
            if (!n(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, function(e, t, i) {
        var n = i(5),
            o = i(56),
            r = i(55),
            l = Object.defineProperty;
        t.f = i(4) ? Object.defineProperty : function(e, t, i) {
            if (n(e), t = r(t, !0), n(i), o) try {
                return l(e, t, i)
            } catch (e) {}
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
            return "value" in i && (e[t] = i.value), e
        }
    }, function(e, t, i) {
        var n = i(6),
            o = i(12);
        e.exports = i(4) ? function(e, t, i) {
            return n.f(e, t, o(1, i))
        } : function(e, t, i) {
            return e[t] = i, e
        }
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = l(i(35)),
            o = l(i(33)),
            r = l(i(32));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = Object.keys(o.default).map(function(e) {
            return new n.default(e, o.default[e], r.default[e])
        }).reduce(function(e, t) {
            return e[t.name] = t, e
        }, {})
    }, function(e, t, i) {
        var n = i(20)("keys"),
            o = i(11);
        e.exports = function(e) {
            return n[e] || (n[e] = o(e))
        }
    }, function(e, t) {
        e.exports = {}
    }, function(e, t) {
        var i = 0,
            n = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + n).toString(36))
        }
    }, function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }, function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, function(e, t) {
        var i = Math.ceil,
            n = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? n : i)(e)
        }
    }, function(t, i, e) {
        var n;
        ! function() {
            "use strict";
            var e = function() {
                function l() {}

                function s(e, t) {
                    for (var i = t.length, n = 0; n < i; ++n) o(e, t[n])
                }
                l.prototype = Object.create(null);
                var n = {}.hasOwnProperty,
                    a = /\s+/;

                function o(e, r) {
                    if (r) {
                        var t = typeof r;
                        "string" === t ? function(e, t) {
                            for (var i = r.split(a), n = i.length, o = 0; o < n; ++o) e[i[o]] = !0
                        }(e) : Array.isArray(r) ? s(e, r) : "object" === t ? function(e, t) {
                            for (var i in t) n.call(t, i) && (e[i] = !!t[i])
                        }(e, r) : "number" === t && (e[r] = !0)
                    }
                }
                return function() {
                    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    var n = new l;
                    s(n, t);
                    var o = [];
                    for (var r in n) n[r] && o.push(r);
                    return o.join(" ")
                }
            }();
            void 0 !== t && t.exports ? t.exports = e : void 0 === (n = function() {
                return e
            }.apply(i, [])) || (t.exports = n)
        }()
    }, function(e, t, i) {
        var n = i(14);
        e.exports = function(e) {
            return Object(n(e))
        }
    }, function(e, t, i) {
        var n = i(6).f,
            o = i(3),
            r = i(0)("toStringTag");
        e.exports = function(e, t, i) {
            e && !o(e = i ? e : e.prototype, r) && n(e, r, {
                configurable: !0,
                value: t
            })
        }
    }, function(e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(e, t, i) {
        var n = i(2),
            o = i(1),
            r = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (e.exports = function(e, t) {
            return r[e] || (r[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: n.version,
            mode: i(29) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function(e, t, i) {
        var n = i(15),
            o = Math.min;
        e.exports = function(e) {
            return 0 < e ? o(n(e), 9007199254740991) : 0
        }
    }, function(e, t) {
        var i = {}.toString;
        e.exports = function(e) {
            return i.call(e).slice(8, -1)
        }
    }, function(e, t, i) {
        var n = i(48),
            o = i(14);
        e.exports = function(e) {
            return n(o(e))
        }
    }, function(e, t, i) {
        var r = i(54);
        e.exports = function(n, o, e) {
            if (r(n), void 0 === o) return n;
            switch (e) {
                case 1:
                    return function(e) {
                        return n.call(o, e)
                    };
                case 2:
                    return function(e, t) {
                        return n.call(o, e, t)
                    };
                case 3:
                    return function(e, t, i) {
                        return n.call(o, e, t, i)
                    }
            }
            return function() {
                return n.apply(o, arguments)
            }
        }
    }, function(e, t, i) {
        var r = i(1),
            l = i(7),
            s = i(3),
            a = i(11)("src"),
            n = Function.toString,
            c = ("" + n).split("toString");
        i(2).inspectSource = function(e) {
            return n.call(e)
        }, (e.exports = function(e, t, i, n) {
            var o = "function" == typeof i;
            o && (s(i, "name") || l(i, "name", t)), e[t] !== i && (o && (s(i, a) || l(i, a, e[t] ? "" + e[t] : c.join(String(t)))), e === r ? e[t] = i : n ? e[t] ? e[t] = i : l(e, t, i) : (delete e[t], l(e, t, i)))
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[a] || n.call(this)
        })
    }, function(e, t, i) {
        var n = i(13),
            o = i(1).document,
            r = n(o) && n(o.createElement);
        e.exports = function(e) {
            return r ? o.createElement(e) : {}
        }
    }, function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, function(e, t, i) {
        var f = i(1),
            v = i(2),
            g = i(7),
            m = i(25),
            x = i(24),
            b = function(e, t, i) {
                var n, o, r, l, s = e & b.F,
                    a = e & b.G,
                    c = e & b.S,
                    h = e & b.P,
                    d = e & b.B,
                    p = a ? f : c ? f[t] || (f[t] = {}) : (f[t] || {}).prototype,
                    u = a ? v : v[t] || (v[t] = {}),
                    y = u.prototype || (u.prototype = {});
                for (n in a && (i = t), i) r = ((o = !s && p && void 0 !== p[n]) ? p : i)[n], l = d && o ? x(r, f) : h && "function" == typeof r ? x(Function.call, r) : r, p && m(p, n, r, e & b.U), u[n] != r && g(u, n, l), h && y[n] != r && (y[n] = r)
            };
        f.core = v, b.F = 1, b.G = 2, b.S = 4, b.P = 8, b.B = 16, b.W = 32, b.U = 64, b.R = 128, e.exports = b
    }, function(e, t) {
        e.exports = !1
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            },
            a = n(i(16)),
            c = n(i(8));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            if ("undefined" == typeof document) throw new Error("`feather.replace()` only works in a browser environment.");
            var e = document.querySelectorAll("[data-feather]");
            Array.from(e).forEach(function(e) {
                return function(e) {
                    var t, i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = (t = e, Array.from(t.attributes).reduce(function(e, t) {
                            return e[t.name] = t.value, e
                        }, {})),
                        o = n["data-feather"];
                    delete n["data-feather"];
                    var r = c.default[o].toSvg(s({}, i, n, {
                            class: (0, a.default)(i.class, n.class)
                        })),
                        l = (new DOMParser).parseFromString(r, "image/svg+xml").querySelector("svg");
                    e.parentNode.replaceChild(l, e)
                }(e, t)
            })
        }
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, o = (n = i(8)) && n.__esModule ? n : {
            default: n
        };
        t.default = function(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !e) throw new Error("The required `key` (icon name) parameter is missing.");
            if (!o.default[e]) throw new Error("No icon matching '" + e + "'. See the complete list of icons at https://feathericons.com");
            return o.default[e].toSvg(t)
        }
    }, function(e) {
        e.exports = {
            activity: ["pulse", "health", "action", "motion"],
            airplay: ["stream", "cast", "mirroring"],
            "alert-circle": ["warning"],
            "alert-octagon": ["warning"],
            "alert-triangle": ["warning"],
            "at-sign": ["mention"],
            award: ["achievement", "badge"],
            aperture: ["camera", "photo"],
            bell: ["alarm", "notification"],
            "bell-off": ["alarm", "notification", "silent"],
            bluetooth: ["wireless"],
            "book-open": ["read"],
            book: ["read", "dictionary", "booklet", "magazine"],
            bookmark: ["read", "clip", "marker", "tag"],
            briefcase: ["work", "bag", "baggage", "folder"],
            clipboard: ["copy"],
            clock: ["time", "watch", "alarm"],
            "cloud-drizzle": ["weather", "shower"],
            "cloud-lightning": ["weather", "bolt"],
            "cloud-rain": ["weather"],
            "cloud-snow": ["weather", "blizzard"],
            cloud: ["weather"],
            codepen: ["logo"],
            codesandbox: ["logo"],
            coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"],
            command: ["keyboard", "cmd"],
            compass: ["navigation", "safari", "travel"],
            copy: ["clone", "duplicate"],
            "corner-down-left": ["arrow"],
            "corner-down-right": ["arrow"],
            "corner-left-down": ["arrow"],
            "corner-left-up": ["arrow"],
            "corner-right-down": ["arrow"],
            "corner-right-up": ["arrow"],
            "corner-up-left": ["arrow"],
            "corner-up-right": ["arrow"],
            "credit-card": ["purchase", "payment", "cc"],
            crop: ["photo", "image"],
            crosshair: ["aim", "target"],
            database: ["storage"],
            delete: ["remove"],
            disc: ["album", "cd", "dvd", "music"],
            "dollar-sign": ["currency", "money", "payment"],
            droplet: ["water"],
            edit: ["pencil", "change"],
            "edit-2": ["pencil", "change"],
            "edit-3": ["pencil", "change"],
            eye: ["view", "watch"],
            "eye-off": ["view", "watch"],
            "external-link": ["outbound"],
            facebook: ["logo"],
            "fast-forward": ["music"],
            figma: ["logo", "design", "tool"],
            film: ["movie", "video"],
            "folder-minus": ["directory"],
            "folder-plus": ["directory"],
            folder: ["directory"],
            frown: ["emoji", "face", "bad", "sad", "emotion"],
            gift: ["present", "box", "birthday", "party"],
            "git-branch": ["code", "version control"],
            "git-commit": ["code", "version control"],
            "git-merge": ["code", "version control"],
            "git-pull-request": ["code", "version control"],
            github: ["logo", "version control"],
            gitlab: ["logo", "version control"],
            global: ["world", "browser", "language", "translate"],
            "hard-drive": ["computer", "server"],
            hash: ["hashtag", "number", "pound"],
            headphones: ["music", "audio"],
            heart: ["like", "love"],
            "help-circle": ["question mark"],
            hexagon: ["shape", "node.js", "logo"],
            home: ["house"],
            image: ["picture"],
            inbox: ["email"],
            instagram: ["logo", "camera"],
            key: ["password", "login", "authentication"],
            "life-bouy": ["help", "life ring", "support"],
            linkedin: ["logo"],
            lock: ["security", "password"],
            "log-in": ["sign in", "arrow"],
            "log-out": ["sign out", "arrow"],
            mail: ["email"],
            "map-pin": ["location", "navigation", "travel", "marker"],
            map: ["location", "navigation", "travel"],
            maximize: ["fullscreen"],
            "maximize-2": ["fullscreen", "arrows"],
            meh: ["emoji", "face", "neutral", "emotion"],
            menu: ["bars", "navigation", "hamburger"],
            "message-circle": ["comment", "chat"],
            "message-square": ["comment", "chat"],
            "mic-off": ["record"],
            mic: ["record"],
            minimize: ["exit fullscreen"],
            "minimize-2": ["exit fullscreen", "arrows"],
            monitor: ["tv"],
            moon: ["dark", "night"],
            "more-horizontal": ["ellipsis"],
            "more-vertical": ["ellipsis"],
            "mouse-pointer": ["arrow", "cursor"],
            move: ["arrows"],
            navigation: ["location", "travel"],
            "navigation-2": ["location", "travel"],
            octagon: ["stop"],
            package: ["box"],
            paperclip: ["attachment"],
            pause: ["music", "stop"],
            "pause-circle": ["music", "stop"],
            "pen-tool": ["vector", "drawing"],
            play: ["music", "start"],
            "play-circle": ["music", "start"],
            plus: ["add", "new"],
            "plus-circle": ["add", "new"],
            "plus-square": ["add", "new"],
            pocket: ["logo", "save"],
            power: ["on", "off"],
            radio: ["signal"],
            rewind: ["music"],
            rss: ["feed", "subscribe"],
            save: ["floppy disk"],
            search: ["find", "magnifier", "magnifying glass"],
            send: ["message", "mail", "paper airplane"],
            settings: ["cog", "edit", "gear", "preferences"],
            shield: ["security"],
            "shield-off": ["security"],
            "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
            "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
            shuffle: ["music"],
            "skip-back": ["music"],
            "skip-forward": ["music"],
            slash: ["ban", "no"],
            sliders: ["settings", "controls"],
            smile: ["emoji", "face", "happy", "good", "emotion"],
            speaker: ["music"],
            star: ["bookmark", "favorite", "like"],
            sun: ["brightness", "weather", "light"],
            sunrise: ["weather"],
            sunset: ["weather"],
            tag: ["label"],
            target: ["bullseye"],
            terminal: ["code", "command line"],
            "thumbs-down": ["dislike", "bad"],
            "thumbs-up": ["like", "good"],
            "toggle-left": ["on", "off", "switch"],
            "toggle-right": ["on", "off", "switch"],
            trash: ["garbage", "delete", "remove"],
            "trash-2": ["garbage", "delete", "remove"],
            triangle: ["delta"],
            truck: ["delivery", "van", "shipping"],
            twitter: ["logo"],
            umbrella: ["rain", "weather"],
            "video-off": ["camera", "movie", "film"],
            video: ["camera", "movie", "film"],
            voicemail: ["phone"],
            volume: ["music", "sound", "mute"],
            "volume-1": ["music", "sound"],
            "volume-2": ["music", "sound"],
            "volume-x": ["music", "sound", "mute"],
            watch: ["clock", "time"],
            wind: ["weather", "air"],
            "x-circle": ["cancel", "close", "delete", "remove", "times"],
            "x-octagon": ["delete", "stop", "alert", "warning", "times"],
            "x-square": ["cancel", "close", "delete", "remove", "times"],
            x: ["cancel", "close", "delete", "remove", "times"],
            youtube: ["logo", "video", "play"],
            "zap-off": ["flash", "camera", "lightning"],
            zap: ["flash", "camera", "lightning"]
        }
    }, function(e) {
        e.exports = {
            activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
            airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
            "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
            "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
            "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line>',
            "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
            "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
            "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
            "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
            anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
            aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
            archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
            "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
            "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
            "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
            "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
            "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
            "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
            "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
            "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
            "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
            "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
            "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
            "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
            "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
            award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
            "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
            "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
            "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
            battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
            "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
            bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
            bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
            "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
            book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
            bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
            box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
            briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
            calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
            "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
            camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
            cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line>',
            "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
            "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
            check: '<polyline points="20 6 9 17 4 12"></polyline>',
            "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
            "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
            "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
            "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
            "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
            "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
            "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
            "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
            chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
            circle: '<circle cx="12" cy="12" r="10"></circle>',
            clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
            clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
            "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
            "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
            "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
            "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="8" y1="20" x2="8" y2="20"></line><line x1="12" y1="18" x2="12" y2="18"></line><line x1="12" y1="22" x2="12" y2="22"></line><line x1="16" y1="16" x2="16" y2="16"></line><line x1="16" y1="20" x2="16" y2="20"></line>',
            cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
            code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
            codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
            codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
            coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
            columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
            command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
            compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
            copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
            "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
            "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
            "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
            "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
            "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
            "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
            "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
            "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
            cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
            "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
            crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
            crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
            database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
            delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
            disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
            "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
            "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
            download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
            droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
            "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
            "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
            edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
            "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
            "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
            facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
            "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
            feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
            figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
            "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
            "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
            "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
            file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
            film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
            filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
            flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
            "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
            "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
            folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
            frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
            gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
            "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
            "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
            "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
            "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
            github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
            gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
            globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
            grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
            "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6" y2="16"></line><line x1="10" y1="16" x2="10" y2="16"></line>',
            hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
            headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
            heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
            "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line>',
            hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
            home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
            image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
            inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
            info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
            instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>',
            italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
            key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
            layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
            layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
            "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
            "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
            link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
            linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
            list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>',
            loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
            lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
            "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
            "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
            mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
            "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
            map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
            "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
            maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
            meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
            menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
            "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
            "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
            "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
            mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
            "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
            minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
            "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
            "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
            minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
            monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
            moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
            "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
            "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
            "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
            move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
            music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
            "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
            navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
            octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
            package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
            paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
            "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
            pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
            "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
            percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
            "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
            "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
            "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
            "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
            play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
            "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
            "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
            plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
            pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
            power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
            printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
            radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
            "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
            "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
            repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
            rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
            "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
            "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
            rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
            save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
            scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
            search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
            send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
            server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line>',
            settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
            "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
            share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
            "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
            "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
            "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
            shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
            sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
            "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
            "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
            slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
            slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
            sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
            smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
            smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
            speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12" y2="6"></line>',
            square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
            star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
            "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
            sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
            sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
            sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
            tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
            tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line>',
            target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
            terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
            thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
            "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
            "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
            "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
            "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
            "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
            trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
            trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
            "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
            "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
            triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
            truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
            tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
            twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
            type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
            umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
            underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
            unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
            "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
            upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
            "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
            "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
            "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
            "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
            user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
            users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
            "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
            video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
            voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
            "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
            "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
            "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
            volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
            watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
            "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
            wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
            wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
            "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
            "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
            "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
            x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
            youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
            "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
            zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
            "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
            "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
        }
    }, function(e) {
        e.exports = {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": 2,
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        }
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            },
            r = function() {
                function n(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(e, t, i) {
                    return t && n(e.prototype, t), i && n(e, i), e
                }
            }(),
            l = n(i(16)),
            s = n(i(34));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var a = function() {
            function n(e, t) {
                var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [];
                ! function(e, t) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this), this.name = e, this.contents = t, this.tags = i, this.attrs = o({}, s.default, {
                    class: "feather feather-" + e
                })
            }
            return r(n, [{
                key: "toSvg",
                value: function() {
                    var t, e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    return "<svg " + (t = o({}, this.attrs, e, {
                        class: (0, l.default)(this.attrs.class, e.class)
                    }), Object.keys(t).map(function(e) {
                        return e + '="' + t[e] + '"'
                    }).join(" ")) + ">" + this.contents + "</svg>"
                }
            }, {
                key: "toString",
                value: function() {
                    return this.contents
                }
            }]), n
        }();
        t.default = a
    }, function(e, t, i) {
        "use strict";
        var n = l(i(8)),
            o = l(i(31)),
            r = l(i(30));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = {
            icons: n.default,
            toSvg: o.default,
            replace: r.default
        }
    }, function(e, t, i) {
        var r = i(0)("iterator"),
            l = !1;
        try {
            var n = [7][r]();
            n.return = function() {
                l = !0
            }, Array.from(n, function() {
                throw 2
            })
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !l) return !1;
            var i = !1;
            try {
                var n = [7],
                    o = n[r]();
                o.next = function() {
                    return {
                        done: i = !0
                    }
                }, n[r] = function() {
                    return o
                }, e(n)
            } catch (e) {}
            return i
        }
    }, function(e, t, i) {
        var o = i(22),
            r = i(0)("toStringTag"),
            l = "Arguments" == o(function() {
                return arguments
            }());
        e.exports = function(e) {
            var t, i, n;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(i = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), r)) ? i : l ? o(t) : "Object" == (n = o(t)) && "function" == typeof t.callee ? "Arguments" : n
        }
    }, function(e, t, i) {
        var n = i(38),
            o = i(0)("iterator"),
            r = i(10);
        e.exports = i(2).getIteratorMethod = function(e) {
            if (null != e) return e[o] || e["@@iterator"] || r[n(e)]
        }
    }, function(e, t, i) {
        "use strict";
        var n = i(6),
            o = i(12);
        e.exports = function(e, t, i) {
            t in e ? n.f(e, t, o(0, i)) : e[t] = i
        }
    }, function(e, t, i) {
        var n = i(10),
            o = i(0)("iterator"),
            r = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (n.Array === e || r[o] === e)
        }
    }, function(e, t, i) {
        var r = i(5);
        e.exports = function(e, t, i, n) {
            try {
                return n ? t(r(i)[0], i[1]) : t(i)
            } catch (t) {
                var o = e.return;
                throw void 0 !== o && r(o.call(e)), t
            }
        }
    }, function(e, t, i) {
        "use strict";
        var p = i(24),
            n = i(28),
            u = i(17),
            y = i(42),
            f = i(41),
            v = i(21),
            g = i(40),
            m = i(39);
        n(n.S + n.F * !i(37)(function(e) {
            Array.from(e)
        }), "Array", {
            from: function(e) {
                var t, i, n, o, r = u(e),
                    l = "function" == typeof this ? this : Array,
                    s = arguments.length,
                    a = 1 < s ? arguments[1] : void 0,
                    c = void 0 !== a,
                    h = 0,
                    d = m(r);
                if (c && (a = p(a, 2 < s ? arguments[2] : void 0, 2)), null == d || l == Array && f(d))
                    for (i = new l(t = v(r.length)); h < t; h++) g(i, h, c ? a(r[h], h) : r[h]);
                else
                    for (o = d.call(r), i = new l; !(n = o.next()).done; h++) g(i, h, c ? y(o, a, [n.value, h], !0) : n.value);
                return i.length = h, i
            }
        })
    }, function(e, t, i) {
        var n = i(3),
            o = i(17),
            r = i(9)("IE_PROTO"),
            l = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = o(e), n(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? l : null
        }
    }, function(e, t, i) {
        var n = i(1).document;
        e.exports = n && n.documentElement
    }, function(e, t, i) {
        var n = i(15),
            o = Math.max,
            r = Math.min;
        e.exports = function(e, t) {
            return (e = n(e)) < 0 ? o(e + t, 0) : r(e, t)
        }
    }, function(e, t, i) {
        var a = i(23),
            c = i(21),
            h = i(46);
        e.exports = function(s) {
            return function(e, t, i) {
                var n, o = a(e),
                    r = c(o.length),
                    l = h(i, r);
                if (s && t != t) {
                    for (; l < r;)
                        if ((n = o[l++]) != n) return !0
                } else
                    for (; l < r; l++)
                        if ((s || l in o) && o[l] === t) return s || l || 0;
                return !s && -1
            }
        }
    }, function(e, t, i) {
        var n = i(22);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == n(e) ? e.split("") : Object(e)
        }
    }, function(e, t, i) {
        var l = i(3),
            s = i(23),
            a = i(47)(!1),
            c = i(9)("IE_PROTO");
        e.exports = function(e, t) {
            var i, n = s(e),
                o = 0,
                r = [];
            for (i in n) i != c && l(n, i) && r.push(i);
            for (; t.length > o;) l(n, i = t[o++]) && (~a(r, i) || r.push(i));
            return r
        }
    }, function(e, t, i) {
        var n = i(49),
            o = i(19);
        e.exports = Object.keys || function(e) {
            return n(e, o)
        }
    }, function(e, t, i) {
        var l = i(6),
            s = i(5),
            a = i(50);
        e.exports = i(4) ? Object.defineProperties : function(e, t) {
            s(e);
            for (var i, n = a(t), o = n.length, r = 0; r < o;) l.f(e, i = n[r++], t[i]);
            return e
        }
    }, function(e, t, n) {
        var o = n(5),
            r = n(51),
            l = n(19),
            s = n(9)("IE_PROTO"),
            a = function() {},
            c = function() {
                var e, t = n(26)("iframe"),
                    i = l.length;
                for (t.style.display = "none", n(45).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; i--;) delete c.prototype[l[i]];
                return c()
            };
        e.exports = Object.create || function(e, t) {
            var i;
            return null !== e ? (a.prototype = o(e), i = new a, a.prototype = null, i[s] = e) : i = c(), void 0 === t ? i : r(i, t)
        }
    }, function(e, t, i) {
        "use strict";
        var n = i(52),
            o = i(12),
            r = i(18),
            l = {};
        i(7)(l, i(0)("iterator"), function() {
            return this
        }), e.exports = function(e, t, i) {
            e.prototype = n(l, {
                next: o(1, i)
            }), r(e, t + " Iterator")
        }
    }, function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, function(e, t, i) {
        var o = i(13);
        e.exports = function(e, t) {
            if (!o(e)) return e;
            var i, n;
            if (t && "function" == typeof(i = e.toString) && !o(n = i.call(e))) return n;
            if ("function" == typeof(i = e.valueOf) && !o(n = i.call(e))) return n;
            if (!t && "function" == typeof(i = e.toString) && !o(n = i.call(e))) return n;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(e, t, i) {
        e.exports = !i(4) && !i(27)(function() {
            return 7 != Object.defineProperty(i(26)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(e, t, i) {
        "use strict";
        var x = i(29),
            b = i(28),
            w = i(25),
            M = i(7),
            S = i(10),
            E = i(53),
            k = i(18),
            z = i(44),
            A = i(0)("iterator"),
            C = !([].keys && "next" in [].keys()),
            D = function() {
                return this
            };
        e.exports = function(e, t, i, n, o, r, l) {
            E(i, t, n);
            var s, a, c, h = function(e) {
                    if (!C && e in y) return y[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function() {
                                return new i(this, e)
                            }
                    }
                    return function() {
                        return new i(this, e)
                    }
                },
                d = t + " Iterator",
                p = "values" == o,
                u = !1,
                y = e.prototype,
                f = y[A] || y["@@iterator"] || o && y[o],
                v = f || h(o),
                g = o ? p ? h("entries") : v : void 0,
                m = "Array" == t && y.entries || f;
            if (m && (c = z(m.call(new e))) !== Object.prototype && c.next && (k(c, d, !0), x || "function" == typeof c[A] || M(c, A, D)), p && f && "values" !== f.name && (u = !0, v = function() {
                    return f.call(this)
                }), x && !l || !C && !u && y[A] || M(y, A, v), S[t] = v, S[d] = D, o)
                if (s = {
                        values: p ? v : h("values"),
                        keys: r ? v : h("keys"),
                        entries: g
                    }, l)
                    for (a in s) a in y || w(y, a, s[a]);
                else b(b.P + b.F * (C || u), t, s);
            return s
        }
    }, function(e, t, i) {
        var a = i(15),
            c = i(14);
        e.exports = function(s) {
            return function(e, t) {
                var i, n, o = String(c(e)),
                    r = a(t),
                    l = o.length;
                return r < 0 || l <= r ? s ? "" : void 0 : (i = o.charCodeAt(r)) < 55296 || 56319 < i || r + 1 === l || (n = o.charCodeAt(r + 1)) < 56320 || 57343 < n ? s ? o.charAt(r) : i : s ? o.slice(r, r + 2) : n - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function(e, t, i) {
        "use strict";
        var n = i(58)(!0);
        i(57)(String, "String", function(e) {
            this._t = String(e), this._i = 0
        }, function() {
            var e, t = this._t,
                i = this._i;
            return i >= t.length ? {
                value: void 0,
                done: !0
            } : (e = n(t, i), this._i += e.length, {
                value: e,
                done: !1
            })
        })
    }, function(e, t, i) {
        i(59), i(43), e.exports = i(2).Array.from
    }, function(e, t, i) {
        i(60), e.exports = i(36)
    }])
}),
function(t, i) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("jquery")) : t.jQueryBridget = i(t, t.jQuery)
}(window, function(e, t) {
    "use strict";
    var d = Array.prototype.slice,
        i = e.console,
        p = void 0 === i ? function() {} : function(e) {
            i.error(e)
        };

    function n(c, o, h) {
        (h = h || t || e.jQuery) && (o.prototype.option || (o.prototype.option = function(e) {
            h.isPlainObject(e) && (this.options = h.extend(!0, this.options, e))
        }), h.fn[c] = function(e) {
            if ("string" != typeof e) return n = e, this.each(function(e, t) {
                var i = h.data(t, c);
                i ? (i.option(n), i._init()) : (i = new o(t, n), h.data(t, c, i))
            }), this;
            var t, r, l, s, a, n, i = d.call(arguments, 1);
            return l = i, a = "$()." + c + '("' + (r = e) + '")', (t = this).each(function(e, t) {
                var i = h.data(t, c);
                if (i) {
                    var n = i[r];
                    if (n && "_" != r.charAt(0)) {
                        var o = n.apply(i, l);
                        s = void 0 === s ? o : s
                    } else p(a + " is not a valid method")
                } else p(c + " not initialized. Cannot call methods, i.e. " + a)
            }), void 0 !== s ? s : t
        }, r(h))
    }

    function r(e) {
        !e || e && e.bridget || (e.bridget = n)
    }
    return r(t || e.jQuery), n
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[e] = i[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], o = 0; o < i.length; o++) {
                var r = i[o];
                n && n[r] && (this.off(e, r), delete n[r]), r.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function() {
    "use strict";

    function m(e) {
        var t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t
    }
    var i = "undefined" == typeof console ? function() {} : function(e) {
            console.error(e)
        },
        x = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        b = x.length;

    function w(e) {
        var t = getComputedStyle(e);
        return t || i("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
    }
    var M, S = !1;
    return function n(e) {
        if (function() {
                if (!S) {
                    S = !0;
                    var e = document.createElement("div");
                    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                    var t = document.body || document.documentElement;
                    t.appendChild(e);
                    var i = w(e);
                    M = 200 == Math.round(m(i.width)), n.isBoxSizeOuter = M, t.removeChild(e)
                }
            }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var t = w(e);
            if ("none" == t.display) return function() {
                for (var e = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, t = 0; t < b; t++) e[x[t]] = 0;
                return e
            }();
            var i = {};
            i.width = e.offsetWidth, i.height = e.offsetHeight;
            for (var o = i.isBorderBox = "border-box" == t.boxSizing, r = 0; r < b; r++) {
                var l = x[r],
                    s = t[l],
                    a = parseFloat(s);
                i[l] = isNaN(a) ? 0 : a
            }
            var c = i.paddingLeft + i.paddingRight,
                h = i.paddingTop + i.paddingBottom,
                d = i.marginLeft + i.marginRight,
                p = i.marginTop + i.marginBottom,
                u = i.borderLeftWidth + i.borderRightWidth,
                y = i.borderTopWidth + i.borderBottomWidth,
                f = o && M,
                v = m(t.width);
            !1 !== v && (i.width = v + (f ? 0 : c + u));
            var g = m(t.height);
            return !1 !== g && (i.height = g + (f ? 0 : h + y)), i.innerWidth = i.width - (c + u), i.innerHeight = i.height - (h + y), i.outerWidth = i.width + d, i.outerHeight = i.height + p, i
        }
    }
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function() {
    "use strict";
    var i = function() {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
            var n = t[i] + "MatchesSelector";
            if (e[n]) return n
        }
    }();
    return function(e, t) {
        return e[i](t)
    }
}),
function(t, i) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("desandro-matches-selector")) : t.fizzyUIUtils = i(t, t.matchesSelector)
}(window, function(c, r) {
    var h = {
            extend: function(e, t) {
                for (var i in t) e[i] = t[i];
                return e
            },
            modulo: function(e, t) {
                return (e % t + t) % t
            }
        },
        t = Array.prototype.slice;
    h.makeArray = function(e) {
        return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? t.call(e) : [e]
    }, h.removeFrom = function(e, t) {
        var i = e.indexOf(t); - 1 != i && e.splice(i, 1)
    }, h.getParent = function(e, t) {
        for (; e.parentNode && e != document.body;)
            if (e = e.parentNode, r(e, t)) return e
    }, h.getQueryElement = function(e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }, h.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, h.filterFindElements = function(e, n) {
        e = h.makeArray(e);
        var o = [];
        return e.forEach(function(e) {
            if (e instanceof HTMLElement)
                if (n) {
                    r(e, n) && o.push(e);
                    for (var t = e.querySelectorAll(n), i = 0; i < t.length; i++) o.push(t[i])
                } else o.push(e)
        }), o
    }, h.debounceMethod = function(e, t, n) {
        n = n || 100;
        var o = e.prototype[t],
            r = t + "Timeout";
        e.prototype[t] = function() {
            var e = this[r];
            clearTimeout(e);
            var t = arguments,
                i = this;
            this[r] = setTimeout(function() {
                o.apply(i, t), delete i[r]
            }, n)
        }
    }, h.docReady = function(e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, h.toDashed = function(e) {
        return e.replace(/(.)([A-Z])/g, function(e, t, i) {
            return t + "-" + i
        }).toLowerCase()
    };
    var d = c.console;
    return h.htmlInit = function(s, a) {
        h.docReady(function() {
            var e = h.toDashed(a),
                o = "data-" + e,
                t = document.querySelectorAll("[" + o + "]"),
                i = document.querySelectorAll(".js-" + e),
                n = h.makeArray(t).concat(h.makeArray(i)),
                r = o + "-options",
                l = c.jQuery;
            n.forEach(function(e) {
                var t, i = e.getAttribute(o) || e.getAttribute(r);
                try {
                    t = i && JSON.parse(i)
                } catch (t) {
                    return void(d && d.error("Error parsing " + o + " on " + e.className + ": " + t))
                }
                var n = new s(e, t);
                l && l.data(e, a, n)
            })
        })
    }, h
}),
function(t, i) {
    "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = i(t, t.getSize))
}(window, function(e, t) {
    function i(e, t) {
        this.element = e, this.parent = t, this.create()
    }
    var n = i.prototype;
    return n.create = function() {
        this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
    }, n.destroy = function() {
        this.unselect(), this.element.style.position = "";
        var e = this.parent.originSide;
        this.element.style[e] = ""
    }, n.getSize = function() {
        this.size = t(this.element)
    }, n.setPosition = function(e) {
        this.x = e, this.updateTarget(), this.renderPosition(e)
    }, n.updateTarget = n.setDefaultTarget = function() {
        var e = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
        this.target = this.x + this.size[e] + this.size.width * this.parent.cellAlign
    }, n.renderPosition = function(e) {
        var t = this.parent.originSide;
        this.element.style[t] = this.parent.getPositionValue(e)
    }, n.select = function() {
        this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
    }, n.unselect = function() {
        this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
    }, n.wrapShift = function(e) {
        this.shift = e, this.renderPosition(this.x + this.parent.slideableWidth * e)
    }, n.remove = function() {
        this.element.parentNode.removeChild(this.element)
    }, i
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity/js/slide", t) : "object" == typeof module && module.exports ? module.exports = t() : (e.Flickity = e.Flickity || {}, e.Flickity.Slide = t())
}(window, function() {
    "use strict";

    function e(e) {
        this.parent = e, this.isOriginLeft = "left" == e.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
    }
    var t = e.prototype;
    return t.addCell = function(e) {
        if (this.cells.push(e), this.outerWidth += e.size.outerWidth, this.height = Math.max(e.size.outerHeight, this.height), 1 == this.cells.length) {
            this.x = e.x;
            var t = this.isOriginLeft ? "marginLeft" : "marginRight";
            this.firstMargin = e.size[t]
        }
    }, t.updateTarget = function() {
        var e = this.isOriginLeft ? "marginRight" : "marginLeft",
            t = this.getLastCell(),
            i = t ? t.size[e] : 0,
            n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign
    }, t.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }, t.select = function() {
        this.cells.forEach(function(e) {
            e.select()
        })
    }, t.unselect = function() {
        this.cells.forEach(function(e) {
            e.unselect()
        })
    }, t.getCellElements = function() {
        return this.cells.map(function(e) {
            return e.element
        })
    }, e
}),
function(t, i) {
    "function" == typeof define && define.amd ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function(e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = i(t, t.fizzyUIUtils))
}(window, function(e, t) {
    return {
        startAnimation: function() {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
        },
        animate: function() {
            this.applyDragForce(), this.applySelectedAttraction();
            var e = this.x;
            if (this.integratePhysics(), this.positionSlider(), this.settle(e), this.isAnimating) {
                var t = this;
                requestAnimationFrame(function() {
                    t.animate()
                })
            }
        },
        positionSlider: function() {
            var e = this.x;
            this.options.wrapAround && 1 < this.cells.length && (e = t.modulo(e, this.slideableWidth), e -= this.slideableWidth, this.shiftWrapCells(e)), this.setTranslateX(e, this.isAnimating), this.dispatchScrollEvent()
        },
        setTranslateX: function(e, t) {
            e += this.cursorPosition, e = this.options.rightToLeft ? -e : e;
            var i = this.getPositionValue(e);
            this.slider.style.transform = t ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
        },
        dispatchScrollEvent: function() {
            var e = this.slides[0];
            if (e) {
                var t = -this.x - e.target,
                    i = t / this.slidesWidth;
                this.dispatchEvent("scroll", null, [i, t])
            }
        },
        positionSliderAtSelected: function() {
            this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
        },
        getPositionValue: function(e) {
            return this.options.percentPosition ? .01 * Math.round(e / this.size.innerWidth * 1e4) + "%" : Math.round(e) + "px"
        },
        settle: function(e) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * e) || this.restingFrames++, 2 < this.restingFrames && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
        },
        shiftWrapCells: function(e) {
            var t = this.cursorPosition + e;
            this._shiftCells(this.beforeShiftCells, t, -1);
            var i = this.size.innerWidth - (e + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, i, 1)
        },
        _shiftCells: function(e, t, i) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n],
                    r = 0 < t ? i : 0;
                o.wrapShift(r), t -= o.size.outerWidth
            }
        },
        _unshiftCells: function(e) {
            if (e && e.length)
                for (var t = 0; t < e.length; t++) e[t].wrapShift(0)
        },
        integratePhysics: function() {
            this.x += this.velocity, this.velocity *= this.getFrictionFactor()
        },
        applyForce: function(e) {
            this.velocity += e
        },
        getFrictionFactor: function() {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        },
        getRestingPosition: function() {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        },
        applyDragForce: function() {
            if (this.isDraggable && this.isPointerDown) {
                var e = this.dragX - this.x - this.velocity;
                this.applyForce(e)
            }
        },
        applySelectedAttraction: function() {
            if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                var e = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                this.applyForce(e)
            }
        }
    }
}),
function(l, s) {
    if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function(e, t, i, n, o, r) {
        return s(l, e, t, i, n, o, r)
    });
    else if ("object" == typeof module && module.exports) module.exports = s(l, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
    else {
        var e = l.Flickity;
        l.Flickity = s(l, l.EvEmitter, l.getSize, l.fizzyUIUtils, e.Cell, e.Slide, e.animatePrototype)
    }
}(window, function(n, e, t, s, i, l, o) {
    var a = n.jQuery,
        r = n.getComputedStyle,
        c = n.console;

    function h(e, t) {
        for (e = s.makeArray(e); e.length;) t.appendChild(e.shift())
    }
    var d = 0,
        p = {};

    function u(e, t) {
        var i = s.getQueryElement(e);
        if (i) {
            if (this.element = i, this.element.flickityGUID) {
                var n = p[this.element.flickityGUID];
                return n.option(t), n
            }
            a && (this.$element = a(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(t), this._create()
        } else c && c.error("Bad element for Flickity: " + (i || e))
    }
    u.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: .075,
        friction: .28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: .025,
        setGallerySize: !0
    }, u.createMethods = [];
    var y = u.prototype;
    s.extend(y, e.prototype), y._create = function() {
        var e = this.guid = ++d;
        for (var t in this.element.flickityGUID = e, (p[e] = this).selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && n.addEventListener("resize", this), this.options.on) {
            var i = this.options.on[t];
            this.on(t, i)
        }
        u.createMethods.forEach(function(e) {
            this[e]()
        }, this), this.options.watchCSS ? this.watchCSS() : this.activate()
    }, y.option = function(e) {
        s.extend(this.options, e)
    }, y.activate = function() {
        this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), h(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
    }, y._createSlider = function() {
        var e = document.createElement("div");
        e.className = "flickity-slider", e.style[this.originSide] = 0, this.slider = e
    }, y._filterFindCellElements = function(e) {
        return s.filterFindElements(e, this.options.cellSelector)
    }, y.reloadCells = function() {
        this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
    }, y._makeCells = function(e) {
        return this._filterFindCellElements(e).map(function(e) {
            return new i(e, this)
        }, this)
    }, y.getLastCell = function() {
        return this.cells[this.cells.length - 1]
    }, y.getLastSlide = function() {
        return this.slides[this.slides.length - 1]
    }, y.positionCells = function() {
        this._sizeCells(this.cells), this._positionCells(0)
    }, y._positionCells = function(e) {
        e = e || 0, this.maxCellHeight = e && this.maxCellHeight || 0;
        var t = 0;
        if (0 < e) {
            var i = this.cells[e - 1];
            t = i.x + i.size.outerWidth
        }
        for (var n = this.cells.length, o = e; o < n; o++) {
            var r = this.cells[o];
            r.setPosition(t), t += r.size.outerWidth, this.maxCellHeight = Math.max(r.size.outerHeight, this.maxCellHeight)
        }
        this.slideableWidth = t, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
    }, y._sizeCells = function(e) {
        e.forEach(function(e) {
            e.getSize()
        })
    }, y.updateSlides = function() {
        if (this.slides = [], this.cells.length) {
            var n = new l(this);
            this.slides.push(n);
            var o = "left" == this.originSide ? "marginRight" : "marginLeft",
                r = this._getCanCellFit();
            this.cells.forEach(function(e, t) {
                if (n.cells.length) {
                    var i = n.outerWidth - n.firstMargin + (e.size.outerWidth - e.size[o]);
                    r.call(this, t, i) || (n.updateTarget(), n = new l(this), this.slides.push(n)), n.addCell(e)
                } else n.addCell(e)
            }, this), n.updateTarget(), this.updateSelectedSlide()
        }
    }, y._getCanCellFit = function() {
        var e = this.options.groupCells;
        if (!e) return function() {
            return !1
        };
        if ("number" == typeof e) {
            var t = parseInt(e, 10);
            return function(e) {
                return e % t != 0
            }
        }
        var i = "string" == typeof e && e.match(/^(\d+)%$/),
            n = i ? parseInt(i[1], 10) / 100 : 1;
        return function(e, t) {
            return t <= (this.size.innerWidth + 1) * n
        }
    }, y._init = y.reposition = function() {
        this.positionCells(), this.positionSliderAtSelected()
    }, y.getSize = function() {
        this.size = t(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
    };
    var f = {
        center: {
            left: .5,
            right: .5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    return y.setCellAlign = function() {
        var e = f[this.options.cellAlign];
        this.cellAlign = e ? e[this.originSide] : this.options.cellAlign
    }, y.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var e = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = e + "px"
        }
    }, y._getWrapShiftCells = function() {
        if (this.options.wrapAround) {
            this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
            var e = this.cursorPosition,
                t = this.cells.length - 1;
            this.beforeShiftCells = this._getGapCells(e, t, -1), e = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(e, 0, 1)
        }
    }, y._getGapCells = function(e, t, i) {
        for (var n = []; 0 < e;) {
            var o = this.cells[t];
            if (!o) break;
            n.push(o), t += i, e -= o.size.outerWidth
        }
        return n
    }, y._containSlides = function() {
        if (this.options.contain && !this.options.wrapAround && this.cells.length) {
            var e = this.options.rightToLeft,
                t = e ? "marginRight" : "marginLeft",
                i = e ? "marginLeft" : "marginRight",
                n = this.slideableWidth - this.getLastCell().size[i],
                o = n < this.size.innerWidth,
                r = this.cursorPosition + this.cells[0].size[t],
                l = n - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach(function(e) {
                e.target = o ? n * this.cellAlign : (e.target = Math.max(e.target, r), Math.min(e.target, l))
            }, this)
        }
    }, y.dispatchEvent = function(e, t, i) {
        var n = t ? [t].concat(i) : i;
        if (this.emitEvent(e, n), a && this.$element) {
            var o = e += this.options.namespaceJQueryEvents ? ".flickity" : "";
            if (t) {
                var r = a.Event(t);
                r.type = e, o = r
            }
            this.$element.trigger(o, i)
        }
    }, y.select = function(e, t, i) {
        if (this.isActive && (e = parseInt(e, 10), this._wrapSelect(e), (this.options.wrapAround || t) && (e = s.modulo(e, this.slides.length)), this.slides[e])) {
            var n = this.selectedIndex;
            this.selectedIndex = e, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [e]), e != n && this.dispatchEvent("change", null, [e]), this.dispatchEvent("cellSelect")
        }
    }, y._wrapSelect = function(e) {
        var t = this.slides.length;
        if (!(this.options.wrapAround && 1 < t)) return e;
        var i = s.modulo(e, t),
            n = Math.abs(i - this.selectedIndex),
            o = Math.abs(i + t - this.selectedIndex),
            r = Math.abs(i - t - this.selectedIndex);
        !this.isDragSelect && o < n ? e += t : !this.isDragSelect && r < n && (e -= t), e < 0 ? this.x -= this.slideableWidth : t <= e && (this.x += this.slideableWidth)
    }, y.previous = function(e, t) {
        this.select(this.selectedIndex - 1, e, t)
    }, y.next = function(e, t) {
        this.select(this.selectedIndex + 1, e, t)
    }, y.updateSelectedSlide = function() {
        var e = this.slides[this.selectedIndex];
        e && (this.unselectSelectedSlide(), (this.selectedSlide = e).select(), this.selectedCells = e.cells, this.selectedElements = e.getCellElements(), this.selectedCell = e.cells[0], this.selectedElement = this.selectedElements[0])
    }, y.unselectSelectedSlide = function() {
        this.selectedSlide && this.selectedSlide.unselect()
    }, y.selectInitialIndex = function() {
        var e = this.options.initialIndex;
        if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
        else {
            if (e && "string" == typeof e && this.queryCell(e)) return void this.selectCell(e, !1, !0);
            var t = 0;
            e && this.slides[e] && (t = e), this.select(t, !1, !0)
        }
    }, y.selectCell = function(e, t, i) {
        var n = this.queryCell(e);
        if (n) {
            var o = this.getCellSlideIndex(n);
            this.select(o, t, i)
        }
    }, y.getCellSlideIndex = function(e) {
        for (var t = 0; t < this.slides.length; t++)
            if (-1 != this.slides[t].cells.indexOf(e)) return t
    }, y.getCell = function(e) {
        for (var t = 0; t < this.cells.length; t++) {
            var i = this.cells[t];
            if (i.element == e) return i
        }
    }, y.getCells = function(e) {
        e = s.makeArray(e);
        var i = [];
        return e.forEach(function(e) {
            var t = this.getCell(e);
            t && i.push(t)
        }, this), i
    }, y.getCellElements = function() {
        return this.cells.map(function(e) {
            return e.element
        })
    }, y.getParentCell = function(e) {
        return this.getCell(e) || (e = s.getParent(e, ".flickity-slider > *"), this.getCell(e))
    }, y.getAdjacentCellElements = function(e, t) {
        if (!e) return this.selectedSlide.getCellElements();
        t = void 0 === t ? this.selectedIndex : t;
        var i = this.slides.length;
        if (i <= 1 + 2 * e) return this.getCellElements();
        for (var n = [], o = t - e; o <= t + e; o++) {
            var r = this.options.wrapAround ? s.modulo(o, i) : o,
                l = this.slides[r];
            l && (n = n.concat(l.getCellElements()))
        }
        return n
    }, y.queryCell = function(e) {
        if ("number" == typeof e) return this.cells[e];
        if ("string" == typeof e) {
            if (e.match(/^[#\.]?[\d\/]/)) return;
            e = this.element.querySelector(e)
        }
        return this.getCell(e)
    }, y.uiChange = function() {
        this.emitEvent("uiChange")
    }, y.childUIPointerDown = function(e) {
        "touchstart" != e.type && e.preventDefault(), this.focus()
    }, y.onresize = function() {
        this.watchCSS(), this.resize()
    }, s.debounceMethod(u, "onresize", 150), y.resize = function() {
        if (this.isActive) {
            this.getSize(), this.options.wrapAround && (this.x = s.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
            var e = this.selectedElements && this.selectedElements[0];
            this.selectCell(e, !1, !0)
        }
    }, y.watchCSS = function() {
        this.options.watchCSS && (-1 != r(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
    }, y.onkeydown = function(e) {
        var t = document.activeElement && document.activeElement != this.element;
        if (this.options.accessibility && !t) {
            var i = u.keyboardHandlers[e.keyCode];
            i && i.call(this)
        }
    }, u.keyboardHandlers = {
        37: function() {
            var e = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(), this[e]()
        },
        39: function() {
            var e = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(), this[e]()
        }
    }, y.focus = function() {
        var e = n.pageYOffset;
        this.element.focus({
            preventScroll: !0
        }), n.pageYOffset != e && n.scrollTo(n.pageXOffset, e)
    }, y.deactivate = function() {
        this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach(function(e) {
            e.destroy()
        }), this.element.removeChild(this.viewport), h(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
    }, y.destroy = function() {
        this.deactivate(), n.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), a && this.$element && a.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete p[this.guid]
    }, s.extend(y, o), u.data = function(e) {
        var t = (e = s.getQueryElement(e)) && e.flickityGUID;
        return t && p[t]
    }, s.htmlInit(u, "flickity"), a && a.bridget && a.bridget("flickity", u), u.setJQuery = function(e) {
        a = e
    }, u.Cell = i, u.Slide = l, u
}),
function(t, i) {
    "function" == typeof define && define.amd ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function(e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("ev-emitter")) : t.Unipointer = i(t, t.EvEmitter)
}(window, function(o, e) {
    function t() {}
    var i = t.prototype = Object.create(e.prototype);
    i.bindStartEvent = function(e) {
        this._bindStartEvent(e, !0)
    }, i.unbindStartEvent = function(e) {
        this._bindStartEvent(e, !1)
    }, i._bindStartEvent = function(e, t) {
        var i = (t = void 0 === t || t) ? "addEventListener" : "removeEventListener",
            n = "mousedown";
        o.PointerEvent ? n = "pointerdown" : "ontouchstart" in o && (n = "touchstart"), e[i](n, this)
    }, i.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, i.getTouch = function(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t];
            if (i.identifier == this.pointerIdentifier) return i
        }
    }, i.onmousedown = function(e) {
        var t = e.button;
        t && 0 !== t && 1 !== t || this._pointerDown(e, e)
    }, i.ontouchstart = function(e) {
        this._pointerDown(e, e.changedTouches[0])
    }, i.onpointerdown = function(e) {
        this._pointerDown(e, e)
    }, i._pointerDown = function(e, t) {
        e.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== t.pointerId ? t.pointerId : t.identifier, this.pointerDown(e, t))
    }, i.pointerDown = function(e, t) {
        this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t])
    };
    var n = {
        mousedown: ["mousemove", "mouseup"],
        touchstart: ["touchmove", "touchend", "touchcancel"],
        pointerdown: ["pointermove", "pointerup", "pointercancel"]
    };
    return i._bindPostStartEvents = function(e) {
        if (e) {
            var t = n[e.type];
            t.forEach(function(e) {
                o.addEventListener(e, this)
            }, this), this._boundPointerEvents = t
        }
    }, i._unbindPostStartEvents = function() {
        this._boundPointerEvents && (this._boundPointerEvents.forEach(function(e) {
            o.removeEventListener(e, this)
        }, this), delete this._boundPointerEvents)
    }, i.onmousemove = function(e) {
        this._pointerMove(e, e)
    }, i.onpointermove = function(e) {
        e.pointerId == this.pointerIdentifier && this._pointerMove(e, e)
    }, i.ontouchmove = function(e) {
        var t = this.getTouch(e.changedTouches);
        t && this._pointerMove(e, t)
    }, i._pointerMove = function(e, t) {
        this.pointerMove(e, t)
    }, i.pointerMove = function(e, t) {
        this.emitEvent("pointerMove", [e, t])
    }, i.onmouseup = function(e) {
        this._pointerUp(e, e)
    }, i.onpointerup = function(e) {
        e.pointerId == this.pointerIdentifier && this._pointerUp(e, e)
    }, i.ontouchend = function(e) {
        var t = this.getTouch(e.changedTouches);
        t && this._pointerUp(e, t)
    }, i._pointerUp = function(e, t) {
        this._pointerDone(), this.pointerUp(e, t)
    }, i.pointerUp = function(e, t) {
        this.emitEvent("pointerUp", [e, t])
    }, i._pointerDone = function() {
        this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
    }, i._pointerReset = function() {
        this.isPointerDown = !1, delete this.pointerIdentifier
    }, i.pointerDone = function() {}, i.onpointercancel = function(e) {
        e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e)
    }, i.ontouchcancel = function(e) {
        var t = this.getTouch(e.changedTouches);
        t && this._pointerCancel(e, t)
    }, i._pointerCancel = function(e, t) {
        this._pointerDone(), this.pointerCancel(e, t)
    }, i.pointerCancel = function(e, t) {
        this.emitEvent("pointerCancel", [e, t])
    }, t.getPointerPoint = function(e) {
        return {
            x: e.pageX,
            y: e.pageY
        }
    }, t
}),
function(t, i) {
    "function" == typeof define && define.amd ? define("unidragger/unidragger", ["unipointer/unipointer"], function(e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("unipointer")) : t.Unidragger = i(t, t.Unipointer)
}(window, function(r, e) {
    function t() {}
    var i = t.prototype = Object.create(e.prototype);
    i.bindHandles = function() {
        this._bindHandles(!0)
    }, i.unbindHandles = function() {
        this._bindHandles(!1)
    }, i._bindHandles = function(e) {
        for (var t = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", i = e ? this._touchActionValue : "", n = 0; n < this.handles.length; n++) {
            var o = this.handles[n];
            this._bindStartEvent(o, e), o[t]("click", this), r.PointerEvent && (o.style.touchAction = i)
        }
    }, i._touchActionValue = "none", i.pointerDown = function(e, t) {
        this.okayPointerDown(e) && (this.pointerDownPointer = t, e.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]))
    };
    var o = {
            TEXTAREA: !0,
            INPUT: !0,
            SELECT: !0,
            OPTION: !0
        },
        l = {
            radio: !0,
            checkbox: !0,
            button: !0,
            submit: !0,
            image: !0,
            file: !0
        };
    return i.okayPointerDown = function(e) {
        var t = o[e.target.nodeName],
            i = l[e.target.type],
            n = !t || i;
        return n || this._pointerReset(), n
    }, i.pointerDownBlur = function() {
        var e = document.activeElement;
        e && e.blur && e != document.body && e.blur()
    }, i.pointerMove = function(e, t) {
        var i = this._dragPointerMove(e, t);
        this.emitEvent("pointerMove", [e, t, i]), this._dragMove(e, t, i)
    }, i._dragPointerMove = function(e, t) {
        var i = {
            x: t.pageX - this.pointerDownPointer.pageX,
            y: t.pageY - this.pointerDownPointer.pageY
        };
        return !this.isDragging && this.hasDragStarted(i) && this._dragStart(e, t), i
    }, i.hasDragStarted = function(e) {
        return 3 < Math.abs(e.x) || 3 < Math.abs(e.y)
    }, i.pointerUp = function(e, t) {
        this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t)
    }, i._dragPointerUp = function(e, t) {
        this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t)
    }, i._dragStart = function(e, t) {
        this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(e, t)
    }, i.dragStart = function(e, t) {
        this.emitEvent("dragStart", [e, t])
    }, i._dragMove = function(e, t, i) {
        this.isDragging && this.dragMove(e, t, i)
    }, i.dragMove = function(e, t, i) {
        e.preventDefault(), this.emitEvent("dragMove", [e, t, i])
    }, i._dragEnd = function(e, t) {
        this.isDragging = !1, setTimeout(function() {
            delete this.isPreventingClicks
        }.bind(this)), this.dragEnd(e, t)
    }, i.dragEnd = function(e, t) {
        this.emitEvent("dragEnd", [e, t])
    }, i.onclick = function(e) {
        this.isPreventingClicks && e.preventDefault()
    }, i._staticClick = function(e, t) {
        this.isIgnoringMouseUp && "mouseup" == e.type || (this.staticClick(e, t), "mouseup" != e.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
            delete this.isIgnoringMouseUp
        }.bind(this), 400)))
    }, i.staticClick = function(e, t) {
        this.emitEvent("staticClick", [e, t])
    }, t.getPointerPoint = e.getPointerPoint, t
}),
function(n, o) {
    "function" == typeof define && define.amd ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(e, t, i) {
        return o(n, e, t, i)
    }) : "object" == typeof module && module.exports ? module.exports = o(n, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : n.Flickity = o(n, n.Flickity, n.Unidragger, n.fizzyUIUtils)
}(window, function(i, e, t, s) {
    s.extend(e.defaults, {
        draggable: ">1",
        dragThreshold: 3
    }), e.createMethods.push("_createDrag");
    var n = e.prototype;
    s.extend(n, t.prototype), n._touchActionValue = "pan-y";
    var o = "createTouch" in document,
        r = !1;
    n._createDrag = function() {
        this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), o && !r && (i.addEventListener("touchmove", function() {}), r = !0)
    }, n.onActivateDrag = function() {
        this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
    }, n.onDeactivateDrag = function() {
        this.unbindHandles(), this.element.classList.remove("is-draggable")
    }, n.updateDraggable = function() {
        ">1" == this.options.draggable ? this.isDraggable = 1 < this.slides.length : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
    }, n.bindDrag = function() {
        this.options.draggable = !0, this.updateDraggable()
    }, n.unbindDrag = function() {
        this.options.draggable = !1, this.updateDraggable()
    }, n._uiChangeDrag = function() {
        delete this.isFreeScrolling
    }, n.pointerDown = function(e, t) {
        this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = a(), i.addEventListener("scroll", this), this._pointerDownDefault(e, t)) : this._pointerDownDefault(e, t)
    }, n._pointerDownDefault = function(e, t) {
        this.pointerDownPointer = {
            pageX: t.pageX,
            pageY: t.pageY
        }, this._bindPostStartEvents(e), this.dispatchEvent("pointerDown", e, [t])
    };
    var l = {
        INPUT: !0,
        TEXTAREA: !0,
        SELECT: !0
    };

    function a() {
        return {
            x: i.pageXOffset,
            y: i.pageYOffset
        }
    }
    return n.pointerDownFocus = function(e) {
        l[e.target.nodeName] || this.focus()
    }, n._pointerDownPreventDefault = function(e) {
        var t = "touchstart" == e.type,
            i = "touch" == e.pointerType,
            n = l[e.target.nodeName];
        t || i || n || e.preventDefault()
    }, n.hasDragStarted = function(e) {
        return Math.abs(e.x) > this.options.dragThreshold
    }, n.pointerUp = function(e, t) {
        delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", e, [t]), this._dragPointerUp(e, t)
    }, n.pointerDone = function() {
        i.removeEventListener("scroll", this), delete this.pointerDownScroll
    }, n.dragStart = function(e, t) {
        this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), i.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [t]))
    }, n.pointerMove = function(e, t) {
        var i = this._dragPointerMove(e, t);
        this.dispatchEvent("pointerMove", e, [t, i]), this._dragMove(e, t, i)
    }, n.dragMove = function(e, t, i) {
        if (this.isDraggable) {
            e.preventDefault(), this.previousDragX = this.dragX;
            var n = this.options.rightToLeft ? -1 : 1;
            this.options.wrapAround && (i.x = i.x % this.slideableWidth);
            var o = this.dragStartPosition + i.x * n;
            if (!this.options.wrapAround && this.slides.length) {
                var r = Math.max(-this.slides[0].target, this.dragStartPosition);
                o = r < o ? .5 * (o + r) : o;
                var l = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                o = o < l ? .5 * (o + l) : o
            }
            this.dragX = o, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", e, [t, i])
        }
    }, n.dragEnd = function(e, t) {
        if (this.isDraggable) {
            this.options.freeScroll && (this.isFreeScrolling = !0);
            var i = this.dragEndRestingSelect();
            if (this.options.freeScroll && !this.options.wrapAround) {
                var n = this.getRestingPosition();
                this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
            } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
            delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", e, [t])
        }
    }, n.dragEndRestingSelect = function() {
        var e = this.getRestingPosition(),
            t = Math.abs(this.getSlideDistance(-e, this.selectedIndex)),
            i = this._getClosestResting(e, t, 1),
            n = this._getClosestResting(e, t, -1);
        return i.distance < n.distance ? i.index : n.index
    }, n._getClosestResting = function(e, t, i) {
        for (var n = this.selectedIndex, o = 1 / 0, r = this.options.contain && !this.options.wrapAround ? function(e, t) {
                return e <= t
            } : function(e, t) {
                return e < t
            }; r(t, o) && (n += i, o = t, null !== (t = this.getSlideDistance(-e, n)));) t = Math.abs(t);
        return {
            distance: o,
            index: n - i
        }
    }, n.getSlideDistance = function(e, t) {
        var i = this.slides.length,
            n = this.options.wrapAround && 1 < i,
            o = n ? s.modulo(t, i) : t,
            r = this.slides[o];
        if (!r) return null;
        var l = n ? this.slideableWidth * Math.floor(t / i) : 0;
        return e - (r.target + l)
    }, n.dragEndBoostSelect = function() {
        if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date - this.dragMoveTime) return 0;
        var e = this.getSlideDistance(-this.dragX, this.selectedIndex),
            t = this.previousDragX - this.dragX;
        return 0 < e && 0 < t ? 1 : e < 0 && t < 0 ? -1 : 0
    }, n.staticClick = function(e, t) {
        var i = this.getParentCell(e.target),
            n = i && i.element,
            o = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", e, [t, n, o])
    }, n.onscroll = function() {
        var e = a(),
            t = this.pointerDownScroll.x - e.x,
            i = this.pointerDownScroll.y - e.y;
        (3 < Math.abs(t) || 3 < Math.abs(i)) && this._pointerDone()
    }, e
}),
function(n, o) {
    "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(e, t, i) {
        return o(n, e, t, i)
    }) : "object" == typeof module && module.exports ? module.exports = o(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : o(n, n.Flickity, n.Unipointer, n.fizzyUIUtils)
}(window, function(e, t, i, n) {
    "use strict";
    var o = "http://www.w3.org/2000/svg";

    function r(e, t) {
        this.direction = e, this.parent = t, this._create()
    }(r.prototype = Object.create(i.prototype))._create = function() {
        this.isEnabled = !0, this.isPrevious = -1 == this.direction;
        var e = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == e;
        var t = this.element = document.createElement("button");
        t.className = "flickity-button flickity-prev-next-button", t.className += this.isPrevious ? " previous" : " next", t.setAttribute("type", "button"), this.disable(), t.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
        var i = this.createSVG();
        t.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }, r.prototype.activate = function() {
        this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
    }, r.prototype.deactivate = function() {
        this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
    }, r.prototype.createSVG = function() {
        var e = document.createElementNS(o, "svg");
        e.setAttribute("class", "flickity-button-icon"), e.setAttribute("viewBox", "0 0 100 100");
        var t, i = document.createElementNS(o, "path"),
            n = "string" != typeof(t = this.parent.options.arrowShape) ? "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z" : t;
        return i.setAttribute("d", n), i.setAttribute("class", "arrow"), this.isLeft || i.setAttribute("transform", "translate(100, 100) rotate(180) "), e.appendChild(i), e
    }, r.prototype.handleEvent = n.handleEvent, r.prototype.onclick = function() {
        if (this.isEnabled) {
            this.parent.uiChange();
            var e = this.isPrevious ? "previous" : "next";
            this.parent[e]()
        }
    }, r.prototype.enable = function() {
        this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
    }, r.prototype.disable = function() {
        this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
    }, r.prototype.update = function() {
        var e = this.parent.slides;
        if (this.parent.options.wrapAround && 1 < e.length) this.enable();
        else {
            var t = e.length ? e.length - 1 : 0,
                i = this.isPrevious ? 0 : t;
            this[this.parent.selectedIndex == i ? "disable" : "enable"]()
        }
    }, r.prototype.destroy = function() {
        this.deactivate(), this.allOff()
    }, n.extend(t.defaults, {
        prevNextButtons: !0,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    }), t.createMethods.push("_createPrevNextButtons");
    var l = t.prototype;
    return l._createPrevNextButtons = function() {
        this.options.prevNextButtons && (this.prevButton = new r(-1, this), this.nextButton = new r(1, this), this.on("activate", this.activatePrevNextButtons))
    }, l.activatePrevNextButtons = function() {
        this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
    }, l.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
    }, t.PrevNextButton = r, t
}),
function(n, o) {
    "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function(e, t, i) {
        return o(n, e, t, i)
    }) : "object" == typeof module && module.exports ? module.exports = o(n, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")) : o(n, n.Flickity, n.Unipointer, n.fizzyUIUtils)
}(window, function(e, t, i, n) {
    function o(e) {
        this.parent = e, this._create()
    }(o.prototype = Object.create(i.prototype))._create = function() {
        this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
    }, o.prototype.activate = function() {
        this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
    }, o.prototype.deactivate = function() {
        this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
    }, o.prototype.setDots = function() {
        var e = this.parent.slides.length - this.dots.length;
        0 < e ? this.addDots(e) : e < 0 && this.removeDots(-e)
    }, o.prototype.addDots = function(e) {
        for (var t = document.createDocumentFragment(), i = [], n = this.dots.length, o = n + e, r = n; r < o; r++) {
            var l = document.createElement("li");
            l.className = "dot", l.setAttribute("aria-label", "Page dot " + (r + 1)), t.appendChild(l), i.push(l)
        }
        this.holder.appendChild(t), this.dots = this.dots.concat(i)
    }, o.prototype.removeDots = function(e) {
        this.dots.splice(this.dots.length - e, e).forEach(function(e) {
            this.holder.removeChild(e)
        }, this)
    }, o.prototype.updateSelected = function() {
        this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
    }, o.prototype.onTap = o.prototype.onClick = function(e) {
        var t = e.target;
        if ("LI" == t.nodeName) {
            this.parent.uiChange();
            var i = this.dots.indexOf(t);
            this.parent.select(i)
        }
    }, o.prototype.destroy = function() {
        this.deactivate(), this.allOff()
    }, t.PageDots = o, n.extend(t.defaults, {
        pageDots: !0
    }), t.createMethods.push("_createPageDots");
    var r = t.prototype;
    return r._createPageDots = function() {
        this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
    }, r.activatePageDots = function() {
        this.pageDots.activate()
    }, r.updateSelectedPageDots = function() {
        this.pageDots.updateSelected()
    }, r.updatePageDots = function() {
        this.pageDots.setDots()
    }, r.deactivatePageDots = function() {
        this.pageDots.deactivate()
    }, t.PageDots = o, t
}),
function(e, n) {
    "function" == typeof define && define.amd ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function(e, t, i) {
        return n(e, t, i)
    }) : "object" == typeof module && module.exports ? module.exports = n(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")) : n(e.EvEmitter, e.fizzyUIUtils, e.Flickity)
}(window, function(e, t, i) {
    function n(e) {
        this.parent = e, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
    }(n.prototype = Object.create(e.prototype)).play = function() {
        "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
    }, n.prototype.tick = function() {
        if ("playing" == this.state) {
            var e = this.parent.options.autoPlay;
            e = "number" == typeof e ? e : 3e3;
            var t = this;
            this.clear(), this.timeout = setTimeout(function() {
                t.parent.next(!0), t.tick()
            }, e)
        }
    }, n.prototype.stop = function() {
        this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
    }, n.prototype.clear = function() {
        clearTimeout(this.timeout)
    }, n.prototype.pause = function() {
        "playing" == this.state && (this.state = "paused", this.clear())
    }, n.prototype.unpause = function() {
        "paused" == this.state && this.play()
    }, n.prototype.visibilityChange = function() {
        this[document.hidden ? "pause" : "unpause"]()
    }, n.prototype.visibilityPlay = function() {
        this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
    }, t.extend(i.defaults, {
        pauseAutoPlayOnHover: !0
    }), i.createMethods.push("_createPlayer");
    var o = i.prototype;
    return o._createPlayer = function() {
        this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
    }, o.activatePlayer = function() {
        this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
    }, o.playPlayer = function() {
        this.player.play()
    }, o.stopPlayer = function() {
        this.player.stop()
    }, o.pausePlayer = function() {
        this.player.pause()
    }, o.unpausePlayer = function() {
        this.player.unpause()
    }, o.deactivatePlayer = function() {
        this.player.stop(), this.element.removeEventListener("mouseenter", this)
    }, o.onmouseenter = function() {
        this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
    }, o.onmouseleave = function() {
        this.player.unpause(), this.element.removeEventListener("mouseleave", this)
    }, i.Player = n, i
}),
function(i, n) {
    "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(e, t) {
        return n(i, e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils)
}(window, function(e, t, n) {
    var i = t.prototype;
    return i.insert = function(e, t) {
        var i = this._makeCells(e);
        if (i && i.length) {
            var n = this.cells.length;
            t = void 0 === t ? n : t;
            var o, r, l = (o = i, r = document.createDocumentFragment(), o.forEach(function(e) {
                    r.appendChild(e.element)
                }), r),
                s = t == n;
            if (s) this.slider.appendChild(l);
            else {
                var a = this.cells[t].element;
                this.slider.insertBefore(l, a)
            }
            if (0 === t) this.cells = i.concat(this.cells);
            else if (s) this.cells = this.cells.concat(i);
            else {
                var c = this.cells.splice(t, n - t);
                this.cells = this.cells.concat(i).concat(c)
            }
            this._sizeCells(i), this.cellChange(t, !0)
        }
    }, i.append = function(e) {
        this.insert(e, this.cells.length)
    }, i.prepend = function(e) {
        this.insert(e, 0)
    }, i.remove = function(e) {
        var t = this.getCells(e);
        if (t && t.length) {
            var i = this.cells.length - 1;
            t.forEach(function(e) {
                e.remove();
                var t = this.cells.indexOf(e);
                i = Math.min(t, i), n.removeFrom(this.cells, e)
            }, this), this.cellChange(i, !0)
        }
    }, i.cellSizeChange = function(e) {
        var t = this.getCell(e);
        if (t) {
            t.getSize();
            var i = this.cells.indexOf(t);
            this.cellChange(i)
        }
    }, i.cellChange = function(e, t) {
        var i = this.selectedElement;
        this._positionCells(e), this._getWrapShiftCells(), this.setGallerySize();
        var n = this.getCell(i);
        n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [e]), this.select(this.selectedIndex), t && this.positionSliderAtSelected()
    }, t
}),
function(i, n) {
    "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function(e, t) {
        return n(i, e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(i, require("./flickity"), require("fizzy-ui-utils")) : n(i, i.Flickity, i.fizzyUIUtils)
}(window, function(e, t, r) {
    "use strict";
    t.createMethods.push("_createLazyload");
    var i = t.prototype;

    function o(e, t) {
        this.img = e, this.flickity = t, this.load()
    }
    return i._createLazyload = function() {
        this.on("select", this.lazyLoad)
    }, i.lazyLoad = function() {
        var e = this.options.lazyLoad;
        if (e) {
            var t = "number" == typeof e ? e : 0,
                i = this.getAdjacentCellElements(t),
                n = [];
            i.forEach(function(e) {
                var t = function(e) {
                    if ("IMG" == e.nodeName) {
                        var t = e.getAttribute("data-flickity-lazyload"),
                            i = e.getAttribute("data-flickity-lazyload-src"),
                            n = e.getAttribute("data-flickity-lazyload-srcset");
                        if (t || i || n) return [e]
                    }
                    var o = e.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                    return r.makeArray(o)
                }(e);
                n = n.concat(t)
            }), n.forEach(function(e) {
                new o(e, this)
            }, this)
        }
    }, o.prototype.handleEvent = r.handleEvent, o.prototype.load = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this);
        var e = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
            t = this.img.getAttribute("data-flickity-lazyload-srcset");
        this.img.src = e, t && this.img.setAttribute("srcset", t), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
    }, o.prototype.onload = function(e) {
        this.complete(e, "flickity-lazyloaded")
    }, o.prototype.onerror = function(e) {
        this.complete(e, "flickity-lazyerror")
    }, o.prototype.complete = function(e, t) {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
            n = i && i.element;
        this.flickity.cellSizeChange(n), this.img.classList.add(t), this.flickity.dispatchEvent("lazyLoad", e, n)
    }, t.LazyLoader = o, t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], t) : "object" == typeof module && module.exports && (module.exports = t(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
}(window, function(e) {
    return e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], t) : "object" == typeof module && module.exports ? module.exports = t(require("flickity"), require("fizzy-ui-utils")) : e.Flickity = t(e.Flickity, e.fizzyUIUtils)
}(window, function(n, o) {
    n.createMethods.push("_createAsNavFor");
    var e = n.prototype;
    return e._createAsNavFor = function() {
        this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
        var e = this.options.asNavFor;
        if (e) {
            var t = this;
            setTimeout(function() {
                t.setNavCompanion(e)
            })
        }
    }, e.setNavCompanion = function(e) {
        e = o.getQueryElement(e);
        var t = n.data(e);
        if (t && t != this) {
            this.navCompanion = t;
            var i = this;
            this.onNavCompanionSelect = function() {
                i.navCompanionSelect()
            }, t.on("select", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect(!0)
        }
    }, e.navCompanionSelect = function(e) {
        if (this.navCompanion) {
            var t, i = this.navCompanion.selectedCells[0],
                n = this.navCompanion.cells.indexOf(i),
                o = n + this.navCompanion.selectedCells.length - 1,
                r = Math.floor((o - (t = n)) * this.navCompanion.cellAlign + t);
            if (this.selectCell(r, !1, e), this.removeNavSelectedElements(), !(r >= this.cells.length)) {
                var l = this.cells.slice(n, o + 1);
                this.navSelectedElements = l.map(function(e) {
                    return e.element
                }), this.changeNavSelectedClass("add")
            }
        }
    }, e.changeNavSelectedClass = function(t) {
        this.navSelectedElements.forEach(function(e) {
            e.classList[t]("is-nav-selected")
        })
    }, e.activateAsNavFor = function() {
        this.navCompanionSelect(!0)
    }, e.removeNavSelectedElements = function() {
        this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements)
    }, e.onNavStaticClick = function(e, t, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n)
    }, e.deactivateAsNavFor = function() {
        this.removeNavSelectedElements()
    }, e.destroyAsNavFor = function() {
        this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
    }, n
}),
function(t, i) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function(e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("ev-emitter")) : t.imagesLoaded = i(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function(t, e) {
    var r = t.jQuery,
        l = t.console;

    function s(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }
    var a = Array.prototype.slice;

    function c(e, t, i) {
        if (!(this instanceof c)) return new c(e, t, i);
        var n, o = e;
        "string" == typeof e && (o = document.querySelectorAll(e)), o ? (this.elements = (n = o, Array.isArray(n) ? n : "object" == typeof n && "number" == typeof n.length ? a.call(n) : [n]), this.options = s({}, this.options), "function" == typeof t ? i = t : s(this.options, t), i && this.on("always", i), this.getImages(), r && (this.jqDeferred = new r.Deferred), setTimeout(this.check.bind(this))) : l.error("Bad element for imagesLoaded " + (o || e))
    }(c.prototype = Object.create(e.prototype)).options = {}, c.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, c.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && h[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = e.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var l = r[n];
                    this.addElementBackgroundImages(l)
                }
            }
        }
    };
    var h = {
        1: !0,
        9: !0,
        11: !0
    };

    function i(e) {
        this.img = e
    }

    function n(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    return c.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, c.prototype.addImage = function(e) {
        var t = new i(e);
        this.images.push(t)
    }, c.prototype.addBackground = function(e, t) {
        var i = new n(e, t);
        this.images.push(i)
    }, c.prototype.check = function() {
        var n = this;

        function t(e, t, i) {
            setTimeout(function() {
                n.progress(e, t, i)
            })
        }
        this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(e) {
            e.once("progress", t), e.check()
        }) : this.complete()
    }, c.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, e, t)
    }, c.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, (i.prototype = Object.create(e.prototype)).check = function() {
        this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
    }, i.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, i.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, i.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, i.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, i.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, i.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (n.prototype = Object.create(i.prototype)).check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, n.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, n.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, c.makeJQueryPlugin = function(e) {
        (e = e || t.jQuery) && ((r = e).fn.imagesLoaded = function(e, t) {
            return new c(this, e, t).jqDeferred.promise(r(this))
        })
    }, c.makeJQueryPlugin(), c
}),
function(i, n) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(e, t) {
        return n(i, e, t)
    }) : "object" == typeof module && module.exports ? module.exports = n(i, require("flickity"), require("imagesloaded")) : i.Flickity = n(i, i.Flickity, i.imagesLoaded)
}(window, function(e, t, i) {
    "use strict";
    t.createMethods.push("_createImagesLoaded");
    var n = t.prototype;
    return n._createImagesLoaded = function() {
        this.on("activate", this.imagesLoaded)
    }, n.imagesLoaded = function() {
        if (this.options.imagesLoaded) {
            var n = this;
            i(this.slider).on("progress", function(e, t) {
                var i = n.getParentCell(t.img);
                n.cellSizeChange(i && i.element), n.options.freeScroll || n.positionSliderAtSelected()
            })
        }
    }, t
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["flickity/js/index", "fizzy-ui-utils/utils"], t) : "object" == typeof module && module.exports ? module.exports = t(require("flickity"), require("fizzy-ui-utils")) : t(e.Flickity, e.fizzyUIUtils)
}(this, function(e, s) {
    var t = e.Slide,
        o = t.prototype.updateTarget;
    t.prototype.updateTarget = function() {
        if (o.apply(this, arguments), this.parent.options.fade) {
            var i = this.target - this.x,
                n = this.cells[0].x;
            this.cells.forEach(function(e) {
                var t = e.x - n - i;
                e.renderPosition(t)
            })
        }
    }, t.prototype.setOpacity = function(t) {
        this.cells.forEach(function(e) {
            e.element.style.opacity = t
        })
    };
    var i = e.prototype;
    e.createMethods.push("_createFade"), i._createFade = function() {
        this.fadeIndex = this.selectedIndex, this.prevSelectedIndex = this.selectedIndex, this.on("select", this.onSelectFade), this.on("dragEnd", this.onDragEndFade), this.on("settle", this.onSettleFade), this.on("activate", this.onActivateFade), this.on("deactivate", this.onDeactivateFade)
    };
    var n = i.updateSlides;
    i.updateSlides = function() {
        n.apply(this, arguments), this.options.fade && this.slides.forEach(function(e, t) {
            var i = t == this.selectedIndex ? 1 : 0;
            e.setOpacity(i)
        }, this)
    }, i.onSelectFade = function() {
        this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1), this.prevSelectedIndex = this.selectedIndex
    }, i.onSettleFade = function() {
        (delete this.didDragEnd, this.options.fade) && (this.selectedSlide.setOpacity(1), this.slides[this.fadeIndex] && this.fadeIndex != this.selectedIndex && this.slides[this.fadeIndex].setOpacity(0))
    }, i.onDragEndFade = function() {
        this.didDragEnd = !0
    }, i.onActivateFade = function() {
        this.options.fade && this.element.classList.add("is-fade")
    }, i.onDeactivateFade = function() {
        this.options.fade && (this.element.classList.remove("is-fade"), this.slides.forEach(function(e) {
            e.setOpacity("")
        }))
    };
    var r = i.positionSlider;
    i.positionSlider = function() {
        this.options.fade ? (this.fadeSlides(), this.dispatchScrollEvent()) : r.apply(this, arguments)
    };
    var l = i.positionSliderAtSelected;
    i.positionSliderAtSelected = function() {
        this.options.fade && this.setTranslateX(0), l.apply(this, arguments)
    }, i.fadeSlides = function() {
        if (!(this.slides.length < 2)) {
            var e = this.getFadeIndexes(),
                t = this.slides[e.a],
                i = this.slides[e.b],
                n = this.wrapDifference(t.target, i.target),
                o = this.wrapDifference(t.target, -this.x);
            o /= n, t.setOpacity(1 - o), i.setOpacity(o);
            var r = e.a;
            this.isDragging && (r = .5 < o ? e.a : e.b), null != this.fadeHideIndex && this.fadeHideIndex != r && this.fadeHideIndex != e.a && this.fadeHideIndex != e.b && this.slides[this.fadeHideIndex].setOpacity(0), this.fadeHideIndex = r
        }
    }, i.getFadeIndexes = function() {
        return this.isDragging || this.didDragEnd ? this.options.wrapAround ? this.getFadeDragWrapIndexes() : this.getFadeDragLimitIndexes() : {
            a: this.fadeIndex,
            b: this.selectedIndex
        }
    }, i.getFadeDragWrapIndexes = function() {
        var e = this.slides.map(function(e, t) {
                return this.getSlideDistance(-this.x, t)
            }, this),
            t = e.map(function(e) {
                return Math.abs(e)
            }),
            i = Math.min.apply(Math, t),
            n = t.indexOf(i),
            o = e[n],
            r = this.slides.length,
            l = 0 <= o ? 1 : -1;
        return {
            a: n,
            b: s.modulo(n + l, r)
        }
    }, i.getFadeDragLimitIndexes = function() {
        for (var e = 0, t = 0; t < this.slides.length - 1; t++) {
            var i = this.slides[t];
            if (-this.x < i.target) break;
            e = t
        }
        return {
            a: e,
            b: e + 1
        }
    }, i.wrapDifference = function(e, t) {
        var i = t - e;
        if (!this.options.wrapAround) return i;
        var n = i + this.slideableWidth,
            o = i - this.slideableWidth;
        return Math.abs(n) < Math.abs(i) && (i = n), Math.abs(o) < Math.abs(i) && (i = o), i
    };
    var a = i._getWrapShiftCells;
    i._getWrapShiftCells = function() {
        this.options.fade || a.apply(this, arguments)
    };
    var c = i.shiftWrapCells;
    return i.shiftWrapCells = function() {
        this.options.fade || c.apply(this, arguments)
    }, e
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.ScrollReveal = t()
}(this, function() {
    "use strict";
    var o = {
        delay: 0,
        distance: "0",
        duration: 600,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        interval: 0,
        opacity: 0,
        origin: "bottom",
        rotate: {
            x: 0,
            y: 0,
            z: 0
        },
        scale: 1,
        cleanup: !1,
        container: document.documentElement,
        desktop: !0,
        mobile: !0,
        reset: !1,
        useDelay: "always",
        viewFactor: 0,
        viewOffset: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        afterReset: function() {},
        afterReveal: function() {},
        beforeReset: function() {},
        beforeReveal: function() {}
    };
    var i = {
        success: function() {
            document.documentElement.classList.add("sr"), document.body ? document.body.style.height = "100%" : document.addEventListener("DOMContentLoaded", function() {
                document.body.style.height = "100%"
            })
        },
        failure: function() {
            return document.documentElement.classList.remove("sr"), {
                clean: function() {},
                destroy: function() {},
                reveal: function() {},
                sync: function() {},
                get noop() {
                    return !0
                }
            }
        }
    };

    function r(e) {
        return "object" == typeof window.Node ? e instanceof window.Node : null !== e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName
    }

    function d(e, t) {
        if (void 0 === t && (t = document), e instanceof Array) return e.filter(r);
        if (r(e)) return [e];
        if (i = e, n = Object.prototype.toString.call(i), "object" == typeof window.NodeList ? i instanceof window.NodeList : null !== i && "object" == typeof i && "number" == typeof i.length && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(n) && (0 === i.length || r(i[0]))) return Array.prototype.slice.call(e);
        var i, n;
        if ("string" == typeof e) try {
            var o = t.querySelectorAll(e);
            return Array.prototype.slice.call(o)
        } catch (e) {
            return []
        }
        return []
    }

    function l(e) {
        return null !== e && e instanceof Object && (e.constructor === Object || "[object Object]" === Object.prototype.toString.call(e))
    }

    function p(i, n) {
        if (l(i)) return Object.keys(i).forEach(function(e) {
            return n(i[e], e, i)
        });
        if (i instanceof Array) return i.forEach(function(e, t) {
            return n(e, t, i)
        });
        throw new TypeError("Expected either an array or object literal.")
    }

    function u(e) {
        for (var t = [], i = arguments.length - 1; 0 < i--;) t[i] = arguments[i + 1];
        if (this.constructor.debug && console) {
            var n = "%cScrollReveal: " + e;
            t.forEach(function(e) {
                return n += "\n — " + e
            }), console.log(n, "color: #ea654b;")
        }
    }

    function t() {
        var i = this,
            n = {
                active: [],
                stale: []
            },
            t = {
                active: [],
                stale: []
            },
            o = {
                active: [],
                stale: []
            };
        try {
            p(d("[data-sr-id]"), function(e) {
                var t = parseInt(e.getAttribute("data-sr-id"));
                n.active.push(t)
            })
        } catch (e) {
            throw e
        }
        p(this.store.elements, function(e) {
            -1 === n.active.indexOf(e.id) && n.stale.push(e.id)
        }), p(n.stale, function(e) {
            return delete i.store.elements[e]
        }), p(this.store.elements, function(e) {
            -1 === o.active.indexOf(e.containerId) && o.active.push(e.containerId), e.hasOwnProperty("sequence") && -1 === t.active.indexOf(e.sequence.id) && t.active.push(e.sequence.id)
        }), p(this.store.containers, function(e) {
            -1 === o.active.indexOf(e.id) && o.stale.push(e.id)
        }), p(o.stale, function(e) {
            var t = i.store.containers[e].node;
            t.removeEventListener("scroll", i.delegate), t.removeEventListener("resize", i.delegate), delete i.store.containers[e]
        }), p(this.store.sequences, function(e) {
            -1 === t.active.indexOf(e.id) && t.stale.push(e.id)
        }), p(t.stale, function(e) {
            return delete i.store.sequences[e]
        })
    }

    function y(e) {
        var n, o = this;
        try {
            p(d(e), function(e) {
                var t = e.getAttribute("data-sr-id");
                if (null !== t) {
                    n = !0;
                    var i = o.store.elements[t];
                    i.callbackTimer && window.clearTimeout(i.callbackTimer.clock), e.setAttribute("style", i.styles.inline.generated), e.removeAttribute("data-sr-id"), delete o.store.elements[t]
                }
            })
        } catch (e) {
            return u.call(this, "Clean failed.", e.message)
        }
        if (n) try {
            t.call(this)
        } catch (e) {
            return u.call(this, "Clean failed.", e.message)
        }
    }

    function I(e) {
        if (e.constructor !== Array) throw new TypeError("Expected array.");
        if (16 === e.length) return e;
        if (6 !== e.length) throw new RangeError("Expected array with either 6 or 16 values.");
        var t = O();
        return t[0] = e[0], t[1] = e[1], t[4] = e[2], t[5] = e[3], t[12] = e[4], t[13] = e[5], t
    }

    function O() {
        for (var e = [], t = 0; t < 16; t++) t % 5 == 0 ? e.push(1) : e.push(0);
        return e
    }

    function H(e, t) {
        for (var i = I(e), n = I(t), o = [], r = 0; r < 4; r++)
            for (var l = [i[r], i[r + 4], i[r + 8], i[r + 12]], s = 0; s < 4; s++) {
                var a = 4 * s,
                    c = [n[a], n[a + 1], n[a + 2], n[a + 3]],
                    h = l[0] * c[0] + l[1] * c[1] + l[2] * c[2] + l[3] * c[3];
                o[r + a] = h
            }
        return o
    }

    function T(e, t) {
        var i = O();
        return i[0] = e, i[5] = "number" == typeof t ? t : e, i
    }
    var F = function() {
        var i = {},
            n = document.documentElement.style;

        function e(e, t) {
            if (void 0 === t && (t = n), e && "string" == typeof e) {
                if (i[e]) return i[e];
                if ("string" == typeof t[e]) return i[e] = e;
                if ("string" == typeof t["-webkit-" + e]) return i[e] = "-webkit-" + e;
                throw new RangeError('Unable to find "' + e + '" style property.')
            }
            throw new TypeError("Expected a string.")
        }
        return e.clearCache = function() {
            return i = {}
        }, e
    }();

    function f(e) {
        var t = window.getComputedStyle(e.node),
            i = t.position,
            n = e.config,
            o = {},
            r = (e.node.getAttribute("style") || "").match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];
        o.computed = r ? r.map(function(e) {
            return e.trim()
        }).join("; ") + ";" : "", o.generated = r.some(function(e) {
            return e.match(/visibility\s?:\s?visible/i)
        }) ? o.computed : r.concat(["visibility: visible"]).map(function(e) {
            return e.trim()
        }).join("; ") + ";";
        var l, s, a, c, h, d, p, u, y, f, v, g, m, x = parseFloat(t.opacity),
            b = isNaN(parseFloat(n.opacity)) ? parseFloat(t.opacity) : parseFloat(n.opacity),
            w = {
                computed: x !== b ? "opacity: " + x + ";" : "",
                generated: x !== b ? "opacity: " + b + ";" : ""
            },
            M = [];
        if (parseFloat(n.distance)) {
            var S = "top" === n.origin || "bottom" === n.origin ? "Y" : "X",
                E = n.distance;
            "top" !== n.origin && "left" !== n.origin || (E = /^-/.test(E) ? E.substr(1) : "-" + E);
            var k = E.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),
                z = k[0];
            switch (k[1]) {
                case "em":
                    E = parseInt(t.fontSize) * z;
                    break;
                case "px":
                    E = z;
                    break;
                case "%":
                    E = "Y" === S ? e.node.getBoundingClientRect().height * z / 100 : e.node.getBoundingClientRect().width * z / 100;
                    break;
                default:
                    throw new RangeError("Unrecognized or missing distance unit.")
            }
            "Y" === S ? M.push((a = E, (c = O())[13] = a, c)) : M.push((l = E, (s = O())[12] = l, s))
        }
        n.rotate.x && M.push((h = n.rotate.x, d = Math.PI / 180 * h, (p = O())[5] = p[10] = Math.cos(d), p[6] = p[9] = Math.sin(d), p[9] *= -1, p)), n.rotate.y && M.push((u = n.rotate.y, y = Math.PI / 180 * u, (f = O())[0] = f[10] = Math.cos(y), f[2] = f[8] = Math.sin(y), f[2] *= -1, f)), n.rotate.z && M.push((v = n.rotate.z, g = Math.PI / 180 * v, (m = O())[0] = m[5] = Math.cos(g), m[1] = m[4] = Math.sin(g), m[4] *= -1, m)), 1 !== n.scale && (0 === n.scale ? M.push(T(2e-4)) : M.push(T(n.scale)));
        var A = {};
        if (M.length) {
            A.property = F("transform"), A.computed = {
                raw: t[A.property],
                matrix: function(e) {
                    if ("string" == typeof e) {
                        var t = e.match(/matrix(3d)?\(([^)]+)\)/);
                        if (t) return I(t[2].split(", ").map(parseFloat))
                    }
                    return O()
                }(t[A.property])
            }, M.unshift(A.computed.matrix);
            var C = M.reduce(H);
            A.generated = {
                initial: A.property + ": matrix3d(" + C.join(", ") + ");",
                final: A.property + ": matrix3d(" + A.computed.matrix.join(", ") + ");"
            }
        } else A.generated = {
            initial: "",
            final: ""
        };
        var D = {};
        if (w.generated || A.generated.initial) {
            D.property = F("transition"), D.computed = t[D.property], D.fragments = [];
            var L = n.delay,
                _ = n.duration,
                P = n.easing;
            w.generated && D.fragments.push({
                delayed: "opacity " + _ / 1e3 + "s " + P + " " + L / 1e3 + "s",
                instant: "opacity " + _ / 1e3 + "s " + P + " 0s"
            }), A.generated.initial && D.fragments.push({
                delayed: A.property + " " + _ / 1e3 + "s " + P + " " + L / 1e3 + "s",
                instant: A.property + " " + _ / 1e3 + "s " + P + " 0s"
            }), D.computed && !D.computed.match(/all 0s/) && D.fragments.unshift({
                delayed: D.computed,
                instant: D.computed
            });
            var j = D.fragments.reduce(function(e, t, i) {
                return e.delayed += 0 === i ? t.delayed : ", " + t.delayed, e.instant += 0 === i ? t.instant : ", " + t.instant, e
            }, {
                delayed: "",
                instant: ""
            });
            D.generated = {
                delayed: D.property + ": " + j.delayed + ";",
                instant: D.property + ": " + j.instant + ";"
            }
        } else D.generated = {
            delayed: "",
            instant: ""
        };
        return {
            inline: o,
            opacity: w,
            position: i,
            transform: A,
            transition: D
        }
    }

    function a(e, t) {
        void 0 === t && (t = {});
        var i = t.pristine || this.pristine,
            n = "always" === e.config.useDelay || "onload" === e.config.useDelay && i || "once" === e.config.useDelay && !e.seen,
            o = e.visible && !e.revealed,
            r = !e.visible && e.revealed && e.config.reset;
        return t.reveal || o ? function(e, t) {
            var i = [e.styles.inline.generated, e.styles.opacity.computed, e.styles.transform.generated.final];
            t ? i.push(e.styles.transition.generated.delayed) : i.push(e.styles.transition.generated.instant);
            e.revealed = e.seen = !0, e.node.setAttribute("style", i.filter(function(e) {
                return "" !== e
            }).join(" ")), s.call(this, e, t)
        }.call(this, e, n) : t.reset || r ? function(e) {
            var t = [e.styles.inline.generated, e.styles.opacity.generated, e.styles.transform.generated.initial, e.styles.transition.generated.instant];
            e.revealed = !1, e.node.setAttribute("style", t.filter(function(e) {
                return "" !== e
            }).join(" ")), s.call(this, e)
        }.call(this, e) : void 0
    }

    function s(e, t) {
        var i = this,
            n = t ? e.config.duration + e.config.delay : e.config.duration,
            o = e.revealed ? e.config.beforeReveal : e.config.beforeReset,
            r = e.revealed ? e.config.afterReveal : e.config.afterReset,
            l = 0;
        e.callbackTimer && (l = Date.now() - e.callbackTimer.start, window.clearTimeout(e.callbackTimer.clock)), o(e.node), e.callbackTimer = {
            start: Date.now(),
            clock: window.setTimeout(function() {
                r(e.node), e.callbackTimer = null, e.revealed && !e.config.reset && e.config.cleanup && y.call(i, e.node)
            }, n - l)
        }
    }
    var e, v = (e = 0, function() {
        return e++
    });

    function c(e, t) {
        if (void 0 === t && (t = this.pristine), !e.visible && e.revealed && e.config.reset) return a.call(this, e, {
            reset: !0
        });
        var i = this.store.sequences[e.sequence.id],
            n = e.sequence.index;
        if (i) {
            var o = new h(i, "visible", this.store),
                r = new h(i, "revealed", this.store);
            if (i.models = {
                    visible: o,
                    revealed: r
                }, !r.body.length) {
                var l = i.members[o.body[0]],
                    s = this.store.elements[l];
                if (s) return m.call(this, i, o.body[0], -1, t), m.call(this, i, o.body[0], 1, t), a.call(this, s, {
                    reveal: !0,
                    pristine: t
                })
            }
            if (!i.blocked.head && n === [].concat(r.head).pop() && n >= [].concat(o.body).shift()) return m.call(this, i, n, -1, t), a.call(this, e, {
                reveal: !0,
                pristine: t
            });
            if (!i.blocked.foot && n === [].concat(r.foot).shift() && n <= [].concat(o.body).pop()) return m.call(this, i, n, 1, t), a.call(this, e, {
                reveal: !0,
                pristine: t
            })
        }
    }

    function g(e) {
        var t = Math.abs(e);
        if (isNaN(t)) throw new RangeError("Invalid sequence interval.");
        this.id = v(), this.interval = Math.max(t, 16), this.members = [], this.models = {}, this.blocked = {
            head: !1,
            foot: !1
        }
    }

    function h(e, n, o) {
        var r = this;
        this.head = [], this.body = [], this.foot = [], p(e.members, function(e, t) {
            var i = o.elements[e];
            i && i[n] && r.body.push(t)
        }), this.body.length && p(e.members, function(e, t) {
            var i = o.elements[e];
            i && !i[n] && (t < r.body[0] ? r.head.push(t) : r.foot.push(t))
        })
    }

    function m(e, t, i, n) {
        var o = this,
            r = ["head", null, "foot"][1 + i],
            l = e.members[t + i],
            s = this.store.elements[l];
        e.blocked[r] = !0, setTimeout(function() {
            e.blocked[r] = !1, s && c.call(o, s, n)
        }, e.interval)
    }

    function x() {
        var i = this;
        t.call(this), p(this.store.elements, function(e) {
            var t = [e.styles.inline.generated];
            e.visible ? (t.push(e.styles.opacity.computed), t.push(e.styles.transform.generated.final), e.revealed = !0) : (t.push(e.styles.opacity.generated), t.push(e.styles.transform.generated.initial), e.revealed = !1), e.node.setAttribute("style", t.filter(function(e) {
                return "" !== e
            }).join(" "))
        }), p(this.store.containers, function(e) {
            var t = e.node === document.documentElement ? window : e.node;
            t.addEventListener("scroll", i.delegate), t.addEventListener("resize", i.delegate)
        }), this.delegate(), this.initTimeout = null
    }

    function b(e) {
        return void 0 === e && (e = navigator.userAgent), /Android|iPhone|iPad|iPod/i.test(e)
    }

    function w(i) {
        for (var e = [], t = arguments.length - 1; 0 < t--;) e[t] = arguments[t + 1];
        if (l(i)) return p(e, function(e) {
            p(e, function(e, t) {
                l(e) ? (i[t] && l(i[t]) || (i[t] = {}), w(i[t], e)) : i[t] = e
            })
        }), i;
        throw new TypeError("Target must be an object literal.")
    }

    function n(e, s, t) {
        var a = this;
        void 0 === s && (s = {}), void 0 === t && (t = !1);
        var c, h = [],
            i = s.interval || o.interval;
        try {
            i && (c = new g(i));
            var n = d(e);
            if (!n.length) throw new Error("Invalid reveal target.");
            p(n.reduce(function(e, t) {
                var i = {},
                    n = t.getAttribute("data-sr-id");
                n ? (w(i, a.store.elements[n]), i.node.setAttribute("style", i.styles.inline.computed)) : (i.id = v(), i.node = t, i.seen = !1, i.revealed = !1, i.visible = !1);
                var o = w({}, i.config || a.defaults, s);
                if (!o.mobile && b() || !o.desktop && !b()) return n && y.call(a, i), e;
                var r, l = d(o.container)[0];
                if (!l) throw new Error("Invalid container.");
                return l.contains(t) && (null === (r = function(t) {
                    var e = [],
                        i = arguments.length - 1;
                    for (; 0 < i--;) e[i] = arguments[i + 1];
                    var n = null;
                    return p(e, function(e) {
                        p(e, function(e) {
                            null === n && e.node === t && (n = e.id)
                        })
                    }), n
                }(l, h, a.store.containers)) && (r = v(), h.push({
                    id: r,
                    node: l
                })), i.config = o, i.containerId = r, i.styles = f(i), c && (i.sequence = {
                    id: c.id,
                    index: c.members.length
                }, c.members.push(i.id)), e.push(i)), e
            }, []), function(e) {
                (a.store.elements[e.id] = e).node.setAttribute("data-sr-id", e.id)
            })
        } catch (e) {
            return u.call(this, "Reveal failed.", e.message)
        }
        p(h, function(e) {
            a.store.containers[e.id] = {
                id: e.id,
                node: e.node
            }
        }), c && (this.store.sequences[c.id] = c), !0 !== t && (this.store.history.push({
            target: e,
            options: s
        }), this.initTimeout && window.clearTimeout(this.initTimeout), this.initTimeout = window.setTimeout(x.bind(this), 0))
    }
    var M, S = Math.sign || function(e) {
            return (0 < e) - (e < 0) || +e
        },
        E = (M = Date.now(), function(e) {
            var t = Date.now();
            16 < t - M ? e(M = t) : setTimeout(function() {
                return E(e)
            }, 0)
        }),
        k = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || E;

    function z(e, t) {
        for (var i = t ? e.node.clientHeight : e.node.offsetHeight, n = t ? e.node.clientWidth : e.node.offsetWidth, o = 0, r = 0, l = e.node; isNaN(l.offsetTop) || (o += l.offsetTop), isNaN(l.offsetLeft) || (r += l.offsetLeft), l = l.offsetParent;);
        return {
            bounds: {
                top: o,
                right: r + n,
                bottom: o + i,
                left: r
            },
            height: i,
            width: n
        }
    }

    function A(e, t) {
        var n = this;
        void 0 === e && (e = {
            type: "init"
        }), void 0 === t && (t = this.store.elements), k(function() {
            var i = "init" === e.type || "resize" === e.type;
            p(n.store.containers, function(e) {
                i && (e.geometry = z.call(n, e, !0));
                var t = function(e) {
                    var t, i;
                    return i = e.node === document.documentElement ? (t = window.pageYOffset, window.pageXOffset) : (t = e.node.scrollTop, e.node.scrollLeft), {
                        top: t,
                        left: i
                    }
                }.call(n, e);
                e.scroll && (e.direction = {
                    x: S(t.left - e.scroll.left),
                    y: S(t.top - e.scroll.top)
                }), e.scroll = t
            }), p(t, function(e) {
                i && (e.geometry = z.call(n, e)), e.visible = function(e) {
                    void 0 === e && (e = {});
                    var t = this.store.containers[e.containerId];
                    if (t) {
                        var i = Math.max(0, Math.min(1, e.config.viewFactor)),
                            n = e.config.viewOffset,
                            o = e.geometry.bounds.top + e.geometry.height * i,
                            r = e.geometry.bounds.right - e.geometry.width * i,
                            l = e.geometry.bounds.bottom - e.geometry.height * i,
                            s = e.geometry.bounds.left + e.geometry.width * i,
                            a = t.geometry.bounds.top + t.scroll.top + n.top,
                            c = t.geometry.bounds.right + t.scroll.left - n.right,
                            h = t.geometry.bounds.bottom + t.scroll.top - n.bottom,
                            d = t.geometry.bounds.left + t.scroll.left + n.left;
                        return o < h && d < r && a < l && s < c || "fixed" === e.styles.position
                    }
                }.call(n, e)
            }), p(t, function(e) {
                e.sequence ? c.call(n, e) : a.call(n, e)
            }), n.pristine = !1
        })
    }
    var C, D, L, _, P, j, q, W, N = "4.0.5";

    function V(e) {
        var t;
        if (void 0 === e && (e = {}), void 0 === this || Object.getPrototypeOf(this) !== V.prototype) return new V(e);
        if (!V.isSupported()) return u.call(this, "Instantiation failed.", "This browser is not supported."), i.failure();
        try {
            t = w({}, j || o, e)
        } catch (e) {
            return u.call(this, "Invalid configuration.", e.message), i.failure()
        }
        try {
            if (!d(t.container)[0]) throw new Error("Invalid container.")
        } catch (e) {
            return u.call(this, e.message), i.failure()
        }
        return !(j = t).mobile && b() || !j.desktop && !b() ? (u.call(this, "This device is disabled.", "desktop: " + j.desktop, "mobile: " + j.mobile), i.failure()) : (i.success(), this.store = {
            containers: {},
            elements: {},
            history: [],
            sequences: {}
        }, this.pristine = !0, C = C || A.bind(this), D = D || function() {
            var i = this;
            p(this.store.elements, function(e) {
                e.node.setAttribute("style", e.styles.inline.generated), e.node.removeAttribute("data-sr-id")
            }), p(this.store.containers, function(e) {
                var t = e.node === document.documentElement ? window : e.node;
                t.removeEventListener("scroll", i.delegate), t.removeEventListener("resize", i.delegate)
            }), this.store = {
                containers: {},
                elements: {},
                history: [],
                sequences: {}
            }
        }.bind(this), L = L || n.bind(this), _ = _ || y.bind(this), P = P || function() {
            var t = this;
            p(this.store.history, function(e) {
                n.call(t, e.target, e.options, !0)
            }), x.call(this)
        }.bind(this), Object.defineProperty(this, "delegate", {
            get: function() {
                return C
            }
        }), Object.defineProperty(this, "destroy", {
            get: function() {
                return D
            }
        }), Object.defineProperty(this, "reveal", {
            get: function() {
                return L
            }
        }), Object.defineProperty(this, "clean", {
            get: function() {
                return _
            }
        }), Object.defineProperty(this, "sync", {
            get: function() {
                return P
            }
        }), Object.defineProperty(this, "defaults", {
            get: function() {
                return j
            }
        }), Object.defineProperty(this, "version", {
            get: function() {
                return N
            }
        }), Object.defineProperty(this, "noop", {
            get: function() {
                return !1
            }
        }), W || (W = this))
    }
    return V.isSupported = function() {
        return ("transform" in (t = document.documentElement.style) || "WebkitTransform" in t) && ("transition" in (e = document.documentElement.style) || "WebkitTransition" in e);
        var e, t
    }, Object.defineProperty(V, "debug", {
        get: function() {
            return q || !1
        },
        set: function(e) {
            return q = "boolean" == typeof e ? e : q
        }
    }), V(), V
});
var animationDelay = 2500,
    barAnimationDelay = 3800,
    barWaiting = barAnimationDelay - 3e3,
    lettersDelay = 50,
    typeLettersDelay = 15e3,
    selectionDuration = 500,
    typeAnimationDelay = selectionDuration + 800,
    revealDuration = 600,
    revealAnimationDelay = 3e3;

function initHeadline() {
    singleLetters($(".shift.letters").find("b")), animateHeadline($(".word-shift"))
}

function singleLetters(e) {
    e.each(function() {
        var e = $(this),
            t = e.text().split(""),
            n = e.hasClass("is-visible");
        for (i in t) 0 < e.parents(".rotate-2").length && (t[i] = "<em>" + t[i] + "</em>"), t[i] = n ? '<i class="in">' + t[i] + "</i>" : "<i>" + t[i] + "</i>";
        var o = t.join("");
        e.html(o).css("opacity", 1)
    })
}

function animateHeadline(e) {
    var r = animationDelay;
    e.each(function() {
        var e = $(this);
        if (e.hasClass("loading-bar")) r = barAnimationDelay, setTimeout(function() {
            e.find(".word-shift").addClass("is-loading")
        }, barWaiting);
        else if (e.hasClass("clip")) {
            var t = e.find(".word-shift"),
                i = t.width() + 10;
            t.css("width", i)
        } else if (!e.hasClass("type")) {
            var n = e.find(".word-shift b"),
                o = 0;
            n.each(function() {
                var e = $(this).width();
                o < e && (o = e)
            }), e.find(".word-shift").css("width", o)
        }
        setTimeout(function() {
            hideWord(e.find(".is-visible").eq(0))
        }, r)
    })
}

function hideWord(e) {
    var t = takeNext(e);
    if (e.parents(".shift").hasClass("type")) {
        var i = e.parent(".word-shift");
        i.addClass("selected").removeClass("waiting"), setTimeout(function() {
            i.removeClass("selected"), e.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
        }, selectionDuration), setTimeout(function() {
            showWord(t, typeLettersDelay)
        }, typeAnimationDelay)
    } else if (e.parents(".shift").hasClass("letters")) {
        var n = e.children("i").length >= t.children("i").length;
        hideLetter(e.find("i").eq(0), e, n, lettersDelay), showLetter(t.find("i").eq(0), t, n, lettersDelay)
    } else e.parents(".shift").hasClass("clip") ? e.parents(".word-shift").animate({
        width: "2px"
    }, revealDuration, function() {
        switchWord(e, t), showWord(t)
    }) : e.parents(".shift").hasClass("loading-bar") ? (e.parents(".word-shift").removeClass("is-loading"), switchWord(e, t), setTimeout(function() {
        hideWord(t)
    }, barAnimationDelay), setTimeout(function() {
        e.parents(".word-shift").addClass("is-loading")
    }, barWaiting)) : (switchWord(e, t), setTimeout(function() {
        hideWord(t)
    }, animationDelay))
}

function showWord(e, t) {
    e.parents(".shift").hasClass("type") ? (showLetter(e.find("i").eq(0), e, !1, t), e.addClass("is-visible").removeClass("is-hidden")) : e.parents(".shift").hasClass("clip") && e.parents(".word-shift").animate({
        width: e.width() + 10
    }, revealDuration, function() {
        setTimeout(function() {
            hideWord(e)
        }, revealAnimationDelay)
    })
}

function takeNext(e) {
    return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
}

function takePrev(e) {
    return e.is(":first-child") ? e.parent().children().last() : e.prev()
}

function switchWord(e, t) {
    e.removeClass("is-visible").addClass("is-hidden"), t.removeClass("is-hidden").addClass("is-visible")
}
initHeadline();

// Ensure the DOM is fully loaded before running the script
$(document).ready(function () {
    // Click event for toggling the modal
    $('.modal-toggle').click(function (event) {
        event.preventDefault(); // Prevent link default action
        $('.modal').toggleClass('modal-show'); // Show or hide the modal
        $('body').toggleClass('no-scroll'); // Disable scrolling when modal is open
    });

    // Close modal when clicking outside modal-content
    $(document).click(function (event) {
        if ($(event.target).closest('.modal-content').length === 0 && 
            $(event.target).closest('.modal-toggle').length === 0) {
            $('.modal').removeClass('modal-show');
            $('body').removeClass('no-scroll');
        }
    });
});
