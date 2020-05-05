require('./_include-all')();

module.exports = function () {
  let board;
  let game;

  //Scenario: When we have a winner
  this.Given(/^Winning move is made$/, function () {
    game = new Game();
    board = new Board(game);
    board.matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1]
    ];
  });
  this.Then(/^markwin should get combo as an Array from winCheck$/, function () {
    let win = { winner: 1, combo: [[5, 3], [5, 4], [5, 5], [5, 6]] }
    expect(board.winCheck()).to.deep.equal(win);
    board.markWin(board.winCheck().combo);
  });
  this.Then(/^find the winning position from combo in the div board with helpermethod \$$/, function () {
    //How?
  });
  this.Then(/^add the class win to them$/, function () {
    expect($('.board').children[37].className).to.not.equal('win');
    expect($('.board').children[38].className).to.equal('win');
    expect($('.board').children[39].className).to.equal('win');
    expect($('.board').children[40].className).to.equal('win');
    expect($('.board').children[41].className).to.equal('win');
    expect($('.board').children[0].className).to.not.equal('win');
  });

}