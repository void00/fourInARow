require('./_include-all')();
require('./_async-helpers.js');

module.exports = function () {
}
this.Given(/^that method returns null when PlayInProgress is set to true$/, function () {
  expect(fakeGame.board.PlayInProgress).to.be.true;
});

