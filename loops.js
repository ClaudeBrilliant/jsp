//fundamental aspect of every programing language
//for loops keeps running when the condition is true

//for loops
/*
for (let rep = 1; rep <= 10; rep++){
    console.log(`Clyde is a genius ${rep}`);
}

//looping arrays ,breaking and continuing

const studentArray = [
    'Clyde',
    'Nyongesa',
    2023 - 2002,
    'Engineer', // Add a comma after 'Engineer'
    ['John', 'James']
];

for (let i = 0; i < 5; i++) {
    console.log(studentArray[i]);
}

const years = [2001, 2004, 2007, 2010];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}

console.log(ages);

//continue and break

console.log("---ONLY STRINGS---");
for (let i = 0; i< studentArray.length; i++){
    if (typeof studentArray[i] !== "string")
    continue;
    
    console.log(studentArray[i], typeof studentArray[i]);
}

console.log('---BREAK WITH NUMBER---');
for (let i = 0; i< studentArray.length; i++){
    if (typeof studentArray[i] !== "string")
    break;
   
    console.log(studentArray[i], typeof studentArray[i]);
}
*/

//outputting from the back
/*
const studentArray = [
    'Clyde',
    'Nyongesa',
    2023 - 2002,
    'Engineer', // Add a comma after 'Engineer'
    ['John', 'James']
];

for (let i = studentArray.length - 1;i >= 0 ;i--){
    console.log(i, studentArray[i]);
}
*/
//creating loop inside a loop


//WHILE LOOP
const studentArray = [
    'Clyde',
    'Nyongesa',
    2023 - 2002,
    'Engineer',
    ['John', 'James']
];

// Using a for loop to iterate in reverse
for (let i = studentArray.length - 1; i >= 0; i--) {
    console.log(i, studentArray[i]);
}

// Using a while loop to iterate in reverse
let i = studentArray.length - 1; // Start from the last index
while (i >= 0) {
    console.log(i, studentArray[i]);
    i--; // Decrement the index in each iteration
}


let dice = Math.trunc(Math.random() * 6) +1;
while (dice !== 6){
console.log(`you rolled a ${dice};`)
dice = Math.trunc(Math.random() * 6) +1;
};