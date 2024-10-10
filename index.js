//write your code here
//Q1
const reverseString = (str) => {
  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};
//console.log(reverseString("hello"));

//Q2
const reverseZigZag = (str) => {
  let output = "";
  for (let i = str.length - 1; i >= 0; i -= 2) {
    output += str[i].toUpperCase();
  }
  for (let i = str.length - 2; i >= 0; i -= 1) {
    output + str[i];
  }
  return output;
};

//console.log(reverseZigZag("hello"));
