const array = [20, 30, 40, 50, 10, 5, 1];

// find largest number of an array
let largestNumber = 0;
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (element > largestNumber) {
    largestNumber = element;
  }
}
console.log(largestNumber);
