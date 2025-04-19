var nr = Object.defineProperty;
var or = (x, b, _) => b in x ? nr(x, b, { enumerable: !0, configurable: !0, writable: !0, value: _ }) : x[b] = _;
var si = (x, b, _) => or(x, typeof b != "symbol" ? b + "" : b, _);
function rr(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
var oe = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var sr = oe.exports, kn;
function ar() {
  return kn || (kn = 1, function(x, b) {
    (function(_, S) {
      S(b);
    })(sr, function(_) {
      var S = "1.9.4";
      function k(t) {
        var e, i, n, o;
        for (i = 1, n = arguments.length; i < n; i++) {
          o = arguments[i];
          for (e in o)
            t[e] = o[e];
        }
        return t;
      }
      var r = Object.create || /* @__PURE__ */ function() {
        function t() {
        }
        return function(e) {
          return t.prototype = e, new t();
        };
      }();
      function a(t, e) {
        var i = Array.prototype.slice;
        if (t.bind)
          return t.bind.apply(t, i.call(arguments, 1));
        var n = i.call(arguments, 2);
        return function() {
          return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
        };
      }
      var l = 0;
      function u(t) {
        return "_leaflet_id" in t || (t._leaflet_id = ++l), t._leaflet_id;
      }
      function d(t, e, i) {
        var n, o, s, h;
        return h = function() {
          n = !1, o && (s.apply(i, o), o = !1);
        }, s = function() {
          n ? o = arguments : (t.apply(i, arguments), setTimeout(h, e), n = !0);
        }, s;
      }
      function m(t, e, i) {
        var n = e[1], o = e[0], s = n - o;
        return t === n && i ? t : ((t - o) % s + s) % s + o;
      }
      function c() {
        return !1;
      }
      function g(t, e) {
        if (e === !1)
          return t;
        var i = Math.pow(10, e === void 0 ? 6 : e);
        return Math.round(t * i) / i;
      }
      function v(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }
      function P(t) {
        return v(t).split(/\s+/);
      }
      function w(t, e) {
        Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? r(t.options) : {});
        for (var i in e)
          t.options[i] = e[i];
        return t.options;
      }
      function F(t, e, i) {
        var n = [];
        for (var o in t)
          n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
      }
      var T = /\{ *([\w_ -]+) *\}/g;
      function D(t, e) {
        return t.replace(T, function(i, n) {
          var o = e[n];
          if (o === void 0)
            throw new Error("No value provided for variable " + i);
          return typeof o == "function" && (o = o(e)), o;
        });
      }
      var U = Array.isArray || function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      };
      function nt(t, e) {
        for (var i = 0; i < t.length; i++)
          if (t[i] === e)
            return i;
        return -1;
      }
      var tt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function Tt(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t];
      }
      var ci = 0;
      function fi(t) {
        var e = +/* @__PURE__ */ new Date(), i = Math.max(0, 16 - (e - ci));
        return ci = e + i, window.setTimeout(t, i);
      }
      var Ce = window.requestAnimationFrame || Tt("RequestAnimationFrame") || fi, di = window.cancelAnimationFrame || Tt("CancelAnimationFrame") || Tt("CancelRequestAnimationFrame") || function(t) {
        window.clearTimeout(t);
      };
      function ot(t, e, i) {
        if (i && Ce === fi)
          t.call(e);
        else
          return Ce.call(window, a(t, e));
      }
      function ht(t) {
        t && di.call(window, t);
      }
      var An = {
        __proto__: null,
        extend: k,
        create: r,
        bind: a,
        get lastId() {
          return l;
        },
        stamp: u,
        throttle: d,
        wrapNum: m,
        falseFn: c,
        formatNum: g,
        trim: v,
        splitWords: P,
        setOptions: w,
        getParamString: F,
        template: D,
        isArray: U,
        indexOf: nt,
        emptyImageUrl: tt,
        requestFn: Ce,
        cancelFn: di,
        requestAnimFrame: ot,
        cancelAnimFrame: ht
      };
      function yt() {
      }
      yt.extend = function(t) {
        var e = function() {
          w(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, i = e.__super__ = this.prototype, n = r(i);
        n.constructor = e, e.prototype = n;
        for (var o in this)
          Object.prototype.hasOwnProperty.call(this, o) && o !== "prototype" && o !== "__super__" && (e[o] = this[o]);
        return t.statics && k(e, t.statics), t.includes && (zn(t.includes), k.apply(null, [n].concat(t.includes))), k(n, t), delete n.statics, delete n.includes, n.options && (n.options = i.options ? r(i.options) : {}, k(n.options, t.options)), n._initHooks = [], n.callInitHooks = function() {
          if (!this._initHooksCalled) {
            i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var s = 0, h = n._initHooks.length; s < h; s++)
              n._initHooks[s].call(this);
          }
        }, e;
      }, yt.include = function(t) {
        var e = this.prototype.options;
        return k(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
      }, yt.mergeOptions = function(t) {
        return k(this.prototype.options, t), this;
      }, yt.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1), i = typeof t == "function" ? t : function() {
          this[t].apply(this, e);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
      };
      function zn(t) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          t = U(t) ? t : [t];
          for (var e = 0; e < t.length; e++)
            t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var lt = {
        /* @method on(type: String, fn: Function, context?: Object): this
         * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
         *
         * @alternative
         * @method on(eventMap: Object): this
         * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
         */
        on: function(t, e, i) {
          if (typeof t == "object")
            for (var n in t)
              this._on(n, t[n], e);
          else {
            t = P(t);
            for (var o = 0, s = t.length; o < s; o++)
              this._on(t[o], e, i);
          }
          return this;
        },
        /* @method off(type: String, fn?: Function, context?: Object): this
         * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
         *
         * @alternative
         * @method off(eventMap: Object): this
         * Removes a set of type/listener pairs.
         *
         * @alternative
         * @method off: this
         * Removes all listeners to all events on the object. This includes implicitly attached events.
         */
        off: function(t, e, i) {
          if (!arguments.length)
            delete this._events;
          else if (typeof t == "object")
            for (var n in t)
              this._off(n, t[n], e);
          else {
            t = P(t);
            for (var o = arguments.length === 1, s = 0, h = t.length; s < h; s++)
              o ? this._off(t[s]) : this._off(t[s], e, i);
          }
          return this;
        },
        // attach listener (without syntactic sugar now)
        _on: function(t, e, i, n) {
          if (typeof e != "function") {
            console.warn("wrong listener type: " + typeof e);
            return;
          }
          if (this._listens(t, e, i) === !1) {
            i === this && (i = void 0);
            var o = { fn: e, ctx: i };
            n && (o.once = !0), this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(o);
          }
        },
        _off: function(t, e, i) {
          var n, o, s;
          if (this._events && (n = this._events[t], !!n)) {
            if (arguments.length === 1) {
              if (this._firingCount)
                for (o = 0, s = n.length; o < s; o++)
                  n[o].fn = c;
              delete this._events[t];
              return;
            }
            if (typeof e != "function") {
              console.warn("wrong listener type: " + typeof e);
              return;
            }
            var h = this._listens(t, e, i);
            if (h !== !1) {
              var f = n[h];
              this._firingCount && (f.fn = c, this._events[t] = n = n.slice()), n.splice(h, 1);
            }
          }
        },
        // @method fire(type: String, data?: Object, propagate?: Boolean): this
        // Fires an event of the specified type. You can optionally provide a data
        // object — the first argument of the listener function will contain its
        // properties. The event can optionally be propagated to event parents.
        fire: function(t, e, i) {
          if (!this.listens(t, i))
            return this;
          var n = k({}, e, {
            type: t,
            target: this,
            sourceTarget: e && e.sourceTarget || this
          });
          if (this._events) {
            var o = this._events[t];
            if (o) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var s = 0, h = o.length; s < h; s++) {
                var f = o[s], p = f.fn;
                f.once && this.off(t, p, f.ctx), p.call(f.ctx || this, n);
              }
              this._firingCount--;
            }
          }
          return i && this._propagateEvent(n), this;
        },
        // @method listens(type: String, propagate?: Boolean): Boolean
        // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
        // Returns `true` if a particular event type has any listeners attached to it.
        // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
        listens: function(t, e, i, n) {
          typeof t != "string" && console.warn('"string" type argument expected');
          var o = e;
          typeof e != "function" && (n = !!e, o = void 0, i = void 0);
          var s = this._events && this._events[t];
          if (s && s.length && this._listens(t, o, i) !== !1)
            return !0;
          if (n) {
            for (var h in this._eventParents)
              if (this._eventParents[h].listens(t, e, i, n))
                return !0;
          }
          return !1;
        },
        // returns the index (number) or false
        _listens: function(t, e, i) {
          if (!this._events)
            return !1;
          var n = this._events[t] || [];
          if (!e)
            return !!n.length;
          i === this && (i = void 0);
          for (var o = 0, s = n.length; o < s; o++)
            if (n[o].fn === e && n[o].ctx === i)
              return o;
          return !1;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(t, e, i) {
          if (typeof t == "object")
            for (var n in t)
              this._on(n, t[n], e, !0);
          else {
            t = P(t);
            for (var o = 0, s = t.length; o < s; o++)
              this._on(t[o], e, i, !0);
          }
          return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(t) {
          return this._eventParents = this._eventParents || {}, this._eventParents[u(t)] = t, this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(t) {
          return this._eventParents && delete this._eventParents[u(t)], this;
        },
        _propagateEvent: function(t) {
          for (var e in this._eventParents)
            this._eventParents[e].fire(t.type, k({
              layer: t.target,
              propagatedFrom: t.target
            }, t), !0);
        }
      };
      lt.addEventListener = lt.on, lt.removeEventListener = lt.clearAllEventListeners = lt.off, lt.addOneTimeEventListener = lt.once, lt.fireEvent = lt.fire, lt.hasEventListeners = lt.listens;
      var Wt = yt.extend(lt);
      function E(t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
      }
      var _i = Math.trunc || function(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
      E.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new E(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(t) {
          return this.clone()._add(z(t));
        },
        _add: function(t) {
          return this.x += t.x, this.y += t.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(t) {
          return this.clone()._subtract(z(t));
        },
        _subtract: function(t) {
          return this.x -= t.x, this.y -= t.y, this;
        },
        // @method divideBy(num: Number): Point
        // Returns the result of division of the current point by the given number.
        divideBy: function(t) {
          return this.clone()._divideBy(t);
        },
        _divideBy: function(t) {
          return this.x /= t, this.y /= t, this;
        },
        // @method multiplyBy(num: Number): Point
        // Returns the result of multiplication of the current point by the given number.
        multiplyBy: function(t) {
          return this.clone()._multiplyBy(t);
        },
        _multiplyBy: function(t) {
          return this.x *= t, this.y *= t, this;
        },
        // @method scaleBy(scale: Point): Point
        // Multiply each coordinate of the current point by each coordinate of
        // `scale`. In linear algebra terms, multiply the point by the
        // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
        // defined by `scale`.
        scaleBy: function(t) {
          return new E(this.x * t.x, this.y * t.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(t) {
          return new E(this.x / t.x, this.y / t.y);
        },
        // @method round(): Point
        // Returns a copy of the current point with rounded coordinates.
        round: function() {
          return this.clone()._round();
        },
        _round: function() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        },
        // @method floor(): Point
        // Returns a copy of the current point with floored coordinates (rounded down).
        floor: function() {
          return this.clone()._floor();
        },
        _floor: function() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        },
        // @method ceil(): Point
        // Returns a copy of the current point with ceiled coordinates (rounded up).
        ceil: function() {
          return this.clone()._ceil();
        },
        _ceil: function() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        },
        // @method trunc(): Point
        // Returns a copy of the current point with truncated coordinates (rounded towards zero).
        trunc: function() {
          return this.clone()._trunc();
        },
        _trunc: function() {
          return this.x = _i(this.x), this.y = _i(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(t) {
          t = z(t);
          var e = t.x - this.x, i = t.y - this.y;
          return Math.sqrt(e * e + i * i);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(t) {
          return t = z(t), t.x === this.x && t.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(t) {
          return t = z(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + g(this.x) + ", " + g(this.y) + ")";
        }
      };
      function z(t, e, i) {
        return t instanceof E ? t : U(t) ? new E(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new E(t.x, t.y) : new E(t, e, i);
      }
      function G(t, e) {
        if (t)
          for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
            this.extend(i[n]);
      }
      G.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(t) {
          var e, i;
          if (!t)
            return this;
          if (t instanceof E || typeof t[0] == "number" || "x" in t)
            e = i = z(t);
          else if (t = rt(t), e = t.min, i = t.max, !e || !i)
            return this;
          return !this.min && !this.max ? (this.min = e.clone(), this.max = i.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(t) {
          return z(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            t
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return z(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return z(this.max.x, this.min.y);
        },
        // @method getTopLeft(): Point
        // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
        getTopLeft: function() {
          return this.min;
        },
        // @method getBottomRight(): Point
        // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
        getBottomRight: function() {
          return this.max;
        },
        // @method getSize(): Point
        // Returns the size of the given bounds
        getSize: function() {
          return this.max.subtract(this.min);
        },
        // @method contains(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains(point: Point): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(t) {
          var e, i;
          return typeof t[0] == "number" || t instanceof E ? t = z(t) : t = rt(t), t instanceof G ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(t) {
          t = rt(t);
          var e = this.min, i = this.max, n = t.min, o = t.max, s = o.x >= e.x && n.x <= i.x, h = o.y >= e.y && n.y <= i.y;
          return s && h;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(t) {
          t = rt(t);
          var e = this.min, i = this.max, n = t.min, o = t.max, s = o.x > e.x && n.x < i.x, h = o.y > e.y && n.y < i.y;
          return s && h;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this.min && this.max);
        },
        // @method pad(bufferRatio: Number): Bounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(t) {
          var e = this.min, i = this.max, n = Math.abs(e.x - i.x) * t, o = Math.abs(e.y - i.y) * t;
          return rt(
            z(e.x - n, e.y - o),
            z(i.x + n, i.y + o)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(t) {
          return t ? (t = rt(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
        }
      };
      function rt(t, e) {
        return !t || t instanceof G ? t : new G(t, e);
      }
      function st(t, e) {
        if (t)
          for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
            this.extend(i[n]);
      }
      st.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(t) {
          var e = this._southWest, i = this._northEast, n, o;
          if (t instanceof H)
            n = t, o = t;
          else if (t instanceof st) {
            if (n = t._southWest, o = t._northEast, !n || !o)
              return this;
          } else
            return t ? this.extend(B(t) || j(t)) : this;
          return !e && !i ? (this._southWest = new H(n.lat, n.lng), this._northEast = new H(o.lat, o.lng)) : (e.lat = Math.min(n.lat, e.lat), e.lng = Math.min(n.lng, e.lng), i.lat = Math.max(o.lat, i.lat), i.lng = Math.max(o.lng, i.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(t) {
          var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, o = Math.abs(e.lng - i.lng) * t;
          return new st(
            new H(e.lat - n, e.lng - o),
            new H(i.lat + n, i.lng + o)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new H(
            (this._southWest.lat + this._northEast.lat) / 2,
            (this._southWest.lng + this._northEast.lng) / 2
          );
        },
        // @method getSouthWest(): LatLng
        // Returns the south-west point of the bounds.
        getSouthWest: function() {
          return this._southWest;
        },
        // @method getNorthEast(): LatLng
        // Returns the north-east point of the bounds.
        getNorthEast: function() {
          return this._northEast;
        },
        // @method getNorthWest(): LatLng
        // Returns the north-west point of the bounds.
        getNorthWest: function() {
          return new H(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new H(this.getSouth(), this.getEast());
        },
        // @method getWest(): Number
        // Returns the west longitude of the bounds
        getWest: function() {
          return this._southWest.lng;
        },
        // @method getSouth(): Number
        // Returns the south latitude of the bounds
        getSouth: function() {
          return this._southWest.lat;
        },
        // @method getEast(): Number
        // Returns the east longitude of the bounds
        getEast: function() {
          return this._northEast.lng;
        },
        // @method getNorth(): Number
        // Returns the north latitude of the bounds
        getNorth: function() {
          return this._northEast.lat;
        },
        // @method contains(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains (latlng: LatLng): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(t) {
          typeof t[0] == "number" || t instanceof H || "lat" in t ? t = B(t) : t = j(t);
          var e = this._southWest, i = this._northEast, n, o;
          return t instanceof st ? (n = t.getSouthWest(), o = t.getNorthEast()) : n = o = t, n.lat >= e.lat && o.lat <= i.lat && n.lng >= e.lng && o.lng <= i.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(t) {
          t = j(t);
          var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), s = o.lat >= e.lat && n.lat <= i.lat, h = o.lng >= e.lng && n.lng <= i.lng;
          return s && h;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(t) {
          t = j(t);
          var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), s = o.lat > e.lat && n.lat < i.lat, h = o.lng > e.lng && n.lng < i.lng;
          return s && h;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(t, e) {
          return t ? (t = j(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function j(t, e) {
        return t instanceof st ? t : new st(t, e);
      }
      function H(t, e, i) {
        if (isNaN(t) || isNaN(e))
          throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, i !== void 0 && (this.alt = +i);
      }
      H.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(t, e) {
          if (!t)
            return !1;
          t = B(t);
          var i = Math.max(
            Math.abs(this.lat - t.lat),
            Math.abs(this.lng - t.lng)
          );
          return i <= (e === void 0 ? 1e-9 : e);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(t) {
          return "LatLng(" + g(this.lat, t) + ", " + g(this.lng, t) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(t) {
          return Ct.distance(this, B(t));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return Ct.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(t) {
          var e = 180 * t / 40075017, i = e / Math.cos(Math.PI / 180 * this.lat);
          return j(
            [this.lat - e, this.lng - i],
            [this.lat + e, this.lng + i]
          );
        },
        clone: function() {
          return new H(this.lat, this.lng, this.alt);
        }
      };
      function B(t, e, i) {
        return t instanceof H ? t : U(t) && typeof t[0] != "object" ? t.length === 3 ? new H(t[0], t[1], t[2]) : t.length === 2 ? new H(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new H(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new H(t, e, i);
      }
      var Lt = {
        // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
        // Projects geographical coordinates into pixel coordinates for a given zoom.
        latLngToPoint: function(t, e) {
          var i = this.projection.project(t), n = this.scale(e);
          return this.transformation._transform(i, n);
        },
        // @method pointToLatLng(point: Point, zoom: Number): LatLng
        // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
        // zoom into geographical coordinates.
        pointToLatLng: function(t, e) {
          var i = this.scale(e), n = this.transformation.untransform(t, i);
          return this.projection.unproject(n);
        },
        // @method project(latlng: LatLng): Point
        // Projects geographical coordinates into coordinates in units accepted for
        // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
        project: function(t) {
          return this.projection.project(t);
        },
        // @method unproject(point: Point): LatLng
        // Given a projected coordinate returns the corresponding LatLng.
        // The inverse of `project`.
        unproject: function(t) {
          return this.projection.unproject(t);
        },
        // @method scale(zoom: Number): Number
        // Returns the scale used when transforming projected coordinates into
        // pixel coordinates for a particular zoom. For example, it returns
        // `256 * 2^zoom` for Mercator-based CRS.
        scale: function(t) {
          return 256 * Math.pow(2, t);
        },
        // @method zoom(scale: Number): Number
        // Inverse of `scale()`, returns the zoom level corresponding to a scale
        // factor of `scale`.
        zoom: function(t) {
          return Math.log(t / 256) / Math.LN2;
        },
        // @method getProjectedBounds(zoom: Number): Bounds
        // Returns the projection's bounds scaled and transformed for the provided `zoom`.
        getProjectedBounds: function(t) {
          if (this.infinite)
            return null;
          var e = this.projection.bounds, i = this.scale(t), n = this.transformation.transform(e.min, i), o = this.transformation.transform(e.max, i);
          return new G(n, o);
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates.
        // @property code: String
        // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
        //
        // @property wrapLng: Number[]
        // An array of two numbers defining whether the longitude (horizontal) coordinate
        // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
        // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
        //
        // @property wrapLat: Number[]
        // Like `wrapLng`, but for the latitude (vertical) axis.
        // wrapLng: [min, max],
        // wrapLat: [min, max],
        // @property infinite: Boolean
        // If true, the coordinate space will be unbounded (infinite in both axes)
        infinite: !1,
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where lat and lng has been wrapped according to the
        // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
        wrapLatLng: function(t) {
          var e = this.wrapLng ? m(t.lng, this.wrapLng, !0) : t.lng, i = this.wrapLat ? m(t.lat, this.wrapLat, !0) : t.lat, n = t.alt;
          return new H(i, e, n);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(t) {
          var e = t.getCenter(), i = this.wrapLatLng(e), n = e.lat - i.lat, o = e.lng - i.lng;
          if (n === 0 && o === 0)
            return t;
          var s = t.getSouthWest(), h = t.getNorthEast(), f = new H(s.lat - n, s.lng - o), p = new H(h.lat - n, h.lng - o);
          return new st(f, p);
        }
      }, Ct = k({}, Lt, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(t, e) {
          var i = Math.PI / 180, n = t.lat * i, o = e.lat * i, s = Math.sin((e.lat - t.lat) * i / 2), h = Math.sin((e.lng - t.lng) * i / 2), f = s * s + Math.cos(n) * Math.cos(o) * h * h, p = 2 * Math.atan2(Math.sqrt(f), Math.sqrt(1 - f));
          return this.R * p;
        }
      }), pi = 6378137, ke = {
        R: pi,
        MAX_LATITUDE: 85.0511287798,
        project: function(t) {
          var e = Math.PI / 180, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), o = Math.sin(n * e);
          return new E(
            this.R * t.lng * e,
            this.R * Math.log((1 + o) / (1 - o)) / 2
          );
        },
        unproject: function(t) {
          var e = 180 / Math.PI;
          return new H(
            (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
            t.x * e / this.R
          );
        },
        bounds: function() {
          var t = pi * Math.PI;
          return new G([-t, -t], [t, t]);
        }()
      };
      function Me(t, e, i, n) {
        if (U(t)) {
          this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
          return;
        }
        this._a = t, this._b = e, this._c = i, this._d = n;
      }
      Me.prototype = {
        // @method transform(point: Point, scale?: Number): Point
        // Returns a transformed point, optionally multiplied by the given scale.
        // Only accepts actual `L.Point` instances, not arrays.
        transform: function(t, e) {
          return this._transform(t.clone(), e);
        },
        // destructive transform (faster)
        _transform: function(t, e) {
          return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t;
        },
        // @method untransform(point: Point, scale?: Number): Point
        // Returns the reverse transformation of the given point, optionally divided
        // by the given scale. Only accepts actual `L.Point` instances, not arrays.
        untransform: function(t, e) {
          return e = e || 1, new E(
            (t.x / e - this._b) / this._a,
            (t.y / e - this._d) / this._c
          );
        }
      };
      function Gt(t, e, i, n) {
        return new Me(t, e, i, n);
      }
      var Te = k({}, Ct, {
        code: "EPSG:3857",
        projection: ke,
        transformation: function() {
          var t = 0.5 / (Math.PI * ke.R);
          return Gt(t, 0.5, -t, 0.5);
        }()
      }), En = k({}, Te, {
        code: "EPSG:900913"
      });
      function mi(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      }
      function gi(t, e) {
        var i = "", n, o, s, h, f, p;
        for (n = 0, s = t.length; n < s; n++) {
          for (f = t[n], o = 0, h = f.length; o < h; o++)
            p = f[o], i += (o ? "L" : "M") + p.x + " " + p.y;
          i += e ? M.svg ? "z" : "x" : "";
        }
        return i || "M0 0";
      }
      var Se = document.documentElement.style, se = "ActiveXObject" in window, On = se && !document.addEventListener, vi = "msLaunchUri" in navigator && !("documentMode" in document), Ae = pt("webkit"), yi = pt("android"), Li = pt("android 2") || pt("android 3"), In = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Zn = yi && pt("Google") && In < 537 && !("AudioNode" in window), ze = !!window.opera, xi = !vi && pt("chrome"), wi = pt("gecko") && !Ae && !ze && !se, Bn = !xi && pt("safari"), bi = pt("phantom"), Pi = "OTransition" in Se, Rn = navigator.platform.indexOf("Win") === 0, Ci = se && "transition" in Se, Ee = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !Li, ki = "MozPerspective" in Se, Nn = !window.L_DISABLE_3D && (Ci || Ee || ki) && !Pi && !bi, qt = typeof orientation < "u" || pt("mobile"), Dn = qt && Ae, Fn = qt && Ee, Mi = !window.PointerEvent && window.MSPointerEvent, Ti = !!(window.PointerEvent || Mi), Si = "ontouchstart" in window || !!window.TouchEvent, Hn = !window.L_NO_TOUCH && (Si || Ti), Un = qt && ze, Wn = qt && wi, Gn = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, qn = function() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function() {
              t = !0;
            }
          });
          window.addEventListener("testPassiveEventSupport", c, e), window.removeEventListener("testPassiveEventSupport", c, e);
        } catch {
        }
        return t;
      }(), Vn = function() {
        return !!document.createElement("canvas").getContext;
      }(), Oe = !!(document.createElementNS && mi("svg").createSVGRect), jn = !!Oe && function() {
        var t = document.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      }(), Kn = !Oe && function() {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var e = t.firstChild;
          return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
        } catch {
          return !1;
        }
      }(), Yn = navigator.platform.indexOf("Mac") === 0, Qn = navigator.platform.indexOf("Linux") === 0;
      function pt(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
      }
      var M = {
        ie: se,
        ielt9: On,
        edge: vi,
        webkit: Ae,
        android: yi,
        android23: Li,
        androidStock: Zn,
        opera: ze,
        chrome: xi,
        gecko: wi,
        safari: Bn,
        phantom: bi,
        opera12: Pi,
        win: Rn,
        ie3d: Ci,
        webkit3d: Ee,
        gecko3d: ki,
        any3d: Nn,
        mobile: qt,
        mobileWebkit: Dn,
        mobileWebkit3d: Fn,
        msPointer: Mi,
        pointer: Ti,
        touch: Hn,
        touchNative: Si,
        mobileOpera: Un,
        mobileGecko: Wn,
        retina: Gn,
        passiveEvents: qn,
        canvas: Vn,
        svg: Oe,
        vml: Kn,
        inlineSvg: jn,
        mac: Yn,
        linux: Qn
      }, Ai = M.msPointer ? "MSPointerDown" : "pointerdown", zi = M.msPointer ? "MSPointerMove" : "pointermove", Ei = M.msPointer ? "MSPointerUp" : "pointerup", Oi = M.msPointer ? "MSPointerCancel" : "pointercancel", Ie = {
        touchstart: Ai,
        touchmove: zi,
        touchend: Ei,
        touchcancel: Oi
      }, Ii = {
        touchstart: io,
        touchmove: ae,
        touchend: ae,
        touchcancel: ae
      }, It = {}, Zi = !1;
      function Jn(t, e, i) {
        return e === "touchstart" && eo(), Ii[e] ? (i = Ii[e].bind(this, i), t.addEventListener(Ie[e], i, !1), i) : (console.warn("wrong event specified:", e), c);
      }
      function Xn(t, e, i) {
        if (!Ie[e]) {
          console.warn("wrong event specified:", e);
          return;
        }
        t.removeEventListener(Ie[e], i, !1);
      }
      function $n(t) {
        It[t.pointerId] = t;
      }
      function to(t) {
        It[t.pointerId] && (It[t.pointerId] = t);
      }
      function Bi(t) {
        delete It[t.pointerId];
      }
      function eo() {
        Zi || (document.addEventListener(Ai, $n, !0), document.addEventListener(zi, to, !0), document.addEventListener(Ei, Bi, !0), document.addEventListener(Oi, Bi, !0), Zi = !0);
      }
      function ae(t, e) {
        if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
          e.touches = [];
          for (var i in It)
            e.touches.push(It[i]);
          e.changedTouches = [e], t(e);
        }
      }
      function io(t, e) {
        e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && J(e), ae(t, e);
      }
      function no(t) {
        var e = {}, i, n;
        for (n in t)
          i = t[n], e[n] = i && i.bind ? i.bind(t) : i;
        return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
      }
      var oo = 200;
      function ro(t, e) {
        t.addEventListener("dblclick", e);
        var i = 0, n;
        function o(s) {
          if (s.detail !== 1) {
            n = s.detail;
            return;
          }
          if (!(s.pointerType === "mouse" || s.sourceCapabilities && !s.sourceCapabilities.firesTouchEvents)) {
            var h = Hi(s);
            if (!(h.some(function(p) {
              return p instanceof HTMLLabelElement && p.attributes.for;
            }) && !h.some(function(p) {
              return p instanceof HTMLInputElement || p instanceof HTMLSelectElement;
            }))) {
              var f = Date.now();
              f - i <= oo ? (n++, n === 2 && e(no(s))) : n = 1, i = f;
            }
          }
        }
        return t.addEventListener("click", o), {
          dblclick: e,
          simDblclick: o
        };
      }
      function so(t, e) {
        t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
      }
      var Ze = ue(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), Vt = ue(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), Ri = Vt === "webkitTransition" || Vt === "OTransition" ? Vt + "End" : "transitionend";
      function Ni(t) {
        return typeof t == "string" ? document.getElementById(t) : t;
      }
      function jt(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        if ((!i || i === "auto") && document.defaultView) {
          var n = document.defaultView.getComputedStyle(t, null);
          i = n ? n[e] : null;
        }
        return i === "auto" ? null : i;
      }
      function N(t, e, i) {
        var n = document.createElement(t);
        return n.className = e || "", i && i.appendChild(n), n;
      }
      function q(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function le(t) {
        for (; t.firstChild; )
          t.removeChild(t.firstChild);
      }
      function Zt(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t);
      }
      function Bt(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
      }
      function Be(t, e) {
        if (t.classList !== void 0)
          return t.classList.contains(e);
        var i = he(t);
        return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
      }
      function I(t, e) {
        if (t.classList !== void 0)
          for (var i = P(e), n = 0, o = i.length; n < o; n++)
            t.classList.add(i[n]);
        else if (!Be(t, e)) {
          var s = he(t);
          Re(t, (s ? s + " " : "") + e);
        }
      }
      function V(t, e) {
        t.classList !== void 0 ? t.classList.remove(e) : Re(t, v((" " + he(t) + " ").replace(" " + e + " ", " ")));
      }
      function Re(t, e) {
        t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
      }
      function he(t) {
        return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
      }
      function ut(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && ao(t, e);
      }
      function ao(t, e) {
        var i = !1, n = "DXImageTransform.Microsoft.Alpha";
        try {
          i = t.filters.item(n);
        } catch {
          if (e === 1)
            return;
        }
        e = Math.round(e * 100), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
      }
      function ue(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
          if (t[i] in e)
            return t[i];
        return !1;
      }
      function St(t, e, i) {
        var n = e || new E(0, 0);
        t.style[Ze] = (M.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
      }
      function K(t, e) {
        t._leaflet_pos = e, M.any3d ? St(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
      }
      function At(t) {
        return t._leaflet_pos || new E(0, 0);
      }
      var Kt, Yt, Ne;
      if ("onselectstart" in document)
        Kt = function() {
          O(window, "selectstart", J);
        }, Yt = function() {
          W(window, "selectstart", J);
        };
      else {
        var Qt = ue(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        Kt = function() {
          if (Qt) {
            var t = document.documentElement.style;
            Ne = t[Qt], t[Qt] = "none";
          }
        }, Yt = function() {
          Qt && (document.documentElement.style[Qt] = Ne, Ne = void 0);
        };
      }
      function De() {
        O(window, "dragstart", J);
      }
      function Fe() {
        W(window, "dragstart", J);
      }
      var ce, He;
      function Ue(t) {
        for (; t.tabIndex === -1; )
          t = t.parentNode;
        t.style && (fe(), ce = t, He = t.style.outlineStyle, t.style.outlineStyle = "none", O(window, "keydown", fe));
      }
      function fe() {
        ce && (ce.style.outlineStyle = He, ce = void 0, He = void 0, W(window, "keydown", fe));
      }
      function Di(t) {
        do
          t = t.parentNode;
        while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
        return t;
      }
      function We(t) {
        var e = t.getBoundingClientRect();
        return {
          x: e.width / t.offsetWidth || 1,
          y: e.height / t.offsetHeight || 1,
          boundingClientRect: e
        };
      }
      var lo = {
        __proto__: null,
        TRANSFORM: Ze,
        TRANSITION: Vt,
        TRANSITION_END: Ri,
        get: Ni,
        getStyle: jt,
        create: N,
        remove: q,
        empty: le,
        toFront: Zt,
        toBack: Bt,
        hasClass: Be,
        addClass: I,
        removeClass: V,
        setClass: Re,
        getClass: he,
        setOpacity: ut,
        testProp: ue,
        setTransform: St,
        setPosition: K,
        getPosition: At,
        get disableTextSelection() {
          return Kt;
        },
        get enableTextSelection() {
          return Yt;
        },
        disableImageDrag: De,
        enableImageDrag: Fe,
        preventOutline: Ue,
        restoreOutline: fe,
        getSizedParentNode: Di,
        getScale: We
      };
      function O(t, e, i, n) {
        if (e && typeof e == "object")
          for (var o in e)
            qe(t, o, e[o], i);
        else {
          e = P(e);
          for (var s = 0, h = e.length; s < h; s++)
            qe(t, e[s], i, n);
        }
        return this;
      }
      var mt = "_leaflet_events";
      function W(t, e, i, n) {
        if (arguments.length === 1)
          Fi(t), delete t[mt];
        else if (e && typeof e == "object")
          for (var o in e)
            Ve(t, o, e[o], i);
        else if (e = P(e), arguments.length === 2)
          Fi(t, function(f) {
            return nt(e, f) !== -1;
          });
        else
          for (var s = 0, h = e.length; s < h; s++)
            Ve(t, e[s], i, n);
        return this;
      }
      function Fi(t, e) {
        for (var i in t[mt]) {
          var n = i.split(/\d/)[0];
          (!e || e(n)) && Ve(t, n, null, null, i);
        }
      }
      var Ge = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function qe(t, e, i, n) {
        var o = e + u(i) + (n ? "_" + u(n) : "");
        if (t[mt] && t[mt][o])
          return this;
        var s = function(f) {
          return i.call(n || t, f || window.event);
        }, h = s;
        !M.touchNative && M.pointer && e.indexOf("touch") === 0 ? s = Jn(t, e, s) : M.touch && e === "dblclick" ? s = ro(t, s) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(Ge[e] || e, s, M.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (s = function(f) {
          f = f || window.event, Ke(t, f) && h(f);
        }, t.addEventListener(Ge[e], s, !1)) : t.addEventListener(e, h, !1) : t.attachEvent("on" + e, s), t[mt] = t[mt] || {}, t[mt][o] = s;
      }
      function Ve(t, e, i, n, o) {
        o = o || e + u(i) + (n ? "_" + u(n) : "");
        var s = t[mt] && t[mt][o];
        if (!s)
          return this;
        !M.touchNative && M.pointer && e.indexOf("touch") === 0 ? Xn(t, e, s) : M.touch && e === "dblclick" ? so(t, s) : "removeEventListener" in t ? t.removeEventListener(Ge[e] || e, s, !1) : t.detachEvent("on" + e, s), t[mt][o] = null;
      }
      function zt(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
      }
      function je(t) {
        return qe(t, "wheel", zt), this;
      }
      function Jt(t) {
        return O(t, "mousedown touchstart dblclick contextmenu", zt), t._leaflet_disable_click = !0, this;
      }
      function J(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
      }
      function Et(t) {
        return J(t), zt(t), this;
      }
      function Hi(t) {
        if (t.composedPath)
          return t.composedPath();
        for (var e = [], i = t.target; i; )
          e.push(i), i = i.parentNode;
        return e;
      }
      function Ui(t, e) {
        if (!e)
          return new E(t.clientX, t.clientY);
        var i = We(e), n = i.boundingClientRect;
        return new E(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (t.clientX - n.left) / i.x - e.clientLeft,
          (t.clientY - n.top) / i.y - e.clientTop
        );
      }
      var ho = M.linux && M.chrome ? window.devicePixelRatio : M.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Wi(t) {
        return M.edge ? t.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          t.deltaY && t.deltaMode === 0 ? -t.deltaY / ho : (
            // Pixels
            t.deltaY && t.deltaMode === 1 ? -t.deltaY * 20 : (
              // Lines
              t.deltaY && t.deltaMode === 2 ? -t.deltaY * 60 : (
                // Pages
                t.deltaX || t.deltaZ ? 0 : (
                  // Skip horizontal/depth wheel events
                  t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : (
                    // Legacy IE pixels
                    t.detail && Math.abs(t.detail) < 32765 ? -t.detail * 20 : (
                      // Legacy Moz lines
                      t.detail ? t.detail / -32765 * 60 : (
                        // Legacy Moz pages
                        0
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      function Ke(t, e) {
        var i = e.relatedTarget;
        if (!i)
          return !0;
        try {
          for (; i && i !== t; )
            i = i.parentNode;
        } catch {
          return !1;
        }
        return i !== t;
      }
      var uo = {
        __proto__: null,
        on: O,
        off: W,
        stopPropagation: zt,
        disableScrollPropagation: je,
        disableClickPropagation: Jt,
        preventDefault: J,
        stop: Et,
        getPropagationPath: Hi,
        getMousePosition: Ui,
        getWheelDelta: Wi,
        isExternalTarget: Ke,
        addListener: O,
        removeListener: W
      }, Gi = Wt.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(t, e, i, n) {
          this.stop(), this._el = t, this._inProgress = !0, this._duration = i || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = At(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = ot(this._animate, this), this._step();
        },
        _step: function(t) {
          var e = +/* @__PURE__ */ new Date() - this._startTime, i = this._duration * 1e3;
          e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(t, e) {
          var i = this._startPos.add(this._offset.multiplyBy(t));
          e && i._round(), K(this._el, i), this.fire("step");
        },
        _complete: function() {
          ht(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(t) {
          return 1 - Math.pow(1 - t, this._easeOutPower);
        }
      }), R = Wt.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: Te,
          // @option center: LatLng = undefined
          // Initial geographic center of the map
          center: void 0,
          // @option zoom: Number = undefined
          // Initial map zoom level
          zoom: void 0,
          // @option minZoom: Number = *
          // Minimum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the lowest of their `minZoom` options will be used instead.
          minZoom: void 0,
          // @option maxZoom: Number = *
          // Maximum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the highest of their `maxZoom` options will be used instead.
          maxZoom: void 0,
          // @option layers: Layer[] = []
          // Array of layers that will be added to the map initially
          layers: [],
          // @option maxBounds: LatLngBounds = null
          // When this option is set, the map restricts the view to the given
          // geographical bounds, bouncing the user back if the user tries to pan
          // outside the view. To set the restriction dynamically, use
          // [`setMaxBounds`](#map-setmaxbounds) method.
          maxBounds: void 0,
          // @option renderer: Renderer = *
          // The default method for drawing vector layers on the map. `L.SVG`
          // or `L.Canvas` by default depending on browser support.
          renderer: void 0,
          // @section Animation Options
          // @option zoomAnimation: Boolean = true
          // Whether the map zoom animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          zoomAnimation: !0,
          // @option zoomAnimationThreshold: Number = 4
          // Won't animate zoom if the zoom difference exceeds this value.
          zoomAnimationThreshold: 4,
          // @option fadeAnimation: Boolean = true
          // Whether the tile fade animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          fadeAnimation: !0,
          // @option markerZoomAnimation: Boolean = true
          // Whether markers animate their zoom with the zoom animation, if disabled
          // they will disappear for the length of the animation. By default it's
          // enabled in all browsers that support CSS3 Transitions except Android.
          markerZoomAnimation: !0,
          // @option transform3DLimit: Number = 2^23
          // Defines the maximum size of a CSS translation transform. The default
          // value should not be changed unless a web browser positions layers in
          // the wrong place after doing a large `panBy`.
          transform3DLimit: 8388608,
          // Precision limit of a 32-bit float
          // @section Interaction Options
          // @option zoomSnap: Number = 1
          // Forces the map's zoom level to always be a multiple of this, particularly
          // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
          // By default, the zoom level snaps to the nearest integer; lower values
          // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
          // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
          zoomSnap: 1,
          // @option zoomDelta: Number = 1
          // Controls how much the map's zoom level will change after a
          // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
          // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
          // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
          zoomDelta: 1,
          // @option trackResize: Boolean = true
          // Whether the map automatically handles browser window resize to update itself.
          trackResize: !0
        },
        initialize: function(t, e) {
          e = w(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = a(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(B(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Vt && M.any3d && !M.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), O(this._proxy, Ri, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(t, e, i) {
          if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(B(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== !0) {
            i.animate !== void 0 && (i.zoom = k({ animate: i.animate }, i.zoom), i.pan = k({ animate: i.animate, duration: i.duration }, i.pan));
            var n = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan);
            if (n)
              return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(t, e, i.pan && i.pan.noMoveStart), this;
        },
        // @method setZoom(zoom: Number, options?: Zoom/pan options): this
        // Sets the zoom of the map.
        setZoom: function(t, e) {
          return this._loaded ? this.setView(this.getCenter(), t, { zoom: e }) : (this._zoom = t, this);
        },
        // @method zoomIn(delta?: Number, options?: Zoom options): this
        // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomIn: function(t, e) {
          return t = t || (M.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(t, e) {
          return t = t || (M.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(t, e, i) {
          var n = this.getZoomScale(e), o = this.getSize().divideBy(2), s = t instanceof E ? t : this.latLngToContainerPoint(t), h = s.subtract(o).multiplyBy(1 - 1 / n), f = this.containerPointToLatLng(o.add(h));
          return this.setView(f, e, { zoom: i });
        },
        _getBoundsCenterZoom: function(t, e) {
          e = e || {}, t = t.getBounds ? t.getBounds() : j(t);
          var i = z(e.paddingTopLeft || e.padding || [0, 0]), n = z(e.paddingBottomRight || e.padding || [0, 0]), o = this.getBoundsZoom(t, !1, i.add(n));
          if (o = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, o) : o, o === 1 / 0)
            return {
              center: t.getCenter(),
              zoom: o
            };
          var s = n.subtract(i).divideBy(2), h = this.project(t.getSouthWest(), o), f = this.project(t.getNorthEast(), o), p = this.unproject(h.add(f).divideBy(2).add(s), o);
          return {
            center: p,
            zoom: o
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(t, e) {
          if (t = j(t), !t.isValid())
            throw new Error("Bounds are not valid.");
          var i = this._getBoundsCenterZoom(t, e);
          return this.setView(i.center, i.zoom, e);
        },
        // @method fitWorld(options?: fitBounds options): this
        // Sets a map view that mostly contains the whole world with the maximum
        // zoom level possible.
        fitWorld: function(t) {
          return this.fitBounds([[-90, -180], [90, 180]], t);
        },
        // @method panTo(latlng: LatLng, options?: Pan options): this
        // Pans the map to a given center.
        panTo: function(t, e) {
          return this.setView(t, this._zoom, { pan: e });
        },
        // @method panBy(offset: Point, options?: Pan options): this
        // Pans the map by a given number of pixels (animated).
        panBy: function(t, e) {
          if (t = z(t).round(), e = e || {}, !t.x && !t.y)
            return this.fire("moveend");
          if (e.animate !== !0 && !this.getSize().contains(t))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new Gi(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
            I(this._mapPane, "leaflet-pan-anim");
            var i = this._getMapPanePos().subtract(t).round();
            this._panAnim.run(this._mapPane, i, e.duration || 0.25, e.easeLinearity);
          } else
            this._rawPanBy(t), this.fire("move").fire("moveend");
          return this;
        },
        // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) performing a smooth
        // pan-zoom animation.
        flyTo: function(t, e, i) {
          if (i = i || {}, i.animate === !1 || !M.any3d)
            return this.setView(t, e, i);
          this._stop();
          var n = this.project(this.getCenter()), o = this.project(t), s = this.getSize(), h = this._zoom;
          t = B(t), e = e === void 0 ? h : e;
          var f = Math.max(s.x, s.y), p = f * this.getZoomScale(h, e), y = o.distanceTo(n) || 1, C = 1.42, A = C * C;
          function Z(Y) {
            var Pe = Y ? -1 : 1, $o = Y ? p : f, tr = p * p - f * f + Pe * A * A * y * y, er = 2 * $o * A * y, ri = tr / er, Cn = Math.sqrt(ri * ri + 1) - ri, ir = Cn < 1e-9 ? -18 : Math.log(Cn);
            return ir;
          }
          function et(Y) {
            return (Math.exp(Y) - Math.exp(-Y)) / 2;
          }
          function Q(Y) {
            return (Math.exp(Y) + Math.exp(-Y)) / 2;
          }
          function ft(Y) {
            return et(Y) / Q(Y);
          }
          var at = Z(0);
          function Ut(Y) {
            return f * (Q(at) / Q(at + C * Y));
          }
          function Yo(Y) {
            return f * (Q(at) * ft(at + C * Y) - et(at)) / A;
          }
          function Qo(Y) {
            return 1 - Math.pow(1 - Y, 1.5);
          }
          var Jo = Date.now(), bn = (Z(1) - at) / C, Xo = i.duration ? 1e3 * i.duration : 1e3 * bn * 0.8;
          function Pn() {
            var Y = (Date.now() - Jo) / Xo, Pe = Qo(Y) * bn;
            Y <= 1 ? (this._flyToFrame = ot(Pn, this), this._move(
              this.unproject(n.add(o.subtract(n).multiplyBy(Yo(Pe) / y)), h),
              this.getScaleZoom(f / Ut(Pe), h),
              { flyTo: !0 }
            )) : this._move(t, e)._moveEnd(!0);
          }
          return this._moveStart(!0, i.noMoveStart), Pn.call(this), this;
        },
        // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
        // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
        flyToBounds: function(t, e) {
          var i = this._getBoundsCenterZoom(t, e);
          return this.flyTo(i.center, i.zoom, e);
        },
        // @method setMaxBounds(bounds: LatLngBounds): this
        // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
        setMaxBounds: function(t) {
          return t = j(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
        },
        // @method setMinZoom(zoom: Number): this
        // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
        setMinZoom: function(t) {
          var e = this.options.minZoom;
          return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this;
        },
        // @method setMaxZoom(zoom: Number): this
        // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
        setMaxZoom: function(t) {
          var e = this.options.maxZoom;
          return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this;
        },
        // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
        // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
        panInsideBounds: function(t, e) {
          this._enforcingBounds = !0;
          var i = this.getCenter(), n = this._limitCenter(i, this._zoom, j(t));
          return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(t, e) {
          e = e || {};
          var i = z(e.paddingTopLeft || e.padding || [0, 0]), n = z(e.paddingBottomRight || e.padding || [0, 0]), o = this.project(this.getCenter()), s = this.project(t), h = this.getPixelBounds(), f = rt([h.min.add(i), h.max.subtract(n)]), p = f.getSize();
          if (!f.contains(s)) {
            this._enforcingBounds = !0;
            var y = s.subtract(f.getCenter()), C = f.extend(s).getSize().subtract(p);
            o.x += y.x < 0 ? -C.x : C.x, o.y += y.y < 0 ? -C.y : C.y, this.panTo(this.unproject(o), e), this._enforcingBounds = !1;
          }
          return this;
        },
        // @method invalidateSize(options: Zoom/pan options): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default. If `options.pan` is `false`, panning will not occur.
        // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
        // that it doesn't happen often even if the method is called many
        // times in a row.
        // @alternative
        // @method invalidateSize(animate: Boolean): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default.
        invalidateSize: function(t) {
          if (!this._loaded)
            return this;
          t = k({
            animate: !1,
            pan: !0
          }, t === !0 ? { animate: !0 } : t);
          var e = this.getSize();
          this._sizeChanged = !0, this._lastCenter = null;
          var i = this.getSize(), n = e.divideBy(2).round(), o = i.divideBy(2).round(), s = n.subtract(o);
          return !s.x && !s.y ? this : (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(a(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
            oldSize: e,
            newSize: i
          }));
        },
        // @section Methods for modifying map state
        // @method stop(): this
        // Stops the currently running `panTo` or `flyTo` animation, if any.
        stop: function() {
          return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
        },
        // @section Geolocation methods
        // @method locate(options?: Locate options): this
        // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
        // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
        // and optionally sets the map view to the user's location with respect to
        // detection accuracy (or to the world view if geolocation failed).
        // Note that, if your page doesn't use HTTPS, this method will fail in
        // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
        // See `Locate options` for more details.
        locate: function(t) {
          if (t = this._locateOptions = k({
            timeout: 1e4,
            watch: !1
            // setView: false
            // maxZoom: <Number>
            // maximumAge: 0
            // enableHighAccuracy: false
          }, t), !("geolocation" in navigator))
            return this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported."
            }), this;
          var e = a(this._handleGeolocationResponse, this), i = a(this._handleGeolocationError, this);
          return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this;
        },
        // @method stopLocate(): this
        // Stops watching location previously initiated by `map.locate({watch: true})`
        // and aborts resetting the map view if map.locate was called with
        // `{setView: true}`.
        stopLocate: function() {
          return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
        },
        _handleGeolocationError: function(t) {
          if (this._container._leaflet_id) {
            var e = t.code, i = t.message || (e === 1 ? "permission denied" : e === 2 ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
              code: e,
              message: "Geolocation error: " + i + "."
            });
          }
        },
        _handleGeolocationResponse: function(t) {
          if (this._container._leaflet_id) {
            var e = t.coords.latitude, i = t.coords.longitude, n = new H(e, i), o = n.toBounds(t.coords.accuracy * 2), s = this._locateOptions;
            if (s.setView) {
              var h = this.getBoundsZoom(o);
              this.setView(n, s.maxZoom ? Math.min(h, s.maxZoom) : h);
            }
            var f = {
              latlng: n,
              bounds: o,
              timestamp: t.timestamp
            };
            for (var p in t.coords)
              typeof t.coords[p] == "number" && (f[p] = t.coords[p]);
            this.fire("locationfound", f);
          }
        },
        // TODO Appropriate docs section?
        // @section Other Methods
        // @method addHandler(name: String, HandlerClass: Function): this
        // Adds a new `Handler` to the map, given its name and constructor function.
        addHandler: function(t, e) {
          if (!e)
            return this;
          var i = this[t] = new e(this);
          return this._handlers.push(i), this.options[t] && i.enable(), this;
        },
        // @method remove(): this
        // Destroys the map and clears all related event listeners.
        remove: function() {
          if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
            throw new Error("Map container is being reused by another instance");
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            this._container._leaflet_id = void 0, this._containerId = void 0;
          }
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), q(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (ht(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var t;
          for (t in this._layers)
            this._layers[t].remove();
          for (t in this._panes)
            q(this._panes[t]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(t, e) {
          var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), n = N("div", i, e || this._mapPane);
          return t && (this._panes[t] = n), n;
        },
        // @section Methods for Getting Map State
        // @method getCenter(): LatLng
        // Returns the geographical center of the map view
        getCenter: function() {
          return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        // @method getZoom(): Number
        // Returns the current zoom level of the map view
        getZoom: function() {
          return this._zoom;
        },
        // @method getBounds(): LatLngBounds
        // Returns the geographical bounds visible in the current map view
        getBounds: function() {
          var t = this.getPixelBounds(), e = this.unproject(t.getBottomLeft()), i = this.unproject(t.getTopRight());
          return new st(e, i);
        },
        // @method getMinZoom(): Number
        // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
        getMinZoom: function() {
          return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        // @method getMaxZoom(): Number
        // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
        getMaxZoom: function() {
          return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        },
        // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
        // Returns the maximum zoom level on which the given bounds fit to the map
        // view in its entirety. If `inside` (optional) is set to `true`, the method
        // instead returns the minimum zoom level on which the map view fits into
        // the given bounds in its entirety.
        getBoundsZoom: function(t, e, i) {
          t = j(t), i = z(i || [0, 0]);
          var n = this.getZoom() || 0, o = this.getMinZoom(), s = this.getMaxZoom(), h = t.getNorthWest(), f = t.getSouthEast(), p = this.getSize().subtract(i), y = rt(this.project(f, n), this.project(h, n)).getSize(), C = M.any3d ? this.options.zoomSnap : 1, A = p.x / y.x, Z = p.y / y.y, et = e ? Math.max(A, Z) : Math.min(A, Z);
          return n = this.getScaleZoom(et, n), C && (n = Math.round(n / (C / 100)) * (C / 100), n = e ? Math.ceil(n / C) * C : Math.floor(n / C) * C), Math.max(o, Math.min(s, n));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new E(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(t, e) {
          var i = this._getTopLeftPoint(t, e);
          return new G(i, i.add(this.getSize()));
        },
        // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
        // the map pane? "left point of the map layer" can be confusing, specially
        // since there can be negative offsets.
        // @method getPixelOrigin(): Point
        // Returns the projected pixel coordinates of the top left point of
        // the map layer (useful in custom layer and overlay implementations).
        getPixelOrigin: function() {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        // @method getPixelWorldBounds(zoom?: Number): Bounds
        // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
        // If `zoom` is omitted, the map's current zoom level is used.
        getPixelWorldBounds: function(t) {
          return this.options.crs.getProjectedBounds(t === void 0 ? this.getZoom() : t);
        },
        // @section Other Methods
        // @method getPane(pane: String|HTMLElement): HTMLElement
        // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
        getPane: function(t) {
          return typeof t == "string" ? this._panes[t] : t;
        },
        // @method getPanes(): Object
        // Returns a plain object containing the names of all [panes](#map-pane) as keys and
        // the panes as values.
        getPanes: function() {
          return this._panes;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the map.
        getContainer: function() {
          return this._container;
        },
        // @section Conversion Methods
        // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
        // Returns the scale factor to be applied to a map transition from zoom level
        // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
        getZoomScale: function(t, e) {
          var i = this.options.crs;
          return e = e === void 0 ? this._zoom : e, i.scale(t) / i.scale(e);
        },
        // @method getScaleZoom(scale: Number, fromZoom: Number): Number
        // Returns the zoom level that the map would end up at, if it is at `fromZoom`
        // level and everything is scaled by a factor of `scale`. Inverse of
        // [`getZoomScale`](#map-getZoomScale).
        getScaleZoom: function(t, e) {
          var i = this.options.crs;
          e = e === void 0 ? this._zoom : e;
          var n = i.zoom(t * i.scale(e));
          return isNaN(n) ? 1 / 0 : n;
        },
        // @method project(latlng: LatLng, zoom: Number): Point
        // Projects a geographical coordinate `LatLng` according to the projection
        // of the map's CRS, then scales it according to `zoom` and the CRS's
        // `Transformation`. The result is pixel coordinate relative to
        // the CRS origin.
        project: function(t, e) {
          return e = e === void 0 ? this._zoom : e, this.options.crs.latLngToPoint(B(t), e);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(t, e) {
          return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(z(t), e);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(t) {
          var e = z(t).add(this.getPixelOrigin());
          return this.unproject(e);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(t) {
          var e = this.project(B(t))._round();
          return e._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(t) {
          return this.options.crs.wrapLatLng(B(t));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(t) {
          return this.options.crs.wrapLatLngBounds(j(t));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(t, e) {
          return this.options.crs.distance(B(t), B(e));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(t) {
          return z(t).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(t) {
          return z(t).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(t) {
          var e = this.containerPointToLayerPoint(z(t));
          return this.layerPointToLatLng(e);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(t) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(B(t)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(t) {
          return Ui(t, this._container);
        },
        // @method mouseEventToLayerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to
        // the [origin pixel](#map-getpixelorigin) where the event took place.
        mouseEventToLayerPoint: function(t) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t));
        },
        // @method mouseEventToLatLng(ev: MouseEvent): LatLng
        // Given a MouseEvent object, returns geographical coordinate where the
        // event took place.
        mouseEventToLatLng: function(t) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
        },
        // map initialization methods
        _initContainer: function(t) {
          var e = this._container = Ni(t);
          if (e) {
            if (e._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          O(e, "scroll", this._onScroll, this), this._containerId = u(e);
        },
        _initLayout: function() {
          var t = this._container;
          this._fadeAnimated = this.options.fadeAnimation && M.any3d, I(t, "leaflet-container" + (M.touch ? " leaflet-touch" : "") + (M.retina ? " leaflet-retina" : "") + (M.ielt9 ? " leaflet-oldie" : "") + (M.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var e = jt(t, "position");
          e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var t = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), K(this._mapPane, new E(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (I(t.markerPane, "leaflet-zoom-hide"), I(t.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(t, e, i) {
          K(this._mapPane, new E(0, 0));
          var n = !this._loaded;
          this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
          var o = this._zoom !== e;
          this._moveStart(o, i)._move(t, e)._moveEnd(o), this.fire("viewreset"), n && this.fire("load");
        },
        _moveStart: function(t, e) {
          return t && this.fire("zoomstart"), e || this.fire("movestart"), this;
        },
        _move: function(t, e, i, n) {
          e === void 0 && (e = this._zoom);
          var o = this._zoom !== e;
          return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n ? i && i.pinch && this.fire("zoom", i) : ((o || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)), this;
        },
        _moveEnd: function(t) {
          return t && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function() {
          return ht(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(t) {
          K(this._mapPane, this._getMapPanePos().subtract(t));
        },
        _getZoomSpan: function() {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function() {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function() {
          if (!this._loaded)
            throw new Error("Set map center and zoom first.");
        },
        // DOM event handling
        // @section Interaction events
        _initEvents: function(t) {
          this._targets = {}, this._targets[u(this._container)] = this;
          var e = t ? W : O;
          e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), M.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          ht(this._resizeRequest), this._resizeRequest = ot(
            function() {
              this.invalidateSize({ debounceMoveend: !0 });
            },
            this
          );
        },
        _onScroll: function() {
          this._container.scrollTop = 0, this._container.scrollLeft = 0;
        },
        _onMoveEnd: function() {
          var t = this._getMapPanePos();
          Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function(t, e) {
          for (var i = [], n, o = e === "mouseout" || e === "mouseover", s = t.target || t.srcElement, h = !1; s; ) {
            if (n = this._targets[u(s)], n && (e === "click" || e === "preclick") && this._draggableMoved(n)) {
              h = !0;
              break;
            }
            if (n && n.listens(e, !0) && (o && !Ke(s, t) || (i.push(n), o)) || s === this._container)
              break;
            s = s.parentNode;
          }
          return !i.length && !h && !o && this.listens(e, !0) && (i = [this]), i;
        },
        _isClickDisabled: function(t) {
          for (; t && t !== this._container; ) {
            if (t._leaflet_disable_click)
              return !0;
            t = t.parentNode;
          }
        },
        _handleDOMEvent: function(t) {
          var e = t.target || t.srcElement;
          if (!(!this._loaded || e._leaflet_disable_events || t.type === "click" && this._isClickDisabled(e))) {
            var i = t.type;
            i === "mousedown" && Ue(e), this._fireDOMEvent(t, i);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(t, e, i) {
          if (t.type === "click") {
            var n = k({}, t);
            n.type = "preclick", this._fireDOMEvent(n, n.type, i);
          }
          var o = this._findEventTargets(t, e);
          if (i) {
            for (var s = [], h = 0; h < i.length; h++)
              i[h].listens(e, !0) && s.push(i[h]);
            o = s.concat(o);
          }
          if (o.length) {
            e === "contextmenu" && J(t);
            var f = o[0], p = {
              originalEvent: t
            };
            if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
              var y = f.getLatLng && (!f._radius || f._radius <= 10);
              p.containerPoint = y ? this.latLngToContainerPoint(f.getLatLng()) : this.mouseEventToContainerPoint(t), p.layerPoint = this.containerPointToLayerPoint(p.containerPoint), p.latlng = y ? f.getLatLng() : this.layerPointToLatLng(p.layerPoint);
            }
            for (h = 0; h < o.length; h++)
              if (o[h].fire(e, p, !0), p.originalEvent._stopped || o[h].options.bubblingMouseEvents === !1 && nt(this._mouseEvents, e) !== -1)
                return;
          }
        },
        _draggableMoved: function(t) {
          return t = t.dragging && t.dragging.enabled() ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function() {
          for (var t = 0, e = this._handlers.length; t < e; t++)
            this._handlers[t].disable();
        },
        // @section Other Methods
        // @method whenReady(fn: Function, context?: Object): this
        // Runs the given function `fn` when the map gets initialized with
        // a view (center and zoom) and at least one layer, or immediately
        // if it's already initialized, optionally passing a function context.
        whenReady: function(t, e) {
          return this._loaded ? t.call(e || this, { target: this }) : this.on("load", t, e), this;
        },
        // private methods for getting map state
        _getMapPanePos: function() {
          return At(this._mapPane) || new E(0, 0);
        },
        _moved: function() {
          var t = this._getMapPanePos();
          return t && !t.equals([0, 0]);
        },
        _getTopLeftPoint: function(t, e) {
          var i = t && e !== void 0 ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin();
          return i.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function(t, e) {
          var i = this.getSize()._divideBy(2);
          return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function(t, e, i) {
          var n = this._getNewPixelOrigin(i, e);
          return this.project(t, e)._subtract(n);
        },
        _latLngBoundsToNewLayerBounds: function(t, e, i) {
          var n = this._getNewPixelOrigin(i, e);
          return rt([
            this.project(t.getSouthWest(), e)._subtract(n),
            this.project(t.getNorthWest(), e)._subtract(n),
            this.project(t.getSouthEast(), e)._subtract(n),
            this.project(t.getNorthEast(), e)._subtract(n)
          ]);
        },
        // layer point of the current center
        _getCenterLayerPoint: function() {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        // offset of the specified place to the current center in pixels
        _getCenterOffset: function(t) {
          return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
        },
        // adjust center for view to get inside bounds
        _limitCenter: function(t, e, i) {
          if (!i)
            return t;
          var n = this.project(t, e), o = this.getSize().divideBy(2), s = new G(n.subtract(o), n.add(o)), h = this._getBoundsOffset(s, i, e);
          return Math.abs(h.x) <= 1 && Math.abs(h.y) <= 1 ? t : this.unproject(n.add(h), e);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(t, e) {
          if (!e)
            return t;
          var i = this.getPixelBounds(), n = new G(i.min.add(t), i.max.add(t));
          return t.add(this._getBoundsOffset(n, e));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(t, e, i) {
          var n = rt(
            this.project(e.getNorthEast(), i),
            this.project(e.getSouthWest(), i)
          ), o = n.min.subtract(t.min), s = n.max.subtract(t.max), h = this._rebound(o.x, -s.x), f = this._rebound(o.y, -s.y);
          return new E(h, f);
        },
        _rebound: function(t, e) {
          return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
        },
        _limitZoom: function(t) {
          var e = this.getMinZoom(), i = this.getMaxZoom(), n = M.any3d ? this.options.zoomSnap : 1;
          return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
        },
        _onPanTransitionStep: function() {
          this.fire("move");
        },
        _onPanTransitionEnd: function() {
          V(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(t, e) {
          var i = this._getCenterOffset(t)._trunc();
          return (e && e.animate) !== !0 && !this.getSize().contains(i) ? !1 : (this.panBy(i, e), !0);
        },
        _createAnimProxy: function() {
          var t = this._proxy = N("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
            var i = Ze, n = this._proxy.style[i];
            St(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          q(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var t = this.getCenter(), e = this.getZoom();
          St(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
        },
        _catchTransitionEnd: function(t) {
          this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function() {
          return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function(t, e, i) {
          if (this._animatingZoom)
            return !0;
          if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
            return !1;
          var n = this.getZoomScale(e), o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
          return i.animate !== !0 && !this.getSize().contains(o) ? !1 : (ot(function() {
            this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
          }, this), !0);
        },
        _animateZoom: function(t, e, i, n) {
          this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, I(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: t,
            zoom: e,
            noUpdate: n
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(a(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && V(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function co(t, e) {
        return new R(t, e);
      }
      var dt = yt.extend({
        // @section
        // @aka Control Options
        options: {
          // @option position: String = 'topright'
          // The position of the control (one of the map corners). Possible values are `'topleft'`,
          // `'topright'`, `'bottomleft'` or `'bottomright'`
          position: "topright"
        },
        initialize: function(t) {
          w(this, t);
        },
        /* @section
         * Classes extending L.Control will inherit the following methods:
         *
         * @method getPosition: string
         * Returns the position of the control.
         */
        getPosition: function() {
          return this.options.position;
        },
        // @method setPosition(position: string): this
        // Sets the position of the control.
        setPosition: function(t) {
          var e = this._map;
          return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTMLElement that contains the control.
        getContainer: function() {
          return this._container;
        },
        // @method addTo(map: Map): this
        // Adds the control to the given map.
        addTo: function(t) {
          this.remove(), this._map = t;
          var e = this._container = this.onAdd(t), i = this.getPosition(), n = t._controlCorners[i];
          return I(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (q(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(t) {
          this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
        }
      }), Xt = function(t) {
        return new dt(t);
      };
      R.include({
        // @method addControl(control: Control): this
        // Adds the given control to the map
        addControl: function(t) {
          return t.addTo(this), this;
        },
        // @method removeControl(control: Control): this
        // Removes the given control from the map
        removeControl: function(t) {
          return t.remove(), this;
        },
        _initControlPos: function() {
          var t = this._controlCorners = {}, e = "leaflet-", i = this._controlContainer = N("div", e + "control-container", this._container);
          function n(o, s) {
            var h = e + o + " " + e + s;
            t[o + s] = N("div", h, i);
          }
          n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
        },
        _clearControlPos: function() {
          for (var t in this._controlCorners)
            q(this._controlCorners[t]);
          q(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var qi = dt.extend({
        // @section
        // @aka Control.Layers options
        options: {
          // @option collapsed: Boolean = true
          // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
          collapsed: !0,
          position: "topright",
          // @option autoZIndex: Boolean = true
          // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
          autoZIndex: !0,
          // @option hideSingleBase: Boolean = false
          // If `true`, the base layers in the control will be hidden when there is only one.
          hideSingleBase: !1,
          // @option sortLayers: Boolean = false
          // Whether to sort the layers. When `false`, layers will keep the order
          // in which they were added to the control.
          sortLayers: !1,
          // @option sortFunction: Function = *
          // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
          // that will be used for sorting the layers, when `sortLayers` is `true`.
          // The function receives both the `L.Layer` instances and their names, as in
          // `sortFunction(layerA, layerB, nameA, nameB)`.
          // By default, it sorts layers alphabetically by their name.
          sortFunction: function(t, e, i, n) {
            return i < n ? -1 : n < i ? 1 : 0;
          }
        },
        initialize: function(t, e, i) {
          w(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
          for (var n in t)
            this._addLayer(t[n], n);
          for (n in e)
            this._addLayer(e[n], n, !0);
        },
        onAdd: function(t) {
          this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
          for (var e = 0; e < this._layers.length; e++)
            this._layers[e].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function(t) {
          return dt.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
        },
        onRemove: function() {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var t = 0; t < this._layers.length; t++)
            this._layers[t].layer.off("add remove", this._onLayerChange, this);
        },
        // @method addBaseLayer(layer: Layer, name: String): this
        // Adds a base layer (radio button entry) with the given name to the control.
        addBaseLayer: function(t, e) {
          return this._addLayer(t, e), this._map ? this._update() : this;
        },
        // @method addOverlay(layer: Layer, name: String): this
        // Adds an overlay (checkbox entry) with the given name to the control.
        addOverlay: function(t, e) {
          return this._addLayer(t, e, !0), this._map ? this._update() : this;
        },
        // @method removeLayer(layer: Layer): this
        // Remove the given layer from the control.
        removeLayer: function(t) {
          t.off("add remove", this._onLayerChange, this);
          var e = this._getLayer(u(t));
          return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
          I(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var t = this._map.getSize().y - (this._container.offsetTop + 50);
          return t < this._section.clientHeight ? (I(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : V(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return V(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var t = "leaflet-control-layers", e = this._container = N("div", t), i = this.options.collapsed;
          e.setAttribute("aria-haspopup", !0), Jt(e), je(e);
          var n = this._section = N("section", t + "-list");
          i && (this._map.on("click", this.collapse, this), O(e, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var o = this._layersLink = N("a", t + "-toggle", e);
          o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), O(o, {
            keydown: function(s) {
              s.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(s) {
              J(s), this._expandSafely();
            }
          }, this), i || this.expand(), this._baseLayersList = N("div", t + "-base", n), this._separator = N("div", t + "-separator", n), this._overlaysList = N("div", t + "-overlays", n), e.appendChild(n);
        },
        _getLayer: function(t) {
          for (var e = 0; e < this._layers.length; e++)
            if (this._layers[e] && u(this._layers[e].layer) === t)
              return this._layers[e];
        },
        _addLayer: function(t, e, i) {
          this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
            layer: t,
            name: e,
            overlay: i
          }), this.options.sortLayers && this._layers.sort(a(function(n, o) {
            return this.options.sortFunction(n.layer, o.layer, n.name, o.name);
          }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          le(this._baseLayersList), le(this._overlaysList), this._layerControlInputs = [];
          var t, e, i, n, o = 0;
          for (i = 0; i < this._layers.length; i++)
            n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
          return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this;
        },
        _onLayerChange: function(t) {
          this._handlingClick || this._update();
          var e = this._getLayer(u(t.target)), i = e.overlay ? t.type === "add" ? "overlayadd" : "overlayremove" : t.type === "add" ? "baselayerchange" : null;
          i && this._map.fire(i, e);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(t, e) {
          var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>", n = document.createElement("div");
          return n.innerHTML = i, n.firstChild;
        },
        _addItem: function(t) {
          var e = document.createElement("label"), i = this._map.hasLayer(t.layer), n;
          t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = i) : n = this._createRadioElement("leaflet-base-layers_" + u(this), i), this._layerControlInputs.push(n), n.layerId = u(t.layer), O(n, "click", this._onInputClick, this);
          var o = document.createElement("span");
          o.innerHTML = " " + t.name;
          var s = document.createElement("span");
          e.appendChild(s), s.appendChild(n), s.appendChild(o);
          var h = t.overlay ? this._overlaysList : this._baseLayersList;
          return h.appendChild(e), this._checkDisabledLayers(), e;
        },
        _onInputClick: function() {
          if (!this._preventClick) {
            var t = this._layerControlInputs, e, i, n = [], o = [];
            this._handlingClick = !0;
            for (var s = t.length - 1; s >= 0; s--)
              e = t[s], i = this._getLayer(e.layerId).layer, e.checked ? n.push(i) : e.checked || o.push(i);
            for (s = 0; s < o.length; s++)
              this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
            for (s = 0; s < n.length; s++)
              this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
            this._handlingClick = !1, this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function() {
          for (var t = this._layerControlInputs, e, i, n = this._map.getZoom(), o = t.length - 1; o >= 0; o--)
            e = t[o], i = this._getLayer(e.layerId).layer, e.disabled = i.options.minZoom !== void 0 && n < i.options.minZoom || i.options.maxZoom !== void 0 && n > i.options.maxZoom;
        },
        _expandIfNotCollapsed: function() {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function() {
          var t = this._section;
          this._preventClick = !0, O(t, "click", J), this.expand();
          var e = this;
          setTimeout(function() {
            W(t, "click", J), e._preventClick = !1;
          });
        }
      }), fo = function(t, e, i) {
        return new qi(t, e, i);
      }, Ye = dt.extend({
        // @section
        // @aka Control.Zoom options
        options: {
          position: "topleft",
          // @option zoomInText: String = '<span aria-hidden="true">+</span>'
          // The text set on the 'zoom in' button.
          zoomInText: '<span aria-hidden="true">+</span>',
          // @option zoomInTitle: String = 'Zoom in'
          // The title set on the 'zoom in' button.
          zoomInTitle: "Zoom in",
          // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
          // The text set on the 'zoom out' button.
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          // @option zoomOutTitle: String = 'Zoom out'
          // The title set on the 'zoom out' button.
          zoomOutTitle: "Zoom out"
        },
        onAdd: function(t) {
          var e = "leaflet-control-zoom", i = N("div", e + " leaflet-bar"), n = this.options;
          return this._zoomInButton = this._createButton(
            n.zoomInText,
            n.zoomInTitle,
            e + "-in",
            i,
            this._zoomIn
          ), this._zoomOutButton = this._createButton(
            n.zoomOutText,
            n.zoomOutTitle,
            e + "-out",
            i,
            this._zoomOut
          ), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i;
        },
        onRemove: function(t) {
          t.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function() {
          return this._disabled = !0, this._updateDisabled(), this;
        },
        enable: function() {
          return this._disabled = !1, this._updateDisabled(), this;
        },
        _zoomIn: function(t) {
          !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _zoomOut: function(t) {
          !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
        },
        _createButton: function(t, e, i, n, o) {
          var s = N("a", i, n);
          return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), Jt(s), O(s, "click", Et), O(s, "click", o, this), O(s, "click", this._refocusOnMap, this), s;
        },
        _updateDisabled: function() {
          var t = this._map, e = "leaflet-disabled";
          V(this._zoomInButton, e), V(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (I(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (I(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      R.mergeOptions({
        zoomControl: !0
      }), R.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new Ye(), this.addControl(this.zoomControl));
      });
      var _o = function(t) {
        return new Ye(t);
      }, Vi = dt.extend({
        // @section
        // @aka Control.Scale options
        options: {
          position: "bottomleft",
          // @option maxWidth: Number = 100
          // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
          maxWidth: 100,
          // @option metric: Boolean = True
          // Whether to show the metric scale line (m/km).
          metric: !0,
          // @option imperial: Boolean = True
          // Whether to show the imperial scale line (mi/ft).
          imperial: !0
          // @option updateWhenIdle: Boolean = false
          // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
        },
        onAdd: function(t) {
          var e = "leaflet-control-scale", i = N("div", e), n = this.options;
          return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
        },
        onRemove: function(t) {
          t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(t, e, i) {
          t.metric && (this._mScale = N("div", e, i)), t.imperial && (this._iScale = N("div", e, i));
        },
        _update: function() {
          var t = this._map, e = t.getSize().y / 2, i = t.distance(
            t.containerPointToLatLng([0, e]),
            t.containerPointToLatLng([this.options.maxWidth, e])
          );
          this._updateScales(i);
        },
        _updateScales: function(t) {
          this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t);
        },
        _updateMetric: function(t) {
          var e = this._getRoundNum(t), i = e < 1e3 ? e + " m" : e / 1e3 + " km";
          this._updateScale(this._mScale, i, e / t);
        },
        _updateImperial: function(t) {
          var e = t * 3.2808399, i, n, o;
          e > 5280 ? (i = e / 5280, n = this._getRoundNum(i), this._updateScale(this._iScale, n + " mi", n / i)) : (o = this._getRoundNum(e), this._updateScale(this._iScale, o + " ft", o / e));
        },
        _updateScale: function(t, e, i) {
          t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e;
        },
        _getRoundNum: function(t) {
          var e = Math.pow(10, (Math.floor(t) + "").length - 1), i = t / e;
          return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i;
        }
      }), po = function(t) {
        return new Vi(t);
      }, mo = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Qe = dt.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (M.inlineSvg ? mo + " " : "") + "Leaflet</a>"
        },
        initialize: function(t) {
          w(this, t), this._attributions = {};
        },
        onAdd: function(t) {
          t.attributionControl = this, this._container = N("div", "leaflet-control-attribution"), Jt(this._container);
          for (var e in t._layers)
            t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
          return this._update(), t.on("layeradd", this._addAttribution, this), this._container;
        },
        onRemove: function(t) {
          t.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function(t) {
          t.layer.getAttribution && (this.addAttribution(t.layer.getAttribution()), t.layer.once("remove", function() {
            this.removeAttribution(t.layer.getAttribution());
          }, this));
        },
        // @method setPrefix(prefix: String|false): this
        // The HTML text shown before the attributions. Pass `false` to disable.
        setPrefix: function(t) {
          return this.options.prefix = t, this._update(), this;
        },
        // @method addAttribution(text: String): this
        // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
        addAttribution: function(t) {
          return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this;
        },
        // @method removeAttribution(text: String): this
        // Removes an attribution text.
        removeAttribution: function(t) {
          return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this;
        },
        _update: function() {
          if (this._map) {
            var t = [];
            for (var e in this._attributions)
              this._attributions[e] && t.push(e);
            var i = [];
            this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(' <span aria-hidden="true">|</span> ');
          }
        }
      });
      R.mergeOptions({
        attributionControl: !0
      }), R.addInitHook(function() {
        this.options.attributionControl && new Qe().addTo(this);
      });
      var go = function(t) {
        return new Qe(t);
      };
      dt.Layers = qi, dt.Zoom = Ye, dt.Scale = Vi, dt.Attribution = Qe, Xt.layers = fo, Xt.zoom = _o, Xt.scale = po, Xt.attribution = go;
      var gt = yt.extend({
        initialize: function(t) {
          this._map = t;
        },
        // @method enable(): this
        // Enables the handler
        enable: function() {
          return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
        },
        // @method disable(): this
        // Disables the handler
        disable: function() {
          return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
        },
        // @method enabled(): Boolean
        // Returns `true` if the handler is enabled
        enabled: function() {
          return !!this._enabled;
        }
        // @section Extension methods
        // Classes inheriting from `Handler` must implement the two following methods:
        // @method addHooks()
        // Called when the handler is enabled, should add event hooks.
        // @method removeHooks()
        // Called when the handler is disabled, should remove the event hooks added previously.
      });
      gt.addTo = function(t, e) {
        return t.addHandler(e, this), this;
      };
      var vo = { Events: lt }, ji = M.touch ? "touchstart mousedown" : "mousedown", kt = Wt.extend({
        options: {
          // @section
          // @aka Draggable options
          // @option clickTolerance: Number = 3
          // The max number of pixels a user can shift the mouse pointer during a click
          // for it to be considered a valid click (as opposed to a mouse drag).
          clickTolerance: 3
        },
        // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
        // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
        initialize: function(t, e, i, n) {
          w(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
          this._enabled || (O(this._dragStartTarget, ji, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (kt._dragging === this && this.finishDrag(!0), W(this._dragStartTarget, ji, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(t) {
          if (this._enabled && (this._moved = !1, !Be(this._element, "leaflet-zoom-anim"))) {
            if (t.touches && t.touches.length !== 1) {
              kt._dragging === this && this.finishDrag();
              return;
            }
            if (!(kt._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (kt._dragging = this, this._preventOutline && Ue(this._element), De(), Kt(), !this._moving)) {
              this.fire("down");
              var e = t.touches ? t.touches[0] : t, i = Di(this._element);
              this._startPoint = new E(e.clientX, e.clientY), this._startPos = At(this._element), this._parentScale = We(i);
              var n = t.type === "mousedown";
              O(document, n ? "mousemove" : "touchmove", this._onMove, this), O(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(t) {
          if (this._enabled) {
            if (t.touches && t.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, i = new E(e.clientX, e.clientY)._subtract(this._startPoint);
            !i.x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, J(t), this._moved || (this.fire("dragstart"), this._moved = !0, I(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), I(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var t = { originalEvent: this._lastEvent };
          this.fire("predrag", t), K(this._element, this._newPos), this.fire("drag", t);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(t) {
          V(document.body, "leaflet-dragging"), this._lastTarget && (V(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), W(document, "mousemove touchmove", this._onMove, this), W(document, "mouseup touchend touchcancel", this._onUp, this), Fe(), Yt();
          var e = this._moved && this._moving;
          this._moving = !1, kt._dragging = !1, e && this.fire("dragend", {
            noInertia: t,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function Ki(t, e, i) {
        var n, o = [1, 4, 2, 8], s, h, f, p, y, C, A, Z;
        for (s = 0, C = t.length; s < C; s++)
          t[s]._code = Ot(t[s], e);
        for (f = 0; f < 4; f++) {
          for (A = o[f], n = [], s = 0, C = t.length, h = C - 1; s < C; h = s++)
            p = t[s], y = t[h], p._code & A ? y._code & A || (Z = de(y, p, A, e, i), Z._code = Ot(Z, e), n.push(Z)) : (y._code & A && (Z = de(y, p, A, e, i), Z._code = Ot(Z, e), n.push(Z)), n.push(p));
          t = n;
        }
        return t;
      }
      function Yi(t, e) {
        var i, n, o, s, h, f, p, y, C;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        ct(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var A = B([0, 0]), Z = j(t), et = Z.getNorthWest().distanceTo(Z.getSouthWest()) * Z.getNorthEast().distanceTo(Z.getNorthWest());
        et < 1700 && (A = Je(t));
        var Q = t.length, ft = [];
        for (i = 0; i < Q; i++) {
          var at = B(t[i]);
          ft.push(e.project(B([at.lat - A.lat, at.lng - A.lng])));
        }
        for (f = p = y = 0, i = 0, n = Q - 1; i < Q; n = i++)
          o = ft[i], s = ft[n], h = o.y * s.x - s.y * o.x, p += (o.x + s.x) * h, y += (o.y + s.y) * h, f += h * 3;
        f === 0 ? C = ft[0] : C = [p / f, y / f];
        var Ut = e.unproject(z(C));
        return B([Ut.lat + A.lat, Ut.lng + A.lng]);
      }
      function Je(t) {
        for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
          var s = B(t[o]);
          e += s.lat, i += s.lng, n++;
        }
        return B([e / n, i / n]);
      }
      var yo = {
        __proto__: null,
        clipPolygon: Ki,
        polygonCenter: Yi,
        centroid: Je
      };
      function Qi(t, e) {
        if (!e || !t.length)
          return t.slice();
        var i = e * e;
        return t = wo(t, i), t = xo(t, i), t;
      }
      function Ji(t, e, i) {
        return Math.sqrt($t(t, e, i, !0));
      }
      function Lo(t, e, i) {
        return $t(t, e, i);
      }
      function xo(t, e) {
        var i = t.length, n = typeof Uint8Array < "u" ? Uint8Array : Array, o = new n(i);
        o[0] = o[i - 1] = 1, Xe(t, o, e, 0, i - 1);
        var s, h = [];
        for (s = 0; s < i; s++)
          o[s] && h.push(t[s]);
        return h;
      }
      function Xe(t, e, i, n, o) {
        var s = 0, h, f, p;
        for (f = n + 1; f <= o - 1; f++)
          p = $t(t[f], t[n], t[o], !0), p > s && (h = f, s = p);
        s > i && (e[h] = 1, Xe(t, e, i, n, h), Xe(t, e, i, h, o));
      }
      function wo(t, e) {
        for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
          bo(t[n], t[o]) > e && (i.push(t[n]), o = n);
        return o < s - 1 && i.push(t[s - 1]), i;
      }
      var Xi;
      function $i(t, e, i, n, o) {
        var s = n ? Xi : Ot(t, i), h = Ot(e, i), f, p, y;
        for (Xi = h; ; ) {
          if (!(s | h))
            return [t, e];
          if (s & h)
            return !1;
          f = s || h, p = de(t, e, f, i, o), y = Ot(p, i), f === s ? (t = p, s = y) : (e = p, h = y);
        }
      }
      function de(t, e, i, n, o) {
        var s = e.x - t.x, h = e.y - t.y, f = n.min, p = n.max, y, C;
        return i & 8 ? (y = t.x + s * (p.y - t.y) / h, C = p.y) : i & 4 ? (y = t.x + s * (f.y - t.y) / h, C = f.y) : i & 2 ? (y = p.x, C = t.y + h * (p.x - t.x) / s) : i & 1 && (y = f.x, C = t.y + h * (f.x - t.x) / s), new E(y, C, o);
      }
      function Ot(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
      }
      function bo(t, e) {
        var i = e.x - t.x, n = e.y - t.y;
        return i * i + n * n;
      }
      function $t(t, e, i, n) {
        var o = e.x, s = e.y, h = i.x - o, f = i.y - s, p = h * h + f * f, y;
        return p > 0 && (y = ((t.x - o) * h + (t.y - s) * f) / p, y > 1 ? (o = i.x, s = i.y) : y > 0 && (o += h * y, s += f * y)), h = t.x - o, f = t.y - s, n ? h * h + f * f : new E(o, s);
      }
      function ct(t) {
        return !U(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
      }
      function tn(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ct(t);
      }
      function en(t, e) {
        var i, n, o, s, h, f, p, y;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        ct(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var C = B([0, 0]), A = j(t), Z = A.getNorthWest().distanceTo(A.getSouthWest()) * A.getNorthEast().distanceTo(A.getNorthWest());
        Z < 1700 && (C = Je(t));
        var et = t.length, Q = [];
        for (i = 0; i < et; i++) {
          var ft = B(t[i]);
          Q.push(e.project(B([ft.lat - C.lat, ft.lng - C.lng])));
        }
        for (i = 0, n = 0; i < et - 1; i++)
          n += Q[i].distanceTo(Q[i + 1]) / 2;
        if (n === 0)
          y = Q[0];
        else
          for (i = 0, s = 0; i < et - 1; i++)
            if (h = Q[i], f = Q[i + 1], o = h.distanceTo(f), s += o, s > n) {
              p = (s - n) / o, y = [
                f.x - p * (f.x - h.x),
                f.y - p * (f.y - h.y)
              ];
              break;
            }
        var at = e.unproject(z(y));
        return B([at.lat + C.lat, at.lng + C.lng]);
      }
      var Po = {
        __proto__: null,
        simplify: Qi,
        pointToSegmentDistance: Ji,
        closestPointOnSegment: Lo,
        clipSegment: $i,
        _getEdgeIntersection: de,
        _getBitCode: Ot,
        _sqClosestPointOnSegment: $t,
        isFlat: ct,
        _flat: tn,
        polylineCenter: en
      }, $e = {
        project: function(t) {
          return new E(t.lng, t.lat);
        },
        unproject: function(t) {
          return new H(t.y, t.x);
        },
        bounds: new G([-180, -90], [180, 90])
      }, ti = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new G([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(t) {
          var e = Math.PI / 180, i = this.R, n = t.lat * e, o = this.R_MINOR / i, s = Math.sqrt(1 - o * o), h = s * Math.sin(n), f = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - h) / (1 + h), s / 2);
          return n = -i * Math.log(Math.max(f, 1e-10)), new E(t.lng * e * i, n);
        },
        unproject: function(t) {
          for (var e = 180 / Math.PI, i = this.R, n = this.R_MINOR / i, o = Math.sqrt(1 - n * n), s = Math.exp(-t.y / i), h = Math.PI / 2 - 2 * Math.atan(s), f = 0, p = 0.1, y; f < 15 && Math.abs(p) > 1e-7; f++)
            y = o * Math.sin(h), y = Math.pow((1 - y) / (1 + y), o / 2), p = Math.PI / 2 - 2 * Math.atan(s * y) - h, h += p;
          return new H(h * e, t.x * e / i);
        }
      }, Co = {
        __proto__: null,
        LonLat: $e,
        Mercator: ti,
        SphericalMercator: ke
      }, ko = k({}, Ct, {
        code: "EPSG:3395",
        projection: ti,
        transformation: function() {
          var t = 0.5 / (Math.PI * ti.R);
          return Gt(t, 0.5, -t, 0.5);
        }()
      }), nn = k({}, Ct, {
        code: "EPSG:4326",
        projection: $e,
        transformation: Gt(1 / 180, 1, -1 / 180, 0.5)
      }), Mo = k({}, Lt, {
        projection: $e,
        transformation: Gt(1, 0, -1, 0),
        scale: function(t) {
          return Math.pow(2, t);
        },
        zoom: function(t) {
          return Math.log(t) / Math.LN2;
        },
        distance: function(t, e) {
          var i = e.lng - t.lng, n = e.lat - t.lat;
          return Math.sqrt(i * i + n * n);
        },
        infinite: !0
      });
      Lt.Earth = Ct, Lt.EPSG3395 = ko, Lt.EPSG3857 = Te, Lt.EPSG900913 = En, Lt.EPSG4326 = nn, Lt.Simple = Mo;
      var _t = Wt.extend({
        // Classes extending `L.Layer` will inherit the following options:
        options: {
          // @option pane: String = 'overlayPane'
          // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
          pane: "overlayPane",
          // @option attribution: String = null
          // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
          attribution: null,
          bubblingMouseEvents: !0
        },
        /* @section
         * Classes extending `L.Layer` will inherit the following methods:
         *
         * @method addTo(map: Map|LayerGroup): this
         * Adds the layer to the given map or layer group.
         */
        addTo: function(t) {
          return t.addLayer(this), this;
        },
        // @method remove: this
        // Removes the layer from the map it is currently active on.
        remove: function() {
          return this.removeFrom(this._map || this._mapToAdd);
        },
        // @method removeFrom(map: Map): this
        // Removes the layer from the given map
        //
        // @alternative
        // @method removeFrom(group: LayerGroup): this
        // Removes the layer from the given `LayerGroup`
        removeFrom: function(t) {
          return t && t.removeLayer(this), this;
        },
        // @method getPane(name? : String): HTMLElement
        // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
        getPane: function(t) {
          return this._map.getPane(t ? this.options[t] || t : this.options.pane);
        },
        addInteractiveTarget: function(t) {
          return this._map._targets[u(t)] = this, this;
        },
        removeInteractiveTarget: function(t) {
          return delete this._map._targets[u(t)], this;
        },
        // @method getAttribution: String
        // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
        getAttribution: function() {
          return this.options.attribution;
        },
        _layerAdd: function(t) {
          var e = t.target;
          if (e.hasLayer(this)) {
            if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
              var i = this.getEvents();
              e.on(i, this), this.once("remove", function() {
                e.off(i, this);
              }, this);
            }
            this.onAdd(e), this.fire("add"), e.fire("layeradd", { layer: this });
          }
        }
      });
      R.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(t) {
          if (!t._layerAdd)
            throw new Error("The provided object is not a Layer.");
          var e = u(t);
          return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this);
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(t) {
          var e = u(t);
          return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && (this.fire("layerremove", { layer: t }), t.fire("remove")), t._map = t._mapToAdd = null, this) : this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(t) {
          return u(t) in this._layers;
        },
        /* @method eachLayer(fn: Function, context?: Object): this
         * Iterates over the layers of the map, optionally specifying context of the iterator function.
         * ```
         * map.eachLayer(function(layer){
         *     layer.bindPopup('Hello');
         * });
         * ```
         */
        eachLayer: function(t, e) {
          for (var i in this._layers)
            t.call(e, this._layers[i]);
          return this;
        },
        _addLayers: function(t) {
          t = t ? U(t) ? t : [t] : [];
          for (var e = 0, i = t.length; e < i; e++)
            this.addLayer(t[e]);
        },
        _addZoomLimit: function(t) {
          (!isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[u(t)] = t, this._updateZoomLevels());
        },
        _removeZoomLimit: function(t) {
          var e = u(t);
          this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels());
        },
        _updateZoomLevels: function() {
          var t = 1 / 0, e = -1 / 0, i = this._getZoomSpan();
          for (var n in this._zoomBoundLayers) {
            var o = this._zoomBoundLayers[n].options;
            t = o.minZoom === void 0 ? t : Math.min(t, o.minZoom), e = o.maxZoom === void 0 ? e : Math.max(e, o.maxZoom);
          }
          this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        }
      });
      var Rt = _t.extend({
        initialize: function(t, e) {
          w(this, e), this._layers = {};
          var i, n;
          if (t)
            for (i = 0, n = t.length; i < n; i++)
              this.addLayer(t[i]);
        },
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the group.
        addLayer: function(t) {
          var e = this.getLayerId(t);
          return this._layers[e] = t, this._map && this._map.addLayer(t), this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the group.
        // @alternative
        // @method removeLayer(id: Number): this
        // Removes the layer with the given internal ID from the group.
        removeLayer: function(t) {
          var e = t in this._layers ? t : this.getLayerId(t);
          return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the group.
        // @alternative
        // @method hasLayer(id: Number): Boolean
        // Returns `true` if the given internal ID is currently added to the group.
        hasLayer: function(t) {
          var e = typeof t == "number" ? t : this.getLayerId(t);
          return e in this._layers;
        },
        // @method clearLayers(): this
        // Removes all the layers from the group.
        clearLayers: function() {
          return this.eachLayer(this.removeLayer, this);
        },
        // @method invoke(methodName: String, …): this
        // Calls `methodName` on every layer contained in this group, passing any
        // additional parameters. Has no effect if the layers contained do not
        // implement `methodName`.
        invoke: function(t) {
          var e = Array.prototype.slice.call(arguments, 1), i, n;
          for (i in this._layers)
            n = this._layers[i], n[t] && n[t].apply(n, e);
          return this;
        },
        onAdd: function(t) {
          this.eachLayer(t.addLayer, t);
        },
        onRemove: function(t) {
          this.eachLayer(t.removeLayer, t);
        },
        // @method eachLayer(fn: Function, context?: Object): this
        // Iterates over the layers of the group, optionally specifying context of the iterator function.
        // ```js
        // group.eachLayer(function (layer) {
        // 	layer.bindPopup('Hello');
        // });
        // ```
        eachLayer: function(t, e) {
          for (var i in this._layers)
            t.call(e, this._layers[i]);
          return this;
        },
        // @method getLayer(id: Number): Layer
        // Returns the layer with the given internal ID.
        getLayer: function(t) {
          return this._layers[t];
        },
        // @method getLayers(): Layer[]
        // Returns an array of all the layers added to the group.
        getLayers: function() {
          var t = [];
          return this.eachLayer(t.push, t), t;
        },
        // @method setZIndex(zIndex: Number): this
        // Calls `setZIndex` on every layer contained in this group, passing the z-index.
        setZIndex: function(t) {
          return this.invoke("setZIndex", t);
        },
        // @method getLayerId(layer: Layer): Number
        // Returns the internal ID for a layer
        getLayerId: function(t) {
          return u(t);
        }
      }), To = function(t, e) {
        return new Rt(t, e);
      }, xt = Rt.extend({
        addLayer: function(t) {
          return this.hasLayer(t) ? this : (t.addEventParent(this), Rt.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
        },
        removeLayer: function(t) {
          return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Rt.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
        },
        // @method setStyle(style: Path options): this
        // Sets the given path options to each layer of the group that has a `setStyle` method.
        setStyle: function(t) {
          return this.invoke("setStyle", t);
        },
        // @method bringToFront(): this
        // Brings the layer group to the top of all other layers
        bringToFront: function() {
          return this.invoke("bringToFront");
        },
        // @method bringToBack(): this
        // Brings the layer group to the back of all other layers
        bringToBack: function() {
          return this.invoke("bringToBack");
        },
        // @method getBounds(): LatLngBounds
        // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
        getBounds: function() {
          var t = new st();
          for (var e in this._layers) {
            var i = this._layers[e];
            t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
          }
          return t;
        }
      }), So = function(t, e) {
        return new xt(t, e);
      }, Nt = yt.extend({
        /* @section
         * @aka Icon options
         *
         * @option iconUrl: String = null
         * **(required)** The URL to the icon image (absolute or relative to your script path).
         *
         * @option iconRetinaUrl: String = null
         * The URL to a retina sized version of the icon image (absolute or relative to your
         * script path). Used for Retina screen devices.
         *
         * @option iconSize: Point = null
         * Size of the icon image in pixels.
         *
         * @option iconAnchor: Point = null
         * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
         * will be aligned so that this point is at the marker's geographical location. Centered
         * by default if size is specified, also can be set in CSS with negative margins.
         *
         * @option popupAnchor: Point = [0, 0]
         * The coordinates of the point from which popups will "open", relative to the icon anchor.
         *
         * @option tooltipAnchor: Point = [0, 0]
         * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
         *
         * @option shadowUrl: String = null
         * The URL to the icon shadow image. If not specified, no shadow image will be created.
         *
         * @option shadowRetinaUrl: String = null
         *
         * @option shadowSize: Point = null
         * Size of the shadow image in pixels.
         *
         * @option shadowAnchor: Point = null
         * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
         * as iconAnchor if not specified).
         *
         * @option className: String = ''
         * A custom class name to assign to both icon and shadow images. Empty by default.
         */
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1
        },
        initialize: function(t) {
          w(this, t);
        },
        // @method createIcon(oldIcon?: HTMLElement): HTMLElement
        // Called internally when the icon has to be shown, returns a `<img>` HTML element
        // styled according to the options.
        createIcon: function(t) {
          return this._createIcon("icon", t);
        },
        // @method createShadow(oldIcon?: HTMLElement): HTMLElement
        // As `createIcon`, but for the shadow beneath it.
        createShadow: function(t) {
          return this._createIcon("shadow", t);
        },
        _createIcon: function(t, e) {
          var i = this._getIconUrl(t);
          if (!i) {
            if (t === "icon")
              throw new Error("iconUrl not set in Icon options (see the docs).");
            return null;
          }
          var n = this._createImg(i, e && e.tagName === "IMG" ? e : null);
          return this._setIconStyles(n, t), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), n;
        },
        _setIconStyles: function(t, e) {
          var i = this.options, n = i[e + "Size"];
          typeof n == "number" && (n = [n, n]);
          var o = z(n), s = z(e === "shadow" && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
          t.className = "leaflet-marker-" + e + " " + (i.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
        },
        _createImg: function(t, e) {
          return e = e || document.createElement("img"), e.src = t, e;
        },
        _getIconUrl: function(t) {
          return M.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
        }
      });
      function Ao(t) {
        return new Nt(t);
      }
      var te = Nt.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        },
        _getIconUrl: function(t) {
          return typeof te.imagePath != "string" && (te.imagePath = this._detectIconPath()), (this.options.imagePath || te.imagePath) + Nt.prototype._getIconUrl.call(this, t);
        },
        _stripUrl: function(t) {
          var e = function(i, n, o) {
            var s = n.exec(i);
            return s && s[o];
          };
          return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var t = N("div", "leaflet-default-icon-path", document.body), e = jt(t, "background-image") || jt(t, "backgroundImage");
          if (document.body.removeChild(t), e = this._stripUrl(e), e)
            return e;
          var i = document.querySelector('link[href$="leaflet.css"]');
          return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
        }
      }), on = gt.extend({
        initialize: function(t) {
          this._marker = t;
        },
        addHooks: function() {
          var t = this._marker._icon;
          this._draggable || (this._draggable = new kt(t, t, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), I(t, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && V(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(t) {
          var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, o = this._marker.options.autoPanPadding, s = At(e._icon), h = i.getPixelBounds(), f = i.getPixelOrigin(), p = rt(
            h.min._subtract(f).add(o),
            h.max._subtract(f).subtract(o)
          );
          if (!p.contains(s)) {
            var y = z(
              (Math.max(p.max.x, s.x) - p.max.x) / (h.max.x - p.max.x) - (Math.min(p.min.x, s.x) - p.min.x) / (h.min.x - p.min.x),
              (Math.max(p.max.y, s.y) - p.max.y) / (h.max.y - p.max.y) - (Math.min(p.min.y, s.y) - p.min.y) / (h.min.y - p.min.y)
            ).multiplyBy(n);
            i.panBy(y, { animate: !1 }), this._draggable._newPos._add(y), this._draggable._startPos._add(y), K(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = ot(this._adjustPan.bind(this, t));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(t) {
          this._marker.options.autoPan && (ht(this._panRequest), this._panRequest = ot(this._adjustPan.bind(this, t)));
        },
        _onDrag: function(t) {
          var e = this._marker, i = e._shadow, n = At(e._icon), o = e._map.layerPointToLatLng(n);
          i && K(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
        },
        _onDragEnd: function(t) {
          ht(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
        }
      }), _e = _t.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new te(),
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option keyboard: Boolean = true
          // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
          keyboard: !0,
          // @option title: String = ''
          // Text for the browser tooltip that appear on marker hover (no tooltip by default).
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          title: "",
          // @option alt: String = 'Marker'
          // Text for the `alt` attribute of the icon image.
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          alt: "Marker",
          // @option zIndexOffset: Number = 0
          // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
          zIndexOffset: 0,
          // @option opacity: Number = 1.0
          // The opacity of the marker.
          opacity: 1,
          // @option riseOnHover: Boolean = false
          // If `true`, the marker will get on top of others when you hover the mouse over it.
          riseOnHover: !1,
          // @option riseOffset: Number = 250
          // The z-index offset used for the `riseOnHover` feature.
          riseOffset: 250,
          // @option pane: String = 'markerPane'
          // `Map pane` where the markers icon will be added.
          pane: "markerPane",
          // @option shadowPane: String = 'shadowPane'
          // `Map pane` where the markers shadow will be added.
          shadowPane: "shadowPane",
          // @option bubblingMouseEvents: Boolean = false
          // When `true`, a mouse event on this marker will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !1,
          // @option autoPanOnFocus: Boolean = true
          // When `true`, the map will pan whenever the marker is focused (via
          // e.g. pressing `tab` on the keyboard) to ensure the marker is
          // visible within the map's bounds
          autoPanOnFocus: !0,
          // @section Draggable marker options
          // @option draggable: Boolean = false
          // Whether the marker is draggable with mouse/touch or not.
          draggable: !1,
          // @option autoPan: Boolean = false
          // Whether to pan the map when dragging this marker near its edge or not.
          autoPan: !1,
          // @option autoPanPadding: Point = Point(50, 50)
          // Distance (in pixels to the left/right and to the top/bottom) of the
          // map edge to start panning the map.
          autoPanPadding: [50, 50],
          // @option autoPanSpeed: Number = 10
          // Number of pixels the map should pan by.
          autoPanSpeed: 10
        },
        /* @section
         *
         * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
         */
        initialize: function(t, e) {
          w(this, e), this._latlng = B(t);
        },
        onAdd: function(t) {
          this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
        },
        onRemove: function(t) {
          this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
        },
        getEvents: function() {
          return {
            zoom: this.update,
            viewreset: this.update
          };
        },
        // @method getLatLng: LatLng
        // Returns the current geographical position of the marker.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Changes the marker position to the given point.
        setLatLng: function(t) {
          var e = this._latlng;
          return this._latlng = B(t), this.update(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
        },
        // @method setZIndexOffset(offset: Number): this
        // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
        setZIndexOffset: function(t) {
          return this.options.zIndexOffset = t, this.update();
        },
        // @method getIcon: Icon
        // Returns the current icon used by the marker
        getIcon: function() {
          return this.options.icon;
        },
        // @method setIcon(icon: Icon): this
        // Changes the marker icon.
        setIcon: function(t) {
          return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
        },
        getElement: function() {
          return this._icon;
        },
        update: function() {
          if (this._icon && this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(t);
          }
          return this;
        },
        _initIcon: function() {
          var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), i = t.icon.createIcon(this._icon), n = !1;
          i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), i.tagName === "IMG" && (i.alt = t.alt || "")), I(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && O(i, "focus", this._panOnFocus, this);
          var o = t.icon.createShadow(this._shadow), s = !1;
          o !== this._shadow && (this._removeShadow(), s = !0), o && (I(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && W(this._icon, "focus", this._panOnFocus, this), q(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && q(this._shadow), this._shadow = null;
        },
        _setPos: function(t) {
          this._icon && K(this._icon, t), this._shadow && K(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(t) {
          this._icon && (this._icon.style.zIndex = this._zIndex + t);
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
          this._setPos(e);
        },
        _initInteraction: function() {
          if (this.options.interactive && (I(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), on)) {
            var t = this.options.draggable;
            this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new on(this), t && this.dragging.enable();
          }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(t) {
          return this.options.opacity = t, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
          var t = this.options.opacity;
          this._icon && ut(this._icon, t), this._shadow && ut(this._shadow, t);
        },
        _bringToFront: function() {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function() {
          this._updateZIndex(0);
        },
        _panOnFocus: function() {
          var t = this._map;
          if (t) {
            var e = this.options.icon.options, i = e.iconSize ? z(e.iconSize) : z(0, 0), n = e.iconAnchor ? z(e.iconAnchor) : z(0, 0);
            t.panInside(this._latlng, {
              paddingTopLeft: n,
              paddingBottomRight: i.subtract(n)
            });
          }
        },
        _getPopupAnchor: function() {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function() {
          return this.options.icon.options.tooltipAnchor;
        }
      });
      function zo(t, e) {
        return new _e(t, e);
      }
      var Mt = _t.extend({
        // @section
        // @aka Path options
        options: {
          // @option stroke: Boolean = true
          // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
          stroke: !0,
          // @option color: String = '#3388ff'
          // Stroke color
          color: "#3388ff",
          // @option weight: Number = 3
          // Stroke width in pixels
          weight: 3,
          // @option opacity: Number = 1.0
          // Stroke opacity
          opacity: 1,
          // @option lineCap: String= 'round'
          // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
          lineCap: "round",
          // @option lineJoin: String = 'round'
          // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
          lineJoin: "round",
          // @option dashArray: String = null
          // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashArray: null,
          // @option dashOffset: String = null
          // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashOffset: null,
          // @option fill: Boolean = depends
          // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
          fill: !1,
          // @option fillColor: String = *
          // Fill color. Defaults to the value of the [`color`](#path-color) option
          fillColor: null,
          // @option fillOpacity: Number = 0.2
          // Fill opacity.
          fillOpacity: 0.2,
          // @option fillRule: String = 'evenodd'
          // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
          fillRule: "evenodd",
          // className: '',
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option bubblingMouseEvents: Boolean = true
          // When `true`, a mouse event on this path will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !0
        },
        beforeAdd: function(t) {
          this._renderer = t.getRenderer(this);
        },
        onAdd: function() {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        },
        onRemove: function() {
          this._renderer._removePath(this);
        },
        // @method redraw(): this
        // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
        redraw: function() {
          return this._map && this._renderer._updatePath(this), this;
        },
        // @method setStyle(style: Path options): this
        // Changes the appearance of a Path based on the options in the `Path options` object.
        setStyle: function(t) {
          return w(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all path layers.
        bringToFront: function() {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all path layers.
        bringToBack: function() {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function() {
          return this._path;
        },
        _reset: function() {
          this._project(), this._update();
        },
        _clickTolerance: function() {
          return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
        }
      }), pe = Mt.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(t, e) {
          w(this, e), this._latlng = B(t), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(t) {
          var e = this._latlng;
          return this._latlng = B(t), this.redraw(), this.fire("move", { oldLatLng: e, latlng: this._latlng });
        },
        // @method getLatLng(): LatLng
        // Returns the current geographical position of the circle marker
        getLatLng: function() {
          return this._latlng;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle marker. Units are in pixels.
        setRadius: function(t) {
          return this.options.radius = this._radius = t, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of the circle
        getRadius: function() {
          return this._radius;
        },
        setStyle: function(t) {
          var e = t && t.radius || this._radius;
          return Mt.prototype.setStyle.call(this, t), this.setRadius(e), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var t = this._radius, e = this._radiusY || t, i = this._clickTolerance(), n = [t + i, e + i];
          this._pxBounds = new G(this._point.subtract(n), this._point.add(n));
        },
        _update: function() {
          this._map && this._updatePath();
        },
        _updatePath: function() {
          this._renderer._updateCircle(this);
        },
        _empty: function() {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t) {
          return t.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
      });
      function Eo(t, e) {
        return new pe(t, e);
      }
      var ei = pe.extend({
        initialize: function(t, e, i) {
          if (typeof e == "number" && (e = k({}, i, { radius: e })), w(this, e), this._latlng = B(t), isNaN(this.options.radius))
            throw new Error("Circle radius cannot be NaN");
          this._mRadius = this.options.radius;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle. Units are in meters.
        setRadius: function(t) {
          return this._mRadius = t, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of a circle. Units are in meters.
        getRadius: function() {
          return this._mRadius;
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          var t = [this._radius, this._radiusY || this._radius];
          return new st(
            this._map.layerPointToLatLng(this._point.subtract(t)),
            this._map.layerPointToLatLng(this._point.add(t))
          );
        },
        setStyle: Mt.prototype.setStyle,
        _project: function() {
          var t = this._latlng.lng, e = this._latlng.lat, i = this._map, n = i.options.crs;
          if (n.distance === Ct.distance) {
            var o = Math.PI / 180, s = this._mRadius / Ct.R / o, h = i.project([e + s, t]), f = i.project([e - s, t]), p = h.add(f).divideBy(2), y = i.unproject(p).lat, C = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(y * o)) / (Math.cos(e * o) * Math.cos(y * o))) / o;
            (isNaN(C) || C === 0) && (C = s / Math.cos(Math.PI / 180 * e)), this._point = p.subtract(i.getPixelOrigin()), this._radius = isNaN(C) ? 0 : p.x - i.project([y, t - C]).x, this._radiusY = p.y - h.y;
          } else {
            var A = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(A).x;
          }
          this._updateBounds();
        }
      });
      function Oo(t, e, i) {
        return new ei(t, e, i);
      }
      var wt = Mt.extend({
        // @section
        // @aka Polyline options
        options: {
          // @option smoothFactor: Number = 1.0
          // How much to simplify the polyline on each zoom level. More means
          // better performance and smoother look, and less means more accurate representation.
          smoothFactor: 1,
          // @option noClip: Boolean = false
          // Disable polyline clipping.
          noClip: !1
        },
        initialize: function(t, e) {
          w(this, e), this._setLatLngs(t);
        },
        // @method getLatLngs(): LatLng[]
        // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
        getLatLngs: function() {
          return this._latlngs;
        },
        // @method setLatLngs(latlngs: LatLng[]): this
        // Replaces all the points in the polyline with the given array of geographical points.
        setLatLngs: function(t) {
          return this._setLatLngs(t), this.redraw();
        },
        // @method isEmpty(): Boolean
        // Returns `true` if the Polyline has no LatLngs.
        isEmpty: function() {
          return !this._latlngs.length;
        },
        // @method closestLayerPoint(p: Point): Point
        // Returns the point closest to `p` on the Polyline.
        closestLayerPoint: function(t) {
          for (var e = 1 / 0, i = null, n = $t, o, s, h = 0, f = this._parts.length; h < f; h++)
            for (var p = this._parts[h], y = 1, C = p.length; y < C; y++) {
              o = p[y - 1], s = p[y];
              var A = n(t, o, s, !0);
              A < e && (e = A, i = n(t, o, s));
            }
          return i && (i.distance = Math.sqrt(e)), i;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return en(this._defaultShape(), this._map.options.crs);
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          return this._bounds;
        },
        // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
        // Adds a given point to the polyline. By default, adds to the first ring of
        // the polyline in case of a multi-polyline, but can be overridden by passing
        // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
        addLatLng: function(t, e) {
          return e = e || this._defaultShape(), t = B(t), e.push(t), this._bounds.extend(t), this.redraw();
        },
        _setLatLngs: function(t) {
          this._bounds = new st(), this._latlngs = this._convertLatLngs(t);
        },
        _defaultShape: function() {
          return ct(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(t) {
          for (var e = [], i = ct(t), n = 0, o = t.length; n < o; n++)
            i ? (e[n] = B(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
          return e;
        },
        _project: function() {
          var t = new G();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
        },
        _updateBounds: function() {
          var t = this._clickTolerance(), e = new E(t, t);
          this._rawPxBounds && (this._pxBounds = new G([
            this._rawPxBounds.min.subtract(e),
            this._rawPxBounds.max.add(e)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(t, e, i) {
          var n = t[0] instanceof H, o = t.length, s, h;
          if (n) {
            for (h = [], s = 0; s < o; s++)
              h[s] = this._map.latLngToLayerPoint(t[s]), i.extend(h[s]);
            e.push(h);
          } else
            for (s = 0; s < o; s++)
              this._projectLatlngs(t[s], e, i);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
          var t = this._renderer._bounds;
          if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var e = this._parts, i, n, o, s, h, f, p;
            for (i = 0, o = 0, s = this._rings.length; i < s; i++)
              for (p = this._rings[i], n = 0, h = p.length; n < h - 1; n++)
                f = $i(p[n], p[n + 1], t, n, !0), f && (e[o] = e[o] || [], e[o].push(f[0]), (f[1] !== p[n + 1] || n === h - 2) && (e[o].push(f[1]), o++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
            t[i] = Qi(t[i], e);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t, e) {
          var i, n, o, s, h, f, p = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (i = 0, s = this._parts.length; i < s; i++)
            for (f = this._parts[i], n = 0, h = f.length, o = h - 1; n < h; o = n++)
              if (!(!e && n === 0) && Ji(t, f[o], f[n]) <= p)
                return !0;
          return !1;
        }
      });
      function Io(t, e) {
        return new wt(t, e);
      }
      wt._flat = tn;
      var Dt = wt.extend({
        options: {
          fill: !0
        },
        isEmpty: function() {
          return !this._latlngs.length || !this._latlngs[0].length;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Yi(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(t) {
          var e = wt.prototype._convertLatLngs.call(this, t), i = e.length;
          return i >= 2 && e[0] instanceof H && e[0].equals(e[i - 1]) && e.pop(), e;
        },
        _setLatLngs: function(t) {
          wt.prototype._setLatLngs.call(this, t), ct(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return ct(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var t = this._renderer._bounds, e = this.options.weight, i = new E(e, e);
          if (t = new G(t.min.subtract(i), t.max.add(i)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var n = 0, o = this._rings.length, s; n < o; n++)
              s = Ki(this._rings[n], t, !0), s.length && this._parts.push(s);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t) {
          var e = !1, i, n, o, s, h, f, p, y;
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (s = 0, p = this._parts.length; s < p; s++)
            for (i = this._parts[s], h = 0, y = i.length, f = y - 1; h < y; f = h++)
              n = i[h], o = i[f], n.y > t.y != o.y > t.y && t.x < (o.x - n.x) * (t.y - n.y) / (o.y - n.y) + n.x && (e = !e);
          return e || wt.prototype._containsPoint.call(this, t, !0);
        }
      });
      function Zo(t, e) {
        return new Dt(t, e);
      }
      var bt = xt.extend({
        /* @section
         * @aka GeoJSON options
         *
         * @option pointToLayer: Function = *
         * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
         * called when data is added, passing the GeoJSON point feature and its `LatLng`.
         * The default is to spawn a default `Marker`:
         * ```js
         * function(geoJsonPoint, latlng) {
         * 	return L.marker(latlng);
         * }
         * ```
         *
         * @option style: Function = *
         * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
         * called internally when data is added.
         * The default value is to not override any defaults:
         * ```js
         * function (geoJsonFeature) {
         * 	return {}
         * }
         * ```
         *
         * @option onEachFeature: Function = *
         * A `Function` that will be called once for each created `Feature`, after it has
         * been created and styled. Useful for attaching events and popups to features.
         * The default is to do nothing with the newly created layers:
         * ```js
         * function (feature, layer) {}
         * ```
         *
         * @option filter: Function = *
         * A `Function` that will be used to decide whether to include a feature or not.
         * The default is to include all features:
         * ```js
         * function (geoJsonFeature) {
         * 	return true;
         * }
         * ```
         * Note: dynamically changing the `filter` option will have effect only on newly
         * added data. It will _not_ re-evaluate already included features.
         *
         * @option coordsToLatLng: Function = *
         * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
         * The default is the `coordsToLatLng` static method.
         *
         * @option markersInheritOptions: Boolean = false
         * Whether default Markers for "Point" type Features inherit from group options.
         */
        initialize: function(t, e) {
          w(this, e), this._layers = {}, t && this.addData(t);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(t) {
          var e = U(t) ? t : t.features, i, n, o;
          if (e) {
            for (i = 0, n = e.length; i < n; i++)
              o = e[i], (o.geometries || o.geometry || o.features || o.coordinates) && this.addData(o);
            return this;
          }
          var s = this.options;
          if (s.filter && !s.filter(t))
            return this;
          var h = me(t, s);
          return h ? (h.feature = ye(t), h.defaultOptions = h.options, this.resetStyle(h), s.onEachFeature && s.onEachFeature(t, h), this.addLayer(h)) : this;
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(t) {
          return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = k({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
        },
        // @method setStyle( <Function> style ): this
        // Changes styles of GeoJSON vector layers with the given style function.
        setStyle: function(t) {
          return this.eachLayer(function(e) {
            this._setLayerStyle(e, t);
          }, this);
        },
        _setLayerStyle: function(t, e) {
          t.setStyle && (typeof e == "function" && (e = e(t.feature)), t.setStyle(e));
        }
      });
      function me(t, e) {
        var i = t.type === "Feature" ? t.geometry : t, n = i ? i.coordinates : null, o = [], s = e && e.pointToLayer, h = e && e.coordsToLatLng || ii, f, p, y, C;
        if (!n && !i)
          return null;
        switch (i.type) {
          case "Point":
            return f = h(n), rn(s, t, f, e);
          case "MultiPoint":
            for (y = 0, C = n.length; y < C; y++)
              f = h(n[y]), o.push(rn(s, t, f, e));
            return new xt(o);
          case "LineString":
          case "MultiLineString":
            return p = ge(n, i.type === "LineString" ? 0 : 1, h), new wt(p, e);
          case "Polygon":
          case "MultiPolygon":
            return p = ge(n, i.type === "Polygon" ? 1 : 2, h), new Dt(p, e);
          case "GeometryCollection":
            for (y = 0, C = i.geometries.length; y < C; y++) {
              var A = me({
                geometry: i.geometries[y],
                type: "Feature",
                properties: t.properties
              }, e);
              A && o.push(A);
            }
            return new xt(o);
          case "FeatureCollection":
            for (y = 0, C = i.features.length; y < C; y++) {
              var Z = me(i.features[y], e);
              Z && o.push(Z);
            }
            return new xt(o);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function rn(t, e, i, n) {
        return t ? t(e, i) : new _e(i, n && n.markersInheritOptions && n);
      }
      function ii(t) {
        return new H(t[1], t[0], t[2]);
      }
      function ge(t, e, i) {
        for (var n = [], o = 0, s = t.length, h; o < s; o++)
          h = e ? ge(t[o], e - 1, i) : (i || ii)(t[o]), n.push(h);
        return n;
      }
      function ni(t, e) {
        return t = B(t), t.alt !== void 0 ? [g(t.lng, e), g(t.lat, e), g(t.alt, e)] : [g(t.lng, e), g(t.lat, e)];
      }
      function ve(t, e, i, n) {
        for (var o = [], s = 0, h = t.length; s < h; s++)
          o.push(e ? ve(t[s], ct(t[s]) ? 0 : e - 1, i, n) : ni(t[s], n));
        return !e && i && o.length > 0 && o.push(o[0].slice()), o;
      }
      function Ft(t, e) {
        return t.feature ? k({}, t.feature, { geometry: e }) : ye(e);
      }
      function ye(t) {
        return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
          type: "Feature",
          properties: {},
          geometry: t
        };
      }
      var oi = {
        toGeoJSON: function(t) {
          return Ft(this, {
            type: "Point",
            coordinates: ni(this.getLatLng(), t)
          });
        }
      };
      _e.include(oi), ei.include(oi), pe.include(oi), wt.include({
        toGeoJSON: function(t) {
          var e = !ct(this._latlngs), i = ve(this._latlngs, e ? 1 : 0, !1, t);
          return Ft(this, {
            type: (e ? "Multi" : "") + "LineString",
            coordinates: i
          });
        }
      }), Dt.include({
        toGeoJSON: function(t) {
          var e = !ct(this._latlngs), i = e && !ct(this._latlngs[0]), n = ve(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
          return e || (n = [n]), Ft(this, {
            type: (i ? "Multi" : "") + "Polygon",
            coordinates: n
          });
        }
      }), Rt.include({
        toMultiPoint: function(t) {
          var e = [];
          return this.eachLayer(function(i) {
            e.push(i.toGeoJSON(t).geometry.coordinates);
          }), Ft(this, {
            type: "MultiPoint",
            coordinates: e
          });
        },
        // @method toGeoJSON(precision?: Number|false): Object
        // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
        // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
        toGeoJSON: function(t) {
          var e = this.feature && this.feature.geometry && this.feature.geometry.type;
          if (e === "MultiPoint")
            return this.toMultiPoint(t);
          var i = e === "GeometryCollection", n = [];
          return this.eachLayer(function(o) {
            if (o.toGeoJSON) {
              var s = o.toGeoJSON(t);
              if (i)
                n.push(s.geometry);
              else {
                var h = ye(s);
                h.type === "FeatureCollection" ? n.push.apply(n, h.features) : n.push(h);
              }
            }
          }), i ? Ft(this, {
            geometries: n,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: n
          };
        }
      });
      function sn(t, e) {
        return new bt(t, e);
      }
      var Bo = sn, Le = _t.extend({
        // @section
        // @aka ImageOverlay options
        options: {
          // @option opacity: Number = 1.0
          // The opacity of the image overlay.
          opacity: 1,
          // @option alt: String = ''
          // Text for the `alt` attribute of the image (useful for accessibility).
          alt: "",
          // @option interactive: Boolean = false
          // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
          interactive: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the image.
          // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option errorOverlayUrl: String = ''
          // URL to the overlay image to show in place of the overlay that failed to load.
          errorOverlayUrl: "",
          // @option zIndex: Number = 1
          // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
          zIndex: 1,
          // @option className: String = ''
          // A custom class name to assign to the image. Empty by default.
          className: ""
        },
        initialize: function(t, e, i) {
          this._url = t, this._bounds = j(e), w(this, i);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (I(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          q(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        // @method setOpacity(opacity: Number): this
        // Sets the opacity of the overlay.
        setOpacity: function(t) {
          return this.options.opacity = t, this._image && this._updateOpacity(), this;
        },
        setStyle: function(t) {
          return t.opacity && this.setOpacity(t.opacity), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all overlays.
        bringToFront: function() {
          return this._map && Zt(this._image), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
          return this._map && Bt(this._image), this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(t) {
          return this._url = t, this._image && (this._image.src = t), this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(t) {
          return this._bounds = j(t), this._map && this._reset(), this;
        },
        getEvents: function() {
          var t = {
            zoom: this._reset,
            viewreset: this._reset
          };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        // @method setZIndex(value: Number): this
        // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
        setZIndex: function(t) {
          return this.options.zIndex = t, this._updateZIndex(), this;
        },
        // @method getBounds(): LatLngBounds
        // Get the bounds that this ImageOverlay covers
        getBounds: function() {
          return this._bounds;
        },
        // @method getElement(): HTMLElement
        // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
        // used by this overlay.
        getElement: function() {
          return this._image;
        },
        _initImage: function() {
          var t = this._url.tagName === "IMG", e = this._image = t ? this._url : N("img");
          if (I(e, "leaflet-image-layer"), this._zoomAnimated && I(e, "leaflet-zoom-animated"), this.options.className && I(e, this.options.className), e.onselectstart = c, e.onmousemove = c, e.onload = a(this.fire, this, "load"), e.onerror = a(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
            this._url = e.src;
            return;
          }
          e.src = this._url, e.alt = this.options.alt;
        },
        _animateZoom: function(t) {
          var e = this._map.getZoomScale(t.zoom), i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
          St(this._image, i, e);
        },
        _reset: function() {
          var t = this._image, e = new G(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), i = e.getSize();
          K(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
        },
        _updateOpacity: function() {
          ut(this._image, this.options.opacity);
        },
        _updateZIndex: function() {
          this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function() {
          this.fire("error");
          var t = this.options.errorOverlayUrl;
          t && this._url !== t && (this._url = t, this._image.src = t);
        },
        // @method getCenter(): LatLng
        // Returns the center of the ImageOverlay.
        getCenter: function() {
          return this._bounds.getCenter();
        }
      }), Ro = function(t, e, i) {
        return new Le(t, e, i);
      }, an = Le.extend({
        // @section
        // @aka VideoOverlay options
        options: {
          // @option autoplay: Boolean = true
          // Whether the video starts playing automatically when loaded.
          // On some browsers autoplay will only work with `muted: true`
          autoplay: !0,
          // @option loop: Boolean = true
          // Whether the video will loop back to the beginning when played.
          loop: !0,
          // @option keepAspectRatio: Boolean = true
          // Whether the video will save aspect ratio after the projection.
          // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
          keepAspectRatio: !0,
          // @option muted: Boolean = false
          // Whether the video starts on mute when loaded.
          muted: !1,
          // @option playsInline: Boolean = true
          // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
          playsInline: !0
        },
        _initImage: function() {
          var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : N("video");
          if (I(e, "leaflet-image-layer"), this._zoomAnimated && I(e, "leaflet-zoom-animated"), this.options.className && I(e, this.options.className), e.onselectstart = c, e.onmousemove = c, e.onloadeddata = a(this.fire, this, "load"), t) {
            for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++)
              n.push(i[o].src);
            this._url = i.length > 0 ? n : [e.src];
            return;
          }
          U(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
          for (var s = 0; s < this._url.length; s++) {
            var h = N("source");
            h.src = this._url[s], e.appendChild(h);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function No(t, e, i) {
        return new an(t, e, i);
      }
      var ln = Le.extend({
        _initImage: function() {
          var t = this._image = this._url;
          I(t, "leaflet-image-layer"), this._zoomAnimated && I(t, "leaflet-zoom-animated"), this.options.className && I(t, this.options.className), t.onselectstart = c, t.onmousemove = c;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function Do(t, e, i) {
        return new ln(t, e, i);
      }
      var vt = _t.extend({
        // @section
        // @aka DivOverlay options
        options: {
          // @option interactive: Boolean = false
          // If true, the popup/tooltip will listen to the mouse events.
          interactive: !1,
          // @option offset: Point = Point(0, 0)
          // The offset of the overlay position.
          offset: [0, 0],
          // @option className: String = ''
          // A custom CSS class name to assign to the overlay.
          className: "",
          // @option pane: String = undefined
          // `Map pane` where the overlay will be added.
          pane: void 0,
          // @option content: String|HTMLElement|Function = ''
          // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
          // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
          content: ""
        },
        initialize: function(t, e) {
          t && (t instanceof H || U(t)) ? (this._latlng = B(t), w(this, e)) : (w(this, t), this._source = e), this.options.content && (this._content = this.options.content);
        },
        // @method openOn(map: Map): this
        // Adds the overlay to the map.
        // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
        openOn: function(t) {
          return t = arguments.length ? t : this._source._map, t.hasLayer(this) || t.addLayer(this), this;
        },
        // @method close(): this
        // Closes the overlay.
        // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
        // and `layer.closePopup()`/`.closeTooltip()`.
        close: function() {
          return this._map && this._map.removeLayer(this), this;
        },
        // @method toggle(layer?: Layer): this
        // Opens or closes the overlay bound to layer depending on its current state.
        // Argument may be omitted only for overlay bound to layer.
        // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
        toggle: function(t) {
          return this._map ? this.close() : (arguments.length ? this._source = t : t = this._source, this._prepareOpen(), this.openOn(t._map)), this;
        },
        onAdd: function(t) {
          this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && ut(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && ut(this._container, 1), this.bringToFront(), this.options.interactive && (I(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(t) {
          t._fadeAnimated ? (ut(this._container, 0), this._removeTimeout = setTimeout(a(q, void 0, this._container), 200)) : q(this._container), this.options.interactive && (V(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
        },
        // @namespace DivOverlay
        // @method getLatLng: LatLng
        // Returns the geographical point of the overlay.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Sets the geographical point where the overlay will open.
        setLatLng: function(t) {
          return this._latlng = B(t), this._map && (this._updatePosition(), this._adjustPan()), this;
        },
        // @method getContent: String|HTMLElement
        // Returns the content of the overlay.
        getContent: function() {
          return this._content;
        },
        // @method setContent(htmlContent: String|HTMLElement|Function): this
        // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
        // The function should return a `String` or `HTMLElement` to be used in the overlay.
        setContent: function(t) {
          return this._content = t, this.update(), this;
        },
        // @method getElement: String|HTMLElement
        // Returns the HTML container of the overlay.
        getElement: function() {
          return this._container;
        },
        // @method update: null
        // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
        update: function() {
          this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
        },
        getEvents: function() {
          var t = {
            zoom: this._updatePosition,
            viewreset: this._updatePosition
          };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        // @method isOpen: Boolean
        // Returns `true` when the overlay is visible on the map.
        isOpen: function() {
          return !!this._map && this._map.hasLayer(this);
        },
        // @method bringToFront: this
        // Brings this overlay in front of other overlays (in the same map pane).
        bringToFront: function() {
          return this._map && Zt(this._container), this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
          return this._map && Bt(this._container), this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(t) {
          var e = this._source;
          if (!e._map)
            return !1;
          if (e instanceof xt) {
            e = null;
            var i = this._source._layers;
            for (var n in i)
              if (i[n]._map) {
                e = i[n];
                break;
              }
            if (!e)
              return !1;
            this._source = e;
          }
          if (!t)
            if (e.getCenter)
              t = e.getCenter();
            else if (e.getLatLng)
              t = e.getLatLng();
            else if (e.getBounds)
              t = e.getBounds().getCenter();
            else
              throw new Error("Unable to get source layer LatLng.");
          return this.setLatLng(t), this._map && this.update(), !0;
        },
        _updateContent: function() {
          if (this._content) {
            var t = this._contentNode, e = typeof this._content == "function" ? this._content(this._source || this) : this._content;
            if (typeof e == "string")
              t.innerHTML = e;
            else {
              for (; t.hasChildNodes(); )
                t.removeChild(t.firstChild);
              t.appendChild(e);
            }
            this.fire("contentupdate");
          }
        },
        _updatePosition: function() {
          if (this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng), e = z(this.options.offset), i = this._getAnchor();
            this._zoomAnimated ? K(this._container, t.add(i)) : e = e.add(t).add(i);
            var n = this._containerBottom = -e.y, o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
            this._container.style.bottom = n + "px", this._container.style.left = o + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      R.include({
        _initOverlay: function(t, e, i, n) {
          var o = e;
          return o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o;
        }
      }), _t.include({
        _initOverlay: function(t, e, i, n) {
          var o = i;
          return o instanceof t ? (w(o, n), o._source = this) : (o = e && !n ? e : new t(n, this), o.setContent(i)), o;
        }
      });
      var xe = vt.extend({
        // @section
        // @aka Popup options
        options: {
          // @option pane: String = 'popupPane'
          // `Map pane` where the popup will be added.
          pane: "popupPane",
          // @option offset: Point = Point(0, 7)
          // The offset of the popup position.
          offset: [0, 7],
          // @option maxWidth: Number = 300
          // Max width of the popup, in pixels.
          maxWidth: 300,
          // @option minWidth: Number = 50
          // Min width of the popup, in pixels.
          minWidth: 50,
          // @option maxHeight: Number = null
          // If set, creates a scrollable container of the given height
          // inside a popup if its content exceeds it.
          // The scrollable container can be styled using the
          // `leaflet-popup-scrolled` CSS class selector.
          maxHeight: null,
          // @option autoPan: Boolean = true
          // Set it to `false` if you don't want the map to do panning animation
          // to fit the opened popup.
          autoPan: !0,
          // @option autoPanPaddingTopLeft: Point = null
          // The margin between the popup and the top left corner of the map
          // view after autopanning was performed.
          autoPanPaddingTopLeft: null,
          // @option autoPanPaddingBottomRight: Point = null
          // The margin between the popup and the bottom right corner of the map
          // view after autopanning was performed.
          autoPanPaddingBottomRight: null,
          // @option autoPanPadding: Point = Point(5, 5)
          // Equivalent of setting both top left and bottom right autopan padding to the same value.
          autoPanPadding: [5, 5],
          // @option keepInView: Boolean = false
          // Set it to `true` if you want to prevent users from panning the popup
          // off of the screen while it is open.
          keepInView: !1,
          // @option closeButton: Boolean = true
          // Controls the presence of a close button in the popup.
          closeButton: !0,
          // @option autoClose: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the popup closing when another popup is opened.
          autoClose: !0,
          // @option closeOnEscapeKey: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the ESC key for closing of the popup.
          closeOnEscapeKey: !0,
          // @option closeOnClick: Boolean = *
          // Set it if you want to override the default behavior of the popup closing when user clicks
          // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
          // @option className: String = ''
          // A custom CSS class name to assign to the popup.
          className: ""
        },
        // @namespace Popup
        // @method openOn(map: Map): this
        // Alternative to `map.openPopup(popup)`.
        // Adds the popup to the map and closes the previous one.
        openOn: function(t) {
          return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, vt.prototype.openOn.call(this, t);
        },
        onAdd: function(t) {
          vt.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Mt || this._source.on("preclick", zt));
        },
        onRemove: function(t) {
          vt.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Mt || this._source.off("preclick", zt));
        },
        getEvents: function() {
          var t = vt.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
        },
        _initLayout: function() {
          var t = "leaflet-popup", e = this._container = N(
            "div",
            t + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), i = this._wrapper = N("div", t + "-content-wrapper", e);
          if (this._contentNode = N("div", t + "-content", i), Jt(e), je(this._contentNode), O(e, "contextmenu", zt), this._tipContainer = N("div", t + "-tip-container", e), this._tip = N("div", t + "-tip", this._tipContainer), this.options.closeButton) {
            var n = this._closeButton = N("a", t + "-close-button", e);
            n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', O(n, "click", function(o) {
              J(o), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var t = this._contentNode, e = t.style;
          e.width = "", e.whiteSpace = "nowrap";
          var i = t.offsetWidth;
          i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
          var n = t.offsetHeight, o = this.options.maxHeight, s = "leaflet-popup-scrolled";
          o && n > o ? (e.height = o + "px", I(t, s)) : V(t, s), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), i = this._getAnchor();
          K(this._container, e.add(i));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var t = this._map, e = parseInt(jt(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + e, n = this._containerWidth, o = new E(this._containerLeft, -i - this._containerBottom);
            o._add(At(this._container));
            var s = t.layerPointToContainerPoint(o), h = z(this.options.autoPanPadding), f = z(this.options.autoPanPaddingTopLeft || h), p = z(this.options.autoPanPaddingBottomRight || h), y = t.getSize(), C = 0, A = 0;
            s.x + n + p.x > y.x && (C = s.x + n - y.x + p.x), s.x - C - f.x < 0 && (C = s.x - f.x), s.y + i + p.y > y.y && (A = s.y + i - y.y + p.y), s.y - A - f.y < 0 && (A = s.y - f.y), (C || A) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([C, A]));
          }
        },
        _getAnchor: function() {
          return z(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), Fo = function(t, e) {
        return new xe(t, e);
      };
      R.mergeOptions({
        closePopupOnClick: !0
      }), R.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(t, e, i) {
          return this._initOverlay(xe, t, e, i).openOn(this), this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(t) {
          return t = arguments.length ? t : this._popup, t && t.close(), this;
        }
      }), _t.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(t, e) {
          return this._popup = this._initOverlay(xe, this._popup, t, e), this._popupHandlersAdded || (this.on({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !0), this;
        },
        // @method unbindPopup(): this
        // Removes the popup previously bound with `bindPopup`.
        unbindPopup: function() {
          return this._popup && (this.off({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !1, this._popup = null), this;
        },
        // @method openPopup(latlng?: LatLng): this
        // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
        openPopup: function(t) {
          return this._popup && (this instanceof xt || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
        },
        // @method closePopup(): this
        // Closes the popup bound to this layer if it is open.
        closePopup: function() {
          return this._popup && this._popup.close(), this;
        },
        // @method togglePopup(): this
        // Opens or closes the popup bound to this layer depending on its current state.
        togglePopup: function() {
          return this._popup && this._popup.toggle(this), this;
        },
        // @method isPopupOpen(): boolean
        // Returns `true` if the popup bound to this layer is currently open.
        isPopupOpen: function() {
          return this._popup ? this._popup.isOpen() : !1;
        },
        // @method setPopupContent(content: String|HTMLElement|Popup): this
        // Sets the content of the popup bound to this layer.
        setPopupContent: function(t) {
          return this._popup && this._popup.setContent(t), this;
        },
        // @method getPopup(): Popup
        // Returns the popup bound to this layer.
        getPopup: function() {
          return this._popup;
        },
        _openPopup: function(t) {
          if (!(!this._popup || !this._map)) {
            Et(t);
            var e = t.layer || t.target;
            if (this._popup._source === e && !(e instanceof Mt)) {
              this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(t.latlng);
              return;
            }
            this._popup._source = e, this.openPopup(t.latlng);
          }
        },
        _movePopup: function(t) {
          this._popup.setLatLng(t.latlng);
        },
        _onKeyPress: function(t) {
          t.originalEvent.keyCode === 13 && this._openPopup(t);
        }
      });
      var we = vt.extend({
        // @section
        // @aka Tooltip options
        options: {
          // @option pane: String = 'tooltipPane'
          // `Map pane` where the tooltip will be added.
          pane: "tooltipPane",
          // @option offset: Point = Point(0, 0)
          // Optional offset of the tooltip position.
          offset: [0, 0],
          // @option direction: String = 'auto'
          // Direction where to open the tooltip. Possible values are: `right`, `left`,
          // `top`, `bottom`, `center`, `auto`.
          // `auto` will dynamically switch between `right` and `left` according to the tooltip
          // position on the map.
          direction: "auto",
          // @option permanent: Boolean = false
          // Whether to open the tooltip permanently or only on mouseover.
          permanent: !1,
          // @option sticky: Boolean = false
          // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
          sticky: !1,
          // @option opacity: Number = 0.9
          // Tooltip container opacity.
          opacity: 0.9
        },
        onAdd: function(t) {
          vt.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(t) {
          vt.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var t = vt.prototype.getEvents.call(this);
          return this.options.permanent || (t.preclick = this.close), t;
        },
        _initLayout: function() {
          var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = N("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + u(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(t) {
          var e, i, n = this._map, o = this._container, s = n.latLngToContainerPoint(n.getCenter()), h = n.layerPointToContainerPoint(t), f = this.options.direction, p = o.offsetWidth, y = o.offsetHeight, C = z(this.options.offset), A = this._getAnchor();
          f === "top" ? (e = p / 2, i = y) : f === "bottom" ? (e = p / 2, i = 0) : f === "center" ? (e = p / 2, i = y / 2) : f === "right" ? (e = 0, i = y / 2) : f === "left" ? (e = p, i = y / 2) : h.x < s.x ? (f = "right", e = 0, i = y / 2) : (f = "left", e = p + (C.x + A.x) * 2, i = y / 2), t = t.subtract(z(e, i, !0)).add(C).add(A), V(o, "leaflet-tooltip-right"), V(o, "leaflet-tooltip-left"), V(o, "leaflet-tooltip-top"), V(o, "leaflet-tooltip-bottom"), I(o, "leaflet-tooltip-" + f), K(o, t);
        },
        _updatePosition: function() {
          var t = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t);
        },
        setOpacity: function(t) {
          this.options.opacity = t, this._container && ut(this._container, t);
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
          this._setPosition(e);
        },
        _getAnchor: function() {
          return z(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), Ho = function(t, e) {
        return new we(t, e);
      };
      R.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(t, e, i) {
          return this._initOverlay(we, t, e, i).openOn(this), this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(t) {
          return t.close(), this;
        }
      }), _t.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(t, e) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(we, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
        },
        // @method unbindTooltip(): this
        // Removes the tooltip previously bound with `bindTooltip`.
        unbindTooltip: function() {
          return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
        },
        _initTooltipInteractions: function(t) {
          if (!(!t && this._tooltipHandlersAdded)) {
            var e = t ? "off" : "on", i = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
            this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, i.click = this._openTooltip, this._map ? this._addFocusListeners() : i.add = this._addFocusListeners), this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), this[e](i), this._tooltipHandlersAdded = !t;
          }
        },
        // @method openTooltip(latlng?: LatLng): this
        // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
        openTooltip: function(t) {
          return this._tooltip && (this instanceof xt || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
        },
        // @method closeTooltip(): this
        // Closes the tooltip bound to this layer if it is open.
        closeTooltip: function() {
          if (this._tooltip)
            return this._tooltip.close();
        },
        // @method toggleTooltip(): this
        // Opens or closes the tooltip bound to this layer depending on its current state.
        toggleTooltip: function() {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        // @method isTooltipOpen(): boolean
        // Returns `true` if the tooltip bound to this layer is currently open.
        isTooltipOpen: function() {
          return this._tooltip.isOpen();
        },
        // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
        // Sets the content of the tooltip bound to this layer.
        setTooltipContent: function(t) {
          return this._tooltip && this._tooltip.setContent(t), this;
        },
        // @method getTooltip(): Tooltip
        // Returns the tooltip bound to this layer.
        getTooltip: function() {
          return this._tooltip;
        },
        _addFocusListeners: function() {
          this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function(t) {
          var e = typeof t.getElement == "function" && t.getElement();
          e && (O(e, "focus", function() {
            this._tooltip._source = t, this.openTooltip();
          }, this), O(e, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function(t) {
          var e = typeof t.getElement == "function" && t.getElement();
          e && e.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function(t) {
          if (!(!this._tooltip || !this._map)) {
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
              this._openOnceFlag = !0;
              var e = this;
              this._map.once("moveend", function() {
                e._openOnceFlag = !1, e._openTooltip(t);
              });
              return;
            }
            this._tooltip._source = t.layer || t.target, this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0);
          }
        },
        _moveTooltip: function(t) {
          var e = t.latlng, i, n;
          this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), n = this._map.containerPointToLayerPoint(i), e = this._map.layerPointToLatLng(n)), this._tooltip.setLatLng(e);
        }
      });
      var hn = Nt.extend({
        options: {
          // @section
          // @aka DivIcon options
          iconSize: [12, 12],
          // also can be set through CSS
          // iconAnchor: (Point),
          // popupAnchor: (Point),
          // @option html: String|HTMLElement = ''
          // Custom HTML code to put inside the div element, empty by default. Alternatively,
          // an instance of `HTMLElement`.
          html: !1,
          // @option bgPos: Point = [0, 0]
          // Optional relative position of the background, in pixels
          bgPos: null,
          className: "leaflet-div-icon"
        },
        createIcon: function(t) {
          var e = t && t.tagName === "DIV" ? t : document.createElement("div"), i = this.options;
          if (i.html instanceof Element ? (le(e), e.appendChild(i.html)) : e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos) {
            var n = z(i.bgPos);
            e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
          }
          return this._setIconStyles(e, "icon"), e;
        },
        createShadow: function() {
          return null;
        }
      });
      function Uo(t) {
        return new hn(t);
      }
      Nt.Default = te;
      var ee = _t.extend({
        // @section
        // @aka GridLayer options
        options: {
          // @option tileSize: Number|Point = 256
          // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
          tileSize: 256,
          // @option opacity: Number = 1.0
          // Opacity of the tiles. Can be used in the `createTile()` function.
          opacity: 1,
          // @option updateWhenIdle: Boolean = (depends)
          // Load new tiles only when panning ends.
          // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
          // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
          // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
          updateWhenIdle: M.mobile,
          // @option updateWhenZooming: Boolean = true
          // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
          updateWhenZooming: !0,
          // @option updateInterval: Number = 200
          // Tiles will not update more than once every `updateInterval` milliseconds when panning.
          updateInterval: 200,
          // @option zIndex: Number = 1
          // The explicit zIndex of the tile layer.
          zIndex: 1,
          // @option bounds: LatLngBounds = undefined
          // If set, tiles will only be loaded inside the set `LatLngBounds`.
          bounds: null,
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = undefined
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: void 0,
          // @option maxNativeZoom: Number = undefined
          // Maximum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
          // from `maxNativeZoom` level and auto-scaled.
          maxNativeZoom: void 0,
          // @option minNativeZoom: Number = undefined
          // Minimum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
          // from `minNativeZoom` level and auto-scaled.
          minNativeZoom: void 0,
          // @option noWrap: Boolean = false
          // Whether the layer is wrapped around the antimeridian. If `true`, the
          // GridLayer will only be displayed once at low zoom levels. Has no
          // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
          // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
          // tiles outside the CRS limits.
          noWrap: !1,
          // @option pane: String = 'tilePane'
          // `Map pane` where the grid layer will be added.
          pane: "tilePane",
          // @option className: String = ''
          // A custom class name to assign to the tile layer. Empty by default.
          className: "",
          // @option keepBuffer: Number = 2
          // When panning the map, keep this many rows and columns of tiles before unloading them.
          keepBuffer: 2
        },
        initialize: function(t) {
          w(this, t);
        },
        onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        },
        beforeAdd: function(t) {
          t._addZoomLimit(this);
        },
        onRemove: function(t) {
          this._removeAllTiles(), q(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (Zt(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && (Bt(this._container), this._setAutoZIndex(Math.min)), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the tiles for this layer.
        getContainer: function() {
          return this._container;
        },
        // @method setOpacity(opacity: Number): this
        // Changes the [opacity](#gridlayer-opacity) of the grid layer.
        setOpacity: function(t) {
          return this.options.opacity = t, this._updateOpacity(), this;
        },
        // @method setZIndex(zIndex: Number): this
        // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
        setZIndex: function(t) {
          return this.options.zIndex = t, this._updateZIndex(), this;
        },
        // @method isLoading: Boolean
        // Returns `true` if any tile in the grid layer has not finished loading.
        isLoading: function() {
          return this._loading;
        },
        // @method redraw: this
        // Causes the layer to clear all the tiles and request them again.
        redraw: function() {
          if (this._map) {
            this._removeAllTiles();
            var t = this._clampZoom(this._map.getZoom());
            t !== this._tileZoom && (this._tileZoom = t, this._updateLevels()), this._update();
          }
          return this;
        },
        getEvents: function() {
          var t = {
            viewprereset: this._invalidateAll,
            viewreset: this._resetView,
            zoom: this._resetView,
            moveend: this._onMoveEnd
          };
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = d(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        // @section Extension methods
        // Layers extending `GridLayer` shall reimplement the following method.
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, must be overridden by classes extending `GridLayer`.
        // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
        // is specified, it must be called when the tile has finished loading and drawing.
        createTile: function() {
          return document.createElement("div");
        },
        // @section
        // @method getTileSize: Point
        // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
        getTileSize: function() {
          var t = this.options.tileSize;
          return t instanceof E ? t : new E(t, t);
        },
        _updateZIndex: function() {
          this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex: function(t) {
          for (var e = this.getPane().children, i = -t(-1 / 0, 1 / 0), n = 0, o = e.length, s; n < o; n++)
            s = e[n].style.zIndex, e[n] !== this._container && s && (i = t(i, +s));
          isFinite(i) && (this.options.zIndex = i + t(-1, 1), this._updateZIndex());
        },
        _updateOpacity: function() {
          if (this._map && !M.ielt9) {
            ut(this._container, this.options.opacity);
            var t = +/* @__PURE__ */ new Date(), e = !1, i = !1;
            for (var n in this._tiles) {
              var o = this._tiles[n];
              if (!(!o.current || !o.loaded)) {
                var s = Math.min(1, (t - o.loaded) / 200);
                ut(o.el, s), s < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o), o.active = !0);
              }
            }
            i && !this._noPrune && this._pruneTiles(), e && (ht(this._fadeFrame), this._fadeFrame = ot(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: c,
        _initContainer: function() {
          this._container || (this._container = N("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var t = this._tileZoom, e = this.options.maxZoom;
          if (t !== void 0) {
            for (var i in this._levels)
              i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (q(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
            var n = this._levels[t], o = this._map;
            return n || (n = this._levels[t] = {}, n.el = N("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), c(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n;
          }
        },
        _onUpdateLevel: c,
        _onRemoveLevel: c,
        _onCreateLevel: c,
        _pruneTiles: function() {
          if (this._map) {
            var t, e, i = this._map.getZoom();
            if (i > this.options.maxZoom || i < this.options.minZoom) {
              this._removeAllTiles();
              return;
            }
            for (t in this._tiles)
              e = this._tiles[t], e.retain = e.current;
            for (t in this._tiles)
              if (e = this._tiles[t], e.current && !e.active) {
                var n = e.coords;
                this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2);
              }
            for (t in this._tiles)
              this._tiles[t].retain || this._removeTile(t);
          }
        },
        _removeTilesAtZoom: function(t) {
          for (var e in this._tiles)
            this._tiles[e].coords.z === t && this._removeTile(e);
        },
        _removeAllTiles: function() {
          for (var t in this._tiles)
            this._removeTile(t);
        },
        _invalidateAll: function() {
          for (var t in this._levels)
            q(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(t, e, i, n) {
          var o = Math.floor(t / 2), s = Math.floor(e / 2), h = i - 1, f = new E(+o, +s);
          f.z = +h;
          var p = this._tileCoordsToKey(f), y = this._tiles[p];
          return y && y.active ? (y.retain = !0, !0) : (y && y.loaded && (y.retain = !0), h > n ? this._retainParent(o, s, h, n) : !1);
        },
        _retainChildren: function(t, e, i, n) {
          for (var o = 2 * t; o < 2 * t + 2; o++)
            for (var s = 2 * e; s < 2 * e + 2; s++) {
              var h = new E(o, s);
              h.z = i + 1;
              var f = this._tileCoordsToKey(h), p = this._tiles[f];
              if (p && p.active) {
                p.retain = !0;
                continue;
              } else p && p.loaded && (p.retain = !0);
              i + 1 < n && this._retainChildren(o, s, i + 1, n);
            }
        },
        _resetView: function(t) {
          var e = t && (t.pinch || t.flyTo);
          this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
        },
        _animateZoom: function(t) {
          this._setView(t.center, t.zoom, !0, t.noUpdate);
        },
        _clampZoom: function(t) {
          var e = this.options;
          return e.minNativeZoom !== void 0 && t < e.minNativeZoom ? e.minNativeZoom : e.maxNativeZoom !== void 0 && e.maxNativeZoom < t ? e.maxNativeZoom : t;
        },
        _setView: function(t, e, i, n) {
          var o = Math.round(e);
          this.options.maxZoom !== void 0 && o > this.options.maxZoom || this.options.minZoom !== void 0 && o < this.options.minZoom ? o = void 0 : o = this._clampZoom(o);
          var s = this.options.updateWhenZooming && o !== this._tileZoom;
          (!n || s) && (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), o !== void 0 && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e);
        },
        _setZoomTransforms: function(t, e) {
          for (var i in this._levels)
            this._setZoomTransform(this._levels[i], t, e);
        },
        _setZoomTransform: function(t, e, i) {
          var n = this._map.getZoomScale(i, t.zoom), o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
          M.any3d ? St(t.el, o, n) : K(t.el, o);
        },
        _resetGrid: function() {
          var t = this._map, e = t.options.crs, i = this._tileSize = this.getTileSize(), n = this._tileZoom, o = this._map.getPixelWorldBounds(this._tileZoom);
          o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [
            Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
            Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)
          ], this._wrapY = e.wrapLat && !this.options.noWrap && [
            Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
            Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)
          ];
        },
        _onMoveEnd: function() {
          !this._map || this._map._animatingZoom || this._update();
        },
        _getTiledPixelBounds: function(t) {
          var e = this._map, i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(), n = e.getZoomScale(i, this._tileZoom), o = e.project(t, this._tileZoom).floor(), s = e.getSize().divideBy(n * 2);
          return new G(o.subtract(s), o.add(s));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(t) {
          var e = this._map;
          if (e) {
            var i = this._clampZoom(e.getZoom());
            if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
              var n = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(n), s = o.getCenter(), h = [], f = this.options.keepBuffer, p = new G(
                o.getBottomLeft().subtract([f, -f]),
                o.getTopRight().add([f, -f])
              );
              if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var y in this._tiles) {
                var C = this._tiles[y].coords;
                (C.z !== this._tileZoom || !p.contains(new E(C.x, C.y))) && (this._tiles[y].current = !1);
              }
              if (Math.abs(i - this._tileZoom) > 1) {
                this._setView(t, i);
                return;
              }
              for (var A = o.min.y; A <= o.max.y; A++)
                for (var Z = o.min.x; Z <= o.max.x; Z++) {
                  var et = new E(Z, A);
                  if (et.z = this._tileZoom, !!this._isValidTile(et)) {
                    var Q = this._tiles[this._tileCoordsToKey(et)];
                    Q ? Q.current = !0 : h.push(et);
                  }
                }
              if (h.sort(function(at, Ut) {
                return at.distanceTo(s) - Ut.distanceTo(s);
              }), h.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var ft = document.createDocumentFragment();
                for (Z = 0; Z < h.length; Z++)
                  this._addTile(h[Z], ft);
                this._level.el.appendChild(ft);
              }
            }
          }
        },
        _isValidTile: function(t) {
          var e = this._map.options.crs;
          if (!e.infinite) {
            var i = this._globalTileRange;
            if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
              return !1;
          }
          if (!this.options.bounds)
            return !0;
          var n = this._tileCoordsToBounds(t);
          return j(this.options.bounds).overlaps(n);
        },
        _keyToBounds: function(t) {
          return this._tileCoordsToBounds(this._keyToTileCoords(t));
        },
        _tileCoordsToNwSe: function(t) {
          var e = this._map, i = this.getTileSize(), n = t.scaleBy(i), o = n.add(i), s = e.unproject(n, t.z), h = e.unproject(o, t.z);
          return [s, h];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(t) {
          var e = this._tileCoordsToNwSe(t), i = new st(e[0], e[1]);
          return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(t) {
          return t.x + ":" + t.y + ":" + t.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(t) {
          var e = t.split(":"), i = new E(+e[0], +e[1]);
          return i.z = +e[2], i;
        },
        _removeTile: function(t) {
          var e = this._tiles[t];
          e && (q(e.el), delete this._tiles[t], this.fire("tileunload", {
            tile: e.el,
            coords: this._keyToTileCoords(t)
          }));
        },
        _initTile: function(t) {
          I(t, "leaflet-tile");
          var e = this.getTileSize();
          t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = c, t.onmousemove = c, M.ielt9 && this.options.opacity < 1 && ut(t, this.options.opacity);
        },
        _addTile: function(t, e) {
          var i = this._getTilePos(t), n = this._tileCoordsToKey(t), o = this.createTile(this._wrapCoords(t), a(this._tileReady, this, t));
          this._initTile(o), this.createTile.length < 2 && ot(a(this._tileReady, this, t, null, o)), K(o, i), this._tiles[n] = {
            el: o,
            coords: t,
            current: !0
          }, e.appendChild(o), this.fire("tileloadstart", {
            tile: o,
            coords: t
          });
        },
        _tileReady: function(t, e, i) {
          e && this.fire("tileerror", {
            error: e,
            tile: i,
            coords: t
          });
          var n = this._tileCoordsToKey(t);
          i = this._tiles[n], i && (i.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (ut(i.el, 0), ht(this._fadeFrame), this._fadeFrame = ot(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (I(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: i.el,
            coords: t
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), M.ielt9 || !this._map._fadeAnimated ? ot(this._pruneTiles, this) : setTimeout(a(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(t) {
          return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(t) {
          var e = new E(
            this._wrapX ? m(t.x, this._wrapX) : t.x,
            this._wrapY ? m(t.y, this._wrapY) : t.y
          );
          return e.z = t.z, e;
        },
        _pxBoundsToTileRange: function(t) {
          var e = this.getTileSize();
          return new G(
            t.min.unscaleBy(e).floor(),
            t.max.unscaleBy(e).ceil().subtract([1, 1])
          );
        },
        _noTilesToLoad: function() {
          for (var t in this._tiles)
            if (!this._tiles[t].loaded)
              return !1;
          return !0;
        }
      });
      function Wo(t) {
        return new ee(t);
      }
      var Ht = ee.extend({
        // @section
        // @aka TileLayer options
        options: {
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = 18
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: 18,
          // @option subdomains: String|String[] = 'abc'
          // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
          subdomains: "abc",
          // @option errorTileUrl: String = ''
          // URL to the tile image to show in place of the tile that failed to load.
          errorTileUrl: "",
          // @option zoomOffset: Number = 0
          // The zoom number used in tile URLs will be offset with this value.
          zoomOffset: 0,
          // @option tms: Boolean = false
          // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
          tms: !1,
          // @option zoomReverse: Boolean = false
          // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
          zoomReverse: !1,
          // @option detectRetina: Boolean = false
          // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
          detectRetina: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option referrerPolicy: Boolean|String = false
          // Whether the referrerPolicy attribute will be added to the tiles.
          // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
          // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
          // (e.g. to validate an API token).
          // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
          referrerPolicy: !1
        },
        initialize: function(t, e) {
          this._url = t, e = w(this, e), e.detectRetina && M.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
        },
        // @method setUrl(url: String, noRedraw?: Boolean): this
        // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
        // If the URL does not change, the layer will not be redrawn unless
        // the noRedraw parameter is set to false.
        setUrl: function(t, e) {
          return this._url === t && e === void 0 && (e = !0), this._url = t, e || this.redraw(), this;
        },
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
        // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
        // callback is called when the tile has been loaded.
        createTile: function(t, e) {
          var i = document.createElement("img");
          return O(i, "load", a(this._tileOnLoad, this, e, i)), O(i, "error", a(this._tileOnError, this, e, i)), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(t) {
          var e = {
            r: M.retina ? "@2x" : "",
            s: this._getSubdomain(t),
            x: t.x,
            y: t.y,
            z: this._getZoomForUrl()
          };
          if (this._map && !this._map.options.crs.infinite) {
            var i = this._globalTileRange.max.y - t.y;
            this.options.tms && (e.y = i), e["-y"] = i;
          }
          return D(this._url, k(e, this.options));
        },
        _tileOnLoad: function(t, e) {
          M.ielt9 ? setTimeout(a(t, this, null, e), 0) : t(null, e);
        },
        _tileOnError: function(t, e, i) {
          var n = this.options.errorTileUrl;
          n && e.getAttribute("src") !== n && (e.src = n), t(i, e);
        },
        _onTileRemove: function(t) {
          t.tile.onload = null;
        },
        _getZoomForUrl: function() {
          var t = this._tileZoom, e = this.options.maxZoom, i = this.options.zoomReverse, n = this.options.zoomOffset;
          return i && (t = e - t), t + n;
        },
        _getSubdomain: function(t) {
          var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
          return this.options.subdomains[e];
        },
        // stops loading all tiles in the background layer
        _abortLoading: function() {
          var t, e;
          for (t in this._tiles)
            if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = c, e.onerror = c, !e.complete)) {
              e.src = tt;
              var i = this._tiles[t].coords;
              q(e), delete this._tiles[t], this.fire("tileabort", {
                tile: e,
                coords: i
              });
            }
        },
        _removeTile: function(t) {
          var e = this._tiles[t];
          if (e)
            return e.el.setAttribute("src", tt), ee.prototype._removeTile.call(this, t);
        },
        _tileReady: function(t, e, i) {
          if (!(!this._map || i && i.getAttribute("src") === tt))
            return ee.prototype._tileReady.call(this, t, e, i);
        }
      });
      function un(t, e) {
        return new Ht(t, e);
      }
      var cn = Ht.extend({
        // @section
        // @aka TileLayer.WMS options
        // If any custom options not documented here are used, they will be sent to the
        // WMS server as extra parameters in each request URL. This can be useful for
        // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
        defaultWmsParams: {
          service: "WMS",
          request: "GetMap",
          // @option layers: String = ''
          // **(required)** Comma-separated list of WMS layers to show.
          layers: "",
          // @option styles: String = ''
          // Comma-separated list of WMS styles.
          styles: "",
          // @option format: String = 'image/jpeg'
          // WMS image format (use `'image/png'` for layers with transparency).
          format: "image/jpeg",
          // @option transparent: Boolean = false
          // If `true`, the WMS service will return images with transparency.
          transparent: !1,
          // @option version: String = '1.1.1'
          // Version of the WMS service to use
          version: "1.1.1"
        },
        options: {
          // @option crs: CRS = null
          // Coordinate Reference System to use for the WMS requests, defaults to
          // map CRS. Don't change this if you're not sure what it means.
          crs: null,
          // @option uppercase: Boolean = false
          // If `true`, WMS request parameter keys will be uppercase.
          uppercase: !1
        },
        initialize: function(t, e) {
          this._url = t;
          var i = k({}, this.defaultWmsParams);
          for (var n in e)
            n in this.options || (i[n] = e[n]);
          e = w(this, e);
          var o = e.detectRetina && M.retina ? 2 : 1, s = this.getTileSize();
          i.width = s.x * o, i.height = s.y * o, this.wmsParams = i;
        },
        onAdd: function(t) {
          this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[e] = this._crs.code, Ht.prototype.onAdd.call(this, t);
        },
        getTileUrl: function(t) {
          var e = this._tileCoordsToNwSe(t), i = this._crs, n = rt(i.project(e[0]), i.project(e[1])), o = n.min, s = n.max, h = (this._wmsVersion >= 1.3 && this._crs === nn ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","), f = Ht.prototype.getTileUrl.call(this, t);
          return f + F(this.wmsParams, f, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + h;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(t, e) {
          return k(this.wmsParams, t), e || this.redraw(), this;
        }
      });
      function Go(t, e) {
        return new cn(t, e);
      }
      Ht.WMS = cn, un.wms = Go;
      var Pt = _t.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(t) {
          w(this, t), u(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), I(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
        },
        onRemove: function() {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function() {
          var t = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd
          };
          return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
        },
        _onAnimZoom: function(t) {
          this._updateTransform(t.center, t.zoom);
        },
        _onZoom: function() {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function(t, e) {
          var i = this._map.getZoomScale(e, this._zoom), n = this._map.getSize().multiplyBy(0.5 + this.options.padding), o = this._map.project(this._center, e), s = n.multiplyBy(-i).add(o).subtract(this._map._getNewPixelOrigin(t, e));
          M.any3d ? St(this._container, s, i) : K(this._container, s);
        },
        _reset: function() {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var t in this._layers)
            this._layers[t]._reset();
        },
        _onZoomEnd: function() {
          for (var t in this._layers)
            this._layers[t]._project();
        },
        _updatePaths: function() {
          for (var t in this._layers)
            this._layers[t]._update();
        },
        _update: function() {
          var t = this.options.padding, e = this._map.getSize(), i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
          this._bounds = new G(i, i.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), fn = Pt.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var t = Pt.prototype.getEvents.call(this);
          return t.viewprereset = this._onViewPreReset, t;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          Pt.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var t = this._container = document.createElement("canvas");
          O(t, "mousemove", this._onMouseMove, this), O(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), O(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
        },
        _destroyContainer: function() {
          ht(this._redrawRequest), delete this._ctx, q(this._container), W(this._container), delete this._container;
        },
        _updatePaths: function() {
          if (!this._postponeUpdatePaths) {
            var t;
            this._redrawBounds = null;
            for (var e in this._layers)
              t = this._layers[e], t._update();
            this._redraw();
          }
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Pt.prototype._update.call(this);
            var t = this._bounds, e = this._container, i = t.getSize(), n = M.retina ? 2 : 1;
            K(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", M.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
          }
        },
        _reset: function() {
          Pt.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
        },
        _initPath: function(t) {
          this._updateDashArray(t), this._layers[u(t)] = t;
          var e = t._order = {
            layer: t,
            prev: this._drawLast,
            next: null
          };
          this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function(t) {
          this._requestRedraw(t);
        },
        _removePath: function(t) {
          var e = t._order, i = e.next, n = e.prev;
          i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[u(t)], this._requestRedraw(t);
        },
        _updatePath: function(t) {
          this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t);
        },
        _updateStyle: function(t) {
          this._updateDashArray(t), this._requestRedraw(t);
        },
        _updateDashArray: function(t) {
          if (typeof t.options.dashArray == "string") {
            var e = t.options.dashArray.split(/[, ]+/), i = [], n, o;
            for (o = 0; o < e.length; o++) {
              if (n = Number(e[o]), isNaN(n))
                return;
              i.push(n);
            }
            t.options._dashArray = i;
          } else
            t.options._dashArray = t.options.dashArray;
        },
        _requestRedraw: function(t) {
          this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || ot(this._redraw, this));
        },
        _extendRedrawBounds: function(t) {
          if (t._pxBounds) {
            var e = (t.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new G(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
          }
        },
        _redraw: function() {
          this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
        },
        _clear: function() {
          var t = this._redrawBounds;
          if (t) {
            var e = t.getSize();
            this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
          } else
            this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
        },
        _draw: function() {
          var t, e = this._redrawBounds;
          if (this._ctx.save(), e) {
            var i = e.getSize();
            this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip();
          }
          this._drawing = !0;
          for (var n = this._drawFirst; n; n = n.next)
            t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
          this._drawing = !1, this._ctx.restore();
        },
        _updatePoly: function(t, e) {
          if (this._drawing) {
            var i, n, o, s, h = t._parts, f = h.length, p = this._ctx;
            if (f) {
              for (p.beginPath(), i = 0; i < f; i++) {
                for (n = 0, o = h[i].length; n < o; n++)
                  s = h[i][n], p[n ? "lineTo" : "moveTo"](s.x, s.y);
                e && p.closePath();
              }
              this._fillStroke(p, t);
            }
          }
        },
        _updateCircle: function(t) {
          if (!(!this._drawing || t._empty())) {
            var e = t._point, i = this._ctx, n = Math.max(Math.round(t._radius), 1), o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
            o !== 1 && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, Math.PI * 2, !1), o !== 1 && i.restore(), this._fillStroke(i, t);
          }
        },
        _fillStroke: function(t, e) {
          var i = e.options;
          i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && i.weight !== 0 && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke());
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(t) {
          for (var e = this._map.mouseEventToLayerPoint(t), i, n, o = this._drawFirst; o; o = o.next)
            i = o.layer, i.options.interactive && i._containsPoint(e) && (!(t.type === "click" || t.type === "preclick") || !this._map._draggableMoved(i)) && (n = i);
          this._fireEvent(n ? [n] : !1, t);
        },
        _onMouseMove: function(t) {
          if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
            var e = this._map.mouseEventToLayerPoint(t);
            this._handleMouseHover(t, e);
          }
        },
        _handleMouseOut: function(t) {
          var e = this._hoveredLayer;
          e && (V(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(t, e) {
          if (!this._mouseHoverThrottled) {
            for (var i, n, o = this._drawFirst; o; o = o.next)
              i = o.layer, i.options.interactive && i._containsPoint(e) && (n = i);
            n !== this._hoveredLayer && (this._handleMouseOut(t), n && (I(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(a(function() {
              this._mouseHoverThrottled = !1;
            }, this), 32);
          }
        },
        _fireEvent: function(t, e, i) {
          this._map._fireDOMEvent(e, i || e.type, t);
        },
        _bringToFront: function(t) {
          var e = t._order;
          if (e) {
            var i = e.next, n = e.prev;
            if (i)
              i.prev = n;
            else
              return;
            n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t);
          }
        },
        _bringToBack: function(t) {
          var e = t._order;
          if (e) {
            var i = e.next, n = e.prev;
            if (n)
              n.next = i;
            else
              return;
            i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t);
          }
        }
      });
      function dn(t) {
        return M.canvas ? new fn(t) : null;
      }
      var ie = function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          };
        } catch {
        }
        return function(t) {
          return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }(), qo = {
        _initContainer: function() {
          this._container = N("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (Pt.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(t) {
          var e = t._container = ie("shape");
          I(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = ie("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[u(t)] = t;
        },
        _addPath: function(t) {
          var e = t._container;
          this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
        },
        _removePath: function(t) {
          var e = t._container;
          q(e), t.removeInteractiveTarget(e), delete this._layers[u(t)];
        },
        _updateStyle: function(t) {
          var e = t._stroke, i = t._fill, n = t.options, o = t._container;
          o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = ie("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = U(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = ie("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null);
        },
        _updateCircle: function(t) {
          var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
          this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0," + 65535 * 360);
        },
        _setPath: function(t, e) {
          t._path.v = e;
        },
        _bringToFront: function(t) {
          Zt(t._container);
        },
        _bringToBack: function(t) {
          Bt(t._container);
        }
      }, be = M.vml ? ie : mi, ne = Pt.extend({
        _initContainer: function() {
          this._container = be("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = be("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          q(this._container), W(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Pt.prototype._update.call(this);
            var t = this._bounds, e = t.getSize(), i = this._container;
            (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), K(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(t) {
          var e = t._path = be("path");
          t.options.className && I(e, t.options.className), t.options.interactive && I(e, "leaflet-interactive"), this._updateStyle(t), this._layers[u(t)] = t;
        },
        _addPath: function(t) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
        },
        _removePath: function(t) {
          q(t._path), t.removeInteractiveTarget(t._path), delete this._layers[u(t)];
        },
        _updatePath: function(t) {
          t._project(), t._update();
        },
        _updateStyle: function(t) {
          var e = t._path, i = t.options;
          e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
        },
        _updatePoly: function(t, e) {
          this._setPath(t, gi(t._parts, e));
        },
        _updateCircle: function(t) {
          var e = t._point, i = Math.max(Math.round(t._radius), 1), n = Math.max(Math.round(t._radiusY), 1) || i, o = "a" + i + "," + n + " 0 1,0 ", s = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + i * 2 + ",0 " + o + -i * 2 + ",0 ";
          this._setPath(t, s);
        },
        _setPath: function(t, e) {
          t._path.setAttribute("d", e);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(t) {
          Zt(t._path);
        },
        _bringToBack: function(t) {
          Bt(t._path);
        }
      });
      M.vml && ne.include(qo);
      function _n(t) {
        return M.svg || M.vml ? new ne(t) : null;
      }
      R.include({
        // @namespace Map; @method getRenderer(layer: Path): Renderer
        // Returns the instance of `Renderer` that should be used to render the given
        // `Path`. It will ensure that the `renderer` options of the map and paths
        // are respected, and that the renderers do exist on the map.
        getRenderer: function(t) {
          var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
          return e || (e = this._renderer = this._createRenderer()), this.hasLayer(e) || this.addLayer(e), e;
        },
        _getPaneRenderer: function(t) {
          if (t === "overlayPane" || t === void 0)
            return !1;
          var e = this._paneRenderers[t];
          return e === void 0 && (e = this._createRenderer({ pane: t }), this._paneRenderers[t] = e), e;
        },
        _createRenderer: function(t) {
          return this.options.preferCanvas && dn(t) || _n(t);
        }
      });
      var pn = Dt.extend({
        initialize: function(t, e) {
          Dt.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(t) {
          return this.setLatLngs(this._boundsToLatLngs(t));
        },
        _boundsToLatLngs: function(t) {
          return t = j(t), [
            t.getSouthWest(),
            t.getNorthWest(),
            t.getNorthEast(),
            t.getSouthEast()
          ];
        }
      });
      function Vo(t, e) {
        return new pn(t, e);
      }
      ne.create = be, ne.pointsToPath = gi, bt.geometryToLayer = me, bt.coordsToLatLng = ii, bt.coordsToLatLngs = ge, bt.latLngToCoords = ni, bt.latLngsToCoords = ve, bt.getFeature = Ft, bt.asFeature = ye, R.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var mn = gt.extend({
        initialize: function(t) {
          this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
        },
        addHooks: function() {
          O(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          W(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          q(this._pane), delete this._pane;
        },
        _resetState: function() {
          this._resetStateTimeout = 0, this._moved = !1;
        },
        _clearDeferredResetState: function() {
          this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
        },
        _onMouseDown: function(t) {
          if (!t.shiftKey || t.which !== 1 && t.button !== 1)
            return !1;
          this._clearDeferredResetState(), this._resetState(), Kt(), De(), this._startPoint = this._map.mouseEventToContainerPoint(t), O(document, {
            contextmenu: Et,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(t) {
          this._moved || (this._moved = !0, this._box = N("div", "leaflet-zoom-box", this._container), I(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
          var e = new G(this._point, this._startPoint), i = e.getSize();
          K(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
        },
        _finish: function() {
          this._moved && (q(this._box), V(this._container, "leaflet-crosshair")), Yt(), Fe(), W(document, {
            contextmenu: Et,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(t) {
          if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(a(this._resetState, this), 0);
            var e = new st(
              this._map.containerPointToLatLng(this._startPoint),
              this._map.containerPointToLatLng(this._point)
            );
            this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
          }
        },
        _onKeyDown: function(t) {
          t.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
        }
      });
      R.addInitHook("addHandler", "boxZoom", mn), R.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var gn = gt.extend({
        addHooks: function() {
          this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
          this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(t) {
          var e = this._map, i = e.getZoom(), n = e.options.zoomDelta, o = t.originalEvent.shiftKey ? i - n : i + n;
          e.options.doubleClickZoom === "center" ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o);
        }
      });
      R.addInitHook("addHandler", "doubleClickZoom", gn), R.mergeOptions({
        // @option dragging: Boolean = true
        // Whether the map is draggable with mouse/touch or not.
        dragging: !0,
        // @section Panning Inertia Options
        // @option inertia: Boolean = *
        // If enabled, panning of the map will have an inertia effect where
        // the map builds momentum while dragging and continues moving in
        // the same direction for some time. Feels especially nice on touch
        // devices. Enabled by default.
        inertia: !0,
        // @option inertiaDeceleration: Number = 3000
        // The rate with which the inertial movement slows down, in pixels/second².
        inertiaDeceleration: 3400,
        // px/s^2
        // @option inertiaMaxSpeed: Number = Infinity
        // Max speed of the inertial movement, in pixels/second.
        inertiaMaxSpeed: 1 / 0,
        // px/s
        // @option easeLinearity: Number = 0.2
        easeLinearity: 0.2,
        // TODO refactor, move to CRS
        // @option worldCopyJump: Boolean = false
        // With this option enabled, the map tracks when you pan to another "copy"
        // of the world and seamlessly jumps to the original one so that all overlays
        // like markers and vector layers are still visible.
        worldCopyJump: !1,
        // @option maxBoundsViscosity: Number = 0.0
        // If `maxBounds` is set, this option will control how solid the bounds
        // are when dragging the map around. The default value of `0.0` allows the
        // user to drag outside the bounds at normal speed, higher values will
        // slow down map dragging outside bounds, and `1.0` makes the bounds fully
        // solid, preventing the user from dragging outside the bounds.
        maxBoundsViscosity: 0
      });
      var vn = gt.extend({
        addHooks: function() {
          if (!this._draggable) {
            var t = this._map;
            this._draggable = new kt(t._mapPane, t._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
          }
          I(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          V(this._map._container, "leaflet-grab"), V(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        moving: function() {
          return this._draggable && this._draggable._moving;
        },
        _onDragStart: function() {
          var t = this._map;
          if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
            var e = j(this._map.options.maxBounds);
            this._offsetLimit = rt(
              this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
              this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
            ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
          } else
            this._offsetLimit = null;
          t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = []);
        },
        _onDrag: function(t) {
          if (this._map.options.inertia) {
            var e = this._lastTime = +/* @__PURE__ */ new Date(), i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
            this._positions.push(i), this._times.push(e), this._prunePositions(e);
          }
          this._map.fire("move", t).fire("drag", t);
        },
        _prunePositions: function(t) {
          for (; this._positions.length > 1 && t - this._times[0] > 50; )
            this._positions.shift(), this._times.shift();
        },
        _onZoomEnd: function() {
          var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
          this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function(t, e) {
          return t - (t - e) * this._viscosity;
        },
        _onPreDragLimit: function() {
          if (!(!this._viscosity || !this._offsetLimit)) {
            var t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit;
            t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t);
          }
        },
        _onPreDragWrap: function() {
          var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, o = (n - e + i) % t + e - i, s = (n + e + i) % t - e - i, h = Math.abs(o + i) < Math.abs(s + i) ? o : s;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = h;
        },
        _onDragEnd: function(t) {
          var e = this._map, i = e.options, n = !i.inertia || t.noInertia || this._times.length < 2;
          if (e.fire("dragend", t), n)
            e.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var o = this._lastPos.subtract(this._positions[0]), s = (this._lastTime - this._times[0]) / 1e3, h = i.easeLinearity, f = o.multiplyBy(h / s), p = f.distanceTo([0, 0]), y = Math.min(i.inertiaMaxSpeed, p), C = f.multiplyBy(y / p), A = y / (i.inertiaDeceleration * h), Z = C.multiplyBy(-A / 2).round();
            !Z.x && !Z.y ? e.fire("moveend") : (Z = e._limitOffset(Z, e.options.maxBounds), ot(function() {
              e.panBy(Z, {
                duration: A,
                easeLinearity: h,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      R.addInitHook("addHandler", "dragging", vn), R.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var yn = gt.extend({
        keyCodes: {
          left: [37],
          right: [39],
          down: [40],
          up: [38],
          zoomIn: [187, 107, 61, 171],
          zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
          this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta);
        },
        addHooks: function() {
          var t = this._map._container;
          t.tabIndex <= 0 && (t.tabIndex = "0"), O(t, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function() {
          this._removeHooks(), W(this._map._container, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.off({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        _onMouseDown: function() {
          if (!this._focused) {
            var t = document.body, e = document.documentElement, i = t.scrollTop || e.scrollTop, n = t.scrollLeft || e.scrollLeft;
            this._map._container.focus(), window.scrollTo(n, i);
          }
        },
        _onFocus: function() {
          this._focused = !0, this._map.fire("focus");
        },
        _onBlur: function() {
          this._focused = !1, this._map.fire("blur");
        },
        _setPanDelta: function(t) {
          var e = this._panKeys = {}, i = this.keyCodes, n, o;
          for (n = 0, o = i.left.length; n < o; n++)
            e[i.left[n]] = [-1 * t, 0];
          for (n = 0, o = i.right.length; n < o; n++)
            e[i.right[n]] = [t, 0];
          for (n = 0, o = i.down.length; n < o; n++)
            e[i.down[n]] = [0, t];
          for (n = 0, o = i.up.length; n < o; n++)
            e[i.up[n]] = [0, -1 * t];
        },
        _setZoomDelta: function(t) {
          var e = this._zoomKeys = {}, i = this.keyCodes, n, o;
          for (n = 0, o = i.zoomIn.length; n < o; n++)
            e[i.zoomIn[n]] = t;
          for (n = 0, o = i.zoomOut.length; n < o; n++)
            e[i.zoomOut[n]] = -t;
        },
        _addHooks: function() {
          O(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          W(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(t) {
          if (!(t.altKey || t.ctrlKey || t.metaKey)) {
            var e = t.keyCode, i = this._map, n;
            if (e in this._panKeys) {
              if (!i._panAnim || !i._panAnim._inProgress)
                if (n = this._panKeys[e], t.shiftKey && (n = z(n).multiplyBy(3)), i.options.maxBounds && (n = i._limitOffset(z(n), i.options.maxBounds)), i.options.worldCopyJump) {
                  var o = i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(n)));
                  i.panTo(o);
                } else
                  i.panBy(n);
            } else if (e in this._zoomKeys)
              i.setZoom(i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
            else if (e === 27 && i._popup && i._popup.options.closeOnEscapeKey)
              i.closePopup();
            else
              return;
            Et(t);
          }
        }
      });
      R.addInitHook("addHandler", "keyboard", yn), R.mergeOptions({
        // @section Mouse wheel options
        // @option scrollWheelZoom: Boolean|String = true
        // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
        // it will zoom to the center of the view regardless of where the mouse was.
        scrollWheelZoom: !0,
        // @option wheelDebounceTime: Number = 40
        // Limits the rate at which a wheel can fire (in milliseconds). By default
        // user can't zoom via wheel more often than once per 40 ms.
        wheelDebounceTime: 40,
        // @option wheelPxPerZoomLevel: Number = 60
        // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
        // mean a change of one full zoom level. Smaller values will make wheel-zooming
        // faster (and vice versa).
        wheelPxPerZoomLevel: 60
      });
      var Ln = gt.extend({
        addHooks: function() {
          O(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          W(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(t) {
          var e = Wi(t), i = this._map.options.wheelDebounceTime;
          this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var n = Math.max(i - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(a(this._performZoom, this), n), Et(t);
        },
        _performZoom: function() {
          var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0;
          t._stop();
          var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, s = i ? Math.ceil(o / i) * i : o, h = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
          this._delta = 0, this._startTime = null, h && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + h) : t.setZoomAround(this._lastMousePos, e + h));
        }
      });
      R.addInitHook("addHandler", "scrollWheelZoom", Ln);
      var jo = 600;
      R.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: M.touchNative && M.safari && M.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var xn = gt.extend({
        addHooks: function() {
          O(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          W(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(t) {
          if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
            var e = t.touches[0];
            this._startPos = this._newPos = new E(e.clientX, e.clientY), this._holdTimeout = setTimeout(a(function() {
              this._cancel(), this._isTapValid() && (O(document, "touchend", J), O(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
            }, this), jo), O(document, "touchend touchcancel contextmenu", this._cancel, this), O(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function t() {
          W(document, "touchend", J), W(document, "touchend touchcancel", t);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), W(document, "touchend touchcancel contextmenu", this._cancel, this), W(document, "touchmove", this._onMove, this);
        },
        _onMove: function(t) {
          var e = t.touches[0];
          this._newPos = new E(e.clientX, e.clientY);
        },
        _isTapValid: function() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _simulateEvent: function(t, e) {
          var i = new MouseEvent(t, {
            bubbles: !0,
            cancelable: !0,
            view: window,
            // detail: 1,
            screenX: e.screenX,
            screenY: e.screenY,
            clientX: e.clientX,
            clientY: e.clientY
            // button: 2,
            // buttons: 2
          });
          i._simulated = !0, e.target.dispatchEvent(i);
        }
      });
      R.addInitHook("addHandler", "tapHold", xn), R.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: M.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: !0
      });
      var wn = gt.extend({
        addHooks: function() {
          I(this._map._container, "leaflet-touch-zoom"), O(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          V(this._map._container, "leaflet-touch-zoom"), W(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(t) {
          var e = this._map;
          if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
            var i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]);
            this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), O(document, "touchmove", this._onTouchMove, this), O(document, "touchend touchcancel", this._onTouchEnd, this), J(t);
          }
        },
        _onTouchMove: function(t) {
          if (!(!t.touches || t.touches.length !== 2 || !this._zooming)) {
            var e = this._map, i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]), o = i.distanceTo(n) / this._startDist;
            if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && o > 1) && (this._zoom = e._limitZoom(this._zoom)), e.options.touchZoom === "center") {
              if (this._center = this._startLatLng, o === 1)
                return;
            } else {
              var s = i._add(n)._divideBy(2)._subtract(this._centerPoint);
              if (o === 1 && s.x === 0 && s.y === 0)
                return;
              this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom);
            }
            this._moved || (e._moveStart(!0, !1), this._moved = !0), ht(this._animRequest);
            var h = a(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = ot(h, this, !0), J(t);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, ht(this._animRequest), W(document, "touchmove", this._onTouchMove, this), W(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      R.addInitHook("addHandler", "touchZoom", wn), R.BoxZoom = mn, R.DoubleClickZoom = gn, R.Drag = vn, R.Keyboard = yn, R.ScrollWheelZoom = Ln, R.TapHold = xn, R.TouchZoom = wn, _.Bounds = G, _.Browser = M, _.CRS = Lt, _.Canvas = fn, _.Circle = ei, _.CircleMarker = pe, _.Class = yt, _.Control = dt, _.DivIcon = hn, _.DivOverlay = vt, _.DomEvent = uo, _.DomUtil = lo, _.Draggable = kt, _.Evented = Wt, _.FeatureGroup = xt, _.GeoJSON = bt, _.GridLayer = ee, _.Handler = gt, _.Icon = Nt, _.ImageOverlay = Le, _.LatLng = H, _.LatLngBounds = st, _.Layer = _t, _.LayerGroup = Rt, _.LineUtil = Po, _.Map = R, _.Marker = _e, _.Mixin = vo, _.Path = Mt, _.Point = E, _.PolyUtil = yo, _.Polygon = Dt, _.Polyline = wt, _.Popup = xe, _.PosAnimation = Gi, _.Projection = Co, _.Rectangle = pn, _.Renderer = Pt, _.SVG = ne, _.SVGOverlay = ln, _.TileLayer = Ht, _.Tooltip = we, _.Transformation = Me, _.Util = An, _.VideoOverlay = an, _.bind = a, _.bounds = rt, _.canvas = dn, _.circle = Oo, _.circleMarker = Eo, _.control = Xt, _.divIcon = Uo, _.extend = k, _.featureGroup = So, _.geoJSON = sn, _.geoJson = Bo, _.gridLayer = Wo, _.icon = Ao, _.imageOverlay = Ro, _.latLng = B, _.latLngBounds = j, _.layerGroup = To, _.map = co, _.marker = zo, _.point = z, _.polygon = Zo, _.polyline = Io, _.popup = Fo, _.rectangle = Vo, _.setOptions = w, _.stamp = u, _.svg = _n, _.svgOverlay = Do, _.tileLayer = un, _.tooltip = Ho, _.transformation = Gt, _.version = S, _.videoOverlay = No;
      var Ko = window.L;
      _.noConflict = function() {
        return window.L = Ko, this;
      }, window.L = _;
    });
  }(oe, oe.exports)), oe.exports;
}
var lr = ar();
const it = /* @__PURE__ */ rr(lr), hr = '.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:""}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}', ur = ".leaflet-control-fullscreen a{background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAA0CAYAAACU7CiIAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACoSURBVFiF7ZZhDoAgCIWxdbF3suxkHM3+1FaOmNqyIr6fiHuJTyKklKgHQxcVF7rCKAUBiA5h5tCSR/T0iTakL9PWz05IZNEM3YSCt6BvCgFI2ps4Q9v3k9Ldgdrr8nrX9LYc7wwu5EIu9KCQT6rq+r8mVbV0ewBEIpqy8MzMsWR/8f+oxmES9u7olZPqLKQeYtqkWuy61V2xND/H3h35pNqMPTPYE1oAnZZStKN8jj8AAAAASUVORK5CYII=) no-repeat 0 0;background-size:26px 52px}.leaflet-touch .leaflet-control-fullscreen a{background-position:2px 2px}.leaflet-fullscreen-on .leaflet-control-fullscreen a{background-position:0 -26px}.leaflet-touch.leaflet-fullscreen-on .leaflet-control-fullscreen a{background-position:2px -24px}.leaflet-container:-webkit-full-screen{width:100%!important;height:100%!important}.leaflet-container.leaflet-fullscreen-on{width:100%!important;height:100%!important}.leaflet-pseudo-fullscreen{position:fixed!important;width:100%!important;height:100%!important;top:0!important;left:0!important;z-index:99999}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.leaflet-control-fullscreen a{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABoCAYAAAC+NNNnAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAbrwAAG68BXhqRHAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEhSURBVHic7dpBDoIwFADRj/FiPRlwsh4NN5CoiVKg1Ukzb43ApKK1dliWJXpy+/cN1GYQnUF0BtEZRHcvPTCldGhKkXMefnm+TXcjZBBd8TP0rvQ9ffb1R5+xTXcjZBCdQXQG0Q2u+sAZRGcQnUF0p9cUrv4eanW97kbIIDqD6AyiO70ut7du1mrdbU93I2QQnWsKdAbRGURnEJ1BdAbRGURnEJ1BdAbRueeUziA695zSGURnEN3pT7lvUkpTRIw7h80556n2tauPUGFMRMS4HltV9f+HWs3RSnX3DBlEZxCdQXQt9pzOUfbFuh179Xovqo/QOp35eKNPmkx9mszl1hudWpx7T3fPkEF0BtG555TOIDr3nNIZRGcQnUF0BtE9AF5WX48h7QeZAAAAAElFTkSuQmCC)}}", cr = ".leaflet-cluster-anim .leaflet-marker-icon,.leaflet-cluster-anim .leaflet-marker-shadow{-webkit-transition:-webkit-transform .3s ease-out,opacity .3s ease-in;-moz-transition:-moz-transform .3s ease-out,opacity .3s ease-in;-o-transition:-o-transform .3s ease-out,opacity .3s ease-in;transition:transform .3s ease-out,opacity .3s ease-in}.leaflet-cluster-spider-leg{-webkit-transition:-webkit-stroke-dashoffset .3s ease-out,-webkit-stroke-opacity .3s ease-in;-moz-transition:-moz-stroke-dashoffset .3s ease-out,-moz-stroke-opacity .3s ease-in;-o-transition:-o-stroke-dashoffset .3s ease-out,-o-stroke-opacity .3s ease-in;transition:stroke-dashoffset .3s ease-out,stroke-opacity .3s ease-in}", fr = ".marker-cluster-small{background-color:#b5e28c99}.marker-cluster-small div{background-color:#6ecc3999}.marker-cluster-medium{background-color:#f1d35799}.marker-cluster-medium div{background-color:#f0c20c99}.marker-cluster-large{background-color:#fd9c7399}.marker-cluster-large div{background-color:#f1801799}.leaflet-oldie .marker-cluster-small{background-color:#b5e28c}.leaflet-oldie .marker-cluster-small div{background-color:#6ecc39}.leaflet-oldie .marker-cluster-medium{background-color:#f1d357}.leaflet-oldie .marker-cluster-medium div{background-color:#f0c20c}.leaflet-oldie .marker-cluster-large{background-color:#fd9c73}.leaflet-oldie .marker-cluster-large div{background-color:#f18017}.marker-cluster{background-clip:padding-box;border-radius:20px}.marker-cluster div{width:30px;height:30px;margin-left:5px;margin-top:5px;text-align:center;border-radius:15px;font:12px Helvetica Neue,Arial,Helvetica,sans-serif}.marker-cluster span{line-height:30px}";
L.Control.Fullscreen = L.Control.extend({
  options: {
    position: "topleft",
    title: {
      false: "View Fullscreen",
      true: "Exit Fullscreen"
    }
  },
  onAdd: function(x) {
    var b = L.DomUtil.create("div", "leaflet-control-fullscreen leaflet-bar leaflet-control");
    return this.link = L.DomUtil.create("a", "leaflet-control-fullscreen-button leaflet-bar-part", b), this.link.href = "#", this._map = x, this._map.on("fullscreenchange", this._toggleTitle, this), this._toggleTitle(), L.DomEvent.on(this.link, "click", this._click, this), b;
  },
  _click: function(x) {
    L.DomEvent.stopPropagation(x), L.DomEvent.preventDefault(x), this._map.toggleFullscreen(this.options);
  },
  _toggleTitle: function() {
    this.link.title = this.options.title[this._map.isFullscreen()];
  }
});
L.Map.include({
  isFullscreen: function() {
    return this._isFullscreen || !1;
  },
  toggleFullscreen: function(x) {
    var b = this.getContainer();
    this.isFullscreen() ? x && x.pseudoFullscreen ? this._disablePseudoFullscreen(b) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : this._disablePseudoFullscreen(b) : x && x.pseudoFullscreen ? this._enablePseudoFullscreen(b) : b.requestFullscreen ? b.requestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.webkitRequestFullscreen ? b.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : b.msRequestFullscreen ? b.msRequestFullscreen() : this._enablePseudoFullscreen(b);
  },
  _enablePseudoFullscreen: function(x) {
    L.DomUtil.addClass(x, "leaflet-pseudo-fullscreen"), this._setFullscreen(!0), this.fire("fullscreenchange");
  },
  _disablePseudoFullscreen: function(x) {
    L.DomUtil.removeClass(x, "leaflet-pseudo-fullscreen"), this._setFullscreen(!1), this.fire("fullscreenchange");
  },
  _setFullscreen: function(x) {
    this._isFullscreen = x;
    var b = this.getContainer();
    x ? L.DomUtil.addClass(b, "leaflet-fullscreen-on") : L.DomUtil.removeClass(b, "leaflet-fullscreen-on"), this.invalidateSize();
  },
  _onFullscreenChange: function(x) {
    var b = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    b === this.getContainer() && !this._isFullscreen ? (this._setFullscreen(!0), this.fire("fullscreenchange")) : b !== this.getContainer() && this._isFullscreen && (this._setFullscreen(!1), this.fire("fullscreenchange"));
  }
});
L.Map.mergeOptions({
  fullscreenControl: !1
});
L.Map.addInitHook(function() {
  this.options.fullscreenControl && (this.fullscreenControl = new L.Control.Fullscreen(this.options.fullscreenControl), this.addControl(this.fullscreenControl));
  var x;
  if ("onfullscreenchange" in document ? x = "fullscreenchange" : "onmozfullscreenchange" in document ? x = "mozfullscreenchange" : "onwebkitfullscreenchange" in document ? x = "webkitfullscreenchange" : "onmsfullscreenchange" in document && (x = "MSFullscreenChange"), x) {
    var b = L.bind(this._onFullscreenChange, this);
    this.whenReady(function() {
      L.DomEvent.on(document, x, b);
    }), this.on("unload", function() {
      L.DomEvent.off(document, x, b);
    });
  }
});
L.control.fullscreen = function(x) {
  return new L.Control.Fullscreen(x);
};
var re = { exports: {} }, dr = re.exports, Mn;
function _r() {
  return Mn || (Mn = 1, function(x, b) {
    (function(_, S) {
      S(b);
    })(dr, function(_) {
      var S = L.MarkerClusterGroup = L.FeatureGroup.extend({
        options: {
          maxClusterRadius: 80,
          //A cluster will cover at most this many pixels from its center
          iconCreateFunction: null,
          clusterPane: L.Marker.prototype.options.pane,
          spiderfyOnEveryZoom: !1,
          spiderfyOnMaxZoom: !0,
          showCoverageOnHover: !0,
          zoomToBoundsOnClick: !0,
          singleMarkerMode: !1,
          disableClusteringAtZoom: null,
          // Setting this to false prevents the removal of any clusters outside of the viewpoint, which
          // is the default behaviour for performance reasons.
          removeOutsideVisibleBounds: !0,
          // Set to false to disable all animations (zoom and spiderfy).
          // If false, option animateAddingMarkers below has no effect.
          // If L.DomUtil.TRANSITION is falsy, this option has no effect.
          animate: !0,
          //Whether to animate adding markers after adding the MarkerClusterGroup to the map
          // If you are adding individual markers set to true, if adding bulk markers leave false for massive performance gains.
          animateAddingMarkers: !1,
          // Make it possible to provide custom function to calculate spiderfy shape positions
          spiderfyShapePositions: null,
          //Increase to increase the distance away that spiderfied markers appear from the center
          spiderfyDistanceMultiplier: 1,
          // Make it possible to specify a polyline options on a spider leg
          spiderLegPolylineOptions: { weight: 1.5, color: "#222", opacity: 0.5 },
          // When bulk adding layers, adds markers in chunks. Means addLayers may not add all the layers in the call, others will be loaded during setTimeouts
          chunkedLoading: !1,
          chunkInterval: 200,
          // process markers for a maximum of ~ n milliseconds (then trigger the chunkProgress callback)
          chunkDelay: 50,
          // at the end of each interval, give n milliseconds back to system/browser
          chunkProgress: null,
          // progress callback: function(processed, total, elapsed) (e.g. for a progress indicator)
          //Options to pass to the L.Polygon constructor
          polygonOptions: {}
        },
        initialize: function(r) {
          L.Util.setOptions(this, r), this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction), this._featureGroup = L.featureGroup(), this._featureGroup.addEventParent(this), this._nonPointGroup = L.featureGroup(), this._nonPointGroup.addEventParent(this), this._inZoomAnimation = 0, this._needsClustering = [], this._needsRemoving = [], this._currentShownBounds = null, this._queue = [], this._childMarkerEventHandlers = {
            dragstart: this._childMarkerDragStart,
            move: this._childMarkerMoved,
            dragend: this._childMarkerDragEnd
          };
          var a = L.DomUtil.TRANSITION && this.options.animate;
          L.extend(this, a ? this._withAnimation : this._noAnimation), this._markerCluster = a ? L.MarkerCluster : L.MarkerClusterNonAnimated;
        },
        addLayer: function(r) {
          if (r instanceof L.LayerGroup)
            return this.addLayers([r]);
          if (!r.getLatLng)
            return this._nonPointGroup.addLayer(r), this.fire("layeradd", { layer: r }), this;
          if (!this._map)
            return this._needsClustering.push(r), this.fire("layeradd", { layer: r }), this;
          if (this.hasLayer(r))
            return this;
          this._unspiderfy && this._unspiderfy(), this._addLayer(r, this._maxZoom), this.fire("layeradd", { layer: r }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons();
          var a = r, l = this._zoom;
          if (r.__parent)
            for (; a.__parent._zoom >= l; )
              a = a.__parent;
          return this._currentShownBounds.contains(a.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(r, a) : this._animationAddLayerNonAnimated(r, a)), this;
        },
        removeLayer: function(r) {
          return r instanceof L.LayerGroup ? this.removeLayers([r]) : r.getLatLng ? this._map ? r.__parent ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(r)), this._removeLayer(r, !0), this.fire("layerremove", { layer: r }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), r.off(this._childMarkerEventHandlers, this), this._featureGroup.hasLayer(r) && (this._featureGroup.removeLayer(r), r.clusterShow && r.clusterShow()), this) : this : (!this._arraySplice(this._needsClustering, r) && this.hasLayer(r) && this._needsRemoving.push({ layer: r, latlng: r._latlng }), this.fire("layerremove", { layer: r }), this) : (this._nonPointGroup.removeLayer(r), this.fire("layerremove", { layer: r }), this);
        },
        //Takes an array of markers and adds them in bulk
        addLayers: function(r, a) {
          if (!L.Util.isArray(r))
            return this.addLayer(r);
          var l = this._featureGroup, u = this._nonPointGroup, d = this.options.chunkedLoading, m = this.options.chunkInterval, c = this.options.chunkProgress, g = r.length, v = 0, P = !0, w;
          if (this._map) {
            var F = (/* @__PURE__ */ new Date()).getTime(), T = L.bind(function() {
              var U = (/* @__PURE__ */ new Date()).getTime();
              for (this._map && this._unspiderfy && this._unspiderfy(); v < g; v++) {
                if (d && v % 200 === 0) {
                  var nt = (/* @__PURE__ */ new Date()).getTime() - U;
                  if (nt > m)
                    break;
                }
                if (w = r[v], w instanceof L.LayerGroup) {
                  P && (r = r.slice(), P = !1), this._extractNonGroupLayers(w, r), g = r.length;
                  continue;
                }
                if (!w.getLatLng) {
                  u.addLayer(w), a || this.fire("layeradd", { layer: w });
                  continue;
                }
                if (!this.hasLayer(w) && (this._addLayer(w, this._maxZoom), a || this.fire("layeradd", { layer: w }), w.__parent && w.__parent.getChildCount() === 2)) {
                  var tt = w.__parent.getAllChildMarkers(), Tt = tt[0] === w ? tt[1] : tt[0];
                  l.removeLayer(Tt);
                }
              }
              c && c(v, g, (/* @__PURE__ */ new Date()).getTime() - F), v === g ? (this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(T, this.options.chunkDelay);
            }, this);
            T();
          } else
            for (var D = this._needsClustering; v < g; v++) {
              if (w = r[v], w instanceof L.LayerGroup) {
                P && (r = r.slice(), P = !1), this._extractNonGroupLayers(w, r), g = r.length;
                continue;
              }
              if (!w.getLatLng) {
                u.addLayer(w);
                continue;
              }
              this.hasLayer(w) || D.push(w);
            }
          return this;
        },
        //Takes an array of markers and removes them in bulk
        removeLayers: function(r) {
          var a, l, u = r.length, d = this._featureGroup, m = this._nonPointGroup, c = !0;
          if (!this._map) {
            for (a = 0; a < u; a++) {
              if (l = r[a], l instanceof L.LayerGroup) {
                c && (r = r.slice(), c = !1), this._extractNonGroupLayers(l, r), u = r.length;
                continue;
              }
              this._arraySplice(this._needsClustering, l), m.removeLayer(l), this.hasLayer(l) && this._needsRemoving.push({ layer: l, latlng: l._latlng }), this.fire("layerremove", { layer: l });
            }
            return this;
          }
          if (this._unspiderfy) {
            this._unspiderfy();
            var g = r.slice(), v = u;
            for (a = 0; a < v; a++) {
              if (l = g[a], l instanceof L.LayerGroup) {
                this._extractNonGroupLayers(l, g), v = g.length;
                continue;
              }
              this._unspiderfyLayer(l);
            }
          }
          for (a = 0; a < u; a++) {
            if (l = r[a], l instanceof L.LayerGroup) {
              c && (r = r.slice(), c = !1), this._extractNonGroupLayers(l, r), u = r.length;
              continue;
            }
            if (!l.__parent) {
              m.removeLayer(l), this.fire("layerremove", { layer: l });
              continue;
            }
            this._removeLayer(l, !0, !0), this.fire("layerremove", { layer: l }), d.hasLayer(l) && (d.removeLayer(l), l.clusterShow && l.clusterShow());
          }
          return this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), this;
        },
        //Removes all layers from the MarkerClusterGroup
        clearLayers: function() {
          return this._map || (this._needsClustering = [], this._needsRemoving = [], delete this._gridClusters, delete this._gridUnclustered), this._noanimationUnspiderfy && this._noanimationUnspiderfy(), this._featureGroup.clearLayers(), this._nonPointGroup.clearLayers(), this.eachLayer(function(r) {
            r.off(this._childMarkerEventHandlers, this), delete r.__parent;
          }, this), this._map && this._generateInitialClusters(), this;
        },
        //Override FeatureGroup.getBounds as it doesn't work
        getBounds: function() {
          var r = new L.LatLngBounds();
          this._topClusterLevel && r.extend(this._topClusterLevel._bounds);
          for (var a = this._needsClustering.length - 1; a >= 0; a--)
            r.extend(this._needsClustering[a].getLatLng());
          return r.extend(this._nonPointGroup.getBounds()), r;
        },
        //Overrides LayerGroup.eachLayer
        eachLayer: function(r, a) {
          var l = this._needsClustering.slice(), u = this._needsRemoving, d, m, c;
          for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(l), m = l.length - 1; m >= 0; m--) {
            for (d = !0, c = u.length - 1; c >= 0; c--)
              if (u[c].layer === l[m]) {
                d = !1;
                break;
              }
            d && r.call(a, l[m]);
          }
          this._nonPointGroup.eachLayer(r, a);
        },
        //Overrides LayerGroup.getLayers
        getLayers: function() {
          var r = [];
          return this.eachLayer(function(a) {
            r.push(a);
          }), r;
        },
        //Overrides LayerGroup.getLayer, WARNING: Really bad performance
        getLayer: function(r) {
          var a = null;
          return r = parseInt(r, 10), this.eachLayer(function(l) {
            L.stamp(l) === r && (a = l);
          }), a;
        },
        //Returns true if the given layer is in this MarkerClusterGroup
        hasLayer: function(r) {
          if (!r)
            return !1;
          var a, l = this._needsClustering;
          for (a = l.length - 1; a >= 0; a--)
            if (l[a] === r)
              return !0;
          for (l = this._needsRemoving, a = l.length - 1; a >= 0; a--)
            if (l[a].layer === r)
              return !1;
          return !!(r.__parent && r.__parent._group === this) || this._nonPointGroup.hasLayer(r);
        },
        //Zoom down to show the given layer (spiderfying if necessary) then calls the callback
        zoomToShowLayer: function(r, a) {
          var l = this._map;
          typeof a != "function" && (a = function() {
          });
          var u = function() {
            (l.hasLayer(r) || l.hasLayer(r.__parent)) && !this._inZoomAnimation && (this._map.off("moveend", u, this), this.off("animationend", u, this), l.hasLayer(r) ? a() : r.__parent._icon && (this.once("spiderfied", a, this), r.__parent.spiderfy()));
          };
          r._icon && this._map.getBounds().contains(r.getLatLng()) ? a() : r.__parent._zoom < Math.round(this._map._zoom) ? (this._map.on("moveend", u, this), this._map.panTo(r.getLatLng())) : (this._map.on("moveend", u, this), this.on("animationend", u, this), r.__parent.zoomToBounds());
        },
        //Overrides FeatureGroup.onAdd
        onAdd: function(r) {
          this._map = r;
          var a, l, u;
          if (!isFinite(this._map.getMaxZoom()))
            throw "Map has no maxZoom specified";
          for (this._featureGroup.addTo(r), this._nonPointGroup.addTo(r), this._gridClusters || this._generateInitialClusters(), this._maxLat = r.options.crs.projection.MAX_LATITUDE, a = 0, l = this._needsRemoving.length; a < l; a++)
            u = this._needsRemoving[a], u.newlatlng = u.layer._latlng, u.layer._latlng = u.latlng;
          for (a = 0, l = this._needsRemoving.length; a < l; a++)
            u = this._needsRemoving[a], this._removeLayer(u.layer, !0), u.layer._latlng = u.newlatlng;
          this._needsRemoving = [], this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds(), this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), l = this._needsClustering, this._needsClustering = [], this.addLayers(l, !0);
        },
        //Overrides FeatureGroup.onRemove
        onRemove: function(r) {
          r.off("zoomend", this._zoomEnd, this), r.off("moveend", this._moveEnd, this), this._unbindEvents(), this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""), this._spiderfierOnRemove && this._spiderfierOnRemove(), delete this._maxLat, this._hideCoverage(), this._featureGroup.remove(), this._nonPointGroup.remove(), this._featureGroup.clearLayers(), this._map = null;
        },
        getVisibleParent: function(r) {
          for (var a = r; a && !a._icon; )
            a = a.__parent;
          return a || null;
        },
        //Remove the given object from the given array
        _arraySplice: function(r, a) {
          for (var l = r.length - 1; l >= 0; l--)
            if (r[l] === a)
              return r.splice(l, 1), !0;
        },
        /**
         * Removes a marker from all _gridUnclustered zoom levels, starting at the supplied zoom.
         * @param marker to be removed from _gridUnclustered.
         * @param z integer bottom start zoom level (included)
         * @private
         */
        _removeFromGridUnclustered: function(r, a) {
          for (var l = this._map, u = this._gridUnclustered, d = Math.floor(this._map.getMinZoom()); a >= d && u[a].removeObject(r, l.project(r.getLatLng(), a)); a--)
            ;
        },
        _childMarkerDragStart: function(r) {
          r.target.__dragStart = r.target._latlng;
        },
        _childMarkerMoved: function(r) {
          if (!this._ignoreMove && !r.target.__dragStart) {
            var a = r.target._popup && r.target._popup.isOpen();
            this._moveChild(r.target, r.oldLatLng, r.latlng), a && r.target.openPopup();
          }
        },
        _moveChild: function(r, a, l) {
          r._latlng = a, this.removeLayer(r), r._latlng = l, this.addLayer(r);
        },
        _childMarkerDragEnd: function(r) {
          var a = r.target.__dragStart;
          delete r.target.__dragStart, a && this._moveChild(r.target, a, r.target._latlng);
        },
        //Internal function for removing a marker from everything.
        //dontUpdateMap: set to true if you will handle updating the map manually (for bulk functions)
        _removeLayer: function(r, a, l) {
          var u = this._gridClusters, d = this._gridUnclustered, m = this._featureGroup, c = this._map, g = Math.floor(this._map.getMinZoom());
          a && this._removeFromGridUnclustered(r, this._maxZoom);
          var v = r.__parent, P = v._markers, w;
          for (this._arraySplice(P, r); v && (v._childCount--, v._boundsNeedUpdate = !0, !(v._zoom < g)); )
            a && v._childCount <= 1 ? (w = v._markers[0] === r ? v._markers[1] : v._markers[0], u[v._zoom].removeObject(v, c.project(v._cLatLng, v._zoom)), d[v._zoom].addObject(w, c.project(w.getLatLng(), v._zoom)), this._arraySplice(v.__parent._childClusters, v), v.__parent._markers.push(w), w.__parent = v.__parent, v._icon && (m.removeLayer(v), l || m.addLayer(w))) : v._iconNeedsUpdate = !0, v = v.__parent;
          delete r.__parent;
        },
        _isOrIsParent: function(r, a) {
          for (; a; ) {
            if (r === a)
              return !0;
            a = a.parentNode;
          }
          return !1;
        },
        //Override L.Evented.fire
        fire: function(r, a, l) {
          if (a && a.layer instanceof L.MarkerCluster) {
            if (a.originalEvent && this._isOrIsParent(a.layer._icon, a.originalEvent.relatedTarget))
              return;
            r = "cluster" + r;
          }
          L.FeatureGroup.prototype.fire.call(this, r, a, l);
        },
        //Override L.Evented.listens
        listens: function(r, a) {
          return L.FeatureGroup.prototype.listens.call(this, r, a) || L.FeatureGroup.prototype.listens.call(this, "cluster" + r, a);
        },
        //Default functionality
        _defaultIconCreateFunction: function(r) {
          var a = r.getChildCount(), l = " marker-cluster-";
          return a < 10 ? l += "small" : a < 100 ? l += "medium" : l += "large", new L.DivIcon({ html: "<div><span>" + a + "</span></div>", className: "marker-cluster" + l, iconSize: new L.Point(40, 40) });
        },
        _bindEvents: function() {
          var r = this._map, a = this.options.spiderfyOnMaxZoom, l = this.options.showCoverageOnHover, u = this.options.zoomToBoundsOnClick, d = this.options.spiderfyOnEveryZoom;
          (a || u || d) && this.on("clusterclick clusterkeypress", this._zoomOrSpiderfy, this), l && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), r.on("zoomend", this._hideCoverage, this));
        },
        _zoomOrSpiderfy: function(r) {
          var a = r.layer, l = a;
          if (!(r.type === "clusterkeypress" && r.originalEvent && r.originalEvent.keyCode !== 13)) {
            for (; l._childClusters.length === 1; )
              l = l._childClusters[0];
            l._zoom === this._maxZoom && l._childCount === a._childCount && this.options.spiderfyOnMaxZoom ? a.spiderfy() : this.options.zoomToBoundsOnClick && a.zoomToBounds(), this.options.spiderfyOnEveryZoom && a.spiderfy(), r.originalEvent && r.originalEvent.keyCode === 13 && this._map._container.focus();
          }
        },
        _showCoverage: function(r) {
          var a = this._map;
          this._inZoomAnimation || (this._shownPolygon && a.removeLayer(this._shownPolygon), r.layer.getChildCount() > 2 && r.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(r.layer.getConvexHull(), this.options.polygonOptions), a.addLayer(this._shownPolygon)));
        },
        _hideCoverage: function() {
          this._shownPolygon && (this._map.removeLayer(this._shownPolygon), this._shownPolygon = null);
        },
        _unbindEvents: function() {
          var r = this.options.spiderfyOnMaxZoom, a = this.options.showCoverageOnHover, l = this.options.zoomToBoundsOnClick, u = this.options.spiderfyOnEveryZoom, d = this._map;
          (r || l || u) && this.off("clusterclick clusterkeypress", this._zoomOrSpiderfy, this), a && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), d.off("zoomend", this._hideCoverage, this));
        },
        _zoomEnd: function() {
          this._map && (this._mergeSplitClusters(), this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds());
        },
        _moveEnd: function() {
          if (!this._inZoomAnimation) {
            var r = this._getExpandedVisibleBounds();
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, r), this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), r), this._currentShownBounds = r;
          }
        },
        _generateInitialClusters: function() {
          var r = Math.ceil(this._map.getMaxZoom()), a = Math.floor(this._map.getMinZoom()), l = this.options.maxClusterRadius, u = l;
          typeof l != "function" && (u = function() {
            return l;
          }), this.options.disableClusteringAtZoom !== null && (r = this.options.disableClusteringAtZoom - 1), this._maxZoom = r, this._gridClusters = {}, this._gridUnclustered = {};
          for (var d = r; d >= a; d--)
            this._gridClusters[d] = new L.DistanceGrid(u(d)), this._gridUnclustered[d] = new L.DistanceGrid(u(d));
          this._topClusterLevel = new this._markerCluster(this, a - 1);
        },
        //Zoom: Zoom to start adding at (Pass this._maxZoom to start at the bottom)
        _addLayer: function(r, a) {
          var l = this._gridClusters, u = this._gridUnclustered, d = Math.floor(this._map.getMinZoom()), m, c;
          for (this.options.singleMarkerMode && this._overrideMarkerIcon(r), r.on(this._childMarkerEventHandlers, this); a >= d; a--) {
            m = this._map.project(r.getLatLng(), a);
            var g = l[a].getNearObject(m);
            if (g) {
              g._addChild(r), r.__parent = g;
              return;
            }
            if (g = u[a].getNearObject(m), g) {
              var v = g.__parent;
              v && this._removeLayer(g, !1);
              var P = new this._markerCluster(this, a, g, r);
              l[a].addObject(P, this._map.project(P._cLatLng, a)), g.__parent = P, r.__parent = P;
              var w = P;
              for (c = a - 1; c > v._zoom; c--)
                w = new this._markerCluster(this, c, w), l[c].addObject(w, this._map.project(g.getLatLng(), c));
              v._addChild(w), this._removeFromGridUnclustered(g, a);
              return;
            }
            u[a].addObject(r, m);
          }
          this._topClusterLevel._addChild(r), r.__parent = this._topClusterLevel;
        },
        /**
         * Refreshes the icon of all "dirty" visible clusters.
         * Non-visible "dirty" clusters will be updated when they are added to the map.
         * @private
         */
        _refreshClustersIcons: function() {
          this._featureGroup.eachLayer(function(r) {
            r instanceof L.MarkerCluster && r._iconNeedsUpdate && r._updateIcon();
          });
        },
        //Enqueue code to fire after the marker expand/contract has happened
        _enqueue: function(r) {
          this._queue.push(r), this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300));
        },
        _processQueue: function() {
          for (var r = 0; r < this._queue.length; r++)
            this._queue[r].call(this);
          this._queue.length = 0, clearTimeout(this._queueTimeout), this._queueTimeout = null;
        },
        //Merge and split any existing clusters that are too big or small
        _mergeSplitClusters: function() {
          var r = Math.round(this._map._zoom);
          this._processQueue(), this._zoom < r && this._currentShownBounds.intersects(this._getExpandedVisibleBounds()) ? (this._animationStart(), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds()), this._animationZoomIn(this._zoom, r)) : this._zoom > r ? (this._animationStart(), this._animationZoomOut(this._zoom, r)) : this._moveEnd();
        },
        //Gets the maps visible bounds expanded in each direction by the size of the screen (so the user cannot see an area we do not cover in one pan)
        _getExpandedVisibleBounds: function() {
          if (this.options.removeOutsideVisibleBounds) {
            if (L.Browser.mobile)
              return this._checkBoundsMaxLat(this._map.getBounds());
          } else return this._mapBoundsInfinite;
          return this._checkBoundsMaxLat(this._map.getBounds().pad(1));
        },
        /**
         * Expands the latitude to Infinity (or -Infinity) if the input bounds reach the map projection maximum defined latitude
         * (in the case of Web/Spherical Mercator, it is 85.0511287798 / see https://en.wikipedia.org/wiki/Web_Mercator#Formulas).
         * Otherwise, the removeOutsideVisibleBounds option will remove markers beyond that limit, whereas the same markers without
         * this option (or outside MCG) will have their position floored (ceiled) by the projection and rendered at that limit,
         * making the user think that MCG "eats" them and never displays them again.
         * @param bounds L.LatLngBounds
         * @returns {L.LatLngBounds}
         * @private
         */
        _checkBoundsMaxLat: function(r) {
          var a = this._maxLat;
          return a !== void 0 && (r.getNorth() >= a && (r._northEast.lat = 1 / 0), r.getSouth() <= -a && (r._southWest.lat = -1 / 0)), r;
        },
        //Shared animation code
        _animationAddLayerNonAnimated: function(r, a) {
          if (a === r)
            this._featureGroup.addLayer(r);
          else if (a._childCount === 2) {
            a._addToMap();
            var l = a.getAllChildMarkers();
            this._featureGroup.removeLayer(l[0]), this._featureGroup.removeLayer(l[1]);
          } else
            a._updateIcon();
        },
        /**
         * Extracts individual (i.e. non-group) layers from a Layer Group.
         * @param group to extract layers from.
         * @param output {Array} in which to store the extracted layers.
         * @returns {*|Array}
         * @private
         */
        _extractNonGroupLayers: function(r, a) {
          var l = r.getLayers(), u = 0, d;
          for (a = a || []; u < l.length; u++) {
            if (d = l[u], d instanceof L.LayerGroup) {
              this._extractNonGroupLayers(d, a);
              continue;
            }
            a.push(d);
          }
          return a;
        },
        /**
         * Implements the singleMarkerMode option.
         * @param layer Marker to re-style using the Clusters iconCreateFunction.
         * @returns {L.Icon} The newly created icon.
         * @private
         */
        _overrideMarkerIcon: function(r) {
          var a = r.options.icon = this.options.iconCreateFunction({
            getChildCount: function() {
              return 1;
            },
            getAllChildMarkers: function() {
              return [r];
            }
          });
          return a;
        }
      });
      L.MarkerClusterGroup.include({
        _mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-1 / 0, -1 / 0), new L.LatLng(1 / 0, 1 / 0))
      }), L.MarkerClusterGroup.include({
        _noAnimation: {
          //Non Animated versions of everything
          _animationStart: function() {
          },
          _animationZoomIn: function(r, a) {
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), r), this._topClusterLevel._recursivelyAddChildrenToMap(null, a, this._getExpandedVisibleBounds()), this.fire("animationend");
          },
          _animationZoomOut: function(r, a) {
            this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), r), this._topClusterLevel._recursivelyAddChildrenToMap(null, a, this._getExpandedVisibleBounds()), this.fire("animationend");
          },
          _animationAddLayer: function(r, a) {
            this._animationAddLayerNonAnimated(r, a);
          }
        },
        _withAnimation: {
          //Animated versions here
          _animationStart: function() {
            this._map._mapPane.className += " leaflet-cluster-anim", this._inZoomAnimation++;
          },
          _animationZoomIn: function(r, a) {
            var l = this._getExpandedVisibleBounds(), u = this._featureGroup, d = Math.floor(this._map.getMinZoom()), m;
            this._ignoreMove = !0, this._topClusterLevel._recursively(l, r, d, function(c) {
              var g = c._latlng, v = c._markers, P;
              for (l.contains(g) || (g = null), c._isSingleParent() && r + 1 === a ? (u.removeLayer(c), c._recursivelyAddChildrenToMap(null, a, l)) : (c.clusterHide(), c._recursivelyAddChildrenToMap(g, a, l)), m = v.length - 1; m >= 0; m--)
                P = v[m], l.contains(P._latlng) || u.removeLayer(P);
            }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(l, a), u.eachLayer(function(c) {
              !(c instanceof L.MarkerCluster) && c._icon && c.clusterShow();
            }), this._topClusterLevel._recursively(l, r, a, function(c) {
              c._recursivelyRestoreChildPositions(a);
            }), this._ignoreMove = !1, this._enqueue(function() {
              this._topClusterLevel._recursively(l, r, d, function(c) {
                u.removeLayer(c), c.clusterShow();
              }), this._animationEnd();
            });
          },
          _animationZoomOut: function(r, a) {
            this._animationZoomOutSingle(this._topClusterLevel, r - 1, a), this._topClusterLevel._recursivelyAddChildrenToMap(null, a, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), r, this._getExpandedVisibleBounds());
          },
          _animationAddLayer: function(r, a) {
            var l = this, u = this._featureGroup;
            u.addLayer(r), a !== r && (a._childCount > 2 ? (a._updateIcon(), this._forceLayout(), this._animationStart(), r._setPos(this._map.latLngToLayerPoint(a.getLatLng())), r.clusterHide(), this._enqueue(function() {
              u.removeLayer(r), r.clusterShow(), l._animationEnd();
            })) : (this._forceLayout(), l._animationStart(), l._animationZoomOutSingle(a, this._map.getMaxZoom(), this._zoom)));
          }
        },
        // Private methods for animated versions.
        _animationZoomOutSingle: function(r, a, l) {
          var u = this._getExpandedVisibleBounds(), d = Math.floor(this._map.getMinZoom());
          r._recursivelyAnimateChildrenInAndAddSelfToMap(u, d, a + 1, l);
          var m = this;
          this._forceLayout(), r._recursivelyBecomeVisible(u, l), this._enqueue(function() {
            if (r._childCount === 1) {
              var c = r._markers[0];
              this._ignoreMove = !0, c.setLatLng(c.getLatLng()), this._ignoreMove = !1, c.clusterShow && c.clusterShow();
            } else
              r._recursively(u, l, d, function(g) {
                g._recursivelyRemoveChildrenFromMap(u, d, a + 1);
              });
            m._animationEnd();
          });
        },
        _animationEnd: function() {
          this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend");
        },
        //Force a browser layout of stuff in the map
        // Should apply the current opacity and location to all elements so we can update them again for an animation
        _forceLayout: function() {
          L.Util.falseFn(document.body.offsetWidth);
        }
      }), L.markerClusterGroup = function(r) {
        return new L.MarkerClusterGroup(r);
      };
      var k = L.MarkerCluster = L.Marker.extend({
        options: L.Icon.prototype.options,
        initialize: function(r, a, l, u) {
          L.Marker.prototype.initialize.call(
            this,
            l ? l._cLatLng || l.getLatLng() : new L.LatLng(0, 0),
            { icon: this, pane: r.options.clusterPane }
          ), this._group = r, this._zoom = a, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._bounds = new L.LatLngBounds(), l && this._addChild(l), u && this._addChild(u);
        },
        //Recursively retrieve all child markers of this cluster
        getAllChildMarkers: function(r, a) {
          r = r || [];
          for (var l = this._childClusters.length - 1; l >= 0; l--)
            this._childClusters[l].getAllChildMarkers(r, a);
          for (var u = this._markers.length - 1; u >= 0; u--)
            a && this._markers[u].__dragStart || r.push(this._markers[u]);
          return r;
        },
        //Returns the count of how many child markers we have
        getChildCount: function() {
          return this._childCount;
        },
        //Zoom to the minimum of showing all of the child markers, or the extents of this cluster
        zoomToBounds: function(r) {
          for (var a = this._childClusters.slice(), l = this._group._map, u = l.getBoundsZoom(this._bounds), d = this._zoom + 1, m = l.getZoom(), c; a.length > 0 && u > d; ) {
            d++;
            var g = [];
            for (c = 0; c < a.length; c++)
              g = g.concat(a[c]._childClusters);
            a = g;
          }
          u > d ? this._group._map.setView(this._latlng, d) : u <= m ? this._group._map.setView(this._latlng, m + 1) : this._group._map.fitBounds(this._bounds, r);
        },
        getBounds: function() {
          var r = new L.LatLngBounds();
          return r.extend(this._bounds), r;
        },
        _updateIcon: function() {
          this._iconNeedsUpdate = !0, this._icon && this.setIcon(this);
        },
        //Cludge for Icon, we pretend to be an icon for performance
        createIcon: function() {
          return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this), this._iconNeedsUpdate = !1), this._iconObj.createIcon();
        },
        createShadow: function() {
          return this._iconObj.createShadow();
        },
        _addChild: function(r, a) {
          this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._setClusterCenter(r), r instanceof L.MarkerCluster ? (a || (this._childClusters.push(r), r.__parent = this), this._childCount += r._childCount) : (a || this._markers.push(r), this._childCount++), this.__parent && this.__parent._addChild(r, !0);
        },
        /**
         * Makes sure the cluster center is set. If not, uses the child center if it is a cluster, or the marker position.
         * @param child L.MarkerCluster|L.Marker that will be used as cluster center if not defined yet.
         * @private
         */
        _setClusterCenter: function(r) {
          this._cLatLng || (this._cLatLng = r._cLatLng || r._latlng);
        },
        /**
         * Assigns impossible bounding values so that the next extend entirely determines the new bounds.
         * This method avoids having to trash the previous L.LatLngBounds object and to create a new one, which is much slower for this class.
         * As long as the bounds are not extended, most other methods would probably fail, as they would with bounds initialized but not extended.
         * @private
         */
        _resetBounds: function() {
          var r = this._bounds;
          r._southWest && (r._southWest.lat = 1 / 0, r._southWest.lng = 1 / 0), r._northEast && (r._northEast.lat = -1 / 0, r._northEast.lng = -1 / 0);
        },
        _recalculateBounds: function() {
          var r = this._markers, a = this._childClusters, l = 0, u = 0, d = this._childCount, m, c, g, v;
          if (d !== 0) {
            for (this._resetBounds(), m = 0; m < r.length; m++)
              g = r[m]._latlng, this._bounds.extend(g), l += g.lat, u += g.lng;
            for (m = 0; m < a.length; m++)
              c = a[m], c._boundsNeedUpdate && c._recalculateBounds(), this._bounds.extend(c._bounds), g = c._wLatLng, v = c._childCount, l += g.lat * v, u += g.lng * v;
            this._latlng = this._wLatLng = new L.LatLng(l / d, u / d), this._boundsNeedUpdate = !1;
          }
        },
        //Set our markers position as given and add it to the map
        _addToMap: function(r) {
          r && (this._backupLatlng = this._latlng, this.setLatLng(r)), this._group._featureGroup.addLayer(this);
        },
        _recursivelyAnimateChildrenIn: function(r, a, l) {
          this._recursively(
            r,
            this._group._map.getMinZoom(),
            l - 1,
            function(u) {
              var d = u._markers, m, c;
              for (m = d.length - 1; m >= 0; m--)
                c = d[m], c._icon && (c._setPos(a), c.clusterHide());
            },
            function(u) {
              var d = u._childClusters, m, c;
              for (m = d.length - 1; m >= 0; m--)
                c = d[m], c._icon && (c._setPos(a), c.clusterHide());
            }
          );
        },
        _recursivelyAnimateChildrenInAndAddSelfToMap: function(r, a, l, u) {
          this._recursively(
            r,
            u,
            a,
            function(d) {
              d._recursivelyAnimateChildrenIn(r, d._group._map.latLngToLayerPoint(d.getLatLng()).round(), l), d._isSingleParent() && l - 1 === u ? (d.clusterShow(), d._recursivelyRemoveChildrenFromMap(r, a, l)) : d.clusterHide(), d._addToMap();
            }
          );
        },
        _recursivelyBecomeVisible: function(r, a) {
          this._recursively(r, this._group._map.getMinZoom(), a, null, function(l) {
            l.clusterShow();
          });
        },
        _recursivelyAddChildrenToMap: function(r, a, l) {
          this._recursively(
            l,
            this._group._map.getMinZoom() - 1,
            a,
            function(u) {
              if (a !== u._zoom)
                for (var d = u._markers.length - 1; d >= 0; d--) {
                  var m = u._markers[d];
                  l.contains(m._latlng) && (r && (m._backupLatlng = m.getLatLng(), m.setLatLng(r), m.clusterHide && m.clusterHide()), u._group._featureGroup.addLayer(m));
                }
            },
            function(u) {
              u._addToMap(r);
            }
          );
        },
        _recursivelyRestoreChildPositions: function(r) {
          for (var a = this._markers.length - 1; a >= 0; a--) {
            var l = this._markers[a];
            l._backupLatlng && (l.setLatLng(l._backupLatlng), delete l._backupLatlng);
          }
          if (r - 1 === this._zoom)
            for (var u = this._childClusters.length - 1; u >= 0; u--)
              this._childClusters[u]._restorePosition();
          else
            for (var d = this._childClusters.length - 1; d >= 0; d--)
              this._childClusters[d]._recursivelyRestoreChildPositions(r);
        },
        _restorePosition: function() {
          this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng);
        },
        //exceptBounds: If set, don't remove any markers/clusters in it
        _recursivelyRemoveChildrenFromMap: function(r, a, l, u) {
          var d, m;
          this._recursively(
            r,
            a - 1,
            l - 1,
            function(c) {
              for (m = c._markers.length - 1; m >= 0; m--)
                d = c._markers[m], (!u || !u.contains(d._latlng)) && (c._group._featureGroup.removeLayer(d), d.clusterShow && d.clusterShow());
            },
            function(c) {
              for (m = c._childClusters.length - 1; m >= 0; m--)
                d = c._childClusters[m], (!u || !u.contains(d._latlng)) && (c._group._featureGroup.removeLayer(d), d.clusterShow && d.clusterShow());
            }
          );
        },
        //Run the given functions recursively to this and child clusters
        // boundsToApplyTo: a L.LatLngBounds representing the bounds of what clusters to recurse in to
        // zoomLevelToStart: zoom level to start running functions (inclusive)
        // zoomLevelToStop: zoom level to stop running functions (inclusive)
        // runAtEveryLevel: function that takes an L.MarkerCluster as an argument that should be applied on every level
        // runAtBottomLevel: function that takes an L.MarkerCluster as an argument that should be applied at only the bottom level
        _recursively: function(r, a, l, u, d) {
          var m = this._childClusters, c = this._zoom, g, v;
          if (a <= c && (u && u(this), d && c === l && d(this)), c < a || c < l)
            for (g = m.length - 1; g >= 0; g--)
              v = m[g], v._boundsNeedUpdate && v._recalculateBounds(), r.intersects(v._bounds) && v._recursively(r, a, l, u, d);
        },
        //Returns true if we are the parent of only one cluster and that cluster is the same as us
        _isSingleParent: function() {
          return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount;
        }
      });
      L.Marker.include({
        clusterHide: function() {
          var r = this.options.opacity;
          return this.setOpacity(0), this.options.opacity = r, this;
        },
        clusterShow: function() {
          return this.setOpacity(this.options.opacity);
        }
      }), L.DistanceGrid = function(r) {
        this._cellSize = r, this._sqCellSize = r * r, this._grid = {}, this._objectPoint = {};
      }, L.DistanceGrid.prototype = {
        addObject: function(r, a) {
          var l = this._getCoord(a.x), u = this._getCoord(a.y), d = this._grid, m = d[u] = d[u] || {}, c = m[l] = m[l] || [], g = L.Util.stamp(r);
          this._objectPoint[g] = a, c.push(r);
        },
        updateObject: function(r, a) {
          this.removeObject(r), this.addObject(r, a);
        },
        //Returns true if the object was found
        removeObject: function(r, a) {
          var l = this._getCoord(a.x), u = this._getCoord(a.y), d = this._grid, m = d[u] = d[u] || {}, c = m[l] = m[l] || [], g, v;
          for (delete this._objectPoint[L.Util.stamp(r)], g = 0, v = c.length; g < v; g++)
            if (c[g] === r)
              return c.splice(g, 1), v === 1 && delete m[l], !0;
        },
        eachObject: function(r, a) {
          var l, u, d, m, c, g, v, P = this._grid;
          for (l in P) {
            c = P[l];
            for (u in c)
              for (g = c[u], d = 0, m = g.length; d < m; d++)
                v = r.call(a, g[d]), v && (d--, m--);
          }
        },
        getNearObject: function(r) {
          var a = this._getCoord(r.x), l = this._getCoord(r.y), u, d, m, c, g, v, P, w, F = this._objectPoint, T = this._sqCellSize, D = null;
          for (u = l - 1; u <= l + 1; u++)
            if (c = this._grid[u], c) {
              for (d = a - 1; d <= a + 1; d++)
                if (g = c[d], g)
                  for (m = 0, v = g.length; m < v; m++)
                    P = g[m], w = this._sqDist(F[L.Util.stamp(P)], r), (w < T || w <= T && D === null) && (T = w, D = P);
            }
          return D;
        },
        _getCoord: function(r) {
          var a = Math.floor(r / this._cellSize);
          return isFinite(a) ? a : r;
        },
        _sqDist: function(r, a) {
          var l = a.x - r.x, u = a.y - r.y;
          return l * l + u * u;
        }
      }, function() {
        L.QuickHull = {
          /*
           * @param {Object} cpt a point to be measured from the baseline
           * @param {Array} bl the baseline, as represented by a two-element
           *   array of latlng objects.
           * @returns {Number} an approximate distance measure
           */
          getDistant: function(r, a) {
            var l = a[1].lat - a[0].lat, u = a[0].lng - a[1].lng;
            return u * (r.lat - a[0].lat) + l * (r.lng - a[0].lng);
          },
          /*
           * @param {Array} baseLine a two-element array of latlng objects
           *   representing the baseline to project from
           * @param {Array} latLngs an array of latlng objects
           * @returns {Object} the maximum point and all new points to stay
           *   in consideration for the hull.
           */
          findMostDistantPointFromBaseLine: function(r, a) {
            var l = 0, u = null, d = [], m, c, g;
            for (m = a.length - 1; m >= 0; m--) {
              if (c = a[m], g = this.getDistant(c, r), g > 0)
                d.push(c);
              else
                continue;
              g > l && (l = g, u = c);
            }
            return { maxPoint: u, newPoints: d };
          },
          /*
           * Given a baseline, compute the convex hull of latLngs as an array
           * of latLngs.
           *
           * @param {Array} latLngs
           * @returns {Array}
           */
          buildConvexHull: function(r, a) {
            var l = [], u = this.findMostDistantPointFromBaseLine(r, a);
            return u.maxPoint ? (l = l.concat(
              this.buildConvexHull([r[0], u.maxPoint], u.newPoints)
            ), l = l.concat(
              this.buildConvexHull([u.maxPoint, r[1]], u.newPoints)
            ), l) : [r[0]];
          },
          /*
           * Given an array of latlngs, compute a convex hull as an array
           * of latlngs
           *
           * @param {Array} latLngs
           * @returns {Array}
           */
          getConvexHull: function(r) {
            var a = !1, l = !1, u = !1, d = !1, m = null, c = null, g = null, v = null, P = null, w = null, F;
            for (F = r.length - 1; F >= 0; F--) {
              var T = r[F];
              (a === !1 || T.lat > a) && (m = T, a = T.lat), (l === !1 || T.lat < l) && (c = T, l = T.lat), (u === !1 || T.lng > u) && (g = T, u = T.lng), (d === !1 || T.lng < d) && (v = T, d = T.lng);
            }
            l !== a ? (w = c, P = m) : (w = v, P = g);
            var D = [].concat(
              this.buildConvexHull([w, P], r),
              this.buildConvexHull([P, w], r)
            );
            return D;
          }
        };
      }(), L.MarkerCluster.include({
        getConvexHull: function() {
          var r = this.getAllChildMarkers(), a = [], l, u;
          for (u = r.length - 1; u >= 0; u--)
            l = r[u].getLatLng(), a.push(l);
          return L.QuickHull.getConvexHull(a);
        }
      }), L.MarkerCluster.include({
        _2PI: Math.PI * 2,
        _circleFootSeparation: 25,
        //related to circumference of circle
        _circleStartAngle: 0,
        _spiralFootSeparation: 28,
        //related to size of spiral (experiment!)
        _spiralLengthStart: 11,
        _spiralLengthFactor: 5,
        _circleSpiralSwitchover: 9,
        //show spiral instead of circle from this marker count upwards.
        // 0 -> always spiral; Infinity -> always circle
        spiderfy: function() {
          if (!(this._group._spiderfied === this || this._group._inZoomAnimation)) {
            var r = this.getAllChildMarkers(null, !0), a = this._group, l = a._map, u = l.latLngToLayerPoint(this._latlng), d;
            this._group._unspiderfy(), this._group._spiderfied = this, this._group.options.spiderfyShapePositions ? d = this._group.options.spiderfyShapePositions(r.length, u) : r.length >= this._circleSpiralSwitchover ? d = this._generatePointsSpiral(r.length, u) : (u.y += 10, d = this._generatePointsCircle(r.length, u)), this._animationSpiderfy(r, d);
          }
        },
        unspiderfy: function(r) {
          this._group._inZoomAnimation || (this._animationUnspiderfy(r), this._group._spiderfied = null);
        },
        _generatePointsCircle: function(r, a) {
          var l = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + r), u = l / this._2PI, d = this._2PI / r, m = [], c, g;
          for (u = Math.max(u, 35), m.length = r, c = 0; c < r; c++)
            g = this._circleStartAngle + c * d, m[c] = new L.Point(a.x + u * Math.cos(g), a.y + u * Math.sin(g))._round();
          return m;
        },
        _generatePointsSpiral: function(r, a) {
          var l = this._group.options.spiderfyDistanceMultiplier, u = l * this._spiralLengthStart, d = l * this._spiralFootSeparation, m = l * this._spiralLengthFactor * this._2PI, c = 0, g = [], v;
          for (g.length = r, v = r; v >= 0; v--)
            v < r && (g[v] = new L.Point(a.x + u * Math.cos(c), a.y + u * Math.sin(c))._round()), c += d / u + v * 5e-4, u += m / c;
          return g;
        },
        _noanimationUnspiderfy: function() {
          var r = this._group, a = r._map, l = r._featureGroup, u = this.getAllChildMarkers(null, !0), d, m;
          for (r._ignoreMove = !0, this.setOpacity(1), m = u.length - 1; m >= 0; m--)
            d = u[m], l.removeLayer(d), d._preSpiderfyLatlng && (d.setLatLng(d._preSpiderfyLatlng), delete d._preSpiderfyLatlng), d.setZIndexOffset && d.setZIndexOffset(0), d._spiderLeg && (a.removeLayer(d._spiderLeg), delete d._spiderLeg);
          r.fire("unspiderfied", {
            cluster: this,
            markers: u
          }), r._ignoreMove = !1, r._spiderfied = null;
        }
      }), L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
        _animationSpiderfy: function(r, a) {
          var l = this._group, u = l._map, d = l._featureGroup, m = this._group.options.spiderLegPolylineOptions, c, g, v, P;
          for (l._ignoreMove = !0, c = 0; c < r.length; c++)
            P = u.layerPointToLatLng(a[c]), g = r[c], v = new L.Polyline([this._latlng, P], m), u.addLayer(v), g._spiderLeg = v, g._preSpiderfyLatlng = g._latlng, g.setLatLng(P), g.setZIndexOffset && g.setZIndexOffset(1e6), d.addLayer(g);
          this.setOpacity(0.3), l._ignoreMove = !1, l.fire("spiderfied", {
            cluster: this,
            markers: r
          });
        },
        _animationUnspiderfy: function() {
          this._noanimationUnspiderfy();
        }
      }), L.MarkerCluster.include({
        _animationSpiderfy: function(r, a) {
          var l = this, u = this._group, d = u._map, m = u._featureGroup, c = this._latlng, g = d.latLngToLayerPoint(c), v = L.Path.SVG, P = L.extend({}, this._group.options.spiderLegPolylineOptions), w = P.opacity, F, T, D, U, nt, tt;
          for (w === void 0 && (w = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity), v ? (P.opacity = 0, P.className = (P.className || "") + " leaflet-cluster-spider-leg") : P.opacity = w, u._ignoreMove = !0, F = 0; F < r.length; F++)
            T = r[F], tt = d.layerPointToLatLng(a[F]), D = new L.Polyline([c, tt], P), d.addLayer(D), T._spiderLeg = D, v && (U = D._path, nt = U.getTotalLength() + 0.1, U.style.strokeDasharray = nt, U.style.strokeDashoffset = nt), T.setZIndexOffset && T.setZIndexOffset(1e6), T.clusterHide && T.clusterHide(), m.addLayer(T), T._setPos && T._setPos(g);
          for (u._forceLayout(), u._animationStart(), F = r.length - 1; F >= 0; F--)
            tt = d.layerPointToLatLng(a[F]), T = r[F], T._preSpiderfyLatlng = T._latlng, T.setLatLng(tt), T.clusterShow && T.clusterShow(), v && (D = T._spiderLeg, U = D._path, U.style.strokeDashoffset = 0, D.setStyle({ opacity: w }));
          this.setOpacity(0.3), u._ignoreMove = !1, setTimeout(function() {
            u._animationEnd(), u.fire("spiderfied", {
              cluster: l,
              markers: r
            });
          }, 200);
        },
        _animationUnspiderfy: function(r) {
          var a = this, l = this._group, u = l._map, d = l._featureGroup, m = r ? u._latLngToNewLayerPoint(this._latlng, r.zoom, r.center) : u.latLngToLayerPoint(this._latlng), c = this.getAllChildMarkers(null, !0), g = L.Path.SVG, v, P, w, F, T, D;
          for (l._ignoreMove = !0, l._animationStart(), this.setOpacity(1), P = c.length - 1; P >= 0; P--)
            v = c[P], v._preSpiderfyLatlng && (v.closePopup(), v.setLatLng(v._preSpiderfyLatlng), delete v._preSpiderfyLatlng, D = !0, v._setPos && (v._setPos(m), D = !1), v.clusterHide && (v.clusterHide(), D = !1), D && d.removeLayer(v), g && (w = v._spiderLeg, F = w._path, T = F.getTotalLength() + 0.1, F.style.strokeDashoffset = T, w.setStyle({ opacity: 0 })));
          l._ignoreMove = !1, setTimeout(function() {
            var U = 0;
            for (P = c.length - 1; P >= 0; P--)
              v = c[P], v._spiderLeg && U++;
            for (P = c.length - 1; P >= 0; P--)
              v = c[P], v._spiderLeg && (v.clusterShow && v.clusterShow(), v.setZIndexOffset && v.setZIndexOffset(0), U > 1 && d.removeLayer(v), u.removeLayer(v._spiderLeg), delete v._spiderLeg);
            l._animationEnd(), l.fire("unspiderfied", {
              cluster: a,
              markers: c
            });
          }, 200);
        }
      }), L.MarkerClusterGroup.include({
        //The MarkerCluster currently spiderfied (if any)
        _spiderfied: null,
        unspiderfy: function() {
          this._unspiderfy.apply(this, arguments);
        },
        _spiderfierOnAdd: function() {
          this._map.on("click", this._unspiderfyWrapper, this), this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this), this._map.on("zoomend", this._noanimationUnspiderfy, this), L.Browser.touch || this._map.getRenderer(this);
        },
        _spiderfierOnRemove: function() {
          this._map.off("click", this._unspiderfyWrapper, this), this._map.off("zoomstart", this._unspiderfyZoomStart, this), this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._map.off("zoomend", this._noanimationUnspiderfy, this), this._noanimationUnspiderfy();
        },
        //On zoom start we add a zoomanim handler so that we are guaranteed to be last (after markers are animated)
        //This means we can define the animation they do rather than Markers doing an animation to their actual location
        _unspiderfyZoomStart: function() {
          this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this);
        },
        _unspiderfyZoomAnim: function(r) {
          L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(r));
        },
        _unspiderfyWrapper: function() {
          this._unspiderfy();
        },
        _unspiderfy: function(r) {
          this._spiderfied && this._spiderfied.unspiderfy(r);
        },
        _noanimationUnspiderfy: function() {
          this._spiderfied && this._spiderfied._noanimationUnspiderfy();
        },
        //If the given layer is currently being spiderfied then we unspiderfy it so it isn't on the map anymore etc
        _unspiderfyLayer: function(r) {
          r._spiderLeg && (this._featureGroup.removeLayer(r), r.clusterShow && r.clusterShow(), r.setZIndexOffset && r.setZIndexOffset(0), this._map.removeLayer(r._spiderLeg), delete r._spiderLeg);
        }
      }), L.MarkerClusterGroup.include({
        /**
         * Updates the icon of all clusters which are parents of the given marker(s).
         * In singleMarkerMode, also updates the given marker(s) icon.
         * @param layers L.MarkerClusterGroup|L.LayerGroup|Array(L.Marker)|Map(L.Marker)|
         * L.MarkerCluster|L.Marker (optional) list of markers (or single marker) whose parent
         * clusters need to be updated. If not provided, retrieves all child markers of this.
         * @returns {L.MarkerClusterGroup}
         */
        refreshClusters: function(r) {
          return r ? r instanceof L.MarkerClusterGroup ? r = r._topClusterLevel.getAllChildMarkers() : r instanceof L.LayerGroup ? r = r._layers : r instanceof L.MarkerCluster ? r = r.getAllChildMarkers() : r instanceof L.Marker && (r = [r]) : r = this._topClusterLevel.getAllChildMarkers(), this._flagParentsIconsNeedUpdate(r), this._refreshClustersIcons(), this.options.singleMarkerMode && this._refreshSingleMarkerModeMarkers(r), this;
        },
        /**
         * Simply flags all parent clusters of the given markers as having a "dirty" icon.
         * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
         * @private
         */
        _flagParentsIconsNeedUpdate: function(r) {
          var a, l;
          for (a in r)
            for (l = r[a].__parent; l; )
              l._iconNeedsUpdate = !0, l = l.__parent;
        },
        /**
         * Re-draws the icon of the supplied markers.
         * To be used in singleMarkerMode only.
         * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
         * @private
         */
        _refreshSingleMarkerModeMarkers: function(r) {
          var a, l;
          for (a in r)
            l = r[a], this.hasLayer(l) && l.setIcon(this._overrideMarkerIcon(l));
        }
      }), L.Marker.include({
        /**
         * Updates the given options in the marker's icon and refreshes the marker.
         * @param options map object of icon options.
         * @param directlyRefreshClusters boolean (optional) true to trigger
         * MCG.refreshClustersOf() right away with this single marker.
         * @returns {L.Marker}
         */
        refreshIconOptions: function(r, a) {
          var l = this.options.icon;
          return L.setOptions(l, r), this.setIcon(l), a && this.__parent && this.__parent._group.refreshClusters(this), this;
        }
      }), _.MarkerClusterGroup = S, _.MarkerCluster = k, Object.defineProperty(_, "__esModule", { value: !0 });
    });
  }(re, re.exports)), re.exports;
}
_r();
const X = 0.7, $ = X * 1.2, pr = new it.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  iconSize: [25 * X, 41 * X],
  iconAnchor: [12 * X, 41 * X],
  popupAnchor: [1 * X, -34 * X],
  shadowSize: [41 * X, 41 * X]
}), Tn = new it.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  iconSize: [25 * X, 41 * X],
  iconAnchor: [12 * X, 41 * X],
  popupAnchor: [1 * X, -34 * X],
  shadowSize: [41 * X, 41 * X]
}), mr = new it.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  iconSize: [25 * $, 41 * $],
  iconAnchor: [12 * $, 41 * $],
  popupAnchor: [1 * $, -34 * $],
  shadowSize: [41 * $, 41 * $]
});
new it.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
  iconSize: [25 * $, 41 * $],
  iconAnchor: [12 * $, 41 * $],
  popupAnchor: [1 * $, -34 * $],
  shadowSize: [41 * $, 41 * $]
});
class gr extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["src"];
  }
  async connectedCallback() {
    if (this.shadowRoot == null)
      return;
    const b = document.createElement("style");
    b.textContent = `
          :host {
            display: block;
          }
        `, this.shadowRoot.append(b);
    const _ = document.createElement("style");
    _.textContent = hr, this.shadowRoot.appendChild(_);
    const S = document.createElement("style");
    S.textContent = ur, this.shadowRoot.appendChild(S);
    const k = document.createElement("style");
    k.textContent = cr, this.shadowRoot.appendChild(k);
    const r = document.createElement("style");
    r.textContent = fr, this.shadowRoot.appendChild(r);
    const a = document.createElement("div");
    a.style.width = "100%", a.style.height = "100%", this.shadowRoot.appendChild(a);
    const l = this.getAttribute("callsign");
    if (!l)
      return;
    let u = [];
    const d = this.getAttribute("src");
    if (d) {
      const w = await (await fetch(d)).text();
      u = Cr(w);
    }
    const m = new Set(u.map((P) => P.band));
    let c = {
      entries: u,
      callsign: l,
      modes: new Set(ai),
      bands: new Set(m),
      confirmationFilter: /* @__PURE__ */ new Set([!0, !1]),
      modeFilter: new Set(ai),
      bandFilter: new Set(m),
      hamburger: !1
    }, g = it.map(a).setView([47, 19], 3);
    function v(P) {
      g.remove(), g = it.map(a).setView([47, 19], 3), c = { ...c, ...P }, console.log(c), Sn(g, c, v);
    }
    Sn(g, c, v);
  }
}
function Sn(x, b, _) {
  it.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors"
  }).addTo(x), x.addControl(new it.Control.Fullscreen({
    title: {
      false: "View Fullscreen",
      true: "Exit Fullscreen"
    }
  })), x.addControl(vr(b, _)), x.addLayer(wr(b));
}
function vr(x, b) {
  const _ = new it.Control({ position: "topright" });
  return _.onAdd = function() {
    const S = it.DomUtil.create("div", "leaflet-control leaflet-control-custom");
    S.style.background = "rgba(0, 0, 0, 0.7)", S.style.color = "white", S.style.padding = "10px", S.style.fontSize = "18px", S.style.fontWeight = "bold", S.style.borderRadius = "5px", S.style.display = "flex", S.style.flexDirection = "column", S.style.alignItems = "flex-end", S.style.gap = "5px", it.DomEvent.disableClickPropagation(S), it.DomEvent.disableScrollPropagation(S);
    const k = document.createElement("div");
    k.style.display = "flex", k.style.gap = "10px", k.style.alignItems = "center";
    const r = document.createElement("a");
    r.href = `https://www.qrz.com/db/${x.callsign}`, r.target = "_blank", r.textContent = x.callsign, r.style.color = "white", r.style.textDecoration = "none";
    const a = document.createElement("button");
    a.textContent = "☰", a.style.background = "none", a.style.border = "none", a.style.color = "white", a.style.fontSize = "20px", a.style.cursor = "pointer", k.appendChild(r), k.appendChild(a), S.appendChild(k);
    const l = document.createElement("div");
    return l.style.backgroundColor = "#2c2f36", l.style.color = "#fff", l.style.padding = "1rem", l.style.borderRadius = "12px", l.style.width = "240px", l.style.display = x.hamburger ? "flex" : "none", l.style.flexDirection = "column", l.style.gap = "16px", l.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)", a.addEventListener("click", () => {
      b({ hamburger: !x.hamburger });
    }), l.appendChild(Lr(x, b)), l.appendChild(xr(x, b)), l.appendChild(yr(x, b)), S.appendChild(l), S;
  }, _;
}
function li(x, b) {
  return x.has(b) ? new Set([...x].filter((_) => _ !== b)) : /* @__PURE__ */ new Set([...x, b]);
}
function hi(x, b) {
  const _ = document.createElement("div");
  _.style.display = "flex", _.style.flexDirection = "column";
  const S = document.createElement("div");
  S.textContent = x, S.style.fontWeight = "bold", S.style.marginBottom = "4px";
  const k = document.createElement("div");
  return k.style.display = "flex", k.style.flexWrap = "wrap", k.style.gap = "8px", b.forEach((r) => {
    k.appendChild(r);
  }), _.appendChild(S), _.appendChild(k), _;
}
function ui(x, b = !1) {
  const _ = document.createElement("button");
  return _.textContent = x, _.style.padding = "8px 12px", _.style.borderRadius = "8px", _.style.border = "1px solid #555", _.style.cursor = "pointer", _.style.transition = "all 0.2s ease", _.style.background = b ? "#fff" : "transparent", _.style.color = b ? "#2c2f36" : "#ccc", _.style.fontWeight = b ? "bold" : "normal", _;
}
function yr(x, b) {
  return hi(
    "Bands",
    [...x.bands].map((_) => {
      const S = ui(_, x.bandFilter.has(_));
      return S.addEventListener("click", () => {
        b({ bandFilter: li(x.bandFilter, _) });
      }), S;
    })
  );
}
function Lr(x, b) {
  return hi(
    "Confirmed",
    [!0, !1].map((_) => {
      const k = ui(_ ? "Yes" : "No", x.confirmationFilter.has(_));
      return k.addEventListener("click", () => {
        b({ confirmationFilter: li(x.confirmationFilter, _) });
      }), k;
    })
  );
}
function xr(x, b) {
  return hi(
    "Modes",
    ai.map((_) => {
      const S = ui(_, x.modeFilter.has(_));
      return S.addEventListener("click", () => {
        b({ modeFilter: li(x.modeFilter, _) });
      }), S;
    })
  );
}
function wr(x, b) {
  const _ = it.layerGroup(), S = x.entries, k = x.confirmationFilter, r = x.modeFilter, a = x.bandFilter, l = /* @__PURE__ */ new Map();
  return S.forEach(({ lat: u, lon: d, callsign: m, isConfirmed: c, mode: g, band: v, date: P }) => {
    if (!k.has(c) || !r.has(g) || !a.has(v))
      return;
    const w = c ? pr : Tn, F = new kr([u, d], {
      icon: w,
      isConfirmed: c,
      mode: g
    }).bindPopup(
      `<b>${m}</b><br>
        Date: ${P}<br>
        Band: ${v}<br>
        Mode: ${g}<br>
        `
    ), T = `${u.toFixed(4)},${d.toFixed(4)}`;
    l.has(T) || l.set(T, []), l.get(T).push(F);
  }), l.forEach((u, d) => {
    if (u.length === 1)
      u[0].addTo(_);
    else {
      const m = u.some((g) => g.isConfirmed) ? mr : Tn, c = it.markerClusterGroup({
        iconCreateFunction: () => m
      });
      for (const g of u)
        c.addLayer(g);
      _.addLayer(c);
    }
  }), _;
}
function br(x) {
  if (x = x.toUpperCase(), x.length < 4 || x.length % 2 !== 0)
    throw "grid square: grid must be at least 4 characters and have an even length: " + x;
  let b = -90, _ = -180, S = 240, k = 480;
  for (let r = 0; r < x.length; r += 2) {
    r % 4 == 2 ? (k /= 10, S /= 10) : r % 4 == 0 && (k /= 24, S /= 24);
    const a = x.charAt(r), l = x.charAt(r + 1);
    a >= "0" && a <= "9" ? (_ += k * parseInt(a, 10), b += S * parseInt(l, 10)) : (_ += k * (a.charCodeAt(0) - 65), b += S * (l.charCodeAt(0) - 65));
  }
  return b += S * 0.5, _ += k * 0.5, { lat: b, lon: _ };
}
function Pr(x) {
  switch (x.toUpperCase()) {
    case "SSB":
    case "FM":
      return "PHONE";
    case "FT":
    case "FT8":
    case "FT4":
    case "PSK":
    case "RTTY":
    case "JT65":
    case "JS8":
      return "DIGITAL";
    case "CW":
      return "CW";
    default:
      return;
  }
}
function Cr(x) {
  const b = [], _ = x.split("<eoh>");
  return _[_.length - 1].split("<eor>").forEach((k) => {
    const r = k.match(/<lat:[0-9]+>([NS])([0-9]+) ([0-9]+\.[0-9]+)/i), a = k.match(/<lon:[0-9]+>([EW])([0-9]+) ([0-9]+\.[0-9]+)/i), l = k.match(/<gridsquare:[0-9]+>([A-Z0-9/]+)/i), u = k.match(/<call:[0-9]+>([A-Z0-9/]+)/i), d = k.match(/<app_qrzlog_qsldate:[0-9]+>([0-9]+)/i), m = k.match(/<mode:[0-9]+>([A-Z]+)/i), c = k.match(/<band:[0-9]+>([A-Z0-9]+)/i), g = c ? c[1].toUpperCase() : "UNKNOWN", v = k.match(/<qso_date:[0-9]+>([0-9]{8})/i), P = v ? v[1] : null, w = P ? new Date(
      parseInt(P.slice(0, 4)),
      // Year
      parseInt(P.slice(4, 6)) - 1,
      // Month is 0-based
      parseInt(P.slice(6, 8))
      // Day
    ) : null, F = w == null ? void 0 : w.toISOString().split("T")[0];
    let T = 0, D = 0;
    if (r && a && (T = parseFloat(r[2]) + parseFloat(r[3]) / 60, D = parseFloat(a[2]) + parseFloat(a[3]) / 60, r[1] == "S" && (T = -T), a[1] == "W" && (D = -D)), T == 0 && D == 0 && l) {
      let nt = br(l[0]);
      T = nt.lat, D = nt.lon;
    }
    const U = m ? Pr(m[1]) : void 0;
    if (U && (T !== 0 || D !== 0)) {
      const nt = u ? u[1] : "Unknown", tt = d != null, Tt = F ?? "Unknown";
      b.push({ lat: T, lon: D, callsign: nt, isConfirmed: tt, mode: U, band: g, date: Tt });
    }
  }), b;
}
const ai = ["PHONE", "CW", "DIGITAL"];
class kr extends it.Marker {
  constructor(_, S) {
    super(_, S);
    si(this, "isConfirmed");
    si(this, "mode");
    this.isConfirmed = S.isConfirmed, this.mode = S.mode;
  }
}
customElements.define("qso-map", gr);
