function fibs(n) {

    let fib = [0, 1];
    for (let i = 2; i < n; i++){
       fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib;

};
fibs(8);

function fibsRec(n) {
    if (n <= 2) {
        return [0, 1].slice(0, n + 1);
    } else {
        let fib = fibsRec(n - 1);
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        return fib;
    }
};
fibsRec(8);

function mergeSort(array) {
    const half = array.length / 2

    if (array.length < 2) {
        return array
    }

    // Split the array into two halves
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle)
    const rightHalf = array.slice(middle);

    // Recursively sort each half
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
    result.push(left[leftIndex]);
    leftIndex++
    } else {
    result.push(right[rightIndex])
    rightIndex++
    }
    }
    result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    return result;
}


const unsortedArray = [3, 2, 1, 13, 8, 5, 0, 1];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);