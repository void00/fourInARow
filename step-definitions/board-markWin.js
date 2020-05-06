require('./_include-all')();
require('./_async-helpers.js');

module.exports = function () {
  //removes annoying fixNoSuchWindowErrors on running npm test
  //(only works if you have required the _async-helpers.js file)
  this.After(() => fixNoSuchWindowError(driver));

  class FakeBoard extends Board {
    markWin(combo) {
      this.comboMarkWin = combo;
      return super.markWin(combo);
    }
  }

  let fakeBoard;

  //Scenario: When we have a winner
  this.When(/^Winning move is made$/, async function () {
    fakeBoard = new FakeBoard(new Game());
    fakeBoard.matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 0]
    ];
    await fakeBoard.makeMove(6);
  });
  this.Then(/^markwin should get combo as an Array from winCheck$/, function () {
    expect(fakeBoard.comboMarkWin,
      'The correct winning combo was not sent to markWin'
    ).to.deep.equal([[5, 3], [5, 4], [5, 5], [5, 6]]);
  });
  //Tag bort helper
  this.Then(/^find the winning position from combo in the div board$/, function () {
    //Reusing board from previous steps
    let $divs = $$('.board > div');
  });

  this.Then(/^add the class win to them$/, function () {
    expect(
      $divs[38].classList.contains('win') &&
      $divs[39].classList.contains('win') &&
      $divs[40].classList.contains('win') &&
      $divs[41].classList.contains('win')
      , 'The correct markers was not marked as win.'
    ).to.be.true;
    /*expect($('.board').children[37].className).to.not.equal('win');
    expect($('.board').children[38].className).to.equal('win');
    expect($('.board').children[39].className).to.equal('win');
    expect($('.board').children[40].className).to.equal('win');
    expect($('.board').children[41].className).to.equal('win');
    expect($('.board').children[0].className).to.not.equal('win');*/
  });

}