function $n(f, r) {
  const x = Fn();
  return (
    ($n = function (i, S) {
      return (i = i - 112), x[i];
    }),
    $n(f, r)
  );
}
function Fn() {
  const f = [
    "2470440ZiClZI",
    "2674572tafsuA",
    "crossOrigin",
    "anonymous",
    "omit",
    "integrity",
    "LINK",
    "130018ONQKku",
    "credentials",
    "supports",
    "include",
    "5893245QiPPGR",
    "205305CyGfPK",
    "referrerPolicy",
    "type",
    "relList",
    "4513400CfnKHK",
    "modulepreload",
    "same-origin",
    "querySelectorAll",
    "addedNodes",
    "92wxhVcP",
    "10547019KecCed",
    "rel",
    "createElement",
  ];
  return (
    (Fn = function () {
      return f;
    }),
    Fn()
  );
}
(function (f, r) {
  const x = $n,
    i = f();
  for (;;)
    try {
      if (
        -parseInt(x(123)) / 1 +
          -parseInt(x(116)) / 2 +
          (-parseInt(x(128)) / 3) * (-parseInt(x(112)) / 4) +
          parseInt(x(127)) / 5 +
          parseInt(x(117)) / 6 +
          -parseInt(x(113)) / 7 +
          parseInt(x(132)) / 8 ===
        r
      )
        break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Fn, 890636),
  (function () {
    const r = $n,
      x = document[r(115)]("link")[r(131)];
    if (x && x[r(125)] && x[r(125)](r(133))) return;
    for (const M of document[r(135)]('link[rel="modulepreload"]')) S(M);
    new MutationObserver((M) => {
      const H = r;
      for (const X of M)
        if (X[H(130)] === "childList")
          for (const D of X[H(136)])
            D.tagName === H(122) && D[H(114)] === H(133) && S(D);
    }).observe(document, { childList: !0, subtree: !0 });
    function i(M) {
      const H = r,
        X = {};
      return (
        M[H(121)] && (X[H(121)] = M[H(121)]),
        M[H(129)] && (X.referrerPolicy = M[H(129)]),
        M[H(118)] === "use-credentials"
          ? (X.credentials = H(126))
          : M[H(118)] === H(119)
          ? (X[H(124)] = H(120))
          : (X[H(124)] = H(134)),
        X
      );
    }
    function S(M) {
      if (M.ep) return;
      M.ep = !0;
      const H = i(M);
      fetch(M.href, H);
    }
  })();
function In(f, r) {
  var x = Pn();
  return (
    (In = function (i, S) {
      i = i - 370;
      var M = x[i];
      return M;
    }),
    In(f, r)
  );
}
var Nu = In;
(function (f, r) {
  for (var x = In, i = f(); ; )
    try {
      var S =
        parseInt(x(380)) / 1 +
        (-parseInt(x(372)) / 2) * (parseInt(x(378)) / 3) +
        parseInt(x(390)) / 4 +
        parseInt(x(383)) / 5 +
        (-parseInt(x(371)) / 6) * (-parseInt(x(370)) / 7) +
        parseInt(x(386)) / 8 +
        -parseInt(x(373)) / 9;
      if (S === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(Pn, 416125);
typeof globalThis !== Nu(389) ||
  typeof window !== Nu(389) ||
  (typeof global !== Nu(389) ? global : Nu(389));
function pd(f) {
  var r = Nu;
  return f && f[r(376)] && Object[r(384)][r(377)][r(385)](f, r(379))
    ? f[r(379)]
    : f;
}
function Pn() {
  var f = [
    "prototype",
    "call",
    "4753328rEWHQV",
    "apply",
    "constructor",
    "undefined",
    "2794164RPdGvh",
    "7JpVBxt",
    "1277130UvbrDc",
    "468uQVkPN",
    "13646250YjHLfX",
    "defineProperty",
    "keys",
    "__esModule",
    "hasOwnProperty",
    "6549AneTlN",
    "default",
    "258167OHoEkA",
    "construct",
    "getOwnPropertyDescriptor",
    "3397340LnLGTp",
  ];
  return (
    (Pn = function () {
      return f;
    }),
    Pn()
  );
}
var Ui = { exports: {} },
  Au = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Br;
function Ed() {
  if (Br) return Au;
  Br = 1;
  var f = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function x(i, S, M) {
    var H = null;
    if (
      (M !== void 0 && (H = "" + M),
      S.key !== void 0 && (H = "" + S.key),
      "key" in S)
    ) {
      M = {};
      for (var X in S) X !== "key" && (M[X] = S[X]);
    } else M = S;
    return (
      (S = M.ref),
      { $$typeof: f, type: i, key: H, ref: S !== void 0 ? S : null, props: M }
    );
  }
  return (Au.Fragment = r), (Au.jsx = x), (Au.jsxs = x), Au;
}
var Yr;
function Td() {
  return Yr || ((Yr = 1), (Ui.exports = Ed())), Ui.exports;
}
var m = Td(),
  Hi = { exports: {} },
  tl = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gr;
function Ad() {
  if (Gr) return tl;
  Gr = 1;
  var f = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    x = Symbol.for("react.fragment"),
    i = Symbol.for("react.strict_mode"),
    S = Symbol.for("react.profiler"),
    M = Symbol.for("react.consumer"),
    H = Symbol.for("react.context"),
    X = Symbol.for("react.forward_ref"),
    D = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    L = Symbol.iterator;
  function Y(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (L && d[L]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var sl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    I = Object.assign,
    Q = {};
  function P(d, N, U) {
    (this.props = d),
      (this.context = N),
      (this.refs = Q),
      (this.updater = U || sl);
  }
  (P.prototype.isReactComponent = {}),
    (P.prototype.setState = function (d, N) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, d, N, "setState");
    }),
    (P.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    });
  function El() {}
  El.prototype = P.prototype;
  function zl(d, N, U) {
    (this.props = d),
      (this.context = N),
      (this.refs = Q),
      (this.updater = U || sl);
  }
  var $ = (zl.prototype = new El());
  ($.constructor = zl), I($, P.prototype), ($.isPureReactComponent = !0);
  var ll = Array.isArray,
    A = { H: null, A: null, T: null, S: null, V: null },
    B = Object.prototype.hasOwnProperty;
  function cl(d, N, U, q, K, fl) {
    return (
      (U = fl.ref),
      { $$typeof: f, type: d, key: N, ref: U !== void 0 ? U : null, props: fl }
    );
  }
  function rl(d, N) {
    return cl(d.type, N, void 0, void 0, void 0, d.props);
  }
  function ol(d) {
    return typeof d == "object" && d !== null && d.$$typeof === f;
  }
  function jl(d) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (U) {
        return N[U];
      })
    );
  }
  var Cl = /\/+/g;
  function Al(d, N) {
    return typeof d == "object" && d !== null && d.key != null
      ? jl("" + d.key)
      : N.toString(36);
  }
  function Vl() {}
  function Ut(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (
          (typeof d.status == "string"
            ? d.then(Vl, Vl)
            : ((d.status = "pending"),
              d.then(
                function (N) {
                  d.status === "pending" &&
                    ((d.status = "fulfilled"), (d.value = N));
                },
                function (N) {
                  d.status === "pending" &&
                    ((d.status = "rejected"), (d.reason = N));
                }
              )),
          d.status)
        ) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function w(d, N, U, q, K) {
    var fl = typeof d;
    (fl === "undefined" || fl === "boolean") && (d = null);
    var W = !1;
    if (d === null) W = !0;
    else
      switch (fl) {
        case "bigint":
        case "string":
        case "number":
          W = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case f:
            case r:
              W = !0;
              break;
            case C:
              return (W = d._init), w(W(d._payload), N, U, q, K);
          }
      }
    if (W)
      return (
        (K = K(d)),
        (W = q === "" ? "." + Al(d, 0) : q),
        ll(K)
          ? ((U = ""),
            W != null && (U = W.replace(Cl, "$&/") + "/"),
            w(K, N, U, "", function (vl) {
              return vl;
            }))
          : K != null &&
            (ol(K) &&
              (K = rl(
                K,
                U +
                  (K.key == null || (d && d.key === K.key)
                    ? ""
                    : ("" + K.key).replace(Cl, "$&/") + "/") +
                  W
              )),
            N.push(K)),
        1
      );
    W = 0;
    var Jl = q === "" ? "." : q + ":";
    if (ll(d))
      for (var Sl = 0; Sl < d.length; Sl++)
        (q = d[Sl]), (fl = Jl + Al(q, Sl)), (W += w(q, N, U, fl, K));
    else if (((Sl = Y(d)), typeof Sl == "function"))
      for (d = Sl.call(d), Sl = 0; !(q = d.next()).done; )
        (q = q.value), (fl = Jl + Al(q, Sl++)), (W += w(q, N, U, fl, K));
    else if (fl === "object") {
      if (typeof d.then == "function") return w(Ut(d), N, U, q, K);
      throw (
        ((N = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return W;
  }
  function g(d, N, U) {
    if (d == null) return d;
    var q = [],
      K = 0;
    return (
      w(d, q, "", "", function (fl) {
        return N.call(U, fl, K++);
      }),
      q
    );
  }
  function j(d) {
    if (d._status === -1) {
      var N = d._result;
      (N = N()),
        N.then(
          function (U) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = U));
          },
          function (U) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = U));
          }
        ),
        d._status === -1 && ((d._status = 0), (d._result = N));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var R =
    typeof reportError == "function"
      ? reportError
      : function (d) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var N = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof d == "object" &&
                d !== null &&
                typeof d.message == "string"
                  ? String(d.message)
                  : String(d),
              error: d,
            });
            if (!window.dispatchEvent(N)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", d);
            return;
          }
          console.error(d);
        };
  function il() {}
  return (
    (tl.Children = {
      map: g,
      forEach: function (d, N, U) {
        g(
          d,
          function () {
            N.apply(this, arguments);
          },
          U
        );
      },
      count: function (d) {
        var N = 0;
        return (
          g(d, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (d) {
        return (
          g(d, function (N) {
            return N;
          }) || []
        );
      },
      only: function (d) {
        if (!ol(d))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return d;
      },
    }),
    (tl.Component = P),
    (tl.Fragment = x),
    (tl.Profiler = S),
    (tl.PureComponent = zl),
    (tl.StrictMode = i),
    (tl.Suspense = D),
    (tl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = A),
    (tl.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (d) {
        return A.H.useMemoCache(d);
      },
    }),
    (tl.cache = function (d) {
      return function () {
        return d.apply(null, arguments);
      };
    }),
    (tl.cloneElement = function (d, N, U) {
      if (d == null)
        throw Error(
          "The argument must be a React element, but you passed " + d + "."
        );
      var q = I({}, d.props),
        K = d.key,
        fl = void 0;
      if (N != null)
        for (W in (N.ref !== void 0 && (fl = void 0),
        N.key !== void 0 && (K = "" + N.key),
        N))
          !B.call(N, W) ||
            W === "key" ||
            W === "__self" ||
            W === "__source" ||
            (W === "ref" && N.ref === void 0) ||
            (q[W] = N[W]);
      var W = arguments.length - 2;
      if (W === 1) q.children = U;
      else if (1 < W) {
        for (var Jl = Array(W), Sl = 0; Sl < W; Sl++)
          Jl[Sl] = arguments[Sl + 2];
        q.children = Jl;
      }
      return cl(d.type, K, void 0, void 0, fl, q);
    }),
    (tl.createContext = function (d) {
      return (
        (d = {
          $$typeof: H,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (d.Provider = d),
        (d.Consumer = { $$typeof: M, _context: d }),
        d
      );
    }),
    (tl.createElement = function (d, N, U) {
      var q,
        K = {},
        fl = null;
      if (N != null)
        for (q in (N.key !== void 0 && (fl = "" + N.key), N))
          B.call(N, q) &&
            q !== "key" &&
            q !== "__self" &&
            q !== "__source" &&
            (K[q] = N[q]);
      var W = arguments.length - 2;
      if (W === 1) K.children = U;
      else if (1 < W) {
        for (var Jl = Array(W), Sl = 0; Sl < W; Sl++)
          Jl[Sl] = arguments[Sl + 2];
        K.children = Jl;
      }
      if (d && d.defaultProps)
        for (q in ((W = d.defaultProps), W)) K[q] === void 0 && (K[q] = W[q]);
      return cl(d, fl, void 0, void 0, null, K);
    }),
    (tl.createRef = function () {
      return { current: null };
    }),
    (tl.forwardRef = function (d) {
      return { $$typeof: X, render: d };
    }),
    (tl.isValidElement = ol),
    (tl.lazy = function (d) {
      return { $$typeof: C, _payload: { _status: -1, _result: d }, _init: j };
    }),
    (tl.memo = function (d, N) {
      return { $$typeof: E, type: d, compare: N === void 0 ? null : N };
    }),
    (tl.startTransition = function (d) {
      var N = A.T,
        U = {};
      A.T = U;
      try {
        var q = d(),
          K = A.S;
        K !== null && K(U, q),
          typeof q == "object" &&
            q !== null &&
            typeof q.then == "function" &&
            q.then(il, R);
      } catch (fl) {
        R(fl);
      } finally {
        A.T = N;
      }
    }),
    (tl.unstable_useCacheRefresh = function () {
      return A.H.useCacheRefresh();
    }),
    (tl.use = function (d) {
      return A.H.use(d);
    }),
    (tl.useActionState = function (d, N, U) {
      return A.H.useActionState(d, N, U);
    }),
    (tl.useCallback = function (d, N) {
      return A.H.useCallback(d, N);
    }),
    (tl.useContext = function (d) {
      return A.H.useContext(d);
    }),
    (tl.useDebugValue = function () {}),
    (tl.useDeferredValue = function (d, N) {
      return A.H.useDeferredValue(d, N);
    }),
    (tl.useEffect = function (d, N, U) {
      var q = A.H;
      if (typeof U == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return q.useEffect(d, N);
    }),
    (tl.useId = function () {
      return A.H.useId();
    }),
    (tl.useImperativeHandle = function (d, N, U) {
      return A.H.useImperativeHandle(d, N, U);
    }),
    (tl.useInsertionEffect = function (d, N) {
      return A.H.useInsertionEffect(d, N);
    }),
    (tl.useLayoutEffect = function (d, N) {
      return A.H.useLayoutEffect(d, N);
    }),
    (tl.useMemo = function (d, N) {
      return A.H.useMemo(d, N);
    }),
    (tl.useOptimistic = function (d, N) {
      return A.H.useOptimistic(d, N);
    }),
    (tl.useReducer = function (d, N, U) {
      return A.H.useReducer(d, N, U);
    }),
    (tl.useRef = function (d) {
      return A.H.useRef(d);
    }),
    (tl.useState = function (d) {
      return A.H.useState(d);
    }),
    (tl.useSyncExternalStore = function (d, N, U) {
      return A.H.useSyncExternalStore(d, N, U);
    }),
    (tl.useTransition = function () {
      return A.H.useTransition();
    }),
    (tl.version = "19.1.0"),
    tl
  );
}
var Xr;
function Vi() {
  return Xr || ((Xr = 1), (Hi.exports = Ad())), Hi.exports;
}
var Z = Vi();
const _a = pd(Z);
var qi = { exports: {} },
  Ou = {},
  Ci = { exports: {} },
  Bi = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qr;
function Od() {
  return (
    Qr ||
      ((Qr = 1),
      (function (f) {
        function r(g, j) {
          var R = g.length;
          g.push(j);
          l: for (; 0 < R; ) {
            var il = (R - 1) >>> 1,
              d = g[il];
            if (0 < S(d, j)) (g[il] = j), (g[R] = d), (R = il);
            else break l;
          }
        }
        function x(g) {
          return g.length === 0 ? null : g[0];
        }
        function i(g) {
          if (g.length === 0) return null;
          var j = g[0],
            R = g.pop();
          if (R !== j) {
            g[0] = R;
            l: for (var il = 0, d = g.length, N = d >>> 1; il < N; ) {
              var U = 2 * (il + 1) - 1,
                q = g[U],
                K = U + 1,
                fl = g[K];
              if (0 > S(q, R))
                K < d && 0 > S(fl, q)
                  ? ((g[il] = fl), (g[K] = R), (il = K))
                  : ((g[il] = q), (g[U] = R), (il = U));
              else if (K < d && 0 > S(fl, R))
                (g[il] = fl), (g[K] = R), (il = K);
              else break l;
            }
          }
          return j;
        }
        function S(g, j) {
          var R = g.sortIndex - j.sortIndex;
          return R !== 0 ? R : g.id - j.id;
        }
        if (
          ((f.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var M = performance;
          f.unstable_now = function () {
            return M.now();
          };
        } else {
          var H = Date,
            X = H.now();
          f.unstable_now = function () {
            return H.now() - X;
          };
        }
        var D = [],
          E = [],
          C = 1,
          L = null,
          Y = 3,
          sl = !1,
          I = !1,
          Q = !1,
          P = !1,
          El = typeof setTimeout == "function" ? setTimeout : null,
          zl = typeof clearTimeout == "function" ? clearTimeout : null,
          $ = typeof setImmediate < "u" ? setImmediate : null;
        function ll(g) {
          for (var j = x(E); j !== null; ) {
            if (j.callback === null) i(E);
            else if (j.startTime <= g)
              i(E), (j.sortIndex = j.expirationTime), r(D, j);
            else break;
            j = x(E);
          }
        }
        function A(g) {
          if (((Q = !1), ll(g), !I))
            if (x(D) !== null) (I = !0), B || ((B = !0), Al());
            else {
              var j = x(E);
              j !== null && w(A, j.startTime - g);
            }
        }
        var B = !1,
          cl = -1,
          rl = 5,
          ol = -1;
        function jl() {
          return P ? !0 : !(f.unstable_now() - ol < rl);
        }
        function Cl() {
          if (((P = !1), B)) {
            var g = f.unstable_now();
            ol = g;
            var j = !0;
            try {
              l: {
                (I = !1), Q && ((Q = !1), zl(cl), (cl = -1)), (sl = !0);
                var R = Y;
                try {
                  t: {
                    for (
                      ll(g), L = x(D);
                      L !== null && !(L.expirationTime > g && jl());

                    ) {
                      var il = L.callback;
                      if (typeof il == "function") {
                        (L.callback = null), (Y = L.priorityLevel);
                        var d = il(L.expirationTime <= g);
                        if (((g = f.unstable_now()), typeof d == "function")) {
                          (L.callback = d), ll(g), (j = !0);
                          break t;
                        }
                        L === x(D) && i(D), ll(g);
                      } else i(D);
                      L = x(D);
                    }
                    if (L !== null) j = !0;
                    else {
                      var N = x(E);
                      N !== null && w(A, N.startTime - g), (j = !1);
                    }
                  }
                  break l;
                } finally {
                  (L = null), (Y = R), (sl = !1);
                }
                j = void 0;
              }
            } finally {
              j ? Al() : (B = !1);
            }
          }
        }
        var Al;
        if (typeof $ == "function")
          Al = function () {
            $(Cl);
          };
        else if (typeof MessageChannel < "u") {
          var Vl = new MessageChannel(),
            Ut = Vl.port2;
          (Vl.port1.onmessage = Cl),
            (Al = function () {
              Ut.postMessage(null);
            });
        } else
          Al = function () {
            El(Cl, 0);
          };
        function w(g, j) {
          cl = El(function () {
            g(f.unstable_now());
          }, j);
        }
        (f.unstable_IdlePriority = 5),
          (f.unstable_ImmediatePriority = 1),
          (f.unstable_LowPriority = 4),
          (f.unstable_NormalPriority = 3),
          (f.unstable_Profiling = null),
          (f.unstable_UserBlockingPriority = 2),
          (f.unstable_cancelCallback = function (g) {
            g.callback = null;
          }),
          (f.unstable_forceFrameRate = function (g) {
            0 > g || 125 < g
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (rl = 0 < g ? Math.floor(1e3 / g) : 5);
          }),
          (f.unstable_getCurrentPriorityLevel = function () {
            return Y;
          }),
          (f.unstable_next = function (g) {
            switch (Y) {
              case 1:
              case 2:
              case 3:
                var j = 3;
                break;
              default:
                j = Y;
            }
            var R = Y;
            Y = j;
            try {
              return g();
            } finally {
              Y = R;
            }
          }),
          (f.unstable_requestPaint = function () {
            P = !0;
          }),
          (f.unstable_runWithPriority = function (g, j) {
            switch (g) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                g = 3;
            }
            var R = Y;
            Y = g;
            try {
              return j();
            } finally {
              Y = R;
            }
          }),
          (f.unstable_scheduleCallback = function (g, j, R) {
            var il = f.unstable_now();
            switch (
              (typeof R == "object" && R !== null
                ? ((R = R.delay),
                  (R = typeof R == "number" && 0 < R ? il + R : il))
                : (R = il),
              g)
            ) {
              case 1:
                var d = -1;
                break;
              case 2:
                d = 250;
                break;
              case 5:
                d = 1073741823;
                break;
              case 4:
                d = 1e4;
                break;
              default:
                d = 5e3;
            }
            return (
              (d = R + d),
              (g = {
                id: C++,
                callback: j,
                priorityLevel: g,
                startTime: R,
                expirationTime: d,
                sortIndex: -1,
              }),
              R > il
                ? ((g.sortIndex = R),
                  r(E, g),
                  x(D) === null &&
                    g === x(E) &&
                    (Q ? (zl(cl), (cl = -1)) : (Q = !0), w(A, R - il)))
                : ((g.sortIndex = d),
                  r(D, g),
                  I || sl || ((I = !0), B || ((B = !0), Al()))),
              g
            );
          }),
          (f.unstable_shouldYield = jl),
          (f.unstable_wrapCallback = function (g) {
            var j = Y;
            return function () {
              var R = Y;
              Y = j;
              try {
                return g.apply(this, arguments);
              } finally {
                Y = R;
              }
            };
          });
      })(Bi)),
    Bi
  );
}
var Zr;
function zd() {
  return Zr || ((Zr = 1), (Ci.exports = Od())), Ci.exports;
}
var Yi = { exports: {} },
  $l = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vr;
function Nd() {
  if (Vr) return $l;
  Vr = 1;
  var f = Vi();
  function r(D) {
    var E = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        E += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return (
      "Minified React error #" +
      D +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function x() {}
  var i = {
      d: {
        f: x,
        r: function () {
          throw Error(r(522));
        },
        D: x,
        C: x,
        L: x,
        m: x,
        X: x,
        S: x,
        M: x,
      },
      p: 0,
      findDOMNode: null,
    },
    S = Symbol.for("react.portal");
  function M(D, E, C) {
    var L =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: S,
      key: L == null ? null : "" + L,
      children: D,
      containerInfo: E,
      implementation: C,
    };
  }
  var H = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function X(D, E) {
    if (D === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    ($l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
    ($l.createPortal = function (D, E) {
      var C =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(r(299));
      return M(D, E, null, C);
    }),
    ($l.flushSync = function (D) {
      var E = H.T,
        C = i.p;
      try {
        if (((H.T = null), (i.p = 2), D)) return D();
      } finally {
        (H.T = E), (i.p = C), i.d.f();
      }
    }),
    ($l.preconnect = function (D, E) {
      typeof D == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        i.d.C(D, E));
    }),
    ($l.prefetchDNS = function (D) {
      typeof D == "string" && i.d.D(D);
    }),
    ($l.preinit = function (D, E) {
      if (typeof D == "string" && E && typeof E.as == "string") {
        var C = E.as,
          L = X(C, E.crossOrigin),
          Y = typeof E.integrity == "string" ? E.integrity : void 0,
          sl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        C === "style"
          ? i.d.S(D, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: L,
              integrity: Y,
              fetchPriority: sl,
            })
          : C === "script" &&
            i.d.X(D, {
              crossOrigin: L,
              integrity: Y,
              fetchPriority: sl,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    ($l.preinitModule = function (D, E) {
      if (typeof D == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var C = X(E.as, E.crossOrigin);
            i.d.M(D, {
              crossOrigin: C,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && i.d.M(D);
    }),
    ($l.preload = function (D, E) {
      if (
        typeof D == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var C = E.as,
          L = X(C, E.crossOrigin);
        i.d.L(D, C, {
          crossOrigin: L,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    ($l.preloadModule = function (D, E) {
      if (typeof D == "string")
        if (E) {
          var C = X(E.as, E.crossOrigin);
          i.d.m(D, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: C,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else i.d.m(D);
    }),
    ($l.requestFormReset = function (D) {
      i.d.r(D);
    }),
    ($l.unstable_batchedUpdates = function (D, E) {
      return D(E);
    }),
    ($l.useFormState = function (D, E, C) {
      return H.H.useFormState(D, E, C);
    }),
    ($l.useFormStatus = function () {
      return H.H.useHostTransitionStatus();
    }),
    ($l.version = "19.1.0"),
    $l
  );
}
var Lr;
function Md() {
  if (Lr) return Yi.exports;
  Lr = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (r) {
        console.error(r);
      }
  }
  return f(), (Yi.exports = Nd()), Yi.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kr;
function Dd() {
  if (Kr) return Ou;
  Kr = 1;
  var f = zd(),
    r = Vi(),
    x = Md();
  function i(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function S(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function M(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do (t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return);
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function H(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function X(l) {
    if (M(l) !== l) throw Error(i(188));
  }
  function D(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = M(l)), t === null)) throw Error(i(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((e = u.return), e !== null)) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return X(u), l;
          if (n === e) return X(u), t;
          n = n.sibling;
        }
        throw Error(i(188));
      }
      if (a.return !== e.return) (a = u), (e = n);
      else {
        for (var c = !1, s = u.child; s; ) {
          if (s === a) {
            (c = !0), (a = u), (e = n);
            break;
          }
          if (s === e) {
            (c = !0), (e = u), (a = n);
            break;
          }
          s = s.sibling;
        }
        if (!c) {
          for (s = n.child; s; ) {
            if (s === a) {
              (c = !0), (a = n), (e = u);
              break;
            }
            if (s === e) {
              (c = !0), (e = n), (a = u);
              break;
            }
            s = s.sibling;
          }
          if (!c) throw Error(i(189));
        }
      }
      if (a.alternate !== e) throw Error(i(190));
    }
    if (a.tag !== 3) throw Error(i(188));
    return a.stateNode.current === a ? l : t;
  }
  function E(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = E(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var C = Object.assign,
    L = Symbol.for("react.element"),
    Y = Symbol.for("react.transitional.element"),
    sl = Symbol.for("react.portal"),
    I = Symbol.for("react.fragment"),
    Q = Symbol.for("react.strict_mode"),
    P = Symbol.for("react.profiler"),
    El = Symbol.for("react.provider"),
    zl = Symbol.for("react.consumer"),
    $ = Symbol.for("react.context"),
    ll = Symbol.for("react.forward_ref"),
    A = Symbol.for("react.suspense"),
    B = Symbol.for("react.suspense_list"),
    cl = Symbol.for("react.memo"),
    rl = Symbol.for("react.lazy"),
    ol = Symbol.for("react.activity"),
    jl = Symbol.for("react.memo_cache_sentinel"),
    Cl = Symbol.iterator;
  function Al(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Cl && l[Cl]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Vl = Symbol.for("react.client.reference");
  function Ut(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Vl ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case I:
        return "Fragment";
      case P:
        return "Profiler";
      case Q:
        return "StrictMode";
      case A:
        return "Suspense";
      case B:
        return "SuspenseList";
      case ol:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case sl:
          return "Portal";
        case $:
          return (l.displayName || "Context") + ".Provider";
        case zl:
          return (l._context.displayName || "Context") + ".Consumer";
        case ll:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case cl:
          return (
            (t = l.displayName || null), t !== null ? t : Ut(l.type) || "Memo"
          );
        case rl:
          (t = l._payload), (l = l._init);
          try {
            return Ut(l(t));
          } catch {}
      }
    return null;
  }
  var w = Array.isArray,
    g = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    j = x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    R = { pending: !1, data: null, method: null, action: null },
    il = [],
    d = -1;
  function N(l) {
    return { current: l };
  }
  function U(l) {
    0 > d || ((l.current = il[d]), (il[d] = null), d--);
  }
  function q(l, t) {
    d++, (il[d] = l.current), (l.current = t);
  }
  var K = N(null),
    fl = N(null),
    W = N(null),
    Jl = N(null);
  function Sl(l, t) {
    switch ((q(W, t), q(fl, l), q(K, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? rr(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          (t = rr(t)), (l = or(t, l));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    U(K), q(K, l);
  }
  function vl() {
    U(K), U(fl), U(W);
  }
  function ju(l) {
    l.memoizedState !== null && q(Jl, l);
    var t = K.current,
      a = or(t, l.type);
    t !== a && (q(fl, l), q(K, a));
  }
  function Ru(l) {
    fl.current === l && (U(K), U(fl)),
      Jl.current === l && (U(Jl), (_u._currentValue = R));
  }
  var bc = Object.prototype.hasOwnProperty,
    gc = f.unstable_scheduleCallback,
    _c = f.unstable_cancelCallback,
    Pr = f.unstable_shouldYield,
    lo = f.unstable_requestPaint,
    At = f.unstable_now,
    to = f.unstable_getCurrentPriorityLevel,
    Ki = f.unstable_ImmediatePriority,
    wi = f.unstable_UserBlockingPriority,
    Uu = f.unstable_NormalPriority,
    ao = f.unstable_LowPriority,
    Ji = f.unstable_IdlePriority,
    eo = f.log,
    uo = f.unstable_setDisableYieldValue,
    Ne = null,
    et = null;
  function $t(l) {
    if (
      (typeof eo == "function" && uo(l),
      et && typeof et.setStrictMode == "function")
    )
      try {
        et.setStrictMode(Ne, l);
      } catch {}
  }
  var ut = Math.clz32 ? Math.clz32 : fo,
    no = Math.log,
    co = Math.LN2;
  function fo(l) {
    return (l >>>= 0), l === 0 ? 32 : (31 - ((no(l) / co) | 0)) | 0;
  }
  var Hu = 256,
    qu = 4194304;
  function Sa(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Cu(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var s = e & 134217727;
    return (
      s !== 0
        ? ((e = s & ~n),
          e !== 0
            ? (u = Sa(e))
            : ((c &= s),
              c !== 0
                ? (u = Sa(c))
                : a || ((a = s & ~l), a !== 0 && (u = Sa(a)))))
        : ((s = e & ~n),
          s !== 0
            ? (u = Sa(s))
            : c !== 0
            ? (u = Sa(c))
            : a || ((a = e & ~l), a !== 0 && (u = Sa(a)))),
      u === 0
        ? 0
        : t !== 0 &&
          t !== u &&
          (t & n) === 0 &&
          ((n = u & -u),
          (a = t & -t),
          n >= a || (n === 32 && (a & 4194048) !== 0))
        ? t
        : u
    );
  }
  function Me(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function io(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ki() {
    var l = Hu;
    return (Hu <<= 1), (Hu & 4194048) === 0 && (Hu = 256), l;
  }
  function Wi() {
    var l = qu;
    return (qu <<= 1), (qu & 62914560) === 0 && (qu = 4194304), l;
  }
  function Sc(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function De(l, t) {
    (l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0));
  }
  function so(l, t, a, e, u, n) {
    var c = l.pendingLanes;
    (l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0);
    var s = l.entanglements,
      o = l.expirationTimes,
      b = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var T = 31 - ut(a),
        z = 1 << T;
      (s[T] = 0), (o[T] = -1);
      var _ = b[T];
      if (_ !== null)
        for (b[T] = null, T = 0; T < _.length; T++) {
          var p = _[T];
          p !== null && (p.lane &= -536870913);
        }
      a &= ~z;
    }
    e !== 0 && $i(l, e, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function $i(l, t, a) {
    (l.pendingLanes |= t), (l.suspendedLanes &= ~t);
    var e = 31 - ut(t);
    (l.entangledLanes |= t),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (a & 4194090));
  }
  function Fi(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var e = 31 - ut(a),
        u = 1 << e;
      (u & t) | (l[e] & t) && (l[e] |= t), (a &= ~u);
    }
  }
  function pc(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Ec(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ii() {
    var l = j.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : jr(l.type));
  }
  function xo(l, t) {
    var a = j.p;
    try {
      return (j.p = l), t();
    } finally {
      j.p = a;
    }
  }
  var Ft = Math.random().toString(36).slice(2),
    kl = "__reactFiber$" + Ft,
    Il = "__reactProps$" + Ft,
    Xa = "__reactContainer$" + Ft,
    Tc = "__reactEvents$" + Ft,
    ro = "__reactListeners$" + Ft,
    oo = "__reactHandles$" + Ft,
    Pi = "__reactResources$" + Ft,
    je = "__reactMarker$" + Ft;
  function Ac(l) {
    delete l[kl], delete l[Il], delete l[Tc], delete l[ro], delete l[oo];
  }
  function Qa(l) {
    var t = l[kl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Xa] || a[kl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = mr(l); l !== null; ) {
            if ((a = l[kl])) return a;
            l = mr(l);
          }
        return t;
      }
      (l = a), (a = l.parentNode);
    }
    return null;
  }
  function Za(l) {
    if ((l = l[kl] || l[Xa])) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Re(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(i(33));
  }
  function Va(l) {
    var t = l[Pi];
    return (
      t ||
        (t = l[Pi] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Gl(l) {
    l[je] = !0;
  }
  var l0 = new Set(),
    t0 = {};
  function pa(l, t) {
    La(l, t), La(l + "Capture", t);
  }
  function La(l, t) {
    for (t0[l] = t, l = 0; l < t.length; l++) l0.add(t[l]);
  }
  var ho = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    a0 = {},
    e0 = {};
  function vo(l) {
    return bc.call(e0, l)
      ? !0
      : bc.call(a0, l)
      ? !1
      : ho.test(l)
      ? (e0[l] = !0)
      : ((a0[l] = !0), !1);
  }
  function Bu(l, t, a) {
    if (vo(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Yu(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Ht(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
    }
  }
  var Oc, u0;
  function Ka(l) {
    if (Oc === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        (Oc = (t && t[1]) || ""),
          (u0 =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Oc +
      l +
      u0
    );
  }
  var zc = !1;
  function Nc(l, t) {
    if (!l || zc) return "";
    zc = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (p) {
                  var _ = p;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (p) {
                  _ = p;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                _ = p;
              }
              (z = l()) &&
                typeof z.catch == "function" &&
                z.catch(function () {});
            }
          } catch (p) {
            if (p && _ && typeof p.stack == "string") return [p.stack, _.stack];
          }
          return [null, null];
        },
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name"
      );
      u &&
        u.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = e.DetermineComponentFrameRoot(),
        c = n[0],
        s = n[1];
      if (c && s) {
        var o = c.split(`
`),
          b = s.split(`
`);
        for (
          u = e = 0;
          e < o.length && !o[e].includes("DetermineComponentFrameRoot");

        )
          e++;
        for (; u < b.length && !b[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (e === o.length || u === b.length)
          for (
            e = o.length - 1, u = b.length - 1;
            1 <= e && 0 <= u && o[e] !== b[u];

          )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (o[e] !== b[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || o[e] !== b[u])) {
                  var T =
                    `
` + o[e].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      T.includes("<anonymous>") &&
                      (T = T.replace("<anonymous>", l.displayName)),
                    T
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      (zc = !1), (Error.prepareStackTrace = a);
    }
    return (a = l ? l.displayName || l.name : "") ? Ka(a) : "";
  }
  function mo(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ka(l.type);
      case 16:
        return Ka("Lazy");
      case 13:
        return Ka("Suspense");
      case 19:
        return Ka("SuspenseList");
      case 0:
      case 15:
        return Nc(l.type, !1);
      case 11:
        return Nc(l.type.render, !1);
      case 1:
        return Nc(l.type, !0);
      case 31:
        return Ka("Activity");
      default:
        return "";
    }
  }
  function n0(l) {
    try {
      var t = "";
      do (t += mo(l)), (l = l.return);
      while (l);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function ot(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function c0(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function yo(l) {
    var t = c0(l) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t),
      e = "" + l[t];
    if (
      !l.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var u = a.get,
        n = a.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (c) {
            (e = "" + c), n.call(this, c);
          },
        }),
        Object.defineProperty(l, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return e;
          },
          setValue: function (c) {
            e = "" + c;
          },
          stopTracking: function () {
            (l._valueTracker = null), delete l[t];
          },
        }
      );
    }
  }
  function Gu(l) {
    l._valueTracker || (l._valueTracker = yo(l));
  }
  function f0(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      e = "";
    return (
      l && (e = c0(l) ? (l.checked ? "true" : "false") : l.value),
      (l = e),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Xu(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var bo = /[\n"\\]/g;
  function dt(l) {
    return l.replace(bo, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Mc(l, t, a, e, u, n, c, s) {
    (l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + ot(t))
          : l.value !== "" + ot(t) && (l.value = "" + ot(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? Dc(l, c, ot(t))
        : a != null
        ? Dc(l, c, ot(a))
        : e != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (l.name = "" + ot(s))
        : l.removeAttribute("name");
  }
  function i0(l, t, a, e, u, n, c, s) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) return;
      (a = a != null ? "" + ot(a) : ""),
        (t = t != null ? "" + ot(t) : a),
        s || t === l.value || (l.value = t),
        (l.defaultValue = t);
    }
    (e = e ?? u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (l.checked = s ? l.checked : !!e),
      (l.defaultChecked = !!e),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c);
  }
  function Dc(l, t, a) {
    (t === "number" && Xu(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function wa(l, t, a, e) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        (u = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== u && (l[a].selected = u),
          u && e && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + ot(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          (l[u].selected = !0), e && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function s0(l, t, a) {
    if (
      t != null &&
      ((t = "" + ot(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ot(a) : "";
  }
  function x0(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(i(92));
        if (w(e)) {
          if (1 < e.length) throw Error(i(93));
          e = e[0];
        }
        a = e;
      }
      a == null && (a = ""), (t = a);
    }
    (a = ot(t)),
      (l.defaultValue = a),
      (e = l.textContent),
      e === a && e !== "" && e !== null && (l.value = e);
  }
  function Ja(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var go = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function r0(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? e
        ? l.setProperty(t, "")
        : t === "float"
        ? (l.cssFloat = "")
        : (l[t] = "")
      : e
      ? l.setProperty(t, a)
      : typeof a != "number" || a === 0 || go.has(t)
      ? t === "float"
        ? (l.cssFloat = a)
        : (l[t] = ("" + a).trim())
      : (l[t] = a + "px");
  }
  function o0(l, t, a) {
    if (t != null && typeof t != "object") throw Error(i(62));
    if (((l = l.style), a != null)) {
      for (var e in a)
        !a.hasOwnProperty(e) ||
          (t != null && t.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? l.setProperty(e, "")
            : e === "float"
            ? (l.cssFloat = "")
            : (l[e] = ""));
      for (var u in t)
        (e = t[u]), t.hasOwnProperty(u) && a[u] !== e && r0(l, u, e);
    } else for (var n in t) t.hasOwnProperty(n) && r0(l, n, t[n]);
  }
  function jc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var _o = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    So =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Qu(l) {
    return So.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  var Rc = null;
  function Uc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var ka = null,
    Wa = null;
  function d0(l) {
    var t = Za(l);
    if (t && (l = t.stateNode)) {
      var a = l[Il] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (Mc(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + dt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Il] || null;
                if (!u) throw Error(i(90));
                Mc(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < a.length; t++)
              (e = a[t]), e.form === l.form && f0(e);
          }
          break l;
        case "textarea":
          s0(l, a.value, a.defaultValue);
          break l;
        case "select":
          (t = a.value), t != null && wa(l, !!a.multiple, t, !1);
      }
    }
  }
  var Hc = !1;
  function h0(l, t, a) {
    if (Hc) return l(t, a);
    Hc = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (
        ((Hc = !1),
        (ka !== null || Wa !== null) &&
          (zn(), ka && ((t = ka), (l = Wa), (Wa = ka = null), d0(t), l)))
      )
        for (t = 0; t < l.length; t++) d0(l[t]);
    }
  }
  function Ue(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Il] || null;
    if (e === null) return null;
    a = e[t];
    l: switch (t) {
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
        (e = !e.disabled) ||
          ((l = l.type),
          (e = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !e);
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(i(231, t, typeof a));
    return a;
  }
  var qt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    qc = !1;
  if (qt)
    try {
      var He = {};
      Object.defineProperty(He, "passive", {
        get: function () {
          qc = !0;
        },
      }),
        window.addEventListener("test", He, He),
        window.removeEventListener("test", He, He);
    } catch {
      qc = !1;
    }
  var It = null,
    Cc = null,
    Zu = null;
  function v0() {
    if (Zu) return Zu;
    var l,
      t = Cc,
      a = t.length,
      e,
      u = "value" in It ? It.value : It.textContent,
      n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++);
    var c = a - l;
    for (e = 1; e <= c && t[a - e] === u[n - e]; e++);
    return (Zu = u.slice(l, 1 < e ? 1 - e : void 0));
  }
  function Vu(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Lu() {
    return !0;
  }
  function m0() {
    return !1;
  }
  function Pl(l) {
    function t(a, e, u, n, c) {
      (this._reactName = a),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null);
      for (var s in l)
        l.hasOwnProperty(s) && ((a = l[s]), (this[s] = a ? a(n) : n[s]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Lu
          : m0),
        (this.isPropagationStopped = m0),
        this
      );
    }
    return (
      C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Lu));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Lu));
        },
        persist: function () {},
        isPersistent: Lu,
      }),
      t
    );
  }
  var Ea = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ku = Pl(Ea),
    qe = C({}, Ea, { view: 0, detail: 0 }),
    po = Pl(qe),
    Bc,
    Yc,
    Ce,
    wu = C({}, qe, {
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
      getModifierState: Xc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Ce &&
              (Ce && l.type === "mousemove"
                ? ((Bc = l.screenX - Ce.screenX), (Yc = l.screenY - Ce.screenY))
                : (Yc = Bc = 0),
              (Ce = l)),
            Bc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : Yc;
      },
    }),
    y0 = Pl(wu),
    Eo = C({}, wu, { dataTransfer: 0 }),
    To = Pl(Eo),
    Ao = C({}, qe, { relatedTarget: 0 }),
    Gc = Pl(Ao),
    Oo = C({}, Ea, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zo = Pl(Oo),
    No = C({}, Ea, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Mo = Pl(No),
    Do = C({}, Ea, { data: 0 }),
    b0 = Pl(Do),
    jo = {
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
    Ro = {
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
    Uo = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Ho(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = Uo[l])
      ? !!t[l]
      : !1;
  }
  function Xc() {
    return Ho;
  }
  var qo = C({}, qe, {
      key: function (l) {
        if (l.key) {
          var t = jo[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = Vu(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
          ? Ro[l.keyCode] || "Unidentified"
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
      getModifierState: Xc,
      charCode: function (l) {
        return l.type === "keypress" ? Vu(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Vu(l)
          : l.type === "keydown" || l.type === "keyup"
          ? l.keyCode
          : 0;
      },
    }),
    Co = Pl(qo),
    Bo = C({}, wu, {
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
    g0 = Pl(Bo),
    Yo = C({}, qe, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Xc,
    }),
    Go = Pl(Yo),
    Xo = C({}, Ea, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Qo = Pl(Xo),
    Zo = C({}, wu, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
          ? -l.wheelDeltaX
          : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
          ? -l.wheelDeltaY
          : "wheelDelta" in l
          ? -l.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Vo = Pl(Zo),
    Lo = C({}, Ea, { newState: 0, oldState: 0 }),
    Ko = Pl(Lo),
    wo = [9, 13, 27, 32],
    Qc = qt && "CompositionEvent" in window,
    Be = null;
  qt && "documentMode" in document && (Be = document.documentMode);
  var Jo = qt && "TextEvent" in window && !Be,
    _0 = qt && (!Qc || (Be && 8 < Be && 11 >= Be)),
    S0 = " ",
    p0 = !1;
  function E0(l, t) {
    switch (l) {
      case "keyup":
        return wo.indexOf(t.keyCode) !== -1;
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
  function T0(l) {
    return (l = l.detail), typeof l == "object" && "data" in l ? l.data : null;
  }
  var $a = !1;
  function ko(l, t) {
    switch (l) {
      case "compositionend":
        return T0(t);
      case "keypress":
        return t.which !== 32 ? null : ((p0 = !0), S0);
      case "textInput":
        return (l = t.data), l === S0 && p0 ? null : l;
      default:
        return null;
    }
  }
  function Wo(l, t) {
    if ($a)
      return l === "compositionend" || (!Qc && E0(l, t))
        ? ((l = v0()), (Zu = Cc = It = null), ($a = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return _0 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var $o = {
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
  function A0(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!$o[l.type] : t === "textarea";
  }
  function O0(l, t, a, e) {
    ka ? (Wa ? Wa.push(e) : (Wa = [e])) : (ka = e),
      (t = Un(t, "onChange")),
      0 < t.length &&
        ((a = new Ku("onChange", "change", null, a, e)),
        l.push({ event: a, listeners: t }));
  }
  var Ye = null,
    Ge = null;
  function Fo(l) {
    cr(l, 0);
  }
  function Ju(l) {
    var t = Re(l);
    if (f0(t)) return l;
  }
  function z0(l, t) {
    if (l === "change") return t;
  }
  var N0 = !1;
  if (qt) {
    var Zc;
    if (qt) {
      var Vc = "oninput" in document;
      if (!Vc) {
        var M0 = document.createElement("div");
        M0.setAttribute("oninput", "return;"),
          (Vc = typeof M0.oninput == "function");
      }
      Zc = Vc;
    } else Zc = !1;
    N0 = Zc && (!document.documentMode || 9 < document.documentMode);
  }
  function D0() {
    Ye && (Ye.detachEvent("onpropertychange", j0), (Ge = Ye = null));
  }
  function j0(l) {
    if (l.propertyName === "value" && Ju(Ge)) {
      var t = [];
      O0(t, Ge, l, Uc(l)), h0(Fo, t);
    }
  }
  function Io(l, t, a) {
    l === "focusin"
      ? (D0(), (Ye = t), (Ge = a), Ye.attachEvent("onpropertychange", j0))
      : l === "focusout" && D0();
  }
  function Po(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ju(Ge);
  }
  function l1(l, t) {
    if (l === "click") return Ju(t);
  }
  function t1(l, t) {
    if (l === "input" || l === "change") return Ju(t);
  }
  function a1(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var nt = typeof Object.is == "function" ? Object.is : a1;
  function Xe(l, t) {
    if (nt(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!bc.call(t, u) || !nt(l[u], t[u])) return !1;
    }
    return !0;
  }
  function R0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function U0(l, t) {
    var a = R0(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (((e = l + a.textContent.length), l <= t && e >= t))
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = R0(a);
    }
  }
  function H0(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? H0(l, t.parentNode)
        : "contains" in l
        ? l.contains(t)
        : l.compareDocumentPosition
        ? !!(l.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function q0(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Xu(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Xu(l.document);
    }
    return t;
  }
  function Lc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var e1 = qt && "documentMode" in document && 11 >= document.documentMode,
    Fa = null,
    Kc = null,
    Qe = null,
    wc = !1;
  function C0(l, t, a) {
    var e =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    wc ||
      Fa == null ||
      Fa !== Xu(e) ||
      ((e = Fa),
      "selectionStart" in e && Lc(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (Qe && Xe(Qe, e)) ||
        ((Qe = e),
        (e = Un(Kc, "onSelect")),
        0 < e.length &&
          ((t = new Ku("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: e }),
          (t.target = Fa))));
  }
  function Ta(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Ia = {
      animationend: Ta("Animation", "AnimationEnd"),
      animationiteration: Ta("Animation", "AnimationIteration"),
      animationstart: Ta("Animation", "AnimationStart"),
      transitionrun: Ta("Transition", "TransitionRun"),
      transitionstart: Ta("Transition", "TransitionStart"),
      transitioncancel: Ta("Transition", "TransitionCancel"),
      transitionend: Ta("Transition", "TransitionEnd"),
    },
    Jc = {},
    B0 = {};
  qt &&
    ((B0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ia.animationend.animation,
      delete Ia.animationiteration.animation,
      delete Ia.animationstart.animation),
    "TransitionEvent" in window || delete Ia.transitionend.transition);
  function Aa(l) {
    if (Jc[l]) return Jc[l];
    if (!Ia[l]) return l;
    var t = Ia[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in B0) return (Jc[l] = t[a]);
    return l;
  }
  var Y0 = Aa("animationend"),
    G0 = Aa("animationiteration"),
    X0 = Aa("animationstart"),
    u1 = Aa("transitionrun"),
    n1 = Aa("transitionstart"),
    c1 = Aa("transitioncancel"),
    Q0 = Aa("transitionend"),
    Z0 = new Map(),
    kc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  kc.push("scrollEnd");
  function St(l, t) {
    Z0.set(l, t), pa(t, [l]);
  }
  var V0 = new WeakMap();
  function ht(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = V0.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: n0(t) }), V0.set(l, t), t);
    }
    return { value: l, source: t, stack: n0(t) };
  }
  var vt = [],
    Pa = 0,
    Wc = 0;
  function ku() {
    for (var l = Pa, t = (Wc = Pa = 0); t < l; ) {
      var a = vt[t];
      vt[t++] = null;
      var e = vt[t];
      vt[t++] = null;
      var u = vt[t];
      vt[t++] = null;
      var n = vt[t];
      if (((vt[t++] = null), e !== null && u !== null)) {
        var c = e.pending;
        c === null ? (u.next = u) : ((u.next = c.next), (c.next = u)),
          (e.pending = u);
      }
      n !== 0 && L0(a, u, n);
    }
  }
  function Wu(l, t, a, e) {
    (vt[Pa++] = l),
      (vt[Pa++] = t),
      (vt[Pa++] = a),
      (vt[Pa++] = e),
      (Wc |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e);
  }
  function $c(l, t, a, e) {
    return Wu(l, t, a, e), $u(l);
  }
  function le(l, t) {
    return Wu(l, null, null, t), $u(l);
  }
  function L0(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      (n.childLanes |= a),
        (e = n.alternate),
        e !== null && (e.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return);
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - ut(a)),
          (l = n.hiddenUpdates),
          (e = l[u]),
          e === null ? (l[u] = [t]) : e.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function $u(l) {
    if (50 < ou) throw ((ou = 0), (ei = null), Error(i(185)));
    for (var t = l.return; t !== null; ) (l = t), (t = l.return);
    return l.tag === 3 ? l.stateNode : null;
  }
  var te = {};
  function f1(l, t, a, e) {
    (this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function ct(l, t, a, e) {
    return new f1(l, t, a, e);
  }
  function Fc(l) {
    return (l = l.prototype), !(!l || !l.isReactComponent);
  }
  function Ct(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = ct(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function K0(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Fu(l, t, a, e, u, n) {
    var c = 0;
    if (((e = l), typeof l == "function")) Fc(l) && (c = 1);
    else if (typeof l == "string")
      c = sd(l, a, K.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
        ? 27
        : 5;
    else
      l: switch (l) {
        case ol:
          return (l = ct(31, a, t, u)), (l.elementType = ol), (l.lanes = n), l;
        case I:
          return Oa(a.children, u, n, t);
        case Q:
          (c = 8), (u |= 24);
          break;
        case P:
          return (
            (l = ct(12, a, t, u | 2)), (l.elementType = P), (l.lanes = n), l
          );
        case A:
          return (l = ct(13, a, t, u)), (l.elementType = A), (l.lanes = n), l;
        case B:
          return (l = ct(19, a, t, u)), (l.elementType = B), (l.lanes = n), l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case El:
              case $:
                c = 10;
                break l;
              case zl:
                c = 9;
                break l;
              case ll:
                c = 11;
                break l;
              case cl:
                c = 14;
                break l;
              case rl:
                (c = 16), (e = null);
                break l;
            }
          (c = 29),
            (a = Error(i(130, l === null ? "null" : typeof l, ""))),
            (e = null);
      }
    return (
      (t = ct(c, a, t, u)), (t.elementType = l), (t.type = e), (t.lanes = n), t
    );
  }
  function Oa(l, t, a, e) {
    return (l = ct(7, l, e, t)), (l.lanes = a), l;
  }
  function Ic(l, t, a) {
    return (l = ct(6, l, null, t)), (l.lanes = a), l;
  }
  function Pc(l, t, a) {
    return (
      (t = ct(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var ae = [],
    ee = 0,
    Iu = null,
    Pu = 0,
    mt = [],
    yt = 0,
    za = null,
    Bt = 1,
    Yt = "";
  function Na(l, t) {
    (ae[ee++] = Pu), (ae[ee++] = Iu), (Iu = l), (Pu = t);
  }
  function w0(l, t, a) {
    (mt[yt++] = Bt), (mt[yt++] = Yt), (mt[yt++] = za), (za = l);
    var e = Bt;
    l = Yt;
    var u = 32 - ut(e) - 1;
    (e &= ~(1 << u)), (a += 1);
    var n = 32 - ut(t) + u;
    if (30 < n) {
      var c = u - (u % 5);
      (n = (e & ((1 << c) - 1)).toString(32)),
        (e >>= c),
        (u -= c),
        (Bt = (1 << (32 - ut(t) + u)) | (a << u) | e),
        (Yt = n + l);
    } else (Bt = (1 << n) | (a << u) | e), (Yt = l);
  }
  function lf(l) {
    l.return !== null && (Na(l, 1), w0(l, 1, 0));
  }
  function tf(l) {
    for (; l === Iu; )
      (Iu = ae[--ee]), (ae[ee] = null), (Pu = ae[--ee]), (ae[ee] = null);
    for (; l === za; )
      (za = mt[--yt]),
        (mt[yt] = null),
        (Yt = mt[--yt]),
        (mt[yt] = null),
        (Bt = mt[--yt]),
        (mt[yt] = null);
  }
  var Fl = null,
    Ml = null,
    hl = !1,
    Ma = null,
    Ot = !1,
    af = Error(i(519));
  function Da(l) {
    var t = Error(i(418, ""));
    throw (Le(ht(t, l)), af);
  }
  function J0(l) {
    var t = l.stateNode,
      a = l.type,
      e = l.memoizedProps;
    switch (((t[kl] = l), (t[Il] = e), a)) {
      case "dialog":
        nl("cancel", t), nl("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        nl("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < hu.length; a++) nl(hu[a], t);
        break;
      case "source":
        nl("error", t);
        break;
      case "img":
      case "image":
      case "link":
        nl("error", t), nl("load", t);
        break;
      case "details":
        nl("toggle", t);
        break;
      case "input":
        nl("invalid", t),
          i0(
            t,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0
          ),
          Gu(t);
        break;
      case "select":
        nl("invalid", t);
        break;
      case "textarea":
        nl("invalid", t), x0(t, e.value, e.defaultValue, e.children), Gu(t);
    }
    (a = e.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      e.suppressHydrationWarning === !0 ||
      xr(t.textContent, a)
        ? (e.popover != null && (nl("beforetoggle", t), nl("toggle", t)),
          e.onScroll != null && nl("scroll", t),
          e.onScrollEnd != null && nl("scrollend", t),
          e.onClick != null && (t.onclick = Hn),
          (t = !0))
        : (t = !1),
      t || Da(l);
  }
  function k0(l) {
    for (Fl = l.return; Fl; )
      switch (Fl.tag) {
        case 5:
        case 13:
          Ot = !1;
          return;
        case 27:
        case 3:
          Ot = !0;
          return;
        default:
          Fl = Fl.return;
      }
  }
  function Ze(l) {
    if (l !== Fl) return !1;
    if (!hl) return k0(l), (hl = !0), !1;
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || gi(l.type, l.memoizedProps))),
        (a = !a)),
      a && Ml && Da(l),
      k0(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(i(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (((a = l.data), a === "/$")) {
              if (t === 0) {
                Ml = Et(l.nextSibling);
                break l;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          l = l.nextSibling;
        }
        Ml = null;
      }
    } else
      t === 27
        ? ((t = Ml), ha(l.type) ? ((l = Ei), (Ei = null), (Ml = l)) : (Ml = t))
        : (Ml = Fl ? Et(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ve() {
    (Ml = Fl = null), (hl = !1);
  }
  function W0() {
    var l = Ma;
    return (
      l !== null &&
        (at === null ? (at = l) : at.push.apply(at, l), (Ma = null)),
      l
    );
  }
  function Le(l) {
    Ma === null ? (Ma = [l]) : Ma.push(l);
  }
  var ef = N(null),
    ja = null,
    Gt = null;
  function Pt(l, t, a) {
    q(ef, t._currentValue), (t._currentValue = a);
  }
  function Xt(l) {
    (l._currentValue = ef.current), U(ef);
  }
  function uf(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
          : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function nf(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var s = n;
          n = u;
          for (var o = 0; o < t.length; o++)
            if (s.context === t[o]) {
              (n.lanes |= a),
                (s = n.alternate),
                s !== null && (s.lanes |= a),
                uf(n.return, a, l),
                e || (c = null);
              break l;
            }
          n = s.next;
        }
      } else if (u.tag === 18) {
        if (((c = u.return), c === null)) throw Error(i(341));
        (c.lanes |= a),
          (n = c.alternate),
          n !== null && (n.lanes |= a),
          uf(c, a, l),
          (c = null);
      } else c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((u = c.sibling), u !== null)) {
            (u.return = c.return), (c = u);
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function Ke(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(i(387));
        if (((c = c.memoizedProps), c !== null)) {
          var s = u.type;
          nt(u.pendingProps.value, c.value) ||
            (l !== null ? l.push(s) : (l = [s]));
        }
      } else if (u === Jl.current) {
        if (((c = u.alternate), c === null)) throw Error(i(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(_u) : (l = [_u]));
      }
      u = u.return;
    }
    l !== null && nf(t, l, a, e), (t.flags |= 262144);
  }
  function ln(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!nt(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Ra(l) {
    (ja = l),
      (Gt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null);
  }
  function Wl(l) {
    return $0(ja, l);
  }
  function tn(l, t) {
    return ja === null && Ra(l), $0(l, t);
  }
  function $0(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Gt === null)) {
      if (l === null) throw Error(i(308));
      (Gt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288);
    } else Gt = Gt.next = t;
    return a;
  }
  var i1 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, e) {
                  l.push(e);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                });
            };
          },
    s1 = f.unstable_scheduleCallback,
    x1 = f.unstable_NormalPriority,
    Bl = {
      $$typeof: $,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function cf() {
    return { controller: new i1(), data: new Map(), refCount: 0 };
  }
  function we(l) {
    l.refCount--,
      l.refCount === 0 &&
        s1(x1, function () {
          l.controller.abort();
        });
  }
  var Je = null,
    ff = 0,
    ue = 0,
    ne = null;
  function r1(l, t) {
    if (Je === null) {
      var a = (Je = []);
      (ff = 0),
        (ue = xi()),
        (ne = {
          status: "pending",
          value: void 0,
          then: function (e) {
            a.push(e);
          },
        });
    }
    return ff++, t.then(F0, F0), t;
  }
  function F0() {
    if (--ff === 0 && Je !== null) {
      ne !== null && (ne.status = "fulfilled");
      var l = Je;
      (Je = null), (ue = 0), (ne = null);
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function o1(l, t) {
    var a = [],
      e = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      l.then(
        function () {
          (e.status = "fulfilled"), (e.value = t);
          for (var u = 0; u < a.length; u++) (0, a[u])(t);
        },
        function (u) {
          for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        }
      ),
      e
    );
  }
  var I0 = g.S;
  g.S = function (l, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      r1(l, t),
      I0 !== null && I0(l, t);
  };
  var Ua = N(null);
  function sf() {
    var l = Ua.current;
    return l !== null ? l : Tl.pooledCache;
  }
  function an(l, t) {
    t === null ? q(Ua, Ua.current) : q(Ua, t.pool);
  }
  function P0() {
    var l = sf();
    return l === null ? null : { parent: Bl._currentValue, pool: l };
  }
  var ke = Error(i(460)),
    ls = Error(i(474)),
    en = Error(i(542)),
    xf = { then: function () {} };
  function ts(l) {
    return (l = l.status), l === "fulfilled" || l === "rejected";
  }
  function un() {}
  function as(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(un, un), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), us(l), l);
      default:
        if (typeof t.status == "string") t.then(un, un);
        else {
          if (((l = Tl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(i(482));
          (l = t),
            (l.status = "pending"),
            l.then(
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "fulfilled"), (u.value = e);
                }
              },
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  (u.status = "rejected"), (u.reason = e);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), us(l), l);
        }
        throw ((We = t), ke);
    }
  }
  var We = null;
  function es() {
    if (We === null) throw Error(i(459));
    var l = We;
    return (We = null), l;
  }
  function us(l) {
    if (l === ke || l === en) throw Error(i(483));
  }
  var la = !1;
  function rf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function of(l, t) {
    (l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        });
  }
  function ta(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function aa(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (ml & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (e.pending = t),
        (t = $u(l)),
        L0(l, null, a),
        t
      );
    }
    return Wu(l, e, t, a), $u(l);
  }
  function $e(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var e = t.lanes;
      (e &= l.pendingLanes), (a |= e), (t.lanes = a), Fi(l, a);
    }
  }
  function df(l, t) {
    var a = l.updateQueue,
      e = l.alternate;
    if (e !== null && ((e = e.updateQueue), a === e)) {
      var u = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          n === null ? (u = n = c) : (n = n.next = c), (a = a.next);
        } while (a !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      (a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (l.updateQueue = a);
      return;
    }
    (l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t);
  }
  var hf = !1;
  function Fe() {
    if (hf) {
      var l = ne;
      if (l !== null) throw l;
    }
  }
  function Ie(l, t, a, e) {
    hf = !1;
    var u = l.updateQueue;
    la = !1;
    var n = u.firstBaseUpdate,
      c = u.lastBaseUpdate,
      s = u.shared.pending;
    if (s !== null) {
      u.shared.pending = null;
      var o = s,
        b = o.next;
      (o.next = null), c === null ? (n = b) : (c.next = b), (c = o);
      var T = l.alternate;
      T !== null &&
        ((T = T.updateQueue),
        (s = T.lastBaseUpdate),
        s !== c &&
          (s === null ? (T.firstBaseUpdate = b) : (s.next = b),
          (T.lastBaseUpdate = o)));
    }
    if (n !== null) {
      var z = u.baseState;
      (c = 0), (T = b = o = null), (s = n);
      do {
        var _ = s.lane & -536870913,
          p = _ !== s.lane;
        if (p ? (xl & _) === _ : (e & _) === _) {
          _ !== 0 && _ === ue && (hf = !0),
            T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                });
          l: {
            var F = l,
              J = s;
            _ = t;
            var _l = a;
            switch (J.tag) {
              case 1:
                if (((F = J.payload), typeof F == "function")) {
                  z = F.call(_l, z, _);
                  break l;
                }
                z = F;
                break l;
              case 3:
                F.flags = (F.flags & -65537) | 128;
              case 0:
                if (
                  ((F = J.payload),
                  (_ = typeof F == "function" ? F.call(_l, z, _) : F),
                  _ == null)
                )
                  break l;
                z = C({}, z, _);
                break l;
              case 2:
                la = !0;
            }
          }
          (_ = s.callback),
            _ !== null &&
              ((l.flags |= 64),
              p && (l.flags |= 8192),
              (p = u.callbacks),
              p === null ? (u.callbacks = [_]) : p.push(_));
        } else
          (p = {
            lane: _,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            T === null ? ((b = T = p), (o = z)) : (T = T.next = p),
            (c |= _);
        if (((s = s.next), s === null)) {
          if (((s = u.shared.pending), s === null)) break;
          (p = s),
            (s = p.next),
            (p.next = null),
            (u.lastBaseUpdate = p),
            (u.shared.pending = null);
        }
      } while (!0);
      T === null && (o = z),
        (u.baseState = o),
        (u.firstBaseUpdate = b),
        (u.lastBaseUpdate = T),
        n === null && (u.shared.lanes = 0),
        (xa |= c),
        (l.lanes = c),
        (l.memoizedState = z);
    }
  }
  function ns(l, t) {
    if (typeof l != "function") throw Error(i(191, l));
    l.call(t);
  }
  function cs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) ns(a[l], t);
  }
  var ce = N(null),
    nn = N(0);
  function fs(l, t) {
    (l = Jt), q(nn, l), q(ce, t), (Jt = l | t.baseLanes);
  }
  function vf() {
    q(nn, Jt), q(ce, ce.current);
  }
  function mf() {
    (Jt = nn.current), U(ce), U(nn);
  }
  var ea = 0,
    al = null,
    bl = null,
    Hl = null,
    cn = !1,
    fe = !1,
    Ha = !1,
    fn = 0,
    Pe = 0,
    ie = null,
    d1 = 0;
  function Rl() {
    throw Error(i(321));
  }
  function yf(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!nt(l[a], t[a])) return !1;
    return !0;
  }
  function bf(l, t, a, e, u, n) {
    return (
      (ea = n),
      (al = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (g.H = l === null || l.memoizedState === null ? Ls : Ks),
      (Ha = !1),
      (n = a(e, u)),
      (Ha = !1),
      fe && (n = ss(t, a, e, u)),
      is(l),
      n
    );
  }
  function is(l) {
    g.H = hn;
    var t = bl !== null && bl.next !== null;
    if (((ea = 0), (Hl = bl = al = null), (cn = !1), (Pe = 0), (ie = null), t))
      throw Error(i(300));
    l === null ||
      Xl ||
      ((l = l.dependencies), l !== null && ln(l) && (Xl = !0));
  }
  function ss(l, t, a, e) {
    al = l;
    var u = 0;
    do {
      if ((fe && (ie = null), (Pe = 0), (fe = !1), 25 <= u))
        throw Error(i(301));
      if (((u += 1), (Hl = bl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        (n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0);
      }
      (g.H = _1), (n = t(a, e));
    } while (fe);
    return n;
  }
  function h1() {
    var l = g.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? lu(t) : t),
      (l = l.useState()[0]),
      (bl !== null ? bl.memoizedState : null) !== l && (al.flags |= 1024),
      t
    );
  }
  function gf() {
    var l = fn !== 0;
    return (fn = 0), l;
  }
  function _f(l, t, a) {
    (t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a);
  }
  function Sf(l) {
    if (cn) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), (l = l.next);
      }
      cn = !1;
    }
    (ea = 0), (Hl = bl = al = null), (fe = !1), (Pe = fn = 0), (ie = null);
  }
  function lt() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Hl === null ? (al.memoizedState = Hl = l) : (Hl = Hl.next = l), Hl;
  }
  function ql() {
    if (bl === null) {
      var l = al.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = bl.next;
    var t = Hl === null ? al.memoizedState : Hl.next;
    if (t !== null) (Hl = t), (bl = l);
    else {
      if (l === null)
        throw al.alternate === null ? Error(i(467)) : Error(i(310));
      (bl = l),
        (l = {
          memoizedState: bl.memoizedState,
          baseState: bl.baseState,
          baseQueue: bl.baseQueue,
          queue: bl.queue,
          next: null,
        }),
        Hl === null ? (al.memoizedState = Hl = l) : (Hl = Hl.next = l);
    }
    return Hl;
  }
  function pf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function lu(l) {
    var t = Pe;
    return (
      (Pe += 1),
      ie === null && (ie = []),
      (l = as(ie, l, t)),
      (t = al),
      (Hl === null ? t.memoizedState : Hl.next) === null &&
        ((t = t.alternate),
        (g.H = t === null || t.memoizedState === null ? Ls : Ks)),
      l
    );
  }
  function sn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return lu(l);
      if (l.$$typeof === $) return Wl(l);
    }
    throw Error(i(438, String(l)));
  }
  function Ef(l) {
    var t = null,
      a = al.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var e = al.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (t = {
              data: e.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = pf()), (al.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = jl;
    return t.index++, a;
  }
  function Qt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function xn(l) {
    var t = ql();
    return Tf(t, bl, l);
  }
  function Tf(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(i(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        (u.next = n.next), (n.next = c);
      }
      (t.baseQueue = u = n), (e.pending = null);
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var s = (c = null),
        o = null,
        b = t,
        T = !1;
      do {
        var z = b.lane & -536870913;
        if (z !== b.lane ? (xl & z) === z : (ea & z) === z) {
          var _ = b.revertLane;
          if (_ === 0)
            o !== null &&
              (o = o.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: b.action,
                  hasEagerState: b.hasEagerState,
                  eagerState: b.eagerState,
                  next: null,
                }),
              z === ue && (T = !0);
          else if ((ea & _) === _) {
            (b = b.next), _ === ue && (T = !0);
            continue;
          } else
            (z = {
              lane: 0,
              revertLane: b.revertLane,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null,
            }),
              o === null ? ((s = o = z), (c = n)) : (o = o.next = z),
              (al.lanes |= _),
              (xa |= _);
          (z = b.action),
            Ha && a(n, z),
            (n = b.hasEagerState ? b.eagerState : a(n, z));
        } else
          (_ = {
            lane: z,
            revertLane: b.revertLane,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null,
          }),
            o === null ? ((s = o = _), (c = n)) : (o = o.next = _),
            (al.lanes |= z),
            (xa |= z);
        b = b.next;
      } while (b !== null && b !== t);
      if (
        (o === null ? (c = n) : (o.next = s),
        !nt(n, l.memoizedState) && ((Xl = !0), T && ((a = ne), a !== null)))
      )
        throw a;
      (l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = o),
        (e.lastRenderedState = n);
    }
    return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function Af(l) {
    var t = ql(),
      a = t.queue;
    if (a === null) throw Error(i(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch,
      u = a.pending,
      n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var c = (u = u.next);
      do (n = l(n, c.action)), (c = c.next);
      while (c !== u);
      nt(n, t.memoizedState) || (Xl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n);
    }
    return [n, e];
  }
  function xs(l, t, a) {
    var e = al,
      u = ql(),
      n = hl;
    if (n) {
      if (a === void 0) throw Error(i(407));
      a = a();
    } else a = t();
    var c = !nt((bl || u).memoizedState, a);
    c && ((u.memoizedState = a), (Xl = !0)), (u = u.queue);
    var s = ds.bind(null, e, u, l);
    if (
      (tu(2048, 8, s, [l]),
      u.getSnapshot !== t || c || (Hl !== null && Hl.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        se(9, rn(), os.bind(null, e, u, a, t), null),
        Tl === null)
      )
        throw Error(i(349));
      n || (ea & 124) !== 0 || rs(e, t, a);
    }
    return a;
  }
  function rs(l, t, a) {
    (l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = al.updateQueue),
      t === null
        ? ((t = pf()), (al.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l));
  }
  function os(l, t, a, e) {
    (t.value = a), (t.getSnapshot = e), hs(t) && vs(l);
  }
  function ds(l, t, a) {
    return a(function () {
      hs(t) && vs(l);
    });
  }
  function hs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !nt(l, a);
    } catch {
      return !0;
    }
  }
  function vs(l) {
    var t = le(l, 2);
    t !== null && rt(t, l, 2);
  }
  function Of(l) {
    var t = lt();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), Ha)) {
        $t(!0);
        try {
          a();
        } finally {
          $t(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function ms(l, t, a, e) {
    return (l.baseState = a), Tf(l, bl, typeof e == "function" ? e : Qt);
  }
  function v1(l, t, a, e, u) {
    if (dn(l)) throw Error(i(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      g.T !== null ? a(!0) : (n.isTransition = !1),
        e(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), ys(t, n))
          : ((n.next = a.next), (t.pending = a.next = n));
    }
  }
  function ys(l, t) {
    var a = t.action,
      e = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = g.T,
        c = {};
      g.T = c;
      try {
        var s = a(u, e),
          o = g.S;
        o !== null && o(c, s), bs(l, t, s);
      } catch (b) {
        zf(l, t, b);
      } finally {
        g.T = n;
      }
    } else
      try {
        (n = a(u, e)), bs(l, t, n);
      } catch (b) {
        zf(l, t, b);
      }
  }
  function bs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (e) {
            gs(l, t, e);
          },
          function (e) {
            return zf(l, t, e);
          }
        )
      : gs(l, t, a);
  }
  function gs(l, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      _s(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), ys(l, a)));
  }
  function zf(l, t, a) {
    var e = l.pending;
    if (((l.pending = null), e !== null)) {
      e = e.next;
      do (t.status = "rejected"), (t.reason = a), _s(t), (t = t.next);
      while (t !== e);
    }
    l.action = null;
  }
  function _s(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Ss(l, t) {
    return t;
  }
  function ps(l, t) {
    if (hl) {
      var a = Tl.formState;
      if (a !== null) {
        l: {
          var e = al;
          if (hl) {
            if (Ml) {
              t: {
                for (var u = Ml, n = Ot; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = Et(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                (n = u.data), (u = n === "F!" || n === "F" ? u : null);
              }
              if (u) {
                (Ml = Et(u.nextSibling)), (e = u.data === "F!");
                break l;
              }
            }
            Da(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return (
      (a = lt()),
      (a.memoizedState = a.baseState = t),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ss,
        lastRenderedState: t,
      }),
      (a.queue = e),
      (a = Qs.bind(null, al, e)),
      (e.dispatch = a),
      (e = Of(!1)),
      (n = Rf.bind(null, al, !1, e.queue)),
      (e = lt()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (a = v1.bind(null, al, u, n, a)),
      (u.dispatch = a),
      (e.memoizedState = l),
      [t, a, !1]
    );
  }
  function Es(l) {
    var t = ql();
    return Ts(t, bl, l);
  }
  function Ts(l, t, a) {
    if (
      ((t = Tf(l, t, Ss)[0]),
      (l = xn(Qt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var e = lu(t);
      } catch (c) {
        throw c === ke ? en : c;
      }
    else e = t;
    t = ql();
    var u = t.queue,
      n = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((al.flags |= 2048), se(9, rn(), m1.bind(null, u, a), null)),
      [e, n, l]
    );
  }
  function m1(l, t) {
    l.action = t;
  }
  function As(l) {
    var t = ql(),
      a = bl;
    if (a !== null) return Ts(t, a, l);
    ql(), (t = t.memoizedState), (a = ql());
    var e = a.queue.dispatch;
    return (a.memoizedState = l), [t, e, !1];
  }
  function se(l, t, a, e) {
    return (
      (l = { tag: l, create: a, deps: e, inst: t, next: null }),
      (t = al.updateQueue),
      t === null && ((t = pf()), (al.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((e = a.next), (a.next = l), (l.next = e), (t.lastEffect = l)),
      l
    );
  }
  function rn() {
    return { destroy: void 0, resource: void 0 };
  }
  function Os() {
    return ql().memoizedState;
  }
  function on(l, t, a, e) {
    var u = lt();
    (e = e === void 0 ? null : e),
      (al.flags |= l),
      (u.memoizedState = se(1 | t, rn(), a, e));
  }
  function tu(l, t, a, e) {
    var u = ql();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    bl !== null && e !== null && yf(e, bl.memoizedState.deps)
      ? (u.memoizedState = se(t, n, a, e))
      : ((al.flags |= l), (u.memoizedState = se(1 | t, n, a, e)));
  }
  function zs(l, t) {
    on(8390656, 8, l, t);
  }
  function Ns(l, t) {
    tu(2048, 8, l, t);
  }
  function Ms(l, t) {
    return tu(4, 2, l, t);
  }
  function Ds(l, t) {
    return tu(4, 4, l, t);
  }
  function js(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function Rs(l, t, a) {
    (a = a != null ? a.concat([l]) : null), tu(4, 4, js.bind(null, t, l), a);
  }
  function Nf() {}
  function Us(l, t) {
    var a = ql();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && yf(t, e[1]) ? e[0] : ((a.memoizedState = [l, t]), l);
  }
  function Hs(l, t) {
    var a = ql();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && yf(t, e[1])) return e[0];
    if (((e = l()), Ha)) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return (a.memoizedState = [e, t]), e;
  }
  function Mf(l, t, a) {
    return a === void 0 || (ea & 1073741824) !== 0
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = Bx()), (al.lanes |= l), (xa |= l), a);
  }
  function qs(l, t, a, e) {
    return nt(a, t)
      ? a
      : ce.current !== null
      ? ((l = Mf(l, a, e)), nt(l, t) || (Xl = !0), l)
      : (ea & 42) === 0
      ? ((Xl = !0), (l.memoizedState = a))
      : ((l = Bx()), (al.lanes |= l), (xa |= l), t);
  }
  function Cs(l, t, a, e, u) {
    var n = j.p;
    j.p = n !== 0 && 8 > n ? n : 8;
    var c = g.T,
      s = {};
    (g.T = s), Rf(l, !1, t, a);
    try {
      var o = u(),
        b = g.S;
      if (
        (b !== null && b(s, o),
        o !== null && typeof o == "object" && typeof o.then == "function")
      ) {
        var T = o1(o, e);
        au(l, t, T, xt(l));
      } else au(l, t, e, xt(l));
    } catch (z) {
      au(l, t, { then: function () {}, status: "rejected", reason: z }, xt());
    } finally {
      (j.p = n), (g.T = c);
    }
  }
  function y1() {}
  function Df(l, t, a, e) {
    if (l.tag !== 5) throw Error(i(476));
    var u = Bs(l).queue;
    Cs(
      l,
      u,
      t,
      R,
      a === null
        ? y1
        : function () {
            return Ys(l), a(e);
          }
    );
  }
  function Bs(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: R,
      baseState: R,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qt,
        lastRenderedState: R,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Qt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function Ys(l) {
    var t = Bs(l).next.queue;
    au(l, t, {}, xt());
  }
  function jf() {
    return Wl(_u);
  }
  function Gs() {
    return ql().memoizedState;
  }
  function Xs() {
    return ql().memoizedState;
  }
  function b1(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = xt();
          l = ta(a);
          var e = aa(t, l, a);
          e !== null && (rt(e, t, a), $e(e, t, a)),
            (t = { cache: cf() }),
            (l.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function g1(l, t, a) {
    var e = xt();
    (a = {
      lane: e,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      dn(l)
        ? Zs(t, a)
        : ((a = $c(l, t, a, e)), a !== null && (rt(a, l, e), Vs(a, t, e)));
  }
  function Qs(l, t, a) {
    var e = xt();
    au(l, t, a, e);
  }
  function au(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (dn(l)) Zs(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            s = n(c, a);
          if (((u.hasEagerState = !0), (u.eagerState = s), nt(s, c)))
            return Wu(l, t, u, 0), Tl === null && ku(), !1;
        } catch {
        } finally {
        }
      if (((a = $c(l, t, u, e)), a !== null))
        return rt(a, l, e), Vs(a, t, e), !0;
    }
    return !1;
  }
  function Rf(l, t, a, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: xi(),
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      dn(l))
    ) {
      if (t) throw Error(i(479));
    } else (t = $c(l, a, e, 2)), t !== null && rt(t, l, 2);
  }
  function dn(l) {
    var t = l.alternate;
    return l === al || (t !== null && t === al);
  }
  function Zs(l, t) {
    fe = cn = !0;
    var a = l.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t);
  }
  function Vs(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      (e &= l.pendingLanes), (a |= e), (t.lanes = a), Fi(l, a);
    }
  }
  var hn = {
      readContext: Wl,
      use: sn,
      useCallback: Rl,
      useContext: Rl,
      useEffect: Rl,
      useImperativeHandle: Rl,
      useLayoutEffect: Rl,
      useInsertionEffect: Rl,
      useMemo: Rl,
      useReducer: Rl,
      useRef: Rl,
      useState: Rl,
      useDebugValue: Rl,
      useDeferredValue: Rl,
      useTransition: Rl,
      useSyncExternalStore: Rl,
      useId: Rl,
      useHostTransitionStatus: Rl,
      useFormState: Rl,
      useActionState: Rl,
      useOptimistic: Rl,
      useMemoCache: Rl,
      useCacheRefresh: Rl,
    },
    Ls = {
      readContext: Wl,
      use: sn,
      useCallback: function (l, t) {
        return (lt().memoizedState = [l, t === void 0 ? null : t]), l;
      },
      useContext: Wl,
      useEffect: zs,
      useImperativeHandle: function (l, t, a) {
        (a = a != null ? a.concat([l]) : null),
          on(4194308, 4, js.bind(null, t, l), a);
      },
      useLayoutEffect: function (l, t) {
        return on(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        on(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = lt();
        t = t === void 0 ? null : t;
        var e = l();
        if (Ha) {
          $t(!0);
          try {
            l();
          } finally {
            $t(!1);
          }
        }
        return (a.memoizedState = [e, t]), e;
      },
      useReducer: function (l, t, a) {
        var e = lt();
        if (a !== void 0) {
          var u = a(t);
          if (Ha) {
            $t(!0);
            try {
              a(t);
            } finally {
              $t(!1);
            }
          }
        } else u = t;
        return (
          (e.memoizedState = e.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (e.queue = l),
          (l = l.dispatch = g1.bind(null, al, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = lt();
        return (l = { current: l }), (t.memoizedState = l);
      },
      useState: function (l) {
        l = Of(l);
        var t = l.queue,
          a = Qs.bind(null, al, t);
        return (t.dispatch = a), [l.memoizedState, a];
      },
      useDebugValue: Nf,
      useDeferredValue: function (l, t) {
        var a = lt();
        return Mf(a, l, t);
      },
      useTransition: function () {
        var l = Of(!1);
        return (
          (l = Cs.bind(null, al, l.queue, !0, !1)),
          (lt().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var e = al,
          u = lt();
        if (hl) {
          if (a === void 0) throw Error(i(407));
          a = a();
        } else {
          if (((a = t()), Tl === null)) throw Error(i(349));
          (xl & 124) !== 0 || rs(e, t, a);
        }
        u.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (u.queue = n),
          zs(ds.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          se(9, rn(), os.bind(null, e, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = lt(),
          t = Tl.identifierPrefix;
        if (hl) {
          var a = Yt,
            e = Bt;
          (a = (e & ~(1 << (32 - ut(e) - 1))).toString(32) + a),
            (t = "Â«" + t + "R" + a),
            (a = fn++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "Â»");
        } else (a = d1++), (t = "Â«" + t + "r" + a.toString(32) + "Â»");
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: jf,
      useFormState: ps,
      useActionState: ps,
      useOptimistic: function (l) {
        var t = lt();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = Rf.bind(null, al, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: Ef,
      useCacheRefresh: function () {
        return (lt().memoizedState = b1.bind(null, al));
      },
    },
    Ks = {
      readContext: Wl,
      use: sn,
      useCallback: Us,
      useContext: Wl,
      useEffect: Ns,
      useImperativeHandle: Rs,
      useInsertionEffect: Ms,
      useLayoutEffect: Ds,
      useMemo: Hs,
      useReducer: xn,
      useRef: Os,
      useState: function () {
        return xn(Qt);
      },
      useDebugValue: Nf,
      useDeferredValue: function (l, t) {
        var a = ql();
        return qs(a, bl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = xn(Qt)[0],
          t = ql().memoizedState;
        return [typeof l == "boolean" ? l : lu(l), t];
      },
      useSyncExternalStore: xs,
      useId: Gs,
      useHostTransitionStatus: jf,
      useFormState: Es,
      useActionState: Es,
      useOptimistic: function (l, t) {
        var a = ql();
        return ms(a, bl, l, t);
      },
      useMemoCache: Ef,
      useCacheRefresh: Xs,
    },
    _1 = {
      readContext: Wl,
      use: sn,
      useCallback: Us,
      useContext: Wl,
      useEffect: Ns,
      useImperativeHandle: Rs,
      useInsertionEffect: Ms,
      useLayoutEffect: Ds,
      useMemo: Hs,
      useReducer: Af,
      useRef: Os,
      useState: function () {
        return Af(Qt);
      },
      useDebugValue: Nf,
      useDeferredValue: function (l, t) {
        var a = ql();
        return bl === null ? Mf(a, l, t) : qs(a, bl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = Af(Qt)[0],
          t = ql().memoizedState;
        return [typeof l == "boolean" ? l : lu(l), t];
      },
      useSyncExternalStore: xs,
      useId: Gs,
      useHostTransitionStatus: jf,
      useFormState: As,
      useActionState: As,
      useOptimistic: function (l, t) {
        var a = ql();
        return bl !== null
          ? ms(a, bl, l, t)
          : ((a.baseState = l), [l, a.queue.dispatch]);
      },
      useMemoCache: Ef,
      useCacheRefresh: Xs,
    },
    xe = null,
    eu = 0;
  function vn(l) {
    var t = eu;
    return (eu += 1), xe === null && (xe = []), as(xe, l, t);
  }
  function uu(l, t) {
    (t = t.props.ref), (l.ref = t !== void 0 ? t : null);
  }
  function mn(l, t) {
    throw t.$$typeof === L
      ? Error(i(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l
          )
        ));
  }
  function ws(l) {
    var t = l._init;
    return t(l._payload);
  }
  function Js(l) {
    function t(v, h) {
      if (l) {
        var y = v.deletions;
        y === null ? ((v.deletions = [h]), (v.flags |= 16)) : y.push(h);
      }
    }
    function a(v, h) {
      if (!l) return null;
      for (; h !== null; ) t(v, h), (h = h.sibling);
      return null;
    }
    function e(v) {
      for (var h = new Map(); v !== null; )
        v.key !== null ? h.set(v.key, v) : h.set(v.index, v), (v = v.sibling);
      return h;
    }
    function u(v, h) {
      return (v = Ct(v, h)), (v.index = 0), (v.sibling = null), v;
    }
    function n(v, h, y) {
      return (
        (v.index = y),
        l
          ? ((y = v.alternate),
            y !== null
              ? ((y = y.index), y < h ? ((v.flags |= 67108866), h) : y)
              : ((v.flags |= 67108866), h))
          : ((v.flags |= 1048576), h)
      );
    }
    function c(v) {
      return l && v.alternate === null && (v.flags |= 67108866), v;
    }
    function s(v, h, y, O) {
      return h === null || h.tag !== 6
        ? ((h = Ic(y, v.mode, O)), (h.return = v), h)
        : ((h = u(h, y)), (h.return = v), h);
    }
    function o(v, h, y, O) {
      var G = y.type;
      return G === I
        ? T(v, h, y.props.children, O, y.key)
        : h !== null &&
          (h.elementType === G ||
            (typeof G == "object" &&
              G !== null &&
              G.$$typeof === rl &&
              ws(G) === h.type))
        ? ((h = u(h, y.props)), uu(h, y), (h.return = v), h)
        : ((h = Fu(y.type, y.key, y.props, null, v.mode, O)),
          uu(h, y),
          (h.return = v),
          h);
    }
    function b(v, h, y, O) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== y.containerInfo ||
        h.stateNode.implementation !== y.implementation
        ? ((h = Pc(y, v.mode, O)), (h.return = v), h)
        : ((h = u(h, y.children || [])), (h.return = v), h);
    }
    function T(v, h, y, O, G) {
      return h === null || h.tag !== 7
        ? ((h = Oa(y, v.mode, O, G)), (h.return = v), h)
        : ((h = u(h, y)), (h.return = v), h);
    }
    function z(v, h, y) {
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return (h = Ic("" + h, v.mode, y)), (h.return = v), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Y:
            return (
              (y = Fu(h.type, h.key, h.props, null, v.mode, y)),
              uu(y, h),
              (y.return = v),
              y
            );
          case sl:
            return (h = Pc(h, v.mode, y)), (h.return = v), h;
          case rl:
            var O = h._init;
            return (h = O(h._payload)), z(v, h, y);
        }
        if (w(h) || Al(h))
          return (h = Oa(h, v.mode, y, null)), (h.return = v), h;
        if (typeof h.then == "function") return z(v, vn(h), y);
        if (h.$$typeof === $) return z(v, tn(v, h), y);
        mn(v, h);
      }
      return null;
    }
    function _(v, h, y, O) {
      var G = h !== null ? h.key : null;
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return G !== null ? null : s(v, h, "" + y, O);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Y:
            return y.key === G ? o(v, h, y, O) : null;
          case sl:
            return y.key === G ? b(v, h, y, O) : null;
          case rl:
            return (G = y._init), (y = G(y._payload)), _(v, h, y, O);
        }
        if (w(y) || Al(y)) return G !== null ? null : T(v, h, y, O, null);
        if (typeof y.then == "function") return _(v, h, vn(y), O);
        if (y.$$typeof === $) return _(v, h, tn(v, y), O);
        mn(v, y);
      }
      return null;
    }
    function p(v, h, y, O, G) {
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return (v = v.get(y) || null), s(h, v, "" + O, G);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Y:
            return (
              (v = v.get(O.key === null ? y : O.key) || null), o(h, v, O, G)
            );
          case sl:
            return (
              (v = v.get(O.key === null ? y : O.key) || null), b(h, v, O, G)
            );
          case rl:
            var el = O._init;
            return (O = el(O._payload)), p(v, h, y, O, G);
        }
        if (w(O) || Al(O)) return (v = v.get(y) || null), T(h, v, O, G, null);
        if (typeof O.then == "function") return p(v, h, y, vn(O), G);
        if (O.$$typeof === $) return p(v, h, y, tn(h, O), G);
        mn(h, O);
      }
      return null;
    }
    function F(v, h, y, O) {
      for (
        var G = null, el = null, V = h, k = (h = 0), Zl = null;
        V !== null && k < y.length;
        k++
      ) {
        V.index > k ? ((Zl = V), (V = null)) : (Zl = V.sibling);
        var dl = _(v, V, y[k], O);
        if (dl === null) {
          V === null && (V = Zl);
          break;
        }
        l && V && dl.alternate === null && t(v, V),
          (h = n(dl, h, k)),
          el === null ? (G = dl) : (el.sibling = dl),
          (el = dl),
          (V = Zl);
      }
      if (k === y.length) return a(v, V), hl && Na(v, k), G;
      if (V === null) {
        for (; k < y.length; k++)
          (V = z(v, y[k], O)),
            V !== null &&
              ((h = n(V, h, k)),
              el === null ? (G = V) : (el.sibling = V),
              (el = V));
        return hl && Na(v, k), G;
      }
      for (V = e(V); k < y.length; k++)
        (Zl = p(V, v, k, y[k], O)),
          Zl !== null &&
            (l &&
              Zl.alternate !== null &&
              V.delete(Zl.key === null ? k : Zl.key),
            (h = n(Zl, h, k)),
            el === null ? (G = Zl) : (el.sibling = Zl),
            (el = Zl));
      return (
        l &&
          V.forEach(function (ga) {
            return t(v, ga);
          }),
        hl && Na(v, k),
        G
      );
    }
    function J(v, h, y, O) {
      if (y == null) throw Error(i(151));
      for (
        var G = null, el = null, V = h, k = (h = 0), Zl = null, dl = y.next();
        V !== null && !dl.done;
        k++, dl = y.next()
      ) {
        V.index > k ? ((Zl = V), (V = null)) : (Zl = V.sibling);
        var ga = _(v, V, dl.value, O);
        if (ga === null) {
          V === null && (V = Zl);
          break;
        }
        l && V && ga.alternate === null && t(v, V),
          (h = n(ga, h, k)),
          el === null ? (G = ga) : (el.sibling = ga),
          (el = ga),
          (V = Zl);
      }
      if (dl.done) return a(v, V), hl && Na(v, k), G;
      if (V === null) {
        for (; !dl.done; k++, dl = y.next())
          (dl = z(v, dl.value, O)),
            dl !== null &&
              ((h = n(dl, h, k)),
              el === null ? (G = dl) : (el.sibling = dl),
              (el = dl));
        return hl && Na(v, k), G;
      }
      for (V = e(V); !dl.done; k++, dl = y.next())
        (dl = p(V, v, k, dl.value, O)),
          dl !== null &&
            (l &&
              dl.alternate !== null &&
              V.delete(dl.key === null ? k : dl.key),
            (h = n(dl, h, k)),
            el === null ? (G = dl) : (el.sibling = dl),
            (el = dl));
      return (
        l &&
          V.forEach(function (Sd) {
            return t(v, Sd);
          }),
        hl && Na(v, k),
        G
      );
    }
    function _l(v, h, y, O) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === I &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case Y:
            l: {
              for (var G = y.key; h !== null; ) {
                if (h.key === G) {
                  if (((G = y.type), G === I)) {
                    if (h.tag === 7) {
                      a(v, h.sibling),
                        (O = u(h, y.props.children)),
                        (O.return = v),
                        (v = O);
                      break l;
                    }
                  } else if (
                    h.elementType === G ||
                    (typeof G == "object" &&
                      G !== null &&
                      G.$$typeof === rl &&
                      ws(G) === h.type)
                  ) {
                    a(v, h.sibling),
                      (O = u(h, y.props)),
                      uu(O, y),
                      (O.return = v),
                      (v = O);
                    break l;
                  }
                  a(v, h);
                  break;
                } else t(v, h);
                h = h.sibling;
              }
              y.type === I
                ? ((O = Oa(y.props.children, v.mode, O, y.key)),
                  (O.return = v),
                  (v = O))
                : ((O = Fu(y.type, y.key, y.props, null, v.mode, O)),
                  uu(O, y),
                  (O.return = v),
                  (v = O));
            }
            return c(v);
          case sl:
            l: {
              for (G = y.key; h !== null; ) {
                if (h.key === G)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === y.containerInfo &&
                    h.stateNode.implementation === y.implementation
                  ) {
                    a(v, h.sibling),
                      (O = u(h, y.children || [])),
                      (O.return = v),
                      (v = O);
                    break l;
                  } else {
                    a(v, h);
                    break;
                  }
                else t(v, h);
                h = h.sibling;
              }
              (O = Pc(y, v.mode, O)), (O.return = v), (v = O);
            }
            return c(v);
          case rl:
            return (G = y._init), (y = G(y._payload)), _l(v, h, y, O);
        }
        if (w(y)) return F(v, h, y, O);
        if (Al(y)) {
          if (((G = Al(y)), typeof G != "function")) throw Error(i(150));
          return (y = G.call(y)), J(v, h, y, O);
        }
        if (typeof y.then == "function") return _l(v, h, vn(y), O);
        if (y.$$typeof === $) return _l(v, h, tn(v, y), O);
        mn(v, y);
      }
      return (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
        ? ((y = "" + y),
          h !== null && h.tag === 6
            ? (a(v, h.sibling), (O = u(h, y)), (O.return = v), (v = O))
            : (a(v, h), (O = Ic(y, v.mode, O)), (O.return = v), (v = O)),
          c(v))
        : a(v, h);
    }
    return function (v, h, y, O) {
      try {
        eu = 0;
        var G = _l(v, h, y, O);
        return (xe = null), G;
      } catch (V) {
        if (V === ke || V === en) throw V;
        var el = ct(29, V, null, v.mode);
        return (el.lanes = O), (el.return = v), el;
      } finally {
      }
    };
  }
  var re = Js(!0),
    ks = Js(!1),
    bt = N(null),
    zt = null;
  function ua(l) {
    var t = l.alternate;
    q(Yl, Yl.current & 1),
      q(bt, l),
      zt === null &&
        (t === null || ce.current !== null || t.memoizedState !== null) &&
        (zt = l);
  }
  function Ws(l) {
    if (l.tag === 22) {
      if ((q(Yl, Yl.current), q(bt, l), zt === null)) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (zt = l);
      }
    } else na();
  }
  function na() {
    q(Yl, Yl.current), q(bt, bt.current);
  }
  function Zt(l) {
    U(bt), zt === l && (zt = null), U(Yl);
  }
  var Yl = N(0);
  function yn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || pi(a))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function Uf(l, t, a, e) {
    (t = l.memoizedState),
      (a = a(e, t)),
      (a = a == null ? t : C({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var Hf = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var e = xt(),
        u = ta(e);
      (u.payload = t),
        a != null && (u.callback = a),
        (t = aa(l, u, e)),
        t !== null && (rt(t, l, e), $e(t, l, e));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var e = xt(),
        u = ta(e);
      (u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = aa(l, u, e)),
        t !== null && (rt(t, l, e), $e(t, l, e));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = xt(),
        e = ta(a);
      (e.tag = 2),
        t != null && (e.callback = t),
        (t = aa(l, e, a)),
        t !== null && (rt(t, l, a), $e(t, l, a));
    },
  };
  function $s(l, t, a, e, u, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, c)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Xe(a, e) || !Xe(u, n)
        : !0
    );
  }
  function Fs(l, t, a, e) {
    (l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, e),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, e),
      t.state !== l && Hf.enqueueReplaceState(t, t.state, null);
  }
  function qa(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t) e !== "ref" && (a[e] = t[e]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = C({}, a));
      for (var u in l) a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  var bn =
    typeof reportError == "function"
      ? reportError
      : function (l) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof l == "object" &&
                l !== null &&
                typeof l.message == "string"
                  ? String(l.message)
                  : String(l),
              error: l,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", l);
            return;
          }
          console.error(l);
        };
  function Is(l) {
    bn(l);
  }
  function Ps(l) {
    console.error(l);
  }
  function lx(l) {
    bn(l);
  }
  function gn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function tx(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function qf(l, t, a) {
    return (
      (a = ta(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        gn(l, t);
      }),
      a
    );
  }
  function ax(l) {
    return (l = ta(l)), (l.tag = 3), l;
  }
  function ex(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      (l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          tx(t, a, e);
        });
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        tx(t, a, e),
          typeof u != "function" &&
            (ra === null ? (ra = new Set([this])) : ra.add(this));
        var s = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function S1(l, t, a, e, u) {
    if (
      ((a.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Ke(t, a, u, !0),
        (a = bt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              zt === null ? ni() : a.alternate === null && Dl === 0 && (Dl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              e === xf
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([e])) : t.add(e),
                  fi(l, e, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              e === xf
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([e])) : a.add(e)),
                  fi(l, e, u)),
              !1
            );
        }
        throw Error(i(435, a.tag));
      }
      return fi(l, e, u), ni(), !1;
    }
    if (hl)
      return (
        (t = bt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            e !== af && ((l = Error(i(422), { cause: e })), Le(ht(l, a))))
          : (e !== af && ((t = Error(i(423), { cause: e })), Le(ht(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = ht(e, a)),
            (u = qf(l.stateNode, e, u)),
            df(l, u),
            Dl !== 4 && (Dl = 2)),
        !1
      );
    var n = Error(i(520), { cause: e });
    if (
      ((n = ht(n, a)),
      ru === null ? (ru = [n]) : ru.push(n),
      Dl !== 4 && (Dl = 2),
      t === null)
    )
      return !0;
    (e = ht(e, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = u & -u),
            (a.lanes |= l),
            (l = qf(a.stateNode, e, l)),
            df(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (ra === null || !ra.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = ax(u)),
              ex(u, l, a, e),
              df(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ux = Error(i(461)),
    Xl = !1;
  function Ll(l, t, a, e) {
    t.child = l === null ? ks(t, null, a, e) : re(t, l.child, a, e);
  }
  function nx(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var c = {};
      for (var s in e) s !== "ref" && (c[s] = e[s]);
    } else c = e;
    return (
      Ra(t),
      (e = bf(l, t, a, c, n, u)),
      (s = gf()),
      l !== null && !Xl
        ? (_f(l, t, u), Vt(l, t, u))
        : (hl && s && lf(t), (t.flags |= 1), Ll(l, t, e, u), t.child)
    );
  }
  function cx(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Fc(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), fx(l, t, n, e, u))
        : ((l = Fu(a.type, null, e, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !Vf(l, u))) {
      var c = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Xe), a(c, e) && l.ref === t.ref)
      )
        return Vt(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = Ct(n, e)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function fx(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Xe(n, e) && l.ref === t.ref)
        if (((Xl = !1), (t.pendingProps = e = n), Vf(l, u)))
          (l.flags & 131072) !== 0 && (Xl = !0);
        else return (t.lanes = l.lanes), Vt(l, t, u);
    }
    return Cf(l, t, a, e, u);
  }
  function ix(l, t, a) {
    var e = t.pendingProps,
      u = e.children,
      n = l !== null ? l.memoizedState : null;
    if (e.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((e = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (u = t.child = l.child, n = 0; u !== null; )
            (n = n | u.lanes | u.childLanes), (u = u.sibling);
          t.childLanes = n & ~e;
        } else (t.childLanes = 0), (t.child = null);
        return sx(l, t, e, a);
      }
      if ((a & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && an(t, n !== null ? n.cachePool : null),
          n !== null ? fs(t, n) : vf(),
          Ws(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          sx(l, t, n !== null ? n.baseLanes | a : a, a)
        );
    } else
      n !== null
        ? (an(t, n.cachePool), fs(t, n), na(), (t.memoizedState = null))
        : (l !== null && an(t, null), vf(), na());
    return Ll(l, t, u, a), t.child;
  }
  function sx(l, t, a, e) {
    var u = sf();
    return (
      (u = u === null ? null : { parent: Bl._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: a, cachePool: u }),
      l !== null && an(t, null),
      vf(),
      Ws(t),
      l !== null && Ke(l, t, e, !0),
      null
    );
  }
  function _n(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(i(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function Cf(l, t, a, e, u) {
    return (
      Ra(t),
      (a = bf(l, t, a, e, void 0, u)),
      (e = gf()),
      l !== null && !Xl
        ? (_f(l, t, u), Vt(l, t, u))
        : (hl && e && lf(t), (t.flags |= 1), Ll(l, t, a, u), t.child)
    );
  }
  function xx(l, t, a, e, u, n) {
    return (
      Ra(t),
      (t.updateQueue = null),
      (a = ss(t, e, a, u)),
      is(l),
      (e = gf()),
      l !== null && !Xl
        ? (_f(l, t, n), Vt(l, t, n))
        : (hl && e && lf(t), (t.flags |= 1), Ll(l, t, a, n), t.child)
    );
  }
  function rx(l, t, a, e, u) {
    if ((Ra(t), t.stateNode === null)) {
      var n = te,
        c = a.contextType;
      typeof c == "object" && c !== null && (n = Wl(c)),
        (n = new a(e, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = Hf),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = e),
        (n.state = t.memoizedState),
        (n.refs = {}),
        rf(t),
        (c = a.contextType),
        (n.context = typeof c == "object" && c !== null ? Wl(c) : te),
        (n.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && (Uf(t, a, c, e), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && Hf.enqueueReplaceState(n, n.state, null),
          Ie(t, e, n, u),
          Fe(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (e = !0);
    } else if (l === null) {
      n = t.stateNode;
      var s = t.memoizedProps,
        o = qa(a, s);
      n.props = o;
      var b = n.context,
        T = a.contextType;
      (c = te), typeof T == "object" && T !== null && (c = Wl(T));
      var z = a.getDerivedStateFromProps;
      (T =
        typeof z == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (s = t.pendingProps !== s),
        T ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((s || b !== c) && Fs(t, n, e, c)),
        (la = !1);
      var _ = t.memoizedState;
      (n.state = _),
        Ie(t, e, n, u),
        Fe(),
        (b = t.memoizedState),
        s || _ !== b || la
          ? (typeof z == "function" && (Uf(t, a, z, e), (b = t.memoizedState)),
            (o = la || $s(t, a, o, e, _, b, c))
              ? (T ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = e),
                (t.memoizedState = b)),
            (n.props = e),
            (n.state = b),
            (n.context = c),
            (e = o))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (e = !1));
    } else {
      (n = t.stateNode),
        of(l, t),
        (c = t.memoizedProps),
        (T = qa(a, c)),
        (n.props = T),
        (z = t.pendingProps),
        (_ = n.context),
        (b = a.contextType),
        (o = te),
        typeof b == "object" && b !== null && (o = Wl(b)),
        (s = a.getDerivedStateFromProps),
        (b =
          typeof s == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== z || _ !== o) && Fs(t, n, e, o)),
        (la = !1),
        (_ = t.memoizedState),
        (n.state = _),
        Ie(t, e, n, u),
        Fe();
      var p = t.memoizedState;
      c !== z ||
      _ !== p ||
      la ||
      (l !== null && l.dependencies !== null && ln(l.dependencies))
        ? (typeof s == "function" && (Uf(t, a, s, e), (p = t.memoizedState)),
          (T =
            la ||
            $s(t, a, T, e, _, p, o) ||
            (l !== null && l.dependencies !== null && ln(l.dependencies)))
            ? (b ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(e, p, o),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, p, o)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && _ === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && _ === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = e),
              (t.memoizedState = p)),
          (n.props = e),
          (n.state = p),
          (n.context = o),
          (e = T))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && _ === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && _ === l.memoizedState) ||
            (t.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      _n(l, t),
      (e = (t.flags & 128) !== 0),
      n || e
        ? ((n = t.stateNode),
          (a =
            e && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && e
            ? ((t.child = re(t, l.child, null, u)),
              (t.child = re(t, null, a, u)))
            : Ll(l, t, a, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Vt(l, t, u)),
      l
    );
  }
  function ox(l, t, a, e) {
    return Ve(), (t.flags |= 256), Ll(l, t, a, e), t.child;
  }
  var Bf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Yf(l) {
    return { baseLanes: l, cachePool: P0() };
  }
  function Gf(l, t, a) {
    return (l = l !== null ? l.childLanes & ~a : 0), t && (l |= gt), l;
  }
  function dx(l, t, a) {
    var e = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (Yl.current & 2) !== 0),
      c && ((u = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (hl) {
        if ((u ? ua(t) : na(), hl)) {
          var s = Ml,
            o;
          if ((o = s)) {
            l: {
              for (o = s, s = Ot; o.nodeType !== 8; ) {
                if (!s) {
                  s = null;
                  break l;
                }
                if (((o = Et(o.nextSibling)), o === null)) {
                  s = null;
                  break l;
                }
              }
              s = o;
            }
            s !== null
              ? ((t.memoizedState = {
                  dehydrated: s,
                  treeContext: za !== null ? { id: Bt, overflow: Yt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (o = ct(18, null, null, 0)),
                (o.stateNode = s),
                (o.return = t),
                (t.child = o),
                (Fl = t),
                (Ml = null),
                (o = !0))
              : (o = !1);
          }
          o || Da(t);
        }
        if (
          ((s = t.memoizedState),
          s !== null && ((s = s.dehydrated), s !== null))
        )
          return pi(s) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Zt(t);
      }
      return (
        (s = e.children),
        (e = e.fallback),
        u
          ? (na(),
            (u = t.mode),
            (s = Sn({ mode: "hidden", children: s }, u)),
            (e = Oa(e, u, a, null)),
            (s.return = t),
            (e.return = t),
            (s.sibling = e),
            (t.child = s),
            (u = t.child),
            (u.memoizedState = Yf(a)),
            (u.childLanes = Gf(l, c, a)),
            (t.memoizedState = Bf),
            e)
          : (ua(t), Xf(t, s))
      );
    }
    if (
      ((o = l.memoizedState), o !== null && ((s = o.dehydrated), s !== null))
    ) {
      if (n)
        t.flags & 256
          ? (ua(t), (t.flags &= -257), (t = Qf(l, t, a)))
          : t.memoizedState !== null
          ? (na(), (t.child = l.child), (t.flags |= 128), (t = null))
          : (na(),
            (u = e.fallback),
            (s = t.mode),
            (e = Sn({ mode: "visible", children: e.children }, s)),
            (u = Oa(u, s, a, null)),
            (u.flags |= 2),
            (e.return = t),
            (u.return = t),
            (e.sibling = u),
            (t.child = e),
            re(t, l.child, null, a),
            (e = t.child),
            (e.memoizedState = Yf(a)),
            (e.childLanes = Gf(l, c, a)),
            (t.memoizedState = Bf),
            (t = u));
      else if ((ua(t), pi(s))) {
        if (((c = s.nextSibling && s.nextSibling.dataset), c)) var b = c.dgst;
        (c = b),
          (e = Error(i(419))),
          (e.stack = ""),
          (e.digest = c),
          Le({ value: e, source: null, stack: null }),
          (t = Qf(l, t, a));
      } else if (
        (Xl || Ke(l, t, a, !1), (c = (a & l.childLanes) !== 0), Xl || c)
      ) {
        if (
          ((c = Tl),
          c !== null &&
            ((e = a & -a),
            (e = (e & 42) !== 0 ? 1 : pc(e)),
            (e = (e & (c.suspendedLanes | a)) !== 0 ? 0 : e),
            e !== 0 && e !== o.retryLane))
        )
          throw ((o.retryLane = e), le(l, e), rt(c, l, e), ux);
        s.data === "$?" || ni(), (t = Qf(l, t, a));
      } else
        s.data === "$?"
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = o.treeContext),
            (Ml = Et(s.nextSibling)),
            (Fl = t),
            (hl = !0),
            (Ma = null),
            (Ot = !1),
            l !== null &&
              ((mt[yt++] = Bt),
              (mt[yt++] = Yt),
              (mt[yt++] = za),
              (Bt = l.id),
              (Yt = l.overflow),
              (za = t)),
            (t = Xf(t, e.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (na(),
        (u = e.fallback),
        (s = t.mode),
        (o = l.child),
        (b = o.sibling),
        (e = Ct(o, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = o.subtreeFlags & 65011712),
        b !== null ? (u = Ct(b, u)) : ((u = Oa(u, s, a, null)), (u.flags |= 2)),
        (u.return = t),
        (e.return = t),
        (e.sibling = u),
        (t.child = e),
        (e = u),
        (u = t.child),
        (s = l.child.memoizedState),
        s === null
          ? (s = Yf(a))
          : ((o = s.cachePool),
            o !== null
              ? ((b = Bl._currentValue),
                (o = o.parent !== b ? { parent: b, pool: b } : o))
              : (o = P0()),
            (s = { baseLanes: s.baseLanes | a, cachePool: o })),
        (u.memoizedState = s),
        (u.childLanes = Gf(l, c, a)),
        (t.memoizedState = Bf),
        e)
      : (ua(t),
        (a = l.child),
        (l = a.sibling),
        (a = Ct(a, { mode: "visible", children: e.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function Xf(l, t) {
    return (
      (t = Sn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function Sn(l, t) {
    return (
      (l = ct(22, l, null, t)),
      (l.lanes = 0),
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      l
    );
  }
  function Qf(l, t, a) {
    return (
      re(t, l.child, null, a),
      (l = Xf(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function hx(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t), uf(l.return, t, a);
  }
  function Zf(l, t, a, e, u) {
    var n = l.memoizedState;
    n === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: a,
          tailMode: u,
        })
      : ((n.isBackwards = t),
        (n.rendering = null),
        (n.renderingStartTime = 0),
        (n.last = e),
        (n.tail = a),
        (n.tailMode = u));
  }
  function vx(l, t, a) {
    var e = t.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    if ((Ll(l, t, e.children, a), (e = Yl.current), (e & 2) !== 0))
      (e = (e & 1) | 2), (t.flags |= 128);
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13) l.memoizedState !== null && hx(l, a, t);
          else if (l.tag === 19) hx(l, a, t);
          else if (l.child !== null) {
            (l.child.return = l), (l = l.child);
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break l;
            l = l.return;
          }
          (l.sibling.return = l.return), (l = l.sibling);
        }
      e &= 1;
    }
    switch ((q(Yl, e), u)) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          (l = a.alternate),
            l !== null && yn(l) === null && (u = a),
            (a = a.sibling);
        (a = u),
          a === null
            ? ((u = t.child), (t.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          Zf(t, !1, u, a, n);
        break;
      case "backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && yn(l) === null)) {
            t.child = u;
            break;
          }
          (l = u.sibling), (u.sibling = a), (a = u), (u = l);
        }
        Zf(t, !0, a, null, n);
        break;
      case "together":
        Zf(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Vt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (xa |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((Ke(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(i(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Ct(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;

      )
        (l = l.sibling),
          (a = a.sibling = Ct(l, l.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function Vf(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && ln(l)));
  }
  function p1(l, t, a) {
    switch (t.tag) {
      case 3:
        Sl(t, t.stateNode.containerInfo),
          Pt(t, Bl, l.memoizedState.cache),
          Ve();
        break;
      case 27:
      case 5:
        ju(t);
        break;
      case 4:
        Sl(t, t.stateNode.containerInfo);
        break;
      case 10:
        Pt(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (ua(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
            ? dx(l, t, a)
            : (ua(t), (l = Vt(l, t, a)), l !== null ? l.sibling : null);
        ua(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (a & t.childLanes) !== 0),
          e || (Ke(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (e) return vx(l, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          q(Yl, Yl.current),
          e)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), ix(l, t, a);
      case 24:
        Pt(t, Bl, l.memoizedState.cache);
    }
    return Vt(l, t, a);
  }
  function mx(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) Xl = !0;
      else {
        if (!Vf(l, a) && (t.flags & 128) === 0) return (Xl = !1), p1(l, t, a);
        Xl = (l.flags & 131072) !== 0;
      }
    else (Xl = !1), hl && (t.flags & 1048576) !== 0 && w0(t, Pu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          l = t.pendingProps;
          var e = t.elementType,
            u = e._init;
          if (((e = u(e._payload)), (t.type = e), typeof e == "function"))
            Fc(e)
              ? ((l = qa(e, l)), (t.tag = 1), (t = rx(null, t, e, l, a)))
              : ((t.tag = 0), (t = Cf(null, t, e, l, a)));
          else {
            if (e != null) {
              if (((u = e.$$typeof), u === ll)) {
                (t.tag = 11), (t = nx(null, t, e, l, a));
                break l;
              } else if (u === cl) {
                (t.tag = 14), (t = cx(null, t, e, l, a));
                break l;
              }
            }
            throw ((t = Ut(e) || e), Error(i(306, t, "")));
          }
        }
        return t;
      case 0:
        return Cf(l, t, t.type, t.pendingProps, a);
      case 1:
        return (e = t.type), (u = qa(e, t.pendingProps)), rx(l, t, e, u, a);
      case 3:
        l: {
          if ((Sl(t, t.stateNode.containerInfo), l === null))
            throw Error(i(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          (u = n.element), of(l, t), Ie(t, e, null, a);
          var c = t.memoizedState;
          if (
            ((e = c.cache),
            Pt(t, Bl, e),
            e !== n.cache && nf(t, [Bl], a, !0),
            Fe(),
            (e = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = ox(l, t, e, a);
              break l;
            } else if (e !== u) {
              (u = ht(Error(i(424)), t)), Le(u), (t = ox(l, t, e, a));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                Ml = Et(l.firstChild),
                  Fl = t,
                  hl = !0,
                  Ma = null,
                  Ot = !0,
                  a = ks(t, null, e, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
            }
          else {
            if ((Ve(), e === u)) {
              t = Vt(l, t, a);
              break l;
            }
            Ll(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          _n(l, t),
          l === null
            ? (a = _r(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : hl ||
                ((a = t.type),
                (l = t.pendingProps),
                (e = qn(W.current).createElement(a)),
                (e[kl] = t),
                (e[Il] = l),
                wl(e, a, l),
                Gl(e),
                (t.stateNode = e))
            : (t.memoizedState = _r(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState
              )),
          null
        );
      case 27:
        return (
          ju(t),
          l === null &&
            hl &&
            ((e = t.stateNode = yr(t.type, t.pendingProps, W.current)),
            (Fl = t),
            (Ot = !0),
            (u = Ml),
            ha(t.type) ? ((Ei = u), (Ml = Et(e.firstChild))) : (Ml = u)),
          Ll(l, t, t.pendingProps.children, a),
          _n(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            hl &&
            ((u = e = Ml) &&
              ((e = $1(e, t.type, t.pendingProps, Ot)),
              e !== null
                ? ((t.stateNode = e),
                  (Fl = t),
                  (Ml = Et(e.firstChild)),
                  (Ot = !1),
                  (u = !0))
                : (u = !1)),
            u || Da(t)),
          ju(t),
          (u = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (e = n.children),
          gi(u, n) ? (e = null) : c !== null && gi(u, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = bf(l, t, h1, null, null, a)), (_u._currentValue = u)),
          _n(l, t),
          Ll(l, t, e, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            hl &&
            ((l = a = Ml) &&
              ((a = F1(a, t.pendingProps, Ot)),
              a !== null
                ? ((t.stateNode = a), (Fl = t), (Ml = null), (l = !0))
                : (l = !1)),
            l || Da(t)),
          null
        );
      case 13:
        return dx(l, t, a);
      case 4:
        return (
          Sl(t, t.stateNode.containerInfo),
          (e = t.pendingProps),
          l === null ? (t.child = re(t, null, e, a)) : Ll(l, t, e, a),
          t.child
        );
      case 11:
        return nx(l, t, t.type, t.pendingProps, a);
      case 7:
        return Ll(l, t, t.pendingProps, a), t.child;
      case 8:
        return Ll(l, t, t.pendingProps.children, a), t.child;
      case 12:
        return Ll(l, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (e = t.pendingProps),
          Pt(t, t.type, e.value),
          Ll(l, t, e.children, a),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (e = t.pendingProps.children),
          Ra(t),
          (u = Wl(u)),
          (e = e(u)),
          (t.flags |= 1),
          Ll(l, t, e, a),
          t.child
        );
      case 14:
        return cx(l, t, t.type, t.pendingProps, a);
      case 15:
        return fx(l, t, t.type, t.pendingProps, a);
      case 19:
        return vx(l, t, a);
      case 31:
        return (
          (e = t.pendingProps),
          (a = t.mode),
          (e = { mode: e.mode, children: e.children }),
          l === null
            ? ((a = Sn(e, a)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a))
            : ((a = Ct(l.child, e)),
              (a.ref = t.ref),
              (t.child = a),
              (a.return = t),
              (t = a)),
          t
        );
      case 22:
        return ix(l, t, a);
      case 24:
        return (
          Ra(t),
          (e = Wl(Bl)),
          l === null
            ? ((u = sf()),
              u === null &&
                ((u = Tl),
                (n = cf()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= a),
                (u = n)),
              (t.memoizedState = { parent: e, cache: u }),
              rf(t),
              Pt(t, Bl, u))
            : ((l.lanes & a) !== 0 && (of(l, t), Ie(t, null, null, a), Fe()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  Pt(t, Bl, e))
                : ((e = n.cache),
                  Pt(t, Bl, e),
                  e !== u.cache && nf(t, [Bl], a, !0))),
          Ll(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function Lt(l) {
    l.flags |= 4;
  }
  function yx(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Ar(t))) {
      if (
        ((t = bt.current),
        t !== null &&
          ((xl & 4194048) === xl
            ? zt !== null
            : ((xl & 62914560) !== xl && (xl & 536870912) === 0) || t !== zt))
      )
        throw ((We = xf), ls);
      l.flags |= 8192;
    }
  }
  function pn(l, t) {
    t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? Wi() : 536870912), (l.lanes |= t), (ve |= t));
  }
  function nu(l, t) {
    if (!hl)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            a.alternate !== null && (e = a), (a = a.sibling);
          e === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function Nl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags & 65011712),
          (e |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling);
    else
      for (u = l.child; u !== null; )
        (a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags),
          (e |= u.flags),
          (u.return = l),
          (u = u.sibling);
    return (l.subtreeFlags |= e), (l.childLanes = a), t;
  }
  function E1(l, t, a) {
    var e = t.pendingProps;
    switch ((tf(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Nl(t), null;
      case 1:
        return Nl(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          Xt(Bl),
          vl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (Ze(t)
              ? Lt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), W0())),
          Nl(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          l === null
            ? (Lt(t),
              a !== null ? (Nl(t), yx(t, a)) : (Nl(t), (t.flags &= -16777217)))
            : a
            ? a !== l.memoizedState
              ? (Lt(t), Nl(t), yx(t, a))
              : (Nl(t), (t.flags &= -16777217))
            : (l.memoizedProps !== e && Lt(t), Nl(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Ru(t), (a = W.current);
        var u = t.type;
        if (l !== null && t.stateNode != null) l.memoizedProps !== e && Lt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(i(166));
            return Nl(t), null;
          }
          (l = K.current),
            Ze(t) ? J0(t) : ((l = yr(u, e, a)), (t.stateNode = l), Lt(t));
        }
        return Nl(t), null;
      case 5:
        if ((Ru(t), (a = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && Lt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(i(166));
            return Nl(t), null;
          }
          if (((l = K.current), Ze(t))) J0(t);
          else {
            switch (((u = qn(W.current)), l)) {
              case 1:
                l = u.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                l = u.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    l = u.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    l = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (l = u.createElement("div")),
                      (l.innerHTML = "<script></script>"),
                      (l = l.removeChild(l.firstChild));
                    break;
                  case "select":
                    (l =
                      typeof e.is == "string"
                        ? u.createElement("select", { is: e.is })
                        : u.createElement("select")),
                      e.multiple
                        ? (l.multiple = !0)
                        : e.size && (l.size = e.size);
                    break;
                  default:
                    l =
                      typeof e.is == "string"
                        ? u.createElement(a, { is: e.is })
                        : u.createElement(a);
                }
            }
            (l[kl] = t), (l[Il] = e);
            l: for (u = t.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) l.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === t) break l;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === t) break l;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            t.stateNode = l;
            l: switch ((wl(l, a, e), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!e.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Lt(t);
          }
        }
        return Nl(t), (t.flags &= -16777217), null;
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && Lt(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(i(166));
          if (((l = W.current), Ze(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (e = null),
              (u = Fl),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            (l[kl] = t),
              (l = !!(
                l.nodeValue === a ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                xr(l.nodeValue, a)
              )),
              l || Da(t);
          } else (l = qn(l).createTextNode(e)), (l[kl] = t), (t.stateNode = l);
        }
        return Nl(t), null;
      case 13:
        if (
          ((e = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = Ze(t)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(i(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(i(317));
              u[kl] = t;
            } else
              Ve(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Nl(t), (u = !1);
          } else
            (u = W0()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0);
          if (!u) return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
        }
        if ((Zt(t), (t.flags & 128) !== 0)) return (t.lanes = a), t;
        if (
          ((a = e !== null), (l = l !== null && l.memoizedState !== null), a)
        ) {
          (e = t.child),
            (u = null),
            e.alternate !== null &&
              e.alternate.memoizedState !== null &&
              e.alternate.memoizedState.cachePool !== null &&
              (u = e.alternate.memoizedState.cachePool.pool);
          var n = null;
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
            n !== u && (e.flags |= 2048);
        }
        return (
          a !== l && a && (t.child.flags |= 8192),
          pn(t, t.updateQueue),
          Nl(t),
          null
        );
      case 4:
        return vl(), l === null && hi(t.stateNode.containerInfo), Nl(t), null;
      case 10:
        return Xt(t.type), Nl(t), null;
      case 19:
        if ((U(Yl), (u = t.memoizedState), u === null)) return Nl(t), null;
        if (((e = (t.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) nu(u, !1);
          else {
            if (Dl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = yn(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      nu(u, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      pn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;

                  )
                    K0(a, l), (a = a.sibling);
                  return q(Yl, (Yl.current & 1) | 2), t.child;
                }
                l = l.sibling;
              }
            u.tail !== null &&
              At() > An &&
              ((t.flags |= 128), (e = !0), nu(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = yn(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                pn(t, l),
                nu(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !hl)
              )
                return Nl(t), null;
            } else
              2 * At() - u.renderingStartTime > An &&
                a !== 536870912 &&
                ((t.flags |= 128), (e = !0), nu(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = u.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((t = u.tail),
            (u.rendering = t),
            (u.tail = t.sibling),
            (u.renderingStartTime = At()),
            (t.sibling = null),
            (l = Yl.current),
            q(Yl, e ? (l & 1) | 2 : l & 1),
            t)
          : (Nl(t), null);
      case 22:
      case 23:
        return (
          Zt(t),
          mf(),
          (e = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== e && (t.flags |= 8192)
            : e && (t.flags |= 8192),
          e
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Nl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Nl(t),
          (a = t.updateQueue),
          a !== null && pn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== a && (t.flags |= 2048),
          l !== null && U(Ua),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          Xt(Bl),
          Nl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function T1(l, t) {
    switch ((tf(t), t.tag)) {
      case 1:
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          Xt(Bl),
          vl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return Ru(t), null;
      case 13:
        if (
          (Zt(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(i(340));
          Ve();
        }
        return (
          (l = t.flags), l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return U(Yl), null;
      case 4:
        return vl(), null;
      case 10:
        return Xt(t.type), null;
      case 22:
      case 23:
        return (
          Zt(t),
          mf(),
          l !== null && U(Ua),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return Xt(Bl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bx(l, t) {
    switch ((tf(t), t.tag)) {
      case 3:
        Xt(Bl), vl();
        break;
      case 26:
      case 27:
      case 5:
        Ru(t);
        break;
      case 4:
        vl();
        break;
      case 13:
        Zt(t);
        break;
      case 19:
        U(Yl);
        break;
      case 10:
        Xt(t.type);
        break;
      case 22:
      case 23:
        Zt(t), mf(), l !== null && U(Ua);
        break;
      case 24:
        Xt(Bl);
    }
  }
  function cu(l, t) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create,
              c = a.inst;
            (e = n()), (c.destroy = e);
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (s) {
      pl(t, t.return, s);
    }
  }
  function ca(l, t, a) {
    try {
      var e = t.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var c = e.inst,
              s = c.destroy;
            if (s !== void 0) {
              (c.destroy = void 0), (u = t);
              var o = a,
                b = s;
              try {
                b();
              } catch (T) {
                pl(u, o, T);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (T) {
      pl(t, t.return, T);
    }
  }
  function gx(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        cs(t, a);
      } catch (e) {
        pl(l, l.return, e);
      }
    }
  }
  function _x(l, t, a) {
    (a.props = qa(l.type, l.memoizedProps)), (a.state = l.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (e) {
      pl(l, t, e);
    }
  }
  function fu(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (u) {
      pl(l, t, u);
    }
  }
  function Nt(l, t) {
    var a = l.ref,
      e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          pl(l, t, u);
        } finally {
          (l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          pl(l, t, u);
        }
      else a.current = null;
  }
  function Sx(l) {
    var t = l.type,
      a = l.memoizedProps,
      e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      pl(l, l.return, u);
    }
  }
  function Lf(l, t, a) {
    try {
      var e = l.stateNode;
      K1(e, l.type, a, t), (e[Il] = t);
    } catch (u) {
      pl(l, l.return, u);
    }
  }
  function px(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && ha(l.type)) ||
      l.tag === 4
    );
  }
  function Kf(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || px(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;

      ) {
        if (
          (l.tag === 27 && ha(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        (l.child.return = l), (l = l.child);
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function wf(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      (l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
              ? a.ownerDocument.body
              : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Hn));
    else if (
      e !== 4 &&
      (e === 27 && ha(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (wf(l, t, a), l = l.sibling; l !== null; )
        wf(l, t, a), (l = l.sibling);
  }
  function En(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      (l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l);
    else if (
      e !== 4 &&
      (e === 27 && ha(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (En(l, t, a), l = l.sibling; l !== null; )
        En(l, t, a), (l = l.sibling);
  }
  function Ex(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      wl(t, e, a), (t[kl] = l), (t[Il] = a);
    } catch (n) {
      pl(l, l.return, n);
    }
  }
  var Kt = !1,
    Ul = !1,
    Jf = !1,
    Tx = typeof WeakSet == "function" ? WeakSet : Set,
    Ql = null;
  function A1(l, t) {
    if (((l = l.containerInfo), (yi = Qn), (l = q0(l)), Lc(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset,
              n = e.focusNode;
            e = e.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var c = 0,
              s = -1,
              o = -1,
              b = 0,
              T = 0,
              z = l,
              _ = null;
            t: for (;;) {
              for (
                var p;
                z !== a || (u !== 0 && z.nodeType !== 3) || (s = c + u),
                  z !== n || (e !== 0 && z.nodeType !== 3) || (o = c + e),
                  z.nodeType === 3 && (c += z.nodeValue.length),
                  (p = z.firstChild) !== null;

              )
                (_ = z), (z = p);
              for (;;) {
                if (z === l) break t;
                if (
                  (_ === a && ++b === u && (s = c),
                  _ === n && ++T === e && (o = c),
                  (p = z.nextSibling) !== null)
                )
                  break;
                (z = _), (_ = z.parentNode);
              }
              z = p;
            }
            a = s === -1 || o === -1 ? null : { start: s, end: o };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      bi = { focusedElem: l, selectionRange: a }, Qn = !1, Ql = t;
      Ql !== null;

    )
      if (
        ((t = Ql), (l = t.child), (t.subtreeFlags & 1024) !== 0 && l !== null)
      )
        (l.return = t), (Ql = l);
      else
        for (; Ql !== null; ) {
          switch (((t = Ql), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                (l = void 0),
                  (a = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = a.stateNode);
                try {
                  var F = qa(a.type, u, a.elementType === a.type);
                  (l = e.getSnapshotBeforeUpdate(F, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l);
                } catch (J) {
                  pl(a, a.return, J);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Si(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Si(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(i(163));
          }
          if (((l = t.sibling), l !== null)) {
            (l.return = t.return), (Ql = l);
            break;
          }
          Ql = t.return;
        }
  }
  function Ax(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        fa(l, a), e & 4 && cu(5, a);
        break;
      case 1:
        if ((fa(l, a), e & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              pl(a, a.return, c);
            }
          else {
            var u = qa(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              pl(a, a.return, c);
            }
          }
        e & 64 && gx(a), e & 512 && fu(a, a.return);
        break;
      case 3:
        if ((fa(l, a), e & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            cs(l, t);
          } catch (c) {
            pl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && e & 4 && Ex(a);
      case 26:
      case 5:
        fa(l, a), t === null && e & 4 && Sx(a), e & 512 && fu(a, a.return);
        break;
      case 12:
        fa(l, a);
        break;
      case 13:
        fa(l, a),
          e & 4 && Nx(l, a),
          e & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = H1.bind(null, a)), I1(l, a))));
        break;
      case 22:
        if (((e = a.memoizedState !== null || Kt), !e)) {
          (t = (t !== null && t.memoizedState !== null) || Ul), (u = Kt);
          var n = Ul;
          (Kt = e),
            (Ul = t) && !n ? ia(l, a, (a.subtreeFlags & 8772) !== 0) : fa(l, a),
            (Kt = u),
            (Ul = n);
        }
        break;
      case 30:
        break;
      default:
        fa(l, a);
    }
  }
  function Ox(l) {
    var t = l.alternate;
    t !== null && ((l.alternate = null), Ox(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && Ac(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null);
  }
  var Ol = null,
    tt = !1;
  function wt(l, t, a) {
    for (a = a.child; a !== null; ) zx(l, t, a), (a = a.sibling);
  }
  function zx(l, t, a) {
    if (et && typeof et.onCommitFiberUnmount == "function")
      try {
        et.onCommitFiberUnmount(Ne, a);
      } catch {}
    switch (a.tag) {
      case 26:
        Ul || Nt(a, t),
          wt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        Ul || Nt(a, t);
        var e = Ol,
          u = tt;
        ha(a.type) && ((Ol = a.stateNode), (tt = !1)),
          wt(l, t, a),
          mu(a.stateNode),
          (Ol = e),
          (tt = u);
        break;
      case 5:
        Ul || Nt(a, t);
      case 6:
        if (
          ((e = Ol),
          (u = tt),
          (Ol = null),
          wt(l, t, a),
          (Ol = e),
          (tt = u),
          Ol !== null)
        )
          if (tt)
            try {
              (Ol.nodeType === 9
                ? Ol.body
                : Ol.nodeName === "HTML"
                ? Ol.ownerDocument.body
                : Ol
              ).removeChild(a.stateNode);
            } catch (n) {
              pl(a, t, n);
            }
          else
            try {
              Ol.removeChild(a.stateNode);
            } catch (n) {
              pl(a, t, n);
            }
        break;
      case 18:
        Ol !== null &&
          (tt
            ? ((l = Ol),
              vr(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l,
                a.stateNode
              ),
              Tu(l))
            : vr(Ol, a.stateNode));
        break;
      case 4:
        (e = Ol),
          (u = tt),
          (Ol = a.stateNode.containerInfo),
          (tt = !0),
          wt(l, t, a),
          (Ol = e),
          (tt = u);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ul || ca(2, a, t), Ul || ca(4, a, t), wt(l, t, a);
        break;
      case 1:
        Ul ||
          (Nt(a, t),
          (e = a.stateNode),
          typeof e.componentWillUnmount == "function" && _x(a, t, e)),
          wt(l, t, a);
        break;
      case 21:
        wt(l, t, a);
        break;
      case 22:
        (Ul = (e = Ul) || a.memoizedState !== null), wt(l, t, a), (Ul = e);
        break;
      default:
        wt(l, t, a);
    }
  }
  function Nx(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Tu(l);
      } catch (a) {
        pl(t, t.return, a);
      }
  }
  function O1(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Tx()), t;
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Tx()),
          t
        );
      default:
        throw Error(i(435, l.tag));
    }
  }
  function kf(l, t) {
    var a = O1(l);
    t.forEach(function (e) {
      var u = q1.bind(null, l, e);
      a.has(e) || (a.add(e), e.then(u, u));
    });
  }
  function ft(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e],
          n = l,
          c = t,
          s = c;
        l: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (ha(s.type)) {
                (Ol = s.stateNode), (tt = !1);
                break l;
              }
              break;
            case 5:
              (Ol = s.stateNode), (tt = !1);
              break l;
            case 3:
            case 4:
              (Ol = s.stateNode.containerInfo), (tt = !0);
              break l;
          }
          s = s.return;
        }
        if (Ol === null) throw Error(i(160));
        zx(n, c, u),
          (Ol = null),
          (tt = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) Mx(t, l), (t = t.sibling);
  }
  var pt = null;
  function Mx(l, t) {
    var a = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ft(t, l),
          it(l),
          e & 4 && (ca(3, l, l.return), cu(3, l), ca(5, l, l.return));
        break;
      case 1:
        ft(t, l),
          it(l),
          e & 512 && (Ul || a === null || Nt(a, a.return)),
          e & 64 &&
            Kt &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? e : a.concat(e)))));
        break;
      case 26:
        var u = pt;
        if (
          (ft(t, l),
          it(l),
          e & 512 && (Ul || a === null || Nt(a, a.return)),
          e & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((e = l.memoizedState), a === null))
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  (e = l.type),
                    (a = l.memoizedProps),
                    (u = u.ownerDocument || u);
                  t: switch (e) {
                    case "title":
                      (n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[je] ||
                          n[kl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title")
                          )),
                        wl(n, e, a),
                        (n[kl] = l),
                        Gl(n),
                        (e = n);
                      break l;
                    case "link":
                      var c = Er("link", "href", u).get(e + (a.href || ""));
                      if (c) {
                        for (var s = 0; s < c.length; s++)
                          if (
                            ((n = c[s]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(s, 1);
                            break t;
                          }
                      }
                      (n = u.createElement(e)),
                        wl(n, e, a),
                        u.head.appendChild(n);
                      break;
                    case "meta":
                      if (
                        (c = Er("meta", "content", u).get(
                          e + (a.content || "")
                        ))
                      ) {
                        for (s = 0; s < c.length; s++)
                          if (
                            ((n = c[s]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(s, 1);
                            break t;
                          }
                      }
                      (n = u.createElement(e)),
                        wl(n, e, a),
                        u.head.appendChild(n);
                      break;
                    default:
                      throw Error(i(468, e));
                  }
                  (n[kl] = l), Gl(n), (e = n);
                }
                l.stateNode = e;
              } else Tr(u, l.type, l.stateNode);
            else l.stateNode = pr(u, e, l.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                e === null
                  ? Tr(u, l.type, l.stateNode)
                  : pr(u, e, l.memoizedProps))
              : e === null &&
                l.stateNode !== null &&
                Lf(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        ft(t, l),
          it(l),
          e & 512 && (Ul || a === null || Nt(a, a.return)),
          a !== null && e & 4 && Lf(l, l.memoizedProps, a.memoizedProps);
        break;
      case 5:
        if (
          (ft(t, l),
          it(l),
          e & 512 && (Ul || a === null || Nt(a, a.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            Ja(u, "");
          } catch (p) {
            pl(l, l.return, p);
          }
        }
        e & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), Lf(l, u, a !== null ? a.memoizedProps : u)),
          e & 1024 && (Jf = !0);
        break;
      case 6:
        if ((ft(t, l), it(l), e & 4)) {
          if (l.stateNode === null) throw Error(i(162));
          (e = l.memoizedProps), (a = l.stateNode);
          try {
            a.nodeValue = e;
          } catch (p) {
            pl(l, l.return, p);
          }
        }
        break;
      case 3:
        if (
          ((Yn = null),
          (u = pt),
          (pt = Cn(t.containerInfo)),
          ft(t, l),
          (pt = u),
          it(l),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Tu(t.containerInfo);
          } catch (p) {
            pl(l, l.return, p);
          }
        Jf && ((Jf = !1), Dx(l));
        break;
      case 4:
        (e = pt),
          (pt = Cn(l.stateNode.containerInfo)),
          ft(t, l),
          it(l),
          (pt = e);
        break;
      case 12:
        ft(t, l), it(l);
        break;
      case 13:
        ft(t, l),
          it(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (li = At()),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), kf(l, e)));
        break;
      case 22:
        u = l.memoizedState !== null;
        var o = a !== null && a.memoizedState !== null,
          b = Kt,
          T = Ul;
        if (
          ((Kt = b || u),
          (Ul = T || o),
          ft(t, l),
          (Ul = T),
          (Kt = b),
          it(l),
          e & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || o || Kt || Ul || Ca(l)),
              a = null,
              t = l;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                o = a = t;
                try {
                  if (((n = o.stateNode), u))
                    (c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none");
                  else {
                    s = o.stateNode;
                    var z = o.memoizedProps.style,
                      _ =
                        z != null && z.hasOwnProperty("display")
                          ? z.display
                          : null;
                    s.style.display =
                      _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (p) {
                  pl(o, o.return, p);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                o = t;
                try {
                  o.stateNode.nodeValue = u ? "" : o.memoizedProps;
                } catch (p) {
                  pl(o, o.return, p);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        e & 4 &&
          ((e = l.updateQueue),
          e !== null &&
            ((a = e.retryQueue),
            a !== null && ((e.retryQueue = null), kf(l, a))));
        break;
      case 19:
        ft(t, l),
          it(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), kf(l, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ft(t, l), it(l);
    }
  }
  function it(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (px(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(i(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              n = Kf(l);
            En(l, n, u);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Ja(c, ""), (a.flags &= -33));
            var s = Kf(l);
            En(l, s, c);
            break;
          case 3:
          case 4:
            var o = a.stateNode.containerInfo,
              b = Kf(l);
            wf(l, b, o);
            break;
          default:
            throw Error(i(161));
        }
      } catch (T) {
        pl(l, l.return, T);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Dx(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Dx(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling);
      }
  }
  function fa(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) Ax(l, t.alternate, t), (t = t.sibling);
  }
  function Ca(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ca(4, t, t.return), Ca(t);
          break;
        case 1:
          Nt(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && _x(t, t.return, a),
            Ca(t);
          break;
        case 27:
          mu(t.stateNode);
        case 26:
        case 5:
          Nt(t, t.return), Ca(t);
          break;
        case 22:
          t.memoizedState === null && Ca(t);
          break;
        case 30:
          Ca(t);
          break;
        default:
          Ca(t);
      }
      l = l.sibling;
    }
  }
  function ia(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate,
        u = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ia(u, n, a), cu(4, n);
          break;
        case 1:
          if (
            (ia(u, n, a),
            (e = n),
            (u = e.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (b) {
              pl(e, e.return, b);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var s = e.stateNode;
            try {
              var o = u.shared.hiddenCallbacks;
              if (o !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < o.length; u++)
                  ns(o[u], s);
            } catch (b) {
              pl(e, e.return, b);
            }
          }
          a && c & 64 && gx(n), fu(n, n.return);
          break;
        case 27:
          Ex(n);
        case 26:
        case 5:
          ia(u, n, a), a && e === null && c & 4 && Sx(n), fu(n, n.return);
          break;
        case 12:
          ia(u, n, a);
          break;
        case 13:
          ia(u, n, a), a && c & 4 && Nx(u, n);
          break;
        case 22:
          n.memoizedState === null && ia(u, n, a), fu(n, n.return);
          break;
        case 30:
          break;
        default:
          ia(u, n, a);
      }
      t = t.sibling;
    }
  }
  function Wf(l, t) {
    var a = null;
    l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && we(a));
  }
  function $f(l, t) {
    (l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && we(l));
  }
  function Mt(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) jx(l, t, a, e), (t = t.sibling);
  }
  function jx(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Mt(l, t, a, e), u & 2048 && cu(9, t);
        break;
      case 1:
        Mt(l, t, a, e);
        break;
      case 3:
        Mt(l, t, a, e),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && we(l)));
        break;
      case 12:
        if (u & 2048) {
          Mt(l, t, a, e), (l = t.stateNode);
          try {
            var n = t.memoizedProps,
              c = n.id,
              s = n.onPostCommit;
            typeof s == "function" &&
              s(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0
              );
          } catch (o) {
            pl(t, t.return, o);
          }
        } else Mt(l, t, a, e);
        break;
      case 13:
        Mt(l, t, a, e);
        break;
      case 23:
        break;
      case 22:
        (n = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? Mt(l, t, a, e)
              : iu(l, t)
            : n._visibility & 2
            ? Mt(l, t, a, e)
            : ((n._visibility |= 2),
              oe(l, t, a, e, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && Wf(c, t);
        break;
      case 24:
        Mt(l, t, a, e), u & 2048 && $f(t.alternate, t);
        break;
      default:
        Mt(l, t, a, e);
    }
  }
  function oe(l, t, a, e, u) {
    for (u = u && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l,
        c = t,
        s = a,
        o = e,
        b = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          oe(n, c, s, o, u), cu(8, c);
          break;
        case 23:
          break;
        case 22:
          var T = c.stateNode;
          c.memoizedState !== null
            ? T._visibility & 2
              ? oe(n, c, s, o, u)
              : iu(n, c)
            : ((T._visibility |= 2), oe(n, c, s, o, u)),
            u && b & 2048 && Wf(c.alternate, c);
          break;
        case 24:
          oe(n, c, s, o, u), u && b & 2048 && $f(c.alternate, c);
          break;
        default:
          oe(n, c, s, o, u);
      }
      t = t.sibling;
    }
  }
  function iu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          e = t,
          u = e.flags;
        switch (e.tag) {
          case 22:
            iu(a, e), u & 2048 && Wf(e.alternate, e);
            break;
          case 24:
            iu(a, e), u & 2048 && $f(e.alternate, e);
            break;
          default:
            iu(a, e);
        }
        t = t.sibling;
      }
  }
  var su = 8192;
  function de(l) {
    if (l.subtreeFlags & su)
      for (l = l.child; l !== null; ) Rx(l), (l = l.sibling);
  }
  function Rx(l) {
    switch (l.tag) {
      case 26:
        de(l),
          l.flags & su &&
            l.memoizedState !== null &&
            rd(pt, l.memoizedState, l.memoizedProps);
        break;
      case 5:
        de(l);
        break;
      case 3:
      case 4:
        var t = pt;
        (pt = Cn(l.stateNode.containerInfo)), de(l), (pt = t);
        break;
      case 22:
        l.memoizedState === null &&
          ((t = l.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = su), (su = 16777216), de(l), (su = t))
            : de(l));
        break;
      default:
        de(l);
    }
  }
  function Ux(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do (t = l.sibling), (l.sibling = null), (l = t);
      while (l !== null);
    }
  }
  function xu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          (Ql = e), qx(e, l);
        }
      Ux(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) Hx(l), (l = l.sibling);
  }
  function Hx(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        xu(l), l.flags & 2048 && ca(9, l, l.return);
        break;
      case 3:
        xu(l);
        break;
      case 12:
        xu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), Tn(l))
          : xu(l);
        break;
      default:
        xu(l);
    }
  }
  function Tn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          (Ql = e), qx(e, l);
        }
      Ux(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          ca(8, t, t.return), Tn(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), Tn(t));
          break;
        default:
          Tn(t);
      }
      l = l.sibling;
    }
  }
  function qx(l, t) {
    for (; Ql !== null; ) {
      var a = Ql;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          we(a.memoizedState.cache);
      }
      if (((e = a.child), e !== null)) (e.return = a), (Ql = e);
      else
        l: for (a = l; Ql !== null; ) {
          e = Ql;
          var u = e.sibling,
            n = e.return;
          if ((Ox(e), e === a)) {
            Ql = null;
            break l;
          }
          if (u !== null) {
            (u.return = n), (Ql = u);
            break l;
          }
          Ql = n;
        }
    }
  }
  var z1 = {
      getCacheForType: function (l) {
        var t = Wl(Bl),
          a = t.data.get(l);
        return a === void 0 && ((a = l()), t.data.set(l, a)), a;
      },
    },
    N1 = typeof WeakMap == "function" ? WeakMap : Map,
    ml = 0,
    Tl = null,
    ul = null,
    xl = 0,
    yl = 0,
    st = null,
    sa = !1,
    he = !1,
    Ff = !1,
    Jt = 0,
    Dl = 0,
    xa = 0,
    Ba = 0,
    If = 0,
    gt = 0,
    ve = 0,
    ru = null,
    at = null,
    Pf = !1,
    li = 0,
    An = 1 / 0,
    On = null,
    ra = null,
    Kl = 0,
    oa = null,
    me = null,
    ye = 0,
    ti = 0,
    ai = null,
    Cx = null,
    ou = 0,
    ei = null;
  function xt() {
    if ((ml & 2) !== 0 && xl !== 0) return xl & -xl;
    if (g.T !== null) {
      var l = ue;
      return l !== 0 ? l : xi();
    }
    return Ii();
  }
  function Bx() {
    gt === 0 && (gt = (xl & 536870912) === 0 || hl ? ki() : 536870912);
    var l = bt.current;
    return l !== null && (l.flags |= 32), gt;
  }
  function rt(l, t, a) {
    ((l === Tl && (yl === 2 || yl === 9)) || l.cancelPendingCommit !== null) &&
      (be(l, 0), da(l, xl, gt, !1)),
      De(l, a),
      ((ml & 2) === 0 || l !== Tl) &&
        (l === Tl &&
          ((ml & 2) === 0 && (Ba |= a), Dl === 4 && da(l, xl, gt, !1)),
        Dt(l));
  }
  function Yx(l, t, a) {
    if ((ml & 6) !== 0) throw Error(i(327));
    var e = (!a && (t & 124) === 0 && (t & l.expiredLanes) === 0) || Me(l, t),
      u = e ? j1(l, t) : ci(l, t, !0),
      n = e;
    do {
      if (u === 0) {
        he && !e && da(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !M1(a))) {
          (u = ci(l, t, !1)), (n = !1);
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            (c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0);
          if (c !== 0) {
            t = c;
            l: {
              var s = l;
              u = ru;
              var o = s.current.memoizedState.isDehydrated;
              if ((o && (be(s, c).flags |= 256), (c = ci(s, c, !1)), c !== 2)) {
                if (Ff && !o) {
                  (s.errorRecoveryDisabledLanes |= n), (Ba |= n), (u = 4);
                  break l;
                }
                (n = at),
                  (at = u),
                  n !== null && (at === null ? (at = n) : at.push.apply(at, n));
              }
              u = c;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          be(l, 0), da(l, t, 0, !0);
          break;
        }
        l: {
          switch (((e = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              da(e, t, gt, !sa);
              break l;
            case 2:
              at = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && ((u = li + 300 - At()), 10 < u)) {
            if ((da(e, t, gt, !sa), Cu(e, 0, !0) !== 0)) break l;
            e.timeoutHandle = dr(
              Gx.bind(null, e, a, at, On, Pf, t, gt, Ba, ve, sa, n, 2, -0, 0),
              u
            );
            break l;
          }
          Gx(e, a, at, On, Pf, t, gt, Ba, ve, sa, n, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Dt(l);
  }
  function Gx(l, t, a, e, u, n, c, s, o, b, T, z, _, p) {
    if (
      ((l.timeoutHandle = -1),
      (z = t.subtreeFlags),
      (z & 8192 || (z & 16785408) === 16785408) &&
        ((gu = { stylesheets: null, count: 0, unsuspend: xd }),
        Rx(t),
        (z = od()),
        z !== null))
    ) {
      (l.cancelPendingCommit = z(
        wx.bind(null, l, t, n, a, e, u, c, s, o, T, 1, _, p)
      )),
        da(l, n, c, !b);
      return;
    }
    wx(l, t, n, a, e, u, c, s, o);
  }
  function M1(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var e = 0; e < a.length; e++) {
          var u = a[e],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!nt(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function da(l, t, a, e) {
    (t &= ~If),
      (t &= ~Ba),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      e && (l.warmLanes |= t),
      (e = l.expirationTimes);
    for (var u = t; 0 < u; ) {
      var n = 31 - ut(u),
        c = 1 << n;
      (e[n] = -1), (u &= ~c);
    }
    a !== 0 && $i(l, a, t);
  }
  function zn() {
    return (ml & 6) === 0 ? (du(0), !1) : !0;
  }
  function ui() {
    if (ul !== null) {
      if (yl === 0) var l = ul.return;
      else (l = ul), (Gt = ja = null), Sf(l), (xe = null), (eu = 0), (l = ul);
      for (; l !== null; ) bx(l.alternate, l), (l = l.return);
      ul = null;
    }
  }
  function be(l, t) {
    var a = l.timeoutHandle;
    a !== -1 && ((l.timeoutHandle = -1), J1(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      ui(),
      (Tl = l),
      (ul = a = Ct(l.current, null)),
      (xl = t),
      (yl = 0),
      (st = null),
      (sa = !1),
      (he = Me(l, t)),
      (Ff = !1),
      (ve = gt = If = Ba = xa = Dl = 0),
      (at = ru = null),
      (Pf = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - ut(e),
          n = 1 << u;
        (t |= l[u]), (e &= ~n);
      }
    return (Jt = t), ku(), a;
  }
  function Xx(l, t) {
    (al = null),
      (g.H = hn),
      t === ke || t === en
        ? ((t = es()), (yl = 3))
        : t === ls
        ? ((t = es()), (yl = 4))
        : (yl =
            t === ux
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (st = t),
      ul === null && ((Dl = 1), gn(l, ht(t, l.current)));
  }
  function Qx() {
    var l = g.H;
    return (g.H = hn), l === null ? hn : l;
  }
  function Zx() {
    var l = g.A;
    return (g.A = z1), l;
  }
  function ni() {
    (Dl = 4),
      sa || ((xl & 4194048) !== xl && bt.current !== null) || (he = !0),
      ((xa & 134217727) === 0 && (Ba & 134217727) === 0) ||
        Tl === null ||
        da(Tl, xl, gt, !1);
  }
  function ci(l, t, a) {
    var e = ml;
    ml |= 2;
    var u = Qx(),
      n = Zx();
    (Tl !== l || xl !== t) && ((On = null), be(l, t)), (t = !1);
    var c = Dl;
    l: do
      try {
        if (yl !== 0 && ul !== null) {
          var s = ul,
            o = st;
          switch (yl) {
            case 8:
              ui(), (c = 6);
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              bt.current === null && (t = !0);
              var b = yl;
              if (((yl = 0), (st = null), ge(l, s, o, b), a && he)) {
                c = 0;
                break l;
              }
              break;
            default:
              (b = yl), (yl = 0), (st = null), ge(l, s, o, b);
          }
        }
        D1(), (c = Dl);
        break;
      } catch (T) {
        Xx(l, T);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Gt = ja = null),
      (ml = e),
      (g.H = u),
      (g.A = n),
      ul === null && ((Tl = null), (xl = 0), ku()),
      c
    );
  }
  function D1() {
    for (; ul !== null; ) Vx(ul);
  }
  function j1(l, t) {
    var a = ml;
    ml |= 2;
    var e = Qx(),
      u = Zx();
    Tl !== l || xl !== t
      ? ((On = null), (An = At() + 500), be(l, t))
      : (he = Me(l, t));
    l: do
      try {
        if (yl !== 0 && ul !== null) {
          t = ul;
          var n = st;
          t: switch (yl) {
            case 1:
              (yl = 0), (st = null), ge(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (ts(n)) {
                (yl = 0), (st = null), Lx(t);
                break;
              }
              (t = function () {
                (yl !== 2 && yl !== 9) || Tl !== l || (yl = 7), Dt(l);
              }),
                n.then(t, t);
              break l;
            case 3:
              yl = 7;
              break l;
            case 4:
              yl = 5;
              break l;
            case 7:
              ts(n)
                ? ((yl = 0), (st = null), Lx(t))
                : ((yl = 0), (st = null), ge(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (ul.tag) {
                case 26:
                  c = ul.memoizedState;
                case 5:
                case 27:
                  var s = ul;
                  if (!c || Ar(c)) {
                    (yl = 0), (st = null);
                    var o = s.sibling;
                    if (o !== null) ul = o;
                    else {
                      var b = s.return;
                      b !== null ? ((ul = b), Nn(b)) : (ul = null);
                    }
                    break t;
                  }
              }
              (yl = 0), (st = null), ge(l, t, n, 5);
              break;
            case 6:
              (yl = 0), (st = null), ge(l, t, n, 6);
              break;
            case 8:
              ui(), (Dl = 6);
              break l;
            default:
              throw Error(i(462));
          }
        }
        R1();
        break;
      } catch (T) {
        Xx(l, T);
      }
    while (!0);
    return (
      (Gt = ja = null),
      (g.H = e),
      (g.A = u),
      (ml = a),
      ul !== null ? 0 : ((Tl = null), (xl = 0), ku(), Dl)
    );
  }
  function R1() {
    for (; ul !== null && !Pr(); ) Vx(ul);
  }
  function Vx(l) {
    var t = mx(l.alternate, l, Jt);
    (l.memoizedProps = l.pendingProps), t === null ? Nn(l) : (ul = t);
  }
  function Lx(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = xx(a, t, t.pendingProps, t.type, void 0, xl);
        break;
      case 11:
        t = xx(a, t, t.pendingProps, t.type.render, t.ref, xl);
        break;
      case 5:
        Sf(t);
      default:
        bx(a, t), (t = ul = K0(t, Jt)), (t = mx(a, t, Jt));
    }
    (l.memoizedProps = l.pendingProps), t === null ? Nn(l) : (ul = t);
  }
  function ge(l, t, a, e) {
    (Gt = ja = null), Sf(t), (xe = null), (eu = 0);
    var u = t.return;
    try {
      if (S1(l, u, t, a, xl)) {
        (Dl = 1), gn(l, ht(a, l.current)), (ul = null);
        return;
      }
    } catch (n) {
      if (u !== null) throw ((ul = u), n);
      (Dl = 1), gn(l, ht(a, l.current)), (ul = null);
      return;
    }
    t.flags & 32768
      ? (hl || e === 1
          ? (l = !0)
          : he || (xl & 536870912) !== 0
          ? (l = !1)
          : ((sa = l = !0),
            (e === 2 || e === 9 || e === 3 || e === 6) &&
              ((e = bt.current),
              e !== null && e.tag === 13 && (e.flags |= 16384))),
        Kx(t, l))
      : Nn(t);
  }
  function Nn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Kx(t, sa);
        return;
      }
      l = t.return;
      var a = E1(t.alternate, t, Jt);
      if (a !== null) {
        ul = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ul = t;
        return;
      }
      ul = t = l;
    } while (t !== null);
    Dl === 0 && (Dl = 5);
  }
  function Kx(l, t) {
    do {
      var a = T1(l.alternate, l);
      if (a !== null) {
        (a.flags &= 32767), (ul = a);
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        ul = l;
        return;
      }
      ul = l = a;
    } while (l !== null);
    (Dl = 6), (ul = null);
  }
  function wx(l, t, a, e, u, n, c, s, o) {
    l.cancelPendingCommit = null;
    do Mn();
    while (Kl !== 0);
    if ((ml & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === l.current) throw Error(i(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= Wc),
        so(l, a, n, c, s, o),
        l === Tl && ((ul = Tl = null), (xl = 0)),
        (me = t),
        (oa = l),
        (ye = a),
        (ti = n),
        (ai = u),
        (Cx = e),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            C1(Uu, function () {
              return Fx(), null;
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || e)
      ) {
        (e = g.T), (g.T = null), (u = j.p), (j.p = 2), (c = ml), (ml |= 4);
        try {
          A1(l, t, a);
        } finally {
          (ml = c), (j.p = u), (g.T = e);
        }
      }
      (Kl = 1), Jx(), kx(), Wx();
    }
  }
  function Jx() {
    if (Kl === 1) {
      Kl = 0;
      var l = oa,
        t = me,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        (a = g.T), (g.T = null);
        var e = j.p;
        j.p = 2;
        var u = ml;
        ml |= 4;
        try {
          Mx(t, l);
          var n = bi,
            c = q0(l.containerInfo),
            s = n.focusedElem,
            o = n.selectionRange;
          if (
            c !== s &&
            s &&
            s.ownerDocument &&
            H0(s.ownerDocument.documentElement, s)
          ) {
            if (o !== null && Lc(s)) {
              var b = o.start,
                T = o.end;
              if ((T === void 0 && (T = b), "selectionStart" in s))
                (s.selectionStart = b),
                  (s.selectionEnd = Math.min(T, s.value.length));
              else {
                var z = s.ownerDocument || document,
                  _ = (z && z.defaultView) || window;
                if (_.getSelection) {
                  var p = _.getSelection(),
                    F = s.textContent.length,
                    J = Math.min(o.start, F),
                    _l = o.end === void 0 ? J : Math.min(o.end, F);
                  !p.extend && J > _l && ((c = _l), (_l = J), (J = c));
                  var v = U0(s, J),
                    h = U0(s, _l);
                  if (
                    v &&
                    h &&
                    (p.rangeCount !== 1 ||
                      p.anchorNode !== v.node ||
                      p.anchorOffset !== v.offset ||
                      p.focusNode !== h.node ||
                      p.focusOffset !== h.offset)
                  ) {
                    var y = z.createRange();
                    y.setStart(v.node, v.offset),
                      p.removeAllRanges(),
                      J > _l
                        ? (p.addRange(y), p.extend(h.node, h.offset))
                        : (y.setEnd(h.node, h.offset), p.addRange(y));
                  }
                }
              }
            }
            for (z = [], p = s; (p = p.parentNode); )
              p.nodeType === 1 &&
                z.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < z.length;
              s++
            ) {
              var O = z[s];
              (O.element.scrollLeft = O.left), (O.element.scrollTop = O.top);
            }
          }
          (Qn = !!yi), (bi = yi = null);
        } finally {
          (ml = u), (j.p = e), (g.T = a);
        }
      }
      (l.current = t), (Kl = 2);
    }
  }
  function kx() {
    if (Kl === 2) {
      Kl = 0;
      var l = oa,
        t = me,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        (a = g.T), (g.T = null);
        var e = j.p;
        j.p = 2;
        var u = ml;
        ml |= 4;
        try {
          Ax(l, t.alternate, t);
        } finally {
          (ml = u), (j.p = e), (g.T = a);
        }
      }
      Kl = 3;
    }
  }
  function Wx() {
    if (Kl === 4 || Kl === 3) {
      (Kl = 0), lo();
      var l = oa,
        t = me,
        a = ye,
        e = Cx;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Kl = 5)
        : ((Kl = 0), (me = oa = null), $x(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (ra = null),
        Ec(a),
        (t = t.stateNode),
        et && typeof et.onCommitFiberRoot == "function")
      )
        try {
          et.onCommitFiberRoot(Ne, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        (t = g.T), (u = j.p), (j.p = 2), (g.T = null);
        try {
          for (var n = l.onRecoverableError, c = 0; c < e.length; c++) {
            var s = e[c];
            n(s.value, { componentStack: s.stack });
          }
        } finally {
          (g.T = t), (j.p = u);
        }
      }
      (ye & 3) !== 0 && Mn(),
        Dt(l),
        (u = l.pendingLanes),
        (a & 4194090) !== 0 && (u & 42) !== 0
          ? l === ei
            ? ou++
            : ((ou = 0), (ei = l))
          : (ou = 0),
        du(0);
    }
  }
  function $x(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), we(t)));
  }
  function Mn(l) {
    return Jx(), kx(), Wx(), Fx();
  }
  function Fx() {
    if (Kl !== 5) return !1;
    var l = oa,
      t = ti;
    ti = 0;
    var a = Ec(ye),
      e = g.T,
      u = j.p;
    try {
      (j.p = 32 > a ? 32 : a), (g.T = null), (a = ai), (ai = null);
      var n = oa,
        c = ye;
      if (((Kl = 0), (me = oa = null), (ye = 0), (ml & 6) !== 0))
        throw Error(i(331));
      var s = ml;
      if (
        ((ml |= 4),
        Hx(n.current),
        jx(n, n.current, c, a),
        (ml = s),
        du(0, !1),
        et && typeof et.onPostCommitFiberRoot == "function")
      )
        try {
          et.onPostCommitFiberRoot(Ne, n);
        } catch {}
      return !0;
    } finally {
      (j.p = u), (g.T = e), $x(l, t);
    }
  }
  function Ix(l, t, a) {
    (t = ht(a, t)),
      (t = qf(l.stateNode, t, 2)),
      (l = aa(l, t, 2)),
      l !== null && (De(l, 2), Dt(l));
  }
  function pl(l, t, a) {
    if (l.tag === 3) Ix(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Ix(t, l, a);
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              (ra === null || !ra.has(e)))
          ) {
            (l = ht(a, l)),
              (a = ax(2)),
              (e = aa(t, a, 2)),
              e !== null && (ex(a, e, t, l), De(e, 2), Dt(e));
            break;
          }
        }
        t = t.return;
      }
  }
  function fi(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new N1();
      var u = new Set();
      e.set(t, u);
    } else (u = e.get(t)), u === void 0 && ((u = new Set()), e.set(t, u));
    u.has(a) ||
      ((Ff = !0), u.add(a), (l = U1.bind(null, l, t, a)), t.then(l, l));
  }
  function U1(l, t, a) {
    var e = l.pingCache;
    e !== null && e.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      Tl === l &&
        (xl & a) === a &&
        (Dl === 4 || (Dl === 3 && (xl & 62914560) === xl && 300 > At() - li)
          ? (ml & 2) === 0 && be(l, 0)
          : (If |= a),
        ve === xl && (ve = 0)),
      Dt(l);
  }
  function Px(l, t) {
    t === 0 && (t = Wi()), (l = le(l, t)), l !== null && (De(l, t), Dt(l));
  }
  function H1(l) {
    var t = l.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), Px(l, a);
  }
  function q1(l, t) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var e = l.stateNode,
          u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    e !== null && e.delete(t), Px(l, a);
  }
  function C1(l, t) {
    return gc(l, t);
  }
  var Dn = null,
    _e = null,
    ii = !1,
    jn = !1,
    si = !1,
    Ya = 0;
  function Dt(l) {
    l !== _e &&
      l.next === null &&
      (_e === null ? (Dn = _e = l) : (_e = _e.next = l)),
      (jn = !0),
      ii || ((ii = !0), Y1());
  }
  function du(l, t) {
    if (!si && jn) {
      si = !0;
      do
        for (var a = !1, e = Dn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = e.suspendedLanes,
                s = e.pingedLanes;
              (n = (1 << (31 - ut(42 | l) + 1)) - 1),
                (n &= u & ~(c & ~s)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0);
            }
            n !== 0 && ((a = !0), er(e, n));
          } else
            (n = xl),
              (n = Cu(
                e,
                e === Tl ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1
              )),
              (n & 3) === 0 || Me(e, n) || ((a = !0), er(e, n));
          e = e.next;
        }
      while (a);
      si = !1;
    }
  }
  function B1() {
    lr();
  }
  function lr() {
    jn = ii = !1;
    var l = 0;
    Ya !== 0 && (w1() && (l = Ya), (Ya = 0));
    for (var t = At(), a = null, e = Dn; e !== null; ) {
      var u = e.next,
        n = tr(e, t);
      n === 0
        ? ((e.next = null),
          a === null ? (Dn = u) : (a.next = u),
          u === null && (_e = a))
        : ((a = e), (l !== 0 || (n & 3) !== 0) && (jn = !0)),
        (e = u);
    }
    du(l);
  }
  function tr(l, t) {
    for (
      var a = l.suspendedLanes,
        e = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;

    ) {
      var c = 31 - ut(n),
        s = 1 << c,
        o = u[c];
      o === -1
        ? ((s & a) === 0 || (s & e) !== 0) && (u[c] = io(s, t))
        : o <= t && (l.expiredLanes |= s),
        (n &= ~s);
    }
    if (
      ((t = Tl),
      (a = xl),
      (a = Cu(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      (e = l.callbackNode),
      a === 0 ||
        (l === t && (yl === 2 || yl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && _c(e),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Me(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((e !== null && _c(e), Ec(a))) {
        case 2:
        case 8:
          a = wi;
          break;
        case 32:
          a = Uu;
          break;
        case 268435456:
          a = Ji;
          break;
        default:
          a = Uu;
      }
      return (
        (e = ar.bind(null, l)),
        (a = gc(a, e)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      e !== null && e !== null && _c(e),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function ar(l, t) {
    if (Kl !== 0 && Kl !== 5)
      return (l.callbackNode = null), (l.callbackPriority = 0), null;
    var a = l.callbackNode;
    if (Mn() && l.callbackNode !== a) return null;
    var e = xl;
    return (
      (e = Cu(
        l,
        l === Tl ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1
      )),
      e === 0
        ? null
        : (Yx(l, e, t),
          tr(l, At()),
          l.callbackNode != null && l.callbackNode === a
            ? ar.bind(null, l)
            : null)
    );
  }
  function er(l, t) {
    if (Mn()) return null;
    Yx(l, t, !0);
  }
  function Y1() {
    k1(function () {
      (ml & 6) !== 0 ? gc(Ki, B1) : lr();
    });
  }
  function xi() {
    return Ya === 0 && (Ya = ki()), Ya;
  }
  function ur(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
      ? l
      : Qu("" + l);
  }
  function nr(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function G1(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = ur((u[Il] || null).action),
        c = e.submitter;
      c &&
        ((t = (t = c[Il] || null)
          ? ur(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var s = new Ku("action", "action", null, e, u);
      l.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (Ya !== 0) {
                  var o = c ? nr(u, c) : new FormData(u);
                  Df(
                    a,
                    { pending: !0, data: o, method: u.method, action: n },
                    null,
                    o
                  );
                }
              } else
                typeof n == "function" &&
                  (s.preventDefault(),
                  (o = c ? nr(u, c) : new FormData(u)),
                  Df(
                    a,
                    { pending: !0, data: o, method: u.method, action: n },
                    n,
                    o
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var ri = 0; ri < kc.length; ri++) {
    var oi = kc[ri],
      X1 = oi.toLowerCase(),
      Q1 = oi[0].toUpperCase() + oi.slice(1);
    St(X1, "on" + Q1);
  }
  St(Y0, "onAnimationEnd"),
    St(G0, "onAnimationIteration"),
    St(X0, "onAnimationStart"),
    St("dblclick", "onDoubleClick"),
    St("focusin", "onFocus"),
    St("focusout", "onBlur"),
    St(u1, "onTransitionRun"),
    St(n1, "onTransitionStart"),
    St(c1, "onTransitionCancel"),
    St(Q0, "onTransitionEnd"),
    La("onMouseEnter", ["mouseout", "mouseover"]),
    La("onMouseLeave", ["mouseout", "mouseover"]),
    La("onPointerEnter", ["pointerout", "pointerover"]),
    La("onPointerLeave", ["pointerout", "pointerover"]),
    pa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    pa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    pa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    pa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    pa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    pa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var hu =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Z1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(hu)
    );
  function cr(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a],
        u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = e.length - 1; 0 <= c; c--) {
            var s = e[c],
              o = s.instance,
              b = s.currentTarget;
            if (((s = s.listener), o !== n && u.isPropagationStopped()))
              break l;
            (n = s), (u.currentTarget = b);
            try {
              n(u);
            } catch (T) {
              bn(T);
            }
            (u.currentTarget = null), (n = o);
          }
        else
          for (c = 0; c < e.length; c++) {
            if (
              ((s = e[c]),
              (o = s.instance),
              (b = s.currentTarget),
              (s = s.listener),
              o !== n && u.isPropagationStopped())
            )
              break l;
            (n = s), (u.currentTarget = b);
            try {
              n(u);
            } catch (T) {
              bn(T);
            }
            (u.currentTarget = null), (n = o);
          }
      }
    }
  }
  function nl(l, t) {
    var a = t[Tc];
    a === void 0 && (a = t[Tc] = new Set());
    var e = l + "__bubble";
    a.has(e) || (fr(t, l, 2, !1), a.add(e));
  }
  function di(l, t, a) {
    var e = 0;
    t && (e |= 4), fr(a, l, e, t);
  }
  var Rn = "_reactListening" + Math.random().toString(36).slice(2);
  function hi(l) {
    if (!l[Rn]) {
      (l[Rn] = !0),
        l0.forEach(function (a) {
          a !== "selectionchange" && (Z1.has(a) || di(a, !1, l), di(a, !0, l));
        });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Rn] || ((t[Rn] = !0), di("selectionchange", !1, t));
    }
  }
  function fr(l, t, a, e) {
    switch (jr(t)) {
      case 2:
        var u = vd;
        break;
      case 8:
        u = md;
        break;
      default:
        u = Ni;
    }
    (a = u.bind(null, t, a, l)),
      (u = void 0),
      !qc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      e
        ? u !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: u })
          : l.addEventListener(t, a, !0)
        : u !== void 0
        ? l.addEventListener(t, a, { passive: u })
        : l.addEventListener(t, a, !1);
  }
  function vi(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (;;) {
        if (e === null) return;
        var c = e.tag;
        if (c === 3 || c === 4) {
          var s = e.stateNode.containerInfo;
          if (s === u) break;
          if (c === 4)
            for (c = e.return; c !== null; ) {
              var o = c.tag;
              if ((o === 3 || o === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; s !== null; ) {
            if (((c = Qa(s)), c === null)) return;
            if (((o = c.tag), o === 5 || o === 6 || o === 26 || o === 27)) {
              e = n = c;
              continue l;
            }
            s = s.parentNode;
          }
        }
        e = e.return;
      }
    h0(function () {
      var b = n,
        T = Uc(a),
        z = [];
      l: {
        var _ = Z0.get(l);
        if (_ !== void 0) {
          var p = Ku,
            F = l;
          switch (l) {
            case "keypress":
              if (Vu(a) === 0) break l;
            case "keydown":
            case "keyup":
              p = Co;
              break;
            case "focusin":
              (F = "focus"), (p = Gc);
              break;
            case "focusout":
              (F = "blur"), (p = Gc);
              break;
            case "beforeblur":
            case "afterblur":
              p = Gc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = y0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = To;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = Go;
              break;
            case Y0:
            case G0:
            case X0:
              p = zo;
              break;
            case Q0:
              p = Qo;
              break;
            case "scroll":
            case "scrollend":
              p = po;
              break;
            case "wheel":
              p = Vo;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = Mo;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = g0;
              break;
            case "toggle":
            case "beforetoggle":
              p = Ko;
          }
          var J = (t & 4) !== 0,
            _l = !J && (l === "scroll" || l === "scrollend"),
            v = J ? (_ !== null ? _ + "Capture" : null) : _;
          J = [];
          for (var h = b, y; h !== null; ) {
            var O = h;
            if (
              ((y = O.stateNode),
              (O = O.tag),
              (O !== 5 && O !== 26 && O !== 27) ||
                y === null ||
                v === null ||
                ((O = Ue(h, v)), O != null && J.push(vu(h, O, y))),
              _l)
            )
              break;
            h = h.return;
          }
          0 < J.length &&
            ((_ = new p(_, F, null, a, T)), z.push({ event: _, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((_ = l === "mouseover" || l === "pointerover"),
            (p = l === "mouseout" || l === "pointerout"),
            _ &&
              a !== Rc &&
              (F = a.relatedTarget || a.fromElement) &&
              (Qa(F) || F[Xa]))
          )
            break l;
          if (
            (p || _) &&
            ((_ =
              T.window === T
                ? T
                : (_ = T.ownerDocument)
                ? _.defaultView || _.parentWindow
                : window),
            p
              ? ((F = a.relatedTarget || a.toElement),
                (p = b),
                (F = F ? Qa(F) : null),
                F !== null &&
                  ((_l = M(F)),
                  (J = F.tag),
                  F !== _l || (J !== 5 && J !== 27 && J !== 6)) &&
                  (F = null))
              : ((p = null), (F = b)),
            p !== F)
          ) {
            if (
              ((J = y0),
              (O = "onMouseLeave"),
              (v = "onMouseEnter"),
              (h = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((J = g0),
                (O = "onPointerLeave"),
                (v = "onPointerEnter"),
                (h = "pointer")),
              (_l = p == null ? _ : Re(p)),
              (y = F == null ? _ : Re(F)),
              (_ = new J(O, h + "leave", p, a, T)),
              (_.target = _l),
              (_.relatedTarget = y),
              (O = null),
              Qa(T) === b &&
                ((J = new J(v, h + "enter", F, a, T)),
                (J.target = y),
                (J.relatedTarget = _l),
                (O = J)),
              (_l = O),
              p && F)
            )
              t: {
                for (J = p, v = F, h = 0, y = J; y; y = Se(y)) h++;
                for (y = 0, O = v; O; O = Se(O)) y++;
                for (; 0 < h - y; ) (J = Se(J)), h--;
                for (; 0 < y - h; ) (v = Se(v)), y--;
                for (; h--; ) {
                  if (J === v || (v !== null && J === v.alternate)) break t;
                  (J = Se(J)), (v = Se(v));
                }
                J = null;
              }
            else J = null;
            p !== null && ir(z, _, p, J, !1),
              F !== null && _l !== null && ir(z, _l, F, J, !0);
          }
        }
        l: {
          if (
            ((_ = b ? Re(b) : window),
            (p = _.nodeName && _.nodeName.toLowerCase()),
            p === "select" || (p === "input" && _.type === "file"))
          )
            var G = z0;
          else if (A0(_))
            if (N0) G = t1;
            else {
              G = Po;
              var el = Io;
            }
          else
            (p = _.nodeName),
              !p ||
              p.toLowerCase() !== "input" ||
              (_.type !== "checkbox" && _.type !== "radio")
                ? b && jc(b.elementType) && (G = z0)
                : (G = l1);
          if (G && (G = G(l, b))) {
            O0(z, G, a, T);
            break l;
          }
          el && el(l, _, b),
            l === "focusout" &&
              b &&
              _.type === "number" &&
              b.memoizedProps.value != null &&
              Dc(_, "number", _.value);
        }
        switch (((el = b ? Re(b) : window), l)) {
          case "focusin":
            (A0(el) || el.contentEditable === "true") &&
              ((Fa = el), (Kc = b), (Qe = null));
            break;
          case "focusout":
            Qe = Kc = Fa = null;
            break;
          case "mousedown":
            wc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (wc = !1), C0(z, a, T);
            break;
          case "selectionchange":
            if (e1) break;
          case "keydown":
          case "keyup":
            C0(z, a, T);
        }
        var V;
        if (Qc)
          l: {
            switch (l) {
              case "compositionstart":
                var k = "onCompositionStart";
                break l;
              case "compositionend":
                k = "onCompositionEnd";
                break l;
              case "compositionupdate":
                k = "onCompositionUpdate";
                break l;
            }
            k = void 0;
          }
        else
          $a
            ? E0(l, a) && (k = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (k = "onCompositionStart");
        k &&
          (_0 &&
            a.locale !== "ko" &&
            ($a || k !== "onCompositionStart"
              ? k === "onCompositionEnd" && $a && (V = v0())
              : ((It = T),
                (Cc = "value" in It ? It.value : It.textContent),
                ($a = !0))),
          (el = Un(b, k)),
          0 < el.length &&
            ((k = new b0(k, l, null, a, T)),
            z.push({ event: k, listeners: el }),
            V ? (k.data = V) : ((V = T0(a)), V !== null && (k.data = V)))),
          (V = Jo ? ko(l, a) : Wo(l, a)) &&
            ((k = Un(b, "onBeforeInput")),
            0 < k.length &&
              ((el = new b0("onBeforeInput", "beforeinput", null, a, T)),
              z.push({ event: el, listeners: k }),
              (el.data = V))),
          G1(z, l, b, a, T);
      }
      cr(z, t);
    });
  }
  function vu(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function Un(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = Ue(l, a)),
          u != null && e.unshift(vu(l, u, n)),
          (u = Ue(l, t)),
          u != null && e.push(vu(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function Se(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function ir(l, t, a, e, u) {
    for (var n = t._reactName, c = []; a !== null && a !== e; ) {
      var s = a,
        o = s.alternate,
        b = s.stateNode;
      if (((s = s.tag), o !== null && o === e)) break;
      (s !== 5 && s !== 26 && s !== 27) ||
        b === null ||
        ((o = b),
        u
          ? ((b = Ue(a, n)), b != null && c.unshift(vu(a, b, o)))
          : u || ((b = Ue(a, n)), b != null && c.push(vu(a, b, o)))),
        (a = a.return);
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var V1 = /\r\n?/g,
    L1 = /\u0000|\uFFFD/g;
  function sr(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        V1,
        `
`
      )
      .replace(L1, "");
  }
  function xr(l, t) {
    return (t = sr(t)), sr(l) === t;
  }
  function Hn() {}
  function gl(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string"
          ? t === "body" || (t === "textarea" && e === "") || Ja(l, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            t !== "body" &&
            Ja(l, "" + e);
        break;
      case "className":
        Yu(l, "class", e);
        break;
      case "tabIndex":
        Yu(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Yu(l, a, e);
        break;
      case "style":
        o0(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          Yu(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "symbol" ||
          typeof e == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        (e = Qu("" + e)), l.setAttribute(a, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && gl(l, t, "name", u.name, u, null),
                gl(l, t, "formEncType", u.formEncType, u, null),
                gl(l, t, "formMethod", u.formMethod, u, null),
                gl(l, t, "formTarget", u.formTarget, u, null))
              : (gl(l, t, "encType", u.encType, u, null),
                gl(l, t, "method", u.method, u, null),
                gl(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        (e = Qu("" + e)), l.setAttribute(a, e);
        break;
      case "onClick":
        e != null && (l.onclick = Hn);
        break;
      case "onScroll":
        e != null && nl("scroll", l);
        break;
      case "onScrollEnd":
        e != null && nl("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(i(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(i(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "boolean" ||
          typeof e == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        (a = Qu("" + e)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "" + e)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        e && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0
          ? l.setAttribute(a, "")
          : e !== !1 &&
            e != null &&
            typeof e != "function" &&
            typeof e != "symbol"
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null &&
        typeof e != "function" &&
        typeof e != "symbol" &&
        !isNaN(e) &&
        1 <= e
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? l.removeAttribute(a)
          : l.setAttribute(a, e);
        break;
      case "popover":
        nl("beforetoggle", l), nl("toggle", l), Bu(l, "popover", e);
        break;
      case "xlinkActuate":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Bu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = _o.get(a) || a), Bu(l, a, e));
    }
  }
  function mi(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        o0(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(i(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(i(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? Ja(l, e)
          : (typeof e == "number" || typeof e == "bigint") && Ja(l, "" + e);
        break;
      case "onScroll":
        e != null && nl("scroll", l);
        break;
      case "onScrollEnd":
        e != null && nl("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = Hn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!t0.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (t = a.slice(2, u ? a.length - 7 : void 0)),
              (n = l[Il] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof e == "function")
            ) {
              typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, e, u);
              break l;
            }
            a in l
              ? (l[a] = e)
              : e === !0
              ? l.setAttribute(a, "")
              : Bu(l, a, e);
          }
    }
  }
  function wl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        nl("error", l), nl("load", l);
        var e = !1,
          u = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  gl(l, t, n, c, a, null);
              }
          }
        u && gl(l, t, "srcSet", a.srcSet, a, null),
          e && gl(l, t, "src", a.src, a, null);
        return;
      case "input":
        nl("invalid", l);
        var s = (n = c = u = null),
          o = null,
          b = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var T = a[e];
            if (T != null)
              switch (e) {
                case "name":
                  u = T;
                  break;
                case "type":
                  c = T;
                  break;
                case "checked":
                  o = T;
                  break;
                case "defaultChecked":
                  b = T;
                  break;
                case "value":
                  n = T;
                  break;
                case "defaultValue":
                  s = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null) throw Error(i(137, t));
                  break;
                default:
                  gl(l, t, e, T, a, null);
              }
          }
        i0(l, n, s, o, b, c, u, !1), Gu(l);
        return;
      case "select":
        nl("invalid", l), (e = c = n = null);
        for (u in a)
          if (a.hasOwnProperty(u) && ((s = a[u]), s != null))
            switch (u) {
              case "value":
                n = s;
                break;
              case "defaultValue":
                c = s;
                break;
              case "multiple":
                e = s;
              default:
                gl(l, t, u, s, a, null);
            }
        (t = n),
          (a = c),
          (l.multiple = !!e),
          t != null ? wa(l, !!e, t, !1) : a != null && wa(l, !!e, a, !0);
        return;
      case "textarea":
        nl("invalid", l), (n = u = e = null);
        for (c in a)
          if (a.hasOwnProperty(c) && ((s = a[c]), s != null))
            switch (c) {
              case "value":
                e = s;
                break;
              case "defaultValue":
                u = s;
                break;
              case "children":
                n = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(i(91));
                break;
              default:
                gl(l, t, c, s, a, null);
            }
        x0(l, e, u, n), Gu(l);
        return;
      case "option":
        for (o in a)
          if (a.hasOwnProperty(o) && ((e = a[o]), e != null))
            switch (o) {
              case "selected":
                l.selected =
                  e && typeof e != "function" && typeof e != "symbol";
                break;
              default:
                gl(l, t, o, e, a, null);
            }
        return;
      case "dialog":
        nl("beforetoggle", l), nl("toggle", l), nl("cancel", l), nl("close", l);
        break;
      case "iframe":
      case "object":
        nl("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < hu.length; e++) nl(hu[e], l);
        break;
      case "image":
        nl("error", l), nl("load", l);
        break;
      case "details":
        nl("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        nl("error", l), nl("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (b in a)
          if (a.hasOwnProperty(b) && ((e = a[b]), e != null))
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                gl(l, t, b, e, a, null);
            }
        return;
      default:
        if (jc(t)) {
          for (T in a)
            a.hasOwnProperty(T) &&
              ((e = a[T]), e !== void 0 && mi(l, t, T, e, a, void 0));
          return;
        }
    }
    for (s in a)
      a.hasOwnProperty(s) && ((e = a[s]), e != null && gl(l, t, s, e, a, null));
  }
  function K1(l, t, a, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          n = null,
          c = null,
          s = null,
          o = null,
          b = null,
          T = null;
        for (p in a) {
          var z = a[p];
          if (a.hasOwnProperty(p) && z != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                o = z;
              default:
                e.hasOwnProperty(p) || gl(l, t, p, null, e, z);
            }
        }
        for (var _ in e) {
          var p = e[_];
          if (((z = a[_]), e.hasOwnProperty(_) && (p != null || z != null)))
            switch (_) {
              case "type":
                n = p;
                break;
              case "name":
                u = p;
                break;
              case "checked":
                b = p;
                break;
              case "defaultChecked":
                T = p;
                break;
              case "value":
                c = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(i(137, t));
                break;
              default:
                p !== z && gl(l, t, _, p, e, z);
            }
        }
        Mc(l, c, s, o, b, T, n, u);
        return;
      case "select":
        p = c = s = _ = null;
        for (n in a)
          if (((o = a[n]), a.hasOwnProperty(n) && o != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                p = o;
              default:
                e.hasOwnProperty(n) || gl(l, t, n, null, e, o);
            }
        for (u in e)
          if (
            ((n = e[u]),
            (o = a[u]),
            e.hasOwnProperty(u) && (n != null || o != null))
          )
            switch (u) {
              case "value":
                _ = n;
                break;
              case "defaultValue":
                s = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== o && gl(l, t, u, n, e, o);
            }
        (t = s),
          (a = c),
          (e = p),
          _ != null
            ? wa(l, !!a, _, !1)
            : !!e != !!a &&
              (t != null ? wa(l, !!a, t, !0) : wa(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        p = _ = null;
        for (s in a)
          if (
            ((u = a[s]),
            a.hasOwnProperty(s) && u != null && !e.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                gl(l, t, s, null, e, u);
            }
        for (c in e)
          if (
            ((u = e[c]),
            (n = a[c]),
            e.hasOwnProperty(c) && (u != null || n != null))
          )
            switch (c) {
              case "value":
                _ = u;
                break;
              case "defaultValue":
                p = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(i(91));
                break;
              default:
                u !== n && gl(l, t, c, u, e, n);
            }
        s0(l, _, p);
        return;
      case "option":
        for (var F in a)
          if (
            ((_ = a[F]),
            a.hasOwnProperty(F) && _ != null && !e.hasOwnProperty(F))
          )
            switch (F) {
              case "selected":
                l.selected = !1;
                break;
              default:
                gl(l, t, F, null, e, _);
            }
        for (o in e)
          if (
            ((_ = e[o]),
            (p = a[o]),
            e.hasOwnProperty(o) && _ !== p && (_ != null || p != null))
          )
            switch (o) {
              case "selected":
                l.selected =
                  _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                gl(l, t, o, _, e, p);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var J in a)
          (_ = a[J]),
            a.hasOwnProperty(J) &&
              _ != null &&
              !e.hasOwnProperty(J) &&
              gl(l, t, J, null, e, _);
        for (b in e)
          if (
            ((_ = e[b]),
            (p = a[b]),
            e.hasOwnProperty(b) && _ !== p && (_ != null || p != null))
          )
            switch (b) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(i(137, t));
                break;
              default:
                gl(l, t, b, _, e, p);
            }
        return;
      default:
        if (jc(t)) {
          for (var _l in a)
            (_ = a[_l]),
              a.hasOwnProperty(_l) &&
                _ !== void 0 &&
                !e.hasOwnProperty(_l) &&
                mi(l, t, _l, void 0, e, _);
          for (T in e)
            (_ = e[T]),
              (p = a[T]),
              !e.hasOwnProperty(T) ||
                _ === p ||
                (_ === void 0 && p === void 0) ||
                mi(l, t, T, _, e, p);
          return;
        }
    }
    for (var v in a)
      (_ = a[v]),
        a.hasOwnProperty(v) &&
          _ != null &&
          !e.hasOwnProperty(v) &&
          gl(l, t, v, null, e, _);
    for (z in e)
      (_ = e[z]),
        (p = a[z]),
        !e.hasOwnProperty(z) ||
          _ === p ||
          (_ == null && p == null) ||
          gl(l, t, z, _, e, p);
  }
  var yi = null,
    bi = null;
  function qn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function rr(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function or(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function gi(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var _i = null;
  function w1() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === _i
        ? !1
        : ((_i = l), !0)
      : ((_i = null), !1);
  }
  var dr = typeof setTimeout == "function" ? setTimeout : void 0,
    J1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    hr = typeof Promise == "function" ? Promise : void 0,
    k1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof hr < "u"
        ? function (l) {
            return hr.resolve(null).then(l).catch(W1);
          }
        : dr;
  function W1(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function ha(l) {
    return l === "head";
  }
  function vr(l, t) {
    var a = t,
      e = 0,
      u = 0;
    do {
      var n = a.nextSibling;
      if ((l.removeChild(a), n && n.nodeType === 8))
        if (((a = n.data), a === "/$")) {
          if (0 < e && 8 > e) {
            a = e;
            var c = l.ownerDocument;
            if ((a & 1 && mu(c.documentElement), a & 2 && mu(c.body), a & 4))
              for (a = c.head, mu(a), c = a.firstChild; c; ) {
                var s = c.nextSibling,
                  o = c.nodeName;
                c[je] ||
                  o === "SCRIPT" ||
                  o === "STYLE" ||
                  (o === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
                  a.removeChild(c),
                  (c = s);
              }
          }
          if (u === 0) {
            l.removeChild(n), Tu(t);
            return;
          }
          u--;
        } else
          a === "$" || a === "$?" || a === "$!"
            ? u++
            : (e = a.charCodeAt(0) - 48);
      else e = 0;
      a = n;
    } while (a);
    Tu(t);
  }
  function Si(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Si(a), Ac(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function $1(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[je])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = Et(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function F1(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = Et(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function pi(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState === "complete")
    );
  }
  function I1(l, t) {
    var a = l.ownerDocument;
    if (l.data !== "$?" || a.readyState === "complete") t();
    else {
      var e = function () {
        t(), a.removeEventListener("DOMContentLoaded", e);
      };
      a.addEventListener("DOMContentLoaded", e), (l._reactRetry = e);
    }
  }
  function Et(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Ei = null;
  function mr(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return l;
          t--;
        } else a === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function yr(l, t, a) {
    switch (((t = qn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(i(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(i(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(i(454));
        return l;
      default:
        throw Error(i(451));
    }
  }
  function mu(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    Ac(l);
  }
  var _t = new Map(),
    br = new Set();
  function Cn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
      ? l
      : l.ownerDocument;
  }
  var kt = j.d;
  j.d = { f: P1, r: ld, D: td, C: ad, L: ed, m: ud, X: cd, S: nd, M: fd };
  function P1() {
    var l = kt.f(),
      t = zn();
    return l || t;
  }
  function ld(l) {
    var t = Za(l);
    t !== null && t.tag === 5 && t.type === "form" ? Ys(t) : kt.r(l);
  }
  var pe = typeof document > "u" ? null : document;
  function gr(l, t, a) {
    var e = pe;
    if (e && typeof t == "string" && t) {
      var u = dt(t);
      (u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        br.has(u) ||
          (br.add(u),
          (l = { rel: l, crossOrigin: a, href: t }),
          e.querySelector(u) === null &&
            ((t = e.createElement("link")),
            wl(t, "link", l),
            Gl(t),
            e.head.appendChild(t)));
    }
  }
  function td(l) {
    kt.D(l), gr("dns-prefetch", l, null);
  }
  function ad(l, t) {
    kt.C(l, t), gr("preconnect", l, t);
  }
  function ed(l, t, a) {
    kt.L(l, t, a);
    var e = pe;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + dt(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + dt(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + dt(a.imageSizes) + '"]'))
        : (u += '[href="' + dt(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = Ee(l);
          break;
        case "script":
          n = Te(l);
      }
      _t.has(n) ||
        ((l = C(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a
        )),
        _t.set(n, l),
        e.querySelector(u) !== null ||
          (t === "style" && e.querySelector(yu(n))) ||
          (t === "script" && e.querySelector(bu(n))) ||
          ((t = e.createElement("link")),
          wl(t, "link", l),
          Gl(t),
          e.head.appendChild(t)));
    }
  }
  function ud(l, t) {
    kt.m(l, t);
    var a = pe;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + dt(e) + '"][href="' + dt(l) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Te(l);
      }
      if (
        !_t.has(n) &&
        ((l = C({ rel: "modulepreload", href: l }, t)),
        _t.set(n, l),
        a.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(bu(n))) return;
        }
        (e = a.createElement("link")),
          wl(e, "link", l),
          Gl(e),
          a.head.appendChild(e);
      }
    }
  }
  function nd(l, t, a) {
    kt.S(l, t, a);
    var e = pe;
    if (e && l) {
      var u = Va(e).hoistableStyles,
        n = Ee(l);
      t = t || "default";
      var c = u.get(n);
      if (!c) {
        var s = { loading: 0, preload: null };
        if ((c = e.querySelector(yu(n)))) s.loading = 5;
        else {
          (l = C({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = _t.get(n)) && Ti(l, a);
          var o = (c = e.createElement("link"));
          Gl(o),
            wl(o, "link", l),
            (o._p = new Promise(function (b, T) {
              (o.onload = b), (o.onerror = T);
            })),
            o.addEventListener("load", function () {
              s.loading |= 1;
            }),
            o.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Bn(c, t, e);
        }
        (c = { type: "stylesheet", instance: c, count: 1, state: s }),
          u.set(n, c);
      }
    }
  }
  function cd(l, t) {
    kt.X(l, t);
    var a = pe;
    if (a && l) {
      var e = Va(a).hoistableScripts,
        u = Te(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(bu(u))),
        n ||
          ((l = C({ src: l, async: !0 }, t)),
          (t = _t.get(u)) && Ai(l, t),
          (n = a.createElement("script")),
          Gl(n),
          wl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function fd(l, t) {
    kt.M(l, t);
    var a = pe;
    if (a && l) {
      var e = Va(a).hoistableScripts,
        u = Te(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(bu(u))),
        n ||
          ((l = C({ src: l, async: !0, type: "module" }, t)),
          (t = _t.get(u)) && Ai(l, t),
          (n = a.createElement("script")),
          Gl(n),
          wl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function _r(l, t, a, e) {
    var u = (u = W.current) ? Cn(u) : null;
    if (!u) throw Error(i(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Ee(a.href)),
            (a = Va(u).hoistableStyles),
            (e = a.get(t)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Ee(a.href);
          var n = Va(u).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((u = u.ownerDocument || u),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = u.querySelector(yu(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              _t.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                _t.set(l, a),
                n || id(u, l, a, c.state))),
            t && e === null)
          )
            throw Error(i(528, ""));
          return c;
        }
        if (t && e !== null) throw Error(i(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Te(a)),
              (a = Va(u).hoistableScripts),
              (e = a.get(t)),
              e ||
                ((e = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(i(444, l));
    }
  }
  function Ee(l) {
    return 'href="' + dt(l) + '"';
  }
  function yu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Sr(l) {
    return C({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function id(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (e.loading = 1)
      : ((t = l.createElement("link")),
        (e.preload = t),
        t.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        wl(t, "link", a),
        Gl(t),
        l.head.appendChild(t));
  }
  function Te(l) {
    return '[src="' + dt(l) + '"]';
  }
  function bu(l) {
    return "script[async]" + l;
  }
  function pr(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + dt(a.href) + '"]');
          if (e) return (t.instance = e), Gl(e), e;
          var u = C({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            Gl(e),
            wl(e, "style", u),
            Bn(e, a.precedence, l),
            (t.instance = e)
          );
        case "stylesheet":
          u = Ee(a.href);
          var n = l.querySelector(yu(u));
          if (n) return (t.state.loading |= 4), (t.instance = n), Gl(n), n;
          (e = Sr(a)),
            (u = _t.get(u)) && Ti(e, u),
            (n = (l.ownerDocument || l).createElement("link")),
            Gl(n);
          var c = n;
          return (
            (c._p = new Promise(function (s, o) {
              (c.onload = s), (c.onerror = o);
            })),
            wl(n, "link", e),
            (t.state.loading |= 4),
            Bn(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Te(a.src)),
            (u = l.querySelector(bu(n)))
              ? ((t.instance = u), Gl(u), u)
              : ((e = a),
                (u = _t.get(n)) && ((e = C({}, a)), Ai(e, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                Gl(u),
                wl(u, "link", e),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((e = t.instance), (t.state.loading |= 4), Bn(e, a.precedence, l));
    return t.instance;
  }
  function Bn(l, t, a) {
    for (
      var e = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        u = e.length ? e[e.length - 1] : null,
        n = u,
        c = 0;
      c < e.length;
      c++
    ) {
      var s = e[c];
      if (s.dataset.precedence === t) n = s;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Ti(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title);
  }
  function Ai(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity);
  }
  var Yn = null;
  function Er(l, t, a) {
    if (Yn === null) {
      var e = new Map(),
        u = (Yn = new Map());
      u.set(a, e);
    } else (u = Yn), (e = u.get(a)), e || ((e = new Map()), u.set(a, e));
    if (e.has(l)) return e;
    for (
      e.set(l, null), a = a.getElementsByTagName(l), u = 0;
      u < a.length;
      u++
    ) {
      var n = a[u];
      if (
        !(
          n[je] ||
          n[kl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var s = e.get(c);
        s ? s.push(n) : e.set(c, [n]);
      }
    }
    return e;
  }
  function Tr(l, t, a) {
    (l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null
      );
  }
  function sd(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled), typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Ar(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var gu = null;
  function xd() {}
  function rd(l, t, a) {
    if (gu === null) throw Error(i(475));
    var e = gu;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var u = Ee(a.href),
          n = l.querySelector(yu(u));
        if (n) {
          (l = n._p),
            l !== null &&
              typeof l == "object" &&
              typeof l.then == "function" &&
              (e.count++, (e = Gn.bind(e)), l.then(e, e)),
            (t.state.loading |= 4),
            (t.instance = n),
            Gl(n);
          return;
        }
        (n = l.ownerDocument || l),
          (a = Sr(a)),
          (u = _t.get(u)) && Ti(a, u),
          (n = n.createElement("link")),
          Gl(n);
        var c = n;
        (c._p = new Promise(function (s, o) {
          (c.onload = s), (c.onerror = o);
        })),
          wl(n, "link", a),
          (t.instance = n);
      }
      e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(t, l),
        (l = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (e.count++,
          (t = Gn.bind(e)),
          l.addEventListener("load", t),
          l.addEventListener("error", t));
    }
  }
  function od() {
    if (gu === null) throw Error(i(475));
    var l = gu;
    return (
      l.stylesheets && l.count === 0 && Oi(l, l.stylesheets),
      0 < l.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Oi(l, l.stylesheets), l.unsuspend)) {
                var e = l.unsuspend;
                (l.unsuspend = null), e();
              }
            }, 6e4);
            return (
              (l.unsuspend = t),
              function () {
                (l.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function Gn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Oi(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        (this.unsuspend = null), l();
      }
    }
  }
  var Xn = null;
  function Oi(l, t) {
    (l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Xn = new Map()),
        t.forEach(dd, l),
        (Xn = null),
        Gn.call(l));
  }
  function dd(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Xn.get(l);
      if (a) var e = a.get(null);
      else {
        (a = new Map()), Xn.set(l, a);
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (e = c));
        }
        e && a.set(null, e);
      }
      (u = t.instance),
        (c = u.getAttribute("data-precedence")),
        (n = a.get(c) || e),
        n === e && a.set(null, u),
        a.set(c, u),
        this.count++,
        (e = Gn.bind(this)),
        u.addEventListener("load", e),
        u.addEventListener("error", e),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var _u = {
    $$typeof: $,
    Provider: null,
    Consumer: null,
    _currentValue: R,
    _currentValue2: R,
    _threadCount: 0,
  };
  function hd(l, t, a, e, u, n, c, s) {
    (this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Sc(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Sc(0)),
      (this.hiddenUpdates = Sc(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map());
  }
  function Or(l, t, a, e, u, n, c, s, o, b, T, z) {
    return (
      (l = new hd(l, t, a, c, s, o, b, z)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = ct(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = cf()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: e, isDehydrated: a, cache: t }),
      rf(n),
      l
    );
  }
  function zr(l) {
    return l ? ((l = te), l) : te;
  }
  function Nr(l, t, a, e, u, n) {
    (u = zr(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = ta(t)),
      (e.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (a = aa(l, e, t)),
      a !== null && (rt(a, l, t), $e(a, l, t));
  }
  function Mr(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function zi(l, t) {
    Mr(l, t), (l = l.alternate) && Mr(l, t);
  }
  function Dr(l) {
    if (l.tag === 13) {
      var t = le(l, 67108864);
      t !== null && rt(t, l, 67108864), zi(l, 67108864);
    }
  }
  var Qn = !0;
  function vd(l, t, a, e) {
    var u = g.T;
    g.T = null;
    var n = j.p;
    try {
      (j.p = 2), Ni(l, t, a, e);
    } finally {
      (j.p = n), (g.T = u);
    }
  }
  function md(l, t, a, e) {
    var u = g.T;
    g.T = null;
    var n = j.p;
    try {
      (j.p = 8), Ni(l, t, a, e);
    } finally {
      (j.p = n), (g.T = u);
    }
  }
  function Ni(l, t, a, e) {
    if (Qn) {
      var u = Mi(e);
      if (u === null) vi(l, t, e, Zn, a), Rr(l, e);
      else if (bd(u, l, t, a, e)) e.stopPropagation();
      else if ((Rr(l, e), t & 4 && -1 < yd.indexOf(l))) {
        for (; u !== null; ) {
          var n = Za(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = Sa(n.pendingLanes);
                  if (c !== 0) {
                    var s = n;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c; ) {
                      var o = 1 << (31 - ut(c));
                      (s.entanglements[1] |= o), (c &= ~o);
                    }
                    Dt(n), (ml & 6) === 0 && ((An = At() + 500), du(0));
                  }
                }
                break;
              case 13:
                (s = le(n, 2)), s !== null && rt(s, n, 2), zn(), zi(n, 2);
            }
          if (((n = Mi(e)), n === null && vi(l, t, e, Zn, a), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else vi(l, t, e, null, a);
    }
  }
  function Mi(l) {
    return (l = Uc(l)), Di(l);
  }
  var Zn = null;
  function Di(l) {
    if (((Zn = null), (l = Qa(l)), l !== null)) {
      var t = M(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = H(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return (Zn = l), null;
  }
  function jr(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (to()) {
          case Ki:
            return 2;
          case wi:
            return 8;
          case Uu:
          case ao:
            return 32;
          case Ji:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ji = !1,
    va = null,
    ma = null,
    ya = null,
    Su = new Map(),
    pu = new Map(),
    ba = [],
    yd =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function Rr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        va = null;
        break;
      case "dragenter":
      case "dragleave":
        ma = null;
        break;
      case "mouseover":
      case "mouseout":
        ya = null;
        break;
      case "pointerover":
      case "pointerout":
        Su.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pu.delete(t.pointerId);
    }
  }
  function Eu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = Za(t)), t !== null && Dr(t)),
        l)
      : ((l.eventSystemFlags |= e),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function bd(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return (va = Eu(va, l, t, a, e, u)), !0;
      case "dragenter":
        return (ma = Eu(ma, l, t, a, e, u)), !0;
      case "mouseover":
        return (ya = Eu(ya, l, t, a, e, u)), !0;
      case "pointerover":
        var n = u.pointerId;
        return Su.set(n, Eu(Su.get(n) || null, l, t, a, e, u)), !0;
      case "gotpointercapture":
        return (
          (n = u.pointerId), pu.set(n, Eu(pu.get(n) || null, l, t, a, e, u)), !0
        );
    }
    return !1;
  }
  function Ur(l) {
    var t = Qa(l.target);
    if (t !== null) {
      var a = M(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = H(a)), t !== null)) {
            (l.blockedOn = t),
              xo(l.priority, function () {
                if (a.tag === 13) {
                  var e = xt();
                  e = pc(e);
                  var u = le(a, e);
                  u !== null && rt(u, a, e), zi(a, e);
                }
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Vn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Mi(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(a.type, a);
        (Rc = e), a.target.dispatchEvent(e), (Rc = null);
      } else return (t = Za(a)), t !== null && Dr(t), (l.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function Hr(l, t, a) {
    Vn(l) && a.delete(t);
  }
  function gd() {
    (ji = !1),
      va !== null && Vn(va) && (va = null),
      ma !== null && Vn(ma) && (ma = null),
      ya !== null && Vn(ya) && (ya = null),
      Su.forEach(Hr),
      pu.forEach(Hr);
  }
  function Ln(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      ji ||
        ((ji = !0),
        f.unstable_scheduleCallback(f.unstable_NormalPriority, gd)));
  }
  var Kn = null;
  function qr(l) {
    Kn !== l &&
      ((Kn = l),
      f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
        Kn === l && (Kn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            e = l[t + 1],
            u = l[t + 2];
          if (typeof e != "function") {
            if (Di(e || a) === null) continue;
            break;
          }
          var n = Za(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Df(n, { pending: !0, data: u, method: a.method, action: e }, e, u));
        }
      }));
  }
  function Tu(l) {
    function t(o) {
      return Ln(o, l);
    }
    va !== null && Ln(va, l),
      ma !== null && Ln(ma, l),
      ya !== null && Ln(ya, l),
      Su.forEach(t),
      pu.forEach(t);
    for (var a = 0; a < ba.length; a++) {
      var e = ba[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < ba.length && ((a = ba[0]), a.blockedOn === null); )
      Ur(a), a.blockedOn === null && ba.shift();
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (e = 0; e < a.length; e += 3) {
        var u = a[e],
          n = a[e + 1],
          c = u[Il] || null;
        if (typeof n == "function") c || qr(a);
        else if (c) {
          var s = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (c = n[Il] || null))) s = c.formAction;
            else if (Di(u) !== null) continue;
          } else s = c.action;
          typeof s == "function" ? (a[e + 1] = s) : (a.splice(e, 3), (e -= 3)),
            qr(a);
        }
      }
  }
  function Ri(l) {
    this._internalRoot = l;
  }
  (wn.prototype.render = Ri.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var a = t.current,
        e = xt();
      Nr(a, e, l, t, null, null);
    }),
    (wn.prototype.unmount = Ri.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          Nr(l.current, 2, null, l, null, null), zn(), (t[Xa] = null);
        }
      });
  function wn(l) {
    this._internalRoot = l;
  }
  wn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Ii();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ba.length && t !== 0 && t < ba[a].priority; a++);
      ba.splice(a, 0, l), a === 0 && Ur(l);
    }
  };
  var Cr = r.version;
  if (Cr !== "19.1.0") throw Error(i(527, Cr, "19.1.0"));
  j.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(i(188))
        : ((l = Object.keys(l).join(",")), Error(i(268, l)));
    return (
      (l = D(t)),
      (l = l !== null ? E(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var _d = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: g,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jn.isDisabled && Jn.supportsFiber)
      try {
        (Ne = Jn.inject(_d)), (et = Jn);
      } catch {}
  }
  return (
    (Ou.createRoot = function (l, t) {
      if (!S(l)) throw Error(i(299));
      var a = !1,
        e = "",
        u = Is,
        n = Ps,
        c = lx,
        s = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (s = t.unstable_transitionCallbacks)),
        (t = Or(l, 1, !1, null, null, a, e, u, n, c, s, null)),
        (l[Xa] = t.current),
        hi(l),
        new Ri(t)
      );
    }),
    (Ou.hydrateRoot = function (l, t, a) {
      if (!S(l)) throw Error(i(299));
      var e = !1,
        u = "",
        n = Is,
        c = Ps,
        s = lx,
        o = null,
        b = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (e = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (s = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (o = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (b = a.formState)),
        (t = Or(l, 1, !0, t, a ?? null, e, u, n, c, s, o, b)),
        (t.context = zr(null)),
        (a = t.current),
        (e = xt()),
        (e = pc(e)),
        (u = ta(e)),
        (u.callback = null),
        aa(a, u, e),
        (a = e),
        (t.current.lanes = a),
        De(t, a),
        Dt(t),
        (l[Xa] = t.current),
        hi(l),
        new wn(t)
      );
    }),
    (Ou.version = "19.1.0"),
    Ou
  );
}
var wr;
function jd() {
  if (wr) return qi.exports;
  wr = 1;
  function f() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (r) {
        console.error(r);
      }
  }
  return f(), (qi.exports = Dd()), qi.exports;
}
var Rd = jd();
const Ud = "_container_dkcdu_47",
  Hd = "_cardNotificacao_dkcdu_65",
  qd = "_mensagem_dkcdu_93",
  Cd = "_titulo_dkcdu_103",
  Bd = "_subtitulo_dkcdu_119",
  Yd = "_botaoCTA_dkcdu_133",
  Gd = "_pulse_dkcdu_1",
  zu = {
    "modal-aberto": "_modal-aberto_dkcdu_37",
    container: Ud,
    cardNotificacao: Hd,
    mensagem: qd,
    titulo: Cd,
    subtitulo: Bd,
    botaoCTA: Yd,
    pulse: Gd,
    "etapa3-modal-overlay": "_etapa3-modal-overlay_dkcdu_201",
    "etapa3-modal": "_etapa3-modal_dkcdu_201",
  };
function lc(f, r) {
  const x = tc();
  return (
    (lc = function (i, S) {
      return (i = i - 495), x[i];
    }),
    lc(f, r)
  );
}
(function (f, r) {
  const x = lc,
    i = f();
  for (;;)
    try {
      if (
        (parseInt(x(497)) / 1) * (parseInt(x(501)) / 2) +
          (parseInt(x(509)) / 3) * (parseInt(x(502)) / 4) +
          parseInt(x(500)) / 5 +
          (-parseInt(x(504)) / 6) * (parseInt(x(510)) / 7) +
          -parseInt(x(495)) / 8 +
          (-parseInt(x(508)) / 9) * (-parseInt(x(503)) / 10) +
          -parseInt(x(505)) / 11 ===
        r
      )
        break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(tc, 650547);
const Xd = ({ onNext: f }) => {
  const r = lc,
    x = () => {
      f();
    };
  return m.jsx("div", {
    className: zu[r(499)],
    children: m.jsxs(r(496), {
      className: zu[r(498)],
      children: [
        m.jsx(r(496), {
          className: zu[r(507)],
          children: m.jsx("h2", { className: zu[r(506)], children: r(511) }),
        }),
        m.jsx(r(512), {
          className: zu.botaoCTA,
          onClick: x,
          children: "Sim!! Quero comeÃ§ar",
        }),
      ],
    }),
  });
};
function tc() {
  const f = [
    "480772TdSjjK",
    "10ODLKqw",
    "6894402wMeiTA",
    "4181628kurvtU",
    "titulo",
    "mensagem",
    "10446147FeyLiN",
    "3aDKaGO",
    "7oMRdjJ",
    "Estamos prontos para comeÃ§ar. E vocÃª?",
    "button",
    "4945040gnDsWb",
    "div",
    "1egJBwN",
    "cardNotificacao",
    "container",
    "2191690HNZMJT",
    "2157356dfXfjP",
  ];
  return (
    (tc = function () {
      return f;
    }),
    tc()
  );
}
(function (f, r) {
  const x = Rt,
    i = f();
  for (;;)
    try {
      if (
        -parseInt(x(334)) / 1 +
          -parseInt(x(340)) / 2 +
          (parseInt(x(323)) / 3) * (parseInt(x(345)) / 4) +
          (parseInt(x(328)) / 5) * (parseInt(x(336)) / 6) +
          (parseInt(x(322)) / 7) * (parseInt(x(320)) / 8) +
          (parseInt(x(318)) / 9) * (-parseInt(x(333)) / 10) +
          (-parseInt(x(335)) / 11) * (-parseInt(x(337)) / 12) ===
        r
      )
        break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(ac, 485725);
let Gi = null;
function ze() {
  return ""; // String vazia. A chamada será relativa ao próprio domínio.
}
function $r() {
  const f = Rt;
  return sessionStorage[f(339)]("apitoken") || "";
}
async function Ga() {
  return {
    // O caminho agora não tem a extensão .php
    buscarPerfis: "api/buscar-usuario", 
    getProfile: "api/buscar-usuario"
  };
}
async function Wn(f, r = {}, x = !1) {
  const S = await Ga();
  if (!S || !S[f]) throw new Error('Rota não encontrada no mapa');

  const termoDeBuscaSeguro = encodeURIComponent(r.search);
  const urlFinal = ze() + S[f] + "?username=" + termoDeBuscaSeguro;

  return await (
    await fetch(urlFinal, {
      method: 'GET'
    })
  ).json();
}
function Rt(f, r) {
  const x = ac();
  return (
    (Rt = function (i, S) {
      return (i = i - 317), x[i];
    }),
    Rt(f, r)
  );
}
async function Li(f, r = "", x = !1) {
  const i = Rt,
    S = await Ga();
  if (!S || !S[f]) throw new Error(i(343) + f + i(326));
  const M = ze() + "/" + S[f] + r,
    H = $r();
  return await (
    await fetch(M, {
      method: i(319),
      headers: { ...(H ? { Authorization: i(317) + H } : {}) },
      credentials: x ? i(341) : "same-origin",
    })
  ).json();
}
function ac() {
  const f = [
    "getItem",
    "780358EegUkL",
    "include",
    "application/json",
    'Rota "',
    "gtk",
    "572xcAlEv",
    "Bearer ",
    "33903gNpSwr",
    "GET",
    "3912912jTnGSi",
    "token",
    "7iMTASR",
    "16209nzbNuy",
    "Erro ao buscar API Map:",
    "json",
    '" não encontrada no map',
    "POST",
    "10Gruzpa",
    "useEffect",
    "https://divuulga.site/ap/ckt",
    "error",
    "same-origin",
    "2100iDYmuY",
    "966606xJBEjM",
    "8635iHFTVb",
    "1117596ivjlra",
    "15276DzbYHR",
    "setItem",
  ];
  return (
    (ac = function () {
      return f;
    }),
    ac()
  );
}
function Qd() {
  _a[Rt(329)](() => {
    (async () => {
      const x = Rt,
        i = await Ga(),
        S = i != null && i.gtk ? ze() + "/" + i[x(344)] : null;
      if (S)
        try {
          const M = await fetch(S, { credentials: x(341) }),
            H = await M[x(325)]();
          !H[x(331)] &&
            H[x(321)] &&
            sessionStorage[x(338)]("apitoken", H[x(321)]);
        } catch {}
    })();
  }, []);
}
(function (f, r) {
  const x = uc,
    i = f();
  for (;;)
    try {
      if (
        (parseInt(x(317)) / 1) * (parseInt(x(325)) / 2) +
          -parseInt(x(313)) / 3 +
          parseInt(x(324)) / 4 +
          -parseInt(x(316)) / 5 +
          -parseInt(x(304)) / 6 +
          parseInt(x(331)) / 7 +
          (parseInt(x(311)) / 8) * (parseInt(x(300)) / 9) ===
        r
      )
        break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(ec, 885830);
function ec() {
  const f = [
    "duration",
    "vid-cover",
    "fas fa-pause",
    "video/mp4",
    "88nYeXYl",
    "none",
    "4001808vJxpMY",
    "100%",
    "addEventListener",
    "6132020wrlzGH",
    "214538yDhjuc",
    "current",
    "Aperte para ouvir o vídeo",
    "muted",
    "currentTime",
    "timeupdate",
    "paused",
    "4572564vbCACz",
    "12oymCRN",
    "./assets/video.mp4",
    "div",
    "play",
    "main-video",
    "relative",
    "9247147JzcGzT",
    "removeEventListener",
    "743436IKOtqm",
    "style",
    "width",
    "source",
    "7283184vjlgkv",
    "auto",
    "progress-wrapper",
  ];
  return (
    (ec = function () {
      return f;
    }),
    ec()
  );
}
function uc(f, r) {
  const x = ec();
  return (
    (uc = function (i, S) {
      return (i = i - 299), x[i];
    }),
    uc(f, r)
  );
}
function Zd() {
  const f = uc,
    r = Z.useRef(null),
    x = Z.useRef(null),
    [i, S] = Z.useState(!0),
    [M, H] = Z.useState(!0),
    [X, D] = Z.useState({ text1: f(319) });
  Z.useEffect(() => {
    const L = f,
      Y = r[L(318)];
    Y && (Y.pause(), (Y.currentTime = 0));
  }, []),
    Z.useEffect(() => {
      const L = f,
        Y = r[L(318)],
        sl = x[L(318)],
        I = () => {
          const P = L;
          if (!Y || !sl) return;
          const El = Y[P(307)],
            zl = Y[P(321)];
          if (!isNaN(El) && El > 0) {
            const $ = (zl / El) * 100;
            sl[P(301)][P(302)] = $ + "%";
          }
        },
        Q = () => {
          const P = L;
          sl && (sl[P(301)][P(302)] = P(314)),
            D({ text1: "", text2: m.jsx("i", { className: "fas fa-redo" }) }),
            S(!0),
            H(!0);
        };
      return (
        Y[L(315)](L(322), I),
        Y.addEventListener("ended", Q),
        () => {
          const P = L;
          Y[P(299)](P(322), I), Y[P(299)]("ended", Q);
        }
      );
    }, []);
  const E = () => {
      const L = f,
        Y = r.current;
      Y[L(323)]
        ? (Y.play(), S(!1))
        : (Y.pause(),
          D({ text1: "", text2: m.jsx("i", { className: L(309) }) }),
          S(!0));
    },
    C = () => {
      const L = f,
        Y = r[L(318)];
      M && ((Y.currentTime = 0), (Y[L(320)] = !1), H(!1)), Y[L(328)](), S(!1);
    };
  return m.jsx(f(327), {
    className: "vid-box",
    children: m.jsxs("div", {
      className: "video-wrapper",
      style: { position: f(330) },
      children: [
        m.jsxs("video", {
          ref: r,
          muted: !0,
          playsInline: !0,
          className: f(329),
          onClick: E,
          children: [
            m.jsx(f(303), { src: f(326), type: f(310) }),
            "Seu navegador nÃ£o suporta o vÃ­deo.",
          ],
        }),
        m.jsx(f(327), {
          className: f(306),
          children: m.jsx(f(327), { className: "progress-indicator", ref: x }),
        }),
        m.jsxs(f(327), {
          className: f(308),
          onClick: C,
          style: { pointerEvents: f(i ? 305 : 312), opacity: i ? 1 : 0 },
          children: [
            m.jsx(f(327), { children: X.text1 }),
            m.jsx(f(327), { children: X.text2 }),
          ],
        }),
      ],
    }),
  });
}
(function (f, r) {
  const x = Tt,
    i = f();
  for (;;)
    try {
      if (
        -parseInt(x(296)) / 1 +
          -parseInt(x(224)) / 2 +
          (parseInt(x(253)) / 3) * (parseInt(x(231)) / 4) +
          -parseInt(x(286)) / 5 +
          (-parseInt(x(261)) / 6) * (-parseInt(x(277)) / 7) +
          (-parseInt(x(267)) / 8) * (parseInt(x(235)) / 9) +
          (-parseInt(x(281)) / 10) * (-parseInt(x(228)) / 11) ===
        r
      )
        break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(nc, 563788);
function nc() {
  const f = [
    "saveProfile",
    "followerCount",
    " Site Seguro",
    "Qual é o seu perfil?",
    "results",
    "Bio:",
    "1652026FOWksG",
    "etapa3-balao-notificacao fade-in delay-2",
    "slice",
    "etapa3-spinner",
    "3231635DKZyXl",
    "current",
    "Erro ao salvar perfil",
    "1997916iuYChC",
    "replace",
    "value",
    "status",
    "3519dOmrLx",
    "?user_id=",
    "fas fa-search etapa3-search-icon",
    "Erro na requisição",
    "signature",
    "then",
    "curtidas",
    "strong",
    "etapa3-lista",
    "username",
    "etapa3-modal",
    "Este perfil é privado. Altere para público para continuar.",
    "backward",
    "etapa3-input",
    "img",
    "profile_pic",
    "Confirme se este é o seu perfil",
    "key",
    "3oNDoku",
    "buscarPerfis",
    "Seguindo: ",
    "buscarDireto",
    "etapa3-modal-overlay",
    "Buscando perfis...",
    "Seguidores: ",
    "user",
    "154932bTHETv",
    "span",
    "length",
    "seguidores",
    "etapa3-btn-cinza",
    "div",
    "20376qMPotj",
    "stats",
    "etapa3-item",
    "4.8/5.0",
    "etapa3-privado",
    "user_id",
    "hidden",
    "forward",
    "site-seguro fade-in delay-1",
    "Avatar",
    "161fQkqoC",
    "overflow",
    "success",
    "Cancelar",
    "70RPNdGQ",
    "âŒ Erro ao buscar detalhes:",
    "avatar",
    "etapa3-erro",
    "style",
    "682550EVzePS",
    "toLocaleString",
    "Obtendo dados do perfil...",
    "etapa3-input-container fade-in delay-4",
    "catch",
    "avatarLarger",
    "etapa3-loading-text",
    "seguindo",
    "etapa3-info",
    "followers",
    "627692cXiUvO",
    "message",
    "Sim, é meu perfil",
    "body",
    "Erro ao buscar detalhes do perfil",
    "fas fa-lock cadeado-verde",
    "input",
    "data",
    "some",
    "toLowerCase",
    "target",
    "âŒ Erro ao buscar perfil direto:",
    "pause",
    "bio",
    "error",
    "profile",
  ];
  return (
    (nc = function () {
      return f;
    }),
    nc()
  );
}
function Tt(f, r) {
  const x = nc();
  return (
    (Tt = function (i, S) {
      return (i = i - 203), x[i];
    }),
    Tt(f, r)
  );
}
function Vd({ onPerfilConfirmado: f }) {
  const r = Tt,
    [x, i] = Z.useState(""),
    [S, M] = Z.useState([]),
    [H, X] = Z.useState(!1),
    [D, E] = Z.useState(""),
    [C, L] = Z.useState(null),
    [Y, sl] = Z.useState(!1),
    [I, Q] = Z.useState(null),
    [P, El] = Z.useState(!1),
    [zl, $] = Z.useState(!1),
    [ll, A] = Z.useState(null),
    B = Z.useRef(null),
    cl = "Digite o @ aqui",
    [rl, ol] = Z.useState(""),
    jl = Z.useRef(0),
    Cl = Z.useRef("forward");
  Z.useEffect(() => {
    const w = Tt;
    Y
      ? (document[w(205)][w(285)].overflow = w(273))
      : (document[w(205)][w(285)][w(278)] = "");
  }, [Y]),
    Z.useEffect(() => {
      let g;
      const j = () => {
        const R = Tt;
        Cl[R(229)] === R(274)
          ? jl[R(229)] < cl[R(263)]
            ? (ol(cl.slice(0, jl.current + 1)),
              (jl[R(229)] += 1),
              (g = setTimeout(j, 100)))
            : ((Cl[R(229)] = R(214)),
              (g = setTimeout(() => {
                const il = R;
                (Cl[il(229)] = "backward"), j();
              }, 2e3)))
          : Cl[R(229)] === R(247) &&
            (jl[R(229)] > 0
              ? ((jl[R(229)] -= 1),
                ol(cl[R(226)](0, jl.current)),
                (g = setTimeout(j, 100)))
              : ((Cl[R(229)] = R(274)), (g = setTimeout(j, 100))));
      };
      return (g = setTimeout(j, 100)), () => clearTimeout(g);
    }, []),
    Z.useEffect(() => {
      const w = Tt;
      Ga()[w(240)](A);
    }, []),
    Z.useEffect(() => {
      const w = setTimeout(() => {
        x[Tt(263)] >= 3 ? Al(x) : (M([]), E(""));
      }, 400);
      return () => clearTimeout(w);
    }, [x]);
  const Al = (w) => {
      const g = Tt;
      ll &&
        (X(!0),
        E(""),
        Wn(g(254), { search: w })
          [g(240)](async (j) => {
            const R = g,
              il = j[R(222)] || [];
            M(il), X(!1);
            const d = w[R(232)](/^@/, "");
            if (
              !il[R(210)]((U) => U.username[R(211)]() === d[R(211)]()) &&
              d[R(263)] > 4
            )
              try {
                const U = await Wn(R(256), { username: d });
                (U == null ? void 0 : U[R(234)]) === R(279) &&
                  U[R(217)] &&
                  M((q) => {
                    const K = R;
                    return q.some((W) => W[K(244)] === U.profile.username)
                      ? q
                      : [U.profile, ...q];
                  });
              } catch (U) {
                console.error(R(213), U);
              }
          })
          [g(290)]((j) => {
            const R = g;
            console[R(216)]("Erro ao buscar perfis:", j),
              E(R(238)),
              M([]),
              X(!1);
          }));
    },
    Vl = async (w) => {
      var j, R, il, d, N, U, q, K, fl, W, Jl, Sl;
      const g = Tt;
      L(w), sl(!0), El(!0), $(!1), Q(null);
      try {
        const vl = await Li("getProfile", g(236) + w[g(272)]);
        (
          (R = (j = vl == null ? void 0 : vl.data) == null ? void 0 : j.user) ==
          null
            ? void 0
            : R.privateAccount
        )
          ? $(!0)
          : Q({
              avatar:
                ((d =
                  (il = vl == null ? void 0 : vl[g(209)]) == null
                    ? void 0
                    : il[g(260)]) == null
                  ? void 0
                  : d[g(291)]) || w[g(250)],
              seguidores:
                ((U =
                  (N = vl == null ? void 0 : vl.data) == null
                    ? void 0
                    : N[g(268)]) == null
                  ? void 0
                  : U[g(219)]) || 0,
              seguindo:
                ((K =
                  (q = vl == null ? void 0 : vl[g(209)]) == null
                    ? void 0
                    : q.stats) == null
                  ? void 0
                  : K.followingCount) || 0,
              curtidas:
                ((W =
                  (fl = vl == null ? void 0 : vl[g(209)]) == null
                    ? void 0
                    : fl[g(268)]) == null
                  ? void 0
                  : W.heartCount) || 0,
              bio:
                ((Sl =
                  (Jl = vl == null ? void 0 : vl[g(209)]) == null
                    ? void 0
                    : Jl[g(260)]) == null
                  ? void 0
                  : Sl[g(239)]) || "",
            });
      } catch (vl) {
        console[g(216)](g(282), vl), E(g(206));
      }
      El(!1);
    },
    Ut = async () => {
      const w = Tt;
      try {
        const g = await Wn(
          w(218),
          { tiktok_profile: C.username, tiktok_userid: C.user_id },
          !0
        );
        g[w(279)] ? f() : alert(g[w(203)] || w(230));
      } catch (g) {
        console[w(216)]("âŒ Erro ao salvar perfil:", g), alert(w(230));
      }
    };
  return m.jsxs(m.Fragment, {
    children: [
      m.jsxs(r(266), {
        className: "etapa3-container fade-in",
        children: [
          m.jsxs(r(266), {
            className: r(275),
            children: [m.jsx("i", { className: r(207) }), r(220)],
          }),
          m.jsx("div", { className: r(225), children: m.jsx(Zd, {}) }),
          m.jsx("h2", {
            className: "etapa3-titulo fade-in delay-3",
            children: r(221),
          }),
          m.jsx(r(266), {
            className: r(289),
            children: m.jsxs(r(266), {
              className: "etapa3-input-wrapper fade-in delay-4",
              children: [
                m.jsx(r(208), {
                  ref: B,
                  type: "text",
                  className: r(248),
                  placeholder: rl,
                  value: x,
                  onChange: (w) => i(w[r(212)][r(233)]),
                  onKeyDown: (w) => {
                    w[r(252)] === "Enter" && Al(x);
                  },
                }),
                m.jsx("i", { className: r(237), onClick: () => Al(x) }),
              ],
            }),
          }),
          H && m.jsx("p", { className: r(294), children: r(258) }),
          D && m.jsx("p", { className: r(284), children: D }),
          m.jsx("ul", {
            className: r(243),
            children: S.map((w) =>
              m.jsxs(
                "li",
                {
                  className: r(269),
                  onClick: () => Vl(w),
                  children: [
                    m.jsx(r(249), { src: w[r(250)], alt: w.username }),
                    m.jsxs(r(266), {
                      children: [
                        m.jsxs(r(242), { children: ["@", w[r(244)]] }),
                        m.jsxs("p", {
                          children: [w[r(295)][r(287)](), " seguidores"],
                        }),
                      ],
                    }),
                  ],
                },
                w.user_id
              )
            ),
          }),
          m.jsxs(r(266), {
            className: "etapa3-avaliacao fade-in delay-5",
            children: [
              m.jsx("div", { // Usamos uma div para agrupar as estrelas
                className: "estrelas",
                children: Array.from({ length: 5 }).map((_, index) => ( // Cria 5 ícones de estrela
                  m.jsx("i", { className: "fa-solid fa-star" }, index)
                ))
              }),
              " Avaliação média: ",
              m.jsx(r(242), { children: r(270) }),
            ],
          }),
        ],
      }),
      Y &&
        m.jsx(r(266), {
          className: r(257),
          children: m.jsxs("div", {
            className: r(245),
            children: [
              m.jsx("h3", { children: r(251) }),
              P
                ? m.jsxs(m.Fragment, {
                    children: [
                      m.jsx(r(266), { className: r(227) }),
                      m.jsx("p", { className: r(292), children: r(288) }),
                    ],
                  })
                : m.jsxs(m.Fragment, {
                    children: [
                      zl
                        ? m.jsx("p", { className: r(271), children: r(246) })
                        : m.jsxs(m.Fragment, {
                            children: [
                              m.jsx("img", {
                                src: I == null ? void 0 : I[r(283)],
                                alt: r(276),
                                className: "etapa3-avatar",
                              }),
                              m.jsxs("p", {
                                children: [
                                  m.jsx(r(242), { children: r(223) }),
                                  " ",
                                  I == null ? void 0 : I[r(215)],
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  r(259),
                                  I == null
                                    ? void 0
                                    : I[r(264)].toLocaleString(),
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  r(255),
                                  I == null
                                    ? void 0
                                    : I[r(293)].toLocaleString(),
                                ],
                              }),
                              m.jsxs("p", {
                                children: [
                                  "â¤ï¸ Curtidas: ",
                                  I == null
                                    ? void 0
                                    : I[r(241)].toLocaleString(),
                                ],
                              }),
                            ],
                          }),
                      m.jsxs(r(266), {
                        className: "etapa3-modal-botoes",
                        children: [
                          !zl &&
                            m.jsx("button", {
                              onClick: Ut,
                              className: "etapa3-btn-verde",
                              children: r(204),
                            }),
                          m.jsx("button", {
                            onClick: () => sl(!1),
                            className: r(265),
                            children: r(280),
                          }),
                        ],
                      }),
                    ],
                  }),
            ],
          }),
        }),
    ],
  });
}
(function (f, r) {
  const x = Qi,
    i = f();
  for (;;)
    try {
      if (
        parseInt(x(385)) / 1 +
          (parseInt(x(382)) / 2) * (-parseInt(x(384)) / 3) +
          (parseInt(x(376)) / 4) * (parseInt(x(379)) / 5) +
          parseInt(x(383)) / 6 +
          (-parseInt(x(381)) / 7) * (parseInt(x(386)) / 8) +
          (-parseInt(x(377)) / 9) * (-parseInt(x(378)) / 10) +
          parseInt(x(380)) / 11 ===
        r
      )
        break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(cc, 673626);
function Qi(f, r) {
  const x = cc();
  return (
    (Qi = function (i, S) {
      return (i = i - 376), x[i];
    }),
    Qi(f, r)
  );
}
function cc() {
  const f = [
    "43241AVaBex",
    "79656zyrnuq",
    "12cHoFXl",
    "11359314JqKmLY",
    "10yPncnw",
    "57945rcWVbl",
    "4444055GsCITt",
    "343evdXpB",
    "154272IWBIko",
    "206688NnZqPn",
    "24DaiKEo",
  ];
  return (
    (cc = function () {
      return f;
    }),
    cc()
  );
}
function Ld({ onPerfilConfirmado: f }) {
  const [r, x] = Z.useState(!1);
  return (
    Z.useEffect(() => {
      const i = setTimeout(() => x(!0), 20);
      return () => clearTimeout(i);
    }, []),
    r ? m.jsx(Vd, { onPerfilConfirmado: f }) : null
  );
}
(function (f, r) {
  const x = jt,
    i = f();
  for (;;)
    try {
      if (
        parseInt(x(278)) / 1 +
          (parseInt(x(303)) / 2) * (parseInt(x(306)) / 3) +
          (-parseInt(x(297)) / 4) * (-parseInt(x(265)) / 5) +
          parseInt(x(263)) / 6 +
          (parseInt(x(266)) / 7) * (parseInt(x(287)) / 8) +
          parseInt(x(277)) / 9 +
          (parseInt(x(271)) / 10) * (-parseInt(x(289)) / 11) ===
        r
      )
        break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(fc, 164825);
function jt(f, r) {
  const x = fc();
  return (
    (jt = function (i, S) {
      return (i = i - 253), x[i];
    }),
    jt(f, r)
  );
}
function fc() {
  const f = [
    "video-thumb",
    "Confirmar SeleÃ§Ã£o (",
    "144388wsWZqU",
    "videos-close-btn",
    "button",
    "videos-loading",
    "filter",
    "final_price",
    "2HiKCHi",
    "target",
    " VisualizaÃ§Ãµes",
    "830667LTXJeH",
    "data",
    "Fechar",
    "btn-azul selectall-btn",
    "includes",
    "length",
    "offer",
    "Erro ao carregar vÃ­deos.",
    "videos-actions",
    "videos-modal-overlay",
    "setItem",
    "Selecionar Todos",
    "parse",
    "btn-verde",
    "Obtendo vÃ­deos... aguarde",
    "Nenhum vÃ­deo encontrado ou perfil privado.",
    "thumbnail",
    "videos-modal-content",
    " Curtidas",
    "1175238EdxhtJ",
    "videos-grid",
    "35FRQwaG",
    "553JeiRNr",
    "map",
    "likes",
    "Confirmando carrinho...",
    "div",
    "115490mrykDV",
    "slice",
    "floor",
    "getVideos",
    "followers",
    "Erro ao carregar vÃ­deos:",
    "1994787kJlleh",
    "300784pOzOzH",
    "video_id",
    "vÃ­deos",
    "toLocaleString",
    "vÃ­deo",
    "aweme_id",
    "stringify",
    "videos",
    "views",
    "28328gFBilB",
    "Thumb",
    "1298bBdHqQ",
    "getItem",
    "videos-erro",
    "contains",
    "selected-overlay",
    "video-item ",
  ];
  return (
    (fc = function () {
      return f;
    }),
    fc()
  );
}
function Kd({ offer: f, onClose: r, onConfirmar: x }) {
  const i = jt,
    [S, M] = Z.useState([]),
    [H, X] = Z.useState([]),
    [D, E] = Z.useState(!0),
    [C, L] = Z.useState(""),
    [Y, sl] = Z.useState(!1);
  Z.useEffect(() => {
    async function A() {
      var cl;
      const B = jt;
      try {
        const rl = await Li(B(274), "", !0),
          ol =
            ((cl = rl == null ? void 0 : rl[B(307)]) == null
              ? void 0
              : cl[B(285)]) || [];
        if (ol[B(311)] > 0) {
          const jl = ol[B(272)](0, 30)[B(267)]((Vl) => ({
            id: Vl[B(279)] || Vl.id || Vl[B(283)],
            thumbnail: Vl.cover || Vl[B(260)] || "",
          }));
          M(jl);
          const Cl = JSON[B(256)](sessionStorage[B(290)]("videos") || "[]"),
            Al = Cl.map((Vl) => Vl.videoId);
          X(Al);
        } else L(B(259));
      } catch (rl) {
        console.error(B(276), rl), L(B(313));
      } finally {
        E(!1);
      }
    }
    A();
  }, []);
  const I = (A) => {
      const B = jt;
      X((cl) =>
        cl[B(310)](A)
          ? cl[B(301)]((rl) => rl !== A)
          : cl.length < 30
          ? [...cl, A]
          : (alert("VocÃª pode selecionar no mÃ¡ximo 30 vÃ­deos."), cl)
      );
    },
    Q = () => {
      const A = jt;
      H[A(311)] === S[A(311)] ? X([]) : X(S[A(267)]((B) => B.id));
    },
    P = () => {
      const A = jt,
        B = H[A(311)];
      return B === 0
        ? { views: 0, likes: 0 }
        : {
            views: Math[A(273)](f.views / B),
            likes: Math[A(273)](f[A(268)] / B),
          };
    },
    El = async () => {
      const A = jt;
      if (H.length === 0) {
        alert("Selecione ao menos 1 vÃ­deo.");
        return;
      }
      sl(!0);
      const B = S.filter((ol) => H[A(310)](ol.id)),
        cl = B[A(267)]((ol) => ({ videoId: ol.id, thumbnail: ol.thumbnail })),
        rl = {
          name: f.name,
          followers: f[A(275)],
          views: f[A(286)],
          likes: f[A(268)],
          final_price: f[A(302)],
        };
      sessionStorage[A(254)](A(312), JSON[A(284)](rl)),
        sessionStorage.setItem(A(285), JSON[A(284)](cl)),
        typeof x == "function" && x(cl),
        sl(!1),
        r();
    },
    zl = (A) => {
      const B = jt;
      A[B(304)].classList[B(292)](B(253)) && r();
    },
    { views: $, likes: ll } = P();
  return m.jsx(i(270), {
    className: "videos-modal-overlay",
    onClick: zl,
    children: m.jsxs(i(270), {
      className: i(261),
      children: [
        m.jsx("button", { className: i(298), onClick: r, children: "Ã—" }),
        m.jsx("h2", { children: "Escolha os vÃ­deos para impulsionar" }),
        D
          ? m.jsx("p", { className: i(300), children: i(258) })
          : C
          ? m.jsx("p", { className: i(291), children: C })
          : m.jsxs(m.Fragment, {
              children: [
                m.jsx(i(270), {
                  className: "videos-selectall-container",
                  children: m.jsx("button", {
                    onClick: Q,
                    className: i(309),
                    children:
                      H[i(311)] === S[i(311)] ? "Desmarcar Todos" : i(255),
                  }),
                }),
                m.jsx(i(270), {
                  className: i(264),
                  children: S[i(267)]((A) => {
                    const B = i,
                      cl = H[B(310)](A.id);
                    return m.jsxs(
                      B(270),
                      {
                        className: B(294) + (cl ? "selecionado" : ""),
                        onClick: () => I(A.id),
                        children: [
                          m.jsx("img", {
                            src: A[B(260)],
                            alt: B(288),
                            className: B(295),
                          }),
                          cl &&
                            m.jsxs(B(270), {
                              className: B(293),
                              children: [
                                m.jsxs("p", {
                                  children: ["+", $.toLocaleString(), B(305)],
                                }),
                                m.jsxs("p", {
                                  children: ["+", ll[B(281)](), B(262)],
                                }),
                              ],
                            }),
                        ],
                      },
                      A.id
                    );
                  }),
                }),
                H[i(311)] > 0 &&
                  m.jsx(i(270), {
                    className: i(314),
                    children: m.jsx(i(299), {
                      onClick: El,
                      className: i(257),
                      disabled: Y,
                      children: Y
                        ? i(269)
                        : i(296) +
                          H[i(311)] +
                          " " +
                          (H.length === 1 ? i(282) : i(280)) +
                          ")",
                    }),
                  }),
                m.jsx(i(299), {
                  className: "btn-fechar",
                  onClick: r,
                  children: i(308),
                }),
              ],
            }),
        m.jsx(i(299), {
          className: "btn-fechar",
          onClick: r,
          children: i(308),
        }),
      ],
    }),
  });
}
function ic(f, r) {
  const x = sc();
  return (
    (ic = function (i, S) {
      return (i = i - 156), x[i];
    }),
    ic(f, r)
  );
}
(function (f, r) {
  const x = ic,
    i = f();
  for (;;)
    try {
      if (
        parseInt(x(213)) / 1 +
          (-parseInt(x(194)) / 2) * (parseInt(x(163)) / 3) +
          parseInt(x(171)) / 4 +
          parseInt(x(198)) / 5 +
          (-parseInt(x(185)) / 6) * (parseInt(x(170)) / 7) +
          -parseInt(x(204)) / 8 +
          (-parseInt(x(199)) / 9) * (parseInt(x(173)) / 10) ===
        r
      )
        break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(sc, 519604);
function sc() {
  const f = [
    "vÃ­deo",
    "offer",
    "79383yNeUDg",
    "carrinho-section ",
    "carrinho-engajamento carrinho-item-linha",
    "removeItem",
    "parse",
    "Confirmando seu carrinho...",
    "carrinho-item-linha",
    "14bOCKRp",
    "3839240PNERWc",
    "followers",
    "170aoIexF",
    "fas fa-eye detalhes-olho",
    "carrinho-conteudo",
    "fa-chevron-down",
    " carrinho-toggle",
    "carrinho-itens",
    " VisualizaÃ§Ãµes + ",
    "adicionarOferta nÃ£o definido no map.php",
    "div",
    "status",
    "carrinho-total",
    "likes",
    "2648508ABunZu",
    "videos",
    "fas fa-times remover-item",
    "stringify",
    "getItem",
    "error",
    "fas ",
    "username",
    "carrinho-topo-direita",
    "6DllVkS",
    "Resumo do Carrinho",
    "button",
    "name",
    "4493815CaLveF",
    "42543SxLOwz",
    "carrinho-colapsado",
    "Erro interno ao finalizar a compra.",
    " seguidores @",
    "setItem",
    "2541648tGMfek",
    "success",
    "Remover",
    "location",
    "Esconder carrinho",
    "btn-checkout",
    "section",
    "views",
    "Erro ao finalizar compra:",
    "21315lNGVaj",
    "final_price",
    "fa-chevron-up",
    "adicionarOferta",
    "checkout_link",
    "length",
  ];
  return (
    (sc = function () {
      return f;
    }),
    sc()
  );
}
function wd({ oferta: f, perfil: r, onReset: x, onVerVideos: i }) {
  var I;
  const S = ic,
    [M, H] = Z.useState(!1),
    [X, D] = Z.useState(!1);
  if (!f || !r) return null;
  const E = ((I = f[S(186)]) == null ? void 0 : I[S(160)]) || 0,
    C = f[S(156)] || 0,
    L = () => {
      const Q = S;
      sessionStorage[Q(203)](
        Q(162),
        JSON[Q(188)]({
          name: f[Q(197)],
          followers: f[Q(172)],
          views: f[Q(211)],
          likes: f[Q(184)],
          final_price: C,
        })
      ),
        sessionStorage[Q(203)](Q(186), JSON[Q(188)](f.videos));
    },
    Y = () => {
      const Q = S;
      sessionStorage[Q(166)](Q(162)), sessionStorage[Q(166)](Q(186)), x();
    },
    sl = async () => {
      const Q = S;
      L(), H(!0);
      try {
        const P = await Ga();
        if (!(P != null && P[Q(158)])) {
          alert(Q(180));
          return;
        }
        const El = JSON[Q(167)](sessionStorage[Q(189)](Q(162)) || "{}"),
          zl = JSON.parse(sessionStorage[Q(189)](Q(186)) || "[]"),
          $ = {
            offer: {
              followers: parseInt(El[Q(172)]) || 0,
              views: parseInt(El[Q(211)]) || 0,
              likes: parseInt(El.likes) || 0,
              final_price: parseFloat(El[Q(156)]) || 0,
              name: El[Q(197)] || "",
            },
            videos: zl,
          },
          ll = await Wn("adicionarOferta", $, !0);
        ll[Q(182)] === Q(205) && ll[Q(159)]
          ? (window[Q(207)].href = ll.checkout_link)
          : alert(ll.message || "Erro ao redirecionar para o checkout.");
      } catch (P) {
        console[Q(190)](Q(212), P), alert(Q(201));
      } finally {
        H(!1);
      }
    };
  return m.jsxs(S(210), {
    className: S(164) + (X ? S(200) : ""),
    children: [
      m.jsxs("div", {
        className: "carrinho-topo",
        children: [
          m.jsx(S(181), { className: "carrinho-titulo", children: S(195) }),
          m.jsxs(S(181), {
            className: S(193),
            children: [
              m.jsxs(S(181), {
                className: S(183),
                children: ["R$", C.toFixed(2)],
              }),
              m.jsx("i", {
                className: S(191) + S(X ? 157 : 176) + S(177),
                onClick: () => D(!X),
                title: X ? "Mostrar carrinho" : S(208),
              }),
            ],
          }),
        ],
      }),
      m.jsxs(S(181), {
        className: S(175),
        children: [
          m.jsxs(S(181), {
            className: S(178),
            children: [
              m.jsxs("div", {
                className: S(169),
                children: [
                  "+",
                  f[S(172)],
                  S(202),
                  r[S(192)],
                  m.jsx("i", { className: S(187), title: S(206), onClick: Y }),
                ],
              }),
              m.jsxs(S(181), {
                className: S(165),
                children: [
                  f[S(211)].toLocaleString(),
                  S(179),
                  f[S(184)].toLocaleString(),
                  " Curtidas",
                  E > 0 &&
                    m.jsxs(m.Fragment, {
                      children: [
                        " ",
                        "| ",
                        E,
                        " ",
                        E === 1 ? S(161) : "vÃ­deos",
                        m.jsx("i", {
                          className: S(174),
                          title: "Ver vÃ­deos",
                          onClick: i,
                          style: { marginLeft: 10 },
                        }),
                      ],
                    }),
                  m.jsx("i", {
                    className: S(187),
                    title: "Remover",
                    onClick: Y,
                  }),
                ],
              }),
            ],
          }),
          m.jsx(S(196), {
            className: S(209),
            onClick: sl,
            disabled: M,
            children: M ? S(168) : "Finalizar Compra",
          }),
        ],
      }),
    ],
  });
}
var Fr = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Jr = _a.createContext && _a.createContext(Fr),
  Jd = ["attr", "size", "title"];
function kd(f, r) {
  if (f == null) return {};
  var x = Wd(f, r),
    i,
    S;
  if (Object.getOwnPropertySymbols) {
    var M = Object.getOwnPropertySymbols(f);
    for (S = 0; S < M.length; S++)
      (i = M[S]),
        !(r.indexOf(i) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(f, i) &&
          (x[i] = f[i]);
  }
  return x;
}
function Wd(f, r) {
  if (f == null) return {};
  var x = {};
  for (var i in f)
    if (Object.prototype.hasOwnProperty.call(f, i)) {
      if (r.indexOf(i) >= 0) continue;
      x[i] = f[i];
    }
  return x;
}
function xc() {
  return (
    (xc = Object.assign
      ? Object.assign.bind()
      : function (f) {
          for (var r = 1; r < arguments.length; r++) {
            var x = arguments[r];
            for (var i in x)
              Object.prototype.hasOwnProperty.call(x, i) && (f[i] = x[i]);
          }
          return f;
        }),
    xc.apply(this, arguments)
  );
}
function kr(f, r) {
  var x = Object.keys(f);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(f);
    r &&
      (i = i.filter(function (S) {
        return Object.getOwnPropertyDescriptor(f, S).enumerable;
      })),
      x.push.apply(x, i);
  }
  return x;
}
function rc(f) {
  for (var r = 1; r < arguments.length; r++) {
    var x = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? kr(Object(x), !0).forEach(function (i) {
          $d(f, i, x[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(x))
      : kr(Object(x)).forEach(function (i) {
          Object.defineProperty(f, i, Object.getOwnPropertyDescriptor(x, i));
        });
  }
  return f;
}
function $d(f, r, x) {
  return (
    (r = Fd(r)),
    r in f
      ? Object.defineProperty(f, r, {
          value: x,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (f[r] = x),
    f
  );
}
function Fd(f) {
  var r = Id(f, "string");
  return typeof r == "symbol" ? r : r + "";
}
function Id(f, r) {
  if (typeof f != "object" || !f) return f;
  var x = f[Symbol.toPrimitive];
  if (x !== void 0) {
    var i = x.call(f, r);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(f);
}
function Ir(f) {
  return (
    f &&
    f.map((r, x) =>
      _a.createElement(r.tag, rc({ key: x }, r.attr), Ir(r.child))
    )
  );
}
function Du(f) {
  return (r) =>
    _a.createElement(Pd, xc({ attr: rc({}, f.attr) }, r), Ir(f.child));
}
function Pd(f) {
  var r = (x) => {
    var { attr: i, size: S, title: M } = f,
      H = kd(f, Jd),
      X = S || x.size || "1em",
      D;
    return (
      x.className && (D = x.className),
      f.className && (D = (D ? D + " " : "") + f.className),
      _a.createElement(
        "svg",
        xc(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          x.attr,
          i,
          H,
          {
            className: D,
            style: rc(rc({ color: f.color || x.color }, x.style), f.style),
            height: X,
            width: X,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        M && _a.createElement("title", null, M),
        f.children
      )
    );
  };
  return Jr !== void 0
    ? _a.createElement(Jr.Consumer, null, (x) => r(x))
    : r(Fr);
}
function l2(f) {
  return Du({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z",
        },
        child: [],
      },
    ],
  })(f);
}
function t2(f) {
  return Du({
    attr: { viewBox: "0 0 320 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z",
        },
        child: [],
      },
    ],
  })(f);
}
function a2(f) {
  return Du({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z",
        },
        child: [],
      },
    ],
  })(f);
}
function Wr(f) {
  return Du({
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z",
        },
        child: [],
      },
    ],
  })(f);
}
function e2(f) {
  return Du({
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z",
        },
        child: [],
      },
    ],
  })(f);
}
const Zi = Wt;
function Wt(f, r) {
  const x = oc();
  return (
    (Wt = function (i, S) {
      return (i = i - 222), x[i];
    }),
    Wt(f, r)
  );
}
(function (f, r) {
  const x = Wt,
    i = f();
  for (;;)
    try {
      if (
        (-parseInt(x(252)) / 1) * (-parseInt(x(254)) / 2) +
          (-parseInt(x(249)) / 3) * (parseInt(x(256)) / 4) +
          (parseInt(x(234)) / 5) * (-parseInt(x(245)) / 6) +
          (parseInt(x(224)) / 7) * (parseInt(x(243)) / 8) +
          -parseInt(x(236)) / 9 +
          (parseInt(x(247)) / 10) * (-parseInt(x(238)) / 11) +
          (parseInt(x(227)) / 12) * (parseInt(x(225)) / 13) ===
        r
      )
        break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(oc, 867930);
function oc() {
  const f = [
    "187UOvSzj",
    "current",
    "section",
    "addEventListener",
    "Rafael",
    "408OedSGE",
    "map",
    "28524OWbwFK",
    "removeEventListener",
    "738210DeXMTy",
    "carousel-titulo",
    "69YVoBXS",
    "play",
    "ended",
    "1256782jAnguT",
    "muted",
    "2BfQNFA",
    "fill",
    "151324rFuDuq",
    "nome-depoente",
    "div",
    "length",
    "icone-play",
    "108682uClFXC",
    "13UMfjgN",
    "button",
    "40519752ZdyUuU",
    "O que dizem nossos clientes",
    "seta direita",
    "pause",
    "Ana",
    "estrelas",
    "paused",
    "1720LGrGeb",
    "seta esquerda",
    "7171902ZHGlBe",
    "currentTime",
  ];
  return (
    (oc = function () {
      return f;
    }),
    oc()
  );
}
const kn = [
  { video: "/ana.mp4", nome: Zi(231) },
  { video: "/rafael3.mp4", nome: Zi(242) },
];
function u2() {
  const f = Zi,
    [r, x] = Z.useState(0),
    i = Z.useRef(null),
    [S, M] = Z.useState(!1),
    [H, X] = Z.useState(!1),
    [D, E] = Z.useState(!1),
    [C, L] = Z.useState(!1),
    Y = () => {
      const $ = Wt;
      x((ll) => (ll - 1 + kn[$(222)]) % kn[$(222)]), I();
    },
    sl = () => {
      const $ = Wt;
      x((ll) => (ll + 1) % kn[$(222)]), I();
    },
    I = () => {
      const $ = Wt;
      M(!1),
        X(!1),
        E(!1),
        L(!1),
        i[$(239)] && (i[$(239)][$(230)](), (i.current[$(237)] = 0));
    },
    Q = () => {
      const $ = Wt,
        ll = i.current;
      if (ll) {
        if (D) {
          (ll[$(237)] = 0), ll.play(), E(!1), M(!0), X(!1);
          return;
        }
        ll[$(233)]
          ? ((ll[$(253)] = !1), ll[$(250)](), M(!0), X(!1), L(!0))
          : (ll.pause(), M(!1), X(!0));
      }
    },
    P = () => {
      M(!1), E(!0), X(!1);
    };
  Z.useEffect(() => {
    const $ = Wt,
      ll = i[$(239)];
    return (
      ll && ll[$(241)]($(251), P),
      () => {
        const A = $;
        ll && ll[A(246)](A(251), P);
      }
    );
  }, [r]);
  const { video: El, nome: zl } = kn[r];
  return m.jsxs(f(240), {
    className: "carousel-section",
    children: [
      m.jsx("h2", { className: f(248), children: f(228) }),
      m.jsxs(f(258), {
        className: "carousel-container",
        children: [
          m.jsx(f(226), {
            className: f(235),
            onClick: Y,
            children: m.jsx(l2, {}),
          }),
          m.jsxs(f(258), {
            className: "carousel-card",
            children: [
              m.jsx(f(258), {
                className: f(232),
                children: Array(5)
                  [f(255)]()
                  [f(244)](($, ll) => m.jsx(e2, { color: "#FACC15" }, ll)),
              }),
              m.jsxs(f(258), {
                className: "video-container",
                onClick: Q,
                children: [
                  m.jsx("video", {
                    ref: i,
                    src: El,
                    playsInline: !0,
                    className: "carousel-video",
                  }),
                  !C && m.jsx(Wr, { className: f(223) }),
                  H && m.jsx(a2, { className: f(223) }),
                  D && m.jsx(Wr, { className: f(223) }),
                ],
              }),
              m.jsx(f(258), { className: f(257), children: zl }),
            ],
          }),
          m.jsx(f(226), {
            className: f(229),
            onClick: sl,
            children: m.jsx(t2, {}),
          }),
        ],
      }),
    ],
  });
}
(function (f, r) {
  const x = Mu,
    i = f();
  for (;;)
    try {
      if (
        -parseInt(x(320)) / 1 +
          (-parseInt(x(326)) / 2) * (parseInt(x(325)) / 3) +
          (-parseInt(x(338)) / 4) * (parseInt(x(341)) / 5) +
          -parseInt(x(336)) / 6 +
          -parseInt(x(329)) / 7 +
          (parseInt(x(340)) / 8) * (-parseInt(x(328)) / 9) +
          (-parseInt(x(321)) / 10) * (-parseInt(x(339)) / 11) ===
        r
      )
        break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(dc, 278642);
function dc() {
  const f = [
    "createElement",
    "depoimentos-grid",
    "ServiÃ§o rÃ¡pido, seguro e confiÃ¡vel.",
    "map",
    "Consegui bombar meu TikTok em poucos minutos!",
    "fas fa-quote-left icone-aspas",
    "998262cRByeJ",
    "replace",
    "4csgBpI",
    "11JmUHwO",
    "1497032pdIpVr",
    "106235zpKLCa",
    "depoimento-card",
    "427081fDGgPz",
    "15591920lwzTEn",
    "video/mp4",
    "Perfeito para ganhar credibilidade e engajamento.",
    "texto",
    "471IItgtC",
    "50CnjjnE",
    "O que dizem nossos clientes",
    "9QumJSr",
    "3323537QCVmYZ",
  ];
  return (
    (dc = function () {
      return f;
    }),
    dc()
  );
}
function Mu(f, r) {
  const x = dc();
  return (
    (Mu = function (i, S) {
      return (i = i - 320), x[i];
    }),
    Mu(f, r)
  );
}
function n2() {
  const f = Mu,
    [r, x] = Z.useState(!0);
  Z.useEffect(() => {
    const S = Mu,
      M = document[S(330)]("video"),
      H = !!(M.canPlayType && M.canPlayType(S(322))[S(337)](/no/, ""));
    x(H);
  }, []);
  const i = [f(334), f(323), f(332)];
  return r
    ? m.jsx(u2, {})
    : m.jsxs("section", {
        className: "depoimentos-section",
        children: [
          m.jsx("h2", { className: "depoimentos-titulo", children: f(327) }),
          m.jsx("div", {
            className: f(331),
            children: i[f(333)]((S, M) =>
              m.jsxs(
                "div",
                {
                  className: f(342),
                  children: [
                    m.jsx("i", { className: f(335) }),
                    m.jsx("p", { className: f(324), children: S }),
                  ],
                },
                M
              )
            ),
          }),
        ],
      });
}
(function (f, r) {
  const x = Ae,
    i = f();
  for (;;)
    try {
      if (
        (-parseInt(x(291)) / 1) * (-parseInt(x(251)) / 2) +
          (parseInt(x(332)) / 3) * (-parseInt(x(311)) / 4) +
          parseInt(x(342)) / 5 +
          -parseInt(x(319)) / 6 +
          (-parseInt(x(257)) / 7) * (parseInt(x(243)) / 8) +
          (-parseInt(x(352)) / 9) * (parseInt(x(262)) / 10) +
          parseInt(x(281)) / 11 ===
        r
      )
        break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(hc, 720630);
function hc() {
  const f = [
    "getElementById",
    "118839RoqsHx",
    "smooth",
    "AGORA",
    "novembro",
    "clsy16gu",
    "311230cQqAiD",
    "Ofertas do Dia",
    "cls8k7my ",
    "cls29o8p",
    "name",
    "#007bff",
    "Editar VÃ­deos",
    "Rota logout nÃ£o encontrada",
    "marÃ§o",
    "Oferta 3",
    "Erro ao obter dados do perfil:",
    "toLocaleString",
    "toFixed",
    "getFullYear",
    "agosto",
    "cls9248d",
    "offersAnchor",
    ", seu perfil estÃ¡ pronto para ",
    " e seleciona quais vÃ­deos deseja impulsionar. Em questÃ£o de horas, vocÃª comeÃ§a a receber ",
    "656095jXNdMe",
    "Selecionar Oferta",
    "button",
    "scrollTo",
    "VocÃª escolhe uma das ",
    "fas fa-arrow-left",
    "seguidores",
    "selecionado",
    "removeItem",
    "Oferta 1",
    "5594ngmvji",
    "Erro ao limpar perfil:",
    "pointer",
    "Ofertas Especiais",
    "fas fa-eye",
    "clspnk9m",
    "getDate",
    "views",
    "! NÃ£o perca essa oportunidade de crescer no TikTok.",
    "julho",
    " VisualizaÃ§Ãµes",
    "error",
    "Hoje vocÃª tem ",
    "outubro",
    "username",
    "clscxvvi",
    "clsip1ce",
    "stats",
    "Oferta 2",
    "location",
    "32llxDdM",
    "reload",
    "div",
    "center",
    "scrollIntoView",
    "decolar",
    "Ver vÃ­deos selecionados",
    "map",
    "3133626HaXPKC",
    "followers",
    "30px",
    '"Selecionar Oferta"',
    "videos",
    "clsyas3x",
    "followerCount",
    "getMonth",
    "10px",
    "clso3oxp",
    " no seu TikTok!",
    "R$ ",
    "user",
    "11631gbyidG",
    "abril",
    "maio",
    "Oferta 4",
    "junho",
    "clswqmkl",
    " acima, clica em ",
    "offer-final",
    "avatarLarger",
    "clsdd6a4",
    "3702650inWMdB",
    "clss7a6q",
    "data",
    "strong",
    "cls79a7v",
    "fevereiro",
    "clsmacwz",
    " Curtidas",
    " hoje mesmo! Escolha a oferta que melhor se encaixa no seu objetivo e comece a ver resultados ",
    "uniqueId",
    "18TRtLEM",
    "span",
    "include",
    "dezembro",
    "logout",
    "272daTkVO",
    "clsb5jmd",
    "replace",
    " Escolher outro perfil",
    " de ",
    "setembro",
    " Ver vÃ­deos",
    "fas fa-heart",
    "398vIsVON",
    "img",
    " seguidores. Vamos elevar esse nÃºmero agora?",
    "cls20it9",
    "clsoy78d",
  ];
  return (
    (hc = function () {
      return f;
    }),
    hc()
  );
}
function Ae(f, r) {
  const x = hc();
  return (
    (Ae = function (i, S) {
      return (i = i - 239), x[i];
    }),
    Ae(f, r)
  );
}
function c2() {
  const f = Ae,
    [r, x] = Z.useState({ username: "", avatar: "", seguidores: 0 }),
    [i, S] = Z.useState(""),
    [M, H] = Z.useState(!1),
    [X, D] = Z.useState(null),
    [E, C] = Z.useState(null),
    [L, Y] = Z.useState(!1),
    [sl] = Z.useState([
      {
        name: f(290),
        followers: 250,
        views: 15e3,
        likes: 1500,
        original_price: 70,
        final_price: 30,
      },
      {
        name: f(309),
        followers: 500,
        views: 3e4,
        likes: 3e3,
        original_price: 140,
        final_price: 50,
      },
      {
        name: f(271),
        followers: 1e3,
        views: 6e4,
        likes: 6e3,
        original_price: 280,
        final_price: 100,
      },
      {
        name: f(335),
        followers: 2500,
        views: 12e4,
        likes: 12e3,
        original_price: 560,
        final_price: 235,
      },
    ]);
  Z.useEffect(() => {
    const A = f;
    setTimeout(() => {
      window[Ae(284)](0, 0);
    }, 0);
    async function B() {
      const ol = Ae;
      try {
        const jl = await Li("getProfile", "", !0);
        if (!jl[ol(302)]) {
          const Cl = jl.data[ol(308)] || {},
            Al = jl[ol(344)][ol(331)] || {};
          x({
            username: Al[ol(351)] || "",
            avatar: Al[ol(340)] || "",
            seguidores: Cl[ol(325)] || 0,
          });
        }
      } catch (jl) {
        console[ol(302)](ol(272), jl);
      }
    }
    const cl = [
        "janeiro",
        A(347),
        A(270),
        A(333),
        A(334),
        A(336),
        A(300),
        A(276),
        A(248),
        A(304),
        A(260),
        A(241),
      ],
      rl = new Date();
    S(rl[A(297)]() + A(247) + cl[rl[A(326)]()] + " de " + rl[A(275)]()), B();
  }, []);
  const I = (A) => {
      D(A), H(!0);
    },
    Q = () => {
      H(!1), D(null);
    },
    P = (A = []) => {
      const B = { ...X, videos: A };
      C(B), Y(!0), Q();
    },
    El = () => {
      const A = f;
      C(null),
        Y(!1),
        sessionStorage[A(289)]("offer"),
        sessionStorage[A(289)](A(323));
    },
    zl = () => {
      E && (D(E), H(!0));
    },
    $ = async () => {
      const A = f;
      try {
        const B = await Ga(),
          cl = ze(),
          rl = B == null ? void 0 : B[A(242)];
        if (!rl) throw new Error(A(269));
        await fetch(cl + "/" + rl, { credentials: A(240) }),
          window[A(310)][A(312)]();
      } catch (B) {
        console.error(A(292), B),
          alert("Erro ao desconectar. Tente novamente.");
      }
    },
    ll = () => {
      const A = f,
        B = document[A(256)](A(278));
      B && B[A(315)]({ behavior: A(258) });
    };
  return m.jsxs(f(313), {
    className: f(341),
    children: [
      m.jsxs(f(313), {
        className: f(341),
        children: [
          m.jsxs(f(313), {
            className: f(328),
            children: [
              r.avatar &&
                m.jsx(f(252), {
                  src: r.avatar,
                  className: f(307),
                  alt: "Avatar de @" + r[f(305)],
                }),
              m.jsxs("p", {
                className: "clsq22t4",
                children: [
                  m.jsxs(f(345), { children: ["@", r[f(305)]] }),
                  f(279),
                  m.jsx(f(345), { children: f(316) }),
                  f(299),
                ],
              }),
              m.jsxs("p", {
                className: f(255),
                children: [
                  f(303),
                  m.jsx(f(345), { children: r[f(287)][f(273)]() }),
                  f(253),
                ],
              }),
            ],
          }),
          m.jsx(f(313), {
            className: f(244),
            id: "offersAnchor",
            children: sl[f(318)]((A, B) =>
              m.jsxs(
                f(313),
                {
                  className:
                    f(264) +
                    ((E == null ? void 0 : E[f(266)]) === A[f(266)]
                      ? f(288)
                      : ""),
                  children: [
                    m.jsx("p", { className: f(296), children: A.name }),
                    m.jsxs("p", {
                      className: f(261),
                      children: [
                        m.jsx("i", { className: "fas fa-user-plus" }),
                        " +",
                        A[f(320)][f(273)](),
                        " Seguidores",
                        m.jsx("br", {}),
                        m.jsx("i", { className: f(295) }),
                        " +",
                        A[f(298)][f(273)](),
                        f(301),
                        m.jsx("br", {}),
                        m.jsx("i", { className: f(250) }),
                        " +",
                        A.likes[f(273)](),
                        f(349),
                      ],
                    }),
                    m.jsx("p", {
                      className: f(337),
                      children: m.jsxs(f(239), {
                        className: f(277),
                        children: [
                          "R$ ",
                          A.original_price.toFixed(2)[f(245)](".", ","),
                        ],
                      }),
                    }),
                    m.jsxs("p", {
                      className: f(339),
                      children: [
                        f(330),
                        A.final_price[f(274)](2).replace(".", ","),
                      ],
                    }),
                    m.jsx(f(283), {
                      className: f(306),
                      onClick: () => I(A),
                      children:
                        (E == null ? void 0 : E[f(266)]) === A[f(266)]
                          ? f(268)
                          : f(282),
                    }),
                    (E == null ? void 0 : E[f(266)]) === A[f(266)] &&
                      m.jsxs(f(313), {
                        className: "detalhes-olho",
                        onClick: zl,
                        title: f(317),
                        style: {
                          marginTop: "10px",
                          cursor: f(293),
                          color: f(267),
                        },
                        children: [m.jsx("i", { className: f(295) }), f(249)],
                      }),
                  ],
                },
                B
              )
            ),
          }),
          L &&
            m.jsx(wd, { oferta: E, perfil: r, onReset: El, onVerVideos: zl }),
          m.jsxs(f(313), {
            className: f(265),
            children: [
              m.jsxs("h2", {
                children: [
                  m.jsx("i", { className: "fas fa-info-circle" }),
                  " Como Funciona?",
                ],
              }),
              m.jsxs("p", {
                children: [
                  f(285),
                  m.jsx(f(345), { children: f(294) }),
                  f(338),
                  m.jsx("em", { children: f(322) }),
                  f(280),
                  m.jsx("strong", {
                    children: "seguidores, visualizaÃ§Ãµes e curtidas",
                  }),
                  f(329),
                ],
              }),
            ],
          }),
          m.jsx(n2, {}),
          m.jsx("p", { className: f(346), children: i }),
          m.jsx("h1", { className: f(254), children: f(263) }),
          m.jsxs("p", {
            className: f(343),
            children: [
              m.jsx(f(345), { children: "Garanta seu crescimento no TikTok" }),
              f(350),
              m.jsx("em", { children: f(259) }),
              "!",
            ],
          }),
          m.jsx(f(313), {
            style: { textAlign: f(314), marginTop: f(327) },
            children: m.jsx(f(283), {
              className: f(324),
              onClick: ll,
              children: "Sim!! Eu quero",
            }),
          }),
          m.jsx("div", {
            style: { textAlign: "center", marginTop: f(321) },
            children: m.jsxs(f(283), {
              className: f(348),
              onClick: $,
              children: [m.jsx("i", { className: f(286) }), f(246)],
            }),
          }),
        ],
      }),
      M && m.jsx(Kd, { offer: X, onClose: Q, onConfirmar: P }),
    ],
  });
}
(function (f, r) {
  const x = Oe,
    i = f();
  for (;;)
    try {
      if (
        (-parseInt(x(452)) / 1) * (-parseInt(x(450)) / 2) +
          -parseInt(x(451)) / 3 +
          (parseInt(x(432)) / 4) * (parseInt(x(433)) / 5) +
          (parseInt(x(436)) / 6) * (-parseInt(x(435)) / 7) +
          (parseInt(x(439)) / 8) * (parseInt(x(448)) / 9) +
          (-parseInt(x(440)) / 10) * (parseInt(x(447)) / 11) +
          -parseInt(x(443)) / 12 ===
        r
      )
        break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(vc, 769984);
function vc() {
  const f = [
    "error",
    "41415LtlWOx",
    "1370862HrlmuU",
    "getProfile",
    "1426ThzlpZ",
    "972855UCgcGF",
    "1934QnXiWn",
    "data",
    "4gOjCXJ",
    "6873105hRhuMy",
    "Bearer ",
    "14tTlKHM",
    "2011020Fwrchf",
    "Erro ao verificar perfil salvo:",
    "json",
    "24kkHzJx",
    "2530zZCNMZ",
    "scrollTo",
    "div",
    "5920356bwNDuk",
    "apitoken",
    "include",
  ];
  return (
    (vc = function () {
      return f;
    }),
    vc()
  );
}
function Oe(f, r) {
  const x = vc();
  return (
    (Oe = function (i, S) {
      return (i = i - 432), x[i];
    }),
    Oe(f, r)
  );
}
function f2() {
  const f = Oe,
    [r, x] = Z.useState(3),
    [i, S] = Z.useState({});
  Qd(),
    Z.useEffect(() => {
      (async () => {
        var E;
        const D = Oe;
        try {
          const C = await Ga(),
            L = ze(),
            Y = C == null ? void 0 : C[D(449)];
          if (!Y) throw new Error("Rota getProfile nÃ£o encontrada");
          const sl = await fetch(L + "/" + Y, {
              credentials: D(445),
              headers: {
                Authorization: D(434) + (sessionStorage.getItem(D(444)) || ""),
              },
            }),
            I = await sl[D(438)]();
          !I[D(446)] && (E = I[D(453)]) != null && E.user && x(4);
        } catch (C) {
          console[D(446)](D(437), C);
        }
      })();
    }, []),
    Z.useEffect(() => {
      r === 4 && window[Oe(441)](0, 0);
    }, [r]);
  const M = () => {
      x(3);
    },
    H = () => {
      x(4);
    };
  return m.jsxs(f(442), {
    className: "app-wrapper",
    children: [
      r === 1 && m.jsx(Xd, { onNext: M }),
      r === 3 && m.jsx(Ld, { onPerfilConfirmado: H }),
      r === 4 && m.jsx(c2, {}),
    ],
  });
}
var Xi = yc;
(function (f, r) {
  for (var x = yc, i = f(); ; )
    try {
      var S =
        (-parseInt(x(264)) / 1) * (parseInt(x(265)) / 2) +
        -parseInt(x(266)) / 3 +
        parseInt(x(267)) / 4 +
        (-parseInt(x(263)) / 5) * (parseInt(x(271)) / 6) +
        (parseInt(x(262)) / 7) * (-parseInt(x(259)) / 8) +
        -parseInt(x(270)) / 9 +
        parseInt(x(269)) / 10;
      if (S === r) break;
      i.push(i.shift());
    } catch {
      i.push(i.shift());
    }
})(mc, 896121);
function mc() {
  var f = [
    "root",
    "render",
    "7qNEDTt",
    "5lAtABg",
    "143ghshMP",
    "18974kMSwnE",
    "4540434PBLYRG",
    "1623188QzQuGJ",
    "getElementById",
    "60067230rDWOPG",
    "6644466ilVfij",
    "10506252indIiD",
    "1255712jjqSTd",
  ];
  return (
    (mc = function () {
      return f;
    }),
    mc()
  );
}
function yc(f, r) {
  var x = mc();
  return (
    (yc = function (i, S) {
      i = i - 259;
      var M = x[i];
      return M;
    }),
    yc(f, r)
  );
}
Rd.createRoot(document[Xi(268)](Xi(260)))[Xi(261)](
  m.jsx(Z.StrictMode, { children: m.jsx(f2, {}) })
);
