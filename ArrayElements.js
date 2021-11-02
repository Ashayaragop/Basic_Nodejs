var arr1= [12, 25, 31, 23, 75, 81, 100];
	
// Print Before Sortring Array
console.log("Original Array</br>");
console.log(arr1);


// Call sort function
arr1.sort(function(a, b){return a - b});

console.log("After Sorting in Ascending Order");
	
// Print Sorted Numeric Array
console.log(arr1);