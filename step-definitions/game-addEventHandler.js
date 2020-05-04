require('./_include-all')();

module.exports = function () {

  let game = new Game;
  let board = game.board;



  this.Given(/^the game is over$/, function () {
    game.over(1);
  });

  this.Then(/^there should be a button with an eventListener added in element message$/, function () {
    expect($('.again')).to.exist;
  });


  this.Then(/^when the button is clicked start should be called$/, function () {
  });

}
