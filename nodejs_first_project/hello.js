//My first node.js code
console.log("Hello from Node.js!!");

const userName = "Andreas";
const currentTime = new Date();
const hours = currentTime.getHours();
console.log(hours);
let greeting;
if (hours >= 5 && hours < 12) {
    greeting = "Good morning";
} else if (hours >= 12 && hours < 18) {
    greeting = "Good afternoon";
} else if (hours >= 18 && hours < 22) {
    greeting = "Good evening";
} else {
    greeting = "Good night";
}

console.log(`${greeting}, ${userName}! Welcome to NodeJS.`);
