require('./_include-all')();
require('./_async-helpers.js');

module.exports = function () {

  //removes annoying fixNoSuchWindowErrors on running npm test
  //(only works if you have required the _async-helpers.js file)
  this.After(() => fixNoSuchWindowError(driver));

  let game = new Game();
  let board = new Board(game);

  //Scenario: Player makes a move
  this.Given(/^That a player have made a move$/, function () {
  });
  this.Then(/^makeMove returns null when PlayInProgress is set to true$/, function () {
  });
  this.Then(/^makeMove should return false when column is full$/, function () {
  });
  this.Then(/^PlayInProgress is set to true$/, function () {
  });

  //Scenario: Player is droping marker in board
  this.Given(/^Player is making a valid move$/, function () {
  });
  this.Given(/^drops the marker in column$/, function () {
  });
  this.Given(/^check if column added a marker$/, function () {
  });
  this.Given(/^call render$/, function () {
  });
  this.Given(/^call sleep for pause (\d+) ms$/, function (sleep50, ) {
  });
  this.Given(/^check if column looks right$/, function () {
  });
  this.Given(/^method winCheck should be called to look for winner \(for in a row\) or a draw$/, function () {
  });

  //Scenario: When player made a move

  this.Given(/^no winner nor draw$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
  this.Then(/^the property currentPlayer are switched$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
  this.Then(/^the game tellTurn method is called with board currentPlayer as an argument$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
  this.Then(/^playInProgress property should be set to false$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });
  this.Then(/^the method makeMove should return true$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });










  //... other step definitions...

  //HOW TO HANDLE ASYNC METHODS:

  //expect - to.equal, to.not.equal, to.be, to.not.be etc:
  //Add async to the step function
  //and await before the async method whose 
  //return value you want to check
  /*
this.Then(/^some step$/, async function () {
expect(await board.makeMove(5)).to.be.true;
});*/

  //expect - to.throw, to.not.throw:
  //Add async to the step function
  //INSTEAD OF encapsulating the call to the method
  //you expect to throw (or not throw) in a function 
  //ADD await before it and .throwCheck after it
  //(only works if you have required the _async-helpers.js file)
  /*
  this.Then(/^some other step$/, async function () {
  expect(await board.makeMove(8).throwCheck).to.throw(
  Error,
  'column must be an integer between 0 and 6',
    'Expected makeMove to throw an error on out of bound column'
      );
    });*/

}