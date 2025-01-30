/** Calculates the winner's rating after a meeting with an opponent
 * @param {number} winnerRate - The number of winner rating.
 * @param {number} loserRate - The number of loser rating.
 * @returns {number} The calculated value of new winner rating or a NaN.
 */

function calculateNewWinnerRate(winnerRate, loserRate) {
  let difference = winnerRate - loserRate;
  if (
    !isNaN(winnerRate) &&
    winnerRate >= 0 &&
    !isNaN(loserRate) &&
    loserRate >= 0
  ) {
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
    }
  }
  return NaN;
}

let winnerRate = 50;
let loserRate = 52.123;

console.log(Number(calculateNewWinnerRate(winnerRate, loserRate).toFixed(1)));
