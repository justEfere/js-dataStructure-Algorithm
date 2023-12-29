function arrayIntersection(arr1, arr2) {
    let intesect = [];

    if (arr1.length >= arr2.length) {
        for (let i = 0; i <= arr1.length - 1; i++) {
            for (let j = 0; j <= arr2.length - 1; j++) {
                if (arr2[j] === arr1[i]) {
                    intesect.push(arr1[i])
                }
            }
        }
    } else {
        for (let i = 0; i <= arr2.length - 1; i++) {
            for (let j = 0; j <= arr1.length - 1; j++) {
                if (arr2[j] === arr1[i]) {
                    intesect.push(arr1[i])
                }
            }
        }
    }

    // if (intesect.length <= 0) {
    //     return [];
    // } else {
    //     return intesect;
    // }

    return intesect;

    // console.log(intesect);
}

arrayIntersection([1, 1, 1, 1, 1], [2, 2, 2, 2, 2]); // should return []



module.exports = arrayIntersection;
