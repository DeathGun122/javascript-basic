// while loop

let i = 0;
while(i < 20) {
    console.log(i);
    i++;
}

// for loop

for(let i = 0; i < 20; i++) {
    console.log(i);
}

//continue and break

for(let i = 0; i < 20; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}

for(let i = 0; i < 20; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}