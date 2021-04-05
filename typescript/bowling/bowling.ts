export class Bowling {
  rolls: number[] = [];
  constructor(rolls: number[]) {
    console.log(rolls);
    this.rolls = rolls;
  }
  roll() {}

  isSpare(first: number, second: number): [boolean, number] {
    var sum = first + second;
    if (sum == 10) return [false, sum];
    return [false, sum];
  }

  isStrike(roll: number): boolean {
    if (roll == 10) return true;
    return false;
  }

  keepCalculating(index: number, rolls: number[]): number {
    const frameScore = 0;
    while (index < 20 - index) {
      rolls[index];
    }
    return frameScore;
  }

  score() {
    var total: number = 0;
    var scores: number[] = [];
    if (this.rolls) {
      console.log(this.rolls.length);

      this.rolls.forEach((roll, index, rolls) => {
        // Frames
        console.log(roll);
        var frameScore = 0;
        if (index % 2 != 0) {
          // Keep calculating frame score until done
          const isSpare = this.isSpare(rolls[index - 1], rolls[index])[0];
          const isStrike = this.isStrike(rolls[index]);
          const res = this.isSpare(rolls[index - 1], rolls[index])[1];
          if (!isSpare && !isStrike) {
            total += res;
            scores.push(res);
          } else {
            frameScore = this.keepCalculating(index, rolls);
          }
        }
      });
    }
    return total;
  }
}
