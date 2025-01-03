import {
  n as _t,
  s as ce,
  T as N,
  t as U,
  a as C,
  o as ot,
  R as Bo,
  p as q,
  y as gt,
} from "./index-Cwf3_-uA.js";
import { m as Do } from "./index-CIemvVq0.js";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const de = window,
  pr =
    de.ShadowRoot &&
    (de.ShadyCSS === void 0 || de.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  wr = Symbol(),
  Ar = new WeakMap();
let oo = class {
  constructor(t, r, n) {
    if (((this._$cssResult$ = !0), n !== wr))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    (this.cssText = t), (this.t = r);
  }
  get styleSheet() {
    let t = this.o;
    const r = this.t;
    if (pr && t === void 0) {
      const n = r !== void 0 && r.length === 1;
      n && (t = Ar.get(r)),
        t === void 0 &&
          ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
          n && Ar.set(r, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Uo = (e) => new oo(typeof e == "string" ? e : e + "", void 0, wr),
  O = (e, ...t) => {
    const r =
      e.length === 1
        ? e[0]
        : t.reduce(
            (n, o, i) =>
              n +
              ((a) => {
                if (a._$cssResult$ === !0) return a.cssText;
                if (typeof a == "number") return a;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    a +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(o) +
              e[i + 1],
            e[0]
          );
    return new oo(r, e, wr);
  },
  Wo = (e, t) => {
    pr
      ? (e.adoptedStyleSheets = t.map((r) =>
          r instanceof CSSStyleSheet ? r : r.styleSheet
        ))
      : t.forEach((r) => {
          const n = document.createElement("style"),
            o = de.litNonce;
          o !== void 0 && n.setAttribute("nonce", o),
            (n.textContent = r.cssText),
            e.appendChild(n);
        });
  },
  _r = pr
    ? (e) => e
    : (e) =>
        e instanceof CSSStyleSheet
          ? ((t) => {
              let r = "";
              for (const n of t.cssRules) r += n.cssText;
              return Uo(r);
            })(e)
          : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var Ce;
const he = window,
  Ir = he.trustedTypes,
  Ho = Ir ? Ir.emptyScript : "",
  Tr = he.reactiveElementPolyfillSupport,
  ar = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          e = e ? Ho : null;
          break;
        case Object:
        case Array:
          e = e == null ? e : JSON.stringify(e);
      }
      return e;
    },
    fromAttribute(e, t) {
      let r = e;
      switch (t) {
        case Boolean:
          r = e !== null;
          break;
        case Number:
          r = e === null ? null : Number(e);
          break;
        case Object:
        case Array:
          try {
            r = JSON.parse(e);
          } catch {
            r = null;
          }
      }
      return r;
    },
  },
  no = (e, t) => t !== e && (t == t || e == e),
  Ee = {
    attribute: !0,
    type: String,
    converter: ar,
    reflect: !1,
    hasChanged: no,
  },
  sr = "finalized";
let $t = class extends HTMLElement {
  constructor() {
    super(),
      (this._$Ei = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$El = null),
      this._$Eu();
  }
  static addInitializer(t) {
    var r;
    this.finalize(),
      ((r = this.h) !== null && r !== void 0 ? r : (this.h = [])).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return (
      this.elementProperties.forEach((r, n) => {
        const o = this._$Ep(n, r);
        o !== void 0 && (this._$Ev.set(o, n), t.push(o));
      }),
      t
    );
  }
  static createProperty(t, r = Ee) {
    if (
      (r.state && (r.attribute = !1),
      this.finalize(),
      this.elementProperties.set(t, r),
      !r.noAccessor && !this.prototype.hasOwnProperty(t))
    ) {
      const n = typeof t == "symbol" ? Symbol() : "__" + t,
        o = this.getPropertyDescriptor(t, n, r);
      o !== void 0 && Object.defineProperty(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, r, n) {
    return {
      get() {
        return this[r];
      },
      set(o) {
        const i = this[t];
        (this[r] = o), this.requestUpdate(t, i, n);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || Ee;
  }
  static finalize() {
    if (this.hasOwnProperty(sr)) return !1;
    this[sr] = !0;
    const t = Object.getPrototypeOf(this);
    if (
      (t.finalize(),
      t.h !== void 0 && (this.h = [...t.h]),
      (this.elementProperties = new Map(t.elementProperties)),
      (this._$Ev = new Map()),
      this.hasOwnProperty("properties"))
    ) {
      const r = this.properties,
        n = [
          ...Object.getOwnPropertyNames(r),
          ...Object.getOwnPropertySymbols(r),
        ];
      for (const o of n) this.createProperty(o, r[o]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(t) {
    const r = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const o of n) r.unshift(_r(o));
    } else t !== void 0 && r.push(_r(t));
    return r;
  }
  static _$Ep(t, r) {
    const n = r.attribute;
    return n === !1
      ? void 0
      : typeof n == "string"
      ? n
      : typeof t == "string"
      ? t.toLowerCase()
      : void 0;
  }
  _$Eu() {
    var t;
    (this._$E_ = new Promise((r) => (this.enableUpdating = r))),
      (this._$AL = new Map()),
      this._$Eg(),
      this.requestUpdate(),
      (t = this.constructor.h) === null ||
        t === void 0 ||
        t.forEach((r) => r(this));
  }
  addController(t) {
    var r, n;
    ((r = this._$ES) !== null && r !== void 0 ? r : (this._$ES = [])).push(t),
      this.renderRoot !== void 0 &&
        this.isConnected &&
        ((n = t.hostConnected) === null || n === void 0 || n.call(t));
  }
  removeController(t) {
    var r;
    (r = this._$ES) === null ||
      r === void 0 ||
      r.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, r) => {
      this.hasOwnProperty(r) && (this._$Ei.set(r, this[r]), delete this[r]);
    });
  }
  createRenderRoot() {
    var t;
    const r =
      (t = this.shadowRoot) !== null && t !== void 0
        ? t
        : this.attachShadow(this.constructor.shadowRootOptions);
    return Wo(r, this.constructor.elementStyles), r;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      (t = this._$ES) === null ||
        t === void 0 ||
        t.forEach((r) => {
          var n;
          return (n = r.hostConnected) === null || n === void 0
            ? void 0
            : n.call(r);
        });
  }
  enableUpdating(t) {}
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null ||
      t === void 0 ||
      t.forEach((r) => {
        var n;
        return (n = r.hostDisconnected) === null || n === void 0
          ? void 0
          : n.call(r);
      });
  }
  attributeChangedCallback(t, r, n) {
    this._$AK(t, n);
  }
  _$EO(t, r, n = Ee) {
    var o;
    const i = this.constructor._$Ep(t, n);
    if (i !== void 0 && n.reflect === !0) {
      const a = (
        ((o = n.converter) === null || o === void 0
          ? void 0
          : o.toAttribute) !== void 0
          ? n.converter
          : ar
      ).toAttribute(r, n.type);
      (this._$El = t),
        a == null ? this.removeAttribute(i) : this.setAttribute(i, a),
        (this._$El = null);
    }
  }
  _$AK(t, r) {
    var n;
    const o = this.constructor,
      i = o._$Ev.get(t);
    if (i !== void 0 && this._$El !== i) {
      const a = o.getPropertyOptions(i),
        s =
          typeof a.converter == "function"
            ? { fromAttribute: a.converter }
            : ((n = a.converter) === null || n === void 0
                ? void 0
                : n.fromAttribute) !== void 0
            ? a.converter
            : ar;
      (this._$El = i),
        (this[i] = s.fromAttribute(r, a.type)),
        (this._$El = null);
    }
  }
  requestUpdate(t, r, n) {
    let o = !0;
    t !== void 0 &&
      (((n = n || this.constructor.getPropertyOptions(t)).hasChanged || no)(
        this[t],
        r
      )
        ? (this._$AL.has(t) || this._$AL.set(t, r),
          n.reflect === !0 &&
            this._$El !== t &&
            (this._$EC === void 0 && (this._$EC = new Map()),
            this._$EC.set(t, n)))
        : (o = !1)),
      !this.isUpdatePending && o && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (r) {
      Promise.reject(r);
    }
    const t = this.scheduleUpdate();
    return t != null && (await t), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Ei &&
        (this._$Ei.forEach((o, i) => (this[i] = o)), (this._$Ei = void 0));
    let r = !1;
    const n = this._$AL;
    try {
      (r = this.shouldUpdate(n)),
        r
          ? (this.willUpdate(n),
            (t = this._$ES) === null ||
              t === void 0 ||
              t.forEach((o) => {
                var i;
                return (i = o.hostUpdate) === null || i === void 0
                  ? void 0
                  : i.call(o);
              }),
            this.update(n))
          : this._$Ek();
    } catch (o) {
      throw ((r = !1), this._$Ek(), o);
    }
    r && this._$AE(n);
  }
  willUpdate(t) {}
  _$AE(t) {
    var r;
    (r = this._$ES) === null ||
      r === void 0 ||
      r.forEach((n) => {
        var o;
        return (o = n.hostUpdated) === null || o === void 0
          ? void 0
          : o.call(n);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
      this.updated(t);
  }
  _$Ek() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 &&
      (this._$EC.forEach((r, n) => this._$EO(n, this[n], r)),
      (this._$EC = void 0)),
      this._$Ek();
  }
  updated(t) {}
  firstUpdated(t) {}
};
($t[sr] = !0),
  ($t.elementProperties = new Map()),
  ($t.elementStyles = []),
  ($t.shadowRootOptions = { mode: "open" }),
  Tr == null || Tr({ ReactiveElement: $t }),
  ((Ce = he.reactiveElementVersions) !== null && Ce !== void 0
    ? Ce
    : (he.reactiveElementVersions = [])
  ).push("1.6.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var Ae;
const ue = window,
  It = ue.trustedTypes,
  kr = It ? It.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
  lr = "$lit$",
  rt = `lit$${(Math.random() + "").slice(9)}$`,
  io = "?" + rt,
  jo = `<${io}>`,
  ft = document,
  Zt = () => ft.createComment(""),
  Vt = (e) => e === null || (typeof e != "object" && typeof e != "function"),
  ao = Array.isArray,
  zo = (e) =>
    ao(e) || typeof (e == null ? void 0 : e[Symbol.iterator]) == "function",
  _e = `[ 	
\f\r]`,
  Pt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  Mr = /-->/g,
  Sr = />/g,
  lt = RegExp(
    `>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
    "g"
  ),
  Or = /'/g,
  Rr = /"/g,
  so = /^(?:script|style|textarea|title)$/i,
  lo =
    (e) =>
    (t, ...r) => ({ _$litType$: e, strings: t, values: r }),
  h = lo(1),
  L = lo(2),
  pt = Symbol.for("lit-noChange"),
  B = Symbol.for("lit-nothing"),
  Pr = new WeakMap(),
  ut = ft.createTreeWalker(ft, 129, null, !1);
function co(e, t) {
  if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return kr !== void 0 ? kr.createHTML(t) : t;
}
const Fo = (e, t) => {
  const r = e.length - 1,
    n = [];
  let o,
    i = t === 2 ? "<svg>" : "",
    a = Pt;
  for (let s = 0; s < r; s++) {
    const l = e[s];
    let c,
      d,
      b = -1,
      u = 0;
    for (; u < l.length && ((a.lastIndex = u), (d = a.exec(l)), d !== null); )
      (u = a.lastIndex),
        a === Pt
          ? d[1] === "!--"
            ? (a = Mr)
            : d[1] !== void 0
            ? (a = Sr)
            : d[2] !== void 0
            ? (so.test(d[2]) && (o = RegExp("</" + d[2], "g")), (a = lt))
            : d[3] !== void 0 && (a = lt)
          : a === lt
          ? d[0] === ">"
            ? ((a = o ?? Pt), (b = -1))
            : d[1] === void 0
            ? (b = -2)
            : ((b = a.lastIndex - d[2].length),
              (c = d[1]),
              (a = d[3] === void 0 ? lt : d[3] === '"' ? Rr : Or))
          : a === Rr || a === Or
          ? (a = lt)
          : a === Mr || a === Sr
          ? (a = Pt)
          : ((a = lt), (o = void 0));
    const m = a === lt && e[s + 1].startsWith("/>") ? " " : "";
    i +=
      a === Pt
        ? l + jo
        : b >= 0
        ? (n.push(c), l.slice(0, b) + lr + l.slice(b) + rt + m)
        : l + rt + (b === -2 ? (n.push(void 0), s) : m);
  }
  return [co(e, i + (e[r] || "<?>") + (t === 2 ? "</svg>" : "")), n];
};
class Kt {
  constructor({ strings: t, _$litType$: r }, n) {
    let o;
    this.parts = [];
    let i = 0,
      a = 0;
    const s = t.length - 1,
      l = this.parts,
      [c, d] = Fo(t, r);
    if (
      ((this.el = Kt.createElement(c, n)),
      (ut.currentNode = this.el.content),
      r === 2)
    ) {
      const b = this.el.content,
        u = b.firstChild;
      u.remove(), b.append(...u.childNodes);
    }
    for (; (o = ut.nextNode()) !== null && l.length < s; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) {
          const b = [];
          for (const u of o.getAttributeNames())
            if (u.endsWith(lr) || u.startsWith(rt)) {
              const m = d[a++];
              if ((b.push(u), m !== void 0)) {
                const v = o.getAttribute(m.toLowerCase() + lr).split(rt),
                  g = /([.?@])?(.*)/.exec(m);
                l.push({
                  type: 1,
                  index: i,
                  name: g[2],
                  strings: v,
                  ctor:
                    g[1] === "."
                      ? Vo
                      : g[1] === "?"
                      ? qo
                      : g[1] === "@"
                      ? Yo
                      : ve,
                });
              } else l.push({ type: 6, index: i });
            }
          for (const u of b) o.removeAttribute(u);
        }
        if (so.test(o.tagName)) {
          const b = o.textContent.split(rt),
            u = b.length - 1;
          if (u > 0) {
            o.textContent = It ? It.emptyScript : "";
            for (let m = 0; m < u; m++)
              o.append(b[m], Zt()),
                ut.nextNode(),
                l.push({ type: 2, index: ++i });
            o.append(b[u], Zt());
          }
        }
      } else if (o.nodeType === 8)
        if (o.data === io) l.push({ type: 2, index: i });
        else {
          let b = -1;
          for (; (b = o.data.indexOf(rt, b + 1)) !== -1; )
            l.push({ type: 7, index: i }), (b += rt.length - 1);
        }
      i++;
    }
  }
  static createElement(t, r) {
    const n = ft.createElement("template");
    return (n.innerHTML = t), n;
  }
}
function Tt(e, t, r = e, n) {
  var o, i, a, s;
  if (t === pt) return t;
  let l =
    n !== void 0
      ? (o = r._$Co) === null || o === void 0
        ? void 0
        : o[n]
      : r._$Cl;
  const c = Vt(t) ? void 0 : t._$litDirective$;
  return (
    (l == null ? void 0 : l.constructor) !== c &&
      ((i = l == null ? void 0 : l._$AO) === null ||
        i === void 0 ||
        i.call(l, !1),
      c === void 0 ? (l = void 0) : ((l = new c(e)), l._$AT(e, r, n)),
      n !== void 0
        ? (((a = (s = r)._$Co) !== null && a !== void 0 ? a : (s._$Co = []))[
            n
          ] = l)
        : (r._$Cl = l)),
    l !== void 0 && (t = Tt(e, l._$AS(e, t.values), l, n)),
    t
  );
}
class Zo {
  constructor(t, r) {
    (this._$AV = []), (this._$AN = void 0), (this._$AD = t), (this._$AM = r);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    var r;
    const {
        el: { content: n },
        parts: o,
      } = this._$AD,
      i = (
        (r = t == null ? void 0 : t.creationScope) !== null && r !== void 0
          ? r
          : ft
      ).importNode(n, !0);
    ut.currentNode = i;
    let a = ut.nextNode(),
      s = 0,
      l = 0,
      c = o[0];
    for (; c !== void 0; ) {
      if (s === c.index) {
        let d;
        c.type === 2
          ? (d = new Jt(a, a.nextSibling, this, t))
          : c.type === 1
          ? (d = new c.ctor(a, c.name, c.strings, this, t))
          : c.type === 6 && (d = new Jo(a, this, t)),
          this._$AV.push(d),
          (c = o[++l]);
      }
      s !== (c == null ? void 0 : c.index) && ((a = ut.nextNode()), s++);
    }
    return (ut.currentNode = ft), i;
  }
  v(t) {
    let r = 0;
    for (const n of this._$AV)
      n !== void 0 &&
        (n.strings !== void 0
          ? (n._$AI(t, n, r), (r += n.strings.length - 2))
          : n._$AI(t[r])),
        r++;
  }
}
class Jt {
  constructor(t, r, n, o) {
    var i;
    (this.type = 2),
      (this._$AH = B),
      (this._$AN = void 0),
      (this._$AA = t),
      (this._$AB = r),
      (this._$AM = n),
      (this.options = o),
      (this._$Cp =
        (i = o == null ? void 0 : o.isConnected) === null || i === void 0 || i);
  }
  get _$AU() {
    var t, r;
    return (r = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !==
      null && r !== void 0
      ? r
      : this._$Cp;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const r = this._$AM;
    return (
      r !== void 0 &&
        (t == null ? void 0 : t.nodeType) === 11 &&
        (t = r.parentNode),
      t
    );
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, r = this) {
    (t = Tt(this, t, r)),
      Vt(t)
        ? t === B || t == null || t === ""
          ? (this._$AH !== B && this._$AR(), (this._$AH = B))
          : t !== this._$AH && t !== pt && this._(t)
        : t._$litType$ !== void 0
        ? this.g(t)
        : t.nodeType !== void 0
        ? this.$(t)
        : zo(t)
        ? this.T(t)
        : this._(t);
  }
  k(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  $(t) {
    this._$AH !== t && (this._$AR(), (this._$AH = this.k(t)));
  }
  _(t) {
    this._$AH !== B && Vt(this._$AH)
      ? (this._$AA.nextSibling.data = t)
      : this.$(ft.createTextNode(t)),
      (this._$AH = t);
  }
  g(t) {
    var r;
    const { values: n, _$litType$: o } = t,
      i =
        typeof o == "number"
          ? this._$AC(t)
          : (o.el === void 0 &&
              (o.el = Kt.createElement(co(o.h, o.h[0]), this.options)),
            o);
    if (((r = this._$AH) === null || r === void 0 ? void 0 : r._$AD) === i)
      this._$AH.v(n);
    else {
      const a = new Zo(i, this),
        s = a.u(this.options);
      a.v(n), this.$(s), (this._$AH = a);
    }
  }
  _$AC(t) {
    let r = Pr.get(t.strings);
    return r === void 0 && Pr.set(t.strings, (r = new Kt(t))), r;
  }
  T(t) {
    ao(this._$AH) || ((this._$AH = []), this._$AR());
    const r = this._$AH;
    let n,
      o = 0;
    for (const i of t)
      o === r.length
        ? r.push((n = new Jt(this.k(Zt()), this.k(Zt()), this, this.options)))
        : (n = r[o]),
        n._$AI(i),
        o++;
    o < r.length && (this._$AR(n && n._$AB.nextSibling, o), (r.length = o));
  }
  _$AR(t = this._$AA.nextSibling, r) {
    var n;
    for (
      (n = this._$AP) === null || n === void 0 || n.call(this, !1, !0, r);
      t && t !== this._$AB;

    ) {
      const o = t.nextSibling;
      t.remove(), (t = o);
    }
  }
  setConnected(t) {
    var r;
    this._$AM === void 0 &&
      ((this._$Cp = t),
      (r = this._$AP) === null || r === void 0 || r.call(this, t));
  }
}
class ve {
  constructor(t, r, n, o, i) {
    (this.type = 1),
      (this._$AH = B),
      (this._$AN = void 0),
      (this.element = t),
      (this.name = r),
      (this._$AM = o),
      (this.options = i),
      n.length > 2 || n[0] !== "" || n[1] !== ""
        ? ((this._$AH = Array(n.length - 1).fill(new String())),
          (this.strings = n))
        : (this._$AH = B);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, r = this, n, o) {
    const i = this.strings;
    let a = !1;
    if (i === void 0)
      (t = Tt(this, t, r, 0)),
        (a = !Vt(t) || (t !== this._$AH && t !== pt)),
        a && (this._$AH = t);
    else {
      const s = t;
      let l, c;
      for (t = i[0], l = 0; l < i.length - 1; l++)
        (c = Tt(this, s[n + l], r, l)),
          c === pt && (c = this._$AH[l]),
          a || (a = !Vt(c) || c !== this._$AH[l]),
          c === B ? (t = B) : t !== B && (t += (c ?? "") + i[l + 1]),
          (this._$AH[l] = c);
    }
    a && !o && this.j(t);
  }
  j(t) {
    t === B
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, t ?? "");
  }
}
class Vo extends ve {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  j(t) {
    this.element[this.name] = t === B ? void 0 : t;
  }
}
const Ko = It ? It.emptyScript : "";
let qo = class extends ve {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  j(t) {
    t && t !== B
      ? this.element.setAttribute(this.name, Ko)
      : this.element.removeAttribute(this.name);
  }
};
class Yo extends ve {
  constructor(t, r, n, o, i) {
    super(t, r, n, o, i), (this.type = 5);
  }
  _$AI(t, r = this) {
    var n;
    if ((t = (n = Tt(this, t, r, 0)) !== null && n !== void 0 ? n : B) === pt)
      return;
    const o = this._$AH,
      i =
        (t === B && o !== B) ||
        t.capture !== o.capture ||
        t.once !== o.once ||
        t.passive !== o.passive,
      a = t !== B && (o === B || i);
    i && this.element.removeEventListener(this.name, this, o),
      a && this.element.addEventListener(this.name, this, t),
      (this._$AH = t);
  }
  handleEvent(t) {
    var r, n;
    typeof this._$AH == "function"
      ? this._$AH.call(
          (n =
            (r = this.options) === null || r === void 0 ? void 0 : r.host) !==
            null && n !== void 0
            ? n
            : this.element,
          t
        )
      : this._$AH.handleEvent(t);
  }
}
let Jo = class {
  constructor(t, r, n) {
    (this.element = t),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = r),
      (this.options = n);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Tt(this, t);
  }
};
const Lr = ue.litHtmlPolyfillSupport;
Lr == null || Lr(Kt, Jt),
  ((Ae = ue.litHtmlVersions) !== null && Ae !== void 0
    ? Ae
    : (ue.litHtmlVersions = [])
  ).push("2.8.0");
const Go = (e, t, r) => {
  var n, o;
  const i =
    (n = r == null ? void 0 : r.renderBefore) !== null && n !== void 0 ? n : t;
  let a = i._$litPart$;
  if (a === void 0) {
    const s =
      (o = r == null ? void 0 : r.renderBefore) !== null && o !== void 0
        ? o
        : null;
    i._$litPart$ = a = new Jt(t.insertBefore(Zt(), s), s, void 0, r ?? {});
  }
  return a._$AI(e), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var Ie, Te;
class A extends $t {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Do = void 0);
  }
  createRenderRoot() {
    var t, r;
    const n = super.createRenderRoot();
    return (
      ((t = (r = this.renderOptions).renderBefore) !== null && t !== void 0) ||
        (r.renderBefore = n.firstChild),
      n
    );
  }
  update(t) {
    const r = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(t),
      (this._$Do = Go(r, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var t;
    super.connectedCallback(),
      (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(),
      (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return pt;
  }
}
(A.finalized = !0),
  (A._$litElement$ = !0),
  (Ie = globalThis.litElementHydrateSupport) === null ||
    Ie === void 0 ||
    Ie.call(globalThis, { LitElement: A });
const Nr = globalThis.litElementPolyfillSupport;
Nr == null || Nr({ LitElement: A });
((Te = globalThis.litElementVersions) !== null && Te !== void 0
  ? Te
  : (globalThis.litElementVersions = [])
).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const I = (e) => (t) =>
  typeof t == "function"
    ? ((r, n) => (customElements.define(r, n), n))(e, t)
    : ((r, n) => {
        const { kind: o, elements: i } = n;
        return {
          kind: o,
          elements: i,
          finisher(a) {
            customElements.define(r, a);
          },
        };
      })(e, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Qo = (e, t) =>
    t.kind === "method" && t.descriptor && !("value" in t.descriptor)
      ? {
          ...t,
          finisher(r) {
            r.createProperty(t.key, e);
          },
        }
      : {
          kind: "field",
          key: Symbol(),
          placement: "own",
          descriptor: {},
          originalKey: t.key,
          initializer() {
            typeof t.initializer == "function" &&
              (this[t.key] = t.initializer.call(this));
          },
          finisher(r) {
            r.createProperty(t.key, e);
          },
        },
  Xo = (e, t, r) => {
    t.constructor.createProperty(r, e);
  };
function $(e) {
  return (t, r) => (r !== void 0 ? Xo(e, t, r) : Qo(e, t));
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function W(e) {
  return $({ ...e, state: !0 });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var ke;
((ke = window.HTMLSlotElement) === null || ke === void 0
  ? void 0
  : ke.prototype.assignedElements) != null;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const tn = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
  },
  en =
    (e) =>
    (...t) => ({ _$litDirective$: e, values: t });
class rn {
  constructor(t) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, r, n) {
    (this._$Ct = t), (this._$AM = r), (this._$Ci = n);
  }
  _$AS(t, r) {
    return this.update(t, r);
  }
  update(t, r) {
    return this.render(...r);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const G = en(
  class extends rn {
    constructor(e) {
      var t;
      if (
        (super(e),
        e.type !== tn.ATTRIBUTE ||
          e.name !== "class" ||
          ((t = e.strings) === null || t === void 0 ? void 0 : t.length) > 2)
      )
        throw Error(
          "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
        );
    }
    render(e) {
      return (
        " " +
        Object.keys(e)
          .filter((t) => e[t])
          .join(" ") +
        " "
      );
    }
    update(e, [t]) {
      var r, n;
      if (this.it === void 0) {
        (this.it = new Set()),
          e.strings !== void 0 &&
            (this.nt = new Set(
              e.strings
                .join(" ")
                .split(/\s/)
                .filter((i) => i !== "")
            ));
        for (const i in t)
          t[i] &&
            !(!((r = this.nt) === null || r === void 0) && r.has(i)) &&
            this.it.add(i);
        return this.render(t);
      }
      const o = e.element.classList;
      this.it.forEach((i) => {
        i in t || (o.remove(i), this.it.delete(i));
      });
      for (const i in t) {
        const a = !!t[i];
        a === this.it.has(i) ||
          (!((n = this.nt) === null || n === void 0) && n.has(i)) ||
          (a ? (o.add(i), this.it.add(i)) : (o.remove(i), this.it.delete(i)));
      }
      return pt;
    }
  }
);
function on(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
const ho = (e, t, r) => Math.min(Math.max(r, e), t),
  j = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: "ease" },
  me = (e) => typeof e == "number",
  Et = (e) => Array.isArray(e) && !me(e[0]),
  nn = (e, t, r) => {
    const n = t - e;
    return ((((r - e) % n) + n) % n) + e;
  };
function an(e, t) {
  return Et(e) ? e[nn(0, e.length, t)] : e;
}
const uo = (e, t, r) => -r * e + r * t + e,
  mo = () => {},
  it = (e) => e,
  vr = (e, t, r) => (t - e === 0 ? 1 : (r - e) / (t - e));
function go(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = vr(0, t, n);
    e.push(uo(r, 1, o));
  }
}
function sn(e) {
  const t = [0];
  return go(t, e - 1), t;
}
function ln(e, t = sn(e.length), r = it) {
  const n = e.length,
    o = n - t.length;
  return (
    o > 0 && go(t, o),
    (i) => {
      let a = 0;
      for (; a < n - 2 && !(i < t[a + 1]); a++);
      let s = ho(0, 1, vr(t[a], t[a + 1], i));
      return (s = an(r, a)(s)), uo(e[a], e[a + 1], s);
    }
  );
}
const fo = (e) => Array.isArray(e) && me(e[0]),
  cr = (e) => typeof e == "object" && !!e.createAnimation,
  kt = (e) => typeof e == "function",
  cn = (e) => typeof e == "string",
  zt = { ms: (e) => e * 1e3, s: (e) => e / 1e3 },
  po = (e, t, r) =>
    (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e,
  dn = 1e-7,
  hn = 12;
function un(e, t, r, n, o) {
  let i,
    a,
    s = 0;
  do (a = t + (r - t) / 2), (i = po(a, n, o) - e), i > 0 ? (r = a) : (t = a);
  while (Math.abs(i) > dn && ++s < hn);
  return a;
}
function jt(e, t, r, n) {
  if (e === t && r === n) return it;
  const o = (i) => un(i, 0, 1, e, r);
  return (i) => (i === 0 || i === 1 ? i : po(o(i), t, n));
}
const mn =
    (e, t = "end") =>
    (r) => {
      r = t === "end" ? Math.min(r, 0.999) : Math.max(r, 0.001);
      const n = r * e,
        o = t === "end" ? Math.floor(n) : Math.ceil(n);
      return ho(0, 1, o / e);
    },
  Br = {
    ease: jt(0.25, 0.1, 0.25, 1),
    "ease-in": jt(0.42, 0, 1, 1),
    "ease-in-out": jt(0.42, 0, 0.58, 1),
    "ease-out": jt(0, 0, 0.58, 1),
  },
  gn = /\((.*?)\)/;
function Dr(e) {
  if (kt(e)) return e;
  if (fo(e)) return jt(...e);
  if (Br[e]) return Br[e];
  if (e.startsWith("steps")) {
    const t = gn.exec(e);
    if (t) {
      const r = t[1].split(",");
      return mn(parseFloat(r[0]), r[1].trim());
    }
  }
  return it;
}
class wo {
  constructor(
    t,
    r = [0, 1],
    {
      easing: n,
      duration: o = j.duration,
      delay: i = j.delay,
      endDelay: a = j.endDelay,
      repeat: s = j.repeat,
      offset: l,
      direction: c = "normal",
    } = {}
  ) {
    if (
      ((this.startTime = null),
      (this.rate = 1),
      (this.t = 0),
      (this.cancelTimestamp = null),
      (this.easing = it),
      (this.duration = 0),
      (this.totalDuration = 0),
      (this.repeat = 0),
      (this.playState = "idle"),
      (this.finished = new Promise((b, u) => {
        (this.resolve = b), (this.reject = u);
      })),
      (n = n || j.easing),
      cr(n))
    ) {
      const b = n.createAnimation(r);
      (n = b.easing), (r = b.keyframes || r), (o = b.duration || o);
    }
    (this.repeat = s),
      (this.easing = Et(n) ? it : Dr(n)),
      this.updateDuration(o);
    const d = ln(r, l, Et(n) ? n.map(Dr) : it);
    (this.tick = (b) => {
      var u;
      i = i;
      let m = 0;
      this.pauseTime !== void 0
        ? (m = this.pauseTime)
        : (m = (b - this.startTime) * this.rate),
        (this.t = m),
        (m /= 1e3),
        (m = Math.max(m - i, 0)),
        this.playState === "finished" &&
          this.pauseTime === void 0 &&
          (m = this.totalDuration);
      const v = m / this.duration;
      let g = Math.floor(v),
        E = v % 1;
      !E && v >= 1 && (E = 1), E === 1 && g--;
      const f = g % 2;
      (c === "reverse" ||
        (c === "alternate" && f) ||
        (c === "alternate-reverse" && !f)) &&
        (E = 1 - E);
      const y = m >= this.totalDuration ? 1 : Math.min(E, 1),
        w = d(this.easing(y));
      t(w),
        this.pauseTime === void 0 &&
        (this.playState === "finished" || m >= this.totalDuration + a)
          ? ((this.playState = "finished"),
            (u = this.resolve) === null || u === void 0 || u.call(this, w))
          : this.playState !== "idle" &&
            (this.frameRequestId = requestAnimationFrame(this.tick));
    }),
      this.play();
  }
  play() {
    const t = performance.now();
    (this.playState = "running"),
      this.pauseTime !== void 0
        ? (this.startTime = t - this.pauseTime)
        : this.startTime || (this.startTime = t),
      (this.cancelTimestamp = this.startTime),
      (this.pauseTime = void 0),
      (this.frameRequestId = requestAnimationFrame(this.tick));
  }
  pause() {
    (this.playState = "paused"), (this.pauseTime = this.t);
  }
  finish() {
    (this.playState = "finished"), this.tick(0);
  }
  stop() {
    var t;
    (this.playState = "idle"),
      this.frameRequestId !== void 0 &&
        cancelAnimationFrame(this.frameRequestId),
      (t = this.reject) === null || t === void 0 || t.call(this, !1);
  }
  cancel() {
    this.stop(), this.tick(this.cancelTimestamp);
  }
  reverse() {
    this.rate *= -1;
  }
  commitStyles() {}
  updateDuration(t) {
    (this.duration = t), (this.totalDuration = t * (this.repeat + 1));
  }
  get currentTime() {
    return this.t;
  }
  set currentTime(t) {
    this.pauseTime !== void 0 || this.rate === 0
      ? (this.pauseTime = t)
      : (this.startTime = performance.now() - t / this.rate);
  }
  get playbackRate() {
    return this.rate;
  }
  set playbackRate(t) {
    this.rate = t;
  }
}
class fn {
  setAnimation(t) {
    (this.animation = t),
      t == null || t.finished.then(() => this.clearAnimation()).catch(() => {});
  }
  clearAnimation() {
    this.animation = this.generator = void 0;
  }
}
const Me = new WeakMap();
function vo(e) {
  return (
    Me.has(e) || Me.set(e, { transforms: [], values: new Map() }), Me.get(e)
  );
}
function pn(e, t) {
  return e.has(t) || e.set(t, new fn()), e.get(t);
}
const wn = ["", "X", "Y", "Z"],
  vn = ["translate", "scale", "rotate", "skew"],
  ge = { x: "translateX", y: "translateY", z: "translateZ" },
  Ur = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: (e) => e + "deg",
  },
  bn = {
    translate: {
      syntax: "<length-percentage>",
      initialValue: "0px",
      toDefaultUnit: (e) => e + "px",
    },
    rotate: Ur,
    scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: it },
    skew: Ur,
  },
  qt = new Map(),
  br = (e) => `--motion-${e}`,
  fe = ["x", "y", "z"];
vn.forEach((e) => {
  wn.forEach((t) => {
    fe.push(e + t), qt.set(br(e + t), bn[e]);
  });
});
const yn = (e, t) => fe.indexOf(e) - fe.indexOf(t),
  xn = new Set(fe),
  bo = (e) => xn.has(e),
  $n = (e, t) => {
    ge[t] && (t = ge[t]);
    const { transforms: r } = vo(e);
    on(r, t), (e.style.transform = Cn(r));
  },
  Cn = (e) => e.sort(yn).reduce(En, "").trim(),
  En = (e, t) => `${e} ${t}(var(${br(t)}))`,
  dr = (e) => e.startsWith("--"),
  Wr = new Set();
function An(e) {
  if (!Wr.has(e)) {
    Wr.add(e);
    try {
      const { syntax: t, initialValue: r } = qt.has(e) ? qt.get(e) : {};
      CSS.registerProperty({
        name: e,
        inherits: !1,
        syntax: t,
        initialValue: r,
      });
    } catch {}
  }
}
const Se = (e, t) => document.createElement("div").animate(e, t),
  Hr = {
    cssRegisterProperty: () =>
      typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
      try {
        Se({ opacity: [1] });
      } catch {
        return !1;
      }
      return !0;
    },
    finished: () => !!Se({ opacity: [0, 1] }, { duration: 0.001 }).finished,
    linearEasing: () => {
      try {
        Se({ opacity: 0 }, { easing: "linear(0, 1)" });
      } catch {
        return !1;
      }
      return !0;
    },
  },
  Oe = {},
  Ct = {};
for (const e in Hr)
  Ct[e] = () => (Oe[e] === void 0 && (Oe[e] = Hr[e]()), Oe[e]);
const _n = 0.015,
  In = (e, t) => {
    let r = "";
    const n = Math.round(t / _n);
    for (let o = 0; o < n; o++) r += e(vr(0, n - 1, o)) + ", ";
    return r.substring(0, r.length - 2);
  },
  jr = (e, t) =>
    kt(e)
      ? Ct.linearEasing()
        ? `linear(${In(e, t)})`
        : j.easing
      : fo(e)
      ? Tn(e)
      : e,
  Tn = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`;
function kn(e, t) {
  for (let r = 0; r < e.length; r++)
    e[r] === null && (e[r] = r ? e[r - 1] : t());
  return e;
}
const Mn = (e) => (Array.isArray(e) ? e : [e]);
function hr(e) {
  return ge[e] && (e = ge[e]), bo(e) ? br(e) : e;
}
const Xt = {
  get: (e, t) => {
    t = hr(t);
    let r = dr(t) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
    if (!r && r !== 0) {
      const n = qt.get(t);
      n && (r = n.initialValue);
    }
    return r;
  },
  set: (e, t, r) => {
    (t = hr(t)), dr(t) ? e.style.setProperty(t, r) : (e.style[t] = r);
  },
};
function yo(e, t = !0) {
  if (!(!e || e.playState === "finished"))
    try {
      e.stop ? e.stop() : (t && e.commitStyles(), e.cancel());
    } catch {}
}
function Sn(e, t) {
  var r;
  let n = (t == null ? void 0 : t.toDefaultUnit) || it;
  const o = e[e.length - 1];
  if (cn(o)) {
    const i =
      ((r = o.match(/(-?[\d.]+)([a-z%]*)/)) === null || r === void 0
        ? void 0
        : r[2]) || "";
    i && (n = (a) => a + i);
  }
  return n;
}
function On() {
  return window.__MOTION_DEV_TOOLS_RECORD;
}
function Rn(e, t, r, n = {}, o) {
  const i = On(),
    a = n.record !== !1 && i;
  let s,
    {
      duration: l = j.duration,
      delay: c = j.delay,
      endDelay: d = j.endDelay,
      repeat: b = j.repeat,
      easing: u = j.easing,
      persist: m = !1,
      direction: v,
      offset: g,
      allowWebkitAcceleration: E = !1,
    } = n;
  const f = vo(e),
    y = bo(t);
  let w = Ct.waapi();
  y && $n(e, t);
  const p = hr(t),
    T = pn(f.values, p),
    k = qt.get(p);
  return (
    yo(T.animation, !(cr(u) && T.generator) && n.record !== !1),
    () => {
      const P = () => {
        var S, F;
        return (F =
          (S = Xt.get(e, p)) !== null && S !== void 0
            ? S
            : k == null
            ? void 0
            : k.initialValue) !== null && F !== void 0
          ? F
          : 0;
      };
      let M = kn(Mn(r), P);
      const z = Sn(M, k);
      if (cr(u)) {
        const S = u.createAnimation(M, t !== "opacity", P, p, T);
        (u = S.easing), (M = S.keyframes || M), (l = S.duration || l);
      }
      if (
        (dr(p) && (Ct.cssRegisterProperty() ? An(p) : (w = !1)),
        y && !Ct.linearEasing() && (kt(u) || (Et(u) && u.some(kt))) && (w = !1),
        w)
      ) {
        k && (M = M.map((Z) => (me(Z) ? k.toDefaultUnit(Z) : Z))),
          M.length === 1 && (!Ct.partialKeyframes() || a) && M.unshift(P());
        const S = {
          delay: zt.ms(c),
          duration: zt.ms(l),
          endDelay: zt.ms(d),
          easing: Et(u) ? void 0 : jr(u, l),
          direction: v,
          iterations: b + 1,
          fill: "both",
        };
        (s = e.animate(
          {
            [p]: M,
            offset: g,
            easing: Et(u) ? u.map((Z) => jr(Z, l)) : void 0,
          },
          S
        )),
          s.finished ||
            (s.finished = new Promise((Z, V) => {
              (s.onfinish = Z), (s.oncancel = V);
            }));
        const F = M[M.length - 1];
        s.finished
          .then(() => {
            m || (Xt.set(e, p, F), s.cancel());
          })
          .catch(mo),
          E || (s.playbackRate = 1.000001);
      } else if (o && y)
        (M = M.map((S) => (typeof S == "string" ? parseFloat(S) : S))),
          M.length === 1 && M.unshift(parseFloat(P())),
          (s = new o(
            (S) => {
              Xt.set(e, p, z ? z(S) : S);
            },
            M,
            Object.assign(Object.assign({}, n), { duration: l, easing: u })
          ));
      else {
        const S = M[M.length - 1];
        Xt.set(e, p, k && me(S) ? k.toDefaultUnit(S) : S);
      }
      return (
        a &&
          i(
            e,
            t,
            M,
            { duration: l, delay: c, easing: u, repeat: b, offset: g },
            "motion-one"
          ),
        T.setAnimation(s),
        s
      );
    }
  );
}
const Pn = (e, t) =>
  e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e);
function Ln(e, t) {
  return (
    typeof e == "string"
      ? (e = document.querySelectorAll(e))
      : e instanceof Element && (e = [e]),
    Array.from(e || [])
  );
}
const Nn = (e) => e(),
  xo = (e, t, r = j.duration) =>
    new Proxy(
      { animations: e.map(Nn).filter(Boolean), duration: r, options: t },
      Dn
    ),
  Bn = (e) => e.animations[0],
  Dn = {
    get: (e, t) => {
      const r = Bn(e);
      switch (t) {
        case "duration":
          return e.duration;
        case "currentTime":
          return zt.s((r == null ? void 0 : r[t]) || 0);
        case "playbackRate":
        case "playState":
          return r == null ? void 0 : r[t];
        case "finished":
          return (
            e.finished ||
              (e.finished = Promise.all(e.animations.map(Un)).catch(mo)),
            e.finished
          );
        case "stop":
          return () => {
            e.animations.forEach((n) => yo(n));
          };
        case "forEachNative":
          return (n) => {
            e.animations.forEach((o) => n(o, e));
          };
        default:
          return typeof (r == null ? void 0 : r[t]) > "u"
            ? void 0
            : () => e.animations.forEach((n) => n[t]());
      }
    },
    set: (e, t, r) => {
      switch (t) {
        case "currentTime":
          r = zt.ms(r);
        case "playbackRate":
          for (let n = 0; n < e.animations.length; n++) e.animations[n][t] = r;
          return !0;
      }
      return !1;
    },
  },
  Un = (e) => e.finished;
function Wn(e, t, r) {
  return kt(e) ? e(t, r) : e;
}
function Hn(e) {
  return function (r, n, o = {}) {
    r = Ln(r);
    const i = r.length,
      a = [];
    for (let s = 0; s < i; s++) {
      const l = r[s];
      for (const c in n) {
        const d = Pn(o, c);
        d.delay = Wn(d.delay, s, i);
        const b = Rn(l, c, n[c], d, e);
        a.push(b);
      }
    }
    return xo(a, o, o.duration);
  };
}
const jn = Hn(wo);
function zn(e, t = {}) {
  return xo(
    [
      () => {
        const r = new wo(e, [0, 1], t);
        return r.finished.catch(() => {}), r;
      },
    ],
    t,
    t.duration
  );
}
function mt(e, t, r) {
  return (kt(e) ? zn : jn)(e, t, r);
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const D = (e) => e ?? B;
var Gt = {},
  Fn = function () {
    return (
      typeof Promise == "function" &&
      Promise.prototype &&
      Promise.prototype.then
    );
  },
  $o = {},
  H = {};
let yr;
const Zn = [
  0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655,
  733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921,
  2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706,
];
H.getSymbolSize = function (t) {
  if (!t) throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
};
H.getSymbolTotalCodewords = function (t) {
  return Zn[t];
};
H.getBCHDigit = function (e) {
  let t = 0;
  for (; e !== 0; ) t++, (e >>>= 1);
  return t;
};
H.setToSJISFunction = function (t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  yr = t;
};
H.isKanjiModeEnabled = function () {
  return typeof yr < "u";
};
H.toSJIS = function (t) {
  return yr(t);
};
var be = {};
(function (e) {
  (e.L = { bit: 1 }),
    (e.M = { bit: 0 }),
    (e.Q = { bit: 3 }),
    (e.H = { bit: 2 });
  function t(r) {
    if (typeof r != "string") throw new Error("Param is not a string");
    switch (r.toLowerCase()) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + r);
    }
  }
  (e.isValid = function (n) {
    return n && typeof n.bit < "u" && n.bit >= 0 && n.bit < 4;
  }),
    (e.from = function (n, o) {
      if (e.isValid(n)) return n;
      try {
        return t(n);
      } catch {
        return o;
      }
    });
})(be);
function Co() {
  (this.buffer = []), (this.length = 0);
}
Co.prototype = {
  get: function (e) {
    const t = Math.floor(e / 8);
    return ((this.buffer[t] >>> (7 - (e % 8))) & 1) === 1;
  },
  put: function (e, t) {
    for (let r = 0; r < t; r++) this.putBit(((e >>> (t - r - 1)) & 1) === 1);
  },
  getLengthInBits: function () {
    return this.length;
  },
  putBit: function (e) {
    const t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0),
      e && (this.buffer[t] |= 128 >>> this.length % 8),
      this.length++;
  },
};
var Vn = Co;
function Qt(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  (this.size = e),
    (this.data = new Uint8Array(e * e)),
    (this.reservedBit = new Uint8Array(e * e));
}
Qt.prototype.set = function (e, t, r, n) {
  const o = e * this.size + t;
  (this.data[o] = r), n && (this.reservedBit[o] = !0);
};
Qt.prototype.get = function (e, t) {
  return this.data[e * this.size + t];
};
Qt.prototype.xor = function (e, t, r) {
  this.data[e * this.size + t] ^= r;
};
Qt.prototype.isReserved = function (e, t) {
  return this.reservedBit[e * this.size + t];
};
var Kn = Qt,
  Eo = {};
(function (e) {
  const t = H.getSymbolSize;
  (e.getRowColCoords = function (n) {
    if (n === 1) return [];
    const o = Math.floor(n / 7) + 2,
      i = t(n),
      a = i === 145 ? 26 : Math.ceil((i - 13) / (2 * o - 2)) * 2,
      s = [i - 7];
    for (let l = 1; l < o - 1; l++) s[l] = s[l - 1] - a;
    return s.push(6), s.reverse();
  }),
    (e.getPositions = function (n) {
      const o = [],
        i = e.getRowColCoords(n),
        a = i.length;
      for (let s = 0; s < a; s++)
        for (let l = 0; l < a; l++)
          (s === 0 && l === 0) ||
            (s === 0 && l === a - 1) ||
            (s === a - 1 && l === 0) ||
            o.push([i[s], i[l]]);
      return o;
    });
})(Eo);
var Ao = {};
const qn = H.getSymbolSize,
  zr = 7;
Ao.getPositions = function (t) {
  const r = qn(t);
  return [
    [0, 0],
    [r - zr, 0],
    [0, r - zr],
  ];
};
var _o = {};
(function (e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7,
  };
  const t = { N1: 3, N2: 3, N3: 40, N4: 10 };
  (e.isValid = function (o) {
    return o != null && o !== "" && !isNaN(o) && o >= 0 && o <= 7;
  }),
    (e.from = function (o) {
      return e.isValid(o) ? parseInt(o, 10) : void 0;
    }),
    (e.getPenaltyN1 = function (o) {
      const i = o.size;
      let a = 0,
        s = 0,
        l = 0,
        c = null,
        d = null;
      for (let b = 0; b < i; b++) {
        (s = l = 0), (c = d = null);
        for (let u = 0; u < i; u++) {
          let m = o.get(b, u);
          m === c ? s++ : (s >= 5 && (a += t.N1 + (s - 5)), (c = m), (s = 1)),
            (m = o.get(u, b)),
            m === d ? l++ : (l >= 5 && (a += t.N1 + (l - 5)), (d = m), (l = 1));
        }
        s >= 5 && (a += t.N1 + (s - 5)), l >= 5 && (a += t.N1 + (l - 5));
      }
      return a;
    }),
    (e.getPenaltyN2 = function (o) {
      const i = o.size;
      let a = 0;
      for (let s = 0; s < i - 1; s++)
        for (let l = 0; l < i - 1; l++) {
          const c =
            o.get(s, l) +
            o.get(s, l + 1) +
            o.get(s + 1, l) +
            o.get(s + 1, l + 1);
          (c === 4 || c === 0) && a++;
        }
      return a * t.N2;
    }),
    (e.getPenaltyN3 = function (o) {
      const i = o.size;
      let a = 0,
        s = 0,
        l = 0;
      for (let c = 0; c < i; c++) {
        s = l = 0;
        for (let d = 0; d < i; d++)
          (s = ((s << 1) & 2047) | o.get(c, d)),
            d >= 10 && (s === 1488 || s === 93) && a++,
            (l = ((l << 1) & 2047) | o.get(d, c)),
            d >= 10 && (l === 1488 || l === 93) && a++;
      }
      return a * t.N3;
    }),
    (e.getPenaltyN4 = function (o) {
      let i = 0;
      const a = o.data.length;
      for (let l = 0; l < a; l++) i += o.data[l];
      return Math.abs(Math.ceil((i * 100) / a / 5) - 10) * t.N4;
    });
  function r(n, o, i) {
    switch (n) {
      case e.Patterns.PATTERN000:
        return (o + i) % 2 === 0;
      case e.Patterns.PATTERN001:
        return o % 2 === 0;
      case e.Patterns.PATTERN010:
        return i % 3 === 0;
      case e.Patterns.PATTERN011:
        return (o + i) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(o / 2) + Math.floor(i / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return ((o * i) % 2) + ((o * i) % 3) === 0;
      case e.Patterns.PATTERN110:
        return (((o * i) % 2) + ((o * i) % 3)) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (((o * i) % 3) + ((o + i) % 2)) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + n);
    }
  }
  (e.applyMask = function (o, i) {
    const a = i.size;
    for (let s = 0; s < a; s++)
      for (let l = 0; l < a; l++) i.isReserved(l, s) || i.xor(l, s, r(o, l, s));
  }),
    (e.getBestMask = function (o, i) {
      const a = Object.keys(e.Patterns).length;
      let s = 0,
        l = 1 / 0;
      for (let c = 0; c < a; c++) {
        i(c), e.applyMask(c, o);
        const d =
          e.getPenaltyN1(o) +
          e.getPenaltyN2(o) +
          e.getPenaltyN3(o) +
          e.getPenaltyN4(o);
        e.applyMask(c, o), d < l && ((l = d), (s = c));
      }
      return s;
    });
})(_o);
var ye = {};
const nt = be,
  te = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2,
    4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4,
    9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13,
    18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18,
    25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13,
    26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54,
    18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59,
    70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81,
  ],
  ee = [
    7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72,
    88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192,
    72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352,
    120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448,
    532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442,
    644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312,
    588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050,
    1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510,
    924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064,
    1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
    2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
  ];
ye.getBlocksCount = function (t, r) {
  switch (r) {
    case nt.L:
      return te[(t - 1) * 4 + 0];
    case nt.M:
      return te[(t - 1) * 4 + 1];
    case nt.Q:
      return te[(t - 1) * 4 + 2];
    case nt.H:
      return te[(t - 1) * 4 + 3];
    default:
      return;
  }
};
ye.getTotalCodewordsCount = function (t, r) {
  switch (r) {
    case nt.L:
      return ee[(t - 1) * 4 + 0];
    case nt.M:
      return ee[(t - 1) * 4 + 1];
    case nt.Q:
      return ee[(t - 1) * 4 + 2];
    case nt.H:
      return ee[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var Io = {},
  xe = {};
const Ft = new Uint8Array(512),
  pe = new Uint8Array(256);
(function () {
  let t = 1;
  for (let r = 0; r < 255; r++)
    (Ft[r] = t), (pe[t] = r), (t <<= 1), t & 256 && (t ^= 285);
  for (let r = 255; r < 512; r++) Ft[r] = Ft[r - 255];
})();
xe.log = function (t) {
  if (t < 1) throw new Error("log(" + t + ")");
  return pe[t];
};
xe.exp = function (t) {
  return Ft[t];
};
xe.mul = function (t, r) {
  return t === 0 || r === 0 ? 0 : Ft[pe[t] + pe[r]];
};
(function (e) {
  const t = xe;
  (e.mul = function (n, o) {
    const i = new Uint8Array(n.length + o.length - 1);
    for (let a = 0; a < n.length; a++)
      for (let s = 0; s < o.length; s++) i[a + s] ^= t.mul(n[a], o[s]);
    return i;
  }),
    (e.mod = function (n, o) {
      let i = new Uint8Array(n);
      for (; i.length - o.length >= 0; ) {
        const a = i[0];
        for (let l = 0; l < o.length; l++) i[l] ^= t.mul(o[l], a);
        let s = 0;
        for (; s < i.length && i[s] === 0; ) s++;
        i = i.slice(s);
      }
      return i;
    }),
    (e.generateECPolynomial = function (n) {
      let o = new Uint8Array([1]);
      for (let i = 0; i < n; i++) o = e.mul(o, new Uint8Array([1, t.exp(i)]));
      return o;
    });
})(Io);
const To = Io;
function xr(e) {
  (this.genPoly = void 0),
    (this.degree = e),
    this.degree && this.initialize(this.degree);
}
xr.prototype.initialize = function (t) {
  (this.degree = t), (this.genPoly = To.generateECPolynomial(this.degree));
};
xr.prototype.encode = function (t) {
  if (!this.genPoly) throw new Error("Encoder not initialized");
  const r = new Uint8Array(t.length + this.degree);
  r.set(t);
  const n = To.mod(r, this.genPoly),
    o = this.degree - n.length;
  if (o > 0) {
    const i = new Uint8Array(this.degree);
    return i.set(n, o), i;
  }
  return n;
};
var Yn = xr,
  ko = {},
  st = {},
  $r = {};
$r.isValid = function (t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var Y = {};
const Mo = "[0-9]+",
  Jn = "[A-Z $%*+\\-./:]+";
let Yt =
  "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Yt = Yt.replace(/u/g, "\\u");
const Gn =
  "(?:(?![A-Z0-9 $%*+\\-./:]|" +
  Yt +
  `)(?:.|[\r
]))+`;
Y.KANJI = new RegExp(Yt, "g");
Y.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
Y.BYTE = new RegExp(Gn, "g");
Y.NUMERIC = new RegExp(Mo, "g");
Y.ALPHANUMERIC = new RegExp(Jn, "g");
const Qn = new RegExp("^" + Yt + "$"),
  Xn = new RegExp("^" + Mo + "$"),
  ti = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
Y.testKanji = function (t) {
  return Qn.test(t);
};
Y.testNumeric = function (t) {
  return Xn.test(t);
};
Y.testAlphanumeric = function (t) {
  return ti.test(t);
};
(function (e) {
  const t = $r,
    r = Y;
  (e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
    (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
    (e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
    (e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
    (e.MIXED = { bit: -1 }),
    (e.getCharCountIndicator = function (i, a) {
      if (!i.ccBits) throw new Error("Invalid mode: " + i);
      if (!t.isValid(a)) throw new Error("Invalid version: " + a);
      return a >= 1 && a < 10
        ? i.ccBits[0]
        : a < 27
        ? i.ccBits[1]
        : i.ccBits[2];
    }),
    (e.getBestModeForData = function (i) {
      return r.testNumeric(i)
        ? e.NUMERIC
        : r.testAlphanumeric(i)
        ? e.ALPHANUMERIC
        : r.testKanji(i)
        ? e.KANJI
        : e.BYTE;
    }),
    (e.toString = function (i) {
      if (i && i.id) return i.id;
      throw new Error("Invalid mode");
    }),
    (e.isValid = function (i) {
      return i && i.bit && i.ccBits;
    });
  function n(o) {
    if (typeof o != "string") throw new Error("Param is not a string");
    switch (o.toLowerCase()) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + o);
    }
  }
  e.from = function (i, a) {
    if (e.isValid(i)) return i;
    try {
      return n(i);
    } catch {
      return a;
    }
  };
})(st);
(function (e) {
  const t = H,
    r = ye,
    n = be,
    o = st,
    i = $r,
    a = 7973,
    s = t.getBCHDigit(a);
  function l(u, m, v) {
    for (let g = 1; g <= 40; g++) if (m <= e.getCapacity(g, v, u)) return g;
  }
  function c(u, m) {
    return o.getCharCountIndicator(u, m) + 4;
  }
  function d(u, m) {
    let v = 0;
    return (
      u.forEach(function (g) {
        const E = c(g.mode, m);
        v += E + g.getBitsLength();
      }),
      v
    );
  }
  function b(u, m) {
    for (let v = 1; v <= 40; v++)
      if (d(u, v) <= e.getCapacity(v, m, o.MIXED)) return v;
  }
  (e.from = function (m, v) {
    return i.isValid(m) ? parseInt(m, 10) : v;
  }),
    (e.getCapacity = function (m, v, g) {
      if (!i.isValid(m)) throw new Error("Invalid QR Code version");
      typeof g > "u" && (g = o.BYTE);
      const E = t.getSymbolTotalCodewords(m),
        f = r.getTotalCodewordsCount(m, v),
        y = (E - f) * 8;
      if (g === o.MIXED) return y;
      const w = y - c(g, m);
      switch (g) {
        case o.NUMERIC:
          return Math.floor((w / 10) * 3);
        case o.ALPHANUMERIC:
          return Math.floor((w / 11) * 2);
        case o.KANJI:
          return Math.floor(w / 13);
        case o.BYTE:
        default:
          return Math.floor(w / 8);
      }
    }),
    (e.getBestVersionForData = function (m, v) {
      let g;
      const E = n.from(v, n.M);
      if (Array.isArray(m)) {
        if (m.length > 1) return b(m, E);
        if (m.length === 0) return 1;
        g = m[0];
      } else g = m;
      return l(g.mode, g.getLength(), E);
    }),
    (e.getEncodedBits = function (m) {
      if (!i.isValid(m) || m < 7) throw new Error("Invalid QR Code version");
      let v = m << 12;
      for (; t.getBCHDigit(v) - s >= 0; ) v ^= a << (t.getBCHDigit(v) - s);
      return (m << 12) | v;
    });
})(ko);
var So = {};
const ur = H,
  Oo = 1335,
  ei = 21522,
  Fr = ur.getBCHDigit(Oo);
So.getEncodedBits = function (t, r) {
  const n = (t.bit << 3) | r;
  let o = n << 10;
  for (; ur.getBCHDigit(o) - Fr >= 0; ) o ^= Oo << (ur.getBCHDigit(o) - Fr);
  return ((n << 10) | o) ^ ei;
};
var Ro = {};
const ri = st;
function Mt(e) {
  (this.mode = ri.NUMERIC), (this.data = e.toString());
}
Mt.getBitsLength = function (t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
};
Mt.prototype.getLength = function () {
  return this.data.length;
};
Mt.prototype.getBitsLength = function () {
  return Mt.getBitsLength(this.data.length);
};
Mt.prototype.write = function (t) {
  let r, n, o;
  for (r = 0; r + 3 <= this.data.length; r += 3)
    (n = this.data.substr(r, 3)), (o = parseInt(n, 10)), t.put(o, 10);
  const i = this.data.length - r;
  i > 0 &&
    ((n = this.data.substr(r)), (o = parseInt(n, 10)), t.put(o, i * 3 + 1));
};
var oi = Mt;
const ni = st,
  Re = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
  ];
function St(e) {
  (this.mode = ni.ALPHANUMERIC), (this.data = e);
}
St.getBitsLength = function (t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
St.prototype.getLength = function () {
  return this.data.length;
};
St.prototype.getBitsLength = function () {
  return St.getBitsLength(this.data.length);
};
St.prototype.write = function (t) {
  let r;
  for (r = 0; r + 2 <= this.data.length; r += 2) {
    let n = Re.indexOf(this.data[r]) * 45;
    (n += Re.indexOf(this.data[r + 1])), t.put(n, 11);
  }
  this.data.length % 2 && t.put(Re.indexOf(this.data[r]), 6);
};
var ii = St,
  ai = function (t) {
    for (var r = [], n = t.length, o = 0; o < n; o++) {
      var i = t.charCodeAt(o);
      if (i >= 55296 && i <= 56319 && n > o + 1) {
        var a = t.charCodeAt(o + 1);
        a >= 56320 &&
          a <= 57343 &&
          ((i = (i - 55296) * 1024 + a - 56320 + 65536), (o += 1));
      }
      if (i < 128) {
        r.push(i);
        continue;
      }
      if (i < 2048) {
        r.push((i >> 6) | 192), r.push((i & 63) | 128);
        continue;
      }
      if (i < 55296 || (i >= 57344 && i < 65536)) {
        r.push((i >> 12) | 224),
          r.push(((i >> 6) & 63) | 128),
          r.push((i & 63) | 128);
        continue;
      }
      if (i >= 65536 && i <= 1114111) {
        r.push((i >> 18) | 240),
          r.push(((i >> 12) & 63) | 128),
          r.push(((i >> 6) & 63) | 128),
          r.push((i & 63) | 128);
        continue;
      }
      r.push(239, 191, 189);
    }
    return new Uint8Array(r).buffer;
  };
const si = ai,
  li = st;
function Ot(e) {
  (this.mode = li.BYTE),
    typeof e == "string" && (e = si(e)),
    (this.data = new Uint8Array(e));
}
Ot.getBitsLength = function (t) {
  return t * 8;
};
Ot.prototype.getLength = function () {
  return this.data.length;
};
Ot.prototype.getBitsLength = function () {
  return Ot.getBitsLength(this.data.length);
};
Ot.prototype.write = function (e) {
  for (let t = 0, r = this.data.length; t < r; t++) e.put(this.data[t], 8);
};
var ci = Ot;
const di = st,
  hi = H;
function Rt(e) {
  (this.mode = di.KANJI), (this.data = e);
}
Rt.getBitsLength = function (t) {
  return t * 13;
};
Rt.prototype.getLength = function () {
  return this.data.length;
};
Rt.prototype.getBitsLength = function () {
  return Rt.getBitsLength(this.data.length);
};
Rt.prototype.write = function (e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let r = hi.toSJIS(this.data[t]);
    if (r >= 33088 && r <= 40956) r -= 33088;
    else if (r >= 57408 && r <= 60351) r -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " +
          this.data[t] +
          `
Make sure your charset is UTF-8`
      );
    (r = ((r >>> 8) & 255) * 192 + (r & 255)), e.put(r, 13);
  }
};
var ui = Rt;
(function (e) {
  const t = st,
    r = oi,
    n = ii,
    o = ci,
    i = ui,
    a = Y,
    s = H,
    l = Do;
  function c(f) {
    return unescape(encodeURIComponent(f)).length;
  }
  function d(f, y, w) {
    const p = [];
    let T;
    for (; (T = f.exec(w)) !== null; )
      p.push({ data: T[0], index: T.index, mode: y, length: T[0].length });
    return p;
  }
  function b(f) {
    const y = d(a.NUMERIC, t.NUMERIC, f),
      w = d(a.ALPHANUMERIC, t.ALPHANUMERIC, f);
    let p, T;
    return (
      s.isKanjiModeEnabled()
        ? ((p = d(a.BYTE, t.BYTE, f)), (T = d(a.KANJI, t.KANJI, f)))
        : ((p = d(a.BYTE_KANJI, t.BYTE, f)), (T = [])),
      y
        .concat(w, p, T)
        .sort(function (P, M) {
          return P.index - M.index;
        })
        .map(function (P) {
          return { data: P.data, mode: P.mode, length: P.length };
        })
    );
  }
  function u(f, y) {
    switch (y) {
      case t.NUMERIC:
        return r.getBitsLength(f);
      case t.ALPHANUMERIC:
        return n.getBitsLength(f);
      case t.KANJI:
        return i.getBitsLength(f);
      case t.BYTE:
        return o.getBitsLength(f);
    }
  }
  function m(f) {
    return f.reduce(function (y, w) {
      const p = y.length - 1 >= 0 ? y[y.length - 1] : null;
      return p && p.mode === w.mode
        ? ((y[y.length - 1].data += w.data), y)
        : (y.push(w), y);
    }, []);
  }
  function v(f) {
    const y = [];
    for (let w = 0; w < f.length; w++) {
      const p = f[w];
      switch (p.mode) {
        case t.NUMERIC:
          y.push([
            p,
            { data: p.data, mode: t.ALPHANUMERIC, length: p.length },
            { data: p.data, mode: t.BYTE, length: p.length },
          ]);
          break;
        case t.ALPHANUMERIC:
          y.push([p, { data: p.data, mode: t.BYTE, length: p.length }]);
          break;
        case t.KANJI:
          y.push([p, { data: p.data, mode: t.BYTE, length: c(p.data) }]);
          break;
        case t.BYTE:
          y.push([{ data: p.data, mode: t.BYTE, length: c(p.data) }]);
      }
    }
    return y;
  }
  function g(f, y) {
    const w = {},
      p = { start: {} };
    let T = ["start"];
    for (let k = 0; k < f.length; k++) {
      const P = f[k],
        M = [];
      for (let z = 0; z < P.length; z++) {
        const S = P[z],
          F = "" + k + z;
        M.push(F), (w[F] = { node: S, lastCount: 0 }), (p[F] = {});
        for (let Z = 0; Z < T.length; Z++) {
          const V = T[Z];
          w[V] && w[V].node.mode === S.mode
            ? ((p[V][F] =
                u(w[V].lastCount + S.length, S.mode) -
                u(w[V].lastCount, S.mode)),
              (w[V].lastCount += S.length))
            : (w[V] && (w[V].lastCount = S.length),
              (p[V][F] =
                u(S.length, S.mode) + 4 + t.getCharCountIndicator(S.mode, y)));
        }
      }
      T = M;
    }
    for (let k = 0; k < T.length; k++) p[T[k]].end = 0;
    return { map: p, table: w };
  }
  function E(f, y) {
    let w;
    const p = t.getBestModeForData(f);
    if (((w = t.from(y, p)), w !== t.BYTE && w.bit < p.bit))
      throw new Error(
        '"' +
          f +
          '" cannot be encoded with mode ' +
          t.toString(w) +
          `.
 Suggested mode is: ` +
          t.toString(p)
      );
    switch ((w === t.KANJI && !s.isKanjiModeEnabled() && (w = t.BYTE), w)) {
      case t.NUMERIC:
        return new r(f);
      case t.ALPHANUMERIC:
        return new n(f);
      case t.KANJI:
        return new i(f);
      case t.BYTE:
        return new o(f);
    }
  }
  (e.fromArray = function (y) {
    return y.reduce(function (w, p) {
      return (
        typeof p == "string"
          ? w.push(E(p, null))
          : p.data && w.push(E(p.data, p.mode)),
        w
      );
    }, []);
  }),
    (e.fromString = function (y, w) {
      const p = b(y, s.isKanjiModeEnabled()),
        T = v(p),
        k = g(T, w),
        P = l.find_path(k.map, "start", "end"),
        M = [];
      for (let z = 1; z < P.length - 1; z++) M.push(k.table[P[z]].node);
      return e.fromArray(m(M));
    }),
    (e.rawSplit = function (y) {
      return e.fromArray(b(y, s.isKanjiModeEnabled()));
    });
})(Ro);
const $e = H,
  Pe = be,
  mi = Vn,
  gi = Kn,
  fi = Eo,
  pi = Ao,
  mr = _o,
  gr = ye,
  wi = Yn,
  we = ko,
  vi = So,
  bi = st,
  Le = Ro;
function yi(e, t) {
  const r = e.size,
    n = pi.getPositions(t);
  for (let o = 0; o < n.length; o++) {
    const i = n[o][0],
      a = n[o][1];
    for (let s = -1; s <= 7; s++)
      if (!(i + s <= -1 || r <= i + s))
        for (let l = -1; l <= 7; l++)
          a + l <= -1 ||
            r <= a + l ||
            ((s >= 0 && s <= 6 && (l === 0 || l === 6)) ||
            (l >= 0 && l <= 6 && (s === 0 || s === 6)) ||
            (s >= 2 && s <= 4 && l >= 2 && l <= 4)
              ? e.set(i + s, a + l, !0, !0)
              : e.set(i + s, a + l, !1, !0));
  }
}
function xi(e) {
  const t = e.size;
  for (let r = 8; r < t - 8; r++) {
    const n = r % 2 === 0;
    e.set(r, 6, n, !0), e.set(6, r, n, !0);
  }
}
function $i(e, t) {
  const r = fi.getPositions(t);
  for (let n = 0; n < r.length; n++) {
    const o = r[n][0],
      i = r[n][1];
    for (let a = -2; a <= 2; a++)
      for (let s = -2; s <= 2; s++)
        a === -2 || a === 2 || s === -2 || s === 2 || (a === 0 && s === 0)
          ? e.set(o + a, i + s, !0, !0)
          : e.set(o + a, i + s, !1, !0);
  }
}
function Ci(e, t) {
  const r = e.size,
    n = we.getEncodedBits(t);
  let o, i, a;
  for (let s = 0; s < 18; s++)
    (o = Math.floor(s / 3)),
      (i = (s % 3) + r - 8 - 3),
      (a = ((n >> s) & 1) === 1),
      e.set(o, i, a, !0),
      e.set(i, o, a, !0);
}
function Ne(e, t, r) {
  const n = e.size,
    o = vi.getEncodedBits(t, r);
  let i, a;
  for (i = 0; i < 15; i++)
    (a = ((o >> i) & 1) === 1),
      i < 6
        ? e.set(i, 8, a, !0)
        : i < 8
        ? e.set(i + 1, 8, a, !0)
        : e.set(n - 15 + i, 8, a, !0),
      i < 8
        ? e.set(8, n - i - 1, a, !0)
        : i < 9
        ? e.set(8, 15 - i - 1 + 1, a, !0)
        : e.set(8, 15 - i - 1, a, !0);
  e.set(n - 8, 8, 1, !0);
}
function Ei(e, t) {
  const r = e.size;
  let n = -1,
    o = r - 1,
    i = 7,
    a = 0;
  for (let s = r - 1; s > 0; s -= 2)
    for (s === 6 && s--; ; ) {
      for (let l = 0; l < 2; l++)
        if (!e.isReserved(o, s - l)) {
          let c = !1;
          a < t.length && (c = ((t[a] >>> i) & 1) === 1),
            e.set(o, s - l, c),
            i--,
            i === -1 && (a++, (i = 7));
        }
      if (((o += n), o < 0 || r <= o)) {
        (o -= n), (n = -n);
        break;
      }
    }
}
function Ai(e, t, r) {
  const n = new mi();
  r.forEach(function (l) {
    n.put(l.mode.bit, 4),
      n.put(l.getLength(), bi.getCharCountIndicator(l.mode, e)),
      l.write(n);
  });
  const o = $e.getSymbolTotalCodewords(e),
    i = gr.getTotalCodewordsCount(e, t),
    a = (o - i) * 8;
  for (
    n.getLengthInBits() + 4 <= a && n.put(0, 4);
    n.getLengthInBits() % 8 !== 0;

  )
    n.putBit(0);
  const s = (a - n.getLengthInBits()) / 8;
  for (let l = 0; l < s; l++) n.put(l % 2 ? 17 : 236, 8);
  return _i(n, e, t);
}
function _i(e, t, r) {
  const n = $e.getSymbolTotalCodewords(t),
    o = gr.getTotalCodewordsCount(t, r),
    i = n - o,
    a = gr.getBlocksCount(t, r),
    s = n % a,
    l = a - s,
    c = Math.floor(n / a),
    d = Math.floor(i / a),
    b = d + 1,
    u = c - d,
    m = new wi(u);
  let v = 0;
  const g = new Array(a),
    E = new Array(a);
  let f = 0;
  const y = new Uint8Array(e.buffer);
  for (let P = 0; P < a; P++) {
    const M = P < l ? d : b;
    (g[P] = y.slice(v, v + M)),
      (E[P] = m.encode(g[P])),
      (v += M),
      (f = Math.max(f, M));
  }
  const w = new Uint8Array(n);
  let p = 0,
    T,
    k;
  for (T = 0; T < f; T++)
    for (k = 0; k < a; k++) T < g[k].length && (w[p++] = g[k][T]);
  for (T = 0; T < u; T++) for (k = 0; k < a; k++) w[p++] = E[k][T];
  return w;
}
function Ii(e, t, r, n) {
  let o;
  if (Array.isArray(e)) o = Le.fromArray(e);
  else if (typeof e == "string") {
    let c = t;
    if (!c) {
      const d = Le.rawSplit(e);
      c = we.getBestVersionForData(d, r);
    }
    o = Le.fromString(e, c || 40);
  } else throw new Error("Invalid data");
  const i = we.getBestVersionForData(o, r);
  if (!i)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t) t = i;
  else if (t < i)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` +
        i +
        `.
`
    );
  const a = Ai(t, r, o),
    s = $e.getSymbolSize(t),
    l = new gi(s);
  return (
    yi(l, t),
    xi(l),
    $i(l, t),
    Ne(l, r, 0),
    t >= 7 && Ci(l, t),
    Ei(l, a),
    isNaN(n) && (n = mr.getBestMask(l, Ne.bind(null, l, r))),
    mr.applyMask(n, l),
    Ne(l, r, n),
    {
      modules: l,
      version: t,
      errorCorrectionLevel: r,
      maskPattern: n,
      segments: o,
    }
  );
}
$o.create = function (t, r) {
  if (typeof t > "u" || t === "") throw new Error("No input text");
  let n = Pe.M,
    o,
    i;
  return (
    typeof r < "u" &&
      ((n = Pe.from(r.errorCorrectionLevel, Pe.M)),
      (o = we.from(r.version)),
      (i = mr.from(r.maskPattern)),
      r.toSJISFunc && $e.setToSJISFunction(r.toSJISFunc)),
    Ii(t, o, n, i)
  );
};
var Po = {},
  Cr = {};
(function (e) {
  function t(r) {
    if ((typeof r == "number" && (r = r.toString()), typeof r != "string"))
      throw new Error("Color should be defined as hex string");
    let n = r.slice().replace("#", "").split("");
    if (n.length < 3 || n.length === 5 || n.length > 8)
      throw new Error("Invalid hex color: " + r);
    (n.length === 3 || n.length === 4) &&
      (n = Array.prototype.concat.apply(
        [],
        n.map(function (i) {
          return [i, i];
        })
      )),
      n.length === 6 && n.push("F", "F");
    const o = parseInt(n.join(""), 16);
    return {
      r: (o >> 24) & 255,
      g: (o >> 16) & 255,
      b: (o >> 8) & 255,
      a: o & 255,
      hex: "#" + n.slice(0, 6).join(""),
    };
  }
  (e.getOptions = function (n) {
    n || (n = {}), n.color || (n.color = {});
    const o =
        typeof n.margin > "u" || n.margin === null || n.margin < 0
          ? 4
          : n.margin,
      i = n.width && n.width >= 21 ? n.width : void 0,
      a = n.scale || 4;
    return {
      width: i,
      scale: i ? 4 : a,
      margin: o,
      color: {
        dark: t(n.color.dark || "#000000ff"),
        light: t(n.color.light || "#ffffffff"),
      },
      type: n.type,
      rendererOpts: n.rendererOpts || {},
    };
  }),
    (e.getScale = function (n, o) {
      return o.width && o.width >= n + o.margin * 2
        ? o.width / (n + o.margin * 2)
        : o.scale;
    }),
    (e.getImageWidth = function (n, o) {
      const i = e.getScale(n, o);
      return Math.floor((n + o.margin * 2) * i);
    }),
    (e.qrToImageData = function (n, o, i) {
      const a = o.modules.size,
        s = o.modules.data,
        l = e.getScale(a, i),
        c = Math.floor((a + i.margin * 2) * l),
        d = i.margin * l,
        b = [i.color.light, i.color.dark];
      for (let u = 0; u < c; u++)
        for (let m = 0; m < c; m++) {
          let v = (u * c + m) * 4,
            g = i.color.light;
          if (u >= d && m >= d && u < c - d && m < c - d) {
            const E = Math.floor((u - d) / l),
              f = Math.floor((m - d) / l);
            g = b[s[E * a + f] ? 1 : 0];
          }
          (n[v++] = g.r), (n[v++] = g.g), (n[v++] = g.b), (n[v] = g.a);
        }
    });
})(Cr);
(function (e) {
  const t = Cr;
  function r(o, i, a) {
    o.clearRect(0, 0, i.width, i.height),
      i.style || (i.style = {}),
      (i.height = a),
      (i.width = a),
      (i.style.height = a + "px"),
      (i.style.width = a + "px");
  }
  function n() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  (e.render = function (i, a, s) {
    let l = s,
      c = a;
    typeof l > "u" && (!a || !a.getContext) && ((l = a), (a = void 0)),
      a || (c = n()),
      (l = t.getOptions(l));
    const d = t.getImageWidth(i.modules.size, l),
      b = c.getContext("2d"),
      u = b.createImageData(d, d);
    return (
      t.qrToImageData(u.data, i, l), r(b, c, d), b.putImageData(u, 0, 0), c
    );
  }),
    (e.renderToDataURL = function (i, a, s) {
      let l = s;
      typeof l > "u" && (!a || !a.getContext) && ((l = a), (a = void 0)),
        l || (l = {});
      const c = e.render(i, a, l),
        d = l.type || "image/png",
        b = l.rendererOpts || {};
      return c.toDataURL(d, b.quality);
    });
})(Po);
var Lo = {};
const Ti = Cr;
function Zr(e, t) {
  const r = e.a / 255,
    n = t + '="' + e.hex + '"';
  return r < 1 ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n;
}
function Be(e, t, r) {
  let n = e + t;
  return typeof r < "u" && (n += " " + r), n;
}
function ki(e, t, r) {
  let n = "",
    o = 0,
    i = !1,
    a = 0;
  for (let s = 0; s < e.length; s++) {
    const l = Math.floor(s % t),
      c = Math.floor(s / t);
    !l && !i && (i = !0),
      e[s]
        ? (a++,
          (s > 0 && l > 0 && e[s - 1]) ||
            ((n += i ? Be("M", l + r, 0.5 + c + r) : Be("m", o, 0)),
            (o = 0),
            (i = !1)),
          (l + 1 < t && e[s + 1]) || ((n += Be("h", a)), (a = 0)))
        : o++;
  }
  return n;
}
Lo.render = function (t, r, n) {
  const o = Ti.getOptions(r),
    i = t.modules.size,
    a = t.modules.data,
    s = i + o.margin * 2,
    l = o.color.light.a
      ? "<path " +
        Zr(o.color.light, "fill") +
        ' d="M0 0h' +
        s +
        "v" +
        s +
        'H0z"/>'
      : "",
    c =
      "<path " +
      Zr(o.color.dark, "stroke") +
      ' d="' +
      ki(a, i, o.margin) +
      '"/>',
    d = 'viewBox="0 0 ' + s + " " + s + '"',
    u =
      '<svg xmlns="http://www.w3.org/2000/svg" ' +
      (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") +
      d +
      ' shape-rendering="crispEdges">' +
      l +
      c +
      `</svg>
`;
  return typeof n == "function" && n(null, u), u;
};
const Mi = Fn,
  fr = $o,
  No = Po,
  Si = Lo;
function Er(e, t, r, n, o) {
  const i = [].slice.call(arguments, 1),
    a = i.length,
    s = typeof i[a - 1] == "function";
  if (!s && !Mi()) throw new Error("Callback required as last argument");
  if (s) {
    if (a < 2) throw new Error("Too few arguments provided");
    a === 2
      ? ((o = r), (r = t), (t = n = void 0))
      : a === 3 &&
        (t.getContext && typeof o > "u"
          ? ((o = n), (n = void 0))
          : ((o = n), (n = r), (r = t), (t = void 0)));
  } else {
    if (a < 1) throw new Error("Too few arguments provided");
    return (
      a === 1
        ? ((r = t), (t = n = void 0))
        : a === 2 && !t.getContext && ((n = r), (r = t), (t = void 0)),
      new Promise(function (l, c) {
        try {
          const d = fr.create(r, n);
          l(e(d, t, n));
        } catch (d) {
          c(d);
        }
      })
    );
  }
  try {
    const l = fr.create(r, n);
    o(null, e(l, t, n));
  } catch (l) {
    o(l);
  }
}
Gt.create = fr.create;
Gt.toCanvas = Er.bind(null, No.render);
Gt.toDataURL = Er.bind(null, No.renderToDataURL);
Gt.toString = Er.bind(null, function (e, t, r) {
  return Si.render(e, r);
});
var Oi = Object.defineProperty,
  Vr = Object.getOwnPropertySymbols,
  Ri = Object.prototype.hasOwnProperty,
  Pi = Object.prototype.propertyIsEnumerable,
  Kr = (e, t, r) =>
    t in e
      ? Oi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  De = (e, t) => {
    for (var r in t || (t = {})) Ri.call(t, r) && Kr(e, r, t[r]);
    if (Vr) for (var r of Vr(t)) Pi.call(t, r) && Kr(e, r, t[r]);
    return e;
  };
function Li() {
  var e;
  const t = (e = _t.state.themeMode) != null ? e : "dark",
    r = {
      light: {
        foreground: {
          1: "rgb(20,20,20)",
          2: "rgb(121,134,134)",
          3: "rgb(158,169,169)",
        },
        background: {
          1: "rgb(255,255,255)",
          2: "rgb(241,243,243)",
          3: "rgb(228,231,231)",
        },
        overlay: "rgba(0,0,0,0.1)",
      },
      dark: {
        foreground: {
          1: "rgb(228,231,231)",
          2: "rgb(148,158,158)",
          3: "rgb(110,119,119)",
        },
        background: {
          1: "rgb(20,20,20)",
          2: "rgb(39,42,42)",
          3: "rgb(59,64,64)",
        },
        overlay: "rgba(255,255,255,0.1)",
      },
    }[t];
  return {
    "--wcm-color-fg-1": r.foreground[1],
    "--wcm-color-fg-2": r.foreground[2],
    "--wcm-color-fg-3": r.foreground[3],
    "--wcm-color-bg-1": r.background[1],
    "--wcm-color-bg-2": r.background[2],
    "--wcm-color-bg-3": r.background[3],
    "--wcm-color-overlay": r.overlay,
  };
}
function qr() {
  return {
    "--wcm-accent-color": "#3396FF",
    "--wcm-accent-fill-color": "#FFFFFF",
    "--wcm-z-index": "89",
    "--wcm-background-color": "#3396FF",
    "--wcm-background-border-radius": "8px",
    "--wcm-container-border-radius": "30px",
    "--wcm-wallet-icon-border-radius": "15px",
    "--wcm-wallet-icon-large-border-radius": "30px",
    "--wcm-wallet-icon-small-border-radius": "7px",
    "--wcm-input-border-radius": "28px",
    "--wcm-button-border-radius": "10px",
    "--wcm-notification-border-radius": "36px",
    "--wcm-secondary-button-border-radius": "28px",
    "--wcm-icon-button-border-radius": "50%",
    "--wcm-button-hover-highlight-border-radius": "10px",
    "--wcm-text-big-bold-size": "20px",
    "--wcm-text-big-bold-weight": "600",
    "--wcm-text-big-bold-line-height": "24px",
    "--wcm-text-big-bold-letter-spacing": "-0.03em",
    "--wcm-text-big-bold-text-transform": "none",
    "--wcm-text-xsmall-bold-size": "10px",
    "--wcm-text-xsmall-bold-weight": "700",
    "--wcm-text-xsmall-bold-line-height": "12px",
    "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
    "--wcm-text-xsmall-bold-text-transform": "uppercase",
    "--wcm-text-xsmall-regular-size": "12px",
    "--wcm-text-xsmall-regular-weight": "600",
    "--wcm-text-xsmall-regular-line-height": "14px",
    "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
    "--wcm-text-xsmall-regular-text-transform": "none",
    "--wcm-text-small-thin-size": "14px",
    "--wcm-text-small-thin-weight": "500",
    "--wcm-text-small-thin-line-height": "16px",
    "--wcm-text-small-thin-letter-spacing": "-0.03em",
    "--wcm-text-small-thin-text-transform": "none",
    "--wcm-text-small-regular-size": "14px",
    "--wcm-text-small-regular-weight": "600",
    "--wcm-text-small-regular-line-height": "16px",
    "--wcm-text-small-regular-letter-spacing": "-0.03em",
    "--wcm-text-small-regular-text-transform": "none",
    "--wcm-text-medium-regular-size": "16px",
    "--wcm-text-medium-regular-weight": "600",
    "--wcm-text-medium-regular-line-height": "20px",
    "--wcm-text-medium-regular-letter-spacing": "-0.03em",
    "--wcm-text-medium-regular-text-transform": "none",
    "--wcm-font-family":
      "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
    "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
    "--wcm-success-color": "rgb(38,181,98)",
    "--wcm-error-color": "rgb(242, 90, 103)",
    "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
    "--wcm-overlay-backdrop-filter": "none",
  };
}
const _ = {
    getPreset(e) {
      return qr()[e];
    },
    setTheme() {
      const e = document.querySelector(":root"),
        { themeVariables: t } = _t.state;
      if (e) {
        const r = De(De(De({}, Li()), qr()), t);
        Object.entries(r).forEach(([n, o]) => e.style.setProperty(n, o));
      }
    },
    globalCss: O`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`,
  },
  Ni = O`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
var Bi = Object.defineProperty,
  Di = Object.getOwnPropertyDescriptor,
  wt = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? Di(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && Bi(t, r, o), o;
  };
let Q = class extends A {
  constructor() {
    super(...arguments),
      (this.disabled = !1),
      (this.iconLeft = void 0),
      (this.iconRight = void 0),
      (this.onClick = () => null),
      (this.variant = "default");
  }
  render() {
    const e = {
      "wcm-icon-left": this.iconLeft !== void 0,
      "wcm-icon-right": this.iconRight !== void 0,
      "wcm-ghost": this.variant === "ghost",
      "wcm-outline": this.variant === "outline",
    };
    let t = "inverse";
    return (
      this.variant === "ghost" && (t = "secondary"),
      this.variant === "outline" && (t = "accent"),
      h`<button class="${G(e)}" ?disabled="${this.disabled}" @click="${
        this.onClick
      }">${
        this.iconLeft
      }<wcm-text variant="small-regular" color="${t}"><slot></slot></wcm-text>${
        this.iconRight
      }</button>`
    );
  }
};
(Q.styles = [_.globalCss, Ni]),
  wt([$({ type: Boolean })], Q.prototype, "disabled", 2),
  wt([$()], Q.prototype, "iconLeft", 2),
  wt([$()], Q.prototype, "iconRight", 2),
  wt([$()], Q.prototype, "onClick", 2),
  wt([$()], Q.prototype, "variant", 2),
  (Q = wt([I("wcm-button")], Q));
const Ui = O`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
var Wi = Object.defineProperty,
  Hi = Object.getOwnPropertyDescriptor,
  Ue = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? Hi(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && Wi(t, r, o), o;
  };
let Lt = class extends A {
  constructor() {
    super(...arguments), (this.disabled = !1), (this.variant = "primary");
  }
  render() {
    const e = { "wcm-secondary": this.variant === "secondary" };
    return h`<button ?disabled="${this.disabled}" class="${G(
      e
    )}"><slot></slot></button>`;
  }
};
(Lt.styles = [_.globalCss, Ui]),
  Ue([$({ type: Boolean })], Lt.prototype, "disabled", 2),
  Ue([$()], Lt.prototype, "variant", 2),
  (Lt = Ue([I("wcm-button-big")], Lt));
const ji = O`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
var zi = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let We = class extends A {
  render() {
    return h`<div><slot></slot></div>`;
  }
};
(We.styles = [_.globalCss, ji]), (We = zi([I("wcm-info-footer")], We));
const R = {
    CROSS_ICON: L`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_LOGO: L`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
    WALLET_CONNECT_ICON: L`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
    WALLET_CONNECT_ICON_COLORED: L`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
    BACK_ICON: L`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
    COPY_ICON: L`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
    RETRY_ICON: L`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
    DESKTOP_ICON: L`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    MOBILE_ICON: L`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
    ARROW_DOWN_ICON: L`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
    ARROW_UP_RIGHT_ICON: L`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
    ARROW_RIGHT_ICON: L`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
    QRCODE_ICON: L`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
    SCAN_ICON: L`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
    CHECKMARK_ICON: L`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
    SEARCH_ICON: L`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
    WALLET_PLACEHOLDER: L`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
    GLOBE_ICON: L`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`,
  },
  Fi = O`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
var Zi = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let He = class extends A {
  render() {
    return h`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${R.WALLET_CONNECT_LOGO} <button @click="${ce.close}">${R.CROSS_ICON}</button></div>`;
  }
};
(He.styles = [_.globalCss, Fi]), (He = Zi([I("wcm-modal-backcard")], He));
const Vi = O`main{padding:20px;padding-top:0;width:100%}`;
var Ki = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let je = class extends A {
  render() {
    return h`<main><slot></slot></main>`;
  }
};
(je.styles = [_.globalCss, Vi]), (je = Ki([I("wcm-modal-content")], je));
const qi = O`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
var Yi = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let ze = class extends A {
  render() {
    return h`<footer><slot></slot></footer>`;
  }
};
(ze.styles = [_.globalCss, qi]), (ze = Yi([I("wcm-modal-footer")], ze));
const Ji = O`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
var Gi = Object.defineProperty,
  Qi = Object.getOwnPropertyDescriptor,
  Nt = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? Qi(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && Gi(t, r, o), o;
  };
let ct = class extends A {
  constructor() {
    super(...arguments),
      (this.title = ""),
      (this.onAction = void 0),
      (this.actionIcon = void 0),
      (this.border = !1);
  }
  backBtnTemplate() {
    return h`<button class="wcm-back-btn" @click="${N.goBack}">${R.BACK_ICON}</button>`;
  }
  actionBtnTemplate() {
    return h`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
  }
  render() {
    const e = { "wcm-border": this.border },
      t = N.state.history.length > 1,
      r = this.title
        ? h`<wcm-text variant="big-bold">${this.title}</wcm-text>`
        : h`<slot></slot>`;
    return h`<header class="${G(e)}">${
      t ? this.backBtnTemplate() : null
    } ${r} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
  }
};
(ct.styles = [_.globalCss, Ji]),
  Nt([$()], ct.prototype, "title", 2),
  Nt([$()], ct.prototype, "onAction", 2),
  Nt([$()], ct.prototype, "actionIcon", 2),
  Nt([$({ type: Boolean })], ct.prototype, "border", 2),
  (ct = Nt([I("wcm-modal-header")], ct));
const x = {
    MOBILE_BREAKPOINT: 600,
    WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
    EXPLORER_WALLET_URL: "https://explorer.walletconnect.com/?type=wallet",
    getShadowRootElement(e, t) {
      const r = e.renderRoot.querySelector(t);
      if (!r) throw new Error(`${t} not found`);
      return r;
    },
    getWalletIcon({ id: e, image_id: t }) {
      const { walletImages: r } = gt.state;
      return r != null && r[e] ? r[e] : t ? U.getWalletImageUrl(t) : "";
    },
    getWalletName(e, t = !1) {
      return t && e.length > 8 ? `${e.substring(0, 8)}..` : e;
    },
    isMobileAnimation() {
      return window.innerWidth <= x.MOBILE_BREAKPOINT;
    },
    async preloadImage(e) {
      const t = new Promise((r, n) => {
        const o = new Image();
        (o.onload = r),
          (o.onerror = n),
          (o.crossOrigin = "anonymous"),
          (o.src = e);
      });
      return Promise.race([t, C.wait(3e3)]);
    },
    getErrorMessage(e) {
      return e instanceof Error ? e.message : "Unknown Error";
    },
    debounce(e, t = 500) {
      let r;
      return (...n) => {
        function o() {
          e(...n);
        }
        r && clearTimeout(r), (r = setTimeout(o, t));
      };
    },
    handleMobileLinking(e) {
      const { walletConnectUri: t } = q.state,
        { mobile: r, name: n } = e,
        o = r == null ? void 0 : r.native,
        i = r == null ? void 0 : r.universal;
      x.setRecentWallet(e);
      function a(s) {
        let l = "";
        o
          ? (l = C.formatUniversalUrl(o, s, n))
          : i && (l = C.formatNativeUrl(i, s, n)),
          C.openHref(l, "_self");
      }
      t && a(t);
    },
    handleAndroidLinking() {
      const { walletConnectUri: e } = q.state;
      e && (C.setWalletConnectAndroidDeepLink(e), C.openHref(e, "_self"));
    },
    async handleUriCopy() {
      const { walletConnectUri: e } = q.state;
      if (e)
        try {
          await navigator.clipboard.writeText(e),
            ot.openToast("Link copied", "success");
        } catch {
          ot.openToast("Failed to copy", "error");
        }
    },
    getCustomImageUrls() {
      const { walletImages: e } = gt.state,
        t = Object.values(e ?? {});
      return Object.values(t);
    },
    truncate(e, t = 8) {
      return e.length <= t
        ? e
        : `${e.substring(0, 4)}...${e.substring(e.length - 4)}`;
    },
    setRecentWallet(e) {
      try {
        localStorage.setItem(x.WCM_RECENT_WALLET_DATA, JSON.stringify(e));
      } catch {
        console.info("Unable to set recent wallet");
      }
    },
    getRecentWallet() {
      try {
        const e = localStorage.getItem(x.WCM_RECENT_WALLET_DATA);
        return e ? JSON.parse(e) : void 0;
      } catch {
        console.info("Unable to get recent wallet");
      }
    },
    caseSafeIncludes(e, t) {
      return e.toUpperCase().includes(t.toUpperCase());
    },
    openWalletExplorerUrl() {
      C.openHref(x.EXPLORER_WALLET_URL, "_blank");
    },
    getCachedRouterWalletPlatforms() {
      const { desktop: e, mobile: t } = C.getWalletRouterData(),
        r = !!(e != null && e.native),
        n = !!(e != null && e.universal),
        o = !!(t != null && t.native) || !!(t != null && t.universal);
      return { isDesktop: r, isMobile: o, isWeb: n };
    },
    goToConnectingView(e) {
      N.setData({ Wallet: e });
      const t = C.isMobile(),
        {
          isDesktop: r,
          isWeb: n,
          isMobile: o,
        } = x.getCachedRouterWalletPlatforms();
      t
        ? o
          ? N.push("MobileConnecting")
          : n
          ? N.push("WebConnecting")
          : N.push("InstallWallet")
        : r
        ? N.push("DesktopConnecting")
        : n
        ? N.push("WebConnecting")
        : o
        ? N.push("MobileQrcodeConnecting")
        : N.push("InstallWallet");
    },
  },
  Xi = O`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
var ta = Object.defineProperty,
  ea = Object.getOwnPropertyDescriptor,
  Fe = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? ea(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && ta(t, r, o), o;
  };
let Bt = class extends A {
  constructor() {
    super(),
      (this.view = N.state.view),
      (this.prevView = N.state.view),
      (this.unsubscribe = void 0),
      (this.oldHeight = "0px"),
      (this.resizeObserver = void 0),
      (this.unsubscribe = N.subscribe((e) => {
        this.view !== e.view && this.onChangeRoute();
      }));
  }
  firstUpdated() {
    (this.resizeObserver = new ResizeObserver(([e]) => {
      const t = `${e.contentRect.height}px`;
      this.oldHeight !== "0px" &&
        mt(this.routerEl, { height: [this.oldHeight, t] }, { duration: 0.2 }),
        (this.oldHeight = t);
    })),
      this.resizeObserver.observe(this.contentEl);
  }
  disconnectedCallback() {
    var e, t;
    (e = this.unsubscribe) == null || e.call(this),
      (t = this.resizeObserver) == null || t.disconnect();
  }
  get routerEl() {
    return x.getShadowRootElement(this, ".wcm-router");
  }
  get contentEl() {
    return x.getShadowRootElement(this, ".wcm-content");
  }
  viewTemplate() {
    switch (this.view) {
      case "ConnectWallet":
        return h`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
      case "DesktopConnecting":
        return h`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
      case "MobileConnecting":
        return h`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
      case "WebConnecting":
        return h`<wcm-web-connecting-view></wcm-web-connecting-view>`;
      case "MobileQrcodeConnecting":
        return h`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
      case "WalletExplorer":
        return h`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
      case "Qrcode":
        return h`<wcm-qrcode-view></wcm-qrcode-view>`;
      case "InstallWallet":
        return h`<wcm-install-wallet-view></wcm-install-wallet-view>`;
      default:
        return h`<div>Not Found</div>`;
    }
  }
  async onChangeRoute() {
    await mt(
      this.routerEl,
      { opacity: [1, 0], scale: [1, 1.02] },
      { duration: 0.15, delay: 0.1 }
    ).finished,
      (this.view = N.state.view),
      mt(
        this.routerEl,
        { opacity: [0, 1], scale: [0.99, 1] },
        { duration: 0.37, delay: 0.05 }
      );
  }
  render() {
    return h`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
  }
};
(Bt.styles = [_.globalCss, Xi]),
  Fe([W()], Bt.prototype, "view", 2),
  Fe([W()], Bt.prototype, "prevView", 2),
  (Bt = Fe([I("wcm-modal-router")], Bt));
const ra = O`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
var oa = Object.defineProperty,
  na = Object.getOwnPropertyDescriptor,
  Yr = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? na(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && oa(t, r, o), o;
  };
let re = class extends A {
  constructor() {
    super(),
      (this.open = !1),
      (this.unsubscribe = void 0),
      (this.timeout = void 0),
      (this.unsubscribe = ot.subscribe((e) => {
        e.open
          ? ((this.open = !0),
            (this.timeout = setTimeout(() => ot.closeToast(), 2200)))
          : ((this.open = !1), clearTimeout(this.timeout));
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribe) == null || e.call(this),
      clearTimeout(this.timeout),
      ot.closeToast();
  }
  render() {
    const { message: e, variant: t } = ot.state,
      r = { "wcm-success": t === "success", "wcm-error": t === "error" };
    return this.open
      ? h`<div class="${G(r)}">${t === "success" ? R.CHECKMARK_ICON : null} ${
          t === "error" ? R.CROSS_ICON : null
        }<wcm-text variant="small-regular">${e}</wcm-text></div>`
      : null;
  }
};
(re.styles = [_.globalCss, ra]),
  Yr([W()], re.prototype, "open", 2),
  (re = Yr([I("wcm-modal-toast")], re));
const ia = 0.1,
  Jr = 2.5,
  J = 7;
function Ze(e, t, r) {
  return e === t ? !1 : (e - t < 0 ? t - e : e - t) <= r + ia;
}
function aa(e, t) {
  const r = Array.prototype.slice.call(
      Gt.create(e, { errorCorrectionLevel: t }).modules.data,
      0
    ),
    n = Math.sqrt(r.length);
  return r.reduce(
    (o, i, a) => (a % n === 0 ? o.push([i]) : o[o.length - 1].push(i)) && o,
    []
  );
}
const sa = {
    generate(e, t, r) {
      const n = "#141414",
        o = "#ffffff",
        i = [],
        a = aa(e, "Q"),
        s = t / a.length,
        l = [
          { x: 0, y: 0 },
          { x: 1, y: 0 },
          { x: 0, y: 1 },
        ];
      l.forEach(({ x: v, y: g }) => {
        const E = (a.length - J) * s * v,
          f = (a.length - J) * s * g,
          y = 0.45;
        for (let w = 0; w < l.length; w += 1) {
          const p = s * (J - w * 2);
          i.push(
            L`<rect fill="${w % 2 === 0 ? n : o}" height="${p}" rx="${
              p * y
            }" ry="${p * y}" width="${p}" x="${E + s * w}" y="${f + s * w}">`
          );
        }
      });
      const c = Math.floor((r + 25) / s),
        d = a.length / 2 - c / 2,
        b = a.length / 2 + c / 2 - 1,
        u = [];
      a.forEach((v, g) => {
        v.forEach((E, f) => {
          if (
            a[g][f] &&
            !(
              (g < J && f < J) ||
              (g > a.length - (J + 1) && f < J) ||
              (g < J && f > a.length - (J + 1))
            ) &&
            !(g > d && g < b && f > d && f < b)
          ) {
            const y = g * s + s / 2,
              w = f * s + s / 2;
            u.push([y, w]);
          }
        });
      });
      const m = {};
      return (
        u.forEach(([v, g]) => {
          m[v] ? m[v].push(g) : (m[v] = [g]);
        }),
        Object.entries(m)
          .map(([v, g]) => {
            const E = g.filter((f) => g.every((y) => !Ze(f, y, s)));
            return [Number(v), E];
          })
          .forEach(([v, g]) => {
            g.forEach((E) => {
              i.push(L`<circle cx="${v}" cy="${E}" fill="${n}" r="${s / Jr}">`);
            });
          }),
        Object.entries(m)
          .filter(([v, g]) => g.length > 1)
          .map(([v, g]) => {
            const E = g.filter((f) => g.some((y) => Ze(f, y, s)));
            return [Number(v), E];
          })
          .map(([v, g]) => {
            g.sort((f, y) => (f < y ? -1 : 1));
            const E = [];
            for (const f of g) {
              const y = E.find((w) => w.some((p) => Ze(f, p, s)));
              y ? y.push(f) : E.push([f]);
            }
            return [v, E.map((f) => [f[0], f[f.length - 1]])];
          })
          .forEach(([v, g]) => {
            g.forEach(([E, f]) => {
              i.push(
                L`<line x1="${v}" x2="${v}" y1="${E}" y2="${f}" stroke="${n}" stroke-width="${
                  s / (Jr / 2)
                }" stroke-linecap="round">`
              );
            });
          }),
        i
      );
    },
  },
  la = O`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
var ca = Object.defineProperty,
  da = Object.getOwnPropertyDescriptor,
  vt = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? da(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && ca(t, r, o), o;
  };
let X = class extends A {
  constructor() {
    super(...arguments),
      (this.uri = ""),
      (this.size = 0),
      (this.imageId = void 0),
      (this.walletId = void 0),
      (this.imageUrl = void 0);
  }
  svgTemplate() {
    const e = _t.state.themeMode === "light" ? this.size : this.size - 36;
    return L`<svg height="${e}" width="${e}">${sa.generate(
      this.uri,
      e,
      e / 4
    )}</svg>`;
  }
  render() {
    const e = { "wcm-dark": _t.state.themeMode === "dark" };
    return h`<div style="${`width: ${this.size}px`}" class="${G(e)}">${
      this.walletId || this.imageUrl
        ? h`<wcm-wallet-image walletId="${D(this.walletId)}" imageId="${D(
            this.imageId
          )}" imageUrl="${D(this.imageUrl)}"></wcm-wallet-image>`
        : R.WALLET_CONNECT_ICON_COLORED
    } ${this.svgTemplate()}</div>`;
  }
};
(X.styles = [_.globalCss, la]),
  vt([$()], X.prototype, "uri", 2),
  vt([$({ type: Number })], X.prototype, "size", 2),
  vt([$()], X.prototype, "imageId", 2),
  vt([$()], X.prototype, "walletId", 2),
  vt([$()], X.prototype, "imageUrl", 2),
  (X = vt([I("wcm-qrcode")], X));
const ha = O`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
var ua = Object.defineProperty,
  ma = Object.getOwnPropertyDescriptor,
  Gr = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? ma(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && ua(t, r, o), o;
  };
