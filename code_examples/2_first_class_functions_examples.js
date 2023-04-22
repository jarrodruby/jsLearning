///////////////
// We are assigning the 2 consts to functions
// https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
///////////////
const functionConstAdd = function(x, y) {
    return x + y
}

const functionConstSubtract = function(x, y) {
    return x - y
}

function functionCallFunctions1(x, y, fn1, fn2) {
    const fn1Result = fn1(x, y)
    const fn2Result = fn2(x, y)
    return fn1Result - fn2Result
}
console.log("functionConstAdd(22,33)")
console.log(functionConstAdd(22,33))

console.log("functionConstSubtract(22,33)")
console.log(functionConstSubtract(22,33))

console.log("functionCallFunctions1(22, 33, functionConstAdd, functionConstSubtract)")
console.log(functionCallFunctions1(22, 33, functionConstAdd, functionConstSubtract))