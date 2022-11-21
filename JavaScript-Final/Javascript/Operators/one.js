let a = 10;
let b = 20
let c = "30"
let d = "Rahul"
let e = false
let f = true
let g;
console.log(a + b); //30
console.log(a + c); //'1030'
console.log(a + d); //'10Rahul'
console.log(a + e);//10
console.log(a + f);//11
console.log(a + g);//NAN

console.log(d + g); //'RahulUndefined'
console.log(d + e); //'Rahulfalse'
console.log(d + f); //'Rahultrue'
