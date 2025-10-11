function filtr(arr,fn){
    const arr2 = [];
    

    for(let i = 0; i< arr.length;i++){
    if(fn(arr[i],i,arr))

        arr2.push( arr[i]);
    }
    return arr2;
}


function fn(element,indx,arr)
{  return element % 3 == 0;

    
}

element = [10,20,30];
console.log(filtr(element,fn));