let oe = class extends A {
  constructor() {
    super(...arguments), (this.onChange = () => null);
  }
  render() {
    return h`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${R.SEARCH_ICON}`;
  }
};
(oe.styles = [_.globalCss, ha]),
  Gr([$()], oe.prototype, "onChange", 2),
  (oe = Gr([I("wcm-search-input")], oe));
const ga = O`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
var fa = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let Ve = class extends A {
  render() {
    return h`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
  }
};
(Ve.styles = [_.globalCss, ga]), (Ve = fa([I("wcm-spinner")], Ve));
const pa = O`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
var wa = Object.defineProperty,
  va = Object.getOwnPropertyDescriptor,
  Ke = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? va(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && wa(t, r, o), o;
  };
let Dt = class extends A {
  constructor() {
    super(...arguments),
      (this.variant = "medium-regular"),
      (this.color = "primary");
  }
  render() {
    const e = {
      "wcm-big-bold": this.variant === "big-bold",
      "wcm-medium-regular": this.variant === "medium-regular",
      "wcm-small-regular": this.variant === "small-regular",
      "wcm-small-thin": this.variant === "small-thin",
      "wcm-xsmall-regular": this.variant === "xsmall-regular",
      "wcm-xsmall-bold": this.variant === "xsmall-bold",
      "wcm-color-primary": this.color === "primary",
      "wcm-color-secondary": this.color === "secondary",
      "wcm-color-tertiary": this.color === "tertiary",
      "wcm-color-inverse": this.color === "inverse",
      "wcm-color-accnt": this.color === "accent",
      "wcm-color-error": this.color === "error",
    };
    return h`<span><slot class="${G(e)}"></slot></span>`;
  }
};
(Dt.styles = [_.globalCss, pa]),
  Ke([$()], Dt.prototype, "variant", 2),
  Ke([$()], Dt.prototype, "color", 2),
  (Dt = Ke([I("wcm-text")], Dt));
const ba = O`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
var ya = Object.defineProperty,
  xa = Object.getOwnPropertyDescriptor,
  tt = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? xa(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && ya(t, r, o), o;
  };
