function sy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Vh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Xn(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Kh = { exports: {} },
  Oa = {},
  Gh = { exports: {} },
  K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bi = Symbol.for("react.element"),
  ay = Symbol.for("react.portal"),
  ly = Symbol.for("react.fragment"),
  uy = Symbol.for("react.strict_mode"),
  cy = Symbol.for("react.profiler"),
  dy = Symbol.for("react.provider"),
  fy = Symbol.for("react.context"),
  py = Symbol.for("react.forward_ref"),
  hy = Symbol.for("react.suspense"),
  my = Symbol.for("react.memo"),
  gy = Symbol.for("react.lazy"),
  hf = Symbol.iterator;
function vy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hf && e[hf]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var qh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Qh = Object.assign,
  Yh = {};
function To(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Yh), (this.updater = n || qh);
}
To.prototype.isReactComponent = {};
To.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
To.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xh() {}
Xh.prototype = To.prototype;
function $c(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Yh), (this.updater = n || qh);
}
var Dc = ($c.prototype = new Xh());
Dc.constructor = $c;
Qh(Dc, To.prototype);
Dc.isPureReactComponent = !0;
var mf = Array.isArray,
  Jh = Object.prototype.hasOwnProperty,
  Fc = { current: null },
  Zh = { key: !0, ref: !0, __self: !0, __source: !0 };
function em(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t))
      Jh.call(t, r) && !Zh.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return { $$typeof: Bi, type: e, key: i, ref: s, props: o, _owner: Fc.current };
}
function yy(e, t) {
  return { $$typeof: Bi, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function zc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Bi;
}
function wy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var gf = /\/+/g;
function $l(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? wy("" + e.key) : t.toString(36);
}
function bs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Bi:
          case ay:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + $l(s, 0) : r),
      mf(o)
        ? ((n = ""),
          e != null && (n = e.replace(gf, "$&/") + "/"),
          bs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (zc(o) &&
            (o = yy(o, n + (!o.key || (s && s.key === o.key) ? "" : ("" + o.key).replace(gf, "$&/") + "/") + e)),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), mf(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + $l(i, a);
      s += bs(i, t, n, l, o);
    }
  else if (((l = vy(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(i = e.next()).done; ) (i = i.value), (l = r + $l(i, a++)), (s += bs(i, t, n, l, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function is(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    bs(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Sy(e) {
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
var nt = { current: null },
  Ts = { transition: null },
  _y = { ReactCurrentDispatcher: nt, ReactCurrentBatchConfig: Ts, ReactCurrentOwner: Fc };
K.Children = {
  map: is,
  forEach: function (e, t, n) {
    is(
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
      is(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      is(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!zc(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
K.Component = To;
K.Fragment = ly;
K.Profiler = cy;
K.PureComponent = $c;
K.StrictMode = uy;
K.Suspense = hy;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _y;
K.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Qh({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Fc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t) Jh.call(t, l) && !Zh.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Bi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
K.createContext = function (e) {
  return (
    (e = {
      $$typeof: fy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: dy, _context: e }),
    (e.Consumer = e)
  );
};
K.createElement = em;
K.createFactory = function (e) {
  var t = em.bind(null, e);
  return (t.type = e), t;
};
K.createRef = function () {
  return { current: null };
};
K.forwardRef = function (e) {
  return { $$typeof: py, render: e };
};
K.isValidElement = zc;
K.lazy = function (e) {
  return { $$typeof: gy, _payload: { _status: -1, _result: e }, _init: Sy };
};
K.memo = function (e, t) {
  return { $$typeof: my, type: e, compare: t === void 0 ? null : t };
};
K.startTransition = function (e) {
  var t = Ts.transition;
  Ts.transition = {};
  try {
    e();
  } finally {
    Ts.transition = t;
  }
};
K.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
K.useCallback = function (e, t) {
  return nt.current.useCallback(e, t);
};
K.useContext = function (e) {
  return nt.current.useContext(e);
};
K.useDebugValue = function () {};
K.useDeferredValue = function (e) {
  return nt.current.useDeferredValue(e);
};
K.useEffect = function (e, t) {
  return nt.current.useEffect(e, t);
};
K.useId = function () {
  return nt.current.useId();
};
K.useImperativeHandle = function (e, t, n) {
  return nt.current.useImperativeHandle(e, t, n);
};
K.useInsertionEffect = function (e, t) {
  return nt.current.useInsertionEffect(e, t);
};
K.useLayoutEffect = function (e, t) {
  return nt.current.useLayoutEffect(e, t);
};
K.useMemo = function (e, t) {
  return nt.current.useMemo(e, t);
};
K.useReducer = function (e, t, n) {
  return nt.current.useReducer(e, t, n);
};
K.useRef = function (e) {
  return nt.current.useRef(e);
};
K.useState = function (e) {
  return nt.current.useState(e);
};
K.useSyncExternalStore = function (e, t, n) {
  return nt.current.useSyncExternalStore(e, t, n);
};
K.useTransition = function () {
  return nt.current.useTransition();
};
K.version = "18.2.0";
Gh.exports = K;
var E = Gh.exports;
const dr = Vh(E),
  Cu = sy({ __proto__: null, default: dr }, [E]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ey = E,
  ky = Symbol.for("react.element"),
  Cy = Symbol.for("react.fragment"),
  xy = Object.prototype.hasOwnProperty,
  Iy = Ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  by = { key: !0, ref: !0, __self: !0, __source: !0 };
function tm(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) xy.call(t, r) && !by.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: ky, type: e, key: i, ref: s, props: o, _owner: Iy.current };
}
Oa.Fragment = Cy;
Oa.jsx = tm;
Oa.jsxs = tm;
Kh.exports = Oa;
var P = Kh.exports,
  xu = {},
  nm = { exports: {} },
  wt = {},
  rm = { exports: {} },
  om = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(I, N) {
    var M = I.length;
    I.push(N);
    e: for (; 0 < M; ) {
      var Q = (M - 1) >>> 1,
        H = I[Q];
      if (0 < o(H, N)) (I[Q] = N), (I[M] = H), (M = Q);
      else break e;
    }
  }
  function n(I) {
    return I.length === 0 ? null : I[0];
  }
  function r(I) {
    if (I.length === 0) return null;
    var N = I[0],
      M = I.pop();
    if (M !== N) {
      I[0] = M;
      e: for (var Q = 0, H = I.length, le = H >>> 1; Q < le; ) {
        var q = 2 * (Q + 1) - 1,
          me = I[q],
          re = q + 1,
          je = I[re];
        if (0 > o(me, M))
          re < H && 0 > o(je, me) ? ((I[Q] = je), (I[re] = M), (Q = re)) : ((I[Q] = me), (I[q] = M), (Q = q));
        else if (re < H && 0 > o(je, M)) (I[Q] = je), (I[re] = M), (Q = re);
        else break e;
      }
    }
    return N;
  }
  function o(I, N) {
    var M = I.sortIndex - N.sortIndex;
    return M !== 0 ? M : I.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    d = 1,
    p = null,
    h = 3,
    y = !1,
    g = !1,
    v = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(I) {
    for (var N = n(u); N !== null; ) {
      if (N.callback === null) r(u);
      else if (N.startTime <= I) r(u), (N.sortIndex = N.expirationTime), t(l, N);
      else break;
      N = n(u);
    }
  }
  function w(I) {
    if (((v = !1), f(I), !g))
      if (n(l) !== null) (g = !0), D(S);
      else {
        var N = n(u);
        N !== null && z(w, N.startTime - I);
      }
  }
  function S(I, N) {
    (g = !1), v && ((v = !1), m(b), (b = -1)), (y = !0);
    var M = h;
    try {
      for (f(N), p = n(l); p !== null && (!(p.expirationTime > N) || (I && !U())); ) {
        var Q = p.callback;
        if (typeof Q == "function") {
          (p.callback = null), (h = p.priorityLevel);
          var H = Q(p.expirationTime <= N);
          (N = e.unstable_now()), typeof H == "function" ? (p.callback = H) : p === n(l) && r(l), f(N);
        } else r(l);
        p = n(l);
      }
      if (p !== null) var le = !0;
      else {
        var q = n(u);
        q !== null && z(w, q.startTime - N), (le = !1);
      }
      return le;
    } finally {
      (p = null), (h = M), (y = !1);
    }
  }
  var C = !1,
    _ = null,
    b = -1,
    O = 5,
    R = -1;
  function U() {
    return !(e.unstable_now() - R < O);
  }
  function j() {
    if (_ !== null) {
      var I = e.unstable_now();
      R = I;
      var N = !0;
      try {
        N = _(!0, I);
      } finally {
        N ? F() : ((C = !1), (_ = null));
      }
    } else C = !1;
  }
  var F;
  if (typeof c == "function")
    F = function () {
      c(j);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(),
      $ = L.port2;
    (L.port1.onmessage = j),
      (F = function () {
        $.postMessage(null);
      });
  } else
    F = function () {
      x(j, 0);
    };
  function D(I) {
    (_ = I), C || ((C = !0), F());
  }
  function z(I, N) {
    b = x(function () {
      I(e.unstable_now());
    }, N);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (I) {
      I.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      g || y || ((g = !0), D(S));
    }),
    (e.unstable_forceFrameRate = function (I) {
      0 > I || 125 < I
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < I ? Math.floor(1e3 / I) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (I) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = h;
      }
      var M = h;
      h = N;
      try {
        return I();
      } finally {
        h = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (I, N) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var M = h;
      h = I;
      try {
        return N();
      } finally {
        h = M;
      }
    }),
    (e.unstable_scheduleCallback = function (I, N, M) {
      var Q = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? Q + M : Q))
          : (M = Q),
        I)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = M + H),
        (I = { id: d++, callback: N, priorityLevel: I, startTime: M, expirationTime: H, sortIndex: -1 }),
        M > Q
          ? ((I.sortIndex = M), t(u, I), n(l) === null && I === n(u) && (v ? (m(b), (b = -1)) : (v = !0), z(w, M - Q)))
          : ((I.sortIndex = H), t(l, I), g || y || ((g = !0), D(S))),
        I
      );
    }),
    (e.unstable_shouldYield = U),
    (e.unstable_wrapCallback = function (I) {
      var N = h;
      return function () {
        var M = h;
        h = N;
        try {
          return I.apply(this, arguments);
        } finally {
          h = M;
        }
      };
    });
})(om);
rm.exports = om;
var Ty = rm.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var im = E,
  yt = Ty;
function T(e) {
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
var sm = new Set(),
  vi = {};
function br(e, t) {
  go(e, t), go(e + "Capture", t);
}
function go(e, t) {
  for (vi[e] = t, e = 0; e < t.length; e++) sm.add(t[e]);
}
var mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Iu = Object.prototype.hasOwnProperty,
  Py =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  vf = {},
  yf = {};
function Ry(e) {
  return Iu.call(yf, e) ? !0 : Iu.call(vf, e) ? !1 : Py.test(e) ? (yf[e] = !0) : ((vf[e] = !0), !1);
}
function Oy(e, t, n, r) {
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
function Ny(e, t, n, r) {
  if (t === null || typeof t > "u" || Oy(e, t, n, r)) return !0;
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
function rt(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ke = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ke[e] = new rt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ke[t] = new rt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ke[e] = new rt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Ke[e] = new rt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ke[e] = new rt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ke[e] = new rt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ke[e] = new rt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ke[e] = new rt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ke[e] = new rt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Uc = /[\-:]([a-z])/g;
function jc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Uc, jc);
    Ke[t] = new rt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Uc, jc);
  Ke[t] = new rt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Uc, jc);
  Ke[t] = new rt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ke[e] = new rt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ke.xlinkHref = new rt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ke[e] = new rt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Bc(e, t, n, r) {
  var o = Ke.hasOwnProperty(t) ? Ke[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (Ny(t, n, o, r) && (n = null),
    r || o === null
      ? Ry(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _n = im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ss = Symbol.for("react.element"),
  Hr = Symbol.for("react.portal"),
  Vr = Symbol.for("react.fragment"),
  Wc = Symbol.for("react.strict_mode"),
  bu = Symbol.for("react.profiler"),
  am = Symbol.for("react.provider"),
  lm = Symbol.for("react.context"),
  Hc = Symbol.for("react.forward_ref"),
  Tu = Symbol.for("react.suspense"),
  Pu = Symbol.for("react.suspense_list"),
  Vc = Symbol.for("react.memo"),
  bn = Symbol.for("react.lazy"),
  um = Symbol.for("react.offscreen"),
  wf = Symbol.iterator;
function Fo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wf && e[wf]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var ye = Object.assign,
  Dl;
function Xo(e) {
  if (Dl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Dl = (t && t[1]) || "";
    }
  return (
    `
` +
    Dl +
    e
  );
}
var Fl = !1;
function zl(e, t) {
  if (!e || Fl) return "";
  Fl = !0;
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
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && o[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || o[s] !== i[a])) {
                var l =
                  `
` + o[s].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Fl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Xo(e) : "";
}
function Ay(e) {
  switch (e.tag) {
    case 5:
      return Xo(e.type);
    case 16:
      return Xo("Lazy");
    case 13:
      return Xo("Suspense");
    case 19:
      return Xo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = zl(e.type, !1)), e;
    case 11:
      return (e = zl(e.type.render, !1)), e;
    case 1:
      return (e = zl(e.type, !0)), e;
    default:
      return "";
  }
}
function Ru(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vr:
      return "Fragment";
    case Hr:
      return "Portal";
    case bu:
      return "Profiler";
    case Wc:
      return "StrictMode";
    case Tu:
      return "Suspense";
    case Pu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case lm:
        return (e.displayName || "Context") + ".Consumer";
      case am:
        return (e._context.displayName || "Context") + ".Provider";
      case Hc:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Vc:
        return (t = e.displayName || null), t !== null ? t : Ru(e.type) || "Memo";
      case bn:
        (t = e._payload), (e = e._init);
        try {
          return Ru(e(t));
        } catch {}
    }
  return null;
}
function My(e) {
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
      return Ru(t);
    case 8:
      return t === Wc ? "StrictMode" : "Mode";
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
function Qn(e) {
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
function cm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ly(e) {
  var t = cm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function as(e) {
  e._valueTracker || (e._valueTracker = Ly(e));
}
function dm(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = cm(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function qs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ou(e, t) {
  var n = t.checked;
  return ye({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Sf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Qn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function fm(e, t) {
  (t = t.checked), t != null && Bc(e, "checked", t, !1);
}
function Nu(e, t) {
  fm(e, t);
  var n = Qn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Au(e, t.type, n) : t.hasOwnProperty("defaultValue") && Au(e, t.type, Qn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function _f(e, t, n) {
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
function Au(e, t, n) {
  (t !== "number" || qs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Jo = Array.isArray;
function ro(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Qn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Mu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return ye({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Ef(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (Jo(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Qn(n) };
}
function pm(e, t) {
  var n = Qn(t.value),
    r = Qn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function kf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function hm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Lu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? hm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ls,
  mm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        ls = ls || document.createElement("div"),
          ls.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ls.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function yi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var oi = {
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
  $y = ["Webkit", "ms", "Moz", "O"];
Object.keys(oi).forEach(function (e) {
  $y.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (oi[t] = oi[e]);
  });
});
function gm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (oi.hasOwnProperty(e) && oi[e])
    ? ("" + t).trim()
    : t + "px";
}
function vm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = gm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Dy = ye(
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
function $u(e, t) {
  if (t) {
    if (Dy[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function Du(e, t) {
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
var Fu = null;
function Kc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zu = null,
  oo = null,
  io = null;
function Cf(e) {
  if ((e = Vi(e))) {
    if (typeof zu != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = $a(t)), zu(e.stateNode, e.type, t));
  }
}
function ym(e) {
  oo ? (io ? io.push(e) : (io = [e])) : (oo = e);
}
function wm() {
  if (oo) {
    var e = oo,
      t = io;
    if (((io = oo = null), Cf(e), t)) for (e = 0; e < t.length; e++) Cf(t[e]);
  }
}
function Sm(e, t) {
  return e(t);
}
function _m() {}
var Ul = !1;
function Em(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return Sm(e, t, n);
  } finally {
    (Ul = !1), (oo !== null || io !== null) && (_m(), wm());
  }
}
function wi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $a(n);
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
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var Uu = !1;
if (mn)
  try {
    var zo = {};
    Object.defineProperty(zo, "passive", {
      get: function () {
        Uu = !0;
      },
    }),
      window.addEventListener("test", zo, zo),
      window.removeEventListener("test", zo, zo);
  } catch {
    Uu = !1;
  }
function Fy(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var ii = !1,
  Qs = null,
  Ys = !1,
  ju = null,
  zy = {
    onError: function (e) {
      (ii = !0), (Qs = e);
    },
  };
function Uy(e, t, n, r, o, i, s, a, l) {
  (ii = !1), (Qs = null), Fy.apply(zy, arguments);
}
function jy(e, t, n, r, o, i, s, a, l) {
  if ((Uy.apply(this, arguments), ii)) {
    if (ii) {
      var u = Qs;
      (ii = !1), (Qs = null);
    } else throw Error(T(198));
    Ys || ((Ys = !0), (ju = u));
  }
}
function Tr(e) {
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
function km(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function xf(e) {
  if (Tr(e) !== e) throw Error(T(188));
}
function By(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tr(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return xf(o), e;
        if (i === r) return xf(o), t;
        i = i.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, a = o.child; a; ) {
        if (a === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function Cm(e) {
  return (e = By(e)), e !== null ? xm(e) : null;
}
function xm(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xm(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Im = yt.unstable_scheduleCallback,
  If = yt.unstable_cancelCallback,
  Wy = yt.unstable_shouldYield,
  Hy = yt.unstable_requestPaint,
  Ce = yt.unstable_now,
  Vy = yt.unstable_getCurrentPriorityLevel,
  Gc = yt.unstable_ImmediatePriority,
  bm = yt.unstable_UserBlockingPriority,
  Xs = yt.unstable_NormalPriority,
  Ky = yt.unstable_LowPriority,
  Tm = yt.unstable_IdlePriority,
  Na = null,
  Jt = null;
function Gy(e) {
  if (Jt && typeof Jt.onCommitFiberRoot == "function")
    try {
      Jt.onCommitFiberRoot(Na, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var jt = Math.clz32 ? Math.clz32 : Yy,
  qy = Math.log,
  Qy = Math.LN2;
function Yy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((qy(e) / Qy) | 0)) | 0;
}
var us = 64,
  cs = 4194304;
function Zo(e) {
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
function Js(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? (r = Zo(a)) : ((i &= s), i !== 0 && (r = Zo(i)));
  } else (s = n & ~o), s !== 0 ? (r = Zo(s)) : i !== 0 && (r = Zo(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - jt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Xy(e, t) {
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
function Jy(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - jt(i),
      a = 1 << s,
      l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = Xy(a, t)) : l <= t && (e.expiredLanes |= a), (i &= ~a);
  }
}
function Bu(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Pm() {
  var e = us;
  return (us <<= 1), !(us & 4194240) && (us = 64), e;
}
function jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Wi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - jt(t)),
    (e[t] = n);
}
function Zy(e, t) {
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
    var o = 31 - jt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function qc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - jt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ee = 0;
function Rm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Om,
  Qc,
  Nm,
  Am,
  Mm,
  Wu = !1,
  ds = [],
  Fn = null,
  zn = null,
  Un = null,
  Si = new Map(),
  _i = new Map(),
  Pn = [],
  e1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Fn = null;
      break;
    case "dragenter":
    case "dragleave":
      zn = null;
      break;
    case "mouseover":
    case "mouseout":
      Un = null;
      break;
    case "pointerover":
    case "pointerout":
      Si.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _i.delete(t.pointerId);
  }
}
function Uo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = Vi(t)), t !== null && Qc(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function t1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Fn = Uo(Fn, e, t, n, r, o)), !0;
    case "dragenter":
      return (zn = Uo(zn, e, t, n, r, o)), !0;
    case "mouseover":
      return (Un = Uo(Un, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Si.set(i, Uo(Si.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (i = o.pointerId), _i.set(i, Uo(_i.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function Lm(e) {
  var t = fr(e.target);
  if (t !== null) {
    var n = Tr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = km(n)), t !== null)) {
          (e.blockedOn = t),
            Mm(e.priority, function () {
              Nm(n);
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
function Ps(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Fu = r), n.target.dispatchEvent(r), (Fu = null);
    } else return (t = Vi(n)), t !== null && Qc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Tf(e, t, n) {
  Ps(e) && n.delete(t);
}
function n1() {
  (Wu = !1),
    Fn !== null && Ps(Fn) && (Fn = null),
    zn !== null && Ps(zn) && (zn = null),
    Un !== null && Ps(Un) && (Un = null),
    Si.forEach(Tf),
    _i.forEach(Tf);
}
function jo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), Wu || ((Wu = !0), yt.unstable_scheduleCallback(yt.unstable_NormalPriority, n1)));
}
function Ei(e) {
  function t(o) {
    return jo(o, e);
  }
  if (0 < ds.length) {
    jo(ds[0], e);
    for (var n = 1; n < ds.length; n++) {
      var r = ds[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Fn !== null && jo(Fn, e), zn !== null && jo(zn, e), Un !== null && jo(Un, e), Si.forEach(t), _i.forEach(t), n = 0;
    n < Pn.length;
    n++
  )
    (r = Pn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pn.length && ((n = Pn[0]), n.blockedOn === null); ) Lm(n), n.blockedOn === null && Pn.shift();
}
var so = _n.ReactCurrentBatchConfig,
  Zs = !0;
function r1(e, t, n, r) {
  var o = ee,
    i = so.transition;
  so.transition = null;
  try {
    (ee = 1), Yc(e, t, n, r);
  } finally {
    (ee = o), (so.transition = i);
  }
}
function o1(e, t, n, r) {
  var o = ee,
    i = so.transition;
  so.transition = null;
  try {
    (ee = 4), Yc(e, t, n, r);
  } finally {
    (ee = o), (so.transition = i);
  }
}
function Yc(e, t, n, r) {
  if (Zs) {
    var o = Hu(e, t, n, r);
    if (o === null) Xl(e, t, r, ea, n), bf(e, r);
    else if (t1(o, e, t, n, r)) r.stopPropagation();
    else if ((bf(e, r), t & 4 && -1 < e1.indexOf(e))) {
      for (; o !== null; ) {
        var i = Vi(o);
        if ((i !== null && Om(i), (i = Hu(e, t, n, r)), i === null && Xl(e, t, r, ea, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Xl(e, t, r, null, n);
  }
}
var ea = null;
function Hu(e, t, n, r) {
  if (((ea = null), (e = Kc(r)), (e = fr(e)), e !== null))
    if (((t = Tr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = km(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ea = e), null;
}
function $m(e) {
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
      switch (Vy()) {
        case Gc:
          return 1;
        case bm:
          return 4;
        case Xs:
        case Ky:
          return 16;
        case Tm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $n = null,
  Xc = null,
  Rs = null;
function Dm() {
  if (Rs) return Rs;
  var e,
    t = Xc,
    n = t.length,
    r,
    o = "value" in $n ? $n.value : $n.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (Rs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Os(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fs() {
  return !0;
}
function Pf() {
  return !1;
}
function St(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? fs : Pf),
      (this.isPropagationStopped = Pf),
      this
    );
  }
  return (
    ye(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fs));
      },
      persist: function () {},
      isPersistent: fs,
    }),
    t
  );
}
var Po = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Jc = St(Po),
  Hi = ye({}, Po, { view: 0, detail: 0 }),
  i1 = St(Hi),
  Bl,
  Wl,
  Bo,
  Aa = ye({}, Hi, {
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
    getModifierState: Zc,
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
        : (e !== Bo &&
            (Bo && e.type === "mousemove"
              ? ((Bl = e.screenX - Bo.screenX), (Wl = e.screenY - Bo.screenY))
              : (Wl = Bl = 0),
            (Bo = e)),
          Bl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Wl;
    },
  }),
  Rf = St(Aa),
  s1 = ye({}, Aa, { dataTransfer: 0 }),
  a1 = St(s1),
  l1 = ye({}, Hi, { relatedTarget: 0 }),
  Hl = St(l1),
  u1 = ye({}, Po, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  c1 = St(u1),
  d1 = ye({}, Po, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  f1 = St(d1),
  p1 = ye({}, Po, { data: 0 }),
  Of = St(p1),
  h1 = {
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
  m1 = {
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
  g1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function v1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = g1[e]) ? !!t[e] : !1;
}
function Zc() {
  return v1;
}
var y1 = ye({}, Hi, {
    key: function (e) {
      if (e.key) {
        var t = h1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Os(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? m1[e.keyCode] || "Unidentified"
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
    getModifierState: Zc,
    charCode: function (e) {
      return e.type === "keypress" ? Os(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Os(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  w1 = St(y1),
  S1 = ye({}, Aa, {
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
  Nf = St(S1),
  _1 = ye({}, Hi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zc,
  }),
  E1 = St(_1),
  k1 = ye({}, Po, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  C1 = St(k1),
  x1 = ye({}, Aa, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  I1 = St(x1),
  b1 = [9, 13, 27, 32],
  ed = mn && "CompositionEvent" in window,
  si = null;
mn && "documentMode" in document && (si = document.documentMode);
var T1 = mn && "TextEvent" in window && !si,
  Fm = mn && (!ed || (si && 8 < si && 11 >= si)),
  Af = " ",
  Mf = !1;
function zm(e, t) {
  switch (e) {
    case "keyup":
      return b1.indexOf(t.keyCode) !== -1;
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
function Um(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kr = !1;
function P1(e, t) {
  switch (e) {
    case "compositionend":
      return Um(t);
    case "keypress":
      return t.which !== 32 ? null : ((Mf = !0), Af);
    case "textInput":
      return (e = t.data), e === Af && Mf ? null : e;
    default:
      return null;
  }
}
function R1(e, t) {
  if (Kr) return e === "compositionend" || (!ed && zm(e, t)) ? ((e = Dm()), (Rs = Xc = $n = null), (Kr = !1), e) : null;
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
      return Fm && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var O1 = {
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
function Lf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!O1[e.type] : t === "textarea";
}
function jm(e, t, n, r) {
  ym(r),
    (t = ta(t, "onChange")),
    0 < t.length && ((n = new Jc("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var ai = null,
  ki = null;
function N1(e) {
  Jm(e, 0);
}
function Ma(e) {
  var t = Qr(e);
  if (dm(t)) return e;
}
function A1(e, t) {
  if (e === "change") return t;
}
var Bm = !1;
if (mn) {
  var Vl;
  if (mn) {
    var Kl = "oninput" in document;
    if (!Kl) {
      var $f = document.createElement("div");
      $f.setAttribute("oninput", "return;"), (Kl = typeof $f.oninput == "function");
    }
    Vl = Kl;
  } else Vl = !1;
  Bm = Vl && (!document.documentMode || 9 < document.documentMode);
}
function Df() {
  ai && (ai.detachEvent("onpropertychange", Wm), (ki = ai = null));
}
function Wm(e) {
  if (e.propertyName === "value" && Ma(ki)) {
    var t = [];
    jm(t, ki, e, Kc(e)), Em(N1, t);
  }
}
function M1(e, t, n) {
  e === "focusin" ? (Df(), (ai = t), (ki = n), ai.attachEvent("onpropertychange", Wm)) : e === "focusout" && Df();
}
function L1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ma(ki);
}
function $1(e, t) {
  if (e === "click") return Ma(t);
}
function D1(e, t) {
  if (e === "input" || e === "change") return Ma(t);
}
function F1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Wt = typeof Object.is == "function" ? Object.is : F1;
function Ci(e, t) {
  if (Wt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Iu.call(t, o) || !Wt(e[o], t[o])) return !1;
  }
  return !0;
}
function Ff(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zf(e, t) {
  var n = Ff(e);
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
    n = Ff(n);
  }
}
function Hm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Hm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Vm() {
  for (var e = window, t = qs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = qs(e.document);
  }
  return t;
}
function td(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function z1(e) {
  var t = Vm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Hm(n.ownerDocument.documentElement, n)) {
    if (r !== null && td(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = zf(n, i));
        var s = zf(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var U1 = mn && "documentMode" in document && 11 >= document.documentMode,
  Gr = null,
  Vu = null,
  li = null,
  Ku = !1;
function Uf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ku ||
    Gr == null ||
    Gr !== qs(r) ||
    ((r = Gr),
    "selectionStart" in r && td(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (li && Ci(li, r)) ||
      ((li = r),
      (r = ta(Vu, "onSelect")),
      0 < r.length &&
        ((t = new Jc("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Gr))));
}
function ps(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var qr = {
    animationend: ps("Animation", "AnimationEnd"),
    animationiteration: ps("Animation", "AnimationIteration"),
    animationstart: ps("Animation", "AnimationStart"),
    transitionend: ps("Transition", "TransitionEnd"),
  },
  Gl = {},
  Km = {};
mn &&
  ((Km = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete qr.animationend.animation, delete qr.animationiteration.animation, delete qr.animationstart.animation),
  "TransitionEvent" in window || delete qr.transitionend.transition);
function La(e) {
  if (Gl[e]) return Gl[e];
  if (!qr[e]) return e;
  var t = qr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Km) return (Gl[e] = t[n]);
  return e;
}
var Gm = La("animationend"),
  qm = La("animationiteration"),
  Qm = La("animationstart"),
  Ym = La("transitionend"),
  Xm = new Map(),
  jf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Jn(e, t) {
  Xm.set(e, t), br(t, [e]);
}
for (var ql = 0; ql < jf.length; ql++) {
  var Ql = jf[ql],
    j1 = Ql.toLowerCase(),
    B1 = Ql[0].toUpperCase() + Ql.slice(1);
  Jn(j1, "on" + B1);
}
Jn(Gm, "onAnimationEnd");
Jn(qm, "onAnimationIteration");
Jn(Qm, "onAnimationStart");
Jn("dblclick", "onDoubleClick");
Jn("focusin", "onFocus");
Jn("focusout", "onBlur");
Jn(Ym, "onTransitionEnd");
go("onMouseEnter", ["mouseout", "mouseover"]);
go("onMouseLeave", ["mouseout", "mouseover"]);
go("onPointerEnter", ["pointerout", "pointerover"]);
go("onPointerLeave", ["pointerout", "pointerover"]);
br("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
br("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
br("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
br("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
br("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
br("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ei =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  W1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ei));
function Bf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), jy(r, t, void 0, e), (e.currentTarget = null);
}
function Jm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && o.isPropagationStopped())) break e;
          Bf(o, a, u), (i = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]), (l = a.instance), (u = a.currentTarget), (a = a.listener), l !== i && o.isPropagationStopped())
          )
            break e;
          Bf(o, a, u), (i = l);
        }
    }
  }
  if (Ys) throw ((e = ju), (Ys = !1), (ju = null), e);
}
function ce(e, t) {
  var n = t[Xu];
  n === void 0 && (n = t[Xu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Zm(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), Zm(n, e, r, t);
}
var hs = "_reactListening" + Math.random().toString(36).slice(2);
function xi(e) {
  if (!e[hs]) {
    (e[hs] = !0),
      sm.forEach(function (n) {
        n !== "selectionchange" && (W1.has(n) || Yl(n, !1, e), Yl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hs] || ((t[hs] = !0), Yl("selectionchange", !1, t));
  }
}
function Zm(e, t, n, r) {
  switch ($m(t)) {
    case 1:
      var o = r1;
      break;
    case 4:
      o = o1;
      break;
    default:
      o = Yc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Uu || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Xl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo), l === o || (l.nodeType === 8 && l.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = fr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Em(function () {
    var u = i,
      d = Kc(n),
      p = [];
    e: {
      var h = Xm.get(e);
      if (h !== void 0) {
        var y = Jc,
          g = e;
        switch (e) {
          case "keypress":
            if (Os(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = w1;
            break;
          case "focusin":
            (g = "focus"), (y = Hl);
            break;
          case "focusout":
            (g = "blur"), (y = Hl);
            break;
          case "beforeblur":
          case "afterblur":
            y = Hl;
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
            y = Rf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = a1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = E1;
            break;
          case Gm:
          case qm:
          case Qm:
            y = c1;
            break;
          case Ym:
            y = C1;
            break;
          case "scroll":
            y = i1;
            break;
          case "wheel":
            y = I1;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = f1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Nf;
        }
        var v = (t & 4) !== 0,
          x = !v && e === "scroll",
          m = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var c = u, f; c !== null; ) {
          f = c;
          var w = f.stateNode;
          if (
            (f.tag === 5 && w !== null && ((f = w), m !== null && ((w = wi(c, m)), w != null && v.push(Ii(c, w, f)))),
            x)
          )
            break;
          c = c.return;
        }
        0 < v.length && ((h = new y(h, g, null, n, d)), p.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h && n !== Fu && (g = n.relatedTarget || n.fromElement) && (fr(g) || g[gn]))
        )
          break e;
        if (
          (y || h) &&
          ((h = d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window),
          y
            ? ((g = n.relatedTarget || n.toElement),
              (y = u),
              (g = g ? fr(g) : null),
              g !== null && ((x = Tr(g)), g !== x || (g.tag !== 5 && g.tag !== 6)) && (g = null))
            : ((y = null), (g = u)),
          y !== g)
        ) {
          if (
            ((v = Rf),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Nf), (w = "onPointerLeave"), (m = "onPointerEnter"), (c = "pointer")),
            (x = y == null ? h : Qr(y)),
            (f = g == null ? h : Qr(g)),
            (h = new v(w, c + "leave", y, n, d)),
            (h.target = x),
            (h.relatedTarget = f),
            (w = null),
            fr(d) === u && ((v = new v(m, c + "enter", g, n, d)), (v.target = f), (v.relatedTarget = x), (w = v)),
            (x = w),
            y && g)
          )
            t: {
              for (v = y, m = g, c = 0, f = v; f; f = $r(f)) c++;
              for (f = 0, w = m; w; w = $r(w)) f++;
              for (; 0 < c - f; ) (v = $r(v)), c--;
              for (; 0 < f - c; ) (m = $r(m)), f--;
              for (; c--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = $r(v)), (m = $r(m));
              }
              v = null;
            }
          else v = null;
          y !== null && Wf(p, h, y, v, !1), g !== null && x !== null && Wf(p, x, g, v, !0);
        }
      }
      e: {
        if (
          ((h = u ? Qr(u) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var S = A1;
        else if (Lf(h))
          if (Bm) S = D1;
          else {
            S = L1;
            var C = M1;
          }
        else
          (y = h.nodeName) && y.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (S = $1);
        if (S && (S = S(e, u))) {
          jm(p, S, n, d);
          break e;
        }
        C && C(e, h, u),
          e === "focusout" && (C = h._wrapperState) && C.controlled && h.type === "number" && Au(h, "number", h.value);
      }
      switch (((C = u ? Qr(u) : window), e)) {
        case "focusin":
          (Lf(C) || C.contentEditable === "true") && ((Gr = C), (Vu = u), (li = null));
          break;
        case "focusout":
          li = Vu = Gr = null;
          break;
        case "mousedown":
          Ku = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ku = !1), Uf(p, n, d);
          break;
        case "selectionchange":
          if (U1) break;
        case "keydown":
        case "keyup":
          Uf(p, n, d);
      }
      var _;
      if (ed)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        Kr ? zm(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (Fm &&
          n.locale !== "ko" &&
          (Kr || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && Kr && (_ = Dm())
            : (($n = d), (Xc = "value" in $n ? $n.value : $n.textContent), (Kr = !0))),
        (C = ta(u, b)),
        0 < C.length &&
          ((b = new Of(b, e, null, n, d)),
          p.push({ event: b, listeners: C }),
          _ ? (b.data = _) : ((_ = Um(n)), _ !== null && (b.data = _)))),
        (_ = T1 ? P1(e, n) : R1(e, n)) &&
          ((u = ta(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Of("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = _)));
    }
    Jm(p, t);
  });
}
function Ii(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ta(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = wi(e, n)), i != null && r.unshift(Ii(e, i, o)), (i = wi(e, t)), i != null && r.push(Ii(e, i, o))),
      (e = e.return);
  }
  return r;
}
function $r(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wf(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((l = wi(n, i)), l != null && s.unshift(Ii(n, l, a)))
        : o || ((l = wi(n, i)), l != null && s.push(Ii(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var H1 = /\r\n?/g,
  V1 = /\u0000|\uFFFD/g;
function Hf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      H1,
      `
`
    )
    .replace(V1, "");
}
function ms(e, t, n) {
  if (((t = Hf(t)), Hf(e) !== t && n)) throw Error(T(425));
}
function na() {}
var Gu = null,
  qu = null;
function Qu(e, t) {
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
var Yu = typeof setTimeout == "function" ? setTimeout : void 0,
  K1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Vf = typeof Promise == "function" ? Promise : void 0,
  G1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Vf < "u"
      ? function (e) {
          return Vf.resolve(null).then(e).catch(q1);
        }
      : Yu;
function q1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Jl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Ei(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ei(t);
}
function jn(e) {
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
function Kf(e) {
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
var Ro = Math.random().toString(36).slice(2),
  Xt = "__reactFiber$" + Ro,
  bi = "__reactProps$" + Ro,
  gn = "__reactContainer$" + Ro,
  Xu = "__reactEvents$" + Ro,
  Q1 = "__reactListeners$" + Ro,
  Y1 = "__reactHandles$" + Ro;
function fr(e) {
  var t = e[Xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[gn] || n[Xt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Kf(e); e !== null; ) {
          if ((n = e[Xt])) return n;
          e = Kf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Vi(e) {
  return (e = e[Xt] || e[gn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Qr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function $a(e) {
  return e[bi] || null;
}
var Ju = [],
  Yr = -1;
function Zn(e) {
  return { current: e };
}
function de(e) {
  0 > Yr || ((e.current = Ju[Yr]), (Ju[Yr] = null), Yr--);
}
function ae(e, t) {
  Yr++, (Ju[Yr] = e.current), (e.current = t);
}
var Yn = {},
  Je = Zn(Yn),
  st = Zn(!1),
  vr = Yn;
function vo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Yn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function at(e) {
  return (e = e.childContextTypes), e != null;
}
function ra() {
  de(st), de(Je);
}
function Gf(e, t, n) {
  if (Je.current !== Yn) throw Error(T(168));
  ae(Je, t), ae(st, n);
}
function eg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(T(108, My(e) || "Unknown", o));
  return ye({}, n, r);
}
function oa(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Yn),
    (vr = Je.current),
    ae(Je, e),
    ae(st, st.current),
    !0
  );
}
function qf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n ? ((e = eg(e, t, vr)), (r.__reactInternalMemoizedMergedChildContext = e), de(st), de(Je), ae(Je, e)) : de(st),
    ae(st, n);
}
var an = null,
  Da = !1,
  Zl = !1;
function tg(e) {
  an === null ? (an = [e]) : an.push(e);
}
function X1(e) {
  (Da = !0), tg(e);
}
function er() {
  if (!Zl && an !== null) {
    Zl = !0;
    var e = 0,
      t = ee;
    try {
      var n = an;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (an = null), (Da = !1);
    } catch (o) {
      throw (an !== null && (an = an.slice(e + 1)), Im(Gc, er), o);
    } finally {
      (ee = t), (Zl = !1);
    }
  }
  return null;
}
var Xr = [],
  Jr = 0,
  ia = null,
  sa = 0,
  xt = [],
  It = 0,
  yr = null,
  ln = 1,
  un = "";
function sr(e, t) {
  (Xr[Jr++] = sa), (Xr[Jr++] = ia), (ia = e), (sa = t);
}
function ng(e, t, n) {
  (xt[It++] = ln), (xt[It++] = un), (xt[It++] = yr), (yr = e);
  var r = ln;
  e = un;
  var o = 32 - jt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - jt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (ln = (1 << (32 - jt(t) + o)) | (n << o) | r),
      (un = i + e);
  } else (ln = (1 << i) | (n << o) | r), (un = e);
}
function nd(e) {
  e.return !== null && (sr(e, 1), ng(e, 1, 0));
}
function rd(e) {
  for (; e === ia; ) (ia = Xr[--Jr]), (Xr[Jr] = null), (sa = Xr[--Jr]), (Xr[Jr] = null);
  for (; e === yr; )
    (yr = xt[--It]), (xt[It] = null), (un = xt[--It]), (xt[It] = null), (ln = xt[--It]), (xt[It] = null);
}
var ht = null,
  pt = null,
  he = !1,
  Ut = null;
function rg(e, t) {
  var n = Tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Qf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (ht = e), (pt = jn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ht = e), (pt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = yr !== null ? { id: ln, overflow: un } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Tt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ht = e),
            (pt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ec(e) {
  if (he) {
    var t = pt;
    if (t) {
      var n = t;
      if (!Qf(e, t)) {
        if (Zu(e)) throw Error(T(418));
        t = jn(n.nextSibling);
        var r = ht;
        t && Qf(e, t) ? rg(r, n) : ((e.flags = (e.flags & -4097) | 2), (he = !1), (ht = e));
      }
    } else {
      if (Zu(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (he = !1), (ht = e);
    }
  }
}
function Yf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ht = e;
}
function gs(e) {
  if (e !== ht) return !1;
  if (!he) return Yf(e), (he = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !Qu(e.type, e.memoizedProps))),
    t && (t = pt))
  ) {
    if (Zu(e)) throw (og(), Error(T(418)));
    for (; t; ) rg(e, t), (t = jn(t.nextSibling));
  }
  if ((Yf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              pt = jn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      pt = null;
    }
  } else pt = ht ? jn(e.stateNode.nextSibling) : null;
  return !0;
}
function og() {
  for (var e = pt; e; ) e = jn(e.nextSibling);
}
function yo() {
  (pt = ht = null), (he = !1);
}
function od(e) {
  Ut === null ? (Ut = [e]) : Ut.push(e);
}
var J1 = _n.ReactCurrentBatchConfig;
function Ft(e, t) {
  if (e && e.defaultProps) {
    (t = ye({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var aa = Zn(null),
  la = null,
  Zr = null,
  id = null;
function sd() {
  id = Zr = la = null;
}
function ad(e) {
  var t = aa.current;
  de(aa), (e._currentValue = t);
}
function tc(e, t, n) {
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
function ao(e, t) {
  (la = e),
    (id = Zr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (it = !0), (e.firstContext = null));
}
function Rt(e) {
  var t = e._currentValue;
  if (id !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Zr === null)) {
      if (la === null) throw Error(T(308));
      (Zr = e), (la.dependencies = { lanes: 0, firstContext: e });
    } else Zr = Zr.next = e;
  return t;
}
var pr = null;
function ld(e) {
  pr === null ? (pr = [e]) : pr.push(e);
}
function ig(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), ld(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), vn(e, r);
}
function vn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Tn = !1;
function ud(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function sg(e, t) {
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
function hn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Bn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), vn(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ld(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    vn(e, n)
  );
}
function Ns(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qc(e, n);
  }
}
function Xf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function ua(e, t, n, r) {
  var o = e.updateQueue;
  Tn = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (i = u) : (s.next = u), (s = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== s && (a === null ? (d.firstBaseUpdate = u) : (a.next = u), (d.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var p = o.baseState;
    (s = 0), (d = u = l = null), (a = i);
    do {
      var h = a.lane,
        y = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next = { eventTime: y, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
        e: {
          var g = e,
            v = a;
          switch (((h = t), (y = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                p = g.call(y, p, h);
                break e;
              }
              p = g;
              break e;
            case 3:
              g.flags = (g.flags & -65537) | 128;
            case 0:
              if (((g = v.payload), (h = typeof g == "function" ? g.call(y, p, h) : g), h == null)) break e;
              p = ye({}, p, h);
              break e;
            case 2:
              Tn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (h = o.effects), h === null ? (o.effects = [a]) : h.push(a));
      } else
        (y = { eventTime: y, lane: h, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
          d === null ? ((u = d = y), (l = p)) : (d = d.next = y),
          (s |= h);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (h = a), (a = h.next), (h.next = null), (o.lastBaseUpdate = h), (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = p),
      (o.baseState = l),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Sr |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function Jf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function")) throw Error(T(191, o));
        o.call(r);
      }
    }
}
var ag = new im.Component().refs;
function nc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ye({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Fa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = tt(),
      o = Hn(e),
      i = hn(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = Bn(e, i, o)), t !== null && (Bt(t, e, o, r), Ns(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = tt(),
      o = Hn(e),
      i = hn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Bn(e, i, o)),
      t !== null && (Bt(t, e, o, r), Ns(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = tt(),
      r = Hn(e),
      o = hn(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = Bn(e, o, r)), t !== null && (Bt(t, e, r, n), Ns(t, e, r));
  },
};
function Zf(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ci(n, r) || !Ci(o, i)
      : !0
  );
}
function lg(e, t, n) {
  var r = !1,
    o = Yn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Rt(i))
      : ((o = at(t) ? vr : Je.current), (r = t.contextTypes), (i = (r = r != null) ? vo(e, o) : Yn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Fa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ep(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Fa.enqueueReplaceState(t, t.state, null);
}
function rc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = ag), ud(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? (o.context = Rt(i)) : ((i = at(t) ? vr : Je.current), (o.context = vo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (nc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
      t !== o.state && Fa.enqueueReplaceState(o, o.state, null),
      ua(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wo(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var o = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = o.refs;
            a === ag && (a = o.refs = {}), s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function vs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  );
}
function tp(e) {
  var t = e._init;
  return t(e._payload);
}
function ug(e) {
  function t(m, c) {
    if (e) {
      var f = m.deletions;
      f === null ? ((m.deletions = [c]), (m.flags |= 16)) : f.push(c);
    }
  }
  function n(m, c) {
    if (!e) return null;
    for (; c !== null; ) t(m, c), (c = c.sibling);
    return null;
  }
  function r(m, c) {
    for (m = new Map(); c !== null; ) c.key !== null ? m.set(c.key, c) : m.set(c.index, c), (c = c.sibling);
    return m;
  }
  function o(m, c) {
    return (m = Vn(m, c)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, c, f) {
    return (
      (m.index = f),
      e
        ? ((f = m.alternate), f !== null ? ((f = f.index), f < c ? ((m.flags |= 2), c) : f) : ((m.flags |= 2), c))
        : ((m.flags |= 1048576), c)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, c, f, w) {
    return c === null || c.tag !== 6 ? ((c = su(f, m.mode, w)), (c.return = m), c) : ((c = o(c, f)), (c.return = m), c);
  }
  function l(m, c, f, w) {
    var S = f.type;
    return S === Vr
      ? d(m, c, f.props.children, w, f.key)
      : c !== null &&
        (c.elementType === S || (typeof S == "object" && S !== null && S.$$typeof === bn && tp(S) === c.type))
      ? ((w = o(c, f.props)), (w.ref = Wo(m, c, f)), (w.return = m), w)
      : ((w = Fs(f.type, f.key, f.props, null, m.mode, w)), (w.ref = Wo(m, c, f)), (w.return = m), w);
  }
  function u(m, c, f, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = au(f, m.mode, w)), (c.return = m), c)
      : ((c = o(c, f.children || [])), (c.return = m), c);
  }
  function d(m, c, f, w, S) {
    return c === null || c.tag !== 7
      ? ((c = gr(f, m.mode, w, S)), (c.return = m), c)
      : ((c = o(c, f)), (c.return = m), c);
  }
  function p(m, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = su("" + c, m.mode, f)), (c.return = m), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ss:
          return (f = Fs(c.type, c.key, c.props, null, m.mode, f)), (f.ref = Wo(m, null, c)), (f.return = m), f;
        case Hr:
          return (c = au(c, m.mode, f)), (c.return = m), c;
        case bn:
          var w = c._init;
          return p(m, w(c._payload), f);
      }
      if (Jo(c) || Fo(c)) return (c = gr(c, m.mode, f, null)), (c.return = m), c;
      vs(m, c);
    }
    return null;
  }
  function h(m, c, f, w) {
    var S = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number") return S !== null ? null : a(m, c, "" + f, w);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ss:
          return f.key === S ? l(m, c, f, w) : null;
        case Hr:
          return f.key === S ? u(m, c, f, w) : null;
        case bn:
          return (S = f._init), h(m, c, S(f._payload), w);
      }
      if (Jo(f) || Fo(f)) return S !== null ? null : d(m, c, f, w, null);
      vs(m, f);
    }
    return null;
  }
  function y(m, c, f, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number") return (m = m.get(f) || null), a(c, m, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ss:
          return (m = m.get(w.key === null ? f : w.key) || null), l(c, m, w, S);
        case Hr:
          return (m = m.get(w.key === null ? f : w.key) || null), u(c, m, w, S);
        case bn:
          var C = w._init;
          return y(m, c, f, C(w._payload), S);
      }
      if (Jo(w) || Fo(w)) return (m = m.get(f) || null), d(c, m, w, S, null);
      vs(c, w);
    }
    return null;
  }
  function g(m, c, f, w) {
    for (var S = null, C = null, _ = c, b = (c = 0), O = null; _ !== null && b < f.length; b++) {
      _.index > b ? ((O = _), (_ = null)) : (O = _.sibling);
      var R = h(m, _, f[b], w);
      if (R === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && R.alternate === null && t(m, _),
        (c = i(R, c, b)),
        C === null ? (S = R) : (C.sibling = R),
        (C = R),
        (_ = O);
    }
    if (b === f.length) return n(m, _), he && sr(m, b), S;
    if (_ === null) {
      for (; b < f.length; b++)
        (_ = p(m, f[b], w)), _ !== null && ((c = i(_, c, b)), C === null ? (S = _) : (C.sibling = _), (C = _));
      return he && sr(m, b), S;
    }
    for (_ = r(m, _); b < f.length; b++)
      (O = y(_, m, b, f[b], w)),
        O !== null &&
          (e && O.alternate !== null && _.delete(O.key === null ? b : O.key),
          (c = i(O, c, b)),
          C === null ? (S = O) : (C.sibling = O),
          (C = O));
    return (
      e &&
        _.forEach(function (U) {
          return t(m, U);
        }),
      he && sr(m, b),
      S
    );
  }
  function v(m, c, f, w) {
    var S = Fo(f);
    if (typeof S != "function") throw Error(T(150));
    if (((f = S.call(f)), f == null)) throw Error(T(151));
    for (var C = (S = null), _ = c, b = (c = 0), O = null, R = f.next(); _ !== null && !R.done; b++, R = f.next()) {
      _.index > b ? ((O = _), (_ = null)) : (O = _.sibling);
      var U = h(m, _, R.value, w);
      if (U === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && U.alternate === null && t(m, _),
        (c = i(U, c, b)),
        C === null ? (S = U) : (C.sibling = U),
        (C = U),
        (_ = O);
    }
    if (R.done) return n(m, _), he && sr(m, b), S;
    if (_ === null) {
      for (; !R.done; b++, R = f.next())
        (R = p(m, R.value, w)), R !== null && ((c = i(R, c, b)), C === null ? (S = R) : (C.sibling = R), (C = R));
      return he && sr(m, b), S;
    }
    for (_ = r(m, _); !R.done; b++, R = f.next())
      (R = y(_, m, b, R.value, w)),
        R !== null &&
          (e && R.alternate !== null && _.delete(R.key === null ? b : R.key),
          (c = i(R, c, b)),
          C === null ? (S = R) : (C.sibling = R),
          (C = R));
    return (
      e &&
        _.forEach(function (j) {
          return t(m, j);
        }),
      he && sr(m, b),
      S
    );
  }
  function x(m, c, f, w) {
    if (
      (typeof f == "object" && f !== null && f.type === Vr && f.key === null && (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case ss:
          e: {
            for (var S = f.key, C = c; C !== null; ) {
              if (C.key === S) {
                if (((S = f.type), S === Vr)) {
                  if (C.tag === 7) {
                    n(m, C.sibling), (c = o(C, f.props.children)), (c.return = m), (m = c);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" && S !== null && S.$$typeof === bn && tp(S) === C.type)
                ) {
                  n(m, C.sibling), (c = o(C, f.props)), (c.ref = Wo(m, C, f)), (c.return = m), (m = c);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            f.type === Vr
              ? ((c = gr(f.props.children, m.mode, w, f.key)), (c.return = m), (m = c))
              : ((w = Fs(f.type, f.key, f.props, null, m.mode, w)), (w.ref = Wo(m, c, f)), (w.return = m), (m = w));
          }
          return s(m);
        case Hr:
          e: {
            for (C = f.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(m, c.sibling), (c = o(c, f.children || [])), (c.return = m), (m = c);
                  break e;
                } else {
                  n(m, c);
                  break;
                }
              else t(m, c);
              c = c.sibling;
            }
            (c = au(f, m.mode, w)), (c.return = m), (m = c);
          }
          return s(m);
        case bn:
          return (C = f._init), x(m, c, C(f._payload), w);
      }
      if (Jo(f)) return g(m, c, f, w);
      if (Fo(f)) return v(m, c, f, w);
      vs(m, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(m, c.sibling), (c = o(c, f)), (c.return = m), (m = c))
          : (n(m, c), (c = su(f, m.mode, w)), (c.return = m), (m = c)),
        s(m))
      : n(m, c);
  }
  return x;
}
var wo = ug(!0),
  cg = ug(!1),
  Ki = {},
  Zt = Zn(Ki),
  Ti = Zn(Ki),
  Pi = Zn(Ki);
function hr(e) {
  if (e === Ki) throw Error(T(174));
  return e;
}
function cd(e, t) {
  switch ((ae(Pi, t), ae(Ti, e), ae(Zt, Ki), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Lu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Lu(t, e));
  }
  de(Zt), ae(Zt, t);
}
function So() {
  de(Zt), de(Ti), de(Pi);
}
function dg(e) {
  hr(Pi.current);
  var t = hr(Zt.current),
    n = Lu(t, e.type);
  t !== n && (ae(Ti, e), ae(Zt, n));
}
function dd(e) {
  Ti.current === e && (de(Zt), de(Ti));
}
var ge = Zn(0);
function ca(e) {
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
var eu = [];
function fd() {
  for (var e = 0; e < eu.length; e++) eu[e]._workInProgressVersionPrimary = null;
  eu.length = 0;
}
var As = _n.ReactCurrentDispatcher,
  tu = _n.ReactCurrentBatchConfig,
  wr = 0,
  ve = null,
  Ae = null,
  $e = null,
  da = !1,
  ui = !1,
  Ri = 0,
  Z1 = 0;
function qe() {
  throw Error(T(321));
}
function pd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Wt(e[n], t[n])) return !1;
  return !0;
}
function hd(e, t, n, r, o, i) {
  if (
    ((wr = i),
    (ve = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (As.current = e === null || e.memoizedState === null ? rw : ow),
    (e = n(r, o)),
    ui)
  ) {
    i = 0;
    do {
      if (((ui = !1), (Ri = 0), 25 <= i)) throw Error(T(301));
      (i += 1), ($e = Ae = null), (t.updateQueue = null), (As.current = iw), (e = n(r, o));
    } while (ui);
  }
  if (((As.current = fa), (t = Ae !== null && Ae.next !== null), (wr = 0), ($e = Ae = ve = null), (da = !1), t))
    throw Error(T(300));
  return e;
}
function md() {
  var e = Ri !== 0;
  return (Ri = 0), e;
}
function qt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return $e === null ? (ve.memoizedState = $e = e) : ($e = $e.next = e), $e;
}
function Ot() {
  if (Ae === null) {
    var e = ve.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ae.next;
  var t = $e === null ? ve.memoizedState : $e.next;
  if (t !== null) ($e = t), (Ae = e);
  else {
    if (e === null) throw Error(T(310));
    (Ae = e),
      (e = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null,
      }),
      $e === null ? (ve.memoizedState = $e = e) : ($e = $e.next = e);
  }
  return $e;
}
function Oi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function nu(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = Ae,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = i;
    do {
      var d = u.lane;
      if ((wr & d) === d)
        l !== null &&
          (l = l.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = { lane: d, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        l === null ? ((a = l = p), (s = r)) : (l = l.next = p), (ve.lanes |= d), (Sr |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (s = r) : (l.next = a),
      Wt(r, t.memoizedState) || (it = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ve.lanes |= i), (Sr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ru(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    Wt(i, t.memoizedState) || (it = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function fg() {}
function pg(e, t) {
  var n = ve,
    r = Ot(),
    o = t(),
    i = !Wt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (it = !0)),
    (r = r.queue),
    gd(gg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || ($e !== null && $e.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Ni(9, mg.bind(null, n, r, o, t), void 0, null), De === null)) throw Error(T(349));
    wr & 30 || hg(n, t, o);
  }
  return o;
}
function hg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ve.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function mg(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), vg(t) && yg(e);
}
function gg(e, t, n) {
  return n(function () {
    vg(t) && yg(e);
  });
}
function vg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Wt(e, n);
  } catch {
    return !0;
  }
}
function yg(e) {
  var t = vn(e, 1);
  t !== null && Bt(t, e, 1, -1);
}
function np(e) {
  var t = qt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Oi, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = nw.bind(null, ve, e)),
    [t.memoizedState, e]
  );
}
function Ni(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ve.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ve.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wg() {
  return Ot().memoizedState;
}
function Ms(e, t, n, r) {
  var o = qt();
  (ve.flags |= e), (o.memoizedState = Ni(1 | t, n, void 0, r === void 0 ? null : r));
}
function za(e, t, n, r) {
  var o = Ot();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ae !== null) {
    var s = Ae.memoizedState;
    if (((i = s.destroy), r !== null && pd(r, s.deps))) {
      o.memoizedState = Ni(t, n, i, r);
      return;
    }
  }
  (ve.flags |= e), (o.memoizedState = Ni(1 | t, n, i, r));
}
function rp(e, t) {
  return Ms(8390656, 8, e, t);
}
function gd(e, t) {
  return za(2048, 8, e, t);
}
function Sg(e, t) {
  return za(4, 2, e, t);
}
function _g(e, t) {
  return za(4, 4, e, t);
}
function Eg(e, t) {
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
function kg(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), za(4, 4, Eg.bind(null, t, e), n);
}
function vd() {}
function Cg(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pd(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function xg(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pd(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ig(e, t, n) {
  return wr & 21
    ? (Wt(n, t) || ((n = Pm()), (ve.lanes |= n), (Sr |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (it = !0)), (e.memoizedState = n));
}
function ew(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = tu.transition;
  tu.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (tu.transition = r);
  }
}
function bg() {
  return Ot().memoizedState;
}
function tw(e, t, n) {
  var r = Hn(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Tg(e))) Pg(t, n);
  else if (((n = ig(e, t, n, r)), n !== null)) {
    var o = tt();
    Bt(n, e, r, o), Rg(n, t, r);
  }
}
function nw(e, t, n) {
  var r = Hn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Tg(e)) Pg(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), Wt(a, s))) {
          var l = t.interleaved;
          l === null ? ((o.next = o), ld(t)) : ((o.next = l.next), (l.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = ig(e, t, o, r)), n !== null && ((o = tt()), Bt(n, e, r, o), Rg(n, t, r));
  }
}
function Tg(e) {
  var t = e.alternate;
  return e === ve || (t !== null && t === ve);
}
function Pg(e, t) {
  ui = da = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Rg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qc(e, n);
  }
}
var fa = {
    readContext: Rt,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useInsertionEffect: qe,
    useLayoutEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useMutableSource: qe,
    useSyncExternalStore: qe,
    useId: qe,
    unstable_isNewReconciler: !1,
  },
  rw = {
    readContext: Rt,
    useCallback: function (e, t) {
      return (qt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Rt,
    useEffect: rp,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Ms(4194308, 4, Eg.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Ms(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ms(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = qt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = qt();
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
        (e = e.dispatch = tw.bind(null, ve, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = qt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: np,
    useDebugValue: vd,
    useDeferredValue: function (e) {
      return (qt().memoizedState = e);
    },
    useTransition: function () {
      var e = np(!1),
        t = e[0];
      return (e = ew.bind(null, e[1])), (qt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ve,
        o = qt();
      if (he) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), De === null)) throw Error(T(349));
        wr & 30 || hg(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        rp(gg.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ni(9, mg.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = qt(),
        t = De.identifierPrefix;
      if (he) {
        var n = un,
          r = ln;
        (n = (r & ~(1 << (32 - jt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ri++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Z1++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ow = {
    readContext: Rt,
    useCallback: Cg,
    useContext: Rt,
    useEffect: gd,
    useImperativeHandle: kg,
    useInsertionEffect: Sg,
    useLayoutEffect: _g,
    useMemo: xg,
    useReducer: nu,
    useRef: wg,
    useState: function () {
      return nu(Oi);
    },
    useDebugValue: vd,
    useDeferredValue: function (e) {
      var t = Ot();
      return Ig(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = nu(Oi)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: fg,
    useSyncExternalStore: pg,
    useId: bg,
    unstable_isNewReconciler: !1,
  },
  iw = {
    readContext: Rt,
    useCallback: Cg,
    useContext: Rt,
    useEffect: gd,
    useImperativeHandle: kg,
    useInsertionEffect: Sg,
    useLayoutEffect: _g,
    useMemo: xg,
    useReducer: ru,
    useRef: wg,
    useState: function () {
      return ru(Oi);
    },
    useDebugValue: vd,
    useDeferredValue: function (e) {
      var t = Ot();
      return Ae === null ? (t.memoizedState = e) : Ig(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = ru(Oi)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: fg,
    useSyncExternalStore: pg,
    useId: bg,
    unstable_isNewReconciler: !1,
  };
function _o(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ay(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ou(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function oc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sw = typeof WeakMap == "function" ? WeakMap : Map;
function Og(e, t, n) {
  (n = hn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ha || ((ha = !0), (hc = r)), oc(e, t);
    }),
    n
  );
}
function Ng(e, t, n) {
  (n = hn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        oc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        oc(e, t), typeof r != "function" && (Wn === null ? (Wn = new Set([this])) : Wn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
      }),
    n
  );
}
function op(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sw();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Sw.bind(null, e, t, n)), t.then(e, e));
}
function ip(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = hn(-1, 1)), (t.tag = 2), Bn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var aw = _n.ReactCurrentOwner,
  it = !1;
function et(e, t, n, r) {
  t.child = e === null ? cg(t, null, n, r) : wo(t, e.child, n, r);
}
function ap(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ao(t, o),
    (r = hd(e, t, n, r, i, o)),
    (n = md()),
    e !== null && !it
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), yn(e, t, o))
      : (he && n && nd(t), (t.flags |= 1), et(e, t, r, o), t.child)
  );
}
function lp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !xd(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ag(e, t, i, r, o))
      : ((e = Fs(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Ci), n(s, r) && e.ref === t.ref)) return yn(e, t, o);
  }
  return (t.flags |= 1), (e = Vn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Ag(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ci(i, r) && e.ref === t.ref)
      if (((it = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (it = !0);
      else return (t.lanes = e.lanes), yn(e, t, o);
  }
  return ic(e, t, n, r, o);
}
function Mg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ae(to, dt), (dt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          ae(to, dt),
          (dt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ae(to, dt),
        (dt |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), ae(to, dt), (dt |= r);
  return et(e, t, o, n), t.child;
}
function Lg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ic(e, t, n, r, o) {
  var i = at(n) ? vr : Je.current;
  return (
    (i = vo(t, i)),
    ao(t, o),
    (n = hd(e, t, n, r, i, o)),
    (r = md()),
    e !== null && !it
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), yn(e, t, o))
      : (he && r && nd(t), (t.flags |= 1), et(e, t, n, o), t.child)
  );
}
function up(e, t, n, r, o) {
  if (at(n)) {
    var i = !0;
    oa(t);
  } else i = !1;
  if ((ao(t, o), t.stateNode === null)) Ls(e, t), lg(t, n, r), rc(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? (u = Rt(u)) : ((u = at(n) ? vr : Je.current), (u = vo(t, u)));
    var d = n.getDerivedStateFromProps,
      p = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && ep(t, s, r, u)),
      (Tn = !1);
    var h = t.memoizedState;
    (s.state = h),
      ua(t, r, s, o),
      (l = t.memoizedState),
      a !== r || h !== l || st.current || Tn
        ? (typeof d == "function" && (nc(t, n, d, r), (l = t.memoizedState)),
          (a = Tn || Zf(t, n, a, r, h, l, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (s = t.stateNode),
      sg(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Ft(t.type, a)),
      (s.props = u),
      (p = t.pendingProps),
      (h = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null ? (l = Rt(l)) : ((l = at(n) ? vr : Je.current), (l = vo(t, l)));
    var y = n.getDerivedStateFromProps;
    (d = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
      ((a !== p || h !== l) && ep(t, s, r, l)),
      (Tn = !1),
      (h = t.memoizedState),
      (s.state = h),
      ua(t, r, s, o);
    var g = t.memoizedState;
    a !== p || h !== g || st.current || Tn
      ? (typeof y == "function" && (nc(t, n, y, r), (g = t.memoizedState)),
        (u = Tn || Zf(t, n, u, r, h, g, l) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, g, l),
              typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, g, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return sc(e, t, n, r, i, o);
}
function sc(e, t, n, r, o, i) {
  Lg(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && qf(t, n, !1), yn(e, t, i);
  (r = t.stateNode), (aw.current = t);
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s ? ((t.child = wo(t, e.child, null, i)), (t.child = wo(t, null, a, i))) : et(e, t, a, i),
    (t.memoizedState = r.state),
    o && qf(t, n, !0),
    t.child
  );
}
function $g(e) {
  var t = e.stateNode;
  t.pendingContext ? Gf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Gf(e, t.context, !1),
    cd(e, t.containerInfo);
}
function cp(e, t, n, r, o) {
  return yo(), od(o), (t.flags |= 256), et(e, t, n, r), t.child;
}
var ac = { dehydrated: null, treeContext: null, retryLane: 0 };
function lc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Dg(e, t, n) {
  var r = t.pendingProps,
    o = ge.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    ae(ge, o & 1),
    e === null)
  )
    return (
      ec(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = s)) : (i = Ba(s, r, 0, null)),
              (e = gr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = lc(n)),
              (t.memoizedState = ac),
              e)
            : yd(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null))) return lw(e, t, s, r, a, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (a = o.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
        : ((r = Vn(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Vn(a, i)) : ((i = gr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s = s === null ? lc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = ac),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Vn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function yd(e, t) {
  return (t = Ba({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function ys(e, t, n, r) {
  return (
    r !== null && od(r),
    wo(t, e.child, null, n),
    (e = yd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function lw(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ou(Error(T(422)))), ys(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ba({ mode: "visible", children: r.children }, o, 0, null)),
        (i = gr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && wo(t, e.child, null, s),
        (t.child.memoizedState = lc(s)),
        (t.memoizedState = ac),
        i);
  if (!(t.mode & 1)) return ys(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(T(419))), (r = ou(i, r, void 0)), ys(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), it || a)) {
    if (((r = De), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), vn(e, o), Bt(r, e, o, -1));
    }
    return Cd(), (r = ou(Error(T(421)))), ys(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = _w.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (pt = jn(o.nextSibling)),
      (ht = t),
      (he = !0),
      (Ut = null),
      e !== null && ((xt[It++] = ln), (xt[It++] = un), (xt[It++] = yr), (ln = e.id), (un = e.overflow), (yr = t)),
      (t = yd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function dp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), tc(e.return, t, n);
}
function iu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Fg(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((et(e, t, r.children, n), (r = ge.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && dp(e, n, t);
        else if (e.tag === 19) dp(e, n, t);
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
  if ((ae(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && ca(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          iu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ca(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        iu(t, !0, n, null, i);
        break;
      case "together":
        iu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ls(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yn(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Sr |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (e = t.child, n = Vn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Vn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function uw(e, t, n) {
  switch (t.tag) {
    case 3:
      $g(t), yo();
      break;
    case 5:
      dg(t);
      break;
    case 1:
      at(t.type) && oa(t);
      break;
    case 4:
      cd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ae(aa, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ae(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Dg(e, t, n)
          : (ae(ge, ge.current & 1), (e = yn(e, t, n)), e !== null ? e.sibling : null);
      ae(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ae(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Mg(e, t, n);
  }
  return yn(e, t, n);
}
var zg, uc, Ug, jg;
zg = function (e, t) {
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
uc = function () {};
Ug = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), hr(Zt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Ou(e, o)), (r = Ou(e, r)), (i = []);
        break;
      case "select":
        (o = ye({}, o, { value: void 0 })), (r = ye({}, r, { value: void 0 })), (i = []);
        break;
      case "textarea":
        (o = Mu(e, o)), (r = Mu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = na);
    }
    $u(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (vi.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (((a = o != null ? o[u] : void 0), r.hasOwnProperty(u) && l !== a && (l != null || a != null)))
        if (u === "style")
          if (a) {
            for (s in a) !a.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
            for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), (n[s] = l[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") || (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (vi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ce("scroll", e), i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
jg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ho(e, t) {
  if (!he)
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
function Qe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function cw(e, t, n) {
  var r = t.pendingProps;
  switch ((rd(t), t.tag)) {
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
      return Qe(t), null;
    case 1:
      return at(t.type) && ra(), Qe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        So(),
        de(st),
        de(Je),
        fd(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (gs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ut !== null && (vc(Ut), (Ut = null)))),
        uc(e, t),
        Qe(t),
        null
      );
    case 5:
      dd(t);
      var o = hr(Pi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ug(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return Qe(t), null;
        }
        if (((e = hr(Zt.current)), gs(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Xt] = t), (r[bi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ce("cancel", r), ce("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ce("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ei.length; o++) ce(ei[o], r);
              break;
            case "source":
              ce("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ce("error", r), ce("load", r);
              break;
            case "details":
              ce("toggle", r);
              break;
            case "input":
              Sf(r, i), ce("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }), ce("invalid", r);
              break;
            case "textarea":
              Ef(r, i), ce("invalid", r);
          }
          $u(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 && ms(r.textContent, a, e), (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 && ms(r.textContent, a, e), (o = ["children", "" + a]))
                : vi.hasOwnProperty(s) && a != null && s === "onScroll" && ce("scroll", r);
            }
          switch (n) {
            case "input":
              as(r), _f(r, i, !0);
              break;
            case "textarea":
              as(r), kf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = na);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = hm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Xt] = t),
            (e[bi] = r),
            zg(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Du(n, r)), n)) {
              case "dialog":
                ce("cancel", e), ce("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ce("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ei.length; o++) ce(ei[o], e);
                o = r;
                break;
              case "source":
                ce("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ce("error", e), ce("load", e), (o = r);
                break;
              case "details":
                ce("toggle", e), (o = r);
                break;
              case "input":
                Sf(e, r), (o = Ou(e, r)), ce("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = ye({}, r, { value: void 0 })), ce("invalid", e);
                break;
              case "textarea":
                Ef(e, r), (o = Mu(e, r)), ce("invalid", e);
                break;
              default:
                o = r;
            }
            $u(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? vm(e, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && mm(e, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && yi(e, l)
                    : typeof l == "number" && yi(e, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (vi.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && ce("scroll", e)
                      : l != null && Bc(e, i, l, s));
              }
            switch (n) {
              case "input":
                as(e), _f(e, r, !1);
                break;
              case "textarea":
                as(e), kf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Qn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? ro(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && ro(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = na);
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
      return Qe(t), null;
    case 6:
      if (e && t.stateNode != null) jg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = hr(Pi.current)), hr(Zt.current), gs(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[Xt] = t), (i = r.nodeValue !== n) && ((e = ht), e !== null))
          )
            switch (e.tag) {
              case 3:
                ms(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ms(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Xt] = t), (t.stateNode = r);
      }
      return Qe(t), null;
    case 13:
      if (
        (de(ge), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (he && pt !== null && t.mode & 1 && !(t.flags & 128)) og(), yo(), (t.flags |= 98560), (i = !1);
        else if (((i = gs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(T(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(T(317));
            i[Xt] = t;
          } else yo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Qe(t), (i = !1);
        } else Ut !== null && (vc(Ut), (Ut = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || ge.current & 1 ? Me === 0 && (Me = 3) : Cd())),
          t.updateQueue !== null && (t.flags |= 4),
          Qe(t),
          null);
    case 4:
      return So(), uc(e, t), e === null && xi(t.stateNode.containerInfo), Qe(t), null;
    case 10:
      return ad(t.type._context), Qe(t), null;
    case 17:
      return at(t.type) && ra(), Qe(t), null;
    case 19:
      if ((de(ge), (i = t.memoizedState), i === null)) return Qe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Ho(i, !1);
        else {
          if (Me !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = ca(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Ho(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return ae(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Ce() > Eo && ((t.flags |= 128), (r = !0), Ho(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ca(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ho(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !he)
            )
              return Qe(t), null;
          } else
            2 * Ce() - i.renderingStartTime > Eo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ho(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last), n !== null ? (n.sibling = s) : (t.child = s), (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = ge.current),
          ae(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (Qe(t), null);
    case 22:
    case 23:
      return (
        kd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? dt & 1073741824 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function dw(e, t) {
  switch ((rd(t), t.tag)) {
    case 1:
      return at(t.type) && ra(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        So(), de(st), de(Je), fd(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return dd(t), null;
    case 13:
      if ((de(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        yo();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return de(ge), null;
    case 4:
      return So(), null;
    case 10:
      return ad(t.type._context), null;
    case 22:
    case 23:
      return kd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ws = !1,
  Xe = !1,
  fw = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function eo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ee(e, t, r);
      }
    else n.current = null;
}
function cc(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var fp = !1;
function pw(e, t) {
  if (((Gu = Zs), (e = Vm()), td(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            d = 0,
            p = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              p !== n || (o !== 0 && p.nodeType !== 3) || (a = s + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (l = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (y = p.firstChild) !== null;

            )
              (h = p), (p = y);
            for (;;) {
              if (p === e) break t;
              if ((h === n && ++u === o && (a = s), h === i && ++d === r && (l = s), (y = p.nextSibling) !== null))
                break;
              (p = h), (h = p.parentNode);
            }
            p = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (qu = { focusedElem: e, selectionRange: n }, Zs = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var g = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    x = g.memoizedState,
                    m = t.stateNode,
                    c = m.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ft(t.type, v), x);
                  m.__reactInternalSnapshotBeforeUpdate = c;
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
                throw Error(T(163));
            }
        } catch (w) {
          Ee(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (g = fp), (fp = !1), g;
}
function ci(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && cc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ua(e, t) {
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
function dc(e) {
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
function Bg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[Xt], delete t[bi], delete t[Xu], delete t[Q1], delete t[Y1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Wg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wg(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = na));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fc(e, t, n), e = e.sibling; e !== null; ) fc(e, t, n), (e = e.sibling);
}
function pc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pc(e, t, n), e = e.sibling; e !== null; ) pc(e, t, n), (e = e.sibling);
}
var We = null,
  zt = !1;
function Cn(e, t, n) {
  for (n = n.child; n !== null; ) Hg(e, t, n), (n = n.sibling);
}
function Hg(e, t, n) {
  if (Jt && typeof Jt.onCommitFiberUnmount == "function")
    try {
      Jt.onCommitFiberUnmount(Na, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Xe || eo(n, t);
    case 6:
      var r = We,
        o = zt;
      (We = null),
        Cn(e, t, n),
        (We = r),
        (zt = o),
        We !== null &&
          (zt
            ? ((e = We), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : We.removeChild(n.stateNode));
      break;
    case 18:
      We !== null &&
        (zt
          ? ((e = We), (n = n.stateNode), e.nodeType === 8 ? Jl(e.parentNode, n) : e.nodeType === 1 && Jl(e, n), Ei(e))
          : Jl(We, n.stateNode));
      break;
    case 4:
      (r = We), (o = zt), (We = n.stateNode.containerInfo), (zt = !0), Cn(e, t, n), (We = r), (zt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Xe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag), s !== void 0 && (i & 2 || i & 4) && cc(n, t, s), (o = o.next);
        } while (o !== r);
      }
      Cn(e, t, n);
      break;
    case 1:
      if (!Xe && (eo(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          Ee(n, t, a);
        }
      Cn(e, t, n);
      break;
    case 21:
      Cn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((Xe = (r = Xe) || n.memoizedState !== null), Cn(e, t, n), (Xe = r)) : Cn(e, t, n);
      break;
    default:
      Cn(e, t, n);
  }
}
function hp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new fw()),
      t.forEach(function (r) {
        var o = Ew.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Dt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (We = a.stateNode), (zt = !1);
              break e;
            case 3:
              (We = a.stateNode.containerInfo), (zt = !0);
              break e;
            case 4:
              (We = a.stateNode.containerInfo), (zt = !0);
              break e;
          }
          a = a.return;
        }
        if (We === null) throw Error(T(160));
        Hg(i, s, o), (We = null), (zt = !1);
        var l = o.alternate;
        l !== null && (l.return = null), (o.return = null);
      } catch (u) {
        Ee(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Vg(t, e), (t = t.sibling);
}
function Vg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Dt(t, e), Gt(e), r & 4)) {
        try {
          ci(3, e, e.return), Ua(3, e);
        } catch (v) {
          Ee(e, e.return, v);
        }
        try {
          ci(5, e, e.return);
        } catch (v) {
          Ee(e, e.return, v);
        }
      }
      break;
    case 1:
      Dt(t, e), Gt(e), r & 512 && n !== null && eo(n, n.return);
      break;
    case 5:
      if ((Dt(t, e), Gt(e), r & 512 && n !== null && eo(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          yi(o, "");
        } catch (v) {
          Ee(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && fm(o, i), Du(a, s);
            var u = Du(a, i);
            for (s = 0; s < l.length; s += 2) {
              var d = l[s],
                p = l[s + 1];
              d === "style"
                ? vm(o, p)
                : d === "dangerouslySetInnerHTML"
                ? mm(o, p)
                : d === "children"
                ? yi(o, p)
                : Bc(o, d, p, u);
            }
            switch (a) {
              case "input":
                Nu(o, i);
                break;
              case "textarea":
                pm(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? ro(o, !!i.multiple, y, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? ro(o, !!i.multiple, i.defaultValue, !0)
                      : ro(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[bi] = i;
          } catch (v) {
            Ee(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Dt(t, e), Gt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          Ee(e, e.return, v);
        }
      }
      break;
    case 3:
      if ((Dt(t, e), Gt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Ei(t.containerInfo);
        } catch (v) {
          Ee(e, e.return, v);
        }
      break;
    case 4:
      Dt(t, e), Gt(e);
      break;
    case 13:
      Dt(t, e),
        Gt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (_d = Ce())),
        r & 4 && hp(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Xe = (u = Xe) || d), Dt(t, e), (Xe = u)) : Dt(t, e),
        Gt(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && e.mode & 1))
          for (A = e, d = e.child; d !== null; ) {
            for (p = A = d; A !== null; ) {
              switch (((h = A), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ci(4, h, h.return);
                  break;
                case 1:
                  eo(h, h.return);
                  var g = h.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r), (g.props = t.memoizedProps), (g.state = t.memoizedState), g.componentWillUnmount();
                    } catch (v) {
                      Ee(r, n, v);
                    }
                  }
                  break;
                case 5:
                  eo(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    gp(p);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (A = y)) : gp(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = p.stateNode),
                      (l = p.memoizedProps.style),
                      (s = l != null && l.hasOwnProperty("display") ? l.display : null),
                      (a.style.display = gm("display", s)));
              } catch (v) {
                Ee(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (v) {
                Ee(e, e.return, v);
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
      Dt(t, e), Gt(e), r & 4 && hp(e);
      break;
    case 21:
      break;
    default:
      Dt(t, e), Gt(e);
  }
}
function Gt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (yi(o, ""), (r.flags &= -33));
          var i = pp(e);
          pc(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = pp(e);
          fc(e, a, s);
          break;
        default:
          throw Error(T(161));
      }
    } catch (l) {
      Ee(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hw(e, t, n) {
  (A = e), Kg(e);
}
function Kg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var o = A,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ws;
      if (!s) {
        var a = o.alternate,
          l = (a !== null && a.memoizedState !== null) || Xe;
        a = ws;
        var u = Xe;
        if (((ws = s), (Xe = l) && !u))
          for (A = o; A !== null; )
            (s = A),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null ? vp(o) : l !== null ? ((l.return = s), (A = l)) : vp(o);
        for (; i !== null; ) (A = i), Kg(i), (i = i.sibling);
        (A = o), (ws = a), (Xe = u);
      }
      mp(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (A = i)) : mp(e);
  }
}
function mp(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xe || Ua(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Xe)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : Ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Jf(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Jf(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                    p !== null && Ei(p);
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
              throw Error(T(163));
          }
        Xe || (t.flags & 512 && dc(t));
      } catch (h) {
        Ee(t, t.return, h);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function gp(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function vp(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ua(4, t);
          } catch (l) {
            Ee(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ee(t, o, l);
            }
          }
          var i = t.return;
          try {
            dc(t);
          } catch (l) {
            Ee(t, i, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            dc(t);
          } catch (l) {
            Ee(t, s, l);
          }
      }
    } catch (l) {
      Ee(t, t.return, l);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var mw = Math.ceil,
  pa = _n.ReactCurrentDispatcher,
  wd = _n.ReactCurrentOwner,
  Pt = _n.ReactCurrentBatchConfig,
  X = 0,
  De = null,
  Pe = null,
  Ve = 0,
  dt = 0,
  to = Zn(0),
  Me = 0,
  Ai = null,
  Sr = 0,
  ja = 0,
  Sd = 0,
  di = null,
  ot = null,
  _d = 0,
  Eo = 1 / 0,
  sn = null,
  ha = !1,
  hc = null,
  Wn = null,
  Ss = !1,
  Dn = null,
  ma = 0,
  fi = 0,
  mc = null,
  $s = -1,
  Ds = 0;
function tt() {
  return X & 6 ? Ce() : $s !== -1 ? $s : ($s = Ce());
}
function Hn(e) {
  return e.mode & 1
    ? X & 2 && Ve !== 0
      ? Ve & -Ve
      : J1.transition !== null
      ? (Ds === 0 && (Ds = Pm()), Ds)
      : ((e = ee), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : $m(e.type))), e)
    : 1;
}
function Bt(e, t, n, r) {
  if (50 < fi) throw ((fi = 0), (mc = null), Error(T(185)));
  Wi(e, n, r),
    (!(X & 2) || e !== De) &&
      (e === De && (!(X & 2) && (ja |= n), Me === 4 && Rn(e, Ve)),
      lt(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((Eo = Ce() + 500), Da && er()));
}
function lt(e, t) {
  var n = e.callbackNode;
  Jy(e, t);
  var r = Js(e, e === De ? Ve : 0);
  if (r === 0) n !== null && If(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && If(n), t === 1))
      e.tag === 0 ? X1(yp.bind(null, e)) : tg(yp.bind(null, e)),
        G1(function () {
          !(X & 6) && er();
        }),
        (n = null);
    else {
      switch (Rm(r)) {
        case 1:
          n = Gc;
          break;
        case 4:
          n = bm;
          break;
        case 16:
          n = Xs;
          break;
        case 536870912:
          n = Tm;
          break;
        default:
          n = Xs;
      }
      n = ev(n, Gg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Gg(e, t) {
  if ((($s = -1), (Ds = 0), X & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (lo() && e.callbackNode !== n) return null;
  var r = Js(e, e === De ? Ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ga(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var i = Qg();
    (De !== e || Ve !== t) && ((sn = null), (Eo = Ce() + 500), mr(e, t));
    do
      try {
        yw();
        break;
      } catch (a) {
        qg(e, a);
      }
    while (!0);
    sd(), (pa.current = i), (X = o), Pe !== null ? (t = 0) : ((De = null), (Ve = 0), (t = Me));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Bu(e)), o !== 0 && ((r = o), (t = gc(e, o)))), t === 1))
      throw ((n = Ai), mr(e, 0), Rn(e, r), lt(e, Ce()), n);
    if (t === 6) Rn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !gw(o) &&
          ((t = ga(e, r)), t === 2 && ((i = Bu(e)), i !== 0 && ((r = i), (t = gc(e, i)))), t === 1))
      )
        throw ((n = Ai), mr(e, 0), Rn(e, r), lt(e, Ce()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          ar(e, ot, sn);
          break;
        case 3:
          if ((Rn(e, r), (r & 130023424) === r && ((t = _d + 500 - Ce()), 10 < t))) {
            if (Js(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              tt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Yu(ar.bind(null, e, ot, sn), t);
            break;
          }
          ar(e, ot, sn);
          break;
        case 4:
          if ((Rn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - jt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Ce() - r),
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
                : 1960 * mw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Yu(ar.bind(null, e, ot, sn), r);
            break;
          }
          ar(e, ot, sn);
          break;
        case 5:
          ar(e, ot, sn);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return lt(e, Ce()), e.callbackNode === n ? Gg.bind(null, e) : null;
}
function gc(e, t) {
  var n = di;
  return (
    e.current.memoizedState.isDehydrated && (mr(e, t).flags |= 256),
    (e = ga(e, t)),
    e !== 2 && ((t = ot), (ot = n), t !== null && vc(t)),
    e
  );
}
function vc(e) {
  ot === null ? (ot = e) : ot.push.apply(ot, e);
}
function gw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Wt(i(), o)) return !1;
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
function Rn(e, t) {
  for (t &= ~Sd, t &= ~ja, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - jt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function yp(e) {
  if (X & 6) throw Error(T(327));
  lo();
  var t = Js(e, 0);
  if (!(t & 1)) return lt(e, Ce()), null;
  var n = ga(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Bu(e);
    r !== 0 && ((t = r), (n = gc(e, r)));
  }
  if (n === 1) throw ((n = Ai), mr(e, 0), Rn(e, t), lt(e, Ce()), n);
  if (n === 6) throw Error(T(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), ar(e, ot, sn), lt(e, Ce()), null;
}
function Ed(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((Eo = Ce() + 500), Da && er());
  }
}
function _r(e) {
  Dn !== null && Dn.tag === 0 && !(X & 6) && lo();
  var t = X;
  X |= 1;
  var n = Pt.transition,
    r = ee;
  try {
    if (((Pt.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (Pt.transition = n), (X = t), !(X & 6) && er();
  }
}
function kd() {
  (dt = to.current), de(to);
}
function mr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), K1(n)), Pe !== null))
    for (n = Pe.return; n !== null; ) {
      var r = n;
      switch ((rd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ra();
          break;
        case 3:
          So(), de(st), de(Je), fd();
          break;
        case 5:
          dd(r);
          break;
        case 4:
          So();
          break;
        case 13:
          de(ge);
          break;
        case 19:
          de(ge);
          break;
        case 10:
          ad(r.type._context);
          break;
        case 22:
        case 23:
          kd();
      }
      n = n.return;
    }
  if (
    ((De = e),
    (Pe = e = Vn(e.current, null)),
    (Ve = dt = t),
    (Me = 0),
    (Ai = null),
    (Sd = ja = Sr = 0),
    (ot = di = null),
    pr !== null)
  ) {
    for (t = 0; t < pr.length; t++)
      if (((n = pr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    pr = null;
  }
  return e;
}
function qg(e, t) {
  do {
    var n = Pe;
    try {
      if ((sd(), (As.current = fa), da)) {
        for (var r = ve.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        da = !1;
      }
      if (
        ((wr = 0), ($e = Ae = ve = null), (ui = !1), (Ri = 0), (wd.current = null), n === null || n.return === null)
      ) {
        (Me = 1), (Ai = t), (Pe = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (((t = Ve), (a.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
          var u = l,
            d = a,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue), (d.memoizedState = h.memoizedState), (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = ip(s);
          if (y !== null) {
            (y.flags &= -257), sp(y, s, a, i, t), y.mode & 1 && op(i, u, t), (t = y), (l = u);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else g.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              op(i, u, t), Cd();
              break e;
            }
            l = Error(T(426));
          }
        } else if (he && a.mode & 1) {
          var x = ip(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256), sp(x, s, a, i, t), od(_o(l, a));
            break e;
          }
        }
        (i = l = _o(l, a)), Me !== 4 && (Me = 2), di === null ? (di = [i]) : di.push(i), (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = Og(i, l, t);
              Xf(i, m);
              break e;
            case 1:
              a = l;
              var c = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null && typeof f.componentDidCatch == "function" && (Wn === null || !Wn.has(f))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var w = Ng(i, a, t);
                Xf(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Xg(n);
    } catch (S) {
      (t = S), Pe === n && n !== null && (Pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Qg() {
  var e = pa.current;
  return (pa.current = fa), e === null ? fa : e;
}
function Cd() {
  (Me === 0 || Me === 3 || Me === 2) && (Me = 4), De === null || (!(Sr & 268435455) && !(ja & 268435455)) || Rn(De, Ve);
}
function ga(e, t) {
  var n = X;
  X |= 2;
  var r = Qg();
  (De !== e || Ve !== t) && ((sn = null), mr(e, t));
  do
    try {
      vw();
      break;
    } catch (o) {
      qg(e, o);
    }
  while (!0);
  if ((sd(), (X = n), (pa.current = r), Pe !== null)) throw Error(T(261));
  return (De = null), (Ve = 0), Me;
}
function vw() {
  for (; Pe !== null; ) Yg(Pe);
}
function yw() {
  for (; Pe !== null && !Wy(); ) Yg(Pe);
}
function Yg(e) {
  var t = Zg(e.alternate, e, dt);
  (e.memoizedProps = e.pendingProps), t === null ? Xg(e) : (Pe = t), (wd.current = null);
}
function Xg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = dw(n, t)), n !== null)) {
        (n.flags &= 32767), (Pe = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Me = 6), (Pe = null);
        return;
      }
    } else if (((n = cw(n, t, dt)), n !== null)) {
      Pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Pe = t;
      return;
    }
    Pe = t = e;
  } while (t !== null);
  Me === 0 && (Me = 5);
}
function ar(e, t, n) {
  var r = ee,
    o = Pt.transition;
  try {
    (Pt.transition = null), (ee = 1), ww(e, t, n, r);
  } finally {
    (Pt.transition = o), (ee = r);
  }
  return null;
}
function ww(e, t, n, r) {
  do lo();
  while (Dn !== null);
  if (X & 6) throw Error(T(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Zy(e, i),
    e === De && ((Pe = De = null), (Ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ss ||
      ((Ss = !0),
      ev(Xs, function () {
        return lo(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Pt.transition), (Pt.transition = null);
    var s = ee;
    ee = 1;
    var a = X;
    (X |= 4),
      (wd.current = null),
      pw(e, n),
      Vg(n, e),
      z1(qu),
      (Zs = !!Gu),
      (qu = Gu = null),
      (e.current = n),
      hw(n),
      Hy(),
      (X = a),
      (ee = s),
      (Pt.transition = i);
  } else e.current = n;
  if (
    (Ss && ((Ss = !1), (Dn = e), (ma = o)),
    (i = e.pendingLanes),
    i === 0 && (Wn = null),
    Gy(n.stateNode),
    lt(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ha) throw ((ha = !1), (e = hc), (hc = null), e);
  return (
    ma & 1 && e.tag !== 0 && lo(),
    (i = e.pendingLanes),
    i & 1 ? (e === mc ? fi++ : ((fi = 0), (mc = e))) : (fi = 0),
    er(),
    null
  );
}
function lo() {
  if (Dn !== null) {
    var e = Rm(ma),
      t = Pt.transition,
      n = ee;
    try {
      if (((Pt.transition = null), (ee = 16 > e ? 16 : e), Dn === null)) var r = !1;
      else {
        if (((e = Dn), (Dn = null), (ma = 0), X & 6)) throw Error(T(331));
        var o = X;
        for (X |= 4, A = e.current; A !== null; ) {
          var i = A,
            s = i.child;
          if (A.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (A = u; A !== null; ) {
                  var d = A;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ci(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (A = p);
                  else
                    for (; A !== null; ) {
                      d = A;
                      var h = d.sibling,
                        y = d.return;
                      if ((Bg(d), d === u)) {
                        A = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (A = h);
                        break;
                      }
                      A = y;
                    }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              A = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (A = s);
          else
            e: for (; A !== null; ) {
              if (((i = A), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ci(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (A = m);
                break e;
              }
              A = i.return;
            }
        }
        var c = e.current;
        for (A = c; A !== null; ) {
          s = A;
          var f = s.child;
          if (s.subtreeFlags & 2064 && f !== null) (f.return = s), (A = f);
          else
            e: for (s = c; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ua(9, a);
                  }
                } catch (S) {
                  Ee(a, a.return, S);
                }
              if (a === s) {
                A = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (A = w);
                break e;
              }
              A = a.return;
            }
        }
        if (((X = o), er(), Jt && typeof Jt.onPostCommitFiberRoot == "function"))
          try {
            Jt.onPostCommitFiberRoot(Na, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (Pt.transition = t);
    }
  }
  return !1;
}
function wp(e, t, n) {
  (t = _o(n, t)), (t = Og(e, t, 1)), (e = Bn(e, t, 1)), (t = tt()), e !== null && (Wi(e, 1, t), lt(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) wp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        wp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (Wn === null || !Wn.has(r)))
        ) {
          (e = _o(n, e)), (e = Ng(t, e, 1)), (t = Bn(t, e, 1)), (e = tt()), t !== null && (Wi(t, 1, e), lt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Sw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = tt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    De === e &&
      (Ve & n) === n &&
      (Me === 4 || (Me === 3 && (Ve & 130023424) === Ve && 500 > Ce() - _d) ? mr(e, 0) : (Sd |= n)),
    lt(e, t);
}
function Jg(e, t) {
  t === 0 && (e.mode & 1 ? ((t = cs), (cs <<= 1), !(cs & 130023424) && (cs = 4194304)) : (t = 1));
  var n = tt();
  (e = vn(e, t)), e !== null && (Wi(e, t, n), lt(e, n));
}
function _w(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Jg(e, n);
}
function Ew(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Jg(e, n);
}
var Zg;
Zg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || st.current) it = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (it = !1), uw(e, t, n);
      it = !!(e.flags & 131072);
    }
  else (it = !1), he && t.flags & 1048576 && ng(t, sa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ls(e, t), (e = t.pendingProps);
      var o = vo(t, Je.current);
      ao(t, n), (o = hd(null, t, r, e, o, n));
      var i = md();
      return (
        (t.flags |= 1),
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            at(r) ? ((i = !0), oa(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            ud(t),
            (o.updater = Fa),
            (t.stateNode = o),
            (o._reactInternals = t),
            rc(t, r, e, n),
            (t = sc(null, t, r, !0, i, n)))
          : ((t.tag = 0), he && i && nd(t), et(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ls(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Cw(r)),
          (e = Ft(r, e)),
          o)
        ) {
          case 0:
            t = ic(null, t, r, e, n);
            break e;
          case 1:
            t = up(null, t, r, e, n);
            break e;
          case 11:
            t = ap(null, t, r, e, n);
            break e;
          case 14:
            t = lp(null, t, r, Ft(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Ft(r, o)), ic(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Ft(r, o)), up(e, t, r, o, n);
    case 3:
      e: {
        if (($g(t), e === null)) throw Error(T(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), sg(e, t), ua(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = _o(Error(T(423)), t)), (t = cp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = _o(Error(T(424)), t)), (t = cp(e, t, r, n, o));
            break e;
          } else
            for (
              pt = jn(t.stateNode.containerInfo.firstChild),
                ht = t,
                he = !0,
                Ut = null,
                n = cg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((yo(), r === o)) {
            t = yn(e, t, n);
            break e;
          }
          et(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        dg(t),
        e === null && ec(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        Qu(r, o) ? (s = null) : i !== null && Qu(r, i) && (t.flags |= 32),
        Lg(e, t),
        et(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ec(t), null;
    case 13:
      return Dg(e, t, n);
    case 4:
      return (
        cd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = wo(t, null, r, n)) : et(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Ft(r, o)), ap(e, t, r, o, n);
    case 7:
      return et(e, t, t.pendingProps, n), t.child;
    case 8:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return et(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ae(aa, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Wt(i.value, s)) {
            if (i.children === o.children && !st.current) {
              t = yn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      (l = hn(-1, n & -n)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null ? (l.next = l) : ((l.next = d.next), (d.next = l)), (u.pending = l);
                      }
                    }
                    (i.lanes |= n), (l = i.alternate), l !== null && (l.lanes |= n), tc(i.return, n, t), (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(T(341));
                (s.lanes |= n), (a = s.alternate), a !== null && (a.lanes |= n), tc(s, n, t), (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        et(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ao(t, n),
        (o = Rt(o)),
        (r = r(o)),
        (t.flags |= 1),
        et(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = Ft(r, t.pendingProps)), (o = Ft(r.type, o)), lp(e, t, r, o, n);
    case 15:
      return Ag(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ft(r, o)),
        Ls(e, t),
        (t.tag = 1),
        at(r) ? ((e = !0), oa(t)) : (e = !1),
        ao(t, n),
        lg(t, r, o),
        rc(t, r, o, n),
        sc(null, t, r, !0, e, n)
      );
    case 19:
      return Fg(e, t, n);
    case 22:
      return Mg(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function ev(e, t) {
  return Im(e, t);
}
function kw(e, t, n, r) {
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
function Tt(e, t, n, r) {
  return new kw(e, t, n, r);
}
function xd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Cw(e) {
  if (typeof e == "function") return xd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hc)) return 11;
    if (e === Vc) return 14;
  }
  return 2;
}
function Vn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Tt(e.tag, t, e.key, e.mode)),
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
function Fs(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) xd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Vr:
        return gr(n.children, o, i, t);
      case Wc:
        (s = 8), (o |= 8);
        break;
      case bu:
        return (e = Tt(12, n, t, o | 2)), (e.elementType = bu), (e.lanes = i), e;
      case Tu:
        return (e = Tt(13, n, t, o)), (e.elementType = Tu), (e.lanes = i), e;
      case Pu:
        return (e = Tt(19, n, t, o)), (e.elementType = Pu), (e.lanes = i), e;
      case um:
        return Ba(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case am:
              s = 10;
              break e;
            case lm:
              s = 9;
              break e;
            case Hc:
              s = 11;
              break e;
            case Vc:
              s = 14;
              break e;
            case bn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (t = Tt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function gr(e, t, n, r) {
  return (e = Tt(7, e, r, t)), (e.lanes = n), e;
}
function Ba(e, t, n, r) {
  return (e = Tt(22, e, r, t)), (e.elementType = um), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function su(e, t, n) {
  return (e = Tt(6, e, null, t)), (e.lanes = n), e;
}
function au(e, t, n) {
  return (
    (t = Tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function xw(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = jl(0)),
    (this.expirationTimes = jl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = jl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Id(e, t, n, r, o, i, s, a, l) {
  return (
    (e = new xw(e, t, n, a, l)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Tt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ud(i),
    e
  );
}
function Iw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Hr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function tv(e) {
  if (!e) return Yn;
  e = e._reactInternals;
  e: {
    if (Tr(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (at(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (at(n)) return eg(e, n, t);
  }
  return t;
}
function nv(e, t, n, r, o, i, s, a, l) {
  return (
    (e = Id(n, r, !0, e, o, i, s, a, l)),
    (e.context = tv(null)),
    (n = e.current),
    (r = tt()),
    (o = Hn(n)),
    (i = hn(r, o)),
    (i.callback = t ?? null),
    Bn(n, i, o),
    (e.current.lanes = o),
    Wi(e, o, r),
    lt(e, r),
    e
  );
}
function Wa(e, t, n, r) {
  var o = t.current,
    i = tt(),
    s = Hn(o);
  return (
    (n = tv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = hn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Bn(o, t, s)),
    e !== null && (Bt(e, o, s, i), Ns(e, o, s)),
    s
  );
}
function va(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Sp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function bd(e, t) {
  Sp(e, t), (e = e.alternate) && Sp(e, t);
}
function bw() {
  return null;
}
var rv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Td(e) {
  this._internalRoot = e;
}
Ha.prototype.render = Td.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Wa(e, t, null, null);
};
Ha.prototype.unmount = Td.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _r(function () {
      Wa(null, e, null, null);
    }),
      (t[gn] = null);
  }
};
function Ha(e) {
  this._internalRoot = e;
}
Ha.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Am();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pn.length && t !== 0 && t < Pn[n].priority; n++);
    Pn.splice(n, 0, e), n === 0 && Lm(e);
  }
};
function Pd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Va(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function _p() {}
function Tw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = va(s);
        i.call(u);
      };
    }
    var s = nv(t, r, e, 0, null, !1, !1, "", _p);
    return (e._reactRootContainer = s), (e[gn] = s.current), xi(e.nodeType === 8 ? e.parentNode : e), _r(), s;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = va(l);
      a.call(u);
    };
  }
  var l = Id(e, 0, !1, null, null, !1, !1, "", _p);
  return (
    (e._reactRootContainer = l),
    (e[gn] = l.current),
    xi(e.nodeType === 8 ? e.parentNode : e),
    _r(function () {
      Wa(t, l, n, r);
    }),
    l
  );
}
function Ka(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var l = va(s);
        a.call(l);
      };
    }
    Wa(t, s, e, o);
  } else s = Tw(n, t, e, o, r);
  return va(s);
}
Om = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Zo(t.pendingLanes);
        n !== 0 && (qc(t, n | 1), lt(t, Ce()), !(X & 6) && ((Eo = Ce() + 500), er()));
      }
      break;
    case 13:
      _r(function () {
        var r = vn(e, 1);
        if (r !== null) {
          var o = tt();
          Bt(r, e, 1, o);
        }
      }),
        bd(e, 1);
  }
};
Qc = function (e) {
  if (e.tag === 13) {
    var t = vn(e, 134217728);
    if (t !== null) {
      var n = tt();
      Bt(t, e, 134217728, n);
    }
    bd(e, 134217728);
  }
};
Nm = function (e) {
  if (e.tag === 13) {
    var t = Hn(e),
      n = vn(e, t);
    if (n !== null) {
      var r = tt();
      Bt(n, e, t, r);
    }
    bd(e, t);
  }
};
Am = function () {
  return ee;
};
Mm = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
zu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Nu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = $a(r);
            if (!o) throw Error(T(90));
            dm(r), Nu(r, o);
          }
        }
      }
      break;
    case "textarea":
      pm(e, n);
      break;
    case "select":
      (t = n.value), t != null && ro(e, !!n.multiple, t, !1);
  }
};
Sm = Ed;
_m = _r;
var Pw = { usingClientEntryPoint: !1, Events: [Vi, Qr, $a, ym, wm, Ed] },
  Vo = { findFiberByHostInstance: fr, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  Rw = {
    bundleType: Vo.bundleType,
    version: Vo.version,
    rendererPackageName: Vo.rendererPackageName,
    rendererConfig: Vo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _n.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Cm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Vo.findFiberByHostInstance || bw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_s.isDisabled && _s.supportsFiber)
    try {
      (Na = _s.inject(Rw)), (Jt = _s);
    } catch {}
}
wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pw;
wt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Pd(t)) throw Error(T(200));
  return Iw(e, t, null, n);
};
wt.createRoot = function (e, t) {
  if (!Pd(e)) throw Error(T(299));
  var n = !1,
    r = "",
    o = rv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Id(e, 1, !1, null, null, n, !1, r, o)),
    (e[gn] = t.current),
    xi(e.nodeType === 8 ? e.parentNode : e),
    new Td(t)
  );
};
wt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(T(188)) : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = Cm(t)), (e = e === null ? null : e.stateNode), e;
};
wt.flushSync = function (e) {
  return _r(e);
};
wt.hydrate = function (e, t, n) {
  if (!Va(t)) throw Error(T(200));
  return Ka(null, e, t, !0, n);
};
wt.hydrateRoot = function (e, t, n) {
  if (!Pd(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = rv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = nv(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[gn] = t.current),
    xi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ha(t);
};
wt.render = function (e, t, n) {
  if (!Va(t)) throw Error(T(200));
  return Ka(null, e, t, !1, n);
};
wt.unmountComponentAtNode = function (e) {
  if (!Va(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (_r(function () {
        Ka(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[gn] = null);
        });
      }),
      !0)
    : !1;
};
wt.unstable_batchedUpdates = Ed;
wt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Va(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Ka(e, t, n, !1, r);
};
wt.version = "18.2.0-next-9e3b772b8-20220608";
function ov() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ov);
    } catch (e) {
      console.error(e);
    }
}
ov(), (nm.exports = wt);
var Rd = nm.exports;
const Es = Vh(Rd);
var Ep = Rd;
(xu.createRoot = Ep.createRoot), (xu.hydrateRoot = Ep.hydrateRoot);
const Ow = "https://bfm471.github.io/pilvipalvelutTehtava/tehtavat/Vko4/assets/react-CHdo91hT.svg",
  Nw = "https://bfm471.github.io/pilvipalvelutTehtava/tehtavat/Vko4/vite.svg";
var kp = {};
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
 */ const iv = function (e) {
    const t = [];
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      let o = e.charCodeAt(r);
      o < 128
        ? (t[n++] = o)
        : o < 2048
        ? ((t[n++] = (o >> 6) | 192), (t[n++] = (o & 63) | 128))
        : (o & 64512) === 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) === 56320
        ? ((o = 65536 + ((o & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
          (t[n++] = (o >> 18) | 240),
          (t[n++] = ((o >> 12) & 63) | 128),
          (t[n++] = ((o >> 6) & 63) | 128),
          (t[n++] = (o & 63) | 128))
        : ((t[n++] = (o >> 12) | 224), (t[n++] = ((o >> 6) & 63) | 128), (t[n++] = (o & 63) | 128));
    }
    return t;
  },
  Aw = function (e) {
    const t = [];
    let n = 0,
      r = 0;
    for (; n < e.length; ) {
      const o = e[n++];
      if (o < 128) t[r++] = String.fromCharCode(o);
      else if (o > 191 && o < 224) {
        const i = e[n++];
        t[r++] = String.fromCharCode(((o & 31) << 6) | (i & 63));
      } else if (o > 239 && o < 365) {
        const i = e[n++],
          s = e[n++],
          a = e[n++],
          l = (((o & 7) << 18) | ((i & 63) << 12) | ((s & 63) << 6) | (a & 63)) - 65536;
        (t[r++] = String.fromCharCode(55296 + (l >> 10))), (t[r++] = String.fromCharCode(56320 + (l & 1023)));
      } else {
        const i = e[n++],
          s = e[n++];
        t[r++] = String.fromCharCode(((o & 15) << 12) | ((i & 63) << 6) | (s & 63));
      }
    }
    return t.join("");
  },
  sv = {
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
      for (let o = 0; o < e.length; o += 3) {
        const i = e[o],
          s = o + 1 < e.length,
          a = s ? e[o + 1] : 0,
          l = o + 2 < e.length,
          u = l ? e[o + 2] : 0,
          d = i >> 2,
          p = ((i & 3) << 4) | (a >> 4);
        let h = ((a & 15) << 2) | (u >> 6),
          y = u & 63;
        l || ((y = 64), s || (h = 64)), r.push(n[d], n[p], n[h], n[y]);
      }
      return r.join("");
    },
    encodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(iv(e), t);
    },
    decodeString(e, t) {
      return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : Aw(this.decodeStringToByteArray(e, t));
    },
    decodeStringToByteArray(e, t) {
      this.init_();
      const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let o = 0; o < e.length; ) {
        const i = n[e.charAt(o++)],
          a = o < e.length ? n[e.charAt(o)] : 0;
        ++o;
        const u = o < e.length ? n[e.charAt(o)] : 64;
        ++o;
        const p = o < e.length ? n[e.charAt(o)] : 64;
        if ((++o, i == null || a == null || u == null || p == null)) throw new Mw();
        const h = (i << 2) | (a >> 4);
        if ((r.push(h), u !== 64)) {
          const y = ((a << 4) & 240) | (u >> 2);
          if ((r.push(y), p !== 64)) {
            const g = ((u << 6) & 192) | p;
            r.push(g);
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
class Mw extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const Lw = function (e) {
    const t = iv(e);
    return sv.encodeByteArray(t, !0);
  },
  av = function (e) {
    return Lw(e).replace(/\./g, "");
  },
  lv = function (e) {
    try {
      return sv.decodeString(e, !0);
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
 */ function $w() {
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
 */ const Dw = () => $w().__FIREBASE_DEFAULTS__,
  Fw = () => {
    if (typeof process > "u" || typeof kp > "u") return;
    const e = kp.__FIREBASE_DEFAULTS__;
    if (e) return JSON.parse(e);
  },
  zw = () => {
    if (typeof document > "u") return;
    let e;
    try {
      e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = e && lv(e[1]);
    return t && JSON.parse(t);
  },
  Od = () => {
    try {
      return Dw() || Fw() || zw();
    } catch (e) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
      return;
    }
  },
  Uw = (e) => {
    var t, n;
    return (n = (t = Od()) === null || t === void 0 ? void 0 : t.emulatorHosts) === null || n === void 0
      ? void 0
      : n[e];
  },
  uv = () => {
    var e;
    return (e = Od()) === null || e === void 0 ? void 0 : e.config;
  },
  cv = (e) => {
    var t;
    return (t = Od()) === null || t === void 0 ? void 0 : t[`_${e}`];
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
 */ class jw {
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
 */ function Ze() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string" ? navigator.userAgent : "";
}
function Bw() {
  return (
    typeof window < "u" &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())
  );
}
function Ww() {
  const e = typeof chrome == "object" ? chrome.runtime : typeof browser == "object" ? browser.runtime : void 0;
  return typeof e == "object" && e.id !== void 0;
}
function Hw() {
  return typeof navigator == "object" && navigator.product === "ReactNative";
}
function Vw() {
  const e = Ze();
  return e.indexOf("MSIE ") >= 0 || e.indexOf("Trident/") >= 0;
}
function Kw() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Gw() {
  return new Promise((e, t) => {
    try {
      let n = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        o = self.indexedDB.open(r);
      (o.onsuccess = () => {
        o.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0);
      }),
        (o.onupgradeneeded = () => {
          n = !1;
        }),
        (o.onerror = () => {
          var i;
          t(((i = o.error) === null || i === void 0 ? void 0 : i.message) || "");
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
 */ const qw = "FirebaseError";
class tr extends Error {
  constructor(t, n, r) {
    super(n),
      (this.code = t),
      (this.customData = r),
      (this.name = qw),
      Object.setPrototypeOf(this, tr.prototype),
      Error.captureStackTrace && Error.captureStackTrace(this, Gi.prototype.create);
  }
}
class Gi {
  constructor(t, n, r) {
    (this.service = t), (this.serviceName = n), (this.errors = r);
  }
  create(t, ...n) {
    const r = n[0] || {},
      o = `${this.service}/${t}`,
      i = this.errors[t],
      s = i ? Qw(i, r) : "Error",
      a = `${this.serviceName}: ${s} (${o}).`;
    return new tr(o, a, r);
  }
}
function Qw(e, t) {
  return e.replace(Yw, (n, r) => {
    const o = t[r];
    return o != null ? String(o) : `<${r}?>`;
  });
}
const Yw = /\{\$([^}]+)}/g;
function Xw(e) {
  for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
  return !0;
}
function ya(e, t) {
  if (e === t) return !0;
  const n = Object.keys(e),
    r = Object.keys(t);
  for (const o of n) {
    if (!r.includes(o)) return !1;
    const i = e[o],
      s = t[o];
    if (Cp(i) && Cp(s)) {
      if (!ya(i, s)) return !1;
    } else if (i !== s) return !1;
  }
  for (const o of r) if (!n.includes(o)) return !1;
  return !0;
}
function Cp(e) {
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
 */ function qi(e) {
  const t = [];
  for (const [n, r] of Object.entries(e))
    Array.isArray(r)
      ? r.forEach((o) => {
          t.push(encodeURIComponent(n) + "=" + encodeURIComponent(o));
        })
      : t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
  return t.length ? "&" + t.join("&") : "";
}
function ti(e) {
  const t = {};
  return (
    e
      .replace(/^\?/, "")
      .split("&")
      .forEach((r) => {
        if (r) {
          const [o, i] = r.split("=");
          t[decodeURIComponent(o)] = decodeURIComponent(i);
        }
      }),
    t
  );
}
function ni(e) {
  const t = e.indexOf("?");
  if (!t) return "";
  const n = e.indexOf("#", t);
  return e.substring(t, n > 0 ? n : void 0);
}
function Jw(e, t) {
  const n = new Zw(e, t);
  return n.subscribe.bind(n);
}
class Zw {
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
    let o;
    if (t === void 0 && n === void 0 && r === void 0) throw new Error("Missing Observer.");
    eS(t, ["next", "error", "complete"]) ? (o = t) : (o = { next: t, error: n, complete: r }),
      o.next === void 0 && (o.next = lu),
      o.error === void 0 && (o.error = lu),
      o.complete === void 0 && (o.complete = lu);
    const i = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? o.error(this.finalError) : o.complete();
          } catch {}
        }),
      this.observers.push(o),
      i
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
function eS(e, t) {
  if (typeof e != "object" || e === null) return !1;
  for (const n of t) if (n in e && typeof e[n] == "function") return !0;
  return !1;
}
function lu() {}
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
 */ function Pr(e) {
  return e && e._delegate ? e._delegate : e;
}
class ko {
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
 */ const lr = "[DEFAULT]";
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
 */ class tS {
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
      const r = new jw();
      if ((this.instancesDeferred.set(n, r), this.isInitialized(n) || this.shouldAutoInitialize()))
        try {
          const o = this.getOrInitializeService({ instanceIdentifier: n });
          o && r.resolve(o);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(t) {
    var n;
    const r = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier),
      o = (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (i) {
        if (o) return null;
        throw i;
      }
    else {
      if (o) return null;
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
      if (rS(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: lr });
        } catch {}
      for (const [n, r] of this.instancesDeferred.entries()) {
        const o = this.normalizeInstanceIdentifier(n);
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: o });
          r.resolve(i);
        } catch {}
      }
    }
  }
  clearInstance(t = lr) {
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
  isInitialized(t = lr) {
    return this.instances.has(t);
  }
  getOptions(t = lr) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: n = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r)) throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
    const o = this.getOrInitializeService({ instanceIdentifier: r, options: n });
    for (const [i, s] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(i);
      r === a && s.resolve(o);
    }
    return o;
  }
  onInit(t, n) {
    var r;
    const o = this.normalizeInstanceIdentifier(n),
      i = (r = this.onInitCallbacks.get(o)) !== null && r !== void 0 ? r : new Set();
    i.add(t), this.onInitCallbacks.set(o, i);
    const s = this.instances.get(o);
    return (
      s && t(s, o),
      () => {
        i.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, n) {
    const r = this.onInitCallbacks.get(n);
    if (r)
      for (const o of r)
        try {
          o(t, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, { instanceIdentifier: nS(t), options: n })),
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
  normalizeInstanceIdentifier(t = lr) {
    return this.component ? (this.component.multipleInstances ? t : lr) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function nS(e) {
  return e === lr ? void 0 : e;
}
function rS(e) {
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
 */ class oS {
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
    const n = new tS(t, this);
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
 */ var ie;
(function (e) {
  (e[(e.DEBUG = 0)] = "DEBUG"),
    (e[(e.VERBOSE = 1)] = "VERBOSE"),
    (e[(e.INFO = 2)] = "INFO"),
    (e[(e.WARN = 3)] = "WARN"),
    (e[(e.ERROR = 4)] = "ERROR"),
    (e[(e.SILENT = 5)] = "SILENT");
})(ie || (ie = {}));
const iS = { debug: ie.DEBUG, verbose: ie.VERBOSE, info: ie.INFO, warn: ie.WARN, error: ie.ERROR, silent: ie.SILENT },
  sS = ie.INFO,
  aS = { [ie.DEBUG]: "log", [ie.VERBOSE]: "log", [ie.INFO]: "info", [ie.WARN]: "warn", [ie.ERROR]: "error" },
  lS = (e, t, ...n) => {
    if (t < e.logLevel) return;
    const r = new Date().toISOString(),
      o = aS[t];
    if (o) console[o](`[${r}]  ${e.name}:`, ...n);
    else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
  };
class dv {
  constructor(t) {
    (this.name = t), (this._logLevel = sS), (this._logHandler = lS), (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in ie)) throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? iS[t] : t;
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
    this._userLogHandler && this._userLogHandler(this, ie.DEBUG, ...t), this._logHandler(this, ie.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, ie.VERBOSE, ...t), this._logHandler(this, ie.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, ie.INFO, ...t), this._logHandler(this, ie.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, ie.WARN, ...t), this._logHandler(this, ie.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, ie.ERROR, ...t), this._logHandler(this, ie.ERROR, ...t);
  }
}
const uS = (e, t) => t.some((n) => e instanceof n);
let xp, Ip;
function cS() {
  return xp || (xp = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
}
function dS() {
  return (
    Ip || (Ip = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])
  );
}
const fv = new WeakMap(),
  yc = new WeakMap(),
  pv = new WeakMap(),
  uu = new WeakMap(),
  Nd = new WeakMap();
function fS(e) {
  const t = new Promise((n, r) => {
    const o = () => {
        e.removeEventListener("success", i), e.removeEventListener("error", s);
      },
      i = () => {
        n(Kn(e.result)), o();
      },
      s = () => {
        r(e.error), o();
      };
    e.addEventListener("success", i), e.addEventListener("error", s);
  });
  return (
    t
      .then((n) => {
        n instanceof IDBCursor && fv.set(n, e);
      })
      .catch(() => {}),
    Nd.set(t, e),
    t
  );
}
function pS(e) {
  if (yc.has(e)) return;
  const t = new Promise((n, r) => {
    const o = () => {
        e.removeEventListener("complete", i), e.removeEventListener("error", s), e.removeEventListener("abort", s);
      },
      i = () => {
        n(), o();
      },
      s = () => {
        r(e.error || new DOMException("AbortError", "AbortError")), o();
      };
    e.addEventListener("complete", i), e.addEventListener("error", s), e.addEventListener("abort", s);
  });
  yc.set(e, t);
}
let wc = {
  get(e, t, n) {
    if (e instanceof IDBTransaction) {
      if (t === "done") return yc.get(e);
      if (t === "objectStoreNames") return e.objectStoreNames || pv.get(e);
      if (t === "store") return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
    }
    return Kn(e[t]);
  },
  set(e, t, n) {
    return (e[t] = n), !0;
  },
  has(e, t) {
    return e instanceof IDBTransaction && (t === "done" || t === "store") ? !0 : t in e;
  },
};
function hS(e) {
  wc = e(wc);
}
function mS(e) {
  return e === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...n) {
        const r = e.call(cu(this), t, ...n);
        return pv.set(r, t.sort ? t.sort() : [t]), Kn(r);
      }
    : dS().includes(e)
    ? function (...t) {
        return e.apply(cu(this), t), Kn(fv.get(this));
      }
    : function (...t) {
        return Kn(e.apply(cu(this), t));
      };
}
function gS(e) {
  return typeof e == "function" ? mS(e) : (e instanceof IDBTransaction && pS(e), uS(e, cS()) ? new Proxy(e, wc) : e);
}
function Kn(e) {
  if (e instanceof IDBRequest) return fS(e);
  if (uu.has(e)) return uu.get(e);
  const t = gS(e);
  return t !== e && (uu.set(e, t), Nd.set(t, e)), t;
}
const cu = (e) => Nd.get(e);
function vS(e, t, { blocked: n, upgrade: r, blocking: o, terminated: i } = {}) {
  const s = indexedDB.open(e, t),
    a = Kn(s);
  return (
    r &&
      s.addEventListener("upgradeneeded", (l) => {
        r(Kn(s.result), l.oldVersion, l.newVersion, Kn(s.transaction), l);
      }),
    n && s.addEventListener("blocked", (l) => n(l.oldVersion, l.newVersion, l)),
    a
      .then((l) => {
        i && l.addEventListener("close", () => i()),
          o && l.addEventListener("versionchange", (u) => o(u.oldVersion, u.newVersion, u));
      })
      .catch(() => {}),
    a
  );
}
const yS = ["get", "getKey", "getAll", "getAllKeys", "count"],
  wS = ["put", "add", "delete", "clear"],
  du = new Map();
function bp(e, t) {
  if (!(e instanceof IDBDatabase && !(t in e) && typeof t == "string")) return;
  if (du.get(t)) return du.get(t);
  const n = t.replace(/FromIndex$/, ""),
    r = t !== n,
    o = wS.includes(n);
  if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(o || yS.includes(n))) return;
  const i = async function (s, ...a) {
    const l = this.transaction(s, o ? "readwrite" : "readonly");
    let u = l.store;
    return r && (u = u.index(a.shift())), (await Promise.all([u[n](...a), o && l.done]))[0];
  };
  return du.set(t, i), i;
}
hS((e) => ({ ...e, get: (t, n, r) => bp(t, n) || e.get(t, n, r), has: (t, n) => !!bp(t, n) || e.has(t, n) }));
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
 */ class SS {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (_S(n)) {
          const r = n.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function _S(e) {
  const t = e.getComponent();
  return (t == null ? void 0 : t.type) === "VERSION";
}
const Sc = "@firebase/app",
  Tp = "0.10.1";
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
 */ const Er = new dv("@firebase/app"),
  ES = "@firebase/app-compat",
  kS = "@firebase/analytics-compat",
  CS = "@firebase/analytics",
  xS = "@firebase/app-check-compat",
  IS = "@firebase/app-check",
  bS = "@firebase/auth",
  TS = "@firebase/auth-compat",
  PS = "@firebase/database",
  RS = "@firebase/database-compat",
  OS = "@firebase/functions",
  NS = "@firebase/functions-compat",
  AS = "@firebase/installations",
  MS = "@firebase/installations-compat",
  LS = "@firebase/messaging",
  $S = "@firebase/messaging-compat",
  DS = "@firebase/performance",
  FS = "@firebase/performance-compat",
  zS = "@firebase/remote-config",
  US = "@firebase/remote-config-compat",
  jS = "@firebase/storage",
  BS = "@firebase/storage-compat",
  WS = "@firebase/firestore",
  HS = "@firebase/firestore-compat",
  VS = "firebase",
  KS = "10.11.0";
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
 */ const _c = "[DEFAULT]",
  GS = {
    [Sc]: "fire-core",
    [ES]: "fire-core-compat",
    [CS]: "fire-analytics",
    [kS]: "fire-analytics-compat",
    [IS]: "fire-app-check",
    [xS]: "fire-app-check-compat",
    [bS]: "fire-auth",
    [TS]: "fire-auth-compat",
    [PS]: "fire-rtdb",
    [RS]: "fire-rtdb-compat",
    [OS]: "fire-fn",
    [NS]: "fire-fn-compat",
    [AS]: "fire-iid",
    [MS]: "fire-iid-compat",
    [LS]: "fire-fcm",
    [$S]: "fire-fcm-compat",
    [DS]: "fire-perf",
    [FS]: "fire-perf-compat",
    [zS]: "fire-rc",
    [US]: "fire-rc-compat",
    [jS]: "fire-gcs",
    [BS]: "fire-gcs-compat",
    [WS]: "fire-fst",
    [HS]: "fire-fst-compat",
    "fire-js": "fire-js",
    [VS]: "fire-js-all",
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
 */ const wa = new Map(),
  qS = new Map(),
  Ec = new Map();
function Pp(e, t) {
  try {
    e.container.addComponent(t);
  } catch (n) {
    Er.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n);
  }
}
function Mi(e) {
  const t = e.name;
  if (Ec.has(t)) return Er.debug(`There were multiple attempts to register component ${t}.`), !1;
  Ec.set(t, e);
  for (const n of wa.values()) Pp(n, e);
  for (const n of qS.values()) Pp(n, e);
  return !0;
}
function hv(e, t) {
  const n = e.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), e.container.getProvider(t);
}
function cn(e) {
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
 */ const QS = {
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
  Gn = new Gi("app", "Firebase", QS);
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
 */ class YS {
  constructor(t, n, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new ko("app", () => this, "PUBLIC"));
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
    if (this.isDeleted) throw Gn.create("app-deleted", { appName: this._name });
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
 */ const Qi = KS;
function mv(e, t = {}) {
  let n = e;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: _c, automaticDataCollectionEnabled: !1 }, t),
    o = r.name;
  if (typeof o != "string" || !o) throw Gn.create("bad-app-name", { appName: String(o) });
  if ((n || (n = uv()), !n)) throw Gn.create("no-options");
  const i = wa.get(o);
  if (i) {
    if (ya(n, i.options) && ya(r, i.config)) return i;
    throw Gn.create("duplicate-app", { appName: o });
  }
  const s = new oS(o);
  for (const l of Ec.values()) s.addComponent(l);
  const a = new YS(n, r, s);
  return wa.set(o, a), a;
}
function XS(e = _c) {
  const t = wa.get(e);
  if (!t && e === _c && uv()) return mv();
  if (!t) throw Gn.create("no-app", { appName: e });
  return t;
}
function uo(e, t, n) {
  var r;
  let o = (r = GS[e]) !== null && r !== void 0 ? r : e;
  n && (o += `-${n}`);
  const i = o.match(/\s|\//),
    s = t.match(/\s|\//);
  if (i || s) {
    const a = [`Unable to register library "${o}" with version "${t}":`];
    i && a.push(`library name "${o}" contains illegal characters (whitespace or "/")`),
      i && s && a.push("and"),
      s && a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),
      Er.warn(a.join(" "));
    return;
  }
  Mi(new ko(`${o}-version`, () => ({ library: o, version: t }), "VERSION"));
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
 */ const JS = "firebase-heartbeat-database",
  ZS = 1,
  Li = "firebase-heartbeat-store";
let fu = null;
function gv() {
  return (
    fu ||
      (fu = vS(JS, ZS, {
        upgrade: (e, t) => {
          switch (t) {
            case 0:
              try {
                e.createObjectStore(Li);
              } catch (n) {
                console.warn(n);
              }
          }
        },
      }).catch((e) => {
        throw Gn.create("idb-open", { originalErrorMessage: e.message });
      })),
    fu
  );
}
async function e_(e) {
  try {
    const n = (await gv()).transaction(Li),
      r = await n.objectStore(Li).get(vv(e));
    return await n.done, r;
  } catch (t) {
    if (t instanceof tr) Er.warn(t.message);
    else {
      const n = Gn.create("idb-get", { originalErrorMessage: t == null ? void 0 : t.message });
      Er.warn(n.message);
    }
  }
}
async function Rp(e, t) {
  try {
    const r = (await gv()).transaction(Li, "readwrite");
    await r.objectStore(Li).put(t, vv(e)), await r.done;
  } catch (n) {
    if (n instanceof tr) Er.warn(n.message);
    else {
      const r = Gn.create("idb-set", { originalErrorMessage: n == null ? void 0 : n.message });
      Er.warn(r.message);
    }
  }
}
function vv(e) {
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
 */ const t_ = 1024,
  n_ = 30 * 24 * 60 * 60 * 1e3;
class r_ {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new i_(n)),
      (this._heartbeatsCachePromise = this._storage.read().then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, n;
    const o = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
      i = Op();
    if (
      !(
        ((t = this._heartbeatsCache) === null || t === void 0 ? void 0 : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((n = this._heartbeatsCache) === null || n === void 0 ? void 0 : n.heartbeats) == null)
      ) &&
      !(this._heartbeatsCache.lastSentHeartbeatDate === i || this._heartbeatsCache.heartbeats.some((s) => s.date === i))
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: i, agent: o }),
        (this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((s) => {
          const a = new Date(s.date).valueOf();
          return Date.now() - a <= n_;
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
    const n = Op(),
      { heartbeatsToSend: r, unsentEntries: o } = o_(this._heartbeatsCache.heartbeats),
      i = av(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = n),
      o.length > 0
        ? ((this._heartbeatsCache.heartbeats = o), await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []), this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function Op() {
  return new Date().toISOString().substring(0, 10);
}
function o_(e, t = t_) {
  const n = [];
  let r = e.slice();
  for (const o of e) {
    const i = n.find((s) => s.agent === o.agent);
    if (i) {
      if ((i.dates.push(o.date), Np(n) > t)) {
        i.dates.pop();
        break;
      }
    } else if ((n.push({ agent: o.agent, dates: [o.date] }), Np(n) > t)) {
      n.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: r };
}
class i_ {
  constructor(t) {
    (this.app = t), (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return Kw()
      ? Gw()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const n = await e_(this.app);
      return n != null && n.heartbeats ? n : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const o = await this.read();
      return Rp(this.app, {
        lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : o.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const o = await this.read();
      return Rp(this.app, {
        lastSentHeartbeatDate: (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : o.lastSentHeartbeatDate,
        heartbeats: [...o.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function Np(e) {
  return av(JSON.stringify({ version: 2, heartbeats: e })).length;
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
 */ function s_(e) {
  Mi(new ko("platform-logger", (t) => new SS(t), "PRIVATE")),
    Mi(new ko("heartbeat", (t) => new r_(t), "PRIVATE")),
    uo(Sc, Tp, e),
    uo(Sc, Tp, "esm2017"),
    uo("fire-js", "");
}
s_("");
function Ad(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function yv() {
  return {
    "dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
  };
}
const a_ = yv,
  wv = new Gi("auth", "Firebase", yv());
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
 */ const Sa = new dv("@firebase/auth");
function l_(e, ...t) {
  Sa.logLevel <= ie.WARN && Sa.warn(`Auth (${Qi}): ${e}`, ...t);
}
function zs(e, ...t) {
  Sa.logLevel <= ie.ERROR && Sa.error(`Auth (${Qi}): ${e}`, ...t);
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
 */ function Ht(e, ...t) {
  throw Md(e, ...t);
}
function en(e, ...t) {
  return Md(e, ...t);
}
function Sv(e, t, n) {
  const r = Object.assign(Object.assign({}, a_()), { [t]: n });
  return new Gi("auth", "Firebase", r).create(t, { appName: e.name });
}
function qn(e) {
  return Sv(
    e,
    "operation-not-supported-in-this-environment",
    "Operations that alter the current user are not supported in conjunction with FirebaseServerApp"
  );
}
function Md(e, ...t) {
  if (typeof e != "string") {
    const n = t[0],
      r = [...t.slice(1)];
    return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r);
  }
  return wv.create(e, ...t);
}
function W(e, t, ...n) {
  if (!e) throw Md(t, ...n);
}
function dn(e) {
  const t = "INTERNAL ASSERTION FAILED: " + e;
  throw (zs(t), new Error(t));
}
function wn(e, t) {
  e || dn(t);
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
 */ function kc() {
  var e;
  return (typeof self < "u" && ((e = self.location) === null || e === void 0 ? void 0 : e.href)) || "";
}
function u_() {
  return Ap() === "http:" || Ap() === "https:";
}
function Ap() {
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
 */ function c_() {
  return typeof navigator < "u" &&
    navigator &&
    "onLine" in navigator &&
    typeof navigator.onLine == "boolean" &&
    (u_() || Ww() || "connection" in navigator)
    ? navigator.onLine
    : !0;
}
function d_() {
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
 */ class Yi {
  constructor(t, n) {
    (this.shortDelay = t),
      (this.longDelay = n),
      wn(n > t, "Short delay should be less than long delay!"),
      (this.isMobile = Bw() || Hw());
  }
  get() {
    return c_() ? (this.isMobile ? this.longDelay : this.shortDelay) : Math.min(5e3, this.shortDelay);
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
 */ function Ld(e, t) {
  wn(e.emulator, "Emulator should always be set here");
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
 */ class _v {
  static initialize(t, n, r) {
    (this.fetchImpl = t), n && (this.headersImpl = n), r && (this.responseImpl = r);
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < "u" && "fetch" in self) return self.fetch;
    if (typeof globalThis < "u" && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < "u") return fetch;
    dn(
      "Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < "u" && "Headers" in self) return self.Headers;
    if (typeof globalThis < "u" && globalThis.Headers) return globalThis.Headers;
    if (typeof Headers < "u") return Headers;
    dn(
      "Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill"
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < "u" && "Response" in self) return self.Response;
    if (typeof globalThis < "u" && globalThis.Response) return globalThis.Response;
    if (typeof Response < "u") return Response;
    dn(
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
 */ const f_ = {
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
 */ const p_ = new Yi(3e4, 6e4);
function Rr(e, t) {
  return e.tenantId && !t.tenantId ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId }) : t;
}
async function nr(e, t, n, r, o = {}) {
  return Ev(e, o, async () => {
    let i = {},
      s = {};
    r && (t === "GET" ? (s = r) : (i = { body: JSON.stringify(r) }));
    const a = qi(Object.assign({ key: e.config.apiKey }, s)).slice(1),
      l = await e._getAdditionalHeaders();
    return (
      (l["Content-Type"] = "application/json"),
      e.languageCode && (l["X-Firebase-Locale"] = e.languageCode),
      _v.fetch()(
        kv(e, e.config.apiHost, n, a),
        Object.assign({ method: t, headers: l, referrerPolicy: "no-referrer" }, i)
      )
    );
  });
}
async function Ev(e, t, n) {
  e._canInitEmulator = !1;
  const r = Object.assign(Object.assign({}, f_), t);
  try {
    const o = new m_(e),
      i = await Promise.race([n(), o.promise]);
    o.clearNetworkTimeout();
    const s = await i.json();
    if ("needConfirmation" in s) throw ks(e, "account-exists-with-different-credential", s);
    if (i.ok && !("errorMessage" in s)) return s;
    {
      const a = i.ok ? s.errorMessage : s.error.message,
        [l, u] = a.split(" : ");
      if (l === "FEDERATED_USER_ID_ALREADY_LINKED") throw ks(e, "credential-already-in-use", s);
      if (l === "EMAIL_EXISTS") throw ks(e, "email-already-in-use", s);
      if (l === "USER_DISABLED") throw ks(e, "user-disabled", s);
      const d = r[l] || l.toLowerCase().replace(/[_\s]+/g, "-");
      if (u) throw Sv(e, d, u);
      Ht(e, d);
    }
  } catch (o) {
    if (o instanceof tr) throw o;
    Ht(e, "network-request-failed", { message: String(o) });
  }
}
async function Ga(e, t, n, r, o = {}) {
  const i = await nr(e, t, n, r, o);
  return "mfaPendingCredential" in i && Ht(e, "multi-factor-auth-required", { _serverResponse: i }), i;
}
function kv(e, t, n, r) {
  const o = `${t}${n}?${r}`;
  return e.config.emulator ? Ld(e.config, o) : `${e.config.apiScheme}://${o}`;
}
function h_(e) {
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
class m_ {
  constructor(t) {
    (this.auth = t),
      (this.timer = null),
      (this.promise = new Promise((n, r) => {
        this.timer = setTimeout(() => r(en(this.auth, "network-request-failed")), p_.get());
      }));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function ks(e, t, n) {
  const r = { appName: e.name };
  n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber);
  const o = en(e, t, r);
  return (o.customData._tokenResponse = n), o;
}
function Mp(e) {
  return e !== void 0 && e.enterprise !== void 0;
}
class g_ {
  constructor(t) {
    if (((this.siteKey = ""), (this.recaptchaEnforcementState = []), t.recaptchaKey === void 0))
      throw new Error("recaptchaKey undefined");
    (this.siteKey = t.recaptchaKey.split("/")[3]), (this.recaptchaEnforcementState = t.recaptchaEnforcementState);
  }
  getProviderEnforcementState(t) {
    if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) return null;
    for (const n of this.recaptchaEnforcementState) if (n.provider && n.provider === t) return h_(n.enforcementState);
    return null;
  }
  isProviderEnabled(t) {
    return this.getProviderEnforcementState(t) === "ENFORCE" || this.getProviderEnforcementState(t) === "AUDIT";
  }
}
async function v_(e, t) {
  return nr(e, "GET", "/v2/recaptchaConfig", Rr(e, t));
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
 */ async function y_(e, t) {
  return nr(e, "POST", "/v1/accounts:delete", t);
}
async function Cv(e, t) {
  return nr(e, "POST", "/v1/accounts:lookup", t);
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
 */ function pi(e) {
  if (e)
    try {
      const t = new Date(Number(e));
      if (!isNaN(t.getTime())) return t.toUTCString();
    } catch {}
}
async function w_(e, t = !1) {
  const n = Pr(e),
    r = await n.getIdToken(t),
    o = $d(r);
  W(o && o.exp && o.auth_time && o.iat, n.auth, "internal-error");
  const i = typeof o.firebase == "object" ? o.firebase : void 0,
    s = i == null ? void 0 : i.sign_in_provider;
  return {
    claims: o,
    token: r,
    authTime: pi(pu(o.auth_time)),
    issuedAtTime: pi(pu(o.iat)),
    expirationTime: pi(pu(o.exp)),
    signInProvider: s || null,
    signInSecondFactor: (i == null ? void 0 : i.sign_in_second_factor) || null,
  };
}
function pu(e) {
  return Number(e) * 1e3;
}
function $d(e) {
  const [t, n, r] = e.split(".");
  if (t === void 0 || n === void 0 || r === void 0) return zs("JWT malformed, contained fewer than 3 sections"), null;
  try {
    const o = lv(n);
    return o ? JSON.parse(o) : (zs("Failed to decode base64 JWT payload"), null);
  } catch (o) {
    return zs("Caught error parsing JWT payload as JSON", o == null ? void 0 : o.toString()), null;
  }
}
function Lp(e) {
  const t = $d(e);
  return (
    W(t, "internal-error"),
    W(typeof t.exp < "u", "internal-error"),
    W(typeof t.iat < "u", "internal-error"),
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
 */ async function $i(e, t, n = !1) {
  if (n) return t;
  try {
    return await t;
  } catch (r) {
    throw (r instanceof tr && S_(r) && e.auth.currentUser === e && (await e.auth.signOut()), r);
  }
}
function S_({ code: e }) {
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
      const o = ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0 ? n : 0) - Date.now() - 3e5;
      return Math.max(0, o);
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
 */ class Cc {
  constructor(t, n) {
    (this.createdAt = t), (this.lastLoginAt = n), this._initializeTime();
  }
  _initializeTime() {
    (this.lastSignInTime = pi(this.lastLoginAt)), (this.creationTime = pi(this.createdAt));
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
 */ async function _a(e) {
  var t;
  const n = e.auth,
    r = await e.getIdToken(),
    o = await $i(e, Cv(n, { idToken: r }));
  W(o == null ? void 0 : o.users.length, n, "internal-error");
  const i = o.users[0];
  e._notifyReloadListener(i);
  const s = !((t = i.providerUserInfo) === null || t === void 0) && t.length ? xv(i.providerUserInfo) : [],
    a = k_(e.providerData, s),
    l = e.isAnonymous,
    u = !(e.email && i.passwordHash) && !(a != null && a.length),
    d = l ? u : !1,
    p = {
      uid: i.localId,
      displayName: i.displayName || null,
      photoURL: i.photoUrl || null,
      email: i.email || null,
      emailVerified: i.emailVerified || !1,
      phoneNumber: i.phoneNumber || null,
      tenantId: i.tenantId || null,
      providerData: a,
      metadata: new Cc(i.createdAt, i.lastLoginAt),
      isAnonymous: d,
    };
  Object.assign(e, p);
}
async function E_(e) {
  const t = Pr(e);
  await _a(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t);
}
function k_(e, t) {
  return [...e.filter((r) => !t.some((o) => o.providerId === r.providerId)), ...t];
}
function xv(e) {
  return e.map((t) => {
    var { providerId: n } = t,
      r = Ad(t, ["providerId"]);
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
 */ async function C_(e, t) {
  const n = await Ev(e, {}, async () => {
    const r = qi({ grant_type: "refresh_token", refresh_token: t }).slice(1),
      { tokenApiHost: o, apiKey: i } = e.config,
      s = kv(e, o, "/v1/token", `key=${i}`),
      a = await e._getAdditionalHeaders();
    return (
      (a["Content-Type"] = "application/x-www-form-urlencoded"), _v.fetch()(s, { method: "POST", headers: a, body: r })
    );
  });
  return { accessToken: n.access_token, expiresIn: n.expires_in, refreshToken: n.refresh_token };
}
async function x_(e, t) {
  return nr(e, "POST", "/v2/accounts:revokeToken", Rr(e, t));
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
 */ class co {
  constructor() {
    (this.refreshToken = null), (this.accessToken = null), (this.expirationTime = null);
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(t) {
    W(t.idToken, "internal-error"),
      W(typeof t.idToken < "u", "internal-error"),
      W(typeof t.refreshToken < "u", "internal-error");
    const n = "expiresIn" in t && typeof t.expiresIn < "u" ? Number(t.expiresIn) : Lp(t.idToken);
    this.updateTokensAndExpiration(t.idToken, t.refreshToken, n);
  }
  updateFromIdToken(t) {
    W(t.length !== 0, "internal-error");
    const n = Lp(t);
    this.updateTokensAndExpiration(t, null, n);
  }
  async getToken(t, n = !1) {
    return !n && this.accessToken && !this.isExpired
      ? this.accessToken
      : (W(this.refreshToken, t, "user-token-expired"),
        this.refreshToken ? (await this.refresh(t, this.refreshToken), this.accessToken) : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(t, n) {
    const { accessToken: r, refreshToken: o, expiresIn: i } = await C_(t, n);
    this.updateTokensAndExpiration(r, o, Number(i));
  }
  updateTokensAndExpiration(t, n, r) {
    (this.refreshToken = n || null), (this.accessToken = t || null), (this.expirationTime = Date.now() + r * 1e3);
  }
  static fromJSON(t, n) {
    const { refreshToken: r, accessToken: o, expirationTime: i } = n,
      s = new co();
    return (
      r && (W(typeof r == "string", "internal-error", { appName: t }), (s.refreshToken = r)),
      o && (W(typeof o == "string", "internal-error", { appName: t }), (s.accessToken = o)),
      i && (W(typeof i == "number", "internal-error", { appName: t }), (s.expirationTime = i)),
      s
    );
  }
  toJSON() {
    return { refreshToken: this.refreshToken, accessToken: this.accessToken, expirationTime: this.expirationTime };
  }
  _assign(t) {
    (this.accessToken = t.accessToken), (this.refreshToken = t.refreshToken), (this.expirationTime = t.expirationTime);
  }
  _clone() {
    return Object.assign(new co(), this.toJSON());
  }
  _performRefresh() {
    return dn("not implemented");
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
 */ function xn(e, t) {
  W(typeof e == "string" || typeof e > "u", "internal-error", { appName: t });
}
class fn {
  constructor(t) {
    var { uid: n, auth: r, stsTokenManager: o } = t,
      i = Ad(t, ["uid", "auth", "stsTokenManager"]);
    (this.providerId = "firebase"),
      (this.proactiveRefresh = new __(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = n),
      (this.auth = r),
      (this.stsTokenManager = o),
      (this.accessToken = o.accessToken),
      (this.displayName = i.displayName || null),
      (this.email = i.email || null),
      (this.emailVerified = i.emailVerified || !1),
      (this.phoneNumber = i.phoneNumber || null),
      (this.photoURL = i.photoURL || null),
      (this.isAnonymous = i.isAnonymous || !1),
      (this.tenantId = i.tenantId || null),
      (this.providerData = i.providerData ? [...i.providerData] : []),
      (this.metadata = new Cc(i.createdAt || void 0, i.lastLoginAt || void 0));
  }
  async getIdToken(t) {
    const n = await $i(this, this.stsTokenManager.getToken(this.auth, t));
    return (
      W(n, this.auth, "internal-error"),
      this.accessToken !== n &&
        ((this.accessToken = n),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      n
    );
  }
  getIdTokenResult(t) {
    return w_(this, t);
  }
  reload() {
    return E_(this);
  }
  _assign(t) {
    this !== t &&
      (W(this.uid === t.uid, this.auth, "internal-error"),
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
    const n = new fn(
      Object.assign(Object.assign({}, this), { auth: t, stsTokenManager: this.stsTokenManager._clone() })
    );
    return n.metadata._copy(this.metadata), n;
  }
  _onReload(t) {
    W(!this.reloadListener, this.auth, "internal-error"),
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
      n && (await _a(this)),
      await this.auth._persistUserIfCurrent(this),
      r && this.auth._notifyListenersIfCurrent(this);
  }
  async delete() {
    if (cn(this.auth.app)) return Promise.reject(qn(this.auth));
    const t = await this.getIdToken();
    return await $i(this, y_(this.auth, { idToken: t })), this.stsTokenManager.clearRefreshToken(), this.auth.signOut();
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
    var r, o, i, s, a, l, u, d;
    const p = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
      h = (o = n.email) !== null && o !== void 0 ? o : void 0,
      y = (i = n.phoneNumber) !== null && i !== void 0 ? i : void 0,
      g = (s = n.photoURL) !== null && s !== void 0 ? s : void 0,
      v = (a = n.tenantId) !== null && a !== void 0 ? a : void 0,
      x = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0,
      m = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
      c = (d = n.lastLoginAt) !== null && d !== void 0 ? d : void 0,
      { uid: f, emailVerified: w, isAnonymous: S, providerData: C, stsTokenManager: _ } = n;
    W(f && _, t, "internal-error");
    const b = co.fromJSON(this.name, _);
    W(typeof f == "string", t, "internal-error"),
      xn(p, t.name),
      xn(h, t.name),
      W(typeof w == "boolean", t, "internal-error"),
      W(typeof S == "boolean", t, "internal-error"),
      xn(y, t.name),
      xn(g, t.name),
      xn(v, t.name),
      xn(x, t.name),
      xn(m, t.name),
      xn(c, t.name);
    const O = new fn({
      uid: f,
      auth: t,
      email: h,
      emailVerified: w,
      displayName: p,
      isAnonymous: S,
      photoURL: g,
      phoneNumber: y,
      tenantId: v,
      stsTokenManager: b,
      createdAt: m,
      lastLoginAt: c,
    });
    return (
      C && Array.isArray(C) && (O.providerData = C.map((R) => Object.assign({}, R))), x && (O._redirectEventId = x), O
    );
  }
  static async _fromIdTokenResponse(t, n, r = !1) {
    const o = new co();
    o.updateFromServerResponse(n);
    const i = new fn({ uid: n.localId, auth: t, stsTokenManager: o, isAnonymous: r });
    return await _a(i), i;
  }
  static async _fromGetAccountInfoResponse(t, n, r) {
    const o = n.users[0];
    W(o.localId !== void 0, "internal-error");
    const i = o.providerUserInfo !== void 0 ? xv(o.providerUserInfo) : [],
      s = !(o.email && o.passwordHash) && !(i != null && i.length),
      a = new co();
    a.updateFromIdToken(r);
    const l = new fn({ uid: o.localId, auth: t, stsTokenManager: a, isAnonymous: s }),
      u = {
        uid: o.localId,
        displayName: o.displayName || null,
        photoURL: o.photoUrl || null,
        email: o.email || null,
        emailVerified: o.emailVerified || !1,
        phoneNumber: o.phoneNumber || null,
        tenantId: o.tenantId || null,
        providerData: i,
        metadata: new Cc(o.createdAt, o.lastLoginAt),
        isAnonymous: !(o.email && o.passwordHash) && !(i != null && i.length),
      };
    return Object.assign(l, u), l;
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
 */ const $p = new Map();
function pn(e) {
  wn(e instanceof Function, "Expected a class definition");
  let t = $p.get(e);
  return t
    ? (wn(t instanceof e, "Instance stored in cache mismatched with class"), t)
    : ((t = new e()), $p.set(e, t), t);
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
 */ class Iv {
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
Iv.type = "NONE";
const Dp = Iv;
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
 */ function Us(e, t, n) {
  return `firebase:${e}:${t}:${n}`;
}
class fo {
  constructor(t, n, r) {
    (this.persistence = t), (this.auth = n), (this.userKey = r);
    const { config: o, name: i } = this.auth;
    (this.fullUserKey = Us(this.userKey, o.apiKey, i)),
      (this.fullPersistenceKey = Us("persistence", o.apiKey, i)),
      (this.boundEventHandler = n._onStorageEvent.bind(n)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(t) {
    return this.persistence._set(this.fullUserKey, t.toJSON());
  }
  async getCurrentUser() {
    const t = await this.persistence._get(this.fullUserKey);
    return t ? fn._fromJSON(this.auth, t) : null;
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
    if (!n.length) return new fo(pn(Dp), t, r);
    const o = (
      await Promise.all(
        n.map(async (u) => {
          if (await u._isAvailable()) return u;
        })
      )
    ).filter((u) => u);
    let i = o[0] || pn(Dp);
    const s = Us(r, t.config.apiKey, t.name);
    let a = null;
    for (const u of n)
      try {
        const d = await u._get(s);
        if (d) {
          const p = fn._fromJSON(t, d);
          u !== i && (a = p), (i = u);
          break;
        }
      } catch {}
    const l = o.filter((u) => u._shouldAllowMigration);
    return !i._shouldAllowMigration || !l.length
      ? new fo(i, t, r)
      : ((i = l[0]),
        a && (await i._set(s, a.toJSON())),
        await Promise.all(
          n.map(async (u) => {
            if (u !== i)
              try {
                await u._remove(s);
              } catch {}
          })
        ),
        new fo(i, t, r));
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
 */ function Fp(e) {
  const t = e.toLowerCase();
  if (t.includes("opera/") || t.includes("opr/") || t.includes("opios/")) return "Opera";
  if (Pv(t)) return "IEMobile";
  if (t.includes("msie") || t.includes("trident/")) return "IE";
  if (t.includes("edge/")) return "Edge";
  if (bv(t)) return "Firefox";
  if (t.includes("silk/")) return "Silk";
  if (Ov(t)) return "Blackberry";
  if (Nv(t)) return "Webos";
  if (Dd(t)) return "Safari";
  if ((t.includes("chrome/") || Tv(t)) && !t.includes("edge/")) return "Chrome";
  if (Rv(t)) return "Android";
  {
    const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      r = e.match(n);
    if ((r == null ? void 0 : r.length) === 2) return r[1];
  }
  return "Other";
}
function bv(e = Ze()) {
  return /firefox\//i.test(e);
}
function Dd(e = Ze()) {
  const t = e.toLowerCase();
  return t.includes("safari/") && !t.includes("chrome/") && !t.includes("crios/") && !t.includes("android");
}
function Tv(e = Ze()) {
  return /crios\//i.test(e);
}
function Pv(e = Ze()) {
  return /iemobile/i.test(e);
}
function Rv(e = Ze()) {
  return /android/i.test(e);
}
function Ov(e = Ze()) {
  return /blackberry/i.test(e);
}
function Nv(e = Ze()) {
  return /webos/i.test(e);
}
function qa(e = Ze()) {
  return /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e));
}
function I_(e = Ze()) {
  var t;
  return qa(e) && !!(!((t = window.navigator) === null || t === void 0) && t.standalone);
}
function b_() {
  return Vw() && document.documentMode === 10;
}
function Av(e = Ze()) {
  return qa(e) || Rv(e) || Nv(e) || Ov(e) || /windows phone/i.test(e) || Pv(e);
}
function T_() {
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
 */ function Mv(e, t = []) {
  let n;
  switch (e) {
    case "Browser":
      n = Fp(Ze());
      break;
    case "Worker":
      n = `${Fp(Ze())}-${e}`;
      break;
    default:
      n = e;
  }
  const r = t.length ? t.join(",") : "FirebaseCore-web";
  return `${n}/JsCore/${Qi}/${r}`;
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
    const r = (i) =>
      new Promise((s, a) => {
        try {
          const l = t(i);
          s(l);
        } catch (l) {
          a(l);
        }
      });
    (r.onAbort = n), this.queue.push(r);
    const o = this.queue.length - 1;
    return () => {
      this.queue[o] = () => Promise.resolve();
    };
  }
  async runMiddleware(t) {
    if (this.auth.currentUser === t) return;
    const n = [];
    try {
      for (const r of this.queue) await r(t), r.onAbort && n.push(r.onAbort);
    } catch (r) {
      n.reverse();
      for (const o of n)
        try {
          o();
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
 */ async function R_(e, t = {}) {
  return nr(e, "GET", "/v2/passwordPolicy", Rr(e, t));
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
 */ const O_ = 6;
class N_ {
  constructor(t) {
    var n, r, o, i;
    const s = t.customStrengthOptions;
    (this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength = (n = s.minPasswordLength) !== null && n !== void 0 ? n : O_),
      s.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = s.maxPasswordLength),
      s.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter = s.containsLowercaseCharacter),
      s.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter = s.containsUppercaseCharacter),
      s.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter = s.containsNumericCharacter),
      s.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter = s.containsNonAlphanumericCharacter),
      (this.enforcementState = t.enforcementState),
      this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED" && (this.enforcementState = "OFF"),
      (this.allowedNonAlphanumericCharacters =
        (o = (r = t.allowedNonAlphanumericCharacters) === null || r === void 0 ? void 0 : r.join("")) !== null &&
        o !== void 0
          ? o
          : ""),
      (this.forceUpgradeOnSignin = (i = t.forceUpgradeOnSignin) !== null && i !== void 0 ? i : !1),
      (this.schemaVersion = t.schemaVersion);
  }
  validatePassword(t) {
    var n, r, o, i, s, a;
    const l = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(t, l),
      this.validatePasswordCharacterOptions(t, l),
      l.isValid && (l.isValid = (n = l.meetsMinPasswordLength) !== null && n !== void 0 ? n : !0),
      l.isValid && (l.isValid = (r = l.meetsMaxPasswordLength) !== null && r !== void 0 ? r : !0),
      l.isValid && (l.isValid = (o = l.containsLowercaseLetter) !== null && o !== void 0 ? o : !0),
      l.isValid && (l.isValid = (i = l.containsUppercaseLetter) !== null && i !== void 0 ? i : !0),
      l.isValid && (l.isValid = (s = l.containsNumericCharacter) !== null && s !== void 0 ? s : !0),
      l.isValid && (l.isValid = (a = l.containsNonAlphanumericCharacter) !== null && a !== void 0 ? a : !0),
      l
    );
  }
  validatePasswordLengthOptions(t, n) {
    const r = this.customStrengthOptions.minPasswordLength,
      o = this.customStrengthOptions.maxPasswordLength;
    r && (n.meetsMinPasswordLength = t.length >= r), o && (n.meetsMaxPasswordLength = t.length <= o);
  }
  validatePasswordCharacterOptions(t, n) {
    this.updatePasswordCharacterOptionsStatuses(n, !1, !1, !1, !1);
    let r;
    for (let o = 0; o < t.length; o++)
      (r = t.charAt(o)),
        this.updatePasswordCharacterOptionsStatuses(
          n,
          r >= "a" && r <= "z",
          r >= "A" && r <= "Z",
          r >= "0" && r <= "9",
          this.allowedNonAlphanumericCharacters.includes(r)
        );
  }
  updatePasswordCharacterOptionsStatuses(t, n, r, o, i) {
    this.customStrengthOptions.containsLowercaseLetter &&
      (t.containsLowercaseLetter || (t.containsLowercaseLetter = n)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (t.containsUppercaseLetter || (t.containsUppercaseLetter = r)),
      this.customStrengthOptions.containsNumericCharacter &&
        (t.containsNumericCharacter || (t.containsNumericCharacter = o)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (t.containsNonAlphanumericCharacter || (t.containsNonAlphanumericCharacter = i));
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
 */ class A_ {
  constructor(t, n, r, o) {
    (this.app = t),
      (this.heartbeatServiceProvider = n),
      (this.appCheckServiceProvider = r),
      (this.config = o),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new zp(this)),
      (this.idTokenSubscription = new zp(this)),
      (this.beforeStateQueue = new P_(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = wv),
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
      (this.clientVersion = o.sdkClientVersion);
  }
  _initializeWithPersistence(t, n) {
    return (
      n && (this._popupRedirectResolver = pn(n)),
      (this._initializationPromise = this.queue(async () => {
        var r, o;
        if (!this._deleted && ((this.persistenceManager = await fo.create(this, t)), !this._deleted)) {
          if (!((r = this._popupRedirectResolver) === null || r === void 0) && r._shouldInitProactively)
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          await this.initializeCurrentUser(n),
            (this.lastNotifiedUid = ((o = this.currentUser) === null || o === void 0 ? void 0 : o.uid) || null),
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
      const n = await Cv(this, { idToken: t }),
        r = await fn._fromGetAccountInfoResponse(this, n, t);
      await this.directlySetCurrentUser(r);
    } catch (n) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", n),
        await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(t) {
    var n;
    if (cn(this.app)) {
      const s = this.app.settings.authIdToken;
      return s
        ? new Promise((a) => {
            setTimeout(() => this.initializeCurrentUserFromIdToken(s).then(a, a));
          })
        : this.directlySetCurrentUser(null);
    }
    const r = await this.assertedPersistence.getCurrentUser();
    let o = r,
      i = !1;
    if (t && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const s = (n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId,
        a = o == null ? void 0 : o._redirectEventId,
        l = await this.tryRedirectSignIn(t);
      (!s || s === a) && l != null && l.user && ((o = l.user), (i = !0));
    }
    if (!o) return this.directlySetCurrentUser(null);
    if (!o._redirectEventId) {
      if (i)
        try {
          await this.beforeStateQueue.runMiddleware(o);
        } catch (s) {
          (o = r), this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(s));
        }
      return o ? this.reloadAndSetCurrentUserOrClear(o) : this.directlySetCurrentUser(null);
    }
    return (
      W(this._popupRedirectResolver, this, "argument-error"),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser && this.redirectUser._redirectEventId === o._redirectEventId
        ? this.directlySetCurrentUser(o)
        : this.reloadAndSetCurrentUserOrClear(o)
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
      await _a(t);
    } catch (n) {
      if ((n == null ? void 0 : n.code) !== "auth/network-request-failed") return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(t);
  }
  useDeviceLanguage() {
    this.languageCode = d_();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(t) {
    if (cn(this.app)) return Promise.reject(qn(this));
    const n = t ? Pr(t) : null;
    return (
      n && W(n.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"),
      this._updateCurrentUser(n && n._clone(this))
    );
  }
  async _updateCurrentUser(t, n = !1) {
    if (!this._deleted)
      return (
        t && W(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
        n || (await this.beforeStateQueue.runMiddleware(t)),
        this.queue(async () => {
          await this.directlySetCurrentUser(t), this.notifyAuthListeners();
        })
      );
  }
  async signOut() {
    return cn(this.app)
      ? Promise.reject(qn(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) && (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(t) {
    return cn(this.app)
      ? Promise.reject(qn(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(pn(t));
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
    const t = await R_(this),
      n = new N_(t);
    this.tenantId === null ? (this._projectPasswordPolicy = n) : (this._tenantPasswordPolicies[this.tenantId] = n);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(t) {
    this._errorFactory = new Gi("auth", "Firebase", t());
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
      this.tenantId != null && (r.tenantId = this.tenantId), await x_(this, r);
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
      const n = (t && pn(t)) || this._popupRedirectResolver;
      W(n, this, "argument-error"),
        (this.redirectPersistenceManager = await fo.create(this, [pn(n._redirectPersistence)], "redirectUser")),
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
  registerStateListener(t, n, r, o) {
    if (this._deleted) return () => {};
    const i = typeof n == "function" ? n : n.next.bind(n);
    let s = !1;
    const a = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    if (
      (W(a, this, "internal-error"),
      a.then(() => {
        s || i(this.currentUser);
      }),
      typeof n == "function")
    ) {
      const l = t.addObserver(n, r, o);
      return () => {
        (s = !0), l();
      };
    } else {
      const l = t.addObserver(n);
      return () => {
        (s = !0), l();
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
    return W(this.persistenceManager, this, "internal-error"), this.persistenceManager;
  }
  _logFramework(t) {
    !t ||
      this.frameworks.includes(t) ||
      (this.frameworks.push(t),
      this.frameworks.sort(),
      (this.clientVersion = Mv(this.config.clientPlatform, this._getFrameworks())));
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
    const o = await this._getAppCheckToken();
    return o && (n["X-Firebase-AppCheck"] = o), n;
  }
  async _getAppCheckToken() {
    var t;
    const n = await ((t = this.appCheckServiceProvider.getImmediate({ optional: !0 })) === null || t === void 0
      ? void 0
      : t.getToken());
    return (
      n != null && n.error && l_(`Error while retrieving App Check token: ${n.error}`), n == null ? void 0 : n.token
    );
  }
}
function Oo(e) {
  return Pr(e);
}
class zp {
  constructor(t) {
    (this.auth = t), (this.observer = null), (this.addObserver = Jw((n) => (this.observer = n)));
  }
  get next() {
    return W(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer);
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
 */ let Qa = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: "",
};
function M_(e) {
  Qa = e;
}
function Lv(e) {
  return Qa.loadJS(e);
}
function L_() {
  return Qa.recaptchaEnterpriseScript;
}
function $_() {
  return Qa.gapiScript;
}
function D_(e) {
  return `__${e}${Math.floor(Math.random() * 1e6)}`;
}
const F_ = "recaptcha-enterprise",
  z_ = "NO_RECAPTCHA";
class U_ {
  constructor(t) {
    (this.type = F_), (this.auth = Oo(t));
  }
  async verify(t = "verify", n = !1) {
    async function r(i) {
      if (!n) {
        if (i.tenantId == null && i._agentRecaptchaConfig != null) return i._agentRecaptchaConfig.siteKey;
        if (i.tenantId != null && i._tenantRecaptchaConfigs[i.tenantId] !== void 0)
          return i._tenantRecaptchaConfigs[i.tenantId].siteKey;
      }
      return new Promise(async (s, a) => {
        v_(i, { clientType: "CLIENT_TYPE_WEB", version: "RECAPTCHA_ENTERPRISE" })
          .then((l) => {
            if (l.recaptchaKey === void 0) a(new Error("recaptcha Enterprise site key undefined"));
            else {
              const u = new g_(l);
              return (
                i.tenantId == null ? (i._agentRecaptchaConfig = u) : (i._tenantRecaptchaConfigs[i.tenantId] = u),
                s(u.siteKey)
              );
            }
          })
          .catch((l) => {
            a(l);
          });
      });
    }
    function o(i, s, a) {
      const l = window.grecaptcha;
      Mp(l)
        ? l.enterprise.ready(() => {
            l.enterprise
              .execute(i, { action: t })
              .then((u) => {
                s(u);
              })
              .catch(() => {
                s(z_);
              });
          })
        : a(Error("No reCAPTCHA enterprise script loaded."));
    }
    return new Promise((i, s) => {
      r(this.auth)
        .then((a) => {
          if (!n && Mp(window.grecaptcha)) o(a, i, s);
          else {
            if (typeof window > "u") {
              s(new Error("RecaptchaVerifier is only supported in browser"));
              return;
            }
            let l = L_();
            l.length !== 0 && (l += a),
              Lv(l)
                .then(() => {
                  o(a, i, s);
                })
                .catch((u) => {
                  s(u);
                });
          }
        })
        .catch((a) => {
          s(a);
        });
    });
  }
}
async function Up(e, t, n, r = !1) {
  const o = new U_(e);
  let i;
  try {
    i = await o.verify(n);
  } catch {
    i = await o.verify(n, !0);
  }
  const s = Object.assign({}, t);
  return (
    r ? Object.assign(s, { captchaResp: i }) : Object.assign(s, { captchaResponse: i }),
    Object.assign(s, { clientType: "CLIENT_TYPE_WEB" }),
    Object.assign(s, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
    s
  );
}
async function jp(e, t, n, r) {
  var o;
  if (!((o = e._getRecaptchaConfig()) === null || o === void 0) && o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")) {
    const i = await Up(e, t, n, n === "getOobCode");
    return r(e, i);
  } else
    return r(e, t).catch(async (i) => {
      if (i.code === "auth/missing-recaptcha-token") {
        console.log(
          `${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        );
        const s = await Up(e, t, n, n === "getOobCode");
        return r(e, s);
      } else return Promise.reject(i);
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
  const n = hv(e, "auth");
  if (n.isInitialized()) {
    const o = n.getImmediate(),
      i = n.getOptions();
    if (ya(i, t ?? {})) return o;
    Ht(o, "already-initialized");
  }
  return n.initialize({ options: t });
}
function B_(e, t) {
  const n = (t == null ? void 0 : t.persistence) || [],
    r = (Array.isArray(n) ? n : [n]).map(pn);
  t != null && t.errorMap && e._updateErrorMap(t.errorMap),
    e._initializeWithPersistence(r, t == null ? void 0 : t.popupRedirectResolver);
}
function W_(e, t, n) {
  const r = Oo(e);
  W(r._canInitEmulator, r, "emulator-config-failed"), W(/^https?:\/\//.test(t), r, "invalid-emulator-scheme");
  const o = !!(n != null && n.disableWarnings),
    i = $v(t),
    { host: s, port: a } = H_(t),
    l = a === null ? "" : `:${a}`;
  (r.config.emulator = { url: `${i}//${s}${l}/` }),
    (r.settings.appVerificationDisabledForTesting = !0),
    (r.emulatorConfig = Object.freeze({
      host: s,
      port: a,
      protocol: i.replace(":", ""),
      options: Object.freeze({ disableWarnings: o }),
    })),
    o || V_();
}
function $v(e) {
  const t = e.indexOf(":");
  return t < 0 ? "" : e.substr(0, t + 1);
}
function H_(e) {
  const t = $v(e),
    n = /(\/\/)?([^?#/]+)/.exec(e.substr(t.length));
  if (!n) return { host: "", port: null };
  const r = n[2].split("@").pop() || "",
    o = /^(\[[^\]]+\])(:|$)/.exec(r);
  if (o) {
    const i = o[1];
    return { host: i, port: Bp(r.substr(i.length + 1)) };
  } else {
    const [i, s] = r.split(":");
    return { host: i, port: Bp(s) };
  }
}
function Bp(e) {
  if (!e) return null;
  const t = Number(e);
  return isNaN(t) ? null : t;
}
function V_() {
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
 */ class Fd {
  constructor(t, n) {
    (this.providerId = t), (this.signInMethod = n);
  }
  toJSON() {
    return dn("not implemented");
  }
  _getIdTokenResponse(t) {
    return dn("not implemented");
  }
  _linkToIdToken(t, n) {
    return dn("not implemented");
  }
  _getReauthenticationResolver(t) {
    return dn("not implemented");
  }
}
async function K_(e, t) {
  return nr(e, "POST", "/v1/accounts:signUp", t);
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
  return Ga(e, "POST", "/v1/accounts:signInWithPassword", Rr(e, t));
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
 */ async function q_(e, t) {
  return Ga(e, "POST", "/v1/accounts:signInWithEmailLink", Rr(e, t));
}
async function Q_(e, t) {
  return Ga(e, "POST", "/v1/accounts:signInWithEmailLink", Rr(e, t));
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
 */ class Di extends Fd {
  constructor(t, n, r, o = null) {
    super("password", r), (this._email = t), (this._password = n), (this._tenantId = o);
  }
  static _fromEmailAndPassword(t, n) {
    return new Di(t, n, "password");
  }
  static _fromEmailAndCode(t, n, r = null) {
    return new Di(t, n, "emailLink", r);
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
        return jp(t, n, "signInWithPassword", G_);
      case "emailLink":
        return q_(t, { email: this._email, oobCode: this._password });
      default:
        Ht(t, "internal-error");
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
        return jp(t, r, "signUpPassword", K_);
      case "emailLink":
        return Q_(t, { idToken: n, email: this._email, oobCode: this._password });
      default:
        Ht(t, "internal-error");
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
 */ async function po(e, t) {
  return Ga(e, "POST", "/v1/accounts:signInWithIdp", Rr(e, t));
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
 */ const Y_ = "http://localhost";
class kr extends Fd {
  constructor() {
    super(...arguments), (this.pendingToken = null);
  }
  static _fromParams(t) {
    const n = new kr(t.providerId, t.signInMethod);
    return (
      t.idToken || t.accessToken
        ? (t.idToken && (n.idToken = t.idToken),
          t.accessToken && (n.accessToken = t.accessToken),
          t.nonce && !t.pendingToken && (n.nonce = t.nonce),
          t.pendingToken && (n.pendingToken = t.pendingToken))
        : t.oauthToken && t.oauthTokenSecret
        ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
        : Ht("argument-error"),
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
      { providerId: r, signInMethod: o } = n,
      i = Ad(n, ["providerId", "signInMethod"]);
    if (!r || !o) return null;
    const s = new kr(r, o);
    return (
      (s.idToken = i.idToken || void 0),
      (s.accessToken = i.accessToken || void 0),
      (s.secret = i.secret),
      (s.nonce = i.nonce),
      (s.pendingToken = i.pendingToken || null),
      s
    );
  }
  _getIdTokenResponse(t) {
    const n = this.buildRequest();
    return po(t, n);
  }
  _linkToIdToken(t, n) {
    const r = this.buildRequest();
    return (r.idToken = n), po(t, r);
  }
  _getReauthenticationResolver(t) {
    const n = this.buildRequest();
    return (n.autoCreate = !1), po(t, n);
  }
  buildRequest() {
    const t = { requestUri: Y_, returnSecureToken: !0 };
    if (this.pendingToken) t.pendingToken = this.pendingToken;
    else {
      const n = {};
      this.idToken && (n.id_token = this.idToken),
        this.accessToken && (n.access_token = this.accessToken),
        this.secret && (n.oauth_token_secret = this.secret),
        (n.providerId = this.providerId),
        this.nonce && !this.pendingToken && (n.nonce = this.nonce),
        (t.postBody = qi(n));
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
 */ function X_(e) {
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
function J_(e) {
  const t = ti(ni(e)).link,
    n = t ? ti(ni(t)).deep_link_id : null,
    r = ti(ni(e)).deep_link_id;
  return (r ? ti(ni(r)).link : null) || r || n || t || e;
}
class zd {
  constructor(t) {
    var n, r, o, i, s, a;
    const l = ti(ni(t)),
      u = (n = l.apiKey) !== null && n !== void 0 ? n : null,
      d = (r = l.oobCode) !== null && r !== void 0 ? r : null,
      p = X_((o = l.mode) !== null && o !== void 0 ? o : null);
    W(u && d && p, "argument-error"),
      (this.apiKey = u),
      (this.operation = p),
      (this.code = d),
      (this.continueUrl = (i = l.continueUrl) !== null && i !== void 0 ? i : null),
      (this.languageCode = (s = l.languageCode) !== null && s !== void 0 ? s : null),
      (this.tenantId = (a = l.tenantId) !== null && a !== void 0 ? a : null);
  }
  static parseLink(t) {
    const n = J_(t);
    try {
      return new zd(n);
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
 */ class No {
  constructor() {
    this.providerId = No.PROVIDER_ID;
  }
  static credential(t, n) {
    return Di._fromEmailAndPassword(t, n);
  }
  static credentialWithLink(t, n) {
    const r = zd.parseLink(n);
    return W(r, "argument-error"), Di._fromEmailAndCode(t, r.code, r.tenantId);
  }
}
No.PROVIDER_ID = "password";
No.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
No.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
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
 */ class Dv {
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
 */ class Xi extends Dv {
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
 */ class On extends Xi {
  constructor() {
    super("facebook.com");
  }
  static credential(t) {
    return kr._fromParams({ providerId: On.PROVIDER_ID, signInMethod: On.FACEBOOK_SIGN_IN_METHOD, accessToken: t });
  }
  static credentialFromResult(t) {
    return On.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return On.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return On.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
On.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
On.PROVIDER_ID = "facebook.com";
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
 */ class Nn extends Xi {
  constructor() {
    super("google.com"), this.addScope("profile");
  }
  static credential(t, n) {
    return kr._fromParams({
      providerId: Nn.PROVIDER_ID,
      signInMethod: Nn.GOOGLE_SIGN_IN_METHOD,
      idToken: t,
      accessToken: n,
    });
  }
  static credentialFromResult(t) {
    return Nn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Nn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthIdToken: n, oauthAccessToken: r } = t;
    if (!n && !r) return null;
    try {
      return Nn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Nn.GOOGLE_SIGN_IN_METHOD = "google.com";
Nn.PROVIDER_ID = "google.com";
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
 */ class An extends Xi {
  constructor() {
    super("github.com");
  }
  static credential(t) {
    return kr._fromParams({ providerId: An.PROVIDER_ID, signInMethod: An.GITHUB_SIGN_IN_METHOD, accessToken: t });
  }
  static credentialFromResult(t) {
    return An.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return An.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t || !("oauthAccessToken" in t) || !t.oauthAccessToken) return null;
    try {
      return An.credential(t.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
An.GITHUB_SIGN_IN_METHOD = "github.com";
An.PROVIDER_ID = "github.com";
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
 */ class Mn extends Xi {
  constructor() {
    super("twitter.com");
  }
  static credential(t, n) {
    return kr._fromParams({
      providerId: Mn.PROVIDER_ID,
      signInMethod: Mn.TWITTER_SIGN_IN_METHOD,
      oauthToken: t,
      oauthTokenSecret: n,
    });
  }
  static credentialFromResult(t) {
    return Mn.credentialFromTaggedObject(t);
  }
  static credentialFromError(t) {
    return Mn.credentialFromTaggedObject(t.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: t }) {
    if (!t) return null;
    const { oauthAccessToken: n, oauthTokenSecret: r } = t;
    if (!n || !r) return null;
    try {
      return Mn.credential(n, r);
    } catch {
      return null;
    }
  }
}
Mn.TWITTER_SIGN_IN_METHOD = "twitter.com";
Mn.PROVIDER_ID = "twitter.com";
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
 */ class Co {
  constructor(t) {
    (this.user = t.user),
      (this.providerId = t.providerId),
      (this._tokenResponse = t._tokenResponse),
      (this.operationType = t.operationType);
  }
  static async _fromIdTokenResponse(t, n, r, o = !1) {
    const i = await fn._fromIdTokenResponse(t, r, o),
      s = Wp(r);
    return new Co({ user: i, providerId: s, _tokenResponse: r, operationType: n });
  }
  static async _forOperation(t, n, r) {
    await t._updateTokensIfNecessary(r, !0);
    const o = Wp(r);
    return new Co({ user: t, providerId: o, _tokenResponse: r, operationType: n });
  }
}
function Wp(e) {
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
 */ class Ea extends tr {
  constructor(t, n, r, o) {
    var i;
    super(n.code, n.message),
      (this.operationType = r),
      (this.user = o),
      Object.setPrototypeOf(this, Ea.prototype),
      (this.customData = {
        appName: t.name,
        tenantId: (i = t.tenantId) !== null && i !== void 0 ? i : void 0,
        _serverResponse: n.customData._serverResponse,
        operationType: r,
      });
  }
  static _fromErrorAndOperation(t, n, r, o) {
    return new Ea(t, n, r, o);
  }
}
function Fv(e, t, n, r) {
  return (t === "reauthenticate" ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)).catch((i) => {
    throw i.code === "auth/multi-factor-auth-required" ? Ea._fromErrorAndOperation(e, i, t, r) : i;
  });
}
async function Z_(e, t, n = !1) {
  const r = await $i(e, t._linkToIdToken(e.auth, await e.getIdToken()), n);
  return Co._forOperation(e, "link", r);
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
 */ async function eE(e, t, n = !1) {
  const { auth: r } = e;
  if (cn(r.app)) return Promise.reject(qn(r));
  const o = "reauthenticate";
  try {
    const i = await $i(e, Fv(r, o, t, e), n);
    W(i.idToken, r, "internal-error");
    const s = $d(i.idToken);
    W(s, r, "internal-error");
    const { sub: a } = s;
    return W(e.uid === a, r, "user-mismatch"), Co._forOperation(e, o, i);
  } catch (i) {
    throw ((i == null ? void 0 : i.code) === "auth/user-not-found" && Ht(r, "user-mismatch"), i);
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
 */ async function zv(e, t, n = !1) {
  if (cn(e.app)) return Promise.reject(qn(e));
  const r = "signIn",
    o = await Fv(e, r, t),
    i = await Co._fromIdTokenResponse(e, r, o);
  return n || (await e._updateCurrentUser(i.user)), i;
}
async function tE(e, t) {
  return zv(Oo(e), t);
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
 */ async function nE(e) {
  const t = Oo(e);
  t._getPasswordPolicyInternal() && (await t._updatePasswordPolicy());
}
function rE(e, t, n) {
  return cn(e.app)
    ? Promise.reject(qn(e))
    : tE(Pr(e), No.credential(t, n)).catch(async (r) => {
        throw (r.code === "auth/password-does-not-meet-requirements" && nE(e), r);
      });
}
function oE(e, t, n, r) {
  return Pr(e).onIdTokenChanged(t, n, r);
}
function iE(e, t, n) {
  return Pr(e).beforeAuthStateChanged(t, n);
}
const ka = "__sak";
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
 */ class Uv {
  constructor(t, n) {
    (this.storageRetriever = t), (this.type = n);
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(ka, "1"), this.storage.removeItem(ka), Promise.resolve(!0))
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
 */ function sE() {
  const e = Ze();
  return Dd(e) || qa(e);
}
const aE = 1e3,
  lE = 10;
class jv extends Uv {
  constructor() {
    super(() => window.localStorage, "LOCAL"),
      (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.safariLocalStorageNotSynced = sE() && T_()),
      (this.fallbackToPolling = Av()),
      (this._shouldAllowMigration = !0);
  }
  forAllChangedKeys(t) {
    for (const n of Object.keys(this.listeners)) {
      const r = this.storage.getItem(n),
        o = this.localCache[n];
      r !== o && t(n, o, r);
    }
  }
  onStorageEvent(t, n = !1) {
    if (!t.key) {
      this.forAllChangedKeys((s, a, l) => {
        this.notifyListeners(s, l);
      });
      return;
    }
    const r = t.key;
    if ((n ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced)) {
      const s = this.storage.getItem(r);
      if (t.newValue !== s) t.newValue !== null ? this.storage.setItem(r, t.newValue) : this.storage.removeItem(r);
      else if (this.localCache[r] === t.newValue && !n) return;
    }
    const o = () => {
        const s = this.storage.getItem(r);
        (!n && this.localCache[r] === s) || this.notifyListeners(r, s);
      },
      i = this.storage.getItem(r);
    b_() && i !== t.newValue && t.newValue !== t.oldValue ? setTimeout(o, lE) : o();
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const o of Array.from(r)) o(n && JSON.parse(n));
  }
  startPolling() {
    this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((t, n, r) => {
          this.onStorageEvent(new StorageEvent("storage", { key: t, oldValue: n, newValue: r }), !0);
        });
      }, aE));
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
jv.type = "LOCAL";
const uE = jv;
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
 */ class Bv extends Uv {
  constructor() {
    super(() => window.sessionStorage, "SESSION");
  }
  _addListener(t, n) {}
  _removeListener(t, n) {}
}
Bv.type = "SESSION";
const Wv = Bv;
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
 */ function cE(e) {
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
 */ class Ya {
  constructor(t) {
    (this.eventTarget = t), (this.handlersMap = {}), (this.boundEventHandler = this.handleEvent.bind(this));
  }
  static _getInstance(t) {
    const n = this.receivers.find((o) => o.isListeningto(t));
    if (n) return n;
    const r = new Ya(t);
    return this.receivers.push(r), r;
  }
  isListeningto(t) {
    return this.eventTarget === t;
  }
  async handleEvent(t) {
    const n = t,
      { eventId: r, eventType: o, data: i } = n.data,
      s = this.handlersMap[o];
    if (!(s != null && s.size)) return;
    n.ports[0].postMessage({ status: "ack", eventId: r, eventType: o });
    const a = Array.from(s).map(async (u) => u(n.origin, i)),
      l = await cE(a);
    n.ports[0].postMessage({ status: "done", eventId: r, eventType: o, response: l });
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
Ya.receivers = [];
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
 */ function Ud(e = "", t = 10) {
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
 */ class dE {
  constructor(t) {
    (this.target = t), (this.handlers = new Set());
  }
  removeMessageHandler(t) {
    t.messageChannel &&
      (t.messageChannel.port1.removeEventListener("message", t.onMessage), t.messageChannel.port1.close()),
      this.handlers.delete(t);
  }
  async _send(t, n, r = 50) {
    const o = typeof MessageChannel < "u" ? new MessageChannel() : null;
    if (!o) throw new Error("connection_unavailable");
    let i, s;
    return new Promise((a, l) => {
      const u = Ud("", 20);
      o.port1.start();
      const d = setTimeout(() => {
        l(new Error("unsupported_event"));
      }, r);
      (s = {
        messageChannel: o,
        onMessage(p) {
          const h = p;
          if (h.data.eventId === u)
            switch (h.data.status) {
              case "ack":
                clearTimeout(d),
                  (i = setTimeout(() => {
                    l(new Error("timeout"));
                  }, 3e3));
                break;
              case "done":
                clearTimeout(i), a(h.data.response);
                break;
              default:
                clearTimeout(d), clearTimeout(i), l(new Error("invalid_response"));
                break;
            }
        },
      }),
        this.handlers.add(s),
        o.port1.addEventListener("message", s.onMessage),
        this.target.postMessage({ eventType: t, eventId: u, data: n }, [o.port2]);
    }).finally(() => {
      s && this.removeMessageHandler(s);
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
 */ function tn() {
  return window;
}
function fE(e) {
  tn().location.href = e;
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
 */ function Hv() {
  return typeof tn().WorkerGlobalScope < "u" && typeof tn().importScripts == "function";
}
async function pE() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function hE() {
  var e;
  return (
    ((e = navigator == null ? void 0 : navigator.serviceWorker) === null || e === void 0 ? void 0 : e.controller) ||
    null
  );
}
function mE() {
  return Hv() ? self : null;
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
 */ const Vv = "firebaseLocalStorageDb",
  gE = 1,
  Ca = "firebaseLocalStorage",
  Kv = "fbase_key";
class Ji {
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
function Xa(e, t) {
  return e.transaction([Ca], t ? "readwrite" : "readonly").objectStore(Ca);
}
function vE() {
  const e = indexedDB.deleteDatabase(Vv);
  return new Ji(e).toPromise();
}
function xc() {
  const e = indexedDB.open(Vv, gE);
  return new Promise((t, n) => {
    e.addEventListener("error", () => {
      n(e.error);
    }),
      e.addEventListener("upgradeneeded", () => {
        const r = e.result;
        try {
          r.createObjectStore(Ca, { keyPath: Kv });
        } catch (o) {
          n(o);
        }
      }),
      e.addEventListener("success", async () => {
        const r = e.result;
        r.objectStoreNames.contains(Ca) ? t(r) : (r.close(), await vE(), t(await xc()));
      });
  });
}
async function Hp(e, t, n) {
  const r = Xa(e, !0).put({ [Kv]: t, value: n });
  return new Ji(r).toPromise();
}
async function yE(e, t) {
  const n = Xa(e, !1).get(t),
    r = await new Ji(n).toPromise();
  return r === void 0 ? null : r.value;
}
function Vp(e, t) {
  const n = Xa(e, !0).delete(t);
  return new Ji(n).toPromise();
}
const wE = 800,
  SE = 3;
class Gv {
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
    return this.db ? this.db : ((this.db = await xc()), this.db);
  }
  async _withRetries(t) {
    let n = 0;
    for (;;)
      try {
        const r = await this._openDb();
        return await t(r);
      } catch (r) {
        if (n++ > SE) throw r;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return Hv() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    (this.receiver = Ya._getInstance(mE())),
      this.receiver._subscribe("keyChanged", async (t, n) => ({ keyProcessed: (await this._poll()).includes(n.key) })),
      this.receiver._subscribe("ping", async (t, n) => ["keyChanged"]);
  }
  async initializeSender() {
    var t, n;
    if (((this.activeServiceWorker = await pE()), !this.activeServiceWorker)) return;
    this.sender = new dE(this.activeServiceWorker);
    const r = await this.sender._send("ping", {}, 800);
    r &&
      !((t = r[0]) === null || t === void 0) &&
      t.fulfilled &&
      !((n = r[0]) === null || n === void 0) &&
      n.value.includes("keyChanged") &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(t) {
    if (!(!this.sender || !this.activeServiceWorker || hE() !== this.activeServiceWorker))
      try {
        await this.sender._send("keyChanged", { key: t }, this.serviceWorkerReceiverAvailable ? 800 : 50);
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const t = await xc();
      return await Hp(t, ka, "1"), await Vp(t, ka), !0;
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
      async () => (await this._withRetries((r) => Hp(r, t, n)), (this.localCache[t] = n), this.notifyServiceWorker(t))
    );
  }
  async _get(t) {
    const n = await this._withRetries((r) => yE(r, t));
    return (this.localCache[t] = n), n;
  }
  async _remove(t) {
    return this._withPendingWrite(
      async () => (await this._withRetries((n) => Vp(n, t)), delete this.localCache[t], this.notifyServiceWorker(t))
    );
  }
  async _poll() {
    const t = await this._withRetries((o) => {
      const i = Xa(o, !1).getAll();
      return new Ji(i).toPromise();
    });
    if (!t) return [];
    if (this.pendingWrites !== 0) return [];
    const n = [],
      r = new Set();
    if (t.length !== 0)
      for (const { fbase_key: o, value: i } of t)
        r.add(o), JSON.stringify(this.localCache[o]) !== JSON.stringify(i) && (this.notifyListeners(o, i), n.push(o));
    for (const o of Object.keys(this.localCache))
      this.localCache[o] && !r.has(o) && (this.notifyListeners(o, null), n.push(o));
    return n;
  }
  notifyListeners(t, n) {
    this.localCache[t] = n;
    const r = this.listeners[t];
    if (r) for (const o of Array.from(r)) o(n);
  }
  startPolling() {
    this.stopPolling(), (this.pollTimer = setInterval(async () => this._poll(), wE));
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
Gv.type = "LOCAL";
const _E = Gv;
new Yi(3e4, 6e4);
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
 */ function EE(e, t) {
  return t ? pn(t) : (W(e._popupRedirectResolver, e, "argument-error"), e._popupRedirectResolver);
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
 */ class jd extends Fd {
  constructor(t) {
    super("custom", "custom"), (this.params = t);
  }
  _getIdTokenResponse(t) {
    return po(t, this._buildIdpRequest());
  }
  _linkToIdToken(t, n) {
    return po(t, this._buildIdpRequest(n));
  }
  _getReauthenticationResolver(t) {
    return po(t, this._buildIdpRequest());
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
function kE(e) {
  return zv(e.auth, new jd(e), e.bypassAuthState);
}
function CE(e) {
  const { auth: t, user: n } = e;
  return W(n, t, "internal-error"), eE(n, new jd(e), e.bypassAuthState);
}
async function xE(e) {
  const { auth: t, user: n } = e;
  return W(n, t, "internal-error"), Z_(n, new jd(e), e.bypassAuthState);
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
 */ class qv {
  constructor(t, n, r, o, i = !1) {
    (this.auth = t),
      (this.resolver = r),
      (this.user = o),
      (this.bypassAuthState = i),
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
    const { urlResponse: n, sessionId: r, postBody: o, tenantId: i, error: s, type: a } = t;
    if (s) {
      this.reject(s);
      return;
    }
    const l = {
      auth: this.auth,
      requestUri: n,
      sessionId: r,
      tenantId: i || void 0,
      postBody: o || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(a)(l));
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
        return kE;
      case "linkViaPopup":
      case "linkViaRedirect":
        return xE;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return CE;
      default:
        Ht(this.auth, "internal-error");
    }
  }
  resolve(t) {
    wn(this.pendingPromise, "Pending promise was never set"),
      this.pendingPromise.resolve(t),
      this.unregisterAndCleanUp();
  }
  reject(t) {
    wn(this.pendingPromise, "Pending promise was never set"),
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
 */ const IE = new Yi(2e3, 1e4);
class no extends qv {
  constructor(t, n, r, o, i) {
    super(t, n, o, i),
      (this.provider = r),
      (this.authWindow = null),
      (this.pollId = null),
      no.currentPopupAction && no.currentPopupAction.cancel(),
      (no.currentPopupAction = this);
  }
  async executeNotNull() {
    const t = await this.execute();
    return W(t, this.auth, "internal-error"), t;
  }
  async onExecution() {
    wn(this.filter.length === 1, "Popup operations only handle one event");
    const t = Ud();
    (this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], t)),
      (this.authWindow.associatedEvent = t),
      this.resolver._originValidation(this.auth).catch((n) => {
        this.reject(n);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
        n || this.reject(en(this.auth, "web-storage-unsupported"));
      }),
      this.pollUserCancellation();
  }
  get eventId() {
    var t;
    return ((t = this.authWindow) === null || t === void 0 ? void 0 : t.associatedEvent) || null;
  }
  cancel() {
    this.reject(en(this.auth, "cancelled-popup-request"));
  }
  cleanUp() {
    this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (no.currentPopupAction = null);
  }
  pollUserCancellation() {
    const t = () => {
      var n, r;
      if (
        !((r = (n = this.authWindow) === null || n === void 0 ? void 0 : n.window) === null || r === void 0) &&
        r.closed
      ) {
        this.pollId = window.setTimeout(() => {
          (this.pollId = null), this.reject(en(this.auth, "popup-closed-by-user"));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(t, IE.get());
    };
    t();
  }
}
no.currentPopupAction = null;
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
 */ const bE = "pendingRedirect",
  js = new Map();
class TE extends qv {
  constructor(t, n, r = !1) {
    super(t, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], n, void 0, r),
      (this.eventId = null);
  }
  async execute() {
    let t = js.get(this.auth._key());
    if (!t) {
      try {
        const r = (await PE(this.resolver, this.auth)) ? await super.execute() : null;
        t = () => Promise.resolve(r);
      } catch (n) {
        t = () => Promise.reject(n);
      }
      js.set(this.auth._key(), t);
    }
    return this.bypassAuthState || js.set(this.auth._key(), () => Promise.resolve(null)), t();
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
async function PE(e, t) {
  const n = NE(t),
    r = OE(e);
  if (!(await r._isAvailable())) return !1;
  const o = (await r._get(n)) === "true";
  return await r._remove(n), o;
}
function RE(e, t) {
  js.set(e._key(), t);
}
function OE(e) {
  return pn(e._redirectPersistence);
}
function NE(e) {
  return Us(bE, e.config.apiKey, e.name);
}
async function AE(e, t, n = !1) {
  if (cn(e.app)) return Promise.reject(qn(e));
  const r = Oo(e),
    o = EE(r, t),
    s = await new TE(r, o, n).execute();
  return (
    s &&
      !n &&
      (delete s.user._redirectEventId, await r._persistUserIfCurrent(s.user), await r._setRedirectUser(null, t)),
    s
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
 */ const ME = 10 * 60 * 1e3;
class LE {
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
        !$E(t) ||
        ((this.hasHandledPotentialRedirect = !0), n || ((this.queuedRedirectEvent = t), (n = !0))),
      n
    );
  }
  sendToConsumer(t, n) {
    var r;
    if (t.error && !Qv(t)) {
      const o = ((r = t.error.code) === null || r === void 0 ? void 0 : r.split("auth/")[1]) || "internal-error";
      n.onError(en(this.auth, o));
    } else n.onAuthEvent(t);
  }
  isEventForConsumer(t, n) {
    const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId);
    return n.filter.includes(t.type) && r;
  }
  hasEventBeenHandled(t) {
    return (
      Date.now() - this.lastProcessedEventTime >= ME && this.cachedEventUids.clear(), this.cachedEventUids.has(Kp(t))
    );
  }
  saveEventToCache(t) {
    this.cachedEventUids.add(Kp(t)), (this.lastProcessedEventTime = Date.now());
  }
}
function Kp(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter((t) => t).join("-");
}
function Qv({ type: e, error: t }) {
  return e === "unknown" && (t == null ? void 0 : t.code) === "auth/no-auth-event";
}
function $E(e) {
  switch (e.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return !0;
    case "unknown":
      return Qv(e);
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
 */ async function DE(e, t = {}) {
  return nr(e, "GET", "/v1/projects", t);
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
 */ const FE = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  zE = /^https?/;
async function UE(e) {
  if (e.config.emulator) return;
  const { authorizedDomains: t } = await DE(e);
  for (const n of t)
    try {
      if (jE(n)) return;
    } catch {}
  Ht(e, "unauthorized-domain");
}
function jE(e) {
  const t = kc(),
    { protocol: n, hostname: r } = new URL(t);
  if (e.startsWith("chrome-extension://")) {
    const s = new URL(e);
    return s.hostname === "" && r === ""
      ? n === "chrome-extension:" && e.replace("chrome-extension://", "") === t.replace("chrome-extension://", "")
      : n === "chrome-extension:" && s.hostname === r;
  }
  if (!zE.test(n)) return !1;
  if (FE.test(e)) return r === e;
  const o = e.replace(/\./g, "\\.");
  return new RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(r);
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
 */ const BE = new Yi(3e4, 6e4);
function Gp() {
  const e = tn().___jsl;
  if (e != null && e.H) {
    for (const t of Object.keys(e.H))
      if (((e.H[t].r = e.H[t].r || []), (e.H[t].L = e.H[t].L || []), (e.H[t].r = [...e.H[t].L]), e.CP))
        for (let n = 0; n < e.CP.length; n++) e.CP[n] = null;
  }
}
function WE(e) {
  return new Promise((t, n) => {
    var r, o, i;
    function s() {
      Gp(),
        gapi.load("gapi.iframes", {
          callback: () => {
            t(gapi.iframes.getContext());
          },
          ontimeout: () => {
            Gp(), n(en(e, "network-request-failed"));
          },
          timeout: BE.get(),
        });
    }
    if (!((o = (r = tn().gapi) === null || r === void 0 ? void 0 : r.iframes) === null || o === void 0) && o.Iframe)
      t(gapi.iframes.getContext());
    else if (!((i = tn().gapi) === null || i === void 0) && i.load) s();
    else {
      const a = D_("iframefcb");
      return (
        (tn()[a] = () => {
          gapi.load ? s() : n(en(e, "network-request-failed"));
        }),
        Lv(`${$_()}?onload=${a}`).catch((l) => n(l))
      );
    }
  }).catch((t) => {
    throw ((Bs = null), t);
  });
}
let Bs = null;
function HE(e) {
  return (Bs = Bs || WE(e)), Bs;
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
 */ const VE = new Yi(5e3, 15e3),
  KE = "__/auth/iframe",
  GE = "emulator/auth/iframe",
  qE = {
    style: { position: "absolute", top: "-100px", width: "1px", height: "1px" },
    "aria-hidden": "true",
    tabindex: "-1",
  },
  QE = new Map([
    ["identitytoolkit.googleapis.com", "p"],
    ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
    ["test-identitytoolkit.sandbox.googleapis.com", "t"],
  ]);
function YE(e) {
  const t = e.config;
  W(t.authDomain, e, "auth-domain-config-required");
  const n = t.emulator ? Ld(t, GE) : `https://${e.config.authDomain}/${KE}`,
    r = { apiKey: t.apiKey, appName: e.name, v: Qi },
    o = QE.get(e.config.apiHost);
  o && (r.eid = o);
  const i = e._getFrameworks();
  return i.length && (r.fw = i.join(",")), `${n}?${qi(r).slice(1)}`;
}
async function XE(e) {
  const t = await HE(e),
    n = tn().gapi;
  return (
    W(n, e, "internal-error"),
    t.open(
      {
        where: document.body,
        url: YE(e),
        messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: qE,
        dontclear: !0,
      },
      (r) =>
        new Promise(async (o, i) => {
          await r.restyle({ setHideOnLeave: !1 });
          const s = en(e, "network-request-failed"),
            a = tn().setTimeout(() => {
              i(s);
            }, VE.get());
          function l() {
            tn().clearTimeout(a), o(r);
          }
          r.ping(l).then(l, () => {
            i(s);
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
 */ const JE = { location: "yes", resizable: "yes", statusbar: "yes", toolbar: "no" },
  ZE = 500,
  ek = 600,
  tk = "_blank",
  nk = "http://localhost";
class qp {
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
function rk(e, t, n, r = ZE, o = ek) {
  const i = Math.max((window.screen.availHeight - o) / 2, 0).toString(),
    s = Math.max((window.screen.availWidth - r) / 2, 0).toString();
  let a = "";
  const l = Object.assign(Object.assign({}, JE), { width: r.toString(), height: o.toString(), top: i, left: s }),
    u = Ze().toLowerCase();
  n && (a = Tv(u) ? tk : n), bv(u) && ((t = t || nk), (l.scrollbars = "yes"));
  const d = Object.entries(l).reduce((h, [y, g]) => `${h}${y}=${g},`, "");
  if (I_(u) && a !== "_self") return ok(t || "", a), new qp(null);
  const p = window.open(t || "", a, d);
  W(p, e, "popup-blocked");
  try {
    p.focus();
  } catch {}
  return new qp(p);
}
function ok(e, t) {
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
 */ const ik = "__/auth/handler",
  sk = "emulator/auth/handler",
  ak = encodeURIComponent("fac");
async function Qp(e, t, n, r, o, i) {
  W(e.config.authDomain, e, "auth-domain-config-required"), W(e.config.apiKey, e, "invalid-api-key");
  const s = { apiKey: e.config.apiKey, appName: e.name, authType: n, redirectUrl: r, v: Qi, eventId: o };
  if (t instanceof Dv) {
    t.setDefaultLanguage(e.languageCode),
      (s.providerId = t.providerId || ""),
      Xw(t.getCustomParameters()) || (s.customParameters = JSON.stringify(t.getCustomParameters()));
    for (const [d, p] of Object.entries(i || {})) s[d] = p;
  }
  if (t instanceof Xi) {
    const d = t.getScopes().filter((p) => p !== "");
    d.length > 0 && (s.scopes = d.join(","));
  }
  e.tenantId && (s.tid = e.tenantId);
  const a = s;
  for (const d of Object.keys(a)) a[d] === void 0 && delete a[d];
  const l = await e._getAppCheckToken(),
    u = l ? `#${ak}=${encodeURIComponent(l)}` : "";
  return `${lk(e)}?${qi(a).slice(1)}${u}`;
}
function lk({ config: e }) {
  return e.emulator ? Ld(e, sk) : `https://${e.authDomain}/${ik}`;
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
 */ const hu = "webStorageSupport";
class uk {
  constructor() {
    (this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = Wv),
      (this._completeRedirectFn = AE),
      (this._overrideRedirectResult = RE);
  }
  async _openPopup(t, n, r, o) {
    var i;
    wn(
      (i = this.eventManagers[t._key()]) === null || i === void 0 ? void 0 : i.manager,
      "_initialize() not called before _openPopup()"
    );
    const s = await Qp(t, n, r, kc(), o);
    return rk(t, s, Ud());
  }
  async _openRedirect(t, n, r, o) {
    await this._originValidation(t);
    const i = await Qp(t, n, r, kc(), o);
    return fE(i), new Promise(() => {});
  }
  _initialize(t) {
    const n = t._key();
    if (this.eventManagers[n]) {
      const { manager: o, promise: i } = this.eventManagers[n];
      return o ? Promise.resolve(o) : (wn(i, "If manager is not set, promise should be"), i);
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
    const n = await XE(t),
      r = new LE(t);
    return (
      n.register(
        "authEvent",
        (o) => (
          W(o == null ? void 0 : o.authEvent, t, "invalid-auth-event"),
          { status: r.onEvent(o.authEvent) ? "ACK" : "ERROR" }
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
      hu,
      { type: hu },
      (o) => {
        var i;
        const s = (i = o == null ? void 0 : o[0]) === null || i === void 0 ? void 0 : i[hu];
        s !== void 0 && n(!!s), Ht(t, "internal-error");
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(t) {
    const n = t._key();
    return (
      this.originValidationPromises[n] || (this.originValidationPromises[n] = UE(t)), this.originValidationPromises[n]
    );
  }
  get _shouldInitProactively() {
    return Av() || Dd() || qa();
  }
}
const ck = uk;
var Yp = "@firebase/auth",
  Xp = "1.7.1";
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
 */ class dk {
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
    W(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
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
 */ function fk(e) {
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
function pk(e) {
  Mi(
    new ko(
      "auth",
      (t, { options: n }) => {
        const r = t.getProvider("app").getImmediate(),
          o = t.getProvider("heartbeat"),
          i = t.getProvider("app-check-internal"),
          { apiKey: s, authDomain: a } = r.options;
        W(s && !s.includes(":"), "invalid-api-key", { appName: r.name });
        const l = {
            apiKey: s,
            authDomain: a,
            clientPlatform: e,
            apiHost: "identitytoolkit.googleapis.com",
            tokenApiHost: "securetoken.googleapis.com",
            apiScheme: "https",
            sdkClientVersion: Mv(e),
          },
          u = new A_(r, o, i, l);
        return B_(u, n), u;
      },
      "PUBLIC"
    )
      .setInstantiationMode("EXPLICIT")
      .setInstanceCreatedCallback((t, n, r) => {
        t.getProvider("auth-internal").initialize();
      })
  ),
    Mi(
      new ko(
        "auth-internal",
        (t) => {
          const n = Oo(t.getProvider("auth").getImmediate());
          return ((r) => new dk(r))(n);
        },
        "PRIVATE"
      ).setInstantiationMode("EXPLICIT")
    ),
    uo(Yp, Xp, fk(e)),
    uo(Yp, Xp, "esm2017");
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
 */ const hk = 5 * 60,
  mk = cv("authIdTokenMaxAge") || hk;
let Jp = null;
const gk = (e) => async (t) => {
  const n = t && (await t.getIdTokenResult()),
    r = n && (new Date().getTime() - Date.parse(n.issuedAtTime)) / 1e3;
  if (r && r > mk) return;
  const o = n == null ? void 0 : n.token;
  Jp !== o &&
    ((Jp = o), await fetch(e, { method: o ? "POST" : "DELETE", headers: o ? { Authorization: `Bearer ${o}` } : {} }));
};
function vk(e = XS()) {
  const t = hv(e, "auth");
  if (t.isInitialized()) return t.getImmediate();
  const n = j_(e, { popupRedirectResolver: ck, persistence: [_E, uE, Wv] }),
    r = cv("authTokenSyncURL");
  if (r && typeof isSecureContext == "boolean" && isSecureContext) {
    const i = new URL(r, location.origin);
    if (location.origin === i.origin) {
      const s = gk(i.toString());
      iE(n, s, () => s(n.currentUser)), oE(n, (a) => s(a));
    }
  }
  const o = Uw("auth");
  return o && W_(n, `http://${o}`), n;
}
function yk() {
  var e, t;
  return (t = (e = document.getElementsByTagName("head")) === null || e === void 0 ? void 0 : e[0]) !== null &&
    t !== void 0
    ? t
    : document;
}
M_({
  loadJS(e) {
    return new Promise((t, n) => {
      const r = document.createElement("script");
      r.setAttribute("src", e),
        (r.onload = t),
        (r.onerror = (o) => {
          const i = en("internal-error");
          (i.customData = o), n(i);
        }),
        (r.type = "text/javascript"),
        (r.charset = "UTF-8"),
        yk().appendChild(r);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render=",
});
pk("Browser");
var wk = "firebase",
  Sk = "10.11.0";
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
 */ uo(wk, Sk, "app");
const _k = {
    apiKey: "AIzaSyAHCXqlEEFb2YyYb2DEduAQ54JaRhb1T2o",
    authDomain: "pilvi-react-3a6be.firebaseapp.com",
    projectId: "pilvi-react-3a6be",
    storageBucket: "pilvi-react-3a6be.appspot.com",
    messagingSenderId: "929865890216",
    appId: "1:929865890216:web:710def5fc4d742022dc59d",
  },
  Ek = mv(_k),
  kk = vk(Ek);
function k() {
  return (
    (k = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    k.apply(this, arguments)
  );
}
function V(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++) (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Yv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (n = Yv(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function xe() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Yv(e)) && (r && (r += " "), (r += t));
  return r;
}
function Fe(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, s) => {
          if (s) {
            const a = t(s);
            a !== "" && i.push(a), n && n[s] && i.push(n[s]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
let Zp = 0;
function Ck(e) {
  const [t, n] = E.useState(e),
    r = e || t;
  return (
    E.useEffect(() => {
      t == null && ((Zp += 1), n(`mui-${Zp}`));
    }, [t]),
    r
  );
}
const eh = Cu.useId;
function Xv(e) {
  if (eh !== void 0) {
    const t = eh();
    return e ?? t;
  }
  return Ck(e);
}
var Zi = {},
  Jv = { exports: {} };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Jv);
var Zv = Jv.exports,
  mu = { exports: {} },
  th;
function e0() {
  return (
    th ||
      ((th = 1),
      (function (e) {
        function t() {
          return (
            (e.exports = t =
              Object.assign
                ? Object.assign.bind()
                : function (n) {
                    for (var r = 1; r < arguments.length; r++) {
                      var o = arguments[r];
                      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]);
                    }
                    return n;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t.apply(this, arguments)
          );
        }
        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      })(mu)),
    mu.exports
  );
}
var gu = { exports: {} },
  nh;
function xk() {
  return (
    nh ||
      ((nh = 1),
      (function (e) {
        function t(n, r) {
          if (n == null) return {};
          var o = {},
            i = Object.keys(n),
            s,
            a;
          for (a = 0; a < i.length; a++) (s = i[a]), !(r.indexOf(s) >= 0) && (o[s] = n[s]);
          return o;
        }
        (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
      })(gu)),
    gu.exports
  );
}
function t0(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Ik =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  bk = t0(function (e) {
    return Ik.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91);
  });
function Tk(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Pk(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var Rk = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Pk(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = Tk(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ye = "-ms-",
  xa = "-moz-",
  J = "-webkit-",
  n0 = "comm",
  Bd = "rule",
  Wd = "decl",
  Ok = "@import",
  r0 = "@keyframes",
  Nk = "@layer",
  Ak = Math.abs,
  Ja = String.fromCharCode,
  Mk = Object.assign;
function Lk(e, t) {
  return He(e, 0) ^ 45 ? (((((((t << 2) ^ He(e, 0)) << 2) ^ He(e, 1)) << 2) ^ He(e, 2)) << 2) ^ He(e, 3) : 0;
}
function o0(e) {
  return e.trim();
}
function $k(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Z(e, t, n) {
  return e.replace(t, n);
}
function Ic(e, t) {
  return e.indexOf(t);
}
function He(e, t) {
  return e.charCodeAt(t) | 0;
}
function Fi(e, t, n) {
  return e.slice(t, n);
}
function Qt(e) {
  return e.length;
}
function Hd(e) {
  return e.length;
}
function Cs(e, t) {
  return t.push(e), e;
}
function Dk(e, t) {
  return e.map(t).join("");
}
var Za = 1,
  xo = 1,
  i0 = 0,
  ut = 0,
  Te = 0,
  Ao = "";
function el(e, t, n, r, o, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: i, line: Za, column: xo, length: s, return: "" };
}
function Ko(e, t) {
  return Mk(el("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Fk() {
  return Te;
}
function zk() {
  return (Te = ut > 0 ? He(Ao, --ut) : 0), xo--, Te === 10 && ((xo = 1), Za--), Te;
}
function mt() {
  return (Te = ut < i0 ? He(Ao, ut++) : 0), xo++, Te === 10 && ((xo = 1), Za++), Te;
}
function nn() {
  return He(Ao, ut);
}
function Ws() {
  return ut;
}
function es(e, t) {
  return Fi(Ao, e, t);
}
function zi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function s0(e) {
  return (Za = xo = 1), (i0 = Qt((Ao = e))), (ut = 0), [];
}
function a0(e) {
  return (Ao = ""), e;
}
function Hs(e) {
  return o0(es(ut - 1, bc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Uk(e) {
  for (; (Te = nn()) && Te < 33; ) mt();
  return zi(e) > 2 || zi(Te) > 3 ? "" : " ";
}
function jk(e, t) {
  for (; --t && mt() && !(Te < 48 || Te > 102 || (Te > 57 && Te < 65) || (Te > 70 && Te < 97)); );
  return es(e, Ws() + (t < 6 && nn() == 32 && mt() == 32));
}
function bc(e) {
  for (; mt(); )
    switch (Te) {
      case e:
        return ut;
      case 34:
      case 39:
        e !== 34 && e !== 39 && bc(Te);
        break;
      case 40:
        e === 41 && bc(e);
        break;
      case 92:
        mt();
        break;
    }
  return ut;
}
function Bk(e, t) {
  for (; mt() && e + Te !== 57; ) if (e + Te === 84 && nn() === 47) break;
  return "/*" + es(t, ut - 1) + "*" + Ja(e === 47 ? e : mt());
}
function Wk(e) {
  for (; !zi(nn()); ) mt();
  return es(e, ut);
}
function Hk(e) {
  return a0(Vs("", null, null, null, [""], (e = s0(e)), 0, [0], e));
}
function Vs(e, t, n, r, o, i, s, a, l) {
  for (
    var u = 0, d = 0, p = s, h = 0, y = 0, g = 0, v = 1, x = 1, m = 1, c = 0, f = "", w = o, S = i, C = r, _ = f;
    x;

  )
    switch (((g = c), (c = mt()))) {
      case 40:
        if (g != 108 && He(_, p - 1) == 58) {
          Ic((_ += Z(Hs(c), "&", "&\f")), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        _ += Hs(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Uk(g);
        break;
      case 92:
        _ += jk(Ws() - 1, 7);
        continue;
      case 47:
        switch (nn()) {
          case 42:
          case 47:
            Cs(Vk(Bk(mt(), Ws()), t, n), l);
            break;
          default:
            _ += "/";
        }
        break;
      case 123 * v:
        a[u++] = Qt(_) * m;
      case 125 * v:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            x = 0;
          case 59 + d:
            m == -1 && (_ = Z(_, /\f/g, "")),
              y > 0 && Qt(_) - p && Cs(y > 32 ? oh(_ + ";", r, n, p - 1) : oh(Z(_, " ", "") + ";", r, n, p - 2), l);
            break;
          case 59:
            _ += ";";
          default:
            if ((Cs((C = rh(_, t, n, u, d, o, a, f, (w = []), (S = []), p)), i), c === 123))
              if (d === 0) Vs(_, t, C, C, w, i, p, a, S);
              else
                switch (h === 99 && He(_, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vs(e, C, C, r && Cs(rh(e, C, C, 0, 0, o, a, f, o, (w = []), p), S), o, S, p, a, r ? w : S);
                    break;
                  default:
                    Vs(_, C, C, C, [""], S, 0, a, S);
                }
        }
        (u = d = y = 0), (v = m = 1), (f = _ = ""), (p = s);
        break;
      case 58:
        (p = 1 + Qt(_)), (y = g);
      default:
        if (v < 1) {
          if (c == 123) --v;
          else if (c == 125 && v++ == 0 && zk() == 125) continue;
        }
        switch (((_ += Ja(c)), c * v)) {
          case 38:
            m = d > 0 ? 1 : ((_ += "\f"), -1);
            break;
          case 44:
            (a[u++] = (Qt(_) - 1) * m), (m = 1);
            break;
          case 64:
            nn() === 45 && (_ += Hs(mt())), (h = nn()), (d = p = Qt((f = _ += Wk(Ws())))), c++;
            break;
          case 45:
            g === 45 && Qt(_) == 2 && (v = 0);
        }
    }
  return i;
}
function rh(e, t, n, r, o, i, s, a, l, u, d) {
  for (var p = o - 1, h = o === 0 ? i : [""], y = Hd(h), g = 0, v = 0, x = 0; g < r; ++g)
    for (var m = 0, c = Fi(e, p + 1, (p = Ak((v = s[g])))), f = e; m < y; ++m)
      (f = o0(v > 0 ? h[m] + " " + c : Z(c, /&\f/g, h[m]))) && (l[x++] = f);
  return el(e, t, n, o === 0 ? Bd : a, l, u, d);
}
function Vk(e, t, n) {
  return el(e, t, n, n0, Ja(Fk()), Fi(e, 2, -2), 0);
}
function oh(e, t, n, r) {
  return el(e, t, n, Wd, Fi(e, 0, r), Fi(e, r + 1, -1), r);
}
function ho(e, t) {
  for (var n = "", r = Hd(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function Kk(e, t, n, r) {
  switch (e.type) {
    case Nk:
      if (e.children.length) break;
    case Ok:
    case Wd:
      return (e.return = e.return || e.value);
    case n0:
      return "";
    case r0:
      return (e.return = e.value + "{" + ho(e.children, r) + "}");
    case Bd:
      e.value = e.props.join(",");
  }
  return Qt((n = ho(e.children, r))) ? (e.return = e.value + "{" + n + "}") : "";
}
function Gk(e) {
  var t = Hd(e);
  return function (n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s;
  };
}
function qk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Qk = function (t, n, r) {
    for (var o = 0, i = 0; (o = i), (i = nn()), o === 38 && i === 12 && (n[r] = 1), !zi(i); ) mt();
    return es(t, ut);
  },
  Yk = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (zi(o)) {
        case 0:
          o === 38 && nn() === 12 && (n[r] = 1), (t[r] += Qk(ut - 1, n, r));
          break;
        case 2:
          t[r] += Hs(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = nn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Ja(o);
      }
    while ((o = mt()));
    return t;
  },
  Xk = function (t, n) {
    return a0(Yk(s0(t), n));
  },
  ih = new WeakMap(),
  Jk = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
        if (((r = r.parent), !r)) return;
      if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !ih.get(r)) && !o) {
        ih.set(t, !0);
        for (var i = [], s = Xk(n, i), a = r.props, l = 0, u = 0; l < s.length; l++)
          for (var d = 0; d < a.length; d++, u++) t.props[u] = i[l] ? s[l].replace(/&\f/g, a[d]) : a[d] + " " + s[l];
      }
    }
  },
  Zk = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && ((t.return = ""), (t.value = ""));
    }
  };
function l0(e, t) {
  switch (Lk(e, t)) {
    case 5103:
      return J + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return J + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return J + e + xa + e + Ye + e + e;
    case 6828:
    case 4268:
      return J + e + Ye + e + e;
    case 6165:
      return J + e + Ye + "flex-" + e + e;
    case 5187:
      return J + e + Z(e, /(\w+).+(:[^]+)/, J + "box-$1$2" + Ye + "flex-$1$2") + e;
    case 5443:
      return J + e + Ye + "flex-item-" + Z(e, /flex-|-self/, "") + e;
    case 4675:
      return J + e + Ye + "flex-line-pack" + Z(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return J + e + Ye + Z(e, "shrink", "negative") + e;
    case 5292:
      return J + e + Ye + Z(e, "basis", "preferred-size") + e;
    case 6060:
      return J + "box-" + Z(e, "-grow", "") + J + e + Ye + Z(e, "grow", "positive") + e;
    case 4554:
      return J + Z(e, /([^-])(transform)/g, "$1" + J + "$2") + e;
    case 6187:
      return Z(Z(Z(e, /(zoom-|grab)/, J + "$1"), /(image-set)/, J + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Z(e, /(image-set\([^]*)/, J + "$1$`$1");
    case 4968:
      return Z(Z(e, /(.+:)(flex-)?(.*)/, J + "box-pack:$3" + Ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + J + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Z(e, /(.+)-inline(.+)/, J + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Qt(e) - 1 - t > 6)
        switch (He(e, t + 1)) {
          case 109:
            if (He(e, t + 4) !== 45) break;
          case 102:
            return Z(e, /(.+:)(.+)-([^]+)/, "$1" + J + "$2-$3$1" + xa + (He(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Ic(e, "stretch") ? l0(Z(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (He(e, t + 1) !== 115) break;
    case 6444:
      switch (He(e, Qt(e) - 3 - (~Ic(e, "!important") && 10))) {
        case 107:
          return Z(e, ":", ":" + J) + e;
        case 101:
          return (
            Z(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" + J + (He(e, 14) === 45 ? "inline-" : "") + "box$3$1" + J + "$2$3$1" + Ye + "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (He(e, t + 11)) {
        case 114:
          return J + e + Ye + Z(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return J + e + Ye + Z(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return J + e + Ye + Z(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return J + e + Ye + e + e;
  }
  return e;
}
var eC = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Wd:
          t.return = l0(t.value, t.length);
          break;
        case r0:
          return ho([Ko(t, { value: Z(t.value, "@", "@" + J) })], o);
        case Bd:
          if (t.length)
            return Dk(t.props, function (i) {
              switch ($k(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return ho([Ko(t, { props: [Z(i, /:(read-\w+)/, ":" + xa + "$1")] })], o);
                case "::placeholder":
                  return ho(
                    [
                      Ko(t, { props: [Z(i, /:(plac\w+)/, ":" + J + "input-$1")] }),
                      Ko(t, { props: [Z(i, /:(plac\w+)/, ":" + xa + "$1")] }),
                      Ko(t, { props: [Z(i, /:(plac\w+)/, Ye + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  tC = [eC],
  u0 = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var x = v.getAttribute("data-emotion");
        x.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || tC,
      i = {},
      s,
      a = [];
    (s = t.container || document.head),
      Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function (v) {
        for (var x = v.getAttribute("data-emotion").split(" "), m = 1; m < x.length; m++) i[x[m]] = !0;
        a.push(v);
      });
    var l,
      u = [Jk, Zk];
    {
      var d,
        p = [
          Kk,
          qk(function (v) {
            d.insert(v);
          }),
        ],
        h = Gk(u.concat(o, p)),
        y = function (x) {
          return ho(Hk(x), h);
        };
      l = function (x, m, c, f) {
        (d = c), y(x ? x + "{" + m.styles + "}" : m.styles), f && (g.inserted[m.name] = !0);
      };
    }
    var g = {
      key: n,
      sheet: new Rk({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l,
    };
    return g.sheet.hydrate(a), g;
  },
  c0 = { exports: {} },
  te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ze = typeof Symbol == "function" && Symbol.for,
  Vd = ze ? Symbol.for("react.element") : 60103,
  Kd = ze ? Symbol.for("react.portal") : 60106,
  tl = ze ? Symbol.for("react.fragment") : 60107,
  nl = ze ? Symbol.for("react.strict_mode") : 60108,
  rl = ze ? Symbol.for("react.profiler") : 60114,
  ol = ze ? Symbol.for("react.provider") : 60109,
  il = ze ? Symbol.for("react.context") : 60110,
  Gd = ze ? Symbol.for("react.async_mode") : 60111,
  sl = ze ? Symbol.for("react.concurrent_mode") : 60111,
  al = ze ? Symbol.for("react.forward_ref") : 60112,
  ll = ze ? Symbol.for("react.suspense") : 60113,
  nC = ze ? Symbol.for("react.suspense_list") : 60120,
  ul = ze ? Symbol.for("react.memo") : 60115,
  cl = ze ? Symbol.for("react.lazy") : 60116,
  rC = ze ? Symbol.for("react.block") : 60121,
  oC = ze ? Symbol.for("react.fundamental") : 60117,
  iC = ze ? Symbol.for("react.responder") : 60118,
  sC = ze ? Symbol.for("react.scope") : 60119;
function _t(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Vd:
        switch (((e = e.type), e)) {
          case Gd:
          case sl:
          case tl:
          case rl:
          case nl:
          case ll:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case il:
              case al:
              case cl:
              case ul:
              case ol:
                return e;
              default:
                return t;
            }
        }
      case Kd:
        return t;
    }
  }
}
function d0(e) {
  return _t(e) === sl;
}
te.AsyncMode = Gd;
te.ConcurrentMode = sl;
te.ContextConsumer = il;
te.ContextProvider = ol;
te.Element = Vd;
te.ForwardRef = al;
te.Fragment = tl;
te.Lazy = cl;
te.Memo = ul;
te.Portal = Kd;
te.Profiler = rl;
te.StrictMode = nl;
te.Suspense = ll;
te.isAsyncMode = function (e) {
  return d0(e) || _t(e) === Gd;
};
te.isConcurrentMode = d0;
te.isContextConsumer = function (e) {
  return _t(e) === il;
};
te.isContextProvider = function (e) {
  return _t(e) === ol;
};
te.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vd;
};
te.isForwardRef = function (e) {
  return _t(e) === al;
};
te.isFragment = function (e) {
  return _t(e) === tl;
};
te.isLazy = function (e) {
  return _t(e) === cl;
};
te.isMemo = function (e) {
  return _t(e) === ul;
};
te.isPortal = function (e) {
  return _t(e) === Kd;
};
te.isProfiler = function (e) {
  return _t(e) === rl;
};
te.isStrictMode = function (e) {
  return _t(e) === nl;
};
te.isSuspense = function (e) {
  return _t(e) === ll;
};
te.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === tl ||
    e === sl ||
    e === rl ||
    e === nl ||
    e === ll ||
    e === nC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === cl ||
        e.$$typeof === ul ||
        e.$$typeof === ol ||
        e.$$typeof === il ||
        e.$$typeof === al ||
        e.$$typeof === oC ||
        e.$$typeof === iC ||
        e.$$typeof === sC ||
        e.$$typeof === rC))
  );
};
te.typeOf = _t;
c0.exports = te;
var aC = c0.exports,
  f0 = aC,
  lC = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  uC = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  p0 = {};
p0[f0.ForwardRef] = lC;
p0[f0.Memo] = uC;
var cC = !0;
function dC(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var h0 = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || cC === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
  },
  m0 = function (t, n, r) {
    h0(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function fC(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var pC = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  hC = /[A-Z]|^ms/g,
  mC = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  g0 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  sh = function (t) {
    return t != null && typeof t != "boolean";
  },
  vu = t0(function (e) {
    return g0(e) ? e : e.replace(hC, "-$&").toLowerCase();
  }),
  ah = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(mC, function (r, o, i) {
            return (Yt = { name: o, styles: i, next: Yt }), o;
          });
    }
    return pC[t] !== 1 && !g0(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
  };
function Ui(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1) return (Yt = { name: n.name, styles: n.styles, next: Yt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0) for (; r !== void 0; ) (Yt = { name: r.name, styles: r.styles, next: Yt }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return gC(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Yt,
          s = n(e);
        return (Yt = i), Ui(e, t, s);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function gC(e, t, n) {
  var r = "";
  if (Array.isArray(n)) for (var o = 0; o < n.length; o++) r += Ui(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? (r += i + "{" + t[s] + "}") : sh(s) && (r += vu(i) + ":" + ah(i, s) + ";");
      else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++) sh(s[a]) && (r += vu(i) + ":" + ah(i, s[a]) + ";");
      else {
        var l = Ui(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += vu(i) + ":" + l + ";";
            break;
          }
          default:
            r += i + "{" + l + "}";
        }
      }
    }
  return r;
}
var lh = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Yt,
  qd = function (t, n, r) {
    if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0) return t[0];
    var o = !0,
      i = "";
    Yt = void 0;
    var s = t[0];
    s == null || s.raw === void 0 ? ((o = !1), (i += Ui(r, n, s))) : (i += s[0]);
    for (var a = 1; a < t.length; a++) (i += Ui(r, n, t[a])), o && (i += s[a]);
    lh.lastIndex = 0;
    for (var l = "", u; (u = lh.exec(i)) !== null; ) l += "-" + u[1];
    var d = fC(i) + l;
    return { name: d, styles: i, next: Yt };
  },
  vC = function (t) {
    return t();
  },
  v0 = Cu.useInsertionEffect ? Cu.useInsertionEffect : !1,
  yC = v0 || vC,
  uh = v0 || E.useLayoutEffect,
  y0 = E.createContext(typeof HTMLElement < "u" ? u0({ key: "css" }) : null),
  wC = y0.Provider,
  w0 = function (t) {
    return E.forwardRef(function (n, r) {
      var o = E.useContext(y0);
      return t(n, o, r);
    });
  },
  dl = E.createContext({});
e0();
var SC = w0(function (e, t) {
  var n = e.styles,
    r = qd([n], void 0, E.useContext(dl)),
    o = E.useRef();
  return (
    uh(
      function () {
        var i = t.key + "-global",
          s = new t.sheet.constructor({
            key: i,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          a = !1,
          l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
        return (
          t.sheet.tags.length && (s.before = t.sheet.tags[0]),
          l !== null && ((a = !0), l.setAttribute("data-emotion", i), s.hydrate([l])),
          (o.current = [s, a]),
          function () {
            s.flush();
          }
        );
      },
      [t]
    ),
    uh(
      function () {
        var i = o.current,
          s = i[0],
          a = i[1];
        if (a) {
          i[1] = !1;
          return;
        }
        if ((r.next !== void 0 && m0(t, r.next, !0), s.tags.length)) {
          var l = s.tags[s.tags.length - 1].nextElementSibling;
          (s.before = l), s.flush();
        }
        t.insert("", r, s, !1);
      },
      [t, r.name]
    ),
    null
  );
});
function S0() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return qd(t);
}
var _C = function () {
    var t = S0.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  EC = bk,
  kC = function (t) {
    return t !== "theme";
  },
  ch = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? EC : kC;
  },
  dh = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (s) {
              return t.__emotion_forwardProp(s) && i(s);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  CC = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      h0(n, r, o),
      yC(function () {
        return m0(n, r, o);
      }),
      null
    );
  },
  xC = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      s;
    n !== void 0 && ((i = n.label), (s = n.target));
    var a = dh(t, n, r),
      l = a || ch(o),
      u = !l("as");
    return function () {
      var d = arguments,
        p = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if ((i !== void 0 && p.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)) p.push.apply(p, d);
      else {
        p.push(d[0][0]);
        for (var h = d.length, y = 1; y < h; y++) p.push(d[y], d[0][y]);
      }
      var g = w0(function (v, x, m) {
        var c = (u && v.as) || o,
          f = "",
          w = [],
          S = v;
        if (v.theme == null) {
          S = {};
          for (var C in v) S[C] = v[C];
          S.theme = E.useContext(dl);
        }
        typeof v.className == "string"
          ? (f = dC(x.registered, w, v.className))
          : v.className != null && (f = v.className + " ");
        var _ = qd(p.concat(w), x.registered, S);
        (f += x.key + "-" + _.name), s !== void 0 && (f += " " + s);
        var b = u && a === void 0 ? ch(c) : l,
          O = {};
        for (var R in v) (u && R === "as") || (b(R) && (O[R] = v[R]));
        return (
          (O.className = f),
          (O.ref = m),
          E.createElement(
            E.Fragment,
            null,
            E.createElement(CC, { cache: x, serialized: _, isStringTag: typeof c == "string" }),
            E.createElement(c, O)
          )
        );
      });
      return (
        (g.displayName =
          i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")"),
        (g.defaultProps = t.defaultProps),
        (g.__emotion_real = g),
        (g.__emotion_base = o),
        (g.__emotion_styles = p),
        (g.__emotion_forwardProp = a),
        Object.defineProperty(g, "toString", {
          value: function () {
            return "." + s;
          },
        }),
        (g.withComponent = function (v, x) {
          return e(v, k({}, n, x, { shouldForwardProp: dh(g, x, !0) })).apply(void 0, p);
        }),
        g
      );
    };
  },
  IC = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Tc = xC.bind();
IC.forEach(function (e) {
  Tc[e] = Tc(e);
});
let Pc;
typeof document == "object" && (Pc = u0({ key: "css", prepend: !0 }));
function bC(e) {
  const { injectFirst: t, children: n } = e;
  return t && Pc ? P.jsx(wC, { value: Pc, children: n }) : n;
}
function TC(e) {
  return e == null || Object.keys(e).length === 0;
}
function _0(e) {
  const { styles: t, defaultTheme: n = {} } = e,
    r = typeof t == "function" ? (o) => t(TC(o) ? n : o) : t;
  return P.jsx(SC, { styles: r });
}
function PC(e, t) {
  return Tc(e, t);
}
const RC = (e, t) => {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
  },
  OC = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: _0,
        StyledEngineProvider: bC,
        ThemeContext: dl,
        css: S0,
        default: PC,
        internal_processStyles: RC,
        keyframes: _C,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  NC = Xn(OC);
function Ln(e) {
  if (typeof e != "object" || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function E0(e) {
  if (!Ln(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = E0(e[n]);
    }),
    t
  );
}
function gt(e, t, n = { clone: !0 }) {
  const r = n.clone ? k({}, e) : e;
  return (
    Ln(e) &&
      Ln(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (Ln(t[o]) && o in e && Ln(e[o])
            ? (r[o] = gt(e[o], t[o], n))
            : n.clone
            ? (r[o] = Ln(t[o]) ? E0(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
const AC = Object.freeze(
    Object.defineProperty({ __proto__: null, default: gt, isPlainObject: Ln }, Symbol.toStringTag, { value: "Module" })
  ),
  MC = Xn(AC);
function Cr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const LC = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Cr }, Symbol.toStringTag, { value: "Module" })
);
function Re(e) {
  if (typeof e != "string") throw new Error(Cr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const $C = Object.freeze(
    Object.defineProperty({ __proto__: null, default: Re }, Symbol.toStringTag, { value: "Module" })
  ),
  DC = Xn($C);
var k0 = { exports: {} },
  ne = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qd = Symbol.for("react.element"),
  Yd = Symbol.for("react.portal"),
  fl = Symbol.for("react.fragment"),
  pl = Symbol.for("react.strict_mode"),
  hl = Symbol.for("react.profiler"),
  ml = Symbol.for("react.provider"),
  gl = Symbol.for("react.context"),
  FC = Symbol.for("react.server_context"),
  vl = Symbol.for("react.forward_ref"),
  yl = Symbol.for("react.suspense"),
  wl = Symbol.for("react.suspense_list"),
  Sl = Symbol.for("react.memo"),
  _l = Symbol.for("react.lazy"),
  zC = Symbol.for("react.offscreen"),
  C0;
C0 = Symbol.for("react.module.reference");
function At(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Qd:
        switch (((e = e.type), e)) {
          case fl:
          case hl:
          case pl:
          case yl:
          case wl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case FC:
              case gl:
              case vl:
              case _l:
              case Sl:
              case ml:
                return e;
              default:
                return t;
            }
        }
      case Yd:
        return t;
    }
  }
}
ne.ContextConsumer = gl;
ne.ContextProvider = ml;
ne.Element = Qd;
ne.ForwardRef = vl;
ne.Fragment = fl;
ne.Lazy = _l;
ne.Memo = Sl;
ne.Portal = Yd;
ne.Profiler = hl;
ne.StrictMode = pl;
ne.Suspense = yl;
ne.SuspenseList = wl;
ne.isAsyncMode = function () {
  return !1;
};
ne.isConcurrentMode = function () {
  return !1;
};
ne.isContextConsumer = function (e) {
  return At(e) === gl;
};
ne.isContextProvider = function (e) {
  return At(e) === ml;
};
ne.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qd;
};
ne.isForwardRef = function (e) {
  return At(e) === vl;
};
ne.isFragment = function (e) {
  return At(e) === fl;
};
ne.isLazy = function (e) {
  return At(e) === _l;
};
ne.isMemo = function (e) {
  return At(e) === Sl;
};
ne.isPortal = function (e) {
  return At(e) === Yd;
};
ne.isProfiler = function (e) {
  return At(e) === hl;
};
ne.isStrictMode = function (e) {
  return At(e) === pl;
};
ne.isSuspense = function (e) {
  return At(e) === yl;
};
ne.isSuspenseList = function (e) {
  return At(e) === wl;
};
ne.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === fl ||
    e === hl ||
    e === pl ||
    e === yl ||
    e === wl ||
    e === zC ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === _l ||
        e.$$typeof === Sl ||
        e.$$typeof === ml ||
        e.$$typeof === gl ||
        e.$$typeof === vl ||
        e.$$typeof === C0 ||
        e.getModuleId !== void 0))
  );
};
ne.typeOf = At;
k0.exports = ne;
var fh = k0.exports;
const UC = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function x0(e) {
  const t = `${e}`.match(UC);
  return (t && t[1]) || "";
}
function I0(e, t = "") {
  return e.displayName || e.name || x0(e) || t;
}
function ph(e, t, n) {
  const r = I0(t);
  return e.displayName || (r !== "" ? `${n}(${r})` : n);
}
function jC(e) {
  if (e != null) {
    if (typeof e == "string") return e;
    if (typeof e == "function") return I0(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case fh.ForwardRef:
          return ph(e, e.render, "ForwardRef");
        case fh.Memo:
          return ph(e, e.type, "memo");
        default:
          return;
      }
  }
}
const BC = Object.freeze(
    Object.defineProperty({ __proto__: null, default: jC, getFunctionName: x0 }, Symbol.toStringTag, {
      value: "Module",
    })
  ),
  WC = Xn(BC),
  HC = ["values", "unit", "step"],
  VC = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => k({}, n, { [r.key]: r.val }), {});
  };
function b0(e) {
  const { values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }, unit: n = "px", step: r = 5 } = e,
    o = V(e, HC),
    i = VC(t),
    s = Object.keys(i);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - r / 100}${n})`;
  }
  function u(h, y) {
    const g = s.indexOf(y);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${n}) and (max-width:${
      (g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : y) - r / 100
    }${n})`;
  }
  function d(h) {
    return s.indexOf(h) + 1 < s.length ? u(h, s[s.indexOf(h) + 1]) : a(h);
  }
  function p(h) {
    const y = s.indexOf(h);
    return y === 0
      ? a(s[1])
      : y === s.length - 1
      ? l(s[y])
      : u(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return k({ keys: s, values: i, up: a, down: l, between: u, only: d, not: p, unit: n }, o);
}
const KC = { borderRadius: 4 },
  GC = KC;
function hi(e, t) {
  return t ? gt(e, t, { clone: !1 }) : e;
}
const Xd = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  hh = { keys: ["xs", "sm", "md", "lg", "xl"], up: (e) => `@media (min-width:${Xd[e]}px)` };
function Sn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || hh;
    return t.reduce((s, a, l) => ((s[i.up(i.keys[l])] = n(t[l])), s), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || hh;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Xd).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a);
      } else {
        const l = a;
        s[l] = t[l];
      }
      return s;
    }, {});
  }
  return n(t);
}
function qC(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function QC(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function El(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Ia(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function" ? (o = e(n)) : Array.isArray(e) ? (o = e[n] || r) : (o = El(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function Ie(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (s) => {
      if (s[t] == null) return null;
      const a = s[t],
        l = s.theme,
        u = El(l, r) || {};
      return Sn(s, a, (p) => {
        let h = Ia(u, o, p);
        return (
          p === h && typeof p == "string" && (h = Ia(u, o, `${t}${p === "default" ? "" : Re(p)}`, p)),
          n === !1 ? h : { [n]: h }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function YC(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const XC = { m: "margin", p: "padding" },
  JC = { t: "Top", r: "Right", b: "Bottom", l: "Left", x: ["Left", "Right"], y: ["Top", "Bottom"] },
  mh = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  ZC = YC((e) => {
    if (e.length > 2)
      if (mh[e]) e = mh[e];
      else return [e];
    const [t, n] = e.split(""),
      r = XC[t],
      o = JC[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Jd = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Zd = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Jd, ...Zd];
function ts(e, t, n, r) {
  var o;
  const i = (o = El(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (s) => (typeof s == "string" ? s : i * s)
    : Array.isArray(i)
    ? (s) => (typeof s == "string" ? s : i[s])
    : typeof i == "function"
    ? i
    : () => {};
}
function T0(e) {
  return ts(e, "spacing", 8);
}
function ns(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function ex(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = ns(t, n)), r), {});
}
function tx(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = ZC(n),
    i = ex(o, r),
    s = e[n];
  return Sn(e, s, i);
}
function P0(e, t) {
  const n = T0(e.theme);
  return Object.keys(e)
    .map((r) => tx(e, t, r, n))
    .reduce(hi, {});
}
function Se(e) {
  return P0(e, Jd);
}
Se.propTypes = {};
Se.filterProps = Jd;
function _e(e) {
  return P0(e, Zd);
}
_e.propTypes = {};
_e.filterProps = Zd;
function nx(e = 8) {
  if (e.mui) return e;
  const t = T0({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const s = t(i);
          return typeof s == "number" ? `${s}px` : s;
        })
        .join(" ");
  return (n.mui = !0), n;
}
function kl(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? hi(o, t[i](r)) : o), {});
  return (n.propTypes = {}), (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])), n;
}
function bt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Mt(e, t) {
  return Ie({ prop: e, themeKey: "borders", transform: t });
}
const rx = Mt("border", bt),
  ox = Mt("borderTop", bt),
  ix = Mt("borderRight", bt),
  sx = Mt("borderBottom", bt),
  ax = Mt("borderLeft", bt),
  lx = Mt("borderColor"),
  ux = Mt("borderTopColor"),
  cx = Mt("borderRightColor"),
  dx = Mt("borderBottomColor"),
  fx = Mt("borderLeftColor"),
  px = Mt("outline", bt),
  hx = Mt("outlineColor"),
  Cl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = ts(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: ns(t, r) });
      return Sn(e, e.borderRadius, n);
    }
    return null;
  };
Cl.propTypes = {};
Cl.filterProps = ["borderRadius"];
kl(rx, ox, ix, sx, ax, lx, ux, cx, dx, fx, Cl, px, hx);
const xl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ts(e.theme, "spacing", 8),
      n = (r) => ({ gap: ns(t, r) });
    return Sn(e, e.gap, n);
  }
  return null;
};
xl.propTypes = {};
xl.filterProps = ["gap"];
const Il = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ts(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: ns(t, r) });
    return Sn(e, e.columnGap, n);
  }
  return null;
};
Il.propTypes = {};
Il.filterProps = ["columnGap"];
const bl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ts(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: ns(t, r) });
    return Sn(e, e.rowGap, n);
  }
  return null;
};
bl.propTypes = {};
bl.filterProps = ["rowGap"];
const mx = Ie({ prop: "gridColumn" }),
  gx = Ie({ prop: "gridRow" }),
  vx = Ie({ prop: "gridAutoFlow" }),
  yx = Ie({ prop: "gridAutoColumns" }),
  wx = Ie({ prop: "gridAutoRows" }),
  Sx = Ie({ prop: "gridTemplateColumns" }),
  _x = Ie({ prop: "gridTemplateRows" }),
  Ex = Ie({ prop: "gridTemplateAreas" }),
  kx = Ie({ prop: "gridArea" });
kl(xl, Il, bl, mx, gx, vx, yx, wx, Sx, _x, Ex, kx);
function mo(e, t) {
  return t === "grey" ? t : e;
}
const Cx = Ie({ prop: "color", themeKey: "palette", transform: mo }),
  xx = Ie({ prop: "bgcolor", cssProperty: "backgroundColor", themeKey: "palette", transform: mo }),
  Ix = Ie({ prop: "backgroundColor", themeKey: "palette", transform: mo });
kl(Cx, xx, Ix);
function ft(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const bx = Ie({ prop: "width", transform: ft }),
  ef = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o;
        const i =
          ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Xd[n];
        return i
          ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px"
            ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
            : { maxWidth: i }
          : { maxWidth: ft(n) };
      };
      return Sn(e, e.maxWidth, t);
    }
    return null;
  };
ef.filterProps = ["maxWidth"];
const Tx = Ie({ prop: "minWidth", transform: ft }),
  Px = Ie({ prop: "height", transform: ft }),
  Rx = Ie({ prop: "maxHeight", transform: ft }),
  Ox = Ie({ prop: "minHeight", transform: ft });
Ie({ prop: "size", cssProperty: "width", transform: ft });
Ie({ prop: "size", cssProperty: "height", transform: ft });
const Nx = Ie({ prop: "boxSizing" });
kl(bx, ef, Tx, Px, Rx, Ox, Nx);
const Ax = {
    border: { themeKey: "borders", transform: bt },
    borderTop: { themeKey: "borders", transform: bt },
    borderRight: { themeKey: "borders", transform: bt },
    borderBottom: { themeKey: "borders", transform: bt },
    borderLeft: { themeKey: "borders", transform: bt },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: bt },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Cl },
    color: { themeKey: "palette", transform: mo },
    bgcolor: { themeKey: "palette", cssProperty: "backgroundColor", transform: mo },
    backgroundColor: { themeKey: "palette", transform: mo },
    p: { style: _e },
    pt: { style: _e },
    pr: { style: _e },
    pb: { style: _e },
    pl: { style: _e },
    px: { style: _e },
    py: { style: _e },
    padding: { style: _e },
    paddingTop: { style: _e },
    paddingRight: { style: _e },
    paddingBottom: { style: _e },
    paddingLeft: { style: _e },
    paddingX: { style: _e },
    paddingY: { style: _e },
    paddingInline: { style: _e },
    paddingInlineStart: { style: _e },
    paddingInlineEnd: { style: _e },
    paddingBlock: { style: _e },
    paddingBlockStart: { style: _e },
    paddingBlockEnd: { style: _e },
    m: { style: Se },
    mt: { style: Se },
    mr: { style: Se },
    mb: { style: Se },
    ml: { style: Se },
    mx: { style: Se },
    my: { style: Se },
    margin: { style: Se },
    marginTop: { style: Se },
    marginRight: { style: Se },
    marginBottom: { style: Se },
    marginLeft: { style: Se },
    marginX: { style: Se },
    marginY: { style: Se },
    marginInline: { style: Se },
    marginInlineStart: { style: Se },
    marginInlineEnd: { style: Se },
    marginBlock: { style: Se },
    marginBlockStart: { style: Se },
    marginBlockEnd: { style: Se },
    displayPrint: { cssProperty: !1, transform: (e) => ({ "@media print": { display: e } }) },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: xl },
    rowGap: { style: bl },
    columnGap: { style: Il },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: ft },
    maxWidth: { style: ef },
    minWidth: { transform: ft },
    height: { transform: ft },
    maxHeight: { transform: ft },
    minHeight: { transform: ft },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  rs = Ax;
function Mx(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Lx(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function R0() {
  function e(n, r, o, i) {
    const s = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: l = n, themeKey: u, transform: d, style: p } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const h = El(o, u) || {};
    return p
      ? p(s)
      : Sn(s, r, (g) => {
          let v = Ia(h, d, g);
          return (
            g === v && typeof g == "string" && (v = Ia(h, d, `${n}${g === "default" ? "" : Re(g)}`, g)),
            l === !1 ? v : { [l]: v }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : rs;
    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(i);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const d = qC(i.breakpoints),
        p = Object.keys(d);
      let h = d;
      return (
        Object.keys(u).forEach((y) => {
          const g = Lx(u[y], i);
          if (g != null)
            if (typeof g == "object")
              if (s[y]) h = hi(h, e(y, g, i, s));
              else {
                const v = Sn({ theme: i }, g, (x) => ({ [y]: x }));
                Mx(v, g) ? (h[y] = t({ sx: g, theme: i })) : (h = hi(h, v));
              }
            else h = hi(h, e(y, g, i, s));
        }),
        QC(p, h)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Tl = R0();
Tl.filterProps = ["sx"];
function O0(e, t) {
  const n = this;
  return n.vars && typeof n.getColorSchemeSelector == "function"
    ? { [n.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t }
    : n.palette.mode === e
    ? t
    : {};
}
const $x = ["breakpoints", "palette", "spacing", "shape"];
function tf(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    s = V(e, $x),
    a = b0(n),
    l = nx(o);
  let u = gt(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: k({ mode: "light" }, r),
      spacing: l,
      shape: k({}, GC, i),
    },
    s
  );
  return (
    (u.applyStyles = O0),
    (u = t.reduce((d, p) => gt(d, p), u)),
    (u.unstable_sxConfig = k({}, rs, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (p) {
      return Tl({ sx: p, theme: this });
    }),
    u
  );
}
const Dx = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: tf, private_createBreakpoints: b0, unstable_applyStyles: O0 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Fx = Xn(Dx),
  zx = ["sx"],
  Ux = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : rs;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function jx(e) {
  const { sx: t } = e,
    n = V(e, zx),
    { systemProps: r, otherProps: o } = Ux(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...s) => {
          const a = t(...s);
          return Ln(a) ? k({}, r, a) : r;
        })
      : (i = k({}, r, t)),
    k({}, o, { sx: i })
  );
}
const Bx = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Tl,
        extendSxProp: jx,
        unstable_createStyleFunctionSx: R0,
        unstable_defaultSxConfig: rs,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Wx = Xn(Bx);
var Mo = Zv;
Object.defineProperty(Zi, "__esModule", { value: !0 });
var Hx = (Zi.default = rI);
Zi.shouldForwardProp = Ks;
Zi.systemDefaultTheme = void 0;
var Ct = Mo(e0()),
  Rc = Mo(xk()),
  gh = Xx(NC),
  Vx = MC;
Mo(DC);
Mo(WC);
var Kx = Mo(Fx),
  Gx = Mo(Wx);
const qx = ["ownerState"],
  Qx = ["variants"],
  Yx = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function N0(e) {
  if (typeof WeakMap != "function") return null;
  var t = new WeakMap(),
    n = new WeakMap();
  return (N0 = function (r) {
    return r ? n : t;
  })(e);
}
function Xx(e, t) {
  if (!t && e && e.__esModule) return e;
  if (e === null || (typeof e != "object" && typeof e != "function")) return { default: e };
  var n = N0(t);
  if (n && n.has(e)) return n.get(e);
  var r = { __proto__: null },
    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(r, i, s) : (r[i] = e[i]);
    }
  return (r.default = e), n && n.set(e, r), r;
}
function Jx(e) {
  return Object.keys(e).length === 0;
}
function Zx(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
function Ks(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const eI = (Zi.systemDefaultTheme = (0, Kx.default)()),
  tI = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function xs({ defaultTheme: e, theme: t, themeId: n }) {
  return Jx(t) ? e : t[n] || t;
}
function nI(e) {
  return e ? (t, n) => n[e] : null;
}
function Gs(e, t) {
  let { ownerState: n } = t,
    r = (0, Rc.default)(t, qx);
  const o = typeof e == "function" ? e((0, Ct.default)({ ownerState: n }, r)) : e;
  if (Array.isArray(o)) return o.flatMap((i) => Gs(i, (0, Ct.default)({ ownerState: n }, r)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const { variants: i = [] } = o;
    let a = (0, Rc.default)(o, Qx);
    return (
      i.forEach((l) => {
        let u = !0;
        typeof l.props == "function"
          ? (u = l.props((0, Ct.default)({ ownerState: n }, r, n)))
          : Object.keys(l.props).forEach((d) => {
              (n == null ? void 0 : n[d]) !== l.props[d] && r[d] !== l.props[d] && (u = !1);
            }),
          u &&
            (Array.isArray(a) || (a = [a]),
            a.push(typeof l.style == "function" ? l.style((0, Ct.default)({ ownerState: n }, r, n)) : l.style));
      }),
      a
    );
  }
  return o;
}
function rI(e = {}) {
  const { themeId: t, defaultTheme: n = eI, rootShouldForwardProp: r = Ks, slotShouldForwardProp: o = Ks } = e,
    i = (s) =>
      (0, Gx.default)((0, Ct.default)({}, s, { theme: xs((0, Ct.default)({}, s, { defaultTheme: n, themeId: t })) }));
  return (
    (i.__mui_systemSx = !0),
    (s, a = {}) => {
      (0, gh.internal_processStyles)(s, (S) => S.filter((C) => !(C != null && C.__mui_systemSx)));
      const { name: l, slot: u, skipVariantsResolver: d, skipSx: p, overridesResolver: h = nI(tI(u)) } = a,
        y = (0, Rc.default)(a, Yx),
        g = d !== void 0 ? d : (u && u !== "Root" && u !== "root") || !1,
        v = p || !1;
      let x,
        m = Ks;
      u === "Root" || u === "root" ? (m = r) : u ? (m = o) : Zx(s) && (m = void 0);
      const c = (0, gh.default)(s, (0, Ct.default)({ shouldForwardProp: m, label: x }, y)),
        f = (S) =>
          (typeof S == "function" && S.__emotion_real !== S) || (0, Vx.isPlainObject)(S)
            ? (C) => Gs(S, (0, Ct.default)({}, C, { theme: xs({ theme: C.theme, defaultTheme: n, themeId: t }) }))
            : S,
        w = (S, ...C) => {
          let _ = f(S);
          const b = C ? C.map(f) : [];
          l &&
            h &&
            b.push((U) => {
              const j = xs((0, Ct.default)({}, U, { defaultTheme: n, themeId: t }));
              if (!j.components || !j.components[l] || !j.components[l].styleOverrides) return null;
              const F = j.components[l].styleOverrides,
                L = {};
              return (
                Object.entries(F).forEach(([$, D]) => {
                  L[$] = Gs(D, (0, Ct.default)({}, U, { theme: j }));
                }),
                h(U, L)
              );
            }),
            l &&
              !g &&
              b.push((U) => {
                var j;
                const F = xs((0, Ct.default)({}, U, { defaultTheme: n, themeId: t })),
                  L = F == null || (j = F.components) == null || (j = j[l]) == null ? void 0 : j.variants;
                return Gs({ variants: L }, (0, Ct.default)({}, U, { theme: F }));
              }),
            v || b.push(i);
          const O = b.length - C.length;
          if (Array.isArray(S) && O > 0) {
            const U = new Array(O).fill("");
            (_ = [...S, ...U]), (_.raw = [...S.raw, ...U]);
          }
          const R = c(_, ...b);
          return s.muiName && (R.muiName = s.muiName), R;
        };
      return c.withConfig && (w.withConfig = c.withConfig), w;
    }
  );
}
const vh = (e) => e,
  oI = () => {
    let e = vh;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = vh;
      },
    };
  },
  iI = oI(),
  sI = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
function Le(e, t, n = "Mui") {
  const r = sI[t];
  return r ? `${n}-${r}` : `${iI.generate(e)}-${t}`;
}
function aI(e, t) {
  return k(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
var be = {};
const lI = Xn(LC);
function uI(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, n));
}
const cI = Object.freeze(
    Object.defineProperty({ __proto__: null, default: uI }, Symbol.toStringTag, { value: "Module" })
  ),
  dI = Xn(cI);
var A0 = Zv;
Object.defineProperty(be, "__esModule", { value: !0 });
var yh = (be.alpha = D0);
be.blend = CI;
be.colorChannel = void 0;
var fI = (be.darken = rf);
be.decomposeColor = Nt;
be.emphasize = F0;
var pI = (be.getContrastRatio = wI);
be.getLuminance = ba;
be.hexToRgb = M0;
be.hslToRgb = $0;
var hI = (be.lighten = of);
be.private_safeAlpha = SI;
be.private_safeColorChannel = void 0;
be.private_safeDarken = _I;
be.private_safeEmphasize = kI;
be.private_safeLighten = EI;
be.recomposeColor = Lo;
be.rgbToHex = yI;
var wh = A0(lI),
  mI = A0(dI);
function nf(e, t = 0, n = 1) {
  return (0, mI.default)(e, t, n);
}
function M0(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) => (o < 3 ? parseInt(r, 16) : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3))
          .join(", ")})`
      : ""
  );
}
function gI(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Nt(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Nt(M0(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1) throw new Error((0, wh.default)(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
    )
      throw new Error((0, wh.default)(10, o));
  } else r = r.split(",");
  return (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o };
}
const L0 = (e) => {
  const t = Nt(e);
  return t.values
    .slice(0, 3)
    .map((n, r) => (t.type.indexOf("hsl") !== -1 && r !== 0 ? `${n}%` : n))
    .join(" ");
};
be.colorChannel = L0;
const vI = (e, t) => {
  try {
    return L0(e);
  } catch {
    return e;
  }
};
be.private_safeColorChannel = vI;
function Lo(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1 ? (r = `${n} ${r.join(" ")}`) : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function yI(e) {
  if (e.indexOf("#") === 0) return e;
  const { values: t } = Nt(e);
  return `#${t.map((n, r) => gI(r === 3 ? Math.round(255 * n) : n)).join("")}`;
}
function $0(e) {
  e = Nt(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    s = (u, d = (u + n / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let a = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && ((a += "a"), l.push(t[3])), Lo({ type: a, values: l });
}
function ba(e) {
  e = Nt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Nt($0(e)).values : e.values;
  return (
    (t = t.map((n) => (e.type !== "color" && (n /= 255), n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4))),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function wI(e, t) {
  const n = ba(e),
    r = ba(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function D0(e, t) {
  return (
    (e = Nt(e)),
    (t = nf(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Lo(e)
  );
}
function SI(e, t, n) {
  try {
    return D0(e, t);
  } catch {
    return e;
  }
}
function rf(e, t) {
  if (((e = Nt(e)), (t = nf(t)), e.type.indexOf("hsl") !== -1)) e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Lo(e);
}
function _I(e, t, n) {
  try {
    return rf(e, t);
  } catch {
    return e;
  }
}
function of(e, t) {
  if (((e = Nt(e)), (t = nf(t)), e.type.indexOf("hsl") !== -1)) e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1) for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1) for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Lo(e);
}
function EI(e, t, n) {
  try {
    return of(e, t);
  } catch {
    return e;
  }
}
function F0(e, t = 0.15) {
  return ba(e) > 0.5 ? rf(e, t) : of(e, t);
}
function kI(e, t, n) {
  try {
    return F0(e, t);
  } catch {
    return e;
  }
}
function CI(e, t, n, r = 1) {
  const o = (l, u) => Math.round((l ** (1 / r) * (1 - n) + u ** (1 / r) * n) ** r),
    i = Nt(e),
    s = Nt(t),
    a = [o(i.values[0], s.values[0]), o(i.values[1], s.values[1]), o(i.values[2], s.values[2])];
  return Lo({ type: "rgb", values: a });
}
const xI = { black: "#000", white: "#fff" },
  ji = xI,
  II = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  bI = II,
  TI = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Dr = TI,
  PI = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Fr = PI,
  RI = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Go = RI,
  OI = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  zr = OI,
  NI = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Ur = NI,
  AI = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  jr = AI,
  MI = ["mode", "contrastThreshold", "tonalOffset"],
  Sh = {
    text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)", disabled: "rgba(0, 0, 0, 0.38)" },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: ji.white, default: ji.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  yu = {
    text: {
      primary: ji.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: ji.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function _h(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = hI(e.main, o))
      : t === "dark" && (e.dark = fI(e.main, i)));
}
function LI(e = "light") {
  return e === "dark"
    ? { main: zr[200], light: zr[50], dark: zr[400] }
    : { main: zr[700], light: zr[400], dark: zr[800] };
}
function $I(e = "light") {
  return e === "dark"
    ? { main: Dr[200], light: Dr[50], dark: Dr[400] }
    : { main: Dr[500], light: Dr[300], dark: Dr[700] };
}
function DI(e = "light") {
  return e === "dark"
    ? { main: Fr[500], light: Fr[300], dark: Fr[700] }
    : { main: Fr[700], light: Fr[400], dark: Fr[800] };
}
function FI(e = "light") {
  return e === "dark"
    ? { main: Ur[400], light: Ur[300], dark: Ur[700] }
    : { main: Ur[700], light: Ur[500], dark: Ur[900] };
}
function zI(e = "light") {
  return e === "dark"
    ? { main: jr[400], light: jr[300], dark: jr[700] }
    : { main: jr[800], light: jr[500], dark: jr[900] };
}
function UI(e = "light") {
  return e === "dark"
    ? { main: Go[400], light: Go[300], dark: Go[700] }
    : { main: "#ed6c02", light: Go[500], dark: Go[900] };
}
function jI(e) {
  const { mode: t = "light", contrastThreshold: n = 3, tonalOffset: r = 0.2 } = e,
    o = V(e, MI),
    i = e.primary || LI(t),
    s = e.secondary || $I(t),
    a = e.error || DI(t),
    l = e.info || FI(t),
    u = e.success || zI(t),
    d = e.warning || UI(t);
  function p(v) {
    return pI(v, yu.text.primary) >= n ? yu.text.primary : Sh.text.primary;
  }
  const h = ({ color: v, name: x, mainShade: m = 500, lightShade: c = 300, darkShade: f = 700 }) => {
      if (((v = k({}, v)), !v.main && v[m] && (v.main = v[m]), !v.hasOwnProperty("main")))
        throw new Error(Cr(11, x ? ` (${x})` : "", m));
      if (typeof v.main != "string") throw new Error(Cr(12, x ? ` (${x})` : "", JSON.stringify(v.main)));
      return _h(v, "light", c, r), _h(v, "dark", f, r), v.contrastText || (v.contrastText = p(v.main)), v;
    },
    y = { dark: yu, light: Sh };
  return gt(
    k(
      {
        common: k({}, ji),
        mode: t,
        primary: h({ color: i, name: "primary" }),
        secondary: h({ color: s, name: "secondary", mainShade: "A400", lightShade: "A200", darkShade: "A700" }),
        error: h({ color: a, name: "error" }),
        warning: h({ color: d, name: "warning" }),
        info: h({ color: l, name: "info" }),
        success: h({ color: u, name: "success" }),
        grey: bI,
        contrastThreshold: n,
        getContrastText: p,
        augmentColor: h,
        tonalOffset: r,
      },
      y[t]
    ),
    o
  );
}
const BI = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function WI(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Eh = { textTransform: "uppercase" },
  kh = '"Roboto", "Helvetica", "Arial", sans-serif';
function HI(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = kh,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: d,
      pxToRem: p,
    } = n,
    h = V(n, BI),
    y = o / 14,
    g = p || ((m) => `${(m / u) * y}rem`),
    v = (m, c, f, w, S) =>
      k(
        { fontFamily: r, fontWeight: m, fontSize: g(c), lineHeight: f },
        r === kh ? { letterSpacing: `${WI(w / c)}em` } : {},
        S,
        d
      ),
    x = {
      h1: v(i, 96, 1.167, -1.5),
      h2: v(i, 60, 1.2, -0.5),
      h3: v(s, 48, 1.167, 0),
      h4: v(s, 34, 1.235, 0.25),
      h5: v(s, 24, 1.334, 0),
      h6: v(a, 20, 1.6, 0.15),
      subtitle1: v(s, 16, 1.75, 0.15),
      subtitle2: v(a, 14, 1.57, 0.1),
      body1: v(s, 16, 1.5, 0.15),
      body2: v(s, 14, 1.43, 0.15),
      button: v(a, 14, 1.75, 0.4, Eh),
      caption: v(s, 12, 1.66, 0.4),
      overline: v(s, 12, 2.66, 1, Eh),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return gt(
    k(
      {
        htmlFontSize: u,
        pxToRem: g,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: s,
        fontWeightMedium: a,
        fontWeightBold: l,
      },
      x
    ),
    h,
    { clone: !1 }
  );
}
const VI = 0.2,
  KI = 0.14,
  GI = 0.12;
function pe(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${VI})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${KI})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${GI})`,
  ].join(",");
}
const qI = [
    "none",
    pe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    pe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    pe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    pe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    pe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    pe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    pe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    pe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    pe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    pe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    pe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    pe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    pe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    pe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    pe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    pe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    pe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    pe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    pe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    pe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    pe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    pe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    pe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    pe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  QI = ["duration", "easing", "delay"],
  YI = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  XI = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Ch(e) {
  return `${Math.round(e)}ms`;
}
function JI(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function ZI(e) {
  const t = k({}, YI, e.easing),
    n = k({}, XI, e.duration);
  return k(
    {
      getAutoHeightDuration: JI,
      create: (o = ["all"], i = {}) => {
        const { duration: s = n.standard, easing: a = t.easeInOut, delay: l = 0 } = i;
        return (
          V(i, QI),
          (Array.isArray(o) ? o : [o])
            .map((u) => `${u} ${typeof s == "string" ? s : Ch(s)} ${a} ${typeof l == "string" ? l : Ch(l)}`)
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const eb = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  tb = eb,
  nb = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function rb(e = {}, ...t) {
  const { mixins: n = {}, palette: r = {}, transitions: o = {}, typography: i = {} } = e,
    s = V(e, nb);
  if (e.vars) throw new Error(Cr(18));
  const a = jI(r),
    l = tf(e);
  let u = gt(l, {
    mixins: aI(l.breakpoints, n),
    palette: a,
    shadows: qI.slice(),
    typography: HI(a, i),
    transitions: ZI(o),
    zIndex: k({}, tb),
  });
  return (
    (u = gt(u, s)),
    (u = t.reduce((d, p) => gt(d, p), u)),
    (u.unstable_sxConfig = k({}, rs, s == null ? void 0 : s.unstable_sxConfig)),
    (u.unstable_sx = function (p) {
      return Tl({ sx: p, theme: this });
    }),
    u
  );
}
const ob = rb(),
  Pl = ob,
  Rl = "$$material";
function z0(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const ib = (e) => z0(e) && e !== "classes",
  rn = ib,
  G = Hx({ themeId: Rl, defaultTheme: Pl, rootShouldForwardProp: rn });
function U0(e, t) {
  const n = k({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = k({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = k({}, i)),
              Object.keys(o).forEach((s) => {
                n[r][s] = U0(o[s], i[s]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function sb(e) {
  const { theme: t, name: n, props: r } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps
    ? r
    : U0(t.components[n].defaultProps, r);
}
function ab(e) {
  return Object.keys(e).length === 0;
}
function lb(e = null) {
  const t = E.useContext(dl);
  return !t || ab(t) ? e : t;
}
const ub = tf();
function sf(e = ub) {
  return lb(e);
}
function cb({ props: e, name: t, defaultTheme: n, themeId: r }) {
  let o = sf(n);
  return r && (o = o[r] || o), sb({ theme: o, name: t, props: e });
}
function Ge({ props: e, name: t }) {
  return cb({ props: e, name: t, defaultTheme: Pl, themeId: Rl });
}
function Ta(e) {
  return typeof e == "string";
}
function db(e, t, n) {
  return e === void 0 || Ta(e) ? t : k({}, t, { ownerState: k({}, t.ownerState, n) });
}
function j0(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter((r) => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r))
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function fb(e, t, n) {
  return typeof e == "function" ? e(t, n) : e;
}
function xh(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function B0(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function wu(e, t) {
  var n, r;
  return (
    E.isValidElement(e) &&
    t.indexOf(
      (n = e.type.muiName) != null
        ? n
        : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null
        ? void 0
        : r.muiName
    ) !== -1
  );
}
function vt(e) {
  return (e && e.ownerDocument) || document;
}
function xr(e) {
  return vt(e).defaultView || window;
}
function Oc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Ir = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
function Ih({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = E.useRef(e !== void 0),
    [i, s] = E.useState(t),
    a = o ? e : i,
    l = E.useCallback((u) => {
      o || s(u);
    }, []);
  return [a, l];
}
function bh(e) {
  const t = E.useRef(e);
  return (
    Ir(() => {
      t.current = e;
    }),
    E.useRef((...n) => (0, t.current)(...n)).current
  );
}
function Lt(...e) {
  return E.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              Oc(n, t);
            });
          },
    e
  );
}
const Th = {};
function pb(e, t) {
  const n = E.useRef(Th);
  return n.current === Th && (n.current = e(t)), n;
}
const hb = [];
function mb(e) {
  E.useEffect(e, hb);
}
class af {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new af();
  }
  start(t, n) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), n();
      }, t));
  }
}
function gb() {
  const e = pb(af.create).current;
  return mb(e.disposeEffect), e;
}
function W0(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t);
}
function Ue(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = Le(e, o, n);
    }),
    r
  );
}
function Ph(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function vb(e) {
  const { getSlotProps: t, additionalProps: n, externalSlotProps: r, externalForwardedProps: o, className: i } = e;
  if (!t) {
    const y = xe(
        n == null ? void 0 : n.className,
        i,
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className
      ),
      g = k({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style),
      v = k({}, n, o, r);
    return (
      y.length > 0 && (v.className = y), Object.keys(g).length > 0 && (v.style = g), { props: v, internalRef: void 0 }
    );
  }
  const s = j0(k({}, o, r)),
    a = Ph(r),
    l = Ph(o),
    u = t(s),
    d = xe(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    p = k(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    h = k({}, u, n, l, a);
  return (
    d.length > 0 && (h.className = d), Object.keys(p).length > 0 && (h.style = p), { props: h, internalRef: u.ref }
  );
}
const yb = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Io(e) {
  var t;
  const { elementType: n, externalSlotProps: r, ownerState: o, skipResolvingSlotProps: i = !1 } = e,
    s = V(e, yb),
    a = i ? {} : fb(r, o),
    { props: l, internalRef: u } = vb(k({}, s, { externalSlotProps: a })),
    d = Lt(u, a == null ? void 0 : a.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return db(n, k({}, l, { ref: d }), o);
}
const wb = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function Sb(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t)
    ? e.contentEditable === "true" ||
      ((e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") &&
        e.getAttribute("tabindex") === null)
      ? 0
      : e.tabIndex
    : t;
}
function _b(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = (r) => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e;
}
function Eb(e) {
  return !(e.disabled || (e.tagName === "INPUT" && e.type === "hidden") || _b(e));
}
function kb(e) {
  const t = [],
    n = [];
  return (
    Array.from(e.querySelectorAll(wb)).forEach((r, o) => {
      const i = Sb(r);
      i === -1 || !Eb(r) || (i === 0 ? t.push(r) : n.push({ documentOrder: o, tabIndex: i, node: r }));
    }),
    n
      .sort((r, o) => (r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex))
      .map((r) => r.node)
      .concat(t)
  );
}
function Cb() {
  return !0;
}
function xb(e) {
  const {
      children: t,
      disableAutoFocus: n = !1,
      disableEnforceFocus: r = !1,
      disableRestoreFocus: o = !1,
      getTabbable: i = kb,
      isEnabled: s = Cb,
      open: a,
    } = e,
    l = E.useRef(!1),
    u = E.useRef(null),
    d = E.useRef(null),
    p = E.useRef(null),
    h = E.useRef(null),
    y = E.useRef(!1),
    g = E.useRef(null),
    v = Lt(t.ref, g),
    x = E.useRef(null);
  E.useEffect(() => {
    !a || !g.current || (y.current = !n);
  }, [n, a]),
    E.useEffect(() => {
      if (!a || !g.current) return;
      const f = vt(g.current);
      return (
        g.current.contains(f.activeElement) ||
          (g.current.hasAttribute("tabIndex") || g.current.setAttribute("tabIndex", "-1"),
          y.current && g.current.focus()),
        () => {
          o || (p.current && p.current.focus && ((l.current = !0), p.current.focus()), (p.current = null));
        }
      );
    }, [a]),
    E.useEffect(() => {
      if (!a || !g.current) return;
      const f = vt(g.current),
        w = (_) => {
          (x.current = _),
            !(r || !s() || _.key !== "Tab") &&
              f.activeElement === g.current &&
              _.shiftKey &&
              ((l.current = !0), d.current && d.current.focus());
        },
        S = () => {
          const _ = g.current;
          if (_ === null) return;
          if (!f.hasFocus() || !s() || l.current) {
            l.current = !1;
            return;
          }
          if (_.contains(f.activeElement) || (r && f.activeElement !== u.current && f.activeElement !== d.current))
            return;
          if (f.activeElement !== h.current) h.current = null;
          else if (h.current !== null) return;
          if (!y.current) return;
          let b = [];
          if (((f.activeElement === u.current || f.activeElement === d.current) && (b = i(g.current)), b.length > 0)) {
            var O, R;
            const U = !!((O = x.current) != null && O.shiftKey && ((R = x.current) == null ? void 0 : R.key) === "Tab"),
              j = b[0],
              F = b[b.length - 1];
            typeof j != "string" && typeof F != "string" && (U ? F.focus() : j.focus());
          } else _.focus();
        };
      f.addEventListener("focusin", S), f.addEventListener("keydown", w, !0);
      const C = setInterval(() => {
        f.activeElement && f.activeElement.tagName === "BODY" && S();
      }, 50);
      return () => {
        clearInterval(C), f.removeEventListener("focusin", S), f.removeEventListener("keydown", w, !0);
      };
    }, [n, r, o, s, a, i]);
  const m = (f) => {
      p.current === null && (p.current = f.relatedTarget), (y.current = !0), (h.current = f.target);
      const w = t.props.onFocus;
      w && w(f);
    },
    c = (f) => {
      p.current === null && (p.current = f.relatedTarget), (y.current = !0);
    };
  return P.jsxs(E.Fragment, {
    children: [
      P.jsx("div", { tabIndex: a ? 0 : -1, onFocus: c, ref: u, "data-testid": "sentinelStart" }),
      E.cloneElement(t, { ref: v, onFocus: m }),
      P.jsx("div", { tabIndex: a ? 0 : -1, onFocus: c, ref: d, "data-testid": "sentinelEnd" }),
    ],
  });
}
function Ib(e) {
  return typeof e == "function" ? e() : e;
}
const bb = E.forwardRef(function (t, n) {
  const { children: r, container: o, disablePortal: i = !1 } = t,
    [s, a] = E.useState(null),
    l = Lt(E.isValidElement(r) ? r.ref : null, n);
  if (
    (Ir(() => {
      i || a(Ib(o) || document.body);
    }, [o, i]),
    Ir(() => {
      if (s && !i)
        return (
          Oc(n, s),
          () => {
            Oc(n, null);
          }
        );
    }, [n, s, i]),
    i)
  ) {
    if (E.isValidElement(r)) {
      const u = { ref: l };
      return E.cloneElement(r, u);
    }
    return P.jsx(E.Fragment, { children: r });
  }
  return P.jsx(E.Fragment, { children: s && Rd.createPortal(r, s) });
});
function Tb(e) {
  const t = vt(e);
  return t.body === e ? xr(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function mi(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function Rh(e) {
  return parseInt(xr(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function Pb(e) {
  const n =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r;
}
function Oh(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, (s) => {
    const a = i.indexOf(s) === -1,
      l = !Pb(s);
    a && l && mi(s, o);
  });
}
function Su(e, t) {
  let n = -1;
  return e.some((r, o) => (t(r) ? ((n = o), !0) : !1)), n;
}
function Rb(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (Tb(r)) {
      const s = W0(vt(r));
      n.push({ value: r.style.paddingRight, property: "padding-right", el: r }),
        (r.style.paddingRight = `${Rh(r) + s}px`);
      const a = vt(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, (l) => {
        n.push({ value: l.style.paddingRight, property: "padding-right", el: l }),
          (l.style.paddingRight = `${Rh(l) + s}px`);
      });
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = vt(r).body;
    else {
      const s = r.parentElement,
        a = xr(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : r;
    }
    n.push(
      { value: i.style.overflow, property: "overflow", el: i },
      { value: i.style.overflowX, property: "overflow-x", el: i },
      { value: i.style.overflowY, property: "overflow-y", el: i }
    ),
      (i.style.overflow = "hidden");
  }
  return () => {
    n.forEach(({ value: i, el: s, property: a }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a);
    });
  };
}
function Ob(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (n) => {
      n.getAttribute("aria-hidden") === "true" && t.push(n);
    }),
    t
  );
}
class Nb {
  constructor() {
    (this.containers = void 0), (this.modals = void 0), (this.modals = []), (this.containers = []);
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    (r = this.modals.length), this.modals.push(t), t.modalRef && mi(t.modalRef, !1);
    const o = Ob(n);
    Oh(n, t.mount, t.modalRef, o, !0);
    const i = Su(this.containers, (s) => s.container === n);
    return i !== -1
      ? (this.containers[i].modals.push(t), r)
      : (this.containers.push({ modals: [t], container: n, restore: null, hiddenSiblings: o }), r);
  }
  mount(t, n) {
    const r = Su(this.containers, (i) => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = Rb(o, n));
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = Su(this.containers, (s) => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if ((i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0))
      i.restore && i.restore(),
        t.modalRef && mi(t.modalRef, n),
        Oh(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1),
        this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && mi(s.modalRef, !1);
    }
    return r;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Ab(e) {
  return typeof e == "function" ? e() : e;
}
function Mb(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Lb = new Nb();
function $b(e) {
  const {
      container: t,
      disableEscapeKeyDown: n = !1,
      disableScrollLock: r = !1,
      manager: o = Lb,
      closeAfterTransition: i = !1,
      onTransitionEnter: s,
      onTransitionExited: a,
      children: l,
      onClose: u,
      open: d,
      rootRef: p,
    } = e,
    h = E.useRef({}),
    y = E.useRef(null),
    g = E.useRef(null),
    v = Lt(g, p),
    [x, m] = E.useState(!d),
    c = Mb(l);
  let f = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (f = !1);
  const w = () => vt(y.current),
    S = () => ((h.current.modalRef = g.current), (h.current.mount = y.current), h.current),
    C = () => {
      o.mount(S(), { disableScrollLock: r }), g.current && (g.current.scrollTop = 0);
    },
    _ = bh(() => {
      const D = Ab(t) || w().body;
      o.add(S(), D), g.current && C();
    }),
    b = E.useCallback(() => o.isTopModal(S()), [o]),
    O = bh((D) => {
      (y.current = D), D && (d && b() ? C() : g.current && mi(g.current, f));
    }),
    R = E.useCallback(() => {
      o.remove(S(), f);
    }, [f, o]);
  E.useEffect(
    () => () => {
      R();
    },
    [R]
  ),
    E.useEffect(() => {
      d ? _() : (!c || !i) && R();
    }, [d, R, c, i, _]);
  const U = (D) => (z) => {
      var I;
      (I = D.onKeyDown) == null || I.call(D, z),
        !(z.key !== "Escape" || z.which === 229 || !b()) && (n || (z.stopPropagation(), u && u(z, "escapeKeyDown")));
    },
    j = (D) => (z) => {
      var I;
      (I = D.onClick) == null || I.call(D, z), z.target === z.currentTarget && u && u(z, "backdropClick");
    };
  return {
    getRootProps: (D = {}) => {
      const z = j0(e);
      delete z.onTransitionEnter, delete z.onTransitionExited;
      const I = k({}, z, D);
      return k({ role: "presentation" }, I, { onKeyDown: U(I), ref: v });
    },
    getBackdropProps: (D = {}) => {
      const z = D;
      return k({ "aria-hidden": !0 }, z, { onClick: j(z), open: d });
    },
    getTransitionProps: () => {
      const D = () => {
          m(!1), s && s();
        },
        z = () => {
          m(!0), a && a(), i && R();
        };
      return {
        onEnter: xh(D, l == null ? void 0 : l.props.onEnter),
        onExited: xh(z, l == null ? void 0 : l.props.onExited),
      };
    },
    rootRef: v,
    portalRef: O,
    isTopModal: b,
    exited: x,
    hasTransition: c,
  };
}
const Db = ["onChange", "maxRows", "minRows", "style", "value"];
function Is(e) {
  return parseInt(e, 10) || 0;
}
const Fb = {
  shadow: {
    visibility: "hidden",
    position: "absolute",
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    transform: "translateZ(0)",
  },
};
function zb(e) {
  return e == null || Object.keys(e).length === 0 || (e.outerHeightStyle === 0 && !e.overflowing);
}
const Ub = E.forwardRef(function (t, n) {
  const { onChange: r, maxRows: o, minRows: i = 1, style: s, value: a } = t,
    l = V(t, Db),
    { current: u } = E.useRef(a != null),
    d = E.useRef(null),
    p = Lt(n, d),
    h = E.useRef(null),
    y = E.useCallback(() => {
      const x = d.current,
        c = xr(x).getComputedStyle(x);
      if (c.width === "0px") return { outerHeightStyle: 0, overflowing: !1 };
      const f = h.current;
      (f.style.width = c.width),
        (f.value = x.value || t.placeholder || "x"),
        f.value.slice(-1) ===
          `
` && (f.value += " ");
      const w = c.boxSizing,
        S = Is(c.paddingBottom) + Is(c.paddingTop),
        C = Is(c.borderBottomWidth) + Is(c.borderTopWidth),
        _ = f.scrollHeight;
      f.value = "x";
      const b = f.scrollHeight;
      let O = _;
      i && (O = Math.max(Number(i) * b, O)), o && (O = Math.min(Number(o) * b, O)), (O = Math.max(O, b));
      const R = O + (w === "border-box" ? S + C : 0),
        U = Math.abs(O - _) <= 1;
      return { outerHeightStyle: R, overflowing: U };
    }, [o, i, t.placeholder]),
    g = E.useCallback(() => {
      const x = y();
      if (zb(x)) return;
      const m = d.current;
      (m.style.height = `${x.outerHeightStyle}px`), (m.style.overflow = x.overflowing ? "hidden" : "");
    }, [y]);
  Ir(() => {
    const x = () => {
      g();
    };
    let m;
    const c = B0(x),
      f = d.current,
      w = xr(f);
    w.addEventListener("resize", c);
    let S;
    return (
      typeof ResizeObserver < "u" && ((S = new ResizeObserver(x)), S.observe(f)),
      () => {
        c.clear(), cancelAnimationFrame(m), w.removeEventListener("resize", c), S && S.disconnect();
      }
    );
  }, [y, g]),
    Ir(() => {
      g();
    });
  const v = (x) => {
    u || g(), r && r(x);
  };
  return P.jsxs(E.Fragment, {
    children: [
      P.jsx("textarea", k({ value: a, onChange: v, ref: p, rows: i, style: s }, l)),
      P.jsx("textarea", {
        "aria-hidden": !0,
        className: t.className,
        readOnly: !0,
        ref: h,
        tabIndex: -1,
        style: k({}, Fb.shadow, s, { paddingTop: 0, paddingBottom: 0 }),
      }),
    ],
  });
});
function $o({ props: e, states: t, muiFormControl: n }) {
  return t.reduce((r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r), {});
}
const jb = E.createContext(void 0),
  lf = jb;
function Do() {
  return E.useContext(lf);
}
function Bb({ styles: e, themeId: t, defaultTheme: n = {} }) {
  const r = sf(n),
    o = typeof e == "function" ? e((t && r[t]) || r) : e;
  return P.jsx(_0, { styles: o });
}
const Wb = E.createContext(),
  Hb = () => {
    const e = E.useContext(Wb);
    return e ?? !1;
  };
function Vb(e) {
  return P.jsx(Bb, k({}, e, { defaultTheme: Pl, themeId: Rl }));
}
function Nh(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Pa(e, t = !1) {
  return e && ((Nh(e.value) && e.value !== "") || (t && Nh(e.defaultValue) && e.defaultValue !== ""));
}
function Kb(e) {
  return e.startAdornment;
}
function Gb(e) {
  return Le("MuiInputBase", e);
}
const qb = Ue("MuiInputBase", [
    "root",
    "formControl",
    "focused",
    "disabled",
    "adornedStart",
    "adornedEnd",
    "error",
    "sizeSmall",
    "multiline",
    "colorSecondary",
    "fullWidth",
    "hiddenLabel",
    "readOnly",
    "input",
    "inputSizeSmall",
    "inputMultiline",
    "inputTypeSearch",
    "inputAdornedStart",
    "inputAdornedEnd",
    "inputHiddenLabel",
  ]),
  bo = qb,
  Qb = [
    "aria-describedby",
    "autoComplete",
    "autoFocus",
    "className",
    "color",
    "components",
    "componentsProps",
    "defaultValue",
    "disabled",
    "disableInjectingGlobalStyles",
    "endAdornment",
    "error",
    "fullWidth",
    "id",
    "inputComponent",
    "inputProps",
    "inputRef",
    "margin",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onClick",
    "onFocus",
    "onKeyDown",
    "onKeyUp",
    "placeholder",
    "readOnly",
    "renderSuffix",
    "rows",
    "size",
    "slotProps",
    "slots",
    "startAdornment",
    "type",
    "value",
  ],
  Ol = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.root,
      n.formControl && t.formControl,
      n.startAdornment && t.adornedStart,
      n.endAdornment && t.adornedEnd,
      n.error && t.error,
      n.size === "small" && t.sizeSmall,
      n.multiline && t.multiline,
      n.color && t[`color${Re(n.color)}`],
      n.fullWidth && t.fullWidth,
      n.hiddenLabel && t.hiddenLabel,
    ];
  },
  Nl = (e, t) => {
    const { ownerState: n } = e;
    return [
      t.input,
      n.size === "small" && t.inputSizeSmall,
      n.multiline && t.inputMultiline,
      n.type === "search" && t.inputTypeSearch,
      n.startAdornment && t.inputAdornedStart,
      n.endAdornment && t.inputAdornedEnd,
      n.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  Yb = (e) => {
    const {
        classes: t,
        color: n,
        disabled: r,
        error: o,
        endAdornment: i,
        focused: s,
        formControl: a,
        fullWidth: l,
        hiddenLabel: u,
        multiline: d,
        readOnly: p,
        size: h,
        startAdornment: y,
        type: g,
      } = e,
      v = {
        root: [
          "root",
          `color${Re(n)}`,
          r && "disabled",
          o && "error",
          l && "fullWidth",
          s && "focused",
          a && "formControl",
          h && h !== "medium" && `size${Re(h)}`,
          d && "multiline",
          y && "adornedStart",
          i && "adornedEnd",
          u && "hiddenLabel",
          p && "readOnly",
        ],
        input: [
          "input",
          r && "disabled",
          g === "search" && "inputTypeSearch",
          d && "inputMultiline",
          h === "small" && "inputSizeSmall",
          u && "inputHiddenLabel",
          y && "inputAdornedStart",
          i && "inputAdornedEnd",
          p && "readOnly",
        ],
      };
    return Fe(v, Gb, t);
  },
  Al = G("div", { name: "MuiInputBase", slot: "Root", overridesResolver: Ol })(({ theme: e, ownerState: t }) =>
    k(
      {},
      e.typography.body1,
      {
        color: (e.vars || e).palette.text.primary,
        lineHeight: "1.4375em",
        boxSizing: "border-box",
        position: "relative",
        cursor: "text",
        display: "inline-flex",
        alignItems: "center",
        [`&.${bo.disabled}`]: { color: (e.vars || e).palette.text.disabled, cursor: "default" },
      },
      t.multiline && k({ padding: "4px 0 5px" }, t.size === "small" && { paddingTop: 1 }),
      t.fullWidth && { width: "100%" }
    )
  ),
  Ml = G("input", { name: "MuiInputBase", slot: "Input", overridesResolver: Nl })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light",
      r = k(
        { color: "currentColor" },
        e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: n ? 0.42 : 0.5 },
        { transition: e.transitions.create("opacity", { duration: e.transitions.duration.shorter }) }
      ),
      o = { opacity: "0 !important" },
      i = e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: n ? 0.42 : 0.5 };
    return k(
      {
        font: "inherit",
        letterSpacing: "inherit",
        color: "currentColor",
        padding: "4px 0 5px",
        border: 0,
        boxSizing: "content-box",
        background: "none",
        height: "1.4375em",
        margin: 0,
        WebkitTapHighlightColor: "transparent",
        display: "block",
        minWidth: 0,
        width: "100%",
        animationName: "mui-auto-fill-cancel",
        animationDuration: "10ms",
        "&::-webkit-input-placeholder": r,
        "&::-moz-placeholder": r,
        "&:-ms-input-placeholder": r,
        "&::-ms-input-placeholder": r,
        "&:focus": { outline: 0 },
        "&:invalid": { boxShadow: "none" },
        "&::-webkit-search-decoration": { WebkitAppearance: "none" },
        [`label[data-shrink=false] + .${bo.formControl} &`]: {
          "&::-webkit-input-placeholder": o,
          "&::-moz-placeholder": o,
          "&:-ms-input-placeholder": o,
          "&::-ms-input-placeholder": o,
          "&:focus::-webkit-input-placeholder": i,
          "&:focus::-moz-placeholder": i,
          "&:focus:-ms-input-placeholder": i,
          "&:focus::-ms-input-placeholder": i,
        },
        [`&.${bo.disabled}`]: { opacity: 1, WebkitTextFillColor: (e.vars || e).palette.text.disabled },
        "&:-webkit-autofill": { animationDuration: "5000s", animationName: "mui-auto-fill" },
      },
      t.size === "small" && { paddingTop: 1 },
      t.multiline && { height: "auto", resize: "none", padding: 0, paddingTop: 0 },
      t.type === "search" && { MozAppearance: "textfield" }
    );
  }),
  Xb = P.jsx(Vb, {
    styles: {
      "@keyframes mui-auto-fill": { from: { display: "block" } },
      "@keyframes mui-auto-fill-cancel": { from: { display: "block" } },
    },
  }),
  Jb = E.forwardRef(function (t, n) {
    var r;
    const o = Ge({ props: t, name: "MuiInputBase" }),
      {
        "aria-describedby": i,
        autoComplete: s,
        autoFocus: a,
        className: l,
        components: u = {},
        componentsProps: d = {},
        defaultValue: p,
        disabled: h,
        disableInjectingGlobalStyles: y,
        endAdornment: g,
        fullWidth: v = !1,
        id: x,
        inputComponent: m = "input",
        inputProps: c = {},
        inputRef: f,
        maxRows: w,
        minRows: S,
        multiline: C = !1,
        name: _,
        onBlur: b,
        onChange: O,
        onClick: R,
        onFocus: U,
        onKeyDown: j,
        onKeyUp: F,
        placeholder: L,
        readOnly: $,
        renderSuffix: D,
        rows: z,
        slotProps: I = {},
        slots: N = {},
        startAdornment: M,
        type: Q = "text",
        value: H,
      } = o,
      le = V(o, Qb),
      q = c.value != null ? c.value : H,
      { current: me } = E.useRef(q != null),
      re = E.useRef(),
      je = E.useCallback((fe) => {}, []),
      ct = Lt(re, f, c.ref, je),
      [$t, Et] = E.useState(!1),
      oe = Do(),
      ke = $o({
        props: o,
        muiFormControl: oe,
        states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"],
      });
    (ke.focused = oe ? oe.focused : $t),
      E.useEffect(() => {
        !oe && h && $t && (Et(!1), b && b());
      }, [oe, h, $t, b]);
    const Y = oe && oe.onFilled,
      se = oe && oe.onEmpty,
      we = E.useCallback(
        (fe) => {
          Pa(fe) ? Y && Y() : se && se();
        },
        [Y, se]
      );
    Ir(() => {
      me && we({ value: q });
    }, [q, we, me]);
    const Or = (fe) => {
        if (ke.disabled) {
          fe.stopPropagation();
          return;
        }
        U && U(fe), c.onFocus && c.onFocus(fe), oe && oe.onFocus ? oe.onFocus(fe) : Et(!0);
      },
      Vt = (fe) => {
        b && b(fe), c.onBlur && c.onBlur(fe), oe && oe.onBlur ? oe.onBlur(fe) : Et(!1);
      },
      Kt = (fe, ...or) => {
        if (!me) {
          const Mr = fe.target || re.current;
          if (Mr == null) throw new Error(Cr(1));
          we({ value: Mr.value });
        }
        c.onChange && c.onChange(fe, ...or), O && O(fe, ...or);
      };
    E.useEffect(() => {
      we(re.current);
    }, []);
    const on = (fe) => {
      re.current && fe.currentTarget === fe.target && re.current.focus(), R && R(fe);
    };
    let kn = m,
      Oe = c;
    C &&
      kn === "input" &&
      (z
        ? (Oe = k({ type: void 0, minRows: z, maxRows: z }, Oe))
        : (Oe = k({ type: void 0, maxRows: w, minRows: S }, Oe)),
      (kn = Ub));
    const rr = (fe) => {
      we(fe.animationName === "mui-auto-fill-cancel" ? re.current : { value: "x" });
    };
    E.useEffect(() => {
      oe && oe.setAdornedStart(!!M);
    }, [oe, M]);
    const kt = k({}, o, {
        color: ke.color || "primary",
        disabled: ke.disabled,
        endAdornment: g,
        error: ke.error,
        focused: ke.focused,
        formControl: oe,
        fullWidth: v,
        hiddenLabel: ke.hiddenLabel,
        multiline: C,
        size: ke.size,
        startAdornment: M,
        type: Q,
      }),
      Ne = Yb(kt),
      os = N.root || u.Root || Al,
      Nr = I.root || d.root || {},
      Ar = N.input || u.Input || Ml;
    return (
      (Oe = k({}, Oe, (r = I.input) != null ? r : d.input)),
      P.jsxs(E.Fragment, {
        children: [
          !y && Xb,
          P.jsxs(
            os,
            k({}, Nr, !Ta(os) && { ownerState: k({}, kt, Nr.ownerState) }, { ref: n, onClick: on }, le, {
              className: xe(Ne.root, Nr.className, l, $ && "MuiInputBase-readOnly"),
              children: [
                M,
                P.jsx(lf.Provider, {
                  value: null,
                  children: P.jsx(
                    Ar,
                    k(
                      {
                        ownerState: kt,
                        "aria-invalid": ke.error,
                        "aria-describedby": i,
                        autoComplete: s,
                        autoFocus: a,
                        defaultValue: p,
                        disabled: ke.disabled,
                        id: x,
                        onAnimationStart: rr,
                        name: _,
                        placeholder: L,
                        readOnly: $,
                        required: ke.required,
                        rows: z,
                        value: q,
                        onKeyDown: j,
                        onKeyUp: F,
                        type: Q,
                      },
                      Oe,
                      !Ta(Ar) && { as: kn, ownerState: k({}, kt, Oe.ownerState) },
                      {
                        ref: ct,
                        className: xe(Ne.input, Oe.className, $ && "MuiInputBase-readOnly"),
                        onBlur: Vt,
                        onChange: Kt,
                        onFocus: Or,
                      }
                    )
                  ),
                }),
                g,
                D ? D(k({}, ke, { startAdornment: M })) : null,
              ],
            })
          ),
        ],
      })
    );
  }),
  uf = Jb;
function Zb(e) {
  return Le("MuiInput", e);
}
const eT = k({}, bo, Ue("MuiInput", ["root", "underline", "input"])),
  qo = eT,
  tT = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  nT = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = Fe({ root: ["root", !n && "underline"], input: ["input"] }, Zb, t);
    return k({}, t, o);
  },
  rT = G(Al, {
    shouldForwardProp: (e) => rn(e) || e === "classes",
    name: "MuiInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Ol(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    let r = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
    return (
      e.vars && (r = `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),
      k(
        { position: "relative" },
        t.formControl && { "label + &": { marginTop: 16 } },
        !t.disableUnderline && {
          "&::after": {
            borderBottom: `2px solid ${(e.vars || e).palette[t.color].main}`,
            left: 0,
            bottom: 0,
            content: '""',
            position: "absolute",
            right: 0,
            transform: "scaleX(0)",
            transition: e.transitions.create("transform", {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
            pointerEvents: "none",
          },
          [`&.${qo.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
          [`&.${qo.error}`]: { "&::before, &::after": { borderBottomColor: (e.vars || e).palette.error.main } },
          "&::before": {
            borderBottom: `1px solid ${r}`,
            left: 0,
            bottom: 0,
            content: '"\\00a0"',
            position: "absolute",
            right: 0,
            transition: e.transitions.create("border-bottom-color", { duration: e.transitions.duration.shorter }),
            pointerEvents: "none",
          },
          [`&:hover:not(.${qo.disabled}, .${qo.error}):before`]: {
            borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
            "@media (hover: none)": { borderBottom: `1px solid ${r}` },
          },
          [`&.${qo.disabled}:before`]: { borderBottomStyle: "dotted" },
        }
      )
    );
  }),
  oT = G(Ml, { name: "MuiInput", slot: "Input", overridesResolver: Nl })({}),
  H0 = E.forwardRef(function (t, n) {
    var r, o, i, s;
    const a = Ge({ props: t, name: "MuiInput" }),
      {
        disableUnderline: l,
        components: u = {},
        componentsProps: d,
        fullWidth: p = !1,
        inputComponent: h = "input",
        multiline: y = !1,
        slotProps: g,
        slots: v = {},
        type: x = "text",
      } = a,
      m = V(a, tT),
      c = nT(a),
      w = { root: { ownerState: { disableUnderline: l } } },
      S = g ?? d ? gt(g ?? d, w) : w,
      C = (r = (o = v.root) != null ? o : u.Root) != null ? r : rT,
      _ = (i = (s = v.input) != null ? s : u.Input) != null ? i : oT;
    return P.jsx(
      uf,
      k(
        { slots: { root: C, input: _ }, slotProps: S, fullWidth: p, inputComponent: h, multiline: y, ref: n, type: x },
        m,
        { classes: c }
      )
    );
  });
H0.muiName = "Input";
const V0 = H0;
function iT(e) {
  return Le("MuiFilledInput", e);
}
const sT = k({}, bo, Ue("MuiFilledInput", ["root", "underline", "input"])),
  ir = sT,
  aT = [
    "disableUnderline",
    "components",
    "componentsProps",
    "fullWidth",
    "hiddenLabel",
    "inputComponent",
    "multiline",
    "slotProps",
    "slots",
    "type",
  ],
  lT = (e) => {
    const { classes: t, disableUnderline: n } = e,
      o = Fe({ root: ["root", !n && "underline"], input: ["input"] }, iT, t);
    return k({}, t, o);
  },
  uT = G(Al, {
    shouldForwardProp: (e) => rn(e) || e === "classes",
    name: "MuiFilledInput",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [...Ol(e, t), !n.disableUnderline && t.underline];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    const r = e.palette.mode === "light",
      o = r ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)",
      i = r ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)",
      s = r ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)",
      a = r ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return k(
      {
        position: "relative",
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        "&:hover": {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : s,
          "@media (hover: none)": { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i },
        },
        [`&.${ir.focused}`]: { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : i },
        [`&.${ir.disabled}`]: { backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : a },
      },
      !t.disableUnderline && {
        "&::after": {
          borderBottom: `2px solid ${(n = (e.vars || e).palette[t.color || "primary"]) == null ? void 0 : n.main}`,
          left: 0,
          bottom: 0,
          content: '""',
          position: "absolute",
          right: 0,
          transform: "scaleX(0)",
          transition: e.transitions.create("transform", {
            duration: e.transitions.duration.shorter,
            easing: e.transitions.easing.easeOut,
          }),
          pointerEvents: "none",
        },
        [`&.${ir.focused}:after`]: { transform: "scaleX(1) translateX(0)" },
        [`&.${ir.error}`]: { "&::before, &::after": { borderBottomColor: (e.vars || e).palette.error.main } },
        "&::before": {
          borderBottom: `1px solid ${
            e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})` : o
          }`,
          left: 0,
          bottom: 0,
          content: '"\\00a0"',
          position: "absolute",
          right: 0,
          transition: e.transitions.create("border-bottom-color", { duration: e.transitions.duration.shorter }),
          pointerEvents: "none",
        },
        [`&:hover:not(.${ir.disabled}, .${ir.error}):before`]: {
          borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
        },
        [`&.${ir.disabled}:before`]: { borderBottomStyle: "dotted" },
      },
      t.startAdornment && { paddingLeft: 12 },
      t.endAdornment && { paddingRight: 12 },
      t.multiline &&
        k(
          { padding: "25px 12px 8px" },
          t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
          t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
          t.hiddenLabel && t.size === "small" && { paddingTop: 8, paddingBottom: 9 }
        )
    );
  }),
  cT = G(Ml, { name: "MuiFilledInput", slot: "Input", overridesResolver: Nl })(({ theme: e, ownerState: t }) =>
    k(
      { paddingTop: 25, paddingRight: 12, paddingBottom: 8, paddingLeft: 12 },
      !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
        },
      },
      e.vars && {
        "&:-webkit-autofill": { borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      },
      t.size === "small" && { paddingTop: 21, paddingBottom: 4 },
      t.hiddenLabel && { paddingTop: 16, paddingBottom: 17 },
      t.startAdornment && { paddingLeft: 0 },
      t.endAdornment && { paddingRight: 0 },
      t.hiddenLabel && t.size === "small" && { paddingTop: 8, paddingBottom: 9 },
      t.multiline && { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }
    )
  ),
  K0 = E.forwardRef(function (t, n) {
    var r, o, i, s;
    const a = Ge({ props: t, name: "MuiFilledInput" }),
      {
        components: l = {},
        componentsProps: u,
        fullWidth: d = !1,
        inputComponent: p = "input",
        multiline: h = !1,
        slotProps: y,
        slots: g = {},
        type: v = "text",
      } = a,
      x = V(a, aT),
      m = k({}, a, { fullWidth: d, inputComponent: p, multiline: h, type: v }),
      c = lT(a),
      f = { root: { ownerState: m }, input: { ownerState: m } },
      w = y ?? u ? gt(f, y ?? u) : f,
      S = (r = (o = g.root) != null ? o : l.Root) != null ? r : uT,
      C = (i = (s = g.input) != null ? s : l.Input) != null ? i : cT;
    return P.jsx(
      uf,
      k(
        {
          slots: { root: S, input: C },
          componentsProps: w,
          fullWidth: d,
          inputComponent: p,
          multiline: h,
          ref: n,
          type: v,
        },
        x,
        { classes: c }
      )
    );
  });
K0.muiName = "Input";
const G0 = K0;
var Ah;
const dT = ["children", "classes", "className", "label", "notched"],
  fT = G("fieldset", { shouldForwardProp: rn })({
    textAlign: "left",
    position: "absolute",
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: "0 8px",
    pointerEvents: "none",
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 1,
    overflow: "hidden",
    minWidth: "0%",
  }),
  pT = G("legend", { shouldForwardProp: rn })(({ ownerState: e, theme: t }) =>
    k(
      { float: "unset", width: "auto", overflow: "hidden" },
      !e.withLabel && {
        padding: 0,
        lineHeight: "11px",
        transition: t.transitions.create("width", { duration: 150, easing: t.transitions.easing.easeOut }),
      },
      e.withLabel &&
        k(
          {
            display: "block",
            padding: 0,
            height: 11,
            fontSize: "0.75em",
            visibility: "hidden",
            maxWidth: 0.01,
            transition: t.transitions.create("max-width", { duration: 50, easing: t.transitions.easing.easeOut }),
            whiteSpace: "nowrap",
            "& > span": { paddingLeft: 5, paddingRight: 5, display: "inline-block", opacity: 0, visibility: "visible" },
          },
          e.notched && {
            maxWidth: "100%",
            transition: t.transitions.create("max-width", {
              duration: 100,
              easing: t.transitions.easing.easeOut,
              delay: 50,
            }),
          }
        )
    )
  );
function hT(e) {
  const { className: t, label: n, notched: r } = e,
    o = V(e, dT),
    i = n != null && n !== "",
    s = k({}, e, { notched: r, withLabel: i });
  return P.jsx(
    fT,
    k({ "aria-hidden": !0, className: t, ownerState: s }, o, {
      children: P.jsx(pT, {
        ownerState: s,
        children: i
          ? P.jsx("span", { children: n })
          : Ah || (Ah = P.jsx("span", { className: "notranslate", children: "​" })),
      }),
    })
  );
}
function mT(e) {
  return Le("MuiOutlinedInput", e);
}
const gT = k({}, bo, Ue("MuiOutlinedInput", ["root", "notchedOutline", "input"])),
  In = gT,
  vT = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"],
  yT = (e) => {
    const { classes: t } = e,
      r = Fe({ root: ["root"], notchedOutline: ["notchedOutline"], input: ["input"] }, mT, t);
    return k({}, t, r);
  },
  wT = G(Al, {
    shouldForwardProp: (e) => rn(e) || e === "classes",
    name: "MuiOutlinedInput",
    slot: "Root",
    overridesResolver: Ol,
  })(({ theme: e, ownerState: t }) => {
    const n = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return k(
      {
        position: "relative",
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${In.notchedOutline}`]: { borderColor: (e.vars || e).palette.text.primary },
        "@media (hover: none)": {
          [`&:hover .${In.notchedOutline}`]: {
            borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : n,
          },
        },
        [`&.${In.focused} .${In.notchedOutline}`]: { borderColor: (e.vars || e).palette[t.color].main, borderWidth: 2 },
        [`&.${In.error} .${In.notchedOutline}`]: { borderColor: (e.vars || e).palette.error.main },
        [`&.${In.disabled} .${In.notchedOutline}`]: { borderColor: (e.vars || e).palette.action.disabled },
      },
      t.startAdornment && { paddingLeft: 14 },
      t.endAdornment && { paddingRight: 14 },
      t.multiline && k({ padding: "16.5px 14px" }, t.size === "small" && { padding: "8.5px 14px" })
    );
  }),
  ST = G(hT, { name: "MuiOutlinedInput", slot: "NotchedOutline", overridesResolver: (e, t) => t.notchedOutline })(
    ({ theme: e }) => {
      const t = e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
      return { borderColor: e.vars ? `rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : t };
    }
  ),
  _T = G(Ml, { name: "MuiOutlinedInput", slot: "Input", overridesResolver: Nl })(({ theme: e, ownerState: t }) =>
    k(
      { padding: "16.5px 14px" },
      !e.vars && {
        "&:-webkit-autofill": {
          WebkitBoxShadow: e.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
          WebkitTextFillColor: e.palette.mode === "light" ? null : "#fff",
          caretColor: e.palette.mode === "light" ? null : "#fff",
          borderRadius: "inherit",
        },
      },
      e.vars && {
        "&:-webkit-autofill": { borderRadius: "inherit" },
        [e.getColorSchemeSelector("dark")]: {
          "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 100px #266798 inset",
            WebkitTextFillColor: "#fff",
            caretColor: "#fff",
          },
        },
      },
      t.size === "small" && { padding: "8.5px 14px" },
      t.multiline && { padding: 0 },
      t.startAdornment && { paddingLeft: 0 },
      t.endAdornment && { paddingRight: 0 }
    )
  ),
  q0 = E.forwardRef(function (t, n) {
    var r, o, i, s, a;
    const l = Ge({ props: t, name: "MuiOutlinedInput" }),
      {
        components: u = {},
        fullWidth: d = !1,
        inputComponent: p = "input",
        label: h,
        multiline: y = !1,
        notched: g,
        slots: v = {},
        type: x = "text",
      } = l,
      m = V(l, vT),
      c = yT(l),
      f = Do(),
      w = $o({
        props: l,
        muiFormControl: f,
        states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"],
      }),
      S = k({}, l, {
        color: w.color || "primary",
        disabled: w.disabled,
        error: w.error,
        focused: w.focused,
        formControl: f,
        fullWidth: d,
        hiddenLabel: w.hiddenLabel,
        multiline: y,
        size: w.size,
        type: x,
      }),
      C = (r = (o = v.root) != null ? o : u.Root) != null ? r : wT,
      _ = (i = (s = v.input) != null ? s : u.Input) != null ? i : _T;
    return P.jsx(
      uf,
      k(
        {
          slots: { root: C, input: _ },
          renderSuffix: (b) =>
            P.jsx(ST, {
              ownerState: S,
              className: c.notchedOutline,
              label:
                h != null && h !== "" && w.required ? a || (a = P.jsxs(E.Fragment, { children: [h, " ", "*"] })) : h,
              notched: typeof g < "u" ? g : !!(b.startAdornment || b.filled || b.focused),
            }),
          fullWidth: d,
          inputComponent: p,
          multiline: y,
          ref: n,
          type: x,
        },
        m,
        { classes: k({}, c, { notchedOutline: null }) }
      )
    );
  });
q0.muiName = "Input";
const Q0 = q0;
function ET(e) {
  return Le("MuiFormLabel", e);
}
const kT = Ue("MuiFormLabel", [
    "root",
    "colorSecondary",
    "focused",
    "disabled",
    "error",
    "filled",
    "required",
    "asterisk",
  ]),
  gi = kT,
  CT = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"],
  xT = (e) => {
    const { classes: t, color: n, focused: r, disabled: o, error: i, filled: s, required: a } = e,
      l = {
        root: ["root", `color${Re(n)}`, o && "disabled", i && "error", s && "filled", r && "focused", a && "required"],
        asterisk: ["asterisk", i && "error"],
      };
    return Fe(l, ET, t);
  },
  IT = G("label", {
    name: "MuiFormLabel",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) =>
      k({}, t.root, e.color === "secondary" && t.colorSecondary, e.filled && t.filled),
  })(({ theme: e, ownerState: t }) =>
    k({ color: (e.vars || e).palette.text.secondary }, e.typography.body1, {
      lineHeight: "1.4375em",
      padding: 0,
      position: "relative",
      [`&.${gi.focused}`]: { color: (e.vars || e).palette[t.color].main },
      [`&.${gi.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${gi.error}`]: { color: (e.vars || e).palette.error.main },
    })
  ),
  bT = G("span", { name: "MuiFormLabel", slot: "Asterisk", overridesResolver: (e, t) => t.asterisk })(
    ({ theme: e }) => ({ [`&.${gi.error}`]: { color: (e.vars || e).palette.error.main } })
  ),
  TT = E.forwardRef(function (t, n) {
    const r = Ge({ props: t, name: "MuiFormLabel" }),
      { children: o, className: i, component: s = "label" } = r,
      a = V(r, CT),
      l = Do(),
      u = $o({ props: r, muiFormControl: l, states: ["color", "required", "focused", "disabled", "error", "filled"] }),
      d = k({}, r, {
        color: u.color || "primary",
        component: s,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      p = xT(d);
    return P.jsxs(
      IT,
      k({ as: s, ownerState: d, className: xe(p.root, i), ref: n }, a, {
        children: [
          o,
          u.required && P.jsxs(bT, { ownerState: d, "aria-hidden": !0, className: p.asterisk, children: [" ", "*"] }),
        ],
      })
    );
  }),
  PT = TT;
function RT(e) {
  return Le("MuiInputLabel", e);
}
Ue("MuiInputLabel", [
  "root",
  "focused",
  "disabled",
  "error",
  "required",
  "asterisk",
  "formControl",
  "sizeSmall",
  "shrink",
  "animated",
  "standard",
  "filled",
  "outlined",
]);
const OT = ["disableAnimation", "margin", "shrink", "variant", "className"],
  NT = (e) => {
    const { classes: t, formControl: n, size: r, shrink: o, disableAnimation: i, variant: s, required: a } = e,
      l = {
        root: ["root", n && "formControl", !i && "animated", o && "shrink", r && r !== "normal" && `size${Re(r)}`, s],
        asterisk: [a && "asterisk"],
      },
      u = Fe(l, RT, t);
    return k({}, t, u);
  },
  AT = G(PT, {
    shouldForwardProp: (e) => rn(e) || e === "classes",
    name: "MuiInputLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${gi.asterisk}`]: t.asterisk },
        t.root,
        n.formControl && t.formControl,
        n.size === "small" && t.sizeSmall,
        n.shrink && t.shrink,
        !n.disableAnimation && t.animated,
        n.focused && t.focused,
        t[n.variant],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    k(
      {
        display: "block",
        transformOrigin: "top left",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
      },
      t.formControl && { position: "absolute", left: 0, top: 0, transform: "translate(0, 20px) scale(1)" },
      t.size === "small" && { transform: "translate(0, 17px) scale(1)" },
      t.shrink && { transform: "translate(0, -1.5px) scale(0.75)", transformOrigin: "top left", maxWidth: "133%" },
      !t.disableAnimation && {
        transition: e.transitions.create(["color", "transform", "max-width"], {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
      },
      t.variant === "filled" &&
        k(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(12px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(12px, 13px) scale(1)" },
          t.shrink &&
            k(
              {
                userSelect: "none",
                pointerEvents: "auto",
                transform: "translate(12px, 7px) scale(0.75)",
                maxWidth: "calc(133% - 24px)",
              },
              t.size === "small" && { transform: "translate(12px, 4px) scale(0.75)" }
            )
        ),
      t.variant === "outlined" &&
        k(
          {
            zIndex: 1,
            pointerEvents: "none",
            transform: "translate(14px, 16px) scale(1)",
            maxWidth: "calc(100% - 24px)",
          },
          t.size === "small" && { transform: "translate(14px, 9px) scale(1)" },
          t.shrink && {
            userSelect: "none",
            pointerEvents: "auto",
            maxWidth: "calc(133% - 32px)",
            transform: "translate(14px, -9px) scale(0.75)",
          }
        )
    )
  ),
  MT = E.forwardRef(function (t, n) {
    const r = Ge({ name: "MuiInputLabel", props: t }),
      { disableAnimation: o = !1, shrink: i, className: s } = r,
      a = V(r, OT),
      l = Do();
    let u = i;
    typeof u > "u" && l && (u = l.filled || l.focused || l.adornedStart);
    const d = $o({ props: r, muiFormControl: l, states: ["size", "variant", "required", "focused"] }),
      p = k({}, r, {
        disableAnimation: o,
        formControl: l,
        shrink: u,
        size: d.size,
        variant: d.variant,
        required: d.required,
        focused: d.focused,
      }),
      h = NT(p);
    return P.jsx(AT, k({ "data-shrink": u, ownerState: p, ref: n, className: xe(h.root, s) }, a, { classes: h }));
  }),
  LT = MT;
function $T(e) {
  return Le("MuiFormControl", e);
}
Ue("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const DT = [
    "children",
    "className",
    "color",
    "component",
    "disabled",
    "error",
    "focused",
    "fullWidth",
    "hiddenLabel",
    "margin",
    "required",
    "size",
    "variant",
  ],
  FT = (e) => {
    const { classes: t, margin: n, fullWidth: r } = e,
      o = { root: ["root", n !== "none" && `margin${Re(n)}`, r && "fullWidth"] };
    return Fe(o, $T, t);
  },
  zT = G("div", {
    name: "MuiFormControl",
    slot: "Root",
    overridesResolver: ({ ownerState: e }, t) => k({}, t.root, t[`margin${Re(e.margin)}`], e.fullWidth && t.fullWidth),
  })(({ ownerState: e }) =>
    k(
      {
        display: "inline-flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        padding: 0,
        margin: 0,
        border: 0,
        verticalAlign: "top",
      },
      e.margin === "normal" && { marginTop: 16, marginBottom: 8 },
      e.margin === "dense" && { marginTop: 8, marginBottom: 4 },
      e.fullWidth && { width: "100%" }
    )
  ),
  UT = E.forwardRef(function (t, n) {
    const r = Ge({ props: t, name: "MuiFormControl" }),
      {
        children: o,
        className: i,
        color: s = "primary",
        component: a = "div",
        disabled: l = !1,
        error: u = !1,
        focused: d,
        fullWidth: p = !1,
        hiddenLabel: h = !1,
        margin: y = "none",
        required: g = !1,
        size: v = "medium",
        variant: x = "outlined",
      } = r,
      m = V(r, DT),
      c = k({}, r, {
        color: s,
        component: a,
        disabled: l,
        error: u,
        fullWidth: p,
        hiddenLabel: h,
        margin: y,
        required: g,
        size: v,
        variant: x,
      }),
      f = FT(c),
      [w, S] = E.useState(() => {
        let F = !1;
        return (
          o &&
            E.Children.forEach(o, (L) => {
              if (!wu(L, ["Input", "Select"])) return;
              const $ = wu(L, ["Select"]) ? L.props.input : L;
              $ && Kb($.props) && (F = !0);
            }),
          F
        );
      }),
      [C, _] = E.useState(() => {
        let F = !1;
        return (
          o &&
            E.Children.forEach(o, (L) => {
              wu(L, ["Input", "Select"]) && (Pa(L.props, !0) || Pa(L.props.inputProps, !0)) && (F = !0);
            }),
          F
        );
      }),
      [b, O] = E.useState(!1);
    l && b && O(!1);
    const R = d !== void 0 && !l ? d : b;
    let U;
    const j = E.useMemo(
      () => ({
        adornedStart: w,
        setAdornedStart: S,
        color: s,
        disabled: l,
        error: u,
        filled: C,
        focused: R,
        fullWidth: p,
        hiddenLabel: h,
        size: v,
        onBlur: () => {
          O(!1);
        },
        onEmpty: () => {
          _(!1);
        },
        onFilled: () => {
          _(!0);
        },
        onFocus: () => {
          O(!0);
        },
        registerEffect: U,
        required: g,
        variant: x,
      }),
      [w, s, l, u, C, R, p, h, U, g, v, x]
    );
    return P.jsx(lf.Provider, {
      value: j,
      children: P.jsx(zT, k({ as: a, ownerState: c, className: xe(f.root, i), ref: n }, m, { children: o })),
    });
  }),
  jT = UT;
function BT(e) {
  return Le("MuiFormHelperText", e);
}
const WT = Ue("MuiFormHelperText", [
    "root",
    "error",
    "disabled",
    "sizeSmall",
    "sizeMedium",
    "contained",
    "focused",
    "filled",
    "required",
  ]),
  Mh = WT;
var Lh;
const HT = [
    "children",
    "className",
    "component",
    "disabled",
    "error",
    "filled",
    "focused",
    "margin",
    "required",
    "variant",
  ],
  VT = (e) => {
    const { classes: t, contained: n, size: r, disabled: o, error: i, filled: s, focused: a, required: l } = e,
      u = {
        root: [
          "root",
          o && "disabled",
          i && "error",
          r && `size${Re(r)}`,
          n && "contained",
          a && "focused",
          s && "filled",
          l && "required",
        ],
      };
    return Fe(u, BT, t);
  },
  KT = G("p", {
    name: "MuiFormHelperText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.size && t[`size${Re(n.size)}`], n.contained && t.contained, n.filled && t.filled];
    },
  })(({ theme: e, ownerState: t }) =>
    k(
      { color: (e.vars || e).palette.text.secondary },
      e.typography.caption,
      {
        textAlign: "left",
        marginTop: 3,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        [`&.${Mh.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        [`&.${Mh.error}`]: { color: (e.vars || e).palette.error.main },
      },
      t.size === "small" && { marginTop: 4 },
      t.contained && { marginLeft: 14, marginRight: 14 }
    )
  ),
  GT = E.forwardRef(function (t, n) {
    const r = Ge({ props: t, name: "MuiFormHelperText" }),
      { children: o, className: i, component: s = "p" } = r,
      a = V(r, HT),
      l = Do(),
      u = $o({
        props: r,
        muiFormControl: l,
        states: ["variant", "size", "disabled", "error", "filled", "focused", "required"],
      }),
      d = k({}, r, {
        component: s,
        contained: u.variant === "filled" || u.variant === "outlined",
        variant: u.variant,
        size: u.size,
        disabled: u.disabled,
        error: u.error,
        filled: u.filled,
        focused: u.focused,
        required: u.required,
      }),
      p = VT(d);
    return P.jsx(
      KT,
      k({ as: s, ownerState: d, className: xe(p.root, i), ref: n }, a, {
        children: o === " " ? Lh || (Lh = P.jsx("span", { className: "notranslate", children: "​" })) : o,
      })
    );
  }),
  qT = GT,
  QT = E.createContext({}),
  YT = QT;
function XT(e) {
  return Le("MuiList", e);
}
Ue("MuiList", ["root", "padding", "dense", "subheader"]);
const JT = ["children", "className", "component", "dense", "disablePadding", "subheader"],
  ZT = (e) => {
    const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
    return Fe({ root: ["root", !n && "padding", r && "dense", o && "subheader"] }, XT, t);
  },
  eP = G("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader];
    },
  })(({ ownerState: e }) =>
    k(
      { listStyle: "none", margin: 0, padding: 0, position: "relative" },
      !e.disablePadding && { paddingTop: 8, paddingBottom: 8 },
      e.subheader && { paddingTop: 0 }
    )
  ),
  tP = E.forwardRef(function (t, n) {
    const r = Ge({ props: t, name: "MuiList" }),
      { children: o, className: i, component: s = "ul", dense: a = !1, disablePadding: l = !1, subheader: u } = r,
      d = V(r, JT),
      p = E.useMemo(() => ({ dense: a }), [a]),
      h = k({}, r, { component: s, dense: a, disablePadding: l }),
      y = ZT(h);
    return P.jsx(YT.Provider, {
      value: p,
      children: P.jsxs(eP, k({ as: s, className: xe(y.root, i), ref: n, ownerState: h }, d, { children: [u, o] })),
    });
  }),
  nP = tP,
  rP = [
    "actions",
    "autoFocus",
    "autoFocusItem",
    "children",
    "className",
    "disabledItemsFocusable",
    "disableListWrap",
    "onKeyDown",
    "variant",
  ];
function _u(e, t, n) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : n ? null : e.firstChild;
}
function $h(e, t, n) {
  return e === t
    ? n
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
    ? t.previousElementSibling
    : n
    ? null
    : e.lastChild;
}
function Y0(e, t) {
  if (t === void 0) return !0;
  let n = e.innerText;
  return (
    n === void 0 && (n = e.textContent),
    (n = n.trim().toLowerCase()),
    n.length === 0 ? !1 : t.repeating ? n[0] === t.keys[0] : n.indexOf(t.keys.join("")) === 0
  );
}
function Qo(e, t, n, r, o, i) {
  let s = !1,
    a = o(e, t, t ? n : !1);
  for (; a; ) {
    if (a === e.firstChild) {
      if (s) return !1;
      s = !0;
    }
    const l = r ? !1 : a.disabled || a.getAttribute("aria-disabled") === "true";
    if (!a.hasAttribute("tabindex") || !Y0(a, i) || l) a = o(e, a, n);
    else return a.focus(), !0;
  }
  return !1;
}
const oP = E.forwardRef(function (t, n) {
    const {
        actions: r,
        autoFocus: o = !1,
        autoFocusItem: i = !1,
        children: s,
        className: a,
        disabledItemsFocusable: l = !1,
        disableListWrap: u = !1,
        onKeyDown: d,
        variant: p = "selectedMenu",
      } = t,
      h = V(t, rP),
      y = E.useRef(null),
      g = E.useRef({ keys: [], repeating: !0, previousKeyMatched: !0, lastTime: null });
    Ir(() => {
      o && y.current.focus();
    }, [o]),
      E.useImperativeHandle(
        r,
        () => ({
          adjustStyleForScrollbar: (f, { direction: w }) => {
            const S = !y.current.style.width;
            if (f.clientHeight < y.current.clientHeight && S) {
              const C = `${W0(vt(f))}px`;
              (y.current.style[w === "rtl" ? "paddingLeft" : "paddingRight"] = C),
                (y.current.style.width = `calc(100% + ${C})`);
            }
            return y.current;
          },
        }),
        []
      );
    const v = (f) => {
        const w = y.current,
          S = f.key,
          C = vt(w).activeElement;
        if (S === "ArrowDown") f.preventDefault(), Qo(w, C, u, l, _u);
        else if (S === "ArrowUp") f.preventDefault(), Qo(w, C, u, l, $h);
        else if (S === "Home") f.preventDefault(), Qo(w, null, u, l, _u);
        else if (S === "End") f.preventDefault(), Qo(w, null, u, l, $h);
        else if (S.length === 1) {
          const _ = g.current,
            b = S.toLowerCase(),
            O = performance.now();
          _.keys.length > 0 &&
            (O - _.lastTime > 500
              ? ((_.keys = []), (_.repeating = !0), (_.previousKeyMatched = !0))
              : _.repeating && b !== _.keys[0] && (_.repeating = !1)),
            (_.lastTime = O),
            _.keys.push(b);
          const R = C && !_.repeating && Y0(C, _);
          _.previousKeyMatched && (R || Qo(w, C, !1, l, _u, _)) ? f.preventDefault() : (_.previousKeyMatched = !1);
        }
        d && d(f);
      },
      x = Lt(y, n);
    let m = -1;
    E.Children.forEach(s, (f, w) => {
      if (!E.isValidElement(f)) {
        m === w && ((m += 1), m >= s.length && (m = -1));
        return;
      }
      f.props.disabled || (((p === "selectedMenu" && f.props.selected) || m === -1) && (m = w)),
        m === w &&
          (f.props.disabled || f.props.muiSkipListHighlight || f.type.muiSkipListHighlight) &&
          ((m += 1), m >= s.length && (m = -1));
    });
    const c = E.Children.map(s, (f, w) => {
      if (w === m) {
        const S = {};
        return (
          i && (S.autoFocus = !0),
          f.props.tabIndex === void 0 && p === "selectedMenu" && (S.tabIndex = 0),
          E.cloneElement(f, S)
        );
      }
      return f;
    });
    return P.jsx(nP, k({ role: "menu", ref: x, className: a, onKeyDown: v, tabIndex: o ? 0 : -1 }, h, { children: c }));
  }),
  iP = oP;
function Nc(e, t) {
  return (
    (Nc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Nc(e, t)
  );
}
function sP(e, t) {
  (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Nc(e, t);
}
const Dh = { disabled: !1 },
  X0 = dr.createContext(null);
var aP = function (t) {
    return t.scrollTop;
  },
  ri = "unmounted",
  ur = "exited",
  cr = "entering",
  Wr = "entered",
  Ac = "exiting",
  En = (function (e) {
    sP(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((l = ur), (i.appearStatus = cr))
            : (l = Wr)
          : r.unmountOnExit || r.mountOnEnter
          ? (l = ri)
          : (l = ur),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var s = o.in;
      return s && i.status === ri ? { status: ur } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var s = this.state.status;
          this.props.in ? s !== cr && s !== Wr && (i = cr) : (s === cr || s === Wr) && (i = Ac);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          s,
          a;
        return (
          (i = s = a = o),
          o != null && typeof o != "number" && ((i = o.exit), (s = o.enter), (a = o.appear !== void 0 ? o.appear : s)),
          { exit: i, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === cr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef ? this.props.nodeRef.current : Es.findDOMNode(this);
              s && aP(s);
            }
            this.performEnter(o);
          } else this.performExit();
        else this.props.unmountOnExit && this.state.status === ur && this.setState({ status: ri });
      }),
      (n.performEnter = function (o) {
        var i = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          l = this.props.nodeRef ? [a] : [Es.findDOMNode(this), a],
          u = l[0],
          d = l[1],
          p = this.getTimeouts(),
          h = a ? p.appear : p.enter;
        if ((!o && !s) || Dh.disabled) {
          this.safeSetState({ status: Wr }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, d),
          this.safeSetState({ status: cr }, function () {
            i.props.onEntering(u, d),
              i.onTransitionEnd(h, function () {
                i.safeSetState({ status: Wr }, function () {
                  i.props.onEntered(u, d);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Es.findDOMNode(this);
        if (!i || Dh.disabled) {
          this.safeSetState({ status: ur }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Ac }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(s.exit, function () {
                o.safeSetState({ status: ur }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var s = this.props.nodeRef ? this.props.nodeRef.current : Es.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback],
            u = l[0],
            d = l[1];
          this.props.addEndListener(u, d);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === ri) return null;
        var i = this.props,
          s = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = V(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return dr.createElement(
          X0.Provider,
          { value: null },
          typeof s == "function" ? s(o, a) : dr.cloneElement(dr.Children.only(s), a)
        );
      }),
      t
    );
  })(dr.Component);
En.contextType = X0;
En.propTypes = {};
function Br() {}
En.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Br,
  onEntering: Br,
  onEntered: Br,
  onExit: Br,
  onExiting: Br,
  onExited: Br,
};
En.UNMOUNTED = ri;
En.EXITED = ur;
En.ENTERING = cr;
En.ENTERED = Wr;
En.EXITING = Ac;
const J0 = En;
function Z0() {
  const e = sf(Pl);
  return e[Rl] || e;
}
const ey = (e) => e.scrollTop;
function Ra(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: s = {} } = e;
  return {
    duration: (n = s.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: s.transitionDelay,
  };
}
const lP = [
  "addEndListener",
  "appear",
  "children",
  "easing",
  "in",
  "onEnter",
  "onEntered",
  "onEntering",
  "onExit",
  "onExited",
  "onExiting",
  "style",
  "timeout",
  "TransitionComponent",
];
function Mc(e) {
  return `scale(${e}, ${e ** 2})`;
}
const uP = { entering: { opacity: 1, transform: Mc(1) }, entered: { opacity: 1, transform: "none" } },
  Eu =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  ty = E.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: s,
        in: a,
        onEnter: l,
        onEntered: u,
        onEntering: d,
        onExit: p,
        onExited: h,
        onExiting: y,
        style: g,
        timeout: v = "auto",
        TransitionComponent: x = J0,
      } = t,
      m = V(t, lP),
      c = gb(),
      f = E.useRef(),
      w = Z0(),
      S = E.useRef(null),
      C = Lt(S, i.ref, n),
      _ = ($) => (D) => {
        if ($) {
          const z = S.current;
          D === void 0 ? $(z) : $(z, D);
        }
      },
      b = _(d),
      O = _(($, D) => {
        ey($);
        const { duration: z, delay: I, easing: N } = Ra({ style: g, timeout: v, easing: s }, { mode: "enter" });
        let M;
        v === "auto" ? ((M = w.transitions.getAutoHeightDuration($.clientHeight)), (f.current = M)) : (M = z),
          ($.style.transition = [
            w.transitions.create("opacity", { duration: M, delay: I }),
            w.transitions.create("transform", { duration: Eu ? M : M * 0.666, delay: I, easing: N }),
          ].join(",")),
          l && l($, D);
      }),
      R = _(u),
      U = _(y),
      j = _(($) => {
        const { duration: D, delay: z, easing: I } = Ra({ style: g, timeout: v, easing: s }, { mode: "exit" });
        let N;
        v === "auto" ? ((N = w.transitions.getAutoHeightDuration($.clientHeight)), (f.current = N)) : (N = D),
          ($.style.transition = [
            w.transitions.create("opacity", { duration: N, delay: z }),
            w.transitions.create("transform", {
              duration: Eu ? N : N * 0.666,
              delay: Eu ? z : z || N * 0.333,
              easing: I,
            }),
          ].join(",")),
          ($.style.opacity = 0),
          ($.style.transform = Mc(0.75)),
          p && p($);
      }),
      F = _(h),
      L = ($) => {
        v === "auto" && c.start(f.current || 0, $), r && r(S.current, $);
      };
    return P.jsx(
      x,
      k(
        {
          appear: o,
          in: a,
          nodeRef: S,
          onEnter: O,
          onEntered: R,
          onEntering: b,
          onExit: j,
          onExited: F,
          onExiting: U,
          addEndListener: L,
          timeout: v === "auto" ? null : v,
        },
        m,
        {
          children: ($, D) =>
            E.cloneElement(
              i,
              k(
                {
                  style: k(
                    { opacity: 0, transform: Mc(0.75), visibility: $ === "exited" && !a ? "hidden" : void 0 },
                    uP[$],
                    g,
                    i.props.style
                  ),
                  ref: C,
                },
                D
              )
            ),
        }
      )
    );
  });
ty.muiSupportAuto = !0;
const cP = ty,
  dP = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  fP = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  pP = E.forwardRef(function (t, n) {
    const r = Z0(),
      o = { enter: r.transitions.duration.enteringScreen, exit: r.transitions.duration.leavingScreen },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: d,
        onEntered: p,
        onEntering: h,
        onExit: y,
        onExited: g,
        onExiting: v,
        style: x,
        timeout: m = o,
        TransitionComponent: c = J0,
      } = t,
      f = V(t, dP),
      w = E.useRef(null),
      S = Lt(w, a.ref, n),
      C = (L) => ($) => {
        if (L) {
          const D = w.current;
          $ === void 0 ? L(D) : L(D, $);
        }
      },
      _ = C(h),
      b = C((L, $) => {
        ey(L);
        const D = Ra({ style: x, timeout: m, easing: l }, { mode: "enter" });
        (L.style.webkitTransition = r.transitions.create("opacity", D)),
          (L.style.transition = r.transitions.create("opacity", D)),
          d && d(L, $);
      }),
      O = C(p),
      R = C(v),
      U = C((L) => {
        const $ = Ra({ style: x, timeout: m, easing: l }, { mode: "exit" });
        (L.style.webkitTransition = r.transitions.create("opacity", $)),
          (L.style.transition = r.transitions.create("opacity", $)),
          y && y(L);
      }),
      j = C(g),
      F = (L) => {
        i && i(w.current, L);
      };
    return P.jsx(
      c,
      k(
        {
          appear: s,
          in: u,
          nodeRef: w,
          onEnter: b,
          onEntered: O,
          onEntering: _,
          onExit: U,
          onExited: j,
          onExiting: R,
          addEndListener: F,
          timeout: m,
        },
        f,
        {
          children: (L, $) =>
            E.cloneElement(
              a,
              k(
                {
                  style: k(
                    { opacity: 0, visibility: L === "exited" && !u ? "hidden" : void 0 },
                    fP[L],
                    x,
                    a.props.style
                  ),
                  ref: S,
                },
                $
              )
            ),
        }
      )
    );
  }),
  hP = pP;
function mP(e) {
  return Le("MuiBackdrop", e);
}
Ue("MuiBackdrop", ["root", "invisible"]);
const gP = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  vP = (e) => {
    const { classes: t, invisible: n } = e;
    return Fe({ root: ["root", n && "invisible"] }, mP, t);
  },
  yP = G("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.invisible && t.invisible];
    },
  })(({ ownerState: e }) =>
    k(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      e.invisible && { backgroundColor: "transparent" }
    )
  ),
  wP = E.forwardRef(function (t, n) {
    var r, o, i;
    const s = Ge({ props: t, name: "MuiBackdrop" }),
      {
        children: a,
        className: l,
        component: u = "div",
        components: d = {},
        componentsProps: p = {},
        invisible: h = !1,
        open: y,
        slotProps: g = {},
        slots: v = {},
        TransitionComponent: x = hP,
        transitionDuration: m,
      } = s,
      c = V(s, gP),
      f = k({}, s, { component: u, invisible: h }),
      w = vP(f),
      S = (r = g.root) != null ? r : p.root;
    return P.jsx(
      x,
      k({ in: y, timeout: m }, c, {
        children: P.jsx(
          yP,
          k({ "aria-hidden": !0 }, S, {
            as: (o = (i = v.root) != null ? i : d.Root) != null ? o : u,
            className: xe(w.root, l, S == null ? void 0 : S.className),
            ownerState: k({}, f, S == null ? void 0 : S.ownerState),
            classes: w,
            ref: n,
            children: a,
          })
        ),
      })
    );
  }),
  SP = wP;
function _P(e) {
  return Le("MuiModal", e);
}
Ue("MuiModal", ["root", "hidden", "backdrop"]);
const EP = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  kP = (e) => {
    const { open: t, exited: n, classes: r } = e;
    return Fe({ root: ["root", !t && n && "hidden"], backdrop: ["backdrop"] }, _P, r);
  },
  CP = G("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.open && n.exited && t.hidden];
    },
  })(({ theme: e, ownerState: t }) =>
    k(
      { position: "fixed", zIndex: (e.vars || e).zIndex.modal, right: 0, bottom: 0, top: 0, left: 0 },
      !t.open && t.exited && { visibility: "hidden" }
    )
  ),
  xP = G(SP, { name: "MuiModal", slot: "Backdrop", overridesResolver: (e, t) => t.backdrop })({ zIndex: -1 }),
  IP = E.forwardRef(function (t, n) {
    var r, o, i, s, a, l;
    const u = Ge({ name: "MuiModal", props: t }),
      {
        BackdropComponent: d = xP,
        BackdropProps: p,
        className: h,
        closeAfterTransition: y = !1,
        children: g,
        container: v,
        component: x,
        components: m = {},
        componentsProps: c = {},
        disableAutoFocus: f = !1,
        disableEnforceFocus: w = !1,
        disableEscapeKeyDown: S = !1,
        disablePortal: C = !1,
        disableRestoreFocus: _ = !1,
        disableScrollLock: b = !1,
        hideBackdrop: O = !1,
        keepMounted: R = !1,
        onBackdropClick: U,
        open: j,
        slotProps: F,
        slots: L,
      } = u,
      $ = V(u, EP),
      D = k({}, u, {
        closeAfterTransition: y,
        disableAutoFocus: f,
        disableEnforceFocus: w,
        disableEscapeKeyDown: S,
        disablePortal: C,
        disableRestoreFocus: _,
        disableScrollLock: b,
        hideBackdrop: O,
        keepMounted: R,
      }),
      {
        getRootProps: z,
        getBackdropProps: I,
        getTransitionProps: N,
        portalRef: M,
        isTopModal: Q,
        exited: H,
        hasTransition: le,
      } = $b(k({}, D, { rootRef: n })),
      q = k({}, D, { exited: H }),
      me = kP(q),
      re = {};
    if ((g.props.tabIndex === void 0 && (re.tabIndex = "-1"), le)) {
      const { onEnter: Y, onExited: se } = N();
      (re.onEnter = Y), (re.onExited = se);
    }
    const je = (r = (o = L == null ? void 0 : L.root) != null ? o : m.Root) != null ? r : CP,
      ct = (i = (s = L == null ? void 0 : L.backdrop) != null ? s : m.Backdrop) != null ? i : d,
      $t = (a = F == null ? void 0 : F.root) != null ? a : c.root,
      Et = (l = F == null ? void 0 : F.backdrop) != null ? l : c.backdrop,
      oe = Io({
        elementType: je,
        externalSlotProps: $t,
        externalForwardedProps: $,
        getSlotProps: z,
        additionalProps: { ref: n, as: x },
        ownerState: q,
        className: xe(
          h,
          $t == null ? void 0 : $t.className,
          me == null ? void 0 : me.root,
          !q.open && q.exited && (me == null ? void 0 : me.hidden)
        ),
      }),
      ke = Io({
        elementType: ct,
        externalSlotProps: Et,
        additionalProps: p,
        getSlotProps: (Y) =>
          I(
            k({}, Y, {
              onClick: (se) => {
                U && U(se), Y != null && Y.onClick && Y.onClick(se);
              },
            })
          ),
        className: xe(
          Et == null ? void 0 : Et.className,
          p == null ? void 0 : p.className,
          me == null ? void 0 : me.backdrop
        ),
        ownerState: q,
      });
    return !R && !j && (!le || H)
      ? null
      : P.jsx(bb, {
          ref: M,
          container: v,
          disablePortal: C,
          children: P.jsxs(
            je,
            k({}, oe, {
              children: [
                !O && d ? P.jsx(ct, k({}, ke)) : null,
                P.jsx(xb, {
                  disableEnforceFocus: w,
                  disableAutoFocus: f,
                  disableRestoreFocus: _,
                  isEnabled: Q,
                  open: j,
                  children: E.cloneElement(g, re),
                }),
              ],
            })
          ),
        });
  }),
  bP = IP,
  Fh = (e) => {
    let t;
    return e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2), (t / 100).toFixed(2);
  };
function TP(e) {
  return Le("MuiPaper", e);
}
Ue("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const PP = ["className", "component", "elevation", "square", "variant"],
  RP = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = { root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`] };
    return Fe(i, TP, o);
  },
  OP = G("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return k(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && { border: `1px solid ${(e.vars || e).palette.divider}` },
      t.variant === "elevation" &&
        k(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${yh("#fff", Fh(t.elevation))}, ${yh("#fff", Fh(t.elevation))})`,
            },
          e.vars && { backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation] }
        )
    );
  }),
  NP = E.forwardRef(function (t, n) {
    const r = Ge({ props: t, name: "MuiPaper" }),
      { className: o, component: i = "div", elevation: s = 1, square: a = !1, variant: l = "elevation" } = r,
      u = V(r, PP),
      d = k({}, r, { component: i, elevation: s, square: a, variant: l }),
      p = RP(d);
    return P.jsx(OP, k({ as: i, ownerState: d, className: xe(p.root, o), ref: n }, u));
  }),
  AP = NP;
function MP(e) {
  return Le("MuiPopover", e);
}
Ue("MuiPopover", ["root", "paper"]);
const LP = ["onEntering"],
  $P = [
    "action",
    "anchorEl",
    "anchorOrigin",
    "anchorPosition",
    "anchorReference",
    "children",
    "className",
    "container",
    "elevation",
    "marginThreshold",
    "open",
    "PaperProps",
    "slots",
    "slotProps",
    "transformOrigin",
    "TransitionComponent",
    "transitionDuration",
    "TransitionProps",
    "disableScrollLock",
  ],
  DP = ["slotProps"];
function zh(e, t) {
  let n = 0;
  return typeof t == "number" ? (n = t) : t === "center" ? (n = e.height / 2) : t === "bottom" && (n = e.height), n;
}
function Uh(e, t) {
  let n = 0;
  return typeof t == "number" ? (n = t) : t === "center" ? (n = e.width / 2) : t === "right" && (n = e.width), n;
}
function jh(e) {
  return [e.horizontal, e.vertical].map((t) => (typeof t == "number" ? `${t}px` : t)).join(" ");
}
function ku(e) {
  return typeof e == "function" ? e() : e;
}
const FP = (e) => {
    const { classes: t } = e;
    return Fe({ root: ["root"], paper: ["paper"] }, MP, t);
  },
  zP = G(bP, { name: "MuiPopover", slot: "Root", overridesResolver: (e, t) => t.root })({}),
  ny = G(AP, { name: "MuiPopover", slot: "Paper", overridesResolver: (e, t) => t.paper })({
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    minWidth: 16,
    minHeight: 16,
    maxWidth: "calc(100% - 32px)",
    maxHeight: "calc(100% - 32px)",
    outline: 0,
  }),
  UP = E.forwardRef(function (t, n) {
    var r, o, i;
    const s = Ge({ props: t, name: "MuiPopover" }),
      {
        action: a,
        anchorEl: l,
        anchorOrigin: u = { vertical: "top", horizontal: "left" },
        anchorPosition: d,
        anchorReference: p = "anchorEl",
        children: h,
        className: y,
        container: g,
        elevation: v = 8,
        marginThreshold: x = 16,
        open: m,
        PaperProps: c = {},
        slots: f,
        slotProps: w,
        transformOrigin: S = { vertical: "top", horizontal: "left" },
        TransitionComponent: C = cP,
        transitionDuration: _ = "auto",
        TransitionProps: { onEntering: b } = {},
        disableScrollLock: O = !1,
      } = s,
      R = V(s.TransitionProps, LP),
      U = V(s, $P),
      j = (r = w == null ? void 0 : w.paper) != null ? r : c,
      F = E.useRef(),
      L = Lt(F, j.ref),
      $ = k({}, s, {
        anchorOrigin: u,
        anchorReference: p,
        elevation: v,
        marginThreshold: x,
        externalPaperSlotProps: j,
        transformOrigin: S,
        TransitionComponent: C,
        transitionDuration: _,
        TransitionProps: R,
      }),
      D = FP($),
      z = E.useCallback(() => {
        if (p === "anchorPosition") return d;
        const Y = ku(l),
          we = (Y && Y.nodeType === 1 ? Y : vt(F.current).body).getBoundingClientRect();
        return { top: we.top + zh(we, u.vertical), left: we.left + Uh(we, u.horizontal) };
      }, [l, u.horizontal, u.vertical, d, p]),
      I = E.useCallback(
        (Y) => ({ vertical: zh(Y, S.vertical), horizontal: Uh(Y, S.horizontal) }),
        [S.horizontal, S.vertical]
      ),
      N = E.useCallback(
        (Y) => {
          const se = { width: Y.offsetWidth, height: Y.offsetHeight },
            we = I(se);
          if (p === "none") return { top: null, left: null, transformOrigin: jh(we) };
          const Or = z();
          let Vt = Or.top - we.vertical,
            Kt = Or.left - we.horizontal;
          const on = Vt + se.height,
            kn = Kt + se.width,
            Oe = xr(ku(l)),
            rr = Oe.innerHeight - x,
            kt = Oe.innerWidth - x;
          if (x !== null && Vt < x) {
            const Ne = Vt - x;
            (Vt -= Ne), (we.vertical += Ne);
          } else if (x !== null && on > rr) {
            const Ne = on - rr;
            (Vt -= Ne), (we.vertical += Ne);
          }
          if (x !== null && Kt < x) {
            const Ne = Kt - x;
            (Kt -= Ne), (we.horizontal += Ne);
          } else if (kn > kt) {
            const Ne = kn - kt;
            (Kt -= Ne), (we.horizontal += Ne);
          }
          return { top: `${Math.round(Vt)}px`, left: `${Math.round(Kt)}px`, transformOrigin: jh(we) };
        },
        [l, p, z, I, x]
      ),
      [M, Q] = E.useState(m),
      H = E.useCallback(() => {
        const Y = F.current;
        if (!Y) return;
        const se = N(Y);
        se.top !== null && (Y.style.top = se.top),
          se.left !== null && (Y.style.left = se.left),
          (Y.style.transformOrigin = se.transformOrigin),
          Q(!0);
      }, [N]);
    E.useEffect(
      () => (O && window.addEventListener("scroll", H), () => window.removeEventListener("scroll", H)),
      [l, O, H]
    );
    const le = (Y, se) => {
        b && b(Y, se), H();
      },
      q = () => {
        Q(!1);
      };
    E.useEffect(() => {
      m && H();
    }),
      E.useImperativeHandle(
        a,
        () =>
          m
            ? {
                updatePosition: () => {
                  H();
                },
              }
            : null,
        [m, H]
      ),
      E.useEffect(() => {
        if (!m) return;
        const Y = B0(() => {
            H();
          }),
          se = xr(l);
        return (
          se.addEventListener("resize", Y),
          () => {
            Y.clear(), se.removeEventListener("resize", Y);
          }
        );
      }, [l, m, H]);
    let me = _;
    _ === "auto" && !C.muiSupportAuto && (me = void 0);
    const re = g || (l ? vt(ku(l)).body : void 0),
      je = (o = f == null ? void 0 : f.root) != null ? o : zP,
      ct = (i = f == null ? void 0 : f.paper) != null ? i : ny,
      $t = Io({
        elementType: ct,
        externalSlotProps: k({}, j, { style: M ? j.style : k({}, j.style, { opacity: 0 }) }),
        additionalProps: { elevation: v, ref: L },
        ownerState: $,
        className: xe(D.paper, j == null ? void 0 : j.className),
      }),
      Et = Io({
        elementType: je,
        externalSlotProps: (w == null ? void 0 : w.root) || {},
        externalForwardedProps: U,
        additionalProps: { ref: n, slotProps: { backdrop: { invisible: !0 } }, container: re, open: m },
        ownerState: $,
        className: xe(D.root, y),
      }),
      { slotProps: oe } = Et,
      ke = V(Et, DP);
    return P.jsx(
      je,
      k({}, ke, !Ta(je) && { slotProps: oe, disableScrollLock: O }, {
        children: P.jsx(
          C,
          k({ appear: !0, in: m, onEntering: le, onExited: q, timeout: me }, R, {
            children: P.jsx(ct, k({}, $t, { children: h })),
          })
        ),
      })
    );
  }),
  jP = UP;
function BP(e) {
  return Le("MuiMenu", e);
}
Ue("MuiMenu", ["root", "paper", "list"]);
const WP = ["onEntering"],
  HP = [
    "autoFocus",
    "children",
    "className",
    "disableAutoFocusItem",
    "MenuListProps",
    "onClose",
    "open",
    "PaperProps",
    "PopoverClasses",
    "transitionDuration",
    "TransitionProps",
    "variant",
    "slots",
    "slotProps",
  ],
  VP = { vertical: "top", horizontal: "right" },
  KP = { vertical: "top", horizontal: "left" },
  GP = (e) => {
    const { classes: t } = e;
    return Fe({ root: ["root"], paper: ["paper"], list: ["list"] }, BP, t);
  },
  qP = G(jP, {
    shouldForwardProp: (e) => rn(e) || e === "classes",
    name: "MuiMenu",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  QP = G(ny, { name: "MuiMenu", slot: "Paper", overridesResolver: (e, t) => t.paper })({
    maxHeight: "calc(100% - 96px)",
    WebkitOverflowScrolling: "touch",
  }),
  YP = G(iP, { name: "MuiMenu", slot: "List", overridesResolver: (e, t) => t.list })({ outline: 0 }),
  XP = E.forwardRef(function (t, n) {
    var r, o;
    const i = Ge({ props: t, name: "MuiMenu" }),
      {
        autoFocus: s = !0,
        children: a,
        className: l,
        disableAutoFocusItem: u = !1,
        MenuListProps: d = {},
        onClose: p,
        open: h,
        PaperProps: y = {},
        PopoverClasses: g,
        transitionDuration: v = "auto",
        TransitionProps: { onEntering: x } = {},
        variant: m = "selectedMenu",
        slots: c = {},
        slotProps: f = {},
      } = i,
      w = V(i.TransitionProps, WP),
      S = V(i, HP),
      C = Hb(),
      _ = k({}, i, {
        autoFocus: s,
        disableAutoFocusItem: u,
        MenuListProps: d,
        onEntering: x,
        PaperProps: y,
        transitionDuration: v,
        TransitionProps: w,
        variant: m,
      }),
      b = GP(_),
      O = s && !u && h,
      R = E.useRef(null),
      U = (I, N) => {
        R.current && R.current.adjustStyleForScrollbar(I, { direction: C ? "rtl" : "ltr" }), x && x(I, N);
      },
      j = (I) => {
        I.key === "Tab" && (I.preventDefault(), p && p(I, "tabKeyDown"));
      };
    let F = -1;
    E.Children.map(a, (I, N) => {
      E.isValidElement(I) &&
        (I.props.disabled || (((m === "selectedMenu" && I.props.selected) || F === -1) && (F = N)));
    });
    const L = (r = c.paper) != null ? r : QP,
      $ = (o = f.paper) != null ? o : y,
      D = Io({ elementType: c.root, externalSlotProps: f.root, ownerState: _, className: [b.root, l] }),
      z = Io({ elementType: L, externalSlotProps: $, ownerState: _, className: b.paper });
    return P.jsx(
      qP,
      k(
        {
          onClose: p,
          anchorOrigin: { vertical: "bottom", horizontal: C ? "right" : "left" },
          transformOrigin: C ? VP : KP,
          slots: { paper: L, root: c.root },
          slotProps: { root: D, paper: z },
          open: h,
          ref: n,
          transitionDuration: v,
          TransitionProps: k({ onEntering: U }, w),
          ownerState: _,
        },
        S,
        {
          classes: g,
          children: P.jsx(
            YP,
            k({ onKeyDown: j, actions: R, autoFocus: s && (F === -1 || u), autoFocusItem: O, variant: m }, d, {
              className: xe(b.list, d.className),
              children: a,
            })
          ),
        }
      )
    );
  }),
  JP = XP;
function ZP(e) {
  return Le("MuiNativeSelect", e);
}
const eR = Ue("MuiNativeSelect", [
    "root",
    "select",
    "multiple",
    "filled",
    "outlined",
    "standard",
    "disabled",
    "icon",
    "iconOpen",
    "iconFilled",
    "iconOutlined",
    "iconStandard",
    "nativeInput",
    "error",
  ]),
  cf = eR,
  tR = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"],
  nR = (e) => {
    const { classes: t, variant: n, disabled: r, multiple: o, open: i, error: s } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${Re(n)}`, i && "iconOpen", r && "disabled"],
      };
    return Fe(a, ZP, t);
  },
  ry = ({ ownerState: e, theme: t }) =>
    k(
      {
        MozAppearance: "none",
        WebkitAppearance: "none",
        userSelect: "none",
        borderRadius: 0,
        cursor: "pointer",
        "&:focus": k(
          {},
          t.vars
            ? { backgroundColor: `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.05)` }
            : { backgroundColor: t.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)" },
          { borderRadius: 0 }
        ),
        "&::-ms-expand": { display: "none" },
        [`&.${cf.disabled}`]: { cursor: "default" },
        "&[multiple]": { height: "auto" },
        "&:not([multiple]) option, &:not([multiple]) optgroup": {
          backgroundColor: (t.vars || t).palette.background.paper,
        },
        "&&&": { paddingRight: 24, minWidth: 16 },
      },
      e.variant === "filled" && { "&&&": { paddingRight: 32 } },
      e.variant === "outlined" && {
        borderRadius: (t.vars || t).shape.borderRadius,
        "&:focus": { borderRadius: (t.vars || t).shape.borderRadius },
        "&&&": { paddingRight: 32 },
      }
    ),
  rR = G("select", {
    name: "MuiNativeSelect",
    slot: "Select",
    shouldForwardProp: rn,
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.select, t[n.variant], n.error && t.error, { [`&.${cf.multiple}`]: t.multiple }];
    },
  })(ry),
  oy = ({ ownerState: e, theme: t }) =>
    k(
      {
        position: "absolute",
        right: 0,
        top: "calc(50% - .5em)",
        pointerEvents: "none",
        color: (t.vars || t).palette.action.active,
        [`&.${cf.disabled}`]: { color: (t.vars || t).palette.action.disabled },
      },
      e.open && { transform: "rotate(180deg)" },
      e.variant === "filled" && { right: 7 },
      e.variant === "outlined" && { right: 7 }
    ),
  oR = G("svg", {
    name: "MuiNativeSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.icon, n.variant && t[`icon${Re(n.variant)}`], n.open && t.iconOpen];
    },
  })(oy),
  iR = E.forwardRef(function (t, n) {
    const { className: r, disabled: o, error: i, IconComponent: s, inputRef: a, variant: l = "standard" } = t,
      u = V(t, tR),
      d = k({}, t, { disabled: o, variant: l, error: i }),
      p = nR(d);
    return P.jsxs(E.Fragment, {
      children: [
        P.jsx(rR, k({ ownerState: d, className: xe(p.select, r), disabled: o, ref: a || n }, u)),
        t.multiple ? null : P.jsx(oR, { as: s, ownerState: d, className: p.icon }),
      ],
    });
  }),
  sR = iR;
function aR(e) {
  return Le("MuiSelect", e);
}
const Yo = Ue("MuiSelect", [
  "root",
  "select",
  "multiple",
  "filled",
  "outlined",
  "standard",
  "disabled",
  "focused",
  "icon",
  "iconOpen",
  "iconFilled",
  "iconOutlined",
  "iconStandard",
  "nativeInput",
  "error",
]);
var Bh;
const lR = [
    "aria-describedby",
    "aria-label",
    "autoFocus",
    "autoWidth",
    "children",
    "className",
    "defaultOpen",
    "defaultValue",
    "disabled",
    "displayEmpty",
    "error",
    "IconComponent",
    "inputRef",
    "labelId",
    "MenuProps",
    "multiple",
    "name",
    "onBlur",
    "onChange",
    "onClose",
    "onFocus",
    "onOpen",
    "open",
    "readOnly",
    "renderValue",
    "SelectDisplayProps",
    "tabIndex",
    "type",
    "value",
    "variant",
  ],
  uR = G("div", {
    name: "MuiSelect",
    slot: "Select",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`&.${Yo.select}`]: t.select },
        { [`&.${Yo.select}`]: t[n.variant] },
        { [`&.${Yo.error}`]: t.error },
        { [`&.${Yo.multiple}`]: t.multiple },
      ];
    },
  })(ry, {
    [`&.${Yo.select}`]: {
      height: "auto",
      minHeight: "1.4375em",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden",
    },
  }),
  cR = G("svg", {
    name: "MuiSelect",
    slot: "Icon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.icon, n.variant && t[`icon${Re(n.variant)}`], n.open && t.iconOpen];
    },
  })(oy),
  dR = G("input", {
    shouldForwardProp: (e) => z0(e) && e !== "classes",
    name: "MuiSelect",
    slot: "NativeInput",
    overridesResolver: (e, t) => t.nativeInput,
  })({
    bottom: 0,
    left: 0,
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
    width: "100%",
    boxSizing: "border-box",
  });
function Wh(e, t) {
  return typeof t == "object" && t !== null ? e === t : String(e) === String(t);
}
function fR(e) {
  return e == null || (typeof e == "string" && !e.trim());
}
const pR = (e) => {
    const { classes: t, variant: n, disabled: r, multiple: o, open: i, error: s } = e,
      a = {
        select: ["select", n, r && "disabled", o && "multiple", s && "error"],
        icon: ["icon", `icon${Re(n)}`, i && "iconOpen", r && "disabled"],
        nativeInput: ["nativeInput"],
      };
    return Fe(a, aR, t);
  },
  hR = E.forwardRef(function (t, n) {
    var r;
    const {
        "aria-describedby": o,
        "aria-label": i,
        autoFocus: s,
        autoWidth: a,
        children: l,
        className: u,
        defaultOpen: d,
        defaultValue: p,
        disabled: h,
        displayEmpty: y,
        error: g = !1,
        IconComponent: v,
        inputRef: x,
        labelId: m,
        MenuProps: c = {},
        multiple: f,
        name: w,
        onBlur: S,
        onChange: C,
        onClose: _,
        onFocus: b,
        onOpen: O,
        open: R,
        readOnly: U,
        renderValue: j,
        SelectDisplayProps: F = {},
        tabIndex: L,
        value: $,
        variant: D = "standard",
      } = t,
      z = V(t, lR),
      [I, N] = Ih({ controlled: $, default: p, name: "Select" }),
      [M, Q] = Ih({ controlled: R, default: d, name: "Select" }),
      H = E.useRef(null),
      le = E.useRef(null),
      [q, me] = E.useState(null),
      { current: re } = E.useRef(R != null),
      [je, ct] = E.useState(),
      $t = Lt(n, x),
      Et = E.useCallback((B) => {
        (le.current = B), B && me(B);
      }, []),
      oe = q == null ? void 0 : q.parentNode;
    E.useImperativeHandle(
      $t,
      () => ({
        focus: () => {
          le.current.focus();
        },
        node: H.current,
        value: I,
      }),
      [I]
    ),
      E.useEffect(() => {
        d && M && q && !re && (ct(a ? null : oe.clientWidth), le.current.focus());
      }, [q, a]),
      E.useEffect(() => {
        s && le.current.focus();
      }, [s]),
      E.useEffect(() => {
        if (!m) return;
        const B = vt(le.current).getElementById(m);
        if (B) {
          const ue = () => {
            getSelection().isCollapsed && le.current.focus();
          };
          return (
            B.addEventListener("click", ue),
            () => {
              B.removeEventListener("click", ue);
            }
          );
        }
      }, [m]);
    const ke = (B, ue) => {
        B ? O && O(ue) : _ && _(ue), re || (ct(a ? null : oe.clientWidth), Q(B));
      },
      Y = (B) => {
        B.button === 0 && (B.preventDefault(), le.current.focus(), ke(!0, B));
      },
      se = (B) => {
        ke(!1, B);
      },
      we = E.Children.toArray(l),
      Or = (B) => {
        const ue = we.find((Be) => Be.props.value === B.target.value);
        ue !== void 0 && (N(ue.props.value), C && C(B, ue));
      },
      Vt = (B) => (ue) => {
        let Be;
        if (ue.currentTarget.hasAttribute("tabindex")) {
          if (f) {
            Be = Array.isArray(I) ? I.slice() : [];
            const Lr = I.indexOf(B.props.value);
            Lr === -1 ? Be.push(B.props.value) : Be.splice(Lr, 1);
          } else Be = B.props.value;
          if ((B.props.onClick && B.props.onClick(ue), I !== Be && (N(Be), C))) {
            const Lr = ue.nativeEvent || ue,
              pf = new Lr.constructor(Lr.type, Lr);
            Object.defineProperty(pf, "target", { writable: !0, value: { value: Be, name: w } }), C(pf, B);
          }
          f || ke(!1, ue);
        }
      },
      Kt = (B) => {
        U || ([" ", "ArrowUp", "ArrowDown", "Enter"].indexOf(B.key) !== -1 && (B.preventDefault(), ke(!0, B)));
      },
      on = q !== null && M,
      kn = (B) => {
        !on && S && (Object.defineProperty(B, "target", { writable: !0, value: { value: I, name: w } }), S(B));
      };
    delete z["aria-invalid"];
    let Oe, rr;
    const kt = [];
    let Ne = !1;
    (Pa({ value: I }) || y) && (j ? (Oe = j(I)) : (Ne = !0));
    const os = we.map((B) => {
      if (!E.isValidElement(B)) return null;
      let ue;
      if (f) {
        if (!Array.isArray(I)) throw new Error(Cr(2));
        (ue = I.some((Be) => Wh(Be, B.props.value))), ue && Ne && kt.push(B.props.children);
      } else (ue = Wh(I, B.props.value)), ue && Ne && (rr = B.props.children);
      return E.cloneElement(B, {
        "aria-selected": ue ? "true" : "false",
        onClick: Vt(B),
        onKeyUp: (Be) => {
          Be.key === " " && Be.preventDefault(), B.props.onKeyUp && B.props.onKeyUp(Be);
        },
        role: "option",
        selected: ue,
        value: void 0,
        "data-value": B.props.value,
      });
    });
    Ne &&
      (f
        ? kt.length === 0
          ? (Oe = null)
          : (Oe = kt.reduce((B, ue, Be) => (B.push(ue), Be < kt.length - 1 && B.push(", "), B), []))
        : (Oe = rr));
    let Nr = je;
    !a && re && q && (Nr = oe.clientWidth);
    let Ar;
    typeof L < "u" ? (Ar = L) : (Ar = h ? null : 0);
    const fe = F.id || (w ? `mui-component-select-${w}` : void 0),
      or = k({}, t, { variant: D, value: I, open: on, error: g }),
      Mr = pR(or),
      Ll = k({}, c.PaperProps, (r = c.slotProps) == null ? void 0 : r.paper),
      ff = Xv();
    return P.jsxs(E.Fragment, {
      children: [
        P.jsx(
          uR,
          k(
            {
              ref: Et,
              tabIndex: Ar,
              role: "combobox",
              "aria-controls": ff,
              "aria-disabled": h ? "true" : void 0,
              "aria-expanded": on ? "true" : "false",
              "aria-haspopup": "listbox",
              "aria-label": i,
              "aria-labelledby": [m, fe].filter(Boolean).join(" ") || void 0,
              "aria-describedby": o,
              onKeyDown: Kt,
              onMouseDown: h || U ? null : Y,
              onBlur: kn,
              onFocus: b,
            },
            F,
            {
              ownerState: or,
              className: xe(F.className, Mr.select, u),
              id: fe,
              children: fR(Oe) ? Bh || (Bh = P.jsx("span", { className: "notranslate", children: "​" })) : Oe,
            }
          )
        ),
        P.jsx(
          dR,
          k(
            {
              "aria-invalid": g,
              value: Array.isArray(I) ? I.join(",") : I,
              name: w,
              ref: H,
              "aria-hidden": !0,
              onChange: Or,
              tabIndex: -1,
              disabled: h,
              className: Mr.nativeInput,
              autoFocus: s,
              ownerState: or,
            },
            z
          )
        ),
        P.jsx(cR, { as: v, className: Mr.icon, ownerState: or }),
        P.jsx(
          JP,
          k(
            {
              id: `menu-${w || ""}`,
              anchorEl: oe,
              open: on,
              onClose: se,
              anchorOrigin: { vertical: "bottom", horizontal: "center" },
              transformOrigin: { vertical: "top", horizontal: "center" },
            },
            c,
            {
              MenuListProps: k(
                {
                  "aria-labelledby": m,
                  role: "listbox",
                  "aria-multiselectable": f ? "true" : void 0,
                  disableListWrap: !0,
                  id: ff,
                },
                c.MenuListProps
              ),
              slotProps: k({}, c.slotProps, {
                paper: k({}, Ll, { style: k({ minWidth: Nr }, Ll != null ? Ll.style : null) }),
              }),
              children: os,
            }
          )
        ),
      ],
    });
  }),
  mR = hR;
function gR(e) {
  return Le("MuiSvgIcon", e);
}
Ue("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const vR = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  yR = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = { root: ["root", t !== "inherit" && `color${Re(t)}`, `fontSize${Re(n)}`] };
    return Fe(o, gR, r);
  },
  wR = G("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, n.color !== "inherit" && t[`color${Re(n.color)}`], t[`fontSize${Re(n.fontSize)}`]];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, s, a, l, u, d, p, h, y, g;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
        medium: ((a = e.typography) == null || (l = a.pxToRem) == null ? void 0 : l.call(a, 24)) || "1.5rem",
        large: ((u = e.typography) == null || (d = u.pxToRem) == null ? void 0 : d.call(u, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (p = (h = (e.vars || e).palette) == null || (h = h[t.color]) == null ? void 0 : h.main) != null
          ? p
          : {
              action: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.active,
              disabled: (g = (e.vars || e).palette) == null || (g = g.action) == null ? void 0 : g.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  Lc = E.forwardRef(function (t, n) {
    const r = Ge({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: d = !1,
        titleAccess: p,
        viewBox: h = "0 0 24 24",
      } = r,
      y = V(r, vR),
      g = E.isValidElement(o) && o.type === "svg",
      v = k({}, r, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: d,
        viewBox: h,
        hasSvgAsChild: g,
      }),
      x = {};
    d || (x.viewBox = h);
    const m = yR(v);
    return P.jsxs(
      wR,
      k(
        {
          as: a,
          className: xe(m.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": p ? void 0 : !0,
          role: p ? "img" : void 0,
          ref: n,
        },
        x,
        y,
        g && o.props,
        { ownerState: v, children: [g ? o.props.children : o, p ? P.jsx("title", { children: p }) : null] }
      )
    );
  });
Lc.muiName = "SvgIcon";
function SR(e, t) {
  function n(r, o) {
    return P.jsx(Lc, k({ "data-testid": `${t}Icon`, ref: o }, r, { children: e }));
  }
  return (n.muiName = Lc.muiName), E.memo(E.forwardRef(n));
}
const _R = SR(P.jsx("path", { d: "M7 10l5 5 5-5z" }), "ArrowDropDown"),
  ER = [
    "autoWidth",
    "children",
    "classes",
    "className",
    "defaultOpen",
    "displayEmpty",
    "IconComponent",
    "id",
    "input",
    "inputProps",
    "label",
    "labelId",
    "MenuProps",
    "multiple",
    "native",
    "onClose",
    "onOpen",
    "open",
    "renderValue",
    "SelectDisplayProps",
    "variant",
  ],
  kR = ["root"],
  CR = (e) => {
    const { classes: t } = e;
    return t;
  },
  df = {
    name: "MuiSelect",
    overridesResolver: (e, t) => t.root,
    shouldForwardProp: (e) => rn(e) && e !== "variant",
    slot: "Root",
  },
  xR = G(V0, df)(""),
  IR = G(Q0, df)(""),
  bR = G(G0, df)(""),
  iy = E.forwardRef(function (t, n) {
    const r = Ge({ name: "MuiSelect", props: t }),
      {
        autoWidth: o = !1,
        children: i,
        classes: s = {},
        className: a,
        defaultOpen: l = !1,
        displayEmpty: u = !1,
        IconComponent: d = _R,
        id: p,
        input: h,
        inputProps: y,
        label: g,
        labelId: v,
        MenuProps: x,
        multiple: m = !1,
        native: c = !1,
        onClose: f,
        onOpen: w,
        open: S,
        renderValue: C,
        SelectDisplayProps: _,
        variant: b = "outlined",
      } = r,
      O = V(r, ER),
      R = c ? sR : mR,
      U = Do(),
      j = $o({ props: r, muiFormControl: U, states: ["variant", "error"] }),
      F = j.variant || b,
      L = k({}, r, { variant: F, classes: s }),
      $ = CR(L),
      D = V($, kR),
      z =
        h ||
        {
          standard: P.jsx(xR, { ownerState: L }),
          outlined: P.jsx(IR, { label: g, ownerState: L }),
          filled: P.jsx(bR, { ownerState: L }),
        }[F],
      I = Lt(n, z.ref);
    return P.jsx(E.Fragment, {
      children: E.cloneElement(
        z,
        k(
          {
            inputComponent: R,
            inputProps: k(
              { children: i, error: j.error, IconComponent: d, variant: F, type: void 0, multiple: m },
              c
                ? { id: p }
                : {
                    autoWidth: o,
                    defaultOpen: l,
                    displayEmpty: u,
                    labelId: v,
                    MenuProps: x,
                    onClose: f,
                    onOpen: w,
                    open: S,
                    renderValue: C,
                    SelectDisplayProps: k({ id: p }, _),
                  },
              y,
              { classes: y ? gt(D, y.classes) : D },
              h ? h.props.inputProps : {}
            ),
          },
          ((m && c) || u) && F === "outlined" ? { notched: !0 } : {},
          { ref: I, className: xe(z.props.className, a, $.root) },
          !h && { variant: F },
          O
        )
      ),
    });
  });
iy.muiName = "Select";
const TR = iy;
function PR(e) {
  return Le("MuiTextField", e);
}
Ue("MuiTextField", ["root"]);
const RR = [
    "autoComplete",
    "autoFocus",
    "children",
    "className",
    "color",
    "defaultValue",
    "disabled",
    "error",
    "FormHelperTextProps",
    "fullWidth",
    "helperText",
    "id",
    "InputLabelProps",
    "inputProps",
    "InputProps",
    "inputRef",
    "label",
    "maxRows",
    "minRows",
    "multiline",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "placeholder",
    "required",
    "rows",
    "select",
    "SelectProps",
    "type",
    "value",
    "variant",
  ],
  OR = { standard: V0, filled: G0, outlined: Q0 },
  NR = (e) => {
    const { classes: t } = e;
    return Fe({ root: ["root"] }, PR, t);
  },
  AR = G(jT, { name: "MuiTextField", slot: "Root", overridesResolver: (e, t) => t.root })({}),
  MR = E.forwardRef(function (t, n) {
    const r = Ge({ props: t, name: "MuiTextField" }),
      {
        autoComplete: o,
        autoFocus: i = !1,
        children: s,
        className: a,
        color: l = "primary",
        defaultValue: u,
        disabled: d = !1,
        error: p = !1,
        FormHelperTextProps: h,
        fullWidth: y = !1,
        helperText: g,
        id: v,
        InputLabelProps: x,
        inputProps: m,
        InputProps: c,
        inputRef: f,
        label: w,
        maxRows: S,
        minRows: C,
        multiline: _ = !1,
        name: b,
        onBlur: O,
        onChange: R,
        onFocus: U,
        placeholder: j,
        required: F = !1,
        rows: L,
        select: $ = !1,
        SelectProps: D,
        type: z,
        value: I,
        variant: N = "outlined",
      } = r,
      M = V(r, RR),
      Q = k({}, r, {
        autoFocus: i,
        color: l,
        disabled: d,
        error: p,
        fullWidth: y,
        multiline: _,
        required: F,
        select: $,
        variant: N,
      }),
      H = NR(Q),
      le = {};
    N === "outlined" && (x && typeof x.shrink < "u" && (le.notched = x.shrink), (le.label = w)),
      $ && ((!D || !D.native) && (le.id = void 0), (le["aria-describedby"] = void 0));
    const q = Xv(v),
      me = g && q ? `${q}-helper-text` : void 0,
      re = w && q ? `${q}-label` : void 0,
      je = OR[N],
      ct = P.jsx(
        je,
        k(
          {
            "aria-describedby": me,
            autoComplete: o,
            autoFocus: i,
            defaultValue: u,
            fullWidth: y,
            multiline: _,
            name: b,
            rows: L,
            maxRows: S,
            minRows: C,
            type: z,
            value: I,
            id: q,
            inputRef: f,
            onBlur: O,
            onChange: R,
            onFocus: U,
            placeholder: j,
            inputProps: m,
          },
          le,
          c
        )
      );
    return P.jsxs(
      AR,
      k(
        {
          className: xe(H.root, a),
          disabled: d,
          error: p,
          fullWidth: y,
          ref: n,
          required: F,
          color: l,
          variant: N,
          ownerState: Q,
        },
        M,
        {
          children: [
            w != null && w !== "" && P.jsx(LT, k({ htmlFor: q, id: re }, x, { children: w })),
            $
              ? P.jsx(TR, k({ "aria-describedby": me, id: q, labelId: re, value: I, input: ct }, D, { children: s }))
              : ct,
            g && P.jsx(qT, k({ id: me }, h, { children: g })),
          ],
        }
      )
    );
  }),
  Hh = MR;
function LR() {
  const [e, t] = E.useState(""),
    [n, r] = E.useState(""),
    [o, i] = E.useState(!1),
    [s, a] = E.useState(""),
    [l, u] = E.useState(""),
    d = async (p) => {
      p.preventDefault();
      try {
        await rE(kk, e, n).then((h) => {
          const y = h.user;
          u((y == null ? void 0 : y.email) ?? "");
        }),
          console.log("Kirjautuminen onnistui"),
          a("Kirjautuneena " + e);
      } catch {
        console.log("Kirjautuminen epäonnistui"), a("Kirjautuminen epäonnistui");
      }
      t(""), r(""), i(!0);
    };
  return P.jsxs("div", {
    children: [
      P.jsx("h2", { children: "Kirjaudu sisään" }),
      o && P.jsx("h4", { children: s }),
      P.jsxs("form", {
        onSubmit: d,
        children: [
          P.jsxs("div", {
            children: [
              P.jsx(Hh, {
                id: "email",
                type: "email",
                label: "Email",
                variant: "outlined",
                value: e,
                onChange: (p) => t(p.target.value),
                onFocus: () => i(!1),
                required: !0,
              }),
              P.jsx("br", {}),
              P.jsx(Hh, {
                id: "password",
                type: "password",
                label: "Password",
                variant: "outlined",
                value: n,
                onChange: (p) => r(p.target.value),
                required: !0,
              }),
            ],
          }),
          P.jsx("button", { type: "submit", children: "Kirjaudu sisään" }),
        ],
      }),
    ],
  });
}
function $R() {
  return P.jsxs(P.Fragment, {
    children: [
      P.jsxs("div", {
        children: [
          P.jsx("a", {
            href: "https://vitejs.dev",
            target: "_blank",
            children: P.jsx("img", {
              src: "https://nilssoni56.github.io/repo-pilvi/vko4/vite.svg",
              className: "logo",
              alt: "Vite logo",
            }),
          }),
          P.jsx("a", {
            href: "https://react.dev",
            target: "_blank",
            children: P.jsx("img", {
              src: "https://nilssoni56.github.io/repo-pilvi/vko4/assets/react-CHdo91hT.svg",
              className: "logo react",
              alt: "React logo",
            }),
          }),
        ],
      }),
      P.jsx("h1", { children: "Vite + React" }),
      P.jsx(LR, {}),
    ],
  });
}
xu.createRoot(document.getElementById("root")).render(P.jsx(dr.StrictMode, { children: P.jsx($R, {}) }));
