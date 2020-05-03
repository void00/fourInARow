require('./_include-all')();

module.exports = function () {

  class TestGame extends Game { }

  let game;
  let board;

  game = new TestGame();
  board = game.board;


  this.Given(/^the game is over$/, function () {
    board.matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0]
    ];
  });


  this.Then(/^there should be a button with an eventListener added in element message$/, function () {

    expect($('.message')).to.be.an('button').that.includes('Spela igen');


  });



  this.Then(/^when the button is clicked start should be called$/, function () {

  });

}