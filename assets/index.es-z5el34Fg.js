const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/index-Cwf3_-uA.js",
      "assets/index-CIemvVq0.js",
      "assets/index-CtAEBL-m.css",
    ])
) => i.map((i) => d[i]);
import { a as Rg, g as $l, c as Ui, _ as l_ } from "./index-CIemvVq0.js";
import { e as Ai, G as Fl } from "./events-CG5JEXvt.js";
import { r as f_ } from "./___vite-browser-external_commonjs-proxy-CHYCtLSY.js";
var v0 = function (r, e, t) {
    if (t || arguments.length === 2)
      for (var i = 0, s = e.length, a; i < s; i++)
        (a || !(i in e)) &&
          (a || (a = Array.prototype.slice.call(e, 0, i)), (a[i] = e[i]));
    return r.concat(a || Array.prototype.slice.call(e));
  },
  d_ = (function () {
    function r(e, t, i) {
      (this.name = e),
        (this.version = t),
        (this.os = i),
        (this.type = "browser");
    }
    return r;
  })(),
  p_ = (function () {
    function r(e) {
      (this.version = e),
        (this.type = "node"),
        (this.name = "node"),
        (this.os = process.platform);
    }
    return r;
  })(),
  g_ = (function () {
    function r(e, t, i, s) {
      (this.name = e),
        (this.version = t),
        (this.os = i),
        (this.bot = s),
        (this.type = "bot-device");
    }
    return r;
  })(),
  m_ = (function () {
    function r() {
      (this.type = "bot"),
        (this.bot = !0),
        (this.name = "bot"),
        (this.version = null),
        (this.os = null);
    }
    return r;
  })(),
  v_ = (function () {
    function r() {
      (this.type = "react-native"),
        (this.name = "react-native"),
        (this.version = null),
        (this.os = null);
    }
    return r;
  })(),
  y_ =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  w_ =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  y0 = 3,
  b_ = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", y_],
  ],
  w0 = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function __(r) {
  return typeof document > "u" &&
    typeof navigator < "u" &&
    navigator.product === "ReactNative"
    ? new v_()
    : typeof navigator < "u"
    ? A_(navigator.userAgent)
    : I_();
}
function E_(r) {
  return (
    r !== "" &&
    b_.reduce(function (e, t) {
      var i = t[0],
        s = t[1];
      if (e) return e;
      var a = s.exec(r);
      return !!a && [i, a];
    }, !1)
  );
}
function A_(r) {
  var e = E_(r);
  if (!e) return null;
  var t = e[0],
    i = e[1];
  if (t === "searchbot") return new m_();
  var s = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  s
    ? s.length < y0 && (s = v0(v0([], s, !0), D_(y0 - s.length), !0))
    : (s = []);
  var a = s.join("."),
    u = S_(r),
    h = w_.exec(r);
  return h && h[1] ? new g_(t, a, u, h[1]) : new d_(t, a, u);
}
function S_(r) {
  for (var e = 0, t = w0.length; e < t; e++) {
    var i = w0[e],
      s = i[0],
      a = i[1],
      u = a.exec(r);
    if (u) return s;
  }
  return null;
}
function I_() {
  var r = typeof process < "u" && process.version;
  return r ? new p_(process.version.slice(1)) : null;
}
function D_(r) {
  for (var e = [], t = 0; t < r; t++) e.push("0");
  return e;
}
var ye = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var hl =
  function (r, e) {
    return (
      (hl =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, i) {
            t.__proto__ = i;
          }) ||
        function (t, i) {
          for (var s in i) i.hasOwnProperty(s) && (t[s] = i[s]);
        }),
      hl(r, e)
    );
  };
function x_(r, e) {
  hl(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var ll = function () {
  return (
    (ll =
      Object.assign ||
      function (e) {
        for (var t, i = 1, s = arguments.length; i < s; i++) {
          t = arguments[i];
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      }),
    ll.apply(this, arguments)
  );
};
function P_(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      e.indexOf(i) < 0 &&
      (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(r); s < i.length; s++)
      e.indexOf(i[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[s]) &&
        (t[i[s]] = r[i[s]]);
  return t;
}
function M_(r, e, t, i) {
  var s = arguments.length,
    a =
      s < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(r, e, t, i);
  else
    for (var h = r.length - 1; h >= 0; h--)
      (u = r[h]) && (a = (s < 3 ? u(a) : s > 3 ? u(e, t, a) : u(e, t)) || a);
  return s > 3 && a && Object.defineProperty(e, t, a), a;
}
function C_(r, e) {
  return function (t, i) {
    e(t, i, r);
  };
}
function O_(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, e);
}
function N_(r, e, t, i) {
  function s(a) {
    return a instanceof t
      ? a
      : new t(function (u) {
          u(a);
        });
  }
  return new (t || (t = Promise))(function (a, u) {
    function h(b) {
      try {
        d(i.next(b));
      } catch (E) {
        u(E);
      }
    }
    function p(b) {
      try {
        d(i.throw(b));
      } catch (E) {
        u(E);
      }
    }
    function d(b) {
      b.done ? a(b.value) : s(b.value).then(h, p);
    }
    d((i = i.apply(r, e || [])).next());
  });
}
function R_(r, e) {
  var t = {
      label: 0,
      sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: [],
    },
    i,
    s,
    a,
    u;
  return (
    (u = { next: h(0), throw: h(1), return: h(2) }),
    typeof Symbol == "function" &&
      (u[Symbol.iterator] = function () {
        return this;
      }),
    u
  );
  function h(d) {
    return function (b) {
      return p([d, b]);
    };
  }
  function p(d) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((i = 1),
          s &&
            (a =
              d[0] & 2
                ? s.return
                : d[0]
                ? s.throw || ((a = s.return) && a.call(s), 0)
                : s.next) &&
            !(a = a.call(s, d[1])).done)
        )
          return a;
        switch (((s = 0), a && (d = [d[0] & 2, a.value]), d[0])) {
          case 0:
          case 1:
            a = d;
            break;
          case 4:
            return t.label++, { value: d[1], done: !1 };
          case 5:
            t.label++, (s = d[1]), (d = [0]);
            continue;
          case 7:
            (d = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((a = t.trys),
              !(a = a.length > 0 && a[a.length - 1]) &&
                (d[0] === 6 || d[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (d[0] === 3 && (!a || (d[1] > a[0] && d[1] < a[3]))) {
              t.label = d[1];
              break;
            }
            if (d[0] === 6 && t.label < a[1]) {
              (t.label = a[1]), (a = d);
              break;
            }
            if (a && t.label < a[2]) {
              (t.label = a[2]), t.ops.push(d);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        d = e.call(r, t);
      } catch (b) {
        (d = [6, b]), (s = 0);
      } finally {
        i = a = 0;
      }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}
function T_(r, e, t, i) {
  i === void 0 && (i = t), (r[i] = e[t]);
}
function U_(r, e) {
  for (var t in r) t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function fl(r) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && r[e],
    i = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function () {
        return (
          r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function Tg(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var i = t.call(r),
    s,
    a = [],
    u;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = i.next()).done; ) a.push(s.value);
  } catch (h) {
    u = { error: h };
  } finally {
    try {
      s && !s.done && (t = i.return) && t.call(i);
    } finally {
      if (u) throw u.error;
    }
  }
  return a;
}
function B_() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(Tg(arguments[e]));
  return r;
}
function L_() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), s = 0, e = 0; e < t; e++)
    for (var a = arguments[e], u = 0, h = a.length; u < h; u++, s++)
      i[s] = a[u];
  return i;
}
function ta(r) {
  return this instanceof ta ? ((this.v = r), this) : new ta(r);
}
function q_(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []),
    s,
    a = [];
  return (
    (s = {}),
    u("next"),
    u("throw"),
    u("return"),
    (s[Symbol.asyncIterator] = function () {
      return this;
    }),
    s
  );
  function u(D) {
    i[D] &&
      (s[D] = function (S) {
        return new Promise(function (M, W) {
          a.push([D, S, M, W]) > 1 || h(D, S);
        });
      });
  }
  function h(D, S) {
    try {
      p(i[D](S));
    } catch (M) {
      E(a[0][3], M);
    }
  }
  function p(D) {
    D.value instanceof ta
      ? Promise.resolve(D.value.v).then(d, b)
      : E(a[0][2], D);
  }
  function d(D) {
    h("next", D);
  }
  function b(D) {
    h("throw", D);
  }
  function E(D, S) {
    D(S), a.shift(), a.length && h(a[0][0], a[0][1]);
  }
}
function j_(r) {
  var e, t;
  return (
    (e = {}),
    i("next"),
    i("throw", function (s) {
      throw s;
    }),
    i("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function i(s, a) {
    e[s] = r[s]
      ? function (u) {
          return (t = !t)
            ? { value: ta(r[s](u)), done: s === "return" }
            : a
            ? a(u)
            : u;
        }
      : a;
  }
}
function $_(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator],
    t;
  return e
    ? e.call(r)
    : ((r = typeof fl == "function" ? fl(r) : r[Symbol.iterator]()),
      (t = {}),
      i("next"),
      i("throw"),
      i("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function i(a) {
    t[a] =
      r[a] &&
      function (u) {
        return new Promise(function (h, p) {
          (u = r[a](u)), s(h, p, u.done, u.value);
        });
      };
  }
  function s(a, u, h, p) {
    Promise.resolve(p).then(function (d) {
      a({ value: d, done: h });
    }, u);
  }
}
function F_(r, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(r, "raw", { value: e })
      : (r.raw = e),
    r
  );
}
function z_(r) {
  if (r && r.__esModule) return r;
  var e = {};
  if (r != null)
    for (var t in r) Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return (e.default = r), e;
}
function k_(r) {
  return r && r.__esModule ? r : { default: r };
}
function H_(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function K_(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
const V_ = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return ll;
        },
        __asyncDelegator: j_,
        __asyncGenerator: q_,
        __asyncValues: $_,
        __await: ta,
        __awaiter: N_,
        __classPrivateFieldGet: H_,
        __classPrivateFieldSet: K_,
        __createBinding: T_,
        __decorate: M_,
        __exportStar: U_,
        __extends: x_,
        __generator: R_,
        __importDefault: k_,
        __importStar: z_,
        __makeTemplateObject: F_,
        __metadata: O_,
        __param: C_,
        __read: Tg,
        __rest: P_,
        __spread: B_,
        __spreadArrays: L_,
        __values: fl,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  nu = Rg(V_);
var Ph = {},
  qo = {},
  b0;
function G_() {
  if (b0) return qo;
  (b0 = 1),
    Object.defineProperty(qo, "__esModule", { value: !0 }),
    (qo.delay = void 0);
  function r(e) {
    return new Promise((t) => {
      setTimeout(() => {
        t(!0);
      }, e);
    });
  }
  return (qo.delay = r), qo;
}
var ms = {},
  Mh = {},
  vs = {},
  _0;
function W_() {
  return (
    _0 ||
      ((_0 = 1),
      Object.defineProperty(vs, "__esModule", { value: !0 }),
      (vs.ONE_THOUSAND = vs.ONE_HUNDRED = void 0),
      (vs.ONE_HUNDRED = 100),
      (vs.ONE_THOUSAND = 1e3)),
    vs
  );
}
var Ch = {},
  E0;
function Y_() {
  return (
    E0 ||
      ((E0 = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          (r.ONE_YEAR =
            r.FOUR_WEEKS =
            r.THREE_WEEKS =
            r.TWO_WEEKS =
            r.ONE_WEEK =
            r.THIRTY_DAYS =
            r.SEVEN_DAYS =
            r.FIVE_DAYS =
            r.THREE_DAYS =
            r.ONE_DAY =
            r.TWENTY_FOUR_HOURS =
            r.TWELVE_HOURS =
            r.SIX_HOURS =
            r.THREE_HOURS =
            r.ONE_HOUR =
            r.SIXTY_MINUTES =
            r.THIRTY_MINUTES =
            r.TEN_MINUTES =
            r.FIVE_MINUTES =
            r.ONE_MINUTE =
            r.SIXTY_SECONDS =
            r.THIRTY_SECONDS =
            r.TEN_SECONDS =
            r.FIVE_SECONDS =
            r.ONE_SECOND =
              void 0),
          (r.ONE_SECOND = 1),
          (r.FIVE_SECONDS = 5),
          (r.TEN_SECONDS = 10),
          (r.THIRTY_SECONDS = 30),
          (r.SIXTY_SECONDS = 60),
          (r.ONE_MINUTE = r.SIXTY_SECONDS),
          (r.FIVE_MINUTES = r.ONE_MINUTE * 5),
          (r.TEN_MINUTES = r.ONE_MINUTE * 10),
          (r.THIRTY_MINUTES = r.ONE_MINUTE * 30),
          (r.SIXTY_MINUTES = r.ONE_MINUTE * 60),
          (r.ONE_HOUR = r.SIXTY_MINUTES),
          (r.THREE_HOURS = r.ONE_HOUR * 3),
          (r.SIX_HOURS = r.ONE_HOUR * 6),
          (r.TWELVE_HOURS = r.ONE_HOUR * 12),
          (r.TWENTY_FOUR_HOURS = r.ONE_HOUR * 24),
          (r.ONE_DAY = r.TWENTY_FOUR_HOURS),
          (r.THREE_DAYS = r.ONE_DAY * 3),
          (r.FIVE_DAYS = r.ONE_DAY * 5),
          (r.SEVEN_DAYS = r.ONE_DAY * 7),
          (r.THIRTY_DAYS = r.ONE_DAY * 30),
          (r.ONE_WEEK = r.SEVEN_DAYS),
          (r.TWO_WEEKS = r.ONE_WEEK * 2),
          (r.THREE_WEEKS = r.ONE_WEEK * 3),
          (r.FOUR_WEEKS = r.ONE_WEEK * 4),
          (r.ONE_YEAR = r.ONE_DAY * 365);
      })(Ch)),
    Ch
  );
}
var A0;
function Ug() {
  return (
    A0 ||
      ((A0 = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        const e = nu;
        e.__exportStar(W_(), r), e.__exportStar(Y_(), r);
      })(Mh)),
    Mh
  );
}
var S0;
function Q_() {
  if (S0) return ms;
  (S0 = 1),
    Object.defineProperty(ms, "__esModule", { value: !0 }),
    (ms.fromMiliseconds = ms.toMiliseconds = void 0);
  const r = Ug();
  function e(i) {
    return i * r.ONE_THOUSAND;
  }
  ms.toMiliseconds = e;
  function t(i) {
    return Math.floor(i / r.ONE_THOUSAND);
  }
  return (ms.fromMiliseconds = t), ms;
}
var I0;
function J_() {
  return (
    I0 ||
      ((I0 = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 });
        const e = nu;
        e.__exportStar(G_(), r), e.__exportStar(Q_(), r);
      })(Ph)),
    Ph
  );
}
var Ws = {},
  D0;
function X_() {
  if (D0) return Ws;
  (D0 = 1),
    Object.defineProperty(Ws, "__esModule", { value: !0 }),
    (Ws.Watch = void 0);
  class r {
    constructor() {
      this.timestamps = new Map();
    }
    start(t) {
      if (this.timestamps.has(t))
        throw new Error(`Watch already started for label: ${t}`);
      this.timestamps.set(t, { started: Date.now() });
    }
    stop(t) {
      const i = this.get(t);
      if (typeof i.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${t}`);
      const s = Date.now() - i.started;
      this.timestamps.set(t, { started: i.started, elapsed: s });
    }
    get(t) {
      const i = this.timestamps.get(t);
      if (typeof i > "u") throw new Error(`No timestamp found for label: ${t}`);
      return i;
    }
    elapsed(t) {
      const i = this.get(t);
      return i.elapsed || Date.now() - i.started;
    }
  }
  return (Ws.Watch = r), (Ws.default = r), Ws;
}
var Oh = {},
  jo = {},
  x0;
function Z_() {
  if (x0) return jo;
  (x0 = 1),
    Object.defineProperty(jo, "__esModule", { value: !0 }),
    (jo.IWatch = void 0);
  class r {}
  return (jo.IWatch = r), jo;
}
var P0;
function e6() {
  return (
    P0 ||
      ((P0 = 1),
      (function (r) {
        Object.defineProperty(r, "__esModule", { value: !0 }),
          nu.__exportStar(Z_(), r);
      })(Oh)),
    Oh
  );
}
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const e = nu;
  e.__exportStar(J_(), r),
    e.__exportStar(X_(), r),
    e.__exportStar(e6(), r),
    e.__exportStar(Ug(), r);
})(ye);
var $t = {};
Object.defineProperty($t, "__esModule", { value: !0 });
$t.getLocalStorage =
  $t.getLocalStorageOrThrow =
  $t.getCrypto =
  $t.getCryptoOrThrow =
  Bg =
  $t.getLocation =
  $t.getLocationOrThrow =
  kl =
  $t.getNavigator =
  $t.getNavigatorOrThrow =
  zl =
  $t.getDocument =
  $t.getDocumentOrThrow =
  $t.getFromWindowOrThrow =
  $t.getFromWindow =
    void 0;
function Is(r) {
  let e;
  return typeof window < "u" && typeof window[r] < "u" && (e = window[r]), e;
}
$t.getFromWindow = Is;
function uo(r) {
  const e = Is(r);
  if (!e) throw new Error(`${r} is not defined in Window`);
  return e;
}
$t.getFromWindowOrThrow = uo;
function t6() {
  return uo("document");
}
$t.getDocumentOrThrow = t6;
function r6() {
  return Is("document");
}
var zl = ($t.getDocument = r6);
function i6() {
  return uo("navigator");
}
$t.getNavigatorOrThrow = i6;
function n6() {
  return Is("navigator");
}
var kl = ($t.getNavigator = n6);
function s6() {
  return uo("location");
}
$t.getLocationOrThrow = s6;
function o6() {
  return Is("location");
}
var Bg = ($t.getLocation = o6);
function a6() {
  return uo("crypto");
}
$t.getCryptoOrThrow = a6;
function c6() {
  return Is("crypto");
}
$t.getCrypto = c6;
function u6() {
  return uo("localStorage");
}
$t.getLocalStorageOrThrow = u6;
function h6() {
  return Is("localStorage");
}
$t.getLocalStorage = h6;
var Hl = {};
Object.defineProperty(Hl, "__esModule", { value: !0 });
var Lg = (Hl.getWindowMetadata = void 0);
const M0 = $t;
function l6() {
  let r, e;
  try {
    (r = M0.getDocumentOrThrow()), (e = M0.getLocationOrThrow());
  } catch {
    return null;
  }
  function t() {
    const E = r.getElementsByTagName("link"),
      D = [];
    for (let S = 0; S < E.length; S++) {
      const M = E[S],
        W = M.getAttribute("rel");
      if (W && W.toLowerCase().indexOf("icon") > -1) {
        const G = M.getAttribute("href");
        if (G)
          if (
            G.toLowerCase().indexOf("https:") === -1 &&
            G.toLowerCase().indexOf("http:") === -1 &&
            G.indexOf("//") !== 0
          ) {
            let ee = e.protocol + "//" + e.host;
            if (G.indexOf("/") === 0) ee += G;
            else {
              const K = e.pathname.split("/");
              K.pop();
              const V = K.join("/");
              ee += V + "/" + G;
            }
            D.push(ee);
          } else if (G.indexOf("//") === 0) {
            const ee = e.protocol + G;
            D.push(ee);
          } else D.push(G);
      }
    }
    return D;
  }
  function i(...E) {
    const D = r.getElementsByTagName("meta");
    for (let S = 0; S < D.length; S++) {
      const M = D[S],
        W = ["itemprop", "property", "name"]
          .map((G) => M.getAttribute(G))
          .filter((G) => (G ? E.includes(G) : !1));
      if (W.length && W) {
        const G = M.getAttribute("content");
        if (G) return G;
      }
    }
    return "";
  }
  function s() {
    let E = i("name", "og:site_name", "og:title", "twitter:title");
    return E || (E = r.title), E;
  }
  function a() {
    return i(
      "description",
      "og:description",
      "twitter:description",
      "keywords"
    );
  }
  const u = s(),
    h = a(),
    p = e.origin,
    d = t();
  return { description: h, url: p, icons: d, name: u };
}
Lg = Hl.getWindowMetadata = l6;
var ra = {},
  f6 = (r) =>
    encodeURIComponent(r).replace(
      /[!'()*]/g,
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
    ),
  qg = "%[a-f0-9]{2}",
  C0 = new RegExp("(" + qg + ")|([^%]+?)", "gi"),
  O0 = new RegExp("(" + qg + ")+", "gi");
function dl(r, e) {
  try {
    return [decodeURIComponent(r.join(""))];
  } catch {}
  if (r.length === 1) return r;
  e = e || 1;
  var t = r.slice(0, e),
    i = r.slice(e);
  return Array.prototype.concat.call([], dl(t), dl(i));
}
function d6(r) {
  try {
    return decodeURIComponent(r);
  } catch {
    for (var e = r.match(C0) || [], t = 1; t < e.length; t++)
      (r = dl(e, t).join("")), (e = r.match(C0) || []);
    return r;
  }
}
function p6(r) {
  for (var e = { "%FE%FF": "��", "%FF%FE": "��" }, t = O0.exec(r); t; ) {
    try {
      e[t[0]] = decodeURIComponent(t[0]);
    } catch {
      var i = d6(t[0]);
      i !== t[0] && (e[t[0]] = i);
    }
    t = O0.exec(r);
  }
  e["%C2"] = "�";
  for (var s = Object.keys(e), a = 0; a < s.length; a++) {
    var u = s[a];
    r = r.replace(new RegExp(u, "g"), e[u]);
  }
  return r;
}
var g6 = function (r) {
    if (typeof r != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof r + "`"
      );
    try {
      return (r = r.replace(/\+/g, " ")), decodeURIComponent(r);
    } catch {
      return p6(r);
    }
  },
  m6 = (r, e) => {
    if (!(typeof r == "string" && typeof e == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "") return [r];
    const t = r.indexOf(e);
    return t === -1 ? [r] : [r.slice(0, t), r.slice(t + e.length)];
  },
  v6 = function (r, e) {
    for (
      var t = {}, i = Object.keys(r), s = Array.isArray(e), a = 0;
      a < i.length;
      a++
    ) {
      var u = i[a],
        h = r[u];
      (s ? e.indexOf(u) !== -1 : e(u, h, r)) && (t[u] = h);
    }
    return t;
  };
(function (r) {
  const e = f6,
    t = g6,
    i = m6,
    s = v6,
    a = (K) => K == null,
    u = Symbol("encodeFragmentIdentifier");
  function h(K) {
    switch (K.arrayFormat) {
      case "index":
        return (V) => (q, F) => {
          const z = q.length;
          return F === void 0 ||
            (K.skipNull && F === null) ||
            (K.skipEmptyString && F === "")
            ? q
            : F === null
            ? [...q, [b(V, K), "[", z, "]"].join("")]
            : [...q, [b(V, K), "[", b(z, K), "]=", b(F, K)].join("")];
        };
      case "bracket":
        return (V) => (q, F) =>
          F === void 0 ||
          (K.skipNull && F === null) ||
          (K.skipEmptyString && F === "")
            ? q
            : F === null
            ? [...q, [b(V, K), "[]"].join("")]
            : [...q, [b(V, K), "[]=", b(F, K)].join("")];
      case "colon-list-separator":
        return (V) => (q, F) =>
          F === void 0 ||
          (K.skipNull && F === null) ||
          (K.skipEmptyString && F === "")
            ? q
            : F === null
            ? [...q, [b(V, K), ":list="].join("")]
            : [...q, [b(V, K), ":list=", b(F, K)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const V = K.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (q) => (F, z) =>
          z === void 0 ||
          (K.skipNull && z === null) ||
          (K.skipEmptyString && z === "")
            ? F
            : ((z = z === null ? "" : z),
              F.length === 0
                ? [[b(q, K), V, b(z, K)].join("")]
                : [[F, b(z, K)].join(K.arrayFormatSeparator)]);
      }
      default:
        return (V) => (q, F) =>
          F === void 0 ||
          (K.skipNull && F === null) ||
          (K.skipEmptyString && F === "")
            ? q
            : F === null
            ? [...q, b(V, K)]
            : [...q, [b(V, K), "=", b(F, K)].join("")];
    }
  }
  function p(K) {
    let V;
    switch (K.arrayFormat) {
      case "index":
        return (q, F, z) => {
          if (
            ((V = /\[(\d*)\]$/.exec(q)), (q = q.replace(/\[\d*\]$/, "")), !V)
          ) {
            z[q] = F;
            return;
          }
          z[q] === void 0 && (z[q] = {}), (z[q][V[1]] = F);
        };
      case "bracket":
        return (q, F, z) => {
          if (((V = /(\[\])$/.exec(q)), (q = q.replace(/\[\]$/, "")), !V)) {
            z[q] = F;
            return;
          }
          if (z[q] === void 0) {
            z[q] = [F];
            return;
          }
          z[q] = [].concat(z[q], F);
        };
      case "colon-list-separator":
        return (q, F, z) => {
          if (((V = /(:list)$/.exec(q)), (q = q.replace(/:list$/, "")), !V)) {
            z[q] = F;
            return;
          }
          if (z[q] === void 0) {
            z[q] = [F];
            return;
          }
          z[q] = [].concat(z[q], F);
        };
      case "comma":
      case "separator":
        return (q, F, z) => {
          const y = typeof F == "string" && F.includes(K.arrayFormatSeparator),
            T =
              typeof F == "string" &&
              !y &&
              E(F, K).includes(K.arrayFormatSeparator);
          F = T ? E(F, K) : F;
          const ne =
            y || T
              ? F.split(K.arrayFormatSeparator).map((fe) => E(fe, K))
              : F === null
              ? F
              : E(F, K);
          z[q] = ne;
        };
      case "bracket-separator":
        return (q, F, z) => {
          const y = /(\[\])$/.test(q);
          if (((q = q.replace(/\[\]$/, "")), !y)) {
            z[q] = F && E(F, K);
            return;
          }
          const T =
            F === null
              ? []
              : F.split(K.arrayFormatSeparator).map((ne) => E(ne, K));
          if (z[q] === void 0) {
            z[q] = T;
            return;
          }
          z[q] = [].concat(z[q], T);
        };
      default:
        return (q, F, z) => {
          if (z[q] === void 0) {
            z[q] = F;
            return;
          }
          z[q] = [].concat(z[q], F);
        };
    }
  }
  function d(K) {
    if (typeof K != "string" || K.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function b(K, V) {
    return V.encode ? (V.strict ? e(K) : encodeURIComponent(K)) : K;
  }
  function E(K, V) {
    return V.decode ? t(K) : K;
  }
  function D(K) {
    return Array.isArray(K)
      ? K.sort()
      : typeof K == "object"
      ? D(Object.keys(K))
          .sort((V, q) => Number(V) - Number(q))
          .map((V) => K[V])
      : K;
  }
  function S(K) {
    const V = K.indexOf("#");
    return V !== -1 && (K = K.slice(0, V)), K;
  }
  function M(K) {
    let V = "";
    const q = K.indexOf("#");
    return q !== -1 && (V = K.slice(q)), V;
  }
  function W(K) {
    K = S(K);
    const V = K.indexOf("?");
    return V === -1 ? "" : K.slice(V + 1);
  }
  function G(K, V) {
    return (
      V.parseNumbers &&
      !Number.isNaN(Number(K)) &&
      typeof K == "string" &&
      K.trim() !== ""
        ? (K = Number(K))
        : V.parseBooleans &&
          K !== null &&
          (K.toLowerCase() === "true" || K.toLowerCase() === "false") &&
          (K = K.toLowerCase() === "true"),
      K
    );
  }
  function ee(K, V) {
    (V = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      V
    )),
      d(V.arrayFormatSeparator);
    const q = p(V),
      F = Object.create(null);
    if (typeof K != "string" || ((K = K.trim().replace(/^[?#&]/, "")), !K))
      return F;
    for (const z of K.split("&")) {
      if (z === "") continue;
      let [y, T] = i(V.decode ? z.replace(/\+/g, " ") : z, "=");
      (T =
        T === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(V.arrayFormat)
          ? T
          : E(T, V)),
        q(E(y, V), T, F);
    }
    for (const z of Object.keys(F)) {
      const y = F[z];
      if (typeof y == "object" && y !== null)
        for (const T of Object.keys(y)) y[T] = G(y[T], V);
      else F[z] = G(y, V);
    }
    return V.sort === !1
      ? F
      : (V.sort === !0
          ? Object.keys(F).sort()
          : Object.keys(F).sort(V.sort)
        ).reduce((z, y) => {
          const T = F[y];
          return (
            T && typeof T == "object" && !Array.isArray(T)
              ? (z[y] = D(T))
              : (z[y] = T),
            z
          );
        }, Object.create(null));
  }
  (r.extract = W),
    (r.parse = ee),
    (r.stringify = (K, V) => {
      if (!K) return "";
      (V = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        V
      )),
        d(V.arrayFormatSeparator);
      const q = (T) =>
          (V.skipNull && a(K[T])) || (V.skipEmptyString && K[T] === ""),
        F = h(V),
        z = {};
      for (const T of Object.keys(K)) q(T) || (z[T] = K[T]);
      const y = Object.keys(z);
      return (
        V.sort !== !1 && y.sort(V.sort),
        y
          .map((T) => {
            const ne = K[T];
            return ne === void 0
              ? ""
              : ne === null
              ? b(T, V)
              : Array.isArray(ne)
              ? ne.length === 0 && V.arrayFormat === "bracket-separator"
                ? b(T, V) + "[]"
                : ne.reduce(F(T), []).join("&")
              : b(T, V) + "=" + b(ne, V);
          })
          .filter((T) => T.length > 0)
          .join("&")
      );
    }),
    (r.parseUrl = (K, V) => {
      V = Object.assign({ decode: !0 }, V);
      const [q, F] = i(K, "#");
      return Object.assign(
        { url: q.split("?")[0] || "", query: ee(W(K), V) },
        V && V.parseFragmentIdentifier && F
          ? { fragmentIdentifier: E(F, V) }
          : {}
      );
    }),
    (r.stringifyUrl = (K, V) => {
      V = Object.assign({ encode: !0, strict: !0, [u]: !0 }, V);
      const q = S(K.url).split("?")[0] || "",
        F = r.extract(K.url),
        z = r.parse(F, { sort: !1 }),
        y = Object.assign(z, K.query);
      let T = r.stringify(y, V);
      T && (T = `?${T}`);
      let ne = M(K.url);
      return (
        K.fragmentIdentifier &&
          (ne = `#${V[u] ? b(K.fragmentIdentifier, V) : K.fragmentIdentifier}`),
        `${q}${T}${ne}`
      );
    }),
    (r.pick = (K, V, q) => {
      q = Object.assign({ parseFragmentIdentifier: !0, [u]: !1 }, q);
      const { url: F, query: z, fragmentIdentifier: y } = r.parseUrl(K, q);
      return r.stringifyUrl(
        { url: F, query: s(z, V), fragmentIdentifier: y },
        q
      );
    }),
    (r.exclude = (K, V, q) => {
      const F = Array.isArray(V) ? (z) => !V.includes(z) : (z, y) => !V(z, y);
      return r.pick(K, F, q);
    });
})(ra);
var Kl = {},
  su = {},
  ot = {},
  jg = {};
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  function e(h, p) {
    var d = (h >>> 16) & 65535,
      b = h & 65535,
      E = (p >>> 16) & 65535,
      D = p & 65535;
    return (b * D + (((d * D + b * E) << 16) >>> 0)) | 0;
  }
  r.mul = Math.imul || e;
  function t(h, p) {
    return (h + p) | 0;
  }
  r.add = t;
  function i(h, p) {
    return (h - p) | 0;
  }
  r.sub = i;
  function s(h, p) {
    return (h << p) | (h >>> (32 - p));
  }
  r.rotl = s;
  function a(h, p) {
    return (h << (32 - p)) | (h >>> p);
  }
  r.rotr = a;
  function u(h) {
    return typeof h == "number" && isFinite(h) && Math.floor(h) === h;
  }
  (r.isInteger = Number.isInteger || u),
    (r.MAX_SAFE_INTEGER = 9007199254740991),
    (r.isSafeInteger = function (h) {
      return (
        r.isInteger(h) && h >= -r.MAX_SAFE_INTEGER && h <= r.MAX_SAFE_INTEGER
      );
    });
})(jg);
Object.defineProperty(ot, "__esModule", { value: !0 });
var $g = jg;
function y6(r, e) {
  return e === void 0 && (e = 0), (((r[e + 0] << 8) | r[e + 1]) << 16) >> 16;
}
ot.readInt16BE = y6;
function w6(r, e) {
  return e === void 0 && (e = 0), ((r[e + 0] << 8) | r[e + 1]) >>> 0;
}
ot.readUint16BE = w6;
function b6(r, e) {
  return e === void 0 && (e = 0), (((r[e + 1] << 8) | r[e]) << 16) >> 16;
}
ot.readInt16LE = b6;
function _6(r, e) {
  return e === void 0 && (e = 0), ((r[e + 1] << 8) | r[e]) >>> 0;
}
ot.readUint16LE = _6;
function Fg(r, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    (e[t + 0] = r >>> 8),
    (e[t + 1] = r >>> 0),
    e
  );
}
ot.writeUint16BE = Fg;
ot.writeInt16BE = Fg;
function zg(r, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(2)),
    t === void 0 && (t = 0),
    (e[t + 0] = r >>> 0),
    (e[t + 1] = r >>> 8),
    e
  );
}
ot.writeUint16LE = zg;
ot.writeInt16LE = zg;
function pl(r, e) {
  return (
    e === void 0 && (e = 0),
    (r[e] << 24) | (r[e + 1] << 16) | (r[e + 2] << 8) | r[e + 3]
  );
}
ot.readInt32BE = pl;
function gl(r, e) {
  return (
    e === void 0 && (e = 0),
    ((r[e] << 24) | (r[e + 1] << 16) | (r[e + 2] << 8) | r[e + 3]) >>> 0
  );
}
ot.readUint32BE = gl;
function ml(r, e) {
  return (
    e === void 0 && (e = 0),
    (r[e + 3] << 24) | (r[e + 2] << 16) | (r[e + 1] << 8) | r[e]
  );
}
ot.readInt32LE = ml;
function vl(r, e) {
  return (
    e === void 0 && (e = 0),
    ((r[e + 3] << 24) | (r[e + 2] << 16) | (r[e + 1] << 8) | r[e]) >>> 0
  );
}
ot.readUint32LE = vl;
function kc(r, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    (e[t + 0] = r >>> 24),
    (e[t + 1] = r >>> 16),
    (e[t + 2] = r >>> 8),
    (e[t + 3] = r >>> 0),
    e
  );
}
ot.writeUint32BE = kc;
ot.writeInt32BE = kc;
function Hc(r, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(4)),
    t === void 0 && (t = 0),
    (e[t + 0] = r >>> 0),
    (e[t + 1] = r >>> 8),
    (e[t + 2] = r >>> 16),
    (e[t + 3] = r >>> 24),
    e
  );
}
ot.writeUint32LE = Hc;
ot.writeInt32LE = Hc;
function E6(r, e) {
  e === void 0 && (e = 0);
  var t = pl(r, e),
    i = pl(r, e + 4);
  return t * 4294967296 + i - (i >> 31) * 4294967296;
}
ot.readInt64BE = E6;
function A6(r, e) {
  e === void 0 && (e = 0);
  var t = gl(r, e),
    i = gl(r, e + 4);
  return t * 4294967296 + i;
}
ot.readUint64BE = A6;
function S6(r, e) {
  e === void 0 && (e = 0);
  var t = ml(r, e),
    i = ml(r, e + 4);
  return i * 4294967296 + t - (t >> 31) * 4294967296;
}
ot.readInt64LE = S6;
function I6(r, e) {
  e === void 0 && (e = 0);
  var t = vl(r, e),
    i = vl(r, e + 4);
  return i * 4294967296 + t;
}
ot.readUint64LE = I6;
function kg(r, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    kc((r / 4294967296) >>> 0, e, t),
    kc(r >>> 0, e, t + 4),
    e
  );
}
ot.writeUint64BE = kg;
ot.writeInt64BE = kg;
function Hg(r, e, t) {
  return (
    e === void 0 && (e = new Uint8Array(8)),
    t === void 0 && (t = 0),
    Hc(r >>> 0, e, t),
    Hc((r / 4294967296) >>> 0, e, t + 4),
    e
  );
}
ot.writeUint64LE = Hg;
ot.writeInt64LE = Hg;
function D6(r, e, t) {
  if ((t === void 0 && (t = 0), r % 8 !== 0))
    throw new Error("readUintBE supports only bitLengths divisible by 8");
  if (r / 8 > e.length - t)
    throw new Error("readUintBE: array is too short for the given bitLength");
  for (var i = 0, s = 1, a = r / 8 + t - 1; a >= t; a--)
    (i += e[a] * s), (s *= 256);
  return i;
}
ot.readUintBE = D6;
function x6(r, e, t) {
  if ((t === void 0 && (t = 0), r % 8 !== 0))
    throw new Error("readUintLE supports only bitLengths divisible by 8");
  if (r / 8 > e.length - t)
    throw new Error("readUintLE: array is too short for the given bitLength");
  for (var i = 0, s = 1, a = t; a < t + r / 8; a++) (i += e[a] * s), (s *= 256);
  return i;
}
ot.readUintLE = x6;
function P6(r, e, t, i) {
  if (
    (t === void 0 && (t = new Uint8Array(r / 8)),
    i === void 0 && (i = 0),
    r % 8 !== 0)
  )
    throw new Error("writeUintBE supports only bitLengths divisible by 8");
  if (!$g.isSafeInteger(e))
    throw new Error("writeUintBE value must be an integer");
  for (var s = 1, a = r / 8 + i - 1; a >= i; a--)
    (t[a] = (e / s) & 255), (s *= 256);
  return t;
}
ot.writeUintBE = P6;
function M6(r, e, t, i) {
  if (
    (t === void 0 && (t = new Uint8Array(r / 8)),
    i === void 0 && (i = 0),
    r % 8 !== 0)
  )
    throw new Error("writeUintLE supports only bitLengths divisible by 8");
  if (!$g.isSafeInteger(e))
    throw new Error("writeUintLE value must be an integer");
  for (var s = 1, a = i; a < i + r / 8; a++) (t[a] = (e / s) & 255), (s *= 256);
  return t;
}
ot.writeUintLE = M6;
function C6(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat32(e);
}
ot.readFloat32BE = C6;
function O6(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat32(e, !0);
}
ot.readFloat32LE = O6;
function N6(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat64(e);
}
ot.readFloat64BE = N6;
function R6(r, e) {
  e === void 0 && (e = 0);
  var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
  return t.getFloat64(e, !0);
}
ot.readFloat64LE = R6;
function T6(r, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(t, r), e;
}
ot.writeFloat32BE = T6;
function U6(r, e, t) {
  e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat32(t, r, !0), e;
}
ot.writeFloat32LE = U6;
function B6(r, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(t, r), e;
}
ot.writeFloat64BE = B6;
function L6(r, e, t) {
  e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
  var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
  return i.setFloat64(t, r, !0), e;
}
ot.writeFloat64LE = L6;
var ti = {};
Object.defineProperty(ti, "__esModule", { value: !0 });
function q6(r) {
  for (var e = 0; e < r.length; e++) r[e] = 0;
  return r;
}
ti.wipe = q6;
Object.defineProperty(su, "__esModule", { value: !0 });
var br = ot,
  yl = ti,
  j6 = 20;
function $6(r, e, t) {
  for (
    var i = 1634760805,
      s = 857760878,
      a = 2036477234,
      u = 1797285236,
      h = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
      p = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
      d = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
      b = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
      E = (t[19] << 24) | (t[18] << 16) | (t[17] << 8) | t[16],
      D = (t[23] << 24) | (t[22] << 16) | (t[21] << 8) | t[20],
      S = (t[27] << 24) | (t[26] << 16) | (t[25] << 8) | t[24],
      M = (t[31] << 24) | (t[30] << 16) | (t[29] << 8) | t[28],
      W = (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0],
      G = (e[7] << 24) | (e[6] << 16) | (e[5] << 8) | e[4],
      ee = (e[11] << 24) | (e[10] << 16) | (e[9] << 8) | e[8],
      K = (e[15] << 24) | (e[14] << 16) | (e[13] << 8) | e[12],
      V = i,
      q = s,
      F = a,
      z = u,
      y = h,
      T = p,
      ne = d,
      fe = b,
      le = E,
      me = D,
      f = S,
      l = M,
      w = W,
      I = G,
      P = ee,
      O = K,
      U = 0;
    U < j6;
    U += 2
  )
    (V = (V + y) | 0),
      (w ^= V),
      (w = (w >>> 16) | (w << 16)),
      (le = (le + w) | 0),
      (y ^= le),
      (y = (y >>> 20) | (y << 12)),
      (q = (q + T) | 0),
      (I ^= q),
      (I = (I >>> 16) | (I << 16)),
      (me = (me + I) | 0),
      (T ^= me),
      (T = (T >>> 20) | (T << 12)),
      (F = (F + ne) | 0),
      (P ^= F),
      (P = (P >>> 16) | (P << 16)),
      (f = (f + P) | 0),
      (ne ^= f),
      (ne = (ne >>> 20) | (ne << 12)),
      (z = (z + fe) | 0),
      (O ^= z),
      (O = (O >>> 16) | (O << 16)),
      (l = (l + O) | 0),
      (fe ^= l),
      (fe = (fe >>> 20) | (fe << 12)),
      (F = (F + ne) | 0),
      (P ^= F),
      (P = (P >>> 24) | (P << 8)),
      (f = (f + P) | 0),
      (ne ^= f),
      (ne = (ne >>> 25) | (ne << 7)),
      (z = (z + fe) | 0),
      (O ^= z),
      (O = (O >>> 24) | (O << 8)),
      (l = (l + O) | 0),
      (fe ^= l),
      (fe = (fe >>> 25) | (fe << 7)),
      (q = (q + T) | 0),
      (I ^= q),
      (I = (I >>> 24) | (I << 8)),
      (me = (me + I) | 0),
      (T ^= me),
      (T = (T >>> 25) | (T << 7)),
      (V = (V + y) | 0),
      (w ^= V),
      (w = (w >>> 24) | (w << 8)),
      (le = (le + w) | 0),
      (y ^= le),
      (y = (y >>> 25) | (y << 7)),
      (V = (V + T) | 0),
      (O ^= V),
      (O = (O >>> 16) | (O << 16)),
      (f = (f + O) | 0),
      (T ^= f),
      (T = (T >>> 20) | (T << 12)),
      (q = (q + ne) | 0),
      (w ^= q),
      (w = (w >>> 16) | (w << 16)),
      (l = (l + w) | 0),
      (ne ^= l),
      (ne = (ne >>> 20) | (ne << 12)),
      (F = (F + fe) | 0),
      (I ^= F),
      (I = (I >>> 16) | (I << 16)),
      (le = (le + I) | 0),
      (fe ^= le),
      (fe = (fe >>> 20) | (fe << 12)),
      (z = (z + y) | 0),
      (P ^= z),
      (P = (P >>> 16) | (P << 16)),
      (me = (me + P) | 0),
      (y ^= me),
      (y = (y >>> 20) | (y << 12)),
      (F = (F + fe) | 0),
      (I ^= F),
      (I = (I >>> 24) | (I << 8)),
      (le = (le + I) | 0),
      (fe ^= le),
      (fe = (fe >>> 25) | (fe << 7)),
      (z = (z + y) | 0),
      (P ^= z),
      (P = (P >>> 24) | (P << 8)),
      (me = (me + P) | 0),
      (y ^= me),
      (y = (y >>> 25) | (y << 7)),
      (q = (q + ne) | 0),
      (w ^= q),
      (w = (w >>> 24) | (w << 8)),
      (l = (l + w) | 0),
      (ne ^= l),
      (ne = (ne >>> 25) | (ne << 7)),
      (V = (V + T) | 0),
      (O ^= V),
      (O = (O >>> 24) | (O << 8)),
      (f = (f + O) | 0),
      (T ^= f),
      (T = (T >>> 25) | (T << 7));
  br.writeUint32LE((V + i) | 0, r, 0),
    br.writeUint32LE((q + s) | 0, r, 4),
    br.writeUint32LE((F + a) | 0, r, 8),
    br.writeUint32LE((z + u) | 0, r, 12),
    br.writeUint32LE((y + h) | 0, r, 16),
    br.writeUint32LE((T + p) | 0, r, 20),
    br.writeUint32LE((ne + d) | 0, r, 24),
    br.writeUint32LE((fe + b) | 0, r, 28),
    br.writeUint32LE((le + E) | 0, r, 32),
    br.writeUint32LE((me + D) | 0, r, 36),
    br.writeUint32LE((f + S) | 0, r, 40),
    br.writeUint32LE((l + M) | 0, r, 44),
    br.writeUint32LE((w + W) | 0, r, 48),
    br.writeUint32LE((I + G) | 0, r, 52),
    br.writeUint32LE((P + ee) | 0, r, 56),
    br.writeUint32LE((O + K) | 0, r, 60);
}
function Kg(r, e, t, i, s) {
  if ((s === void 0 && (s = 0), r.length !== 32))
    throw new Error("ChaCha: key size must be 32 bytes");
  if (i.length < t.length)
    throw new Error("ChaCha: destination is shorter than source");
  var a, u;
  if (s === 0) {
    if (e.length !== 8 && e.length !== 12)
      throw new Error("ChaCha nonce must be 8 or 12 bytes");
    (a = new Uint8Array(16)), (u = a.length - e.length), a.set(e, u);
  } else {
    if (e.length !== 16)
      throw new Error("ChaCha nonce with counter must be 16 bytes");
    (a = e), (u = s);
  }
  for (var h = new Uint8Array(64), p = 0; p < t.length; p += 64) {
    $6(h, a, r);
    for (var d = p; d < p + 64 && d < t.length; d++) i[d] = t[d] ^ h[d - p];
    z6(a, 0, u);
  }
  return yl.wipe(h), s === 0 && yl.wipe(a), i;
}
su.streamXOR = Kg;
function F6(r, e, t, i) {
  return i === void 0 && (i = 0), yl.wipe(t), Kg(r, e, t, t, i);
}
su.stream = F6;
function z6(r, e, t) {
  for (var i = 1; t--; )
    (i = (i + (r[e] & 255)) | 0), (r[e] = i & 255), (i >>>= 8), e++;
  if (i > 0) throw new Error("ChaCha: counter overflow");
}
var Vg = {},
  Yn = {};
Object.defineProperty(Yn, "__esModule", { value: !0 });
function k6(r, e, t) {
  return (~(r - 1) & e) | ((r - 1) & t);
}
Yn.select = k6;
function H6(r, e) {
  return (((r | 0) - (e | 0) - 1) >>> 31) & 1;
}
Yn.lessOrEqual = H6;
function Gg(r, e) {
  if (r.length !== e.length) return 0;
  for (var t = 0, i = 0; i < r.length; i++) t |= r[i] ^ e[i];
  return 1 & ((t - 1) >>> 8);
}
Yn.compare = Gg;
function K6(r, e) {
  return r.length === 0 || e.length === 0 ? !1 : Gg(r, e) !== 0;
}
Yn.equal = K6;
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = Yn,
    t = ti;
  r.DIGEST_LENGTH = 16;
  var i = (function () {
    function u(h) {
      (this.digestLength = r.DIGEST_LENGTH),
        (this._buffer = new Uint8Array(16)),
        (this._r = new Uint16Array(10)),
        (this._h = new Uint16Array(10)),
        (this._pad = new Uint16Array(8)),
        (this._leftover = 0),
        (this._fin = 0),
        (this._finished = !1);
      var p = h[0] | (h[1] << 8);
      this._r[0] = p & 8191;
      var d = h[2] | (h[3] << 8);
      this._r[1] = ((p >>> 13) | (d << 3)) & 8191;
      var b = h[4] | (h[5] << 8);
      this._r[2] = ((d >>> 10) | (b << 6)) & 7939;
      var E = h[6] | (h[7] << 8);
      this._r[3] = ((b >>> 7) | (E << 9)) & 8191;
      var D = h[8] | (h[9] << 8);
      (this._r[4] = ((E >>> 4) | (D << 12)) & 255),
        (this._r[5] = (D >>> 1) & 8190);
      var S = h[10] | (h[11] << 8);
      this._r[6] = ((D >>> 14) | (S << 2)) & 8191;
      var M = h[12] | (h[13] << 8);
      this._r[7] = ((S >>> 11) | (M << 5)) & 8065;
      var W = h[14] | (h[15] << 8);
      (this._r[8] = ((M >>> 8) | (W << 8)) & 8191),
        (this._r[9] = (W >>> 5) & 127),
        (this._pad[0] = h[16] | (h[17] << 8)),
        (this._pad[1] = h[18] | (h[19] << 8)),
        (this._pad[2] = h[20] | (h[21] << 8)),
        (this._pad[3] = h[22] | (h[23] << 8)),
        (this._pad[4] = h[24] | (h[25] << 8)),
        (this._pad[5] = h[26] | (h[27] << 8)),
        (this._pad[6] = h[28] | (h[29] << 8)),
        (this._pad[7] = h[30] | (h[31] << 8));
    }
    return (
      (u.prototype._blocks = function (h, p, d) {
        for (
          var b = this._fin ? 0 : 2048,
            E = this._h[0],
            D = this._h[1],
            S = this._h[2],
            M = this._h[3],
            W = this._h[4],
            G = this._h[5],
            ee = this._h[6],
            K = this._h[7],
            V = this._h[8],
            q = this._h[9],
            F = this._r[0],
            z = this._r[1],
            y = this._r[2],
            T = this._r[3],
            ne = this._r[4],
            fe = this._r[5],
            le = this._r[6],
            me = this._r[7],
            f = this._r[8],
            l = this._r[9];
          d >= 16;

        ) {
          var w = h[p + 0] | (h[p + 1] << 8);
          E += w & 8191;
          var I = h[p + 2] | (h[p + 3] << 8);
          D += ((w >>> 13) | (I << 3)) & 8191;
          var P = h[p + 4] | (h[p + 5] << 8);
          S += ((I >>> 10) | (P << 6)) & 8191;
          var O = h[p + 6] | (h[p + 7] << 8);
          M += ((P >>> 7) | (O << 9)) & 8191;
          var U = h[p + 8] | (h[p + 9] << 8);
          (W += ((O >>> 4) | (U << 12)) & 8191), (G += (U >>> 1) & 8191);
          var x = h[p + 10] | (h[p + 11] << 8);
          ee += ((U >>> 14) | (x << 2)) & 8191;
          var g = h[p + 12] | (h[p + 13] << 8);
          K += ((x >>> 11) | (g << 5)) & 8191;
          var N = h[p + 14] | (h[p + 15] << 8);
          (V += ((g >>> 8) | (N << 8)) & 8191), (q += (N >>> 5) | b);
          var ie = 0,
            de = ie;
          (de += E * F),
            (de += D * (5 * l)),
            (de += S * (5 * f)),
            (de += M * (5 * me)),
            (de += W * (5 * le)),
            (ie = de >>> 13),
            (de &= 8191),
            (de += G * (5 * fe)),
            (de += ee * (5 * ne)),
            (de += K * (5 * T)),
            (de += V * (5 * y)),
            (de += q * (5 * z)),
            (ie += de >>> 13),
            (de &= 8191);
          var _ = ie;
          (_ += E * z),
            (_ += D * F),
            (_ += S * (5 * l)),
            (_ += M * (5 * f)),
            (_ += W * (5 * me)),
            (ie = _ >>> 13),
            (_ &= 8191),
            (_ += G * (5 * le)),
            (_ += ee * (5 * fe)),
            (_ += K * (5 * ne)),
            (_ += V * (5 * T)),
            (_ += q * (5 * y)),
            (ie += _ >>> 13),
            (_ &= 8191);
          var Z = ie;
          (Z += E * y),
            (Z += D * z),
            (Z += S * F),
            (Z += M * (5 * l)),
            (Z += W * (5 * f)),
            (ie = Z >>> 13),
            (Z &= 8191),
            (Z += G * (5 * me)),
            (Z += ee * (5 * le)),
            (Z += K * (5 * fe)),
            (Z += V * (5 * ne)),
            (Z += q * (5 * T)),
            (ie += Z >>> 13),
            (Z &= 8191);
          var L = ie;
          (L += E * T),
            (L += D * y),
            (L += S * z),
            (L += M * F),
            (L += W * (5 * l)),
            (ie = L >>> 13),
            (L &= 8191),
            (L += G * (5 * f)),
            (L += ee * (5 * me)),
            (L += K * (5 * le)),
            (L += V * (5 * fe)),
            (L += q * (5 * ne)),
            (ie += L >>> 13),
            (L &= 8191);
          var j = ie;
          (j += E * ne),
            (j += D * T),
            (j += S * y),
            (j += M * z),
            (j += W * F),
            (ie = j >>> 13),
            (j &= 8191),
            (j += G * (5 * l)),
            (j += ee * (5 * f)),
            (j += K * (5 * me)),
            (j += V * (5 * le)),
            (j += q * (5 * fe)),
            (ie += j >>> 13),
            (j &= 8191);
          var k = ie;
          (k += E * fe),
            (k += D * ne),
            (k += S * T),
            (k += M * y),
            (k += W * z),
            (ie = k >>> 13),
            (k &= 8191),
            (k += G * F),
            (k += ee * (5 * l)),
            (k += K * (5 * f)),
            (k += V * (5 * me)),
            (k += q * (5 * le)),
            (ie += k >>> 13),
            (k &= 8191);
          var m = ie;
          (m += E * le),
            (m += D * fe),
            (m += S * ne),
            (m += M * T),
            (m += W * y),
            (ie = m >>> 13),
            (m &= 8191),
            (m += G * z),
            (m += ee * F),
            (m += K * (5 * l)),
            (m += V * (5 * f)),
            (m += q * (5 * me)),
            (ie += m >>> 13),
            (m &= 8191);
          var B = ie;
          (B += E * me),
            (B += D * le),
            (B += S * fe),
            (B += M * ne),
            (B += W * T),
            (ie = B >>> 13),
            (B &= 8191),
            (B += G * y),
            (B += ee * z),
            (B += K * F),
            (B += V * (5 * l)),
            (B += q * (5 * f)),
            (ie += B >>> 13),
            (B &= 8191);
          var te = ie;
          (te += E * f),
            (te += D * me),
            (te += S * le),
            (te += M * fe),
            (te += W * ne),
            (ie = te >>> 13),
            (te &= 8191),
            (te += G * T),
            (te += ee * y),
            (te += K * z),
            (te += V * F),
            (te += q * (5 * l)),
            (ie += te >>> 13),
            (te &= 8191);
          var ue = ie;
          (ue += E * l),
            (ue += D * f),
            (ue += S * me),
            (ue += M * le),
            (ue += W * fe),
            (ie = ue >>> 13),
            (ue &= 8191),
            (ue += G * ne),
            (ue += ee * T),
            (ue += K * y),
            (ue += V * z),
            (ue += q * F),
            (ie += ue >>> 13),
            (ue &= 8191),
            (ie = ((ie << 2) + ie) | 0),
            (ie = (ie + de) | 0),
            (de = ie & 8191),
            (ie = ie >>> 13),
            (_ += ie),
            (E = de),
            (D = _),
            (S = Z),
            (M = L),
            (W = j),
            (G = k),
            (ee = m),
            (K = B),
            (V = te),
            (q = ue),
            (p += 16),
            (d -= 16);
        }
        (this._h[0] = E),
          (this._h[1] = D),
          (this._h[2] = S),
          (this._h[3] = M),
          (this._h[4] = W),
          (this._h[5] = G),
          (this._h[6] = ee),
          (this._h[7] = K),
          (this._h[8] = V),
          (this._h[9] = q);
      }),
      (u.prototype.finish = function (h, p) {
        p === void 0 && (p = 0);
        var d = new Uint16Array(10),
          b,
          E,
          D,
          S;
        if (this._leftover) {
          for (S = this._leftover, this._buffer[S++] = 1; S < 16; S++)
            this._buffer[S] = 0;
          (this._fin = 1), this._blocks(this._buffer, 0, 16);
        }
        for (b = this._h[1] >>> 13, this._h[1] &= 8191, S = 2; S < 10; S++)
          (this._h[S] += b), (b = this._h[S] >>> 13), (this._h[S] &= 8191);
        for (
          this._h[0] += b * 5,
            b = this._h[0] >>> 13,
            this._h[0] &= 8191,
            this._h[1] += b,
            b = this._h[1] >>> 13,
            this._h[1] &= 8191,
            this._h[2] += b,
            d[0] = this._h[0] + 5,
            b = d[0] >>> 13,
            d[0] &= 8191,
            S = 1;
          S < 10;
          S++
        )
          (d[S] = this._h[S] + b), (b = d[S] >>> 13), (d[S] &= 8191);
        for (d[9] -= 8192, E = (b ^ 1) - 1, S = 0; S < 10; S++) d[S] &= E;
        for (E = ~E, S = 0; S < 10; S++) this._h[S] = (this._h[S] & E) | d[S];
        for (
          this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
            this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
            this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
            this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
            this._h[4] =
              ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) &
              65535,
            this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
            this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
            this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
            D = this._h[0] + this._pad[0],
            this._h[0] = D & 65535,
            S = 1;
          S < 8;
          S++
        )
          (D = (((this._h[S] + this._pad[S]) | 0) + (D >>> 16)) | 0),
            (this._h[S] = D & 65535);
        return (
          (h[p + 0] = this._h[0] >>> 0),
          (h[p + 1] = this._h[0] >>> 8),
          (h[p + 2] = this._h[1] >>> 0),
          (h[p + 3] = this._h[1] >>> 8),
          (h[p + 4] = this._h[2] >>> 0),
          (h[p + 5] = this._h[2] >>> 8),
          (h[p + 6] = this._h[3] >>> 0),
          (h[p + 7] = this._h[3] >>> 8),
          (h[p + 8] = this._h[4] >>> 0),
          (h[p + 9] = this._h[4] >>> 8),
          (h[p + 10] = this._h[5] >>> 0),
          (h[p + 11] = this._h[5] >>> 8),
          (h[p + 12] = this._h[6] >>> 0),
          (h[p + 13] = this._h[6] >>> 8),
          (h[p + 14] = this._h[7] >>> 0),
          (h[p + 15] = this._h[7] >>> 8),
          (this._finished = !0),
          this
        );
      }),
      (u.prototype.update = function (h) {
        var p = 0,
          d = h.length,
          b;
        if (this._leftover) {
          (b = 16 - this._leftover), b > d && (b = d);
          for (var E = 0; E < b; E++)
            this._buffer[this._leftover + E] = h[p + E];
          if (((d -= b), (p += b), (this._leftover += b), this._leftover < 16))
            return this;
          this._blocks(this._buffer, 0, 16), (this._leftover = 0);
        }
        if (
          (d >= 16 &&
            ((b = d - (d % 16)), this._blocks(h, p, b), (p += b), (d -= b)),
          d)
        ) {
          for (var E = 0; E < d; E++)
            this._buffer[this._leftover + E] = h[p + E];
          this._leftover += d;
        }
        return this;
      }),
      (u.prototype.digest = function () {
        if (this._finished) throw new Error("Poly1305 was finished");
        var h = new Uint8Array(16);
        return this.finish(h), h;
      }),
      (u.prototype.clean = function () {
        return (
          t.wipe(this._buffer),
          t.wipe(this._r),
          t.wipe(this._h),
          t.wipe(this._pad),
          (this._leftover = 0),
          (this._fin = 0),
          (this._finished = !0),
          this
        );
      }),
      u
    );
  })();
  r.Poly1305 = i;
  function s(u, h) {
    var p = new i(u);
    p.update(h);
    var d = p.digest();
    return p.clean(), d;
  }
  r.oneTimeAuth = s;
  function a(u, h) {
    return u.length !== r.DIGEST_LENGTH || h.length !== r.DIGEST_LENGTH
      ? !1
      : e.equal(u, h);
  }
  r.equal = a;
})(Vg);
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = su,
    t = Vg,
    i = ti,
    s = ot,
    a = Yn;
  (r.KEY_LENGTH = 32), (r.NONCE_LENGTH = 12), (r.TAG_LENGTH = 16);
  var u = new Uint8Array(16),
    h = (function () {
      function p(d) {
        if (
          ((this.nonceLength = r.NONCE_LENGTH),
          (this.tagLength = r.TAG_LENGTH),
          d.length !== r.KEY_LENGTH)
        )
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(d);
      }
      return (
        (p.prototype.seal = function (d, b, E, D) {
          if (d.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          var S = new Uint8Array(16);
          S.set(d, S.length - d.length);
          var M = new Uint8Array(32);
          e.stream(this._key, S, M, 4);
          var W = b.length + this.tagLength,
            G;
          if (D) {
            if (D.length !== W)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            G = D;
          } else G = new Uint8Array(W);
          return (
            e.streamXOR(this._key, S, b, G, 4),
            this._authenticate(
              G.subarray(G.length - this.tagLength, G.length),
              M,
              G.subarray(0, G.length - this.tagLength),
              E
            ),
            i.wipe(S),
            G
          );
        }),
        (p.prototype.open = function (d, b, E, D) {
          if (d.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          if (b.length < this.tagLength) return null;
          var S = new Uint8Array(16);
          S.set(d, S.length - d.length);
          var M = new Uint8Array(32);
          e.stream(this._key, S, M, 4);
          var W = new Uint8Array(this.tagLength);
          if (
            (this._authenticate(
              W,
              M,
              b.subarray(0, b.length - this.tagLength),
              E
            ),
            !a.equal(W, b.subarray(b.length - this.tagLength, b.length)))
          )
            return null;
          var G = b.length - this.tagLength,
            ee;
          if (D) {
            if (D.length !== G)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            ee = D;
          } else ee = new Uint8Array(G);
          return (
            e.streamXOR(
              this._key,
              S,
              b.subarray(0, b.length - this.tagLength),
              ee,
              4
            ),
            i.wipe(S),
            ee
          );
        }),
        (p.prototype.clean = function () {
          return i.wipe(this._key), this;
        }),
        (p.prototype._authenticate = function (d, b, E, D) {
          var S = new t.Poly1305(b);
          D &&
            (S.update(D),
            D.length % 16 > 0 && S.update(u.subarray(D.length % 16))),
            S.update(E),
            E.length % 16 > 0 && S.update(u.subarray(E.length % 16));
          var M = new Uint8Array(8);
          D && s.writeUint64LE(D.length, M),
            S.update(M),
            s.writeUint64LE(E.length, M),
            S.update(M);
          for (var W = S.digest(), G = 0; G < W.length; G++) d[G] = W[G];
          S.clean(), i.wipe(W), i.wipe(M);
        }),
        p
      );
    })();
  r.ChaCha20Poly1305 = h;
})(Kl);
var Wg = {},
  ha = {},
  Vl = {};
Object.defineProperty(Vl, "__esModule", { value: !0 });
function V6(r) {
  return (
    typeof r.saveState < "u" &&
    typeof r.restoreState < "u" &&
    typeof r.cleanSavedState < "u"
  );
}
Vl.isSerializableHash = V6;
Object.defineProperty(ha, "__esModule", { value: !0 });
var Yi = Vl,
  G6 = Yn,
  W6 = ti,
  Yg = (function () {
    function r(e, t) {
      (this._finished = !1),
        (this._inner = new e()),
        (this._outer = new e()),
        (this.blockSize = this._outer.blockSize),
        (this.digestLength = this._outer.digestLength);
      var i = new Uint8Array(this.blockSize);
      t.length > this.blockSize
        ? this._inner.update(t).finish(i).clean()
        : i.set(t);
      for (var s = 0; s < i.length; s++) i[s] ^= 54;
      this._inner.update(i);
      for (var s = 0; s < i.length; s++) i[s] ^= 106;
      this._outer.update(i),
        Yi.isSerializableHash(this._inner) &&
          Yi.isSerializableHash(this._outer) &&
          ((this._innerKeyedState = this._inner.saveState()),
          (this._outerKeyedState = this._outer.saveState())),
        W6.wipe(i);
    }
    return (
      (r.prototype.reset = function () {
        if (
          !Yi.isSerializableHash(this._inner) ||
          !Yi.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't reset() because hash doesn't implement restoreState()"
          );
        return (
          this._inner.restoreState(this._innerKeyedState),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (r.prototype.clean = function () {
        Yi.isSerializableHash(this._inner) &&
          this._inner.cleanSavedState(this._innerKeyedState),
          Yi.isSerializableHash(this._outer) &&
            this._outer.cleanSavedState(this._outerKeyedState),
          this._inner.clean(),
          this._outer.clean();
      }),
      (r.prototype.update = function (e) {
        return this._inner.update(e), this;
      }),
      (r.prototype.finish = function (e) {
        return this._finished
          ? (this._outer.finish(e), this)
          : (this._inner.finish(e),
            this._outer.update(e.subarray(0, this.digestLength)).finish(e),
            (this._finished = !0),
            this);
      }),
      (r.prototype.digest = function () {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e), e;
      }),
      (r.prototype.saveState = function () {
        if (!Yi.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't saveState() because hash doesn't implement it"
          );
        return this._inner.saveState();
      }),
      (r.prototype.restoreState = function (e) {
        if (
          !Yi.isSerializableHash(this._inner) ||
          !Yi.isSerializableHash(this._outer)
        )
          throw new Error(
            "hmac: can't restoreState() because hash doesn't implement it"
          );
        return (
          this._inner.restoreState(e),
          this._outer.restoreState(this._outerKeyedState),
          (this._finished = !1),
          this
        );
      }),
      (r.prototype.cleanSavedState = function (e) {
        if (!Yi.isSerializableHash(this._inner))
          throw new Error(
            "hmac: can't cleanSavedState() because hash doesn't implement it"
          );
        this._inner.cleanSavedState(e);
      }),
      r
    );
  })();
ha.HMAC = Yg;
function Y6(r, e, t) {
  var i = new Yg(r, e);
  i.update(t);
  var s = i.digest();
  return i.clean(), s;
}
ha.hmac = Y6;
ha.equal = G6.equal;
Object.defineProperty(Wg, "__esModule", { value: !0 });
var N0 = ha,
  R0 = ti,
  Q6 = (function () {
    function r(e, t, i, s) {
      i === void 0 && (i = new Uint8Array(0)),
        (this._counter = new Uint8Array(1)),
        (this._hash = e),
        (this._info = s);
      var a = N0.hmac(this._hash, i, t);
      (this._hmac = new N0.HMAC(e, a)),
        (this._buffer = new Uint8Array(this._hmac.digestLength)),
        (this._bufpos = this._buffer.length);
    }
    return (
      (r.prototype._fillBuffer = function () {
        this._counter[0]++;
        var e = this._counter[0];
        if (e === 0) throw new Error("hkdf: cannot expand more");
        this._hmac.reset(),
          e > 1 && this._hmac.update(this._buffer),
          this._info && this._hmac.update(this._info),
          this._hmac.update(this._counter),
          this._hmac.finish(this._buffer),
          (this._bufpos = 0);
      }),
      (r.prototype.expand = function (e) {
        for (var t = new Uint8Array(e), i = 0; i < t.length; i++)
          this._bufpos === this._buffer.length && this._fillBuffer(),
            (t[i] = this._buffer[this._bufpos++]);
        return t;
      }),
      (r.prototype.clean = function () {
        this._hmac.clean(),
          R0.wipe(this._buffer),
          R0.wipe(this._counter),
          (this._bufpos = 0);
      }),
      r
    );
  })(),
  J6 = (Wg.HKDF = Q6),
  ho = {},
  ou = {},
  au = {};
Object.defineProperty(au, "__esModule", { value: !0 });
au.BrowserRandomSource = void 0;
const T0 = 65536;
class X6 {
  constructor() {
    (this.isAvailable = !1), (this.isInstantiated = !1);
    const e = typeof self < "u" ? self.crypto || self.msCrypto : null;
    e &&
      e.getRandomValues !== void 0 &&
      ((this._crypto = e), (this.isAvailable = !0), (this.isInstantiated = !0));
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Browser random byte generator is not available.");
    const t = new Uint8Array(e);
    for (let i = 0; i < t.length; i += T0)
      this._crypto.getRandomValues(
        t.subarray(i, i + Math.min(t.length - i, T0))
      );
    return t;
  }
}
au.BrowserRandomSource = X6;
function Z6(r) {
  throw new Error(
    'Could not dynamically require "' +
      r +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var cu = {};
Object.defineProperty(cu, "__esModule", { value: !0 });
cu.NodeRandomSource = void 0;
const eE = ti;
class tE {
  constructor() {
    if (
      ((this.isAvailable = !1), (this.isInstantiated = !1), typeof Z6 < "u")
    ) {
      const e = f_;
      e &&
        e.randomBytes &&
        ((this._crypto = e),
        (this.isAvailable = !0),
        (this.isInstantiated = !0));
    }
  }
  randomBytes(e) {
    if (!this.isAvailable || !this._crypto)
      throw new Error("Node.js random byte generator is not available.");
    let t = this._crypto.randomBytes(e);
    if (t.length !== e)
      throw new Error("NodeRandomSource: got fewer bytes than requested");
    const i = new Uint8Array(e);
    for (let s = 0; s < i.length; s++) i[s] = t[s];
    return (0, eE.wipe)(t), i;
  }
}
cu.NodeRandomSource = tE;
Object.defineProperty(ou, "__esModule", { value: !0 });
ou.SystemRandomSource = void 0;
const rE = au,
  iE = cu;
class nE {
  constructor() {
    if (
      ((this.isAvailable = !1),
      (this.name = ""),
      (this._source = new rE.BrowserRandomSource()),
      this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Browser");
      return;
    }
    if (
      ((this._source = new iE.NodeRandomSource()), this._source.isAvailable)
    ) {
      (this.isAvailable = !0), (this.name = "Node");
      return;
    }
  }
  randomBytes(e) {
    if (!this.isAvailable)
      throw new Error("System random byte generator is not available.");
    return this._source.randomBytes(e);
  }
}
ou.SystemRandomSource = nE;
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.randomStringForEntropy =
      r.randomString =
      r.randomUint32 =
      r.randomBytes =
      r.defaultRandomSource =
        void 0);
  const e = ou,
    t = ot,
    i = ti;
  r.defaultRandomSource = new e.SystemRandomSource();
  function s(d, b = r.defaultRandomSource) {
    return b.randomBytes(d);
  }
  r.randomBytes = s;
  function a(d = r.defaultRandomSource) {
    const b = s(4, d),
      E = (0, t.readUint32LE)(b);
    return (0, i.wipe)(b), E;
  }
  r.randomUint32 = a;
  const u = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function h(d, b = u, E = r.defaultRandomSource) {
    if (b.length < 2) throw new Error("randomString charset is too short");
    if (b.length > 256) throw new Error("randomString charset is too long");
    let D = "";
    const S = b.length,
      M = 256 - (256 % S);
    for (; d > 0; ) {
      const W = s(Math.ceil((d * 256) / M), E);
      for (let G = 0; G < W.length && d > 0; G++) {
        const ee = W[G];
        ee < M && ((D += b.charAt(ee % S)), d--);
      }
      (0, i.wipe)(W);
    }
    return D;
  }
  r.randomString = h;
  function p(d, b = u, E = r.defaultRandomSource) {
    const D = Math.ceil(d / (Math.log(b.length) / Math.LN2));
    return h(D, b, E);
  }
  r.randomStringForEntropy = p;
})(ho);
var uu = {};
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = ot,
    t = ti;
  (r.DIGEST_LENGTH = 32), (r.BLOCK_SIZE = 64);
  var i = (function () {
    function h() {
      (this.digestLength = r.DIGEST_LENGTH),
        (this.blockSize = r.BLOCK_SIZE),
        (this._state = new Int32Array(8)),
        (this._temp = new Int32Array(64)),
        (this._buffer = new Uint8Array(128)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (h.prototype._initState = function () {
        (this._state[0] = 1779033703),
          (this._state[1] = 3144134277),
          (this._state[2] = 1013904242),
          (this._state[3] = 2773480762),
          (this._state[4] = 1359893119),
          (this._state[5] = 2600822924),
          (this._state[6] = 528734635),
          (this._state[7] = 1541459225);
      }),
      (h.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (h.prototype.clean = function () {
        t.wipe(this._buffer), t.wipe(this._temp), this.reset();
      }),
      (h.prototype.update = function (p, d) {
        if ((d === void 0 && (d = p.length), this._finished))
          throw new Error("SHA256: can't update because hash was finished.");
        var b = 0;
        if (((this._bytesHashed += d), this._bufferLength > 0)) {
          for (; this._bufferLength < this.blockSize && d > 0; )
            (this._buffer[this._bufferLength++] = p[b++]), d--;
          this._bufferLength === this.blockSize &&
            (a(this._temp, this._state, this._buffer, 0, this.blockSize),
            (this._bufferLength = 0));
        }
        for (
          d >= this.blockSize &&
          ((b = a(this._temp, this._state, p, b, d)), (d %= this.blockSize));
          d > 0;

        )
          (this._buffer[this._bufferLength++] = p[b++]), d--;
        return this;
      }),
      (h.prototype.finish = function (p) {
        if (!this._finished) {
          var d = this._bytesHashed,
            b = this._bufferLength,
            E = (d / 536870912) | 0,
            D = d << 3,
            S = d % 64 < 56 ? 64 : 128;
          this._buffer[b] = 128;
          for (var M = b + 1; M < S - 8; M++) this._buffer[M] = 0;
          e.writeUint32BE(E, this._buffer, S - 8),
            e.writeUint32BE(D, this._buffer, S - 4),
            a(this._temp, this._state, this._buffer, 0, S),
            (this._finished = !0);
        }
        for (var M = 0; M < this.digestLength / 4; M++)
          e.writeUint32BE(this._state[M], p, M * 4);
        return this;
      }),
      (h.prototype.digest = function () {
        var p = new Uint8Array(this.digestLength);
        return this.finish(p), p;
      }),
      (h.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (h.prototype.restoreState = function (p) {
        return (
          this._state.set(p.state),
          (this._bufferLength = p.bufferLength),
          p.buffer && this._buffer.set(p.buffer),
          (this._bytesHashed = p.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (h.prototype.cleanSavedState = function (p) {
        t.wipe(p.state),
          p.buffer && t.wipe(p.buffer),
          (p.bufferLength = 0),
          (p.bytesHashed = 0);
      }),
      h
    );
  })();
  r.SHA256 = i;
  var s = new Int32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]);
  function a(h, p, d, b, E) {
    for (; E >= 64; ) {
      for (
        var D = p[0],
          S = p[1],
          M = p[2],
          W = p[3],
          G = p[4],
          ee = p[5],
          K = p[6],
          V = p[7],
          q = 0;
        q < 16;
        q++
      ) {
        var F = b + q * 4;
        h[q] = e.readUint32BE(d, F);
      }
      for (var q = 16; q < 64; q++) {
        var z = h[q - 2],
          y = ((z >>> 17) | (z << 15)) ^ ((z >>> 19) | (z << 13)) ^ (z >>> 10);
        z = h[q - 15];
        var T = ((z >>> 7) | (z << 25)) ^ ((z >>> 18) | (z << 14)) ^ (z >>> 3);
        h[q] = ((y + h[q - 7]) | 0) + ((T + h[q - 16]) | 0);
      }
      for (var q = 0; q < 64; q++) {
        var y =
            ((((((G >>> 6) | (G << 26)) ^
              ((G >>> 11) | (G << 21)) ^
              ((G >>> 25) | (G << 7))) +
              ((G & ee) ^ (~G & K))) |
              0) +
              ((V + ((s[q] + h[q]) | 0)) | 0)) |
            0,
          T =
            ((((D >>> 2) | (D << 30)) ^
              ((D >>> 13) | (D << 19)) ^
              ((D >>> 22) | (D << 10))) +
              ((D & S) ^ (D & M) ^ (S & M))) |
            0;
        (V = K),
          (K = ee),
          (ee = G),
          (G = (W + y) | 0),
          (W = M),
          (M = S),
          (S = D),
          (D = (y + T) | 0);
      }
      (p[0] += D),
        (p[1] += S),
        (p[2] += M),
        (p[3] += W),
        (p[4] += G),
        (p[5] += ee),
        (p[6] += K),
        (p[7] += V),
        (b += 64),
        (E -= 64);
    }
    return b;
  }
  function u(h) {
    var p = new i();
    p.update(h);
    var d = p.digest();
    return p.clean(), d;
  }
  r.hash = u;
})(uu);
var Gl = {};
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.sharedKey =
      r.generateKeyPair =
      r.generateKeyPairFromSeed =
      r.scalarMultBase =
      r.scalarMult =
      r.SHARED_KEY_LENGTH =
      r.SECRET_KEY_LENGTH =
      r.PUBLIC_KEY_LENGTH =
        void 0);
  const e = ho,
    t = ti;
  (r.PUBLIC_KEY_LENGTH = 32),
    (r.SECRET_KEY_LENGTH = 32),
    (r.SHARED_KEY_LENGTH = 32);
  function i(q) {
    const F = new Float64Array(16);
    if (q) for (let z = 0; z < q.length; z++) F[z] = q[z];
    return F;
  }
  const s = new Uint8Array(32);
  s[0] = 9;
  const a = i([56129, 1]);
  function u(q) {
    let F = 1;
    for (let z = 0; z < 16; z++) {
      let y = q[z] + F + 65535;
      (F = Math.floor(y / 65536)), (q[z] = y - F * 65536);
    }
    q[0] += F - 1 + 37 * (F - 1);
  }
  function h(q, F, z) {
    const y = ~(z - 1);
    for (let T = 0; T < 16; T++) {
      const ne = y & (q[T] ^ F[T]);
      (q[T] ^= ne), (F[T] ^= ne);
    }
  }
  function p(q, F) {
    const z = i(),
      y = i();
    for (let T = 0; T < 16; T++) y[T] = F[T];
    u(y), u(y), u(y);
    for (let T = 0; T < 2; T++) {
      z[0] = y[0] - 65517;
      for (let fe = 1; fe < 15; fe++)
        (z[fe] = y[fe] - 65535 - ((z[fe - 1] >> 16) & 1)), (z[fe - 1] &= 65535);
      z[15] = y[15] - 32767 - ((z[14] >> 16) & 1);
      const ne = (z[15] >> 16) & 1;
      (z[14] &= 65535), h(y, z, 1 - ne);
    }
    for (let T = 0; T < 16; T++)
      (q[2 * T] = y[T] & 255), (q[2 * T + 1] = y[T] >> 8);
  }
  function d(q, F) {
    for (let z = 0; z < 16; z++) q[z] = F[2 * z] + (F[2 * z + 1] << 8);
    q[15] &= 32767;
  }
  function b(q, F, z) {
    for (let y = 0; y < 16; y++) q[y] = F[y] + z[y];
  }
  function E(q, F, z) {
    for (let y = 0; y < 16; y++) q[y] = F[y] - z[y];
  }
  function D(q, F, z) {
    let y,
      T,
      ne = 0,
      fe = 0,
      le = 0,
      me = 0,
      f = 0,
      l = 0,
      w = 0,
      I = 0,
      P = 0,
      O = 0,
      U = 0,
      x = 0,
      g = 0,
      N = 0,
      ie = 0,
      de = 0,
      _ = 0,
      Z = 0,
      L = 0,
      j = 0,
      k = 0,
      m = 0,
      B = 0,
      te = 0,
      ue = 0,
      ae = 0,
      Pe = 0,
      Ce = 0,
      Ie = 0,
      Et = 0,
      Fe = 0,
      xe = z[0],
      Le = z[1],
      _e = z[2],
      Ee = z[3],
      Ve = z[4],
      we = z[5],
      Ae = z[6],
      Be = z[7],
      be = z[8],
      Me = z[9],
      qe = z[10],
      Oe = z[11],
      Ne = z[12],
      st = z[13],
      Te = z[14],
      Re = z[15];
    (y = F[0]),
      (ne += y * xe),
      (fe += y * Le),
      (le += y * _e),
      (me += y * Ee),
      (f += y * Ve),
      (l += y * we),
      (w += y * Ae),
      (I += y * Be),
      (P += y * be),
      (O += y * Me),
      (U += y * qe),
      (x += y * Oe),
      (g += y * Ne),
      (N += y * st),
      (ie += y * Te),
      (de += y * Re),
      (y = F[1]),
      (fe += y * xe),
      (le += y * Le),
      (me += y * _e),
      (f += y * Ee),
      (l += y * Ve),
      (w += y * we),
      (I += y * Ae),
      (P += y * Be),
      (O += y * be),
      (U += y * Me),
      (x += y * qe),
      (g += y * Oe),
      (N += y * Ne),
      (ie += y * st),
      (de += y * Te),
      (_ += y * Re),
      (y = F[2]),
      (le += y * xe),
      (me += y * Le),
      (f += y * _e),
      (l += y * Ee),
      (w += y * Ve),
      (I += y * we),
      (P += y * Ae),
      (O += y * Be),
      (U += y * be),
      (x += y * Me),
      (g += y * qe),
      (N += y * Oe),
      (ie += y * Ne),
      (de += y * st),
      (_ += y * Te),
      (Z += y * Re),
      (y = F[3]),
      (me += y * xe),
      (f += y * Le),
      (l += y * _e),
      (w += y * Ee),
      (I += y * Ve),
      (P += y * we),
      (O += y * Ae),
      (U += y * Be),
      (x += y * be),
      (g += y * Me),
      (N += y * qe),
      (ie += y * Oe),
      (de += y * Ne),
      (_ += y * st),
      (Z += y * Te),
      (L += y * Re),
      (y = F[4]),
      (f += y * xe),
      (l += y * Le),
      (w += y * _e),
      (I += y * Ee),
      (P += y * Ve),
      (O += y * we),
      (U += y * Ae),
      (x += y * Be),
      (g += y * be),
      (N += y * Me),
      (ie += y * qe),
      (de += y * Oe),
      (_ += y * Ne),
      (Z += y * st),
      (L += y * Te),
      (j += y * Re),
      (y = F[5]),
      (l += y * xe),
      (w += y * Le),
      (I += y * _e),
      (P += y * Ee),
      (O += y * Ve),
      (U += y * we),
      (x += y * Ae),
      (g += y * Be),
      (N += y * be),
      (ie += y * Me),
      (de += y * qe),
      (_ += y * Oe),
      (Z += y * Ne),
      (L += y * st),
      (j += y * Te),
      (k += y * Re),
      (y = F[6]),
      (w += y * xe),
      (I += y * Le),
      (P += y * _e),
      (O += y * Ee),
      (U += y * Ve),
      (x += y * we),
      (g += y * Ae),
      (N += y * Be),
      (ie += y * be),
      (de += y * Me),
      (_ += y * qe),
      (Z += y * Oe),
      (L += y * Ne),
      (j += y * st),
      (k += y * Te),
      (m += y * Re),
      (y = F[7]),
      (I += y * xe),
      (P += y * Le),
      (O += y * _e),
      (U += y * Ee),
      (x += y * Ve),
      (g += y * we),
      (N += y * Ae),
      (ie += y * Be),
      (de += y * be),
      (_ += y * Me),
      (Z += y * qe),
      (L += y * Oe),
      (j += y * Ne),
      (k += y * st),
      (m += y * Te),
      (B += y * Re),
      (y = F[8]),
      (P += y * xe),
      (O += y * Le),
      (U += y * _e),
      (x += y * Ee),
      (g += y * Ve),
      (N += y * we),
      (ie += y * Ae),
      (de += y * Be),
      (_ += y * be),
      (Z += y * Me),
      (L += y * qe),
      (j += y * Oe),
      (k += y * Ne),
      (m += y * st),
      (B += y * Te),
      (te += y * Re),
      (y = F[9]),
      (O += y * xe),
      (U += y * Le),
      (x += y * _e),
      (g += y * Ee),
      (N += y * Ve),
      (ie += y * we),
      (de += y * Ae),
      (_ += y * Be),
      (Z += y * be),
      (L += y * Me),
      (j += y * qe),
      (k += y * Oe),
      (m += y * Ne),
      (B += y * st),
      (te += y * Te),
      (ue += y * Re),
      (y = F[10]),
      (U += y * xe),
      (x += y * Le),
      (g += y * _e),
      (N += y * Ee),
      (ie += y * Ve),
      (de += y * we),
      (_ += y * Ae),
      (Z += y * Be),
      (L += y * be),
      (j += y * Me),
      (k += y * qe),
      (m += y * Oe),
      (B += y * Ne),
      (te += y * st),
      (ue += y * Te),
      (ae += y * Re),
      (y = F[11]),
      (x += y * xe),
      (g += y * Le),
      (N += y * _e),
      (ie += y * Ee),
      (de += y * Ve),
      (_ += y * we),
      (Z += y * Ae),
      (L += y * Be),
      (j += y * be),
      (k += y * Me),
      (m += y * qe),
      (B += y * Oe),
      (te += y * Ne),
      (ue += y * st),
      (ae += y * Te),
      (Pe += y * Re),
      (y = F[12]),
      (g += y * xe),
      (N += y * Le),
      (ie += y * _e),
      (de += y * Ee),
      (_ += y * Ve),
      (Z += y * we),
      (L += y * Ae),
      (j += y * Be),
      (k += y * be),
      (m += y * Me),
      (B += y * qe),
      (te += y * Oe),
      (ue += y * Ne),
      (ae += y * st),
      (Pe += y * Te),
      (Ce += y * Re),
      (y = F[13]),
      (N += y * xe),
      (ie += y * Le),
      (de += y * _e),
      (_ += y * Ee),
      (Z += y * Ve),
      (L += y * we),
      (j += y * Ae),
      (k += y * Be),
      (m += y * be),
      (B += y * Me),
      (te += y * qe),
      (ue += y * Oe),
      (ae += y * Ne),
      (Pe += y * st),
      (Ce += y * Te),
      (Ie += y * Re),
      (y = F[14]),
      (ie += y * xe),
      (de += y * Le),
      (_ += y * _e),
      (Z += y * Ee),
      (L += y * Ve),
      (j += y * we),
      (k += y * Ae),
      (m += y * Be),
      (B += y * be),
      (te += y * Me),
      (ue += y * qe),
      (ae += y * Oe),
      (Pe += y * Ne),
      (Ce += y * st),
      (Ie += y * Te),
      (Et += y * Re),
      (y = F[15]),
      (de += y * xe),
      (_ += y * Le),
      (Z += y * _e),
      (L += y * Ee),
      (j += y * Ve),
      (k += y * we),
      (m += y * Ae),
      (B += y * Be),
      (te += y * be),
      (ue += y * Me),
      (ae += y * qe),
      (Pe += y * Oe),
      (Ce += y * Ne),
      (Ie += y * st),
      (Et += y * Te),
      (Fe += y * Re),
      (ne += 38 * _),
      (fe += 38 * Z),
      (le += 38 * L),
      (me += 38 * j),
      (f += 38 * k),
      (l += 38 * m),
      (w += 38 * B),
      (I += 38 * te),
      (P += 38 * ue),
      (O += 38 * ae),
      (U += 38 * Pe),
      (x += 38 * Ce),
      (g += 38 * Ie),
      (N += 38 * Et),
      (ie += 38 * Fe),
      (T = 1),
      (y = ne + T + 65535),
      (T = Math.floor(y / 65536)),
      (ne = y - T * 65536),
      (y = fe + T + 65535),
      (T = Math.floor(y / 65536)),
      (fe = y - T * 65536),
      (y = le + T + 65535),
      (T = Math.floor(y / 65536)),
      (le = y - T * 65536),
      (y = me + T + 65535),
      (T = Math.floor(y / 65536)),
      (me = y - T * 65536),
      (y = f + T + 65535),
      (T = Math.floor(y / 65536)),
      (f = y - T * 65536),
      (y = l + T + 65535),
      (T = Math.floor(y / 65536)),
      (l = y - T * 65536),
      (y = w + T + 65535),
      (T = Math.floor(y / 65536)),
      (w = y - T * 65536),
      (y = I + T + 65535),
      (T = Math.floor(y / 65536)),
      (I = y - T * 65536),
      (y = P + T + 65535),
      (T = Math.floor(y / 65536)),
      (P = y - T * 65536),
      (y = O + T + 65535),
      (T = Math.floor(y / 65536)),
      (O = y - T * 65536),
      (y = U + T + 65535),
      (T = Math.floor(y / 65536)),
      (U = y - T * 65536),
      (y = x + T + 65535),
      (T = Math.floor(y / 65536)),
      (x = y - T * 65536),
      (y = g + T + 65535),
      (T = Math.floor(y / 65536)),
      (g = y - T * 65536),
      (y = N + T + 65535),
      (T = Math.floor(y / 65536)),
      (N = y - T * 65536),
      (y = ie + T + 65535),
      (T = Math.floor(y / 65536)),
      (ie = y - T * 65536),
      (y = de + T + 65535),
      (T = Math.floor(y / 65536)),
      (de = y - T * 65536),
      (ne += T - 1 + 37 * (T - 1)),
      (T = 1),
      (y = ne + T + 65535),
      (T = Math.floor(y / 65536)),
      (ne = y - T * 65536),
      (y = fe + T + 65535),
      (T = Math.floor(y / 65536)),
      (fe = y - T * 65536),
      (y = le + T + 65535),
      (T = Math.floor(y / 65536)),
      (le = y - T * 65536),
      (y = me + T + 65535),
      (T = Math.floor(y / 65536)),
      (me = y - T * 65536),
      (y = f + T + 65535),
      (T = Math.floor(y / 65536)),
      (f = y - T * 65536),
      (y = l + T + 65535),
      (T = Math.floor(y / 65536)),
      (l = y - T * 65536),
      (y = w + T + 65535),
      (T = Math.floor(y / 65536)),
      (w = y - T * 65536),
      (y = I + T + 65535),
      (T = Math.floor(y / 65536)),
      (I = y - T * 65536),
      (y = P + T + 65535),
      (T = Math.floor(y / 65536)),
      (P = y - T * 65536),
      (y = O + T + 65535),
      (T = Math.floor(y / 65536)),
      (O = y - T * 65536),
      (y = U + T + 65535),
      (T = Math.floor(y / 65536)),
      (U = y - T * 65536),
      (y = x + T + 65535),
      (T = Math.floor(y / 65536)),
      (x = y - T * 65536),
      (y = g + T + 65535),
      (T = Math.floor(y / 65536)),
      (g = y - T * 65536),
      (y = N + T + 65535),
      (T = Math.floor(y / 65536)),
      (N = y - T * 65536),
      (y = ie + T + 65535),
      (T = Math.floor(y / 65536)),
      (ie = y - T * 65536),
      (y = de + T + 65535),
      (T = Math.floor(y / 65536)),
      (de = y - T * 65536),
      (ne += T - 1 + 37 * (T - 1)),
      (q[0] = ne),
      (q[1] = fe),
      (q[2] = le),
      (q[3] = me),
      (q[4] = f),
      (q[5] = l),
      (q[6] = w),
      (q[7] = I),
      (q[8] = P),
      (q[9] = O),
      (q[10] = U),
      (q[11] = x),
      (q[12] = g),
      (q[13] = N),
      (q[14] = ie),
      (q[15] = de);
  }
  function S(q, F) {
    D(q, F, F);
  }
  function M(q, F) {
    const z = i();
    for (let y = 0; y < 16; y++) z[y] = F[y];
    for (let y = 253; y >= 0; y--) S(z, z), y !== 2 && y !== 4 && D(z, z, F);
    for (let y = 0; y < 16; y++) q[y] = z[y];
  }
  function W(q, F) {
    const z = new Uint8Array(32),
      y = new Float64Array(80),
      T = i(),
      ne = i(),
      fe = i(),
      le = i(),
      me = i(),
      f = i();
    for (let P = 0; P < 31; P++) z[P] = q[P];
    (z[31] = (q[31] & 127) | 64), (z[0] &= 248), d(y, F);
    for (let P = 0; P < 16; P++) ne[P] = y[P];
    T[0] = le[0] = 1;
    for (let P = 254; P >= 0; --P) {
      const O = (z[P >>> 3] >>> (P & 7)) & 1;
      h(T, ne, O),
        h(fe, le, O),
        b(me, T, fe),
        E(T, T, fe),
        b(fe, ne, le),
        E(ne, ne, le),
        S(le, me),
        S(f, T),
        D(T, fe, T),
        D(fe, ne, me),
        b(me, T, fe),
        E(T, T, fe),
        S(ne, T),
        E(fe, le, f),
        D(T, fe, a),
        b(T, T, le),
        D(fe, fe, T),
        D(T, le, f),
        D(le, ne, y),
        S(ne, me),
        h(T, ne, O),
        h(fe, le, O);
    }
    for (let P = 0; P < 16; P++)
      (y[P + 16] = T[P]),
        (y[P + 32] = fe[P]),
        (y[P + 48] = ne[P]),
        (y[P + 64] = le[P]);
    const l = y.subarray(32),
      w = y.subarray(16);
    M(l, l), D(w, w, l);
    const I = new Uint8Array(32);
    return p(I, w), I;
  }
  r.scalarMult = W;
  function G(q) {
    return W(q, s);
  }
  r.scalarMultBase = G;
  function ee(q) {
    if (q.length !== r.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${r.SECRET_KEY_LENGTH} bytes`);
    const F = new Uint8Array(q);
    return { publicKey: G(F), secretKey: F };
  }
  r.generateKeyPairFromSeed = ee;
  function K(q) {
    const F = (0, e.randomBytes)(32, q),
      z = ee(F);
    return (0, t.wipe)(F), z;
  }
  r.generateKeyPair = K;
  function V(q, F, z = !1) {
    if (q.length !== r.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (F.length !== r.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    const y = W(q, F);
    if (z) {
      let T = 0;
      for (let ne = 0; ne < y.length; ne++) T |= y[ne];
      if (T === 0) throw new Error("X25519: invalid shared key");
    }
    return y;
  }
  r.sharedKey = V;
})(Gl);
function Qg(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? globalThis.Buffer.allocUnsafe(r)
    : new Uint8Array(r);
}
function U0(r, e) {
  e || (e = r.reduce((s, a) => s + a.length, 0));
  const t = Qg(e);
  let i = 0;
  for (const s of r) t.set(s, i), (i += s.length);
  return t;
}
function sE(r, e) {
  if (r.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++) t[i] = 255;
  for (var s = 0; s < r.length; s++) {
    var a = r.charAt(s),
      u = a.charCodeAt(0);
    if (t[u] !== 255) throw new TypeError(a + " is ambiguous");
    t[u] = s;
  }
  var h = r.length,
    p = r.charAt(0),
    d = Math.log(h) / Math.log(256),
    b = Math.log(256) / Math.log(h);
  function E(M) {
    if (
      (M instanceof Uint8Array ||
        (ArrayBuffer.isView(M)
          ? (M = new Uint8Array(M.buffer, M.byteOffset, M.byteLength))
          : Array.isArray(M) && (M = Uint8Array.from(M))),
      !(M instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (M.length === 0) return "";
    for (var W = 0, G = 0, ee = 0, K = M.length; ee !== K && M[ee] === 0; )
      ee++, W++;
    for (var V = ((K - ee) * b + 1) >>> 0, q = new Uint8Array(V); ee !== K; ) {
      for (
        var F = M[ee], z = 0, y = V - 1;
        (F !== 0 || z < G) && y !== -1;
        y--, z++
      )
        (F += (256 * q[y]) >>> 0), (q[y] = F % h >>> 0), (F = (F / h) >>> 0);
      if (F !== 0) throw new Error("Non-zero carry");
      (G = z), ee++;
    }
    for (var T = V - G; T !== V && q[T] === 0; ) T++;
    for (var ne = p.repeat(W); T < V; ++T) ne += r.charAt(q[T]);
    return ne;
  }
  function D(M) {
    if (typeof M != "string") throw new TypeError("Expected String");
    if (M.length === 0) return new Uint8Array();
    var W = 0;
    if (M[W] !== " ") {
      for (var G = 0, ee = 0; M[W] === p; ) G++, W++;
      for (
        var K = ((M.length - W) * d + 1) >>> 0, V = new Uint8Array(K);
        M[W];

      ) {
        var q = t[M.charCodeAt(W)];
        if (q === 255) return;
        for (var F = 0, z = K - 1; (q !== 0 || F < ee) && z !== -1; z--, F++)
          (q += (h * V[z]) >>> 0),
            (V[z] = q % 256 >>> 0),
            (q = (q / 256) >>> 0);
        if (q !== 0) throw new Error("Non-zero carry");
        (ee = F), W++;
      }
      if (M[W] !== " ") {
        for (var y = K - ee; y !== K && V[y] === 0; ) y++;
        for (var T = new Uint8Array(G + (K - y)), ne = G; y !== K; )
          T[ne++] = V[y++];
        return T;
      }
    }
  }
  function S(M) {
    var W = D(M);
    if (W) return W;
    throw new Error(`Non-${e} character`);
  }
  return { encode: E, decodeUnsafe: D, decode: S };
}
var oE = sE,
  aE = oE;
const cE = (r) => {
    if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
      return r;
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (ArrayBuffer.isView(r))
      return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  uE = (r) => new TextEncoder().encode(r),
  hE = (r) => new TextDecoder().decode(r);
class lE {
  constructor(e, t, i) {
    (this.name = e), (this.prefix = t), (this.baseEncode = i);
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class fE {
  constructor(e, t, i) {
    if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(e)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Jg(this, e);
  }
}
class dE {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Jg(this, e);
  }
  decode(e) {
    const t = e[0],
      i = this.decoders[t];
    if (i) return i.decode(e);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        e
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const Jg = (r, e) =>
  new dE({
    ...(r.decoders || { [r.prefix]: r }),
    ...(e.decoders || { [e.prefix]: e }),
  });
class pE {
  constructor(e, t, i, s) {
    (this.name = e),
      (this.prefix = t),
      (this.baseEncode = i),
      (this.baseDecode = s),
      (this.encoder = new lE(e, t, i)),
      (this.decoder = new fE(e, t, s));
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
}
const hu = ({ name: r, prefix: e, encode: t, decode: i }) => new pE(r, e, t, i),
  la = ({ prefix: r, name: e, alphabet: t }) => {
    const { encode: i, decode: s } = aE(t, e);
    return hu({ prefix: r, name: e, encode: i, decode: (a) => cE(s(a)) });
  },
  gE = (r, e, t, i) => {
    const s = {};
    for (let b = 0; b < e.length; ++b) s[e[b]] = b;
    let a = r.length;
    for (; r[a - 1] === "="; ) --a;
    const u = new Uint8Array(((a * t) / 8) | 0);
    let h = 0,
      p = 0,
      d = 0;
    for (let b = 0; b < a; ++b) {
      const E = s[r[b]];
      if (E === void 0) throw new SyntaxError(`Non-${i} character`);
      (p = (p << t) | E),
        (h += t),
        h >= 8 && ((h -= 8), (u[d++] = 255 & (p >> h)));
    }
    if (h >= t || 255 & (p << (8 - h)))
      throw new SyntaxError("Unexpected end of data");
    return u;
  },
  mE = (r, e, t) => {
    const i = e[e.length - 1] === "=",
      s = (1 << t) - 1;
    let a = "",
      u = 0,
      h = 0;
    for (let p = 0; p < r.length; ++p)
      for (h = (h << 8) | r[p], u += 8; u > t; )
        (u -= t), (a += e[s & (h >> u)]);
    if ((u && (a += e[s & (h << (t - u))]), i))
      for (; (a.length * t) & 7; ) a += "=";
    return a;
  },
  mr = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) =>
    hu({
      prefix: e,
      name: r,
      encode(s) {
        return mE(s, i, t);
      },
      decode(s) {
        return gE(s, i, t, r);
      },
    }),
  vE = hu({
    prefix: "\0",
    name: "identity",
    encode: (r) => hE(r),
    decode: (r) => uE(r),
  }),
  yE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, identity: vE },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  wE = mr({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
  bE = Object.freeze(
    Object.defineProperty({ __proto__: null, base2: wE }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  _E = mr({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
  EE = Object.freeze(
    Object.defineProperty({ __proto__: null, base8: _E }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  AE = la({ prefix: "9", name: "base10", alphabet: "0123456789" }),
  SE = Object.freeze(
    Object.defineProperty({ __proto__: null, base10: AE }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  IE = mr({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  DE = mr({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  }),
  xE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base16: IE, base16upper: DE },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  PE = mr({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  ME = mr({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  CE = mr({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  OE = mr({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  NE = mr({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  RE = mr({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  TE = mr({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  UE = mr({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  BE = mr({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  }),
  LE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base32: PE,
        base32hex: NE,
        base32hexpad: TE,
        base32hexpadupper: UE,
        base32hexupper: RE,
        base32pad: CE,
        base32padupper: OE,
        base32upper: ME,
        base32z: BE,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  qE = la({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  jE = la({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }),
  $E = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base36: qE, base36upper: jE },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  FE = la({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  zE = la({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  }),
  kE = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base58btc: FE, base58flickr: zE },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  HE = mr({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  KE = mr({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  VE = mr({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  GE = mr({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  }),
  WE = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        base64: HE,
        base64pad: KE,
        base64url: VE,
        base64urlpad: GE,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Xg = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  YE = Xg.reduce((r, e, t) => ((r[t] = e), r), []),
  QE = Xg.reduce((r, e, t) => ((r[e.codePointAt(0)] = t), r), []);
function JE(r) {
  return r.reduce((e, t) => ((e += YE[t]), e), "");
}
function XE(r) {
  const e = [];
  for (const t of r) {
    const i = QE[t.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const ZE = hu({ prefix: "🚀", name: "base256emoji", encode: JE, decode: XE }),
  e5 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, base256emoji: ZE },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
new TextEncoder();
new TextDecoder();
const Kc = {
  ...yE,
  ...bE,
  ...EE,
  ...SE,
  ...xE,
  ...LE,
  ...$E,
  ...kE,
  ...WE,
  ...e5,
};
function Zg(r, e, t, i) {
  return {
    name: r,
    prefix: e,
    encoder: { name: r, prefix: e, encode: t },
    decoder: { decode: i },
  };
}
const B0 = Zg(
    "utf8",
    "u",
    (r) => "u" + new TextDecoder("utf8").decode(r),
    (r) => new TextEncoder().encode(r.substring(1))
  ),
  Nh = Zg(
    "ascii",
    "a",
    (r) => {
      let e = "a";
      for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
      return e;
    },
    (r) => {
      r = r.substring(1);
      const e = Qg(r.length);
      for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
      return e;
    }
  ),
  e1 = {
    utf8: B0,
    "utf-8": B0,
    hex: Kc.base16,
    latin1: Nh,
    ascii: Nh,
    binary: Nh,
    ...Kc,
  };
function Bi(r, e = "utf8") {
  const t = e1[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(r, "utf8")
    : t.decoder.decode(`${t.prefix}${r}`);
}
function Ei(r, e = "utf8") {
  const t = e1[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString(
        "utf8"
      )
    : t.encoder.encode(r).substring(1);
}
const t5 = {
    waku: {
      publish: "waku_publish",
      batchPublish: "waku_batchPublish",
      subscribe: "waku_subscribe",
      batchSubscribe: "waku_batchSubscribe",
      subscription: "waku_subscription",
      unsubscribe: "waku_unsubscribe",
      batchUnsubscribe: "waku_batchUnsubscribe",
      batchFetchMessages: "waku_batchFetchMessages",
    },
    irn: {
      publish: "irn_publish",
      batchPublish: "irn_batchPublish",
      subscribe: "irn_subscribe",
      batchSubscribe: "irn_batchSubscribe",
      subscription: "irn_subscription",
      unsubscribe: "irn_unsubscribe",
      batchUnsubscribe: "irn_batchUnsubscribe",
      batchFetchMessages: "irn_batchFetchMessages",
    },
    iridium: {
      publish: "iridium_publish",
      batchPublish: "iridium_batchPublish",
      subscribe: "iridium_subscribe",
      batchSubscribe: "iridium_batchSubscribe",
      subscription: "iridium_subscription",
      unsubscribe: "iridium_unsubscribe",
      batchUnsubscribe: "iridium_batchUnsubscribe",
      batchFetchMessages: "iridium_batchFetchMessages",
    },
  },
  r5 = ":";
function Jo(r) {
  const [e, t] = r.split(r5);
  return { namespace: e, reference: t };
}
function L0(r, e = []) {
  const t = [];
  return (
    Object.keys(r).forEach((i) => {
      if (e.length && !e.includes(i)) return;
      const s = r[i];
      t.push(...s.accounts);
    }),
    t
  );
}
function t1(r, e) {
  return r.includes(":") ? [r] : e.chains || [];
}
var i5 = Object.defineProperty,
  q0 = Object.getOwnPropertySymbols,
  n5 = Object.prototype.hasOwnProperty,
  s5 = Object.prototype.propertyIsEnumerable,
  j0 = (r, e, t) =>
    e in r
      ? i5(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  $0 = (r, e) => {
    for (var t in e || (e = {})) n5.call(e, t) && j0(r, t, e[t]);
    if (q0) for (var t of q0(e)) s5.call(e, t) && j0(r, t, e[t]);
    return r;
  };
const o5 = "ReactNative",
  Xr = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  },
  a5 = "js";
function ia() {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
}
function lo() {
  return !zl() && !!kl() && navigator.product === o5;
}
function fo() {
  return !ia() && !!kl() && !!zl();
}
function fa() {
  return lo()
    ? Xr.reactNative
    : ia()
    ? Xr.node
    : fo()
    ? Xr.browser
    : Xr.unknown;
}
function c5() {
  var r;
  try {
    return lo() &&
      typeof global < "u" &&
      typeof (global == null ? void 0 : global.Application) < "u"
      ? (r = global.Application) == null
        ? void 0
        : r.applicationId
      : void 0;
  } catch {
    return;
  }
}
function u5(r, e) {
  let t = ra.parse(r);
  return (t = $0($0({}, t), e)), (r = ra.stringify(t)), r;
}
function h5() {
  return Lg() || { name: "", description: "", url: "", icons: [""] };
}
function l5() {
  if (
    fa() === Xr.reactNative &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u"
  ) {
    const { OS: t, Version: i } = global.Platform;
    return [t, i].join("-");
  }
  const r = __();
  if (r === null) return "unknown";
  const e = r.os ? r.os.replace(" ", "").toLowerCase() : "unknown";
  return r.type === "browser"
    ? [e, r.name, r.version].join("-")
    : [e, r.version].join("-");
}
function f5() {
  var r;
  const e = fa();
  return e === Xr.browser
    ? [e, ((r = Bg()) == null ? void 0 : r.host) || "unknown"].join(":")
    : e;
}
function d5(r, e, t) {
  const i = l5(),
    s = f5();
  return [[r, e].join("-"), [a5, t].join("-"), i, s].join("/");
}
function p5({
  protocol: r,
  version: e,
  relayUrl: t,
  sdkVersion: i,
  auth: s,
  projectId: a,
  useOnCloseEvent: u,
  bundleId: h,
}) {
  const p = t.split("?"),
    d = d5(r, e, i),
    b = {
      auth: s,
      ua: d,
      projectId: a,
      useOnCloseEvent: u || void 0,
      origin: h || void 0,
    },
    E = u5(p[1] || "", b);
  return p[0] + "?" + E;
}
function bs(r, e) {
  return r.filter((t) => e.includes(t)).length === r.length;
}
function r1(r) {
  return Object.fromEntries(r.entries());
}
function i1(r) {
  return new Map(Object.entries(r));
}
function ws(r = ye.FIVE_MINUTES, e) {
  const t = ye.toMiliseconds(r || ye.FIVE_MINUTES);
  let i, s, a;
  return {
    resolve: (u) => {
      a && i && (clearTimeout(a), i(u));
    },
    reject: (u) => {
      a && s && (clearTimeout(a), s(u));
    },
    done: () =>
      new Promise((u, h) => {
        (a = setTimeout(() => {
          h(new Error(e));
        }, t)),
          (i = u),
          (s = h);
      }),
  };
}
function io(r, e, t) {
  return new Promise(async (i, s) => {
    const a = setTimeout(() => s(new Error(t)), e);
    try {
      const u = await r;
      i(u);
    } catch (u) {
      s(u);
    }
    clearTimeout(a);
  });
}
function n1(r, e) {
  if (typeof e == "string" && e.startsWith(`${r}:`)) return e;
  if (r.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (r.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${r}`);
}
function g5(r) {
  return n1("topic", r);
}
function m5(r) {
  return n1("id", r);
}
function s1(r) {
  const [e, t] = r.split(":"),
    i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string") i.topic = t;
  else if (e === "id" && Number.isInteger(Number(t))) i.id = Number(t);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${e}:${t}`
    );
  return i;
}
function pr(r, e) {
  return ye.fromMiliseconds(Date.now() + ye.toMiliseconds(r));
}
function kn(r) {
  return Date.now() >= ye.toMiliseconds(r);
}
function dt(r, e) {
  return `${r}${e ? `:${e}` : ""}`;
}
function Tc(r = [], e = []) {
  return [...new Set([...r, ...e])];
}
async function v5({ id: r, topic: e, wcDeepLink: t }) {
  try {
    if (!t) return;
    const i = typeof t == "string" ? JSON.parse(t) : t;
    let s = i == null ? void 0 : i.href;
    if (typeof s != "string") return;
    s.endsWith("/") && (s = s.slice(0, -1));
    const a = `${s}/wc?requestId=${r}&sessionTopic=${e}`,
      u = fa();
    u === Xr.browser
      ? a.startsWith("https://") || a.startsWith("http://")
        ? window.open(a, "_blank", "noreferrer noopener")
        : window.open(a, "_self", "noreferrer noopener")
      : u === Xr.reactNative &&
        typeof (global == null ? void 0 : global.Linking) < "u" &&
        (await global.Linking.openURL(a));
  } catch (i) {
    console.error(i);
  }
}
async function y5(r, e) {
  try {
    return (await r.getItem(e)) || (fo() ? localStorage.getItem(e) : void 0);
  } catch (t) {
    console.error(t);
  }
}
var o1 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function w5(r) {
  var e = r.default;
  if (typeof e == "function") {
    var t = function () {
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return (
    Object.defineProperty(t, "__esModule", { value: !0 }),
    Object.keys(r).forEach(function (i) {
      var s = Object.getOwnPropertyDescriptor(r, i);
      Object.defineProperty(
        t,
        i,
        s.get
          ? s
          : {
              enumerable: !0,
              get: function () {
                return r[i];
              },
            }
      );
    }),
    t
  );
}
var a1 = { exports: {} };
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */ (function (r) {
  (function () {
    var e = "input is invalid type",
      t = "finalize already called",
      i = typeof window == "object",
      s = i ? window : {};
    s.JS_SHA3_NO_WINDOW && (i = !1);
    var a = !i && typeof self == "object",
      u =
        !s.JS_SHA3_NO_NODE_JS &&
        typeof process == "object" &&
        process.versions &&
        process.versions.node;
    u ? (s = o1) : a && (s = self);
    var h = !s.JS_SHA3_NO_COMMON_JS && !0 && r.exports,
      p = !s.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
      d = "0123456789abcdef".split(""),
      b = [31, 7936, 2031616, 520093696],
      E = [4, 1024, 262144, 67108864],
      D = [1, 256, 65536, 16777216],
      S = [6, 1536, 393216, 100663296],
      M = [0, 8, 16, 24],
      W = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
        2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
        0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
        2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648,
        32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ],
      G = [224, 256, 384, 512],
      ee = [128, 256],
      K = ["hex", "buffer", "arrayBuffer", "array", "digest"],
      V = { 128: 168, 256: 136 };
    (s.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
      (Array.isArray = function (_) {
        return Object.prototype.toString.call(_) === "[object Array]";
      }),
      p &&
        (s.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
        (ArrayBuffer.isView = function (_) {
          return (
            typeof _ == "object" &&
            _.buffer &&
            _.buffer.constructor === ArrayBuffer
          );
        });
    for (
      var q = function (_, Z, L) {
          return function (j) {
            return new N(_, Z, _).update(j)[L]();
          };
        },
        F = function (_, Z, L) {
          return function (j, k) {
            return new N(_, Z, k).update(j)[L]();
          };
        },
        z = function (_, Z, L) {
          return function (j, k, m, B) {
            return l["cshake" + _].update(j, k, m, B)[L]();
          };
        },
        y = function (_, Z, L) {
          return function (j, k, m, B) {
            return l["kmac" + _].update(j, k, m, B)[L]();
          };
        },
        T = function (_, Z, L, j) {
          for (var k = 0; k < K.length; ++k) {
            var m = K[k];
            _[m] = Z(L, j, m);
          }
          return _;
        },
        ne = function (_, Z) {
          var L = q(_, Z, "hex");
          return (
            (L.create = function () {
              return new N(_, Z, _);
            }),
            (L.update = function (j) {
              return L.create().update(j);
            }),
            T(L, q, _, Z)
          );
        },
        fe = function (_, Z) {
          var L = F(_, Z, "hex");
          return (
            (L.create = function (j) {
              return new N(_, Z, j);
            }),
            (L.update = function (j, k) {
              return L.create(k).update(j);
            }),
            T(L, F, _, Z)
          );
        },
        le = function (_, Z) {
          var L = V[_],
            j = z(_, Z, "hex");
          return (
            (j.create = function (k, m, B) {
              return !m && !B
                ? l["shake" + _].create(k)
                : new N(_, Z, k).bytepad([m, B], L);
            }),
            (j.update = function (k, m, B, te) {
              return j.create(m, B, te).update(k);
            }),
            T(j, z, _, Z)
          );
        },
        me = function (_, Z) {
          var L = V[_],
            j = y(_, Z, "hex");
          return (
            (j.create = function (k, m, B) {
              return new ie(_, Z, m).bytepad(["KMAC", B], L).bytepad([k], L);
            }),
            (j.update = function (k, m, B, te) {
              return j.create(k, B, te).update(m);
            }),
            T(j, y, _, Z)
          );
        },
        f = [
          { name: "keccak", padding: D, bits: G, createMethod: ne },
          { name: "sha3", padding: S, bits: G, createMethod: ne },
          { name: "shake", padding: b, bits: ee, createMethod: fe },
          { name: "cshake", padding: E, bits: ee, createMethod: le },
          { name: "kmac", padding: E, bits: ee, createMethod: me },
        ],
        l = {},
        w = [],
        I = 0;
      I < f.length;
      ++I
    )
      for (var P = f[I], O = P.bits, U = 0; U < O.length; ++U) {
        var x = P.name + "_" + O[U];
        if (
          (w.push(x),
          (l[x] = P.createMethod(O[U], P.padding)),
          P.name !== "sha3")
        ) {
          var g = P.name + O[U];
          w.push(g), (l[g] = l[x]);
        }
      }
    function N(_, Z, L) {
      (this.blocks = []),
        (this.s = []),
        (this.padding = Z),
        (this.outputBits = L),
        (this.reset = !0),
        (this.finalized = !1),
        (this.block = 0),
        (this.start = 0),
        (this.blockCount = (1600 - (_ << 1)) >> 5),
        (this.byteCount = this.blockCount << 2),
        (this.outputBlocks = L >> 5),
        (this.extraBytes = (L & 31) >> 3);
      for (var j = 0; j < 50; ++j) this.s[j] = 0;
    }
    (N.prototype.update = function (_) {
      if (this.finalized) throw new Error(t);
      var Z,
        L = typeof _;
      if (L !== "string") {
        if (L === "object") {
          if (_ === null) throw new Error(e);
          if (p && _.constructor === ArrayBuffer) _ = new Uint8Array(_);
          else if (!Array.isArray(_) && (!p || !ArrayBuffer.isView(_)))
            throw new Error(e);
        } else throw new Error(e);
        Z = !0;
      }
      for (
        var j = this.blocks,
          k = this.byteCount,
          m = _.length,
          B = this.blockCount,
          te = 0,
          ue = this.s,
          ae,
          Pe;
        te < m;

      ) {
        if (this.reset)
          for (this.reset = !1, j[0] = this.block, ae = 1; ae < B + 1; ++ae)
            j[ae] = 0;
        if (Z)
          for (ae = this.start; te < m && ae < k; ++te)
            j[ae >> 2] |= _[te] << M[ae++ & 3];
        else
          for (ae = this.start; te < m && ae < k; ++te)
            (Pe = _.charCodeAt(te)),
              Pe < 128
                ? (j[ae >> 2] |= Pe << M[ae++ & 3])
                : Pe < 2048
                ? ((j[ae >> 2] |= (192 | (Pe >> 6)) << M[ae++ & 3]),
                  (j[ae >> 2] |= (128 | (Pe & 63)) << M[ae++ & 3]))
                : Pe < 55296 || Pe >= 57344
                ? ((j[ae >> 2] |= (224 | (Pe >> 12)) << M[ae++ & 3]),
                  (j[ae >> 2] |= (128 | ((Pe >> 6) & 63)) << M[ae++ & 3]),
                  (j[ae >> 2] |= (128 | (Pe & 63)) << M[ae++ & 3]))
                : ((Pe =
                    65536 +
                    (((Pe & 1023) << 10) | (_.charCodeAt(++te) & 1023))),
                  (j[ae >> 2] |= (240 | (Pe >> 18)) << M[ae++ & 3]),
                  (j[ae >> 2] |= (128 | ((Pe >> 12) & 63)) << M[ae++ & 3]),
                  (j[ae >> 2] |= (128 | ((Pe >> 6) & 63)) << M[ae++ & 3]),
                  (j[ae >> 2] |= (128 | (Pe & 63)) << M[ae++ & 3]));
        if (((this.lastByteIndex = ae), ae >= k)) {
          for (this.start = ae - k, this.block = j[B], ae = 0; ae < B; ++ae)
            ue[ae] ^= j[ae];
          de(ue), (this.reset = !0);
        } else this.start = ae;
      }
      return this;
    }),
      (N.prototype.encode = function (_, Z) {
        var L = _ & 255,
          j = 1,
          k = [L];
        for (_ = _ >> 8, L = _ & 255; L > 0; )
          k.unshift(L), (_ = _ >> 8), (L = _ & 255), ++j;
        return Z ? k.push(j) : k.unshift(j), this.update(k), k.length;
      }),
      (N.prototype.encodeString = function (_) {
        var Z,
          L = typeof _;
        if (L !== "string") {
          if (L === "object") {
            if (_ === null) throw new Error(e);
            if (p && _.constructor === ArrayBuffer) _ = new Uint8Array(_);
            else if (!Array.isArray(_) && (!p || !ArrayBuffer.isView(_)))
              throw new Error(e);
          } else throw new Error(e);
          Z = !0;
        }
        var j = 0,
          k = _.length;
        if (Z) j = k;
        else
          for (var m = 0; m < _.length; ++m) {
            var B = _.charCodeAt(m);
            B < 128
              ? (j += 1)
              : B < 2048
              ? (j += 2)
              : B < 55296 || B >= 57344
              ? (j += 3)
              : ((B =
                  65536 + (((B & 1023) << 10) | (_.charCodeAt(++m) & 1023))),
                (j += 4));
          }
        return (j += this.encode(j * 8)), this.update(_), j;
      }),
      (N.prototype.bytepad = function (_, Z) {
        for (var L = this.encode(Z), j = 0; j < _.length; ++j)
          L += this.encodeString(_[j]);
        var k = Z - (L % Z),
          m = [];
        return (m.length = k), this.update(m), this;
      }),
      (N.prototype.finalize = function () {
        if (!this.finalized) {
          this.finalized = !0;
          var _ = this.blocks,
            Z = this.lastByteIndex,
            L = this.blockCount,
            j = this.s;
          if (
            ((_[Z >> 2] |= this.padding[Z & 3]),
            this.lastByteIndex === this.byteCount)
          )
            for (_[0] = _[L], Z = 1; Z < L + 1; ++Z) _[Z] = 0;
          for (_[L - 1] |= 2147483648, Z = 0; Z < L; ++Z) j[Z] ^= _[Z];
          de(j);
        }
      }),
      (N.prototype.toString = N.prototype.hex =
        function () {
          this.finalize();
          for (
            var _ = this.blockCount,
              Z = this.s,
              L = this.outputBlocks,
              j = this.extraBytes,
              k = 0,
              m = 0,
              B = "",
              te;
            m < L;

          ) {
            for (k = 0; k < _ && m < L; ++k, ++m)
              (te = Z[k]),
                (B +=
                  d[(te >> 4) & 15] +
                  d[te & 15] +
                  d[(te >> 12) & 15] +
                  d[(te >> 8) & 15] +
                  d[(te >> 20) & 15] +
                  d[(te >> 16) & 15] +
                  d[(te >> 28) & 15] +
                  d[(te >> 24) & 15]);
            m % _ === 0 && (de(Z), (k = 0));
          }
          return (
            j &&
              ((te = Z[k]),
              (B += d[(te >> 4) & 15] + d[te & 15]),
              j > 1 && (B += d[(te >> 12) & 15] + d[(te >> 8) & 15]),
              j > 2 && (B += d[(te >> 20) & 15] + d[(te >> 16) & 15])),
            B
          );
        }),
      (N.prototype.arrayBuffer = function () {
        this.finalize();
        var _ = this.blockCount,
          Z = this.s,
          L = this.outputBlocks,
          j = this.extraBytes,
          k = 0,
          m = 0,
          B = this.outputBits >> 3,
          te;
        j ? (te = new ArrayBuffer((L + 1) << 2)) : (te = new ArrayBuffer(B));
        for (var ue = new Uint32Array(te); m < L; ) {
          for (k = 0; k < _ && m < L; ++k, ++m) ue[m] = Z[k];
          m % _ === 0 && de(Z);
        }
        return j && ((ue[k] = Z[k]), (te = te.slice(0, B))), te;
      }),
      (N.prototype.buffer = N.prototype.arrayBuffer),
      (N.prototype.digest = N.prototype.array =
        function () {
          this.finalize();
          for (
            var _ = this.blockCount,
              Z = this.s,
              L = this.outputBlocks,
              j = this.extraBytes,
              k = 0,
              m = 0,
              B = [],
              te,
              ue;
            m < L;

          ) {
            for (k = 0; k < _ && m < L; ++k, ++m)
              (te = m << 2),
                (ue = Z[k]),
                (B[te] = ue & 255),
                (B[te + 1] = (ue >> 8) & 255),
                (B[te + 2] = (ue >> 16) & 255),
                (B[te + 3] = (ue >> 24) & 255);
            m % _ === 0 && de(Z);
          }
          return (
            j &&
              ((te = m << 2),
              (ue = Z[k]),
              (B[te] = ue & 255),
              j > 1 && (B[te + 1] = (ue >> 8) & 255),
              j > 2 && (B[te + 2] = (ue >> 16) & 255)),
            B
          );
        });
    function ie(_, Z, L) {
      N.call(this, _, Z, L);
    }
    (ie.prototype = new N()),
      (ie.prototype.finalize = function () {
        return (
          this.encode(this.outputBits, !0), N.prototype.finalize.call(this)
        );
      });
    var de = function (_) {
      var Z,
        L,
        j,
        k,
        m,
        B,
        te,
        ue,
        ae,
        Pe,
        Ce,
        Ie,
        Et,
        Fe,
        xe,
        Le,
        _e,
        Ee,
        Ve,
        we,
        Ae,
        Be,
        be,
        Me,
        qe,
        Oe,
        Ne,
        st,
        Te,
        Re,
        Ht,
        ct,
        pt,
        Kt,
        yt,
        _t,
        Er,
        Ge,
        ze,
        It,
        We,
        Ke,
        At,
        Je,
        Xe,
        Dt,
        Ze,
        Ye,
        Mt,
        Qe,
        je,
        Tt,
        et,
        Ct,
        Si,
        Ot,
        lt,
        ri,
        ii,
        ni,
        si,
        oi,
        or;
      for (j = 0; j < 48; j += 2)
        (k = _[0] ^ _[10] ^ _[20] ^ _[30] ^ _[40]),
          (m = _[1] ^ _[11] ^ _[21] ^ _[31] ^ _[41]),
          (B = _[2] ^ _[12] ^ _[22] ^ _[32] ^ _[42]),
          (te = _[3] ^ _[13] ^ _[23] ^ _[33] ^ _[43]),
          (ue = _[4] ^ _[14] ^ _[24] ^ _[34] ^ _[44]),
          (ae = _[5] ^ _[15] ^ _[25] ^ _[35] ^ _[45]),
          (Pe = _[6] ^ _[16] ^ _[26] ^ _[36] ^ _[46]),
          (Ce = _[7] ^ _[17] ^ _[27] ^ _[37] ^ _[47]),
          (Ie = _[8] ^ _[18] ^ _[28] ^ _[38] ^ _[48]),
          (Et = _[9] ^ _[19] ^ _[29] ^ _[39] ^ _[49]),
          (Z = Ie ^ ((B << 1) | (te >>> 31))),
          (L = Et ^ ((te << 1) | (B >>> 31))),
          (_[0] ^= Z),
          (_[1] ^= L),
          (_[10] ^= Z),
          (_[11] ^= L),
          (_[20] ^= Z),
          (_[21] ^= L),
          (_[30] ^= Z),
          (_[31] ^= L),
          (_[40] ^= Z),
          (_[41] ^= L),
          (Z = k ^ ((ue << 1) | (ae >>> 31))),
          (L = m ^ ((ae << 1) | (ue >>> 31))),
          (_[2] ^= Z),
          (_[3] ^= L),
          (_[12] ^= Z),
          (_[13] ^= L),
          (_[22] ^= Z),
          (_[23] ^= L),
          (_[32] ^= Z),
          (_[33] ^= L),
          (_[42] ^= Z),
          (_[43] ^= L),
          (Z = B ^ ((Pe << 1) | (Ce >>> 31))),
          (L = te ^ ((Ce << 1) | (Pe >>> 31))),
          (_[4] ^= Z),
          (_[5] ^= L),
          (_[14] ^= Z),
          (_[15] ^= L),
          (_[24] ^= Z),
          (_[25] ^= L),
          (_[34] ^= Z),
          (_[35] ^= L),
          (_[44] ^= Z),
          (_[45] ^= L),
          (Z = ue ^ ((Ie << 1) | (Et >>> 31))),
          (L = ae ^ ((Et << 1) | (Ie >>> 31))),
          (_[6] ^= Z),
          (_[7] ^= L),
          (_[16] ^= Z),
          (_[17] ^= L),
          (_[26] ^= Z),
          (_[27] ^= L),
          (_[36] ^= Z),
          (_[37] ^= L),
          (_[46] ^= Z),
          (_[47] ^= L),
          (Z = Pe ^ ((k << 1) | (m >>> 31))),
          (L = Ce ^ ((m << 1) | (k >>> 31))),
          (_[8] ^= Z),
          (_[9] ^= L),
          (_[18] ^= Z),
          (_[19] ^= L),
          (_[28] ^= Z),
          (_[29] ^= L),
          (_[38] ^= Z),
          (_[39] ^= L),
          (_[48] ^= Z),
          (_[49] ^= L),
          (Fe = _[0]),
          (xe = _[1]),
          (Dt = (_[11] << 4) | (_[10] >>> 28)),
          (Ze = (_[10] << 4) | (_[11] >>> 28)),
          (st = (_[20] << 3) | (_[21] >>> 29)),
          (Te = (_[21] << 3) | (_[20] >>> 29)),
          (ni = (_[31] << 9) | (_[30] >>> 23)),
          (si = (_[30] << 9) | (_[31] >>> 23)),
          (Ke = (_[40] << 18) | (_[41] >>> 14)),
          (At = (_[41] << 18) | (_[40] >>> 14)),
          (Kt = (_[2] << 1) | (_[3] >>> 31)),
          (yt = (_[3] << 1) | (_[2] >>> 31)),
          (Le = (_[13] << 12) | (_[12] >>> 20)),
          (_e = (_[12] << 12) | (_[13] >>> 20)),
          (Ye = (_[22] << 10) | (_[23] >>> 22)),
          (Mt = (_[23] << 10) | (_[22] >>> 22)),
          (Re = (_[33] << 13) | (_[32] >>> 19)),
          (Ht = (_[32] << 13) | (_[33] >>> 19)),
          (oi = (_[42] << 2) | (_[43] >>> 30)),
          (or = (_[43] << 2) | (_[42] >>> 30)),
          (Ct = (_[5] << 30) | (_[4] >>> 2)),
          (Si = (_[4] << 30) | (_[5] >>> 2)),
          (_t = (_[14] << 6) | (_[15] >>> 26)),
          (Er = (_[15] << 6) | (_[14] >>> 26)),
          (Ee = (_[25] << 11) | (_[24] >>> 21)),
          (Ve = (_[24] << 11) | (_[25] >>> 21)),
          (Qe = (_[34] << 15) | (_[35] >>> 17)),
          (je = (_[35] << 15) | (_[34] >>> 17)),
          (ct = (_[45] << 29) | (_[44] >>> 3)),
          (pt = (_[44] << 29) | (_[45] >>> 3)),
          (Me = (_[6] << 28) | (_[7] >>> 4)),
          (qe = (_[7] << 28) | (_[6] >>> 4)),
          (Ot = (_[17] << 23) | (_[16] >>> 9)),
          (lt = (_[16] << 23) | (_[17] >>> 9)),
          (Ge = (_[26] << 25) | (_[27] >>> 7)),
          (ze = (_[27] << 25) | (_[26] >>> 7)),
          (we = (_[36] << 21) | (_[37] >>> 11)),
          (Ae = (_[37] << 21) | (_[36] >>> 11)),
          (Tt = (_[47] << 24) | (_[46] >>> 8)),
          (et = (_[46] << 24) | (_[47] >>> 8)),
          (Je = (_[8] << 27) | (_[9] >>> 5)),
          (Xe = (_[9] << 27) | (_[8] >>> 5)),
          (Oe = (_[18] << 20) | (_[19] >>> 12)),
          (Ne = (_[19] << 20) | (_[18] >>> 12)),
          (ri = (_[29] << 7) | (_[28] >>> 25)),
          (ii = (_[28] << 7) | (_[29] >>> 25)),
          (It = (_[38] << 8) | (_[39] >>> 24)),
          (We = (_[39] << 8) | (_[38] >>> 24)),
          (Be = (_[48] << 14) | (_[49] >>> 18)),
          (be = (_[49] << 14) | (_[48] >>> 18)),
          (_[0] = Fe ^ (~Le & Ee)),
          (_[1] = xe ^ (~_e & Ve)),
          (_[10] = Me ^ (~Oe & st)),
          (_[11] = qe ^ (~Ne & Te)),
          (_[20] = Kt ^ (~_t & Ge)),
          (_[21] = yt ^ (~Er & ze)),
          (_[30] = Je ^ (~Dt & Ye)),
          (_[31] = Xe ^ (~Ze & Mt)),
          (_[40] = Ct ^ (~Ot & ri)),
          (_[41] = Si ^ (~lt & ii)),
          (_[2] = Le ^ (~Ee & we)),
          (_[3] = _e ^ (~Ve & Ae)),
          (_[12] = Oe ^ (~st & Re)),
          (_[13] = Ne ^ (~Te & Ht)),
          (_[22] = _t ^ (~Ge & It)),
          (_[23] = Er ^ (~ze & We)),
          (_[32] = Dt ^ (~Ye & Qe)),
          (_[33] = Ze ^ (~Mt & je)),
          (_[42] = Ot ^ (~ri & ni)),
          (_[43] = lt ^ (~ii & si)),
          (_[4] = Ee ^ (~we & Be)),
          (_[5] = Ve ^ (~Ae & be)),
          (_[14] = st ^ (~Re & ct)),
          (_[15] = Te ^ (~Ht & pt)),
          (_[24] = Ge ^ (~It & Ke)),
          (_[25] = ze ^ (~We & At)),
          (_[34] = Ye ^ (~Qe & Tt)),
          (_[35] = Mt ^ (~je & et)),
          (_[44] = ri ^ (~ni & oi)),
          (_[45] = ii ^ (~si & or)),
          (_[6] = we ^ (~Be & Fe)),
          (_[7] = Ae ^ (~be & xe)),
          (_[16] = Re ^ (~ct & Me)),
          (_[17] = Ht ^ (~pt & qe)),
          (_[26] = It ^ (~Ke & Kt)),
          (_[27] = We ^ (~At & yt)),
          (_[36] = Qe ^ (~Tt & Je)),
          (_[37] = je ^ (~et & Xe)),
          (_[46] = ni ^ (~oi & Ct)),
          (_[47] = si ^ (~or & Si)),
          (_[8] = Be ^ (~Fe & Le)),
          (_[9] = be ^ (~xe & _e)),
          (_[18] = ct ^ (~Me & Oe)),
          (_[19] = pt ^ (~qe & Ne)),
          (_[28] = Ke ^ (~Kt & _t)),
          (_[29] = At ^ (~yt & Er)),
          (_[38] = Tt ^ (~Je & Dt)),
          (_[39] = et ^ (~Xe & Ze)),
          (_[48] = oi ^ (~Ct & Ot)),
          (_[49] = or ^ (~Si & lt)),
          (_[0] ^= W[j]),
          (_[1] ^= W[j + 1]);
    };
    if (h) r.exports = l;
    else for (I = 0; I < w.length; ++I) s[w[I]] = l[w[I]];
  })();
})(a1);
var b5 = a1.exports;
const _5 = "logger/5.7.0";
let F0 = !1,
  z0 = !1;
const Uc = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let k0 = Uc.default,
  Rh = null;
function E5() {
  try {
    const r = [];
    if (
      (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
        try {
          if ("test".normalize(e) !== "test") throw new Error("bad normalize");
        } catch {
          r.push(e);
        }
      }),
      r.length)
    )
      throw new Error("missing " + r.join(", "));
    if ("é".normalize("NFD") !== "é") throw new Error("broken implementation");
  } catch (r) {
    return r.message;
  }
  return null;
}
const H0 = E5();
var wl;
(function (r) {
  (r.DEBUG = "DEBUG"),
    (r.INFO = "INFO"),
    (r.WARNING = "WARNING"),
    (r.ERROR = "ERROR"),
    (r.OFF = "OFF");
})(wl || (wl = {}));
var Ri;
(function (r) {
  (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
    (r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
    (r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
    (r.NETWORK_ERROR = "NETWORK_ERROR"),
    (r.SERVER_ERROR = "SERVER_ERROR"),
    (r.TIMEOUT = "TIMEOUT"),
    (r.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
    (r.NUMERIC_FAULT = "NUMERIC_FAULT"),
    (r.MISSING_NEW = "MISSING_NEW"),
    (r.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
    (r.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
    (r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
    (r.CALL_EXCEPTION = "CALL_EXCEPTION"),
    (r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
    (r.NONCE_EXPIRED = "NONCE_EXPIRED"),
    (r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
    (r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
    (r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
    (r.ACTION_REJECTED = "ACTION_REJECTED");
})(Ri || (Ri = {}));
const K0 = "0123456789abcdef";
let gr = class sr {
  constructor(e) {
    Object.defineProperty(this, "version", {
      enumerable: !0,
      value: e,
      writable: !1,
    });
  }
  _log(e, t) {
    const i = e.toLowerCase();
    Uc[i] == null &&
      this.throwArgumentError("invalid log level name", "logLevel", e),
      !(k0 > Uc[i]) && console.log.apply(console, t);
  }
  debug(...e) {
    this._log(sr.levels.DEBUG, e);
  }
  info(...e) {
    this._log(sr.levels.INFO, e);
  }
  warn(...e) {
    this._log(sr.levels.WARNING, e);
  }
  makeError(e, t, i) {
    if (z0) return this.makeError("censored error", t, {});
    t || (t = sr.errors.UNKNOWN_ERROR), i || (i = {});
    const s = [];
    Object.keys(i).forEach((p) => {
      const d = i[p];
      try {
        if (d instanceof Uint8Array) {
          let b = "";
          for (let E = 0; E < d.length; E++)
            (b += K0[d[E] >> 4]), (b += K0[d[E] & 15]);
          s.push(p + "=Uint8Array(0x" + b + ")");
        } else s.push(p + "=" + JSON.stringify(d));
      } catch {
        s.push(p + "=" + JSON.stringify(i[p].toString()));
      }
    }),
      s.push(`code=${t}`),
      s.push(`version=${this.version}`);
    const a = e;
    let u = "";
    switch (t) {
      case Ri.NUMERIC_FAULT: {
        u = "NUMERIC_FAULT";
        const p = e;
        switch (p) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            u += "-" + p;
            break;
          case "negative-power":
          case "negative-width":
            u += "-unsupported";
            break;
          case "unbound-bitwise-result":
            u += "-unbound-result";
            break;
        }
        break;
      }
      case Ri.CALL_EXCEPTION:
      case Ri.INSUFFICIENT_FUNDS:
      case Ri.MISSING_NEW:
      case Ri.NONCE_EXPIRED:
      case Ri.REPLACEMENT_UNDERPRICED:
      case Ri.TRANSACTION_REPLACED:
      case Ri.UNPREDICTABLE_GAS_LIMIT:
        u = t;
        break;
    }
    u && (e += " [ See: https://links.ethers.org/v5-errors-" + u + " ]"),
      s.length && (e += " (" + s.join(", ") + ")");
    const h = new Error(e);
    return (
      (h.reason = a),
      (h.code = t),
      Object.keys(i).forEach(function (p) {
        h[p] = i[p];
      }),
      h
    );
  }
  throwError(e, t, i) {
    throw this.makeError(e, t, i);
  }
  throwArgumentError(e, t, i) {
    return this.throwError(e, sr.errors.INVALID_ARGUMENT, {
      argument: t,
      value: i,
    });
  }
  assert(e, t, i, s) {
    e || this.throwError(t, i, s);
  }
  assertArgument(e, t, i, s) {
    e || this.throwArgumentError(t, i, s);
  }
  checkNormalize(e) {
    H0 &&
      this.throwError(
        "platform missing String.prototype.normalize",
        sr.errors.UNSUPPORTED_OPERATION,
        { operation: "String.prototype.normalize", form: H0 }
      );
  }
  checkSafeUint53(e, t) {
    typeof e == "number" &&
      (t == null && (t = "value not safe"),
      (e < 0 || e >= 9007199254740991) &&
        this.throwError(t, sr.errors.NUMERIC_FAULT, {
          operation: "checkSafeInteger",
          fault: "out-of-safe-range",
          value: e,
        }),
      e % 1 &&
        this.throwError(t, sr.errors.NUMERIC_FAULT, {
          operation: "checkSafeInteger",
          fault: "non-integer",
          value: e,
        }));
  }
  checkArgumentCount(e, t, i) {
    i ? (i = ": " + i) : (i = ""),
      e < t &&
        this.throwError("missing argument" + i, sr.errors.MISSING_ARGUMENT, {
          count: e,
          expectedCount: t,
        }),
      e > t &&
        this.throwError(
          "too many arguments" + i,
          sr.errors.UNEXPECTED_ARGUMENT,
          { count: e, expectedCount: t }
        );
  }
  checkNew(e, t) {
    (e === Object || e == null) &&
      this.throwError("missing new", sr.errors.MISSING_NEW, { name: t.name });
  }
  checkAbstract(e, t) {
    e === t
      ? this.throwError(
          "cannot instantiate abstract class " +
            JSON.stringify(t.name) +
            " directly; use a sub-class",
          sr.errors.UNSUPPORTED_OPERATION,
          { name: e.name, operation: "new" }
        )
      : (e === Object || e == null) &&
        this.throwError("missing new", sr.errors.MISSING_NEW, { name: t.name });
  }
  static globalLogger() {
    return Rh || (Rh = new sr(_5)), Rh;
  }
  static setCensorship(e, t) {
    if (
      (!e &&
        t &&
        this.globalLogger().throwError(
          "cannot permanently disable censorship",
          sr.errors.UNSUPPORTED_OPERATION,
          { operation: "setCensorship" }
        ),
      F0)
    ) {
      if (!e) return;
      this.globalLogger().throwError(
        "error censorship permanent",
        sr.errors.UNSUPPORTED_OPERATION,
        { operation: "setCensorship" }
      );
    }
    (z0 = !!e), (F0 = !!t);
  }
  static setLogLevel(e) {
    const t = Uc[e.toLowerCase()];
    if (t == null) {
      sr.globalLogger().warn("invalid log level - " + e);
      return;
    }
    k0 = t;
  }
  static from(e) {
    return new sr(e);
  }
};
(gr.errors = Ri), (gr.levels = wl);
const A5 = "bytes/5.7.0",
  Xt = new gr(A5);
function c1(r) {
  return !!r.toHexString;
}
function no(r) {
  return (
    r.slice ||
      (r.slice = function () {
        const e = Array.prototype.slice.call(arguments);
        return no(new Uint8Array(Array.prototype.slice.apply(r, e)));
      }),
    r
  );
}
function S5(r) {
  return (Zr(r) && !(r.length % 2)) || po(r);
}
function V0(r) {
  return typeof r == "number" && r == r && r % 1 === 0;
}
function po(r) {
  if (r == null) return !1;
  if (r.constructor === Uint8Array) return !0;
  if (typeof r == "string" || !V0(r.length) || r.length < 0) return !1;
  for (let e = 0; e < r.length; e++) {
    const t = r[e];
    if (!V0(t) || t < 0 || t >= 256) return !1;
  }
  return !0;
}
function Wt(r, e) {
  if ((e || (e = {}), typeof r == "number")) {
    Xt.checkSafeUint53(r, "invalid arrayify value");
    const t = [];
    for (; r; ) t.unshift(r & 255), (r = parseInt(String(r / 256)));
    return t.length === 0 && t.push(0), no(new Uint8Array(t));
  }
  if (
    (e.allowMissingPrefix &&
      typeof r == "string" &&
      r.substring(0, 2) !== "0x" &&
      (r = "0x" + r),
    c1(r) && (r = r.toHexString()),
    Zr(r))
  ) {
    let t = r.substring(2);
    t.length % 2 &&
      (e.hexPad === "left"
        ? (t = "0" + t)
        : e.hexPad === "right"
        ? (t += "0")
        : Xt.throwArgumentError("hex data is odd-length", "value", r));
    const i = [];
    for (let s = 0; s < t.length; s += 2)
      i.push(parseInt(t.substring(s, s + 2), 16));
    return no(new Uint8Array(i));
  }
  return po(r)
    ? no(new Uint8Array(r))
    : Xt.throwArgumentError("invalid arrayify value", "value", r);
}
function I5(r) {
  const e = r.map((s) => Wt(s)),
    t = e.reduce((s, a) => s + a.length, 0),
    i = new Uint8Array(t);
  return e.reduce((s, a) => (i.set(a, s), s + a.length), 0), no(i);
}
function D5(r, e) {
  (r = Wt(r)),
    r.length > e &&
      Xt.throwArgumentError("value out of range", "value", arguments[0]);
  const t = new Uint8Array(e);
  return t.set(r, e - r.length), no(t);
}
function Zr(r, e) {
  return !(
    typeof r != "string" ||
    !r.match(/^0x[0-9A-Fa-f]*$/) ||
    (e && r.length !== 2 + 2 * e)
  );
}
const Th = "0123456789abcdef";
function $r(r, e) {
  if ((e || (e = {}), typeof r == "number")) {
    Xt.checkSafeUint53(r, "invalid hexlify value");
    let t = "";
    for (; r; ) (t = Th[r & 15] + t), (r = Math.floor(r / 16));
    return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00";
  }
  if (typeof r == "bigint")
    return (r = r.toString(16)), r.length % 2 ? "0x0" + r : "0x" + r;
  if (
    (e.allowMissingPrefix &&
      typeof r == "string" &&
      r.substring(0, 2) !== "0x" &&
      (r = "0x" + r),
    c1(r))
  )
    return r.toHexString();
  if (Zr(r))
    return (
      r.length % 2 &&
        (e.hexPad === "left"
          ? (r = "0x0" + r.substring(2))
          : e.hexPad === "right"
          ? (r += "0")
          : Xt.throwArgumentError("hex data is odd-length", "value", r)),
      r.toLowerCase()
    );
  if (po(r)) {
    let t = "0x";
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      t += Th[(s & 240) >> 4] + Th[s & 15];
    }
    return t;
  }
  return Xt.throwArgumentError("invalid hexlify value", "value", r);
}
function x5(r) {
  if (typeof r != "string") r = $r(r);
  else if (!Zr(r) || r.length % 2) return null;
  return (r.length - 2) / 2;
}
function G0(r, e, t) {
  return (
    typeof r != "string"
      ? (r = $r(r))
      : (!Zr(r) || r.length % 2) &&
        Xt.throwArgumentError("invalid hexData", "value", r),
    (e = 2 + 2 * e),
    t != null ? "0x" + r.substring(e, 2 + 2 * t) : "0x" + r.substring(e)
  );
}
function nn(r, e) {
  for (
    typeof r != "string"
      ? (r = $r(r))
      : Zr(r) || Xt.throwArgumentError("invalid hex string", "value", r),
      r.length > 2 * e + 2 &&
        Xt.throwArgumentError("value out of range", "value", arguments[1]);
    r.length < 2 * e + 2;

  )
    r = "0x0" + r.substring(2);
  return r;
}
function u1(r) {
  const e = {
    r: "0x",
    s: "0x",
    _vs: "0x",
    recoveryParam: 0,
    v: 0,
    yParityAndS: "0x",
    compact: "0x",
  };
  if (S5(r)) {
    let t = Wt(r);
    t.length === 64
      ? ((e.v = 27 + (t[32] >> 7)),
        (t[32] &= 127),
        (e.r = $r(t.slice(0, 32))),
        (e.s = $r(t.slice(32, 64))))
      : t.length === 65
      ? ((e.r = $r(t.slice(0, 32))), (e.s = $r(t.slice(32, 64))), (e.v = t[64]))
      : Xt.throwArgumentError("invalid signature string", "signature", r),
      e.v < 27 &&
        (e.v === 0 || e.v === 1
          ? (e.v += 27)
          : Xt.throwArgumentError("signature invalid v byte", "signature", r)),
      (e.recoveryParam = 1 - (e.v % 2)),
      e.recoveryParam && (t[32] |= 128),
      (e._vs = $r(t.slice(32, 64)));
  } else {
    if (
      ((e.r = r.r),
      (e.s = r.s),
      (e.v = r.v),
      (e.recoveryParam = r.recoveryParam),
      (e._vs = r._vs),
      e._vs != null)
    ) {
      const s = D5(Wt(e._vs), 32);
      e._vs = $r(s);
      const a = s[0] >= 128 ? 1 : 0;
      e.recoveryParam == null
        ? (e.recoveryParam = a)
        : e.recoveryParam !== a &&
          Xt.throwArgumentError(
            "signature recoveryParam mismatch _vs",
            "signature",
            r
          ),
        (s[0] &= 127);
      const u = $r(s);
      e.s == null
        ? (e.s = u)
        : e.s !== u &&
          Xt.throwArgumentError("signature v mismatch _vs", "signature", r);
    }
    if (e.recoveryParam == null)
      e.v == null
        ? Xt.throwArgumentError(
            "signature missing v and recoveryParam",
            "signature",
            r
          )
        : e.v === 0 || e.v === 1
        ? (e.recoveryParam = e.v)
        : (e.recoveryParam = 1 - (e.v % 2));
    else if (e.v == null) e.v = 27 + e.recoveryParam;
    else {
      const s = e.v === 0 || e.v === 1 ? e.v : 1 - (e.v % 2);
      e.recoveryParam !== s &&
        Xt.throwArgumentError(
          "signature recoveryParam mismatch v",
          "signature",
          r
        );
    }
    e.r == null || !Zr(e.r)
      ? Xt.throwArgumentError("signature missing or invalid r", "signature", r)
      : (e.r = nn(e.r, 32)),
      e.s == null || !Zr(e.s)
        ? Xt.throwArgumentError(
            "signature missing or invalid s",
            "signature",
            r
          )
        : (e.s = nn(e.s, 32));
    const t = Wt(e.s);
    t[0] >= 128 &&
      Xt.throwArgumentError("signature s out of range", "signature", r),
      e.recoveryParam && (t[0] |= 128);
    const i = $r(t);
    e._vs &&
      (Zr(e._vs) ||
        Xt.throwArgumentError("signature invalid _vs", "signature", r),
      (e._vs = nn(e._vs, 32))),
      e._vs == null
        ? (e._vs = i)
        : e._vs !== i &&
          Xt.throwArgumentError(
            "signature _vs mismatch v and s",
            "signature",
            r
          );
  }
  return (
    (e.yParityAndS = e._vs), (e.compact = e.r + e.yParityAndS.substring(2)), e
  );
}
function Wl(r) {
  return "0x" + b5.keccak_256(Wt(r));
}
var h1 = { exports: {} },
  P5 = {},
  M5 = Object.freeze({ __proto__: null, default: P5 }),
  C5 = w5(M5);
(function (r) {
  (function (e, t) {
    function i(f, l) {
      if (!f) throw new Error(l || "Assertion failed");
    }
    function s(f, l) {
      f.super_ = l;
      var w = function () {};
      (w.prototype = l.prototype),
        (f.prototype = new w()),
        (f.prototype.constructor = f);
    }
    function a(f, l, w) {
      if (a.isBN(f)) return f;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        f !== null &&
          ((l === "le" || l === "be") && ((w = l), (l = 10)),
          this._init(f || 0, l || 10, w || "be"));
    }
    typeof e == "object" ? (e.exports = a) : (t.BN = a),
      (a.BN = a),
      (a.wordSize = 26);
    var u;
    try {
      typeof window < "u" && typeof window.Buffer < "u"
        ? (u = window.Buffer)
        : (u = C5.Buffer);
    } catch {}
    (a.isBN = function (f) {
      return f instanceof a
        ? !0
        : f !== null &&
            typeof f == "object" &&
            f.constructor.wordSize === a.wordSize &&
            Array.isArray(f.words);
    }),
      (a.max = function (f, l) {
        return f.cmp(l) > 0 ? f : l;
      }),
      (a.min = function (f, l) {
        return f.cmp(l) < 0 ? f : l;
      }),
      (a.prototype._init = function (f, l, w) {
        if (typeof f == "number") return this._initNumber(f, l, w);
        if (typeof f == "object") return this._initArray(f, l, w);
        l === "hex" && (l = 16),
          i(l === (l | 0) && l >= 2 && l <= 36),
          (f = f.toString().replace(/\s+/g, ""));
        var I = 0;
        f[0] === "-" && (I++, (this.negative = 1)),
          I < f.length &&
            (l === 16
              ? this._parseHex(f, I, w)
              : (this._parseBase(f, l, I),
                w === "le" && this._initArray(this.toArray(), l, w)));
      }),
      (a.prototype._initNumber = function (f, l, w) {
        f < 0 && ((this.negative = 1), (f = -f)),
          f < 67108864
            ? ((this.words = [f & 67108863]), (this.length = 1))
            : f < 4503599627370496
            ? ((this.words = [f & 67108863, (f / 67108864) & 67108863]),
              (this.length = 2))
            : (i(f < 9007199254740992),
              (this.words = [f & 67108863, (f / 67108864) & 67108863, 1]),
              (this.length = 3)),
          w === "le" && this._initArray(this.toArray(), l, w);
      }),
      (a.prototype._initArray = function (f, l, w) {
        if ((i(typeof f.length == "number"), f.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(f.length / 3)),
          (this.words = new Array(this.length));
        for (var I = 0; I < this.length; I++) this.words[I] = 0;
        var P,
          O,
          U = 0;
        if (w === "be")
          for (I = f.length - 1, P = 0; I >= 0; I -= 3)
            (O = f[I] | (f[I - 1] << 8) | (f[I - 2] << 16)),
              (this.words[P] |= (O << U) & 67108863),
              (this.words[P + 1] = (O >>> (26 - U)) & 67108863),
              (U += 24),
              U >= 26 && ((U -= 26), P++);
        else if (w === "le")
          for (I = 0, P = 0; I < f.length; I += 3)
            (O = f[I] | (f[I + 1] << 8) | (f[I + 2] << 16)),
              (this.words[P] |= (O << U) & 67108863),
              (this.words[P + 1] = (O >>> (26 - U)) & 67108863),
              (U += 24),
              U >= 26 && ((U -= 26), P++);
        return this._strip();
      });
    function h(f, l) {
      var w = f.charCodeAt(l);
      if (w >= 48 && w <= 57) return w - 48;
      if (w >= 65 && w <= 70) return w - 55;
      if (w >= 97 && w <= 102) return w - 87;
      i(!1, "Invalid character in " + f);
    }
    function p(f, l, w) {
      var I = h(f, w);
      return w - 1 >= l && (I |= h(f, w - 1) << 4), I;
    }
    a.prototype._parseHex = function (f, l, w) {
      (this.length = Math.ceil((f.length - l) / 6)),
        (this.words = new Array(this.length));
      for (var I = 0; I < this.length; I++) this.words[I] = 0;
      var P = 0,
        O = 0,
        U;
      if (w === "be")
        for (I = f.length - 1; I >= l; I -= 2)
          (U = p(f, l, I) << P),
            (this.words[O] |= U & 67108863),
            P >= 18
              ? ((P -= 18), (O += 1), (this.words[O] |= U >>> 26))
              : (P += 8);
      else {
        var x = f.length - l;
        for (I = x % 2 === 0 ? l + 1 : l; I < f.length; I += 2)
          (U = p(f, l, I) << P),
            (this.words[O] |= U & 67108863),
            P >= 18
              ? ((P -= 18), (O += 1), (this.words[O] |= U >>> 26))
              : (P += 8);
      }
      this._strip();
    };
    function d(f, l, w, I) {
      for (var P = 0, O = 0, U = Math.min(f.length, w), x = l; x < U; x++) {
        var g = f.charCodeAt(x) - 48;
        (P *= I),
          g >= 49 ? (O = g - 49 + 10) : g >= 17 ? (O = g - 17 + 10) : (O = g),
          i(g >= 0 && O < I, "Invalid character"),
          (P += O);
      }
      return P;
    }
    (a.prototype._parseBase = function (f, l, w) {
      (this.words = [0]), (this.length = 1);
      for (var I = 0, P = 1; P <= 67108863; P *= l) I++;
      I--, (P = (P / l) | 0);
      for (
        var O = f.length - w,
          U = O % I,
          x = Math.min(O, O - U) + w,
          g = 0,
          N = w;
        N < x;
        N += I
      )
        (g = d(f, N, N + I, l)),
          this.imuln(P),
          this.words[0] + g < 67108864 ? (this.words[0] += g) : this._iaddn(g);
      if (U !== 0) {
        var ie = 1;
        for (g = d(f, N, f.length, l), N = 0; N < U; N++) ie *= l;
        this.imuln(ie),
          this.words[0] + g < 67108864 ? (this.words[0] += g) : this._iaddn(g);
      }
      this._strip();
    }),
      (a.prototype.copy = function (f) {
        f.words = new Array(this.length);
        for (var l = 0; l < this.length; l++) f.words[l] = this.words[l];
        (f.length = this.length),
          (f.negative = this.negative),
          (f.red = this.red);
      });
    function b(f, l) {
      (f.words = l.words),
        (f.length = l.length),
        (f.negative = l.negative),
        (f.red = l.red);
    }
    if (
      ((a.prototype._move = function (f) {
        b(f, this);
      }),
      (a.prototype.clone = function () {
        var f = new a(null);
        return this.copy(f), f;
      }),
      (a.prototype._expand = function (f) {
        for (; this.length < f; ) this.words[this.length++] = 0;
        return this;
      }),
      (a.prototype._strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }),
      (a.prototype._normSign = function () {
        return (
          this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
        );
      }),
      typeof Symbol < "u" && typeof Symbol.for == "function")
    )
      try {
        a.prototype[Symbol.for("nodejs.util.inspect.custom")] = E;
      } catch {
        a.prototype.inspect = E;
      }
    else a.prototype.inspect = E;
    function E() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var D = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000",
      ],
      S = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      M = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
        16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
        11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
        5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
        20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
        60466176,
      ];
    (a.prototype.toString = function (f, l) {
      (f = f || 10), (l = l | 0 || 1);
      var w;
      if (f === 16 || f === "hex") {
        w = "";
        for (var I = 0, P = 0, O = 0; O < this.length; O++) {
          var U = this.words[O],
            x = (((U << I) | P) & 16777215).toString(16);
          (P = (U >>> (24 - I)) & 16777215),
            (I += 2),
            I >= 26 && ((I -= 26), O--),
            P !== 0 || O !== this.length - 1
              ? (w = D[6 - x.length] + x + w)
              : (w = x + w);
        }
        for (P !== 0 && (w = P.toString(16) + w); w.length % l !== 0; )
          w = "0" + w;
        return this.negative !== 0 && (w = "-" + w), w;
      }
      if (f === (f | 0) && f >= 2 && f <= 36) {
        var g = S[f],
          N = M[f];
        w = "";
        var ie = this.clone();
        for (ie.negative = 0; !ie.isZero(); ) {
          var de = ie.modrn(N).toString(f);
          (ie = ie.idivn(N)),
            ie.isZero() ? (w = de + w) : (w = D[g - de.length] + de + w);
        }
        for (this.isZero() && (w = "0" + w); w.length % l !== 0; ) w = "0" + w;
        return this.negative !== 0 && (w = "-" + w), w;
      }
      i(!1, "Base should be between 2 and 36");
    }),
      (a.prototype.toNumber = function () {
        var f = this.words[0];
        return (
          this.length === 2
            ? (f += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
            ? (f += 4503599627370496 + this.words[1] * 67108864)
            : this.length > 2 &&
              i(!1, "Number can only safely store up to 53 bits"),
          this.negative !== 0 ? -f : f
        );
      }),
      (a.prototype.toJSON = function () {
        return this.toString(16, 2);
      }),
      u &&
        (a.prototype.toBuffer = function (f, l) {
          return this.toArrayLike(u, f, l);
        }),
      (a.prototype.toArray = function (f, l) {
        return this.toArrayLike(Array, f, l);
      });
    var W = function (f, l) {
      return f.allocUnsafe ? f.allocUnsafe(l) : new f(l);
    };
    (a.prototype.toArrayLike = function (f, l, w) {
      this._strip();
      var I = this.byteLength(),
        P = w || Math.max(1, I);
      i(I <= P, "byte array longer than desired length"),
        i(P > 0, "Requested array length <= 0");
      var O = W(f, P),
        U = l === "le" ? "LE" : "BE";
      return this["_toArrayLike" + U](O, I), O;
    }),
      (a.prototype._toArrayLikeLE = function (f, l) {
        for (var w = 0, I = 0, P = 0, O = 0; P < this.length; P++) {
          var U = (this.words[P] << O) | I;
          (f[w++] = U & 255),
            w < f.length && (f[w++] = (U >> 8) & 255),
            w < f.length && (f[w++] = (U >> 16) & 255),
            O === 6
              ? (w < f.length && (f[w++] = (U >> 24) & 255), (I = 0), (O = 0))
              : ((I = U >>> 24), (O += 2));
        }
        if (w < f.length) for (f[w++] = I; w < f.length; ) f[w++] = 0;
      }),
      (a.prototype._toArrayLikeBE = function (f, l) {
        for (var w = f.length - 1, I = 0, P = 0, O = 0; P < this.length; P++) {
          var U = (this.words[P] << O) | I;
          (f[w--] = U & 255),
            w >= 0 && (f[w--] = (U >> 8) & 255),
            w >= 0 && (f[w--] = (U >> 16) & 255),
            O === 6
              ? (w >= 0 && (f[w--] = (U >> 24) & 255), (I = 0), (O = 0))
              : ((I = U >>> 24), (O += 2));
        }
        if (w >= 0) for (f[w--] = I; w >= 0; ) f[w--] = 0;
      }),
      Math.clz32
        ? (a.prototype._countBits = function (f) {
            return 32 - Math.clz32(f);
          })
        : (a.prototype._countBits = function (f) {
            var l = f,
              w = 0;
            return (
              l >= 4096 && ((w += 13), (l >>>= 13)),
              l >= 64 && ((w += 7), (l >>>= 7)),
              l >= 8 && ((w += 4), (l >>>= 4)),
              l >= 2 && ((w += 2), (l >>>= 2)),
              w + l
            );
          }),
      (a.prototype._zeroBits = function (f) {
        if (f === 0) return 26;
        var l = f,
          w = 0;
        return (
          l & 8191 || ((w += 13), (l >>>= 13)),
          l & 127 || ((w += 7), (l >>>= 7)),
          l & 15 || ((w += 4), (l >>>= 4)),
          l & 3 || ((w += 2), (l >>>= 2)),
          l & 1 || w++,
          w
        );
      }),
      (a.prototype.bitLength = function () {
        var f = this.words[this.length - 1],
          l = this._countBits(f);
        return (this.length - 1) * 26 + l;
      });
    function G(f) {
      for (var l = new Array(f.bitLength()), w = 0; w < l.length; w++) {
        var I = (w / 26) | 0,
          P = w % 26;
        l[w] = (f.words[I] >>> P) & 1;
      }
      return l;
    }
    (a.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var f = 0, l = 0; l < this.length; l++) {
        var w = this._zeroBits(this.words[l]);
        if (((f += w), w !== 26)) break;
      }
      return f;
    }),
      (a.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (a.prototype.toTwos = function (f) {
        return this.negative !== 0
          ? this.abs().inotn(f).iaddn(1)
          : this.clone();
      }),
      (a.prototype.fromTwos = function (f) {
        return this.testn(f - 1) ? this.notn(f).iaddn(1).ineg() : this.clone();
      }),
      (a.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (a.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (a.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (a.prototype.iuor = function (f) {
        for (; this.length < f.length; ) this.words[this.length++] = 0;
        for (var l = 0; l < f.length; l++)
          this.words[l] = this.words[l] | f.words[l];
        return this._strip();
      }),
      (a.prototype.ior = function (f) {
        return i((this.negative | f.negative) === 0), this.iuor(f);
      }),
      (a.prototype.or = function (f) {
        return this.length > f.length
          ? this.clone().ior(f)
          : f.clone().ior(this);
      }),
      (a.prototype.uor = function (f) {
        return this.length > f.length
          ? this.clone().iuor(f)
          : f.clone().iuor(this);
      }),
      (a.prototype.iuand = function (f) {
        var l;
        this.length > f.length ? (l = f) : (l = this);
        for (var w = 0; w < l.length; w++)
          this.words[w] = this.words[w] & f.words[w];
        return (this.length = l.length), this._strip();
      }),
      (a.prototype.iand = function (f) {
        return i((this.negative | f.negative) === 0), this.iuand(f);
      }),
      (a.prototype.and = function (f) {
        return this.length > f.length
          ? this.clone().iand(f)
          : f.clone().iand(this);
      }),
      (a.prototype.uand = function (f) {
        return this.length > f.length
          ? this.clone().iuand(f)
          : f.clone().iuand(this);
      }),
      (a.prototype.iuxor = function (f) {
        var l, w;
        this.length > f.length ? ((l = this), (w = f)) : ((l = f), (w = this));
        for (var I = 0; I < w.length; I++)
          this.words[I] = l.words[I] ^ w.words[I];
        if (this !== l) for (; I < l.length; I++) this.words[I] = l.words[I];
        return (this.length = l.length), this._strip();
      }),
      (a.prototype.ixor = function (f) {
        return i((this.negative | f.negative) === 0), this.iuxor(f);
      }),
      (a.prototype.xor = function (f) {
        return this.length > f.length
          ? this.clone().ixor(f)
          : f.clone().ixor(this);
      }),
      (a.prototype.uxor = function (f) {
        return this.length > f.length
          ? this.clone().iuxor(f)
          : f.clone().iuxor(this);
      }),
      (a.prototype.inotn = function (f) {
        i(typeof f == "number" && f >= 0);
        var l = Math.ceil(f / 26) | 0,
          w = f % 26;
        this._expand(l), w > 0 && l--;
        for (var I = 0; I < l; I++) this.words[I] = ~this.words[I] & 67108863;
        return (
          w > 0 && (this.words[I] = ~this.words[I] & (67108863 >> (26 - w))),
          this._strip()
        );
      }),
      (a.prototype.notn = function (f) {
        return this.clone().inotn(f);
      }),
      (a.prototype.setn = function (f, l) {
        i(typeof f == "number" && f >= 0);
        var w = (f / 26) | 0,
          I = f % 26;
        return (
          this._expand(w + 1),
          l
            ? (this.words[w] = this.words[w] | (1 << I))
            : (this.words[w] = this.words[w] & ~(1 << I)),
          this._strip()
        );
      }),
      (a.prototype.iadd = function (f) {
        var l;
        if (this.negative !== 0 && f.negative === 0)
          return (
            (this.negative = 0),
            (l = this.isub(f)),
            (this.negative ^= 1),
            this._normSign()
          );
        if (this.negative === 0 && f.negative !== 0)
          return (
            (f.negative = 0),
            (l = this.isub(f)),
            (f.negative = 1),
            l._normSign()
          );
        var w, I;
        this.length > f.length ? ((w = this), (I = f)) : ((w = f), (I = this));
        for (var P = 0, O = 0; O < I.length; O++)
          (l = (w.words[O] | 0) + (I.words[O] | 0) + P),
            (this.words[O] = l & 67108863),
            (P = l >>> 26);
        for (; P !== 0 && O < w.length; O++)
          (l = (w.words[O] | 0) + P),
            (this.words[O] = l & 67108863),
            (P = l >>> 26);
        if (((this.length = w.length), P !== 0))
          (this.words[this.length] = P), this.length++;
        else if (w !== this)
          for (; O < w.length; O++) this.words[O] = w.words[O];
        return this;
      }),
      (a.prototype.add = function (f) {
        var l;
        return f.negative !== 0 && this.negative === 0
          ? ((f.negative = 0), (l = this.sub(f)), (f.negative ^= 1), l)
          : f.negative === 0 && this.negative !== 0
          ? ((this.negative = 0), (l = f.sub(this)), (this.negative = 1), l)
          : this.length > f.length
          ? this.clone().iadd(f)
          : f.clone().iadd(this);
      }),
      (a.prototype.isub = function (f) {
        if (f.negative !== 0) {
          f.negative = 0;
          var l = this.iadd(f);
          return (f.negative = 1), l._normSign();
        } else if (this.negative !== 0)
          return (
            (this.negative = 0),
            this.iadd(f),
            (this.negative = 1),
            this._normSign()
          );
        var w = this.cmp(f);
        if (w === 0)
          return (
            (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
          );
        var I, P;
        w > 0 ? ((I = this), (P = f)) : ((I = f), (P = this));
        for (var O = 0, U = 0; U < P.length; U++)
          (l = (I.words[U] | 0) - (P.words[U] | 0) + O),
            (O = l >> 26),
            (this.words[U] = l & 67108863);
        for (; O !== 0 && U < I.length; U++)
          (l = (I.words[U] | 0) + O),
            (O = l >> 26),
            (this.words[U] = l & 67108863);
        if (O === 0 && U < I.length && I !== this)
          for (; U < I.length; U++) this.words[U] = I.words[U];
        return (
          (this.length = Math.max(this.length, U)),
          I !== this && (this.negative = 1),
          this._strip()
        );
      }),
      (a.prototype.sub = function (f) {
        return this.clone().isub(f);
      });
    function ee(f, l, w) {
      w.negative = l.negative ^ f.negative;
      var I = (f.length + l.length) | 0;
      (w.length = I), (I = (I - 1) | 0);
      var P = f.words[0] | 0,
        O = l.words[0] | 0,
        U = P * O,
        x = U & 67108863,
        g = (U / 67108864) | 0;
      w.words[0] = x;
      for (var N = 1; N < I; N++) {
        for (
          var ie = g >>> 26,
            de = g & 67108863,
            _ = Math.min(N, l.length - 1),
            Z = Math.max(0, N - f.length + 1);
          Z <= _;
          Z++
        ) {
          var L = (N - Z) | 0;
          (P = f.words[L] | 0),
            (O = l.words[Z] | 0),
            (U = P * O + de),
            (ie += (U / 67108864) | 0),
            (de = U & 67108863);
        }
        (w.words[N] = de | 0), (g = ie | 0);
      }
      return g !== 0 ? (w.words[N] = g | 0) : w.length--, w._strip();
    }
    var K = function (f, l, w) {
      var I = f.words,
        P = l.words,
        O = w.words,
        U = 0,
        x,
        g,
        N,
        ie = I[0] | 0,
        de = ie & 8191,
        _ = ie >>> 13,
        Z = I[1] | 0,
        L = Z & 8191,
        j = Z >>> 13,
        k = I[2] | 0,
        m = k & 8191,
        B = k >>> 13,
        te = I[3] | 0,
        ue = te & 8191,
        ae = te >>> 13,
        Pe = I[4] | 0,
        Ce = Pe & 8191,
        Ie = Pe >>> 13,
        Et = I[5] | 0,
        Fe = Et & 8191,
        xe = Et >>> 13,
        Le = I[6] | 0,
        _e = Le & 8191,
        Ee = Le >>> 13,
        Ve = I[7] | 0,
        we = Ve & 8191,
        Ae = Ve >>> 13,
        Be = I[8] | 0,
        be = Be & 8191,
        Me = Be >>> 13,
        qe = I[9] | 0,
        Oe = qe & 8191,
        Ne = qe >>> 13,
        st = P[0] | 0,
        Te = st & 8191,
        Re = st >>> 13,
        Ht = P[1] | 0,
        ct = Ht & 8191,
        pt = Ht >>> 13,
        Kt = P[2] | 0,
        yt = Kt & 8191,
        _t = Kt >>> 13,
        Er = P[3] | 0,
        Ge = Er & 8191,
        ze = Er >>> 13,
        It = P[4] | 0,
        We = It & 8191,
        Ke = It >>> 13,
        At = P[5] | 0,
        Je = At & 8191,
        Xe = At >>> 13,
        Dt = P[6] | 0,
        Ze = Dt & 8191,
        Ye = Dt >>> 13,
        Mt = P[7] | 0,
        Qe = Mt & 8191,
        je = Mt >>> 13,
        Tt = P[8] | 0,
        et = Tt & 8191,
        Ct = Tt >>> 13,
        Si = P[9] | 0,
        Ot = Si & 8191,
        lt = Si >>> 13;
      (w.negative = f.negative ^ l.negative),
        (w.length = 19),
        (x = Math.imul(de, Te)),
        (g = Math.imul(de, Re)),
        (g = (g + Math.imul(_, Te)) | 0),
        (N = Math.imul(_, Re));
      var ri = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (ri >>> 26)) | 0),
        (ri &= 67108863),
        (x = Math.imul(L, Te)),
        (g = Math.imul(L, Re)),
        (g = (g + Math.imul(j, Te)) | 0),
        (N = Math.imul(j, Re)),
        (x = (x + Math.imul(de, ct)) | 0),
        (g = (g + Math.imul(de, pt)) | 0),
        (g = (g + Math.imul(_, ct)) | 0),
        (N = (N + Math.imul(_, pt)) | 0);
      var ii = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (ii >>> 26)) | 0),
        (ii &= 67108863),
        (x = Math.imul(m, Te)),
        (g = Math.imul(m, Re)),
        (g = (g + Math.imul(B, Te)) | 0),
        (N = Math.imul(B, Re)),
        (x = (x + Math.imul(L, ct)) | 0),
        (g = (g + Math.imul(L, pt)) | 0),
        (g = (g + Math.imul(j, ct)) | 0),
        (N = (N + Math.imul(j, pt)) | 0),
        (x = (x + Math.imul(de, yt)) | 0),
        (g = (g + Math.imul(de, _t)) | 0),
        (g = (g + Math.imul(_, yt)) | 0),
        (N = (N + Math.imul(_, _t)) | 0);
      var ni = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (ni >>> 26)) | 0),
        (ni &= 67108863),
        (x = Math.imul(ue, Te)),
        (g = Math.imul(ue, Re)),
        (g = (g + Math.imul(ae, Te)) | 0),
        (N = Math.imul(ae, Re)),
        (x = (x + Math.imul(m, ct)) | 0),
        (g = (g + Math.imul(m, pt)) | 0),
        (g = (g + Math.imul(B, ct)) | 0),
        (N = (N + Math.imul(B, pt)) | 0),
        (x = (x + Math.imul(L, yt)) | 0),
        (g = (g + Math.imul(L, _t)) | 0),
        (g = (g + Math.imul(j, yt)) | 0),
        (N = (N + Math.imul(j, _t)) | 0),
        (x = (x + Math.imul(de, Ge)) | 0),
        (g = (g + Math.imul(de, ze)) | 0),
        (g = (g + Math.imul(_, Ge)) | 0),
        (N = (N + Math.imul(_, ze)) | 0);
      var si = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (si >>> 26)) | 0),
        (si &= 67108863),
        (x = Math.imul(Ce, Te)),
        (g = Math.imul(Ce, Re)),
        (g = (g + Math.imul(Ie, Te)) | 0),
        (N = Math.imul(Ie, Re)),
        (x = (x + Math.imul(ue, ct)) | 0),
        (g = (g + Math.imul(ue, pt)) | 0),
        (g = (g + Math.imul(ae, ct)) | 0),
        (N = (N + Math.imul(ae, pt)) | 0),
        (x = (x + Math.imul(m, yt)) | 0),
        (g = (g + Math.imul(m, _t)) | 0),
        (g = (g + Math.imul(B, yt)) | 0),
        (N = (N + Math.imul(B, _t)) | 0),
        (x = (x + Math.imul(L, Ge)) | 0),
        (g = (g + Math.imul(L, ze)) | 0),
        (g = (g + Math.imul(j, Ge)) | 0),
        (N = (N + Math.imul(j, ze)) | 0),
        (x = (x + Math.imul(de, We)) | 0),
        (g = (g + Math.imul(de, Ke)) | 0),
        (g = (g + Math.imul(_, We)) | 0),
        (N = (N + Math.imul(_, Ke)) | 0);
      var oi = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (oi >>> 26)) | 0),
        (oi &= 67108863),
        (x = Math.imul(Fe, Te)),
        (g = Math.imul(Fe, Re)),
        (g = (g + Math.imul(xe, Te)) | 0),
        (N = Math.imul(xe, Re)),
        (x = (x + Math.imul(Ce, ct)) | 0),
        (g = (g + Math.imul(Ce, pt)) | 0),
        (g = (g + Math.imul(Ie, ct)) | 0),
        (N = (N + Math.imul(Ie, pt)) | 0),
        (x = (x + Math.imul(ue, yt)) | 0),
        (g = (g + Math.imul(ue, _t)) | 0),
        (g = (g + Math.imul(ae, yt)) | 0),
        (N = (N + Math.imul(ae, _t)) | 0),
        (x = (x + Math.imul(m, Ge)) | 0),
        (g = (g + Math.imul(m, ze)) | 0),
        (g = (g + Math.imul(B, Ge)) | 0),
        (N = (N + Math.imul(B, ze)) | 0),
        (x = (x + Math.imul(L, We)) | 0),
        (g = (g + Math.imul(L, Ke)) | 0),
        (g = (g + Math.imul(j, We)) | 0),
        (N = (N + Math.imul(j, Ke)) | 0),
        (x = (x + Math.imul(de, Je)) | 0),
        (g = (g + Math.imul(de, Xe)) | 0),
        (g = (g + Math.imul(_, Je)) | 0),
        (N = (N + Math.imul(_, Xe)) | 0);
      var or = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (or >>> 26)) | 0),
        (or &= 67108863),
        (x = Math.imul(_e, Te)),
        (g = Math.imul(_e, Re)),
        (g = (g + Math.imul(Ee, Te)) | 0),
        (N = Math.imul(Ee, Re)),
        (x = (x + Math.imul(Fe, ct)) | 0),
        (g = (g + Math.imul(Fe, pt)) | 0),
        (g = (g + Math.imul(xe, ct)) | 0),
        (N = (N + Math.imul(xe, pt)) | 0),
        (x = (x + Math.imul(Ce, yt)) | 0),
        (g = (g + Math.imul(Ce, _t)) | 0),
        (g = (g + Math.imul(Ie, yt)) | 0),
        (N = (N + Math.imul(Ie, _t)) | 0),
        (x = (x + Math.imul(ue, Ge)) | 0),
        (g = (g + Math.imul(ue, ze)) | 0),
        (g = (g + Math.imul(ae, Ge)) | 0),
        (N = (N + Math.imul(ae, ze)) | 0),
        (x = (x + Math.imul(m, We)) | 0),
        (g = (g + Math.imul(m, Ke)) | 0),
        (g = (g + Math.imul(B, We)) | 0),
        (N = (N + Math.imul(B, Ke)) | 0),
        (x = (x + Math.imul(L, Je)) | 0),
        (g = (g + Math.imul(L, Xe)) | 0),
        (g = (g + Math.imul(j, Je)) | 0),
        (N = (N + Math.imul(j, Xe)) | 0),
        (x = (x + Math.imul(de, Ze)) | 0),
        (g = (g + Math.imul(de, Ye)) | 0),
        (g = (g + Math.imul(_, Ze)) | 0),
        (N = (N + Math.imul(_, Ye)) | 0);
      var Fi = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (Fi >>> 26)) | 0),
        (Fi &= 67108863),
        (x = Math.imul(we, Te)),
        (g = Math.imul(we, Re)),
        (g = (g + Math.imul(Ae, Te)) | 0),
        (N = Math.imul(Ae, Re)),
        (x = (x + Math.imul(_e, ct)) | 0),
        (g = (g + Math.imul(_e, pt)) | 0),
        (g = (g + Math.imul(Ee, ct)) | 0),
        (N = (N + Math.imul(Ee, pt)) | 0),
        (x = (x + Math.imul(Fe, yt)) | 0),
        (g = (g + Math.imul(Fe, _t)) | 0),
        (g = (g + Math.imul(xe, yt)) | 0),
        (N = (N + Math.imul(xe, _t)) | 0),
        (x = (x + Math.imul(Ce, Ge)) | 0),
        (g = (g + Math.imul(Ce, ze)) | 0),
        (g = (g + Math.imul(Ie, Ge)) | 0),
        (N = (N + Math.imul(Ie, ze)) | 0),
        (x = (x + Math.imul(ue, We)) | 0),
        (g = (g + Math.imul(ue, Ke)) | 0),
        (g = (g + Math.imul(ae, We)) | 0),
        (N = (N + Math.imul(ae, Ke)) | 0),
        (x = (x + Math.imul(m, Je)) | 0),
        (g = (g + Math.imul(m, Xe)) | 0),
        (g = (g + Math.imul(B, Je)) | 0),
        (N = (N + Math.imul(B, Xe)) | 0),
        (x = (x + Math.imul(L, Ze)) | 0),
        (g = (g + Math.imul(L, Ye)) | 0),
        (g = (g + Math.imul(j, Ze)) | 0),
        (N = (N + Math.imul(j, Ye)) | 0),
        (x = (x + Math.imul(de, Qe)) | 0),
        (g = (g + Math.imul(de, je)) | 0),
        (g = (g + Math.imul(_, Qe)) | 0),
        (N = (N + Math.imul(_, je)) | 0);
      var Qn = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (Qn >>> 26)) | 0),
        (Qn &= 67108863),
        (x = Math.imul(be, Te)),
        (g = Math.imul(be, Re)),
        (g = (g + Math.imul(Me, Te)) | 0),
        (N = Math.imul(Me, Re)),
        (x = (x + Math.imul(we, ct)) | 0),
        (g = (g + Math.imul(we, pt)) | 0),
        (g = (g + Math.imul(Ae, ct)) | 0),
        (N = (N + Math.imul(Ae, pt)) | 0),
        (x = (x + Math.imul(_e, yt)) | 0),
        (g = (g + Math.imul(_e, _t)) | 0),
        (g = (g + Math.imul(Ee, yt)) | 0),
        (N = (N + Math.imul(Ee, _t)) | 0),
        (x = (x + Math.imul(Fe, Ge)) | 0),
        (g = (g + Math.imul(Fe, ze)) | 0),
        (g = (g + Math.imul(xe, Ge)) | 0),
        (N = (N + Math.imul(xe, ze)) | 0),
        (x = (x + Math.imul(Ce, We)) | 0),
        (g = (g + Math.imul(Ce, Ke)) | 0),
        (g = (g + Math.imul(Ie, We)) | 0),
        (N = (N + Math.imul(Ie, Ke)) | 0),
        (x = (x + Math.imul(ue, Je)) | 0),
        (g = (g + Math.imul(ue, Xe)) | 0),
        (g = (g + Math.imul(ae, Je)) | 0),
        (N = (N + Math.imul(ae, Xe)) | 0),
        (x = (x + Math.imul(m, Ze)) | 0),
        (g = (g + Math.imul(m, Ye)) | 0),
        (g = (g + Math.imul(B, Ze)) | 0),
        (N = (N + Math.imul(B, Ye)) | 0),
        (x = (x + Math.imul(L, Qe)) | 0),
        (g = (g + Math.imul(L, je)) | 0),
        (g = (g + Math.imul(j, Qe)) | 0),
        (N = (N + Math.imul(j, je)) | 0),
        (x = (x + Math.imul(de, et)) | 0),
        (g = (g + Math.imul(de, Ct)) | 0),
        (g = (g + Math.imul(_, et)) | 0),
        (N = (N + Math.imul(_, Ct)) | 0);
      var zi = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (zi >>> 26)) | 0),
        (zi &= 67108863),
        (x = Math.imul(Oe, Te)),
        (g = Math.imul(Oe, Re)),
        (g = (g + Math.imul(Ne, Te)) | 0),
        (N = Math.imul(Ne, Re)),
        (x = (x + Math.imul(be, ct)) | 0),
        (g = (g + Math.imul(be, pt)) | 0),
        (g = (g + Math.imul(Me, ct)) | 0),
        (N = (N + Math.imul(Me, pt)) | 0),
        (x = (x + Math.imul(we, yt)) | 0),
        (g = (g + Math.imul(we, _t)) | 0),
        (g = (g + Math.imul(Ae, yt)) | 0),
        (N = (N + Math.imul(Ae, _t)) | 0),
        (x = (x + Math.imul(_e, Ge)) | 0),
        (g = (g + Math.imul(_e, ze)) | 0),
        (g = (g + Math.imul(Ee, Ge)) | 0),
        (N = (N + Math.imul(Ee, ze)) | 0),
        (x = (x + Math.imul(Fe, We)) | 0),
        (g = (g + Math.imul(Fe, Ke)) | 0),
        (g = (g + Math.imul(xe, We)) | 0),
        (N = (N + Math.imul(xe, Ke)) | 0),
        (x = (x + Math.imul(Ce, Je)) | 0),
        (g = (g + Math.imul(Ce, Xe)) | 0),
        (g = (g + Math.imul(Ie, Je)) | 0),
        (N = (N + Math.imul(Ie, Xe)) | 0),
        (x = (x + Math.imul(ue, Ze)) | 0),
        (g = (g + Math.imul(ue, Ye)) | 0),
        (g = (g + Math.imul(ae, Ze)) | 0),
        (N = (N + Math.imul(ae, Ye)) | 0),
        (x = (x + Math.imul(m, Qe)) | 0),
        (g = (g + Math.imul(m, je)) | 0),
        (g = (g + Math.imul(B, Qe)) | 0),
        (N = (N + Math.imul(B, je)) | 0),
        (x = (x + Math.imul(L, et)) | 0),
        (g = (g + Math.imul(L, Ct)) | 0),
        (g = (g + Math.imul(j, et)) | 0),
        (N = (N + Math.imul(j, Ct)) | 0),
        (x = (x + Math.imul(de, Ot)) | 0),
        (g = (g + Math.imul(de, lt)) | 0),
        (g = (g + Math.imul(_, Ot)) | 0),
        (N = (N + Math.imul(_, lt)) | 0);
      var Jn = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (Jn >>> 26)) | 0),
        (Jn &= 67108863),
        (x = Math.imul(Oe, ct)),
        (g = Math.imul(Oe, pt)),
        (g = (g + Math.imul(Ne, ct)) | 0),
        (N = Math.imul(Ne, pt)),
        (x = (x + Math.imul(be, yt)) | 0),
        (g = (g + Math.imul(be, _t)) | 0),
        (g = (g + Math.imul(Me, yt)) | 0),
        (N = (N + Math.imul(Me, _t)) | 0),
        (x = (x + Math.imul(we, Ge)) | 0),
        (g = (g + Math.imul(we, ze)) | 0),
        (g = (g + Math.imul(Ae, Ge)) | 0),
        (N = (N + Math.imul(Ae, ze)) | 0),
        (x = (x + Math.imul(_e, We)) | 0),
        (g = (g + Math.imul(_e, Ke)) | 0),
        (g = (g + Math.imul(Ee, We)) | 0),
        (N = (N + Math.imul(Ee, Ke)) | 0),
        (x = (x + Math.imul(Fe, Je)) | 0),
        (g = (g + Math.imul(Fe, Xe)) | 0),
        (g = (g + Math.imul(xe, Je)) | 0),
        (N = (N + Math.imul(xe, Xe)) | 0),
        (x = (x + Math.imul(Ce, Ze)) | 0),
        (g = (g + Math.imul(Ce, Ye)) | 0),
        (g = (g + Math.imul(Ie, Ze)) | 0),
        (N = (N + Math.imul(Ie, Ye)) | 0),
        (x = (x + Math.imul(ue, Qe)) | 0),
        (g = (g + Math.imul(ue, je)) | 0),
        (g = (g + Math.imul(ae, Qe)) | 0),
        (N = (N + Math.imul(ae, je)) | 0),
        (x = (x + Math.imul(m, et)) | 0),
        (g = (g + Math.imul(m, Ct)) | 0),
        (g = (g + Math.imul(B, et)) | 0),
        (N = (N + Math.imul(B, Ct)) | 0),
        (x = (x + Math.imul(L, Ot)) | 0),
        (g = (g + Math.imul(L, lt)) | 0),
        (g = (g + Math.imul(j, Ot)) | 0),
        (N = (N + Math.imul(j, lt)) | 0);
      var Xn = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (Xn >>> 26)) | 0),
        (Xn &= 67108863),
        (x = Math.imul(Oe, yt)),
        (g = Math.imul(Oe, _t)),
        (g = (g + Math.imul(Ne, yt)) | 0),
        (N = Math.imul(Ne, _t)),
        (x = (x + Math.imul(be, Ge)) | 0),
        (g = (g + Math.imul(be, ze)) | 0),
        (g = (g + Math.imul(Me, Ge)) | 0),
        (N = (N + Math.imul(Me, ze)) | 0),
        (x = (x + Math.imul(we, We)) | 0),
        (g = (g + Math.imul(we, Ke)) | 0),
        (g = (g + Math.imul(Ae, We)) | 0),
        (N = (N + Math.imul(Ae, Ke)) | 0),
        (x = (x + Math.imul(_e, Je)) | 0),
        (g = (g + Math.imul(_e, Xe)) | 0),
        (g = (g + Math.imul(Ee, Je)) | 0),
        (N = (N + Math.imul(Ee, Xe)) | 0),
        (x = (x + Math.imul(Fe, Ze)) | 0),
        (g = (g + Math.imul(Fe, Ye)) | 0),
        (g = (g + Math.imul(xe, Ze)) | 0),
        (N = (N + Math.imul(xe, Ye)) | 0),
        (x = (x + Math.imul(Ce, Qe)) | 0),
        (g = (g + Math.imul(Ce, je)) | 0),
        (g = (g + Math.imul(Ie, Qe)) | 0),
        (N = (N + Math.imul(Ie, je)) | 0),
        (x = (x + Math.imul(ue, et)) | 0),
        (g = (g + Math.imul(ue, Ct)) | 0),
        (g = (g + Math.imul(ae, et)) | 0),
        (N = (N + Math.imul(ae, Ct)) | 0),
        (x = (x + Math.imul(m, Ot)) | 0),
        (g = (g + Math.imul(m, lt)) | 0),
        (g = (g + Math.imul(B, Ot)) | 0),
        (N = (N + Math.imul(B, lt)) | 0);
      var ki = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (ki >>> 26)) | 0),
        (ki &= 67108863),
        (x = Math.imul(Oe, Ge)),
        (g = Math.imul(Oe, ze)),
        (g = (g + Math.imul(Ne, Ge)) | 0),
        (N = Math.imul(Ne, ze)),
        (x = (x + Math.imul(be, We)) | 0),
        (g = (g + Math.imul(be, Ke)) | 0),
        (g = (g + Math.imul(Me, We)) | 0),
        (N = (N + Math.imul(Me, Ke)) | 0),
        (x = (x + Math.imul(we, Je)) | 0),
        (g = (g + Math.imul(we, Xe)) | 0),
        (g = (g + Math.imul(Ae, Je)) | 0),
        (N = (N + Math.imul(Ae, Xe)) | 0),
        (x = (x + Math.imul(_e, Ze)) | 0),
        (g = (g + Math.imul(_e, Ye)) | 0),
        (g = (g + Math.imul(Ee, Ze)) | 0),
        (N = (N + Math.imul(Ee, Ye)) | 0),
        (x = (x + Math.imul(Fe, Qe)) | 0),
        (g = (g + Math.imul(Fe, je)) | 0),
        (g = (g + Math.imul(xe, Qe)) | 0),
        (N = (N + Math.imul(xe, je)) | 0),
        (x = (x + Math.imul(Ce, et)) | 0),
        (g = (g + Math.imul(Ce, Ct)) | 0),
        (g = (g + Math.imul(Ie, et)) | 0),
        (N = (N + Math.imul(Ie, Ct)) | 0),
        (x = (x + Math.imul(ue, Ot)) | 0),
        (g = (g + Math.imul(ue, lt)) | 0),
        (g = (g + Math.imul(ae, Ot)) | 0),
        (N = (N + Math.imul(ae, lt)) | 0);
      var Cn = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (Cn >>> 26)) | 0),
        (Cn &= 67108863),
        (x = Math.imul(Oe, We)),
        (g = Math.imul(Oe, Ke)),
        (g = (g + Math.imul(Ne, We)) | 0),
        (N = Math.imul(Ne, Ke)),
        (x = (x + Math.imul(be, Je)) | 0),
        (g = (g + Math.imul(be, Xe)) | 0),
        (g = (g + Math.imul(Me, Je)) | 0),
        (N = (N + Math.imul(Me, Xe)) | 0),
        (x = (x + Math.imul(we, Ze)) | 0),
        (g = (g + Math.imul(we, Ye)) | 0),
        (g = (g + Math.imul(Ae, Ze)) | 0),
        (N = (N + Math.imul(Ae, Ye)) | 0),
        (x = (x + Math.imul(_e, Qe)) | 0),
        (g = (g + Math.imul(_e, je)) | 0),
        (g = (g + Math.imul(Ee, Qe)) | 0),
        (N = (N + Math.imul(Ee, je)) | 0),
        (x = (x + Math.imul(Fe, et)) | 0),
        (g = (g + Math.imul(Fe, Ct)) | 0),
        (g = (g + Math.imul(xe, et)) | 0),
        (N = (N + Math.imul(xe, Ct)) | 0),
        (x = (x + Math.imul(Ce, Ot)) | 0),
        (g = (g + Math.imul(Ce, lt)) | 0),
        (g = (g + Math.imul(Ie, Ot)) | 0),
        (N = (N + Math.imul(Ie, lt)) | 0);
      var On = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (On >>> 26)) | 0),
        (On &= 67108863),
        (x = Math.imul(Oe, Je)),
        (g = Math.imul(Oe, Xe)),
        (g = (g + Math.imul(Ne, Je)) | 0),
        (N = Math.imul(Ne, Xe)),
        (x = (x + Math.imul(be, Ze)) | 0),
        (g = (g + Math.imul(be, Ye)) | 0),
        (g = (g + Math.imul(Me, Ze)) | 0),
        (N = (N + Math.imul(Me, Ye)) | 0),
        (x = (x + Math.imul(we, Qe)) | 0),
        (g = (g + Math.imul(we, je)) | 0),
        (g = (g + Math.imul(Ae, Qe)) | 0),
        (N = (N + Math.imul(Ae, je)) | 0),
        (x = (x + Math.imul(_e, et)) | 0),
        (g = (g + Math.imul(_e, Ct)) | 0),
        (g = (g + Math.imul(Ee, et)) | 0),
        (N = (N + Math.imul(Ee, Ct)) | 0),
        (x = (x + Math.imul(Fe, Ot)) | 0),
        (g = (g + Math.imul(Fe, lt)) | 0),
        (g = (g + Math.imul(xe, Ot)) | 0),
        (N = (N + Math.imul(xe, lt)) | 0);
      var Ar = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (Ar >>> 26)) | 0),
        (Ar &= 67108863),
        (x = Math.imul(Oe, Ze)),
        (g = Math.imul(Oe, Ye)),
        (g = (g + Math.imul(Ne, Ze)) | 0),
        (N = Math.imul(Ne, Ye)),
        (x = (x + Math.imul(be, Qe)) | 0),
        (g = (g + Math.imul(be, je)) | 0),
        (g = (g + Math.imul(Me, Qe)) | 0),
        (N = (N + Math.imul(Me, je)) | 0),
        (x = (x + Math.imul(we, et)) | 0),
        (g = (g + Math.imul(we, Ct)) | 0),
        (g = (g + Math.imul(Ae, et)) | 0),
        (N = (N + Math.imul(Ae, Ct)) | 0),
        (x = (x + Math.imul(_e, Ot)) | 0),
        (g = (g + Math.imul(_e, lt)) | 0),
        (g = (g + Math.imul(Ee, Ot)) | 0),
        (N = (N + Math.imul(Ee, lt)) | 0);
      var Zn = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (Zn >>> 26)) | 0),
        (Zn &= 67108863),
        (x = Math.imul(Oe, Qe)),
        (g = Math.imul(Oe, je)),
        (g = (g + Math.imul(Ne, Qe)) | 0),
        (N = Math.imul(Ne, je)),
        (x = (x + Math.imul(be, et)) | 0),
        (g = (g + Math.imul(be, Ct)) | 0),
        (g = (g + Math.imul(Me, et)) | 0),
        (N = (N + Math.imul(Me, Ct)) | 0),
        (x = (x + Math.imul(we, Ot)) | 0),
        (g = (g + Math.imul(we, lt)) | 0),
        (g = (g + Math.imul(Ae, Ot)) | 0),
        (N = (N + Math.imul(Ae, lt)) | 0);
      var es = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (es >>> 26)) | 0),
        (es &= 67108863),
        (x = Math.imul(Oe, et)),
        (g = Math.imul(Oe, Ct)),
        (g = (g + Math.imul(Ne, et)) | 0),
        (N = Math.imul(Ne, Ct)),
        (x = (x + Math.imul(be, Ot)) | 0),
        (g = (g + Math.imul(be, lt)) | 0),
        (g = (g + Math.imul(Me, Ot)) | 0),
        (N = (N + Math.imul(Me, lt)) | 0);
      var ts = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      (U = (((N + (g >>> 13)) | 0) + (ts >>> 26)) | 0),
        (ts &= 67108863),
        (x = Math.imul(Oe, Ot)),
        (g = Math.imul(Oe, lt)),
        (g = (g + Math.imul(Ne, Ot)) | 0),
        (N = Math.imul(Ne, lt));
      var rs = (((U + x) | 0) + ((g & 8191) << 13)) | 0;
      return (
        (U = (((N + (g >>> 13)) | 0) + (rs >>> 26)) | 0),
        (rs &= 67108863),
        (O[0] = ri),
        (O[1] = ii),
        (O[2] = ni),
        (O[3] = si),
        (O[4] = oi),
        (O[5] = or),
        (O[6] = Fi),
        (O[7] = Qn),
        (O[8] = zi),
        (O[9] = Jn),
        (O[10] = Xn),
        (O[11] = ki),
        (O[12] = Cn),
        (O[13] = On),
        (O[14] = Ar),
        (O[15] = Zn),
        (O[16] = es),
        (O[17] = ts),
        (O[18] = rs),
        U !== 0 && ((O[19] = U), w.length++),
        w
      );
    };
    Math.imul || (K = ee);
    function V(f, l, w) {
      (w.negative = l.negative ^ f.negative), (w.length = f.length + l.length);
      for (var I = 0, P = 0, O = 0; O < w.length - 1; O++) {
        var U = P;
        P = 0;
        for (
          var x = I & 67108863,
            g = Math.min(O, l.length - 1),
            N = Math.max(0, O - f.length + 1);
          N <= g;
          N++
        ) {
          var ie = O - N,
            de = f.words[ie] | 0,
            _ = l.words[N] | 0,
            Z = de * _,
            L = Z & 67108863;
          (U = (U + ((Z / 67108864) | 0)) | 0),
            (L = (L + x) | 0),
            (x = L & 67108863),
            (U = (U + (L >>> 26)) | 0),
            (P += U >>> 26),
            (U &= 67108863);
        }
        (w.words[O] = x), (I = U), (U = P);
      }
      return I !== 0 ? (w.words[O] = I) : w.length--, w._strip();
    }
    function q(f, l, w) {
      return V(f, l, w);
    }
    (a.prototype.mulTo = function (f, l) {
      var w,
        I = this.length + f.length;
      return (
        this.length === 10 && f.length === 10
          ? (w = K(this, f, l))
          : I < 63
          ? (w = ee(this, f, l))
          : I < 1024
          ? (w = V(this, f, l))
          : (w = q(this, f, l)),
        w
      );
    }),
      (a.prototype.mul = function (f) {
        var l = new a(null);
        return (l.words = new Array(this.length + f.length)), this.mulTo(f, l);
      }),
      (a.prototype.mulf = function (f) {
        var l = new a(null);
        return (l.words = new Array(this.length + f.length)), q(this, f, l);
      }),
      (a.prototype.imul = function (f) {
        return this.clone().mulTo(f, this);
      }),
      (a.prototype.imuln = function (f) {
        var l = f < 0;
        l && (f = -f), i(typeof f == "number"), i(f < 67108864);
        for (var w = 0, I = 0; I < this.length; I++) {
          var P = (this.words[I] | 0) * f,
            O = (P & 67108863) + (w & 67108863);
          (w >>= 26),
            (w += (P / 67108864) | 0),
            (w += O >>> 26),
            (this.words[I] = O & 67108863);
        }
        return (
          w !== 0 && ((this.words[I] = w), this.length++),
          l ? this.ineg() : this
        );
      }),
      (a.prototype.muln = function (f) {
        return this.clone().imuln(f);
      }),
      (a.prototype.sqr = function () {
        return this.mul(this);
      }),
      (a.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (a.prototype.pow = function (f) {
        var l = G(f);
        if (l.length === 0) return new a(1);
        for (var w = this, I = 0; I < l.length && l[I] === 0; I++, w = w.sqr());
        if (++I < l.length)
          for (var P = w.sqr(); I < l.length; I++, P = P.sqr())
            l[I] !== 0 && (w = w.mul(P));
        return w;
      }),
      (a.prototype.iushln = function (f) {
        i(typeof f == "number" && f >= 0);
        var l = f % 26,
          w = (f - l) / 26,
          I = (67108863 >>> (26 - l)) << (26 - l),
          P;
        if (l !== 0) {
          var O = 0;
          for (P = 0; P < this.length; P++) {
            var U = this.words[P] & I,
              x = ((this.words[P] | 0) - U) << l;
            (this.words[P] = x | O), (O = U >>> (26 - l));
          }
          O && ((this.words[P] = O), this.length++);
        }
        if (w !== 0) {
          for (P = this.length - 1; P >= 0; P--)
            this.words[P + w] = this.words[P];
          for (P = 0; P < w; P++) this.words[P] = 0;
          this.length += w;
        }
        return this._strip();
      }),
      (a.prototype.ishln = function (f) {
        return i(this.negative === 0), this.iushln(f);
      }),
      (a.prototype.iushrn = function (f, l, w) {
        i(typeof f == "number" && f >= 0);
        var I;
        l ? (I = (l - (l % 26)) / 26) : (I = 0);
        var P = f % 26,
          O = Math.min((f - P) / 26, this.length),
          U = 67108863 ^ ((67108863 >>> P) << P),
          x = w;
        if (((I -= O), (I = Math.max(0, I)), x)) {
          for (var g = 0; g < O; g++) x.words[g] = this.words[g];
          x.length = O;
        }
        if (O !== 0)
          if (this.length > O)
            for (this.length -= O, g = 0; g < this.length; g++)
              this.words[g] = this.words[g + O];
          else (this.words[0] = 0), (this.length = 1);
        var N = 0;
        for (g = this.length - 1; g >= 0 && (N !== 0 || g >= I); g--) {
          var ie = this.words[g] | 0;
          (this.words[g] = (N << (26 - P)) | (ie >>> P)), (N = ie & U);
        }
        return (
          x && N !== 0 && (x.words[x.length++] = N),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this._strip()
        );
      }),
      (a.prototype.ishrn = function (f, l, w) {
        return i(this.negative === 0), this.iushrn(f, l, w);
      }),
      (a.prototype.shln = function (f) {
        return this.clone().ishln(f);
      }),
      (a.prototype.ushln = function (f) {
        return this.clone().iushln(f);
      }),
      (a.prototype.shrn = function (f) {
        return this.clone().ishrn(f);
      }),
      (a.prototype.ushrn = function (f) {
        return this.clone().iushrn(f);
      }),
      (a.prototype.testn = function (f) {
        i(typeof f == "number" && f >= 0);
        var l = f % 26,
          w = (f - l) / 26,
          I = 1 << l;
        if (this.length <= w) return !1;
        var P = this.words[w];
        return !!(P & I);
      }),
      (a.prototype.imaskn = function (f) {
        i(typeof f == "number" && f >= 0);
        var l = f % 26,
          w = (f - l) / 26;
        if (
          (i(this.negative === 0, "imaskn works only with positive numbers"),
          this.length <= w)
        )
          return this;
        if (
          (l !== 0 && w++, (this.length = Math.min(w, this.length)), l !== 0)
        ) {
          var I = 67108863 ^ ((67108863 >>> l) << l);
          this.words[this.length - 1] &= I;
        }
        return this._strip();
      }),
      (a.prototype.maskn = function (f) {
        return this.clone().imaskn(f);
      }),
      (a.prototype.iaddn = function (f) {
        return (
          i(typeof f == "number"),
          i(f < 67108864),
          f < 0
            ? this.isubn(-f)
            : this.negative !== 0
            ? this.length === 1 && (this.words[0] | 0) <= f
              ? ((this.words[0] = f - (this.words[0] | 0)),
                (this.negative = 0),
                this)
              : ((this.negative = 0), this.isubn(f), (this.negative = 1), this)
            : this._iaddn(f)
        );
      }),
      (a.prototype._iaddn = function (f) {
        this.words[0] += f;
        for (var l = 0; l < this.length && this.words[l] >= 67108864; l++)
          (this.words[l] -= 67108864),
            l === this.length - 1
              ? (this.words[l + 1] = 1)
              : this.words[l + 1]++;
        return (this.length = Math.max(this.length, l + 1)), this;
      }),
      (a.prototype.isubn = function (f) {
        if ((i(typeof f == "number"), i(f < 67108864), f < 0))
          return this.iaddn(-f);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(f), (this.negative = 1), this;
        if (((this.words[0] -= f), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var l = 0; l < this.length && this.words[l] < 0; l++)
            (this.words[l] += 67108864), (this.words[l + 1] -= 1);
        return this._strip();
      }),
      (a.prototype.addn = function (f) {
        return this.clone().iaddn(f);
      }),
      (a.prototype.subn = function (f) {
        return this.clone().isubn(f);
      }),
      (a.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (a.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (a.prototype._ishlnsubmul = function (f, l, w) {
        var I = f.length + w,
          P;
        this._expand(I);
        var O,
          U = 0;
        for (P = 0; P < f.length; P++) {
          O = (this.words[P + w] | 0) + U;
          var x = (f.words[P] | 0) * l;
          (O -= x & 67108863),
            (U = (O >> 26) - ((x / 67108864) | 0)),
            (this.words[P + w] = O & 67108863);
        }
        for (; P < this.length - w; P++)
          (O = (this.words[P + w] | 0) + U),
            (U = O >> 26),
            (this.words[P + w] = O & 67108863);
        if (U === 0) return this._strip();
        for (i(U === -1), U = 0, P = 0; P < this.length; P++)
          (O = -(this.words[P] | 0) + U),
            (U = O >> 26),
            (this.words[P] = O & 67108863);
        return (this.negative = 1), this._strip();
      }),
      (a.prototype._wordDiv = function (f, l) {
        var w = this.length - f.length,
          I = this.clone(),
          P = f,
          O = P.words[P.length - 1] | 0,
          U = this._countBits(O);
        (w = 26 - U),
          w !== 0 &&
            ((P = P.ushln(w)), I.iushln(w), (O = P.words[P.length - 1] | 0));
        var x = I.length - P.length,
          g;
        if (l !== "mod") {
          (g = new a(null)),
            (g.length = x + 1),
            (g.words = new Array(g.length));
          for (var N = 0; N < g.length; N++) g.words[N] = 0;
        }
        var ie = I.clone()._ishlnsubmul(P, 1, x);
        ie.negative === 0 && ((I = ie), g && (g.words[x] = 1));
        for (var de = x - 1; de >= 0; de--) {
          var _ =
            (I.words[P.length + de] | 0) * 67108864 +
            (I.words[P.length + de - 1] | 0);
          for (
            _ = Math.min((_ / O) | 0, 67108863), I._ishlnsubmul(P, _, de);
            I.negative !== 0;

          )
            _--,
              (I.negative = 0),
              I._ishlnsubmul(P, 1, de),
              I.isZero() || (I.negative ^= 1);
          g && (g.words[de] = _);
        }
        return (
          g && g._strip(),
          I._strip(),
          l !== "div" && w !== 0 && I.iushrn(w),
          { div: g || null, mod: I }
        );
      }),
      (a.prototype.divmod = function (f, l, w) {
        if ((i(!f.isZero()), this.isZero()))
          return { div: new a(0), mod: new a(0) };
        var I, P, O;
        return this.negative !== 0 && f.negative === 0
          ? ((O = this.neg().divmod(f, l)),
            l !== "mod" && (I = O.div.neg()),
            l !== "div" &&
              ((P = O.mod.neg()), w && P.negative !== 0 && P.iadd(f)),
            { div: I, mod: P })
          : this.negative === 0 && f.negative !== 0
          ? ((O = this.divmod(f.neg(), l)),
            l !== "mod" && (I = O.div.neg()),
            { div: I, mod: O.mod })
          : this.negative & f.negative
          ? ((O = this.neg().divmod(f.neg(), l)),
            l !== "div" &&
              ((P = O.mod.neg()), w && P.negative !== 0 && P.isub(f)),
            { div: O.div, mod: P })
          : f.length > this.length || this.cmp(f) < 0
          ? { div: new a(0), mod: this }
          : f.length === 1
          ? l === "div"
            ? { div: this.divn(f.words[0]), mod: null }
            : l === "mod"
            ? { div: null, mod: new a(this.modrn(f.words[0])) }
            : { div: this.divn(f.words[0]), mod: new a(this.modrn(f.words[0])) }
          : this._wordDiv(f, l);
      }),
      (a.prototype.div = function (f) {
        return this.divmod(f, "div", !1).div;
      }),
      (a.prototype.mod = function (f) {
        return this.divmod(f, "mod", !1).mod;
      }),
      (a.prototype.umod = function (f) {
        return this.divmod(f, "mod", !0).mod;
      }),
      (a.prototype.divRound = function (f) {
        var l = this.divmod(f);
        if (l.mod.isZero()) return l.div;
        var w = l.div.negative !== 0 ? l.mod.isub(f) : l.mod,
          I = f.ushrn(1),
          P = f.andln(1),
          O = w.cmp(I);
        return O < 0 || (P === 1 && O === 0)
          ? l.div
          : l.div.negative !== 0
          ? l.div.isubn(1)
          : l.div.iaddn(1);
      }),
      (a.prototype.modrn = function (f) {
        var l = f < 0;
        l && (f = -f), i(f <= 67108863);
        for (var w = (1 << 26) % f, I = 0, P = this.length - 1; P >= 0; P--)
          I = (w * I + (this.words[P] | 0)) % f;
        return l ? -I : I;
      }),
      (a.prototype.modn = function (f) {
        return this.modrn(f);
      }),
      (a.prototype.idivn = function (f) {
        var l = f < 0;
        l && (f = -f), i(f <= 67108863);
        for (var w = 0, I = this.length - 1; I >= 0; I--) {
          var P = (this.words[I] | 0) + w * 67108864;
          (this.words[I] = (P / f) | 0), (w = P % f);
        }
        return this._strip(), l ? this.ineg() : this;
      }),
      (a.prototype.divn = function (f) {
        return this.clone().idivn(f);
      }),
      (a.prototype.egcd = function (f) {
        i(f.negative === 0), i(!f.isZero());
        var l = this,
          w = f.clone();
        l.negative !== 0 ? (l = l.umod(f)) : (l = l.clone());
        for (
          var I = new a(1), P = new a(0), O = new a(0), U = new a(1), x = 0;
          l.isEven() && w.isEven();

        )
          l.iushrn(1), w.iushrn(1), ++x;
        for (var g = w.clone(), N = l.clone(); !l.isZero(); ) {
          for (
            var ie = 0, de = 1;
            !(l.words[0] & de) && ie < 26;
            ++ie, de <<= 1
          );
          if (ie > 0)
            for (l.iushrn(ie); ie-- > 0; )
              (I.isOdd() || P.isOdd()) && (I.iadd(g), P.isub(N)),
                I.iushrn(1),
                P.iushrn(1);
          for (var _ = 0, Z = 1; !(w.words[0] & Z) && _ < 26; ++_, Z <<= 1);
          if (_ > 0)
            for (w.iushrn(_); _-- > 0; )
              (O.isOdd() || U.isOdd()) && (O.iadd(g), U.isub(N)),
                O.iushrn(1),
                U.iushrn(1);
          l.cmp(w) >= 0
            ? (l.isub(w), I.isub(O), P.isub(U))
            : (w.isub(l), O.isub(I), U.isub(P));
        }
        return { a: O, b: U, gcd: w.iushln(x) };
      }),
      (a.prototype._invmp = function (f) {
        i(f.negative === 0), i(!f.isZero());
        var l = this,
          w = f.clone();
        l.negative !== 0 ? (l = l.umod(f)) : (l = l.clone());
        for (
          var I = new a(1), P = new a(0), O = w.clone();
          l.cmpn(1) > 0 && w.cmpn(1) > 0;

        ) {
          for (var U = 0, x = 1; !(l.words[0] & x) && U < 26; ++U, x <<= 1);
          if (U > 0)
            for (l.iushrn(U); U-- > 0; ) I.isOdd() && I.iadd(O), I.iushrn(1);
          for (var g = 0, N = 1; !(w.words[0] & N) && g < 26; ++g, N <<= 1);
          if (g > 0)
            for (w.iushrn(g); g-- > 0; ) P.isOdd() && P.iadd(O), P.iushrn(1);
          l.cmp(w) >= 0 ? (l.isub(w), I.isub(P)) : (w.isub(l), P.isub(I));
        }
        var ie;
        return (
          l.cmpn(1) === 0 ? (ie = I) : (ie = P),
          ie.cmpn(0) < 0 && ie.iadd(f),
          ie
        );
      }),
      (a.prototype.gcd = function (f) {
        if (this.isZero()) return f.abs();
        if (f.isZero()) return this.abs();
        var l = this.clone(),
          w = f.clone();
        (l.negative = 0), (w.negative = 0);
        for (var I = 0; l.isEven() && w.isEven(); I++) l.iushrn(1), w.iushrn(1);
        do {
          for (; l.isEven(); ) l.iushrn(1);
          for (; w.isEven(); ) w.iushrn(1);
          var P = l.cmp(w);
          if (P < 0) {
            var O = l;
            (l = w), (w = O);
          } else if (P === 0 || w.cmpn(1) === 0) break;
          l.isub(w);
        } while (!0);
        return w.iushln(I);
      }),
      (a.prototype.invm = function (f) {
        return this.egcd(f).a.umod(f);
      }),
      (a.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (a.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (a.prototype.andln = function (f) {
        return this.words[0] & f;
      }),
      (a.prototype.bincn = function (f) {
        i(typeof f == "number");
        var l = f % 26,
          w = (f - l) / 26,
          I = 1 << l;
        if (this.length <= w)
          return this._expand(w + 1), (this.words[w] |= I), this;
        for (var P = I, O = w; P !== 0 && O < this.length; O++) {
          var U = this.words[O] | 0;
          (U += P), (P = U >>> 26), (U &= 67108863), (this.words[O] = U);
        }
        return P !== 0 && ((this.words[O] = P), this.length++), this;
      }),
      (a.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (a.prototype.cmpn = function (f) {
        var l = f < 0;
        if (this.negative !== 0 && !l) return -1;
        if (this.negative === 0 && l) return 1;
        this._strip();
        var w;
        if (this.length > 1) w = 1;
        else {
          l && (f = -f), i(f <= 67108863, "Number is too big");
          var I = this.words[0] | 0;
          w = I === f ? 0 : I < f ? -1 : 1;
        }
        return this.negative !== 0 ? -w | 0 : w;
      }),
      (a.prototype.cmp = function (f) {
        if (this.negative !== 0 && f.negative === 0) return -1;
        if (this.negative === 0 && f.negative !== 0) return 1;
        var l = this.ucmp(f);
        return this.negative !== 0 ? -l | 0 : l;
      }),
      (a.prototype.ucmp = function (f) {
        if (this.length > f.length) return 1;
        if (this.length < f.length) return -1;
        for (var l = 0, w = this.length - 1; w >= 0; w--) {
          var I = this.words[w] | 0,
            P = f.words[w] | 0;
          if (I !== P) {
            I < P ? (l = -1) : I > P && (l = 1);
            break;
          }
        }
        return l;
      }),
      (a.prototype.gtn = function (f) {
        return this.cmpn(f) === 1;
      }),
      (a.prototype.gt = function (f) {
        return this.cmp(f) === 1;
      }),
      (a.prototype.gten = function (f) {
        return this.cmpn(f) >= 0;
      }),
      (a.prototype.gte = function (f) {
        return this.cmp(f) >= 0;
      }),
      (a.prototype.ltn = function (f) {
        return this.cmpn(f) === -1;
      }),
      (a.prototype.lt = function (f) {
        return this.cmp(f) === -1;
      }),
      (a.prototype.lten = function (f) {
        return this.cmpn(f) <= 0;
      }),
      (a.prototype.lte = function (f) {
        return this.cmp(f) <= 0;
      }),
      (a.prototype.eqn = function (f) {
        return this.cmpn(f) === 0;
      }),
      (a.prototype.eq = function (f) {
        return this.cmp(f) === 0;
      }),
      (a.red = function (f) {
        return new le(f);
      }),
      (a.prototype.toRed = function (f) {
        return (
          i(!this.red, "Already a number in reduction context"),
          i(this.negative === 0, "red works only with positives"),
          f.convertTo(this)._forceRed(f)
        );
      }),
      (a.prototype.fromRed = function () {
        return (
          i(this.red, "fromRed works only with numbers in reduction context"),
          this.red.convertFrom(this)
        );
      }),
      (a.prototype._forceRed = function (f) {
        return (this.red = f), this;
      }),
      (a.prototype.forceRed = function (f) {
        return (
          i(!this.red, "Already a number in reduction context"),
          this._forceRed(f)
        );
      }),
      (a.prototype.redAdd = function (f) {
        return (
          i(this.red, "redAdd works only with red numbers"),
          this.red.add(this, f)
        );
      }),
      (a.prototype.redIAdd = function (f) {
        return (
          i(this.red, "redIAdd works only with red numbers"),
          this.red.iadd(this, f)
        );
      }),
      (a.prototype.redSub = function (f) {
        return (
          i(this.red, "redSub works only with red numbers"),
          this.red.sub(this, f)
        );
      }),
      (a.prototype.redISub = function (f) {
        return (
          i(this.red, "redISub works only with red numbers"),
          this.red.isub(this, f)
        );
      }),
      (a.prototype.redShl = function (f) {
        return (
          i(this.red, "redShl works only with red numbers"),
          this.red.shl(this, f)
        );
      }),
      (a.prototype.redMul = function (f) {
        return (
          i(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, f),
          this.red.mul(this, f)
        );
      }),
      (a.prototype.redIMul = function (f) {
        return (
          i(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, f),
          this.red.imul(this, f)
        );
      }),
      (a.prototype.redSqr = function () {
        return (
          i(this.red, "redSqr works only with red numbers"),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (a.prototype.redISqr = function () {
        return (
          i(this.red, "redISqr works only with red numbers"),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (a.prototype.redSqrt = function () {
        return (
          i(this.red, "redSqrt works only with red numbers"),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (a.prototype.redInvm = function () {
        return (
          i(this.red, "redInvm works only with red numbers"),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (a.prototype.redNeg = function () {
        return (
          i(this.red, "redNeg works only with red numbers"),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (a.prototype.redPow = function (f) {
        return (
          i(this.red && !f.red, "redPow(normalNum)"),
          this.red._verify1(this),
          this.red.pow(this, f)
        );
      });
    var F = { k256: null, p224: null, p192: null, p25519: null };
    function z(f, l) {
      (this.name = f),
        (this.p = new a(l, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new a(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (z.prototype._tmp = function () {
      var f = new a(null);
      return (f.words = new Array(Math.ceil(this.n / 13))), f;
    }),
      (z.prototype.ireduce = function (f) {
        var l = f,
          w;
        do
          this.split(l, this.tmp),
            (l = this.imulK(l)),
            (l = l.iadd(this.tmp)),
            (w = l.bitLength());
        while (w > this.n);
        var I = w < this.n ? -1 : l.ucmp(this.p);
        return (
          I === 0
            ? ((l.words[0] = 0), (l.length = 1))
            : I > 0
            ? l.isub(this.p)
            : l.strip !== void 0
            ? l.strip()
            : l._strip(),
          l
        );
      }),
      (z.prototype.split = function (f, l) {
        f.iushrn(this.n, 0, l);
      }),
      (z.prototype.imulK = function (f) {
        return f.imul(this.k);
      });
    function y() {
      z.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    s(y, z),
      (y.prototype.split = function (f, l) {
        for (var w = 4194303, I = Math.min(f.length, 9), P = 0; P < I; P++)
          l.words[P] = f.words[P];
        if (((l.length = I), f.length <= 9)) {
          (f.words[0] = 0), (f.length = 1);
          return;
        }
        var O = f.words[9];
        for (l.words[l.length++] = O & w, P = 10; P < f.length; P++) {
          var U = f.words[P] | 0;
          (f.words[P - 10] = ((U & w) << 4) | (O >>> 22)), (O = U);
        }
        (O >>>= 22),
          (f.words[P - 10] = O),
          O === 0 && f.length > 10 ? (f.length -= 10) : (f.length -= 9);
      }),
      (y.prototype.imulK = function (f) {
        (f.words[f.length] = 0), (f.words[f.length + 1] = 0), (f.length += 2);
        for (var l = 0, w = 0; w < f.length; w++) {
          var I = f.words[w] | 0;
          (l += I * 977),
            (f.words[w] = l & 67108863),
            (l = I * 64 + ((l / 67108864) | 0));
        }
        return (
          f.words[f.length - 1] === 0 &&
            (f.length--, f.words[f.length - 1] === 0 && f.length--),
          f
        );
      });
    function T() {
      z.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    s(T, z);
    function ne() {
      z.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    s(ne, z);
    function fe() {
      z.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    s(fe, z),
      (fe.prototype.imulK = function (f) {
        for (var l = 0, w = 0; w < f.length; w++) {
          var I = (f.words[w] | 0) * 19 + l,
            P = I & 67108863;
          (I >>>= 26), (f.words[w] = P), (l = I);
        }
        return l !== 0 && (f.words[f.length++] = l), f;
      }),
      (a._prime = function (f) {
        if (F[f]) return F[f];
        var l;
        if (f === "k256") l = new y();
        else if (f === "p224") l = new T();
        else if (f === "p192") l = new ne();
        else if (f === "p25519") l = new fe();
        else throw new Error("Unknown prime " + f);
        return (F[f] = l), l;
      });
    function le(f) {
      if (typeof f == "string") {
        var l = a._prime(f);
        (this.m = l.p), (this.prime = l);
      } else
        i(f.gtn(1), "modulus must be greater than 1"),
          (this.m = f),
          (this.prime = null);
    }
    (le.prototype._verify1 = function (f) {
      i(f.negative === 0, "red works only with positives"),
        i(f.red, "red works only with red numbers");
    }),
      (le.prototype._verify2 = function (f, l) {
        i((f.negative | l.negative) === 0, "red works only with positives"),
          i(f.red && f.red === l.red, "red works only with red numbers");
      }),
      (le.prototype.imod = function (f) {
        return this.prime
          ? this.prime.ireduce(f)._forceRed(this)
          : (b(f, f.umod(this.m)._forceRed(this)), f);
      }),
      (le.prototype.neg = function (f) {
        return f.isZero() ? f.clone() : this.m.sub(f)._forceRed(this);
      }),
      (le.prototype.add = function (f, l) {
        this._verify2(f, l);
        var w = f.add(l);
        return w.cmp(this.m) >= 0 && w.isub(this.m), w._forceRed(this);
      }),
      (le.prototype.iadd = function (f, l) {
        this._verify2(f, l);
        var w = f.iadd(l);
        return w.cmp(this.m) >= 0 && w.isub(this.m), w;
      }),
      (le.prototype.sub = function (f, l) {
        this._verify2(f, l);
        var w = f.sub(l);
        return w.cmpn(0) < 0 && w.iadd(this.m), w._forceRed(this);
      }),
      (le.prototype.isub = function (f, l) {
        this._verify2(f, l);
        var w = f.isub(l);
        return w.cmpn(0) < 0 && w.iadd(this.m), w;
      }),
      (le.prototype.shl = function (f, l) {
        return this._verify1(f), this.imod(f.ushln(l));
      }),
      (le.prototype.imul = function (f, l) {
        return this._verify2(f, l), this.imod(f.imul(l));
      }),
      (le.prototype.mul = function (f, l) {
        return this._verify2(f, l), this.imod(f.mul(l));
      }),
      (le.prototype.isqr = function (f) {
        return this.imul(f, f.clone());
      }),
      (le.prototype.sqr = function (f) {
        return this.mul(f, f);
      }),
      (le.prototype.sqrt = function (f) {
        if (f.isZero()) return f.clone();
        var l = this.m.andln(3);
        if ((i(l % 2 === 1), l === 3)) {
          var w = this.m.add(new a(1)).iushrn(2);
          return this.pow(f, w);
        }
        for (var I = this.m.subn(1), P = 0; !I.isZero() && I.andln(1) === 0; )
          P++, I.iushrn(1);
        i(!I.isZero());
        var O = new a(1).toRed(this),
          U = O.redNeg(),
          x = this.m.subn(1).iushrn(1),
          g = this.m.bitLength();
        for (g = new a(2 * g * g).toRed(this); this.pow(g, x).cmp(U) !== 0; )
          g.redIAdd(U);
        for (
          var N = this.pow(g, I),
            ie = this.pow(f, I.addn(1).iushrn(1)),
            de = this.pow(f, I),
            _ = P;
          de.cmp(O) !== 0;

        ) {
          for (var Z = de, L = 0; Z.cmp(O) !== 0; L++) Z = Z.redSqr();
          i(L < _);
          var j = this.pow(N, new a(1).iushln(_ - L - 1));
          (ie = ie.redMul(j)), (N = j.redSqr()), (de = de.redMul(N)), (_ = L);
        }
        return ie;
      }),
      (le.prototype.invm = function (f) {
        var l = f._invmp(this.m);
        return l.negative !== 0
          ? ((l.negative = 0), this.imod(l).redNeg())
          : this.imod(l);
      }),
      (le.prototype.pow = function (f, l) {
        if (l.isZero()) return new a(1).toRed(this);
        if (l.cmpn(1) === 0) return f.clone();
        var w = 4,
          I = new Array(1 << w);
        (I[0] = new a(1).toRed(this)), (I[1] = f);
        for (var P = 2; P < I.length; P++) I[P] = this.mul(I[P - 1], f);
        var O = I[0],
          U = 0,
          x = 0,
          g = l.bitLength() % 26;
        for (g === 0 && (g = 26), P = l.length - 1; P >= 0; P--) {
          for (var N = l.words[P], ie = g - 1; ie >= 0; ie--) {
            var de = (N >> ie) & 1;
            if ((O !== I[0] && (O = this.sqr(O)), de === 0 && U === 0)) {
              x = 0;
              continue;
            }
            (U <<= 1),
              (U |= de),
              x++,
              !(x !== w && (P !== 0 || ie !== 0)) &&
                ((O = this.mul(O, I[U])), (x = 0), (U = 0));
          }
          g = 26;
        }
        return O;
      }),
      (le.prototype.convertTo = function (f) {
        var l = f.umod(this.m);
        return l === f ? l.clone() : l;
      }),
      (le.prototype.convertFrom = function (f) {
        var l = f.clone();
        return (l.red = null), l;
      }),
      (a.mont = function (f) {
        return new me(f);
      });
    function me(f) {
      le.call(this, f),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new a(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    s(me, le),
      (me.prototype.convertTo = function (f) {
        return this.imod(f.ushln(this.shift));
      }),
      (me.prototype.convertFrom = function (f) {
        var l = this.imod(f.mul(this.rinv));
        return (l.red = null), l;
      }),
      (me.prototype.imul = function (f, l) {
        if (f.isZero() || l.isZero())
          return (f.words[0] = 0), (f.length = 1), f;
        var w = f.imul(l),
          I = w.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          P = w.isub(I).iushrn(this.shift),
          O = P;
        return (
          P.cmp(this.m) >= 0
            ? (O = P.isub(this.m))
            : P.cmpn(0) < 0 && (O = P.iadd(this.m)),
          O._forceRed(this)
        );
      }),
      (me.prototype.mul = function (f, l) {
        if (f.isZero() || l.isZero()) return new a(0)._forceRed(this);
        var w = f.mul(l),
          I = w.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          P = w.isub(I).iushrn(this.shift),
          O = P;
        return (
          P.cmp(this.m) >= 0
            ? (O = P.isub(this.m))
            : P.cmpn(0) < 0 && (O = P.iadd(this.m)),
          O._forceRed(this)
        );
      }),
      (me.prototype.invm = function (f) {
        var l = this.imod(f._invmp(this.m).mul(this.r2));
        return l._forceRed(this);
      });
  })(r, o1);
})(h1);
var nt = h1.exports;
const l1 = "bignumber/5.7.0";
var Vc = nt.BN;
const In = new gr(l1),
  Uh = {},
  W0 = 9007199254740991;
function O5(r) {
  return (
    r != null &&
    (Or.isBigNumber(r) ||
      (typeof r == "number" && r % 1 === 0) ||
      (typeof r == "string" && !!r.match(/^-?[0-9]+$/)) ||
      Zr(r) ||
      typeof r == "bigint" ||
      po(r))
  );
}
let Y0 = !1,
  Or = class Ni {
    constructor(e, t) {
      e !== Uh &&
        In.throwError(
          "cannot call constructor directly; use BigNumber.from",
          gr.errors.UNSUPPORTED_OPERATION,
          { operation: "new (BigNumber)" }
        ),
        (this._hex = t),
        (this._isBigNumber = !0),
        Object.freeze(this);
    }
    fromTwos(e) {
      return Lr(mt(this).fromTwos(e));
    }
    toTwos(e) {
      return Lr(mt(this).toTwos(e));
    }
    abs() {
      return this._hex[0] === "-" ? Ni.from(this._hex.substring(1)) : this;
    }
    add(e) {
      return Lr(mt(this).add(mt(e)));
    }
    sub(e) {
      return Lr(mt(this).sub(mt(e)));
    }
    div(e) {
      return (
        Ni.from(e).isZero() && gi("division-by-zero", "div"),
        Lr(mt(this).div(mt(e)))
      );
    }
    mul(e) {
      return Lr(mt(this).mul(mt(e)));
    }
    mod(e) {
      const t = mt(e);
      return t.isNeg() && gi("division-by-zero", "mod"), Lr(mt(this).umod(t));
    }
    pow(e) {
      const t = mt(e);
      return t.isNeg() && gi("negative-power", "pow"), Lr(mt(this).pow(t));
    }
    and(e) {
      const t = mt(e);
      return (
        (this.isNegative() || t.isNeg()) && gi("unbound-bitwise-result", "and"),
        Lr(mt(this).and(t))
      );
    }
    or(e) {
      const t = mt(e);
      return (
        (this.isNegative() || t.isNeg()) && gi("unbound-bitwise-result", "or"),
        Lr(mt(this).or(t))
      );
    }
    xor(e) {
      const t = mt(e);
      return (
        (this.isNegative() || t.isNeg()) && gi("unbound-bitwise-result", "xor"),
        Lr(mt(this).xor(t))
      );
    }
    mask(e) {
      return (
        (this.isNegative() || e < 0) && gi("negative-width", "mask"),
        Lr(mt(this).maskn(e))
      );
    }
    shl(e) {
      return (
        (this.isNegative() || e < 0) && gi("negative-width", "shl"),
        Lr(mt(this).shln(e))
      );
    }
    shr(e) {
      return (
        (this.isNegative() || e < 0) && gi("negative-width", "shr"),
        Lr(mt(this).shrn(e))
      );
    }
    eq(e) {
      return mt(this).eq(mt(e));
    }
    lt(e) {
      return mt(this).lt(mt(e));
    }
    lte(e) {
      return mt(this).lte(mt(e));
    }
    gt(e) {
      return mt(this).gt(mt(e));
    }
    gte(e) {
      return mt(this).gte(mt(e));
    }
    isNegative() {
      return this._hex[0] === "-";
    }
    isZero() {
      return mt(this).isZero();
    }
    toNumber() {
      try {
        return mt(this).toNumber();
      } catch {
        gi("overflow", "toNumber", this.toString());
      }
      return null;
    }
    toBigInt() {
      try {
        return BigInt(this.toString());
      } catch {}
      return In.throwError(
        "this platform does not support BigInt",
        gr.errors.UNSUPPORTED_OPERATION,
        { value: this.toString() }
      );
    }
    toString() {
      return (
        arguments.length > 0 &&
          (arguments[0] === 10
            ? Y0 ||
              ((Y0 = !0),
              In.warn(
                "BigNumber.toString does not accept any parameters; base-10 is assumed"
              ))
            : arguments[0] === 16
            ? In.throwError(
                "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                gr.errors.UNEXPECTED_ARGUMENT,
                {}
              )
            : In.throwError(
                "BigNumber.toString does not accept parameters",
                gr.errors.UNEXPECTED_ARGUMENT,
                {}
              )),
        mt(this).toString(10)
      );
    }
    toHexString() {
      return this._hex;
    }
    toJSON(e) {
      return { type: "BigNumber", hex: this.toHexString() };
    }
    static from(e) {
      if (e instanceof Ni) return e;
      if (typeof e == "string")
        return e.match(/^-?0x[0-9a-f]+$/i)
          ? new Ni(Uh, na(e))
          : e.match(/^-?[0-9]+$/)
          ? new Ni(Uh, na(new Vc(e)))
          : In.throwArgumentError("invalid BigNumber string", "value", e);
      if (typeof e == "number")
        return (
          e % 1 && gi("underflow", "BigNumber.from", e),
          (e >= W0 || e <= -W0) && gi("overflow", "BigNumber.from", e),
          Ni.from(String(e))
        );
      const t = e;
      if (typeof t == "bigint") return Ni.from(t.toString());
      if (po(t)) return Ni.from($r(t));
      if (t)
        if (t.toHexString) {
          const i = t.toHexString();
          if (typeof i == "string") return Ni.from(i);
        } else {
          let i = t._hex;
          if (
            (i == null && t.type === "BigNumber" && (i = t.hex),
            typeof i == "string" &&
              (Zr(i) || (i[0] === "-" && Zr(i.substring(1)))))
          )
            return Ni.from(i);
        }
      return In.throwArgumentError("invalid BigNumber value", "value", e);
    }
    static isBigNumber(e) {
      return !!(e && e._isBigNumber);
    }
  };
function na(r) {
  if (typeof r != "string") return na(r.toString(16));
  if (r[0] === "-")
    return (
      (r = r.substring(1)),
      r[0] === "-" && In.throwArgumentError("invalid hex", "value", r),
      (r = na(r)),
      r === "0x00" ? r : "-" + r
    );
  if ((r.substring(0, 2) !== "0x" && (r = "0x" + r), r === "0x")) return "0x00";
  for (
    r.length % 2 && (r = "0x0" + r.substring(2));
    r.length > 4 && r.substring(0, 4) === "0x00";

  )
    r = "0x" + r.substring(4);
  return r;
}
function Lr(r) {
  return Or.from(na(r));
}
function mt(r) {
  const e = Or.from(r).toHexString();
  return e[0] === "-"
    ? new Vc("-" + e.substring(3), 16)
    : new Vc(e.substring(2), 16);
}
function gi(r, e, t) {
  const i = { fault: r, operation: e };
  return (
    t != null && (i.value = t), In.throwError(r, gr.errors.NUMERIC_FAULT, i)
  );
}
function N5(r) {
  return new Vc(r, 36).toString(16);
}
const Mr = new gr(l1),
  Xo = {},
  f1 = Or.from(0),
  d1 = Or.from(-1);
function p1(r, e, t, i) {
  const s = { fault: e, operation: t };
  return (
    i !== void 0 && (s.value = i), Mr.throwError(r, gr.errors.NUMERIC_FAULT, s)
  );
}
let Zo = "0";
for (; Zo.length < 256; ) Zo += Zo;
function Yl(r) {
  if (typeof r != "number")
    try {
      r = Or.from(r).toNumber();
    } catch {}
  return typeof r == "number" && r >= 0 && r <= 256 && !(r % 1)
    ? "1" + Zo.substring(0, r)
    : Mr.throwArgumentError("invalid decimal size", "decimals", r);
}
function Bh(r, e) {
  e == null && (e = 0);
  const t = Yl(e);
  r = Or.from(r);
  const i = r.lt(f1);
  i && (r = r.mul(d1));
  let s = r.mod(t).toString();
  for (; s.length < t.length - 1; ) s = "0" + s;
  s = s.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  const a = r.div(t).toString();
  return t.length === 1 ? (r = a) : (r = a + "." + s), i && (r = "-" + r), r;
}
function En(r, e) {
  e == null && (e = 0);
  const t = Yl(e);
  (typeof r != "string" || !r.match(/^-?[0-9.]+$/)) &&
    Mr.throwArgumentError("invalid decimal value", "value", r);
  const i = r.substring(0, 1) === "-";
  i && (r = r.substring(1)),
    r === "." && Mr.throwArgumentError("missing value", "value", r);
  const s = r.split(".");
  s.length > 2 && Mr.throwArgumentError("too many decimal points", "value", r);
  let a = s[0],
    u = s[1];
  for (a || (a = "0"), u || (u = "0"); u[u.length - 1] === "0"; )
    u = u.substring(0, u.length - 1);
  for (
    u.length > t.length - 1 &&
      p1("fractional component exceeds decimals", "underflow", "parseFixed"),
      u === "" && (u = "0");
    u.length < t.length - 1;

  )
    u += "0";
  const h = Or.from(a),
    p = Or.from(u);
  let d = h.mul(t).add(p);
  return i && (d = d.mul(d1)), d;
}
let Lh = class bl {
    constructor(e, t, i, s) {
      e !== Xo &&
        Mr.throwError(
          "cannot use FixedFormat constructor; use FixedFormat.from",
          gr.errors.UNSUPPORTED_OPERATION,
          { operation: "new FixedFormat" }
        ),
        (this.signed = t),
        (this.width = i),
        (this.decimals = s),
        (this.name = (t ? "" : "u") + "fixed" + String(i) + "x" + String(s)),
        (this._multiplier = Yl(s)),
        Object.freeze(this);
    }
    static from(e) {
      if (e instanceof bl) return e;
      typeof e == "number" && (e = `fixed128x${e}`);
      let t = !0,
        i = 128,
        s = 18;
      if (typeof e == "string") {
        if (e !== "fixed")
          if (e === "ufixed") t = !1;
          else {
            const a = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
            a || Mr.throwArgumentError("invalid fixed format", "format", e),
              (t = a[1] !== "u"),
              (i = parseInt(a[2])),
              (s = parseInt(a[3]));
          }
      } else if (e) {
        const a = (u, h, p) =>
          e[u] == null
            ? p
            : (typeof e[u] !== h &&
                Mr.throwArgumentError(
                  "invalid fixed format (" + u + " not " + h + ")",
                  "format." + u,
                  e[u]
                ),
              e[u]);
        (t = a("signed", "boolean", t)),
          (i = a("width", "number", i)),
          (s = a("decimals", "number", s));
      }
      return (
        i % 8 &&
          Mr.throwArgumentError(
            "invalid fixed format width (not byte aligned)",
            "format.width",
            i
          ),
        s > 80 &&
          Mr.throwArgumentError(
            "invalid fixed format (decimals too large)",
            "format.decimals",
            s
          ),
        new bl(Xo, t, i, s)
      );
    }
  },
  g1 = class Pr {
    constructor(e, t, i, s) {
      e !== Xo &&
        Mr.throwError(
          "cannot use FixedNumber constructor; use FixedNumber.from",
          gr.errors.UNSUPPORTED_OPERATION,
          { operation: "new FixedFormat" }
        ),
        (this.format = s),
        (this._hex = t),
        (this._value = i),
        (this._isFixedNumber = !0),
        Object.freeze(this);
    }
    _checkFormat(e) {
      this.format.name !== e.format.name &&
        Mr.throwArgumentError(
          "incompatible format; use fixedNumber.toFormat",
          "other",
          e
        );
    }
    addUnsafe(e) {
      this._checkFormat(e);
      const t = En(this._value, this.format.decimals),
        i = En(e._value, e.format.decimals);
      return Pr.fromValue(t.add(i), this.format.decimals, this.format);
    }
    subUnsafe(e) {
      this._checkFormat(e);
      const t = En(this._value, this.format.decimals),
        i = En(e._value, e.format.decimals);
      return Pr.fromValue(t.sub(i), this.format.decimals, this.format);
    }
    mulUnsafe(e) {
      this._checkFormat(e);
      const t = En(this._value, this.format.decimals),
        i = En(e._value, e.format.decimals);
      return Pr.fromValue(
        t.mul(i).div(this.format._multiplier),
        this.format.decimals,
        this.format
      );
    }
    divUnsafe(e) {
      this._checkFormat(e);
      const t = En(this._value, this.format.decimals),
        i = En(e._value, e.format.decimals);
      return Pr.fromValue(
        t.mul(this.format._multiplier).div(i),
        this.format.decimals,
        this.format
      );
    }
    floor() {
      const e = this.toString().split(".");
      e.length === 1 && e.push("0");
      let t = Pr.from(e[0], this.format);
      const i = !e[1].match(/^(0*)$/);
      return (
        this.isNegative() && i && (t = t.subUnsafe(Q0.toFormat(t.format))), t
      );
    }
    ceiling() {
      const e = this.toString().split(".");
      e.length === 1 && e.push("0");
      let t = Pr.from(e[0], this.format);
      const i = !e[1].match(/^(0*)$/);
      return (
        !this.isNegative() && i && (t = t.addUnsafe(Q0.toFormat(t.format))), t
      );
    }
    round(e) {
      e == null && (e = 0);
      const t = this.toString().split(".");
      if (
        (t.length === 1 && t.push("0"),
        (e < 0 || e > 80 || e % 1) &&
          Mr.throwArgumentError("invalid decimal count", "decimals", e),
        t[1].length <= e)
      )
        return this;
      const i = Pr.from("1" + Zo.substring(0, e), this.format),
        s = R5.toFormat(this.format);
      return this.mulUnsafe(i).addUnsafe(s).floor().divUnsafe(i);
    }
    isZero() {
      return this._value === "0.0" || this._value === "0";
    }
    isNegative() {
      return this._value[0] === "-";
    }
    toString() {
      return this._value;
    }
    toHexString(e) {
      if (e == null) return this._hex;
      e % 8 && Mr.throwArgumentError("invalid byte width", "width", e);
      const t = Or.from(this._hex)
        .fromTwos(this.format.width)
        .toTwos(e)
        .toHexString();
      return nn(t, e / 8);
    }
    toUnsafeFloat() {
      return parseFloat(this.toString());
    }
    toFormat(e) {
      return Pr.fromString(this._value, e);
    }
    static fromValue(e, t, i) {
      return (
        i == null && t != null && !O5(t) && ((i = t), (t = null)),
        t == null && (t = 0),
        i == null && (i = "fixed"),
        Pr.fromString(Bh(e, t), Lh.from(i))
      );
    }
    static fromString(e, t) {
      t == null && (t = "fixed");
      const i = Lh.from(t),
        s = En(e, i.decimals);
      !i.signed &&
        s.lt(f1) &&
        p1("unsigned value cannot be negative", "overflow", "value", e);
      let a = null;
      i.signed
        ? (a = s.toTwos(i.width).toHexString())
        : ((a = s.toHexString()), (a = nn(a, i.width / 8)));
      const u = Bh(s, i.decimals);
      return new Pr(Xo, a, u, i);
    }
    static fromBytes(e, t) {
      t == null && (t = "fixed");
      const i = Lh.from(t);
      if (Wt(e).length > i.width / 8) throw new Error("overflow");
      let s = Or.from(e);
      i.signed && (s = s.fromTwos(i.width));
      const a = s.toTwos((i.signed ? 0 : 1) + i.width).toHexString(),
        u = Bh(s, i.decimals);
      return new Pr(Xo, a, u, i);
    }
    static from(e, t) {
      if (typeof e == "string") return Pr.fromString(e, t);
      if (po(e)) return Pr.fromBytes(e, t);
      try {
        return Pr.fromValue(e, 0, t);
      } catch (i) {
        if (i.code !== gr.errors.INVALID_ARGUMENT) throw i;
      }
      return Mr.throwArgumentError("invalid FixedNumber value", "value", e);
    }
    static isFixedNumber(e) {
      return !!(e && e._isFixedNumber);
    }
  };
const Q0 = g1.from(1),
  R5 = g1.from("0.5"),
  T5 = "strings/5.7.0",
  U5 = new gr(T5);
var Gc;
(function (r) {
  (r.current = ""),
    (r.NFC = "NFC"),
    (r.NFD = "NFD"),
    (r.NFKC = "NFKC"),
    (r.NFKD = "NFKD");
})(Gc || (Gc = {}));
var J0;
(function (r) {
  (r.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
    (r.BAD_PREFIX = "bad codepoint prefix"),
    (r.OVERRUN = "string overrun"),
    (r.MISSING_CONTINUE = "missing continuation byte"),
    (r.OUT_OF_RANGE = "out of UTF-8 range"),
    (r.UTF16_SURROGATE = "UTF-16 surrogate"),
    (r.OVERLONG = "overlong representation");
})(J0 || (J0 = {}));
function qh(r, e = Gc.current) {
  e != Gc.current && (U5.checkNormalize(), (r = r.normalize(e)));
  let t = [];
  for (let i = 0; i < r.length; i++) {
    const s = r.charCodeAt(i);
    if (s < 128) t.push(s);
    else if (s < 2048) t.push((s >> 6) | 192), t.push((s & 63) | 128);
    else if ((s & 64512) == 55296) {
      i++;
      const a = r.charCodeAt(i);
      if (i >= r.length || (a & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      const u = 65536 + ((s & 1023) << 10) + (a & 1023);
      t.push((u >> 18) | 240),
        t.push(((u >> 12) & 63) | 128),
        t.push(((u >> 6) & 63) | 128),
        t.push((u & 63) | 128);
    } else
      t.push((s >> 12) | 224),
        t.push(((s >> 6) & 63) | 128),
        t.push((s & 63) | 128);
  }
  return Wt(t);
}
function B5(r) {
  if (r.length % 4 !== 0) throw new Error("bad data");
  let e = [];
  for (let t = 0; t < r.length; t += 4)
    e.push(parseInt(r.substring(t, t + 4), 16));
  return e;
}
function jh(r, e) {
  e ||
    (e = function (s) {
      return [parseInt(s, 16)];
    });
  let t = 0,
    i = {};
  return (
    r.split(",").forEach((s) => {
      let a = s.split(":");
      (t += parseInt(a[0], 16)), (i[t] = e(a[1]));
    }),
    i
  );
}
function X0(r) {
  let e = 0;
  return r.split(",").map((t) => {
    let i = t.split("-");
    i.length === 1 ? (i[1] = "0") : i[1] === "" && (i[1] = "1");
    let s = e + parseInt(i[0], 16);
    return (e = parseInt(i[1], 16)), { l: s, h: e };
  });
}
X0(
  "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
),
  "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
    .split(",")
    .map((r) => parseInt(r, 16)),
  jh(
    "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
  ),
  jh(
    "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
  ),
  jh(
    "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
    B5
  ),
  X0(
    "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
  );
function L5(r) {
  r = atob(r);
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r.charCodeAt(t));
  return Wt(e);
}
function m1(r, e) {
  e == null && (e = 1);
  const t = [],
    i = t.forEach,
    s = function (a, u) {
      i.call(a, function (h) {
        u > 0 && Array.isArray(h) ? s(h, u - 1) : t.push(h);
      });
    };
  return s(r, e), t;
}
function q5(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const i = r[t];
    e[i[0]] = i[1];
  }
  return e;
}
function j5(r) {
  let e = 0;
  function t() {
    return (r[e++] << 8) | r[e++];
  }
  let i = t(),
    s = 1,
    a = [0, 1];
  for (let F = 1; F < i; F++) a.push((s += t()));
  let u = t(),
    h = e;
  e += u;
  let p = 0,
    d = 0;
  function b() {
    return p == 0 && ((d = (d << 8) | r[e++]), (p = 8)), (d >> --p) & 1;
  }
  const E = 31,
    D = Math.pow(2, E),
    S = D >>> 1,
    M = S >> 1,
    W = D - 1;
  let G = 0;
  for (let F = 0; F < E; F++) G = (G << 1) | b();
  let ee = [],
    K = 0,
    V = D;
  for (;;) {
    let F = Math.floor(((G - K + 1) * s - 1) / V),
      z = 0,
      y = i;
    for (; y - z > 1; ) {
      let fe = (z + y) >>> 1;
      F < a[fe] ? (y = fe) : (z = fe);
    }
    if (z == 0) break;
    ee.push(z);
    let T = K + Math.floor((V * a[z]) / s),
      ne = K + Math.floor((V * a[z + 1]) / s) - 1;
    for (; !((T ^ ne) & S); )
      (G = ((G << 1) & W) | b()),
        (T = (T << 1) & W),
        (ne = ((ne << 1) & W) | 1);
    for (; T & ~ne & M; )
      (G = (G & S) | ((G << 1) & (W >>> 1)) | b()),
        (T = (T << 1) ^ S),
        (ne = ((ne ^ S) << 1) | S | 1);
    (K = T), (V = 1 + ne - T);
  }
  let q = i - 4;
  return ee.map((F) => {
    switch (F - q) {
      case 3:
        return q + 65792 + ((r[h++] << 16) | (r[h++] << 8) | r[h++]);
      case 2:
        return q + 256 + ((r[h++] << 8) | r[h++]);
      case 1:
        return q + r[h++];
      default:
        return F - 1;
    }
  });
}
function $5(r) {
  let e = 0;
  return () => r[e++];
}
function F5(r) {
  return $5(j5(r));
}
function z5(r) {
  return r & 1 ? ~r >> 1 : r >> 1;
}
function k5(r, e) {
  let t = Array(r);
  for (let i = 0; i < r; i++) t[i] = 1 + e();
  return t;
}
function Z0(r, e) {
  let t = Array(r);
  for (let i = 0, s = -1; i < r; i++) t[i] = s += 1 + e();
  return t;
}
function H5(r, e) {
  let t = Array(r);
  for (let i = 0, s = 0; i < r; i++) t[i] = s += z5(e());
  return t;
}
function Wc(r, e) {
  let t = Z0(r(), r),
    i = r(),
    s = Z0(i, r),
    a = k5(i, r);
  for (let u = 0; u < i; u++) for (let h = 0; h < a[u]; h++) t.push(s[u] + h);
  return e ? t.map((u) => e[u]) : t;
}
function K5(r) {
  let e = [];
  for (;;) {
    let t = r();
    if (t == 0) break;
    e.push(G5(t, r));
  }
  for (;;) {
    let t = r() - 1;
    if (t < 0) break;
    e.push(W5(t, r));
  }
  return q5(m1(e));
}
function V5(r) {
  let e = [];
  for (;;) {
    let t = r();
    if (t == 0) break;
    e.push(t);
  }
  return e;
}
function v1(r, e, t) {
  let i = Array(r)
    .fill(void 0)
    .map(() => []);
  for (let s = 0; s < e; s++) H5(r, t).forEach((a, u) => i[u].push(a));
  return i;
}
function G5(r, e) {
  let t = 1 + e(),
    i = e(),
    s = V5(e),
    a = v1(s.length, 1 + r, e);
  return m1(
    a.map((u, h) => {
      const p = u[0],
        d = u.slice(1);
      return Array(s[h])
        .fill(void 0)
        .map((b, E) => {
          let D = E * i;
          return [p + E * t, d.map((S) => S + D)];
        });
    })
  );
}
function W5(r, e) {
  let t = 1 + e();
  return v1(t, 1 + r, e).map((i) => [i[0], i.slice(1)]);
}
function Y5(r) {
  let e = Wc(r).sort((i, s) => i - s);
  return t();
  function t() {
    let i = [];
    for (;;) {
      let d = Wc(r, e);
      if (d.length == 0) break;
      i.push({ set: new Set(d), node: t() });
    }
    i.sort((d, b) => b.set.size - d.set.size);
    let s = r(),
      a = s % 3;
    s = (s / 3) | 0;
    let u = !!(s & 1);
    s >>= 1;
    let h = s == 1,
      p = s == 2;
    return { branches: i, valid: a, fe0f: u, save: h, check: p };
  }
}
function Q5() {
  return F5(
    L5(
      "AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="
    )
  );
}
const Ac = Q5();
new Set(Wc(Ac)), new Set(Wc(Ac)), K5(Ac), Y5(Ac);
const J5 = new Uint8Array(32);
J5.fill(0);
const X5 = `Ethereum Signed Message:
`;
function y1(r) {
  return (
    typeof r == "string" && (r = qh(r)),
    Wl(I5([qh(X5), qh(String(r.length)), r]))
  );
}
const Z5 = "address/5.7.0",
  Go = new gr(Z5);
function ep(r) {
  Zr(r, 20) || Go.throwArgumentError("invalid address", "address", r),
    (r = r.toLowerCase());
  const e = r.substring(2).split(""),
    t = new Uint8Array(40);
  for (let s = 0; s < 40; s++) t[s] = e[s].charCodeAt(0);
  const i = Wt(Wl(t));
  for (let s = 0; s < 40; s += 2)
    i[s >> 1] >> 4 >= 8 && (e[s] = e[s].toUpperCase()),
      (i[s >> 1] & 15) >= 8 && (e[s + 1] = e[s + 1].toUpperCase());
  return "0x" + e.join("");
}
const eA = 9007199254740991;
function tA(r) {
  return Math.log10 ? Math.log10(r) : Math.log(r) / Math.LN10;
}
const Ql = {};
for (let r = 0; r < 10; r++) Ql[String(r)] = String(r);
for (let r = 0; r < 26; r++) Ql[String.fromCharCode(65 + r)] = String(10 + r);
const tp = Math.floor(tA(eA));
function rA(r) {
  (r = r.toUpperCase()), (r = r.substring(4) + r.substring(0, 2) + "00");
  let e = r
    .split("")
    .map((i) => Ql[i])
    .join("");
  for (; e.length >= tp; ) {
    let i = e.substring(0, tp);
    e = (parseInt(i, 10) % 97) + e.substring(i.length);
  }
  let t = String(98 - (parseInt(e, 10) % 97));
  for (; t.length < 2; ) t = "0" + t;
  return t;
}
function iA(r) {
  let e = null;
  if (
    (typeof r != "string" &&
      Go.throwArgumentError("invalid address", "address", r),
    r.match(/^(0x)?[0-9a-fA-F]{40}$/))
  )
    r.substring(0, 2) !== "0x" && (r = "0x" + r),
      (e = ep(r)),
      r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
        e !== r &&
        Go.throwArgumentError("bad address checksum", "address", r);
  else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (
      r.substring(2, 4) !== rA(r) &&
        Go.throwArgumentError("bad icap checksum", "address", r),
        e = N5(r.substring(4));
      e.length < 40;

    )
      e = "0" + e;
    e = ep("0x" + e);
  } else Go.throwArgumentError("invalid address", "address", r);
  return e;
}
function $o(r, e, t) {
  Object.defineProperty(r, e, { enumerable: !0, value: t, writable: !1 });
}
const nA = new Uint8Array(32);
nA.fill(0), Or.from(-1);
const sA = Or.from(0),
  oA = Or.from(1);
Or.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
  nn(oA.toHexString(), 32),
  nn(sA.toHexString(), 32);
var Ji = {},
  vt = {},
  da = w1;
function w1(r, e) {
  if (!r) throw new Error(e || "Assertion failed");
}
w1.equal = function (r, e, t) {
  if (r != e) throw new Error(t || "Assertion failed: " + r + " != " + e);
};
var _l = { exports: {} };
typeof Object.create == "function"
  ? (_l.exports = function (r, e) {
      e &&
        ((r.super_ = e),
        (r.prototype = Object.create(e.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })));
    })
  : (_l.exports = function (r, e) {
      if (e) {
        r.super_ = e;
        var t = function () {};
        (t.prototype = e.prototype),
          (r.prototype = new t()),
          (r.prototype.constructor = r);
      }
    });
var aA = da,
  cA = _l.exports;
vt.inherits = cA;
function uA(r, e) {
  return (r.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= r.length
    ? !1
    : (r.charCodeAt(e + 1) & 64512) === 56320;
}
function hA(r, e) {
  if (Array.isArray(r)) return r.slice();
  if (!r) return [];
  var t = [];
  if (typeof r == "string")
    if (e) {
      if (e === "hex")
        for (
          r = r.replace(/[^a-z0-9]+/gi, ""),
            r.length % 2 !== 0 && (r = "0" + r),
            s = 0;
          s < r.length;
          s += 2
        )
          t.push(parseInt(r[s] + r[s + 1], 16));
    } else
      for (var i = 0, s = 0; s < r.length; s++) {
        var a = r.charCodeAt(s);
        a < 128
          ? (t[i++] = a)
          : a < 2048
          ? ((t[i++] = (a >> 6) | 192), (t[i++] = (a & 63) | 128))
          : uA(r, s)
          ? ((a = 65536 + ((a & 1023) << 10) + (r.charCodeAt(++s) & 1023)),
            (t[i++] = (a >> 18) | 240),
            (t[i++] = ((a >> 12) & 63) | 128),
            (t[i++] = ((a >> 6) & 63) | 128),
            (t[i++] = (a & 63) | 128))
          : ((t[i++] = (a >> 12) | 224),
            (t[i++] = ((a >> 6) & 63) | 128),
            (t[i++] = (a & 63) | 128));
      }
  else for (s = 0; s < r.length; s++) t[s] = r[s] | 0;
  return t;
}
vt.toArray = hA;
function lA(r) {
  for (var e = "", t = 0; t < r.length; t++) e += _1(r[t].toString(16));
  return e;
}
vt.toHex = lA;
function b1(r) {
  var e =
    (r >>> 24) |
    ((r >>> 8) & 65280) |
    ((r << 8) & 16711680) |
    ((r & 255) << 24);
  return e >>> 0;
}
vt.htonl = b1;
function fA(r, e) {
  for (var t = "", i = 0; i < r.length; i++) {
    var s = r[i];
    e === "little" && (s = b1(s)), (t += E1(s.toString(16)));
  }
  return t;
}
vt.toHex32 = fA;
function _1(r) {
  return r.length === 1 ? "0" + r : r;
}
vt.zero2 = _1;
function E1(r) {
  return r.length === 7
    ? "0" + r
    : r.length === 6
    ? "00" + r
    : r.length === 5
    ? "000" + r
    : r.length === 4
    ? "0000" + r
    : r.length === 3
    ? "00000" + r
    : r.length === 2
    ? "000000" + r
    : r.length === 1
    ? "0000000" + r
    : r;
}
vt.zero8 = E1;
function dA(r, e, t, i) {
  var s = t - e;
  aA(s % 4 === 0);
  for (var a = new Array(s / 4), u = 0, h = e; u < a.length; u++, h += 4) {
    var p;
    i === "big"
      ? (p = (r[h] << 24) | (r[h + 1] << 16) | (r[h + 2] << 8) | r[h + 3])
      : (p = (r[h + 3] << 24) | (r[h + 2] << 16) | (r[h + 1] << 8) | r[h]),
      (a[u] = p >>> 0);
  }
  return a;
}
vt.join32 = dA;
function pA(r, e) {
  for (
    var t = new Array(r.length * 4), i = 0, s = 0;
    i < r.length;
    i++, s += 4
  ) {
    var a = r[i];
    e === "big"
      ? ((t[s] = a >>> 24),
        (t[s + 1] = (a >>> 16) & 255),
        (t[s + 2] = (a >>> 8) & 255),
        (t[s + 3] = a & 255))
      : ((t[s + 3] = a >>> 24),
        (t[s + 2] = (a >>> 16) & 255),
        (t[s + 1] = (a >>> 8) & 255),
        (t[s] = a & 255));
  }
  return t;
}
vt.split32 = pA;
function gA(r, e) {
  return (r >>> e) | (r << (32 - e));
}
vt.rotr32 = gA;
function mA(r, e) {
  return (r << e) | (r >>> (32 - e));
}
vt.rotl32 = mA;
function vA(r, e) {
  return (r + e) >>> 0;
}
vt.sum32 = vA;
function yA(r, e, t) {
  return (r + e + t) >>> 0;
}
vt.sum32_3 = yA;
function wA(r, e, t, i) {
  return (r + e + t + i) >>> 0;
}
vt.sum32_4 = wA;
function bA(r, e, t, i, s) {
  return (r + e + t + i + s) >>> 0;
}
vt.sum32_5 = bA;
function _A(r, e, t, i) {
  var s = r[e],
    a = r[e + 1],
    u = (i + a) >>> 0,
    h = (u < i ? 1 : 0) + t + s;
  (r[e] = h >>> 0), (r[e + 1] = u);
}
vt.sum64 = _A;
function EA(r, e, t, i) {
  var s = (e + i) >>> 0,
    a = (s < e ? 1 : 0) + r + t;
  return a >>> 0;
}
vt.sum64_hi = EA;
function AA(r, e, t, i) {
  var s = e + i;
  return s >>> 0;
}
vt.sum64_lo = AA;
function SA(r, e, t, i, s, a, u, h) {
  var p = 0,
    d = e;
  (d = (d + i) >>> 0),
    (p += d < e ? 1 : 0),
    (d = (d + a) >>> 0),
    (p += d < a ? 1 : 0),
    (d = (d + h) >>> 0),
    (p += d < h ? 1 : 0);
  var b = r + t + s + u + p;
  return b >>> 0;
}
vt.sum64_4_hi = SA;
function IA(r, e, t, i, s, a, u, h) {
  var p = e + i + a + h;
  return p >>> 0;
}
vt.sum64_4_lo = IA;
function DA(r, e, t, i, s, a, u, h, p, d) {
  var b = 0,
    E = e;
  (E = (E + i) >>> 0),
    (b += E < e ? 1 : 0),
    (E = (E + a) >>> 0),
    (b += E < a ? 1 : 0),
    (E = (E + h) >>> 0),
    (b += E < h ? 1 : 0),
    (E = (E + d) >>> 0),
    (b += E < d ? 1 : 0);
  var D = r + t + s + u + p + b;
  return D >>> 0;
}
vt.sum64_5_hi = DA;
function xA(r, e, t, i, s, a, u, h, p, d) {
  var b = e + i + a + h + d;
  return b >>> 0;
}
vt.sum64_5_lo = xA;
function PA(r, e, t) {
  var i = (e << (32 - t)) | (r >>> t);
  return i >>> 0;
}
vt.rotr64_hi = PA;
function MA(r, e, t) {
  var i = (r << (32 - t)) | (e >>> t);
  return i >>> 0;
}
vt.rotr64_lo = MA;
function CA(r, e, t) {
  return r >>> t;
}
vt.shr64_hi = CA;
function OA(r, e, t) {
  var i = (r << (32 - t)) | (e >>> t);
  return i >>> 0;
}
vt.shr64_lo = OA;
var go = {},
  rp = vt,
  NA = da;
function Sc() {
  (this.pending = null),
    (this.pendingTotal = 0),
    (this.blockSize = this.constructor.blockSize),
    (this.outSize = this.constructor.outSize),
    (this.hmacStrength = this.constructor.hmacStrength),
    (this.padLength = this.constructor.padLength / 8),
    (this.endian = "big"),
    (this._delta8 = this.blockSize / 8),
    (this._delta32 = this.blockSize / 32);
}
(go.BlockHash = Sc),
  (Sc.prototype.update = function (r, e) {
    if (
      ((r = rp.toArray(r, e)),
      this.pending
        ? (this.pending = this.pending.concat(r))
        : (this.pending = r),
      (this.pendingTotal += r.length),
      this.pending.length >= this._delta8)
    ) {
      r = this.pending;
      var t = r.length % this._delta8;
      (this.pending = r.slice(r.length - t, r.length)),
        this.pending.length === 0 && (this.pending = null),
        (r = rp.join32(r, 0, r.length - t, this.endian));
      for (var i = 0; i < r.length; i += this._delta32)
        this._update(r, i, i + this._delta32);
    }
    return this;
  }),
  (Sc.prototype.digest = function (r) {
    return this.update(this._pad()), NA(this.pending === null), this._digest(r);
  }),
  (Sc.prototype._pad = function () {
    var r = this.pendingTotal,
      e = this._delta8,
      t = e - ((r + this.padLength) % e),
      i = new Array(t + this.padLength);
    i[0] = 128;
    for (var s = 1; s < t; s++) i[s] = 0;
    if (((r <<= 3), this.endian === "big")) {
      for (var a = 8; a < this.padLength; a++) i[s++] = 0;
      (i[s++] = 0),
        (i[s++] = 0),
        (i[s++] = 0),
        (i[s++] = 0),
        (i[s++] = (r >>> 24) & 255),
        (i[s++] = (r >>> 16) & 255),
        (i[s++] = (r >>> 8) & 255),
        (i[s++] = r & 255);
    } else
      for (
        i[s++] = r & 255,
          i[s++] = (r >>> 8) & 255,
          i[s++] = (r >>> 16) & 255,
          i[s++] = (r >>> 24) & 255,
          i[s++] = 0,
          i[s++] = 0,
          i[s++] = 0,
          i[s++] = 0,
          a = 8;
        a < this.padLength;
        a++
      )
        i[s++] = 0;
    return i;
  });
var Xs = {},
  hn = {},
  RA = vt,
  sn = RA.rotr32;
function TA(r, e, t, i) {
  if (r === 0) return A1(e, t, i);
  if (r === 1 || r === 3) return I1(e, t, i);
  if (r === 2) return S1(e, t, i);
}
hn.ft_1 = TA;
function A1(r, e, t) {
  return (r & e) ^ (~r & t);
}
hn.ch32 = A1;
function S1(r, e, t) {
  return (r & e) ^ (r & t) ^ (e & t);
}
hn.maj32 = S1;
function I1(r, e, t) {
  return r ^ e ^ t;
}
hn.p32 = I1;
function UA(r) {
  return sn(r, 2) ^ sn(r, 13) ^ sn(r, 22);
}
hn.s0_256 = UA;
function BA(r) {
  return sn(r, 6) ^ sn(r, 11) ^ sn(r, 25);
}
hn.s1_256 = BA;
function LA(r) {
  return sn(r, 7) ^ sn(r, 18) ^ (r >>> 3);
}
hn.g0_256 = LA;
function qA(r) {
  return sn(r, 17) ^ sn(r, 19) ^ (r >>> 10);
}
hn.g1_256 = qA;
var ao = vt,
  jA = go,
  $A = hn,
  $h = ao.rotl32,
  Fo = ao.sum32,
  FA = ao.sum32_5,
  zA = $A.ft_1,
  D1 = jA.BlockHash,
  kA = [1518500249, 1859775393, 2400959708, 3395469782];
function tn() {
  if (!(this instanceof tn)) return new tn();
  D1.call(this),
    (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
    (this.W = new Array(80));
}
ao.inherits(tn, D1);
var HA = tn;
(tn.blockSize = 512),
  (tn.outSize = 160),
  (tn.hmacStrength = 80),
  (tn.padLength = 64),
  (tn.prototype._update = function (r, e) {
    for (var t = this.W, i = 0; i < 16; i++) t[i] = r[e + i];
    for (; i < t.length; i++)
      t[i] = $h(t[i - 3] ^ t[i - 8] ^ t[i - 14] ^ t[i - 16], 1);
    var s = this.h[0],
      a = this.h[1],
      u = this.h[2],
      h = this.h[3],
      p = this.h[4];
    for (i = 0; i < t.length; i++) {
      var d = ~~(i / 20),
        b = FA($h(s, 5), zA(d, a, u, h), p, t[i], kA[d]);
      (p = h), (h = u), (u = $h(a, 30)), (a = s), (s = b);
    }
    (this.h[0] = Fo(this.h[0], s)),
      (this.h[1] = Fo(this.h[1], a)),
      (this.h[2] = Fo(this.h[2], u)),
      (this.h[3] = Fo(this.h[3], h)),
      (this.h[4] = Fo(this.h[4], p));
  }),
  (tn.prototype._digest = function (r) {
    return r === "hex" ? ao.toHex32(this.h, "big") : ao.split32(this.h, "big");
  });
var co = vt,
  KA = go,
  mo = hn,
  VA = da,
  Ci = co.sum32,
  GA = co.sum32_4,
  WA = co.sum32_5,
  YA = mo.ch32,
  QA = mo.maj32,
  JA = mo.s0_256,
  XA = mo.s1_256,
  ZA = mo.g0_256,
  e8 = mo.g1_256,
  x1 = KA.BlockHash,
  t8 = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ];
function rn() {
  if (!(this instanceof rn)) return new rn();
  x1.call(this),
    (this.h = [
      1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
      528734635, 1541459225,
    ]),
    (this.k = t8),
    (this.W = new Array(64));
}
co.inherits(rn, x1);
var P1 = rn;
(rn.blockSize = 512),
  (rn.outSize = 256),
  (rn.hmacStrength = 192),
  (rn.padLength = 64),
  (rn.prototype._update = function (r, e) {
    for (var t = this.W, i = 0; i < 16; i++) t[i] = r[e + i];
    for (; i < t.length; i++)
      t[i] = GA(e8(t[i - 2]), t[i - 7], ZA(t[i - 15]), t[i - 16]);
    var s = this.h[0],
      a = this.h[1],
      u = this.h[2],
      h = this.h[3],
      p = this.h[4],
      d = this.h[5],
      b = this.h[6],
      E = this.h[7];
    for (VA(this.k.length === t.length), i = 0; i < t.length; i++) {
      var D = WA(E, XA(p), YA(p, d, b), this.k[i], t[i]),
        S = Ci(JA(s), QA(s, a, u));
      (E = b),
        (b = d),
        (d = p),
        (p = Ci(h, D)),
        (h = u),
        (u = a),
        (a = s),
        (s = Ci(D, S));
    }
    (this.h[0] = Ci(this.h[0], s)),
      (this.h[1] = Ci(this.h[1], a)),
      (this.h[2] = Ci(this.h[2], u)),
      (this.h[3] = Ci(this.h[3], h)),
      (this.h[4] = Ci(this.h[4], p)),
      (this.h[5] = Ci(this.h[5], d)),
      (this.h[6] = Ci(this.h[6], b)),
      (this.h[7] = Ci(this.h[7], E));
  }),
  (rn.prototype._digest = function (r) {
    return r === "hex" ? co.toHex32(this.h, "big") : co.split32(this.h, "big");
  });
var El = vt,
  M1 = P1;
function Dn() {
  if (!(this instanceof Dn)) return new Dn();
  M1.call(this),
    (this.h = [
      3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
      1694076839, 3204075428,
    ]);
}
El.inherits(Dn, M1);
var r8 = Dn;
(Dn.blockSize = 512),
  (Dn.outSize = 224),
  (Dn.hmacStrength = 192),
  (Dn.padLength = 64),
  (Dn.prototype._digest = function (r) {
    return r === "hex"
      ? El.toHex32(this.h.slice(0, 7), "big")
      : El.split32(this.h.slice(0, 7), "big");
  });
var kr = vt,
  i8 = go,
  n8 = da,
  on = kr.rotr64_hi,
  an = kr.rotr64_lo,
  C1 = kr.shr64_hi,
  O1 = kr.shr64_lo,
  zn = kr.sum64,
  Fh = kr.sum64_hi,
  zh = kr.sum64_lo,
  s8 = kr.sum64_4_hi,
  o8 = kr.sum64_4_lo,
  a8 = kr.sum64_5_hi,
  c8 = kr.sum64_5_lo,
  N1 = i8.BlockHash,
  u8 = [
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ];
function Ti() {
  if (!(this instanceof Ti)) return new Ti();
  N1.call(this),
    (this.h = [
      1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723,
      2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199,
      528734635, 4215389547, 1541459225, 327033209,
    ]),
    (this.k = u8),
    (this.W = new Array(160));
}
kr.inherits(Ti, N1);
var R1 = Ti;
(Ti.blockSize = 1024),
  (Ti.outSize = 512),
  (Ti.hmacStrength = 192),
  (Ti.padLength = 128),
  (Ti.prototype._prepareBlock = function (r, e) {
    for (var t = this.W, i = 0; i < 32; i++) t[i] = r[e + i];
    for (; i < t.length; i += 2) {
      var s = b8(t[i - 4], t[i - 3]),
        a = _8(t[i - 4], t[i - 3]),
        u = t[i - 14],
        h = t[i - 13],
        p = y8(t[i - 30], t[i - 29]),
        d = w8(t[i - 30], t[i - 29]),
        b = t[i - 32],
        E = t[i - 31];
      (t[i] = s8(s, a, u, h, p, d, b, E)),
        (t[i + 1] = o8(s, a, u, h, p, d, b, E));
    }
  }),
  (Ti.prototype._update = function (r, e) {
    this._prepareBlock(r, e);
    var t = this.W,
      i = this.h[0],
      s = this.h[1],
      a = this.h[2],
      u = this.h[3],
      h = this.h[4],
      p = this.h[5],
      d = this.h[6],
      b = this.h[7],
      E = this.h[8],
      D = this.h[9],
      S = this.h[10],
      M = this.h[11],
      W = this.h[12],
      G = this.h[13],
      ee = this.h[14],
      K = this.h[15];
    n8(this.k.length === t.length);
    for (var V = 0; V < t.length; V += 2) {
      var q = ee,
        F = K,
        z = m8(E, D),
        y = v8(E, D),
        T = h8(E, D, S, M, W),
        ne = l8(E, D, S, M, W, G),
        fe = this.k[V],
        le = this.k[V + 1],
        me = t[V],
        f = t[V + 1],
        l = a8(q, F, z, y, T, ne, fe, le, me, f),
        w = c8(q, F, z, y, T, ne, fe, le, me, f);
      (q = p8(i, s)),
        (F = g8(i, s)),
        (z = f8(i, s, a, u, h)),
        (y = d8(i, s, a, u, h, p));
      var I = Fh(q, F, z, y),
        P = zh(q, F, z, y);
      (ee = W),
        (K = G),
        (W = S),
        (G = M),
        (S = E),
        (M = D),
        (E = Fh(d, b, l, w)),
        (D = zh(b, b, l, w)),
        (d = h),
        (b = p),
        (h = a),
        (p = u),
        (a = i),
        (u = s),
        (i = Fh(l, w, I, P)),
        (s = zh(l, w, I, P));
    }
    zn(this.h, 0, i, s),
      zn(this.h, 2, a, u),
      zn(this.h, 4, h, p),
      zn(this.h, 6, d, b),
      zn(this.h, 8, E, D),
      zn(this.h, 10, S, M),
      zn(this.h, 12, W, G),
      zn(this.h, 14, ee, K);
  }),
  (Ti.prototype._digest = function (r) {
    return r === "hex" ? kr.toHex32(this.h, "big") : kr.split32(this.h, "big");
  });
function h8(r, e, t, i, s) {
  var a = (r & t) ^ (~r & s);
  return a < 0 && (a += 4294967296), a;
}
function l8(r, e, t, i, s, a) {
  var u = (e & i) ^ (~e & a);
  return u < 0 && (u += 4294967296), u;
}
function f8(r, e, t, i, s) {
  var a = (r & t) ^ (r & s) ^ (t & s);
  return a < 0 && (a += 4294967296), a;
}
function d8(r, e, t, i, s, a) {
  var u = (e & i) ^ (e & a) ^ (i & a);
  return u < 0 && (u += 4294967296), u;
}
function p8(r, e) {
  var t = on(r, e, 28),
    i = on(e, r, 2),
    s = on(e, r, 7),
    a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function g8(r, e) {
  var t = an(r, e, 28),
    i = an(e, r, 2),
    s = an(e, r, 7),
    a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function m8(r, e) {
  var t = on(r, e, 14),
    i = on(r, e, 18),
    s = on(e, r, 9),
    a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function v8(r, e) {
  var t = an(r, e, 14),
    i = an(r, e, 18),
    s = an(e, r, 9),
    a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function y8(r, e) {
  var t = on(r, e, 1),
    i = on(r, e, 8),
    s = C1(r, e, 7),
    a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function w8(r, e) {
  var t = an(r, e, 1),
    i = an(r, e, 8),
    s = O1(r, e, 7),
    a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function b8(r, e) {
  var t = on(r, e, 19),
    i = on(e, r, 29),
    s = C1(r, e, 6),
    a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
function _8(r, e) {
  var t = an(r, e, 19),
    i = an(e, r, 29),
    s = O1(r, e, 6),
    a = t ^ i ^ s;
  return a < 0 && (a += 4294967296), a;
}
var Al = vt,
  T1 = R1;
function xn() {
  if (!(this instanceof xn)) return new xn();
  T1.call(this),
    (this.h = [
      3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
      355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
      3675008525, 1694076839, 1203062813, 3204075428,
    ]);
}
Al.inherits(xn, T1);
var E8 = xn;
(xn.blockSize = 1024),
  (xn.outSize = 384),
  (xn.hmacStrength = 192),
  (xn.padLength = 128),
  (xn.prototype._digest = function (r) {
    return r === "hex"
      ? Al.toHex32(this.h.slice(0, 12), "big")
      : Al.split32(this.h.slice(0, 12), "big");
  }),
  (Xs.sha1 = HA),
  (Xs.sha224 = r8),
  (Xs.sha256 = P1),
  (Xs.sha384 = E8),
  (Xs.sha512 = R1);
var U1 = {},
  As = vt,
  A8 = go,
  Ic = As.rotl32,
  ip = As.sum32,
  zo = As.sum32_3,
  np = As.sum32_4,
  B1 = A8.BlockHash;
function Xi() {
  if (!(this instanceof Xi)) return new Xi();
  B1.call(this),
    (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
    (this.endian = "little");
}
As.inherits(Xi, B1),
  (U1.ripemd160 = Xi),
  (Xi.blockSize = 512),
  (Xi.outSize = 160),
  (Xi.hmacStrength = 192),
  (Xi.padLength = 64),
  (Xi.prototype._update = function (r, e) {
    for (
      var t = this.h[0],
        i = this.h[1],
        s = this.h[2],
        a = this.h[3],
        u = this.h[4],
        h = t,
        p = i,
        d = s,
        b = a,
        E = u,
        D = 0;
      D < 80;
      D++
    ) {
      var S = ip(Ic(np(t, sp(D, i, s, a), r[D8[D] + e], S8(D)), P8[D]), u);
      (t = u),
        (u = a),
        (a = Ic(s, 10)),
        (s = i),
        (i = S),
        (S = ip(Ic(np(h, sp(79 - D, p, d, b), r[x8[D] + e], I8(D)), M8[D]), E)),
        (h = E),
        (E = b),
        (b = Ic(d, 10)),
        (d = p),
        (p = S);
    }
    (S = zo(this.h[1], s, b)),
      (this.h[1] = zo(this.h[2], a, E)),
      (this.h[2] = zo(this.h[3], u, h)),
      (this.h[3] = zo(this.h[4], t, p)),
      (this.h[4] = zo(this.h[0], i, d)),
      (this.h[0] = S);
  }),
  (Xi.prototype._digest = function (r) {
    return r === "hex"
      ? As.toHex32(this.h, "little")
      : As.split32(this.h, "little");
  });
function sp(r, e, t, i) {
  return r <= 15
    ? e ^ t ^ i
    : r <= 31
    ? (e & t) | (~e & i)
    : r <= 47
    ? (e | ~t) ^ i
    : r <= 63
    ? (e & i) | (t & ~i)
    : e ^ (t | ~i);
}
function S8(r) {
  return r <= 15
    ? 0
    : r <= 31
    ? 1518500249
    : r <= 47
    ? 1859775393
    : r <= 63
    ? 2400959708
    : 2840853838;
}
function I8(r) {
  return r <= 15
    ? 1352829926
    : r <= 31
    ? 1548603684
    : r <= 47
    ? 1836072691
    : r <= 63
    ? 2053994217
    : 0;
}
var D8 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6,
    15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13,
    11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9,
    7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
  ],
  x8 = [
    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5,
    10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10,
    0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10,
    4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
  ],
  P8 = [
    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9,
    7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13,
    6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9,
    15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
  ],
  M8 = [
    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8,
    9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14,
    13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
    12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
  ],
  C8 = vt,
  O8 = da;
function so(r, e, t) {
  if (!(this instanceof so)) return new so(r, e, t);
  (this.Hash = r),
    (this.blockSize = r.blockSize / 8),
    (this.outSize = r.outSize / 8),
    (this.inner = null),
    (this.outer = null),
    this._init(C8.toArray(e, t));
}
var N8 = so;
(so.prototype._init = function (r) {
  r.length > this.blockSize && (r = new this.Hash().update(r).digest()),
    O8(r.length <= this.blockSize);
  for (var e = r.length; e < this.blockSize; e++) r.push(0);
  for (e = 0; e < r.length; e++) r[e] ^= 54;
  for (this.inner = new this.Hash().update(r), e = 0; e < r.length; e++)
    r[e] ^= 106;
  this.outer = new this.Hash().update(r);
}),
  (so.prototype.update = function (r, e) {
    return this.inner.update(r, e), this;
  }),
  (so.prototype.digest = function (r) {
    return this.outer.update(this.inner.digest()), this.outer.digest(r);
  }),
  (function (r) {
    var e = r;
    (e.utils = vt),
      (e.common = go),
      (e.sha = Xs),
      (e.ripemd = U1),
      (e.hmac = N8),
      (e.sha1 = e.sha.sha1),
      (e.sha256 = e.sha.sha256),
      (e.sha224 = e.sha.sha224),
      (e.sha384 = e.sha.sha384),
      (e.sha512 = e.sha.sha512),
      (e.ripemd160 = e.ripemd.ripemd160);
  })(Ji);
function vo(r, e, t) {
  return (
    (t = {
      path: e,
      exports: {},
      require: function (i, s) {
        return R8(i, s ?? t.path);
      },
    }),
    r(t, t.exports),
    t.exports
  );
}
function R8() {
  throw new Error(
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
  );
}
var Jl = L1;
function L1(r, e) {
  if (!r) throw new Error(e || "Assertion failed");
}
L1.equal = function (r, e, t) {
  if (r != e) throw new Error(t || "Assertion failed: " + r + " != " + e);
};
var Li = vo(function (r, e) {
    var t = e;
    function i(u, h) {
      if (Array.isArray(u)) return u.slice();
      if (!u) return [];
      var p = [];
      if (typeof u != "string") {
        for (var d = 0; d < u.length; d++) p[d] = u[d] | 0;
        return p;
      }
      if (h === "hex") {
        (u = u.replace(/[^a-z0-9]+/gi, "")),
          u.length % 2 !== 0 && (u = "0" + u);
        for (var d = 0; d < u.length; d += 2)
          p.push(parseInt(u[d] + u[d + 1], 16));
      } else
        for (var d = 0; d < u.length; d++) {
          var b = u.charCodeAt(d),
            E = b >> 8,
            D = b & 255;
          E ? p.push(E, D) : p.push(D);
        }
      return p;
    }
    t.toArray = i;
    function s(u) {
      return u.length === 1 ? "0" + u : u;
    }
    t.zero2 = s;
    function a(u) {
      for (var h = "", p = 0; p < u.length; p++) h += s(u[p].toString(16));
      return h;
    }
    (t.toHex = a),
      (t.encode = function (u, h) {
        return h === "hex" ? a(u) : u;
      });
  }),
  ei = vo(function (r, e) {
    var t = e;
    (t.assert = Jl),
      (t.toArray = Li.toArray),
      (t.zero2 = Li.zero2),
      (t.toHex = Li.toHex),
      (t.encode = Li.encode);
    function i(p, d, b) {
      var E = new Array(Math.max(p.bitLength(), b) + 1);
      E.fill(0);
      for (var D = 1 << (d + 1), S = p.clone(), M = 0; M < E.length; M++) {
        var W,
          G = S.andln(D - 1);
        S.isOdd()
          ? (G > (D >> 1) - 1 ? (W = (D >> 1) - G) : (W = G), S.isubn(W))
          : (W = 0),
          (E[M] = W),
          S.iushrn(1);
      }
      return E;
    }
    t.getNAF = i;
    function s(p, d) {
      var b = [[], []];
      (p = p.clone()), (d = d.clone());
      for (var E = 0, D = 0, S; p.cmpn(-E) > 0 || d.cmpn(-D) > 0; ) {
        var M = (p.andln(3) + E) & 3,
          W = (d.andln(3) + D) & 3;
        M === 3 && (M = -1), W === 3 && (W = -1);
        var G;
        M & 1
          ? ((S = (p.andln(7) + E) & 7),
            (S === 3 || S === 5) && W === 2 ? (G = -M) : (G = M))
          : (G = 0),
          b[0].push(G);
        var ee;
        W & 1
          ? ((S = (d.andln(7) + D) & 7),
            (S === 3 || S === 5) && M === 2 ? (ee = -W) : (ee = W))
          : (ee = 0),
          b[1].push(ee),
          2 * E === G + 1 && (E = 1 - E),
          2 * D === ee + 1 && (D = 1 - D),
          p.iushrn(1),
          d.iushrn(1);
      }
      return b;
    }
    t.getJSF = s;
    function a(p, d, b) {
      var E = "_" + d;
      p.prototype[d] = function () {
        return this[E] !== void 0 ? this[E] : (this[E] = b.call(this));
      };
    }
    t.cachedProperty = a;
    function u(p) {
      return typeof p == "string" ? t.toArray(p, "hex") : p;
    }
    t.parseBytes = u;
    function h(p) {
      return new nt(p, "hex", "le");
    }
    t.intFromLE = h;
  }),
  Dc = ei.getNAF,
  T8 = ei.getJSF,
  Yc = ei.assert;
function Vn(r, e) {
  (this.type = r),
    (this.p = new nt(e.p, 16)),
    (this.red = e.prime ? nt.red(e.prime) : nt.mont(this.p)),
    (this.zero = new nt(0).toRed(this.red)),
    (this.one = new nt(1).toRed(this.red)),
    (this.two = new nt(2).toRed(this.red)),
    (this.n = e.n && new nt(e.n, 16)),
    (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
    (this._wnafT1 = new Array(4)),
    (this._wnafT2 = new Array(4)),
    (this._wnafT3 = new Array(4)),
    (this._wnafT4 = new Array(4)),
    (this._bitLength = this.n ? this.n.bitLength() : 0);
  var t = this.n && this.p.div(this.n);
  !t || t.cmpn(100) > 0
    ? (this.redN = null)
    : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
}
var Ds = Vn;
(Vn.prototype.point = function () {
  throw new Error("Not implemented");
}),
  (Vn.prototype.validate = function () {
    throw new Error("Not implemented");
  }),
  (Vn.prototype._fixedNafMul = function (r, e) {
    Yc(r.precomputed);
    var t = r._getDoubles(),
      i = Dc(e, 1, this._bitLength),
      s = (1 << (t.step + 1)) - (t.step % 2 === 0 ? 2 : 1);
    s /= 3;
    var a = [],
      u,
      h;
    for (u = 0; u < i.length; u += t.step) {
      h = 0;
      for (var p = u + t.step - 1; p >= u; p--) h = (h << 1) + i[p];
      a.push(h);
    }
    for (
      var d = this.jpoint(null, null, null),
        b = this.jpoint(null, null, null),
        E = s;
      E > 0;
      E--
    ) {
      for (u = 0; u < a.length; u++)
        (h = a[u]),
          h === E
            ? (b = b.mixedAdd(t.points[u]))
            : h === -E && (b = b.mixedAdd(t.points[u].neg()));
      d = d.add(b);
    }
    return d.toP();
  }),
  (Vn.prototype._wnafMul = function (r, e) {
    var t = 4,
      i = r._getNAFPoints(t);
    t = i.wnd;
    for (
      var s = i.points,
        a = Dc(e, t, this._bitLength),
        u = this.jpoint(null, null, null),
        h = a.length - 1;
      h >= 0;
      h--
    ) {
      for (var p = 0; h >= 0 && a[h] === 0; h--) p++;
      if ((h >= 0 && p++, (u = u.dblp(p)), h < 0)) break;
      var d = a[h];
      Yc(d !== 0),
        r.type === "affine"
          ? d > 0
            ? (u = u.mixedAdd(s[(d - 1) >> 1]))
            : (u = u.mixedAdd(s[(-d - 1) >> 1].neg()))
          : d > 0
          ? (u = u.add(s[(d - 1) >> 1]))
          : (u = u.add(s[(-d - 1) >> 1].neg()));
    }
    return r.type === "affine" ? u.toP() : u;
  }),
  (Vn.prototype._wnafMulAdd = function (r, e, t, i, s) {
    var a = this._wnafT1,
      u = this._wnafT2,
      h = this._wnafT3,
      p = 0,
      d,
      b,
      E;
    for (d = 0; d < i; d++) {
      E = e[d];
      var D = E._getNAFPoints(r);
      (a[d] = D.wnd), (u[d] = D.points);
    }
    for (d = i - 1; d >= 1; d -= 2) {
      var S = d - 1,
        M = d;
      if (a[S] !== 1 || a[M] !== 1) {
        (h[S] = Dc(t[S], a[S], this._bitLength)),
          (h[M] = Dc(t[M], a[M], this._bitLength)),
          (p = Math.max(h[S].length, p)),
          (p = Math.max(h[M].length, p));
        continue;
      }
      var W = [e[S], null, null, e[M]];
      e[S].y.cmp(e[M].y) === 0
        ? ((W[1] = e[S].add(e[M])), (W[2] = e[S].toJ().mixedAdd(e[M].neg())))
        : e[S].y.cmp(e[M].y.redNeg()) === 0
        ? ((W[1] = e[S].toJ().mixedAdd(e[M])), (W[2] = e[S].add(e[M].neg())))
        : ((W[1] = e[S].toJ().mixedAdd(e[M])),
          (W[2] = e[S].toJ().mixedAdd(e[M].neg())));
      var G = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
        ee = T8(t[S], t[M]);
      for (
        p = Math.max(ee[0].length, p),
          h[S] = new Array(p),
          h[M] = new Array(p),
          b = 0;
        b < p;
        b++
      ) {
        var K = ee[0][b] | 0,
          V = ee[1][b] | 0;
        (h[S][b] = G[(K + 1) * 3 + (V + 1)]), (h[M][b] = 0), (u[S] = W);
      }
    }
    var q = this.jpoint(null, null, null),
      F = this._wnafT4;
    for (d = p; d >= 0; d--) {
      for (var z = 0; d >= 0; ) {
        var y = !0;
        for (b = 0; b < i; b++) (F[b] = h[b][d] | 0), F[b] !== 0 && (y = !1);
        if (!y) break;
        z++, d--;
      }
      if ((d >= 0 && z++, (q = q.dblp(z)), d < 0)) break;
      for (b = 0; b < i; b++) {
        var T = F[b];
        T !== 0 &&
          (T > 0
            ? (E = u[b][(T - 1) >> 1])
            : T < 0 && (E = u[b][(-T - 1) >> 1].neg()),
          E.type === "affine" ? (q = q.mixedAdd(E)) : (q = q.add(E)));
      }
    }
    for (d = 0; d < i; d++) u[d] = null;
    return s ? q : q.toP();
  });
function mi(r, e) {
  (this.curve = r), (this.type = e), (this.precomputed = null);
}
(Vn.BasePoint = mi),
  (mi.prototype.eq = function () {
    throw new Error("Not implemented");
  }),
  (mi.prototype.validate = function () {
    return this.curve.validate(this);
  }),
  (Vn.prototype.decodePoint = function (r, e) {
    r = ei.toArray(r, e);
    var t = this.p.byteLength();
    if ((r[0] === 4 || r[0] === 6 || r[0] === 7) && r.length - 1 === 2 * t) {
      r[0] === 6
        ? Yc(r[r.length - 1] % 2 === 0)
        : r[0] === 7 && Yc(r[r.length - 1] % 2 === 1);
      var i = this.point(r.slice(1, 1 + t), r.slice(1 + t, 1 + 2 * t));
      return i;
    } else if ((r[0] === 2 || r[0] === 3) && r.length - 1 === t)
      return this.pointFromX(r.slice(1, 1 + t), r[0] === 3);
    throw new Error("Unknown point format");
  }),
  (mi.prototype.encodeCompressed = function (r) {
    return this.encode(r, !0);
  }),
  (mi.prototype._encode = function (r) {
    var e = this.curve.p.byteLength(),
      t = this.getX().toArray("be", e);
    return r
      ? [this.getY().isEven() ? 2 : 3].concat(t)
      : [4].concat(t, this.getY().toArray("be", e));
  }),
  (mi.prototype.encode = function (r, e) {
    return ei.encode(this._encode(e), r);
  }),
  (mi.prototype.precompute = function (r) {
    if (this.precomputed) return this;
    var e = { doubles: null, naf: null, beta: null };
    return (
      (e.naf = this._getNAFPoints(8)),
      (e.doubles = this._getDoubles(4, r)),
      (e.beta = this._getBeta()),
      (this.precomputed = e),
      this
    );
  }),
  (mi.prototype._hasDoubles = function (r) {
    if (!this.precomputed) return !1;
    var e = this.precomputed.doubles;
    return e ? e.points.length >= Math.ceil((r.bitLength() + 1) / e.step) : !1;
  }),
  (mi.prototype._getDoubles = function (r, e) {
    if (this.precomputed && this.precomputed.doubles)
      return this.precomputed.doubles;
    for (var t = [this], i = this, s = 0; s < e; s += r) {
      for (var a = 0; a < r; a++) i = i.dbl();
      t.push(i);
    }
    return { step: r, points: t };
  }),
  (mi.prototype._getNAFPoints = function (r) {
    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
    for (
      var e = [this], t = (1 << r) - 1, i = t === 1 ? null : this.dbl(), s = 1;
      s < t;
      s++
    )
      e[s] = e[s - 1].add(i);
    return { wnd: r, points: e };
  }),
  (mi.prototype._getBeta = function () {
    return null;
  }),
  (mi.prototype.dblp = function (r) {
    for (var e = this, t = 0; t < r; t++) e = e.dbl();
    return e;
  });
var Xl = vo(function (r) {
    typeof Object.create == "function"
      ? (r.exports = function (e, t) {
          t &&
            ((e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (r.exports = function (e, t) {
          if (t) {
            e.super_ = t;
            var i = function () {};
            (i.prototype = t.prototype),
              (e.prototype = new i()),
              (e.prototype.constructor = e);
          }
        });
  }),
  U8 = ei.assert;
function _i(r) {
  Ds.call(this, "short", r),
    (this.a = new nt(r.a, 16).toRed(this.red)),
    (this.b = new nt(r.b, 16).toRed(this.red)),
    (this.tinv = this.two.redInvm()),
    (this.zeroA = this.a.fromRed().cmpn(0) === 0),
    (this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0),
    (this.endo = this._getEndomorphism(r)),
    (this._endoWnafT1 = new Array(4)),
    (this._endoWnafT2 = new Array(4));
}
Xl(_i, Ds);
var B8 = _i;
(_i.prototype._getEndomorphism = function (r) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var e, t;
    if (r.beta) e = new nt(r.beta, 16).toRed(this.red);
    else {
      var i = this._getEndoRoots(this.p);
      (e = i[0].cmp(i[1]) < 0 ? i[0] : i[1]), (e = e.toRed(this.red));
    }
    if (r.lambda) t = new nt(r.lambda, 16);
    else {
      var s = this._getEndoRoots(this.n);
      this.g.mul(s[0]).x.cmp(this.g.x.redMul(e)) === 0
        ? (t = s[0])
        : ((t = s[1]), U8(this.g.mul(t).x.cmp(this.g.x.redMul(e)) === 0));
    }
    var a;
    return (
      r.basis
        ? (a = r.basis.map(function (u) {
            return { a: new nt(u.a, 16), b: new nt(u.b, 16) };
          }))
        : (a = this._getEndoBasis(t)),
      { beta: e, lambda: t, basis: a }
    );
  }
}),
  (_i.prototype._getEndoRoots = function (r) {
    var e = r === this.p ? this.red : nt.mont(r),
      t = new nt(2).toRed(e).redInvm(),
      i = t.redNeg(),
      s = new nt(3).toRed(e).redNeg().redSqrt().redMul(t),
      a = i.redAdd(s).fromRed(),
      u = i.redSub(s).fromRed();
    return [a, u];
  }),
  (_i.prototype._getEndoBasis = function (r) {
    for (
      var e = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
        t = r,
        i = this.n.clone(),
        s = new nt(1),
        a = new nt(0),
        u = new nt(0),
        h = new nt(1),
        p,
        d,
        b,
        E,
        D,
        S,
        M,
        W = 0,
        G,
        ee;
      t.cmpn(0) !== 0;

    ) {
      var K = i.div(t);
      (G = i.sub(K.mul(t))), (ee = u.sub(K.mul(s)));
      var V = h.sub(K.mul(a));
      if (!b && G.cmp(e) < 0) (p = M.neg()), (d = s), (b = G.neg()), (E = ee);
      else if (b && ++W === 2) break;
      (M = G), (i = t), (t = G), (u = s), (s = ee), (h = a), (a = V);
    }
    (D = G.neg()), (S = ee);
    var q = b.sqr().add(E.sqr()),
      F = D.sqr().add(S.sqr());
    return (
      F.cmp(q) >= 0 && ((D = p), (S = d)),
      b.negative && ((b = b.neg()), (E = E.neg())),
      D.negative && ((D = D.neg()), (S = S.neg())),
      [
        { a: b, b: E },
        { a: D, b: S },
      ]
    );
  }),
  (_i.prototype._endoSplit = function (r) {
    var e = this.endo.basis,
      t = e[0],
      i = e[1],
      s = i.b.mul(r).divRound(this.n),
      a = t.b.neg().mul(r).divRound(this.n),
      u = s.mul(t.a),
      h = a.mul(i.a),
      p = s.mul(t.b),
      d = a.mul(i.b),
      b = r.sub(u).sub(h),
      E = p.add(d).neg();
    return { k1: b, k2: E };
  }),
  (_i.prototype.pointFromX = function (r, e) {
    (r = new nt(r, 16)), r.red || (r = r.toRed(this.red));
    var t = r.redSqr().redMul(r).redIAdd(r.redMul(this.a)).redIAdd(this.b),
      i = t.redSqrt();
    if (i.redSqr().redSub(t).cmp(this.zero) !== 0)
      throw new Error("invalid point");
    var s = i.fromRed().isOdd();
    return ((e && !s) || (!e && s)) && (i = i.redNeg()), this.point(r, i);
  }),
  (_i.prototype.validate = function (r) {
    if (r.inf) return !0;
    var e = r.x,
      t = r.y,
      i = this.a.redMul(e),
      s = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
    return t.redSqr().redISub(s).cmpn(0) === 0;
  }),
  (_i.prototype._endoWnafMulAdd = function (r, e, t) {
    for (
      var i = this._endoWnafT1, s = this._endoWnafT2, a = 0;
      a < r.length;
      a++
    ) {
      var u = this._endoSplit(e[a]),
        h = r[a],
        p = h._getBeta();
      u.k1.negative && (u.k1.ineg(), (h = h.neg(!0))),
        u.k2.negative && (u.k2.ineg(), (p = p.neg(!0))),
        (i[a * 2] = h),
        (i[a * 2 + 1] = p),
        (s[a * 2] = u.k1),
        (s[a * 2 + 1] = u.k2);
    }
    for (var d = this._wnafMulAdd(1, i, s, a * 2, t), b = 0; b < a * 2; b++)
      (i[b] = null), (s[b] = null);
    return d;
  });
function ur(r, e, t, i) {
  Ds.BasePoint.call(this, r, "affine"),
    e === null && t === null
      ? ((this.x = null), (this.y = null), (this.inf = !0))
      : ((this.x = new nt(e, 16)),
        (this.y = new nt(t, 16)),
        i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        (this.inf = !1));
}
Xl(ur, Ds.BasePoint),
  (_i.prototype.point = function (r, e, t) {
    return new ur(this, r, e, t);
  }),
  (_i.prototype.pointFromJSON = function (r, e) {
    return ur.fromJSON(this, r, e);
  }),
  (ur.prototype._getBeta = function () {
    if (this.curve.endo) {
      var r = this.precomputed;
      if (r && r.beta) return r.beta;
      var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
      if (r) {
        var t = this.curve,
          i = function (s) {
            return t.point(s.x.redMul(t.endo.beta), s.y);
          };
        (r.beta = e),
          (e.precomputed = {
            beta: null,
            naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) },
            doubles: r.doubles && {
              step: r.doubles.step,
              points: r.doubles.points.map(i),
            },
          });
      }
      return e;
    }
  }),
  (ur.prototype.toJSON = function () {
    return this.precomputed
      ? [
          this.x,
          this.y,
          this.precomputed && {
            doubles: this.precomputed.doubles && {
              step: this.precomputed.doubles.step,
              points: this.precomputed.doubles.points.slice(1),
            },
            naf: this.precomputed.naf && {
              wnd: this.precomputed.naf.wnd,
              points: this.precomputed.naf.points.slice(1),
            },
          },
        ]
      : [this.x, this.y];
  }),
  (ur.fromJSON = function (r, e, t) {
    typeof e == "string" && (e = JSON.parse(e));
    var i = r.point(e[0], e[1], t);
    if (!e[2]) return i;
    function s(u) {
      return r.point(u[0], u[1], t);
    }
    var a = e[2];
    return (
      (i.precomputed = {
        beta: null,
        doubles: a.doubles && {
          step: a.doubles.step,
          points: [i].concat(a.doubles.points.map(s)),
        },
        naf: a.naf && {
          wnd: a.naf.wnd,
          points: [i].concat(a.naf.points.map(s)),
        },
      }),
      i
    );
  }),
  (ur.prototype.inspect = function () {
    return this.isInfinity()
      ? "<EC Point Infinity>"
      : "<EC Point x: " +
          this.x.fromRed().toString(16, 2) +
          " y: " +
          this.y.fromRed().toString(16, 2) +
          ">";
  }),
  (ur.prototype.isInfinity = function () {
    return this.inf;
  }),
  (ur.prototype.add = function (r) {
    if (this.inf) return r;
    if (r.inf) return this;
    if (this.eq(r)) return this.dbl();
    if (this.neg().eq(r)) return this.curve.point(null, null);
    if (this.x.cmp(r.x) === 0) return this.curve.point(null, null);
    var e = this.y.redSub(r.y);
    e.cmpn(0) !== 0 && (e = e.redMul(this.x.redSub(r.x).redInvm()));
    var t = e.redSqr().redISub(this.x).redISub(r.x),
      i = e.redMul(this.x.redSub(t)).redISub(this.y);
    return this.curve.point(t, i);
  }),
  (ur.prototype.dbl = function () {
    if (this.inf) return this;
    var r = this.y.redAdd(this.y);
    if (r.cmpn(0) === 0) return this.curve.point(null, null);
    var e = this.curve.a,
      t = this.x.redSqr(),
      i = r.redInvm(),
      s = t.redAdd(t).redIAdd(t).redIAdd(e).redMul(i),
      a = s.redSqr().redISub(this.x.redAdd(this.x)),
      u = s.redMul(this.x.redSub(a)).redISub(this.y);
    return this.curve.point(a, u);
  }),
  (ur.prototype.getX = function () {
    return this.x.fromRed();
  }),
  (ur.prototype.getY = function () {
    return this.y.fromRed();
  }),
  (ur.prototype.mul = function (r) {
    return (
      (r = new nt(r, 16)),
      this.isInfinity()
        ? this
        : this._hasDoubles(r)
        ? this.curve._fixedNafMul(this, r)
        : this.curve.endo
        ? this.curve._endoWnafMulAdd([this], [r])
        : this.curve._wnafMul(this, r)
    );
  }),
  (ur.prototype.mulAdd = function (r, e, t) {
    var i = [this, e],
      s = [r, t];
    return this.curve.endo
      ? this.curve._endoWnafMulAdd(i, s)
      : this.curve._wnafMulAdd(1, i, s, 2);
  }),
  (ur.prototype.jmulAdd = function (r, e, t) {
    var i = [this, e],
      s = [r, t];
    return this.curve.endo
      ? this.curve._endoWnafMulAdd(i, s, !0)
      : this.curve._wnafMulAdd(1, i, s, 2, !0);
  }),
  (ur.prototype.eq = function (r) {
    return (
      this === r ||
      (this.inf === r.inf &&
        (this.inf || (this.x.cmp(r.x) === 0 && this.y.cmp(r.y) === 0)))
    );
  }),
  (ur.prototype.neg = function (r) {
    if (this.inf) return this;
    var e = this.curve.point(this.x, this.y.redNeg());
    if (r && this.precomputed) {
      var t = this.precomputed,
        i = function (s) {
          return s.neg();
        };
      e.precomputed = {
        naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(i) },
        doubles: t.doubles && {
          step: t.doubles.step,
          points: t.doubles.points.map(i),
        },
      };
    }
    return e;
  }),
  (ur.prototype.toJ = function () {
    if (this.inf) return this.curve.jpoint(null, null, null);
    var r = this.curve.jpoint(this.x, this.y, this.curve.one);
    return r;
  });
function fr(r, e, t, i) {
  Ds.BasePoint.call(this, r, "jacobian"),
    e === null && t === null && i === null
      ? ((this.x = this.curve.one),
        (this.y = this.curve.one),
        (this.z = new nt(0)))
      : ((this.x = new nt(e, 16)),
        (this.y = new nt(t, 16)),
        (this.z = new nt(i, 16))),
    this.x.red || (this.x = this.x.toRed(this.curve.red)),
    this.y.red || (this.y = this.y.toRed(this.curve.red)),
    this.z.red || (this.z = this.z.toRed(this.curve.red)),
    (this.zOne = this.z === this.curve.one);
}
Xl(fr, Ds.BasePoint),
  (_i.prototype.jpoint = function (r, e, t) {
    return new fr(this, r, e, t);
  }),
  (fr.prototype.toP = function () {
    if (this.isInfinity()) return this.curve.point(null, null);
    var r = this.z.redInvm(),
      e = r.redSqr(),
      t = this.x.redMul(e),
      i = this.y.redMul(e).redMul(r);
    return this.curve.point(t, i);
  }),
  (fr.prototype.neg = function () {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
  }),
  (fr.prototype.add = function (r) {
    if (this.isInfinity()) return r;
    if (r.isInfinity()) return this;
    var e = r.z.redSqr(),
      t = this.z.redSqr(),
      i = this.x.redMul(e),
      s = r.x.redMul(t),
      a = this.y.redMul(e.redMul(r.z)),
      u = r.y.redMul(t.redMul(this.z)),
      h = i.redSub(s),
      p = a.redSub(u);
    if (h.cmpn(0) === 0)
      return p.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var d = h.redSqr(),
      b = d.redMul(h),
      E = i.redMul(d),
      D = p.redSqr().redIAdd(b).redISub(E).redISub(E),
      S = p.redMul(E.redISub(D)).redISub(a.redMul(b)),
      M = this.z.redMul(r.z).redMul(h);
    return this.curve.jpoint(D, S, M);
  }),
  (fr.prototype.mixedAdd = function (r) {
    if (this.isInfinity()) return r.toJ();
    if (r.isInfinity()) return this;
    var e = this.z.redSqr(),
      t = this.x,
      i = r.x.redMul(e),
      s = this.y,
      a = r.y.redMul(e).redMul(this.z),
      u = t.redSub(i),
      h = s.redSub(a);
    if (u.cmpn(0) === 0)
      return h.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var p = u.redSqr(),
      d = p.redMul(u),
      b = t.redMul(p),
      E = h.redSqr().redIAdd(d).redISub(b).redISub(b),
      D = h.redMul(b.redISub(E)).redISub(s.redMul(d)),
      S = this.z.redMul(u);
    return this.curve.jpoint(E, D, S);
  }),
  (fr.prototype.dblp = function (r) {
    if (r === 0) return this;
    if (this.isInfinity()) return this;
    if (!r) return this.dbl();
    var e;
    if (this.curve.zeroA || this.curve.threeA) {
      var t = this;
      for (e = 0; e < r; e++) t = t.dbl();
      return t;
    }
    var i = this.curve.a,
      s = this.curve.tinv,
      a = this.x,
      u = this.y,
      h = this.z,
      p = h.redSqr().redSqr(),
      d = u.redAdd(u);
    for (e = 0; e < r; e++) {
      var b = a.redSqr(),
        E = d.redSqr(),
        D = E.redSqr(),
        S = b.redAdd(b).redIAdd(b).redIAdd(i.redMul(p)),
        M = a.redMul(E),
        W = S.redSqr().redISub(M.redAdd(M)),
        G = M.redISub(W),
        ee = S.redMul(G);
      ee = ee.redIAdd(ee).redISub(D);
      var K = d.redMul(h);
      e + 1 < r && (p = p.redMul(D)), (a = W), (h = K), (d = ee);
    }
    return this.curve.jpoint(a, d.redMul(s), h);
  }),
  (fr.prototype.dbl = function () {
    return this.isInfinity()
      ? this
      : this.curve.zeroA
      ? this._zeroDbl()
      : this.curve.threeA
      ? this._threeDbl()
      : this._dbl();
  }),
  (fr.prototype._zeroDbl = function () {
    var r, e, t;
    if (this.zOne) {
      var i = this.x.redSqr(),
        s = this.y.redSqr(),
        a = s.redSqr(),
        u = this.x.redAdd(s).redSqr().redISub(i).redISub(a);
      u = u.redIAdd(u);
      var h = i.redAdd(i).redIAdd(i),
        p = h.redSqr().redISub(u).redISub(u),
        d = a.redIAdd(a);
      (d = d.redIAdd(d)),
        (d = d.redIAdd(d)),
        (r = p),
        (e = h.redMul(u.redISub(p)).redISub(d)),
        (t = this.y.redAdd(this.y));
    } else {
      var b = this.x.redSqr(),
        E = this.y.redSqr(),
        D = E.redSqr(),
        S = this.x.redAdd(E).redSqr().redISub(b).redISub(D);
      S = S.redIAdd(S);
      var M = b.redAdd(b).redIAdd(b),
        W = M.redSqr(),
        G = D.redIAdd(D);
      (G = G.redIAdd(G)),
        (G = G.redIAdd(G)),
        (r = W.redISub(S).redISub(S)),
        (e = M.redMul(S.redISub(r)).redISub(G)),
        (t = this.y.redMul(this.z)),
        (t = t.redIAdd(t));
    }
    return this.curve.jpoint(r, e, t);
  }),
  (fr.prototype._threeDbl = function () {
    var r, e, t;
    if (this.zOne) {
      var i = this.x.redSqr(),
        s = this.y.redSqr(),
        a = s.redSqr(),
        u = this.x.redAdd(s).redSqr().redISub(i).redISub(a);
      u = u.redIAdd(u);
      var h = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
        p = h.redSqr().redISub(u).redISub(u);
      r = p;
      var d = a.redIAdd(a);
      (d = d.redIAdd(d)),
        (d = d.redIAdd(d)),
        (e = h.redMul(u.redISub(p)).redISub(d)),
        (t = this.y.redAdd(this.y));
    } else {
      var b = this.z.redSqr(),
        E = this.y.redSqr(),
        D = this.x.redMul(E),
        S = this.x.redSub(b).redMul(this.x.redAdd(b));
      S = S.redAdd(S).redIAdd(S);
      var M = D.redIAdd(D);
      M = M.redIAdd(M);
      var W = M.redAdd(M);
      (r = S.redSqr().redISub(W)),
        (t = this.y.redAdd(this.z).redSqr().redISub(E).redISub(b));
      var G = E.redSqr();
      (G = G.redIAdd(G)),
        (G = G.redIAdd(G)),
        (G = G.redIAdd(G)),
        (e = S.redMul(M.redISub(r)).redISub(G));
    }
    return this.curve.jpoint(r, e, t);
  }),
  (fr.prototype._dbl = function () {
    var r = this.curve.a,
      e = this.x,
      t = this.y,
      i = this.z,
      s = i.redSqr().redSqr(),
      a = e.redSqr(),
      u = t.redSqr(),
      h = a.redAdd(a).redIAdd(a).redIAdd(r.redMul(s)),
      p = e.redAdd(e);
    p = p.redIAdd(p);
    var d = p.redMul(u),
      b = h.redSqr().redISub(d.redAdd(d)),
      E = d.redISub(b),
      D = u.redSqr();
    (D = D.redIAdd(D)), (D = D.redIAdd(D)), (D = D.redIAdd(D));
    var S = h.redMul(E).redISub(D),
      M = t.redAdd(t).redMul(i);
    return this.curve.jpoint(b, S, M);
  }),
  (fr.prototype.trpl = function () {
    if (!this.curve.zeroA) return this.dbl().add(this);
    var r = this.x.redSqr(),
      e = this.y.redSqr(),
      t = this.z.redSqr(),
      i = e.redSqr(),
      s = r.redAdd(r).redIAdd(r),
      a = s.redSqr(),
      u = this.x.redAdd(e).redSqr().redISub(r).redISub(i);
    (u = u.redIAdd(u)), (u = u.redAdd(u).redIAdd(u)), (u = u.redISub(a));
    var h = u.redSqr(),
      p = i.redIAdd(i);
    (p = p.redIAdd(p)), (p = p.redIAdd(p)), (p = p.redIAdd(p));
    var d = s.redIAdd(u).redSqr().redISub(a).redISub(h).redISub(p),
      b = e.redMul(d);
    (b = b.redIAdd(b)), (b = b.redIAdd(b));
    var E = this.x.redMul(h).redISub(b);
    (E = E.redIAdd(E)), (E = E.redIAdd(E));
    var D = this.y.redMul(d.redMul(p.redISub(d)).redISub(u.redMul(h)));
    (D = D.redIAdd(D)), (D = D.redIAdd(D)), (D = D.redIAdd(D));
    var S = this.z.redAdd(u).redSqr().redISub(t).redISub(h);
    return this.curve.jpoint(E, D, S);
  }),
  (fr.prototype.mul = function (r, e) {
    return (r = new nt(r, e)), this.curve._wnafMul(this, r);
  }),
  (fr.prototype.eq = function (r) {
    if (r.type === "affine") return this.eq(r.toJ());
    if (this === r) return !0;
    var e = this.z.redSqr(),
      t = r.z.redSqr();
    if (this.x.redMul(t).redISub(r.x.redMul(e)).cmpn(0) !== 0) return !1;
    var i = e.redMul(this.z),
      s = t.redMul(r.z);
    return this.y.redMul(s).redISub(r.y.redMul(i)).cmpn(0) === 0;
  }),
  (fr.prototype.eqXToP = function (r) {
    var e = this.z.redSqr(),
      t = r.toRed(this.curve.red).redMul(e);
    if (this.x.cmp(t) === 0) return !0;
    for (var i = r.clone(), s = this.curve.redN.redMul(e); ; ) {
      if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
      if ((t.redIAdd(s), this.x.cmp(t) === 0)) return !0;
    }
  }),
  (fr.prototype.inspect = function () {
    return this.isInfinity()
      ? "<EC JPoint Infinity>"
      : "<EC JPoint x: " +
          this.x.toString(16, 2) +
          " y: " +
          this.y.toString(16, 2) +
          " z: " +
          this.z.toString(16, 2) +
          ">";
  }),
  (fr.prototype.isInfinity = function () {
    return this.z.cmpn(0) === 0;
  });
var Bc = vo(function (r, e) {
    var t = e;
    (t.base = Ds), (t.short = B8), (t.mont = null), (t.edwards = null);
  }),
  Lc = vo(function (r, e) {
    var t = e,
      i = ei.assert;
    function s(h) {
      h.type === "short"
        ? (this.curve = new Bc.short(h))
        : h.type === "edwards"
        ? (this.curve = new Bc.edwards(h))
        : (this.curve = new Bc.mont(h)),
        (this.g = this.curve.g),
        (this.n = this.curve.n),
        (this.hash = h.hash),
        i(this.g.validate(), "Invalid curve"),
        i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    t.PresetCurve = s;
    function a(h, p) {
      Object.defineProperty(t, h, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          var d = new s(p);
          return (
            Object.defineProperty(t, h, {
              configurable: !0,
              enumerable: !0,
              value: d,
            }),
            d
          );
        },
      });
    }
    a("p192", {
      type: "short",
      prime: "p192",
      p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
      b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
      n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
      hash: Ji.sha256,
      gRed: !1,
      g: [
        "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
        "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
      ],
    }),
      a("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: Ji.sha256,
        gRed: !1,
        g: [
          "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
          "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
        ],
      }),
      a("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: Ji.sha256,
        gRed: !1,
        g: [
          "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
          "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
        ],
      }),
      a("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: Ji.sha384,
        gRed: !1,
        g: [
          "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
          "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
        ],
      }),
      a("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: Ji.sha512,
        gRed: !1,
        g: [
          "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
          "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
        ],
      }),
      a("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: Ji.sha256,
        gRed: !1,
        g: ["9"],
      }),
      a("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: Ji.sha256,
        gRed: !1,
        g: [
          "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
          "6666666666666666666666666666666666666666666666666666666666666658",
        ],
      });
    var u;
    try {
      u = null.crash();
    } catch {
      u = void 0;
    }
    a("secp256k1", {
      type: "short",
      prime: "k256",
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
      a: "0",
      b: "7",
      n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
      h: "1",
      hash: Ji.sha256,
      beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
      lambda:
        "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
      basis: [
        {
          a: "3086d221a7d46bcde86c90e49284eb15",
          b: "-e4437ed6010e88286f547fa90abfe4c3",
        },
        {
          a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
          b: "3086d221a7d46bcde86c90e49284eb15",
        },
      ],
      gRed: !1,
      g: [
        "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
        u,
      ],
    });
  });
function Gn(r) {
  if (!(this instanceof Gn)) return new Gn(r);
  (this.hash = r.hash),
    (this.predResist = !!r.predResist),
    (this.outLen = this.hash.outSize),
    (this.minEntropy = r.minEntropy || this.hash.hmacStrength),
    (this._reseed = null),
    (this.reseedInterval = null),
    (this.K = null),
    (this.V = null);
  var e = Li.toArray(r.entropy, r.entropyEnc || "hex"),
    t = Li.toArray(r.nonce, r.nonceEnc || "hex"),
    i = Li.toArray(r.pers, r.persEnc || "hex");
  Jl(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ),
    this._init(e, t, i);
}
var op = Gn;
(Gn.prototype._init = function (r, e, t) {
  var i = r.concat(e).concat(t);
  (this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8));
  for (var s = 0; s < this.V.length; s++) (this.K[s] = 0), (this.V[s] = 1);
  this._update(i), (this._reseed = 1), (this.reseedInterval = 281474976710656);
}),
  (Gn.prototype._hmac = function () {
    return new Ji.hmac(this.hash, this.K);
  }),
  (Gn.prototype._update = function (r) {
    var e = this._hmac().update(this.V).update([0]);
    r && (e = e.update(r)),
      (this.K = e.digest()),
      (this.V = this._hmac().update(this.V).digest()),
      r &&
        ((this.K = this._hmac().update(this.V).update([1]).update(r).digest()),
        (this.V = this._hmac().update(this.V).digest()));
  }),
  (Gn.prototype.reseed = function (r, e, t, i) {
    typeof e != "string" && ((i = t), (t = e), (e = null)),
      (r = Li.toArray(r, e)),
      (t = Li.toArray(t, i)),
      Jl(
        r.length >= this.minEntropy / 8,
        "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
      ),
      this._update(r.concat(t || [])),
      (this._reseed = 1);
  }),
  (Gn.prototype.generate = function (r, e, t, i) {
    if (this._reseed > this.reseedInterval)
      throw new Error("Reseed is required");
    typeof e != "string" && ((i = t), (t = e), (e = null)),
      t && ((t = Li.toArray(t, i || "hex")), this._update(t));
    for (var s = []; s.length < r; )
      (this.V = this._hmac().update(this.V).digest()), (s = s.concat(this.V));
    var a = s.slice(0, r);
    return this._update(t), this._reseed++, Li.encode(a, e);
  });
var kh = ei.assert;
function _r(r, e) {
  (this.ec = r),
    (this.priv = null),
    (this.pub = null),
    e.priv && this._importPrivate(e.priv, e.privEnc),
    e.pub && this._importPublic(e.pub, e.pubEnc);
}
var Hh = _r;
(_r.fromPublic = function (r, e, t) {
  return e instanceof _r ? e : new _r(r, { pub: e, pubEnc: t });
}),
  (_r.fromPrivate = function (r, e, t) {
    return e instanceof _r ? e : new _r(r, { priv: e, privEnc: t });
  }),
  (_r.prototype.validate = function () {
    var r = this.getPublic();
    return r.isInfinity()
      ? { result: !1, reason: "Invalid public key" }
      : r.validate()
      ? r.mul(this.ec.curve.n).isInfinity()
        ? { result: !0, reason: null }
        : { result: !1, reason: "Public key * N != O" }
      : { result: !1, reason: "Public key is not a point" };
  }),
  (_r.prototype.getPublic = function (r, e) {
    return (
      typeof r == "string" && ((e = r), (r = null)),
      this.pub || (this.pub = this.ec.g.mul(this.priv)),
      e ? this.pub.encode(e, r) : this.pub
    );
  }),
  (_r.prototype.getPrivate = function (r) {
    return r === "hex" ? this.priv.toString(16, 2) : this.priv;
  }),
  (_r.prototype._importPrivate = function (r, e) {
    (this.priv = new nt(r, e || 16)),
      (this.priv = this.priv.umod(this.ec.curve.n));
  }),
  (_r.prototype._importPublic = function (r, e) {
    if (r.x || r.y) {
      this.ec.curve.type === "mont"
        ? kh(r.x, "Need x coordinate")
        : (this.ec.curve.type === "short" ||
            this.ec.curve.type === "edwards") &&
          kh(r.x && r.y, "Need both x and y coordinate"),
        (this.pub = this.ec.curve.point(r.x, r.y));
      return;
    }
    this.pub = this.ec.curve.decodePoint(r, e);
  }),
  (_r.prototype.derive = function (r) {
    return (
      r.validate() || kh(r.validate(), "public point not validated"),
      r.mul(this.priv).getX()
    );
  }),
  (_r.prototype.sign = function (r, e, t) {
    return this.ec.sign(r, this, e, t);
  }),
  (_r.prototype.verify = function (r, e) {
    return this.ec.verify(r, e, this);
  }),
  (_r.prototype.inspect = function () {
    return (
      "<Key priv: " +
      (this.priv && this.priv.toString(16, 2)) +
      " pub: " +
      (this.pub && this.pub.inspect()) +
      " >"
    );
  });
var L8 = ei.assert;
function lu(r, e) {
  if (r instanceof lu) return r;
  this._importDER(r, e) ||
    (L8(r.r && r.s, "Signature without r or s"),
    (this.r = new nt(r.r, 16)),
    (this.s = new nt(r.s, 16)),
    r.recoveryParam === void 0
      ? (this.recoveryParam = null)
      : (this.recoveryParam = r.recoveryParam));
}
var xc = lu;
function q8() {
  this.place = 0;
}
function Kh(r, e) {
  var t = r[e.place++];
  if (!(t & 128)) return t;
  var i = t & 15;
  if (i === 0 || i > 4) return !1;
  for (var s = 0, a = 0, u = e.place; a < i; a++, u++)
    (s <<= 8), (s |= r[u]), (s >>>= 0);
  return s <= 127 ? !1 : ((e.place = u), s);
}
function ap(r) {
  for (var e = 0, t = r.length - 1; !r[e] && !(r[e + 1] & 128) && e < t; ) e++;
  return e === 0 ? r : r.slice(e);
}
lu.prototype._importDER = function (r, e) {
  r = ei.toArray(r, e);
  var t = new q8();
  if (r[t.place++] !== 48) return !1;
  var i = Kh(r, t);
  if (i === !1 || i + t.place !== r.length || r[t.place++] !== 2) return !1;
  var s = Kh(r, t);
  if (s === !1) return !1;
  var a = r.slice(t.place, s + t.place);
  if (((t.place += s), r[t.place++] !== 2)) return !1;
  var u = Kh(r, t);
  if (u === !1 || r.length !== u + t.place) return !1;
  var h = r.slice(t.place, u + t.place);
  if (a[0] === 0)
    if (a[1] & 128) a = a.slice(1);
    else return !1;
  if (h[0] === 0)
    if (h[1] & 128) h = h.slice(1);
    else return !1;
  return (
    (this.r = new nt(a)), (this.s = new nt(h)), (this.recoveryParam = null), !0
  );
};
function Vh(r, e) {
  if (e < 128) {
    r.push(e);
    return;
  }
  var t = 1 + ((Math.log(e) / Math.LN2) >>> 3);
  for (r.push(t | 128); --t; ) r.push((e >>> (t << 3)) & 255);
  r.push(e);
}
lu.prototype.toDER = function (r) {
  var e = this.r.toArray(),
    t = this.s.toArray();
  for (
    e[0] & 128 && (e = [0].concat(e)),
      t[0] & 128 && (t = [0].concat(t)),
      e = ap(e),
      t = ap(t);
    !t[0] && !(t[1] & 128);

  )
    t = t.slice(1);
  var i = [2];
  Vh(i, e.length), (i = i.concat(e)), i.push(2), Vh(i, t.length);
  var s = i.concat(t),
    a = [48];
  return Vh(a, s.length), (a = a.concat(s)), ei.encode(a, r);
};
var j8 = function () {
    throw new Error("unsupported");
  },
  q1 = ei.assert;
function wi(r) {
  if (!(this instanceof wi)) return new wi(r);
  typeof r == "string" &&
    (q1(Object.prototype.hasOwnProperty.call(Lc, r), "Unknown curve " + r),
    (r = Lc[r])),
    r instanceof Lc.PresetCurve && (r = { curve: r }),
    (this.curve = r.curve.curve),
    (this.n = this.curve.n),
    (this.nh = this.n.ushrn(1)),
    (this.g = this.curve.g),
    (this.g = r.curve.g),
    this.g.precompute(r.curve.n.bitLength() + 1),
    (this.hash = r.hash || r.curve.hash);
}
var $8 = wi;
(wi.prototype.keyPair = function (r) {
  return new Hh(this, r);
}),
  (wi.prototype.keyFromPrivate = function (r, e) {
    return Hh.fromPrivate(this, r, e);
  }),
  (wi.prototype.keyFromPublic = function (r, e) {
    return Hh.fromPublic(this, r, e);
  }),
  (wi.prototype.genKeyPair = function (r) {
    r || (r = {});
    for (
      var e = new op({
          hash: this.hash,
          pers: r.pers,
          persEnc: r.persEnc || "utf8",
          entropy: r.entropy || j8(this.hash.hmacStrength),
          entropyEnc: (r.entropy && r.entropyEnc) || "utf8",
          nonce: this.n.toArray(),
        }),
        t = this.n.byteLength(),
        i = this.n.sub(new nt(2));
      ;

    ) {
      var s = new nt(e.generate(t));
      if (!(s.cmp(i) > 0)) return s.iaddn(1), this.keyFromPrivate(s);
    }
  }),
  (wi.prototype._truncateToN = function (r, e) {
    var t = r.byteLength() * 8 - this.n.bitLength();
    return (
      t > 0 && (r = r.ushrn(t)), !e && r.cmp(this.n) >= 0 ? r.sub(this.n) : r
    );
  }),
  (wi.prototype.sign = function (r, e, t, i) {
    typeof t == "object" && ((i = t), (t = null)),
      i || (i = {}),
      (e = this.keyFromPrivate(e, t)),
      (r = this._truncateToN(new nt(r, 16)));
    for (
      var s = this.n.byteLength(),
        a = e.getPrivate().toArray("be", s),
        u = r.toArray("be", s),
        h = new op({
          hash: this.hash,
          entropy: a,
          nonce: u,
          pers: i.pers,
          persEnc: i.persEnc || "utf8",
        }),
        p = this.n.sub(new nt(1)),
        d = 0;
      ;
      d++
    ) {
      var b = i.k ? i.k(d) : new nt(h.generate(this.n.byteLength()));
      if (
        ((b = this._truncateToN(b, !0)), !(b.cmpn(1) <= 0 || b.cmp(p) >= 0))
      ) {
        var E = this.g.mul(b);
        if (!E.isInfinity()) {
          var D = E.getX(),
            S = D.umod(this.n);
          if (S.cmpn(0) !== 0) {
            var M = b.invm(this.n).mul(S.mul(e.getPrivate()).iadd(r));
            if (((M = M.umod(this.n)), M.cmpn(0) !== 0)) {
              var W = (E.getY().isOdd() ? 1 : 0) | (D.cmp(S) !== 0 ? 2 : 0);
              return (
                i.canonical &&
                  M.cmp(this.nh) > 0 &&
                  ((M = this.n.sub(M)), (W ^= 1)),
                new xc({ r: S, s: M, recoveryParam: W })
              );
            }
          }
        }
      }
    }
  }),
  (wi.prototype.verify = function (r, e, t, i) {
    (r = this._truncateToN(new nt(r, 16))),
      (t = this.keyFromPublic(t, i)),
      (e = new xc(e, "hex"));
    var s = e.r,
      a = e.s;
    if (
      s.cmpn(1) < 0 ||
      s.cmp(this.n) >= 0 ||
      a.cmpn(1) < 0 ||
      a.cmp(this.n) >= 0
    )
      return !1;
    var u = a.invm(this.n),
      h = u.mul(r).umod(this.n),
      p = u.mul(s).umod(this.n),
      d;
    return this.curve._maxwellTrick
      ? ((d = this.g.jmulAdd(h, t.getPublic(), p)),
        d.isInfinity() ? !1 : d.eqXToP(s))
      : ((d = this.g.mulAdd(h, t.getPublic(), p)),
        d.isInfinity() ? !1 : d.getX().umod(this.n).cmp(s) === 0);
  }),
  (wi.prototype.recoverPubKey = function (r, e, t, i) {
    q1((3 & t) === t, "The recovery param is more than two bits"),
      (e = new xc(e, i));
    var s = this.n,
      a = new nt(r),
      u = e.r,
      h = e.s,
      p = t & 1,
      d = t >> 1;
    if (u.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d)
      throw new Error("Unable to find sencond key candinate");
    d
      ? (u = this.curve.pointFromX(u.add(this.curve.n), p))
      : (u = this.curve.pointFromX(u, p));
    var b = e.r.invm(s),
      E = s.sub(a).mul(b).umod(s),
      D = h.mul(b).umod(s);
    return this.g.mulAdd(E, u, D);
  }),
  (wi.prototype.getKeyRecoveryParam = function (r, e, t, i) {
    if (((e = new xc(e, i)), e.recoveryParam !== null)) return e.recoveryParam;
    for (var s = 0; s < 4; s++) {
      var a;
      try {
        a = this.recoverPubKey(r, e, s);
      } catch {
        continue;
      }
      if (a.eq(t)) return s;
    }
    throw new Error("Unable to find valid recovery factor");
  });
var F8 = vo(function (r, e) {
    var t = e;
    (t.version = "6.5.4"),
      (t.utils = ei),
      (t.rand = function () {
        throw new Error("unsupported");
      }),
      (t.curve = Bc),
      (t.curves = Lc),
      (t.ec = $8),
      (t.eddsa = null);
  }),
  z8 = F8.ec;
const k8 = "signing-key/5.7.0",
  Sl = new gr(k8);
let Gh = null;
function Hn() {
  return Gh || (Gh = new z8("secp256k1")), Gh;
}
class H8 {
  constructor(e) {
    $o(this, "curve", "secp256k1"),
      $o(this, "privateKey", $r(e)),
      x5(this.privateKey) !== 32 &&
        Sl.throwArgumentError(
          "invalid private key",
          "privateKey",
          "[[ REDACTED ]]"
        );
    const t = Hn().keyFromPrivate(Wt(this.privateKey));
    $o(this, "publicKey", "0x" + t.getPublic(!1, "hex")),
      $o(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")),
      $o(this, "_isSigningKey", !0);
  }
  _addPoint(e) {
    const t = Hn().keyFromPublic(Wt(this.publicKey)),
      i = Hn().keyFromPublic(Wt(e));
    return "0x" + t.pub.add(i.pub).encodeCompressed("hex");
  }
  signDigest(e) {
    const t = Hn().keyFromPrivate(Wt(this.privateKey)),
      i = Wt(e);
    i.length !== 32 && Sl.throwArgumentError("bad digest length", "digest", e);
    const s = t.sign(i, { canonical: !0 });
    return u1({
      recoveryParam: s.recoveryParam,
      r: nn("0x" + s.r.toString(16), 32),
      s: nn("0x" + s.s.toString(16), 32),
    });
  }
  computeSharedSecret(e) {
    const t = Hn().keyFromPrivate(Wt(this.privateKey)),
      i = Hn().keyFromPublic(Wt(j1(e)));
    return nn("0x" + t.derive(i.getPublic()).toString(16), 32);
  }
  static isSigningKey(e) {
    return !!(e && e._isSigningKey);
  }
}
function K8(r, e) {
  const t = u1(e),
    i = { r: Wt(t.r), s: Wt(t.s) };
  return "0x" + Hn().recoverPubKey(Wt(r), i, t.recoveryParam).encode("hex", !1);
}
function j1(r, e) {
  const t = Wt(r);
  return t.length === 32
    ? new H8(t).publicKey
    : t.length === 33
    ? "0x" + Hn().keyFromPublic(t).getPublic(!1, "hex")
    : t.length === 65
    ? $r(t)
    : Sl.throwArgumentError(
        "invalid public or private key",
        "key",
        "[REDACTED]"
      );
}
var cp;
(function (r) {
  (r[(r.legacy = 0)] = "legacy"),
    (r[(r.eip2930 = 1)] = "eip2930"),
    (r[(r.eip1559 = 2)] = "eip1559");
})(cp || (cp = {}));
function V8(r) {
  const e = j1(r);
  return iA(G0(Wl(G0(e, 1)), 12));
}
function G8(r, e) {
  return V8(K8(Wt(r), e));
}
const W8 = "https://rpc.walletconnect.com/v1";
async function Y8(r, e, t, i, s, a) {
  switch (t.t) {
    case "eip191":
      return Q8(r, e, t.s);
    case "eip1271":
      return await J8(r, e, t.s, i, s, a);
    default:
      throw new Error(
        `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${t.t}`
      );
  }
}
function Q8(r, e, t) {
  return G8(y1(e), t).toLowerCase() === r.toLowerCase();
}
async function J8(r, e, t, i, s, a) {
  try {
    const u = "0x1626ba7e",
      h = "0000000000000000000000000000000000000000000000000000000000000040",
      p = "0000000000000000000000000000000000000000000000000000000000000041",
      d = t.substring(2),
      b = y1(e).substring(2),
      E = u + b + h + p + d,
      D = await fetch(`${a || W8}/?chainId=${i}&projectId=${s}`, {
        method: "POST",
        body: JSON.stringify({
          id: X8(),
          jsonrpc: "2.0",
          method: "eth_call",
          params: [{ to: r, data: E }, "latest"],
        }),
      }),
      { result: S } = await D.json();
    return S ? S.slice(0, u.length).toLowerCase() === u.toLowerCase() : !1;
  } catch (u) {
    return console.error("isValidEip1271Signature: ", u), !1;
  }
}
function X8() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var Z8 = Object.defineProperty,
  eS = Object.defineProperties,
  tS = Object.getOwnPropertyDescriptors,
  up = Object.getOwnPropertySymbols,
  rS = Object.prototype.hasOwnProperty,
  iS = Object.prototype.propertyIsEnumerable,
  hp = (r, e, t) =>
    e in r
      ? Z8(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  nS = (r, e) => {
    for (var t in e || (e = {})) rS.call(e, t) && hp(r, t, e[t]);
    if (up) for (var t of up(e)) iS.call(e, t) && hp(r, t, e[t]);
    return r;
  },
  sS = (r, e) => eS(r, tS(e));
const oS = "did:pkh:",
  Zl = (r) => (r == null ? void 0 : r.split(":")),
  $1 = (r) => {
    const e = r && Zl(r);
    if (e) return r.includes(oS) ? e[3] : e[1];
  },
  lp = (r) => {
    const e = r && Zl(r);
    if (e) return e[2] + ":" + e[3];
  },
  Qc = (r) => {
    const e = r && Zl(r);
    if (e) return e.pop();
  };
async function fp(r) {
  const { cacao: e, projectId: t } = r,
    { s: i, p: s } = e,
    a = F1(s, s.iss),
    u = Qc(s.iss);
  return await Y8(u, a, i, $1(s.iss), t);
}
const F1 = (r, e) => {
  const t = `${r.domain} wants you to sign in with your Ethereum account:`,
    i = Qc(e);
  if (!r.aud && !r.uri)
    throw new Error(
      "Either `aud` or `uri` is required to construct the message"
    );
  let s = r.statement || void 0;
  const a = `URI: ${r.aud || r.uri}`,
    u = `Version: ${r.version}`,
    h = `Chain ID: ${$1(e)}`,
    p = `Nonce: ${r.nonce}`,
    d = `Issued At: ${r.iat}`,
    b = r.exp ? `Expiration Time: ${r.exp}` : void 0,
    E = r.nbf ? `Not Before: ${r.nbf}` : void 0,
    D = r.requestId ? `Request ID: ${r.requestId}` : void 0,
    S = r.resources
      ? `Resources:${r.resources
          .map(
            (W) => `
- ${W}`
          )
          .join("")}`
      : void 0,
    M = qc(r.resources);
  if (M) {
    const W = sa(M);
    s = gS(s, W);
  }
  return [t, i, "", s, "", a, u, h, p, d, b, E, D, S].filter((W) => W != null)
    .join(`
`);
};
function aS(r) {
  return Buffer.from(JSON.stringify(r)).toString("base64");
}
function cS(r) {
  return JSON.parse(Buffer.from(r, "base64").toString("utf-8"));
}
function Ss(r) {
  if (!r) throw new Error("No recap provided, value is undefined");
  if (!r.att) throw new Error("No `att` property found");
  const e = Object.keys(r.att);
  if (!(e != null && e.length))
    throw new Error("No resources found in `att` property");
  e.forEach((t) => {
    const i = r.att[t];
    if (Array.isArray(i)) throw new Error(`Resource must be an object: ${t}`);
    if (typeof i != "object")
      throw new Error(`Resource must be an object: ${t}`);
    if (!Object.keys(i).length)
      throw new Error(`Resource object is empty: ${t}`);
    Object.keys(i).forEach((s) => {
      const a = i[s];
      if (!Array.isArray(a))
        throw new Error(
          `Ability limits ${s} must be an array of objects, found: ${a}`
        );
      if (!a.length)
        throw new Error(
          `Value of ${s} is empty array, must be an array with objects`
        );
      a.forEach((u) => {
        if (typeof u != "object")
          throw new Error(
            `Ability limits (${s}) must be an array of objects, found: ${u}`
          );
      });
    });
  });
}
function uS(r, e, t, i = {}) {
  return (
    t == null || t.sort((s, a) => s.localeCompare(a)),
    { att: { [r]: hS(e, t, i) } }
  );
}
function hS(r, e, t = {}) {
  e = e == null ? void 0 : e.sort((s, a) => s.localeCompare(a));
  const i = e.map((s) => ({ [`${r}/${s}`]: [t] }));
  return Object.assign({}, ...i);
}
function z1(r) {
  return Ss(r), `urn:recap:${aS(r).replace(/=/g, "")}`;
}
function sa(r) {
  const e = cS(r.replace("urn:recap:", ""));
  return Ss(e), e;
}
function lS(r, e, t) {
  const i = uS(r, e, t);
  return z1(i);
}
function fS(r) {
  return r && r.includes("urn:recap:");
}
function dS(r, e) {
  const t = sa(r),
    i = sa(e),
    s = pS(t, i);
  return z1(s);
}
function pS(r, e) {
  Ss(r), Ss(e);
  const t = Object.keys(r.att)
      .concat(Object.keys(e.att))
      .sort((s, a) => s.localeCompare(a)),
    i = { att: {} };
  return (
    t.forEach((s) => {
      var a, u;
      Object.keys(((a = r.att) == null ? void 0 : a[s]) || {})
        .concat(Object.keys(((u = e.att) == null ? void 0 : u[s]) || {}))
        .sort((h, p) => h.localeCompare(p))
        .forEach((h) => {
          var p, d;
          i.att[s] = sS(nS({}, i.att[s]), {
            [h]:
              ((p = r.att[s]) == null ? void 0 : p[h]) ||
              ((d = e.att[s]) == null ? void 0 : d[h]),
          });
        });
    }),
    i
  );
}
function gS(r = "", e) {
  Ss(e);
  const t =
    "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (r.includes(t)) return r;
  const i = [];
  let s = 0;
  Object.keys(e.att).forEach((h) => {
    const p = Object.keys(e.att[h]).map((E) => ({
      ability: E.split("/")[0],
      action: E.split("/")[1],
    }));
    p.sort((E, D) => E.action.localeCompare(D.action));
    const d = {};
    p.forEach((E) => {
      d[E.ability] || (d[E.ability] = []), d[E.ability].push(E.action);
    });
    const b = Object.keys(d).map(
      (E) => (s++, `(${s}) '${E}': '${d[E].join("', '")}' for '${h}'.`)
    );
    i.push(b.join(", ").replace(".,", "."));
  });
  const a = i.join(" "),
    u = `${t}${a}`;
  return `${r ? r + " " : ""}${u}`;
}
function dp(r) {
  var e;
  const t = sa(r);
  Ss(t);
  const i = (e = t.att) == null ? void 0 : e.eip155;
  return i ? Object.keys(i).map((s) => s.split("/")[1]) : [];
}
function pp(r) {
  const e = sa(r);
  Ss(e);
  const t = [];
  return (
    Object.values(e.att).forEach((i) => {
      Object.values(i).forEach((s) => {
        var a;
        (a = s == null ? void 0 : s[0]) != null &&
          a.chains &&
          t.push(s[0].chains);
      });
    }),
    [...new Set(t.flat())]
  );
}
function qc(r) {
  if (!r) return;
  const e = r == null ? void 0 : r[r.length - 1];
  return fS(e) ? e : void 0;
}
const k1 = "base10",
  Cr = "base16",
  Il = "base64pad",
  ef = "utf8",
  H1 = 0,
  Pn = 1,
  mS = 0,
  gp = 1,
  Dl = 12,
  tf = 32;
function vS() {
  const r = Gl.generateKeyPair();
  return { privateKey: Ei(r.secretKey, Cr), publicKey: Ei(r.publicKey, Cr) };
}
function xl() {
  const r = ho.randomBytes(tf);
  return Ei(r, Cr);
}
function yS(r, e) {
  const t = Gl.sharedKey(Bi(r, Cr), Bi(e, Cr), !0),
    i = new J6(uu.SHA256, t).expand(tf);
  return Ei(i, Cr);
}
function jc(r) {
  const e = uu.hash(Bi(r, Cr));
  return Ei(e, Cr);
}
function _s(r) {
  const e = uu.hash(Bi(r, ef));
  return Ei(e, Cr);
}
function wS(r) {
  return Bi(`${r}`, k1);
}
function pa(r) {
  return Number(Ei(r, k1));
}
function bS(r) {
  const e = wS(typeof r.type < "u" ? r.type : H1);
  if (pa(e) === Pn && typeof r.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const t = typeof r.senderPublicKey < "u" ? Bi(r.senderPublicKey, Cr) : void 0,
    i = typeof r.iv < "u" ? Bi(r.iv, Cr) : ho.randomBytes(Dl),
    s = new Kl.ChaCha20Poly1305(Bi(r.symKey, Cr)).seal(i, Bi(r.message, ef));
  return ES({ type: e, sealed: s, iv: i, senderPublicKey: t });
}
function _S(r) {
  const e = new Kl.ChaCha20Poly1305(Bi(r.symKey, Cr)),
    { sealed: t, iv: i } = Jc(r.encoded),
    s = e.open(i, t);
  if (s === null) throw new Error("Failed to decrypt");
  return Ei(s, ef);
}
function ES(r) {
  if (pa(r.type) === Pn) {
    if (typeof r.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return Ei(U0([r.type, r.senderPublicKey, r.iv, r.sealed]), Il);
  }
  return Ei(U0([r.type, r.iv, r.sealed]), Il);
}
function Jc(r) {
  const e = Bi(r, Il),
    t = e.slice(mS, gp),
    i = gp;
  if (pa(t) === Pn) {
    const h = i + tf,
      p = h + Dl,
      d = e.slice(i, h),
      b = e.slice(h, p),
      E = e.slice(p);
    return { type: t, sealed: E, iv: b, senderPublicKey: d };
  }
  const s = i + Dl,
    a = e.slice(i, s),
    u = e.slice(s);
  return { type: t, sealed: u, iv: a };
}
function AS(r, e) {
  const t = Jc(r);
  return K1({
    type: pa(t.type),
    senderPublicKey:
      typeof t.senderPublicKey < "u" ? Ei(t.senderPublicKey, Cr) : void 0,
    receiverPublicKey: e == null ? void 0 : e.receiverPublicKey,
  });
}
function K1(r) {
  const e = (r == null ? void 0 : r.type) || H1;
  if (e === Pn) {
    if (typeof (r == null ? void 0 : r.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (r == null ? void 0 : r.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: e,
    senderPublicKey: r == null ? void 0 : r.senderPublicKey,
    receiverPublicKey: r == null ? void 0 : r.receiverPublicKey,
  };
}
function mp(r) {
  return (
    r.type === Pn &&
    typeof r.senderPublicKey == "string" &&
    typeof r.receiverPublicKey == "string"
  );
}
const SS = "irn";
function Pl(r) {
  return (r == null ? void 0 : r.relay) || { protocol: SS };
}
function Wo(r) {
  const e = t5[r];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${r}`);
  return e;
}
var IS = Object.defineProperty,
  DS = Object.defineProperties,
  xS = Object.getOwnPropertyDescriptors,
  vp = Object.getOwnPropertySymbols,
  PS = Object.prototype.hasOwnProperty,
  MS = Object.prototype.propertyIsEnumerable,
  yp = (r, e, t) =>
    e in r
      ? IS(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  wp = (r, e) => {
    for (var t in e || (e = {})) PS.call(e, t) && yp(r, t, e[t]);
    if (vp) for (var t of vp(e)) MS.call(e, t) && yp(r, t, e[t]);
    return r;
  },
  CS = (r, e) => DS(r, xS(e));
function OS(r, e = "-") {
  const t = {},
    i = "relay" + e;
  return (
    Object.keys(r).forEach((s) => {
      if (s.startsWith(i)) {
        const a = s.replace(i, ""),
          u = r[s];
        t[a] = u;
      }
    }),
    t
  );
}
function bp(r) {
  (r = r.includes("wc://") ? r.replace("wc://", "") : r),
    (r = r.includes("wc:") ? r.replace("wc:", "") : r);
  const e = r.indexOf(":"),
    t = r.indexOf("?") !== -1 ? r.indexOf("?") : void 0,
    i = r.substring(0, e),
    s = r.substring(e + 1, t).split("@"),
    a = typeof t < "u" ? r.substring(t) : "",
    u = ra.parse(a),
    h = typeof u.methods == "string" ? u.methods.split(",") : void 0;
  return {
    protocol: i,
    topic: NS(s[0]),
    version: parseInt(s[1], 10),
    symKey: u.symKey,
    relay: OS(u),
    methods: h,
    expiryTimestamp: u.expiryTimestamp
      ? parseInt(u.expiryTimestamp, 10)
      : void 0,
  };
}
function NS(r) {
  return r.startsWith("//") ? r.substring(2) : r;
}
function RS(r, e = "-") {
  const t = "relay",
    i = {};
  return (
    Object.keys(r).forEach((s) => {
      const a = t + e + s;
      r[s] && (i[a] = r[s]);
    }),
    i
  );
}
function TS(r) {
  return (
    `${r.protocol}:${r.topic}@${r.version}?` +
    ra.stringify(
      wp(
        CS(wp({ symKey: r.symKey }, RS(r.relay)), {
          expiryTimestamp: r.expiryTimestamp,
        }),
        r.methods ? { methods: r.methods.join(",") } : {}
      )
    )
  );
}
function yo(r) {
  const e = [];
  return (
    r.forEach((t) => {
      const [i, s] = t.split(":");
      e.push(`${i}:${s}`);
    }),
    e
  );
}
function US(r) {
  const e = [];
  return (
    Object.values(r).forEach((t) => {
      e.push(...yo(t.accounts));
    }),
    e
  );
}
function BS(r, e) {
  const t = [];
  return (
    Object.values(r).forEach((i) => {
      yo(i.accounts).includes(e) && t.push(...i.methods);
    }),
    t
  );
}
function LS(r, e) {
  const t = [];
  return (
    Object.values(r).forEach((i) => {
      yo(i.accounts).includes(e) && t.push(...i.events);
    }),
    t
  );
}
function rf(r) {
  return r.includes(":");
}
function Yo(r) {
  return rf(r) ? r.split(":")[0] : r;
}
function qS(r) {
  const e = {};
  return (
    r == null ||
      r.forEach((t) => {
        const [i, s] = t.split(":");
        e[i] || (e[i] = { accounts: [], chains: [], events: [] }),
          e[i].accounts.push(t),
          e[i].chains.push(`${i}:${s}`);
      }),
    e
  );
}
function _p(r, e) {
  e = e.map((i) => i.replace("did:pkh:", ""));
  const t = qS(e);
  for (const [i, s] of Object.entries(t))
    s.methods ? (s.methods = Tc(s.methods, r)) : (s.methods = r),
      (s.events = ["chainChanged", "accountsChanged"]);
  return t;
}
const jS = {
    INVALID_METHOD: { message: "Invalid method.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
  },
  $S = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function ge(r, e) {
  const { message: t, code: i } = $S[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function Rt(r, e) {
  const { message: t, code: i } = jS[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function un(r, e) {
  return !!Array.isArray(r);
}
function oa(r) {
  return Object.getPrototypeOf(r) === Object.prototype && Object.keys(r).length;
}
function Fr(r) {
  return typeof r > "u";
}
function Zt(r, e) {
  return e && Fr(r) ? !0 : typeof r == "string" && !!r.trim().length;
}
function nf(r, e) {
  return typeof r == "number" && !isNaN(r);
}
function FS(r, e) {
  const { requiredNamespaces: t } = e,
    i = Object.keys(r.namespaces),
    s = Object.keys(t);
  let a = !0;
  return bs(s, i)
    ? (i.forEach((u) => {
        const { accounts: h, methods: p, events: d } = r.namespaces[u],
          b = yo(h),
          E = t[u];
        (!bs(t1(u, E), b) || !bs(E.methods, p) || !bs(E.events, d)) && (a = !1);
      }),
      a)
    : !1;
}
function Xc(r) {
  return Zt(r, !1) && r.includes(":") ? r.split(":").length === 2 : !1;
}
function zS(r) {
  if (Zt(r, !1) && r.includes(":")) {
    const e = r.split(":");
    if (e.length === 3) {
      const t = e[0] + ":" + e[1];
      return !!e[2] && Xc(t);
    }
  }
  return !1;
}
function kS(r) {
  if (Zt(r, !1))
    try {
      return typeof new URL(r) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function HS(r) {
  var e;
  return (e = r == null ? void 0 : r.proposer) == null ? void 0 : e.publicKey;
}
function KS(r) {
  return r == null ? void 0 : r.topic;
}
function VS(r, e) {
  let t = null;
  return (
    Zt(r == null ? void 0 : r.publicKey, !1) ||
      (t = ge(
        "MISSING_OR_INVALID",
        `${e} controller public key should be a string`
      )),
    t
  );
}
function Ep(r) {
  let e = !0;
  return un(r) ? r.length && (e = r.every((t) => Zt(t, !1))) : (e = !1), e;
}
function GS(r, e, t) {
  let i = null;
  return (
    un(e) && e.length
      ? e.forEach((s) => {
          i ||
            Xc(s) ||
            (i = Rt(
              "UNSUPPORTED_CHAINS",
              `${t}, chain ${s} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : Xc(r) ||
        (i = Rt(
          "UNSUPPORTED_CHAINS",
          `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    i
  );
}
function WS(r, e, t) {
  let i = null;
  return (
    Object.entries(r).forEach(([s, a]) => {
      if (i) return;
      const u = GS(s, t1(s, a), `${e} ${t}`);
      u && (i = u);
    }),
    i
  );
}
function YS(r, e) {
  let t = null;
  return (
    un(r)
      ? r.forEach((i) => {
          t ||
            zS(i) ||
            (t = Rt(
              "UNSUPPORTED_ACCOUNTS",
              `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (t = Rt(
          "UNSUPPORTED_ACCOUNTS",
          `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    t
  );
}
function QS(r, e) {
  let t = null;
  return (
    Object.values(r).forEach((i) => {
      if (t) return;
      const s = YS(i == null ? void 0 : i.accounts, `${e} namespace`);
      s && (t = s);
    }),
    t
  );
}
function JS(r, e) {
  let t = null;
  return (
    Ep(r == null ? void 0 : r.methods)
      ? Ep(r == null ? void 0 : r.events) ||
        (t = Rt(
          "UNSUPPORTED_EVENTS",
          `${e}, events should be an array of strings or empty array for no events`
        ))
      : (t = Rt(
          "UNSUPPORTED_METHODS",
          `${e}, methods should be an array of strings or empty array for no methods`
        )),
    t
  );
}
function V1(r, e) {
  let t = null;
  return (
    Object.values(r).forEach((i) => {
      if (t) return;
      const s = JS(i, `${e}, namespace`);
      s && (t = s);
    }),
    t
  );
}
function XS(r, e, t) {
  let i = null;
  if (r && oa(r)) {
    const s = V1(r, e);
    s && (i = s);
    const a = WS(r, e, t);
    a && (i = a);
  } else
    i = ge("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return i;
}
function Wh(r, e) {
  let t = null;
  if (r && oa(r)) {
    const i = V1(r, e);
    i && (t = i);
    const s = QS(r, e);
    s && (t = s);
  } else
    t = ge(
      "MISSING_OR_INVALID",
      `${e}, namespaces should be an object with data`
    );
  return t;
}
function G1(r) {
  return Zt(r.protocol, !0);
}
function ZS(r, e) {
  let t = !1;
  return (
    r
      ? r &&
        un(r) &&
        r.length &&
        r.forEach((i) => {
          t = G1(i);
        })
      : (t = !0),
    t
  );
}
function eI(r) {
  return typeof r == "number";
}
function jr(r) {
  return typeof r < "u" && typeof r !== null;
}
function tI(r) {
  return !(
    !r ||
    typeof r != "object" ||
    !r.code ||
    !nf(r.code) ||
    !r.message ||
    !Zt(r.message, !1)
  );
}
function rI(r) {
  return !(Fr(r) || !Zt(r.method, !1));
}
function iI(r) {
  return !(
    Fr(r) ||
    (Fr(r.result) && Fr(r.error)) ||
    !nf(r.id) ||
    !Zt(r.jsonrpc, !1)
  );
}
function nI(r) {
  return !(Fr(r) || !Zt(r.name, !1));
}
function Ap(r, e) {
  return !(!Xc(e) || !US(r).includes(e));
}
function sI(r, e, t) {
  return Zt(t, !1) ? BS(r, e).includes(t) : !1;
}
function oI(r, e, t) {
  return Zt(t, !1) ? LS(r, e).includes(t) : !1;
}
function Sp(r, e, t) {
  let i = null;
  const s = aI(r),
    a = cI(e),
    u = Object.keys(s),
    h = Object.keys(a),
    p = Ip(Object.keys(r)),
    d = Ip(Object.keys(e)),
    b = p.filter((E) => !d.includes(E));
  return (
    b.length &&
      (i = ge(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${b.toString()}
      Received: ${Object.keys(e).toString()}`
      )),
    bs(u, h) ||
      (i = ge(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces chains don't satisfy required namespaces.
      Required: ${u.toString()}
      Approved: ${h.toString()}`
      )),
    Object.keys(e).forEach((E) => {
      if (!E.includes(":") || i) return;
      const D = yo(e[E].accounts);
      D.includes(E) ||
        (i = ge(
          "NON_CONFORMING_NAMESPACES",
          `${t} namespaces accounts don't satisfy namespace accounts for ${E}
        Required: ${E}
        Approved: ${D.toString()}`
        ));
    }),
    u.forEach((E) => {
      i ||
        (bs(s[E].methods, a[E].methods)
          ? bs(s[E].events, a[E].events) ||
            (i = ge(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces events don't satisfy namespace events for ${E}`
            ))
          : (i = ge(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces methods don't satisfy namespace methods for ${E}`
            )));
    }),
    i
  );
}
function aI(r) {
  const e = {};
  return (
    Object.keys(r).forEach((t) => {
      var i;
      t.includes(":")
        ? (e[t] = r[t])
        : (i = r[t].chains) == null ||
          i.forEach((s) => {
            e[s] = { methods: r[t].methods, events: r[t].events };
          });
    }),
    e
  );
}
function Ip(r) {
  return [...new Set(r.map((e) => (e.includes(":") ? e.split(":")[0] : e)))];
}
function cI(r) {
  const e = {};
  return (
    Object.keys(r).forEach((t) => {
      if (t.includes(":")) e[t] = r[t];
      else {
        const i = yo(r[t].accounts);
        i == null ||
          i.forEach((s) => {
            e[s] = {
              accounts: r[t].accounts.filter((a) => a.includes(`${s}:`)),
              methods: r[t].methods,
              events: r[t].events,
            };
          });
      }
    }),
    e
  );
}
function uI(r, e) {
  return nf(r) && r <= e.max && r >= e.min;
}
function Dp() {
  const r = fa();
  return new Promise((e) => {
    switch (r) {
      case Xr.browser:
        e(hI());
        break;
      case Xr.reactNative:
        e(lI());
        break;
      case Xr.node:
        e(fI());
        break;
      default:
        e(!0);
    }
  });
}
function hI() {
  return fo() && (navigator == null ? void 0 : navigator.onLine);
}
async function lI() {
  if (lo() && typeof global < "u" && global != null && global.NetInfo) {
    const r = await (global == null ? void 0 : global.NetInfo.fetch());
    return r == null ? void 0 : r.isConnected;
  }
  return !0;
}
function fI() {
  return !0;
}
function dI(r) {
  switch (fa()) {
    case Xr.browser:
      pI(r);
      break;
    case Xr.reactNative:
      gI(r);
      break;
  }
}
function pI(r) {
  !lo() &&
    fo() &&
    (window.addEventListener("online", () => r(!0)),
    window.addEventListener("offline", () => r(!1)));
}
function gI(r) {
  lo() &&
    typeof global < "u" &&
    global != null &&
    global.NetInfo &&
    (global == null ||
      global.NetInfo.addEventListener((e) =>
        r(e == null ? void 0 : e.isConnected)
      ));
}
const Yh = {};
class ko {
  static get(e) {
    return Yh[e];
  }
  static set(e, t) {
    Yh[e] = t;
  }
  static delete(e) {
    delete Yh[e];
  }
}
const mI =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  vI =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  yI = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function wI(r, e) {
  if (
    r === "__proto__" ||
    (r === "constructor" && e && typeof e == "object" && "prototype" in e)
  ) {
    bI(r);
    return;
  }
  return e;
}
function bI(r) {
  console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`);
}
function Pc(r, e = {}) {
  if (typeof r != "string") return r;
  const t = r.trim();
  if (r[0] === '"' && r.at(-1) === '"' && !r.includes("\\"))
    return t.slice(1, -1);
  if (t.length <= 9) {
    const i = t.toLowerCase();
    if (i === "true") return !0;
    if (i === "false") return !1;
    if (i === "undefined") return;
    if (i === "null") return null;
    if (i === "nan") return Number.NaN;
    if (i === "infinity") return Number.POSITIVE_INFINITY;
    if (i === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!yI.test(r)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return r;
  }
  try {
    if (mI.test(r) || vI.test(r)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(r, wI);
    }
    return JSON.parse(r);
  } catch (i) {
    if (e.strict) throw i;
    return r;
  }
}
function _I(r) {
  return !r || typeof r.then != "function" ? Promise.resolve(r) : r;
}
function hr(r, ...e) {
  try {
    return _I(r(...e));
  } catch (t) {
    return Promise.reject(t);
  }
}
function EI(r) {
  const e = typeof r;
  return r === null || (e !== "object" && e !== "function");
}
function AI(r) {
  const e = Object.getPrototypeOf(r);
  return !e || e.isPrototypeOf(Object);
}
function $c(r) {
  if (EI(r)) return String(r);
  if (AI(r) || Array.isArray(r)) return JSON.stringify(r);
  if (typeof r.toJSON == "function") return $c(r.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function W1() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const Ml = "base64:";
function SI(r) {
  if (typeof r == "string") return r;
  W1();
  const e = Buffer.from(r).toString("base64");
  return Ml + e;
}
function II(r) {
  return typeof r != "string" || !r.startsWith(Ml)
    ? r
    : (W1(), Buffer.from(r.slice(Ml.length), "base64"));
}
function qr(r) {
  return r
    ? r
        .split("?")[0]
        .replace(/[/\\]/g, ":")
        .replace(/:+/g, ":")
        .replace(/^:|:$/g, "")
    : "";
}
function DI(...r) {
  return qr(r.join(":"));
}
function Mc(r) {
  return (r = qr(r)), r ? r + ":" : "";
}
const xI = "memory",
  PI = () => {
    const r = new Map();
    return {
      name: xI,
      options: {},
      hasItem(e) {
        return r.has(e);
      },
      getItem(e) {
        return r.get(e) ?? null;
      },
      getItemRaw(e) {
        return r.get(e) ?? null;
      },
      setItem(e, t) {
        r.set(e, t);
      },
      setItemRaw(e, t) {
        r.set(e, t);
      },
      removeItem(e) {
        r.delete(e);
      },
      getKeys() {
        return Array.from(r.keys());
      },
      clear() {
        r.clear();
      },
      dispose() {
        r.clear();
      },
    };
  };
function MI(r = {}) {
  const e = {
      mounts: { "": r.driver || PI() },
      mountpoints: [""],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    t = (d) => {
      for (const b of e.mountpoints)
        if (d.startsWith(b))
          return {
            base: b,
            relativeKey: d.slice(b.length),
            driver: e.mounts[b],
          };
      return { base: "", relativeKey: d, driver: e.mounts[""] };
    },
    i = (d, b) =>
      e.mountpoints
        .filter((E) => E.startsWith(d) || (b && d.startsWith(E)))
        .map((E) => ({
          relativeBase: d.length > E.length ? d.slice(E.length) : void 0,
          mountpoint: E,
          driver: e.mounts[E],
        })),
    s = (d, b) => {
      if (e.watching) {
        b = qr(b);
        for (const E of e.watchListeners) E(d, b);
      }
    },
    a = async () => {
      if (!e.watching) {
        e.watching = !0;
        for (const d in e.mounts) e.unwatch[d] = await xp(e.mounts[d], s, d);
      }
    },
    u = async () => {
      if (e.watching) {
        for (const d in e.unwatch) await e.unwatch[d]();
        (e.unwatch = {}), (e.watching = !1);
      }
    },
    h = (d, b, E) => {
      const D = new Map(),
        S = (M) => {
          let W = D.get(M.base);
          return (
            W ||
              ((W = { driver: M.driver, base: M.base, items: [] }),
              D.set(M.base, W)),
            W
          );
        };
      for (const M of d) {
        const W = typeof M == "string",
          G = qr(W ? M : M.key),
          ee = W ? void 0 : M.value,
          K = W || !M.options ? b : { ...b, ...M.options },
          V = t(G);
        S(V).items.push({
          key: G,
          value: ee,
          relativeKey: V.relativeKey,
          options: K,
        });
      }
      return Promise.all([...D.values()].map((M) => E(M))).then((M) =>
        M.flat()
      );
    },
    p = {
      hasItem(d, b = {}) {
        d = qr(d);
        const { relativeKey: E, driver: D } = t(d);
        return hr(D.hasItem, E, b);
      },
      getItem(d, b = {}) {
        d = qr(d);
        const { relativeKey: E, driver: D } = t(d);
        return hr(D.getItem, E, b).then((S) => Pc(S));
      },
      getItems(d, b) {
        return h(d, b, (E) =>
          E.driver.getItems
            ? hr(
                E.driver.getItems,
                E.items.map((D) => ({
                  key: D.relativeKey,
                  options: D.options,
                })),
                b
              ).then((D) =>
                D.map((S) => ({ key: DI(E.base, S.key), value: Pc(S.value) }))
              )
            : Promise.all(
                E.items.map((D) =>
                  hr(E.driver.getItem, D.relativeKey, D.options).then((S) => ({
                    key: D.key,
                    value: Pc(S),
                  }))
                )
              )
        );
      },
      getItemRaw(d, b = {}) {
        d = qr(d);
        const { relativeKey: E, driver: D } = t(d);
        return D.getItemRaw
          ? hr(D.getItemRaw, E, b)
          : hr(D.getItem, E, b).then((S) => II(S));
      },
      async setItem(d, b, E = {}) {
        if (b === void 0) return p.removeItem(d);
        d = qr(d);
        const { relativeKey: D, driver: S } = t(d);
        S.setItem &&
          (await hr(S.setItem, D, $c(b), E), S.watch || s("update", d));
      },
      async setItems(d, b) {
        await h(d, b, async (E) => {
          E.driver.setItems &&
            (await hr(
              E.driver.setItems,
              E.items.map((D) => ({
                key: D.relativeKey,
                value: $c(D.value),
                options: D.options,
              })),
              b
            )),
            E.driver.setItem &&
              (await Promise.all(
                E.items.map((D) =>
                  hr(E.driver.setItem, D.relativeKey, $c(D.value), D.options)
                )
              ));
        });
      },
      async setItemRaw(d, b, E = {}) {
        if (b === void 0) return p.removeItem(d, E);
        d = qr(d);
        const { relativeKey: D, driver: S } = t(d);
        if (S.setItemRaw) await hr(S.setItemRaw, D, b, E);
        else if (S.setItem) await hr(S.setItem, D, SI(b), E);
        else return;
        S.watch || s("update", d);
      },
      async removeItem(d, b = {}) {
        typeof b == "boolean" && (b = { removeMeta: b }), (d = qr(d));
        const { relativeKey: E, driver: D } = t(d);
        D.removeItem &&
          (await hr(D.removeItem, E, b),
          (b.removeMeta || b.removeMata) &&
            (await hr(D.removeItem, E + "$", b)),
          D.watch || s("remove", d));
      },
      async getMeta(d, b = {}) {
        typeof b == "boolean" && (b = { nativeOnly: b }), (d = qr(d));
        const { relativeKey: E, driver: D } = t(d),
          S = Object.create(null);
        if (
          (D.getMeta && Object.assign(S, await hr(D.getMeta, E, b)),
          !b.nativeOnly)
        ) {
          const M = await hr(D.getItem, E + "$", b).then((W) => Pc(W));
          M &&
            typeof M == "object" &&
            (typeof M.atime == "string" && (M.atime = new Date(M.atime)),
            typeof M.mtime == "string" && (M.mtime = new Date(M.mtime)),
            Object.assign(S, M));
        }
        return S;
      },
      setMeta(d, b, E = {}) {
        return this.setItem(d + "$", b, E);
      },
      removeMeta(d, b = {}) {
        return this.removeItem(d + "$", b);
      },
      async getKeys(d, b = {}) {
        d = Mc(d);
        const E = i(d, !0);
        let D = [];
        const S = [];
        for (const M of E) {
          const G = (await hr(M.driver.getKeys, M.relativeBase, b))
            .map((ee) => M.mountpoint + qr(ee))
            .filter((ee) => !D.some((K) => ee.startsWith(K)));
          S.push(...G),
            (D = [
              M.mountpoint,
              ...D.filter((ee) => !ee.startsWith(M.mountpoint)),
            ]);
        }
        return d
          ? S.filter((M) => M.startsWith(d) && !M.endsWith("$"))
          : S.filter((M) => !M.endsWith("$"));
      },
      async clear(d, b = {}) {
        (d = Mc(d)),
          await Promise.all(
            i(d, !1).map(async (E) => {
              if (E.driver.clear) return hr(E.driver.clear, E.relativeBase, b);
              if (E.driver.removeItem) {
                const D = await E.driver.getKeys(E.relativeBase || "", b);
                return Promise.all(D.map((S) => E.driver.removeItem(S, b)));
              }
            })
          );
      },
      async dispose() {
        await Promise.all(Object.values(e.mounts).map((d) => Pp(d)));
      },
      async watch(d) {
        return (
          await a(),
          e.watchListeners.push(d),
          async () => {
            (e.watchListeners = e.watchListeners.filter((b) => b !== d)),
              e.watchListeners.length === 0 && (await u());
          }
        );
      },
      async unwatch() {
        (e.watchListeners = []), await u();
      },
      mount(d, b) {
        if (((d = Mc(d)), d && e.mounts[d]))
          throw new Error(`already mounted at ${d}`);
        return (
          d &&
            (e.mountpoints.push(d),
            e.mountpoints.sort((E, D) => D.length - E.length)),
          (e.mounts[d] = b),
          e.watching &&
            Promise.resolve(xp(b, s, d))
              .then((E) => {
                e.unwatch[d] = E;
              })
              .catch(console.error),
          p
        );
      },
      async unmount(d, b = !0) {
        (d = Mc(d)),
          !(!d || !e.mounts[d]) &&
            (e.watching &&
              d in e.unwatch &&
              (e.unwatch[d](), delete e.unwatch[d]),
            b && (await Pp(e.mounts[d])),
            (e.mountpoints = e.mountpoints.filter((E) => E !== d)),
            delete e.mounts[d]);
      },
      getMount(d = "") {
        d = qr(d) + ":";
        const b = t(d);
        return { driver: b.driver, base: b.base };
      },
      getMounts(d = "", b = {}) {
        return (
          (d = qr(d)),
          i(d, b.parents).map((D) => ({ driver: D.driver, base: D.mountpoint }))
        );
      },
    };
  return p;
}
function xp(r, e, t) {
  return r.watch ? r.watch((i, s) => e(i, t + s)) : () => {};
}
async function Pp(r) {
  typeof r.dispose == "function" && (await hr(r.dispose));
}
function xs(r) {
  return new Promise((e, t) => {
    (r.oncomplete = r.onsuccess = () => e(r.result)),
      (r.onabort = r.onerror = () => t(r.error));
  });
}
function Y1(r, e) {
  const t = indexedDB.open(r);
  t.onupgradeneeded = () => t.result.createObjectStore(e);
  const i = xs(t);
  return (s, a) => i.then((u) => a(u.transaction(e, s).objectStore(e)));
}
let Qh;
function ga() {
  return Qh || (Qh = Y1("keyval-store", "keyval")), Qh;
}
function Mp(r, e = ga()) {
  return e("readonly", (t) => xs(t.get(r)));
}
function CI(r, e, t = ga()) {
  return t("readwrite", (i) => (i.put(e, r), xs(i.transaction)));
}
function OI(r, e = ga()) {
  return e("readwrite", (t) => (t.delete(r), xs(t.transaction)));
}
function NI(r = ga()) {
  return r("readwrite", (e) => (e.clear(), xs(e.transaction)));
}
function RI(r, e) {
  return (
    (r.openCursor().onsuccess = function () {
      this.result && (e(this.result), this.result.continue());
    }),
    xs(r.transaction)
  );
}
function TI(r = ga()) {
  return r("readonly", (e) => {
    if (e.getAllKeys) return xs(e.getAllKeys());
    const t = [];
    return RI(e, (i) => t.push(i.key)).then(() => t);
  });
}
const UI = (r) =>
    JSON.stringify(r, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  BI = (r) => {
    const e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = r.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (i, s) =>
      typeof s == "string" && s.match(/^\d+n$/)
        ? BigInt(s.substring(0, s.length - 1))
        : s
    );
  };
function ma(r) {
  if (typeof r != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof r}`);
  try {
    return BI(r);
  } catch {
    return r;
  }
}
function Mn(r) {
  return typeof r == "string" ? r : UI(r) || "";
}
const LI = "idb-keyval";
var qI = (r = {}) => {
  const e = r.base && r.base.length > 0 ? `${r.base}:` : "",
    t = (s) => e + s;
  let i;
  return (
    r.dbName && r.storeName && (i = Y1(r.dbName, r.storeName)),
    {
      name: LI,
      options: r,
      async hasItem(s) {
        return !(typeof (await Mp(t(s), i)) > "u");
      },
      async getItem(s) {
        return (await Mp(t(s), i)) ?? null;
      },
      setItem(s, a) {
        return CI(t(s), a, i);
      },
      removeItem(s) {
        return OI(t(s), i);
      },
      getKeys() {
        return TI(i);
      },
      clear() {
        return NI(i);
      },
    }
  );
};
const jI = "WALLET_CONNECT_V2_INDEXED_DB",
  $I = "keyvaluestorage";
let FI = class {
  constructor() {
    this.indexedDb = MI({ driver: qI({ dbName: jI, storeName: $I }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(
      (e) => [e.key, e.value]
    );
  }
  async getItem(e) {
    const t = await this.indexedDb.getItem(e);
    if (t !== null) return t;
  }
  async setItem(e, t) {
    await this.indexedDb.setItem(e, Mn(t));
  }
  async removeItem(e) {
    await this.indexedDb.removeItem(e);
  }
};
var Jh =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Fc = { exports: {} };
(function () {
  let r;
  function e() {}
  (r = e),
    (r.prototype.getItem = function (t) {
      return this.hasOwnProperty(t) ? String(this[t]) : null;
    }),
    (r.prototype.setItem = function (t, i) {
      this[t] = String(i);
    }),
    (r.prototype.removeItem = function (t) {
      delete this[t];
    }),
    (r.prototype.clear = function () {
      const t = this;
      Object.keys(t).forEach(function (i) {
        (t[i] = void 0), delete t[i];
      });
    }),
    (r.prototype.key = function (t) {
      return (t = t || 0), Object.keys(this)[t];
    }),
    r.prototype.__defineGetter__("length", function () {
      return Object.keys(this).length;
    }),
    typeof Jh < "u" && Jh.localStorage
      ? (Fc.exports = Jh.localStorage)
      : typeof window < "u" && window.localStorage
      ? (Fc.exports = window.localStorage)
      : (Fc.exports = new e());
})();
function zI(r) {
  var e;
  return [r[0], ma((e = r[1]) != null ? e : "")];
}
let kI = class {
  constructor() {
    this.localStorage = Fc.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(zI);
  }
  async getItem(e) {
    const t = this.localStorage.getItem(e);
    if (t !== null) return ma(t);
  }
  async setItem(e, t) {
    this.localStorage.setItem(e, Mn(t));
  }
  async removeItem(e) {
    this.localStorage.removeItem(e);
  }
};
const HI = "wc_storage_version",
  Cp = 1,
  KI = async (r, e, t) => {
    const i = HI,
      s = await e.getItem(i);
    if (s && s >= Cp) {
      t(e);
      return;
    }
    const a = await r.getKeys();
    if (!a.length) {
      t(e);
      return;
    }
    const u = [];
    for (; a.length; ) {
      const h = a.shift();
      if (!h) continue;
      const p = h.toLowerCase();
      if (
        p.includes("wc@") ||
        p.includes("walletconnect") ||
        p.includes("wc_") ||
        p.includes("wallet_connect")
      ) {
        const d = await r.getItem(h);
        await e.setItem(h, d), u.push(h);
      }
    }
    await e.setItem(i, Cp), t(e), VI(r, u);
  },
  VI = async (r, e) => {
    e.length &&
      e.forEach(async (t) => {
        await r.removeItem(t);
      });
  };
let GI = class {
    constructor() {
      (this.initialized = !1),
        (this.setInitialized = (t) => {
          (this.storage = t), (this.initialized = !0);
        });
      const e = new kI();
      this.storage = e;
      try {
        const t = new FI();
        KI(e, t, this.setInitialized);
      } catch {
        this.initialized = !0;
      }
    }
    async getKeys() {
      return await this.initialize(), this.storage.getKeys();
    }
    async getEntries() {
      return await this.initialize(), this.storage.getEntries();
    }
    async getItem(e) {
      return await this.initialize(), this.storage.getItem(e);
    }
    async setItem(e, t) {
      return await this.initialize(), this.storage.setItem(e, t);
    }
    async removeItem(e) {
      return await this.initialize(), this.storage.removeItem(e);
    }
    async initialize() {
      this.initialized ||
        (await new Promise((e) => {
          const t = setInterval(() => {
            this.initialized && (clearInterval(t), e());
          }, 20);
        }));
    }
  },
  Ps = class {},
  WI = class extends Ps {
    constructor(e) {
      super();
    }
  };
const Op = ye.FIVE_SECONDS,
  va = { pulse: "heartbeat_pulse" };
let YI = class Q1 extends WI {
  constructor(e) {
    super(e),
      (this.events = new Ai.EventEmitter()),
      (this.interval = Op),
      (this.interval = (e == null ? void 0 : e.interval) || Op);
  }
  static async init(e) {
    const t = new Q1(e);
    return await t.init(), t;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async initialize() {
    this.intervalRef = setInterval(
      () => this.pulse(),
      ye.toMiliseconds(this.interval)
    );
  }
  pulse() {
    this.events.emit(va.pulse);
  }
};
function QI(r) {
  try {
    return JSON.stringify(r);
  } catch {
    return '"[Circular]"';
  }
}
var JI = XI;
function XI(r, e, t) {
  var i = (t && t.stringify) || QI,
    s = 1;
  if (typeof r == "object" && r !== null) {
    var a = e.length + s;
    if (a === 1) return r;
    var u = new Array(a);
    u[0] = i(r);
    for (var h = 1; h < a; h++) u[h] = i(e[h]);
    return u.join(" ");
  }
  if (typeof r != "string") return r;
  var p = e.length;
  if (p === 0) return r;
  for (
    var d = "", b = 1 - s, E = -1, D = (r && r.length) || 0, S = 0;
    S < D;

  ) {
    if (r.charCodeAt(S) === 37 && S + 1 < D) {
      switch (((E = E > -1 ? E : 0), r.charCodeAt(S + 1))) {
        case 100:
        case 102:
          if (b >= p || e[b] == null) break;
          E < S && (d += r.slice(E, S)), (d += Number(e[b])), (E = S + 2), S++;
          break;
        case 105:
          if (b >= p || e[b] == null) break;
          E < S && (d += r.slice(E, S)),
            (d += Math.floor(Number(e[b]))),
            (E = S + 2),
            S++;
          break;
        case 79:
        case 111:
        case 106:
          if (b >= p || e[b] === void 0) break;
          E < S && (d += r.slice(E, S));
          var M = typeof e[b];
          if (M === "string") {
            (d += "'" + e[b] + "'"), (E = S + 2), S++;
            break;
          }
          if (M === "function") {
            (d += e[b].name || "<anonymous>"), (E = S + 2), S++;
            break;
          }
          (d += i(e[b])), (E = S + 2), S++;
          break;
        case 115:
          if (b >= p) break;
          E < S && (d += r.slice(E, S)), (d += String(e[b])), (E = S + 2), S++;
          break;
        case 37:
          E < S && (d += r.slice(E, S)), (d += "%"), (E = S + 2), S++, b--;
          break;
      }
      ++b;
    }
    ++S;
  }
  return E === -1 ? r : (E < D && (d += r.slice(E)), d);
}
const Np = JI;
var Zs = cn;
const aa = c4().console || {},
  ZI = {
    mapHttpRequest: Cc,
    mapHttpResponse: Cc,
    wrapRequestSerializer: Xh,
    wrapResponseSerializer: Xh,
    wrapErrorSerializer: Xh,
    req: Cc,
    res: Cc,
    err: n4,
  };
function e4(r, e) {
  return Array.isArray(r)
    ? r.filter(function (i) {
        return i !== "!stdSerializers.err";
      })
    : r === !0
    ? Object.keys(e)
    : !1;
}
function cn(r) {
  (r = r || {}), (r.browser = r.browser || {});
  const e = r.browser.transmit;
  if (e && typeof e.send != "function")
    throw Error("pino: transmit option must have a send function");
  const t = r.browser.write || aa;
  r.browser.write && (r.browser.asObject = !0);
  const i = r.serializers || {},
    s = e4(r.browser.serialize, i);
  let a = r.browser.serialize;
  Array.isArray(r.browser.serialize) &&
    r.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
    (a = !1);
  const u = ["error", "fatal", "warn", "info", "debug", "trace"];
  typeof t == "function" &&
    (t.error = t.fatal = t.warn = t.info = t.debug = t.trace = t),
    r.enabled === !1 && (r.level = "silent");
  const h = r.level || "info",
    p = Object.create(t);
  p.log || (p.log = ca),
    Object.defineProperty(p, "levelVal", { get: b }),
    Object.defineProperty(p, "level", { get: E, set: D });
  const d = {
    transmit: e,
    serialize: s,
    asObject: r.browser.asObject,
    levels: u,
    timestamp: s4(r),
  };
  (p.levels = cn.levels),
    (p.level = h),
    (p.setMaxListeners =
      p.getMaxListeners =
      p.emit =
      p.addListener =
      p.on =
      p.prependListener =
      p.once =
      p.prependOnceListener =
      p.removeListener =
      p.removeAllListeners =
      p.listeners =
      p.listenerCount =
      p.eventNames =
      p.write =
      p.flush =
        ca),
    (p.serializers = i),
    (p._serialize = s),
    (p._stdErrSerialize = a),
    (p.child = S),
    e && (p._logEvent = Cl());
  function b() {
    return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
  }
  function E() {
    return this._level;
  }
  function D(M) {
    if (M !== "silent" && !this.levels.values[M])
      throw Error("unknown level " + M);
    (this._level = M),
      Ys(d, p, "error", "log"),
      Ys(d, p, "fatal", "error"),
      Ys(d, p, "warn", "error"),
      Ys(d, p, "info", "log"),
      Ys(d, p, "debug", "log"),
      Ys(d, p, "trace", "log");
  }
  function S(M, W) {
    if (!M) throw new Error("missing bindings for child Pino");
    (W = W || {}), s && M.serializers && (W.serializers = M.serializers);
    const G = W.serializers;
    if (s && G) {
      var ee = Object.assign({}, i, G),
        K = r.browser.serialize === !0 ? Object.keys(ee) : s;
      delete M.serializers, fu([M], K, ee, this._stdErrSerialize);
    }
    function V(q) {
      (this._childLevel = (q._childLevel | 0) + 1),
        (this.error = Qs(q, M, "error")),
        (this.fatal = Qs(q, M, "fatal")),
        (this.warn = Qs(q, M, "warn")),
        (this.info = Qs(q, M, "info")),
        (this.debug = Qs(q, M, "debug")),
        (this.trace = Qs(q, M, "trace")),
        ee && ((this.serializers = ee), (this._serialize = K)),
        e && (this._logEvent = Cl([].concat(q._logEvent.bindings, M)));
    }
    return (V.prototype = this), new V(this);
  }
  return p;
}
cn.levels = {
  values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
  labels: {
    10: "trace",
    20: "debug",
    30: "info",
    40: "warn",
    50: "error",
    60: "fatal",
  },
};
cn.stdSerializers = ZI;
cn.stdTimeFunctions = Object.assign(
  {},
  { nullTime: J1, epochTime: X1, unixTime: o4, isoTime: a4 }
);
function Ys(r, e, t, i) {
  const s = Object.getPrototypeOf(e);
  (e[t] =
    e.levelVal > e.levels.values[t] ? ca : s[t] ? s[t] : aa[t] || aa[i] || ca),
    t4(r, e, t);
}
function t4(r, e, t) {
  (!r.transmit && e[t] === ca) ||
    (e[t] = (function (i) {
      return function () {
        const a = r.timestamp(),
          u = new Array(arguments.length),
          h =
            Object.getPrototypeOf && Object.getPrototypeOf(this) === aa
              ? aa
              : this;
        for (var p = 0; p < u.length; p++) u[p] = arguments[p];
        if (
          (r.serialize &&
            !r.asObject &&
            fu(u, this._serialize, this.serializers, this._stdErrSerialize),
          r.asObject ? i.call(h, r4(this, t, u, a)) : i.apply(h, u),
          r.transmit)
        ) {
          const d = r.transmit.level || e.level,
            b = cn.levels.values[d],
            E = cn.levels.values[t];
          if (E < b) return;
          i4(
            this,
            {
              ts: a,
              methodLevel: t,
              methodValue: E,
              transmitLevel: d,
              transmitValue: cn.levels.values[r.transmit.level || e.level],
              send: r.transmit.send,
              val: e.levelVal,
            },
            u
          );
        }
      };
    })(e[t]));
}
function r4(r, e, t, i) {
  r._serialize && fu(t, r._serialize, r.serializers, r._stdErrSerialize);
  const s = t.slice();
  let a = s[0];
  const u = {};
  i && (u.time = i), (u.level = cn.levels.values[e]);
  let h = (r._childLevel | 0) + 1;
  if ((h < 1 && (h = 1), a !== null && typeof a == "object")) {
    for (; h-- && typeof s[0] == "object"; ) Object.assign(u, s.shift());
    a = s.length ? Np(s.shift(), s) : void 0;
  } else typeof a == "string" && (a = Np(s.shift(), s));
  return a !== void 0 && (u.msg = a), u;
}
function fu(r, e, t, i) {
  for (const s in r)
    if (i && r[s] instanceof Error) r[s] = cn.stdSerializers.err(r[s]);
    else if (typeof r[s] == "object" && !Array.isArray(r[s]))
      for (const a in r[s])
        e && e.indexOf(a) > -1 && a in t && (r[s][a] = t[a](r[s][a]));
}
function Qs(r, e, t) {
  return function () {
    const i = new Array(1 + arguments.length);
    i[0] = e;
    for (var s = 1; s < i.length; s++) i[s] = arguments[s - 1];
    return r[t].apply(this, i);
  };
}
function i4(r, e, t) {
  const i = e.send,
    s = e.ts,
    a = e.methodLevel,
    u = e.methodValue,
    h = e.val,
    p = r._logEvent.bindings;
  fu(
    t,
    r._serialize || Object.keys(r.serializers),
    r.serializers,
    r._stdErrSerialize === void 0 ? !0 : r._stdErrSerialize
  ),
    (r._logEvent.ts = s),
    (r._logEvent.messages = t.filter(function (d) {
      return p.indexOf(d) === -1;
    })),
    (r._logEvent.level.label = a),
    (r._logEvent.level.value = u),
    i(a, r._logEvent, h),
    (r._logEvent = Cl(p));
}
function Cl(r) {
  return {
    ts: 0,
    messages: [],
    bindings: r || [],
    level: { label: "", value: 0 },
  };
}
function n4(r) {
  const e = { type: r.constructor.name, msg: r.message, stack: r.stack };
  for (const t in r) e[t] === void 0 && (e[t] = r[t]);
  return e;
}
function s4(r) {
  return typeof r.timestamp == "function"
    ? r.timestamp
    : r.timestamp === !1
    ? J1
    : X1;
}
function Cc() {
  return {};
}
function Xh(r) {
  return r;
}
function ca() {}
function J1() {
  return !1;
}
function X1() {
  return Date.now();
}
function o4() {
  return Math.round(Date.now() / 1e3);
}
function a4() {
  return new Date(Date.now()).toISOString();
}
function c4() {
  function r(e) {
    return typeof e < "u" && e;
  }
  try {
    return (
      typeof globalThis < "u" ||
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function () {
            return delete Object.prototype.globalThis, (this.globalThis = this);
          },
          configurable: !0,
        }),
      globalThis
    );
  } catch {
    return r(self) || r(window) || r(this) || {};
  }
}
const ya = $l(Zs),
  u4 = { level: "info" },
  wa = "custom_context",
  sf = 1e3 * 1024;
let h4 = class {
    constructor(e) {
      (this.nodeValue = e),
        (this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length),
        (this.next = null);
    }
    get value() {
      return this.nodeValue;
    }
    get size() {
      return this.sizeInBytes;
    }
  },
  Rp = class {
    constructor(e) {
      (this.head = null),
        (this.tail = null),
        (this.lengthInNodes = 0),
        (this.maxSizeInBytes = e),
        (this.sizeInBytes = 0);
    }
    append(e) {
      const t = new h4(e);
      if (t.size > this.maxSizeInBytes)
        throw new Error(
          `[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`
        );
      for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
      this.head
        ? (this.tail && (this.tail.next = t), (this.tail = t))
        : ((this.head = t), (this.tail = t)),
        this.lengthInNodes++,
        (this.sizeInBytes += t.size);
    }
    shift() {
      if (!this.head) return;
      const e = this.head;
      (this.head = this.head.next),
        this.head || (this.tail = null),
        this.lengthInNodes--,
        (this.sizeInBytes -= e.size);
    }
    toArray() {
      const e = [];
      let t = this.head;
      for (; t !== null; ) e.push(t.value), (t = t.next);
      return e;
    }
    get length() {
      return this.lengthInNodes;
    }
    get size() {
      return this.sizeInBytes;
    }
    toOrderedArray() {
      return Array.from(this);
    }
    [Symbol.iterator]() {
      let e = this.head;
      return {
        next: () => {
          if (!e) return { done: !0, value: null };
          const t = e.value;
          return (e = e.next), { done: !1, value: t };
        },
      };
    }
  },
  Z1 = class {
    constructor(e, t = sf) {
      (this.level = e ?? "error"),
        (this.levelValue = Zs.levels.values[this.level]),
        (this.MAX_LOG_SIZE_IN_BYTES = t),
        (this.logs = new Rp(this.MAX_LOG_SIZE_IN_BYTES));
    }
    forwardToConsole(e, t) {
      t === Zs.levels.values.error
        ? console.error(e)
        : t === Zs.levels.values.warn
        ? console.warn(e)
        : t === Zs.levels.values.debug
        ? console.debug(e)
        : t === Zs.levels.values.trace
        ? console.trace(e)
        : console.log(e);
    }
    appendToLogs(e) {
      this.logs.append(Mn({ timestamp: new Date().toISOString(), log: e }));
      const t = typeof e == "string" ? JSON.parse(e).level : e.level;
      t >= this.levelValue && this.forwardToConsole(e, t);
    }
    getLogs() {
      return this.logs;
    }
    clearLogs() {
      this.logs = new Rp(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
      return Array.from(this.logs);
    }
    logsToBlob(e) {
      const t = this.getLogArray();
      return (
        t.push(Mn({ extraMetadata: e })),
        new Blob(t, { type: "application/json" })
      );
    }
  },
  l4 = class {
    constructor(e, t = sf) {
      this.baseChunkLogger = new Z1(e, t);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
      const t = URL.createObjectURL(this.logsToBlob(e)),
        i = document.createElement("a");
      (i.href = t),
        (i.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
        document.body.appendChild(i),
        i.click(),
        document.body.removeChild(i),
        URL.revokeObjectURL(t);
    }
  },
  f4 = class {
    constructor(e, t = sf) {
      this.baseChunkLogger = new Z1(e, t);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
  };
var d4 = Object.defineProperty,
  p4 = Object.defineProperties,
  g4 = Object.getOwnPropertyDescriptors,
  Tp = Object.getOwnPropertySymbols,
  m4 = Object.prototype.hasOwnProperty,
  v4 = Object.prototype.propertyIsEnumerable,
  Up = (r, e, t) =>
    e in r
      ? d4(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Zc = (r, e) => {
    for (var t in e || (e = {})) m4.call(e, t) && Up(r, t, e[t]);
    if (Tp) for (var t of Tp(e)) v4.call(e, t) && Up(r, t, e[t]);
    return r;
  },
  eu = (r, e) => p4(r, g4(e));
function du(r) {
  return eu(Zc({}, r), { level: (r == null ? void 0 : r.level) || u4.level });
}
function y4(r, e = wa) {
  return r[e] || "";
}
function w4(r, e, t = wa) {
  return (r[t] = e), r;
}
function Hr(r, e = wa) {
  let t = "";
  return (
    typeof r.bindings > "u" ? (t = y4(r, e)) : (t = r.bindings().context || ""),
    t
  );
}
function b4(r, e, t = wa) {
  const i = Hr(r, t);
  return i.trim() ? `${i}/${e}` : e;
}
function Kr(r, e, t = wa) {
  const i = b4(r, e, t),
    s = r.child({ context: i });
  return w4(s, i, t);
}
function _4(r) {
  var e, t;
  const i = new l4((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
  return {
    logger: ya(
      eu(Zc({}, r.opts), {
        level: "trace",
        browser: eu(Zc({}, (t = r.opts) == null ? void 0 : t.browser), {
          write: (s) => i.write(s),
        }),
      })
    ),
    chunkLoggerController: i,
  };
}
function E4(r) {
  var e;
  const t = new f4((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
  return {
    logger: ya(eu(Zc({}, r.opts), { level: "trace" }), t),
    chunkLoggerController: t,
  };
}
function A4(r) {
  return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string"
    ? { logger: r.loggerOverride, chunkLoggerController: null }
    : typeof window < "u"
    ? _4(r)
    : E4(r);
}
class S4 extends Ps {
  constructor(e) {
    super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
  }
}
let I4 = class extends Ps {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t), (this.records = new Map());
    }
  },
  D4 = class {
    constructor(e, t) {
      (this.logger = e), (this.core = t);
    }
  },
  x4 = class extends Ps {
    constructor(e, t) {
      super(), (this.relayer = e), (this.logger = t);
    }
  },
  P4 = class extends Ps {
    constructor(e) {
      super();
    }
  },
  M4 = class {
    constructor(e, t, i, s) {
      (this.core = e), (this.logger = t), (this.name = i);
    }
  },
  C4 = class extends Ps {
    constructor(e, t) {
      super(), (this.relayer = e), (this.logger = t);
    }
  },
  O4 = class extends Ps {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t);
    }
  },
  N4 = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  R4 = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  T4 = class {
    constructor(e) {
      (this.opts = e), (this.protocol = "wc"), (this.version = 2);
    }
  },
  U4 = class {
    constructor(e) {
      this.client = e;
    }
  };
var of = {},
  em = {};
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  var e = ot,
    t = ti;
  (r.DIGEST_LENGTH = 64), (r.BLOCK_SIZE = 128);
  var i = (function () {
    function h() {
      (this.digestLength = r.DIGEST_LENGTH),
        (this.blockSize = r.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (h.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (h.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (h.prototype.clean = function () {
        t.wipe(this._buffer),
          t.wipe(this._tempHi),
          t.wipe(this._tempLo),
          this.reset();
      }),
      (h.prototype.update = function (p, d) {
        if ((d === void 0 && (d = p.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var b = 0;
        if (((this._bytesHashed += d), this._bufferLength > 0)) {
          for (; this._bufferLength < r.BLOCK_SIZE && d > 0; )
            (this._buffer[this._bufferLength++] = p[b++]), d--;
          this._bufferLength === this.blockSize &&
            (a(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize
            ),
            (this._bufferLength = 0));
        }
        for (
          d >= this.blockSize &&
          ((b = a(
            this._tempHi,
            this._tempLo,
            this._stateHi,
            this._stateLo,
            p,
            b,
            d
          )),
          (d %= this.blockSize));
          d > 0;

        )
          (this._buffer[this._bufferLength++] = p[b++]), d--;
        return this;
      }),
      (h.prototype.finish = function (p) {
        if (!this._finished) {
          var d = this._bytesHashed,
            b = this._bufferLength,
            E = (d / 536870912) | 0,
            D = d << 3,
            S = d % 128 < 112 ? 128 : 256;
          this._buffer[b] = 128;
          for (var M = b + 1; M < S - 8; M++) this._buffer[M] = 0;
          e.writeUint32BE(E, this._buffer, S - 8),
            e.writeUint32BE(D, this._buffer, S - 4),
            a(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              S
            ),
            (this._finished = !0);
        }
        for (var M = 0; M < this.digestLength / 8; M++)
          e.writeUint32BE(this._stateHi[M], p, M * 8),
            e.writeUint32BE(this._stateLo[M], p, M * 8 + 4);
        return this;
      }),
      (h.prototype.digest = function () {
        var p = new Uint8Array(this.digestLength);
        return this.finish(p), p;
      }),
      (h.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (h.prototype.restoreState = function (p) {
        return (
          this._stateHi.set(p.stateHi),
          this._stateLo.set(p.stateLo),
          (this._bufferLength = p.bufferLength),
          p.buffer && this._buffer.set(p.buffer),
          (this._bytesHashed = p.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (h.prototype.cleanSavedState = function (p) {
        t.wipe(p.stateHi),
          t.wipe(p.stateLo),
          p.buffer && t.wipe(p.buffer),
          (p.bufferLength = 0),
          (p.bytesHashed = 0);
      }),
      h
    );
  })();
  r.SHA512 = i;
  var s = new Int32Array([
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ]);
  function a(h, p, d, b, E, D, S) {
    for (
      var M = d[0],
        W = d[1],
        G = d[2],
        ee = d[3],
        K = d[4],
        V = d[5],
        q = d[6],
        F = d[7],
        z = b[0],
        y = b[1],
        T = b[2],
        ne = b[3],
        fe = b[4],
        le = b[5],
        me = b[6],
        f = b[7],
        l,
        w,
        I,
        P,
        O,
        U,
        x,
        g;
      S >= 128;

    ) {
      for (var N = 0; N < 16; N++) {
        var ie = 8 * N + D;
        (h[N] = e.readUint32BE(E, ie)), (p[N] = e.readUint32BE(E, ie + 4));
      }
      for (var N = 0; N < 80; N++) {
        var de = M,
          _ = W,
          Z = G,
          L = ee,
          j = K,
          k = V,
          m = q,
          B = F,
          te = z,
          ue = y,
          ae = T,
          Pe = ne,
          Ce = fe,
          Ie = le,
          Et = me,
          Fe = f;
        if (
          ((l = F),
          (w = f),
          (O = w & 65535),
          (U = w >>> 16),
          (x = l & 65535),
          (g = l >>> 16),
          (l =
            ((K >>> 14) | (fe << 18)) ^
            ((K >>> 18) | (fe << 14)) ^
            ((fe >>> 9) | (K << 23))),
          (w =
            ((fe >>> 14) | (K << 18)) ^
            ((fe >>> 18) | (K << 14)) ^
            ((K >>> 9) | (fe << 23))),
          (O += w & 65535),
          (U += w >>> 16),
          (x += l & 65535),
          (g += l >>> 16),
          (l = (K & V) ^ (~K & q)),
          (w = (fe & le) ^ (~fe & me)),
          (O += w & 65535),
          (U += w >>> 16),
          (x += l & 65535),
          (g += l >>> 16),
          (l = s[N * 2]),
          (w = s[N * 2 + 1]),
          (O += w & 65535),
          (U += w >>> 16),
          (x += l & 65535),
          (g += l >>> 16),
          (l = h[N % 16]),
          (w = p[N % 16]),
          (O += w & 65535),
          (U += w >>> 16),
          (x += l & 65535),
          (g += l >>> 16),
          (U += O >>> 16),
          (x += U >>> 16),
          (g += x >>> 16),
          (I = (x & 65535) | (g << 16)),
          (P = (O & 65535) | (U << 16)),
          (l = I),
          (w = P),
          (O = w & 65535),
          (U = w >>> 16),
          (x = l & 65535),
          (g = l >>> 16),
          (l =
            ((M >>> 28) | (z << 4)) ^
            ((z >>> 2) | (M << 30)) ^
            ((z >>> 7) | (M << 25))),
          (w =
            ((z >>> 28) | (M << 4)) ^
            ((M >>> 2) | (z << 30)) ^
            ((M >>> 7) | (z << 25))),
          (O += w & 65535),
          (U += w >>> 16),
          (x += l & 65535),
          (g += l >>> 16),
          (l = (M & W) ^ (M & G) ^ (W & G)),
          (w = (z & y) ^ (z & T) ^ (y & T)),
          (O += w & 65535),
          (U += w >>> 16),
          (x += l & 65535),
          (g += l >>> 16),
          (U += O >>> 16),
          (x += U >>> 16),
          (g += x >>> 16),
          (B = (x & 65535) | (g << 16)),
          (Fe = (O & 65535) | (U << 16)),
          (l = L),
          (w = Pe),
          (O = w & 65535),
          (U = w >>> 16),
          (x = l & 65535),
          (g = l >>> 16),
          (l = I),
          (w = P),
          (O += w & 65535),
          (U += w >>> 16),
          (x += l & 65535),
          (g += l >>> 16),
          (U += O >>> 16),
          (x += U >>> 16),
          (g += x >>> 16),
          (L = (x & 65535) | (g << 16)),
          (Pe = (O & 65535) | (U << 16)),
          (W = de),
          (G = _),
          (ee = Z),
          (K = L),
          (V = j),
          (q = k),
          (F = m),
          (M = B),
          (y = te),
          (T = ue),
          (ne = ae),
          (fe = Pe),
          (le = Ce),
          (me = Ie),
          (f = Et),
          (z = Fe),
          N % 16 === 15)
        )
          for (var ie = 0; ie < 16; ie++)
            (l = h[ie]),
              (w = p[ie]),
              (O = w & 65535),
              (U = w >>> 16),
              (x = l & 65535),
              (g = l >>> 16),
              (l = h[(ie + 9) % 16]),
              (w = p[(ie + 9) % 16]),
              (O += w & 65535),
              (U += w >>> 16),
              (x += l & 65535),
              (g += l >>> 16),
              (I = h[(ie + 1) % 16]),
              (P = p[(ie + 1) % 16]),
              (l =
                ((I >>> 1) | (P << 31)) ^ ((I >>> 8) | (P << 24)) ^ (I >>> 7)),
              (w =
                ((P >>> 1) | (I << 31)) ^
                ((P >>> 8) | (I << 24)) ^
                ((P >>> 7) | (I << 25))),
              (O += w & 65535),
              (U += w >>> 16),
              (x += l & 65535),
              (g += l >>> 16),
              (I = h[(ie + 14) % 16]),
              (P = p[(ie + 14) % 16]),
              (l =
                ((I >>> 19) | (P << 13)) ^ ((P >>> 29) | (I << 3)) ^ (I >>> 6)),
              (w =
                ((P >>> 19) | (I << 13)) ^
                ((I >>> 29) | (P << 3)) ^
                ((P >>> 6) | (I << 26))),
              (O += w & 65535),
              (U += w >>> 16),
              (x += l & 65535),
              (g += l >>> 16),
              (U += O >>> 16),
              (x += U >>> 16),
              (g += x >>> 16),
              (h[ie] = (x & 65535) | (g << 16)),
              (p[ie] = (O & 65535) | (U << 16));
      }
      (l = M),
        (w = z),
        (O = w & 65535),
        (U = w >>> 16),
        (x = l & 65535),
        (g = l >>> 16),
        (l = d[0]),
        (w = b[0]),
        (O += w & 65535),
        (U += w >>> 16),
        (x += l & 65535),
        (g += l >>> 16),
        (U += O >>> 16),
        (x += U >>> 16),
        (g += x >>> 16),
        (d[0] = M = (x & 65535) | (g << 16)),
        (b[0] = z = (O & 65535) | (U << 16)),
        (l = W),
        (w = y),
        (O = w & 65535),
        (U = w >>> 16),
        (x = l & 65535),
        (g = l >>> 16),
        (l = d[1]),
        (w = b[1]),
        (O += w & 65535),
        (U += w >>> 16),
        (x += l & 65535),
        (g += l >>> 16),
        (U += O >>> 16),
        (x += U >>> 16),
        (g += x >>> 16),
        (d[1] = W = (x & 65535) | (g << 16)),
        (b[1] = y = (O & 65535) | (U << 16)),
        (l = G),
        (w = T),
        (O = w & 65535),
        (U = w >>> 16),
        (x = l & 65535),
        (g = l >>> 16),
        (l = d[2]),
        (w = b[2]),
        (O += w & 65535),
        (U += w >>> 16),
        (x += l & 65535),
        (g += l >>> 16),
        (U += O >>> 16),
        (x += U >>> 16),
        (g += x >>> 16),
        (d[2] = G = (x & 65535) | (g << 16)),
        (b[2] = T = (O & 65535) | (U << 16)),
        (l = ee),
        (w = ne),
        (O = w & 65535),
        (U = w >>> 16),
        (x = l & 65535),
        (g = l >>> 16),
        (l = d[3]),
        (w = b[3]),
        (O += w & 65535),
        (U += w >>> 16),
        (x += l & 65535),
        (g += l >>> 16),
        (U += O >>> 16),
        (x += U >>> 16),
        (g += x >>> 16),
        (d[3] = ee = (x & 65535) | (g << 16)),
        (b[3] = ne = (O & 65535) | (U << 16)),
        (l = K),
        (w = fe),
        (O = w & 65535),
        (U = w >>> 16),
        (x = l & 65535),
        (g = l >>> 16),
        (l = d[4]),
        (w = b[4]),
        (O += w & 65535),
        (U += w >>> 16),
        (x += l & 65535),
        (g += l >>> 16),
        (U += O >>> 16),
        (x += U >>> 16),
        (g += x >>> 16),
        (d[4] = K = (x & 65535) | (g << 16)),
        (b[4] = fe = (O & 65535) | (U << 16)),
        (l = V),
        (w = le),
        (O = w & 65535),
        (U = w >>> 16),
        (x = l & 65535),
        (g = l >>> 16),
        (l = d[5]),
        (w = b[5]),
        (O += w & 65535),
        (U += w >>> 16),
        (x += l & 65535),
        (g += l >>> 16),
        (U += O >>> 16),
        (x += U >>> 16),
        (g += x >>> 16),
        (d[5] = V = (x & 65535) | (g << 16)),
        (b[5] = le = (O & 65535) | (U << 16)),
        (l = q),
        (w = me),
        (O = w & 65535),
        (U = w >>> 16),
        (x = l & 65535),
        (g = l >>> 16),
        (l = d[6]),
        (w = b[6]),
        (O += w & 65535),
        (U += w >>> 16),
        (x += l & 65535),
        (g += l >>> 16),
        (U += O >>> 16),
        (x += U >>> 16),
        (g += x >>> 16),
        (d[6] = q = (x & 65535) | (g << 16)),
        (b[6] = me = (O & 65535) | (U << 16)),
        (l = F),
        (w = f),
        (O = w & 65535),
        (U = w >>> 16),
        (x = l & 65535),
        (g = l >>> 16),
        (l = d[7]),
        (w = b[7]),
        (O += w & 65535),
        (U += w >>> 16),
        (x += l & 65535),
        (g += l >>> 16),
        (U += O >>> 16),
        (x += U >>> 16),
        (g += x >>> 16),
        (d[7] = F = (x & 65535) | (g << 16)),
        (b[7] = f = (O & 65535) | (U << 16)),
        (D += 128),
        (S -= 128);
    }
    return D;
  }
  function u(h) {
    var p = new i();
    p.update(h);
    var d = p.digest();
    return p.clean(), d;
  }
  r.hash = u;
})(em);
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.convertSecretKeyToX25519 =
      r.convertPublicKeyToX25519 =
      r.verify =
      r.sign =
      r.extractPublicKeyFromSecretKey =
      r.generateKeyPair =
      r.generateKeyPairFromSeed =
      r.SEED_LENGTH =
      r.SECRET_KEY_LENGTH =
      r.PUBLIC_KEY_LENGTH =
      r.SIGNATURE_LENGTH =
        void 0);
  const e = ho,
    t = em,
    i = ti;
  (r.SIGNATURE_LENGTH = 64),
    (r.PUBLIC_KEY_LENGTH = 32),
    (r.SECRET_KEY_LENGTH = 64),
    (r.SEED_LENGTH = 32);
  function s(L) {
    const j = new Float64Array(16);
    if (L) for (let k = 0; k < L.length; k++) j[k] = L[k];
    return j;
  }
  const a = new Uint8Array(32);
  a[0] = 9;
  const u = s(),
    h = s([1]),
    p = s([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    d = s([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    b = s([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    E = s([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    D = s([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function S(L, j) {
    for (let k = 0; k < 16; k++) L[k] = j[k] | 0;
  }
  function M(L) {
    let j = 1;
    for (let k = 0; k < 16; k++) {
      let m = L[k] + j + 65535;
      (j = Math.floor(m / 65536)), (L[k] = m - j * 65536);
    }
    L[0] += j - 1 + 37 * (j - 1);
  }
  function W(L, j, k) {
    const m = ~(k - 1);
    for (let B = 0; B < 16; B++) {
      const te = m & (L[B] ^ j[B]);
      (L[B] ^= te), (j[B] ^= te);
    }
  }
  function G(L, j) {
    const k = s(),
      m = s();
    for (let B = 0; B < 16; B++) m[B] = j[B];
    M(m), M(m), M(m);
    for (let B = 0; B < 2; B++) {
      k[0] = m[0] - 65517;
      for (let ue = 1; ue < 15; ue++)
        (k[ue] = m[ue] - 65535 - ((k[ue - 1] >> 16) & 1)), (k[ue - 1] &= 65535);
      k[15] = m[15] - 32767 - ((k[14] >> 16) & 1);
      const te = (k[15] >> 16) & 1;
      (k[14] &= 65535), W(m, k, 1 - te);
    }
    for (let B = 0; B < 16; B++)
      (L[2 * B] = m[B] & 255), (L[2 * B + 1] = m[B] >> 8);
  }
  function ee(L, j) {
    let k = 0;
    for (let m = 0; m < 32; m++) k |= L[m] ^ j[m];
    return (1 & ((k - 1) >>> 8)) - 1;
  }
  function K(L, j) {
    const k = new Uint8Array(32),
      m = new Uint8Array(32);
    return G(k, L), G(m, j), ee(k, m);
  }
  function V(L) {
    const j = new Uint8Array(32);
    return G(j, L), j[0] & 1;
  }
  function q(L, j) {
    for (let k = 0; k < 16; k++) L[k] = j[2 * k] + (j[2 * k + 1] << 8);
    L[15] &= 32767;
  }
  function F(L, j, k) {
    for (let m = 0; m < 16; m++) L[m] = j[m] + k[m];
  }
  function z(L, j, k) {
    for (let m = 0; m < 16; m++) L[m] = j[m] - k[m];
  }
  function y(L, j, k) {
    let m,
      B,
      te = 0,
      ue = 0,
      ae = 0,
      Pe = 0,
      Ce = 0,
      Ie = 0,
      Et = 0,
      Fe = 0,
      xe = 0,
      Le = 0,
      _e = 0,
      Ee = 0,
      Ve = 0,
      we = 0,
      Ae = 0,
      Be = 0,
      be = 0,
      Me = 0,
      qe = 0,
      Oe = 0,
      Ne = 0,
      st = 0,
      Te = 0,
      Re = 0,
      Ht = 0,
      ct = 0,
      pt = 0,
      Kt = 0,
      yt = 0,
      _t = 0,
      Er = 0,
      Ge = k[0],
      ze = k[1],
      It = k[2],
      We = k[3],
      Ke = k[4],
      At = k[5],
      Je = k[6],
      Xe = k[7],
      Dt = k[8],
      Ze = k[9],
      Ye = k[10],
      Mt = k[11],
      Qe = k[12],
      je = k[13],
      Tt = k[14],
      et = k[15];
    (m = j[0]),
      (te += m * Ge),
      (ue += m * ze),
      (ae += m * It),
      (Pe += m * We),
      (Ce += m * Ke),
      (Ie += m * At),
      (Et += m * Je),
      (Fe += m * Xe),
      (xe += m * Dt),
      (Le += m * Ze),
      (_e += m * Ye),
      (Ee += m * Mt),
      (Ve += m * Qe),
      (we += m * je),
      (Ae += m * Tt),
      (Be += m * et),
      (m = j[1]),
      (ue += m * Ge),
      (ae += m * ze),
      (Pe += m * It),
      (Ce += m * We),
      (Ie += m * Ke),
      (Et += m * At),
      (Fe += m * Je),
      (xe += m * Xe),
      (Le += m * Dt),
      (_e += m * Ze),
      (Ee += m * Ye),
      (Ve += m * Mt),
      (we += m * Qe),
      (Ae += m * je),
      (Be += m * Tt),
      (be += m * et),
      (m = j[2]),
      (ae += m * Ge),
      (Pe += m * ze),
      (Ce += m * It),
      (Ie += m * We),
      (Et += m * Ke),
      (Fe += m * At),
      (xe += m * Je),
      (Le += m * Xe),
      (_e += m * Dt),
      (Ee += m * Ze),
      (Ve += m * Ye),
      (we += m * Mt),
      (Ae += m * Qe),
      (Be += m * je),
      (be += m * Tt),
      (Me += m * et),
      (m = j[3]),
      (Pe += m * Ge),
      (Ce += m * ze),
      (Ie += m * It),
      (Et += m * We),
      (Fe += m * Ke),
      (xe += m * At),
      (Le += m * Je),
      (_e += m * Xe),
      (Ee += m * Dt),
      (Ve += m * Ze),
      (we += m * Ye),
      (Ae += m * Mt),
      (Be += m * Qe),
      (be += m * je),
      (Me += m * Tt),
      (qe += m * et),
      (m = j[4]),
      (Ce += m * Ge),
      (Ie += m * ze),
      (Et += m * It),
      (Fe += m * We),
      (xe += m * Ke),
      (Le += m * At),
      (_e += m * Je),
      (Ee += m * Xe),
      (Ve += m * Dt),
      (we += m * Ze),
      (Ae += m * Ye),
      (Be += m * Mt),
      (be += m * Qe),
      (Me += m * je),
      (qe += m * Tt),
      (Oe += m * et),
      (m = j[5]),
      (Ie += m * Ge),
      (Et += m * ze),
      (Fe += m * It),
      (xe += m * We),
      (Le += m * Ke),
      (_e += m * At),
      (Ee += m * Je),
      (Ve += m * Xe),
      (we += m * Dt),
      (Ae += m * Ze),
      (Be += m * Ye),
      (be += m * Mt),
      (Me += m * Qe),
      (qe += m * je),
      (Oe += m * Tt),
      (Ne += m * et),
      (m = j[6]),
      (Et += m * Ge),
      (Fe += m * ze),
      (xe += m * It),
      (Le += m * We),
      (_e += m * Ke),
      (Ee += m * At),
      (Ve += m * Je),
      (we += m * Xe),
      (Ae += m * Dt),
      (Be += m * Ze),
      (be += m * Ye),
      (Me += m * Mt),
      (qe += m * Qe),
      (Oe += m * je),
      (Ne += m * Tt),
      (st += m * et),
      (m = j[7]),
      (Fe += m * Ge),
      (xe += m * ze),
      (Le += m * It),
      (_e += m * We),
      (Ee += m * Ke),
      (Ve += m * At),
      (we += m * Je),
      (Ae += m * Xe),
      (Be += m * Dt),
      (be += m * Ze),
      (Me += m * Ye),
      (qe += m * Mt),
      (Oe += m * Qe),
      (Ne += m * je),
      (st += m * Tt),
      (Te += m * et),
      (m = j[8]),
      (xe += m * Ge),
      (Le += m * ze),
      (_e += m * It),
      (Ee += m * We),
      (Ve += m * Ke),
      (we += m * At),
      (Ae += m * Je),
      (Be += m * Xe),
      (be += m * Dt),
      (Me += m * Ze),
      (qe += m * Ye),
      (Oe += m * Mt),
      (Ne += m * Qe),
      (st += m * je),
      (Te += m * Tt),
      (Re += m * et),
      (m = j[9]),
      (Le += m * Ge),
      (_e += m * ze),
      (Ee += m * It),
      (Ve += m * We),
      (we += m * Ke),
      (Ae += m * At),
      (Be += m * Je),
      (be += m * Xe),
      (Me += m * Dt),
      (qe += m * Ze),
      (Oe += m * Ye),
      (Ne += m * Mt),
      (st += m * Qe),
      (Te += m * je),
      (Re += m * Tt),
      (Ht += m * et),
      (m = j[10]),
      (_e += m * Ge),
      (Ee += m * ze),
      (Ve += m * It),
      (we += m * We),
      (Ae += m * Ke),
      (Be += m * At),
      (be += m * Je),
      (Me += m * Xe),
      (qe += m * Dt),
      (Oe += m * Ze),
      (Ne += m * Ye),
      (st += m * Mt),
      (Te += m * Qe),
      (Re += m * je),
      (Ht += m * Tt),
      (ct += m * et),
      (m = j[11]),
      (Ee += m * Ge),
      (Ve += m * ze),
      (we += m * It),
      (Ae += m * We),
      (Be += m * Ke),
      (be += m * At),
      (Me += m * Je),
      (qe += m * Xe),
      (Oe += m * Dt),
      (Ne += m * Ze),
      (st += m * Ye),
      (Te += m * Mt),
      (Re += m * Qe),
      (Ht += m * je),
      (ct += m * Tt),
      (pt += m * et),
      (m = j[12]),
      (Ve += m * Ge),
      (we += m * ze),
      (Ae += m * It),
      (Be += m * We),
      (be += m * Ke),
      (Me += m * At),
      (qe += m * Je),
      (Oe += m * Xe),
      (Ne += m * Dt),
      (st += m * Ze),
      (Te += m * Ye),
      (Re += m * Mt),
      (Ht += m * Qe),
      (ct += m * je),
      (pt += m * Tt),
      (Kt += m * et),
      (m = j[13]),
      (we += m * Ge),
      (Ae += m * ze),
      (Be += m * It),
      (be += m * We),
      (Me += m * Ke),
      (qe += m * At),
      (Oe += m * Je),
      (Ne += m * Xe),
      (st += m * Dt),
      (Te += m * Ze),
      (Re += m * Ye),
      (Ht += m * Mt),
      (ct += m * Qe),
      (pt += m * je),
      (Kt += m * Tt),
      (yt += m * et),
      (m = j[14]),
      (Ae += m * Ge),
      (Be += m * ze),
      (be += m * It),
      (Me += m * We),
      (qe += m * Ke),
      (Oe += m * At),
      (Ne += m * Je),
      (st += m * Xe),
      (Te += m * Dt),
      (Re += m * Ze),
      (Ht += m * Ye),
      (ct += m * Mt),
      (pt += m * Qe),
      (Kt += m * je),
      (yt += m * Tt),
      (_t += m * et),
      (m = j[15]),
      (Be += m * Ge),
      (be += m * ze),
      (Me += m * It),
      (qe += m * We),
      (Oe += m * Ke),
      (Ne += m * At),
      (st += m * Je),
      (Te += m * Xe),
      (Re += m * Dt),
      (Ht += m * Ze),
      (ct += m * Ye),
      (pt += m * Mt),
      (Kt += m * Qe),
      (yt += m * je),
      (_t += m * Tt),
      (Er += m * et),
      (te += 38 * be),
      (ue += 38 * Me),
      (ae += 38 * qe),
      (Pe += 38 * Oe),
      (Ce += 38 * Ne),
      (Ie += 38 * st),
      (Et += 38 * Te),
      (Fe += 38 * Re),
      (xe += 38 * Ht),
      (Le += 38 * ct),
      (_e += 38 * pt),
      (Ee += 38 * Kt),
      (Ve += 38 * yt),
      (we += 38 * _t),
      (Ae += 38 * Er),
      (B = 1),
      (m = te + B + 65535),
      (B = Math.floor(m / 65536)),
      (te = m - B * 65536),
      (m = ue + B + 65535),
      (B = Math.floor(m / 65536)),
      (ue = m - B * 65536),
      (m = ae + B + 65535),
      (B = Math.floor(m / 65536)),
      (ae = m - B * 65536),
      (m = Pe + B + 65535),
      (B = Math.floor(m / 65536)),
      (Pe = m - B * 65536),
      (m = Ce + B + 65535),
      (B = Math.floor(m / 65536)),
      (Ce = m - B * 65536),
      (m = Ie + B + 65535),
      (B = Math.floor(m / 65536)),
      (Ie = m - B * 65536),
      (m = Et + B + 65535),
      (B = Math.floor(m / 65536)),
      (Et = m - B * 65536),
      (m = Fe + B + 65535),
      (B = Math.floor(m / 65536)),
      (Fe = m - B * 65536),
      (m = xe + B + 65535),
      (B = Math.floor(m / 65536)),
      (xe = m - B * 65536),
      (m = Le + B + 65535),
      (B = Math.floor(m / 65536)),
      (Le = m - B * 65536),
      (m = _e + B + 65535),
      (B = Math.floor(m / 65536)),
      (_e = m - B * 65536),
      (m = Ee + B + 65535),
      (B = Math.floor(m / 65536)),
      (Ee = m - B * 65536),
      (m = Ve + B + 65535),
      (B = Math.floor(m / 65536)),
      (Ve = m - B * 65536),
      (m = we + B + 65535),
      (B = Math.floor(m / 65536)),
      (we = m - B * 65536),
      (m = Ae + B + 65535),
      (B = Math.floor(m / 65536)),
      (Ae = m - B * 65536),
      (m = Be + B + 65535),
      (B = Math.floor(m / 65536)),
      (Be = m - B * 65536),
      (te += B - 1 + 37 * (B - 1)),
      (B = 1),
      (m = te + B + 65535),
      (B = Math.floor(m / 65536)),
      (te = m - B * 65536),
      (m = ue + B + 65535),
      (B = Math.floor(m / 65536)),
      (ue = m - B * 65536),
      (m = ae + B + 65535),
      (B = Math.floor(m / 65536)),
      (ae = m - B * 65536),
      (m = Pe + B + 65535),
      (B = Math.floor(m / 65536)),
      (Pe = m - B * 65536),
      (m = Ce + B + 65535),
      (B = Math.floor(m / 65536)),
      (Ce = m - B * 65536),
      (m = Ie + B + 65535),
      (B = Math.floor(m / 65536)),
      (Ie = m - B * 65536),
      (m = Et + B + 65535),
      (B = Math.floor(m / 65536)),
      (Et = m - B * 65536),
      (m = Fe + B + 65535),
      (B = Math.floor(m / 65536)),
      (Fe = m - B * 65536),
      (m = xe + B + 65535),
      (B = Math.floor(m / 65536)),
      (xe = m - B * 65536),
      (m = Le + B + 65535),
      (B = Math.floor(m / 65536)),
      (Le = m - B * 65536),
      (m = _e + B + 65535),
      (B = Math.floor(m / 65536)),
      (_e = m - B * 65536),
      (m = Ee + B + 65535),
      (B = Math.floor(m / 65536)),
      (Ee = m - B * 65536),
      (m = Ve + B + 65535),
      (B = Math.floor(m / 65536)),
      (Ve = m - B * 65536),
      (m = we + B + 65535),
      (B = Math.floor(m / 65536)),
      (we = m - B * 65536),
      (m = Ae + B + 65535),
      (B = Math.floor(m / 65536)),
      (Ae = m - B * 65536),
      (m = Be + B + 65535),
      (B = Math.floor(m / 65536)),
      (Be = m - B * 65536),
      (te += B - 1 + 37 * (B - 1)),
      (L[0] = te),
      (L[1] = ue),
      (L[2] = ae),
      (L[3] = Pe),
      (L[4] = Ce),
      (L[5] = Ie),
      (L[6] = Et),
      (L[7] = Fe),
      (L[8] = xe),
      (L[9] = Le),
      (L[10] = _e),
      (L[11] = Ee),
      (L[12] = Ve),
      (L[13] = we),
      (L[14] = Ae),
      (L[15] = Be);
  }
  function T(L, j) {
    y(L, j, j);
  }
  function ne(L, j) {
    const k = s();
    let m;
    for (m = 0; m < 16; m++) k[m] = j[m];
    for (m = 253; m >= 0; m--) T(k, k), m !== 2 && m !== 4 && y(k, k, j);
    for (m = 0; m < 16; m++) L[m] = k[m];
  }
  function fe(L, j) {
    const k = s();
    let m;
    for (m = 0; m < 16; m++) k[m] = j[m];
    for (m = 250; m >= 0; m--) T(k, k), m !== 1 && y(k, k, j);
    for (m = 0; m < 16; m++) L[m] = k[m];
  }
  function le(L, j) {
    const k = s(),
      m = s(),
      B = s(),
      te = s(),
      ue = s(),
      ae = s(),
      Pe = s(),
      Ce = s(),
      Ie = s();
    z(k, L[1], L[0]),
      z(Ie, j[1], j[0]),
      y(k, k, Ie),
      F(m, L[0], L[1]),
      F(Ie, j[0], j[1]),
      y(m, m, Ie),
      y(B, L[3], j[3]),
      y(B, B, d),
      y(te, L[2], j[2]),
      F(te, te, te),
      z(ue, m, k),
      z(ae, te, B),
      F(Pe, te, B),
      F(Ce, m, k),
      y(L[0], ue, ae),
      y(L[1], Ce, Pe),
      y(L[2], Pe, ae),
      y(L[3], ue, Ce);
  }
  function me(L, j, k) {
    for (let m = 0; m < 4; m++) W(L[m], j[m], k);
  }
  function f(L, j) {
    const k = s(),
      m = s(),
      B = s();
    ne(B, j[2]), y(k, j[0], B), y(m, j[1], B), G(L, m), (L[31] ^= V(k) << 7);
  }
  function l(L, j, k) {
    S(L[0], u), S(L[1], h), S(L[2], h), S(L[3], u);
    for (let m = 255; m >= 0; --m) {
      const B = (k[(m / 8) | 0] >> (m & 7)) & 1;
      me(L, j, B), le(j, L), le(L, L), me(L, j, B);
    }
  }
  function w(L, j) {
    const k = [s(), s(), s(), s()];
    S(k[0], b), S(k[1], E), S(k[2], h), y(k[3], b, E), l(L, k, j);
  }
  function I(L) {
    if (L.length !== r.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${r.SEED_LENGTH} bytes`);
    const j = (0, t.hash)(L);
    (j[0] &= 248), (j[31] &= 127), (j[31] |= 64);
    const k = new Uint8Array(32),
      m = [s(), s(), s(), s()];
    w(m, j), f(k, m);
    const B = new Uint8Array(64);
    return B.set(L), B.set(k, 32), { publicKey: k, secretKey: B };
  }
  r.generateKeyPairFromSeed = I;
  function P(L) {
    const j = (0, e.randomBytes)(32, L),
      k = I(j);
    return (0, i.wipe)(j), k;
  }
  r.generateKeyPair = P;
  function O(L) {
    if (L.length !== r.SECRET_KEY_LENGTH)
      throw new Error(
        `ed25519: secret key must be ${r.SECRET_KEY_LENGTH} bytes`
      );
    return new Uint8Array(L.subarray(32));
  }
  r.extractPublicKeyFromSecretKey = O;
  const U = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function x(L, j) {
    let k, m, B, te;
    for (m = 63; m >= 32; --m) {
      for (k = 0, B = m - 32, te = m - 12; B < te; ++B)
        (j[B] += k - 16 * j[m] * U[B - (m - 32)]),
          (k = Math.floor((j[B] + 128) / 256)),
          (j[B] -= k * 256);
      (j[B] += k), (j[m] = 0);
    }
    for (k = 0, B = 0; B < 32; B++)
      (j[B] += k - (j[31] >> 4) * U[B]), (k = j[B] >> 8), (j[B] &= 255);
    for (B = 0; B < 32; B++) j[B] -= k * U[B];
    for (m = 0; m < 32; m++) (j[m + 1] += j[m] >> 8), (L[m] = j[m] & 255);
  }
  function g(L) {
    const j = new Float64Array(64);
    for (let k = 0; k < 64; k++) j[k] = L[k];
    for (let k = 0; k < 64; k++) L[k] = 0;
    x(L, j);
  }
  function N(L, j) {
    const k = new Float64Array(64),
      m = [s(), s(), s(), s()],
      B = (0, t.hash)(L.subarray(0, 32));
    (B[0] &= 248), (B[31] &= 127), (B[31] |= 64);
    const te = new Uint8Array(64);
    te.set(B.subarray(32), 32);
    const ue = new t.SHA512();
    ue.update(te.subarray(32)), ue.update(j);
    const ae = ue.digest();
    ue.clean(),
      g(ae),
      w(m, ae),
      f(te, m),
      ue.reset(),
      ue.update(te.subarray(0, 32)),
      ue.update(L.subarray(32)),
      ue.update(j);
    const Pe = ue.digest();
    g(Pe);
    for (let Ce = 0; Ce < 32; Ce++) k[Ce] = ae[Ce];
    for (let Ce = 0; Ce < 32; Ce++)
      for (let Ie = 0; Ie < 32; Ie++) k[Ce + Ie] += Pe[Ce] * B[Ie];
    return x(te.subarray(32), k), te;
  }
  r.sign = N;
  function ie(L, j) {
    const k = s(),
      m = s(),
      B = s(),
      te = s(),
      ue = s(),
      ae = s(),
      Pe = s();
    return (
      S(L[2], h),
      q(L[1], j),
      T(B, L[1]),
      y(te, B, p),
      z(B, B, L[2]),
      F(te, L[2], te),
      T(ue, te),
      T(ae, ue),
      y(Pe, ae, ue),
      y(k, Pe, B),
      y(k, k, te),
      fe(k, k),
      y(k, k, B),
      y(k, k, te),
      y(k, k, te),
      y(L[0], k, te),
      T(m, L[0]),
      y(m, m, te),
      K(m, B) && y(L[0], L[0], D),
      T(m, L[0]),
      y(m, m, te),
      K(m, B)
        ? -1
        : (V(L[0]) === j[31] >> 7 && z(L[0], u, L[0]), y(L[3], L[0], L[1]), 0)
    );
  }
  function de(L, j, k) {
    const m = new Uint8Array(32),
      B = [s(), s(), s(), s()],
      te = [s(), s(), s(), s()];
    if (k.length !== r.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${r.SIGNATURE_LENGTH} bytes`);
    if (ie(te, L)) return !1;
    const ue = new t.SHA512();
    ue.update(k.subarray(0, 32)), ue.update(L), ue.update(j);
    const ae = ue.digest();
    return (
      g(ae), l(B, te, ae), w(te, k.subarray(32)), le(B, te), f(m, B), !ee(k, m)
    );
  }
  r.verify = de;
  function _(L) {
    let j = [s(), s(), s(), s()];
    if (ie(j, L)) throw new Error("Ed25519: invalid public key");
    let k = s(),
      m = s(),
      B = j[1];
    F(k, h, B), z(m, h, B), ne(m, m), y(k, k, m);
    let te = new Uint8Array(32);
    return G(te, k), te;
  }
  r.convertPublicKeyToX25519 = _;
  function Z(L) {
    const j = (0, t.hash)(L.subarray(0, 32));
    (j[0] &= 248), (j[31] &= 127), (j[31] |= 64);
    const k = new Uint8Array(j.subarray(0, 32));
    return (0, i.wipe)(j), k;
  }
  r.convertSecretKeyToX25519 = Z;
})(of);
const B4 = "EdDSA",
  L4 = "JWT",
  tm = ".",
  rm = "base64url",
  q4 = "utf8",
  j4 = "utf8",
  $4 = ":",
  F4 = "did",
  z4 = "key",
  Bp = "base58btc",
  k4 = "z",
  H4 = "K36",
  K4 = 32;
function af(r) {
  return globalThis.Buffer != null
    ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength)
    : r;
}
function im(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? af(globalThis.Buffer.allocUnsafe(r))
    : new Uint8Array(r);
}
function V4(r, e) {
  e || (e = r.reduce((s, a) => s + a.length, 0));
  const t = im(e);
  let i = 0;
  for (const s of r) t.set(s, i), (i += s.length);
  return af(t);
}
function nm(r, e, t, i) {
  return {
    name: r,
    prefix: e,
    encoder: { name: r, prefix: e, encode: t },
    decoder: { decode: i },
  };
}
const Lp = nm(
    "utf8",
    "u",
    (r) => "u" + new TextDecoder("utf8").decode(r),
    (r) => new TextEncoder().encode(r.substring(1))
  ),
  Zh = nm(
    "ascii",
    "a",
    (r) => {
      let e = "a";
      for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
      return e;
    },
    (r) => {
      r = r.substring(1);
      const e = im(r.length);
      for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
      return e;
    }
  ),
  sm = {
    utf8: Lp,
    "utf-8": Lp,
    hex: Kc.base16,
    latin1: Zh,
    ascii: Zh,
    binary: Zh,
    ...Kc,
  };
function cf(r, e = "utf8") {
  const t = sm[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString(
        "utf8"
      )
    : t.encoder.encode(r).substring(1);
}
function uf(r, e = "utf8") {
  const t = sm[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? af(globalThis.Buffer.from(r, "utf-8"))
    : t.decoder.decode(`${t.prefix}${r}`);
}
function tu(r) {
  return cf(uf(Mn(r), q4), rm);
}
function om(r) {
  const e = uf(H4, Bp),
    t = k4 + cf(V4([e, r]), Bp);
  return [F4, z4, t].join($4);
}
function G4(r) {
  return cf(r, rm);
}
function W4(r) {
  return uf([tu(r.header), tu(r.payload)].join(tm), j4);
}
function Y4(r) {
  return [tu(r.header), tu(r.payload), G4(r.signature)].join(tm);
}
function qp(r = ho.randomBytes(K4)) {
  return of.generateKeyPairFromSeed(r);
}
async function Q4(r, e, t, i, s = ye.fromMiliseconds(Date.now())) {
  const a = { alg: B4, typ: L4 },
    u = om(i.publicKey),
    h = s + t,
    p = { iss: u, sub: r, aud: e, iat: s, exp: h },
    d = W4({ header: a, payload: p }),
    b = of.sign(i.secretKey, d);
  return Y4({ header: a, payload: p, signature: b });
}
const J4 = "PARSE_ERROR",
  X4 = "INVALID_REQUEST",
  Z4 = "METHOD_NOT_FOUND",
  eD = "INVALID_PARAMS",
  am = "INTERNAL_ERROR",
  hf = "SERVER_ERROR",
  tD = [-32700, -32600, -32601, -32602, -32603],
  ea = {
    [J4]: { code: -32700, message: "Parse error" },
    [X4]: { code: -32600, message: "Invalid Request" },
    [Z4]: { code: -32601, message: "Method not found" },
    [eD]: { code: -32602, message: "Invalid params" },
    [am]: { code: -32603, message: "Internal error" },
    [hf]: { code: -32e3, message: "Server error" },
  },
  cm = hf;
function rD(r) {
  return tD.includes(r);
}
function jp(r) {
  return Object.keys(ea).includes(r) ? ea[r] : ea[cm];
}
function iD(r) {
  const e = Object.values(ea).find((t) => t.code === r);
  return e || ea[cm];
}
function um(r, e, t) {
  return r.message.includes("getaddrinfo ENOTFOUND") ||
    r.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${t} RPC url at ${e}`)
    : r;
}
var hm = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Ol =
  function (r, e) {
    return (
      (Ol =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, i) {
            t.__proto__ = i;
          }) ||
        function (t, i) {
          for (var s in i) i.hasOwnProperty(s) && (t[s] = i[s]);
        }),
      Ol(r, e)
    );
  };
function nD(r, e) {
  Ol(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var Nl = function () {
  return (
    (Nl =
      Object.assign ||
      function (e) {
        for (var t, i = 1, s = arguments.length; i < s; i++) {
          t = arguments[i];
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      }),
    Nl.apply(this, arguments)
  );
};
function sD(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      e.indexOf(i) < 0 &&
      (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(r); s < i.length; s++)
      e.indexOf(i[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[s]) &&
        (t[i[s]] = r[i[s]]);
  return t;
}
function oD(r, e, t, i) {
  var s = arguments.length,
    a =
      s < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    u;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    a = Reflect.decorate(r, e, t, i);
  else
    for (var h = r.length - 1; h >= 0; h--)
      (u = r[h]) && (a = (s < 3 ? u(a) : s > 3 ? u(e, t, a) : u(e, t)) || a);
  return s > 3 && a && Object.defineProperty(e, t, a), a;
}
function aD(r, e) {
  return function (t, i) {
    e(t, i, r);
  };
}
function cD(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, e);
}
function uD(r, e, t, i) {
  function s(a) {
    return a instanceof t
      ? a
      : new t(function (u) {
          u(a);
        });
  }
  return new (t || (t = Promise))(function (a, u) {
    function h(b) {
      try {
        d(i.next(b));
      } catch (E) {
        u(E);
      }
    }
    function p(b) {
      try {
        d(i.throw(b));
      } catch (E) {
        u(E);
      }
    }
    function d(b) {
      b.done ? a(b.value) : s(b.value).then(h, p);
    }
    d((i = i.apply(r, e || [])).next());
  });
}
function hD(r, e) {
  var t = {
      label: 0,
      sent: function () {
        if (a[0] & 1) throw a[1];
        return a[1];
      },
      trys: [],
      ops: [],
    },
    i,
    s,
    a,
    u;
  return (
    (u = { next: h(0), throw: h(1), return: h(2) }),
    typeof Symbol == "function" &&
      (u[Symbol.iterator] = function () {
        return this;
      }),
    u
  );
  function h(d) {
    return function (b) {
      return p([d, b]);
    };
  }
  function p(d) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((i = 1),
          s &&
            (a =
              d[0] & 2
                ? s.return
                : d[0]
                ? s.throw || ((a = s.return) && a.call(s), 0)
                : s.next) &&
            !(a = a.call(s, d[1])).done)
        )
          return a;
        switch (((s = 0), a && (d = [d[0] & 2, a.value]), d[0])) {
          case 0:
          case 1:
            a = d;
            break;
          case 4:
            return t.label++, { value: d[1], done: !1 };
          case 5:
            t.label++, (s = d[1]), (d = [0]);
            continue;
          case 7:
            (d = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((a = t.trys),
              !(a = a.length > 0 && a[a.length - 1]) &&
                (d[0] === 6 || d[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (d[0] === 3 && (!a || (d[1] > a[0] && d[1] < a[3]))) {
              t.label = d[1];
              break;
            }
            if (d[0] === 6 && t.label < a[1]) {
              (t.label = a[1]), (a = d);
              break;
            }
            if (a && t.label < a[2]) {
              (t.label = a[2]), t.ops.push(d);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        d = e.call(r, t);
      } catch (b) {
        (d = [6, b]), (s = 0);
      } finally {
        i = a = 0;
      }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}
function lD(r, e, t, i) {
  i === void 0 && (i = t), (r[i] = e[t]);
}
function fD(r, e) {
  for (var t in r) t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function Rl(r) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && r[e],
    i = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function () {
        return (
          r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function lm(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var i = t.call(r),
    s,
    a = [],
    u;
  try {
    for (; (e === void 0 || e-- > 0) && !(s = i.next()).done; ) a.push(s.value);
  } catch (h) {
    u = { error: h };
  } finally {
    try {
      s && !s.done && (t = i.return) && t.call(i);
    } finally {
      if (u) throw u.error;
    }
  }
  return a;
}
function dD() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(lm(arguments[e]));
  return r;
}
function pD() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), s = 0, e = 0; e < t; e++)
    for (var a = arguments[e], u = 0, h = a.length; u < h; u++, s++)
      i[s] = a[u];
  return i;
}
function ua(r) {
  return this instanceof ua ? ((this.v = r), this) : new ua(r);
}
function gD(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []),
    s,
    a = [];
  return (
    (s = {}),
    u("next"),
    u("throw"),
    u("return"),
    (s[Symbol.asyncIterator] = function () {
      return this;
    }),
    s
  );
  function u(D) {
    i[D] &&
      (s[D] = function (S) {
        return new Promise(function (M, W) {
          a.push([D, S, M, W]) > 1 || h(D, S);
        });
      });
  }
  function h(D, S) {
    try {
      p(i[D](S));
    } catch (M) {
      E(a[0][3], M);
    }
  }
  function p(D) {
    D.value instanceof ua
      ? Promise.resolve(D.value.v).then(d, b)
      : E(a[0][2], D);
  }
  function d(D) {
    h("next", D);
  }
  function b(D) {
    h("throw", D);
  }
  function E(D, S) {
    D(S), a.shift(), a.length && h(a[0][0], a[0][1]);
  }
}
function mD(r) {
  var e, t;
  return (
    (e = {}),
    i("next"),
    i("throw", function (s) {
      throw s;
    }),
    i("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function i(s, a) {
    e[s] = r[s]
      ? function (u) {
          return (t = !t)
            ? { value: ua(r[s](u)), done: s === "return" }
            : a
            ? a(u)
            : u;
        }
      : a;
  }
}
function vD(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator],
    t;
  return e
    ? e.call(r)
    : ((r = typeof Rl == "function" ? Rl(r) : r[Symbol.iterator]()),
      (t = {}),
      i("next"),
      i("throw"),
      i("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function i(a) {
    t[a] =
      r[a] &&
      function (u) {
        return new Promise(function (h, p) {
          (u = r[a](u)), s(h, p, u.done, u.value);
        });
      };
  }
  function s(a, u, h, p) {
    Promise.resolve(p).then(function (d) {
      a({ value: d, done: h });
    }, u);
  }
}
function yD(r, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(r, "raw", { value: e })
      : (r.raw = e),
    r
  );
}
function wD(r) {
  if (r && r.__esModule) return r;
  var e = {};
  if (r != null)
    for (var t in r) Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return (e.default = r), e;
}
function bD(r) {
  return r && r.__esModule ? r : { default: r };
}
function _D(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function ED(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
const AD = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        get __assign() {
          return Nl;
        },
        __asyncDelegator: mD,
        __asyncGenerator: gD,
        __asyncValues: vD,
        __await: ua,
        __awaiter: uD,
        __classPrivateFieldGet: _D,
        __classPrivateFieldSet: ED,
        __createBinding: lD,
        __decorate: oD,
        __exportStar: fD,
        __extends: nD,
        __generator: hD,
        __importDefault: bD,
        __importStar: wD,
        __makeTemplateObject: yD,
        __metadata: cD,
        __param: aD,
        __read: lm,
        __rest: sD,
        __spread: dD,
        __spreadArrays: pD,
        __values: Rl,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  SD = Rg(AD);
var An = {},
  $p;
function ID() {
  if ($p) return An;
  ($p = 1),
    Object.defineProperty(An, "__esModule", { value: !0 }),
    (An.isBrowserCryptoAvailable =
      An.getSubtleCrypto =
      An.getBrowerCrypto =
        void 0);
  function r() {
    return (
      (Ui === null || Ui === void 0 ? void 0 : Ui.crypto) ||
      (Ui === null || Ui === void 0 ? void 0 : Ui.msCrypto) ||
      {}
    );
  }
  An.getBrowerCrypto = r;
  function e() {
    const i = r();
    return i.subtle || i.webkitSubtle;
  }
  An.getSubtleCrypto = e;
  function t() {
    return !!r() && !!e();
  }
  return (An.isBrowserCryptoAvailable = t), An;
}
var Sn = {},
  Fp;
function DD() {
  if (Fp) return Sn;
  (Fp = 1),
    Object.defineProperty(Sn, "__esModule", { value: !0 }),
    (Sn.isBrowser = Sn.isNode = Sn.isReactNative = void 0);
  function r() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  Sn.isReactNative = r;
  function e() {
    return (
      typeof process < "u" &&
      typeof process.versions < "u" &&
      typeof process.versions.node < "u"
    );
  }
  Sn.isNode = e;
  function t() {
    return !r() && !e();
  }
  return (Sn.isBrowser = t), Sn;
}
(function (r) {
  Object.defineProperty(r, "__esModule", { value: !0 });
  const e = SD;
  e.__exportStar(ID(), r), e.__exportStar(DD(), r);
})(hm);
function Kn(r = 3) {
  const e = Date.now() * Math.pow(10, r),
    t = Math.floor(Math.random() * Math.pow(10, r));
  return e + t;
}
function Es(r = 6) {
  return BigInt(Kn(r));
}
function oo(r, e, t) {
  return { id: t || Kn(), jsonrpc: "2.0", method: r, params: e };
}
function pu(r, e) {
  return { id: r, jsonrpc: "2.0", result: e };
}
function gu(r, e, t) {
  return { id: r, jsonrpc: "2.0", error: xD(e) };
}
function xD(r, e) {
  return typeof r > "u"
    ? jp(am)
    : (typeof r == "string" &&
        (r = Object.assign(Object.assign({}, jp(hf)), { message: r })),
      rD(r.code) && (r = iD(r.code)),
      r);
}
class PD {}
class MD extends PD {
  constructor() {
    super();
  }
}
class CD extends MD {
  constructor(e) {
    super();
  }
}
const OD = "^https?:",
  ND = "^wss?:";
function RD(r) {
  const e = r.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length)) return e[0];
}
function fm(r, e) {
  const t = RD(r);
  return typeof t > "u" ? !1 : new RegExp(e).test(t);
}
function zp(r) {
  return fm(r, OD);
}
function kp(r) {
  return fm(r, ND);
}
function TD(r) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(r);
}
function dm(r) {
  return (
    typeof r == "object" && "id" in r && "jsonrpc" in r && r.jsonrpc === "2.0"
  );
}
function lf(r) {
  return dm(r) && "method" in r;
}
function mu(r) {
  return dm(r) && (Zi(r) || bi(r));
}
function Zi(r) {
  return "result" in r;
}
function bi(r) {
  return "error" in r;
}
let ji = class extends CD {
  constructor(e) {
    super(e),
      (this.events = new Ai.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(e)),
      this.connection.connected && this.registerEventListeners();
  }
  async connect(e = this.connection) {
    await this.open(e);
  }
  async disconnect() {
    await this.close();
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async request(e, t) {
    return this.requestStrict(
      oo(e.method, e.params || [], e.id || Es().toString()),
      t
    );
  }
  async requestStrict(e, t) {
    return new Promise(async (i, s) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (a) {
          s(a);
        }
      this.events.on(`${e.id}`, (a) => {
        bi(a) ? s(a.error) : i(a.result);
      });
      try {
        await this.connection.send(e, t);
      } catch (a) {
        s(a);
      }
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e),
      mu(e)
        ? this.events.emit(`${e.id}`, e)
        : this.events.emit("message", { type: e.method, data: e.params });
  }
  onClose(e) {
    e &&
      e.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${e.code} ${
            e.reason ? `(${e.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  async open(e = this.connection) {
    (this.connection === e && this.connection.connected) ||
      (this.connection.connected && this.close(),
      typeof e == "string" &&
        (await this.connection.open(e), (e = this.connection)),
      (this.connection = this.setConnection(e)),
      await this.connection.open(),
      this.registerEventListeners(),
      this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (e) => this.onPayload(e)),
      this.connection.on("close", (e) => this.onClose(e)),
      this.connection.on("error", (e) => this.events.emit("error", e)),
      this.connection.on("register_error", (e) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
};
const UD = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof global < "u" && typeof global.WebSocket < "u"
      ? global.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : require("ws"),
  BD = () =>
    typeof WebSocket < "u" ||
    (typeof global < "u" && typeof global.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  Hp = (r) => r.split("?")[0],
  Kp = 10,
  LD = UD();
let qD = class {
  constructor(e) {
    if (
      ((this.url = e),
      (this.events = new Ai.EventEmitter()),
      (this.registering = !1),
      !kp(e))
    )
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${e}`
      );
    this.url = e;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    return new Promise((e, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      (this.socket.onclose = (i) => {
        this.onClose(i), e();
      }),
        this.socket.close();
    });
  }
  async send(e) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Mn(e));
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  register(e = this.url) {
    if (!kp(e))
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${e}`
      );
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= t ||
          this.events.listenerCount("open") >= t) &&
          this.events.setMaxListeners(t + 1),
        new Promise((i, s) => {
          this.events.once("register_error", (a) => {
            this.resetMaxListeners(), s(a);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.socket > "u"))
                return s(
                  new Error("WebSocket connection is missing or invalid")
                );
              i(this.socket);
            });
        })
      );
    }
    return (
      (this.url = e),
      (this.registering = !0),
      new Promise((t, i) => {
        const s = new URLSearchParams(e).get("origin"),
          a = hm.isReactNative()
            ? { headers: { origin: s } }
            : { rejectUnauthorized: !TD(e) },
          u = new LD(e, [], a);
        BD()
          ? (u.onerror = (h) => {
              const p = h;
              i(this.emitError(p.error));
            })
          : u.on("error", (h) => {
              i(this.emitError(h));
            }),
          (u.onopen = () => {
            this.onOpen(u), t(u);
          });
      })
    );
  }
  onOpen(e) {
    (e.onmessage = (t) => this.onPayload(t)),
      (e.onclose = (t) => this.onClose(t)),
      (this.socket = e),
      (this.registering = !1),
      this.events.emit("open");
  }
  onClose(e) {
    (this.socket = void 0),
      (this.registering = !1),
      this.events.emit("close", e);
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? ma(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const i = this.parseError(t),
      s = i.message || i.toString(),
      a = gu(e, s);
    this.events.emit("payload", a);
  }
  parseError(e, t = this.url) {
    return um(e, Hp(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Kp && this.events.setMaxListeners(Kp);
  }
  emitError(e) {
    const t = this.parseError(
      new Error(
        (e == null ? void 0 : e.message) ||
          `WebSocket connection failed for host: ${Hp(this.url)}`
      )
    );
    return this.events.emit("register_error", t), t;
  }
};
var ru = { exports: {} };
ru.exports;
(function (r, e) {
  var t = 200,
    i = "__lodash_hash_undefined__",
    s = 1,
    a = 2,
    u = 9007199254740991,
    h = "[object Arguments]",
    p = "[object Array]",
    d = "[object AsyncFunction]",
    b = "[object Boolean]",
    E = "[object Date]",
    D = "[object Error]",
    S = "[object Function]",
    M = "[object GeneratorFunction]",
    W = "[object Map]",
    G = "[object Number]",
    ee = "[object Null]",
    K = "[object Object]",
    V = "[object Promise]",
    q = "[object Proxy]",
    F = "[object RegExp]",
    z = "[object Set]",
    y = "[object String]",
    T = "[object Symbol]",
    ne = "[object Undefined]",
    fe = "[object WeakMap]",
    le = "[object ArrayBuffer]",
    me = "[object DataView]",
    f = "[object Float32Array]",
    l = "[object Float64Array]",
    w = "[object Int8Array]",
    I = "[object Int16Array]",
    P = "[object Int32Array]",
    O = "[object Uint8Array]",
    U = "[object Uint8ClampedArray]",
    x = "[object Uint16Array]",
    g = "[object Uint32Array]",
    N = /[\\^$.*+?()[\]{}|]/g,
    ie = /^\[object .+?Constructor\]$/,
    de = /^(?:0|[1-9]\d*)$/,
    _ = {};
  (_[f] = _[l] = _[w] = _[I] = _[P] = _[O] = _[U] = _[x] = _[g] = !0),
    (_[h] =
      _[p] =
      _[le] =
      _[b] =
      _[me] =
      _[E] =
      _[D] =
      _[S] =
      _[W] =
      _[G] =
      _[K] =
      _[F] =
      _[z] =
      _[y] =
      _[fe] =
        !1);
  var Z = typeof Ui == "object" && Ui && Ui.Object === Object && Ui,
    L = typeof self == "object" && self && self.Object === Object && self,
    j = Z || L || Function("return this")(),
    k = e && !e.nodeType && e,
    m = k && !0 && r && !r.nodeType && r,
    B = m && m.exports === k,
    te = B && Z.process,
    ue = (function () {
      try {
        return te && te.binding && te.binding("util");
      } catch {}
    })(),
    ae = ue && ue.isTypedArray;
  function Pe($, Q) {
    for (
      var he = -1, Se = $ == null ? 0 : $.length, Lt = 0, rt = [];
      ++he < Se;

    ) {
      var Ft = $[he];
      Q(Ft, he, $) && (rt[Lt++] = Ft);
    }
    return rt;
  }
  function Ce($, Q) {
    for (var he = -1, Se = Q.length, Lt = $.length; ++he < Se; )
      $[Lt + he] = Q[he];
    return $;
  }
  function Ie($, Q) {
    for (var he = -1, Se = $ == null ? 0 : $.length; ++he < Se; )
      if (Q($[he], he, $)) return !0;
    return !1;
  }
  function Et($, Q) {
    for (var he = -1, Se = Array($); ++he < $; ) Se[he] = Q(he);
    return Se;
  }
  function Fe($) {
    return function (Q) {
      return $(Q);
    };
  }
  function xe($, Q) {
    return $.has(Q);
  }
  function Le($, Q) {
    return $ == null ? void 0 : $[Q];
  }
  function _e($) {
    var Q = -1,
      he = Array($.size);
    return (
      $.forEach(function (Se, Lt) {
        he[++Q] = [Lt, Se];
      }),
      he
    );
  }
  function Ee($, Q) {
    return function (he) {
      return $(Q(he));
    };
  }
  function Ve($) {
    var Q = -1,
      he = Array($.size);
    return (
      $.forEach(function (Se) {
        he[++Q] = Se;
      }),
      he
    );
  }
  var we = Array.prototype,
    Ae = Function.prototype,
    Be = Object.prototype,
    be = j["__core-js_shared__"],
    Me = Ae.toString,
    qe = Be.hasOwnProperty,
    Oe = (function () {
      var $ = /[^.]+$/.exec((be && be.keys && be.keys.IE_PROTO) || "");
      return $ ? "Symbol(src)_1." + $ : "";
    })(),
    Ne = Be.toString,
    st = RegExp(
      "^" +
        Me.call(qe)
          .replace(N, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Te = B ? j.Buffer : void 0,
    Re = j.Symbol,
    Ht = j.Uint8Array,
    ct = Be.propertyIsEnumerable,
    pt = we.splice,
    Kt = Re ? Re.toStringTag : void 0,
    yt = Object.getOwnPropertySymbols,
    _t = Te ? Te.isBuffer : void 0,
    Er = Ee(Object.keys, Object),
    Ge = Vr(j, "DataView"),
    ze = Vr(j, "Map"),
    It = Vr(j, "Promise"),
    We = Vr(j, "Set"),
    Ke = Vr(j, "WeakMap"),
    At = Vr(Object, "create"),
    Je = fn(Ge),
    Xe = fn(ze),
    Dt = fn(It),
    Ze = fn(We),
    Ye = fn(Ke),
    Mt = Re ? Re.prototype : void 0,
    Qe = Mt ? Mt.valueOf : void 0;
  function je($) {
    var Q = -1,
      he = $ == null ? 0 : $.length;
    for (this.clear(); ++Q < he; ) {
      var Se = $[Q];
      this.set(Se[0], Se[1]);
    }
  }
  function Tt() {
    (this.__data__ = At ? At(null) : {}), (this.size = 0);
  }
  function et($) {
    var Q = this.has($) && delete this.__data__[$];
    return (this.size -= Q ? 1 : 0), Q;
  }
  function Ct($) {
    var Q = this.__data__;
    if (At) {
      var he = Q[$];
      return he === i ? void 0 : he;
    }
    return qe.call(Q, $) ? Q[$] : void 0;
  }
  function Si($) {
    var Q = this.__data__;
    return At ? Q[$] !== void 0 : qe.call(Q, $);
  }
  function Ot($, Q) {
    var he = this.__data__;
    return (
      (this.size += this.has($) ? 0 : 1),
      (he[$] = At && Q === void 0 ? i : Q),
      this
    );
  }
  (je.prototype.clear = Tt),
    (je.prototype.delete = et),
    (je.prototype.get = Ct),
    (je.prototype.has = Si),
    (je.prototype.set = Ot);
  function lt($) {
    var Q = -1,
      he = $ == null ? 0 : $.length;
    for (this.clear(); ++Q < he; ) {
      var Se = $[Q];
      this.set(Se[0], Se[1]);
    }
  }
  function ri() {
    (this.__data__ = []), (this.size = 0);
  }
  function ii($) {
    var Q = this.__data__,
      he = is(Q, $);
    if (he < 0) return !1;
    var Se = Q.length - 1;
    return he == Se ? Q.pop() : pt.call(Q, he, 1), --this.size, !0;
  }
  function ni($) {
    var Q = this.__data__,
      he = is(Q, $);
    return he < 0 ? void 0 : Q[he][1];
  }
  function si($) {
    return is(this.__data__, $) > -1;
  }
  function oi($, Q) {
    var he = this.__data__,
      Se = is(he, $);
    return Se < 0 ? (++this.size, he.push([$, Q])) : (he[Se][1] = Q), this;
  }
  (lt.prototype.clear = ri),
    (lt.prototype.delete = ii),
    (lt.prototype.get = ni),
    (lt.prototype.has = si),
    (lt.prototype.set = oi);
  function or($) {
    var Q = -1,
      he = $ == null ? 0 : $.length;
    for (this.clear(); ++Q < he; ) {
      var Se = $[Q];
      this.set(Se[0], Se[1]);
    }
  }
  function Fi() {
    (this.size = 0),
      (this.__data__ = {
        hash: new je(),
        map: new (ze || lt)(),
        string: new je(),
      });
  }
  function Qn($) {
    var Q = Nn(this, $).delete($);
    return (this.size -= Q ? 1 : 0), Q;
  }
  function zi($) {
    return Nn(this, $).get($);
  }
  function Jn($) {
    return Nn(this, $).has($);
  }
  function Xn($, Q) {
    var he = Nn(this, $),
      Se = he.size;
    return he.set($, Q), (this.size += he.size == Se ? 0 : 1), this;
  }
  (or.prototype.clear = Fi),
    (or.prototype.delete = Qn),
    (or.prototype.get = zi),
    (or.prototype.has = Jn),
    (or.prototype.set = Xn);
  function ki($) {
    var Q = -1,
      he = $ == null ? 0 : $.length;
    for (this.__data__ = new or(); ++Q < he; ) this.add($[Q]);
  }
  function Cn($) {
    return this.__data__.set($, i), this;
  }
  function On($) {
    return this.__data__.has($);
  }
  (ki.prototype.add = ki.prototype.push = Cn), (ki.prototype.has = On);
  function Ar($) {
    var Q = (this.__data__ = new lt($));
    this.size = Q.size;
  }
  function Zn() {
    (this.__data__ = new lt()), (this.size = 0);
  }
  function es($) {
    var Q = this.__data__,
      he = Q.delete($);
    return (this.size = Q.size), he;
  }
  function ts($) {
    return this.__data__.get($);
  }
  function rs($) {
    return this.__data__.has($);
  }
  function _a($, Q) {
    var he = this.__data__;
    if (he instanceof lt) {
      var Se = he.__data__;
      if (!ze || Se.length < t - 1)
        return Se.push([$, Q]), (this.size = ++he.size), this;
      he = this.__data__ = new or(Se);
    }
    return he.set($, Q), (this.size = he.size), this;
  }
  (Ar.prototype.clear = Zn),
    (Ar.prototype.delete = es),
    (Ar.prototype.get = ts),
    (Ar.prototype.has = rs),
    (Ar.prototype.set = _a);
  function Ea($, Q) {
    var he = Rs($),
      Se = !he && Ta($),
      Lt = !he && !Se && _o($),
      rt = !he && !Se && !Lt && La($),
      Ft = he || Se || Lt || rt,
      er = Ft ? Et($.length, String) : [],
      wt = er.length;
    for (var qt in $)
      qe.call($, qt) &&
        !(
          Ft &&
          (qt == "length" ||
            (Lt && (qt == "offset" || qt == "parent")) ||
            (rt &&
              (qt == "buffer" || qt == "byteLength" || qt == "byteOffset")) ||
            Ma(qt, wt))
        ) &&
        er.push(qt);
    return er;
  }
  function is($, Q) {
    for (var he = $.length; he--; ) if (Ra($[he][0], Q)) return he;
    return -1;
  }
  function wo($, Q, he) {
    var Se = Q($);
    return Rs($) ? Se : Ce(Se, he($));
  }
  function ns($) {
    return $ == null
      ? $ === void 0
        ? ne
        : ee
      : Kt && Kt in Object($)
      ? xa($)
      : _u($);
  }
  function bo($) {
    return os($) && ns($) == h;
  }
  function ss($, Q, he, Se, Lt) {
    return $ === Q
      ? !0
      : $ == null || Q == null || (!os($) && !os(Q))
      ? $ !== $ && Q !== Q
      : Aa($, Q, he, Se, ss, Lt);
  }
  function Aa($, Q, he, Se, Lt, rt) {
    var Ft = Rs($),
      er = Rs(Q),
      wt = Ft ? p : Hi($),
      qt = er ? p : Hi(Q);
    (wt = wt == h ? K : wt), (qt = qt == h ? K : qt);
    var Yt = wt == K,
      Nr = qt == K,
      tr = wt == qt;
    if (tr && _o($)) {
      if (!_o(Q)) return !1;
      (Ft = !0), (Yt = !1);
    }
    if (tr && !Yt)
      return (
        rt || (rt = new Ar()),
        Ft || La($) ? Os($, Q, he, Se, Lt, rt) : bu($, Q, wt, he, Se, Lt, rt)
      );
    if (!(he & s)) {
      var zt = Yt && qe.call($, "__wrapped__"),
        Sr = Nr && qe.call(Q, "__wrapped__");
      if (zt || Sr) {
        var Ii = zt ? $.value() : $,
          ai = Sr ? Q.value() : Q;
        return rt || (rt = new Ar()), Lt(Ii, ai, he, Se, rt);
      }
    }
    return tr ? (rt || (rt = new Ar()), Da($, Q, he, Se, Lt, rt)) : !1;
  }
  function wu($) {
    if (!Ba($) || Oa($)) return !1;
    var Q = Ts($) ? st : ie;
    return Q.test(fn($));
  }
  function Sa($) {
    return os($) && Ua($.length) && !!_[ns($)];
  }
  function Ia($) {
    if (!Na($)) return Er($);
    var Q = [];
    for (var he in Object($))
      qe.call($, he) && he != "constructor" && Q.push(he);
    return Q;
  }
  function Os($, Q, he, Se, Lt, rt) {
    var Ft = he & s,
      er = $.length,
      wt = Q.length;
    if (er != wt && !(Ft && wt > er)) return !1;
    var qt = rt.get($);
    if (qt && rt.get(Q)) return qt == Q;
    var Yt = -1,
      Nr = !0,
      tr = he & a ? new ki() : void 0;
    for (rt.set($, Q), rt.set(Q, $); ++Yt < er; ) {
      var zt = $[Yt],
        Sr = Q[Yt];
      if (Se) var Ii = Ft ? Se(Sr, zt, Yt, Q, $, rt) : Se(zt, Sr, Yt, $, Q, rt);
      if (Ii !== void 0) {
        if (Ii) continue;
        Nr = !1;
        break;
      }
      if (tr) {
        if (
          !Ie(Q, function (ai, Ki) {
            if (!xe(tr, Ki) && (zt === ai || Lt(zt, ai, he, Se, rt)))
              return tr.push(Ki);
          })
        ) {
          Nr = !1;
          break;
        }
      } else if (!(zt === Sr || Lt(zt, Sr, he, Se, rt))) {
        Nr = !1;
        break;
      }
    }
    return rt.delete($), rt.delete(Q), Nr;
  }
  function bu($, Q, he, Se, Lt, rt, Ft) {
    switch (he) {
      case me:
        if ($.byteLength != Q.byteLength || $.byteOffset != Q.byteOffset)
          return !1;
        ($ = $.buffer), (Q = Q.buffer);
      case le:
        return !($.byteLength != Q.byteLength || !rt(new Ht($), new Ht(Q)));
      case b:
      case E:
      case G:
        return Ra(+$, +Q);
      case D:
        return $.name == Q.name && $.message == Q.message;
      case F:
      case y:
        return $ == Q + "";
      case W:
        var er = _e;
      case z:
        var wt = Se & s;
        if ((er || (er = Ve), $.size != Q.size && !wt)) return !1;
        var qt = Ft.get($);
        if (qt) return qt == Q;
        (Se |= a), Ft.set($, Q);
        var Yt = Os(er($), er(Q), Se, Lt, rt, Ft);
        return Ft.delete($), Yt;
      case T:
        if (Qe) return Qe.call($) == Qe.call(Q);
    }
    return !1;
  }
  function Da($, Q, he, Se, Lt, rt) {
    var Ft = he & s,
      er = Ns($),
      wt = er.length,
      qt = Ns(Q),
      Yt = qt.length;
    if (wt != Yt && !Ft) return !1;
    for (var Nr = wt; Nr--; ) {
      var tr = er[Nr];
      if (!(Ft ? tr in Q : qe.call(Q, tr))) return !1;
    }
    var zt = rt.get($);
    if (zt && rt.get(Q)) return zt == Q;
    var Sr = !0;
    rt.set($, Q), rt.set(Q, $);
    for (var Ii = Ft; ++Nr < wt; ) {
      tr = er[Nr];
      var ai = $[tr],
        Ki = Q[tr];
      if (Se) var Eo = Ft ? Se(Ki, ai, tr, Q, $, rt) : Se(ai, Ki, tr, $, Q, rt);
      if (!(Eo === void 0 ? ai === Ki || Lt(ai, Ki, he, Se, rt) : Eo)) {
        Sr = !1;
        break;
      }
      Ii || (Ii = tr == "constructor");
    }
    if (Sr && !Ii) {
      var as = $.constructor,
        ar = Q.constructor;
      as != ar &&
        "constructor" in $ &&
        "constructor" in Q &&
        !(
          typeof as == "function" &&
          as instanceof as &&
          typeof ar == "function" &&
          ar instanceof ar
        ) &&
        (Sr = !1);
    }
    return rt.delete($), rt.delete(Q), Sr;
  }
  function Ns($) {
    return wo($, Su, Pa);
  }
  function Nn($, Q) {
    var he = $.__data__;
    return Ca(Q) ? he[typeof Q == "string" ? "string" : "hash"] : he.map;
  }
  function Vr($, Q) {
    var he = Le($, Q);
    return wu(he) ? he : void 0;
  }
  function xa($) {
    var Q = qe.call($, Kt),
      he = $[Kt];
    try {
      $[Kt] = void 0;
      var Se = !0;
    } catch {}
    var Lt = Ne.call($);
    return Se && (Q ? ($[Kt] = he) : delete $[Kt]), Lt;
  }
  var Pa = yt
      ? function ($) {
          return $ == null
            ? []
            : (($ = Object($)),
              Pe(yt($), function (Q) {
                return ct.call($, Q);
              }));
        }
      : Bt,
    Hi = ns;
  ((Ge && Hi(new Ge(new ArrayBuffer(1))) != me) ||
    (ze && Hi(new ze()) != W) ||
    (It && Hi(It.resolve()) != V) ||
    (We && Hi(new We()) != z) ||
    (Ke && Hi(new Ke()) != fe)) &&
    (Hi = function ($) {
      var Q = ns($),
        he = Q == K ? $.constructor : void 0,
        Se = he ? fn(he) : "";
      if (Se)
        switch (Se) {
          case Je:
            return me;
          case Xe:
            return W;
          case Dt:
            return V;
          case Ze:
            return z;
          case Ye:
            return fe;
        }
      return Q;
    });
  function Ma($, Q) {
    return (
      (Q = Q ?? u),
      !!Q &&
        (typeof $ == "number" || de.test($)) &&
        $ > -1 &&
        $ % 1 == 0 &&
        $ < Q
    );
  }
  function Ca($) {
    var Q = typeof $;
    return Q == "string" || Q == "number" || Q == "symbol" || Q == "boolean"
      ? $ !== "__proto__"
      : $ === null;
  }
  function Oa($) {
    return !!Oe && Oe in $;
  }
  function Na($) {
    var Q = $ && $.constructor,
      he = (typeof Q == "function" && Q.prototype) || Be;
    return $ === he;
  }
  function _u($) {
    return Ne.call($);
  }
  function fn($) {
    if ($ != null) {
      try {
        return Me.call($);
      } catch {}
      try {
        return $ + "";
      } catch {}
    }
    return "";
  }
  function Ra($, Q) {
    return $ === Q || ($ !== $ && Q !== Q);
  }
  var Ta = bo(
      (function () {
        return arguments;
      })()
    )
      ? bo
      : function ($) {
          return os($) && qe.call($, "callee") && !ct.call($, "callee");
        },
    Rs = Array.isArray;
  function Eu($) {
    return $ != null && Ua($.length) && !Ts($);
  }
  var _o = _t || Ut;
  function Au($, Q) {
    return ss($, Q);
  }
  function Ts($) {
    if (!Ba($)) return !1;
    var Q = ns($);
    return Q == S || Q == M || Q == d || Q == q;
  }
  function Ua($) {
    return typeof $ == "number" && $ > -1 && $ % 1 == 0 && $ <= u;
  }
  function Ba($) {
    var Q = typeof $;
    return $ != null && (Q == "object" || Q == "function");
  }
  function os($) {
    return $ != null && typeof $ == "object";
  }
  var La = ae ? Fe(ae) : Sa;
  function Su($) {
    return Eu($) ? Ea($) : Ia($);
  }
  function Bt() {
    return [];
  }
  function Ut() {
    return !1;
  }
  r.exports = Au;
})(ru, ru.exports);
var jD = ru.exports;
const $D = $l(jD);
var FD = {};
function zD(r, e) {
  if (r.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++) t[i] = 255;
  for (var s = 0; s < r.length; s++) {
    var a = r.charAt(s),
      u = a.charCodeAt(0);
    if (t[u] !== 255) throw new TypeError(a + " is ambiguous");
    t[u] = s;
  }
  var h = r.length,
    p = r.charAt(0),
    d = Math.log(h) / Math.log(256),
    b = Math.log(256) / Math.log(h);
  function E(M) {
    if (
      (M instanceof Uint8Array ||
        (ArrayBuffer.isView(M)
          ? (M = new Uint8Array(M.buffer, M.byteOffset, M.byteLength))
          : Array.isArray(M) && (M = Uint8Array.from(M))),
      !(M instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (M.length === 0) return "";
    for (var W = 0, G = 0, ee = 0, K = M.length; ee !== K && M[ee] === 0; )
      ee++, W++;
    for (var V = ((K - ee) * b + 1) >>> 0, q = new Uint8Array(V); ee !== K; ) {
      for (
        var F = M[ee], z = 0, y = V - 1;
        (F !== 0 || z < G) && y !== -1;
        y--, z++
      )
        (F += (256 * q[y]) >>> 0), (q[y] = F % h >>> 0), (F = (F / h) >>> 0);
      if (F !== 0) throw new Error("Non-zero carry");
      (G = z), ee++;
    }
    for (var T = V - G; T !== V && q[T] === 0; ) T++;
    for (var ne = p.repeat(W); T < V; ++T) ne += r.charAt(q[T]);
    return ne;
  }
  function D(M) {
    if (typeof M != "string") throw new TypeError("Expected String");
    if (M.length === 0) return new Uint8Array();
    var W = 0;
    if (M[W] !== " ") {
      for (var G = 0, ee = 0; M[W] === p; ) G++, W++;
      for (
        var K = ((M.length - W) * d + 1) >>> 0, V = new Uint8Array(K);
        M[W];

      ) {
        var q = t[M.charCodeAt(W)];
        if (q === 255) return;
        for (var F = 0, z = K - 1; (q !== 0 || F < ee) && z !== -1; z--, F++)
          (q += (h * V[z]) >>> 0),
            (V[z] = q % 256 >>> 0),
            (q = (q / 256) >>> 0);
        if (q !== 0) throw new Error("Non-zero carry");
        (ee = F), W++;
      }
      if (M[W] !== " ") {
        for (var y = K - ee; y !== K && V[y] === 0; ) y++;
        for (var T = new Uint8Array(G + (K - y)), ne = G; y !== K; )
          T[ne++] = V[y++];
        return T;
      }
    }
  }
  function S(M) {
    var W = D(M);
    if (W) return W;
    throw new Error(`Non-${e} character`);
  }
  return { encode: E, decodeUnsafe: D, decode: S };
}
var kD = zD,
  HD = kD;
const pm = (r) => {
    if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
      return r;
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (ArrayBuffer.isView(r))
      return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  KD = (r) => new TextEncoder().encode(r),
  VD = (r) => new TextDecoder().decode(r);
let GD = class {
  constructor(e, t, i) {
    (this.name = e), (this.prefix = t), (this.baseEncode = i);
  }
  encode(e) {
    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
};
class WD {
  constructor(e, t, i) {
    if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(e)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(e.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e) {
    return gm(this, e);
  }
}
class YD {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return gm(this, e);
  }
  decode(e) {
    const t = e[0],
      i = this.decoders[t];
    if (i) return i.decode(e);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        e
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
}
const gm = (r, e) =>
  new YD({
    ...(r.decoders || { [r.prefix]: r }),
    ...(e.decoders || { [e.prefix]: e }),
  });
let QD = class {
  constructor(e, t, i, s) {
    (this.name = e),
      (this.prefix = t),
      (this.baseEncode = i),
      (this.baseDecode = s),
      (this.encoder = new GD(e, t, i)),
      (this.decoder = new WD(e, t, s));
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
const vu = ({ name: r, prefix: e, encode: t, decode: i }) => new QD(r, e, t, i),
  ba = ({ prefix: r, name: e, alphabet: t }) => {
    const { encode: i, decode: s } = HD(t, e);
    return vu({ prefix: r, name: e, encode: i, decode: (a) => pm(s(a)) });
  },
  JD = (r, e, t, i) => {
    const s = {};
    for (let b = 0; b < e.length; ++b) s[e[b]] = b;
    let a = r.length;
    for (; r[a - 1] === "="; ) --a;
    const u = new Uint8Array(((a * t) / 8) | 0);
    let h = 0,
      p = 0,
      d = 0;
    for (let b = 0; b < a; ++b) {
      const E = s[r[b]];
      if (E === void 0) throw new SyntaxError(`Non-${i} character`);
      (p = (p << t) | E),
        (h += t),
        h >= 8 && ((h -= 8), (u[d++] = 255 & (p >> h)));
    }
    if (h >= t || 255 & (p << (8 - h)))
      throw new SyntaxError("Unexpected end of data");
    return u;
  },
  XD = (r, e, t) => {
    const i = e[e.length - 1] === "=",
      s = (1 << t) - 1;
    let a = "",
      u = 0,
      h = 0;
    for (let p = 0; p < r.length; ++p)
      for (h = (h << 8) | r[p], u += 8; u > t; )
        (u -= t), (a += e[s & (h >> u)]);
    if ((u && (a += e[s & (h << (t - u))]), i))
      for (; (a.length * t) & 7; ) a += "=";
    return a;
  },
  vr = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) =>
    vu({
      prefix: e,
      name: r,
      encode(s) {
        return XD(s, i, t);
      },
      decode(s) {
        return JD(s, i, t, r);
      },
    }),
  ZD = vu({
    prefix: "\0",
    name: "identity",
    encode: (r) => VD(r),
    decode: (r) => KD(r),
  });
var ex = Object.freeze({ __proto__: null, identity: ZD });
const tx = vr({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var rx = Object.freeze({ __proto__: null, base2: tx });
const ix = vr({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var nx = Object.freeze({ __proto__: null, base8: ix });
const sx = ba({ prefix: "9", name: "base10", alphabet: "0123456789" });
var ox = Object.freeze({ __proto__: null, base10: sx });
const ax = vr({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  cx = vr({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var ux = Object.freeze({ __proto__: null, base16: ax, base16upper: cx });
const hx = vr({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  lx = vr({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  fx = vr({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  dx = vr({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  px = vr({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  gx = vr({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  mx = vr({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  vx = vr({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  yx = vr({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var wx = Object.freeze({
  __proto__: null,
  base32: hx,
  base32upper: lx,
  base32pad: fx,
  base32padupper: dx,
  base32hex: px,
  base32hexupper: gx,
  base32hexpad: mx,
  base32hexpadupper: vx,
  base32z: yx,
});
const bx = ba({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  _x = ba({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var Ex = Object.freeze({ __proto__: null, base36: bx, base36upper: _x });
const Ax = ba({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  Sx = ba({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var Ix = Object.freeze({ __proto__: null, base58btc: Ax, base58flickr: Sx });
const Dx = vr({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  xx = vr({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  Px = vr({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  Mx = vr({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var Cx = Object.freeze({
  __proto__: null,
  base64: Dx,
  base64pad: xx,
  base64url: Px,
  base64urlpad: Mx,
});
const mm = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  Ox = mm.reduce((r, e, t) => ((r[t] = e), r), []),
  Nx = mm.reduce((r, e, t) => ((r[e.codePointAt(0)] = t), r), []);
function Rx(r) {
  return r.reduce((e, t) => ((e += Ox[t]), e), "");
}
function Tx(r) {
  const e = [];
  for (const t of r) {
    const i = Nx[t.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
const Ux = vu({ prefix: "🚀", name: "base256emoji", encode: Rx, decode: Tx });
var Bx = Object.freeze({ __proto__: null, base256emoji: Ux }),
  Lx = vm,
  Vp = 128,
  qx = 127,
  jx = ~qx,
  $x = Math.pow(2, 31);
function vm(r, e, t) {
  (e = e || []), (t = t || 0);
  for (var i = t; r >= $x; ) (e[t++] = (r & 255) | Vp), (r /= 128);
  for (; r & jx; ) (e[t++] = (r & 255) | Vp), (r >>>= 7);
  return (e[t] = r | 0), (vm.bytes = t - i + 1), e;
}
var Fx = Tl,
  zx = 128,
  Gp = 127;
function Tl(r, i) {
  var t = 0,
    i = i || 0,
    s = 0,
    a = i,
    u,
    h = r.length;
  do {
    if (a >= h)
      throw ((Tl.bytes = 0), new RangeError("Could not decode varint"));
    (u = r[a++]),
      (t += s < 28 ? (u & Gp) << s : (u & Gp) * Math.pow(2, s)),
      (s += 7);
  } while (u >= zx);
  return (Tl.bytes = a - i), t;
}
var kx = Math.pow(2, 7),
  Hx = Math.pow(2, 14),
  Kx = Math.pow(2, 21),
  Vx = Math.pow(2, 28),
  Gx = Math.pow(2, 35),
  Wx = Math.pow(2, 42),
  Yx = Math.pow(2, 49),
  Qx = Math.pow(2, 56),
  Jx = Math.pow(2, 63),
  Xx = function (r) {
    return r < kx
      ? 1
      : r < Hx
      ? 2
      : r < Kx
      ? 3
      : r < Vx
      ? 4
      : r < Gx
      ? 5
      : r < Wx
      ? 6
      : r < Yx
      ? 7
      : r < Qx
      ? 8
      : r < Jx
      ? 9
      : 10;
  },
  Zx = { encode: Lx, decode: Fx, encodingLength: Xx },
  ym = Zx;
const Wp = (r, e, t = 0) => (ym.encode(r, e, t), e),
  Yp = (r) => ym.encodingLength(r),
  Ul = (r, e) => {
    const t = e.byteLength,
      i = Yp(r),
      s = i + Yp(t),
      a = new Uint8Array(s + t);
    return Wp(r, a, 0), Wp(t, a, i), a.set(e, s), new e7(r, t, e, a);
  };
class e7 {
  constructor(e, t, i, s) {
    (this.code = e), (this.size = t), (this.digest = i), (this.bytes = s);
  }
}
const wm = ({ name: r, code: e, encode: t }) => new t7(r, e, t);
class t7 {
  constructor(e, t, i) {
    (this.name = e), (this.code = t), (this.encode = i);
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array
        ? Ul(this.code, t)
        : t.then((i) => Ul(this.code, i));
    } else throw Error("Unknown type, must be binary type");
  }
}
const bm = (r) => async (e) => new Uint8Array(await crypto.subtle.digest(r, e)),
  r7 = wm({ name: "sha2-256", code: 18, encode: bm("SHA-256") }),
  i7 = wm({ name: "sha2-512", code: 19, encode: bm("SHA-512") });
var n7 = Object.freeze({ __proto__: null, sha256: r7, sha512: i7 });
const _m = 0,
  s7 = "identity",
  Em = pm,
  o7 = (r) => Ul(_m, Em(r)),
  a7 = { code: _m, name: s7, encode: Em, digest: o7 };
var c7 = Object.freeze({ __proto__: null, identity: a7 });
new TextEncoder(), new TextDecoder();
const Qp = {
  ...ex,
  ...rx,
  ...nx,
  ...ox,
  ...ux,
  ...wx,
  ...Ex,
  ...Ix,
  ...Cx,
  ...Bx,
};
({ ...n7, ...c7 });
function u7(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? globalThis.Buffer.allocUnsafe(r)
    : new Uint8Array(r);
}
function Am(r, e, t, i) {
  return {
    name: r,
    prefix: e,
    encoder: { name: r, prefix: e, encode: t },
    decoder: { decode: i },
  };
}
const Jp = Am(
    "utf8",
    "u",
    (r) => "u" + new TextDecoder("utf8").decode(r),
    (r) => new TextEncoder().encode(r.substring(1))
  ),
  el = Am(
    "ascii",
    "a",
    (r) => {
      let e = "a";
      for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
      return e;
    },
    (r) => {
      r = r.substring(1);
      const e = u7(r.length);
      for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
      return e;
    }
  ),
  h7 = {
    utf8: Jp,
    "utf-8": Jp,
    hex: Qp.base16,
    latin1: el,
    ascii: el,
    binary: el,
    ...Qp,
  };
function l7(r, e = "utf8") {
  const t = h7[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(r, "utf8")
    : t.decoder.decode(`${t.prefix}${r}`);
}
const Sm = "wc",
  f7 = 2,
  ff = "core",
  Wn = `${Sm}@2:${ff}:`,
  d7 = { name: ff, logger: "error" },
  p7 = { database: ":memory:" },
  g7 = "crypto",
  Xp = "client_ed25519_seed",
  m7 = ye.ONE_DAY,
  v7 = "keychain",
  y7 = "0.3",
  w7 = "messages",
  b7 = "0.3",
  _7 = ye.SIX_HOURS,
  E7 = "publisher",
  Im = "irn",
  A7 = "error",
  Dm = "wss://relay.walletconnect.org",
  S7 = "relayer",
  zr = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  I7 = "_subscription",
  vi = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  D7 = 0.1,
  x7 = "2.15.1",
  P7 = 1e4,
  M7 = "0.3",
  C7 = "WALLETCONNECT_CLIENT_ID",
  en = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  },
  O7 = "subscription",
  N7 = "0.3",
  R7 = ye.FIVE_SECONDS * 1e3,
  T7 = "pairing",
  U7 = "0.3",
  Ho = {
    wc_pairingDelete: {
      req: { ttl: ye.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: ye.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: ye.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: ye.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: ye.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: ye.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  ro = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  Oi = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  B7 = "history",
  L7 = "0.3",
  q7 = "expirer",
  yi = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  j7 = "0.3",
  tl = "verify-api",
  $7 = "https://verify.walletconnect.com",
  xm = "https://verify.walletconnect.org",
  Qo = xm,
  F7 = [$7, xm],
  z7 = "echo",
  k7 = "https://echo.walletconnect.com";
class H7 {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.keychain = new Map()),
      (this.name = v7),
      (this.version = y7),
      (this.initialized = !1),
      (this.storagePrefix = Wn),
      (this.init = async () => {
        if (!this.initialized) {
          const i = await this.getKeyChain();
          typeof i < "u" && (this.keychain = i), (this.initialized = !0);
        }
      }),
      (this.has = (i) => (this.isInitialized(), this.keychain.has(i))),
      (this.set = async (i, s) => {
        this.isInitialized(), this.keychain.set(i, s), await this.persist();
      }),
      (this.get = (i) => {
        this.isInitialized();
        const s = this.keychain.get(i);
        if (typeof s > "u") {
          const { message: a } = ge("NO_MATCHING_KEY", `${this.name}: ${i}`);
          throw new Error(a);
        }
        return s;
      }),
      (this.del = async (i) => {
        this.isInitialized(), this.keychain.delete(i), await this.persist();
      }),
      (this.core = e),
      (this.logger = Kr(t, this.name));
  }
  get context() {
    return Hr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, r1(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? i1(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ge("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class K7 {
  constructor(e, t, i) {
    (this.core = e),
      (this.logger = t),
      (this.name = g7),
      (this.randomSessionIdentifier = xl()),
      (this.initialized = !1),
      (this.init = async () => {
        this.initialized ||
          (await this.keychain.init(), (this.initialized = !0));
      }),
      (this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s))),
      (this.getClientId = async () => {
        this.isInitialized();
        const s = await this.getClientSeed(),
          a = qp(s);
        return om(a.publicKey);
      }),
      (this.generateKeyPair = () => {
        this.isInitialized();
        const s = vS();
        return this.setPrivateKey(s.publicKey, s.privateKey);
      }),
      (this.signJWT = async (s) => {
        this.isInitialized();
        const a = await this.getClientSeed(),
          u = qp(a),
          h = this.randomSessionIdentifier;
        return await Q4(h, s, m7, u);
      }),
      (this.generateSharedKey = (s, a, u) => {
        this.isInitialized();
        const h = this.getPrivateKey(s),
          p = yS(h, a);
        return this.setSymKey(p, u);
      }),
      (this.setSymKey = async (s, a) => {
        this.isInitialized();
        const u = a || jc(s);
        return await this.keychain.set(u, s), u;
      }),
      (this.deleteKeyPair = async (s) => {
        this.isInitialized(), await this.keychain.del(s);
      }),
      (this.deleteSymKey = async (s) => {
        this.isInitialized(), await this.keychain.del(s);
      }),
      (this.encode = async (s, a, u) => {
        this.isInitialized();
        const h = K1(u),
          p = Mn(a);
        if (mp(h)) {
          const D = h.senderPublicKey,
            S = h.receiverPublicKey;
          s = await this.generateSharedKey(D, S);
        }
        const d = this.getSymKey(s),
          { type: b, senderPublicKey: E } = h;
        return bS({ type: b, symKey: d, message: p, senderPublicKey: E });
      }),
      (this.decode = async (s, a, u) => {
        this.isInitialized();
        const h = AS(a, u);
        if (mp(h)) {
          const p = h.receiverPublicKey,
            d = h.senderPublicKey;
          s = await this.generateSharedKey(p, d);
        }
        try {
          const p = this.getSymKey(s),
            d = _S({ symKey: p, encoded: a });
          return ma(d);
        } catch (p) {
          this.logger.error(
            `Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`
          ),
            this.logger.error(p);
        }
      }),
      (this.getPayloadType = (s) => {
        const a = Jc(s);
        return pa(a.type);
      }),
      (this.getPayloadSenderPublicKey = (s) => {
        const a = Jc(s);
        return a.senderPublicKey ? Ei(a.senderPublicKey, Cr) : void 0;
      }),
      (this.core = e),
      (this.logger = Kr(t, this.name)),
      (this.keychain = i || new H7(this.core, this.logger));
  }
  get context() {
    return Hr(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(Xp);
    } catch {
      (e = xl()), await this.keychain.set(Xp, e);
    }
    return l7(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ge("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class V7 extends D4 {
  constructor(e, t) {
    super(e, t),
      (this.logger = e),
      (this.core = t),
      (this.messages = new Map()),
      (this.name = w7),
      (this.version = b7),
      (this.initialized = !1),
      (this.storagePrefix = Wn),
      (this.init = async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const i = await this.getRelayerMessages();
            typeof i < "u" && (this.messages = i),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                size: this.messages.size,
              });
          } catch (i) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(i);
          } finally {
            this.initialized = !0;
          }
        }
      }),
      (this.set = async (i, s) => {
        this.isInitialized();
        const a = _s(s);
        let u = this.messages.get(i);
        return (
          typeof u > "u" && (u = {}),
          typeof u[a] < "u" ||
            ((u[a] = s), this.messages.set(i, u), await this.persist()),
          a
        );
      }),
      (this.get = (i) => {
        this.isInitialized();
        let s = this.messages.get(i);
        return typeof s > "u" && (s = {}), s;
      }),
      (this.has = (i, s) => {
        this.isInitialized();
        const a = this.get(i),
          u = _s(s);
        return typeof a[u] < "u";
      }),
      (this.del = async (i) => {
        this.isInitialized(), this.messages.delete(i), await this.persist();
      }),
      (this.logger = Kr(e, this.name)),
      (this.core = t);
  }
  get context() {
    return Hr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, r1(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? i1(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ge("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class G7 extends x4 {
  constructor(e, t) {
    super(e, t),
      (this.relayer = e),
      (this.logger = t),
      (this.events = new Ai.EventEmitter()),
      (this.name = E7),
      (this.queue = new Map()),
      (this.publishTimeout = ye.toMiliseconds(ye.ONE_MINUTE)),
      (this.failedPublishTimeout = ye.toMiliseconds(ye.ONE_SECOND)),
      (this.needsTransportRestart = !1),
      (this.publish = async (i, s, a) => {
        var u;
        this.logger.debug("Publishing Payload"),
          this.logger.trace({
            type: "method",
            method: "publish",
            params: { topic: i, message: s, opts: a },
          });
        const h = (a == null ? void 0 : a.ttl) || _7,
          p = Pl(a),
          d = (a == null ? void 0 : a.prompt) || !1,
          b = (a == null ? void 0 : a.tag) || 0,
          E = (a == null ? void 0 : a.id) || Es().toString(),
          D = {
            topic: i,
            message: s,
            opts: {
              ttl: h,
              relay: p,
              prompt: d,
              tag: b,
              id: E,
              attestation: a == null ? void 0 : a.attestation,
            },
          },
          S = `Failed to publish payload, please try again. id:${E} tag:${b}`,
          M = Date.now();
        let W,
          G = 1;
        try {
          for (; W === void 0; ) {
            if (Date.now() - M > this.publishTimeout) throw new Error(S);
            this.logger.trace(
              { id: E, attempts: G },
              `publisher.publish - attempt ${G}`
            ),
              (W = await await io(
                this.rpcPublish(
                  i,
                  s,
                  h,
                  p,
                  d,
                  b,
                  E,
                  a == null ? void 0 : a.attestation
                ).catch((ee) => this.logger.warn(ee)),
                this.publishTimeout,
                S
              )),
              G++,
              W ||
                (await new Promise((ee) =>
                  setTimeout(ee, this.failedPublishTimeout)
                ));
          }
          this.relayer.events.emit(zr.publish, D),
            this.logger.debug("Successfully Published Payload"),
            this.logger.trace({
              type: "method",
              method: "publish",
              params: { id: E, topic: i, message: s, opts: a },
            });
        } catch (ee) {
          if (
            (this.logger.debug("Failed to Publish Payload"),
            this.logger.error(ee),
            (u = a == null ? void 0 : a.internal) != null &&
              u.throwOnFailedPublish)
          )
            throw ee;
          this.queue.set(E, D);
        }
      }),
      (this.on = (i, s) => {
        this.events.on(i, s);
      }),
      (this.once = (i, s) => {
        this.events.once(i, s);
      }),
      (this.off = (i, s) => {
        this.events.off(i, s);
      }),
      (this.removeListener = (i, s) => {
        this.events.removeListener(i, s);
      }),
      (this.relayer = e),
      (this.logger = Kr(t, this.name)),
      this.registerEventListeners();
  }
  get context() {
    return Hr(this.logger);
  }
  rpcPublish(e, t, i, s, a, u, h, p) {
    var d, b, E, D;
    const S = {
      method: Wo(s.protocol).publish,
      params: {
        topic: e,
        message: t,
        ttl: i,
        prompt: a,
        tag: u,
        attestation: p,
      },
      id: h,
    };
    return (
      Fr((d = S.params) == null ? void 0 : d.prompt) &&
        ((b = S.params) == null || delete b.prompt),
      Fr((E = S.params) == null ? void 0 : E.tag) &&
        ((D = S.params) == null || delete D.tag),
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "message", direction: "outgoing", request: S }),
      this.relayer.request(S)
    );
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: i, opts: s } = e;
      await this.publish(t, i, s);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(va.pulse, () => {
      if (this.needsTransportRestart) {
        (this.needsTransportRestart = !1),
          this.relayer.events.emit(zr.connection_stalled);
        return;
      }
      this.checkQueue();
    }),
      this.relayer.on(zr.message_ack, (e) => {
        this.removeRequestFromQueue(e.id.toString());
      });
  }
}
class W7 {
  constructor() {
    (this.map = new Map()),
      (this.set = (e, t) => {
        const i = this.get(e);
        this.exists(e, t) || this.map.set(e, [...i, t]);
      }),
      (this.get = (e) => this.map.get(e) || []),
      (this.exists = (e, t) => this.get(e).includes(t)),
      (this.delete = (e, t) => {
        if (typeof t > "u") {
          this.map.delete(e);
          return;
        }
        if (!this.map.has(e)) return;
        const i = this.get(e);
        if (!this.exists(e, t)) return;
        const s = i.filter((a) => a !== t);
        if (!s.length) {
          this.map.delete(e);
          return;
        }
        this.map.set(e, s);
      }),
      (this.clear = () => {
        this.map.clear();
      });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var Y7 = Object.defineProperty,
  Q7 = Object.defineProperties,
  J7 = Object.getOwnPropertyDescriptors,
  Zp = Object.getOwnPropertySymbols,
  X7 = Object.prototype.hasOwnProperty,
  Z7 = Object.prototype.propertyIsEnumerable,
  eg = (r, e, t) =>
    e in r
      ? Y7(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Ko = (r, e) => {
    for (var t in e || (e = {})) X7.call(e, t) && eg(r, t, e[t]);
    if (Zp) for (var t of Zp(e)) Z7.call(e, t) && eg(r, t, e[t]);
    return r;
  },
  rl = (r, e) => Q7(r, J7(e));
class eP extends C4 {
  constructor(e, t) {
    super(e, t),
      (this.relayer = e),
      (this.logger = t),
      (this.subscriptions = new Map()),
      (this.topicMap = new W7()),
      (this.events = new Ai.EventEmitter()),
      (this.name = O7),
      (this.version = N7),
      (this.pending = new Map()),
      (this.cached = []),
      (this.initialized = !1),
      (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
      (this.pollingInterval = 20),
      (this.storagePrefix = Wn),
      (this.subscribeTimeout = ye.toMiliseconds(ye.ONE_MINUTE)),
      (this.restartInProgress = !1),
      (this.batchSubscribeTopicsLimit = 500),
      (this.pendingBatchMessages = []),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          this.registerEventListeners(),
          (this.clientId = await this.relayer.core.crypto.getClientId()));
      }),
      (this.subscribe = async (i, s) => {
        await this.restartToComplete(),
          this.isInitialized(),
          this.logger.debug("Subscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "subscribe",
            params: { topic: i, opts: s },
          });
        try {
          const a = Pl(s),
            u = { topic: i, relay: a };
          this.pending.set(i, u);
          const h = await this.rpcSubscribe(i, a);
          return (
            typeof h == "string" &&
              (this.onSubscribe(h, u),
              this.logger.debug("Successfully Subscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "subscribe",
                params: { topic: i, opts: s },
              })),
            h
          );
        } catch (a) {
          throw (
            (this.logger.debug("Failed to Subscribe Topic"),
            this.logger.error(a),
            a)
          );
        }
      }),
      (this.unsubscribe = async (i, s) => {
        await this.restartToComplete(),
          this.isInitialized(),
          typeof (s == null ? void 0 : s.id) < "u"
            ? await this.unsubscribeById(i, s.id, s)
            : await this.unsubscribeByTopic(i, s);
      }),
      (this.isSubscribed = async (i) => {
        if (this.topics.includes(i)) return !0;
        const s = `${this.pendingSubscriptionWatchLabel}_${i}`;
        return await new Promise((a, u) => {
          const h = new ye.Watch();
          h.start(s);
          const p = setInterval(() => {
            !this.pending.has(i) &&
              this.topics.includes(i) &&
              (clearInterval(p), h.stop(s), a(!0)),
              h.elapsed(s) >= R7 &&
                (clearInterval(p),
                h.stop(s),
                u(new Error("Subscription resolution timeout")));
          }, this.pollingInterval);
        }).catch(() => !1);
      }),
      (this.on = (i, s) => {
        this.events.on(i, s);
      }),
      (this.once = (i, s) => {
        this.events.once(i, s);
      }),
      (this.off = (i, s) => {
        this.events.off(i, s);
      }),
      (this.removeListener = (i, s) => {
        this.events.removeListener(i, s);
      }),
      (this.start = async () => {
        await this.onConnect();
      }),
      (this.stop = async () => {
        await this.onDisconnect();
      }),
      (this.restart = async () => {
        (this.restartInProgress = !0),
          await this.restore(),
          await this.reset(),
          (this.restartInProgress = !1);
      }),
      (this.relayer = e),
      (this.logger = Kr(t, this.name)),
      (this.clientId = "");
  }
  get context() {
    return Hr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.relayer.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let i = !1;
    try {
      i = this.getSubscription(e).topic === t;
    } catch {}
    return i;
  }
  onEnable() {
    (this.cached = []), (this.initialized = !0);
  }
  onDisable() {
    (this.cached = this.values),
      this.subscriptions.clear(),
      this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const i = this.topicMap.get(e);
    await Promise.all(i.map(async (s) => await this.unsubscribeById(e, s, t)));
  }
  async unsubscribeById(e, t, i) {
    this.logger.debug("Unsubscribing Topic"),
      this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: { topic: e, id: t, opts: i },
      });
    try {
      const s = Pl(i);
      await this.rpcUnsubscribe(e, t, s);
      const a = Rt("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, a),
        this.logger.debug("Successfully Unsubscribed Topic"),
        this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: { topic: e, id: t, opts: i },
        });
    } catch (s) {
      throw (
        (this.logger.debug("Failed to Unsubscribe Topic"),
        this.logger.error(s),
        s)
      );
    }
  }
  async rpcSubscribe(e, t) {
    const i = { method: Wo(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return (await await io(
        this.relayer.request(i).catch((s) => this.logger.warn(s)),
        this.subscribeTimeout
      ))
        ? _s(e + this.clientId)
        : null;
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
        this.relayer.events.emit(zr.connection_stalled);
    }
    return null;
  }
  async rpcBatchSubscribe(e) {
    if (!e.length) return;
    const t = e[0].relay,
      i = {
        method: Wo(t.protocol).batchSubscribe,
        params: { topics: e.map((s) => s.topic) },
      };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    try {
      return await await io(
        this.relayer.request(i).catch((s) => this.logger.warn(s)),
        this.subscribeTimeout
      );
    } catch {
      this.relayer.events.emit(zr.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e) {
    if (!e.length) return;
    const t = e[0].relay,
      i = {
        method: Wo(t.protocol).batchFetchMessages,
        params: { topics: e.map((a) => a.topic) },
      };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: i });
    let s;
    try {
      s = await await io(
        this.relayer.request(i).catch((a) => this.logger.warn(a)),
        this.subscribeTimeout
      );
    } catch {
      this.relayer.events.emit(zr.connection_stalled);
    }
    return s;
  }
  rpcUnsubscribe(e, t, i) {
    const s = {
      method: Wo(i.protocol).unsubscribe,
      params: { topic: e, id: t },
    };
    return (
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: s }),
      this.relayer.request(s)
    );
  }
  onSubscribe(e, t) {
    this.setSubscription(e, rl(Ko({}, t), { id: e })),
      this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length &&
      e.forEach((t) => {
        this.setSubscription(t.id, Ko({}, t)), this.pending.delete(t.topic);
      });
  }
  async onUnsubscribe(e, t, i) {
    this.events.removeAllListeners(t),
      this.hasSubscription(t, e) && this.deleteSubscription(t, i),
      await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.logger.debug("Setting subscription"),
      this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: e,
        subscription: t,
      }),
      this.addSubscription(e, t);
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, Ko({}, t)),
      this.topicMap.set(t.topic, e),
      this.events.emit(en.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"),
      this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: i } = ge("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"),
      this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: e,
        reason: t,
      });
    const i = this.getSubscription(e);
    this.subscriptions.delete(e),
      this.topicMap.delete(i.topic, e),
      this.events.emit(en.deleted, rl(Ko({}, i), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(en.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchFetchMessages(i), await this.batchSubscribe(i);
      }
    }
    this.events.emit(en.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length) return;
      if (this.subscriptions.size) {
        const { message: t } = ge("RESTORE_WILL_OVERRIDE", this.name);
        throw (
          (this.logger.error(t),
          this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
          new Error(t))
        );
      }
      (this.cached = e),
        this.logger.debug(
          `Successfully Restored subscriptions for ${this.name}`
        ),
        this.logger.trace({
          type: "method",
          method: "restore",
          subscriptions: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
        this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length) return;
    const t = await this.rpcBatchSubscribe(e);
    un(t) &&
      this.onBatchSubscribe(t.map((i, s) => rl(Ko({}, e[s]), { id: i })));
  }
  async batchFetchMessages(e) {
    if (!e.length) return;
    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
    const t = await this.rpcBatchFetchMessages(e);
    t &&
      t.messages &&
      (this.pendingBatchMessages = this.pendingBatchMessages.concat(
        t.messages
      ));
  }
  async onConnect() {
    await this.restart(), this.onEnable();
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || !this.relayer.connected) return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }),
      await this.batchSubscribe(e),
      this.pendingBatchMessages.length &&
        (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages),
        (this.pendingBatchMessages = []));
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(va.pulse, async () => {
      await this.checkPending();
    }),
      this.events.on(en.created, async (e) => {
        const t = en.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          await this.persist();
      }),
      this.events.on(en.deleted, async (e) => {
        const t = en.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          await this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ge("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress &&
      (await new Promise((e) => {
        const t = setInterval(() => {
          this.restartInProgress || (clearInterval(t), e());
        }, this.pollingInterval);
      }));
  }
}
var tP = Object.defineProperty,
  tg = Object.getOwnPropertySymbols,
  rP = Object.prototype.hasOwnProperty,
  iP = Object.prototype.propertyIsEnumerable,
  rg = (r, e, t) =>
    e in r
      ? tP(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  nP = (r, e) => {
    for (var t in e || (e = {})) rP.call(e, t) && rg(r, t, e[t]);
    if (tg) for (var t of tg(e)) iP.call(e, t) && rg(r, t, e[t]);
    return r;
  };
class sP extends P4 {
  constructor(e) {
    super(e),
      (this.protocol = "wc"),
      (this.version = 2),
      (this.events = new Ai.EventEmitter()),
      (this.name = S7),
      (this.transportExplicitlyClosed = !1),
      (this.initialized = !1),
      (this.connectionAttemptInProgress = !1),
      (this.connectionStatusPollingInterval = 20),
      (this.staleConnectionErrors = [
        "socket hang up",
        "stalled",
        "interrupted",
      ]),
      (this.hasExperiencedNetworkDisruption = !1),
      (this.requestsInFlight = new Map()),
      (this.heartBeatTimeout = ye.toMiliseconds(
        ye.THIRTY_SECONDS + ye.ONE_SECOND
      )),
      (this.request = async (t) => {
        var i, s;
        this.logger.debug("Publishing Request Payload");
        const a = t.id || Es().toString();
        await this.toEstablishConnection();
        try {
          const u = this.provider.request(t);
          this.requestsInFlight.set(a, { promise: u, request: t }),
            this.logger.trace(
              {
                id: a,
                method: t.method,
                topic: (i = t.params) == null ? void 0 : i.topic,
              },
              "relayer.request - attempt to publish..."
            );
          const h = await new Promise(async (p, d) => {
            const b = () => {
              d(new Error(`relayer.request - publish interrupted, id: ${a}`));
            };
            this.provider.on(vi.disconnect, b);
            const E = await u;
            this.provider.off(vi.disconnect, b), p(E);
          });
          return (
            this.logger.trace(
              {
                id: a,
                method: t.method,
                topic: (s = t.params) == null ? void 0 : s.topic,
              },
              "relayer.request - published"
            ),
            h
          );
        } catch (u) {
          throw (this.logger.debug(`Failed to Publish Request: ${a}`), u);
        } finally {
          this.requestsInFlight.delete(a);
        }
      }),
      (this.resetPingTimeout = () => {
        if (ia())
          try {
            clearTimeout(this.pingTimeout),
              (this.pingTimeout = setTimeout(() => {
                var t, i, s;
                (s =
                  (i = (t = this.provider) == null ? void 0 : t.connection) ==
                  null
                    ? void 0
                    : i.socket) == null || s.terminate();
              }, this.heartBeatTimeout));
          } catch (t) {
            this.logger.warn(t);
          }
      }),
      (this.onPayloadHandler = (t) => {
        this.onProviderPayload(t), this.resetPingTimeout();
      }),
      (this.onConnectHandler = () => {
        this.logger.trace("relayer connected"),
          this.startPingTimeout(),
          this.events.emit(zr.connect);
      }),
      (this.onDisconnectHandler = () => {
        this.logger.trace("relayer disconnected"), this.onProviderDisconnect();
      }),
      (this.onProviderErrorHandler = (t) => {
        this.logger.error(t),
          this.events.emit(zr.error, t),
          this.logger.info("Fatal socket error received, closing transport"),
          this.transportClose();
      }),
      (this.registerProviderListeners = () => {
        this.provider.on(vi.payload, this.onPayloadHandler),
          this.provider.on(vi.connect, this.onConnectHandler),
          this.provider.on(vi.disconnect, this.onDisconnectHandler),
          this.provider.on(vi.error, this.onProviderErrorHandler);
      }),
      (this.core = e.core),
      (this.logger =
        typeof e.logger < "u" && typeof e.logger != "string"
          ? Kr(e.logger, this.name)
          : ya(du({ level: e.logger || A7 }))),
      (this.messages = new V7(this.logger, e.core)),
      (this.subscriber = new eP(this, this.logger)),
      (this.publisher = new G7(this, this.logger)),
      (this.relayUrl = (e == null ? void 0 : e.relayUrl) || Dm),
      (this.projectId = e.projectId),
      (this.bundleId = c5()),
      (this.provider = {});
  }
  async init() {
    this.logger.trace("Initialized"),
      this.registerEventListeners(),
      await Promise.all([this.messages.init(), this.subscriber.init()]),
      await this.transportOpen(),
      (this.initialized = !0),
      setTimeout(async () => {
        this.subscriber.topics.length === 0 &&
          this.subscriber.pending.size === 0 &&
          (this.logger.info(
            "No topics subscribed to after init, closing transport"
          ),
          await this.transportClose(),
          (this.transportExplicitlyClosed = !1));
      }, P7);
  }
  get context() {
    return Hr(this.logger);
  }
  get connected() {
    var e, t, i;
    return (
      ((i =
        (t = (e = this.provider) == null ? void 0 : e.connection) == null
          ? void 0
          : t.socket) == null
        ? void 0
        : i.readyState) === 1
    );
  }
  get connecting() {
    var e, t, i;
    return (
      ((i =
        (t = (e = this.provider) == null ? void 0 : e.connection) == null
          ? void 0
          : t.socket) == null
        ? void 0
        : i.readyState) === 0
    );
  }
  async publish(e, t, i) {
    this.isInitialized(),
      await this.publisher.publish(e, t, i),
      await this.recordMessageEvent({
        topic: e,
        message: t,
        publishedAt: Date.now(),
      });
  }
  async subscribe(e, t) {
    var i;
    this.isInitialized();
    let s =
        ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) || "",
      a;
    const u = (h) => {
      h.topic === e && (this.subscriber.off(en.created, u), a());
    };
    return (
      await Promise.all([
        new Promise((h) => {
          (a = h), this.subscriber.on(en.created, u);
        }),
        new Promise(async (h) => {
          (s = (await this.subscriber.subscribe(e, t)) || s), h();
        }),
      ]),
      s
    );
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportDisconnect() {
    if (
      !this.hasExperiencedNetworkDisruption &&
      this.connected &&
      this.requestsInFlight.size > 0
    )
      try {
        await Promise.all(
          Array.from(this.requestsInFlight.values()).map((e) => e.promise)
        );
      } catch (e) {
        this.logger.warn(e);
      }
    this.hasExperiencedNetworkDisruption || this.connected
      ? await io(
          this.provider.disconnect(),
          2e3,
          "provider.disconnect()"
        ).catch(() => this.onProviderDisconnect())
      : this.onProviderDisconnect();
  }
  async transportClose() {
    (this.transportExplicitlyClosed = !0), await this.transportDisconnect();
  }
  async transportOpen(e) {
    await this.confirmOnlineStateOrThrow(),
      e &&
        e !== this.relayUrl &&
        ((this.relayUrl = e), await this.transportDisconnect()),
      await this.createProvider(),
      (this.connectionAttemptInProgress = !0),
      (this.transportExplicitlyClosed = !1);
    try {
      await new Promise(async (t, i) => {
        const s = () => {
          this.provider.off(vi.disconnect, s),
            i(new Error("Connection interrupted while trying to subscribe"));
        };
        this.provider.on(vi.disconnect, s),
          await io(
            this.provider.connect(),
            ye.toMiliseconds(ye.ONE_MINUTE),
            `Socket stalled when trying to connect to ${this.relayUrl}`
          ).catch((a) => {
            i(a);
          }),
          this.subscriber.start().catch((a) => {
            this.logger.error(a), this.onDisconnectHandler();
          }),
          (this.hasExperiencedNetworkDisruption = !1),
          t();
      });
    } catch (t) {
      this.logger.error(t);
      const i = t;
      if (
        ((this.hasExperiencedNetworkDisruption = !0),
        !this.isConnectionStalled(i.message))
      )
        throw t;
    } finally {
      this.connectionAttemptInProgress = !1;
    }
  }
  async restartTransport(e) {
    this.connectionAttemptInProgress ||
      ((this.relayUrl = e || this.relayUrl),
      await this.confirmOnlineStateOrThrow(),
      await this.transportClose(),
      await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!(await Dp()))
      throw new Error(
        "No internet connection detected. Please restart your network and try again."
      );
  }
  async handleBatchMessageEvents(e) {
    if ((e == null ? void 0 : e.length) === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t = e.sort((i, s) => i.publishedAt - s.publishedAt);
    this.logger.trace(`Batch of ${t.length} message events sorted`);
    for (const i of t)
      try {
        await this.onMessageEvent(i);
      } catch (s) {
        this.logger.warn(s);
      }
    this.logger.trace(`Batch of ${t.length} message events processed`);
  }
  startPingTimeout() {
    var e, t, i, s, a;
    if (ia())
      try {
        (t = (e = this.provider) == null ? void 0 : e.connection) != null &&
          t.socket &&
          ((a =
            (s = (i = this.provider) == null ? void 0 : i.connection) == null
              ? void 0
              : s.socket) == null ||
            a.once("ping", () => {
              this.resetPingTimeout();
            })),
          this.resetPingTimeout();
      } catch (u) {
        this.logger.warn(u);
      }
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    (this.provider = new ji(
      new qD(
        p5({
          sdkVersion: x7,
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: e,
          useOnCloseEvent: !0,
          bundleId: this.bundleId,
        })
      )
    )),
      this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: i } = e;
    await this.messages.set(t, i);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: i } = e;
    if (!i || i.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
    if (!(await this.subscriber.isSubscribed(t)))
      return (
        this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0
      );
    const s = this.messages.has(t, i);
    return s && this.logger.debug(`Ignoring duplicate message: ${i}`), s;
  }
  async onProviderPayload(e) {
    if (
      (this.logger.debug("Incoming Relay Payload"),
      this.logger.trace({ type: "payload", direction: "incoming", payload: e }),
      lf(e))
    ) {
      if (!e.method.endsWith(I7)) return;
      const t = e.params,
        { topic: i, message: s, publishedAt: a, attestation: u } = t.data,
        h = { topic: i, message: s, publishedAt: a, attestation: u };
      this.logger.debug("Emitting Relayer Payload"),
        this.logger.trace(nP({ type: "event", event: t.id }, h)),
        this.events.emit(t.id, h),
        await this.acknowledgePayload(e),
        await this.onMessageEvent(h);
    } else mu(e) && this.events.emit(zr.message_ack, e);
  }
  async onMessageEvent(e) {
    (await this.shouldIgnoreMessageEvent(e)) ||
      (this.events.emit(zr.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = pu(e.id, !0);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(vi.payload, this.onPayloadHandler),
      this.provider.off(vi.connect, this.onConnectHandler),
      this.provider.off(vi.disconnect, this.onDisconnectHandler),
      this.provider.off(vi.error, this.onProviderErrorHandler),
      clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e = await Dp();
    dI(async (t) => {
      e !== t &&
        ((e = t),
        t
          ? await this.restartTransport().catch((i) => this.logger.error(i))
          : ((this.hasExperiencedNetworkDisruption = !0),
            await this.transportDisconnect(),
            (this.transportExplicitlyClosed = !1)));
    });
  }
  async onProviderDisconnect() {
    await this.subscriber.stop(),
      this.requestsInFlight.clear(),
      clearTimeout(this.pingTimeout),
      this.events.emit(zr.disconnect),
      (this.connectionAttemptInProgress = !1),
      !this.transportExplicitlyClosed &&
        setTimeout(async () => {
          await this.transportOpen().catch((e) => this.logger.error(e));
        }, ye.toMiliseconds(D7));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ge("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    await this.confirmOnlineStateOrThrow(),
      !this.connected &&
        (this.connectionAttemptInProgress &&
          (await new Promise((e) => {
            const t = setInterval(() => {
              this.connected && (clearInterval(t), e());
            }, this.connectionStatusPollingInterval);
          })),
        await this.transportOpen());
  }
}
var oP = Object.defineProperty,
  ig = Object.getOwnPropertySymbols,
  aP = Object.prototype.hasOwnProperty,
  cP = Object.prototype.propertyIsEnumerable,
  ng = (r, e, t) =>
    e in r
      ? oP(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  sg = (r, e) => {
    for (var t in e || (e = {})) aP.call(e, t) && ng(r, t, e[t]);
    if (ig) for (var t of ig(e)) cP.call(e, t) && ng(r, t, e[t]);
    return r;
  };
class Ms extends M4 {
  constructor(e, t, i, s = Wn, a = void 0) {
    super(e, t, i, s),
      (this.core = e),
      (this.logger = t),
      (this.name = i),
      (this.map = new Map()),
      (this.version = M7),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Wn),
      (this.recentlyDeleted = []),
      (this.recentlyDeletedLimit = 200),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((u) => {
            this.getKey && u !== null && !Fr(u)
              ? this.map.set(this.getKey(u), u)
              : HS(u)
              ? this.map.set(u.id, u)
              : KS(u) && this.map.set(u.topic, u);
          }),
          (this.cached = []),
          (this.initialized = !0));
      }),
      (this.set = async (u, h) => {
        this.isInitialized(),
          this.map.has(u)
            ? await this.update(u, h)
            : (this.logger.debug("Setting value"),
              this.logger.trace({
                type: "method",
                method: "set",
                key: u,
                value: h,
              }),
              this.map.set(u, h),
              await this.persist());
      }),
      (this.get = (u) => (
        this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({ type: "method", method: "get", key: u }),
        this.getData(u)
      )),
      (this.getAll = (u) => (
        this.isInitialized(),
        u
          ? this.values.filter((h) =>
              Object.keys(u).every((p) => $D(h[p], u[p]))
            )
          : this.values
      )),
      (this.update = async (u, h) => {
        this.isInitialized(),
          this.logger.debug("Updating value"),
          this.logger.trace({
            type: "method",
            method: "update",
            key: u,
            update: h,
          });
        const p = sg(sg({}, this.getData(u)), h);
        this.map.set(u, p), await this.persist();
      }),
      (this.delete = async (u, h) => {
        this.isInitialized(),
          this.map.has(u) &&
            (this.logger.debug("Deleting value"),
            this.logger.trace({
              type: "method",
              method: "delete",
              key: u,
              reason: h,
            }),
            this.map.delete(u),
            this.addToRecentlyDeleted(u),
            await this.persist());
      }),
      (this.logger = Kr(t, this.name)),
      (this.storagePrefix = s),
      (this.getKey = a);
  }
  get context() {
    return Hr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e) {
    this.recentlyDeleted.push(e),
      this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
        this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      if (this.recentlyDeleted.includes(e)) {
        const { message: s } = ge(
          "MISSING_OR_INVALID",
          `Record was recently deleted - ${this.name}: ${e}`
        );
        throw (this.logger.error(s), new Error(s));
      }
      const { message: i } = ge("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw (this.logger.error(i), new Error(i));
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length) return;
      if (this.map.size) {
        const { message: t } = ge("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored value for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          value: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`),
        this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ge("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class uP {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.name = T7),
      (this.version = U7),
      (this.events = new Fl()),
      (this.initialized = !1),
      (this.storagePrefix = Wn),
      (this.ignoredPayloadTypes = [Pn]),
      (this.registeredMethods = []),
      (this.init = async () => {
        this.initialized ||
          (await this.pairings.init(),
          await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          (this.initialized = !0),
          this.logger.trace("Initialized"));
      }),
      (this.register = ({ methods: i }) => {
        this.isInitialized(),
          (this.registeredMethods = [
            ...new Set([...this.registeredMethods, ...i]),
          ]);
      }),
      (this.create = async (i) => {
        this.isInitialized();
        const s = xl(),
          a = await this.core.crypto.setSymKey(s),
          u = pr(ye.FIVE_MINUTES),
          h = { protocol: Im },
          p = { topic: a, expiry: u, relay: h, active: !1 },
          d = TS({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: a,
            symKey: s,
            relay: h,
            expiryTimestamp: u,
            methods: i == null ? void 0 : i.methods,
          });
        return (
          this.core.expirer.set(a, u),
          await this.pairings.set(a, p),
          await this.core.relayer.subscribe(a),
          { topic: a, uri: d }
        );
      }),
      (this.pair = async (i) => {
        this.isInitialized(), this.isValidPair(i);
        const {
          topic: s,
          symKey: a,
          relay: u,
          expiryTimestamp: h,
          methods: p,
        } = bp(i.uri);
        let d;
        if (
          this.pairings.keys.includes(s) &&
          ((d = this.pairings.get(s)), d.active)
        )
          throw new Error(
            `Pairing already exists: ${s}. Please try again with a new connection URI.`
          );
        const b = h || pr(ye.FIVE_MINUTES),
          E = { topic: s, relay: u, expiry: b, active: !1, methods: p };
        return (
          this.core.expirer.set(s, b),
          await this.pairings.set(s, E),
          i.activatePairing && (await this.activate({ topic: s })),
          this.events.emit(ro.create, E),
          this.core.crypto.keychain.has(s) ||
            (await this.core.crypto.setSymKey(a, s)),
          await this.core.relayer.subscribe(s, { relay: u }),
          E
        );
      }),
      (this.activate = async ({ topic: i }) => {
        this.isInitialized();
        const s = pr(ye.THIRTY_DAYS);
        this.core.expirer.set(i, s),
          await this.pairings.update(i, { active: !0, expiry: s });
      }),
      (this.ping = async (i) => {
        this.isInitialized(), await this.isValidPing(i);
        const { topic: s } = i;
        if (this.pairings.keys.includes(s)) {
          const a = await this.sendRequest(s, "wc_pairingPing", {}),
            { done: u, resolve: h, reject: p } = ws();
          this.events.once(dt("pairing_ping", a), ({ error: d }) => {
            d ? p(d) : h();
          }),
            await u();
        }
      }),
      (this.updateExpiry = async ({ topic: i, expiry: s }) => {
        this.isInitialized(), await this.pairings.update(i, { expiry: s });
      }),
      (this.updateMetadata = async ({ topic: i, metadata: s }) => {
        this.isInitialized(),
          await this.pairings.update(i, { peerMetadata: s });
      }),
      (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
      (this.disconnect = async (i) => {
        this.isInitialized(), await this.isValidDisconnect(i);
        const { topic: s } = i;
        this.pairings.keys.includes(s) &&
          (await this.sendRequest(
            s,
            "wc_pairingDelete",
            Rt("USER_DISCONNECTED")
          ),
          await this.deletePairing(s));
      }),
      (this.sendRequest = async (i, s, a) => {
        const u = oo(s, a),
          h = await this.core.crypto.encode(i, u),
          p = Ho[s].req;
        return (
          this.core.history.set(i, u), this.core.relayer.publish(i, h, p), u.id
        );
      }),
      (this.sendResult = async (i, s, a) => {
        const u = pu(i, a),
          h = await this.core.crypto.encode(s, u),
          p = await this.core.history.get(s, i),
          d = Ho[p.request.method].res;
        await this.core.relayer.publish(s, h, d),
          await this.core.history.resolve(u);
      }),
      (this.sendError = async (i, s, a) => {
        const u = gu(i, a),
          h = await this.core.crypto.encode(s, u),
          p = await this.core.history.get(s, i),
          d = Ho[p.request.method]
            ? Ho[p.request.method].res
            : Ho.unregistered_method.res;
        await this.core.relayer.publish(s, h, d),
          await this.core.history.resolve(u);
      }),
      (this.deletePairing = async (i, s) => {
        await this.core.relayer.unsubscribe(i),
          await Promise.all([
            this.pairings.delete(i, Rt("USER_DISCONNECTED")),
            this.core.crypto.deleteSymKey(i),
            s ? Promise.resolve() : this.core.expirer.del(i),
          ]);
      }),
      (this.cleanup = async () => {
        const i = this.pairings.getAll().filter((s) => kn(s.expiry));
        await Promise.all(i.map((s) => this.deletePairing(s.topic)));
      }),
      (this.onRelayEventRequest = (i) => {
        const { topic: s, payload: a } = i;
        switch (a.method) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(s, a);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(s, a);
          default:
            return this.onUnknownRpcMethodRequest(s, a);
        }
      }),
      (this.onRelayEventResponse = async (i) => {
        const { topic: s, payload: a } = i,
          u = (await this.core.history.get(s, a.id)).request.method;
        switch (u) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(s, a);
          default:
            return this.onUnknownRpcMethodResponse(u);
        }
      }),
      (this.onPairingPingRequest = async (i, s) => {
        const { id: a } = s;
        try {
          this.isValidPing({ topic: i }),
            await this.sendResult(a, i, !0),
            this.events.emit(ro.ping, { id: a, topic: i });
        } catch (u) {
          await this.sendError(a, i, u), this.logger.error(u);
        }
      }),
      (this.onPairingPingResponse = (i, s) => {
        const { id: a } = s;
        setTimeout(() => {
          Zi(s)
            ? this.events.emit(dt("pairing_ping", a), {})
            : bi(s) &&
              this.events.emit(dt("pairing_ping", a), { error: s.error });
        }, 500);
      }),
      (this.onPairingDeleteRequest = async (i, s) => {
        const { id: a } = s;
        try {
          this.isValidDisconnect({ topic: i }),
            await this.deletePairing(i),
            this.events.emit(ro.delete, { id: a, topic: i });
        } catch (u) {
          await this.sendError(a, i, u), this.logger.error(u);
        }
      }),
      (this.onUnknownRpcMethodRequest = async (i, s) => {
        const { id: a, method: u } = s;
        try {
          if (this.registeredMethods.includes(u)) return;
          const h = Rt("WC_METHOD_UNSUPPORTED", u);
          await this.sendError(a, i, h), this.logger.error(h);
        } catch (h) {
          await this.sendError(a, i, h), this.logger.error(h);
        }
      }),
      (this.onUnknownRpcMethodResponse = (i) => {
        this.registeredMethods.includes(i) ||
          this.logger.error(Rt("WC_METHOD_UNSUPPORTED", i));
      }),
      (this.isValidPair = (i) => {
        var s;
        if (!jr(i)) {
          const { message: u } = ge(
            "MISSING_OR_INVALID",
            `pair() params: ${i}`
          );
          throw new Error(u);
        }
        if (!kS(i.uri)) {
          const { message: u } = ge(
            "MISSING_OR_INVALID",
            `pair() uri: ${i.uri}`
          );
          throw new Error(u);
        }
        const a = bp(i.uri);
        if (!((s = a == null ? void 0 : a.relay) != null && s.protocol)) {
          const { message: u } = ge(
            "MISSING_OR_INVALID",
            "pair() uri#relay-protocol"
          );
          throw new Error(u);
        }
        if (!(a != null && a.symKey)) {
          const { message: u } = ge("MISSING_OR_INVALID", "pair() uri#symKey");
          throw new Error(u);
        }
        if (
          a != null &&
          a.expiryTimestamp &&
          ye.toMiliseconds(a == null ? void 0 : a.expiryTimestamp) < Date.now()
        ) {
          const { message: u } = ge(
            "EXPIRED",
            "pair() URI has expired. Please try again with a new connection URI."
          );
          throw new Error(u);
        }
      }),
      (this.isValidPing = async (i) => {
        if (!jr(i)) {
          const { message: a } = ge(
            "MISSING_OR_INVALID",
            `ping() params: ${i}`
          );
          throw new Error(a);
        }
        const { topic: s } = i;
        await this.isValidPairingTopic(s);
      }),
      (this.isValidDisconnect = async (i) => {
        if (!jr(i)) {
          const { message: a } = ge(
            "MISSING_OR_INVALID",
            `disconnect() params: ${i}`
          );
          throw new Error(a);
        }
        const { topic: s } = i;
        await this.isValidPairingTopic(s);
      }),
      (this.isValidPairingTopic = async (i) => {
        if (!Zt(i, !1)) {
          const { message: s } = ge(
            "MISSING_OR_INVALID",
            `pairing topic should be a string: ${i}`
          );
          throw new Error(s);
        }
        if (!this.pairings.keys.includes(i)) {
          const { message: s } = ge(
            "NO_MATCHING_KEY",
            `pairing topic doesn't exist: ${i}`
          );
          throw new Error(s);
        }
        if (kn(this.pairings.get(i).expiry)) {
          await this.deletePairing(i);
          const { message: s } = ge("EXPIRED", `pairing topic: ${i}`);
          throw new Error(s);
        }
      }),
      (this.core = e),
      (this.logger = Kr(t, this.name)),
      (this.pairings = new Ms(
        this.core,
        this.logger,
        this.name,
        this.storagePrefix
      ));
  }
  get context() {
    return Hr(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ge("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(zr.message, async (e) => {
      const { topic: t, message: i } = e;
      if (
        !this.pairings.keys.includes(t) ||
        this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i))
      )
        return;
      const s = await this.core.crypto.decode(t, i);
      try {
        lf(s)
          ? (this.core.history.set(t, s),
            this.onRelayEventRequest({ topic: t, payload: s }))
          : mu(s) &&
            (await this.core.history.resolve(s),
            await this.onRelayEventResponse({ topic: t, payload: s }),
            this.core.history.delete(t, s.id));
      } catch (a) {
        this.logger.error(a);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(yi.expired, async (e) => {
      const { topic: t } = s1(e.target);
      t &&
        this.pairings.keys.includes(t) &&
        (await this.deletePairing(t, !0),
        this.events.emit(ro.expire, { topic: t }));
    });
  }
}
class hP extends I4 {
  constructor(e, t) {
    super(e, t),
      (this.core = e),
      (this.logger = t),
      (this.records = new Map()),
      (this.events = new Ai.EventEmitter()),
      (this.name = B7),
      (this.version = L7),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Wn),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((i) => this.records.set(i.id, i)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.set = (i, s, a) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Setting JSON-RPC request history record"),
          this.logger.trace({
            type: "method",
            method: "set",
            topic: i,
            request: s,
            chainId: a,
          }),
          this.records.has(s.id))
        )
          return;
        const u = {
          id: s.id,
          topic: i,
          request: { method: s.method, params: s.params || null },
          chainId: a,
          expiry: pr(ye.THIRTY_DAYS),
        };
        this.records.set(u.id, u),
          this.persist(),
          this.events.emit(Oi.created, u);
      }),
      (this.resolve = async (i) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Updating JSON-RPC response history record"),
          this.logger.trace({ type: "method", method: "update", response: i }),
          !this.records.has(i.id))
        )
          return;
        const s = await this.getRecord(i.id);
        typeof s.response > "u" &&
          ((s.response = bi(i) ? { error: i.error } : { result: i.result }),
          this.records.set(s.id, s),
          this.persist(),
          this.events.emit(Oi.updated, s));
      }),
      (this.get = async (i, s) => (
        this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({ type: "method", method: "get", topic: i, id: s }),
        await this.getRecord(s)
      )),
      (this.delete = (i, s) => {
        this.isInitialized(),
          this.logger.debug("Deleting record"),
          this.logger.trace({ type: "method", method: "delete", id: s }),
          this.values.forEach((a) => {
            if (a.topic === i) {
              if (typeof s < "u" && a.id !== s) return;
              this.records.delete(a.id), this.events.emit(Oi.deleted, a);
            }
          }),
          this.persist();
      }),
      (this.exists = async (i, s) => (
        this.isInitialized(),
        this.records.has(s) ? (await this.getRecord(s)).topic === i : !1
      )),
      (this.on = (i, s) => {
        this.events.on(i, s);
      }),
      (this.once = (i, s) => {
        this.events.once(i, s);
      }),
      (this.off = (i, s) => {
        this.events.off(i, s);
      }),
      (this.removeListener = (i, s) => {
        this.events.removeListener(i, s);
      }),
      (this.logger = Kr(t, this.name));
  }
  get context() {
    return Hr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return (
      this.values.forEach((t) => {
        if (typeof t.response < "u") return;
        const i = {
          topic: t.topic,
          request: oo(t.request.method, t.request.params, t.id),
          chainId: t.chainId,
        };
        return e.push(i);
      }),
      e
    );
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: i } = ge("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Oi.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length) return;
      if (this.records.size) {
        const { message: t } = ge("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored records for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          records: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`),
        this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(Oi.created, (e) => {
      const t = Oi.created;
      this.logger.info(`Emitting ${t}`),
        this.logger.debug({ type: "event", event: t, record: e });
    }),
      this.events.on(Oi.updated, (e) => {
        const t = Oi.updated;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e });
      }),
      this.events.on(Oi.deleted, (e) => {
        const t = Oi.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e });
      }),
      this.core.heartbeat.on(va.pulse, () => {
        this.cleanup();
      });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e = !1;
      this.records.forEach((t) => {
        ye.toMiliseconds(t.expiry || 0) - Date.now() <= 0 &&
          (this.logger.info(`Deleting expired history log: ${t.id}`),
          this.records.delete(t.id),
          this.events.emit(Oi.deleted, t, !1),
          (e = !0));
      }),
        e && this.persist();
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ge("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class lP extends O4 {
  constructor(e, t) {
    super(e, t),
      (this.core = e),
      (this.logger = t),
      (this.expirations = new Map()),
      (this.events = new Ai.EventEmitter()),
      (this.name = q7),
      (this.version = j7),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Wn),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((i) => this.expirations.set(i.target, i)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.has = (i) => {
        try {
          const s = this.formatTarget(i);
          return typeof this.getExpiration(s) < "u";
        } catch {
          return !1;
        }
      }),
      (this.set = (i, s) => {
        this.isInitialized();
        const a = this.formatTarget(i),
          u = { target: a, expiry: s };
        this.expirations.set(a, u),
          this.checkExpiry(a, u),
          this.events.emit(yi.created, { target: a, expiration: u });
      }),
      (this.get = (i) => {
        this.isInitialized();
        const s = this.formatTarget(i);
        return this.getExpiration(s);
      }),
      (this.del = (i) => {
        if ((this.isInitialized(), this.has(i))) {
          const s = this.formatTarget(i),
            a = this.getExpiration(s);
          this.expirations.delete(s),
            this.events.emit(yi.deleted, { target: s, expiration: a });
        }
      }),
      (this.on = (i, s) => {
        this.events.on(i, s);
      }),
      (this.once = (i, s) => {
        this.events.once(i, s);
      }),
      (this.off = (i, s) => {
        this.events.off(i, s);
      }),
      (this.removeListener = (i, s) => {
        this.events.removeListener(i, s);
      }),
      (this.logger = Kr(t, this.name));
  }
  get context() {
    return Hr(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string") return g5(e);
    if (typeof e == "number") return m5(e);
    const { message: t } = ge("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(yi.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length) return;
      if (this.expirations.size) {
        const { message: t } = ge("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(t), new Error(t));
      }
      (this.cached = e),
        this.logger.debug(`Successfully Restored expirations for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          expirations: this.values,
        });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`),
        this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: i } = ge("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw (this.logger.warn(i), new Error(i));
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: i } = t;
    ye.toMiliseconds(i) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e),
      this.events.emit(yi.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected &&
      this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(va.pulse, () => this.checkExpirations()),
      this.events.on(yi.created, (e) => {
        const t = yi.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      }),
      this.events.on(yi.expired, (e) => {
        const t = yi.expired;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      }),
      this.events.on(yi.deleted, (e) => {
        const t = yi.deleted;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, data: e }),
          this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = ge("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
}
class fP extends N4 {
  constructor(e, t) {
    super(e, t),
      (this.projectId = e),
      (this.logger = t),
      (this.name = tl),
      (this.initialized = !1),
      (this.queue = []),
      (this.verifyDisabled = !1),
      (this.init = async (i) => {
        if (this.verifyDisabled || lo() || !fo()) return;
        const s = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
        this.verifyUrl !== s && this.removeIframe(), (this.verifyUrl = s);
        try {
          await this.createIframe();
        } catch (a) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
            this.logger.info(a),
            (this.verifyDisabled = !0);
        }
      }),
      (this.register = async (i) => {
        this.initialized
          ? this.sendPost(i.attestationId)
          : (this.addToQueue(i.attestationId), await this.init());
      }),
      (this.resolve = async (i) => {
        if (this.isDevEnv) return "";
        const s = this.getVerifyUrl(i == null ? void 0 : i.verifyUrl);
        return this.fetchAttestation(i.attestationId, s);
      }),
      (this.fetchAttestation = async (i, s) => {
        this.logger.info(`resolving attestation: ${i} from url: ${s}`);
        const a = this.startAbortTimer(ye.ONE_SECOND * 5),
          u = await fetch(`${s}/attestation/${i}`, {
            signal: this.abortController.signal,
          });
        return clearTimeout(a), u.status === 200 ? await u.json() : void 0;
      }),
      (this.addToQueue = (i) => {
        this.queue.push(i);
      }),
      (this.processQueue = () => {
        this.queue.length !== 0 &&
          (this.queue.forEach((i) => this.sendPost(i)), (this.queue = []));
      }),
      (this.sendPost = (i) => {
        var s;
        try {
          if (!this.iframe) return;
          (s = this.iframe.contentWindow) == null || s.postMessage(i, "*"),
            this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);
        } catch {}
      }),
      (this.createIframe = async () => {
        let i;
        const s = (a) => {
          a.data === "verify_ready" &&
            (this.onInit(), window.removeEventListener("message", s), i());
        };
        await Promise.race([
          new Promise((a) => {
            const u = document.getElementById(tl);
            if (u) return (this.iframe = u), this.onInit(), a();
            window.addEventListener("message", s);
            const h = document.createElement("iframe");
            (h.id = tl),
              (h.src = `${this.verifyUrl}/${this.projectId}`),
              (h.style.display = "none"),
              document.body.append(h),
              (this.iframe = h),
              (i = a);
          }),
          new Promise((a, u) =>
            setTimeout(() => {
              window.removeEventListener("message", s),
                u("verify iframe load timeout");
            }, ye.toMiliseconds(ye.FIVE_SECONDS))
          ),
        ]);
      }),
      (this.onInit = () => {
        (this.initialized = !0), this.processQueue();
      }),
      (this.removeIframe = () => {
        this.iframe &&
          (this.iframe.remove(),
          (this.iframe = void 0),
          (this.initialized = !1));
      }),
      (this.getVerifyUrl = (i) => {
        let s = i || Qo;
        return (
          F7.includes(s) ||
            (this.logger.info(
              `verify url: ${s}, not included in trusted list, assigning default: ${Qo}`
            ),
            (s = Qo)),
          s
        );
      }),
      (this.logger = Kr(t, this.name)),
      (this.verifyUrl = Qo),
      (this.abortController = new AbortController()),
      (this.isDevEnv = ia() && FD.IS_VITEST);
  }
  get context() {
    return Hr(this.logger);
  }
  startAbortTimer(e) {
    return (
      (this.abortController = new AbortController()),
      setTimeout(() => this.abortController.abort(), ye.toMiliseconds(e))
    );
  }
}
class dP extends R4 {
  constructor(e, t) {
    super(e, t),
      (this.projectId = e),
      (this.logger = t),
      (this.context = z7),
      (this.registerDeviceToken = async (i) => {
        const {
            clientId: s,
            token: a,
            notificationType: u,
            enableEncrypted: h = !1,
          } = i,
          p = `${k7}/${this.projectId}/clients`;
        await fetch(p, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            client_id: s,
            type: u,
            token: a,
            always_raw: h,
          }),
        });
      }),
      (this.logger = Kr(t, this.context));
  }
}
var pP = Object.defineProperty,
  og = Object.getOwnPropertySymbols,
  gP = Object.prototype.hasOwnProperty,
  mP = Object.prototype.propertyIsEnumerable,
  ag = (r, e, t) =>
    e in r
      ? pP(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  cg = (r, e) => {
    for (var t in e || (e = {})) gP.call(e, t) && ag(r, t, e[t]);
    if (og) for (var t of og(e)) mP.call(e, t) && ag(r, t, e[t]);
    return r;
  };
class df extends S4 {
  constructor(e) {
    var t;
    super(e),
      (this.protocol = Sm),
      (this.version = f7),
      (this.name = ff),
      (this.events = new Ai.EventEmitter()),
      (this.initialized = !1),
      (this.on = (u, h) => this.events.on(u, h)),
      (this.once = (u, h) => this.events.once(u, h)),
      (this.off = (u, h) => this.events.off(u, h)),
      (this.removeListener = (u, h) => this.events.removeListener(u, h)),
      (this.projectId = e == null ? void 0 : e.projectId),
      (this.relayUrl = (e == null ? void 0 : e.relayUrl) || Dm),
      (this.customStoragePrefix =
        e != null && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "");
    const i = du({
        level:
          typeof (e == null ? void 0 : e.logger) == "string" && e.logger
            ? e.logger
            : d7.logger,
      }),
      { logger: s, chunkLoggerController: a } = A4({
        opts: i,
        maxSizeInBytes: e == null ? void 0 : e.maxLogBlobSizeInBytes,
        loggerOverride: e == null ? void 0 : e.logger,
      });
    (this.logChunkController = a),
      (t = this.logChunkController) != null &&
        t.downloadLogsBlobInBrowser &&
        (window.downloadLogsBlobInBrowser = async () => {
          var u, h;
          (u = this.logChunkController) != null &&
            u.downloadLogsBlobInBrowser &&
            ((h = this.logChunkController) == null ||
              h.downloadLogsBlobInBrowser({
                clientId: await this.crypto.getClientId(),
              }));
        }),
      (this.logger = Kr(s, this.name)),
      (this.heartbeat = new YI()),
      (this.crypto = new K7(
        this,
        this.logger,
        e == null ? void 0 : e.keychain
      )),
      (this.history = new hP(this, this.logger)),
      (this.expirer = new lP(this, this.logger)),
      (this.storage =
        e != null && e.storage
          ? e.storage
          : new GI(cg(cg({}, p7), e == null ? void 0 : e.storageOptions))),
      (this.relayer = new sP({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
      })),
      (this.pairing = new uP(this, this.logger)),
      (this.verify = new fP(this.projectId || "", this.logger)),
      (this.echoClient = new dP(this.projectId || "", this.logger));
  }
  static async init(e) {
    const t = new df(e);
    await t.initialize();
    const i = await t.crypto.getClientId();
    return await t.storage.setItem(C7, i), t;
  }
  get context() {
    return Hr(this.logger);
  }
  async start() {
    this.initialized || (await this.initialize());
  }
  async getLogsBlob() {
    var e;
    return (e = this.logChunkController) == null
      ? void 0
      : e.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(),
        await this.history.init(),
        await this.expirer.init(),
        await this.relayer.init(),
        await this.heartbeat.init(),
        await this.pairing.init(),
        (this.initialized = !0),
        this.logger.info("Core Initialization Success");
    } catch (e) {
      throw (
        (this.logger.warn(
          `Core Initialization Failure at epoch ${Date.now()}`,
          e
        ),
        this.logger.error(e.message),
        e)
      );
    }
  }
}
const vP = df,
  Pm = "wc",
  Mm = 2,
  Cm = "client",
  pf = `${Pm}@${Mm}:${Cm}:`,
  il = {
    name: Cm,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com",
  },
  ug = "WALLETCONNECT_DEEPLINK_CHOICE",
  yP = "proposal",
  Om = "Proposal expired",
  wP = "session",
  Js = ye.SEVEN_DAYS,
  bP = "engine",
  dr = {
    wc_sessionPropose: {
      req: { ttl: ye.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: ye.FIVE_MINUTES, prompt: !1, tag: 1101 },
      reject: { ttl: ye.FIVE_MINUTES, prompt: !1, tag: 1120 },
      autoReject: { ttl: ye.FIVE_MINUTES, prompt: !1, tag: 1121 },
    },
    wc_sessionSettle: {
      req: { ttl: ye.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: ye.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: ye.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: ye.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: ye.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: ye.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: ye.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: ye.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: ye.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: ye.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: ye.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: ye.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: ye.ONE_DAY, prompt: !1, tag: 1114 },
      res: { ttl: ye.ONE_DAY, prompt: !1, tag: 1115 },
    },
    wc_sessionAuthenticate: {
      req: { ttl: ye.ONE_HOUR, prompt: !0, tag: 1116 },
      res: { ttl: ye.ONE_HOUR, prompt: !1, tag: 1117 },
      reject: { ttl: ye.FIVE_MINUTES, prompt: !1, tag: 1118 },
      autoReject: { ttl: ye.FIVE_MINUTES, prompt: !1, tag: 1119 },
    },
  },
  nl = { min: ye.FIVE_MINUTES, max: ye.SEVEN_DAYS },
  Qi = { idle: "IDLE", active: "ACTIVE" },
  _P = "request",
  EP = [
    "wc_sessionPropose",
    "wc_sessionRequest",
    "wc_authRequest",
    "wc_sessionAuthenticate",
  ],
  AP = "wc",
  SP = "auth",
  IP = "authKeys",
  DP = "pairingTopics",
  xP = "requests",
  yu = `${AP}@${1.5}:${SP}:`,
  zc = `${yu}:PUB_KEY`;
var PP = Object.defineProperty,
  MP = Object.defineProperties,
  CP = Object.getOwnPropertyDescriptors,
  hg = Object.getOwnPropertySymbols,
  OP = Object.prototype.hasOwnProperty,
  NP = Object.prototype.propertyIsEnumerable,
  lg = (r, e, t) =>
    e in r
      ? PP(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  nr = (r, e) => {
    for (var t in e || (e = {})) OP.call(e, t) && lg(r, t, e[t]);
    if (hg) for (var t of hg(e)) NP.call(e, t) && lg(r, t, e[t]);
    return r;
  },
  ys = (r, e) => MP(r, CP(e));
class RP extends U4 {
  constructor(e) {
    super(e),
      (this.name = bP),
      (this.events = new Fl()),
      (this.initialized = !1),
      (this.requestQueue = { state: Qi.idle, queue: [] }),
      (this.sessionRequestQueue = { state: Qi.idle, queue: [] }),
      (this.requestQueueDelay = ye.ONE_SECOND),
      (this.expectedPairingMethodMap = new Map()),
      (this.recentlyDeletedMap = new Map()),
      (this.recentlyDeletedLimit = 200),
      (this.relayMessageCache = []),
      (this.init = async () => {
        this.initialized ||
          (await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          this.registerPairingEvents(),
          this.client.core.pairing.register({ methods: Object.keys(dr) }),
          (this.initialized = !0),
          setTimeout(() => {
            (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
              this.processSessionRequestQueue();
          }, ye.toMiliseconds(this.requestQueueDelay)));
      }),
      (this.connect = async (t) => {
        await this.isInitialized();
        const i = ys(nr({}, t), {
          requiredNamespaces: t.requiredNamespaces || {},
          optionalNamespaces: t.optionalNamespaces || {},
        });
        await this.isValidConnect(i);
        const {
          pairingTopic: s,
          requiredNamespaces: a,
          optionalNamespaces: u,
          sessionProperties: h,
          relays: p,
        } = i;
        let d = s,
          b,
          E = !1;
        try {
          d && (E = this.client.core.pairing.pairings.get(d).active);
        } catch (q) {
          throw (
            (this.client.logger.error(`connect() -> pairing.get(${d}) failed`),
            q)
          );
        }
        if (!d || !E) {
          const { topic: q, uri: F } = await this.client.core.pairing.create();
          (d = q), (b = F);
        }
        if (!d) {
          const { message: q } = ge(
            "NO_MATCHING_KEY",
            `connect() pairing topic: ${d}`
          );
          throw new Error(q);
        }
        const D = await this.client.core.crypto.generateKeyPair(),
          S = dr.wc_sessionPropose.req.ttl || ye.FIVE_MINUTES,
          M = pr(S),
          W = nr(
            {
              requiredNamespaces: a,
              optionalNamespaces: u,
              relays: p ?? [{ protocol: Im }],
              proposer: { publicKey: D, metadata: this.client.metadata },
              expiryTimestamp: M,
              pairingTopic: d,
            },
            h && { sessionProperties: h }
          ),
          { reject: G, resolve: ee, done: K } = ws(S, Om);
        this.events.once(
          dt("session_connect"),
          async ({ error: q, session: F }) => {
            if (q) G(q);
            else if (F) {
              F.self.publicKey = D;
              const z = ys(nr({}, F), {
                pairingTopic: W.pairingTopic,
                requiredNamespaces: W.requiredNamespaces,
                optionalNamespaces: W.optionalNamespaces,
              });
              await this.client.session.set(F.topic, z),
                await this.setExpiry(F.topic, F.expiry),
                d &&
                  (await this.client.core.pairing.updateMetadata({
                    topic: d,
                    metadata: F.peer.metadata,
                  })),
                this.cleanupDuplicatePairings(z),
                ee(z);
            }
          }
        );
        const V = await this.sendRequest({
          topic: d,
          method: "wc_sessionPropose",
          params: W,
          throwOnFailedPublish: !0,
        });
        return (
          await this.setProposal(V, nr({ id: V }, W)), { uri: b, approval: K }
        );
      }),
      (this.pair = async (t) => {
        await this.isInitialized();
        try {
          return await this.client.core.pairing.pair(t);
        } catch (i) {
          throw (this.client.logger.error("pair() failed"), i);
        }
      }),
      (this.approve = async (t) => {
        await this.isInitialized();
        try {
          await this.isValidApprove(t);
        } catch (K) {
          throw (
            (this.client.logger.error("approve() -> isValidApprove() failed"),
            K)
          );
        }
        const {
          id: i,
          relayProtocol: s,
          namespaces: a,
          sessionProperties: u,
          sessionConfig: h,
        } = t;
        let p;
        try {
          p = this.client.proposal.get(i);
        } catch (K) {
          throw (
            (this.client.logger.error(`approve() -> proposal.get(${i}) failed`),
            K)
          );
        }
        const {
            pairingTopic: d,
            proposer: b,
            requiredNamespaces: E,
            optionalNamespaces: D,
          } = p,
          S = await this.client.core.crypto.generateKeyPair(),
          M = b.publicKey,
          W = await this.client.core.crypto.generateSharedKey(S, M),
          G = nr(
            nr(
              {
                relay: { protocol: s ?? "irn" },
                namespaces: a,
                controller: { publicKey: S, metadata: this.client.metadata },
                expiry: pr(Js),
              },
              u && { sessionProperties: u }
            ),
            h && { sessionConfig: h }
          );
        await this.client.core.relayer.subscribe(W);
        const ee = ys(nr({}, G), {
          topic: W,
          requiredNamespaces: E,
          optionalNamespaces: D,
          pairingTopic: d,
          acknowledged: !1,
          self: G.controller,
          peer: { publicKey: b.publicKey, metadata: b.metadata },
          controller: S,
        });
        await this.client.session.set(W, ee);
        try {
          await this.sendRequest({
            topic: W,
            method: "wc_sessionSettle",
            params: G,
            throwOnFailedPublish: !0,
          }),
            await this.sendResult({
              id: i,
              topic: d,
              result: {
                relay: { protocol: s ?? "irn" },
                responderPublicKey: S,
              },
              throwOnFailedPublish: !0,
            });
        } catch (K) {
          throw (
            (this.client.logger.error(K),
            this.client.session.delete(W, Rt("USER_DISCONNECTED")),
            await this.client.core.relayer.unsubscribe(W),
            K)
          );
        }
        return (
          await this.client.core.pairing.updateMetadata({
            topic: d,
            metadata: b.metadata,
          }),
          await this.client.proposal.delete(i, Rt("USER_DISCONNECTED")),
          await this.client.core.pairing.activate({ topic: d }),
          await this.setExpiry(W, pr(Js)),
          {
            topic: W,
            acknowledged: () => Promise.resolve(this.client.session.get(W)),
          }
        );
      }),
      (this.reject = async (t) => {
        await this.isInitialized();
        try {
          await this.isValidReject(t);
        } catch (u) {
          throw (
            (this.client.logger.error("reject() -> isValidReject() failed"), u)
          );
        }
        const { id: i, reason: s } = t;
        let a;
        try {
          a = this.client.proposal.get(i).pairingTopic;
        } catch (u) {
          throw (
            (this.client.logger.error(`reject() -> proposal.get(${i}) failed`),
            u)
          );
        }
        a &&
          (await this.sendError({
            id: i,
            topic: a,
            error: s,
            rpcOpts: dr.wc_sessionPropose.reject,
          }),
          await this.client.proposal.delete(i, Rt("USER_DISCONNECTED")));
      }),
      (this.update = async (t) => {
        await this.isInitialized();
        try {
          await this.isValidUpdate(t);
        } catch (E) {
          throw (
            (this.client.logger.error("update() -> isValidUpdate() failed"), E)
          );
        }
        const { topic: i, namespaces: s } = t,
          { done: a, resolve: u, reject: h } = ws(),
          p = Kn(),
          d = Es().toString(),
          b = this.client.session.get(i).namespaces;
        return (
          this.events.once(dt("session_update", p), ({ error: E }) => {
            E ? h(E) : u();
          }),
          await this.client.session.update(i, { namespaces: s }),
          await this.sendRequest({
            topic: i,
            method: "wc_sessionUpdate",
            params: { namespaces: s },
            throwOnFailedPublish: !0,
            clientRpcId: p,
            relayRpcId: d,
          }).catch((E) => {
            this.client.logger.error(E),
              this.client.session.update(i, { namespaces: b }),
              h(E);
          }),
          { acknowledged: a }
        );
      }),
      (this.extend = async (t) => {
        await this.isInitialized();
        try {
          await this.isValidExtend(t);
        } catch (p) {
          throw (
            (this.client.logger.error("extend() -> isValidExtend() failed"), p)
          );
        }
        const { topic: i } = t,
          s = Kn(),
          { done: a, resolve: u, reject: h } = ws();
        return (
          this.events.once(dt("session_extend", s), ({ error: p }) => {
            p ? h(p) : u();
          }),
          await this.setExpiry(i, pr(Js)),
          this.sendRequest({
            topic: i,
            method: "wc_sessionExtend",
            params: {},
            clientRpcId: s,
            throwOnFailedPublish: !0,
          }).catch((p) => {
            h(p);
          }),
          { acknowledged: a }
        );
      }),
      (this.request = async (t) => {
        await this.isInitialized();
        try {
          await this.isValidRequest(t);
        } catch (S) {
          throw (
            (this.client.logger.error("request() -> isValidRequest() failed"),
            S)
          );
        }
        const {
            chainId: i,
            request: s,
            topic: a,
            expiry: u = dr.wc_sessionRequest.req.ttl,
          } = t,
          h = this.client.session.get(a),
          p = Kn(),
          d = Es().toString(),
          {
            done: b,
            resolve: E,
            reject: D,
          } = ws(u, "Request expired. Please try again.");
        return (
          this.events.once(
            dt("session_request", p),
            ({ error: S, result: M }) => {
              S ? D(S) : E(M);
            }
          ),
          await Promise.all([
            new Promise(async (S) => {
              await this.sendRequest({
                clientRpcId: p,
                relayRpcId: d,
                topic: a,
                method: "wc_sessionRequest",
                params: {
                  request: ys(nr({}, s), { expiryTimestamp: pr(u) }),
                  chainId: i,
                },
                expiry: u,
                throwOnFailedPublish: !0,
              }).catch((M) => D(M)),
                this.client.events.emit("session_request_sent", {
                  topic: a,
                  request: s,
                  chainId: i,
                  id: p,
                }),
                S();
            }),
            new Promise(async (S) => {
              var M;
              if (!((M = h.sessionConfig) != null && M.disableDeepLink)) {
                const W = await y5(this.client.core.storage, ug);
                v5({ id: p, topic: a, wcDeepLink: W });
              }
              S();
            }),
            b(),
          ]).then((S) => S[2])
        );
      }),
      (this.respond = async (t) => {
        await this.isInitialized(), await this.isValidRespond(t);
        const { topic: i, response: s } = t,
          { id: a } = s;
        Zi(s)
          ? await this.sendResult({
              id: a,
              topic: i,
              result: s.result,
              throwOnFailedPublish: !0,
            })
          : bi(s) &&
            (await this.sendError({ id: a, topic: i, error: s.error })),
          this.cleanupAfterResponse(t);
      }),
      (this.ping = async (t) => {
        await this.isInitialized();
        try {
          await this.isValidPing(t);
        } catch (s) {
          throw (this.client.logger.error("ping() -> isValidPing() failed"), s);
        }
        const { topic: i } = t;
        if (this.client.session.keys.includes(i)) {
          const s = Kn(),
            a = Es().toString(),
            { done: u, resolve: h, reject: p } = ws();
          this.events.once(dt("session_ping", s), ({ error: d }) => {
            d ? p(d) : h();
          }),
            await Promise.all([
              this.sendRequest({
                topic: i,
                method: "wc_sessionPing",
                params: {},
                throwOnFailedPublish: !0,
                clientRpcId: s,
                relayRpcId: a,
              }),
              u(),
            ]);
        } else
          this.client.core.pairing.pairings.keys.includes(i) &&
            (await this.client.core.pairing.ping({ topic: i }));
      }),
      (this.emit = async (t) => {
        await this.isInitialized(), await this.isValidEmit(t);
        const { topic: i, event: s, chainId: a } = t,
          u = Es().toString();
        await this.sendRequest({
          topic: i,
          method: "wc_sessionEvent",
          params: { event: s, chainId: a },
          throwOnFailedPublish: !0,
          relayRpcId: u,
        });
      }),
      (this.disconnect = async (t) => {
        await this.isInitialized(), await this.isValidDisconnect(t);
        const { topic: i } = t;
        if (this.client.session.keys.includes(i))
          await this.sendRequest({
            topic: i,
            method: "wc_sessionDelete",
            params: Rt("USER_DISCONNECTED"),
            throwOnFailedPublish: !0,
          }),
            await this.deleteSession({ topic: i, emitEvent: !1 });
        else if (this.client.core.pairing.pairings.keys.includes(i))
          await this.client.core.pairing.disconnect({ topic: i });
        else {
          const { message: s } = ge(
            "MISMATCHED_TOPIC",
            `Session or pairing topic not found: ${i}`
          );
          throw new Error(s);
        }
      }),
      (this.find = (t) => (
        this.isInitialized(),
        this.client.session.getAll().filter((i) => FS(i, t))
      )),
      (this.getPendingSessionRequests = () =>
        this.client.pendingRequest.getAll()),
      (this.authenticate = async (t) => {
        this.isInitialized(), this.isValidAuthenticate(t);
        const {
            chains: i,
            statement: s = "",
            uri: a,
            domain: u,
            nonce: h,
            type: p,
            exp: d,
            nbf: b,
            methods: E = [],
            expiry: D,
          } = t,
          S = [...(t.resources || [])],
          { topic: M, uri: W } = await this.client.core.pairing.create({
            methods: ["wc_sessionAuthenticate"],
          });
        this.client.logger.info({
          message: "Generated new pairing",
          pairing: { topic: M, uri: W },
        });
        const G = await this.client.core.crypto.generateKeyPair(),
          ee = jc(G);
        if (
          (await Promise.all([
            this.client.auth.authKeys.set(zc, {
              responseTopic: ee,
              publicKey: G,
            }),
            this.client.auth.pairingTopics.set(ee, {
              topic: ee,
              pairingTopic: M,
            }),
          ]),
          await this.client.core.relayer.subscribe(ee),
          this.client.logger.info(`sending request to new pairing topic: ${M}`),
          E.length > 0)
        ) {
          const { namespace: f } = Jo(i[0]);
          let l = lS(f, "request", E);
          qc(S) && (l = dS(l, S.pop())), S.push(l);
        }
        const K =
            D && D > dr.wc_sessionAuthenticate.req.ttl
              ? D
              : dr.wc_sessionAuthenticate.req.ttl,
          V = {
            authPayload: {
              type: p ?? "caip122",
              chains: i,
              statement: s,
              aud: a,
              domain: u,
              version: "1",
              nonce: h,
              iat: new Date().toISOString(),
              exp: d,
              nbf: b,
              resources: S,
            },
            requester: { publicKey: G, metadata: this.client.metadata },
            expiryTimestamp: pr(K),
          },
          q = {
            eip155: {
              chains: i,
              methods: [...new Set(["personal_sign", ...E])],
              events: ["chainChanged", "accountsChanged"],
            },
          },
          F = {
            requiredNamespaces: {},
            optionalNamespaces: q,
            relays: [{ protocol: "irn" }],
            pairingTopic: M,
            proposer: { publicKey: G, metadata: this.client.metadata },
            expiryTimestamp: pr(dr.wc_sessionPropose.req.ttl),
          },
          { done: z, resolve: y, reject: T } = ws(K, "Request expired"),
          ne = async ({ error: f, session: l }) => {
            if ((this.events.off(dt("session_request", le), fe), f)) T(f);
            else if (l) {
              (l.self.publicKey = G),
                await this.client.session.set(l.topic, l),
                await this.setExpiry(l.topic, l.expiry),
                M &&
                  (await this.client.core.pairing.updateMetadata({
                    topic: M,
                    metadata: l.peer.metadata,
                  }));
              const w = this.client.session.get(l.topic);
              await this.deleteProposal(me), y({ session: w });
            }
          },
          fe = async (f) => {
            if (
              (await this.deletePendingAuthRequest(le, {
                message: "fulfilled",
                code: 0,
              }),
              f.error)
            ) {
              const x = Rt("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
              return f.error.code === x.code
                ? void 0
                : (this.events.off(dt("session_connect"), ne),
                  T(f.error.message));
            }
            await this.deleteProposal(me),
              this.events.off(dt("session_connect"), ne);
            const { cacaos: l, responder: w } = f.result,
              I = [],
              P = [];
            for (const x of l) {
              (await fp({ cacao: x, projectId: this.client.core.projectId })) ||
                (this.client.logger.error(x, "Signature verification failed"),
                T(
                  Rt(
                    "SESSION_SETTLEMENT_FAILED",
                    "Signature verification failed"
                  )
                ));
              const { p: g } = x,
                N = qc(g.resources),
                ie = [lp(g.iss)],
                de = Qc(g.iss);
              if (N) {
                const _ = dp(N),
                  Z = pp(N);
                I.push(..._), ie.push(...Z);
              }
              for (const _ of ie) P.push(`${_}:${de}`);
            }
            const O = await this.client.core.crypto.generateSharedKey(
              G,
              w.publicKey
            );
            let U;
            I.length > 0 &&
              ((U = {
                topic: O,
                acknowledged: !0,
                self: { publicKey: G, metadata: this.client.metadata },
                peer: w,
                controller: w.publicKey,
                expiry: pr(Js),
                requiredNamespaces: {},
                optionalNamespaces: {},
                relay: { protocol: "irn" },
                pairingTopic: M,
                namespaces: _p([...new Set(I)], [...new Set(P)]),
              }),
              await this.client.core.relayer.subscribe(O),
              await this.client.session.set(O, U),
              M &&
                (await this.client.core.pairing.updateMetadata({
                  topic: M,
                  metadata: w.metadata,
                })),
              (U = this.client.session.get(O))),
              y({ auths: l, session: U });
          },
          le = Kn(),
          me = Kn();
        this.events.once(dt("session_connect"), ne),
          this.events.once(dt("session_request", le), fe);
        try {
          await Promise.all([
            this.sendRequest({
              topic: M,
              method: "wc_sessionAuthenticate",
              params: V,
              expiry: t.expiry,
              throwOnFailedPublish: !0,
              clientRpcId: le,
            }),
            this.sendRequest({
              topic: M,
              method: "wc_sessionPropose",
              params: F,
              expiry: dr.wc_sessionPropose.req.ttl,
              throwOnFailedPublish: !0,
              clientRpcId: me,
            }),
          ]);
        } catch (f) {
          throw (
            (this.events.off(dt("session_connect"), ne),
            this.events.off(dt("session_request", le), fe),
            f)
          );
        }
        return (
          await this.setProposal(me, nr({ id: me }, F)),
          await this.setAuthRequest(le, {
            request: ys(nr({}, V), { verifyContext: {} }),
            pairingTopic: M,
          }),
          { uri: W, response: z }
        );
      }),
      (this.approveSessionAuthenticate = async (t) => {
        this.isInitialized();
        const { id: i, auths: s } = t,
          a = this.getPendingAuthRequest(i);
        if (!a)
          throw new Error(`Could not find pending auth request with id ${i}`);
        const u = a.requester.publicKey,
          h = await this.client.core.crypto.generateKeyPair(),
          p = jc(u),
          d = { type: Pn, receiverPublicKey: u, senderPublicKey: h },
          b = [],
          E = [];
        for (const M of s) {
          if (
            !(await fp({ cacao: M, projectId: this.client.core.projectId }))
          ) {
            const V = Rt(
              "SESSION_SETTLEMENT_FAILED",
              "Signature verification failed"
            );
            throw (
              (await this.sendError({
                id: i,
                topic: p,
                error: V,
                encodeOpts: d,
              }),
              new Error(V.message))
            );
          }
          const { p: W } = M,
            G = qc(W.resources),
            ee = [lp(W.iss)],
            K = Qc(W.iss);
          if (G) {
            const V = dp(G),
              q = pp(G);
            b.push(...V), ee.push(...q);
          }
          for (const V of ee) E.push(`${V}:${K}`);
        }
        const D = await this.client.core.crypto.generateSharedKey(h, u);
        let S;
        return (
          (b == null ? void 0 : b.length) > 0 &&
            ((S = {
              topic: D,
              acknowledged: !0,
              self: { publicKey: h, metadata: this.client.metadata },
              peer: { publicKey: u, metadata: a.requester.metadata },
              controller: u,
              expiry: pr(Js),
              authentication: s,
              requiredNamespaces: {},
              optionalNamespaces: {},
              relay: { protocol: "irn" },
              pairingTopic: a.pairingTopic,
              namespaces: _p([...new Set(b)], [...new Set(E)]),
            }),
            await this.client.core.relayer.subscribe(D),
            await this.client.session.set(D, S),
            await this.client.core.pairing.updateMetadata({
              topic: a.pairingTopic,
              metadata: a.requester.metadata,
            })),
          await this.sendResult({
            topic: p,
            id: i,
            result: {
              cacaos: s,
              responder: { publicKey: h, metadata: this.client.metadata },
            },
            encodeOpts: d,
            throwOnFailedPublish: !0,
          }),
          await this.client.auth.requests.delete(i, {
            message: "fulfilled",
            code: 0,
          }),
          await this.client.core.pairing.activate({ topic: a.pairingTopic }),
          { session: S }
        );
      }),
      (this.rejectSessionAuthenticate = async (t) => {
        await this.isInitialized();
        const { id: i, reason: s } = t,
          a = this.getPendingAuthRequest(i);
        if (!a)
          throw new Error(`Could not find pending auth request with id ${i}`);
        const u = a.requester.publicKey,
          h = await this.client.core.crypto.generateKeyPair(),
          p = jc(u),
          d = { type: Pn, receiverPublicKey: u, senderPublicKey: h };
        await this.sendError({
          id: i,
          topic: p,
          error: s,
          encodeOpts: d,
          rpcOpts: dr.wc_sessionAuthenticate.reject,
        }),
          await this.client.auth.requests.delete(i, {
            message: "rejected",
            code: 0,
          }),
          await this.client.proposal.delete(i, Rt("USER_DISCONNECTED"));
      }),
      (this.formatAuthMessage = (t) => {
        this.isInitialized();
        const { request: i, iss: s } = t;
        return F1(i, s);
      }),
      (this.processRelayMessageCache = () => {
        setTimeout(async () => {
          if (this.relayMessageCache.length !== 0)
            for (; this.relayMessageCache.length > 0; )
              try {
                const t = this.relayMessageCache.shift();
                t && (await this.onRelayMessage(t));
              } catch (t) {
                this.client.logger.error(t);
              }
        }, 50);
      }),
      (this.cleanupDuplicatePairings = async (t) => {
        if (t.pairingTopic)
          try {
            const i = this.client.core.pairing.pairings.get(t.pairingTopic),
              s = this.client.core.pairing.pairings.getAll().filter((a) => {
                var u, h;
                return (
                  ((u = a.peerMetadata) == null ? void 0 : u.url) &&
                  ((h = a.peerMetadata) == null ? void 0 : h.url) ===
                    t.peer.metadata.url &&
                  a.topic &&
                  a.topic !== i.topic
                );
              });
            if (s.length === 0) return;
            this.client.logger.info(
              `Cleaning up ${s.length} duplicate pairing(s)`
            ),
              await Promise.all(
                s.map((a) =>
                  this.client.core.pairing.disconnect({ topic: a.topic })
                )
              ),
              this.client.logger.info("Duplicate pairings clean up finished");
          } catch (i) {
            this.client.logger.error(i);
          }
      }),
      (this.deleteSession = async (t) => {
        var i;
        const {
            topic: s,
            expirerHasDeleted: a = !1,
            emitEvent: u = !0,
            id: h = 0,
          } = t,
          { self: p } = this.client.session.get(s);
        await this.client.core.relayer.unsubscribe(s),
          await this.client.session.delete(s, Rt("USER_DISCONNECTED")),
          this.addToRecentlyDeleted(s, "session"),
          this.client.core.crypto.keychain.has(p.publicKey) &&
            (await this.client.core.crypto.deleteKeyPair(p.publicKey)),
          this.client.core.crypto.keychain.has(s) &&
            (await this.client.core.crypto.deleteSymKey(s)),
          a || this.client.core.expirer.del(s),
          this.client.core.storage
            .removeItem(ug)
            .catch((d) => this.client.logger.warn(d)),
          this.getPendingSessionRequests().forEach((d) => {
            d.topic === s &&
              this.deletePendingSessionRequest(d.id, Rt("USER_DISCONNECTED"));
          }),
          s ===
            ((i = this.sessionRequestQueue.queue[0]) == null
              ? void 0
              : i.topic) && (this.sessionRequestQueue.state = Qi.idle),
          u && this.client.events.emit("session_delete", { id: h, topic: s });
      }),
      (this.deleteProposal = async (t, i) => {
        await Promise.all([
          this.client.proposal.delete(t, Rt("USER_DISCONNECTED")),
          i ? Promise.resolve() : this.client.core.expirer.del(t),
        ]),
          this.addToRecentlyDeleted(t, "proposal");
      }),
      (this.deletePendingSessionRequest = async (t, i, s = !1) => {
        await Promise.all([
          this.client.pendingRequest.delete(t, i),
          s ? Promise.resolve() : this.client.core.expirer.del(t),
        ]),
          this.addToRecentlyDeleted(t, "request"),
          (this.sessionRequestQueue.queue =
            this.sessionRequestQueue.queue.filter((a) => a.id !== t)),
          s &&
            ((this.sessionRequestQueue.state = Qi.idle),
            this.client.events.emit("session_request_expire", { id: t }));
      }),
      (this.deletePendingAuthRequest = async (t, i, s = !1) => {
        await Promise.all([
          this.client.auth.requests.delete(t, i),
          s ? Promise.resolve() : this.client.core.expirer.del(t),
        ]);
      }),
      (this.setExpiry = async (t, i) => {
        this.client.session.keys.includes(t) &&
          (this.client.core.expirer.set(t, i),
          await this.client.session.update(t, { expiry: i }));
      }),
      (this.setProposal = async (t, i) => {
        this.client.core.expirer.set(t, pr(dr.wc_sessionPropose.req.ttl)),
          await this.client.proposal.set(t, i);
      }),
      (this.setAuthRequest = async (t, i) => {
        const { request: s, pairingTopic: a } = i;
        this.client.core.expirer.set(t, s.expiryTimestamp),
          await this.client.auth.requests.set(t, {
            authPayload: s.authPayload,
            requester: s.requester,
            expiryTimestamp: s.expiryTimestamp,
            id: t,
            pairingTopic: a,
            verifyContext: s.verifyContext,
          });
      }),
      (this.setPendingSessionRequest = async (t) => {
        const { id: i, topic: s, params: a, verifyContext: u } = t,
          h = a.request.expiryTimestamp || pr(dr.wc_sessionRequest.req.ttl);
        this.client.core.expirer.set(i, h),
          await this.client.pendingRequest.set(i, {
            id: i,
            topic: s,
            params: a,
            verifyContext: u,
          });
      }),
      (this.sendRequest = async (t) => {
        const {
            topic: i,
            method: s,
            params: a,
            expiry: u,
            relayRpcId: h,
            clientRpcId: p,
            throwOnFailedPublish: d,
          } = t,
          b = oo(s, a, p);
        if (fo() && EP.includes(s)) {
          const S = _s(JSON.stringify(b));
          this.client.core.verify.register({ attestationId: S });
        }
        let E;
        try {
          E = await this.client.core.crypto.encode(i, b);
        } catch (S) {
          throw (
            (await this.cleanup(),
            this.client.logger.error(
              `sendRequest() -> core.crypto.encode() for topic ${i} failed`
            ),
            S)
          );
        }
        const D = dr[s].req;
        return (
          u && (D.ttl = u),
          h && (D.id = h),
          this.client.core.history.set(i, b),
          d
            ? ((D.internal = ys(nr({}, D.internal), {
                throwOnFailedPublish: !0,
              })),
              await this.client.core.relayer.publish(i, E, D))
            : this.client.core.relayer
                .publish(i, E, D)
                .catch((S) => this.client.logger.error(S)),
          b.id
        );
      }),
      (this.sendResult = async (t) => {
        const {
            id: i,
            topic: s,
            result: a,
            throwOnFailedPublish: u,
            encodeOpts: h,
          } = t,
          p = pu(i, a);
        let d;
        try {
          d = await this.client.core.crypto.encode(s, p, h);
        } catch (D) {
          throw (
            (await this.cleanup(),
            this.client.logger.error(
              `sendResult() -> core.crypto.encode() for topic ${s} failed`
            ),
            D)
          );
        }
        let b;
        try {
          b = await this.client.core.history.get(s, i);
        } catch (D) {
          throw (
            (this.client.logger.error(
              `sendResult() -> history.get(${s}, ${i}) failed`
            ),
            D)
          );
        }
        const E = dr[b.request.method].res;
        u
          ? ((E.internal = ys(nr({}, E.internal), {
              throwOnFailedPublish: !0,
            })),
            await this.client.core.relayer.publish(s, d, E))
          : this.client.core.relayer
              .publish(s, d, E)
              .catch((D) => this.client.logger.error(D)),
          await this.client.core.history.resolve(p);
      }),
      (this.sendError = async (t) => {
        const { id: i, topic: s, error: a, encodeOpts: u, rpcOpts: h } = t,
          p = gu(i, a);
        let d;
        try {
          d = await this.client.core.crypto.encode(s, p, u);
        } catch (D) {
          throw (
            (await this.cleanup(),
            this.client.logger.error(
              `sendError() -> core.crypto.encode() for topic ${s} failed`
            ),
            D)
          );
        }
        let b;
        try {
          b = await this.client.core.history.get(s, i);
        } catch (D) {
          throw (
            (this.client.logger.error(
              `sendError() -> history.get(${s}, ${i}) failed`
            ),
            D)
          );
        }
        const E = h || dr[b.request.method].res;
        this.client.core.relayer.publish(s, d, E),
          await this.client.core.history.resolve(p);
      }),
      (this.cleanup = async () => {
        const t = [],
          i = [];
        this.client.session.getAll().forEach((s) => {
          let a = !1;
          kn(s.expiry) && (a = !0),
            this.client.core.crypto.keychain.has(s.topic) || (a = !0),
            a && t.push(s.topic);
        }),
          this.client.proposal.getAll().forEach((s) => {
            kn(s.expiryTimestamp) && i.push(s.id);
          }),
          await Promise.all([
            ...t.map((s) => this.deleteSession({ topic: s })),
            ...i.map((s) => this.deleteProposal(s)),
          ]);
      }),
      (this.onRelayEventRequest = async (t) => {
        this.requestQueue.queue.push(t), await this.processRequestsQueue();
      }),
      (this.processRequestsQueue = async () => {
        if (this.requestQueue.state === Qi.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (
          this.client.logger.info(
            `Request queue starting with ${this.requestQueue.queue.length} requests`
          );
          this.requestQueue.queue.length > 0;

        ) {
          this.requestQueue.state = Qi.active;
          const t = this.requestQueue.queue.shift();
          if (t)
            try {
              await this.processRequest(t);
            } catch (i) {
              this.client.logger.warn(i);
            }
        }
        this.requestQueue.state = Qi.idle;
      }),
      (this.processRequest = async (t) => {
        const { topic: i, payload: s } = t,
          a = s.method;
        if (!this.shouldIgnorePairingRequest({ topic: i, requestMethod: a }))
          switch (a) {
            case "wc_sessionPropose":
              return await this.onSessionProposeRequest(i, s);
            case "wc_sessionSettle":
              return await this.onSessionSettleRequest(i, s);
            case "wc_sessionUpdate":
              return await this.onSessionUpdateRequest(i, s);
            case "wc_sessionExtend":
              return await this.onSessionExtendRequest(i, s);
            case "wc_sessionPing":
              return await this.onSessionPingRequest(i, s);
            case "wc_sessionDelete":
              return await this.onSessionDeleteRequest(i, s);
            case "wc_sessionRequest":
              return await this.onSessionRequest(i, s);
            case "wc_sessionEvent":
              return await this.onSessionEventRequest(i, s);
            case "wc_sessionAuthenticate":
              return await this.onSessionAuthenticateRequest(i, s);
            default:
              return this.client.logger.info(`Unsupported request method ${a}`);
          }
      }),
      (this.onRelayEventResponse = async (t) => {
        const { topic: i, payload: s } = t,
          a = (await this.client.core.history.get(i, s.id)).request.method;
        switch (a) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(i, s);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(i, s);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(i, s);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(i, s);
          case "wc_sessionPing":
            return this.onSessionPingResponse(i, s);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(i, s);
          case "wc_sessionAuthenticate":
            return this.onSessionAuthenticateResponse(i, s);
          default:
            return this.client.logger.info(`Unsupported response method ${a}`);
        }
      }),
      (this.onRelayEventUnknownPayload = (t) => {
        const { topic: i } = t,
          { message: s } = ge(
            "MISSING_OR_INVALID",
            `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`
          );
        throw new Error(s);
      }),
      (this.shouldIgnorePairingRequest = (t) => {
        const { topic: i, requestMethod: s } = t,
          a = this.expectedPairingMethodMap.get(i);
        return !a || a.includes(s)
          ? !1
          : !!(
              a.includes("wc_sessionAuthenticate") &&
              this.client.events.listenerCount("session_authenticate") > 0
            );
      }),
      (this.onSessionProposeRequest = async (t, i) => {
        const { params: s, id: a } = i;
        try {
          this.isValidConnect(nr({}, i.params));
          const u = s.expiryTimestamp || pr(dr.wc_sessionPropose.req.ttl),
            h = nr({ id: a, pairingTopic: t, expiryTimestamp: u }, s);
          await this.setProposal(a, h);
          const p = _s(JSON.stringify(i)),
            d = await this.getVerifyContext(p, h.proposer.metadata);
          this.client.events.emit("session_proposal", {
            id: a,
            params: h,
            verifyContext: d,
          });
        } catch (u) {
          await this.sendError({
            id: a,
            topic: t,
            error: u,
            rpcOpts: dr.wc_sessionPropose.autoReject,
          }),
            this.client.logger.error(u);
        }
      }),
      (this.onSessionProposeResponse = async (t, i) => {
        const { id: s } = i;
        if (Zi(i)) {
          const { result: a } = i;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            result: a,
          });
          const u = this.client.proposal.get(s);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            proposal: u,
          });
          const h = u.proposer.publicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            selfPublicKey: h,
          });
          const p = a.responderPublicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            peerPublicKey: p,
          });
          const d = await this.client.core.crypto.generateSharedKey(h, p);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            sessionTopic: d,
          });
          const b = await this.client.core.relayer.subscribe(d);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: b,
          }),
            await this.client.core.pairing.activate({ topic: t });
        } else if (bi(i)) {
          await this.client.proposal.delete(s, Rt("USER_DISCONNECTED"));
          const a = dt("session_connect");
          if (this.events.listenerCount(a) === 0)
            throw new Error(`emitting ${a} without any listeners, 954`);
          this.events.emit(dt("session_connect"), { error: i.error });
        }
      }),
      (this.onSessionSettleRequest = async (t, i) => {
        const { id: s, params: a } = i;
        try {
          this.isValidSessionSettleRequest(a);
          const {
              relay: u,
              controller: h,
              expiry: p,
              namespaces: d,
              sessionProperties: b,
              sessionConfig: E,
            } = i.params,
            D = nr(
              nr(
                {
                  topic: t,
                  relay: u,
                  expiry: p,
                  namespaces: d,
                  acknowledged: !0,
                  pairingTopic: "",
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  controller: h.publicKey,
                  self: { publicKey: "", metadata: this.client.metadata },
                  peer: { publicKey: h.publicKey, metadata: h.metadata },
                },
                b && { sessionProperties: b }
              ),
              E && { sessionConfig: E }
            ),
            S = dt("session_connect");
          if (this.events.listenerCount(S) === 0)
            throw new Error(`emitting ${S} without any listeners 997`);
          this.events.emit(dt("session_connect"), { session: D }),
            await this.sendResult({
              id: i.id,
              topic: t,
              result: !0,
              throwOnFailedPublish: !0,
            });
        } catch (u) {
          await this.sendError({ id: s, topic: t, error: u }),
            this.client.logger.error(u);
        }
      }),
      (this.onSessionSettleResponse = async (t, i) => {
        const { id: s } = i;
        Zi(i)
          ? (await this.client.session.update(t, { acknowledged: !0 }),
            this.events.emit(dt("session_approve", s), {}))
          : bi(i) &&
            (await this.client.session.delete(t, Rt("USER_DISCONNECTED")),
            this.events.emit(dt("session_approve", s), { error: i.error }));
      }),
      (this.onSessionUpdateRequest = async (t, i) => {
        const { params: s, id: a } = i;
        try {
          const u = `${t}_session_update`,
            h = ko.get(u);
          if (h && this.isRequestOutOfSync(h, a)) {
            this.client.logger.info(`Discarding out of sync request - ${a}`),
              this.sendError({
                id: a,
                topic: t,
                error: Rt("INVALID_UPDATE_REQUEST"),
              });
            return;
          }
          this.isValidUpdate(nr({ topic: t }, s));
          try {
            ko.set(u, a),
              await this.client.session.update(t, { namespaces: s.namespaces }),
              await this.sendResult({
                id: a,
                topic: t,
                result: !0,
                throwOnFailedPublish: !0,
              });
          } catch (p) {
            throw (ko.delete(u), p);
          }
          this.client.events.emit("session_update", {
            id: a,
            topic: t,
            params: s,
          });
        } catch (u) {
          await this.sendError({ id: a, topic: t, error: u }),
            this.client.logger.error(u);
        }
      }),
      (this.isRequestOutOfSync = (t, i) =>
        parseInt(i.toString().slice(0, -3)) <=
        parseInt(t.toString().slice(0, -3))),
      (this.onSessionUpdateResponse = (t, i) => {
        const { id: s } = i,
          a = dt("session_update", s);
        if (this.events.listenerCount(a) === 0)
          throw new Error(`emitting ${a} without any listeners`);
        Zi(i)
          ? this.events.emit(dt("session_update", s), {})
          : bi(i) &&
            this.events.emit(dt("session_update", s), { error: i.error });
      }),
      (this.onSessionExtendRequest = async (t, i) => {
        const { id: s } = i;
        try {
          this.isValidExtend({ topic: t }),
            await this.setExpiry(t, pr(Js)),
            await this.sendResult({
              id: s,
              topic: t,
              result: !0,
              throwOnFailedPublish: !0,
            }),
            this.client.events.emit("session_extend", { id: s, topic: t });
        } catch (a) {
          await this.sendError({ id: s, topic: t, error: a }),
            this.client.logger.error(a);
        }
      }),
      (this.onSessionExtendResponse = (t, i) => {
        const { id: s } = i,
          a = dt("session_extend", s);
        if (this.events.listenerCount(a) === 0)
          throw new Error(`emitting ${a} without any listeners`);
        Zi(i)
          ? this.events.emit(dt("session_extend", s), {})
          : bi(i) &&
            this.events.emit(dt("session_extend", s), { error: i.error });
      }),
      (this.onSessionPingRequest = async (t, i) => {
        const { id: s } = i;
        try {
          this.isValidPing({ topic: t }),
            await this.sendResult({
              id: s,
              topic: t,
              result: !0,
              throwOnFailedPublish: !0,
            }),
            this.client.events.emit("session_ping", { id: s, topic: t });
        } catch (a) {
          await this.sendError({ id: s, topic: t, error: a }),
            this.client.logger.error(a);
        }
      }),
      (this.onSessionPingResponse = (t, i) => {
        const { id: s } = i,
          a = dt("session_ping", s);
        if (this.events.listenerCount(a) === 0)
          throw new Error(`emitting ${a} without any listeners`);
        setTimeout(() => {
          Zi(i)
            ? this.events.emit(dt("session_ping", s), {})
            : bi(i) &&
              this.events.emit(dt("session_ping", s), { error: i.error });
        }, 500);
      }),
      (this.onSessionDeleteRequest = async (t, i) => {
        const { id: s } = i;
        try {
          this.isValidDisconnect({ topic: t, reason: i.params }),
            await Promise.all([
              new Promise((a) => {
                this.client.core.relayer.once(zr.publish, async () => {
                  a(await this.deleteSession({ topic: t, id: s }));
                });
              }),
              this.sendResult({
                id: s,
                topic: t,
                result: !0,
                throwOnFailedPublish: !0,
              }),
              this.cleanupPendingSentRequestsForTopic({
                topic: t,
                error: Rt("USER_DISCONNECTED"),
              }),
            ]);
        } catch (a) {
          this.client.logger.error(a);
        }
      }),
      (this.onSessionRequest = async (t, i) => {
        var s;
        const { id: a, params: u } = i;
        try {
          await this.isValidRequest(nr({ topic: t }, u));
          const h = _s(JSON.stringify(oo("wc_sessionRequest", u, a))),
            p = this.client.session.get(t),
            d = await this.getVerifyContext(h, p.peer.metadata),
            b = { id: a, topic: t, params: u, verifyContext: d };
          await this.setPendingSessionRequest(b),
            (s = this.client.signConfig) != null && s.disableRequestQueue
              ? this.emitSessionRequest(b)
              : (this.addSessionRequestToSessionRequestQueue(b),
                this.processSessionRequestQueue());
        } catch (h) {
          await this.sendError({ id: a, topic: t, error: h }),
            this.client.logger.error(h);
        }
      }),
      (this.onSessionRequestResponse = (t, i) => {
        const { id: s } = i,
          a = dt("session_request", s);
        if (this.events.listenerCount(a) === 0)
          throw new Error(`emitting ${a} without any listeners`);
        Zi(i)
          ? this.events.emit(dt("session_request", s), { result: i.result })
          : bi(i) &&
            this.events.emit(dt("session_request", s), { error: i.error });
      }),
      (this.onSessionEventRequest = async (t, i) => {
        const { id: s, params: a } = i;
        try {
          const u = `${t}_session_event_${a.event.name}`,
            h = ko.get(u);
          if (h && this.isRequestOutOfSync(h, s)) {
            this.client.logger.info(`Discarding out of sync request - ${s}`);
            return;
          }
          this.isValidEmit(nr({ topic: t }, a)),
            this.client.events.emit("session_event", {
              id: s,
              topic: t,
              params: a,
            }),
            ko.set(u, s);
        } catch (u) {
          await this.sendError({ id: s, topic: t, error: u }),
            this.client.logger.error(u);
        }
      }),
      (this.onSessionAuthenticateResponse = (t, i) => {
        const { id: s } = i;
        this.client.logger.trace({
          type: "method",
          method: "onSessionAuthenticateResponse",
          topic: t,
          payload: i,
        }),
          Zi(i)
            ? this.events.emit(dt("session_request", s), { result: i.result })
            : bi(i) &&
              this.events.emit(dt("session_request", s), { error: i.error });
      }),
      (this.onSessionAuthenticateRequest = async (t, i) => {
        try {
          const { requester: s, authPayload: a, expiryTimestamp: u } = i.params,
            h = _s(JSON.stringify(i)),
            p = await this.getVerifyContext(h, this.client.metadata),
            d = {
              requester: s,
              pairingTopic: t,
              id: i.id,
              authPayload: a,
              verifyContext: p,
              expiryTimestamp: u,
            };
          await this.setAuthRequest(i.id, { request: d, pairingTopic: t }),
            this.client.events.emit("session_authenticate", {
              topic: t,
              params: i.params,
              id: i.id,
              verifyContext: p,
            });
        } catch (s) {
          this.client.logger.error(s);
          const a = i.params.requester.publicKey,
            u = await this.client.core.crypto.generateKeyPair(),
            h = { type: Pn, receiverPublicKey: a, senderPublicKey: u };
          await this.sendError({
            id: i.id,
            topic: t,
            error: s,
            encodeOpts: h,
            rpcOpts: dr.wc_sessionAuthenticate.autoReject,
          });
        }
      }),
      (this.addSessionRequestToSessionRequestQueue = (t) => {
        this.sessionRequestQueue.queue.push(t);
      }),
      (this.cleanupAfterResponse = (t) => {
        this.deletePendingSessionRequest(t.response.id, {
          message: "fulfilled",
          code: 0,
        }),
          setTimeout(() => {
            (this.sessionRequestQueue.state = Qi.idle),
              this.processSessionRequestQueue();
          }, ye.toMiliseconds(this.requestQueueDelay));
      }),
      (this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: i }) => {
        const s = this.client.core.history.pending;
        s.length > 0 &&
          s
            .filter(
              (a) => a.topic === t && a.request.method === "wc_sessionRequest"
            )
            .forEach((a) => {
              const u = a.request.id,
                h = dt("session_request", u);
              if (this.events.listenerCount(h) === 0)
                throw new Error(`emitting ${h} without any listeners`);
              this.events.emit(dt("session_request", a.request.id), {
                error: i,
              });
            });
      }),
      (this.processSessionRequestQueue = () => {
        if (this.sessionRequestQueue.state === Qi.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const t = this.sessionRequestQueue.queue[0];
        if (!t) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          (this.sessionRequestQueue.state = Qi.active),
            this.emitSessionRequest(t);
        } catch (i) {
          this.client.logger.error(i);
        }
      }),
      (this.emitSessionRequest = (t) => {
        this.client.events.emit("session_request", t);
      }),
      (this.onPairingCreated = (t) => {
        if (
          (t.methods && this.expectedPairingMethodMap.set(t.topic, t.methods),
          t.active)
        )
          return;
        const i = this.client.proposal
          .getAll()
          .find((s) => s.pairingTopic === t.topic);
        i &&
          this.onSessionProposeRequest(
            t.topic,
            oo(
              "wc_sessionPropose",
              {
                requiredNamespaces: i.requiredNamespaces,
                optionalNamespaces: i.optionalNamespaces,
                relays: i.relays,
                proposer: i.proposer,
                sessionProperties: i.sessionProperties,
              },
              i.id
            )
          );
      }),
      (this.isValidConnect = async (t) => {
        if (!jr(t)) {
          const { message: p } = ge(
            "MISSING_OR_INVALID",
            `connect() params: ${JSON.stringify(t)}`
          );
          throw new Error(p);
        }
        const {
          pairingTopic: i,
          requiredNamespaces: s,
          optionalNamespaces: a,
          sessionProperties: u,
          relays: h,
        } = t;
        if ((Fr(i) || (await this.isValidPairingTopic(i)), !ZS(h))) {
          const { message: p } = ge(
            "MISSING_OR_INVALID",
            `connect() relays: ${h}`
          );
          throw new Error(p);
        }
        !Fr(s) &&
          oa(s) !== 0 &&
          this.validateNamespaces(s, "requiredNamespaces"),
          !Fr(a) &&
            oa(a) !== 0 &&
            this.validateNamespaces(a, "optionalNamespaces"),
          Fr(u) || this.validateSessionProps(u, "sessionProperties");
      }),
      (this.validateNamespaces = (t, i) => {
        const s = XS(t, "connect()", i);
        if (s) throw new Error(s.message);
      }),
      (this.isValidApprove = async (t) => {
        if (!jr(t))
          throw new Error(
            ge("MISSING_OR_INVALID", `approve() params: ${t}`).message
          );
        const {
          id: i,
          namespaces: s,
          relayProtocol: a,
          sessionProperties: u,
        } = t;
        this.checkRecentlyDeleted(i), await this.isValidProposalId(i);
        const h = this.client.proposal.get(i),
          p = Wh(s, "approve()");
        if (p) throw new Error(p.message);
        const d = Sp(h.requiredNamespaces, s, "approve()");
        if (d) throw new Error(d.message);
        if (!Zt(a, !0)) {
          const { message: b } = ge(
            "MISSING_OR_INVALID",
            `approve() relayProtocol: ${a}`
          );
          throw new Error(b);
        }
        Fr(u) || this.validateSessionProps(u, "sessionProperties");
      }),
      (this.isValidReject = async (t) => {
        if (!jr(t)) {
          const { message: a } = ge(
            "MISSING_OR_INVALID",
            `reject() params: ${t}`
          );
          throw new Error(a);
        }
        const { id: i, reason: s } = t;
        if (
          (this.checkRecentlyDeleted(i),
          await this.isValidProposalId(i),
          !tI(s))
        ) {
          const { message: a } = ge(
            "MISSING_OR_INVALID",
            `reject() reason: ${JSON.stringify(s)}`
          );
          throw new Error(a);
        }
      }),
      (this.isValidSessionSettleRequest = (t) => {
        if (!jr(t)) {
          const { message: d } = ge(
            "MISSING_OR_INVALID",
            `onSessionSettleRequest() params: ${t}`
          );
          throw new Error(d);
        }
        const { relay: i, controller: s, namespaces: a, expiry: u } = t;
        if (!G1(i)) {
          const { message: d } = ge(
            "MISSING_OR_INVALID",
            "onSessionSettleRequest() relay protocol should be a string"
          );
          throw new Error(d);
        }
        const h = VS(s, "onSessionSettleRequest()");
        if (h) throw new Error(h.message);
        const p = Wh(a, "onSessionSettleRequest()");
        if (p) throw new Error(p.message);
        if (kn(u)) {
          const { message: d } = ge("EXPIRED", "onSessionSettleRequest()");
          throw new Error(d);
        }
      }),
      (this.isValidUpdate = async (t) => {
        if (!jr(t)) {
          const { message: p } = ge(
            "MISSING_OR_INVALID",
            `update() params: ${t}`
          );
          throw new Error(p);
        }
        const { topic: i, namespaces: s } = t;
        this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
        const a = this.client.session.get(i),
          u = Wh(s, "update()");
        if (u) throw new Error(u.message);
        const h = Sp(a.requiredNamespaces, s, "update()");
        if (h) throw new Error(h.message);
      }),
      (this.isValidExtend = async (t) => {
        if (!jr(t)) {
          const { message: s } = ge(
            "MISSING_OR_INVALID",
            `extend() params: ${t}`
          );
          throw new Error(s);
        }
        const { topic: i } = t;
        this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
      }),
      (this.isValidRequest = async (t) => {
        if (!jr(t)) {
          const { message: p } = ge(
            "MISSING_OR_INVALID",
            `request() params: ${t}`
          );
          throw new Error(p);
        }
        const { topic: i, request: s, chainId: a, expiry: u } = t;
        this.checkRecentlyDeleted(i), await this.isValidSessionTopic(i);
        const { namespaces: h } = this.client.session.get(i);
        if (!Ap(h, a)) {
          const { message: p } = ge(
            "MISSING_OR_INVALID",
            `request() chainId: ${a}`
          );
          throw new Error(p);
        }
        if (!rI(s)) {
          const { message: p } = ge(
            "MISSING_OR_INVALID",
            `request() ${JSON.stringify(s)}`
          );
          throw new Error(p);
        }
        if (!sI(h, a, s.method)) {
          const { message: p } = ge(
            "MISSING_OR_INVALID",
            `request() method: ${s.method}`
          );
          throw new Error(p);
        }
        if (u && !uI(u, nl)) {
          const { message: p } = ge(
            "MISSING_OR_INVALID",
            `request() expiry: ${u}. Expiry must be a number (in seconds) between ${nl.min} and ${nl.max}`
          );
          throw new Error(p);
        }
      }),
      (this.isValidRespond = async (t) => {
        var i;
        if (!jr(t)) {
          const { message: u } = ge(
            "MISSING_OR_INVALID",
            `respond() params: ${t}`
          );
          throw new Error(u);
        }
        const { topic: s, response: a } = t;
        try {
          await this.isValidSessionTopic(s);
        } catch (u) {
          throw (
            ((i = t == null ? void 0 : t.response) != null &&
              i.id &&
              this.cleanupAfterResponse(t),
            u)
          );
        }
        if (!iI(a)) {
          const { message: u } = ge(
            "MISSING_OR_INVALID",
            `respond() response: ${JSON.stringify(a)}`
          );
          throw new Error(u);
        }
      }),
      (this.isValidPing = async (t) => {
        if (!jr(t)) {
          const { message: s } = ge(
            "MISSING_OR_INVALID",
            `ping() params: ${t}`
          );
          throw new Error(s);
        }
        const { topic: i } = t;
        await this.isValidSessionOrPairingTopic(i);
      }),
      (this.isValidEmit = async (t) => {
        if (!jr(t)) {
          const { message: h } = ge(
            "MISSING_OR_INVALID",
            `emit() params: ${t}`
          );
          throw new Error(h);
        }
        const { topic: i, event: s, chainId: a } = t;
        await this.isValidSessionTopic(i);
        const { namespaces: u } = this.client.session.get(i);
        if (!Ap(u, a)) {
          const { message: h } = ge(
            "MISSING_OR_INVALID",
            `emit() chainId: ${a}`
          );
          throw new Error(h);
        }
        if (!nI(s)) {
          const { message: h } = ge(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(s)}`
          );
          throw new Error(h);
        }
        if (!oI(u, a, s.name)) {
          const { message: h } = ge(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(s)}`
          );
          throw new Error(h);
        }
      }),
      (this.isValidDisconnect = async (t) => {
        if (!jr(t)) {
          const { message: s } = ge(
            "MISSING_OR_INVALID",
            `disconnect() params: ${t}`
          );
          throw new Error(s);
        }
        const { topic: i } = t;
        await this.isValidSessionOrPairingTopic(i);
      }),
      (this.isValidAuthenticate = (t) => {
        const { chains: i, uri: s, domain: a, nonce: u } = t;
        if (!Array.isArray(i) || i.length === 0)
          throw new Error("chains is required and must be a non-empty array");
        if (!Zt(s, !1)) throw new Error("uri is required parameter");
        if (!Zt(a, !1)) throw new Error("domain is required parameter");
        if (!Zt(u, !1)) throw new Error("nonce is required parameter");
        if ([...new Set(i.map((p) => Jo(p).namespace))].length > 1)
          throw new Error(
            "Multi-namespace requests are not supported. Please request single namespace only."
          );
        const { namespace: h } = Jo(i[0]);
        if (h !== "eip155")
          throw new Error(
            "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
          );
      }),
      (this.getVerifyContext = async (t, i) => {
        const s = {
          verified: {
            verifyUrl: i.verifyUrl || Qo,
            validation: "UNKNOWN",
            origin: i.url || "",
          },
        };
        try {
          const a = await this.client.core.verify.resolve({
            attestationId: t,
            verifyUrl: i.verifyUrl,
          });
          a &&
            ((s.verified.origin = a.origin),
            (s.verified.isScam = a.isScam),
            (s.verified.validation =
              a.origin === new URL(i.url).origin ? "VALID" : "INVALID"));
        } catch (a) {
          this.client.logger.info(a);
        }
        return (
          this.client.logger.info(`Verify context: ${JSON.stringify(s)}`), s
        );
      }),
      (this.validateSessionProps = (t, i) => {
        Object.values(t).forEach((s) => {
          if (!Zt(s, !1)) {
            const { message: a } = ge(
              "MISSING_OR_INVALID",
              `${i} must be in Record<string, string> format. Received: ${JSON.stringify(
                s
              )}`
            );
            throw new Error(a);
          }
        });
      }),
      (this.getPendingAuthRequest = (t) => {
        const i = this.client.auth.requests.get(t);
        return typeof i == "object" ? i : void 0;
      }),
      (this.addToRecentlyDeleted = (t, i) => {
        if (
          (this.recentlyDeletedMap.set(t, i),
          this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
        ) {
          let s = 0;
          const a = this.recentlyDeletedLimit / 2;
          for (const u of this.recentlyDeletedMap.keys()) {
            if (s++ >= a) break;
            this.recentlyDeletedMap.delete(u);
          }
        }
      }),
      (this.checkRecentlyDeleted = (t) => {
        const i = this.recentlyDeletedMap.get(t);
        if (i) {
          const { message: s } = ge(
            "MISSING_OR_INVALID",
            `Record was recently deleted - ${i}: ${t}`
          );
          throw new Error(s);
        }
      });
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: e } = ge("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(zr.message, (e) => {
      !this.initialized || this.relayMessageCache.length > 0
        ? this.relayMessageCache.push(e)
        : this.onRelayMessage(e);
    });
  }
  async onRelayMessage(e) {
    const { topic: t, message: i, attestation: s } = e,
      { publicKey: a } = this.client.auth.authKeys.keys.includes(zc)
        ? this.client.auth.authKeys.get(zc)
        : { responseTopic: void 0, publicKey: void 0 },
      u = await this.client.core.crypto.decode(t, i, { receiverPublicKey: a });
    try {
      lf(u)
        ? (this.client.core.history.set(t, u),
          this.onRelayEventRequest({ topic: t, payload: u, attestation: s }))
        : mu(u)
        ? (await this.client.core.history.resolve(u),
          await this.onRelayEventResponse({ topic: t, payload: u }),
          this.client.core.history.delete(t, u.id))
        : this.onRelayEventUnknownPayload({ topic: t, payload: u });
    } catch (h) {
      this.client.logger.error(h);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(yi.expired, async (e) => {
      const { topic: t, id: i } = s1(e.target);
      if (i && this.client.pendingRequest.keys.includes(i))
        return await this.deletePendingSessionRequest(i, ge("EXPIRED"), !0);
      if (i && this.client.auth.requests.keys.includes(i))
        return await this.deletePendingAuthRequest(i, ge("EXPIRED"), !0);
      t
        ? this.client.session.keys.includes(t) &&
          (await this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
          this.client.events.emit("session_expire", { topic: t }))
        : i &&
          (await this.deleteProposal(i, !0),
          this.client.events.emit("proposal_expire", { id: i }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(ro.create, (e) =>
      this.onPairingCreated(e)
    ),
      this.client.core.pairing.events.on(ro.delete, (e) => {
        this.addToRecentlyDeleted(e.topic, "pairing");
      });
  }
  isValidPairingTopic(e) {
    if (!Zt(e, !1)) {
      const { message: t } = ge(
        "MISSING_OR_INVALID",
        `pairing topic should be a string: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(e)) {
      const { message: t } = ge(
        "NO_MATCHING_KEY",
        `pairing topic doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (kn(this.client.core.pairing.pairings.get(e).expiry)) {
      const { message: t } = ge("EXPIRED", `pairing topic: ${e}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(e) {
    if (!Zt(e, !1)) {
      const { message: t } = ge(
        "MISSING_OR_INVALID",
        `session topic should be a string: ${e}`
      );
      throw new Error(t);
    }
    if ((this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e))) {
      const { message: t } = ge(
        "NO_MATCHING_KEY",
        `session topic doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (kn(this.client.session.get(e).expiry)) {
      await this.deleteSession({ topic: e });
      const { message: t } = ge("EXPIRED", `session topic: ${e}`);
      throw new Error(t);
    }
    if (!this.client.core.crypto.keychain.has(e)) {
      const { message: t } = ge(
        "MISSING_OR_INVALID",
        `session topic does not exist in keychain: ${e}`
      );
      throw (await this.deleteSession({ topic: e }), new Error(t));
    }
  }
  async isValidSessionOrPairingTopic(e) {
    if ((this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)))
      await this.isValidSessionTopic(e);
    else if (this.client.core.pairing.pairings.keys.includes(e))
      this.isValidPairingTopic(e);
    else if (Zt(e, !1)) {
      const { message: t } = ge(
        "NO_MATCHING_KEY",
        `session or pairing topic doesn't exist: ${e}`
      );
      throw new Error(t);
    } else {
      const { message: t } = ge(
        "MISSING_OR_INVALID",
        `session or pairing topic should be a string: ${e}`
      );
      throw new Error(t);
    }
  }
  async isValidProposalId(e) {
    if (!eI(e)) {
      const { message: t } = ge(
        "MISSING_OR_INVALID",
        `proposal id should be a number: ${e}`
      );
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(e)) {
      const { message: t } = ge(
        "NO_MATCHING_KEY",
        `proposal id doesn't exist: ${e}`
      );
      throw new Error(t);
    }
    if (kn(this.client.proposal.get(e).expiryTimestamp)) {
      await this.deleteProposal(e);
      const { message: t } = ge("EXPIRED", `proposal id: ${e}`);
      throw new Error(t);
    }
  }
}
class TP extends Ms {
  constructor(e, t) {
    super(e, t, yP, pf), (this.core = e), (this.logger = t);
  }
}
class UP extends Ms {
  constructor(e, t) {
    super(e, t, wP, pf), (this.core = e), (this.logger = t);
  }
}
class BP extends Ms {
  constructor(e, t) {
    super(e, t, _P, pf, (i) => i.id), (this.core = e), (this.logger = t);
  }
}
class LP extends Ms {
  constructor(e, t) {
    super(e, t, IP, yu, () => zc), (this.core = e), (this.logger = t);
  }
}
class qP extends Ms {
  constructor(e, t) {
    super(e, t, DP, yu), (this.core = e), (this.logger = t);
  }
}
class jP extends Ms {
  constructor(e, t) {
    super(e, t, xP, yu, (i) => i.id), (this.core = e), (this.logger = t);
  }
}
class $P {
  constructor(e, t) {
    (this.core = e),
      (this.logger = t),
      (this.authKeys = new LP(this.core, this.logger)),
      (this.pairingTopics = new qP(this.core, this.logger)),
      (this.requests = new jP(this.core, this.logger));
  }
  async init() {
    await this.authKeys.init(),
      await this.pairingTopics.init(),
      await this.requests.init();
  }
}
class gf extends T4 {
  constructor(e) {
    super(e),
      (this.protocol = Pm),
      (this.version = Mm),
      (this.name = il.name),
      (this.events = new Ai.EventEmitter()),
      (this.on = (i, s) => this.events.on(i, s)),
      (this.once = (i, s) => this.events.once(i, s)),
      (this.off = (i, s) => this.events.off(i, s)),
      (this.removeListener = (i, s) => this.events.removeListener(i, s)),
      (this.removeAllListeners = (i) => this.events.removeAllListeners(i)),
      (this.connect = async (i) => {
        try {
          return await this.engine.connect(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.pair = async (i) => {
        try {
          return await this.engine.pair(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.approve = async (i) => {
        try {
          return await this.engine.approve(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.reject = async (i) => {
        try {
          return await this.engine.reject(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.update = async (i) => {
        try {
          return await this.engine.update(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.extend = async (i) => {
        try {
          return await this.engine.extend(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.request = async (i) => {
        try {
          return await this.engine.request(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.respond = async (i) => {
        try {
          return await this.engine.respond(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.ping = async (i) => {
        try {
          return await this.engine.ping(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.emit = async (i) => {
        try {
          return await this.engine.emit(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.disconnect = async (i) => {
        try {
          return await this.engine.disconnect(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.find = (i) => {
        try {
          return this.engine.find(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.getPendingSessionRequests = () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (i) {
          throw (this.logger.error(i.message), i);
        }
      }),
      (this.authenticate = async (i) => {
        try {
          return await this.engine.authenticate(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.formatAuthMessage = (i) => {
        try {
          return this.engine.formatAuthMessage(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.approveSessionAuthenticate = async (i) => {
        try {
          return await this.engine.approveSessionAuthenticate(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.rejectSessionAuthenticate = async (i) => {
        try {
          return await this.engine.rejectSessionAuthenticate(i);
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.name = (e == null ? void 0 : e.name) || il.name),
      (this.metadata = (e == null ? void 0 : e.metadata) || h5()),
      (this.signConfig = e == null ? void 0 : e.signConfig);
    const t =
      typeof (e == null ? void 0 : e.logger) < "u" &&
      typeof (e == null ? void 0 : e.logger) != "string"
        ? e.logger
        : ya(du({ level: (e == null ? void 0 : e.logger) || il.logger }));
    (this.core = (e == null ? void 0 : e.core) || new vP(e)),
      (this.logger = Kr(t, this.name)),
      (this.session = new UP(this.core, this.logger)),
      (this.proposal = new TP(this.core, this.logger)),
      (this.pendingRequest = new BP(this.core, this.logger)),
      (this.engine = new RP(this)),
      (this.auth = new $P(this.core, this.logger));
  }
  static async init(e) {
    const t = new gf(e);
    return await t.initialize(), t;
  }
  get context() {
    return Hr(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(),
        await this.session.init(),
        await this.proposal.init(),
        await this.pendingRequest.init(),
        await this.engine.init(),
        await this.auth.init(),
        this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
        this.logger.info("SignClient Initialization Success"),
        this.engine.processRelayMessageCache();
    } catch (e) {
      throw (
        (this.logger.info("SignClient Initialization Failure"),
        this.logger.error(e.message),
        e)
      );
    }
  }
}
var Bl = { exports: {} };
(function (r, e) {
  var t = typeof self < "u" ? self : Ui,
    i = (function () {
      function a() {
        (this.fetch = !1), (this.DOMException = t.DOMException);
      }
      return (a.prototype = t), new a();
    })();
  (function (a) {
    (function (u) {
      var h = {
        searchParams: "URLSearchParams" in a,
        iterable: "Symbol" in a && "iterator" in Symbol,
        blob:
          "FileReader" in a &&
          "Blob" in a &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in a,
        arrayBuffer: "ArrayBuffer" in a,
      };
      function p(l) {
        return l && DataView.prototype.isPrototypeOf(l);
      }
      if (h.arrayBuffer)
        var d = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          b =
            ArrayBuffer.isView ||
            function (l) {
              return l && d.indexOf(Object.prototype.toString.call(l)) > -1;
            };
      function E(l) {
        if (
          (typeof l != "string" && (l = String(l)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(l))
        )
          throw new TypeError("Invalid character in header field name");
        return l.toLowerCase();
      }
      function D(l) {
        return typeof l != "string" && (l = String(l)), l;
      }
      function S(l) {
        var w = {
          next: function () {
            var I = l.shift();
            return { done: I === void 0, value: I };
          },
        };
        return (
          h.iterable &&
            (w[Symbol.iterator] = function () {
              return w;
            }),
          w
        );
      }
      function M(l) {
        (this.map = {}),
          l instanceof M
            ? l.forEach(function (w, I) {
                this.append(I, w);
              }, this)
            : Array.isArray(l)
            ? l.forEach(function (w) {
                this.append(w[0], w[1]);
              }, this)
            : l &&
              Object.getOwnPropertyNames(l).forEach(function (w) {
                this.append(w, l[w]);
              }, this);
      }
      (M.prototype.append = function (l, w) {
        (l = E(l)), (w = D(w));
        var I = this.map[l];
        this.map[l] = I ? I + ", " + w : w;
      }),
        (M.prototype.delete = function (l) {
          delete this.map[E(l)];
        }),
        (M.prototype.get = function (l) {
          return (l = E(l)), this.has(l) ? this.map[l] : null;
        }),
        (M.prototype.has = function (l) {
          return this.map.hasOwnProperty(E(l));
        }),
        (M.prototype.set = function (l, w) {
          this.map[E(l)] = D(w);
        }),
        (M.prototype.forEach = function (l, w) {
          for (var I in this.map)
            this.map.hasOwnProperty(I) && l.call(w, this.map[I], I, this);
        }),
        (M.prototype.keys = function () {
          var l = [];
          return (
            this.forEach(function (w, I) {
              l.push(I);
            }),
            S(l)
          );
        }),
        (M.prototype.values = function () {
          var l = [];
          return (
            this.forEach(function (w) {
              l.push(w);
            }),
            S(l)
          );
        }),
        (M.prototype.entries = function () {
          var l = [];
          return (
            this.forEach(function (w, I) {
              l.push([I, w]);
            }),
            S(l)
          );
        }),
        h.iterable && (M.prototype[Symbol.iterator] = M.prototype.entries);
      function W(l) {
        if (l.bodyUsed) return Promise.reject(new TypeError("Already read"));
        l.bodyUsed = !0;
      }
      function G(l) {
        return new Promise(function (w, I) {
          (l.onload = function () {
            w(l.result);
          }),
            (l.onerror = function () {
              I(l.error);
            });
        });
      }
      function ee(l) {
        var w = new FileReader(),
          I = G(w);
        return w.readAsArrayBuffer(l), I;
      }
      function K(l) {
        var w = new FileReader(),
          I = G(w);
        return w.readAsText(l), I;
      }
      function V(l) {
        for (
          var w = new Uint8Array(l), I = new Array(w.length), P = 0;
          P < w.length;
          P++
        )
          I[P] = String.fromCharCode(w[P]);
        return I.join("");
      }
      function q(l) {
        if (l.slice) return l.slice(0);
        var w = new Uint8Array(l.byteLength);
        return w.set(new Uint8Array(l)), w.buffer;
      }
      function F() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (l) {
            (this._bodyInit = l),
              l
                ? typeof l == "string"
                  ? (this._bodyText = l)
                  : h.blob && Blob.prototype.isPrototypeOf(l)
                  ? (this._bodyBlob = l)
                  : h.formData && FormData.prototype.isPrototypeOf(l)
                  ? (this._bodyFormData = l)
                  : h.searchParams && URLSearchParams.prototype.isPrototypeOf(l)
                  ? (this._bodyText = l.toString())
                  : h.arrayBuffer && h.blob && p(l)
                  ? ((this._bodyArrayBuffer = q(l.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : h.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(l) || b(l))
                  ? (this._bodyArrayBuffer = q(l))
                  : (this._bodyText = l = Object.prototype.toString.call(l))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof l == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : h.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(l) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          h.blob &&
            ((this.blob = function () {
              var l = W(this);
              if (l) return l;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? W(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(ee);
            })),
          (this.text = function () {
            var l = W(this);
            if (l) return l;
            if (this._bodyBlob) return K(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(V(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          h.formData &&
            (this.formData = function () {
              return this.text().then(ne);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var z = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function y(l) {
        var w = l.toUpperCase();
        return z.indexOf(w) > -1 ? w : l;
      }
      function T(l, w) {
        w = w || {};
        var I = w.body;
        if (l instanceof T) {
          if (l.bodyUsed) throw new TypeError("Already read");
          (this.url = l.url),
            (this.credentials = l.credentials),
            w.headers || (this.headers = new M(l.headers)),
            (this.method = l.method),
            (this.mode = l.mode),
            (this.signal = l.signal),
            !I && l._bodyInit != null && ((I = l._bodyInit), (l.bodyUsed = !0));
        } else this.url = String(l);
        if (
          ((this.credentials =
            w.credentials || this.credentials || "same-origin"),
          (w.headers || !this.headers) && (this.headers = new M(w.headers)),
          (this.method = y(w.method || this.method || "GET")),
          (this.mode = w.mode || this.mode || null),
          (this.signal = w.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && I)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(I);
      }
      T.prototype.clone = function () {
        return new T(this, { body: this._bodyInit });
      };
      function ne(l) {
        var w = new FormData();
        return (
          l
            .trim()
            .split("&")
            .forEach(function (I) {
              if (I) {
                var P = I.split("="),
                  O = P.shift().replace(/\+/g, " "),
                  U = P.join("=").replace(/\+/g, " ");
                w.append(decodeURIComponent(O), decodeURIComponent(U));
              }
            }),
          w
        );
      }
      function fe(l) {
        var w = new M(),
          I = l.replace(/\r?\n[\t ]+/g, " ");
        return (
          I.split(/\r?\n/).forEach(function (P) {
            var O = P.split(":"),
              U = O.shift().trim();
            if (U) {
              var x = O.join(":").trim();
              w.append(U, x);
            }
          }),
          w
        );
      }
      F.call(T.prototype);
      function le(l, w) {
        w || (w = {}),
          (this.type = "default"),
          (this.status = w.status === void 0 ? 200 : w.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in w ? w.statusText : "OK"),
          (this.headers = new M(w.headers)),
          (this.url = w.url || ""),
          this._initBody(l);
      }
      F.call(le.prototype),
        (le.prototype.clone = function () {
          return new le(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new M(this.headers),
            url: this.url,
          });
        }),
        (le.error = function () {
          var l = new le(null, { status: 0, statusText: "" });
          return (l.type = "error"), l;
        });
      var me = [301, 302, 303, 307, 308];
      (le.redirect = function (l, w) {
        if (me.indexOf(w) === -1) throw new RangeError("Invalid status code");
        return new le(null, { status: w, headers: { location: l } });
      }),
        (u.DOMException = a.DOMException);
      try {
        new u.DOMException();
      } catch {
        (u.DOMException = function (w, I) {
          (this.message = w), (this.name = I);
          var P = Error(w);
          this.stack = P.stack;
        }),
          (u.DOMException.prototype = Object.create(Error.prototype)),
          (u.DOMException.prototype.constructor = u.DOMException);
      }
      function f(l, w) {
        return new Promise(function (I, P) {
          var O = new T(l, w);
          if (O.signal && O.signal.aborted)
            return P(new u.DOMException("Aborted", "AbortError"));
          var U = new XMLHttpRequest();
          function x() {
            U.abort();
          }
          (U.onload = function () {
            var g = {
              status: U.status,
              statusText: U.statusText,
              headers: fe(U.getAllResponseHeaders() || ""),
            };
            g.url =
              "responseURL" in U
                ? U.responseURL
                : g.headers.get("X-Request-URL");
            var N = "response" in U ? U.response : U.responseText;
            I(new le(N, g));
          }),
            (U.onerror = function () {
              P(new TypeError("Network request failed"));
            }),
            (U.ontimeout = function () {
              P(new TypeError("Network request failed"));
            }),
            (U.onabort = function () {
              P(new u.DOMException("Aborted", "AbortError"));
            }),
            U.open(O.method, O.url, !0),
            O.credentials === "include"
              ? (U.withCredentials = !0)
              : O.credentials === "omit" && (U.withCredentials = !1),
            "responseType" in U && h.blob && (U.responseType = "blob"),
            O.headers.forEach(function (g, N) {
              U.setRequestHeader(N, g);
            }),
            O.signal &&
              (O.signal.addEventListener("abort", x),
              (U.onreadystatechange = function () {
                U.readyState === 4 && O.signal.removeEventListener("abort", x);
              })),
            U.send(typeof O._bodyInit > "u" ? null : O._bodyInit);
        });
      }
      return (
        (f.polyfill = !0),
        a.fetch ||
          ((a.fetch = f), (a.Headers = M), (a.Request = T), (a.Response = le)),
        (u.Headers = M),
        (u.Request = T),
        (u.Response = le),
        (u.fetch = f),
        Object.defineProperty(u, "__esModule", { value: !0 }),
        u
      );
    })({});
  })(i),
    (i.fetch.ponyfill = !0),
    delete i.fetch.polyfill;
  var s = i;
  (e = s.fetch),
    (e.default = s.fetch),
    (e.fetch = s.fetch),
    (e.Headers = s.Headers),
    (e.Request = s.Request),
    (e.Response = s.Response),
    (r.exports = e);
})(Bl, Bl.exports);
var FP = Bl.exports;
const fg = $l(FP);
var zP = Object.defineProperty,
  kP = Object.defineProperties,
  HP = Object.getOwnPropertyDescriptors,
  dg = Object.getOwnPropertySymbols,
  KP = Object.prototype.hasOwnProperty,
  VP = Object.prototype.propertyIsEnumerable,
  pg = (r, e, t) =>
    e in r
      ? zP(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  gg = (r, e) => {
    for (var t in e || (e = {})) KP.call(e, t) && pg(r, t, e[t]);
    if (dg) for (var t of dg(e)) VP.call(e, t) && pg(r, t, e[t]);
    return r;
  },
  mg = (r, e) => kP(r, HP(e));
const GP = { Accept: "application/json", "Content-Type": "application/json" },
  WP = "POST",
  vg = { headers: GP, method: WP },
  yg = 10;
class ln {
  constructor(e, t = !1) {
    if (
      ((this.url = e),
      (this.disableProviderPing = t),
      (this.events = new Ai.EventEmitter()),
      (this.isAvailable = !1),
      (this.registering = !1),
      !zp(e))
    )
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${e}`
      );
    (this.url = e), (this.disableProviderPing = t);
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async open(e = this.url) {
    await this.register(e);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(e) {
    this.isAvailable || (await this.register());
    try {
      const t = Mn(e),
        i = await (await fg(this.url, mg(gg({}, vg), { body: t }))).json();
      this.onPayload({ data: i });
    } catch (t) {
      this.onError(e.id, t);
    }
  }
  async register(e = this.url) {
    if (!zp(e))
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${e}`
      );
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= t ||
          this.events.listenerCount("open") >= t) &&
          this.events.setMaxListeners(t + 1),
        new Promise((i, s) => {
          this.events.once("register_error", (a) => {
            this.resetMaxListeners(), s(a);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.isAvailable > "u"))
                return s(new Error("HTTP connection is missing or invalid"));
              i();
            });
        })
      );
    }
    (this.url = e), (this.registering = !0);
    try {
      if (!this.disableProviderPing) {
        const t = Mn({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await fg(e, mg(gg({}, vg), { body: t }));
      }
      this.onOpen();
    } catch (t) {
      const i = this.parseError(t);
      throw (this.events.emit("register_error", i), this.onClose(), i);
    }
  }
  onOpen() {
    (this.isAvailable = !0), (this.registering = !1), this.events.emit("open");
  }
  onClose() {
    (this.isAvailable = !1), (this.registering = !1), this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data > "u") return;
    const t = typeof e.data == "string" ? ma(e.data) : e.data;
    this.events.emit("payload", t);
  }
  onError(e, t) {
    const i = this.parseError(t),
      s = i.message || i.toString(),
      a = gu(e, s);
    this.events.emit("payload", a);
  }
  parseError(e, t = this.url) {
    return um(e, t, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > yg && this.events.setMaxListeners(yg);
  }
}
const wg = "error",
  YP = "wss://relay.walletconnect.com",
  QP = "wc",
  JP = "universal_provider",
  bg = `${QP}@2:${JP}:`,
  XP = "https://rpc.walletconnect.com/v1/",
  eo = "generic",
  $i = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var Vo =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Ll = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (r, e) {
  (function () {
    var t,
      i = "4.17.21",
      s = 200,
      a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      u = "Expected a function",
      h = "Invalid `variable` option passed into `_.template`",
      p = "__lodash_hash_undefined__",
      d = 500,
      b = "__lodash_placeholder__",
      E = 1,
      D = 2,
      S = 4,
      M = 1,
      W = 2,
      G = 1,
      ee = 2,
      K = 4,
      V = 8,
      q = 16,
      F = 32,
      z = 64,
      y = 128,
      T = 256,
      ne = 512,
      fe = 30,
      le = "...",
      me = 800,
      f = 16,
      l = 1,
      w = 2,
      I = 3,
      P = 1 / 0,
      O = 9007199254740991,
      U = 17976931348623157e292,
      x = NaN,
      g = 4294967295,
      N = g - 1,
      ie = g >>> 1,
      de = [
        ["ary", y],
        ["bind", G],
        ["bindKey", ee],
        ["curry", V],
        ["curryRight", q],
        ["flip", ne],
        ["partial", F],
        ["partialRight", z],
        ["rearg", T],
      ],
      _ = "[object Arguments]",
      Z = "[object Array]",
      L = "[object AsyncFunction]",
      j = "[object Boolean]",
      k = "[object Date]",
      m = "[object DOMException]",
      B = "[object Error]",
      te = "[object Function]",
      ue = "[object GeneratorFunction]",
      ae = "[object Map]",
      Pe = "[object Number]",
      Ce = "[object Null]",
      Ie = "[object Object]",
      Et = "[object Promise]",
      Fe = "[object Proxy]",
      xe = "[object RegExp]",
      Le = "[object Set]",
      _e = "[object String]",
      Ee = "[object Symbol]",
      Ve = "[object Undefined]",
      we = "[object WeakMap]",
      Ae = "[object WeakSet]",
      Be = "[object ArrayBuffer]",
      be = "[object DataView]",
      Me = "[object Float32Array]",
      qe = "[object Float64Array]",
      Oe = "[object Int8Array]",
      Ne = "[object Int16Array]",
      st = "[object Int32Array]",
      Te = "[object Uint8Array]",
      Re = "[object Uint8ClampedArray]",
      Ht = "[object Uint16Array]",
      ct = "[object Uint32Array]",
      pt = /\b__p \+= '';/g,
      Kt = /\b(__p \+=) '' \+/g,
      yt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      _t = /&(?:amp|lt|gt|quot|#39);/g,
      Er = /[&<>"']/g,
      Ge = RegExp(_t.source),
      ze = RegExp(Er.source),
      It = /<%-([\s\S]+?)%>/g,
      We = /<%([\s\S]+?)%>/g,
      Ke = /<%=([\s\S]+?)%>/g,
      At = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Je = /^\w*$/,
      Xe =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      Dt = /[\\^$.*+?()[\]{}|]/g,
      Ze = RegExp(Dt.source),
      Ye = /^\s+/,
      Mt = /\s/,
      Qe = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      je = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Tt = /,? & /,
      et = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      Ct = /[()=,{}\[\]\/\s]/,
      Si = /\\(\\)?/g,
      Ot = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      lt = /\w*$/,
      ri = /^[-+]0x[0-9a-f]+$/i,
      ii = /^0b[01]+$/i,
      ni = /^\[object .+?Constructor\]$/,
      si = /^0o[0-7]+$/i,
      oi = /^(?:0|[1-9]\d*)$/,
      or = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Fi = /($^)/,
      Qn = /['\n\r\u2028\u2029\\]/g,
      zi = "\\ud800-\\udfff",
      Jn = "\\u0300-\\u036f",
      Xn = "\\ufe20-\\ufe2f",
      ki = "\\u20d0-\\u20ff",
      Cn = Jn + Xn + ki,
      On = "\\u2700-\\u27bf",
      Ar = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Zn = "\\xac\\xb1\\xd7\\xf7",
      es = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      ts = "\\u2000-\\u206f",
      rs =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      _a = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      Ea = "\\ufe0e\\ufe0f",
      is = Zn + es + ts + rs,
      wo = "['’]",
      ns = "[" + zi + "]",
      bo = "[" + is + "]",
      ss = "[" + Cn + "]",
      Aa = "\\d+",
      wu = "[" + On + "]",
      Sa = "[" + Ar + "]",
      Ia = "[^" + zi + is + Aa + On + Ar + _a + "]",
      Os = "\\ud83c[\\udffb-\\udfff]",
      bu = "(?:" + ss + "|" + Os + ")",
      Da = "[^" + zi + "]",
      Ns = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Nn = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      Vr = "[" + _a + "]",
      xa = "\\u200d",
      Pa = "(?:" + Sa + "|" + Ia + ")",
      Hi = "(?:" + Vr + "|" + Ia + ")",
      Ma = "(?:" + wo + "(?:d|ll|m|re|s|t|ve))?",
      Ca = "(?:" + wo + "(?:D|LL|M|RE|S|T|VE))?",
      Oa = bu + "?",
      Na = "[" + Ea + "]?",
      _u = "(?:" + xa + "(?:" + [Da, Ns, Nn].join("|") + ")" + Na + Oa + ")*",
      fn = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      Ra = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      Ta = Na + Oa + _u,
      Rs = "(?:" + [wu, Ns, Nn].join("|") + ")" + Ta,
      Eu = "(?:" + [Da + ss + "?", ss, Ns, Nn, ns].join("|") + ")",
      _o = RegExp(wo, "g"),
      Au = RegExp(ss, "g"),
      Ts = RegExp(Os + "(?=" + Os + ")|" + Eu + Ta, "g"),
      Ua = RegExp(
        [
          Vr + "?" + Sa + "+" + Ma + "(?=" + [bo, Vr, "$"].join("|") + ")",
          Hi + "+" + Ca + "(?=" + [bo, Vr + Pa, "$"].join("|") + ")",
          Vr + "?" + Pa + "+" + Ma,
          Vr + "+" + Ca,
          Ra,
          fn,
          Aa,
          Rs,
        ].join("|"),
        "g"
      ),
      Ba = RegExp("[" + xa + zi + Cn + Ea + "]"),
      os = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      La = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      Su = -1,
      Bt = {};
    (Bt[Me] =
      Bt[qe] =
      Bt[Oe] =
      Bt[Ne] =
      Bt[st] =
      Bt[Te] =
      Bt[Re] =
      Bt[Ht] =
      Bt[ct] =
        !0),
      (Bt[_] =
        Bt[Z] =
        Bt[Be] =
        Bt[j] =
        Bt[be] =
        Bt[k] =
        Bt[B] =
        Bt[te] =
        Bt[ae] =
        Bt[Pe] =
        Bt[Ie] =
        Bt[xe] =
        Bt[Le] =
        Bt[_e] =
        Bt[we] =
          !1);
    var Ut = {};
    (Ut[_] =
      Ut[Z] =
      Ut[Be] =
      Ut[be] =
      Ut[j] =
      Ut[k] =
      Ut[Me] =
      Ut[qe] =
      Ut[Oe] =
      Ut[Ne] =
      Ut[st] =
      Ut[ae] =
      Ut[Pe] =
      Ut[Ie] =
      Ut[xe] =
      Ut[Le] =
      Ut[_e] =
      Ut[Ee] =
      Ut[Te] =
      Ut[Re] =
      Ut[Ht] =
      Ut[ct] =
        !0),
      (Ut[B] = Ut[te] = Ut[we] = !1);
    var $ = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      Q = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      he = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      Se = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      Lt = parseFloat,
      rt = parseInt,
      Ft = typeof Vo == "object" && Vo && Vo.Object === Object && Vo,
      er = typeof self == "object" && self && self.Object === Object && self,
      wt = Ft || er || Function("return this")(),
      qt = e && !e.nodeType && e,
      Yt = qt && !0 && r && !r.nodeType && r,
      Nr = Yt && Yt.exports === qt,
      tr = Nr && Ft.process,
      zt = (function () {
        try {
          var J = Yt && Yt.require && Yt.require("util").types;
          return J || (tr && tr.binding && tr.binding("util"));
        } catch {}
      })(),
      Sr = zt && zt.isArrayBuffer,
      Ii = zt && zt.isDate,
      ai = zt && zt.isMap,
      Ki = zt && zt.isRegExp,
      Eo = zt && zt.isSet,
      as = zt && zt.isTypedArray;
    function ar(J, se, re) {
      switch (re.length) {
        case 0:
          return J.call(se);
        case 1:
          return J.call(se, re[0]);
        case 2:
          return J.call(se, re[0], re[1]);
        case 3:
          return J.call(se, re[0], re[1], re[2]);
      }
      return J.apply(se, re);
    }
    function Tm(J, se, re, De) {
      for (var tt = -1, St = J == null ? 0 : J.length; ++tt < St; ) {
        var rr = J[tt];
        se(De, rr, re(rr), J);
      }
      return De;
    }
    function ci(J, se) {
      for (
        var re = -1, De = J == null ? 0 : J.length;
        ++re < De && se(J[re], re, J) !== !1;

      );
      return J;
    }
    function Um(J, se) {
      for (
        var re = J == null ? 0 : J.length;
        re-- && se(J[re], re, J) !== !1;

      );
      return J;
    }
    function yf(J, se) {
      for (var re = -1, De = J == null ? 0 : J.length; ++re < De; )
        if (!se(J[re], re, J)) return !1;
      return !0;
    }
    function Rn(J, se) {
      for (
        var re = -1, De = J == null ? 0 : J.length, tt = 0, St = [];
        ++re < De;

      ) {
        var rr = J[re];
        se(rr, re, J) && (St[tt++] = rr);
      }
      return St;
    }
    function qa(J, se) {
      var re = J == null ? 0 : J.length;
      return !!re && Us(J, se, 0) > -1;
    }
    function Iu(J, se, re) {
      for (var De = -1, tt = J == null ? 0 : J.length; ++De < tt; )
        if (re(se, J[De])) return !0;
      return !1;
    }
    function kt(J, se) {
      for (
        var re = -1, De = J == null ? 0 : J.length, tt = Array(De);
        ++re < De;

      )
        tt[re] = se(J[re], re, J);
      return tt;
    }
    function Tn(J, se) {
      for (var re = -1, De = se.length, tt = J.length; ++re < De; )
        J[tt + re] = se[re];
      return J;
    }
    function Du(J, se, re, De) {
      var tt = -1,
        St = J == null ? 0 : J.length;
      for (De && St && (re = J[++tt]); ++tt < St; ) re = se(re, J[tt], tt, J);
      return re;
    }
    function Bm(J, se, re, De) {
      var tt = J == null ? 0 : J.length;
      for (De && tt && (re = J[--tt]); tt--; ) re = se(re, J[tt], tt, J);
      return re;
    }
    function xu(J, se) {
      for (var re = -1, De = J == null ? 0 : J.length; ++re < De; )
        if (se(J[re], re, J)) return !0;
      return !1;
    }
    var Lm = Pu("length");
    function qm(J) {
      return J.split("");
    }
    function jm(J) {
      return J.match(et) || [];
    }
    function wf(J, se, re) {
      var De;
      return (
        re(J, function (tt, St, rr) {
          if (se(tt, St, rr)) return (De = St), !1;
        }),
        De
      );
    }
    function ja(J, se, re, De) {
      for (var tt = J.length, St = re + (De ? 1 : -1); De ? St-- : ++St < tt; )
        if (se(J[St], St, J)) return St;
      return -1;
    }
    function Us(J, se, re) {
      return se === se ? Jm(J, se, re) : ja(J, bf, re);
    }
    function $m(J, se, re, De) {
      for (var tt = re - 1, St = J.length; ++tt < St; )
        if (De(J[tt], se)) return tt;
      return -1;
    }
    function bf(J) {
      return J !== J;
    }
    function _f(J, se) {
      var re = J == null ? 0 : J.length;
      return re ? Cu(J, se) / re : x;
    }
    function Pu(J) {
      return function (se) {
        return se == null ? t : se[J];
      };
    }
    function Mu(J) {
      return function (se) {
        return J == null ? t : J[se];
      };
    }
    function Ef(J, se, re, De, tt) {
      return (
        tt(J, function (St, rr, jt) {
          re = De ? ((De = !1), St) : se(re, St, rr, jt);
        }),
        re
      );
    }
    function Fm(J, se) {
      var re = J.length;
      for (J.sort(se); re--; ) J[re] = J[re].value;
      return J;
    }
    function Cu(J, se) {
      for (var re, De = -1, tt = J.length; ++De < tt; ) {
        var St = se(J[De]);
        St !== t && (re = re === t ? St : re + St);
      }
      return re;
    }
    function Ou(J, se) {
      for (var re = -1, De = Array(J); ++re < J; ) De[re] = se(re);
      return De;
    }
    function zm(J, se) {
      return kt(se, function (re) {
        return [re, J[re]];
      });
    }
    function Af(J) {
      return J && J.slice(0, xf(J) + 1).replace(Ye, "");
    }
    function Gr(J) {
      return function (se) {
        return J(se);
      };
    }
    function Nu(J, se) {
      return kt(se, function (re) {
        return J[re];
      });
    }
    function Ao(J, se) {
      return J.has(se);
    }
    function Sf(J, se) {
      for (var re = -1, De = J.length; ++re < De && Us(se, J[re], 0) > -1; );
      return re;
    }
    function If(J, se) {
      for (var re = J.length; re-- && Us(se, J[re], 0) > -1; );
      return re;
    }
    function km(J, se) {
      for (var re = J.length, De = 0; re--; ) J[re] === se && ++De;
      return De;
    }
    var Hm = Mu($),
      Km = Mu(Q);
    function Vm(J) {
      return "\\" + Se[J];
    }
    function Gm(J, se) {
      return J == null ? t : J[se];
    }
    function Bs(J) {
      return Ba.test(J);
    }
    function Wm(J) {
      return os.test(J);
    }
    function Ym(J) {
      for (var se, re = []; !(se = J.next()).done; ) re.push(se.value);
      return re;
    }
    function Ru(J) {
      var se = -1,
        re = Array(J.size);
      return (
        J.forEach(function (De, tt) {
          re[++se] = [tt, De];
        }),
        re
      );
    }
    function Df(J, se) {
      return function (re) {
        return J(se(re));
      };
    }
    function Un(J, se) {
      for (var re = -1, De = J.length, tt = 0, St = []; ++re < De; ) {
        var rr = J[re];
        (rr === se || rr === b) && ((J[re] = b), (St[tt++] = re));
      }
      return St;
    }
    function $a(J) {
      var se = -1,
        re = Array(J.size);
      return (
        J.forEach(function (De) {
          re[++se] = De;
        }),
        re
      );
    }
    function Qm(J) {
      var se = -1,
        re = Array(J.size);
      return (
        J.forEach(function (De) {
          re[++se] = [De, De];
        }),
        re
      );
    }
    function Jm(J, se, re) {
      for (var De = re - 1, tt = J.length; ++De < tt; )
        if (J[De] === se) return De;
      return -1;
    }
    function Xm(J, se, re) {
      for (var De = re + 1; De--; ) if (J[De] === se) return De;
      return De;
    }
    function Ls(J) {
      return Bs(J) ? ev(J) : Lm(J);
    }
    function Di(J) {
      return Bs(J) ? tv(J) : qm(J);
    }
    function xf(J) {
      for (var se = J.length; se-- && Mt.test(J.charAt(se)); );
      return se;
    }
    var Zm = Mu(he);
    function ev(J) {
      for (var se = (Ts.lastIndex = 0); Ts.test(J); ) ++se;
      return se;
    }
    function tv(J) {
      return J.match(Ts) || [];
    }
    function rv(J) {
      return J.match(Ua) || [];
    }
    var iv = function J(se) {
        se = se == null ? wt : qs.defaults(wt.Object(), se, qs.pick(wt, La));
        var re = se.Array,
          De = se.Date,
          tt = se.Error,
          St = se.Function,
          rr = se.Math,
          jt = se.Object,
          Tu = se.RegExp,
          nv = se.String,
          ui = se.TypeError,
          Fa = re.prototype,
          sv = St.prototype,
          js = jt.prototype,
          za = se["__core-js_shared__"],
          ka = sv.toString,
          Nt = js.hasOwnProperty,
          ov = 0,
          Pf = (function () {
            var n = /[^.]+$/.exec((za && za.keys && za.keys.IE_PROTO) || "");
            return n ? "Symbol(src)_1." + n : "";
          })(),
          Ha = js.toString,
          av = ka.call(jt),
          cv = wt._,
          uv = Tu(
            "^" +
              ka
                .call(Nt)
                .replace(Dt, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          Ka = Nr ? se.Buffer : t,
          Bn = se.Symbol,
          Va = se.Uint8Array,
          Mf = Ka ? Ka.allocUnsafe : t,
          Ga = Df(jt.getPrototypeOf, jt),
          Cf = jt.create,
          Of = js.propertyIsEnumerable,
          Wa = Fa.splice,
          Nf = Bn ? Bn.isConcatSpreadable : t,
          So = Bn ? Bn.iterator : t,
          cs = Bn ? Bn.toStringTag : t,
          Ya = (function () {
            try {
              var n = ds(jt, "defineProperty");
              return n({}, "", {}), n;
            } catch {}
          })(),
          hv = se.clearTimeout !== wt.clearTimeout && se.clearTimeout,
          lv = De && De.now !== wt.Date.now && De.now,
          fv = se.setTimeout !== wt.setTimeout && se.setTimeout,
          Qa = rr.ceil,
          Ja = rr.floor,
          Uu = jt.getOwnPropertySymbols,
          dv = Ka ? Ka.isBuffer : t,
          Rf = se.isFinite,
          pv = Fa.join,
          gv = Df(jt.keys, jt),
          ir = rr.max,
          yr = rr.min,
          mv = De.now,
          vv = se.parseInt,
          Tf = rr.random,
          yv = Fa.reverse,
          Bu = ds(se, "DataView"),
          Io = ds(se, "Map"),
          Lu = ds(se, "Promise"),
          $s = ds(se, "Set"),
          Do = ds(se, "WeakMap"),
          xo = ds(jt, "create"),
          Xa = Do && new Do(),
          Fs = {},
          wv = ps(Bu),
          bv = ps(Io),
          _v = ps(Lu),
          Ev = ps($s),
          Av = ps(Do),
          Za = Bn ? Bn.prototype : t,
          Po = Za ? Za.valueOf : t,
          Uf = Za ? Za.toString : t;
        function C(n) {
          if (Gt(n) && !it(n) && !(n instanceof gt)) {
            if (n instanceof hi) return n;
            if (Nt.call(n, "__wrapped__")) return Bd(n);
          }
          return new hi(n);
        }
        var zs = (function () {
          function n() {}
          return function (o) {
            if (!Vt(o)) return {};
            if (Cf) return Cf(o);
            n.prototype = o;
            var c = new n();
            return (n.prototype = t), c;
          };
        })();
        function ec() {}
        function hi(n, o) {
          (this.__wrapped__ = n),
            (this.__actions__ = []),
            (this.__chain__ = !!o),
            (this.__index__ = 0),
            (this.__values__ = t);
        }
        (C.templateSettings = {
          escape: It,
          evaluate: We,
          interpolate: Ke,
          variable: "",
          imports: { _: C },
        }),
          (C.prototype = ec.prototype),
          (C.prototype.constructor = C),
          (hi.prototype = zs(ec.prototype)),
          (hi.prototype.constructor = hi);
        function gt(n) {
          (this.__wrapped__ = n),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = g),
            (this.__views__ = []);
        }
        function Sv() {
          var n = new gt(this.__wrapped__);
          return (
            (n.__actions__ = Rr(this.__actions__)),
            (n.__dir__ = this.__dir__),
            (n.__filtered__ = this.__filtered__),
            (n.__iteratees__ = Rr(this.__iteratees__)),
            (n.__takeCount__ = this.__takeCount__),
            (n.__views__ = Rr(this.__views__)),
            n
          );
        }
        function Iv() {
          if (this.__filtered__) {
            var n = new gt(this);
            (n.__dir__ = -1), (n.__filtered__ = !0);
          } else (n = this.clone()), (n.__dir__ *= -1);
          return n;
        }
        function Dv() {
          var n = this.__wrapped__.value(),
            o = this.__dir__,
            c = it(n),
            v = o < 0,
            A = c ? n.length : 0,
            R = qy(0, A, this.__views__),
            H = R.start,
            Y = R.end,
            X = Y - H,
            oe = v ? Y : H - 1,
            ce = this.__iteratees__,
            pe = ce.length,
            ve = 0,
            Ue = yr(X, this.__takeCount__);
          if (!c || (!v && A == X && Ue == X)) return sd(n, this.__actions__);
          var ke = [];
          e: for (; X-- && ve < Ue; ) {
            oe += o;
            for (var ut = -1, He = n[oe]; ++ut < pe; ) {
              var ft = ce[ut],
                bt = ft.iteratee,
                Qr = ft.type,
                xr = bt(He);
              if (Qr == w) He = xr;
              else if (!xr) {
                if (Qr == l) continue e;
                break e;
              }
            }
            ke[ve++] = He;
          }
          return ke;
        }
        (gt.prototype = zs(ec.prototype)), (gt.prototype.constructor = gt);
        function us(n) {
          var o = -1,
            c = n == null ? 0 : n.length;
          for (this.clear(); ++o < c; ) {
            var v = n[o];
            this.set(v[0], v[1]);
          }
        }
        function xv() {
          (this.__data__ = xo ? xo(null) : {}), (this.size = 0);
        }
        function Pv(n) {
          var o = this.has(n) && delete this.__data__[n];
          return (this.size -= o ? 1 : 0), o;
        }
        function Mv(n) {
          var o = this.__data__;
          if (xo) {
            var c = o[n];
            return c === p ? t : c;
          }
          return Nt.call(o, n) ? o[n] : t;
        }
        function Cv(n) {
          var o = this.__data__;
          return xo ? o[n] !== t : Nt.call(o, n);
        }
        function Ov(n, o) {
          var c = this.__data__;
          return (
            (this.size += this.has(n) ? 0 : 1),
            (c[n] = xo && o === t ? p : o),
            this
          );
        }
        (us.prototype.clear = xv),
          (us.prototype.delete = Pv),
          (us.prototype.get = Mv),
          (us.prototype.has = Cv),
          (us.prototype.set = Ov);
        function dn(n) {
          var o = -1,
            c = n == null ? 0 : n.length;
          for (this.clear(); ++o < c; ) {
            var v = n[o];
            this.set(v[0], v[1]);
          }
        }
        function Nv() {
          (this.__data__ = []), (this.size = 0);
        }
        function Rv(n) {
          var o = this.__data__,
            c = tc(o, n);
          if (c < 0) return !1;
          var v = o.length - 1;
          return c == v ? o.pop() : Wa.call(o, c, 1), --this.size, !0;
        }
        function Tv(n) {
          var o = this.__data__,
            c = tc(o, n);
          return c < 0 ? t : o[c][1];
        }
        function Uv(n) {
          return tc(this.__data__, n) > -1;
        }
        function Bv(n, o) {
          var c = this.__data__,
            v = tc(c, n);
          return v < 0 ? (++this.size, c.push([n, o])) : (c[v][1] = o), this;
        }
        (dn.prototype.clear = Nv),
          (dn.prototype.delete = Rv),
          (dn.prototype.get = Tv),
          (dn.prototype.has = Uv),
          (dn.prototype.set = Bv);
        function pn(n) {
          var o = -1,
            c = n == null ? 0 : n.length;
          for (this.clear(); ++o < c; ) {
            var v = n[o];
            this.set(v[0], v[1]);
          }
        }
        function Lv() {
          (this.size = 0),
            (this.__data__ = {
              hash: new us(),
              map: new (Io || dn)(),
              string: new us(),
            });
        }
        function qv(n) {
          var o = dc(this, n).delete(n);
          return (this.size -= o ? 1 : 0), o;
        }
        function jv(n) {
          return dc(this, n).get(n);
        }
        function $v(n) {
          return dc(this, n).has(n);
        }
        function Fv(n, o) {
          var c = dc(this, n),
            v = c.size;
          return c.set(n, o), (this.size += c.size == v ? 0 : 1), this;
        }
        (pn.prototype.clear = Lv),
          (pn.prototype.delete = qv),
          (pn.prototype.get = jv),
          (pn.prototype.has = $v),
          (pn.prototype.set = Fv);
        function hs(n) {
          var o = -1,
            c = n == null ? 0 : n.length;
          for (this.__data__ = new pn(); ++o < c; ) this.add(n[o]);
        }
        function zv(n) {
          return this.__data__.set(n, p), this;
        }
        function kv(n) {
          return this.__data__.has(n);
        }
        (hs.prototype.add = hs.prototype.push = zv), (hs.prototype.has = kv);
        function xi(n) {
          var o = (this.__data__ = new dn(n));
          this.size = o.size;
        }
        function Hv() {
          (this.__data__ = new dn()), (this.size = 0);
        }
        function Kv(n) {
          var o = this.__data__,
            c = o.delete(n);
          return (this.size = o.size), c;
        }
        function Vv(n) {
          return this.__data__.get(n);
        }
        function Gv(n) {
          return this.__data__.has(n);
        }
        function Wv(n, o) {
          var c = this.__data__;
          if (c instanceof dn) {
            var v = c.__data__;
            if (!Io || v.length < s - 1)
              return v.push([n, o]), (this.size = ++c.size), this;
            c = this.__data__ = new pn(v);
          }
          return c.set(n, o), (this.size = c.size), this;
        }
        (xi.prototype.clear = Hv),
          (xi.prototype.delete = Kv),
          (xi.prototype.get = Vv),
          (xi.prototype.has = Gv),
          (xi.prototype.set = Wv);
        function Bf(n, o) {
          var c = it(n),
            v = !c && gs(n),
            A = !c && !v && Fn(n),
            R = !c && !v && !A && Vs(n),
            H = c || v || A || R,
            Y = H ? Ou(n.length, nv) : [],
            X = Y.length;
          for (var oe in n)
            (o || Nt.call(n, oe)) &&
              !(
                H &&
                (oe == "length" ||
                  (A && (oe == "offset" || oe == "parent")) ||
                  (R &&
                    (oe == "buffer" ||
                      oe == "byteLength" ||
                      oe == "byteOffset")) ||
                  yn(oe, X))
              ) &&
              Y.push(oe);
          return Y;
        }
        function Lf(n) {
          var o = n.length;
          return o ? n[Wu(0, o - 1)] : t;
        }
        function Yv(n, o) {
          return pc(Rr(n), ls(o, 0, n.length));
        }
        function Qv(n) {
          return pc(Rr(n));
        }
        function qu(n, o, c) {
          ((c !== t && !Pi(n[o], c)) || (c === t && !(o in n))) && gn(n, o, c);
        }
        function Mo(n, o, c) {
          var v = n[o];
          (!(Nt.call(n, o) && Pi(v, c)) || (c === t && !(o in n))) &&
            gn(n, o, c);
        }
        function tc(n, o) {
          for (var c = n.length; c--; ) if (Pi(n[c][0], o)) return c;
          return -1;
        }
        function Jv(n, o, c, v) {
          return (
            Ln(n, function (A, R, H) {
              o(v, A, c(A), H);
            }),
            v
          );
        }
        function qf(n, o) {
          return n && Gi(o, cr(o), n);
        }
        function Xv(n, o) {
          return n && Gi(o, Ur(o), n);
        }
        function gn(n, o, c) {
          o == "__proto__" && Ya
            ? Ya(n, o, {
                configurable: !0,
                enumerable: !0,
                value: c,
                writable: !0,
              })
            : (n[o] = c);
        }
        function ju(n, o) {
          for (var c = -1, v = o.length, A = re(v), R = n == null; ++c < v; )
            A[c] = R ? t : wh(n, o[c]);
          return A;
        }
        function ls(n, o, c) {
          return (
            n === n &&
              (c !== t && (n = n <= c ? n : c),
              o !== t && (n = n >= o ? n : o)),
            n
          );
        }
        function li(n, o, c, v, A, R) {
          var H,
            Y = o & E,
            X = o & D,
            oe = o & S;
          if ((c && (H = A ? c(n, v, A, R) : c(n)), H !== t)) return H;
          if (!Vt(n)) return n;
          var ce = it(n);
          if (ce) {
            if (((H = $y(n)), !Y)) return Rr(n, H);
          } else {
            var pe = wr(n),
              ve = pe == te || pe == ue;
            if (Fn(n)) return cd(n, Y);
            if (pe == Ie || pe == _ || (ve && !A)) {
              if (((H = X || ve ? {} : xd(n)), !Y))
                return X ? My(n, Xv(H, n)) : Py(n, qf(H, n));
            } else {
              if (!Ut[pe]) return A ? n : {};
              H = Fy(n, pe, Y);
            }
          }
          R || (R = new xi());
          var Ue = R.get(n);
          if (Ue) return Ue;
          R.set(n, H),
            r0(n)
              ? n.forEach(function (He) {
                  H.add(li(He, o, c, He, n, R));
                })
              : e0(n) &&
                n.forEach(function (He, ft) {
                  H.set(ft, li(He, o, c, ft, n, R));
                });
          var ke = oe ? (X ? sh : nh) : X ? Ur : cr,
            ut = ce ? t : ke(n);
          return (
            ci(ut || n, function (He, ft) {
              ut && ((ft = He), (He = n[ft])),
                Mo(H, ft, li(He, o, c, ft, n, R));
            }),
            H
          );
        }
        function Zv(n) {
          var o = cr(n);
          return function (c) {
            return jf(c, n, o);
          };
        }
        function jf(n, o, c) {
          var v = c.length;
          if (n == null) return !v;
          for (n = jt(n); v--; ) {
            var A = c[v],
              R = o[A],
              H = n[A];
            if ((H === t && !(A in n)) || !R(H)) return !1;
          }
          return !0;
        }
        function $f(n, o, c) {
          if (typeof n != "function") throw new ui(u);
          return Bo(function () {
            n.apply(t, c);
          }, o);
        }
        function Co(n, o, c, v) {
          var A = -1,
            R = qa,
            H = !0,
            Y = n.length,
            X = [],
            oe = o.length;
          if (!Y) return X;
          c && (o = kt(o, Gr(c))),
            v
              ? ((R = Iu), (H = !1))
              : o.length >= s && ((R = Ao), (H = !1), (o = new hs(o)));
          e: for (; ++A < Y; ) {
            var ce = n[A],
              pe = c == null ? ce : c(ce);
            if (((ce = v || ce !== 0 ? ce : 0), H && pe === pe)) {
              for (var ve = oe; ve--; ) if (o[ve] === pe) continue e;
              X.push(ce);
            } else R(o, pe, v) || X.push(ce);
          }
          return X;
        }
        var Ln = dd(Vi),
          Ff = dd(Fu, !0);
        function ey(n, o) {
          var c = !0;
          return (
            Ln(n, function (v, A, R) {
              return (c = !!o(v, A, R)), c;
            }),
            c
          );
        }
        function rc(n, o, c) {
          for (var v = -1, A = n.length; ++v < A; ) {
            var R = n[v],
              H = o(R);
            if (H != null && (Y === t ? H === H && !Yr(H) : c(H, Y)))
              var Y = H,
                X = R;
          }
          return X;
        }
        function ty(n, o, c, v) {
          var A = n.length;
          for (
            c = at(c),
              c < 0 && (c = -c > A ? 0 : A + c),
              v = v === t || v > A ? A : at(v),
              v < 0 && (v += A),
              v = c > v ? 0 : n0(v);
            c < v;

          )
            n[c++] = o;
          return n;
        }
        function zf(n, o) {
          var c = [];
          return (
            Ln(n, function (v, A, R) {
              o(v, A, R) && c.push(v);
            }),
            c
          );
        }
        function lr(n, o, c, v, A) {
          var R = -1,
            H = n.length;
          for (c || (c = ky), A || (A = []); ++R < H; ) {
            var Y = n[R];
            o > 0 && c(Y)
              ? o > 1
                ? lr(Y, o - 1, c, v, A)
                : Tn(A, Y)
              : v || (A[A.length] = Y);
          }
          return A;
        }
        var $u = pd(),
          kf = pd(!0);
        function Vi(n, o) {
          return n && $u(n, o, cr);
        }
        function Fu(n, o) {
          return n && kf(n, o, cr);
        }
        function ic(n, o) {
          return Rn(o, function (c) {
            return wn(n[c]);
          });
        }
        function fs(n, o) {
          o = jn(o, n);
          for (var c = 0, v = o.length; n != null && c < v; ) n = n[Wi(o[c++])];
          return c && c == v ? n : t;
        }
        function Hf(n, o, c) {
          var v = o(n);
          return it(n) ? v : Tn(v, c(n));
        }
        function Ir(n) {
          return n == null
            ? n === t
              ? Ve
              : Ce
            : cs && cs in jt(n)
            ? Ly(n)
            : Qy(n);
        }
        function zu(n, o) {
          return n > o;
        }
        function ry(n, o) {
          return n != null && Nt.call(n, o);
        }
        function iy(n, o) {
          return n != null && o in jt(n);
        }
        function ny(n, o, c) {
          return n >= yr(o, c) && n < ir(o, c);
        }
        function ku(n, o, c) {
          for (
            var v = c ? Iu : qa,
              A = n[0].length,
              R = n.length,
              H = R,
              Y = re(R),
              X = 1 / 0,
              oe = [];
            H--;

          ) {
            var ce = n[H];
            H && o && (ce = kt(ce, Gr(o))),
              (X = yr(ce.length, X)),
              (Y[H] =
                !c && (o || (A >= 120 && ce.length >= 120))
                  ? new hs(H && ce)
                  : t);
          }
          ce = n[0];
          var pe = -1,
            ve = Y[0];
          e: for (; ++pe < A && oe.length < X; ) {
            var Ue = ce[pe],
              ke = o ? o(Ue) : Ue;
            if (
              ((Ue = c || Ue !== 0 ? Ue : 0), !(ve ? Ao(ve, ke) : v(oe, ke, c)))
            ) {
              for (H = R; --H; ) {
                var ut = Y[H];
                if (!(ut ? Ao(ut, ke) : v(n[H], ke, c))) continue e;
              }
              ve && ve.push(ke), oe.push(Ue);
            }
          }
          return oe;
        }
        function sy(n, o, c, v) {
          return (
            Vi(n, function (A, R, H) {
              o(v, c(A), R, H);
            }),
            v
          );
        }
        function Oo(n, o, c) {
          (o = jn(o, n)), (n = Od(n, o));
          var v = n == null ? n : n[Wi(di(o))];
          return v == null ? t : ar(v, n, c);
        }
        function Kf(n) {
          return Gt(n) && Ir(n) == _;
        }
        function oy(n) {
          return Gt(n) && Ir(n) == Be;
        }
        function ay(n) {
          return Gt(n) && Ir(n) == k;
        }
        function No(n, o, c, v, A) {
          return n === o
            ? !0
            : n == null || o == null || (!Gt(n) && !Gt(o))
            ? n !== n && o !== o
            : cy(n, o, c, v, No, A);
        }
        function cy(n, o, c, v, A, R) {
          var H = it(n),
            Y = it(o),
            X = H ? Z : wr(n),
            oe = Y ? Z : wr(o);
          (X = X == _ ? Ie : X), (oe = oe == _ ? Ie : oe);
          var ce = X == Ie,
            pe = oe == Ie,
            ve = X == oe;
          if (ve && Fn(n)) {
            if (!Fn(o)) return !1;
            (H = !0), (ce = !1);
          }
          if (ve && !ce)
            return (
              R || (R = new xi()),
              H || Vs(n) ? Sd(n, o, c, v, A, R) : Uy(n, o, X, c, v, A, R)
            );
          if (!(c & M)) {
            var Ue = ce && Nt.call(n, "__wrapped__"),
              ke = pe && Nt.call(o, "__wrapped__");
            if (Ue || ke) {
              var ut = Ue ? n.value() : n,
                He = ke ? o.value() : o;
              return R || (R = new xi()), A(ut, He, c, v, R);
            }
          }
          return ve ? (R || (R = new xi()), By(n, o, c, v, A, R)) : !1;
        }
        function uy(n) {
          return Gt(n) && wr(n) == ae;
        }
        function Hu(n, o, c, v) {
          var A = c.length,
            R = A,
            H = !v;
          if (n == null) return !R;
          for (n = jt(n); A--; ) {
            var Y = c[A];
            if (H && Y[2] ? Y[1] !== n[Y[0]] : !(Y[0] in n)) return !1;
          }
          for (; ++A < R; ) {
            Y = c[A];
            var X = Y[0],
              oe = n[X],
              ce = Y[1];
            if (H && Y[2]) {
              if (oe === t && !(X in n)) return !1;
            } else {
              var pe = new xi();
              if (v) var ve = v(oe, ce, X, n, o, pe);
              if (!(ve === t ? No(ce, oe, M | W, v, pe) : ve)) return !1;
            }
          }
          return !0;
        }
        function Vf(n) {
          if (!Vt(n) || Ky(n)) return !1;
          var o = wn(n) ? uv : ni;
          return o.test(ps(n));
        }
        function hy(n) {
          return Gt(n) && Ir(n) == xe;
        }
        function ly(n) {
          return Gt(n) && wr(n) == Le;
        }
        function fy(n) {
          return Gt(n) && bc(n.length) && !!Bt[Ir(n)];
        }
        function Gf(n) {
          return typeof n == "function"
            ? n
            : n == null
            ? Br
            : typeof n == "object"
            ? it(n)
              ? Qf(n[0], n[1])
              : Yf(n)
            : g0(n);
        }
        function Ku(n) {
          if (!Uo(n)) return gv(n);
          var o = [];
          for (var c in jt(n)) Nt.call(n, c) && c != "constructor" && o.push(c);
          return o;
        }
        function dy(n) {
          if (!Vt(n)) return Yy(n);
          var o = Uo(n),
            c = [];
          for (var v in n)
            (v == "constructor" && (o || !Nt.call(n, v))) || c.push(v);
          return c;
        }
        function Vu(n, o) {
          return n < o;
        }
        function Wf(n, o) {
          var c = -1,
            v = Tr(n) ? re(n.length) : [];
          return (
            Ln(n, function (A, R, H) {
              v[++c] = o(A, R, H);
            }),
            v
          );
        }
        function Yf(n) {
          var o = ah(n);
          return o.length == 1 && o[0][2]
            ? Md(o[0][0], o[0][1])
            : function (c) {
                return c === n || Hu(c, n, o);
              };
        }
        function Qf(n, o) {
          return uh(n) && Pd(o)
            ? Md(Wi(n), o)
            : function (c) {
                var v = wh(c, n);
                return v === t && v === o ? bh(c, n) : No(o, v, M | W);
              };
        }
        function nc(n, o, c, v, A) {
          n !== o &&
            $u(
              o,
              function (R, H) {
                if ((A || (A = new xi()), Vt(R))) py(n, o, H, c, nc, v, A);
                else {
                  var Y = v ? v(lh(n, H), R, H + "", n, o, A) : t;
                  Y === t && (Y = R), qu(n, H, Y);
                }
              },
              Ur
            );
        }
        function py(n, o, c, v, A, R, H) {
          var Y = lh(n, c),
            X = lh(o, c),
            oe = H.get(X);
          if (oe) {
            qu(n, c, oe);
            return;
          }
          var ce = R ? R(Y, X, c + "", n, o, H) : t,
            pe = ce === t;
          if (pe) {
            var ve = it(X),
              Ue = !ve && Fn(X),
              ke = !ve && !Ue && Vs(X);
            (ce = X),
              ve || Ue || ke
                ? it(Y)
                  ? (ce = Y)
                  : Qt(Y)
                  ? (ce = Rr(Y))
                  : Ue
                  ? ((pe = !1), (ce = cd(X, !0)))
                  : ke
                  ? ((pe = !1), (ce = ud(X, !0)))
                  : (ce = [])
                : Lo(X) || gs(X)
                ? ((ce = Y),
                  gs(Y) ? (ce = s0(Y)) : (!Vt(Y) || wn(Y)) && (ce = xd(X)))
                : (pe = !1);
          }
          pe && (H.set(X, ce), A(ce, X, v, R, H), H.delete(X)), qu(n, c, ce);
        }
        function Jf(n, o) {
          var c = n.length;
          if (c) return (o += o < 0 ? c : 0), yn(o, c) ? n[o] : t;
        }
        function Xf(n, o, c) {
          o.length
            ? (o = kt(o, function (R) {
                return it(R)
                  ? function (H) {
                      return fs(H, R.length === 1 ? R[0] : R);
                    }
                  : R;
              }))
            : (o = [Br]);
          var v = -1;
          o = kt(o, Gr($e()));
          var A = Wf(n, function (R, H, Y) {
            var X = kt(o, function (oe) {
              return oe(R);
            });
            return { criteria: X, index: ++v, value: R };
          });
          return Fm(A, function (R, H) {
            return xy(R, H, c);
          });
        }
        function gy(n, o) {
          return Zf(n, o, function (c, v) {
            return bh(n, v);
          });
        }
        function Zf(n, o, c) {
          for (var v = -1, A = o.length, R = {}; ++v < A; ) {
            var H = o[v],
              Y = fs(n, H);
            c(Y, H) && Ro(R, jn(H, n), Y);
          }
          return R;
        }
        function my(n) {
          return function (o) {
            return fs(o, n);
          };
        }
        function Gu(n, o, c, v) {
          var A = v ? $m : Us,
            R = -1,
            H = o.length,
            Y = n;
          for (n === o && (o = Rr(o)), c && (Y = kt(n, Gr(c))); ++R < H; )
            for (
              var X = 0, oe = o[R], ce = c ? c(oe) : oe;
              (X = A(Y, ce, X, v)) > -1;

            )
              Y !== n && Wa.call(Y, X, 1), Wa.call(n, X, 1);
          return n;
        }
        function ed(n, o) {
          for (var c = n ? o.length : 0, v = c - 1; c--; ) {
            var A = o[c];
            if (c == v || A !== R) {
              var R = A;
              yn(A) ? Wa.call(n, A, 1) : Ju(n, A);
            }
          }
          return n;
        }
        function Wu(n, o) {
          return n + Ja(Tf() * (o - n + 1));
        }
        function vy(n, o, c, v) {
          for (var A = -1, R = ir(Qa((o - n) / (c || 1)), 0), H = re(R); R--; )
            (H[v ? R : ++A] = n), (n += c);
          return H;
        }
        function Yu(n, o) {
          var c = "";
          if (!n || o < 1 || o > O) return c;
          do o % 2 && (c += n), (o = Ja(o / 2)), o && (n += n);
          while (o);
          return c;
        }
        function ht(n, o) {
          return fh(Cd(n, o, Br), n + "");
        }
        function yy(n) {
          return Lf(Gs(n));
        }
        function wy(n, o) {
          var c = Gs(n);
          return pc(c, ls(o, 0, c.length));
        }
        function Ro(n, o, c, v) {
          if (!Vt(n)) return n;
          o = jn(o, n);
          for (
            var A = -1, R = o.length, H = R - 1, Y = n;
            Y != null && ++A < R;

          ) {
            var X = Wi(o[A]),
              oe = c;
            if (X === "__proto__" || X === "constructor" || X === "prototype")
              return n;
            if (A != H) {
              var ce = Y[X];
              (oe = v ? v(ce, X, Y) : t),
                oe === t && (oe = Vt(ce) ? ce : yn(o[A + 1]) ? [] : {});
            }
            Mo(Y, X, oe), (Y = Y[X]);
          }
          return n;
        }
        var td = Xa
            ? function (n, o) {
                return Xa.set(n, o), n;
              }
            : Br,
          by = Ya
            ? function (n, o) {
                return Ya(n, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: Eh(o),
                  writable: !0,
                });
              }
            : Br;
        function _y(n) {
          return pc(Gs(n));
        }
        function fi(n, o, c) {
          var v = -1,
            A = n.length;
          o < 0 && (o = -o > A ? 0 : A + o),
            (c = c > A ? A : c),
            c < 0 && (c += A),
            (A = o > c ? 0 : (c - o) >>> 0),
            (o >>>= 0);
          for (var R = re(A); ++v < A; ) R[v] = n[v + o];
          return R;
        }
        function Ey(n, o) {
          var c;
          return (
            Ln(n, function (v, A, R) {
              return (c = o(v, A, R)), !c;
            }),
            !!c
          );
        }
        function sc(n, o, c) {
          var v = 0,
            A = n == null ? v : n.length;
          if (typeof o == "number" && o === o && A <= ie) {
            for (; v < A; ) {
              var R = (v + A) >>> 1,
                H = n[R];
              H !== null && !Yr(H) && (c ? H <= o : H < o)
                ? (v = R + 1)
                : (A = R);
            }
            return A;
          }
          return Qu(n, o, Br, c);
        }
        function Qu(n, o, c, v) {
          var A = 0,
            R = n == null ? 0 : n.length;
          if (R === 0) return 0;
          o = c(o);
          for (
            var H = o !== o, Y = o === null, X = Yr(o), oe = o === t;
            A < R;

          ) {
            var ce = Ja((A + R) / 2),
              pe = c(n[ce]),
              ve = pe !== t,
              Ue = pe === null,
              ke = pe === pe,
              ut = Yr(pe);
            if (H) var He = v || ke;
            else
              oe
                ? (He = ke && (v || ve))
                : Y
                ? (He = ke && ve && (v || !Ue))
                : X
                ? (He = ke && ve && !Ue && (v || !ut))
                : Ue || ut
                ? (He = !1)
                : (He = v ? pe <= o : pe < o);
            He ? (A = ce + 1) : (R = ce);
          }
          return yr(R, N);
        }
        function rd(n, o) {
          for (var c = -1, v = n.length, A = 0, R = []; ++c < v; ) {
            var H = n[c],
              Y = o ? o(H) : H;
            if (!c || !Pi(Y, X)) {
              var X = Y;
              R[A++] = H === 0 ? 0 : H;
            }
          }
          return R;
        }
        function id(n) {
          return typeof n == "number" ? n : Yr(n) ? x : +n;
        }
        function Wr(n) {
          if (typeof n == "string") return n;
          if (it(n)) return kt(n, Wr) + "";
          if (Yr(n)) return Uf ? Uf.call(n) : "";
          var o = n + "";
          return o == "0" && 1 / n == -P ? "-0" : o;
        }
        function qn(n, o, c) {
          var v = -1,
            A = qa,
            R = n.length,
            H = !0,
            Y = [],
            X = Y;
          if (c) (H = !1), (A = Iu);
          else if (R >= s) {
            var oe = o ? null : Ry(n);
            if (oe) return $a(oe);
            (H = !1), (A = Ao), (X = new hs());
          } else X = o ? [] : Y;
          e: for (; ++v < R; ) {
            var ce = n[v],
              pe = o ? o(ce) : ce;
            if (((ce = c || ce !== 0 ? ce : 0), H && pe === pe)) {
              for (var ve = X.length; ve--; ) if (X[ve] === pe) continue e;
              o && X.push(pe), Y.push(ce);
            } else A(X, pe, c) || (X !== Y && X.push(pe), Y.push(ce));
          }
          return Y;
        }
        function Ju(n, o) {
          return (
            (o = jn(o, n)), (n = Od(n, o)), n == null || delete n[Wi(di(o))]
          );
        }
        function nd(n, o, c, v) {
          return Ro(n, o, c(fs(n, o)), v);
        }
        function oc(n, o, c, v) {
          for (
            var A = n.length, R = v ? A : -1;
            (v ? R-- : ++R < A) && o(n[R], R, n);

          );
          return c
            ? fi(n, v ? 0 : R, v ? R + 1 : A)
            : fi(n, v ? R + 1 : 0, v ? A : R);
        }
        function sd(n, o) {
          var c = n;
          return (
            c instanceof gt && (c = c.value()),
            Du(
              o,
              function (v, A) {
                return A.func.apply(A.thisArg, Tn([v], A.args));
              },
              c
            )
          );
        }
        function Xu(n, o, c) {
          var v = n.length;
          if (v < 2) return v ? qn(n[0]) : [];
          for (var A = -1, R = re(v); ++A < v; )
            for (var H = n[A], Y = -1; ++Y < v; )
              Y != A && (R[A] = Co(R[A] || H, n[Y], o, c));
          return qn(lr(R, 1), o, c);
        }
        function od(n, o, c) {
          for (var v = -1, A = n.length, R = o.length, H = {}; ++v < A; ) {
            var Y = v < R ? o[v] : t;
            c(H, n[v], Y);
          }
          return H;
        }
        function Zu(n) {
          return Qt(n) ? n : [];
        }
        function eh(n) {
          return typeof n == "function" ? n : Br;
        }
        function jn(n, o) {
          return it(n) ? n : uh(n, o) ? [n] : Ud(xt(n));
        }
        var Ay = ht;
        function $n(n, o, c) {
          var v = n.length;
          return (c = c === t ? v : c), !o && c >= v ? n : fi(n, o, c);
        }
        var ad =
          hv ||
          function (n) {
            return wt.clearTimeout(n);
          };
        function cd(n, o) {
          if (o) return n.slice();
          var c = n.length,
            v = Mf ? Mf(c) : new n.constructor(c);
          return n.copy(v), v;
        }
        function th(n) {
          var o = new n.constructor(n.byteLength);
          return new Va(o).set(new Va(n)), o;
        }
        function Sy(n, o) {
          var c = o ? th(n.buffer) : n.buffer;
          return new n.constructor(c, n.byteOffset, n.byteLength);
        }
        function Iy(n) {
          var o = new n.constructor(n.source, lt.exec(n));
          return (o.lastIndex = n.lastIndex), o;
        }
        function Dy(n) {
          return Po ? jt(Po.call(n)) : {};
        }
        function ud(n, o) {
          var c = o ? th(n.buffer) : n.buffer;
          return new n.constructor(c, n.byteOffset, n.length);
        }
        function hd(n, o) {
          if (n !== o) {
            var c = n !== t,
              v = n === null,
              A = n === n,
              R = Yr(n),
              H = o !== t,
              Y = o === null,
              X = o === o,
              oe = Yr(o);
            if (
              (!Y && !oe && !R && n > o) ||
              (R && H && X && !Y && !oe) ||
              (v && H && X) ||
              (!c && X) ||
              !A
            )
              return 1;
            if (
              (!v && !R && !oe && n < o) ||
              (oe && c && A && !v && !R) ||
              (Y && c && A) ||
              (!H && A) ||
              !X
            )
              return -1;
          }
          return 0;
        }
        function xy(n, o, c) {
          for (
            var v = -1,
              A = n.criteria,
              R = o.criteria,
              H = A.length,
              Y = c.length;
            ++v < H;

          ) {
            var X = hd(A[v], R[v]);
            if (X) {
              if (v >= Y) return X;
              var oe = c[v];
              return X * (oe == "desc" ? -1 : 1);
            }
          }
          return n.index - o.index;
        }
        function ld(n, o, c, v) {
          for (
            var A = -1,
              R = n.length,
              H = c.length,
              Y = -1,
              X = o.length,
              oe = ir(R - H, 0),
              ce = re(X + oe),
              pe = !v;
            ++Y < X;

          )
            ce[Y] = o[Y];
          for (; ++A < H; ) (pe || A < R) && (ce[c[A]] = n[A]);
          for (; oe--; ) ce[Y++] = n[A++];
          return ce;
        }
        function fd(n, o, c, v) {
          for (
            var A = -1,
              R = n.length,
              H = -1,
              Y = c.length,
              X = -1,
              oe = o.length,
              ce = ir(R - Y, 0),
              pe = re(ce + oe),
              ve = !v;
            ++A < ce;

          )
            pe[A] = n[A];
          for (var Ue = A; ++X < oe; ) pe[Ue + X] = o[X];
          for (; ++H < Y; ) (ve || A < R) && (pe[Ue + c[H]] = n[A++]);
          return pe;
        }
        function Rr(n, o) {
          var c = -1,
            v = n.length;
          for (o || (o = re(v)); ++c < v; ) o[c] = n[c];
          return o;
        }
        function Gi(n, o, c, v) {
          var A = !c;
          c || (c = {});
          for (var R = -1, H = o.length; ++R < H; ) {
            var Y = o[R],
              X = v ? v(c[Y], n[Y], Y, c, n) : t;
            X === t && (X = n[Y]), A ? gn(c, Y, X) : Mo(c, Y, X);
          }
          return c;
        }
        function Py(n, o) {
          return Gi(n, ch(n), o);
        }
        function My(n, o) {
          return Gi(n, Id(n), o);
        }
        function ac(n, o) {
          return function (c, v) {
            var A = it(c) ? Tm : Jv,
              R = o ? o() : {};
            return A(c, n, $e(v, 2), R);
          };
        }
        function ks(n) {
          return ht(function (o, c) {
            var v = -1,
              A = c.length,
              R = A > 1 ? c[A - 1] : t,
              H = A > 2 ? c[2] : t;
            for (
              R = n.length > 3 && typeof R == "function" ? (A--, R) : t,
                H && Dr(c[0], c[1], H) && ((R = A < 3 ? t : R), (A = 1)),
                o = jt(o);
              ++v < A;

            ) {
              var Y = c[v];
              Y && n(o, Y, v, R);
            }
            return o;
          });
        }
        function dd(n, o) {
          return function (c, v) {
            if (c == null) return c;
            if (!Tr(c)) return n(c, v);
            for (
              var A = c.length, R = o ? A : -1, H = jt(c);
              (o ? R-- : ++R < A) && v(H[R], R, H) !== !1;

            );
            return c;
          };
        }
        function pd(n) {
          return function (o, c, v) {
            for (var A = -1, R = jt(o), H = v(o), Y = H.length; Y--; ) {
              var X = H[n ? Y : ++A];
              if (c(R[X], X, R) === !1) break;
            }
            return o;
          };
        }
        function Cy(n, o, c) {
          var v = o & G,
            A = To(n);
          function R() {
            var H = this && this !== wt && this instanceof R ? A : n;
            return H.apply(v ? c : this, arguments);
          }
          return R;
        }
        function gd(n) {
          return function (o) {
            o = xt(o);
            var c = Bs(o) ? Di(o) : t,
              v = c ? c[0] : o.charAt(0),
              A = c ? $n(c, 1).join("") : o.slice(1);
            return v[n]() + A;
          };
        }
        function Hs(n) {
          return function (o) {
            return Du(d0(f0(o).replace(_o, "")), n, "");
          };
        }
        function To(n) {
          return function () {
            var o = arguments;
            switch (o.length) {
              case 0:
                return new n();
              case 1:
                return new n(o[0]);
              case 2:
                return new n(o[0], o[1]);
              case 3:
                return new n(o[0], o[1], o[2]);
              case 4:
                return new n(o[0], o[1], o[2], o[3]);
              case 5:
                return new n(o[0], o[1], o[2], o[3], o[4]);
              case 6:
                return new n(o[0], o[1], o[2], o[3], o[4], o[5]);
              case 7:
                return new n(o[0], o[1], o[2], o[3], o[4], o[5], o[6]);
            }
            var c = zs(n.prototype),
              v = n.apply(c, o);
            return Vt(v) ? v : c;
          };
        }
        function Oy(n, o, c) {
          var v = To(n);
          function A() {
            for (var R = arguments.length, H = re(R), Y = R, X = Ks(A); Y--; )
              H[Y] = arguments[Y];
            var oe = R < 3 && H[0] !== X && H[R - 1] !== X ? [] : Un(H, X);
            if (((R -= oe.length), R < c))
              return bd(n, o, cc, A.placeholder, t, H, oe, t, t, c - R);
            var ce = this && this !== wt && this instanceof A ? v : n;
            return ar(ce, this, H);
          }
          return A;
        }
        function md(n) {
          return function (o, c, v) {
            var A = jt(o);
            if (!Tr(o)) {
              var R = $e(c, 3);
              (o = cr(o)),
                (c = function (Y) {
                  return R(A[Y], Y, A);
                });
            }
            var H = n(o, c, v);
            return H > -1 ? A[R ? o[H] : H] : t;
          };
        }
        function vd(n) {
          return vn(function (o) {
            var c = o.length,
              v = c,
              A = hi.prototype.thru;
            for (n && o.reverse(); v--; ) {
              var R = o[v];
              if (typeof R != "function") throw new ui(u);
              if (A && !H && fc(R) == "wrapper") var H = new hi([], !0);
            }
            for (v = H ? v : c; ++v < c; ) {
              R = o[v];
              var Y = fc(R),
                X = Y == "wrapper" ? oh(R) : t;
              X &&
              hh(X[0]) &&
              X[1] == (y | V | F | T) &&
              !X[4].length &&
              X[9] == 1
                ? (H = H[fc(X[0])].apply(H, X[3]))
                : (H = R.length == 1 && hh(R) ? H[Y]() : H.thru(R));
            }
            return function () {
              var oe = arguments,
                ce = oe[0];
              if (H && oe.length == 1 && it(ce)) return H.plant(ce).value();
              for (var pe = 0, ve = c ? o[pe].apply(this, oe) : ce; ++pe < c; )
                ve = o[pe].call(this, ve);
              return ve;
            };
          });
        }
        function cc(n, o, c, v, A, R, H, Y, X, oe) {
          var ce = o & y,
            pe = o & G,
            ve = o & ee,
            Ue = o & (V | q),
            ke = o & ne,
            ut = ve ? t : To(n);
          function He() {
            for (var ft = arguments.length, bt = re(ft), Qr = ft; Qr--; )
              bt[Qr] = arguments[Qr];
            if (Ue)
              var xr = Ks(He),
                Jr = km(bt, xr);
            if (
              (v && (bt = ld(bt, v, A, Ue)),
              R && (bt = fd(bt, R, H, Ue)),
              (ft -= Jr),
              Ue && ft < oe)
            ) {
              var Jt = Un(bt, xr);
              return bd(n, o, cc, He.placeholder, c, bt, Jt, Y, X, oe - ft);
            }
            var Mi = pe ? c : this,
              _n = ve ? Mi[n] : n;
            return (
              (ft = bt.length),
              Y ? (bt = Jy(bt, Y)) : ke && ft > 1 && bt.reverse(),
              ce && X < ft && (bt.length = X),
              this && this !== wt && this instanceof He && (_n = ut || To(_n)),
              _n.apply(Mi, bt)
            );
          }
          return He;
        }
        function yd(n, o) {
          return function (c, v) {
            return sy(c, n, o(v), {});
          };
        }
        function uc(n, o) {
          return function (c, v) {
            var A;
            if (c === t && v === t) return o;
            if ((c !== t && (A = c), v !== t)) {
              if (A === t) return v;
              typeof c == "string" || typeof v == "string"
                ? ((c = Wr(c)), (v = Wr(v)))
                : ((c = id(c)), (v = id(v))),
                (A = n(c, v));
            }
            return A;
          };
        }
        function rh(n) {
          return vn(function (o) {
            return (
              (o = kt(o, Gr($e()))),
              ht(function (c) {
                var v = this;
                return n(o, function (A) {
                  return ar(A, v, c);
                });
              })
            );
          });
        }
        function hc(n, o) {
          o = o === t ? " " : Wr(o);
          var c = o.length;
          if (c < 2) return c ? Yu(o, n) : o;
          var v = Yu(o, Qa(n / Ls(o)));
          return Bs(o) ? $n(Di(v), 0, n).join("") : v.slice(0, n);
        }
        function Ny(n, o, c, v) {
          var A = o & G,
            R = To(n);
          function H() {
            for (
              var Y = -1,
                X = arguments.length,
                oe = -1,
                ce = v.length,
                pe = re(ce + X),
                ve = this && this !== wt && this instanceof H ? R : n;
              ++oe < ce;

            )
              pe[oe] = v[oe];
            for (; X--; ) pe[oe++] = arguments[++Y];
            return ar(ve, A ? c : this, pe);
          }
          return H;
        }
        function wd(n) {
          return function (o, c, v) {
            return (
              v && typeof v != "number" && Dr(o, c, v) && (c = v = t),
              (o = bn(o)),
              c === t ? ((c = o), (o = 0)) : (c = bn(c)),
              (v = v === t ? (o < c ? 1 : -1) : bn(v)),
              vy(o, c, v, n)
            );
          };
        }
        function lc(n) {
          return function (o, c) {
            return (
              (typeof o == "string" && typeof c == "string") ||
                ((o = pi(o)), (c = pi(c))),
              n(o, c)
            );
          };
        }
        function bd(n, o, c, v, A, R, H, Y, X, oe) {
          var ce = o & V,
            pe = ce ? H : t,
            ve = ce ? t : H,
            Ue = ce ? R : t,
            ke = ce ? t : R;
          (o |= ce ? F : z), (o &= ~(ce ? z : F)), o & K || (o &= ~(G | ee));
          var ut = [n, o, A, Ue, pe, ke, ve, Y, X, oe],
            He = c.apply(t, ut);
          return hh(n) && Nd(He, ut), (He.placeholder = v), Rd(He, n, o);
        }
        function ih(n) {
          var o = rr[n];
          return function (c, v) {
            if (
              ((c = pi(c)), (v = v == null ? 0 : yr(at(v), 292)), v && Rf(c))
            ) {
              var A = (xt(c) + "e").split("e"),
                R = o(A[0] + "e" + (+A[1] + v));
              return (
                (A = (xt(R) + "e").split("e")), +(A[0] + "e" + (+A[1] - v))
              );
            }
            return o(c);
          };
        }
        var Ry =
          $s && 1 / $a(new $s([, -0]))[1] == P
            ? function (n) {
                return new $s(n);
              }
            : Ih;
        function _d(n) {
          return function (o) {
            var c = wr(o);
            return c == ae ? Ru(o) : c == Le ? Qm(o) : zm(o, n(o));
          };
        }
        function mn(n, o, c, v, A, R, H, Y) {
          var X = o & ee;
          if (!X && typeof n != "function") throw new ui(u);
          var oe = v ? v.length : 0;
          if (
            (oe || ((o &= ~(F | z)), (v = A = t)),
            (H = H === t ? H : ir(at(H), 0)),
            (Y = Y === t ? Y : at(Y)),
            (oe -= A ? A.length : 0),
            o & z)
          ) {
            var ce = v,
              pe = A;
            v = A = t;
          }
          var ve = X ? t : oh(n),
            Ue = [n, o, c, v, A, ce, pe, R, H, Y];
          if (
            (ve && Wy(Ue, ve),
            (n = Ue[0]),
            (o = Ue[1]),
            (c = Ue[2]),
            (v = Ue[3]),
            (A = Ue[4]),
            (Y = Ue[9] = Ue[9] === t ? (X ? 0 : n.length) : ir(Ue[9] - oe, 0)),
            !Y && o & (V | q) && (o &= ~(V | q)),
            !o || o == G)
          )
            var ke = Cy(n, o, c);
          else
            o == V || o == q
              ? (ke = Oy(n, o, Y))
              : (o == F || o == (G | F)) && !A.length
              ? (ke = Ny(n, o, c, v))
              : (ke = cc.apply(t, Ue));
          var ut = ve ? td : Nd;
          return Rd(ut(ke, Ue), n, o);
        }
        function Ed(n, o, c, v) {
          return n === t || (Pi(n, js[c]) && !Nt.call(v, c)) ? o : n;
        }
        function Ad(n, o, c, v, A, R) {
          return (
            Vt(n) && Vt(o) && (R.set(o, n), nc(n, o, t, Ad, R), R.delete(o)), n
          );
        }
        function Ty(n) {
          return Lo(n) ? t : n;
        }
        function Sd(n, o, c, v, A, R) {
          var H = c & M,
            Y = n.length,
            X = o.length;
          if (Y != X && !(H && X > Y)) return !1;
          var oe = R.get(n),
            ce = R.get(o);
          if (oe && ce) return oe == o && ce == n;
          var pe = -1,
            ve = !0,
            Ue = c & W ? new hs() : t;
          for (R.set(n, o), R.set(o, n); ++pe < Y; ) {
            var ke = n[pe],
              ut = o[pe];
            if (v) var He = H ? v(ut, ke, pe, o, n, R) : v(ke, ut, pe, n, o, R);
            if (He !== t) {
              if (He) continue;
              ve = !1;
              break;
            }
            if (Ue) {
              if (
                !xu(o, function (ft, bt) {
                  if (!Ao(Ue, bt) && (ke === ft || A(ke, ft, c, v, R)))
                    return Ue.push(bt);
                })
              ) {
                ve = !1;
                break;
              }
            } else if (!(ke === ut || A(ke, ut, c, v, R))) {
              ve = !1;
              break;
            }
          }
          return R.delete(n), R.delete(o), ve;
        }
        function Uy(n, o, c, v, A, R, H) {
          switch (c) {
            case be:
              if (n.byteLength != o.byteLength || n.byteOffset != o.byteOffset)
                return !1;
              (n = n.buffer), (o = o.buffer);
            case Be:
              return !(
                n.byteLength != o.byteLength || !R(new Va(n), new Va(o))
              );
            case j:
            case k:
            case Pe:
              return Pi(+n, +o);
            case B:
              return n.name == o.name && n.message == o.message;
            case xe:
            case _e:
              return n == o + "";
            case ae:
              var Y = Ru;
            case Le:
              var X = v & M;
              if ((Y || (Y = $a), n.size != o.size && !X)) return !1;
              var oe = H.get(n);
              if (oe) return oe == o;
              (v |= W), H.set(n, o);
              var ce = Sd(Y(n), Y(o), v, A, R, H);
              return H.delete(n), ce;
            case Ee:
              if (Po) return Po.call(n) == Po.call(o);
          }
          return !1;
        }
        function By(n, o, c, v, A, R) {
          var H = c & M,
            Y = nh(n),
            X = Y.length,
            oe = nh(o),
            ce = oe.length;
          if (X != ce && !H) return !1;
          for (var pe = X; pe--; ) {
            var ve = Y[pe];
            if (!(H ? ve in o : Nt.call(o, ve))) return !1;
          }
          var Ue = R.get(n),
            ke = R.get(o);
          if (Ue && ke) return Ue == o && ke == n;
          var ut = !0;
          R.set(n, o), R.set(o, n);
          for (var He = H; ++pe < X; ) {
            ve = Y[pe];
            var ft = n[ve],
              bt = o[ve];
            if (v) var Qr = H ? v(bt, ft, ve, o, n, R) : v(ft, bt, ve, n, o, R);
            if (!(Qr === t ? ft === bt || A(ft, bt, c, v, R) : Qr)) {
              ut = !1;
              break;
            }
            He || (He = ve == "constructor");
          }
          if (ut && !He) {
            var xr = n.constructor,
              Jr = o.constructor;
            xr != Jr &&
              "constructor" in n &&
              "constructor" in o &&
              !(
                typeof xr == "function" &&
                xr instanceof xr &&
                typeof Jr == "function" &&
                Jr instanceof Jr
              ) &&
              (ut = !1);
          }
          return R.delete(n), R.delete(o), ut;
        }
        function vn(n) {
          return fh(Cd(n, t, jd), n + "");
        }
        function nh(n) {
          return Hf(n, cr, ch);
        }
        function sh(n) {
          return Hf(n, Ur, Id);
        }
        var oh = Xa
          ? function (n) {
              return Xa.get(n);
            }
          : Ih;
        function fc(n) {
          for (
            var o = n.name + "", c = Fs[o], v = Nt.call(Fs, o) ? c.length : 0;
            v--;

          ) {
            var A = c[v],
              R = A.func;
            if (R == null || R == n) return A.name;
          }
          return o;
        }
        function Ks(n) {
          var o = Nt.call(C, "placeholder") ? C : n;
          return o.placeholder;
        }
        function $e() {
          var n = C.iteratee || Ah;
          return (
            (n = n === Ah ? Gf : n),
            arguments.length ? n(arguments[0], arguments[1]) : n
          );
        }
        function dc(n, o) {
          var c = n.__data__;
          return Hy(o) ? c[typeof o == "string" ? "string" : "hash"] : c.map;
        }
        function ah(n) {
          for (var o = cr(n), c = o.length; c--; ) {
            var v = o[c],
              A = n[v];
            o[c] = [v, A, Pd(A)];
          }
          return o;
        }
        function ds(n, o) {
          var c = Gm(n, o);
          return Vf(c) ? c : t;
        }
        function Ly(n) {
          var o = Nt.call(n, cs),
            c = n[cs];
          try {
            n[cs] = t;
            var v = !0;
          } catch {}
          var A = Ha.call(n);
          return v && (o ? (n[cs] = c) : delete n[cs]), A;
        }
        var ch = Uu
            ? function (n) {
                return n == null
                  ? []
                  : ((n = jt(n)),
                    Rn(Uu(n), function (o) {
                      return Of.call(n, o);
                    }));
              }
            : Dh,
          Id = Uu
            ? function (n) {
                for (var o = []; n; ) Tn(o, ch(n)), (n = Ga(n));
                return o;
              }
            : Dh,
          wr = Ir;
        ((Bu && wr(new Bu(new ArrayBuffer(1))) != be) ||
          (Io && wr(new Io()) != ae) ||
          (Lu && wr(Lu.resolve()) != Et) ||
          ($s && wr(new $s()) != Le) ||
          (Do && wr(new Do()) != we)) &&
          (wr = function (n) {
            var o = Ir(n),
              c = o == Ie ? n.constructor : t,
              v = c ? ps(c) : "";
            if (v)
              switch (v) {
                case wv:
                  return be;
                case bv:
                  return ae;
                case _v:
                  return Et;
                case Ev:
                  return Le;
                case Av:
                  return we;
              }
            return o;
          });
        function qy(n, o, c) {
          for (var v = -1, A = c.length; ++v < A; ) {
            var R = c[v],
              H = R.size;
            switch (R.type) {
              case "drop":
                n += H;
                break;
              case "dropRight":
                o -= H;
                break;
              case "take":
                o = yr(o, n + H);
                break;
              case "takeRight":
                n = ir(n, o - H);
                break;
            }
          }
          return { start: n, end: o };
        }
        function jy(n) {
          var o = n.match(je);
          return o ? o[1].split(Tt) : [];
        }
        function Dd(n, o, c) {
          o = jn(o, n);
          for (var v = -1, A = o.length, R = !1; ++v < A; ) {
            var H = Wi(o[v]);
            if (!(R = n != null && c(n, H))) break;
            n = n[H];
          }
          return R || ++v != A
            ? R
            : ((A = n == null ? 0 : n.length),
              !!A && bc(A) && yn(H, A) && (it(n) || gs(n)));
        }
        function $y(n) {
          var o = n.length,
            c = new n.constructor(o);
          return (
            o &&
              typeof n[0] == "string" &&
              Nt.call(n, "index") &&
              ((c.index = n.index), (c.input = n.input)),
            c
          );
        }
        function xd(n) {
          return typeof n.constructor == "function" && !Uo(n) ? zs(Ga(n)) : {};
        }
        function Fy(n, o, c) {
          var v = n.constructor;
          switch (o) {
            case Be:
              return th(n);
            case j:
            case k:
              return new v(+n);
            case be:
              return Sy(n, c);
            case Me:
            case qe:
            case Oe:
            case Ne:
            case st:
            case Te:
            case Re:
            case Ht:
            case ct:
              return ud(n, c);
            case ae:
              return new v();
            case Pe:
            case _e:
              return new v(n);
            case xe:
              return Iy(n);
            case Le:
              return new v();
            case Ee:
              return Dy(n);
          }
        }
        function zy(n, o) {
          var c = o.length;
          if (!c) return n;
          var v = c - 1;
          return (
            (o[v] = (c > 1 ? "& " : "") + o[v]),
            (o = o.join(c > 2 ? ", " : " ")),
            n.replace(
              Qe,
              `{
/* [wrapped with ` +
                o +
                `] */
`
            )
          );
        }
        function ky(n) {
          return it(n) || gs(n) || !!(Nf && n && n[Nf]);
        }
        function yn(n, o) {
          var c = typeof n;
          return (
            (o = o ?? O),
            !!o &&
              (c == "number" || (c != "symbol" && oi.test(n))) &&
              n > -1 &&
              n % 1 == 0 &&
              n < o
          );
        }
        function Dr(n, o, c) {
          if (!Vt(c)) return !1;
          var v = typeof o;
          return (
            v == "number" ? Tr(c) && yn(o, c.length) : v == "string" && o in c
          )
            ? Pi(c[o], n)
            : !1;
        }
        function uh(n, o) {
          if (it(n)) return !1;
          var c = typeof n;
          return c == "number" ||
            c == "symbol" ||
            c == "boolean" ||
            n == null ||
            Yr(n)
            ? !0
            : Je.test(n) || !At.test(n) || (o != null && n in jt(o));
        }
        function Hy(n) {
          var o = typeof n;
          return o == "string" ||
            o == "number" ||
            o == "symbol" ||
            o == "boolean"
            ? n !== "__proto__"
            : n === null;
        }
        function hh(n) {
          var o = fc(n),
            c = C[o];
          if (typeof c != "function" || !(o in gt.prototype)) return !1;
          if (n === c) return !0;
          var v = oh(c);
          return !!v && n === v[0];
        }
        function Ky(n) {
          return !!Pf && Pf in n;
        }
        var Vy = za ? wn : xh;
        function Uo(n) {
          var o = n && n.constructor,
            c = (typeof o == "function" && o.prototype) || js;
          return n === c;
        }
        function Pd(n) {
          return n === n && !Vt(n);
        }
        function Md(n, o) {
          return function (c) {
            return c == null ? !1 : c[n] === o && (o !== t || n in jt(c));
          };
        }
        function Gy(n) {
          var o = yc(n, function (v) {
              return c.size === d && c.clear(), v;
            }),
            c = o.cache;
          return o;
        }
        function Wy(n, o) {
          var c = n[1],
            v = o[1],
            A = c | v,
            R = A < (G | ee | y),
            H =
              (v == y && c == V) ||
              (v == y && c == T && n[7].length <= o[8]) ||
              (v == (y | T) && o[7].length <= o[8] && c == V);
          if (!(R || H)) return n;
          v & G && ((n[2] = o[2]), (A |= c & G ? 0 : K));
          var Y = o[3];
          if (Y) {
            var X = n[3];
            (n[3] = X ? ld(X, Y, o[4]) : Y), (n[4] = X ? Un(n[3], b) : o[4]);
          }
          return (
            (Y = o[5]),
            Y &&
              ((X = n[5]),
              (n[5] = X ? fd(X, Y, o[6]) : Y),
              (n[6] = X ? Un(n[5], b) : o[6])),
            (Y = o[7]),
            Y && (n[7] = Y),
            v & y && (n[8] = n[8] == null ? o[8] : yr(n[8], o[8])),
            n[9] == null && (n[9] = o[9]),
            (n[0] = o[0]),
            (n[1] = A),
            n
          );
        }
        function Yy(n) {
          var o = [];
          if (n != null) for (var c in jt(n)) o.push(c);
          return o;
        }
        function Qy(n) {
          return Ha.call(n);
        }
        function Cd(n, o, c) {
          return (
            (o = ir(o === t ? n.length - 1 : o, 0)),
            function () {
              for (
                var v = arguments, A = -1, R = ir(v.length - o, 0), H = re(R);
                ++A < R;

              )
                H[A] = v[o + A];
              A = -1;
              for (var Y = re(o + 1); ++A < o; ) Y[A] = v[A];
              return (Y[o] = c(H)), ar(n, this, Y);
            }
          );
        }
        function Od(n, o) {
          return o.length < 2 ? n : fs(n, fi(o, 0, -1));
        }
        function Jy(n, o) {
          for (var c = n.length, v = yr(o.length, c), A = Rr(n); v--; ) {
            var R = o[v];
            n[v] = yn(R, c) ? A[R] : t;
          }
          return n;
        }
        function lh(n, o) {
          if (
            !(o === "constructor" && typeof n[o] == "function") &&
            o != "__proto__"
          )
            return n[o];
        }
        var Nd = Td(td),
          Bo =
            fv ||
            function (n, o) {
              return wt.setTimeout(n, o);
            },
          fh = Td(by);
        function Rd(n, o, c) {
          var v = o + "";
          return fh(n, zy(v, Xy(jy(v), c)));
        }
        function Td(n) {
          var o = 0,
            c = 0;
          return function () {
            var v = mv(),
              A = f - (v - c);
            if (((c = v), A > 0)) {
              if (++o >= me) return arguments[0];
            } else o = 0;
            return n.apply(t, arguments);
          };
        }
        function pc(n, o) {
          var c = -1,
            v = n.length,
            A = v - 1;
          for (o = o === t ? v : o; ++c < o; ) {
            var R = Wu(c, A),
              H = n[R];
            (n[R] = n[c]), (n[c] = H);
          }
          return (n.length = o), n;
        }
        var Ud = Gy(function (n) {
          var o = [];
          return (
            n.charCodeAt(0) === 46 && o.push(""),
            n.replace(Xe, function (c, v, A, R) {
              o.push(A ? R.replace(Si, "$1") : v || c);
            }),
            o
          );
        });
        function Wi(n) {
          if (typeof n == "string" || Yr(n)) return n;
          var o = n + "";
          return o == "0" && 1 / n == -P ? "-0" : o;
        }
        function ps(n) {
          if (n != null) {
            try {
              return ka.call(n);
            } catch {}
            try {
              return n + "";
            } catch {}
          }
          return "";
        }
        function Xy(n, o) {
          return (
            ci(de, function (c) {
              var v = "_." + c[0];
              o & c[1] && !qa(n, v) && n.push(v);
            }),
            n.sort()
          );
        }
        function Bd(n) {
          if (n instanceof gt) return n.clone();
          var o = new hi(n.__wrapped__, n.__chain__);
          return (
            (o.__actions__ = Rr(n.__actions__)),
            (o.__index__ = n.__index__),
            (o.__values__ = n.__values__),
            o
          );
        }
        function Zy(n, o, c) {
          (c ? Dr(n, o, c) : o === t) ? (o = 1) : (o = ir(at(o), 0));
          var v = n == null ? 0 : n.length;
          if (!v || o < 1) return [];
          for (var A = 0, R = 0, H = re(Qa(v / o)); A < v; )
            H[R++] = fi(n, A, (A += o));
          return H;
        }
        function ew(n) {
          for (
            var o = -1, c = n == null ? 0 : n.length, v = 0, A = [];
            ++o < c;

          ) {
            var R = n[o];
            R && (A[v++] = R);
          }
          return A;
        }
        function tw() {
          var n = arguments.length;
          if (!n) return [];
          for (var o = re(n - 1), c = arguments[0], v = n; v--; )
            o[v - 1] = arguments[v];
          return Tn(it(c) ? Rr(c) : [c], lr(o, 1));
        }
        var rw = ht(function (n, o) {
            return Qt(n) ? Co(n, lr(o, 1, Qt, !0)) : [];
          }),
          iw = ht(function (n, o) {
            var c = di(o);
            return (
              Qt(c) && (c = t), Qt(n) ? Co(n, lr(o, 1, Qt, !0), $e(c, 2)) : []
            );
          }),
          nw = ht(function (n, o) {
            var c = di(o);
            return Qt(c) && (c = t), Qt(n) ? Co(n, lr(o, 1, Qt, !0), t, c) : [];
          });
        function sw(n, o, c) {
          var v = n == null ? 0 : n.length;
          return v
            ? ((o = c || o === t ? 1 : at(o)), fi(n, o < 0 ? 0 : o, v))
            : [];
        }
        function ow(n, o, c) {
          var v = n == null ? 0 : n.length;
          return v
            ? ((o = c || o === t ? 1 : at(o)),
              (o = v - o),
              fi(n, 0, o < 0 ? 0 : o))
            : [];
        }
        function aw(n, o) {
          return n && n.length ? oc(n, $e(o, 3), !0, !0) : [];
        }
        function cw(n, o) {
          return n && n.length ? oc(n, $e(o, 3), !0) : [];
        }
        function uw(n, o, c, v) {
          var A = n == null ? 0 : n.length;
          return A
            ? (c && typeof c != "number" && Dr(n, o, c) && ((c = 0), (v = A)),
              ty(n, o, c, v))
            : [];
        }
        function Ld(n, o, c) {
          var v = n == null ? 0 : n.length;
          if (!v) return -1;
          var A = c == null ? 0 : at(c);
          return A < 0 && (A = ir(v + A, 0)), ja(n, $e(o, 3), A);
        }
        function qd(n, o, c) {
          var v = n == null ? 0 : n.length;
          if (!v) return -1;
          var A = v - 1;
          return (
            c !== t && ((A = at(c)), (A = c < 0 ? ir(v + A, 0) : yr(A, v - 1))),
            ja(n, $e(o, 3), A, !0)
          );
        }
        function jd(n) {
          var o = n == null ? 0 : n.length;
          return o ? lr(n, 1) : [];
        }
        function hw(n) {
          var o = n == null ? 0 : n.length;
          return o ? lr(n, P) : [];
        }
        function lw(n, o) {
          var c = n == null ? 0 : n.length;
          return c ? ((o = o === t ? 1 : at(o)), lr(n, o)) : [];
        }
        function fw(n) {
          for (var o = -1, c = n == null ? 0 : n.length, v = {}; ++o < c; ) {
            var A = n[o];
            v[A[0]] = A[1];
          }
          return v;
        }
        function $d(n) {
          return n && n.length ? n[0] : t;
        }
        function dw(n, o, c) {
          var v = n == null ? 0 : n.length;
          if (!v) return -1;
          var A = c == null ? 0 : at(c);
          return A < 0 && (A = ir(v + A, 0)), Us(n, o, A);
        }
        function pw(n) {
          var o = n == null ? 0 : n.length;
          return o ? fi(n, 0, -1) : [];
        }
        var gw = ht(function (n) {
            var o = kt(n, Zu);
            return o.length && o[0] === n[0] ? ku(o) : [];
          }),
          mw = ht(function (n) {
            var o = di(n),
              c = kt(n, Zu);
            return (
              o === di(c) ? (o = t) : c.pop(),
              c.length && c[0] === n[0] ? ku(c, $e(o, 2)) : []
            );
          }),
          vw = ht(function (n) {
            var o = di(n),
              c = kt(n, Zu);
            return (
              (o = typeof o == "function" ? o : t),
              o && c.pop(),
              c.length && c[0] === n[0] ? ku(c, t, o) : []
            );
          });
        function yw(n, o) {
          return n == null ? "" : pv.call(n, o);
        }
        function di(n) {
          var o = n == null ? 0 : n.length;
          return o ? n[o - 1] : t;
        }
        function ww(n, o, c) {
          var v = n == null ? 0 : n.length;
          if (!v) return -1;
          var A = v;
          return (
            c !== t && ((A = at(c)), (A = A < 0 ? ir(v + A, 0) : yr(A, v - 1))),
            o === o ? Xm(n, o, A) : ja(n, bf, A, !0)
          );
        }
        function bw(n, o) {
          return n && n.length ? Jf(n, at(o)) : t;
        }
        var _w = ht(Fd);
        function Fd(n, o) {
          return n && n.length && o && o.length ? Gu(n, o) : n;
        }
        function Ew(n, o, c) {
          return n && n.length && o && o.length ? Gu(n, o, $e(c, 2)) : n;
        }
        function Aw(n, o, c) {
          return n && n.length && o && o.length ? Gu(n, o, t, c) : n;
        }
        var Sw = vn(function (n, o) {
          var c = n == null ? 0 : n.length,
            v = ju(n, o);
          return (
            ed(
              n,
              kt(o, function (A) {
                return yn(A, c) ? +A : A;
              }).sort(hd)
            ),
            v
          );
        });
        function Iw(n, o) {
          var c = [];
          if (!(n && n.length)) return c;
          var v = -1,
            A = [],
            R = n.length;
          for (o = $e(o, 3); ++v < R; ) {
            var H = n[v];
            o(H, v, n) && (c.push(H), A.push(v));
          }
          return ed(n, A), c;
        }
        function dh(n) {
          return n == null ? n : yv.call(n);
        }
        function Dw(n, o, c) {
          var v = n == null ? 0 : n.length;
          return v
            ? (c && typeof c != "number" && Dr(n, o, c)
                ? ((o = 0), (c = v))
                : ((o = o == null ? 0 : at(o)), (c = c === t ? v : at(c))),
              fi(n, o, c))
            : [];
        }
        function xw(n, o) {
          return sc(n, o);
        }
        function Pw(n, o, c) {
          return Qu(n, o, $e(c, 2));
        }
        function Mw(n, o) {
          var c = n == null ? 0 : n.length;
          if (c) {
            var v = sc(n, o);
            if (v < c && Pi(n[v], o)) return v;
          }
          return -1;
        }
        function Cw(n, o) {
          return sc(n, o, !0);
        }
        function Ow(n, o, c) {
          return Qu(n, o, $e(c, 2), !0);
        }
        function Nw(n, o) {
          var c = n == null ? 0 : n.length;
          if (c) {
            var v = sc(n, o, !0) - 1;
            if (Pi(n[v], o)) return v;
          }
          return -1;
        }
        function Rw(n) {
          return n && n.length ? rd(n) : [];
        }
        function Tw(n, o) {
          return n && n.length ? rd(n, $e(o, 2)) : [];
        }
        function Uw(n) {
          var o = n == null ? 0 : n.length;
          return o ? fi(n, 1, o) : [];
        }
        function Bw(n, o, c) {
          return n && n.length
            ? ((o = c || o === t ? 1 : at(o)), fi(n, 0, o < 0 ? 0 : o))
            : [];
        }
        function Lw(n, o, c) {
          var v = n == null ? 0 : n.length;
          return v
            ? ((o = c || o === t ? 1 : at(o)),
              (o = v - o),
              fi(n, o < 0 ? 0 : o, v))
            : [];
        }
        function qw(n, o) {
          return n && n.length ? oc(n, $e(o, 3), !1, !0) : [];
        }
        function jw(n, o) {
          return n && n.length ? oc(n, $e(o, 3)) : [];
        }
        var $w = ht(function (n) {
            return qn(lr(n, 1, Qt, !0));
          }),
          Fw = ht(function (n) {
            var o = di(n);
            return Qt(o) && (o = t), qn(lr(n, 1, Qt, !0), $e(o, 2));
          }),
          zw = ht(function (n) {
            var o = di(n);
            return (
              (o = typeof o == "function" ? o : t), qn(lr(n, 1, Qt, !0), t, o)
            );
          });
        function kw(n) {
          return n && n.length ? qn(n) : [];
        }
        function Hw(n, o) {
          return n && n.length ? qn(n, $e(o, 2)) : [];
        }
        function Kw(n, o) {
          return (
            (o = typeof o == "function" ? o : t),
            n && n.length ? qn(n, t, o) : []
          );
        }
        function ph(n) {
          if (!(n && n.length)) return [];
          var o = 0;
          return (
            (n = Rn(n, function (c) {
              if (Qt(c)) return (o = ir(c.length, o)), !0;
            })),
            Ou(o, function (c) {
              return kt(n, Pu(c));
            })
          );
        }
        function zd(n, o) {
          if (!(n && n.length)) return [];
          var c = ph(n);
          return o == null
            ? c
            : kt(c, function (v) {
                return ar(o, t, v);
              });
        }
        var Vw = ht(function (n, o) {
            return Qt(n) ? Co(n, o) : [];
          }),
          Gw = ht(function (n) {
            return Xu(Rn(n, Qt));
          }),
          Ww = ht(function (n) {
            var o = di(n);
            return Qt(o) && (o = t), Xu(Rn(n, Qt), $e(o, 2));
          }),
          Yw = ht(function (n) {
            var o = di(n);
            return (o = typeof o == "function" ? o : t), Xu(Rn(n, Qt), t, o);
          }),
          Qw = ht(ph);
        function Jw(n, o) {
          return od(n || [], o || [], Mo);
        }
        function Xw(n, o) {
          return od(n || [], o || [], Ro);
        }
        var Zw = ht(function (n) {
          var o = n.length,
            c = o > 1 ? n[o - 1] : t;
          return (c = typeof c == "function" ? (n.pop(), c) : t), zd(n, c);
        });
        function kd(n) {
          var o = C(n);
          return (o.__chain__ = !0), o;
        }
        function eb(n, o) {
          return o(n), n;
        }
        function gc(n, o) {
          return o(n);
        }
        var tb = vn(function (n) {
          var o = n.length,
            c = o ? n[0] : 0,
            v = this.__wrapped__,
            A = function (R) {
              return ju(R, n);
            };
          return o > 1 ||
            this.__actions__.length ||
            !(v instanceof gt) ||
            !yn(c)
            ? this.thru(A)
            : ((v = v.slice(c, +c + (o ? 1 : 0))),
              v.__actions__.push({ func: gc, args: [A], thisArg: t }),
              new hi(v, this.__chain__).thru(function (R) {
                return o && !R.length && R.push(t), R;
              }));
        });
        function rb() {
          return kd(this);
        }
        function ib() {
          return new hi(this.value(), this.__chain__);
        }
        function nb() {
          this.__values__ === t && (this.__values__ = i0(this.value()));
          var n = this.__index__ >= this.__values__.length,
            o = n ? t : this.__values__[this.__index__++];
          return { done: n, value: o };
        }
        function sb() {
          return this;
        }
        function ob(n) {
          for (var o, c = this; c instanceof ec; ) {
            var v = Bd(c);
            (v.__index__ = 0),
              (v.__values__ = t),
              o ? (A.__wrapped__ = v) : (o = v);
            var A = v;
            c = c.__wrapped__;
          }
          return (A.__wrapped__ = n), o;
        }
        function ab() {
          var n = this.__wrapped__;
          if (n instanceof gt) {
            var o = n;
            return (
              this.__actions__.length && (o = new gt(this)),
              (o = o.reverse()),
              o.__actions__.push({ func: gc, args: [dh], thisArg: t }),
              new hi(o, this.__chain__)
            );
          }
          return this.thru(dh);
        }
        function cb() {
          return sd(this.__wrapped__, this.__actions__);
        }
        var ub = ac(function (n, o, c) {
          Nt.call(n, c) ? ++n[c] : gn(n, c, 1);
        });
        function hb(n, o, c) {
          var v = it(n) ? yf : ey;
          return c && Dr(n, o, c) && (o = t), v(n, $e(o, 3));
        }
        function lb(n, o) {
          var c = it(n) ? Rn : zf;
          return c(n, $e(o, 3));
        }
        var fb = md(Ld),
          db = md(qd);
        function pb(n, o) {
          return lr(mc(n, o), 1);
        }
        function gb(n, o) {
          return lr(mc(n, o), P);
        }
        function mb(n, o, c) {
          return (c = c === t ? 1 : at(c)), lr(mc(n, o), c);
        }
        function Hd(n, o) {
          var c = it(n) ? ci : Ln;
          return c(n, $e(o, 3));
        }
        function Kd(n, o) {
          var c = it(n) ? Um : Ff;
          return c(n, $e(o, 3));
        }
        var vb = ac(function (n, o, c) {
          Nt.call(n, c) ? n[c].push(o) : gn(n, c, [o]);
        });
        function yb(n, o, c, v) {
          (n = Tr(n) ? n : Gs(n)), (c = c && !v ? at(c) : 0);
          var A = n.length;
          return (
            c < 0 && (c = ir(A + c, 0)),
            _c(n) ? c <= A && n.indexOf(o, c) > -1 : !!A && Us(n, o, c) > -1
          );
        }
        var wb = ht(function (n, o, c) {
            var v = -1,
              A = typeof o == "function",
              R = Tr(n) ? re(n.length) : [];
            return (
              Ln(n, function (H) {
                R[++v] = A ? ar(o, H, c) : Oo(H, o, c);
              }),
              R
            );
          }),
          bb = ac(function (n, o, c) {
            gn(n, c, o);
          });
        function mc(n, o) {
          var c = it(n) ? kt : Wf;
          return c(n, $e(o, 3));
        }
        function _b(n, o, c, v) {
          return n == null
            ? []
            : (it(o) || (o = o == null ? [] : [o]),
              (c = v ? t : c),
              it(c) || (c = c == null ? [] : [c]),
              Xf(n, o, c));
        }
        var Eb = ac(
          function (n, o, c) {
            n[c ? 0 : 1].push(o);
          },
          function () {
            return [[], []];
          }
        );
        function Ab(n, o, c) {
          var v = it(n) ? Du : Ef,
            A = arguments.length < 3;
          return v(n, $e(o, 4), c, A, Ln);
        }
        function Sb(n, o, c) {
          var v = it(n) ? Bm : Ef,
            A = arguments.length < 3;
          return v(n, $e(o, 4), c, A, Ff);
        }
        function Ib(n, o) {
          var c = it(n) ? Rn : zf;
          return c(n, wc($e(o, 3)));
        }
        function Db(n) {
          var o = it(n) ? Lf : yy;
          return o(n);
        }
        function xb(n, o, c) {
          (c ? Dr(n, o, c) : o === t) ? (o = 1) : (o = at(o));
          var v = it(n) ? Yv : wy;
          return v(n, o);
        }
        function Pb(n) {
          var o = it(n) ? Qv : _y;
          return o(n);
        }
        function Mb(n) {
          if (n == null) return 0;
          if (Tr(n)) return _c(n) ? Ls(n) : n.length;
          var o = wr(n);
          return o == ae || o == Le ? n.size : Ku(n).length;
        }
        function Cb(n, o, c) {
          var v = it(n) ? xu : Ey;
          return c && Dr(n, o, c) && (o = t), v(n, $e(o, 3));
        }
        var Ob = ht(function (n, o) {
            if (n == null) return [];
            var c = o.length;
            return (
              c > 1 && Dr(n, o[0], o[1])
                ? (o = [])
                : c > 2 && Dr(o[0], o[1], o[2]) && (o = [o[0]]),
              Xf(n, lr(o, 1), [])
            );
          }),
          vc =
            lv ||
            function () {
              return wt.Date.now();
            };
        function Nb(n, o) {
          if (typeof o != "function") throw new ui(u);
          return (
            (n = at(n)),
            function () {
              if (--n < 1) return o.apply(this, arguments);
            }
          );
        }
        function Vd(n, o, c) {
          return (
            (o = c ? t : o),
            (o = n && o == null ? n.length : o),
            mn(n, y, t, t, t, t, o)
          );
        }
        function Gd(n, o) {
          var c;
          if (typeof o != "function") throw new ui(u);
          return (
            (n = at(n)),
            function () {
              return (
                --n > 0 && (c = o.apply(this, arguments)), n <= 1 && (o = t), c
              );
            }
          );
        }
        var gh = ht(function (n, o, c) {
            var v = G;
            if (c.length) {
              var A = Un(c, Ks(gh));
              v |= F;
            }
            return mn(n, v, o, c, A);
          }),
          Wd = ht(function (n, o, c) {
            var v = G | ee;
            if (c.length) {
              var A = Un(c, Ks(Wd));
              v |= F;
            }
            return mn(o, v, n, c, A);
          });
        function Yd(n, o, c) {
          o = c ? t : o;
          var v = mn(n, V, t, t, t, t, t, o);
          return (v.placeholder = Yd.placeholder), v;
        }
        function Qd(n, o, c) {
          o = c ? t : o;
          var v = mn(n, q, t, t, t, t, t, o);
          return (v.placeholder = Qd.placeholder), v;
        }
        function Jd(n, o, c) {
          var v,
            A,
            R,
            H,
            Y,
            X,
            oe = 0,
            ce = !1,
            pe = !1,
            ve = !0;
          if (typeof n != "function") throw new ui(u);
          (o = pi(o) || 0),
            Vt(c) &&
              ((ce = !!c.leading),
              (pe = "maxWait" in c),
              (R = pe ? ir(pi(c.maxWait) || 0, o) : R),
              (ve = "trailing" in c ? !!c.trailing : ve));
          function Ue(Jt) {
            var Mi = v,
              _n = A;
            return (v = A = t), (oe = Jt), (H = n.apply(_n, Mi)), H;
          }
          function ke(Jt) {
            return (oe = Jt), (Y = Bo(ft, o)), ce ? Ue(Jt) : H;
          }
          function ut(Jt) {
            var Mi = Jt - X,
              _n = Jt - oe,
              m0 = o - Mi;
            return pe ? yr(m0, R - _n) : m0;
          }
          function He(Jt) {
            var Mi = Jt - X,
              _n = Jt - oe;
            return X === t || Mi >= o || Mi < 0 || (pe && _n >= R);
          }
          function ft() {
            var Jt = vc();
            if (He(Jt)) return bt(Jt);
            Y = Bo(ft, ut(Jt));
          }
          function bt(Jt) {
            return (Y = t), ve && v ? Ue(Jt) : ((v = A = t), H);
          }
          function Qr() {
            Y !== t && ad(Y), (oe = 0), (v = X = A = Y = t);
          }
          function xr() {
            return Y === t ? H : bt(vc());
          }
          function Jr() {
            var Jt = vc(),
              Mi = He(Jt);
            if (((v = arguments), (A = this), (X = Jt), Mi)) {
              if (Y === t) return ke(X);
              if (pe) return ad(Y), (Y = Bo(ft, o)), Ue(X);
            }
            return Y === t && (Y = Bo(ft, o)), H;
          }
          return (Jr.cancel = Qr), (Jr.flush = xr), Jr;
        }
        var Rb = ht(function (n, o) {
            return $f(n, 1, o);
          }),
          Tb = ht(function (n, o, c) {
            return $f(n, pi(o) || 0, c);
          });
        function Ub(n) {
          return mn(n, ne);
        }
        function yc(n, o) {
          if (typeof n != "function" || (o != null && typeof o != "function"))
            throw new ui(u);
          var c = function () {
            var v = arguments,
              A = o ? o.apply(this, v) : v[0],
              R = c.cache;
            if (R.has(A)) return R.get(A);
            var H = n.apply(this, v);
            return (c.cache = R.set(A, H) || R), H;
          };
          return (c.cache = new (yc.Cache || pn)()), c;
        }
        yc.Cache = pn;
        function wc(n) {
          if (typeof n != "function") throw new ui(u);
          return function () {
            var o = arguments;
            switch (o.length) {
              case 0:
                return !n.call(this);
              case 1:
                return !n.call(this, o[0]);
              case 2:
                return !n.call(this, o[0], o[1]);
              case 3:
                return !n.call(this, o[0], o[1], o[2]);
            }
            return !n.apply(this, o);
          };
        }
        function Bb(n) {
          return Gd(2, n);
        }
        var Lb = Ay(function (n, o) {
            o =
              o.length == 1 && it(o[0])
                ? kt(o[0], Gr($e()))
                : kt(lr(o, 1), Gr($e()));
            var c = o.length;
            return ht(function (v) {
              for (var A = -1, R = yr(v.length, c); ++A < R; )
                v[A] = o[A].call(this, v[A]);
              return ar(n, this, v);
            });
          }),
          mh = ht(function (n, o) {
            var c = Un(o, Ks(mh));
            return mn(n, F, t, o, c);
          }),
          Xd = ht(function (n, o) {
            var c = Un(o, Ks(Xd));
            return mn(n, z, t, o, c);
          }),
          qb = vn(function (n, o) {
            return mn(n, T, t, t, t, o);
          });
        function jb(n, o) {
          if (typeof n != "function") throw new ui(u);
          return (o = o === t ? o : at(o)), ht(n, o);
        }
        function $b(n, o) {
          if (typeof n != "function") throw new ui(u);
          return (
            (o = o == null ? 0 : ir(at(o), 0)),
            ht(function (c) {
              var v = c[o],
                A = $n(c, 0, o);
              return v && Tn(A, v), ar(n, this, A);
            })
          );
        }
        function Fb(n, o, c) {
          var v = !0,
            A = !0;
          if (typeof n != "function") throw new ui(u);
          return (
            Vt(c) &&
              ((v = "leading" in c ? !!c.leading : v),
              (A = "trailing" in c ? !!c.trailing : A)),
            Jd(n, o, { leading: v, maxWait: o, trailing: A })
          );
        }
        function zb(n) {
          return Vd(n, 1);
        }
        function kb(n, o) {
          return mh(eh(o), n);
        }
        function Hb() {
          if (!arguments.length) return [];
          var n = arguments[0];
          return it(n) ? n : [n];
        }
        function Kb(n) {
          return li(n, S);
        }
        function Vb(n, o) {
          return (o = typeof o == "function" ? o : t), li(n, S, o);
        }
        function Gb(n) {
          return li(n, E | S);
        }
        function Wb(n, o) {
          return (o = typeof o == "function" ? o : t), li(n, E | S, o);
        }
        function Yb(n, o) {
          return o == null || jf(n, o, cr(o));
        }
        function Pi(n, o) {
          return n === o || (n !== n && o !== o);
        }
        var Qb = lc(zu),
          Jb = lc(function (n, o) {
            return n >= o;
          }),
          gs = Kf(
            (function () {
              return arguments;
            })()
          )
            ? Kf
            : function (n) {
                return Gt(n) && Nt.call(n, "callee") && !Of.call(n, "callee");
              },
          it = re.isArray,
          Xb = Sr ? Gr(Sr) : oy;
        function Tr(n) {
          return n != null && bc(n.length) && !wn(n);
        }
        function Qt(n) {
          return Gt(n) && Tr(n);
        }
        function Zb(n) {
          return n === !0 || n === !1 || (Gt(n) && Ir(n) == j);
        }
        var Fn = dv || xh,
          e2 = Ii ? Gr(Ii) : ay;
        function t2(n) {
          return Gt(n) && n.nodeType === 1 && !Lo(n);
        }
        function r2(n) {
          if (n == null) return !0;
          if (
            Tr(n) &&
            (it(n) ||
              typeof n == "string" ||
              typeof n.splice == "function" ||
              Fn(n) ||
              Vs(n) ||
              gs(n))
          )
            return !n.length;
          var o = wr(n);
          if (o == ae || o == Le) return !n.size;
          if (Uo(n)) return !Ku(n).length;
          for (var c in n) if (Nt.call(n, c)) return !1;
          return !0;
        }
        function i2(n, o) {
          return No(n, o);
        }
        function n2(n, o, c) {
          c = typeof c == "function" ? c : t;
          var v = c ? c(n, o) : t;
          return v === t ? No(n, o, t, c) : !!v;
        }
        function vh(n) {
          if (!Gt(n)) return !1;
          var o = Ir(n);
          return (
            o == B ||
            o == m ||
            (typeof n.message == "string" &&
              typeof n.name == "string" &&
              !Lo(n))
          );
        }
        function s2(n) {
          return typeof n == "number" && Rf(n);
        }
        function wn(n) {
          if (!Vt(n)) return !1;
          var o = Ir(n);
          return o == te || o == ue || o == L || o == Fe;
        }
        function Zd(n) {
          return typeof n == "number" && n == at(n);
        }
        function bc(n) {
          return typeof n == "number" && n > -1 && n % 1 == 0 && n <= O;
        }
        function Vt(n) {
          var o = typeof n;
          return n != null && (o == "object" || o == "function");
        }
        function Gt(n) {
          return n != null && typeof n == "object";
        }
        var e0 = ai ? Gr(ai) : uy;
        function o2(n, o) {
          return n === o || Hu(n, o, ah(o));
        }
        function a2(n, o, c) {
          return (c = typeof c == "function" ? c : t), Hu(n, o, ah(o), c);
        }
        function c2(n) {
          return t0(n) && n != +n;
        }
        function u2(n) {
          if (Vy(n)) throw new tt(a);
          return Vf(n);
        }
        function h2(n) {
          return n === null;
        }
        function l2(n) {
          return n == null;
        }
        function t0(n) {
          return typeof n == "number" || (Gt(n) && Ir(n) == Pe);
        }
        function Lo(n) {
          if (!Gt(n) || Ir(n) != Ie) return !1;
          var o = Ga(n);
          if (o === null) return !0;
          var c = Nt.call(o, "constructor") && o.constructor;
          return typeof c == "function" && c instanceof c && ka.call(c) == av;
        }
        var yh = Ki ? Gr(Ki) : hy;
        function f2(n) {
          return Zd(n) && n >= -O && n <= O;
        }
        var r0 = Eo ? Gr(Eo) : ly;
        function _c(n) {
          return typeof n == "string" || (!it(n) && Gt(n) && Ir(n) == _e);
        }
        function Yr(n) {
          return typeof n == "symbol" || (Gt(n) && Ir(n) == Ee);
        }
        var Vs = as ? Gr(as) : fy;
        function d2(n) {
          return n === t;
        }
        function p2(n) {
          return Gt(n) && wr(n) == we;
        }
        function g2(n) {
          return Gt(n) && Ir(n) == Ae;
        }
        var m2 = lc(Vu),
          v2 = lc(function (n, o) {
            return n <= o;
          });
        function i0(n) {
          if (!n) return [];
          if (Tr(n)) return _c(n) ? Di(n) : Rr(n);
          if (So && n[So]) return Ym(n[So]());
          var o = wr(n),
            c = o == ae ? Ru : o == Le ? $a : Gs;
          return c(n);
        }
        function bn(n) {
          if (!n) return n === 0 ? n : 0;
          if (((n = pi(n)), n === P || n === -P)) {
            var o = n < 0 ? -1 : 1;
            return o * U;
          }
          return n === n ? n : 0;
        }
        function at(n) {
          var o = bn(n),
            c = o % 1;
          return o === o ? (c ? o - c : o) : 0;
        }
        function n0(n) {
          return n ? ls(at(n), 0, g) : 0;
        }
        function pi(n) {
          if (typeof n == "number") return n;
          if (Yr(n)) return x;
          if (Vt(n)) {
            var o = typeof n.valueOf == "function" ? n.valueOf() : n;
            n = Vt(o) ? o + "" : o;
          }
          if (typeof n != "string") return n === 0 ? n : +n;
          n = Af(n);
          var c = ii.test(n);
          return c || si.test(n)
            ? rt(n.slice(2), c ? 2 : 8)
            : ri.test(n)
            ? x
            : +n;
        }
        function s0(n) {
          return Gi(n, Ur(n));
        }
        function y2(n) {
          return n ? ls(at(n), -O, O) : n === 0 ? n : 0;
        }
        function xt(n) {
          return n == null ? "" : Wr(n);
        }
        var w2 = ks(function (n, o) {
            if (Uo(o) || Tr(o)) {
              Gi(o, cr(o), n);
              return;
            }
            for (var c in o) Nt.call(o, c) && Mo(n, c, o[c]);
          }),
          o0 = ks(function (n, o) {
            Gi(o, Ur(o), n);
          }),
          Ec = ks(function (n, o, c, v) {
            Gi(o, Ur(o), n, v);
          }),
          b2 = ks(function (n, o, c, v) {
            Gi(o, cr(o), n, v);
          }),
          _2 = vn(ju);
        function E2(n, o) {
          var c = zs(n);
          return o == null ? c : qf(c, o);
        }
        var A2 = ht(function (n, o) {
            n = jt(n);
            var c = -1,
              v = o.length,
              A = v > 2 ? o[2] : t;
            for (A && Dr(o[0], o[1], A) && (v = 1); ++c < v; )
              for (var R = o[c], H = Ur(R), Y = -1, X = H.length; ++Y < X; ) {
                var oe = H[Y],
                  ce = n[oe];
                (ce === t || (Pi(ce, js[oe]) && !Nt.call(n, oe))) &&
                  (n[oe] = R[oe]);
              }
            return n;
          }),
          S2 = ht(function (n) {
            return n.push(t, Ad), ar(a0, t, n);
          });
        function I2(n, o) {
          return wf(n, $e(o, 3), Vi);
        }
        function D2(n, o) {
          return wf(n, $e(o, 3), Fu);
        }
        function x2(n, o) {
          return n == null ? n : $u(n, $e(o, 3), Ur);
        }
        function P2(n, o) {
          return n == null ? n : kf(n, $e(o, 3), Ur);
        }
        function M2(n, o) {
          return n && Vi(n, $e(o, 3));
        }
        function C2(n, o) {
          return n && Fu(n, $e(o, 3));
        }
        function O2(n) {
          return n == null ? [] : ic(n, cr(n));
        }
        function N2(n) {
          return n == null ? [] : ic(n, Ur(n));
        }
        function wh(n, o, c) {
          var v = n == null ? t : fs(n, o);
          return v === t ? c : v;
        }
        function R2(n, o) {
          return n != null && Dd(n, o, ry);
        }
        function bh(n, o) {
          return n != null && Dd(n, o, iy);
        }
        var T2 = yd(function (n, o, c) {
            o != null && typeof o.toString != "function" && (o = Ha.call(o)),
              (n[o] = c);
          }, Eh(Br)),
          U2 = yd(function (n, o, c) {
            o != null && typeof o.toString != "function" && (o = Ha.call(o)),
              Nt.call(n, o) ? n[o].push(c) : (n[o] = [c]);
          }, $e),
          B2 = ht(Oo);
        function cr(n) {
          return Tr(n) ? Bf(n) : Ku(n);
        }
        function Ur(n) {
          return Tr(n) ? Bf(n, !0) : dy(n);
        }
        function L2(n, o) {
          var c = {};
          return (
            (o = $e(o, 3)),
            Vi(n, function (v, A, R) {
              gn(c, o(v, A, R), v);
            }),
            c
          );
        }
        function q2(n, o) {
          var c = {};
          return (
            (o = $e(o, 3)),
            Vi(n, function (v, A, R) {
              gn(c, A, o(v, A, R));
            }),
            c
          );
        }
        var j2 = ks(function (n, o, c) {
            nc(n, o, c);
          }),
          a0 = ks(function (n, o, c, v) {
            nc(n, o, c, v);
          }),
          $2 = vn(function (n, o) {
            var c = {};
            if (n == null) return c;
            var v = !1;
            (o = kt(o, function (R) {
              return (R = jn(R, n)), v || (v = R.length > 1), R;
            })),
              Gi(n, sh(n), c),
              v && (c = li(c, E | D | S, Ty));
            for (var A = o.length; A--; ) Ju(c, o[A]);
            return c;
          });
        function F2(n, o) {
          return c0(n, wc($e(o)));
        }
        var z2 = vn(function (n, o) {
          return n == null ? {} : gy(n, o);
        });
        function c0(n, o) {
          if (n == null) return {};
          var c = kt(sh(n), function (v) {
            return [v];
          });
          return (
            (o = $e(o)),
            Zf(n, c, function (v, A) {
              return o(v, A[0]);
            })
          );
        }
        function k2(n, o, c) {
          o = jn(o, n);
          var v = -1,
            A = o.length;
          for (A || ((A = 1), (n = t)); ++v < A; ) {
            var R = n == null ? t : n[Wi(o[v])];
            R === t && ((v = A), (R = c)), (n = wn(R) ? R.call(n) : R);
          }
          return n;
        }
        function H2(n, o, c) {
          return n == null ? n : Ro(n, o, c);
        }
        function K2(n, o, c, v) {
          return (
            (v = typeof v == "function" ? v : t), n == null ? n : Ro(n, o, c, v)
          );
        }
        var u0 = _d(cr),
          h0 = _d(Ur);
        function V2(n, o, c) {
          var v = it(n),
            A = v || Fn(n) || Vs(n);
          if (((o = $e(o, 4)), c == null)) {
            var R = n && n.constructor;
            A
              ? (c = v ? new R() : [])
              : Vt(n)
              ? (c = wn(R) ? zs(Ga(n)) : {})
              : (c = {});
          }
          return (
            (A ? ci : Vi)(n, function (H, Y, X) {
              return o(c, H, Y, X);
            }),
            c
          );
        }
        function G2(n, o) {
          return n == null ? !0 : Ju(n, o);
        }
        function W2(n, o, c) {
          return n == null ? n : nd(n, o, eh(c));
        }
        function Y2(n, o, c, v) {
          return (
            (v = typeof v == "function" ? v : t),
            n == null ? n : nd(n, o, eh(c), v)
          );
        }
        function Gs(n) {
          return n == null ? [] : Nu(n, cr(n));
        }
        function Q2(n) {
          return n == null ? [] : Nu(n, Ur(n));
        }
        function J2(n, o, c) {
          return (
            c === t && ((c = o), (o = t)),
            c !== t && ((c = pi(c)), (c = c === c ? c : 0)),
            o !== t && ((o = pi(o)), (o = o === o ? o : 0)),
            ls(pi(n), o, c)
          );
        }
        function X2(n, o, c) {
          return (
            (o = bn(o)),
            c === t ? ((c = o), (o = 0)) : (c = bn(c)),
            (n = pi(n)),
            ny(n, o, c)
          );
        }
        function Z2(n, o, c) {
          if (
            (c && typeof c != "boolean" && Dr(n, o, c) && (o = c = t),
            c === t &&
              (typeof o == "boolean"
                ? ((c = o), (o = t))
                : typeof n == "boolean" && ((c = n), (n = t))),
            n === t && o === t
              ? ((n = 0), (o = 1))
              : ((n = bn(n)), o === t ? ((o = n), (n = 0)) : (o = bn(o))),
            n > o)
          ) {
            var v = n;
            (n = o), (o = v);
          }
          if (c || n % 1 || o % 1) {
            var A = Tf();
            return yr(n + A * (o - n + Lt("1e-" + ((A + "").length - 1))), o);
          }
          return Wu(n, o);
        }
        var e3 = Hs(function (n, o, c) {
          return (o = o.toLowerCase()), n + (c ? l0(o) : o);
        });
        function l0(n) {
          return _h(xt(n).toLowerCase());
        }
        function f0(n) {
          return (n = xt(n)), n && n.replace(or, Hm).replace(Au, "");
        }
        function t3(n, o, c) {
          (n = xt(n)), (o = Wr(o));
          var v = n.length;
          c = c === t ? v : ls(at(c), 0, v);
          var A = c;
          return (c -= o.length), c >= 0 && n.slice(c, A) == o;
        }
        function r3(n) {
          return (n = xt(n)), n && ze.test(n) ? n.replace(Er, Km) : n;
        }
        function i3(n) {
          return (n = xt(n)), n && Ze.test(n) ? n.replace(Dt, "\\$&") : n;
        }
        var n3 = Hs(function (n, o, c) {
            return n + (c ? "-" : "") + o.toLowerCase();
          }),
          s3 = Hs(function (n, o, c) {
            return n + (c ? " " : "") + o.toLowerCase();
          }),
          o3 = gd("toLowerCase");
        function a3(n, o, c) {
          (n = xt(n)), (o = at(o));
          var v = o ? Ls(n) : 0;
          if (!o || v >= o) return n;
          var A = (o - v) / 2;
          return hc(Ja(A), c) + n + hc(Qa(A), c);
        }
        function c3(n, o, c) {
          (n = xt(n)), (o = at(o));
          var v = o ? Ls(n) : 0;
          return o && v < o ? n + hc(o - v, c) : n;
        }
        function u3(n, o, c) {
          (n = xt(n)), (o = at(o));
          var v = o ? Ls(n) : 0;
          return o && v < o ? hc(o - v, c) + n : n;
        }
        function h3(n, o, c) {
          return (
            c || o == null ? (o = 0) : o && (o = +o),
            vv(xt(n).replace(Ye, ""), o || 0)
          );
        }
        function l3(n, o, c) {
          return (
            (c ? Dr(n, o, c) : o === t) ? (o = 1) : (o = at(o)), Yu(xt(n), o)
          );
        }
        function f3() {
          var n = arguments,
            o = xt(n[0]);
          return n.length < 3 ? o : o.replace(n[1], n[2]);
        }
        var d3 = Hs(function (n, o, c) {
          return n + (c ? "_" : "") + o.toLowerCase();
        });
        function p3(n, o, c) {
          return (
            c && typeof c != "number" && Dr(n, o, c) && (o = c = t),
            (c = c === t ? g : c >>> 0),
            c
              ? ((n = xt(n)),
                n &&
                (typeof o == "string" || (o != null && !yh(o))) &&
                ((o = Wr(o)), !o && Bs(n))
                  ? $n(Di(n), 0, c)
                  : n.split(o, c))
              : []
          );
        }
        var g3 = Hs(function (n, o, c) {
          return n + (c ? " " : "") + _h(o);
        });
        function m3(n, o, c) {
          return (
            (n = xt(n)),
            (c = c == null ? 0 : ls(at(c), 0, n.length)),
            (o = Wr(o)),
            n.slice(c, c + o.length) == o
          );
        }
        function v3(n, o, c) {
          var v = C.templateSettings;
          c && Dr(n, o, c) && (o = t), (n = xt(n)), (o = Ec({}, o, v, Ed));
          var A = Ec({}, o.imports, v.imports, Ed),
            R = cr(A),
            H = Nu(A, R),
            Y,
            X,
            oe = 0,
            ce = o.interpolate || Fi,
            pe = "__p += '",
            ve = Tu(
              (o.escape || Fi).source +
                "|" +
                ce.source +
                "|" +
                (ce === Ke ? Ot : Fi).source +
                "|" +
                (o.evaluate || Fi).source +
                "|$",
              "g"
            ),
            Ue =
              "//# sourceURL=" +
              (Nt.call(o, "sourceURL")
                ? (o.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++Su + "]") +
              `
`;
          n.replace(ve, function (He, ft, bt, Qr, xr, Jr) {
            return (
              bt || (bt = Qr),
              (pe += n.slice(oe, Jr).replace(Qn, Vm)),
              ft &&
                ((Y = !0),
                (pe +=
                  `' +
__e(` +
                  ft +
                  `) +
'`)),
              xr &&
                ((X = !0),
                (pe +=
                  `';
` +
                  xr +
                  `;
__p += '`)),
              bt &&
                (pe +=
                  `' +
((__t = (` +
                  bt +
                  `)) == null ? '' : __t) +
'`),
              (oe = Jr + He.length),
              He
            );
          }),
            (pe += `';
`);
          var ke = Nt.call(o, "variable") && o.variable;
          if (!ke)
            pe =
              `with (obj) {
` +
              pe +
              `
}
`;
          else if (Ct.test(ke)) throw new tt(h);
          (pe = (X ? pe.replace(pt, "") : pe)
            .replace(Kt, "$1")
            .replace(yt, "$1;")),
            (pe =
              "function(" +
              (ke || "obj") +
              `) {
` +
              (ke
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (Y ? ", __e = _.escape" : "") +
              (X
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              pe +
              `return __p
}`);
          var ut = p0(function () {
            return St(R, Ue + "return " + pe).apply(t, H);
          });
          if (((ut.source = pe), vh(ut))) throw ut;
          return ut;
        }
        function y3(n) {
          return xt(n).toLowerCase();
        }
        function w3(n) {
          return xt(n).toUpperCase();
        }
        function b3(n, o, c) {
          if (((n = xt(n)), n && (c || o === t))) return Af(n);
          if (!n || !(o = Wr(o))) return n;
          var v = Di(n),
            A = Di(o),
            R = Sf(v, A),
            H = If(v, A) + 1;
          return $n(v, R, H).join("");
        }
        function _3(n, o, c) {
          if (((n = xt(n)), n && (c || o === t))) return n.slice(0, xf(n) + 1);
          if (!n || !(o = Wr(o))) return n;
          var v = Di(n),
            A = If(v, Di(o)) + 1;
          return $n(v, 0, A).join("");
        }
        function E3(n, o, c) {
          if (((n = xt(n)), n && (c || o === t))) return n.replace(Ye, "");
          if (!n || !(o = Wr(o))) return n;
          var v = Di(n),
            A = Sf(v, Di(o));
          return $n(v, A).join("");
        }
        function A3(n, o) {
          var c = fe,
            v = le;
          if (Vt(o)) {
            var A = "separator" in o ? o.separator : A;
            (c = "length" in o ? at(o.length) : c),
              (v = "omission" in o ? Wr(o.omission) : v);
          }
          n = xt(n);
          var R = n.length;
          if (Bs(n)) {
            var H = Di(n);
            R = H.length;
          }
          if (c >= R) return n;
          var Y = c - Ls(v);
          if (Y < 1) return v;
          var X = H ? $n(H, 0, Y).join("") : n.slice(0, Y);
          if (A === t) return X + v;
          if ((H && (Y += X.length - Y), yh(A))) {
            if (n.slice(Y).search(A)) {
              var oe,
                ce = X;
              for (
                A.global || (A = Tu(A.source, xt(lt.exec(A)) + "g")),
                  A.lastIndex = 0;
                (oe = A.exec(ce));

              )
                var pe = oe.index;
              X = X.slice(0, pe === t ? Y : pe);
            }
          } else if (n.indexOf(Wr(A), Y) != Y) {
            var ve = X.lastIndexOf(A);
            ve > -1 && (X = X.slice(0, ve));
          }
          return X + v;
        }
        function S3(n) {
          return (n = xt(n)), n && Ge.test(n) ? n.replace(_t, Zm) : n;
        }
        var I3 = Hs(function (n, o, c) {
            return n + (c ? " " : "") + o.toUpperCase();
          }),
          _h = gd("toUpperCase");
        function d0(n, o, c) {
          return (
            (n = xt(n)),
            (o = c ? t : o),
            o === t ? (Wm(n) ? rv(n) : jm(n)) : n.match(o) || []
          );
        }
        var p0 = ht(function (n, o) {
            try {
              return ar(n, t, o);
            } catch (c) {
              return vh(c) ? c : new tt(c);
            }
          }),
          D3 = vn(function (n, o) {
            return (
              ci(o, function (c) {
                (c = Wi(c)), gn(n, c, gh(n[c], n));
              }),
              n
            );
          });
        function x3(n) {
          var o = n == null ? 0 : n.length,
            c = $e();
          return (
            (n = o
              ? kt(n, function (v) {
                  if (typeof v[1] != "function") throw new ui(u);
                  return [c(v[0]), v[1]];
                })
              : []),
            ht(function (v) {
              for (var A = -1; ++A < o; ) {
                var R = n[A];
                if (ar(R[0], this, v)) return ar(R[1], this, v);
              }
            })
          );
        }
        function P3(n) {
          return Zv(li(n, E));
        }
        function Eh(n) {
          return function () {
            return n;
          };
        }
        function M3(n, o) {
          return n == null || n !== n ? o : n;
        }
        var C3 = vd(),
          O3 = vd(!0);
        function Br(n) {
          return n;
        }
        function Ah(n) {
          return Gf(typeof n == "function" ? n : li(n, E));
        }
        function N3(n) {
          return Yf(li(n, E));
        }
        function R3(n, o) {
          return Qf(n, li(o, E));
        }
        var T3 = ht(function (n, o) {
            return function (c) {
              return Oo(c, n, o);
            };
          }),
          U3 = ht(function (n, o) {
            return function (c) {
              return Oo(n, c, o);
            };
          });
        function Sh(n, o, c) {
          var v = cr(o),
            A = ic(o, v);
          c == null &&
            !(Vt(o) && (A.length || !v.length)) &&
            ((c = o), (o = n), (n = this), (A = ic(o, cr(o))));
          var R = !(Vt(c) && "chain" in c) || !!c.chain,
            H = wn(n);
          return (
            ci(A, function (Y) {
              var X = o[Y];
              (n[Y] = X),
                H &&
                  (n.prototype[Y] = function () {
                    var oe = this.__chain__;
                    if (R || oe) {
                      var ce = n(this.__wrapped__),
                        pe = (ce.__actions__ = Rr(this.__actions__));
                      return (
                        pe.push({ func: X, args: arguments, thisArg: n }),
                        (ce.__chain__ = oe),
                        ce
                      );
                    }
                    return X.apply(n, Tn([this.value()], arguments));
                  });
            }),
            n
          );
        }
        function B3() {
          return wt._ === this && (wt._ = cv), this;
        }
        function Ih() {}
        function L3(n) {
          return (
            (n = at(n)),
            ht(function (o) {
              return Jf(o, n);
            })
          );
        }
        var q3 = rh(kt),
          j3 = rh(yf),
          $3 = rh(xu);
        function g0(n) {
          return uh(n) ? Pu(Wi(n)) : my(n);
        }
        function F3(n) {
          return function (o) {
            return n == null ? t : fs(n, o);
          };
        }
        var z3 = wd(),
          k3 = wd(!0);
        function Dh() {
          return [];
        }
        function xh() {
          return !1;
        }
        function H3() {
          return {};
        }
        function K3() {
          return "";
        }
        function V3() {
          return !0;
        }
        function G3(n, o) {
          if (((n = at(n)), n < 1 || n > O)) return [];
          var c = g,
            v = yr(n, g);
          (o = $e(o)), (n -= g);
          for (var A = Ou(v, o); ++c < n; ) o(c);
          return A;
        }
        function W3(n) {
          return it(n) ? kt(n, Wi) : Yr(n) ? [n] : Rr(Ud(xt(n)));
        }
        function Y3(n) {
          var o = ++ov;
          return xt(n) + o;
        }
        var Q3 = uc(function (n, o) {
            return n + o;
          }, 0),
          J3 = ih("ceil"),
          X3 = uc(function (n, o) {
            return n / o;
          }, 1),
          Z3 = ih("floor");
        function e_(n) {
          return n && n.length ? rc(n, Br, zu) : t;
        }
        function t_(n, o) {
          return n && n.length ? rc(n, $e(o, 2), zu) : t;
        }
        function r_(n) {
          return _f(n, Br);
        }
        function i_(n, o) {
          return _f(n, $e(o, 2));
        }
        function n_(n) {
          return n && n.length ? rc(n, Br, Vu) : t;
        }
        function s_(n, o) {
          return n && n.length ? rc(n, $e(o, 2), Vu) : t;
        }
        var o_ = uc(function (n, o) {
            return n * o;
          }, 1),
          a_ = ih("round"),
          c_ = uc(function (n, o) {
            return n - o;
          }, 0);
        function u_(n) {
          return n && n.length ? Cu(n, Br) : 0;
        }
        function h_(n, o) {
          return n && n.length ? Cu(n, $e(o, 2)) : 0;
        }
        return (
          (C.after = Nb),
          (C.ary = Vd),
          (C.assign = w2),
          (C.assignIn = o0),
          (C.assignInWith = Ec),
          (C.assignWith = b2),
          (C.at = _2),
          (C.before = Gd),
          (C.bind = gh),
          (C.bindAll = D3),
          (C.bindKey = Wd),
          (C.castArray = Hb),
          (C.chain = kd),
          (C.chunk = Zy),
          (C.compact = ew),
          (C.concat = tw),
          (C.cond = x3),
          (C.conforms = P3),
          (C.constant = Eh),
          (C.countBy = ub),
          (C.create = E2),
          (C.curry = Yd),
          (C.curryRight = Qd),
          (C.debounce = Jd),
          (C.defaults = A2),
          (C.defaultsDeep = S2),
          (C.defer = Rb),
          (C.delay = Tb),
          (C.difference = rw),
          (C.differenceBy = iw),
          (C.differenceWith = nw),
          (C.drop = sw),
          (C.dropRight = ow),
          (C.dropRightWhile = aw),
          (C.dropWhile = cw),
          (C.fill = uw),
          (C.filter = lb),
          (C.flatMap = pb),
          (C.flatMapDeep = gb),
          (C.flatMapDepth = mb),
          (C.flatten = jd),
          (C.flattenDeep = hw),
          (C.flattenDepth = lw),
          (C.flip = Ub),
          (C.flow = C3),
          (C.flowRight = O3),
          (C.fromPairs = fw),
          (C.functions = O2),
          (C.functionsIn = N2),
          (C.groupBy = vb),
          (C.initial = pw),
          (C.intersection = gw),
          (C.intersectionBy = mw),
          (C.intersectionWith = vw),
          (C.invert = T2),
          (C.invertBy = U2),
          (C.invokeMap = wb),
          (C.iteratee = Ah),
          (C.keyBy = bb),
          (C.keys = cr),
          (C.keysIn = Ur),
          (C.map = mc),
          (C.mapKeys = L2),
          (C.mapValues = q2),
          (C.matches = N3),
          (C.matchesProperty = R3),
          (C.memoize = yc),
          (C.merge = j2),
          (C.mergeWith = a0),
          (C.method = T3),
          (C.methodOf = U3),
          (C.mixin = Sh),
          (C.negate = wc),
          (C.nthArg = L3),
          (C.omit = $2),
          (C.omitBy = F2),
          (C.once = Bb),
          (C.orderBy = _b),
          (C.over = q3),
          (C.overArgs = Lb),
          (C.overEvery = j3),
          (C.overSome = $3),
          (C.partial = mh),
          (C.partialRight = Xd),
          (C.partition = Eb),
          (C.pick = z2),
          (C.pickBy = c0),
          (C.property = g0),
          (C.propertyOf = F3),
          (C.pull = _w),
          (C.pullAll = Fd),
          (C.pullAllBy = Ew),
          (C.pullAllWith = Aw),
          (C.pullAt = Sw),
          (C.range = z3),
          (C.rangeRight = k3),
          (C.rearg = qb),
          (C.reject = Ib),
          (C.remove = Iw),
          (C.rest = jb),
          (C.reverse = dh),
          (C.sampleSize = xb),
          (C.set = H2),
          (C.setWith = K2),
          (C.shuffle = Pb),
          (C.slice = Dw),
          (C.sortBy = Ob),
          (C.sortedUniq = Rw),
          (C.sortedUniqBy = Tw),
          (C.split = p3),
          (C.spread = $b),
          (C.tail = Uw),
          (C.take = Bw),
          (C.takeRight = Lw),
          (C.takeRightWhile = qw),
          (C.takeWhile = jw),
          (C.tap = eb),
          (C.throttle = Fb),
          (C.thru = gc),
          (C.toArray = i0),
          (C.toPairs = u0),
          (C.toPairsIn = h0),
          (C.toPath = W3),
          (C.toPlainObject = s0),
          (C.transform = V2),
          (C.unary = zb),
          (C.union = $w),
          (C.unionBy = Fw),
          (C.unionWith = zw),
          (C.uniq = kw),
          (C.uniqBy = Hw),
          (C.uniqWith = Kw),
          (C.unset = G2),
          (C.unzip = ph),
          (C.unzipWith = zd),
          (C.update = W2),
          (C.updateWith = Y2),
          (C.values = Gs),
          (C.valuesIn = Q2),
          (C.without = Vw),
          (C.words = d0),
          (C.wrap = kb),
          (C.xor = Gw),
          (C.xorBy = Ww),
          (C.xorWith = Yw),
          (C.zip = Qw),
          (C.zipObject = Jw),
          (C.zipObjectDeep = Xw),
          (C.zipWith = Zw),
          (C.entries = u0),
          (C.entriesIn = h0),
          (C.extend = o0),
          (C.extendWith = Ec),
          Sh(C, C),
          (C.add = Q3),
          (C.attempt = p0),
          (C.camelCase = e3),
          (C.capitalize = l0),
          (C.ceil = J3),
          (C.clamp = J2),
          (C.clone = Kb),
          (C.cloneDeep = Gb),
          (C.cloneDeepWith = Wb),
          (C.cloneWith = Vb),
          (C.conformsTo = Yb),
          (C.deburr = f0),
          (C.defaultTo = M3),
          (C.divide = X3),
          (C.endsWith = t3),
          (C.eq = Pi),
          (C.escape = r3),
          (C.escapeRegExp = i3),
          (C.every = hb),
          (C.find = fb),
          (C.findIndex = Ld),
          (C.findKey = I2),
          (C.findLast = db),
          (C.findLastIndex = qd),
          (C.findLastKey = D2),
          (C.floor = Z3),
          (C.forEach = Hd),
          (C.forEachRight = Kd),
          (C.forIn = x2),
          (C.forInRight = P2),
          (C.forOwn = M2),
          (C.forOwnRight = C2),
          (C.get = wh),
          (C.gt = Qb),
          (C.gte = Jb),
          (C.has = R2),
          (C.hasIn = bh),
          (C.head = $d),
          (C.identity = Br),
          (C.includes = yb),
          (C.indexOf = dw),
          (C.inRange = X2),
          (C.invoke = B2),
          (C.isArguments = gs),
          (C.isArray = it),
          (C.isArrayBuffer = Xb),
          (C.isArrayLike = Tr),
          (C.isArrayLikeObject = Qt),
          (C.isBoolean = Zb),
          (C.isBuffer = Fn),
          (C.isDate = e2),
          (C.isElement = t2),
          (C.isEmpty = r2),
          (C.isEqual = i2),
          (C.isEqualWith = n2),
          (C.isError = vh),
          (C.isFinite = s2),
          (C.isFunction = wn),
          (C.isInteger = Zd),
          (C.isLength = bc),
          (C.isMap = e0),
          (C.isMatch = o2),
          (C.isMatchWith = a2),
          (C.isNaN = c2),
          (C.isNative = u2),
          (C.isNil = l2),
          (C.isNull = h2),
          (C.isNumber = t0),
          (C.isObject = Vt),
          (C.isObjectLike = Gt),
          (C.isPlainObject = Lo),
          (C.isRegExp = yh),
          (C.isSafeInteger = f2),
          (C.isSet = r0),
          (C.isString = _c),
          (C.isSymbol = Yr),
          (C.isTypedArray = Vs),
          (C.isUndefined = d2),
          (C.isWeakMap = p2),
          (C.isWeakSet = g2),
          (C.join = yw),
          (C.kebabCase = n3),
          (C.last = di),
          (C.lastIndexOf = ww),
          (C.lowerCase = s3),
          (C.lowerFirst = o3),
          (C.lt = m2),
          (C.lte = v2),
          (C.max = e_),
          (C.maxBy = t_),
          (C.mean = r_),
          (C.meanBy = i_),
          (C.min = n_),
          (C.minBy = s_),
          (C.stubArray = Dh),
          (C.stubFalse = xh),
          (C.stubObject = H3),
          (C.stubString = K3),
          (C.stubTrue = V3),
          (C.multiply = o_),
          (C.nth = bw),
          (C.noConflict = B3),
          (C.noop = Ih),
          (C.now = vc),
          (C.pad = a3),
          (C.padEnd = c3),
          (C.padStart = u3),
          (C.parseInt = h3),
          (C.random = Z2),
          (C.reduce = Ab),
          (C.reduceRight = Sb),
          (C.repeat = l3),
          (C.replace = f3),
          (C.result = k2),
          (C.round = a_),
          (C.runInContext = J),
          (C.sample = Db),
          (C.size = Mb),
          (C.snakeCase = d3),
          (C.some = Cb),
          (C.sortedIndex = xw),
          (C.sortedIndexBy = Pw),
          (C.sortedIndexOf = Mw),
          (C.sortedLastIndex = Cw),
          (C.sortedLastIndexBy = Ow),
          (C.sortedLastIndexOf = Nw),
          (C.startCase = g3),
          (C.startsWith = m3),
          (C.subtract = c_),
          (C.sum = u_),
          (C.sumBy = h_),
          (C.template = v3),
          (C.times = G3),
          (C.toFinite = bn),
          (C.toInteger = at),
          (C.toLength = n0),
          (C.toLower = y3),
          (C.toNumber = pi),
          (C.toSafeInteger = y2),
          (C.toString = xt),
          (C.toUpper = w3),
          (C.trim = b3),
          (C.trimEnd = _3),
          (C.trimStart = E3),
          (C.truncate = A3),
          (C.unescape = S3),
          (C.uniqueId = Y3),
          (C.upperCase = I3),
          (C.upperFirst = _h),
          (C.each = Hd),
          (C.eachRight = Kd),
          (C.first = $d),
          Sh(
            C,
            (function () {
              var n = {};
              return (
                Vi(C, function (o, c) {
                  Nt.call(C.prototype, c) || (n[c] = o);
                }),
                n
              );
            })(),
            { chain: !1 }
          ),
          (C.VERSION = i),
          ci(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (n) {
              C[n].placeholder = C;
            }
          ),
          ci(["drop", "take"], function (n, o) {
            (gt.prototype[n] = function (c) {
              c = c === t ? 1 : ir(at(c), 0);
              var v = this.__filtered__ && !o ? new gt(this) : this.clone();
              return (
                v.__filtered__
                  ? (v.__takeCount__ = yr(c, v.__takeCount__))
                  : v.__views__.push({
                      size: yr(c, g),
                      type: n + (v.__dir__ < 0 ? "Right" : ""),
                    }),
                v
              );
            }),
              (gt.prototype[n + "Right"] = function (c) {
                return this.reverse()[n](c).reverse();
              });
          }),
          ci(["filter", "map", "takeWhile"], function (n, o) {
            var c = o + 1,
              v = c == l || c == I;
            gt.prototype[n] = function (A) {
              var R = this.clone();
              return (
                R.__iteratees__.push({ iteratee: $e(A, 3), type: c }),
                (R.__filtered__ = R.__filtered__ || v),
                R
              );
            };
          }),
          ci(["head", "last"], function (n, o) {
            var c = "take" + (o ? "Right" : "");
            gt.prototype[n] = function () {
              return this[c](1).value()[0];
            };
          }),
          ci(["initial", "tail"], function (n, o) {
            var c = "drop" + (o ? "" : "Right");
            gt.prototype[n] = function () {
              return this.__filtered__ ? new gt(this) : this[c](1);
            };
          }),
          (gt.prototype.compact = function () {
            return this.filter(Br);
          }),
          (gt.prototype.find = function (n) {
            return this.filter(n).head();
          }),
          (gt.prototype.findLast = function (n) {
            return this.reverse().find(n);
          }),
          (gt.prototype.invokeMap = ht(function (n, o) {
            return typeof n == "function"
              ? new gt(this)
              : this.map(function (c) {
                  return Oo(c, n, o);
                });
          })),
          (gt.prototype.reject = function (n) {
            return this.filter(wc($e(n)));
          }),
          (gt.prototype.slice = function (n, o) {
            n = at(n);
            var c = this;
            return c.__filtered__ && (n > 0 || o < 0)
              ? new gt(c)
              : (n < 0 ? (c = c.takeRight(-n)) : n && (c = c.drop(n)),
                o !== t &&
                  ((o = at(o)), (c = o < 0 ? c.dropRight(-o) : c.take(o - n))),
                c);
          }),
          (gt.prototype.takeRightWhile = function (n) {
            return this.reverse().takeWhile(n).reverse();
          }),
          (gt.prototype.toArray = function () {
            return this.take(g);
          }),
          Vi(gt.prototype, function (n, o) {
            var c = /^(?:filter|find|map|reject)|While$/.test(o),
              v = /^(?:head|last)$/.test(o),
              A = C[v ? "take" + (o == "last" ? "Right" : "") : o],
              R = v || /^find/.test(o);
            A &&
              (C.prototype[o] = function () {
                var H = this.__wrapped__,
                  Y = v ? [1] : arguments,
                  X = H instanceof gt,
                  oe = Y[0],
                  ce = X || it(H),
                  pe = function (ft) {
                    var bt = A.apply(C, Tn([ft], Y));
                    return v && ve ? bt[0] : bt;
                  };
                ce &&
                  c &&
                  typeof oe == "function" &&
                  oe.length != 1 &&
                  (X = ce = !1);
                var ve = this.__chain__,
                  Ue = !!this.__actions__.length,
                  ke = R && !ve,
                  ut = X && !Ue;
                if (!R && ce) {
                  H = ut ? H : new gt(this);
                  var He = n.apply(H, Y);
                  return (
                    He.__actions__.push({ func: gc, args: [pe], thisArg: t }),
                    new hi(He, ve)
                  );
                }
                return ke && ut
                  ? n.apply(this, Y)
                  : ((He = this.thru(pe)),
                    ke ? (v ? He.value()[0] : He.value()) : He);
              });
          }),
          ci(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (n) {
              var o = Fa[n],
                c = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                v = /^(?:pop|shift)$/.test(n);
              C.prototype[n] = function () {
                var A = arguments;
                if (v && !this.__chain__) {
                  var R = this.value();
                  return o.apply(it(R) ? R : [], A);
                }
                return this[c](function (H) {
                  return o.apply(it(H) ? H : [], A);
                });
              };
            }
          ),
          Vi(gt.prototype, function (n, o) {
            var c = C[o];
            if (c) {
              var v = c.name + "";
              Nt.call(Fs, v) || (Fs[v] = []), Fs[v].push({ name: o, func: c });
            }
          }),
          (Fs[cc(t, ee).name] = [{ name: "wrapper", func: t }]),
          (gt.prototype.clone = Sv),
          (gt.prototype.reverse = Iv),
          (gt.prototype.value = Dv),
          (C.prototype.at = tb),
          (C.prototype.chain = rb),
          (C.prototype.commit = ib),
          (C.prototype.next = nb),
          (C.prototype.plant = ob),
          (C.prototype.reverse = ab),
          (C.prototype.toJSON = C.prototype.valueOf = C.prototype.value = cb),
          (C.prototype.first = C.prototype.head),
          So && (C.prototype[So] = sb),
          C
        );
      },
      qs = iv();
    Yt ? (((Yt.exports = qs)._ = qs), (qt._ = qs)) : (wt._ = qs);
  }.call(Vo));
})(Ll, Ll.exports);
var ZP = Object.defineProperty,
  eM = Object.defineProperties,
  tM = Object.getOwnPropertyDescriptors,
  _g = Object.getOwnPropertySymbols,
  rM = Object.prototype.hasOwnProperty,
  iM = Object.prototype.propertyIsEnumerable,
  Eg = (r, e, t) =>
    e in r
      ? ZP(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Oc = (r, e) => {
    for (var t in e || (e = {})) rM.call(e, t) && Eg(r, t, e[t]);
    if (_g) for (var t of _g(e)) iM.call(e, t) && Eg(r, t, e[t]);
    return r;
  },
  nM = (r, e) => eM(r, tM(e));
function qi(r, e, t) {
  var i;
  const s = Jo(r);
  return (
    ((i = e.rpcMap) == null ? void 0 : i[s.reference]) ||
    `${XP}?chainId=${s.namespace}:${s.reference}&projectId=${t}`
  );
}
function Cs(r) {
  return r.includes(":") ? r.split(":")[1] : r;
}
function Nm(r) {
  return r.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function sM(r, e) {
  const t = Object.keys(e.namespaces).filter((s) => s.includes(r));
  if (!t.length) return [];
  const i = [];
  return (
    t.forEach((s) => {
      const a = e.namespaces[s].accounts;
      i.push(...a);
    }),
    i
  );
}
function sl(r = {}, e = {}) {
  const t = Ag(r),
    i = Ag(e);
  return Ll.exports.merge(t, i);
}
function Ag(r) {
  var e, t, i, s;
  const a = {};
  if (!oa(r)) return a;
  for (const [u, h] of Object.entries(r)) {
    const p = rf(u) ? [u] : h.chains,
      d = h.methods || [],
      b = h.events || [],
      E = h.rpcMap || {},
      D = Yo(u);
    a[D] = nM(Oc(Oc({}, a[D]), h), {
      chains: Tc(p, (e = a[D]) == null ? void 0 : e.chains),
      methods: Tc(d, (t = a[D]) == null ? void 0 : t.methods),
      events: Tc(b, (i = a[D]) == null ? void 0 : i.events),
      rpcMap: Oc(Oc({}, E), (s = a[D]) == null ? void 0 : s.rpcMap),
    });
  }
  return a;
}
function oM(r) {
  return r.includes(":") ? r.split(":")[2] : r;
}
function Sg(r) {
  const e = {};
  for (const [t, i] of Object.entries(r)) {
    const s = i.methods || [],
      a = i.events || [],
      u = i.accounts || [],
      h = rf(t) ? [t] : i.chains ? i.chains : Nm(i.accounts);
    e[t] = { chains: h, methods: s, events: a, accounts: u };
  }
  return e;
}
function ol(r) {
  return typeof r == "number"
    ? r
    : r.includes("0x")
    ? parseInt(r, 16)
    : ((r = r.includes(":") ? r.split(":")[1] : r),
      isNaN(Number(r)) ? r : Number(r));
}
const Rm = {},
  Pt = (r) => Rm[r],
  al = (r, e) => {
    Rm[r] = e;
  };
class aM {
  constructor(e) {
    (this.name = "polkadot"),
      (this.namespace = e.namespace),
      (this.events = Pt("events")),
      (this.client = Pt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit($i.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? e
          .filter((t) => t.split(":")[1] === this.chainId.toString())
          .map((t) => t.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        const s = Cs(t);
        e[s] = this.createHttpProvider(
          s,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || qi(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new ji(new ln(i, Pt("disableProviderPing")));
  }
}
var cM = Object.defineProperty,
  uM = Object.defineProperties,
  hM = Object.getOwnPropertyDescriptors,
  Ig = Object.getOwnPropertySymbols,
  lM = Object.prototype.hasOwnProperty,
  fM = Object.prototype.propertyIsEnumerable,
  Dg = (r, e, t) =>
    e in r
      ? cM(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  xg = (r, e) => {
    for (var t in e || (e = {})) lM.call(e, t) && Dg(r, t, e[t]);
    if (Ig) for (var t of Ig(e)) fM.call(e, t) && Dg(r, t, e[t]);
    return r;
  },
  Pg = (r, e) => uM(r, hM(e));
class dM {
  constructor(e) {
    (this.name = "eip155"),
      (this.namespace = e.namespace),
      (this.events = Pt("events")),
      (this.client = Pt("client")),
      (this.httpProviders = this.createHttpProviders()),
      (this.chainId = parseInt(this.getDefaultChain()));
  }
  async request(e) {
    switch (e.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(e);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(e);
    }
    return this.namespace.methods.includes(e.request.method)
      ? await this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
      (this.chainId = parseInt(e)),
      this.events.emit($i.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  createHttpProvider(e, t) {
    const i =
      t || qi(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new ji(new ln(i, Pt("disableProviderPing")));
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        const s = parseInt(Cs(t));
        e[s] = this.createHttpProvider(
          s,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  getHttpProvider() {
    const e = this.chainId,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  async handleSwitchChain(e) {
    var t, i;
    let s = e.request.params
      ? (t = e.request.params[0]) == null
        ? void 0
        : t.chainId
      : "0x0";
    s = s.startsWith("0x") ? s : `0x${s}`;
    const a = parseInt(s, 16);
    if (this.isChainApproved(a)) this.setDefaultChain(`${a}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({
        topic: e.topic,
        request: { method: e.request.method, params: [{ chainId: s }] },
        chainId: (i = this.namespace.chains) == null ? void 0 : i[0],
      }),
        this.setDefaultChain(`${a}`);
    else
      throw new Error(
        `Failed to switch to chain 'eip155:${a}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
      );
    return null;
  }
  isChainApproved(e) {
    return this.namespace.chains.includes(`${this.name}:${e}`);
  }
  async getCapabilities(e) {
    var t, i, s;
    const a =
      (i = (t = e.request) == null ? void 0 : t.params) == null ? void 0 : i[0];
    if (!a)
      throw new Error(
        "Missing address parameter in `wallet_getCapabilities` request"
      );
    const u = this.client.session.get(e.topic),
      h =
        ((s = u == null ? void 0 : u.sessionProperties) == null
          ? void 0
          : s.capabilities) || {};
    if (h != null && h[a]) return h == null ? void 0 : h[a];
    const p = await this.client.request(e);
    try {
      await this.client.session.update(e.topic, {
        sessionProperties: Pg(xg({}, u.sessionProperties || {}), {
          capabilities: Pg(xg({}, h || {}), { [a]: p }),
        }),
      });
    } catch (d) {
      console.warn("Failed to update session with capabilities", d);
    }
    return p;
  }
}
class pM {
  constructor(e) {
    (this.name = "solana"),
      (this.namespace = e.namespace),
      (this.events = Pt("events")),
      (this.client = Pt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit($i.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        const s = Cs(t);
        e[s] = this.createHttpProvider(
          s,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || qi(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new ji(new ln(i, Pt("disableProviderPing")));
  }
}
class gM {
  constructor(e) {
    (this.name = "cosmos"),
      (this.namespace = e.namespace),
      (this.events = Pt("events")),
      (this.client = Pt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(
        $i.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        const s = Cs(t);
        e[s] = this.createHttpProvider(
          s,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || qi(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new ji(new ln(i, Pt("disableProviderPing")));
  }
}
class mM {
  constructor(e) {
    (this.name = "algorand"),
      (this.namespace = e.namespace),
      (this.events = Pt("events")),
      (this.client = Pt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (!this.httpProviders[e]) {
      const i =
        t ||
        qi(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    (this.chainId = e),
      this.events.emit(
        $i.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        e[t] = this.createHttpProvider(
          t,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || qi(e, this.namespace, this.client.core.projectId);
    return typeof i > "u"
      ? void 0
      : new ji(new ln(i, Pt("disableProviderPing")));
  }
}
class vM {
  constructor(e) {
    (this.name = "cip34"),
      (this.namespace = e.namespace),
      (this.events = Pt("events")),
      (this.client = Pt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit(
        $i.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        const i = this.getCardanoRPCUrl(t),
          s = Cs(t);
        e[s] = this.createHttpProvider(s, i);
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  getCardanoRPCUrl(e) {
    const t = this.namespace.rpcMap;
    if (t) return t[e];
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || this.getCardanoRPCUrl(e);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new ji(new ln(i, Pt("disableProviderPing")));
  }
}
class yM {
  constructor(e) {
    (this.name = "elrond"),
      (this.namespace = e.namespace),
      (this.events = Pt("events")),
      (this.client = Pt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit($i.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        const s = Cs(t);
        e[s] = this.createHttpProvider(
          s,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || qi(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new ji(new ln(i, Pt("disableProviderPing")));
  }
}
class wM {
  constructor(e) {
    (this.name = "multiversx"),
      (this.namespace = e.namespace),
      (this.events = Pt("events")),
      (this.client = Pt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit($i.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        const s = Cs(t);
        e[s] = this.createHttpProvider(
          s,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || qi(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new ji(new ln(i, Pt("disableProviderPing")));
  }
}
class bM {
  constructor(e) {
    (this.name = "near"),
      (this.namespace = e.namespace),
      (this.events = Pt("events")),
      (this.client = Pt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    this.namespace = Object.assign(this.namespace, e);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider().request(e.request);
  }
  setDefaultChain(e, t) {
    if (((this.chainId = e), !this.httpProviders[e])) {
      const i = t || qi(`${this.name}:${e}`, this.namespace);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      this.setHttpProvider(e, i);
    }
    this.events.emit($i.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? e
          .filter((t) => t.split(":")[1] === this.chainId.toString())
          .map((t) => t.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const e = {};
    return (
      this.namespace.chains.forEach((t) => {
        var i;
        e[t] = this.createHttpProvider(
          t,
          (i = this.namespace.rpcMap) == null ? void 0 : i[t]
        );
      }),
      e
    );
  }
  getHttpProvider() {
    const e = `${this.name}:${this.chainId}`,
      t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || qi(e, this.namespace);
    return typeof i > "u"
      ? void 0
      : new ji(new ln(i, Pt("disableProviderPing")));
  }
}
class _M {
  constructor(e) {
    (this.name = eo),
      (this.namespace = e.namespace),
      (this.events = Pt("events")),
      (this.client = Pt("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(e) {
    (this.namespace.chains = [
      ...new Set((this.namespace.chains || []).concat(e.chains || [])),
    ]),
      (this.namespace.accounts = [
        ...new Set((this.namespace.accounts || []).concat(e.accounts || [])),
      ]),
      (this.namespace.methods = [
        ...new Set((this.namespace.methods || []).concat(e.methods || [])),
      ]),
      (this.namespace.events = [
        ...new Set((this.namespace.events || []).concat(e.events || [])),
      ]),
      (this.httpProviders = this.createHttpProviders());
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(e) {
    return this.namespace.methods.includes(e.request.method)
      ? this.client.request(e)
      : this.getHttpProvider(e.chainId).request(e.request);
  }
  setDefaultChain(e, t) {
    this.httpProviders[e] || this.setHttpProvider(e, t),
      (this.chainId = e),
      this.events.emit($i.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const e = this.namespace.chains[0];
    if (!e) throw new Error("ChainId not found");
    return e.split(":")[1];
  }
  getAccounts() {
    const e = this.namespace.accounts;
    return e
      ? [
          ...new Set(
            e
              .filter((t) => t.split(":")[1] === this.chainId.toString())
              .map((t) => t.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    var e, t;
    const i = {};
    return (
      (t = (e = this.namespace) == null ? void 0 : e.accounts) == null ||
        t.forEach((s) => {
          const a = Jo(s);
          i[`${a.namespace}:${a.reference}`] = this.createHttpProvider(s);
        }),
      i
    );
  }
  getHttpProvider(e) {
    const t = this.httpProviders[e];
    if (typeof t > "u") throw new Error(`JSON-RPC provider for ${e} not found`);
    return t;
  }
  setHttpProvider(e, t) {
    const i = this.createHttpProvider(e, t);
    i && (this.httpProviders[e] = i);
  }
  createHttpProvider(e, t) {
    const i = t || qi(e, this.namespace, this.client.core.projectId);
    if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
    return new ji(new ln(i, Pt("disableProviderPing")));
  }
}
var EM = Object.defineProperty,
  AM = Object.defineProperties,
  SM = Object.getOwnPropertyDescriptors,
  Mg = Object.getOwnPropertySymbols,
  IM = Object.prototype.hasOwnProperty,
  DM = Object.prototype.propertyIsEnumerable,
  Cg = (r, e, t) =>
    e in r
      ? EM(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Nc = (r, e) => {
    for (var t in e || (e = {})) IM.call(e, t) && Cg(r, t, e[t]);
    if (Mg) for (var t of Mg(e)) DM.call(e, t) && Cg(r, t, e[t]);
    return r;
  },
  cl = (r, e) => AM(r, SM(e));
class mf {
  constructor(e) {
    (this.events = new Fl()),
      (this.rpcProviders = {}),
      (this.shouldAbortPairingAttempt = !1),
      (this.maxPairingAttempts = 10),
      (this.disableProviderPing = !1),
      (this.providerOpts = e),
      (this.logger =
        typeof (e == null ? void 0 : e.logger) < "u" &&
        typeof (e == null ? void 0 : e.logger) != "string"
          ? e.logger
          : ya(du({ level: (e == null ? void 0 : e.logger) || wg }))),
      (this.disableProviderPing =
        (e == null ? void 0 : e.disableProviderPing) || !1);
  }
  static async init(e) {
    const t = new mf(e);
    return await t.initialize(), t;
  }
  async request(e, t, i) {
    const [s, a] = this.validateChain(t);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(s).request({
      request: Nc({}, e),
      chainId: `${s}:${a}`,
      topic: this.session.topic,
      expiry: i,
    });
  }
  sendAsync(e, t, i, s) {
    const a = new Date().getTime();
    this.request(e, i, s)
      .then((u) => t(null, pu(a, u)))
      .catch((u) => t(u, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return (
      this.session ||
        (await this.connect({
          namespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties,
        })),
      await this.requestAccounts()
    );
  }
  async disconnect() {
    var e;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({
      topic: (e = this.session) == null ? void 0 : e.topic,
      reason: Rt("USER_DISCONNECTED"),
    }),
      await this.cleanup();
  }
  async connect(e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (
      (this.setNamespaces(e),
      await this.cleanupPendingPairings(),
      !e.skipPairing)
    )
      return await this.pair(e.pairingTopic);
  }
  async authenticate(e) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(e), await this.cleanupPendingPairings();
    const { uri: t, response: i } = await this.client.authenticate(e);
    t && ((this.uri = t), this.events.emit("display_uri", t));
    const s = await i();
    if (((this.session = s.session), this.session)) {
      const a = Sg(this.session.namespaces);
      (this.namespaces = sl(this.namespaces, a)),
        this.persist("namespaces", this.namespaces),
        this.onConnect();
    }
    return s;
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(e) {
    this.shouldAbortPairingAttempt = !1;
    let t = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (t >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: i, approval: s } = await this.client.connect({
        pairingTopic: e,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
      });
      i && ((this.uri = i), this.events.emit("display_uri", i)),
        await s()
          .then((a) => {
            this.session = a;
            const u = Sg(a.namespaces);
            (this.namespaces = sl(this.namespaces, u)),
              this.persist("namespaces", this.namespaces);
          })
          .catch((a) => {
            if (a.message !== Om) throw a;
            t++;
          });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(e, t) {
    try {
      if (!this.session) return;
      const [i, s] = this.validateChain(e),
        a = this.getProvider(i);
      a.name === eo
        ? a.setDefaultChain(`${i}:${s}`, t)
        : a.setDefaultChain(s, t);
    } catch (i) {
      if (!/Please call connect/.test(i.message)) throw i;
    }
  }
  async cleanupPendingPairings(e = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const t = this.client.pairing.getAll();
    if (un(t)) {
      for (const i of t)
        e.deletePairings
          ? this.client.core.expirer.set(i.topic, 0)
          : await this.client.core.relayer.subscriber.unsubscribe(i.topic);
      this.logger.info(`Inactive pairings cleared: ${t.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (
      ((this.namespaces = await this.getFromStore("namespaces")),
      (this.optionalNamespaces =
        (await this.getFromStore("optionalNamespaces")) || {}),
      this.client.session.length)
    ) {
      const e = this.client.session.keys.length - 1;
      (this.session = this.client.session.get(this.client.session.keys[e])),
        this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"),
      await this.createClient(),
      await this.checkStorage(),
      this.registerEventListeners();
  }
  async createClient() {
    (this.client =
      this.providerOpts.client ||
      (await gf.init({
        logger: this.providerOpts.logger || wg,
        relayUrl: this.providerOpts.relayUrl || YP,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
      }))),
      this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error(
        "Session not initialized. Please call connect() before enable()"
      );
    const e = [
      ...new Set(Object.keys(this.session.namespaces).map((t) => Yo(t))),
    ];
    al("client", this.client),
      al("events", this.events),
      al("disableProviderPing", this.disableProviderPing),
      e.forEach((t) => {
        if (!this.session) return;
        const i = sM(t, this.session),
          s = Nm(i),
          a = sl(this.namespaces, this.optionalNamespaces),
          u = cl(Nc({}, a[t]), { accounts: i, chains: s });
        switch (t) {
          case "eip155":
            this.rpcProviders[t] = new dM({ namespace: u });
            break;
          case "algorand":
            this.rpcProviders[t] = new mM({ namespace: u });
            break;
          case "solana":
            this.rpcProviders[t] = new pM({ namespace: u });
            break;
          case "cosmos":
            this.rpcProviders[t] = new gM({ namespace: u });
            break;
          case "polkadot":
            this.rpcProviders[t] = new aM({ namespace: u });
            break;
          case "cip34":
            this.rpcProviders[t] = new vM({ namespace: u });
            break;
          case "elrond":
            this.rpcProviders[t] = new yM({ namespace: u });
            break;
          case "multiversx":
            this.rpcProviders[t] = new wM({ namespace: u });
            break;
          case "near":
            this.rpcProviders[t] = new bM({ namespace: u });
            break;
          default:
            this.rpcProviders[eo]
              ? this.rpcProviders[eo].updateNamespace(u)
              : (this.rpcProviders[eo] = new _M({ namespace: u }));
        }
      });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (e) => {
      this.events.emit("session_ping", e);
    }),
      this.client.on("session_event", (e) => {
        const { params: t } = e,
          { event: i } = t;
        if (i.name === "accountsChanged") {
          const s = i.data;
          s && un(s) && this.events.emit("accountsChanged", s.map(oM));
        } else if (i.name === "chainChanged") {
          const s = t.chainId,
            a = t.event.data,
            u = Yo(s),
            h = ol(s) !== ol(a) ? `${u}:${ol(a)}` : s;
          this.onChainChanged(h);
        } else this.events.emit(i.name, i.data);
        this.events.emit("session_event", e);
      }),
      this.client.on("session_update", ({ topic: e, params: t }) => {
        var i;
        const { namespaces: s } = t,
          a = (i = this.client) == null ? void 0 : i.session.get(e);
        (this.session = cl(Nc({}, a), { namespaces: s })),
          this.onSessionUpdate(),
          this.events.emit("session_update", { topic: e, params: t });
      }),
      this.client.on("session_delete", async (e) => {
        await this.cleanup(),
          this.events.emit("session_delete", e),
          this.events.emit(
            "disconnect",
            cl(Nc({}, Rt("USER_DISCONNECTED")), { data: e.topic })
          );
      }),
      this.on($i.DEFAULT_CHAIN_CHANGED, (e) => {
        this.onChainChanged(e, !0);
      });
  }
  getProvider(e) {
    return this.rpcProviders[e] || this.rpcProviders[eo];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((e) => {
      var t;
      this.getProvider(e).updateNamespace(
        (t = this.session) == null ? void 0 : t.namespaces[e]
      );
    });
  }
  setNamespaces(e) {
    const { namespaces: t, optionalNamespaces: i, sessionProperties: s } = e;
    t && Object.keys(t).length && (this.namespaces = t),
      i && Object.keys(i).length && (this.optionalNamespaces = i),
      (this.sessionProperties = s),
      this.persist("namespaces", t),
      this.persist("optionalNamespaces", i);
  }
  validateChain(e) {
    const [t, i] = (e == null ? void 0 : e.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, i];
    if (
      t &&
      !Object.keys(this.namespaces || {})
        .map((u) => Yo(u))
        .includes(t)
    )
      throw new Error(
        `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
      );
    if (t && i) return [t, i];
    const s = Yo(Object.keys(this.namespaces)[0]),
      a = this.rpcProviders[s].getDefaultChain();
    return [s, a];
  }
  async requestAccounts() {
    const [e] = this.validateChain();
    return await this.getProvider(e).requestAccounts();
  }
  onChainChanged(e, t = !1) {
    if (!this.namespaces) return;
    const [i, s] = this.validateChain(e);
    s &&
      (t || this.getProvider(i).setDefaultChain(s),
      this.namespaces[i]
        ? (this.namespaces[i].defaultChain = s)
        : this.namespaces[`${i}:${s}`]
        ? (this.namespaces[`${i}:${s}`].defaultChain = s)
        : (this.namespaces[`${i}:${s}`] = { defaultChain: s }),
      this.persist("namespaces", this.namespaces),
      this.events.emit("chainChanged", s));
  }
  onConnect() {
    this.createProviders(),
      this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    (this.session = void 0),
      (this.namespaces = void 0),
      (this.optionalNamespaces = void 0),
      (this.sessionProperties = void 0),
      this.persist("namespaces", void 0),
      this.persist("optionalNamespaces", void 0),
      this.persist("sessionProperties", void 0),
      await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(e, t) {
    this.client.core.storage.setItem(`${bg}/${e}`, t);
  }
  async getFromStore(e) {
    return await this.client.core.storage.getItem(`${bg}/${e}`);
  }
}
const xM = mf,
  PM = "wc",
  MM = "ethereum_provider",
  CM = `${PM}@2:${MM}:`,
  OM = "https://rpc.walletconnect.com/v1/",
  ql = ["eth_sendTransaction", "personal_sign"],
  NM = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
    "wallet_sendCalls",
    "wallet_getCapabilities",
    "wallet_getCallsStatus",
    "wallet_showCallsStatus",
  ],
  jl = ["chainChanged", "accountsChanged"],
  RM = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var TM = Object.defineProperty,
  UM = Object.defineProperties,
  BM = Object.getOwnPropertyDescriptors,
  Og = Object.getOwnPropertySymbols,
  LM = Object.prototype.hasOwnProperty,
  qM = Object.prototype.propertyIsEnumerable,
  Ng = (r, e, t) =>
    e in r
      ? TM(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  to = (r, e) => {
    for (var t in e || (e = {})) LM.call(e, t) && Ng(r, t, e[t]);
    if (Og) for (var t of Og(e)) qM.call(e, t) && Ng(r, t, e[t]);
    return r;
  },
  ul = (r, e) => UM(r, BM(e));
function iu(r) {
  return Number(r[0].split(":")[1]);
}
function Rc(r) {
  return `0x${r.toString(16)}`;
}
function jM(r) {
  const {
    chains: e,
    optionalChains: t,
    methods: i,
    optionalMethods: s,
    events: a,
    optionalEvents: u,
    rpcMap: h,
  } = r;
  if (!un(e)) throw new Error("Invalid chains");
  const p = {
      chains: e,
      methods: i || ql,
      events: a || jl,
      rpcMap: to({}, e.length ? { [iu(e)]: h[iu(e)] } : {}),
    },
    d = a == null ? void 0 : a.filter((S) => !jl.includes(S)),
    b = i == null ? void 0 : i.filter((S) => !ql.includes(S));
  if (!t && !u && !s && !(d != null && d.length) && !(b != null && b.length))
    return { required: e.length ? p : void 0 };
  const E =
      ((d == null ? void 0 : d.length) && (b == null ? void 0 : b.length)) ||
      !t,
    D = {
      chains: [...new Set(E ? p.chains.concat(t || []) : t)],
      methods: [...new Set(p.methods.concat(s != null && s.length ? s : NM))],
      events: [...new Set(p.events.concat(u != null && u.length ? u : RM))],
      rpcMap: h,
    };
  return { required: e.length ? p : void 0, optional: t.length ? D : void 0 };
}
class vf {
  constructor() {
    (this.events = new Ai.EventEmitter()),
      (this.namespace = "eip155"),
      (this.accounts = []),
      (this.chainId = 1),
      (this.STORAGE_KEY = CM),
      (this.on = (e, t) => (this.events.on(e, t), this)),
      (this.once = (e, t) => (this.events.once(e, t), this)),
      (this.removeListener = (e, t) => (
        this.events.removeListener(e, t), this
      )),
      (this.off = (e, t) => (this.events.off(e, t), this)),
      (this.parseAccount = (e) =>
        this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
      (this.signer = {}),
      (this.rpc = {});
  }
  static async init(e) {
    const t = new vf();
    return await t.initialize(e), t;
  }
  async request(e, t) {
    return await this.signer.request(e, this.formatChainId(this.chainId), t);
  }
  sendAsync(e, t, i) {
    this.signer.sendAsync(e, t, this.formatChainId(this.chainId), i);
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return (
      this.session || (await this.connect()),
      await this.request({ method: "eth_requestAccounts" })
    );
  }
  async connect(e) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(e);
    const { required: t, optional: i } = jM(this.rpc);
    try {
      const s = await new Promise(async (u, h) => {
        var p;
        this.rpc.showQrModal &&
          ((p = this.modal) == null ||
            p.subscribeModal((d) => {
              !d.open &&
                !this.signer.session &&
                (this.signer.abortPairingAttempt(),
                h(new Error("Connection request reset. Please try again.")));
            })),
          await this.signer
            .connect(
              ul(
                to(
                  { namespaces: to({}, t && { [this.namespace]: t }) },
                  i && { optionalNamespaces: { [this.namespace]: i } }
                ),
                { pairingTopic: e == null ? void 0 : e.pairingTopic }
              )
            )
            .then((d) => {
              u(d);
            })
            .catch((d) => {
              h(new Error(d.message));
            });
      });
      if (!s) return;
      const a = L0(s.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : a),
        this.setAccounts(a),
        this.events.emit("connect", { chainId: Rc(this.chainId) });
    } catch (s) {
      throw (this.signer.logger.error(s), s);
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async authenticate(e) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts({ chains: e == null ? void 0 : e.chains });
    try {
      const t = await new Promise(async (s, a) => {
          var u;
          this.rpc.showQrModal &&
            ((u = this.modal) == null ||
              u.subscribeModal((h) => {
                !h.open &&
                  !this.signer.session &&
                  (this.signer.abortPairingAttempt(),
                  a(new Error("Connection request reset. Please try again.")));
              })),
            await this.signer
              .authenticate(ul(to({}, e), { chains: this.rpc.chains }))
              .then((h) => {
                s(h);
              })
              .catch((h) => {
                a(new Error(h.message));
              });
        }),
        i = t.session;
      if (i) {
        const s = L0(i.namespaces, [this.namespace]);
        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : s),
          this.setAccounts(s),
          this.events.emit("connect", { chainId: Rc(this.chainId) });
      }
      return t;
    } catch (t) {
      throw (this.signer.logger.error(t), t);
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && (await this.signer.disconnect()), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (e) => {
      const { params: t } = e,
        { event: i } = t;
      i.name === "accountsChanged"
        ? ((this.accounts = this.parseAccounts(i.data)),
          this.events.emit("accountsChanged", this.accounts))
        : i.name === "chainChanged"
        ? this.setChainId(this.formatChainId(i.data))
        : this.events.emit(i.name, i.data),
        this.events.emit("session_event", e);
    }),
      this.signer.on("chainChanged", (e) => {
        const t = parseInt(e);
        (this.chainId = t),
          this.events.emit("chainChanged", Rc(this.chainId)),
          this.persist();
      }),
      this.signer.on("session_update", (e) => {
        this.events.emit("session_update", e);
      }),
      this.signer.on("session_delete", (e) => {
        this.reset(),
          this.events.emit("session_delete", e),
          this.events.emit(
            "disconnect",
            ul(to({}, Rt("USER_DISCONNECTED")), {
              data: e.topic,
              name: "USER_DISCONNECTED",
            })
          );
      }),
      this.signer.on("display_uri", (e) => {
        var t, i;
        this.rpc.showQrModal &&
          ((t = this.modal) == null || t.closeModal(),
          (i = this.modal) == null || i.openModal({ uri: e })),
          this.events.emit("display_uri", e);
      });
  }
  switchEthereumChain(e) {
    this.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: e.toString(16) }],
    });
  }
  isCompatibleChainId(e) {
    return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(e) {
    return `${this.namespace}:${e}`;
  }
  parseChainId(e) {
    return Number(e.split(":")[1]);
  }
  setChainIds(e) {
    const t = e
      .filter((i) => this.isCompatibleChainId(i))
      .map((i) => this.parseChainId(i));
    t.length &&
      ((this.chainId = t[0]),
      this.events.emit("chainChanged", Rc(this.chainId)),
      this.persist());
  }
  setChainId(e) {
    if (this.isCompatibleChainId(e)) {
      const t = this.parseChainId(e);
      (this.chainId = t), this.switchEthereumChain(t);
    }
  }
  parseAccountId(e) {
    const [t, i, s] = e.split(":");
    return { chainId: `${t}:${i}`, address: s };
  }
  setAccounts(e) {
    (this.accounts = e
      .filter(
        (t) =>
          this.parseChainId(this.parseAccountId(t).chainId) === this.chainId
      )
      .map((t) => this.parseAccountId(t).address)),
      this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(e) {
    var t, i;
    const s = (t = e == null ? void 0 : e.chains) != null ? t : [],
      a = (i = e == null ? void 0 : e.optionalChains) != null ? i : [],
      u = s.concat(a);
    if (!u.length)
      throw new Error(
        "No chains specified in either `chains` or `optionalChains`"
      );
    const h = s.length ? (e == null ? void 0 : e.methods) || ql : [],
      p = s.length ? (e == null ? void 0 : e.events) || jl : [],
      d = (e == null ? void 0 : e.optionalMethods) || [],
      b = (e == null ? void 0 : e.optionalEvents) || [],
      E = (e == null ? void 0 : e.rpcMap) || this.buildRpcMap(u, e.projectId),
      D = (e == null ? void 0 : e.qrModalOptions) || void 0;
    return {
      chains: s == null ? void 0 : s.map((S) => this.formatChainId(S)),
      optionalChains: a.map((S) => this.formatChainId(S)),
      methods: h,
      events: p,
      optionalMethods: d,
      optionalEvents: b,
      rpcMap: E,
      showQrModal: !!(e != null && e.showQrModal),
      qrModalOptions: D,
      projectId: e.projectId,
      metadata: e.metadata,
    };
  }
  buildRpcMap(e, t) {
    const i = {};
    return (
      e.forEach((s) => {
        i[s] = this.getRpcUrl(s, t);
      }),
      i
    );
  }
  async initialize(e) {
    if (
      ((this.rpc = this.getRpcConfig(e)),
      (this.chainId = this.rpc.chains.length
        ? iu(this.rpc.chains)
        : iu(this.rpc.optionalChains)),
      (this.signer = await xM.init({
        projectId: this.rpc.projectId,
        metadata: this.rpc.metadata,
        disableProviderPing: e.disableProviderPing,
        relayUrl: e.relayUrl,
        storageOptions: e.storageOptions,
      })),
      this.registerEventListeners(),
      await this.loadPersistedSession(),
      this.rpc.showQrModal)
    ) {
      let t;
      try {
        const { WalletConnectModal: i } = await l_(
          () => import("./index-Cwf3_-uA.js").then((s) => s.i),
          __vite__mapDeps([0, 1, 2])
        );
        t = i;
      } catch {
        throw new Error(
          "To use QR modal, please install @walletconnect/modal package"
        );
      }
      if (t)
        try {
          this.modal = new t(
            to({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
          );
        } catch (i) {
          throw (
            (this.signer.logger.error(i),
            new Error("Could not generate WalletConnectModal Instance"))
          );
        }
    }
  }
  loadConnectOpts(e) {
    if (!e) return;
    const { chains: t, optionalChains: i, rpcMap: s } = e;
    t &&
      un(t) &&
      ((this.rpc.chains = t.map((a) => this.formatChainId(a))),
      t.forEach((a) => {
        this.rpc.rpcMap[a] = (s == null ? void 0 : s[a]) || this.getRpcUrl(a);
      })),
      i &&
        un(i) &&
        ((this.rpc.optionalChains = []),
        (this.rpc.optionalChains =
          i == null ? void 0 : i.map((a) => this.formatChainId(a))),
        i.forEach((a) => {
          this.rpc.rpcMap[a] = (s == null ? void 0 : s[a]) || this.getRpcUrl(a);
        }));
  }
  getRpcUrl(e, t) {
    var i;
    return (
      ((i = this.rpc.rpcMap) == null ? void 0 : i[e]) ||
      `${OM}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
    );
  }
  async loadPersistedSession() {
    if (this.session)
      try {
        const e = await this.signer.client.core.storage.getItem(
            `${this.STORAGE_KEY}/chainId`
          ),
          t = this.session.namespaces[`${this.namespace}:${e}`]
            ? this.session.namespaces[`${this.namespace}:${e}`]
            : this.session.namespaces[this.namespace];
        this.setChainIds(
          e ? [this.formatChainId(e)] : t == null ? void 0 : t.accounts
        ),
          this.setAccounts(t == null ? void 0 : t.accounts);
      } catch (e) {
        this.signer.logger.error(
          "Failed to load persisted session, clearing state..."
        ),
          this.signer.logger.error(e),
          await this.disconnect().catch((t) => this.signer.logger.warn(t));
      }
  }
  reset() {
    (this.chainId = 1), (this.accounts = []);
  }
  persist() {
    this.session &&
      this.signer.client.core.storage.setItem(
        `${this.STORAGE_KEY}/chainId`,
        this.chainId
      );
  }
  parseAccounts(e) {
    return typeof e == "string" || e instanceof String
      ? [this.parseAccount(e)]
      : e.map((t) => this.parseAccount(t));
  }
}
const pC = vf;
export {
  pC as EthereumProvider,
  RM as OPTIONAL_EVENTS,
  NM as OPTIONAL_METHODS,
  jl as REQUIRED_EVENTS,
  ql as REQUIRED_METHODS,
  vf as default,
};
