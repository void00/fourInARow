require('./_include-all')();

module.exports = function () {

  class TestGameEvent extends Game {
    addEventHandler() {
      this.addEventListenerCalled = true;
    }
  }
  class TestGame extends Game { }

  let game;
  let board;

  game = new TestGame();
  board = game.board;


  //Scenario: Board should be clickable
  this.Given(/^that the board has an eventhandler$/, function () {
    let gameEvent = new TestGameEvent();
    //let boardEvent = gameEvent.board;
    expect(gameEvent.addEventListenerCalled).to.be.true;
  });
  this.Then(/^A click should detect what coulmn has been clicked on$/, function () {

    expect(game.listener).to.exist;// Don't know how to check this
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

    expect(game.listener).to.exist;// Well not enugh, but some....

    $('.yellow').click();//Click is happening but in yellow space for now.

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
    //console.log('ETT: ' + board.matrix + ' TVÅ:' + board.matrix2);
    expect(board.matrix).to.deep.equal(board.matrix2);

    //game.addEventListener(event);
    //expect(game.listener).to.have.a.property('event');
    //expect(game.listener).to.include({});

  });
  this.Then(/^the addEventListener should find that element in DOM with the help function \$$/, function () {
    expect($('.yellow')).to.exist;
  });
}
