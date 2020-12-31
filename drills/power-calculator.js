// Write a function called powerCalculator() that takes two parameters, 
//an integer as a base, and another integer as an exponent. 
//The function returns the value of the base raised to the power of the
// exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

const powerCalculator = (base, exponent) => {
    //Invalid case
    if(exp < 0) {
        return `exponent should be >= 0`
    }
    //If exponent is equal to 0
    if(exp === 0) {
        return 1
    }

    //Base Case
    if(exp === 1) {
        return base
    }

    //General Case
    return base * powerCalculator(base, --exponent)
}

powerCalculator(10, 2);
powerCalculator(10, -2);