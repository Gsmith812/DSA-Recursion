// Write a recursive function that splits a string based on a separator 
// (similar to String.prototype.split). Don't use JS array's split function 
// to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]

const stringSplitter = (string, delimiter, arr) => {
    let str = string.trim()
    let words = arr || []
    let index = str.indexOf(delimiter)

    //Base Case
    if(index < 0) {
        words.push(str)
        return words
    }

    //General Case
    words.push(str.substr(0, index))
    return stringSplitter(str.slice(index + 1), delimiter, words)
}