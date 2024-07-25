// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

//convertir a yen: 1 dollar = 146.26 yens
const fromDollarToYen = (valueInDollar) => valueInDollar*146.26;

// 1000 yens = 5.5591054 GBP
const fromYenToPound = (valueInYens) => valueInYens * 0.0055591054;

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};