let K = class extends A {
  constructor() {
    super(...arguments),
      (this.onClick = () => null),
      (this.name = ""),
      (this.walletId = ""),
      (this.label = void 0),
      (this.imageId = void 0),
      (this.installed = !1),
      (this.recent = !1);
  }
  sublabelTemplate() {
    return this.recent
      ? h`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>`
      : this.installed
      ? h`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>`
      : null;
  }
  handleClick() {
    Bo.click({ name: "WALLET_BUTTON", walletId: this.walletId }),
      this.onClick();
  }
  render() {
    var e;
    return h`<button @click="${this.handleClick.bind(
      this
    )}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${D(
      this.imageId
    )}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${
      (e = this.label) != null ? e : x.getWalletName(this.name, !0)
    }</wcm-text>${this.sublabelTemplate()}</div></button>`;
  }
};
(K.styles = [_.globalCss, ba]),
  tt([$()], K.prototype, "onClick", 2),
  tt([$()], K.prototype, "name", 2),
  tt([$()], K.prototype, "walletId", 2),
  tt([$()], K.prototype, "label", 2),
  tt([$()], K.prototype, "imageId", 2),
  tt([$({ type: Boolean })], K.prototype, "installed", 2),
  tt([$({ type: Boolean })], K.prototype, "recent", 2),
  (K = tt([I("wcm-wallet-button")], K));
