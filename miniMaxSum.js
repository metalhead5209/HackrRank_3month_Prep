console.log('// ************* Mini-Max Sum **************** //')



/* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. 
*/


const arr = [1,3,5,7,9]

const miniMaxSum = (ar) => {
    ar.sort();
    let min = 0;
    let max = 0;
    let minAr = [];
    let maxAr = [];
    for (let i = 0; i < ar.length - 1; i++) {
        minAr.push(arr[i])
    }
    for (let j = 1; j < ar.length; j++) {
        maxAr.push(arr[j]);
    }
    for (el of minAr) {
        min+=el;
    }
    for (el of maxAr) {
        max+=el;
    }


    console.log(min, max)
}

miniMaxSum(arr)


console.log('// ******************************************* //')