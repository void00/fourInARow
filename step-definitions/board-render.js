require('./_include-all')();

<<<<<<< HEAD



//Scenario: When a player makes a move
this.Given(/^a player made a move$/, function () {

});


this.Then(/^the render should be called$/, function () {


});
this.Then(/^render should find board element with help function \$$/, function (allback) {

});
this.Then(/^render should make (\d+) div element in the board element containing a empty child div$/, function (value42) {

});
this.Then(/^if the position in the matrix has a value of (\d+) the representative div in board should be set to class red$/, function (playerRed) {

});
this.Then(/^if the position in the matrix has a value of (\d+) the representative div in board should be set to class yellow$/, function (playerYellow) {

});
=======
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
    let fakeGame = new FakeTestGame();//Fake
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
    board.matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 2, 0, 0, 0]
    ];
    expect($$('.board > div').length).to.equal(+value42);
    expect([...$$('.board > div')][41].innerHTML).to.equal('<div></div>');
  });
  this.Then(/^if the position in the matrix has a value of (\d+) the representative div in board should be set to class red$/, function (playerRed) {
    expect($('.red')).to.exist;
    expect([...$$('.board > div')][38].innerHTML).to.equal('<div></div>');
  });
  this.Then(/^if the position in the matrix has a value of (\d+) the representative div in board should be set to class yellow$/, function (playerYellow) {
    expect($('.yellow')).to.exist;
  });
>>>>>>> 0ccf28c8711019a822606f9497457e9a49d8ae9e
}