require('./_include-all')();

module.exports = function () {

  class TestGame extends Game { }

  let game;
  let board;

  game = new TestGame();
  board = game.board;

  //Scenario: The over method should take an argument with 'draw', 1 or 2
  this.Given(/^this is false$/, function () {

  });
  this.Then(/^an error should be thrown with ‘won must be “draw”, (\d+) or (\d+)’$/, function (value1, value2) {

  });

  //Scenario: If we have a winner 
  this.Given(/^we have a winner$/, function () {

  });
  this.Then(/^if won is (\d+) message element in DOM should read “Röd vann!”$/, function (winnerRed) {

  });
  this.Then(/^if won is (\d+) message element in DOM should read “Gul vann!”$/, function (winnerYellow) {

  });


  //Scenario: If game is over without winner 
  this.Given(/^the board is full and no winner is found$/, function () {
    board.matrix = [
      [2, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 2],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];

  });
  this.Then(/^if won is 'draw' message element in DOM should read “Det blev oavgjort!”$/, function () {

  });
  this.Then(/^there should be an button with the text “Spela igen” and class again added to the message element$/, function (string) {
  });
}