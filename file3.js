function Roman_To_Integer(s){
   const map = {
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
   }
   const size = s.length;
   let result = 0;

   for(let i = 0; i<size;i++){
       if(map[s[i]] < map[s[i + 1]]){

          result += map[s[i+1]] - map[s[i++]] ;
          countinue;
       }
         result += map[s[i]];
   }
   
   return result;

};
