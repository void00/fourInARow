require('./_include-all')();

module.exports = function () {

  //Scenario: The Game class should have a method 
  //tellTurn that takes a player with value 1 or 2 if not error should be thrown 
  this.Given(/^player have value not equal to (\d+) or (\d+)$/, function (player1, player2) {

  });
  this.Then(/^if that player is passed to tellTurn should throw “player must be (\d+) or (\d+)”$/, function (value1, value2) {

  });

  //Scenario: When player has used it's turn second player should be reminded about it's turn
  this.Given(/^player (\d+) have made its draw and no winner or draw is announced$/, function (player1) {

  });
  this.Then(/^message element in the DOM should get the text “Guls tur…”$/, function () {

  });
}