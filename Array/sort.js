function BubbleSort(arr) {
    let { start, end, diff } = 0;
    start = new Date().getMilliseconds()
    const n = arr.length;
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - i; j++){
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    end = new Date().getMilliseconds();
    console.log(end-start)
    return arr;
}

// Example Usage
const BubbleSortArray = BubbleSort([64, 34, 25, 12, 22, 11, 90]);
console.log("Selection Sort:", BubbleSortArray);

function selectionSort(arr) {
    let { start, end, diff } = 0;
    start = new Date().getMilliseconds()
    const n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let miniIndex = i;
        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[miniIndex]) {
                miniIndex = j;
            }
        }
        [arr[i],arr[miniIndex]] = [arr[miniIndex],arr[i]]
    }
    return arr;
}

// Example Usage
const selectionSortedArray = selectionSort([64, 34, 25, 12, 22, 11, 90]);
console.log("Selection Sort:", selectionSortedArray);

function insertionSort(arr) {
    let { start, end, diff } = 0;
    start = new Date().getMilliseconds()
    const n = arr.length;
    for (let i = 1; i < n; i++){
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 & arr[j] > key) {
            arr[j + 1] = arr[j];
            j--
        }
        arr[j + 1] = key;
    }
    end = new Date().getMilliseconds()
    console.log(end-start)
    return arr;
}

// Example Usage
const insertionSortedArray = insertionSort([64, 34, 25, 12, 22, 11, 90]);
console.log("Selection Sort:", insertionSortedArray);

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    // console.log( left, right)
    return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;

        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }

    }

    return result.concat(left.slice(leftIndex)).concat((right.slice(rightIndex)));
    
}

// Example Usage
const mergeSortedArray = mergeSort([64, 34, 25, 12, 22, 11, 90]);
console.log("Merge Sort:", mergeSortedArray);


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const n = arr.length;
    const pivot = arr[arguments.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < n - 1; i++){
        if (arr[i] < pivot) {
            left.push(arr[i])

        } else {
            right.push(arr[i])
        }
    }
    // end = new Date().getMilliseconds()
    // console.log(end-start)
    return [...quickSort(left),pivot,...quickSort(right)];
}

// Example Usage
const quickSortedArray = quickSort([64, 34, 25, 12, 22, 11, 90]);
console.log("Selection Sort:", quickSortedArray);