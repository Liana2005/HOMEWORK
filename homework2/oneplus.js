function plusOne(array){

for(let i = array.length - 1;i >= 0;i--){
      if(array[i] < 9){
          array[i]++;
     return array;
   }
    array[i] = 0;
}
 array.unshift(1);
  return array;
 }


let array = [8,9];

console.log(plusOne(array));
