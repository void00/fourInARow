require('./_include-all')();
require('./_async-helpers.js');

module.exports = function () {
}



class FakeBoard extends Board {
  wincheck() {
    this.winCheckCalled = true;
  }
  render() {
    this.renderWasCalled = true;
  }
}



class FakeGame extends Game {
  start() { this.board = new FakeBoard(this); }
  tellTurn(player) {
    //tellTurnPlayer.push(player);
  }
}

let fakeGame = new FakeGame();





//this.Given(/^that method returns null when PlayInProgress is set to true$/, function () {
  //expect(fakeGame.board.PlayInProgress).to.be.true;
//});

