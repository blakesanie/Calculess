module.exports = class Calc {

    limRightOf(x, func) {
        if (this.canPlugin(x, func)) {
            return func(x);
        }
        if (Math.abs(x) == Infinity) {
            return this.toInfinty(x, func);
        }
        var right1 = func(x + 0.000000000000001);
        var right2 = func(x + 0.00000000000001);
        var right3 = func(x + 0.0000000000001);
        var rightDif1 = right2 - right1;
        var rightDif2 = right3 - right2;
        if (rightDif1 < rightDif2 && rightDif2 < 0) {
            return Infinity;
        }
        if (rightDif1 > rightDif2 && rightDif2 > 0) {
            return -1 * Infinity;
        }
        return this.round(right1);
    }

    limLeftOf(x, func) {
        if (this.canPlugin(x, func)) {
            return func(x);
        }
        if (Math.abs(x) == Infinity) {
            return this.toInfinty(x, func);
        }
        var left1 = func(x - 0.000000000000001);
        var left2 = func(x - 0.00000000000001);
        var left3 = func(x - 0.0000000000001);
        var leftDif1 = left2 - left3;
        var leftDif2 = left1 - left2;
        if (leftDif2 > leftDif1 && leftDif2 > 0) {
            return Infinity;
        }
        if (leftDif2 < leftDif1 && leftDif2 < 0) {
            return -1 * Infinity;
        }
        return this.round(left1);
    }

    limAt(x, func) {
        if (this.canPlugin(x, func)) {
            return func(x);
        }
        if (Math.abs(x) == Infinity) {
            return this.toInfinty(x, func);
        }
        var left1 = func(x - 0.000000000000001);
        var right1 = func(x + 0.000000000000001);
        if (Math.abs(left1 - right1) < 0.00001) {
            return this.round((left1 + right1) / 2);
        }
        return NaN;
    }

    canPlugin(x, func) {
        var at = func(x);
        return at === at && Math.abs(at) != Infinity;
    }

    toInfinty(x, func) {
        if (x > 0) {
            var pos1 = Number.MAX_VALUE * 0.99999;
            var pos2 = Number.MAX_VALUE;
            var dif = pos2 - pos1;
            if (dif > 0) {
                return Infinity;
            } else {
                return -1 * Infinity;
            }
        } else {
            var pos1 = Number.MIN_VALUE;
            var pos2 = Number.MIN_VALUE * 0.99999;
            var dif = pos2 - pos1;
            if (dif < 0) {
                return Infinity;
            } else {
                return -1 * Infinity;
            }
        }
    }

    deriv(x1, func) {
        var at = func(x1);
        if (Math.abs(at) == Infinity || at !== at) {
            return NaN;
        }
        var y1 = func(x1);
        var x0 = x1 - 0.000000000000001;
        var y0 = func(x0);
        var x2 = x1 + 0.000000000000001;
        var y2 = func(x2);
        var slope1 = this.slope(x0, y0, x1, y1);
        var slope2 = this.slope(x1, y1, x2, y2);
        if (Math.abs(slope1 - slope2) > 0.1) {
            return NaN;
        }
        return (slope1 + slope2) / 2;
    }

    nthDeriv(n, x1, func) {
        var vals = [];
        var start = -1 * Math.round(n / 2);
        for (var i = start; i <= n + start + 1; i++) {
            var newX = x1 + i * 0.000000000000001;
            var newY = func(newX);
            vals.push(newY);
        }
        for (var i = 0; i < n; i++) {
            var diffs = [];
            for (var j = 1; j < vals.length; j++) {
                diffs.push(vals[j] - vals[j - 1]);
            }
            vals = diffs;
        }
        var out = (vals[0] + vals[1]) / 0.000000000000002;
        return out;
    }

    integral(min, max, func, num) {
        var sum = 0;
        var dx = (max - min) / num;
        var currentX = min + dx / 2;
        for (var i = 0; i < num; i++) {
            var currentY = func(currentX);

            sum += dx * currentY;
            currentX += dx;
        }
        return sum;
    }

    averageValue(min, max, func, num) {
        return this.integral(min, max, func, num) / (max - min);
    }

    distance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) - (y1 - y2) * (y1 - y2));
    }

    slope(x1, y1, x2, y2) {
        return (y1 - y2) / (x1 - x2);
    }

    round(num) {
        var factor = 100000000000000;
        return Math.round(num * factor) / factor;
    }

}
