
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


// function minimum (arr) {
//   let first = arr[0]
//   for (let i=0; i<arr.length; i++){
//     if (arr[i] < first){
//       first = arr[i];
//     }
//   }
//   return first;
// }

// console.log(minimum([1,3,4,7,4,2]));




// Checking if the element are consecutive 



// function consecutive (arr) {
//   if (arr.length <= 1) return true;

//   return arr.every ((n, index) => n === arr[0] + index);
// }

// console.log(consecutive([1,2,3,4,5]));



// Counting the Even numbers inside an array using Loop 



// function even (nums) {
//   let count = 0;
//   for (let i=0; i<nums.length; i++){
//     if (nums[i] %2 ===0) {
//        count ++;
//     }
//   }
  
//     return count;
// }

// console.log(even([1,2,3,4,5,6]));



// returning New Array by multiplying 3 


// function multipleBy (numbers) {
//   let newArr = [];
//   for (let i=0; i<numbers.length; i++){
//      newArr.push(numbers[i] *3);
//   }
// return newArr;
 
// }

// console.log(multipleBy([1,2,3,4,5]));




// Trying convert string into an array 

// function inArr (n) {
//     let num = n.toString()
//     return num;
//   // const arr = [...num];
//   // return arr.map(Number);
// }
// console.log(inArr(1,2,3,4,5,6));



// Filter and map More than 1 parameter 


// 1. filter With 2 parameter 

// function track (n) {
//   return n.filter ((value , index) => 
//     index %2===0)
//      .map (value=> value *3);
  
//   ;
// }

// console.log(track([1,2,3,4,5,6]));


// 2. map with 2 parameter 

function Siblings (arr) {
      let result = arr.map ((name , number ) =>  {
          console.log(`${number +1} : ${name}`) ;
      }
      );
}

Siblings(["Yvette","Aimable" , "Benjamin" , "Reponse","Honette","Manzi"]);


















