
require('./_include-all')();

module.exports = function () {
  let board;
  let game;

}
this.When(/^ new Board is created $/, function () {
  game = new Game();
  board = new Board();
});

this.Then(/^Game should be an instance of game$/, function () {
  expect(board.game).to.be.an.instanceof(Game)
});

this.Then(/^If game is not an instance of Game, it should give an error$/, function (expectError) {
  expect(() => new board({})).to.throw(
    Error, expectedError,
    'The constructor is not throwing correct error'
  );
});

