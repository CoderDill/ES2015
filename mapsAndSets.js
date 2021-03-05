//Quick Question #1
new Set([1,1,2,2,3,4]) = {1,2,3,4};
//Quick Question #2
'ref';
//Quick Question #3
/*
0: { Array(3): true}
1: { Array(3): false}
*/
//hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;
//vowelCount
function vowelCount(str) {
    function isVowel (letter) {
        return 'aeiou'.includes(letter)
    }
    const myMap = new Map();
    for (let letter of str) {
        let lowerLetter = letter.toLowerCase();
        if(isVowel(lowerLetter)) {
            if(myMap.has(lowerLetter)) {
                myMap.set(lowerLetter, myMap.get(lowerLetter) + 1);
            }
            myMap.set(lowerLetter, 1);
        }
    }
    return myMap;
}