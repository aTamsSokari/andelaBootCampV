#Binary Search

Firstly you are create three functions, as prototypes to the Array class to return the following:

`toTwenthy()` returns `[1, 2, 3 . . . 20]`
`toForty()` returns `[2, 4, 6 . . . 40]`
`toOneThousand()` returns `[10, 20, 30 . . . 1000]`


Once you are done, create another prototyped function called `search`, it will take just one argument which is the number you are to find. The search functon should return an object, which contains


1. `.count`, the number of times you function interated to find the index of the number in question
2. `.index`, the index of the number in question
3. `.length`, the length of the original array


The `.search` function should implement the binary search algorithm, each time you interate, you should increase the `count`, to test how efficient your implementation is.


## Instructions

Prior understanding of Javascript classes are required. Prototyping of the Array class will be required to complete this exercise.

Remember that passing code is just the first step. The goal is to work
towards a solution that is as readable and expressive as you can make
it.

Please make your solution as general as possible. Good code doesn't just
pass the test suite, it works with any input that fits the
specification.

Have fun!
