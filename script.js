'use strict'
console.log('// ************** PLUS MINUS ***************** //')

const ar = [9,3,7,-5,4,0,-6,4,0,0,-9,-6];

const plusMinus = (arr) => {
    let n = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] < 0) {
            negative++
        } else if (arr[i] > 0) {
            positive++
        } else {
            zero++
        }
    } 

    let pos = positive/n;
    let neg = negative/n;
    let zer = zero/n;

    console.log(pos.toFixed(6))
    console.log(neg.toFixed(6))
    console.log(zer.toFixed(6))
}

plusMinus(ar)

console.log('// ******************************************* //')
console.log('// ************* Mini-Max Sum **************** //')

const arr = [1,3,5,7,9];

const miniMaxSum = (ar) => {
    ar.sort();
    let min = 0;
    let max = 0;
    const minHash = [];
    const maxHash = [];
    for (let i = 0; i < ar.length - 1; i++) {
       minHash.push(ar[i]);
    }
    for (let j = 1; j < arr.length; j++) {
        maxHash.push(ar[j]);
    }
    for (let el of minHash) {
        min += el;
    };
    for (let el of maxHash) {
        max += el;
    };


    console.log(min, max)
}

miniMaxSum(arr)

console.log('// ******************************************* //')