const $a = O`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var Ca = Object.defineProperty,
  Ea = Object.getOwnPropertyDescriptor,
  ne = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? Ea(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && Ca(t, r, o), o;
  };
let bt = class extends A {
  constructor() {
    super(...arguments),
      (this.walletId = ""),
      (this.imageId = void 0),
      (this.imageUrl = void 0);
  }
  render() {
    var e;
    const t =
      (e = this.imageUrl) != null && e.length
        ? this.imageUrl
        : x.getWalletIcon({ id: this.walletId, image_id: this.imageId });
    return h`${
      t.length
        ? h`<div><img crossorigin="anonymous" src="${t}" alt="${this.id}"></div>`
        : R.WALLET_PLACEHOLDER
    }`;
  }
};
(bt.styles = [_.globalCss, $a]),
  ne([$()], bt.prototype, "walletId", 2),
  ne([$()], bt.prototype, "imageId", 2),
  ne([$()], bt.prototype, "imageUrl", 2),
  (bt = ne([I("wcm-wallet-image")], bt));
var Aa = Object.defineProperty,
  _a = Object.getOwnPropertyDescriptor,
  Qr = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? _a(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && Aa(t, r, o), o;
  };
let qe = class extends A {
  constructor() {
    super(), (this.preload = !0), this.preloadData();
  }
  async loadImages(e) {
    try {
      e != null &&
        e.length &&
        (await Promise.all(e.map(async (t) => x.preloadImage(t))));
    } catch {
      console.info("Unsuccessful attempt at preloading some images", e);
    }
  }
  async preloadListings() {
    if (gt.state.enableExplorer) {
      await U.getRecomendedWallets(), q.setIsDataLoaded(!0);
      const { recomendedWallets: e } = U.state,
        t = e.map((r) => x.getWalletIcon(r));
      await this.loadImages(t);
    } else q.setIsDataLoaded(!0);
  }
  async preloadCustomImages() {
    const e = x.getCustomImageUrls();
    await this.loadImages(e);
  }
  async preloadData() {
    try {
      this.preload &&
        ((this.preload = !1),
        await Promise.all([
          this.preloadListings(),
          this.preloadCustomImages(),
        ]));
    } catch (e) {
      console.error(e), ot.openToast("Failed preloading", "error");
    }
  }
};
Qr([W()], qe.prototype, "preload", 2),
  (qe = Qr([I("wcm-explorer-context")], qe));
var Ia = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let Xr = class extends A {
  constructor() {
    super(),
      (this.unsubscribeTheme = void 0),
      _.setTheme(),
      (this.unsubscribeTheme = _t.subscribe(_.setTheme));
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribeTheme) == null || e.call(this);
  }
};
Xr = Ia([I("wcm-theme-context")], Xr);
const Ta = O`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var ka = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let Ye = class extends A {
  onGoToQrcode() {
    N.push("Qrcode");
  }
  render() {
    const { recomendedWallets: e } = U.state,
      t = [...e, ...e],
      r = C.RECOMMENDED_WALLET_AMOUNT * 2;
    return h`<wcm-modal-header title="Connect your wallet" .onAction="${
      this.onGoToQrcode
    }" .actionIcon="${
      R.QRCODE_ICON
    }"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${
      R.MOBILE_ICON
    }<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[
      ...Array(r),
    ].map((n, o) => {
      const i = t[o % t.length];
      return i
        ? h`<wcm-wallet-image walletId="${i.id}" imageId="${i.image_id}"></wcm-wallet-image>`
        : R.WALLET_PLACEHOLDER;
    })}</div><wcm-button-big @click="${
      x.handleAndroidLinking
    }"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
  }
};
(Ye.styles = [_.globalCss, Ta]),
  (Ye = ka([I("wcm-android-wallet-selection")], Ye));
const Ma = O`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
var Sa = Object.defineProperty,
  Oa = Object.getOwnPropertyDescriptor,
  yt = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? Oa(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && Sa(t, r, o), o;
  };
let et = class extends A {
  constructor() {
    super(...arguments),
      (this.walletId = void 0),
      (this.imageId = void 0),
      (this.isError = !1),
      (this.isStale = !1),
      (this.label = "");
  }
  svgLoaderTemplate() {
    var e, t;
    const r =
      (t =
        (e = _t.state.themeVariables) == null
          ? void 0
          : e["--wcm-wallet-icon-large-border-radius"]) != null
        ? t
        : _.getPreset("--wcm-wallet-icon-large-border-radius");
    let n = 0;
    r.includes("%")
      ? (n = (88 / 100) * parseInt(r, 10))
      : (n = parseInt(r, 10)),
      (n *= 1.17);
    const o = 317 - n * 1.57,
      i = 425 - n * 1.8;
    return h`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${n}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${o}" stroke-dashoffset="${i}"></use></svg>`;
  }
  render() {
    const e = { "wcm-error": this.isError, "wcm-stale": this.isStale };
    return h`<div class="${G(
      e
    )}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${D(
      this.walletId
    )}" imageId="${D(
      this.imageId
    )}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${
      this.isError ? "error" : "primary"
    }">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
  }
};
(et.styles = [_.globalCss, Ma]),
  yt([$()], et.prototype, "walletId", 2),
  yt([$()], et.prototype, "imageId", 2),
  yt([$({ type: Boolean })], et.prototype, "isError", 2),
  yt([$({ type: Boolean })], et.prototype, "isStale", 2),
  yt([$()], et.prototype, "label", 2),
  (et = yt([I("wcm-connector-waiting")], et));
const At = {
    manualWallets() {
      var e, t;
      const { mobileWallets: r, desktopWallets: n } = gt.state,
        o = (e = At.recentWallet()) == null ? void 0 : e.id,
        i = C.isMobile() ? r : n,
        a = i == null ? void 0 : i.filter((s) => o !== s.id);
      return (t = C.isMobile()
        ? a == null
          ? void 0
          : a.map(({ id: s, name: l, links: c }) => ({
              id: s,
              name: l,
              mobile: c,
              links: c,
            }))
        : a == null
        ? void 0
        : a.map(({ id: s, name: l, links: c }) => ({
            id: s,
            name: l,
            desktop: c,
            links: c,
          }))) != null
        ? t
        : [];
    },
    recentWallet() {
      return x.getRecentWallet();
    },
    recomendedWallets(e = !1) {
      var t;
      const r = e || (t = At.recentWallet()) == null ? void 0 : t.id,
        { recomendedWallets: n } = U.state;
      return n.filter((o) => r !== o.id);
    },
  },
  at = {
    onConnecting(e) {
      x.goToConnectingView(e);
    },
    manualWalletsTemplate() {
      return At.manualWallets().map(
        (e) =>
          h`<wcm-wallet-button walletId="${e.id}" name="${
            e.name
          }" .onClick="${() => this.onConnecting(e)}"></wcm-wallet-button>`
      );
    },
    recomendedWalletsTemplate(e = !1) {
      return At.recomendedWallets(e).map(
        (t) =>
          h`<wcm-wallet-button name="${t.name}" walletId="${t.id}" imageId="${
            t.image_id
          }" .onClick="${() => this.onConnecting(t)}"></wcm-wallet-button>`
      );
    },
    recentWalletTemplate() {
      const e = At.recentWallet();
      if (e)
        return h`<wcm-wallet-button name="${e.name}" walletId="${
          e.id
        }" imageId="${D(e.image_id)}" .recent="${!0}" .onClick="${() =>
          this.onConnecting(e)}"></wcm-wallet-button>`;
    },
  },
  Ra = O`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
var Pa = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let Je = class extends A {
  render() {
    const { explorerExcludedWalletIds: e, enableExplorer: t } = gt.state,
      r = e !== "ALL" && t,
      n = at.manualWalletsTemplate(),
      o = at.recomendedWalletsTemplate();
    let i = [at.recentWalletTemplate(), ...n, ...o];
    i = i.filter(Boolean);
    const a = i.length > 4 || r;
    let s = [];
    a ? (s = i.slice(0, 3)) : (s = i);
    const l = !!s.length;
    return h`<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${
      x.handleUriCopy
    }" .actionIcon="${
      R.COPY_ICON
    }"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${
      R.MOBILE_ICON
    }<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${
      R.SCAN_ICON
    }<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${
      l
        ? h`<wcm-modal-footer><div class="wcm-desktop-title">${
            R.DESKTOP_ICON
          }<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${s} ${
            a
              ? h`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`
              : null
          }</div></wcm-modal-footer>`
        : null
    }`;
  }
};
(Je.styles = [_.globalCss, Ra]),
  (Je = Pa([I("wcm-desktop-wallet-selection")], Je));
const La = O`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
var Na = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let Ge = class extends A {
  render() {
    const { termsOfServiceUrl: e, privacyPolicyUrl: t } = gt.state;
    return e ?? t
      ? h`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${
          e
            ? h`<a href="${e}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`
            : null
        } ${e && t ? "and" : null} ${
          t
            ? h`<a href="${t}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`
            : null
        }</wcm-text></div>`
      : null;
  }
};
(Ge.styles = [_.globalCss, La]), (Ge = Na([I("wcm-legal-notice")], Ge));
const Ba = O`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
var Da = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let Qe = class extends A {
  onQrcode() {
    N.push("Qrcode");
  }
  render() {
    const { explorerExcludedWalletIds: e, enableExplorer: t } = gt.state,
      r = e !== "ALL" && t,
      n = at.manualWalletsTemplate(),
      o = at.recomendedWalletsTemplate();
    let i = [at.recentWalletTemplate(), ...n, ...o];
    i = i.filter(Boolean);
    const a = i.length > 8 || r;
    let s = [];
    a ? (s = i.slice(0, 7)) : (s = i);
    const l = !!s.length;
    return h`<wcm-modal-header title="Connect your wallet" .onAction="${
      this.onQrcode
    }" .actionIcon="${R.QRCODE_ICON}"></wcm-modal-header>${
      l
        ? h`<wcm-modal-content><div>${s} ${
            a
              ? h`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`
              : null
          }</div></wcm-modal-content>`
        : null
    }`;
  }
};
(Qe.styles = [_.globalCss, Ba]),
  (Qe = Da([I("wcm-mobile-wallet-selection")], Qe));
const Ua = O`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
var Wa = Object.defineProperty,
  Ha = Object.getOwnPropertyDescriptor,
  Xe = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? Ha(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && Wa(t, r, o), o;
  };
let Ut = class extends A {
  constructor() {
    super(),
      (this.open = !1),
      (this.active = !1),
      (this.unsubscribeModal = void 0),
      (this.abortController = void 0),
      (this.unsubscribeModal = ce.subscribe((e) => {
        e.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
      }));
  }
  disconnectedCallback() {
    var e;
    (e = this.unsubscribeModal) == null || e.call(this);
  }
  get overlayEl() {
    return x.getShadowRootElement(this, ".wcm-overlay");
  }
  get containerEl() {
    return x.getShadowRootElement(this, ".wcm-container");
  }
  toggleBodyScroll(e) {
    if (document.querySelector("body"))
      if (e) {
        const t = document.getElementById("wcm-styles");
        t == null || t.remove();
      } else
        document.head.insertAdjacentHTML(
          "beforeend",
          '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'
        );
  }
  onCloseModal(e) {
    e.target === e.currentTarget && ce.close();
  }
  onOpenModalEvent() {
    this.toggleBodyScroll(!1),
      this.addKeyboardEvents(),
      (this.open = !0),
      setTimeout(async () => {
        const e = x.isMobileAnimation()
            ? { y: ["50vh", "0vh"] }
            : { scale: [0.98, 1] },
          t = 0.1,
          r = 0.2;
        await Promise.all([
          mt(this.overlayEl, { opacity: [0, 1] }, { delay: t, duration: r })
            .finished,
          mt(this.containerEl, e, { delay: t, duration: r }).finished,
        ]),
          (this.active = !0);
      }, 0);
  }
  async onCloseModalEvent() {
    this.toggleBodyScroll(!0), this.removeKeyboardEvents();
    const e = x.isMobileAnimation()
        ? { y: ["0vh", "50vh"] }
        : { scale: [1, 0.98] },
      t = 0.2;
    await Promise.all([
      mt(this.overlayEl, { opacity: [1, 0] }, { duration: t }).finished,
      mt(this.containerEl, e, { duration: t }).finished,
    ]),
      this.containerEl.removeAttribute("style"),
      (this.active = !1),
      (this.open = !1);
  }
  addKeyboardEvents() {
    (this.abortController = new AbortController()),
      window.addEventListener(
        "keydown",
        (e) => {
          var t;
          e.key === "Escape"
            ? ce.close()
            : e.key === "Tab" &&
              (((t = e.target) != null && t.tagName.includes("wcm-")) ||
                this.containerEl.focus());
        },
        this.abortController
      ),
      this.containerEl.focus();
  }
  removeKeyboardEvents() {
    var e;
    (e = this.abortController) == null || e.abort(),
      (this.abortController = void 0);
  }
  render() {
    const e = { "wcm-overlay": !0, "wcm-active": this.active };
    return h`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${G(
      e
    )}" @click="${
      this.onCloseModal
    }" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${
      this.open
        ? h`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>`
        : null
    }</div></div>`;
  }
};
(Ut.styles = [_.globalCss, Ua]),
  Xe([W()], Ut.prototype, "open", 2),
  Xe([W()], Ut.prototype, "active", 2),
  (Ut = Xe([I("wcm-modal")], Ut));
const ja = O`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
var za = Object.defineProperty,
  Fa = Object.getOwnPropertyDescriptor,
  Wt = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? Fa(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && za(t, r, o), o;
  };
