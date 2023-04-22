var assert = require('assert');

function secondHighestNumber(array){
    const numberArray = array.filter(Number);
    return numberArray.sort().at((numberArray.length) -2);
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
    it('do something', function () {
        const result = secondHighestNumber([1,7,3,4,5,6])
      assert.equal(result, 6);
    });

    it('do something', function () {
        const result = secondHighestNumber([1,7,3,4,5,'ignore me',6])
      assert.equal(result, 6);
    });

    it('do something again', function () {
        const result = secondHighestNumberAsWord([1,7,3,4,5,6])
      assert.equal(result, 'six');
    });
});
