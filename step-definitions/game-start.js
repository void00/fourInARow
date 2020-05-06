require('./_include-all')();

module.exports = function () {

  class testGame extends Game { }

  let game;

  //Scenario: The start method should create a board 
  this.Given(/^a game is created and start is called$/, function () {
    game = new testGame(game,
      'game is not created and start hasnt been called');

  });
  this.Then(/^an instance of a board should be created$/, function () {
    expect(game.board).to.be.instanceof(Board,
      'game.board is not an instance of Board');
  });
  this.Then(/^it should have an property of the game instance$/, function () {
    expect(game.board).to.have.property('game');
  });
}