let dt = class extends A {
  constructor() {
    super(...arguments),
      (this.isMobile = !1),
      (this.isDesktop = !1),
      (this.isWeb = !1),
      (this.isRetry = !1);
  }
  onMobile() {
    C.isMobile()
      ? N.replace("MobileConnecting")
      : N.replace("MobileQrcodeConnecting");
  }
  onDesktop() {
    N.replace("DesktopConnecting");
  }
  onWeb() {
    N.replace("WebConnecting");
  }
  render() {
    return h`<div>${this.isRetry ? h`<slot></slot>` : null} ${
      this.isMobile
        ? h`<wcm-button .onClick="${this.onMobile}" .iconLeft="${R.MOBILE_ICON}" variant="outline">Mobile</wcm-button>`
        : null
    } ${
      this.isDesktop
        ? h`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${R.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>`
        : null
    } ${
      this.isWeb
        ? h`<wcm-button .onClick="${this.onWeb}" .iconLeft="${R.GLOBE_ICON}" variant="outline">Web</wcm-button>`
        : null
    }</div>`;
  }
};
(dt.styles = [_.globalCss, ja]),
  Wt([$({ type: Boolean })], dt.prototype, "isMobile", 2),
  Wt([$({ type: Boolean })], dt.prototype, "isDesktop", 2),
  Wt([$({ type: Boolean })], dt.prototype, "isWeb", 2),
  Wt([$({ type: Boolean })], dt.prototype, "isRetry", 2),
  (dt = Wt([I("wcm-platform-selection")], dt));
const Za = O`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
var Va = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let tr = class extends A {
  onClick() {
    N.push("WalletExplorer");
  }
  render() {
    const { recomendedWallets: e } = U.state,
      t = At.manualWallets(),
      r = [...e, ...t].reverse().slice(0, 4);
    return h`<button @click="${this.onClick}"><div class="wcm-icons">${r.map(
      (n) => {
        const o = x.getWalletIcon(n);
        if (o) return h`<img crossorigin="anonymous" src="${o}">`;
        const i = x.getWalletIcon({ id: n.id });
        return i
          ? h`<img crossorigin="anonymous" src="${i}">`
          : R.WALLET_PLACEHOLDER;
      }
    )} ${[...Array(4 - r.length)].map(
      () => R.WALLET_PLACEHOLDER
    )}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
  }
};
(tr.styles = [_.globalCss, Za]),
  (tr = Va([I("wcm-view-all-wallets-button")], tr));
