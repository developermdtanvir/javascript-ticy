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

// problem solving chatGPT ask questions and i am solution

// find evan number an array

const even = (numbers) => {
  return numbers.filter((number) => {
    return number % 2 === 0;
  });
};

console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// word first letter if lower convert uppercase

const capitalize = (string) => {
  let words = string.split(" ");
  let capitalizedWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstLetter = word[0].toUpperCase();
    let restOfWord = word.slice(1);
    let capitalizedWord = firstLetter + restOfWord;
    capitalizedWords.push(capitalizedWord);
  }

  return capitalizedWords.join(" ");
};

console.log(capitalize("hello world")); // Hello World
