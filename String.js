
const arr = [2,4,6,8,3];

console.log(arr.map(n => n%2 ===0? true:false));

let string = "ATGCH"
let array = string.split('').map (n => {
    if (n ==="T"){
     return    n.replace(n,"A");
    }
   if (n ==="G"){
     return    n.replace(n,"C");
    }
    if (n ==="C"){
     return    n.replace(n,"G");
    }
    if (n ==="A"){
     return    n.replace(n,"T");
    }
    
}).join('');

console.log(array);


let same = [1,1,1,6,1]

let first = same[0];
  for (let i=0; i<same.length; i++){
         if (first - same[i] == 0 ){
            console.log(true);
         }
         else {
            console.log(false);
         }
         
            
            
            
         
  };


