require('./_include-all')();

module.exports = function () {
  let board;
  let game;

}
this.When(/^ Game is created $/, function () {
  game = new Game();
  board = new board();
});

this.Then(/^Game should be an instance of game$/, function () {
  expect(board.game).to.be.an.instanceof(Game)
});

this.Then(/^If game is not an instance of Game, it should give an error$/, function (expectError) {
  expect(() => new board({})).to.throw(
    Error, expectedError,
  );
});