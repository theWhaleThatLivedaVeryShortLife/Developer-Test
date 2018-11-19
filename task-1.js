/* * Task 1:
   *  Make this work (repeat 3 times the contents of an array):
   *  repeat([1,2,3]) //[1,2,3,1,2,3,1,2,3]
   * */

function repeat(arr, times) {
    let res = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < times; i++) {
            res = res.concat(arr);
        }
        console.log(res);
    } else {
        console.log('Please enter an array to the function otherwise this will not work!')
    }
}

// repeat([1, 2, 3], 3);