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
    if (input === undefined) {
        return "Hello, World!";
    } else if (input === true) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }

}