/*data type that stores values of same type
//An array is mutable
//stores multiple related values
//order  matters when retrieving values/data
const friends =['Michael', 'Kevin', 'Newton'];
const myFriends = new Array('Dayo', 'Voke')

//We use index to access the arrays
console.log(friends[1]);
console.log(friends.length);

// friends[2] = "Jay"  /changing the value of friend at index 2

const calcAge = function (birthYear) {
    return 2040 - birthYear
}
const years = [1990, 1980, 1995, 2000, 1997 ];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1 , age2 , age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages);
*/

//ARRAY METHODS
//friends.push("mee") //Adds to the end
//friends.unshift("mee") //Adds infront
// .pop() /Remove the last 
//.shift /rempve first element
//.indexof("") /returns the index
function calcTip(bill) {
    if (50 >= bill <= 300){
        return bill * 0.15;
    }
    
    else {
         return bill * 0.2;
    }
}
//console.log(calcTip(100))

const bills = [12,555,44]
const tips = [calcTip(bills[0]),
              calcTip(bills[1]), 
              calcTip(bills[2])]

 const total = [bills[0] + tips[0], 
                bills[1] + tips[1],
                bills[2] + tips[2]] 
                
console.log(total[1])                         