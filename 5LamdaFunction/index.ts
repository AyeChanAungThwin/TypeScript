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

let ZERO = f => x => x;
let ONE = f => x => f(x);
let TWO = f => x => f(f(x));
let THREE = f => x => f(f(f(x)));
let TO_INTEGER = n => n (x=>x+1)(0);
let f = x => {
    console.log("Jump");
    x+1;
}
//console.log(TO_INTEGER(ZERO));
//ONE(f)(0);
//console.log(TO_INTEGER(ONE));
//TWO(f)(0);
//console.log(TO_INTEGER(TWO));
THREE(f)(0);
console.log(TO_INTEGER(THREE));

let SUCC = n => f => x => f(n(f)(x));
let FOUR = SUCC(THREE);
FOUR(f)(0);
console.log(TO_INTEGER(FOUR));