require('./_include-all')();

module.exports = function () {
  class FakeTestGame extends Game {
    start() {
      this.board = new FakeTestBoard(this);
    }
  }
  class FakeTestBoard extends Board {
    render() {
      fakeRender = true;
    }
  }

  let fakeRender;//Fake

  //Scenario: When a player makes a move
  this.Given(/^a player made a move$/, function () {
    new FakeTestGame();//Fake
  });

  this.Then(/^the render should be called$/, function () {
    expect(fakeRender).to.be.true;
  });
  this.Then(/^render should find board element with help function \$$/, function () {
    testGame = new Game();
    board = testGame.board;
    expect($('.board')).to.exist;
  });
  this.Then(/^render should make (\d+) div element in the board element containing a empty child div$/, function (value42) {
    expect($$('.board > div').length).to.equal(+value42);
    expect([...$$('.board > div')][0].innerHTML).to.equal('<div></div>');
  });

  this.Then(/^if the position in the matrix has a value of (\d+) "([^"]*)" the representative div in board should be set to class red$/, function (value1, playerRed) {
    board.matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 2, 0, 0, 0]
    ];
    board.render();
    expect($('.board').children[37].className).to.equal(playerRed);
  });
  this.Then(/^if the position in the matrix has a value of (\d+) "([^"]*)" the representative div in board should be set to class yellow$/, function (value2, playerYellow) {
    expect($('.board').children[38].className).to.equal(playerYellow);
  });

}