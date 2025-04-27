function printSquare(number) {
    console.log(number * number);
}

for(let i = 1; i <= 10; i++) {
    printSquare(i);
}

function addStrings(string1, string2) {
    return string1 + ' ' + string2
}

console.log(addStrings('hello', 'world'));

//arrow functions

const addStrings2 = (string1, string2) => {
    return string1 + ' ' + string2
}

addStrings2('hello', 'world');