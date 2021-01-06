const {} = require('./array_lib')
/*------------------------------*/
const chars = [
    {name: "tony", age: 20},
    {name: "feel", age: 30},
];
console.log(chars.pluck('name')); // ['tony', 'feel']
/*------------------------------*/
const arr = ["a", "b", "c", "d", "e", "f"].splitArray(2);
console.log(arr); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
/*------------------------------*/
const value4 = [1, 0, 2, false, "", 3].clearArray();
console.log(value4); // [1, 2, 3]
/*------------------------------*/
const value5 = [1];
console.log(value5.concatArray(2, [3], [[4]]));
console.log(value5); // [1]
/*------------------------------*/
console.log([1, 2, 3].rm()); // [2, 3]
console.log([1, 2, 3].rm(2)); // [3]
console.log([1, 2, 3].rm(5)); // []
console.log([1, 2, 3].rm(0)); // [1, 2, 3]
/*------------------------------*/
const value8 = [1, 2, 3];
value8.replaceIn('a')
console.log(value8); // ['a', 'a', 'a']
value8.replaceIn(2)
console.log(value8); // [2, 2, 2]
const altValue8 = [4, 6, 8, 10];
altValue8.replaceIn('*',1,3)
console.log(altValue8); // [4, '*', '*', 10]
/*------------------------------*/
const value10 = [1, 2, 3, 4, 2, 5, 6, 1, 3, 1, 3, 3, 1];
const rValue10 = value10.uni();
console.log(rValue10); // [1,2,3]
/*------------------------------*/
console.log(['a', 'b', 'c', 'd'].nfa(1));
console.log(['a', 'b', 'c', 'd'].nfa(-2));
/*------------------------------*/
const value13=[1, 2]
console.log(['a', 'b'].group(value13,[true, false]));
/*------------------------------*/
console.log(['a', 'b', 'c'].implode('-'));
/*------------------------------*/
console.log([1, 2, 3, 4, 5, 6].rnd());
/*------------------------------*/
console.log([1, 2, 'a'].diff([1, 2, 3, 4, 'b']));
/*------------------------------*/
console.log([7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7].fn());