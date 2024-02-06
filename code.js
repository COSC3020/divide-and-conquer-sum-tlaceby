/**
 * Recursive implimentation of sum where there are 3 split arrays instead of 2.
 * @param {number[]} a 
 * @returns {number}
 */
function divideAndConquerSum(a) {
    if (a.length === 0) return 0;
    if (a.length === 1) return a[0];
    if (a.length === 2) return a[0] + a[1];
    
    const splitsIndex = Math.floor(a.length / 3);
    const left = a.slice(0, splitsIndex);
    const middle = a.slice(splitsIndex, splitsIndex * 2);
    const right = a.slice(splitsIndex * 2, a.length);

    return divideAndConquerSum(left) 
         + divideAndConquerSum(middle) 
         + divideAndConquerSum(right);
}
