

function findDuplicate(arr){
    for(let i = 0;i <arr.length; i++){
        for(let j = i+1;j <arr.length; j++){
      //      console.log(arr[i],arr[j])
            if(arr[i]===arr[j]){
                return arr[i]
            }
        }  
    }
    return 0;
    
}


const arr =[5, 12, 8, 20, 10,8];
const result = findDuplicate(arr)
console.log("result", result)