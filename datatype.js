//init, read, write

//string

console.log('hello, i am a string');

let string = 'hello, i am a string ';
let string2 = "hello, i am a string";

let finalString = string + string2;

console.log(finalString[4]);

//number

const number = 5;
console.log(number);

//array []

const array = [1,2,3,4,5,6,7,[1,2,3]];
console.log(array);
array[3] = 10;
console.log(array[3]);

//object {}

const dictionary = {
    'ocean': 'Large body of salt water',
    'river': 'Large body of fresh water',
    'mountain': 'Large body of rock',
    'forest': 'Large body of trees',
    'desert': 'Large body of sand',
    'island': 'Large body of land',
    'city': 'Large body of people',
    'country': 'Large body of land',
    'state': 'Large body of land',
}

console.log(dictionary['ocean']);   //method 1

const user = {
    'name': 'John Doe',
    'age': 30,
    'hobbies': ['reading', 'writing', 'coding'],
    'address': {
        'street': '123 Main St',
        'city': 'New York',
        'state': 'NY',
        'zip': '10001',
    },
    'isStudent': true,
    'gpa': 3.5,
}

console.log(user.address.city);   //method 2

user.name = 'Jane Doe';

console.log(user);

//null

const unknown = null;
console.log(unknown);

//undefined

const nothing = undefined;
console.log(nothing);

//boolean

const isTrue = true;
console.log(isTrue);

const isFalse = false;
console.log(isFalse);