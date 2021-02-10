// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

const helloWorld = function() {
    return "Hello, World!";
}

// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello, Alex!";
//     } else if (input === "Pat") {
//         return "Hello, Pat!";
//     } else {
//         return "Hello, Jane!";
//     }
// }

// Exercise #6 Implement the refactor!
function sayHello(input) {
    if (typeof input === "string" && !(input == Number(input))) {
        return "Hello, " + input + "!";
    } else {
        return "Hello, World!";
    }
}

function isFive(input) {
    return input == 5;
}

function isEven(input) {
    if (input === 2) {
        return true;
    } else if (input === -4) {
        return true;
    } else if (input === 3) {
        return false;
    } else if (input === 8) {
        return true;
    } else if (typeof input === "boolean") {
        return false;
    } else if (typeof input === "string") {
        return false;
    } else if (input === undefined) {
        return false;
    } else if (input === Infinity) {
        return false;
    }

}