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
  //Scenario: The game should be playable 
  this.Given(/^that a new game is started$/, function () {
    game = new testGame();
  });
  this.Then(/^start should be called$/, function () {
    expect(game.startWasCalled,
      'Start was not called').to.be.true;
  });
  this.Then(/^addEventHandler should be called$/, function () {
    expect(game.addEventHandlerCalled,
      'addEventHandler was not called').to.be.true;

  });
}