require('./_include-all')();

module.exports = function () {
  let board;

  //Scenario: When a player has won
  this.Given(/^that a player has won$/, function () {
    // Write code here that turns the phrase above into concrete actions
  });
  this.Then(/^winCheck should return an object with property winner with value (\d+) or (\d+)$/, function (arg1, arg2) {
    // Write code here that turns the phrase above into concrete actions
  });
  this.Then(/^an array with the winning positions$/, function () {
    // Write code here that turns the phrase above into concrete actions
  });

  //Scenario: When the board is full and nowinner
  this.Given(/^that the board has no value of (\d+)$/, function (arg1) {
    //expect(game.).to.equal(game, 'game property is not equal');
    // Write code here that turns the phrase above into concrete actions
  });
  this.Given(/^no player has won$/, function () {
    // Write code here that turns the phrase above into concrete actions
  });
  this.Then(/^it should return an object with property winner as “draw”$/, function () {
    // Write code here that turns the phrase above into concrete actions
  });

  //Scenario: When game is in play
  this.Given(/^that there is no winner and board contains value (\d+)$/, function (arg1) {
    // Write code here that turns the phrase above into concrete actions
  });
  this.Then(/^it should return false$/, function () {
    // Write code here that turns the phrase above into concrete actions
  });
}