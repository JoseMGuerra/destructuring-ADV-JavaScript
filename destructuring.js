/**
 * To run this file in Gitpod, use the
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let = [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
  mike: 'designer',
  jill: 'developer',
  alicia: 'accountant',
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);
// Destructuring subsets

let languages = ['english', 'french', 'spanish', 'german', 'japanese'];

let [johnNative, johnSecondary] = languages;
console.log("John's languages:", johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log("Mary's languages:", maryNative, marySecondary);

let languages2 = {
  firstLanguage: 'english',
  secondLanguage: 'french',
  thirdLanguage: 'spanish',
  fourthLanguage: 'japanese',
};
let { firstLanguage, thirdLanguage } = languages2;
console.log(
  'First language:',
  firstLanguage,
  '\nThird language:',
  thirdLanguage
);

// Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;
console.log('Favorite:', favorite);
console.log('Second favorite:', secondFavorite);
console.log('The others:', others);

let favoriteFoods = {
  brian: 'pizza',
  anna: 'pasta',
  sarah: 'vegetarian',
  andrea: 'steak',
};
let { brian, anna, ...otherFood } = favoriteFoods;
console.log("Brian's favorite:", brian);
console.log("Anna's favorite:", anna);
console.log('The rest:', otherFood);

/**
 * Steps
You will create three variables using destructuring on an array returned from a function. The first and second variables will be the first two items in the array and the final one will be the remainder of items in the array. You will also create an arrow function, Which should return an array containing all the subjects for whichever students name is supplied when the function is called.
 
1. Declare a variable named: makeList using the keyword const
2. The variable makeList should be assigned an arrow function
3. The arrow function should take two parameters named: arr, student
4. The arrow function should use a return statement
5. The function should return an array of the subjects for the student whose name is passed into the function when called.
6. Using destructuring on the return value from calling the function and passing in the students array,  and the string John, create 3 variables named: first, second, rest using the keyword let
7. log out the values  first, second, and rest to view their values
 */

let students = [
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'John',
      subjects: ['art', 'cad', 'english', 'maths', 'science'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, maths: 77, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

const makeList = (arr,student) => {
  
  for(let std of arr){
      if( std.name == student){
        return std.subjects
    }
  }
};


let [first, second, ...rest] = makeList(students, 'John');

console.log(first, second, rest)

