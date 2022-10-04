"use strict";
function printInConsole(...params) {
    params.forEach(data => console.log(`The Value is ${data} And Type Is ${typeof data === "undefined" ? "Done" : typeof data}`));
    return "Done";
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
//# sourceMappingURL=main.js.map