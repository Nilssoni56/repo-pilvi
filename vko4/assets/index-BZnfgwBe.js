(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function tv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gd = { exports: {} },
  Io = {},
  Xd = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mi = Symbol.for("react.element"),
  nv = Symbol.for("react.portal"),
  rv = Symbol.for("react.fragment"),
  iv = Symbol.for("react.strict_mode"),
  sv = Symbol.for("react.profiler"),
  ov = Symbol.for("react.provider"),
  lv = Symbol.for("react.context"),
  av = Symbol.for("react.forward_ref"),
  uv = Symbol.for("react.suspense"),
  cv = Symbol.for("react.memo"),
  hv = Symbol.for("react.lazy"),
  Vc = Symbol.iterator;
function dv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Vc && e[Vc]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Qd = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yd = Object.assign,
  qd = {};
function wr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = qd), (this.updater = n || Qd);
}
wr.prototype.isReactComponent = {};
wr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Jd() {}
Jd.prototype = wr.prototype;
function ou(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = qd), (this.updater = n || Qd);
}
var lu = (ou.prototype = new Jd());
lu.constructor = ou;
Yd(lu, wr.prototype);
lu.isPureReactComponent = !0;
var Bc = Array.isArray,
  bd = Object.prototype.hasOwnProperty,
  au = { current: null },
  Zd = { key: !0, ref: !0, __self: !0, __source: !0 };
