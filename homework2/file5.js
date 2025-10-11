function map(arr,fn){
    const arr2 = [];
    

    for(let i = 0; i< arr.length;i++){
    

        arr2.push( fn(arr[i],i,arr));
    }
    return arr2;
}


function fn(element,indx,arr)
{
    
    return element *2; 

}

element = [10,20,30];
console.log(map(element,fn));
