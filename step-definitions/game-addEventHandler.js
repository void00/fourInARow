require('./_include-all')();

module.exports = function () {

  let game = new Game;
  let board = game.board;

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
    let trueMess = '' + $(".message");
    let shouldBe = 'class="again" > Spela igen</button ></div > ';
    console.log('trueMess: ' + trueMess + ' shouldBe:' + shouldBe);
    expect($(trueMess).to.be.equal(shouldBe));
  });




  this.Then(/^when the button is clicked start should be called$/, function () {
    let game = new Game;
  });

}
