const removeDuplicates = ((arr) => {
    return arr.filter((item,index) => arr.indexOf(item)===index);
});
const arrayWithDuplicates = [1,2,2,3,3,4,5,6,7,8,9,9,1,10,8,10,11,12,14,13,12,11,14];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log("removedDuplicates:",arrayWithoutDuplicates);