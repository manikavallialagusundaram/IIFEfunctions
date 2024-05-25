//Convert all the strings to title caps in a string array 
var stringArray = ["welcome meenu","enjoy your beautiful stay","have a nice weekend"];
//console.log(stringArray);
var strings =(function(arr){
return arr.map(function(str){
return str.split(' ').map(function(word){
return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
}).join('')
});
})(stringArray)
console.log(strings);