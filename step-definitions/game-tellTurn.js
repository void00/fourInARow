require('./_include-all')();

module.exports = function () {

  class testGame extends Game {
  }

  let game = new testGame();
  let board = game.board;
  let testCurrentPlayer;

  //Scenario: The Game class should have a method 
  //tellTurn that takes a player with value 1 or 2 if not error should be thrown 
  this.Given(/^player have value not equal to (\d+) or (\d+)$/, function (player1, player2) {
    testCurrentPlayer = 3;
  });
  this.Then(/^if that player is passed to tellTurn should throw “player must be (\d+) or (\d+)”$/, function (value1, value2) {
    //expect(function () { game.tellTurn(testCurrentPlayer); }).to.throw('player must be ' + value1 + ' or ' + value2);
    expect(() => game.tellTurn(testCurrentPlayer)).to.throw('player must be ' + value1 + ' or ' + value2);
  });

  //Scenario: When player has used it's turn second player should be reminded about it's turn
  //Matrix not necessary, just as an example of this scenario board setup.
  this.Given(/^player (\d+) have made its draw and no winner or draw is announced$/, function (player1) {
    board.matrix = [
      [0, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 2],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];
  });
  this.Then(/^message element in the DOM should get the text “Guls tur\.\.\.”$/, function () {
    game.tellTurn(2);
    expect($('.message').innerHTML).to.equal('Guls tur...');
  });

}