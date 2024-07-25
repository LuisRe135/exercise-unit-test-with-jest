// Import the function from app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One Dollar should be 146.26 Yens", ()=>{
    const yens = fromDollarToYen(7);
    const expected = 7 * 146.26;
    expect(yens).toBe(expected)
})

//Quise hacer este ultimo mas simple
test("I promise my calculator says 1 yen equals 0.0055591054 so....", ()=>{
    expect(fromYenToPound(1000)).toBe(5.5591054);
    expect(fromYenToPound(2000)).toBe(11.1182108);
})