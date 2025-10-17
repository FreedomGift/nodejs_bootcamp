import process from "node:process";
function greet(name) {
    console.log(`Hello, ${name}!`);
}

const getUser = process.argv[2];
greet(getUser);



