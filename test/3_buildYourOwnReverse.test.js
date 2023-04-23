const assert = require('assert');

function myOwnReverse(array, fn) {
    return array
}


/////////////// tests /////////////////
// Do not change from below here
describe('myOwnReverse', function () {
    it('reverses an array', function () {
        const result = myOwnReverse([1, 7, 3, 4, 5, 6])
        assert.equal(result, [6, 5, 4, 3, 7, 1]);
    });

    it('reverses a string', function () {
        const result = myOwnReverse('hello')
        assert.equal(result, 'olleh');
    });
});