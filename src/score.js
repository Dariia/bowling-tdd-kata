class BowlingGame {
  constructor() {
    this.score = 0;
    this.frameIndex = 0;
    this.currentRoll = 0;
    this.rolls = [];
  }

  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
    console.log('rolls', this.rolls);
    return this.rolls;
  }

  countScore() {
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike()) {
        this.score += 10 + this.strikeBonus();
        this.frameIndex++;
      } else if (this.isSpare()) {
        this.score += 10 + this.spareBonus();
        this.frameIndex += 2;
      } else {
        this.score += this.sumOfBallsInFrame();
        this.frameIndex += 2;
      }
    }
  }

  sumOfBallsInFrame() {
    return this.rolls[this.frameIndex] + this.rolls[this.frameIndex + 1];
  }

  spareBonus() {
    return this.rolls[this.frameIndex + 2];
  }

  strikeBonus() {
    return this.rolls[this.frameIndex + 1] + this.rolls[this.frameIndex + 2];
  }

  isStrike() {
    return this.rolls[this.frameIndex] === 10;
  }

  isSpare() {
    return this.rolls[this.frameIndex] + this.rolls[this.frameIndex + 1] === 10;
  }
}

export default BowlingGame;
