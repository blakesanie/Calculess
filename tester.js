var Calc = require('./lib');
var Calc = Calc.prototype;

console.log(Calc.limRightOf(0,exp));
console.log(Calc.limLeftOf(0,exp));
console.log(Calc.limAt(0,exp));
console.log(Calc.deriv(1,sin));
console.log(Calc.nthDeriv(2,1,sin));
console.log(Calc.integral(1,3,sin,1000));
console.log(Calc.averageValue(1,3,sin,1000));

function exp(x) {
    return 1 / x;
}

function hole(x) {
    return (x+1) * (x-1) / (x-1);
}

function five(x) {
    return 5;
}

function par(x) {
    return x * x;
}

function sin(x) {
    return Math.sin(x);
}

function v(x) {
    return 0.000000000000001 * Math.abs(x);
}
