require('./_include-all')();

module.exports = function () {

  class testGame extends Game {
    addEventHandler() {
      this.addEventHandlerCalled = true;
    }
    start() {
      this.startWasCalled = true;
    }
  }

  let game;
  //let board;

  //Scenario: The game should be playable 
  this.Given(/^that a new game is started$/, function () {
    game = new testGame();
    //board = game.board;
  });
  this.Then(/^start should be called$/, function () {
    expect(game.startWasCalled).to.be.true;
  });
  this.Then(/^addEventHandler should be called$/, function () {
    expect(game.addEventHandlerCalled).to.be.true;

  });
}