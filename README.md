# Calculess.js
A calculus library for javascript and NPM. Created by [Blake Sanie](http://www.blakesanie.com).
# Install
    $ npm install calculess
# Getting Started
Import package and create Calc object for future use
```javascript
var Calculess = require('calculess');
var Calc = Calculess.prototype;
```
# Documentation
## Limits
Evaluate a limit
```javascript
Calc.limAt( x , function );
```
Evaluate a limit from the left
```javascript
Calc.limLeftOf( x , function );
```
Evaluate a limit from the right
```javascript
Calc.limRightOf( x , function );
```
### Methods:
* Accept **±Infinity** as x value (parameter)
* Can output **±Infinity**
* Output **NaN** when the *limit does not exist*

### Examples:
```javascript
function recip(x) {
    return 1 / x;
}

Calc.limLeftOf(0, recip); // -Infinity
Calc.limRightOf(0, recip); // Infinity
Calc.limAt(0, recip); // NaN
Calc.limAt(1, recip); // 1
```
***
## Derivatives
Evaluate f'(x)
* Note: If the given function is not continuous or differentiable at the target, **NaN** is returned

```javascript
Calc.deriv( x , function );
```

Evaluate a derivative to the nth degree of x
* Note: as the degree increases, .nthDeriv() becomes **less accurate**. Also, continuity and differentiability are **not checked**.

```javascript
Calc.nthDeriv( degree, x , function );
```
<img src="https://www.wikihow.com/images/c/cc/Tangent_animation.gif" width="200px"></img>
### Examples:
```javascript
function para(x) {
    return x * x;
}

Calc.deriv(3, para); // 6
Calc.nthDeriv(2, 3, para); // 2
Calc.nthDeriv(3, 3, para); // 0

function sharp(x) {
    return Math.abs(x);
}

Calc.deriv(1, sharp); // 1
Calc.nthDeriv(2, 1, para); // 0
Calc.deriv(0, sharp); // NaN
```
***
## Integrals
Evaluate an integral using trapezoidal [Riemann Sums](https://en.wikipedia.org/wiki/Riemann_sum)
```javascript
Calc.integral( start , end , function , numSubintervals );
```
Evaluate a function's average value
```javascript
Calc.averageValue( start , end , function , numSubintervals );
```
<img src="https://upload.wikimedia.org/wikipedia/commons/6/61/Riemann_sum_%28rightbox%29.gif" width="200px"></img>

Note: As the number of subintervals increases, .intregral() becomes more accurate, though more time is required for calculations
#### Examples
```javascript
function sin(x) {
    return Math.sin(x);
}

Calc.integral(0, Math.PI, sin, 5); // 1.9337655980928052
Calc.integral(0, Math.PI, sin, 10); // 1.9835235375094546
Calc.integral(0, Math.PI, sin, 100); // 1.999835503887445
Calc.integral(0, Math.PI, sin, 1000); // 1.9999983550656886
Calc.integral(0, Math.PI, sin, 10000); // 1.999999983550358
```
***
