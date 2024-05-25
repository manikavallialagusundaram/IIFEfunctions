var num = [50,40,60,100,500];
var sum = function(arr){
    return arr.reduce(function(acc,ele){
    return(acc+ele);
    },0);
}(num);
console.log("sum of all numbers:" ,sum);