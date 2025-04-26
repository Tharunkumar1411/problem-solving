const arr = [1,4,3,2, 9, 6,-1,0];
const n = arr.length;

for(let i=0; i<=n-1; i++){
    for(let j=0; j < n - i - 1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr)
// [
//   -1, 0, 1, 2,
//    3, 4, 6, 9
// ]