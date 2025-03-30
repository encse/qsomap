function Ko(Z) {
  return Z && Z.__esModule && Object.prototype.hasOwnProperty.call(Z, "default") ? Z.default : Z;
}
var ae = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var Yo = ae.exports, xn;
function Qo() {
  return xn || (xn = 1, function(Z, F) {
    (function(y, mt) {
      mt(F);
    })(Yo, function(y) {
      var mt = "1.9.4";
      function N(t) {
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
      var h = 0;
      function u(t) {
        return "_leaflet_id" in t || (t._leaflet_id = ++h), t._leaflet_id;
      }
      function f(t, e, i) {
        var n, o, s, l;
        return l = function() {
          n = !1, o && (s.apply(i, o), o = !1);
        }, s = function() {
          n ? o = arguments : (t.apply(i, arguments), setTimeout(l, e), n = !0);
        }, s;
      }
      function p(t, e, i) {
        var n = e[1], o = e[0], s = n - o;
        return t === n && i ? t : ((t - o) % s + s) % s + o;
      }
      function d() {
        return !1;
      }
      function g(t, e) {
        if (e === !1)
          return t;
        var i = Math.pow(10, e === void 0 ? 6 : e);
        return Math.round(t * i) / i;
      }
      function m(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
      }
      function b(t) {
        return m(t).split(/\s+/);
      }
      function x(t, e) {
        Object.prototype.hasOwnProperty.call(t, "options") || (t.options = t.options ? r(t.options) : {});
        for (var i in e)
          t.options[i] = e[i];
        return t.options;
      }
      function M(t, e, i) {
        var n = [];
        for (var o in t)
          n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (!e || e.indexOf("?") === -1 ? "?" : "&") + n.join("&");
      }
      var C = /\{ *([\w_ -]+) *\}/g;
      function E(t, e) {
        return t.replace(C, function(i, n) {
          var o = e[n];
          if (o === void 0)
            throw new Error("No value provided for variable " + i);
          return typeof o == "function" && (o = o(e)), o;
        });
      }
      var I = Array.isArray || function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      };
      function U(t, e) {
        for (var i = 0; i < t.length; i++)
          if (t[i] === e)
            return i;
        return -1;
      }
      var G = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function $(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t];
      }
      var ct = 0;
      function xt(t) {
        var e = +/* @__PURE__ */ new Date(), i = Math.max(0, 16 - (e - ct));
        return ct = e + i, window.setTimeout(t, i);
      }
      var Wt = window.requestAnimationFrame || $("RequestAnimationFrame") || xt, at = window.cancelAnimationFrame || $("CancelAnimationFrame") || $("CancelRequestAnimationFrame") || function(t) {
        window.clearTimeout(t);
      };
      function q(t, e, i) {
        if (i && Wt === xt)
          t.call(e);
        else
          return Wt.call(window, a(t, e));
      }
      function tt(t) {
        t && at.call(window, t);
      }
      var qt = {
        __proto__: null,
        extend: N,
        create: r,
        bind: a,
        get lastId() {
          return h;
        },
        stamp: u,
        throttle: f,
        wrapNum: p,
        falseFn: d,
        formatNum: g,
        trim: m,
        splitWords: b,
        setOptions: x,
        getParamString: M,
        template: E,
        isArray: I,
        indexOf: U,
        emptyImageUrl: G,
        requestFn: Wt,
        cancelFn: at,
        requestAnimFrame: q,
        cancelAnimFrame: tt
      };
      function ft() {
      }
      ft.extend = function(t) {
        var e = function() {
          x(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, i = e.__super__ = this.prototype, n = r(i);
        n.constructor = e, e.prototype = n;
        for (var o in this)
          Object.prototype.hasOwnProperty.call(this, o) && o !== "prototype" && o !== "__super__" && (e[o] = this[o]);
        return t.statics && N(e, t.statics), t.includes && (Te(t.includes), N.apply(null, [n].concat(t.includes))), N(n, t), delete n.statics, delete n.includes, n.options && (n.options = i.options ? r(i.options) : {}, N(n.options, t.options)), n._initHooks = [], n.callInitHooks = function() {
          if (!this._initHooksCalled) {
            i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var s = 0, l = n._initHooks.length; s < l; s++)
              n._initHooks[s].call(this);
          }
        }, e;
      }, ft.include = function(t) {
        var e = this.prototype.options;
        return N(this.prototype, t), t.options && (this.prototype.options = e, this.mergeOptions(t.options)), this;
      }, ft.mergeOptions = function(t) {
        return N(this.prototype.options, t), this;
      }, ft.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1), i = typeof t == "function" ? t : function() {
          this[t].apply(this, e);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this;
      };
      function Te(t) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          t = I(t) ? t : [t];
          for (var e = 0; e < t.length; e++)
            t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var et = {
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
            t = b(t);
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
            t = b(t);
            for (var o = arguments.length === 1, s = 0, l = t.length; s < l; s++)
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
                  n[o].fn = d;
              delete this._events[t];
              return;
            }
            if (typeof e != "function") {
              console.warn("wrong listener type: " + typeof e);
              return;
            }
            var l = this._listens(t, e, i);
            if (l !== !1) {
              var c = n[l];
              this._firingCount && (c.fn = d, this._events[t] = n = n.slice()), n.splice(l, 1);
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
          var n = N({}, e, {
            type: t,
            target: this,
            sourceTarget: e && e.sourceTarget || this
          });
          if (this._events) {
            var o = this._events[t];
            if (o) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var s = 0, l = o.length; s < l; s++) {
                var c = o[s], _ = c.fn;
                c.once && this.off(t, _, c.ctx), _.call(c.ctx || this, n);
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
            for (var l in this._eventParents)
              if (this._eventParents[l].listens(t, e, i, n))
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
            t = b(t);
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
            this._eventParents[e].fire(t.type, N({
              layer: t.target,
              propagatedFrom: t.target
            }, t), !0);
        }
      };
      et.addEventListener = et.on, et.removeEventListener = et.clearAllEventListeners = et.off, et.addOneTimeEventListener = et.once, et.fireEvent = et.fire, et.hasEventListeners = et.listens;
      var Vt = ft.extend(et);
      function S(t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e;
      }
      var li = Math.trunc || function(t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
      S.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new S(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(t) {
          return this.clone()._add(T(t));
        },
        _add: function(t) {
          return this.x += t.x, this.y += t.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(t) {
          return this.clone()._subtract(T(t));
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
          return new S(this.x * t.x, this.y * t.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(t) {
          return new S(this.x / t.x, this.y / t.y);
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
          return this.x = li(this.x), this.y = li(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(t) {
          t = T(t);
          var e = t.x - this.x, i = t.y - this.y;
          return Math.sqrt(e * e + i * i);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(t) {
          return t = T(t), t.x === this.x && t.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(t) {
          return t = T(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + g(this.x) + ", " + g(this.y) + ")";
        }
      };
      function T(t, e, i) {
        return t instanceof S ? t : I(t) ? new S(t[0], t[1]) : t == null ? t : typeof t == "object" && "x" in t && "y" in t ? new S(t.x, t.y) : new S(t, e, i);
      }
      function V(t, e) {
        if (t)
          for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
            this.extend(i[n]);
      }
      V.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(t) {
          var e, i;
          if (!t)
            return this;
          if (t instanceof S || typeof t[0] == "number" || "x" in t)
            e = i = T(t);
          else if (t = ot(t), e = t.min, i = t.max, !e || !i)
            return this;
          return !this.min && !this.max ? (this.min = e.clone(), this.max = i.clone()) : (this.min.x = Math.min(e.x, this.min.x), this.max.x = Math.max(i.x, this.max.x), this.min.y = Math.min(e.y, this.min.y), this.max.y = Math.max(i.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(t) {
          return T(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            t
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return T(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return T(this.max.x, this.min.y);
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
          return typeof t[0] == "number" || t instanceof S ? t = T(t) : t = ot(t), t instanceof V ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(t) {
          t = ot(t);
          var e = this.min, i = this.max, n = t.min, o = t.max, s = o.x >= e.x && n.x <= i.x, l = o.y >= e.y && n.y <= i.y;
          return s && l;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(t) {
          t = ot(t);
          var e = this.min, i = this.max, n = t.min, o = t.max, s = o.x > e.x && n.x < i.x, l = o.y > e.y && n.y < i.y;
          return s && l;
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
          return ot(
            T(e.x - n, e.y - o),
            T(i.x + n, i.y + o)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(t) {
          return t ? (t = ot(t), this.min.equals(t.getTopLeft()) && this.max.equals(t.getBottomRight())) : !1;
        }
      };
      function ot(t, e) {
        return !t || t instanceof V ? t : new V(t, e);
      }
      function rt(t, e) {
        if (t)
          for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
            this.extend(i[n]);
      }
      rt.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(t) {
          var e = this._southWest, i = this._northEast, n, o;
          if (t instanceof H)
            n = t, o = t;
          else if (t instanceof rt) {
            if (n = t._southWest, o = t._northEast, !n || !o)
              return this;
          } else
            return t ? this.extend(B(t) || Y(t)) : this;
          return !e && !i ? (this._southWest = new H(n.lat, n.lng), this._northEast = new H(o.lat, o.lng)) : (e.lat = Math.min(n.lat, e.lat), e.lng = Math.min(n.lng, e.lng), i.lat = Math.max(o.lat, i.lat), i.lng = Math.max(o.lng, i.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(t) {
          var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t, o = Math.abs(e.lng - i.lng) * t;
          return new rt(
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
          typeof t[0] == "number" || t instanceof H || "lat" in t ? t = B(t) : t = Y(t);
          var e = this._southWest, i = this._northEast, n, o;
          return t instanceof rt ? (n = t.getSouthWest(), o = t.getNorthEast()) : n = o = t, n.lat >= e.lat && o.lat <= i.lat && n.lng >= e.lng && o.lng <= i.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(t) {
          t = Y(t);
          var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), s = o.lat >= e.lat && n.lat <= i.lat, l = o.lng >= e.lng && n.lng <= i.lng;
          return s && l;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(t) {
          t = Y(t);
          var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(), s = o.lat > e.lat && n.lat < i.lat, l = o.lng > e.lng && n.lng < i.lng;
          return s && l;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(t, e) {
          return t ? (t = Y(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function Y(t, e) {
        return t instanceof rt ? t : new rt(t, e);
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
          return Mt.distance(this, B(t));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return Mt.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(t) {
          var e = 180 * t / 40075017, i = e / Math.cos(Math.PI / 180 * this.lat);
          return Y(
            [this.lat - e, this.lng - i],
            [this.lat + e, this.lng + i]
          );
        },
        clone: function() {
          return new H(this.lat, this.lng, this.alt);
        }
      };
      function B(t, e, i) {
        return t instanceof H ? t : I(t) && typeof t[0] != "object" ? t.length === 3 ? new H(t[0], t[1], t[2]) : t.length === 2 ? new H(t[0], t[1]) : null : t == null ? t : typeof t == "object" && "lat" in t ? new H(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : e === void 0 ? null : new H(t, e, i);
      }
      var wt = {
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
          return new V(n, o);
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
          var e = this.wrapLng ? p(t.lng, this.wrapLng, !0) : t.lng, i = this.wrapLat ? p(t.lat, this.wrapLat, !0) : t.lat, n = t.alt;
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
          var s = t.getSouthWest(), l = t.getNorthEast(), c = new H(s.lat - n, s.lng - o), _ = new H(l.lat - n, l.lng - o);
          return new rt(c, _);
        }
      }, Mt = N({}, wt, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(t, e) {
          var i = Math.PI / 180, n = t.lat * i, o = e.lat * i, s = Math.sin((e.lat - t.lat) * i / 2), l = Math.sin((e.lng - t.lng) * i / 2), c = s * s + Math.cos(n) * Math.cos(o) * l * l, _ = 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c));
          return this.R * _;
        }
      }), ui = 6378137, Se = {
        R: ui,
        MAX_LATITUDE: 85.0511287798,
        project: function(t) {
          var e = Math.PI / 180, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), o = Math.sin(n * e);
          return new S(
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
          var t = ui * Math.PI;
          return new V([-t, -t], [t, t]);
        }()
      };
      function Ae(t, e, i, n) {
        if (I(t)) {
          this._a = t[0], this._b = t[1], this._c = t[2], this._d = t[3];
          return;
        }
        this._a = t, this._b = e, this._c = i, this._d = n;
      }
      Ae.prototype = {
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
          return e = e || 1, new S(
            (t.x / e - this._b) / this._a,
            (t.y / e - this._d) / this._c
          );
        }
      };
      function jt(t, e, i, n) {
        return new Ae(t, e, i, n);
      }
      var ze = N({}, Mt, {
        code: "EPSG:3857",
        projection: Se,
        transformation: function() {
          var t = 0.5 / (Math.PI * Se.R);
          return jt(t, 0.5, -t, 0.5);
        }()
      }), bn = N({}, ze, {
        code: "EPSG:900913"
      });
      function ci(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t);
      }
      function fi(t, e) {
        var i = "", n, o, s, l, c, _;
        for (n = 0, s = t.length; n < s; n++) {
          for (c = t[n], o = 0, l = c.length; o < l; o++)
            _ = c[o], i += (o ? "L" : "M") + _.x + " " + _.y;
          i += e ? P.svg ? "z" : "x" : "";
        }
        return i || "M0 0";
      }
      var Ee = document.documentElement.style, le = "ActiveXObject" in window, Pn = le && !document.addEventListener, di = "msLaunchUri" in navigator && !("documentMode" in document), Oe = gt("webkit"), _i = gt("android"), pi = gt("android 2") || gt("android 3"), Cn = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), kn = _i && gt("Google") && Cn < 537 && !("AudioNode" in window), Ze = !!window.opera, mi = !di && gt("chrome"), gi = gt("gecko") && !Oe && !Ze && !le, Mn = !mi && gt("safari"), vi = gt("phantom"), yi = "OTransition" in Ee, Tn = navigator.platform.indexOf("Win") === 0, Li = le && "transition" in Ee, Ie = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !pi, xi = "MozPerspective" in Ee, Sn = !window.L_DISABLE_3D && (Li || Ie || xi) && !yi && !vi, Kt = typeof orientation < "u" || gt("mobile"), An = Kt && Oe, zn = Kt && Ie, wi = !window.PointerEvent && window.MSPointerEvent, bi = !!(window.PointerEvent || wi), Pi = "ontouchstart" in window || !!window.TouchEvent, En = !window.L_NO_TOUCH && (Pi || bi), On = Kt && Ze, Zn = Kt && gi, In = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Bn = function() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function() {
              t = !0;
            }
          });
          window.addEventListener("testPassiveEventSupport", d, e), window.removeEventListener("testPassiveEventSupport", d, e);
        } catch {
        }
        return t;
      }(), Rn = function() {
        return !!document.createElement("canvas").getContext;
      }(), Be = !!(document.createElementNS && ci("svg").createSVGRect), Nn = !!Be && function() {
        var t = document.createElement("div");
        return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      }(), Dn = !Be && function() {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var e = t.firstChild;
          return e.style.behavior = "url(#default#VML)", e && typeof e.adj == "object";
        } catch {
          return !1;
        }
      }(), Fn = navigator.platform.indexOf("Mac") === 0, Hn = navigator.platform.indexOf("Linux") === 0;
      function gt(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
      }
      var P = {
        ie: le,
        ielt9: Pn,
        edge: di,
        webkit: Oe,
        android: _i,
        android23: pi,
        androidStock: kn,
        opera: Ze,
        chrome: mi,
        gecko: gi,
        safari: Mn,
        phantom: vi,
        opera12: yi,
        win: Tn,
        ie3d: Li,
        webkit3d: Ie,
        gecko3d: xi,
        any3d: Sn,
        mobile: Kt,
        mobileWebkit: An,
        mobileWebkit3d: zn,
        msPointer: wi,
        pointer: bi,
        touch: En,
        touchNative: Pi,
        mobileOpera: On,
        mobileGecko: Zn,
        retina: In,
        passiveEvents: Bn,
        canvas: Rn,
        svg: Be,
        vml: Dn,
        inlineSvg: Nn,
        mac: Fn,
        linux: Hn
      }, Ci = P.msPointer ? "MSPointerDown" : "pointerdown", ki = P.msPointer ? "MSPointerMove" : "pointermove", Mi = P.msPointer ? "MSPointerUp" : "pointerup", Ti = P.msPointer ? "MSPointerCancel" : "pointercancel", Re = {
        touchstart: Ci,
        touchmove: ki,
        touchend: Mi,
        touchcancel: Ti
      }, Si = {
        touchstart: jn,
        touchmove: ue,
        touchend: ue,
        touchcancel: ue
      }, It = {}, Ai = !1;
      function Un(t, e, i) {
        return e === "touchstart" && Vn(), Si[e] ? (i = Si[e].bind(this, i), t.addEventListener(Re[e], i, !1), i) : (console.warn("wrong event specified:", e), d);
      }
      function Gn(t, e, i) {
        if (!Re[e]) {
          console.warn("wrong event specified:", e);
          return;
        }
        t.removeEventListener(Re[e], i, !1);
      }
      function Wn(t) {
        It[t.pointerId] = t;
      }
      function qn(t) {
        It[t.pointerId] && (It[t.pointerId] = t);
      }
      function zi(t) {
        delete It[t.pointerId];
      }
      function Vn() {
        Ai || (document.addEventListener(Ci, Wn, !0), document.addEventListener(ki, qn, !0), document.addEventListener(Mi, zi, !0), document.addEventListener(Ti, zi, !0), Ai = !0);
      }
      function ue(t, e) {
        if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
          e.touches = [];
          for (var i in It)
            e.touches.push(It[i]);
          e.changedTouches = [e], t(e);
        }
      }
      function jn(t, e) {
        e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH && it(e), ue(t, e);
      }
      function Kn(t) {
        var e = {}, i, n;
        for (n in t)
          i = t[n], e[n] = i && i.bind ? i.bind(t) : i;
        return t = e, e.type = "dblclick", e.detail = 2, e.isTrusted = !1, e._simulated = !0, e;
      }
      var Yn = 200;
      function Qn(t, e) {
        t.addEventListener("dblclick", e);
        var i = 0, n;
        function o(s) {
          if (s.detail !== 1) {
            n = s.detail;
            return;
          }
          if (!(s.pointerType === "mouse" || s.sourceCapabilities && !s.sourceCapabilities.firesTouchEvents)) {
            var l = Bi(s);
            if (!(l.some(function(_) {
              return _ instanceof HTMLLabelElement && _.attributes.for;
            }) && !l.some(function(_) {
              return _ instanceof HTMLInputElement || _ instanceof HTMLSelectElement;
            }))) {
              var c = Date.now();
              c - i <= Yn ? (n++, n === 2 && e(Kn(s))) : n = 1, i = c;
            }
          }
        }
        return t.addEventListener("click", o), {
          dblclick: e,
          simDblclick: o
        };
      }
      function Xn(t, e) {
        t.removeEventListener("dblclick", e.dblclick), t.removeEventListener("click", e.simDblclick);
      }
      var Ne = de(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), Yt = de(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), Ei = Yt === "webkitTransition" || Yt === "OTransition" ? Yt + "End" : "transitionend";
      function Oi(t) {
        return typeof t == "string" ? document.getElementById(t) : t;
      }
      function Qt(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        if ((!i || i === "auto") && document.defaultView) {
          var n = document.defaultView.getComputedStyle(t, null);
          i = n ? n[e] : null;
        }
        return i === "auto" ? null : i;
      }
      function D(t, e, i) {
        var n = document.createElement(t);
        return n.className = e || "", i && i.appendChild(n), n;
      }
      function j(t) {
        var e = t.parentNode;
        e && e.removeChild(t);
      }
      function ce(t) {
        for (; t.firstChild; )
          t.removeChild(t.firstChild);
      }
      function Bt(t) {
        var e = t.parentNode;
        e && e.lastChild !== t && e.appendChild(t);
      }
      function Rt(t) {
        var e = t.parentNode;
        e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
      }
      function De(t, e) {
        if (t.classList !== void 0)
          return t.classList.contains(e);
        var i = fe(t);
        return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i);
      }
      function z(t, e) {
        if (t.classList !== void 0)
          for (var i = b(e), n = 0, o = i.length; n < o; n++)
            t.classList.add(i[n]);
        else if (!De(t, e)) {
          var s = fe(t);
          Fe(t, (s ? s + " " : "") + e);
        }
      }
      function K(t, e) {
        t.classList !== void 0 ? t.classList.remove(e) : Fe(t, m((" " + fe(t) + " ").replace(" " + e + " ", " ")));
      }
      function Fe(t, e) {
        t.className.baseVal === void 0 ? t.className = e : t.className.baseVal = e;
      }
      function fe(t) {
        return t.correspondingElement && (t = t.correspondingElement), t.className.baseVal === void 0 ? t.className : t.className.baseVal;
      }
      function ht(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && Jn(t, e);
      }
      function Jn(t, e) {
        var i = !1, n = "DXImageTransform.Microsoft.Alpha";
        try {
          i = t.filters.item(n);
        } catch {
          if (e === 1)
            return;
        }
        e = Math.round(e * 100), i ? (i.Enabled = e !== 100, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")";
      }
      function de(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
          if (t[i] in e)
            return t[i];
        return !1;
      }
      function At(t, e, i) {
        var n = e || new S(0, 0);
        t.style[Ne] = (P.ie3d ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "");
      }
      function Q(t, e) {
        t._leaflet_pos = e, P.any3d ? At(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px");
      }
      function zt(t) {
        return t._leaflet_pos || new S(0, 0);
      }
      var Xt, Jt, He;
      if ("onselectstart" in document)
        Xt = function() {
          A(window, "selectstart", it);
        }, Jt = function() {
          W(window, "selectstart", it);
        };
      else {
        var $t = de(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        Xt = function() {
          if ($t) {
            var t = document.documentElement.style;
            He = t[$t], t[$t] = "none";
          }
        }, Jt = function() {
          $t && (document.documentElement.style[$t] = He, He = void 0);
        };
      }
      function Ue() {
        A(window, "dragstart", it);
      }
      function Ge() {
        W(window, "dragstart", it);
      }
      var _e, We;
      function qe(t) {
        for (; t.tabIndex === -1; )
          t = t.parentNode;
        t.style && (pe(), _e = t, We = t.style.outlineStyle, t.style.outlineStyle = "none", A(window, "keydown", pe));
      }
      function pe() {
        _e && (_e.style.outlineStyle = We, _e = void 0, We = void 0, W(window, "keydown", pe));
      }
      function Zi(t) {
        do
          t = t.parentNode;
        while ((!t.offsetWidth || !t.offsetHeight) && t !== document.body);
        return t;
      }
      function Ve(t) {
        var e = t.getBoundingClientRect();
        return {
          x: e.width / t.offsetWidth || 1,
          y: e.height / t.offsetHeight || 1,
          boundingClientRect: e
        };
      }
      var $n = {
        __proto__: null,
        TRANSFORM: Ne,
        TRANSITION: Yt,
        TRANSITION_END: Ei,
        get: Oi,
        getStyle: Qt,
        create: D,
        remove: j,
        empty: ce,
        toFront: Bt,
        toBack: Rt,
        hasClass: De,
        addClass: z,
        removeClass: K,
        setClass: Fe,
        getClass: fe,
        setOpacity: ht,
        testProp: de,
        setTransform: At,
        setPosition: Q,
        getPosition: zt,
        get disableTextSelection() {
          return Xt;
        },
        get enableTextSelection() {
          return Jt;
        },
        disableImageDrag: Ue,
        enableImageDrag: Ge,
        preventOutline: qe,
        restoreOutline: pe,
        getSizedParentNode: Zi,
        getScale: Ve
      };
      function A(t, e, i, n) {
        if (e && typeof e == "object")
          for (var o in e)
            Ke(t, o, e[o], i);
        else {
          e = b(e);
          for (var s = 0, l = e.length; s < l; s++)
            Ke(t, e[s], i, n);
        }
        return this;
      }
      var vt = "_leaflet_events";
      function W(t, e, i, n) {
        if (arguments.length === 1)
          Ii(t), delete t[vt];
        else if (e && typeof e == "object")
          for (var o in e)
            Ye(t, o, e[o], i);
        else if (e = b(e), arguments.length === 2)
          Ii(t, function(c) {
            return U(e, c) !== -1;
          });
        else
          for (var s = 0, l = e.length; s < l; s++)
            Ye(t, e[s], i, n);
        return this;
      }
      function Ii(t, e) {
        for (var i in t[vt]) {
          var n = i.split(/\d/)[0];
          (!e || e(n)) && Ye(t, n, null, null, i);
        }
      }
      var je = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function Ke(t, e, i, n) {
        var o = e + u(i) + (n ? "_" + u(n) : "");
        if (t[vt] && t[vt][o])
          return this;
        var s = function(c) {
          return i.call(n || t, c || window.event);
        }, l = s;
        !P.touchNative && P.pointer && e.indexOf("touch") === 0 ? s = Un(t, e, s) : P.touch && e === "dblclick" ? s = Qn(t, s) : "addEventListener" in t ? e === "touchstart" || e === "touchmove" || e === "wheel" || e === "mousewheel" ? t.addEventListener(je[e] || e, s, P.passiveEvents ? { passive: !1 } : !1) : e === "mouseenter" || e === "mouseleave" ? (s = function(c) {
          c = c || window.event, Xe(t, c) && l(c);
        }, t.addEventListener(je[e], s, !1)) : t.addEventListener(e, l, !1) : t.attachEvent("on" + e, s), t[vt] = t[vt] || {}, t[vt][o] = s;
      }
      function Ye(t, e, i, n, o) {
        o = o || e + u(i) + (n ? "_" + u(n) : "");
        var s = t[vt] && t[vt][o];
        if (!s)
          return this;
        !P.touchNative && P.pointer && e.indexOf("touch") === 0 ? Gn(t, e, s) : P.touch && e === "dblclick" ? Xn(t, s) : "removeEventListener" in t ? t.removeEventListener(je[e] || e, s, !1) : t.detachEvent("on" + e, s), t[vt][o] = null;
      }
      function Et(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, this;
      }
      function Qe(t) {
        return Ke(t, "wheel", Et), this;
      }
      function te(t) {
        return A(t, "mousedown touchstart dblclick contextmenu", Et), t._leaflet_disable_click = !0, this;
      }
      function it(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this;
      }
      function Ot(t) {
        return it(t), Et(t), this;
      }
      function Bi(t) {
        if (t.composedPath)
          return t.composedPath();
        for (var e = [], i = t.target; i; )
          e.push(i), i = i.parentNode;
        return e;
      }
      function Ri(t, e) {
        if (!e)
          return new S(t.clientX, t.clientY);
        var i = Ve(e), n = i.boundingClientRect;
        return new S(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (t.clientX - n.left) / i.x - e.clientLeft,
          (t.clientY - n.top) / i.y - e.clientTop
        );
      }
      var to = P.linux && P.chrome ? window.devicePixelRatio : P.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Ni(t) {
        return P.edge ? t.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          t.deltaY && t.deltaMode === 0 ? -t.deltaY / to : (
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
      function Xe(t, e) {
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
      var eo = {
        __proto__: null,
        on: A,
        off: W,
        stopPropagation: Et,
        disableScrollPropagation: Qe,
        disableClickPropagation: te,
        preventDefault: it,
        stop: Ot,
        getPropagationPath: Bi,
        getMousePosition: Ri,
        getWheelDelta: Ni,
        isExternalTarget: Xe,
        addListener: A,
        removeListener: W
      }, Di = Vt.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(t, e, i, n) {
          this.stop(), this._el = t, this._inProgress = !0, this._duration = i || 0.25, this._easeOutPower = 1 / Math.max(n || 0.5, 0.2), this._startPos = zt(t), this._offset = e.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = q(this._animate, this), this._step();
        },
        _step: function(t) {
          var e = +/* @__PURE__ */ new Date() - this._startTime, i = this._duration * 1e3;
          e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(t, e) {
          var i = this._startPos.add(this._offset.multiplyBy(t));
          e && i._round(), Q(this._el, i), this.fire("step");
        },
        _complete: function() {
          tt(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(t) {
          return 1 - Math.pow(1 - t, this._easeOutPower);
        }
      }), R = Vt.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: ze,
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
          e = x(this, e), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = a(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.zoom !== void 0 && (this._zoom = this._limitZoom(e.zoom)), e.center && e.zoom !== void 0 && this.setView(B(e.center), e.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Yt && P.any3d && !P.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), A(this._proxy, Ei, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(t, e, i) {
          if (e = e === void 0 ? this._zoom : this._limitZoom(e), t = this._limitCenter(B(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && i !== !0) {
            i.animate !== void 0 && (i.zoom = N({ animate: i.animate }, i.zoom), i.pan = N({ animate: i.animate, duration: i.duration }, i.pan));
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
          return t = t || (P.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(t, e) {
          return t = t || (P.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(t, e, i) {
          var n = this.getZoomScale(e), o = this.getSize().divideBy(2), s = t instanceof S ? t : this.latLngToContainerPoint(t), l = s.subtract(o).multiplyBy(1 - 1 / n), c = this.containerPointToLatLng(o.add(l));
          return this.setView(c, e, { zoom: i });
        },
        _getBoundsCenterZoom: function(t, e) {
          e = e || {}, t = t.getBounds ? t.getBounds() : Y(t);
          var i = T(e.paddingTopLeft || e.padding || [0, 0]), n = T(e.paddingBottomRight || e.padding || [0, 0]), o = this.getBoundsZoom(t, !1, i.add(n));
          if (o = typeof e.maxZoom == "number" ? Math.min(e.maxZoom, o) : o, o === 1 / 0)
            return {
              center: t.getCenter(),
              zoom: o
            };
          var s = n.subtract(i).divideBy(2), l = this.project(t.getSouthWest(), o), c = this.project(t.getNorthEast(), o), _ = this.unproject(l.add(c).divideBy(2).add(s), o);
          return {
            center: _,
            zoom: o
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(t, e) {
          if (t = Y(t), !t.isValid())
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
          if (t = T(t).round(), e = e || {}, !t.x && !t.y)
            return this.fire("moveend");
          if (e.animate !== !0 && !this.getSize().contains(t))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new Di(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
            z(this._mapPane, "leaflet-pan-anim");
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
          if (i = i || {}, i.animate === !1 || !P.any3d)
            return this.setView(t, e, i);
          this._stop();
          var n = this.project(this.getCenter()), o = this.project(t), s = this.getSize(), l = this._zoom;
          t = B(t), e = e === void 0 ? l : e;
          var c = Math.max(s.x, s.y), _ = c * this.getZoomScale(l, e), v = o.distanceTo(n) || 1, w = 1.42, k = w * w;
          function O(X) {
            var Me = X ? -1 : 1, Wo = X ? _ : c, qo = _ * _ - c * c + Me * k * k * v * v, Vo = 2 * Wo * k * v, hi = qo / Vo, Ln = Math.sqrt(hi * hi + 1) - hi, jo = Ln < 1e-9 ? -18 : Math.log(Ln);
            return jo;
          }
          function nt(X) {
            return (Math.exp(X) - Math.exp(-X)) / 2;
          }
          function J(X) {
            return (Math.exp(X) + Math.exp(-X)) / 2;
          }
          function ut(X) {
            return nt(X) / J(X);
          }
          var st = O(0);
          function Gt(X) {
            return c * (J(st) / J(st + w * X));
          }
          function Fo(X) {
            return c * (J(st) * ut(st + w * X) - nt(st)) / k;
          }
          function Ho(X) {
            return 1 - Math.pow(1 - X, 1.5);
          }
          var Uo = Date.now(), vn = (O(1) - st) / w, Go = i.duration ? 1e3 * i.duration : 1e3 * vn * 0.8;
          function yn() {
            var X = (Date.now() - Uo) / Go, Me = Ho(X) * vn;
            X <= 1 ? (this._flyToFrame = q(yn, this), this._move(
              this.unproject(n.add(o.subtract(n).multiplyBy(Fo(Me) / v)), l),
              this.getScaleZoom(c / Gt(Me), l),
              { flyTo: !0 }
            )) : this._move(t, e)._moveEnd(!0);
          }
          return this._moveStart(!0, i.noMoveStart), yn.call(this), this;
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
          return t = Y(t), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), t.isValid() ? (this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
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
          var i = this.getCenter(), n = this._limitCenter(i, this._zoom, Y(t));
          return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(t, e) {
          e = e || {};
          var i = T(e.paddingTopLeft || e.padding || [0, 0]), n = T(e.paddingBottomRight || e.padding || [0, 0]), o = this.project(this.getCenter()), s = this.project(t), l = this.getPixelBounds(), c = ot([l.min.add(i), l.max.subtract(n)]), _ = c.getSize();
          if (!c.contains(s)) {
            this._enforcingBounds = !0;
            var v = s.subtract(c.getCenter()), w = c.extend(s).getSize().subtract(_);
            o.x += v.x < 0 ? -w.x : w.x, o.y += v.y < 0 ? -w.y : w.y, this.panTo(this.unproject(o), e), this._enforcingBounds = !1;
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
          t = N({
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
          if (t = this._locateOptions = N({
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
              var l = this.getBoundsZoom(o);
              this.setView(n, s.maxZoom ? Math.min(l, s.maxZoom) : l);
            }
            var c = {
              latlng: n,
              bounds: o,
              timestamp: t.timestamp
            };
            for (var _ in t.coords)
              typeof t.coords[_] == "number" && (c[_] = t.coords[_]);
            this.fire("locationfound", c);
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
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), j(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (tt(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var t;
          for (t in this._layers)
            this._layers[t].remove();
          for (t in this._panes)
            j(this._panes[t]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(t, e) {
          var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), n = D("div", i, e || this._mapPane);
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
          return new rt(e, i);
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
          t = Y(t), i = T(i || [0, 0]);
          var n = this.getZoom() || 0, o = this.getMinZoom(), s = this.getMaxZoom(), l = t.getNorthWest(), c = t.getSouthEast(), _ = this.getSize().subtract(i), v = ot(this.project(c, n), this.project(l, n)).getSize(), w = P.any3d ? this.options.zoomSnap : 1, k = _.x / v.x, O = _.y / v.y, nt = e ? Math.max(k, O) : Math.min(k, O);
          return n = this.getScaleZoom(nt, n), w && (n = Math.round(n / (w / 100)) * (w / 100), n = e ? Math.ceil(n / w) * w : Math.floor(n / w) * w), Math.max(o, Math.min(s, n));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new S(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(t, e) {
          var i = this._getTopLeftPoint(t, e);
          return new V(i, i.add(this.getSize()));
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
          return e = e === void 0 ? this._zoom : e, this.options.crs.pointToLatLng(T(t), e);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(t) {
          var e = T(t).add(this.getPixelOrigin());
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
          return this.options.crs.wrapLatLngBounds(Y(t));
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
          return T(t).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(t) {
          return T(t).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(t) {
          var e = this.containerPointToLayerPoint(T(t));
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
          return Ri(t, this._container);
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
          var e = this._container = Oi(t);
          if (e) {
            if (e._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          A(e, "scroll", this._onScroll, this), this._containerId = u(e);
        },
        _initLayout: function() {
          var t = this._container;
          this._fadeAnimated = this.options.fadeAnimation && P.any3d, z(t, "leaflet-container" + (P.touch ? " leaflet-touch" : "") + (P.retina ? " leaflet-retina" : "") + (P.ielt9 ? " leaflet-oldie" : "") + (P.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var e = Qt(t, "position");
          e !== "absolute" && e !== "relative" && e !== "fixed" && e !== "sticky" && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var t = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Q(this._mapPane, new S(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (z(t.markerPane, "leaflet-zoom-hide"), z(t.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(t, e, i) {
          Q(this._mapPane, new S(0, 0));
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
          return tt(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(t) {
          Q(this._mapPane, this._getMapPanePos().subtract(t));
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
          var e = t ? W : A;
          e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), P.any3d && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          tt(this._resizeRequest), this._resizeRequest = q(
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
          for (var i = [], n, o = e === "mouseout" || e === "mouseover", s = t.target || t.srcElement, l = !1; s; ) {
            if (n = this._targets[u(s)], n && (e === "click" || e === "preclick") && this._draggableMoved(n)) {
              l = !0;
              break;
            }
            if (n && n.listens(e, !0) && (o && !Xe(s, t) || (i.push(n), o)) || s === this._container)
              break;
            s = s.parentNode;
          }
          return !i.length && !l && !o && this.listens(e, !0) && (i = [this]), i;
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
            i === "mousedown" && qe(e), this._fireDOMEvent(t, i);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(t, e, i) {
          if (t.type === "click") {
            var n = N({}, t);
            n.type = "preclick", this._fireDOMEvent(n, n.type, i);
          }
          var o = this._findEventTargets(t, e);
          if (i) {
            for (var s = [], l = 0; l < i.length; l++)
              i[l].listens(e, !0) && s.push(i[l]);
            o = s.concat(o);
          }
          if (o.length) {
            e === "contextmenu" && it(t);
            var c = o[0], _ = {
              originalEvent: t
            };
            if (t.type !== "keypress" && t.type !== "keydown" && t.type !== "keyup") {
              var v = c.getLatLng && (!c._radius || c._radius <= 10);
              _.containerPoint = v ? this.latLngToContainerPoint(c.getLatLng()) : this.mouseEventToContainerPoint(t), _.layerPoint = this.containerPointToLayerPoint(_.containerPoint), _.latlng = v ? c.getLatLng() : this.layerPointToLatLng(_.layerPoint);
            }
            for (l = 0; l < o.length; l++)
              if (o[l].fire(e, _, !0), _.originalEvent._stopped || o[l].options.bubblingMouseEvents === !1 && U(this._mouseEvents, e) !== -1)
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
          return zt(this._mapPane) || new S(0, 0);
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
          return ot([
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
          var n = this.project(t, e), o = this.getSize().divideBy(2), s = new V(n.subtract(o), n.add(o)), l = this._getBoundsOffset(s, i, e);
          return Math.abs(l.x) <= 1 && Math.abs(l.y) <= 1 ? t : this.unproject(n.add(l), e);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(t, e) {
          if (!e)
            return t;
          var i = this.getPixelBounds(), n = new V(i.min.add(t), i.max.add(t));
          return t.add(this._getBoundsOffset(n, e));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(t, e, i) {
          var n = ot(
            this.project(e.getNorthEast(), i),
            this.project(e.getSouthWest(), i)
          ), o = n.min.subtract(t.min), s = n.max.subtract(t.max), l = this._rebound(o.x, -s.x), c = this._rebound(o.y, -s.y);
          return new S(l, c);
        },
        _rebound: function(t, e) {
          return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
        },
        _limitZoom: function(t) {
          var e = this.getMinZoom(), i = this.getMaxZoom(), n = P.any3d ? this.options.zoomSnap : 1;
          return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
        },
        _onPanTransitionStep: function() {
          this.fire("move");
        },
        _onPanTransitionEnd: function() {
          K(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(t, e) {
          var i = this._getCenterOffset(t)._trunc();
          return (e && e.animate) !== !0 && !this.getSize().contains(i) ? !1 : (this.panBy(i, e), !0);
        },
        _createAnimProxy: function() {
          var t = this._proxy = D("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(t), this.on("zoomanim", function(e) {
            var i = Ne, n = this._proxy.style[i];
            At(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1)), n === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          j(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var t = this.getCenter(), e = this.getZoom();
          At(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
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
          return i.animate !== !0 && !this.getSize().contains(o) ? !1 : (q(function() {
            this._moveStart(!0, i.noMoveStart || !1)._animateZoom(t, e, !0);
          }, this), !0);
        },
        _animateZoom: function(t, e, i, n) {
          this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, z(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: t,
            zoom: e,
            noUpdate: n
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(a(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && K(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function io(t, e) {
        return new R(t, e);
      }
      var dt = ft.extend({
        // @section
        // @aka Control Options
        options: {
          // @option position: String = 'topright'
          // The position of the control (one of the map corners). Possible values are `'topleft'`,
          // `'topright'`, `'bottomleft'` or `'bottomright'`
          position: "topright"
        },
        initialize: function(t) {
          x(this, t);
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
          return z(e, "leaflet-control"), i.indexOf("bottom") !== -1 ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (j(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(t) {
          this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus();
        }
      }), ee = function(t) {
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
          var t = this._controlCorners = {}, e = "leaflet-", i = this._controlContainer = D("div", e + "control-container", this._container);
          function n(o, s) {
            var l = e + o + " " + e + s;
            t[o + s] = D("div", l, i);
          }
          n("top", "left"), n("top", "right"), n("bottom", "left"), n("bottom", "right");
        },
        _clearControlPos: function() {
          for (var t in this._controlCorners)
            j(this._controlCorners[t]);
          j(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var Fi = dt.extend({
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
          x(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
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
          z(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var t = this._map.getSize().y - (this._container.offsetTop + 50);
          return t < this._section.clientHeight ? (z(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : K(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return K(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var t = "leaflet-control-layers", e = this._container = D("div", t), i = this.options.collapsed;
          e.setAttribute("aria-haspopup", !0), te(e), Qe(e);
          var n = this._section = D("section", t + "-list");
          i && (this._map.on("click", this.collapse, this), A(e, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var o = this._layersLink = D("a", t + "-toggle", e);
          o.href = "#", o.title = "Layers", o.setAttribute("role", "button"), A(o, {
            keydown: function(s) {
              s.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(s) {
              it(s), this._expandSafely();
            }
          }, this), i || this.expand(), this._baseLayersList = D("div", t + "-base", n), this._separator = D("div", t + "-separator", n), this._overlaysList = D("div", t + "-overlays", n), e.appendChild(n);
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
          ce(this._baseLayersList), ce(this._overlaysList), this._layerControlInputs = [];
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
          t.overlay ? (n = document.createElement("input"), n.type = "checkbox", n.className = "leaflet-control-layers-selector", n.defaultChecked = i) : n = this._createRadioElement("leaflet-base-layers_" + u(this), i), this._layerControlInputs.push(n), n.layerId = u(t.layer), A(n, "click", this._onInputClick, this);
          var o = document.createElement("span");
          o.innerHTML = " " + t.name;
          var s = document.createElement("span");
          e.appendChild(s), s.appendChild(n), s.appendChild(o);
          var l = t.overlay ? this._overlaysList : this._baseLayersList;
          return l.appendChild(e), this._checkDisabledLayers(), e;
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
          this._preventClick = !0, A(t, "click", it), this.expand();
          var e = this;
          setTimeout(function() {
            W(t, "click", it), e._preventClick = !1;
          });
        }
      }), no = function(t, e, i) {
        return new Fi(t, e, i);
      }, Je = dt.extend({
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
          var e = "leaflet-control-zoom", i = D("div", e + " leaflet-bar"), n = this.options;
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
          var s = D("a", i, n);
          return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), te(s), A(s, "click", Ot), A(s, "click", o, this), A(s, "click", this._refocusOnMap, this), s;
        },
        _updateDisabled: function() {
          var t = this._map, e = "leaflet-disabled";
          K(this._zoomInButton, e), K(this._zoomOutButton, e), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || t._zoom === t.getMinZoom()) && (z(this._zoomOutButton, e), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || t._zoom === t.getMaxZoom()) && (z(this._zoomInButton, e), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      R.mergeOptions({
        zoomControl: !0
      }), R.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new Je(), this.addControl(this.zoomControl));
      });
      var oo = function(t) {
        return new Je(t);
      }, Hi = dt.extend({
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
          var e = "leaflet-control-scale", i = D("div", e), n = this.options;
          return this._addScales(n, e + "-line", i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i;
        },
        onRemove: function(t) {
          t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(t, e, i) {
          t.metric && (this._mScale = D("div", e, i)), t.imperial && (this._iScale = D("div", e, i));
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
      }), ro = function(t) {
        return new Hi(t);
      }, so = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', $e = dt.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (P.inlineSvg ? so + " " : "") + "Leaflet</a>"
        },
        initialize: function(t) {
          x(this, t), this._attributions = {};
        },
        onAdd: function(t) {
          t.attributionControl = this, this._container = D("div", "leaflet-control-attribution"), te(this._container);
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
        this.options.attributionControl && new $e().addTo(this);
      });
      var ao = function(t) {
        return new $e(t);
      };
      dt.Layers = Fi, dt.Zoom = Je, dt.Scale = Hi, dt.Attribution = $e, ee.layers = no, ee.zoom = oo, ee.scale = ro, ee.attribution = ao;
      var yt = ft.extend({
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
      yt.addTo = function(t, e) {
        return t.addHandler(e, this), this;
      };
      var ho = { Events: et }, Ui = P.touch ? "touchstart mousedown" : "mousedown", Tt = Vt.extend({
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
          x(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
          this._enabled || (A(this._dragStartTarget, Ui, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (Tt._dragging === this && this.finishDrag(!0), W(this._dragStartTarget, Ui, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(t) {
          if (this._enabled && (this._moved = !1, !De(this._element, "leaflet-zoom-anim"))) {
            if (t.touches && t.touches.length !== 1) {
              Tt._dragging === this && this.finishDrag();
              return;
            }
            if (!(Tt._dragging || t.shiftKey || t.which !== 1 && t.button !== 1 && !t.touches) && (Tt._dragging = this, this._preventOutline && qe(this._element), Ue(), Xt(), !this._moving)) {
              this.fire("down");
              var e = t.touches ? t.touches[0] : t, i = Zi(this._element);
              this._startPoint = new S(e.clientX, e.clientY), this._startPos = zt(this._element), this._parentScale = Ve(i);
              var n = t.type === "mousedown";
              A(document, n ? "mousemove" : "touchmove", this._onMove, this), A(document, n ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(t) {
          if (this._enabled) {
            if (t.touches && t.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var e = t.touches && t.touches.length === 1 ? t.touches[0] : t, i = new S(e.clientX, e.clientY)._subtract(this._startPoint);
            !i.x && !i.y || Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (i.x /= this._parentScale.x, i.y /= this._parentScale.y, it(t), this._moved || (this.fire("dragstart"), this._moved = !0, z(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), z(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, this._lastEvent = t, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var t = { originalEvent: this._lastEvent };
          this.fire("predrag", t), Q(this._element, this._newPos), this.fire("drag", t);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(t) {
          K(document.body, "leaflet-dragging"), this._lastTarget && (K(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), W(document, "mousemove touchmove", this._onMove, this), W(document, "mouseup touchend touchcancel", this._onUp, this), Ge(), Jt();
          var e = this._moved && this._moving;
          this._moving = !1, Tt._dragging = !1, e && this.fire("dragend", {
            noInertia: t,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function Gi(t, e, i) {
        var n, o = [1, 4, 2, 8], s, l, c, _, v, w, k, O;
        for (s = 0, w = t.length; s < w; s++)
          t[s]._code = Zt(t[s], e);
        for (c = 0; c < 4; c++) {
          for (k = o[c], n = [], s = 0, w = t.length, l = w - 1; s < w; l = s++)
            _ = t[s], v = t[l], _._code & k ? v._code & k || (O = me(v, _, k, e, i), O._code = Zt(O, e), n.push(O)) : (v._code & k && (O = me(v, _, k, e, i), O._code = Zt(O, e), n.push(O)), n.push(_));
          t = n;
        }
        return t;
      }
      function Wi(t, e) {
        var i, n, o, s, l, c, _, v, w;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        lt(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var k = B([0, 0]), O = Y(t), nt = O.getNorthWest().distanceTo(O.getSouthWest()) * O.getNorthEast().distanceTo(O.getNorthWest());
        nt < 1700 && (k = ti(t));
        var J = t.length, ut = [];
        for (i = 0; i < J; i++) {
          var st = B(t[i]);
          ut.push(e.project(B([st.lat - k.lat, st.lng - k.lng])));
        }
        for (c = _ = v = 0, i = 0, n = J - 1; i < J; n = i++)
          o = ut[i], s = ut[n], l = o.y * s.x - s.y * o.x, _ += (o.x + s.x) * l, v += (o.y + s.y) * l, c += l * 3;
        c === 0 ? w = ut[0] : w = [_ / c, v / c];
        var Gt = e.unproject(T(w));
        return B([Gt.lat + k.lat, Gt.lng + k.lng]);
      }
      function ti(t) {
        for (var e = 0, i = 0, n = 0, o = 0; o < t.length; o++) {
          var s = B(t[o]);
          e += s.lat, i += s.lng, n++;
        }
        return B([e / n, i / n]);
      }
      var lo = {
        __proto__: null,
        clipPolygon: Gi,
        polygonCenter: Wi,
        centroid: ti
      };
      function qi(t, e) {
        if (!e || !t.length)
          return t.slice();
        var i = e * e;
        return t = fo(t, i), t = co(t, i), t;
      }
      function Vi(t, e, i) {
        return Math.sqrt(ie(t, e, i, !0));
      }
      function uo(t, e, i) {
        return ie(t, e, i);
      }
      function co(t, e) {
        var i = t.length, n = typeof Uint8Array < "u" ? Uint8Array : Array, o = new n(i);
        o[0] = o[i - 1] = 1, ei(t, o, e, 0, i - 1);
        var s, l = [];
        for (s = 0; s < i; s++)
          o[s] && l.push(t[s]);
        return l;
      }
      function ei(t, e, i, n, o) {
        var s = 0, l, c, _;
        for (c = n + 1; c <= o - 1; c++)
          _ = ie(t[c], t[n], t[o], !0), _ > s && (l = c, s = _);
        s > i && (e[l] = 1, ei(t, e, i, n, l), ei(t, e, i, l, o));
      }
      function fo(t, e) {
        for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
          _o(t[n], t[o]) > e && (i.push(t[n]), o = n);
        return o < s - 1 && i.push(t[s - 1]), i;
      }
      var ji;
      function Ki(t, e, i, n, o) {
        var s = n ? ji : Zt(t, i), l = Zt(e, i), c, _, v;
        for (ji = l; ; ) {
          if (!(s | l))
            return [t, e];
          if (s & l)
            return !1;
          c = s || l, _ = me(t, e, c, i, o), v = Zt(_, i), c === s ? (t = _, s = v) : (e = _, l = v);
        }
      }
      function me(t, e, i, n, o) {
        var s = e.x - t.x, l = e.y - t.y, c = n.min, _ = n.max, v, w;
        return i & 8 ? (v = t.x + s * (_.y - t.y) / l, w = _.y) : i & 4 ? (v = t.x + s * (c.y - t.y) / l, w = c.y) : i & 2 ? (v = _.x, w = t.y + l * (_.x - t.x) / s) : i & 1 && (v = c.x, w = t.y + l * (c.x - t.x) / s), new S(v, w, o);
      }
      function Zt(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i;
      }
      function _o(t, e) {
        var i = e.x - t.x, n = e.y - t.y;
        return i * i + n * n;
      }
      function ie(t, e, i, n) {
        var o = e.x, s = e.y, l = i.x - o, c = i.y - s, _ = l * l + c * c, v;
        return _ > 0 && (v = ((t.x - o) * l + (t.y - s) * c) / _, v > 1 ? (o = i.x, s = i.y) : v > 0 && (o += l * v, s += c * v)), l = t.x - o, c = t.y - s, n ? l * l + c * c : new S(o, s);
      }
      function lt(t) {
        return !I(t[0]) || typeof t[0][0] != "object" && typeof t[0][0] < "u";
      }
      function Yi(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), lt(t);
      }
      function Qi(t, e) {
        var i, n, o, s, l, c, _, v;
        if (!t || t.length === 0)
          throw new Error("latlngs not passed");
        lt(t) || (console.warn("latlngs are not flat! Only the first ring will be used"), t = t[0]);
        var w = B([0, 0]), k = Y(t), O = k.getNorthWest().distanceTo(k.getSouthWest()) * k.getNorthEast().distanceTo(k.getNorthWest());
        O < 1700 && (w = ti(t));
        var nt = t.length, J = [];
        for (i = 0; i < nt; i++) {
          var ut = B(t[i]);
          J.push(e.project(B([ut.lat - w.lat, ut.lng - w.lng])));
        }
        for (i = 0, n = 0; i < nt - 1; i++)
          n += J[i].distanceTo(J[i + 1]) / 2;
        if (n === 0)
          v = J[0];
        else
          for (i = 0, s = 0; i < nt - 1; i++)
            if (l = J[i], c = J[i + 1], o = l.distanceTo(c), s += o, s > n) {
              _ = (s - n) / o, v = [
                c.x - _ * (c.x - l.x),
                c.y - _ * (c.y - l.y)
              ];
              break;
            }
        var st = e.unproject(T(v));
        return B([st.lat + w.lat, st.lng + w.lng]);
      }
      var po = {
        __proto__: null,
        simplify: qi,
        pointToSegmentDistance: Vi,
        closestPointOnSegment: uo,
        clipSegment: Ki,
        _getEdgeIntersection: me,
        _getBitCode: Zt,
        _sqClosestPointOnSegment: ie,
        isFlat: lt,
        _flat: Yi,
        polylineCenter: Qi
      }, ii = {
        project: function(t) {
          return new S(t.lng, t.lat);
        },
        unproject: function(t) {
          return new H(t.y, t.x);
        },
        bounds: new V([-180, -90], [180, 90])
      }, ni = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new V([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(t) {
          var e = Math.PI / 180, i = this.R, n = t.lat * e, o = this.R_MINOR / i, s = Math.sqrt(1 - o * o), l = s * Math.sin(n), c = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - l) / (1 + l), s / 2);
          return n = -i * Math.log(Math.max(c, 1e-10)), new S(t.lng * e * i, n);
        },
        unproject: function(t) {
          for (var e = 180 / Math.PI, i = this.R, n = this.R_MINOR / i, o = Math.sqrt(1 - n * n), s = Math.exp(-t.y / i), l = Math.PI / 2 - 2 * Math.atan(s), c = 0, _ = 0.1, v; c < 15 && Math.abs(_) > 1e-7; c++)
            v = o * Math.sin(l), v = Math.pow((1 - v) / (1 + v), o / 2), _ = Math.PI / 2 - 2 * Math.atan(s * v) - l, l += _;
          return new H(l * e, t.x * e / i);
        }
      }, mo = {
        __proto__: null,
        LonLat: ii,
        Mercator: ni,
        SphericalMercator: Se
      }, go = N({}, Mt, {
        code: "EPSG:3395",
        projection: ni,
        transformation: function() {
          var t = 0.5 / (Math.PI * ni.R);
          return jt(t, 0.5, -t, 0.5);
        }()
      }), Xi = N({}, Mt, {
        code: "EPSG:4326",
        projection: ii,
        transformation: jt(1 / 180, 1, -1 / 180, 0.5)
      }), vo = N({}, wt, {
        projection: ii,
        transformation: jt(1, 0, -1, 0),
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
      wt.Earth = Mt, wt.EPSG3395 = go, wt.EPSG3857 = ze, wt.EPSG900913 = bn, wt.EPSG4326 = Xi, wt.Simple = vo;
      var _t = Vt.extend({
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
          t = t ? I(t) ? t : [t] : [];
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
      var Nt = _t.extend({
        initialize: function(t, e) {
          x(this, e), this._layers = {};
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
      }), yo = function(t, e) {
        return new Nt(t, e);
      }, bt = Nt.extend({
        addLayer: function(t) {
          return this.hasLayer(t) ? this : (t.addEventParent(this), Nt.prototype.addLayer.call(this, t), this.fire("layeradd", { layer: t }));
        },
        removeLayer: function(t) {
          return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Nt.prototype.removeLayer.call(this, t), this.fire("layerremove", { layer: t })) : this;
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
          var t = new rt();
          for (var e in this._layers) {
            var i = this._layers[e];
            t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
          }
          return t;
        }
      }), Lo = function(t, e) {
        return new bt(t, e);
      }, Dt = ft.extend({
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
          x(this, t);
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
          var o = T(n), s = T(e === "shadow" && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
          t.className = "leaflet-marker-" + e + " " + (i.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px");
        },
        _createImg: function(t, e) {
          return e = e || document.createElement("img"), e.src = t, e;
        },
        _getIconUrl: function(t) {
          return P.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"];
        }
      });
      function xo(t) {
        return new Dt(t);
      }
      var ne = Dt.extend({
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
          return typeof ne.imagePath != "string" && (ne.imagePath = this._detectIconPath()), (this.options.imagePath || ne.imagePath) + Dt.prototype._getIconUrl.call(this, t);
        },
        _stripUrl: function(t) {
          var e = function(i, n, o) {
            var s = n.exec(i);
            return s && s[o];
          };
          return t = e(t, /^url\((['"])?(.+)\1\)$/, 2), t && e(t, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var t = D("div", "leaflet-default-icon-path", document.body), e = Qt(t, "background-image") || Qt(t, "backgroundImage");
          if (document.body.removeChild(t), e = this._stripUrl(e), e)
            return e;
          var i = document.querySelector('link[href$="leaflet.css"]');
          return i ? i.href.substring(0, i.href.length - 11 - 1) : "";
        }
      }), Ji = yt.extend({
        initialize: function(t) {
          this._marker = t;
        },
        addHooks: function() {
          var t = this._marker._icon;
          this._draggable || (this._draggable = new Tt(t, t, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), z(t, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && K(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(t) {
          var e = this._marker, i = e._map, n = this._marker.options.autoPanSpeed, o = this._marker.options.autoPanPadding, s = zt(e._icon), l = i.getPixelBounds(), c = i.getPixelOrigin(), _ = ot(
            l.min._subtract(c).add(o),
            l.max._subtract(c).subtract(o)
          );
          if (!_.contains(s)) {
            var v = T(
              (Math.max(_.max.x, s.x) - _.max.x) / (l.max.x - _.max.x) - (Math.min(_.min.x, s.x) - _.min.x) / (l.min.x - _.min.x),
              (Math.max(_.max.y, s.y) - _.max.y) / (l.max.y - _.max.y) - (Math.min(_.min.y, s.y) - _.min.y) / (l.min.y - _.min.y)
            ).multiplyBy(n);
            i.panBy(v, { animate: !1 }), this._draggable._newPos._add(v), this._draggable._startPos._add(v), Q(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = q(this._adjustPan.bind(this, t));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(t) {
          this._marker.options.autoPan && (tt(this._panRequest), this._panRequest = q(this._adjustPan.bind(this, t)));
        },
        _onDrag: function(t) {
          var e = this._marker, i = e._shadow, n = zt(e._icon), o = e._map.layerPointToLatLng(n);
          i && Q(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t);
        },
        _onDragEnd: function(t) {
          tt(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t);
        }
      }), ge = _t.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new ne(),
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
          x(this, e), this._latlng = B(t);
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
          i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), i.tagName === "IMG" && (i.alt = t.alt || "")), z(i, e), t.keyboard && (i.tabIndex = "0", i.setAttribute("role", "button")), this._icon = i, t.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && A(i, "focus", this._panOnFocus, this);
          var o = t.icon.createShadow(this._shadow), s = !1;
          o !== this._shadow && (this._removeShadow(), s = !0), o && (z(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && W(this._icon, "focus", this._panOnFocus, this), j(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && j(this._shadow), this._shadow = null;
        },
        _setPos: function(t) {
          this._icon && Q(this._icon, t), this._shadow && Q(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(t) {
          this._icon && (this._icon.style.zIndex = this._zIndex + t);
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
          this._setPos(e);
        },
        _initInteraction: function() {
          if (this.options.interactive && (z(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ji)) {
            var t = this.options.draggable;
            this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ji(this), t && this.dragging.enable();
          }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(t) {
          return this.options.opacity = t, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
          var t = this.options.opacity;
          this._icon && ht(this._icon, t), this._shadow && ht(this._shadow, t);
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
            var e = this.options.icon.options, i = e.iconSize ? T(e.iconSize) : T(0, 0), n = e.iconAnchor ? T(e.iconAnchor) : T(0, 0);
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
      function wo(t, e) {
        return new ge(t, e);
      }
      var St = _t.extend({
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
          return x(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t && Object.prototype.hasOwnProperty.call(t, "weight") && this._updateBounds()), this;
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
      }), ve = St.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(t, e) {
          x(this, e), this._latlng = B(t), this._radius = this.options.radius;
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
          return St.prototype.setStyle.call(this, t), this.setRadius(e), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var t = this._radius, e = this._radiusY || t, i = this._clickTolerance(), n = [t + i, e + i];
          this._pxBounds = new V(this._point.subtract(n), this._point.add(n));
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
      function bo(t, e) {
        return new ve(t, e);
      }
      var oi = ve.extend({
        initialize: function(t, e, i) {
          if (typeof e == "number" && (e = N({}, i, { radius: e })), x(this, e), this._latlng = B(t), isNaN(this.options.radius))
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
          return new rt(
            this._map.layerPointToLatLng(this._point.subtract(t)),
            this._map.layerPointToLatLng(this._point.add(t))
          );
        },
        setStyle: St.prototype.setStyle,
        _project: function() {
          var t = this._latlng.lng, e = this._latlng.lat, i = this._map, n = i.options.crs;
          if (n.distance === Mt.distance) {
            var o = Math.PI / 180, s = this._mRadius / Mt.R / o, l = i.project([e + s, t]), c = i.project([e - s, t]), _ = l.add(c).divideBy(2), v = i.unproject(_).lat, w = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(v * o)) / (Math.cos(e * o) * Math.cos(v * o))) / o;
            (isNaN(w) || w === 0) && (w = s / Math.cos(Math.PI / 180 * e)), this._point = _.subtract(i.getPixelOrigin()), this._radius = isNaN(w) ? 0 : _.x - i.project([v, t - w]).x, this._radiusY = _.y - l.y;
          } else {
            var k = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(k).x;
          }
          this._updateBounds();
        }
      });
      function Po(t, e, i) {
        return new oi(t, e, i);
      }
      var Pt = St.extend({
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
          x(this, e), this._setLatLngs(t);
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
          for (var e = 1 / 0, i = null, n = ie, o, s, l = 0, c = this._parts.length; l < c; l++)
            for (var _ = this._parts[l], v = 1, w = _.length; v < w; v++) {
              o = _[v - 1], s = _[v];
              var k = n(t, o, s, !0);
              k < e && (e = k, i = n(t, o, s));
            }
          return i && (i.distance = Math.sqrt(e)), i;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Qi(this._defaultShape(), this._map.options.crs);
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
          this._bounds = new rt(), this._latlngs = this._convertLatLngs(t);
        },
        _defaultShape: function() {
          return lt(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(t) {
          for (var e = [], i = lt(t), n = 0, o = t.length; n < o; n++)
            i ? (e[n] = B(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
          return e;
        },
        _project: function() {
          var t = new V();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds());
        },
        _updateBounds: function() {
          var t = this._clickTolerance(), e = new S(t, t);
          this._rawPxBounds && (this._pxBounds = new V([
            this._rawPxBounds.min.subtract(e),
            this._rawPxBounds.max.add(e)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(t, e, i) {
          var n = t[0] instanceof H, o = t.length, s, l;
          if (n) {
            for (l = [], s = 0; s < o; s++)
              l[s] = this._map.latLngToLayerPoint(t[s]), i.extend(l[s]);
            e.push(l);
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
            var e = this._parts, i, n, o, s, l, c, _;
            for (i = 0, o = 0, s = this._rings.length; i < s; i++)
              for (_ = this._rings[i], n = 0, l = _.length; n < l - 1; n++)
                c = Ki(_[n], _[n + 1], t, n, !0), c && (e[o] = e[o] || [], e[o].push(c[0]), (c[1] !== _[n + 1] || n === l - 2) && (e[o].push(c[1]), o++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++)
            t[i] = qi(t[i], e);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t, e) {
          var i, n, o, s, l, c, _ = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (i = 0, s = this._parts.length; i < s; i++)
            for (c = this._parts[i], n = 0, l = c.length, o = l - 1; n < l; o = n++)
              if (!(!e && n === 0) && Vi(t, c[o], c[n]) <= _)
                return !0;
          return !1;
        }
      });
      function Co(t, e) {
        return new Pt(t, e);
      }
      Pt._flat = Yi;
      var Ft = Pt.extend({
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
          return Wi(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(t) {
          var e = Pt.prototype._convertLatLngs.call(this, t), i = e.length;
          return i >= 2 && e[0] instanceof H && e[0].equals(e[i - 1]) && e.pop(), e;
        },
        _setLatLngs: function(t) {
          Pt.prototype._setLatLngs.call(this, t), lt(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return lt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var t = this._renderer._bounds, e = this.options.weight, i = new S(e, e);
          if (t = new V(t.min.subtract(i), t.max.add(i)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(t))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var n = 0, o = this._rings.length, s; n < o; n++)
              s = Gi(this._rings[n], t, !0), s.length && this._parts.push(s);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(t) {
          var e = !1, i, n, o, s, l, c, _, v;
          if (!this._pxBounds || !this._pxBounds.contains(t))
            return !1;
          for (s = 0, _ = this._parts.length; s < _; s++)
            for (i = this._parts[s], l = 0, v = i.length, c = v - 1; l < v; c = l++)
              n = i[l], o = i[c], n.y > t.y != o.y > t.y && t.x < (o.x - n.x) * (t.y - n.y) / (o.y - n.y) + n.x && (e = !e);
          return e || Pt.prototype._containsPoint.call(this, t, !0);
        }
      });
      function ko(t, e) {
        return new Ft(t, e);
      }
      var Ct = bt.extend({
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
          x(this, e), this._layers = {}, t && this.addData(t);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(t) {
          var e = I(t) ? t : t.features, i, n, o;
          if (e) {
            for (i = 0, n = e.length; i < n; i++)
              o = e[i], (o.geometries || o.geometry || o.features || o.coordinates) && this.addData(o);
            return this;
          }
          var s = this.options;
          if (s.filter && !s.filter(t))
            return this;
          var l = ye(t, s);
          return l ? (l.feature = we(t), l.defaultOptions = l.options, this.resetStyle(l), s.onEachFeature && s.onEachFeature(t, l), this.addLayer(l)) : this;
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(t) {
          return t === void 0 ? this.eachLayer(this.resetStyle, this) : (t.options = N({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this);
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
      function ye(t, e) {
        var i = t.type === "Feature" ? t.geometry : t, n = i ? i.coordinates : null, o = [], s = e && e.pointToLayer, l = e && e.coordsToLatLng || ri, c, _, v, w;
        if (!n && !i)
          return null;
        switch (i.type) {
          case "Point":
            return c = l(n), $i(s, t, c, e);
          case "MultiPoint":
            for (v = 0, w = n.length; v < w; v++)
              c = l(n[v]), o.push($i(s, t, c, e));
            return new bt(o);
          case "LineString":
          case "MultiLineString":
            return _ = Le(n, i.type === "LineString" ? 0 : 1, l), new Pt(_, e);
          case "Polygon":
          case "MultiPolygon":
            return _ = Le(n, i.type === "Polygon" ? 1 : 2, l), new Ft(_, e);
          case "GeometryCollection":
            for (v = 0, w = i.geometries.length; v < w; v++) {
              var k = ye({
                geometry: i.geometries[v],
                type: "Feature",
                properties: t.properties
              }, e);
              k && o.push(k);
            }
            return new bt(o);
          case "FeatureCollection":
            for (v = 0, w = i.features.length; v < w; v++) {
              var O = ye(i.features[v], e);
              O && o.push(O);
            }
            return new bt(o);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function $i(t, e, i, n) {
        return t ? t(e, i) : new ge(i, n && n.markersInheritOptions && n);
      }
      function ri(t) {
        return new H(t[1], t[0], t[2]);
      }
      function Le(t, e, i) {
        for (var n = [], o = 0, s = t.length, l; o < s; o++)
          l = e ? Le(t[o], e - 1, i) : (i || ri)(t[o]), n.push(l);
        return n;
      }
      function si(t, e) {
        return t = B(t), t.alt !== void 0 ? [g(t.lng, e), g(t.lat, e), g(t.alt, e)] : [g(t.lng, e), g(t.lat, e)];
      }
      function xe(t, e, i, n) {
        for (var o = [], s = 0, l = t.length; s < l; s++)
          o.push(e ? xe(t[s], lt(t[s]) ? 0 : e - 1, i, n) : si(t[s], n));
        return !e && i && o.length > 0 && o.push(o[0].slice()), o;
      }
      function Ht(t, e) {
        return t.feature ? N({}, t.feature, { geometry: e }) : we(e);
      }
      function we(t) {
        return t.type === "Feature" || t.type === "FeatureCollection" ? t : {
          type: "Feature",
          properties: {},
          geometry: t
        };
      }
      var ai = {
        toGeoJSON: function(t) {
          return Ht(this, {
            type: "Point",
            coordinates: si(this.getLatLng(), t)
          });
        }
      };
      ge.include(ai), oi.include(ai), ve.include(ai), Pt.include({
        toGeoJSON: function(t) {
          var e = !lt(this._latlngs), i = xe(this._latlngs, e ? 1 : 0, !1, t);
          return Ht(this, {
            type: (e ? "Multi" : "") + "LineString",
            coordinates: i
          });
        }
      }), Ft.include({
        toGeoJSON: function(t) {
          var e = !lt(this._latlngs), i = e && !lt(this._latlngs[0]), n = xe(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
          return e || (n = [n]), Ht(this, {
            type: (i ? "Multi" : "") + "Polygon",
            coordinates: n
          });
        }
      }), Nt.include({
        toMultiPoint: function(t) {
          var e = [];
          return this.eachLayer(function(i) {
            e.push(i.toGeoJSON(t).geometry.coordinates);
          }), Ht(this, {
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
                var l = we(s);
                l.type === "FeatureCollection" ? n.push.apply(n, l.features) : n.push(l);
              }
            }
          }), i ? Ht(this, {
            geometries: n,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: n
          };
        }
      });
      function tn(t, e) {
        return new Ct(t, e);
      }
      var Mo = tn, be = _t.extend({
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
          this._url = t, this._bounds = Y(e), x(this, i);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (z(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          j(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
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
          return this._map && Bt(this._image), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
          return this._map && Rt(this._image), this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(t) {
          return this._url = t, this._image && (this._image.src = t), this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(t) {
          return this._bounds = Y(t), this._map && this._reset(), this;
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
          var t = this._url.tagName === "IMG", e = this._image = t ? this._url : D("img");
          if (z(e, "leaflet-image-layer"), this._zoomAnimated && z(e, "leaflet-zoom-animated"), this.options.className && z(e, this.options.className), e.onselectstart = d, e.onmousemove = d, e.onload = a(this.fire, this, "load"), e.onerror = a(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (e.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t) {
            this._url = e.src;
            return;
          }
          e.src = this._url, e.alt = this.options.alt;
        },
        _animateZoom: function(t) {
          var e = this._map.getZoomScale(t.zoom), i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
          At(this._image, i, e);
        },
        _reset: function() {
          var t = this._image, e = new V(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), i = e.getSize();
          Q(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px";
        },
        _updateOpacity: function() {
          ht(this._image, this.options.opacity);
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
      }), To = function(t, e, i) {
        return new be(t, e, i);
      }, en = be.extend({
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
          var t = this._url.tagName === "VIDEO", e = this._image = t ? this._url : D("video");
          if (z(e, "leaflet-image-layer"), this._zoomAnimated && z(e, "leaflet-zoom-animated"), this.options.className && z(e, this.options.className), e.onselectstart = d, e.onmousemove = d, e.onloadeddata = a(this.fire, this, "load"), t) {
            for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++)
              n.push(i[o].src);
            this._url = i.length > 0 ? n : [e.src];
            return;
          }
          I(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(e.style, "objectFit") && (e.style.objectFit = "fill"), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop, e.muted = !!this.options.muted, e.playsInline = !!this.options.playsInline;
          for (var s = 0; s < this._url.length; s++) {
            var l = D("source");
            l.src = this._url[s], e.appendChild(l);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function So(t, e, i) {
        return new en(t, e, i);
      }
      var nn = be.extend({
        _initImage: function() {
          var t = this._image = this._url;
          z(t, "leaflet-image-layer"), this._zoomAnimated && z(t, "leaflet-zoom-animated"), this.options.className && z(t, this.options.className), t.onselectstart = d, t.onmousemove = d;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function Ao(t, e, i) {
        return new nn(t, e, i);
      }
      var Lt = _t.extend({
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
          t && (t instanceof H || I(t)) ? (this._latlng = B(t), x(this, e)) : (x(this, t), this._source = e), this.options.content && (this._content = this.options.content);
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
          this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && ht(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && ht(this._container, 1), this.bringToFront(), this.options.interactive && (z(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(t) {
          t._fadeAnimated ? (ht(this._container, 0), this._removeTimeout = setTimeout(a(j, void 0, this._container), 200)) : j(this._container), this.options.interactive && (K(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
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
          return this._map && Bt(this._container), this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
          return this._map && Rt(this._container), this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(t) {
          var e = this._source;
          if (!e._map)
            return !1;
          if (e instanceof bt) {
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
            var t = this._map.latLngToLayerPoint(this._latlng), e = T(this.options.offset), i = this._getAnchor();
            this._zoomAnimated ? Q(this._container, t.add(i)) : e = e.add(t).add(i);
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
          return o instanceof t ? (x(o, n), o._source = this) : (o = e && !n ? e : new t(n, this), o.setContent(i)), o;
        }
      });
      var Pe = Lt.extend({
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
          return t = arguments.length ? t : this._source._map, !t.hasLayer(this) && t._popup && t._popup.options.autoClose && t.removeLayer(t._popup), t._popup = this, Lt.prototype.openOn.call(this, t);
        },
        onAdd: function(t) {
          Lt.prototype.onAdd.call(this, t), t.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof St || this._source.on("preclick", Et));
        },
        onRemove: function(t) {
          Lt.prototype.onRemove.call(this, t), t.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof St || this._source.off("preclick", Et));
        },
        getEvents: function() {
          var t = Lt.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this.close), this.options.keepInView && (t.moveend = this._adjustPan), t;
        },
        _initLayout: function() {
          var t = "leaflet-popup", e = this._container = D(
            "div",
            t + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), i = this._wrapper = D("div", t + "-content-wrapper", e);
          if (this._contentNode = D("div", t + "-content", i), te(e), Qe(this._contentNode), A(e, "contextmenu", Et), this._tipContainer = D("div", t + "-tip-container", e), this._tip = D("div", t + "-tip", this._tipContainer), this.options.closeButton) {
            var n = this._closeButton = D("a", t + "-close-button", e);
            n.setAttribute("role", "button"), n.setAttribute("aria-label", "Close popup"), n.href = "#close", n.innerHTML = '<span aria-hidden="true">&#215;</span>', A(n, "click", function(o) {
              it(o), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var t = this._contentNode, e = t.style;
          e.width = "", e.whiteSpace = "nowrap";
          var i = t.offsetWidth;
          i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
          var n = t.offsetHeight, o = this.options.maxHeight, s = "leaflet-popup-scrolled";
          o && n > o ? (e.height = o + "px", z(t, s)) : K(t, s), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), i = this._getAnchor();
          Q(this._container, e.add(i));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var t = this._map, e = parseInt(Qt(this._container, "marginBottom"), 10) || 0, i = this._container.offsetHeight + e, n = this._containerWidth, o = new S(this._containerLeft, -i - this._containerBottom);
            o._add(zt(this._container));
            var s = t.layerPointToContainerPoint(o), l = T(this.options.autoPanPadding), c = T(this.options.autoPanPaddingTopLeft || l), _ = T(this.options.autoPanPaddingBottomRight || l), v = t.getSize(), w = 0, k = 0;
            s.x + n + _.x > v.x && (w = s.x + n - v.x + _.x), s.x - w - c.x < 0 && (w = s.x - c.x), s.y + i + _.y > v.y && (k = s.y + i - v.y + _.y), s.y - k - c.y < 0 && (k = s.y - c.y), (w || k) && (this.options.keepInView && (this._autopanning = !0), t.fire("autopanstart").panBy([w, k]));
          }
        },
        _getAnchor: function() {
          return T(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), zo = function(t, e) {
        return new Pe(t, e);
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
          return this._initOverlay(Pe, t, e, i).openOn(this), this;
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
          return this._popup = this._initOverlay(Pe, this._popup, t, e), this._popupHandlersAdded || (this.on({
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
          return this._popup && (this instanceof bt || (this._popup._source = this), this._popup._prepareOpen(t || this._latlng) && this._popup.openOn(this._map)), this;
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
            Ot(t);
            var e = t.layer || t.target;
            if (this._popup._source === e && !(e instanceof St)) {
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
      var Ce = Lt.extend({
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
          Lt.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(t) {
          Lt.prototype.onRemove.call(this, t), t.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var t = Lt.prototype.getEvents.call(this);
          return this.options.permanent || (t.preclick = this.close), t;
        },
        _initLayout: function() {
          var t = "leaflet-tooltip", e = t + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = D("div", e), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + u(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(t) {
          var e, i, n = this._map, o = this._container, s = n.latLngToContainerPoint(n.getCenter()), l = n.layerPointToContainerPoint(t), c = this.options.direction, _ = o.offsetWidth, v = o.offsetHeight, w = T(this.options.offset), k = this._getAnchor();
          c === "top" ? (e = _ / 2, i = v) : c === "bottom" ? (e = _ / 2, i = 0) : c === "center" ? (e = _ / 2, i = v / 2) : c === "right" ? (e = 0, i = v / 2) : c === "left" ? (e = _, i = v / 2) : l.x < s.x ? (c = "right", e = 0, i = v / 2) : (c = "left", e = _ + (w.x + k.x) * 2, i = v / 2), t = t.subtract(T(e, i, !0)).add(w).add(k), K(o, "leaflet-tooltip-right"), K(o, "leaflet-tooltip-left"), K(o, "leaflet-tooltip-top"), K(o, "leaflet-tooltip-bottom"), z(o, "leaflet-tooltip-" + c), Q(o, t);
        },
        _updatePosition: function() {
          var t = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t);
        },
        setOpacity: function(t) {
          this.options.opacity = t, this._container && ht(this._container, t);
        },
        _animateZoom: function(t) {
          var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
          this._setPosition(e);
        },
        _getAnchor: function() {
          return T(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), Eo = function(t, e) {
        return new Ce(t, e);
      };
      R.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(t, e, i) {
          return this._initOverlay(Ce, t, e, i).openOn(this), this;
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
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ce, this._tooltip, t, e), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
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
          return this._tooltip && (this instanceof bt || (this._tooltip._source = this), this._tooltip._prepareOpen(t) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
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
          e && (A(e, "focus", function() {
            this._tooltip._source = t, this.openTooltip();
          }, this), A(e, "blur", this.closeTooltip, this));
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
      var on = Dt.extend({
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
          if (i.html instanceof Element ? (ce(e), e.appendChild(i.html)) : e.innerHTML = i.html !== !1 ? i.html : "", i.bgPos) {
            var n = T(i.bgPos);
            e.style.backgroundPosition = -n.x + "px " + -n.y + "px";
          }
          return this._setIconStyles(e, "icon"), e;
        },
        createShadow: function() {
          return null;
        }
      });
      function Oo(t) {
        return new on(t);
      }
      Dt.Default = ne;
      var oe = _t.extend({
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
          updateWhenIdle: P.mobile,
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
          x(this, t);
        },
        onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        },
        beforeAdd: function(t) {
          t._addZoomLimit(this);
        },
        onRemove: function(t) {
          this._removeAllTiles(), j(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (Bt(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && (Rt(this._container), this._setAutoZIndex(Math.min)), this;
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
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = f(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
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
          return t instanceof S ? t : new S(t, t);
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
          if (this._map && !P.ielt9) {
            ht(this._container, this.options.opacity);
            var t = +/* @__PURE__ */ new Date(), e = !1, i = !1;
            for (var n in this._tiles) {
              var o = this._tiles[n];
              if (!(!o.current || !o.loaded)) {
                var s = Math.min(1, (t - o.loaded) / 200);
                ht(o.el, s), s < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o), o.active = !0);
              }
            }
            i && !this._noPrune && this._pruneTiles(), e && (tt(this._fadeFrame), this._fadeFrame = q(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: d,
        _initContainer: function() {
          this._container || (this._container = D("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var t = this._tileZoom, e = this.options.maxZoom;
          if (t !== void 0) {
            for (var i in this._levels)
              i = Number(i), this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (j(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
            var n = this._levels[t], o = this._map;
            return n || (n = this._levels[t] = {}, n.el = D("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), d(n.el.offsetWidth), this._onCreateLevel(n)), this._level = n, n;
          }
        },
        _onUpdateLevel: d,
        _onRemoveLevel: d,
        _onCreateLevel: d,
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
            j(this._levels[t].el), this._onRemoveLevel(Number(t)), delete this._levels[t];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(t, e, i, n) {
          var o = Math.floor(t / 2), s = Math.floor(e / 2), l = i - 1, c = new S(+o, +s);
          c.z = +l;
          var _ = this._tileCoordsToKey(c), v = this._tiles[_];
          return v && v.active ? (v.retain = !0, !0) : (v && v.loaded && (v.retain = !0), l > n ? this._retainParent(o, s, l, n) : !1);
        },
        _retainChildren: function(t, e, i, n) {
          for (var o = 2 * t; o < 2 * t + 2; o++)
            for (var s = 2 * e; s < 2 * e + 2; s++) {
              var l = new S(o, s);
              l.z = i + 1;
              var c = this._tileCoordsToKey(l), _ = this._tiles[c];
              if (_ && _.active) {
                _.retain = !0;
                continue;
              } else _ && _.loaded && (_.retain = !0);
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
          P.any3d ? At(t.el, o, n) : Q(t.el, o);
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
          return new V(o.subtract(s), o.add(s));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(t) {
          var e = this._map;
          if (e) {
            var i = this._clampZoom(e.getZoom());
            if (t === void 0 && (t = e.getCenter()), this._tileZoom !== void 0) {
              var n = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(n), s = o.getCenter(), l = [], c = this.options.keepBuffer, _ = new V(
                o.getBottomLeft().subtract([c, -c]),
                o.getTopRight().add([c, -c])
              );
              if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var v in this._tiles) {
                var w = this._tiles[v].coords;
                (w.z !== this._tileZoom || !_.contains(new S(w.x, w.y))) && (this._tiles[v].current = !1);
              }
              if (Math.abs(i - this._tileZoom) > 1) {
                this._setView(t, i);
                return;
              }
              for (var k = o.min.y; k <= o.max.y; k++)
                for (var O = o.min.x; O <= o.max.x; O++) {
                  var nt = new S(O, k);
                  if (nt.z = this._tileZoom, !!this._isValidTile(nt)) {
                    var J = this._tiles[this._tileCoordsToKey(nt)];
                    J ? J.current = !0 : l.push(nt);
                  }
                }
              if (l.sort(function(st, Gt) {
                return st.distanceTo(s) - Gt.distanceTo(s);
              }), l.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var ut = document.createDocumentFragment();
                for (O = 0; O < l.length; O++)
                  this._addTile(l[O], ut);
                this._level.el.appendChild(ut);
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
          return Y(this.options.bounds).overlaps(n);
        },
        _keyToBounds: function(t) {
          return this._tileCoordsToBounds(this._keyToTileCoords(t));
        },
        _tileCoordsToNwSe: function(t) {
          var e = this._map, i = this.getTileSize(), n = t.scaleBy(i), o = n.add(i), s = e.unproject(n, t.z), l = e.unproject(o, t.z);
          return [s, l];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(t) {
          var e = this._tileCoordsToNwSe(t), i = new rt(e[0], e[1]);
          return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(t) {
          return t.x + ":" + t.y + ":" + t.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(t) {
          var e = t.split(":"), i = new S(+e[0], +e[1]);
          return i.z = +e[2], i;
        },
        _removeTile: function(t) {
          var e = this._tiles[t];
          e && (j(e.el), delete this._tiles[t], this.fire("tileunload", {
            tile: e.el,
            coords: this._keyToTileCoords(t)
          }));
        },
        _initTile: function(t) {
          z(t, "leaflet-tile");
          var e = this.getTileSize();
          t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = d, t.onmousemove = d, P.ielt9 && this.options.opacity < 1 && ht(t, this.options.opacity);
        },
        _addTile: function(t, e) {
          var i = this._getTilePos(t), n = this._tileCoordsToKey(t), o = this.createTile(this._wrapCoords(t), a(this._tileReady, this, t));
          this._initTile(o), this.createTile.length < 2 && q(a(this._tileReady, this, t, null, o)), Q(o, i), this._tiles[n] = {
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
          i = this._tiles[n], i && (i.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (ht(i.el, 0), tt(this._fadeFrame), this._fadeFrame = q(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (z(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: i.el,
            coords: t
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), P.ielt9 || !this._map._fadeAnimated ? q(this._pruneTiles, this) : setTimeout(a(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(t) {
          return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(t) {
          var e = new S(
            this._wrapX ? p(t.x, this._wrapX) : t.x,
            this._wrapY ? p(t.y, this._wrapY) : t.y
          );
          return e.z = t.z, e;
        },
        _pxBoundsToTileRange: function(t) {
          var e = this.getTileSize();
          return new V(
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
      function Zo(t) {
        return new oe(t);
      }
      var Ut = oe.extend({
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
          this._url = t, e = x(this, e), e.detectRetina && P.retina && e.maxZoom > 0 ? (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)) : (e.zoomOffset++, e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1)), e.minZoom = Math.max(0, e.minZoom)) : e.zoomReverse ? e.minZoom = Math.min(e.maxZoom, e.minZoom) : e.maxZoom = Math.max(e.minZoom, e.maxZoom), typeof e.subdomains == "string" && (e.subdomains = e.subdomains.split("")), this.on("tileunload", this._onTileRemove);
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
          return A(i, "load", a(this._tileOnLoad, this, e, i)), A(i, "error", a(this._tileOnError, this, e, i)), (this.options.crossOrigin || this.options.crossOrigin === "") && (i.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (i.referrerPolicy = this.options.referrerPolicy), i.alt = "", i.src = this.getTileUrl(t), i;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(t) {
          var e = {
            r: P.retina ? "@2x" : "",
            s: this._getSubdomain(t),
            x: t.x,
            y: t.y,
            z: this._getZoomForUrl()
          };
          if (this._map && !this._map.options.crs.infinite) {
            var i = this._globalTileRange.max.y - t.y;
            this.options.tms && (e.y = i), e["-y"] = i;
          }
          return E(this._url, N(e, this.options));
        },
        _tileOnLoad: function(t, e) {
          P.ielt9 ? setTimeout(a(t, this, null, e), 0) : t(null, e);
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
            if (this._tiles[t].coords.z !== this._tileZoom && (e = this._tiles[t].el, e.onload = d, e.onerror = d, !e.complete)) {
              e.src = G;
              var i = this._tiles[t].coords;
              j(e), delete this._tiles[t], this.fire("tileabort", {
                tile: e,
                coords: i
              });
            }
        },
        _removeTile: function(t) {
          var e = this._tiles[t];
          if (e)
            return e.el.setAttribute("src", G), oe.prototype._removeTile.call(this, t);
        },
        _tileReady: function(t, e, i) {
          if (!(!this._map || i && i.getAttribute("src") === G))
            return oe.prototype._tileReady.call(this, t, e, i);
        }
      });
      function rn(t, e) {
        return new Ut(t, e);
      }
      var sn = Ut.extend({
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
          var i = N({}, this.defaultWmsParams);
          for (var n in e)
            n in this.options || (i[n] = e[n]);
          e = x(this, e);
          var o = e.detectRetina && P.retina ? 2 : 1, s = this.getTileSize();
          i.width = s.x * o, i.height = s.y * o, this.wmsParams = i;
        },
        onAdd: function(t) {
          this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[e] = this._crs.code, Ut.prototype.onAdd.call(this, t);
        },
        getTileUrl: function(t) {
          var e = this._tileCoordsToNwSe(t), i = this._crs, n = ot(i.project(e[0]), i.project(e[1])), o = n.min, s = n.max, l = (this._wmsVersion >= 1.3 && this._crs === Xi ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","), c = Ut.prototype.getTileUrl.call(this, t);
          return c + M(this.wmsParams, c, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + l;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(t, e) {
          return N(this.wmsParams, t), e || this.redraw(), this;
        }
      });
      function Io(t, e) {
        return new sn(t, e);
      }
      Ut.WMS = sn, rn.wms = Io;
      var kt = _t.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(t) {
          x(this, t), u(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), z(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
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
          P.any3d ? At(this._container, s, i) : Q(this._container, s);
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
          this._bounds = new V(i, i.add(e.multiplyBy(1 + t * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), an = kt.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var t = kt.prototype.getEvents.call(this);
          return t.viewprereset = this._onViewPreReset, t;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          kt.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var t = this._container = document.createElement("canvas");
          A(t, "mousemove", this._onMouseMove, this), A(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), A(t, "mouseout", this._handleMouseOut, this), t._leaflet_disable_events = !0, this._ctx = t.getContext("2d");
        },
        _destroyContainer: function() {
          tt(this._redrawRequest), delete this._ctx, j(this._container), W(this._container), delete this._container;
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
            kt.prototype._update.call(this);
            var t = this._bounds, e = this._container, i = t.getSize(), n = P.retina ? 2 : 1;
            Q(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", P.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update");
          }
        },
        _reset: function() {
          kt.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
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
          this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || q(this._redraw, this));
        },
        _extendRedrawBounds: function(t) {
          if (t._pxBounds) {
            var e = (t.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new V(), this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
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
            var i, n, o, s, l = t._parts, c = l.length, _ = this._ctx;
            if (c) {
              for (_.beginPath(), i = 0; i < c; i++) {
                for (n = 0, o = l[i].length; n < o; n++)
                  s = l[i][n], _[n ? "lineTo" : "moveTo"](s.x, s.y);
                e && _.closePath();
              }
              this._fillStroke(_, t);
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
          e && (K(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(t, e) {
          if (!this._mouseHoverThrottled) {
            for (var i, n, o = this._drawFirst; o; o = o.next)
              i = o.layer, i.options.interactive && i._containsPoint(e) && (n = i);
            n !== this._hoveredLayer && (this._handleMouseOut(t), n && (z(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, t), this._mouseHoverThrottled = !0, setTimeout(a(function() {
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
      function hn(t) {
        return P.canvas ? new an(t) : null;
      }
      var re = function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          };
        } catch {
        }
        return function(t) {
          return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      }(), Bo = {
        _initContainer: function() {
          this._container = D("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (kt.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(t) {
          var e = t._container = re("shape");
          z(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = re("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[u(t)] = t;
        },
        _addPath: function(t) {
          var e = t._container;
          this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e);
        },
        _removePath: function(t) {
          var e = t._container;
          j(e), t.removeInteractiveTarget(e), delete this._layers[u(t)];
        },
        _updateStyle: function(t) {
          var e = t._stroke, i = t._fill, n = t.options, o = t._container;
          o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = re("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = I(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = re("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null);
        },
        _updateCircle: function(t) {
          var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
          this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0," + 65535 * 360);
        },
        _setPath: function(t, e) {
          t._path.v = e;
        },
        _bringToFront: function(t) {
          Bt(t._container);
        },
        _bringToBack: function(t) {
          Rt(t._container);
        }
      }, ke = P.vml ? re : ci, se = kt.extend({
        _initContainer: function() {
          this._container = ke("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = ke("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          j(this._container), W(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            kt.prototype._update.call(this);
            var t = this._bounds, e = t.getSize(), i = this._container;
            (!this._svgSize || !this._svgSize.equals(e)) && (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), Q(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(t) {
          var e = t._path = ke("path");
          t.options.className && z(e, t.options.className), t.options.interactive && z(e, "leaflet-interactive"), this._updateStyle(t), this._layers[u(t)] = t;
        },
        _addPath: function(t) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path);
        },
        _removePath: function(t) {
          j(t._path), t.removeInteractiveTarget(t._path), delete this._layers[u(t)];
        },
        _updatePath: function(t) {
          t._project(), t._update();
        },
        _updateStyle: function(t) {
          var e = t._path, i = t.options;
          e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"));
        },
        _updatePoly: function(t, e) {
          this._setPath(t, fi(t._parts, e));
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
          Bt(t._path);
        },
        _bringToBack: function(t) {
          Rt(t._path);
        }
      });
      P.vml && se.include(Bo);
      function ln(t) {
        return P.svg || P.vml ? new se(t) : null;
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
          return this.options.preferCanvas && hn(t) || ln(t);
        }
      });
      var un = Ft.extend({
        initialize: function(t, e) {
          Ft.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(t) {
          return this.setLatLngs(this._boundsToLatLngs(t));
        },
        _boundsToLatLngs: function(t) {
          return t = Y(t), [
            t.getSouthWest(),
            t.getNorthWest(),
            t.getNorthEast(),
            t.getSouthEast()
          ];
        }
      });
      function Ro(t, e) {
        return new un(t, e);
      }
      se.create = ke, se.pointsToPath = fi, Ct.geometryToLayer = ye, Ct.coordsToLatLng = ri, Ct.coordsToLatLngs = Le, Ct.latLngToCoords = si, Ct.latLngsToCoords = xe, Ct.getFeature = Ht, Ct.asFeature = we, R.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var cn = yt.extend({
        initialize: function(t) {
          this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this);
        },
        addHooks: function() {
          A(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          W(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          j(this._pane), delete this._pane;
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
          this._clearDeferredResetState(), this._resetState(), Xt(), Ue(), this._startPoint = this._map.mouseEventToContainerPoint(t), A(document, {
            contextmenu: Ot,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(t) {
          this._moved || (this._moved = !0, this._box = D("div", "leaflet-zoom-box", this._container), z(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
          var e = new V(this._point, this._startPoint), i = e.getSize();
          Q(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px";
        },
        _finish: function() {
          this._moved && (j(this._box), K(this._container, "leaflet-crosshair")), Jt(), Ge(), W(document, {
            contextmenu: Ot,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(t) {
          if (!(t.which !== 1 && t.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(a(this._resetState, this), 0);
            var e = new rt(
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
      R.addInitHook("addHandler", "boxZoom", cn), R.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var fn = yt.extend({
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
      R.addInitHook("addHandler", "doubleClickZoom", fn), R.mergeOptions({
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
      var dn = yt.extend({
        addHooks: function() {
          if (!this._draggable) {
            var t = this._map;
            this._draggable = new Tt(t._mapPane, t._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this));
          }
          z(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          K(this._map._container, "leaflet-grab"), K(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
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
            var e = Y(this._map.options.maxBounds);
            this._offsetLimit = ot(
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
          var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset, n = this._draggable._newPos.x, o = (n - e + i) % t + e - i, s = (n + e + i) % t - e - i, l = Math.abs(o + i) < Math.abs(s + i) ? o : s;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = l;
        },
        _onDragEnd: function(t) {
          var e = this._map, i = e.options, n = !i.inertia || t.noInertia || this._times.length < 2;
          if (e.fire("dragend", t), n)
            e.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var o = this._lastPos.subtract(this._positions[0]), s = (this._lastTime - this._times[0]) / 1e3, l = i.easeLinearity, c = o.multiplyBy(l / s), _ = c.distanceTo([0, 0]), v = Math.min(i.inertiaMaxSpeed, _), w = c.multiplyBy(v / _), k = v / (i.inertiaDeceleration * l), O = w.multiplyBy(-k / 2).round();
            !O.x && !O.y ? e.fire("moveend") : (O = e._limitOffset(O, e.options.maxBounds), q(function() {
              e.panBy(O, {
                duration: k,
                easeLinearity: l,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      R.addInitHook("addHandler", "dragging", dn), R.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var _n = yt.extend({
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
          t.tabIndex <= 0 && (t.tabIndex = "0"), A(t, {
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
          A(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          W(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(t) {
          if (!(t.altKey || t.ctrlKey || t.metaKey)) {
            var e = t.keyCode, i = this._map, n;
            if (e in this._panKeys) {
              if (!i._panAnim || !i._panAnim._inProgress)
                if (n = this._panKeys[e], t.shiftKey && (n = T(n).multiplyBy(3)), i.options.maxBounds && (n = i._limitOffset(T(n), i.options.maxBounds)), i.options.worldCopyJump) {
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
            Ot(t);
          }
        }
      });
      R.addInitHook("addHandler", "keyboard", _n), R.mergeOptions({
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
      var pn = yt.extend({
        addHooks: function() {
          A(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          W(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(t) {
          var e = Ni(t), i = this._map.options.wheelDebounceTime;
          this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var n = Math.max(i - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(a(this._performZoom, this), n), Ot(t);
        },
        _performZoom: function() {
          var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0;
          t._stop();
          var n = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, s = i ? Math.ceil(o / i) * i : o, l = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
          this._delta = 0, this._startTime = null, l && (t.options.scrollWheelZoom === "center" ? t.setZoom(e + l) : t.setZoomAround(this._lastMousePos, e + l));
        }
      });
      R.addInitHook("addHandler", "scrollWheelZoom", pn);
      var No = 600;
      R.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: P.touchNative && P.safari && P.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var mn = yt.extend({
        addHooks: function() {
          A(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          W(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(t) {
          if (clearTimeout(this._holdTimeout), t.touches.length === 1) {
            var e = t.touches[0];
            this._startPos = this._newPos = new S(e.clientX, e.clientY), this._holdTimeout = setTimeout(a(function() {
              this._cancel(), this._isTapValid() && (A(document, "touchend", it), A(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", e));
            }, this), No), A(document, "touchend touchcancel contextmenu", this._cancel, this), A(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function t() {
          W(document, "touchend", it), W(document, "touchend touchcancel", t);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), W(document, "touchend touchcancel contextmenu", this._cancel, this), W(document, "touchmove", this._onMove, this);
        },
        _onMove: function(t) {
          var e = t.touches[0];
          this._newPos = new S(e.clientX, e.clientY);
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
      R.addInitHook("addHandler", "tapHold", mn), R.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: P.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: !0
      });
      var gn = yt.extend({
        addHooks: function() {
          z(this._map._container, "leaflet-touch-zoom"), A(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          K(this._map._container, "leaflet-touch-zoom"), W(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(t) {
          var e = this._map;
          if (!(!t.touches || t.touches.length !== 2 || e._animatingZoom || this._zooming)) {
            var i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]);
            this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), e.options.touchZoom !== "center" && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), A(document, "touchmove", this._onTouchMove, this), A(document, "touchend touchcancel", this._onTouchEnd, this), it(t);
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
            this._moved || (e._moveStart(!0, !1), this._moved = !0), tt(this._animRequest);
            var l = a(e._move, e, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = q(l, this, !0), it(t);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, tt(this._animRequest), W(document, "touchmove", this._onTouchMove, this), W(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      R.addInitHook("addHandler", "touchZoom", gn), R.BoxZoom = cn, R.DoubleClickZoom = fn, R.Drag = dn, R.Keyboard = _n, R.ScrollWheelZoom = pn, R.TapHold = mn, R.TouchZoom = gn, y.Bounds = V, y.Browser = P, y.CRS = wt, y.Canvas = an, y.Circle = oi, y.CircleMarker = ve, y.Class = ft, y.Control = dt, y.DivIcon = on, y.DivOverlay = Lt, y.DomEvent = eo, y.DomUtil = $n, y.Draggable = Tt, y.Evented = Vt, y.FeatureGroup = bt, y.GeoJSON = Ct, y.GridLayer = oe, y.Handler = yt, y.Icon = Dt, y.ImageOverlay = be, y.LatLng = H, y.LatLngBounds = rt, y.Layer = _t, y.LayerGroup = Nt, y.LineUtil = po, y.Map = R, y.Marker = ge, y.Mixin = ho, y.Path = St, y.Point = S, y.PolyUtil = lo, y.Polygon = Ft, y.Polyline = Pt, y.Popup = Pe, y.PosAnimation = Di, y.Projection = mo, y.Rectangle = un, y.Renderer = kt, y.SVG = se, y.SVGOverlay = nn, y.TileLayer = Ut, y.Tooltip = Ce, y.Transformation = Ae, y.Util = qt, y.VideoOverlay = en, y.bind = a, y.bounds = ot, y.canvas = hn, y.circle = Po, y.circleMarker = bo, y.control = ee, y.divIcon = Oo, y.extend = N, y.featureGroup = Lo, y.geoJSON = tn, y.geoJson = Mo, y.gridLayer = Zo, y.icon = xo, y.imageOverlay = To, y.latLng = B, y.latLngBounds = Y, y.layerGroup = yo, y.map = io, y.marker = wo, y.point = T, y.polygon = ko, y.polyline = Co, y.popup = zo, y.rectangle = Ro, y.setOptions = x, y.stamp = u, y.svg = ln, y.svgOverlay = Ao, y.tileLayer = rn, y.tooltip = Eo, y.transformation = jt, y.version = mt, y.videoOverlay = So;
      var Do = window.L;
      y.noConflict = function() {
        return window.L = Do, this;
      }, window.L = y;
    });
  }(ae, ae.exports)), ae.exports;
}
var Xo = Qo();
const pt = /* @__PURE__ */ Ko(Xo), Jo = '.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:""}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}', $o = ".leaflet-control-fullscreen a{background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAA0CAYAAACU7CiIAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACoSURBVFiF7ZZhDoAgCIWxdbF3suxkHM3+1FaOmNqyIr6fiHuJTyKklKgHQxcVF7rCKAUBiA5h5tCSR/T0iTakL9PWz05IZNEM3YSCt6BvCgFI2ps4Q9v3k9Ldgdrr8nrX9LYc7wwu5EIu9KCQT6rq+r8mVbV0ewBEIpqy8MzMsWR/8f+oxmES9u7olZPqLKQeYtqkWuy61V2xND/H3h35pNqMPTPYE1oAnZZStKN8jj8AAAAASUVORK5CYII=) no-repeat 0 0;background-size:26px 52px}.leaflet-touch .leaflet-control-fullscreen a{background-position:2px 2px}.leaflet-fullscreen-on .leaflet-control-fullscreen a{background-position:0 -26px}.leaflet-touch.leaflet-fullscreen-on .leaflet-control-fullscreen a{background-position:2px -24px}.leaflet-container:-webkit-full-screen{width:100%!important;height:100%!important}.leaflet-container.leaflet-fullscreen-on{width:100%!important;height:100%!important}.leaflet-pseudo-fullscreen{position:fixed!important;width:100%!important;height:100%!important;top:0!important;left:0!important;z-index:99999}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.leaflet-control-fullscreen a{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABoCAYAAAC+NNNnAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAbrwAAG68BXhqRHAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEhSURBVHic7dpBDoIwFADRj/FiPRlwsh4NN5CoiVKg1Ukzb43ApKK1dliWJXpy+/cN1GYQnUF0BtEZRHcvPTCldGhKkXMefnm+TXcjZBBd8TP0rvQ9ffb1R5+xTXcjZBCdQXQG0Q2u+sAZRGcQnUF0p9cUrv4eanW97kbIIDqD6AyiO70ut7du1mrdbU93I2QQnWsKdAbRGURnEJ1BdAbRGURnEJ1BdAbRueeUziA695zSGURnEN3pT7lvUkpTRIw7h80556n2tauPUGFMRMS4HltV9f+HWs3RSnX3DBlEZxCdQXQt9pzOUfbFuh179Xovqo/QOp35eKNPmkx9mszl1hudWpx7T3fPkEF0BtG555TOIDr3nNIZRGcQnUF0BtE9AF5WX48h7QeZAAAAAElFTkSuQmCC)}}", tr = ".leaflet-cluster-anim .leaflet-marker-icon,.leaflet-cluster-anim .leaflet-marker-shadow{-webkit-transition:-webkit-transform .3s ease-out,opacity .3s ease-in;-moz-transition:-moz-transform .3s ease-out,opacity .3s ease-in;-o-transition:-o-transform .3s ease-out,opacity .3s ease-in;transition:transform .3s ease-out,opacity .3s ease-in}.leaflet-cluster-spider-leg{-webkit-transition:-webkit-stroke-dashoffset .3s ease-out,-webkit-stroke-opacity .3s ease-in;-moz-transition:-moz-stroke-dashoffset .3s ease-out,-moz-stroke-opacity .3s ease-in;-o-transition:-o-stroke-dashoffset .3s ease-out,-o-stroke-opacity .3s ease-in;transition:stroke-dashoffset .3s ease-out,stroke-opacity .3s ease-in}", er = ".marker-cluster-small{background-color:#b5e28c99}.marker-cluster-small div{background-color:#6ecc3999}.marker-cluster-medium{background-color:#f1d35799}.marker-cluster-medium div{background-color:#f0c20c99}.marker-cluster-large{background-color:#fd9c7399}.marker-cluster-large div{background-color:#f1801799}.leaflet-oldie .marker-cluster-small{background-color:#b5e28c}.leaflet-oldie .marker-cluster-small div{background-color:#6ecc39}.leaflet-oldie .marker-cluster-medium{background-color:#f1d357}.leaflet-oldie .marker-cluster-medium div{background-color:#f0c20c}.leaflet-oldie .marker-cluster-large{background-color:#fd9c73}.leaflet-oldie .marker-cluster-large div{background-color:#f18017}.marker-cluster{background-clip:padding-box;border-radius:20px}.marker-cluster div{width:30px;height:30px;margin-left:5px;margin-top:5px;text-align:center;border-radius:15px;font:12px Helvetica Neue,Arial,Helvetica,sans-serif}.marker-cluster span{line-height:30px}";
L.Control.Fullscreen = L.Control.extend({
  options: {
    position: "topleft",
    title: {
      false: "View Fullscreen",
      true: "Exit Fullscreen"
    }
  },
  onAdd: function(Z) {
    var F = L.DomUtil.create("div", "leaflet-control-fullscreen leaflet-bar leaflet-control");
    return this.link = L.DomUtil.create("a", "leaflet-control-fullscreen-button leaflet-bar-part", F), this.link.href = "#", this._map = Z, this._map.on("fullscreenchange", this._toggleTitle, this), this._toggleTitle(), L.DomEvent.on(this.link, "click", this._click, this), F;
  },
  _click: function(Z) {
    L.DomEvent.stopPropagation(Z), L.DomEvent.preventDefault(Z), this._map.toggleFullscreen(this.options);
  },
  _toggleTitle: function() {
    this.link.title = this.options.title[this._map.isFullscreen()];
  }
});
L.Map.include({
  isFullscreen: function() {
    return this._isFullscreen || !1;
  },
  toggleFullscreen: function(Z) {
    var F = this.getContainer();
    this.isFullscreen() ? Z && Z.pseudoFullscreen ? this._disablePseudoFullscreen(F) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : this._disablePseudoFullscreen(F) : Z && Z.pseudoFullscreen ? this._enablePseudoFullscreen(F) : F.requestFullscreen ? F.requestFullscreen() : F.mozRequestFullScreen ? F.mozRequestFullScreen() : F.webkitRequestFullscreen ? F.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : F.msRequestFullscreen ? F.msRequestFullscreen() : this._enablePseudoFullscreen(F);
  },
  _enablePseudoFullscreen: function(Z) {
    L.DomUtil.addClass(Z, "leaflet-pseudo-fullscreen"), this._setFullscreen(!0), this.fire("fullscreenchange");
  },
  _disablePseudoFullscreen: function(Z) {
    L.DomUtil.removeClass(Z, "leaflet-pseudo-fullscreen"), this._setFullscreen(!1), this.fire("fullscreenchange");
  },
  _setFullscreen: function(Z) {
    this._isFullscreen = Z;
    var F = this.getContainer();
    Z ? L.DomUtil.addClass(F, "leaflet-fullscreen-on") : L.DomUtil.removeClass(F, "leaflet-fullscreen-on"), this.invalidateSize();
  },
  _onFullscreenChange: function(Z) {
    var F = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    F === this.getContainer() && !this._isFullscreen ? (this._setFullscreen(!0), this.fire("fullscreenchange")) : F !== this.getContainer() && this._isFullscreen && (this._setFullscreen(!1), this.fire("fullscreenchange"));
  }
});
L.Map.mergeOptions({
  fullscreenControl: !1
});
L.Map.addInitHook(function() {
  this.options.fullscreenControl && (this.fullscreenControl = new L.Control.Fullscreen(this.options.fullscreenControl), this.addControl(this.fullscreenControl));
  var Z;
  if ("onfullscreenchange" in document ? Z = "fullscreenchange" : "onmozfullscreenchange" in document ? Z = "mozfullscreenchange" : "onwebkitfullscreenchange" in document ? Z = "webkitfullscreenchange" : "onmsfullscreenchange" in document && (Z = "MSFullscreenChange"), Z) {
    var F = L.bind(this._onFullscreenChange, this);
    this.whenReady(function() {
      L.DomEvent.on(document, Z, F);
    }), this.on("unload", function() {
      L.DomEvent.off(document, Z, F);
    });
  }
});
L.control.fullscreen = function(Z) {
  return new L.Control.Fullscreen(Z);
};
var he = { exports: {} }, ir = he.exports, wn;
function nr() {
  return wn || (wn = 1, function(Z, F) {
    (function(y, mt) {
      mt(F);
    })(ir, function(y) {
      var mt = L.MarkerClusterGroup = L.FeatureGroup.extend({
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
          var a = r, h = this._zoom;
          if (r.__parent)
            for (; a.__parent._zoom >= h; )
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
          var h = this._featureGroup, u = this._nonPointGroup, f = this.options.chunkedLoading, p = this.options.chunkInterval, d = this.options.chunkProgress, g = r.length, m = 0, b = !0, x;
          if (this._map) {
            var M = (/* @__PURE__ */ new Date()).getTime(), C = L.bind(function() {
              var I = (/* @__PURE__ */ new Date()).getTime();
              for (this._map && this._unspiderfy && this._unspiderfy(); m < g; m++) {
                if (f && m % 200 === 0) {
                  var U = (/* @__PURE__ */ new Date()).getTime() - I;
                  if (U > p)
                    break;
                }
                if (x = r[m], x instanceof L.LayerGroup) {
                  b && (r = r.slice(), b = !1), this._extractNonGroupLayers(x, r), g = r.length;
                  continue;
                }
                if (!x.getLatLng) {
                  u.addLayer(x), a || this.fire("layeradd", { layer: x });
                  continue;
                }
                if (!this.hasLayer(x) && (this._addLayer(x, this._maxZoom), a || this.fire("layeradd", { layer: x }), x.__parent && x.__parent.getChildCount() === 2)) {
                  var G = x.__parent.getAllChildMarkers(), $ = G[0] === x ? G[1] : G[0];
                  h.removeLayer($);
                }
              }
              d && d(m, g, (/* @__PURE__ */ new Date()).getTime() - M), m === g ? (this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(C, this.options.chunkDelay);
            }, this);
            C();
          } else
            for (var E = this._needsClustering; m < g; m++) {
              if (x = r[m], x instanceof L.LayerGroup) {
                b && (r = r.slice(), b = !1), this._extractNonGroupLayers(x, r), g = r.length;
                continue;
              }
              if (!x.getLatLng) {
                u.addLayer(x);
                continue;
              }
              this.hasLayer(x) || E.push(x);
            }
          return this;
        },
        //Takes an array of markers and removes them in bulk
        removeLayers: function(r) {
          var a, h, u = r.length, f = this._featureGroup, p = this._nonPointGroup, d = !0;
          if (!this._map) {
            for (a = 0; a < u; a++) {
              if (h = r[a], h instanceof L.LayerGroup) {
                d && (r = r.slice(), d = !1), this._extractNonGroupLayers(h, r), u = r.length;
                continue;
              }
              this._arraySplice(this._needsClustering, h), p.removeLayer(h), this.hasLayer(h) && this._needsRemoving.push({ layer: h, latlng: h._latlng }), this.fire("layerremove", { layer: h });
            }
            return this;
          }
          if (this._unspiderfy) {
            this._unspiderfy();
            var g = r.slice(), m = u;
            for (a = 0; a < m; a++) {
              if (h = g[a], h instanceof L.LayerGroup) {
                this._extractNonGroupLayers(h, g), m = g.length;
                continue;
              }
              this._unspiderfyLayer(h);
            }
          }
          for (a = 0; a < u; a++) {
            if (h = r[a], h instanceof L.LayerGroup) {
              d && (r = r.slice(), d = !1), this._extractNonGroupLayers(h, r), u = r.length;
              continue;
            }
            if (!h.__parent) {
              p.removeLayer(h), this.fire("layerremove", { layer: h });
              continue;
            }
            this._removeLayer(h, !0, !0), this.fire("layerremove", { layer: h }), f.hasLayer(h) && (f.removeLayer(h), h.clusterShow && h.clusterShow());
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
          var h = this._needsClustering.slice(), u = this._needsRemoving, f, p, d;
          for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(h), p = h.length - 1; p >= 0; p--) {
            for (f = !0, d = u.length - 1; d >= 0; d--)
              if (u[d].layer === h[p]) {
                f = !1;
                break;
              }
            f && r.call(a, h[p]);
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
          return r = parseInt(r, 10), this.eachLayer(function(h) {
            L.stamp(h) === r && (a = h);
          }), a;
        },
        //Returns true if the given layer is in this MarkerClusterGroup
        hasLayer: function(r) {
          if (!r)
            return !1;
          var a, h = this._needsClustering;
          for (a = h.length - 1; a >= 0; a--)
            if (h[a] === r)
              return !0;
          for (h = this._needsRemoving, a = h.length - 1; a >= 0; a--)
            if (h[a].layer === r)
              return !1;
          return !!(r.__parent && r.__parent._group === this) || this._nonPointGroup.hasLayer(r);
        },
        //Zoom down to show the given layer (spiderfying if necessary) then calls the callback
        zoomToShowLayer: function(r, a) {
          var h = this._map;
          typeof a != "function" && (a = function() {
          });
          var u = function() {
            (h.hasLayer(r) || h.hasLayer(r.__parent)) && !this._inZoomAnimation && (this._map.off("moveend", u, this), this.off("animationend", u, this), h.hasLayer(r) ? a() : r.__parent._icon && (this.once("spiderfied", a, this), r.__parent.spiderfy()));
          };
          r._icon && this._map.getBounds().contains(r.getLatLng()) ? a() : r.__parent._zoom < Math.round(this._map._zoom) ? (this._map.on("moveend", u, this), this._map.panTo(r.getLatLng())) : (this._map.on("moveend", u, this), this.on("animationend", u, this), r.__parent.zoomToBounds());
        },
        //Overrides FeatureGroup.onAdd
        onAdd: function(r) {
          this._map = r;
          var a, h, u;
          if (!isFinite(this._map.getMaxZoom()))
            throw "Map has no maxZoom specified";
          for (this._featureGroup.addTo(r), this._nonPointGroup.addTo(r), this._gridClusters || this._generateInitialClusters(), this._maxLat = r.options.crs.projection.MAX_LATITUDE, a = 0, h = this._needsRemoving.length; a < h; a++)
            u = this._needsRemoving[a], u.newlatlng = u.layer._latlng, u.layer._latlng = u.latlng;
          for (a = 0, h = this._needsRemoving.length; a < h; a++)
            u = this._needsRemoving[a], this._removeLayer(u.layer, !0), u.layer._latlng = u.newlatlng;
          this._needsRemoving = [], this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds(), this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), h = this._needsClustering, this._needsClustering = [], this.addLayers(h, !0);
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
          for (var h = r.length - 1; h >= 0; h--)
            if (r[h] === a)
              return r.splice(h, 1), !0;
        },
        /**
         * Removes a marker from all _gridUnclustered zoom levels, starting at the supplied zoom.
         * @param marker to be removed from _gridUnclustered.
         * @param z integer bottom start zoom level (included)
         * @private
         */
        _removeFromGridUnclustered: function(r, a) {
          for (var h = this._map, u = this._gridUnclustered, f = Math.floor(this._map.getMinZoom()); a >= f && u[a].removeObject(r, h.project(r.getLatLng(), a)); a--)
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
        _moveChild: function(r, a, h) {
          r._latlng = a, this.removeLayer(r), r._latlng = h, this.addLayer(r);
        },
        _childMarkerDragEnd: function(r) {
          var a = r.target.__dragStart;
          delete r.target.__dragStart, a && this._moveChild(r.target, a, r.target._latlng);
        },
        //Internal function for removing a marker from everything.
        //dontUpdateMap: set to true if you will handle updating the map manually (for bulk functions)
        _removeLayer: function(r, a, h) {
          var u = this._gridClusters, f = this._gridUnclustered, p = this._featureGroup, d = this._map, g = Math.floor(this._map.getMinZoom());
          a && this._removeFromGridUnclustered(r, this._maxZoom);
          var m = r.__parent, b = m._markers, x;
          for (this._arraySplice(b, r); m && (m._childCount--, m._boundsNeedUpdate = !0, !(m._zoom < g)); )
            a && m._childCount <= 1 ? (x = m._markers[0] === r ? m._markers[1] : m._markers[0], u[m._zoom].removeObject(m, d.project(m._cLatLng, m._zoom)), f[m._zoom].addObject(x, d.project(x.getLatLng(), m._zoom)), this._arraySplice(m.__parent._childClusters, m), m.__parent._markers.push(x), x.__parent = m.__parent, m._icon && (p.removeLayer(m), h || p.addLayer(x))) : m._iconNeedsUpdate = !0, m = m.__parent;
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
        fire: function(r, a, h) {
          if (a && a.layer instanceof L.MarkerCluster) {
            if (a.originalEvent && this._isOrIsParent(a.layer._icon, a.originalEvent.relatedTarget))
              return;
            r = "cluster" + r;
          }
          L.FeatureGroup.prototype.fire.call(this, r, a, h);
        },
        //Override L.Evented.listens
        listens: function(r, a) {
          return L.FeatureGroup.prototype.listens.call(this, r, a) || L.FeatureGroup.prototype.listens.call(this, "cluster" + r, a);
        },
        //Default functionality
        _defaultIconCreateFunction: function(r) {
          var a = r.getChildCount(), h = " marker-cluster-";
          return a < 10 ? h += "small" : a < 100 ? h += "medium" : h += "large", new L.DivIcon({ html: "<div><span>" + a + "</span></div>", className: "marker-cluster" + h, iconSize: new L.Point(40, 40) });
        },
        _bindEvents: function() {
          var r = this._map, a = this.options.spiderfyOnMaxZoom, h = this.options.showCoverageOnHover, u = this.options.zoomToBoundsOnClick, f = this.options.spiderfyOnEveryZoom;
          (a || u || f) && this.on("clusterclick clusterkeypress", this._zoomOrSpiderfy, this), h && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), r.on("zoomend", this._hideCoverage, this));
        },
        _zoomOrSpiderfy: function(r) {
          var a = r.layer, h = a;
          if (!(r.type === "clusterkeypress" && r.originalEvent && r.originalEvent.keyCode !== 13)) {
            for (; h._childClusters.length === 1; )
              h = h._childClusters[0];
            h._zoom === this._maxZoom && h._childCount === a._childCount && this.options.spiderfyOnMaxZoom ? a.spiderfy() : this.options.zoomToBoundsOnClick && a.zoomToBounds(), this.options.spiderfyOnEveryZoom && a.spiderfy(), r.originalEvent && r.originalEvent.keyCode === 13 && this._map._container.focus();
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
          var r = this.options.spiderfyOnMaxZoom, a = this.options.showCoverageOnHover, h = this.options.zoomToBoundsOnClick, u = this.options.spiderfyOnEveryZoom, f = this._map;
          (r || h || u) && this.off("clusterclick clusterkeypress", this._zoomOrSpiderfy, this), a && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), f.off("zoomend", this._hideCoverage, this));
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
          var r = Math.ceil(this._map.getMaxZoom()), a = Math.floor(this._map.getMinZoom()), h = this.options.maxClusterRadius, u = h;
          typeof h != "function" && (u = function() {
            return h;
          }), this.options.disableClusteringAtZoom !== null && (r = this.options.disableClusteringAtZoom - 1), this._maxZoom = r, this._gridClusters = {}, this._gridUnclustered = {};
          for (var f = r; f >= a; f--)
            this._gridClusters[f] = new L.DistanceGrid(u(f)), this._gridUnclustered[f] = new L.DistanceGrid(u(f));
          this._topClusterLevel = new this._markerCluster(this, a - 1);
        },
        //Zoom: Zoom to start adding at (Pass this._maxZoom to start at the bottom)
        _addLayer: function(r, a) {
          var h = this._gridClusters, u = this._gridUnclustered, f = Math.floor(this._map.getMinZoom()), p, d;
          for (this.options.singleMarkerMode && this._overrideMarkerIcon(r), r.on(this._childMarkerEventHandlers, this); a >= f; a--) {
            p = this._map.project(r.getLatLng(), a);
            var g = h[a].getNearObject(p);
            if (g) {
              g._addChild(r), r.__parent = g;
              return;
            }
            if (g = u[a].getNearObject(p), g) {
              var m = g.__parent;
              m && this._removeLayer(g, !1);
              var b = new this._markerCluster(this, a, g, r);
              h[a].addObject(b, this._map.project(b._cLatLng, a)), g.__parent = b, r.__parent = b;
              var x = b;
              for (d = a - 1; d > m._zoom; d--)
                x = new this._markerCluster(this, d, x), h[d].addObject(x, this._map.project(g.getLatLng(), d));
              m._addChild(x), this._removeFromGridUnclustered(g, a);
              return;
            }
            u[a].addObject(r, p);
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
            var h = a.getAllChildMarkers();
            this._featureGroup.removeLayer(h[0]), this._featureGroup.removeLayer(h[1]);
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
          var h = r.getLayers(), u = 0, f;
          for (a = a || []; u < h.length; u++) {
            if (f = h[u], f instanceof L.LayerGroup) {
              this._extractNonGroupLayers(f, a);
              continue;
            }
            a.push(f);
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
            var h = this._getExpandedVisibleBounds(), u = this._featureGroup, f = Math.floor(this._map.getMinZoom()), p;
            this._ignoreMove = !0, this._topClusterLevel._recursively(h, r, f, function(d) {
              var g = d._latlng, m = d._markers, b;
              for (h.contains(g) || (g = null), d._isSingleParent() && r + 1 === a ? (u.removeLayer(d), d._recursivelyAddChildrenToMap(null, a, h)) : (d.clusterHide(), d._recursivelyAddChildrenToMap(g, a, h)), p = m.length - 1; p >= 0; p--)
                b = m[p], h.contains(b._latlng) || u.removeLayer(b);
            }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(h, a), u.eachLayer(function(d) {
              !(d instanceof L.MarkerCluster) && d._icon && d.clusterShow();
            }), this._topClusterLevel._recursively(h, r, a, function(d) {
              d._recursivelyRestoreChildPositions(a);
            }), this._ignoreMove = !1, this._enqueue(function() {
              this._topClusterLevel._recursively(h, r, f, function(d) {
                u.removeLayer(d), d.clusterShow();
              }), this._animationEnd();
            });
          },
          _animationZoomOut: function(r, a) {
            this._animationZoomOutSingle(this._topClusterLevel, r - 1, a), this._topClusterLevel._recursivelyAddChildrenToMap(null, a, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), r, this._getExpandedVisibleBounds());
          },
          _animationAddLayer: function(r, a) {
            var h = this, u = this._featureGroup;
            u.addLayer(r), a !== r && (a._childCount > 2 ? (a._updateIcon(), this._forceLayout(), this._animationStart(), r._setPos(this._map.latLngToLayerPoint(a.getLatLng())), r.clusterHide(), this._enqueue(function() {
              u.removeLayer(r), r.clusterShow(), h._animationEnd();
            })) : (this._forceLayout(), h._animationStart(), h._animationZoomOutSingle(a, this._map.getMaxZoom(), this._zoom)));
          }
        },
        // Private methods for animated versions.
        _animationZoomOutSingle: function(r, a, h) {
          var u = this._getExpandedVisibleBounds(), f = Math.floor(this._map.getMinZoom());
          r._recursivelyAnimateChildrenInAndAddSelfToMap(u, f, a + 1, h);
          var p = this;
          this._forceLayout(), r._recursivelyBecomeVisible(u, h), this._enqueue(function() {
            if (r._childCount === 1) {
              var d = r._markers[0];
              this._ignoreMove = !0, d.setLatLng(d.getLatLng()), this._ignoreMove = !1, d.clusterShow && d.clusterShow();
            } else
              r._recursively(u, h, f, function(g) {
                g._recursivelyRemoveChildrenFromMap(u, f, a + 1);
              });
            p._animationEnd();
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
      var N = L.MarkerCluster = L.Marker.extend({
        options: L.Icon.prototype.options,
        initialize: function(r, a, h, u) {
          L.Marker.prototype.initialize.call(
            this,
            h ? h._cLatLng || h.getLatLng() : new L.LatLng(0, 0),
            { icon: this, pane: r.options.clusterPane }
          ), this._group = r, this._zoom = a, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._bounds = new L.LatLngBounds(), h && this._addChild(h), u && this._addChild(u);
        },
        //Recursively retrieve all child markers of this cluster
        getAllChildMarkers: function(r, a) {
          r = r || [];
          for (var h = this._childClusters.length - 1; h >= 0; h--)
            this._childClusters[h].getAllChildMarkers(r, a);
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
          for (var a = this._childClusters.slice(), h = this._group._map, u = h.getBoundsZoom(this._bounds), f = this._zoom + 1, p = h.getZoom(), d; a.length > 0 && u > f; ) {
            f++;
            var g = [];
            for (d = 0; d < a.length; d++)
              g = g.concat(a[d]._childClusters);
            a = g;
          }
          u > f ? this._group._map.setView(this._latlng, f) : u <= p ? this._group._map.setView(this._latlng, p + 1) : this._group._map.fitBounds(this._bounds, r);
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
          var r = this._markers, a = this._childClusters, h = 0, u = 0, f = this._childCount, p, d, g, m;
          if (f !== 0) {
            for (this._resetBounds(), p = 0; p < r.length; p++)
              g = r[p]._latlng, this._bounds.extend(g), h += g.lat, u += g.lng;
            for (p = 0; p < a.length; p++)
              d = a[p], d._boundsNeedUpdate && d._recalculateBounds(), this._bounds.extend(d._bounds), g = d._wLatLng, m = d._childCount, h += g.lat * m, u += g.lng * m;
            this._latlng = this._wLatLng = new L.LatLng(h / f, u / f), this._boundsNeedUpdate = !1;
          }
        },
        //Set our markers position as given and add it to the map
        _addToMap: function(r) {
          r && (this._backupLatlng = this._latlng, this.setLatLng(r)), this._group._featureGroup.addLayer(this);
        },
        _recursivelyAnimateChildrenIn: function(r, a, h) {
          this._recursively(
            r,
            this._group._map.getMinZoom(),
            h - 1,
            function(u) {
              var f = u._markers, p, d;
              for (p = f.length - 1; p >= 0; p--)
                d = f[p], d._icon && (d._setPos(a), d.clusterHide());
            },
            function(u) {
              var f = u._childClusters, p, d;
              for (p = f.length - 1; p >= 0; p--)
                d = f[p], d._icon && (d._setPos(a), d.clusterHide());
            }
          );
        },
        _recursivelyAnimateChildrenInAndAddSelfToMap: function(r, a, h, u) {
          this._recursively(
            r,
            u,
            a,
            function(f) {
              f._recursivelyAnimateChildrenIn(r, f._group._map.latLngToLayerPoint(f.getLatLng()).round(), h), f._isSingleParent() && h - 1 === u ? (f.clusterShow(), f._recursivelyRemoveChildrenFromMap(r, a, h)) : f.clusterHide(), f._addToMap();
            }
          );
        },
        _recursivelyBecomeVisible: function(r, a) {
          this._recursively(r, this._group._map.getMinZoom(), a, null, function(h) {
            h.clusterShow();
          });
        },
        _recursivelyAddChildrenToMap: function(r, a, h) {
          this._recursively(
            h,
            this._group._map.getMinZoom() - 1,
            a,
            function(u) {
              if (a !== u._zoom)
                for (var f = u._markers.length - 1; f >= 0; f--) {
                  var p = u._markers[f];
                  h.contains(p._latlng) && (r && (p._backupLatlng = p.getLatLng(), p.setLatLng(r), p.clusterHide && p.clusterHide()), u._group._featureGroup.addLayer(p));
                }
            },
            function(u) {
              u._addToMap(r);
            }
          );
        },
        _recursivelyRestoreChildPositions: function(r) {
          for (var a = this._markers.length - 1; a >= 0; a--) {
            var h = this._markers[a];
            h._backupLatlng && (h.setLatLng(h._backupLatlng), delete h._backupLatlng);
          }
          if (r - 1 === this._zoom)
            for (var u = this._childClusters.length - 1; u >= 0; u--)
              this._childClusters[u]._restorePosition();
          else
            for (var f = this._childClusters.length - 1; f >= 0; f--)
              this._childClusters[f]._recursivelyRestoreChildPositions(r);
        },
        _restorePosition: function() {
          this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng);
        },
        //exceptBounds: If set, don't remove any markers/clusters in it
        _recursivelyRemoveChildrenFromMap: function(r, a, h, u) {
          var f, p;
          this._recursively(
            r,
            a - 1,
            h - 1,
            function(d) {
              for (p = d._markers.length - 1; p >= 0; p--)
                f = d._markers[p], (!u || !u.contains(f._latlng)) && (d._group._featureGroup.removeLayer(f), f.clusterShow && f.clusterShow());
            },
            function(d) {
              for (p = d._childClusters.length - 1; p >= 0; p--)
                f = d._childClusters[p], (!u || !u.contains(f._latlng)) && (d._group._featureGroup.removeLayer(f), f.clusterShow && f.clusterShow());
            }
          );
        },
        //Run the given functions recursively to this and child clusters
        // boundsToApplyTo: a L.LatLngBounds representing the bounds of what clusters to recurse in to
        // zoomLevelToStart: zoom level to start running functions (inclusive)
        // zoomLevelToStop: zoom level to stop running functions (inclusive)
        // runAtEveryLevel: function that takes an L.MarkerCluster as an argument that should be applied on every level
        // runAtBottomLevel: function that takes an L.MarkerCluster as an argument that should be applied at only the bottom level
        _recursively: function(r, a, h, u, f) {
          var p = this._childClusters, d = this._zoom, g, m;
          if (a <= d && (u && u(this), f && d === h && f(this)), d < a || d < h)
            for (g = p.length - 1; g >= 0; g--)
              m = p[g], m._boundsNeedUpdate && m._recalculateBounds(), r.intersects(m._bounds) && m._recursively(r, a, h, u, f);
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
          var h = this._getCoord(a.x), u = this._getCoord(a.y), f = this._grid, p = f[u] = f[u] || {}, d = p[h] = p[h] || [], g = L.Util.stamp(r);
          this._objectPoint[g] = a, d.push(r);
        },
        updateObject: function(r, a) {
          this.removeObject(r), this.addObject(r, a);
        },
        //Returns true if the object was found
        removeObject: function(r, a) {
          var h = this._getCoord(a.x), u = this._getCoord(a.y), f = this._grid, p = f[u] = f[u] || {}, d = p[h] = p[h] || [], g, m;
          for (delete this._objectPoint[L.Util.stamp(r)], g = 0, m = d.length; g < m; g++)
            if (d[g] === r)
              return d.splice(g, 1), m === 1 && delete p[h], !0;
        },
        eachObject: function(r, a) {
          var h, u, f, p, d, g, m, b = this._grid;
          for (h in b) {
            d = b[h];
            for (u in d)
              for (g = d[u], f = 0, p = g.length; f < p; f++)
                m = r.call(a, g[f]), m && (f--, p--);
          }
        },
        getNearObject: function(r) {
          var a = this._getCoord(r.x), h = this._getCoord(r.y), u, f, p, d, g, m, b, x, M = this._objectPoint, C = this._sqCellSize, E = null;
          for (u = h - 1; u <= h + 1; u++)
            if (d = this._grid[u], d) {
              for (f = a - 1; f <= a + 1; f++)
                if (g = d[f], g)
                  for (p = 0, m = g.length; p < m; p++)
                    b = g[p], x = this._sqDist(M[L.Util.stamp(b)], r), (x < C || x <= C && E === null) && (C = x, E = b);
            }
          return E;
        },
        _getCoord: function(r) {
          var a = Math.floor(r / this._cellSize);
          return isFinite(a) ? a : r;
        },
        _sqDist: function(r, a) {
          var h = a.x - r.x, u = a.y - r.y;
          return h * h + u * u;
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
            var h = a[1].lat - a[0].lat, u = a[0].lng - a[1].lng;
            return u * (r.lat - a[0].lat) + h * (r.lng - a[0].lng);
          },
          /*
           * @param {Array} baseLine a two-element array of latlng objects
           *   representing the baseline to project from
           * @param {Array} latLngs an array of latlng objects
           * @returns {Object} the maximum point and all new points to stay
           *   in consideration for the hull.
           */
          findMostDistantPointFromBaseLine: function(r, a) {
            var h = 0, u = null, f = [], p, d, g;
            for (p = a.length - 1; p >= 0; p--) {
              if (d = a[p], g = this.getDistant(d, r), g > 0)
                f.push(d);
              else
                continue;
              g > h && (h = g, u = d);
            }
            return { maxPoint: u, newPoints: f };
          },
          /*
           * Given a baseline, compute the convex hull of latLngs as an array
           * of latLngs.
           *
           * @param {Array} latLngs
           * @returns {Array}
           */
          buildConvexHull: function(r, a) {
            var h = [], u = this.findMostDistantPointFromBaseLine(r, a);
            return u.maxPoint ? (h = h.concat(
              this.buildConvexHull([r[0], u.maxPoint], u.newPoints)
            ), h = h.concat(
              this.buildConvexHull([u.maxPoint, r[1]], u.newPoints)
            ), h) : [r[0]];
          },
          /*
           * Given an array of latlngs, compute a convex hull as an array
           * of latlngs
           *
           * @param {Array} latLngs
           * @returns {Array}
           */
          getConvexHull: function(r) {
            var a = !1, h = !1, u = !1, f = !1, p = null, d = null, g = null, m = null, b = null, x = null, M;
            for (M = r.length - 1; M >= 0; M--) {
              var C = r[M];
              (a === !1 || C.lat > a) && (p = C, a = C.lat), (h === !1 || C.lat < h) && (d = C, h = C.lat), (u === !1 || C.lng > u) && (g = C, u = C.lng), (f === !1 || C.lng < f) && (m = C, f = C.lng);
            }
            h !== a ? (x = d, b = p) : (x = m, b = g);
            var E = [].concat(
              this.buildConvexHull([x, b], r),
              this.buildConvexHull([b, x], r)
            );
            return E;
          }
        };
      }(), L.MarkerCluster.include({
        getConvexHull: function() {
          var r = this.getAllChildMarkers(), a = [], h, u;
          for (u = r.length - 1; u >= 0; u--)
            h = r[u].getLatLng(), a.push(h);
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
            var r = this.getAllChildMarkers(null, !0), a = this._group, h = a._map, u = h.latLngToLayerPoint(this._latlng), f;
            this._group._unspiderfy(), this._group._spiderfied = this, this._group.options.spiderfyShapePositions ? f = this._group.options.spiderfyShapePositions(r.length, u) : r.length >= this._circleSpiralSwitchover ? f = this._generatePointsSpiral(r.length, u) : (u.y += 10, f = this._generatePointsCircle(r.length, u)), this._animationSpiderfy(r, f);
          }
        },
        unspiderfy: function(r) {
          this._group._inZoomAnimation || (this._animationUnspiderfy(r), this._group._spiderfied = null);
        },
        _generatePointsCircle: function(r, a) {
          var h = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + r), u = h / this._2PI, f = this._2PI / r, p = [], d, g;
          for (u = Math.max(u, 35), p.length = r, d = 0; d < r; d++)
            g = this._circleStartAngle + d * f, p[d] = new L.Point(a.x + u * Math.cos(g), a.y + u * Math.sin(g))._round();
          return p;
        },
        _generatePointsSpiral: function(r, a) {
          var h = this._group.options.spiderfyDistanceMultiplier, u = h * this._spiralLengthStart, f = h * this._spiralFootSeparation, p = h * this._spiralLengthFactor * this._2PI, d = 0, g = [], m;
          for (g.length = r, m = r; m >= 0; m--)
            m < r && (g[m] = new L.Point(a.x + u * Math.cos(d), a.y + u * Math.sin(d))._round()), d += f / u + m * 5e-4, u += p / d;
          return g;
        },
        _noanimationUnspiderfy: function() {
          var r = this._group, a = r._map, h = r._featureGroup, u = this.getAllChildMarkers(null, !0), f, p;
          for (r._ignoreMove = !0, this.setOpacity(1), p = u.length - 1; p >= 0; p--)
            f = u[p], h.removeLayer(f), f._preSpiderfyLatlng && (f.setLatLng(f._preSpiderfyLatlng), delete f._preSpiderfyLatlng), f.setZIndexOffset && f.setZIndexOffset(0), f._spiderLeg && (a.removeLayer(f._spiderLeg), delete f._spiderLeg);
          r.fire("unspiderfied", {
            cluster: this,
            markers: u
          }), r._ignoreMove = !1, r._spiderfied = null;
        }
      }), L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
        _animationSpiderfy: function(r, a) {
          var h = this._group, u = h._map, f = h._featureGroup, p = this._group.options.spiderLegPolylineOptions, d, g, m, b;
          for (h._ignoreMove = !0, d = 0; d < r.length; d++)
            b = u.layerPointToLatLng(a[d]), g = r[d], m = new L.Polyline([this._latlng, b], p), u.addLayer(m), g._spiderLeg = m, g._preSpiderfyLatlng = g._latlng, g.setLatLng(b), g.setZIndexOffset && g.setZIndexOffset(1e6), f.addLayer(g);
          this.setOpacity(0.3), h._ignoreMove = !1, h.fire("spiderfied", {
            cluster: this,
            markers: r
          });
        },
        _animationUnspiderfy: function() {
          this._noanimationUnspiderfy();
        }
      }), L.MarkerCluster.include({
        _animationSpiderfy: function(r, a) {
          var h = this, u = this._group, f = u._map, p = u._featureGroup, d = this._latlng, g = f.latLngToLayerPoint(d), m = L.Path.SVG, b = L.extend({}, this._group.options.spiderLegPolylineOptions), x = b.opacity, M, C, E, I, U, G;
          for (x === void 0 && (x = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity), m ? (b.opacity = 0, b.className = (b.className || "") + " leaflet-cluster-spider-leg") : b.opacity = x, u._ignoreMove = !0, M = 0; M < r.length; M++)
            C = r[M], G = f.layerPointToLatLng(a[M]), E = new L.Polyline([d, G], b), f.addLayer(E), C._spiderLeg = E, m && (I = E._path, U = I.getTotalLength() + 0.1, I.style.strokeDasharray = U, I.style.strokeDashoffset = U), C.setZIndexOffset && C.setZIndexOffset(1e6), C.clusterHide && C.clusterHide(), p.addLayer(C), C._setPos && C._setPos(g);
          for (u._forceLayout(), u._animationStart(), M = r.length - 1; M >= 0; M--)
            G = f.layerPointToLatLng(a[M]), C = r[M], C._preSpiderfyLatlng = C._latlng, C.setLatLng(G), C.clusterShow && C.clusterShow(), m && (E = C._spiderLeg, I = E._path, I.style.strokeDashoffset = 0, E.setStyle({ opacity: x }));
          this.setOpacity(0.3), u._ignoreMove = !1, setTimeout(function() {
            u._animationEnd(), u.fire("spiderfied", {
              cluster: h,
              markers: r
            });
          }, 200);
        },
        _animationUnspiderfy: function(r) {
          var a = this, h = this._group, u = h._map, f = h._featureGroup, p = r ? u._latLngToNewLayerPoint(this._latlng, r.zoom, r.center) : u.latLngToLayerPoint(this._latlng), d = this.getAllChildMarkers(null, !0), g = L.Path.SVG, m, b, x, M, C, E;
          for (h._ignoreMove = !0, h._animationStart(), this.setOpacity(1), b = d.length - 1; b >= 0; b--)
            m = d[b], m._preSpiderfyLatlng && (m.closePopup(), m.setLatLng(m._preSpiderfyLatlng), delete m._preSpiderfyLatlng, E = !0, m._setPos && (m._setPos(p), E = !1), m.clusterHide && (m.clusterHide(), E = !1), E && f.removeLayer(m), g && (x = m._spiderLeg, M = x._path, C = M.getTotalLength() + 0.1, M.style.strokeDashoffset = C, x.setStyle({ opacity: 0 })));
          h._ignoreMove = !1, setTimeout(function() {
            var I = 0;
            for (b = d.length - 1; b >= 0; b--)
              m = d[b], m._spiderLeg && I++;
            for (b = d.length - 1; b >= 0; b--)
              m = d[b], m._spiderLeg && (m.clusterShow && m.clusterShow(), m.setZIndexOffset && m.setZIndexOffset(0), I > 1 && f.removeLayer(m), u.removeLayer(m._spiderLeg), delete m._spiderLeg);
            h._animationEnd(), h.fire("unspiderfied", {
              cluster: a,
              markers: d
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
          var a, h;
          for (a in r)
            for (h = r[a].__parent; h; )
              h._iconNeedsUpdate = !0, h = h.__parent;
        },
        /**
         * Re-draws the icon of the supplied markers.
         * To be used in singleMarkerMode only.
         * @param layers Array(L.Marker)|Map(L.Marker) list of markers.
         * @private
         */
        _refreshSingleMarkerModeMarkers: function(r) {
          var a, h;
          for (a in r)
            h = r[a], this.hasLayer(h) && h.setIcon(this._overrideMarkerIcon(h));
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
          var h = this.options.icon;
          return L.setOptions(h, r), this.setIcon(h), a && this.__parent && this.__parent._group.refreshClusters(this), this;
        }
      }), y.MarkerClusterGroup = mt, y.MarkerCluster = N, Object.defineProperty(y, "__esModule", { value: !0 });
    });
  }(he, he.exports)), he.exports;
}
nr();
class or extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["src"];
  }
  async connectedCallback() {
    const F = document.createElement("style");
    F.textContent = `
          :host {
            display: block;
          }
        `, this.shadowRoot.append(F);
    const y = document.createElement("style");
    y.textContent = Jo, this.shadowRoot.appendChild(y);
    const mt = document.createElement("style");
    mt.textContent = $o, this.shadowRoot.appendChild(mt);
    const N = document.createElement("style");
    N.textContent = tr, this.shadowRoot.appendChild(N);
    const r = document.createElement("style");
    r.textContent = er, this.shadowRoot.appendChild(r);
    const a = document.createElement("div");
    a.style.width = "100%", a.style.height = "100%", this.shadowRoot.appendChild(a);
    const h = pt.map(a).setView([47, 19], 3);
    pt.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(h), h.addControl(new pt.Control.Fullscreen({
      title: {
        false: "View Fullscreen",
        true: "Exit Fullscreen"
      }
    }));
    const u = this.getAttribute("callsign");
    if (u) {
      const M = pt.control({ position: "topright" });
      M.onAdd = function(C) {
        let E = pt.DomUtil.create("div", "leaflet-control leaflet-control-custom");
        return E.style.background = "rgba(0, 0, 0, 0.7)", E.style.color = "white", E.style.padding = "10px", E.style.fontSize = "18px", E.style.fontWeight = "bold", E.style.borderRadius = "5px", E.innerHTML = `<a href="https://www.qrz.com/db/${u}" target="_blank" style="color: white">${u}</a>`, E;
      }, M.addTo(h);
    }
    const f = 0.7, p = f * 1.2, d = new pt.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
      iconSize: [25 * f, 41 * f],
      iconAnchor: [12 * f, 41 * f],
      popupAnchor: [1 * f, -34 * f],
      shadowSize: [41 * f, 41 * f]
    }), g = new pt.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
      iconSize: [25 * f, 41 * f],
      iconAnchor: [12 * f, 41 * f],
      popupAnchor: [1 * f, -34 * f],
      shadowSize: [41 * f, 41 * f]
    }), m = new pt.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
      iconSize: [25 * p, 41 * p],
      iconAnchor: [12 * p, 41 * p],
      popupAnchor: [1 * p, -34 * p],
      shadowSize: [41 * p, 41 * p]
    });
    new pt.Icon({
      iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
      shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
      iconSize: [25 * p, 41 * p],
      iconAnchor: [12 * p, 41 * p],
      popupAnchor: [1 * p, -34 * p],
      shadowSize: [41 * p, 41 * p]
    }), fetch(this.getAttribute("src")).then((M) => M.text()).then((M) => x(M)).catch((M) => console.error("Error loading default ADIF:", M));
    function b(M) {
      if (M = M.toUpperCase(), M.length < 4 || M.length % 2 !== 0)
        throw "grid square: grid must be at least 4 characters and have an even length: " + M;
      let C = -90, E = -180, I = 240, U = 480;
      for (let G = 0; G < M.length; G += 2) {
        G % 4 == 2 ? (U /= 10, I /= 10) : G % 4 == 0 && (U /= 24, I /= 24);
        const $ = M.charAt(G), ct = M.charAt(G + 1);
        $ >= "0" && $ <= "9" ? (E += U * parseInt($, 10), C += I * parseInt(ct, 10)) : (E += U * ($.charCodeAt(0) - 65), C += I * (ct.charCodeAt(0) - 65));
      }
      return C += I * 0.5, E += U * 0.5, { lat: C, lon: E };
    }
    function x(M) {
      const C = M.split("<eoh>"), E = C[C.length - 1].split("<eor>"), I = /* @__PURE__ */ new Map();
      E.forEach((U) => {
        const G = U.match(/<lat:[0-9]+>([NS])([0-9]+) ([0-9]+\.[0-9]+)/i), $ = U.match(/<lon:[0-9]+>([EW])([0-9]+) ([0-9]+\.[0-9]+)/i), ct = U.match(/<gridsquare:[0-9]+>([A-Z0-9/]+)/i), xt = U.match(/<call:[0-9]+>([A-Z0-9/]+)/i), Wt = U.match(/<app_qrzlog_qsldate:[0-9]+>([0-9]+)/i);
        let at = 0, q = 0;
        if (G && $ && (at = parseFloat(G[2]) + parseFloat(G[3]) / 60, q = parseFloat($[2]) + parseFloat($[3]) / 60, G[1] == "S" && (at = -at), $[1] == "W" && (q = -q)), at == 0 && q == 0 && ct) {
          let tt = b(ct);
          at = tt.lat, q = tt.lon;
        }
        if (at !== 0 || q !== 0) {
          const tt = xt ? xt[1] : "Unknown", qt = Wt, ft = qt ? d : g, Te = pt.marker([at, q], { icon: ft, isConfirmed: qt }).bindPopup(`<b>${tt}</b><br>Lat: ${at.toFixed(4)}<br>Lon: ${q.toFixed(4)}<br>Confirmed: ${qt ? "Yes" : "No"}`), et = `${at.toFixed(4)},${q.toFixed(4)}`;
          I.has(et) || I.set(et, []), I.get(et).push(Te);
        }
      }), I.forEach((U, G) => {
        if (U.length === 1)
          U[0].addTo(h);
        else {
          const $ = U.some((xt) => xt.options.isConfirmed) ? m : g, ct = pt.markerClusterGroup({ iconCreateFunction: () => $ });
          for (const xt of U)
            ct.addLayer(xt);
          ct.addTo(h);
        }
      });
    }
  }
}
customElements.define("qso-map", or);
