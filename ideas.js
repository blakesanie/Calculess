
/*

absMax(func, min, max) {
    var range = max - min;
    var derivPos = false;
    var rangesWithMax = [];
    for (var i = 0; i < 100; i += range / 100) {
        if (func(min + i + 1) > func(min + i)) {
            derivPos = true;
        } else {
            if (derivPos) {
                rangesWithMax.push([min + i, min + i + 1]);
                derivPos = false;
            }
        }
    }
    if (rangesWithMax.length == 0) {
        var minY = func(min);
        var maxY = func(max);
        if (Math.max(minY, maxY) == minY) {
            return [min, minY];
        }
        return [max, maxY];
    } else {
        var maxPoints = [
            [min, func(min)],
            [max, func(max)]
        ];
        for (var i = 0; i < rangesWithMax.length; i++) {
            var range = rangesWithMax[i];
            var relMax = this.relMax(func, range[0], range[1]);
            maxPoints.push(relMax);
        }
        var recordY = -1 * Infinity;
        var recordX;
        for (var i = 0; i < maxPoints.length; i++) {
            var y = maxPoints[i][1];
            if (y > recordY) {
                recordY = y;
                recordX = maxPoints[i][0];
            }
        }
        return [recordX, recordY];
    }
}

absMin(func, min, max) {
    var range = max - min;
    var derivNeg = false;
    var rangesWithMin = [];
    for (var i = 0; i < 100; i += range / 100) {
        if (func(min + i + 1) < func(min + i)) {
            derivNeg = true;
        } else {
            if (derivNeg) {
                rangesWithMin.push([min + i, min + i + 1]);
                derivNeg = false;
            }
        }
    }
    console.log(rangesWithMin);
    if (rangesWithMin.length == 0) {
        var minY = func(min);
        var maxY = func(max);
        if (Math.min(minY, maxY) == minY) {
            return [min, minY];
        }
        return [max, maxY];
    } else {
        var minPoints = [
            [min, func(min)],
            [max, func(max)]
        ];
        for (var i = 0; i < rangesWithMin.length; i++) {
            var range = rangesWithMin[i];
            var relMin = this.relMin(func, range[0], range[1]);
            minPoints.push(relMin);
        }
        var recordY = Infinity;
        var recordX;
        for (var i = 0; i < minPoints.length; i++) {
            var y = minPoints[i][1];
            if (y < recordY) {
                recordY = y;
                recordX = minPoints[i][0];
            }
        }
        return [recordX, recordY];
    }
}

relMax(func, start, end) {
    var lower = start;
    var upper = end;
    var range = end - start;
    var lastMax;
    var i = 0;
    var hasRelMax = false;
    var wasPos = false;
    for (var i = 0; i < 100; i++) {
        if (func(i + 1) > func(i)) {
            wasPos = true;
        } else {
            if (wasPos) {
                hasRelMax = true;
            }
        }
    }
    while (hasRelMax) {
        var q1X = lower + 0.25 * range,
            q2X = lower + 0.5 * range,
            q3X = lower + 0.75 * range;
        var xs = [lower, q1X, q2X, q3X, upper];
        var ys = [func(lower), func(q1X), func(q2X), func(q3X), func(upper)];
        var max = Math.max(Math.max(ys[1], ys[2]), ys[3]);
        var index = ys.indexOf(max);
        if (i > 200) {
            return [xs[index], max];
        }
        lower = xs[index - 1];
        upper = xs[index + 1];
        range = upper - lower;
        lastMax = max;
        i++;
    }
    return NaN;
}

relMin(func, start, end) {
    var lower = start;
    var upper = end;
    var range = end - start;
    var lastMin;
    var i = 0;
    var hasRelMin = false;
    var wasNeg = false;
    for (var i = 0; i < 100; i += 100 / range) {
        if (func(lower + i) < func(lower + i * range)) {
            wasNeg = true;
        } else {
            if (wasNeg) {
                hasRelMin = true;
            }
        }
    }
    console.log(hasRelMin);
    while (hasRelMin) {
        var q1X = lower + 0.25 * range,
            q2X = lower + 0.5 * range,
            q3X = lower + 0.75 * range;
        var xs = [lower, q1X, q2X, q3X, upper];
        var ys = [func(lower), func(q1X), func(q2X), func(q3X), func(upper)];
        var min = Math.min(Math.min(ys[1], ys[2]), ys[3]);
        var index = ys.indexOf(min);
        if (i > 200) {
            console.log(lastMin, min);
            return [xs[index], min];
        }
        lower = xs[index - 1];
        upper = xs[index + 1];
        range = upper - lower;
        lastMin = min;
        i++;
    }
    return NaN;
}

*/

/*

var at = func(x);
if (Math.abs(x) == Infinity) {
    if (x > 0) {
        var pos1 = Number.MAX_VALUE - 1000;
        var pos2 = Number.MAX_VALUE;
        var dif = pos2 - pos1;
        console.log(pos1, pos2, dif, -1 * Infinity);
        if (dif > 0) {
            return Infinity;
        } else {
            return -1 * Infinity;
        }
    } else {
        var pos1 = Number.MIN_VALUE;
        var pos2 = Number.MIN_VALUE + 1;
        var dif = pos2 - pos1;
        if (dif < 0) {
            return Infinity;
        } else {
            return -1 * Infinity;
        }
    }
}
//console.log([x, at]);
if (at === at && Math.abs(at) != Infinity) {
    return at;
}

*/
