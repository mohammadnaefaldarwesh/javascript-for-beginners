/*****************************
    variables and data types
 ******************************/

// let firstName = 'mike';
// console.log(firstName);

// let lastName = 'Smith';
// let age = 28;

// let boolean = true;
// console.log(boolean);

// let job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// console.log(firstName + ' ' + lastName);

// console.log(' the type of boolean is ' + typeof boolean);
// console.log(' the type of firstName is ' + typeof firstName);
// console.log(' the type of age is ' + typeof age);

/*****************************
       Basic operators
 ******************************/

// Math operators

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(10 / 5);

// Logical operators
// let number = 2 < 3;
// number = 2 > 3;
// number = 2 < 3;
// number = 2 >= 3;
// number = 2 <= 3;
// number = 3 == 3;
// number = 3 === 3;
// number = 2 !== 3;

// console.log(number);

/*****************************
     If / else statements
 ******************************/

// let firstName = 'John';
// let civilStatus = 'single';

// if (civilStatus === 'married') {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon :)');
// }

// let isMarried = true;
// if (isMarried) {
//   console.log(firstName + ' is married!');
// } else {
//   console.log(firstName + ' will hopefully marry soon :)');
// }

/*****************************
 * Boolean logic
 ******************************/

// let firstName = 'mike';
// let age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// }

/***********************************************
   The Ternary Operator and Switch Statements
 ************************************************/

// let firstName = 'John';
// let age = 14;

// Ternary operator
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// let drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// Switch statement
// let job = 'instructor';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

/**********************************************************
       Truthy and Falsy values and equality operators
 ***********************************************************/

// falsy values: undefined, null, 0, '', NaN ,false
// truthy values: NOT falsy values

// let height = 23;

// if (height) {
//     console.log('variable is defined');
// } else {
//     console.log('variable has NOT been defined');
// }

/*****************************
          Functions
 ******************************/

// function calculateAge(birthYear) {
//   return 2021 - birthYear;
// }

// let ageJohn = calculateAge(1990);
// let ageMike = calculateAge(1948);
// let ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

/******************************************
    Function Statements and Expressions
 ******************************************/

// Function declaration
// function whatDoYouDo(job, firstName) {}

/*****************************
            Arrays
 ******************************/

// Initialize new array
// let names = ['John', 'Mark', 'Mike'];
// let years = new Array(1990, 1969, 1948);

// console.log(names[2]);
// console.log(names.length);

// Mutate array data
// names[1] = 'Ben';

// console.log(names);

// Different data types
// let mike = ['mike', 'Smith', 1990, 'designer', false];

// mike.push('blue');
// mike.unshift('Mr.');
// console.log(mike);

// mike.pop();
// mike.shift();
// console.log(mike);

// console.log(mike.indexOf('Smith'));

// let isDesigner = mike.indexOf('designer') === -1 ? 'mike is not a designer' : 'mike is a designer';
// console.log(isDesigner);

/*****************************
     Objects and properties
 ******************************/

// Object literal
// const mike = {
//   firstName: 'mike',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
// };

// console.log(mike.firstName);
// console.log(mike['lastName']);

// mike.job = 'designer';
// mike['isMarried'] = true;
// console.log(mike);

// new Object syntax
// let jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/*****************************
     Objects and methods
 ******************************/

// let john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1992,
//   family: ['Jane', 'Mark', 'Bob', 'Emily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function () {
//     this.age = 2018 - this.birthYear;
//   },
// };

// john.calcAge();
// console.log(john);

/*****************************
      Loops and iteration
 ******************************/

// for loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// i = 0, 0 <= 10 true, log i to console, i++
// i = 1, 1 <= 10 true, log i to the console, i++
//...
// i = 9, 9 <= 10 true, log i to the console, i++
// i = 10, 10 <= 10 true, log i to the console, i++
// i = 11, 11 <= 10 FALSE, exit the loop!

// let mike = ['mike', 'Smith', 1990, 'designer', false, 'blue'];
// for (let index = 0; index < mike.length; index++) {
//   console.log(mike[index]);
// }

// While loop
// let index = 0;
// while (index < mike.length) {
//   console.log(mike[index]);
//   index++;
// }

// Looping backwards
// for (let index = mike.length - 1; index >= 0; index--) {
//   console.log(mike[index]);
// }
