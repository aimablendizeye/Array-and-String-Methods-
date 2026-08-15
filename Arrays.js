
// const arr = [2,4,6,8,3];

// console.log(arr.map(n => n%2 ===0? true:false));




// let string = "ATGCH"
// let array = string.split('').map (n => {
//     if (n ==="T"){
//      return    n.replace(n,"A");
//     }
//    if (n ==="G"){
//      return    n.replace(n,"C");
//     }
//     if (n ==="C"){
//      return    n.replace(n,"G");
//     }
//     if (n ==="A"){
//      return    n.replace(n,"T");
//     }
    
// }).join('');

// console.log(array);


// for loop 



// function checking (arr){
//   let same = arr[0];
  
//   let bool = [];
  
//   for (i = 0; i<arr.length; i++){
//     let result = same - arr[i]
//     if ( result === 0){
//       bool.push(0)
      
//     }
//     else {
//       bool.push(result);
//     }
     
//   }

//    return bool;
// }
// console.log(checking([1,1,1,2,4]));



// Find the minimum 


function minimum (arr) {
  let first = arr[0]
  for (let i=0; i<arr.length; i++){
    if (arr[i] < first){
      first = arr[i];
    }
  }
  return first;
}

console.log(minimum([1,3,4,7,4,2]));



