let names = ['Hossam', 'Amr', 'Khalid', 'Sha3ban'];
let namesCopy = [...names];
//let stringNames = names.toString();
// that will make the output like that Hossam,Amr,Khalid,Sha3ban



//let stringNames = names.join(', ')
// here we can see that comma with space to make the output like that Hossam, Amr, Khalid, Sha3ban

// let names2 = ['John', 'Tom']
// let names3 = ['Dalia', 'Jana']
// let joined = names.concat(names2, names3)
// that will add John, Tom, Dalia, Jana to the names array
//console.log(joined);


// namesCopy.splice(1, 1)
// console.log(names);
// console.log(namesCopy);
// that will remove index one witch is 'Amr' from the names array

// names.splice(1, 2, 'Adam');
// console.log(names);
// that will replace the index 1 and 2 with adam

// let slice = names.slice(1, 3)
// console.log(slice);


// let index = names.indexOf('Amr');
// that will show the item's number in the array for example
// console.log(index) ==> that will retuen 1

// let index = names.lastIndexOf('Amr');
// that will show incase we have duplicated data that will show the last index of it
// console.log(index) ==> that will print 4


let nums = [1, 2, 3, 4, [5,6, [7,8]], 9];

//let flat = nums.flat(); //it will show that array like that 
//(8) [1, 2, 3, 4, 5, 6, Array(2), 9]

// let flat = nums.flat(2); //after putting that 2 it will showit like that 
// (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(flat);

// names.forEach((n) => {
    // that will show all index inside the array names each elemnt in spearate line
//     console.log(n);
// });


// let count = 0;
// names.forEach(n => {
//     count++;
// });
// console.log(count);
// that will print the number of elemt in the array

// for(let i = 0; i < names.length; i = i + 2) {
//     console.log(names[i]);
// }
// that will print the first elemnt then the third one
// to understand that in the code i = i + 2 witch mean index 0 = 0 + 2
//witch will print index[0] and index [2] => the third one


let num = [1, 2, 3, 4, 5, 6];

// let double = num.map((n) => n *2);
// console.log(double);
// That Will show The numbers like that => (6) [2, 4, 6, 8, 10, 12]


// let Total = num.reduce((Total, currentValue) => Total + currentValue)
// console.log(Total);
// That Will Show The Sum Of That Numbers Starting from first index to the last index


// let Total = num.reduce((Total, currentValue) => Total + currentValue, 10) 
// console.log(Total);
// if we added that 10 that will add 10 to the sum of numbers in our case it will be 31 as a result


// let Total = num.reduce((a, b) => Math.max(a, b), -Infinity);
// console.log(Total);
// That Will Show The greater number in The Array


// let isGreater = num.some((n) => n > 5);
// console.log(isGreater);
// Some Meaning That One Or More Index In The Array Bigger Than 5


// let stock = [
//     { item: 'ketchup', quantity:32 },
//     { item: 'Mayo', quantity:9 },
//     { item: 'hot sauce', quantity:3},
// ]

// let mayo = stock.find((s) => s.item === 'Mayo');
// console.log(mayo.quantity);

// That Will Display the quantity of Mayo

// let alph = names.sort();
// console.log(alph);
// that will sort The Names by letters From A to z
let unsortedNums = [2, 11, 9, 8, 6]
let sorted = unsortedNums.sort((a, b) => a - b);
// a - b will stort number from lower to heigher
// if we made it b - a it will sort numbers from heigher to lower

console.log(sorted)
