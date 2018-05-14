// @param Array arrayOfPairs [{ divisibleBy(int): outputString(str) }, { divisibleBy(int): outputString(str) } ...]
function fizzbuzz(arrayOfPairs) {
  for (i = 1; i < 100; i++) {
    let result = i + ' ';
    arrayOfPairs.forEach(pair => {
      const divisible = (i % Object.keys(pair)[0]) == 0;
      if (divisible) {
        result = result + Object.values(pair)[0];
      }
    });
    console.log(result);
  }
}

const pairs = [
  { 3: 'fizz' },
  { 5: 'buzz' },
  { 21: 'cheers' },
  { 50: 'cent' }
  // Add more pairs here!
];

// Call the function
fizzbuzz(pairs);

