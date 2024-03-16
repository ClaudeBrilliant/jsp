/*piece of code that can be reused
function logger(){
    console.log("My name is Clyde");
}
//calling /running / invoking
logger();

function fruitProcessor(apples,oranges) {
    console.log(apples,oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

//FUNCTIONS DECLARATIONS AND EXPRESSIONS

//function declaration /They can be called before they are defined in the quote
function calcAge1(birthYear){
    return 2030 - birthYear;
}
const age1 = calcAge1(2002);
console.log(age1)

//func expression
const calcAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1,age2)


//Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age ;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1980, "clyde"))


//Functions calling other functions
const cutPieces = function (fruit) {
    return fruit * 4;
}
const fruitProcessor = function(apples, oranges){
    const applePieces = cutPieces(apples);
    const orangepieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangepieces} pieces of orange.`;
    return juice;
};
console.log(fruitProcessor(2 ,3));
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphin, avgKoalas) {
    if (avgDolphin > avgKoalas) {
        return `Dolphin wins with ${scoreDolphins}`;
    } else if (avgKoalas > avgDolphin) {
        return `koalas win with ${scoreKoalas}`;
    } else {
        return "It's a draw";
    }
};

console.log(checkWinner(scoreDolphins, scoreKoalas));
