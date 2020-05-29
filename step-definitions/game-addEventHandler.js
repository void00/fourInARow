require('./_include-all')();
require('./_async-helpers.js');
module.exports = function () {
  this.After(() => fixNoSuchWindowError(driver));
  class TestGame extends Game { }

  let game;
  let board;

  game = new TestGame();
  board = game.board;


  this.When(/^the game is over$/, async function () {
    board.matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0, 0],
      [1, 2, 0, 0, 0, 0, 0]
    ];
    await board.makeMove(0);
  });

  this.Then(/^there should be a button added in the message div$/, function () {
    expect($("div.message button"),
      'There should be a play again button'
    ).to.exist;
  });

  this.Then(/^button should have the class again$/, function () {
    expect($("div.message button.again"),
      'There should be a play again button with the css class again'
    ).to.exist;
  });

  this.Then(/^the button should have the text "([^"]*)"$/, function (expectedText) {
    let text = $("div.message button.again").innerHTML;
    expect(text).to.equal(expectedText,
      'Then button Play again is missing or have wrong text'
    );
  });

}