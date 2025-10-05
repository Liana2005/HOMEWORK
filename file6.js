/*function tocheck(str) {

      return str.includes("Java");
}
 console.log(tocheck("Learning JavaScript"));*/



function find(text,part){
    for(let i = 0;i<text.length; i++){
        let havasar = true;
        for(let j = 0;j < part.length; j++){
            if(text[i+j] !== part[j]){
                havasar = false;
                break;
            }
        }
        if(havasar){
        return true;
    }
    }
    return false;
}
console.log(find("Javascript","script"))

