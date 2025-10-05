
/*let numList = [3,6,9,12];
  for(let i = 0; i < numList.length; i++){
    if(numList[i] == 9){
         console.log(i);
 }
  }*/

function  sum(numList,target){

    for(let i = 0; i < numList.length-1; i++){
         for(let j = 0; j < numList.length; j++){
              if(numList[i] + numList[j] == target){
                     return [i,j];
}
  }
    }
      }
let numList = [3,6,9,12];
let target = 9;
    console.log(sum(numList,target));
