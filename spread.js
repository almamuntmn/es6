const max = Math.max(5, 15, 22, 66, 7, 82)
console.log(max);
// -------------------------------------------------// -------------------------------------------------

const numbers = [55,88,722,66,13,256,4];
console.log(...numbers);

const maxNumber = Math.max(...numbers);
console.log(maxNumber);
// -------------------------------------------------// -------------------------------------------------

// use spread operator to copy

const nums = [4,5,6,8,8];
const nums2 = nums;
nums2.push(10);
console.log(nums);