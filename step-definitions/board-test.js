
require('./_include-all')();

module.exports = function () {
  let board;
  let game;

}
this.When(/^ new Board is created $/, function () {
  game = new Game();
  board = new board();
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

this.Then(/^board positions should have the value of (d+)$/, function (value) {
  value = +value;
  expect(board.matrix)to.deep.equal([

  ]

  )
));

this.Then(/^ CurrentPlayer is set to (d+)$/)

this.Then(/^)