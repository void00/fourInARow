require('./_include-all')();

module.exports = function () {

  class TestGame extends Game { }

  let game;
  let board;

  game = new TestGame();
  board = game.board;

  //Scenario: When a player has won
  this.Given(/^that a player has won$/, function () {
    board.matrix = [
      [0, 1, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [1, 1, 2, 1, 2, 1, 2],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];
  });
  this.Then(/^winCheck should return an object with property winner with value (\d+) or (\d+)$/, function (winner1, winner2) {
    expect(board.winCheck()).to.include({ winner: +winner1 || +winner2 });
  });
  this.Then(/^an array with the winning positions$/, function () {
    let win = { winner: 1, combo: [[2, 0], [3, 0], [4, 0], [5, 0]] };
    expect(board.winCheck()).to.deep.equal(win);
  });

  //Scenario: When the board is full and nowinner
  this.Given(/^that the board has no value of (\d+)$/, function (draw) {
    board.matrix = [
      [2, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 2],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];
  });
  this.Given(/^no player has won$/, function () {
    expect(board.winCheck()).to.not.include({ winner: 1 || 2 });
  });
  this.Then(/^it should return an object with property winner as “draw”$/, function () {
    expect(board.winCheck()).to.include({ winner: 'draw' });
  });

  //Scenario: When game is in play
  this.Given(/^that there is no winner and board contains value (\d+)$/, function (containsZero) {
    board.matrix = [
      [+containsZero, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 2],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];
  });
  this.Then(/^it should return false$/, function () {
    expect(board.winCheck()).to.be.false;
  });
}