function ef(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = "" + t.key), t))
      bd.call(t, r) && !Zd.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps) for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return { $$typeof: Mi, type: e, key: s, ref: o, props: i, _owner: au.current };
}
function fv(e, t) {
  return { $$typeof: Mi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function uu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mi;
}
function pv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Hc = /\/+/g;
function ul(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? pv("" + e.key) : t.toString(36);
}
function Ss(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Mi:
          case nv:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + ul(o, 0) : r),
      Bc(i)
        ? ((n = ""),
          e != null && (n = e.replace(Hc, "$&/") + "/"),
          Ss(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (uu(i) &&
            (i = fv(i, n + (!i.key || (o && o.key === i.key) ? "" : ("" + i.key).replace(Hc, "$&/") + "/") + e)),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Bc(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var a = r + ul(s, l);
      o += Ss(s, t, n, a, i);
    }
  else if (((a = dv(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(s = e.next()).done; ) (s = s.value), (a = r + ul(s, l++)), (o += Ss(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function es(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ss(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function gv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ce = { current: null },
  Is = { transition: null },
  mv = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: Is, ReactCurrentOwner: au };
function tf() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = {
  map: es,
  forEach: function (e, t, n) {
    es(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      es(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      es(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!uu(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
D.Component = wr;
D.Fragment = rv;
D.Profiler = sv;
D.PureComponent = ou;
D.StrictMode = iv;
D.Suspense = uv;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mv;
D.act = tf;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Yd({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = au.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t) bd.call(t, a) && !Zd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Mi, type: e.type, key: i, ref: s, props: r, _owner: o };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: lv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ov, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = ef;
D.createFactory = function (e) {
  var t = ef.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: av, render: e };
};
D.isValidElement = uu;
D.lazy = function (e) {
  return { $$typeof: hv, _payload: { _status: -1, _result: e }, _init: gv };
};
D.memo = function (e, t) {
  return { $$typeof: cv, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = Is.transition;
  Is.transition = {};
  try {
    e();
  } finally {
    Is.transition = t;
  }
};
D.unstable_act = tf;
D.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
D.useContext = function (e) {
  return Ce.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
D.useId = function () {
  return Ce.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return Ce.current.useRef(e);
};
D.useState = function (e) {
  return Ce.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return Ce.current.useTransition();
};
D.version = "18.3.1";
Xd.exports = D;
var ur = Xd.exports;
const vv = tv(ur);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yv = ur,
  _v = Symbol.for("react.element"),
  wv = Symbol.for("react.fragment"),
  Ev = Object.prototype.hasOwnProperty,
  Sv = yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Iv = { key: !0, ref: !0, __self: !0, __source: !0 };
function nf(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Ev.call(t, r) && !Iv.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return { $$typeof: _v, type: e, key: s, ref: o, props: i, _owner: Sv.current };
}
Io.Fragment = wv;
Io.jsx = nf;
Io.jsxs = nf;
Gd.exports = Io;
var z = Gd.exports,
  Ql = {},
  rf = { exports: {} },
  Fe = {},
  sf = { exports: {} },
  of = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, N) {
    var O = k.length;
    k.push(N);
    e: for (; 0 < O; ) {
      var J = (O - 1) >>> 1,
        re = k[J];
      if (0 < i(re, N)) (k[J] = N), (k[O] = re), (O = J);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var N = k[0],
      O = k.pop();
    if (O !== N) {
      k[0] = O;
      e: for (var J = 0, re = k.length, bi = re >>> 1; J < bi; ) {
        var hn = 2 * (J + 1) - 1,
          al = k[hn],
          dn = hn + 1,
          Zi = k[dn];
        if (0 > i(al, O))
          dn < re && 0 > i(Zi, al) ? ((k[J] = Zi), (k[dn] = O), (J = dn)) : ((k[J] = al), (k[hn] = O), (J = hn));
        else if (dn < re && 0 > i(Zi, O)) (k[J] = Zi), (k[dn] = O), (J = dn);
        else break e;
      }
    }
    return N;
  }
  function i(k, N) {
    var O = k.sortIndex - N.sortIndex;
    return O !== 0 ? O : k.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    p = null,
    g = 3,
    y = !1,
    _ = !1,
    w = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(k) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= k) r(u), (N.sortIndex = N.expirationTime), t(a, N);
      else break;
      N = n(u);
    }
  }
  function m(k) {
    if (((w = !1), f(k), !_))
      if (n(a) !== null) (_ = !0), ol(S);
      else {
        var N = n(u);
        N !== null && ll(m, N.startTime - k);
      }
  }
  function S(k, N) {
    (_ = !1), w && ((w = !1), h(P), (P = -1)), (y = !0);
    var O = g;
    try {
      for (f(N), p = n(a); p !== null && (!(p.expirationTime > N) || (k && !Qe())); ) {
        var J = p.callback;
        if (typeof J == "function") {
          (p.callback = null), (g = p.priorityLevel);
          var re = J(p.expirationTime <= N);
          (N = e.unstable_now()), typeof re == "function" ? (p.callback = re) : p === n(a) && r(a), f(N);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var bi = !0;
      else {
        var hn = n(u);
        hn !== null && ll(m, hn.startTime - N), (bi = !1);
      }
      return bi;
    } finally {
      (p = null), (g = O), (y = !1);
    }
  }
  var T = !1,
    C = null,
    P = -1,
    B = 5,
    L = -1;
  function Qe() {
    return !(e.unstable_now() - L < B);
  }
  function Rr() {
    if (C !== null) {
      var k = e.unstable_now();
      L = k;
      var N = !0;
      try {
        N = C(!0, k);
      } finally {
        N ? Nr() : ((T = !1), (C = null));
      }
    } else T = !1;
  }
  var Nr;
  if (typeof c == "function")
    Nr = function () {
      c(Rr);
    };
  else if (typeof MessageChannel < "u") {
    var zc = new MessageChannel(),
      ev = zc.port2;
    (zc.port1.onmessage = Rr),
      (Nr = function () {
        ev.postMessage(null);
      });
  } else
    Nr = function () {
      j(Rr, 0);
    };
  function ol(k) {
    (C = k), T || ((T = !0), Nr());
  }
  function ll(k, N) {
    P = j(function () {
      k(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      _ || y || ((_ = !0), ol(S));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (k) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = g;
      }
      var O = g;
      g = N;
      try {
        return k();
      } finally {
        g = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, N) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var O = g;
      g = k;
      try {
        return N();
      } finally {
        g = O;
      }
    }),
    (e.unstable_scheduleCallback = function (k, N, O) {
      var J = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? J + O : J))
          : (O = J),
        k)
      ) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return (
        (re = O + re),
        (k = { id: d++, callback: N, priorityLevel: k, startTime: O, expirationTime: re, sortIndex: -1 }),
        O > J
          ? ((k.sortIndex = O), t(u, k), n(a) === null && k === n(u) && (w ? (h(P), (P = -1)) : (w = !0), ll(m, O - J)))
          : ((k.sortIndex = re), t(a, k), _ || y || ((_ = !0), ol(S))),
        k
      );
    }),
    (e.unstable_shouldYield = Qe),
    (e.unstable_wrapCallback = function (k) {
      var N = g;
      return function () {
        var O = g;
        g = N;
        try {
          return k.apply(this, arguments);
        } finally {
          g = O;
        }
      };
    });
})(of);
sf.exports = of;
var kv = sf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tv = ur,
  Ue = kv;
function v(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var lf = new Set(),
  oi = {};
function Ln(e, t) {
  cr(e, t), cr(e + "Capture", t);
}
function cr(e, t) {
  for (oi[e] = t, e = 0; e < t.length; e++) lf.add(t[e]);
}
var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Yl = Object.prototype.hasOwnProperty,
  Cv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wc = {},
  Kc = {};
function Pv(e) {
  return Yl.call(Kc, e) ? !0 : Yl.call(Wc, e) ? !1 : Cv.test(e) ? (Kc[e] = !0) : ((Wc[e] = !0), !1);
}
function Av(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rv(e, t, n, r) {
  if (t === null || typeof t > "u" || Av(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Pe(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var de = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  de[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  de[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  de[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    de[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  de[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  de[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  de[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  de[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var cu = /[\-:]([a-z])/g;
function hu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(cu, hu);
    de[t] = new Pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(cu, hu);
  de[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(cu, hu);
  de[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  de[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
de.xlinkHref = new Pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  de[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function du(e, t, n, r) {
  var i = de.hasOwnProperty(t) ? de[t] : null;
  (i !== null
    ? i.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (Rv(t, n, i, r) && (n = null),
    r || i === null
      ? Pv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nt = Tv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ts = Symbol.for("react.element"),
  Fn = Symbol.for("react.portal"),
  jn = Symbol.for("react.fragment"),
  fu = Symbol.for("react.strict_mode"),
  ql = Symbol.for("react.profiler"),
  af = Symbol.for("react.provider"),
  uf = Symbol.for("react.context"),
  pu = Symbol.for("react.forward_ref"),
  Jl = Symbol.for("react.suspense"),
  bl = Symbol.for("react.suspense_list"),
  gu = Symbol.for("react.memo"),
  xt = Symbol.for("react.lazy"),
  cf = Symbol.for("react.offscreen"),
  Gc = Symbol.iterator;
function Or(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Gc && e[Gc]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Y = Object.assign,
  cl;
function Vr(e) {
  if (cl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      cl = (t && t[1]) || "";
    }
  return (
    `
` +
    cl +
    e
  );
}
var hl = !1;
function dl(e, t) {
  if (!e || hl) return "";
  hl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          l = s.length - 1;
        1 <= o && 0 <= l && i[o] !== s[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (i[o] !== s[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || i[o] !== s[l])) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    (hl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Vr(e) : "";
}
function Nv(e) {
  switch (e.tag) {
    case 5:
      return Vr(e.type);
    case 16:
      return Vr("Lazy");
    case 13:
      return Vr("Suspense");
    case 19:
      return Vr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = dl(e.type, !1)), e;
    case 11:
      return (e = dl(e.type.render, !1)), e;
    case 1:
      return (e = dl(e.type, !0)), e;
    default:
      return "";
  }
}
function Zl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case jn:
      return "Fragment";
    case Fn:
      return "Portal";
    case ql:
      return "Profiler";
    case fu:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case bl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case uf:
        return (e.displayName || "Context") + ".Consumer";
      case af:
        return (e._context.displayName || "Context") + ".Provider";
      case pu:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case gu:
        return (t = e.displayName || null), t !== null ? t : Zl(e.type) || "Memo";
      case xt:
        (t = e._payload), (e = e._init);
        try {
          return Zl(e(t));
        } catch {}
    }
  return null;
}
function Ov(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Zl(t);
    case 8:
      return t === fu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function nn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function hf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Lv(e) {
  var t = hf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ns(e) {
  e._valueTracker || (e._valueTracker = Lv(e));
}
function df(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = hf(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Fs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ea(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Xc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function ff(e, t) {
  (t = t.checked), t != null && du(e, "checked", t, !1);
}
function ta(e, t) {
  ff(e, t);
  var n = nn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? na(e, t.type, n) : t.hasOwnProperty("defaultValue") && na(e, t.type, nn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Qc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function na(e, t, n) {
  (t !== "number" || Fs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Br = Array.isArray;
function bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ra(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(v(91));
  return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Yc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(v(92));
      if (Br(n)) {
        if (1 < n.length) throw Error(v(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function pf(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function qc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function gf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ia(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? gf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var rs,
  mf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        rs = rs || document.createElement("div"),
          rs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = rs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function li(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Yr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Dv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Yr).forEach(function (e) {
  Dv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Yr[t] = Yr[e]);
  });
});
function vf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Yr.hasOwnProperty(e) && Yr[e])
    ? ("" + t).trim()
    : t + "px";
}
function yf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = vf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var xv = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function sa(e, t) {
  if (t) {
    if (xv[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(v(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(v(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(v(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(v(62));
  }
}
function oa(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var la = null;
function mu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var aa = null,
  Zn = null,
  er = null;
function Jc(e) {
  if ((e = Fi(e))) {
    if (typeof aa != "function") throw Error(v(280));
    var t = e.stateNode;
    t && ((t = Ao(t)), aa(e.stateNode, e.type, t));
  }
}
function _f(e) {
  Zn ? (er ? er.push(e) : (er = [e])) : (Zn = e);
}
function wf() {
  if (Zn) {
    var e = Zn,
      t = er;
    if (((er = Zn = null), Jc(e), t)) for (e = 0; e < t.length; e++) Jc(t[e]);
  }
}
function Ef(e, t) {
  return e(t);
}
function Sf() {}
var fl = !1;
function If(e, t, n) {
  if (fl) return e(t, n);
  fl = !0;
  try {
    return Ef(e, t, n);
  } finally {
    (fl = !1), (Zn !== null || er !== null) && (Sf(), wf());
  }
}
function ai(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ao(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(v(231, t, typeof n));
  return n;
}
var ua = !1;
if (kt)
  try {
    var Lr = {};
    Object.defineProperty(Lr, "passive", {
      get: function () {
        ua = !0;
      },
    }),
      window.addEventListener("test", Lr, Lr),
      window.removeEventListener("test", Lr, Lr);
  } catch {
    ua = !1;
  }
function Mv(e, t, n, r, i, s, o, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var qr = !1,
  js = null,
  zs = !1,
  ca = null,
  $v = {
    onError: function (e) {
      (qr = !0), (js = e);
    },
  };
function Uv(e, t, n, r, i, s, o, l, a) {
  (qr = !1), (js = null), Mv.apply($v, arguments);
}
function Fv(e, t, n, r, i, s, o, l, a) {
  if ((Uv.apply(this, arguments), qr)) {
    if (qr) {
      var u = js;
      (qr = !1), (js = null);
    } else throw Error(v(198));
    zs || ((zs = !0), (ca = u));
  }
}
function Dn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function kf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function bc(e) {
  if (Dn(e) !== e) throw Error(v(188));
}
function jv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Dn(e)), t === null)) throw Error(v(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return bc(i), e;
        if (s === r) return bc(i), t;
        s = s.sibling;
      }
      throw Error(v(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, l = i.child; l; ) {
        if (l === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (l === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = s.child; l; ) {
          if (l === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (l === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(v(189));
      }
    }
    if (n.alternate !== r) throw Error(v(190));
  }
  if (n.tag !== 3) throw Error(v(188));
  return n.stateNode.current === n ? e : t;
}
function Tf(e) {
  return (e = jv(e)), e !== null ? Cf(e) : null;
}
function Cf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Pf = Ue.unstable_scheduleCallback,
  Zc = Ue.unstable_cancelCallback,
  zv = Ue.unstable_shouldYield,
  Vv = Ue.unstable_requestPaint,
  b = Ue.unstable_now,
  Bv = Ue.unstable_getCurrentPriorityLevel,
  vu = Ue.unstable_ImmediatePriority,
  Af = Ue.unstable_UserBlockingPriority,
  Vs = Ue.unstable_NormalPriority,
  Hv = Ue.unstable_LowPriority,
  Rf = Ue.unstable_IdlePriority,
  ko = null,
  ut = null;
function Wv(e) {
  if (ut && typeof ut.onCommitFiberRoot == "function")
    try {
      ut.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ze = Math.clz32 ? Math.clz32 : Xv,
  Kv = Math.log,
  Gv = Math.LN2;
function Xv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Kv(e) / Gv) | 0)) | 0;
}
var is = 64,
  ss = 4194304;
function Hr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Bs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~i;
    l !== 0 ? (r = Hr(l)) : ((s &= o), s !== 0 && (r = Hr(s)));
  } else (o = n & ~i), o !== 0 ? (r = Hr(o)) : s !== 0 && (r = Hr(s));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - Ze(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Qv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Yv(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
    var o = 31 - Ze(s),
      l = 1 << o,
      a = i[o];
    a === -1 ? (!(l & n) || l & r) && (i[o] = Qv(l, t)) : a <= t && (e.expiredLanes |= l), (s &= ~l);
  }
}
function ha(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Nf() {
  var e = is;
  return (is <<= 1), !(is & 4194240) && (is = 64), e;
}
function pl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function $i(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ze(t)),
    (e[t] = n);
}
function qv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ze(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function yu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ze(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var U = 0;
function Of(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Lf,
  _u,
  Df,
  xf,
  Mf,
  da = !1,
  os = [],
  Wt = null,
  Kt = null,
  Gt = null,
  ui = new Map(),
  ci = new Map(),
  $t = [],
  Jv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function eh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wt = null;
      break;
    case "dragenter":
    case "dragleave":
      Kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Gt = null;
      break;
    case "pointerover":
    case "pointerout":
      ui.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ci.delete(t.pointerId);
  }
}
function Dr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: s, targetContainers: [i] }),
      t !== null && ((t = Fi(t)), t !== null && _u(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function bv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Wt = Dr(Wt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Kt = Dr(Kt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Gt = Dr(Gt, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return ui.set(s, Dr(ui.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (s = i.pointerId), ci.set(s, Dr(ci.get(s) || null, e, t, n, r, i)), !0;
  }
  return !1;
}
function $f(e) {
  var t = mn(e.target);
  if (t !== null) {
    var n = Dn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = kf(n)), t !== null)) {
          (e.blockedOn = t),
            Mf(e.priority, function () {
              Df(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ks(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = fa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (la = r), n.target.dispatchEvent(r), (la = null);
    } else return (t = Fi(n)), t !== null && _u(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function th(e, t, n) {
  ks(e) && n.delete(t);
}
function Zv() {
  (da = !1),
    Wt !== null && ks(Wt) && (Wt = null),
    Kt !== null && ks(Kt) && (Kt = null),
    Gt !== null && ks(Gt) && (Gt = null),
    ui.forEach(th),
    ci.forEach(th);
}
function xr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), da || ((da = !0), Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Zv)));
}
function hi(e) {
  function t(i) {
    return xr(i, e);
  }
  if (0 < os.length) {
    xr(os[0], e);
    for (var n = 1; n < os.length; n++) {
      var r = os[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wt !== null && xr(Wt, e), Kt !== null && xr(Kt, e), Gt !== null && xr(Gt, e), ui.forEach(t), ci.forEach(t), n = 0;
    n < $t.length;
    n++
  )
    (r = $t[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < $t.length && ((n = $t[0]), n.blockedOn === null); ) $f(n), n.blockedOn === null && $t.shift();
}
var tr = Nt.ReactCurrentBatchConfig,
  Hs = !0;
function ey(e, t, n, r) {
  var i = U,
    s = tr.transition;
  tr.transition = null;
  try {
    (U = 1), wu(e, t, n, r);
  } finally {
    (U = i), (tr.transition = s);
  }
}
function ty(e, t, n, r) {
  var i = U,
    s = tr.transition;
  tr.transition = null;
  try {
    (U = 4), wu(e, t, n, r);
  } finally {
    (U = i), (tr.transition = s);
  }
}
function wu(e, t, n, r) {
  if (Hs) {
    var i = fa(e, t, n, r);
    if (i === null) kl(e, t, r, Ws, n), eh(e, r);
    else if (bv(i, e, t, n, r)) r.stopPropagation();
    else if ((eh(e, r), t & 4 && -1 < Jv.indexOf(e))) {
      for (; i !== null; ) {
        var s = Fi(i);
        if ((s !== null && Lf(s), (s = fa(e, t, n, r)), s === null && kl(e, t, r, Ws, n), s === i)) break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else kl(e, t, r, null, n);
  }
}
var Ws = null;
function fa(e, t, n, r) {
  if (((Ws = null), (e = mu(r)), (e = mn(e)), e !== null))
    if (((t = Dn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = kf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ws = e), null;
}
function Uf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Bv()) {
        case vu:
          return 1;
        case Af:
          return 4;
        case Vs:
        case Hv:
          return 16;
        case Rf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null,
  Eu = null,
  Ts = null;
function Ff() {
  if (Ts) return Ts;
  var e,
    t = Eu,
    n = t.length,
    r,
    i = "value" in Bt ? Bt.value : Bt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Ts = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Cs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ls() {
  return !0;
}
function nh() {
  return !1;
}
function je(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e) e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? ls : nh),
      (this.isPropagationStopped = nh),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ls));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ls));
      },
      persist: function () {},
      isPersistent: ls,
    }),
    t
  );
}
var Er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Su = je(Er),
  Ui = Y({}, Er, { view: 0, detail: 0 }),
  ny = je(Ui),
  gl,
  ml,
  Mr,
  To = Y({}, Ui, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Iu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Mr &&
            (Mr && e.type === "mousemove"
              ? ((gl = e.screenX - Mr.screenX), (ml = e.screenY - Mr.screenY))
              : (ml = gl = 0),
            (Mr = e)),
          gl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ml;
    },
  }),
  rh = je(To),
  ry = Y({}, To, { dataTransfer: 0 }),
  iy = je(ry),
  sy = Y({}, Ui, { relatedTarget: 0 }),
  vl = je(sy),
  oy = Y({}, Er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ly = je(oy),
  ay = Y({}, Er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  uy = je(ay),
  cy = Y({}, Er, { data: 0 }),
  ih = je(cy),
  hy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  dy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  fy = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function py(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = fy[e]) ? !!t[e] : !1;
}
function Iu() {
  return py;
}
var gy = Y({}, Ui, {
    key: function (e) {
      if (e.key) {
        var t = hy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Cs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? dy[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Iu,
    charCode: function (e) {
      return e.type === "keypress" ? Cs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Cs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  my = je(gy),
  vy = Y({}, To, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  sh = je(vy),
  yy = Y({}, Ui, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Iu,
  }),
  _y = je(yy),
  wy = Y({}, Er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ey = je(wy),
  Sy = Y({}, To, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Iy = je(Sy),
  ky = [9, 13, 27, 32],
  ku = kt && "CompositionEvent" in window,
  Jr = null;
kt && "documentMode" in document && (Jr = document.documentMode);
var Ty = kt && "TextEvent" in window && !Jr,
  jf = kt && (!ku || (Jr && 8 < Jr && 11 >= Jr)),
  oh = " ",
  lh = !1;
function zf(e, t) {
  switch (e) {
    case "keyup":
      return ky.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Vf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var zn = !1;
function Cy(e, t) {
  switch (e) {
    case "compositionend":
      return Vf(t);
    case "keypress":
      return t.which !== 32 ? null : ((lh = !0), oh);
    case "textInput":
      return (e = t.data), e === oh && lh ? null : e;
    default:
      return null;
  }
}
function Py(e, t) {
  if (zn) return e === "compositionend" || (!ku && zf(e, t)) ? ((e = Ff()), (Ts = Eu = Bt = null), (zn = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return jf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ay = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ah(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ay[e.type] : t === "textarea";
}
function Bf(e, t, n, r) {
  _f(r),
    (t = Ks(t, "onChange")),
    0 < t.length && ((n = new Su("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var br = null,
  di = null;
function Ry(e) {
  Zf(e, 0);
}
function Co(e) {
  var t = Hn(e);
  if (df(t)) return e;
}
function Ny(e, t) {
  if (e === "change") return t;
}
var Hf = !1;
if (kt) {
  var yl;
  if (kt) {
    var _l = "oninput" in document;
    if (!_l) {
      var uh = document.createElement("div");
      uh.setAttribute("oninput", "return;"), (_l = typeof uh.oninput == "function");
    }
    yl = _l;
  } else yl = !1;
  Hf = yl && (!document.documentMode || 9 < document.documentMode);
}
function ch() {
  br && (br.detachEvent("onpropertychange", Wf), (di = br = null));
}
function Wf(e) {
  if (e.propertyName === "value" && Co(di)) {
    var t = [];
    Bf(t, di, e, mu(e)), If(Ry, t);
  }
}
function Oy(e, t, n) {
  e === "focusin" ? (ch(), (br = t), (di = n), br.attachEvent("onpropertychange", Wf)) : e === "focusout" && ch();
}
function Ly(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Co(di);
}
function Dy(e, t) {
  if (e === "click") return Co(t);
}
function xy(e, t) {
  if (e === "input" || e === "change") return Co(t);
}
function My(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var tt = typeof Object.is == "function" ? Object.is : My;
function fi(e, t) {
  if (tt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Yl.call(t, i) || !tt(e[i], t[i])) return !1;
  }
  return !0;
}
function hh(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function dh(e, t) {
  var n = hh(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = hh(n);
  }
}
function Kf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Kf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Gf() {
  for (var e = window, t = Fs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Fs(e.document);
  }
  return t;
}
function Tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function $y(e) {
  var t = Gf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Kf(n.ownerDocument.documentElement, n)) {
    if (r !== null && Tu(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = dh(n, s));
        var o = dh(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Uy = kt && "documentMode" in document && 11 >= document.documentMode,
  Vn = null,
  pa = null,
  Zr = null,
  ga = !1;
function fh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ga ||
    Vn == null ||
    Vn !== Fs(r) ||
    ((r = Vn),
    "selectionStart" in r && Tu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Zr && fi(Zr, r)) ||
      ((Zr = r),
      (r = Ks(pa, "onSelect")),
      0 < r.length &&
        ((t = new Su("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Vn))));
}
function as(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var Bn = {
    animationend: as("Animation", "AnimationEnd"),
    animationiteration: as("Animation", "AnimationIteration"),
    animationstart: as("Animation", "AnimationStart"),
    transitionend: as("Transition", "TransitionEnd"),
  },
  wl = {},
  Xf = {};
kt &&
  ((Xf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bn.animationend.animation, delete Bn.animationiteration.animation, delete Bn.animationstart.animation),
  "TransitionEvent" in window || delete Bn.transitionend.transition);
function Po(e) {
  if (wl[e]) return wl[e];
  if (!Bn[e]) return e;
  var t = Bn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Xf) return (wl[e] = t[n]);
  return e;
}
var Qf = Po("animationend"),
  Yf = Po("animationiteration"),
  qf = Po("animationstart"),
  Jf = Po("transitionend"),
  bf = new Map(),
  ph =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function sn(e, t) {
  bf.set(e, t), Ln(t, [e]);
}
for (var El = 0; El < ph.length; El++) {
  var Sl = ph[El],
    Fy = Sl.toLowerCase(),
    jy = Sl[0].toUpperCase() + Sl.slice(1);
  sn(Fy, "on" + jy);
}
sn(Qf, "onAnimationEnd");
sn(Yf, "onAnimationIteration");
sn(qf, "onAnimationStart");
sn("dblclick", "onDoubleClick");
sn("focusin", "onFocus");
sn("focusout", "onBlur");
sn(Jf, "onTransitionEnd");
cr("onMouseEnter", ["mouseout", "mouseover"]);
cr("onMouseLeave", ["mouseout", "mouseover"]);
cr("onPointerEnter", ["pointerout", "pointerover"]);
cr("onPointerLeave", ["pointerout", "pointerover"]);
Ln("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ln("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ln("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Wr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  zy = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));
function gh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Fv(r, t, void 0, e), (e.currentTarget = null);
}
function Zf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== s && i.isPropagationStopped())) break e;
          gh(i, l, u), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]), (a = l.instance), (u = l.currentTarget), (l = l.listener), a !== s && i.isPropagationStopped())
          )
            break e;
          gh(i, l, u), (s = a);
        }
    }
  }
  if (zs) throw ((e = ca), (zs = !1), (ca = null), e);
}
function H(e, t) {
  var n = t[wa];
  n === void 0 && (n = t[wa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ep(t, e, 2, !1), n.add(r));
}
function Il(e, t, n) {
  var r = 0;
  t && (r |= 4), ep(n, e, r, t);
}
var us = "_reactListening" + Math.random().toString(36).slice(2);
function pi(e) {
  if (!e[us]) {
    (e[us] = !0),
      lf.forEach(function (n) {
        n !== "selectionchange" && (zy.has(n) || Il(n, !1, e), Il(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[us] || ((t[us] = !0), Il("selectionchange", !1, t));
  }
}
function ep(e, t, n, r) {
  switch (Uf(t)) {
    case 1:
      var i = ey;
      break;
    case 4:
      i = ty;
      break;
    default:
      i = wu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ua || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function kl(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo), a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = mn(l)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  If(function () {
    var u = s,
      d = mu(n),
      p = [];
    e: {
      var g = bf.get(e);
      if (g !== void 0) {
        var y = Su,
          _ = e;
        switch (e) {
          case "keypress":
            if (Cs(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = my;
            break;
          case "focusin":
            (_ = "focus"), (y = vl);
            break;
          case "focusout":
            (_ = "blur"), (y = vl);
            break;
          case "beforeblur":
          case "afterblur":
            y = vl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = rh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = iy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = _y;
            break;
          case Qf:
          case Yf:
          case qf:
            y = ly;
            break;
          case Jf:
            y = Ey;
            break;
          case "scroll":
            y = ny;
            break;
          case "wheel":
            y = Iy;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = uy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = sh;
        }
        var w = (t & 4) !== 0,
          j = !w && e === "scroll",
          h = w ? (g !== null ? g + "Capture" : null) : g;
        w = [];
        for (var c = u, f; c !== null; ) {
          f = c;
          var m = f.stateNode;
          if (
            (f.tag === 5 && m !== null && ((f = m), h !== null && ((m = ai(c, h)), m != null && w.push(gi(c, m, f)))),
            j)
          )
            break;
          c = c.return;
        }
        0 < w.length && ((g = new y(g, _, null, n, d)), p.push({ event: g, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          g && n !== la && (_ = n.relatedTarget || n.fromElement) && (mn(_) || _[Tt]))
        )
          break e;
        if (
          (y || g) &&
          ((g = d.window === d ? d : (g = d.ownerDocument) ? g.defaultView || g.parentWindow : window),
          y
            ? ((_ = n.relatedTarget || n.toElement),
              (y = u),
              (_ = _ ? mn(_) : null),
              _ !== null && ((j = Dn(_)), _ !== j || (_.tag !== 5 && _.tag !== 6)) && (_ = null))
            : ((y = null), (_ = u)),
          y !== _)
        ) {
          if (
            ((w = rh),
            (m = "onMouseLeave"),
            (h = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = sh), (m = "onPointerLeave"), (h = "onPointerEnter"), (c = "pointer")),
            (j = y == null ? g : Hn(y)),
            (f = _ == null ? g : Hn(_)),
            (g = new w(m, c + "leave", y, n, d)),
            (g.target = j),
            (g.relatedTarget = f),
            (m = null),
            mn(d) === u && ((w = new w(h, c + "enter", _, n, d)), (w.target = f), (w.relatedTarget = j), (m = w)),
            (j = m),
            y && _)
          )
            t: {
              for (w = y, h = _, c = 0, f = w; f; f = $n(f)) c++;
              for (f = 0, m = h; m; m = $n(m)) f++;
              for (; 0 < c - f; ) (w = $n(w)), c--;
              for (; 0 < f - c; ) (h = $n(h)), f--;
              for (; c--; ) {
                if (w === h || (h !== null && w === h.alternate)) break t;
                (w = $n(w)), (h = $n(h));
              }
              w = null;
            }
          else w = null;
          y !== null && mh(p, g, y, w, !1), _ !== null && j !== null && mh(p, j, _, w, !0);
        }
      }
      e: {
        if (
          ((g = u ? Hn(u) : window),
          (y = g.nodeName && g.nodeName.toLowerCase()),
          y === "select" || (y === "input" && g.type === "file"))
        )
          var S = Ny;
        else if (ah(g))
          if (Hf) S = xy;
          else {
            S = Ly;
            var T = Oy;
          }
        else
          (y = g.nodeName) && y.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (S = Dy);
        if (S && (S = S(e, u))) {
          Bf(p, S, n, d);
          break e;
        }
        T && T(e, g, u),
          e === "focusout" && (T = g._wrapperState) && T.controlled && g.type === "number" && na(g, "number", g.value);
      }
      switch (((T = u ? Hn(u) : window), e)) {
        case "focusin":
          (ah(T) || T.contentEditable === "true") && ((Vn = T), (pa = u), (Zr = null));
          break;
        case "focusout":
          Zr = pa = Vn = null;
          break;
        case "mousedown":
          ga = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ga = !1), fh(p, n, d);
          break;
        case "selectionchange":
          if (Uy) break;
        case "keydown":
        case "keyup":
          fh(p, n, d);
      }
      var C;
      if (ku)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        zn ? zf(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (jf &&
          n.locale !== "ko" &&
          (zn || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && zn && (C = Ff())
            : ((Bt = d), (Eu = "value" in Bt ? Bt.value : Bt.textContent), (zn = !0))),
        (T = Ks(u, P)),
        0 < T.length &&
          ((P = new ih(P, e, null, n, d)),
          p.push({ event: P, listeners: T }),
          C ? (P.data = C) : ((C = Vf(n)), C !== null && (P.data = C)))),
        (C = Ty ? Cy(e, n) : Py(e, n)) &&
          ((u = Ks(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new ih("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = C)));
    }
    Zf(p, t);
  });
}
function gi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ks(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s), (s = ai(e, n)), s != null && r.unshift(gi(e, s, i)), (s = ai(e, t)), s != null && r.push(gi(e, s, i))),
      (e = e.return);
  }
  return r;
}
function $n(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function mh(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = ai(n, s)), a != null && o.unshift(gi(n, a, l)))
        : i || ((a = ai(n, s)), a != null && o.push(gi(n, a, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Vy = /\r\n?/g,
  By = /\u0000|\uFFFD/g;
function vh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vy,
      `
`
    )
    .replace(By, "");
}
function cs(e, t, n) {
  if (((t = vh(t)), vh(e) !== t && n)) throw Error(v(425));
}
function Gs() {}
var ma = null,
  va = null;
function ya(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var _a = typeof setTimeout == "function" ? setTimeout : void 0,
  Hy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  yh = typeof Promise == "function" ? Promise : void 0,
  Wy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof yh < "u"
      ? function (e) {
          return yh.resolve(null).then(e).catch(Ky);
        }
      : _a;
function Ky(e) {
  setTimeout(function () {
    throw e;
  });
}
function Tl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), hi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  hi(t);
}
function Xt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function _h(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Sr = Math.random().toString(36).slice(2),
  st = "__reactFiber$" + Sr,
  mi = "__reactProps$" + Sr,
  Tt = "__reactContainer$" + Sr,
  wa = "__reactEvents$" + Sr,
  Gy = "__reactListeners$" + Sr,
  Xy = "__reactHandles$" + Sr;
function mn(e) {
  var t = e[st];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Tt] || n[st])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = _h(e); e !== null; ) {
          if ((n = e[st])) return n;
          e = _h(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Fi(e) {
  return (e = e[st] || e[Tt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(v(33));
}
function Ao(e) {
  return e[mi] || null;
}
var Ea = [],
  Wn = -1;
function on(e) {
  return { current: e };
}
function K(e) {
  0 > Wn || ((e.current = Ea[Wn]), (Ea[Wn] = null), Wn--);
}
function V(e, t) {
  Wn++, (Ea[Wn] = e.current), (e.current = t);
}
var rn = {},
  Ee = on(rn),
  Ne = on(!1),
  kn = rn;
function hr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Oe(e) {
  return (e = e.childContextTypes), e != null;
}
function Xs() {
  K(Ne), K(Ee);
}
function wh(e, t, n) {
  if (Ee.current !== rn) throw Error(v(168));
  V(Ee, t), V(Ne, n);
}
function tp(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(v(108, Ov(e) || "Unknown", i));
  return Y({}, n, r);
}
function Qs(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (kn = Ee.current),
    V(Ee, e),
    V(Ne, Ne.current),
    !0
  );
}
function Eh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(v(169));
  n ? ((e = tp(e, t, kn)), (r.__reactInternalMemoizedMergedChildContext = e), K(Ne), K(Ee), V(Ee, e)) : K(Ne), V(Ne, n);
}
var gt = null,
  Ro = !1,
  Cl = !1;
function np(e) {
  gt === null ? (gt = [e]) : gt.push(e);
}
function Qy(e) {
  (Ro = !0), np(e);
}
function ln() {
  if (!Cl && gt !== null) {
    Cl = !0;
    var e = 0,
      t = U;
    try {
      var n = gt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (gt = null), (Ro = !1);
    } catch (i) {
      throw (gt !== null && (gt = gt.slice(e + 1)), Pf(vu, ln), i);
    } finally {
      (U = t), (Cl = !1);
    }
  }
  return null;
}
var Kn = [],
  Gn = 0,
  Ys = null,
  qs = 0,
  ze = [],
  Ve = 0,
  Tn = null,
  mt = 1,
  vt = "";
function fn(e, t) {
  (Kn[Gn++] = qs), (Kn[Gn++] = Ys), (Ys = e), (qs = t);
}
function rp(e, t, n) {
  (ze[Ve++] = mt), (ze[Ve++] = vt), (ze[Ve++] = Tn), (Tn = e);
  var r = mt;
  e = vt;
  var i = 32 - Ze(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Ze(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (mt = (1 << (32 - Ze(t) + i)) | (n << i) | r),
      (vt = s + e);
  } else (mt = (1 << s) | (n << i) | r), (vt = e);
}
function Cu(e) {
  e.return !== null && (fn(e, 1), rp(e, 1, 0));
}
function Pu(e) {
  for (; e === Ys; ) (Ys = Kn[--Gn]), (Kn[Gn] = null), (qs = Kn[--Gn]), (Kn[Gn] = null);
  for (; e === Tn; )
    (Tn = ze[--Ve]), (ze[Ve] = null), (vt = ze[--Ve]), (ze[Ve] = null), (mt = ze[--Ve]), (ze[Ve] = null);
}
var $e = null,
  xe = null,
  G = !1,
  be = null;
function ip(e, t) {
  var n = He(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Sh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (xe = Xt(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tn !== null ? { id: mt, overflow: vt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = He(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            ($e = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Sa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ia(e) {
  if (G) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Sh(e, t)) {
        if (Sa(e)) throw Error(v(418));
        t = Xt(n.nextSibling);
        var r = $e;
        t && Sh(e, t) ? ip(r, n) : ((e.flags = (e.flags & -4097) | 2), (G = !1), ($e = e));
      }
    } else {
      if (Sa(e)) throw Error(v(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), ($e = e);
    }
  }
}
function Ih(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  $e = e;
}
function hs(e) {
  if (e !== $e) return !1;
  if (!G) return Ih(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !ya(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (Sa(e)) throw (sp(), Error(v(418)));
    for (; t; ) ip(e, t), (t = Xt(t.nextSibling));
  }
  if ((Ih(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(v(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = Xt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = $e ? Xt(e.stateNode.nextSibling) : null;
  return !0;
}
function sp() {
  for (var e = xe; e; ) e = Xt(e.nextSibling);
}
function dr() {
  (xe = $e = null), (G = !1);
}
function Au(e) {
  be === null ? (be = [e]) : be.push(e);
}
var Yy = Nt.ReactCurrentBatchConfig;
function $r(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(v(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(v(147, e));
      var i = r,
        s = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var l = i.refs;
            o === null ? delete l[s] : (l[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(v(284));
    if (!n._owner) throw Error(v(290, e));
  }
  return e;
}
function ds(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(v(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  );
}
function kh(e) {
  var t = e._init;
  return t(e._payload);
}
function op(e) {
  function t(h, c) {
    if (e) {
      var f = h.deletions;
      f === null ? ((h.deletions = [c]), (h.flags |= 16)) : f.push(c);
    }
  }
  function n(h, c) {
    if (!e) return null;
    for (; c !== null; ) t(h, c), (c = c.sibling);
    return null;
  }
  function r(h, c) {
    for (h = new Map(); c !== null; ) c.key !== null ? h.set(c.key, c) : h.set(c.index, c), (c = c.sibling);
    return h;
  }
  function i(h, c) {
    return (h = Jt(h, c)), (h.index = 0), (h.sibling = null), h;
  }
  function s(h, c, f) {
    return (
      (h.index = f),
      e
        ? ((f = h.alternate), f !== null ? ((f = f.index), f < c ? ((h.flags |= 2), c) : f) : ((h.flags |= 2), c))
        : ((h.flags |= 1048576), c)
    );
  }
  function o(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function l(h, c, f, m) {
    return c === null || c.tag !== 6 ? ((c = Dl(f, h.mode, m)), (c.return = h), c) : ((c = i(c, f)), (c.return = h), c);
  }
  function a(h, c, f, m) {
    var S = f.type;
    return S === jn
      ? d(h, c, f.props.children, m, f.key)
      : c !== null &&
        (c.elementType === S || (typeof S == "object" && S !== null && S.$$typeof === xt && kh(S) === c.type))
      ? ((m = i(c, f.props)), (m.ref = $r(h, c, f)), (m.return = h), m)
      : ((m = Ds(f.type, f.key, f.props, null, h.mode, m)), (m.ref = $r(h, c, f)), (m.return = h), m);
  }
  function u(h, c, f, m) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = xl(f, h.mode, m)), (c.return = h), c)
      : ((c = i(c, f.children || [])), (c.return = h), c);
  }
  function d(h, c, f, m, S) {
    return c === null || c.tag !== 7
      ? ((c = Sn(f, h.mode, m, S)), (c.return = h), c)
      : ((c = i(c, f)), (c.return = h), c);
  }
  function p(h, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Dl("" + c, h.mode, f)), (c.return = h), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ts:
          return (f = Ds(c.type, c.key, c.props, null, h.mode, f)), (f.ref = $r(h, null, c)), (f.return = h), f;
        case Fn:
          return (c = xl(c, h.mode, f)), (c.return = h), c;
        case xt:
          var m = c._init;
          return p(h, m(c._payload), f);
      }
      if (Br(c) || Or(c)) return (c = Sn(c, h.mode, f, null)), (c.return = h), c;
      ds(h, c);
    }
    return null;
  }
  function g(h, c, f, m) {
    var S = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number") return S !== null ? null : l(h, c, "" + f, m);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ts:
          return f.key === S ? a(h, c, f, m) : null;
        case Fn:
          return f.key === S ? u(h, c, f, m) : null;
        case xt:
          return (S = f._init), g(h, c, S(f._payload), m);
      }
      if (Br(f) || Or(f)) return S !== null ? null : d(h, c, f, m, null);
      ds(h, f);
    }
    return null;
  }
  function y(h, c, f, m, S) {
    if ((typeof m == "string" && m !== "") || typeof m == "number") return (h = h.get(f) || null), l(c, h, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ts:
          return (h = h.get(m.key === null ? f : m.key) || null), a(c, h, m, S);
        case Fn:
          return (h = h.get(m.key === null ? f : m.key) || null), u(c, h, m, S);
        case xt:
          var T = m._init;
          return y(h, c, f, T(m._payload), S);
      }
      if (Br(m) || Or(m)) return (h = h.get(f) || null), d(c, h, m, S, null);
      ds(c, m);
    }
    return null;
  }
  function _(h, c, f, m) {
    for (var S = null, T = null, C = c, P = (c = 0), B = null; C !== null && P < f.length; P++) {
      C.index > P ? ((B = C), (C = null)) : (B = C.sibling);
      var L = g(h, C, f[P], m);
      if (L === null) {
        C === null && (C = B);
        break;
      }
      e && C && L.alternate === null && t(h, C),
        (c = s(L, c, P)),
        T === null ? (S = L) : (T.sibling = L),
        (T = L),
        (C = B);
    }
    if (P === f.length) return n(h, C), G && fn(h, P), S;
    if (C === null) {
      for (; P < f.length; P++)
        (C = p(h, f[P], m)), C !== null && ((c = s(C, c, P)), T === null ? (S = C) : (T.sibling = C), (T = C));
      return G && fn(h, P), S;
    }
    for (C = r(h, C); P < f.length; P++)
      (B = y(C, h, P, f[P], m)),
        B !== null &&
          (e && B.alternate !== null && C.delete(B.key === null ? P : B.key),
          (c = s(B, c, P)),
          T === null ? (S = B) : (T.sibling = B),
          (T = B));
    return (
      e &&
        C.forEach(function (Qe) {
          return t(h, Qe);
        }),
      G && fn(h, P),
      S
    );
  }
  function w(h, c, f, m) {
    var S = Or(f);
    if (typeof S != "function") throw Error(v(150));
    if (((f = S.call(f)), f == null)) throw Error(v(151));
    for (var T = (S = null), C = c, P = (c = 0), B = null, L = f.next(); C !== null && !L.done; P++, L = f.next()) {
      C.index > P ? ((B = C), (C = null)) : (B = C.sibling);
      var Qe = g(h, C, L.value, m);
      if (Qe === null) {
        C === null && (C = B);
        break;
      }
      e && C && Qe.alternate === null && t(h, C),
        (c = s(Qe, c, P)),
        T === null ? (S = Qe) : (T.sibling = Qe),
        (T = Qe),
        (C = B);
    }
    if (L.done) return n(h, C), G && fn(h, P), S;
    if (C === null) {
      for (; !L.done; P++, L = f.next())
        (L = p(h, L.value, m)), L !== null && ((c = s(L, c, P)), T === null ? (S = L) : (T.sibling = L), (T = L));
      return G && fn(h, P), S;
    }
    for (C = r(h, C); !L.done; P++, L = f.next())
      (L = y(C, h, P, L.value, m)),
        L !== null &&
          (e && L.alternate !== null && C.delete(L.key === null ? P : L.key),
          (c = s(L, c, P)),
          T === null ? (S = L) : (T.sibling = L),
          (T = L));
    return (
      e &&
        C.forEach(function (Rr) {
          return t(h, Rr);
        }),
      G && fn(h, P),
      S
    );
  }
  function j(h, c, f, m) {
    if (
      (typeof f == "object" && f !== null && f.type === jn && f.key === null && (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case ts:
          e: {
            for (var S = f.key, T = c; T !== null; ) {
              if (T.key === S) {
                if (((S = f.type), S === jn)) {
                  if (T.tag === 7) {
                    n(h, T.sibling), (c = i(T, f.props.children)), (c.return = h), (h = c);
                    break e;
                  }
                } else if (
                  T.elementType === S ||
                  (typeof S == "object" && S !== null && S.$$typeof === xt && kh(S) === T.type)
                ) {
                  n(h, T.sibling), (c = i(T, f.props)), (c.ref = $r(h, T, f)), (c.return = h), (h = c);
                  break e;
                }
                n(h, T);
                break;
              } else t(h, T);
              T = T.sibling;
            }
            f.type === jn
              ? ((c = Sn(f.props.children, h.mode, m, f.key)), (c.return = h), (h = c))
              : ((m = Ds(f.type, f.key, f.props, null, h.mode, m)), (m.ref = $r(h, c, f)), (m.return = h), (h = m));
          }
          return o(h);
        case Fn:
          e: {
            for (T = f.key; c !== null; ) {
              if (c.key === T)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(h, c.sibling), (c = i(c, f.children || [])), (c.return = h), (h = c);
                  break e;
                } else {
                  n(h, c);
                  break;
                }
              else t(h, c);
              c = c.sibling;
            }
            (c = xl(f, h.mode, m)), (c.return = h), (h = c);
          }
          return o(h);
        case xt:
          return (T = f._init), j(h, c, T(f._payload), m);
      }
      if (Br(f)) return _(h, c, f, m);
      if (Or(f)) return w(h, c, f, m);
      ds(h, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(h, c.sibling), (c = i(c, f)), (c.return = h), (h = c))
          : (n(h, c), (c = Dl(f, h.mode, m)), (c.return = h), (h = c)),
        o(h))
      : n(h, c);
  }
  return j;
}
var fr = op(!0),
  lp = op(!1),
  Js = on(null),
  bs = null,
  Xn = null,
  Ru = null;
function Nu() {
  Ru = Xn = bs = null;
}
function Ou(e) {
  var t = Js.current;
  K(Js), (e._currentValue = t);
}
function ka(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function nr(e, t) {
  (bs = e),
    (Ru = Xn = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Re = !0), (e.firstContext = null));
}
function Ke(e) {
  var t = e._currentValue;
  if (Ru !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xn === null)) {
      if (bs === null) throw Error(v(308));
      (Xn = e), (bs.dependencies = { lanes: 0, firstContext: e });
    } else Xn = Xn.next = e;
  return t;
}
var vn = null;
function Lu(e) {
  vn === null ? (vn = [e]) : vn.push(e);
}
function ap(e, t, n, r) {
  var i = t.interleaved;
  return i === null ? ((n.next = n), Lu(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), Ct(e, r);
}
function Ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Mt = !1;
function Du(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function up(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function It(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var i = r.pending;
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), Ct(e, n);
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Lu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Ct(e, n)
  );
}
function Ps(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n);
  }
}
function Th(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: s, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Zs(e, t, n, r) {
  var i = e.updateQueue;
  Mt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), o === null ? (s = u) : (o.next = u), (o = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== o && (l === null ? (d.firstBaseUpdate = u) : (l.next = u), (d.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var p = i.baseState;
    (o = 0), (d = u = a = null), (l = s);
    do {
      var g = l.lane,
        y = l.eventTime;
      if ((r & g) === g) {
        d !== null &&
          (d = d.next = { eventTime: y, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
        e: {
          var _ = e,
            w = l;
          switch (((g = t), (y = n), w.tag)) {
            case 1:
              if (((_ = w.payload), typeof _ == "function")) {
                p = _.call(y, p, g);
                break e;
              }
              p = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (((_ = w.payload), (g = typeof _ == "function" ? _.call(y, p, g) : _), g == null)) break e;
              p = Y({}, p, g);
              break e;
            case 2:
              Mt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64), (g = i.effects), g === null ? (i.effects = [l]) : g.push(l));
      } else
        (y = { eventTime: y, lane: g, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
          d === null ? ((u = d = y), (a = p)) : (d = d.next = y),
          (o |= g);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (g = l), (l = g.next), (g.next = null), (i.lastBaseUpdate = g), (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = p),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Pn |= o), (e.lanes = o), (e.memoizedState = p);
  }
}
function Ch(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function")) throw Error(v(191, i));
        i.call(r);
      }
    }
}
var ji = {},
  ct = on(ji),
  vi = on(ji),
  yi = on(ji);
function yn(e) {
  if (e === ji) throw Error(v(174));
  return e;
}
function xu(e, t) {
  switch ((V(yi, t), V(vi, e), V(ct, ji), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ia(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = ia(t, e));
  }
  K(ct), V(ct, t);
}
function pr() {
  K(ct), K(vi), K(yi);
}
function cp(e) {
  yn(yi.current);
  var t = yn(ct.current),
    n = ia(t, e.type);
  t !== n && (V(vi, e), V(ct, n));
}
function Mu(e) {
  vi.current === e && (K(ct), K(vi));
}
var X = on(0);
function eo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Pl = [];
function $u() {
  for (var e = 0; e < Pl.length; e++) Pl[e]._workInProgressVersionPrimary = null;
  Pl.length = 0;
}
var As = Nt.ReactCurrentDispatcher,
  Al = Nt.ReactCurrentBatchConfig,
  Cn = 0,
  Q = null,
  te = null,
  ie = null,
  to = !1,
  ei = !1,
  _i = 0,
  qy = 0;
function fe() {
  throw Error(v(321));
}
function Uu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!tt(e[n], t[n])) return !1;
  return !0;
}
function Fu(e, t, n, r, i, s) {
  if (
    ((Cn = s),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (As.current = e === null || e.memoizedState === null ? e0 : t0),
    (e = n(r, i)),
    ei)
  ) {
    s = 0;
    do {
      if (((ei = !1), (_i = 0), 25 <= s)) throw Error(v(301));
      (s += 1), (ie = te = null), (t.updateQueue = null), (As.current = n0), (e = n(r, i));
    } while (ei);
  }
  if (((As.current = no), (t = te !== null && te.next !== null), (Cn = 0), (ie = te = Q = null), (to = !1), t))
    throw Error(v(300));
  return e;
}
function ju() {
  var e = _i !== 0;
  return (_i = 0), e;
}
function it() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ie === null ? (Q.memoizedState = ie = e) : (ie = ie.next = e), ie;
}
function Ge() {
  if (te === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = te.next;
  var t = ie === null ? Q.memoizedState : ie.next;
  if (t !== null) (ie = t), (te = e);
  else {
    if (e === null) throw Error(v(310));
    (te = e),
      (e = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null,
      }),
      ie === null ? (Q.memoizedState = ie = e) : (ie = ie.next = e);
  }
  return ie;
}
function wi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Rl(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = te,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var l = (o = null),
      a = null,
      u = s;
    do {
      var d = u.lane;
      if ((Cn & d) === d)
        a !== null &&
          (a = a.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = { lane: d, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? ((l = a = p), (o = r)) : (a = a.next = p), (Q.lanes |= d), (Pn |= d);
      }
      u = u.next;
    } while (u !== null && u !== s);
    a === null ? (o = r) : (a.next = l),
      tt(r, t.memoizedState) || (Re = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (Q.lanes |= s), (Pn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Nl(e) {
  var t = Ge(),
    n = t.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    tt(s, t.memoizedState) || (Re = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function hp() {}
function dp(e, t) {
  var n = Q,
    r = Ge(),
    i = t(),
    s = !tt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Re = !0)),
    (r = r.queue),
    zu(gp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ie !== null && ie.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Ei(9, pp.bind(null, n, r, i, t), void 0, null), se === null)) throw Error(v(349));
    Cn & 30 || fp(n, t, i);
  }
  return i;
}
function fp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Q.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function pp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), mp(t) && vp(e);
}
function gp(e, t, n) {
  return n(function () {
    mp(t) && vp(e);
  });
}
function mp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !tt(e, n);
  } catch {
    return !0;
  }
}
function vp(e) {
  var t = Ct(e, 1);
  t !== null && et(t, e, 1, -1);
}
function Ph(e) {
  var t = it();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: wi, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = Zy.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function Ei(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Q.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function yp() {
  return Ge().memoizedState;
}
function Rs(e, t, n, r) {
  var i = it();
  (Q.flags |= e), (i.memoizedState = Ei(1 | t, n, void 0, r === void 0 ? null : r));
}
function No(e, t, n, r) {
  var i = Ge();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (te !== null) {
    var o = te.memoizedState;
    if (((s = o.destroy), r !== null && Uu(r, o.deps))) {
      i.memoizedState = Ei(t, n, s, r);
      return;
    }
  }
  (Q.flags |= e), (i.memoizedState = Ei(1 | t, n, s, r));
}
function Ah(e, t) {
  return Rs(8390656, 8, e, t);
}
function zu(e, t) {
  return No(2048, 8, e, t);
}
function _p(e, t) {
  return No(4, 2, e, t);
}
function wp(e, t) {
  return No(4, 4, e, t);
}
function Ep(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Sp(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), No(4, 4, Ep.bind(null, t, e), n);
}
function Vu() {}
function Ip(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function kp(e, t) {
  var n = Ge();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Uu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Tp(e, t, n) {
  return Cn & 21
    ? (tt(n, t) || ((n = Nf()), (Q.lanes |= n), (Pn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Re = !0)), (e.memoizedState = n));
}
function Jy(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Al.transition;
  Al.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Al.transition = r);
  }
}
function Cp() {
  return Ge().memoizedState;
}
function by(e, t, n) {
  var r = qt(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Pp(e))) Ap(t, n);
  else if (((n = ap(e, t, n, r)), n !== null)) {
    var i = Te();
    et(n, e, r, i), Rp(n, t, r);
  }
}
function Zy(e, t, n) {
  var r = qt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pp(e)) Ap(t, i);
  else {
    var s = e.alternate;
    if (e.lanes === 0 && (s === null || s.lanes === 0) && ((s = t.lastRenderedReducer), s !== null))
      try {
        var o = t.lastRenderedState,
          l = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), tt(l, o))) {
          var a = t.interleaved;
          a === null ? ((i.next = i), Lu(t)) : ((i.next = a.next), (a.next = i)), (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = ap(e, t, i, r)), n !== null && ((i = Te()), et(n, e, r, i), Rp(n, t, r));
  }
}
function Pp(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function Ap(e, t) {
  ei = to = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Rp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), yu(e, n);
  }
}
var no = {
    readContext: Ke,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  e0 = {
    readContext: Ke,
    useCallback: function (e, t) {
      return (it().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ke,
    useEffect: Ah,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Rs(4194308, 4, Ep.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Rs(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Rs(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = it();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = it();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = by.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = it();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ph,
    useDebugValue: Vu,
    useDeferredValue: function (e) {
      return (it().memoizedState = e);
    },
    useTransition: function () {
      var e = Ph(!1),
        t = e[0];
      return (e = Jy.bind(null, e[1])), (it().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = it();
      if (G) {
        if (n === void 0) throw Error(v(407));
        n = n();
      } else {
        if (((n = t()), se === null)) throw Error(v(349));
        Cn & 30 || fp(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Ah(gp.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Ei(9, pp.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = it(),
        t = se.identifierPrefix;
      if (G) {
        var n = vt,
          r = mt;
        (n = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = _i++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = qy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  t0 = {
    readContext: Ke,
    useCallback: Ip,
    useContext: Ke,
    useEffect: zu,
    useImperativeHandle: Sp,
    useInsertionEffect: _p,
    useLayoutEffect: wp,
    useMemo: kp,
    useReducer: Rl,
    useRef: yp,
    useState: function () {
      return Rl(wi);
    },
    useDebugValue: Vu,
    useDeferredValue: function (e) {
      var t = Ge();
      return Tp(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = Rl(wi)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: hp,
    useSyncExternalStore: dp,
    useId: Cp,
    unstable_isNewReconciler: !1,
  },
  n0 = {
    readContext: Ke,
    useCallback: Ip,
    useContext: Ke,
    useEffect: zu,
    useImperativeHandle: Sp,
    useInsertionEffect: _p,
    useLayoutEffect: wp,
    useMemo: kp,
    useReducer: Nl,
    useRef: yp,
    useState: function () {
      return Nl(wi);
    },
    useDebugValue: Vu,
    useDeferredValue: function (e) {
      var t = Ge();
      return te === null ? (t.memoizedState = e) : Tp(t, te.memoizedState, e);
    },
    useTransition: function () {
      var e = Nl(wi)[0],
        t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: hp,
    useSyncExternalStore: dp,
    useId: Cp,
    unstable_isNewReconciler: !1,
  };
function qe(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ta(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Oo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Dn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = qt(e),
      s = It(r, i);
    (s.payload = t), n != null && (s.callback = n), (t = Qt(e, s, i)), t !== null && (et(t, e, i, r), Ps(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = qt(e),
      s = It(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Qt(e, s, i)),
      t !== null && (et(t, e, i, r), Ps(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      r = qt(e),
      i = It(n, r);
    (i.tag = 2), t != null && (i.callback = t), (t = Qt(e, i, r)), t !== null && (et(t, e, r, n), Ps(t, e, r));
  },
};
function Rh(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !fi(n, r) || !fi(i, s)
      : !0
  );
}
function Np(e, t, n) {
  var r = !1,
    i = rn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Ke(s))
      : ((i = Oe(t) ? kn : Ee.current), (r = t.contextTypes), (s = (r = r != null) ? hr(e, i) : rn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Oo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Nh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Oo.enqueueReplaceState(t, t.state, null);
}
function Ca(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Du(e);
  var s = t.contextType;
  typeof s == "object" && s !== null ? (i.context = Ke(s)) : ((s = Oe(t) ? kn : Ee.current), (i.context = hr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ta(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && Oo.enqueueReplaceState(i, i.state, null),
      Zs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function gr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Nv(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ol(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var r0 = typeof WeakMap == "function" ? WeakMap : Map;
function Op(e, t, n) {
  (n = It(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      io || ((io = !0), (Ua = r)), Pa(e, t);
    }),
    n
  );
}
function Lp(e, t, n) {
  (n = It(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Pa(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Pa(e, t), typeof r != "function" && (Yt === null ? (Yt = new Set([this])) : Yt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
      }),
    n
  );
}
function Oh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new r0();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = v0.bind(null, e, t, n)), t.then(e, e));
}
function Lh(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Dh(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = It(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var i0 = Nt.ReactCurrentOwner,
  Re = !1;
function Ie(e, t, n, r) {
  t.child = e === null ? lp(t, null, n, r) : fr(t, e.child, n, r);
}
function xh(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    nr(t, i),
    (r = Fu(e, t, n, r, s, i)),
    (n = ju()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Pt(e, t, i))
      : (G && n && Cu(t), (t.flags |= 1), Ie(e, t, r, i), t.child)
  );
}
function Mh(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Yu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), Dp(e, t, s, r, i))
      : ((e = Ds(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : fi), n(o, r) && e.ref === t.ref)) return Pt(e, t, i);
  }
  return (t.flags |= 1), (e = Jt(s, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Dp(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (fi(s, r) && e.ref === t.ref)
      if (((Re = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0)) e.flags & 131072 && (Re = !0);
      else return (t.lanes = e.lanes), Pt(e, t, i);
  }
  return Aa(e, t, n, r, i);
}
function xp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), V(Yn, De), (De |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          V(Yn, De),
          (De |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        V(Yn, De),
        (De |= r);
    }
  else s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n), V(Yn, De), (De |= r);
  return Ie(e, t, i, n), t.child;
}
function Mp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Aa(e, t, n, r, i) {
  var s = Oe(n) ? kn : Ee.current;
  return (
    (s = hr(t, s)),
    nr(t, i),
    (n = Fu(e, t, n, r, s, i)),
    (r = ju()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Pt(e, t, i))
      : (G && r && Cu(t), (t.flags |= 1), Ie(e, t, n, i), t.child)
  );
}
function $h(e, t, n, r, i) {
  if (Oe(n)) {
    var s = !0;
    Qs(t);
  } else s = !1;
  if ((nr(t, i), t.stateNode === null)) Ns(e, t), Np(t, n, r), Ca(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var a = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? (u = Ke(u)) : ((u = Oe(n) ? kn : Ee.current), (u = hr(t, u)));
    var d = n.getDerivedStateFromProps,
      p = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && Nh(t, o, r, u)),
      (Mt = !1);
    var g = t.memoizedState;
    (o.state = g),
      Zs(t, r, o, i),
      (a = t.memoizedState),
      l !== r || g !== a || Ne.current || Mt
        ? (typeof d == "function" && (Ta(t, n, d, r), (a = t.memoizedState)),
          (l = Mt || Rh(t, n, l, r, g, a, u))
            ? (p ||
                (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (o = t.stateNode),
      up(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : qe(t.type, l)),
      (o.props = u),
      (p = t.pendingProps),
      (g = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null ? (a = Ke(a)) : ((a = Oe(n) ? kn : Ee.current), (a = hr(t, a)));
    var y = n.getDerivedStateFromProps;
    (d = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function") ||
      ((l !== p || g !== a) && Nh(t, o, r, a)),
      (Mt = !1),
      (g = t.memoizedState),
      (o.state = g),
      Zs(t, r, o, i);
    var _ = t.memoizedState;
    l !== p || g !== _ || Ne.current || Mt
      ? (typeof y == "function" && (Ta(t, n, y, r), (_ = t.memoizedState)),
        (u = Mt || Rh(t, n, u, r, g, _, a) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, _, a),
              typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, _, a)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = _)),
        (o.props = r),
        (o.state = _),
        (o.context = a),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ra(e, t, n, r, s, i);
}
function Ra(e, t, n, r, i, s) {
  Mp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Eh(t, n, !1), Pt(e, t, s);
  (r = t.stateNode), (i0.current = t);
  var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o ? ((t.child = fr(t, e.child, null, s)), (t.child = fr(t, null, l, s))) : Ie(e, t, l, s),
    (t.memoizedState = r.state),
    i && Eh(t, n, !0),
    t.child
  );
}
function $p(e) {
  var t = e.stateNode;
  t.pendingContext ? wh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wh(e, t.context, !1),
    xu(e, t.containerInfo);
}
function Uh(e, t, n, r, i) {
  return dr(), Au(i), (t.flags |= 256), Ie(e, t, n, r), t.child;
}
var Na = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oa(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Up(e, t, n) {
  var r = t.pendingProps,
    i = X.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    V(X, i & 1),
    e === null)
  )
    return (
      Ia(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null ? ((s.childLanes = 0), (s.pendingProps = o)) : (s = xo(o, r, 0, null)),
              (e = Sn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Oa(n)),
              (t.memoizedState = Na),
              e)
            : Bu(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null))) return s0(e, t, o, r, l, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = Jt(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (s = Jt(l, s)) : ((s = Sn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o = o === null ? Oa(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Na),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Jt(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bu(e, t) {
  return (t = xo({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function fs(e, t, n, r) {
  return (
    r !== null && Au(r),
    fr(t, e.child, null, n),
    (e = Bu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function s0(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ol(Error(v(422)))), fs(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = xo({ mode: "visible", children: r.children }, i, 0, null)),
        (s = Sn(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && fr(t, e.child, null, o),
        (t.child.memoizedState = Oa(o)),
        (t.memoizedState = Na),
        s);
  if (!(t.mode & 1)) return fs(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (s = Error(v(419))), (r = Ol(s, r, void 0)), fs(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), Re || l)) {
    if (((r = se), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 && i !== s.retryLane && ((s.retryLane = i), Ct(e, i), et(r, e, i, -1));
    }
    return Qu(), (r = Ol(Error(v(421)))), fs(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = y0.bind(null, e)), (i._reactRetry = t), null)
    : ((e = s.treeContext),
      (xe = Xt(i.nextSibling)),
      ($e = t),
      (G = !0),
      (be = null),
      e !== null && ((ze[Ve++] = mt), (ze[Ve++] = vt), (ze[Ve++] = Tn), (mt = e.id), (vt = e.overflow), (Tn = t)),
      (t = Bu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Fh(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ka(e.return, t, n);
}
function Ll(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Fp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Ie(e, t, r.children, n), (r = X.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fh(e, n, t);
        else if (e.tag === 19) Fh(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((V(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate), e !== null && eo(e) === null && (i = n), (n = n.sibling);
        (n = i),
          n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
          Ll(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && eo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ll(t, !0, n, null, s);
        break;
      case "together":
        Ll(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ns(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Pt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Pn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(v(153));
  if (t.child !== null) {
    for (e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Jt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function o0(e, t, n) {
  switch (t.tag) {
    case 3:
      $p(t), dr();
      break;
    case 5:
      cp(t);
      break;
    case 1:
      Oe(t.type) && Qs(t);
      break;
    case 4:
      xu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      V(Js, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Up(e, t, n)
          : (V(X, X.current & 1), (e = Pt(e, t, n)), e !== null ? e.sibling : null);
      V(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        V(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), xp(e, t, n);
  }
  return Pt(e, t, n);
}
var jp, La, zp, Vp;
jp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
La = function () {};
zp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), yn(ct.current);
    var s = null;
    switch (n) {
      case "input":
        (i = ea(e, i)), (r = ea(e, r)), (s = []);
        break;
      case "select":
        (i = Y({}, i, { value: void 0 })), (r = Y({}, r, { value: void 0 })), (s = []);
        break;
      case "textarea":
        (i = ra(e, i)), (r = ra(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Gs);
    }
    sa(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (oi.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (((l = i != null ? i[u] : void 0), r.hasOwnProperty(u) && a !== l && (a != null || l != null)))
        if (u === "style")
          if (l) {
            for (o in l) !l.hasOwnProperty(o) || (a && a.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
            for (o in a) a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}), (n[o] = a[o]));
          } else n || (s || (s = []), s.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (s = s || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") || (s = s || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (oi.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && H("scroll", e), s || l === a || (s = []))
                : (s = s || []).push(u, a));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Vp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ur(e, t) {
  if (!G)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function l0(e, t, n) {
  var r = t.pendingProps;
  switch ((Pu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return pe(t), null;
    case 1:
      return Oe(t.type) && Xs(), pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        pr(),
        K(Ne),
        K(Ee),
        $u(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (hs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), be !== null && (za(be), (be = null)))),
        La(e, t),
        pe(t),
        null
      );
    case 5:
      Mu(t);
      var i = yn(yi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        zp(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(v(166));
          return pe(t), null;
        }
        if (((e = yn(ct.current)), hs(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[st] = t), (r[mi] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Wr.length; i++) H(Wr[i], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              Xc(r, s), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }), H("invalid", r);
              break;
            case "textarea":
              Yc(r, s), H("invalid", r);
          }
          sa(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var l = s[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 && cs(r.textContent, l, e), (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (s.suppressHydrationWarning !== !0 && cs(r.textContent, l, e), (i = ["children", "" + l]))
                : oi.hasOwnProperty(o) && l != null && o === "onScroll" && H("scroll", r);
            }
          switch (n) {
            case "input":
              ns(r), Qc(r, s, !0);
              break;
            case "textarea":
              ns(r), qc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = Gs);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = gf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" && ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[st] = t),
            (e[mi] = r),
            jp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = oa(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Wr.length; i++) H(Wr[i], e);
                i = r;
                break;
              case "source":
                H("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (i = r);
                break;
              case "details":
                H("toggle", e), (i = r);
                break;
              case "input":
                Xc(e, r), (i = ea(e, r)), H("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = Y({}, r, { value: void 0 })), H("invalid", e);
                break;
              case "textarea":
                Yc(e, r), (i = ra(e, r)), H("invalid", e);
                break;
              default:
                i = r;
            }
            sa(n, i), (l = i);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var a = l[s];
                s === "style"
                  ? yf(e, a)
                  : s === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && mf(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && li(e, a)
                    : typeof a == "number" && li(e, "" + a)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (oi.hasOwnProperty(s)
                      ? a != null && s === "onScroll" && H("scroll", e)
                      : a != null && du(e, s, a, o));
              }
            switch (n) {
              case "input":
                ns(e), Qc(e, r, !1);
                break;
              case "textarea":
                ns(e), qc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? bn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null && bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Gs);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return pe(t), null;
    case 6:
      if (e && t.stateNode != null) Vp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(v(166));
        if (((n = yn(yi.current)), yn(ct.current), hs(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[st] = t), (s = r.nodeValue !== n) && ((e = $e), e !== null))
          )
            switch (e.tag) {
              case 3:
                cs(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && cs(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[st] = t), (t.stateNode = r);
      }
      return pe(t), null;
    case 13:
      if (
        (K(X), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && xe !== null && t.mode & 1 && !(t.flags & 128)) sp(), dr(), (t.flags |= 98560), (s = !1);
        else if (((s = hs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(v(318));
            if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s)) throw Error(v(317));
            s[st] = t;
          } else dr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          pe(t), (s = !1);
        } else be !== null && (za(be), (be = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || X.current & 1 ? ne === 0 && (ne = 3) : Qu())),
          t.updateQueue !== null && (t.flags |= 4),
          pe(t),
          null);
    case 4:
      return pr(), La(e, t), e === null && pi(t.stateNode.containerInfo), pe(t), null;
    case 10:
      return Ou(t.type._context), pe(t), null;
    case 17:
      return Oe(t.type) && Xs(), pe(t), null;
    case 19:
      if ((K(X), (s = t.memoizedState), s === null)) return pe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Ur(s, !1);
        else {
          if (ne !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = eo(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ur(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return V(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null && b() > mr && ((t.flags |= 128), (r = !0), Ur(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = eo(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ur(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !G)
            )
              return pe(t), null;
          } else
            2 * b() - s.renderingStartTime > mr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ur(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last), n !== null ? (n.sibling = o) : (t.child = o), (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = b()),
          (t.sibling = null),
          (n = X.current),
          V(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (pe(t), null);
    case 22:
    case 23:
      return (
        Xu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? De & 1073741824 && (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(v(156, t.tag));
}
function a0(e, t) {
  switch ((Pu(t), t.tag)) {
    case 1:
      return Oe(t.type) && Xs(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        pr(), K(Ne), K(Ee), $u(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Mu(t), null;
    case 13:
      if ((K(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(v(340));
        dr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return K(X), null;
    case 4:
      return pr(), null;
    case 10:
      return Ou(t.type._context), null;
    case 22:
    case 23:
      return Xu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ps = !1,
  me = !1,
  u0 = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function Qn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        q(e, t, r);
      }
    else n.current = null;
}
function Da(e, t, n) {
  try {
    n();
  } catch (r) {
    q(e, t, r);
  }
}
var jh = !1;
function c0(e, t) {
  if (((ma = Hs), (e = Gf()), Tu(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            p = e,
            g = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (i !== 0 && p.nodeType !== 3) || (l = o + i),
                p !== s || (r !== 0 && p.nodeType !== 3) || (a = o + r),
                p.nodeType === 3 && (o += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (g = p), (p = y);
            for (;;) {
              if (p === e) break t;
              if ((g === n && ++u === i && (l = o), g === s && ++d === r && (a = o), (y = p.nextSibling) !== null))
                break;
              (p = g), (g = p.parentNode);
            }
            p = y;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (va = { focusedElem: e, selectionRange: n }, Hs = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var _ = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (_ !== null) {
                  var w = _.memoizedProps,
                    j = _.memoizedState,
                    h = t.stateNode,
                    c = h.getSnapshotBeforeUpdate(t.elementType === t.type ? w : qe(t.type, w), j);
                  h.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(v(163));
            }
        } catch (m) {
          q(t, t.return, m);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (_ = jh), (jh = !1), _;
}
function ti(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Da(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Lo(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function xa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Bp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[st], delete t[mi], delete t[wa], delete t[Gy], delete t[Xy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function zh(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ma(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Gs));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ma(e, t, n), e = e.sibling; e !== null; ) Ma(e, t, n), (e = e.sibling);
}
function $a(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($a(e, t, n), e = e.sibling; e !== null; ) $a(e, t, n), (e = e.sibling);
}
var ae = null,
  Je = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) Wp(e, t, n), (n = n.sibling);
}
function Wp(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function")
    try {
      ut.onCommitFiberUnmount(ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || Qn(n, t);
    case 6:
      var r = ae,
        i = Je;
      (ae = null),
        Lt(e, t, n),
        (ae = r),
        (Je = i),
        ae !== null &&
          (Je
            ? ((e = ae), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Je
          ? ((e = ae), (n = n.stateNode), e.nodeType === 8 ? Tl(e.parentNode, n) : e.nodeType === 1 && Tl(e, n), hi(e))
          : Tl(ae, n.stateNode));
      break;
    case 4:
      (r = ae), (i = Je), (ae = n.stateNode.containerInfo), (Je = !0), Lt(e, t, n), (ae = r), (Je = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!me && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag), o !== void 0 && (s & 2 || s & 4) && Da(n, t, o), (i = i.next);
        } while (i !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (!me && (Qn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (l) {
          q(n, t, l);
        }
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((me = (r = me) || n.memoizedState !== null), Lt(e, t, n), (me = r)) : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function Vh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new u0()),
      t.forEach(function (r) {
        var i = _0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ye(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ae = l.stateNode), (Je = !1);
              break e;
            case 3:
              (ae = l.stateNode.containerInfo), (Je = !0);
              break e;
            case 4:
              (ae = l.stateNode.containerInfo), (Je = !0);
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(v(160));
        Wp(s, o, i), (ae = null), (Je = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        q(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Kp(t, e), (t = t.sibling);
}
function Kp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ye(t, e), rt(e), r & 4)) {
        try {
          ti(3, e, e.return), Lo(3, e);
        } catch (w) {
          q(e, e.return, w);
        }
        try {
          ti(5, e, e.return);
        } catch (w) {
          q(e, e.return, w);
        }
      }
      break;
    case 1:
      Ye(t, e), rt(e), r & 512 && n !== null && Qn(n, n.return);
      break;
    case 5:
      if ((Ye(t, e), rt(e), r & 512 && n !== null && Qn(n, n.return), e.flags & 32)) {
        var i = e.stateNode;
        try {
          li(i, "");
        } catch (w) {
          q(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && s.type === "radio" && s.name != null && ff(i, s), oa(l, o);
            var u = oa(l, s);
            for (o = 0; o < a.length; o += 2) {
              var d = a[o],
                p = a[o + 1];
              d === "style"
                ? yf(i, p)
                : d === "dangerouslySetInnerHTML"
                ? mf(i, p)
                : d === "children"
                ? li(i, p)
                : du(i, d, p, u);
            }
            switch (l) {
              case "input":
                ta(i, s);
                break;
              case "textarea":
                pf(i, s);
                break;
              case "select":
                var g = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? bn(i, !!s.multiple, y, !1)
                  : g !== !!s.multiple &&
                    (s.defaultValue != null
                      ? bn(i, !!s.multiple, s.defaultValue, !0)
                      : bn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[mi] = s;
          } catch (w) {
            q(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ye(t, e), rt(e), r & 4)) {
        if (e.stateNode === null) throw Error(v(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (w) {
          q(e, e.return, w);
        }
      }
      break;
    case 3:
      if ((Ye(t, e), rt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          hi(t.containerInfo);
        } catch (w) {
          q(e, e.return, w);
        }
      break;
    case 4:
      Ye(t, e), rt(e);
      break;
    case 13:
      Ye(t, e),
        rt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s || (i.alternate !== null && i.alternate.memoizedState !== null) || (Ku = b())),
        r & 4 && Vh(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (u = me) || d), Ye(t, e), (me = u)) : Ye(t, e),
        rt(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1))
          for (I = e, d = e.child; d !== null; ) {
            for (p = I = d; I !== null; ) {
              switch (((g = I), (y = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ti(4, g, g.return);
                  break;
                case 1:
                  Qn(g, g.return);
                  var _ = g.stateNode;
                  if (typeof _.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r), (_.props = t.memoizedProps), (_.state = t.memoizedState), _.componentWillUnmount();
                    } catch (w) {
                      q(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Qn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Hh(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = g), (I = y)) : Hh(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (i = p.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (o = a != null && a.hasOwnProperty("display") ? a.display : null),
                      (l.style.display = vf("display", o)));
              } catch (w) {
                q(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (w) {
                q(e, e.return, w);
              }
          } else if (((p.tag !== 22 && p.tag !== 23) || p.memoizedState === null || p === e) && p.child !== null) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      Ye(t, e), rt(e), r & 4 && Vh(e);
      break;
    case 21:
      break;
    default:
      Ye(t, e), rt(e);
  }
}
function rt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(v(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (li(i, ""), (r.flags &= -33));
          var s = zh(e);
          $a(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = zh(e);
          Ma(e, l, o);
          break;
        default:
          throw Error(v(161));
      }
    } catch (a) {
      q(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function h0(e, t, n) {
  (I = e), Gp(e);
}
function Gp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var i = I,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || ps;
      if (!o) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || me;
        l = ps;
        var u = me;
        if (((ps = o), (me = a) && !u))
          for (I = i; I !== null; )
            (o = I),
              (a = o.child),
              o.tag === 22 && o.memoizedState !== null ? Wh(i) : a !== null ? ((a.return = o), (I = a)) : Wh(i);
        for (; s !== null; ) (I = s), Gp(s), (s = s.sibling);
        (I = i), (ps = l), (me = u);
      }
      Bh(e);
    } else i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (I = s)) : Bh(e);
  }
}
function Bh(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || Lo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var s = t.updateQueue;
              s !== null && Ch(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ch(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && hi(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(v(163));
          }
        me || (t.flags & 512 && xa(t));
      } catch (g) {
        q(t, t.return, g);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Hh(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Wh(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Lo(4, t);
          } catch (a) {
            q(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              q(t, i, a);
            }
          }
          var s = t.return;
          try {
            xa(t);
          } catch (a) {
            q(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            xa(t);
          } catch (a) {
            q(t, o, a);
          }
      }
    } catch (a) {
      q(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (I = l);
      break;
    }
    I = t.return;
  }
}
var d0 = Math.ceil,
  ro = Nt.ReactCurrentDispatcher,
  Hu = Nt.ReactCurrentOwner,
  We = Nt.ReactCurrentBatchConfig,
  M = 0,
  se = null,
  ee = null,
  ce = 0,
  De = 0,
  Yn = on(0),
  ne = 0,
  Si = null,
  Pn = 0,
  Do = 0,
  Wu = 0,
  ni = null,
  Ae = null,
  Ku = 0,
  mr = 1 / 0,
  pt = null,
  io = !1,
  Ua = null,
  Yt = null,
  gs = !1,
  Ht = null,
  so = 0,
  ri = 0,
  Fa = null,
  Os = -1,
  Ls = 0;
function Te() {
  return M & 6 ? b() : Os !== -1 ? Os : (Os = b());
}
function qt(e) {
  return e.mode & 1
    ? M & 2 && ce !== 0
      ? ce & -ce
      : Yy.transition !== null
      ? (Ls === 0 && (Ls = Nf()), Ls)
      : ((e = U), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Uf(e.type))), e)
    : 1;
}
function et(e, t, n, r) {
  if (50 < ri) throw ((ri = 0), (Fa = null), Error(v(185)));
  $i(e, n, r),
    (!(M & 2) || e !== se) &&
      (e === se && (!(M & 2) && (Do |= n), ne === 4 && Ut(e, ce)),
      Le(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((mr = b() + 500), Ro && ln()));
}
function Le(e, t) {
  var n = e.callbackNode;
  Yv(e, t);
  var r = Bs(e, e === se ? ce : 0);
  if (r === 0) n !== null && Zc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Zc(n), t === 1))
      e.tag === 0 ? Qy(Kh.bind(null, e)) : np(Kh.bind(null, e)),
        Wy(function () {
          !(M & 6) && ln();
        }),
        (n = null);
    else {
      switch (Of(r)) {
        case 1:
          n = vu;
          break;
        case 4:
          n = Af;
          break;
        case 16:
          n = Vs;
          break;
        case 536870912:
          n = Rf;
          break;
        default:
          n = Vs;
      }
      n = eg(n, Xp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Xp(e, t) {
  if (((Os = -1), (Ls = 0), M & 6)) throw Error(v(327));
  var n = e.callbackNode;
  if (rr() && e.callbackNode !== n) return null;
  var r = Bs(e, e === se ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = oo(e, r);
  else {
    t = r;
    var i = M;
    M |= 2;
    var s = Yp();
    (se !== e || ce !== t) && ((pt = null), (mr = b() + 500), En(e, t));
    do
      try {
        g0();
        break;
      } catch (l) {
        Qp(e, l);
      }
    while (!0);
    Nu(), (ro.current = s), (M = i), ee !== null ? (t = 0) : ((se = null), (ce = 0), (t = ne));
  }
  if (t !== 0) {
    if ((t === 2 && ((i = ha(e)), i !== 0 && ((r = i), (t = ja(e, i)))), t === 1))
      throw ((n = Si), En(e, 0), Ut(e, r), Le(e, b()), n);
    if (t === 6) Ut(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !f0(i) &&
          ((t = oo(e, r)), t === 2 && ((s = ha(e)), s !== 0 && ((r = s), (t = ja(e, s)))), t === 1))
      )
        throw ((n = Si), En(e, 0), Ut(e, r), Le(e, b()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(v(345));
        case 2:
          pn(e, Ae, pt);
          break;
        case 3:
          if ((Ut(e, r), (r & 130023424) === r && ((t = Ku + 500 - b()), 10 < t))) {
            if (Bs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = _a(pn.bind(null, e, Ae, pt), t);
            break;
          }
          pn(e, Ae, pt);
          break;
        case 4:
          if ((Ut(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Ze(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = b() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * d0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = _a(pn.bind(null, e, Ae, pt), r);
            break;
          }
          pn(e, Ae, pt);
          break;
        case 5:
          pn(e, Ae, pt);
          break;
        default:
          throw Error(v(329));
      }
    }
  }
  return Le(e, b()), e.callbackNode === n ? Xp.bind(null, e) : null;
}
function ja(e, t) {
  var n = ni;
  return (
    e.current.memoizedState.isDehydrated && (En(e, t).flags |= 256),
    (e = oo(e, t)),
    e !== 2 && ((t = Ae), (Ae = n), t !== null && za(t)),
    e
  );
}
function za(e) {
  Ae === null ? (Ae = e) : Ae.push.apply(Ae, e);
}
function f0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!tt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ut(e, t) {
  for (t &= ~Wu, t &= ~Do, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Kh(e) {
  if (M & 6) throw Error(v(327));
  rr();
  var t = Bs(e, 0);
  if (!(t & 1)) return Le(e, b()), null;
  var n = oo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ha(e);
    r !== 0 && ((t = r), (n = ja(e, r)));
  }
  if (n === 1) throw ((n = Si), En(e, 0), Ut(e, t), Le(e, b()), n);
  if (n === 6) throw Error(v(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), pn(e, Ae, pt), Le(e, b()), null;
}
function Gu(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((mr = b() + 500), Ro && ln());
  }
}
function An(e) {
  Ht !== null && Ht.tag === 0 && !(M & 6) && rr();
  var t = M;
  M |= 1;
  var n = We.transition,
    r = U;
  try {
    if (((We.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (We.transition = n), (M = t), !(M & 6) && ln();
  }
}
function Xu() {
  (De = Yn.current), K(Yn);
}
function En(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Hy(n)), ee !== null))
    for (n = ee.return; n !== null; ) {
      var r = n;
      switch ((Pu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Xs();
          break;
        case 3:
          pr(), K(Ne), K(Ee), $u();
          break;
        case 5:
          Mu(r);
          break;
        case 4:
          pr();
          break;
        case 13:
          K(X);
          break;
        case 19:
          K(X);
          break;
        case 10:
          Ou(r.type._context);
          break;
        case 22:
        case 23:
          Xu();
      }
      n = n.return;
    }
  if (
    ((se = e),
    (ee = e = Jt(e.current, null)),
    (ce = De = t),
    (ne = 0),
    (Si = null),
    (Wu = Do = Pn = 0),
    (Ae = ni = null),
    vn !== null)
  ) {
    for (t = 0; t < vn.length; t++)
      if (((n = vn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    vn = null;
  }
  return e;
}
function Qp(e, t) {
  do {
    var n = ee;
    try {
      if ((Nu(), (As.current = no), to)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        to = !1;
      }
      if (((Cn = 0), (ie = te = Q = null), (ei = !1), (_i = 0), (Hu.current = null), n === null || n.return === null)) {
        (ne = 1), (Si = t), (ee = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          l = n,
          a = t;
        if (((t = ce), (l.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
          var u = a,
            d = l,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var g = d.alternate;
            g
              ? ((d.updateQueue = g.updateQueue), (d.memoizedState = g.memoizedState), (d.lanes = g.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = Lh(o);
          if (y !== null) {
            (y.flags &= -257), Dh(y, o, l, s, t), y.mode & 1 && Oh(s, u, t), (t = y), (a = u);
            var _ = t.updateQueue;
            if (_ === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else _.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Oh(s, u, t), Qu();
              break e;
            }
            a = Error(v(426));
          }
        } else if (G && l.mode & 1) {
          var j = Lh(o);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), Dh(j, o, l, s, t), Au(gr(a, l));
            break e;
          }
        }
        (s = a = gr(a, l)), ne !== 4 && (ne = 2), ni === null ? (ni = [s]) : ni.push(s), (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var h = Op(s, a, t);
              Th(s, h);
              break e;
            case 1:
              l = a;
              var c = s.type,
                f = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null && typeof f.componentDidCatch == "function" && (Yt === null || !Yt.has(f))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var m = Lp(s, l, t);
                Th(s, m);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Jp(n);
    } catch (S) {
      (t = S), ee === n && n !== null && (ee = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Yp() {
  var e = ro.current;
  return (ro.current = no), e === null ? no : e;
}
function Qu() {
  (ne === 0 || ne === 3 || ne === 2) && (ne = 4), se === null || (!(Pn & 268435455) && !(Do & 268435455)) || Ut(se, ce);
}
function oo(e, t) {
  var n = M;
  M |= 2;
  var r = Yp();
  (se !== e || ce !== t) && ((pt = null), En(e, t));
  do
    try {
      p0();
      break;
    } catch (i) {
      Qp(e, i);
    }
  while (!0);
  if ((Nu(), (M = n), (ro.current = r), ee !== null)) throw Error(v(261));
  return (se = null), (ce = 0), ne;
}
function p0() {
  for (; ee !== null; ) qp(ee);
}
function g0() {
  for (; ee !== null && !zv(); ) qp(ee);
}
function qp(e) {
  var t = Zp(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps), t === null ? Jp(e) : (ee = t), (Hu.current = null);
}
function Jp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = a0(n, t)), n !== null)) {
        (n.flags &= 32767), (ee = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ne = 6), (ee = null);
        return;
      }
    } else if (((n = l0(n, t, De)), n !== null)) {
      ee = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ee = t;
      return;
    }
    ee = t = e;
  } while (t !== null);
  ne === 0 && (ne = 5);
}
function pn(e, t, n) {
  var r = U,
    i = We.transition;
  try {
    (We.transition = null), (U = 1), m0(e, t, n, r);
  } finally {
    (We.transition = i), (U = r);
  }
  return null;
}
function m0(e, t, n, r) {
  do rr();
  while (Ht !== null);
  if (M & 6) throw Error(v(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(v(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (qv(e, s),
    e === se && ((ee = se = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gs ||
      ((gs = !0),
      eg(Vs, function () {
        return rr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = We.transition), (We.transition = null);
    var o = U;
    U = 1;
    var l = M;
    (M |= 4),
      (Hu.current = null),
      c0(e, n),
      Kp(n, e),
      $y(va),
      (Hs = !!ma),
      (va = ma = null),
      (e.current = n),
      h0(n),
      Vv(),
      (M = l),
      (U = o),
      (We.transition = s);
  } else e.current = n;
  if (
    (gs && ((gs = !1), (Ht = e), (so = i)),
    (s = e.pendingLanes),
    s === 0 && (Yt = null),
    Wv(n.stateNode),
    Le(e, b()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (io) throw ((io = !1), (e = Ua), (Ua = null), e);
  return (
    so & 1 && e.tag !== 0 && rr(),
    (s = e.pendingLanes),
    s & 1 ? (e === Fa ? ri++ : ((ri = 0), (Fa = e))) : (ri = 0),
    ln(),
    null
  );
}
function rr() {
  if (Ht !== null) {
    var e = Of(so),
      t = We.transition,
      n = U;
    try {
      if (((We.transition = null), (U = 16 > e ? 16 : e), Ht === null)) var r = !1;
      else {
        if (((e = Ht), (Ht = null), (so = 0), M & 6)) throw Error(v(331));
        var i = M;
        for (M |= 4, I = e.current; I !== null; ) {
          var s = I,
            o = s.child;
          if (I.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (I = u; I !== null; ) {
                  var d = I;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ti(8, d, s);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (I = p);
                  else
                    for (; I !== null; ) {
                      d = I;
                      var g = d.sibling,
                        y = d.return;
                      if ((Bp(d), d === u)) {
                        I = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = y), (I = g);
                        break;
                      }
                      I = y;
                    }
                }
              }
              var _ = s.alternate;
              if (_ !== null) {
                var w = _.child;
                if (w !== null) {
                  _.child = null;
                  do {
                    var j = w.sibling;
                    (w.sibling = null), (w = j);
                  } while (w !== null);
                }
              }
              I = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (I = o);
          else
            e: for (; I !== null; ) {
              if (((s = I), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ti(9, s, s.return);
                }
              var h = s.sibling;
              if (h !== null) {
                (h.return = s.return), (I = h);
                break e;
              }
              I = s.return;
            }
        }
        var c = e.current;
        for (I = c; I !== null; ) {
          o = I;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) (f.return = o), (I = f);
          else
            e: for (o = c; I !== null; ) {
              if (((l = I), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lo(9, l);
                  }
                } catch (S) {
                  q(l, l.return, S);
                }
              if (l === o) {
                I = null;
                break e;
              }
              var m = l.sibling;
              if (m !== null) {
                (m.return = l.return), (I = m);
                break e;
              }
              I = l.return;
            }
        }
        if (((M = i), ln(), ut && typeof ut.onPostCommitFiberRoot == "function"))
          try {
            ut.onPostCommitFiberRoot(ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (We.transition = t);
    }
  }
  return !1;
}
function Gh(e, t, n) {
  (t = gr(n, t)), (t = Op(e, t, 1)), (e = Qt(e, t, 1)), (t = Te()), e !== null && ($i(e, 1, t), Le(e, t));
}
function q(e, t, n) {
  if (e.tag === 3) Gh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Gh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (Yt === null || !Yt.has(r)))
        ) {
          (e = gr(n, e)), (e = Lp(t, e, 1)), (t = Qt(t, e, 1)), (e = Te()), t !== null && ($i(t, 1, e), Le(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function v0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    se === e &&
      (ce & n) === n &&
      (ne === 4 || (ne === 3 && (ce & 130023424) === ce && 500 > b() - Ku) ? En(e, 0) : (Wu |= n)),
    Le(e, t);
}
function bp(e, t) {
  t === 0 && (e.mode & 1 ? ((t = ss), (ss <<= 1), !(ss & 130023424) && (ss = 4194304)) : (t = 1));
  var n = Te();
  (e = Ct(e, t)), e !== null && ($i(e, t, n), Le(e, n));
}
function y0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bp(e, n);
}
function _0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(v(314));
  }
  r !== null && r.delete(t), bp(e, n);
}
var Zp;
Zp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ne.current) Re = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Re = !1), o0(e, t, n);
      Re = !!(e.flags & 131072);
    }
  else (Re = !1), G && t.flags & 1048576 && rp(t, qs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ns(e, t), (e = t.pendingProps);
      var i = hr(t, Ee.current);
      nr(t, n), (i = Fu(null, t, r, e, i, n));
      var s = ju();
      return (
        (t.flags |= 1),
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oe(r) ? ((s = !0), Qs(t)) : (s = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            Du(t),
            (i.updater = Oo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ca(t, r, e, n),
            (t = Ra(null, t, r, !0, s, n)))
          : ((t.tag = 0), G && s && Cu(t), Ie(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ns(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = E0(r)),
          (e = qe(r, e)),
          i)
        ) {
          case 0:
            t = Aa(null, t, r, e, n);
            break e;
          case 1:
            t = $h(null, t, r, e, n);
            break e;
          case 11:
            t = xh(null, t, r, e, n);
            break e;
          case 14:
            t = Mh(null, t, r, qe(r.type, e), n);
            break e;
        }
        throw Error(v(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : qe(r, i)), Aa(e, t, r, i, n);
    case 1:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : qe(r, i)), $h(e, t, r, i, n);
    case 3:
      e: {
        if (($p(t), e === null)) throw Error(v(387));
        (r = t.pendingProps), (s = t.memoizedState), (i = s.element), up(e, t), Zs(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = gr(Error(v(423)), t)), (t = Uh(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = gr(Error(v(424)), t)), (t = Uh(e, t, r, n, i));
            break e;
          } else
            for (
              xe = Xt(t.stateNode.containerInfo.firstChild),
                $e = t,
                G = !0,
                be = null,
                n = lp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((dr(), r === i)) {
            t = Pt(e, t, n);
            break e;
          }
          Ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cp(t),
        e === null && Ia(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        ya(r, i) ? (o = null) : s !== null && ya(r, s) && (t.flags |= 32),
        Mp(e, t),
        Ie(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ia(t), null;
    case 13:
      return Up(e, t, n);
    case 4:
      return (
        xu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fr(t, null, r, n)) : Ie(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : qe(r, i)), xh(e, t, r, i, n);
    case 7:
      return Ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          V(Js, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (tt(s.value, o)) {
            if (s.children === i.children && !Ne.current) {
              t = Pt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                o = s.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = It(-1, n & -n)), (a.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null ? (a.next = a) : ((a.next = d.next), (d.next = a)), (u.pending = a);
                      }
                    }
                    (s.lanes |= n), (a = s.alternate), a !== null && (a.lanes |= n), ka(s.return, n, t), (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(v(341));
                (o.lanes |= n), (l = o.alternate), l !== null && (l.lanes |= n), ka(o, n, t), (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        Ie(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        nr(t, n),
        (i = Ke(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ie(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (i = qe(r, t.pendingProps)), (i = qe(r.type, i)), Mh(e, t, r, i, n);
    case 15:
      return Dp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : qe(r, i)),
        Ns(e, t),
        (t.tag = 1),
        Oe(r) ? ((e = !0), Qs(t)) : (e = !1),
        nr(t, n),
        Np(t, r, i),
        Ca(t, r, i, n),
        Ra(null, t, r, !0, e, n)
      );
    case 19:
      return Fp(e, t, n);
    case 22:
      return xp(e, t, n);
  }
  throw Error(v(156, t.tag));
};
function eg(e, t) {
  return Pf(e, t);
}
function w0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function He(e, t, n, r) {
  return new w0(e, t, n, r);
}
function Yu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function E0(e) {
  if (typeof e == "function") return Yu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === pu)) return 11;
    if (e === gu) return 14;
  }
  return 2;
}
function Jt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = He(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ds(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Yu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case jn:
        return Sn(n.children, i, s, t);
      case fu:
        (o = 8), (i |= 8);
        break;
      case ql:
        return (e = He(12, n, t, i | 2)), (e.elementType = ql), (e.lanes = s), e;
      case Jl:
        return (e = He(13, n, t, i)), (e.elementType = Jl), (e.lanes = s), e;
      case bl:
        return (e = He(19, n, t, i)), (e.elementType = bl), (e.lanes = s), e;
      case cf:
        return xo(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case af:
              o = 10;
              break e;
            case uf:
              o = 9;
              break e;
            case pu:
              o = 11;
              break e;
            case gu:
              o = 14;
              break e;
            case xt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(v(130, e == null ? e : typeof e, ""));
    }
  return (t = He(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t;
}
function Sn(e, t, n, r) {
  return (e = He(7, e, r, t)), (e.lanes = n), e;
}
function xo(e, t, n, r) {
  return (e = He(22, e, r, t)), (e.elementType = cf), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Dl(e, t, n) {
  return (e = He(6, e, null, t)), (e.lanes = n), e;
}
function xl(e, t, n) {
  return (
    (t = He(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function S0(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = pl(0)),
    (this.expirationTimes = pl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = pl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function qu(e, t, n, r, i, s, o, l, a) {
  return (
    (e = new S0(e, t, n, l, a)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = He(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Du(s),
    e
  );
}
function I0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Fn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function tg(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Dn(e) !== e || e.tag !== 1) throw Error(v(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(v(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return tp(e, n, t);
  }
  return t;
}
function ng(e, t, n, r, i, s, o, l, a) {
  return (
    (e = qu(n, r, !0, e, i, s, o, l, a)),
    (e.context = tg(null)),
    (n = e.current),
    (r = Te()),
    (i = qt(n)),
    (s = It(r, i)),
    (s.callback = t ?? null),
    Qt(n, s, i),
    (e.current.lanes = i),
    $i(e, i, r),
    Le(e, r),
    e
  );
}
function Mo(e, t, n, r) {
  var i = t.current,
    s = Te(),
    o = qt(i);
  return (
    (n = tg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = It(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qt(i, t, o)),
    e !== null && (et(e, i, o, s), Ps(e, i, o)),
    o
  );
}
function lo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Xh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ju(e, t) {
  Xh(e, t), (e = e.alternate) && Xh(e, t);
}
function k0() {
  return null;
}
var rg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function bu(e) {
  this._internalRoot = e;
}
$o.prototype.render = bu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(v(409));
  Mo(e, t, null, null);
};
$o.prototype.unmount = bu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    An(function () {
      Mo(null, e, null, null);
    }),
      (t[Tt] = null);
  }
};
function $o(e) {
  this._internalRoot = e;
}
$o.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = xf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < $t.length && t !== 0 && t < $t[n].priority; n++);
    $t.splice(n, 0, e), n === 0 && $f(e);
  }
};
function Zu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Uo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Qh() {}
function T0(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = lo(o);
        s.call(u);
      };
    }
    var o = ng(t, r, e, 0, null, !1, !1, "", Qh);
    return (e._reactRootContainer = o), (e[Tt] = o.current), pi(e.nodeType === 8 ? e.parentNode : e), An(), o;
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = lo(a);
      l.call(u);
    };
  }
  var a = qu(e, 0, !1, null, null, !1, !1, "", Qh);
  return (
    (e._reactRootContainer = a),
    (e[Tt] = a.current),
    pi(e.nodeType === 8 ? e.parentNode : e),
    An(function () {
      Mo(t, a, n, r);
    }),
    a
  );
}
function Fo(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = lo(o);
        l.call(a);
      };
    }
    Mo(t, o, e, i);
  } else o = T0(n, t, e, i, r);
  return lo(o);
}
Lf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Hr(t.pendingLanes);
        n !== 0 && (yu(t, n | 1), Le(t, b()), !(M & 6) && ((mr = b() + 500), ln()));
      }
      break;
    case 13:
      An(function () {
        var r = Ct(e, 1);
        if (r !== null) {
          var i = Te();
          et(r, e, 1, i);
        }
      }),
        Ju(e, 1);
  }
};
_u = function (e) {
  if (e.tag === 13) {
    var t = Ct(e, 134217728);
    if (t !== null) {
      var n = Te();
      et(t, e, 134217728, n);
    }
    Ju(e, 134217728);
  }
};
Df = function (e) {
  if (e.tag === 13) {
    var t = qt(e),
      n = Ct(e, t);
    if (n !== null) {
      var r = Te();
      et(n, e, t, r);
    }
    Ju(e, t);
  }
};
xf = function () {
  return U;
};
Mf = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
aa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ta(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ao(r);
            if (!i) throw Error(v(90));
            df(r), ta(r, i);
          }
        }
      }
      break;
    case "textarea":
      pf(e, n);
      break;
    case "select":
      (t = n.value), t != null && bn(e, !!n.multiple, t, !1);
  }
};
Ef = Gu;
Sf = An;
var C0 = { usingClientEntryPoint: !1, Events: [Fi, Hn, Ao, _f, wf, Gu] },
  Fr = { findFiberByHostInstance: mn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
  P0 = {
    bundleType: Fr.bundleType,
    version: Fr.version,
    rendererPackageName: Fr.rendererPackageName,
    rendererConfig: Fr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Tf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Fr.findFiberByHostInstance || k0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ms = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ms.isDisabled && ms.supportsFiber)
    try {
      (ko = ms.inject(P0)), (ut = ms);
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C0;
Fe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zu(t)) throw Error(v(200));
  return I0(e, t, null, n);
};
Fe.createRoot = function (e, t) {
  if (!Zu(e)) throw Error(v(299));
  var n = !1,
    r = "",
    i = rg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = qu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Tt] = t.current),
    pi(e.nodeType === 8 ? e.parentNode : e),
    new bu(t)
  );
};
Fe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(v(188)) : ((e = Object.keys(e).join(",")), Error(v(268, e)));
  return (e = Tf(t)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
  return An(e);
};
Fe.hydrate = function (e, t, n) {
  if (!Uo(t)) throw Error(v(200));
  return Fo(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
  if (!Zu(e)) throw Error(v(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = rg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = ng(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[Tt] = t.current),
    pi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new $o(t);
};
Fe.render = function (e, t, n) {
  if (!Uo(t)) throw Error(v(200));
  return Fo(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
  if (!Uo(e)) throw Error(v(40));
  return e._reactRootContainer
    ? (An(function () {
        Fo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Tt] = null);
        });
      }),
      !0)
    : !1;
};
Fe.unstable_batchedUpdates = Gu;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Uo(n)) throw Error(v(200));
  if (e == null || e._reactInternals === void 0) throw Error(v(38));
  return Fo(e, t, n, !1, r);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function ig() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ig);
    } catch (e) {
      console.error(e);
    }
}
ig(), (rf.exports = Fe);
var A0 = rf.exports,
  Yh = A0;
(Ql.createRoot = Yh.createRoot), (Ql.hydrateRoot = Yh.hydrateRoot);
const R0 = "/repo-pilvi/assets/react-CHdo91hT.svg",
  N0 = "/repo-pilvi/vite.svg";
var qh = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sg = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r);
      i < 128
        ? (t[n++] = i)
        : i < 2048
        ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
        : (i & 64512) === 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (i >> 18) | 240),
          (t[n++] = ((i >> 12) & 63) | 128),
          (t[n++] = ((i >> 6) & 63) | 128),
          (t[n++] = (i & 63) | 128))
        : ((t[n++] = (i >> 12) | 224), (t[n++] = ((i >> 6) & 63) | 128), (t[n++] = (i & 63) | 128));
    }
    return t;
  },
  O0 = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const i = e[n++];
      if (i < 128) t[r++] = String.fromCharCode(i);
      else if (i > 191 && i < 224) {
        const s = e[n++];
        t[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63));
      } else if (i > 239 && i < 365) {
        const s = e[n++],
          o = e[n++],
          l = e[n++],
          a = (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (l & 63)) - 65536;
        (t[r++] = String.fromCharCode(55296 + (a >> 10))), (t[r++] = String.fromCharCode(56320 + (a & 1023)));
      } else {
        const s = e[n++],
          o = e[n++];
        t[r++] = String.fromCharCode(((i & 15) << 12) | ((s & 63) << 6) | (o & 63));
      }
    }
    return t.join("");
  },
  og = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(e, t) {
      if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let i = 0; i < e.length; i += 3) {
        const s = e[i],
          o = i + 1 < e.length,
          l = o ? e[i + 1] : 0,
          a = i + 2 < e.length,
          u = a ? e[i + 2] : 0,
          d = s >> 2,
          p = ((s & 3) << 4) | (l >> 4);
        let g = ((l & 15) << 2) | (u >> 6),
          y = u & 63;
        a || ((y = 64), o || (g = 64)), r.push(n[d], n[p], n[g], n[y]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(sg(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : O0(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let i = 0; i < e.length; ) {
        const s = n[e.charAt(i++)],
          l = i < e.length ? n[e.charAt(i)] : 0;
        ++i;
        const u = i < e.length ? n[e.charAt(i)] : 64;
        ++i;
        const p = i < e.length ? n[e.charAt(i)] : 64;
        if ((++i, s == null || l == null || u == null || p == null)) throw new L0();
        const g = (s << 2) | (l >> 4);
        if ((r.push(g), u !== 64)) {
          const y = ((l << 4) & 240) | (u >> 2);
          if ((r.push(y), p !== 64)) {
            const _ = ((u << 6) & 192) | p;
            r.push(_);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let e = 0; e < this.ENCODED_VALS.length; e++)
          (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
            (this.charToByteMap_[this.byteToCharMap_[e]] = e),
            (this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
            e >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e));
      }
    },
  };
class L0 extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const D0 = function (e) {
    const t = sg(e);
    return og.encodeByteArray(t, !0);
  },
  ao = function (e) {
    return D0(e).replace(/\./g, "");
  },
  lg = function (e) {
    try {
      return og.decodeString(e, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function x0() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const M0 = () => x0().__FIREBASE_DEFAULTS__,
  $0 = () => {
    if (typeof process > "u" || typeof qh > "u") return;
    const e = qh.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  U0 = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && lg(e[1]);
    return t && JSON.parse(t);
  },
  ec = () => {
    try {
      return M0() || $0() || U0();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  ag = (e) => {
    var t, n;
    return (n = (t = ec()) === null || t === void 0 ? void 0 : t.emulatorHosts) === null || n === void 0
      ? void 0
      : n[e];
  },
  F0 = (e) => {
    const t = ag(e);
    if (!t) return;
    const n = t.lastIndexOf(":");
    if (n <= 0 || n + 1 === t.length) throw new Error(`Invalid host ${t} with no separate hostname and port!`);
    const r = parseInt(t.substring(n + 1), 10);
    return t[0] === "[" ? [t.substring(1, n - 1), r] : [t.substring(0, n), r];
  },
  ug = () => {
    var e;
    return (e = ec()) === null || e === void 0 ? void 0 : e.config;
  },
  cg = (e) => {
    var t;
    return (t = ec()) === null || t === void 0 ? void 0 : t[`_${e}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class j0 {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, n) => {
        (this.resolve = t), (this.reject = n);
      }));
  }
  wrapCallback(t) {
    return (n, r) => {
      n ? this.reject(n) : this.resolve(r),
        typeof t == "function" && (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function z0(e, t) {
  if (e.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const n = { alg: "none", type: "JWT" },
    r = t || "demo-project",
    i = e.iat || 0,
    s = e.sub || e.user_id;
  if (!s) throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: i,
      exp: i + 3600,
      auth_time: i,
      sub: s,
      user_id: s,
      firebase: { sign_in_provider: "custom", identities: {} },
    },
    e
  );
  return [ao(JSON.stringify(n)), ao(JSON.stringify(o)), ""].join(".");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Se() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function V0() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())
  );
}
function B0() {
  const e = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function H0() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function W0() {
  const e = Se();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function K0() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function G0() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        i = self.indexedDB.open(r);
      (i.onsuccess = () => {
        i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (i.onupgradeneeded = () => {
          n = !1;
        }),
        (i.onerror = () => {
          var s;
          t(((s = i.error) === null || s === void 0 ? void 0 : s.message) || "");
        });
    } catch (n) {
      t(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const X0 = "FirebaseError";
class Ot extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = X0),
      Object.setPrototypeOf(this, Ot.prototype),
      Error.captureStackTrace && Error.captureStackTrace(this, zi.prototype.create);
  }
}
class zi {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      i = `${this.service}/${t}`,
      s = this.errors[t],
      o = s ? Q0(s, r) : "Error",
      l = `${this.serviceName}: ${o} (${i}).`;
    return new Ot(i, l, r);
  }
}
function Q0(e, t) {
  return e.replace(Y0, (n, r) => {
    const i = t[r];
    return i != null ? String(i) : `<${r}?>`;
  });
}
const Y0 = /\{\$([^}]+)}/g;
function q0(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function uo(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const i of n) {
    if (!r.includes(i)) return !1;
    const s = e[i],
      o = t[i];
    if (Jh(s) && Jh(o)) {
      if (!uo(s, o)) return !1;
    } else if (s !== o) return !1;
  }
  for (const i of r) if (!n.includes(i)) return !1;
  return !0;
}
function Jh(e) {
  return e !== null && typeof e == "object";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vi(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((i) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(i));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return t.length ? "&" + t.join("&") : "";
}
function Kr(e) {
  const t = {};
  return (
    e
      .replace(/^\?/, "")
      .split("&")
      .forEach((r) => {
        if (r) {
          const [i, s] = r.split("=");
          t[decodeURIComponent(i)] = decodeURIComponent(s);
        }
      }),
    t
  );
}
function Gr(e) {
  const t = e.indexOf("?");
  if (!t) return "";
  const n = e.indexOf("#", t);
  return e.substring(t, n > 0 ? n : void 0);
}
function J0(e, t) {
  const n = new b0(e, t);
  return n.subscribe.bind(n);
}
class b0 {
  constructor(t, n) {
    (this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = n),
      this.task
        .then(() => {
          t(this);
        })
        .catch((r) => {
          this.error(r);
        });
  }
  next(t) {
    this.forEachObserver((n) => {
      n.next(t);
    });
  }
  error(t) {
    this.forEachObserver((n) => {
      n.error(t);
    }),
      this.close(t);
  }
  complete() {
    this.forEachObserver((t) => {
      t.complete();
    }),
      this.close();
  }
  subscribe(t, n, r) {
    let i;
    if (t === void 0 && n === void 0 && r === void 0) throw new Error("Missing Observer.");
    Z0(t, ["next", "error", "complete"]) ? (i = t) : (i = { next: t, error: n, complete: r }),
      i.next === void 0 && (i.next = Ml),
      i.error === void 0 && (i.error = Ml),
      i.complete === void 0 && (i.complete = Ml);
    const s = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? i.error(this.finalError) : i.complete();
          } catch {}
        }),
      this.observers.push(i),
      s
    );
  }
  unsubscribeOne(t) {
    this.observers === void 0 ||
      this.observers[t] === void 0 ||
      (delete this.observers[t],
      (this.observerCount -= 1),
      this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this));
  }
  forEachObserver(t) {
    if (!this.finalized) for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t);
  }
  sendOne(t, n) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[t] !== void 0)
        try {
          n(this.observers[t]);
        } catch (r) {
          typeof console < "u" && console.error && console.error(r);
        }
    });
  }
  close(t) {
    this.finalized ||
      ((this.finalized = !0),
      t !== void 0 && (this.finalError = t),
      this.task.then(() => {
        (this.observers = void 0), (this.onNoObservers = void 0);
      }));
  }
}
function Z0(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function Ml() {}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xn(e) {
  return e && e._delegate ? e._delegate : e;
}
class Rn {
  constructor(t, n, r) {
    (this.name = t),
      (this.instanceFactory = n),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gn = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class e1 {
  constructor(t, n) {
    (this.name = t),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const n = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(n)) {
      const r = new j0();
      if ((this.instancesDeferred.set(n, r), this.isInitialized(n) || this.shouldAutoInitialize()))
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: n });
          i && r.resolve(i);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier),
      i = (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (s) {
        if (i) return null;
        throw s;
      }
    else {
      if (i) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name) throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component) throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (n1(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: gn });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const i = this.normalizeInstanceIdentifier(n);
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: i });
          r.resolve(s);
        } catch {}
      }
    }
  }
  clearInstance(t = gn) {
    this.instancesDeferred.delete(t), this.instancesOptions.delete(t), this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...t.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = gn) {
    return this.instances.has(t);
  }
  getOptions(t = gn) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r)) throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
    const i = this.getOrInitializeService({ instanceIdentifier: r, options: n });
    for (const [s, o] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(s);
      r === l && o.resolve(i);
    }
    return i;
  }
  onInit(t, n) {
    var r;
    const i = this.normalizeInstanceIdentifier(n),
      s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set();
    s.add(t), this.onInitCallbacks.set(i, s);
    const o = this.instances.get(i);
    return (
      o && t(o, i),
      () => {
        s.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const i of r)
        try {
          i(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, { instanceIdentifier: t1(t), options: n })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, n),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = gn) {
    return this.component ? (this.component.multipleInstances ? t : gn) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function t1(e) {
  return e === gn ? void 0 : e;
}
function n1(e) {
  return e.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class r1 {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const n = this.getProvider(t.name);
    if (n.isComponentSet()) throw new Error(`Component ${t.name} has already been registered with ${this.name}`);
    n.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name), this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const n = new e1(t, this);
    return this.providers.set(t, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var $;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})($ || ($ = {}));
const i1 = { debug: $.DEBUG, verbose: $.VERBOSE, info: $.INFO, warn: $.WARN, error: $.ERROR, silent: $.SILENT },
  s1 = $.INFO,
  o1 = { [$.DEBUG]: "log", [$.VERBOSE]: "log", [$.INFO]: "info", [$.WARN]: "warn", [$.ERROR]: "error" },
  l1 = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      i = o1[t];
    if (i) console[i](`[${r}]  ${e.name}:`, ...n);
    else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
  };
class tc {
  constructor(t) {
    (this.name = t), (this._logLevel = s1), (this._logHandler = l1), (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in $)) throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? i1[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function") throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, $.DEBUG, ...t), this._logHandler(this, $.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, $.VERBOSE, ...t), this._logHandler(this, $.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, $.INFO, ...t), this._logHandler(this, $.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, $.WARN, ...t), this._logHandler(this, $.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, $.ERROR, ...t), this._logHandler(this, $.ERROR, ...t);
  }
}
const a1 = (e, t) => t.some((n) => e instanceof n);
let bh, Zh;
function u1() {
  return bh || (bh = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function c1() {
  return (
    Zh || (Zh = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
  );
}
const hg = new WeakMap(),
  Va = new WeakMap(),
  dg = new WeakMap(),
  $l = new WeakMap(),
  nc = new WeakMap();
function h1(e) {
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("success", s), e.removeEventListener("error", o);
      },
      s = () => {
        n(bt(e.result)), i();
      },
      o = () => {
        r(e.error), i();
      };
    e.addEventListener("success", s), e.addEventListener("error", o);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && hg.set(n, e);
      })
      .catch(() => {}),
    nc.set(t, e),
    t
  );
}
function d1(e) {
  if (Va.has(e)) return;
  const t = new Promise((n, r) => {
    const i = () => {
        e.removeEventListener("complete", s), e.removeEventListener("error", o), e.removeEventListener("abort", o);
      },
      s = () => {
        n(), i();
      },
      o = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), i();
      };
    e.addEventListener("complete", s), e.addEventListener("error", o), e.addEventListener("abort", o);
  });
  Va.set(e, t);
}
let Ba = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return Va.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || dg.get(e);
      if (t === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return bt(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e;
  },
};
function f1(e) {
  Ba = e(Ba);
}
function p1(e) {
  return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(Ul(this), t, ...n);
        return dg.set(r, t.sort ? t.sort() : [t]), bt(r);
      }
    : c1().includes(e)
    ? function (...t) {
        return e.apply(Ul(this), t), bt(hg.get(this));
      }
    : function (...t) {
        return bt(e.apply(Ul(this), t));
      };
}
function g1(e) {
  return typeof e == "function" ? p1(e) : (e instanceof IDBTransaction && d1(e), a1(e, u1()) ? new Proxy(e, Ba) : e);
}
function bt(e) {
  if (e instanceof IDBRequest) return h1(e);
  if ($l.has(e)) return $l.get(e);
  const t = g1(e);
  return t !== e && ($l.set(e, t), nc.set(t, e)), t;
}
const Ul = (e) => nc.get(e);
function m1(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
  const o = indexedDB.open(e, t),
    l = bt(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (a) => {
        r(bt(o.result), a.oldVersion, a.newVersion, bt(o.transaction), a);
      }),
    n && o.addEventListener("blocked", (a) => n(a.oldVersion, a.newVersion, a)),
    l
      .then((a) => {
        s && a.addEventListener("close", () => s()),
          i && a.addEventListener("versionchange", (u) => i(u.oldVersion, u.newVersion, u));
      })
      .catch(() => {}),
    l
  );
}
const v1 = ["get", "getKey", "getAll", "getAllKeys", "count"],
  y1 = ["put", "add", "delete", "clear"],
  Fl = new Map();
function ed(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (Fl.get(t)) return Fl.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    i = y1.includes(n);
  if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || v1.includes(n))) return;
  const s = async function (o, ...l) {
    const a = this.transaction(o, i ? "readwrite" : "readonly");
    let u = a.store;
    return r && (u = u.index(l.shift())), (await Promise.all([u[n](...l), i && a.done]))[0];
  };
  return Fl.set(t, s), s;
}
f1((e) => ({ ...e, get: (t, n, r) => ed(t, n) || e.get(t, n, r), has: (t, n) => !!ed(t, n) || e.has(t, n) }));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _1 {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (w1(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function w1(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const Ha = "@firebase/app",
  td = "0.10.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Nn = new tc("@firebase/app"),
  E1 = "@firebase/app-compat",
  S1 = "@firebase/analytics-compat",
  I1 = "@firebase/analytics",
  k1 = "@firebase/app-check-compat",
  T1 = "@firebase/app-check",
  C1 = "@firebase/auth",
  P1 = "@firebase/auth-compat",
  A1 = "@firebase/database",
  R1 = "@firebase/database-compat",
  N1 = "@firebase/functions",
  O1 = "@firebase/functions-compat",
  L1 = "@firebase/installations",
  D1 = "@firebase/installations-compat",
  x1 = "@firebase/messaging",
  M1 = "@firebase/messaging-compat",
  $1 = "@firebase/performance",
  U1 = "@firebase/performance-compat",
  F1 = "@firebase/remote-config",
  j1 = "@firebase/remote-config-compat",
  z1 = "@firebase/storage",
  V1 = "@firebase/storage-compat",
  B1 = "@firebase/firestore",
  H1 = "@firebase/firestore-compat",
  W1 = "firebase",
  K1 = "10.11.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wa = "[DEFAULT]",
  G1 = {
    [Ha]: "fire-core",
    [E1]: "fire-core-compat",
    [I1]: "fire-analytics",
    [S1]: "fire-analytics-compat",
    [T1]: "fire-app-check",
    [k1]: "fire-app-check-compat",
    [C1]: "fire-auth",
    [P1]: "fire-auth-compat",
    [A1]: "fire-rtdb",
    [R1]: "fire-rtdb-compat",
    [N1]: "fire-fn",
    [O1]: "fire-fn-compat",
    [L1]: "fire-iid",
    [D1]: "fire-iid-compat",
    [x1]: "fire-fcm",
    [M1]: "fire-fcm-compat",
    [$1]: "fire-perf",
    [U1]: "fire-perf-compat",
    [F1]: "fire-rc",
    [j1]: "fire-rc-compat",
    [z1]: "fire-gcs",
    [V1]: "fire-gcs-compat",
    [B1]: "fire-fst",
    [H1]: "fire-fst-compat",
    "fire-js": "fire-js",
    [W1]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const co = new Map(),
  X1 = new Map(),
  Ka = new Map();
function nd(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    Nn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n);
  }
}
function vr(e) {
  const t = e.name;
  if (Ka.has(t)) return Nn.debug(`There were multiple attempts to register component ${t}.`), !1;
  Ka.set(t, e);
  for (const n of co.values()) nd(n, e);
  for (const n of X1.values()) nd(n, e);
  return !0;
}
function rc(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
function yt(e) {
  return e.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Q1 = {
    "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}'",
    "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "server-app-deleted": "Firebase Server App has been deleted",
    "no-options": "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument": "First argument to `onLog` must be null or a function.",
    "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
    "finalization-registry-not-supported":
      "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
    "invalid-server-app-environment": "FirebaseServerApp is not for use in browser environments.",
  },
  Zt = new zi("app", "Firebase", Q1);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Y1 {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Rn("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw Zt.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ir = K1;
function fg(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: Wa, automaticDataCollectionEnabled: !1 }, t),
    i = r.name;
  if (typeof i != "string" || !i) throw Zt.create("bad-app-name", { appName: String(i) });
  if ((n || (n = ug()), !n)) throw Zt.create("no-options");
  const s = co.get(i);
  if (s) {
    if (uo(n, s.options) && uo(r, s.config)) return s;
    throw Zt.create("duplicate-app", { appName: i });
  }
  const o = new r1(i);
  for (const a of Ka.values()) o.addComponent(a);
  const l = new Y1(n, r, o);
  return co.set(i, l), l;
}
function pg(e = Wa) {
  const t = co.get(e);
  if (!t && e === Wa && ug()) return fg();
  if (!t) throw Zt.create("no-app", { appName: e });
  return t;
}
function en(e, t, n) {
  var r;
  let i = (r = G1[e]) !== null && r !== void 0 ? r : e;
  n && (i += `-${n}`);
  const s = i.match(/\s|\//),
    o = t.match(/\s|\//);
  if (s || o) {
    const l = [`Unable to register library "${i}" with version "${t}":`];
    s && l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),
      s && o && l.push("and"),
      o && l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),
      Nn.warn(l.join(" "));
    return;
  }
  vr(new Rn(`${i}-version`, () => ({ library: i, version: t }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const q1 = "firebase-heartbeat-database",
  J1 = 1,
  Ii = "firebase-heartbeat-store";
let jl = null;
function gg() {
  return (
    jl ||
      (jl = m1(q1, J1, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(Ii);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw Zt.create("idb-open", { originalErrorMessage: e.message });
      })),
    jl
  );
}
async function b1(e) {
  try {
    const n = (await gg()).transaction(Ii),
      r = await n.objectStore(Ii).get(mg(e));
    return await n.done, r;
  } catch (t) {
    if (t instanceof Ot) Nn.warn(t.message);
    else {
      const n = Zt.create("idb-get", { originalErrorMessage: t == null ? void 0 : t.message });
      Nn.warn(n.message);
    }
  }
}
async function rd(e, t) {
  try {
    const r = (await gg()).transaction(Ii, "readwrite");
    await r.objectStore(Ii).put(t, mg(e)), await r.done;
  } catch (n) {
    if (n instanceof Ot) Nn.warn(n.message);
    else {
      const r = Zt.create("idb-set", { originalErrorMessage: n == null ? void 0 : n.message });
      Nn.warn(r.message);
    }
  }
}
function mg(e) {
  return `${e.name}!${e.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Z1 = 1024,
  e_ = 30 * 24 * 60 * 60 * 1e3;
class t_ {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new r_(n)),
      (this._heartbeatsCachePromise = this._storage.read().then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, n;
    const i = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
      s = id();
    if (
      !(
        ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0 ? void 0 : n.heartbeats) == null)
      ) &&
      !(this._heartbeatsCache.lastSentHeartbeatDate === s || this._heartbeatsCache.heartbeats.some((o) => o.date === s))
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: s, agent: i }),
        (this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((o) => {
          const l = new Date(o.date).valueOf();
          return Date.now() - l <= e_;
        })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var t;
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const n = id(),
      { heartbeatsToSend: r, unsentEntries: i } = n_(this._heartbeatsCache.heartbeats),
      s = ao(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = n),
      i.length > 0
        ? ((this._heartbeatsCache.heartbeats = i), await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []), this._storage.overwrite(this._heartbeatsCache)),
      s
    );
  }
}
function id() {
  return new Date().toISOString().substring(0, 10);
}
function n_(e, t = Z1) {
  const n = [];
  let r = e.slice();
  for (const i of e) {
    const s = n.find((o) => o.agent === i.agent);
    if (s) {
      if ((s.dates.push(i.date), sd(n) > t)) {
        s.dates.pop();
        break;
      }
    } else if ((n.push({ agent: i.agent, dates: [i.date] }), sd(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class r_ {
  constructor(t) {
    (this.app = t), (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return K0()
      ? G0()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await b1(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return rd(this.app, {
        lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const i = await this.read();
      return rd(this.app, {
        lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
        heartbeats: [...i.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function sd(e) {
  return ao(JSON.stringify({ version: 2, heartbeats: e })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function i_(e) {
  vr(new Rn("platform-logger", (t) => new _1(t), "PRIVATE")),
    vr(new Rn("heartbeat", (t) => new t_(t), "PRIVATE")),
    en(Ha, td, e),
    en(Ha, td, "esm2017"),
    en("fire-js", "");
}
i_("");
function ic(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function vg() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const s_ = vg,
  yg = new zi("auth", "Firebase", vg());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ho = new tc("@firebase/auth");
function o_(e, ...t) {
  ho.logLevel <= $.WARN && ho.warn(`Auth (${Ir}): ${e}`, ...t);
}
function xs(e, ...t) {
  ho.logLevel <= $.ERROR && ho.error(`Auth (${Ir}): ${e}`, ...t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function nt(e, ...t) {
  throw sc(e, ...t);
}
function ht(e, ...t) {
  return sc(e, ...t);
}
function _g(e, t, n) {
  const r = Object.assign(Object.assign({}, s_()), { [t]: n });
  return new zi("auth", "Firebase", r).create(t, { appName: e.name });
}
function tn(e) {
  return _g(
    e,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function sc(e, ...t) {
  if (typeof e != "string") {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return yg.create(e, ...t);
}
function A(e, t, ...n) {
  if (!e) throw sc(t, ...n);
}
function _t(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw (xs(t), new Error(t));
}
function At(e, t) {
  e || _t(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ga() {
  var e;
  return (typeof self < "u" && ((e = self.location) === null || e === void 0 ? void 0 : e.href)) || "";
}
function l_() {
  return od() === "http:" || od() === "https:";
}
function od() {
  var e;
  return (typeof self < "u" && ((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function a_() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (l_() || B0() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function u_() {
  if (typeof navigator > "u") return null;
  const e = navigator;
  return (e.languages && e.languages[0]) || e.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bi {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      At(n > t, "Short delay should be less than long delay!"),
      (this.isMobile = V0() || H0());
  }
  get() {
    return a_() ? (this.isMobile ? this.longDelay : this.shortDelay) : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function oc(e, t) {
  At(e.emulator, "Emulator should always be set here");
  const { url: n } = e.emulator;
  return t ? `${n}${t.startsWith("/") ? t.slice(1) : t}` : n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wg {
  static initialize(t, n, r) {
    (this.fetchImpl = t), n && (this.headersImpl = n), r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    _t(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers) return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    _t(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response) return globalThis.Response;
    if (typeof Response < "u") return Response;
    _t(
      "Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const c_ = {
  CREDENTIAL_MISMATCH: "custom-token-mismatch",
  MISSING_CUSTOM_TOKEN: "internal-error",
  INVALID_IDENTIFIER: "invalid-email",
  MISSING_CONTINUE_URI: "internal-error",
  INVALID_PASSWORD: "wrong-password",
  MISSING_PASSWORD: "missing-password",
  INVALID_LOGIN_CREDENTIALS: "invalid-credential",
  EMAIL_EXISTS: "email-already-in-use",
  PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
  INVALID_IDP_RESPONSE: "invalid-credential",
  INVALID_PENDING_TOKEN: "invalid-credential",
  FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
  MISSING_REQ_TYPE: "internal-error",
  EMAIL_NOT_FOUND: "user-not-found",
  RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
  EXPIRED_OOB_CODE: "expired-action-code",
  INVALID_OOB_CODE: "invalid-action-code",
  MISSING_OOB_CODE: "internal-error",
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
  INVALID_ID_TOKEN: "invalid-user-token",
  TOKEN_EXPIRED: "user-token-expired",
  USER_NOT_FOUND: "user-token-expired",
  TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
  INVALID_CODE: "invalid-verification-code",
  INVALID_SESSION_INFO: "invalid-verification-id",
  INVALID_TEMPORARY_PROOF: "invalid-credential",
  MISSING_SESSION_INFO: "missing-verification-id",
  SESSION_EXPIRED: "code-expired",
  MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
  UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
  INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
  ADMIN_ONLY_OPERATION: "admin-restricted-operation",
  INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
  MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
  MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
  MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
  SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
  SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
  BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
  RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
  MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
  INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
  INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
  MISSING_CLIENT_TYPE: "missing-client-type",
  MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
  INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
  INVALID_REQ_TYPE: "invalid-req-type",
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const h_ = new Bi(3e4, 6e4);
function Mn(e, t) {
  return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId }) : t;
}
async function an(e, t, n, r, i = {}) {
  return Eg(e, i, async () => {
    let s = {},
      o = {};
    r && (t === "GET" ? (o = r) : (s = { body: JSON.stringify(r) }));
    const l = Vi(Object.assign({ key: e.config.apiKey }, o)).slice(1),
      a = await e._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/json"),
      e.languageCode && (a["X-Firebase-Locale"] = e.languageCode),
      wg.fetch()(
        Sg(e, e.config.apiHost, n, l),
        Object.assign({ method: t, headers: a, referrerPolicy: "no-referrer" }, s)
      )
    );
  });
}
async function Eg(e, t, n) {
  e._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, c_), t);
  try {
    const i = new f_(e),
      s = await Promise.race([n(), i.promise]);
    i.clearNetworkTimeout();
    const o = await s.json();
    if ("needConfirmation" in o) throw vs(e, "account-exists-with-different-credential", o);
    if (s.ok && !("errorMessage" in o)) return o;
    {
      const l = s.ok ? o.errorMessage : o.error.message,
        [a, u] = l.split(" : ");
      if (a === "FEDERATED_USER_ID_ALREADY_LINKED") throw vs(e, "credential-already-in-use", o);
      if (a === "EMAIL_EXISTS") throw vs(e, "email-already-in-use", o);
      if (a === "USER_DISABLED") throw vs(e, "user-disabled", o);
      const d = r[a] || a.toLowerCase().replace(/[_\s]+/g, "-");
      if (u) throw _g(e, d, u);
      nt(e, d);
    }
  } catch (i) {
    if (i instanceof Ot) throw i;
    nt(e, "network-request-failed", { message: String(i) });
  }
}
async function jo(e, t, n, r, i = {}) {
  const s = await an(e, t, n, r, i);
  return "mfaPendingCredential" in s && nt(e, "multi-factor-auth-required", { _serverResponse: s }), s;
}
function Sg(e, t, n, r) {
  const i = `${t}${n}?${r}`;
  return e.config.emulator ? oc(e.config, i) : `${e.config.apiScheme}://${i}`;
}
function d_(e) {
  switch (e) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
class f_ {
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(() => r(ht(this.auth, "network-request-failed")), h_.get());
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function vs(e, t, n) {
  const r = { appName: e.name };
  n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const i = ht(e, t, r);
  return (i.customData._tokenResponse = n), i;
}
function ld(e) {
  return e !== void 0 && e.enterprise !== void 0;
}
class p_ {
  constructor(t) {
    if (((this.siteKey = ""), (this.recaptchaEnforcementState = []), t.recaptchaKey === void 0))
      throw new Error("recaptchaKey undefined");
    (this.siteKey = t.recaptchaKey.split("/")[3]), (this.recaptchaEnforcementState = t.recaptchaEnforcementState);
  }
  getProviderEnforcementState(t) {
    if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) return null;
    for (const n of this.recaptchaEnforcementState) if (n.provider && n.provider === t) return d_(n.enforcementState);
    return null;
  }
  isProviderEnabled(t) {
    return this.getProviderEnforcementState(t) === "ENFORCE" || this.getProviderEnforcementState(t) === "AUDIT";
  }
}
async function g_(e, t) {
  return an(e, "GET", "/v2/recaptchaConfig", Mn(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function m_(e, t) {
  return an(e, "POST", "/v1/accounts:delete", t);
}
async function Ig(e, t) {
  return an(e, "POST", "/v1/accounts:lookup", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ii(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function v_(e, t = !1) {
  const n = xn(e),
    r = await n.getIdToken(t),
    i = lc(r);
  A(i && i.exp && i.auth_time && i.iat, n.auth, "internal-error");
  const s = typeof i.firebase == "object" ? i.firebase : void 0,
    o = s == null ? void 0 : s.sign_in_provider;
  return {
    claims: i,
    token: r,
    authTime: ii(zl(i.auth_time)),
    issuedAtTime: ii(zl(i.iat)),
    expirationTime: ii(zl(i.exp)),
    signInProvider: o || null,
    signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
  };
}
function zl(e) {
  return Number(e) * 1e3;
}
function lc(e) {
  const [t, n, r] = e.split(".");
  if (t === void 0 || n === void 0 || r === void 0) return xs("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const i = lg(n);
    return i ? JSON.parse(i) : (xs("Failed to decode base64 JWT payload"), null);
  } catch (i) {
    return xs("Caught error parsing JWT payload as JSON", i == null ? void 0 : i.toString()), null;
  }
}
function ad(e) {
  const t = lc(e);
  return (
    A(t, "internal-error"),
    A(typeof t.exp < "u", "internal-error"),
    A(typeof t.iat < "u", "internal-error"),
    Number(t.exp) - Number(t.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ki(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (r instanceof Ot && y_(r) && e.auth.currentUser === e && (await e.auth.signOut()), r);
  }
}
function y_({ code: e }) {
  return e === "auth/user-disabled" || e === "auth/user-token-expired";
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class __ {
  constructor(t) {
    (this.user = t), (this.isRunning = !1), (this.timerId = null), (this.errorBackoff = 3e4);
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning && ((this.isRunning = !1), this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(t) {
    var n;
    if (t) {
      const r = this.errorBackoff;
      return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r;
    } else {
      this.errorBackoff = 3e4;
      const i = ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0 ? n : 0) - Date.now() - 3e5;
      return Math.max(0, i);
    }
  }
  schedule(t = !1) {
    if (!this.isRunning) return;
    const n = this.getInterval(t);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, n);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (t) {
      (t == null ? void 0 : t.code) === "auth/network-request-failed" && this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xa {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = ii(this.lastLoginAt)), (this.creationTime = ii(this.createdAt));
  }
  _copy(t) {
    (this.createdAt = t.createdAt), (this.lastLoginAt = t.lastLoginAt), this._initializeTime();
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function fo(e) {
  var t;
  const n = e.auth,
    r = await e.getIdToken(),
    i = await ki(e, Ig(n, { idToken: r }));
  A(i == null ? void 0 : i.users.length, n, "internal-error");
  const s = i.users[0];
  e._notifyReloadListener(s);
  const o = !((t = s.providerUserInfo) === null || t === void 0) && t.length ? kg(s.providerUserInfo) : [],
    l = E_(e.providerData, o),
    a = e.isAnonymous,
    u = !(e.email && s.passwordHash) && !(l != null && l.length),
    d = a ? u : !1,
    p = {
      uid: s.localId,
      displayName: s.displayName || null,
      photoURL: s.photoUrl || null,
      email: s.email || null,
      emailVerified: s.emailVerified || !1,
      phoneNumber: s.phoneNumber || null,
      tenantId: s.tenantId || null,
      providerData: l,
      metadata: new Xa(s.createdAt, s.lastLoginAt),
      isAnonymous: d,
    };
  Object.assign(e, p);
}
async function w_(e) {
  const t = xn(e);
  await fo(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t);
}
function E_(e, t) {
  return [...e.filter((r) => !t.some((i) => i.providerId === r.providerId)), ...t];
}
function kg(e) {
  return e.map((t) => {
    var { providerId: n } = t,
      r = ic(t, ["providerId"]);
    return {
      providerId: n,
      uid: r.rawId || "",
      displayName: r.displayName || null,
      email: r.email || null,
      phoneNumber: r.phoneNumber || null,
      photoURL: r.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function S_(e, t) {
  const n = await Eg(e, {}, async () => {
    const r = Vi({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: i, apiKey: s } = e.config,
      o = Sg(e, i, "/v1/token", `key=${s}`),
      l = await e._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/x-www-form-urlencoded"), wg.fetch()(o, { method: "POST", headers: l, body: r })
    );
  });
  return { accessToken: n.access_token, expiresIn: n.expires_in, refreshToken: n.refresh_token };
}
async function I_(e, t) {
  return an(e, "POST", "/v2/accounts:revokeToken", Mn(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ir {
  constructor() {
    (this.refreshToken = null), (this.accessToken = null), (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    A(t.idToken, "internal-error"),
      A(typeof t.idToken < "u", "internal-error"),
      A(typeof t.refreshToken < "u", "internal-error");
    const n = "expiresIn" in t && typeof t.expiresIn < "u" ? Number(t.expiresIn) : ad(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  updateFromIdToken(t) {
    A(t.length !== 0, "internal-error");
    const n = ad(t);
    this.updateTokensAndExpiration(t, null, n);
  }
  async getToken(t, n = !1) {
    return !n && this.accessToken && !this.isExpired
      ? this.accessToken
      : (A(this.refreshToken, t, "user-token-expired"),
        this.refreshToken ? (await this.refresh(t, this.refreshToken), this.accessToken) : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: i, expiresIn: s } = await S_(t, n);
    this.updateTokensAndExpiration(r, i, Number(s));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null), (this.accessToken = t || null), (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: i, expirationTime: s } = n,
      o = new ir();
    return (
      r && (A(typeof r == "string", "internal-error", { appName: t }), (o.refreshToken = r)),
      i && (A(typeof i == "string", "internal-error", { appName: t }), (o.accessToken = i)),
      s && (A(typeof s == "number", "internal-error", { appName: t }), (o.expirationTime = s)),
      o
    );
  }
  toJSON() {
    return { refreshToken: this.refreshToken, accessToken: this.accessToken, expirationTime: this.expirationTime };
  }
  _assign(t) {
    (this.accessToken = t.accessToken), (this.refreshToken = t.refreshToken), (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new ir(), this.toJSON());
  }
  _performRefresh() {
    return _t("not implemented");
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Dt(e, t) {
  A(typeof e == "string" || typeof e > "u", "internal-error", { appName: t });
}
class wt {
  constructor(t) {
    var { uid: n, auth: r, stsTokenManager: i } = t,
      s = ic(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new __(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = i),
      (this.accessToken = i.accessToken),
      (this.displayName = s.displayName || null),
      (this.email = s.email || null),
      (this.emailVerified = s.emailVerified || !1),
      (this.phoneNumber = s.phoneNumber || null),
      (this.photoURL = s.photoURL || null),
      (this.isAnonymous = s.isAnonymous || !1),
      (this.tenantId = s.tenantId || null),
      (this.providerData = s.providerData ? [...s.providerData] : []),
      (this.metadata = new Xa(s.createdAt || void 0, s.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await ki(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      A(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return v_(this, t);
  }
  reload() {
    return w_(this);
  }
  _assign(t) {
    this !== t &&
      (A(this.uid === t.uid, this.auth, "internal-error"),
      (this.displayName = t.displayName),
      (this.photoURL = t.photoURL),
      (this.email = t.email),
      (this.emailVerified = t.emailVerified),
      (this.phoneNumber = t.phoneNumber),
      (this.isAnonymous = t.isAnonymous),
      (this.tenantId = t.tenantId),
      (this.providerData = t.providerData.map((n) => Object.assign({}, n))),
      this.metadata._copy(t.metadata),
      this.stsTokenManager._assign(t.stsTokenManager));
  }
  _clone(t) {
    const n = new wt(
      Object.assign(Object.assign({}, this), { auth: t, stsTokenManager: this.stsTokenManager._clone() })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    A(!this.reloadListener, this.auth, "internal-error"),
      (this.reloadListener = t),
      this.reloadUserInfo && (this._notifyReloadListener(this.reloadUserInfo), (this.reloadUserInfo = null));
  }
  _notifyReloadListener(t) {
    this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(t, n = !1) {
    let r = !1;
    t.idToken &&
      t.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
      n && (await fo(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (yt(this.auth.app)) return Promise.reject(tn(this.auth));
    const t = await this.getIdToken();
    return await ki(this, m_(this.auth, { idToken: t })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((t) => Object.assign({}, t)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(t, n) {
    var r, i, s, o, l, a, u, d;
    const p = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      g = (i = n.email) !== null && i !== void 0 ? i : void 0,
      y = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
      _ = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
      w = (l = n.tenantId) !== null && l !== void 0 ? l : void 0,
      j = (a = n._redirectEventId) !== null && a !== void 0 ? a : void 0,
      h = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      c = (d = n.lastLoginAt) !== null && d !== void 0 ? d : void 0,
      { uid: f, emailVerified: m, isAnonymous: S, providerData: T, stsTokenManager: C } = n;
    A(f && C, t, "internal-error");
    const P = ir.fromJSON(this.name, C);
    A(typeof f == "string", t, "internal-error"),
      Dt(p, t.name),
      Dt(g, t.name),
      A(typeof m == "boolean", t, "internal-error"),
      A(typeof S == "boolean", t, "internal-error"),
      Dt(y, t.name),
      Dt(_, t.name),
      Dt(w, t.name),
      Dt(j, t.name),
      Dt(h, t.name),
      Dt(c, t.name);
    const B = new wt({
      uid: f,
      auth: t,
      email: g,
      emailVerified: m,
      displayName: p,
      isAnonymous: S,
      photoURL: _,
      phoneNumber: y,
      tenantId: w,
      stsTokenManager: P,
      createdAt: h,
      lastLoginAt: c,
    });
    return (
      T && Array.isArray(T) && (B.providerData = T.map((L) => Object.assign({}, L))), j && (B._redirectEventId = j), B
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const i = new ir();
    i.updateFromServerResponse(n);
    const s = new wt({ uid: n.localId, auth: t, stsTokenManager: i, isAnonymous: r });
    return await fo(s), s;
  }
  static async _fromGetAccountInfoResponse(t, n, r) {
    const i = n.users[0];
    A(i.localId !== void 0, "internal-error");
    const s = i.providerUserInfo !== void 0 ? kg(i.providerUserInfo) : [],
      o = !(i.email && i.passwordHash) && !(s != null && s.length),
      l = new ir();
    l.updateFromIdToken(r);
    const a = new wt({ uid: i.localId, auth: t, stsTokenManager: l, isAnonymous: o }),
      u = {
        uid: i.localId,
        displayName: i.displayName || null,
        photoURL: i.photoUrl || null,
        email: i.email || null,
        emailVerified: i.emailVerified || !1,
        phoneNumber: i.phoneNumber || null,
        tenantId: i.tenantId || null,
        providerData: s,
        metadata: new Xa(i.createdAt, i.lastLoginAt),
        isAnonymous: !(i.email && i.passwordHash) && !(s != null && s.length),
      };
    return Object.assign(a, u), a;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ud = new Map();
function Et(e) {
  At(e instanceof Function, "Expected a class definition");
  let t = ud.get(e);
  return t
    ? (At(t instanceof e, "Instance stored in cache mismatched with class"), t)
    : ((t = new e()), ud.set(e, t), t);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tg {
  constructor() {
    (this.type = "NONE"), (this.storage = {});
  }
  async _isAvailable() {
    return !0;
  }
  async _set(t, n) {
    this.storage[t] = n;
  }
  async _get(t) {
    const n = this.storage[t];
    return n === void 0 ? null : n;
  }
  async _remove(t) {
    delete this.storage[t];
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
Tg.type = "NONE";
const cd = Tg;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ms(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class sr {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: i, name: s } = this.auth;
    (this.fullUserKey = Ms(this.userKey, i.apiKey, s)),
      (this.fullPersistenceKey = Ms("persistence", i.apiKey, s)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? wt._fromJSON(this.auth, t) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(t) {
    if (this.persistence === t) return;
    const n = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = t), n)) return this.setCurrentUser(n);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(t, n, r = "authUser") {
    if (!n.length) return new sr(Et(cd), t, r);
    const i = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        })
      )
    ).filter((u) => u);
    let s = i[0] || Et(cd);
    const o = Ms(r, t.config.apiKey, t.name);
    let l = null;
    for (const u of n)
      try {
        const d = await u._get(o);
        if (d) {
          const p = wt._fromJSON(t, d);
          u !== s && (l = p), (s = u);
          break;
        }
      } catch {}
    const a = i.filter((u) => u._shouldAllowMigration);
    return !s._shouldAllowMigration || !a.length
      ? new sr(s, t, r)
      : ((s = a[0]),
        l && (await s._set(o, l.toJSON())),
        await Promise.all(
          n.map(async (u) => {
            if (u !== s)
              try {
                await u._remove(o);
              } catch {}
          })
        ),
        new sr(s, t, r));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hd(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
  if (Ag(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (Cg(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (Ng(t)) return "Blackberry";
  if (Og(t)) return "Webos";
  if (ac(t)) return "Safari";
  if ((t.includes("chrome/") || Pg(t)) && !t.includes("edge/")) return "Chrome";
  if (Rg(t)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function Cg(e = Se()) {
  return /firefox\//i.test(e);
}
function ac(e = Se()) {
  const t = e.toLowerCase();
  return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android");
}
function Pg(e = Se()) {
  return /crios\//i.test(e);
}
function Ag(e = Se()) {
  return /iemobile/i.test(e);
}
function Rg(e = Se()) {
  return /android/i.test(e);
}
function Ng(e = Se()) {
  return /blackberry/i.test(e);
}
function Og(e = Se()) {
  return /webos/i.test(e);
}
function zo(e = Se()) {
  return /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e));
}
function k_(e = Se()) {
  var t;
  return zo(e) && !!(!((t = window.navigator) === null || t === void 0) && t.standalone);
}
function T_() {
  return W0() && document.documentMode === 10;
}
function Lg(e = Se()) {
  return zo(e) || Rg(e) || Og(e) || Ng(e) || /windows phone/i.test(e) || Ag(e);
}
function C_() {
  try {
    return !!(window && window !== window.top);
  } catch {
    return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Dg(e, t = []) {
  let n;
  switch (e) {
    case "Browser":
      n = hd(Se());
      break;
    case "Worker":
      n = `${hd(Se())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Ir}/${r}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class P_ {
  constructor(t) {
    (this.auth = t), (this.queue = []);
  }
  pushCallback(t, n) {
    const r = (s) =>
      new Promise((o, l) => {
        try {
          const a = t(s);
          o(a);
        } catch (a) {
          l(a);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const i = this.queue.length - 1;
    return () => {
      this.queue[i] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const i of n)
        try {
          i();
        } catch {}
      throw this.auth._errorFactory.create("login-blocked", { originalMessage: r == null ? void 0 : r.message });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function A_(e, t = {}) {
  return an(e, "GET", "/v2/passwordPolicy", Mn(e, t));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const R_ = 6;
class N_ {
  constructor(t) {
    var n, r, i, s;
    const o = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength = (n = o.minPasswordLength) !== null && n !== void 0 ? n : R_),
      o.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = o.maxPasswordLength),
      o.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter = o.containsLowercaseCharacter),
      o.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter = o.containsUppercaseCharacter),
      o.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter = o.containsNumericCharacter),
      o.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter = o.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (i = (r = t.allowedNonAlphanumericCharacters) === null || r === void 0 ? void 0 : r.join("")) !== null &&
        i !== void 0
          ? i
          : ""),
      (this.forceUpgradeOnSignin = (s = t.forceUpgradeOnSignin) !== null && s !== void 0 ? s : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var n, r, i, s, o, l;
    const a = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, a),
      this.validatePasswordCharacterOptions(t, a),
      a.isValid && (a.isValid = (n = a.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      a.isValid && (a.isValid = (r = a.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      a.isValid && (a.isValid = (i = a.containsLowercaseLetter) !== null && i !== void 0 ? i : !0),
      a.isValid && (a.isValid = (s = a.containsUppercaseLetter) !== null && s !== void 0 ? s : !0),
      a.isValid && (a.isValid = (o = a.containsNumericCharacter) !== null && o !== void 0 ? o : !0),
      a.isValid && (a.isValid = (l = a.containsNonAlphanumericCharacter) !== null && l !== void 0 ? l : !0),
      a
    );
  }
  validatePasswordLengthOptions(t, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      i = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = t.length >= r), i && (n.meetsMaxPasswordLength = t.length <= i);
  }
  validatePasswordCharacterOptions(t, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let i = 0; i < t.length; i++)
      (r = t.charAt(i)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= "a" && r <= "z",
          r >= "A" && r <= "Z",
          r >= "0" && r <= "9",
          this.allowedNonAlphanumericCharacters.includes(r)
        );
  }
  updatePasswordCharacterOptionsStatuses(t, n, r, i, s) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = i)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter || (t.containsNonAlphanumericCharacter = s));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class O_ {
  constructor(t, n, r, i) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = i),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new dd(this)),
      (this.idTokenSubscription = new dd(this)),
      (this.beforeStateQueue = new P_(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = yg),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = t.name),
      (this.clientVersion = i.sdkClientVersion);
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = Et(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, i;
        if (!this._deleted && ((this.persistenceManager = await sr.create(this, t)), !this._deleted)) {
          if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively)
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid = ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null),
            !this._deleted && (this._isInitialized = !0);
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const t = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !t)) {
      if (this.currentUser && t && this.currentUser.uid === t.uid) {
        this._currentUser._assign(t), await this.currentUser.getIdToken();
        return;
      }
      await this._updateCurrentUser(t, !0);
    }
  }
  async initializeCurrentUserFromIdToken(t) {
    try {
      const n = await Ig(this, { idToken: t }),
        r = await wt._fromGetAccountInfoResponse(this, n, t);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", n),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(t) {
    var n;
    if (yt(this.app)) {
      const o = this.app.settings.authIdToken;
      return o
        ? new Promise((l) => {
            setTimeout(() => this.initializeCurrentUserFromIdToken(o).then(l, l));
          })
        : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let i = r,
      s = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const o = (n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId,
        l = i == null ? void 0 : i._redirectEventId,
        a = await this.tryRedirectSignIn(t);
      (!o || o === l) && a != null && a.user && ((i = a.user), (s = !0));
    }
    if (!i) return this.directlySetCurrentUser(null);
    if (!i._redirectEventId) {
      if (s)
        try {
          await this.beforeStateQueue.runMiddleware(i);
        } catch (o) {
          (i = r), this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(o));
        }
      return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null);
    }
    return (
      A(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId
        ? this.directlySetCurrentUser(i)
        : this.reloadAndSetCurrentUserOrClear(i)
    );
  }
  async tryRedirectSignIn(t) {
    let n = null;
    try {
      n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return n;
  }
  async reloadAndSetCurrentUserOrClear(t) {
    try {
      await fo(t);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed") return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = u_();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (yt(this.app)) return Promise.reject(tn(this));
    const n = t ? xn(t) : null;
    return (
      n && A(n.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && A(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return yt(this.app)
      ? Promise.reject(tn(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) && (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(t) {
    return yt(this.app)
      ? Promise.reject(tn(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(Et(t));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null ? this._agentRecaptchaConfig : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(t) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const n = this._getPasswordPolicyInternal();
    return n.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {}))
      : n.validatePassword(t);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null ? this._projectPasswordPolicy : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const t = await A_(this),
      n = new N_(t);
    this.tenantId === null ? (this._projectPasswordPolicy = n) : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new zi("auth", "Firebase", t());
  }
  onAuthStateChanged(t, n, r) {
    return this.registerStateListener(this.authStateSubscription, t, n, r);
  }
  beforeAuthStateChanged(t, n) {
    return this.beforeStateQueue.pushCallback(t, n);
  }
  onIdTokenChanged(t, n, r) {
    return this.registerStateListener(this.idTokenSubscription, t, n, r);
  }
  authStateReady() {
    return new Promise((t, n) => {
      if (this.currentUser) t();
      else {
        const r = this.onAuthStateChanged(() => {
          r(), t();
        }, n);
      }
    });
  }
  async revokeAccessToken(t) {
    if (this.currentUser) {
      const n = await this.currentUser.getIdToken(),
        r = { providerId: "apple.com", tokenType: "ACCESS_TOKEN", token: t, idToken: n };
      this.tenantId != null && (r.tenantId = this.tenantId), await I_(this, r);
    }
  }
  toJSON() {
    var t;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
    };
  }
  async _setRedirectUser(t, n) {
    const r = await this.getOrInitRedirectPersistenceManager(n);
    return t === null ? r.removeCurrentUser() : r.setCurrentUser(t);
  }
  async getOrInitRedirectPersistenceManager(t) {
    if (!this.redirectPersistenceManager) {
      const n = (t && Et(t)) || this._popupRedirectResolver;
      A(n, this, "argument-error"),
        (this.redirectPersistenceManager = await sr.create(this, [Et(n._redirectPersistence)], "redirectUser")),
        (this.redirectUser = await this.redirectPersistenceManager.getCurrentUser());
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(t) {
    var n, r;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((n = this._currentUser) === null || n === void 0 ? void 0 : n._redirectEventId) === t
        ? this._currentUser
        : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === t
        ? this.redirectUser
        : null
    );
  }
  async _persistUserIfCurrent(t) {
    if (t === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(t));
  }
  _notifyListenersIfCurrent(t) {
    t === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !0), this.currentUser && this._currentUser._startProactiveRefresh();
  }
  _stopProactiveRefresh() {
    (this.isProactiveRefreshEnabled = !1), this.currentUser && this._currentUser._stopProactiveRefresh();
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var t, n;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const r =
      (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !== null && n !== void 0 ? n : null;
    this.lastNotifiedUid !== r && ((this.lastNotifiedUid = r), this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(t, n, r, i) {
    if (this._deleted) return () => {};
    const s = typeof n == "function" ? n : n.next.bind(n);
    let o = !1;
    const l = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    if (
      (A(l, this, "internal-error"),
      l.then(() => {
        o || s(this.currentUser);
      }),
      typeof n == "function")
    ) {
      const a = t.addObserver(n, r, i);
      return () => {
        (o = !0), a();
      };
    } else {
      const a = t.addObserver(n);
      return () => {
        (o = !0), a();
      };
    }
  }
  async directlySetCurrentUser(t) {
    this.currentUser && this.currentUser !== t && this._currentUser._stopProactiveRefresh(),
      t && this.isProactiveRefreshEnabled && t._startProactiveRefresh(),
      (this.currentUser = t),
      t ? await this.assertedPersistence.setCurrentUser(t) : await this.assertedPersistence.removeCurrentUser();
  }
  queue(t) {
    return (this.operations = this.operations.then(t, t)), this.operations;
  }
  get assertedPersistence() {
    return A(this.persistenceManager, this, "internal-error"), this.persistenceManager;
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = Dg(this.config.clientPlatform, this._getFrameworks())));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var t;
    const n = { "X-Client-Version": this.clientVersion };
    this.app.options.appId && (n["X-Firebase-gmpid"] = this.app.options.appId);
    const r = await ((t = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) === null || t === void 0
      ? void 0
      : t.getHeartbeatsHeader());
    r && (n["X-Firebase-Client"] = r);
    const i = await this._getAppCheckToken();
    return i && (n["X-Firebase-AppCheck"] = i), n;
  }
  async _getAppCheckToken() {
    var t;
    const n = await ((t = this.appCheckServiceProvider.getImmediate({ optional: !0 })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      n != null && n.error && o_(`Error while retrieving App Check token: ${n.error}`), n == null ? void 0 : n.token
    );
  }
}
function kr(e) {
  return xn(e);
}
class dd {
  constructor(t) {
    (this.auth = t), (this.observer = null), (this.addObserver = J0((n) => (this.observer = n)));
  }
  get next() {
    return A(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Vo = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function L_(e) {
  Vo = e;
}
function xg(e) {
  return Vo.loadJS(e);
}
function D_() {
  return Vo.recaptchaEnterpriseScript;
}
function x_() {
  return Vo.gapiScript;
}
function M_(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
const $_ = "recaptcha-enterprise",
  U_ = "NO_RECAPTCHA";
class F_ {
  constructor(t) {
    (this.type = $_), (this.auth = kr(t));
  }
  async verify(t = "verify", n = !1) {
    async function r(s) {
      if (!n) {
        if (s.tenantId == null && s._agentRecaptchaConfig != null) return s._agentRecaptchaConfig.siteKey;
        if (s.tenantId != null && s._tenantRecaptchaConfigs[s.tenantId] !== void 0)
          return s._tenantRecaptchaConfigs[s.tenantId].siteKey;
      }
      return new Promise(async (o, l) => {
        g_(s, { clientType: "CLIENT_TYPE_WEB", version: "RECAPTCHA_ENTERPRISE" })
          .then((a) => {
            if (a.recaptchaKey === void 0) l(new Error("recaptcha Enterprise site key undefined"));
            else {
              const u = new p_(a);
              return (
                s.tenantId == null ? (s._agentRecaptchaConfig = u) : (s._tenantRecaptchaConfigs[s.tenantId] = u),
                o(u.siteKey)
              );
            }
          })
          .catch((a) => {
            l(a);
          });
      });
    }
    function i(s, o, l) {
      const a = window.grecaptcha;
      ld(a)
        ? a.enterprise.ready(() => {
            a.enterprise
              .execute(s, { action: t })
              .then((u) => {
                o(u);
              })
              .catch(() => {
                o(U_);
              });
          })
        : l(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((s, o) => {
      r(this.auth)
        .then((l) => {
          if (!n && ld(window.grecaptcha)) i(l, s, o);
          else {
            if (typeof window > "u") {
              o(new Error("RecaptchaVerifier is only supported in browser"));
              return;
            }
            let a = D_();
            a.length !== 0 && (a += l),
              xg(a)
                .then(() => {
                  i(l, s, o);
                })
                .catch((u) => {
                  o(u);
                });
          }
        })
        .catch((l) => {
          o(l);
        });
    });
  }
}
async function fd(e, t, n, r = !1) {
  const i = new F_(e);
  let s;
  try {
    s = await i.verify(n);
  } catch {
    s = await i.verify(n, !0);
  }
  const o = Object.assign({}, t);
  return (
    r ? Object.assign(o, { captchaResp: s }) : Object.assign(o, { captchaResponse: s }),
    Object.assign(o, { clientType: "CLIENT_TYPE_WEB" }),
    Object.assign(o, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
    o
  );
}
async function pd(e, t, n, r) {
  var i;
  if (!((i = e._getRecaptchaConfig()) === null || i === void 0) && i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
    const s = await fd(e, t, n, n === "getOobCode");
    return r(e, s);
  } else
    return r(e, t).catch(async (s) => {
      if (s.code === "auth/missing-recaptcha-token") {
        console.log(
          `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        );
        const o = await fd(e, t, n, n === "getOobCode");
        return r(e, o);
      } else return Promise.reject(s);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function j_(e, t) {
  const n = rc(e, "auth");
  if (n.isInitialized()) {
    const i = n.getImmediate(),
      s = n.getOptions();
    if (uo(s, t ?? {})) return i;
    nt(i, "already-initialized");
  }
  return n.initialize({ options: t });
}
function z_(e, t) {
  const n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(Et);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(r, t == null ? void 0 : t.popupRedirectResolver);
}
function V_(e, t, n) {
  const r = kr(e);
  A(r._canInitEmulator, r, "emulator-config-failed"), A(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
  const i = !1,
    s = Mg(t),
    { host: o, port: l } = B_(t),
    a = l === null ? "" : `:${l}`;
  (r.config.emulator = { url: `${s}//${o}${a}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: o,
      port: l,
      protocol: s.replace(":", ""),
      options: Object.freeze({ disableWarnings: i }),
    })),
    H_();
}
function Mg(e) {
  const t = e.indexOf(":");
  return t < 0 ? "" : e.substr(0, t + 1);
}
function B_(e) {
  const t = Mg(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    i = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (i) {
    const s = i[1];
    return { host: s, port: gd(r.substr(s.length + 1)) };
  } else {
    const [s, o] = r.split(":");
    return { host: s, port: gd(o) };
  }
}
function gd(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function H_() {
  function e() {
    const t = document.createElement("p"),
      n = t.style;
    (t.innerText = "Running in emulator mode. Do not use with production credentials."),
      (n.position = "fixed"),
      (n.width = "100%"),
      (n.backgroundColor = "#ffffff"),
      (n.border = ".1em solid #000000"),
      (n.color = "#b50000"),
      (n.bottom = "0px"),
      (n.left = "0px"),
      (n.margin = "0px"),
      (n.zIndex = "10000"),
      (n.textAlign = "center"),
      t.classList.add("firebase-emulator-warning"),
      document.body.appendChild(t);
  }
  typeof console < "u" &&
    typeof console.info == "function" &&
    console.info(
      "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
    ),
    typeof window < "u" &&
      typeof document < "u" &&
      (document.readyState === "loading" ? window.addEventListener("DOMContentLoaded", e) : e());
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uc {
  constructor(t, n) {
    (this.providerId = t), (this.signInMethod = n);
  }
  toJSON() {
    return _t("not implemented");
  }
  _getIdTokenResponse(t) {
    return _t("not implemented");
  }
  _linkToIdToken(t, n) {
    return _t("not implemented");
  }
  _getReauthenticationResolver(t) {
    return _t("not implemented");
  }
}
async function W_(e, t) {
  return an(e, "POST", "/v1/accounts:signUp", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function K_(e, t) {
  return jo(e, "POST", "/v1/accounts:signInWithPassword", Mn(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function G_(e, t) {
  return jo(e, "POST", "/v1/accounts:signInWithEmailLink", Mn(e, t));
}
async function X_(e, t) {
  return jo(e, "POST", "/v1/accounts:signInWithEmailLink", Mn(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ti extends uc {
  constructor(t, n, r, i = null) {
    super("password", r), (this._email = t), (this._password = n), (this._tenantId = i);
  }
  static _fromEmailAndPassword(t, n) {
    return new Ti(t, n, "password");
  }
  static _fromEmailAndCode(t, n, r = null) {
    return new Ti(t, n, "emailLink", r);
  }
  toJSON() {
    return { email: this._email, password: this._password, signInMethod: this.signInMethod, tenantId: this._tenantId };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t;
    if (n != null && n.email && n != null && n.password) {
      if (n.signInMethod === "password") return this._fromEmailAndPassword(n.email, n.password);
      if (n.signInMethod === "emailLink") return this._fromEmailAndCode(n.email, n.password, n.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(t) {
    switch (this.signInMethod) {
      case "password":
        const n = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return pd(t, n, "signInWithPassword", K_);
      case "emailLink":
        return G_(t, { email: this._email, oobCode: this._password });
      default:
        nt(t, "internal-error");
    }
  }
  async _linkToIdToken(t, n) {
    switch (this.signInMethod) {
      case "password":
        const r = {
          idToken: n,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB",
        };
        return pd(t, r, "signUpPassword", W_);
      case "emailLink":
        return X_(t, { idToken: n, email: this._email, oobCode: this._password });
      default:
        nt(t, "internal-error");
    }
  }
  _getReauthenticationResolver(t) {
    return this._getIdTokenResponse(t);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function or(e, t) {
  return jo(e, "POST", "/v1/accounts:signInWithIdp", Mn(e, t));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Q_ = "http://localhost";
class On extends uc {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const n = new On(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
        : nt("argument-error"),
      n
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(t) {
    const n = typeof t == "string" ? JSON.parse(t) : t,
      { providerId: r, signInMethod: i } = n,
      s = ic(n, ["providerId", "signInMethod"]);
    if (!r || !i) return null;
    const o = new On(r, i);
    return (
      (o.idToken = s.idToken || void 0),
      (o.accessToken = s.accessToken || void 0),
      (o.secret = s.secret),
      (o.nonce = s.nonce),
      (o.pendingToken = s.pendingToken || null),
      o
    );
  }
  _getIdTokenResponse(t) {
    const n = this.buildRequest();
    return or(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return (r.idToken = n), or(t, r);
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), or(t, n);
  }
  buildRequest() {
    const t = { requestUri: Q_, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = Vi(n));
    }
    return t;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Y_(e) {
  switch (e) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function q_(e) {
  const t = Kr(Gr(e)).link,
    n = t ? Kr(Gr(t)).deep_link_id : null,
    r = Kr(Gr(e)).deep_link_id;
  return (r ? Kr(Gr(r)).link : null) || r || n || t || e;
}
class cc {
  constructor(t) {
    var n, r, i, s, o, l;
    const a = Kr(Gr(t)),
      u = (n = a.apiKey) !== null && n !== void 0 ? n : null,
      d = (r = a.oobCode) !== null && r !== void 0 ? r : null,
      p = Y_((i = a.mode) !== null && i !== void 0 ? i : null);
    A(u && d && p, "argument-error"),
      (this.apiKey = u),
      (this.operation = p),
      (this.code = d),
      (this.continueUrl = (s = a.continueUrl) !== null && s !== void 0 ? s : null),
      (this.languageCode = (o = a.languageCode) !== null && o !== void 0 ? o : null),
      (this.tenantId = (l = a.tenantId) !== null && l !== void 0 ? l : null);
  }
  static parseLink(t) {
    const n = q_(t);
    try {
      return new cc(n);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tr {
  constructor() {
    this.providerId = Tr.PROVIDER_ID;
  }
  static credential(t, n) {
    return Ti._fromEmailAndPassword(t, n);
  }
  static credentialWithLink(t, n) {
    const r = cc.parseLink(n);
    return A(r, "argument-error"), Ti._fromEmailAndCode(t, r.code, r.tenantId);
  }
}
Tr.PROVIDER_ID = "password";
Tr.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
Tr.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $g {
  constructor(t) {
    (this.providerId = t), (this.defaultLanguageCode = null), (this.customParameters = {});
  }
  setDefaultLanguage(t) {
    this.defaultLanguageCode = t;
  }
  setCustomParameters(t) {
    return (this.customParameters = t), this;
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Hi extends $g {
  constructor() {
    super(...arguments), (this.scopes = []);
  }
  addScope(t) {
    return this.scopes.includes(t) || this.scopes.push(t), this;
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ft extends Hi {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return On._fromParams({ providerId: Ft.PROVIDER_ID, signInMethod: Ft.FACEBOOK_SIGN_IN_METHOD, accessToken: t });
  }
  static credentialFromResult(t) {
    return Ft.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Ft.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return Ft.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Ft.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
Ft.PROVIDER_ID = "facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jt extends Hi {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, n) {
    return On._fromParams({
      providerId: jt.PROVIDER_ID,
      signInMethod: jt.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return jt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return jt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return jt.credential(n, r);
    } catch {
      return null;
    }
  }
}
jt.GOOGLE_SIGN_IN_METHOD = "google.com";
jt.PROVIDER_ID = "google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zt extends Hi {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return On._fromParams({ providerId: zt.PROVIDER_ID, signInMethod: zt.GITHUB_SIGN_IN_METHOD, accessToken: t });
  }
  static credentialFromResult(t) {
    return zt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return zt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return zt.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
zt.GITHUB_SIGN_IN_METHOD = "github.com";
zt.PROVIDER_ID = "github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vt extends Hi {
  constructor() {
    super("twitter.com");
  }
  static credential(t, n) {
    return On._fromParams({
      providerId: Vt.PROVIDER_ID,
      signInMethod: Vt.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return Vt.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Vt.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return Vt.credential(n, r);
    } catch {
      return null;
    }
  }
}
Vt.TWITTER_SIGN_IN_METHOD = "twitter.com";
Vt.PROVIDER_ID = "twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yr {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, n, r, i = !1) {
    const s = await wt._fromIdTokenResponse(t, r, i),
      o = md(r);
    return new yr({ user: s, providerId: o, _tokenResponse: r, operationType: n });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const i = md(r);
    return new yr({ user: t, providerId: i, _tokenResponse: r, operationType: n });
  }
}
function md(e) {
  return e.providerId ? e.providerId : "phoneNumber" in e ? "phone" : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class po extends Ot {
  constructor(t, n, r, i) {
    var s;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = i),
      Object.setPrototypeOf(this, po.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (s = t.tenantId) !== null && s !== void 0 ? s : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(t, n, r, i) {
    return new po(t, n, r, i);
  }
}
function Ug(e, t, n, r) {
  return (t === "reauthenticate" ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch((s) => {
    throw s.code === "auth/multi-factor-auth-required" ? po._fromErrorAndOperation(e, s, t, r) : s;
  });
}
async function J_(e, t, n = !1) {
  const r = await ki(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return yr._forOperation(e, "link", r);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function b_(e, t, n = !1) {
  const { auth: r } = e;
  if (yt(r.app)) return Promise.reject(tn(r));
  const i = "reauthenticate";
  try {
    const s = await ki(e, Ug(r, i, t, e), n);
    A(s.idToken, r, "internal-error");
    const o = lc(s.idToken);
    A(o, r, "internal-error");
    const { sub: l } = o;
    return A(e.uid === l, r, "user-mismatch"), yr._forOperation(e, i, s);
  } catch (s) {
    throw ((s == null ? void 0 : s.code) === "auth/user-not-found" && nt(r, "user-mismatch"), s);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Fg(e, t, n = !1) {
  if (yt(e.app)) return Promise.reject(tn(e));
  const r = "signIn",
    i = await Ug(e, r, t),
    s = await yr._fromIdTokenResponse(e, r, i);
  return n || (await e._updateCurrentUser(s.user)), s;
}
async function Z_(e, t) {
  return Fg(kr(e), t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ew(e) {
  const t = kr(e);
  t._getPasswordPolicyInternal() && (await t._updatePasswordPolicy());
}
function tw(e, t, n) {
  return yt(e.app)
    ? Promise.reject(tn(e))
    : Z_(xn(e), Tr.credential(t, n)).catch(async (r) => {
        throw (r.code === "auth/password-does-not-meet-requirements" && ew(e), r);
      });
}
function nw(e, t, n, r) {
  return xn(e).onIdTokenChanged(t, n, r);
}
function rw(e, t, n) {
  return xn(e).beforeAuthStateChanged(t, n);
}
const go = "__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jg {
  constructor(t, n) {
    (this.storageRetriever = t), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(go, "1"), this.storage.removeItem(go), Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(t, n) {
    return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve();
  }
  _get(t) {
    const n = this.storage.getItem(t);
    return Promise.resolve(n ? JSON.parse(n) : null);
  }
  _remove(t) {
    return this.storage.removeItem(t), Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function iw() {
  const e = Se();
  return ac(e) || zo(e);
}
const sw = 1e3,
  ow = 10;
class zg extends jg {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = iw() && C_()),
      (this.fallbackToPolling = Lg()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        i = this.localCache[n];
      r !== i && t(n, i, r);
    }
  }
  onStorageEvent(t, n = !1) {
    if (!t.key) {
      this.forAllChangedKeys((o, l, a) => {
        this.notifyListeners(o, a);
      });
      return;
    }
    const r = t.key;
    if ((n ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced)) {
      const o = this.storage.getItem(r);
      if (t.newValue !== o) t.newValue !== null ? this.storage.setItem(r, t.newValue) : this.storage.removeItem(r);
      else if (this.localCache[r] === t.newValue && !n) return;
    }
    const i = () => {
        const o = this.storage.getItem(r);
        (!n && this.localCache[r] === o) || this.notifyListeners(r, o);
      },
      s = this.storage.getItem(r);
    T_() && s !== t.newValue && t.newValue !== t.oldValue ? setTimeout(i, ow) : i();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(new StorageEvent("storage", { key: t, oldValue: n, newValue: r }), !0);
        });
      }, sw));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[t] || ((this.listeners[t] = new Set()), (this.localCache[t] = this.storage.getItem(t))),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] && (this.listeners[t].delete(n), this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling());
  }
  async _set(t, n) {
    await super._set(t, n), (this.localCache[t] = JSON.stringify(n));
  }
  async _get(t) {
    const n = await super._get(t);
    return (this.localCache[t] = JSON.stringify(n)), n;
  }
  async _remove(t) {
    await super._remove(t), delete this.localCache[t];
  }
}
zg.type = "LOCAL";
const lw = zg;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vg extends jg {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
Vg.type = "SESSION";
const Bg = Vg;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function aw(e) {
  return Promise.all(
    e.map(async (t) => {
      try {
        return { fulfilled: !0, value: await t };
      } catch (n) {
        return { fulfilled: !1, reason: n };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bo {
  constructor(t) {
    (this.eventTarget = t), (this.handlersMap = {}), (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const n = this.receivers.find((i) => i.isListeningto(t));
    if (n) return n;
    const r = new Bo(t);
    return this.receivers.push(r), r;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const n = t,
      { eventId: r, eventType: i, data: s } = n.data,
      o = this.handlersMap[i];
    if (!(o != null && o.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i });
    const l = Array.from(o).map(async (u) => u(n.origin, s)),
      a = await aw(l);
    n.ports[0].postMessage({ status: "done", eventId: r, eventType: i, response: a });
  }
  _subscribe(t, n) {
    Object.keys(this.handlersMap).length === 0 && this.eventTarget.addEventListener("message", this.boundEventHandler),
      this.handlersMap[t] || (this.handlersMap[t] = new Set()),
      this.handlersMap[t].add(n);
  }
  _unsubscribe(t, n) {
    this.handlersMap[t] && n && this.handlersMap[t].delete(n),
      (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener("message", this.boundEventHandler);
  }
}
Bo.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function hc(e = "", t = 10) {
  let n = "";
  for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10);
  return e + n;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uw {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage), t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, n, r = 50) {
    const i = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!i) throw new Error("connection_unavailable");
    let s, o;
    return new Promise((l, a) => {
      const u = hc("", 20);
      i.port1.start();
      const d = setTimeout(() => {
        a(new Error("unsupported_event"));
      }, r);
      (o = {
        messageChannel: i,
        onMessage(p) {
          const g = p;
          if (g.data.eventId === u)
            switch (g.data.status) {
              case "ack":
                clearTimeout(d),
                  (s = setTimeout(() => {
                    a(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(s), l(g.data.response);
                break;
              default:
                clearTimeout(d), clearTimeout(s), a(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(o),
        i.port1.addEventListener("message", o.onMessage),
        this.target.postMessage({ eventType: t, eventId: u, data: n }, [i.port2]);
    }).finally(() => {
      o && this.removeMessageHandler(o);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function dt() {
  return window;
}
function cw(e) {
  dt().location.href = e;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Hg() {
  return typeof dt().WorkerGlobalScope < "u" && typeof dt().importScripts == "function";
}
async function hw() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function dw() {
  var e;
  return (
    ((e = navigator == null ? void 0 : navigator.serviceWorker) === null || e === void 0 ? void 0 : e.controller) ||
    null
  );
}
function fw() {
  return Hg() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wg = "firebaseLocalStorageDb",
  pw = 1,
  mo = "firebaseLocalStorage",
  Kg = "fbase_key";
class Wi {
  constructor(t) {
    this.request = t;
  }
  toPromise() {
    return new Promise((t, n) => {
      this.request.addEventListener("success", () => {
        t(this.request.result);
      }),
        this.request.addEventListener("error", () => {
          n(this.request.error);
        });
    });
  }
}
function Ho(e, t) {
  return e.transaction([mo], t ? "readwrite" : "readonly").objectStore(mo);
}
function gw() {
  const e = indexedDB.deleteDatabase(Wg);
  return new Wi(e).toPromise();
}
function Qa() {
  const e = indexedDB.open(Wg, pw);
  return new Promise((t, n) => {
    e.addEventListener("error", () => {
      n(e.error);
    }),
      e.addEventListener("upgradeneeded", () => {
        const r = e.result;
        try {
          r.createObjectStore(mo, { keyPath: Kg });
        } catch (i) {
          n(i);
        }
      }),
      e.addEventListener("success", async () => {
        const r = e.result;
        r.objectStoreNames.contains(mo) ? t(r) : (r.close(), await gw(), t(await Qa()));
      });
  });
}
async function vd(e, t, n) {
  const r = Ho(e, !0).put({ [Kg]: t, value: n });
  return new Wi(r).toPromise();
}
async function mw(e, t) {
  const n = Ho(e, !1).get(t),
    r = await new Wi(n).toPromise();
  return r === void 0 ? null : r.value;
}
function yd(e, t) {
  const n = Ho(e, !0).delete(t);
  return new Wi(n).toPromise();
}
const vw = 800,
  yw = 3;
class Gg {
  constructor() {
    (this.type = "LOCAL"),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(
        () => {},
        () => {}
      ));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Qa()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > yw) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Hg() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Bo._getInstance(fw())),
      this.receiver._subscribe("keyChanged", async (t, n) => ({ keyProcessed: (await this._poll()).includes(n.key) })),
      this.receiver._subscribe("ping", async (t, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, n;
    if (((this.activeServiceWorker = await hw()), !this.activeServiceWorker)) return;
    this.sender = new uw(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((t = r[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (!(!this.sender || !this.activeServiceWorker || dw() !== this.activeServiceWorker))
      try {
        await this.sender._send("keyChanged", { key: t }, this.serviceWorkerReceiverAvailable ? 800 : 50);
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await Qa();
      return await vd(t, go, "1"), await yd(t, go), !0;
    } catch {}
    return !1;
  }
  async _withPendingWrite(t) {
    this.pendingWrites++;
    try {
      await t();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(t, n) {
    return this._withPendingWrite(
      async () => (await this._withRetries((r) => vd(r, t, n)), (this.localCache[t] = n), this.notifyServiceWorker(t))
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => mw(r, t));
    return (this.localCache[t] = n), n;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (await this._withRetries((n) => yd(n, t)), delete this.localCache[t], this.notifyServiceWorker(t))
    );
  }
  async _poll() {
    const t = await this._withRetries((i) => {
      const s = Ho(i, !1).getAll();
      return new Wi(s).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    if (t.length !== 0)
      for (const { fbase_key: i, value: s } of t)
        r.add(i), JSON.stringify(this.localCache[i]) !== JSON.stringify(s) && (this.notifyListeners(i, s), n.push(i));
    for (const i of Object.keys(this.localCache))
      this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), n.push(i));
    return n;
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const i of Array.from(r)) i(n);
  }
  startPolling() {
    this.stopPolling(), (this.pollTimer = setInterval(async () => this._poll(), vw));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(t, n) {
    Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
      this.listeners[t].add(n);
  }
  _removeListener(t, n) {
    this.listeners[t] && (this.listeners[t].delete(n), this.listeners[t].size === 0 && delete this.listeners[t]),
      Object.keys(this.listeners).length === 0 && this.stopPolling();
  }
}
Gg.type = "LOCAL";
const _w = Gg;
new Bi(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ww(e, t) {
  return t ? Et(t) : (A(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dc extends uc {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return or(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return or(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return or(t, this._buildIdpRequest());
  }
  _buildIdpRequest(t) {
    const n = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return t && (n.idToken = t), n;
  }
}
function Ew(e) {
  return Fg(e.auth, new dc(e), e.bypassAuthState);
}
function Sw(e) {
  const { auth: t, user: n } = e;
  return A(n, t, "internal-error"), b_(n, new dc(e), e.bypassAuthState);
}
async function Iw(e) {
  const { auth: t, user: n } = e;
  return A(n, t, "internal-error"), J_(n, new dc(e), e.bypassAuthState);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xg {
  constructor(t, n, r, i, s = !1) {
    (this.auth = t),
      (this.resolver = r),
      (this.user = i),
      (this.bypassAuthState = s),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(n) ? n : [n]);
  }
  execute() {
    return new Promise(async (t, n) => {
      this.pendingPromise = { resolve: t, reject: n };
      try {
        (this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this);
      } catch (r) {
        this.reject(r);
      }
    });
  }
  async onAuthEvent(t) {
    const { urlResponse: n, sessionId: r, postBody: i, tenantId: s, error: o, type: l } = t;
    if (o) {
      this.reject(o);
      return;
    }
    const a = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: s || void 0,
      postBody: i || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(l)(a));
    } catch (u) {
      this.reject(u);
    }
  }
  onError(t) {
    this.reject(t);
  }
  getIdpTask(t) {
    switch (t) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return Ew;
      case "linkViaPopup":
      case "linkViaRedirect":
        return Iw;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return Sw;
      default:
        nt(this.auth, "internal-error");
    }
  }
  resolve(t) {
    At(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    At(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.reject(t),
      this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    this.eventManager && this.eventManager.unregisterConsumer(this), (this.pendingPromise = null), this.cleanUp();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const kw = new Bi(2e3, 1e4);
class qn extends Xg {
  constructor(t, n, r, i, s) {
    super(t, n, i, s),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      qn.currentPopupAction && qn.currentPopupAction.cancel(),
      (qn.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return A(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    At(this.filter.length === 1, "Popup operations only handle one event");
    const t = hc();
    (this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], t)),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(ht(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return ((t = this.authWindow) === null || t === void 0 ? void 0 : t.associatedEvent) || null;
  }
  cancel() {
    this.reject(ht(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (qn.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var n, r;
      if (
        !((r = (n = this.authWindow) === null || n === void 0 ? void 0 : n.window) === null || r === void 0) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null), this.reject(ht(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, kw.get());
    };
    t();
  }
}
qn.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Tw = "pendingRedirect",
  $s = new Map();
class Cw extends Xg {
  constructor(t, n, r = !1) {
    super(t, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], n, void 0, r),
      (this.eventId = null);
  }
  async execute() {
    let t = $s.get(this.auth._key());
    if (!t) {
      try {
        const r = (await Pw(this.resolver, this.auth)) ? await super.execute() : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      $s.set(this.auth._key(), t);
    }
    return this.bypassAuthState || $s.set(this.auth._key(), () => Promise.resolve(null)), t();
  }
  async onAuthEvent(t) {
    if (t.type === "signInViaRedirect") return super.onAuthEvent(t);
    if (t.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (t.eventId) {
      const n = await this.auth._redirectUserForId(t.eventId);
      if (n) return (this.user = n), super.onAuthEvent(t);
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function Pw(e, t) {
  const n = Nw(t),
    r = Rw(e);
  if (!(await r._isAvailable())) return !1;
  const i = (await r._get(n)) === "true";
  return await r._remove(n), i;
}
function Aw(e, t) {
  $s.set(e._key(), t);
}
function Rw(e) {
  return Et(e._redirectPersistence);
}
function Nw(e) {
  return Ms(Tw, e.config.apiKey, e.name);
}
async function Ow(e, t, n = !1) {
  if (yt(e.app)) return Promise.reject(tn(e));
  const r = kr(e),
    i = ww(r, t),
    o = await new Cw(r, i, n).execute();
  return (
    o &&
      !n &&
      (delete o.user._redirectEventId, await r._persistUserIfCurrent(o.user), await r._setRedirectUser(null, t)),
    o
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Lw = 10 * 60 * 1e3;
class Dw {
  constructor(t) {
    (this.auth = t),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now());
  }
  registerConsumer(t) {
    this.consumers.add(t),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, t) &&
        (this.sendToConsumer(this.queuedRedirectEvent, t),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null));
  }
  unregisterConsumer(t) {
    this.consumers.delete(t);
  }
  onEvent(t) {
    if (this.hasEventBeenHandled(t)) return !1;
    let n = !1;
    return (
      this.consumers.forEach((r) => {
        this.isEventForConsumer(t, r) && ((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t));
      }),
      this.hasHandledPotentialRedirect ||
        !xw(t) ||
        ((this.hasHandledPotentialRedirect = !0), n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    var r;
    if (t.error && !Qg(t)) {
      const i = ((r = t.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
      n.onError(ht(this.auth, i));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= Lw && this.cachedEventUids.clear(), this.cachedEventUids.has(_d(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(_d(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function _d(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter((t) => t).join("-");
}
function Qg({ type: e, error: t }) {
  return e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event";
}
function xw(e) {
  switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Qg(e);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Mw(e, t = {}) {
  return an(e, "GET", "/v1/projects", t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const $w = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  Uw = /^https?/;
async function Fw(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await Mw(e);
  for (const n of t)
    try {
      if (jw(n)) return;
    } catch {}
  nt(e, "unauthorized-domain");
}
function jw(e) {
  const t = Ga(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith("chrome-extension://")) {
    const o = new URL(e);
    return o.hostname === "" && r === ""
      ? n === "chrome-extension:" && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "")
      : n === "chrome-extension:" && o.hostname === r;
  }
  if (!Uw.test(n)) return !1;
  if ($w.test(e)) return r === e;
  const i = e.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + i + "|" + i + ")$", "i").test(r);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zw = new Bi(3e4, 6e4);
function wd() {
  const e = dt().___jsl;
  if (e != null && e.H) {
    for (const t of Object.keys(e.H))
      if (((e.H[t].r = e.H[t].r || []), (e.H[t].L = e.H[t].L || []), (e.H[t].r = [...e.H[t].L]), e.CP))
        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
}
function Vw(e) {
  return new Promise((t, n) => {
    var r, i, s;
    function o() {
      wd(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            wd(), n(ht(e, "network-request-failed"));
          },
          timeout: zw.get(),
        });
    }
    if (!((i = (r = dt().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || i === void 0) && i.Iframe)
      t(gapi.iframes.getContext());
    else if (!((s = dt().gapi) === null || s === void 0) && s.load) o();
    else {
      const l = M_("iframefcb");
      return (
        (dt()[l] = () => {
          gapi.load ? o() : n(ht(e, "network-request-failed"));
        }),
        xg(`${x_()}?onload=${l}`).catch((a) => n(a))
      );
    }
  }).catch((t) => {
    throw ((Us = null), t);
  });
}
let Us = null;
function Bw(e) {
  return (Us = Us || Vw(e)), Us;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Hw = new Bi(5e3, 15e3),
  Ww = "__/auth/iframe",
  Kw = "emulator/auth/iframe",
  Gw = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  Xw = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function Qw(e) {
  const t = e.config;
  A(t.authDomain, e, "auth-domain-config-required");
  const n = t.emulator ? oc(t, Kw) : `https://${e.config.authDomain}/${Ww}`,
    r = { apiKey: t.apiKey, appName: e.name, v: Ir },
    i = Xw.get(e.config.apiHost);
  i && (r.eid = i);
  const s = e._getFrameworks();
  return s.length && (r.fw = s.join(",")), `${n}?${Vi(r).slice(1)}`;
}
async function Yw(e) {
  const t = await Bw(e),
    n = dt().gapi;
  return (
    A(n, e, "internal-error"),
    t.open(
      {
        where: document.body,
        url: Qw(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: Gw,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (i, s) => {
          await r.restyle({ setHideOnLeave: !1 });
          const o = ht(e, "network-request-failed"),
            l = dt().setTimeout(() => {
              s(o);
            }, Hw.get());
          function a() {
            dt().clearTimeout(l), i(r);
          }
          r.ping(a).then(a, () => {
            s(o);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const qw = { location: "yes", resizable: "yes", statusbar: "yes", toolbar: "no" },
  Jw = 500,
  bw = 600,
  Zw = "_blank",
  eE = "http://localhost";
class Ed {
  constructor(t) {
    (this.window = t), (this.associatedEvent = null);
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function tE(e, t, n, r = Jw, i = bw) {
  const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
    o = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let l = "";
  const a = Object.assign(Object.assign({}, qw), { width: r.toString(), height: i.toString(), top: s, left: o }),
    u = Se().toLowerCase();
  n && (l = Pg(u) ? Zw : n), Cg(u) && ((t = t || eE), (a.scrollbars = "yes"));
  const d = Object.entries(a).reduce((g, [y, _]) => `${g}${y}=${_},`, "");
  if (k_(u) && l !== "_self") return nE(t || "", l), new Ed(null);
  const p = window.open(t || "", l, d);
  A(p, e, "popup-blocked");
  try {
    p.focus();
  } catch {}
  return new Ed(p);
}
function nE(e, t) {
  const n = document.createElement("a");
  (n.href = e), (n.target = t);
  const r = document.createEvent("MouseEvent");
  r.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), n.dispatchEvent(r);
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rE = "__/auth/handler",
  iE = "emulator/auth/handler",
  sE = encodeURIComponent("fac");
async function Sd(e, t, n, r, i, s) {
  A(e.config.authDomain, e, "auth-domain-config-required"), A(e.config.apiKey, e, "invalid-api-key");
  const o = { apiKey: e.config.apiKey, appName: e.name, authType: n, redirectUrl: r, v: Ir, eventId: i };
  if (t instanceof $g) {
    t.setDefaultLanguage(e.languageCode),
      (o.providerId = t.providerId || ""),
      q0(t.getCustomParameters()) || (o.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [d, p] of Object.entries({})) o[d] = p;
  }
  if (t instanceof Hi) {
    const d = t.getScopes().filter((p) => p !== "");
    d.length > 0 && (o.scopes = d.join(","));
  }
  e.tenantId && (o.tid = e.tenantId);
  const l = o;
  for (const d of Object.keys(l)) l[d] === void 0 && delete l[d];
  const a = await e._getAppCheckToken(),
    u = a ? `#${sE}=${encodeURIComponent(a)}` : "";
  return `${oE(e)}?${Vi(l).slice(1)}${u}`;
}
function oE({ config: e }) {
  return e.emulator ? oc(e, iE) : `https://${e.authDomain}/${rE}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Vl = "webStorageSupport";
class lE {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Bg),
      (this._completeRedirectFn = Ow),
      (this._overrideRedirectResult = Aw);
  }
  async _openPopup(t, n, r, i) {
    var s;
    At(
      (s = this.eventManagers[t._key()]) === null || s === void 0 ? void 0 : s.manager,
      "_initialize() not called before _openPopup()"
    );
    const o = await Sd(t, n, r, Ga(), i);
    return tE(t, o, hc());
  }
  async _openRedirect(t, n, r, i) {
    await this._originValidation(t);
    const s = await Sd(t, n, r, Ga(), i);
    return cw(s), new Promise(() => {});
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: i, promise: s } = this.eventManagers[n];
      return i ? Promise.resolve(i) : (At(s, "If manager is not set, promise should be"), s);
    }
    const r = this.initAndGetManager(t);
    return (
      (this.eventManagers[n] = { promise: r }),
      r.catch(() => {
        delete this.eventManagers[n];
      }),
      r
    );
  }
  async initAndGetManager(t) {
    const n = await Yw(t),
      r = new Dw(t);
    return (
      n.register(
        "authEvent",
        (i) => (
          A(i == null ? void 0 : i.authEvent, t, "invalid-auth-event"),
          { status: r.onEvent(i.authEvent) ? "ACK" : "ERROR" }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[t._key()] = { manager: r }),
      (this.iframes[t._key()] = n),
      r
    );
  }
  _isIframeWebStorageSupported(t, n) {
    this.iframes[t._key()].send(
      Vl,
      { type: Vl },
      (i) => {
        var s;
        const o = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[Vl];
        o !== void 0 && n(!!o), nt(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] || (this.originValidationPromises[n] = Fw(t)), this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return Lg() || ac() || zo();
  }
}
const aE = lE;
var Id = "@firebase/auth",
  kd = "1.7.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uE {
  constructor(t) {
    (this.auth = t), (this.internalListeners = new Map());
  }
  getUid() {
    var t;
    return this.assertAuthConfigured(), ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) || null;
  }
  async getToken(t) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(t) } : null
    );
  }
  addAuthTokenListener(t) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
    const n = this.auth.onIdTokenChanged((r) => {
      t((r == null ? void 0 : r.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(t, n), this.updateProactiveRefresh();
  }
  removeAuthTokenListener(t) {
    this.assertAuthConfigured();
    const n = this.internalListeners.get(t);
    n && (this.internalListeners.delete(t), n(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    A(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0 ? this.auth._startProactiveRefresh() : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function cE(e) {
  switch (e) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return;
  }
}
function hE(e) {
  vr(
    new Rn(
      "auth",
      (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate(),
          i = t.getProvider("heartbeat"),
          s = t.getProvider("app-check-internal"),
          { apiKey: o, authDomain: l } = r.options;
        A(o && !o.includes(":"), "invalid-api-key", { appName: r.name });
        const a = {
            apiKey: o,
            authDomain: l,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: Dg(e),
          },
          u = new O_(r, i, s, a);
        return z_(u, n), u;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    vr(
      new Rn(
        "auth-internal",
        (t) => {
          const n = kr(t.getProvider("auth").getImmediate());
          return ((r) => new uE(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    en(Id, kd, cE(e)),
    en(Id, kd, "esm2017");
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dE = 5 * 60,
  fE = cg("authIdTokenMaxAge") || dE;
let Td = null;
const pE = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > fE) return;
  const i = n == null ? void 0 : n.token;
  Td !== i &&
    ((Td = i), await fetch(e, { method: i ? "POST" : "DELETE", headers: i ? { Authorization: `Bearer ${i}` } : {} }));
};
function gE(e = pg()) {
  const t = rc(e, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const n = j_(e, { popupRedirectResolver: aE, persistence: [_w, lw, Bg] }),
    r = cg("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const s = new URL(r, location.origin);
    if (location.origin === s.origin) {
      const o = pE(s.toString());
      rw(n, o, () => o(n.currentUser)), nw(n, (l) => o(l));
    }
  }
  const i = ag("auth");
  return i && V_(n, `http://${i}`), n;
}
function mE() {
  var e, t;
  return (t = (e = document.getElementsByTagName("head")) === null || e === void 0 ? void 0 : e[0]) !== null &&
    t !== void 0
    ? t
    : document;
}
L_({
  loadJS(e) {
    return new Promise((t, n) => {
      const r = document.createElement("script");
      r.setAttribute("src", e),
        (r.onload = t),
        (r.onerror = (i) => {
          const s = ht("internal-error");
          (s.customData = i), n(s);
        }),
        (r.type = "text/javascript"),
        (r.charset = "UTF-8"),
        mE().appendChild(r);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render=",
});
hE("Browser");
var vE = "firebase",
  yE = "10.11.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ en(vE, yE, "app");
var _E =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  E,
  fc = fc || {},
  R = _E || self;
function Wo(e) {
  var t = typeof e;
  return (
    (t = t != "object" ? t : e ? (Array.isArray(e) ? "array" : t) : "null"),
    t == "array" || (t == "object" && typeof e.length == "number")
  );
}
function Ko(e) {
  var t = typeof e;
  return (t == "object" && e != null) || t == "function";
}
function wE(e) {
  return (Object.prototype.hasOwnProperty.call(e, Bl) && e[Bl]) || (e[Bl] = ++EE);
}
var Bl = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  EE = 0;
function SE(e, t, n) {
  return e.call.apply(e.bind, arguments);
}
function IE(e, t, n) {
  if (!e) throw Error();
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function () {
      var i = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(i, r), e.apply(t, i);
    };
  }
  return function () {
    return e.apply(t, arguments);
  };
}
function _e(e, t, n) {
  return (
    Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? (_e = SE) : (_e = IE),
    _e.apply(null, arguments)
  );
}
function ys(e, t) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var r = n.slice();
    return r.push.apply(r, arguments), e.apply(this, r);
  };
}
function le(e, t) {
  function n() {}
  (n.prototype = t.prototype),
    (e.$ = t.prototype),
    (e.prototype = new n()),
    (e.prototype.constructor = e),
    (e.ac = function (r, i, s) {
      for (var o = Array(arguments.length - 2), l = 2; l < arguments.length; l++) o[l - 2] = arguments[l];
      return t.prototype[i].apply(r, o);
    });
}
function un() {
  (this.s = this.s), (this.o = this.o);
}
var kE = 0;
un.prototype.s = !1;
un.prototype.sa = function () {
  !this.s && ((this.s = !0), this.N(), kE != 0) && wE(this);
};
un.prototype.N = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const Yg = Array.prototype.indexOf
  ? function (e, t) {
      return Array.prototype.indexOf.call(e, t, void 0);
    }
  : function (e, t) {
      if (typeof e == "string") return typeof t != "string" || t.length != 1 ? -1 : e.indexOf(t, 0);
      for (let n = 0; n < e.length; n++) if (n in e && e[n] === t) return n;
      return -1;
    };
function pc(e) {
  const t = e.length;
  if (0 < t) {
    const n = Array(t);
    for (let r = 0; r < t; r++) n[r] = e[r];
    return n;
  }
  return [];
}
function Cd(e, t) {
  for (let n = 1; n < arguments.length; n++) {
    const r = arguments[n];
    if (Wo(r)) {
      const i = e.length || 0,
        s = r.length || 0;
      e.length = i + s;
      for (let o = 0; o < s; o++) e[i + o] = r[o];
    } else e.push(r);
  }
}
function we(e, t) {
  (this.type = e), (this.g = this.target = t), (this.defaultPrevented = !1);
}
we.prototype.h = function () {
  this.defaultPrevented = !0;
};
var TE = (function () {
  if (!R.addEventListener || !Object.defineProperty) return !1;
  var e = !1,
    t = Object.defineProperty({}, "passive", {
      get: function () {
        e = !0;
      },
    });
  try {
    const n = () => {};
    R.addEventListener("test", n, t), R.removeEventListener("test", n, t);
  } catch {}
  return e;
})();
function Ci(e) {
  return /^[\s\xa0]*$/.test(e);
}
function Go() {
  var e = R.navigator;
  return e && (e = e.userAgent) ? e : "";
}
function ot(e) {
  return Go().indexOf(e) != -1;
}
function gc(e) {
  return gc[" "](e), e;
}
gc[" "] = function () {};
function CE(e, t) {
  var n = wS;
  return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : (n[e] = t(e));
}
var PE = ot("Opera"),
  Pi = ot("Trident") || ot("MSIE"),
  qg = ot("Edge"),
  Ya = qg || Pi,
  Jg =
    ot("Gecko") &&
    !(Go().toLowerCase().indexOf("webkit") != -1 && !ot("Edge")) &&
    !(ot("Trident") || ot("MSIE")) &&
    !ot("Edge"),
  AE = Go().toLowerCase().indexOf("webkit") != -1 && !ot("Edge");
function bg() {
  var e = R.document;
  return e ? e.documentMode : void 0;
}
e: {
  var Pd = "",
    Hl = (function () {
      var e = Go();
      if (Jg) return /rv:([^\);]+)(\)|;)/.exec(e);
      if (qg) return /Edge\/([\d\.]+)/.exec(e);
      if (Pi) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);
      if (AE) return /WebKit\/(\S+)/.exec(e);
      if (PE) return /(?:Version)[ \/]?(\S+)/.exec(e);
    })();
  if ((Hl && (Pd = Hl ? Hl[1] : ""), Pi)) {
    var Ad = bg();
    if (Ad != null && Ad > parseFloat(Pd)) break e;
  }
}
R.document && Pi && bg();
function Ai(e, t) {
  if (
    (we.call(this, e ? e.type : ""),
    (this.relatedTarget = this.g = this.target = null),
    (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
    (this.key = ""),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.state = null),
    (this.pointerId = 0),
    (this.pointerType = ""),
    (this.i = null),
    e)
  ) {
    var n = (this.type = e.type),
      r = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
    if (((this.target = e.target || e.srcElement), (this.g = t), (t = e.relatedTarget))) {
      if (Jg) {
        e: {
          try {
            gc(t.nodeName);
            var i = !0;
            break e;
          } catch {}
          i = !1;
        }
        i || (t = null);
      }
    } else n == "mouseover" ? (t = e.fromElement) : n == "mouseout" && (t = e.toElement);
    (this.relatedTarget = t),
      r
        ? ((this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX),
          (this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY),
          (this.screenX = r.screenX || 0),
          (this.screenY = r.screenY || 0))
        : ((this.clientX = e.clientX !== void 0 ? e.clientX : e.pageX),
          (this.clientY = e.clientY !== void 0 ? e.clientY : e.pageY),
          (this.screenX = e.screenX || 0),
          (this.screenY = e.screenY || 0)),
      (this.button = e.button),
      (this.key = e.key || ""),
      (this.ctrlKey = e.ctrlKey),
      (this.altKey = e.altKey),
      (this.shiftKey = e.shiftKey),
      (this.metaKey = e.metaKey),
      (this.pointerId = e.pointerId || 0),
      (this.pointerType = typeof e.pointerType == "string" ? e.pointerType : RE[e.pointerType] || ""),
      (this.state = e.state),
      (this.i = e),
      e.defaultPrevented && Ai.$.h.call(this);
  }
}
le(Ai, we);
var RE = { 2: "touch", 3: "pen", 4: "mouse" };
Ai.prototype.h = function () {
  Ai.$.h.call(this);
  var e = this.i;
  e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
};
var Xo = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  NE = 0;
function OE(e, t, n, r, i) {
  (this.listener = e),
    (this.proxy = null),
    (this.src = t),
    (this.type = n),
    (this.capture = !!r),
    (this.la = i),
    (this.key = ++NE),
    (this.fa = this.ia = !1);
}
function Qo(e) {
  (e.fa = !0), (e.listener = null), (e.proxy = null), (e.src = null), (e.la = null);
}
function mc(e, t, n) {
  for (const r in e) t.call(n, e[r], r, e);
}
function LE(e, t) {
  for (const n in e) t.call(void 0, e[n], n, e);
}
function Zg(e) {
  const t = {};
  for (const n in e) t[n] = e[n];
  return t;
}
const Rd = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function em(e, t) {
  let n, r;
  for (let i = 1; i < arguments.length; i++) {
    r = arguments[i];
    for (n in r) e[n] = r[n];
    for (let s = 0; s < Rd.length; s++) (n = Rd[s]), Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  }
}
function Yo(e) {
  (this.src = e), (this.g = {}), (this.h = 0);
}
Yo.prototype.add = function (e, t, n, r, i) {
  var s = e.toString();
  (e = this.g[s]), e || ((e = this.g[s] = []), this.h++);
  var o = Ja(e, t, r, i);
  return -1 < o ? ((t = e[o]), n || (t.ia = !1)) : ((t = new OE(t, this.src, s, !!r, i)), (t.ia = n), e.push(t)), t;
};
function qa(e, t) {
  var n = t.type;
  if (n in e.g) {
    var r = e.g[n],
      i = Yg(r, t),
      s;
    (s = 0 <= i) && Array.prototype.splice.call(r, i, 1), s && (Qo(t), e.g[n].length == 0 && (delete e.g[n], e.h--));
  }
}
function Ja(e, t, n, r) {
  for (var i = 0; i < e.length; ++i) {
    var s = e[i];
    if (!s.fa && s.listener == t && s.capture == !!n && s.la == r) return i;
  }
  return -1;
}
var vc = "closure_lm_" + ((1e6 * Math.random()) | 0),
  Wl = {};
function tm(e, t, n, r, i) {
  if (Array.isArray(t)) {
    for (var s = 0; s < t.length; s++) tm(e, t[s], n, r, i);
    return null;
  }
  return (n = im(n)), e && e[Xo] ? e.O(t, n, Ko(r) ? !!r.capture : !!r, i) : DE(e, t, n, !1, r, i);
}
function DE(e, t, n, r, i, s) {
  if (!t) throw Error("Invalid event type");
  var o = Ko(i) ? !!i.capture : !!i,
    l = _c(e);
  if ((l || (e[vc] = l = new Yo(e)), (n = l.add(t, n, r, o, s)), n.proxy)) return n;
  if (((r = xE()), (n.proxy = r), (r.src = e), (r.listener = n), e.addEventListener))
    TE || (i = o), i === void 0 && (i = !1), e.addEventListener(t.toString(), r, i);
  else if (e.attachEvent) e.attachEvent(rm(t.toString()), r);
  else if (e.addListener && e.removeListener) e.addListener(r);
  else throw Error("addEventListener and attachEvent are unavailable.");
  return n;
}
function xE() {
  function e(n) {
    return t.call(e.src, e.listener, n);
  }
  const t = ME;
  return e;
}
function nm(e, t, n, r, i) {
  if (Array.isArray(t)) for (var s = 0; s < t.length; s++) nm(e, t[s], n, r, i);
  else
    (r = Ko(r) ? !!r.capture : !!r),
      (n = im(n)),
      e && e[Xo]
        ? ((e = e.i),
          (t = String(t).toString()),
          t in e.g &&
            ((s = e.g[t]),
            (n = Ja(s, n, r, i)),
            -1 < n && (Qo(s[n]), Array.prototype.splice.call(s, n, 1), s.length == 0 && (delete e.g[t], e.h--))))
        : e &&
          (e = _c(e)) &&
          ((t = e.g[t.toString()]), (e = -1), t && (e = Ja(t, n, r, i)), (n = -1 < e ? t[e] : null) && yc(n));
}
function yc(e) {
  if (typeof e != "number" && e && !e.fa) {
    var t = e.src;
    if (t && t[Xo]) qa(t.i, e);
    else {
      var n = e.type,
        r = e.proxy;
      t.removeEventListener
        ? t.removeEventListener(n, r, e.capture)
        : t.detachEvent
        ? t.detachEvent(rm(n), r)
        : t.addListener && t.removeListener && t.removeListener(r),
        (n = _c(t)) ? (qa(n, e), n.h == 0 && ((n.src = null), (t[vc] = null))) : Qo(e);
    }
  }
}
function rm(e) {
  return e in Wl ? Wl[e] : (Wl[e] = "on" + e);
}
function ME(e, t) {
  if (e.fa) e = !0;
  else {
    t = new Ai(t, this);
    var n = e.listener,
      r = e.la || e.src;
    e.ia && yc(e), (e = n.call(r, t));
  }
  return e;
}
function _c(e) {
  return (e = e[vc]), e instanceof Yo ? e : null;
}
var Kl = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function im(e) {
  return typeof e == "function"
    ? e
    : (e[Kl] ||
        (e[Kl] = function (t) {
          return e.handleEvent(t);
        }),
      e[Kl]);
}
function oe() {
  un.call(this), (this.i = new Yo(this)), (this.S = this), (this.J = null);
}
le(oe, un);
oe.prototype[Xo] = !0;
oe.prototype.removeEventListener = function (e, t, n, r) {
  nm(this, e, t, n, r);
};
function he(e, t) {
  var n,
    r = e.J;
  if (r) for (n = []; r; r = r.J) n.push(r);
  if (((e = e.S), (r = t.type || t), typeof t == "string")) t = new we(t, e);
  else if (t instanceof we) t.target = t.target || e;
  else {
    var i = t;
    (t = new we(r, e)), em(t, i);
  }
  if (((i = !0), n))
    for (var s = n.length - 1; 0 <= s; s--) {
      var o = (t.g = n[s]);
      i = _s(o, r, !0, t) && i;
    }
  if (((o = t.g = e), (i = _s(o, r, !0, t) && i), (i = _s(o, r, !1, t) && i), n))
    for (s = 0; s < n.length; s++) (o = t.g = n[s]), (i = _s(o, r, !1, t) && i);
}
oe.prototype.N = function () {
  if ((oe.$.N.call(this), this.i)) {
    var e = this.i,
      t;
    for (t in e.g) {
      for (var n = e.g[t], r = 0; r < n.length; r++) Qo(n[r]);
      delete e.g[t], e.h--;
    }
  }
  this.J = null;
};
oe.prototype.O = function (e, t, n, r) {
  return this.i.add(String(e), t, !1, n, r);
};
oe.prototype.P = function (e, t, n, r) {
  return this.i.add(String(e), t, !0, n, r);
};
function _s(e, t, n, r) {
  if (((t = e.i.g[String(t)]), !t)) return !0;
  t = t.concat();
  for (var i = !0, s = 0; s < t.length; ++s) {
    var o = t[s];
    if (o && !o.fa && o.capture == n) {
      var l = o.listener,
        a = o.la || o.src;
      o.ia && qa(e.i, o), (i = l.call(a, r) !== !1 && i);
    }
  }
  return i && !r.defaultPrevented;
}
var wc = R.JSON.stringify;
class $E {
  constructor(t, n) {
    (this.i = t), (this.j = n), (this.h = 0), (this.g = null);
  }
  get() {
    let t;
    return 0 < this.h ? (this.h--, (t = this.g), (this.g = t.next), (t.next = null)) : (t = this.i()), t;
  }
}
function UE() {
  var e = Ec;
  let t = null;
  return e.g && ((t = e.g), (e.g = e.g.next), e.g || (e.h = null), (t.next = null)), t;
}
class FE {
  constructor() {
    this.h = this.g = null;
  }
  add(t, n) {
    const r = sm.get();
    r.set(t, n), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
  }
}
var sm = new $E(
  () => new jE(),
  (e) => e.reset()
);
class jE {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(t, n) {
    (this.h = t), (this.g = n), (this.next = null);
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function zE(e) {
  var t = 1;
  e = e.split(":");
  const n = [];
  for (; 0 < t && e.length; ) n.push(e.shift()), t--;
  return e.length && n.push(e.join(":")), n;
}
function VE(e) {
  R.setTimeout(() => {
    throw e;
  }, 0);
}
let Ri,
  Ni = !1,
  Ec = new FE(),
  om = () => {
    const e = R.Promise.resolve(void 0);
    Ri = () => {
      e.then(BE);
    };
  };
var BE = () => {
  for (var e; (e = UE()); ) {
    try {
      e.h.call(e.g);
    } catch (n) {
      VE(n);
    }
    var t = sm;
    t.j(e), 100 > t.h && (t.h++, (e.next = t.g), (t.g = e));
  }
  Ni = !1;
};
function qo(e, t) {
  oe.call(this), (this.h = e || 1), (this.g = t || R), (this.j = _e(this.qb, this)), (this.l = Date.now());
}
le(qo, oe);
E = qo.prototype;
E.ga = !1;
E.T = null;
E.qb = function () {
  if (this.ga) {
    var e = Date.now() - this.l;
    0 < e && e < 0.8 * this.h
      ? (this.T = this.g.setTimeout(this.j, this.h - e))
      : (this.T && (this.g.clearTimeout(this.T), (this.T = null)),
        he(this, "tick"),
        this.ga && (Sc(this), this.start()));
  }
};
E.start = function () {
  (this.ga = !0), this.T || ((this.T = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function Sc(e) {
  (e.ga = !1), e.T && (e.g.clearTimeout(e.T), (e.T = null));
}
E.N = function () {
  qo.$.N.call(this), Sc(this), delete this.g;
};
function Ic(e, t, n) {
  if (typeof e == "function") n && (e = _e(e, n));
  else if (e && typeof e.handleEvent == "function") e = _e(e.handleEvent, e);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(t) ? -1 : R.setTimeout(e, t || 0);
}
function lm(e) {
  e.g = Ic(() => {
    (e.g = null), e.i && ((e.i = !1), lm(e));
  }, e.j);
  const t = e.h;
  (e.h = null), e.m.apply(null, t);
}
class HE extends un {
  constructor(t, n) {
    super(), (this.m = t), (this.j = n), (this.h = null), (this.i = !1), (this.g = null);
  }
  l(t) {
    (this.h = arguments), this.g ? (this.i = !0) : lm(this);
  }
  N() {
    super.N(), this.g && (R.clearTimeout(this.g), (this.g = null), (this.i = !1), (this.h = null));
  }
}
function Oi(e) {
  un.call(this), (this.h = e), (this.g = {});
}
le(Oi, un);
var Nd = [];
function am(e, t, n, r) {
  Array.isArray(n) || (n && (Nd[0] = n.toString()), (n = Nd));
  for (var i = 0; i < n.length; i++) {
    var s = tm(t, n[i], r || e.handleEvent, !1, e.h || e);
    if (!s) break;
    e.g[s.key] = s;
  }
}
function um(e) {
  mc(
    e.g,
    function (t, n) {
      this.g.hasOwnProperty(n) && yc(t);
    },
    e
  ),
    (e.g = {});
}
Oi.prototype.N = function () {
  Oi.$.N.call(this), um(this);
};
Oi.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
function Jo() {
  this.g = !0;
}
Jo.prototype.Ea = function () {
  this.g = !1;
};
function WE(e, t, n, r, i, s) {
  e.info(function () {
    if (e.g)
      if (s)
        for (var o = "", l = s.split("&"), a = 0; a < l.length; a++) {
          var u = l[a].split("=");
          if (1 < u.length) {
            var d = u[0];
            u = u[1];
            var p = d.split("_");
            o = 2 <= p.length && p[1] == "type" ? o + (d + "=" + u + "&") : o + (d + "=redacted&");
          }
        }
      else o = null;
    else o = s;
    return (
      "XMLHTTP REQ (" +
      r +
      ") [attempt " +
      i +
      "]: " +
      t +
      `
` +
      n +
      `
` +
      o
    );
  });
}
function KE(e, t, n, r, i, s, o) {
  e.info(function () {
    return (
      "XMLHTTP RESP (" +
      r +
      ") [ attempt " +
      i +
      "]: " +
      t +
      `
` +
      n +
      `
` +
      s +
      " " +
      o
    );
  });
}
function Jn(e, t, n, r) {
  e.info(function () {
    return "XMLHTTP TEXT (" + t + "): " + XE(e, n) + (r ? " " + r : "");
  });
}
function GE(e, t) {
  e.info(function () {
    return "TIMEOUT: " + t;
  });
}
Jo.prototype.info = function () {};
function XE(e, t) {
  if (!e.g) return t;
  if (!t) return null;
  try {
    var n = JSON.parse(t);
    if (n) {
      for (e = 0; e < n.length; e++)
        if (Array.isArray(n[e])) {
          var r = n[e];
          if (!(2 > r.length)) {
            var i = r[1];
            if (Array.isArray(i) && !(1 > i.length)) {
              var s = i[0];
              if (s != "noop" && s != "stop" && s != "close") for (var o = 1; o < i.length; o++) i[o] = "";
            }
          }
        }
    }
    return wc(n);
  } catch {
    return t;
  }
}
var Cr = {},
  Od = null;
function kc() {
  return (Od = Od || new oe());
}
Cr.Ta = "serverreachability";
function cm(e) {
  we.call(this, Cr.Ta, e);
}
le(cm, we);
function Li(e) {
  const t = kc();
  he(t, new cm(t));
}
Cr.STAT_EVENT = "statevent";
function hm(e, t) {
  we.call(this, Cr.STAT_EVENT, e), (this.stat = t);
}
le(hm, we);
function ke(e) {
  const t = kc();
  he(t, new hm(t, e));
}
Cr.Ua = "timingevent";
function dm(e, t) {
  we.call(this, Cr.Ua, e), (this.size = t);
}
le(dm, we);
function Ki(e, t) {
  if (typeof e != "function") throw Error("Fn must not be null and must be a function");
  return R.setTimeout(function () {
    e();
  }, t);
}
var Tc = { NO_ERROR: 0, rb: 1, Eb: 2, Db: 3, yb: 4, Cb: 5, Fb: 6, Qa: 7, TIMEOUT: 8, Ib: 9 },
  QE = {
    wb: "complete",
    Sb: "success",
    Ra: "error",
    Qa: "abort",
    Kb: "ready",
    Lb: "readystatechange",
    TIMEOUT: "timeout",
    Gb: "incrementaldata",
    Jb: "progress",
    zb: "downloadprogress",
    $b: "uploadprogress",
  };
function Cc() {}
Cc.prototype.h = null;
function Ld(e) {
  return e.h || (e.h = e.i());
}
function YE() {}
var Gi = { OPEN: "a", vb: "b", Ra: "c", Hb: "d" };
function Pc() {
  we.call(this, "d");
}
le(Pc, we);
function Ac() {
  we.call(this, "c");
}
le(Ac, we);
var ba;
function bo() {}
le(bo, Cc);
bo.prototype.g = function () {
  return new XMLHttpRequest();
};
bo.prototype.i = function () {
  return {};
};
ba = new bo();
function Xi(e, t, n, r) {
  (this.l = e),
    (this.j = t),
    (this.m = n),
    (this.W = r || 1),
    (this.U = new Oi(this)),
    (this.P = qE),
    (e = Ya ? 125 : void 0),
    (this.V = new qo(e)),
    (this.I = null),
    (this.i = !1),
    (this.u = this.B = this.A = this.L = this.G = this.Y = this.C = null),
    (this.F = []),
    (this.g = null),
    (this.o = 0),
    (this.s = this.v = null),
    (this.ca = -1),
    (this.J = !1),
    (this.O = 0),
    (this.M = null),
    (this.ba = this.K = this.aa = this.S = !1),
    (this.h = new fm());
}
function fm() {
  (this.i = null), (this.g = ""), (this.h = !1);
}
var qE = 45e3,
  pm = {},
  Za = {};
E = Xi.prototype;
E.setTimeout = function (e) {
  this.P = e;
};
function eu(e, t, n) {
  (e.L = 1), (e.A = el(Rt(t))), (e.u = n), (e.S = !0), gm(e, null);
}
function gm(e, t) {
  (e.G = Date.now()), Qi(e), (e.B = Rt(e.A));
  var n = e.B,
    r = e.W;
  Array.isArray(r) || (r = [String(r)]),
    Im(n.i, "t", r),
    (e.o = 0),
    (n = e.l.J),
    (e.h = new fm()),
    (e.g = Wm(e.l, n ? t : null, !e.u)),
    0 < e.O && (e.M = new HE(_e(e.Pa, e, e.g), e.O)),
    am(e.U, e.g, "readystatechange", e.nb),
    (t = e.I ? Zg(e.I) : {}),
    e.u
      ? (e.v || (e.v = "POST"), (t["Content-Type"] = "application/x-www-form-urlencoded"), e.g.ha(e.B, e.v, e.u, t))
      : ((e.v = "GET"), e.g.ha(e.B, e.v, null, t)),
    Li(),
    WE(e.j, e.v, e.B, e.m, e.W, e.u);
}
E.nb = function (e) {
  e = e.target;
  const t = this.M;
  t && lt(e) == 3 ? t.l() : this.Pa(e);
};
E.Pa = function (e) {
  try {
    if (e == this.g)
      e: {
        const d = lt(this.g);
        var t = this.g.Ia();
        const p = this.g.da();
        if (!(3 > d) && (d != 3 || Ya || (this.g && (this.h.h || this.g.ja() || $d(this.g))))) {
          this.J || d != 4 || t == 7 || (t == 8 || 0 >= p ? Li(3) : Li(2)), Zo(this);
          var n = this.g.da();
          this.ca = n;
          t: if (mm(this)) {
            var r = $d(this.g);
            e = "";
            var i = r.length,
              s = lt(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > "u") {
                _n(this), si(this);
                var o = "";
                break t;
              }
              this.h.i = new R.TextDecoder();
            }
            for (t = 0; t < i; t++) (this.h.h = !0), (e += this.h.i.decode(r[t], { stream: s && t == i - 1 }));
            (r.length = 0), (this.h.g += e), (this.o = 0), (o = this.h.g);
          } else o = this.g.ja();
          if (((this.i = n == 200), KE(this.j, this.v, this.B, this.m, this.W, d, n), this.i)) {
            if (this.aa && !this.K) {
              t: {
                if (this.g) {
                  var l,
                    a = this.g;
                  if ((l = a.g ? a.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !Ci(l)) {
                    var u = l;
                    break t;
                  }
                }
                u = null;
              }
              if ((n = u))
                Jn(this.j, this.m, n, "Initial handshake response via X-HTTP-Initial-Response"),
                  (this.K = !0),
                  tu(this, n);
              else {
                (this.i = !1), (this.s = 3), ke(12), _n(this), si(this);
                break e;
              }
            }
            this.S
              ? (vm(this, d, o), Ya && this.i && d == 3 && (am(this.U, this.V, "tick", this.mb), this.V.start()))
              : (Jn(this.j, this.m, o, null), tu(this, o)),
              d == 4 && _n(this),
              this.i && !this.J && (d == 4 ? zm(this.l, this) : ((this.i = !1), Qi(this)));
          } else
            vS(this.g),
              n == 400 && 0 < o.indexOf("Unknown SID") ? ((this.s = 3), ke(12)) : ((this.s = 0), ke(13)),
              _n(this),
              si(this);
        }
      }
  } catch {
  } finally {
  }
};
function mm(e) {
  return e.g ? e.v == "GET" && e.L != 2 && e.l.Ha : !1;
}
function vm(e, t, n) {
  let r = !0,
    i;
  for (; !e.J && e.o < n.length; )
    if (((i = JE(e, n)), i == Za)) {
      t == 4 && ((e.s = 4), ke(14), (r = !1)), Jn(e.j, e.m, null, "[Incomplete Response]");
      break;
    } else if (i == pm) {
      (e.s = 4), ke(15), Jn(e.j, e.m, n, "[Invalid Chunk]"), (r = !1);
      break;
    } else Jn(e.j, e.m, i, null), tu(e, i);
  mm(e) && e.o != 0 && ((e.h.g = e.h.g.slice(e.o)), (e.o = 0)),
    t != 4 || n.length != 0 || e.h.h || ((e.s = 1), ke(16), (r = !1)),
    (e.i = e.i && r),
    r
      ? 0 < n.length &&
        !e.ba &&
        ((e.ba = !0),
        (t = e.l),
        t.g == e &&
          t.ca &&
          !t.M &&
          (t.l.info("Great, no buffering proxy detected. Bytes received: " + n.length), xc(t), (t.M = !0), ke(11)))
      : (Jn(e.j, e.m, n, "[Invalid Chunked Response]"), _n(e), si(e));
}
E.mb = function () {
  if (this.g) {
    var e = lt(this.g),
      t = this.g.ja();
    this.o < t.length && (Zo(this), vm(this, e, t), this.i && e != 4 && Qi(this));
  }
};
function JE(e, t) {
  var n = e.o,
    r = t.indexOf(
      `
`,
      n
    );
  return r == -1
    ? Za
    : ((n = Number(t.substring(n, r))),
      isNaN(n) ? pm : ((r += 1), r + n > t.length ? Za : ((t = t.slice(r, r + n)), (e.o = r + n), t)));
}
E.cancel = function () {
  (this.J = !0), _n(this);
};
function Qi(e) {
  (e.Y = Date.now() + e.P), ym(e, e.P);
}
function ym(e, t) {
  if (e.C != null) throw Error("WatchDog timer not null");
  e.C = Ki(_e(e.lb, e), t);
}
function Zo(e) {
  e.C && (R.clearTimeout(e.C), (e.C = null));
}
E.lb = function () {
  this.C = null;
  const e = Date.now();
  0 <= e - this.Y
    ? (GE(this.j, this.B), this.L != 2 && (Li(), ke(17)), _n(this), (this.s = 2), si(this))
    : ym(this, this.Y - e);
};
function si(e) {
  e.l.H == 0 || e.J || zm(e.l, e);
}
function _n(e) {
  Zo(e);
  var t = e.M;
  t && typeof t.sa == "function" && t.sa(),
    (e.M = null),
    Sc(e.V),
    um(e.U),
    e.g && ((t = e.g), (e.g = null), t.abort(), t.sa());
}
function tu(e, t) {
  try {
    var n = e.l;
    if (n.H != 0 && (n.g == e || nu(n.i, e))) {
      if (!e.K && nu(n.i, e) && n.H == 3) {
        try {
          var r = n.Ja.g.parse(t);
        } catch {
          r = null;
        }
        if (Array.isArray(r) && r.length == 3) {
          var i = r;
          if (i[0] == 0) {
            e: if (!n.u) {
              if (n.g)
                if (n.g.G + 3e3 < e.G) _o(n), il(n);
                else break e;
              Dc(n), ke(18);
            }
          } else
            (n.Fa = i[1]), 0 < n.Fa - n.V && 37500 > i[2] && n.G && n.A == 0 && !n.v && (n.v = Ki(_e(n.ib, n), 6e3));
          if (1 >= Cm(n.i) && n.oa) {
            try {
              n.oa();
            } catch {}
            n.oa = void 0;
          }
        } else wn(n, 11);
      } else if (((e.K || n.g == e) && _o(n), !Ci(t)))
        for (i = n.Ja.g.parse(t), t = 0; t < i.length; t++) {
          let u = i[t];
          if (((n.V = u[0]), (u = u[1]), n.H == 2))
            if (u[0] == "c") {
              (n.K = u[1]), (n.pa = u[2]);
              const d = u[3];
              d != null && ((n.ra = d), n.l.info("VER=" + n.ra));
              const p = u[4];
              p != null && ((n.Ga = p), n.l.info("SVER=" + n.Ga));
              const g = u[5];
              g != null &&
                typeof g == "number" &&
                0 < g &&
                ((r = 1.5 * g), (n.L = r), n.l.info("backChannelRequestTimeoutMs_=" + r)),
                (r = n);
              const y = e.g;
              if (y) {
                const _ = y.g ? y.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                if (_) {
                  var s = r.i;
                  s.g ||
                    (_.indexOf("spdy") == -1 && _.indexOf("quic") == -1 && _.indexOf("h2") == -1) ||
                    ((s.j = s.l), (s.g = new Set()), s.h && (Rc(s, s.h), (s.h = null)));
                }
                if (r.F) {
                  const w = y.g ? y.g.getResponseHeader("X-HTTP-Session-Id") : null;
                  w && ((r.Da = w), W(r.I, r.F, w));
                }
              }
              (n.H = 3),
                n.h && n.h.Ba(),
                n.ca && ((n.S = Date.now() - e.G), n.l.info("Handshake RTT: " + n.S + "ms")),
                (r = n);
              var o = e;
              if (((r.wa = Hm(r, r.J ? r.pa : null, r.Y)), o.K)) {
                Pm(r.i, o);
                var l = o,
                  a = r.L;
                a && l.setTimeout(a), l.C && (Zo(l), Qi(l)), (r.g = o);
              } else Fm(r);
              0 < n.j.length && sl(n);
            } else (u[0] != "stop" && u[0] != "close") || wn(n, 7);
          else
            n.H == 3 &&
              (u[0] == "stop" || u[0] == "close"
                ? u[0] == "stop"
                  ? wn(n, 7)
                  : Lc(n)
                : u[0] != "noop" && n.h && n.h.Aa(u),
              (n.A = 0));
        }
    }
    Li(4);
  } catch {}
}
function bE(e) {
  if (e.Z && typeof e.Z == "function") return e.Z();
  if ((typeof Map < "u" && e instanceof Map) || (typeof Set < "u" && e instanceof Set)) return Array.from(e.values());
  if (typeof e == "string") return e.split("");
  if (Wo(e)) {
    for (var t = [], n = e.length, r = 0; r < n; r++) t.push(e[r]);
    return t;
  }
  (t = []), (n = 0);
  for (r in e) t[n++] = e[r];
  return t;
}
function ZE(e) {
  if (e.ta && typeof e.ta == "function") return e.ta();
  if (!e.Z || typeof e.Z != "function") {
    if (typeof Map < "u" && e instanceof Map) return Array.from(e.keys());
    if (!(typeof Set < "u" && e instanceof Set)) {
      if (Wo(e) || typeof e == "string") {
        var t = [];
        e = e.length;
        for (var n = 0; n < e; n++) t.push(n);
        return t;
      }
      (t = []), (n = 0);
      for (const r in e) t[n++] = r;
      return t;
    }
  }
}
function _m(e, t) {
  if (e.forEach && typeof e.forEach == "function") e.forEach(t, void 0);
  else if (Wo(e) || typeof e == "string") Array.prototype.forEach.call(e, t, void 0);
  else for (var n = ZE(e), r = bE(e), i = r.length, s = 0; s < i; s++) t.call(void 0, r[s], n && n[s], e);
}
var wm = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function eS(e, t) {
  if (e) {
    e = e.split("&");
    for (var n = 0; n < e.length; n++) {
      var r = e[n].indexOf("="),
        i = null;
      if (0 <= r) {
        var s = e[n].substring(0, r);
        i = e[n].substring(r + 1);
      } else s = e[n];
      t(s, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
    }
  }
}
function In(e) {
  if (((this.g = this.s = this.j = ""), (this.m = null), (this.o = this.l = ""), (this.h = !1), e instanceof In)) {
    (this.h = e.h), vo(this, e.j), (this.s = e.s), (this.g = e.g), yo(this, e.m), (this.l = e.l);
    var t = e.i,
      n = new Di();
    (n.i = t.i), t.g && ((n.g = new Map(t.g)), (n.h = t.h)), Dd(this, n), (this.o = e.o);
  } else
    e && (t = String(e).match(wm))
      ? ((this.h = !1),
        vo(this, t[1] || "", !0),
        (this.s = Xr(t[2] || "")),
        (this.g = Xr(t[3] || "", !0)),
        yo(this, t[4]),
        (this.l = Xr(t[5] || "", !0)),
        Dd(this, t[6] || "", !0),
        (this.o = Xr(t[7] || "")))
      : ((this.h = !1), (this.i = new Di(null, this.h)));
}
In.prototype.toString = function () {
  var e = [],
    t = this.j;
  t && e.push(Qr(t, xd, !0), ":");
  var n = this.g;
  return (
    (n || t == "file") &&
      (e.push("//"),
      (t = this.s) && e.push(Qr(t, xd, !0), "@"),
      e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      (n = this.m),
      n != null && e.push(":", String(n))),
    (n = this.l) && (this.g && n.charAt(0) != "/" && e.push("/"), e.push(Qr(n, n.charAt(0) == "/" ? rS : nS, !0))),
    (n = this.i.toString()) && e.push("?", n),
    (n = this.o) && e.push("#", Qr(n, sS)),
    e.join("")
  );
};
function Rt(e) {
  return new In(e);
}
function vo(e, t, n) {
  (e.j = n ? Xr(t, !0) : t), e.j && (e.j = e.j.replace(/:$/, ""));
}
function yo(e, t) {
  if (t) {
    if (((t = Number(t)), isNaN(t) || 0 > t)) throw Error("Bad port number " + t);
    e.m = t;
  } else e.m = null;
}
function Dd(e, t, n) {
  t instanceof Di ? ((e.i = t), oS(e.i, e.h)) : (n || (t = Qr(t, iS)), (e.i = new Di(t, e.h)));
}
function W(e, t, n) {
  e.i.set(t, n);
}
function el(e) {
  return (
    W(
      e,
      "zx",
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    ),
    e
  );
}
function Xr(e, t) {
  return e ? (t ? decodeURI(e.replace(/%25/g, "%2525")) : decodeURIComponent(e)) : "";
}
function Qr(e, t, n) {
  return typeof e == "string"
    ? ((e = encodeURI(e).replace(t, tS)), n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), e)
    : null;
}
function tS(e) {
  return (e = e.charCodeAt(0)), "%" + ((e >> 4) & 15).toString(16) + (e & 15).toString(16);
}
var xd = /[#\/\?@]/g,
  nS = /[#\?:]/g,
  rS = /[#\?]/g,
  iS = /[#\?@]/g,
  sS = /#/g;
function Di(e, t) {
  (this.h = this.g = null), (this.i = e || null), (this.j = !!t);
}
function cn(e) {
  e.g ||
    ((e.g = new Map()),
    (e.h = 0),
    e.i &&
      eS(e.i, function (t, n) {
        e.add(decodeURIComponent(t.replace(/\+/g, " ")), n);
      }));
}
E = Di.prototype;
E.add = function (e, t) {
  cn(this), (this.i = null), (e = Pr(this, e));
  var n = this.g.get(e);
  return n || this.g.set(e, (n = [])), n.push(t), (this.h += 1), this;
};
function Em(e, t) {
  cn(e), (t = Pr(e, t)), e.g.has(t) && ((e.i = null), (e.h -= e.g.get(t).length), e.g.delete(t));
}
function Sm(e, t) {
  return cn(e), (t = Pr(e, t)), e.g.has(t);
}
E.forEach = function (e, t) {
  cn(this),
    this.g.forEach(function (n, r) {
      n.forEach(function (i) {
        e.call(t, i, r, this);
      }, this);
    }, this);
};
E.ta = function () {
  cn(this);
  const e = Array.from(this.g.values()),
    t = Array.from(this.g.keys()),
    n = [];
  for (let r = 0; r < t.length; r++) {
    const i = e[r];
    for (let s = 0; s < i.length; s++) n.push(t[r]);
  }
  return n;
};
E.Z = function (e) {
  cn(this);
  let t = [];
  if (typeof e == "string") Sm(this, e) && (t = t.concat(this.g.get(Pr(this, e))));
  else {
    e = Array.from(this.g.values());
    for (let n = 0; n < e.length; n++) t = t.concat(e[n]);
  }
  return t;
};
E.set = function (e, t) {
  return (
    cn(this),
    (this.i = null),
    (e = Pr(this, e)),
    Sm(this, e) && (this.h -= this.g.get(e).length),
    this.g.set(e, [t]),
    (this.h += 1),
    this
  );
};
E.get = function (e, t) {
  return e ? ((e = this.Z(e)), 0 < e.length ? String(e[0]) : t) : t;
};
function Im(e, t, n) {
  Em(e, t), 0 < n.length && ((e.i = null), e.g.set(Pr(e, t), pc(n)), (e.h += n.length));
}
E.toString = function () {
  if (this.i) return this.i;
  if (!this.g) return "";
  const e = [],
    t = Array.from(this.g.keys());
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    const s = encodeURIComponent(String(r)),
      o = this.Z(r);
    for (r = 0; r < o.length; r++) {
      var i = s;
      o[r] !== "" && (i += "=" + encodeURIComponent(String(o[r]))), e.push(i);
    }
  }
  return (this.i = e.join("&"));
};
function Pr(e, t) {
  return (t = String(t)), e.j && (t = t.toLowerCase()), t;
}
function oS(e, t) {
  t &&
    !e.j &&
    (cn(e),
    (e.i = null),
    e.g.forEach(function (n, r) {
      var i = r.toLowerCase();
      r != i && (Em(this, r), Im(this, i, n));
    }, e)),
    (e.j = t);
}
var lS = class {
  constructor(e, t) {
    (this.g = e), (this.map = t);
  }
};
function km(e) {
  (this.l = e || aS),
    R.PerformanceNavigationTiming
      ? ((e = R.performance.getEntriesByType("navigation")),
        (e = 0 < e.length && (e[0].nextHopProtocol == "hq" || e[0].nextHopProtocol == "h2")))
      : (e = !!(R.g && R.g.Ka && R.g.Ka() && R.g.Ka().dc)),
    (this.j = e ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = []);
}
var aS = 10;
function Tm(e) {
  return e.h ? !0 : e.g ? e.g.size >= e.j : !1;
}
function Cm(e) {
  return e.h ? 1 : e.g ? e.g.size : 0;
}
function nu(e, t) {
  return e.h ? e.h == t : e.g ? e.g.has(t) : !1;
}
function Rc(e, t) {
  e.g ? e.g.add(t) : (e.h = t);
}
function Pm(e, t) {
  e.h && e.h == t ? (e.h = null) : e.g && e.g.has(t) && e.g.delete(t);
}
km.prototype.cancel = function () {
  if (((this.i = Am(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const e of this.g.values()) e.cancel();
    this.g.clear();
  }
};
function Am(e) {
  if (e.h != null) return e.i.concat(e.h.F);
  if (e.g != null && e.g.size !== 0) {
    let t = e.i;
    for (const n of e.g.values()) t = t.concat(n.F);
    return t;
  }
  return pc(e.i);
}
var uS = class {
  stringify(e) {
    return R.JSON.stringify(e, void 0);
  }
  parse(e) {
    return R.JSON.parse(e, void 0);
  }
};
function cS() {
  this.g = new uS();
}
function hS(e, t, n) {
  const r = n || "";
  try {
    _m(e, function (i, s) {
      let o = i;
      Ko(i) && (o = wc(i)), t.push(r + s + "=" + encodeURIComponent(o));
    });
  } catch (i) {
    throw (t.push(r + "type=" + encodeURIComponent("_badmap")), i);
  }
}
function dS(e, t) {
  const n = new Jo();
  if (R.Image) {
    const r = new Image();
    (r.onload = ys(ws, n, r, "TestLoadImage: loaded", !0, t)),
      (r.onerror = ys(ws, n, r, "TestLoadImage: error", !1, t)),
      (r.onabort = ys(ws, n, r, "TestLoadImage: abort", !1, t)),
      (r.ontimeout = ys(ws, n, r, "TestLoadImage: timeout", !1, t)),
      R.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = e);
  } else t(!1);
}
function ws(e, t, n, r, i) {
  try {
    (t.onload = null), (t.onerror = null), (t.onabort = null), (t.ontimeout = null), i(r);
  } catch {}
}
function tl(e) {
  (this.l = e.ec || null), (this.j = e.ob || !1);
}
le(tl, Cc);
tl.prototype.g = function () {
  return new nl(this.l, this.j);
};
tl.prototype.i = (function (e) {
  return function () {
    return e;
  };
})({});
function nl(e, t) {
  oe.call(this),
    (this.F = e),
    (this.u = t),
    (this.m = void 0),
    (this.readyState = Nc),
    (this.status = 0),
    (this.responseType = this.responseText = this.response = this.statusText = ""),
    (this.onreadystatechange = null),
    (this.v = new Headers()),
    (this.h = null),
    (this.C = "GET"),
    (this.B = ""),
    (this.g = !1),
    (this.A = this.j = this.l = null);
}
le(nl, oe);
var Nc = 0;
E = nl.prototype;
E.open = function (e, t) {
  if (this.readyState != Nc) throw (this.abort(), Error("Error reopening a connection"));
  (this.C = e), (this.B = t), (this.readyState = 1), xi(this);
};
E.send = function (e) {
  if (this.readyState != 1) throw (this.abort(), Error("need to call open() first. "));
  this.g = !0;
  const t = { headers: this.v, method: this.C, credentials: this.m, cache: void 0 };
  e && (t.body = e), (this.F || R).fetch(new Request(this.B, t)).then(this.$a.bind(this), this.ka.bind(this));
};
E.abort = function () {
  (this.response = this.responseText = ""),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel("Request was aborted.").catch(() => {}),
    1 <= this.readyState && this.g && this.readyState != 4 && ((this.g = !1), Yi(this)),
    (this.readyState = Nc);
};
E.$a = function (e) {
  if (
    this.g &&
    ((this.l = e),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = e.headers),
      (this.readyState = 2),
      xi(this)),
    this.g && ((this.readyState = 3), xi(this), this.g))
  )
    if (this.responseType === "arraybuffer") e.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
    else if (typeof R.ReadableStream < "u" && "body" in e) {
      if (((this.j = e.body.getReader()), this.u)) {
        if (this.responseType) throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        this.response = [];
      } else (this.response = this.responseText = ""), (this.A = new TextDecoder());
      Rm(this);
    } else e.text().then(this.Za.bind(this), this.ka.bind(this));
};
function Rm(e) {
  e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e));
}
E.Xa = function (e) {
  if (this.g) {
    if (this.u && e.value) this.response.push(e.value);
    else if (!this.u) {
      var t = e.value ? e.value : new Uint8Array(0);
      (t = this.A.decode(t, { stream: !e.done })) && (this.response = this.responseText += t);
    }
    e.done ? Yi(this) : xi(this), this.readyState == 3 && Rm(this);
  }
};
E.Za = function (e) {
  this.g && ((this.response = this.responseText = e), Yi(this));
};
E.Ya = function (e) {
  this.g && ((this.response = e), Yi(this));
};
E.ka = function () {
  this.g && Yi(this);
};
function Yi(e) {
  (e.readyState = 4), (e.l = null), (e.j = null), (e.A = null), xi(e);
}
E.setRequestHeader = function (e, t) {
  this.v.append(e, t);
};
E.getResponseHeader = function (e) {
  return (this.h && this.h.get(e.toLowerCase())) || "";
};
E.getAllResponseHeaders = function () {
  if (!this.h) return "";
  const e = [],
    t = this.h.entries();
  for (var n = t.next(); !n.done; ) (n = n.value), e.push(n[0] + ": " + n[1]), (n = t.next());
  return e.join(`\r
`);
};
function xi(e) {
  e.onreadystatechange && e.onreadystatechange.call(e);
}
Object.defineProperty(nl.prototype, "withCredentials", {
  get: function () {
    return this.m === "include";
  },
  set: function (e) {
    this.m = e ? "include" : "same-origin";
  },
});
var fS = R.JSON.parse;
function Z(e) {
  oe.call(this),
    (this.headers = new Map()),
    (this.u = e || null),
    (this.h = !1),
    (this.C = this.g = null),
    (this.I = ""),
    (this.m = 0),
    (this.j = ""),
    (this.l = this.G = this.v = this.F = !1),
    (this.B = 0),
    (this.A = null),
    (this.K = Nm),
    (this.L = this.M = !1);
}
le(Z, oe);
var Nm = "",
  pS = /^https?$/i,
  gS = ["POST", "PUT"];
E = Z.prototype;
E.Oa = function (e) {
  this.M = e;
};
E.ha = function (e, t, n, r) {
  if (this.g) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.I + "; newUri=" + e);
  (t = t ? t.toUpperCase() : "GET"),
    (this.I = e),
    (this.j = ""),
    (this.m = 0),
    (this.F = !1),
    (this.h = !0),
    (this.g = this.u ? this.u.g() : ba.g()),
    (this.C = this.u ? Ld(this.u) : Ld(ba)),
    (this.g.onreadystatechange = _e(this.La, this));
  try {
    (this.G = !0), this.g.open(t, String(e), !0), (this.G = !1);
  } catch (s) {
    Md(this, s);
    return;
  }
  if (((e = n || ""), (n = new Map(this.headers)), r))
    if (Object.getPrototypeOf(r) === Object.prototype) for (var i in r) n.set(i, r[i]);
    else if (typeof r.keys == "function" && typeof r.get == "function") for (const s of r.keys()) n.set(s, r.get(s));
    else throw Error("Unknown input type for opt_headers: " + String(r));
  (r = Array.from(n.keys()).find((s) => s.toLowerCase() == "content-type")),
    (i = R.FormData && e instanceof R.FormData),
    !(0 <= Yg(gS, t)) || r || i || n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [s, o] of n) this.g.setRequestHeader(s, o);
  this.K && (this.g.responseType = this.K),
    "withCredentials" in this.g && this.g.withCredentials !== this.M && (this.g.withCredentials = this.M);
  try {
    Dm(this),
      0 < this.B &&
        ((this.L = mS(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = _e(this.ua, this)))
          : (this.A = Ic(this.ua, this.B, this))),
      (this.v = !0),
      this.g.send(e),
      (this.v = !1);
  } catch (s) {
    Md(this, s);
  }
};
function mS(e) {
  return Pi && typeof e.timeout == "number" && e.ontimeout !== void 0;
}
E.ua = function () {
  typeof fc < "u" &&
    this.g &&
    ((this.j = "Timed out after " + this.B + "ms, aborting"), (this.m = 8), he(this, "timeout"), this.abort(8));
};
function Md(e, t) {
  (e.h = !1), e.g && ((e.l = !0), e.g.abort(), (e.l = !1)), (e.j = t), (e.m = 5), Om(e), rl(e);
}
function Om(e) {
  e.F || ((e.F = !0), he(e, "complete"), he(e, "error"));
}
E.abort = function (e) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = e || 7),
    he(this, "complete"),
    he(this, "abort"),
    rl(this));
};
E.N = function () {
  this.g && (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)), rl(this, !0)), Z.$.N.call(this);
};
E.La = function () {
  this.s || (this.G || this.v || this.l ? Lm(this) : this.kb());
};
E.kb = function () {
  Lm(this);
};
function Lm(e) {
  if (e.h && typeof fc < "u" && (!e.C[1] || lt(e) != 4 || e.da() != 2)) {
    if (e.v && lt(e) == 4) Ic(e.La, 0, e);
    else if ((he(e, "readystatechange"), lt(e) == 4)) {
      e.h = !1;
      try {
        const o = e.da();
        e: switch (o) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var t = !0;
            break e;
          default:
            t = !1;
        }
        var n;
        if (!(n = t)) {
          var r;
          if ((r = o === 0)) {
            var i = String(e.I).match(wm)[1] || null;
            !i && R.self && R.self.location && (i = R.self.location.protocol.slice(0, -1)),
              (r = !pS.test(i ? i.toLowerCase() : ""));
          }
          n = r;
        }
        if (n) he(e, "complete"), he(e, "success");
        else {
          e.m = 6;
          try {
            var s = 2 < lt(e) ? e.g.statusText : "";
          } catch {
            s = "";
          }
          (e.j = s + " [" + e.da() + "]"), Om(e);
        }
      } finally {
        rl(e);
      }
    }
  }
}
function rl(e, t) {
  if (e.g) {
    Dm(e);
    const n = e.g,
      r = e.C[0] ? () => {} : null;
    (e.g = null), (e.C = null), t || he(e, "ready");
    try {
      n.onreadystatechange = r;
    } catch {}
  }
}
function Dm(e) {
  e.g && e.L && (e.g.ontimeout = null), e.A && (R.clearTimeout(e.A), (e.A = null));
}
E.isActive = function () {
  return !!this.g;
};
function lt(e) {
  return e.g ? e.g.readyState : 0;
}
E.da = function () {
  try {
    return 2 < lt(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
E.ja = function () {
  try {
    return this.g ? this.g.responseText : "";
  } catch {
    return "";
  }
};
E.Wa = function (e) {
  if (this.g) {
    var t = this.g.responseText;
    return e && t.indexOf(e) == 0 && (t = t.substring(e.length)), fS(t);
  }
};
function $d(e) {
  try {
    if (!e.g) return null;
    if ("response" in e.g) return e.g.response;
    switch (e.K) {
      case Nm:
      case "text":
        return e.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in e.g) return e.g.mozResponseArrayBuffer;
    }
    return null;
  } catch {
    return null;
  }
}
function vS(e) {
  const t = {};
  e = ((e.g && 2 <= lt(e) && e.g.getAllResponseHeaders()) || "").split(`\r
`);
  for (let r = 0; r < e.length; r++) {
    if (Ci(e[r])) continue;
    var n = zE(e[r]);
    const i = n[0];
    if (((n = n[1]), typeof n != "string")) continue;
    n = n.trim();
    const s = t[i] || [];
    (t[i] = s), s.push(n);
  }
  LE(t, function (r) {
    return r.join(", ");
  });
}
E.Ia = function () {
  return this.m;
};
E.Sa = function () {
  return typeof this.j == "string" ? this.j : String(this.j);
};
function xm(e) {
  let t = "";
  return (
    mc(e, function (n, r) {
      (t += r),
        (t += ":"),
        (t += n),
        (t += `\r
`);
    }),
    t
  );
}
function Oc(e, t, n) {
  e: {
    for (r in n) {
      var r = !1;
      break e;
    }
    r = !0;
  }
  r || ((n = xm(n)), typeof e == "string" ? n != null && encodeURIComponent(String(n)) : W(e, t, n));
}
function jr(e, t, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[e]) || t;
}
function Mm(e) {
  (this.Ga = 0),
    (this.j = []),
    (this.l = new Jo()),
    (this.pa = this.wa = this.I = this.Y = this.g = this.Da = this.F = this.na = this.o = this.U = this.s = null),
    (this.fb = this.W = 0),
    (this.cb = jr("failFast", !1, e)),
    (this.G = this.v = this.u = this.m = this.h = null),
    (this.aa = !0),
    (this.Fa = this.V = -1),
    (this.ba = this.A = this.C = 0),
    (this.ab = jr("baseRetryDelayMs", 5e3, e)),
    (this.hb = jr("retryDelaySeedMs", 1e4, e)),
    (this.eb = jr("forwardChannelMaxRetries", 2, e)),
    (this.xa = jr("forwardChannelRequestTimeoutMs", 2e4, e)),
    (this.va = (e && e.xmlHttpFactory) || void 0),
    (this.Ha = (e && e.useFetchStreams) || !1),
    (this.L = void 0),
    (this.J = (e && e.supportsCrossDomainXhr) || !1),
    (this.K = ""),
    (this.i = new km(e && e.concurrentRequestLimit)),
    (this.Ja = new cS()),
    (this.P = (e && e.fastHandshake) || !1),
    (this.O = (e && e.encodeInitMessageHeaders) || !1),
    this.P && this.O && (this.O = !1),
    (this.bb = (e && e.bc) || !1),
    e && e.Ea && this.l.Ea(),
    e && e.forceLongPolling && (this.aa = !1),
    (this.ca = (!this.P && this.aa && e && e.detectBufferingProxy) || !1),
    (this.qa = void 0),
    e && e.longPollingTimeout && 0 < e.longPollingTimeout && (this.qa = e.longPollingTimeout),
    (this.oa = void 0),
    (this.S = 0),
    (this.M = !1),
    (this.ma = this.B = null);
}
E = Mm.prototype;
E.ra = 8;
E.H = 1;
function Lc(e) {
  if (($m(e), e.H == 3)) {
    var t = e.W++,
      n = Rt(e.I);
    if (
      (W(n, "SID", e.K),
      W(n, "RID", t),
      W(n, "TYPE", "terminate"),
      qi(e, n),
      (t = new Xi(e, e.l, t)),
      (t.L = 2),
      (t.A = el(Rt(n))),
      (n = !1),
      R.navigator && R.navigator.sendBeacon)
    )
      try {
        n = R.navigator.sendBeacon(t.A.toString(), "");
      } catch {}
    !n && R.Image && ((new Image().src = t.A), (n = !0)),
      n || ((t.g = Wm(t.l, null)), t.g.ha(t.A)),
      (t.G = Date.now()),
      Qi(t);
  }
  Bm(e);
}
function il(e) {
  e.g && (xc(e), e.g.cancel(), (e.g = null));
}
function $m(e) {
  il(e),
    e.u && (R.clearTimeout(e.u), (e.u = null)),
    _o(e),
    e.i.cancel(),
    e.m && (typeof e.m == "number" && R.clearTimeout(e.m), (e.m = null));
}
function sl(e) {
  if (!Tm(e.i) && !e.m) {
    e.m = !0;
    var t = e.Na;
    Ri || om(), Ni || (Ri(), (Ni = !0)), Ec.add(t, e), (e.C = 0);
  }
}
function yS(e, t) {
  return Cm(e.i) >= e.i.j - (e.m ? 1 : 0)
    ? !1
    : e.m
    ? ((e.j = t.F.concat(e.j)), !0)
    : e.H == 1 || e.H == 2 || e.C >= (e.cb ? 0 : e.eb)
    ? !1
    : ((e.m = Ki(_e(e.Na, e, t), Vm(e, e.C))), e.C++, !0);
}
E.Na = function (e) {
  if (this.m)
    if (((this.m = null), this.H == 1)) {
      if (!e) {
        (this.W = Math.floor(1e5 * Math.random())), (e = this.W++);
        const i = new Xi(this, this.l, e);
        let s = this.s;
        if (
          (this.U && (s ? ((s = Zg(s)), em(s, this.U)) : (s = this.U)),
          this.o !== null || this.O || ((i.I = s), (s = null)),
          this.P)
        )
          e: {
            for (var t = 0, n = 0; n < this.j.length; n++) {
              t: {
                var r = this.j[n];
                if ("__data__" in r.map && ((r = r.map.__data__), typeof r == "string")) {
                  r = r.length;
                  break t;
                }
                r = void 0;
              }
              if (r === void 0) break;
              if (((t += r), 4096 < t)) {
                t = n;
                break e;
              }
              if (t === 4096 || n === this.j.length - 1) {
                t = n + 1;
                break e;
              }
            }
            t = 1e3;
          }
        else t = 1e3;
        (t = Um(this, i, t)),
          (n = Rt(this.I)),
          W(n, "RID", e),
          W(n, "CVER", 22),
          this.F && W(n, "X-HTTP-Session-Id", this.F),
          qi(this, n),
          s && (this.O ? (t = "headers=" + encodeURIComponent(String(xm(s))) + "&" + t) : this.o && Oc(n, this.o, s)),
          Rc(this.i, i),
          this.bb && W(n, "TYPE", "init"),
          this.P ? (W(n, "$req", t), W(n, "SID", "null"), (i.aa = !0), eu(i, n, null)) : eu(i, n, t),
          (this.H = 2);
      }
    } else this.H == 3 && (e ? Ud(this, e) : this.j.length == 0 || Tm(this.i) || Ud(this));
};
function Ud(e, t) {
  var n;
  t ? (n = t.m) : (n = e.W++);
  const r = Rt(e.I);
  W(r, "SID", e.K),
    W(r, "RID", n),
    W(r, "AID", e.V),
    qi(e, r),
    e.o && e.s && Oc(r, e.o, e.s),
    (n = new Xi(e, e.l, n, e.C + 1)),
    e.o === null && (n.I = e.s),
    t && (e.j = t.F.concat(e.j)),
    (t = Um(e, n, 1e3)),
    n.setTimeout(Math.round(0.5 * e.xa) + Math.round(0.5 * e.xa * Math.random())),
    Rc(e.i, n),
    eu(n, r, t);
}
function qi(e, t) {
  e.na &&
    mc(e.na, function (n, r) {
      W(t, r, n);
    }),
    e.h &&
      _m({}, function (n, r) {
        W(t, r, n);
      });
}
function Um(e, t, n) {
  n = Math.min(e.j.length, n);
  var r = e.h ? _e(e.h.Va, e.h, e) : null;
  e: {
    var i = e.j;
    let s = -1;
    for (;;) {
      const o = ["count=" + n];
      s == -1 ? (0 < n ? ((s = i[0].g), o.push("ofs=" + s)) : (s = 0)) : o.push("ofs=" + s);
      let l = !0;
      for (let a = 0; a < n; a++) {
        let u = i[a].g;
        const d = i[a].map;
        if (((u -= s), 0 > u)) (s = Math.max(0, i[a].g - 100)), (l = !1);
        else
          try {
            hS(d, o, "req" + u + "_");
          } catch {
            r && r(d);
          }
      }
      if (l) {
        r = o.join("&");
        break e;
      }
    }
  }
  return (e = e.j.splice(0, n)), (t.F = e), r;
}
function Fm(e) {
  if (!e.g && !e.u) {
    e.ba = 1;
    var t = e.Ma;
    Ri || om(), Ni || (Ri(), (Ni = !0)), Ec.add(t, e), (e.A = 0);
  }
}
function Dc(e) {
  return e.g || e.u || 3 <= e.A ? !1 : (e.ba++, (e.u = Ki(_e(e.Ma, e), Vm(e, e.A))), e.A++, !0);
}
E.Ma = function () {
  if (((this.u = null), jm(this), this.ca && !(this.M || this.g == null || 0 >= this.S))) {
    var e = 2 * this.S;
    this.l.info("BP detection timer enabled: " + e), (this.B = Ki(_e(this.jb, this), e));
  }
};
E.jb = function () {
  this.B &&
    ((this.B = null),
    this.l.info("BP detection timeout reached."),
    this.l.info("Buffering proxy detected and switch to long-polling!"),
    (this.G = !1),
    (this.M = !0),
    ke(10),
    il(this),
    jm(this));
};
function xc(e) {
  e.B != null && (R.clearTimeout(e.B), (e.B = null));
}
function jm(e) {
  (e.g = new Xi(e, e.l, "rpc", e.ba)), e.o === null && (e.g.I = e.s), (e.g.O = 0);
  var t = Rt(e.wa);
  W(t, "RID", "rpc"),
    W(t, "SID", e.K),
    W(t, "AID", e.V),
    W(t, "CI", e.G ? "0" : "1"),
    !e.G && e.qa && W(t, "TO", e.qa),
    W(t, "TYPE", "xmlhttp"),
    qi(e, t),
    e.o && e.s && Oc(t, e.o, e.s),
    e.L && e.g.setTimeout(e.L);
  var n = e.g;
  (e = e.pa), (n.L = 1), (n.A = el(Rt(t))), (n.u = null), (n.S = !0), gm(n, e);
}
E.ib = function () {
  this.v != null && ((this.v = null), il(this), Dc(this), ke(19));
};
function _o(e) {
  e.v != null && (R.clearTimeout(e.v), (e.v = null));
}
function zm(e, t) {
  var n = null;
  if (e.g == t) {
    _o(e), xc(e), (e.g = null);
    var r = 2;
  } else if (nu(e.i, t)) (n = t.F), Pm(e.i, t), (r = 1);
  else return;
  if (e.H != 0) {
    if (t.i)
      if (r == 1) {
        (n = t.u ? t.u.length : 0), (t = Date.now() - t.G);
        var i = e.C;
        (r = kc()), he(r, new dm(r, n)), sl(e);
      } else Fm(e);
    else if (((i = t.s), i == 3 || (i == 0 && 0 < t.ca) || !((r == 1 && yS(e, t)) || (r == 2 && Dc(e)))))
      switch ((n && 0 < n.length && ((t = e.i), (t.i = t.i.concat(n))), i)) {
        case 1:
          wn(e, 5);
          break;
        case 4:
          wn(e, 10);
          break;
        case 3:
          wn(e, 6);
          break;
        default:
          wn(e, 2);
      }
  }
}
function Vm(e, t) {
  let n = e.ab + Math.floor(Math.random() * e.hb);
  return e.isActive() || (n *= 2), n * t;
}
function wn(e, t) {
  if ((e.l.info("Error code " + t), t == 2)) {
    var n = null;
    e.h && (n = null);
    var r = _e(e.pb, e);
    n ||
      ((n = new In("//www.google.com/images/cleardot.gif")),
      (R.location && R.location.protocol == "http") || vo(n, "https"),
      el(n)),
      dS(n.toString(), r);
  } else ke(2);
  (e.H = 0), e.h && e.h.za(t), Bm(e), $m(e);
}
E.pb = function (e) {
  e ? (this.l.info("Successfully pinged google.com"), ke(2)) : (this.l.info("Failed to ping google.com"), ke(1));
};
function Bm(e) {
  if (((e.H = 0), (e.ma = []), e.h)) {
    const t = Am(e.i);
    (t.length != 0 || e.j.length != 0) && (Cd(e.ma, t), Cd(e.ma, e.j), (e.i.i.length = 0), pc(e.j), (e.j.length = 0)),
      e.h.ya();
  }
}
function Hm(e, t, n) {
  var r = n instanceof In ? Rt(n) : new In(n);
  if (r.g != "") t && (r.g = t + "." + r.g), yo(r, r.m);
  else {
    var i = R.location;
    (r = i.protocol), (t = t ? t + "." + i.hostname : i.hostname), (i = +i.port);
    var s = new In(null);
    r && vo(s, r), t && (s.g = t), i && yo(s, i), n && (s.l = n), (r = s);
  }
  return (n = e.F), (t = e.Da), n && t && W(r, n, t), W(r, "VER", e.ra), qi(e, r), r;
}
function Wm(e, t, n) {
  if (t && !e.J) throw Error("Can't create secondary domain capable XhrIo object.");
  return (t = e.Ha && !e.va ? new Z(new tl({ ob: n })) : new Z(e.va)), t.Oa(e.J), t;
}
E.isActive = function () {
  return !!this.h && this.h.isActive(this);
};
function Km() {}
E = Km.prototype;
E.Ba = function () {};
E.Aa = function () {};
E.za = function () {};
E.ya = function () {};
E.isActive = function () {
  return !0;
};
E.Va = function () {};
function Xe(e, t) {
  oe.call(this),
    (this.g = new Mm(t)),
    (this.l = e),
    (this.h = (t && t.messageUrlParams) || null),
    (e = (t && t.messageHeaders) || null),
    t &&
      t.clientProtocolHeaderRequired &&
      (e ? (e["X-Client-Protocol"] = "webchannel") : (e = { "X-Client-Protocol": "webchannel" })),
    (this.g.s = e),
    (e = (t && t.initMessageHeaders) || null),
    t &&
      t.messageContentType &&
      (e
        ? (e["X-WebChannel-Content-Type"] = t.messageContentType)
        : (e = { "X-WebChannel-Content-Type": t.messageContentType })),
    t && t.Ca && (e ? (e["X-WebChannel-Client-Profile"] = t.Ca) : (e = { "X-WebChannel-Client-Profile": t.Ca })),
    (this.g.U = e),
    (e = t && t.cc) && !Ci(e) && (this.g.o = e),
    (this.A = (t && t.supportsCrossDomainXhr) || !1),
    (this.v = (t && t.sendRawJson) || !1),
    (t = t && t.httpSessionIdParam) &&
      !Ci(t) &&
      ((this.g.F = t), (e = this.h), e !== null && t in e && ((e = this.h), t in e && delete e[t])),
    (this.j = new Ar(this));
}
le(Xe, oe);
Xe.prototype.m = function () {
  (this.g.h = this.j), this.A && (this.g.J = !0);
  var e = this.g,
    t = this.l,
    n = this.h || void 0;
  ke(0), (e.Y = t), (e.na = n || {}), (e.G = e.aa), (e.I = Hm(e, null, e.Y)), sl(e);
};
Xe.prototype.close = function () {
  Lc(this.g);
};
Xe.prototype.u = function (e) {
  var t = this.g;
  if (typeof e == "string") {
    var n = {};
    (n.__data__ = e), (e = n);
  } else this.v && ((n = {}), (n.__data__ = wc(e)), (e = n));
  t.j.push(new lS(t.fb++, e)), t.H == 3 && sl(t);
};
Xe.prototype.N = function () {
  (this.g.h = null), delete this.j, Lc(this.g), delete this.g, Xe.$.N.call(this);
};
function Gm(e) {
  Pc.call(this),
    e.__headers__ &&
      ((this.headers = e.__headers__), (this.statusCode = e.__status__), delete e.__headers__, delete e.__status__);
  var t = e.__sm__;
  if (t) {
    e: {
      for (const n in t) {
        e = n;
        break e;
      }
      e = void 0;
    }
    (this.i = e) && ((e = this.i), (t = t !== null && e in t ? t[e] : void 0)), (this.data = t);
  } else this.data = e;
}
le(Gm, Pc);
function Xm() {
  Ac.call(this), (this.status = 1);
}
le(Xm, Ac);
function Ar(e) {
  this.g = e;
}
le(Ar, Km);
Ar.prototype.Ba = function () {
  he(this.g, "a");
};
Ar.prototype.Aa = function (e) {
  he(this.g, new Gm(e));
};
Ar.prototype.za = function (e) {
  he(this.g, new Xm());
};
Ar.prototype.ya = function () {
  he(this.g, "b");
};
function _S() {
  this.blockSize = -1;
}
function ft() {
  (this.blockSize = -1),
    (this.blockSize = 64),
    (this.g = Array(4)),
    (this.m = Array(this.blockSize)),
    (this.i = this.h = 0),
    this.reset();
}
le(ft, _S);
ft.prototype.reset = function () {
  (this.g[0] = 1732584193),
    (this.g[1] = 4023233417),
    (this.g[2] = 2562383102),
    (this.g[3] = 271733878),
    (this.i = this.h = 0);
};
function Gl(e, t, n) {
  n || (n = 0);
  var r = Array(16);
  if (typeof t == "string")
    for (var i = 0; 16 > i; ++i)
      r[i] = t.charCodeAt(n++) | (t.charCodeAt(n++) << 8) | (t.charCodeAt(n++) << 16) | (t.charCodeAt(n++) << 24);
  else for (i = 0; 16 > i; ++i) r[i] = t[n++] | (t[n++] << 8) | (t[n++] << 16) | (t[n++] << 24);
  (t = e.g[0]), (n = e.g[1]), (i = e.g[2]);
  var s = e.g[3],
    o = (t + (s ^ (n & (i ^ s))) + r[0] + 3614090360) & 4294967295;
  (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (t & (n ^ i))) + r[1] + 3905402710) & 4294967295),
    (s = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (t ^ n))) + r[2] + 606105819) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (t ^ (i & (s ^ t))) + r[3] + 3250441966) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (s ^ (n & (i ^ s))) + r[4] + 4118548399) & 4294967295),
    (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (t & (n ^ i))) + r[5] + 1200080426) & 4294967295),
    (s = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (t ^ n))) + r[6] + 2821735955) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (t ^ (i & (s ^ t))) + r[7] + 4249261313) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (s ^ (n & (i ^ s))) + r[8] + 1770035416) & 4294967295),
    (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (t & (n ^ i))) + r[9] + 2336552879) & 4294967295),
    (s = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (t ^ n))) + r[10] + 4294925233) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (t ^ (i & (s ^ t))) + r[11] + 2304563134) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (s ^ (n & (i ^ s))) + r[12] + 1804603682) & 4294967295),
    (t = n + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (s + (i ^ (t & (n ^ i))) + r[13] + 4254626195) & 4294967295),
    (s = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (i + (n ^ (s & (t ^ n))) + r[14] + 2792965006) & 4294967295),
    (i = s + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (n + (t ^ (i & (s ^ t))) + r[15] + 1236535329) & 4294967295),
    (n = i + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (i ^ (s & (n ^ i))) + r[1] + 4129170786) & 4294967295),
    (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (t ^ n))) + r[6] + 3225465664) & 4294967295),
    (s = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (t ^ (n & (s ^ t))) + r[11] + 643717713) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (t & (i ^ s))) + r[0] + 3921069994) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (i ^ (s & (n ^ i))) + r[5] + 3593408605) & 4294967295),
    (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (t ^ n))) + r[10] + 38016083) & 4294967295),
    (s = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (t ^ (n & (s ^ t))) + r[15] + 3634488961) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (t & (i ^ s))) + r[4] + 3889429448) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (i ^ (s & (n ^ i))) + r[9] + 568446438) & 4294967295),
    (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (t ^ n))) + r[14] + 3275163606) & 4294967295),
    (s = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (t ^ (n & (s ^ t))) + r[3] + 4107603335) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (t & (i ^ s))) + r[8] + 1163531501) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (i ^ (s & (n ^ i))) + r[13] + 2850285829) & 4294967295),
    (t = n + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (s + (n ^ (i & (t ^ n))) + r[2] + 4243563512) & 4294967295),
    (s = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (i + (t ^ (n & (s ^ t))) + r[7] + 1735328473) & 4294967295),
    (i = s + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (n + (s ^ (t & (i ^ s))) + r[12] + 2368359562) & 4294967295),
    (n = i + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (n ^ i ^ s) + r[5] + 4294588738) & 4294967295),
    (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (t ^ n ^ i) + r[8] + 2272392833) & 4294967295),
    (s = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ t ^ n) + r[11] + 1839030562) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ t) + r[14] + 4259657740) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (n ^ i ^ s) + r[1] + 2763975236) & 4294967295),
    (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (t ^ n ^ i) + r[4] + 1272893353) & 4294967295),
    (s = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ t ^ n) + r[7] + 4139469664) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ t) + r[10] + 3200236656) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (n ^ i ^ s) + r[13] + 681279174) & 4294967295),
    (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (t ^ n ^ i) + r[0] + 3936430074) & 4294967295),
    (s = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ t ^ n) + r[3] + 3572445317) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ t) + r[6] + 76029189) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (n ^ i ^ s) + r[9] + 3654602809) & 4294967295),
    (t = n + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (s + (t ^ n ^ i) + r[12] + 3873151461) & 4294967295),
    (s = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (i + (s ^ t ^ n) + r[15] + 530742520) & 4294967295),
    (i = s + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (n + (i ^ s ^ t) + r[2] + 3299628645) & 4294967295),
    (n = i + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (i ^ (n | ~s)) + r[0] + 4096336452) & 4294967295),
    (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (t | ~i)) + r[7] + 1126891415) & 4294967295),
    (s = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (t ^ (s | ~n)) + r[14] + 2878612391) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~t)) + r[5] + 4237533241) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (t + (i ^ (n | ~s)) + r[12] + 1700485571) & 4294967295),
    (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (t | ~i)) + r[3] + 2399980690) & 4294967295),
    (s = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (t ^ (s | ~n)) + r[10] + 4293915773) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~t)) + r[1] + 2240044497) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (t + (i ^ (n | ~s)) + r[8] + 1873313359) & 4294967295),
    (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (t | ~i)) + r[15] + 4264355552) & 4294967295),
    (s = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (t ^ (s | ~n)) + r[6] + 2734768916) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~t)) + r[13] + 1309151649) & 4294967295),
    (n = i + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (t + (i ^ (n | ~s)) + r[4] + 4149444226) & 4294967295),
    (t = n + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (s + (n ^ (t | ~i)) + r[11] + 3174756917) & 4294967295),
    (s = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (i + (t ^ (s | ~n)) + r[2] + 718787259) & 4294967295),
    (i = s + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (n + (s ^ (i | ~t)) + r[9] + 3951481745) & 4294967295),
    (e.g[0] = (e.g[0] + t) & 4294967295),
    (e.g[1] = (e.g[1] + (i + (((o << 21) & 4294967295) | (o >>> 11)))) & 4294967295),
    (e.g[2] = (e.g[2] + i) & 4294967295),
    (e.g[3] = (e.g[3] + s) & 4294967295);
}
ft.prototype.j = function (e, t) {
  t === void 0 && (t = e.length);
  for (var n = t - this.blockSize, r = this.m, i = this.h, s = 0; s < t; ) {
    if (i == 0) for (; s <= n; ) Gl(this, e, s), (s += this.blockSize);
    if (typeof e == "string") {
      for (; s < t; )
        if (((r[i++] = e.charCodeAt(s++)), i == this.blockSize)) {
          Gl(this, r), (i = 0);
          break;
        }
    } else
      for (; s < t; )
        if (((r[i++] = e[s++]), i == this.blockSize)) {
          Gl(this, r), (i = 0);
          break;
        }
  }
  (this.h = i), (this.i += t);
};
ft.prototype.l = function () {
  var e = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
  e[0] = 128;
  for (var t = 1; t < e.length - 8; ++t) e[t] = 0;
  var n = 8 * this.i;
  for (t = e.length - 8; t < e.length; ++t) (e[t] = n & 255), (n /= 256);
  for (this.j(e), e = Array(16), t = n = 0; 4 > t; ++t)
    for (var r = 0; 32 > r; r += 8) e[n++] = (this.g[t] >>> r) & 255;
  return e;
};
function F(e, t) {
  this.h = t;
  for (var n = [], r = !0, i = e.length - 1; 0 <= i; i--) {
    var s = e[i] | 0;
    (r && s == t) || ((n[i] = s), (r = !1));
  }
  this.g = n;
}
var wS = {};
function Mc(e) {
  return -128 <= e && 128 > e
    ? CE(e, function (t) {
        return new F([t | 0], 0 > t ? -1 : 0);
      })
    : new F([e | 0], 0 > e ? -1 : 0);
}
function at(e) {
  if (isNaN(e) || !isFinite(e)) return lr;
  if (0 > e) return ue(at(-e));
  for (var t = [], n = 1, r = 0; e >= n; r++) (t[r] = (e / n) | 0), (n *= ru);
  return new F(t, 0);
}
function Qm(e, t) {
  if (e.length == 0) throw Error("number format error: empty string");
  if (((t = t || 10), 2 > t || 36 < t)) throw Error("radix out of range: " + t);
  if (e.charAt(0) == "-") return ue(Qm(e.substring(1), t));
  if (0 <= e.indexOf("-")) throw Error('number format error: interior "-" character');
  for (var n = at(Math.pow(t, 8)), r = lr, i = 0; i < e.length; i += 8) {
    var s = Math.min(8, e.length - i),
      o = parseInt(e.substring(i, i + s), t);
    8 > s ? ((s = at(Math.pow(t, s))), (r = r.R(s).add(at(o)))) : ((r = r.R(n)), (r = r.add(at(o))));
  }
  return r;
}
var ru = 4294967296,
  lr = Mc(0),
  iu = Mc(1),
  Fd = Mc(16777216);
E = F.prototype;
E.ea = function () {
  if (Be(this)) return -ue(this).ea();
  for (var e = 0, t = 1, n = 0; n < this.g.length; n++) {
    var r = this.D(n);
    (e += (0 <= r ? r : ru + r) * t), (t *= ru);
  }
  return e;
};
E.toString = function (e) {
  if (((e = e || 10), 2 > e || 36 < e)) throw Error("radix out of range: " + e);
  if (St(this)) return "0";
  if (Be(this)) return "-" + ue(this).toString(e);
  for (var t = at(Math.pow(e, 6)), n = this, r = ""; ; ) {
    var i = Eo(n, t).g;
    n = wo(n, i.R(t));
    var s = ((0 < n.g.length ? n.g[0] : n.h) >>> 0).toString(e);
    if (((n = i), St(n))) return s + r;
    for (; 6 > s.length; ) s = "0" + s;
    r = s + r;
  }
};
E.D = function (e) {
  return 0 > e ? 0 : e < this.g.length ? this.g[e] : this.h;
};
function St(e) {
  if (e.h != 0) return !1;
  for (var t = 0; t < e.g.length; t++) if (e.g[t] != 0) return !1;
  return !0;
}
function Be(e) {
  return e.h == -1;
}
E.X = function (e) {
  return (e = wo(this, e)), Be(e) ? -1 : St(e) ? 0 : 1;
};
function ue(e) {
  for (var t = e.g.length, n = [], r = 0; r < t; r++) n[r] = ~e.g[r];
  return new F(n, ~e.h).add(iu);
}
E.abs = function () {
  return Be(this) ? ue(this) : this;
};
E.add = function (e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0, i = 0; i <= t; i++) {
    var s = r + (this.D(i) & 65535) + (e.D(i) & 65535),
      o = (s >>> 16) + (this.D(i) >>> 16) + (e.D(i) >>> 16);
    (r = o >>> 16), (s &= 65535), (o &= 65535), (n[i] = (o << 16) | s);
  }
  return new F(n, n[n.length - 1] & -2147483648 ? -1 : 0);
};
function wo(e, t) {
  return e.add(ue(t));
}
E.R = function (e) {
  if (St(this) || St(e)) return lr;
  if (Be(this)) return Be(e) ? ue(this).R(ue(e)) : ue(ue(this).R(e));
  if (Be(e)) return ue(this.R(ue(e)));
  if (0 > this.X(Fd) && 0 > e.X(Fd)) return at(this.ea() * e.ea());
  for (var t = this.g.length + e.g.length, n = [], r = 0; r < 2 * t; r++) n[r] = 0;
  for (r = 0; r < this.g.length; r++)
    for (var i = 0; i < e.g.length; i++) {
      var s = this.D(r) >>> 16,
        o = this.D(r) & 65535,
        l = e.D(i) >>> 16,
        a = e.D(i) & 65535;
      (n[2 * r + 2 * i] += o * a),
        Es(n, 2 * r + 2 * i),
        (n[2 * r + 2 * i + 1] += s * a),
        Es(n, 2 * r + 2 * i + 1),
        (n[2 * r + 2 * i + 1] += o * l),
        Es(n, 2 * r + 2 * i + 1),
        (n[2 * r + 2 * i + 2] += s * l),
        Es(n, 2 * r + 2 * i + 2);
    }
  for (r = 0; r < t; r++) n[r] = (n[2 * r + 1] << 16) | n[2 * r];
  for (r = t; r < 2 * t; r++) n[r] = 0;
  return new F(n, 0);
};
function Es(e, t) {
  for (; (e[t] & 65535) != e[t]; ) (e[t + 1] += e[t] >>> 16), (e[t] &= 65535), t++;
}
function zr(e, t) {
  (this.g = e), (this.h = t);
}
function Eo(e, t) {
  if (St(t)) throw Error("division by zero");
  if (St(e)) return new zr(lr, lr);
  if (Be(e)) return (t = Eo(ue(e), t)), new zr(ue(t.g), ue(t.h));
  if (Be(t)) return (t = Eo(e, ue(t))), new zr(ue(t.g), t.h);
  if (30 < e.g.length) {
    if (Be(e) || Be(t)) throw Error("slowDivide_ only works with positive integers.");
    for (var n = iu, r = t; 0 >= r.X(e); ) (n = jd(n)), (r = jd(r));
    var i = Un(n, 1),
      s = Un(r, 1);
    for (r = Un(r, 2), n = Un(n, 2); !St(r); ) {
      var o = s.add(r);
      0 >= o.X(e) && ((i = i.add(n)), (s = o)), (r = Un(r, 1)), (n = Un(n, 1));
    }
    return (t = wo(e, i.R(t))), new zr(i, t);
  }
  for (i = lr; 0 <= e.X(t); ) {
    for (
      n = Math.max(1, Math.floor(e.ea() / t.ea())),
        r = Math.ceil(Math.log(n) / Math.LN2),
        r = 48 >= r ? 1 : Math.pow(2, r - 48),
        s = at(n),
        o = s.R(t);
      Be(o) || 0 < o.X(e);

    )
      (n -= r), (s = at(n)), (o = s.R(t));
    St(s) && (s = iu), (i = i.add(s)), (e = wo(e, o));
  }
  return new zr(i, e);
}
E.gb = function (e) {
  return Eo(this, e).h;
};
E.and = function (e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0; r < t; r++) n[r] = this.D(r) & e.D(r);
  return new F(n, this.h & e.h);
};
E.or = function (e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0; r < t; r++) n[r] = this.D(r) | e.D(r);
  return new F(n, this.h | e.h);
};
E.xor = function (e) {
  for (var t = Math.max(this.g.length, e.g.length), n = [], r = 0; r < t; r++) n[r] = this.D(r) ^ e.D(r);
  return new F(n, this.h ^ e.h);
};
function jd(e) {
  for (var t = e.g.length + 1, n = [], r = 0; r < t; r++) n[r] = (e.D(r) << 1) | (e.D(r - 1) >>> 31);
  return new F(n, e.h);
}
function Un(e, t) {
  var n = t >> 5;
  t %= 32;
  for (var r = e.g.length - n, i = [], s = 0; s < r; s++)
    i[s] = 0 < t ? (e.D(s + n) >>> t) | (e.D(s + n + 1) << (32 - t)) : e.D(s + n);
  return new F(i, e.h);
}
Xe.prototype.send = Xe.prototype.u;
Xe.prototype.open = Xe.prototype.m;
Xe.prototype.close = Xe.prototype.close;
Tc.NO_ERROR = 0;
Tc.TIMEOUT = 8;
Tc.HTTP_ERROR = 6;
QE.COMPLETE = "complete";
YE.EventType = Gi;
Gi.OPEN = "a";
Gi.CLOSE = "b";
Gi.ERROR = "c";
Gi.MESSAGE = "d";
oe.prototype.listen = oe.prototype.O;
Z.prototype.listenOnce = Z.prototype.P;
Z.prototype.getLastError = Z.prototype.Sa;
Z.prototype.getLastErrorCode = Z.prototype.Ia;
Z.prototype.getStatus = Z.prototype.da;
Z.prototype.getResponseJson = Z.prototype.Wa;
Z.prototype.getResponseText = Z.prototype.ja;
Z.prototype.send = Z.prototype.ha;
Z.prototype.setWithCredentials = Z.prototype.Oa;
ft.prototype.digest = ft.prototype.l;
ft.prototype.reset = ft.prototype.reset;
ft.prototype.update = ft.prototype.j;
F.prototype.add = F.prototype.add;
F.prototype.multiply = F.prototype.R;
F.prototype.modulo = F.prototype.gb;
F.prototype.compare = F.prototype.X;
F.prototype.toNumber = F.prototype.ea;
F.prototype.toString = F.prototype.toString;
F.prototype.getBits = F.prototype.D;
F.fromNumber = at;
F.fromString = Qm;
var ES = F;
const zd = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ge {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
}
(ge.UNAUTHENTICATED = new ge(null)),
  (ge.GOOGLE_CREDENTIALS = new ge("google-credentials-uid")),
  (ge.FIRST_PARTY = new ge("first-party-uid")),
  (ge.MOCK_USER = new ge("mock-user"));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Ji = "10.11.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const _r = new tc("@firebase/firestore");
function Me(e, ...t) {
  if (_r.logLevel <= $.DEBUG) {
    const n = t.map(Uc);
    _r.debug(`Firestore (${Ji}): ${e}`, ...n);
  }
}
function $c(e, ...t) {
  if (_r.logLevel <= $.ERROR) {
    const n = t.map(Uc);
    _r.error(`Firestore (${Ji}): ${e}`, ...n);
  }
}
function SS(e, ...t) {
  if (_r.logLevel <= $.WARN) {
    const n = t.map(Uc);
    _r.warn(`Firestore (${Ji}): ${e}`, ...n);
  }
}
function Uc(e) {
  if (typeof e == "string") return e;
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (n) {
      return JSON.stringify(n);
    })(e);
  } catch {
    return e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Fc(e = "Unexpected state") {
  const t = `FIRESTORE (${Ji}) INTERNAL ASSERTION FAILED: ` + e;
  throw ($c(t), new Error(t));
}
function su(e, t) {
  e || Fc();
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ve = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class ye extends Ot {
  constructor(t, n) {
    super(t, n),
      (this.code = t),
      (this.message = n),
      (this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ar {
  constructor() {
    this.promise = new Promise((t, n) => {
      (this.resolve = t), (this.reject = n);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ym {
  constructor(t, n) {
    (this.user = n),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${t}`);
  }
}
class IS {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(t, n) {
    t.enqueueRetryable(() => n(ge.UNAUTHENTICATED));
  }
  shutdown() {}
}
class kS {
  constructor(t) {
    (this.token = t), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(t, n) {
    (this.changeListener = n), t.enqueueRetryable(() => n(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class TS {
  constructor(t) {
    (this.t = t), (this.currentUser = ge.UNAUTHENTICATED), (this.i = 0), (this.forceRefresh = !1), (this.auth = null);
  }
  start(t, n) {
    let r = this.i;
    const i = (a) => (this.i !== r ? ((r = this.i), n(a)) : Promise.resolve());
    let s = new ar();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        s.resolve(),
        (s = new ar()),
        t.enqueueRetryable(() => i(this.currentUser));
    };
    const o = () => {
        const a = s;
        t.enqueueRetryable(async () => {
          await a.promise, await i(this.currentUser);
        });
      },
      l = (a) => {
        Me("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = a),
          this.auth.addAuthTokenListener(this.o),
          o();
      };
    this.t.onInit((a) => l(a)),
      setTimeout(() => {
        if (!this.auth) {
          const a = this.t.getImmediate({ optional: !0 });
          a ? l(a) : (Me("FirebaseAuthCredentialsProvider", "Auth not yet detected"), s.resolve(), (s = new ar()));
        }
      }, 0),
      o();
  }
  getToken() {
    const t = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((r) =>
              this.i !== t
                ? (Me("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken())
                : r
                ? (su(typeof r.accessToken == "string"), new Ym(r.accessToken, this.currentUser))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const t = this.auth && this.auth.getUid();
    return su(t === null || typeof t == "string"), new ge(t);
  }
}
class CS {
  constructor(t, n, r) {
    (this.l = t),
      (this.h = n),
      (this.P = r),
      (this.type = "FirstParty"),
      (this.user = ge.FIRST_PARTY),
      (this.I = new Map());
  }
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set("X-Goog-AuthUser", this.l);
    const t = this.T();
    return t && this.I.set("Authorization", t), this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h), this.I;
  }
}
class PS {
  constructor(t, n, r) {
    (this.l = t), (this.h = n), (this.P = r);
  }
  getToken() {
    return Promise.resolve(new CS(this.l, this.h, this.P));
  }
  start(t, n) {
    t.enqueueRetryable(() => n(ge.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class AS {
  constructor(t) {
    (this.value = t),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class RS {
  constructor(t) {
    (this.A = t), (this.forceRefresh = !1), (this.appCheck = null), (this.R = null);
  }
  start(t, n) {
    const r = (s) => {
      s.error != null &&
        Me(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`
        );
      const o = s.token !== this.R;
      return (
        (this.R = s.token),
        Me("FirebaseAppCheckTokenProvider", `Received ${o ? "new" : "existing"} token.`),
        o ? n(s.token) : Promise.resolve()
      );
    };
    this.o = (s) => {
      t.enqueueRetryable(() => r(s));
    };
    const i = (s) => {
      Me("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = s),
        this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((s) => i(s)),
      setTimeout(() => {
        if (!this.appCheck) {
          const s = this.A.getImmediate({ optional: !0 });
          s ? i(s) : Me("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0);
  }
  getToken() {
    const t = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(t)
            .then((n) => (n ? (su(typeof n.token == "string"), (this.R = n.token), new AS(n.token)) : null))
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function NS(e) {
  const t = typeof self < "u" && (self.crypto || self.msCrypto),
    n = new Uint8Array(e);
  if (t && typeof t.getRandomValues == "function") t.getRandomValues(n);
  else for (let r = 0; r < e; r++) n[r] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class OS {
  static newId() {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = Math.floor(256 / t.length) * t.length;
    let r = "";
    for (; r.length < 20; ) {
      const i = NS(40);
      for (let s = 0; s < i.length; ++s) r.length < 20 && i[s] < n && (r += t.charAt(i[s] % t.length));
    }
    return r;
  }
}
function qm(e) {
  return e.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LS {
  constructor(t, n, r, i, s, o, l, a, u) {
    (this.databaseId = t),
      (this.appId = n),
      (this.persistenceKey = r),
      (this.host = i),
      (this.ssl = s),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = l),
      (this.longPollingOptions = a),
      (this.useFetchStreams = u);
  }
}
class So {
  constructor(t, n) {
    (this.projectId = t), (this.database = n || "(default)");
  }
  static empty() {
    return new So("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(t) {
    return t instanceof So && t.projectId === this.projectId && t.database === this.database;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Vd, x;
((x = Vd || (Vd = {}))[(x.OK = 0)] = "OK"),
  (x[(x.CANCELLED = 1)] = "CANCELLED"),
  (x[(x.UNKNOWN = 2)] = "UNKNOWN"),
  (x[(x.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (x[(x.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (x[(x.NOT_FOUND = 5)] = "NOT_FOUND"),
  (x[(x.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (x[(x.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (x[(x.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (x[(x.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (x[(x.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (x[(x.ABORTED = 10)] = "ABORTED"),
  (x[(x.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (x[(x.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (x[(x.INTERNAL = 13)] = "INTERNAL"),
  (x[(x.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (x[(x.DATA_LOSS = 15)] = "DATA_LOSS");
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ new ES([4294967295, 4294967295], 0);
function Xl() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class DS {
  constructor(t, n, r = 1e3, i = 1.5, s = 6e4) {
    (this.si = t),
      (this.timerId = n),
      (this.Oo = r),
      (this.No = i),
      (this.Lo = s),
      (this.Bo = 0),
      (this.ko = null),
      (this.qo = Date.now()),
      this.reset();
  }
  reset() {
    this.Bo = 0;
  }
  Qo() {
    this.Bo = this.Lo;
  }
  Ko(t) {
    this.cancel();
    const n = Math.floor(this.Bo + this.$o()),
      r = Math.max(0, Date.now() - this.qo),
      i = Math.max(0, n - r);
    i > 0 &&
      Me(
        "ExponentialBackoff",
        `Backing off for ${i} ms (base delay: ${this.Bo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`
      ),
      (this.ko = this.si.enqueueAfterDelay(this.timerId, i, () => ((this.qo = Date.now()), t()))),
      (this.Bo *= this.No),
      this.Bo < this.Oo && (this.Bo = this.Oo),
      this.Bo > this.Lo && (this.Bo = this.Lo);
  }
  Uo() {
    this.ko !== null && (this.ko.skipDelay(), (this.ko = null));
  }
  cancel() {
    this.ko !== null && (this.ko.cancel(), (this.ko = null));
  }
  $o() {
    return (Math.random() - 0.5) * this.Bo;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jc {
  constructor(t, n, r, i, s) {
    (this.asyncQueue = t),
      (this.timerId = n),
      (this.targetTimeMs = r),
      (this.op = i),
      (this.removalCallback = s),
      (this.deferred = new ar()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(t, n, r, i, s) {
    const o = Date.now() + r,
      l = new jc(t, n, o, i, s);
    return l.start(r), l;
  }
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t) {
    this.timerHandle !== null &&
      (this.clearTimeout(), this.deferred.reject(new ye(ve.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this), clearTimeout(this.timerHandle), (this.timerHandle = null));
  }
}
function xS(e, t) {
  if (($c("AsyncQueue", `${t}: ${e}`), qm(e))) return new ye(ve.UNAVAILABLE, `${t}: ${e}`);
  throw e;
}
var Bd, Hd;
((Hd = Bd || (Bd = {})).J_ = "default"), (Hd.Cache = "cache");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class MS {
  constructor(t, n, r, i) {
    (this.authCredentials = t),
      (this.appCheckCredentials = n),
      (this.asyncQueue = r),
      (this.databaseInfo = i),
      (this.user = ge.UNAUTHENTICATED),
      (this.clientId = OS.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (s) => {
        Me("FirestoreClient", "Received user=", s.uid), await this.authCredentialListener(s), (this.user = s);
      }),
      this.appCheckCredentials.start(
        r,
        (s) => (
          Me("FirestoreClient", "Received new app check token=", s), this.appCheckCredentialListener(s, this.user)
        )
      );
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(t) {
    this.authCredentialListener = t;
  }
  setAppCheckTokenChangeListener(t) {
    this.appCheckCredentialListener = t;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown) throw new ye(ve.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t = new ar();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents && (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            t.resolve();
        } catch (n) {
          const r = xS(n, "Failed to shutdown persistence");
          t.reject(r);
        }
      }),
      t.promise
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Jm(e) {
  const t = {};
  return e.timeoutSeconds !== void 0 && (t.timeoutSeconds = e.timeoutSeconds), t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wd = new Map();
function $S(e, t, n, r) {
  if (t === !0 && r === !0) throw new ye(ve.INVALID_ARGUMENT, `${e} and ${n} cannot be used together.`);
}
function US(e) {
  if (e === void 0) return "undefined";
  if (e === null) return "null";
  if (typeof e == "string") return e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e);
  if (typeof e == "number" || typeof e == "boolean") return "" + e;
  if (typeof e == "object") {
    if (e instanceof Array) return "an array";
    {
      const t = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(e);
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return typeof e == "function" ? "a function" : Fc();
}
function FS(e, t) {
  if (("_delegate" in e && (e = e._delegate), !(e instanceof t))) {
    if (t.name === e.constructor.name)
      throw new ye(
        ve.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      const n = US(e);
      throw new ye(ve.INVALID_ARGUMENT, `Expected type '${t.name}', but it was: ${n}`);
    }
  }
  return e;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kd {
  constructor(t) {
    var n, r;
    if (t.host === void 0) {
      if (t.ssl !== void 0) throw new ye(ve.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      (this.host = "firestore.googleapis.com"), (this.ssl = !0);
    } else (this.host = t.host), (this.ssl = (n = t.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = t.credentials),
      (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
      (this.localCache = t.localCache),
      t.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < 1048576)
        throw new ye(ve.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    $S(
      "experimentalForceLongPolling",
      t.experimentalForceLongPolling,
      "experimentalAutoDetectLongPolling",
      t.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : t.experimentalAutoDetectLongPolling === void 0
        ? (this.experimentalAutoDetectLongPolling = !0)
        : (this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = Jm(
        (r = t.experimentalLongPollingOptions) !== null && r !== void 0 ? r : {}
      )),
      (function (s) {
        if (s.timeoutSeconds !== void 0) {
          if (isNaN(s.timeoutSeconds))
            throw new ye(ve.INVALID_ARGUMENT, `invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);
          if (s.timeoutSeconds < 5)
            throw new ye(
              ve.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`
            );
          if (s.timeoutSeconds > 30)
            throw new ye(
              ve.INVALID_ARGUMENT,
              `invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!t.useFetchStreams);
  }
  isEqual(t) {
    return (
      this.host === t.host &&
      this.ssl === t.ssl &&
      this.credentials === t.credentials &&
      this.cacheSizeBytes === t.cacheSizeBytes &&
      this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling &&
      (function (r, i) {
        return r.timeoutSeconds === i.timeoutSeconds;
      })(this.experimentalLongPollingOptions, t.experimentalLongPollingOptions) &&
      this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
      this.useFetchStreams === t.useFetchStreams
    );
  }
}
class bm {
  constructor(t, n, r, i) {
    (this._authCredentials = t),
      (this._appCheckCredentials = n),
      (this._databaseId = r),
      (this._app = i),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new Kd({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new ye(
        ve.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(t) {
    if (this._settingsFrozen)
      throw new ye(
        ve.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
      );
    (this._settings = new Kd(t)),
      t.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new IS();
          switch (r.type) {
            case "firstParty":
              return new PS(r.sessionIndex || "0", r.iamToken || null, r.authTokenFactory || null);
            case "provider":
              return r.client;
            default:
              throw new ye(ve.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
          }
        })(t.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return this._terminateTask || (this._terminateTask = this._terminate()), this._terminateTask;
  }
  toJSON() {
    return { app: this._app, databaseId: this._databaseId, settings: this._settings };
  }
  _terminate() {
    return (
      (function (n) {
        const r = Wd.get(n);
        r && (Me("ComponentProvider", "Removing Datastore"), Wd.delete(n), r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function jS(e, t, n, r = {}) {
  var i;
  const s = (e = FS(e, bm))._getSettings(),
    o = `${t}:${n}`;
  if (
    (s.host !== "firestore.googleapis.com" &&
      s.host !== o &&
      SS("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),
    e._setSettings(Object.assign(Object.assign({}, s), { host: o, ssl: !1 })),
    r.mockUserToken)
  ) {
    let l, a;
    if (typeof r.mockUserToken == "string") (l = r.mockUserToken), (a = ge.MOCK_USER);
    else {
      l = z0(r.mockUserToken, (i = e._app) === null || i === void 0 ? void 0 : i.options.projectId);
      const u = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!u) throw new ye(ve.INVALID_ARGUMENT, "mockUserToken must contain 'sub' or 'user_id' field!");
      a = new ge(u);
    }
    e._authCredentials = new kS(new Ym(l, a));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zS {
  constructor() {
    (this.iu = Promise.resolve()),
      (this.su = []),
      (this.ou = !1),
      (this._u = []),
      (this.au = null),
      (this.uu = !1),
      (this.cu = !1),
      (this.lu = []),
      (this.Jo = new DS(this, "async_queue_retry")),
      (this.hu = () => {
        const n = Xl();
        n && Me("AsyncQueue", "Visibility state changed to " + n.visibilityState), this.Jo.Uo();
      });
    const t = Xl();
    t && typeof t.addEventListener == "function" && t.addEventListener("visibilitychange", this.hu);
  }
  get isShuttingDown() {
    return this.ou;
  }
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.Pu(), this.Iu(t);
  }
  enterRestrictedMode(t) {
    if (!this.ou) {
      (this.ou = !0), (this.cu = t || !1);
      const n = Xl();
      n && typeof n.removeEventListener == "function" && n.removeEventListener("visibilitychange", this.hu);
    }
  }
  enqueue(t) {
    if ((this.Pu(), this.ou)) return new Promise(() => {});
    const n = new ar();
    return this.Iu(() => (this.ou && this.cu ? Promise.resolve() : (t().then(n.resolve, n.reject), n.promise))).then(
      () => n.promise
    );
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.su.push(t), this.Tu()));
  }
  async Tu() {
    if (this.su.length !== 0) {
      try {
        await this.su[0](), this.su.shift(), this.Jo.reset();
      } catch (t) {
        if (!qm(t)) throw t;
        Me("AsyncQueue", "Operation failed with retryable error: " + t);
      }
      this.su.length > 0 && this.Jo.Ko(() => this.Tu());
    }
  }
  Iu(t) {
    const n = this.iu.then(
      () => (
        (this.uu = !0),
        t()
          .catch((r) => {
            (this.au = r), (this.uu = !1);
            const i = (function (o) {
              let l = o.message || "";
              return (
                o.stack &&
                  (l = o.stack.includes(o.message)
                    ? o.stack
                    : o.message +
                      `
` +
                      o.stack),
                l
              );
            })(r);
            throw ($c("INTERNAL UNHANDLED ERROR: ", i), r);
          })
          .then((r) => ((this.uu = !1), r))
      )
    );
    return (this.iu = n), n;
  }
  enqueueAfterDelay(t, n, r) {
    this.Pu(), this.lu.indexOf(t) > -1 && (n = 0);
    const i = jc.createAndSchedule(this, t, n, r, (s) => this.Eu(s));
    return this._u.push(i), i;
  }
  Pu() {
    this.au && Fc();
  }
  verifyOperationInProgress() {}
  async du() {
    let t;
    do (t = this.iu), await t;
    while (t !== this.iu);
  }
  Au(t) {
    for (const n of this._u) if (n.timerId === t) return !0;
    return !1;
  }
  Ru(t) {
    return this.du().then(() => {
      this._u.sort((n, r) => n.targetTimeMs - r.targetTimeMs);
      for (const n of this._u) if ((n.skipDelay(), t !== "all" && n.timerId === t)) break;
      return this.du();
    });
  }
  Vu(t) {
    this.lu.push(t);
  }
  Eu(t) {
    const n = this._u.indexOf(t);
    this._u.splice(n, 1);
  }
}
class VS extends bm {
  constructor(t, n, r, i) {
    super(t, n, r, i),
      (this.type = "firestore"),
      (this._queue = (function () {
        return new zS();
      })()),
      (this._persistenceKey = (i == null ? void 0 : i.name) || "[DEFAULT]");
  }
  _terminate() {
    return this._firestoreClient || HS(this), this._firestoreClient.terminate();
  }
}
function BS(e, t) {
  const n = typeof e == "object" ? e : pg(),
    r = typeof e == "string" ? e : "(default)",
    i = rc(n, "firestore").getImmediate({ identifier: r });
  if (!i._initialized) {
    const s = F0("firestore");
    s && jS(i, ...s);
  }
  return i;
}
function HS(e) {
  var t, n, r;
  const i = e._freezeSettings(),
    s = (function (l, a, u, d) {
      return new LS(
        l,
        a,
        u,
        d.host,
        d.ssl,
        d.experimentalForceLongPolling,
        d.experimentalAutoDetectLongPolling,
        Jm(d.experimentalLongPollingOptions),
        d.useFetchStreams
      );
    })(e._databaseId, ((t = e._app) === null || t === void 0 ? void 0 : t.options.appId) || "", e._persistenceKey, i);
  (e._firestoreClient = new MS(e._authCredentials, e._appCheckCredentials, e._queue, s)),
    !((n = i.localCache) === null || n === void 0) &&
      n._offlineComponentProvider &&
      !((r = i.localCache) === null || r === void 0) &&
      r._onlineComponentProvider &&
      (e._firestoreClient._uninitializedComponentsProvider = {
        _offlineKind: i.localCache.kind,
        _offline: i.localCache._offlineComponentProvider,
        _online: i.localCache._onlineComponentProvider,
      });
}
(function (t, n = !0) {
  (function (i) {
    Ji = i;
  })(Ir),
    vr(
      new Rn(
        "firestore",
        (r, { instanceIdentifier: i, options: s }) => {
          const o = r.getProvider("app").getImmediate(),
            l = new VS(
              new TS(r.getProvider("auth-internal")),
              new RS(r.getProvider("app-check-internal")),
              (function (u, d) {
                if (!Object.prototype.hasOwnProperty.apply(u.options, ["projectId"]))
                  throw new ye(ve.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
                return new So(u.options.projectId, d);
              })(o, i),
              o
            );
          return (s = Object.assign({ useFetchStreams: n }, s)), l._setSettings(s), l;
        },
        "PUBLIC"
      ).setMultipleInstances(!0)
    ),
    en(zd, "4.6.1", t),
    en(zd, "4.6.1", "esm2017");
})();
const WS = {
    apiKey: "AIzaSyDc9T1_seDy9F9cGci5tlFrQIkkb-3urPw",
    authDomain: "pilvipalvelut-ae173.firebaseapp.com",
    projectId: "pilvipalvelut-ae173",
    storageBucket: "pilvipalvelut-ae173.appspot.com",
    messagingSenderId: "889338549839",
    appId: "1:889338549839:web:a999665dca5317c6f4fc3a",
  },
  Zm = fg(WS);
BS(Zm);
const KS = gE(Zm);
function GS() {
  const [e, t] = ur.useState(""),
    [n, r] = ur.useState(""),
    i = async (s) => {
      s.preventDefault();
      try {
        await tw(KS, e, n).then((o) => {
          const l = o.user;
          console.log("Tunnistautuminen onnistui! Kirjautunut käyttäjä: " + l.email);
        });
      } catch (o) {
        console.log(o);
      }
    };
  return z.jsxs("div", {
    children: [
      z.jsx("h2", { children: "Kirjaudu sisään" }),
      z.jsxs("form", {
        onSubmit: i,
        children: [
          z.jsxs("div", {
            children: [
              z.jsx("label", { htmlFor: "email", children: "Sähköposti:" }),
              z.jsx("input", {
                type: "email",
                id: "email",
                value: e,
                onChange: (s) => t(s.target.value),
                required: !0,
              }),
            ],
          }),
          z.jsxs("div", {
            children: [
              z.jsx("label", { htmlFor: "password", children: "Salasana:" }),
              z.jsx("input", {
                type: "password",
                id: "password",
                value: n,
                onChange: (s) => r(s.target.value),
                required: !0,
              }),
            ],
          }),
          z.jsx("button", { type: "submit", children: "Kirjaudu sisään" }),
        ],
      }),
    ],
  });
}
function XS() {
  const [e, t] = ur.useState(0);
  return z.jsxs(z.Fragment, {
    children: [
      z.jsxs("div", {
        children: [
          z.jsx("a", {
            href: "https://vitejs.dev",
            target: "_blank",
            children: z.jsx("img", {
              src: "https://nilssoni56.github.io/repo-pilvi/vko4/vite.svg",
              className: "logo",
              alt: "Vite logo",
            }),
          }),
          z.jsx("a", {
            href: "https://react.dev",
            target: "_blank",
            children: z.jsx("img", {
              src: "https://nilssoni56.github.io/repo-pilvi/vko4/assets/react-CHdo91hT.svg",
              className: "logo react",
              alt: "React logo",
            }),
          }),
        ],
      }),
      z.jsx("h1", { children: "Vite + React" }),
      z.jsx(GS, {}),
      z.jsxs("div", {
        className: "card",
        children: [
          z.jsxs("button", { onClick: () => t((n) => n + 1), children: ["count is ", e] }),
          z.jsxs("p", { children: ["Edit ", z.jsx("code", { children: "src/App.tsx" }), " and save to test HMR"] }),
        ],
      }),
      z.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" }),
    ],
  });
}
Ql.createRoot(document.getElementById("root")).render(z.jsx(vv.StrictMode, { children: z.jsx(XS, {}) }));
