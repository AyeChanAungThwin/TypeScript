/*
https://en.wikipedia.org/wiki/Lambda_calculus
0 := λf.λx.x
1 := λf.λx.f x
2 := λf.λx.f (f x)
3 := λf.λx.f (f (f x))

0 := λfx.x
1 := λfx.f x
2 := λfx.f (f x)
3 := λfx.f (f (f x))

SUCC := λn.λf.λx.f (n f x)
SUCC := λnfx.f (n f x)
*/
var ZERO = function (f) { return function (x) { return x; }; };
var ONE = function (f) { return function (x) { return f(x); }; };
var TWO = function (f) { return function (x) { return f(f(x)); }; };
var THREE = function (f) { return function (x) { return f(f(f(x))); }; };
var TO_INTEGER = function (n) { return n(function (x) { return x + 1; })(0); };
var f = function (x) {
    console.log("Jump");
    x + 1;
};
//console.log(TO_INTEGER(ZERO));
//ONE(f)(0);
//console.log(TO_INTEGER(ONE));
//TWO(f)(0);
//console.log(TO_INTEGER(TWO));
THREE(f)(0);
console.log(TO_INTEGER(THREE));
var SUCC = function (n) { return function (f) { return function (x) { return f(n(f)(x)); }; }; };
var FOUR = SUCC(THREE);
FOUR(f)(0);
console.log(TO_INTEGER(FOUR));
