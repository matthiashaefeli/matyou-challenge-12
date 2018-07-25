describe('test', function() {
  it('returns the given string', function() {
    expect(test('Hello World')).toEqual('Hello World');
  });
});

describe('prime', function() {
  it('returns all prime numbers < as the given number', function() {
    expect(prime(11)).toEqual([2, 3, 5, 7, 11]);
  });

  it('returns all prime numbers < as the given number', function() {
    expect(prime(80)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79]);
  });
});

describe('survivor', function() {
  it('returns the survivor from a given list and given integer (check explanation on EX.md)', function() {
    expect(survivor(([1,2,3,4,5,6,7], 3))).toEqual(4)
  });
});

describe('find sentence', function() {
  it('removes all numbers special characters and repeated characters to find the sentence', function() {
    expect(findSentence('t45345h??i_-s iiii((s )(*t44h89e a**an345s?/w098e{}r')).toEqual('this is the answer');
  });

  it('removes all numbers special characters and repeated characters to find the sentence', function() {
    expect(findSentence('(*(*&o341243?>nllllllly o__++=n}{e cccchhhhaaaarrrraaacccctttteeeeerrrr words')).toEqual('only one character words');
  });
});

describe('number salad', function() {
  it('returns final number (check ex.md for more explanation)', function() {
    expect(numberSalad([1, 10, 30,50, 200, 30, 10])).toEqual(31);
  });

  it('returns final number (check ex.md for more explanation)', function() {
    expect(numberSalad([220, 10, 33333, 459, 2309, 44])).toEqual(30311);
  });
})

describe('top words', function() {
  it('returns the top three repeated words in a string', function() {
    let words = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."
    expect(topWords(words)).toEqual(["a", "of", "on"]);
  });
});

describe('perfect power', function() {
  it('returns the perfect power from a given integer (check ex.md for more explanation)', function() {
    expect(perfectPower(4)).toEqual([[2, 2]]);
  });

  it('returns the perfect power from a given integer (check ex.md for more explanation)', function() {
    expect(perfectPower(8)).toEqual([[2, 3]]);
  });

  it('returns the perfect power from a given integer (check ex.md for more explanation)', function() {
    expect(perfectPower(36)).toEqual([[6, 2]]);
  });

  it('returns the perfect power from a given integer (check ex.md for more explanation)', function() {
    expect(perfectPower(81)).toEqual([[3, 4], [9, 2]]);
  });
});

describe('number to roman converter', function() {
  it('returns the roman number of a given number', function() {
    expect(numberToRomanConverter(10)).toEqual('X');
  });

  it('returns the roman number of a given number', function() {
    expect(numberToRomanConverter(5)).toEqual('V');
  });

  it('returns the roman number of a given number', function() {
    expect(numberToRomanConverter(2)).toEqual('II');
  });

  it('returns the roman number of a given number', function() {
    expect(numberToRomanConverter(16)).toEqual('XVI');
  });

  it('returns the roman number of a given number', function() {
    expect(numberToRomanConverter(66)).toEqual('LXVI');
  });

  it('returns the roman number of a given number', function() {
    expect(numberToRomanConverter(386)).toEqual('CCCLXXXVI');
  });

  it('returns the roman number of a given number', function() {
    expect(numberToRomanConverter(2369)).toEqual('MMCCCLXIX');
  });
});

describe('roman to number converter', function() {
  it('returns the number of a given roman number', function() {
    expect(romanToNumberConverter('X')).toEqual(10);
  });

  it('returns the number of a given roman number', function() {
    expect(romanToNumberConverter('V')).toEqual(5);
  });

  it('returns the number of a given roman number', function() {
    expect(romanToNumberConverter('II')).toEqual(2);
  });

  it('returns the number of a given roman number', function() {
    expect(romanToNumberConverter('XVI')).toEqual(16);
  });

  it('returns the number of a given roman number', function() {
    expect(romanToNumberConverter('LXVI')).toEqual(66);
  });

  it('returns the number of a given roman number', function() {
    expect(romanToNumberConverter('CCCLXXXVI')).toEqual(386);
  });

  it('returns the number of a given roman number', function() {
    expect(romanToNumberConverter('MMCCCLXIX')).toEqual(2369);
  });
})

describe('validate sudoku', function() {
  it('returns true if the given array is the solution for a sudoku', function() {
    let solution = [
            [7,8,4,  1,5,9,  3,2,6],
            [5,3,9,  6,7,2,  8,4,1],
            [6,1,2,  4,3,8,  7,5,9],
          
            [9,2,8,  7,1,5,  4,6,3],
            [3,5,7,  8,4,6,  1,9,2],
            [4,6,1,  9,2,3,  5,8,7],
          
            [8,7,6,  3,9,4,  2,1,5],
            [2,4,3,  5,6,1,  9,7,8],
            [1,9,5,  2,8,7,  6,3,4]
          ]
    expect(validateSudoku(solution)).toEqual(true);
  });

  it('returns false if the given array is not the solution for a sudoku', function() {
    let solution = [
            [7,8,4,  1,5,9,  7,2,6],
            [5,3,9,  6,7,2,  8,4,1],
            [6,1,2,  4,3,8,  3,5,9],
          
            [9,2,8,  7,1,5,  4,6,3],
            [3,5,7,  8,4,6,  1,9,2],
            [4,6,1,  9,2,3,  5,8,7],
          
            [8,7,6,  3,9,4,  2,1,5],
            [2,4,3,  5,6,1,  9,7,8],
            [1,9,5,  2,8,7,  6,3,4]
          ]
    expect(validateSudoku(solution)).toEqual(true);
  });

  it('returns false if the given array is not the solution for a sudoku', function() {
    let solution = [
            [7,8,4,  1,5,9,  3,2,6],
            [5,3,9,  6,7,2,  8,4,1],
            [6,1,2,  4,3,8,  7,5,9],
          
            [9,2,8,  7,1,5,  4,6,3],
            [3,5,7,  8,4,6,  1,9,2],
            [4,6,1,  9,2,3,  5,8,7],
          
            [8,7,6,  3,8,4,  2,1,5],
            [2,4,3,  5,6,1,  9,7,8],
            [1,9,5,  2,9,7,  6,3,4]
          ]
    expect(validateSudoku(solution)).toEqual(true);
  });
});

describe('hashtag generator', function() {
  it('returns Hashtagstring from a given string', function() {
    expect(hashtagGenerator('Hello world')).toEqual('#HelloWorld');
  });

  it('returns Hashtagstring from a given string', function() {
    expect(hashtagGenerator('Yes it is a string')).toEqual('#YesItIsAString');
  });
});
