const x = 6

if (x > 5) {
    console.log('x is greater than 5')
} else {
    console.log('x is less than 5')
}

//or and not

if (x > 5 && x < 10) {
    console.log('x is between 5 and 10')
}

if (x > 5 || x < 10) {
    console.log('x is between 5 and 10')
}

if (!(x > 5 || x < 10)) {
    console.log('x is not between 5 and 10')
}

//typeof

const randomVariable = 5;
const randomVariable2 = 'hello';

console.log(typeof randomVariable);
console.log(typeof randomVariable2);