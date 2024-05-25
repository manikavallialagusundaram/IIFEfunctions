//Print odd numbers in an array
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var oddNumbers = function(arr){
    return arr.filter(function(num){
    return num % 2 !==0;
    });
}(numbers);
oddNumbers.forEach(function(num){
console.log(oddNumbers);
});

