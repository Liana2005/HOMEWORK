function forEach(arr,fn){

    for(let i = 0; i< arr.length;i++){
        fn(arr[i],i,arr);
    }
}


function fn(element,indx,arr){
       console.log(element);

}

element = [10,20,30];
console.log(forEach(element,fn));
