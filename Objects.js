//use key values pair concepts
//Order does not matter when retrieving the data like in arrays
//objects can hold arrays,even other objects inside it

const student = {
    firstName: "Clyde",
    lastName: "Nyongesa",
    birthYear: 2002, // integer value
    job: "Engineeer", // String value
    friends: ["john", "James"], // array value
    hasDriversLicense: true, // boolean value

    calcAge: function () {
        return 2023 - this.birthYear; // use 'this' to refer to the current object
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and has ${
            this.hasDriversLicense ? "a" : "no"
        } driver's license.`; // call calcAge as a function
    },
};

// Print the summary
console.log(student.getSummary());

// Print the entire object
console.log(student);

// Using dot notation to get data from the object
console.log(student.firstName);

// Using bracket notation
console.log(student["firstName"]);

// Using dot and bracket notation to construct keys dynamically
const nameKey = 'Name';
console.log(student['first' + nameKey]);
console.log(student['last' + nameKey]);

// Using dot and bracket notation to add new properties
student.location = "Kenya";
student['twitter'] = '@clydeghost';
console.log(student);

// Interpolation in a string
console.log(`${student.firstName} has ${student.friends.length} friends, and his best friend is called ${student.friends[1]}`);

// Calling methods
console.log(student.calcAge());
console.log(student['calcAge']());

// Accessing properties that don't exist
console.log(student.location); // undefined

// Accessing properties that were added dynamically
console.log(student["twitter"]); // @clydeghost

// Logging the method itself
console.log(student.getSummary);

// Calling the method
console.log(student.getSummary());
