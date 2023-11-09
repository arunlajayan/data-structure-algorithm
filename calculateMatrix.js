


function calculateMatrix(arr){
    let sum = 0;
    for(let row of arr){
        for(let column of row){
            sum += column
        }
    }
    return sum;
}


const arr =[
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
];
const result = calculateMatrix(arr)
console.log("result", result)