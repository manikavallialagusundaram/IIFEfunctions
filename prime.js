var numbers = [2,3,4,5,6,7,8,9,10];
var prime =(function(arr){
return arr.filter(function(num){
    if(num < 2) return false;
    for(var i=2;i<=Math.sqrt(num);i++){
      if(num % i === 0)
        return false;
      }
        return true;
});
})(numbers);
console.log(prime);