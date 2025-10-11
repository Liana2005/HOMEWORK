function indexOf(arr,target){
    

    for(let i = 0; i< arr.length;i++){
    if(target == arr[i]){
        return i;
    }
}
    
    return -1;
}

element = [1,3,6];
target = 4;
console.log(indexOf(element,target));
