require('./_include-all')();

module.exports = function () {

  class TestGame extends Game { }

  let game;
  let board;
  game = new TestGame();

  board = new Board(game);
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
  //wincheck didnt return an object with property value....
  this.Then(/^winCheck should return an object with property winner with value (\d+) or (\d+)$/, function (winner1, winner2) {
    expect(board.winCheck(),
      'winCheck didnt return an object with the property "winner" set to 1 or 2'
    ).to.include({ winner: +winner1 || +winner2 });
  });
  this.Then(/^an array with the winning positions$/, function () {
    let win = { winner: 1, combo: [[2, 0], [3, 0], [4, 0], [5, 0]] };
    expect(board.winCheck(),
      'The Player object was not equal to the expected'
    ).to.deep.equal(win);
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
    expect(board.winCheck(),
      'winCheck did return 1 o 2 as winner when it should be draw'
    ).to.not.include({ winner: 1 || 2 });
  });

  this.Then(/^it should return an object with property winner as “draw”$/, function () {
    expect(board.winCheck(),
      'winCheck did not return winner as draw'
    ).to.include({ winner: 'draw' });
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
    expect(board.winCheck(),
      'winCheck sould be false when there is no winner'
    ).to.be.false;
  });

}