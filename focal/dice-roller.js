const args = process.argv[2];
let rollNumber = parseInt(args);

function rollDice() {
  return Math.floor(Math.random() * 7);
}
for (let i = 0; i < rollNumber; i++) console.log(rollDice());
