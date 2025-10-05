function to_upper_case(str) {
let str2 = "";
   for(let i = 0; i < str.length;i++){
       if(str[i] >= 'a' && str[i] <= 'z'){
             str2 += String.fromCharCode(str.charCodeAt(i) - 32);
}
  }
return str2;
}
let str = 'hello';
console.log(to_upper_case(str));

