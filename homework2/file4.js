function every(arr,fn){
    const arr2 = [];
    

    for(let i = 0; i< arr.length;i++){
    if(!fn(arr[i],i,arr))
return false;
    
    }
    return true;
}


function fn(element,indx,arr)
{  return element % 2 == 0;

    
}

element = [4,6];
console.log(every(element,fn));
