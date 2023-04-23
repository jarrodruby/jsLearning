//////////////
// The remainder operator %
// Not need for exercise 3; only for the example below
console.log('3 % 3')
console.log(3 % 3)

console.log('3 % 2')
console.log(3 % 2)

console.log('7 % 2')
console.log(7 % 2)

console.log('0 % 3')
console.log(0 % 3)

///////////////
// We are skipping every third word
// The for loop with the index we need for exercise 3

let words = ['once', 'upon', 'a', 'time', 'their', 'was', 'a', 'cat', 'in', 'the', 'hat']

let newArray = []
for (let x = 0; x < words.length; x++) {
  if (x % 3 != 0 && x !== 0) {
      newArray.push(words[x])
  }
}

console.log('newArray that skips every third word using for loop')
console.log(newArray)

let newArray2 = []
words.forEach(function (value, x) {
    if (x % 3 != 0 && x !== 0) {
        newArray2.push(words[x])
    }
});

console.log('newArray2 that skips every third word using forEach')
console.log(newArray2)