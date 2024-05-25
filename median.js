//Return median of two sorted arrays of the same size.
const medianOfTwoSortedArray = ((arr1,arr2) => {
    const combinedArray = [...arr1,...arr2].sort((a,b)=>a-b);
    //console.log(combinedArray);
    const mid = (combinedArray.length)/2;
    //console.log(mid);
    if(combinedArray.length % 2 ===0){
        return (combinedArray[mid-1] + combinedArray[mid])/2;
    }else{
        return combinedArray[mid];
    }
})
const arr1 = [1,3,5]
const arr2 = [2,4,6];
console.log("medianOfTwoSortedArray:",medianOfTwoSortedArray(arr1,arr2));