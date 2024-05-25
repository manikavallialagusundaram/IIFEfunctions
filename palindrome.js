var numbers =["mom","dad","pop","level"];
var palindromes = (function(arr){
    return arr.filter(function(word){
        return word === word.split('').reverse().join('')
    });
})(numbers);
console.log(palindromes);