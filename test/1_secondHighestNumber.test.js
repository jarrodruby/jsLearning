var assert = require('assert');

function secondHighestNumber(array){
    const numberArray = array.filter(Number);
    return numberArray.sort().at((numberArray.length) -2);
}
function thirdHighestNumber(array){
    const numberArray = array.filter(Number);
    return numberArray.sort().at((numberArray.length) -3);
}
numToWord = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven'
}

function secondHighestNumberAsWord(array){
    const numberArray = array.filter(Number);
    const resultNumber = numberArray.sort().at((numberArray.length) - 2);
    return numToWord[resultNumber];
}
function secondHighestNumberAsWord(array){
    //const resultNumber = secondHighestNumber(array)
    return numToWord[secondHighestNumber(array)];
}
function thirdHighestNumberAsWord(array){
    return numToWord[thirdHighestNumber(array)];
}

numToWord = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven'
}

/////////////// tests
describe('blah', function () {
    it('do something1', function () {
        const result = secondHighestNumber([1,7,3,4,5,6])
      assert.equal(result, 6);
    });

    it('do something2', function () {
        const result = secondHighestNumber([1,7,3,4,5,'ignore me',6])
      assert.equal(result, 6);
    });

    it('do something again1', function () {
        const result = secondHighestNumberAsWord([1,7,3,4,5,6])
      assert.equal(result, 'six');
    });

    it('do something again2', function () {
        const result = thirdHighestNumberAsWord([1,7,3,4,5,6])
      assert.equal(result, 'five');
    });
});
