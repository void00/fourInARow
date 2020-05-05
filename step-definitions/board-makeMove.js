require('./_include-all')();
require('./_async-helpers.js');

module.exports = function () {

  class FakeTestGame extends Game { }
  class FakeTestBoard extends Board {
    makeMove() {
      render();
      removeEventListener();
      sleep();
    }
    render() { fakeRender = true; return }
    removeEventListener() { fakeRemoveEventListener = true; return }
    sleep() { fakeSleep = 50; return }
  }

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
      [0, 0, 2, 1, 2, 1, 2],
      [0, 1, 2, 1, 2, 1, 2],
      [2, 2, 1, 2, 1, 2, 1],
      [2, 2, 1, 2, 1, 2, 1],
      [2, 2, 1, 2, 1, 2, 1]
    ];
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
    expect(board.playInProgress).to.be.true;//This only works when making draw or winning move
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
  this.Given(/^drops the marker in column$/, async function () {
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
  this.Given(/^check if column added a marker$/, function () {
    expect(board.matrix).to.be.deep.equal(board.matrixCompare);
  });
  this.Given(/^call render$/, function () {//Fake
  });
  this.Given(/^call sleep for pause (\d+) ms$/, function (sleep50, ) {//Fake
  });
  this.Given(/^check if column looks right$/, function () {
    //This check is done when marker is droped
  });
  this.Given(/^method winCheck should be called to look for winner \(for in a row\) or a draw$/, async function () {
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
    //board.render();
    expect(board.winCheck()).to.be.deep.equal({ winner: 1, combo: [[2, 0], [3, 0], [4, 0], [5, 0]] });
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
    expect(board.currentPlayer).to.be.equal(1);
    await board.makeMove(0);
    expect(board.currentPlayer).to.be.equal(2);
  });
  this.Then(/^the game tellTurn method is called with board currentPlayer as an argument$/, function () {
    expect($('.message').innerHTML).to.equal('Guls tur...');
  });
  this.Then(/^playInProgress property should be set to false$/, function () {
    expect(board.playInProgress).to.be.false
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
  this.Then(/^removeEventListener should be called$/, function () {//Fake
  });
  this.Then(/^winCheck is returning an object with property combo markWin should be called with winCheck as an argument$/, function () {
    //This check is done when makeMove is calling winCheck, in Scenario: "Player is droping marker in board"
  });
  this.Then(/^game over method should get winChecks winner property value as an argument$/, function () {
    let str = '<button type="button" class="again">Spela igen</button>';
    expect($('.message').innerHTML).to.be.equal('Röd vann!' + str || 'Gul vann!' + str || 'Det blev oavgjort!' + str);
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
    expect(await board.makeMove(0)).to.be.true;
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