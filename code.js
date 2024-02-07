
/**
 * @param {number[]} a
 * @param {number} start
 * @param {number} end 
 * @returns {number}
 */
function divideAndConquerSum (a, start = 0, end = null) {
    if (end === null) 
        end = a.length;

    const len = (end - start);

    if (len <= 1) 
        return (len == 1) ? a[start] : 0;
    

    const size = Math.max(Math.floor(len / 3), 1);
    const split1 = start + size;
    const split2 = split1 + size;

    return divideAndConquerSum(a, start, split1)
        + divideAndConquerSum(a, split1, split2)
        + divideAndConquerSum(a, split2, end);
}
