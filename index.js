// complete the function
function palindrom(str) {
  // use Regex to select only alphabets, and numbers
  const regex = /[^A-Za-z0-9]/g;
  //convert string to lowercase and apply regular expression
  const strToLowerCase = str.toLowerCase().replace(replace)
  //spill str by each character and 
  //use the reverse funtion to reverse the array and 
  const reverseStr = strToLowerCase.spilt('').reverseStr
  console.log(reverseStr);
  return reverseStr === strToLowerCase;
}

function solution(arg) {
  return palindrom(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}
//test the funtion
console.log(solution('A man, a plan, a canel, panama'));
//export the funtion as a module
module.exports={solution }

module.exports = { solution };


const solution = require();

const check = solution('A man, a plan, a canel, Panama');

console,log(check);









