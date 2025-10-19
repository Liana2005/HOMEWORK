function Single_number(arr){
let result = 0;
for(let i = 0 ; i< arr.length ;i++){
  result ^= arr[i];
 }
return result;

 }
let arr = [2,1,1,2,3];
console.log(Single_number(arr));
