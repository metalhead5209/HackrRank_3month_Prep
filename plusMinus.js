console.log('// ************** PLUS MINUS ***************** //')

/* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to 10 to the negative 4th are acceptable. 
*/

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


