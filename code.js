
/**
 * @param {number[]} a
 * @param {number} start
 * @param {number} end 
 * @returns {number}
 */
function divideAndConquerSum (a, start = 0, end = undefined) {
    end ??= a.length;
    const len = (end - start);

    if (len <= 1) 
        return (len == 1) ? a[start] : 0;
    
    const size = Math.max(Math.floor(len / 3), 1);
    const m1 = start + size;
    const m2 = m1 + size;

    return divideAndConquerSum(a, start, m1)
        + divideAndConquerSum(a, m1, m2)
        + divideAndConquerSum(a, m2, end);
}
