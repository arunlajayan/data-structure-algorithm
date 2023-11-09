
function secondLargest(arr) {
    
    let largestNumber = arr[0];
    let secondLargestNumber = arr[1];

    for (let i = 1; i < arr.length; i++) {
       
        if (arr[i] > largestNumber) {
            secondLargestNumber = largestNumber;
            largestNumber = arr[i];
            
        }else if(arr[i] > secondLargestNumber && arr[i] !== largestNumber){
            
            secondLargestNumber = arr[i]
        }
      
    }
    return secondLargestNumber;
}
const arr =[5, 12, 8, 20, 10];
const result = secondLargest(arr)
console.log("result", result)
