! function() {
	function F(c, e, d) {
		return c.getAttribute(e) || d
	}

	function k(c) {
		return document.getElementsByTagName(c)
	}

	function y() {
		var e = k("script"),
			c = e.length,
			d = e[c - 1];
		return {
			l: c,
			z: F(d, "zIndex", -1),
			o: F(d, "opacity", 0.5),
			c: F(d, "color", "0,0,0"),
			n: F(d, "count", 150)
		}
	}

	function g() {
		q.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, q.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
	}

	function f() {
		w.clearRect(0, 0, q.width, q.height);
		var c = [h].concat(s);
		s.forEach(function(r) {
			r.x += r.xa, r.y += r.ya, r.xa *= r.x > q.width || r.x < 0 ? -1 : 1, r.ya *= r.y > q.height || r.y < 0 ? -1 : 1, w.fillRect(r.x - 0.5, r.y - 0.5, 1, 1);
			for (var i = 0; i < c.length; i++) {
				var e = c[i];
				if (r !== e && null !== e.x && null !== e.y) {
					var d, l = r.x - e.x,
						n = r.y - e.y,
						m = l * l + n * n;
					m < e.max && (e === h && m >= e.max / 2 && (r.x -= 0.03 * l, r.y -= 0.03 * n), d = (e.max - m) / e.max, w.beginPath(), w.lineWidth = d / 2, w.strokeStyle = "rgba(" + b.c + "," + (d + 0.2) + ")", w.moveTo(r.x, r.y), w.lineTo(e.x, e.y), w.stroke())
				}
			}
			c.splice(c.indexOf(r), 1)
		}), o(f)
	}
	var q = document.createElement("canvas"),
		b = y(),
		j = "c_n" + b.l,
		w = q.getContext("2d");
	q.id = j;
	q.style.cssText = "position:fixed;top:0;left:0;z-index:" + b.z + ";opacity:" + b.o;
	k("body")[0].appendChild(q);
	g(), window.onresize = g;
	var o = function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(c) {
			window.setTimeout(c, 1000 / 60)
		}
	}(),
		h = {
			x: null,
			y: null,
			max: 20000
		};
	window.onmousemove = function(c) {
		c = c || window.event, h.x = c.clientX, h.y = c.clientY
	}, window.onmouseout = function(c) {
		h.x = null, h.y = null
	};
	for (var s = [], G = 0; b.n > G; G++) {
		var p = Math.random() * q.width,
			E = Math.random() * q.height,
			a = 2 * Math.random() - 1,
			v = 2 * Math.random() - 1;
		s.push({
			x: p,
			y: E,
			xa: a,
			ya: v,
			max: 6000
		})
	}
	setTimeout(function() {
		f()
	}, 100)
}();
