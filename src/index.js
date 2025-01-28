function calculateNewWinnerRate(winnerRate, loserRate) {
  let difference = winnerRate - loserRate;
  switch (true) {
    case winnerRate === 0:
      return loserRate;
    case 0 >= difference >= -2:
      return (winnerRate += 2);
    case -2 > difference > -20:
      return winnerRate++;
    case -20 >= difference:
      return winnerRate;
    case difference > 0:
      return (loserRate - winnerRate + 5) / 3;
    default:
      return "Invalid input detected";
  }
}

let winnerRate = Number(prompt("Input winner rate: "));
let loserRate = Number(prompt("Input loser rate: "));

console.log(calculateNewWinnerRate(winnerRate, loserRate));
