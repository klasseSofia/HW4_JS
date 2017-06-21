/**
 * Created by Super on 20.06.2017.
 */
function task1() {
    var a = +prompt("Enter a:");
    var b = +prompt("Enter b:");
    alert(a + b);
    alert(a - b);
    alert(a * b);
    alert(a % b);
}
console.log(task1());
function sum( a, b ) {
    return a+b;
}
function difference ( a, b ) {
    return a-b;
}
function composition ( a, b ) {
    return a*b;
}
function modulo ( a, b ) {
    return a%b;
}
console.log('Sum:', sum(4,4));
console.log('Difference: ', difference(8,2));
console.log('Composition: ', composition(5,6));
console.log('Modulo: ', modulo(8,3));

function quadratic(a,b,c) {
    var D = 0;
    var x1 = 0, x2 = 0;
    D = b*b - (4*a*c);
    x1 = (-b + Math.sqrt(D))/(2*a);
    x2 = (-b - Math.sqrt(D))/(2*a);
    console.log('Equal',a,'*x^2','+',b,'*x','+',c,'has two root ',' x1 =', x1,' x2 =', x2);
}
 console.log(quadratic(1,3,2));