const Ka = O`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
var qa = Object.defineProperty,
  Ya = Object.getOwnPropertyDescriptor,
  ie = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? Ya(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && qa(t, r, o), o;
  };
let xt = class extends A {
  constructor() {
    super(),
      (this.walletId = ""),
      (this.imageId = ""),
      (this.uri = ""),
      setTimeout(() => {
        const { walletConnectUri: e } = q.state;
        this.uri = e;
      }, 0);
  }
  get overlayEl() {
    return x.getShadowRootElement(this, ".wcm-qr-container");
  }
  render() {
    return h`<div class="wcm-qr-container">${
      this.uri
        ? h`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${
            this.uri
          }" walletId="${D(this.walletId)}" imageId="${D(
            this.imageId
          )}"></wcm-qrcode>`
        : h`<wcm-spinner></wcm-spinner>`
    }</div>`;
  }
};
(xt.styles = [_.globalCss, Ka]),
  ie([$()], xt.prototype, "walletId", 2),
  ie([$()], xt.prototype, "imageId", 2),
  ie([W()], xt.prototype, "uri", 2),
  (xt = ie([I("wcm-walletconnect-qr")], xt));
var Ja = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let er = class extends A {
  viewTemplate() {
    return C.isAndroid()
      ? h`<wcm-android-wallet-selection></wcm-android-wallet-selection>`
      : C.isMobile()
      ? h`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>`
      : h`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
  }
  render() {
    return h`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
  }
};
(er.styles = [_.globalCss]), (er = Ja([I("wcm-connect-wallet-view")], er));
const Ga = O`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var Qa = Object.defineProperty,
  Xa = Object.getOwnPropertyDescriptor,
  to = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? Xa(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && Qa(t, r, o), o;
  };
let ae = class extends A {
  constructor() {
    super(), (this.isError = !1), this.openDesktopApp();
  }
  onFormatAndRedirect(e) {
    const { desktop: t, name: r } = C.getWalletRouterData(),
      n = t == null ? void 0 : t.native;
    if (n) {
      const o = C.formatNativeUrl(n, e, r);
      C.openHref(o, "_self");
    }
  }
  openDesktopApp() {
    const { walletConnectUri: e } = q.state,
      t = C.getWalletRouterData();
    x.setRecentWallet(t), e && this.onFormatAndRedirect(e);
  }
  render() {
    const { name: e, id: t, image_id: r } = C.getWalletRouterData(),
      { isMobile: n, isWeb: o } = x.getCachedRouterWalletPlatforms();
    return h`<wcm-modal-header title="${e}" .onAction="${
      x.handleUriCopy
    }" .actionIcon="${
      R.COPY_ICON
    }"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${D(
      r
    )}" label="${`Continue in ${e}...`}" .isError="${
      this.isError
    }"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${e} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${n}" .isWeb="${o}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(
      this
    )}" .iconRight="${
      R.RETRY_ICON
    }">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
(ae.styles = [_.globalCss, Ga]),
  to([W()], ae.prototype, "isError", 2),
  (ae = to([I("wcm-desktop-connecting-view")], ae));
const ts = O`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
var es = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let rr = class extends A {
  onInstall(e) {
    e && C.openHref(e, "_blank");
  }
  render() {
    const {
      name: e,
      id: t,
      image_id: r,
      homepage: n,
    } = C.getWalletRouterData();
    return h`<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${D(
      r
    )}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${e} to continue. If multiple browser extensions are installed, disable non ${e} ones and try again`}</wcm-text><wcm-button .onClick="${() =>
      this.onInstall(n)}" .iconLeft="${
      R.ARROW_DOWN_ICON
    }">Download</wcm-button></wcm-info-footer>`;
  }
};
(rr.styles = [_.globalCss, ts]), (rr = es([I("wcm-install-wallet-view")], rr));
const rs = O`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
var os = Object.defineProperty,
  ns = Object.getOwnPropertyDescriptor,
  eo = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? ns(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && os(t, r, o), o;
  };
let se = class extends A {
  constructor() {
    super(), (this.isError = !1), this.openMobileApp();
  }
  onFormatAndRedirect(e, t = !1) {
    const { mobile: r, name: n } = C.getWalletRouterData(),
      o = r == null ? void 0 : r.native,
      i = r == null ? void 0 : r.universal;
    if (o && !t) {
      const a = C.formatNativeUrl(o, e, n);
      C.openHref(a, "_self");
    } else if (i) {
      const a = C.formatUniversalUrl(i, e, n);
      C.openHref(a, "_self");
    }
  }
  openMobileApp(e = !1) {
    const { walletConnectUri: t } = q.state,
      r = C.getWalletRouterData();
    x.setRecentWallet(r), t && this.onFormatAndRedirect(t, e);
  }
  onGoToAppStore(e) {
    e && C.openHref(e, "_blank");
  }
  render() {
    const {
        name: e,
        id: t,
        image_id: r,
        app: n,
        mobile: o,
      } = C.getWalletRouterData(),
      { isWeb: i } = x.getCachedRouterWalletPlatforms(),
      a = n == null ? void 0 : n.ios,
      s = o == null ? void 0 : o.universal;
    return h`<wcm-modal-header title="${e}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${D(
      r
    )}" label="Tap 'Open' to continue…" .isError="${
      this.isError
    }"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${i}" .isRetry="${!0}"><wcm-button .onClick="${() =>
      this.openMobileApp(!1)}" .iconRight="${
      R.RETRY_ICON
    }">Retry</wcm-button></wcm-platform-selection>${
      s
        ? h`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() =>
            this.openMobileApp(!0)}">Try this alternate link</span></wcm-text>`
        : null
    }</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${t}" imageId="${D(
      r
    )}"></wcm-wallet-image><wcm-text>${`Get ${e}`}</wcm-text></div><wcm-button .iconRight="${
      R.ARROW_RIGHT_ICON
    }" .onClick="${() =>
      this.onGoToAppStore(
        a
      )}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
  }
};
(se.styles = [_.globalCss, rs]),
  eo([W()], se.prototype, "isError", 2),
  (se = eo([I("wcm-mobile-connecting-view")], se));
