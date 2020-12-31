// Calculate the nth triangular number. A triangular number counts the objects
// that can form an equilateral triangle. The nth triangular number is the
// number of dots composing a triangle with n dots on a side, and is equal 
// to the sum of the n natural numbers from 1 to n.
// This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

const nthTriangularNum = (num) => {
    //Invalid Case
    if(num <= 0) {
        return `Number must be a positive integer`
    }

    //Base Case
    if(num <= 1) {
        return num
    }

    //General Case
    return num + nthTriangularNum(num - 1)
}