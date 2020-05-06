require('./_include-all')();

module.exports = function () {

  let game;

  this.Given(/^that a new Game is created$/, function () {
    game = new Game();
  });

  this.Then(/^it should create a new Board$/, function () {
    expect(game.board, 'Board is not an instance of board').to.be.an.instanceof(Board);
  });
  this.Then(/^if board get wrong instance Error "([^"]*)" should be thrown$/, function (err) {
    //expect(function () { new Board({}); }).to.throw(Error, err)
    expect(() => new Board({})).to.throw(Error, err);
  });

  this.Then(/^game should be of an instance of Game$/, function () {
    expect(game, 'Game is not an instance of game').to.be.an.instanceof(Game);
  });

  this.Then(/^it should create a matrix (\d+) x (\d+) with (\d+) in all cells$/, function (rows, columns, value) {
    value = +value; // converting all arguments to numbers
    rows = +rows;
    columns = +columns;
    expect(game.board.matrix.length, "wrong row length!").to.equal(rows); //checking row length 
    for (let row of game.board.matrix) {
      expect(row.length, "Wrong column length!").to.equal(columns); // checking column length
      for (let column of row) {
        expect(column, "wrong cell length!").to.equal(value); //checking value of cell
      }
    }
  });

  this.Then(/^currentPlayer should be (\d+)$/, function (expectedPlayer) {
    expectedPlayer = +expectedPlayer;
    expect(game.board.currentPlayer, "current player doesnt have expected value").to.equal(expectedPlayer);
  });

  this.Then(/^playInProgress should be false$/, function () {
    expect(game.board.playInProgress, "playinprogress should be false").to.be.false;
  });

  class FakeGame extends Game {
    tellTurn(player) {
      this.tellTurnCalledWithPlayer = 1;
    }
  }
  class FakeBoard extends Board {
    addEventListener() {
      this.addEventListenerWasCalled = true;
    }
    render() {
      this.renderWasCalled = true;
    }
    tellTurn(player) {
      this.tellTurnCalledWithPlayer = player;
    }
  }

  let fakeBoard;
  let fakeGame;

  this.Given(/^that a new board is created$/, function () {
    fakeGame = new FakeGame();
    fakeBoard = new FakeBoard(fakeGame);
  });

  this.Then(/^addEventListener should be called$/, function () {
    expect(fakeBoard.addEventListenerWasCalled, "addEventListener was not called").to.be.true;
  });

  this.Then(/^render should be called$/, function () {
    expect(fakeBoard.renderWasCalled, "render was not called").to.be.true;
  });

  this.Then(/^currentPlayer should be passed to tellTurn as an argument$/, function () {
    expect(fakeGame.tellTurnCalledWithPlayer, "The currentplayer was not passed correctly to tellTurn").to.equal(fakeBoard.currentPlayer);
  });

}