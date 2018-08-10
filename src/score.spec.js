import {expect} from 'chai';
import BowlingGame from './score';

describe('Bowling', () => {
  let game;

  function rollRounds(n, pins) {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
    game.countScore();
  }

  beforeEach(() => {
    game = new BowlingGame();
  });

  it('handles gutter game', () => {
    rollRounds(20, 0);
    expect(game.score).to.equal(0);
  });

  it('handles all ones', () => {
    rollRounds(20, 1);
    expect(game.rolls.length).to.equal(20);
  });

  it('handles spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollRounds(17, 0);
    expect(game.score).to.equal(16);
  });

  it('handles strike', () => {
    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollRounds(16, 0);
    expect(game.score).to.equal(24);
  });

  it('handles full game', () => {
    rollRounds(12, 10);
    expect(game.score).to.equal(300);
  });
});
