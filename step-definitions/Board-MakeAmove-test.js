require('./_include-all')();
require('./_async-helpers.js');

module.exports = function () {
}

class FakeBoard extends Board {
  wincheck() {

  }
}


class FakeGame extends Game {
  start() { this.board = new FakeBoard(this); }
}

let fakeGame = new FakeGame();




this.Given(/^that method returns null when PlayInProgress is set to true$/, function () {
  expect(fakeGame.board.PlayInProgress).to.be.true;
});

