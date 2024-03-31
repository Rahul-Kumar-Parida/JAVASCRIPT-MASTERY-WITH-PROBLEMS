//Sort an array
//input: [3,1,6,4,8,5],   output: [1,3,4,5,6,8]

function sortArray(arr) {
  //   return arr.sort();
//   let res= arr.sort((a, b) => a - b); //ascending
  let res= arr.sort((a, b) => b - a); //descending
  return res;
}
console.log(sortArray([3, 15, 6, 54, 8, 5]));



//part-2
const SortArray = (arr) =>{
    //copy Array to other Arrya 
    const sorted = [];
    for(let temp of arr){
        sorted.push(temp);
    }
    for(let i = 0 ; i < sorted.length ; i++){
        for(let j = i+1  ; j < sorted.length ; j++){
            if(sorted[i] > sorted[j]){
                let a = sorted[i];
                sorted[i] = sorted[j];
                sorted[j] = a;
            }
        }
    }
    return sorted;
} 

const arr = [6, 7, 8, 5, 2, 9, 3];

console.log(`Orginal Array : ${arr}`);
console.log(`Sorted Array is : ${SortArray(arr)}`);