/*winCheck()
Ska titta på hela brädet och kontrollera om någon har 
vunnit eller om det har blivit oavgjort.

Om någon har vunnit ska metoden returnera ett objekt. 
Objektet ska ha egenskaperna winner satt till vinnaren (1 eller 2), 
samt combo - en array av 4 arrayer, där varje inre array är en position 
på brädet [radnummer, kolumnnummer].

Om det har blivit oavgjort ska metoden returnera ett objekt med 
egenskapen winner satt till strängen “draw”.

Om ingen har vunnit och det inte har blivit oavgjort ska metoden 
returnera värdet false.

  Scenario: When a player has won
    Given that a player has won
    Then winCheck should return an object with property winner with value 1 or 2
    And an array with the winning positions

  Scenario: When the board is full and nowinner
    Given that the board has no value of 0
    And no player has won
    Then it should return an object with property winner as “draw”

  Scenario: When game is in play
    Given that there is no winner and board contains value 0
    Then it should return false
*/

require('./_include-all')();

module.exports = function () {

  class testGame extends Game { }

  let game;
  let board;

  game = new testGame();
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