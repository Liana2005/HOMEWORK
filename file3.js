/*function add(a,b) {

return a + b;
}

console.log( add(3,8));*/


function sum(a,b,c){
    return Math.abs(( a + b ) - c ) < Number.EPSILON;
}

console.log(sum(0.1,.2, .3));
