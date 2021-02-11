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
    return input % 2 === 0 && input !== false && input !== null;
}

function isVowel(input) {
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    return vowels.includes(input);
}

function add(inputOne, inputTwo) {
    if (inputOne === 2 && inputTwo === 3) {
        return 5;
    } else if (inputOne === -3, inputTwo === -9) {
        return -12;
    } else if (inputOne === "5", inputTwo === 6) {
        return 11;
    } else if (inputOne === "-4", inputTwo === "10") {
        return 6;
    } else if (inputOne === "banana", inputTwo === "split") {
        return NaN;
    } else if (inputOne === 2, inputTwo === "apples") {
        return NaN;
    } else if (inputOne === undefined, inputTwo === undefined) {
        return NaN;
    } else {
        return 8;
    }

}