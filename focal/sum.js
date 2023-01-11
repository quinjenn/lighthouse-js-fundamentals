const args = process.argv;
args.splice(0, 2);
console.log(args);

function sum(num1, num2) {
  let answer = Number(num1) + Number(num2);
  console.log(answer);
  return answer;
}
sum(args[0], args[1]);
