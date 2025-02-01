/** Calculates the winner's rating after a meeting with an opponent
 * @param {number} winnerRate - The number of winner rating.
 * @param {number} loserRate - The number of loser rating.
 * @returns {number} The calculated value of new winner rating or a NaN.
 */

function calculateNewWinnerRate(winnerRate, loserRate) {
  let difference = winnerRate - loserRate;
  if (!isNaN(difference) && winnerRate >= 0 && loserRate >= 0) {
    switch (true) {
      case winnerRate === 0:
        return loserRate.toFixed(1);
      case difference >= 0 && difference <= 2:
        return (winnerRate += 2).toFixed(1);
      case difference > 2 && difference < 20:
        return (++winnerRate).toFixed(1);
      case difference >= 20:
        return winnerRate.toFixed(1);
      case difference < 0:
        return (winnerRate += (loserRate - winnerRate + 5) / 3).toFixed(1);
    }
  }
  return NaN;
}

let winnerRate = 50.123;
let loserRate = 13.123;

console.log(Number(calculateNewWinnerRate(winnerRate, loserRate)));
