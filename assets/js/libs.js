require = (function i(a, l, s) {
  function u(t, e) {
    if (!l[t]) {
      if (!a[t]) {
        var n = "function" == typeof require && require;
        if (!e && n) return n(t, !0);
        if (c) return c(t, !0);
        var o = new Error("Cannot find module '" + t + "'");
        throw ((o.code = "MODULE_NOT_FOUND"), o);
      }
      var r = (l[t] = { exports: {} });
      a[t][0].call(
        r.exports,
        function (e) {
          return u(a[t][1][e] || e);
        },
        r,
        r.exports,
        i,
        a,
        l,
        s
      );
    }
    return l[t].exports;
  }
  for (
    var c = "function" == typeof require && require, e = 0;
    e < s.length;
    e++
  )
    u(s[e]);
  return u;
})(
  {
    "wtc-controller-element": [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var l =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          o = (function () {
            function o(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (e, t, n) {
              return t && o(e.prototype, t), n && o(e, n), e;
            };
          })();
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        var i = new Map(),
          a = (function () {
            function a() {
              r(this, a);
            }
            return (
              o(a, null, [
                {
                  key: "instanciateAll",
                  value: function () {
                    var e =
                        0 < arguments.length && void 0 !== arguments[0]
                          ? arguments[0]
                          : "[data-controller]",
                      t =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : "data-controller",
                      n =
                        2 < arguments.length &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      o = null;
                    if ("string" == typeof e) o = document.querySelectorAll(e);
                    else if ("object" === (void 0 === e ? "undefined" : l(e))) {
                      if (!e.hasOwnProperty("el"))
                        throw 'Instanciate all is missing the DOMNode. Ex: instanciateAll({el: DOMNode, query: "[data-controller]"})';
                      e.hasOwnProperty("query") ||
                        (e.query = "[data-controller]"),
                        (o = e.el.querySelectorAll(e.query));
                    }
                    if (0 < o.length)
                      for (var r = 0; r < o.length; r++) {
                        var i = o[r];
                        i.getAttribute(t) &&
                          a.instanciate(i, i.getAttribute(t), n);
                      }
                  }
                },
                {
                  key: "instanciate",
                  value: function () {
                    var e =
                        0 < arguments.length && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      n =
                        2 < arguments.length &&
                        void 0 !== arguments[2] &&
                        arguments[2],
                      o = t;
                    try {
                      if ("string" == typeof t) {
                        if (e.data && e.data.instanciated)
                          throw new Error(
                            "The element with the controller '" +
                              t +
                              "' has already been instanciated. This error is non-critical and just means that something has tried to instanciate it twice."
                          );
                        if (!i.has(t))
                          throw new Error(
                            "The controller '" +
                              t +
                              "' has not been registered. Please make sure the controller is registering itself using ExecuteController.registerController(CLASS, 'OPTIONAL-NAME')."
                          );
                        if (((o = i.get(t)), !n)) {
                          new o(e, e.dataset);
                          return e;
                        }
                      }
                    } catch (e) {
                      console.warn("Error: " + e.message, e.stack);
                    }
                    if (n) {
                      new o(e, e.dataset);
                      return e;
                    }
                  }
                },
                {
                  key: "registerController",
                  value: function (e) {
                    var t =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : "";
                    try {
                      if (!t)
                        throw "Controller name is required. Ex: ExecuteControllers.registerController(TestController, 'TestController');";
                      i.has(t)
                        ? console.warn(
                            "Controller " + t + " is already registered."
                          )
                        : i.set(t, e);
                    } catch (e) {}
                  }
                },
                {
                  key: "controllersList",
                  get: function () {
                    return i;
                  }
                }
              ]),
              a
            );
          })(),
          s = (function () {
            function t(e) {
              r(this, t),
                (this.element = e),
                (this.element.data = this.element.data || {}),
                ((this.element.data.controller = this).element.data.instanciated = !0);
            }
            return (
              o(t, [
                {
                  key: "elementExistsInDOM",
                  value: function () {
                    var e = void 0;
                    if (!(this.element || null)) return !1;
                    for (e = this.element; e; ) {
                      if (e === document) return !0;
                      e = e.parentNode;
                    }
                    return !1;
                  }
                }
              ]),
              t
            );
          })();
        (n.default = s), (n.ExecuteControllers = a);
      },
      {}
    ],
    "wtc-modal-view": [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o,
          r = (function () {
            function o(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (e, t, n) {
              return t && o(e.prototype, t), n && o(e, n), e;
            };
          })(),
          i = e("wtc-utility-helpers"),
          p = (o = i) && o.__esModule ? o : { default: o };
        var a = null,
          l = (function () {
            function m() {
              return (
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, m),
                a ||
                  ((this.state = !1),
                  (this.modal = document.createElement("modal")),
                  (this.modalOverlay = document.createElement("div")),
                  (this.modalClose = document.createElement("button")),
                  (this.modalClose.innerHTML = "Close"),
                  (this.modalWrapper = document.createElement("div")),
                  (this.modalContent = document.createElement("div")),
                  (this.className = "modal"),
                  (this.optionalClass = null),
                  (this.appended = !1),
                  (this.onOpen = null),
                  (this.onClose = null),
                  p.default.addClass(this.className, this.modal),
                  p.default.addClass(
                    this.className + "__overlay",
                    this.modalOverlay
                  ),
                  p.default.addClass(
                    this.className + "__close",
                    this.modalClose
                  ),
                  p.default.addClass(
                    this.className + "__wrapper",
                    this.modalWrapper
                  ),
                  p.default.addClass(
                    this.className + "__content",
                    this.modalContent
                  ),
                  this.modalWrapper.appendChild(this.modalClose),
                  this.modalWrapper.appendChild(this.modalContent),
                  this.modal.appendChild(this.modalOverlay),
                  this.modal.appendChild(this.modalWrapper),
                  document.body.appendChild(this.modal),
                  (a = this).modalClose.addEventListener("click", function (e) {
                    m.close();
                  }),
                  this.modalOverlay.addEventListener("click", function (e) {
                    m.close();
                  }),
                  this)
              );
            }
            return (
              r(m, null, [
                {
                  key: "close",
                  value: function () {
                    var e = m.instance;
                    return (
                      e.state &&
                        (p.default.removeClass("is-open", e.modal),
                        setTimeout(function () {
                          e.optionalClass &&
                            (p.default.removeClass(e.optionalClass, e.modal),
                            (e.optionalClass = null)),
                            (e.state = !1),
                            (e.modalContent.innerHTML = "");
                        }, 500),
                        m.hash &&
                          history.replaceState(
                            "",
                            document.title,
                            window.location.pathname
                          ),
                        e.onClose && e.onClose(),
                        p.default.fireCustomEvent("wtc-modal-close", {
                          modal: this
                        })),
                      e
                    );
                  }
                },
                {
                  key: "open",
                  value: function (e, t) {
                    var n = this,
                      o = m.instance;
                    return (
                      o.state ||
                        (e &&
                          ("string" == typeof e
                            ? (o.modalContent.innerHTML = e)
                            : o.modalContent.appendChild(e)),
                        t &&
                          (p.default.addClass(t, o.modal),
                          (o.optionalClass = t)),
                        o.appended
                          ? p.default.addClass("is-open", o.modal)
                          : ((o.appended = !0),
                            setTimeout(function () {
                              p.default.addClass("is-open", o.modal);
                            }, 100)),
                        (o.state = !0),
                        o.onOpen && o.onOpen(),
                        (this.onKeyDown = function (e) {
                          27 == e.keyCode &&
                            (m.close(),
                            document.removeEventListener(
                              "keydown",
                              n.onKeyDown,
                              !1
                            ));
                        }),
                        document.addEventListener(
                          "keydown",
                          this.onKeyDown,
                          !1
                        ),
                        p.default.fireCustomEvent("wtc-modal-open", {
                          modal: this
                        })),
                      o
                    );
                  }
                },
                {
                  key: "openRetailer",
                  value: function () {
                    var e =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    e && m.open(e, "modal--retailer");
                  }
                },
                {
                  key: "openVideo",
                  value: function () {
                    var e =
                        0 < arguments.length && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0.85,
                      n =
                        2 < arguments.length && void 0 !== arguments[2]
                          ? arguments[2]
                          : 16 / 9,
                      o = m.instance,
                      r = o.modalContent,
                      i = document.createElement("div"),
                      a = getComputedStyle(r),
                      l =
                        parseFloat(a.paddingLeft) + parseFloat(a.paddingRight),
                      s =
                        parseFloat(a.borderLeftWidth) +
                        parseFloat(a.borderRightWidth),
                      u = r.offsetWidth - l - s,
                      c = e.width || u,
                      d = window.innerHeight * t;
                    c > document.body.clientWidth * t &&
                      (c = document.body.clientWidth * t);
                    var f = c / n;
                    d + 100 > window.innerHeight && (d -= 80),
                      d < f && (c = (f = d) * n);
                    var h = p.default.extend(
                      {
                        target: i,
                        videoId: null,
                        name: "",
                        autoplay: !0,
                        width: c,
                        height: f,
                        initialBitrate: { level: 1, duration: 30 },
                        chromeless: !0
                      },
                      e
                    );
                    r.appendChild(i);
                    new nclood.Video(h);
                    return (
                      e.hash && (window.location.hash = "!/" + e.hash + "/"),
                      m.open(null, "modal--video"),
                      o
                    );
                  }
                },
                {
                  key: "hash",
                  get: function () {
                    var e = /#\!?\/(.+)\//i.exec(window.location.hash);
                    return e && 1 < e.length ? e[1] : null;
                  }
                },
                {
                  key: "onOpen",
                  set: function () {
                    var e =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    if ("function" != typeof e) throw "Must be a function";
                    return (this.instance.onOpen = e), this.instance;
                  }
                },
                {
                  key: "onClose",
                  set: function () {
                    var e =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    if ("function" != typeof e) throw "Must be a function";
                    return (this.instance.onClose = e), this.instance;
                  }
                },
                {
                  key: "modal",
                  get: function () {
                    return this.instance.modal;
                  }
                },
                {
                  key: "modalContent",
                  get: function () {
                    return this.instance.modalContent;
                  }
                },
                {
                  key: "instance",
                  get: function () {
                    return a || (a = new m()), a;
                  }
                }
              ]),
              m
            );
          })();
        n.default = l;
      },
      { "wtc-utility-helpers": "wtc-utility-helpers" }
    ],
    "wtc-utility-breakpoint": [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o = (function () {
          function o(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (e, t, n) {
            return t && o(e.prototype, t), n && o(e, n), e;
          };
        })();
        var r = new Map();
        r.set("S", 1),
          r.set("M", 2),
          r.set("L", 3),
          r.set("XL", 4),
          r.set("XXL", 5);
        var i = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e);
          }
          return (
            o(e, null, [
              {
                key: "current",
                get: function () {
                  return r.get(
                    getComputedStyle(
                      document.querySelector("body"),
                      "::after"
                    ).content.replace(/'|"/gi, "")
                  );
                }
              }
            ]),
            e
          );
        })();
        (i.BREAKPOINTS = r), (n.default = i);
      },
      {}
    ],
    "wtc-utility-helpers": [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        var o = (function () {
            function o(e, t) {
              for (var n = 0; n < t.length; n++) {
                var o = t[n];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (e, t, n) {
              return t && o(e.prototype, t), n && o(e, n), e;
            };
          })(),
          r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                };
        var i = {
            floatRandomBetween: function (e, t) {
              return Math.random() * (t - e + 1) + e;
            },
            randomBetween: function (e, t) {
              return Math.floor(i.floatRandomBetween(e, t));
            },
            lerp: function (e, t, n) {
              return (1 - n) * e + n * t;
            },
            getStyle: function (e, t, n) {
              var o = "";
              if (window.getComputedStyle)
                o = getComputedStyle(e).getPropertyValue(t);
              else if (e.currentStyle)
                try {
                  o = e.currentStyle[t];
                } catch (e) {}
              return n && (o = parseInt(o)), o;
            },
            log: function (e, t) {
              var n, o;
              switch (e) {
                case "success":
                  (o = "Green"), (n = "LimeGreen");
                  break;
                case "info":
                  (o = "DodgerBlue"), (n = "Turquoise");
                  break;
                case "error":
                  (o = "Black"), (n = "Red");
                  break;
                case "warning":
                  (o = "Tomato"), (n = "Gold");
                  break;
                default:
                  (o = "black"), (n = "White");
              }
              "object" === (void 0 === t ? "undefined" : r(t))
                ? console.log(t)
                : console.log(
                    "%c" + t,
                    "color:" +
                      o +
                      ";font-weight:bold; background-color: " +
                      n +
                      ";"
                  );
            },
            once: function (e, t, n) {
              e.addEventListener(t, function (e) {
                return (
                  e.target.removeEventListener(e.type, arguments.callee), n(e)
                );
              });
            },
            shuffleArray: function (e) {
              for (var t, n, o = e.length; 0 !== o; )
                (n = Math.floor(Math.random() * o)),
                  (t = e[(o -= 1)]),
                  (e[o] = e[n]),
                  (e[n] = t);
              return e;
            },
            fireCustomEvent: function (e, t, n, o) {
              var r,
                i = {
                  bubbles: n || !0,
                  cancelable: o || !0,
                  detail: t || null
                };
              "function" == typeof window.CustomEvent
                ? (r = new CustomEvent(e, i))
                : (r = document.createEvent("CustomEvent")).initCustomEvent(
                    e,
                    i.bubbles,
                    i.cancelable,
                    i.detail
                  ),
                window.dispatchEvent(r);
            },
            forEachNode: function (e, t, n) {
              for (var o = 0; o < e.length; o++) t.call(n, o, e[o]);
            },
            getElementPosition: function (e) {
              var t = e.getBoundingClientRect(),
                n = window.pageYOffset,
                o = window.pageXOffset,
                r = document.body.clientTop || 0,
                i = document.body.clientLeft || 0,
                a = t.top + n - r,
                l = t.left + o - i;
              return { top: Math.round(a), left: Math.round(l) };
            },
            getViewportDimensions: function () {
              return {
                width: Math.max(
                  document.documentElement.clientWidth,
                  window.innerWidth || 0
                ),
                height: Math.max(
                  document.documentElement.clientHeight,
                  window.innerHeight || 0
                )
              };
            },
            classExtend: function (e, t) {
              var n = {}.hasOwnProperty;
              for (var o in t) n.call(t, o) && (e[o] = t[o]);
              function r() {
                this.constructor = e;
              }
              return (
                (r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.__super__ = t.prototype),
                e
              );
            },
            hasClass: function (e, t) {
              var n, o, r, i, a, l;
              if (((o = e.split(" ")), t.classList)) {
                for (r = 0, a = o.length; r < a; r++)
                  if (((n = o[r]), !0 === t.classList.contains(n))) return !0;
              } else
                for (i = 0, l = o.length; i < l; i++)
                  if (
                    ((n = o[i]),
                    new RegExp("(^| )" + n + "( |$)", "gi").test(t.c))
                  )
                    return !0;
              return !1;
            },
            removeClass: function (e, t) {
              var n, o, r, i, a;
              if (((n = e.split(" ")), t.classList))
                for (o = 0, i = n.length; o < i; o++)
                  (e = n[o]), t.classList.remove(e);
              else
                for (r = 0, a = n.length; r < a; r++)
                  (e = n[r]),
                    (t.className = t.className.replace(
                      new RegExp(
                        "(^|\\b)" + e.split(" ").join("|") + "(\\b|$)",
                        "gi"
                      ),
                      " "
                    ));
            },
            addClass: function (e, t) {
              var n, o, r, i, a;
              if (((n = e.split(" ")), t.classList))
                for (o = 0, i = n.length; o < i; o++)
                  (e = n[o]), t.classList.add(e);
              else
                for (r = 0, a = n.length; r < a; r++)
                  (e = n[r]), (t.className += " " + e);
            },
            getSiblings: function (t) {
              return Array.prototype.filter.call(
                t.parentNode.children,
                function (e) {
                  return e !== t;
                }
              );
            },
            matches: function () {
              var e;
              return (
                (e = document.documentElement).matchesSelector ||
                e.webkitMatchesSelector ||
                e.mozMatchesSelector ||
                e.oMatchesSelector ||
                e.msMatchesSelector
              );
            },
            extend: function (e, t) {
              var n = {},
                o = null;
              for (o in e) e.hasOwnProperty(o) && (n[o] = e[o]);
              for (o in t) t.hasOwnProperty(o) && (n[o] = t[o]);
              return n;
            },
            deepExtend: function () {
              if (Object.assign) return Object.assign.apply(Object, arguments);
              for (
                var e = arguments[0] || {}, t = 0, n = null;
                t++ < arguments.length;

              ) {
                var o = arguments[t];
                if (o && "object" == (void 0 === o ? "undefined" : r(o)))
                  for (n in o)
                    o.hasOwnProperty(n) &&
                      ("object" == r(o[n]) && null != o[n]
                        ? (e[n] = i.deepExtend(e[n], o[n]))
                        : (e[n] = o[n]));
              }
              return e;
            },
            getSelectorForElement: function (e) {
              for (var t = []; e.parentNode; ) {
                if (e.id) {
                  t.unshift("#" + e.id);
                  break;
                }
                if (e == e.ownerDocument.documentElement) t.unshift(e.tagName);
                else {
                  for (
                    var n = 1, o = e;
                    o.previousElementSibling;
                    o = o.previousElementSibling, n++
                  );
                  t.unshift(e.tagName + ":nth-child(" + n + ")");
                }
                e = e.parentNode;
              }
              return t.join(" > ");
            }
          },
          a = (function () {
            function e() {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                this.start();
            }
            return (
              o(e, [
                {
                  key: "start",
                  value: function () {
                    !0 !== this.running &&
                      ((this.elapsedTime = 0),
                      (this.lastTime = 0),
                      (this.current = 0),
                      (this.low = 60),
                      (this.averageOverall = 60),
                      (this.average60 = 60),
                      (this.ticks = 0),
                      (this.running = !0),
                      requestAnimationFrame(this.run.bind(this)));
                  }
                },
                {
                  key: "stop",
                  value: function () {
                    this.running = !1;
                  }
                },
                {
                  key: "run",
                  value: function (e) {
                    var t = void 0;
                    (this.elapsedTime = (e - (this.lastTime || e)) / 1e3),
                      (this.lastTime = e),
                      (this.ticks += 1),
                      (this.current = 1 / this.elapsedTime),
                      this.current < this.low && (this.low = this.current),
                      isNaN(parseInt(this.current)) ||
                        ((this.averageOverall =
                          (this.ticks * this.averageOverall + this.current) /
                          (this.ticks + 1)),
                        this.ticks % 60 == 0 && (this.average60 = 60),
                        (t = (this.ticks % 60) + 1),
                        (this.average60 =
                          (t * this.average60 + this.current) / (t + 1))),
                      !0 === this.running &&
                        requestAnimationFrame(this.run.bind(this));
                  }
                }
              ]),
              e
            );
          })(),
          l = null;
        (i.getFPSMeasure = function () {
          return null === l && (l = new a()), l;
        }),
          (i.fixWidows = function (e) {
            if (
              ((_els = e) instanceof Node && (_els = [e]), _els && _els.length)
            )
              for (var t = 0; t < _els.length; t++) {
                var n = _els[t];
                n instanceof Node &&
                  (n.innerHTML = n.innerHTML.replace(
                    /\s(?=[^\s]*$)/g,
                    "&nbsp;"
                  ));
              }
          }),
          (n.default = i);
      },
      {}
    ]
  },
  {},
  []
);
