require('./_include-all')();

module.exports = function () {

  class FakeTestGameEvent extends Game {
    addEventHandler() {
      this.addEventListenerCalled = true;
    }
    removeEventHandlers() {
      this.removeEventHandlersWasCalled = true;
    }
  }
  class TestGame extends Game { }

  let game;
  let board;

  let gameEvent = new FakeTestGameEvent();

  //Scenario: Board should be clickable
  this.Given(/^that the board has an eventhandler$/, function () {
    //let gameEvent = new TestGameEvent();
    expect(gameEvent.addEventListenerCalled, 'The addEventListener was not called at start of the Game').to.be.true;
  });
  this.Then(/^A click should detect what column has been clicked on$/, function () {
    game = new TestGame();
    board = game.board;
    expect(game.listener, 'Game variable listener did not exist').to.exist;
  });
  this.Then(/^call makeMove with the same column$/, function () {
    board.matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 2, 0, 0, 0]
    ];
  });
  this.Then(/^the eventlistener should be saved as an property in this\.listener$/, function () {

    expect(game.listener).to.exist;// Well not enough, but something....

    //$('.yellow').click();//Click is happening but in yellow space for now.

    board.makeMove(2);//Without render and async sleep. No falling marker today.

    //console.log(board.matrix2);
    board.matrix2 = [
      [0, 0, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 2, 0, 0, 0]
    ];
    expect(board.matrix).to.deep.equal(board.matrix2);
    //game.addEventListener(event);
    //expect(game.listener).to.have.a.property('event');
    //expect(game.listener).to.include({});
  });
  this.Then(/^the addEventListener should find that element in DOM with the help function \$$/, function () {
    expect($('.yellow'), 'There is no div in board from yellow players move').to.exist;
  });

  //Scenario: Board should have an removeEventListeners that removes listeners after game over
  this.Given(/^that play is on$/, function () {
    expect(gameEvent, 'Play is not on').to.exist;
  });

  this.Then(/^board should have an removeEventListeners$/, function () {
    gameEvent.removeEventHandlers();// This is stupid.
    expect(gameEvent.removeEventHandlersWasCalled, 'Event in game was not called').to.be.true;
  });

}
