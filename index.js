// var arr1 = [1,2, 3 ];
// var arr2 = [4, 5, 6];
// var arr3 = [];

// for(var i = 0; i< arr1.length; i++) {
//     arr3[i]= arr1[i]+ arr2[i]
// }console.log(arr3);

//   1)
// function ali(){
  
// }
// console.log(ali.name)


function countryName(arr){
    var newArr = []
 for(let i=0; i<arr.length; i++){
   var name = arr[i].length;
   newArr.push(name)
 }
  console.log(Math.max(...newArr));
 
 }

console.log(countryName(['United States of America', 'Germany', 'Australia']));

function countryName(arr){
  return Math.max(...arr.map( a => a.length))
  }
  
  console.log(countryName(['United' ,'States of America', 'Germany', 'Australia']));
  