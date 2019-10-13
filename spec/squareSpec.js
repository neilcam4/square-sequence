describe('SQUARES SEQUENCE', function(){
    it('new array begins with x', function(){
        var x = 2;
        var n = 5;
        result = squares(x)
        expect(result).toEqual([2])
    })
    it('returns an array the length of n', function(){
        var x = 2
        var n = 5
        var result = squares(x,n)
        expect(result.length).toEqual(5)
    })
    it('returns 65536 as fifth element of the array', function(){
        var x = 2
        var n = 5
        var result = squares(x,n)
        expect(result[4]).toEqual(65536)
    })
})
// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// Examples
// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]