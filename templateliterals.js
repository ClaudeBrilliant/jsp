const firstName = 'Jonas';
const job = 'Teacher';
const birthYear = 2000;
const year = 2030;

const Jonas = "Im " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(Jonas)

// wwe use back strings in template literals,it assembles multiple pieces to one piece.
//backticks(``)
const jonasNew = `I'm ${firstName}`
console.log(jonasNew)

//Template literals is use to create milti-line strings

console.log(`String with \n\
multiple\n\
lines`)

const age = 20;
const isOldEnough = age >= 18;
if (isOldEnough){
    console.log(`Clyde can start driving`)
}

const fav = prompt('What\'s your favorite color?');

if (fav === null) {
  console.log('User canceled the prompt.');
} else {
  console.log('Favorite color:', fav);
}