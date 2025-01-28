/** Calculates the winner's rating after a meeting with an opponent
 * @param {number} winnerRate - The number of winner rating.
 * @param {number} loserRate - The number of loser rating.
 * @returns {(number|String)} The calculated value of new winner rating or a notification about incorrectly entered data.
 */

function calculateNewWinnerRate(winnerRate, loserRate) {
  let difference = winnerRate - loserRate;
  switch (true) {
    case winnerRate === 0:
      return loserRate;
    case difference >= 0 && difference <= 2:
      return (winnerRate += 2);
    case difference > 2 && difference < 20:
      return ++winnerRate;
    case difference >= 20:
      return winnerRate;
    case difference < 0:
      return (winnerRate += (loserRate - winnerRate + 5) / 3);
    default:
      return "Invalid input detected";
  }
}

let winnerRate, loserRate;

do {
  winnerRate = Number(prompt("Input winner rate: "));
} while (isNaN(winnerRate) && winnerRate >= 0);

do {
  loserRate = Number(prompt("Input loser rate: "));
} while (isNaN(loserRate) && loserRate >= 0);

console.log(Number(calculateNewWinnerRate(winnerRate, loserRate).toFixed(1)));
