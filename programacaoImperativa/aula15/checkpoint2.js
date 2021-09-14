// Aula 15 - Segundo Checkpoint - 14.09.2021

let x=5;
let y = x++ + ++x;
console.log("y= "+y); // 12
x=3;
y=x*(x + 1)*x++;
x=5;
y=3;
y*= x+1
console.log("x= "+x); // 5
console.log("y= "+y); // 18
// =======================
function soma(a=1, b=3){
    return a+b;
}
console.log(soma()); // 4
console.log(soma(3)); // 6
console.log(soma(1,2)); // 3
// =======================
var z=0;
for (var i=20; i<50; i+=10){
    z+=i;
}
console.log(z); // 90
// =======================
for (var i=0; i<50; i+=10){
    console.log(i);
}
console.log(i);

let d = 2;
if(d > 4){
    console.log("Hello");
}