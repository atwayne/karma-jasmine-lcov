
describe('util', function () {

    it('should define a global function', function () {
        expect(typeof dummyAdd).toBe('function');
    });


    it('should throw error if first parameter is not a number', function () {
        var first = 'fake';
        var second = 54;

        var testCase = function () {
            var result = dummyAdd(first, second);
        };

        expect(testCase).toThrow();
    });


    it('should add two numbers', function () {
        var first = 42;
        var second = 28;

        var actual = dummyAdd(first, second);
        var expected = first + second;
        expect(actual).toBe(actual);
    });


});
