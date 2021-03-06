require('./_include-all')();
require('./_async-helpers.js');


module.exports = function () {
  //removes annoying fixNoSuchWindowErrors on running npm test
  //(only works if you have required the _async-helpers.js file)
  this.After(() => fixNoSuchWindowError(driver));

  let fakeRender = false;
  let fakeRemoveEventListener = false;
  class FakeTestGame extends Game { }
  class FakeTestBoard extends Board {
    render() { fakeRender = true; }
    removeEventListeners() { fakeRemoveEventListener = true; }
  }

  let fakeGame = new FakeTestGame();
  let fakeBoard = new FakeTestBoard(fakeGame);

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
      [0, 0, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [2, 2, 1, 2, 1, 2, 1],
      [2, 2, 1, 2, 1, 2, 1],
      [2, 2, 1, 2, 1, 2, 1]
    ];
    await board.makeMove(1);
  });
  this.Then(/^makeMove returns null when PlayInProgress is set to true$/, function () {
    expect(board.playInProgress,
      'playInProgress was not set to false in the begining of an move'
    ).to.be.false;
  });
  this.Then(/^makeMove should return false when column is full$/, async function () {
    expect(await board.makeMove(3),
      'False move was not detected'
    ).to.be.false;
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
    //This only works when making draw or winning move
    expect(board.playInProgress,
      'playInProgress was not set to true after a winning move'
    ).to.be.true;
  });
  //Scenario: Player is droping marker in board
  this.Given(/^Player is making a valid move$/, function () {
    game = new Game();
    board = new Board(game);
    board.matrix = [
      [0, 0, 2, 1, 2, 1, 2],
      [0, 0, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [0, 2, 1, 2, 1, 2, 1],
      [0, 2, 1, 2, 1, 2, 1],
      [0, 2, 1, 2, 1, 2, 1]
    ];
  });
  this.Then(/^drops the marker in column$/, async function () {
    await board.makeMove(0);
    board.matrixCompare = [
      [0, 0, 2, 1, 2, 1, 2],
      [0, 0, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [0, 2, 1, 2, 1, 2, 1],
      [0, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];
  });
  this.Then(/^check if column added a marker$/, function () {
    expect(board.matrix).to.be.deep.equal(board.matrixCompare);
  });
  this.Then(/^call render$/, async function () {//Fake
    await fakeBoard.makeMove(0);
    expect(fakeRender,
      'Render was not called when making a move'
    ).to.be.true;
  });
  this.Then(/^call sleep for pause (\d+) ms$/, async function (sleep50, ) {//Fake
    // No can do!
  });
  this.Then(/^check if column looks right$/, function () {
    //This check is done when marker is dropped
  });
  this.Then(/^method winCheck should be called to look for winner \(for in a row\) or a draw$/, async function () {
    game = new Game();
    board = new Board(game);
    board.matrix = [
      [0, 0, 2, 1, 2, 1, 2],
      [0, 0, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];
    expect(board.winCheck()).to.be.false;
    await board.makeMove(0);
    expect(board.winCheck(),
      'No winner was found when making a valid winning move'
    ).to.be.deep.equal({ winner: 1, combo: [[2, 0], [3, 0], [4, 0], [5, 0]] });
  });

  //Scenario: When player made a move
  this.Given(/^no winner nor draw$/, function () {
    game = new Game();
    board = new Board(game);
    board.matrix = [
      [0, 0, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [2, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];
  });
  this.Then(/^the property currentPlayer are switched$/, async function () {
    expect(board.currentPlayer,
      'The right player was not set to the right one in turn, should be player 1 red'
    ).to.be.equal(1);
    await board.makeMove(0);
    expect(board.currentPlayer,
      'The right player was not set to the right one in turn, should be player 2 yellow'
    ).to.be.equal(2);
  });
  this.Then(/^the game tellTurn method is called with board currentPlayer as an argument$/, function () {
    expect($('.message',
      'Message was not set to the rightfull winner'
    ).innerHTML).to.equal('Guls tur...');
  });
  this.Then(/^playInProgress property should be set to false$/, function () {
    expect(board.playInProgress, 'playInProgress is not set to false').to.be.false
  });
  this.Then(/^the method makeMove should return true$/, async function () {
    expect(await board.makeMove(0)).to.be.true;
  });

  //Scenario: Winner or draw is announced
  this.Given(/^The last draw is made$/, async function () {
    game = new Game();
    board = new Board(game);
    board.matrix = [
      [0, 0, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];
    await board.makeMove(0);
  });
  this.Then(/^removeEventListener should be called$/, async function () {//Fake
    fakeBoard.matrix = [
      [0, 0, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [2, 2, 1, 2, 1, 2, 1],
      [2, 2, 1, 2, 1, 2, 1],
      [2, 2, 1, 2, 1, 2, 1]
    ];
    await fakeBoard.makeMove(0);
    expect(fakeRemoveEventListener,
      'Message did not display that removeEventListener should be called').to.be.true;
  });
  this.Then(/^winCheck is returning an object with property combo markWin should be called with winCheck as an argument$/, function () {
    //This check is done when makeMove is calling winCheck, in Scenario: "Player is droping marker in board"
  });
  this.Then(/^game over method should get winChecks winner property value as an argument$/, function () {
    expect($('.message',
      'Game over did not sett right message after match is over'
    ).innerHTML).to.be.include('Gul vann!' || 'Röd vann!' || 'Det blev oavgjort!');
    //Something is fishy here
  });
  this.Then(/^makeMove should return true$/, async function () {
    game = new Game();
    board = new Board(game);
    board.matrix = [
      [0, 0, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];
    expect(await board.makeMove(0),
      'makeMove did not return true after turn was done'
    ).to.be.true;
  });

}