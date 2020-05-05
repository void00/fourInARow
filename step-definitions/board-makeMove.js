require('./_include-all')();
require('./_async-helpers.js');

module.exports = function () {

  //removes annoying fixNoSuchWindowErrors on running npm test
  //(only works if you have required the _async-helpers.js file)
  this.After(() => fixNoSuchWindowError(driver));

  let game = new Game();
  let board = new Board(game);

  /*
  this.Then(/^some step$/, async function () {
    expect(await board.makeMove(5)).to.be.true;
  });
  
  this.Then(/^some other step$/, async function () {
    expect(await board.makeMove(8).throwCheck).to.throw(
    Error,
    'column must be an integer between 0 and 6',
    'Expected makeMove to throw an error on out of bound column'
  );
});*/

  //Scenario: Player makes a move
  this.Given(/^That a player have made a move$/, async function () {
    board.matrix = [
      [0, 0, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];
    board.render();
    await board.makeMove(1);
  });
  this.Then(/^makeMove returns null when PlayInProgress is set to true$/, function () {
    expect(board.playInProgress).to.be.false;
  });
  this.Then(/^makeMove should return false when column is full$/, async function () {
    expect(await board.makeMove(3)).to.be.false;
  });
  this.Then(/^makeMove should throw "([^"]*)" if marker placed out of column$/, async function (err) {
    expect(await board.makeMove(8).throwCheck).to.throw(
      Error,
      err,
      'Expected makeMove to throw an error on out of bound column'
    );
  });
  this.Then(/^PlayInProgress is set to true$/, async function () {
    await board.makeMove(0);
    expect(board.playInProgress).to.be.true;
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
  this.Given(/^no winner nor draw$/, function () {
  });
  this.Then(/^the property currentPlayer are switched$/, function () {
  });
  this.Then(/^the game tellTurn method is called with board currentPlayer as an argument$/, function () {
  });
  this.Then(/^playInProgress property should be set to false$/, function () {
  });
  this.Then(/^the method makeMove should return true$/, function () {
  });

  //Scenario: Winner or draw is announced
  this.Given(/^The last draw is made$/, function () {
  });
  this.Then(/^removeEventListener should be called$/, function () {
  });
  this.Then(/^winCheck is returning an object with property combo markWin should be called with winCheck as an argument$/, function () {
  });
  this.Then(/^game over method should get winChecks winner property value as an argument$/, function () {
  });
  this.Then(/^makeMove should return true$/, function () {
  });

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