const is = O`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var as = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let or = class extends A {
  render() {
    const { name: e, id: t, image_id: r } = C.getWalletRouterData(),
      { isDesktop: n, isWeb: o } = x.getCachedRouterWalletPlatforms();
    return h`<wcm-modal-header title="${e}" .onAction="${
      x.handleUriCopy
    }" .actionIcon="${
      R.COPY_ICON
    }"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${t}" imageId="${D(
      r
    )}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${e} app`}</wcm-text><wcm-platform-selection .isDesktop="${n}" .isWeb="${o}"></wcm-platform-selection></wcm-info-footer>`;
  }
};
(or.styles = [_.globalCss, is]),
  (or = as([I("wcm-mobile-qr-connecting-view")], or));
var ss = (e, t, r, n) => {
  for (var o = t, i = e.length - 1, a; i >= 0; i--)
    (a = e[i]) && (o = a(o) || o);
  return o;
};
let nr = class extends A {
  render() {
    return h`<wcm-modal-header title="Scan the code" .onAction="${x.handleUriCopy}" .actionIcon="${R.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
  }
};
(nr.styles = [_.globalCss]), (nr = ss([I("wcm-qrcode-view")], nr));
const ls = O`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
var cs = Object.defineProperty,
  ds = Object.getOwnPropertyDescriptor,
  Ht = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? ds(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && cs(t, r, o), o;
  };
const ir = 40;
let ht = class extends A {
  constructor() {
    super(...arguments),
      (this.loading = !U.state.wallets.listings.length),
      (this.firstFetch = !U.state.wallets.listings.length),
      (this.search = ""),
      (this.endReached = !1),
      (this.intersectionObserver = void 0),
      (this.searchDebounce = x.debounce((e) => {
        e.length >= 1
          ? ((this.firstFetch = !0),
            (this.endReached = !1),
            (this.search = e),
            U.resetSearch(),
            this.fetchWallets())
          : this.search &&
            ((this.search = ""),
            (this.endReached = this.isLastPage()),
            U.resetSearch());
      }));
  }
  firstUpdated() {
    this.createPaginationObserver();
  }
  disconnectedCallback() {
    var e;
    (e = this.intersectionObserver) == null || e.disconnect();
  }
  get placeholderEl() {
    return x.getShadowRootElement(this, ".wcm-placeholder-block");
  }
  createPaginationObserver() {
    (this.intersectionObserver = new IntersectionObserver(([e]) => {
      e.isIntersecting &&
        !(this.search && this.firstFetch) &&
        this.fetchWallets();
    })),
      this.intersectionObserver.observe(this.placeholderEl);
  }
  isLastPage() {
    const { wallets: e, search: t } = U.state,
      { listings: r, total: n } = this.search ? t : e;
    return n <= ir || r.length >= n;
  }
  async fetchWallets() {
    var e;
    const { wallets: t, search: r } = U.state,
      { listings: n, total: o, page: i } = this.search ? r : t;
    if (!this.endReached && (this.firstFetch || (o > ir && n.length < o)))
      try {
        this.loading = !0;
        const a = (e = q.state.chains) == null ? void 0 : e.join(","),
          { listings: s } = await U.getWallets({
            page: this.firstFetch ? 1 : i + 1,
            entries: ir,
            search: this.search,
            version: 2,
            chains: a,
          }),
          l = s.map((c) => x.getWalletIcon(c));
        await Promise.all([
          ...l.map(async (c) => x.preloadImage(c)),
          C.wait(300),
        ]),
          (this.endReached = this.isLastPage());
      } catch (a) {
        console.error(a), ot.openToast(x.getErrorMessage(a), "error");
      } finally {
        (this.loading = !1), (this.firstFetch = !1);
      }
  }
  onConnect(e) {
    C.isAndroid() ? x.handleMobileLinking(e) : x.goToConnectingView(e);
  }
  onSearchChange(e) {
    const { value: t } = e.target;
    this.searchDebounce(t);
  }
  render() {
    const { wallets: e, search: t } = U.state,
      { listings: r } = this.search ? t : e,
      n = this.loading && !r.length,
      o = this.search.length >= 3;
    let i = at.manualWalletsTemplate(),
      a = at.recomendedWalletsTemplate(!0);
    o &&
      ((i = i.filter(({ values: c }) => x.caseSafeIncludes(c[0], this.search))),
      (a = a.filter(({ values: c }) => x.caseSafeIncludes(c[0], this.search))));
    const s = !this.loading && !r.length && !a.length,
      l = {
        "wcm-loading": n,
        "wcm-end-reached": this.endReached || !this.loading,
        "wcm-empty": s,
      };
    return h`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(
      this
    )}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${G(
      l
    )}"><div class="wcm-grid">${n ? null : i} ${n ? null : a} ${
      n
        ? null
        : r.map(
            (c) =>
              h`${
                c
                  ? h`<wcm-wallet-button imageId="${c.image_id}" name="${
                      c.name
                    }" walletId="${c.id}" .onClick="${() =>
                      this.onConnect(c)}"></wcm-wallet-button>`
                  : null
              }`
          )
    }</div><div class="wcm-placeholder-block">${
      s
        ? h`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>`
        : null
    } ${
      !s && this.loading ? h`<wcm-spinner></wcm-spinner>` : null
    }</div></wcm-modal-content>`;
  }
};
(ht.styles = [_.globalCss, ls]),
  Ht([W()], ht.prototype, "loading", 2),
  Ht([W()], ht.prototype, "firstFetch", 2),
  Ht([W()], ht.prototype, "search", 2),
  Ht([W()], ht.prototype, "endReached", 2),
  (ht = Ht([I("wcm-wallet-explorer-view")], ht));
const hs = O`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
var us = Object.defineProperty,
  ms = Object.getOwnPropertyDescriptor,
  ro = (e, t, r, n) => {
    for (
      var o = n > 1 ? void 0 : n ? ms(t, r) : t, i = e.length - 1, a;
      i >= 0;
      i--
    )
      (a = e[i]) && (o = (n ? a(t, r, o) : a(o)) || o);
    return n && o && us(t, r, o), o;
  };
let le = class extends A {
  constructor() {
    super(), (this.isError = !1), this.openWebWallet();
  }
  onFormatAndRedirect(e) {
    const { desktop: t, name: r } = C.getWalletRouterData(),
      n = t == null ? void 0 : t.universal;
    if (n) {
      const o = C.formatUniversalUrl(n, e, r);
      C.openHref(o, "_blank");
    }
  }
  openWebWallet() {
    const { walletConnectUri: e } = q.state,
      t = C.getWalletRouterData();
    x.setRecentWallet(t), e && this.onFormatAndRedirect(e);
  }
  render() {
    const { name: e, id: t, image_id: r } = C.getWalletRouterData(),
      { isMobile: n, isDesktop: o } = x.getCachedRouterWalletPlatforms(),
      i = C.isMobile();
    return h`<wcm-modal-header title="${e}" .onAction="${
      x.handleUriCopy
    }" .actionIcon="${
      R.COPY_ICON
    }"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${t}" imageId="${D(
      r
    )}" label="${`Continue in ${e}...`}" .isError="${
      this.isError
    }"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${e} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${n}" .isDesktop="${
      i ? !1 : o
    }" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(
      this
    )}" .iconRight="${
      R.RETRY_ICON
    }">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
  }
};
(le.styles = [_.globalCss, hs]),
  ro([W()], le.prototype, "isError", 2),
  (le = ro([I("wcm-web-connecting-view")], le));
export { Ut as WcmModal, X as WcmQrCode };
