function some(arr,fn){
    const arr2 = [];
    

    for(let i = 0; i< arr.length;i++){
    if(fn(arr[i],i,arr))
return true;
    
    }
    return false;
}


function fn(element,indx,arr)
{  return element % 2 == 0;

    
}

element = [1,3,4,6];
console.log(some(element,fn));
