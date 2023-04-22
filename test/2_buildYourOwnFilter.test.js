const assert = require('assert');

function myOwnFilter(array, fn) {
    return array
}


/////////////// tests /////////////////
// Do not change from below here
describe('myOwnFilter', function () {
    it('filters numbers higher than 3', function () {
        const result = myOwnFilter([1, 7, 3, 4, 5, 6], (x) => {
            return x > 3
        })
        assert.equal(result, [4, 5, 6, 7]);
    });

    it('filters numbers less than 3', function () {
        const result = myOwnFilter([1, 7, 3, 4, 5, 6], (x) => {
            return x < 3
        })
        assert.equal(result, [1]);
    });

    it('filters numbers less than 3 (different syntax)', function () {
        const fn = (x) => {
            return x < 3
        }
        const result = myOwnFilter([1, 7, 3, 4, 5, 6], fn)
        assert.equal(result, [1]);
    });

    it('filters numbers less than 3 (different syntax again)', function () {
        const fn = function(x) {
            return x < 3
        }
        const result = myOwnFilter([1, 7, 3, 4, 5, 6], fn)
        assert.equal(result, [1]);
    });
});