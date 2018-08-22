var Calc = require('./calculus');
var Calc = new Calc();

console.log(Calc.integral(0, Math.PI, sin, 5));
console.log(Calc.integral(0, Math.PI, sin, 10));
console.log(Calc.integral(0, Math.PI, sin, 100));
console.log(Calc.integral(0, Math.PI, sin, 1000));
console.log(Calc.integral(0, Math.PI, sin, 10000));

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
