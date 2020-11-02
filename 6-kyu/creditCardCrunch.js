function creditCardCrunch(...input) {
  let outputStr = "";
  let sumOfOdd = 0;
  let sumOfEven = 0;
  let doubledDigit = 0;
  console.log(input);
  for (let i = 1; i <= input[0]; i++) {
    sumOfOdd = 0;
    sumOfEven = 0;
    let creditCardNumber = Array.from(String(input[i]), Number);

    let reversedCreditCardNumber = creditCardNumber.reverse();
    for (let j = 0; j < reversedCreditCardNumber.length; j += 2) {
      sumOfOdd += reversedCreditCardNumber[j];
    }
    for (let k = 1; k < reversedCreditCardNumber.length; k += 2) {
      doubledDigit = 0;
      doubledDigit = reversedCreditCardNumber[k] * 2;
      if (doubledDigit > 9) {
        sumOfEven += 2;
      } else {
        sumOfEven += doubledDigit;
      }
    }
    console.log("sumOfOdd:", sumOfOdd, "sumOfeven:", sumOfEven);
    if ((sumOfEven + sumOfOdd) % 10 === 0) {
      outputStr += "Yes\n";
    } else {
      outputStr += "No\n";
    }
  }
  return outputStr;
}
let one = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
let two = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
let three = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
let four = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
let five = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
creditCardCrunch(5, one, two, three, four, five);

// this is a private kata. The aim is to scrutinise 16 digit credit card characters.
// The first input to the function is the amount of credit card numbers to follow.
// For each number, I had to reverse it and calculate the sum of all the numbers at odd indexes.
// For the numbers at even indexes, I had to double them. If the doubled number was a double digit number,
// I added the number of digits (intuitively, that is 2) to the sum of number at even indexes,
// otherwise I added the doubled number. I then had to output 'Yes' if the sum of odd and sum of even numbers
// is divisable by 10, otherwise return 'No' in a multiline output.
