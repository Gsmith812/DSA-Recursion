// Write a recursive function that prints the Fibonacci sequence of a given 
// number. The Fibonacci sequence is a series of numbers in which each number 
// is the sum of the 2 preceding numbers. For example, the 7th Fibonacci
//  number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 
//  2, 3, 5, 8, 13.

const fibonacci = (num, prevVal) => {
    prevVal = prevVal || {}
    //Base Case
    if(prevVal[num]){
        return prevVal[num]
    }

    if(num <= 0){
        return 0
    }
    if(num === 1) {
        return 1
    }

    //General Case

    return prevVal[num] = fibonacci(num - 1, prevVal) + fibonacci(num - 2, prevVal)
}